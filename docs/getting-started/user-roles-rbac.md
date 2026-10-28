# Matriks Peran Pengguna & RBAC

Role-Based Access Control (RBAC) membatasi menu dan tindakan berdasarkan
tanggung jawab pengguna. Rumbia POS memiliki **9 role**: empat role
manajerial dan lima role operasional.

## Sembilan role Rumbia POS

### Role manajerial

| Role | Fokus | Contoh tanggung jawab |
| --- | --- | --- |
| **Owner** | Strategi dan kendali penuh organisasi | Melihat semua cabang, mengelola pengguna, konfigurasi bisnis, integrasi, dan laporan |
| **Super Admin** | Administrasi tingkat organisasi | Mengelola konfigurasi, katalog, pajak, role, dan dukungan operasional lintas cabang |
| **Store Admin** | Administrasi satu toko/cabang | Mengatur operasional cabang, katalog lokal, harga, stok, dan laporan cabang |
| **Store Supervisor** | Supervisi harian cabang | Menyetujui koreksi, memantau shift, mengawasi transaksi, dan menangani pengecualian |

### Role operasional

| Role | Fokus | Contoh tanggung jawab |
| --- | --- | --- |
| **Cashier** | Transaksi kasir | Membuka shift, membuat transaksi, menerima pembayaran, mencetak struk, dan menutup shift |
| **Server/Waiter F&B** | Layanan meja | Membuka meja, mencatat modifier, mengirim pesanan ke dapur, dan mengelola permintaan bill |
| **Kitchen Staff KDS** | Produksi dapur | Melihat antrean KDS, memperbarui status item, dan menandai pesanan siap |
| **Sales Associate Ritel** | Penjualan toko | Memindai barcode, memilih varian, memproses retur sesuai izin, dan membantu pelanggan |
| **Stock Staff Gudang** | Pergerakan stok | Menerima barang, melakukan transfer, stock opname, dan mencatat penyesuaian sesuai izin |

## Matriks wewenang

Legenda: **Penuh** berarti dapat mengelola dan menyetujui; **Terbatas** berarti
hanya tindakan operasional atau ruang lingkup cabang; **Lihat** berarti
read-only; **—** berarti tidak tersedia secara default.

| Area | Owner | Super Admin | Store Admin | Supervisor | Cashier | Waiter | KDS | Sales | Gudang |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Profil organisasi & pajak | Penuh | Penuh | Lihat | — | — | — | — | — | — |
| Pengguna & role | Penuh | Penuh | Terbatas | — | — | — | — | — | — |
| Katalog & harga | Penuh | Penuh | Penuh | Terbatas | — | — | — | Lihat | — |
| Inventaris & gudang | Penuh | Penuh | Penuh | Terbatas | — | — | — | — | Penuh |
| Transaksi penjualan | Lihat | Lihat | Lihat | Penuh | Penuh | Terbatas | — | Penuh | — |
| Shift & kas | Lihat | Lihat | Lihat | Penuh | Penuh | Terbatas | — | Terbatas | — |
| KDS & pesanan dapur | Lihat | Lihat | Lihat | Penuh | Terbatas | Penuh | Penuh | — | — |
| Laporan & rekonsiliasi | Penuh | Penuh | Penuh | Penuh | Terbatas | — | — | Terbatas | Terbatas |
| Integrasi channel | Penuh | Penuh | Terbatas | — | — | — | — | — | — |

> **Catatan:** Matriks ini adalah baseline dokumentasi. Pemilik atau admin
> dapat menerapkan pembatasan tambahan berdasarkan cabang, kebijakan bisnis,
> dan fitur yang diaktifkan pada organisasi.

## Prinsip penetapan izin

1. Berikan akses paling rendah yang cukup untuk menjalankan pekerjaan.
2. Batasi role operasional pada cabang yang relevan.
3. Pisahkan pembuatan transaksi dari persetujuan pembatalan, retur, atau
   penyesuaian stok.
4. Tinjau akses ketika seseorang pindah cabang atau berganti jabatan.
5. Nonaktifkan pengguna yang sudah tidak bekerja di organisasi.

!!! danger "Peringatan izin"
    Jangan membagikan akun atau PIN antar pengguna. Semua transaksi,
    pembatalan, retur, dan perubahan stok harus dapat ditelusuri ke pengguna
    yang melakukan tindakan tersebut. Owner atau admin harus segera mencabut
    akses jika kredensial dicurigai bocor.

!!! warning "Perubahan role berdampak langsung"
    Perubahan role atau cabang dapat mengubah menu yang terlihat dan tindakan
    yang dapat dilakukan pada login berikutnya. Selesaikan shift aktif dan
    komunikasikan perubahan sebelum menerapkannya.

## Prosedur meminta akses

1. Pengguna menghubungi Owner, Super Admin, atau Store Admin.
2. Administrator memeriksa cabang, jabatan, dan kebutuhan tugas.
3. Administrator mengundang pengguna dengan email atau identitas yang benar.
4. Tetapkan satu role utama dan ruang lingkup cabang minimum.
5. Pengguna menerima undangan, membuat kredensial pribadi, lalu melakukan uji
   akses tanpa memakai akun orang lain.

Jika menu yang dibutuhkan tidak terlihat, jangan meminta kredensial pengguna
lain. Minta administrator meninjau role, cabang aktif, status undangan, dan
fitur yang diaktifkan.
