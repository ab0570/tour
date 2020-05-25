var flag =true;
$(window).resize(function(){
    var winWidth =$(this).width()
    if (winWidth > 799 && flag) {
       $('#header').removeClass('on')
       flag = false
    }
})

$('.depth1 > li > a').on('mouseover focus',function(){
   if ($(this).parents('#header').hasClass('on')) {
      $(this).next().css({display:'none'})
   } else {
      $(this).next().stop().fadeIn(400)
      $(this).parent().siblings().children('.dep2box').stop().fadeOut(400)
   }
})

$('.depth1 > li').on('mouseleave',function(){
   $(this).children('.dep2box').stop().fadeOut(400)
})
$('.depth1 > li:last .depth2 > li:last > a').on('blur',function(){
   $(this).parents('.dep2box').stop().fadeOut(400)
})

$('#header .openMOgnb').on('click',function(){
   if (!$(this).parents('#header').hasClass('on')) {
           $(this).parents('#header').addClass('on')
   }
})

$('#header .closeMOgnb').on('click',function(){
   $(this).parents('#header').removeClass('on')
})
