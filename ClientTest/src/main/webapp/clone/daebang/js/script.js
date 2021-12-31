//gnb
$(function(){
    $('.gnb > li > a').on('mouseenter focus', function(){
        var gnbindex = $('.gnb > li > a').index($(this));
        $('.gnb .inner').removeClass('on');
        $('.gnb .inner:eq('+ gnbindex +')').addClass('on');
    });
    $('header').on('mouseleave', function(){
        $('.gnb .inner').removeClass('on')
    });
});

//fixheader

var scrollFix = 0;
scrollFix = $(document).scrollTop();
fixHeader();


//윈도우창 조절
$(window).on('scroll resize', function(){
    scrollFix = $(document).scrollTop();
    fixHeader();
})

//고정 헤더 함수 
function fixHeader() {
    if(scrollFix > 150) {
        $('header').addClass('on');
    } else {
        $('header').removeClass('on');
    }
}

// 글자 애니메이션
$(function(){
    Splitting();
})


//.top-visual 이미지 슬라이드
$(function(){
    $('.visual .slide').slick({
        arrows:true,  //화살표
        dots:true,  //인디케이터
        autoplay:false,    //자동 재상
        fade:true,    //부드럽게 화면 전환
        autoplaySpeed:7000,  //재생 시간
        pauseOnHover:false,  //호버시 멈추는 것을 해제
        pauseOnFocus:false
    });
    $('.slick-prev').text('prev');
    
    //두 번째 슬라이드
    $('.slide2').slick({
        arrows:false,  //화살표
        dots:true,  //인디케이터
        autoplay:true,    //자동 재상
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplaySpeed:6000,  //재생 시간
        pauseOnHover:true,  //호버시 멈추도록 설정
        pauseOnFocus:true
    });
    $('.slide2 #slick-slide-control10').text("서울 마곡지구 업무 용지");
    $('.slide2 #slick-slide-control11').text("서울 마곡지구 업무 용지");
    $('.slide2 #slick-slide-control12').text("서울 마곡지구 업무 용지");
    $('.slide2 #slick-slide-control13').text("서울 마곡지구 업무 용지");
});


// 스크롤 애니메이션
$(function(){
    $('.animate').scrolla({
        mobile:true,  //모바일버전 활성화
        once:false   //한 번만 하고 싶을 때는 true
    });
})

//스크롤 다운
$(function(){
    $('.scroll').on('click', function(){
        var scrollBtn = $('#scroll').offset().top;
        $('html, body').animate({scrollTop: (scrollBtn)}, 400);
    });
});