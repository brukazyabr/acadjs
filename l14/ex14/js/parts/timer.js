function timer() {
	
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

}
module.exports = timer;