// console.logとかalertとかprompt
// console.log()は自分が書いたコードを明示的に表示する
console.log("hello");
console.log(1 + 4);
// 引数を複数渡すこともできる
console.log(1 + 5, "hi", true);


// consoleはMathとかと同じで、JavaScriptに最初から入っているオブジェクト
// メソッドはlog以外に例えばwarnとかもある
console.warn("WARN");
// メソッドで他にもerrorとかもある
console.error("ERROR");
// でも基本的に使うのはlog

// alertはブラウザでダイヤログが出て来る
alert("やっほー");

// promptはブラウザでダイヤログが出てきて何か入力させることができる
prompt("数字を入力してください：")

let userInput = prompt("数字を入力してください：");


// stringをnumberに変える関数
console.log(parseInt("555"));
