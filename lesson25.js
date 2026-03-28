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
