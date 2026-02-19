# 英语音标学习页（适配 Cloudflare Pages）

这是一个纯静态页面：
- 音标按分类展示（元音/双元音/辅音）
- 点击卡片播放音频
- **英音 / 美音切换**（UK / US）
- **练习模式：听音选音标**
- 支持移动端（大按钮、单列布局）
- 支持搜索、重播、深色模式

## 目录结构

```txt
ipa-cf-pages/
├── index.html
├── styles.css
├── app.js
└── audio/
    └── ipa/
        ├── uk/
        │   ├── i-long.mp3
        │   └── ...
        ├── us/
        │   ├── i-long.mp3
        │   └── ...
        └── (可选旧目录兼容)
            ├── i-long.mp3
            └── ...
```

## 音频命名规则

页面会按顺序尝试：
1. `./audio/ipa/{accent}/{id}.mp3`（推荐）
2. `./audio/ipa/{id}.mp3`（兼容旧结构）
3. 浏览器语音合成兜底

其中 `{accent}` 为 `uk` 或 `us`。

## 你需要准备的 id 列表

```txt
i-long
i-short
e
ae
a-long
o-short
o-long
u-short
u-long
v
er-long
schwa
ei
ai
oi
au
eu
ie
ea
ue
p
b
t
d
k
g
f
v-con
th-voiceless
th-voiced
s
z
sh
zh
h
ch
j
tr
dr
ts
dz
m
n
ng
l
r
w
y
```

## Cloudflare Pages 部署

1. 把这个文件夹整体上传到你的仓库（例如 `english-ipa/`）
2. 在 Cloudflare Pages 里绑定该仓库
3. 构建设置选：
   - Build command: 留空（静态）
   - Output directory: 项目根目录（或 `english-ipa` 对应目录）

---
如果你后面要加“错题本”“发音评分（Web Speech API）”“按难度抽题”，我也可以继续给你扩展。
