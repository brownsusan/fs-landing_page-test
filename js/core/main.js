// TODO
// Input padding with javascript

$(document).ready(function() {
	moveContent();

	var headerHeight = $('header').height(), logoHeight = $('header img').height();
	var logoMargin = (headerHeight - logoHeight) / 2;
	$('header img').css('margin-top', logoMargin);

	var selectHeight = $('select').height();
	$('select').css('background-size', selectHeight);

	slidr.create('slidr-ul', {
		breadcrumbs : true,
		controls : 'border',
		direction : 'horizontal',
		fade : false,
		keyboard : true,
		overflow : true,
		pause : false,
		timing : {
			'cube' : '0.5s ease-in'
		},
		touch : true,
		transition : 'cube'
	}).start();
});

$(window).resize(function() {
	moveContent();
});

var moveContent = function() {
	//Need to reset css here when the window is scaled back up past the media queries
	var height = $('#main-feature').css('height');
	var bgImgHt = parseInt(height);
	$('.degree-description').css('margin-top', bgImgHt + 30);
	$('.degree-name').css('position', 'absolute').css('top', bgImgHt - 25 - $('.degree-name').height());
};
