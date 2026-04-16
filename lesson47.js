// モダンなJavaScriptの機能
// デフォルト引数
// 例）サイコロを振る時に何面のサイコロを使うか引数で指定するとき
function rollDie(numSize = 6) {
    return Math.floor(Math.random() * numSize) + 1;
}
console.log(rollDie());

// 引数は前から順番に入っていく。飛ばすことができない。
// どうしても飛ばしたい時はundefinedを引数で渡すと、デフォルトが使われるのだ。！！！！



// スプレット構文
// 配列式や文字列などの反復可能オブジェクトを、0個以上の引数（関数呼び出しの場合）や要素（配列リテラルの場合）を期待された場所で
// 「展開」したり、オブジェクト式を、0個以上のキーと値のペア（オブジェクトリテラルの場合）を期待された場所で「展開」したりすることができる。

// スプレット構文の基本的な書き方
const nums = [13, 4, 5, 6, 21, 9, 21, 2222];
// 普通にMath.max(nums)をやったら配列を渡しているだけだからNaNが出てくる→...をつけると展開してくれる
console.log(Math.max(...nums));
console.log(Math.min(...nums));
// ちなみに普通に出力した場合、...を使うとスペース区切りで出力される
// 普通は配列が出力される
console.log(nums);
// スプレット構文を使うとスペース区切りになる
console.log(...nums);

// 　列挙可能なものは配列以外だとStringがある
console.log("あいうえお");
console.log(..."あいうえお");



// 配列リテラルにおけるスプレット構文
// 配列リテラルの場合既存の配列から新しい配列を作成する。
// 配列の要素を新しい配列にそれぞれ展開する。
const cats = ["Tama", "Tora", "Momo"];
const dogs = ["Hachi", "Pochi"];
// 今までで習ったものでこの配列をくっつけたいときは
const animals = cats.concat(dogs);
console.log(animals);
console.log(cats);
console.log(dogs);

// スプレット構文を使った場合はこうする。
// 自分で追加することができるから便利！！！
const allPets = [...cats, "zisu", ...dogs, "Sakura"];
console.log(allPets);
console.log(cats);
console.log(dogs);



// オブジェクトにおけるスプレット構文
// オブジェクトからオブジェクトにコピーをする。
// どういう時に使われるか
// 例）フォームにユーザーがデータを入力した時
const formData = {
    emal: "hoge@ezample.com",
    password: "secret",
    username: "hoge"
}
// さらにデータを入れたい場合に使える。
// バックエンドとかやるようになったらよく使うから今は飛ばす



// レスト構文
// スプっレット構文に似て非なるもの

// argumentsオブジェクト
// すべて（アロー関数以外）の関数で使える
// 配列みたいなオブジェクト
// 関数に渡された引数をすべて含んでいる


// 分割代入
// 配列の要素
// オブジェクトのプロパティを、別個の変数に割り当てるスッキリと書ける構文
const scores = [1999, 43294, 34472398, 4378, 748931740, 4275];
console.log(scores);
// 順番に変数に割り当てることができる
// ...を使うことで、残りも配列として入れることができる
const [ gold, silver, bronze, ...rest ] = scores;
console.log(gold);
console.log(silver);
console.log(bronze);
console.log(rest);
console.log(scores);


// オブジェクトの分割代入
const user = {
    email: "yokoyama@gmail.com",
    password: "nggerglren",
    firstName: "横山",
    lastName: "龍吾",
    born: 2000,
    died: 2100,
    bio: "秋田大学理工学部システムデザイン工学科",
    city: "Akita",
    state: "Akita"
}
console.log(user);
// このような配列を別の変数に入れて使いたい時に便利
// 変数名はオブジェクトのプロパティ名と合わせる
const { firstName, lastName, email } = user;
console.log(firstName);
console.log(lastName);
console.log(email);
// 変数名を変えたい時は:をつけてその後ろに新しい変数名を書けばできる
const { born: brthYear, died: deathYear } = user;
console.log(brthYear);
console.log(deathYear);

// デフォルト値
const user2 = {
    email: "toki@gmail.com",
    firstName: "とき",
    lastName: "トーキ",
    born: 1993,
    city: "Akita",
    state: "Tokyo"
}
// 配列の中にないものも取ってこようとする
const { firstName: myouji, lastName: namae, died:aaa = "N/A" } = user2;
console.log(namae);
console.log(myouji);
console.log(aaa); // 初期値を設定しないとundefinedになる（user2にはないから）



// 関数パラメータの分割代入
function fullName(user) {
    const { firstName, lastName } = user;
    return `${firstName} ${lastName}`;
}
console.log(fullName(user));

// 関数の引数で分割代入することもできる
function fullName2({ firstName, lastName }) {
    return `${firstName} ${lastName}`;
}
console.log(fullName2(user));
