# 🖨️ LY PRINTING - Landing Page Website Percetakan

Website landing page profesional, interaktif, dan estetik bertema warna **Soft Cloud Blue & Clean White (Biru Awan & Putih Bersih)** untuk usaha percetakan **LY PRINTING**. Dilengkapi dengan fitur pemesanan otomatis langsung ke WhatsApp, simulasi kalkulator harga instan, dan live chat preview.

---

## ✨ Fitur Unggulan

1. **Desain Modern, Bersih & Estetik (Cloud Blue & White Theme)**:
   - Tampilan bersih, cerah, dan ramah dengan palet warna Biru Awan (`#0284c7`, `#0ea5e9`, `#38bdf8`), kartu putih bersih (`#ffffff`), dan aksen soft sky tint.
   - Glassmorphism putih elegan, kartu produk terangkat halus, dan tipografi modern (*Plus Jakarta Sans*).
   - Tampilan sepenuhnya responsif untuk smartphone, tablet, dan desktop.

2. **Formulir Pemesanan Otomatis ke WhatsApp**:
   - Form detail pesanan: Nama, No WA, Alamat/Kota, Pilihan Produk (Spanduk, Undangan, Kartu Nama, Stiker, Brosur, Nota, Kaos/Merchandise, dll.), Bahan, Ukuran, Jumlah, Kesiapan Desain, dan Finishing khusus.
   - **Live WhatsApp Chat Preview**: Pembeli dapat melihat langsung format pesan rapi di gelembung chat sebelum dikirim.
   - Tombol kirim langsung membuka aplikasi WhatsApp (di HP) atau WhatsApp Web (di PC/Laptop) dengan pesan yang sudah terisi otomatis.

3. **Kalkulator Simulasi Biaya Cetak (Price Estimator)**:
   - Hitung perkiraan harga spanduk berdasarkan panjang × lebar, kartu nama per box, stiker A3+, undangan, hingga brosur.
   - Kalkulasi otomatis diskon volume untuk pemesanan jumlah besar.
   - Tombol **"Order Estimasi Ini →"** untuk langsung menyalin hasil hitungan ke form pemesanan WhatsApp.

4. **Katalog Produk & Portofolio Interaktif**:
   - Tab filter portofolio (Spanduk & Banner, Undangan Mewah, Kartu Nama, Stiker Kemasan).
   - Setiap kartu produk dilengkapi tombol cepat *"Pesan Ini"* yang otomatis memilih produk tersebut di formulir.

5. **Floating WhatsApp Widget & Quick Popover**:
   - Tombol WhatsApp mengambang di pojok kanan bawah dengan efek denyut halus (*pulse animation*).
   - Popover interaktif berisi jalan pintas chat instan untuk konsultasi desain atau cek harga.

6. **Alur Pemesanan 4 Langkah, Testimoni Klien & FAQ Accordion**:
   - Menjelaskan proses dari pengiriman file, approval/ACC desain, cetak, hingga pengiriman barang.

---

## 🚀 Cara Menjalankan Website Secara Lokal

Anda dapat membuka file `index.html` secara langsung di browser Anda, atau menggunakan server lokal:

### Opsi 1: Klik Langsung
Cukup klik ganda (double-click) pada file `index.html` di File Explorer.

### Opsi 2: Menggunakan Server Lokal (Python / Node.js)
```bash
# Menggunakan Python:
python -m http.server 3000

# Atau menggunakan Node / npx:
npx serve
```
Kemudian buka browser di `http://localhost:3000`.

---

## ⚙️ Cara Mengubah Nomor WhatsApp & Pengaturan

Untuk mengganti nomor WhatsApp tujuan pemesanan dengan nomor WhatsApp resmi Anda:
1. Buka file [`script.js`](file:///d:/dika/WEBSITE%20DIKA/WEB%20PERCETAKAN/script.js).
2. Di bagian paling atas, ubah nilai `whatsappNumber`:
   ```javascript
   const LY_CONFIG = {
     storeName: "LY PRINTING",
     whatsappNumber: "6289505057376", // Nomor WhatsApp Resmi LY Printing
     businessHours: "08.00 - 21.00 WIB",
     email: "order@lyprinting.com"
   };
   ```
3. **Alamat Workshop**:
   - Tangkit Lama, RT 12, Kec. Sungai Gelam, Kab. Muaro Jambi, Jambi (Setelah Masjid Nurul Iman).
   - **Sistem Pembayaran**: Melayani COD (Bayar di Tempat) dan pengiriman ke luar kota.
   - **Sosial Media**: Instagram `@_lyprinting`, TikTok `@lyprinting`.
3. Simpan file (`Ctrl + S`), dan nomor WhatsApp pada formulir serta tombol chat otomatis terbarui!
