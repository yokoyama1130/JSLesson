const form = document.querySelector("#searchForm");
form.addEventListener("submit", async function(e) {
    e.preventDefault();
    const searchTermInput = form.elements.query;
    const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchTermInput.value}`);
    console.log(res.data[0].show.image.midium);

    const img = document.createElement("IMG");
    img.src = res.data[0].show.image.medium;
    document.body.append(img);
});