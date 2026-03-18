// 論理演算子 NOT
// ！は、trueとfalseを反転させる

if (!false) {
    console.log("!を使ってtrueになりました。");
}

if (!(1 === 1)) {
    console.log("!を使ってtrueになりました。");
} else {
    console.log("!を使ってfalseになりました。");
}

if (!null) {
    console.log("!を使ってtrueになりました。");
}

// ユーザー名が空だった時にどうにかしたい時の例。。
let username = prompt("ユーザー名を入力してください。");
// 空文字でも良いけど
if (username !== " ") {
    console.log("ユーザー名が空です。");
}
// !も使える
if (!username) {
    username = prompt("問題が起きました。ユーザー名を再度入力してください。");
    console.log(username);
}


// 年齢によってチケットの料金を変える時の例
const age = 11;
if (!(age >= 0 && age < 5 || age >= 65)) {
    console.log("有料です");
}


