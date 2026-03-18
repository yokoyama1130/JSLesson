// 論理演算子
// 式を組み合わせることができる。
// && || ! これらを使う

// &&（かつ）：両サイドがtrueの場合のみtrueとなる
if (true && true) {
    console.log("&&がtrueになって実行されました。");
}

if (true && false) {
    console.log("&&がtrueになって実行されました。");
} else {
    console.log("&&がfalseになって実行されました。");
}

if (false && false) {
    console.log("&&がtrueになって実行されました。");
} else {
    console.log("&&がfalseになって実行されました。");
}

if (1 === 1 && 2 < 7) {
    console.log("&&がtrueになって実行されました。");
} else {
    console.log("&&がfalseになって実行されました。");
}

// パスワードの入力する時のif文
const password = prompt("パスワードを入力してください。");
// 文字数は6文字以上 かつ 空白は含まない
if (password.length >= 6 && password.indexOf(" ") === -1) {
    console.log("素晴らしいパスワードです");
} else {
    console.log("パスワードのフォーマットが無効です。");
}

