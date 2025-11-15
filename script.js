// LISTA DE FOTOS DE CADA CARRO
let fotos = {
    cruze: ["img1.jpg", "img2.jpg", "img3.jpg"],
    elantra: ["img1.jpg", "img2.jpg", "img3.jpg"],
    civic: ["img1.jpg", "img2.jpg", "img3.jpg"],
    triton: ["img1.jpg", "img2.jpg", "img3.jpg"]
};

// ÍNDICE DE CADA CARROSSEL
let indice = {
    cruze: 0,
    elantra: 0,
    civic: 0,
    triton: 0
};

function mostrarFoto(nome) {
    let img = document.getElementById(nome);
    img.src = `imagens/${nome}/` + fotos[nome][indice[nome]];
}

function voltar(nome) {
    if (indice[nome] > 0) {
        indice[nome]--;
    } else {
        indice[nome] = fotos[nome].length - 1;
    }
    mostrarFoto(nome);
}

function avancar(nome) {
    if (indice[nome] < fotos[nome].length - 1) {
        indice[nome]++;
    } else {
        indice[nome] = 0;
    }
    mostrarFoto(nome);
}
