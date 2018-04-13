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

	hideTabContent (1)

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
		};
	});

	//Timer
	let deadLine = '2018-03-20';

	function getTimeRemainig(endTime) {
		let t = Date.parse(endTime) - Date.parse(new Date()),
			seconds = Math.floor((t/1000)&60),
			minutes = Math.floor((t/1000/60)&60),
			hours = Math.floor(t/(1000*3600));

		return {
			'total': t,
			'seconds': seconds,
			'minutes': minutes,
			'hours': hours
		};
	};

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
			};

		};

		updateClock();
		let timeInterval = setInterval(updateClock, 1000);
	};

	setClock('timer', deadLine);


});





























