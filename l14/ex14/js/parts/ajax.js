function ajax() {
	
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

}

module.exports = ajax;