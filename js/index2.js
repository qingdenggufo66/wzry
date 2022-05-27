$('.demo li').hover(function (){
    $(this).siblings().removeClass('.active');
    $(this).stop().animate({
        width: 224
    }, 200).find('.small').stop().fadeOut().siblings().stop().fadeIn();
    $(this).siblings('li').stop().animate({
        width: 69
    }, 200).find('.large').stop().fadeOut().siblings().stop().fadeIn();
})