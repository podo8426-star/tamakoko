const ITEM_TEXT = {
  window: "창밖으로 바람이 들어와.",
  day: "오늘은 10일이야.",
  art: "벽에 걸린 그림을 바라봤다.",
  watch: "똑딱똑딱… 시간이 흘러가.",
  snowball: "스노우볼을 흔들어 보았다.",
  lamp: "램프를 켜고 껐다.",
  radio: "라디오에서 손님이 흘러나온다.",
  bed: "침대가 폭신해 보인다.",
  trash: "쓰레기통을 들여다봤다.",
  sketch: "스케치북에 낙서가 있다.",
};

const WINDOW_VIEWS = [
  "./assets/g-window.png",
  "./assets/g-window-spring.png",
  "./assets/g-window-summer.png",
  "./assets/g-window-autumn.png",
];

const MOOD_LINES = {
  happy: [
    "오늘 살짝 기분이\n좋아 보인다.",
    "무슨 좋은 일 있었어?",
    "그 마음, 따끈치도\n같이 간직할게.",
    "웃는 얼굴이 참 잘 어울려.",
    "좋은 공기가\n방 안을 채운다.",
    "그 기쁨, 나랑도\n나눠줄래?",
    "이런 날이면 마음이\n반짝거려.",
    "좋아 보여서 나도\n덩달아 웃게 돼.",
  ],
  angry: [
    "많이 속상했구나.\n내가 같이 있어줄게!",
    "화나도 괜찮아.\n여기선 마음껏 그래.",
    "그 마음, 조금만\n내려놓아도 돼.",
    "잠깐 쉬어도 돼.\n내가 옆을 지킬게.",
    "속상한 마음도 이곳에\n두어도 괜찮아.",
    "화난 이유가 있겠지.\n네가 틀린 게 아니야.",
    "그 마음 충분히 이해해.\n여기 있어도 돼.",
    "힘들었지. 지금은\n그냥 토닥여줄게.",
  ],
  sad: [
    "괜찮아 내가 있어줄게!",
    "조급해하지 마.\n천천히 가도 돼.",
    "혼자 안아주기\n힘든 날이지?",
    "조금만 기대도 돼.\n따끈치가 여기 있어.",
    "숨 한번 크게 쉬어볼까.",
    "울고 싶으면 울어도 돼.\n내가 들을게.",
    "오늘은 그냥 여기\n앉아 있어도 괜찮아.",
    "마음이 무거워도,\n혼자는 아니야.",
  ],
};

const popup = document.querySelector(".item-popup");
const popupText = document.querySelector(".item-popup-text");
const modalSea = document.querySelector("#modal-sea");
const modalMind = document.querySelector("#modal-mind");
const modalTip = document.querySelector("#modal-tip");
const modalTrash = document.querySelector("#modal-trash");
const modalSketch = document.querySelector("#modal-sketch");
const trashInput = document.querySelector(".trash-input");
const trashForm = document.querySelector(".trash-form");
const roomEl = document.querySelector(".room");
const sleepImg = document.querySelector(".bed-sleep");
const zzzEl = document.querySelector(".zzz");
const seaVideo = document.querySelector(".sea-video");
const bgm = document.querySelector("#bgm");
const clickSfx = document.querySelector("#sfx-click");
const fileSfx = document.querySelector("#sfx-file");
const pointSfx = document.querySelector("#sfx-point");
const guestSfx = document.querySelector("#sfx-guest");
const whooshSfx = document.querySelector("#sfx-whoosh");
const musicPlay = document.querySelector(".music-play");
const musicSeek = document.querySelector(".music-seek");

let bgmHeld = false;
if (bgm) bgm.volume = 0.42;
if (seaVideo) seaVideo.volume = 0.4;

function playSfx(el, volume) {
  if (!el) return;
  const sound = el.cloneNode();
  sound.volume = volume;
  sound.play().catch(() => {});
}

function playClick() {
  playSfx(clickSfx, 0.42);
}

function playFileSfx() {
  playSfx(fileSfx, 0.22);
}

function playPointSfx() {
  playSfx(pointSfx, 0.22);
}

function playGuestSfx() {
  playSfx(guestSfx, 0.22);
}

function playWhooshSfx() {
  playSfx(whooshSfx, 0.22);
}

window.playClick = playClick;
window.playFileSfx = playFileSfx;
window.playPointSfx = playPointSfx;
window.playGuestSfx = playGuestSfx;
window.playWhooshSfx = playWhooshSfx;

let popupTimer = 0;
let lastMoodLine = "";
let windowView = 0;

function pickLine(lines) {
  if (!lines.length) return "";
  if (lines.length === 1) return lines[0];
  let next = lines[Math.floor(Math.random() * lines.length)];
  while (next === lastMoodLine) {
    next = lines[Math.floor(Math.random() * lines.length)];
  }
  lastMoodLine = next;
  return next;
}

function hidePopup() {
  window.clearTimeout(popupTimer);
  if (popup) popup.hidden = true;
}

function showPopup(text, anchor) {
  if (!popup || !popupText) return;
  popupText.textContent = text;
  popup.hidden = false;
  if (anchor && anchor !== document.querySelector(".room")) {
    const room = document.querySelector(".room");
    const roomBox = room.getBoundingClientRect();
    const box = anchor.getBoundingClientRect();
    popup.style.left = `${((box.left + box.width / 2 - roomBox.left) / roomBox.width) * 100}%`;
    popup.style.top = `${((box.top - roomBox.top) / roomBox.height) * 100}%`;
  } else {
    popup.style.left = "50%";
    popup.style.top = "38%";
  }
  window.clearTimeout(popupTimer);
  popupTimer = window.setTimeout(() => {
    popup.hidden = true;
  }, 2800);
}

function openModal(modal) {
  modal.hidden = false;
}

function closeModal(modal) {
  modal.hidden = true;
}

function openSea() {
  openModal(modalSea);
  pauseHomeBgm();
  seaVideo.currentTime = 0;
  seaVideo.play().catch(() => {});
  syncSeaUi();
}

function closeSea() {
  closeModal(modalSea);
  seaVideo.pause();
  syncSeaUi();
  resumeHomeBgm();
}

function syncSeaUi() {
  document.querySelector(".sea-play")?.classList.toggle("is-paused", !seaVideo || seaVideo.paused);
}

function syncMusicUi() {
  const paused = !bgm || bgm.paused;
  document.querySelector(".music")?.classList.toggle("is-paused", paused);
  document.querySelector(".music-play")?.classList.toggle("is-paused", paused);
}

function playBgm() {
  if (!bgm) return;
  bgm.play().catch(() => {});
  syncMusicUi();
}

function pauseHomeBgm() {
  if (!bgm) return;
  if (!bgmHeld) bgmHeld = !bgm.paused;
  bgm.pause();
  syncMusicUi();
}

function resumeHomeBgm() {
  if (bgmHeld) playBgm();
  bgmHeld = false;
}

window.pauseHomeBgm = pauseHomeBgm;
window.resumeHomeBgm = resumeHomeBgm;

function toggleBgm() {
  if (!bgm) return;
  if (bgm.paused) playBgm();
  else bgm.pause();
  syncMusicUi();
}

function showPage(name) {
  document.body.dataset.page = name;
  const pageBg = document.querySelector(".bg-page");
  if (pageBg) pageBg.hidden = name === "home";
  document.querySelector(".page-dogam")?.toggleAttribute("hidden", name !== "dogam");
  document.querySelector(".page-guestbook")?.toggleAttribute("hidden", name !== "guestbook");
  document.querySelectorAll(".nav-btn").forEach((btn) => {
    btn.classList.toggle("is-on", btn.dataset.page === name);
  });
  if (name !== "home") {
    closeSea();
    window.tamaWindows?.stopRadio?.();
    window.tamaWindows?.closeSnow?.();
    window.tamaWindows?.closeWatch?.();
    document.querySelectorAll(".modal").forEach((modal) => closeModal(modal));
  }
  window.dispatchEvent(new CustomEvent("tamakoko:page", { detail: name }));
}

function layoutEditing() {
  return document.body.dataset.edit === "on" || window.__layoutDidDrag;
}

document.querySelector(".stage")?.addEventListener(
  "click",
  (event) => {
    if (layoutEditing()) return;
    if (event.target.closest(".logo-secret")) return;
    const hit = event.target.closest(
      "button, .item, .nav-btn, .file-btn, .tama-btn, .use-tip, .window-close, .sea-play, .music-play, .trash-close, .sketch-close, .sketch-tool, .point, .snow-play, .radio-hits button, .art-hit, .guest-submit, .dogam-card, .growth button",
    );
    if (!hit) return;
    if (hit.closest(".file-lucky, .file-mind, .file-cat")) {
      playFileSfx();
      return;
    }
    if (hit.closest(".point")) {
      playPointSfx();
      return;
    }
    if (hit.closest(".guest-submit")) return;
    playClick();
  },
  true,
);

function isSleeping() {
  return roomEl?.classList.contains("is-sleeping");
}

function setSleeping(on) {
  roomEl?.classList.toggle("is-sleeping", on);
  if (sleepImg) sleepImg.hidden = !on;
  if (zzzEl) zzzEl.hidden = !on;
  window.setPetPaused?.(on);
}

function setDark(on) {
  roomEl?.classList.toggle("is-dark", on);
}

function dumpBadFeeling(text) {
  const stage = document.querySelector(".stage");
  const trash = document.querySelector(".item-trash");
  if (!stage || !trash) return;
  const stageBox = stage.getBoundingClientRect();
  const trashBox = trash.getBoundingClientRect();
  const startBox = trashInput?.getBoundingClientRect() || stageBox;
  const fly = document.createElement("div");
  fly.className = "trash-fly";
  fly.textContent = text;
  const startX = startBox.left + startBox.width / 2 - stageBox.left;
  const startY = startBox.top + startBox.height / 2 - stageBox.top;
  const endX = trashBox.left + trashBox.width / 2 - stageBox.left;
  const endY = trashBox.top + trashBox.height / 2 - stageBox.top;
  fly.style.left = `${(startX / stageBox.width) * 100}%`;
  fly.style.top = `${(startY / stageBox.height) * 100}%`;
  fly.style.setProperty("--dx", `${endX - startX}px`);
  fly.style.setProperty("--dy", `${endY - startY}px`);
  stage.appendChild(fly);
  trash.classList.remove("trash-catch");
  void trash.offsetWidth;
  trash.classList.add("trash-catch");
  window.setTimeout(() => {
    fly.remove();
    trash.classList.remove("trash-catch");
  }, 950);
}

document.querySelectorAll(".item").forEach((btn) => {
  btn.addEventListener("click", (event) => {
    if (layoutEditing()) return;
    const id = btn.dataset.item;
    if (id === "door") {
      event.stopPropagation();
      openSea();
      return;
    }
    if (id === "bed") {
      event.stopPropagation();
      setSleeping(!isSleeping());
      return;
    }
    if (id === "lamp") {
      event.stopPropagation();
      setDark(!roomEl.classList.contains("is-dark"));
      return;
    }
    if (id === "trash") {
      event.stopPropagation();
      openModal(modalTrash);
      window.setTimeout(() => trashInput?.focus(), 0);
      return;
    }
    if (id === "sketch") {
      event.stopPropagation();
      openModal(modalSketch);
      window.dispatchEvent(new Event("tamakoko:sketch-open"));
      return;
    }
    if (id === "watch") {
      event.stopPropagation();
      openModal(document.querySelector("#modal-watch"));
      window.tamaWindows?.openWatch?.();
      return;
    }
    if (id === "art") {
      event.stopPropagation();
      openModal(document.querySelector("#modal-art"));
      return;
    }
    if (id === "radio") {
      event.stopPropagation();
      openModal(document.querySelector("#modal-radio"));
      return;
    }
    if (id === "snowball") {
      event.stopPropagation();
      openModal(document.querySelector("#modal-snow"));
      window.tamaWindows?.openSnow?.();
      return;
    }
    if (id === "day") {
      event.stopPropagation();
      openModal(document.querySelector("#modal-day"));
      window.tamaWindows?.placeDayHighlight?.();
      return;
    }
    if (id === "window") {
      event.stopPropagation();
      const img = btn.querySelector(".window-view");
      let next = Math.floor(Math.random() * WINDOW_VIEWS.length);
      if (WINDOW_VIEWS.length > 1) {
        while (next === windowView) next = Math.floor(Math.random() * WINDOW_VIEWS.length);
      }
      windowView = next;
      if (img) img.src = WINDOW_VIEWS[windowView];
      return;
    }
    showPopup(ITEM_TEXT[id] || "살펴봤다.", btn);
  });
});

document.querySelectorAll(".nav-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    if (layoutEditing()) return;
    showPage(btn.dataset.page);
  });
});

let logoTaps = 0;
let logoTapTimer = 0;
document.querySelector(".logo-secret")?.addEventListener("click", (event) => {
  if (layoutEditing()) return;
  event.stopPropagation();
  logoTaps += 1;
  window.clearTimeout(logoTapTimer);
  logoTapTimer = window.setTimeout(() => {
    logoTaps = 0;
  }, 1000);
  if (logoTaps >= 4) {
    logoTaps = 0;
    window.resetMood?.();
  }
});

document.querySelector(".file-lucky")?.addEventListener("click", (event) => {
  if (layoutEditing()) return;
  event.stopPropagation();
  window.tamaWindows?.rollLucky?.();
  openModal(document.querySelector("#modal-lucky"));
});

document.querySelector(".file-mind")?.addEventListener("click", (event) => {
  if (layoutEditing()) return;
  event.stopPropagation();
  openModal(modalMind);
});

document.querySelector(".use-tip")?.addEventListener("click", (event) => {
  if (layoutEditing()) return;
  event.stopPropagation();
  openModal(modalTip);
});

modalTip?.addEventListener("click", () => {
  closeModal(modalTip);
});

document.querySelector(".sea-close")?.addEventListener("click", (event) => {
  event.stopPropagation();
  closeSea();
});

document.querySelector(".mind-close")?.addEventListener("click", (event) => {
  event.stopPropagation();
  closeModal(modalMind);
});

document.querySelector(".sea-play")?.addEventListener("click", (event) => {
  event.stopPropagation();
  if (seaVideo.paused) seaVideo.play();
  else seaVideo.pause();
  syncSeaUi();
});
seaVideo?.addEventListener("play", syncSeaUi);
seaVideo?.addEventListener("pause", syncSeaUi);

modalSea?.addEventListener("click", (event) => {
  if (event.target === modalSea) closeSea();
});

document.querySelector(".trash-close")?.addEventListener("click", (event) => {
  event.stopPropagation();
  closeModal(modalTrash);
});

document.querySelector(".sketch-close")?.addEventListener("click", (event) => {
  event.stopPropagation();
  closeModal(modalSketch);
});

function closeGameModal(modal) {
  if (!modal) return;
  closeModal(modal);
  if (modal.id === "modal-radio") window.tamaWindows?.stopRadio?.();
  if (modal.id === "modal-snow") window.tamaWindows?.closeSnow?.();
  if (modal.id === "modal-watch") window.tamaWindows?.closeWatch?.();
}

document.querySelectorAll(".game-close").forEach((btn) => {
  btn.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    closeGameModal(btn.closest(".modal"));
  });
});

["modal-radio", "modal-snow", "modal-watch", "modal-art", "modal-day", "modal-lucky"].forEach((id) => {
  document.querySelector(`#${id}`)?.addEventListener("click", (event) => {
    if (event.target.id === id) closeGameModal(event.currentTarget);
  });
});

function throwTrash() {
  const text = trashInput?.value.trim();
  if (!text) return;
  playWhooshSfx();
  dumpBadFeeling(text);
  trashInput.value = "";
  trashInput.focus();
}

trashForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  throwTrash();
});

trashInput?.addEventListener("keydown", (event) => {
  if (event.key !== "Enter") return;
  event.preventDefault();
  throwTrash();
});

document.querySelectorAll(".tama-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    if (layoutEditing()) return;
    const mood = btn.dataset.mood;
    window.addMood?.(mood === "sad" ? "anxiety" : mood);
    showPopup(pickLine(MOOD_LINES[mood] || MOOD_LINES.happy), document.querySelector(".room"));
  });
});

musicPlay?.addEventListener("click", (event) => {
  if (layoutEditing()) return;
  event.stopPropagation();
  toggleBgm();
});

function paintSeek() {
  if (!musicSeek) return;
  musicSeek.style.setProperty("--p", `${musicSeek.value}%`);
}

function bgmLen() {
  if (!bgm) return 0;
  if (bgm.seekable?.length) {
    const end = bgm.seekable.end(bgm.seekable.length - 1);
    if (end > 1) return end;
  }
  const duration = bgm.duration;
  return Number.isFinite(duration) && duration > 0 ? duration : 0;
}

async function prepareSeekableBgm() {
  if (!bgm || bgm.dataset.blobbed === "1") return;
  const src = bgm.getAttribute("src");
  if (!src) return;
  try {
    const res = await fetch(src);
    const blob = await res.blob();
    const url = URL.createObjectURL(blob);
    const t = bgm.currentTime;
    const playing = !bgm.paused;
    bgm.dataset.blobbed = "1";
    bgm.src = url;
    await new Promise((resolve) => {
      bgm.addEventListener("loadedmetadata", resolve, { once: true });
    });
    if (t) bgm.currentTime = t;
    if (playing) await bgm.play().catch(() => {});
  } catch {
    /* keep original src */
  }
}

let seeking = false;
function applySeek() {
  if (!bgm || !musicSeek) return;
  const duration = bgmLen();
  if (!duration) return;
  bgm.currentTime = (Number(musicSeek.value) / 100) * duration;
  paintSeek();
}

function seekBusy() {
  return seeking || document.activeElement === musicSeek;
}

musicSeek?.addEventListener("pointerdown", (event) => {
  event.stopPropagation();
  seeking = true;
});
musicSeek?.addEventListener("input", (event) => {
  event.stopPropagation();
  seeking = true;
  applySeek();
});
musicSeek?.addEventListener("change", () => {
  applySeek();
  seeking = false;
});
window.addEventListener("pointerup", () => {
  if (!seeking) return;
  applySeek();
  seeking = false;
});

let seekRaf = 0;
function tickSeek() {
  if (!bgm || bgm.paused) {
    seekRaf = 0;
    return;
  }
  const duration = bgmLen();
  if (duration && !seekBusy()) {
    musicSeek.value = String((bgm.currentTime / duration) * 100);
    paintSeek();
  }
  seekRaf = requestAnimationFrame(tickSeek);
}

bgm?.addEventListener("play", () => {
  if (!seekRaf) tickSeek();
});
bgm?.addEventListener("pause", paintSeek);
bgm?.addEventListener("timeupdate", () => {
  const duration = bgmLen();
  if (!duration || seekBusy()) return;
  musicSeek.value = String((bgm.currentTime / duration) * 100);
  paintSeek();
});
bgm?.addEventListener("play", syncMusicUi);
bgm?.addEventListener("pause", syncMusicUi);
syncMusicUi();

document.addEventListener("click", (event) => {
  if (event.target.closest(".item, .tama-btn, .item-popup, .modal, .music")) return;
  hidePopup();
});

prepareSeekableBgm().then(() => {
  try {
    playBgm();
  } catch (err) {
    /* autoplay may be blocked */
  }
});

document.addEventListener(
  "click",
  () => {
    const busy = [...document.querySelectorAll("#modal-sea, #modal-snow, #modal-radio")].some((modal) => !modal.hidden);
    if (busy) return;
    if (bgm && bgm.paused) playBgm();
  },
  { once: true },
);

showPage("home");
