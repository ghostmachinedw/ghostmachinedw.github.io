$(document).ready(function() {
  $(window).scroll(function() {
	$('header').addClass('static')  
    if ($(window).scrollTop() < 500) {
      $('header').addClass('scrolled');
    } else {
      $('header').removeClass('scrolled');
    };
  });
});