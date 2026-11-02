const STORAGE_KEY = "tamakoko-layout-v1";
const EDIT_PREF = "tamakoko-editor-v2";
const LAYOUT_SEED_KEY = "tamakoko-layout-seed-v31";
const LAYOUT_SEED = {
  ".left": { left: "3.9898%", top: "9.6918%", width: "23.1707%" },
  ".stats-card": { left: "3.5982%", top: "25.5168%", width: "21.1711%" },
  ".stats-face": { left: "13.3681%", top: "14.9239%", width: "28.6282%" },
  ".lv-num": { left: "49.7083%", top: "11.9849%", width: "21.9988%" },
  ".score-num": { left: "47.4687%", top: "85.9398%", width: "10.0559%" },
  ".gauge-happy": { left: "13.8821%", top: "45.5999%", width: "68.6034%" },
  ".gauge-angry": { left: "13.6214%", top: "57.5718%", width: "68.6034%" },
  ".gauge-anxiety": { left: "13.8250%", top: "69.5213%", width: "68.6034%" },
  ".music": { left: "3.7359%", top: "74.9047%", width: "20.3994%" },
  ".music-play": { left: "86.0953%", top: "29.0714%", width: "4.6899%" },
  ".music-seek": { left: "31.2444%", top: "60.8212%", width: "58.0205%" },
  ".welcome": { left: "4.2437%", top: "87.5318%", width: "19.0038%" },
  ".point": { left: "73.0740%", top: "14.3765%", width: "2.9595%" },
  '.nav-btn[data-page="home"]': { left: "79.5817%", top: "6.7509%", width: "7.1848%" },
  '.nav-btn[data-page="dogam"]': { left: "85.6694%", top: "6.6771%", width: "7.1848%" },
  '.nav-btn[data-page="guestbook"]': { left: "91.7288%", top: "6.6976%", width: "7.1846%" },
  ".room": { left: "35.0607%", top: "21.9806%", width: "29.9402%" },
  ".pet": { left: "37.2404%", top: "58.2630%", width: "21.9780%" },
  ".item-door": { left: "1.9471%", top: "22.1973%", width: "10.4623%" },
  ".item-window": { left: "20.4646%", top: "3.3421%", width: "31.5835%" },
  ".item-day": { left: "56.2881%", top: "8.5921%", width: "9.5704%" },
  ".item-art": { left: "68.5851%", top: "12.8118%", width: "10.9451%" },
  ".item-watch": { left: "86.1984%", top: "13.0084%", width: "10.5782%" },
  ".item-snowball": { left: "21.9148%", top: "28.0441%", width: "8.0728%" },
  ".item-lamp": { left: "34.4576%", top: "27.2121%", width: "8.0728%" },
  ".item-radio": { left: "53.6282%", top: "32.0444%", width: "12.9712%" },
  ".item-bed": { left: "69.2979%", top: "31.3721%", width: "25.5614%" },
  ".item-trash": { left: "5.6938%", top: "73.4830%", width: "16.5757%" },
  ".item-sketch": { left: "74.7143%", top: "76.0282%", width: "15.6908%" },
  '.tama-btn[data-mood="angry"]': { left: "39.1083%", top: "81.8967%", width: "4.7825%" },
  '.tama-btn[data-mood="happy"]': { left: "47.6251%", top: "86.0749%", width: "4.7825%" },
  '.tama-btn[data-mood="sad"]': { left: "56.1019%", top: "81.9126%", width: "4.7825%" },
  ".file-lucky": { left: "79.7431%", top: "25.6252%", width: "8.1462%" },
  ".file-mind": { left: "87.7242%", top: "47.3002%", width: "9.6023%" },
  ".file-cat": { left: "79.3851%", top: "67.0305%", width: "11.6550%" },
  ".use-tip": { left: "93.5018%", top: "87.9495%", width: "5.1268%" },
  ".watch-clock": { left: "6.9769%", top: "38.6886%", width: "83.1089%" },
  ".glitter-left": { left: "3.7049%", top: "28.7567%", width: "21.9470%" },
  ".glitter-right": { left: "88.3314%", top: "16.8138%", width: "8.4997%" },
};

const GUEST_SEED = {
  ".guest-logo": { left: "8.2883%", top: "3.9039%", width: "83.5105%" },
  ".guest-intro": { left: "9.3694%", top: "33.4535%", width: "82.4197%" },
  ".guest-form": { left: "8.8288%", top: "49.4294%", width: "82.4197%" },
  ".guest-submit": { left: "8.8288%", top: "81.5616%", width: "82.4197%" },
  ".guest-list": { spriteY: "8px" },
};
const TITLE_ALIGN_KEY = "tamakoko-title-align-v1";
const WATCH_CLOCK_NUDGE_KEY = "tamakoko-watch-clock-nudge-v1";
const GUEST_LAYOUT_RESET_KEY = "tamakoko-guest-layout-v2";
const DOGAM_LAYOUT_RESET_KEY = "tamakoko-dogam-layout-v3";
const HERO_NO_RESET_KEY = "tamakoko-hero-no-reset-v2";
const TAG_FONT_RESET_KEY = "tamakoko-tag-font-v1";
const TEXT_LAYOUT_SYNC_KEY = "tamakoko-text-layout-sync-v1";
const DOGAM_NAN_FIX_KEY = "tamakoko-dogam-nan-fix-v1";
const TEXT_MIRROR_KEY = "tamakoko-text-mirror-v2";
const GUEST_TITLE_MATCH_KEY = "tamakoko-guest-title-match-dogam-v3";
const GUEST_FLOW_FIX_KEY = "tamakoko-guest-flow-fix-v1";
const GUEST_SHRINK_FIX_KEY = "tamakoko-guest-shrink-fix-v1";
const GUEST_TEXT_SPLIT_KEY = "tamakoko-guest-text-split-v1";
const GUEST_INTRO_KEY = "tamakoko-guest-intro-v1";
const DOGAM_FREEZE_KEY = "tamakoko-dogam-freeze-v1";
const DOGAM_FONT_PX_CLEAR_KEY = "tamakoko-dogam-font-px-clear-v1";
const DOGAM_TEXT_LOCK_KEY = "tamakoko-dogam-text-lock-v1";
const HERO_NO_POS_KEY = "tamakoko-hero-no-pos-v2";
const DOGAM_TEXT_SELS = [".dogam-no", ".dogam-name", ".dogam-tags", ".dogam-blurb", ".growth"];
const DOGAM_TEXT_LOCK = {
  ".dogam-no": { left: "-1.8509%", top: "4.2434%", width: "100%" },
  ".dogam-name": { left: "-2.4849%", top: "10.4101%", width: "100%", fontSize: "3.7020cqw" },
  ".dogam-tags": { left: "-2.0966%", top: "31.0034%", width: "100%" },
  ".dogam-blurb": { left: "-2.1127%", top: "41.4724%", width: "100%", fontSize: "1.3720cqw" },
  ".growth": { left: "-2.9625%", top: "59.6866%", width: "99.9926%", height: "39.3668%" },
};
const DOGAM_SPRITE_SEED = {
  ".dogam-hero": { width: "29.7614cqw", height: "47.8085cqh" },
  ".dogam-hero img@@0": { spriteX: "-5.7930px", spriteY: "2.1211px" },
  ".dogam-hero img@@1": { spriteX: "-5.7930px", spriteY: "6.3984px" },
  ".dogam-hero img@@2": { spriteX: "-5.7930px", spriteY: "2.1211px" },
  ".dogam-hero img@@3": { spriteX: "-5.7930px", spriteY: "2.1211px" },
  ".dogam-hero img@@4": { spriteX: "-8.6680px", spriteY: "2.2383px" },
  ".dogam-hero img@@5": { spriteX: "-7.7891px", spriteY: "2.2461px" },
  ".dogam-grid": { spriteY: "-11px" },
  ".growth-chip": { spriteX: "2.8359px", spriteY: "2.1836px" },
  '.growth button[data-stage="0"] img@@0': { spriteY: "1px" },
  '.growth button[data-stage="0"] img@@1': { spriteY: "3px" },
  '.growth button[data-stage="0"] img@@2': { spriteY: "3px" },
  '.growth button[data-stage="0"] img@@3': { spriteY: "3px" },
  '.growth button[data-stage="0"] img@@4': { spriteY: "3px" },
  '.growth button[data-stage="0"] img@@5': { spriteY: "3px" },
  '.growth button[data-stage="1"] img@@0': { spriteY: "0px" },
  '.growth button[data-stage="1"] img@@1': { spriteY: "2px" },
  '.growth button[data-stage="1"] img@@2': { spriteY: "2px" },
  '.growth button[data-stage="1"] img@@3': { spriteY: "2px" },
  '.growth button[data-stage="1"] img@@4': { spriteY: "2px" },
  '.growth button[data-stage="1"] img@@5': { spriteY: "2px" },
  '.growth button[data-stage="2"] img@@0': { spriteY: "2px" },
  '.growth button[data-stage="2"] img@@1': { spriteY: "5px" },
  '.growth button[data-stage="2"] img@@2': { spriteY: "5px" },
  '.growth button[data-stage="2"] img@@3': { spriteY: "5px" },
  '.growth button[data-stage="2"] img@@4': { spriteY: "5px" },
  '.growth button[data-stage="2"] img@@5': { spriteY: "5px" },
  '.growth button[data-stage="3"] img@@0': { spriteX: "1.6641px", spriteY: "-3.8203px" },
  '.growth button[data-stage="3"] img@@1': { spriteX: "-1px", spriteY: "-6.5156px" },
  '.growth button[data-stage="3"] img@@2': { spriteX: "0.1367px", spriteY: "-6.5977px" },
  '.growth button[data-stage="3"] img@@3': { spriteX: "3.1406px", spriteY: "-5.6016px" },
  '.growth button[data-stage="3"] img@@4': { spriteX: "3.8789px", spriteY: "-6.8750px" },
  '.growth button[data-stage="3"] img@@5': { spriteX: "-2px", spriteY: "-6.6016px" },
};

const TARGETS = [
  { sel: ".left", name: "로고" },
  { sel: ".stats-card", name: "Stats" },
  { sel: ".stats-face", name: "따끈치 얼굴" },
  { sel: ".lv-num", name: "레벨" },
  { sel: ".score-num", name: "점수" },
  { sel: ".gauge-happy", name: "Happy 게이지" },
  { sel: ".gauge-angry", name: "Angry 게이지" },
  { sel: ".gauge-anxiety", name: "Anxiety 게이지" },
  { sel: ".music", name: "뮤직" },
  { sel: ".music-play", name: "뮤직 재생버튼" },
  { sel: ".music-seek", name: "뮤직 재생바" },
  { sel: ".welcome", name: "웰컴" },
  { sel: ".point", name: "Point" },
  { sel: ".glitter-left", name: "반짝이 왼쪽" },
  { sel: ".glitter-right", name: "반짝이 오른쪽" },
  { sel: ".watch-clock", name: "시계 시간" },
  { sel: '.nav-btn[data-page="home"]', name: "홈 버튼" },
  { sel: '.nav-btn[data-page="dogam"]', name: "도감 버튼" },
  { sel: '.nav-btn[data-page="guestbook"]', name: "방명록 버튼" },
  { sel: ".room", name: "방" },
  { sel: ".pet", name: "따끈치 기본 위치" },
  { sel: ".item-door", name: "문" },
  { sel: ".item-window", name: "창문" },
  { sel: ".item-day", name: "달력" },
  { sel: ".item-art", name: "그림" },
  { sel: ".item-watch", name: "시계" },
  { sel: ".item-snowball", name: "스노우볼" },
  { sel: ".item-lamp", name: "램프" },
  { sel: ".item-radio", name: "라디오" },
  { sel: ".item-bed", name: "침대" },
  { sel: ".item-trash", name: "쓰레기통" },
  { sel: ".item-sketch", name: "스케치북" },
  { sel: '.tama-btn[data-mood="angry"]', name: "Angry 버튼" },
  { sel: '.tama-btn[data-mood="happy"]', name: "Happy 버튼" },
  { sel: '.tama-btn[data-mood="sad"]', name: "Sad 버튼" },
  { sel: ".file-lucky", name: "행운의 메시지" },
  { sel: ".file-mind", name: "마음을 다스리는 법" },
  { sel: ".file-cat", name: "고양이 파일" },
  { sel: ".use-tip", name: "사용방법" },
  { sel: ".guest-logo", name: "방명록 로고" },
  { sel: ".guest-intro", name: "방명록 문구" },
  { sel: ".guest-form", name: "방명록 입력칸" },
  { sel: ".guest-submit", name: "남기기 버튼" },
  { sel: ".guest-list", name: "방명록 글 목록", kind: "listY", axis: "y" },
  { sel: ".dogam-hero", name: "도감 전체샷", kind: "hero", move: "dbl" },
  { sel: ".dogam-hero img", name: "전체샷 캐릭터", kind: "heroSprite", host: ".dogam-hero" },
  { sel: ".dogam-no", name: "도감 번호", kind: "type" },
  { sel: ".dogam-name", name: "도감 이름", kind: "type" },
  { sel: ".dogam-tags", name: "도감 태그", kind: "tags" },
  { sel: ".dogam-blurb", name: "도감 설명", kind: "type" },
  { sel: ".growth", name: "성장 도감", kind: "box", move: "dbl" },
  { sel: ".growth-chip", name: "단계 라벨", kind: "growthChip", host: ".growth" },
  { sel: '.growth button[data-stage="0"] img', name: "알 이미지", kind: "growthSprite", host: ".growth", varName: "--egg-sprite-y", axis: "y" },
  { sel: '.growth button[data-stage="1"] img', name: "아기 이미지", kind: "growthSprite", host: ".growth", varName: "--baby-sprite-y", axis: "y" },
  { sel: '.growth button[data-stage="2"] img', name: "청소년 이미지", kind: "growthSprite", host: ".growth", varName: "--teen-sprite-y", axis: "y" },
  { sel: '.growth button[data-stage="3"] img', name: "성체 이미지", kind: "growthSprite", host: ".growth", varName: "--adult-sprite-y", varX: "--adult-sprite-x" },
  { sel: ".dogam-grid", name: "라인업 이미지", kind: "shelf", axis: "y" },
];

const stage = document.querySelector(".stage");
const hud = buildHud();
const openBtn = buildOpenBtn();
let selected = null;
let drag = null;
let history = [];
let historyIndex = -1;

function editing() {
  return document.body.dataset.edit === "on";
}

window.isLayoutEditing = editing;

function stageBox() {
  return stage.getBoundingClientRect();
}

function asCqw(value) {
  if (!value) return "";
  const n = parseFloat(value);
  if (!Number.isFinite(n) || n <= 0) return "";
  const raw = String(value);
  const cqw = raw.includes("cqw") ? n : (n / (stageBox().width || 1920)) * 100;
  if (!Number.isFinite(cqw) || cqw < 0.35 || cqw > 6) return "";
  return `${cqw.toFixed(4)}cqw`;
}

function readCqw(el, prop) {
  const raw = prop ? el.style.getPropertyValue(prop) || getComputedStyle(el).getPropertyValue(prop) : el.style.fontSize || getComputedStyle(el).fontSize;
  const n = parseFloat(raw);
  if (!Number.isFinite(n) || n <= 0) return 1;
  if (String(raw).includes("cqw")) return n;
  return (n / (stageBox().width || 1920)) * 100;
}

function parentBox(el) {
  const parent = el.offsetParent || stage;
  return parent.getBoundingClientRect();
}

function designRect(el) {
  const sr = stageBox();
  const r = el.getBoundingClientRect();
  return {
    x: ((r.left - sr.left) / sr.width) * 1920,
    y: ((r.top - sr.top) / sr.height) * 1080,
    w: (r.width / sr.width) * 1920,
    h: (r.height / sr.height) * 1080,
  };
}

function loadStore() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
  } catch {
    return {};
  }
}

function saveStore(store) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
}

function itemFromEl(el) {
  if (!el) return null;
  return TARGETS.find((t) => t.el === el) || TARGETS.find((t) => el.matches?.(t.sel));
}

function varHost(item) {
  if (item?.host) return document.querySelector(item.host);
  return item?.el;
}

function isKeysTarget(item) {
  return item?.kind === "shelf" || (item?.kind === "growthSprite" && !item.varX);
}

function isVarKind(item) {
  return item?.kind === "shelf" || item?.kind === "growthSprite" || item?.kind === "heroSprite" || item?.kind === "growthChip" || item?.kind === "tags" || item?.kind === "listY";
}

function storeKey(item) {
  if (item?.kind === "growthSprite" || item?.kind === "heroSprite") {
    const idx = window.getDogamIndex?.();
    if (Number.isInteger(idx)) return `${item.sel}@@${idx}`;
  }
  return item.sel;
}

function readRec(store, item) {
  const keyed = store[storeKey(item)];
  if (isValidRec(keyed)) return keyed;
  if (isValidRec(store[item.sel])) return store[item.sel];
  if (isValidRec(store[`${item.sel}@@0`])) return store[`${item.sel}@@0`];
  return null;
}

function applyRecord(el, rec, item) {
  item = item || itemFromEl(el);
  const host = varHost(item);
  if (!el && !host) return;
  if (!rec) {
    if (el) {
      el.style.left = "";
      el.style.top = "";
      el.style.width = "";
      el.style.height = "";
      el.style.right = "";
      el.style.bottom = "";
      el.style.fontSize = "";
      el.style.margin = "";
      el.style.maxWidth = "";
      if (isDogamTarget(item)) {
        el.style.position = "";
        el.style.aspectRatio = "";
        el.style.removeProperty("--hero-dot");
        el.style.removeProperty("--shelf-sprite-y");
      }
      if (item?.kind === "tags") el.style.removeProperty("--tag-font");
      delete el.dataset.boxLock;
      delete el.dataset.canMove;
    }
    if (item?.kind === "growthSprite") {
      host?.style.removeProperty(item.varName);
      if (item.varX) host?.style.removeProperty(item.varX);
    }
    if (item?.kind === "heroSprite") {
      host?.style.removeProperty("--hero-x");
      host?.style.removeProperty("--hero-y");
    }
    if (item?.kind === "growthChip") {
      host?.style.removeProperty("--chip-x");
      host?.style.removeProperty("--chip-y");
    }
    if (item?.kind === "listY") el?.style.removeProperty("--guest-list-y");
    return;
  }
  if (item?.kind === "growthSprite" && host) {
    if (rec.spriteY) host.style.setProperty(item.varName, rec.spriteY);
    if (item.varX && rec.spriteX) host.style.setProperty(item.varX, rec.spriteX);
    return;
  }
  if (item?.kind === "heroSprite" && host) {
    if (rec.spriteX) host.style.setProperty("--hero-x", rec.spriteX);
    if (rec.spriteY) host.style.setProperty("--hero-y", rec.spriteY);
    return;
  }
  if (item?.kind === "growthChip" && host) {
    if (rec.spriteX) host.style.setProperty("--chip-x", rec.spriteX);
    if (rec.spriteY) host.style.setProperty("--chip-y", rec.spriteY);
    return;
  }
  if (item?.kind === "listY" && el) {
    if (rec.spriteY) el.style.setProperty("--guest-list-y", rec.spriteY);
    else el.style.removeProperty("--guest-list-y");
    return;
  }
  const pinned = Boolean(rec.left && rec.top);
  if (pinned) {
    if (isDogamTarget(item) || isGuestTarget(item)) el.style.position = "absolute";
    if (item?.axis !== "y") el.style.left = rec.left;
    el.style.top = rec.top;
    el.style.right = "auto";
    el.style.bottom = "auto";
  }
  if (rec.width) el.style.width = rec.width;
  if (item?.kind === "type" || item?.kind === "tags") {
    el.style.height = "auto";
  } else if (rec.height) {
    el.style.height = rec.height;
    if (item?.kind === "hero") {
      el.style.aspectRatio = "auto";
      el.style.maxHeight = "none";
    }
  } else if (isGuestTarget(item) && !pinned) {
    el.style.height = "";
    delete el.dataset.boxLock;
  }
  if (item?.kind === "tags") {
    const tagFont = asCqw(rec.fontSize);
    if (tagFont) el.style.setProperty("--tag-font", tagFont);
    else el.style.removeProperty("--tag-font");
  } else {
    const font = asCqw(rec.fontSize);
    if (font) el.style.fontSize = font;
    else if (item?.kind === "type") el.style.fontSize = "";
  }
  if (rec.heroDot) el.style.setProperty("--hero-dot", rec.heroDot);
  if (rec.spriteY) el.style.setProperty("--shelf-sprite-y", rec.spriteY);
}

function isFiniteLen(v) {
  return Number.isFinite(parseFloat(v));
}

function isValidRec(rec) {
  if (!rec) return false;
  if ((rec.left || rec.top) && (!isFiniteLen(rec.left) || !isFiniteLen(rec.top))) return false;
  if (rec.width && !isFiniteLen(rec.width)) return false;
  return Boolean(parseFloat(rec.width) > 0.2 || rec.fontSize || rec.spriteY || rec.spriteX || (rec.left && rec.top));
}

function canCapture(el) {
  if (!el) return false;
  if (el.closest(".modal")?.hidden) return false;
  if (el.closest(".page-ui")?.hidden) return false;
  if (el.closest(".home-ui") && document.body.dataset.page !== "home") return false;
  const cs = getComputedStyle(el);
  if (cs.display === "none" || cs.visibility === "hidden") return false;
  const r = el.getBoundingClientRect();
  return r.width >= 1 && r.height >= 1;
}

function containingEl(el) {
  if (el.classList.contains("dogam-hero-no")) {
    return el.closest(".dogam-hero") || el.offsetParent || stage;
  }
  if (el.classList.contains("dogam-hero")) {
    return el.closest(".dogam-detail") || el.offsetParent || stage;
  }
  if (el.closest(".dogam-meta")) return el.closest(".dogam-meta");
  if (el.classList.contains("guest-list")) {
    return el.closest(".guestbook-body") || el.offsetParent || stage;
  }
  if (el.closest(".guest-pane") && !el.classList.contains("guest-title")) {
    return el.closest(".guest-pane");
  }
  if (el.closest(".page-window")) return el.closest(".page-window");
  return el.offsetParent || stage;
}

function sizeHeroBox(el, w, h) {
  const sr = stageBox();
  el.style.aspectRatio = "auto";
  el.style.maxHeight = "none";
  el.style.width = `${((Math.max(80, w) / sr.width) * 100).toFixed(4)}cqw`;
  el.style.height = `${((Math.max(80, h) / sr.height) * 100).toFixed(4)}cqh`;
}

function isPinned(el) {
  return getComputedStyle(el).position === "absolute" && Boolean(el.style.left || el.style.top);
}

function pinAbsolute(el) {
  if (isPinned(el)) return;
  const parent = containingEl(el);
  const pr = parent.getBoundingClientRect();
  const r = el.getBoundingClientRect();
  if (pr.width < 1 || pr.height < 1) return;
  el.style.position = "absolute";
  el.style.left = `${(((r.left - pr.left) / pr.width) * 100).toFixed(4)}%`;
  el.style.top = `${(((r.top - pr.top) / pr.height) * 100).toFixed(4)}%`;
  el.style.right = "auto";
  el.style.bottom = "auto";
  el.dataset.boxLock = "1";
}

function snapshot(el) {
  return snapshotFor(itemFromEl(el), el);
}

function snapshotFor(item, el) {
  if (item?.kind === "growthSprite") {
    const host = varHost(item);
    const rec = {};
    const y = host?.style.getPropertyValue(item.varName);
    if (y) rec.spriteY = y;
    if (item.varX) {
      const x = host?.style.getPropertyValue(item.varX);
      if (x) rec.spriteX = x;
    }
    return rec;
  }
  if (item?.kind === "heroSprite") {
    const host = varHost(item);
    const rec = {};
    const x = host?.style.getPropertyValue("--hero-x");
    const y = host?.style.getPropertyValue("--hero-y");
    if (x) rec.spriteX = x;
    if (y) rec.spriteY = y;
    return rec;
  }
  if (item?.kind === "growthChip") {
    const host = varHost(item);
    const rec = {};
    const x = host?.style.getPropertyValue("--chip-x");
    const y = host?.style.getPropertyValue("--chip-y");
    if (x) rec.spriteX = x;
    if (y) rec.spriteY = y;
    return rec;
  }
  if (item?.kind === "listY") {
    const rec = {};
    const y = el?.style.getPropertyValue("--guest-list-y");
    if (y) rec.spriteY = y;
    return rec;
  }
  if (el?.style.left || el?.style.top || el?.style.width) {
    const rec = {};
    if (el.style.left) rec.left = el.style.left;
    if (el.style.top) rec.top = el.style.top;
    if (el.style.width) rec.width = el.style.width;
    if (el.style.height) rec.height = el.style.height;
    const font = asCqw(el.style.fontSize);
    if (font) rec.fontSize = font;
    return rec;
  }
  const pinned = isPinned(el);
  if (pinned) {
    const parent = containingEl(el);
    const pr = parent?.getBoundingClientRect();
    if (!pr || pr.width < 1 || pr.height < 1) return {};
  }
  if (!pinned) {
    const rec = {};
    if (item?.kind === "tags") {
      const tagFont = asCqw(el.style.getPropertyValue("--tag-font"));
      if (tagFont) rec.fontSize = tagFont;
    } else {
      const font = asCqw(el.style.fontSize);
      if (font) rec.fontSize = font;
    }
    if (el.style.width) rec.width = el.style.width;
    if (item?.kind !== "type" && item?.kind !== "tags" && el.style.height) rec.height = el.style.height;
    const heroDot = el.style.getPropertyValue("--hero-dot");
    if (heroDot) rec.heroDot = heroDot;
    const spriteY = el.style.getPropertyValue("--shelf-sprite-y");
    if (spriteY) rec.spriteY = spriteY;
    return rec;
  }
  const pr = containingEl(el).getBoundingClientRect();
  const r = el.getBoundingClientRect();
  const rec = {
    left: `${(((r.left - pr.left) / pr.width) * 100).toFixed(4)}%`,
    top: `${(((r.top - pr.top) / pr.height) * 100).toFixed(4)}%`,
    width: `${((r.width / pr.width) * 100).toFixed(4)}%`,
  };
  if (item?.kind !== "type" && item?.kind !== "tags" && (el.style.height || item?.kind === "hero")) {
    rec.height = el.style.height || `${((r.height / pr.height) * 100).toFixed(4)}%`;
  }
  if (item?.kind === "tags") {
    const tagFont = asCqw(el.style.getPropertyValue("--tag-font"));
    if (tagFont) rec.fontSize = tagFont;
  } else {
    const font = asCqw(el.style.fontSize);
    if (font) rec.fontSize = font;
  }
  const heroDot = el.style.getPropertyValue("--hero-dot");
  if (heroDot) rec.heroDot = heroDot;
  return rec;
}

function captureAll() {
  const out = {};
  TARGETS.forEach((item) => {
    if (!canCapture(item.el)) return;
    const rec = snapshot(item.el);
    if (isValidRec(rec)) out[item.sel] = rec;
  });
  return out;
}

function mergeRec(prev, rec) {
  if (!prev || !rec) return rec;
  if (prev.spriteX && !rec.spriteX) rec.spriteX = prev.spriteX;
  if (prev.spriteY && !rec.spriteY) rec.spriteY = prev.spriteY;
  if (prev.heroDot && !rec.heroDot) rec.heroDot = prev.heroDot;
  if (prev.left && !rec.left) rec.left = prev.left;
  if (prev.top && !rec.top) rec.top = prev.top;
  return rec;
}

function persist(el) {
  const item = itemFromEl(el);
  if (!item || isDogamTarget(item)) return;
  if (item.sel === ".guest-intro" && !el?.style.left) return;
  if (!isVarKind(item) && !canCapture(el)) return;
  const rec = snapshotFor(item, el);
  if (!isValidRec(rec)) return;
  const store = loadStore();
  store[storeKey(item)] = mergeRec(store[storeKey(item)], rec);
  saveStore(store);
  if (item.sel === ".pet") {
    window.setPetHome?.(parseFloat(rec.left), parseFloat(rec.top));
  }
}

function persistAll() {
  const store = loadStore();
  TARGETS.forEach((item) => {
    const el = document.querySelector(item.sel);
    if (el) item.el = el;
    if (isDogamTarget(item)) return;
    if (isGuestTarget(item) && document.body.dataset.page !== "guestbook") return;
    if (item.sel === ".guest-intro" && !el?.style.left) return;
    if (!isVarKind(item) && !canCapture(el)) return;
    const rec = snapshotFor(item, el || varHost(item));
    if (isValidRec(rec)) store[storeKey(item)] = mergeRec(store[storeKey(item)], rec);
  });
  saveStore(store);
}

function applyTarget(item, rec) {
  const el = document.querySelector(item.sel) || item.el;
  if (el) item.el = el;
  const host = varHost(item);
  if (item.sel === ".pet") {
    if (!rec || !el) return;
    window.setPetHome?.(parseFloat(rec.left), parseFloat(rec.top));
    if (rec.width) el.style.width = rec.width;
    return;
  }
  if (isVarKind(item)) {
    applyRecord(el || host, rec, item);
    return;
  }
  if (!el) return;
  applyRecord(el, rec, item);
}

function applyAll(store) {
  TARGETS.forEach((item) => {
    const rec = readRec(store, item);
    if (isDogamTarget(item) && !isValidRec(rec)) return;
    applyTarget(item, isValidRec(rec) ? rec : null);
  });
  saveStore(store);
}

function applySaved() {
  let store = loadStore();
  if (localStorage.getItem(LAYOUT_SEED_KEY) !== "1") {
    store = LAYOUT_SEED;
    saveStore(store);
    localStorage.setItem(LAYOUT_SEED_KEY, "1");
  }
  let patched = false;
  Object.entries(LAYOUT_SEED).forEach(([key, rec]) => {
    if (!isValidRec(store[key])) {
      store[key] = rec;
      patched = true;
    }
  });
  Object.keys(store).forEach((key) => {
    if (key.startsWith(".radio-hits")) {
      delete store[key];
      patched = true;
    }
  });
  Object.entries(GUEST_SEED).forEach(([key, rec]) => {
    if (!isValidRec(store[key]) && isValidRec(rec)) {
      store[key] = rec;
      patched = true;
    }
  });
  Object.entries(DOGAM_SPRITE_SEED).forEach(([key, rec]) => {
    if (!isValidRec(store[key]) && isValidRec(rec)) {
      store[key] = rec;
      patched = true;
    }
  });
  if (localStorage.getItem(TITLE_ALIGN_KEY) !== "1") {
    localStorage.setItem(TITLE_ALIGN_KEY, "1");
  }
  if (localStorage.getItem(WATCH_CLOCK_NUDGE_KEY) !== "1") {
    store[".watch-clock"] = { ...LAYOUT_SEED[".watch-clock"] };
    localStorage.setItem(WATCH_CLOCK_NUDGE_KEY, "1");
    patched = true;
  }
  if (localStorage.getItem(GUEST_LAYOUT_RESET_KEY) !== "1") {
    Object.entries(GUEST_SEED).forEach(([key, rec]) => {
      store[key] = rec;
    });
    Object.keys(store).forEach((key) => {
      if (key.startsWith(".guest-") && !GUEST_SEED[key]) delete store[key];
    });
    localStorage.setItem(GUEST_LAYOUT_RESET_KEY, "1");
    patched = true;
  }
  if (localStorage.getItem(DOGAM_LAYOUT_RESET_KEY) !== "1") {
    Object.keys(store).forEach((key) => {
      if (key.startsWith(".dogam-") || key === ".growth") {
        delete store[key];
        patched = true;
      }
    });
    localStorage.setItem(DOGAM_LAYOUT_RESET_KEY, "1");
  }
  if (localStorage.getItem(HERO_NO_RESET_KEY) !== "1") {
    delete store[".dogam-hero-no"];
    localStorage.setItem(HERO_NO_RESET_KEY, "1");
    patched = true;
  }
  if (localStorage.getItem(TAG_FONT_RESET_KEY) !== "1") {
    if (store[".dogam-tags"]?.fontSize) {
      delete store[".dogam-tags"].fontSize;
      if (!isValidRec(store[".dogam-tags"])) delete store[".dogam-tags"];
      patched = true;
    }
    localStorage.setItem(TAG_FONT_RESET_KEY, "1");
  }
  if (localStorage.getItem(TEXT_LAYOUT_SYNC_KEY) !== "1") {
    TARGETS.forEach((item) => {
      if (!isDogamTarget(item) || item.kind === "growthSprite" || item.kind === "heroSprite" || item.kind === "shelf") return;
      const from = store[`${item.sel}@@0`];
      if (isValidRec(from)) store[item.sel] = from;
    });
    localStorage.setItem(TEXT_LAYOUT_SYNC_KEY, "1");
    patched = true;
  }
  if (localStorage.getItem(DOGAM_NAN_FIX_KEY) !== "1") {
    Object.keys(store).forEach((key) => {
      if (!isValidRec(store[key])) {
        delete store[key];
        patched = true;
      }
    });
    const goodTags = [1, 2, 3, 4, 5, 0]
      .map((i) => store[`.dogam-tags@@${i}`])
      .find(isValidRec) || (isValidRec(store[".dogam-tags"]) ? store[".dogam-tags"] : null);
    if (goodTags) {
      if (!isValidRec(store[".dogam-tags@@0"])) store[".dogam-tags@@0"] = { ...goodTags };
      if (!isValidRec(store[".dogam-tags"])) store[".dogam-tags"] = { ...goodTags };
      patched = true;
    }
    localStorage.setItem(DOGAM_NAN_FIX_KEY, "1");
  }
  if (localStorage.getItem(TEXT_MIRROR_KEY) !== "1") {
    DOGAM_TEXT_SELS.forEach((sel) => {
      const from = isValidRec(store[`${sel}@@0`]) ? store[`${sel}@@0`] : store[sel];
      if (!isValidRec(from)) return;
      store[sel] = { ...from };
      for (let i = 0; i <= 5; i += 1) store[`${sel}@@${i}`] = { ...from };
      patched = true;
    });
    localStorage.setItem(TEXT_MIRROR_KEY, "1");
  }
  if (localStorage.getItem(GUEST_TITLE_MATCH_KEY) !== "1") {
    delete store[".guest-title"];
    const title = document.querySelector(".guest-title");
    if (title) {
      title.style.left = "";
      title.style.top = "";
      title.style.width = "";
      title.style.height = "";
      title.style.position = "";
    }
    localStorage.setItem(GUEST_TITLE_MATCH_KEY, "1");
    patched = true;
  }
  if (localStorage.getItem(GUEST_SHRINK_FIX_KEY) !== "1") {
    Object.entries(GUEST_SEED).forEach(([sel, seed]) => {
      const rec = isValidRec(store[sel]) ? { ...store[sel] } : { ...seed };
      if (seed.width) rec.width = seed.width;
      else delete rec.width;
      delete rec.height;
      store[sel] = rec;
      const el = document.querySelector(sel);
      if (el) {
        el.style.height = "";
        el.style.width = rec.width;
        if (rec.left) el.style.left = rec.left;
        if (rec.top) el.style.top = rec.top;
      }
    });
    localStorage.setItem(GUEST_SHRINK_FIX_KEY, "1");
    patched = true;
  }
  if (localStorage.getItem(GUEST_TEXT_SPLIT_KEY) !== "1") {
    const form = store[".guest-form"];
    const oldTop = parseFloat(form?.top);
    if (!isValidRec(form) || !Number.isFinite(oldTop) || oldTop < 36) {
      store[".guest-form"] = {
        ...(isValidRec(form) ? form : {}),
        top: GUEST_SEED[".guest-form"].top,
        width: GUEST_SEED[".guest-form"].width,
        left: form?.left || GUEST_SEED[".guest-form"].left,
      };
      delete store[".guest-form"].height;
    }
    [".guest-heading", ".guest-help"].forEach((sel) => {
      delete store[sel];
      const el = document.querySelector(sel);
      if (!el) return;
      el.style.left = "";
      el.style.top = "";
      el.style.width = "";
      el.style.height = "";
      el.style.position = "";
    });
    localStorage.setItem(GUEST_TEXT_SPLIT_KEY, "1");
    patched = true;
  }
  if (localStorage.getItem(GUEST_INTRO_KEY) !== "1") {
    [".guest-heading", ".guest-help"].forEach((sel) => {
      delete store[sel];
      const el = document.querySelector(sel);
      if (!el) return;
      el.style.left = "";
      el.style.top = "";
      el.style.width = "";
      el.style.height = "";
      el.style.position = "";
      el.classList.remove("layout-target", "is-selected");
    });
    localStorage.setItem(GUEST_INTRO_KEY, "1");
    patched = true;
  }
  if (localStorage.getItem(GUEST_FLOW_FIX_KEY) !== "1") {
    [".guest-heading", ".guest-help", ".guest-list", ".guest-title", ".guest-name-label", ".guest-text-label"].forEach((sel) => {
      delete store[sel];
      const el = document.querySelector(sel);
      if (!el) return;
      el.style.left = "";
      el.style.top = "";
      el.style.width = "";
      el.style.height = "";
      el.style.right = "";
      el.style.bottom = "";
      el.style.position = "";
      el.style.fontSize = "";
      el.style.margin = "";
      el.classList.remove("layout-target", "is-selected");
      delete el.dataset.boxLock;
    });
    localStorage.setItem(GUEST_FLOW_FIX_KEY, "1");
    patched = true;
  }
  if (localStorage.getItem(DOGAM_FREEZE_KEY) !== "1") {
    localStorage.setItem(DOGAM_FREEZE_KEY, "1");
  }
  if (localStorage.getItem(DOGAM_FONT_PX_CLEAR_KEY) !== "1") {
    DOGAM_TEXT_SELS.forEach((sel) => {
      [`${sel}`, `${sel}@@0`, `${sel}@@1`, `${sel}@@2`, `${sel}@@3`, `${sel}@@4`, `${sel}@@5`].forEach((key) => {
        if (!store[key]?.fontSize) return;
        delete store[key].fontSize;
        if (!isValidRec(store[key])) delete store[key];
        patched = true;
      });
    });
    localStorage.setItem(DOGAM_FONT_PX_CLEAR_KEY, "1");
  }
  if (localStorage.getItem(DOGAM_TEXT_LOCK_KEY) !== "1") {
    Object.entries(DOGAM_TEXT_LOCK).forEach(([sel, rec]) => {
      store[sel] = { ...rec };
      for (let i = 0; i <= 5; i += 1) store[`${sel}@@${i}`] = { ...rec };
    });
    store[".dogam-hero"] = { width: "29.7614cqw", height: "47.8085cqh" };
    localStorage.setItem(DOGAM_TEXT_LOCK_KEY, "1");
    patched = true;
  }
  if (localStorage.getItem(HERO_NO_POS_KEY) !== "1") {
    [".dogam-hero-no", ".dogam-hero-no@@0", ".dogam-hero-no@@1", ".dogam-hero-no@@2", ".dogam-hero-no@@3", ".dogam-hero-no@@4", ".dogam-hero-no@@5"].forEach((key) => {
      delete store[key];
    });
    localStorage.setItem(HERO_NO_POS_KEY, "1");
    patched = true;
  }
  if (patched) saveStore(store);
  TARGETS.forEach((item) => {
    const rec = readRec(store, item);
    if (isValidRec(rec)) applyTarget(item, rec);
  });
}

function pushHistory() {
  persistAll();
  const snap = JSON.stringify(loadStore());
  if (snap === history[historyIndex]) return;
  history = history.slice(0, historyIndex + 1);
  history.push(snap);
  historyIndex = history.length - 1;
  refreshHud();
}

function isGuestTarget(item) {
  return item?.sel?.startsWith(".guest-");
}

function isDogamTarget(item) {
  return item?.sel?.startsWith(".dogam-") || item?.sel?.startsWith(".growth");
}

function needsLock(item) {
  return isGuestTarget(item) || isDogamTarget(item);
}

function resetGuestLayout() {
  const store = loadStore();
  TARGETS.filter(isGuestTarget).forEach((item) => {
    const rec = GUEST_SEED[item.sel] || null;
    if (rec) store[item.sel] = { ...rec };
    else delete store[item.sel];
    applyTarget(item, rec);
  });
  saveStore(store);
}

function resetDogamLayout() {
  return;
}

function undo() {
  if (historyIndex > 0) {
    historyIndex -= 1;
    applyAll(JSON.parse(history[historyIndex]));
    refreshHud();
  }
}

function redo() {
  if (historyIndex >= history.length - 1) return;
  historyIndex += 1;
  applyAll(JSON.parse(history[historyIndex]));
  refreshHud();
}

function lockBox(el) {
  if (el.dataset.boxLock === "1") return;
  const item = itemFromEl(el);
  const pr = containingEl(el).getBoundingClientRect();
  const r = el.getBoundingClientRect();
  if (!el.style.width) el.style.width = `${((r.width / pr.width) * 100).toFixed(4)}%`;
  if (item?.kind !== "type" && !el.style.height) {
    el.style.height = `${((r.height / pr.height) * 100).toFixed(4)}%`;
  }
  el.dataset.boxLock = "1";
}

function setPos(el, leftPx, topPx, widthPx) {
  const item = itemFromEl(el);
  if (isGuestTarget(item)) pinAbsolute(el);
  if (isDogamTarget(item) && !isKeysTarget(item)) pinAbsolute(el);
  const pr = containingEl(el).getBoundingClientRect();
  if (item?.axis !== "y") {
    el.style.left = `${(leftPx / pr.width) * 100}%`;
  }
  el.style.top = `${(topPx / pr.height) * 100}%`;
  el.style.right = "auto";
  el.style.bottom = "auto";
  if (widthPx != null) el.style.width = `${(widthPx / pr.width) * 100}%`;
}

function select(el) {
  if (selected && selected !== el) delete selected.dataset.canMove;
  selected?.classList.remove("is-selected");
  selected = el;
  selected?.classList.add("is-selected");
  refreshHud();
}

function refreshHud() {
  const nameEl = hud.querySelector("[data-name]");
  const coordEl = hud.querySelector("[data-coords]");
  const undoBtn = hud.querySelector("[data-undo]");
  const redoBtn = hud.querySelector("[data-redo]");
  undoBtn.disabled = historyIndex <= 0;
  redoBtn.disabled = historyIndex >= history.length - 1;
  if (!selected) {
    nameEl.textContent = "아이템을 눌러 옮기세요";
    coordEl.textContent = "X -  Y -  W -";
    return;
  }
  const item = itemFromEl(selected);
  const d = designRect(selected);
  nameEl.textContent = item ? item.name : selected.className;
  coordEl.textContent = `X ${d.x.toFixed(1)}   Y ${d.y.toFixed(1)}   W ${d.w.toFixed(1)}   H ${d.h.toFixed(1)}`;
}

function setEditing(on) {
  if (!on) persistAll();
  document.body.dataset.edit = on ? "on" : "off";
  hud.hidden = !on;
  openBtn.hidden = on;
  localStorage.setItem(EDIT_PREF, on ? "on" : "off");
  if (!on) select(null);
  else {
    bindTargets();
    applySaved();
    refreshHud();
  }
  window.dispatchEvent(new CustomEvent("tamakoko:edit", { detail: on }));
}

function isEditableNode(el) {
  if (!el || el === document || el === window) return false;
  if (!(el instanceof Element)) el = el.parentElement;
  if (!el) return false;
  if (el.isContentEditable) return true;
  return Boolean(el.closest?.("input, textarea, [contenteditable='true'], [contenteditable='']"));
}

function isTypingContext(event) {
  if (event.isComposing || event.keyCode === 229) return true;
  if (event.key === "Process" || event.key === "Unidentified") return true;
  if (/[ㄱ-ㅎㅏ-ㅣ가-힣]/.test(event.key || "")) return true;
  if (isEditableNode(event.target) || isEditableNode(document.activeElement)) return true;
  return false;
}

function buildHud() {
  const el = document.createElement("div");
  el.className = "layout-hud";
  el.innerHTML = `
    <div class="layout-hud-row">
      <p><strong>배치 편집</strong> · Shift+E</p>
      <p data-name>아이템을 눌러 옮기세요</p>
      <p class="layout-coords" data-coords>X -  Y -  W -</p>
      <div class="layout-hud-actions">
        <button type="button" class="ghost" data-undo>되돌리기</button>
        <button type="button" class="ghost" data-redo>다시 실행</button>
        <button type="button" data-copy>CSS 복사</button>
        <button type="button" class="ghost" data-clear>초기화</button>
        <button type="button" class="ghost" data-toggle>미리보기</button>
      </div>
    </div>
  `;
  document.body.appendChild(el);
  return el;
}

function buildOpenBtn() {
  const el = document.createElement("button");
  el.type = "button";
  el.className = "layout-edit-open";
  el.textContent = "편집 켜기";
  el.addEventListener("click", () => setEditing(true));
  document.body.appendChild(el);
  return el;
}

function cssLine(sel, rec, el) {
  const sr = stageBox();
  const pr = parentBox(el);
  const r = el.getBoundingClientRect();
  const sameStage = Math.abs(pr.left - sr.left) < 1 && Math.abs(pr.width - sr.width) < 1;
  if (sameStage) {
    const x = Math.round(((r.left - sr.left) / sr.width) * 1920);
    const y = Math.round(((r.top - sr.top) / sr.height) * 1080);
    const w = Math.round((r.width / sr.width) * 1920);
    return `${sel} {\n  left: calc(${x} / 1920 * 100%);\n  top: calc(${y} / 1080 * 100%);\n  width: calc(${w} / 1920 * 100%);\n}`;
  }
  return `${sel} {\n  left: ${rec.left};\n  top: ${rec.top};\n  width: ${rec.width};\n}`;
}

async function copyCss() {
  const chunks = TARGETS.filter((item) => item.el).map((item) =>
    cssLine(item.sel, snapshot(item.el), item.el),
  );
  const text = `/* 편집 모드에서 복사한 위치 */\n${chunks.join("\n\n")}\n`;
  try {
    await navigator.clipboard.writeText(text);
    hud.querySelector("[data-copy]").textContent = "복사됨!";
    setTimeout(() => {
      hud.querySelector("[data-copy]").textContent = "CSS 복사";
    }, 1400);
  } catch {
    window.prompt("복사해서 positions.css에 붙여넣으세요", text);
  }
}

function resizeEdge(event, rect) {
  const pad = 10;
  const east = event.clientX >= rect.right - pad;
  const south = event.clientY >= rect.bottom - pad;
  if (east && south) return "se";
  if (east) return "e";
  if (south) return "s";
  return "";
}

function onPointerDown(event) {
  if (!editing()) return;
  if (event.target.closest(".layout-hud, .layout-edit-open")) return;
  const typing = event.target.closest("input, textarea, [contenteditable='true']");
  const hit = event.target.closest(".layout-target");
  const already = selected === hit;
  if (hit) select(hit);
  if (!hit || event.target.closest(".music-seek")) return;
  const item = itemFromEl(hit);
  if (isGuestTarget(item)) {
    event.preventDefault();
    if (document.activeElement?.blur) document.activeElement.blur();
    return;
  }
  const r = hit.getBoundingClientRect();
  if (already && item?.kind === "hero" && hit.dataset.canMove !== "1") {
    event.preventDefault();
    event.stopPropagation();
    drag = {
      mode: "resize",
      edge: "se",
      el: hit,
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      width: r.width,
      height: r.height,
      moved: false,
    };
    hit.classList.add("is-dragging");
    hit.setPointerCapture(event.pointerId);
    return;
  }
  if (item?.kind === "heroSprite" || item?.kind === "growthChip" || item?.varX) {
    event.preventDefault();
    event.stopPropagation();
    const host = varHost(item);
    const xName = item?.kind === "growthChip" ? "--chip-x" : item.varX || "--hero-x";
    const yName = item?.kind === "growthChip" ? "--chip-y" : item.varName || "--hero-y";
    drag = {
      mode: "spriteXY",
      el: hit,
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      xName,
      yName,
      originX: parseFloat(host?.style.getPropertyValue(xName)) || 0,
      originY: parseFloat(host?.style.getPropertyValue(yName)) || 0,
      moved: false,
    };
    hit.classList.add("is-dragging");
    hit.setPointerCapture(event.pointerId);
    return;
  }
  if (isKeysTarget(item)) return;
  if (item?.kind === "type" || item?.kind === "tags") return;
  if (item?.move === "dbl") {
    if (event.detail >= 2) hit.dataset.canMove = "1";
    if (hit.dataset.canMove !== "1") return;
  } else if (typing && typing !== hit) {
    return;
  }
  event.preventDefault();
  event.stopPropagation();
  const pr = containingEl(hit).getBoundingClientRect();
  drag = {
    el: hit,
    pointerId: event.pointerId,
    startX: event.clientX,
    startY: event.clientY,
    offsetX: event.clientX - r.left,
    offsetY: event.clientY - r.top,
    width: r.width,
    parent: pr,
    moved: false,
  };
  hit.classList.add("is-dragging");
  hit.setPointerCapture(event.pointerId);
}

function onPointerMove(event) {
  if (!drag || event.pointerId !== drag.pointerId) return;
  if (Math.abs(event.clientX - drag.startX) + Math.abs(event.clientY - drag.startY) > 2) {
    drag.moved = true;
  }
  if (drag.mode === "resize") {
    const nextW = Math.max(80, drag.width + (event.clientX - drag.startX));
    const nextH = Math.max(80, drag.height + (event.clientY - drag.startY));
    sizeHeroBox(drag.el, nextW, nextH);
    refreshHud();
    return;
  }
  if (drag.mode === "spriteXY") {
    const host = varHost(itemFromEl(drag.el));
    host?.style.setProperty(drag.xName, `${drag.originX + (event.clientX - drag.startX)}px`);
    host?.style.setProperty(drag.yName, `${drag.originY + (event.clientY - drag.startY)}px`);
    refreshHud();
    return;
  }
  const item = TARGETS.find((t) => t.el === drag.el);
  const left =
    item?.axis === "y"
      ? drag.el.getBoundingClientRect().left - drag.parent.left
      : event.clientX - drag.parent.left - drag.offsetX;
  const top = event.clientY - drag.parent.top - drag.offsetY;
  setPos(drag.el, left, top);
  refreshHud();
}

function onPointerUp(event) {
  if (!drag || event.pointerId !== drag.pointerId) return;
  drag.el.classList.remove("is-dragging");
  if (drag.moved) {
    persist(drag.el);
    pushHistory();
    window.__layoutDidDrag = true;
    setTimeout(() => {
      window.__layoutDidDrag = false;
    }, 0);
  }
  drag = null;
}

function nudge(dx, dy) {
  if (!editing() || !selected) return;
  const item = itemFromEl(selected);
  if (item?.kind === "shelf") {
    const cur = parseFloat(selected.style.getPropertyValue("--shelf-sprite-y")) || 0;
    selected.style.setProperty("--shelf-sprite-y", `${cur + dy}px`);
    persist(selected);
    pushHistory();
    refreshHud();
    return;
  }
  if (item?.kind === "growthSprite") {
    const host = varHost(item);
    if (item.varX && dx) {
      const x = parseFloat(host.style.getPropertyValue(item.varX)) || 0;
      host.style.setProperty(item.varX, `${x + dx}px`);
    }
    const cur = parseFloat(host.style.getPropertyValue(item.varName)) || 0;
    host.style.setProperty(item.varName, `${cur + dy}px`);
    persist(selected);
    pushHistory();
    refreshHud();
    return;
  }
  if (item?.kind === "growthChip") {
    const host = varHost(item);
    const x = parseFloat(host.style.getPropertyValue("--chip-x")) || 0;
    const y = parseFloat(host.style.getPropertyValue("--chip-y")) || 0;
    host.style.setProperty("--chip-x", `${x + dx}px`);
    host.style.setProperty("--chip-y", `${y + dy}px`);
    persist(selected);
    pushHistory();
    refreshHud();
    return;
  }
  if (item?.kind === "listY") {
    const cur = parseFloat(selected.style.getPropertyValue("--guest-list-y")) || 0;
    selected.style.setProperty("--guest-list-y", `${cur + dy}px`);
    persist(selected);
    pushHistory();
    refreshHud();
    return;
  }
  if (item?.kind === "heroSprite") {
    const host = varHost(item);
    const x = parseFloat(host.style.getPropertyValue("--hero-x")) || 0;
    const y = parseFloat(host.style.getPropertyValue("--hero-y")) || 0;
    host.style.setProperty("--hero-x", `${x + dx}px`);
    host.style.setProperty("--hero-y", `${y + dy}px`);
    persist(selected);
    pushHistory();
    refreshHud();
    return;
  }
  if (isGuestTarget(item) || isDogamTarget(item)) pinAbsolute(selected);
  const sr = stageBox();
  const parent = containingEl(selected);
  const pw = parent.clientWidth || parent.getBoundingClientRect().width;
  const ph = parent.clientHeight || parent.getBoundingClientRect().height;
  if (dx !== 0 && item?.axis !== "y" && pw) {
    selected.style.left = `${((selected.offsetLeft + (dx * sr.width) / 1920) / pw) * 100}%`;
    selected.style.right = "auto";
  }
  if (dy !== 0 && ph) {
    selected.style.top = `${((selected.offsetTop + (dy * sr.height) / 1080) / ph) * 100}%`;
    selected.style.bottom = "auto";
  }
  persist(selected);
  pushHistory();
  refreshHud();
}

function resize(delta) {
  if (!editing() || !selected) return;
  const item = itemFromEl(selected);
  if (item?.kind === "hero") {
    const r = selected.getBoundingClientRect();
    const sr = stageBox();
    const nextH = Math.max(80, r.height + (delta * sr.height) / 1080);
    sizeHeroBox(selected, r.width, nextH);
    persist(selected);
    pushHistory();
    refreshHud();
    return;
  }
  if (item?.kind === "tags") {
    const cur = readCqw(selected, "--tag-font");
    selected.style.setProperty("--tag-font", `${Math.max(0.35, Math.min(1.6, cur + delta * 0.008)).toFixed(4)}cqw`);
    persist(selected);
    pushHistory();
    refreshHud();
    return;
  }
  if (item?.kind === "type") {
    const cur = readCqw(selected);
    selected.style.fontSize = `${Math.max(0.5, Math.min(5, cur + delta * 0.012)).toFixed(4)}cqw`;
    selected.style.height = "auto";
    selected.style.maxWidth = "100%";
    persist(selected);
    pushHistory();
    refreshHud();
    return;
  }
  const pr = containingEl(selected).getBoundingClientRect();
  const r = selected.getBoundingClientRect();
  const sr = stageBox();
  const next = Math.max(24, r.width + (delta * sr.width) / 1920);
  selected.style.width = `${((next / pr.width) * 100).toFixed(4)}%`;
  persist(selected);
  pushHistory();
  refreshHud();
}

function bindTargets() {
  TARGETS.forEach((item) => {
    const nodes = [...document.querySelectorAll(item.sel)];
    item.el = nodes[0] || null;
    if (isDogamTarget(item)) return;
    nodes.forEach((el) => {
      el.classList.add("layout-target");
      if (item.move === "dbl") el.setAttribute("data-move", "dbl");
    });
  });
}

bindTargets();
applySaved();
pushHistory();
window.persistLayout = persistAll;
window.refreshLayoutTargets = () => {
  const prev = selected ? itemFromEl(selected)?.sel : null;
  bindTargets();
  applySaved();
  if (prev) {
    const item = TARGETS.find((t) => t.sel === prev);
    if (item?.el?.isConnected) select(item.el);
    else select(null);
  }
};

const params = new URLSearchParams(location.search);
setEditing(params.get("edit") === "1");

stage.addEventListener("pointerdown", onPointerDown, true);
stage.addEventListener(
  "dblclick",
  (event) => {
    if (!editing()) return;
    const hit = event.target.closest(".layout-target");
    const item = itemFromEl(hit);
    if (!hit || item?.move !== "dbl") return;
    event.preventDefault();
    hit.dataset.canMove = "1";
    select(hit);
    window.getSelection()?.removeAllRanges();
  },
  true,
);
window.addEventListener("pointermove", onPointerMove);
window.addEventListener("pointerup", onPointerUp);

window.addEventListener(
  "wheel",
  (event) => {
    if (!editing() || !selected) return;
    if (event.target.closest(".layout-hud, .layout-edit-open")) return;
    if (event.target.closest("input, textarea, .guest-list")) return;
    const item = itemFromEl(selected);
    if ((item?.kind === "type" || item?.kind === "tags") && !event.altKey) return;
    event.preventDefault();
    resize(event.deltaY > 0 ? -8 : 8);
  },
  { passive: false },
);

window.addEventListener(
  "keyup",
  (event) => {
    if (event.code !== "KeyE" || !event.shiftKey || event.metaKey || event.ctrlKey || event.altKey) return;
    if (isTypingContext(event)) return;
    if (event.key !== "E" && event.key !== "e") return;
    setEditing(!editing());
  },
  true,
);

window.addEventListener(
  "keydown",
  (event) => {
    const meta = event.metaKey || event.ctrlKey;
    if (meta && event.code === "KeyZ") {
      event.preventDefault();
      if (event.shiftKey) redo();
      else undo();
      return;
    }
    if (!editing() || !selected) return;
    if (event.target.closest(".layout-hud, input, textarea")) return;
    if (!["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(event.key)) return;
    const step = event.altKey ? 0.25 : event.shiftKey ? 5 : 1;
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      nudge(-step, 0);
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      nudge(step, 0);
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      nudge(0, -step);
    } else if (event.key === "ArrowDown") {
      event.preventDefault();
      nudge(0, step);
    }
  },
  true,
);

hud.querySelector("[data-copy]").addEventListener("click", copyCss);
hud.querySelector("[data-undo]").addEventListener("click", undo);
hud.querySelector("[data-redo]").addEventListener("click", redo);
hud.querySelector("[data-clear]").addEventListener("click", () => {
  if (document.body.dataset.page === "guestbook") {
    resetGuestLayout();
    pushHistory();
    refreshHud();
    return;
  }
  if (document.body.dataset.page === "dogam") {
    resetDogamLayout();
    pushHistory();
    refreshHud();
    return;
  }
  const store = loadStore();
  const next = { ...LAYOUT_SEED };
  Object.keys(store).forEach((key) => {
    if (key.startsWith(".guest-") || key.startsWith(".dogam-") || key === ".growth") next[key] = store[key];
  });
  saveStore(next);
  location.reload();
});

window.addEventListener("tamakoko:page", () => {
  if (editing()) pushHistory();
  refreshHud();
});
hud.querySelector("[data-toggle]").addEventListener("click", () => setEditing(false));

document.addEventListener(
  "click",
  (event) => {
    if (!editing()) return;
    if (window.__layoutDidDrag) {
      event.preventDefault();
      event.stopPropagation();
    }
  },
  true,
);
