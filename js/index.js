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
    if (score < 10) {
      $(scoreContainer).css("--digits", "1.5");
    } else if (score < 100) {
      $(scoreContainer).css("--digits", "2");
    } else if (score < 1000) {
      $(scoreContainer).css("--digits", "3");
    } else {
      $(scoreContainer).css("--digits", "4");
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
      slug: "maroon",
      colorName: "maroon",
    },
    {
      slug: "red",
      colorName: "red",
    },
    {
      slug: "crimson",
      colorName: "crimson",
    },
    {
      slug: "orange",
      colorName: "orange",
    },

    {
      slug: "gold",
      colorName: "gold",
    },
    {
      slug: "yellow",
      colorName: "yellow",
    },
    {
      slug: "lemon",
      colorName: "lemon",
    },
    {
      slug: "lime",
      colorName: "lime",
    },
    {
      slug: "green",
      colorName: "green",
    },
    {
      slug: "spring_green",
      colorName: "spring green",
    },
    {
      slug: "electric_blue",
      colorName: "electric blue",
    },
    {
      slug: "sky_blue",
      colorName: "sky blue",
    },
    {
      slug: "blue",
      colorName: "blue",
    },
    {
      slug: "navy",
      colorName: "navy",
    },
    {
      slug: "violet",
      colorName: "violet",
    },
    {
      slug: "magenta",
      colorName: "magenta",
    },
    {
      slug: "rose",
      colorName: "rose",
    },
    {
      slug: "hot_pink",
      colorName: "hot pink",
    },
    {
      slug: "black",
      colorName: "black",
    },
    {
      colorName: "grey",
      colorName: "grey",
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
      .attr("id", e.slug + team)
      .attr("name", "color" + team)
      .attr("value", e.slug)
      // .text(e.name)
      .appendTo(li);
    var labels = $("<label/>")
      .attr("for", e.slug + team)
      .appendTo(li);
    var text = $("<span/>").text(e.colorName).appendTo(labels);

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

$("h2.teamName").each(function () {
  let nameString = $(this).html();
  const nameDisplay = $(this);
  const nameInput = $(this).parent("article").attr("id");

  function updateNameDisplay() {
    $(nameDisplay).html(nameString);
  }

  $(`input[for="${nameInput}"][type="text"]`).on("input", function () {
    let newNameValue = $(this).val();
    nameString = newNameValue;
    console.log(nameString);
    updateNameDisplay();
  });
});

// ============================================================= rotate button button

$("#rotate").click(function () {
  $("main").toggleClass("flipped");
});

// ============================================================= menu toggle button

function toggleNavState() {
  $("#navToggl, #controls, main").toggleClass("navOpen");
}

$("#navToggle").click(function () {
  toggleNavState();
});

$("#controls").click(function (e) {
  if (e.target != this) return;
  toggleNavState();
});
