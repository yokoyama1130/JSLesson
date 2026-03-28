// 配列をループで処理

// 配列の全要素をループで処理する場合、インデックスを0から開始し、最後のインデックス（長さ-1）まで繰り返すようにする
const animals = ["lions", "tigers", "bears"];
// インデックスが0から始まるからi=0、最後のインデックスはlength-1だから<を使う、iは一個づつ増やしていく
for (let i = 0; i < animals.length; i++) {
    console.log(i, animals[i]);
}

// 逆順にするとき
for (let i = animals.length - 1; i >= 0; i--) {
    console.log(i, animals[i]);
}
