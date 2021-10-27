$(function() {

  var slider_list = $(".slider_block ul");
  var slide_count = slider_list.children().length;
  var slide_width_pc = 100.0 / slide_count;
  var slide_index = 0;

// create a locator box for every slide and style appropriately based o nteh number of slides >> OFF
  // $('.slide').each(function(){
  //   $('#slider_navigator').append('<span></span>');
  // });

  // $('#slider_navigator span:nth-child(1)').addClass('active');
  // $('#slider_navigator span').css('width', 90 / slide_count + "%");
  // $('#slider_navigator span').css('margin', 5 / slide_count + "%");

// =====

// set container width based on the number of slides
 $('.hero--slider ul').css('width', 100 * slide_count +'%')


  var first_slide = slider_list.find("li:first-child");
  var last_slide = slider_list.find("li:last-child");

  // Clone the last slide and add as first li element
  last_slide.clone().prependTo(slider_list);

  // Clone the first slide and add as last li element
  first_slide.clone().appendTo(slider_list);

  slider_list.find("li").each(function(indx) {
    var left_percent = (slide_width_pc * indx) + "%";
    $(this).css({"left":left_percent});
    $(this).css({width:(100 / slide_count) + "%"});
  });

  slider_list.css("margin-left", "-100%");

  // controlls for moving backwards in slider
  $("#slider_prev").click(function() {
    console.log("#slider_prev button clicked");
    slide(slide_index - 1);
  });

  // Listen for click of next button
  $("#slider_next").click(function() {
    slide(slide_index + 1);
  });


  $('#slider_navigator span').click(function(){

    var navigator_number = $(this).index()
    slide(slide_index = navigator_number);
    
  });

  function slide(new_slide_index) {

    var margin_left_pc = (new_slide_index * (-100) - 100) + "%";
    var actual_slide_number = new_slide_index +1;

    // move active class to proper locator span
    $('#slider_navigator span').removeClass();
    $("#slider_navigator span:nth-child(" + actual_slide_number + ")").addClass('active');

  // move the actual slides
    slider_list.animate({"margin-left": margin_left_pc}, 400, function() {

      // If new slide is before first slide...
      if(new_slide_index < 0) {
        slider_list.css("margin-left", ((slide_count) * (-100)) + "%");
        new_slide_index = slide_count - 1;
      }
      // If new slide is after last slide...
      else if(new_slide_index >= slide_count) {
        slider_list.css("margin-left", "-100%");
        new_slide_index = 0;
        $('#slider_navigator span:nth-child(1)').addClass('active');
      }

      slide_index = new_slide_index

    });

  }

});