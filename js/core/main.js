// TODO
// Input padding with javascript

$(document).ready(function() {
	moveContent();
	
	var headerHeight = $('header').height(), logoHeight = $('header img').height();
	var logoMargin = (headerHeight - logoHeight)/2;
	console.log(logoMargin);
	$('header img').css('margin-top', logoMargin);
});

$(window).resize(function() {
	moveContent();
});

var moveContent = function() {
	//Need to reset css here when the window is scaled back up past the media queries
	var height = $('#main-feature').css('height');
	var bgImgHt = parseInt(height);
	$('.degree-description').css('margin-top', bgImgHt+30);
	console.log('HEY' + $('.degree-name').height());
	$('.degree-name').css('position', 'absolute').css('top', bgImgHt-25-$('.degree-name').height());
};
