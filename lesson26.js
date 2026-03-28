// 配列の等価性

// 配列の場合
// ["hi", "bye"] === ["hi", "bye"] これはfalseになる

// 配列の比較をする時は配列の中身を見ていない
// 配列の参照先を見てる（メモリ上のアドレスを見てる）

// どういった時にtrueになるのか（住所が同じ時）
let nums = [1, 2, 3];
let numsCopy = nums;
console.log(nums === numsCopy);

nums.push(4);
console.log(nums);
console.log(numsCopy);
console.log(nums === numsCopy);


// 中身が等しい時を比較したい時→まだ早い笑
