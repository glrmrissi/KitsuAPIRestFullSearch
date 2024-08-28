
 const fetchTrendingsAnimes = async () => {
    fetch('https://kitsu.io/api/edge/trending/anime?page[limit]=5') // Tentando setar um limite para a página, deu errado
    .then(response => response.json())
    .then(data => {
        const trendingAnimes = document.getElementById('trendingAnimes');

        data.data.forEach(anime => {
            const trend = document.createElement('li');
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
        console.log(error, "%cERROR", "color: red;")
    })
}

fetchTrendingsAnimes()