// GSAP animation for the icon
gsap.fromTo(
    ".enroll-button i", // Target the icon inside the button
    { y: -5 }, // Initial position (y-axis)
    {
        y: 5, // Move 10px down (opposite direction after going up)
        repeat: -1, // Infinite repeat
        yoyo: true, // Make the animation go back and forth (smooth)
        duration: 1.5, // Duration of each cycle
        ease: "power1.inOut" // Smooth easing for the animation
    }
);


/* Testimonial Section Start  */


// const swiper = new Swiper('.slider-wrapper', {
//     loop: true,
//     grabCursor: true,
//     spaceBetween: 30,
//     // Pagination bullets
//     pagination: {
//       el: '.swiper-pagination',
//       clickable: true,
//       dynamicBullets: true
//     },
//     // Navigation arrows
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
//     autoplay: {
//         delay: 3000,         // 3 seconds delay
//         disableOnInteraction: false // User swipe kare toh bhi autoplay chalu rahe
//       },
//     // Responsive breakpoints
//     breakpoints: {
//       0: {
//         slidesPerView: 1
//       },
//       768: {
//         slidesPerView: 2
//       },
//       1024: {
//         slidesPerView: 3
//       }
//     }
//   });

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    speed: 3000,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
    },
    loopAdditionalSlides: 1,
    freeMode: {
        enabled: true,
        momentum: false,
    },
    breakpoints: {
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 4 }
    }
});

document.querySelector(".swiper").addEventListener("click", function () {
    swiper.autoplay.start();
});


document.querySelector(".swiper").addEventListener("click", function () {
    swiper.autoplay.start();
});


/* frequently asked question section  */
document.addEventListener('DOMContentLoaded', () => {
    const accordions = document.querySelectorAll('.accordions__item');

    accordions.forEach(el => {
        el.addEventListener('click', (e) => {
            const self = e.currentTarget;
            const control = self.querySelector('.accordions__control');
            const content = self.querySelector('.accordions__content');

            self.classList.toggle('open');

            if (self.classList.contains('open')) {
                control.setAttribute('aria-expanded', true);
                content.setAttribute('aria-hidden', false);
                content.style.maxHeight = content.scrollHeight + 'px';
            } else {
                control.setAttribute('aria-expanded', false);
                content.setAttribute('aria-hidden', true);
                content.style.maxHeight = null;
            }
        });
    });
})