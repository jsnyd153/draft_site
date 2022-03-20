// ============================================================= build function
$(".team_settings").each(function () {
  const teamName = $(this).attr("team"); //Home]
  const sectionName = $(this).attr("class").split(" ").pop(); //lowercase team name [home]

  //build out the controls
  $(this).append(
    `<input
    type="text"
    value="${teamName}"
    maxlength="22"
    for="team${teamName}"
    name="${sectionName}Name"
  />`
  );

  $(this).append(`<input
    type="number"
    for="team${teamName}"
    name="score${teamName}"
    min="0"
    max="1000"
    pattern="[0-9]*"
  />`);

  $(this).append(`
  <div class="color_container ${sectionName}" for="teamAway">
    <div class="color_dot"></div>
  </div>

  `);
}); //build function

$(".score").each(function () {
  const teamName = $(this).attr("team"); //[Home]
  const sectionName = $(this).attr("class").split(" ").pop(); //lowercase team name [home]
  const scoreContainer = $(`.score.${sectionName}`);
  const mc = new Hammer(this);
  let score = 0;

  function updateScoreDisplay() {
    $(scoreContainer).find("h1").html(score);
    $(`input[name="score${teamName}"]`).val(score);

    //set prop based to scale text based on number of digits
    if (score > 99) {
      $(scoreContainer).css("--digits", "3");
    } else if (score > 999) {
      $(scoreContainer).css("--digits", "4");
    } else {
      $(scoreContainer).css("--digits", "2");
    }
  }

  function increaseScore() {
    score++;
    updateScoreDisplay();
  }

  function decreaseScore() {
    score--;
    updateScoreDisplay();
  }

  //run update function to set default values
  updateScoreDisplay();

  // swipe controls
  mc.get("swipe").set({ direction: Hammer.DIRECTION_ALL });

  mc.on("swipeup", function () {
    increaseScore();
  });

  mc.on("swipedown", function () {
    decreaseScore();
  });

  // Button Click Controls
  $(this)
    .find(".up")
    .click(function () {
      increaseScore();
    });

  $(this)
    .find(".down")
    .click(function () {
      decreaseScore();
    });

// //update score when inputs are updated

  $(`input[name="score${teamName}"]`).on("input", function () {
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

  //reset
  $("#reset").click(function () {
    score = 0;
    $("article").find("h1").html(score);
    updateScoreDisplay();
  });
});

// ============================================================= Colors Feature
$(".color_container").each(function () {
  const sectionName = $(this)
    .parent(".team_settings")
    .attr("class")
    .split(" ")
    .pop(); //lowercase team name [home]
  const team = $(this).parent(".team_settings").attr("team"); //capitalized team name [Home]
  const sectionID = "colorChange" + team; //[colorChangeHome]

  $(this)
    .find(".color_dot")
    .click(function () {
      $(this).parent(".color_container").toggleClass("isOpen");
    });

  //add new color definitions here
  const colorsOptions = [
    {
      colorName: "red",
    },
    {
      colorName: "bittersweet",
    },
    {
      colorName: "crimson",
    },
    {
      colorName: "orange",
    },
    {
      colorName: "apricot",
    },
    {
      colorName: "gold",
    },
    {
        colorName: "yellow",
    },
    {
        colorName: "lemon",
    },
    {
        colorName: "lime",
    },
    {
        colorName: "green",
    },
    {
        colorName: "spring_green",
    },
    {
        colorName: "electric_blue",
    },
    {
        colorName: "sky_blue",
    },
    {
        colorName: "blue",
    },
    {
        colorName: "violet",
    },
    {
        colorName: "magenta",
    },
    {
        colorName: "rose",
    },
    {
        colorName: "hot_pink",
    },
  ];

  $(this).append(
    `<form id="${sectionID}"><ul class="colorPanel color_list"></ul></form>`
  );

  const container = $(`#${sectionID}`);

  $.each(colorsOptions, function (i, e) {});

  var cList = $(this).find(".color_list");
  $.each(colorsOptions, function (i, e) {
    var li = $("<li/>").appendTo(cList);
    var inputs = $("<input/>")
      .attr("type", "radio")
      .attr("id", e.colorName + team)
      .attr("name", "color" + team)
      .attr("value", e.colorName)
      // .text(e.name)
      .appendTo(li);
    var labels = $("<label/>")
      .attr("for", e.colorName + team)
      .text(e.colorName)
      .appendTo(li);

    //cList.append(item);
  });

  //set default cheked values
  $(".team_settings.home").find('input[value="crimson"]').prop("checked", true);
  $(".team_settings.away").find('input[value="blue"]').prop("checked", true);

  let selectedColor = $(this).find('input[type="radio"]:checked').val();

  function setNewColorValue() {
    console.log(selectedColor);
    $(`.color_container.${sectionName}`)
      .find(".color_dot")
      .removeClass()
      .addClass("color_dot")
      .addClass(selectedColor);

    $(`#team${team}`)
      .removeClass()
      .addClass(`score ${sectionName}`)
      .addClass(selectedColor);
  }

  $(`#colorChange${team}`).change(function () {
    selectedColor = $(this).find('input[type="radio"]:checked').val();
    $(this).parents(".color_container").toggleClass("isOpen");
    setNewColorValue();
  });
  setNewColorValue();
});

// ============================================================= Name Feature

$('h2.teamName').each(function(){

  let nameString = $(this).html();
  const nameDisplay = $(this);
  const nameInput = $(this).parent('article').attr('id');

  function updateNameDisplay() {
   $(nameDisplay).html(nameString)
  }

  $(`input[for="${nameInput}"]`).on("input", function () {
    let newValue = $(this).val();
     nameString = newValue;
    console.log(nameString)
    updateNameDisplay();
  });

});

// ============================================================= menu toggle button
$("#navToggle").click(function () {
  $(this).toggleClass("navOpen");
  $("#controls").toggleClass("navOpen");
  $("main").toggleClass("navOpen");
});


