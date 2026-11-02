const TARGET = { happy: 3, angry: 1, anxiety: 1 };
const LEVEL_START = 3;
const CLICKS_PER_LEVEL = 6;

const mood = {
  happy: 0,
  angry: 0,
  anxiety: 0,
};

function emotionScore(h, a, x) {
  const n = h + a + x;
  if (n === 0) return 50;

  const actual = [h / n, a / n, x / n];
  const target = [0.6, 0.2, 0.2];
  const l1 =
    Math.abs(actual[0] - target[0]) +
    Math.abs(actual[1] - target[1]) +
    Math.abs(actual[2] - target[2]);
  let score = (1 - l1 / 2) * 100;

  const present = [h, a, x].filter((v) => v > 0).length;
  const missingPenalty = present === 3 ? 1 : present === 2 ? 0.7 : 0.35;
  score *= missingPenalty;

  return Math.round(Math.min(100, Math.max(0, score)));
}

function levelFromClicks(total) {
  return LEVEL_START + Math.floor(total / CLICKS_PER_LEVEL);
}

function fillShare(n, peak) {
  if (peak <= 0 || n <= 0) return "0%";
  return `${(n / peak) * 100}%`;
}

function renderStats() {
  const total = mood.happy + mood.angry + mood.anxiety;
  const peak = Math.max(mood.happy, mood.angry, mood.anxiety);
  const score = emotionScore(mood.happy, mood.angry, mood.anxiety);
  const level = levelFromClicks(total);

  document.querySelector(".gauge-happy .gauge-fill-clip")?.style.setProperty(
    "--fill",
    fillShare(mood.happy, peak),
  );
  document.querySelector(".gauge-angry .gauge-fill-clip")?.style.setProperty(
    "--fill",
    fillShare(mood.angry, peak),
  );
  document.querySelector(".gauge-anxiety .gauge-fill-clip")?.style.setProperty(
    "--fill",
    fillShare(mood.anxiety, peak),
  );

  const scoreEl = document.querySelector(".score-num");
  const lvEl = document.querySelector(".lv-num");
  if (scoreEl) scoreEl.textContent = String(score);
  if (lvEl) lvEl.textContent = `LV. ${level}`;
}

function addMood(name) {
  if (!(name in mood)) return;
  mood[name] += 1;
  renderStats();
}

function resetMood() {
  mood.happy = 0;
  mood.angry = 0;
  mood.anxiety = 0;
  renderStats();
}

window.addMood = addMood;
window.resetMood = resetMood;
window.getMood = () => ({ ...mood, score: emotionScore(mood.happy, mood.angry, mood.anxiety) });

renderStats();
