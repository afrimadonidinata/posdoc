# Pengenalan Ekosistem

## Arsitektur cloud-first

Rumbia POS menggunakan layanan cloud sebagai sumber data utama. Web Portal
Manajemen di `app.rumbia.id` dan aplikasi kasir mengakses data organisasi yang
sama sehingga perubahan transaksi, katalog, dan stok dapat terlihat lintas
cabang secara real-time.

!!! warning "Koneksi internet wajib"
    Rumbia POS tidak menyediakan offline mode. Jika koneksi terputus, jangan
    mengulangi transaksi tanpa memeriksa status transaksi terakhir agar tidak
    terjadi duplikasi. Hubungi administrator atau dukungan bila status tidak
    jelas.

## Komponen utama

### Web Portal Manajemen

Web portal digunakan Owner dan tim manajemen untuk mengatur profil bisnis,
cabang, pajak/PKP, produk, harga, inventaris, laporan, serta integrasi
Commerce Storefront dan marketplace.

### Aplikasi Kasir

Aplikasi Mobile App atau Web POS digunakan staf operasional untuk membuka shift,
memproses pesanan, menerima pembayaran, mencetak struk, dan menutup shift.
Tampilan dan tindakan yang tersedia mengikuti role serta cabang pengguna.

### Sinkronisasi antar-cabang

Setiap produk, stok, dan transaksi memiliki konteks organisasi serta cabang.
Pastikan cabang aktif benar sebelum melakukan penyesuaian stok atau transaksi.
Perubahan stok dari kanal marketplace mengikuti aturan pemotongan FIFO yang
dikonfigurasi bisnis.

## Urutan konfigurasi yang disarankan

1. Buat profil bisnis dan cabang.
2. Tetapkan pengguna dan role RBAC.
3. Atur pajak, metode pembayaran, dan printer.
4. Impor atau buat kategori, produk, varian, dan harga.
5. Siapkan gudang, saldo awal, dan batas stok minimum.
6. Hubungkan Storefront atau marketplace jika diperlukan.
7. Lakukan transaksi uji sebelum operasional penuh.
