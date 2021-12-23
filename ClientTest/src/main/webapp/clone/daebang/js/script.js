//gnb
$(function(){
    $('.gnb > li > a').on('mouseenter focus', function(){
        var gnbindex = $('.gnb > li > a').index($(this));
        $('.gnb .inner').removeClass('on');
        $('.gnb .inner:eq('+ gnbindex +')').addClass('on');   
     });   
     $('header').on('mouseleave', function(){
         $('.gnb .inner').removeClass('on');
     });     
});

//fixHeader
var scrollTop = 0;
scrollFix = $(document).scrollTop();
fixHeader();
//윈도우창 조절시 이벤트
$(window).on('scroll resize', function() {
    scrollFix = $(document).scrollTop();
    fixHeader();
});

//고정헤더 함수
function fixHeader() {
    if (scrollFix > 150) { 
        $('header').addClass('on');
    } else {
        $('header').removeClass('on');
    }
}


//글자애니메이션  Splitting 데모사이트 그대로 작성 따라하기
$(function(){
    Splitting();
});

//.top-visual 이미지슬라이드
$(function(){
    $('.visual .slide').slick({
        arrows:true,//화살표
        dots:true,//인디케이터
        autoplay:true, //자동재생
        fade:true,//페이드인효과
        autoplaySpeed:7000,//재생시간
        pauseOnHover:false, //호버시 멈추는 멈추는것을 해제
        pauseOnFocus:false
    });
    $('.slick-prev').text("prev");
    
    
    //두번째 슬라이드
    $('.slide2').slick({
        arrows:false,//화살표
        dots:true,//인디케이터
        autoplay:true, //자동재생
        infinite:true,
        slidesToShow:2,
        slidesToScroll:1,
        autoplaySpeed:6000,//재생시간
        pauseOnHover:true, //호버시 멈추는 멈추도록 설정함
        pauseOnFocus:true
    });
    $(".slide2 #slick-slide-control10").text("서울 마곡지구 업무용지");
    $(".slide2 #slick-slide-control11").text("서울 마곡지구 대방디엠시티2차");
    $(".slide2 #slick-slide-control12").text("화성동탄1차 대방디엠시티 더 센텀");
    $(".slide2 #slick-slide-control13").text("광주 수완 대방노블랜드6차");
});

//스크롤애니메이션(scrolla.js)
$(function() {
	$('.animate').scrolla({
		mobile: true, //모바일버전시 활성화
		once: false //스크롤시 딱 한번만 하고싶을땐 true
	});    
}); 

//스크롤다운
$(function(){
    $('.scroll').on('click', function(){
        var scrollBtn = $('#scroll').offset().top;// #scroll의 끝나는 지점으로 스크롤바 이동
        $('html, body').animate({scrollTop: (scrollBtn )},400);//그위치로 부드럽게 스크롤
    });
});

//비디오부분
$(function(){
    $('.videoBox .mask').on('click', function(){
        $(this).css({'display':'none'});
        $('.videoBox iframe').css({'display':'block'});
    });
});











