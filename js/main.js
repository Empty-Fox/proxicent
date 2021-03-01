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
    autoplay: false,
    gap: .1,
    classes: {           
      next: 'splide__arrow--next splidebtn',
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

  if (scroll >= 200) {
      $(".navbar.w-nav").addClass("menuColor");
  } else {
      $(".navbar.w-nav").removeClass("menuColor");
  }
});

      ////////////////////////////////////
      document.getElementById("year").innerHTML = new Date().getFullYear();