async function fetchAnime(name) {
    const url = `https://kitsu.io/api/edge/anime?filter[text]=${name}`;
    showLoading(); // SHOW
    fetch(url, {
        headers: {
            "Accept": "application/vnd.api+json",
            "Content-Type": "application/vnd.api+json",
        }
    })
        .then(response => response.json())
        .then(data => {
            const animeList = document.getElementById('animeList');
            animeList.innerHTML = '';  // Limpa os resultados anteriores

            data.data.forEach(anime => {
                const animeItem = document.createElement('section');
                animeItem.className = 'anime-item';
                animeItem.innerHTML = `
                <div class="anime-display">
                <div class="anime-container"> 
                    <div class="card-front">
                        <h4>${anime.attributes.canonicalTitle}</h4>
                        <img class="img-anime-container" id="openInfosAnimes" src="${anime.attributes.posterImage.small}" alt="${anime.attributes.canonicalTitle}">
                    </div>
                    <div class="desc-overlay">
                            <span class="close-synopsis"><img src="assets/img/close.svg" /></span>
                            <div class="desc-paragraph">
                                <p>&nbsp; ${anime.attributes.synopsis}</p>
                                <h3>Age: &nbsp;${anime.attributes.ageRating}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            `;
                animeList.appendChild(animeItem);
            });
  
            addClickEventToImages();
            closeSynopsis();
            hideLoading(); // HIDE
            console.log("Adicionado: addClickEventToImages")
        })

        .catch(error => {
            console.error('Erro ao buscar animes:', error);
        });
}

document.getElementById('animeName').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        const animeName = document.getElementById('animeName').value;
        fetchAnime(animeName); // Aguarda a função fetchAnime ser completada    
    }
});