$(function () {
  var sec1_swiper = new Swiper(".main_banner_slide", {
    loop: true,
    pagination: {
      el: ".sec1_pg",
      clickable: true,
      dynamicBullets: true,
    },
  });

  var menu_swiper = new Swiper(".sec3_slide", {
    slidesPerView: 4,
    spaceBetween: 16,
    loop: true,
    navigation: {
      nextEl: ".sec3_next",
      prevEl: ".sec3_prev",
    },
  });

  var interview_swiper = new Swiper(".real_interview", {
    loop: true,
    pagination: {
      el: ".sec4_pg",
      clickable: true,
      dynamicBullets: true,
    },
  });
});
