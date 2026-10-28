# Pengenalan Ekosistem Rumbia POS

Selamat datang di pengenalan ekosistem **Rumbia POS**. Halaman ini memandu Anda memahami bagaimana komponen perangkat lunak (Web Portal & Aplikasi Kasir), sinkronisasi awan (*cloud*), dan saluran penjualan terintegrasi saling terhubung dalam satu sistem operasional bisnis terpadu.

---

## 1. Arsitektur Inti: 100% Cloud-First

Rumbia POS dirancang dengan prinsip **100% Cloud-First Architecture**. Seluruh data transaksi penjualan, pergerakan inventaris antar-cabang, perubahan harga produk, hingga pencatatan shift kasir diproses dan disinkronkan langsung ke server *cloud* secara *real-time*.

```
[ Web Portal (Back-Office) ]      [ Toko Online & Marketplace ]
         │                                      │
         ▼                                      ▼
   ┌──────────────────────────────────────────────────┐
   │             Rumbia POS Cloud Engine              │
   │        (Single Source of Truth Database)         │
   └──────────────────────────────────────────────────┘
         ▲                                      ▲
         │                                      │
[ Terminal Kasir (Tablet/Mobile) ]     [ Layar Dapur (KDS) ]
```

!!! warning "Penting: Ketersediaan Koneksi Internet Stabil"
    Rumbia POS **tidak menggunakan sistem penyimpanan offline lokal**. Pastikan seluruh perangkat kasir, tablet dapur (KDS), dan laptop kantor Anda selalu terhubung dengan jaringan internet (Wi-Fi atau Seluler 4G/5G) sebelum memulai aktivitas operasional dan transaksi.

---

## 2. Gambaran Komponen Platform

Ekosistem Rumbia POS terdiri dari dua antarmuka utama yang berbagi satu basis data terpusat:

```html
<!-- ========================================================================= -->
<!-- [MEDIA PLACEHOLDER: OVERVIEW-01]                                          -->
<!-- Tipe Media : Screenshot Mockup Bersanding (Landscape 16:9 / Dual-Frame)   -->
<!-- Rekomendasi File: docs/assets/images/getting-started/overview-ecosystem.png -->
<!-- Petunjuk Tim Dokumentasi:                                                 -->
<!-- 1. Tampilkan mockup resolusi tinggi (PNG/WebP, min. 1920x1080px).         -->
<!-- 2. Sisi Kiri: Layar browser Web Portal (halaman Dashboard Analytics).     -->
<!-- 3. Sisi Kanan: Tablet/iPad menampilkan antarmuka kasir Rumbia POS (Grid). -->
<!-- 4. Berikan bingkai laptop/tablet bersih dengan latar abu-abu netral (#F8FAFC)-->
<!-- ========================================================================= -->
<figure class="doc-media-container" style="text-align: center; margin: 2rem 0;">
  <img src="../assets/images/getting-started/overview-ecosystem.png" 
       alt="Ekosistem Rumbia POS - Web Portal dan Mobile Kasir" 
       style="border-radius: 8px; border: 1px solid #E2E8F0; max-width: 100%; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);" />
  <figcaption style="font-size: 0.875rem; color: #64748B; margin-top: 0.5rem;">
    <em>Gambar 1: Antarmuka Web Portal Manajemen (Laptop) dan Terminal Kasir Operasional (Tablet).</em>
  </figcaption>
</figure>
```

### A. Web Portal Manajemen (`app.rumbia.id`)
Pusat kendali *Back-Office* yang diakses melalui peramban web oleh pemilik usaha (*Owner*) dan manajemen cabang:
* **Pengaturan Bisnis & Legalitas:** Profil usaha, konfigurasi NPWP/PKP, serta aturan pajak per cabang (PBJT 10% / PPN 11%).
* **Katalog Master:** Pembuatan produk fisik, produk non-inventaris/jasa, bahan baku (BOM), dan promo *bundling*.
* **Manajemen Gudang & Multi-Cabang:** Mutasi transfer barang, *Stock Opname*, dan penerimaan pasokan (*Purchase Order*).
* **Laporan Keuangan & Analitik:** Pemantauan omzet penjualan *live*, laba kotor harian, rekap kasir, dan ekspor dokumen pajak.

```html
<!-- ========================================================================= -->
<!-- [MEDIA PLACEHOLDER: OVERVIEW-02]                                          -->
<!-- Tipe Media : Screenshot Full Web UI (Browser Frame)                       -->
<!-- Rekomendasi File: docs/assets/images/getting-started/web-portal-dashboard.png -->
<!-- Petunjuk Tim Dokumentasi:                                                 -->
<!-- 1. Buka browser, akses dashboard app.rumbia.id dengan akun Owner demo.    -->
<!-- 2. Pastikan data transaksi dan grafik visual terisi rapi (tidak kosong).  -->
<!-- 3. Sorot (highlight) 3 area utama: Menu Navigasi Samping (Sidebar),       -->
<!--    Pemilih Cabang (Store Switcher), dan Kartu Metrik Penjualan Hari Ini.  -->
<!-- ========================================================================= -->
<figure class="doc-media-container" style="text-align: center; margin: 2rem 0;">
  <img src="../assets/images/getting-started/web-portal-dashboard.png" 
       alt="Dashboard Web Portal Rumbia POS" 
       style="border-radius: 8px; border: 1px solid #E2E8F0; max-width: 100%;" />
  <figcaption style="font-size: 0.875rem; color: #64748B; margin-top: 0.5rem;">
    <em>Gambar 2: Tampilan Dashboard Manajemen Web Portal di app.rumbia.id.</em>
  </figcaption>
</figure>
```

### B. Aplikasi Kasir (Mobile POS / Tablet / Web POS)
Antarmuka cepat yang dioptimalkan untuk staf operasional di lantai toko atau restoran:
* **Pembukaan & Tutup Shift:** Pencatatan modal awal kas (*starting cash*) dan verifikasi fisik uang laci (*cash drawer*).
* **Katalog Kasir Cepat:** Pemindaian barcode kamera/hardware scanner, filter kategori, dan varian barang.
* **Integrasi Pembayaran Digital:** Pembuatan QRIS dinamis instan, penerimaan tunai dengan kalkulator kembalian, dan cetak struk via printer thermal.
* **Modul Meja & Dapur (F&B):** Pengelolaan denah meja pelanggan, modifikasi menu (*less sugar*, topping), dan perutean tiket ke Kitchen Display System (KDS).

```html
<!-- ========================================================================= -->
<!-- [MEDIA PLACEHOLDER: OVERVIEW-03]                                          -->
<!-- Tipe Media : Screenshot UI Mobile / Tablet (Kasir Aktif)                  -->
<!-- Rekomendasi File: docs/assets/images/getting-started/pos-cashier-screen.png -->
<!-- Petunjuk Tim Dokumentasi:                                                 -->
<!-- 1. Ambil tangkapan layar antarmuka tablet/iPad kasir dalam orientasi landscape.-->
<!-- 2. Tampilkan kondisi kasir aktif dengan beberapa item berada di keranjang. -->
<!-- 3. Perlihatkan tombol aksi cepat: 'Diskon', 'Split Bill', dan 'Bayar (Checkout)'.-->
<!-- ========================================================================= -->
<figure class="doc-media-container" style="text-align: center; margin: 2rem 0;">
  <img src="../assets/images/getting-started/pos-cashier-screen.png" 
       alt="Layar Kasir POS Rumbia POS" 
       style="border-radius: 8px; border: 1px solid #E2E8F0; max-width: 100%;" />
  <figcaption style="font-size: 0.875rem; color: #64748B; margin-top: 0.5rem;">
    <em>Gambar 3: Antarmuka Terminal Kasir Layar Sentuh Rumbia POS.</em>
  </figcaption>
</figure>
```

---

## 3. Video Tur Ekosistem (3 Menit)

Tonton demonstrasi singkat berikut untuk melihat integrasi alur kerja antara penambahan produk di Web Portal dengan transaksi langsung di mesin kasir:

```html
<!-- ========================================================================= -->
<!-- [MEDIA PLACEHOLDER: OVERVIEW-VIDEO-01]                                    -->
<!-- Tipe Media : Video Embed (YouTube / Loom / MP4 Player)                    -->
<!-- Petunjuk Tim Dokumentasi:                                                 -->
<!-- 1. Rekam video tutorial ringkas dengan durasi 2 hingga 3 menit.           -->
<!-- 2. Narasi/Alur:                                                           -->
<!--    a. 00:00 - 00:45: Login Web Portal & pengenalan menu dashboard.        -->
<!--    b. 00:46 - 01:30: Pembuatan produk baru & sinkronisasi harga outlet.   -->
<!--    c. 01:31 - 02:30: Buka aplikasi kasir tablet, item otomatis muncul,    -->
<!--       lakukan simulasi transaksi cepat & pembayaran QRIS.                 -->
<!--    d. 02:31 - 03:00: Cek laporan omzet di web portal langsung ter-update. -->
<!-- 3. Pastikan audio jernih dan resolusi rekaman minimal 1080p 60fps.        -->
<!-- ========================================================================= -->
<div class="doc-video-wrapper" style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; margin: 2rem 0; border-radius: 8px; border: 1px solid #E2E8F0;">
  <iframe src="[https://www.youtube-nocookie.com/embed/VIDEO_ID_OVERVIEW_RUMBIA](https://www.youtube-nocookie.com/embed/VIDEO_ID_OVERVIEW_RUMBIA)" 
          title="Video Pengenalan Ekosistem Rumbia POS" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen 
          style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border-radius: 8px;">
  </iframe>
</div>
```

---

## 4. Kanal Penjualan Terhubung (Omnichannel & Commerce)

Rumbia POS tidak hanya mencatat penjualan langsung di meja kasir fisik, namun memperluas jangkauan bisnis Anda melalui kanal digital yang terintegrasi secara otomatis:

```html
<!-- ========================================================================= -->
<!-- [MEDIA PLACEHOLDER: OVERVIEW-04]                                          -->
<!-- Tipe Media : Diagram Alur / Infografis Sinkronisasi Stok Omnichannel       -->
<!-- Rekomendasi File: docs/assets/images/getting-started/omnichannel-sync-flow.svg -->
<!-- Petunjuk Tim Dokumentasi:                                                 -->
<!-- 1. Gunakan format vektor (SVG) agar tajam di layar Retina/HiDPI.          -->
<!-- 2. Tampilkan ilustrasi 1 Gudang Utama / Kasir di tengah.                  -->
<!-- 3. Tampilkan 3 cabang luar: Toko Fisik, TikTok Shop, Blibli, dan Web Store.-->
<!-- 4. Berikan label 'Auto-Sync FIFO' saat ada pesanan masuk dari marketplace.-->
<!-- ========================================================================= -->
<figure class="doc-media-container" style="text-align: center; margin: 2rem 0;">
  <img src="../assets/images/getting-started/omnichannel-sync-flow.svg" 
       alt="Diagram Alur Sinkronisasi Stok Omnichannel Rumbia POS" 
       style="max-width: 100%; height: auto; margin: 1rem 0;" />
  <figcaption style="font-size: 0.875rem; color: #64748B;">
    <em>Gambar 4: Sinkronisasi Terpusat: Penjualan di toko offline langsung mengurangi stok marketplace dan website e-commerce secara otomatis.</em>
  </figcaption>
</figure>
```

1. **Commerce Storefront (Toko Online Mandiri):**  
   Setiap akun bisnis mendapatkan 1 website e-commerce siap pakai tanpa biaya server tambahan. Merchant dapat mengaktifkan katalog kasir ke website dan menggunakan domain bisnis sendiri (misal: `tokosaya.com`).
2. **Sinkronisasi Marketplace (TikTok Shop & Blibli):**  
   Ketika produk terjual di kasir fisik, stok di etalase TikTok Shop dan Blibli langsung terpotong secara asinkron (*Delta Sync*). Ketika ada pesanan online masuk, sistem langsung memotong stok fisik menggunakan metode FIFO (*First-In, First-Out*) untuk mencegah pembatalan pesanan akibat kehabisan stok (*overselling*).
3. **QR Self-Order Meja Pelanggan (Khusus F&B):**  
   Pelanggan dapat memesan dan membayar mandiri (*Cashless Prepaid*) langsung dari meja dengan memindai kode QR tanpa mengunduh aplikasi. Pesanan otomatis diteruskan ke printer dapur dan layar KDS tanpa membebani kasir utama.

---

## 5. Ringkasan Perangkat Keras yang Didukung

Untuk menunjang kecepatan transaksi di lapangan, aplikasi kasir Rumbia POS mendukung koneksi langsung ke perangkat keras POS:

| Jenis Perangkat | Tipe Koneksi | Rekomendasi Penggunaan |
| :--- | :--- | :--- |
| **Printer Struk Kasir** | Bluetooth, LAN (Ethernet), USB | Cetak struk pelanggan (lebar kertas 58mm atau 80mm). |
| **Printer Dapur / Bar** | LAN (Ethernet / IP Address) | Cetak tiket pesanan koki dan barista secara otomatis. |
| **Laci Kas (Cash Drawer)** | RJ-11 (Tersambung ke Printer) | Terbuka otomatis saat transaksi tunai selesai. |
| **Barcode Scanner** | Bluetooth, USB, Kamera Internal | Pindai barcode barang ritel berkecepatan tinggi. |

---

## Langkah Selanjutnya

Setelah memahami arsitektur ekosistem Rumbia POS, lanjutkan ke langkah penyiapan akun:

* Pelajari pembagian wewenang staf di [Matriks Peran Pengguna & Hak Akses (RBAC)](user-roles-rbac.md).
* Siapkan identitas outlet dan pajak di [Profil Bisnis & Pengaturan Pajak](../back-office/store-profile-tax.md).
* Mulai hubungkan perangkat cetak di [Setup Hardware Printer & Scanner](../hardware/printer-scanner.md).
