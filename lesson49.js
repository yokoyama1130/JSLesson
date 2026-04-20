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



// イベントのthis



// キーボードオブジェクトとイベントオブジェクト



// フォームイベント
const tweetForm = document.querySelector("#tweetForm");
// 投稿を入れる場所のタグも取ってくる
const tweets = document.querySelector("#tweets");
tweetForm.addEventListener("submit", function(e) {
    // デフォルトの動作を止める
    e.preventDefault();

    // // これをいちいち全部やってくのはめんどくさい
    // // 他にもっと簡単な方法がある
    // // 入力したものを取ってくる
    // const usernameInput = document.querySelectorAll("input")[0];
    // const tweetInput = document.querySelectorAll("input")[1];
    // // 入力されたのはinput要素のvalueに保存される。
    // console.log(usernameInput.value);
    // console.log(tweetInput.value);

    // もっと簡単な方法
    console.log(tweetForm.elements.username.value);


    // 一覧を作成する
    // まず取ってくる
    const username = tweetForm.elements.username.value;
    const tweet = tweetForm.elements.tweet.value;

    // タグの作成
    const li = document.createElement("li");
    const bTag = document.createElement("b");
    
    // bにユーザー名を載せる
    bTag.append(username);
    // liに投稿を載せる
    li.append(bTag);
    // bTagの中に投稿を入れる
    li.append(` - ${tweet}`);

    // 最後にHTMLにあるulタグに入れる
    tweets.append(li);

    // これは確認
    console.log(bTag);

    // 最後に入力されたものをリセットさせたい
    tweetForm.elements.username.value = "";
    tweetForm.elements.tweet.value = "";
});

