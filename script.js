
//btns
const menuItems = document.querySelectorAll('nav a[href^="#"]','.btns a[href^="#"]');

function getScrollTopByHref(element) {
	const id = element.getAttribute('href');
	return document.querySelector(id).offsetTop;
}

function scrollToPosition(to) {

	window.scroll({
	top: to,
	behavior: "smooth",
	})
}

function scrollToIdOnClick(event) {
	event.preventDefault();
	const to = getScrollTopByHref(event.currentTarget)- 90;
	scrollToPosition(to);
}

menuItems.forEach(item => {
	item.addEventListener('click', scrollToIdOnClick);
});

/*btn pro topo*/
const btn = document.querySelector('.topo')

btn.addEventListener('click', () => {
    window.scrollTo({top: 0, behavior: "smooth"})
})

const btn2 = document.querySelector('.topo2')

btn2.addEventListener('click', () => {
    window.scrollTo({top: 0, behavior: "smooth"})
})

const btn3 = document.querySelector('.topo3')

btn3.addEventListener('click', () => {
    window.scrollTo({top: 0, behavior: "smooth"})
})

//botões da gestão
function adicionar(){
	var ad = document.querySelector('.gestao .cards .content2')

	ad.classList.add("esp")
}
function remove(){
	var ad = document.querySelector('.gestao .cards .content2')

	ad.classList.remove("esp")
}

function adicionar2(){
	var btns = document.getElementById('card2')

	btns.classList.add("esp")
}
function remove2(){
	var btns = document.getElementById('card2')

	btns.classList.remove("esp")
}

function adicionar3(){
	var btns = document.getElementById('card3')

	btns.classList.add("esp")
}
function remove3(){
	var btns = document.getElementById('card3')

	btns.classList.remove("esp")
}

function adicionar4(){
	var btns = document.getElementById('card4')

	btns.classList.add("esp")
}
function remove4(){
	var btns = document.getElementById('card4')

	btns.classList.remove("esp")
}

function adicionar5(){
	var btns = document.getElementById('card5')

	btns.classList.add("esp")
}
function remove5(){
	var btns = document.getElementById('card5')

	btns.classList.remove("esp")
}
var bot = document.querySelector("main a")

bot.addEventListener('click', () => {
    window.scrollTo({top: window.innerHeight, behavior: "smooth"})
})