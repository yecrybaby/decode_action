//Thu May 08 2025 23:45:03 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const $ = new Env("酷我音乐");
const {
  encrypt,
  decrypt,
  getVer,
  getInfo
} = Napi("影子");
const LocVer = "5.4.13";
const KuWo = $.toObj($.getval("KuWo")) || {};
let url = "undefined" !== typeof $request ? $request.url : "";
let body = "undefined" !== typeof $response ? $response.body : null;
let obj = $.toObj(body);
const urlHandlers = {
  playInfo: /mobi\.s\?f\=kwxs/,
  userInfo: /vip\/enc/,
  vipInfo: /vip\/v\d\/user\/vip/,
  bookVip: /(a\.p|v\d\/api\/(pay\/)?user\/info)/,
  musicInfo: /music\.pay\?newver\=\d$/,
  vipTheme: /(commercia\/)?vip\/(v\d\/theme\?op\=gd|(player\/getStyleListByModel|hanger\/wear))/,
  kwBookHome: /v\d\/api\/advert\/myPage/,
  bottomTab: /kuwo\/ui\/info$/,
  indexTopAd: /openapi\/v\d\/operate\/homePage/,
  myPageVipBox: /kuwopay\/personal\/cells/,
  bookPageAdBar: /api\/v\d\/pay\/app\/getConfigInfo/,
  bookPageAd: /openapi\/v\d\/tingshu\/index\/radio/,
  vipTabAd: /kuwopay\/vip-tab\/(setting|page\/cells)/,
  vipTabUserBox: /pay\/viptab\/index\.html/,
  bookListAd: /((openapi)?v\d\/(api\/pay\/payInfo\/kwplayer\/payMiniBar|app\/startup\/config)|basedata\.s)/,
  userInfoLabel: /mgxh\.s\?user/,
  payBox: /(sysinfo\?op\=getRePayAndDoPayBox(New)?&useNewHeadShow|openapi\/v\d\/recommend)/
};
const functions = {
  playInfo: playInfo,
  userInfo: userInfo,
  vipInfo: vipInfo,
  bookVip: bookVip,
  musicInfo: musicInfo,
  vipTheme: vipTheme,
  kwBookHome: kwBookHome,
  bottomTab: bottomTab,
  myPageVipBox: myPageVipBox,
  indexTopAd: indexTopAd,
  bookPageAdBar: bookPageAdBar,
  bookPageAd: bookPageAd,
  vipTabAd: vipTabAd,
  vipTabUserBox: vipTabUserBox,
  bookListAd: bookListAd,
  userInfoLabel: userInfoLabel,
  payBox: payBox
};
for (const [handler, regex] of Object.entries(urlHandlers)) {
  if (regex.test(url)) {
    (async () => {
      await functions[handler](handler);
    })().catch(a => {
      $.log("‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️", a.message);
    });
    break;
  }
}
async function playInfo(o) {
  try {
    const {
      user,
      isVip,
      endTime,
      keys,
      PlayID,
      Song,
      ver
    } = KuWo;
    await getInfo(user, "kuwo");
    await getVer();
    if (isVip && new Date().getTime() < endTime && LocVer == ver && obj.code != 200) {
      const s = keys[Math.floor(Math.random() * keys.length)];
      const t = decrypt(s);
      const u = {
        br: 4000,
        url: "4000kflac"
      };
      const v = {
        br: 2000,
        url: "2000kflac"
      };
      const w = {
        br: 320,
        url: "320kmp3"
      };
      const x = {
        br: 192,
        url: "192kogg"
      };
      const y = {
        br: 128,
        url: "128kmp3"
      };
      const z = {
        br: 100,
        url: "100kaac"
      };
      const A = {
        br: 100,
        url: "100kogg"
      };
      const B = {
        br: 96,
        url: "96kwma"
      };
      const C = {
        br: 48,
        url: "48kaac"
      };
      let D = [u, v, w, x, y, z, A, B, C];
      let E = 0;
      if ("undefined" !== typeof $argument) {
        let G;
        if ("object" === typeof $argument) {
          G = $argument.QS;
        } else {
          {
            G = $argument;
          }
        }
        switch (G) {
          case "无损音质":
            E = 1;
            break;
          case "超品音质":
            E = 2;
            break;
          case "高品音质":
            E = 4;
            break;
          default:
            E = 0;
        }
      }
      if ("book" == Song) {
        E = 2;
      }
      D = D.slice(E).concat(D.slice(0, E));
      E = 0;
      while (D[E]) {
        const I = {
          url: "http://mobi.kuwo.cn/mobi.s?f=web&source=" + t + "&type=convert_url_with_sign&br=" + D[E].url + "&rid=" + PlayID
        };
        await $.http.get(I).then(J => {
          body = J.body;
          obj = $.toObj(body);
        });
        if (obj.data.bitrate == D[E].br) {
          break;
        }
        E++;
      }
    }
    const r = {
      body: body
    };
    $.done(r);
  } catch (L) {
    {
      throw new Error("处理" + o + "时发生错误：" + $.toStr(L));
    }
  }
}
async function userInfo(c) {
  try {
    const g = new URL(url).searchParams;
    let h = g.get("uid");
    if ("number" !== typeof h) {
      h = url.replace(/.*?uid=(\d+).*/, "$1");
    }
    await getInfo(h, "kuwo");
    body = await $.http.get(url.replace(/uid=\d+/g, "uid=8")).then(j => j.body);
    const i = {
      body: body
    };
    $.done(i);
  } catch (j) {
    throw new Error("处理" + c + "时发生错误：" + $.toStr(j));
  }
}
async function vipInfo() {
  const g = {
    vipIcon: "https://image.kuwo.cn/fe/13e4f930-f8bc-4b86-8def-43cbc3c7d86c7.png",
    vipmIcon: "https://image.kuwo.cn/fe/34ad47f8-da7f-43e4-abdc-e6c995666368yyb.png",
    svipIcon: "https://image.kuwo.cn/fe/13e4f930-f8bc-4b86-8def-43cbc3c7d86c7.png",
    luxuryIcon: "https://h5s.kuwo.cn/upload/pictures/20250107/b81d9c5c7af42dc5ed6281fcbe19fcc7.png",
    growthValue: "9999",
    vipTag: "VIP7",
    openBtnText: KuWo.endTime && "超级会员" || "未授权",
    vipExpire: "" + KuWo.endTime,
    vipExpires: KuWo.endTime,
    vipmExpire: "" + KuWo.endTime,
    vip3Expire: "" + KuWo.endTime,
    vipLuxuryExpire: "" + KuWo.endTime,
    svipExpire: "" + KuWo.endTime,
    isYearUser: "2",
    biedSong: "1",
    vipmAutoPayUser: "1",
    svipAutoPayUser: "1"
  };
  Object.assign(obj.data, g);
  delete obj.data.iconJumpUrl;
  delete obj.data.adActUrl;
  body = $.toStr(obj);
  const h = {
    body: body
  };
  $.done(h);
}
async function bookVip(c) {
  try {
    if ("songs" in obj) {
      {
        for (let h in obj.songs) {
          const i = obj.songs[h];
          const {
            id = body.replace(/.*?\"id\":(\d+).*/, "$1")
          } = i;
          if ("number" == typeof id) {
            {
              KuWo.PlayID = id;
              KuWo.Song = "book";
              $.setval($.toStr(KuWo), "KuWo");
              break;
            }
          }
        }
      }
    }
    body = body.replace(/(policy|policytype)\":\d/g, "$1\":0").replace(/(playright|downright|type|bought|bought_vip|limitfree|vipType)\":\d/g, "$1\":1").replace(/(end|endtime|vipExpires|bought_vip_end)\":\d+/g, "$1\":4077187200");
    const g = {
      body: body
    };
    $.done(g);
  } catch (l) {
    {
      throw new Error("处理" + c + "时发生错误：" + $.toStr(l));
    }
  }
}
async function musicInfo(c) {
  try {
    if ("songs" in obj && Array.isArray(obj.songs)) {
      {
        const {
          id = body.replace(/.*?\"id\":(\d+).*/, "$1")
        } = obj.songs[0];
        KuWo.PlayID = parseInt(id);
        KuWo.Song = "music";
        $.setval($.toStr(KuWo), "KuWo");
        obj.songs[0].audio.forEach(h => {
          if (undefined !== h.opid) {
            h.st = 0;
          }
        });
      }
    }
    body = $.toStr(obj);
    const g = {
      body: body
    };
    $.done(g);
  } catch (i) {
    throw new Error("处理" + c + "时发生错误：" + $.toStr(i));
  }
}
async function vipTheme() {
  if ("vipTheme" in obj.data) {
    {
      obj.data.vipTheme.type = "free";
      delete obj.data.needBieds;
      body = $.toStr(obj);
    }
  } else {
    if ("needBied" in obj.data) {
      const j = {
        requestUrl: "",
        btnText: null,
        rightStatus: 1,
        requestUrlType: 1
      };
      Object.assign(obj.data.needBied, j);
      body = $.toStr(obj);
    } else {
      body = body.replace(/\"(paymentType)\":\d/g, "\"$1\":0").replace(/(umpUrl)\":\".*?\"/g, "$1\":\"\"");
    }
  }
  const f = {
    body: body
  };
  $.done(f);
}
async function kwBookHome() {
  const d = {
    scheme: null,
    title: "酷我畅听",
    url: null,
    subTitle: "畅听服务由影子提供"
  };
  Object.assign(obj.data, d);
  body = $.toStr(obj);
  const e = {
    body: body
  };
  $.done(e);
}
async function bottomTab() {
  const d = {
    bottomLiveTab: "0",
    netEarn: "0"
  };
  Object.assign(obj.data.mapTestInfo.bottomTabTest.mapParams, d);
  body = $.toStr(obj);
  const e = {
    body: body
  };
  $.done(e);
}
async function myPageVipBox() {
  delete obj.data.list[0].route;
  delete obj.data.list[0].description;
  obj.data.list[0].title = "我的会员";
  obj.data.list[1].title = "账户未授权";
  obj.data.list[1].description = "点击获取授权";
  obj.data.list[1].route.params.url = "https://yingzi-0gwxqpln4f7a7fda-1251393964.ap-shanghai.app.tcloudbase.com/authPay?action=kuwo&user=" + KuWo.user;
  if (KuWo.endTime) {
    obj.data.list[1].title = "授权至：";
    obj.data.list[1].description = $.time("yyyy-MM-dd", KuWo.endTime);
    obj.data.list[1].route.params.url = "https://t.me/Napi_Group";
  }
  body = $.toStr(obj);
  const e = {
    body: body
  };
  $.done(e);
}
async function indexTopAd() {
  let e = ["发现", "推荐", "听书", "看短剧"];
  let f = 0;
  while (obj.data.homeTop[f]) {
    if (!e.includes(obj.data.homeTop[f].title)) {
      delete obj.data.homeTop[f];
    }
    f++;
  }
  body = $.toStr(obj);
  const g = {
    body: body
  };
  $.done(g);
}
async function bookPageAdBar() {
  const e = h => {
    for (let l in h) {
      if (typeof h[l] === "string") {
        if (l.includes("btnText")) {
          h[l] = KuWo.endTime && "超级会员" || "未授权";
        }
        if (l.includes("icon")) {
          h[l] = "https://h5s.kuwo.cn/upload/pictures/20250107/b81d9c5c7af42dc5ed6281fcbe19fcc7.png";
        }
        if (l.includes("Url")) {
          {
            h[l] = null;
          }
        }
      } else {
        if (typeof h[l] === "object" && h[l] !== null) {
          {
            e(h[l]);
          }
        }
      }
    }
  };
  const f = (h, i = []) => {
    if (typeof i === "string") {
      i = [i];
    }
    for (let j in h) {
      {
        if (!i.includes(j)) {
          delete h[j];
        }
      }
    }
  };
  if ("data" in obj) {
    const h = ["subConfigType", "tsAdBarInfoV2"];
    f(obj.data, h);
    f(obj.data.tsAdBarInfoV2, "tsHomeWeex");
    e(obj.data);
  }
  body = $.toStr(obj);
  const g = {
    body: body
  };
  $.done(g);
}
async function bookPageAd() {
  let e = ["小焦点", "免费模式", "看广告"];
  let f = 0;
  while (obj.data.child[f]) {
    if (e.some(h => obj.data.child[f].label.includes(h))) {
      delete obj.data.child[f].child;
    }
    f++;
  }
  body = $.toStr(obj);
  const g = {
    body: body
  };
  $.done(g);
}
async function vipTabAd() {
  if ("tab" in obj.data) {
    obj.data.tab.vipTypes[0].topics[0].url = "https://h5app.kuwo.cn/pay/viptab/index.html";
    let g = 1;
    while (obj.data.tab.vipTypes[0].topics[g]) {
      delete obj.data.tab.vipTypes[0].topics[g];
      g++;
    }
  } else {
    if (Array.isArray(obj.data)) {
      obj.data[1].data;
      let h = ["会员福利"];
      let j = 0;
      while (obj.data[j]) {
        if (h.some(k => obj.data[j].title.includes(k))) {
          delete obj.data[j].data;
        }
        j++;
      }
    }
  }
  body = $.toStr(obj);
  const e = {
    body: body
  };
  $.done(e);
}
async function vipTabUserBox() {
  if (body) {
    body = body.replace("</body>", "<script>function startChecking(){let interval=setInterval(()=>{const elements=document.getElementsByClassName('container');if(elements&&elements.length>0){const d=elements[0];if(window.getComputedStyle(d).display!=='none'){d.style.display='none';}}},100);return interval;}let intervalId;document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='hidden'){clearInterval(intervalId);}else if(document.visibilityState==='visible'){intervalId=startChecking();}});document.addEventListener('DOMContentLoaded',()=>{intervalId=startChecking();});</script></body>");
  }
  const b = {
    body: body
  };
  $.done(b);
}
async function bookListAd() {
  const e = ["data", "dataV2", "child_level_info", "operational_resources"];
  e.forEach(g => {
    if (g in obj) {
      delete obj[g];
    }
  });
  body = $.toStr(obj);
  const f = {
    body: body
  };
  $.done(f);
}
async function userInfoLabel() {
  if (body) {
    {
      body = body.replace(/<section[^>]*?><userinfolabel[^>]*?><\/userinfolabel><\/section>/, "").replace(/<section[^>]*?><ad[^>]*?><\/ad><\/section>/g, "");
    }
  }
  const e = {
    body: body
  };
  $.done(e);
}
async function payBox(c) {
  const f = h => {
    for (let i in h) {
      if (typeof h[i] === "string") {
        {
          h[i] = null;
        }
      } else {
        if (typeof h[i] === "object" && h[i] !== null) {
          f(h[i]);
        }
      }
    }
  };
  if ("child" in obj) {
    body = body.replace(/\"(btnTipText|jumpUrl|tipText)\":\".*?\"/g, "\"$1\":null");
  } else {
    f(obj);
    body = $.toStr(obj);
  }
  const g = {
    body: body
  };
  $.done(g);
}
function Napi(e = "YingZi") {
  const k = p => {
    let q = new TextEncoder().encode(p);
    let r = new TextEncoder().encode(e);
    let s = new Uint8Array(q.length);
    for (let t = 0; t < q.length; t++) {
      let u = q[t] ^ r[t % r.length];
      while (u >= 256) {
        {
          u %= 256;
        }
      }
      s[t] = u;
    }
    return btoa(String.fromCharCode(...s));
  };
  const l = p => {
    let q = new TextEncoder().encode(e);
    let r = new Uint8Array(atob(p).split("").map(t => t.charCodeAt(0)));
    let s = new Uint8Array(r.length);
    for (let t = 0; t < r.length; t++) {
      let u = r[t] ^ q[t % q.length];
      while (u >= 256) {
        u %= 256;
      }
      s[t] = u;
    }
    return new TextDecoder().decode(s);
  };
  const m = async () => {
    {
      let p = "https://napi.ltd/getVer";
      let q = await $.http.get(p).then(s => s.body);
      let r = $.toObj(q);
      if (LocVer != r.kuwo) {
        $.msg("需要更新 -> 请更新你的脚本！");
      }
      KuWo.ver = r.kuwo;
      $.setval($.toStr(KuWo), "KuWo");
    }
  };
  const n = async (p, q) => {
    let r = "type=" + q + "&user=" + p;
    if (!KuWo.user || p != KuWo.user || !KuWo.endTime || new Date().getTime() > KuWo.endTime || !KuWo.keys || KuWo.ver !== LocVer) {
      $.log("正在获取 " + p + " 的授权信息…");
      const s = {
        url: "https://yingzi-0gwxqpln4f7a7fda-1251393964.ap-shanghai.app.tcloudbase.com/getInfo",
        body: r
      };
      let t = $.toObj(await $.http.post(s).then(u => u.body));
      for (let u in t) {
        if (t.hasOwnProperty(u)) {
          KuWo[u] = t[u];
        }
      }
      $.setval($.toStr(KuWo), "KuWo");
      $.log("数据获取完成...");
      if (t.isVip) {
        let w = $.time("yyyy-MM-dd HH:mm", KuWo.endTime);
        if (LocVer != KuWo.ver) {
          w += "\n需要更新 -> 请更新你的脚本！";
        }
        $.log("当前账户 " + p + " 已授权\n授权有效期至：" + w);
        $.msg("当前账户 " + p + " 已授权", "", "授权有效期至：" + w);
      } else {
        $.log("未能获取到当前账户 " + p + " 的授权信息\n即将再次获取你的授权信息");
        const x = {
          "open-url": "kwapp://open?t=27&u=https%3A%2F%2Fyingzi-0gwxqpln4f7a7fda-1251393964.ap-shanghai.app.tcloudbase.com%2FauthPay%3Faction%3Dkuwo%26user%3D" + p,
          "media-url": "https://file.napi.ltd/Static/Image/KuWo.png"
        };
        $.msg("未获取到授权信息", "", "请重启应用或点击本条通知获取授权码", x);
      }
    } else {
      $.log("当前账户 " + p + " 已授权\n祝使用愉快！");
    }
  };
  const o = {
    encrypt: k,
    decrypt: l,
    getVer: m,
    getInfo: n
  };
  return o;
}
function Env(name, opts) {
  class Http {
    constructor(env) {
      this.env = env;
    }
    send(opts, method = "GET") {
      opts = typeof opts === "string" ? {
        url: opts
      } : opts;
      let sender = this.get;
      if (method === "POST") {
        sender = this.post;
      }
      const delayPromise = (promise, delay = 1000) => {
        return Promise.race([promise, new Promise((resolve, reject) => {
          setTimeout(() => {
            reject(new Error("请求超时"));
          }, delay);
        })]);
      };
      const call = new Promise((resolve, reject) => {
        sender.call(this, opts, (err, resp, body) => {
          if (err) {
            reject(err);
          } else {
            resolve(resp);
          }
        });
      });
      return opts.timeout ? delayPromise(call, opts.timeout) : call;
    }
    get(opts) {
      return this.send.call(this.env, opts);
    }
    post(opts) {
      return this.send.call(this.env, opts, "POST");
    }
  }
  return new class {
    constructor(name, opts) {
      this.name = name || "YingZi";
      this.http = new Http(this);
      this.logs = [];
      this.isMute = 1;
      this.isNeedRewrite = false;
      this.logSeparator = "\n";
      this.encoding = "utf-8";
      this.startTime = new Date().getTime();
      Object.assign(this, opts);
      !this.isMute && this.log("", `🔔${this.name}, 开始!`);
    }
    getEnv() {
      if ("undefined" !== typeof $environment && $environment["surge-version"]) {
        return "Surge";
      }
      if ("undefined" !== typeof $environment && $environment["stash-version"]) {
        return "Stash";
      }
      if ("undefined" !== typeof $task) {
        return "Quantumult X";
      }
      if ("undefined" !== typeof $loon) {
        return "Loon";
      }
      if ("undefined" !== typeof $rocket) {
        return "Shadowrocket";
      }
    }
    isQuanX() {
      return "Quantumult X" === this.getEnv();
    }
    isSurge() {
      return "Surge" === this.getEnv();
    }
    isLoon() {
      return "Loon" === this.getEnv();
    }
    isShadowrocket() {
      return "Shadowrocket" === this.getEnv();
    }
    isStash() {
      return "Stash" === this.getEnv();
    }
    toObj(str, defaultValue = null) {
      try {
        return JSON.parse(str);
      } catch {
        return defaultValue;
      }
    }
    toStr(obj, defaultValue = null, ...args) {
      try {
        return JSON.stringify(obj, ...args);
      } catch {
        return defaultValue;
      }
    }
    getval(key) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.read(key);
        case "Quantumult X":
          return $prefs.valueForKey(key);
        default:
      }
    }
    setval(val, key) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.write(val, key);
        case "Quantumult X":
          return $prefs.setValueForKey(val, key);
        default:
      }
    }
    get(request, callback = () => {}) {
      if (request.headers) {
        delete request.headers["Content-Type"];
        delete request.headers["Content-Length"];
        delete request.headers["content-type"];
        delete request.headers["content-length"];
      }
      if (request.params) {
        request.url += "?" + this.queryStr(request.params);
      }
      if (typeof request.followRedirect !== "undefined" && !request.followRedirect) {
        if (this.isSurge() || this.isLoon()) {
          request["auto-redirect"] = false;
        }
        if (this.isQuanX()) {
          request.opts ? request.opts.redirection = false : request.opts = {
            redirection: false
          };
        }
      }
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          if (this.isSurge() && this.isNeedRewrite) {
            request.headers = request.headers || {};
            Object.assign(request.headers, {
              "X-Surge-Skip-Scripting": false
            });
          }
          $httpClient.get(request, (err, resp, body) => {
            if (!err && resp) {
              resp.body = body;
              resp.statusCode = resp.status ? resp.status : resp.statusCode;
              resp.status = resp.statusCode;
            }
            callback(err, resp, body);
          });
          break;
        case "Quantumult X":
          if (this.isNeedRewrite) {
            request.opts = request.opts || {};
            Object.assign(request.opts, {
              hints: false
            });
          }
          $task.fetch(request).then(resp => {
            const {
              statusCode: status,
              statusCode,
              headers,
              body,
              bodyBytes
            } = resp;
            callback(null, {
              status,
              statusCode,
              headers,
              body,
              bodyBytes
            }, body, bodyBytes);
          }, err => callback(err && err.error || "UndefinedError"));
          break;
      }
    }
    post(request, callback = () => {}) {
      const method = request.method ? request.method.toLocaleLowerCase() : "post";
      if (request.body && request.headers && !request.headers["Content-Type"] && !request.headers["content-type"]) {
        request.headers["content-type"] = "application/x-www-form-urlencoded";
      }
      if (request.headers) {
        delete request.headers["Content-Length"];
        delete request.headers["content-length"];
      }
      if (typeof request.followRedirect !== "undefined" && !request.followRedirect) {
        if (this.isSurge() || this.isLoon()) {
          request["auto-redirect"] = false;
        }
        if (this.isQuanX()) {
          request.opts ? request.opts.redirection = false : request.opts = {
            redirection: false
          };
        }
      }
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          if (this.isSurge() && this.isNeedRewrite) {
            request.headers = request.headers || {};
            Object.assign(request.headers, {
              "X-Surge-Skip-Scripting": false
            });
          }
          $httpClient[method](request, (err, resp, body) => {
            if (!err && resp) {
              resp.body = body;
              resp.statusCode = resp.status ? resp.status : resp.statusCode;
              resp.status = resp.statusCode;
            }
            callback(err, resp, body);
          });
          break;
        case "Quantumult X":
          request.method = method;
          if (this.isNeedRewrite) {
            request.opts = request.opts || {};
            Object.assign(request.opts, {
              hints: false
            });
          }
          $task.fetch(request).then(resp => {
            const {
              statusCode: status,
              statusCode,
              headers,
              body,
              bodyBytes
            } = resp;
            callback(null, {
              status,
              statusCode,
              headers,
              body,
              bodyBytes
            }, body, bodyBytes);
          }, err => callback(err && err.error || "UndefinedError"));
          break;
      }
    }
    time(fmt, ts = null) {
      const date = ts ? new Date(ts) : new Date();
      let o = {
        "M+": date.getMonth() + 1,
        "d+": date.getDate(),
        "H+": date.getHours(),
        "m+": date.getMinutes(),
        "s+": date.getSeconds(),
        "q+": Math.floor((date.getMonth() + 3) / 3),
        S: date.getMilliseconds()
      };
      if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
      }
      for (let k in o) if (new RegExp("(" + k + ")").test(fmt)) {
        fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
      }
      return fmt;
    }
    msg(title = name, subt = "", desc = "", opts = {}) {
      const toEnvOpts = rawopts => {
        const {
          $open,
          $copy,
          $media,
          $mediaMime
        } = rawopts;
        switch (typeof rawopts) {
          case undefined:
            return rawopts;
          case "string":
            switch (this.getEnv()) {
              case "Surge":
              case "Stash":
              default:
                return {
                  url: rawopts
                };
              case "Loon":
              case "Shadowrocket":
                return rawopts;
              case "Quantumult X":
                return {
                  "open-url": rawopts
                };
            }
          case "object":
            switch (this.getEnv()) {
              case "Surge":
              case "Stash":
              case "Shadowrocket":
              default:
                {
                  const options = {};
                  let openUrl = rawopts.openUrl || rawopts.url || rawopts["open-url"] || $open;
                  if (openUrl) {
                    Object.assign(options, {
                      action: "open-url",
                      url: openUrl
                    });
                  }
                  let copy = rawopts["update-pasteboard"] || rawopts.updatePasteboard || $copy;
                  if (copy) {
                    Object.assign(options, {
                      action: "clipboard",
                      text: copy
                    });
                  }
                  if ($media) {
                    let mediaUrl = undefined;
                    let media = undefined;
                    let mime = undefined;
                    if ($media.startsWith("http")) {
                      mediaUrl = $media;
                    } else {
                      if ($media.startsWith("data:")) {
                        const [data] = $media.split(";");
                        const [, base64str] = $media.split(",");
                        media = base64str;
                        mime = data.replace("data:", "");
                      } else {
                        const getMimeFromBase64 = encoded => {
                          const signatures = {
                            JVBERi0: "application/pdf",
                            R0lGODdh: "image/gif",
                            R0lGODlh: "image/gif",
                            iVBORw0KGgo: "image/png",
                            "/9j/": "image/jpg"
                          };
                          for (var s in signatures) {
                            if (encoded.indexOf(s) === 0) {
                              return signatures[s];
                            }
                          }
                          return null;
                        };
                        media = $media;
                        mime = getMimeFromBase64($media);
                      }
                    }
                    Object.assign(options, {
                      "media-url": mediaUrl,
                      "media-base64": media,
                      "media-base64-mime": $mediaMime || mime
                    });
                  }
                  Object.assign(options, {
                    "auto-dismiss": rawopts["auto-dismiss"],
                    sound: rawopts.sound
                  });
                  return options;
                }
              case "Loon":
                {
                  const options = {};
                  let openUrl = rawopts.openUrl || rawopts.url || rawopts["open-url"] || $open;
                  if (openUrl) {
                    Object.assign(options, {
                      openUrl
                    });
                  }
                  let mediaUrl = rawopts.mediaUrl || rawopts["media-url"];
                  if ($media && $media.startsWith("http")) {
                    mediaUrl = $media;
                  }
                  if (mediaUrl) {
                    Object.assign(options, {
                      mediaUrl
                    });
                  }
                  console.log(JSON.stringify(options));
                  return options;
                }
              case "Quantumult X":
                {
                  const options = {};
                  let openUrl = rawopts["open-url"] || rawopts.url || rawopts.openUrl || $open;
                  if (openUrl) {
                    Object.assign(options, {
                      "open-url": openUrl
                    });
                  }
                  let mediaUrl = rawopts["media-url"] || rawopts.mediaUrl;
                  if ($media && $media.startsWith("http")) {
                    mediaUrl = $media;
                  }
                  if (mediaUrl) {
                    Object.assign(options, {
                      "media-url": mediaUrl
                    });
                  }
                  let copy = rawopts["update-pasteboard"] || rawopts.updatePasteboard || $copy;
                  if (copy) {
                    Object.assign(options, {
                      "update-pasteboard": copy
                    });
                  }
                  console.log(JSON.stringify(options));
                  return options;
                }
            }
          default:
            return undefined;
        }
      };
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          $notification.post(title, subt, desc, toEnvOpts(opts));
          break;
        case "Quantumult X":
          $notify(title, subt, desc, toEnvOpts(opts));
          break;
      }
      if (!this.isMute) {
        let logs = ["", "==============📣系统通知📣=============="];
        logs.push(title);
        subt ? logs.push(subt) : "";
        desc ? logs.push(desc) : "";
        console.log(logs.join("\n"));
        this.logs = this.logs.concat(logs);
      }
    }
    log(...logs) {
      if (logs.length > 0) {
        this.logs = [...this.logs, ...logs];
      }
      console.log(logs.map(l => l || String(l)).join(this.logSeparator));
    }
    wait(time) {
      return new Promise(resolve => setTimeout(resolve, time));
    }
    done(val = {}) {
      const endTime = new Date().getTime();
      const costTime = (endTime - this.startTime) / 1000;
      !this.isMute && this.log("", `🔔${this.name}, 结束! 🕛 ${costTime} 秒`);
      this.log();
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          $done(val);
          break;
      }
    }
  }(name, opts);
}