$(".score").each(function () {
  let score = 0;
  // initialize hammer controls
  var mc = new Hammer(this);

  //select this specific container to refer to later in functions
  var scoreContainer = $(this);
  //make jquery object out of id
  var targetID = $(scoreContainer).attr("id");

  // locate the input that controls this one by matching id to "for" attribute
  var inputControl = $("#controls").find(`[for='${targetID}']`);

  //set the text disply => run function after scroe counter is updated
  function updateScoreDisplay() {
    $(scoreContainer).find("h1").html(score);
    $(inputControl).val(score);

    //set prop based to scale text based on number of digits
    if (score > 99) {
      $(scoreContainer).css("--digits", "3");
    } else if (score > 999) {
      $(scoreContainer).css("--digits", "4");
    } else {
      $(scoreContainer).css("--digits", "2");
    }
  }

  //run update function to set default values
  updateScoreDisplay();

  //Area Swipe Controls

  // pan gesture support all directions.
  // this will block the vertical scrolling on a touch-device while on the element
  mc.get("swipe").set({ direction: Hammer.DIRECTION_ALL });

  mc.on("swipeup", function () {
    score++;
    updateScoreDisplay();
  });

  mc.on("swipedown", function () {
    score--;
    updateScoreDisplay();
  });

  // Button Click Controls

  $(this)
    .find(".up")
    .click(function () {
      score++;
      updateScoreDisplay();
    });

  $(this)
    .find(".down")
    .click(function () {
      score--;
      updateScoreDisplay();
    });

  // Nav Controls

  $("#reset").click(function () {
    score = 0;
    $("article").find("h1").html(score);
    updateScoreDisplay();
  });

  //Input controls

  $(inputControl).on("input", function () {
    let newValue = $(this).val();
    console.log(newValue);

    if (newValue.length === 0) {
      console.log("empty");
      score = 0;
    } else {
      //parse to remove leading 0s
      score = parseInt(newValue, 10);
    }
    updateScoreDisplay();
  });
});
