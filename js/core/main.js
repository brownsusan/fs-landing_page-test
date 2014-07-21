// TODO
// Input padding with javascript

$(document).ready(function() {
	moveContent();
});

$(window).resize(function() {
	moveContent();
});

var moveContent = function() {
	//Need to reset css here when the window is scaled back up past the media queries
	var height = $('#main-feature').css('height');
	var bgImgHt = parseInt(height);
	$('.degree-description').css('margin-top', bgImgHt+30);
	console.log(bgImgHt);
	$('.degree-name').css('position', 'absolute').css('top', bgImgHt-95);
};
