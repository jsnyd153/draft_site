$(".score").each(function () {
  let score = 0;
  $(this).find("h1").html(score);

  // create a simple instance
  // by default, it only adds horizontal recognizers
  var mc = new Hammer(this);
  var scoreContainer = $(this);
  var target = $(this).attr("id");

  var inputControl = $("#controls").find(`[for='${target}']`);

  //swipe Controls

  // let the pan gesture support all directions.
  // this will block the vertical scrolling on a touch-device while on the element
  mc.get("swipe").set({ direction: Hammer.DIRECTION_ALL });

  mc.on("swipeup", function () {
    console.log(inputControl);
    score++;
    $(scoreContainer).find("h1").html(score);
  });

  mc.on("swipedown", function () {
    score--;
    $(scoreContainer).find("h1").html(score);
  });

  // Basic Button Controls

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

  //Input controls

  $(inputControl).on("input", function () {
    score = $(this).val();
    $(scoreContainer).find("h1").html(score);
  });
});
