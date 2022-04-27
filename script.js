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
var tempo = 3000,
    primeira = 0,
    images = document.querySelectorAll(".slides img")
    max = images.length;

    function proxima() {
        images[primeira].classList.remove("selecionado")
        primeira++
        if(primeira >= max)
        primeira = 0
        images[primeira].classList.add("selecionado")
    }

    function inicio() {
        setInterval(() => {
            proxima()
        }, tempo)
    }

    window.addEventListener("load", inicio)  