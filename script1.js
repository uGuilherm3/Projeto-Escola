/*slide*/
var tempo = 4000,
imagens = document.querySelectorAll("article img"),
proxima = 0,
max = imagens.length;

function next(){
    imagens[proxima].classList.remove("select")

    proxima++

    if(proxima >= max){
        proxima = 0
    }
    imagens[proxima].classList.add("select")
}

function inicio(){
    setInterval(()=> {
        next()
    }, tempo)
}
inicio()