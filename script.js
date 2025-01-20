//Menu Toggle
const navMenu = document.querySelector('.nav_menu2');
const closeMenu = document.querySelector('.closemenu');
const hamburger = document.querySelector('.hamburger');

hamburger.onclick = () => {
    // menuIcon.classList.toggle('bx-x');
    navMenu.classList.toggle('active');
}

// scroll sections active link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header ul li a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header ul li a[href*=' + id + ']').classList.add('active')
            })
        }
    })

    // remove toggle icon and navbar when click navbar link (scroll)
    navMenu.classList.remove('active');
}



// /Scroll reveal
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 1000,
    delay: 50,
});
ScrollReveal().reveal('.hero_content img, .content', {origin: 'top'});
ScrollReveal().reveal('.left', {origin: 'left'});
ScrollReveal().reveal('.right', {origin: 'right'});
ScrollReveal().reveal('.head, .details, .cards', {origin: 'bottom'});

