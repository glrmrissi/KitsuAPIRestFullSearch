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
    'assets/js/loading/loading.js'
], function () {
    console.log("Scripts carregados");
})