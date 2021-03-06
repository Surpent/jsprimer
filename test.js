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

// `mochiyaki`という名前の関数オブジェクトを定義する
function mochiyaki() {
}
// 関数オブジェクトにプロパティを追加できる
mochiyaki.aji = "kinako";


// 関数定義
function suihanki(kome, mizu) {
    // 関数を呼び出された時の処理
    // ...
    return "gohan";
}
// 関数呼び出し
suihanki("Water", "Rice");


function kakezan(num) {
    return num * 2;
}

console.log(kakezan(10)); // => 20


// 値を返していない又は空のreturn;と書いた場合、関数はundefinedを返します。
function noop() {
}
console.log(noop()); // => undefined;

// 可変長引数
// 関数には引数の数が固定ではなく、可変長である場合があります。
// たとえば、Math.max(...args)は引数を何個でも受け取り、
// 受け取った引数の中で最大の値を返します。
const max = Math.max(1, 5, 10, 20);
console.log(max); // => 20


// arguments
// argumentsは関数の中でのみ参照できる特殊な変数です。 
// argumentsは関数に渡された値が入ったArray - likeなオブジェクトです。
function myFunc() {
    console.log(arguments[0]); // => "a" 
    console.log(arguments[1]); // => "b" 
    console.log(arguments[2]); // => "c" 
}
myFunc("a", "b", "c");


/*
ファーストクラスファンクション
関数が値として扱えることをファーストクラスファンクション（第一級関数）と呼びます。
JavaScriptは他のオブジェクトと同じように関数を値として扱えるため、
ファーストクラスファンクションの性質を持っています。

関数を値として定義する場合にも関数宣言と同じくfunctionキーワードを利用します。
このとき、関数を式（代入する値）として扱うため関数式と呼び、関数宣言とは異なるルールが
あります。 関数式には呼び名や書き方が幾つかあるためそれぞれの方法を見ていきます。
*/

// 関数式
const kansu = function() {
    // 関数を呼び出した時の処理
    // ...
    return "modori";
};

// 関数宣言では"関数名"は省略できない
function kansu2() {

}
// 関数式では変数名があるため"関数名"を省略できる
const 変数名かつ関数名 = function() {
};

/*
このように関数式では、名前を持たない関数を変数に代入できます。
このような名前を持たない関数を匿名関数（または無名関数）と呼びます。

また、関数式でも関数に名前を付けることもできます。
この場合、関数式に付けた名前は関数の外からは呼ぶことができません。
一方、関数の中からは呼ぶことができるため、再帰呼び出しなどに利用されます。
*/

// innerFactは外からは見えない名前
const factorial = function innerFact(n) {
    if (n === 0) {
        return 1;
    }
    return n * innerFact(n - 1); // 再帰呼び出し
};
console.log(factorial(3)); // => 6

// Arrow Function
const kansu3 = () => {
    // 関数を呼び出した時の処理
    // ...
    return "modori";
};

/*
Arrow Functionには書き方のいくつかパターンがありますが、
functionキーワードに比べて短く書けるようになっています。 
また、Arrow Functionには省略記法があり、次の場合にはさらに短く書けます。
関数の仮引数が1つのときは()を省略できる
関数の処理が1つの式である場合に、ブロックとreturn文を省略できる
その式の評価結果をreturnの返り値とする
*/

// 仮引数の数と定義
const fnA =     () => { /* 仮引数がないとき */ };
const fnB =    (x) => { /* 仮引数が1つのみのとき */ };
const fnC =      x => { /* 仮引数が1つのみのときは()を省略可能 */ };
const fnD = (x, y) => { /* 仮引数が複数の時 */ };
// 値の返し方
// 次の２つの定義は同じ意味となる
const mulA =     x => { return x * x; } // ブロックの中でreturn
const mulB = x => x * x;            // 1行のみの場合はreturnとブロックを省略できる


/*
Arrow Functionについては次のような特徴があります。

名前を付けることができない（常に匿名関数）
thisが静的に決定する（詳細は「関数とスコープ」の章で解説します）
functionキーワードに比べて短く書くことができる
newできない（コンストラクタ関数ではない）
argumentsを持たない
*/

// functionで書いた場合
const array1 = [1, 2, 3];
// 1,2,3と順番に値が渡されコールバック関数（匿名関数）が処理する
const doubleArray = array1.map(function(value) {
    return value * 2; // 返した値をまとめた配列ができる
});
console.log(doubleArray); // => [2, 4, 6];

// arrow function で書いた場合

/*
Arrow Functionでは処理が1つの式だけである場合に、
return文を省略し暗黙的にその式の評価結果をreturnの返り値とします。
また、Arrow Functionは仮引数が1つである場合は()を省略できます。 
このような省略はコールバック関数を多用する場合にコードの見通しを良くします。
*/
const array2 = [1, 2, 3];
const doubleArray2 = array2.map(value => value * 2);
console.log(doubleArray2); // => [2, 4, 6];

/*
Arrow Functionはfunctionキーワードに比べて、
できることとできないことがはっきりしています。
これにより、人による解釈や実装の違いが発生しにくくなり、コード行数も短くなります。

そのため、functionキーワードよりも
Arrow Functionを使い実装した方がよいといえるでしょう。

また、もっとも大きな違いとしてArrow Functionではthisの参照先が静的に決定します。
functionキーワードの関数におけるthisは呼び出し元によって値が異なるため、
thisが含まれるコードはとても読みにくいものとなっていました。
Arrow Functionでは、thisがコードを見たまま値が決まるため読みやすいコードとなります。

詳細はn章で解説しますが、このthisの問題を解決できるため
Arrow Functionの利用を推奨しています。
*/

// コールバック関数

/*
関数はファーストクラスであるため、その場で作った匿名関数を
関数の引数として渡すことができます。
引数として渡される関数のことをコールバック関数と呼びます。

一方、コールバック関数を引数として使う関数やメソッドのことを
高階関数と呼びます。
*/

const array3 = [1, 2, 3];
const output = (value) => {
    console.log(value);
};
array3.forEach(output);

/*
関数を定義して、その関数をコールバック関数として毎回渡すのは大変です。
そこで、関数はファーストクラスであることを利用して、
コールバック関数となる関数式をその場で作って渡せます。
*/

const array4 = [1, 2, 3];
array4.forEach((value) => {
    console.log(value);
});

// メソッド
// メソッドとは、オブジェクトのプロパティである関数のことをいいます。
// 次のコードにおけるobjectのmethodプロパティをメソッドといいます。

const object1 = {
    method: () => {
    }
};

// 次のように空のobjectを宣言してから、methodプロパティへ関数を代入しても同様です。
const object2 = {};
object2.method = () => {
};



// メソッドを呼び出す場合は、関数呼び出しと同様に
// オブジェクト.メソッド名()と書くことで呼び出せます。

const object3 = {
    method: () => {
        return "this is method";
    }
};
console.log(object3.method()); // => "this is method"

/*
[ES2015] メソッドの短縮記法

先ほどの方法では、プロパティに関数を代入するという書き方になっていました。
ES2015からは、メソッドとしてプロパティを定義するための短縮した書き方が追加されています。
*/

const object4 = {
    method() {
        return "this is method";
    }
};
console.log(object4.method()); // => "this is method"

/*
JavaScriptは、文（Statement）と式（Expression）から構成されています。


式（Expression）を簡潔に述べると、値を生成し、変数に代入できるものを言います。

42のようなリテラルやfooといった変数、関数呼び出しが式です。
また、1 + 1のような式と演算子の組み合わせも式と呼びます。

式の特徴として、式を評価すると結果の値を得ることができます。
この結果の値を評価値と呼びます。


文（Statement）を簡潔に述べると、処理を実行する1ステップが1つの文といえます。
JavaScriptでは、文の末尾にセミコロン(;)を置くことで文と文に区切りを付けます。

ソースコードとして書かれた文を上から処理していくことで、プログラムが実行されます。
*/

const 処理する文 = "bun";

処理する文;
処理する文;
処理する文;


const isTrue = true;
// isTrueという式がif文の中に出てくる
if (isTrue) {
}

/*
一方、if文などは文であり式になることはできません。

式ではないため、if文を変数へ代入することはできません。
そのため、次のようなコードはSyntaxErrorとなります。
*/

//var forIsNotExpression = if (true) { 処理 }


/*
一方、式（Expression）は文（Statement）になることができます。
文となった式のことを式文と呼び、基本的に文が書ける場所には式を書くことができます。

その際に、式文（Expression statement）は文の一種であるため
セミコロンで文を区切っています。
*/

1 + 1;

// ブロック文
// 次のような、文を{ と } で囲んだ部分をブロックと言います。
// ブロックには、複数の文を書くことができます。

const 文 = "bunsyou";

{
    文;
    文;
}

/*
if文など文の中には、ブロックで終わるものがあります。

文の末尾にはセミコロンを付けるとしていましたが、
例外としてブロックで終わる文の末尾には、
セミコロンが不要となっています。
*/


// ブロックで終わらない文なので、セミコロンが必要
if (true) console.log(true);
// ブロックで終わる文なので、セミコロンが不要
if (true) {
    console.log(true);
}


/*
function宣言（文）とfunction式

関数と宣言の章において、関数を定義する方法を学びました。 
functionキーワードから文を開始する関数宣言と、変数へ関数式を代入する方法があります。

関数宣言（文）と関数式は、どちらもfunctionというキーワードを利用しています。
*/

// learn関数を宣言する関数宣言文
function learn() {
}
// 関数式をread変数へ代入
const read = function() {
};

/*
この文と式の違いを見ると、関数宣言文にはセミコロンがなく、
関数式にはセミコロンがあります。 このような、違いがなぜ生まれるのかは、
ここまでの内容を適用することで説明できます。

関数宣言文で定義したlearn関数には、セミコロンがありません。
これは、ブロックで終わる文にはセミコロンが不要であるためです。

一方、関数式をread変数へ代入したものには、セミコロンがあります。

「ブロックで終わる関数であるためセミコロンが不要なのでは？」と思うかもしれません。

しかし、この匿名関数は式であり、この処理は変数を宣言する文の一部であることが分かります。
つまり、次のように置き換えても同じといえるため、末尾にセミコロンが必要となります。
*/


function fn() { "てすと" }
// fn(式)の評価値を代入する変数宣言の文
const read2 = fn;
console.log(read2);

/*
まとめ

JavaScriptは文（Statement）と式（Expression）から構成される
文は式になることができない
式は文になることができる（式文）
文の末尾にはセミコロンを付ける
ブロックで終わる文は例外的にセミコロンを付けなくてよい
*/

// 条件分岐

//if文
// 現在の西暦を`year`に代入
const year = new Date().getFullYear();
if (year > 2015) {
    console.log(year);
}

// 実行する文が1行のみである場合、ブロックは省略が可能ですが、
// コードの読みにくさに繋がるため常につけることを推奨します。

// else if文
const version = "ES6";
if (version === "ES5") {
    console.log("ECMAScript 5");
} else if (version === "ES6") {
    console.log("ECMAScript 2015");
} else if (version === "ES7") {
    console.log("ECMAScript 2016");
}

// else 文
// if文とelse if文では、条件に一致した場合の処理をブロック内に書いていました。
// 一方、条件に一致しなかった場合の処理は、else文を使うことでできます。

const str = "JavaScript";
if (str.length > 0) {
    console.log(`文字列 "${str}" があります`);
} else {
    console.log("空文字列です");
}

// ネストしたif文

// うるう年のチェック
const year2 = new Date().getFullYear();
if (year2 % 4 === 0) { // 4で割り切れる
    if (year2 % 100 === 0) { // 100で割り切れる
        if (year2 % 400 === 0) { // 400で割り切れる
            console.log("うるう年です");
        } else {
            console.log("うるう年ではありません");
        }
    } else {
        console.log("うるう年です");
    }
} else {
    console.log("うるう年ではありません");
}

/*
条件を上から順に書き下したため、ネストが深い文となってしまっています。
一般にネストは少ない方が、読みやすいコードとなります。

条件を少し読み解くと、400で割り切れる年は無条件にうるう年であることがわかります。

そのため、条件を並び替えることで、ネストするif文なしに書くことができます。
*/

const year3 = new Date().getFullYear();
if (year3 % 400 === 0) { // 400で割り切れる
    console.log("うるう年です");
} else if (year3 % 100 === 0) { // 100で割り切れる
    console.log("うるう年ではありません");
} else if (year3 % 4 === 0) { // 4で割り切れる
    console.log("うるう年です");
} else { // それ以外
    console.log("うるう年ではありません");
}

// switch文
// switch文は次のような構文を持ち、式の評価結果が
// 指定した値である場合に行う処理を並べて書きます。

const 式 = 100 - 99;

switch (式) {
    case 1:
        // `式`の評価結果が`ラベル1`と一致する場合に実行する文
        console.log("1 です");
        break;
    case 100:
        console.log("100 です");
    // `式`の評価結果が`ラベル2`である場合に実行する文
        break;
    default:
        // どのcaseにも該当しない場合の処理
        console.log("該当なし");
        break;
}
// break; 後はここから実行される


// break文

// switch文のcase節では基本的にbreak; を使いswitch文を抜けるようにします。
// このbreak; は省略が可能ですが、省略した場合、後ろに続くcase節が条件に関係なく実行されます。

const version2 = "ES6";
switch (version2) {
    case "ES5":
        console.log("ECMAScript 5");
    case "ES6": // 一致するケース
        console.log("ECMAScript 2015");
    case "ES7": // breakされないため条件無視して実行
        console.log("ECMAScript 2016");
    default:    // breakされないため条件無視して実行
        console.log("しらないバージョンです");
}
/*
 "ECMAScript 2015"
 "ECMAScript 2016"
 "しらないバージョンです"
 と出力される
 */

/*
このようにbreak;を忘れてしまうと意図しない挙動となります。 
そのため、case節とbreak文が多用されているswitch文が出てきた場合、 
別の方法で書けないかを考えるべきサインとなります。

一般にswitch文はif文の代用として使うのではなく、
関数と組み合わせて値を返すパターンとして使うことが多いです。
*/

function getECMAScriptName(version3) {
    switch (version3) {
        case "ES5":
            return "ECMAScript 5";
        case "ES6":
            return "ECMAScript 2015";
        case "ES7":
            return "ECMAScript 2016";
        default:
            return "しらないバージョンです";
    }
}
// 関数を実行して`return`された値を得る
const ECMAver = getECMAScriptName("ES6"); // => "ECMAScript 2015"
console.log(ECMAver);