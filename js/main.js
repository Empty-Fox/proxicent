////////////carousel sweep adaptive
// if ($(window).width() >1100) {
//     new Splide('.splide', {
//     type: 'loop',
//     perMove: 1,
//     lazyLoad: false,
//     focus: 1,
//     perPage: 4,
//     interval: 5000,
//     pauseOnHover: true,
//     autoplay: true,
//     gap: .1,
//     classes: {           
//       next: 'splide__arrow--next splidebtn',
//     }    
//   }).mount();
// }
// else
// if ($(window).width() >800) {
// new Splide('.splide', {
//     type: 'loop',
//     perMove: 1,
//     lazyLoad: false,
//     focus: 1,
//     perPage: 3,
//     interval: 5000,
//     pauseOnHover: true,
//     autoplay: true,
//     gap: .1,
//     classes: {           
//       next: 'splide__arrow--next btn fancy-btn orange dark w-button',
//     }    
//   }).mount();
// }

// else
// if ($(window).width() >500) {
// new Splide('.splide', {
//     type: 'loop',
//     perMove: 0,
//     lazyLoad: false,
//     focus: 0,
//     perPage: 2,
//     interval: 5000,
//     pauseOnHover: true,
//     autoplay: true,
//     gap: .1,
//     classes: {           
//       next: 'splide__arrow--next btn fancy-btn orange dark w-button',
//     }    
//   }).mount();
// }

// else
// if ($(window).width() >0) {
// new Splide('.splide', {
//     type: 'loop',
//     perMove: 0,
//     lazyLoad: false,
//     focus: 0,
//     perPage: 1,
//     interval: 5000,
//     pauseOnHover: true,
//     autoplay: true,
//     gap: .1,
//     classes: {           
//       next: 'splide__arrow--next btn fancy-btn orange dark w-button',
//     }    
//   }).mount();
// }




// .......................Поява блоку при загрузці..............
$(window).ready(function(){
  $(".container").fadeIn(1000);
});
//  ....................меняем цвет фона при прокрутке..............
$(document).ready(function () {
  var scroll_pos = 0;
  $(window).scroll(function () {
      scroll_pos = $(this).scrollTop();
  
      if (scroll_pos >10){
          $(".heading").css('transform', 'scale(2)');
          $(".heading").css('opacity', '0.1');
       
      }            
      else {
          $(".heading").css('transform', 'scale(1)');
          $(".heading").css('opacity', '1');
       
      }                                                   
  
  });
});


//////////////////menu scroll
$(window).scroll(function() {    
  var scroll = $(window).scrollTop();

  if (scroll >= 100) {
      $(".navbar.w-nav").addClass("menuColor");
      console.log('navbar')
  } else {
      $(".navbar.w-nav").removeClass("menuColor");
  }
});

      ////////////////////////////////////
      document.getElementById("year").innerHTML = new Date().getFullYear();