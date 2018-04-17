window.addEventListener('DOMContentLoaded', () => {

	let tab = document.getElementsByClassName('info-header-tab'),
		tabContent = document.getElementsByClassName('info-tabcontent'),
		info = document.getElementsByClassName('info-header')[0];

	function hideTabContent (a) {
		for (let i = a; i < tabContent.length; i++) {
			tabContent[i].classList.remove('show');
			tabContent[i].classList.add('hide');
		}
	}

	hideTabContent (1);

	function showTabContent (b) {
		if (tabContent[b].classList.contains('hide')) {
			hideTabContent(0);
			tabContent[b].classList.remove('hide');
			tabContent[b].classList.add('show');
		}
	}

	info.addEventListener('click', (event) => {
		let target = event.target;
		if (target.className == 'info-header-tab') {
			for (let i = 0; i < tab.length; i++) {
				if (target == tab[i]) {
					showTabContent (i);
					break;
				}
			}
		}
	});

	//Timer
	let deadLine = '2018-04-18';

	function getTimeRemainig(endTime) {
		let t, seconds, minutes, hours;
		if (Date.parse(endTime) > Date.parse(new Date())) {
			t = Date.parse(endTime) - Date.parse(new Date());
			seconds = Math.floor((t/1000)%60);		
			minutes = Math.floor((t/1000/60)%60);
			hours = Math.floor(t/(1000*3600));
		} else {
			seconds = "00";
			minutes = "00";
			hours = "00";
		}
		

		return {
			'total': t,
			'seconds': seconds,
			'minutes': minutes,
			'hours': hours
		};
	}

	function setClock(id, endTime) {
		let timer = document.getElementById(id),
			hours = timer.querySelector('.hours'),
			minutes = timer.querySelector('.minutes'),
			seconds = timer.querySelector('.seconds');

		function updateClock() {
			let t = getTimeRemainig(endTime);
			hours.innerHTML = t.hours;
			minutes.innerHTML = t.minutes;
			seconds.innerHTML = t.seconds;

			if (t.total <= 0) {
				clearInterval(timeInterval);
			}

		}

		updateClock();
		let timeInterval = setInterval(updateClock, 1000);
	}

	setClock('timer', deadLine);

	let more = document.querySelector('.more'),
		overlay = document.querySelector('.overlay'),
		close = document.querySelector('.popup-close');

	more.addEventListener('click', function () {
		this.classList.add('more-splash');
		overlay.style.display = 'block';
		document.body.style.overflow = 'hidden';
	});

	close.addEventListener('click', function() {
		overlay.style.display = 'none';
		more.classList.remove('more-splash');
		document.body.style.overflow = '';
	});

	let message = new Object();
	message.loading = "Загрузка...";
	message.success = "Спасибо! Скоро мы с Вами свяжемся!";
	message.failure = "Что-то пошло не так...";

	let mainForm = document.getElementsByClassName('main-form')[0],
		mainInput = mainForm.getElementsByTagName('input'),
		contactForm = document.getElementsByClassName('contact-form')[0],
		contactInput = contactForm.getElementsByTagName('input');
		statusMessage = document.createElement('div');
		statusMessage.classList.add('status');

	mainForm.addEventListener('submit', function(event) {
		event.preventDefault();
		mainForm.appendChild(statusMessage);

		let request = new XMLHttpRequest();
		request.open("POST", 'server.php')

		request.setRequestHeader("Content-Type", 'application/x-www-form-urlencoded');

		let formData = new FormData(mainForm);

		request.send(formData);

		request.onreadystatechange = function() {
			if (request.readyState < 4) {
				statusMessage.innerHTML = message.loading;
			} else if (request.readyState === 4) {
				if (request.status == 200 && request.status < 300) {
					statusMessage.innerHTML = message.success;
				} else {
					statusMessage.innerHTML = message.failure;
				}
			}
		}

		for (let i = 0; i < mainInput.length; i++) {
			mainInput[i].value = "";
		}
	});

	contactForm.addEventListener('submit', function(event) {
		event.preventDefault();
		contactForm.appendChild(statusMessage);

		let request = new XMLHttpRequest();
		request.open("POST", 'server.php')

		request.setRequestHeader("Content-Type", 'application/x-www-form-urlencoded');

		let formData = new FormData(contactForm);

		request.send(formData);

		request.onreadystatechange = function() {
			if (request.readyState < 4) {
				statusMessage.innerHTML = message.loading;
			} else if (request.readyState === 4) {
				if (request.status == 200 && request.status < 300) {
					statusMessage.innerHTML = message.success;
				} else {
					statusMessage.innerHTML = message.failure;
				}
			}
		}

		for (let i = 0; i < contactInput.length; i++) {
			contactInput[i].value = "";
		}
	});

	let slideIndex = 1,
		slides = document.getElementsByClassName('slider-item'),
		prev = document.querySelector('.prev'),
		next = document.querySelector('.next'),
		dotsWrap = document.querySelector('.slider-dots'),
		dots = document.getElementsByClassName('dot');

	showSlides(slideIndex);

	function showSlides(n) {

		if (n > slides.length) {
			slideIndex = 1;
		};

		if (n < 1) {
			slideIndex = slides.length;
		};

		for (let i = 0; i < slides.length; i++) {
			slides[i].style.display = 'none';
		};

		for (let i = 0; i < dots.length; i++) {
			dots[i].classList.remove('dot-active');
		};

		slides[slideIndex - 1].style.display = 'block';
		dots[slideIndex - 1].classList.add('dot-active');
	}

	function plusSliders(n) {
		showSlides(slideIndex += n);
	};

	prev.addEventListener('click', function () {
		plusSliders(-1);
	});

	next.addEventListener('click', function () {
		plusSliders(1);
	});

	function currentSlide(n) {
		showSlides(slideIndex = n);
	};

	dotsWrap.addEventListener('click', function(event) {
		for (let i = 0; i < dots.length + 1; i++) {
			if (event.target.classList.contains('dot') && event.target == dots[i-1]) {
				currentSlide(i);
			}
		}
	});

	let person = document.getElementsByClassName('counter-block-input')[0],
 		restDays = document.getElementsByClassName('counter-block-input')[1],
 		place = document.getElementById('select'),
 		totalValue = document.getElementById('total'),
 		personSum = 0, daysSum = 0, total = 0;

 	totalValue.innerHTML = 0;

 	person.addEventListener('change', function() {
 		personSum = +this.value;
 		total = (daysSum + personSum)*4000;
	 	if (restDays.value == '') {
	 		totalValue.innerHTML = 0;
	 	} else {
	 		totalValue.innerHTML = total;
	 	}
 	});

 	restDays.addEventListener('change', function() {
 		daysSum = +this.value;
 		total = (daysSum + personSum)*4000;
	 	if (person.value == '') {
	 		totalValue.innerHTML= 0;
	 	} else {
	 		totalValue.innerHTML = total;
	 	}		
 	});

 	place.addEventListener('change', function () {
 		if (restDays.value == '' || person.value == '') {
 			totalValue.innerHTML = 0;
 		} else {
 			let a = total;
 			totalValue.innerHTML = a * this.options[this.selectedIndex].value;
 		}
 	});
 		//module

});





























