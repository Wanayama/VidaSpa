// /Scroll reveal
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});
ScrollReveal().reveal('.hero_content img, .content, .cards', {origin: 'top'});
ScrollReveal().reveal('.left', {origin: 'left'});
ScrollReveal().reveal('.right', {origin: 'right'});
ScrollReveal().reveal('.head, .details', {origin: 'bottom'});