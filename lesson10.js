// 条件文

// 比較演算子
// > より小さい（大なり）
// < より大きい（小なり）
// >= 以上
// <= 以下
// == 等価
// != 不等価
// === 厳密な等価
// !== 厳密な不等価

// trueかfalseが返ってくる（結果は全てBoolean）
console.log(1 > 3);
console.log(1 < 3);

// ==（ダブルイコール）は型までは区別しない
console.log(1 == "1");
console.log(0 == "");
console.log(0 == false);
console.log(null == undefined);

// ===（トリプルイコール）は型まで区別する
console.log(1 === "1");
console.log(0 === "");

// データの型を意識するのが大事なので、一旦トリプルイコール＝＝＝を使う。
