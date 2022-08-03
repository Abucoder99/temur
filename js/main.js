(function() {
    "use strict";
    AOS.init({
        ease: 'slide',
        once: true
    });
    var slider = function() {
        var carouselCourses = document.querySelectorAll('.carousel-courses');
        if (carouselCourses.length > 0) {
            var coursesSlider = tns({
                container: '.carousel-courses',
                items: 1,
                mode: 'carousel',
                autoplay: true,
                animateIn: 'tns-fadeIn',
                animateOut: 'tns-fadeOut',
                speed: 700,
                nav: true,
                gutter: 20,
                controls: false,
                autoHeight: true,
                autoplayButtonOutput: false,
                responsive: {
                    0: {
                        items: 1,
                        gutter: 0
                    },
                    600: {
                        items: 2,
                        gutter: 20
                    },
                    1000: {
                        items: 3,
                        gutter: 20
                    }
                }
            });
        }
        var carouselSlider = document.querySelectorAll('.carousel-testimony');
        if (carouselSlider.length > 0) {
            var testimonySlider = tns({
                container: '.carousel-testimony',
                items: 1,
                mode: 'carousel',
                autoplay: true,
                animateIn: 'tns-fadeIn',
                animateOut: 'tns-fadeOut',
                speed: 700,
                nav: true,
                gutter: 20,
                controls: false,
                autoplayButtonOutput: false,
                responsive: {
                    0: {
                        items: 1,
                        gutter: 0
                    },
                    600: {
                        items: 2,
                        gutter: 20
                    },
                    1000: {
                        items: 3,
                        gutter: 20
                    }
                }
            });
        }
    }
    slider();
    'use trict';
    const animationDuration = 2000;
    const frameDuration = 1000 / 60;
    const totalFrames = Math.round(animationDuration / frameDuration);
    const easeOutQuad = t => t * (2 - t);
    const numberWithCommas = n => {
        return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
    const animateCountUp = el => {
        let frame = 0;
        const countTo = parseInt(el.innerHTML, 10);
        const counter = setInterval(() => {
            frame++;
            const progress = easeOutQuad(frame / totalFrames);
            const currentCount = Math.round(countTo * progress);
            if (parseInt(el.innerHTML, 10) !== currentCount) {
                el.innerHTML = numberWithCommas(currentCount);
            }
            if (frame === totalFrames) {
                clearInterval(counter);
            }
        }, frameDuration);
    };
    const runAnimations = () => {
        const countupEls = document.querySelectorAll('.countup');
        countupEls.forEach(animateCountUp);
    };
    var elements;
    var windowHeight;

    function init() {
        elements = document.querySelectorAll('.section-counter');
        windowHeight = window.innerHeight;
    }

    function checkPosition() {
        var i;
        for (i = 0; i < elements.length; i++) {
            var element = elements[i];
            var positionFromTop = elements[i].getBoundingClientRect().top;
            if (positionFromTop - windowHeight <= 0) {
                if (!element.classList.contains('viewed')) {
                    element.classList.add('viewed');
                    runAnimations();
                } else {
                    if (element.classList.contains('viewed')) {}
                }
            }
        }
    }
    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', init);
    init();
    checkPosition();
    const lightbox = GLightbox({
        touchNavigation: true,
        loop: true,
        autoplayVideos: true
    });
})()



// Navbar scrool color edit

window.addEventListener("scroll", function() {
    var navScroll = document.querySelector("header");
    navScroll.classList.toggle("fixed", window.scrollY > 0);
})