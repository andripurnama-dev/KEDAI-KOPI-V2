# IMPLEMENTATION BRIEF

## A. Project Identity
- Nama proyek: Portofolio Kedai Kopi Senja
- Tujuan: Website portofolio yang menampilkan profil, karya/proyek, dan kontak Kedai Kopi Senja.
- Repository: belum ada (folder lokal PORTOPOLIO-DEMO)
- Status: baru dibuat

## B. Objective
Website 4 halaman (Home, Profil, Project, Contact), modern, hangat, responsif desktop/HP, dengan animasi halus.

## C. Existing Conditions
Folder hanya berisi AGENTS.md. Tidak ada kode sebelumnya.

## D. Requirements
- Navigasi sticky + menu hamburger di HP.
- Hero dengan ilustrasi SVG dan animasi uap kopi.
- Animasi scroll-reveal, hover kartu, counter angka.
- Halaman Project: filter kategori (Semua, Menu, Event, Kolaborasi) berfungsi.
- Halaman Contact: formulir dengan validasi sisi klien. Pengiriman SIMULASI (belum ada backend).
- Dark/light mode dengan toggle, tersimpan di localStorage.
- Hormati prefers-reduced-motion.

## E. Pages and User Flow
index.html -> profil.html -> project.html -> kontak.html (semua tertaut dari navbar; CTA Home menuju Project dan Kontak).

## F. Technical Direction
HTML, CSS, JavaScript statis tanpa build. Ilustrasi SVG buatan sendiri di assets/img. Tanpa API key.

## G. UI/UX Direction
- Warna: espresso #1F1612, krem #F7F0E6, karamel #C77D35, senja #E8A547, terakota #B4532A.
- Font: Playfair Display (judul), DM Sans (isi) via Google Fonts, dengan fallback serif/sans-serif.
- Gaya: hangat, editorial, sudut membulat, banyak ruang kosong.

## H. Implementation Tasks
1. CSS dan JS bersama. 2. Empat halaman HTML. 3. Ilustrasi SVG. 4. Uji tautan dan responsif.

## I. Testing Requirements
Semua tautan navbar/footer valid; filter proyek; validasi form; menu mobile; toggle tema; tampilan 360px, 768px, 1280px.

## J. Acceptance Criteria
Seluruh halaman terbuka tanpa error konsol, semua tombol berfungsi, tampilan rapi di HP dan desktop.

## K. Restrictions
Jangan commit/push tanpa persetujuan. Jangan klaim form terkirim sungguhan. Data proyek/testimoni adalah CONTOH (placeholder) yang harus diganti dengan data asli.
