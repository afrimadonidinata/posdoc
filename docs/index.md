# Panduan Pengguna Rumbia POS

Selamat datang di pusat panduan resmi **Rumbia POS**, platform Point of Sale berbasis cloud untuk mengelola penjualan, inventaris, operasional cabang, dan laporan bisnis dari satu ekosistem terpadu.

<!-- Slot Banner Hero Visual -->
![Ekosistem Rumbia POS - Web Portal & Mobile Kasir](assets/images/hero-ecosystem-mockup.png)

---

## Solusi untuk 4 Vertikal Bisnis

Rumbia POS dirancang modular untuk menyesuaikan alur kerja industri Anda:

- **Ritel**: Barcode scanner cepat, varian ukuran/warna, retur, dan peringatan stok minimum.
- **F&B**: Denah meja dinamis, modifier menu, Kitchen Display System (KDS), split bill, dan QR Self-Order pelanggan.
- **Jasa & Layanan**: Penjualan item non-inventaris tanpa pemotongan stok fisik.
- **Pendidikan & Pelatihan**: Kuota batch kelas, pendaftaran siswa, dan bundling kit materi fisik.

---

## Pahami Ekosistem Cloud Rumbia POS

Rumbia POS beroperasi secara **100% Cloud-First**. Seluruh transaksi, pergerakan stok antar-cabang, dan laporan keuangan disinkronkan secara real-time melalui internet.

!!! warning "Penting: Koneksi Internet Stabil Diperlukan"
    Rumbia POS **tidak menggunakan sistem offline**. Pastikan perangkat kasir atau komputer Anda terhubung ke jaringan internet stabil sebelum memulai shift operasional.

| Area Platform | Digunakan Oleh | Fungsi Utama |
| :--- | :--- | :--- |
| **[Web Portal](getting-started/overview.md)** (`app.rumbia.id`) | Owner, Super Admin, Store Admin, Store Supervisor | Konfigurasi bisnis, pajak/PKP, katalog produk master, inventaris gudang, dan rekonsiliasi laporan. |
| **Aplikasi Kasir** (Mobile App / Web POS) | Cashier, Server/Waiter, Kitchen Staff, Sales Associate, Stock Staff | Pembukaan shift, transaksi cepat, cetak struk, pesanan meja, layar dapur KDS, dan mutasi stok fisik. |
| **[Toko Online (Storefront)](integrations/commerce-storefront.md)** | Pemilik Usaha & Pelanggan | Website e-commerce mandiri otomatis dengan domain toko sendiri. |
| **[Omnichannel Marketplace](integrations/omnichannel.md)** | Pemilik Usaha & Admin Toko | Sinkronisasi stok otomatis terpusat ke TikTok Shop dan Blibli. |

---

## Video Panduan Cepat (5 Menit)

Pelajari gambaran umum ekosistem Rumbia POS dan cara memulai transaksi pertama Anda:

<div style="text-align: center; margin: 1.5rem 0;">
  <iframe width="100%" height="400" src="https://www.youtube-nocookie.com/embed/YOUR_VIDEO_ID" title="Rumbia POS Quickstart" frameborder="0" allowfullscreen style="border-radius: 8px;"></iframe>
</div>

---

## Mulai dalam Tiga Langkah Mudah

1. **Siapkan Akun & Hak Akses** — Terima undangan email dari administrator dan kenali peran kerja Anda pada [Panduan Peran Pengguna & RBAC](getting-started/user-roles-rbac.md).
2. **Konfigurasi Toko & Perangkat** — Lengkapi profil bisnis, pajak outlet, input katalog, dan hubungkan [Printer Thermal & Scanner](hardware/printer-scanner.md).
3. **Buka Shift & Mulai Transaksi** — Jalankan kasir, proses pembayaran digital/tunai, cetak struk, dan pantau omzet dari web portal.

---

## Jalur Baca Cepat Berdasarkan Peran

=== "👑 Pemilik & Manajer Toko"

    Fokus pada tata kelola dan analitik:
    - [Pengenalan Ekosistem & Navigasi](getting-started/overview.md)
    - [Konfigurasi Bisnis & Pajak Outlet](back-office/store-profile-tax.md)
    - [Katalog Produk & Paket Bundling](back-office/product-catalog.md)
    - [Laporan Omzet & Rekonsiliasi Kas](back-office/reports-analytics.md)

=== "💳 Kasir & Tim Toko"

    Fokus pada kecepatan transaksi meja kasir:
    - [Panduan Buka & Tutup Shift Kasir](pos-operations/shift-management.md)
    - [Alur Transaksi & Pembayaran QRIS/Tunai](pos-operations/checkout-payments.md)
    - [Panduan Kasir Ritel](verticals/retail.md) atau [Panduan Kasir Resto/Kafe F&B](verticals/fnb-kds.md)

=== "📦 Tim Gudang & Logistik"

    Fokus pada arus barang dan stabilitas perangkat:
    - [Penerimaan Barang & Stock Opname](back-office/inventory-management.md)
    - [Koneksi Printer Bluetooth & Scanner](hardware/printer-scanner.md)
    - [Panduan Mengatasi Kendala (FAQ)](support/troubleshooting-faq.md)
mkdocs build
```

Folder `site/` berisi `index.html`, halaman-halaman HTML, aset CSS/JavaScript,
dan search index yang siap didistribusikan melalui web server atau arsip.
