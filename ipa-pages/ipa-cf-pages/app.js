const groups = [
  {
    name: "元音（单元音）",
    items: [
      { symbol: "iː", id: "i-long", example: "see", note: "长音 /iː/" },
      { symbol: "ɪ", id: "i-short", example: "sit", note: "短音 /ɪ/" },
      { symbol: "e", id: "e", example: "bed", note: "前元音" },
      { symbol: "æ", id: "ae", example: "cat", note: "开口较大" },
      { symbol: "ɑː", id: "a-long", example: "car", note: "长音 /ɑː/" },
      { symbol: "ɒ", id: "o-short", example: "hot", note: "英式常见" },
      { symbol: "ɔː", id: "o-long", example: "law", note: "长音 /ɔː/" },
      { symbol: "ʊ", id: "u-short", example: "book", note: "短音 /ʊ/" },
      { symbol: "uː", id: "u-long", example: "blue", note: "长音 /uː/" },
      { symbol: "ʌ", id: "v", example: "cup", note: "中后元音" },
      { symbol: "ɜː", id: "er-long", example: "bird", note: "长音 /ɜː/" },
      { symbol: "ə", id: "schwa", example: "about", note: "弱读央元音" },
    ],
  },
  {
    name: "元音（双元音）",
    items: [
      { symbol: "eɪ", id: "ei", example: "day", note: "常见字母 a 发音" },
      { symbol: "aɪ", id: "ai", example: "time", note: "常见字母 i 发音" },
      { symbol: "ɔɪ", id: "oi", example: "boy", note: "oi/oy" },
      { symbol: "aʊ", id: "au", example: "now", note: "ou/ow" },
      { symbol: "əʊ", id: "eu", example: "go", note: "英式 /əʊ/" },
      { symbol: "ɪə", id: "ie", example: "near", note: "英式常见" },
      { symbol: "eə", id: "ea", example: "hair", note: "英式常见" },
      { symbol: "ʊə", id: "ue", example: "tour", note: "英式常见" },
    ],
  },
  {
    name: "辅音（爆破音）",
    items: [
      { symbol: "p", id: "p", example: "pen", note: "清双唇爆破" },
      { symbol: "b", id: "b", example: "bag", note: "浊双唇爆破" },
      { symbol: "t", id: "t", example: "tea", note: "清齿龈爆破" },
      { symbol: "d", id: "d", example: "dog", note: "浊齿龈爆破" },
      { symbol: "k", id: "k", example: "cat", note: "清软腭爆破" },
      { symbol: "g", id: "g", example: "go", note: "浊软腭爆破" },
    ],
  },
  {
    name: "辅音（摩擦音）",
    items: [
      { symbol: "f", id: "f", example: "fine", note: "清唇齿摩擦" },
      { symbol: "v", id: "v-con", example: "very", note: "浊唇齿摩擦" },
      { symbol: "θ", id: "th-voiceless", example: "think", note: "清齿间摩擦" },
      { symbol: "ð", id: "th-voiced", example: "this", note: "浊齿间摩擦" },
      { symbol: "s", id: "s", example: "see", note: "清齿龈摩擦" },
      { symbol: "z", id: "z", example: "zoo", note: "浊齿龈摩擦" },
      { symbol: "ʃ", id: "sh", example: "she", note: "清后齿龈摩擦" },
      { symbol: "ʒ", id: "zh", example: "vision", note: "浊后齿龈摩擦" },
      { symbol: "h", id: "h", example: "hat", note: "清声门摩擦" },
    ],
  },
  {
    name: "辅音（破擦音）",
    items: [
      { symbol: "tʃ", id: "ch", example: "chair", note: "清破擦" },
      { symbol: "dʒ", id: "j", example: "job", note: "浊破擦" },
      { symbol: "tr", id: "tr", example: "tree", note: "常见组合" },
      { symbol: "dr", id: "dr", example: "dream", note: "常见组合" },
      { symbol: "ts", id: "ts", example: "cats", note: "词尾常见" },
      { symbol: "dz", id: "dz", example: "beds", note: "词尾常见" },
    ],
  },
  {
    name: "辅音（鼻音/舌侧音/近音）",
    items: [
      { symbol: "m", id: "m", example: "man", note: "鼻音" },
      { symbol: "n", id: "n", example: "no", note: "鼻音" },
      { symbol: "ŋ", id: "ng", example: "sing", note: "鼻音" },
      { symbol: "l", id: "l", example: "light", note: "舌侧音" },
      { symbol: "r", id: "r", example: "red", note: "近音" },
      { symbol: "w", id: "w", example: "we", note: "半元音" },
      { symbol: "j", id: "y", example: "yes", note: "半元音" },
    ],
  },
];

const wordExamplesMap = {
  "i-long": ["see", "green", "teacher"],
  "i-short": ["sit", "fish", "little"],
  e: ["bed", "pen", "desk"],
  ae: ["cat", "bag", "apple"],
  "a-long": ["car", "father", "start"],
  "o-short": ["hot", "dog", "box"],
  "o-long": ["law", "talk", "small"],
  "u-short": ["book", "good", "look"],
  "u-long": ["blue", "food", "school"],
  v: ["cup", "bus", "love"],
  "er-long": ["bird", "work", "word"],
  schwa: ["about", "sofa", "banana"],
  ei: ["day", "name", "rain"],
  ai: ["time", "night", "bike"],
  oi: ["boy", "toy", "voice"],
  au: ["now", "house", "mouth"],
  eu: ["go", "home", "boat"],
  ie: ["near", "ear", "idea"],
  ea: ["hair", "care", "bear"],
  ue: ["tour", "poor", "sure"],
  p: ["pen", "apple", "map"],
  b: ["bag", "baby", "cab"],
  t: ["tea", "water", "cat"],
  d: ["dog", "ladder", "red"],
  k: ["cat", "kite", "back"],
  g: ["go", "green", "bag"],
  f: ["fine", "coffee", "leaf"],
  "v-con": ["very", "movie", "love"],
  "th-voiceless": ["think", "bath", "teeth"],
  "th-voiced": ["this", "mother", "breathe"],
  s: ["see", "city", "bus"],
  z: ["zoo", "music", "nose"],
  sh: ["she", "ship", "wash"],
  zh: ["vision", "measure", "garage"],
  h: ["hat", "home", "behind"],
  ch: ["chair", "teacher", "watch"],
  j: ["job", "orange", "bridge"],
  tr: ["tree", "train", "try"],
  dr: ["dream", "drink", "drive"],
  ts: ["cats", "hats", "writes"],
  dz: ["beds", "cards", "hands"],
  m: ["man", "milk", "home"],
  n: ["no", "name", "sun"],
  ng: ["sing", "long", "ring"],
  l: ["light", "blue", "ball"],
  r: ["red", "green", "car"],
  w: ["we", "water", "window"],
  y: ["yes", "yellow", "you"],
};

const allItems = groups.flatMap((g) => g.items);

const contentEl = document.getElementById("content");
const groupTemplate = document.getElementById("groupTemplate");
const cardTemplate = document.getElementById("cardTemplate");
const searchInput = document.getElementById("searchInput");
const replayBtn = document.getElementById("replayBtn");
const toggleThemeBtn = document.getElementById("toggleThemeBtn");
const accentSelect = document.getElementById("accentSelect");
const groupViewBtn = document.getElementById("groupViewBtn");
const listViewBtn = document.getElementById("listViewBtn");
const listOverview = document.getElementById("listOverview");
const listContainer = document.getElementById("listContainer");

const quizPanel = document.getElementById("quizPanel");
const quizToggleBtn = document.getElementById("quizToggleBtn");
const quizPlayBtn = document.getElementById("quizPlayBtn");
const quizNextBtn = document.getElementById("quizNextBtn");
const quizStopBtn = document.getElementById("quizStopBtn");
const quizOptions = document.getElementById("quizOptions");
const quizFeedback = document.getElementById("quizFeedback");
const quizScoreEl = document.getElementById("quizScore");
const quizTotalEl = document.getElementById("quizTotal");

let currentKeyword = "";
let lastPlayed = null;
let selectedAccent = localStorage.getItem("ipa-accent") || "uk";

let quizActive = false;
let quizAnswer = null;
let quizAnswered = false;
let quizTotal = 0;
let quizScore = 0;
let viewMode = "group";

const audio = new Audio();
audio.preload = "none";

function shuffle(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function getAudioCandidates(item) {
  return [
    `./audio/ipa/${selectedAccent}/${item.id}.mp3`,
    `./audio/ipa/${item.id}.mp3`,
  ];
}

function speakFallback(item) {
  if (!("speechSynthesis" in window)) return;
  const utter = new SpeechSynthesisUtterance(item.example || item.symbol);
  utter.lang = selectedAccent === "us" ? "en-US" : "en-GB";
  utter.rate = 0.8;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utter);
}

function playByCandidates(candidates, onFail) {
  let idx = 0;

  function tryNext() {
    if (idx >= candidates.length) {
      onFail?.();
      return;
    }
    const src = candidates[idx++];
    audio.src = src;
    audio.currentTime = 0;
    audio.play().catch(tryNext);
  }

  audio.onerror = () => {
    tryNext();
  };

  tryNext();
}

function playWord(word) {
  const utter = new SpeechSynthesisUtterance(word);
  utter.lang = selectedAccent === "us" ? "en-US" : "en-GB";
  utter.rate = 0.78;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utter);
}

function getWords(item) {
  return wordExamplesMap[item.id] || [item.example];
}

function playItem(item) {
  lastPlayed = item;
  replayBtn.disabled = false;
  playByCandidates(
    [
      `./audio/ipa-symbol/${selectedAccent}/${item.id}.mp3`,
      ...getAudioCandidates(item),
    ],
    () => speakFallback(item)
  );
}

function itemVisible(item, keyword) {
  if (!keyword) return true;
  const k = keyword.toLowerCase();
  return (
    item.symbol.toLowerCase().includes(k) ||
    item.example.toLowerCase().includes(k) ||
    item.note.toLowerCase().includes(k)
  );
}

function render() {
  contentEl.innerHTML = "";

  groups.forEach((group) => {
    const visible = group.items.filter((x) => itemVisible(x, currentKeyword));
    if (!visible.length) return;

    const groupNode = groupTemplate.content.cloneNode(true);
    groupNode.querySelector(".group-title").textContent = group.name;
    groupNode.querySelector(".group-count").textContent = `${visible.length} 个`;
    const grid = groupNode.querySelector(".card-grid");

    visible.forEach((item) => {
      const cardNode = cardTemplate.content.cloneNode(true);
      const card = cardNode.querySelector(".ipa-card");
      card.querySelector(".ipa-symbol").textContent = item.symbol;
      const words = getWords(item);
      card.querySelector(".ipa-example").textContent = `例词：${words.join(" / ")}`;
      card.querySelector(".ipa-note").textContent = item.note;

      const meta = card.querySelector(".ipa-meta");
      const wordRow = document.createElement("div");
      wordRow.className = "word-row";
      words.forEach((w) => {
        const wbtn = document.createElement("button");
        wbtn.type = "button";
        wbtn.className = "word-btn";
        wbtn.textContent = `🔊 ${w}`;
        wbtn.addEventListener("click", (e) => {
          e.stopPropagation();
          playWord(w);
        });
        wordRow.appendChild(wbtn);
      });
      meta.appendChild(wordRow);

      card.addEventListener("click", () => playItem(item));
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          playItem(item);
        }
      });
      card.querySelector(".play-btn").addEventListener("click", (e) => {
        e.stopPropagation();
        playItem(item);
      });

      grid.appendChild(cardNode);
    });

    contentEl.appendChild(groupNode);
  });
}

function renderList() {
  listContainer.innerHTML = "";

  groups.forEach((group) => {
    const visible = group.items.filter((x) => itemVisible(x, currentKeyword));
    if (!visible.length) return;

    const block = document.createElement("section");
    block.className = "list-block";

    const title = document.createElement("h3");
    title.className = "list-title";
    title.textContent = `${group.name}（${visible.length}）`;
    block.appendChild(title);

    const row = document.createElement("div");
    row.className = "list-chips";

    visible.forEach((item) => {
      const words = getWords(item);
      const chip = document.createElement("button");
      chip.type = "button";
      chip.className = "ipa-chip";
      chip.innerHTML = `<span class="sym">${item.symbol}</span><span class="ex">${words[0]}</span>`;
      chip.addEventListener("click", () => playItem(item));
      row.appendChild(chip);
    });

    block.appendChild(row);
    listContainer.appendChild(block);
  });
}

function updateScore() {
  quizScoreEl.textContent = String(quizScore);
  quizTotalEl.textContent = String(quizTotal);
}

function setFeedback(text, type = "") {
  quizFeedback.textContent = text;
  quizFeedback.classList.remove("ok", "bad");
  if (type) quizFeedback.classList.add(type);
}

function newQuizQuestion() {
  quizAnswered = false;
  setFeedback("", "");
  quizOptions.innerHTML = "";

  quizAnswer = allItems[Math.floor(Math.random() * allItems.length)];

  const wrongPool = shuffle(allItems.filter((x) => x.id !== quizAnswer.id)).slice(0, 3);
  const options = shuffle([quizAnswer, ...wrongPool]);

  options.forEach((opt) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "quiz-option";
    btn.textContent = opt.symbol;
    btn.addEventListener("click", () => {
      if (quizAnswered) return;
      quizAnswered = true;
      quizTotal += 1;

      const isRight = opt.id === quizAnswer.id;
      if (isRight) {
        quizScore += 1;
        btn.classList.add("correct");
        setFeedback(`✅ 正确！例词：${quizAnswer.example}`, "ok");
      } else {
        btn.classList.add("wrong");
        setFeedback(`❌ 答错了，正确是 ${quizAnswer.symbol}（${quizAnswer.example}）`, "bad");
      }

      [...quizOptions.querySelectorAll(".quiz-option")].forEach((el) => {
        const symbol = el.textContent;
        if (symbol === quizAnswer.symbol) el.classList.add("correct");
      });

      updateScore();
    });

    quizOptions.appendChild(btn);
  });

  playItem(quizAnswer);
}

function startQuiz() {
  quizActive = true;
  quizToggleBtn.textContent = "🎯 练习中";
  quizPanel.classList.remove("hidden");
  newQuizQuestion();
}

function stopQuiz() {
  quizActive = false;
  quizToggleBtn.textContent = "🎯 开始练习";
  quizPanel.classList.add("hidden");
}

function switchView(mode) {
  viewMode = mode;
  const showList = mode === "list";
  contentEl.classList.toggle("hidden", showList);
  listOverview.classList.toggle("hidden", !showList);
  groupViewBtn.classList.toggle("is-active", !showList);
  listViewBtn.classList.toggle("is-active", showList);
}

searchInput.addEventListener("input", (e) => {
  currentKeyword = e.target.value.trim();
  render();
  renderList();
});

replayBtn.addEventListener("click", () => {
  if (lastPlayed) playItem(lastPlayed);
});

accentSelect.addEventListener("change", () => {
  selectedAccent = accentSelect.value;
  localStorage.setItem("ipa-accent", selectedAccent);
  if (lastPlayed) playItem(lastPlayed);
});

quizToggleBtn.addEventListener("click", () => {
  if (!quizActive) startQuiz();
});
quizPlayBtn.addEventListener("click", () => {
  if (quizAnswer) playItem(quizAnswer);
});
quizNextBtn.addEventListener("click", () => {
  if (quizActive) newQuizQuestion();
});
quizStopBtn.addEventListener("click", stopQuiz);

groupViewBtn.addEventListener("click", () => switchView("group"));
listViewBtn.addEventListener("click", () => switchView("list"));

toggleThemeBtn.addEventListener("click", () => {
  const root = document.documentElement;
  const toDark = !root.classList.contains("dark");
  root.classList.toggle("dark", toDark);
  localStorage.setItem("ipa-theme", toDark ? "dark" : "light");
  toggleThemeBtn.textContent = toDark ? "☀️" : "🌙";
});

(function init() {
  const savedTheme = localStorage.getItem("ipa-theme");
  const dark = savedTheme === "dark";
  document.documentElement.classList.toggle("dark", dark);
  toggleThemeBtn.textContent = dark ? "☀️" : "🌙";

  accentSelect.value = selectedAccent;
  updateScore();
  render();
  renderList();
  switchView("group");
})();
