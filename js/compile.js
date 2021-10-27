//===============================================
// detect touch device
//===============================================


function isTouchDevice(){
  return true == ("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch);
}

if(isTouchDevice()===true) {
  $(body).addClass('is-touch')
}
else {
  //alert('Not a Touch Device'); //your logic for non touch device
}


//===============================================
//hover native video element
//===============================================

var figure = $(".video").hover( hoverVideo, hideVideo ).click(clickVideo);

function hoverVideo(e) {  
    $('video', this).get(0).play(); 
}

function hideVideo(e) {
    $('video', this).get(0).pause(); 
}

function clickVideo(e){
    $('video', this).get(0).play()
}


//===============================================
//image--slider
//===============================================
//image slider properties

const autoPlayTime = 5000;
const playButtonNumber = $('.play_button');
const pauseButtonNumber = $('.pause_button');
const nextButtonNumber = $('.next_button');
const prevButtonNumber = $('.prev_button');
const progressBarNumber = $('.progress')

progressBar()
$(playButtonNumber).parent().toggleClass('playing')

  var swiper = new Swiper(".image--slider .slider_block", {
    slidesPerView: 1,
    spaceBetween: 0,

    watchSlidesProgress: true,
    loop: true,
    autoplay: {
          delay: autoPlayTime,
          disableOnInteraction: false,
        },
    navigation: {
      nextEl: ".next_button",
      prevEl: ".prev_button",
    },

    mousewheel: {
      forceToAxis: true,
  },
    keyboard: true,
    lazy:true,
  });


  $(pauseButtonNumber).click(function(){
    swiper.autoplay.stop();
  });

  $(playButtonNumber).click(function(){
    swiper.autoplay.start();
  });

swiper.on('slideChange', function () {
      progressBar()
    $(playButtonNumber).parent().addClass('playing')
    $(playButtonNumber).parent().removeClass('paused')
});


function progressBar() {

    var target = $(progressBarNumber)
    var timer = autoPlayTime / 1000;
    var progress = new TimelineMax();
        progress.fromTo($(target), timer, {width: '0%'}, {width: '100%'})

  $(pauseButtonNumber).click(function(){
    progress.pause();
    $(this).parent().addClass('paused')
    $(this).parent().removeClass('playing')
  });

  $(playButtonNumber).click(function(){
    progress.restart();
    $(this).parent().addClass('playing')
    $(this).parent().removeClass('paused')
  });

}