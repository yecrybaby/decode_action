//Mon Apr 14 2025 09:15:54 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
(function () {
  'use strict';

  const _0x1a35db = document.createElement("button");
  _0x1a35db.innerHTML = "解析视频";
  _0x1a35db.style.cssText = "\n        position: fixed;\n        bottom: 20px;\n        right: 20px;\n        z-index: 9999;\n        padding: 12px 16px;\n        background: #4CAF50;\n        color: white;\n        border: none;\n        border-radius: 50px;\n        font-size: 16px;\n        cursor: pointer;\n        box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);\n        touch-action: manipulation;\n        -webkit-tap-highlight-color: transparent;\n        @media (max-width: 768px) {\n            padding: 10px 14px;\n            font-size: 14px;\n            bottom: 15px;\n            right: 15px;\n        }\n    ";
  const _0x1f2523 = document.createElement("div");
  _0x1f2523.style.cssText = "\n        position: fixed;\n        bottom: 20px;\n        right: 120px;\n        z-index: 9999;\n        display: none;\n        flex-direction: row;\n        gap: 10px;\n        padding: 8px;\n        background: white;\n        border-radius: 8px;\n        box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);\n        @media (max-width: 768px) {\n            right: 15px;\n            bottom: 60px;\n            flex-direction: column;\n            gap: 5px;\n        }\n    ";
  const _0x4b6d40 = "\n        padding: 10px;\n        width: 140px;\n        font-size: 14px;\n        color: white;\n        border: none;\n        border-radius: 6px;\n        cursor: pointer;\n        text-align: center;\n        touch-action: manipulation;\n        -webkit-tap-highlight-color: transparent;\n        @media (max-width: 768px) {\n            width: 120px;\n            padding: 8px;\n            font-size: 13px;\n        }\n    ",
    _0x287bdf = document.createElement("button");
  _0x287bdf.innerHTML = "输入 PID 解析";
  _0x287bdf.style.cssText = _0x4b6d40 + "background: #FF9800;";
  const _0x312f71 = document.createElement("button");
  _0x312f71.innerHTML = "直接解析";
  _0x312f71.style.cssText = _0x4b6d40 + "background: #2196F3;";
  _0x1f2523.appendChild(_0x287bdf);
  _0x1f2523.appendChild(_0x312f71);
  const _0x42fd77 = document.createElement("div");
  _0x42fd77.style.cssText = "\n        position: fixed;\n        bottom: 80px;\n        right: 20px;\n        width: 320px;\n        padding: 15px;\n        background: white;\n        border-radius: 10px;\n        box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.3);\n        text-align: center;\n        display: none;\n        @media (max-width: 768px) {\n            width: 90%;\n            max-width: 320px;\n            bottom: 70px;\n            right: 5%;\n            left: 5%;\n            padding: 12px;\n        }\n    ";
  async function _0x146274(_0x25d01a) {
    if (!_0x25d01a) {
      alert("请输入有效的 PID");
      return;
    }
    try {
      const _0x96ad = await fetch("https://haijiao.com/api/topic/" + _0x25d01a);
      if (!_0x96ad.headers.get("Content-Type")?.["includes"]("application/json")) {
        throw new Error("无此资源");
      }
      const _0x8abf44 = await _0x96ad.json();
      let _0x45e9f0;
      try {
        _0x45e9f0 = JSON.parse(atob(atob(atob(_0x8abf44.data)))).attachments.filter(_0x2e0e8e => _0x2e0e8e.category === "video").map(_0x4c6482 => _0x4c6482.remoteUrl);
      } catch (_0x790f83) {
        throw new Error("数据解析失败");
      }
      if (!_0x45e9f0.length || !_0x45e9f0[0]) {
        {
          const _0x25abcf = JSON.parse(atob(atob(atob(_0x8abf44.data)))).attachments.filter(_0x32be0b => _0x32be0b.category === "video").map(_0x3ed3fd => _0x3ed3fd.coverUrl),
            _0xca9b54 = _0x25abcf[0].match(/(\/hjstore\/video\/[^/]+\/[^/]+\/\d+)/);
          _0xca9b54 && (_0x45e9f0[0] = "https://ts3.hjbd81.top" + _0xca9b54[0] + "_i_preview.m3u8");
          console.log(_0x45e9f0[0]);
        }
      }
      if (!_0x45e9f0[0].includes("preview")) {
        alert("免费视频无需解析");
        return;
      }
      const _0x3682af = _0x45e9f0[0].replace(/\/[^\/]+$/, "/");
      let _0x1733ee = await fetch(_0x45e9f0[0]),
        _0x1c3b9a = await _0x1733ee.text();
      const _0x141ef6 = _0x1c3b9a.split("\n"),
        _0x40fc16 = new Set();
      _0x141ef6.forEach(_0x3078e7 => {
        _0x3078e7 = _0x3078e7.trim();
        if (_0x3078e7.endsWith(".ts")) {
          const _0x224d91 = _0x3078e7.match(/([^\/]+)_i\d+\.ts/);
          _0x224d91 && _0x40fc16.add(_0x224d91[1]);
        }
      });
      if (_0x40fc16.size === 0) {
        throw new Error("未能解析出有效的视频地址");
      }
      let _0x1a36d3 = [..._0x40fc16][0],
        _0x173355 = _0x3682af + _0x1a36d3 + "_i.m3u8";
      _0x42fd77.style.display = "block";
      _0x42fd77.innerHTML = "\n                <h3 style=\"color: #4CAF50; margin: 0 0 10px 0; font-size: 16px;\">解析成功</h3>\n                <p style=\"word-wrap: break-word; margin: 0 0 10px 0; font-size: 13px;\">" + _0x173355 + "</p>\n                <div style=\"display: flex; gap: 8px; justify-content: center; flex-wrap: wrap;\">\n                    <button id=\"copyBtn\" style=\"background: #4CAF50; padding: 6px 12px; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 13px; flex: 1; min-width: 80px;\">复制链接</button>\n                    <button id=\"playBtn\" style=\"background: #2196F3; padding: 6px 12px; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 13px; flex: 1; min-width: 80px;\">播放视频</button>\n                    <button id=\"closeResult\" style=\"background: #d32f2f; padding: 6px 12px; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 13px; flex: 1; min-width: 80px;\">关闭</button>\n                </div>\n            ";
      document.getElementById("copyBtn").addEventListener("click", async () => {
        try {
          await navigator.clipboard.writeText(_0x173355);
          alert("链接已复制到剪贴板！");
        } catch (_0x5f33b4) {
          alert("复制失败：" + _0x5f33b4);
        }
      });
      document.getElementById("playBtn").addEventListener("click", () => {
        const _0x2d337e = document.createElement("div");
        _0x2d337e.style.cssText = "\n                        position: fixed;\n                        top: 50%;\n                        left: 50%;\n                        transform: translate(-50%, -50%);\n                        background: black;\n                        padding: 20px;\n                        z-index: 10000;\n                        border-radius: 8px;\n                        cursor: move;\n                        @media (max-width: 768px) {\n                            width: 95%;\n                            padding: 10px;\n                            max-height: 90vh;\n                            overflow-y: auto;\n                        }\n                    ";
        let _0x437b04 = false,
          _0x276a5b,
          _0x572431,
          _0x23d300,
          _0x52229b,
          _0x3fdd72 = 0,
          _0x3aa5f6 = 0;
        _0x2d337e.addEventListener("mousedown", _0x3ce055);
        document.addEventListener("mousemove", _0x4a433f);
        document.addEventListener("mouseup", _0x287a1b);
        function _0x3ce055(_0x2b7447) {
          _0x23d300 = _0x2b7447.clientX - _0x3fdd72;
          _0x52229b = _0x2b7447.clientY - _0x3aa5f6;
          _0x2b7447.target === _0x2d337e && (_0x437b04 = true);
        }
        function _0x4a433f(_0xa5dbc8) {
          {
            if (_0x437b04) {
              _0xa5dbc8.preventDefault();
              _0x276a5b = _0xa5dbc8.clientX - _0x23d300;
              _0x572431 = _0xa5dbc8.clientY - _0x52229b;
              _0x3fdd72 = _0x276a5b;
              _0x3aa5f6 = _0x572431;
              _0x2d337e.style.transform = "translate(" + _0x276a5b + "px, " + _0x572431 + "px)";
            }
          }
        }
        function _0x287a1b() {
          _0x437b04 = false;
        }
        const _0x553145 = document.createElement("video");
        _0x553145.style.cssText = "\n                        max-width: 800px;\n                        max-height: 600px;\n                        display: block;\n                        margin-bottom: 10px;\n                        @media (max-width: 768px) {\n                            max-width: 100%;\n                            max-height: 50vh;\n                        }\n                    ";
        _0x553145.controls = true;
        _0x553145.autoplay = true;
        const _0x15c60b = document.createElement("button");
        _0x15c60b.innerHTML = "关闭播放";
        _0x15c60b.style.cssText = "\n                        background: red;\n                        color: white;\n                        border: none;\n                        padding: 6px 12px;\n                        border-radius: 4px;\n                        cursor: pointer;\n                        display: block;\n                        margin: 8px auto 0;\n                        width: 100%;\n                        font-size: 13px;\n                        @media (max-width: 768px) {\n                            padding: 4px 10px;\n                        }\n                    ";
        _0x15c60b.onclick = () => _0x2d337e.remove();
        if (Hls.isSupported()) {
          {
            const _0x43dc9b = new Hls();
            _0x43dc9b.loadSource(_0x173355);
            _0x43dc9b.attachMedia(_0x553145);
          }
        } else _0x553145.canPlayType("application/vnd.apple.mpegurl") && (_0x553145.src = _0x173355);
        _0x2d337e.appendChild(_0x553145);
        _0x2d337e.appendChild(_0x15c60b);
        document.body.appendChild(_0x2d337e);
      });
      document.getElementById("closeResult").addEventListener("click", () => {
        _0x42fd77.style.display = "none";
      });
    } catch (_0x5511e3) {
      _0x42fd77.style.display = "block";
      _0x42fd77.innerHTML = "\n                <h3 style=\"margin: 0 0 10px 0; font-size: 16px; color: #d32f2f;\">解析失败：</h3>\n                <pre style=\"margin: 0 0 10px 0; font-size: 13px; white-space: pre-wrap; word-break: break-all;\">" + _0x5511e3.message + "</pre>\n                <button id=\"closeResult\" style=\"background: #d32f2f; padding: 6px 12px; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 13px; width: 100%;\">关闭</button>\n            ";
      alert(_0x5511e3.message);
      document.getElementById("closeResult").addEventListener("click", () => {
        _0x42fd77.style.display = "none";
      });
    }
  }
  _0x1a35db.addEventListener("click", () => {
    _0x1f2523.style.display = _0x1f2523.style.display === "none" ? "flex" : "none";
  });
  _0x287bdf.addEventListener("click", () => {
    {
      const _0x1d000a = prompt("请输入 PID:");
      if (_0x1d000a) _0x146274(_0x1d000a.trim());
    }
  });
  _0x312f71.addEventListener("click", () => {
    const _0xb60648 = new URL(window.location.href),
      _0x4a2a0b = new URLSearchParams(_0xb60648.search),
      _0x7c7a46 = _0x4a2a0b.get("pid");
    _0x146274(_0x7c7a46);
  });
  document.body.appendChild(_0x1a35db);
  document.body.appendChild(_0x1f2523);
  document.body.appendChild(_0x42fd77);
})();