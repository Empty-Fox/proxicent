$(document).ready(function () {

  function addEventListenersEvents_main() {
    //////////////////menu scroll
    $(window).scroll(function () {
      var scroll = $(window).scrollTop();
      if (scroll >= 100) {
        $(".navbar.w-nav").addClass("menuColor");
      } else {
        $(".navbar.w-nav").removeClass("menuColor");
      }
    });

    ////////////////////////////////////
    var fullYear = new Date().getFullYear();
    $("#year").text(fullYear);

    ///////burger button///////////
    $('#headerCollapseButton').click(function () {
      $(this).toggleClass('open_burger');
      $(".nav-menu.w-nav-menu.nav-1").toggleClass('openHeader__full');
    });
    $('.nav.w-nav-link.link-1').click(function () {
      $('.nav-menu.w-nav-menu.nav-1').removeClass('openHeader__full');
      $('#headerCollapseButton').removeClass('open_burger');
    });
    $('.dropdown-content a').click(function () {
      $('.nav-menu.w-nav-menu.nav-1').removeClass('openHeader__full');
      $('#headerCollapseButton').removeClass('open_burger');
    });

    /////////////////dropdown language menu/////////
    $("#lang_selector").click(function () {
      $(".language-dropdown").toggleClass("open");
      $(".language-dropdown label").toggleClass("active");
    });
    $("ul.lang-list li").click(function () {
      $("ul.lang-list li").removeClass("selected");
      $(this).addClass("selected");
      if ($(this).hasClass('lang-en')) {
        $(".language-dropdown").find(".lang-flag").addClass("lang-en").removeClass("lang-es").removeClass("lang-ru");
        $("#lang_selected").html("<p>EN</p>");
      } else if ($(this).hasClass('lang-ru')) {
        $(".language-dropdown").find(".lang-flag").addClass("lang-ru").removeClass("lang-es").removeClass("lang-en");
        $("#lang_selected").html("<p>RU</p>")
      } else {
        $(".language-dropdown").find(".lang-flag").addClass("lang-es").removeClass("lang-en").removeClass("lang-ru");
        $("#lang_selected").html("<p>ES</p>")
      }
    });

    //////////////meet us links

    $("#aibcWorld").on("click", function () {
      window.open("https://aibc.world/events/uae/general-info/", "_blank");
    });
    $("#affiliategrandslam").on("click", function () {
      window.open("https://www.affiliategrandslam.com/", "_blank");
    });
    $("#affiliateworldconferences").on("click", function () {
      window.open("https://affiliateworldconferences.com/europe/", "_blank");
    });
    $("#ifxexpo").on("click", function () {
      window.open("https://ifxexpo.com/dubai/", "_blank");
    });

  }

  window.addEventListener('load', addEventListenersEvents_main);


});