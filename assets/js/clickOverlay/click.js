<<<<<<< HEAD
function addClickEventToImages() {
    const images = document.querySelectorAll('.img-anime-container');

    images.forEach(image => {
        image.addEventListener('click', function () {
            // Seleciona o contêiner do anime e, dentro dele, a descrição. 
            const descOverlay = this.nextElementSibling;
            console.log('Imagem clicada:', this);
            if (descOverlay) {
                // descOverlay.style.display = descOverlay.style.display === 'flex' ? 'none' : 'flex';
                descOverlay.classList.add('active')
                console.log("Descrição achada")
            } else {
                console.log("Não achou a descrição!")
            }
        });
    });
}

// Close-synopsis ___*( ￣皿￣)/#____

function closeSynopsis() {
    const btnCloseSynopsis = document.querySelectorAll('.close-synopsis');
    btnCloseSynopsis.forEach(btnClose => {
        btnClose.addEventListener('click', function () {
            const descOverlay = this.closest('.anime-container').querySelector(".desc-overlay");
            if(btnClose) {
                console.log('clicked in btnClose')
                descOverlay.classList.remove('active')
            } else {
                console.log('Your logic doenst makes sense');
            }
        });
    });
}

=======
function addClickEventToImages() {
    const images = document.querySelectorAll('.img-anime-container');

    images.forEach(image => {
        image.addEventListener('click', function () {
            // Seleciona o contêiner do anime e, dentro dele, a descrição. 
            const descOverlay = this.nextElementSibling;
            console.log('Imagem clicada:', this);
            if (descOverlay) {
                // descOverlay.style.display = descOverlay.style.display === 'flex' ? 'none' : 'flex';
                descOverlay.classList.add('active')
                console.log("Descrição achada")
            } else {
                console.log("Não achou a descrição!")
            }
        });
    });
}

// Close-synopsis ___*( ￣皿￣)/#____

function closeSynopsis() {
    const btnCloseSynopsis = document.querySelectorAll('.close-synopsis');
    btnCloseSynopsis.forEach(btnClose => {
        btnClose.addEventListener('click', function () {
            const descOverlay = this.closest('.anime-container').querySelector(".desc-overlay");
            if(btnClose) {
                console.log('clicked in btnClose')
                descOverlay.classList.remove('active')
            } else {
                console.log('Your logic doenst makes sense');
            }
        });
    });
}

>>>>>>> fad10b10131dc98d43be0e1096bbeb60a16e436f
