(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  411088,
  (e) => {
    "use strict";
    var t = e.i(931067),
      a = e.i(915874),
      r = e.i(271645),
      n = r.useLayoutEffect,
      i = function (e) {
        var t = r.default.useRef(e);
        return (
          n(function () {
            t.current = e;
          }),
          t
        );
      },
      l = function (e, t) {
        "function" == typeof e ? e(t) : (e.current = t);
      },
      o = function (e, t) {
        var a = r.default.useRef();
        return r.default.useCallback(
          function (r) {
            (e.current = r),
              a.current && l(a.current, null),
              (a.current = t),
              t && l(t, r);
          },
          [t]
        );
      },
      s = {
        "min-height": "0",
        "max-height": "none",
        height: "0",
        visibility: "hidden",
        overflow: "hidden",
        position: "absolute",
        "z-index": "-1000",
        top: "0",
        right: "0",
        display: "block",
      },
      c = function (e) {
        Object.keys(s).forEach(function (t) {
          e.style.setProperty(t, s[t], "important");
        });
      },
      d = null,
      u = function (e, t) {
        var a = e.scrollHeight;
        return "border-box" === t.sizingStyle.boxSizing
          ? a + t.borderSize
          : a - t.paddingSize;
      },
      h = function () {},
      m = [
        "borderBottomWidth",
        "borderLeftWidth",
        "borderRightWidth",
        "borderTopWidth",
        "boxSizing",
        "fontFamily",
        "fontSize",
        "fontStyle",
        "fontWeight",
        "letterSpacing",
        "lineHeight",
        "paddingBottom",
        "paddingLeft",
        "paddingRight",
        "paddingTop",
        "tabSize",
        "textIndent",
        "textRendering",
        "textTransform",
        "width",
        "wordBreak",
        "wordSpacing",
        "scrollbarGutter",
      ],
      f = !!document.documentElement.currentStyle,
      g = function (e) {
        var t = window.getComputedStyle(e);
        if (null === t) return null;
        var a = m.reduce(function (e, a) {
            return (e[a] = t[a]), e;
          }, {}),
          r = a.boxSizing;
        if ("" === r) return null;
        f &&
          "border-box" === r &&
          (a.width =
            parseFloat(a.width) +
            parseFloat(a.borderRightWidth) +
            parseFloat(a.borderLeftWidth) +
            parseFloat(a.paddingRight) +
            parseFloat(a.paddingLeft) +
            "px");
        var n = parseFloat(a.paddingBottom) + parseFloat(a.paddingTop),
          i = parseFloat(a.borderBottomWidth) + parseFloat(a.borderTopWidth);
        return { sizingStyle: a, paddingSize: n, borderSize: i };
      };
    function p(e, t, a) {
      var n = i(a);
      r.useLayoutEffect(function () {
        var a = function (e) {
          return n.current(e);
        };
        if (e)
          return (
            e.addEventListener(t, a),
            function () {
              return e.removeEventListener(t, a);
            }
          );
      }, []);
    }
    var x = function (e, t) {
        p(document.body, "reset", function (a) {
          e.current.form === a.target && t(a);
        });
      },
      b = function (e) {
        p(window, "resize", e);
      },
      y = function (e) {
        p(document.fonts, "loadingdone", e);
      },
      w = [
        "cacheMeasurements",
        "maxRows",
        "minRows",
        "onChange",
        "onHeightChange",
      ],
      v = r.forwardRef(function (e, n) {
        var i = e.cacheMeasurements,
          l = e.maxRows,
          s = e.minRows,
          m = e.onChange,
          f = void 0 === m ? h : m,
          p = e.onHeightChange,
          v = void 0 === p ? h : p,
          S = (0, a.default)(e, w),
          N = void 0 !== S.value,
          C = r.useRef(null),
          T = o(C, n),
          k = r.useRef(0),
          j = r.useRef(),
          P = function () {
            var e = C.current,
              t = i && j.current ? j.current : g(e);
            if (t) {
              j.current = t;
              var a,
                r,
                n,
                o,
                h,
                m,
                f,
                p,
                x,
                b,
                y,
                w =
                  ((a = e.value || e.placeholder || "x"),
                  void 0 === (r = s) && (r = 1),
                  void 0 === (n = l) && (n = 1 / 0),
                  d ||
                    ((d = document.createElement("textarea")).setAttribute(
                      "tabindex",
                      "-1"
                    ),
                    d.setAttribute("aria-hidden", "true"),
                    c(d)),
                  null === d.parentNode && document.body.appendChild(d),
                  (o = t.paddingSize),
                  (h = t.borderSize),
                  (f = (m = t.sizingStyle).boxSizing),
                  Object.keys(m).forEach(function (e) {
                    d.style[e] = m[e];
                  }),
                  c(d),
                  (d.value = a),
                  (p = u(d, t)),
                  (d.value = a),
                  (p = u(d, t)),
                  (d.value = "x"),
                  (b = (x = d.scrollHeight - o) * r),
                  "border-box" === f && (b = b + o + h),
                  (p = Math.max(b, p)),
                  (y = x * n),
                  "border-box" === f && (y = y + o + h),
                  [(p = Math.min(y, p)), x]),
                S = w[0],
                N = w[1];
              k.current !== S &&
                ((k.current = S),
                e.style.setProperty("height", S + "px", "important"),
                v(S, { rowHeight: N }));
            }
          };
        return (
          r.useLayoutEffect(P),
          x(C, function () {
            if (!N) {
              var e = C.current.value;
              requestAnimationFrame(function () {
                var t = C.current;
                t && e !== t.value && P();
              });
            }
          }),
          b(P),
          y(P),
          r.createElement(
            "textarea",
            (0, t.default)({}, S, {
              onChange: function (e) {
                N || P(), f(e);
              },
              ref: T,
            })
          )
        );
      });
    e.s(["default", () => v], 411088);
  },
  729895,
  (e) => {
    "use strict";
    var t = e.i(843476),
      a = e.i(411088);
    e.i(271645);
    var r = e.i(689736);
    e.i(207670);
    var n = e.i(789549),
      i = e.i(321879),
      l = e.i(578565);
    let o = { size: "sm" },
      s = (0, i.factory)((e, i) => {
        let {
            autosize: s,
            maxRows: c,
            minRows: d,
            __staticSelector: u,
            resize: h,
            ...m
          } = (0, n.useProps)("Textarea", o, e),
          f = s && "test" !== (0, r.getEnv)();
        return (0, t.jsx)(l.InputBase, {
          component: f ? a.default : "textarea",
          ref: i,
          ...m,
          __staticSelector: u || "Textarea",
          multiline: !0,
          "data-no-overflow": (s && void 0 === c) || void 0,
          __vars: { "--input-resize": h },
          ...(f ? { maxRows: c, minRows: d } : {}),
        });
      });
    (s.classes = l.InputBase.classes),
      (s.displayName = "@mantine/core/Textarea"),
      e.s(["Textarea", () => s]);
  },
  308794,
  (e) => {
    "use strict";
    let t = (0, e.i(33550).default)("outline", "share-2", "Share2", [
      [
        "path",
        {
          d: "M8 9h-1a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-8a2 2 0 0 0 -2 -2h-1",
          key: "svg-0",
        },
      ],
      ["path", { d: "M12 14v-11", key: "svg-1" }],
      ["path", { d: "M9 6l3 -3l3 3", key: "svg-2" }],
    ]);
    e.s(["IconShare2", () => t], 308794);
  },
  295374,
  416059,
  24535,
  266459,
  (e) => {
    "use strict";
    let t;
    var a = e.i(843476),
      r = e.i(533372),
      n = e.i(722071),
      i = e.i(2710),
      l = e.i(129277),
      o = e.i(729895),
      s = e.i(271645),
      c = e.i(657688);
    let d = {
      src: e.i(705750).default,
      width: 606,
      height: 409,
      blurWidth: 0,
      blurHeight: 0,
    };
    e.s(["default", 0, d], 416059);
    let u = {
      src: e.i(673959).default,
      width: 606,
      height: 409,
      blurWidth: 0,
      blurHeight: 0,
    };
    e.s(["default", 0, u], 24535);
    var h = e.i(963327),
      m = e.i(343794),
      f = e.i(785642),
      g = e.i(553917),
      p = e.i(247167);
    let x =
      ((t = 0),
      () => (
        (t += 1),
        `u${`0000${((1679616 * Math.random()) | 0).toString(36)}`.slice(
          -4
        )}${t}`
      ));
    function b(e) {
      let t = [];
      for (let a = 0, r = e.length; a < r; a++) t.push(e[a]);
      return t;
    }
    let y = null;
    function w(e = {}) {
      return (
        y ||
        (y = e.includeStyleProperties
          ? e.includeStyleProperties
          : b(window.getComputedStyle(document.documentElement)))
      );
    }
    function v(e, t) {
      let a = (e.ownerDocument.defaultView || window)
        .getComputedStyle(e)
        .getPropertyValue(t);
      return a ? parseFloat(a.replace("px", "")) : 0;
    }
    function S(e, t = {}) {
      let a, r, n, i;
      return {
        width:
          t.width ||
          ((a = v(e, "border-left-width")),
          (r = v(e, "border-right-width")),
          e.clientWidth + a + r),
        height:
          t.height ||
          ((n = v(e, "border-top-width")),
          (i = v(e, "border-bottom-width")),
          e.clientHeight + n + i),
      };
    }
    function N(e) {
      return new Promise((t, a) => {
        let r = new Image();
        (r.onload = () => {
          r.decode().then(() => {
            requestAnimationFrame(() => t(r));
          });
        }),
          (r.onerror = a),
          (r.crossOrigin = "anonymous"),
          (r.decoding = "async"),
          (r.src = e);
      });
    }
    async function C(e) {
      return Promise.resolve()
        .then(() => new XMLSerializer().serializeToString(e))
        .then(encodeURIComponent)
        .then((e) => `data:image/svg+xml;charset=utf-8,${e}`);
    }
    async function T(e, t, a) {
      let r = "http://www.w3.org/2000/svg",
        n = document.createElementNS(r, "svg"),
        i = document.createElementNS(r, "foreignObject");
      return (
        n.setAttribute("width", `${t}`),
        n.setAttribute("height", `${a}`),
        n.setAttribute("viewBox", `0 0 ${t} ${a}`),
        i.setAttribute("width", "100%"),
        i.setAttribute("height", "100%"),
        i.setAttribute("x", "0"),
        i.setAttribute("y", "0"),
        i.setAttribute("externalResourcesRequired", "true"),
        n.appendChild(i),
        i.appendChild(e),
        C(n)
      );
    }
    let k = (e, t) => {
      if (e instanceof t) return !0;
      let a = Object.getPrototypeOf(e);
      return null !== a && (a.constructor.name === t.name || k(a, t));
    };
    function j(e, t, a, r) {
      let n,
        i,
        l,
        o = window.getComputedStyle(e, a),
        s = o.getPropertyValue("content");
      if ("" === s || "none" === s) return;
      let c = x();
      try {
        t.className = `${t.className} ${c}`;
      } catch (e) {
        return;
      }
      let d = document.createElement("style");
      d.appendChild(
        ((n = `.${c}:${a}`),
        (l = o.cssText
          ? ((i = o.getPropertyValue("content")),
            `${o.cssText} content: '${i.replace(/'|"/g, "")}';`)
          : w(r)
              .map((e) => {
                let t = o.getPropertyValue(e),
                  a = o.getPropertyPriority(e);
                return `${e}: ${t}${a ? " !important" : ""};`;
              })
              .join(" ")),
        document.createTextNode(`${n}{${l}}`))
      ),
        t.appendChild(d);
    }
    let P = "application/font-woff",
      E = "image/jpeg",
      R = {
        woff: P,
        woff2: P,
        ttf: "application/font-truetype",
        eot: "application/vnd.ms-fontobject",
        png: "image/png",
        jpg: E,
        jpeg: E,
        gif: "image/gif",
        tiff: "image/tiff",
        svg: "image/svg+xml",
        webp: "image/webp",
      };
    function $(e) {
      let t;
      return R[((t = /\.([^./]*?)$/g.exec(e)) ? t[1] : "").toLowerCase()] || "";
    }
    function I(e) {
      return -1 !== e.search(/^(data:)/);
    }
    function L(e, t) {
      return `data:${t};base64,${e}`;
    }
    async function F(e, t, a) {
      let r = await fetch(e, t);
      if (404 === r.status) throw Error(`Resource "${r.url}" not found`);
      let n = await r.blob();
      return new Promise((e, t) => {
        let i = new FileReader();
        (i.onerror = t),
          (i.onloadend = () => {
            try {
              e(a({ res: r, result: i.result }));
            } catch (e) {
              t(e);
            }
          }),
          i.readAsDataURL(n);
      });
    }
    let M = {};
    async function z(e, t, a) {
      var r, n, i;
      let l,
        o,
        s =
          ((r = e),
          (n = t),
          (i = a.includeQueryParams),
          (o = r.replace(/\?.*/, "")),
          i && (o = r),
          /ttf|otf|eot|woff2?/i.test(o) && (o = o.replace(/.*\//, "")),
          n ? `[${n}]${o}` : o);
      if (null != M[s]) return M[s];
      a.cacheBust && (e += (/\?/.test(e) ? "&" : "?") + new Date().getTime());
      try {
        let r = await F(
          e,
          a.fetchRequestInit,
          ({ res: e, result: a }) => (
            t || (t = e.headers.get("Content-Type") || ""), a.split(/,/)[1]
          )
        );
        l = L(r, t);
      } catch (r) {
        l = a.imagePlaceholder || "";
        let t = `Failed to fetch resource: ${e}`;
        r && (t = "string" == typeof r ? r : r.message), t && console.warn(t);
      }
      return (M[s] = l), l;
    }
    async function A(e) {
      let t = e.toDataURL();
      return "data:," === t ? e.cloneNode(!1) : N(t);
    }
    async function _(e, t) {
      if (e.currentSrc) {
        let t = document.createElement("canvas"),
          a = t.getContext("2d");
        return (
          (t.width = e.clientWidth),
          (t.height = e.clientHeight),
          null == a || a.drawImage(e, 0, 0, t.width, t.height),
          N(t.toDataURL())
        );
      }
      let a = e.poster,
        r = $(a);
      return N(await z(a, r, t));
    }
    async function D(e, t) {
      var a;
      try {
        if (
          null == (a = null == e ? void 0 : e.contentDocument) ? void 0 : a.body
        )
          return await W(e.contentDocument.body, t, !0);
      } catch (e) {}
      return e.cloneNode(!1);
    }
    async function H(e, t) {
      return k(e, HTMLCanvasElement)
        ? A(e)
        : k(e, HTMLVideoElement)
        ? _(e, t)
        : k(e, HTMLIFrameElement)
        ? D(e, t)
        : e.cloneNode(O(e));
    }
    let O = (e) => null != e.tagName && "SVG" === e.tagName.toUpperCase();
    async function B(e, t, a) {
      var r, n;
      if (O(t)) return t;
      let i = [];
      return (
        0 ===
          (i =
            null != e.tagName &&
            "SLOT" === e.tagName.toUpperCase() &&
            e.assignedNodes
              ? b(e.assignedNodes())
              : k(e, HTMLIFrameElement) &&
                (null == (r = e.contentDocument) ? void 0 : r.body)
              ? b(e.contentDocument.body.childNodes)
              : b((null != (n = e.shadowRoot) ? n : e).childNodes)).length ||
          k(e, HTMLVideoElement) ||
          (await i.reduce(
            (e, r) =>
              e
                .then(() => W(r, a))
                .then((e) => {
                  e && t.appendChild(e);
                }),
            Promise.resolve()
          )),
        t
      );
    }
    async function U(e, t) {
      let a = e.querySelectorAll ? e.querySelectorAll("use") : [];
      if (0 === a.length) return e;
      let r = {};
      for (let n = 0; n < a.length; n++) {
        let i = a[n].getAttribute("xlink:href");
        if (i) {
          let a = e.querySelector(i),
            n = document.querySelector(i);
          a || !n || r[i] || (r[i] = await W(n, t, !0));
        }
      }
      let n = Object.values(r);
      if (n.length) {
        let t = "http://www.w3.org/1999/xhtml",
          a = document.createElementNS(t, "svg");
        a.setAttribute("xmlns", t),
          (a.style.position = "absolute"),
          (a.style.width = "0"),
          (a.style.height = "0"),
          (a.style.overflow = "hidden"),
          (a.style.display = "none");
        let r = document.createElementNS(t, "defs");
        a.appendChild(r);
        for (let e = 0; e < n.length; e++) r.appendChild(n[e]);
        e.appendChild(a);
      }
      return e;
    }
    async function W(e, t, a) {
      return a || !t.filter || t.filter(e)
        ? Promise.resolve(e)
            .then((e) => H(e, t))
            .then((a) => B(e, a, t))
            .then((a) =>
              (function (e, t, a) {
                if (
                  k(t, Element) &&
                  (!(function (e, t, a) {
                    let r = t.style;
                    if (!r) return;
                    let n = window.getComputedStyle(e);
                    n.cssText
                      ? ((r.cssText = n.cssText),
                        (r.transformOrigin = n.transformOrigin))
                      : w(a).forEach((a) => {
                          let i = n.getPropertyValue(a);
                          if ("font-size" === a && i.endsWith("px")) {
                            let e =
                              Math.floor(
                                parseFloat(i.substring(0, i.length - 2))
                              ) - 0.1;
                            i = `${e}px`;
                          }
                          k(e, HTMLIFrameElement) &&
                            "display" === a &&
                            "inline" === i &&
                            (i = "block"),
                            "d" === a &&
                              t.getAttribute("d") &&
                              (i = `path(${t.getAttribute("d")})`),
                            r.setProperty(a, i, n.getPropertyPriority(a));
                        });
                  })(e, t, a),
                  j(e, t, ":before", a),
                  j(e, t, ":after", a),
                  k(e, HTMLTextAreaElement) && (t.innerHTML = e.value),
                  k(e, HTMLInputElement) && t.setAttribute("value", e.value),
                  k(e, HTMLSelectElement))
                ) {
                  let a = Array.from(t.children).find(
                    (t) => e.value === t.getAttribute("value")
                  );
                  a && a.setAttribute("selected", "");
                }
                return t;
              })(e, a, t)
            )
            .then((e) => U(e, t))
        : null;
    }
    let V = /url\((['"]?)([^'"]+?)\1\)/g,
      q = /url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g,
      G = /src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;
    async function K(e, t, a, r, n) {
      try {
        let i,
          l,
          o = a
            ? (function (e, t) {
                if (e.match(/^[a-z]+:\/\//i)) return e;
                if (e.match(/^\/\//)) return window.location.protocol + e;
                if (e.match(/^[a-z]+:/i)) return e;
                let a = document.implementation.createHTMLDocument(),
                  r = a.createElement("base"),
                  n = a.createElement("a");
                return (
                  a.head.appendChild(r),
                  a.body.appendChild(n),
                  t && (r.href = t),
                  (n.href = e),
                  n.href
                );
              })(t, a)
            : t,
          s = $(t);
        if (n) {
          let e = await n(o);
          i = L(e, s);
        } else i = await z(o, s, r);
        return e.replace(
          ((l = t.replace(/([.*+?^${}()|\[\]\/\\])/g, "\\$1")),
          RegExp(`(url\\(['"]?)(${l})(['"]?\\))`, "g")),
          `$1${i}$3`
        );
      } catch (e) {}
      return e;
    }
    function Q(e) {
      return -1 !== e.search(V);
    }
    async function X(e, t, a) {
      let r;
      if (!Q(e)) return e;
      let n = (function (e, { preferredFontFormat: t }) {
        return t
          ? e.replace(G, (e) => {
              for (;;) {
                let [a, , r] = q.exec(e) || [];
                if (!r) return "";
                if (r === t) return `src: ${a};`;
              }
            })
          : e;
      })(e, a);
      return ((r = []),
      n.replace(V, (e, t, a) => (r.push(a), e)),
      r.filter((e) => !I(e))).reduce(
        (e, r) => e.then((e) => K(e, r, t, a)),
        Promise.resolve(n)
      );
    }
    async function Y(e, t, a) {
      var r;
      let n = null == (r = t.style) ? void 0 : r.getPropertyValue(e);
      if (n) {
        let r = await X(n, null, a);
        return t.style.setProperty(e, r, t.style.getPropertyPriority(e)), !0;
      }
      return !1;
    }
    async function J(e, t) {
      (await Y("background", e, t)) || (await Y("background-image", e, t)),
        (await Y("mask", e, t)) ||
          (await Y("-webkit-mask", e, t)) ||
          (await Y("mask-image", e, t)) ||
          (await Y("-webkit-mask-image", e, t));
    }
    async function Z(e, t) {
      let a = k(e, HTMLImageElement);
      if (!(a && !I(e.src)) && !(k(e, SVGImageElement) && !I(e.href.baseVal)))
        return;
      let r = a ? e.src : e.href.baseVal,
        n = await z(r, $(r), t);
      await new Promise((r, i) => {
        (e.onload = r),
          (e.onerror = t.onImageErrorHandler
            ? (...e) => {
                try {
                  r(t.onImageErrorHandler(...e));
                } catch (e) {
                  i(e);
                }
              }
            : i),
          e.decode && (e.decode = r),
          "lazy" === e.loading && (e.loading = "eager"),
          a ? ((e.srcset = ""), (e.src = n)) : (e.href.baseVal = n);
      });
    }
    async function ee(e, t) {
      let a = b(e.childNodes).map((e) => et(e, t));
      await Promise.all(a).then(() => e);
    }
    async function et(e, t) {
      k(e, Element) && (await J(e, t), await Z(e, t), await ee(e, t));
    }
    let ea = {};
    async function er(e) {
      let t = ea[e];
      if (null != t) return t;
      let a = await fetch(e);
      return (t = { url: e, cssText: await a.text() }), (ea[e] = t), t;
    }
    async function en(e, t) {
      let a = e.cssText,
        r = /url\(["']?([^"')]+)["']?\)/g;
      return Promise.all(
        (a.match(/url\([^)]+\)/g) || []).map(async (n) => {
          let i = n.replace(r, "$1");
          return (
            i.startsWith("https://") || (i = new URL(i, e.url).href),
            F(
              i,
              t.fetchRequestInit,
              ({ result: e }) => ((a = a.replace(n, `url(${e})`)), [n, e])
            )
          );
        })
      ).then(() => a);
    }
    function ei(e) {
      if (null == e) return [];
      let t = [],
        a = e.replace(/(\/\*[\s\S]*?\*\/)/gi, ""),
        r = RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})", "gi");
      for (;;) {
        let e = r.exec(a);
        if (null === e) break;
        t.push(e[0]);
      }
      a = a.replace(r, "");
      let n = /@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi,
        i = RegExp(
          "((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})",
          "gi"
        );
      for (;;) {
        let e = n.exec(a);
        if (null === e) {
          if (null === (e = i.exec(a))) break;
          n.lastIndex = i.lastIndex;
        } else i.lastIndex = n.lastIndex;
        t.push(e[0]);
      }
      return t;
    }
    async function el(e, t) {
      let a = [],
        r = [];
      return (
        e.forEach((a) => {
          if ("cssRules" in a)
            try {
              b(a.cssRules || []).forEach((e, n) => {
                if (e.type === CSSRule.IMPORT_RULE) {
                  let i = n + 1,
                    l = e.href,
                    o = er(l)
                      .then((e) => en(e, t))
                      .then((e) =>
                        ei(e).forEach((e) => {
                          try {
                            a.insertRule(
                              e,
                              e.startsWith("@import")
                                ? (i += 1)
                                : a.cssRules.length
                            );
                          } catch (t) {
                            console.error(
                              "Error inserting rule from remote css",
                              { rule: e, error: t }
                            );
                          }
                        })
                      )
                      .catch((e) => {
                        console.error("Error loading remote css", e.toString());
                      });
                  r.push(o);
                }
              });
            } catch (i) {
              let n = e.find((e) => null == e.href) || document.styleSheets[0];
              null != a.href &&
                r.push(
                  er(a.href)
                    .then((e) => en(e, t))
                    .then((e) =>
                      ei(e).forEach((e) => {
                        n.insertRule(e, n.cssRules.length);
                      })
                    )
                    .catch((e) => {
                      console.error("Error loading remote stylesheet", e);
                    })
                ),
                console.error("Error inlining remote css file", i);
            }
        }),
        Promise.all(r).then(
          () => (
            e.forEach((e) => {
              if ("cssRules" in e)
                try {
                  b(e.cssRules || []).forEach((e) => {
                    a.push(e);
                  });
                } catch (t) {
                  console.error(
                    `Error while reading CSS rules from ${e.href}`,
                    t
                  );
                }
            }),
            a
          )
        )
      );
    }
    async function eo(e, t) {
      if (null == e.ownerDocument)
        throw Error("Provided element is not within a Document");
      let a = b(e.ownerDocument.styleSheets);
      return (await el(a, t))
        .filter((e) => e.type === CSSRule.FONT_FACE_RULE)
        .filter((e) => Q(e.style.getPropertyValue("src")));
    }
    function es(e) {
      return e.trim().replace(/["']/g, "");
    }
    async function ec(e, t) {
      let a,
        r = await eo(e, t),
        n =
          ((a = new Set()),
          !(function e(t) {
            (t.style.fontFamily || getComputedStyle(t).fontFamily)
              .split(",")
              .forEach((e) => {
                a.add(es(e));
              }),
              Array.from(t.children).forEach((t) => {
                t instanceof HTMLElement && e(t);
              });
          })(e),
          a);
      return (
        await Promise.all(
          r
            .filter((e) => n.has(es(e.style.fontFamily)))
            .map((e) => {
              let a = e.parentStyleSheet ? e.parentStyleSheet.href : null;
              return X(e.cssText, a, t);
            })
        )
      ).join("\n");
    }
    async function ed(e, t) {
      let a =
        null != t.fontEmbedCSS
          ? t.fontEmbedCSS
          : t.skipFonts
          ? null
          : await ec(e, t);
      if (a) {
        let t = document.createElement("style"),
          r = document.createTextNode(a);
        t.appendChild(r),
          e.firstChild ? e.insertBefore(t, e.firstChild) : e.appendChild(t);
      }
    }
    async function eu(e, t = {}) {
      let { width: a, height: r } = S(e, t),
        n = await W(e, t, !0);
      return (
        await ed(n, t),
        await et(n, t),
        !(function (e, t) {
          let { style: a } = e;
          t.backgroundColor && (a.backgroundColor = t.backgroundColor),
            t.width && (a.width = `${t.width}px`),
            t.height && (a.height = `${t.height}px`);
          let r = t.style;
          null != r &&
            Object.keys(r).forEach((e) => {
              a[e] = r[e];
            });
        })(n, t),
        await T(n, a, r)
      );
    }
    async function eh(e, t = {}) {
      let { width: a, height: r } = S(e, t),
        n = await eu(e, t),
        i = await N(n),
        l = document.createElement("canvas"),
        o = l.getContext("2d"),
        s =
          t.pixelRatio ||
          (function () {
            let e, t;
            try {
              t = p.default;
            } catch (e) {}
            let a = t && t.env ? t.env.devicePixelRatio : null;
            return (
              a && Number.isNaN((e = parseInt(a, 10))) && (e = 1),
              e || window.devicePixelRatio || 1
            );
          })(),
        c = t.canvasWidth || a,
        d = t.canvasHeight || r;
      return (
        (l.width = c * s),
        (l.height = d * s),
        !t.skipAutoScale &&
          (l.width > 16384 || l.height > 16384) &&
          (l.width > 16384 && l.height > 16384
            ? l.width > l.height
              ? ((l.height *= 16384 / l.width), (l.width = 16384))
              : ((l.width *= 16384 / l.height), (l.height = 16384))
            : l.width > 16384
            ? ((l.height *= 16384 / l.width), (l.width = 16384))
            : ((l.width *= 16384 / l.height), (l.height = 16384))),
        (l.style.width = `${c}`),
        (l.style.height = `${d}`),
        t.backgroundColor &&
          ((o.fillStyle = t.backgroundColor),
          o.fillRect(0, 0, l.width, l.height)),
        o.drawImage(i, 0, 0, l.width, l.height),
        l
      );
    }
    async function em(e, t = {}) {
      return (await eh(e, t)).toDataURL();
    }
    e.s(["toPng", () => em], 266459);
    var ef = e.i(862278),
      eg = e.i(890357),
      ep = e.i(346944),
      ex = e.i(557663),
      eb = e.i(152702);
    e.s(
      [
        "default",
        0,
        ({ opened: e, close: t, tradeItem: p, leverage: x = 1 }) => {
          let b = (0, s.useRef)(null),
            { referralCode: y } = (0, eg.useProfileStore)((e) => e.profileData),
            [w, v] = (0, s.useState)(""),
            { perpsSzDecimals: S } = (0, ef.useHyperliquidStore)(
              (0, ep.useShallow)((e) => ({
                perpsSzDecimals: e.perpsSzDecimals,
              }))
            );
          (0, s.useEffect)(() => {
            p?.coin && v(`Trade $${p?.coin} perps seamlessly on @GTRTrade`);
          }, [p?.coin]);
          let N =
              p?.dir === "Close Long"
                ? Number(p?.px) - Number(p?.closedPnl) / Math.abs(Number(p?.sz))
                : Number(p?.px) +
                  Number(p?.closedPnl) / Math.abs(Number(p?.sz)),
            C =
              (Number(p?.closedPnl) / (Number(N) * Math.abs(Number(p?.sz)))) *
              100,
            T = async () => {
              if (b.current)
                try {
                  let e = await em(b.current, { cacheBust: !0 }),
                    t = document.createElement("a");
                  (t.href = e),
                    (t.download = `GTR Trade ${p?.coin || "BTC"} PnL.png`),
                    document.body.appendChild(t),
                    t.click(),
                    document.body.removeChild(t);
                } catch (e) {
                  console.error("Screenshot failed:", e),
                    g.notifications.show({
                      color: "red",
                      message: "Failed to save image. Please try again.",
                      position: "top-center",
                      autoClose: 2e3,
                    });
                }
            },
            k = (0, eb.useIsMobile)(),
            j = (0, a.jsx)("div", {
              className: "p-6 pt-0 bg-[#15161C]",
              children: (0, a.jsxs)("div", {
                className: (0, m.default)("flex gap-6", {
                  "flex-col": k,
                  "flex-row": !k,
                }),
                children: [
                  (0, a.jsx)("div", {
                    className: (0, m.default)("flex-shrink-0", {
                      "w-full overflow-hidden flex justify-center": k,
                    }),
                    children: (0, a.jsxs)("div", {
                      ref: b,
                      style: {
                        width: "606px",
                        height: "409px",
                        backgroundImage:
                          p?.closedPnl >= 0 ? `url(${d.src})` : `url(${u.src})`,
                        backgroundSize: k ? "cover" : "120%",
                        transform: k
                          ? "scale(calc((100vw - 48px) / 606))"
                          : "none",
                        transformOrigin: "top left",
                      },
                      className:
                        "bg-no-repeat p-7 rounded-lg flex flex-col justify-between bg-[#07130F] border border-[#2D313C]",
                      children: [
                        (0, a.jsx)(c.default, {
                          src: h.default,
                          alt: "Logo - PNL",
                          width: 262,
                          className: "mb-4 sm:mb-0",
                        }),
                        (0, a.jsxs)("div", {
                          children: [
                            (0, a.jsxs)("div", {
                              className: "flex items-center gap-2",
                              children: [
                                (0, a.jsx)("p", {
                                  className:
                                    "text-2xl leading-none font-medium flex items-center h-8",
                                  children: (0, a.jsx)(ex.default, {
                                    tokenName: p?.coin,
                                  }),
                                }),
                                (0, a.jsxs)("div", {
                                  className: (0, m.default)(
                                    "ml-2 px-2.5 w-[140px] h-8 py-0 rounded-sm text-[22px] leading-none font-medium uppercase text-center flex justify-center items-center",
                                    {
                                      "text-grass bg-grass/20 border border-grass/40":
                                        p?.dir === "Close Long",
                                      "text-blood bg-blood/20 border border-blood/40":
                                        p?.dir === "Close Short",
                                    }
                                  ),
                                  children: [
                                    p?.dir === "Close Long" ? "LONG" : "SHORT",
                                    " ",
                                    x,
                                    "x",
                                  ],
                                }),
                              ],
                            }),
                            (0, a.jsxs)("h1", {
                              className: (0, m.default)(
                                "mt-6 mb-16 p-0 text-[80px] tracking-[-6px] font-medium leading-[88%]",
                                {
                                  "text-grass": p?.closedPnl >= 0,
                                  "text-blood": p?.closedPnl < 0,
                                }
                              ),
                              children: [(C * x).toFixed(2), "%"],
                            }),
                            (0, a.jsxs)("div", {
                              className:
                                "flex justify-between gap-10 flex-wrap",
                              children: [
                                (0, a.jsxs)("div", {
                                  className: "flex gap-12",
                                  children: [
                                    (0, a.jsxs)("div", {
                                      className: "flex flex-col gap-1",
                                      children: [
                                        (0, a.jsx)("p", {
                                          className:
                                            "text-white font-normal text-sm leading-[128%]",
                                          children: "Entry Price",
                                        }),
                                        (0, a.jsxs)("p", {
                                          className:
                                            "text-white text-lg font-medium",
                                          children: [
                                            "$",
                                            Number(N).toFixed(6 - S[p?.coin]),
                                          ],
                                        }),
                                      ],
                                    }),
                                    (0, a.jsxs)("div", {
                                      className: "flex flex-col gap-1",
                                      children: [
                                        (0, a.jsx)("p", {
                                          className:
                                            "text-white font-normal text-sm leading-[128%]",
                                          children: "Mark Price",
                                        }),
                                        (0, a.jsxs)("p", {
                                          className:
                                            "text-white text-lg font-medium",
                                          children: [
                                            "$",
                                            Number(p?.px).toFixed(
                                              6 - S[p?.coin]
                                            ),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, a.jsx)("div", {
                                  className:
                                    "flex items-start sm:items-end justify-between flex-1",
                                  children: (0, a.jsxs)("div", {
                                    className:
                                      "flex flex-col gap-1 items-start sm:items-end w-full",
                                    children: [
                                      (0, a.jsx)("p", {
                                        className:
                                          "text-white text-sm font-normal leading-[128%]",
                                        children: "Referral code",
                                      }),
                                      (0, a.jsxs)("p", {
                                        className: (0, m.default)(
                                          "text-lg font-medium text-white text-left sm:text-right min-w-[250px]"
                                        ),
                                        children: [
                                          "https://gtr.trade/?ref=",
                                          y,
                                        ],
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  (0, a.jsxs)("div", {
                    className: (0, m.default)(
                      "pt-1 pb-2 flex flex-col justify-between",
                      { "w-[30%] min-h-[400px]": !k, "w-full gap-8": k }
                    ),
                    children: [
                      (0, a.jsxs)("div", {
                        className: (0, m.default)("flex flex-col w-full", {
                          "gap-12": !k,
                          "gap-6": k,
                        }),
                        children: [
                          (0, a.jsxs)("div", {
                            className: "flex flex-col gap-4",
                            children: [
                              (0, a.jsx)("p", {
                                className:
                                  "text-xs font-normal leading-[10px] text-slate-800",
                                children: "Referral Code",
                              }),
                              (0, a.jsxs)("p", {
                                className:
                                  "text-white text-sm leading-[10px] font-medium",
                                children: ["https://gtr.trade/?ref=", y],
                              }),
                            ],
                          }),
                          (0, a.jsxs)("div", {
                            className: "flex flex-col gap-4 w-full",
                            children: [
                              (0, a.jsx)("p", {
                                className:
                                  "text-xs font-normal leading-[10px] text-slate-800",
                                children: "Customize your text",
                              }),
                              (0, a.jsx)(o.Textarea, {
                                value: w,
                                unstyled: !0,
                                rows: 4,
                                onChange: (e) => v(e.target.value),
                                classNames: {
                                  input:
                                    "bg-black/40 w-full py-2 px-2.5 rounded !outline-none text-sm text-white font-normal border border-slate-500",
                                },
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, a.jsxs)("div", {
                        className: (0, m.default)("flex flex-col gap-2", {
                          "mt-4": k,
                        }),
                        children: [
                          (0, a.jsxs)("div", {
                            className: "flex gap-2",
                            children: [
                              (0, a.jsx)(r.Button, {
                                unstyled: !0,
                                className:
                                  "text-black !outline:none text-sm font-semibold bg-white hover:bg-white/90 rounded h-8 w-1/2",
                                onClick: T,
                                children: "Save Image",
                              }),
                              (0, a.jsx)(n.CopyButton, {
                                value: `https://gtr.trade/?ref=${y}`,
                                children: ({ copy: e }) =>
                                  (0, a.jsx)(r.Button, {
                                    unstyled: !0,
                                    onClick: () => {
                                      e(),
                                        g.notifications.show({
                                          color: "#00AC66",
                                          message: "Copied Successfully",
                                          position: "top-center",
                                          autoClose: 2e3,
                                          icon: (0, a.jsx)(f.IconCircleCheck, {
                                            className:
                                              "text-black bg-transparent",
                                          }),
                                        });
                                    },
                                    className:
                                      "text-black !outline:none text-sm font-semibold bg-white hover:bg-white/90 rounded h-8 w-1/2",
                                    children: "Copy Link",
                                  }),
                              }),
                            ],
                          }),
                          (0, a.jsx)(r.Button, {
                            unstyled: !0,
                            className:
                              "text-black !outline:none text-sm font-semibold bg-white hover:bg-white/90 rounded h-8 w-full",
                            onClick: () => {
                              window.open(
                                `https://x.com/intent/post?url=${encodeURIComponent(
                                  `https://gtr.trade/?ref=${y}`
                                )}&text=${encodeURIComponent(w)}`,
                                "_blank"
                              );
                            },
                            children: "Share on X",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            });
          return k
            ? (0, a.jsx)(i.Drawer, {
                opened: e,
                onClose: t,
                position: "bottom",
                size: "90%",
                title: (0, a.jsx)("p", {
                  className: "text-white text-md font-medium leading-[88%]",
                  children: "Share PnL",
                }),
                classNames: {
                  header: "!bg-[#15161C] !p-6 !pb-4",
                  body: "!p-0 bg-[#15161C]",
                  close: "!text-white hover:!bg-slate-200 hover:!text-white/60",
                  content: "!rounded-t-2xl !border-t border-[#1F2126]",
                },
                children: j,
              })
            : (0, a.jsx)(l.Modal, {
                opened: e,
                onClose: t,
                centered: !0,
                title: (0, a.jsx)("p", {
                  className: "text-white text-md font-medium leading-[88%]",
                  children: "Share PnL",
                }),
                classNames: {
                  header: "!bg-[#15161C] !p-6 !pb-4",
                  body: "!overflow-hidden !p-0 bg-[#15161C]",
                  close: "!text-white hover:!bg-slate-200 hover:!text-white/60",
                },
                styles: { content: { border: "1px solid #1F2126" } },
                size: 960,
                children: j,
              });
        },
      ],
      295374
    );
  },
  590246,
  (e) => {
    "use strict";
    let t = (0, e.i(33550).default)(
      "outline",
      "external-link",
      "ExternalLink",
      [
        [
          "path",
          {
            d: "M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6",
            key: "svg-0",
          },
        ],
        ["path", { d: "M11 13l9 -9", key: "svg-1" }],
        ["path", { d: "M15 4h5v5", key: "svg-2" }],
      ]
    );
    e.s(["IconExternalLink", () => t], 590246);
  },
  970689,
  (e) => {
    "use strict";
    var t = e.i(462815);
    let a = async ({ date: e }) =>
        (await t.default.get(`/utilities/us-economic-calendar?date=${e}`)).data,
      r = async () => (await t.default.get("/community-airdrops/")).data,
      n = async (e) => (await t.default.get(`/social/user/${e}`)).data,
      i = async (e) =>
        (await t.default.post("/user-follows/toggle", { username: e })).data,
      l = async ({
        tokenType: e,
        coin: a,
        tokenAddress: r,
        chainNetworkId: n,
        type: i = "all",
      }) => {
        let l = `?tokenType=${e}&type=${i}`;
        return (
          "ONCHAIN" === e
            ? (l += `&tokenAddress=${r}&chainNetworkId=${n}`)
            : (l += `&coin=${a}`),
          (await t.default.get(`/social/token-trades${l}`)).data.data
        );
      },
      o = async (e, a = 1) =>
        (await t.default.get(`/user-follows/followers?username=${e}&page=${a}`))
          .data,
      s = async (e, a = 1, r = !1) =>
        (
          await t.default.get(
            `/user-follows/followings?username=${e}&page=${a}`,
            { headers: { "x-skip-error-toast": r } }
          )
        ).data,
      c = async ({ address: e, chain: a, page: r = 1, limit: n = 50 }) =>
        (
          await t.default.get(
            `/social/token-holders?address=${e}&chain=${a}&page=${r}&limit=${n}`
          )
        ).data,
      d = async (e, a = !1, r = 1, n = 20) =>
        (
          await t.default.get(`/feed-thesis/${e}?page=${r}&limit=${n}`, {
            headers: { "x-skip-error-toast": a },
          })
        ).data,
      u = async ({
        tradeSource: e,
        uniqueTradeId: a,
        content: r,
        thesisId: n,
        action: i,
      }) =>
        (
          await t.default.post(`/feed-thesis/${n ? `?thesisId=${n}` : ""}`, {
            tradeSource: e,
            uniqueTradeId: a,
            content: r,
            thesisId: n,
            action: i,
          })
        ).data,
      h = async ({ botToken: e, name: a }) => {
        let r = await t.default.post(
          "/telegram-bots",
          { botToken: e, name: a },
          { headers: { "x-skip-error-toast": !0 } }
        );
        return r?.data;
      },
      m = async () => {
        let e = await t.default.get("/telegram-bots");
        return e?.data;
      },
      f = async (e) => {
        let a = await t.default.post(
          "/telegram-bots/delete",
          { botId: e },
          { headers: { "x-skip-error-toast": !0 } }
        );
        return a?.data;
      },
      g = async ({ webhookUrl: e }) => {
        let a = await t.default.post(
          "/discord-webhooks/public",
          { webhookUrl: e },
          { headers: { "x-skip-error-toast": !0 } }
        );
        return a?.data;
      },
      p = async (e) => {
        let a = await t.default.post(
          "/discord-webhooks/public/remove",
          { webhookUrl: e },
          { headers: { "x-skip-error-toast": !0 } }
        );
        return a?.data;
      };
    e.s([
      "addDiscordWebhook",
      0,
      g,
      "addTelegramBot",
      0,
      h,
      "deleteDiscordWebhook",
      0,
      p,
      "deleteTelegramBot",
      0,
      f,
      "getCommunityAirdrops",
      0,
      r,
      "getGtrTokenHolders",
      0,
      c,
      "getSocialUserProfile",
      0,
      n,
      "getTelegramBots",
      0,
      m,
      "getThesisComments",
      0,
      d,
      "getTokenTrades",
      0,
      l,
      "getUsEconomicCalendar",
      0,
      a,
      "getUserFollowers",
      0,
      o,
      "getUserFollowings",
      0,
      s,
      "saveFeedThesis",
      0,
      u,
      "toggleFollowUser",
      0,
      i,
    ]);
  },
  964890,
  (e) => {
    "use strict";
    var t = e.i(890357),
      a = e.i(974010),
      r = e.i(346944);
    e.s([
      "useExchangePrice",
      0,
      () => {
        let { selectedCurrency: e, exchangeRates: n } = (0, t.useExchangeStore)(
          (0, r.useShallow)((e) => ({
            selectedCurrency: e.selectedCurrency,
            exchangeRates: e.exchangeRates,
          }))
        );
        return {
          formatPrice: (t, r = !0, i = !0) => {
            if ("usd" !== e) {
              let l = i ? (0, a.formatIntlNumber)(t * n[e]) : t * n[e];
              return r ? `${(0, a.exchangeSymbol)(e)}${l}` : l;
            }
            return r ? `$${t}` : t?.toString();
          },
          selectedCurrency: e,
          exchangeRates: n,
        };
      },
    ]);
  },
  785642,
  (e) => {
    "use strict";
    let t = (0, e.i(33550).default)("outline", "circle-check", "CircleCheck", [
      [
        "path",
        { d: "M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0", key: "svg-0" },
      ],
      ["path", { d: "M9 12l2 2l4 -4", key: "svg-1" }],
    ]);
    e.s(["IconCircleCheck", () => t], 785642);
  },
  646563,
  (e) => {
    "use strict";
    var t = e.i(843476),
      a = e.i(751937),
      r = e.i(446614);
    e.i(271645);
    var n = e.i(594805),
      i = e.i(424848),
      l = e.i(143798);
    e.i(207670);
    var o = e.i(515259),
      s = e.i(835783),
      c = e.i(912761),
      d = e.i(789549),
      u = e.i(314037),
      h = e.i(644662),
      m = e.i(321879);
    let [f, g] = (0, e.i(384660).createSafeContext)(
      "Tabs component was not found in the tree"
    );
    var p = {
      root: "m_89d60db1",
      "list--default": "m_576c9d4",
      list: "m_89d33d6d",
      tab: "m_4ec4dce6",
      panel: "m_b0c91715",
      tabSection: "m_fc420b1f",
      tabLabel: "m_42bbd1ae",
      "tab--default": "m_539e827b",
      "list--outline": "m_6772fbd5",
      "tab--outline": "m_b59ab47c",
      "tab--pills": "m_c3381914",
    };
    let x = (0, m.factory)((e, a) => {
      let r = (0, d.useProps)("TabsList", null, e),
        {
          children: n,
          className: i,
          grow: l,
          justify: o,
          classNames: s,
          styles: c,
          style: u,
          mod: m,
          ...f
        } = r,
        p = g();
      return (0, t.jsx)(h.Box, {
        ...f,
        ...p.getStyles("list", {
          className: i,
          style: u,
          classNames: s,
          styles: c,
          props: r,
          variant: p.variant,
        }),
        ref: a,
        role: "tablist",
        variant: p.variant,
        mod: [
          {
            grow: l,
            orientation: p.orientation,
            placement: "vertical" === p.orientation && p.placement,
            inverted: p.inverted,
          },
          m,
        ],
        "aria-orientation": p.orientation,
        __vars: { "--tabs-justify": o },
        children: n,
      });
    });
    (x.classes = p), (x.displayName = "@mantine/core/TabsList");
    let b = (0, m.factory)((e, a) => {
      let r = (0, d.useProps)("TabsPanel", null, e),
        {
          children: n,
          className: i,
          value: l,
          classNames: o,
          styles: s,
          style: c,
          mod: u,
          keepMounted: m,
          ...f
        } = r,
        p = g(),
        x = p.value === l,
        b = p.keepMounted || m || x ? n : null;
      return (0, t.jsx)(h.Box, {
        ...p.getStyles("panel", {
          className: i,
          classNames: o,
          styles: s,
          style: [c, x ? void 0 : { display: "none" }],
          props: r,
        }),
        ref: a,
        mod: [{ orientation: p.orientation }, u],
        role: "tabpanel",
        id: p.getPanelId(l),
        "aria-labelledby": p.getTabId(l),
        ...f,
        children: b,
      });
    });
    (b.classes = p), (b.displayName = "@mantine/core/TabsPanel");
    var y = e.i(128410),
      w = e.i(522442),
      v = e.i(917303),
      S = e.i(825436);
    let N = (0, m.factory)((e, a) => {
      let r = (0, d.useProps)("TabsTab", null, e),
        {
          className: n,
          children: i,
          rightSection: l,
          leftSection: s,
          value: c,
          onClick: u,
          onKeyDown: h,
          disabled: m,
          color: f,
          style: p,
          classNames: x,
          styles: b,
          vars: N,
          mod: C,
          tabIndex: T,
          ...k
        } = r,
        j = (0, w.useMantineTheme)(),
        { dir: P } = (0, v.useDirection)(),
        E = g(),
        R = c === E.value,
        $ = { classNames: x, styles: b, props: r };
      return (0, t.jsxs)(S.UnstyledButton, {
        ...E.getStyles("tab", {
          className: n,
          style: p,
          variant: E.variant,
          ...$,
        }),
        disabled: m,
        unstyled: E.unstyled,
        variant: E.variant,
        mod: [
          {
            active: R,
            disabled: m,
            orientation: E.orientation,
            inverted: E.inverted,
            placement: "vertical" === E.orientation && E.placement,
          },
          C,
        ],
        ref: a,
        role: "tab",
        id: E.getTabId(c),
        "aria-selected": R,
        tabIndex: void 0 !== T ? T : R || null === E.value ? 0 : -1,
        "aria-controls": E.getPanelId(c),
        onClick: (e) => {
          E.onChange(E.allowTabDeactivation && c === E.value ? null : c),
            u?.(e);
        },
        __vars: { "--tabs-color": f ? (0, o.getThemeColor)(f, j) : void 0 },
        onKeyDown: (0, y.createScopedKeydownHandler)({
          siblingSelector: '[role="tab"]',
          parentSelector: '[role="tablist"]',
          activateOnFocus: E.activateTabWithKeyboard,
          loop: E.loop,
          orientation: E.orientation || "horizontal",
          dir: P,
          onKeyDown: h,
        }),
        ...k,
        children: [
          s &&
            (0, t.jsx)("span", {
              ...E.getStyles("tabSection", $),
              "data-position": "left",
              children: s,
            }),
          i &&
            (0, t.jsx)("span", { ...E.getStyles("tabLabel", $), children: i }),
          l &&
            (0, t.jsx)("span", {
              ...E.getStyles("tabSection", $),
              "data-position": "right",
              children: l,
            }),
        ],
      });
    });
    (N.classes = p), (N.displayName = "@mantine/core/TabsTab");
    let C =
        "Tabs.Tab or Tabs.Panel component was rendered with invalid value or without value",
      T = {
        keepMounted: !0,
        orientation: "horizontal",
        loop: !0,
        activateTabWithKeyboard: !0,
        variant: "default",
        placement: "left",
      },
      k = (0, l.createVarsResolver)(
        (e, { radius: t, color: a, autoContrast: r }) => ({
          root: {
            "--tabs-radius": (0, i.getRadius)(t),
            "--tabs-color": (0, o.getThemeColor)(a, e),
            "--tabs-text-color": (0, c.getAutoContrastValue)(r, e)
              ? (0, s.getContrastColor)({ color: a, theme: e, autoContrast: r })
              : void 0,
          },
        })
      ),
      j = (0, m.factory)((e, i) => {
        let l = (0, d.useProps)("Tabs", T, e),
          {
            defaultValue: o,
            value: s,
            onChange: c,
            orientation: m,
            children: g,
            loop: x,
            id: b,
            activateTabWithKeyboard: y,
            allowTabDeactivation: w,
            variant: v,
            color: S,
            radius: N,
            inverted: j,
            placement: P,
            keepMounted: E,
            classNames: R,
            styles: $,
            unstyled: I,
            className: L,
            style: F,
            vars: M,
            autoContrast: z,
            mod: A,
            attributes: _,
            ...D
          } = l,
          H = (0, a.useId)(b),
          [O, B] = (0, r.useUncontrolled)({
            value: s,
            defaultValue: o,
            finalValue: null,
            onChange: c,
          }),
          U = (0, u.useStyles)({
            name: "Tabs",
            props: l,
            classes: p,
            className: L,
            style: F,
            classNames: R,
            styles: $,
            unstyled: I,
            attributes: _,
            vars: M,
            varsResolver: k,
          });
        return (0, t.jsx)(f, {
          value: {
            placement: P,
            value: O,
            orientation: m,
            id: H,
            loop: x,
            activateTabWithKeyboard: y,
            getTabId: (0, n.getSafeId)(`${H}-tab`, C),
            getPanelId: (0, n.getSafeId)(`${H}-panel`, C),
            onChange: B,
            allowTabDeactivation: w,
            variant: v,
            color: S,
            radius: N,
            inverted: j,
            keepMounted: E,
            unstyled: I,
            getStyles: U,
          },
          children: (0, t.jsx)(h.Box, {
            ref: i,
            id: H,
            variant: v,
            mod: [
              {
                orientation: m,
                inverted: "horizontal" === m && j,
                placement: "vertical" === m && P,
              },
              A,
            ],
            ...U("root"),
            ...D,
            children: g,
          }),
        });
      });
    (j.classes = p),
      (j.displayName = "@mantine/core/Tabs"),
      (j.Tab = N),
      (j.Panel = b),
      (j.List = x),
      e.s(["Tabs", () => j], 646563);
  },
  559516,
  612404,
  (e) => {
    "use strict";
    let t = (0, e.i(33550).default)("outline", "pencil-plus", "PencilPlus", [
      [
        "path",
        {
          d: "M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",
          key: "svg-0",
        },
      ],
      ["path", { d: "M13.5 6.5l4 4", key: "svg-1" }],
      ["path", { d: "M16 19h6", key: "svg-2" }],
      ["path", { d: "M19 16v6", key: "svg-3" }],
    ]);
    e.s(["IconPencilPlus", () => t], 559516),
      e.s(
        [
          "getDexKey",
          0,
          (e) => {
            if (e?.includes(":")) return e.split(":")[0];
          },
          "getTokenName",
          0,
          (e) =>
            e ? (e.includes(":") ? e.split(":")[1] || void 0 : e) : void 0,
          "isHIP3Token",
          0,
          (e) => e?.includes(":"),
        ],
        612404
      );
  },
  270112,
  (e) => {
    "use strict";
    e.s([
      "ALLOW_REMOVE_MARGIN",
      0,
      !1,
      "ALLOW_UPDATE_LEVERAGE",
      0,
      !0,
      "IS_CONNECT_TWITTER_REQUIRED_FOR_FEEDS",
      0,
      !0,
    ]);
  },
  398949,
  (e) => {
    "use strict";
    var t = e.i(843476),
      a = e.i(271645),
      r = e.i(734616),
      n = e.i(729895),
      i = e.i(533372),
      l = e.i(553917),
      o = e.i(559516),
      s = e.i(970689),
      c = e.i(890357),
      d = e.i(346944),
      u = e.i(343794),
      h = e.i(974010),
      m = e.i(127615),
      f = e.i(612404),
      g = e.i(836733),
      p = e.i(541473),
      x = e.i(898215),
      b = e.i(720594),
      y = e.i(270112);
    e.s(
      [
        "default",
        0,
        ({
          opened: e,
          onClose: w,
          token: v,
          isLong: S,
          onSaveSuccess: N,
          tradeSource: C,
          pnl: T,
          pnlPercentage: k,
          entryPrice: j,
          uniqueTradeId: P,
        }) => {
          let [E, R] = (0, a.useState)(""),
            [$, I] = (0, a.useState)(!1),
            [L, F] = (0, a.useState)(v?.thesis?.thesisId),
            { profileData: M } = (0, c.useProfileStore)(
              (0, d.useShallow)((e) => ({ profileData: e.profileData }))
            );
          (0, a.useEffect)(() => {
            v?.thesis?.content
              ? (R(
                  v?.thesis?.content ||
                    ("string" == typeof v?.thesis ? v.thesis : "")
                ),
                F(v?.thesis?.thesisId))
              : (async () => {
                  let e = P || v?.uniqueId || v?.id || v?.tradeID;
                  if (e)
                    try {
                      let { data: t } = await (0, s.getThesisComments)(e, !0);
                      t?.content && (R(t?.content), F(t?.thesisId || t?._id));
                    } catch (e) {
                      console.error("Error fetching comments for uniqueId:", e);
                    }
                })();
          }, [v?.thesis, P, v?.uniqueId, v?.id, v?.tradeID]);
          let z = "RWA_PERPS" === C,
            A = "CRYPTO_PERPS" === C,
            _ = "SPOT" === C,
            D = void 0 !== T ? T : Number(v?.gains) || 0,
            H = void 0 !== k ? k : Number(v?.gainsPercentage) || 0,
            O = _ || A || z ? 1e-4 > Math.abs(H) : 0.01 > Math.abs(D),
            B = _ || A || z ? H > 0 : D >= 0.01,
            U = (() => {
              let { authenticated: e, user: t } = (0, p.usePrivy)(),
                r = !!t?.linkedAccounts?.find(
                  (e) => "twitter_oauth" === e.type
                ),
                { login: n } = (0, x.useLogin)({
                  onError: (e) => {
                    console.log("Login modal closed or error:", e);
                  },
                }),
                { openTwitterModal: i } = (0, b.useUIStore)();
              return (0, a.useCallback)(
                (t) =>
                  (...a) =>
                    e
                      ? y.IS_CONNECT_TWITTER_REQUIRED_FOR_FEEDS && !r
                        ? void i()
                        : t(...a)
                      : void n({ loginMethods: ["email"] }),
                [e, r, n, i]
              );
            })(),
            W = v?.status || (v?.direction === "CLOSE" ? "Closed" : "Open"),
            V = () => {
              R(""), w();
            },
            q = async () => {
              if (!E.trim()) return;
              let e = Date.now().toString();
              I(!0);
              try {
                (0, m.hlTradeNotifications)({
                  notificationId: e,
                  title: "Saving Post..",
                  showProgress: !1,
                  autoClose: !1,
                  loading: !0,
                  showContent: !1,
                });
                let t = await (0, s.saveFeedThesis)({
                  tradeSource: C || "ONCHAIN",
                  uniqueTradeId: P || v?.uniqueId || v?.id || v?.tradeID,
                  content: E.trim(),
                  thesisId: L || v?.thesis?.thesisId,
                  action: L ? "update" : "create",
                });
                t.success
                  ? ((0, m.hlTradeNotifications)({
                      title: "Post saved successfully! 🚀",
                      showProgress: !0,
                      isError: !1,
                      autoClose: !0,
                      showContent: !1,
                    }),
                    R(""),
                    N?.(),
                    V())
                  : (0, m.hlTradeNotifications)({
                      title:
                        t?.data?.msg ||
                        "Failed to save post. Please try again.",
                      isError: !0,
                      showProgress: !1,
                      autoClose: !0,
                      showContent: !1,
                    });
              } catch (e) {
                console.log(e),
                  (0, m.hlTradeNotifications)({
                    title: "Failed to save post. Please try again.",
                    isError: !0,
                    showProgress: !1,
                    autoClose: !0,
                    showContent: !1,
                  });
              } finally {
                I(!1), l.notifications.hide(e);
              }
            };
          return (0, t.jsx)(g.default, {
            opened: e,
            onClose: V,
            title: (0, t.jsxs)("div", {
              className: "flex items-center gap-2",
              children: [
                (0, t.jsx)(o.IconPencilPlus, {
                  size: 18,
                  className: "text-white",
                }),
                (0, t.jsx)("span", { children: "Post Trade" }),
              ],
            }),
            size: "lg",
            centered: !0,
            drawerHeight: "58%",
            useDrawerOnMobile: !0,
            content: (0, t.jsx)("div", {
              className: "flex flex-col",
              children: (0, t.jsxs)("div", {
                className: "p-6 flex flex-col gap-6",
                children: [
                  (0, t.jsxs)("div", {
                    className: "flex flex-col gap-2",
                    children: [
                      (0, t.jsx)("div", {
                        className: (0, u.default)(
                          "flex flex-col bg-[#0F1218] border rounded-[14px] p-4 min-h-[140px] transition-all duration-200",
                          "focus-within:border-white/[0.18] border-white/10"
                        ),
                        children: (0, t.jsx)(n.Textarea, {
                          placeholder: "What's your thesis for this trade?",
                          minRows: 4,
                          maxRows: 10,
                          autosize: !0,
                          variant: "unstyled",
                          value: E,
                          onChange: (e) => R(e.target.value),
                          className: "w-full",
                          classNames: {
                            input:
                              "!bg-transparent !text-[15px] !leading-[1.6] !text-white !p-0 placeholder:!text-white/40",
                          },
                          autoFocus: !0,
                        }),
                      }),
                      (0, t.jsx)("div", {
                        className: "flex justify-end",
                        children: (0, t.jsxs)("span", {
                          className: (0, u.default)(
                            "text-[12px] font-medium transition-colors",
                            E.length > 300
                              ? "text-short-text"
                              : "text-neutral-500"
                          ),
                          children: [E.length, " / ", 300],
                        }),
                      }),
                    ],
                  }),
                  (0, t.jsxs)("div", {
                    className:
                      "flex items-center justify-between p-3.5 bg-white/[0.02] rounded-[14px] border border-white/[0.06]",
                    children: [
                      (0, t.jsxs)("div", {
                        className: "flex items-center gap-3 min-w-0",
                        children: [
                          (0, t.jsx)("div", {
                            className: "relative shrink-0",
                            children: (0, t.jsx)(r.Avatar, {
                              src: z
                                ? (0, h.getIconUri)(
                                    v?.pair?.from ||
                                      v?.tokenSymbol?.split("/")?.[0],
                                    "rwa-perps"
                                  )
                                : A
                                ? (0, h.getIconUri)(
                                    v?.symbol || v?.coin || v?.tokenSymbol,
                                    "perps"
                                  )
                                : v?.image ||
                                  v?.logoURI ||
                                  v?.icon ||
                                  (0, h.getIconUri)(
                                    v?.symbol || v?.tokenSymbol,
                                    "spot"
                                  ),
                              name: z
                                ? v?.pair?.from ||
                                  v?.tokenSymbol?.split("/")?.[0]
                                : A
                                ? v?.symbol || v?.coin || v?.tokenSymbol
                                : v?.symbol || v?.tokenSymbol,
                              radius: "xl",
                              size: 32,
                              className: "border border-white/5",
                            }),
                          }),
                          (0, t.jsxs)("div", {
                            className: "flex flex-col gap-1 min-w-0",
                            children: [
                              (0, t.jsxs)("div", {
                                className: "flex items-center gap-1 flex-wrap",
                                children: [
                                  (0, t.jsx)("span", {
                                    className:
                                      "text-sm font-medium text-white tracking-tight truncate max-w-[120px]",
                                    children: z
                                      ? v?.pair
                                        ? `${v?.pair?.from}/${v?.pair?.to}`
                                        : v?.tokenSymbol
                                      : (0, f.getTokenName)(
                                          v?.tokenSymbol ||
                                            v?.symbol ||
                                            v?.coin ||
                                            v?.name
                                        ),
                                  }),
                                  (0, f.isHIP3Token)(
                                    v?.tokenSymbol ||
                                      v?.symbol ||
                                      v?.coin ||
                                      v?.name
                                  ) &&
                                    (0, t.jsx)("div", {
                                      className:
                                        "flex items-center px-1 pb-px pt-0.5 rounded-[2px] text-[10px] font-black bg-[#2861FF]/10 text-[#2861FF] border border-[#2861FF]/20 leading-none shrink-0",
                                      children:
                                        (0, f.getDexKey)(
                                          v?.tokenSymbol ||
                                            v?.symbol ||
                                            v?.coin ||
                                            v?.name
                                        ) || "",
                                    }),
                                  (z || "CRYPTO_PERPS" === C) &&
                                    (0, t.jsx)("span", {
                                      className: (0, u.default)(
                                        "text-[12px] font-medium capitalize shrink-0",
                                        S ? "text-long-text" : "text-short-text"
                                      ),
                                      children: S ? "Long" : "Short",
                                    }),
                                ],
                              }),
                              (0, t.jsxs)("div", {
                                className: "flex items-center gap-2",
                                children: [
                                  (0, t.jsxs)("span", {
                                    className:
                                      "text-[12px] font-normal text-neutral-500 leading-none",
                                    children: [
                                      _ ? "Avg Price" : "Entry",
                                      " ",
                                      (0, h.convertIntlV2)(
                                        void 0 !== j
                                          ? j
                                          : v?.price ||
                                              v?.entryPrice ||
                                              v?.averageBuyPrice,
                                        !0
                                      ),
                                    ],
                                  }),
                                  (v?.orderValue || v?.size) &&
                                    (0, t.jsx)("span", {
                                      className:
                                        "text-neutral-700 leading-none",
                                      children: "•",
                                    }),
                                  (0, t.jsx)("span", {
                                    className: (0, u.default)(
                                      "text-[12px] font-medium leading-none",
                                      "Open" === W
                                        ? "text-long-text"
                                        : "text-neutral-500"
                                    ),
                                    children:
                                      v?.orderValue !== void 0
                                        ? (0, h.convertIntl)(v.orderValue, !0)
                                        : v?.size !== void 0
                                        ? (0, h.formatBigNumber)(v.size)
                                        : "",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, t.jsxs)("div", {
                        className:
                          "flex flex-col items-end gap-0.5 shrink-0 ml-4",
                        children: [
                          (0, t.jsxs)("span", {
                            className: (0, u.default)(
                              "text-[13px] font-medium",
                              O
                                ? "text-neutral-500"
                                : B
                                ? "text-long-text"
                                : "text-short-text"
                            ),
                            children: [
                              B && !O ? "+" : "",
                              (0, h.convertIntlV2)(D, !0, !0, 2),
                            ],
                          }),
                          (0, t.jsxs)("span", {
                            className: (0, u.default)(
                              "text-[12px] font-normal",
                              O
                                ? "text-neutral-500"
                                : B
                                ? "text-long-text"
                                : "text-short-text"
                            ),
                            children: [
                              B && !O ? "+" : "",
                              Math.abs(H)?.toFixed(2),
                              "%",
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, t.jsxs)("div", {
                    className:
                      "flex items-center justify-between mt-2 pt-3 border-t border-white/5",
                    children: [
                      (0, t.jsx)("button", {
                        onClick: V,
                        className:
                          "text-[14px] font-medium text-neutral-400 hover:text-white transition-colors bg-transparent border-none cursor-pointer p-0",
                        children: "Cancel",
                      }),
                      (0, t.jsx)(i.Button, {
                        radius: "xl",
                        size: "md",
                        loading: $,
                        disabled: !E.trim() || E.length > 300,
                        onClick: U(q),
                        className: (0, u.default)(
                          "!bg-[#3B82F6] hover:!bg-[#2563EB] !font-medium !px-8 !h-10 transition-all !text-white",
                          (!E.trim() || E.length > 300) && "!opacity-40"
                        ),
                        children: "Post",
                      }),
                    ],
                  }),
                ],
              }),
            }),
          });
        },
      ],
      398949
    );
  },
  40658,
  (e) => {
    "use strict";
    var t = e.i(843476),
      a = e.i(646563),
      r = e.i(343794);
    e.s([
      "default",
      0,
      ({ value: e, currentTab: n, title: i, disabled: l = !1 }) =>
        (0, t.jsx)(a.Tabs.Tab, {
          value: e,
          disabled: l,
          className:
            n === e
              ? "!bg-container-background !hover:bg-container-background text-white font-medium"
              : "!bg-container-background !hover:bg-container-background !border-container-background text-neutral-400 !font-normal",
          children: (0, t.jsx)("span", {
            className: (0, r.default)("!text-sm ", {
              "font-medium": n === e,
              "!font-normal": n !== e,
            }),
            children: i,
          }),
        }),
    ]);
  },
]);
