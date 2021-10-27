document.addEventListener("DOMContentLoaded", function(){


const elements = document.querySelectorAll(".tilt, .button");

  elements.forEach(function (element) {
    
    /* Get the height and width of the element */
    const height = element.clientHeight
    const width = element.clientWidth

    /*
      * Add a listener for mousemove event
      * Which will trigger function 'handleMove'
      * On mousemove
      */
    element.addEventListener('mousemove', handleMove)

    /* Define function a */
    function handleMove(e) {
      /*
        * Get position of mouse cursor
        * With respect to the element
        * On mouseover
        */
      /* Store the x position */
      const xVal = e.layerX
      /* Store the y position */
      const yVal = e.layerY
      
      /*
        * Calculate rotation valuee along the Y-axis
        * Here the multiplier 20 is to
        * Control the rotation
        * You can change the value and see the results
        */
      const yRotation = 10 * ((xVal - width / 2) / width)
      
      /* Calculate the rotation along the X-axis */
      const xRotation = -10 * ((yVal - height / 2) / height)
      
      /* Generate string for CSS transform property */
      const string = 'perspective(500px) scale(1.1) rotateX(' + xRotation + 'deg) rotateY(' + yRotation + 'deg)'
      
      /* Apply the calculated transformation */
      element.style.transform = string
    }

    /* Add listener for mouseout event, remove the rotation */
    element.addEventListener('mouseout', function() {
      element.style.transform = 'perspective(500px) scale(1) rotateX(0) rotateY(0)'
    })

    /* Add listener for mousedown event, to simulate click */
    element.addEventListener('mousedown', function() {
      element.style.transform = 'perspective(500px) scale(0.9) rotateX(0) rotateY(0)'
    })

    /* Add listener for mouseup, simulate release of mouse click */
    element.addEventListener('mouseup', function() {
      element.style.transform = 'perspective(500px) scale(1.1) rotateX(0) rotateY(0)'
    })



    
  });

});/* Store the element in el */


document.addEventListener("DOMContentLoaded", function(){
  /* Store the element in el */
const elements = document.querySelectorAll(".tilt-2");

  elements.forEach(function (element) {

    const target = element.getElementsByClassName('content')[0];
    
    // console.log(target)

    /* Get the height and width of the element */
    const height = element.clientHeight
    const width = element.clientWidth

    /*
      * Add a listener for mousemove event
      * Which will trigger function 'handleMove'
      * On mousemove
      */
    element.addEventListener('mousemove', handleMove)

    /* Define function a */
    function handleMove(e) {
      /*
        * Get position of mouse cursor
        * With respect to the element
        * On mouseover
        */
      /* Store the x position */
      const xVal = e.layerX
      /* Store the y position */
      const yVal = e.layerY
      
      /*
        * Calculate rotation value along the Y-axis
        * Here the multiplier 20 is to
        * Control the rotation
        * You can change the value and see the results
        */
      const yRotation = -.25* ((xVal - width / 2) / width)
      
      /* Calculate the rotation along the X-axis */
      const xRotation = .25 * ((yVal - height / 2) / height)
      
      /* Generate string for CSS transform property */
      const string = 'perspective(100px) scale(1) rotateX(' + xRotation + 'deg) rotateY(' + yRotation + 'deg)'
      
      /* Apply the calculated transformation */
      target.style.transform = string
    }

    /* Add listener for mouseout event, remove the rotation */
    element.addEventListener('mouseout', function() {
      target.style.transform = 'perspective(100px) scale(1) rotateX(0) rotateY(0)'
    })

    // /* Add listener for mousedown event, to simulate click */
    // element.addEventListener('mousedown', function() {
    //   element.style.transform = 'perspective(500px) scale(0.9) rotateX(0) rotateY(0)'
    // })

    // /* Add listener for mouseup, simulate release of mouse click */
    // element.addEventListener('mouseup', function() {
    //   element.style.transform = 'perspective(500px) scale(1.1) rotateX(0) rotateY(0)'
    // })



    
  });
});/* Store the element in el */

// class HoverButton {
//   constructor(el) {
//     this.el = el;
//     this.hover = false;
//     this.calculatePosition();
//     this.attachEventsListener();
//   }

//   attachEventsListener() {
//     window.addEventListener('mousemove', e => this.onMouseMove(e));
//     window.addEventListener('resize', e => this.calculatePosition(e));
//   }

//   calculatePosition() {
//     gsap.set(this.el, {
//       x: 0,
//       y: 0,
//       scale: 1 });

//     const box = this.el.getBoundingClientRect();
//     this.x = box.left + box.width * 0.5;
//     this.y = box.top + box.height * 0.5;
//     this.width = box.width;
//     this.height = box.height;
//   }

//   onMouseMove(e) {
//     let hover = false;
//     let hoverArea = this.hover ? 0.7 : 0.5;
//     let x = e.clientX - this.x;
//     let y = e.clientY - this.y;
//     let distance = Math.sqrt(x * x + y * y);
//     if (distance < this.width * hoverArea) {
//       hover = true;
//       if (!this.hover) {
//         this.hover = true;
//       }
//       this.onHover(e.clientX, e.clientY);
//     }

//     if (!hover && this.hover) {
//       this.onLeave();
//       this.hover = false;
//     }
//   }

//   onHover(x, y) {
//     gsap.to(this.el, {
//       x: (x - this.x) * 0.2,
//       y: (y - this.y) * 0.2,
//       scale: 1.15,
//       ease: 'power2.out',
//       duration: 0.4 });

//     this.el.style.zIndex = 10;
//   }
//   onLeave() {
//     gsap.to(this.el, {
//       x: 0,
//       y: 0,
//       scale: 1,
//       ease: 'elastic.out(1.2, 0.4)',
//       duration: 0.7 });

//     this.el.style.zIndex = 1;
//   }}


// const btn1 = document.querySelector('#attract1');
// new HoverButton(btn1);