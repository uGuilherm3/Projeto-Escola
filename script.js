const btn = document.querySelector('#bot')

btn.addEventListener('click', () => {
    window.scroll({top: window.innerHeight, behavior: "smooth"})
})

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

const btn2 = document.querySelector('.topo')

btn2.addEventListener('click', () => {
    window.scroll({top: 0, behavior: "smooth"})
})