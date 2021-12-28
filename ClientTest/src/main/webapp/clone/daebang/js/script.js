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
        arrow:true,  //화살표
        dots:true,  //인디케이터
        autoplay:true,    //자동 재상
        fade:true,    //부드럽게 화면 전환
        autoplaySpeed:7000,  //재생 시간
        pauseOnHover:false,  //호버시 멈추는 것을 해제
        pauseOnFocus:false
    });
    $('.slick-prev').text('prev');
});