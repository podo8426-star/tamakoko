const canvas = document.querySelector(".sketch-board");
const tools = document.querySelector(".sketch-tools");
if (canvas) {
  const ctx = canvas.getContext("2d", { alpha: true });
  const SAVE_KEY = "tamakoko-sketch-v1";
  let tool = "pen";
  let drawing = false;
  let last = null;

  function inkSetup() {
    ctx.lineJoin = "round";
    ctx.lineCap = "round";
    ctx.imageSmoothingEnabled = false;
    ctx.shadowBlur = 0;
    ctx.shadowColor = "transparent";
    ctx.globalAlpha = 1;
  }

  function sizeCanvas() {
    const rect = canvas.getBoundingClientRect();
    if (rect.width < 8 || rect.height < 8) return;
    const w = Math.max(1, Math.round(rect.width));
    const h = Math.max(1, Math.round(rect.height));
    if (canvas.width === w && canvas.height === h) return;
    const keep = document.createElement("canvas");
    keep.width = canvas.width;
    keep.height = canvas.height;
    keep.getContext("2d").drawImage(canvas, 0, 0);
    canvas.width = w;
    canvas.height = h;
    inkSetup();
    if (keep.width && keep.height) ctx.drawImage(keep, 0, 0, w, h);
  }

  function load() {
    const data = localStorage.getItem(SAVE_KEY);
    if (!data) return;
    const img = new Image();
    img.onload = () => {
      inkSetup();
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    };
    img.src = data;
  }

  function save() {
    try {
      localStorage.setItem(SAVE_KEY, canvas.toDataURL("image/png"));
    } catch {
      /* ignore */
    }
  }

  function point(event) {
    const rect = canvas.getBoundingClientRect();
    const src = event.touches ? event.touches[0] : event;
    return {
      x: ((src.clientX - rect.left) / rect.width) * canvas.width,
      y: ((src.clientY - rect.top) / rect.height) * canvas.height,
    };
  }

  function stroke(from, to) {
    inkSetup();
    if (tool === "erase") {
      ctx.globalCompositeOperation = "destination-out";
      ctx.strokeStyle = "#000";
      ctx.lineWidth = Math.max(16, canvas.width * 0.022);
    } else {
      ctx.globalCompositeOperation = "source-over";
      ctx.strokeStyle = "#2a0840";
      ctx.lineWidth = Math.max(3.5, canvas.width * 0.0065);
    }
    ctx.beginPath();
    ctx.moveTo(from.x, from.y);
    ctx.lineTo(to.x, to.y);
    ctx.stroke();
  }

  function setTool(next) {
    tool = next;
    tools?.querySelectorAll("[data-tool]").forEach((btn) => {
      btn.classList.toggle("is-on", btn.dataset.tool === next);
    });
    canvas.classList.toggle("is-erase", next === "erase");
  }

  canvas.addEventListener("pointerdown", (event) => {
    event.preventDefault();
    sizeCanvas();
    drawing = true;
    last = point(event);
    stroke(last, last);
    canvas.setPointerCapture(event.pointerId);
  });

  canvas.addEventListener("pointermove", (event) => {
    if (!drawing) return;
    const now = point(event);
    stroke(last, now);
    last = now;
  });

  function stopDraw() {
    if (!drawing) return;
    drawing = false;
    last = null;
    save();
  }

  canvas.addEventListener("pointerup", stopDraw);
  canvas.addEventListener("pointercancel", stopDraw);
  canvas.addEventListener("pointerleave", stopDraw);

  tools?.addEventListener("click", (event) => {
    const btn = event.target.closest("[data-tool]");
    if (!btn) return;
    event.stopPropagation();
    if (btn.dataset.tool === "clear") {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      save();
      return;
    }
    setTool(btn.dataset.tool);
  });

  window.addEventListener("tamakoko:sketch-open", () => {
    window.requestAnimationFrame(() => {
      sizeCanvas();
      if (!canvas.dataset.loaded) {
        canvas.dataset.loaded = "1";
        load();
      }
    });
  });
}
