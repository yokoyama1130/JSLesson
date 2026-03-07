// テンプレートリテラル
let product = "チョコレート";
let price = 110;
let quantity = 4;

// これでチョコレートを4個買って440円だった。という文章を作るときは、、、
console.log(product + "を" + quantity + "個買って" + price * quantity + "円だった。")
// こんな感じで+が多くなってしまう。
// テンプレートリテラルを使うと、文字列の中に変数や式、改行を含めることができる。
// バックティック（`）と${}を使う
console.log(`${product}を${quantity}個買って${price*quantity}円だった。`)
// こんなこともできる
console.log(`${product.slice(0, 3)}を${quantity}個買って${price*quantity}円だった。`)
