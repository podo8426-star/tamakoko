const SELFIE_KEY = "tamakoko-selfies-v1";
const SELFIE_MAX = 24;
const selfieModal = document.querySelector("#modal-selfie");
const selfieCam = document.querySelector(".selfie-cam");
const selfieShot = document.querySelector(".selfie-shot");
const selfieFrame = document.querySelector(".selfie-frame");
const SELFIE_FRAME_W = 1024;
const SELFIE_FRAME_H = 679;
const selfieFlash = document.querySelector(".selfie-flash");
const selfieStrip = document.querySelector(".selfie-strip");
const selfieStatus = document.querySelector(".selfie-status");
const selfieShutter = document.querySelector(".selfie-shutter");
const selfieLive = document.querySelector(".selfie-live");
const selfieDelete = document.querySelector(".selfie-delete");
const selfieViewBox = document.querySelector(".selfie-view");
const SELFIE_DB = "tamakoko-selfies";
const SELFIE_STORE = "shots";
let selfieStream = null;
let selfieShots = [];
let selfieCurrent = -1;
let selfieView = "live";
let shutterCtx = null;
const selfieReady = hydrateSelfies();

function playShutter() {
  try {
    shutterCtx = shutterCtx || new AudioContext();
    const ctx = shutterCtx;
    if (ctx.state === "suspended") ctx.resume();
    const now = ctx.currentTime;
    const noise = ctx.createBuffer(1, ctx.sampleRate * 0.12, ctx.sampleRate);
    const data = noise.getChannelData(0);
    for (let i = 0; i < data.length; i += 1) {
      data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / data.length, 4);
    }
    const src = ctx.createBufferSource();
    src.buffer = noise;
    const filter = ctx.createBiquadFilter();
    filter.type = "highpass";
    filter.frequency.value = 1800;
    const click = ctx.createOscillator();
    const clickGain = ctx.createGain();
    click.type = "square";
    click.frequency.setValueAtTime(980, now);
    click.frequency.exponentialRampToValueAtTime(180, now + 0.08);
    clickGain.gain.setValueAtTime(0.16, now);
    clickGain.gain.exponentialRampToValueAtTime(0.001, now + 0.1);
    const noiseGain = ctx.createGain();
    noiseGain.gain.setValueAtTime(0.22, now);
    noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.11);
    src.connect(filter);
    filter.connect(noiseGain);
    noiseGain.connect(ctx.destination);
    click.connect(clickGain);
    clickGain.connect(ctx.destination);
    src.start(now);
    click.start(now);
    click.stop(now + 0.1);
  } catch {
    window.playClick?.();
  }
}

function fitSelfieView() {
  if (!selfieViewBox) return;
  selfieViewBox.style.aspectRatio = `${SELFIE_FRAME_W} / ${SELFIE_FRAME_H}`;
}

function loadSelfies() {
  try {
    const saved = JSON.parse(localStorage.getItem(SELFIE_KEY) || "[]");
    return Array.isArray(saved) ? saved.filter((item) => typeof item === "string") : [];
  } catch {
    return [];
  }
}

function openSelfieDb() {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(SELFIE_DB, 1);
    req.onupgradeneeded = () => {
      if (!req.result.objectStoreNames.contains(SELFIE_STORE)) {
        req.result.createObjectStore(SELFIE_STORE);
      }
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

async function readSelfieDb() {
  const db = await openSelfieDb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(SELFIE_STORE, "readonly");
    const req = tx.objectStore(SELFIE_STORE).get("list");
    req.onsuccess = () => {
      const value = req.result;
      resolve(Array.isArray(value) ? value.filter((item) => typeof item === "string") : []);
    };
    req.onerror = () => reject(req.error);
  });
}

async function writeSelfieDb(list) {
  const db = await openSelfieDb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(SELFIE_STORE, "readwrite");
    tx.objectStore(SELFIE_STORE).put(list, "list");
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}

function writeSelfieLocal(list) {
  let next = list.slice();
  while (next.length) {
    try {
      localStorage.setItem(SELFIE_KEY, JSON.stringify(next));
      selfieShots = next;
      return true;
    } catch {
      next.shift();
    }
  }
  try {
    localStorage.removeItem(SELFIE_KEY);
  } catch {
    /* ignore */
  }
  return false;
}

async function hydrateSelfies() {
  try {
    const fromDb = await readSelfieDb();
    if (fromDb.length) {
      selfieShots = fromDb;
      try {
        localStorage.removeItem(SELFIE_KEY);
      } catch {
        /* ignore */
      }
      renderStrip(false);
      return;
    }
  } catch {
    /* fall through to localStorage */
  }
  selfieShots = loadSelfies();
  if (selfieShots.length) await saveSelfies();
}

async function saveSelfies() {
  const list = selfieShots.slice(0, SELFIE_MAX);
  selfieShots = list;
  try {
    await writeSelfieDb(list);
    try {
      localStorage.removeItem(SELFIE_KEY);
    } catch {
      /* ignore */
    }
    return;
  } catch {
    /* IndexedDB unavailable */
  }
  writeSelfieLocal(list);
}

function flashSelfie() {
  if (!selfieFlash) return;
  selfieFlash.classList.remove("is-pop");
  void selfieFlash.offsetWidth;
  selfieFlash.classList.add("is-pop");
}

function syncButtons() {
  if (selfieDelete) selfieDelete.disabled = selfieView !== "review" || selfieCurrent < 0;
  if (selfieLive) selfieLive.disabled = selfieView === "live";
  if (selfieShutter) selfieShutter.disabled = selfieView !== "live";
}

function renderStrip(scrollToLatest) {
  if (!selfieStrip) return;
  selfieStrip.replaceChildren();
  const slots = Math.max(selfieShots.length, 14);
  for (let index = 0; index < slots; index += 1) {
    const url = selfieShots[index];
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "selfie-thumb";
    if (!url) btn.classList.add("is-empty");
    if (selfieView === "review" && index === selfieCurrent) btn.classList.add("is-current");
    if (url) {
      const img = document.createElement("img");
      img.src = url;
      img.alt = `셀카 ${index + 1}`;
      btn.append(img);
      btn.addEventListener("click", () => showReview(index));
    } else {
      btn.tabIndex = -1;
      btn.setAttribute("aria-hidden", "true");
    }
    selfieStrip.append(btn);
  }
  if (scrollToLatest) {
    selfieStrip.scrollLeft = selfieStrip.scrollWidth;
  }
}

async function showLive(message) {
  selfieView = "live";
  selfieCurrent = -1;
  if (selfieShot) {
    selfieShot.hidden = true;
    selfieShot.removeAttribute("src");
  }
  if (selfieCam) selfieCam.hidden = false;
  if (selfieFrame) selfieFrame.hidden = false;
  if (selfieCam?.srcObject) {
    await selfieCam.play().catch(() => {});
  } else if (!selfieModal?.hidden) {
    await startCamera();
  }
  renderStrip(false);
  syncButtons();
  if (selfieStatus) selfieStatus.textContent = message || "준비됐어. 따끈치랑 같이 찰칵!";
}

function showReview(index) {
  const url = selfieShots[index];
  if (!url) return;
  selfieView = "review";
  selfieCurrent = index;
  if (selfieCam) selfieCam.hidden = true;
  if (selfieFrame) selfieFrame.hidden = true;
  if (selfieShot) {
    selfieShot.hidden = false;
    selfieShot.src = url;
  }
  renderStrip(false);
  syncButtons();
  if (selfieStatus) selfieStatus.textContent = "고른 사진이야. 카메라로 돌아가거나 지울 수 있어.";
}

async function startCamera() {
  if (selfieStatus) selfieStatus.textContent = "카메라를 켜는 중…";
  try {
    selfieStream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: "user", width: { ideal: 1280 }, height: { ideal: 720 } },
      audio: false,
    });
    if (selfieCam) {
      selfieCam.srcObject = selfieStream;
      await selfieCam.play().catch(() => {});
      fitSelfieView();
    }
    if (selfieView === "live" && selfieStatus) selfieStatus.textContent = "준비됐어. 따끈치랑 같이 찰칵!";
  } catch {
    if (selfieStatus) selfieStatus.textContent = "카메라를 켤 수 없어. 권한을 허용해 줄래?";
  }
}

async function openSelfie() {
  await selfieReady;
  selfieModal.hidden = false;
  renderStrip(true);
  syncButtons();
  await showLive();
}

function closeSelfie() {
  selfieStream?.getTracks().forEach((track) => track.stop());
  selfieStream = null;
  if (selfieCam) selfieCam.srcObject = null;
  selfieView = "live";
  selfieCurrent = -1;
  if (selfieShot) {
    selfieShot.hidden = true;
    selfieShot.removeAttribute("src");
  }
  selfieModal.hidden = true;
}

function drawCover(ctx, video, cw, ch) {
  const vw = video.videoWidth || cw;
  const vh = video.videoHeight || ch;
  const scale = Math.max(cw / vw, ch / vh);
  const dw = vw * scale;
  const dh = vh * scale;
  const dx = (cw - dw) / 2;
  const dy = (ch - dh) / 2;
  ctx.drawImage(video, dx, dy, dw, dh);
}

function takeSelfie() {
  if (selfieView !== "live") return;
  if (!selfieCam || selfieCam.readyState < 2) return;
  const canvas = document.createElement("canvas");
  const w = SELFIE_FRAME_W;
  const h = SELFIE_FRAME_H;
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext("2d");
  ctx.save();
  ctx.translate(w, 0);
  ctx.scale(-1, 1);
  drawCover(ctx, selfieCam, w, h);
  ctx.restore();
  if (selfieFrame?.complete && selfieFrame.naturalWidth) {
    ctx.drawImage(selfieFrame, 0, 0, w, h);
  }
  const url = canvas.toDataURL("image/jpeg", 0.76);
  selfieShots.push(url);
  if (selfieShots.length > SELFIE_MAX) selfieShots = selfieShots.slice(-SELFIE_MAX);
  saveSelfies();
  flashSelfie();
  playShutter();
  renderStrip(true);
  syncButtons();
  if (selfieStatus) selfieStatus.textContent = "아래에 모아뒀어. 사진을 누르면 크게 보여!";
}

function deleteSelfie() {
  if (selfieView !== "review" || selfieCurrent < 0) return;
  selfieShots.splice(selfieCurrent, 1);
  saveSelfies();
  window.playClick?.();
  if (selfieShots[selfieCurrent]) showReview(selfieCurrent);
  else if (selfieShots[selfieCurrent - 1]) showReview(selfieCurrent - 1);
  else showLive("지웠어. 다시 찰칵해도 돼!");
}

document.querySelector(".file-cat")?.addEventListener("click", (event) => {
  if (window.isLayoutEditing?.()) return;
  event.stopPropagation();
  openSelfie();
});

selfieCam?.addEventListener("loadedmetadata", fitSelfieView);
selfieShutter?.addEventListener("click", takeSelfie);
selfieLive?.addEventListener("click", () => showLive());
selfieDelete?.addEventListener("click", deleteSelfie);
document.querySelector(".selfie-close")?.addEventListener("click", (event) => {
  event.stopPropagation();
  closeSelfie();
});
selfieModal?.addEventListener("click", (event) => {
  if (event.target === selfieModal) closeSelfie();
});
window.addEventListener("tamakoko:page", () => {
  if (!selfieModal?.hidden) closeSelfie();
});
window.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "hidden") saveSelfies();
});

window.getSelfieBackup = async () => {
  await selfieReady;
  return selfieShots.slice();
};

window.setSelfieBackup = async (shots) => {
  await selfieReady;
  const incoming = (Array.isArray(shots) ? shots : []).filter((item) => typeof item === "string" && item.startsWith("data:"));
  const seen = new Set(selfieShots);
  incoming.forEach((url) => {
    if (seen.has(url)) return;
    selfieShots.push(url);
    seen.add(url);
  });
  await saveSelfies();
  renderStrip(true);
};
