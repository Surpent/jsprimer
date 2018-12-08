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
var にほんごでOK = "にほんご"
console.log(にほんごでOK);

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


/*
データ型を大きく分けると、プリミティブ型とオブジェクトの2つに分類されます。
プリミティブ型（基本型）は名前のとおり、文字列や数値などの基本的な値の型のことです。
プリミティブ型の値は、一度作成したらその値自体を変更することはできないという
イミュータブル（immutable）の特性を持ちます。

一方、プリミティブ型ではないものをオブジェクト（複合型）とよび、
オブジェクトは複数のプリミティブ型の値またはオブジェクトからなる集合です。
オブジェクトは、一度作成した後もその値自体を変更できるため
ミュータブル（mutable）の特性を持ちます。
また、オブジェクトは値そのものではなく、値への参照を使い操作されるため
参照型のデータともいえます。


プリミティブ型（基本型）
真偽値（Boolean）: trueまたはfalseのデータ型
数値（Number）: 42 や 3.14159 などの数値のデータ型
文字列（String）: "JavaScript" などの文字列のデータ型
undefined: 値が未定義であることを意味するデータ型
null: 値が存在しないnull値を意味するデータ型
シンボル（Symbol）: ES2015から追加された一意で不変な値のデータ型
オブジェクト（複合型）
プリミティブ型以外のデータ
オブジェクト、配列、関数、正規表現、Dateなど
プリミティブ型でないものは、オブジェクトであるということを覚えていれば問題ありません。

typeof演算子を使うことで、次のようにデータ型を調べることができます。
*/


const benki = "便器";
console.log(typeof benki);

// リテラルについて

// 数値リテラル
const nishinsu = 0b1111; // 15
const jyurokushinsu = 0xFF; // 255

// 文字列リテラル
// 文字列リテラル共通のルールとして、同じ記号で囲んだ範囲を文字列として扱います。
// 文字列リテラルとして次の3種類のリテラルがありますが、
// すべて評価した結果は同じ"文字列"です。
console.log("文字列");
console.log('文字列');
console.log(`文字列`);

console.log('8 o\'clock'); // \ はエスケープ文字 (option + ¥)

console.log("１行目\n２行目\n３行目");

// また、名前のとおりテンプレートのような機能を持っています。
// テンプレートリテラル内で${ 変数名 } と書いた場合に、
// その変数の値を埋め込むことができます。
const string = "文字列";
console.log(`これは${string}です`); // => "これは文字列です"

// fooは値がないということを表現したい場合は、 null値を代入することで、
// null値をもつfooという変数を定義できます。 これにより、fooを値がない変数として定義し、
// 参照できるようになります。

const foo = null;
console.log(foo); // => null

// オブジェクトリテラル
// JavaScriptにおいてあらゆるものの基礎となるのがオブジェクトです。
// そのオブジェクトを作成する方法のひとつとしてオブジェクトリテラルがあります。
// オブジェクトリテラルは{ } （中括弧）を書くことで、新しいオブジェクトを作成できます。
const object = {}; // 中身が空のオブジェクトを作成

const testObj = {
    "nakami": "anko"
};

console.log(testObj);

/*
このとき、オブジェクトがもつキーのことをプロパティ名と呼びます。
この場合、 object は key というプロパティを持っていると言います。
objectのkeyを参照するには、.（ドット）で繋ぎ参照する方法と、
[]（ブラケット）で参照する方法があります。
*/

// プロパティ名は文字列の"123"
const objectTest = {
    "k": "bento"
};
// NG: ドット記法では、数値から始まる識別子は利用できない
// object.123

// OK: ブラケット記法では、文字列として書くことができる
console.log(objectTest["k"]); // => "bento"

// 配列リテラル
const emptyArray = []; // 空の配列を作成
const array = [1, 2, 3]; // 値をもった配列を作成

const arrayTest = ["index:0", "index:1", "index:2"];
console.log(arrayTest[0]); // => "index:0"
console.log(arrayTest[arrayTest.length - 1]); // => "index:2"