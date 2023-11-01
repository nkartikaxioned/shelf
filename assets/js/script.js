const hamburger = document.querySelector('.hamburger'),
html = document.querySelector('html'),
hambarfirst = document.querySelector('.bar.first'),
hambarsecond = document.querySelector('.bar.second'),
hambarthird = document.querySelector('.bar.third'),
nav = document.querySelector('nav'),
navbar = document.querySelectorAll('nav ul li');



hamburger.addEventListener('click', () => {

    hambarfirst.classList.toggle('active1');
    hambarsecond.classList.toggle('active2');
    hambarthird.classList.toggle('active3');
    nav.classList.toggle('active-nav');
    html.classList.toggle('html-scroll')
})






















