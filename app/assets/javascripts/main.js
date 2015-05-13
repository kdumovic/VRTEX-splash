var textChanged = false;
var up_px_threshold = null;
var down_px_threshold = null;

$(window).load(function () {
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
    if (BrowserDetect.browser == "Firefox") { return; } // animations don't work correctly on FF because of top and scrollTop issues
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


/* Browser detection script */
var BrowserDetect = {
        init: function () {
            this.browser = this.searchString(this.dataBrowser) || "Other";
            this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || "Unknown";
        },
        searchString: function (data) {
            for (var i = 0; i < data.length; i++) {
                var dataString = data[i].string;
                this.versionSearchString = data[i].subString;

                if (dataString.indexOf(data[i].subString) !== -1) {
                    return data[i].identity;
                }
            }
        },
        searchVersion: function (dataString) {
            var index = dataString.indexOf(this.versionSearchString);
            if (index === -1) {
                return;
            }

            var rv = dataString.indexOf("rv:");
            if (this.versionSearchString === "Trident" && rv !== -1) {
                return parseFloat(dataString.substring(rv + 3));
            } else {
                return parseFloat(dataString.substring(index + this.versionSearchString.length + 1));
            }
        },

        dataBrowser: [
            {string: navigator.userAgent, subString: "Chrome", identity: "Chrome"},
            {string: navigator.userAgent, subString: "MSIE", identity: "Explorer"},
            {string: navigator.userAgent, subString: "Trident", identity: "Explorer"},
            {string: navigator.userAgent, subString: "Firefox", identity: "Firefox"},
            {string: navigator.userAgent, subString: "Safari", identity: "Safari"},
            {string: navigator.userAgent, subString: "Opera", identity: "Opera"}
        ]

    };
    
    BrowserDetect.init();
    //document.write("You are using <b>" + BrowserDetect.browser + "</b> with version <b>" + BrowserDetect.version + "</b>");