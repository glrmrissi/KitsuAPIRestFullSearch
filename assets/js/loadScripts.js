<<<<<<< HEAD
function loadScripts(scripts, callback) {
    let index = 0;

    function loadNextScripts() {
        if (index < scripts.length) {
            let script = document.createElement("script");
            script.src = scripts[index]
            script.onload = function () {
                console.log(`Scripts carregados: ${scripts[index]}`);
                index++;
                loadNextScripts();
            };
            script.onerror = function () {
                console.error(`Erro em: ${scripts[index]}`);
                index++;
                loadNextScripts();
            }
            document.head.appendChild(script)
        } else if (callback) {
            callback();
        }
    }
    loadNextScripts();
};

loadScripts([
    'assets/js/clickOverlay/click.js',
    'assets/js/search/animesConsume.js',
    'assets/js/trending/tdng.js',
], function () {
    console.log("Scripts carregados");
=======
function loadScripts(scripts, callback) {
    let index = 0;

    function loadNextScripts() {
        if (index < scripts.length) {
            let script = document.createElement("script");
            script.src = scripts[index]
            script.onload = function () {
                console.log(`Scripts carregados: ${scripts[index]}`);
                index++;
                loadNextScripts();
            };
            script.onerror = function () {
                console.error(`Erro em: ${scripts[index]}`);
                index++;
                loadNextScripts();
            }
            document.head.appendChild(script)
        } else if (callback) {
            callback();
        }
    }
    loadNextScripts();
};

loadScripts([
    'assets/js/clickOverlay/click.js',
    'assets/js/search/animesConsume.js',
    'assets/js/trending/tdng.js',
], function () {
    console.log("Scripts carregados");
>>>>>>> fad10b10131dc98d43be0e1096bbeb60a16e436f
});