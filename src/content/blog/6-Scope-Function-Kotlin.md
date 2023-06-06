---
layout: ../../layouts/BlogPostLayout.astro
title: Duhh Gusti Scope Function ?? Apalagi itu 
description : Kalian mau ujian tapi masi belum begitu paham mengenai function ? Tenang Senpai akan bantu permasalahan kaian di blog kali ini. jadi simak sampai akhir yaa
author  : FigoMager
publishDate : 2023-06-08
authorContact : claudiofigo0303@gmail.com
seoImg : https://live.staticflickr.com/65535/52955463684_c5ae097e3c.jpg
tags :  
  - Programming
image : https://media.giphy.com/media/aQQ0V6tr9DsCA/giphy.gif
---

Halo guyss aku tau kamu pusing tentnag Scope Function? Tenang aku juga kok hehe. Walau pusing hayuk belajar bareng mengenai scope function di blog ini

## Apa itu Scope Function ????
Singkatnya Scope Func itu adalah fitur bawaan dari kotlin yang memudahkan kita untuk melakukan operasi pada Data atau Objek. 
<br><br>
Kenapa Pake Scope Func?? Nah jadi dengan scope function kita bisa mengakses dan memanipulasi data dengan code yang lebih ringkes, jadi ga perlu nulis ulang deh.

## Macam Scope Function
Nah di kotlin ada 5 scope function yang bisa kita pake yaitu let, apply, run, also, dan with. Mari kita bahas satu per satu!
<br><br>
<!-- Code snippet 1 -->
1. `Let` : Scope Func ini dipake buat operasi pada data / objek. function ini memiliki parameter data/object itu sendiri, nah parameternya bisa kita akses pake `it`.
```
val waifu : String = "Miku Chann"
val length = waifu.let {
// Melakukan operasi pada var waifu untuk mendapatkan length
it.length
}

println(length) // output : 10
```

<!-- List item 2 -->
2. `run` : Sama aja sii sama si `let` cuman ga ada parameter di funtionnya jadi aksesnya pakai `this` bukan pakai `it`
```
val angka : Int =  10
val length = angka.run {
// Melakukan operasi pada var angka supaya di kali 2
    this * 2

println(length) // output : 20
```
<!-- List item 3 -->
3. `with` : Sama kayak si `run` guys, cuman beda CARA PENULISAN ajahh
```
var waifu = "Homura Channn"
val length = with(waifu) {
    // Mengakses lenght pada variable waifu
    this.length
}

println(length) // output : 13
```
<!-- List item 4 -->
4. `apply` : scope function ini kayak buat inisialisasi atau konfigurasi data / object pakai blok kode
   
```
val angka = mutableListOf(1, 2, 3, 4)

angka.apply{
    // nambahin data ke array
    this.add(2)
    
    // remove data index pertama di array
    this.removeAt(0)
  }
  
  println(angka) //output : [2, 3, 4, 2]

```


  <!-- List item 4 -->

5. `also` : Jujur aku gapaham banget, yang aku tau ini mirip `let` tapi beda return valuenya. kalo `also` return valuenya object itu sendiri, bukan dari blok kode

```
var waifu = "Madoka"
val length = waifu.also {
    // Mengakses lenght pada variable waifu
    println("waifu saya ${it}")
}

println(length)
```

output : 

```
waifu saya Madoka
Madoka
```

Nah biar paham ku kasih contoh case `also` ga jalan 

```
var waifu = "Madoka"
val length = waifu.also {
    // Mengakses lenght pada variable waifu
    it.length
}

println(length)
```
output : 

```
Madoka
```

Dalam contoh kedua, ketika kita hanya akses panjang string tanpa melakukan action tambahan atau perubahan pada objek waifu, maka hasilnya tidak ada nilai yang dikembalikan, sehingga variabel length menjadi Unit.

Jadi, untuk memanfaatkan scope function `also` dengan baik, pastikan melakukan tindakan tambahan yang relevan atau perubahan pada objek yang sedang diproses di dalam blok `also`. Hal ini akan memastikan bahwa nilai yang dihasilkan memiliki arti yang sesuai.


## Kesimpulan 

Setelah kita bahas scope function di Kotlin, sekarang kamu lebih paham kan tentang bagaimana scope function dapat membantu kita dalam memanipulasi objek dan mengatur flow kode dengan lebih efisien. Scope function `let`, `apply`, `run`, `with`, dan `also` memberikan fleksibilitas dan kekuatan dalam menangani objek dan operasi terkait. 
<br><br>
Dengan menggunakan scope function yang tepat sesuai kebutuhan, kamu dapat meningkatkan kualitas kode, serta mempermudah pengelolaan objek. Yaudah gitu dulu aja guyss, aku tau kamu pusing tapi semangat belajarnya jangan menyerah

