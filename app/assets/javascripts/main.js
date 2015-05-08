var textChanged = false;
var up_px_threshold = null;
var down_px_threshold = null;

$(window).load(function () {
	$('#i-no-dot-img').hide();
	$('#i-dot-img').hide();
	$('#rocket-img').css('top', ($('#emblem-img').height() + $('#emblem-img').position().top - 338 - $('body').scrollTop()));
	$('#moon-img').css('top', ($('#emblem-img').height() + $('#emblem-img').position().top - 338 - $('body').scrollTop()));
	$('input[type="email"]').on('keyup', function () {
		var key = event.keyCode || event.charCode;
		if (key === 8 || key === 46) {
			$('input[type="submit"]').css('border-color', 'rgba(95,95,95,0.75)');
		} else {
			$('input[type="submit"]').css('border-color', 'red');
		}
    });
    up_px_threshold = window.innerHeight * 0.35; //0.31
	down_px_threshold = window.innerHeight * 0.30; //0.25
});

$(window).resize(function () {
	$('#rocket-img').css('top', ($('#emblem-img').height() + $('#emblem-img').position().top - 338 - $('body').scrollTop()));
	$('#moon-img').css('top', ($('#emblem-img').height() + $('#emblem-img').position().top - 338 - $('body').scrollTop()));
	up_px_threshold = window.innerHeight * 0.35;
	down_px_threshold = window.innerHeight * 0.30;
});

// window.setInterval(function() {
// 	//console.log($('#moon-img').position());
// 	//console.log( $('#emblem-img').position().top );
// }, 2000);

$(window).on('scroll', function () {
    $('#moon-img').css('top', ($('#emblem-img').height() + $('#emblem-img').position().top - 338 - $('body').scrollTop()));
    $('#rocket-img').css('top', ($('#emblem-img').height() + $('#emblem-img').position().top - 338 - $('body').scrollTop()));
    if ($('#moon-img').position().top < down_px_threshold) {
        if (!textChanged) {
            $('#team-img').animate({
			    //opacity: 1.0,
			    left: "-=14"//,
			    //height: "toggle"
		    }, 1000, function () {
		  		// Animation complete.
		    });
		    $('#grav-img').animate({
			    left: "+=14"//,
		    }, 1000, function () {
		  		// Animation complete.
		    });
		    $('#i-dot-img').fadeIn('fast');
		    $('#i-dot-img').animate({
			    bottom: "13.5%"//,
		    }, 500, function () {
		  		// Animation complete.
		    });
            $('#i-no-dot-img').fadeIn('slow', function () {
		  		// Animation complete.
		    });
            textChanged = true;
        }
    } else if ($('#moon-img').position().top > up_px_threshold) {
        if (textChanged) {
            $('#team-img').animate({
			    //opacity: 1.0,
			    left: "+=14"//,
			    //height: "toggle"
		    }, 1000, function () {
		  		// Animation complete.
		    });
		    $('#grav-img').animate({
			    left: "-=14"//,
		    }, 1000, function () {
		  		// Animation complete.
		    });
		    $('#i-dot-img').fadeOut('fast');
		    $('#i-dot-img').animate({
			    bottom: "15%"//,
		    }, 500, function () {
		  		// Animation complete.
		    });
            $('#i-no-dot-img').fadeOut('fast', function () {
		  		// Animation complete.
		    });
            textChanged = false;
        }
    }
});
