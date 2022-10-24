
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
	const to = getScrollTopByHref(event.currentTarget)- 70;
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

