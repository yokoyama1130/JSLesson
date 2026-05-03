// promiseを作る

// newでオブジェクトを作る
// コールバック関数を使う
// 引数にresolveとrejectを置く（なんでも良いけど、一般的にこれ）
// 成功した時はresolveで失敗した時はreject
// new Promise((resolve, reject) => {

// })

// Promiseを返してくれるような関数を作ろう
const fakeRequest = (url) => {
    // ここでPromiseを返すようにする
    // 第一引数にresolve、第二引数にrejectを指定
    return new Promise((resolve, reject) => {
        // ランダムな数字を作ってその数字の秒後に実行されるようにする。
        const rand = Math.random();
        setTimeout(() => {
            if (rand < 0.7) {
                resolve("ダミーデータ！！");
                // resolveした後に関数が終わるわけではないのでreturnする必要がある。elseを使ってる場合は大丈夫
                return;
            }
            reject("コネクションタイムアウト！！");
        }, rand);
    });
}

fakeRequest("/hoge")
    .then((data) => { // data = "ダミーデータ"
        console.log("成功！！！");
        console.log(data);
    })
    .catch((err) => { // err = コネクションタイムアウト！！
        console.log("失敗！！")
        console.log(err);
    })
    
