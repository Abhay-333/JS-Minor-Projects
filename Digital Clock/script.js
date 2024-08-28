const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");
const day = document.querySelector(".day");

function getTime() {
  const now = new Date();
  const hour = now.getHours();
  const min = now.getMinutes();
  const sec = now.getSeconds();
  const date = now;

  day.textContent = date.toDateString();
  hours.textContent = hour < 10 ? "0" + hour : hour;
  minutes.textContent = min < 10 ? "0" + min : min;
  seconds.textContent = sec < 10 ? "0" + sec : sec;
}

setInterval(getTime, 1000);

getTime();
