# 英语音标学习页（适配 Cloudflare Pages）

这是一个纯静态页面：
- 音标按分类展示（元音/双元音/辅音）
- 点击卡片即可播放
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
        ├── i-long.mp3
        ├── i-short.mp3
        ├── ...
```

> 音频默认从 `./audio/ipa/{id}.mp3` 读取。

## 你需要上传的音频文件名

下面这些文件名与页面里的音标一一对应：

```txt
i-long.mp3
i-short.mp3
e.mp3
ae.mp3
a-long.mp3
o-short.mp3
o-long.mp3
u-short.mp3
u-long.mp3
v.mp3
er-long.mp3
schwa.mp3
ei.mp3
ai.mp3
oi.mp3
au.mp3
eu.mp3
ie.mp3
ea.mp3
ue.mp3
p.mp3
b.mp3
t.mp3
d.mp3
k.mp3
g.mp3
f.mp3
v-con.mp3
th-voiceless.mp3
th-voiced.mp3
s.mp3
z.mp3
sh.mp3
zh.mp3
h.mp3
ch.mp3
j.mp3
tr.mp3
dr.mp3
ts.mp3
dz.mp3
m.mp3
n.mp3
ng.mp3
l.mp3
r.mp3
w.mp3
y.mp3
```

## Cloudflare Pages 部署

1. 把这个文件夹整体上传到你的仓库（例如 `english-ipa/`）
2. 在 Cloudflare Pages 里绑定该仓库
3. 构建设置选：
   - Build command: 留空（静态）
   - Output directory: 项目根目录（或 `english-ipa` 对应目录）

## 兜底说明

如果某个 mp3 不存在，页面会尝试用浏览器语音合成播放例词（仅兜底，不如录音标准）。
