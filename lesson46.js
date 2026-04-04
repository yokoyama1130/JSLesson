// 配列のコールバックを使ったメソッド

// forEachメソッド
// コールバック関数を受け取り、配列の要素毎に関数が呼ばれる。
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

function print(element) {
    console.log(element);
}

console.log("一番めんどいやり方");

// こうやっても良いけど、、、
print(numbers[0]);
print(numbers[1]);

console.log("forEachで書く");

// こうすれば楽！
numbers.forEach(print);

console.log("forEachの中に直接関数を入れる");

// だけど、forEachの中に関数を入れることの方が多い。
numbers.forEach(function (element) {
    console.log(element);
});

console.log("for文で回す")
// もちろんfor文で回すのでも良い
for (let elem of numbers) {
    console.log(elem);
}


// 違う例
const movies = [
    {
        titles: "Amadeus",
        score: 99
    },
    {
        titles: "Stand By Me",
        score: 85
    },
    {
        titles: "Alien",
        score: 90
    }
];

movies.forEach(function(movie) {
    console.log(`${movie.titles} - ${movie.score}/100`);
});



// mapメソッド
// 与えられた関数を配列のすべての要素に対して呼び出し、その結果からなる新しい配列を生成する。
const doubles = numbers.map(function(num) {
    return num * 2;
});
console.log(numbers);
console.log(doubles);

// 他の例で、映画のタイトルだけ欲しい場合をやってみる
const title = movies.map(function(movie) {
    return movie.titles;
});
console.log(movies);
console.log(title);

// アロー関数
// 通常の関数式の簡潔な代替構文（ただし制限がある）

// 通常の関数式
const add = function (x, y) {
    return x + y;
}
// アロー関数
const add2 = (x, y) => {
    return x + y;
}

// もう一例
const square = (num) => {
    return num * num;
}
console.log(square(5));

// パラメータがない場合は引数がないというのを()で伝える必要がある
const rollDie = () => {
    return Math.floor(Math.random() * 6) + 1;
}
console.log(rollDie());

// ちなみにパラメータが一個しかない時は()を省略することができる
const square2 = num => {
    return num * num;
}
console.log(square2(5));


// アロー関数の暗黙的なreturn（式が一つの時）
// returnを消して、{}を()に変えることができる。この時は;は消す。)の後に;をつける。
const rollDie2 = () => (
    Math.floor(Math.random() * 6) + 1
);
console.log(rollDie2());

// さらに省略することもできる（一行しかなかった場合）
const add3 = (x, y) => x + y;
console.log(add3(4, 5));


// アロー関数まとめ
// これは今までの書き方
const newMovies = movies.map(function(movie) {
    return `${movie.titles} - ${movie.score / 10}`;
});
console.log(newMovies);

// ちょっと長すぎるけど、これが一番省略したアロー関数
const newMovies2 = movies.map(movie => `${movie.titles} - ${movie.score / 10}`);
console.log(newMovies2);



// 番外編
// setTimeoutとsetInterval
// setTimeoutは関数を何秒後に実行するか指定することができる
setTimeout(() => {
    console.log("やっほー！！！");
}, 3000);

// setIntervalは決められた時間の間隔でずっと実行し続ける
const id = setInterval(() => {
    console.log(Math.random());
}, 2000);
// これを止めるにはclearIntervalを使う
// setIntervalは実行するときにidが作られるので、そのidをclearIntervalに渡すことで止められる
// clearInterval(id);
setTimeout(() => {
    clearInterval(id);
    console.log("停止しました。");
}, 10000);


// filter
// 提供されたテスト関数（コールバック関数）を満たす要素からなる新しい配列を生成する
const underTen = numbers.filter((num) => {
    return num < 10;
});
console.log(underTen);



// everyとsome
// every；配列内のすべての要素が指定されたテスト関数を満たすかどうかをtrueかfalseで返す
const exams = [80, 98, 92, 78, 77, 90, 89, 84, 81, 77];

const result = exams.every(exam => exam >= 60);
console.log(result);

// some：「一つでも」テスト関数を満たす要素があればtrueを返す
const result2 = exams.some(exam => exam >= 99);
console.log(result2);



// reduce
// 配列の各要素に対して（引数で与えられた）reduce関数を実行して、「単一の出力値」を生成する。
const reduce1 = [3, 5, 7, 9,11].reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
});
console.log(reduce1);

// 他の例
const prices = [980, 1500, 1980, 4980, 2980];
// 一旦合計を求めるか
let total = 0;
for (let price of prices) {
    total += price;
}
console.log(total); // 12420
// これをreduceを使って書くと
const total2 = prices.reduce((total, price) => total + price);
console.log("reduce使ったやつ");
console.log(total2);

// もっとすごいことができる
// 例えば配列の中の最小値を求めたかったら
const minPrice = prices.reduce((min, price) => {
    if(min > price) {
        return price;
    }
    return min;
});
console.log("reduceを使った配列の最小値");
console.log(minPrice);

// オブジェクトとreduce
const yokoyamaBestMovie = [
    {
        title: "レオン",
        score: 99,
        years: 1999
    },
    {
        title: "3丁目の夕日",
        score: 100,
        years: 2000
    },
    {
        title: "タイタニック",
        score: 98,
        years: 1980
    },
    {
        title: "ウルフオブウォールストリート",
        score: 90,
        years: 1990
    },
    {
        title: "ララランド",
        score: 89,
        years: 2024
    }
];
const bestMovies = yokoyamaBestMovie.reduce((highScore, currentScore) => {
    if (highScore.score > currentScore.score) {
        return highScore;
    }
    return currentScore;
});
console.log("一番スコアが高い映画");
console.log(bestMovies);

// reduceに渡せる初期値
const evens = [2, 4, 6, 8];
// reduceの2個目の引数に初期値を与えることができる。
const sum = evens.reduce((sum, num) => sum + num, 100);
console.log(`初期値ありのreduce ${sum}`);



// アロー関数とthis
// アロー関数と普通の関数ではthisが違うよーってことを覚えておこう！！！
const person = {
    firstName: "Tora",
    lastName: "Yamada",
    // 今までの書き方
    // fullName: function() {
    //     return `${this.lastName} ${this.firstName}`;
    // }
    // ここをアロー関数で書くとthisの位置がwindowになる。
    fullName: () => {
        return `${this.lastName} ${this.firstName}`;
    }
}
console.log(person.fullName());

