// ループのネスト

// i=1の時内側のループされる、i=2の時内側のループされるという感じで繰り返される
for (let i = 1; i <= 10; i++) {
    console.log(`iは${i}`);
    for (let j = 1; j < 4; j++) {
        console.log(`   jは${j}`);
    }
}


// 配列の中に配列がある場合、その中身を一覧化したい場合に使える
// 教室の座席の配列があったとして、これを元に生徒一覧を作りたい時
const seatingChart = [
    ["伊藤", "松本", "鈴木"],
    ["井上", "田中", "河野", "吉田"],
    ["安倍", "後藤", "橋本"]
];

// 単純にfor文を作ると思ったように出力されない（配列が出てくる）
for (let i = 0; i < seatingChart.length; i++) {
    console.log(seatingChart[i]);
}

// 一旦for文の中に変数として保存して、それをまたfor文で回す
for (let i = 0; i < seatingChart.length; i++) {
    const row = seatingChart[i];
    for (let j = 0; j < row.length; j++) {
        console.log(row[j]);
    }
}


