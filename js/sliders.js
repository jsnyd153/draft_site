$(".card--slider").each(function() {

  var idNumber = '#' + $(this).attr('id');


var autoplay = 4000;
var sliderNumber = idNumber + ' .swiper-container';
var pauseButtonNumber = idNumber + ' .pause_button';
var playButtonNumber = idNumber + ' .play_button';
var nextButtonNumber = idNumber + ' .next_button';
var prevButtonNumber = idNumber + ' .prev_button';
var progressBarNumber = idNumber + ' .progress'; 
console.log(sliderNumber)

progressBar()
$(playButtonNumber).parent().toggleClass('playing')

var swiper = new Swiper(sliderNumber, {

    watchSlidesProgress: true,
    autoplay: {
     delay: autoplay,
     disableOnInteraction:false,
   },
   mousewheel: {
    forceToAxis: true,
  },
    // freeMode: true,
    loop:true,
    // progress: move(),
    keyboard: {enabled: true,},

    navigation: {
        nextEl: nextButtonNumber,
        prevEl: prevButtonNumber,
      },

    slidesPerView:2,
    spaceBetween: 12,


    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
      1280: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    }

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
    var timer = autoplay / 1000;
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


});



$(".image--slider").each(function() {

  var idNumber = '#' + $(this).attr('id');


var autoplay = 8000;
var sliderNumber = idNumber + ' .swiper-container';
var pauseButtonNumber = idNumber + ' .pause_button';
var playButtonNumber = idNumber + ' .play_button';
var nextButtonNumber = idNumber + ' .next_button';
var prevButtonNumber = idNumber + ' .prev_button';
var progressBarNumber = idNumber + ' .progress'; 
console.log(sliderNumber)

progressBar()
$(playButtonNumber).parent().toggleClass('playing')

var swiper = new Swiper(sliderNumber, {
    // pagination: '.swiper-pagination',
    // paginationClickable: true,

    watchSlidesProgress: true,
    autoplay: {
   delay: autoplay,
   disableOnInteraction:false,
 },
   mousewheel: {
    forceToAxis: true,
  },
    // freeMode: true,
    loop:true,
    // progress: move(),
    keyboard: {enabled: true,},

    navigation: {
        nextEl: nextButtonNumber,
        prevEl: prevButtonNumber,
      },

    slidesPerView:1,
    spaceBetween: 0,

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
    var timer = autoplay / 1000;
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


});



$(".hero--slider").each(function() {

  var idNumber = '#' + $(this).attr('id');


var autoplay = 8000;
var sliderNumber = idNumber + ' .swiper-container';
var pauseButtonNumber = idNumber + ' .pause_button';
var playButtonNumber = idNumber + ' .play_button';
var nextButtonNumber = idNumber + ' .next_button';
var prevButtonNumber = idNumber + ' .prev_button';
var backgroundImage = idNumber + ' .hero--slide .background_block img'; 
console.log(sliderNumber)

progressBar()
$(playButtonNumber).parent().toggleClass('playing')

var swiper = new Swiper(sliderNumber, {
    // pagination: '.swiper-pagination',
    // paginationClickable: true,

    watchSlidesProgress: true,
    autoplay: {
   delay: autoplay,
   disableOnInteraction:false,
 },
   mousewheel: {
    forceToAxis: true,
  },
    // freeMode: true,
    loop:true,
    // progress: move(),
    keyboard: {enabled: true,},

    navigation: {
        nextEl: nextButtonNumber,
        prevEl: prevButtonNumber,
      },

    slidesPerView:1,
    spaceBetween: 0,

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

    var target = $(backgroundImage)
    var timer = 1 + autoplay / 1000;
    var progress = new TimelineMax();
        progress.fromTo($(target), timer, {scale: 1}, {scale: 12, ease: "linear"});

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


});
