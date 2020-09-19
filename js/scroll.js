// scroll js function

let navbarHeight = document.getElementsByClassName('navbar')[0].clientHeight;

// JQuery scroll function

$(document).ready(function() {
// scroll to Top button enable/disable
    $(window).scroll(function() {
        if ($(this).scrollTop() > 250) {
            $('.scrollTop').fadeIn(500);
        } else {
            $('.scrollTop').fadeOut(500);
        }
    });
// scroll to top func
    $('.scrollTop').click(function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: 0}, 300);
    });
// scroll to #victims
    $('.victims-link').click(function(event) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: $('#victims')[0].offsetTop - navbarHeight}, 300);
    });
  // scroll to #welcome
    $('.arrow').click(function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $('#welcome')[0].offsetTop - navbarHeight}, 300);
    });
});