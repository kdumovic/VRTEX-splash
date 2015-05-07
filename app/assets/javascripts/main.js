textChanged = false;
$(window).load(function(){
	$('#i-no-dot-img').hide();
	$('#i-dot-img').hide();
	$('#rocket-img').css('top', ($('#emblem-img').height() + 92 - $('body').scrollTop()));
});
window.setInterval(function() {
	//console.log($('#moon-img').position());
}, 2000);
$(window).on('scroll', function(){
 	$('#moon-img').css('top', ($('#emblem-img').height() + 92 - $('body').scrollTop()));
 	$('#rocket-img').css('top', ($('#emblem-img').height() + 92 - $('body').scrollTop()));
 	if ( $('#moon-img').position().top < 251 ) {
 		console.log('TRIGGER!');
 		if (!textChanged) {
 			$('#team-img').animate({
			    //opacity: 1.0,
			    left: "-=10"//,
			    //height: "toggle"
		    }, 1000, function() {
		  		// Animation complete.
		    });
		    $('#grav-img').animate({
			    left: "+=10"//,
		    }, 1000, function() {
		  		// Animation complete.
		    });
		    $('#i-dot-img').fadeIn('fast');
		    $('#i-dot-img').animate({
			    paddingTop: "30"//,
		    }, 500, function() {
		  		// Animation complete.
		    });
		   	$('#i-no-dot-img').fadeIn('slow', function() {
		  		// Animation complete.
		    });
 			textChanged = true;
 		}
 	} else if ( $('#moon-img').position().top > 277 ) {		
 		if (textChanged) {
 			 $('#team-img').animate({
			    //opacity: 1.0,
			    left: "+=10"//,
			    //height: "toggle"
		    }, 1000, function() {
		  		// Animation complete.
		    });
		    $('#grav-img').animate({
			    left: "-=10"//,
		    }, 1000, function() {
		  		// Animation complete.
		    });
		    $('#i-dot-img').fadeOut('fast');
		    $('#i-dot-img').animate({
			    paddingTop: "16"//,
		    }, 500, function() {
		  		// Animation complete.
		    });
		   	$('#i-no-dot-img').fadeOut('slow', function() {
		  		// Animation complete.
		    });
 			textChanged = false;
 		}
 	}
}); 