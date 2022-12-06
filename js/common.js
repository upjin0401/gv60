
$(document).ready(function () {







  //header고정
  var $header = $('header');
$(window).scroll(function(){
  if($(this).scrollTop() >  1000){
    $header.addClass('fix');
     }
     else{
      $header.removeClass('fix');
     }
});

  //가로스크롤 텍스트 고정

  $(window).scroll(function () {
    if ($(this).scrollTop() > 1700) {
      $('.brand_txt').addClass('fix');

    }
    else {
      $('.brand_txt').removeClass('fix');



    }
  });

  //글자효과

  $(".main_title").textillate({
    loop: true,
    in: {
      effect: "bounceIn",
      delayScale: 2,
      delay: 100,
      sequence: true,
    },
    out: {
      effect: "bounceIn",
      delayScale: 2,
      delay: 10,
      reverse: true,
    }
  });

  

  
  $('.ham').click(function () {
    $('.mgnb_wrap').animate({
        left: '0'
     
    });
     

  

    $('.mgnb_close').click(function () {
        $('.mgnb_wrap').animate({
            left: '100%'
            
        });
     
    });

});

  //   if(myVideo.paused){
  //     myVideo.play();
  //     document.querySelector('.pausebtn').style.backgroundImage = "none"
  // }


  //스크롤

  // time_chk = 0;
  // $(document).scroll(function(){
  //   s_top = $(this).scrollTop();

  //   if(s_top = "0" && s_top < "550" && time_chk == 0){
  //     time_chk = 1;

  //     //스크롤을없애서 이동못하게..
  //     $('html').css("overflow","hidden");

  //     //슬라이드 작동 또는 이미지 넘기는 function 호출.

  //     //슬라이드, 이벤트가 끝날때 다시 스트롤 보여줌.
  //     setTimeout(function(){
  //       $('html').css("overflow","scroll");
  //     },3000);

  //     setTimeout(function(){
  //       //혹시나 스크롤을 잡아 끄는 유저를 위해 고민해보셔야 할듯.
  //       //한번 실행후 5초간 다시실행되지 않음
  //       time_chk = 0;
  //     },5000);
  //   }
  
  // });

  //intro scroll막기
  $('.intro').on('scroll touchmove mousewheel', function (event) {
    event.preventDefault();
    event.stopPropagation();
    return false;

  });






  const design_img = new Swiper(".design_img", {
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    loop: true, //슬라이드 반복 여부
    speed: 1000 //슬라이드 동작 속도 1초
  });


  



  $(window).on('scroll', function () {
    sc5_top = $('.sc5').offset().top;
    scroll = $(this).scrollTop();

    if (scroll <= sc5_top) { 
      $('.sc5').removeClass('on'); 
    } else { 
      $('.sc5').addClass('on');
    }
  });

  //service







}); //문서준비이벤트 종료




