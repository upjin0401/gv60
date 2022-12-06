



//intro
let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo');
let logoSpan = document.querySelectorAll('.logo-parts');

window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        logoSpan.forEach((span, index) => {
            setTimeout(() => {
                span.classList.add('active');
            }, (index + 1) * 100);
        });
        setTimeout(() => {
            logoSpan.forEach((span, index) => {
                setTimeout(() => {
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, (span + 1) * 50);
            });
        }, 2000);
        setTimeout(() => {
            intro.style.top = '-100vh'
        }, 2300);

    });



});

//마우스

const cursor = document.querySelector(".cursor");
var timeout;

document.addEventListener("mousemove", (e) => {
    let x = e.pageX;
    let y = e.pageY;

    cursor.style.top = y + "px";
    cursor.style.left = x + "px";
    cursor.style.display = "block";

    function mouseStopped() {
        cursor.style.display = "none";
    }
    clearTimeout(timeout);
    timeout = setTimeout(mouseStopped, 1000)
});

document.addEventListener("mouseout", () => {
    cursor.style.display = "none";
});




gsap.registerPlugin(ScrollTrigger);

function SectionGroup__init() {
    $('.section-group--horizontal-right').each(function (index, node) {
        var $group = $(node);
        var $section = $group.find('> .section');

        gsap.to($section, {
            xPercent: -100 * ($section.length - 1),
            ease: "none",

            scrollTrigger: {
                trigger: $group,
                start: "top top",

                end: "+=" + ($section.length - 1) + "00%",
                pin: true,
                scrub: true,
                makers: true


            }
        });
    });
}

SectionGroup__init();

//main_spec

let btn_play = document.querySelector('.btn_play');
let clip = document.querySelector('.clip');
let close = document.querySelector('.close');
let video = document.querySelector('video');
btn_play.onclick = function () {
    btn_play.classList.add('active');
    clip.classList.add('active');
    video.play();
    video.currentTime = 0;
}

close.onclick = function () {
    btn_play.classList.remove('active');
    clip.classList.remove('active');
    video.pause();
}


//btn
const btn = document.querySelector('.btn');
btn.onmousemove = function (e) {
    const x = e.pageX - btn.offsetLeft;
    const y = e.pageY - btn.offsetTop;

    btn.style.setProperty('--x', x + 'px');
    btn.style.setProperty('--y', y + 'px');
}


    //sub_products
    $('.sb_list').hide();
    $('.sb_menu').click(function(){
        $('.sb_list').stop().slideToggle();
           $('.down').toggleClass('active');
      
       
    });




