$(document).ready(function () {
	//sideout toggle
	$('[data-action="scoringToggle"]').click(function () {
		var $parentContainer = $(this).parents("[data-scoring]");
		var currentSideOut = $parentContainer.attr("data-scoring");

		if (currentSideOut === "rally") {
			$parentContainer.attr("data-scoring", "sideout");
			$("[data-sideout]").attr("data-sideout", "home");
		} else {
			$parentContainer.attr("data-scoring", "rally");
			$("[data-sideout]").attr("data-sideout", "");
		}
	});
});

//sideout toggle
$(document).ready(function () {
	$("#sideout--indicator").click(function () {
		var $parentContainer = $(this).parent(".score_display--container");
		var currentSideOut = $parentContainer.attr("data-sideout");

		if (currentSideOut === "home") {
			$parentContainer.attr("data-sideout", "away");
		} else {
			$parentContainer.attr("data-sideout", "home");
		}
	});
});

//Score Number Updates
$(document).ready(function () {
	$('article[data-team="home"]').each(function () {
		var scoreValue = 0;

		function updateScoreDisplay() {
			$('[data-team="home"] .score_display--number').text(scoreValue);
			$('[data-team="home"] input[data-input="score"]').val(scoreValue);
		}

		updateScoreDisplay();

		$('[data-team="home"] button[data-action="up"]').on(
			"click swipeup",
			function (event) {
				if (!$(event.target).closest('[data-sideout="away"]').length) {
					scoreValue += 1;
					updateScoreDisplay();
				}
			}
		);

		$('[data-team="home"] button[data-action="down"]').on(
			"click swipedown",
			function (event) {
				if (!$(event.target).closest('[data-sideout="away"]').length) {
					scoreValue -= 1;
					updateScoreDisplay();
				}
			}
		);

		$('[data-team="home"] input[data-input="score"]').on("input", function () {
			var newScoreValue = parseInt($(this).val(), 10);
			if (!isNaN(newScoreValue)) {
				scoreValue = newScoreValue;
				updateScoreDisplay();
			}
		});

		$('[data-action="reset"]').on("click", function () {
			scoreValue = 0;
			updateScoreDisplay();
		});
	});

	$('article[data-team="away"]').each(function () {
		var scoreValue = 0;

		function updateScoreDisplay() {
			$('[data-team="away"] .score_display--number').text(scoreValue);
			$('[data-team="away"] input[data-input="score"]').val(scoreValue);
		}

		updateScoreDisplay();

		$('[data-team="away"] button[data-action="up"]').on(
			"click swipeup",
			function (event) {
				if (!$(event.target).closest('[data-sideout="home"]').length) {
					scoreValue += 1;
					updateScoreDisplay();
				}
			}
		);

		$('[data-team="away"] button[data-action="down"]').on(
			"click swipedown",
			function (event) {
				if (!$(event.target).closest('[data-sideout="home"]').length) {
					scoreValue -= 1;
					updateScoreDisplay();
				}
			}
		);

		$('[data-team="away"] input[data-input="score"]').on("input", function () {
			var newScoreValue = parseInt($(this).val(), 10);
			if (!isNaN(newScoreValue)) {
				scoreValue = newScoreValue;
				updateScoreDisplay();
			}
		});

		$('[data-action="reset"]').on("click", function () {
			scoreValue = 0;
			updateScoreDisplay();
		});
	});
});

//Team Name controls
$(document).ready(function () {
	$('[data-input="name"]').each(function () {
		$(this).on("input", function () {
			var newName = $(this).val();
			const team = $(this).parents(".controls--group").attr("data-team");
			$(`[data-team="` + team + `"] .score_display--name`).text(newName);
		});
	});
});

//Side switch controls
$(document).ready(function () {
	$('button[data-action="sideSwitch"]').on("click", function () {
		var currentSwitchValue = $(".score_display--container").attr("data-switch");
		var newSwitchValue = currentSwitchValue === "true" ? "false" : "true";
		$(".score_display--container").attr("data-switch", newSwitchValue);
	});
});

//color controls
$(document).ready(function () {
	// Toggle state attribute on .color--display click
	$(".color--display").on("click", function () {
		var $parentElement = $(this).parent();
		var currentState = $parentElement.attr("state");
		if (currentState === "open") {
			$parentElement.attr("state", "closed");
		} else {
			$parentElement.attr("state", "open");
		}
	});

	$("body").on("click", function (event) {
		if (!$(event.target).closest(".color-list, .color--display").length) {
			$(".controls--color").attr("state", "closed");
		}
	});

	var colors = [
		{ name: "Maroon", hex: "#671A16" },
		{ name: "Red", hex: "#E24D46" },
		{ name: "Crimson", hex: "#EA4E28" },
		{ name: "Orange", hex: "#EA8D38" },
		{ name: "Gold", hex: "#D3AB1A" },
		{ name: "Yellow", hex: "#F0D04C" },
		{ name: "Lemon", hex: "#FFFF80" },
		{ name: "Lime", hex: "#00FF00" },
		{ name: "Green", hex: "#61C546" },
		{ name: "Dark Green", hex: "#138017" },
		{ name: "Navy Green", hex: "#7B935C" },
		{ name: "Spring Green", hex: "#6CE08C" },
		{ name: "Electric Blue", hex: "#00F0FF" },
		{ name: "Aqua", hex: "#70E8FC" },
		{ name: "Sky Blue", hex: "#7BB1F5" },
		{ name: "Blue", hex: "#3660D1" },
		{ name: "Navy Blue", hex: "#192F6A" },
		{ name: "Violet", hex: "#8E4BE3" },
		{ name: "Magenta", hex: "#D954E4" },
		{ name: "Rose", hex: "#D95497" },
		{ name: "Pink", hex: "#FB8DC6" },
		{ name: "Black", hex: "#000000" },
		{ name: "Cool Grey", hex: "#C4D3D8" },
		{ name: "Warm Grey", hex: "#D8C7C4" },
	];

	var $colorList = $(".color--list");

	// Create the color list
	for (var i = 0; i < colors.length; i++) {
		var color = colors[i];
		var $colorItem = $("<li>")
			.text(color.name)
			.addClass("color-item")
			.css("--section_color", color.hex)
			.on("click", function () {
				const color = $(this).css("--section_color");
				const teamName = $(this).parents(".controls--group").attr("data-team");
				$(this).parents(".controls--color").attr("state", "closed");
				$(`[data-team="` + teamName + `"]`).css("--section_color", color);
			});

		$colorList.append($colorItem);
	}
});

//Modal Controls
$(document).ready(function () {
	$("body").on("click", function (event) {
		if (
			!$(event.target).closest("nav.controls--container, #navigation--toggle")
				.length
		) {
			$("nav.controls--container,#navigation--toggle").attr("modal", "closed");
		}
	});

	$("#navigation--toggle").on("click", function (event) {
		$("nav.controls--container,#navigation--toggle").attr("modal", "open");
	});
});
