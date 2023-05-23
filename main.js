const startBtn = document.querySelector('.start');
const pauseBtn = document.querySelector('.pause');
const stopBtn = document.querySelector('.stop');
const resetBtn = document.querySelector('.reset');
const historyBtn = document.querySelector('.history');
const stopwatch = document.querySelector('.stopwatch');
const time = document.querySelector('.time');
const results = document.querySelector('.results');

const infoBtn = document.querySelector('.fa-question');
const modalShadow = document.querySelector('.modal-shadow');
const closeModalbtn = document.querySelector('.close');

let countTime;
let minutes = 0;
let seconds = 0;
let resultsArr = [];

const colorBtn = document.querySelector('.fa-paint-roller');
const colorMenu = document.querySelector('.colors');
const colorFirst = document.querySelector('.first');
const colorSecond = document.querySelector('.second');
const colorThird = document.querySelector('.third');
const colorFourth = document.querySelector('.fourth');
const colorFifth = document.querySelector('.fifth');
let root = document.documentElement;

const handleStart = () => {
	clearInterval(countTime);
	//thanks to this the next interval doesn't start running again and rush the previous one
	countTime = setInterval(() => {
		if (seconds < 9) {
			seconds++;
			stopwatch.textContent = `${minutes}:0${seconds}`;
		} else if (seconds >= 9 && seconds < 59) {
			seconds++;
			stopwatch.textContent = `${minutes}:${seconds}`;
		} else {
			minutes++;
			seconds = 0;
			stopwatch.textContent = `${minutes}:00`;
		}
	}, 10);
};

const handlePause = () => {
	clearInterval(countTime);
};

const handleStop = () => {
	time.innerHTML = `Last result: ${stopwatch.textContent}`;

	if (stopwatch.textContent !== '0:00') {
		time.style.visibility = 'visible';
		resultsArr.push(stopwatch.textContent);
	}

	clearStuff();
};

const handleReset = () => {
	time.style.visibility = 'hidden';
	resultsArr = [];
	clearStuff();
};

const clearStuff = () => {
	clearInterval(countTime);
	stopwatch.textContent = '0:00';
	results.textContent = '';
	seconds = 0;
	minutes = 0;
};

const showHistory = () => {
	results.textContent = '';
	let num = 1;
	resultsArr.forEach((time) => {
		const newTime = document.createElement('li');
		newTime.innerHTML = `Result ${num}: <span>${time}</span>`;
		results.appendChild(newTime);
		num++;
	});
};
const showModal = () => {
	if (!(modalShadow.style.display === 'block')) {
		modalShadow.style.display = 'block';
	} else {
		modalShadow.style.display = 'none';
	}
	modalShadow.classList.toggle('modal-animation');
};

startBtn.addEventListener('click', handleStart);
pauseBtn.addEventListener('click', handlePause);
stopBtn.addEventListener('click', handleStop);
resetBtn.addEventListener('click', handleReset);
historyBtn.addEventListener('click', showHistory);

infoBtn.addEventListener('click', showModal);
closeModalbtn.addEventListener('click', showModal);
window.addEventListener('click', (e) => (e.target === modalShadow ? showModal() : false));

colorBtn.addEventListener('click', () => {
	colorMenu.classList.toggle('show-colors');
});

colorFirst.addEventListener('click', () => {
	root.style.setProperty('--first-color', 'rgb(250,20,6)');
	root.style.setProperty('--hover-color', 'rgb(209, 33, 24)');
});
colorSecond.addEventListener('click', () => {
	root.style.setProperty('--first-color', 'rgb(6,173,250)');
	root.style.setProperty('--hover-color', 'rgb(28, 145, 199)');
});
colorThird.addEventListener('click', () => {
	root.style.setProperty('--first-color', 'rgb(0,255,42)');
	root.style.setProperty('--hover-color', 'rgb(33, 190, 59)');
});
colorFourth.addEventListener('click', () => {
	root.style.setProperty('--first-color', 'rgb(238, 234, 29)');
	root.style.setProperty('--hover-color', 'rgb(194, 191, 38)');
});
colorFifth.addEventListener('click', () => {
	root.style.setProperty('--first-color', 'rgb(192, 37, 253)');
	root.style.setProperty('--hover-color', 'rgb(132, 28, 173)');
});
