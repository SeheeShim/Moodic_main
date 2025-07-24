var swiper = new Swiper(".mySwiper", {
      slidesPerView: 3,
      spaceBetween: 0,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      autoplay: {
    delay:2000, // 2초마다 슬라이드
    disableOnInteraction: false // 사용자가 터치해도 autoplay 유지
  },
  loop: true // 슬라이드 무한 반복
    });