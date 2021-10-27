gsap.registerPlugin(ScrollTrigger);

$(" .section--label").each(function() {

const firstLine = $(this).find('.layer-1')
const secondLine = $(this).find('.layer-2')

    gsap.from(firstLine, {

    scrollTrigger:{
    trigger:firstLine,
    start: "top 90%",
    end: "top 60%",
    // markers: true,
    scrub:1,
    toggleActions: "restart pause reverse pause"
    },
    x: '10%', 
    opacity:0,
    duration:3

    });

    gsap.from(secondLine, {

    scrollTrigger:{
    trigger:firstLine,
    start: "top 90%",
    end: "top 60%",
    // markers: true,
    scrub:3,
    toggleActions: "restart pause reverse pause"
    },
    x: '-10%', 
    opacity:0,
    duration:3,
    });


});

$(" .project--end").each(function() {

const itemBack = $('#link_back')
const itemLine = $(this).find('.line')
const itemNext = $('#link_next')

let tl = gsap.timeline({
    scrollTrigger:{
        trigger:this,
        start:"top 80%",
        end:"bottom top",
        toggleActions:"restart none reverse none",
        // scrub:1,
    }
})


.from(itemBack, {yPercent:100, opacity:0, duration:0.5, ease:Quad.easeOut})
.from(itemLine, {'max-width':0, duration:0.5,ease:Quad.easeOut}, 0.5)
.from(itemNext, {xPercent:100, opacity:0, duration:0.4, ease:Quad.easeOut})


});

const sections = document.querySelectorAll('.item_project');

sections.forEach((section, index) => {

  ScrollTrigger.create({
    trigger: section,
    id: index+1,
    start: 'top center',
    end: () => `+=${section.clientHeight + 30}`,
    toggleActions: 'play reverse none reverse',
    toggleClass: {targets: section, className: "is-highlighted"},
    // markers: true
  })
  
})






$("#boc-overlaping_phones").each(function() {

    const target = $(this).find('img:nth-child(2)');
    const target2 = $(this).find('img:nth-child(1)');
    
        gsap.from(target, {
    
        scrollTrigger:{
        trigger:target,
        start: "top 80%",
        end: "top 0%",
        // markers: true,
        scrub:1,
        toggleActions: "restart pause reverse pause"
        },
        x: '-10%', 
        opacity:0,
        rotation: 15,
        // duration:3
        
    
        });
    
        gsap.from(target2, {
    
        scrollTrigger:{
        trigger:target2,
        start: "top 80%",
        end: "top 0%",
        // markers: true,
        scrub:3,
        toggleActions: "restart pause reverse pause"
        },
        x: '10%', 
        opacity:0,
        rotation: -15,
        // duration:3,
        });
    
    
    });


    $("#boc-player_select").each(function() {

        const target = $(this).find('.film_strip img');
        
            gsap.to(target, {
        
            scrollTrigger:{
            trigger:target,
            start: "top 100%",
            end: "top 0%",
            // markers: true,
            scrub:1,
            toggleActions: "restart pause reverse pause"
            },
            x: '-20%', 
    
            });
        
        });



        $("#boc-mobile_screen_grid .image_area").each(function() {

            const target = $(this).find('img, video');
            
                gsap.from(target, {
            
                scrollTrigger:{
                trigger:this,
                start: "top 80%",
                end: "top 60%",
                // markers: true,
                scrub:1,
                toggleActions: "restart pause reverse pause"
                },
                y: '10%',
                opacity:0
        
                });
            
            });
    

