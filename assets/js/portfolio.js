// global. currently active menu item 
var current_item = 0;

// few settings
var section_hide_time = 1000;
var section_show_time = 1000;

// jQuery stuff
jQuery(document).ready(function($) {

  // Switch section
  $("a", '.mainmenu').click(function() 
  {
    if( ! $(this).hasClass('active') ) { 
      current_item = this;
      // close all visible divs with the class of .section
      $('.section:visible').fadeOut( section_hide_time, function() { 
        $('a', '.mainmenu').removeClass( 'active' );  
        $(current_item).addClass( 'active' );
        var new_section = $( $(current_item).attr('href') );
        new_section.fadeIn( section_show_time );
      } );
    }
    return false;
  }); 

	// Home Slide
  var about_me = ["Web Developer", "Javascript Master", "Video Gamer", "Full Stack Engineer", "Fitness Enthusiast", "Entreprenuer", "Entertainment Maker", "Innovator"];
  var number = 0;
  setInterval(function(){
    if (number == about_me.length-1) {
      number = 0;
    } else {
      number += 1
    }
    $("#about_me").text(about_me[number]);
  }, 1000);

  // Airplane Flying
  setInterval(function(){
    animateAirplane();
  }, 5000);
  // airplane animation function
  function animateAirplane() {
    $("#airplane").css({left: '100%', transition: '3s ease-in'});
    setTimeout(function(){
      $("#airplane").css({left: '-263px', transition: 'none'});
    }, 3000);
  }
  // initial animation
  animateAirplane();

});