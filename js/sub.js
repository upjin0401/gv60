
$(document).ready(function () {

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
            delayScale: 1,
            delay: 10,
            reverse: true,
        }
    });

    //header고정
    var $header = $('header');
    $(window).scroll(function () {
        if ($(this).scrollTop() > 800) {
            $header.addClass('fix');
        }
        else {
            $header.removeClass('fix');
        }
    });

    //가로스크롤 텍스트 고정



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

    //tech_mv

    $('.gotop').hide();
    $(window).scroll(function(){
      if ($(this).scrollTop() > 300) {
        $('.gotop').fadeIn();
      } else {
        $('.gotop').fadeOut();
        
      }  
    });

    $('.gotop').click(function(){
        $('html,body').animate({
            scrollTop: '0'
        },1500); 
        });



    $('.tech_list li:nth-of-type(2)').click(function () {
        $('body,html').animate({
            scrollTop: '1900'
        }, 1000);
    });

    $('.tech_list li:nth-of-type(3)').click(function () {
        $('body,html').animate({
            scrollTop: '3100'
        }, 1000);
    });
    $('.tech_list li:nth-of-type(4)').click(function () {
        $('body,html').animate({
            scrollTop: '4000'
        }, 1000);
    });

   

    // $(window).scroll(function () {
    //     if ($('this').scrollTop() > 1000) {
    //         $('.gotop').show()
    //     }
    //     else {
    //         $('.gotop').hide()
    //     }
    // });





    let btn = document.querySelector('.btn');
    let clip = document.querySelector('.clip');
    let close = document.querySelector('.close');
    let video = document.querySelector('video');
    btn.onclick = function(){
     btn.classList.add('active');
     clip.classList.add('active');
     video.play();
     video.currentTime = 0;
    }  
 
    close.onclick = function(){
     btn.classList.remove('active');
     clip.classList.remove('active');
     video.pause();
    }



    const accordion = document.getElementsByClassName
        ('contentBx');

    for (i = 0; i < accordion.length; i++) {
        accordion[i].addEventListener('click', function () {
            this.classList.toggle('active')
        })
    }



}); //문서준비이벤트 종료




