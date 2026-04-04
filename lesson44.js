// returnについて
// 組み込みメソッドは実行すると値が返ってくる（returnされる）
// この値を保持しておける

function add(x, y) {
    return x + y;
}

const sum = add(10, 16);
sum;

// returnで関数をその時点で終わらせ、関数からどんな値を返すかも指定できる。
