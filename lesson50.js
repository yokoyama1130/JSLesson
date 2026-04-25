const input = document.querySelector("input");

// changeイベントはフォーカスがなくなった時にイベントが発火する
input.addEventListener("change", function(e) {
    console.log("change!!!");
});

// inputイベントは入力するたびにイベントが発火する
input.addEventListener("input", function(e) {
    console.log("input!!!");
});