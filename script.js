const homeBtn = document.getElementById("home-btn");
const home = document.getElementById("home");
const playlistBtn = document.getElementById("playlist-btn");
const playlist = document.getElementById("playlist");
const chart = document.getElementById("obi");
const chart1 = document.getElementById("chart-1");
const body = document.querySelector("body");

function playlistEl() {
  home.classList.add("hidden");
  home.classList.remove("flex");
  playlist.classList.add("flex");
  playlist.classList.remove("hidden");
  chart1.classList.add("hidden");
}

function homeEl() {
  home.classList.remove("hidden");
  home.classList.add("flex");
  playlist.classList.add("hidden");
}

function openChart() {
  home.classList.add("hidden");
  home.classList.remove("flex");
  chart1.classList.add("flex");
  chart1.classList.remove("hidden");
  playlist.classList.add("hidden");
}

homeBtn.addEventListener("click", homeEl);
playlistBtn.addEventListener("click", playlistEl);
chart.addEventListener("click", openChart);
