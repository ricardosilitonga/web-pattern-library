# Pattern Library

Pattern Library adalah kumpulan dari beberapa Pattern/Pola yang memberikan solusi pada masing-masing masalah yang ada. Web Pattern Library ditujukan untuk memberikan solusi pada masalah saat membangun halaman web. Salah satu Web Pattern Library yang populer adalah Bootstrap.

Web Pattern Library ini tidak selengkap Bootstrap tapi sangat cocok digunakan untuk membangun halaman web yang responsive.

---

## Sistem Grid

**Penjelasan**

- Sistem Grid juga harus bersifat Responsive dan Fluid.
- Terdiri dari 12 kolom yang dipisahkan oleh gutter/pemisah dengan lebar yang ditentukan.
- Semua kolom harus memiliki Attribut Class .col-$
- Semua kolom adalah Child Element dari container .row sebagai Parent Element.
- container .row akan membuat posisi kontennya berada di tengah halaman.

**Perilaku Responsif**
- Pada ukuran layar (<1024px), semua kolom akan memiliki besar lebar gutter/pemisah setengah dari yang sudah ditentukan sebelumnya.
- Pada ukuran layar mobile (<768px), semua kolom akan memiliki lebar 100%.

## Tipografi

**Elemen**

- Headings
- Paragraphs
- Bold, em, strike, link
- Code blocks
- Lists
- Blockquotes

## Tombol

**Penjelasan**

- Ada 2 style: setingan-awal dan utama.
- Ada 3 ukuran: kecil, setingan-awal, dan besar.
- Memiliki style untuk elemen `<a>, <button>, <input type="button">, <input type="submit">`

## Elemen Form

**Elemen**

- Input
- Radio dan Checkboxes
- Memiliki form masuk, keluar, dan kontak.

## Ikon

**Penjelasan**

- Menggunakan FontAwesome
- Memiliki style untuk border icon.
- Memiliki style untuk persegi, bulat, sudut.
- Ada 3 ukuran: setingan-awal, besar, lebih-besar.

## Umpan-balik/Feedback

**Penjelasan**

- Ada 4 kotak pesan balasan: informasi, sukses, error, peringatan.

## Navigasi

**Elemen dan ciri**

- Panel Navigasi
- Memiliki logo disebelah kiri dan menu disebelah kanan.
- Menu menggunakan jQuery plugin Superfish.

**Perilaku Responsif**

- Pada saat halaman loading, menu utama akan responsif dengan bantuan jQuery.
- Pada ukuran layar mobile (<768px), menu utama akan disembunyikan, logo pindah posisi ke tengah dan menu utama akan ditampilkan di bawah logo.

## Animasi

**Penjelasan**

- Menggunakan animate.css library oleh Dan Eden

## Tab dan Akordeon

**Penjelasan**

- Kustom Kontrol.

## Carousels

**Penjelasan**

- Menggunakan jQuery plugin Cycle2.