const btnStart = document.querySelector(".btn__start");
const btnStop = document.querySelector(".btn__stop");
const result = document.querySelector(".result");

let seconds = 10;
// const minut = Math.floor(seconds / 60);
// const second = seconds - minut * 60;
// // const second = seconds % 60
// result.innerHTML = `${String(minut).padStart(2, "0")}: ${String(second).padStart(2, "0")}`;

btnStart.addEventListener("click", () => {
  const minut = Math.floor(seconds / 60);
  const second = seconds - minut * 60;
  // const second = seconds % 60
  result.innerHTML = `${String(minut).padStart(2, "0")}: ${String(second).padStart(2, "0")}`;

  setInterval(() => {
    seconds--;
    const minut = Math.floor(seconds / 60);
    const second = seconds - minut * 60;
    // const second = seconds % 60
    result.innerHTML = `${String(minut).padStart(2, "0")}: ${String(second).padStart(2, "0")}`;
  }, 1000);
});
