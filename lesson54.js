// Axios
axios.get("https://swapi.info/api/people/1")
    .then((res) => {
        console.log(`レスポンス`, res)
    })
    .catch((e) => {
        console.log(`エラー`, e)
    })


// asyncとawaitを使ったやり方
const getPeople = async (id) => {
    try {
        const res = await axios.get(`https://swapi.info/api/people/${id}`);
        console.log(res.data);
    } catch(e) {
        console.log(`エラー`, e);
    }
}

getPeople(2);
getPeople(5);
