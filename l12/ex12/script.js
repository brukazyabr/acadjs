$(document).ready(function() {

	$('.main_btn').on('click', function() {
		$('.overlay').fadeToggle('slow');
		$('.modal').slideDown('slow');
	});

	$('.main_nav#sheldure').on('click', function() {
		$('.overlay').fadeToggle('slow');
		$('.modal').slideDown('slow');	
	});

	$('.close').on('click', function() {
		$('.overlay').fadeToggle('slow');
		$('.modal').slideUp('slow');
	});

});