// asyncについて
// asyncを使って関数を作ることで、その関数がPromiseを返すようになる。
async function hello() {
    
}

// アロー関数でも使える
const sing = async () => {
    throw new Error("問題が起きました。");
    return "aaaaaaaaaaa";
}

// Promiseを返すので、thenが使える
sing()
    .then((data) => {
        console.log("成功：", data);
    })
    .catch((err) => {
        console.log("失敗！！：", err);
    })

// 関数が値を返せば、Promiseはその値でresolveする
// 関数がエラーをthrowした場合、Promiseはそのエラーでrejectする



// もう少し実用的な例
