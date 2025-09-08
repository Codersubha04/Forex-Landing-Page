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


/* FAQ Accordion Script */
document.addEventListener('DOMContentLoaded', () => {
  const accordions = document.querySelectorAll('.accordions__item');

  accordions.forEach(el => {
    const control = el.querySelector('.accordions__control');
    const content = el.querySelector('.accordions__content');

    control.addEventListener('click', () => {
      // Agar ek time pe sirf ek hi open rakhna hai
      accordions.forEach(item => {
        if (item !== el) {
          item.classList.remove('open');
          item.querySelector('.accordions__content').style.maxHeight = null;
        }
      });

      el.classList.toggle('open');

      if (el.classList.contains('open')) {
        control.setAttribute('aria-expanded', true);
        content.setAttribute('aria-hidden', false);

        // Reset karke phir se actual height set karo
        content.style.maxHeight = null;
        content.style.maxHeight = content.scrollHeight + "px";

      } else {
        control.setAttribute('aria-expanded', false);
        content.setAttribute('aria-hidden', true);
        content.style.maxHeight = null;
      }
    });
  });
});











// Set target time (example: 1 hour from now)
let targetTime = new Date();
targetTime.setMinutes(targetTime.getMinutes() + 60); // 60 min countdown

function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetTime.getTime() - now;

  if (distance <= 0) {
    document.getElementById("countdown-timer").innerHTML = "Offer Expired!";
    clearInterval(countdownInterval);
    return;
  }

  // Calculate time left
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Update HTML
  document.getElementById("countdown-timer").innerHTML = 
    `${minutes} Min ${seconds} Sec`;
}

// Update every 1 second
const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown(); // initial call

let timer = 10 * 60; // 10 min for demo
const timerDisplay = document.getElementById("offer-timer");

setInterval(() => {
  const min = Math.floor(timer / 60);
  const sec = timer % 60;
  timerDisplay.textContent = `${String(min).padStart(2,'0')} Min ${String(sec).padStart(2,'0')} Sec`;

  if (timer > 0) timer--;
}, 1000);
