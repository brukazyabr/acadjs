window.addEventListener('DOMContentLoaded', () => {

	let popup_btn = document.getElementById('popup-btn'),
		overlay = document.querySelector('.overlay');

	let custom = document.querySelector('.custom'),
		main = document.querySelector('.main'),
		custom_info = document.querySelector('.custom-info'),
		ready_btn = document.getElementById('ready'),
		custom_char = document.querySelector('.custom-char'),
		custom_style = document.querySelector('.custom-style');

	popup_btn.addEventListener('click', function() {

		overlay.style.display = 'none';
		main.style.display = 'none';
		custom.style.display = 'flex';
		custom_info.style.display = 'block';
		custom_char.style.display = 'block';
		custom_style.style.display = 'block';	

	});

	ready_btn.addEventListener('click', function() {



	});





})