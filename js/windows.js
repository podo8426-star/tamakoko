const POINT_OPENS = [
  "./assets/point-open-1.svg?v=30",
  "./assets/point-open-2.svg?v=27",
  "./assets/point-open-3.svg?v=27",
  "./assets/point-open-4.svg?v=27",
];

const LUCKY_WINDOWS = [
  "./assets/lucky-window-1.svg?v=25",
  "./assets/lucky-window-2.svg?v=25",
  "./assets/lucky-window-3.svg?v=25",
  "./assets/lucky-window-4.svg?v=25",
  "./assets/lucky-window-5.svg?v=25",
  "./assets/lucky-window-6.svg?v=25",
  "./assets/lucky-window-7.svg?v=25",
];

const ART_PHOTOS = [
  "./assets/art/01.jpg?v=3",
  "./assets/art/02.jpg?v=3",
  "./assets/art/03.jpg?v=3",
  "./assets/art/04.jpg?v=3",
  "./assets/art/05.jpg?v=3",
  "./assets/art/06.jpg?v=3",
  "./assets/art/07.jpg?v=3",
  "./assets/art/08.jpg?v=3",
  "./assets/art/09.jpg?v=3",
  "./assets/art/10.jpg?v=3",
];

const pointBtn = document.querySelector(".point");
const pointShort = document.querySelector(".point-short");
const pointOpen = document.querySelector(".point-open");
const watchHm = document.querySelector(".watch-hm");
const watchAmPm = document.querySelector(".watch-ampm");
const radioAudio = document.querySelector("#radio-audio");
const snowVideo = document.querySelector(".snow-video");
const snowPlay = document.querySelector(".snow-play");
const artTrack = document.querySelector(".art-track");
const luckyFrame = document.querySelector(".lucky-frame");
const dayHl = document.querySelector(".day-hl");

let pointIndex = -1;
let artIndex = 0;
let watchTimer = 0;

function pad(n) {
  return String(n).padStart(2, "0");
}

function tickWatch() {
  const now = new Date();
  let hour = now.getHours();
  const ampm = hour >= 12 ? "PM" : "AM";
  hour = hour % 12 || 12;
  if (watchHm) watchHm.textContent = `${pad(hour)}:${pad(now.getMinutes())}`;
  if (watchAmPm) watchAmPm.textContent = ampm;
}

function openWatch() {
  tickWatch();
  window.clearInterval(watchTimer);
  watchTimer = window.setInterval(tickWatch, 1000);
}

function closeWatch() {
  window.clearInterval(watchTimer);
}

function togglePoint() {
  const open = !pointBtn.classList.contains("is-open");
  pointBtn.classList.toggle("is-open", open);
  if (open) {
    if (!pointBtn.dataset.closedW) {
      const parent = pointBtn.offsetParent || document.querySelector(".stage");
      const pct = (pointBtn.getBoundingClientRect().width / parent.getBoundingClientRect().width) * 100;
      pointBtn.dataset.closedW = `${pct}%`;
    }
    const closed = parseFloat(pointBtn.dataset.closedW);
    if (Number.isFinite(closed)) pointBtn.style.width = `${(closed * 231.85) / 61.07}%`;
    let next = Math.floor(Math.random() * POINT_OPENS.length);
    if (POINT_OPENS.length > 1) {
      while (next === pointIndex) next = Math.floor(Math.random() * POINT_OPENS.length);
    }
    pointIndex = next;
    if (pointOpen) pointOpen.src = POINT_OPENS[pointIndex];
    if (pointShort) pointShort.hidden = true;
    if (pointOpen) pointOpen.hidden = false;
  } else if (pointShort && pointOpen) {
    if (pointBtn.dataset.closedW) pointBtn.style.width = pointBtn.dataset.closedW;
    pointShort.hidden = false;
    pointOpen.hidden = true;
  }
}

pointBtn?.addEventListener("click", (event) => {
  if (document.body.dataset.edit === "on" || window.__layoutDidDrag) return;
  event.stopPropagation();
  togglePoint();
});

function buildArt() {
  if (!artTrack) return;
  artTrack.innerHTML = ART_PHOTOS.map(
    (src, i) => `<img class="art-slide" data-i="${i}" src="${src}" alt="사진 ${i + 1}" draggable="false" />`,
  ).join("");
}

function renderArt() {
  artTrack?.querySelectorAll(".art-slide").forEach((img) => {
    const i = Number(img.dataset.i);
    const n = ART_PHOTOS.length;
    let d = i - artIndex;
    if (d > n / 2) d -= n;
    if (d < -n / 2) d += n;
    img.classList.toggle("is-center", d === 0);
    img.classList.toggle("is-side", Math.abs(d) === 1);
    img.style.transform = `translateX(${d * 72}%) scale(${d === 0 ? 1 : 0.72})`;
    img.style.opacity = Math.abs(d) > 1 ? "0" : d === 0 ? "1" : "0.55";
    img.style.zIndex = String(10 - Math.abs(d));
  });
}

function shiftArt(dir) {
  artIndex = (artIndex + dir + ART_PHOTOS.length) % ART_PHOTOS.length;
  renderArt();
}

buildArt();
renderArt();

document.querySelector(".art-prev")?.addEventListener("click", (event) => {
  event.stopPropagation();
  shiftArt(-1);
});
document.querySelector(".art-next")?.addEventListener("click", (event) => {
  event.stopPropagation();
  shiftArt(1);
});

let artDragX = null;
document.querySelector(".art-stage")?.addEventListener("pointerdown", (event) => {
  artDragX = event.clientX;
});
window.addEventListener("pointerup", (event) => {
  if (artDragX == null) return;
  const dx = event.clientX - artDragX;
  artDragX = null;
  if (document.querySelector("#modal-art")?.hidden) return;
  if (dx > 40) shiftArt(-1);
  else if (dx < -40) shiftArt(1);
});

let radioHeld = false;

function playRadio(n) {
  if (!radioAudio) return;
  window.pauseHomeBgm?.();
  radioHeld = true;
  radioAudio.volume = 0.38;
  radioAudio.src = `./assets/media/radio-0${n}.mp3`;
  radioAudio.play().catch(() => {});
}

function stopRadio() {
  if (!radioAudio) return;
  radioAudio.pause();
  radioAudio.removeAttribute("src");
  if (radioHeld) window.resumeHomeBgm?.();
  radioHeld = false;
}

document.querySelector(".radio-hits")?.addEventListener("click", (event) => {
  const btn = event.target.closest("[data-track]");
  if (!btn) return;
  event.stopPropagation();
  playRadio(btn.dataset.track);
});

function syncSnowUi() {
  snowPlay?.classList.toggle("is-paused", !snowVideo || snowVideo.paused);
}

let snowHeld = false;

function openSnow() {
  if (!snowVideo) return;
  window.pauseHomeBgm?.();
  snowHeld = true;
  snowVideo.volume = 0.4;
  snowVideo.currentTime = 0;
  snowVideo.play().catch(() => {});
  syncSnowUi();
}

function closeSnow() {
  snowVideo?.pause();
  syncSnowUi();
  if (snowHeld) window.resumeHomeBgm?.();
  snowHeld = false;
}

snowPlay?.addEventListener("click", (event) => {
  event.stopPropagation();
  if (!snowVideo) return;
  if (snowVideo.paused) snowVideo.play().catch(() => {});
  else snowVideo.pause();
  syncSnowUi();
});
snowVideo?.addEventListener("play", syncSnowUi);
snowVideo?.addEventListener("pause", syncSnowUi);

function placeDayHighlight() {
  if (!dayHl) return;
  const now = new Date();
  const inShow = now.getFullYear() === 2026 && now.getMonth() === 10 && now.getDate() >= 2 && now.getDate() <= 8;
  const day = inShow ? now.getDate() : now.getFullYear() === 2026 && now.getMonth() === 10 ? now.getDate() : 0;
  if (day < 1 || day > 30) {
    dayHl.hidden = true;
    return;
  }
  const col = (day - 1) % 7;
  const row = Math.floor((day - 1) / 7);
  dayHl.hidden = false;
  dayHl.style.left = `${((108.32 + col * 169.04) / 1405) * 100}%`;
  dayHl.style.top = `${((356.73 + row * 112.81) / 886) * 100}%`;
}

function rollLucky() {
  if (!luckyFrame) return;
  const src = LUCKY_WINDOWS[Math.floor(Math.random() * LUCKY_WINDOWS.length)];
  luckyFrame.src = src;
}

window.tamaWindows = {
  openWatch,
  closeWatch,
  openSnow,
  closeSnow,
  stopRadio,
  placeDayHighlight,
  rollLucky,
};
