$(document).ready(function() {
	$("#country").select2({
		allowClear : true,
		width: '100%'
	});

	moveContent();
	// Position Logo
	var headerHeight = $('header').height(), logoHeight = $('header img').height();
	var logoMargin = (headerHeight - logoHeight) / 2;
	$('header img').css('margin-top', logoMargin);
	// Change the size of the select dropdown arrow
	var selectHeight = $('select').height();
	$('select').css('background-size', selectHeight);
	// Initialize Slidr
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
// Move the degree description according to the background image size
var moveContent = function() {
	//Need to reset css here when the window is scaled back up past the media queries
	var height = $('#main-feature').css('height');
	var bgImgHt = parseInt(height);
	$('.degree-description').css('margin-top', bgImgHt + 30);
	$('.degree-name').css('position', 'absolute').css('top', bgImgHt - 25 - $('.degree-name').height());
};
// Run the move content function whenever the window resizes
$(window).resize(function() {
	moveContent();
});
