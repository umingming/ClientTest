'use strict';

$(document).on('click', 'a[href="#"]', function(e){
    e.preventDefault();
});

//gnb메뉴
$(function(){
    $('header .menuOpen').on('click', function(){
        $('.gnb').addClass('on');
    });
    $('.gnb .close, section').on('click', function(){
        $('.gnb').removeClass('on');
    });
});

//fixHeader
var scrollTop = 0;
scrollTop = $(document).scrollTop();
fixHeader();

$(window).on('scroll resize', function () {
    scrollTop = $(document).scrollTop();
    fixHeader();
});


function fixHeader() {
    if(scrollTop > 150) {
        $('header').addClass('on');
    } else {
        $('header').removeClass('on');
    }
}


$(function() {
    $('.animate').scrolla({
        mobile: false,
        once: false
    });
});




//상단으로 부드럽게
$(function() {
    $('.goTop').on('click', function(){
        $('html, body').animate({scrollTop: 0}, 400);
    });
});