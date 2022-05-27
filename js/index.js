$(function() {
  // 导航栏
  var bta = $(".adBtn a");
  var index = 0;
  var atime = 2000;
  var stime = 2000;
  var stid;
  var list = bta.length;

  // 随鼠标移动轮播图
  bta.hover(function() {
    $(this).addClass('active').siblings('a').removeClass('active');
    // console.log($(this).index())
    index = $(this).index();
    $(".adImg").stop().animate({
      left: index * -604
    }, 300)
    list = bta.length;
    $(".adImg").css({
      width: list * 604,
    })
  })
  // 自动轮播
  var timer = '';
  var num = 0;
  timer = setInterval(function() {
    num++;
    if (num > parseFloat(list) - 1) {
      num = 0;
      bta.eq(num).addClass('active').siblings('a').removeClass('active');
      snum(num)
    } else {
      bta.eq(num).addClass('active').siblings('a').removeClass('active');
      snum(num)
    }
  }, 4000)

  function snum(num) {
    $(".adImg").stop().animate({
      left: num * -604
    }, 300)

    $(".adImg").css({
      width: 3020
    })
  }
  // 新闻导航
  $("#news_top li").hover(function() {
    $(this).addClass('on').siblings().removeClass('on');
    // console.log($(this).index())
    index = $(this).index();
    $(".sildeContent").stop().animate({
      left: index * -350
    }, 300)
    list = $("#news_top li").length;
    $(".sildeContent").css({
      width: list * 350,
    })
  })

  // 视频中心
  $(".strategy_center .item_content .video_list li").hover(function() {
    index = $(this).index()
    // console.log(index)
    $(".strategy_center .video_list .mask").eq(index).stop().fadeToggle(300)
    // $(".strategy_center .video_list .mask").eq(index).stop().fadeToggle(300)
    // $(".match_center .video_list .mask").eq(index).stop().fadeToggle(300)
  })
  $(".match_center .item_content .video_list li").hover(function() {
    index = $(this).index()
    $(".match_center .video_list .mask").eq(index).stop().fadeToggle(300)
  })
  $(".item_subnav a").hover(function() {
    index = $(this).index()
    $(this).addClass('on').siblings().removeClass('on');
    $(this).parents(".item_subnav").siblings(".item_thirdnav").eq(index).addClass("on").siblings().removeClass(
      "on")
  })
  $(".title a").hover(function() {
    $(this).addClass('on').siblings().removeClass('on');
  })
  // 皮肤中心
  $(".skin_center .item_subnav a").hover(function() {
    index = $(this).index();
    $(".skin-center-list").stop().animate({
      left: index * -295
    }, 300)
    list = $(".item_subnav a").length;
    $(".skin-center-list").css({
      width: list * 295,
    })
  })

})

(function($){
  $.fn.tabGroup=function(){
    
  }
  
})(jQuery)