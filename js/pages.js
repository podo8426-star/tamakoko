const GUEST_KEY = "tamakoko-guestbook-v1";
const COPY_KEY = "tamakoko-guest-copy-v1";
const DOGAM_COPY_KEY = "tamakoko-dogam-copy-v1";
const STAGE_LABELS = ["알", "아기", "청소년", "성체"];
const FRIENDS = [
  {
    no: "001",
    name: "따끈치",
    tags: ["따뜻함", "친절함"],
    blurb: "타마코코의 주인공. 언제나 따듯한 마음으로 바라봐 준다.\n김이 폴폴 나는 머리를 만지면 뜨끈하고 말랑한 감촉이 느껴진다.",
    stages: ["./assets/friends/dda-1.svg", "./assets/friends/dda-2.svg", "./assets/friends/dda-3.svg", "./assets/friends/dda-4.svg"],
  },
  {
    no: "002",
    name: "가나디치",
    tags: ["명랑함", "호기심"],
    blurb: "맑은 목소리로 노래를 불러 신나게 노는 분위기 메이커다.\n복슬복슬한 털을 만지면 아주 기분이 좋다.",
    stages: ["./assets/friends/ga-1.svg", "./assets/friends/ga-2.svg", "./assets/friends/ga-3.svg", "./assets/friends/ga-4.svg"],
  },
  {
    no: "003",
    name: "꾸잉꾸잉치",
    tags: ["수줍음", "다정함"],
    blurb: "말보다 꾸잉꾸잉 소리를 더 많이 듣게 되지만\n왜인지 듣다보면 마음이 편안해지고 잠이 솔솔 온다.",
    stages: ["./assets/friends/ggu-1.svg", "./assets/friends/ggu-2.svg", "./assets/friends/ggu-3.svg", "./assets/friends/ggu-4.svg"],
  },
  {
    no: "004",
    name: "룡룡치",
    tags: ["개구쟁이", "쾌활함"],
    blurb: "작은 용이지만 기세는 크다. 무한 긍정 마인드로 주변까지 밝아진다.\n뾰족 튀어나온 이빨은 생각보다 날카롭지 않다.",
    stages: ["./assets/friends/ryong-1.svg", "./assets/friends/ryong-2.svg", "./assets/friends/ryong-3.svg", "./assets/friends/ryong-4.svg"],
  },
  {
    no: "005",
    name: "아쿠마치",
    tags: ["치분함", "이성적"],
    blurb: "깊은 대화를 나누면 고민이 해결되고 불안감이 사라진다.\n완벽한 솔루션을 만들어 제시하는 걸 좋아한다.",
    stages: ["./assets/friends/akuma-1.svg", "./assets/friends/akuma-2.svg", "./assets/friends/akuma-3.svg", "./assets/friends/akuma-4.svg"],
  },
  {
    no: "006",
    name: "플럼피치",
    tags: ["조용함", "온화함"],
    blurb: "부리처럼 보이는 두꺼운 입술이 아주 말랑하다.\n졸린 듯 보이지만 늘 옆에서 조용히 얘기를 들어주고 있다.",
    stages: ["./assets/friends/rum-1.svg", "./assets/friends/rum-2.svg", "./assets/friends/rum-3.svg", "./assets/friends/rum-4.svg"],
  },
];

const SPRITE_PX = {
  "./assets/friends/dda-1.svg": { w: 32, h: 33 },
  "./assets/friends/dda-2.svg": { w: 30, h: 24 },
  "./assets/friends/dda-3.svg": { w: 34, h: 46 },
  "./assets/friends/dda-4.svg": { w: 40, h: 53 },
  "./assets/friends/ga-1.svg": { w: 32, h: 32 },
  "./assets/friends/ga-2.svg": { w: 36, h: 22 },
  "./assets/friends/ga-3.svg": { w: 40, h: 32 },
  "./assets/friends/ga-4.svg": { w: 46, h: 40 },
  "./assets/friends/ggu-1.svg": { w: 32, h: 32 },
  "./assets/friends/ggu-2.svg": { w: 32, h: 24 },
  "./assets/friends/ggu-3.svg": { w: 34, h: 37 },
  "./assets/friends/ggu-4.svg": { w: 42, h: 52 },
  "./assets/friends/ryong-1.svg": { w: 31, h: 34 },
  "./assets/friends/ryong-2.svg": { w: 34, h: 26 },
  "./assets/friends/ryong-3.svg": { w: 43, h: 39 },
  "./assets/friends/ryong-4.svg": { w: 48, h: 44 },
  "./assets/friends/akuma-1.svg": { w: 30, h: 33 },
  "./assets/friends/akuma-2.svg": { w: 26, h: 28 },
  "./assets/friends/akuma-3.svg": { w: 30, h: 35 },
  "./assets/friends/akuma-4.svg": { w: 35, h: 42 },
  "./assets/friends/rum-1.svg": { w: 32, h: 32 },
  "./assets/friends/rum-2.svg": { w: 31, h: 23 },
  "./assets/friends/rum-3.svg": { w: 34, h: 38 },
  "./assets/friends/rum-4.svg": { w: 38, h: 43 },
};

let dogamIndex = 0;

function spritePath(src) {
  try {
    return new URL(src, location.href).pathname;
  } catch {
    return src;
  }
}

function spritePx(src) {
  return SPRITE_PX[src] || SPRITE_PX[spritePath(src)];
}

function spriteStyle(src) {
  const px = spritePx(src);
  return px ? `style="--px-w:${px.w};--px-h:${px.h}"` : "";
}

function applySpritePx(img, src = img.getAttribute("src")) {
  const px = src ? spritePx(src) : null;
  if (!px) return;
  img.style.setProperty("--px-w", String(px.w));
  img.style.setProperty("--px-h", String(px.h));
}

function setSpriteSrc(img, src) {
  applySpritePx(img, src);
  if (img.getAttribute("src") !== src) img.src = src;
}

function preloadFriendSprites() {
  FRIENDS.forEach((friend) => {
    friend.stages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  });
}
let dogamStage = 3;
let dogamReady = false;

function loadGuests() {
  try {
    const saved = JSON.parse(localStorage.getItem(GUEST_KEY) || "[]");
    return Array.isArray(saved) ? saved : [];
  } catch {
    return [];
  }
}

function saveGuests(list) {
  localStorage.setItem(GUEST_KEY, JSON.stringify(list));
}

function stamp() {
  const now = new Date();
  const p = (n) => String(n).padStart(2, "0");
  return `${now.getFullYear()}.${p(now.getMonth() + 1)}.${p(now.getDate())} ${p(now.getHours())}:${p(now.getMinutes())}`;
}

function loadCopy() {
  try {
    return JSON.parse(localStorage.getItem(COPY_KEY) || "{}");
  } catch {
    return {};
  }
}

function applyGuestCopy() {
  const copy = loadCopy();
  const titles = {
    "응원의 말 방명록": "♥ 타마코코 방명록 ♥",
    "타마코코 방명록": "♥ 타마코코 방명록 ♥",
  };
  if (copy.title && titles[copy.title]) {
    copy.title = titles[copy.title];
    localStorage.setItem(COPY_KEY, JSON.stringify(copy));
  }
  if (copy.heading === "마음을 남겨줘" || copy.heading === "너의 마음을 남겨줘" || copy.heading === "너의 마음을 남겨줘 !") {
    copy.heading = "너의 마음을 남겨줘!";
    localStorage.setItem(COPY_KEY, JSON.stringify(copy));
  }
  if (copy.help) {
    const packed = copy.help.replace(/<br\s*\/?>/gi, "\n").replace(/<\/div>\s*<div>/gi, "\n").replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
    if (packed === "응원의 말, 느꼈던 감정, 무엇이든 좋아. 흔적을 남겨주면 큰 힘이 될 것 같아~") {
      copy.help = "응원의 말, 느꼈던 감정, 무엇이든 좋아.<br>흔적을 남겨주면 큰 힘이 될 것 같아~";
      localStorage.setItem(COPY_KEY, JSON.stringify(copy));
    }
  }
  document.querySelectorAll(".page-guestbook [data-copy]").forEach((el) => {
    const key = el.dataset.copy;
    if (copy[key] == null) return;
    if (key === "empty" || key === "help") {
      el.innerHTML = String(copy[key]).includes("<") ? copy[key] : String(copy[key]).replace(/\n/g, "<br>");
    } else el.textContent = copy[key];
  });
  document.querySelectorAll(".page-guestbook [data-copy-ph]").forEach((el) => {
    const key = el.dataset.copyPh;
    if (copy[key] != null) el.placeholder = copy[key];
  });
}

function saveGuestCopy() {
  const copy = {};
  document.querySelectorAll(".page-guestbook [data-copy]").forEach((el) => {
    const key = el.dataset.copy;
    copy[key] = key === "empty" || key === "help" ? el.innerHTML : el.textContent.trim();
  });
  document.querySelectorAll(".page-guestbook [data-copy-ph]").forEach((el) => {
    copy[el.dataset.copyPh] = el.placeholder;
  });
  localStorage.setItem(COPY_KEY, JSON.stringify(copy));
}

function loadDogamCopy() {
  try {
    return JSON.parse(localStorage.getItem(DOGAM_COPY_KEY) || "{}");
  } catch {
    return {};
  }
}

function friendText(index) {
  const friend = FRIENDS[index];
  const extra = loadDogamCopy().friends?.[index] || {};
  return {
    name: extra.name || friend.name,
    blurb: extra.blurb || friend.blurb,
    tags: extra.tags?.filter(Boolean).length ? extra.tags.filter(Boolean) : friend.tags,
    stages: Array.isArray(extra.stages) && extra.stages.length === 4 ? extra.stages : STAGE_LABELS,
  };
}

function applyDogamStaticCopy() {
  const copy = loadDogamCopy();
  document.querySelectorAll(".page-dogam [data-copy]").forEach((el) => {
    const key = el.dataset.copy;
    if (key === "name" || key === "blurb" || key === "tags") return;
    if (copy[key] != null) el.textContent = copy[key];
  });
}

function saveDogamCopy() {
  if (!dogamReady) return;
  const copy = loadDogamCopy();
  copy.friends = copy.friends || {};
  const prev = copy.friends[dogamIndex] || {};
  document.querySelectorAll(".page-dogam [data-copy]").forEach((el) => {
    const key = el.dataset.copy;
    if (key === "name" || key === "blurb" || key === "tags") return;
    const value = el.textContent.trim();
    if (value) copy[key] = value;
  });
  const tagsEl = document.querySelector(".dogam-tags");
  const tags = [...document.querySelectorAll(".dogam-tags span")].map((el) => el.textContent.trim()).filter(Boolean);
  const name = document.querySelector(".dogam-meta [data-copy='name']")?.textContent.trim();
  const blurb = document.querySelector(".dogam-blurb")?.textContent.trim();
  copy.friends[dogamIndex] = {
    name: name || prev.name || FRIENDS[dogamIndex].name,
    blurb: blurb || prev.blurb || FRIENDS[dogamIndex].blurb,
    tags: tagsEl?.childElementCount ? (tags.length ? tags : prev.tags || FRIENDS[dogamIndex].tags) : prev.tags || FRIENDS[dogamIndex].tags,
  };
  localStorage.setItem(DOGAM_COPY_KEY, JSON.stringify(copy));
}

function setDogamTextEditing(on) {
  document.querySelectorAll(".dogam-name, .dogam-blurb, .dogam-tags span").forEach((el) => {
    el.contentEditable = on ? "true" : "false";
    el.spellcheck = false;
  });
}

function setGuestCopyEditing(on) {
  document.querySelectorAll(".page-guestbook [data-copy], .page-dogam [data-copy], .dogam-tags span").forEach((el) => {
    if (el.closest(".guest-intro")) {
      el.contentEditable = "false";
      return;
    }
    el.contentEditable = on ? "true" : "false";
    el.spellcheck = false;
  });
  setDogamTextEditing(true);
  document.querySelectorAll(".page-guestbook [data-copy-ph]").forEach((el) => {
    if (on && !el.value) {
      el.value = el.placeholder;
      el.dataset.phEdit = "1";
    } else if (!on && el.dataset.phEdit === "1") {
      el.placeholder = el.value;
      el.value = "";
      delete el.dataset.phEdit;
    }
  });
  if (!on) {
    saveGuestCopy();
    saveDogamCopy();
  }
}

function renderGuests() {
  const list = document.querySelector(".guest-list");
  const empty = list?.querySelector(".guest-empty");
  if (!list || !empty) return;
  const notes = loadGuests();
  list.querySelectorAll(".guest-card").forEach((card) => card.remove());
  if (!notes.length) {
    empty.hidden = false;
    return;
  }
  empty.hidden = true;
  notes.forEach((note) => {
    const card = document.createElement("article");
    card.className = "guest-card";
    const header = document.createElement("header");
    const strong = document.createElement("strong");
    const date = document.createElement("span");
    const body = document.createElement("p");
    strong.textContent = note.name;
    date.textContent = note.date;
    body.textContent = note.text;
    header.append(strong, date);
    card.append(header, body);
    list.append(card);
  });
}

function bindGuestbook() {
  applyGuestCopy();
  const form = document.querySelector(".guest-form");
  form?.addEventListener("submit", (event) => {
    event.preventDefault();
    if (window.isLayoutEditing?.()) return;
    const name = form.querySelector("[name=name]").value.trim().slice(0, 12);
    const text = form.querySelector("[name=text]").value.trim().slice(0, 120);
    if (!name || !text) return;
    const notes = loadGuests();
    notes.unshift({ name, text, date: stamp() });
    saveGuests(notes.slice(0, 80));
    form.reset();
    renderGuests();
    window.playGuestSfx?.();
  });
  document.querySelector(".guest-submit")?.addEventListener("click", () => {
    if (window.isLayoutEditing?.()) return;
    if (!form?.checkValidity()) window.playClick?.();
  });
  document.querySelector(".page-guestbook")?.addEventListener("input", () => {
    if (window.isLayoutEditing?.()) saveGuestCopy();
  });
  document.querySelector(".page-guestbook")?.addEventListener("blur", () => {
    if (window.isLayoutEditing?.()) saveGuestCopy();
  }, true);
  document.querySelector(".page-dogam")?.addEventListener("input", () => {
    saveDogamCopy();
  });
  document.querySelector(".page-dogam")?.addEventListener("blur", () => {
    saveDogamCopy();
  }, true);
  document.addEventListener(
    "keydown",
    (event) => {
      if (event.key !== "Enter" || event.isComposing) return;
      const el = event.target.closest(
        ".page-dogam [contenteditable='true'], .page-guestbook [contenteditable='true']",
      );
      if (!el) return;
      if (el.closest(".page-guestbook") && !window.isLayoutEditing?.()) return;
      if (!el || el.closest(".dogam-tags")) return;
      if (el.closest(".layout-target")?.dataset.canMove === "1") return;
      event.preventDefault();
      event.stopPropagation();
      if (!document.execCommand("insertLineBreak")) {
        document.execCommand("insertHTML", false, "<br>");
      }
    },
    true,
  );
  window.addEventListener("tamakoko:edit", (event) => setGuestCopyEditing(Boolean(event.detail)));
  bindGuestWipe();
  renderGuests();
}

function bindGuestWipe() {
  const logo = document.querySelector(".guest-logo");
  if (!logo) return;
  let taps = 0;
  let last = 0;
  logo.addEventListener("click", () => {
    if (window.isLayoutEditing?.()) return;
    const now = Date.now();
    if (now - last > 700) taps = 0;
    last = now;
    taps += 1;
    if (taps < 5) return;
    taps = 0;
    saveGuests([]);
    renderGuests();
  });
}

function scalePixelSprites(root = document.querySelector(".page-dogam")) {
  root?.querySelectorAll(".dogam-hero img, .pixel-sprite").forEach((img) => applySpritePx(img));
}

function renderDogam(index, stage) {
  saveDogamCopy();
  if (window.isLayoutEditing?.()) window.persistLayout?.();
  const prevIndex = dogamIndex;
  const friend = FRIENDS[index];
  const text = friendText(index);
  const safeStage = Math.min(stage, friend.stages.length - 1);
  dogamIndex = index;
  dogamStage = safeStage;
  const hero = document.querySelector(".dogam-hero img");
  const heroNo = document.querySelector(".dogam-hero-no");
  const no = document.querySelector(".dogam-meta .no");
  const title = document.querySelector(".dogam-meta h2");
  const blurb = document.querySelector(".dogam-blurb");
  const tags = document.querySelector(".dogam-tags");
  const growth = document.querySelector(".growth");
  const grid = document.querySelector(".dogam-grid");
  if (hero) setSpriteSrc(hero, friend.stages[safeStage]);
  if (heroNo) {
    heroNo.textContent = `No.${friend.no}`;
    heroNo.style.left = "";
    heroNo.style.top = "";
    heroNo.style.width = "";
    heroNo.style.fontSize = "";
    heroNo.style.position = "";
    heroNo.classList.remove("layout-target");
  }
  if (no) no.textContent = `No.${friend.no}`;
  if (title) title.textContent = text.name;
  if (blurb) blurb.textContent = text.blurb;
  if (tags && (prevIndex !== index || !tags.childElementCount)) {
    tags.innerHTML = (text.tags || []).map((tag) => `<span>${tag}</span>`).join("");
  }
  const rebuildGrowth = Boolean(growth) && (!growth.querySelector("button") || prevIndex !== index);
  if (rebuildGrowth) {
    growth.innerHTML = friend.stages
      .map(
        (src, i) => `${i ? `<span class="growth-arrow" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M8 5 L17 12 L8 19" fill="none" stroke="currentColor" stroke-width="3.8" stroke-linecap="round" stroke-linejoin="round"/></svg></span>` : ""}
          <button type="button" data-stage="${i}" class="${[
            i === safeStage ? "is-on" : "",
            friend.no === "003" && i === 3 ? "is-ggu-adult" : "",
            friend.no === "005" && i === 1 ? "is-akuma-baby" : "",
            friend.no === "005" && i === 3 ? "is-akuma-adult" : "",
          ].filter(Boolean).join(" ")}">
          <span class="growth-chip">${STAGE_LABELS[i]}</span>
          <span class="growth-sprite"><img class="pixel-sprite" src="${src}" alt="" ${spriteStyle(src)} /></span>
        </button>`,
      )
      .join("");
    growth.querySelectorAll("button").forEach((btn) => {
      btn.addEventListener("click", (event) => {
        if (window.isLayoutEditing?.() && event.target.closest(".growth-sprite, img")) return;
        renderDogam(index, Number(btn.dataset.stage));
      });
    });
  } else if (growth) {
    growth.querySelectorAll("button").forEach((btn) => {
      btn.classList.toggle("is-on", Number(btn.dataset.stage) === safeStage);
    });
  }
  if (grid && !grid.querySelector(".dogam-card")) {
    grid.innerHTML = FRIENDS.map((item, i) => {
      const label = friendText(i).name;
      const src = item.stages[item.stages.length - 1];
      return `<button type="button" class="dogam-card ${i === index ? "is-on" : ""} ${item.no === "003" ? "is-ggu" : ""}" data-friend="${i}">
        <span class="card-caption"><span class="dex">No.${item.no}</span><b>${label}</b></span>
        <span class="card-sprite"><img class="pixel-sprite" src="${src}" alt="" ${spriteStyle(src)} /></span>
      </button>`;
    }).join("");
    grid.querySelectorAll(".dogam-card").forEach((btn) => {
      btn.addEventListener("click", () => {
        const next = Number(btn.dataset.friend);
        renderDogam(next, FRIENDS[next].stages.length - 1);
      });
    });
  } else if (grid) {
    grid.querySelectorAll(".dogam-card").forEach((btn) => {
      btn.classList.toggle("is-on", Number(btn.dataset.friend) === index);
    });
  }
  applyDogamStaticCopy();
  scalePixelSprites();
  dogamReady = true;
  setDogamTextEditing(true);
  if (window.isLayoutEditing?.()) {
    setGuestCopyEditing(true);
    window.refreshLayoutTargets?.();
  }
}

window.getDogamIndex = () => dogamIndex;

bindGuestbook();
preloadFriendSprites();
renderDogam(0, 3);
window.renderDogam = renderDogam;
