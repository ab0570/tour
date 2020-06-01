$(window).scroll(function(){
  var sct= $(this).scrollTop();
   if ($('html').hasClass('mobile')) {
      if (sct>50) {
         $('.to_top').show()
      } else {
         $('.to_top').hide()
      }
   } else {
         $('.to_top').show()
   }
})

$('.to_top').on('click',function(){
   $('body,html').animate({scrollTop:'0px'},600)
})

var winWidth
function init(){
   winWidth =$(window).width()
   if (winWidth > 799) {
      $('#header').removeClass('on')
      $('html').addClass('minTb').removeClass('mobile')
      $('.to_top').show()
   } else {
      $('html').addClass('mobile').removeClass('minTb')
   }
}

$(window).resize(function(){  
   init()
})

$(window).load(function(){
   $('.loadingAni').delay(1000).fadeOut(500)
   init()
})

$('.depth1 > li > a').on('mouseover focus',function(){
   if ($(this).parents('#header').hasClass('on')) {
      $(this).next().fadeOut(0)
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

$('.place_list>li>a').on('click',function(e){
    e.preventDefault();
    var href = $(this).attr('href')
    var src = $(this).attr('data-src')
    var text = $(this).find('h3').text()
    var info = $(this).find('p').text()
    var alt = $(this).find('img').attr('alt')
   $('.popupBox').addClass('on')
   if(winWidth <= 799) {
      var litop = $(this).parent().offset().top;
      $('.popupBox .inner').css({
         top:litop,
         width:'80%',
         left:'0%',
         transform:'translate(0%)',
         margin:'0 10%'
      })
   }
   $('.popupBox .inner h3').text(text)
   $('.popupBox .inner p').text(info)
   $('.popupBox .inner div a').attr('href',href)
   $('.popupBox .inner div img').attr('src',src).attr('alt',alt).attr('width','100%')
})

$('.popupBox button').on('click',function(){
     $(this).parents('.popupBox').removeClass('on')
})