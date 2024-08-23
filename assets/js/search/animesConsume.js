let nextPageUrl = null;

async function fetchAnime(name, isLoadMore = false) {
    const url = isLoadMore && nextPageUrl ? nextPageUrl : `https://kitsu.io/api/edge/anime?filter[text]=${name}`;
    
    showLoading(); // SHOW

    try {
        const response = await fetch(url, {
            headers: {
                "Accept": "application/vnd.api+json",
                "Content-Type": "application/vnd.api+json",
            }
        });

        const data = await response.json();

        if (!isLoadMore) {
            document.getElementById('animeList').innerHTML = '';  // Limpa os resultados anteriores só se não for uma carga adicional
        }

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
            document.getElementById('animeList').appendChild(animeItem);
        });

        nextPageUrl = data.links.next;  // Guarda a URL da próxima página

        addClickEventToImages();
        closeSynopsis();
        hideLoading(); // HIDE

    } catch (error) {
        console.error('Erro ao buscar animes:', error);
        hideLoading(); // Caso algum um erro ele esconder o loading
    }
}

document.getElementById('animeName').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        const animeName = document.getElementById('animeName').value;
        const loadMoreButton = document.getElementById("loadMoreButton");
        loadMoreButton.style.display = "flex"
        nextPageUrl = null; // Reinicia o controle de páginas ao começar uma nova busca
        fetchAnime(animeName);
    }
});

// Função para carregar mais títulos
function loadMoreAnime() {
    const animeName = document.getElementById('animeName').value;
    if (nextPageUrl) {
        fetchAnime(animeName, true);  // Busca mais títulos sem remover os já exibidos
    }
}

document.getElementById('loadMoreButton').addEventListener('click', loadMoreAnime);
