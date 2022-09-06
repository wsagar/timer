let startingminu = 0;
let time = {
  mm: 0,
  hh: 0,
  ss: 0,
};

let counterele = document.getElementById("countdown");
let interval;
function startCounter() {
  if (interval) {
    return;
  }
  interval = setInterval(count, 1000);
}

function stopCounter() {
  clearInterval(interval);
  interval = null;
}

function resetTimer() {
  time = {
    hh: 0,
    mm: 0,
    ss: 0,
  };
  counterele.innerHTML = `${time.hh}:${time.mm}:${time.ss}`;
}

resetTimer();
function count() {
  if (time.mm == 60) {
    time.hh += 1;
    time.mm = 0;
  }

  if (time.ss <= 59) {
    time.ss += 1;
  }
  if (time.ss == 60) {
    time.mm += 1;
    time.ss = 0;
  }
  counterele.innerHTML = `${time.hh}:${time.mm}:${time.ss}`;
}

function oprbtn() {
  let opr = ["start", "stop", "restart"];
  for (let i = 0; i < opr.length; i++) {
    let ss = document.querySelector("body");
    let btn = document.createElement("button");
    btn.innerHTML = opr[i];
    ss.appendChild(btn);
    if ("start" === opr[i]) {
      btn.addEventListener("click", startCounter);
    } else if ("stop" === opr[i]) {
      btn.addEventListener("click", stopCounter);
    } else {
      btn.addEventListener("click", resetTimer);
    }
  }
}
oprbtn();
