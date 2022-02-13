//상세 프로젝트에서 삭제와 수정
$(function(){
    $('.hover').on('click', function(){
        $('.update').addClass('click');
        $('.bi-three-dots').addClass('click-hover');
        $('.bi-three-dots').removeClass('hover');
    });
    $('.click-hover').on('click', function(){
        $('.update').removeClass('click');
        $('.bi-three-dots').removeClass('click-hover');
        $('.bi-three-dots').addClass('hover');
    });
});

//상세 프로젝트 호버
$(function(){
    $('.hover').on('mouseover', function(){
        $('.project-detail').addClass('hover');
    });
    $('.hover').on('mouseout', function(){
        $('.project-detail').removeClass('hover');
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

