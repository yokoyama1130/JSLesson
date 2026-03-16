// 条件を増やすelse-if
// コード例
let raiting = 2;
if (raiting === 3) {
    console.log("あなたはレート3です。");
}
else if (raiting === 2) {
    console.log("あなたのレートは２です。");
}

// 曜日によって出力する文字を変える
const dayOfWeek = "Friday";
if (dayOfWeek === "Monday") {
    console.log("月曜日は憂鬱ですね。");
} else if (dayOfWeek === "Saturday") {
    console.log("土曜日は最高ですね！！！");
} else if (dayOfWeek === "Friday") {
    console.log("仕事が終わってからの華金は最高です。")
}

// 年齢によって料金を変える
const age = 3;
if (age < 5) {
    console.log("無料になります。");
} else if (age < 10) {
    console.log("子供料金なので1000円になります。");
} else if (age < 65) {
    console.log("大人料金なので2000円になります。")
}