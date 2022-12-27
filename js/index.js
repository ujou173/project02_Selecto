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

  var new_swiper = new Swiper(".sec3_slide_new", {
    slidesPerView: 1,
    spaceBetween: 16,
    loop: true,
    breakpoints: {
      500: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
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
      nextEl: ".sec3_next_new",
      prevEl: ".sec3_prev_new",
    },
  });

  var hot_swiper = new Swiper(".sec3_slide_hot", {
    slidesPerView: 1,
    spaceBetween: 16,
    loop: true,
    breakpoints: {
      500: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
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
      nextEl: ".sec3_next_hot",
      prevEl: ".sec3_prev_hot",
    },
  });

  var ice_swiper = new Swiper(".sec3_slide_ice", {
    slidesPerView: 1,
    spaceBetween: 16,
    loop: true,
    breakpoints: {
      500: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
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
      nextEl: ".sec3_next_ice",
      prevEl: ".sec3_prev_ice",
    },
  });

  var ade_swiper = new Swiper(".sec3_slide_ade", {
    slidesPerView: 1,
    spaceBetween: 16,
    loop: true,
    breakpoints: {
      500: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
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
      nextEl: ".sec3_next_ade",
      prevEl: ".sec3_prev_ade",
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

  $(".m_floating_btn").click(function () {
    $(".m_floating_btn").toggleClass("on");
  });

  $(".sec3_btns > button").click(function () {
    let btnIndex = $(this).index();
    $(".sec3_btns > button, .menu_con").removeClass("on");
    $(this).addClass("on");
    $(".menu_con").eq(btnIndex).addClass("on");
  });
});
