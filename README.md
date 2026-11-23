# Abdullah Baqir Arrafii — Online CV

Website CV online statis (HTML, CSS, Vanilla JavaScript) dwibahasa (**English & Bahasa Indonesia**) dengan gaya *humanized editorial*, **Dark & Light Mode**, **Carousel Album Lapangan (5 foto)**, responsif di semua ukuran layar, mendukung cetak/simpan PDF (`@media print`), serta siap langsung dideploy ke **GitHub Pages** tanpa proses *build*.

## Struktur File

```text
├── index.html          # Halaman utama CV
├── css/
│   └── style.css       # Desain humanized (Light & Dark Mode) + gaya khusus print PDF
├── js/
│   ├── i18n.js         # Konten lengkap Bahasa Inggris & Indonesia
│   └── app.js          # Bahasa, dark/light mode, latar foto, carousel, filter & lightbox
├── assets/
│   ├── CV_Abdullah_Baqir_Arrafii.pdf   # File CV PDF asli untuk diunduh langsung
│   └── img/                            # 5 foto lapangan & komunitas (termasuk PLN Batam KITRANS)
└── .nojekyll           # Memastikan GitHub Pages menyajikan file statis apa adanya
```

## Cara Deploy ke GitHub Pages

1. Buat repository baru di GitHub (misalnya `cv` atau `<username>.github.io`).
2. Upload/push seluruh isi folder ini ke branch `main`:
   ```bash
   git init
   git add .
   git commit -m "Initial online CV"
   git branch -M main
   git remote add origin https://github.com/<username>/<nama-repo>.git
   git push -u origin main
   ```
3. Buka **Settings → Pages** pada repository GitHub Anda.
4. Pada bagian **Build and deployment**, pilih:
   - **Source**: `Deploy from a branch`
   - **Branch**: `main` dan folder `/ (root)`
5. Klik **Save**, tunggu 1–2 menit, dan website CV Anda sudah live!
