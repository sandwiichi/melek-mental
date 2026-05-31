# Melek Mental 🧠✨

Platform kesehatan mental — AI Journaling, Konseling Psikolog, dan Komunitas.

## 🚀 Cara Deploy

### Opsi 1: GitHub Pages (Gratis)
1. Buat repo baru di GitHub: `https://github.com/udennnn/melek-mental`
2. Upload semua file:
   ```bash
   cd melek-mental
   git init
   git add .
   git commit -m "first commit"
   git branch -M main
   git remote add origin https://github.com/udennnn/melek-mental.git
   git push -u origin main
   ```
3. Di repo Settings → Pages → pilih branch `main`, folder `/ (root)`
4. Selesai! Web bisa diakses di `https://udennnn.github.io/melek-mental`

### Opsi 2: Netlify (Super Gampang)
1. Download folder `melek-mental/`
2. Buka https://app.netlify.com → Drag & drop foldernya
3. Done! Langsung kebagian URL gratis: `melek-mental.netlify.app`

### Opsi 3: Vercel
```bash
npm install -g vercel
cd melek-mental
vercel
```

## 📁 Struktur Project
```
melek-mental/
├── index.html      # Halaman utama (Landing)
├── masuk.html      # Halaman login/register
├── css/
│   └── style.css   # Custom styles
├── js/
│   └── script.js   # JavaScript
└── README.md       # Panduan ini
```

## 🛠️ Tech Stack
- HTML5 + Tailwind CSS (CDN)
- Google Fonts (Plus Jakarta Sans)
- Material Icons
- Pure Vanilla JS

---
Dibuat dari desain Google Stitch 🧵 → dibangun oleh Latif 🧸🔨
