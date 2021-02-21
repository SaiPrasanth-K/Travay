let header = document.querySelector('.header');
let hMenu = document.querySelector('.menu');

hMenu.addEventListener('click', function () {
	header.classList.toggle('menu-open');
})