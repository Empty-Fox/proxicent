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