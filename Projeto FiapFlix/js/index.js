let listaDeFilmes = ['https://a-static.mlcdn.com.br/1500x1500/crepusculo-simples-paris-filmes-aliance/discocenter/cd7f7216baff11eb8fec4201ac18500e/cf9a03952edd2643b62d401d5471273d.jpg', 'https://play-lh.googleusercontent.com/em2griqrHoxmxEss_WM5Fi2iqSEKrEfLNAltjX54lREOR0nz0du__KuSi2bA_YNjS4w', 'https://http2.mlstatic.com/D_NQ_NP_734566-MLB46033044017_052021-O.jpg', 'https://m.media-amazon.com/images/I/81ksNXITStL._AC_SX466_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/91WgpA0pjOL.jpg', 'https://images-na.ssl-images-amazon.com/images/I/91GXWbLwKbL.jpg', 'https://br.web.img3.acsta.net/medias/nmedia/18/90/59/44/20103781.jpg' ]

let listaDeTitulos = ['Crepúsculo', 'Interestellar', 'Harry Potter e o Prizioneiro de Azkabah', 'The Big Bang Theory', 'Black Clover', 'Avatar - A lenda de Aag', 'As Crônicas de Nárnia'];

//DOM document object model

let catalogo = document.querySelector('#catalogo')
let i = 0
let erro = document. querySelector('#error')

for (i; i < listaDeFilmes.length; i++) {
    catalogo.innerHTML += `<div class = "filme">
    <img src=${listaDeFilmes[i]} alt=${listaDeFilmes[i]}><figcaption>${listaDeTitulos[i]}
    </div>`
}

let filmeRepetido = true

function cadastrar() {
    let novoFilme = document.querySelector('#filme').value //value pega o valor que foi digitado no input 

    let novoTitulo = document.querySelector('#titulo').value
    
    if (listaDeFilmes.includes(novoFilme) || listaDeTitulos.includes(novoTitulo)) {
    erro.innerHTML = `Filme ${novoTitulo} já cadastrado.`  
    } else {
       listaDeFilmes.push(novoFilme)
       listaDeTitulos.push(novoTitulo)
       error.innerHTML = ''
       mostrarFilmes()


    }

    document.querySelector('#filme'). value = ''
    document.querySelector('#titulo'). value = ''
}

function mostrarFilmes(){
    do {
        catalogo.innerHTML += `
        <div class="filme">
            <img src=${listaDeFilmes[i]} alt=${listaDeTitulos[i]}><figcaption>${listaDeTitulos[i]}
        </div>
        `
        i ++
    } while (i < listaDeFilmes.length)
}