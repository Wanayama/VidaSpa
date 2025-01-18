//Menu Toggle
const navMenu = document.querySelector('.nav_menu2');
const closeMenu = document.querySelector('.closemenu');
const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', show);
closeMenu.addEventListener('click', close);
function show(){
    navMenu.style.display = 'flex';
    navMenu.style.top = "0";
}
function close(){
    navMenu.style.top = '-120%';
}



// /Scroll reveal
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});
ScrollReveal().reveal('.hero_content img, .content', {origin: 'top'});
ScrollReveal().reveal('.left', {origin: 'left'});
ScrollReveal().reveal('.right', {origin: 'right'});
ScrollReveal().reveal('.head, .details, .cards', {origin: 'bottom'});