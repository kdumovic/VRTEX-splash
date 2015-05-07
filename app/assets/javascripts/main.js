$(document).ready(function(){
	$('#rocket-img').css('top', ($('#emblem-img').height() + 92 - $('body').scrollTop()));
});
$(window).on('scroll', function(){
	console.log('moon' + $('#moon-img').height());
	console.log('rocket' + $('#rocket-img').height());
 	$('#moon-img').css('top', ($('#emblem-img').height() + 92 - $('body').scrollTop()));
 	$('#rocket-img').css('top', ($('#emblem-img').height() + 92 - $('body').scrollTop()));
}); 