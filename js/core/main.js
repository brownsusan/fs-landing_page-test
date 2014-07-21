// TODO
// Input padding with javascript

$(document).ready(function() {
	moveDescription();

});

$(window).resize(function() {
	moveDescription();
});


var moveDescription = function() {
	//Need to reset css here when the window is scaled back up past the media queries
	var bgImgHt = $('#main-feature').css('height');
	$('.degree-description').css('margin-top', bgImgHt);

};
