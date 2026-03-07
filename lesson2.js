// 変数について
// 変数は値につけておくラベルのようなもの
// 変数に値を入れておくことで、後で参照できる、何かしらの処理をするために使える、後から違う値に変えることもできる

// 基本的な構文（例）
let year = 1985; // yearという変数を作ってその中に1985という値を入れる
console.log(year);

// 変数同士の演算もできる
let hoge = 5;
let moge = 1;
console.log(hoge + moge);
// 足し算した後はhogeもmogeも値は変わらない
console.log(hoge);
console.log(moge);
// 新しい変数の中に変数と変数の演算を入れられる
let total = hoge + moge;
console.log(total);
// hogeに新しい値を代入するには再定義ではなく代入する
hoge = hoge + 1;
console.log(hoge);
// この場合のtotalはその時計算した値なので、代入する前の結果になる
console.log(total);
// もう一回計算し直すと増えている
total = hoge + moge;
console.log(total);
