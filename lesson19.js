// 論理演算子 or
// ||（または）：片方がtrueならtrueになる

if (true || true) {
    console.log("||で片方または両方がtrueでした。");
} else {
    console.log("||で両方ともfalseでした。");
}

if (true || false) {
    console.log("||で片方または両方がtrueでした。");
} else {
    console.log("||で両方ともfalseでした。");
}

if (false || true) {
    console.log("||で片方または両方がtrueでした。");
} else {
    console.log("||で両方ともfalseでした。");
}

if (false || false) {
    console.log("||で片方または両方がtrueでした。");
} else {
    console.log("||で両方ともfalseでした。");
}

// 映画館のチケットの例
// 0~5 無料
// 5~10 子供料金
// 10~65 大人料金
// 65~ 無料
const age = -10;
// 0歳以上かつ5歳未満 または 65歳以上
// &&の方が||より先に実行されるから()はいらないけどわかりにくい。
if ((age >= 0 && age < 5) || age > 65) {
    console.log("無料です。");
} else if (age >= 5 && age < 10) {
    console.log("子供料金です。");
} else if (age >= 10 && age < 65) {
    console.log("大人料金です。")
} else {
    console.log("無効な年齢です。")
}