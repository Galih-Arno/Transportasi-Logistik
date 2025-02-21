# Brief Proyek TransSwift – Platform Digital Transportasi & Logistik

## 1 Overview Proyek

### Nama Proyek: TransSwift – Platform Transportasi & Logistik Digital 🚚
#### Deskripsi Singkat:
TransSwift adalah platform digital yang menghubungkan pengirim, penerima, dan penyedia layanan logistik dalam satu sistem yang transparan dan efisien. Pengguna dapat melakukan pemesanan, melacak pengiriman secara real-time, dan mengelola pengiriman dengan mudah.

## 2 Tujuan Proyek

✅ Meningkatkan transparansi dalam pengiriman barang 📦
✅ Menyediakan fitur tracking real-time untuk pelanggan 📍
✅ Mempermudah manajemen pengiriman bagi pengguna dan admin 📊

## 3 Fitur Utama
### 1. Pemesanan Pengiriman

    Form pemesanan barang dengan detail pengirim & penerima
    Pilihan metode pengiriman (reguler, ekspres, cargo)
    Estimasi biaya pengiriman berdasarkan jarak & berat

### 2. Tracking & Notifikasi

    Input nomor resi untuk melihat status pengiriman
    Update status pengiriman secara real-time dengan WebSocket
    Notifikasi otomatis melalui email & dashboard

### 3. Dashboard User & Admin

    User: Riwayat pengiriman, status pesanan, & pengelolaan akun
    Admin: Manajemen pengiriman, laporan transaksi, & kontrol operasional

### 4. Pembayaran & Invoice

    Integrasi metode pembayaran digital (Midtrans, Xendit, atau PayPal)
    Pembuatan invoice otomatis setelah pemesanan

## 4 Tech Stack yang Digunakan

🔹 Frontend: Vue.js + Vite + TailwindCSS
🔹 Backend: Go (Fiber Framework)
🔹 Database: PostgreSQL
🔹 Deployment: Vercel (Frontend), Railway/Fly.io (Backend), Supabase (Database)

## 5️ Struktur Halaman (Wireframe)

1️⃣ Landing Page – Menampilkan informasi layanan & CTA pemesanan
2️⃣ Halaman Pemesanan – Form input data pengirim & penerima
3️⃣ Halaman Tracking – Form input resi & status pengiriman
4️⃣ Dashboard User – Riwayat pesanan & status pengiriman
5️⃣ Dashboard Admin – Manajemen pengiriman & laporan transaksi