// 配列のその他のメソッド

// concat 配列を結合
// includes 要素を検索
// indexOf string.indexOfと似ている
// join 配列からStringを生成
// reverse 配列を反転して逆順にする
// slice 配列を部分的にコピーして新たに作成する
// splice 要素を取り除いたり置き換えたりする
// sort 配列の要素をソートする


// concat 配列を結合して新たに配列を作成する
let cats = ["tama", "tora"];
let dogs = ["pochi", "hachi"];
let pets = cats.concat(dogs);
console.log(pets);


// includes 配列の中に指定した値があるかどうかを判別してくれる（完全一致）（あるかどうかだけ知りたいとき）
console.log(cats.includes("tama"));
console.log(cats.includes("Tama"));


// indexOf 配列の中の一致したインデックスが返ってくる（どこにあるかも知りたいとき）
console.log(pets.indexOf("pochi"));
console.log(pets.indexOf("ghkjsrahgjr"));


// reverse 配列を反転して逆順にする（元々の配列が逆順になる）
pets.reverse();
console.log(pets);


// slice 配列を部分的にコピーして新たに作成する
let colors = ["red", "orange", "yellow", "green", "blue", "black", "white"];
console.log(colors.slice());
// 引数にインデックスを入れることで部分的にコピーすることもできる
console.log(colors.slice(1));
console.log(colors.slice(3));
console.log(colors.slice(5));
console.log(colors.slice(2, 4));
// -は後ろから何個目の値
console.log(colors.slice(-1));
console.log(colors.slice(-3));

console.log(colors);


// splice 要素を取り除いたり置き換えたりできる（配列自体が変わる）
// colorsからblackを取り除く
colors.splice(5, 1); // 5は削除するインデックス、1は削除する数
console.log(colors);

// 要素を挿入してみる
colors.splice(1, 0, "red-orange"); // 1は挿入するインデックス、0は削除するものがないから0
console.log(colors);
// 複数挿入してみる
colors.splice(4, 0, "yellow-green", "forestgreen");
console.log(colors);
// 要素を置き換えてみる
colors.splice(2, 2, "DELETED!!!"); // インデックス2のとこから2個消して文字列を入れる
console.log(colors);


// sort 配列をソートする（文字列に変換して順番をソートするので思い通りにならないことが多い）
let scores = [1, 70, 100, 2500, 9, -12, 0, 34];
console.log(scores);
scores.sort();
console.log(scores);

