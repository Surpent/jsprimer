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


// 変数の宣言について
// , (カンマ) で区切ることができる

var iPhone = "iPhone",
    Android = "Xperia";

console.log(iPhone);
console.log(Android);

// 変数名に var などの予約語は使えない
// 2nd など先頭に数字があるのもNG
// 使える変数を確認するには以下のサイトが有効
// https://mothereff.in/js-variables

var $; // OK: $から開始できる
var _title; // OK: _から開始できる
var jquery; // OK: アルファベット
var es2015; // OK: 数字は先頭以外なら利用できる
var valid日本語; // OK: 先頭以外なら一部Unicode文字も利用可能

// let と const は同じスコープの中で多重宣言できない
let bookTitle = "JavaScriptの本";

// var は多重に宣言できる
var Unkoman = "うんこマン";
var Unkoman = "うんこマン2";

console.log(Unkoman);

/*
一般的に変数への再代入は「変数の値は最初に定義した値と常に同じである」という
参照透過性と呼ばれるルールを壊すため、バグを発生させやすい要因として知られています。
変数を再代入をしたいケースとしてループ中に値の変化させたい場合などがあります。
しかし、多くのケースで代替できる表現があるため必ずしもvarやletを使わなくても実現できます。
constを使うことでバグに気づきやすくなるため、constを積極的に利用していくことを推奨しています。
*/

// 式について
// ブラウザのコンソールに 1+1 を入力すると 2 が返ってくる

// Console APIについて
console.log(1 + 1);

const total = 100 + 10;
console.log(total);

// エラーについては下記を参照
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Errors