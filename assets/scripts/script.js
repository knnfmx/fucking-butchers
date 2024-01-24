const DAYS = document.querySelector('.days'),
      HOURS = document.querySelector('.hours'),
      MINUTES = document.querySelector('.minutes'),
      SECONDS = document.querySelector('.seconds');

const CURRENT_YEAR = new Date().getFullYear();
const OPEN_DATE = new Date(`February 1 ${CURRENT_YEAR} 10:00:00`);

let timer = () => {
  const CURRENT_TIME = new Date();
  let diff = OPEN_DATE - CURRENT_TIME;
  let days = Math.floor(diff / 1000 / 60 / 60 / 24);
  let hours = Math.floor(diff / 1000 / 60 / 60) % 24;
  let minutes = Math.floor(diff / 1000 / 60) % 60;
  let seconds = Math.floor(diff / 1000) % 60;
  
  DAYS.innerHTML = days;
  HOURS.innerHTML = hours < 10 ? '0' + hours : hours;
  MINUTES.innerHTML = minutes < 10 ? '0' + minutes : minutes;
  SECONDS.innerHTML = seconds < 10 ? '0' + seconds : seconds;
}

timer();
setInterval(timer, 1000);
