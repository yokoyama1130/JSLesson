// APIについて

fetch("https://swapi.info/api/people/1")
    .then((resolve) => {
        console.log(resolve);
        // jsonを取得する
        return resolve.json();
    })
    .then((date) => {
        console.log(date);
    })
    .catch((reject) => {
        console.log(reject);
    })

// Promiseを使って書くと
const peaple = async () => {
    try {
        const res = await fetch("https://swapi.info/api/people/1");
        const date = await res.json();
        console.log(`Promise使った！！`, date);
    } catch(err) {
        console.log(`エラー`, err)
    }
}

peaple();