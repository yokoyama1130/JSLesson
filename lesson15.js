// elseについて
// elseはそれ以外（何もtrue出なかったら実行される）

// 曜日によって出力する文字を変える
const dayOfWeek = prompt("英語で曜日を入力してください").toLowerCase();
if (dayOfWeek === "monday") {
    console.log("月曜日は憂鬱ですね。");
} else if (dayOfWeek === "saturday") {
    console.log("土曜日は最高ですね！！！");
} else if (dayOfWeek === "friday") {
    console.log("仕事が終わってからの華金は最高です。");
} else {
    console.log("はぁ、、、");
}


// ランダムな数字のif-else文
let random = Math.random();
if (random < 0.5) {
    console.log("数字は0.5より小さい");
} else {
    console.log("数字は0.5以上!!!!");
}
console.log(random);


// 年齢によって料金変えるif-else文
const age = 89;
if (age < 5) {
    console.log("無料になります。");
} else if (age < 30) {
    console.log("子供料金なので1000円になります。");
} else if (age < 65) {
    console.log("大人料金なので2000円になります。");
} else {
    console.log("シニア料金なので1000円になります。");
}
