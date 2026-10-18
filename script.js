// =========================================================
// My Green Pencil Case! - Tablet English Stationery Game
// All speech and pacing designed to be slow & elementary-level
// =========================================================

const COLORS = [
  { id: "red", en: "red", ja: "あか", hex: "#ef4444", dark: "#b91c1c", lightText: false },
  { id: "blue", en: "blue", ja: "あお", hex: "#3b82f6", dark: "#1d4ed8", lightText: false },
  { id: "yellow", en: "yellow", ja: "きいろ", hex: "#facc15", dark: "#ca8a04", lightText: true },
  { id: "green", en: "green", ja: "みどり", hex: "#22c55e", dark: "#15803d", lightText: false },
  { id: "pink", en: "pink", ja: "ピンク", hex: "#f472b6", dark: "#db2777", lightText: false },
  { id: "orange", en: "orange", ja: "オレンジ", hex: "#fb923c", dark: "#c2410c", lightText: false },
  { id: "purple", en: "purple", ja: "むらさき", hex: "#a855f7", dark: "#7e22ce", lightText: false },
  { id: "black", en: "black", ja: "くろ", hex: "#334155", dark: "#0f172a", lightText: false },
  { id: "white", en: "white", ja: "しろ", hex: "#f8fafc", dark: "#94a3b8", lightText: true }
];

const STATIONERY_ITEMS = [
  {
    id: "pencil",
    category: "stationery",
    en: "pencil",
    ja: "えんぴつ",
    width: 135,
    height: 28,
    defaultColor: "red",
    renderSvg: (c) => `
      <svg viewBox="0 0 200 40">
        <rect x="6" y="8" width="22" height="24" rx="6" fill="#fda4af" stroke="#be123c" stroke-width="2.5"/>
        <rect x="24" y="8" width="12" height="24" fill="#cbd5e1" stroke="#475569" stroke-width="2.5"/>
        <rect x="36" y="8" width="126" height="24" fill="${c.hex}" stroke="${c.dark}" stroke-width="2.5"/>
        <line x1="36" y1="16" x2="162" y2="16" stroke="rgba(255,255,255,0.45)" stroke-width="3"/>
        <polygon points="162,8 194,20 162,32" fill="#fde68a" stroke="#b45309" stroke-width="2.5" stroke-linejoin="round"/>
        <polygon points="182,15.5 194,20 182,24.5" fill="${c.dark}"/>
      </svg>`
  },
  {
    id: "pen",
    category: "stationery",
    en: "pen",
    ja: "ボールペン",
    width: 132,
    height: 29,
    defaultColor: "blue",
    renderSvg: (c) => `
      <svg viewBox="0 0 190 42">
        <rect x="4" y="15" width="14" height="12" rx="4" fill="${c.dark}"/>
        <rect x="16" y="9" width="136" height="24" rx="10" fill="${c.hex}" stroke="${c.dark}" stroke-width="2.5"/>
        <rect x="112" y="9" width="32" height="24" fill="${c.dark}" opacity="0.35"/>
        <path d="M 32 9 L 32 3 L 76 3 L 76 7" fill="none" stroke="${c.dark}" stroke-width="3.5" stroke-linecap="round"/>
        <polygon points="150,11 184,21 150,31" fill="#e2e8f0" stroke="#475569" stroke-width="2.5" stroke-linejoin="round"/>
        <circle cx="185" cy="21" r="2.2" fill="#0f172a"/>
      </svg>`
  },
  {
    id: "eraser",
    category: "stationery",
    en: "eraser",
    ja: "けしごむ",
    width: 72,
    height: 44,
    defaultColor: "blue",
    renderSvg: (c) => `
      <svg viewBox="0 0 100 62">
        <rect x="8" y="10" width="84" height="42" rx="9" fill="#ffffff" stroke="#94a3b8" stroke-width="2.5"/>
        <rect x="8" y="10" width="58" height="42" rx="6" fill="${c.hex}" stroke="${c.dark}" stroke-width="2.5"/>
        <rect x="16" y="18" width="42" height="26" rx="4" fill="rgba(255,255,255,0.88)"/>
        <text x="37" y="35" font-size="11" font-weight="900" fill="${c.dark}" text-anchor="middle">ERASER</text>
      </svg>`
  },
  {
    id: "ruler",
    category: "stationery",
    en: "ruler",
    ja: "じょうぎ",
    width: 150,
    height: 36,
    defaultColor: "yellow",
    renderSvg: (c) => `
      <svg viewBox="0 0 210 50">
        <rect x="6" y="8" width="198" height="34" rx="6" fill="${c.hex}" fill-opacity="0.88" stroke="${c.dark}" stroke-width="2.5"/>
        ${[24, 42, 60, 78, 96, 114, 132, 150, 168, 186]
          .map((x, i) => `<line x1="${x}" y1="8" x2="${x}" y2="${i % 2 === 0 ? 22 : 17}" stroke="${c.dark}" stroke-width="2.5"/>`)
          .join("")}
        <circle cx="24" cy="30" r="5" fill="rgba(255,255,255,0.7)" stroke="${c.dark}" stroke-width="2"/>
      </svg>`
  },
  {
    id: "scissors",
    category: "stationery",
    en: "scissors",
    ja: "はさみ",
    width: 120,
    height: 58,
    defaultColor: "green",
    renderSvg: (c) => `
      <svg viewBox="0 0 170 84">
        <polygon points="74,36 162,20 156,38 74,46" fill="#e2e8f0" stroke="#475569" stroke-width="2.5" stroke-linejoin="round"/>
        <polygon points="74,48 162,64 156,46 74,38" fill="#cbd5e1" stroke="#475569" stroke-width="2.5" stroke-linejoin="round"/>
        <circle cx="82" cy="42" r="4.5" fill="#64748b"/>
        <ellipse cx="42" cy="24" rx="28" ry="17" fill="none" stroke="${c.hex}" stroke-width="10"/>
        <ellipse cx="42" cy="24" rx="28" ry="17" fill="none" stroke="${c.dark}" stroke-width="2"/>
        <ellipse cx="42" cy="60" rx="28" ry="17" fill="none" stroke="${c.hex}" stroke-width="10"/>
        <ellipse cx="42" cy="60" rx="28" ry="17" fill="none" stroke="${c.dark}" stroke-width="2"/>
      </svg>`
  },
  {
    id: "glue",
    category: "stationery",
    en: "glue",
    ja: "スティックのり",
    width: 94,
    height: 39,
    defaultColor: "orange",
    renderSvg: (c) => `
      <svg viewBox="0 0 130 54">
        <rect x="6" y="13" width="12" height="28" rx="4" fill="${c.dark}"/>
        <rect x="16" y="9" width="76" height="36" rx="6" fill="#ffffff" stroke="#64748b" stroke-width="2.5"/>
        <rect x="30" y="14" width="50" height="26" rx="4" fill="${c.hex}"/>
        <text x="55" y="31" font-size="12" font-weight="900" fill="#ffffff" text-anchor="middle">GLUE</text>
        <rect x="92" y="9" width="30" height="36" rx="7" fill="${c.hex}" stroke="${c.dark}" stroke-width="2.5"/>
      </svg>`
  },
  {
    id: "crayon",
    category: "stationery",
    en: "crayon",
    ja: "クレヨン",
    width: 114,
    height: 30,
    defaultColor: "pink",
    renderSvg: (c) => `
      <svg viewBox="0 0 160 42">
        <rect x="8" y="9" width="118" height="24" rx="5" fill="${c.hex}" stroke="${c.dark}" stroke-width="2.5"/>
        <rect x="24" y="9" width="84" height="24" fill="rgba(255,255,255,0.75)"/>
        <ellipse cx="66" cy="21" rx="22" ry="7" fill="${c.hex}"/>
        <polygon points="126,9 154,21 126,33" fill="${c.hex}" stroke="${c.dark}" stroke-width="2.5" stroke-linejoin="round"/>
      </svg>`
  },
  {
    id: "marker",
    category: "stationery",
    en: "marker",
    ja: "カラーペン",
    width: 120,
    height: 33,
    defaultColor: "purple",
    renderSvg: (c) => `
      <svg viewBox="0 0 170 46">
        <rect x="8" y="9" width="108" height="28" rx="8" fill="${c.hex}" stroke="${c.dark}" stroke-width="2.5"/>
        <rect x="32" y="14" width="62" height="18" rx="5" fill="rgba(255,255,255,0.85)"/>
        <text x="63" y="27" font-size="10" font-weight="900" fill="${c.dark}" text-anchor="middle">MARKER</text>
        <rect x="116" y="7" width="44" height="32" rx="8" fill="${c.hex}" stroke="${c.dark}" stroke-width="2.5"/>
        <line x1="126" y1="7" x2="126" y2="39" stroke="${c.dark}" stroke-width="3"/>
      </svg>`
  },
  {
    id: "sharpener",
    category: "stationery",
    en: "sharpener",
    ja: "えんぴつけずり",
    width: 58,
    height: 49,
    defaultColor: "red",
    renderSvg: (c) => `
      <svg viewBox="0 0 80 68">
        <rect x="10" y="8" width="60" height="52" rx="12" fill="${c.hex}" stroke="${c.dark}" stroke-width="2.5"/>
        <rect x="20" y="16" width="40" height="36" rx="8" fill="rgba(255,255,255,0.82)"/>
        <circle cx="40" cy="34" r="10" fill="#334155"/>
        <circle cx="40" cy="34" r="6" fill="#0f172a"/>
      </svg>`
  },
  {
    id: "notebook",
    category: "stationery",
    en: "notebook",
    ja: "ミニノート",
    width: 72,
    height: 84,
    defaultColor: "yellow",
    renderSvg: (c) => `
      <svg viewBox="0 0 100 116">
        <rect x="14" y="8" width="76" height="100" rx="10" fill="${c.hex}" stroke="${c.dark}" stroke-width="2.5"/>
        <rect x="26" y="24" width="52" height="32" rx="6" fill="#ffffff" stroke="${c.dark}" stroke-width="2"/>
        <text x="52" y="44" font-size="11" font-weight="900" fill="${c.dark}" text-anchor="middle">NOTE</text>
        ${[18, 34, 50, 66, 82, 96]
          .map((y) => `<rect x="8" y="${y}" width="12" height="5" rx="2.5" fill="#475569"/>`)
          .join("")}
      </svg>`
  }
];

// 4 Stickers: ねこ (cat), 犬 (dog), 星 (star), にっこりマーク (smile)
const STICKER_ITEMS = [
  {
    id: "cat",
    category: "sticker",
    en: "cat",
    ja: "ねこ",
    width: 56,
    height: 56,
    defaultColor: "orange",
    renderSvg: (c) => `
      <svg viewBox="0 0 70 70">
        <polygon points="14,28 18,8 32,20" fill="${c.hex}" stroke="#ffffff" stroke-width="3" stroke-linejoin="round"/>
        <polygon points="56,28 52,8 38,20" fill="${c.hex}" stroke="#ffffff" stroke-width="3" stroke-linejoin="round"/>
        <circle cx="35" cy="38" r="22" fill="${c.hex}" stroke="#ffffff" stroke-width="3.5"/>
        <circle cx="27" cy="35" r="3.2" fill="#0f172a"/>
        <circle cx="43" cy="35" r="3.2" fill="#0f172a"/>
        <polygon points="35,40 32,44 38,44" fill="#f43f5e"/>
        <path d="M 29 47 Q 35 51 41 47" fill="none" stroke="#0f172a" stroke-width="2.2" stroke-linecap="round"/>
      </svg>`
  },
  {
    id: "dog",
    category: "sticker",
    en: "dog",
    ja: "いぬ",
    width: 56,
    height: 56,
    defaultColor: "orange",
    renderSvg: (c) => `
      <svg viewBox="0 0 70 70">
        <!-- Floppy dog ears -->
        <ellipse cx="14" cy="36" rx="8" ry="15" transform="rotate(15 14 36)" fill="${c.dark}" stroke="#ffffff" stroke-width="3"/>
        <ellipse cx="56" cy="36" rx="8" ry="15" transform="rotate(-15 56 36)" fill="${c.dark}" stroke="#ffffff" stroke-width="3"/>
        <!-- Head -->
        <circle cx="35" cy="36" r="21" fill="${c.hex}" stroke="#ffffff" stroke-width="3.5"/>
        <!-- Muzzle -->
        <ellipse cx="35" cy="42" rx="10" ry="7.5" fill="#ffffff"/>
        <!-- Eyes & nose -->
        <circle cx="27" cy="32" r="3.2" fill="#0f172a"/>
        <circle cx="43" cy="32" r="3.2" fill="#0f172a"/>
        <ellipse cx="35" cy="39" rx="4.2" ry="3" fill="#0f172a"/>
        <path d="M 31 45 Q 35 49 39 45" fill="none" stroke="#0f172a" stroke-width="2.2" stroke-linecap="round"/>
      </svg>`
  },
  {
    id: "star",
    category: "sticker",
    en: "star",
    ja: "ほし",
    width: 54,
    height: 54,
    defaultColor: "yellow",
    renderSvg: (c) => `
      <svg viewBox="0 0 70 70">
        <polygon points="35,5 44,24 65,27 50,42 53,63 35,53 17,63 20,42 5,27 26,24"
          fill="${c.hex}" stroke="#ffffff" stroke-width="4" stroke-linejoin="round"/>
        <circle cx="28" cy="32" r="3" fill="#0f172a"/>
        <circle cx="42" cy="32" r="3" fill="#0f172a"/>
        <path d="M 29 40 Q 35 46 41 40" fill="none" stroke="#0f172a" stroke-width="2.5" stroke-linecap="round"/>
      </svg>`
  },
  {
    id: "smile",
    category: "sticker",
    en: "smile",
    ja: "にっこりマーク",
    width: 54,
    height: 54,
    defaultColor: "yellow",
    renderSvg: (c) => `
      <svg viewBox="0 0 70 70">
        <circle cx="35" cy="35" r="26" fill="${c.hex}" stroke="#ffffff" stroke-width="4"/>
        <circle cx="25" cy="29" r="3.8" fill="#0f172a"/>
        <circle cx="45" cy="29" r="3.8" fill="#0f172a"/>
        <circle cx="19" cy="37" r="4" fill="#f43f5e" opacity="0.45"/>
        <circle cx="51" cy="37" r="4" fill="#f43f5e" opacity="0.45"/>
        <path d="M 22 39 Q 35 52 48 39" fill="none" stroke="#0f172a" stroke-width="3.5" stroke-linecap="round"/>
      </svg>`
  }
];

// =========================================================
// State Management
// =========================================================
const state = {
  speechRate: 0.62, // Slow default for elementary school kids
  selectedColorId: "red",
  activeTrayTab: "stationery", // "stationery" | "sticker"
  placedItems: [], // { uid, itemId, category, colorId, x, y, rotation }
  selectedPlacedUid: null,
  lastWord: ""
};

let uidCounter = 1;
let audioCtx = null;

// =========================================================
// Sound Effects (Gentle Web Audio Chimes)
// =========================================================
function playTone(freqList, duration = 0.14) {
  try {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx.state === "suspended") {
      audioCtx.resume();
    }
    freqList.forEach((freq, idx) => {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = "triangle";
      osc.frequency.value = freq;
      const startTime = audioCtx.currentTime + idx * duration;
      gain.gain.setValueAtTime(0.16, startTime);
      gain.gain.exponentialRampToValueAtTime(0.001, startTime + duration * 1.4);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start(startTime);
      osc.stop(startTime + duration * 1.5);
    });
  } catch (e) {
    // Ignore audio context restrictions if not yet interacted
  }
}

// =========================================================
// Slow & Clear Speech Synthesis Engine (Word Only)
// =========================================================
let cachedEnglishVoice = null;

function pickEnglishVoice() {
  if (!("speechSynthesis" in window)) return null;
  const voices = window.speechSynthesis.getVoices();
  if (!voices || voices.length === 0) return null;
  return (
    voices.find((v) => v.lang === "en-US" && /natural|samantha|aria|google|jenny|zira/i.test(v.name)) ||
    voices.find((v) => v.lang === "en-US") ||
    voices.find((v) => v.lang.startsWith("en")) ||
    null
  );
}

if ("speechSynthesis" in window) {
  window.speechSynthesis.onvoiceschanged = () => {
    cachedEnglishVoice = pickEnglishVoice();
  };
}

function speakWordSlowly(wordText, onEndCallback = null) {
  if (!wordText) return;
  state.lastWord = wordText;
  const enEl = document.getElementById("speechEnglish");
  const speakerBtn = document.getElementById("repeatSpeechBtn");

  enEl.textContent = wordText;

  if (!("speechSynthesis" in window)) {
    if (onEndCallback) setTimeout(onEndCallback, 1000);
    return;
  }

  window.speechSynthesis.cancel();

  const parts = wordText
    .split("...")
    .map((s) => s.trim())
    .filter(Boolean);

  speakerBtn.classList.add("speaking");

  let index = 0;
  function speakNextPart() {
    if (index >= parts.length) {
      speakerBtn.classList.remove("speaking");
      if (onEndCallback) onEndCallback();
      return;
    }
    const currentWord = parts[index];
    enEl.textContent = currentWord;

    const utter = new SpeechSynthesisUtterance(currentWord);
    utter.lang = "en-US";
    utter.rate = state.speechRate;
    utter.pitch = 1.05;
    if (!cachedEnglishVoice) cachedEnglishVoice = pickEnglishVoice();
    if (cachedEnglishVoice) utter.voice = cachedEnglishVoice;

    utter.onend = () => {
      index++;
      if (index < parts.length) {
        setTimeout(speakNextPart, 420);
      } else {
        speakerBtn.classList.remove("speaking");
        if (onEndCallback) onEndCallback();
      }
    };

    utter.onerror = () => {
      speakerBtn.classList.remove("speaking");
      if (onEndCallback) onEndCallback();
    };

    window.speechSynthesis.speak(utter);
  }

  speakNextPart();
}

// =========================================================
// Helper Lookups
// =========================================================
function getColorObj(colorId) {
  return COLORS.find((c) => c.id === colorId) || COLORS[0];
}

function getCatalogItem(itemId) {
  return (
    STATIONERY_ITEMS.find((i) => i.id === itemId) ||
    STICKER_ITEMS.find((i) => i.id === itemId)
  );
}

// =========================================================
// UI Rendering
// =========================================================
function renderColorPalette() {
  const palette = document.getElementById("colorPalette");
  palette.innerHTML = "";
  COLORS.forEach((c) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = `color-chip ${c.lightText ? "light-text" : ""} ${
      state.selectedColorId === c.id ? "active" : ""
    }`;
    btn.style.backgroundColor = c.hex;
    btn.textContent = c.en;
    btn.addEventListener("click", () => {
      state.selectedColorId = c.id;
      if (state.selectedPlacedUid) {
        const target = state.placedItems.find((p) => p.uid === state.selectedPlacedUid);
        if (target) {
          target.colorId = c.id;
          renderPlacedItems();
          const itemDef = getCatalogItem(target.itemId);
          playTone([587.33, 783.99]);
          speakWordSlowly(itemDef.en);
          renderColorPalette();
          renderTray();
          return;
        }
      }
      renderColorPalette();
      renderTray();
      playTone([523.25]);
      speakWordSlowly(c.en);
    });
    palette.appendChild(btn);
  });
}

function renderTray() {
  const trayScroll = document.getElementById("trayScroll");
  trayScroll.innerHTML = "";
  const list = state.activeTrayTab === "stationery" ? STATIONERY_ITEMS : STICKER_ITEMS;
  const activeColor = getColorObj(state.selectedColorId);

  list.forEach((item) => {
    const card = document.createElement("div");
    card.className = "tray-item";
    card.innerHTML = `
      <div class="tray-item-svg">${item.renderSvg(activeColor)}</div>
      <div class="tray-item-en">${item.en}</div>
      <div class="tray-item-ja">${item.ja}</div>
    `;

    card.addEventListener("pointerdown", (e) => startSlideFromTray(e, item, activeColor));
    trayScroll.appendChild(card);
  });
}

function renderPlacedItems() {
  const inner = document.getElementById("pencilCaseInner");
  const emptyGuide = document.getElementById("caseEmptyGuide");
  const counterBadge = document.getElementById("caseCounterBadge");

  inner.querySelectorAll(".placed-item").forEach((el) => el.remove());

  if (state.placedItems.length === 0) {
    emptyGuide.classList.remove("hidden");
  } else {
    emptyGuide.classList.add("hidden");
  }

  counterBadge.textContent = `${state.placedItems.length}`;

  state.placedItems.forEach((placed) => {
    const itemDef = getCatalogItem(placed.itemId);
    const colorObj = getColorObj(placed.colorId);
    if (!itemDef) return;

    const el = document.createElement("div");
    el.className = `placed-item ${state.selectedPlacedUid === placed.uid ? "selected" : ""}`;
    el.style.width = `${itemDef.width}px`;
    el.style.height = `${itemDef.height}px`;
    el.style.left = `${placed.x - itemDef.width / 2}px`;
    el.style.top = `${placed.y - itemDef.height / 2}px`;
    el.style.transform = `rotate(${placed.rotation}deg)`;

    el.innerHTML = `
      <div class="item-controls">
        <button class="ctrl-mini-btn" data-action="rotate" type="button" title="まわす">↻</button>
        <button class="ctrl-mini-btn" data-action="speak" type="button" title="はつおん">🔊</button>
        <button class="ctrl-mini-btn" data-action="delete" type="button" title="だす">✖</button>
      </div>
      ${itemDef.renderSvg(colorObj)}
    `;

    el.querySelectorAll(".ctrl-mini-btn").forEach((btn) => {
      btn.addEventListener("pointerdown", (ev) => {
        ev.stopPropagation();
      });
      btn.addEventListener("click", (ev) => {
        ev.stopPropagation();
        const act = btn.getAttribute("data-action");
        if (act === "rotate") {
          placed.rotation = (placed.rotation + 45) % 360;
          playTone([659.25]);
          renderPlacedItems();
        } else if (act === "speak") {
          speakWordSlowly(itemDef.en);
        } else if (act === "delete") {
          state.placedItems = state.placedItems.filter((p) => p.uid !== placed.uid);
          if (state.selectedPlacedUid === placed.uid) state.selectedPlacedUid = null;
          playTone([392, 329.63]);
          renderPlacedItems();
        }
      });
    });

    el.addEventListener("pointerdown", (ev) => startSlideExistingItem(ev, placed, itemDef, colorObj));
    inner.appendChild(el);
  });
}

// =========================================================
// Touch / Pointer Drag-and-Drop (Slide into Green Pencil Case)
// =========================================================
let activeDrag = null;

function createDragGhost(itemDef, colorObj, x, y) {
  const ghost = document.createElement("div");
  ghost.className = "drag-ghost";
  ghost.style.width = `${itemDef.width}px`;
  ghost.innerHTML = `
    <div class="drag-ghost-label">${itemDef.en}</div>
    <div style="width:${itemDef.width}px; height:${itemDef.height}px;">
      ${itemDef.renderSvg(colorObj)}
    </div>
  `;
  ghost.style.left = `${x}px`;
  ghost.style.top = `${y}px`;
  document.body.appendChild(ghost);
  return ghost;
}

function isPointNearPencilCase(clientX, clientY) {
  const outer = document.getElementById("pencilCaseOuter");
  const rect = outer.getBoundingClientRect();
  const tolerance = 28;
  return (
    clientX >= rect.left - tolerance &&
    clientX <= rect.right + tolerance &&
    clientY >= rect.top - tolerance &&
    clientY <= rect.bottom + tolerance
  );
}

function startSlideFromTray(e, itemDef, colorObj) {
  e.preventDefault();
  speakWordSlowly(itemDef.en);
  playTone([523.25]);

  const ghost = createDragGhost(itemDef, colorObj, e.clientX, e.clientY);
  activeDrag = {
    source: "tray",
    itemDef,
    colorObj,
    ghost,
    pointerId: e.pointerId
  };
}

function startSlideExistingItem(e, placed, itemDef, colorObj) {
  e.preventDefault();
  e.stopPropagation();

  state.selectedPlacedUid = placed.uid;
  speakWordSlowly(itemDef.en);
  renderPlacedItems();

  const ghost = createDragGhost(itemDef, colorObj, e.clientX, e.clientY);
  activeDrag = {
    source: "case",
    placed,
    itemDef,
    colorObj,
    ghost,
    pointerId: e.pointerId
  };
}

window.addEventListener("pointermove", (e) => {
  if (!activeDrag || e.pointerId !== activeDrag.pointerId) return;
  activeDrag.ghost.style.left = `${e.clientX}px`;
  activeDrag.ghost.style.top = `${e.clientY}px`;

  const inner = document.getElementById("pencilCaseInner");
  if (isPointNearPencilCase(e.clientX, e.clientY)) {
    inner.classList.add("drop-hover");
  } else {
    inner.classList.remove("drop-hover");
  }
});

window.addEventListener("pointerup", (e) => {
  if (!activeDrag || e.pointerId !== activeDrag.pointerId) return;
  const inner = document.getElementById("pencilCaseInner");
  inner.classList.remove("drop-hover");

  const rect = inner.getBoundingClientRect();
  const inside = isPointNearPencilCase(e.clientX, e.clientY);

  const { source, itemDef, colorObj, placed, ghost } = activeDrag;
  ghost.remove();
  activeDrag = null;

  if (inside) {
    const padX = Math.min(itemDef.width * 0.35, 65);
    const padY = Math.min(itemDef.height * 0.35, 35);
    const localX = Math.max(padX, Math.min(rect.width - padX, e.clientX - rect.left));
    const localY = Math.max(padY, Math.min(rect.height - padY, e.clientY - rect.top));

    if (source === "tray") {
      const newPlaced = {
        uid: uidCounter++,
        itemId: itemDef.id,
        category: itemDef.category,
        colorId: colorObj.id,
        x: localX,
        y: localY,
        rotation: 0
      };
      state.placedItems.push(newPlaced);
      state.selectedPlacedUid = newPlaced.uid;
      playTone([523.25, 659.25, 783.99]);
      speakWordSlowly(itemDef.en);
    } else if (source === "case" && placed) {
      placed.x = localX;
      placed.y = localY;
      playTone([587.33, 698.46]);
    }
    renderPlacedItems();
  } else {
    if (source === "case" && placed) {
      state.placedItems = state.placedItems.filter((p) => p.uid !== placed.uid);
      if (state.selectedPlacedUid === placed.uid) state.selectedPlacedUid = null;
      playTone([392, 329.63]);
      renderPlacedItems();
    }
  }
});

// =========================================================
// Generate Image of Completed Pencil Case & Send to Teacher
// =========================================================
const STORAGE_KEY = "pencil_case_submissions_v1";
const CLOUD_TOPIC = "green_pencil_case_eae1bd9c_v1";
const CLOUD_BASE_URL = `https://ntfy.sh/${CLOUD_TOPIC}`;
const broadcastChannel =
  "BroadcastChannel" in window ? new BroadcastChannel("pencil_case_channel") : null;

let currentSnapshotDataUrl = "";

function generatePencilCaseImage() {
  return new Promise((resolve) => {
    const innerEl = document.getElementById("pencilCaseInner");
    const innerW = innerEl.clientWidth || 760;
    const innerH = innerEl.clientHeight || 420;
    const pad = 26;
    const totalW = innerW + pad * 2;
    const totalH = innerH + pad * 2;

    // Build SVG items inside the pencil case
    const itemsSvgMarkup = state.placedItems
      .map((placed) => {
        const itemDef = getCatalogItem(placed.itemId);
        const colorObj = getColorObj(placed.colorId);
        if (!itemDef) return "";
        const rawSvg = itemDef.renderSvg(colorObj).trim();
        const vbMatch = rawSvg.match(/viewBox="([^"]+)"/i);
        const viewBox = vbMatch ? vbMatch[1] : "0 0 100 100";
        const innerContent = rawSvg
          .replace(/^<svg[^>]*>/i, "")
          .replace(/<\/svg>$/i, "");

        const cx = pad + placed.x;
        const cy = pad + placed.y;
        const w = itemDef.width;
        const h = itemDef.height;

        return `
          <g transform="translate(${cx}, ${cy}) rotate(${placed.rotation}) translate(${-w / 2}, ${-h / 2})">
            <svg width="${w}" height="${h}" viewBox="${viewBox}">
              ${innerContent}
            </svg>
          </g>
        `;
      })
      .join("");

    const pocketW = Math.round(innerW * 0.3);
    const bandX = pad + Math.round(innerW * 0.38);

    const masterSvg = `
      <svg xmlns="http://www.w3.org/2000/svg" width="${totalW}" height="${totalH}" viewBox="0 0 ${totalW} ${totalH}">
        <defs>
          <linearGradient id="greenCaseGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#4ade80"/>
            <stop offset="55%" stop-color="#22c55e"/>
            <stop offset="100%" stop-color="#16a34a"/>
          </linearGradient>
          <pattern id="meshDots" width="12" height="12" patternUnits="userSpaceOnUse">
            <circle cx="3" cy="3" r="1.5" fill="rgba(21, 128, 61, 0.18)"/>
          </pattern>
        </defs>
        <!-- Outer Green Pencil Case -->
        <rect x="4" y="4" width="${totalW - 8}" height="${totalH - 8}" rx="48"
              fill="url(#greenCaseGrad)" stroke="#15803d" stroke-width="8"/>
        <!-- White Dashed Stitching -->
        <rect x="13" y="13" width="${totalW - 26}" height="${totalH - 26}" rx="40"
              fill="none" stroke="rgba(255, 255, 255, 0.82)" stroke-width="3" stroke-dasharray="8 6"/>
        <!-- Inner Cream-Green Surface -->
        <rect x="${pad}" y="${pad}" width="${innerW}" height="${innerH}" rx="34"
              fill="#f0fdf4" stroke="rgba(21, 128, 61, 0.2)" stroke-width="2"/>
        <!-- Mesh Pocket -->
        <rect x="${pad + 14}" y="${pad + 14}" width="${pocketW}" height="${innerH - 28}" rx="24"
              fill="url(#meshDots)" stroke="rgba(21, 128, 61, 0.32)" stroke-width="3" stroke-dasharray="7 5"/>
        <!-- Holder Band -->
        <rect x="${bandX}" y="${pad}" width="36" height="${innerH}"
              fill="rgba(22, 163, 74, 0.1)" stroke="rgba(21, 128, 61, 0.18)" stroke-width="2"/>
        <!-- Placed Stationery & Stickers -->
        ${itemsSvgMarkup}
      </svg>
    `.trim();

    const svgDataUrl = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(masterSvg);
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = totalW;
      canvas.height = totalH;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0, totalW, totalH);
      try {
        resolve(canvas.toDataURL("image/png"));
      } catch (err) {
        resolve(svgDataUrl);
      }
    };
    img.onerror = () => {
      resolve(svgDataUrl);
    };
    img.src = svgDataUrl;
  });
}

function readAllPencilCaseContents() {
  if (state.placedItems.length === 0) {
    playTone([440]);
    return;
  }

  const words = state.placedItems.map((p) => {
    const itemDef = getCatalogItem(p.itemId);
    return itemDef.en;
  });

  speakWordSlowly(words.join(" ... "));
}

async function openFinishModal() {
  if (state.placedItems.length === 0) {
    playTone([392, 329.63]);
    alert("まずは ぶんぼうぐを ふでばこに スライドして いれてね！");
    return;
  }

  // Deselect any active item so controls aren't visible
  state.selectedPlacedUid = null;
  renderPlacedItems();

  playTone([523.25, 659.25, 783.99]);

  // Generate snapshot image of the completed pencil case
  currentSnapshotDataUrl = await generatePencilCaseImage();
  const previewImg = document.getElementById("casePreviewImg");
  previewImg.src = currentSnapshotDataUrl;

  // Show Step 1 (Name Input & Preview)
  document.getElementById("modalTitle").textContent = "✨ ふでばこが かんせい！ ✨";
  document.getElementById("submitStepBox").classList.remove("hidden");
  document.getElementById("sentSuccessBox").classList.add("hidden");

  const modal = document.getElementById("finishModal");
  modal.classList.remove("hidden");

  setTimeout(() => {
    document.getElementById("studentNameInput").focus();
  }, 100);
}

let isSubmitting = false;

async function submitToTeacher() {
  if (isSubmitting) return;

  const nameInput = document.getElementById("studentNameInput");
  const studentName = nameInput.value.trim();

  if (!studentName) {
    playTone([349.23, 311.13]);
    nameInput.focus();
    nameInput.style.borderColor = "#ef4444";
    setTimeout(() => {
      nameInput.style.borderColor = "#86efac";
    }, 1200);
    return;
  }

  isSubmitting = true;
  const sendBtn = document.getElementById("sendToTeacherBtn");
  const originalBtnHtml = sendBtn ? sendBtn.innerHTML : "📨 せんせいに おくる！";
  if (sendBtn) {
    sendBtn.disabled = true;
    sendBtn.innerHTML = "⏳ おくっています...";
  }

  const innerEl = document.getElementById("pencilCaseInner");
  const innerW = innerEl ? innerEl.clientWidth || 760 : 760;
  const innerH = innerEl ? innerEl.clientHeight || 420 : 420;

  const itemWords = state.placedItems.map((p) => {
    const itemDef = getCatalogItem(p.itemId);
    return { en: itemDef.en, ja: itemDef.ja, colorId: p.colorId };
  });

  const compactPlaced = state.placedItems.slice(0, 60).map((p) => ({
    i: p.itemId,
    c: p.colorId,
    x: Math.round(p.x),
    y: Math.round(p.y),
    r: p.rotation || 0
  }));

  const nowTs = Date.now();
  const submission = {
    id: "sub_" + nowTs + "_" + Math.random().toString(36).slice(2, 7),
    ts: nowTs,
    studentName,
    imageDataUrl: currentSnapshotDataUrl,
    items: itemWords,
    innerW,
    innerH,
    placedItems: compactPlaced,
    createdAt: new Date().toLocaleString("ja-JP", {
      month: "numeric",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    })
  };

  // 1. Save to localStorage for same-device / browser tabs
  try {
    const existingRaw = localStorage.getItem(STORAGE_KEY);
    const list = existingRaw ? JSON.parse(existingRaw) : [];
    list.unshift(submission);
    if (list.length > 60) list.length = 60;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
    } catch (quotaErr) {
      // Fallback: save compact version without heavy base64 PNG if quota is tight
      const compactList = list.map((s) => ({
        id: s.id,
        ts: s.ts,
        studentName: s.studentName,
        items: s.items,
        innerW: s.innerW,
        innerH: s.innerH,
        placedItems: s.placedItems,
        createdAt: s.createdAt
      }));
      localStorage.setItem(STORAGE_KEY, JSON.stringify(compactList));
    }
  } catch (err) {
    console.warn("localStorage save warning:", err);
  }

  // 2. Notify open teacher.html tab immediately via BroadcastChannel
  if (broadcastChannel) {
    broadcastChannel.postMessage({ type: "NEW_SUBMISSION", submission });
  }

  // 3. Send to internet Cloud Sync (works across all devices & networks even on static hosting)
  //    AND to /api/submissions (Netlify Functions / classroom server)
  const cloudEvent = {
    t: "ADD",
    id: submission.id,
    ts: submission.ts,
    n: submission.studentName,
    at: submission.createdAt,
    w: innerW,
    h: innerH,
    p: compactPlaced
  };

  const networkTasks = [
    fetch(CLOUD_BASE_URL, {
      method: "POST",
      body: JSON.stringify(cloudEvent)
    }).catch((err) => console.warn("Cloud sync warning:", err))
  ];

  if (location.protocol.startsWith("http")) {
    networkTasks.push(
      fetch("/api/submissions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submission)
      }).catch(() => {})
    );
  }

  try {
    await Promise.allSettled(networkTasks);
  } finally {
    isSubmitting = false;
    if (sendBtn) {
      sendBtn.disabled = false;
      sendBtn.innerHTML = originalBtnHtml;
    }
  }

  // Show Step 2 (Sent Confirmation & English Word Review)
  playTone([523.25, 659.25, 783.99, 1046.5]);
  document.getElementById("modalTitle").textContent = `🎉 ${studentName}さんの ふでばこ 🎉`;
  document.getElementById("submitStepBox").classList.add("hidden");
  document.getElementById("sentSuccessBox").classList.remove("hidden");

  const wordList = document.getElementById("modalWordList");
  wordList.innerHTML = "";
  state.placedItems.forEach((p) => {
    const itemDef = getCatalogItem(p.itemId);
    const pill = document.createElement("button");
    pill.type = "button";
    pill.className = "modal-word-pill";
    pill.innerHTML = `🔊 <span>${itemDef.en}</span> <small style="color:#64748b">(${itemDef.ja})</small>`;
    pill.addEventListener("click", () => {
      document.querySelectorAll(".modal-word-pill").forEach((el) => el.classList.remove("speaking-pill"));
      pill.classList.add("speaking-pill");
      speakWordSlowly(itemDef.en, () => pill.classList.remove("speaking-pill"));
    });
    wordList.appendChild(pill);
  });

  readAllPencilCaseContents();
}

// =========================================================
// Event Listeners & Initialization
// =========================================================
function initGame() {
  renderColorPalette();
  renderTray();
  renderPlacedItems();

  document.getElementById("pencilCaseInner").addEventListener("pointerdown", (e) => {
    if (e.target.id === "pencilCaseInner") {
      state.selectedPlacedUid = null;
      renderPlacedItems();
    }
  });

  document.querySelectorAll(".speed-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".speed-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      state.speechRate = parseFloat(btn.getAttribute("data-rate"));
      playTone([587.33]);
      if (state.lastWord) {
        speakWordSlowly(state.lastWord);
      }
    });
  });

  document.getElementById("repeatSpeechBtn").addEventListener("click", () => {
    playTone([523.25]);
    if (state.lastWord) {
      speakWordSlowly(state.lastWord);
    }
  });

  document.getElementById("tabStationery").addEventListener("click", () => {
    state.activeTrayTab = "stationery";
    document.getElementById("tabStationery").classList.add("active");
    document.getElementById("tabStickers").classList.remove("active");
    playTone([523.25]);
    renderTray();
  });

  document.getElementById("tabStickers").addEventListener("click", () => {
    state.activeTrayTab = "sticker";
    document.getElementById("tabStickers").classList.add("active");
    document.getElementById("tabStationery").classList.remove("active");
    playTone([659.25]);
    renderTray();
  });

  document.getElementById("clearCaseBtn").addEventListener("click", () => {
    state.placedItems = [];
    state.selectedPlacedUid = null;
    document.getElementById("speechEnglish").textContent = "---";
    state.lastWord = "";
    playTone([392, 329.63]);
    renderPlacedItems();
  });

  document.getElementById("readAllBtn").addEventListener("click", () => {
    readAllPencilCaseContents();
  });

  document.getElementById("finishCaseBtn").addEventListener("click", () => {
    openFinishModal();
  });

  document.getElementById("modalCancelBtn").addEventListener("click", () => {
    document.getElementById("finishModal").classList.add("hidden");
  });

  document.getElementById("sendToTeacherBtn").addEventListener("click", () => {
    submitToTeacher();
  });

  document.getElementById("studentNameInput").addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      submitToTeacher();
    }
  });

  document.getElementById("modalReadAgainBtn").addEventListener("click", () => {
    readAllPencilCaseContents();
  });

  document.getElementById("modalCloseBtn").addEventListener("click", () => {
    document.getElementById("finishModal").classList.add("hidden");
  });

  // Teacher Corner Button & Password Modal ("peach2026")
  const pwModal = document.getElementById("passwordModal");
  const pwInput = document.getElementById("teacherPwInput");
  const pwError = document.getElementById("teacherPwError");

  function checkTeacherPassword() {
    if (pwInput.value === "peach2026") {
      try {
        sessionStorage.setItem("teacher_auth_ok", "1");
      } catch (e) {}
      pwModal.classList.add("hidden");
      pwInput.value = "";
      window.location.href = "teacher.html";
    } else {
      playTone([349.23, 311.13]);
      pwError.classList.remove("hidden");
      pwInput.select();
    }
  }

  document.getElementById("teacherCornerBtn").addEventListener("click", () => {
    pwInput.value = "";
    pwError.classList.add("hidden");
    pwModal.classList.remove("hidden");
    setTimeout(() => pwInput.focus(), 80);
  });

  document.getElementById("pwCancelBtn").addEventListener("click", () => {
    pwModal.classList.add("hidden");
  });

  document.getElementById("pwSubmitBtn").addEventListener("click", checkTeacherPassword);

  pwInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      checkTeacherPassword();
    }
  });
}

window.addEventListener("DOMContentLoaded", initGame);
