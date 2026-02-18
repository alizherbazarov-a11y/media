
(() => {
	const target = new Date('February 20, 2026 14:45:45');

	const countdownEl = document.getElementById('countdown');
	const targetEl = document.getElementById('target');
	const statusEl = document.getElementById('status');

	if (!countdownEl) return; // nothing to do

	targetEl.textContent = `Target: ${target.toLocaleString()}`;

	function update() {
		const now = new Date();
		let diff = target.getTime() - now.getTime();

		if (diff <= 0) {
			countdownEl.textContent = '0 day 0 hours 0 min 0 sec';
			statusEl.textContent = 'Target date reached';
			return false; // stop
		}

		const sec = 1000;
		const minute = sec * 60;
		const hour = minute * 60;
		const day = hour * 24;

		const days = Math.floor(diff / day);
		diff -= days * day;

		const hours = Math.floor(diff / hour);
		diff -= hours * hour;

		const minutes = Math.floor(diff / minute);
		diff -= minutes * minute;

		const seconds = Math.floor(diff / sec);

		// Format like: 2 day 2 hours 30 min 15 sec
		const dayStr = `${days} ${days === 1 ? 'day' : 'days'}`;
		const hourStr = `${hours} ${hours === 1 ? 'hour' : 'hours'}`;
		const minStr = `${minutes} min`;
		const secStr = `${seconds} sec`;

		countdownEl.textContent = `${dayStr} ${hourStr} ${minStr} ${secStr}`;
		statusEl.textContent = '';

		return true;
	}

	// initial update
	if (update()) {
		// update every second
		const timerId = setInterval(() => {
			const running = update();
			if (!running) clearInterval(timerId);
		}, 1000);
	}
})();
