# Persyaratan Sistem & Spesifikasi Perangkat

Sebelum memulai operasional Rumbia POS, pastikan jaringan internet, perangkat kasir, dan periferal pendukung sudah sesuai dengan kebutuhan dasar sistem. Hal ini penting agar transaksi tetap cepat, data tersinkron dengan benar, dan pengalaman kerja kasir tidak terganggu.

!!! tip "Tujuan halaman ini"
    Setelah membaca halaman ini, Anda akan tahu:

    - kebutuhan koneksi internet yang dibutuhkan untuk cloud POS
    - perangkat kasir yang disarankan untuk toko Anda
    - spesifikasi printer, scanner, dan cash drawer yang kompatibel
    - checklist kesiapan outlet sebelum operasional resmi dimulai

---

## Kebutuhan internet: inti dari sistem cloud-first

Rumbia POS bekerja sepenuhnya di cloud. Artinya, semua aktivitas seperti transaksi, stok, akses laporan, dan sinkronisasi ke marketplace berjalan melalui koneksi internet aktif.

```text
[Terminal Kasir] ──> [Rumbia POS Cloud Engine] ──> [Laporan / Stok / Marketplace]
```

### Rekomendasi koneksi internet untuk toko

| Parameter | Minimum | Direkomendasikan |
| :--- | :--- | :--- |
| Download | 5 Mbps | 10–20 Mbps |
| Upload | 2 Mbps | 5 Mbps |
| Latensi | < 80 ms | < 30 ms |
| Koneksi utama | Wi-Fi toko | Wi-Fi dedicated kasir 5 GHz |
| Backup | hotspot 4G | dual-WAN / modem standby |

!!! danger "Jangan mengandalkan satu jalur internet saja"
    Jika koneksi utama turun, kasir tidak dapat memproses transaksi baru. Selalu siapkan koneksi cadangan seperti tethering ponsel, MiFi, atau modem backup.

---

## Perangkat kasir yang disarankan

Aplikasi kasir Rumbia POS dapat dipasang di tablet, ponsel, atau laptop sesuai kebutuhan operasional Anda.

=== "Android (Tablet / Ponsel / POS All-in-One)"

    - OS: Android 10+ (disarankan Android 12+)
    - CPU: octa-core 2.0 GHz atau lebih cepat
    - RAM: minimum 3 GB, disarankan 4–6 GB
    - Penyimpanan: minimal 8 GB ruang kosong
    - Layar: 6 inci ke atas, optimal 8–10 inci untuk tablet
    - Konektivitas: Wi-Fi dual-band dan Bluetooth 4.2/5.0

=== "iOS / iPadOS"

    - OS: iPadOS 15+ atau iOS 15+
    - Perangkat yang didukung: iPad generasi 8+, iPad Air 4+, iPad Mini 5+, iPhone 11+
    - Penyimpanan: minimal 4 GB ruang kosong

=== "Web POS (Laptop / Desktop / Mac)"

    - OS: Windows 10/11, macOS Monterey+, atau Ubuntu LTS
    - Browser: Chrome 110+, Edge 110+, Safari 16+, Firefox 115+
    - RAM: minimum 8 GB
    - Resolusi monitor: minimal 1366×768, disarankan Full HD 1920×1080

!!! success "Standar yang aman"
    Jika Anda mengganti perangkat kasir lama atau menambah device baru, pilih perangkat yang memenuhi standar minimal di atas agar kinerja transaksi tetap stabil.

---

## Periferal yang dibutuhkan untuk operasional harian

### 1. Printer struk dan printer dapur

Rumbia POS mendukung pencetakan standar ESC/POS dengan koneksi yang fleksibel.

| Jenis printer | Koneksi yang didukung | Keterangan |
| :--- | :--- | :--- |
| Printer struk kasir | Bluetooth, LAN, USB | cocok untuk kasir dan toko kecil |
| Printer dapur / bar | LAN / Ethernet | disarankan untuk area produksi agar lebih stabil |
| Printer lebar 80 mm | LAN / USB | cocok untuk rincian transaksi lebih lengkap |

### 2. Barcode scanner

- tipe: 1D dan 2D barcode
- protokol: HID / keyboard emulation
- koneksi: USB, Bluetooth, atau wireless dongle
- bisa dipakai dengan kamera ponsel/tablet untuk volume scan ringan

### 3. Cash drawer

- koneksi: kabel RJ-11 / RJ-12
- dipasang ke printer thermal
- terbuka otomatis saat transaksi tunai selesai

---

## Checklist kesiapan toko sebelum buka

Gunakan checklist berikut sebelum outlet resmi mulai beroperasi:

| Area evaluasi | Kriteria kesiapan | Status |
| :--- | :--- | :---: |
| Koneksi internet | Wi-Fi stabil dan backup internet aktif | [ ] |
| Perangkat kasir | tablet/ponsel/laptop berdaya penuh dan siap login | [ ] |
| Printer thermal | kertas tersedia dan tersambung ke aplikasi kasir | [ ] |
| Cash drawer | kabel RJ-11 terpasang dengan benar | [ ] |
| Akun & akses | setiap kasir memiliki akun pribadi dan PIN aktif | [ ] |

---

## Langkah berikutnya

Setelah kebutuhan perangkat dan jaringan sudah siap, lanjutkan ke tahap berikutnya:

- [Aktivasi akun & login pertama](first-time-login.md)
- [Panduan setup printer & scanner](../hardware/printer-scanner.md)
- [Panduan buka & tutup shift kasir](../pos-operations/shift-management.md)
- [Panduan cepat: siap transaksi dalam 15 menit](quickstart.md)

Dengan setup perangkat yang benar, operasi kasir akan jauh lebih cepat, stabil, dan minim gangguan.
