$(".carousel--a-embed").each(function () {
  const autoPlayTime = 10000;
  const playButtonNumber = $(".play_button");
  const pauseButtonNumber = $(this).find(".pause_button");
  const nextButtonNumber = $(this).find(".next_button");
  const prevButtonNumber = $(this).find(".prev_button");
  const progressBarNumber = $(this).find(".progress");

  var swiper = new Swiper(".carousel--a-embed .slider_area", {
    slidesPerView: 1,
    spaceBetween: 0,

    watchSlidesProgress: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + "</span>";
      },
    },
    mousewheel: {
      forceToAxis: true,
    },
    keyboard: true,
    lazy: true,
  });
});
