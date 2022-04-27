$('.testimonial--creator-embed').each(function(){
    let numOfSlides = $(this).find('.swiper-slide').length;
    console.log(numOfSlides);

    if (numOfSlides > 1){
        const autoPlayTime = 10000;
        const playButtonNumber = $(".play_button");
        const pauseButtonNumber = $(".pause_button");
        const nextButtonNumber = $(".next_button");
        const prevButtonNumber = $(".prev_button");
        const progressBarNumber = $(".progress");

progressBar();
$(playButtonNumber).parent().toggleClass("playing");

var swiper = new Swiper(".testimonial--creator-embed .slider_area", {
slidesPerView: 1,
spaceBetween: 0,
speed:500,
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
lazy: true,
});

$(pauseButtonNumber).click(function () {
swiper.autoplay.stop();
});

$(playButtonNumber).click(function () {
swiper.autoplay.start();
});

swiper.on("slideChange", function () {
progressBar();
$(playButtonNumber).parent().addClass("playing");
$(playButtonNumber).parent().removeClass("paused");
});

function progressBar() {
var target = $(progressBarNumber);
var timer = autoPlayTime / 1000;
var progress = new TimelineMax();
progress.fromTo($(target), timer, { width: "0%" }, { width: "100%" });

$(pauseButtonNumber).click(function () {
  progress.pause();
  $(this).parent().addClass("paused");
  $(this).parent().removeClass("playing");
});

$(playButtonNumber).click(function () {
  progress.restart();
  $(this).parent().addClass("playing");
  $(this).parent().removeClass("paused");
});
}
    }
    else {
        $('.buttons_container').css('display','none');
        $('.timer').css('display','none');
        $('.testimonial--creator-slide').css('opacity',1);
    }

});
