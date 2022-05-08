const btn = document.querySelector('#bot')

btn.addEventListener('click', () => {
    window.scroll({top: window.innerHeight*2.19, behavior: "smooth"})
})

const btn2 = document.querySelector('#bot2')

btn2.addEventListener('click', () => {
    window.scroll({top: window.innerHeight*3.9, behavior: "smooth"})
})

//slide
var tempo = 6000,
    primeira = 0,
    images = document.querySelectorAll(".slide article")
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
//slide-end

const btn3 = document.querySelector('.topo')

btn2.addEventListener('click', () => {
    window.scroll({top: 0, behavior: "smooth"})
})