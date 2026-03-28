// for...of
// 配列の要素を順番に処理できる（列挙可能なオブジェクトに使える）

const subreddits = [
    "cooking",
    "books",
    "chickens",
    "life",
    "pics",
    "soccer",
    "movies",
];

// 今までのfor文でURLを作るとき
for (let i = 0; i < subreddits.length; i++) {
    console.log(`Visit reddit.com/r/${subreddits[i]}`);
}

console.log("********************************")

// for-ofで書くと
for (let subreddit of subreddits) {
    console.log(`Visit reddit.com/r/${subreddit}`);
}

console.log("********************************")


const seatingChart = [
    ["伊藤", "松本", "鈴木"],
    ["井上", "田中", "河野", "吉田"],
    ["安倍", "後藤", "橋本"]
];

// 今までのfor文で書くと
for (let i = 0; i < seatingChart.length; i++) {
    const row = seatingChart[i];
    console.log(`${i + 1}行目`);
    for (let j = 0; j < row.length; j++) {
        console.log(row[j]);
    }
}

console.log("********************************")

// for-ofで書くと
for (let row of seatingChart) {
    for (let student of row) {
        console.log(student);
    }
}


// 列挙可能なオブジェクトはstringもある
for (let char of "hello world") {
    console.log(char);
}

