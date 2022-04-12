$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll >= 500) {
        $(".navbar").addClass("navbar-menu");
    } else {
        $(".navbar").removeClass("navbar-menu");
    }
});