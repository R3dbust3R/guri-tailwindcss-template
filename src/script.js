// main navigation toggle 
const mainNav = document.getElementById('main-nav');
const mainNavToggle = document.getElementById('main-nav-toggle');
mainNavToggle.addEventListener('click', () => {
    if (mainNav.classList.contains('left-[-250px]')) {
        mainNav.classList.remove('left-[-250px]');
        mainNav.classList.add('left-0');
    } else {
        mainNav.classList.add('left-[-250px]');
        mainNav.classList.remove('left-0');
    }
})
// main navigation toggle



// scroll to top 
const scrollToTop = document.getElementById('scroll-to-top');
scrollToTop.addEventListener('click', () => {

    window.scrollTo({ top: 0 });

});

window.onscroll = () => {
    if (window.scrollY > 500) {
        scrollToTop.classList.remove('-right-24');
        scrollToTop.classList.add('right-0');
        
    } else {
        scrollToTop.classList.remove('right-0');
        scrollToTop.classList.add('-right-24');
    }
};
// scroll to top 




// testimonials slideshow
const slideShowBullets = document.querySelectorAll('#slideShowBullets span');
const slideShows = document.querySelectorAll('#slideshowContainer .testimonials-block');
slideShowBullets.forEach(bullet => {
    bullet.addEventListener('click', () => {

        slideShowBullets.forEach(bullet2 => {
            bullet2.classList.remove('active-bullet');
        });

        bullet.classList.add('active-bullet');
        
        slideShows.forEach(slideShow => {
            slideShow.classList.add('hidden');
        });

        document.querySelector(bullet.dataset.show).classList.remove('hidden');

    });
});
// testimonials slideshow
