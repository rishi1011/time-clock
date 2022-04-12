const html = document.querySelector('html');
const toggleModeBtn = document.querySelector('.toggle-mode');

const hourEle = document.querySelector('.hand.hour');
const minuteEle = document.querySelector('.hand.minute');
const secondsEle = document.querySelector('.hand.second');

const timeEle = document.querySelector('.time');
const dateEle = document.querySelector('.date');

toggleModeBtn.addEventListener('click', () => {
    html.classList.toggle('dark');
    if (toggleModeBtn.innerText === 'Dark Mode') {
        toggleModeBtn.innerText = 'Light Mode';
    } else {
        toggleModeBtn.innerText = 'Dark Mode';
    }
});

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

function setTime() {
    const date = new Date();
    const hours = date.getHours();
    const ampm = hours < 12 ? 'AM' : 'PM';
    const hoursForClock = hours % 12;
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const month = date.getMonth();
    const day = date.getDay();
    const dateNum = date.getDate();

    const hoursDeg = scale(hoursForClock, 0, 12, 0, 360);
    const minutesDeg = scale(minutes, 0, 60, 0, 360);
    const secondsDeg = scale(seconds, 0, 60, 0, 360);

    timeEle.innerText = `${hoursForClock}:${minutes < 10 ? '0' + minutes : minutes} ` + ampm;

    dateEle.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${dateNum}</span>`;

    hourEle.style.transform = `translate(-50%, -100%) rotate(${hoursDeg}deg)`;
    minuteEle.style.transform = `translate(-50%, -100%) rotate(${minutesDeg}deg)`;
    secondsEle.style.transform = `translate(-50%, -100%) rotate(${secondsDeg}deg)`;
}



// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers

function scale(number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

setInterval(setTime, 1000);