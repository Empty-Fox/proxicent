$(document).ready(function () {
  /////////////For Prev and Next BTN which now is hiden///////////
  let active = 0;
  let el = $(".page");
  let total = el.length - 1;
  const toggle = (el, index) => {
    el.hide()
    el.eq(index).show()
  }
  toggle(el, active)

  $('.slidebutton').on('click', function () {
    this.id === 'prev' ? active -= 1 : active += 1;
    if (active > total) { active = 0; }
    if (active < 0) active = total
    toggle(el, active)
  });
  //////////////////////////////////////////////////////////////////////

  ////////////////Get In Toch Scroll Word///////////////////////////////

  gsap.registerPlugin(ScrollTrigger);
  if (window.matchMedia("(min-width:1201px)").matches) {
    gsap.to(".ourWord", { duration: 2, x: 200 });
    gsap.to(".blogWord", { duration: 2, x: -200 });
  }
  if (window.matchMedia("(max-width: 1200px)").matches) {
    gsap.to(".ourWord", { duration: 2, x: 100 });
    gsap.to(".blogWord", { duration: 2, x: -100 });
  } if (window.matchMedia("(max-width: 900px)").matches) {
    gsap.to(".ourWord", { duration: 2, x: 40 });
    gsap.to(".blogWord", { duration: 2, x: -40 });
  } if (window.matchMedia("(max-width: 750px)").matches) {
    gsap.to(".ourWord", { duration: 2, x: 40 });
    gsap.to(".blogWord", { duration: 2, x: -40 });
  }
  if (window.matchMedia("(max-width:500px)").matches) {
    gsap.to(".ourWord", { duration: 2, x: -25 });
    gsap.to(".blogWord", { duration: 2, x: 25 });
  }


  gsap.to(".scrolltext1", {
    scrollTrigger: {
      trigger: ".scrolltext1",
      scrub: "true",
      toggleActions: "restart pause reverse pause"
    }, scale: .5, duration: 3, opacity: .45,
  });

  ////////////////////////////////////////////////////////////////
});