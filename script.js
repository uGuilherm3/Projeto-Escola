/*btn1*/
const btn = document.querySelector('#bot')

btn.addEventListener('click', () => {
    window.scroll({top: window.innerHeight*1.4, behavior: "smooth"})
})

/*btn2*/
const btn2 = document.querySelector('#bot2')

btn2.addEventListener('click', () => {
    window.scroll({top: window.innerHeight*4.2, behavior: "smooth"})
})

/*btn3*/
const btn3 = document.querySelector('.topo')

btn3.addEventListener('click', () => {
    window.scrollTo({top: 0, behavior: "smooth"})
})

//rolagem
const target = document.querySelectorAll('[data-anime]');
const animate = 'anima';

function rolar() {
    const topo = window.pageYOffset + ((window.innerHeight * 3) / 4);
    target.forEach(function(element) {
        if((topo) > element.offsetTop) {
            element.classList.add('anima')
        } else {
            element.classList.remove('anima')
        }
    })
}

window.addEventListener('scroll', function() {
    rolar();
})
