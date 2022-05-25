const btn = document.querySelector('.btn')

btn.addEventListener('click', () => {
    window.scroll({top: window.innerHeight*0.8, behavior: "smooth"})
})