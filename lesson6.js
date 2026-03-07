// Stirngについて
// 文字の並びを表すデータ型
// StringもJavaScriptのプリミティブ型の一つ。テキストを表現し、シングルクウォートやダブルクウォートで囲う必要がある。
let userNmae = "yamada";


// Stringにはインデックスがある
let cat = "Stray Cat";
console.log(cat);

// 一番先頭の文字を参照するには
console.log(cat[0]); // 0が最初

// 超えた場合
console.log(cat[99]);
// エラーは出ないけどundefinedになる

// lengthというプロパティは文字の長さが返ってくる *０からの長さではない。
console.log(cat.length)
// よって最後の文字を参照したい場合は-1する必要がある。
console.log(cat[cat.length-1])


// Stringも加算をすることができる
let hoge = "hoge";
let hoge2 = hoge + hoge;
console.log(hoge2)

// 例
let lastName = "山田";
let firstName = "太朗";
let fullName = lastName + " " + firstName;
console.log(fullName);


// ちなみに、数字+Stringをやると文字列になる。
let numberString = 1 + "hoge";
console.log(numberString);
console.log(typeof numberString);

