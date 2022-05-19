const btn = document.querySelector('#bot')

btn.addEventListener('click', () => {
    window.scroll({top: window.innerHeight*1.4, behavior: "smooth"})
})

const btn2 = document.querySelector('#bot2')

btn2.addEventListener('click', () => {
    window.scroll({top: window.innerHeight*4.2, behavior: "smooth"})
})

//slide
 
//slide-end

const btn3 = document.querySelector('.topo')

btn3.addEventListener('click', () => {
    window.scrollTo({top: 0, behavior: "smooth"})
})