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

$('.visualRoll').slick({
   autoplay:true, //기본값  false
   autoplaySpeed:3000, // 슬라이드 지연시간
   dots:true, // 기본값 false,슬라이드 번호버튼
   speed:600, // 슬라이드 동작시간
   slidesToShow:1, //보여지는 슬라이드 수
   slidesToScroll:1, // 넘어가는 슬라이드수
   pauseOnHover:false, // 슬라이드위에 마우스오버시 슬라이드멈춤여부
   pauseOnDotsHover:true, // 슬라이드 번호버튼위에 마우스오버시 멈춤여부
   pauseOnFocus:false, // 번호버튼 클릭시 자동실행 멈춤여부
   cssEase:'linear', // 슬라이드 움직임에 대한 가속도 함수값
   draggable:true, // 마우스드래그했을때 움직임 여부
   fade:false, //true면 fadein,out 효과가 적용됌.
   arrows:true, // 기본값은 true고, 슬라이즈 좌우측 방향버튼
   prevArrow: '<button class="prevArrow marrow"><i class="fas fa-angle-left"></i></button>',
   nextArrow: '<button class="nextArrow marrow"><i class="fas fa-angle-right"></i></button>',
   
})

$('.plpa').toggle(
   function(){
      $(".visualRoll").slick("slickPause")
      $(this).find('i').removeClass('fa-pause').addClass('fa-play')
   },
   function(){
      $(".visualRoll").slick("slickPlay")
      $(this).find('i').removeClass('fa-play').addClass('fa-pause')
   }
)
// $('.plpa').on('click',function(){
//    if ($(this).find('i').hasClass('fa-pause')){
//       $(".visualRoll").slick("slickPause")
//       $(this).find('i').removeClass('fa-pause').addClass('fa-play')
//    } else {
//       $(".visualRoll").slick("slickPlay")
//       $(this).find('i').removeClass('fa-play').addClass('fa-pause')
//    }
// })