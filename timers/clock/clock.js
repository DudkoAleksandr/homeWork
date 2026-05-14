const div = document.querySelector(".div");
const btn = document.querySelector(".btn");
// const btnStop = document.querySelector(".btn__stop");

function formatDate(num) {
  if (num <= 9) {
    num = "0" + num;
  }
  return num;
}

let timerId;

function startClock() {
  const date = new Date();
  const hours = date.getHours();
  const min = date.getMinutes();
  const sec = date.getSeconds();
  const clock =
    formatDate(hours) + ":" + formatDate(min) + ":" + formatDate(sec);
  div.innerHTML = clock;
}

btn.addEventListener("click", () => {

  if (btn.innerHTML === "Stop") {
    clearInterval(timerId);
    btn.innerHTML = "Start";
  } else {
    startClock();
    timerId = setInterval(() => {
      startClock();
    }, 1000);
    btn.innerHTML = "Stop";
  }
});

// btnStop.addEventListener('click', () => {
//     clearInterval(timerId)
// })
