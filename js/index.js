$(".score").each(function () {
  let score = 0;
  $(this).find("h1").html(score);

  // create a simple instance
  // by default, it only adds horizontal recognizers
  var mc = new Hammer(this);
  var scoreContainer = $(this);

  // let the pan gesture support all directions.
  // this will block the vertical scrolling on a touch-device while on the element
  mc.get("swipe").set({ direction: Hammer.DIRECTION_ALL });

  mc.on("swipeup", function () {
    console.log("gesture detected.");
    score++;
    $(scoreContainer).find("h1").html(score);
  });

  mc.on("swipedown", function () {
    console.log(" gesture detected.");
    score--;
    $(scoreContainer).find("h1").html(score);
  });

  $(this)
    .find(".up")
    .click(function () {
      score++;
      $(scoreContainer).find("h1").html(score);
    });

  $(this)
    .find(".down")
    .click(function () {
      score--;
      $(scoreContainer).find("h1").html(score);
    });

  $("#reset").click(function () {
    score = 0;
    $("article").find("h1").html(score);
  });
});
