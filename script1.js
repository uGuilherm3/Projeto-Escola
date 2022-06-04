
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

const btn = document.querySelector('.topo')

btn.addEventListener('click', () => {
    window.scrollTo({top: 0, behavior: "smooth"})
})