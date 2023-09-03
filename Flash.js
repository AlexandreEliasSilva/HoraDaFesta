var randomColor = false;

function alternarCor() {
    if (randomColor) {
        stopFlash();
    } else {
        startFlash();
    }
}

function startFlash() {
    randomColor = true;
    mudarCor();
}

function stopFlash() {
    randomColor = false;
}

function mudarCor() {
    if (!randomColor) {
        return; 
    }

    var cor = CorAleatoria();
    document.body.style.backgroundColor = cor;

    setTimeout(mudarCor, 80); 
}

function CorAleatoria() {
    var letras = "0123456789ABCDEF";
    var cor = "#";

    for (var i = 0; i < 6; i++) {
        cor += letras[Math.floor(Math.random() * 16)];
    }

    return cor;
}
