// DOMイベント

// EVENT：ユーザーの入力やアクションに反応する。

const button = document.querySelector("button");
const h1 = document.querySelector("h1");
button.addEventListener("click", function() {
    const number1 = Math.floor(Math.random() * 255);
    const number2 = Math.floor(Math.random() * 255);
    const number3 = Math.floor(Math.random() * 255);

    const body = document.querySelector("body");
    body.style.backgroundColor = `rgb(${number1}, ${number2}, ${number3})`;
    h1.textContent = `rgb(${number1}, ${number2}, ${number3})`;
});






