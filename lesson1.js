// nvmをダウンロードしてインストールする：
// curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.4/install.sh | bash

// シェルを再起動する代わりに実行する
// \. "$HOME/.nvm/nvm.sh"

// Node.jsをダウンロードしてインストールする：
//nvm install 24

// Node.jsのバージョンを確認する：
// node -v # "v24.14.0"が表示される。

// npmのバージョンを確認する：
// npm -v # "11.9.0"が表示される。

// // ターミナルで、node lesson1.js を実行すると出力される



// GitHubのリモートリポジトリに保存するためのコマンド
// git init
// git add .
// git commit -m "first commit"
// git remote add origin git@github.com:ユーザー名/リポジトリ名.git
// git branch -M main
// git push -u origin main



// 基本演算
// 足し算
let addition = 1 + 1;
console.log(addition);

// 引き算
let subtraction = 10 - 5;
console.log(subtraction);

// 掛け算
let multiplication = 2 * 3;
console.log(multiplication);

// 割り算
let division = 8 / 2;
console.log(division);

// 余り
let remainder = 5 % 2;
console.log(remainder);

// べき演算
let exponentiation = 2 ** 10;
console.log(exponentiation);



// 型を教えてくれる演算子
console.log(typeof addition); // こっちが一般的らしい
console.log(typeof(addition));



// NaNとは
// 数字じゃないということを教えてくれるnumberの仲間
let NotANumber = 0 / 0;
console.log(NotANumber);
console.log(typeof NotANumber);
// 数字+NaNもNaNになる
let Not = 1 + NaN;
console.log(Not);
console.log(typeof Not);
// もちろんNaN+NaNもNaNになる
let Not2 = NaN + NaN;
console.log(Not2);
console.log(typeof Not2);


