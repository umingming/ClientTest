//fixheaer
var scrollTop = 0;
var scrollSkill = 0;
scrollTop = $(document).scrollTop();
fixHeader();
activateSkillMotion();

//윈도우 창 조절
$(window).on('scroll resize', function () {
    scrollTop = $(document).scrollTop();
    fixHeader();
    activateSkillMotion();
});

function fixHeader() {
   if(scrollTop > 150) {
       $('header').addClass('on');
   } else {
       $('header').removeClass('on');
   }
}


//메인 슬라이드
$(function() {
    $('.main .slide').slick({
        arrows: true,   
        dots: false,    
        fade: true,    
        autoplay: false,  
        autoplaySpeed: 7000, 
        pauseOnHover: false,
        pauseOnFocus: false
    })
    $('.slick-prev').text('prev');
    // $('.projectSlide').slick({
    //     arrows:true,  //화살표
    //     dots:true,  //인디케이터
    //     autoplay:true,    //자동 재생
    //     infinite: true,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     autoplaySpeed:6000,  //재생 시간
    //     pauseOnHover:true,  //호버시 멈추도록 설정
    //     pauseOnFocus:true
    // });
})


function activateSkillMotion() {
    // console.log(scrollTop)
   if(scrollTop > 1800) {
       $('.skill').addClass('active');
    } else {
        $('.skill').removeClass('active');
   }
}

//애니메이션 
$(function() {
    $('.animate').scrolla({
        mobile: false,
        once: false
    });
});