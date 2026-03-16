// if文のネスト

const password = prompt("パスワードを入力してください");

// まずは個別でやってみる

// パスワードは6文字以上
if (password.length >= 6) {
    console.log("パスワードは十分な長さがあります。");
} else {
    console.log("パスワードが短すぎます。6文字以上にしてください。");
}

// パスワードは空白を含めてはいけない
if (password.indexOf(" ") === -1) {
    console.log("空白を含まない良いパスワードです。");
} else {
    console.log("パスワードは空白を含んではいけません。");
}


// 上の場合だと長いパスワードでOKだけど、空白を不運でてだめみたいなOKなのにNGみたいにふたつ出力されて良くない
// そういう場合はif文のネストさせる
if (password.length >= 6) {
    if (password.indexOf(" ") === -1) {
        console.log("素晴らしいパスワードです");
    } else {
        console.log("パスワードは空白を含んではいけません。");
    }
} else {
    console.log("パスワードが短すぎます。6文字以上にしてください。");
}
