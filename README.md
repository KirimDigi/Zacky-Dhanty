# Undangan Pernikahan Digital - Zacky & Dhanty

Proyek ini berisi file statis undangan pernikahan digital untuk pasangan **Zacky & Dhanty** yang telah dikustomisasi sepenuhnya.

---

## 🛠️ Kustomisasi yang Telah Dilakukan

1. **Informasi Mempelai**:
   - Mempelai Pria: **Mustafa Zacky, S.M** (Putra Kedua dari Bapak Karta & Ibu Nurlelah) - Instagram: [@mstfazky](https://www.instagram.com/mstfazky/)
   - Mempelai Wanita: **Novia Rahmadhanty** (Putri Pertama dari Bapak Budi Santoso & Ibu Rahmi Dhuhasari) - Instagram: [@dhantynrr](https://www.instagram.com/dhantynrr/)
2. **Jadwal & Lokasi**:
   - Hari & Tanggal: **Sabtu, 01 Agustus 2026**
   - Waktu: Akad (10:00 WIB) & Resepsi (13:00 WIB - Selesai)
   - Tempat: **Kediaman Mempelai Wanita** (Jalan Pelopor 1 No.56 Rt 01 Rw 08 Kel. Curug Kec. Bojongsari Kota Depok Jawa Barat)
   - Google Maps: [https://maps.app.goo.gl/rTLKr77zbpJViBLRA?g_st=ac](https://maps.app.goo.gl/rTLKr77zbpJViBLRA?g_st=ac)
3. **Fitur Dinamis Nama Tamu**:
   - Mendukung parameter URL Hash `to` (contoh: `index.html#to=Kamu%20%26%20Dia` akan otomatis menampilkan nama **Kamu & Dia** pada cover undangan secara dinamis).
4. **Branding & Favicon**:
   - Seluruh logo branding dan favicon browser telah diganti menggunakan **KirimDigi.ico**.
   - Footer telah diperbarui dengan promosi **KirimDigi** beserta tautan media sosial WhatsApp, Instagram, dan TikTok.
5. **Hadiah Digital (RSVP & Kado)**:
   - Rekening Kado: **BCA 6365137734 a/n Novia Rahmadhanty**.
   - Pengiriman Kado Fisik ditujukan ke alamat Kediaman Mempelai Wanita.
6. **Lagu Latar (BGM)**:
   - Lagu latar default menggunakan file lokal: `Rossa feat. Afgan - Kamu Yang Kutunggu _ Official Music Video.mp3`.
7. **Palet Warna**:
   - Mengubah seluruh tema warna bawaan menjadi **Cool Gray `#829AB8`**.

---

## 📝 Integrasi Google Sheets (RSVP & Ucapan)

Undangan ini menggunakan integrasi **Google Apps Script** untuk menyimpan RSVP dan ucapan tamu secara *real-time* ke Google Sheets.

### Cara Menghubungkan Google Sheets:
1. Buka spreadsheet target Anda: [Spreadsheet Zacky & Dhanty](https://docs.google.com/spreadsheets/d/1jqx8h0zj0by833KcM-Ii-e6EfeEdos-vnvgVFWiVnfY/edit).
2. Di menu atas spreadsheet, buka **Extensions (Ekstensi)** -> **Apps Script**.
3. Buka file **[GoogleAppsScript.js](GoogleAppsScript.js)** di folder proyek ini, salin seluruh isi kodenya, dan tempelkan ke editor Apps Script.
4. Simpan proyek Apps Script tersebut.
5. Klik **Deploy (Terapkan)** -> **New deployment (Penerapan baru)**:
   - Jenis: **Web app (Aplikasi web)**.
   - Execute as: **Me (email Anda)**.
   - Who has access: **Anyone (Siapa saja)**.
   - Klik **Deploy**.
6. Salin **Web app URL** yang muncul (berakhiran `/exec`).
7. Buka file **`index.html`**, cari variabel `const APPS_SCRIPT_URL` pada bagian paling bawah halaman, lalu ganti nilai defaultnya dengan URL Web App Anda:
   ```javascript
   const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycb..._.../exec';
   ```
8. Simpan file `index.html`, lalu lakukan git commit & push ulang.
