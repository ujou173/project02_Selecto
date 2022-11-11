$(function () {
  var sec1_swiper = new Swiper(".main_banner_slide", {
    loop: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".sec1_pg",
      clickable: true,
      dynamicBullets: true,
    },
  });

  var menu_swiper = new Swiper(".sec3_slide", {
    slidesPerView: 2,
    spaceBetween: 16,
    loop: true,
    breakpoints: {
      670: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      850: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
    navigation: {
      nextEl: ".sec3_next",
      prevEl: ".sec3_prev",
    },
  });

  var interview_swiper = new Swiper(".real_interview", {
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".sec4_pg",
      clickable: true,
      dynamicBullets: true,
    },
  });

  $(".sec3_btns > button").click(function () {
    let btnIndex = $(this).index();
    $(".sec3_btns > button, .menu_con").removeClass("on");
    $(this).addClass("on");
    $(".menu_con").eq(btnIndex).addClass("on");
  });
});
