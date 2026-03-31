// 関数入門

// 再利用可能な処理
// 関数を使うことでコードの再利用が可能になる
// まとまったコードを定義して、後で実行できる
// あらゆる場面で使う

// 関数の書き方
// 定義しただけだと実行されない
function shout() {
    console.log("ああああああ！！！");
    console.log("もう・・・");
    console.log("いやだーーーー！！！！");
}

shout();
shout();
shout();
shout();
shout();
shout();
shout();


// 関数の定義を下に書いて、実行を上で書いても大丈夫
singSong();
singSong();
singSong();
singSong();

function singSong() {
    console.log("ド");
    console.log("レ");
    console.log("ミ");
}