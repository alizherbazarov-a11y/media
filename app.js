
(() => {
	const target = new Date('February 20, 2026 14:45:45');

	const countdownEl = document.getElementById('countdown');
	const statusEl = document.getElementById('status');

	if (!countdownEl) return;

	const SECOND = 1000;
	const MINUTE = SECOND * 60;
	const HOUR = MINUTE * 60;
	const DAY = HOUR * 24;

	function update() {
		const now = new Date();
		let diff = target.getTime() - now.getTime();

		if (diff <= 0) {
			countdownEl.textContent = '0 day 0 hours 0 min 0 sec';
			if (statusEl) statusEl.textContent = 'Target date reached';
			return false;
		}

		const days = Math.floor(diff / DAY);
		diff -= days * DAY;

		const hours = Math.floor(diff / HOUR);
		diff -= hours * HOUR;

		const minutes = Math.floor(diff / MINUTE);
		diff -= minutes * MINUTE;

		const seconds = Math.floor(diff / SECOND);

		const dayStr = `${days} ${days === 1 ? 'day' : 'days'}`;
		const hourStr = `${hours} ${hours === 1 ? 'hour' : 'hours'}`;
		const minStr = `${minutes} min`;
		const secStr = `${seconds} sec`;

		countdownEl.textContent =
			`${dayStr} ${hourStr} ${minStr} ${secStr}`;

		if (statusEl) statusEl.textContent = '';

		return true;
	}

	if (update()) {
		const timerId = setInterval(() => {
			if (!update()) clearInterval(timerId);
		}, 1000);
	}
})();
