const btn = document.querySelector('#bot')

btn.addEventListener('click', () => {
    window.scroll({top: window.innerHeight, behavior: "smooth"})
})

//var btn = document.querySelector('.click');
//var imagem = document.querySelector('.img');
//var imagem2 = document.querySelector('.img2')

//btn.addEventListener('click', function(){
//    if (imagem.style.display, imagem2.style.display === "block") {
//        (imagem.style.display, imagem2.style.display = 'none');
//    }else{
//        imagem.style.display, imagem2.style.display = 'block';
//    }
//})
var btn1 = document.querySelector('.projetos')
var btn2 = document.querySelector('.projetos2')
var btn3 = document.querySelector('.projetos3')
var btn4 = document.querySelector('.projetos4')
var conteudo = document.querySelector('.info')
var conteudo2 = document.querySelector('.mult')
var conteudo3 = document.querySelector('.conta')
var conteudo4 = document.querySelector('.redes')

btn1.addEventListener('click', function(){
    if (conteudo.style.visibility === 'hidden') {
        (conteudo.style.visibility = 'visible')
    } else {
        (conteudo.style.visibility = 'hidden')
    }
})