!function(r,n,t){"function"==typeof define&&define.amd?define([],t):"object"==typeof module&&module.exports?module.exports=t():r.QRCode=t()}(this,0,function(){for(var r=[null,[[10,7,17,13],[1,1,1,1],[]],[[16,10,28,22],[1,1,1,1],[4,16]],[[26,15,22,18],[1,1,2,2],[4,20]],[[18,20,16,26],[2,1,4,2],[4,24]],[[24,26,22,18],[2,1,4,4],[4,28]],[[16,18,28,24],[4,2,4,4],[4,32]],[[18,20,26,18],[4,2,5,6],[4,20,36]],[[22,24,26,22],[4,2,6,6],[4,22,40]],[[22,30,24,20],[5,2,8,8],[4,24,44]],[[26,18,28,24],[5,4,8,8],[4,26,48]],[[30,20,24,28],[5,4,11,8],[4,28,52]],[[22,24,28,26],[8,4,11,10],[4,30,56]],[[22,26,22,24],[9,4,16,12],[4,32,60]],[[24,30,24,20],[9,4,16,16],[4,24,44,64]],[[24,22,24,30],[10,6,18,12],[4,24,46,68]],[[28,24,30,24],[10,6,16,17],[4,24,48,72]],[[28,28,28,28],[11,6,19,16],[4,28,52,76]],[[26,30,28,28],[13,6,21,18],[4,28,54,80]],[[26,28,26,26],[14,7,25,21],[4,28,56,84]],[[26,28,28,30],[16,8,25,20],[4,32,60,88]],[[26,28,30,28],[17,8,25,23],[4,26,48,70,92]],[[28,28,24,30],[17,9,34,23],[4,24,48,72,96]],[[28,30,30,30],[18,9,30,25],[4,28,52,76,100]],[[28,30,30,30],[20,10,32,27],[4,26,52,78,104]],[[28,26,30,30],[21,12,35,29],[4,30,56,82,108]],[[28,28,30,28],[23,12,37,34],[4,28,56,84,112]],[[28,30,30,30],[25,12,40,34],[4,32,60,88,116]],[[28,30,30,30],[26,13,42,35],[4,24,48,72,96,120]],[[28,30,30,30],[28,14,45,38],[4,28,52,76,100,124]],[[28,30,30,30],[29,15,48,40],[4,24,50,76,102,128]],[[28,30,30,30],[31,16,51,43],[4,28,54,80,106,132]],[[28,30,30,30],[33,17,54,45],[4,32,58,84,110,136]],[[28,30,30,30],[35,18,57,48],[4,28,56,84,112,140]],[[28,30,30,30],[37,19,60,51],[4,32,60,88,116,144]],[[28,30,30,30],[38,19,63,53],[4,28,52,76,100,124,148]],[[28,30,30,30],[40,20,66,56],[4,22,48,74,100,126,152]],[[28,30,30,30],[43,21,70,59],[4,26,52,78,104,130,156]],[[28,30,30,30],[45,22,74,62],[4,30,56,82,108,134,160]],[[28,30,30,30],[47,24,77,65],[4,24,52,80,108,136,164]],[[28,30,30,30],[49,25,81,68],[4,28,56,84,112,140,168]]],n=/^\d*$/,t=/^[A-Za-z0-9 $%*+\-./:]*$/,e=/^[A-Z0-9 $%*+\-./:]*$/,o=[],a=[-1],u=0,f=1;u<255;++u)o.push(f),a[f]=u,f=2*f^(f>=128?285:0);var i=[[]];for(u=0;u<30;++u){for(var h=i[u],s=[],c=0;c<=u;++c){var l=c<u?o[h[c]]:0,v=o[(u+(h[c-1]||0))%255];s.push(a[l^v])}i.push(s)}var p={};for(u=0;u<45;++u)p["0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:".charAt(u)]=u;var g=[function(r,n){return(r+n)%2==0},function(r,n){return r%2==0},function(r,n){return n%3==0},function(r,n){return(r+n)%3==0},function(r,n){return((r/2|0)+(n/3|0))%2==0},function(r,n){return r*n%2+r*n%3==0},function(r,n){return(r*n%2+r*n%3)%2==0},function(r,n){return((r+n)%2+r*n%3)%2==0}],d=function(r){return r>6},m=function(n,t){var e=-8&function(n){var t=r[n],e=16*n*n+128*n+64;return d(n)&&(e-=36),t[2].length&&(e-=25*t[2].length*t[2].length-10*t[2].length-55),e}(n),o=r[n];return e-=8*o[0][t]*o[1][t]},w=function(r,n){switch(n){case 1:return r<10?10:r<27?12:14;case 2:return r<10?9:r<27?11:13;case 4:return r<10?8:16;case 8:return r<10?8:r<27?10:12}},C=function(r,n,t){var e=m(r,t)-4-w(r,n);switch(n){case 1:return 3*(e/10|0)+(e%10<4?0:e%10<7?1:2);case 2:return 2*(e/11|0)+(e%11<6?0:1);case 4:return e/8|0;case 8:return e/13|0}},A=function(r,n){for(var t=r.slice(0),e=r.length,u=n.length,f=0;f<u;++f)t.push(0);for(f=0;f<e;){var i=a[t[f++]];if(i>=0)for(var h=0;h<u;++h)t[f+h]^=o[(i+n[h])%255]}return t.slice(e)},x=function(r,n,t,e){for(var o=r<<e,a=n-1;a>=0;--a)o>>e+a&1&&(o^=t<<a);return r<<e|o},b=function(r,n,t){for(var e=g[t],o=r.length,a=0;a<o;++a)for(var u=0;u<o;++u)n[a][u]||(r[a][u]^=e(a,u));return r},y=function(r,n,t,e){for(var o=r.length,a=21522^x(t<<3|e,5,1335,10),u=0;u<15;++u){var f=[o-1,o-2,o-3,o-4,o-5,o-6,o-7,o-8,7,5,4,3,2,1,0][u];r[[0,1,2,3,4,5,7,8,o-7,o-6,o-5,o-4,o-3,o-2,o-1][u]][8]=r[8][f]=a>>u&1}return r},$=function(r){for(var n=function(r){for(var n=0,t=0;t<r.length;++t)r[t]>=5&&(n+=r[t]-5+3);for(t=5;t<r.length;t+=2){var e=r[t];r[t-1]==e&&r[t-2]==3*e&&r[t-3]==e&&r[t-4]==e&&(r[t-5]>=4*e||r[t+1]>=4*e)&&(n+=40)}return n},t=r.length,e=0,o=0,a=0;a<t;++a){var u,f=r[a];u=[0];for(var i=0;i<t;){for(h=0;i<t&&f[i];++h)++i;for(u.push(h),h=0;i<t&&!f[i];++h)++i;u.push(h)}e+=n(u),u=[0];for(i=0;i<t;){var h;for(h=0;i<t&&r[i][a];++h)++i;for(u.push(h),h=0;i<t&&!r[i][a];++h)++i;u.push(h)}e+=n(u);var s=r[a+1]||[];o+=f[0];for(i=1;i<t;++i){var c=f[i];o+=c,f[i-1]==c&&s[i]===c&&s[i-1]===c&&(e+=3)}}return e+=10*(Math.abs(o/t/t-.5)/.05|0)},k=function(n,t,e,o,a){var u=r[t],f=function(r,n,t,e){var o=[],a=0,u=8,f=t.length,i=function(r,n){if(n>=u){for(o.push(a|r>>(n-=u));n>=8;)o.push(r>>(n-=8)&255);a=0,u=8}n>0&&(a|=(r&(1<<n)-1)<<(u-=n))},h=w(r,n);switch(i(n,4),i(f,h),n){case 1:for(var s=2;s<f;s+=3)i(parseInt(t.substring(s-2,s+1),10),10);i(parseInt(t.substring(s-2),10),[0,4,7][f%3]);break;case 2:for(s=1;s<f;s+=2)i(45*p[t.charAt(s-1)]+p[t.charAt(s)],11);f%2==1&&i(p[t.charAt(s-1)],6);break;case 4:for(s=0;s<f;++s)i(t[s],8)}for(i(0,4),u<8&&o.push(a);o.length+1<e;)o.push(236,17);return o.length<e&&o.push(236),o}(t,e,n,m(t,o)>>3);f=function(r,n,t){for(var e=[],o=r.length/n|0,a=0,u=n-r.length%n,f=0;f<u;++f)e.push(a),a+=o;for(f=u;f<n;++f)e.push(a),a+=o+1;e.push(a);var i=[];for(f=0;f<n;++f)i.push(A(r.slice(e[f],e[f+1]),t));var h=[],s=r.length/n|0;for(f=0;f<s;++f)for(var c=0;c<n;++c)h.push(r[e[c]+f]);for(c=u;c<n;++c)h.push(r[e[c+1]-1]);for(f=0;f<t.length;++f)for(c=0;c<n;++c)h.push(i[c][f]);return h}(f,u[1][o],i[u[0][o]]);var h=function(n){for(var t=r[n],e=function(r){return 4*r+17}(n),o=[],a=[],u=0;u<e;++u)o.push([]),a.push([]);var f=function(r,n,t,e,u){for(var f=0;f<t;++f)for(var i=0;i<e;++i)o[r+f][n+i]=u[f]>>i&1,a[r+f][n+i]=1};f(0,0,9,9,[127,65,93,93,93,65,383,0,64]),f(e-8,0,8,9,[256,127,65,93,93,93,65,127]),f(0,e-8,9,8,[254,130,186,186,186,130,254,0,0]);for(u=9;u<e-8;++u)o[6][u]=o[u][6]=1&~u,a[6][u]=a[u][6]=1;var i=t[2],h=i.length;for(u=0;u<h;++u)for(var s=0==u?h-1:h,c=0==u||u==h-1?1:0;c<s;++c)f(i[u],i[c],5,5,[31,17,21,17,31]);if(d(n)){var l=x(n,6,7973,12),v=0;for(u=0;u<6;++u)for(c=0;c<3;++c)o[u][e-11+c]=o[e-11+c][u]=l>>v++&1,a[u][e-11+c]=a[e-11+c][u]=1}return{matrix:o,reserved:a}}(t),s=h.matrix,c=h.reserved;if(function(r,n,t){for(var e=r.length,o=0,a=-1,u=e-1;u>=0;u-=2){6==u&&--u;for(var f=a<0?e-1:0,i=0;i<e;++i){for(var h=u;h>u-2;--h)n[f][h]||(r[f][h]=t[o>>3]>>(7&~o)&1,++o);f+=a}a=-a}}(s,c,f),a<0){b(s,c,0),y(s,0,o,0);var l=0,v=$(s);for(b(s,c,0),a=1;a<8;++a){b(s,c,a),y(s,0,o,a);var g=$(s);v>g&&(v=g,l=a),b(s,c,a)}a=l}return b(s,c,a),y(s,0,o,a),s},L={generate:function(r,o){var a={numeric:1,alphanumeric:2,octet:4},u={L:1,M:0,Q:3,H:2},f=(o=o||{}).version||-1,i=u[(o.ecclevel||"L").toUpperCase()],h=o.mode?a[o.mode.toLowerCase()]:-1,s="mask"in o?o.mask:-1;if(h<0)h="string"==typeof r?r.match(n)?1:r.match(e)?2:4:4;else if(1!=h&&2!=h&&4!=h)throw"invalid or unsupported mode";if(null===(r=function(r,e){switch(r){case 1:return e.match(n)?e:null;case 2:return e.match(t)?e.toUpperCase():null;case 4:if("string"==typeof e){for(var o=[],a=0;a<e.length;++a){var u=e.charCodeAt(a);u<128?o.push(u):u<2048?o.push(192|u>>6,128|63&u):u<65536?o.push(224|u>>12,128|u>>6&63,128|63&u):o.push(240|u>>18,128|u>>12&63,128|u>>6&63,128|63&u)}return o}return e}}(h,r)))throw"invalid data format";if(i<0||i>3)throw"invalid ECC level";if(f<0){for(f=1;f<=40&&!(r.length<=C(f,h,i));++f);if(f>40)throw"too large data"}else if(f<1||f>40)throw"invalid version";if(-1!=s&&(s<0||s>8))throw"invalid mask";return k(r,f,h,i,s)},generatePNG:function(r,n){n=n||{};var t,e=L.generate(r,n),o=Math.max(n.modulesize||5,.5),a=Math.max(null!=n.margin?n.margin:4,0),u=e.length,f=o*(u+2*a),i=document.createElement("canvas");if(i.width=i.height=f,!(t=i.getContext("2d")))throw"canvas support is needed for PNG output";t.fillStyle="#fff",t.fillRect(0,0,f,f),t.fillStyle="#000";for(var h=0;h<u;++h)for(var s=0;s<u;++s)e[h][s]&&t.fillRect(o*(a+s),o*(a+h),o,o);return i.toDataURL()}};return L});
var CFG  = null;  
var LIST = []; 
var CUR  = null; 
var VIEW = "";   
function $(id) { return document.getElementById(id); }
function isReady(c) {
    var vals = c.type === "card"
        ? [c.cardNo, c.cardIndex, c.bankAccount, c.bankMark]
        : [c.value];
    for (var i = 0; i < vals.length; i++) {
        var v = vals[i];
        if (typeof v !== "string" || !v.length) return false;
        if (/^(REPLACE_ME|BOC_|TODO)/i.test(v.trim())) return false;
    }
    return true;
}
function cardUri(c, money) {
    var p = {
        appId:        "09999988",
        actionType:   "toCard",
        sourceId:     "bill",
        cardNo:       (c.cardNo    || "").trim(),
        bankAccount:  (c.bankAccount || "").trim(),
        bankMark:     (c.bankMark  || "").trim(),
        bankName:     (c.bankName  || "").trim(),
        cardIndex:    (c.cardIndex || "").trim(),
        cardNoHidden: "true",
        cardChannel:  "HISTORY_CARD",
        orderSource:  "from"
    };
    if (money) { p.money = money; p.amount = money; }
    var qs = [];
    for (var k in p) if (p.hasOwnProperty(k)) qs.push(k + "=" + p[k]);
    qs = qs.join("&");
    var scheme = "alipays://platformapi/startapp?" + qs;
    var https  = "https://www.alipay.com/?" + qs;
    return {
        A:  "https://ds.alipay.com/?scheme=" + encodeURIComponent(scheme), 
        A2: "https://ds.alipay.com/?scheme=alipays://platformapi/startapp?" +
            qs.split("&").map(function (x) {
                var i = x.indexOf("=");
                return x.slice(0, i + 1) + encodeURIComponent(x.slice(i + 1));
            }).join("%26"),                                                    
        B:  "alipays://platformapi/startapp?appId=20000067&url=" + encodeURIComponent(https), 
        C:  scheme           
    };
}
function payloadOf(c) {
    if (c.type === "card") return cardUri(c).A;
    return (c.prefix || "") + c.value;
}
function makeQR(text) {
    try {
        return QRCode.generatePNG(text, { margin: 0, ecclevel: "M" });
    } catch (e) {
        return "";
    }
}
function tintOf(hex) {
    var m = /^#?([0-9a-f]{6})$/i.exec(hex || "");
    if (!m) return "rgba(0,0,0,.06)";
    var n = parseInt(m[1], 16);
    return "rgba(" + (n >> 16 & 255) + "," + (n >> 8 & 255) + "," + (n & 255) + ",.12)";
}
function renderGrid() {
    var anchor = $("bbar");
    var olds = document.querySelectorAll(".code-item[data-dyn]");
    for (var i = 0; i < olds.length; i++) olds[i].parentNode.removeChild(olds[i]);

    LIST = (CFG.channels || []).filter(function (c) {
        return c.enabled !== false && isReady(c);
    });

    LIST.forEach(function (c) {
        var box = document.createElement("div");
        box.className = "code-item";
        box.id = "code-" + c.key;
        box.setAttribute("data-dyn", "1");
        box.style.backgroundColor = c.bg || "#5c92ef";

        var icon = document.createElement("div");
        icon.className = "code-icon";
        var lg = document.createElement("img");
        lg.src = c.logo; lg.alt = c.name || c.key; lg.loading = "lazy";
        icon.appendChild(lg);

        var area = document.createElement("div");
        area.className = "code-area";
        var qr = document.createElement("img");
        qr.id = "qr-" + c.key;
        qr.alt = (c.name || c.key) + "收款码";
        qr.src = makeQR(payloadOf(c));
        area.appendChild(qr);

        var foot = document.createElement("div");
        foot.className = "code-footer";
        foot.textContent = c.footer || (c.name + "扫码付款");

        box.appendChild(icon);
        box.appendChild(area);
        box.appendChild(foot);
        box.addEventListener("click", function () { showFullscreen(c); });

        if (anchor && anchor.parentNode) anchor.parentNode.insertBefore(box, anchor);
        else document.body.appendChild(box);
    });
}
function showFullscreen(c) {
    if (!c) return;
    CUR = c;

    var logo = $("qf-logo");
    if (logo) { logo.src = c.logo || CFG.avatar; logo.alt = c.name || c.key; fitLogo(logo); }

    var mid = $("qf-mid");
    if (mid) {
        mid.style.backgroundColor = c.bg || "#5c92ef";
        mid.style.setProperty("--qf-brand", c.bg || "#333");
        mid.style.setProperty("--qf-tint", tintOf(c.bg));
    }
    var fs = $("qrfs");
    if (fs) {
        fs.style.setProperty("--qf-brand", c.bg || "#333");
        fs.style.setProperty("--qf-tint", tintOf(c.bg));
    }

    var t = $("qf-title"); if (t) t.textContent = c.title || c.name || "付款";
    var s = $("qf-sub");   if (s) s.textContent = "推荐使用" + (c.app || c.name || "");

    var qr = $("qf-qr");
    if (qr) {
        var png = makeQR(payloadOf(c));
        if (png) { qr.src = png; qr.style.display = "block"; }
        else qr.style.display = "none";
    }

    var av = $("qf-avatar");
    if (av) {
        if (CFG.avatar) av.style.backgroundImage = "url(" + CFG.avatar + ")";
        av.classList.toggle("hidden", !CFG.avatar);
    }

    var nm = $("qf-name");
    if (nm) {
        nm.textContent = c.showName === false ? "" : (CFG.payee || "");
        nm.classList.toggle("hidden", c.showName === false || !CFG.payee);
    }

    var g = $("qf-guide");
    if (g) g.innerHTML = c.guide || ("打开<span class=\"app\">" + (c.app || c.name) + "</span><span class=\"hl\">[扫一扫]</span>");

    var tip = $("qf-tip");
    if (tip) tip.textContent = (CFG.text && CFG.text.fullscreenTip) || "长按二维码可保存或识别";

    var btn = $("bbar-btn");
    if (btn) {
        btn.setAttribute("data-mode", "back");
        btn.textContent = (CFG.text && CFG.text.gridButton) || "返回全部渠道";
    }

    showView("qrfs");
}
function showFallback() {
    var ul = $("fb-logos");
    if (ul) {
        ul.innerHTML = "";
        LIST.forEach(function (c) {
            var li = document.createElement("li");
            var img = document.createElement("img");
            img.src = c.logo; img.alt = c.name || c.key; img.loading = "lazy";
            li.appendChild(img);
            ul.appendChild(li);
        });
        ul.style.display = LIST.length ? "flex" : "none";
    }
    var ft = $("fb-title");
    if (ft && CFG.text) ft.textContent = CFG.text.fallbackTitle || ft.textContent;
    var fp = $("fb-tip");
    if (fp && CFG.text && CFG.text.fallbackTip) fp.innerHTML = CFG.text.fallbackTip;

    var qr = $("fb-qr");
    if (qr && typeof QRCode !== "undefined") {
        try {
            qr.src = QRCode.generatePNG(location.origin + location.pathname + location.search, { margin: 0, ecclevel: "M" });
        } catch (e) {}
    }
    VIEW = "fallback";
    showView("fallback");
}
function showView(name) {
    VIEW = name;
    var fsEl = $("qrfs"), fbEl = $("fallback");
    if (fsEl) fsEl.classList.toggle("is-show", name === "qrfs");
    if (fbEl) fbEl.classList.toggle("is-show", name === "fallback");

    var grid = name === "grid";
    var cards = document.querySelectorAll(".code-item[data-dyn]");
    for (var i = 0; i < cards.length; i++) cards[i].style.display = grid ? "block" : "none";
    document.body.classList.toggle("is-grid", grid);

    var bb = $("bbar");
    if (bb) {
        bb.classList.toggle("is-show", grid || name === "qrfs");
        var btn = $("bbar-btn");
        if (btn && grid) {
            btn.setAttribute("data-mode", "grid");
            btn.textContent = "显示所有付款渠道";
        }
    }
    if (name === "grid") CUR = null;
}
function detectChannel() {
    var m = location.search.match(/[?&]pay=([a-z0-9_]+)/i);
    if (m) {
        var k = m[1].toLowerCase();
        if (k === "all" || k === "grid") return null;
        var hit = LIST.filter(function (c) { return c.key === k; })[0];
        if (hit) return hit;
    }
    var ua = navigator.userAgent || "";
    for (var i = 0; i < LIST.length; i++) {
        var u = LIST[i].ua;
        if (u && new RegExp(u, "i").test(ua)) return LIST[i];
    }
    return null;
}
function fitLogo(img) {
    if (!img) return;
    var base = parseFloat(window.getComputedStyle(img).getPropertyValue("--qf-logo-h")) || 72;
    var minH = 34;
    var availOf = function () {
        var host = img.parentElement;
        if (!host) return document.documentElement.clientWidth || 320;
        var hs = window.getComputedStyle(host);
        var w = host.clientWidth - (parseFloat(hs.paddingLeft) || 0) - (parseFloat(hs.paddingRight) || 0);
        return w > 0 ? w : document.documentElement.clientWidth || 320;
    };
    var maxW = Math.min(260, Math.round(availOf() * 0.62));
    var measure = function () {
        var nw = img.naturalWidth, nh = img.naturalHeight;
        if (!nw || !nh) { img.style.width = "auto"; img.style.height = base + "px"; return; }
        img.classList.toggle("is-pixel", Math.max(nw, nh) <= 32);
        var h = base, w = base * (nw / nh);
        if (w > maxW) { w = maxW; h = w * (nh / nw); }
        if (h < minH) { h = minH; w = h * (nw / nh); }
        if (w > maxW) { w = maxW; h = w * (nh / nw); }
        img.style.width = w.toFixed(2) + "px";
        img.style.height = h.toFixed(2) + "px";
    };
    var reset = function () { img.style.width = ""; img.style.height = ""; img.classList.remove("is-pixel"); };
    img.addEventListener("error", reset, { once: true });
    if (img.complete && img.naturalWidth) measure();
    else img.addEventListener("load", measure, { once: true });
}
function boot(cfg) {
    CFG = cfg;

    var tt = document.title;
    if (!tt) document.title = (cfg.payee || "") + "｜聚合收款码";

    (cfg.channels || []).forEach(function (c) {
        if (c.logo) {
            var l = document.createElement("link");
            l.rel = "preload"; l.as = "image"; l.href = c.logo;
            document.head.appendChild(l);
        }
    });
    renderGrid();
    var btn = $("bbar-btn");
    if (btn) btn.addEventListener("click", function () {
        if (VIEW === "qrfs") showView("grid");
        else showView("grid");
    });
    var fbBtn = $("fb-btn");
    if (fbBtn) fbBtn.addEventListener("click", function () { showView("grid"); });

    var hit = detectChannel();
    if (hit) showFullscreen(hit);
    else if (LIST.length) showFallback();
    else showView("grid");

    window.addEventListener("resize", function () {
        if (VIEW === "qrfs") fitLogo($("qf-logo"));
    });
}
function load() {
    var url = "https://wentianwan.com/api/?v=" + Date.now();
    if (typeof fetch === "function") {
        fetch(url).then(function (r) { return r.json(); })
            .then(boot)
            .catch(function () {
                document.body.innerHTML =
                    '<p style="padding:40px;text-align:center;color:#999;line-height:1.8">' +
                    '请用 http(s) 方式访问聚合收款码</p>';
            });
    } else {
        var x = new XMLHttpRequest();
        x.open("GET", url, true);
        x.onreadystatechange = function () {
            if (x.readyState === 4 && x.status >= 200 && x.status < 400) boot(JSON.parse(x.responseText));
        };
        x.send();
    }
}
if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", load);
else load();
