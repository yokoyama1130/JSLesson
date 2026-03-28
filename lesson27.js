// 配列とconst

// 配列でconstを使った時は中身を変更できる
const nums = [1, 2, 3];

nums.push(4);
console.log(nums);

// 配列への再代入はできない（エラーが出る）
nums = [1];
console.log(nums);


