// whileでループ
// whileは条件がtrueの間処理が実行される
let num = 0;
while (num < 10) {
    console.log(num);
    num++;
}


// +1してから処理することもできる
let count = 0;
while (count < 10) {
    count++;
    console.log(count);
}

// for文だとこう書く
for (let i = 1; i <= 10; i++) {
    console.log(i);
}


// こういう時にあまりwhile文は使わない
// 何回繰り返すかわからない時にwhile文を使うことが多い


// 例えば：ユーザーがパスワードを正確に入力するまで繰り返すとき
const SECRET = "supersecret";

let guess = "";

while (guess !== SECRET) {
    guess = prompt("秘密のコードを入力してください");
}
console.log("正解！！");
