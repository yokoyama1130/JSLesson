// クイズゲームを作ってみる

// 最初に数字を入力して、0からその数字までの間で数字をコンピュータで一個決める
// 決めた数字をユーザーが当てるクイズゲーム
let maximum = parseInt(prompt("数字を入力してください"));
while (!maximum) {
    maximum = parseInt(prompt("エラーが起きました。有効な数字を入力してください。"));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;
let count = 1;

let guess = prompt("ひとつ数字を決めました。数字を当ててみてください。");
while (parseInt(guess) !== targetNum) {
    if (guess === "q") break;
    count++;
    if (guess > targetNum) {
        guess = prompt("その数字より小さいです。もう一度当ててみてください。");
    } else {
        guess = prompt("その数字より大きいです。もう一度当ててみてください");
    }
}

if (guess === "q") {
    console.log("終了しました。");
} else {
    console.log(`おめでとう！${count}回目で当てました！`);
}
