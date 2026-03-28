// ループの中のbreak
let input = prompt("何か入力してください");
while (true) {
    input = prompt(input);
    if (input === "終了") {
        break;
    }
}


for (let i = 1; i <= 1000; i++) {
    console.log(i);
    if (i === 100) break;
}
