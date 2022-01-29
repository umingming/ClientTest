//top 버튼
var scrollTop = 0;
scrollTop = $(document).scrollTop();
$(function(){
    $('.top').on('click', function(){
        let scroll = $('.inner-header').offset().top;
        $('html, body').animate({scrollTop: (scroll)}, 300);
    });
});


//메인 슬라이드
$(function() {
    $('.main-img .slide').slick({
        arrows: true,   
        dots: false,    
        fade: true,    
        autoplay: false,  
        autoplaySpeed: 7000, 
        pauseOnHover: false,
        pauseOnFocus: false
    })
    $('.slick-prev').text('prev');
})


//인기 검색어
$(function() {
    $(".popular-keyword").hide();
    $(".search").click(function() {
        $(".popular-keyword").slideToggle(200);
    });
});

