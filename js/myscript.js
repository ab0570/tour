$('.depth1 > li > a').on('mouseover focus',function(){
   $(this).next().stop().fadeIn(400)
   $(this).parent().siblings().children('.dep2box').stop().fadeOut(400)
})

$('.depth1 > li').on('mouseleave',function(){
   $(this).children('.dep2box').stop().fadeOut(400)
})
$('.depth1 > li:last .depth2 > li:last > a').on('blur',function(){
   $(this).parents('.dep2box').stop().fadeOut(400)
})

$('#header .openMOgnb').on('click',function(){
   $(this).parents('#header').addClass('on')
})
$('#header .closeMOgnb').on('click',function(){
   $(this).parents('#header').removeClass('on')
})
