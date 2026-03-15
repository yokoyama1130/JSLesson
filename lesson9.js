// ランダムな数字とMathオブジェクト
// Mathオブジェクトとは
// 数学的な定数と関数を提供するプロパティとメソッドを持つ、組み込みのオブジェクト

// 円周率
console.log(Math.PI);

// floorは小数点以下を切り捨ててくれる
console.log(Math.floor(3346.333333338985598));
console.log(Math.floor(Math.PI));

// ceilはfloorの逆で整数部分を切り上げてくれる
console.log(Math.ceil(3346.333333338985598));
console.log(Math.ceil(Math.PI));

// randomは0以上1未満のランダムな数字を返す
console.log(Math.random());

// 整数をランダムに生成したい場合
// 0以上1未満を作る
const step1 = Math.random();
// 0以上10未満を作る
const step2 = step1 * 10;
// 小数点を切り捨て
const step3 = Math.floor(step2);
// 1~10までのランダムな数字を作るために+1
const step4 = step3 + 1;
// 確認
console.log(step4);
// 一気に書く場合
console.log(Math.floor(Math.random() * 10) + 1);

// トリッキーだけど20~22までの数字をランダムに作りたい時は
// まず考えるのは何種類の数字が欲しいか
// 今回は3種類の数字が欲しいので*3する
// 20~22まで欲しいから+20する
console.log(Math.floor(Math.random() * 3) + 20);

// 補足
// 四捨五入
console.log(Math.round(4.9));
// 絶対値
console.log(Math.abs(-456));
// 2の5乗（これは**と同じ）
console.log(Math.pow(2,5));
console.log(2 ** 5);
