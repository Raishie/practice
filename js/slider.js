// Отримати контейнер для слайдів
const swiperWrapper = document.querySelector('.swiper-wrapper');

// Кількість слайдів, які потрібно додати (повторити)
const numberOfSlidesToRepeat = 4; // Наприклад, додати ще 10 слайдів

// Дублювання слайдів
for (let i = 0; i < numberOfSlidesToRepeat; i++) {
  swiperWrapper.innerHTML += swiperWrapper.innerHTML;
}

// Ініціалізація Swiper
let swiperCards = new Swiper('.card__content', {
  loop: true,
  spaceBetween: 30,
  grabCursor: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    1400: {
      slidesPerView: 2,
    },
    1470: {
      slidesPerView: 3,
    },

    1850: {
      slidesPerView: 4,
    },
    1900: {
      slidesPerView: 5,
    },
  },
});
