// alert("Hello World!")

let menu = document.getElementById("menu")
let iconeBarras = document.getElementById("icone-barras")
let iconeX = document.getElementById("icone-x")

function abreFechaMenu() {
    // console.log("Working")

    //menu fechado - tem a classe menu-fechado
    //menu aberto - não tem a classe menu-fechado

    // menu.classList.toggle("menu-fechado")

    if (menu.classList.contains("menu-fechado")) {
        //abrir o menu - tirar a classe menu-fechado
        menu.classList.remove("menu-fechado")

        // mostrar icone-barras
        iconeX.style.display = "inline"
        //esconder o icone-x
        iconeBarras.style.display = "none"

    } else {
        //fechar o menu - adicionar a classe menu-fechado

        menu.classList.add("menu-fechado")

        // mostrar o icone X
        iconeBarras.style.display = "inline"
        // esconder o icone barras
        iconeX.style.display = "none"
    }
}

onresize = () => {
    //abrir o menu - tirar a classe menu-fechado
    menu.classList.remove("menu-fechado")

    // mostrar icone-barras
    iconeX.style.display = "inline"

    //esconder o icone-x
    iconeBarras.style.display = "none"
}

let banner = document.querySelector(".banner")

let slides = [
    "primeiro-banner",
    "segundo-banner",
    "terceiro-banner"
]

let slideAtual = 0

banner.classList.add(slides[slideAtual])

function mostrarProximoSlide() {
    // banner.classList.add(slides[slideAtual])
    banner.classList.remove(slides[slideAtual])

    if (slideAtual < 2) {
        slideAtual++

    } else {

        slideAtual = 0
    }

    banner.classList.add(slides[slideAtual])
}

function mostrarSlideAnterior(){

    banner.classList.remove(slides[slideAtual])

    if (slideAtual > 0) {
        slideAtual--

    } else {

        slideAtual = 2
    }

    banner.classList.add(slides[slideAtual])
    
}

function selecionarSlide(indiceSlide) {

    banner.classList.remove(slides[slideAtual])

    slideAtual = indiceSlide

    banner.classList.add(slides[slideAtual])

    
}