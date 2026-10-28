# User Guide Rumbia POS

Selamat datang di dokumentasi resmi **Rumbia POS**, platform Point of Sale
berbasis cloud untuk mengelola penjualan, inventaris, operasional cabang, dan
laporan bisnis dari satu ekosistem.

Rumbia POS dirancang untuk empat vertikal bisnis:

- **Ritel**: barcode, varian ukuran/warna, retur, dan peringatan stok minimum.
- **F&B**: denah meja, modifier, Kitchen Display System (KDS), bill splitting,
  dan QR Self-Order.
- **Jasa & Layanan**: penjualan item non-inventaris tanpa pencatatan stok fisik.
- **Pendidikan/Pelatihan**: kuota batch kelas, pendaftaran siswa, dan bundling
  kit materi fisik.

## Pahami ekosistemnya

Rumbia POS adalah **100% cloud-first**. Data transaksi dan stok disinkronkan
secara real-time antar-cabang melalui koneksi internet. Tidak ada mode offline;
pastikan perangkat memiliki koneksi yang stabil sebelum memulai operasional.

| Area | Digunakan oleh | Fungsi utama |
| --- | --- | --- |
| [Web Portal](getting-started/overview.md) (`app.rumbia.id`) | Owner, Super Admin, Store Admin, Store Supervisor | Pengaturan bisnis, katalog, inventaris, integrasi, dan laporan |
| Aplikasi Kasir (Mobile App/Web POS) | Cashier, Server/Waiter, Kitchen Staff, Sales Associate, Stock Staff | Shift, transaksi, pembayaran, pesanan, KDS, dan aktivitas stok |
| Commerce Storefront | Pemilik bisnis dan pelanggan | Toko online dengan domain sendiri |
| Omnichannel Marketplace | Pemilik bisnis dan tim operasional | Sinkronisasi TikTok Shop dan Blibli dengan pemotongan stok FIFO |

## Mulai dalam tiga langkah

1. **Siapkan akses** — Minta administrator mengundang Anda ke organisasi dan
   menetapkan role sesuai tugas. Pelajari [matriks RBAC](getting-started/user-roles-rbac.md).
2. **Konfigurasi bisnis** — Lengkapi profil usaha, pajak/PKP, cabang, katalog,
   gudang, perangkat, serta integrasi yang diperlukan.
3. **Jalankan operasional** — Buka shift, proses transaksi, rekonsiliasi,
   tutup shift, lalu pantau laporan dari web portal.

## Jalur baca berdasarkan peran

=== "Pemilik & Admin"

    Mulai dari [Pengenalan Ekosistem](getting-started/overview.md), lanjutkan
    ke [Profil Bisnis](back-office/store-profile-tax.md), [Katalog](back-office/product-catalog.md),
    dan [Laporan](back-office/reports-analytics.md).

=== "Kasir & Tim Toko"

    Pelajari [Pembukaan Shift](pos-operations/shift-management.md), lalu
    [Transaksi dan Pembayaran](pos-operations/checkout-payments.md). Pilih
    panduan [Ritel](verticals/retail.md) atau [F&B](verticals/fnb-kds.md)
    sesuai jenis usaha.

=== "Gudang & Operasional"

    Mulai dari [Manajemen Inventaris](back-office/inventory-management.md),
    [setup perangkat](hardware/printer-scanner.md), dan
    [troubleshooting](support/troubleshooting-faq.md).

## Sifat dokumentasi ini

Situs ini dapat dibangun menjadi kumpulan file HTML statis yang dapat dibagikan
melalui web server atau dibuka untuk distribusi offline. Fitur transaksi Rumbia
POS sendiri tetap membutuhkan koneksi ke layanan cloud.

!!! warning "Penting: Rumbia POS bukan aplikasi offline"
    Ekspor HTML offline hanya berlaku untuk **membaca dokumentasi**. Transaksi,
    sinkronisasi stok, pembayaran digital, dan integrasi marketplace tetap
    memerlukan koneksi internet.

## Perintah CLI dokumentasi

Instal dependensi dan jalankan server pratinjau:

```bash
python -m pip install -r requirements.txt
mkdocs serve
```

Buka `http://127.0.0.1:8000`. Untuk menghasilkan HTML statis pada folder
`site/`, jalankan:

```bash
mkdocs build
```

Folder `site/` berisi `index.html`, halaman-halaman HTML, aset CSS/JavaScript,
dan search index yang siap didistribusikan melalui web server atau arsip.
