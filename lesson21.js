// switch文
// switch文も条件分岐の一種で、一つの値を起点とした場合分けに特化している。
// switch文で書いたものはすべてif文でも書けるが、if文の場合分けが多くなってくると、
// switch文の方が意図を伝えやすいコードになり、可能性が上がる。

// 数字に対応した平日の曜日を出す
// まずはif文でやってみる
const day = 6;
if (day === 1) {
    console.log("月曜日");
} else if (day === 2) {
    console.log("火曜日");
} else if (day === 3) {
    console.log("水曜日");
} else if (day === 4) {
    console.log("木曜日");
} else if (day === 5) {
    console.log("金曜日");
}

// 上のコードをswitch文で書くと
// 一度caseが一致すると、そこから下のコードが実行され続ける。
// ここで終わってくださいねっていう意味でbreakを入れる必要がある。
// defaultはif文で言うとelseみたいなもの。defaultよりも上が何もヒットしなかったらこれ実行するの意味。
switch(day) {
    case 1:
        console.log("月曜日");
        break;
    case 2:
        console.log("火曜日");
        break;
    case 3:
        console.log("水曜日");
        break;
    case 4:
        console.log("木曜日");
        break;
    case 5:
        console.log("金曜日");
        break;
    case 6:
    case 7:
        console.log("週末");
        break;
    default:
        console.log("無効な数字です。");
}
