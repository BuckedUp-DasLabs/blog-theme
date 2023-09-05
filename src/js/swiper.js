let prevIndex = 0;
const isNext = (realIndex, prevIndex) => (realIndex > prevIndex && (Math.abs(realIndex - prevIndex) === 1)) || (realIndex - prevIndex < -1)
const swiperBannerText = new Swiper('.banner__text-swiper', {
  slidesPerView: 1,
  loop: true,
  allowTouchMove: false,
});
const swiperBanner = new Swiper('.banner__swiper', {
  slidesPerView: 1,
  centeredSlides: true,
  loop: true,
  spaceBetween: 16,
  speed: 500,
  allowTouchMove: false,
  autoplay: {
    delay: 4000,
  },
  navigation: {
    nextEl: '.swiper-next',
    prevEl: '.swiper-prev',
  },
  on: {
    slideChangeTransitionStart: ({ realIndex }) => {
      if (isNext(realIndex, prevIndex)) swiperBannerText.slideNext(500)
      else swiperBannerText.slidePrev(500)
      prevIndex = realIndex
    }
  },
  breakpoints: {
    700: {
      slidesPerView: 2.6,
    }
  }
});