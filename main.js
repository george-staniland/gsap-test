// Section 1

const timeline = gsap.timeline({ defaults: { duration: 1 } });
timeline
  .from('.section1-text', { duration: 1.6, x: '-100vw', ease: 'bounce' } )
  .from('.section-1 .sequence', { duration: 1, x: '-100vw', stagger: .5, ease: 'bounce'  })

const btn = document.querySelector('.run-btn');
btn.addEventListener(addEventListener( 'click', () => {
  timeline.timeScale(3)
  timeline.reverse();
} ))

// Section 2
addEventListener("load", (event) => {
    gsap.registerPlugin(ScrollTrigger) 

    gsap.to(".section-2 h1", {
        scrollTrigger: {
          trigger: ".section-2",
          scrub: true,
          start: "top bottom",
          end: "top top",
        },
        x: 0,
        transformOrigin: "center center", 
        ease: "none",
        onStart: start,
        onComplete: complete,
      });

      function start () {
        console.log('start')
        gsap.to(".section-2 .circle", {
            height: '0vh',
            width: '0vh',
            borderColor: 'rgba(0, 0, 0, 0)',
            transformOrigin: "center center", 
            duration: '1',
            ease: "elastic",
          });
      }

      function complete () {
        console.log('complete')
        gsap.to(".section-2 .circle", {
            height: '90vh',
            width: '90vh',
            borderColor: 'rgba(0, 0, 0, 1)',
            transformOrigin: "center center", 
            duration: '1',
            ease: "elastic",
          });
      }


    
});





