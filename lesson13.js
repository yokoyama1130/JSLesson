// if文
// 条件がtrueの場合に処理を実行する
let rating = 3;
if (rating === 3) {
    console.log("あなたはマスターです！！");
}


console.log("条件分岐の前");
// ここのif文はtrueの場合に実行される。
// falseの場合は中身だけ実行されずに他のJSは実行される
// falseになったから他の処理は行われないとか止まるとかはない。
if (1 + 1 === 2) {
    console.log("計算してみる");
}
console.log("条件分岐の後");


// if文は連続で書いて大丈夫（当たり前）git a
let random = Math.random();
if (random < 0.5) {
    console.log("数字は0.5より小さい！！！")
    console.log(random);
}
if (random > 0.5) {
    console.log("数字は0.5より大きい！！！")
    console.log(random);
}
