let seconds = 0;
let timer = null;

function formatTime(sec) {
  let m = Math.floor(sec / 60);
  let s = sec % 60;

  return `${m < 10 ? "0"+m : m}:${s < 10 ? "0"+s : s}`;
}

function startTimer() {
  if (timer) return;

  timer = setInterval(() => {
    seconds++;
    document.getElementById("display").innerText = formatTime(seconds);
    document.getElementById("current").innerText = formatTime(seconds);
  }, 1000);
}

function stopTimer() {
  clearInterval(timer);
  timer = null;
}


function resetTimer() {
  clearInterval(timer);
  timer = null;
  seconds = 0;

  document.getElementById("display").innerText = "00:00";
  document.getElementById("current").innerText = "00:00";
  document.getElementById("laps").innerHTML = "";
}

function lapTimer() {
  if (!timer) return;

  const li = document.createElement("li");
  li.innerText = formatTime(seconds);
  document.getElementById("laps").appendChild(li);
}