
  const mySwiper = new Swiper ('.swiper', {

    loop: true,
    slidesPerView: 1,

    breakpoints: {
      768:{
        slidesPerView: 2,
      }
    },
    autoplay: {
        delay: 5000,
    },
  
      // ページネーション
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },
  // 前後の矢印
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    },
  
    scrollbar: {
        el: '.swiper-scrollbar',
    },
  })




//scroll_effect
$(window).scroll(function () {
  var scrollAnimationElm = document.querySelectorAll('.scroll');
  var scrollAnimationFunc = function () {
    for (var i = 0; i < scrollAnimationElm.length; i++) {
      var triggerMargin = 50;
      if (window.innerHeight > scrollAnimationElm[i].getBoundingClientRect().top + triggerMargin) {
        scrollAnimationElm[i].classList.add('on');
      }
    }
  }
  window.addEventListener('load', scrollAnimationFunc);
  window.addEventListener('scroll', scrollAnimationFunc);
});

window.onload = function () {

  let hamburger = document.getElementById('burger-menu');
  let border = document.getElementById('border');
  let footer = document.getElementById('footer');
  $(hamburger).on("click", function(){
    console.log("ボタンが押されました");


    if(border.classList.contains('open_menu') == false){
      $(".border").toggleClass("open_menu");
      $(".footer").toggleClass("open_menu");
    }

    else if(border.classList.contains('open_menu') == true){
      $(".border").toggleClass("close_menu");
      $(".footer").toggleClass("close_menu");
    }

  });

  $(function () {
    $('.accordion-title').click(function(){
      $(this).next().slideToggle(300);
    });
  });
}





