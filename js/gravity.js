var controller = new ScrollMagic.Controller();

// scroll effect 1
$(".image--1UP").each(function() {

      var screenHeightHalf = $( window ).height() / 4;
      var target = $(this).find('.faux_mask');

    var fauxMask = new TimelineMax();
            // fauxMask.from($(target2), .5, {'max-width': 0})
            fauxMask.to($(target), .5, {x: '101%'})


    var scene = new ScrollMagic.Scene({
            triggerElement: this,
            offset: -screenHeightHalf,
            reverse:true,
            // duration:screenHeight,
        })
        .setTween(fauxMask)
        .addTo(controller)
        .addIndicators('S1')
        ;
});



// scroll effect 2
$(".text--1UP").each(function() {

      var screenHeightHalf = $( window ).height() / 5;
      var target = $(this).find('.text_block');

    var upIn = new TimelineMax();
            upIn.from($(target), .5, {y: 40, opacity: 0})


    var scene = new ScrollMagic.Scene({
            triggerElement: this,
            offset: -screenHeightHalf,
            reverse:true,
            // duration:screenHeight,
        })
        .setTween(upIn)
        .addTo(controller)
        .addIndicators('S1')
        ;
});




// scroll effect 3
$(".text_image--2UP").each(function() {

      var screenHeightHalf = $( window ).height() / 4;
      var target = $(this).find('.text_block');
      var target2 = $(this).find('.faux_mask');


    var upIn = new TimelineMax();
            upIn.from($(target), .5, {y: 40, opacity: 0})
            upIn.to($(target2), .5, {x: '101%'}, -.5)


    var scene = new ScrollMagic.Scene({
            triggerElement: this,
            offset: -screenHeightHalf,
            reverse:true,
            // duration:screenHeight,
        })
        .setTween(upIn)
        .addTo(controller)
        .addIndicators('S1')
        ;
});

// scroll effect 3
$(".card--slider").each(function() {

      var screenHeightHalf = $( window ).height() / 4;
      var target = $(this).find('.card');


    var acrossIn = new TimelineMax();
            acrossIn.from($(target), 1, {x: -60, opacity: 0})
            // upIn.to($(target2), .5, {x: '101%'}, -.5)


    var scene = new ScrollMagic.Scene({
            triggerElement: this,
            offset: -screenHeightHalf,
            reverse:true,
            // duration:screenHeight,
        })
        .setTween(acrossIn)
        .addTo(controller)
        .addIndicators('S1')
        ;
});

// scroll effect 3
$(".card--grid").each(function() {

      var screenHeightHalf = $( window ).height() / 4;
      var target = $(this).find('.card');


    var upIn = new TimelineMax();
         upIn.from($(target), .5, {y: 40, opacity: 0})


    var scene = new ScrollMagic.Scene({
            triggerElement: this,
            offset: -screenHeightHalf,
            reverse:true,
            // duration:screenHeight,
        })
        .setTween(upIn)
        .addTo(controller)
        .addIndicators('S1')
        ;
});




// scroll effect 4
$(".article_post .text_block .content").each(function() {

      var screenHeightHalf = $( window ).height() / 2.5;
      var target = $(this).find('*');


    var upIn = new TimelineMax();
            upIn.from($(target), .4, {y: 20, opacity: 0})


    var scene = new ScrollMagic.Scene({
            triggerElement: this,
            offset: -screenHeightHalf,
            reverse:true,
            // duration:screenHeight,
        })
        .setTween(upIn)
        .addTo(controller)
        .addIndicators('S1')
        ;
});



