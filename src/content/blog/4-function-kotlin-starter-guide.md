---
layout: ../../layouts/BlogPostLayout.astro
title: Function di Kotlin buat pemulahh
description : Kalian mau ujian tapi masi belum begitu paham mengenai function ? Tenang Senpai akan bantu permasalahan kaian di blog kali ini. jadi simak sampai akhir yaa
author  : FigoMager
publishDate : 2023-06-08
authorContact : claudiofigo0303@gmail.com
seoImg : https://live.staticflickr.com/3206/3043244923_caac6ddbda.jpg
tags :  
  - Programming
image : https://media.giphy.com/media/IPbS5R4fSUl5S/giphy.gif
---

Halo guys. Gimana kabarnya sehat kan ya. Alhamdullilah deh. oh iya jadi aku denger temen-temen masih belum begitu paham ya mengenai function ? nah karena itu di blog ini aku mau bahas function di bahasa kotlin. sama aja sih sama bahasa yang lain jadi kalau kalian ga pakai kotlin mirip-mirip lah syntaxnya. Oke deh klo gitu langsung aja ke hidangan utamanya.

## Apa itu function ?
Simple nya function itu adalah cara penulisan kode, dimana kita hanya perlu menulis 1 blok kode, namun bisa kita pakai berulang kali tanpa nulis ulang. Praktis kan ?? Misal nih kita mau cari volume lingkaran, kita tinggal nulis function buat volume lingkaran 1 kali terus bisa kita panggil berulangkali tanpa harus nulis ulang rumus volume, Jadi Hemat tenaga dan waktu deh.
<br>
<br>
Hmm masi gada gambaran function itu kyk gimana? Simple kok , nih ku kasi contoh, bayangin kamu lagi nulis manual cara bikin nasi goreng. Biasanya, kamu tulis langkah-langkahnya dari awal sampe akhir, kan? Nah, kalo function itu kayak resep siap pakai. Kamu tulis sekali aja cara bikin nasi goreng dalam bentuk function. Terus, setiap kali pengen bikin nasi goreng, tinggal panggil aja tuh functionnya. Nggak perlu nulis lagi langkah-langkahnya setiap kali. Praktis banget kan? Jadi, function tuh kayak resep yang bisa dipanggil berkali-kali tanpa repot nulis ulang.
<br>
## Coding Manual vs Function
Nah tadi udah ku kasih contoh di real life nya sekarang kita masuk ke contoh kodenya. Misal kita mau hitung luas segitiga nih, kalo klean pake cara manual pasti code nya gini

```
fun main() {
    //luas segitiga = alas*tinggi/2
    var luas1 = 12*4/2
    println(luas1)
    
    var luas2 = 10*3/2
    println(luas2)

    var luas3 = 4*2/2
    println(luas3)
}
```
output :

```
24
15
4
```

Dari contoh diatas, untuk menghitung luas segitiga kira perlu menuliskan rumus `alas * tinggi / 2`.Tiap kali kita mau hitung luas segitiga kita harus tulis manual tuh rumusnya. Nah nanti lama lama bakalan repot tuh.

Namun kalo kita pake function kode kita akan jadi lebih efisien, nih ku kasih contohnya

```
fun hitungLuasSegitiga(alas: Int, tinggi: Int): Int {
   return alas * tinggi / 2
}

fun main() {

    val luas1 = hitungLuasSegitiga(12, 4)

    println(luas1)

    val luas2 = hitungLuasSegitiga(10, 3)

    println(luas2)

    val luas3 = hitungLuasSegitiga(4, 2)

    println(luas3)

    // Atau Langsung kita Print aja
    println(hitungLuasSegitiga(12,6))

}
```
Dalam contoh ini, kita hanya tinggal mindahin rumus nya kedalam function aja, yang nanti bisa di panggi berulangkali tanpa kita harus nulis ulang rumusnya. Jadi, dengan menggunakan function, kita dapat mengorganisir dan mengelompokkan kode dengan lebih baik, serta membuatnya lebih mudah dipahami dan dikelola.


## Struktur Function
Mungkin kalian masih bingung , caranya nulis function itu kayak gimana. nah nulis function itu simple guys, jadi struktur function itu kaya gini :

```
fun namaFunction(parameter1: TipeData1, parameter2: TipeData2, ...): TipeDataReturn {
    // Blok kode atau logika function di sini
    // Statement atau perintah yang ingin dijalankan
    // ...
    // [OPTIONAL] Return nilai jika ada
    return nilaiReturn
}
```
Mari kita bahas komponen untama dari function :
  1. `fun` : digunakan untuk mendeklarasikan sebuah function di kotlin
  2. namaFunction : ya nama function. misal penjumlahan, luasSegitiga, bebas.
  3. parameter : didalam `()` setelah nama function, kita bisa memasukan parameter. Parameter itu suatu nilai atau data yang diterima oleh function. Setiap parameter punya tipe data tertentu. contoh parameter adalah `parameter1` dan `parameter2` dalam contoh diatas
  4. Blok kode : Selanjutnya di dalam function setelah kurung kurawal `{}` kita tempatkan blok kode yang akan di eksekusi ketika function di panggil. misal rumus luas segitiga, luas persegi dll
  5. Return statement : jika function mu mengembalikan nilai/ tidak void, maka kamu perlu nambahin return di ikuti dengan niai yang akan di return. return statement biasanya terletak di akhir function, contohnya adalah `return nilaiRetun` pada kode diatas

## Jenis Function
Nah tadi kita sudah bahas struktur function. Sekarang kita akan bahas tentang jenis/tipe function. jadi ada 2 jenis tipe function yang umum digunakana : function dengan return value dan function tanpa nilai return (void).
  1. Function dengan return value <br><br>
    Function dengan return value digunakan ketika kita ingin mendapatkan hasil atau nilai balik dari suatu proses atau perhitungan. Contohnya, saat kita ingin menghitung luas segitiga atau total belanjaan di sebuah aplikasi. Contoh struktur function dengan nilai kembalian dalam Kotlin adalah sebagai berikut:

```
fun hitungLuasSegitiga(alas: Int, tinggi: Int): Int {
    val luas = alas * tinggi / 2
    return luas
}
```

  2. Function tanpa return value (void)<br>  <br>
    Function tanpa return value digunakan ketika kita hanya ingin menjalankan suatu proses atau tugas tertentu tanpa menghasilkan nilai return. Misalnya, ketika kita ingin print pesan atau mengubah nilai variabel secara langsung. Contoh struktur function tanpa nilai kembalian dalam Kotlin adalah sebagai berikut:
```
fun cetakPesan() {
    println("Halo, selamat datang!")
}
```
  Pada contoh di atas, function `cetakPesan()` hanya mencetak pesan ke layar tanpa mengembalikan nilai apapun.
  <br>
  <br>
Pemilihan antara menggunakan function dengan return value atau tanpa nilai kembalian tergantung pada kebutuhan kita. Jika kita memerlukan hasil perhitungan atau return value dari suatu proses, maka function dengan return value tepat digunakan. Namun, jika kita hanya ingin menjalankan suatu tugas tanpa mengembalikan nilai / return value, maka function tanpa return value (void) akan lebih sesuai.
<br>
  <br>
Dengan memahami perbedaan struktur dan tipe function ini, kita bisa menggunakannya sesuai dengan kebutuhan dalam pengembangan aplikasi kita.








