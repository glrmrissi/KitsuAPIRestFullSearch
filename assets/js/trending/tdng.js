async function fetchTrendingsAnimes() {
    fetch('https://kitsu.io/api/edge/trending/anime')
    .then(response => response.json())
    .then(data => {
        const trendingAnimes = document.getElementById('trendingAnimes');

        data.data.forEach(anime => {
            const trend = document.createElement('div');
            trend.className ='trendAnime';
            trend.innerHTML = `
                <div class="animetrending">
                    <h5>${anime.attributes.titles.en_jp}</h5>
                    <img src="${anime.attributes.posterImage.small}">
                </div>
            `;
            trendingAnimes.appendChild(trend)
        });
    })
    .catch(error => {
        console.log(error, "ERROR")
    })
}


fetchTrendingsAnimes()