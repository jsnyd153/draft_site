
// var controller = new ScrollMagic.Controller();


// $(".project_thumbnail").each(function() {


//       var screenHeight = $( window ).height();
//       var target = $(this).find('.image_area .content img');

//     var inner_para = new TimelineMax();
//         inner_para.to(target, 1, {y: '-20%'});

//     var scene = new ScrollMagic.Scene({
//             triggerElement: this,
//             offset: -screenHeight * .5,
//             reverse:true,
//             duration:screenHeight * 1,
//         })
//         .setTween(inner_para)
//         .addTo(controller)
//         .addIndicators('image--1UP')
//         ;
// });



var controller = new ScrollMagic.Controller();



$(" .section--label").each(function() {
;

      var screenHeight = $( window ).height();
      var target = $(this).find('.layer-1');

    var fauxMask = new TimelineMax();
            fauxMask.from($(target), .5, {x: '10%', opacity:0})


    var scene = new ScrollMagic.Scene({
            triggerElement: this,
            offset: -screenHeight / 3,
            reverse:true,
            duration:screenHeight * 2 / 3,
        })
        .setTween(fauxMask)
        .addTo(controller)
        // .addIndicators('image--1UP')
        ;
});

$(" .section--label").each(function() {


      var screenHeight = $( window ).height();
      var target = $(this).find('.layer-2');

    var fauxMask = new TimelineMax();
            fauxMask.from($(target), .5, {x: '-10%', opacity:0})


    var scene = new ScrollMagic.Scene({
            triggerElement: this,
            offset: -screenHeight / 3,
            reverse:true,
            duration:screenHeight * 2 / 3,
        })
        .setTween(fauxMask)
        .addTo(controller)
        // .addIndicators('image--1UP')
        ;
});

$(" .project--list .item_project .content").each(function() {


      var screenHeight = $( window ).height();
      var target = $(this)

    var fauxMask = new TimelineMax();
            fauxMask.from($(target), .5, {opacity:0})


    var scene = new ScrollMagic.Scene({
            triggerElement: this,
            offset: -screenHeight / 3,
            reverse:true,
            duration:screenHeight * 2 / 3,
        })
        .setTween(fauxMask)
        .addTo(controller)
        .addIndicators('image--1UP')
        ;
});



$("#trigger1").each(function() {


      var screenHeight = $( window ).height();
      var objectHeight = $( this ).height();
      var pageHeight = $( 'main' ).height();
      var target = $('#root_background_block');

    var inner_para = new TimelineMax();
        inner_para.to(target, 1, {y: '-100%'});

    var scene = new ScrollMagic.Scene({
            triggerElement: this,
            offset: -objectHeight * .5,
            reverse:true,
            duration:pageHeight * 1,
        })
        .setTween(inner_para)
        .addTo(controller)
        .addIndicators('image--1UP')
        ;
});


$(".basic--hero").each(function() {


      var screenHeight = $( window ).height();
      var objectHeight = $( this ).height();
      var target = $(this).find('.image_area');

    var inner_para = new TimelineMax();
        inner_para.to(target, 1, {y: '10%', opacity: 0});

    var scene = new ScrollMagic.Scene({
            triggerElement: this,
            offset: objectHeight * .75,
            reverse:true,
            duration:screenHeight * 1,
        })
        .setTween(inner_para)
        .addTo(controller)
        // .addIndicators('image--1UP')
        ;
});



$("#scroll_animation_phones").each(function() {

      var screenHeight = $( window ).height();
      var objectHeight = $( this ).height();
      var target = $(this).find('img:nth-child(2)');
      var target2 = $(this).find('img:nth-child(1)');
      var previousItem = $(this).prev();

    var inner_para = new TimelineMax();
        inner_para.to(previousItem, .5, {opacity:0});
        inner_para.from(target, .75, {x: '-10%', rotation:10}, "<");
        inner_para.from(target2, .75, {x: '10%', rotation:-10}, "<");


    var scene = new ScrollMagic.Scene({
            triggerElement: this,
            offset: -objectHeight/8,
            reverse:true,
            duration:screenHeight * .6,
        })
        .setTween(inner_para)
        .addTo(controller)
        // .addIndicators('image--1UP')
        ;
});


// $("#scroll_animation_phones").each(function() {

//       var screenHeight = $( window ).height();
//       var objectHeight = $( this ).height();
//       var target = $(this).find('img:nth-child(1)');

//     var inner_para = new TimelineMax();
//         inner_para.from(target, 1, {x: '10%', rotation:-10});


//     var scene = new ScrollMagic.Scene({
//             triggerElement: this,
//             offset: -objectHeight/8,
//             reverse:true,
//             duration:screenHeight * .8,
//         })
//         .setTween(inner_para)
//         .addTo(controller)
//         // .addIndicators('image--1UP')
//         ;
// });

$("#boc-player_select").each(function() {

      var screenHeight = $( window ).height();
      var objectHeight = $( this ).height();
      var target = $(this).find('.film_strip img');
      var previousItem = $(this).prev();

    var inner_para = new TimelineMax();
        inner_para.to(previousItem, .5, {opacity:0});
        inner_para.to(target, 1, {x: '-20%'}, "<");


    var scene = new ScrollMagic.Scene({
            triggerElement: this,
            offset: -objectHeight/8,
            reverse:true,
            duration:screenHeight * .8,
        })
        .setTween(inner_para)
        .addTo(controller)
        // .addIndicators('image--1UP')
        ;
});

$(".image_area.mobile_screen.no_frame:nth-child(odd)").each(function() {

      var screenHeight = $( window ).height();
      var objectHeight = $( this ).height();
      var target = $(this).find('.content');

    var inner_para = new TimelineMax();
        inner_para.from(target, 1, {y: '10%', opacity:0});


    var scene = new ScrollMagic.Scene({
            triggerElement: this,
            offset: -objectHeight/4,
            reverse:true,
            duration:screenHeight * .5,
        })
        .setTween(inner_para)
        .addTo(controller)
        // .addIndicators('image--1UP')
        ;
});

$(".image_area.mobile_screen.no_frame:nth-child(even)").each(function() {

      var screenHeight = $( window ).height();
      var objectHeight = $( this ).height();
      var target = $(this).find('.content');

    var inner_para = new TimelineMax();
        inner_para.from(target, 1, {y: '10%', opacity:0});


    var scene = new ScrollMagic.Scene({
            triggerElement: this,
            offset: -objectHeight/8,
            reverse:true,
            duration:screenHeight * .5,
        })
        .setTween(inner_para)
        .addTo(controller)
        // .addIndicators('image--1UP')
        ;
});


$(".web--demo").each(function() {

      var screenHeight = $( window ).height();
      var objectHeight = $( this ).height();
      var target = $(this).find('.small_left');

    var inner_para = new TimelineMax();
        inner_para.from(target, 1, {y: '50%'});


    var scene = new ScrollMagic.Scene({
            triggerElement: this,
            offset: objectHeight/2,
            reverse:true,
            duration:screenHeight * 1.5,
        })
        .setTween(inner_para)
        .addTo(controller)
        // .addIndicators('image--1UP')
        ;
});


$(".web--demo").each(function() {

      var screenHeight = $( window ).height();
      var objectHeight = $( this ).height();
      var target = $(this).find('.small_right');

    var inner_para = new TimelineMax();
        inner_para.from(target, 1, {y: '-50%'});


    var scene = new ScrollMagic.Scene({
            triggerElement: this,
            offset: -objectHeight/4,
            reverse:true,
            duration:screenHeight * 1,
        })
        .setTween(inner_para)
        .addTo(controller)
        // .addIndicators('image--1UP')
        ;
});



$(" .project_thumbnail:nth-child(odd)").each(function() {

        $(this).find('.image_area .content').append('<div class="faux_mask"></div>');

      var screenHeight = $( window ).height();
      var target = $(this).find('.image_area .content');
      var target2 = $(this).find('.faux_mask');

    var fauxMask = new TimelineMax();
            fauxMask.from($(this), .5, {opacity: 0})
            fauxMask.from($(target), .5, {'max-width': 0})
            fauxMask.to($(target2), 1, {x: '101%'})


    var scene = new ScrollMagic.Scene({
            triggerElement: this,
            offset: -screenHeight / 4 - 20,
            reverse:true,
            // duration:screenHeight,
        })
        .setTween(fauxMask)
        .addTo(controller)
        // .addIndicators('image--1UP')
        ;
});

$(" .project_thumbnail:nth-child(even)").each(function() {

        $(this).find('.image_area .content').append('<div class="faux_mask"></div>');

    var screenHeight = $( window ).height();
      var target = $(this).find('.image_area .content');
      var target2 = $(this).find('.faux_mask');

    var fauxMask = new TimelineMax();
    fauxMask.from($(this), .5, {opacity: 0})
            fauxMask.from($(target), .5, {'max-width': 0})
            // fauxMask.from($(target), .5, {opacity: 0})
            fauxMask.to($(target2), 1, {x: '101%'})


    var scene = new ScrollMagic.Scene({
            triggerElement: this,
            offset: -screenHeight / 4 + 20,
            reverse:true,
            // duration:screenHeight,
        })
        .setTween(fauxMask)
        .addTo(controller)
        // .addIndicators('image--1UP')
        ;
});



$(".scrollIn").each(function() {


      var screenHeight = $( window ).height();

    var fauxMask = new TimelineMax();
            fauxMask.from($(this), 1, {opacity:0})


    var scene = new ScrollMagic.Scene({
            triggerElement: this,
            offset: -screenHeight / 4,
            reverse:true,
            // duration:screenHeight * 2 / 3,
        })
        .setTween(fauxMask)
        .addTo(controller)
        // .addIndicators('image--1UP')
        ;
});


