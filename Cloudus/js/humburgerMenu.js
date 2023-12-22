const hamburgerMenu = document.querySelector('.menu.on');
const hamburgerList = document.querySelector('.subList');
const Bg = document.querySelector('html');
hamburgerMenu.addEventListener('click', () => {
hamburgerMenu.classList.toggle('active');
hamburgerList.classList.toggle('active');
Bg.classList.toggle('scroll-prevent') // 追記
});

