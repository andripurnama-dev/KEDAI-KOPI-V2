<div align="center">

# ☕ Kedai Kopi Senja

### Setiap cangkir punya cerita senja.

Website portofolio modern, hangat, dan responsif untuk **Kedai Kopi Senja**.

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-Buka_Website-C77D35?style=for-the-badge)](https://andripurnama-dev.github.io/KEDAI-KOPI-V2/)
[![Repo](https://img.shields.io/badge/GitHub-KEDAI--KOPI--V2-1F1612?style=for-the-badge&logo=github)](https://github.com/andripurnama-dev/KEDAI-KOPI-V2)

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Responsive](https://img.shields.io/badge/Responsive-Desktop%20%7C%20Tablet%20%7C%20HP-E8A547)
![No Build](https://img.shields.io/badge/Build-Tidak_perlu-3F7D4E)

**[🚀 Lihat Demo](https://andripurnama-dev.github.io/KEDAI-KOPI-V2/)** · **[📂 Kode Sumber](https://github.com/andripurnama-dev/KEDAI-KOPI-V2)**

</div>

---

## ✨ Tentang Proyek

Portofolio satu situs untuk memperkenalkan Kedai Kopi Senja: kisahnya, karyanya, dan cara menghubunginya. Dibuat dengan HTML, CSS, dan JavaScript murni, jadi ringan, cepat, dan mudah dikembangkan.

## 📄 Halaman

| Halaman | File | Isi |
|---|---|---|
| 🏠 **Home** | `index.html` | Hero beranimasi, statistik, layanan, sorotan project |
| 👥 **Profil** | `profil.html` | Kisah, nilai, perjalanan (timeline), dan tim |
| 🖼️ **Project** | `project.html` | Galeri karya dengan **filter kategori** |
| ✉️ **Contact** | `kontak.html` | Formulir dengan **validasi** dan info kontak |

## 🎯 Fitur Utama

- 🌗 **Mode terang & gelap**, pilihan tersimpan di browser
- 📱 **Responsif** untuk desktop, tablet, dan HP (menu hamburger di layar kecil)
- 🎬 **Animasi halus**: uap kopi, hero melayang, scroll-reveal, angka berhitung, hover kartu
- 🔎 **Filter project** per kategori (Menu, Event, Kolaborasi)
- 📝 **Validasi formulir** langsung di sisi klien
- ♿ **Aksesibilitas**: skip link, label form, fokus jelas, dan menghormati `prefers-reduced-motion`
- 🎨 **Ilustrasi SVG** buatan sendiri, tanpa aset berlisensi

## 🎨 Desain

| Elemen | Pilihan |
|---|---|
| Warna | Espresso `#1F1612` · Krem `#F7F0E6` · Karamel `#C77D35` · Senja `#E8A547` · Terakota `#B4532A` |
| Judul | Playfair Display |
| Isi | DM Sans |
| Gaya | Hangat, editorial, sudut membulat |

## 🗂️ Struktur Folder

```
KEDAI-KOPI-V2/
├── index.html
├── profil.html
├── project.html
├── kontak.html
├── css/
│   └── style.css
├── js/
│   └── main.js
├── assets/
│   └── img/          # ilustrasi SVG
├── IMPLEMENTATION-BRIEF.md
└── AGENTS.md
```

## 🚀 Menjalankan Secara Lokal

Tidak perlu instalasi atau build.

```bash
git clone https://github.com/andripurnama-dev/KEDAI-KOPI-V2.git
cd KEDAI-KOPI-V2

# pilih salah satu
python -m http.server 5500     # lalu buka http://localhost:5500
npx serve .
```

Atau buka `index.html` langsung di browser, atau gunakan ekstensi **Live Server** di VS Code.

## 🌐 Publikasi dengan GitHub Pages

Link demo di atas akan aktif setelah GitHub Pages dinyalakan:

1. Buka repo → **Settings** → **Pages**
2. Pada **Build and deployment**, pilih **Deploy from a branch**
3. Pilih branch **main** dan folder **/ (root)**, lalu **Save**
4. Tunggu 1–2 menit, situs tersedia di `https://andripurnama-dev.github.io/KEDAI-KOPI-V2/`

## 📌 Catatan

- Teks bertanda **"(contoh)"** (alamat, email, jam buka, nama tim, daftar project) adalah data placeholder. Ganti dengan data asli.
- Formulir kontak masih **simulasi**: validasi berjalan, tetapi pesan belum dikirim ke server.
- Gambar saat ini ilustrasi SVG; foto asli bisa ditaruh di `assets/img` dan dipasang menggantikannya.
- File desain Figma: [Kedai Kopi Senja - Portofolio](https://www.figma.com/design/4Z8BFvUGmS9I1Vt0F9OQxK) *(desain masih dalam proses)*.

## 🛣️ Rencana Pengembangan

- [ ] Ganti ilustrasi dengan foto asli
- [ ] Hubungkan formulir ke layanan email/backend
- [ ] Lengkapi desain Figma dan sinkronkan dengan kode
- [ ] Tambah halaman menu lengkap

---

<div align="center">

Dibuat dengan ☕ dan sedikit cahaya senja.

</div>
