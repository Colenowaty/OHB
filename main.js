const option = document.querySelectorAll(".choice");
const final = document.querySelector(".result");
const btn = document.querySelector(".start");
const pwin = document.querySelector(".player .win");
const pwhat = document.querySelector(".player .what");
const plosses = document.querySelector(".player .losses");
const aiwhat = document.querySelector(".ai .what");
const aiwin = document.querySelector(".ai .win");
const ailosses = document.querySelector(".ai .losses");

let player = {
  choice: 0,
  wins: 0,
  losses: 0,
};

let ai = {
  choice: 0,
  wins: 0,
  losses: 0,
  draw: function () {
    const index = Math.floor(Math.random() * 3);
    index === 0
      ? (ai.choice = "kamień")
      : index === 1
      ? (ai.choice = "papier")
      : (ai.choice = "nozyczki");
  },
};

class Color {
  constructor() {}

  static changeBgc() {
    option.forEach((element) => element.classList.remove("bgc"));
  }
}

option.forEach((element, index) => {
  element.addEventListener("click", function () {
    element.classList.add("bgc");

    if (index === 0) {
      player.choice = "kamień";
    } else if (index === 1) {
      player.choice = "papier";
    } else {
      player.choice = "nozyczki";
    }
  });
});

function result() {
  pwhat.innerHTML = `Wybrano: ${player.choice}`;
  aiwhat.innerHTML = `Wybrano : ${ai.choice}`;
  if (
    (player.choice === "kamień" && ai.choice === "nozyczki") ||
    (player.choice === "papier" && ai.choice === "kamień") ||
    (player.choice === "nozyczki" && ai.choice === "papier")
  ) {
    final.innerHTML = "Wygrałeś";

    player.wins++;
    ai.losses++;
    pwin.innerHTML = `Wygrano: ${player.wins}`;
    ailosses.innerHTML = `Przegrano: ${ai.losses}`;
  } else if (player.choice === ai.choice) {
    final.innerHTML = "Remis";
  } else {
    final.innerHTML = "Przegrałes";
    player.losses++;
    ai.wins++;
    aiwin.textContent = `Wygrano: ${ai.wins}`;
    plosses.innerHTML = `Przegrano: ${player.losses}`;
  }
}

function alles() {
  if (player.choice === 0) {
    alert("Wybierz opcje");
    return;
  }
  ai.draw();
  result();
  Color.changeBgc();
}

btn.addEventListener("click", alles);
