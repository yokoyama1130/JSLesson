// 配列のメソッド

// push 末尾に追加
// pop 末尾を取り除く
// shift 先頭を取り除く
// unshift 先頭に追加


// 映画の待ち行列
let movieLine = ["yamada", "tanaka"];
console.log(movieLine);

// 末尾に追加する方法
movieLine[2] = "suzuki";
console.log(movieLine);
movieLine.push("sato");
console.log(movieLine);
movieLine.push("ando");
console.log(movieLine);
// いっぺんに追加することもできる
movieLine.push("kondo", "fujiwara");
console.log(movieLine);

// 末尾を取り除く（引数なし）
movieLine.pop();
console.log(movieLine);

// 取り出したものを変数に入れることもできる
let person = movieLine.pop();
console.log(person);
console.log(movieLine);



// 配列のメソッド（先頭編）
// 先頭を取り除く
movieLine.shift();
console.log(movieLine);

// もちろん取り出したのを変数に入れることもできる
let nextPerson = movieLine.shift();
console.log(nextPerson);
console.log(movieLine);


// 末尾に要素を追加
movieLine.push("hayashi", "mori", "oda", "kato");
console.log(movieLine);

// 先頭に要素を追加
movieLine.unshift("vip");
console.log(movieLine);


