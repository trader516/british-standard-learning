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

const contentEl = document.getElementById("content");
const groupTemplate = document.getElementById("groupTemplate");
const cardTemplate = document.getElementById("cardTemplate");
const searchInput = document.getElementById("searchInput");
const replayBtn = document.getElementById("replayBtn");
const toggleThemeBtn = document.getElementById("toggleThemeBtn");

let currentKeyword = "";
let lastPlayed = null;

const audio = new Audio();
audio.preload = "none";

function getAudioUrl(item) {
  return `./audio/ipa/${item.id}.mp3`;
}

function speakFallback(item) {
  if (!("speechSynthesis" in window)) return;
  const utter = new SpeechSynthesisUtterance(item.example || item.symbol);
  utter.lang = "en-US";
  utter.rate = 0.8;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utter);
}

function playItem(item) {
  const url = getAudioUrl(item);
  lastPlayed = item;
  replayBtn.disabled = false;
  audio.src = url;
  audio.currentTime = 0;
  audio
    .play()
    .catch(() => {
      speakFallback(item);
    });
}

audio.onerror = () => {
  if (lastPlayed) speakFallback(lastPlayed);
};

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
      card.querySelector(".ipa-example").textContent = `例词：${item.example}`;
      card.querySelector(".ipa-note").textContent = item.note;

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

searchInput.addEventListener("input", (e) => {
  currentKeyword = e.target.value.trim();
  render();
});

replayBtn.addEventListener("click", () => {
  if (lastPlayed) playItem(lastPlayed);
});

toggleThemeBtn.addEventListener("click", () => {
  const root = document.documentElement;
  const toDark = !root.classList.contains("dark");
  root.classList.toggle("dark", toDark);
  localStorage.setItem("ipa-theme", toDark ? "dark" : "light");
  toggleThemeBtn.textContent = toDark ? "☀️" : "🌙";
});

(function initTheme() {
  const saved = localStorage.getItem("ipa-theme");
  const dark = saved === "dark";
  document.documentElement.classList.toggle("dark", dark);
  toggleThemeBtn.textContent = dark ? "☀️" : "🌙";
})();

render();
