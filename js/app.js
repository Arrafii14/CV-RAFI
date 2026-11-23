/**
 * Small script for the CV site:
 * language switch, dark/light mode, rotating photos (every 2 seconds),
 * photo carousel, lightbox and the mobile menu.
 */

(function () {
  "use strict";

  var PHOTO_INTERVAL = 2000;

  var state = {
    lang: initialLang(),
    theme: document.documentElement.getAttribute("data-theme") || "light",
    heroIndex: 0,
    heroLayer: "A",
    heroPaused: false,
    slideIndex: 0,
    slidePaused: false
  };

  var heroTimer = null;
  var slideTimer = null;

  function $(id) {
    return document.getElementById(id);
  }

  var el = {
    header: $("siteHeader"),
    themeToggle: $("themeToggle"),
    menuToggle: $("menuToggle"),
    mobileMenu: $("mobileMenu"),
    heroBgA: $("heroBgA"),
    heroBgB: $("heroBgB"),
    heroPhotoWrap: $("heroPhotoWrap"),
    heroPhoto: $("heroPhoto"),
    heroCaption: $("heroCaption"),
    heroDots: $("heroDots"),
    aboutText: $("aboutText"),
    experienceList: $("experienceList"),
    projectList: $("projectList"),
    carousel: $("carousel"),
    carouselViewport: $("carouselViewport"),
    carouselTrack: $("carouselTrack"),
    carouselDots: $("carouselDots"),
    carouselCount: $("carouselCount"),
    carouselPrev: $("carouselPrev"),
    carouselNext: $("carouselNext"),
    skillList: $("skillList"),
    softList: $("softList"),
    certList: $("certList"),
    lightbox: $("lightbox"),
    lightboxClose: $("lightboxClose"),
    lightboxImg: $("lightboxImg"),
    lightboxCap: $("lightboxCap"),
    year: $("year")
  };

  function initialLang() {
    var q = new URLSearchParams(location.search).get("lang");
    if (q === "en" || q === "id") return q;
    try {
      var saved = localStorage.getItem("cv_lang");
      if (saved === "en" || saved === "id") return saved;
    } catch (e) { }
    return (navigator.language || "en").toLowerCase().indexOf("id") === 0 ? "id" : "en";
  }

  function t() {
    return window.CV_DATA[state.lang] || window.CV_DATA.en;
  }

  function esc(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function lookup(obj, path) {
    return path.split(".").reduce(function (o, k) {
      return o && o[k] !== undefined ? o[k] : null;
    }, obj);
  }

  /* ---------- Theme ---------- */
  function setTheme(theme, save) {
    state.theme = theme;
    document.documentElement.setAttribute("data-theme", theme);
    var label = theme === "dark" ? t().nav.themeToLight : t().nav.themeToDark;
    el.themeToggle.setAttribute("aria-label", label);
    el.themeToggle.title = label;
    if (save) {
      try { localStorage.setItem("cv_theme", theme); } catch (e) { }
    }
  }

  /* ---------- Text ---------- */
  function renderText() {
    var d = t();
    document.documentElement.lang = state.lang;
    document.title = d.meta.title;
    var meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", d.meta.description);

    document.querySelectorAll("[data-i18n]").forEach(function (node) {
      var v = lookup(d, node.getAttribute("data-i18n"));
      if (typeof v === "string") node.textContent = v;
    });

    document.querySelectorAll(".lang-btn").forEach(function (b) {
      b.classList.toggle("active", b.getAttribute("data-lang") === state.lang);
    });

    el.aboutText.innerHTML = d.about.paragraphs.map(function (p) {
      return "<p>" + esc(p) + "</p>";
    }).join("");

    el.experienceList.innerHTML = d.experience.items.map(function (job) {
      return (
        '<article class="entry">' +
        '<div class="entry-date">' + esc(job.period) + "</div>" +
        "<div>" +
        '<h3 class="entry-title">' + esc(job.role) + "</h3>" +
        '<p class="entry-sub">' + esc(job.company) + ' <span class="loc">· ' + esc(job.location) + "</span></p>" +
        "<ul>" + job.bullets.map(function (b) { return "<li>" + esc(b) + "</li>"; }).join("") + "</ul>" +
        "</div>" +
        "</article>"
      );
    }).join("");

    el.projectList.innerHTML = d.projects.items.map(function (p) {
      var sub = p.fullName !== p.name ? '<p class="entry-sub">' + esc(p.fullName) + "</p>" : "";
      var desc = p.desc ? '<p class="entry-text">' + esc(p.desc) + "</p>" : "";
      return (
        '<article class="entry">' +
        '<div class="entry-date">' + esc(p.period) + "</div>" +
        '<div><h3 class="entry-title">' + esc(p.name) + "</h3>" + sub + desc + "</div>" +
        "</article>"
      );
    }).join("");

    el.skillList.innerHTML = d.skills.groups.map(function (g) {
      return (
        '<div class="entry">' +
          '<div class="entry-label">' + esc(g.title) + "</div>" +
          '<p class="entry-text">' + esc(g.items.join(", ")) + "</p>" +
        "</div>"
      );
    }).join("");

    el.softList.innerHTML = d.skills.soft.map(function (s) {
      return (
        '<div class="entry">' +
          '<div class="entry-label">' + esc(s.title) + "</div>" +
          '<p class="entry-text">' + esc(s.desc) + "</p>" +
        "</div>"
      );
    }).join("");

    el.certList.innerHTML = d.education.certs.map(function (c) {
      return (
        '<div class="entry">' +
        '<div class="entry-date">' + esc(c.period) + "</div>" +
        '<div><h3 class="entry-title">' + esc(c.name) + '</h3><p class="entry-text">' + esc(c.issuer) + "</p></div>" +
        "</div>"
      );
    }).join("");

    el.carouselPrev.setAttribute("aria-label", d.photos.prev);
    el.carouselNext.setAttribute("aria-label", d.photos.next);

    renderHeroDots();
    showHero(false);
    renderCarousel();
    setTheme(state.theme, false);
  }

  /* ---------- Hero photos ---------- */
  function renderHeroDots() {
    el.heroDots.innerHTML = t().scenes.map(function (s, i) {
      return '<button type="button" class="dot" data-hero="' + i + '" aria-label="' + esc(s.label) + '"></button>';
    }).join("");
  }

  function showHero(animate) {
    var scene = t().scenes[state.heroIndex];
    var bg = "url('" + scene.img + "')";

    if (animate) {
      var next = state.heroLayer === "A" ? el.heroBgB : el.heroBgA;
      var prev = state.heroLayer === "A" ? el.heroBgA : el.heroBgB;
      next.style.backgroundImage = bg;
      next.classList.add("is-active");
      prev.classList.remove("is-active");
      state.heroLayer = state.heroLayer === "A" ? "B" : "A";

      el.heroPhoto.classList.add("fading");
      setTimeout(function () {
        el.heroPhoto.src = scene.img;
        el.heroPhoto.style.objectPosition = scene.pos;
        el.heroPhoto.classList.remove("fading");
      }, 150);
    } else {
      (state.heroLayer === "A" ? el.heroBgA : el.heroBgB).style.backgroundImage = bg;
      el.heroPhoto.src = scene.img;
      el.heroPhoto.style.objectPosition = scene.pos;
    }

    el.heroPhoto.alt = scene.caption;
    el.heroCaption.textContent = scene.caption;
    el.heroDots.querySelectorAll(".dot").forEach(function (dot, i) {
      dot.classList.toggle("active", i === state.heroIndex);
    });
  }

  function startHero() {
    clearInterval(heroTimer);
    heroTimer = setInterval(function () {
      if (state.heroPaused || !el.lightbox.hidden) return;
      state.heroIndex = (state.heroIndex + 1) % t().scenes.length;
      showHero(true);
    }, PHOTO_INTERVAL);
  }

  /* ---------- Carousel ---------- */
  function renderCarousel() {
    var d = t();
    el.carouselTrack.innerHTML = d.scenes.map(function (s, i) {
      return (
        '<figure class="carousel-slide">' +
        '<button type="button" data-open="' + i + '" aria-label="' + esc(d.photos.open) + '">' +
        '<img src="' + s.img + '" alt="' + esc(s.caption) + '" style="object-position:' + s.pos + '" loading="lazy" />' +
        "</button>" +
        "<figcaption><strong>" + esc(s.label) + "</strong>" + esc(s.caption) + "</figcaption>" +
        "</figure>"
      );
    }).join("");

    el.carouselDots.innerHTML = d.scenes.map(function (s, i) {
      return '<button type="button" class="dot" data-slide="' + i + '" aria-label="' + esc(s.label) + '"></button>';
    }).join("");

    goTo(state.slideIndex);
  }

  function goTo(i) {
    var n = t().scenes.length;
    state.slideIndex = (i + n) % n;
    el.carouselTrack.style.transform = "translateX(-" + state.slideIndex * 100 + "%)";
    el.carouselCount.textContent = state.slideIndex + 1 + " / " + n;
    el.carouselDots.querySelectorAll(".dot").forEach(function (dot, k) {
      dot.classList.toggle("active", k === state.slideIndex);
    });
  }

  function startSlides() {
    clearInterval(slideTimer);
    slideTimer = setInterval(function () {
      if (state.slidePaused || !el.lightbox.hidden) return;
      goTo(state.slideIndex + 1);
    }, PHOTO_INTERVAL);
  }

  /* ---------- Lightbox ---------- */
  function openLightbox(i) {
    var s = t().scenes[i];
    el.lightboxImg.src = s.img;
    el.lightboxImg.alt = s.caption;
    el.lightboxCap.textContent = s.caption;
    el.lightbox.hidden = false;
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    el.lightbox.hidden = true;
    document.body.style.overflow = "";
  }

  /* ---------- Events ---------- */
  function bind() {
    el.themeToggle.addEventListener("click", function () {
      setTheme(state.theme === "dark" ? "light" : "dark", true);
    });

    document.querySelectorAll(".lang-btn").forEach(function (b) {
      b.addEventListener("click", function () {
        var lang = b.getAttribute("data-lang");
        if (lang === state.lang) return;
        state.lang = lang;
        try { localStorage.setItem("cv_lang", lang); } catch (e) { }
        renderText();
      });
    });

    el.heroDots.addEventListener("click", function (e) {
      var b = e.target.closest("[data-hero]");
      if (!b) return;
      state.heroIndex = Number(b.getAttribute("data-hero"));
      showHero(true);
      startHero();
    });

    el.heroPhotoWrap.addEventListener("mouseenter", function () { state.heroPaused = true; });
    el.heroPhotoWrap.addEventListener("mouseleave", function () { state.heroPaused = false; });

    el.carouselPrev.addEventListener("click", function () { goTo(state.slideIndex - 1); startSlides(); });
    el.carouselNext.addEventListener("click", function () { goTo(state.slideIndex + 1); startSlides(); });

    el.carousel.addEventListener("click", function (e) {
      var dot = e.target.closest("[data-slide]");
      if (dot) {
        goTo(Number(dot.getAttribute("data-slide")));
        startSlides();
        return;
      }
      var open = e.target.closest("[data-open]");
      if (open) openLightbox(Number(open.getAttribute("data-open")));
    });

    el.carousel.addEventListener("mouseenter", function () { state.slidePaused = true; });
    el.carousel.addEventListener("mouseleave", function () { state.slidePaused = false; });

    var startX = 0;
    var startY = 0;
    el.carouselViewport.addEventListener("touchstart", function (e) {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    }, { passive: true });
    el.carouselViewport.addEventListener("touchend", function (e) {
      var dx = e.changedTouches[0].clientX - startX;
      var dy = e.changedTouches[0].clientY - startY;
      if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) {
        goTo(state.slideIndex + (dx < 0 ? 1 : -1));
        startSlides();
      }
    }, { passive: true });

    el.lightboxClose.addEventListener("click", closeLightbox);
    el.lightbox.addEventListener("click", function (e) {
      if (e.target === el.lightbox) closeLightbox();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && !el.lightbox.hidden) closeLightbox();
    });

    el.menuToggle.addEventListener("click", function () {
      var open = el.menuToggle.getAttribute("aria-expanded") === "true";
      el.menuToggle.setAttribute("aria-expanded", String(!open));
      el.mobileMenu.hidden = open;
      el.header.classList.toggle("menu-open", !open);
    });
    el.mobileMenu.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        el.menuToggle.setAttribute("aria-expanded", "false");
        el.mobileMenu.hidden = true;
        el.header.classList.remove("menu-open");
      });
    });

    window.addEventListener("scroll", onScroll, { passive: true });
  }

  function onScroll() {
    var y = window.scrollY;
    el.header.classList.toggle("scrolled", y > 40);

    var current = "";
    document.querySelectorAll("main section[id]").forEach(function (sec) {
      if (y >= sec.offsetTop - 120) current = sec.id;
    });
    document.querySelectorAll(".nav-links a").forEach(function (a) {
      a.classList.toggle("active", a.getAttribute("href") === "#" + current);
    });
  }

  /* ---------- Start ---------- */
  t().scenes.forEach(function (s) {
    var img = new Image();
    img.src = s.img;
  });

  el.year.textContent = new Date().getFullYear();
  renderText();
  bind();
  startHero();
  startSlides();
  onScroll();
})();
