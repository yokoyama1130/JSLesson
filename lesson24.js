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
