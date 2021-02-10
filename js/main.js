////////////carousel sweep adaptive
if ($(window).width() >1100) {
    new Splide('.splide', {
    type: 'loop',
    perMove: 1,
    lazyLoad: false,
    focus: 1,
    perPage: 4,
    interval: 5000,
    pauseOnHover: true,
    autoplay: true,
    gap: .1,
    classes: {           
      next: 'splide__arrow--next btn fancy-btn orange dark w-button',
    }    
  }).mount();
}
else
if ($(window).width() >800) {
new Splide('.splide', {
    type: 'loop',
    perMove: 1,
    lazyLoad: false,
    focus: 1,
    perPage: 3,
    interval: 5000,
    pauseOnHover: true,
    autoplay: true,
    gap: .1,
    classes: {           
      next: 'splide__arrow--next btn fancy-btn orange dark w-button',
    }    
  }).mount();
}

else
if ($(window).width() >500) {
new Splide('.splide', {
    type: 'loop',
    perMove: 0,
    lazyLoad: false,
    focus: 0,
    perPage: 2,
    interval: 5000,
    pauseOnHover: true,
    autoplay: true,
    gap: .1,
    classes: {           
      next: 'splide__arrow--next btn fancy-btn orange dark w-button',
    }    
  }).mount();
}

else
if ($(window).width() >0) {
new Splide('.splide', {
    type: 'loop',
    perMove: 0,
    lazyLoad: false,
    focus: 0,
    perPage: 1,
    interval: 5000,
    pauseOnHover: true,
    autoplay: true,
    gap: .1,
    classes: {           
      next: 'splide__arrow--next btn fancy-btn orange dark w-button',
    }    
  }).mount();
}


//////////////////////////////////////////////////////////////////////////////////////////////
$(window).scroll(function () {
  var winHeight = $(this).height();
  var scrollTop = $(this).scrollTop();

  $("section").each(function (index) {
      var elemHeight = $(this).height();
      var elementTop = $(this).position().top;

      if (elementTop < scrollTop + winHeight && scrollTop < elementTop + elemHeight) {
          $(".nav-menu.w-nav-menu.nav-1 > a").eq(index).addClass("activeMenu");
          $(".nav-menu.w-nav-menu.nav-1 > a").eq(index - 1).removeClass("activeMenu");
          $(".side-nav > a").eq(index - 1).removeClass("w--current");
          $(".side-nav > a").eq(index).addClass("w--current");

      }
      else {
          $(".side-nav > a").eq(index).removeClass("w--current");
          $(".nav-menu.w-nav-menu.nav-1 > a").eq(index).removeClass("activeMenu");
      }
  })


});

// .......................Поява блоку при загрузці..............
$(window).ready(function(){
  $(".container").fadeIn(1000);
});
//  ....................меняем цвет фона при прокрутке..............
$(document).ready(function () {
  var scroll_pos = 0;
  $(window).scroll(function () {
      scroll_pos = $(this).scrollTop();
      if (scroll_pos > 5500){
          $(".h2ContactUs").css('transform', 'scale(2)');
          $(".h2ContactUs").css('opacity', '1');  
      }
      else
      if (scroll_pos > 5300) {
          $("#contact-us").css('background-color', '#353535');
          $(".h2ContactUs").css('transform', 'scale(1)');
          $(".h2ContactUs").css('opacity', '1');  
      } 
      else
      
      if (scroll_pos > 4700){
          
          $(".h2Where").css('transform', 'scale(2)');
          $(".h2Where").css('opacity', '1');  
      }
       else
      if (scroll_pos > 4650){
          $(".h2Where").css('transform', 'scale(1)');
          $(".h2Where").css('opacity', '1');    
      }
      else
      
      if (scroll_pos > 2550){
          $(".h2Blog").css('transform', 'scale(2)');
          $(".h2Blog").css('opacity', '1'); 
                
      }
      else
     
      if (scroll_pos > 1200) {
          $("#TopOffers").css('background-color', '#021836fa');
          $("#contact-us").css('background-color', '#021836fa');
          $(".h2Blog").css('transform', 'scale(1)');
          $(".h2Blog").css('opacity', '1');
      } else
      
      if (scroll_pos > 1150){
          $(".h2TopOffers").css('transform', 'scale(2)');
          $(".h2TopOffers").css('opacity', '1');
      }
      else
      if (scroll_pos > 600) {
          $("#TopOffers").css('background-color', '#353535');
          $(".h2TopOffers").css('transform', 'scale(1)');
          $(".h2TopOffers").css('opacity', '1');
         
      } else
      if (scroll_pos > 470){
          $(".h2AboutUs").css('transform', 'scale(2)');
          $(".h2AboutUs").css('opacity', '1');
      }else 
      if (scroll_pos > 400) {
          $("#AboutUs").css('background-color', '#353535');           
         
      }       
      else
      if (scroll_pos >200) {
          $("#AboutUs").css('background-color', '#022350fa');
          $(".h2AboutUs").css('transform', 'scale(1)');
          $(".h2AboutUs").css('opacity', '1');
          $(".about").css('transform', 'translateX(-10%)')        ;
          $(".us").css('transform', 'translateX(50%)')  
          
      }
      
      else if (scroll_pos >100){
          $("#AboutUs").css('background-color', '#021836fa');
          $(".about").css('transform', 'translateX(10%)')  
          $(".us").css('transform', 'translateX(10%)')   
       
      }
      else if (scroll_pos >10){
          $(".heading").css('transform', 'scale(2)');
          $(".heading").css('opacity', '0.1');
       
      }            
      else {
          $(".heading").css('transform', 'scale(1)');
          $(".heading").css('opacity', '1');
       
      }                                                   
  
  });
});



$( ".section-offers-row.swiper-slide" )
.mouseenter(function() {   
  $( this ).css('transform', 'scale(1.1)'); 
})
.mouseleave(function() {
  $( this ).css('transform', 'scale(1)'); 
});


// $( ".section-offers-row.swiper-slide" ).hover(function() {
//   $( this ).css('transform', 'scale(1.1)'); 
// });

/////////////////////////////backgroundMenu onScroll

$(window).scroll(function () {
  var height = $(window).scrollTop();
  if (height > 100) {
    $('.navbar').addClass('menuColor');     
  
  }
  else {
    $('.navbar').removeClass('menuColor')
  }
});

/////////////////////////menu on scroll
$(window).scroll(function () {
  var height = $(window).scrollTop();
  if (height > 100) {
    $('.navbar').addClass('menuColor');     
  
  }
  else {
    $('.navbar').removeClass('menuColor')
  }
});