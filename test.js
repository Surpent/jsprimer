"use strict"; // レガシーな書き方とかを例外扱いにしてくれるやつ。最初に書く

// 変数宣言時は const(定数) let(定数以外) を付けないと例外扱いになる
const TEST = "Hello Work";
let Unko = "toilet";
console.log(TEST);
console.log(Unko);
Unko = "Toilet Ikitai";
console.log(Unko);