$(document).ready(function(){
  $(window).bind('scroll', function() {
    var distance = 50;
    if ($(window).scrollTop() > distance) {
      $('header').addClass('scrolled');
    }
    else {
      $('header').removeClass('scrolled');
    }
  });
});