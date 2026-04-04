// 関数
const obj1 = {num: 3};
const obj2 = {num: 3};
let num = 3;

function fin(object1Arg, object2Arg, numberArg) {
    object1Arg = {num: 5};
    object2Arg.num = 5;
    numberArg = 5;
}

fin(obj1, obj2, num);

console.log(obj1.num);
console.log(obj2.num);
console.log(num);

function singSong() {
    console.log("ド");
    console.log("レ");
    console.log("ミ");
}

singSong();


// 関数式
const add = function (x, y) {
    return x + y;
}

console.log(add(10, 20));

// 高階関数
// 関数を受け取ったり関数を返す関数
// 高階関数は：
// 引数をして関数を受け取る
// 戻り値に関数を指定する

// 関数の引数が関数
function callTwice(func) {
    func();
    func();
}

function laugh() {
    console.log("はははははははははははは");
}
// 値を渡すだけだから()はいらない
callTwice(laugh);


// 高階関数の例
function call(func) {
    func();
    func();
}

function rollDie() {
    const roll = Math.floor(Math.random() * 6) + 1;
    console.log(roll);
}

call(rollDie);



// 関数から関数を返す
function makeRandomFunc() {
    const rand = Math.random();
    if (rand > 0.5) {
        return function() {
            console.log("おめでとう！！！");
        }
    } else {
        return function() {
            console.log("残念！！！！");
            console.log("残念！！！！");
            console.log("残念！！！！");
            console.log("残念！！！！");
            console.log("残念！！！！");
            console.log("残念！！！！");
            console.log("残念！！！！");
        }
    }
}
// ()これ一個だけだと関数を返してるだけだから実行はされない
// ()()こうすることで実行される
makeRandomFunc()();


// 例えば数字が何から何の間にあるか知るためには
function isBetween(num) {
    return num >= 50 && num <= 100;
}

function isBetween2(num) {
    return num >= 1 && num <= 10;
}
// このように同じような関数をいくつか作らないとダメになる
// こういう時に高階関数を使う

function makeBetweenFunc(min, max) {
    return function(num) {
        return num >= min && num <= max;
    }
}

const isChild = makeBetweenFunc(0, 18);
console.log(isChild(100));
console.log(isChild(5));


// メソッドを定義
// オブジェクトのプロパティに関数を定義できる。
// これをメソッドと呼びます

const myMath = {
    PI: 3.14,
    square: function(num) {
        return num * num;
    },
    cube: function(num) {
        return num ** 3;
    }
}

console.log(myMath.PI);
console.log(myMath.square(3));
console.log(myMath.cube(3));

// メソッドの定義は頻繁に行うので、省略して書くこともできる
// 上で書いたコードの省略バージョンはこれ
const myMath2 = {
    PI: 3.14,
    square(num) {
        return num * num;
    },
    cube(num) {
        return num ** 3;
    }
}
console.log(myMath2.PI);
console.log(myMath2.square(3));
console.log(myMath2.cube(3));


// メソッドの中のthis
// 同じオブジェクト内の、他のプロパティを使いたい時にthisを活用しよう
const person = {
    first: "太朗",
    last: "山田",
    fullName() {
        return `${this.last} ${this.first}`;
    }
}
console.log(person.fullName());
console.log(person.last = "佐藤");
console.log(person.fullName());

const cat = {
    name: "たま",
    color: "grey",
    breed: "アメリカンショートヘア",
    cry() {
        return `${this.name}がにゃーと泣きました。`;
    }
}
console.log(cat.cry());

console.log("********************************")
// thisの値は、thisを使ってる関数がどのように呼ばれたかに依存する。
const cat2 = cat.cry;

console.log(cat.cry());
console.log(cat2());


// try-catch
// エラー回避
try {
    hello.toUpperCase();
} catch {
    console.log("エラーが起きました!!!!!!");
}
console.log("続いて実行しています。");

// 関数の中でも使える
function shout(msg) {
    try {
        console.log(msg.toUpperCase().repeat(3));
    } catch(error) {
        console.log("エラーが発生しました。");
        console.log("エラーの内容");
        console.log(error)
        console.log("エラーが発生したけど、try-catchしたため回避しています。");
    }
}
shout("横山最強！！！！");
shout(123456);
