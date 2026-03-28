// オブジェクトの中をインテレート
const testScore = {
    ken: 80,
    yuki: 67,
    taro: 89,
    ryota: 91,
    yuma: 72,
    yuko: 77,
    chiaki: 83,
    kota: 97,
    saeko: 81,
    koki: 60,
};

// オブジェクトは列挙可能ではないためエラーが出る
// for (let x of testScore) {
//     console,log(x);
// }

// keysとvaluesというメソッドを使う
for (let student of Object.keys(testScore)) {
    console.log(`${student}さんは${testScore[student]}点です`);
}

// for-inで書くとstudentにキーを入れることができる。
for (let student in testScore) {
    console.log(`${student}さんは${testScore[student]}`);
}
