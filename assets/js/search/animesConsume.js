async function fetchAnime(name) {
    const url = `https://kitsu.io/api/edge/anime?filter[text]=${name}`;

    fetch(url, {
        headers: {
            "Accept": "application/vnd.api+json",
            "Content-Type": "application/vnd.api+json",
        }
    })
        .then(response => response.json())
        .then(data => {
            const animeList = document.getElementById('animeList');
            animeList.innerHTML = '';  // Limpa resultados anteriores

            data.data.forEach(anime => {
                const animeItem = document.createElement('div');
                animeItem.className = 'anime-item';
                animeItem.innerHTML = `
                <div class="anime-container"> 
                    <h4>${anime.attributes.canonicalTitle}</h4>
                    <img class="img-anime-container" id="openInfosAnimes" src="${anime.attributes.posterImage.small}" alt="${anime.attributes.canonicalTitle}">
                    <div class="desc-overlay">
                    <span class="close-synopsis">X</span>
                    <div class="desc-paragraph">
                        <p>${anime.attributes.synopsis}</p>
                        <h3>${anime.attributes.url}</h3>
                        </div>
                    </div>
                </div>
            `;
                animeList.appendChild(animeItem);
            });
            addClickEventToImages();
            closeSynopsis();
            console.log("Adicionado: addClickEventToImages")
        })
        
        .catch(error => {
            console.error('Erro ao buscar animes:', error);
        });
}

document.getElementById('fetchButton').addEventListener('click', async function () {
    const animeName = document.getElementById('animeName').value;
    await fetchAnime(animeName); // Aguarda a função fetchAnime ser completada
});