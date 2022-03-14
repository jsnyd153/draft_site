$(".score").each(function () {
  let score = 0;
  $(this).find("h1").html(score);

  $(this)
    .find(".up")
    .click(function () {
      score++;
      $(this).parent("article").find("h1").html(score);
    });

  $(this)
    .find(".down")
    .click(function () {
      score--;
      $(this).parent("article").find("h1").html(score);
    });

  $("#reset").click(function () {
    score = 0;
    $("article").find("h1").html(score);
  });
});
i;

var scoreHome = document.getElementById("teamHome");

// create a simple instance
// by default, it only adds horizontal recognizers
var mc = new Hammer(scoreHome);

// let the pan gesture support all directions.
// this will block the vertical scrolling on a touch-device while on the element
mc.get("pan").set({ direction: Hammer.DIRECTION_ALL });

// listen to events...
mc.on("panleft panright panup pandown tap press", function (ev) {
  console.log(ev.type + " gesture detected.");
  //   scoreHome.textContent =
});
