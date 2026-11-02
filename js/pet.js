const SPRITES = {
  front: "./assets/dda-front.png",
  back: "./assets/dda-back.png",
  left: "./assets/dda-left.png",
  right: "./assets/dda-right.png",
};

const petEl = document.querySelector(".pet");
const petSprite = document.querySelector(".pet-sprite");
const petRoom = document.querySelector(".room");

const HOME = { x: 37.2422, y: 58.2660 };

const pet = {
  x: HOME.x,
  y: HOME.y,
  width: 22,
  height: 22,
  moving: false,
  paused: false,
  raf: 0,
};

const WALK = {
  minX: 10,
  maxX: 72,
  minY: 46,
  maxY: 76,
};

const OBSTACLES = [
  { x: 10, y: 66, w: 22, h: 22 },
  { x: 61, y: 69, w: 22, h: 22 },
];

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function setSprite(dir) {
  const src = SPRITES[dir] || SPRITES.front;
  if (petSprite.getAttribute("src") !== src) petSprite.src = src;
}

function renderPet() {
  petEl.style.left = `${pet.x}%`;
  petEl.style.top = `${pet.y}%`;
}

function faceFromDelta(dx, dy) {
  if (Math.abs(dx) > Math.abs(dy)) return dx < 0 ? "left" : "right";
  return dy < 0 ? "back" : "front";
}

function petHitbox(x, y) {
  return {
    x: x + 3,
    y: y + pet.height * 0.42,
    w: pet.width - 6,
    h: pet.height * 0.55,
  };
}

function overlaps(a, b) {
  return a.x < b.x + b.w && a.x + a.w > b.x && a.y < b.y + b.h && a.y + a.h > b.y;
}

function blocked(x, y) {
  const hit = petHitbox(x, y);
  return OBSTACLES.some((box) => overlaps(hit, box));
}

function nearestFree(x, y) {
  x = clamp(x, WALK.minX, WALK.maxX);
  y = clamp(y, WALK.minY, WALK.maxY);
  if (!blocked(x, y)) return { x, y };
  for (let radius = 2; radius <= 36; radius += 2) {
    for (let step = 0; step < 16; step += 1) {
      const angle = (step / 16) * Math.PI * 2;
      const nx = clamp(x + Math.cos(angle) * radius, WALK.minX, WALK.maxX);
      const ny = clamp(y + Math.sin(angle) * radius, WALK.minY, WALK.maxY);
      if (!blocked(nx, ny)) return { x: nx, y: ny };
    }
  }
  return { x: pet.x, y: pet.y };
}

function movePetTo(targetX, targetY, speed = 38, onDone) {
  const free = nearestFree(targetX, targetY);
  targetX = free.x;
  targetY = free.y;
  if (pet.raf) cancelAnimationFrame(pet.raf);

  const start = performance.now();
  const fromX = pet.x;
  const fromY = pet.y;
  const dx = targetX - fromX;
  const dy = targetY - fromY;
  const dist = Math.hypot(dx, dy);
  if (dist < 0.6) {
    setSprite("front");
    onDone?.();
    return;
  }

  setSprite(faceFromDelta(dx, dy));
  const duration = (dist / speed) * 1000;
  pet.moving = true;
  petEl.classList.add("is-walking");

  function step(now) {
    const t = Math.min(1, (now - start) / duration);
    const eased = 1 - (1 - t) * (1 - t);
    const nextX = fromX + dx * eased;
    const nextY = fromY + dy * eased;
    if (blocked(nextX, nextY)) {
      pet.moving = false;
      petEl.classList.remove("is-walking");
      setSprite("front");
      onDone?.();
      return;
    }
    pet.x = nextX;
    pet.y = nextY;
    renderPet();
    if (t < 1) {
      pet.raf = requestAnimationFrame(step);
    } else {
      pet.moving = false;
      petEl.classList.remove("is-walking");
      setSprite("front");
      onDone?.();
    }
  }

  pet.raf = requestAnimationFrame(step);
}

let returnTimer = 0;

function goHome(speed = 44) {
  movePetTo(HOME.x, HOME.y, speed);
}

function setPetHome(x, y) {
  if (!Number.isFinite(x) || !Number.isFinite(y)) return;
  HOME.x = x;
  HOME.y = y;
  pet.x = x;
  pet.y = y;
  renderPet();
  try {
    localStorage.setItem("tamakoko-pet-home", JSON.stringify({ x, y }));
  } catch {
    /* ignore */
  }
}

window.setPetHome = setPetHome;

try {
  const savedHome = JSON.parse(localStorage.getItem("tamakoko-pet-home") || "null");
  if (savedHome && Number.isFinite(savedHome.x) && Number.isFinite(savedHome.y)) {
    HOME.x = savedHome.x;
    HOME.y = savedHome.y;
    pet.x = savedHome.x;
    pet.y = savedHome.y;
  }
} catch {
  /* ignore */
}

function scheduleReturn(delay = 1400) {
  window.clearTimeout(returnTimer);
  returnTimer = window.setTimeout(() => {
    if (document.body.dataset.edit === "on") return;
    if (document.body.dataset.page !== "home") return;
    if (!modalClosed()) return;
    if (petRoom.classList.contains("is-sleeping")) return;
    goHome(44);
  }, delay);
}

function setPetPaused(on) {
  pet.paused = on;
  if (on) {
    if (pet.raf) cancelAnimationFrame(pet.raf);
    pet.moving = false;
    petEl.classList.remove("is-walking");
    window.clearTimeout(returnTimer);
  }
}

window.setPetPaused = setPetPaused;

function clickInRoom(event) {
  if (document.body.dataset.edit === "on" || window.__layoutDidDrag) return;
  if (pet.paused) return;
  if (!petRoom.contains(event.target)) return;
  if (event.target.closest(".item, .item-popup")) return;
  if (petRoom.classList.contains("is-sleeping")) return;
  const rect = petRoom.getBoundingClientRect();
  const x = ((event.clientX - rect.left) / rect.width) * 100 - pet.width / 2;
  const y = ((event.clientY - rect.top) / rect.height) * 100 - pet.height * 0.72;
  window.clearTimeout(returnTimer);
  movePetTo(x, y, 48, () => scheduleReturn(1600));
}

petRoom?.addEventListener("click", clickInRoom, true);

function wander() {
  if (document.body.dataset.edit === "on") return;
  if (document.body.dataset.page !== "home") return;
  if (pet.paused || pet.moving) return;
  if (!modalClosed()) return;
  if (petRoom.classList.contains("is-sleeping")) return;
  const x = HOME.x + (Math.random() - 0.5) * 28;
  const y = HOME.y + (Math.random() - 0.5) * 16;
  window.clearTimeout(returnTimer);
  movePetTo(x, y, 22, () => scheduleReturn(900 + Math.random() * 500));
}

function modalClosed() {
  return [...document.querySelectorAll(".modal")].every((modal) => modal.hidden);
}

function scheduleWander() {
  const wait = 4200 + Math.random() * 3800;
  setTimeout(() => {
    wander();
    scheduleWander();
  }, wait);
}

window.addEventListener("tamakoko:page", (event) => {
  if (event.detail !== "home" && pet.raf) {
    cancelAnimationFrame(pet.raf);
    pet.moving = false;
    petEl.classList.remove("is-walking");
  }
});

setSprite("front");
renderPet();
window.setTimeout(() => wander(), 800);
scheduleWander();
