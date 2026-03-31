// 複数の引数
// 複数のパラメータを用意することができる

function greet(firstName, lastName) {
    console.log(`Hi, ${firstName} ${lastName[0]}.`);
}

greet("Ken", "Fukuyama");


// もう少し複雑な関数
function repeat(str, numTimes) {
    let result = "";
    for (let i = 0; i < numTimes; i++) {
        result += str;
    }
    console.log(result);
}

repeat("横山最強！！", 5);
