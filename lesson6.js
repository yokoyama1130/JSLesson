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




// Stringのメソッド
// 組み込みのStringメソッドで、文字列に対して便利な操作が実行できる
// 例えば、文字列内を検索、文字列内の文字を置換、大文字小文字の変換ができる。
// 使い方は、thing.method()
// ↓例（toUpperCaseは文字列を全部大文字にしてくれるメソッド）
let hello = "hello world";
console.log(hello.toUpperCase());
// もちろん変数の中身は変わっていいない
console.log(hello);
// 新しい変数に入れて実行するのが良い
let upperHello = hello.toUpperCase();
console.log(upperHello);
// toLowerCaseは全部小文字にしてくれる
let lowerHello = upperHello.toLowerCase();
console.log(lowerHello);


// trimメソッド（文字列の両端の空白を削除してくれるメソッド）
let userNameInput = "    yamada    ";
console.log(userNameInput);
console.log(userNameInput.trim());


// メソッドは連続で書くことができる
let greeting = "    hello world!!!    "
// これを大文字かつ両端の空白もなくすには（順番はどっちでも大丈夫）
console.log(greeting.trim().toUpperCase());




// Stringメソッドに引数を渡す
// メソッドの括弧の中に引数を渡すこともできる。引数を渡すことで動作するメソッドもある。
// 例）indexOfは引数で渡した文字列が最初に現れるインデックスを返してくれる
let tvShow = "catdog";
// この場合はcatが初めて出てくるのが添字が0のところなので0が返ってくる
console.log(tvShow.indexOf("cat"));
// dogは3で出てくるから3が返ってくる
console.log(tvShow.indexOf("dog"));
// その文字がない場合は-1が返ってくる
console.log(tvShow.indexOf("z"));

// 最初の文字だけしか出てこない（↓の場合、途中のhのインデックスが出てこない）
console.log("hello happy world".indexOf("h"));



// sliceメソッドは文字列の取り出すことができる（括弧に渡すものが二つ）
// 最初の引数は取り出しを開始する位置を示す0から始まるインデックス
// 2個目の引数は取り出しを終える前の0から始まるインデックス（2個目は省略可能。省略した時は最後まで切り取る）
console.log("hello happy world!!!".slice(6));
// 最後の指定するときは指定したインデックスの文字は含まない。
console.log("hello happy world!!!".slice(6, 11));
// -を使えば後ろから数えて取り出すこともできる
console.log("hello happy world!!!".slice(-8));



// replaceメソッドは文字列を置き換えられる
// 1つ目の引数に置き換えたい文字列、2個目の引数に置き換える文字列を入力する（置き換えるのは最初に見つかった文字列だけ）
let hello2 = "hello";
console.log("hello");
let hello3 = hello2.replace("hello", "good night");
console.log(hello3);



// repeatメソッド（指定した回数分文字列を繰り返す）
console.log(hello2.repeat(10));


