// TRUTHY/FALSYな値
// JavaScriptの値はすべてtrueまたはfalseとみなすことができる
// falsyな値（false,0,""(空文字),null,undefined.NaN）
// 上記以外はtruthyな値！

const userInput = prompt("何か入力してください");

// 上で空文字を入力するとFALSYになって、何か文字を入力するとTRUTHYになる。
// if文の条件の中に条件を書かなくても、条件分岐ができる。
if (userInput) {
    console.log("TRUTHY");
} else {
    console.log("FALSY");
}
