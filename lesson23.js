// 配列にアクセスする

// 配列にはインデックスがある（順番がある）
// 各要素には0から始まるインデックスが割り当てられる

// 配列にアクセス
let days = ["Monday", "Tuesday", "Wednesday"];
console.log(days[0]);

// インデックスがないとこにアクセスとundefinedになる
console.log(days[3]);

// 2番目の一文字目を見たい時
console.log(days[1][0]);


// 配列のインデックス
let colors = ["rad", "orenge", "yellow", "green"];

// 長さ
console.log(colors.length);

// 各インデックスに入ってる中身
console.log(colors[0]);
console.log(colors[1]);
console.log(colors[2]);
console.log(colors[3]);
console.log(colors[4]);


// 文字列を変えることはできない。
// 一度定義した文字列を変えることはできない。
let firstName = "ken";
console.log(firstName[0]);
firstName[0] = "K";
console.log(firstName);


// 配列は更新できる
colors[0] = "red";
console.log(colors[0]);

// インデックスがないデータに入れてみると
// 空の場所が6個あってそれからpurpleになる。
console.log(colors[10]);
colors[10] = "purple";
console.log(colors);
// ちなみに長さは11
console.log(colors.length);
// なかった場所はundefinedになる
console.log(colors[6]);

