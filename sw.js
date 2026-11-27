<!doctype html>
<html lang="tr" data-glass="1"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover"><meta name="theme-color" content="#0b1214"><meta name="color-scheme" content="dark"><meta name="zuno-app-version" content="0.2.28"><meta name="description" content="Telefon üzerinden Android proje dosyalarını düzenle, önizle ve yedekle."><link rel="manifest" href="./manifest.webmanifest"><link rel="icon" href="./icon.svg" type="image/svg+xml"><title>ZUNO APK</title>
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Space+Grotesk:wght@500;600&display=swap">
<script src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js"></script>
<style>
/* ZUNO APK görünümü: koyu turkuaz dünya, yaylı hareket, şekil değiştiren hero, cam alt menü.
   Tasarım dili: Dalga Müzik / Yumuşak Yükleyici / Yumuşak Anahtar / Dalga Yükleyici / Akışkan Cam Alt Menü demoları. */
:root{
  --bg:#0b1214;--fg:#e6f2f2;--muted:#84a0a0;--line:#1b2c2e;--card:rgb(20,34,37);
  --panel:rgba(14,24,26,.94);--panel-line:rgba(255,255,255,.14);
  --accent:#a3f0f0;--accent-rgb:163,240,240;--accent-dk:#0b2a2a;--th:185;--err:rgb(255,107,122);
  --font-display:'Space Grotesk',system-ui,sans-serif;--font-body:'Inter',system-ui,sans-serif;
  --nav-h:70px;
  color-scheme:dark;
}
*{box-sizing:border-box;-webkit-tap-highlight-color:transparent}
html{background:var(--bg)}
[hidden],.hidden{display:none!important}
body{margin:0;min-height:100vh;background:var(--bg);color:var(--fg);font:15px/1.45 var(--font-body);overflow-x:hidden}
button,input,select,textarea{font:inherit;color:inherit}
button{cursor:pointer;position:relative;overflow:hidden;isolation:isolate;touch-action:manipulation;transition:transform .4s cubic-bezier(.34,1.7,.5,1),background .25s,border-color .25s,color .25s}
button:active{transform:scale(.95)}
button>*{position:relative;z-index:1}
button:focus-visible,input:focus-visible,select:focus-visible,textarea:focus-visible,a:focus-visible,[role=switch]:focus-visible{outline:2px solid var(--accent);outline-offset:3px}
a{color:inherit}
.muted,small{color:var(--muted)}

/* arka plan ışık küreleri (cam efekti açıkken görünür) */
.ambient{position:fixed;inset:0;z-index:0;pointer-events:none;overflow:hidden;opacity:0;transition:opacity .6s}
html[data-glass="1"] .ambient{opacity:1}
.ambient i{position:absolute;width:300px;height:300px;border-radius:50%;animation:drift 16s ease-in-out infinite alternate}
.ambient i:nth-child(1){background:radial-gradient(circle,rgba(var(--accent-rgb),.5),transparent 68%);left:-70px;bottom:40px}
.ambient i:nth-child(2){background:radial-gradient(circle,rgba(108,140,255,.45),transparent 68%);right:-90px;bottom:200px;animation-duration:20s}
.ambient i:nth-child(3){background:radial-gradient(circle,rgba(255,122,168,.4),transparent 68%);left:30%;bottom:-120px;animation-duration:24s}
@keyframes drift{to{transform:translate(60px,-90px) scale(1.15)}}

/* üst çubuk */
header,main{position:relative;z-index:1}
header{display:flex;align-items:center;justify-content:space-between;gap:12px;max-width:820px;margin:0 auto;padding:max(12px,env(safe-area-inset-top,0px)) 16px 8px}
.bw{display:flex;align-items:center;gap:12px;min-width:0}
.logo{display:block;flex:none}
.brand{font-family:var(--font-display);font-weight:600;font-size:1.05rem;letter-spacing:.02em}
.brand span{color:var(--accent)}
header small{display:block;font-size:.75rem}
.header-actions{display:flex;align-items:center;gap:8px;flex-wrap:wrap;justify-content:flex-end}
.header-actions #updateHeaderBtn{font-size:.78rem;padding:8px 12px;white-space:nowrap}
.tag{font-size:.7rem;letter-spacing:.14em;text-transform:uppercase;color:var(--accent);border:1px solid rgba(var(--accent-rgb),.3);border-radius:999px;padding:6px 10px;white-space:nowrap}
@media(max-width:480px){.header-actions .tag{display:none}}

main{max-width:820px;margin:0 auto;padding:10px 16px calc(var(--nav-h) + 64px + env(safe-area-inset-bottom,0px))}

/* sayfalar */
.page{display:none}
.page.active{display:block}
.page.page-enter{animation:pageIn .35s ease-out both}
@keyframes pageIn{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}

/* başlıklar */
h2{font-family:var(--font-display);font-weight:600}
.section-head h2,.page>h2{margin:0;font-size:1.9rem;line-height:1.15}
.page>h2{margin:4px 0 16px}
.section{margin-top:28px}
.section-head{display:flex;justify-content:space-between;align-items:center;gap:10px;margin-bottom:12px}
.section>h3,.section-head h3{margin:0;font-size:.72rem;font-weight:500;letter-spacing:.14em;text-transform:uppercase;color:var(--muted)}
.section>h3{margin-bottom:10px}
.page>.section-head:first-child{margin:4px 0 16px}
label{display:block;font-size:.72rem;letter-spacing:.14em;text-transform:uppercase;color:var(--muted)}

/* düğmeler */
.actions,.toolbar{display:flex;gap:9px;align-items:center;flex-wrap:wrap}
.btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;padding:12px 18px;border:1px solid transparent;border-radius:999px;background:var(--accent);color:var(--accent-dk);font-weight:600;font-size:.95rem;text-decoration:none}
.btn.secondary{background:rgba(255,255,255,.06);color:var(--fg);border-color:var(--panel-line);font-weight:500}
.btn.ghost{background:transparent;color:var(--muted);border-color:var(--panel-line);font-weight:500}
.btn.danger{background:rgba(255,107,122,.08);color:var(--err);border-color:rgba(255,107,122,.3);font-weight:500}
.btn:disabled{opacity:.6;cursor:default}
.tap-ripple{position:absolute;pointer-events:none;border-radius:50%;width:18px;height:18px;transform:translate(-50%,-50%) scale(0);background:radial-gradient(circle,rgba(255,255,255,.38),transparent 70%);animation:tapRipple .55s ease-out forwards;z-index:0}
@keyframes tapRipple{to{transform:translate(-50%,-50%) scale(13);opacity:0}}

/* hero */
.hero{display:flex;flex-direction:column;align-items:center;text-align:center}
.stage{width:min(72vw,250px);aspect-ratio:1/1;margin:2px auto 6px}
.stage canvas{display:block;width:100%;height:100%}
.hero h2{margin:8px 0 10px;font-size:clamp(1.9rem,7vw,2.6rem);line-height:1.12}
.hero>p{max-width:36ch;margin:0 0 20px}
.hero .actions{justify-content:center}
.stats{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;width:100%;margin-top:26px;text-align:left}
.stat{padding:12px;border-radius:16px;background:var(--card);display:flex;flex-direction:column;gap:2px}
.stat strong{font-family:var(--font-display);font-size:1.3rem}
.stat small{font-size:.78rem}

/* kartlar ve projeler */
.card,.project{background:var(--card);border:1px solid transparent;border-radius:20px;padding:16px;margin:10px 0}
html[data-glass="1"] .card,html[data-glass="1"] .project,html[data-glass="1"] .stat{background:linear-gradient(135deg,rgba(255,255,255,.075),rgba(255,255,255,.02)),var(--card);border-color:rgba(255,255,255,.09);box-shadow:inset 0 1px 0 rgba(255,255,255,.12)}
.card b{font-family:var(--font-display);font-weight:600;font-size:1.02rem}
.card p{margin:6px 0 14px;font-size:.88rem}
.card p:last-child{margin-bottom:0}
.grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}
.grid>.card{margin:0}
.project{margin:0;position:relative;overflow:hidden}
.project h4{margin:0 0 6px;font-family:var(--font-display);font-weight:600;font-size:1.05rem;overflow-wrap:anywhere}
.project .mini{font-size:.85rem;color:var(--muted);overflow-wrap:anywhere;line-height:1.6}
.project .actions{margin-top:14px;gap:8px}
.project .btn{padding:8px 13px;font-size:.82rem}
.empty{text-align:center;padding:26px 12px;color:var(--muted)}
.badge{display:inline-block;font-size:.78rem;color:var(--accent);background:rgba(var(--accent-rgb),.1);padding:6px 11px;border-radius:999px;border:1px solid rgba(var(--accent-rgb),.25)}
.notice{border:1px solid rgba(255,180,84,.3);background:rgba(255,180,84,.08);color:#f0cf9f;padding:13px 14px;border-radius:16px;font-size:.88rem;line-height:1.55}

/* form alanları */
.field{display:block;width:100%;background:var(--card);border:1px solid var(--line);color:var(--fg);border-radius:14px;padding:12px 14px;margin:8px 0 16px;font-size:16px;outline:none;transition:border-color .2s,box-shadow .2s}
.field:focus{border-color:var(--accent);box-shadow:0 0 0 3px rgba(var(--accent-rgb),.12)}
.field::placeholder{color:var(--muted);opacity:.7}
.split{display:grid;grid-template-columns:1fr 1fr;gap:12px}

/* editör */
.editor-layout{display:grid;grid-template-columns:190px minmax(0,1fr);gap:12px}
.file-list{padding:8px}
.file-item{display:flex;justify-content:space-between;align-items:center;gap:6px;padding:10px 12px;border-radius:12px;color:var(--muted);cursor:pointer;font-size:.88rem;overflow-wrap:anywhere;transition:background .25s,color .25s,transform .4s cubic-bezier(.34,1.7,.5,1)}
.file-item.active{background:rgba(var(--accent-rgb),.14);color:var(--accent)}
.file-item:active{transform:scale(.97)}
.code{min-height:280px;height:45vh;resize:vertical;font:13px/1.65 ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;tab-size:2;border-radius:18px;margin-bottom:10px}
.preview{width:100%;height:270px;border:1px solid var(--line);border-radius:18px;background:#fff}
.log{background:#070d0f;border:1px solid var(--line);border-radius:16px;padding:13px;min-height:90px;max-height:220px;overflow:auto;font:12px/1.7 ui-monospace,SFMono-Regular,Menlo,monospace;color:#b4e8e0;white-space:pre-wrap}

/* APK indirme paneli */
.apk-glass-panel{position:relative;overflow:hidden;border-radius:24px;background:var(--card)}
html[data-glass="1"] .apk-glass-panel{background:linear-gradient(135deg,rgba(255,255,255,.085),rgba(var(--accent-rgb),.05) 55%,rgba(255,255,255,.015)),var(--card);box-shadow:inset 0 1px 0 rgba(255,255,255,.14)}
.apk-glass-orbit{position:absolute;z-index:0;right:-65px;top:30px;width:250px;height:250px;border-radius:50%;border:1px solid rgba(var(--accent-rgb),.14);pointer-events:none}
.orbit-two{width:190px;height:190px;right:-35px;top:60px;border-color:rgba(255,255,255,.08)}
.apk-glass-content{position:relative;z-index:2;padding:22px}
.apk-kicker{display:flex;align-items:center;gap:9px;font-size:.72rem;letter-spacing:.14em;text-transform:uppercase;color:var(--muted)}
.apk-live-dot{width:7px;height:7px;border-radius:50%;background:var(--accent);box-shadow:0 0 12px var(--accent)}
.apk-version-pill{margin-left:auto;border:1px solid var(--panel-line);border-radius:999px;padding:5px 10px;font-size:.7rem;letter-spacing:.06em;background:rgba(255,255,255,.05)}
.apk-glass-content h2{margin:20px 0 10px;font-size:clamp(2.1rem,9vw,2.9rem);line-height:1.02}
.apk-glass-content h2 span{color:var(--muted)}
.apk-glass-content p{margin:0 0 20px;font-size:.9rem;color:var(--muted)}
.apk-liquid-button{position:relative;display:flex;align-items:center;justify-content:center;gap:12px;width:min(100%,345px);min-height:56px;padding:0 18px;border-radius:999px;overflow:hidden;text-decoration:none;background:var(--accent);color:var(--accent-dk);font-weight:600;transition:transform .4s cubic-bezier(.34,1.7,.5,1)}
.apk-liquid-button:active{transform:scale(.96)}
.apk-button-ripple{position:absolute;inset:-80%;pointer-events:none;background:radial-gradient(circle at 25% 50%,rgba(255,255,255,.34),transparent 24%);animation:apkLiquidWave 6s ease-in-out infinite}
.apk-button-icon{position:relative;display:grid;place-items:center;width:32px;height:32px;border-radius:50%;background:rgba(11,42,42,.14);font-size:1.15rem}
.apk-button-label{position:relative;font-size:.95rem}
.apk-button-arrow{position:relative;margin-left:auto;opacity:.7}
@keyframes apkLiquidWave{0%,100%{transform:translateX(-7%) rotate(-8deg)}50%{transform:translateX(10%) rotate(8deg)}}
.apk-all-releases{display:inline-flex;gap:7px;margin:16px 0 18px;font-size:.85rem;color:var(--muted);text-decoration:none}
.apk-all-releases:hover{color:var(--fg)}
.apk-glass-content small{display:block;font-size:.72rem;opacity:.8}

/* güncelleme ekranı */
.update-card{text-align:center;padding:26px 18px}
.update-card h3{margin:15px 0 8px;font-family:var(--font-display);font-weight:600;font-size:1.35rem}
.update-card .actions{justify-content:center;margin-top:18px}
.update-card .btn{min-width:145px}
.update-card p{margin:0}
#updateDetails{display:block;margin-top:12px;line-height:1.6;font-size:.82rem}
.wave-loader{display:none;position:relative;width:82px;height:82px;margin:4px auto 12px;border:1px solid rgba(var(--accent-rgb),.3);border-radius:50%;overflow:hidden;background:rgba(var(--accent-rgb),.05)}
.wave-loader.active{display:block}
.wave-loader:before,.wave-loader:after{content:"";position:absolute;left:-35%;top:35%;width:170%;height:170%;border-radius:40%;background:rgba(var(--accent-rgb),.3);animation:waveRotate 4s linear infinite}
.wave-loader:after{left:-28%;top:42%;background:rgba(var(--accent-rgb),.42);animation-duration:6s}
.wave-loader span{position:absolute;inset:0;border:1px solid rgba(var(--accent-rgb),.16);border-radius:50%;animation:wavePulse 1.8s ease-out infinite}
.wave-loader span:nth-child(2){animation-delay:.45s}
.wave-loader span:nth-child(3){animation-delay:.9s}
.wave-loader span:nth-child(4){animation-delay:1.35s}
@keyframes waveRotate{to{transform:rotate(360deg)}}
@keyframes wavePulse{0%{transform:scale(.55);opacity:.65}100%{transform:scale(1.35);opacity:0}}
.update-progress{height:6px;overflow:hidden;border-radius:20px;background:rgba(var(--accent-rgb),.1);margin:20px 0 12px}
.progress-wave{height:100%;width:38%;border-radius:20px;background:linear-gradient(90deg,transparent,var(--accent),transparent);animation:progressFlow 1.25s ease-in-out infinite}
@keyframes progressFlow{0%{transform:translateX(-130%)}100%{transform:translateX(330%)}}

/* ayarlar: görünüm */
.list{display:flex;flex-direction:column;margin-top:10px}
.item{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:14px 0;border-top:1px solid var(--line)}
.item:last-child{padding-bottom:0}
.item.col{flex-direction:column;align-items:stretch;gap:12px}
.item .txt{min-width:0;display:flex;flex-direction:column;gap:3px;flex:1}
.item .t{font-size:1rem;font-weight:500}
.item .d{font-size:.85rem;color:var(--muted)}
.swatches{display:flex;flex-wrap:wrap;gap:10px;align-items:center}
.swc{width:30px;height:30px;border-radius:50%;border:2px solid transparent;padding:0;background:var(--c)}
.swc[aria-pressed="true"]{border-color:#fff;box-shadow:0 0 0 2px rgba(255,255,255,.25)}
.custom{display:inline-flex;align-items:center;gap:8px;font-size:.82rem;letter-spacing:0;text-transform:none;color:var(--muted)}
.custom input{width:34px;height:30px;padding:0;border:1px solid var(--panel-line);border-radius:8px;background:transparent}
input[type=range]{width:100%;accent-color:var(--accent)}
.sw{position:relative;width:56px;height:32px;flex:none;border:0;border-radius:999px;padding:0;background:rgb(27,44,46);transition:background .3s}
.sw::after{content:"";position:absolute;left:5px;top:5px;width:22px;height:22px;border-radius:50%;background:var(--muted);transition:transform .5s cubic-bezier(.34,1.7,.5,1),background .3s,width .2s}
.sw[aria-checked="true"]{background:var(--accent)}
.sw[aria-checked="true"]::after{transform:translateX(24px);background:var(--accent-dk)}
.sw:active{transform:none}
.sw:active::after{width:28px}
.sw[aria-checked="true"]:active::after{transform:translateX(18px)}

/* cam alt menü */
.bottom-nav{position:fixed;left:50%;transform:translateX(-50%);width:min(calc(100% - 32px),408px);z-index:9999;bottom:max(14px,env(safe-area-inset-bottom,0px));height:var(--nav-h);border-radius:35px;display:grid;grid-template-columns:repeat(5,1fr);isolation:isolate;touch-action:manipulation;background:rgb(18,31,34);border:1px solid rgba(255,255,255,.1);box-shadow:0 14px 40px rgba(0,0,0,.5)}
html[data-glass="1"] .bottom-nav{background:linear-gradient(135deg,rgba(255,255,255,.17),rgba(255,255,255,.05));-webkit-backdrop-filter:blur(18px) saturate(1.7);backdrop-filter:blur(18px) saturate(1.7);border-color:rgba(255,255,255,.22);box-shadow:0 14px 40px rgba(0,0,0,.45),inset 0 1px 0 rgba(255,255,255,.3),inset 0 -1px 0 rgba(255,255,255,.06)}
.bottom-nav button{position:relative;z-index:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:5px;min-width:0;padding:0;border:0;border-radius:30px;background:none;color:var(--muted);font-size:10.5px;font-weight:500;line-height:1;white-space:nowrap;pointer-events:auto}
.bottom-nav button.active{color:var(--accent);font-weight:600}
.bottom-nav button:active{transform:scale(.93)}
.bottom-nav .ico{display:grid;place-items:center;width:24px;height:24px;pointer-events:none;transition:transform .5s cubic-bezier(.34,1.7,.5,1)}
.bottom-nav svg{width:24px;height:24px;fill:none;stroke:currentColor;stroke-width:1.9;stroke-linecap:round;stroke-linejoin:round;overflow:visible}
.bottom-nav button.active .ico{transform:translateY(-1px) scale(1.08)}
.bottom-nav .fl{transition:fill .3s}
.bottom-nav button.active .fl{fill:rgba(var(--accent-rgb),.25)}
.ind{position:absolute;z-index:0;top:7px;left:0;height:calc(var(--nav-h) - 16px);width:66px;border-radius:999px;background:rgba(var(--accent-rgb),.16);pointer-events:none;will-change:transform,width;transition:opacity .25s}
html[data-glass="1"] .ind{background:linear-gradient(165deg,rgba(var(--accent-rgb),.28),rgba(var(--accent-rgb),.08));border:1px solid rgba(var(--accent-rgb),.3);box-shadow:inset 0 1px 1px rgba(255,255,255,.3)}
.bottom-nav.none .ind{opacity:0}

@media(max-width:600px){.grid{grid-template-columns:1fr}.split{grid-template-columns:1fr}.editor-layout{grid-template-columns:1fr}.file-list{display:flex;flex-wrap:wrap}.file-item{padding:8px 12px}.stats{gap:8px}}
@media(prefers-reduced-motion:reduce){*,*:before,*:after{animation-duration:.01ms!important;animation-iteration-count:1!important;transition-duration:.01ms!important;scroll-behavior:auto!important}}
</style></head><body>
<div class="ambient" aria-hidden="true"><i></i><i></i><i></i></div>
<header><div class="bw"><canvas class="logo" id="logo" aria-hidden="true"></canvas><div><div class="brand">ZUNO <span>APK</span></div><small>Mobile Android Studio</small></div></div><div class="header-actions"><button id="updateHeaderBtn" class="btn secondary" type="button" onclick="go('updates')">↻ Güncelleme</button><button id="installBtn" class="btn secondary" hidden style="padding:8px 11px;font-size:12px">Uygulamayı yükle</button><span class="tag">BROWSER WORKSPACE</span></div></header>
<main>
<section class="page active" id="home">
<div class="hero"><div class="stage" id="heroStage"><canvas id="heroCv" aria-hidden="true"></canvas></div><h2>Android projeni<br>telefonundan yönet.</h2><p class="muted">Projelerini oluştur, kaynak dosyalarını düzenle, canlı önizle ve dışa aktar.</p><div class="actions"><button class="btn" onclick="go('projects');focusNew()">＋ Yeni proje</button><button class="btn secondary" onclick="document.getElementById('importInput').click()">Dosya / ZIP içe aktar</button><input id="importInput" type="file" accept=".zip,.html,.htm,.css,.js,.json,.txt" multiple hidden></div>
<div class="stats"><div class="stat"><strong id="statProjects">0</strong><small>Proje</small></div><div class="stat"><strong id="statFiles">0</strong><small>Kaynak dosya</small></div><div class="stat"><strong>Web</strong><small>Çalışma alanı</small></div></div></div>
<div class="section"><div class="apk-glass-panel"><div class="apk-glass-orbit orbit-one"></div><div class="apk-glass-orbit orbit-two"></div><div class="apk-glass-content"><div class="apk-kicker"><span class="apk-live-dot"></span> ZUNO ANDROID <span class="apk-version-pill" id="siteApkBadge">SON SÜRÜM</span></div><h2>Bir dokunuşla<br/><span>indir.</span></h2><p id="siteApkInfo">ZUNO’nun Android sürümünü cihazına al.</p><a class="apk-liquid-button" id="siteApkDownload" href="https://github.com/mm2ultimatehub-rgb/Zuno-apk/releases/latest" target="_blank" rel="noopener"><span class="apk-button-ripple"></span><span class="apk-button-icon">↓</span><span class="apk-button-label">APK’yı indir</span><span class="apk-button-arrow">↗</span></a><a class="apk-all-releases" href="https://github.com/mm2ultimatehub-rgb/Zuno-apk/releases" target="_blank" rel="noopener">Tüm sürümler <span>↗</span></a><small>Android · Resmî ZUNO sürümü</small></div></div></div>
<div class="section"><div class="section-head"><h3>Son çalışmalar</h3><button class="btn ghost" onclick="go('projects')">Tüm projeler →</button></div><div id="recent" class="grid"></div></div>
<div class="section"><h3>Geliştirme araçları</h3><div class="grid"><div class="card"><b>Kaynak editörü</b><p class="muted">HTML, CSS, JS ve JSON dosyalarını düzenle.</p></div><div class="card"><b>Canlı önizleme</b><p class="muted">Web tabanlı arayüzünü izole pencerede çalıştır.</p></div><div class="card"><b>ZIP dışa aktar</b><p class="muted">Proje dosyalarını tek arşivde indir.</p></div><div class="card"><b>APK build</b><p class="muted">Android SDK + Gradle backend entegrasyon aşaması.</p></div></div></div>
</section>
<section class="page" id="projects"><div class="section-head"><h2>Projeler</h2><button class="btn secondary" onclick="createProject()">＋ Oluştur</button></div><div class="card" id="newProjectCard"><label>Proje adı<input class="field" id="pName" placeholder="Örn. My Android App" maxlength="70"></label><label>Android paket kimliği<input class="field" id="pPackage" value="app.zuno.myapp"></label><div class="actions"><button class="btn" onclick="createProject()">Projeyi oluştur</button><button class="btn ghost" onclick="newProjectCard.classList.add('hidden')">İptal</button></div></div><div id="allProjects" class="grid"></div></section>
<section class="page" id="editor"><div class="section-head"><h2>Editör</h2><span class="badge" id="activeProjectLabel">Proje seçilmedi</span></div><div id="noProject" class="card empty">Önce Projeler bölümünden bir proje oluştur veya içe aktar.</div><div id="editorPanel" class="hidden"><div class="toolbar card"><select class="field" style="flex:1;margin:0" id="projectSelect"></select><button class="btn secondary" onclick="addFile()">＋ Dosya</button><button class="btn secondary" onclick="saveEditor()">Kaydet</button></div><div class="editor-layout"><div class="card file-list" id="fileList"></div><div class="card" style="min-width:0"><div class="toolbar" style="margin-bottom:10px"><span id="fileName" class="badge">index.html</span><button class="btn ghost" onclick="removeFile()">Sil</button></div><textarea id="source" class="field code" spellcheck="false" autocapitalize="off" autocomplete="off"></textarea><small id="saveStatus">Otomatik taslak kaydı açık</small></div></div><div class="section"><div class="section-head"><h3>Canlı önizleme</h3><button class="btn secondary" onclick="refreshPreview()">Yenile</button></div><iframe id="preview" class="preview" sandbox="allow-scripts"></iframe></div></div></section>
<section class="page" id="build"><h2>APK Derleme</h2><div class="notice">Bilgi: Bu GitHub Pages sürümü Android SDK/Gradle çalıştırmaz. Gerçek APK için ayrı, güvenli build sunucusu ve imzalama yapılandırması gerekir. Burada APK uydurulmaz.</div><div class="card"><label>Seçili proje<select class="field" id="buildProject"></select></label><div class="split"><label>Version name<input class="field" id="versionName" value="1.0.0"></label><label>Version code<input class="field" id="versionCode" type="number" min="1" value="1"></label></div><label>Build backend URL<input class="field" id="backendUrl" placeholder="https://build-api.example.com"></label><label>Build profili<select class="field" id="buildProfile"><option value="release">Release (imzalı)</option><option value="debug">Debug (test)</option></select></label><button class="btn secondary" onclick="saveBuildSettings()">Build ayarlarını kaydet</button><p class="muted" style="margin-top:14px">Backend adresi cihazında saklanır. API anahtarını bu statik sayfaya koyma; yalnızca backend tarafında güvenli secret olarak tut.</p></div><div class="section"><h3>Build kayıtları</h3><div id="buildLog" class="log">Henüz gerçek build çalıştırılmadı.</div></div></section>
<section class="page" id="updates"><div class="section-head"><h2>Güncellemeler</h2><span class="badge" id="updateBadge">Kontrol edilmedi</span></div><div class="card update-card"><div class="wave-loader" id="waveLoader" aria-hidden="true"><span></span><span></span><span></span><span></span></div><h3 id="updateTitle">ZUNO sürümünü kontrol et</h3><p class="muted" id="updateMessage">GitHub Releases üzerinden resmi APK sürümü aranır.</p><div class="actions"><button class="btn" id="checkUpdateBtn" type="button" onclick="checkZunoUpdate()">Güncellemeyi denetle</button><a class="btn secondary hidden" id="downloadUpdateBtn" href="#" rel="noopener">APK indir</a></div><div class="update-progress hidden" id="updateProgress"><div class="progress-wave"></div></div><small id="updateDetails"></small></div><div class="card"><b>Kurulum notu</b><p class="muted">APK indirildikten sonra dosyayı aç ve Android kurulum ekranında Güncelle seçeneğini kullan. Uygulama içinden sessiz kurulum Android tarafından engellenir. Güncellemenin mevcut uygulamanın üzerine kurulması için APK aynı imza anahtarıyla imzalanmalıdır.</p></div></section>
<section class="page" id="settings"><h2>Ayarlar ve veri</h2>
<div class="card"><b>Görünüm</b><div class="list">
<div class="item col"><span class="t">Vurgu rengi</span><div class="swatches" id="uiSwatches"><button type="button" class="swc" data-c="#a3f0f0" style="--c:#a3f0f0" aria-label="Turkuaz" aria-pressed="true"></button><button type="button" class="swc" data-c="#ffb454" style="--c:#ffb454" aria-label="Turuncu" aria-pressed="false"></button><button type="button" class="swc" data-c="#ff9db8" style="--c:#ff9db8" aria-label="Pembe" aria-pressed="false"></button><button type="button" class="swc" data-c="#9ccaff" style="--c:#9ccaff" aria-label="Mavi" aria-pressed="false"></button><button type="button" class="swc" data-c="#a6f0a6" style="--c:#a6f0a6" aria-label="Yeşil" aria-pressed="false"></button><button type="button" class="swc" data-c="#cdb4ff" style="--c:#cdb4ff" aria-label="Mor" aria-pressed="false"></button><label class="custom" for="uiCustom">Kendi rengin <input type="color" id="uiCustom" value="#a3f0f0"></label></div></div>
<div class="item"><div class="txt"><span class="t" id="lbUiGlass">Cam efekti</span><span class="d">Alt menü ve arka plan ışıkları</span></div><button class="sw" id="uiGlass" type="button" role="switch" aria-labelledby="lbUiGlass" aria-checked="true"></button></div>
<div class="item col"><span class="t">Animasyon hızı</span><input type="range" id="uiSpeed" min="0.5" max="2" step="0.1" value="1" aria-label="Animasyon hızı"></div>
</div></div>
<div class="card"><b>Proje yedeği</b><p class="muted">Tüm projelerini JSON yedeği olarak indir veya yedeği geri yükle.</p><div class="actions"><button class="btn secondary" onclick="backupAll()">JSON yedeği indir</button><button class="btn secondary" onclick="document.getElementById('backupInput').click()">Yedek yükle</button><input id="backupInput" type="file" accept=".json" hidden></div></div><div class="card"><b>Yerel depolama</b><p class="muted">Proje ve kaynakların bu tarayıcıda tutulur. Tarayıcı verilerini silersen yedek olmadan kaybolabilir.</p><button class="btn danger" onclick="clearData()">Tüm yerel projeleri sil</button></div><div class="card"><b>ZUNO APK</b><p class="muted">GitHub Pages · Mobil öncelikli proje alanı</p><span class="badge">v0.2.0 workspace</span></div></section>
</main>
<nav class="bottom-nav" id="bottomNav" aria-label="Ana gezinme"><div class="ind" id="navInd" aria-hidden="true"></div><button type="button" class="active" data-page="home"><span class="ico" aria-hidden="true"><svg viewBox="0 0 24 24"><path class="fl" d="M4.5 10.8 12 4.5l7.5 6.3V19a1.5 1.5 0 0 1-1.5 1.5H6A1.5 1.5 0 0 1 4.5 19z"/><path d="M9.5 20.5v-5a2.5 2.5 0 0 1 5 0v5"/></svg></span><span>Ana sayfa</span></button><button type="button" data-page="projects"><span class="ico" aria-hidden="true"><svg viewBox="0 0 24 24"><path class="fl" d="M3.5 7.5A1.5 1.5 0 0 1 5 6h4l2 2.2h8a1.5 1.5 0 0 1 1.5 1.5V17.5A1.5 1.5 0 0 1 19 19H5a1.5 1.5 0 0 1-1.5-1.5z"/></svg></span><span>Projeler</span></button><button type="button" data-page="editor"><span class="ico" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M8.5 8 4.5 12l4 4M15.5 8l4 4-4 4M13.5 6l-3 12"/></svg></span><span>Editör</span></button><button type="button" data-page="build"><span class="ico" aria-hidden="true"><svg viewBox="0 0 24 24"><path class="fl" d="M12 3.5 19.5 7.5v9L12 20.5 4.5 16.5v-9z"/><path d="M4.5 7.5 12 11.5l7.5-4M12 11.5v9"/></svg></span><span>Build</span></button><button type="button" data-page="settings"><span class="ico" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M5 8h9M18 8h1M5 16h1M10 16h9"/><circle cx="16" cy="8" r="2"/><circle cx="8" cy="16" r="2"/></svg></span><span>Ayarlar</span></button></nav>
<script>
// Consistent tactile feedback for every real button, without blocking its click handler.
document.addEventListener('pointerdown',event=>{const button=event.target.closest('button');if(!button||button.disabled)return;const rect=button.getBoundingClientRect();const ripple=document.createElement('span');ripple.className='tap-ripple';ripple.style.left=(event.clientX-rect.left)+'px';ripple.style.top=(event.clientY-rect.top)+'px';button.appendChild(ripple);ripple.addEventListener('animationend',()=>ripple.remove(),{once:true})},{passive:true});
const KEY='zunoApkWorkspaceV2';
let db=loadDB(),currentId=db.current||null,currentFile='index.html';
function loadDB(){try{return JSON.parse(localStorage.getItem(KEY))||{projects:[]}}catch{return{projects:[]}}}
function persist(){db.current=currentId;localStorage.setItem(KEY,JSON.stringify(db));renderAll()}
function active(){return db.projects.find(p=>p.id===currentId)}
// Explicit delegated navigation handlers for mobile tap reliability.
const bottomNav=document.getElementById('bottomNav');
bottomNav.addEventListener('click',event=>{const b=event.target.closest('button[data-page]');if(!b)return;event.preventDefault();go(b.dataset.page,b)},true);
// Use the click event as the single navigation path; Android synthesizes click after pointerup.

function go(page,button){const target=document.getElementById(page);if(!target)return;const current=document.querySelector('.page.active');if(current===target){target.classList.remove('page-enter');void target.offsetWidth;target.classList.add('page-enter')}else{document.querySelectorAll('.page').forEach(x=>{x.classList.remove('active','page-enter')});target.classList.add('active','page-enter')}document.querySelectorAll('.bottom-nav button').forEach(x=>x.classList.toggle('active',x.dataset.page===page));if(page==='editor')setupEditor();if(page==='build')setupBuild();renderAll();}
function focusNew(){setTimeout(()=>document.getElementById('pName').focus(),80)}
function createProject(){let name=document.getElementById('pName').value.trim()||'Yeni Android Projesi';let pkg=document.getElementById('pPackage').value.trim()||'app.zuno.newapp';if(!/^[a-zA-Z][a-zA-Z0-9_]*(\.[a-zA-Z][a-zA-Z0-9_]*)+$/.test(pkg)){alert('Paket kimliği app.example.myapp biçiminde olmalı.');return}let p={id:crypto.randomUUID?crypto.randomUUID():String(Date.now()),name,package:pkg,updated:Date.now(),files:{'index.html':'<!doctype html>\n<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>'+safeText(name)+'</title><link rel="stylesheet" href="style.css"></head><body><main><h1>'+safeText(name)+'</h1><p>Built with ZUNO APK workspace.</p></main><script src="app.js"><\/script></body></html>','style.css':'body{font-family:system-ui,sans-serif;margin:0;padding:24px;background:#f2f5f3;color:#17251e}main{max-width:640px;margin:10vh auto;padding:24px;border-radius:20px;background:white;box-shadow:0 12px 40px #0001}h1{color:#168365}','app.js':'console.log("Hello from ZUNO APK");'}};db.projects.unshift(p);currentId=p.id;currentFile='index.html';document.getElementById('pName').value='';persist();go('editor')}
function safeText(s){return String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]))}
function renderAll(){let ps=db.projects;statProjects.textContent=ps.length;statFiles.textContent=ps.reduce((n,p)=>n+Object.keys(p.files||{}).length,0);recent.innerHTML=ps.slice(0,4).map(projectCard).join('')||'<div class="card empty">Henüz proje yok. Yeni proje oluştur.</div>';allProjects.innerHTML=ps.map(projectCard).join('')||'<div class="card empty">İlk projen hazır olduğunda burada görünecek.</div>';activeProjectLabel.textContent=active()?.name||'Proje seçilmedi';}
function projectCard(p){return '<article class="project"><h4>'+safeText(p.name)+'</h4><div class="mini">'+safeText(p.package)+'<br>'+Object.keys(p.files||{}).length+' dosya</div><div class="actions"><button class="btn secondary" onclick="openProject(\''+p.id+'\')">Aç</button><button class="btn ghost" onclick="exportProject(\''+p.id+'\')">ZIP</button><button class="btn ghost" onclick="renameProject(\''+p.id+'\')">Ad</button><button class="btn danger" onclick="deleteProject(\''+p.id+'\')">Sil</button></div></article>'}
function openProject(id){currentId=id;currentFile='index.html';persist();go('editor')}
function renameProject(id){let p=db.projects.find(x=>x.id===id);let n=prompt('Yeni proje adı:',p.name);if(n&&n.trim()){p.name=n.trim();p.updated=Date.now();persist()}}
function deleteProject(id){let p=db.projects.find(x=>x.id===id);if(!confirm('"'+p.name+'" projesi ve dosyaları silinsin mi?'))return;db.projects=db.projects.filter(x=>x.id!==id);if(currentId===id)currentId=db.projects[0]?.id||null;persist()}
function setupEditor(){let p=active();noProject.classList.toggle('hidden',!!p);editorPanel.classList.toggle('hidden',!p);if(!p)return;projectSelect.innerHTML=db.projects.map(x=>'<option value="'+x.id+'" '+(x.id===p.id?'selected':'')+'>'+safeText(x.name)+'</option>').join('');projectSelect.onchange=()=>openProject(projectSelect.value);if(!p.files[currentFile])currentFile=Object.keys(p.files)[0];renderFiles();source.value=p.files[currentFile]||'';fileName.textContent=currentFile;refreshPreview()}
function renderFiles(){let p=active();fileList.innerHTML=Object.keys(p.files).map(f=>'<div class="file-item '+(f===currentFile?'active':'')+'" onclick="selectFile(\''+f.replace(/'/g,"\\'")+'\')">'+safeText(f)+'</div>').join('')}
function selectFile(f){saveEditor(false);currentFile=f;setupEditor()}
function saveEditor(showMsg=true){let p=active();if(!p)return;p.files[currentFile]=source.value;p.updated=Date.now();persist();if(showMsg)saveStatus.textContent='Kaydedildi · '+new Date().toLocaleTimeString();refreshPreview()}
source.addEventListener('input',()=>{let p=active();if(p){p.files[currentFile]=source.value;p.updated=Date.now();localStorage.setItem(KEY,JSON.stringify({...db,current:currentId}));saveStatus.textContent='Değişiklikler otomatik kaydediliyor…'}});
function addFile(){let name=prompt('Dosya adı (ör. about.html veya styles/main.css):');if(!name)return;name=name.trim();if(!name||name.includes('..')||name.startsWith('/')){alert('Geçerli, göreli bir dosya yolu gir.');return}let p=active();if(p.files[name]!==undefined){alert('Bu dosya zaten var.');return}p.files[name]='';currentFile=name;persist();setupEditor()}
function removeFile(){let p=active();if(!p||Object.keys(p.files).length<=1){alert('Projede en az bir dosya kalmalı.');return}if(!confirm(currentFile+' silinsin mi?'))return;delete p.files[currentFile];currentFile=Object.keys(p.files)[0];persist();setupEditor()}
function refreshPreview(){let p=active();if(!p)return;let h=p.files['index.html']||'<h2>index.html bulunamadı</h2>';let css=p.files['style.css']||'';let js=p.files['app.js']||'';h=h.replace(/<link[^>]+href=["']style\.css["'][^>]*>/i,'<style>'+css+'</style>');const closeTag='<'+String.fromCharCode(47)+'script>';const escapedClose='<'+String.fromCharCode(92)+String.fromCharCode(47)+'script>';js=js.split(closeTag).join(escapedClose);const openTag='<script src="app.js">';const scriptAt=h.indexOf(openTag);if(scriptAt>=0){const closeAt=h.indexOf(closeTag,scriptAt);if(closeAt>=0)h=h.slice(0,scriptAt)+ '<script>'+js+closeTag+h.slice(closeAt+closeTag.length)}preview.srcdoc=h}
function setupBuild(){buildProject.innerHTML=db.projects.map(p=>'<option value="'+p.id+'" '+(p.id===currentId?'selected':'')+'>'+safeText(p.name)+'</option>').join('');backendUrl.value=localStorage.getItem('zunoBackendUrl')||'';let s=JSON.parse(localStorage.getItem('zunoBuildSettings')||'{}');versionName.value=s.versionName||'1.0.0';versionCode.value=s.versionCode||1;buildProfile.value=s.profile||'release'}
function saveBuildSettings(){localStorage.setItem('zunoBackendUrl',backendUrl.value.trim());localStorage.setItem('zunoBuildSettings',JSON.stringify({versionName:versionName.value,versionCode:versionCode.value,profile:buildProfile.value,project:buildProject.value}));buildLog.textContent='Build ayarları cihazda kaydedildi. Gerçek derleme backend bağlantısı bekleniyor.';alert('Build ayarları kaydedildi.')}
async function exportProject(id){let p=db.projects.find(x=>x.id===id);if(!window.JSZip){alert('ZIP arşiv kütüphanesi yüklenemedi. İnternet bağlantını kontrol et.');return}let z=new JSZip();z.file('zuno-project.json',JSON.stringify({name:p.name,package:p.package},null,2));Object.entries(p.files).forEach(([n,c])=>z.file(n,c));let blob=await z.generateAsync({type:'blob'});downloadBlob(blob,p.name.replace(/[^a-z0-9-_]/gi,'_')+'.zip')}
function downloadBlob(blob,name){let a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(a.href),1200)}
async function importFiles(files){for(let f of files){if(f.name.toLowerCase().endsWith('.zip')&&window.JSZip){try{let z=await JSZip.loadAsync(f),files={};for(let [n,obj]of Object.entries(z.files)){if(!obj.dir&&!n.startsWith('__MACOSX/'))files[n]=await obj.async('string')}let p={id:String(Date.now()+Math.random()),name:f.name.replace(/\.zip$/i,''),package:'app.zuno.imported',updated:Date.now(),files};db.projects.unshift(p);currentId=p.id;currentFile=Object.keys(files)[0]||'index.html'}catch(e){alert('ZIP açılamadı: '+e.message)}}else{let content=await f.text(),p=active();if(!p){p={id:String(Date.now()),name:f.name,package:'app.zuno.imported',updated:Date.now(),files:{}};db.projects.unshift(p);currentId=p.id}p.files[f.name]=content;currentFile=f.name;p.updated=Date.now()}}persist();if(active())go('editor')}
importInput.addEventListener('change',e=>importFiles([...e.target.files]));function backupAll(){downloadBlob(new Blob([JSON.stringify(db,null,2)],{type:'application/json'}),'zuno-apk-backup.json')}
backupInput.addEventListener('change',async e=>{let f=e.target.files[0];if(!f)return;try{let d=JSON.parse(await f.text());if(!Array.isArray(d.projects))throw Error('Yedek biçimi geçersiz');db=d;currentId=db.current||db.projects[0]?.id||null;persist();alert('Yedek geri yüklendi.')}catch(x){alert('Yedek yüklenemedi: '+x.message)}})
function clearData(){if(!confirm('Bu tarayıcıdaki ZUNO APK proje verilerinin tamamı silinsin mi?'))return;localStorage.removeItem(KEY);db={projects:[]};currentId=null;persist();go('home')}
// Installable PWA shell; build/signing still requires a separate Android backend.
let installPrompt=null;
const installBtn=document.getElementById('installBtn');
window.addEventListener('beforeinstallprompt',event=>{event.preventDefault();installPrompt=event;installBtn.hidden=false});
installBtn?.addEventListener('click',async()=>{if(!installPrompt)return;installPrompt.prompt();await installPrompt.userChoice;installPrompt=null;installBtn.hidden=true});
window.addEventListener('appinstalled',()=>{installBtn.hidden=true;installPrompt=null});
if('serviceWorker' in navigator){window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js').catch(err=>console.warn('PWA service worker:',err)))}
// GitHub Release-based APK updater. Publish a signed APK in a GitHub Release for this checker to find it.
const ZUNO_RELEASE_API='https://api.github.com/repos/mm2ultimatehub-rgb/Zuno-apk/releases/latest';
let zunoLatestRelease=null;
async function checkZunoUpdate(){
 const badge=document.getElementById('updateBadge'),title=document.getElementById('updateTitle'),message=document.getElementById('updateMessage'),loader=document.getElementById('waveLoader'),button=document.getElementById('checkUpdateBtn'),download=document.getElementById('downloadUpdateBtn'),details=document.getElementById('updateDetails');
 loader.classList.add('active');button.disabled=true;button.textContent='Denetleniyor…';badge.textContent='Kontrol ediliyor';download.classList.add('hidden');document.getElementById('updateProgress').classList.add('hidden');details.textContent='';
 try{
  const response=await fetch(ZUNO_RELEASE_API,{headers:{Accept:'application/vnd.github+json'},cache:'no-store'});
  if(response.status===404){badge.textContent='Yayın bulunamadı';title.textContent='Henüz APK sürümü yayınlanmamış';message.textContent='GitHub Releases bölümüne imzalı APK yayınlandığında burada görünür.';return}
  if(!response.ok)throw new Error('GitHub yanıtı: HTTP '+response.status);
  const release=await response.json();zunoLatestRelease=release;
  const apk=(release.assets||[]).find(a=>/\.apk$/i.test(a.name));
  const meta=document.querySelector('meta[name="zuno-app-version"]')?.content?.trim()||'';
  const versionPattern=/^(\d+)\.(\d+)\.(\d+)$/;
  const currentMatch=meta.match(versionPattern);
  const tagMatch=(release.tag_name||'').match(/(\d+\.\d+\.\d+)/);
  const current=currentMatch?currentMatch.slice(1).map(Number):null;
  const latest=tagMatch?tagMatch[1].split('.').map(Number):null;
  const compare=(a,b)=>{for(let i=0;i<3;i++){if(a[i]!==b[i])return a[i]-b[i]}return 0};
  const isPages=location.hostname.endsWith('.github.io');
  const canCompare=!!(current&&latest);
  const newer=canCompare?compare(latest,current)>0:false;
  const offer=!!apk&&(isPages||!canCompare||newer);
  title.textContent=release.name||release.tag_name||'ZUNO sürümü';
  if(isPages){
   badge.textContent='Son APK hazır';title.textContent='En son yayınlanan ZUNO APK';
   message.textContent='Bu web sayfası cihazında kurulu APK sürümünü okuyamaz. Aşağıdaki bağlantı her zaman GitHub’daki son APK dosyasını indirir; kurulu sürümle karşılaştırmayı Android uygulaması yapar.';
  }else if(!canCompare){
   badge.textContent='Sürüm doğrulanamadı';title.textContent='Sürüm bilgisi düzeltme güncellemesi';
   message.textContent='Bu kurulumun sürüm etiketi okunamadı. Aynı sürümü tekrar göstermemek için sürüm bilgisi düzeltilmiş yeni APK’yı yükle.';
  }else if(newer){
   badge.textContent=apk?'Güncelleme var':'Yeni sürüm';
   message.textContent='Kurulu sürüm: '+meta+' · Yeni sürüm: '+tagMatch[1];
  }else{
   badge.textContent='ZUNO güncel';title.textContent='En son sürüm zaten yüklü';
   message.textContent='Kurulu sürüm: '+meta+' · Son yayın: '+tagMatch[1];
  }
  if(offer){
   download.href=apk.browser_download_url;download.download=apk.name;download.classList.remove('hidden');
   download.textContent=isPages?'Son APK’yı indir':'Güncellemeyi indir';
   details.textContent='Dosya: '+apk.name+' · '+(apk.size?((apk.size/1024/1024).toFixed(2)+' MB'):'Boyut belirtilmemiş')+' · '+(release.published_at?new Date(release.published_at).toLocaleDateString():'');
  }else if(!apk){details.textContent='Bu Release içinde .apk dosyası bulunamadı.'}
 }catch(error){badge.textContent='Kontrol başarısız';title.textContent='Sürüm kontrol edilemedi';message.textContent='İnternet bağlantısını kontrol edip tekrar dene.';details.textContent=String(error.message||error)}
 finally{loader.classList.remove('active');button.disabled=false;button.textContent='Yeniden denetle'}
}
document.getElementById('downloadUpdateBtn').addEventListener('click',()=>{const loader=document.getElementById('waveLoader'),progress=document.getElementById('updateProgress'),message=document.getElementById('updateMessage'),details=document.getElementById('updateDetails');loader.classList.add('active');progress.classList.remove('hidden');message.textContent='APK indirme bağlantısı açılıyor…';details.textContent='İndirme Android tarayıcısında / indirme yöneticisinde devam eder. İndikten sonra APK dosyasını açıp yükle.';});
// Home-page APK download card: resolve the latest published APK asset.
async function loadSiteApk(){const badge=document.getElementById('siteApkBadge'),info=document.getElementById('siteApkInfo'),link=document.getElementById('siteApkDownload');try{const res=await fetch(ZUNO_RELEASE_API,{headers:{Accept:'application/vnd.github+json'},cache:'no-store'});if(!res.ok)throw Error('HTTP '+res.status);const release=await res.json();const apk=(release.assets||[]).find(a=>/\.apk$/i.test(a.name));if(apk){link.href=apk.browser_download_url;link.removeAttribute('target');link.textContent='APK indir · '+(release.tag_name||'son sürüm');badge.textContent='Yayında';info.textContent=(release.name||release.tag_name||'Son ZUNO sürümü')+' · '+(apk.size?(apk.size/1024/1024).toFixed(1)+' MB':'APK');}else{badge.textContent='APK bulunamadı';info.textContent='En son Release içinde APK dosyası henüz yok. Tüm sürümler sayfasından kontrol edebilirsin.';}}catch(e){badge.textContent='Bağlantı bekleniyor';info.textContent='APK indirme bağlantısı alınamadı. GitHub Releases sayfasından son APK’yı aç.';}}
loadSiteApk();
renderAll();
</script>
<script>
/* Görünüm katmanı: vurgu rengi, cam efekti, hero şekil animasyonu ve yaylı alt menü kapsülü.
   Çalışma alanı mantığından bağımsızdır (yukarıdaki betiğe dokunmaz). */
(function(){
'use strict';
var $=function(id){return document.getElementById(id)};
var UIKEY='zunoApkUi';
function lsGet(k){try{return localStorage.getItem(k)}catch(e){return null}}
function lsSet(k,v){try{localStorage.setItem(k,v)}catch(e){}}
var reduce=false;try{reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches}catch(e){}

/* ---- ayarlar ---- */
var S={color:'#a3f0f0',glass:1,speed:1};
try{
  var u=JSON.parse(lsGet(UIKEY)||'null');
  if(u){
    if(typeof u.color==='string'&&/^#[0-9a-f]{6}$/i.test(u.color))S.color=u.color.toLowerCase();
    if(u.glass===0||u.glass===1)S.glass=u.glass;
    var sp0=parseFloat(u.speed);if(sp0>=0.5&&sp0<=2)S.speed=sp0;
  }
}catch(e){}
function saveUi(){lsSet(UIKEY,JSON.stringify(S))}

/* ---- renk ---- */
function hexToRgb(h){h=h.replace('#','');return [parseInt(h.slice(0,2),16),parseInt(h.slice(2,4),16),parseInt(h.slice(4,6),16)]}
function rgbToHsl(r,g,b){
  r/=255;g/=255;b/=255;
  var mx=Math.max(r,g,b),mn=Math.min(r,g,b),l=(mx+mn)/2,h=0,s=0,d=mx-mn;
  if(d){
    s=l>.5?d/(2-mx-mn):d/(mx+mn);
    if(mx===r)h=(g-b)/d+(g<b?6:0);else if(mx===g)h=(b-r)/d+2;else h=(r-g)/d+4;
    h*=60;
  }
  return [h,s,l];
}
function hslToRgb(h,s,l){
  h=(((h%360)+360)%360)/360;
  function f(p,q,t){if(t<0)t+=1;if(t>1)t-=1;if(t<1/6)return p+(q-p)*6*t;if(t<1/2)return q;if(t<2/3)return p+(q-p)*(2/3-t)*6;return p}
  var r,g,b;
  if(s===0){r=g=b=l}else{var q=l<.5?l*(1+s):l+s-l*s,p=2*l-q;r=f(p,q,h+1/3);g=f(p,q,h);b=f(p,q,h-1/3)}
  return [Math.round(r*255),Math.round(g*255),Math.round(b*255)];
}
var BGRGB=[11,18,20],rgb=[163,240,240],boxCss='rgb(30,52,54)';
function setAccent(){
  rgb=hexToRgb(S.color);
  var hsl=rgbToHsl(rgb[0],rgb[1],rgb[2]);
  var dk=hslToRgb(hsl[0],Math.min(1,hsl[1]*1.35),.13);
  var st=document.documentElement.style;
  st.setProperty('--accent',S.color);
  st.setProperty('--accent-rgb',rgb.join(','));
  st.setProperty('--accent-dk','rgb('+dk.join(',')+')');
  st.setProperty('--th',String(Math.round(hsl[0])));
  var m=.14;
  boxCss='rgb('+Math.round(BGRGB[0]+(rgb[0]-BGRGB[0])*m)+','+Math.round(BGRGB[1]+(rgb[1]-BGRGB[1])*m)+','+Math.round(BGRGB[2]+(rgb[2]-BGRGB[2])*m)+')';
}

/* ---- şekiller (yarıçap dizileri) ---- */
var N=180,TAU=Math.PI*2;
function smooth(arr,sigma){
  if(sigma<0.1)return arr;
  var rad=Math.ceil(3*sigma),w=[],sum=0,d,i;
  for(d=-rad;d<=rad;d++){var v=Math.exp(-d*d/(2*sigma*sigma));w.push(v);sum+=v}
  var out=new Float32Array(N);
  for(i=0;i<N;i++){var a=0;for(d=-rad;d<=rad;d++)a+=arr[((i+d)%N+N)%N]*w[d+rad];out[i]=a/sum}
  return out;
}
function polyR(n,t,off){
  var tp=t+Math.PI/2+(off||0),seg=TAU/n,phi=(((tp%seg)+seg)%seg)-seg/2;
  return Math.cos(Math.PI/n)/Math.cos(phi);
}
function build(fn,sigma,mean){
  var a=new Float32Array(N),i,sum=0;
  for(i=0;i<N;i++)a[i]=fn(i/N*TAU);
  a=smooth(a,sigma);
  for(i=0;i<N;i++)sum+=a[i];
  var k=mean/(sum/N);
  for(i=0;i<N;i++)a[i]*=k;
  return a;
}
var SHAPES=[
  build(function(t){return 1+0.1*Math.cos(10*t)},0,0.92),
  build(function(t){return polyR(6,t,0)},4.5,0.92),
  build(function(t){return 1+0.14*Math.cos(8*t)},0,0.92),
  build(function(t){var a=0.74,b=1,p=3.2,c=Math.abs(Math.cos(t))/a,s=Math.abs(Math.sin(t))/b;return Math.pow(Math.pow(c,p)+Math.pow(s,p),-1/p)},0,0.88),
  build(function(t){return polyR(5,t,0)},5.5,0.92)
];
function shapePath(A,B,s,rot,cx,cy,R){
  var p=new Path2D(),i,r,a;
  for(i=0;i<N;i++){
    r=A[i]+(B[i]-A[i])*s;a=i/N*TAU+rot;
    var x=cx+Math.cos(a)*R*r,y=cy+Math.sin(a)*R*r;
    if(i===0)p.moveTo(x,y);else p.lineTo(x,y);
  }
  p.closePath();
  return p;
}
function ease(x){var c1=1.1,c3=c1+1;return 1+c3*Math.pow(x-1,3)+c1*Math.pow(x-1,2)}

/* ---- logo ---- */
function drawLogo(){
  var c=$('logo');if(!c)return;
  var x=c.getContext('2d'),d=Math.min(window.devicePixelRatio||1,2),w=28;
  c.width=Math.round(w*d);c.height=Math.round(w*d);c.style.width=w+'px';c.style.height=w+'px';
  x.setTransform(d,0,0,d,0,0);x.clearRect(0,0,w,w);
  x.fillStyle=S.color;
  x.fill(shapePath(SHAPES[0],SHAPES[0],0,0,w/2,w/2,w/2));
}

/* ---- hero tuvali ---- */
var stage=$('heroStage'),cv=$('heroCv'),ctx=cv?cv.getContext('2d'):null,size=0,dpr=1,acc=0;
var STEP=1.8,MOVE=0.9;
function fit(){
  if(!stage||!cv)return false;
  var w=stage.clientWidth;
  if(!w)return false;
  var d=Math.min(window.devicePixelRatio||1,2);
  if(w!==size||d!==dpr){size=w;dpr=d;cv.width=Math.round(w*d);cv.height=Math.round(w*d)}
  return true;
}
function drawHero(){
  var L=SHAPES.length,idx=Math.floor(acc/STEP),local=acc-idx*STEP;
  var s=local<MOVE?ease(local/MOVE):1;
  var A=SHAPES[idx%L],B=SHAPES[(idx+1)%L];
  var rot=acc*.9+(idx+Math.min(s,1))*.55;
  var cx=size/2,Rc=size*.46,Rs=Rc*.7;
  ctx.setTransform(dpr,0,0,dpr,0,0);
  ctx.clearRect(0,0,size,size);
  ctx.beginPath();ctx.arc(cx,cx,Rc,0,TAU);
  ctx.fillStyle=boxCss;ctx.fill();
  ctx.lineWidth=1;ctx.strokeStyle='rgba(255,255,255,.08)';ctx.stroke();
  ctx.fillStyle=S.color;
  ctx.fill(shapePath(A,B,s,rot,cx,cx,Rs));
}

/* ---- alt menü: yaylı kapsül ---- */
var nav=$('bottomNav'),indEl=$('navInd');
var btns=[].slice.call(nav.querySelectorAll('button[data-page]'));
var ind={L:0,R:66,vl:0,vr:0,tl:0,tr:66,dir:1,ready:false,moving:false,idx:-1};
function activeIdx(){for(var i=0;i<btns.length;i++)if(btns[i].classList.contains('active'))return i;return -1}
function paintInd(){var w=Math.max(ind.R-ind.L,6);indEl.style.transform='translateX('+ind.L.toFixed(1)+'px)';indEl.style.width=w.toFixed(1)+'px'}
function syncNav(snap){
  var i=activeIdx();
  nav.classList.toggle('none',i<0);
  if(i<0)return;
  var b=btns[i];
  if(!b.offsetWidth)return;
  var cx=b.offsetLeft+b.offsetWidth/2,half=Math.min(33,b.offsetWidth/2-2);
  ind.tl=cx-half;ind.tr=cx+half;
  if(ind.idx>=0&&i!==ind.idx)ind.dir=i>ind.idx?1:-1;
  ind.idx=i;
  if(snap||!ind.ready||reduce){ind.L=ind.tl;ind.R=ind.tr;ind.vl=ind.vr=0;ind.moving=false;ind.ready=true;paintInd()}
  else if(Math.abs(ind.tl-ind.L)>.05||Math.abs(ind.tr-ind.R)>.05)ind.moving=true;
}
function stepInd(dt){
  var sp=S.speed,fk=320*sp*sp,sk=fk*.3,fwd=ind.dir>0;
  var kr=fwd?fk:sk,kl=fwd?sk:fk,zr=fwd?.55:.8,zl=fwd?.8:.55,h=dt/3,j;
  for(j=0;j<3;j++){
    ind.vr+=((ind.tr-ind.R)*kr-ind.vr*2*Math.sqrt(kr)*zr)*h;ind.R+=ind.vr*h;
    ind.vl+=((ind.tl-ind.L)*kl-ind.vl*2*Math.sqrt(kl)*zl)*h;ind.L+=ind.vl*h;
  }
  if(Math.abs(ind.tr-ind.R)<.05&&Math.abs(ind.tl-ind.L)<.05&&Math.abs(ind.vr)<.5&&Math.abs(ind.vl)<.5){
    ind.L=ind.tl;ind.R=ind.tr;ind.vl=ind.vr=0;ind.moving=false;
  }
  paintInd();
}

/* ---- tek animasyon döngüsü: yalnızca gerektiğinde çalışır ---- */
var raf=0,last=0,homeEl=$('home');
function tick(now){
  raf=0;
  var dt=Math.min(Math.max((now-last)/1000,0),.05);last=now;
  var more=false;
  if(ind.moving){stepInd(dt);if(ind.moving)more=true}
  if(ctx&&homeEl.classList.contains('active')&&fit()){
    if(!reduce){acc+=dt*S.speed;more=true}
    drawHero();
  }
  if(more)raf=requestAnimationFrame(tick);
}
function kick(){if(!raf){last=performance.now();raf=requestAnimationFrame(tick)}}

/* sayfa/sekme değişimini sınıf değişikliğinden izle (çalışma alanı betiğine dokunmadan) */
var pend=false;
new MutationObserver(function(){
  if(pend)return;pend=true;
  requestAnimationFrame(function(){pend=false;syncNav(false);kick()});
}).observe(nav,{subtree:true,attributes:true,attributeFilter:['class']});
new MutationObserver(function(){kick()}).observe(homeEl,{attributes:true,attributeFilter:['class']});

/* ---- ayar kontrolleri ---- */
function syncUI(){
  [].forEach.call(document.querySelectorAll('#uiSwatches .swc'),function(b){b.setAttribute('aria-pressed',String(b.getAttribute('data-c')===S.color))});
  $('uiCustom').value=S.color;
  $('uiGlass').setAttribute('aria-checked',String(!!S.glass));
  $('uiSpeed').value=String(S.speed);
  document.documentElement.setAttribute('data-glass',S.glass?'1':'0');
  setAccent();drawLogo();kick();
}
$('uiSwatches').addEventListener('click',function(e){var b=e.target.closest('.swc');if(!b)return;S.color=b.getAttribute('data-c');saveUi();syncUI()});
$('uiCustom').addEventListener('input',function(e){S.color=e.target.value.toLowerCase();saveUi();syncUI()});
$('uiGlass').addEventListener('click',function(){S.glass=S.glass?0:1;saveUi();syncUI()});
$('uiSpeed').addEventListener('input',function(e){S.speed=parseFloat(e.target.value)||1;saveUi()});

/* ---- başlangıç ---- */
syncUI();
syncNav(true);
window.addEventListener('resize',function(){syncNav(true);kick()});
if(document.fonts&&document.fonts.ready)document.fonts.ready.then(function(){syncNav(true)});
kick();
})();
</script></body></html>