"use strict"; // レガシーな書き方とかを例外扱いにしてくれるやつ。最初に書く

// 変数宣言時は const, let を付けないと例外扱いになる
// 変数の大文字・小文字は別物扱いになる
const TEST = "Hello Work";
const test = "Hello World";
let Unko = "toilet";
console.log(TEST);
console.log(test);

/*
複数行のこめんと
あいうえお
かきくけこ
*/

<!-- コメントとして認識される（後方互換性）
console.log("てすとだよん");
--> ここもコメント扱い

console.log(Unko);
Unko = "Toilet Ikitai";
console.log(Unko);