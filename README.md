# <div align='center'>Baileys</div>

<div align='center'>



### Lisensi

Proyek ini menggunakan lisensi [MIT License](https://github.com/WhiskeySockets/Baileys?tab=readme-ov-file#license), dan merupakan karya turunan dari Baileys oleh Rajeh Taher/WhiskeySockets.

Dengan menggunakan proyek ini, Anda dianggap telah menyetujui ketentuan lisensi tersebut.

## Tentang Modifikasi

Proyek ini merupakan hasil **modifikasi besar dari Baileys**, sebuah library open-source WhatsApp Web API yang awalnya ditulis dalam TypeScript dan menggunakan format ECMAScript Module (ESM).

Modifikasi ini difokuskan untuk membuat versi yang **sepenuhnya berbasis JavaScript murni dengan dukungan CommonJS (CJS)**. Dengan pendekatan ini, library menjadi **lebih fleksibel dan mudah diintegrasikan** ke dalam berbagai jenis runtime Node.js tanpa memerlukan proses transpilasi atau konfigurasi tambahan seperti `"type": "module"`.

## Install

Install in package.json:
```json
"dependencies": {
    "baileys": "github:roms910/roms"
}
```
or install in terminal:
```
npm install baileys@github:roms910/roms
```

Then import the default function in your code:
```ts 
// type esm
import makeWASocket from 'baileys'
```

```js
// type cjs
const { default: makeWASocket } = require("baileys")
```

### Poin Utama Modifikasi:

- **Konversi total dari TypeScript ke JavaScript**, untuk menyederhanakan proses pengembangan, debugging, dan distribusi.
- **Penggunaan format module CommonJS (CJS)** secara konsisten agar dapat digunakan di lingkungan Node.js manapun, termasuk proyek lama.
- **Kompatibel dengan modul-modul ESM modern**, melalui penggunaan dynamic import (`await import()`), tanpa mengorbankan arsitektur utama CJS.
- **Dukungan penuh terhadap tombol interaktif**
- Penyederhanaan berbagai struktur internal seperti manajemen sesi, koneksi, katalog produk, dan optimasi format media.
- File `proto` (WAProto) telah di-*compile* secara statis menjadi JavaScript untuk menghindari dependensi waktu jalan terhadap parser `.proto`.

## Informasi

Paket ini `membutuhkan` Node.js versi **20 atau lebih tinggi** untuk berjalan.

Proyek ini secara eksplisit ditujukan untuk lingkungan modern dan tidak mendukung Node versi lama. Dukungan akan selalu mengikuti versi LTS terbaru dari Node.js untuk menjaga performa dan kompatibilitas dengan ekosistem terbaru.


> **Recode Baileys By Romss**


> **Copyright © 2024 - 2025 Naruya Izumi**
