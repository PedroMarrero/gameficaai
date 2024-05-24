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

function mostrarSlideAnterior() {

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

////////////////////////////// carregamento dinânmico dos cases 

let listaCases = [
    // {
    //     imagem: "https://unsplash.it/600/400?image-14",
    //     descricao: "Uma empresa de tecnologia lança um desafio de gamificação onde os funcionários devem propor e implementar ideias inovadoras."
    // },
    // {
    //     imagem: "https://unsplash.it/600/400?image-41",
    //     descricao: "Uma empresa de consultoria cria uma narrativa interativa de gamificação para seu programa de treinamento."
    // },
    // {
    //     imagem: "https://unsplash.it/600/400?image-100",
    //     descricao: "Uma empresa de vendas implementa uma competição gamificada entre equipes que competem pelo topo do ranking."
    // },
    // {
    //     imagem: "https://unsplash.it/600/400?image-62",
    //     descricao: "Uma empresa de saúde promove o bem-estar dos funcionários através de um desafio de gamificação de condicionamento físico."
    // },
]

function renderizarCases(){
    // encontrar o elemento para inserir os cards

    let containerCards = document.querySelector (".container-cards")

    //variavel para guardar o html dos cases montados 
    let template = ""
    
    // para cada case da listaCases
    listaCases.forEach(cardCase => {
        
        // montar o html do card, passando os atributos do case
       template += `<div class="card">
       <img src= ${ cardCase.imagem } alt="">
       <p> ${ cardCase.descricao}</p>
       <button>Ver Mais</button>
       </div>`
    })

    containerCards.innerHTML = template

    
    // inserir html dos cases montados no elemento container-cards 
}