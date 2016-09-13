//
// Portfolio Masonry
//
$( function() {
    $('#filters').on( 'click', 'a', function(e) {
    e.preventDefault();
    $('.isotope div').hide();
    var filterValue = $(this).attr('data-filter');
    $('.isotope ' + filterValue).fadeIn( "slow", function() {});
  });
  $('.navbar-header button').click(function(){
      if ($('.navbarCloud').hasClass('menuOpen')) {
        $('.navbarCloud').removeClass('menuOpen');
      }
      else {
        $('.navbarCloud').addClass('menuOpen');
      }
  });
  lightbox.option({
    'positionFromTop': 100,
    'wrapAround': true
  })
});
//
// Rotate Gears
//
$(window).scroll(function() {
  if($(window).width() >= 1025){
    var theta = ($(window).scrollTop() / 95)/2;
    var delta = ($(window).scrollTop() / 65)/2;
    $('.gearSM').css({ transform: 'rotate(' + delta + 'rad)' });
    $('.gearLG').css({ transform: 'rotate(-' + theta + 'rad)' });
  }
});
//
// Menu Scroll
//
function scrollToAnchor(aid){
    var aTag = $("div."+ aid +"");
    $('html,body').animate({scrollTop: (aTag.offset().top - 100)},'slow');
	 $('#bs-example-navbar-collapse-1').collapse('hide'); // in mobile version, click nav, hide menu
	  $('.navbarCloud').removeClass('menuOpen');
}

$(".home1").click(function(e) {
   scrollToAnchor('home');
});
$(".about1").click(function(e) {
   scrollToAnchor('aboutUs');
});
$(".services1").click(function(e) {
   scrollToAnchor('services');
});
$(".process1").click(function(e) {
   scrollToAnchor('process');
});
$(".team1").click(function(e) {
   scrollToAnchor('team');
});
$(".portfolio1").click(function(e) {
   scrollToAnchor('portfolio');
});
$(".contact1").click(function(e) {
   scrollToAnchor('footer');
});
//
// Display Bios on hover.
//
$( function() {
$(".headshot").hover(function() {
  if (!$(this).hasClass('active')) {
    currentClass = $(this).data('name');
    $(".teamInfo div").hide();
    $('.headshot').removeClass('active');
    $(this).addClass('active');
    $("."+currentClass).fadeIn( 500, function() {});
  }
  });
});
//
// Change menu on scroll
//
function init() {
    window.addEventListener('scroll', function(e){
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 300
        if (distanceY > shrinkOn) {
        $('.menuLogo').addClass('grow');
        } else {
            if ($('.menuLogo').hasClass('grow')) {
                $('.menuLogo').removeClass('grow');
            }
        }
    });
}
window.onload = init();
//
// Our Little Secrect
//
var konami_keys = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
var konami_index = 0;
$(document).keydown(function(e){
    if(e.keyCode === konami_keys[konami_index++]){
        if(konami_index === konami_keys.length){
          $('#large-header').addClass('heyheyhey');
          var vid = document.getElementById("audiotag1");
          vid.play();
        var fadePoint = vid.duration - 2; 

        var fadeAudio = setInterval(function () {

            // Only fade if past the fade out point or not at zero already
            if ((vid.currentTime >= fadePoint) && (vid.volume != 0.0)) {
                vid.volume -= 0.1;
              if (vid.volume < 0.1) {
                  clearInterval(fadeAudio);
                  $('#large-header').removeClass('heyheyhey');
              }
            }
            // When volume at zero stop all the intervalling

        }, 200);  
        }
    }else{
        konami_index = 0;
    }
});
