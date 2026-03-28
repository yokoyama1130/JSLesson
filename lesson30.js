// オブジェクトを更新する

// 先生がテストの点数を管理する例
const midterms = {taro: 96, jiro: 78};
// jiroの点数が78じゃなくて79だったー
console.log(midterms.jiro);
midterms.jiro = 79;
console.log(midterms);

// 文字列に変換することもできる
midterms.jiro = "C+";
midterms["taro"] = "A";
console.log(midterms);


// 新しいデータを追加したいとき
midterms.saburo = "B+";
console.log(midterms);
midterms["shiro"] = "A-";
console.log(midterms);
