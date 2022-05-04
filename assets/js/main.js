// Change menu background
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll >= 500) {
        $(".navbar").addClass("navbar-menu");
    } else {
        $(".navbar").removeClass("navbar-menu");
    }
});

// Loader
$(window).on("load", function () {
    $(".loader").fadeOut("slow");
});

// Count up number
$(document).ready(function(){
    $('.counter').counterUp({
      delay: 5,
      time: 2000
    });
});