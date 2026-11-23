/**
 * Website copy in English and Bahasa Indonesia.
 * Everything here is taken from CV_Abdullah_Baqir_Arrafii.pdf,
 * written in plain first-person language.
 */

window.CV_DATA = {
  en: {
    meta: {
      title: "Abdullah Baqir Arrafii (Rafii) — Electrical Engineer",
      description:
        "Abdullah Baqir Arrafii — electrical engineer working on substation automation, SCADA and IED/RTU configuration. Based in Jakarta."
    },
    nav: {
      about: "About",
      experience: "Experience",
      projects: "Projects",
      photos: "Photos",
      skills: "Skills",
      education: "Education",
      contact: "Contact",
      download: "Download CV",
      themeToDark: "Switch to dark mode",
      themeToLight: "Switch to light mode"
    },
    hero: {
      greeting: "Hi, I'm",
      roles: "Electrical Engineer · SCADA & Automation · IT Enthusiast",
      lead:
        "I work on substation protection and automation. Most days that means configuring IEDs and RTUs and getting field devices to talk to SCADA over IEC 61850, IEC 60870-5-101/104, DNP3 or Modbus.",
      location: "Jakarta, Indonesia",
      download: "Download CV (PDF)",
      contact: "Get in touch"
    },
    scenes: [
      {
        img: "assets/img/substation-yard.jpg",
        pos: "center 22%",
        label: "150kV substation",
        caption: "Outside a 150kV substation."
      },
      {
        img: "assets/img/pln-batam.jpg",
        pos: "center 46%",
        label: "PLN Batam",
        caption: "At PLN Batam, Unit Business KITRANS."
      },
      {
        img: "assets/img/panel-commissioning.jpg",
        pos: "center 34%",
        label: "Panel work",
        caption: "Working at the protection panels, laptop on my lap."
      },
      {
        img: "assets/img/control-desk.jpg",
        pos: "28% 22%",
        label: "Control room",
        caption: "At the control room desk."
      },
      {
        img: "assets/img/gdg-jakarta.jpg",
        pos: "center 22%",
        label: "GDG Jakarta",
        caption: "At a Google Developer Group Jakarta event."
      }
    ],
    about: {
      title: "About me",
      paragraphs: [
        "I studied Electrical Engineering at Kalimantan Institute of Technology in Balikpapan and graduated in 2024.",
        "Since then I've worked as a 150kV substation operator, then as a field service engineer, and now as an automation engineer at PT Dielektrika Persada Teknik in Tangerang. My work is mostly IED and RTU configuration, protection relay testing, and SCADA integration.",
        "On the side I'm moving more into IT: Linux, servers, databases and some programming. It helps a lot when the substation side and the IT side need to work together."
      ],
      photoCaption: "At the control room desk."
    },
    experience: {
      title: "Experience",
      present: "Present",
      items: [
        {
          role: "Automation Engineer",
          company: "PT Dielektrika Persada Teknik",
          location: "Tangerang, Indonesia",
          period: "Feb 2026 – Present",
          bullets: [
            "Configuring and programming Ingeteam IEDs and RTUs, using control logic based on IEC 61131.",
            "Integrating IEC 61850, Modbus RTU/TCP and DNP3 for telemetry between field instruments and control/SCADA systems."
          ]
        },
        {
          role: "Field Service Engineer",
          company: "PT Permata Prima Enjiniring Elektrika",
          location: "Jakarta, Indonesia",
          period: "Jul 2025 – Dec 2025",
          bullets: [
            "Configured CYG protection and automation control in a Substation Automation System.",
            "Helped with protection relay testing and commissioning.",
            "Worked with IEC 61850, IEC 101/104, DNP and RTU configuration.",
            "Did point-to-point testing and SCADA integration."
          ]
        },
        {
          role: "150kV Substation Operator",
          company: "PT Permata Prima Enjiniring Elektrika",
          location: "Jakarta, Indonesia",
          period: "Aug 2024 – Jun 2025",
          bullets: [
            "Worked with the engineers during protection relay commissioning at the 50MW Solar Plant (IKN).",
            "Built \"ADL & ASRI\", an internal tool for data logging and real-time alerts.",
            "Operated 150kV substation equipment under standard procedures.",
            "Did routine inspections on CB SF6, LA counters and the protection system.",
            "Coordinated with PLN UP2B on power maneuvering and energy monitoring."
          ]
        },
        {
          role: "Continuous Improvement Analyst (Internship)",
          company: "PT Trakindo Utama",
          location: "Balikpapan, Indonesia",
          period: "Oct 2023 – Feb 2024",
          bullets: [
            "Built an IoT forklift load monitor with pressure transmitter sensors to stop over-capacity lifting.",
            "Made the HMI and database to show the sensor readings.",
            "Helped install and wire the sensors on the forklifts.",
            "Worked with the IT team on the network side of the project."
          ]
        },
        {
          role: "SCADA Section (Internship)",
          company: "PT PLN UP2B Kalimantan (Persero)",
          location: "Balikpapan, Indonesia",
          period: "Jul 2023",
          bullets: [
            "Connected an Acuvim power meter to the RTU SCADA at Harapan Baru substation.",
            "Learned secondary injection testing for protection systems.",
            "Got hands-on with Modbus and SCADA protocols."
          ]
        }
      ]
    },
    projects: {
      title: "Projects",
      items: [
        {
          name: "ASRI",
          fullName: "Alerting System & Realtime Information",
          period: "2024 – 2025",
          desc: "Real-time alerts, made while I was a substation operator."
        },
        {
          name: "ADHL",
          fullName: "Automatic Data & Historical Logging",
          period: "2024 – 2025",
          desc: "Automatic data and history logging, built alongside ASRI."
        },
        {
          name: "Binary Input Module Firmware",
          fullName: "Firmware Development of Binary Input Module for Substation",
          period: "2023",
          desc: ""
        },
        {
          name: "Anomaly Chatbot",
          fullName: "Anomaly Chatbot for Substation Monitoring System",
          period: "2023",
          desc: ""
        }
      ]
    },
    photos: {
      title: "Photos",
      intro: "A few pictures from work and events.",
      prev: "Previous photo",
      next: "Next photo",
      open: "Open photo"
    },
    skills: {
      title: "Skills",
      groups: [
        { title: "SCADA & Automation", items: ["Power monitoring", "Equipment protection", "Grid integration", "RTU configuration"] },
        { title: "Industrial protocols", items: ["IEC 61850", "Modbus RTU/TCP", "MQTT", "HTTP APIs"] },
        { title: "Software", items: ["C/C++", "Python", "NodeJS", "NextJS", "Node-RED", "InfluxDB", "Grafana", "MinIO S3", "PostgreSQL"] },
        { title: "Electronics", items: ["ESP32", "Arduino", "Atmel", "PCB design", "Sensor integration"] },
        { title: "Tools", items: ["IEDScout", "KEPServerEX", "KiCad", "Proteus", "Wiring diagram analysis", "Fault analysis"] },
        { title: "IT", items: ["GNU Linux", "Windows Server", "Wireshark", "SSH", "PuTTY", "WinSCP", "Git", "Nano", "CLI"] }
      ],
      softTitle: "Soft skills",
      soft: [
        { title: "Problem solving", desc: "Finding faults in power system protection and automation." },
        { title: "Adaptability", desc: "Picking things up quickly while moving from electrical (OT) work into IT." },
        { title: "Communication", desc: "Coordinating between technical vendors and clients (PLN/users)." },
        { title: "Project management", desc: "Keeping up with commissioning deadlines and reports." }
      ]
    },
    education: {
      title: "Education",
      school: "Kalimantan Institute of Technology",
      degree: "Bachelor of Electrical Engineering · GPA 3.33/4.00",
      period: "Sep 2020 – Jun 2024",
      location: "Balikpapan, Indonesia",
      coursework: "Courses in electronics, automation, middleware integration and embedded systems.",
      certTitle: "Certificates",
      certs: [
        { name: "Basic JavaScript Programming", issuer: "Dicoding Indonesia (remote)", period: "2024 – 2027" },
        { name: "Programming With C", issuer: "Dicoding Indonesia (remote)", period: "2024 – 2027" },
        { name: "Node-RED Fundamentals", issuer: "FlowFuse (remote)", period: "2025" }
      ]
    },
    contact: {
      title: "Contact",
      text: "Email or WhatsApp is the easiest way to reach me.",
      email: "Email",
      phone: "Phone / WhatsApp",
      location: "Location",
      locationValue: "Jakarta, Indonesia",
      whatsapp: "Chat on WhatsApp",
      download: "Download CV (PDF)"
    },
    footer: {
      top: "Back to top"
    }
  },

  id: {
    meta: {
      title: "Abdullah Baqir Arrafii (Rafii) — Electrical Engineer",
      description:
        "Abdullah Baqir Arrafii — electrical engineer di bidang otomasi gardu induk, SCADA, serta konfigurasi IED/RTU. Tinggal di Jakarta."
    },
    nav: {
      about: "Tentang",
      experience: "Pengalaman",
      projects: "Proyek",
      photos: "Foto",
      skills: "Keahlian",
      education: "Pendidikan",
      contact: "Kontak",
      download: "Unduh CV",
      themeToDark: "Ganti ke mode gelap",
      themeToLight: "Ganti ke mode terang"
    },
    hero: {
      greeting: "Halo, saya",
      roles: "Electrical Engineer · SCADA & Automation · IT Enthusiast",
      lead:
        "Saya bekerja di bidang proteksi dan otomasi gardu induk. Sehari-hari kebanyakan mengonfigurasi IED dan RTU, lalu menyambungkan perangkat lapangan ke SCADA lewat IEC 61850, IEC 60870-5-101/104, DNP3 atau Modbus.",
      location: "Jakarta, Indonesia",
      download: "Unduh CV (PDF)",
      contact: "Hubungi saya"
    },
    scenes: [
      {
        img: "assets/img/substation-yard.jpg",
        pos: "center 22%",
        label: "Gardu induk 150kV",
        caption: "Di depan gardu induk 150kV."
      },
      {
        img: "assets/img/pln-batam.jpg",
        pos: "center 46%",
        label: "PLN Batam",
        caption: "Di PLN Batam, Unit Business KITRANS."
      },
      {
        img: "assets/img/panel-commissioning.jpg",
        pos: "center 34%",
        label: "Di panel",
        caption: "Kerja di depan panel proteksi, laptop di pangkuan."
      },
      {
        img: "assets/img/control-desk.jpg",
        pos: "28% 22%",
        label: "Ruang kontrol",
        caption: "Di meja ruang kontrol."
      },
      {
        img: "assets/img/gdg-jakarta.jpg",
        pos: "center 22%",
        label: "GDG Jakarta",
        caption: "Ikut acara Google Developer Group Jakarta."
      }
    ],
    about: {
      title: "Tentang saya",
      paragraphs: [
        "Saya kuliah Teknik Elektro di Institut Teknologi Kalimantan, Balikpapan, dan lulus tahun 2024.",
        "Setelah lulus saya sempat jadi operator gardu induk 150kV, lalu field service engineer, dan sekarang automation engineer di PT Dielektrika Persada Teknik, Tangerang. Pekerjaan saya kebanyakan konfigurasi IED dan RTU, pengujian rele proteksi, dan integrasi SCADA.",
        "Di luar itu saya mulai banyak belajar sisi IT: Linux, server, database, dan sedikit pemrograman. Ini cukup membantu ketika sisi gardu induk dan sisi IT harus saling terhubung."
      ],
      photoCaption: "Di meja ruang kontrol."
    },
    experience: {
      title: "Pengalaman",
      present: "Sekarang",
      items: [
        {
          role: "Automation Engineer",
          company: "PT Dielektrika Persada Teknik",
          location: "Tangerang, Indonesia",
          period: "Feb 2026 – Sekarang",
          bullets: [
            "Mengonfigurasi dan memprogram IED Ingeteam serta RTU dengan logika kontrol berbasis IEC 61131.",
            "Mengintegrasikan IEC 61850, Modbus RTU/TCP dan DNP3 untuk telemetri antara instrumen lapangan dan sistem kontrol/SCADA."
          ]
        },
        {
          role: "Field Service Engineer",
          company: "PT Permata Prima Enjiniring Elektrika",
          location: "Jakarta, Indonesia",
          period: "Jul 2025 – Des 2025",
          bullets: [
            "Mengonfigurasi CYG Protection and Automation Control pada Substation Automation System.",
            "Membantu pengujian dan commissioning rele proteksi.",
            "Menangani IEC 61850, IEC 101/104, DNP, dan konfigurasi RTU.",
            "Melakukan uji point-to-point dan integrasi SCADA."
          ]
        },
        {
          role: "Operator Gardu Induk 150kV",
          company: "PT Permata Prima Enjiniring Elektrika",
          location: "Jakarta, Indonesia",
          period: "Agu 2024 – Jun 2025",
          bullets: [
            "Ikut mendampingi engineer saat commissioning rele proteksi di PLTS 50MW (IKN).",
            "Membuat \"ADL & ASRI\", alat internal untuk pencatatan data dan peringatan real-time.",
            "Mengoperasikan peralatan gardu induk 150kV sesuai prosedur.",
            "Inspeksi rutin CB SF6, LA counter, dan sistem proteksi.",
            "Koordinasi dengan PLN UP2B untuk manuver daya dan pemantauan energi."
          ]
        },
        {
          role: "Continuous Improvement Analyst (Magang)",
          company: "PT Trakindo Utama",
          location: "Balikpapan, Indonesia",
          period: "Okt 2023 – Feb 2024",
          bullets: [
            "Membuat sistem pemantau beban forklift berbasis IoT dengan sensor pressure transmitter, supaya forklift tidak mengangkat melebihi kapasitas.",
            "Membuat HMI dan database untuk menampilkan hasil bacaan sensor.",
            "Ikut memasang dan menyambungkan sensor di forklift.",
            "Bekerja sama dengan tim IT untuk jaringan proyeknya."
          ]
        },
        {
          role: "Bagian SCADA (Magang)",
          company: "PT PLN UP2B Kalimantan (Persero)",
          location: "Balikpapan, Indonesia",
          period: "Jul 2023",
          bullets: [
            "Menyambungkan powermeter Acuvim ke RTU SCADA di Gardu Induk Harapan Baru.",
            "Belajar teknik pengujian secondary injection untuk sistem proteksi.",
            "Praktik langsung komunikasi Modbus dan protokol SCADA."
          ]
        }
      ]
    },
    projects: {
      title: "Proyek",
      items: [
        {
          name: "ASRI",
          fullName: "Alerting System & Realtime Information",
          period: "2024 – 2025",
          desc: "Peringatan real-time, dibuat waktu saya jadi operator gardu induk."
        },
        {
          name: "ADHL",
          fullName: "Automatic Data & Historical Logging",
          period: "2024 – 2025",
          desc: "Pencatatan data dan riwayat otomatis, dibuat bersama ASRI."
        },
        {
          name: "Firmware Modul Binary Input",
          fullName: "Firmware Development of Binary Input Module for Substation",
          period: "2023",
          desc: ""
        },
        {
          name: "Anomaly Chatbot",
          fullName: "Anomaly Chatbot for Substation Monitoring System",
          period: "2023",
          desc: ""
        }
      ]
    },
    photos: {
      title: "Foto",
      intro: "Beberapa foto dari pekerjaan dan acara.",
      prev: "Foto sebelumnya",
      next: "Foto berikutnya",
      open: "Buka foto"
    },
    skills: {
      title: "Keahlian",
      groups: [
        { title: "SCADA & Otomasi", items: ["Power monitoring", "Proteksi peralatan", "Grid integration", "Konfigurasi RTU"] },
        { title: "Protokol industri", items: ["IEC 61850", "Modbus RTU/TCP", "MQTT", "HTTP APIs"] },
        { title: "Software", items: ["C/C++", "Python", "NodeJS", "NextJS", "Node-RED", "InfluxDB", "Grafana", "MinIO S3", "PostgreSQL"] },
        { title: "Elektronika", items: ["ESP32", "Arduino", "Atmel", "Desain PCB", "Integrasi sensor"] },
        { title: "Alat", items: ["IEDScout", "KEPServerEX", "KiCad", "Proteus", "Analisis wiring diagram", "Analisis gangguan"] },
        { title: "IT", items: ["GNU Linux", "Windows Server", "Wireshark", "SSH", "PuTTY", "WinSCP", "Git", "Nano", "CLI"] }
      ],
      softTitle: "Soft skills",
      soft: [
        { title: "Problem solving", desc: "Mencari penyebab gangguan pada proteksi dan otomasi sistem tenaga listrik." },
        { title: "Adaptasi", desc: "Cepat belajar saat pindah dari pekerjaan kelistrikan (OT) ke IT." },
        { title: "Komunikasi", desc: "Koordinasi antara vendor teknis dan klien (PLN/user)." },
        { title: "Manajemen proyek", desc: "Mengejar tenggat commissioning dan laporan dokumentasi." }
      ]
    },
    education: {
      title: "Pendidikan",
      school: "Institut Teknologi Kalimantan",
      degree: "S1 Teknik Elektro · IPK 3.33/4.00",
      period: "Sep 2020 – Jun 2024",
      location: "Balikpapan, Indonesia",
      coursework: "Mata kuliah elektronika, otomasi, integrasi middleware, dan sistem tertanam.",
      certTitle: "Sertifikat",
      certs: [
        { name: "Basic JavaScript Programming", issuer: "Dicoding Indonesia (online)", period: "2024 – 2027" },
        { name: "Programming With C", issuer: "Dicoding Indonesia (online)", period: "2024 – 2027" },
        { name: "Node-RED Fundamentals", issuer: "FlowFuse (online)", period: "2025" }
      ]
    },
    contact: {
      title: "Kontak",
      text: "Paling gampang hubungi saya lewat email atau WhatsApp.",
      email: "Email",
      phone: "Telepon / WhatsApp",
      location: "Lokasi",
      locationValue: "Jakarta, Indonesia",
      whatsapp: "Chat WhatsApp",
      download: "Unduh CV (PDF)"
    },
    footer: {
      top: "Kembali ke atas"
    }
  }
};
