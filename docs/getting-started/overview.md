# Pengenalan Ekosistem Rumbia POS

Mulai dari sini untuk memahami bagaimana Rumbia POS bekerja sebagai satu ekosistem. Halaman ini menjelaskan bagaimana Web Portal, aplikasi kasir, dan kanal penjualan terhubung dalam satu sistem yang terpusat dan selalu sinkron.

!!! tip "Tujuan halaman ini"
    Setelah membaca halaman ini, Anda akan memahami:

    - bagaimana data transaksi, stok, dan laporan terhubung secara real-time
    - peran Web Portal dan aplikasi kasir dalam operasional harian
    - bagaimana Rumbia POS mendukung toko fisik, marketplace, dan website
    - langkah selanjutnya untuk setup awal yang benar

---

## Sistem kerja Rumbia POS

Rumbia POS dibuat dengan model cloud-first: semua data utama disimpan dan diproses di satu sumber kebenaran (single source of truth) dan disinkronkan ke seluruh perangkat aktif.

```text
[Web Portal]  ──┐
               ├──> [Rumbia POS Cloud Engine] ──> [Terminal Kasir]
[Toko Online] ─┘                              │
                                              └──> [KDS / Tablet / Marketplace]
```

!!! warning "Koneksi internet wajib"
    Karena semua transaksi dan data operasional berjalan di cloud, seluruh perangkat kasir dan back-office harus terhubung ke internet yang stabil saat digunakan.

---

## Komponen utama dalam satu ekosistem

Rumbia POS memiliki dua antarmuka utama yang saling terhubung:

### 1. Web Portal (Back-Office)

Web Portal adalah pusat pengelolaan bisnis Anda. Di sini Anda mengatur:

- profil toko dan legalitas usaha
- konfigurasi pajak dan biaya layanan
- katalog produk master
- inventaris, mutasi stok, dan opname
- laporan penjualan dan rekonsiliasi

Web Portal biasanya diakses melalui browser di komputer atau laptop, dan digunakan oleh Owner, Admin, Store Supervisor, dan manajer operasional.

### 2. Aplikasi Kasir

Aplikasi kasir digunakan oleh tim operasional di lantai toko atau restoran. Fungsinya mencakup:

- buka dan tutup shift
- proses transaksi dan pembayaran
- scan barcode dan input item cepat
- cetak struk
- update status pesanan meja dan dapur

Aplikasi ini dapat berjalan di tablet, ponsel, atau browser POS sesuai kebutuhan outlet.

---

## Kenapa sistem ini efisien untuk operasional sehari-hari

Dengan arsitektur cloud terpusat, semua perubahan penting otomatis tersinkron:

- produk baru muncul di kasir setelah disimpan di portal
- stok berkurang ketika transaksi terjadi
- laporan penjualan langsung terupdate di dashboard
- cabang dan toko online dapat bekerja dari satu data utama

Ini membuat proses operasional lebih cepat, lebih konsisten, dan lebih mudah diawasi.

---

## Integrasi penjualan modern

Rumbia POS tidak hanya menangani transaksi offline di toko. Sistem ini juga mendukung kanal penjualan digital yang terhubung.

### a. Commerce Storefront

Setiap bisnis dapat menggunakan website toko online yang sudah siap pakai. Produk dan harga dapat dibagikan ke storefront tanpa proses manual berulang.

### b. Omnichannel marketplace

Produk yang terjual di toko fisik maupun marketplace dapat diproses dari satu sumber data yang sama. Stok disinkronkan secara otomatis untuk mengurangi risiko overselling.

### c. QR Self-Order untuk F&B

Untuk bisnis restoran atau kafe, pelanggan dapat memesan dan membayar dari meja melalui QR code tanpa perlu menunggu kasir.

---

## Perangkat yang didukung

Rumbia POS siap mendukung kebutuhan operasional di lapangan dengan perangkat yang umum dipakai:

| Perangkat | Fungsinya |
| :--- | :--- |
| Printer struk kasir | untuk mencetak bukti transaksi pelanggan |
| Printer dapur/bar | untuk mencetak pesanan ke area produksi |
| Cash drawer | untuk membuka laci kas saat pembayaran tunai |
| Barcode scanner | untuk mempercepat input item jualan |
| Tablet / ponsel / laptop | untuk menjalankan aplikasi kasir atau dashboard |

---

## Langkah berikutnya

Setelah memahami arsitektur sistem, lanjutkan ke langkah setup berikutnya:

- [Panduan cepat: siap transaksi dalam 15 menit](quickstart.md)
- [Matriks peran pengguna & RBAC](user-roles-rbac.md)
- [Profil bisnis & pengaturan pajak](../back-office/store-profile-tax.md)
- [Setup hardware printer & scanner](../hardware/printer-scanner.md)

Dengan gambaran ekosistem yang jelas, setup awal dan operasional harian akan jauh lebih mudah dijalankan.
