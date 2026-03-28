// オブジェクトリテラル入門
// 二つ目のデータ構造

// オブジェクトはプロパティの集合体
// プロパティはキーと値のペア
// インデックスでデータにアクセスするのではなく、キーを使ってアクセスする


// オブジェクトリテラルを使う
const person = {firstName: "Taro", lastName: "Yamada"};
console.log(person);

const cat = {
    name: "Tama",
    age: 2,
    color: ["orange", "white"],
    isHugry: true
};
console.log(cat);


// オブジェクトのデータにアクセスする（キーでアクセスする。StringっぽくないけどStringでアクセスする）
console.log(person["firstName"]);
console.log(person["lastName"]);

console.log(cat["color"]);

// キーがない時はエラーが出る
// console.log(cat[colors]);

// .を使う方法もある
console.log(person.firstName);
console.log(person.lastName);


// オブジェクトのキーはStringに変換される（symbolは例外）
const years = {1999: "good", 2020: "bad"};
console.log(years);
// stringに変換されるからどっちでも大丈夫
console.log(years["1999"]);
console.log(years[1999]);


const birthYear = 1999;
// これはできない。personの中の関数orキーを探してしまう
console.log(years.birthYear);
// []これを使えばできる
console.log(years[birthYear]);
// これと同じになる
console.log(years["1999"]);


