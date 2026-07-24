(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  488143,
  (e, t, r) => {
    "use strict";
    function o({
      widthInt: e,
      heightInt: t,
      blurWidth: r,
      blurHeight: o,
      blurDataURL: n,
      objectFit: i,
    }) {
      let a = r ? 40 * r : e,
        s = o ? 40 * o : t,
        l = a && s ? `viewBox='0 0 ${a} ${s}'` : "";
      return `%3Csvg xmlns='http://www.w3.org/2000/svg' ${l}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${
        l
          ? "none"
          : "contain" === i
          ? "xMidYMid"
          : "cover" === i
          ? "xMidYMid slice"
          : "none"
      }' style='filter: url(%23b);' href='${n}'/%3E%3C/svg%3E`;
    }
    Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "getImageBlurSvg", {
        enumerable: !0,
        get: function () {
          return o;
        },
      });
  },
  987690,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 });
    var o = {
      VALID_LOADERS: function () {
        return i;
      },
      imageConfigDefault: function () {
        return a;
      },
    };
    for (var n in o) Object.defineProperty(r, n, { enumerable: !0, get: o[n] });
    let i = ["default", "imgix", "cloudinary", "akamai", "custom"],
      a = {
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [32, 48, 64, 96, 128, 256, 384],
        path: "/_next/image",
        loader: "default",
        loaderFile: "",
        domains: [],
        disableStaticImages: !1,
        minimumCacheTTL: 14400,
        formats: ["image/webp"],
        maximumRedirects: 3,
        dangerouslyAllowLocalIP: !1,
        dangerouslyAllowSVG: !1,
        contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;",
        contentDispositionType: "attachment",
        localPatterns: void 0,
        remotePatterns: [],
        qualities: [75],
        unoptimized: !1,
      };
  },
  908927,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "getImgProps", {
        enumerable: !0,
        get: function () {
          return l;
        },
      }),
      e.r(233525);
    let o = e.r(488143),
      n = e.r(987690),
      i = ["-moz-initial", "fill", "none", "scale-down", void 0];
    function a(e) {
      return void 0 !== e.default;
    }
    function s(e) {
      return void 0 === e
        ? e
        : "number" == typeof e
        ? Number.isFinite(e)
          ? e
          : NaN
        : "string" == typeof e && /^[0-9]+$/.test(e)
        ? parseInt(e, 10)
        : NaN;
    }
    function l(
      {
        src: e,
        sizes: t,
        unoptimized: r = !1,
        priority: l = !1,
        preload: c = !1,
        loading: u,
        className: d,
        quality: f,
        width: p,
        height: m,
        fill: g = !1,
        style: y,
        overrideSrc: h,
        onLoad: b,
        onLoadingComplete: v,
        placeholder: w = "empty",
        blurDataURL: x,
        fetchPriority: _,
        decoding: P = "async",
        layout: j,
        objectFit: S,
        objectPosition: O,
        lazyBoundary: R,
        lazyRoot: E,
        ...C
      },
      z
    ) {
      var M;
      let B,
        k,
        N,
        { imgConf: L, showAltText: T, blurComplete: I, defaultLoader: $ } = z,
        F = L || n.imageConfigDefault;
      if ("allSizes" in F) B = F;
      else {
        let e = [...F.deviceSizes, ...F.imageSizes].sort((e, t) => e - t),
          t = F.deviceSizes.sort((e, t) => e - t),
          r = F.qualities?.sort((e, t) => e - t);
        B = { ...F, allSizes: e, deviceSizes: t, qualities: r };
      }
      if (void 0 === $)
        throw Object.defineProperty(
          Error(
            "images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"
          ),
          "__NEXT_ERROR_CODE",
          { value: "E163", enumerable: !1, configurable: !0 }
        );
      let D = C.loader || $;
      delete C.loader, delete C.srcSet;
      let A = "__next_img_default" in D;
      if (A) {
        if ("custom" === B.loader)
          throw Object.defineProperty(
            Error(`Image with src "${e}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`),
            "__NEXT_ERROR_CODE",
            { value: "E252", enumerable: !1, configurable: !0 }
          );
      } else {
        let e = D;
        D = (t) => {
          let { config: r, ...o } = t;
          return e(o);
        };
      }
      if (j) {
        "fill" === j && (g = !0);
        let e = {
          intrinsic: { maxWidth: "100%", height: "auto" },
          responsive: { width: "100%", height: "auto" },
        }[j];
        e && (y = { ...y, ...e });
        let r = { responsive: "100vw", fill: "100vw" }[j];
        r && !t && (t = r);
      }
      let Y = "",
        U = s(p),
        G = s(m);
      if ((M = e) && "object" == typeof M && (a(M) || void 0 !== M.src)) {
        let t = a(e) ? e.default : e;
        if (!t.src)
          throw Object.defineProperty(
            Error(
              `An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(
                t
              )}`
            ),
            "__NEXT_ERROR_CODE",
            { value: "E460", enumerable: !1, configurable: !0 }
          );
        if (!t.height || !t.width)
          throw Object.defineProperty(
            Error(
              `An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(
                t
              )}`
            ),
            "__NEXT_ERROR_CODE",
            { value: "E48", enumerable: !1, configurable: !0 }
          );
        if (
          ((k = t.blurWidth),
          (N = t.blurHeight),
          (x = x || t.blurDataURL),
          (Y = t.src),
          !g)
        )
          if (U || G) {
            if (U && !G) {
              let e = U / t.width;
              G = Math.round(t.height * e);
            } else if (!U && G) {
              let e = G / t.height;
              U = Math.round(t.width * e);
            }
          } else (U = t.width), (G = t.height);
      }
      let X = !l && !c && ("lazy" === u || void 0 === u);
      (!(e = "string" == typeof e ? e : Y) ||
        e.startsWith("data:") ||
        e.startsWith("blob:")) &&
        ((r = !0), (X = !1)),
        B.unoptimized && (r = !0),
        A &&
          !B.dangerouslyAllowSVG &&
          e.split("?", 1)[0].endsWith(".svg") &&
          (r = !0);
      let q = s(f),
        V = Object.assign(
          g
            ? {
                position: "absolute",
                height: "100%",
                width: "100%",
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                objectFit: S,
                objectPosition: O,
              }
            : {},
          T ? {} : { color: "transparent" },
          y
        ),
        W =
          I || "empty" === w
            ? null
            : "blur" === w
            ? `url("data:image/svg+xml;charset=utf-8,${(0, o.getImageBlurSvg)({
                widthInt: U,
                heightInt: G,
                blurWidth: k,
                blurHeight: N,
                blurDataURL: x || "",
                objectFit: V.objectFit,
              })}")`
            : `url("${w}")`,
        H = i.includes(V.objectFit)
          ? "fill" === V.objectFit
            ? "100% 100%"
            : "cover"
          : V.objectFit,
        Q = W
          ? {
              backgroundSize: H,
              backgroundPosition: V.objectPosition || "50% 50%",
              backgroundRepeat: "no-repeat",
              backgroundImage: W,
            }
          : {},
        J = (function ({
          config: e,
          src: t,
          unoptimized: r,
          width: o,
          quality: n,
          sizes: i,
          loader: a,
        }) {
          if (r) return { src: t, srcSet: void 0, sizes: void 0 };
          let { widths: s, kind: l } = (function (
              { deviceSizes: e, allSizes: t },
              r,
              o
            ) {
              if (o) {
                let r = /(^|\s)(1?\d?\d)vw/g,
                  n = [];
                for (let e; (e = r.exec(o)); ) n.push(parseInt(e[2]));
                if (n.length) {
                  let r = 0.01 * Math.min(...n);
                  return { widths: t.filter((t) => t >= e[0] * r), kind: "w" };
                }
                return { widths: t, kind: "w" };
              }
              return "number" != typeof r
                ? { widths: e, kind: "w" }
                : {
                    widths: [
                      ...new Set(
                        [r, 2 * r].map(
                          (e) => t.find((t) => t >= e) || t[t.length - 1]
                        )
                      ),
                    ],
                    kind: "x",
                  };
            })(e, o, i),
            c = s.length - 1;
          return {
            sizes: i || "w" !== l ? i : "100vw",
            srcSet: s
              .map(
                (r, o) =>
                  `${a({ config: e, src: t, quality: n, width: r })} ${
                    "w" === l ? r : o + 1
                  }${l}`
              )
              .join(", "),
            src: a({ config: e, src: t, quality: n, width: s[c] }),
          };
        })({
          config: B,
          src: e,
          unoptimized: r,
          width: U,
          quality: q,
          sizes: t,
          loader: D,
        }),
        K = X ? "lazy" : u;
      return {
        props: {
          ...C,
          loading: K,
          fetchPriority: _,
          width: U,
          height: G,
          decoding: P,
          className: d,
          style: { ...V, ...Q },
          sizes: J.sizes,
          srcSet: J.srcSet,
          src: h || J.src,
        },
        meta: { unoptimized: r, preload: c || l, placeholder: w, fill: g },
      };
    }
  },
  898879,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "default", {
        enumerable: !0,
        get: function () {
          return s;
        },
      });
    let o = e.r(271645),
      n = "undefined" == typeof window,
      i = n ? () => {} : o.useLayoutEffect,
      a = n ? () => {} : o.useEffect;
    function s(e) {
      let { headManager: t, reduceComponentsToState: r } = e;
      function s() {
        if (t && t.mountedInstances) {
          let e = o.Children.toArray(
            Array.from(t.mountedInstances).filter(Boolean)
          );
          t.updateHead(r(e));
        }
      }
      return (
        n && (t?.mountedInstances?.add(e.children), s()),
        i(
          () => (
            t?.mountedInstances?.add(e.children),
            () => {
              t?.mountedInstances?.delete(e.children);
            }
          )
        ),
        i(
          () => (
            t && (t._pendingUpdate = s),
            () => {
              t && (t._pendingUpdate = s);
            }
          )
        ),
        a(
          () => (
            t &&
              t._pendingUpdate &&
              (t._pendingUpdate(), (t._pendingUpdate = null)),
            () => {
              t &&
                t._pendingUpdate &&
                (t._pendingUpdate(), (t._pendingUpdate = null));
            }
          )
        ),
        null
      );
    }
  },
  325633,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 });
    var o = {
      default: function () {
        return g;
      },
      defaultHead: function () {
        return d;
      },
    };
    for (var n in o) Object.defineProperty(r, n, { enumerable: !0, get: o[n] });
    let i = e.r(563141),
      a = e.r(151836),
      s = e.r(843476),
      l = a._(e.r(271645)),
      c = i._(e.r(898879)),
      u = e.r(742732);
    function d() {
      return [
        (0, s.jsx)("meta", { charSet: "utf-8" }, "charset"),
        (0, s.jsx)(
          "meta",
          { name: "viewport", content: "width=device-width" },
          "viewport"
        ),
      ];
    }
    function f(e, t) {
      return "string" == typeof t || "number" == typeof t
        ? e
        : t.type === l.default.Fragment
        ? e.concat(
            l.default.Children.toArray(t.props.children).reduce(
              (e, t) =>
                "string" == typeof t || "number" == typeof t ? e : e.concat(t),
              []
            )
          )
        : e.concat(t);
    }
    e.r(233525);
    let p = ["name", "httpEquiv", "charSet", "itemProp"];
    function m(e) {
      let t, r, o, n;
      return e
        .reduce(f, [])
        .reverse()
        .concat(d().reverse())
        .filter(
          ((t = new Set()),
          (r = new Set()),
          (o = new Set()),
          (n = {}),
          (e) => {
            let i = !0,
              a = !1;
            if (e.key && "number" != typeof e.key && e.key.indexOf("$") > 0) {
              a = !0;
              let r = e.key.slice(e.key.indexOf("$") + 1);
              t.has(r) ? (i = !1) : t.add(r);
            }
            switch (e.type) {
              case "title":
              case "base":
                r.has(e.type) ? (i = !1) : r.add(e.type);
                break;
              case "meta":
                for (let t = 0, r = p.length; t < r; t++) {
                  let r = p[t];
                  if (e.props.hasOwnProperty(r))
                    if ("charSet" === r) o.has(r) ? (i = !1) : o.add(r);
                    else {
                      let t = e.props[r],
                        o = n[r] || new Set();
                      ("name" !== r || !a) && o.has(t)
                        ? (i = !1)
                        : (o.add(t), (n[r] = o));
                    }
                }
            }
            return i;
          })
        )
        .reverse()
        .map((e, t) => {
          let r = e.key || t;
          return l.default.cloneElement(e, { key: r });
        });
    }
    let g = function ({ children: e }) {
      let t = (0, l.useContext)(u.HeadManagerContext);
      return (0, s.jsx)(c.default, {
        reduceComponentsToState: m,
        headManager: t,
        children: e,
      });
    };
    ("function" == typeof r.default ||
      ("object" == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, "__esModule", { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  918556,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "ImageConfigContext", {
        enumerable: !0,
        get: function () {
          return i;
        },
      });
    let o = e.r(563141)._(e.r(271645)),
      n = e.r(987690),
      i = o.default.createContext(n.imageConfigDefault);
  },
  670965,
  (e, t, r) => {
    "use strict";
    function o(e, t) {
      let r = e || 75;
      return t?.qualities?.length
        ? t.qualities.reduce(
            (e, t) => (Math.abs(t - r) < Math.abs(e - r) ? t : e),
            0
          )
        : r;
    }
    Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "findClosestQuality", {
        enumerable: !0,
        get: function () {
          return o;
        },
      });
  },
  1948,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "default", {
        enumerable: !0,
        get: function () {
          return i;
        },
      });
    let o = e.r(670965);
    function n({ config: e, src: t, width: r, quality: n }) {
      if (
        t.startsWith("/") &&
        t.includes("?") &&
        e.localPatterns?.length === 1 &&
        "**" === e.localPatterns[0].pathname &&
        "" === e.localPatterns[0].search
      )
        throw Object.defineProperty(
          Error(`Image with src "${t}" is using a query string which is not configured in images.localPatterns.
Read more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`),
          "__NEXT_ERROR_CODE",
          { value: "E871", enumerable: !1, configurable: !0 }
        );
      let i = (0, o.findClosestQuality)(n, e);
      return `${e.path}?url=${encodeURIComponent(t)}&w=${r}&q=${i}${
        t.startsWith("/_next/static/media/") && 1
          ? "&dpl=dpl_2ZHwP4hQB88hnQPok3Df3yCfTXLS"
          : ""
      }`;
    }
    n.__next_img_default = !0;
    let i = n;
  },
  605500,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "Image", {
        enumerable: !0,
        get: function () {
          return w;
        },
      });
    let o = e.r(563141),
      n = e.r(151836),
      i = e.r(843476),
      a = n._(e.r(271645)),
      s = o._(e.r(174080)),
      l = o._(e.r(325633)),
      c = e.r(908927),
      u = e.r(987690),
      d = e.r(918556);
    e.r(233525);
    let f = e.r(65856),
      p = o._(e.r(1948)),
      m = e.r(818581),
      g = {
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [32, 48, 64, 96, 128, 256, 384],
        qualities: [75],
        path: "/_next/image/",
        loader: "default",
        dangerouslyAllowSVG: !1,
        unoptimized: !0,
      };
    function y(e, t, r, o, n, i, a) {
      let s = e?.src;
      e &&
        e["data-loaded-src"] !== s &&
        ((e["data-loaded-src"] = s),
        ("decode" in e ? e.decode() : Promise.resolve())
          .catch(() => {})
          .then(() => {
            if (e.parentElement && e.isConnected) {
              if (("empty" !== t && n(!0), r?.current)) {
                let t = new Event("load");
                Object.defineProperty(t, "target", { writable: !1, value: e });
                let o = !1,
                  n = !1;
                r.current({
                  ...t,
                  nativeEvent: t,
                  currentTarget: e,
                  target: e,
                  isDefaultPrevented: () => o,
                  isPropagationStopped: () => n,
                  persist: () => {},
                  preventDefault: () => {
                    (o = !0), t.preventDefault();
                  },
                  stopPropagation: () => {
                    (n = !0), t.stopPropagation();
                  },
                });
              }
              o?.current && o.current(e);
            }
          }));
    }
    function h(e) {
      return a.use ? { fetchPriority: e } : { fetchpriority: e };
    }
    "undefined" == typeof window && (globalThis.__NEXT_IMAGE_IMPORTED = !0);
    let b = (0, a.forwardRef)(
      (
        {
          src: e,
          srcSet: t,
          sizes: r,
          height: o,
          width: n,
          decoding: s,
          className: l,
          style: c,
          fetchPriority: u,
          placeholder: d,
          loading: f,
          unoptimized: p,
          fill: g,
          onLoadRef: b,
          onLoadingCompleteRef: v,
          setBlurComplete: w,
          setShowAltText: x,
          sizesInput: _,
          onLoad: P,
          onError: j,
          ...S
        },
        O
      ) => {
        let R = (0, a.useCallback)(
            (e) => {
              e && (j && (e.src = e.src), e.complete && y(e, d, b, v, w, p, _));
            },
            [e, d, b, v, w, j, p, _]
          ),
          E = (0, m.useMergedRef)(O, R);
        return (0, i.jsx)("img", {
          ...S,
          ...h(u),
          loading: f,
          width: n,
          height: o,
          decoding: s,
          "data-nimg": g ? "fill" : "1",
          className: l,
          style: c,
          sizes: r,
          srcSet: t,
          src: e,
          ref: E,
          onLoad: (e) => {
            y(e.currentTarget, d, b, v, w, p, _);
          },
          onError: (e) => {
            x(!0), "empty" !== d && w(!0), j && j(e);
          },
        });
      }
    );
    function v({ isAppRouter: e, imgAttributes: t }) {
      let r = {
        as: "image",
        imageSrcSet: t.srcSet,
        imageSizes: t.sizes,
        crossOrigin: t.crossOrigin,
        referrerPolicy: t.referrerPolicy,
        ...h(t.fetchPriority),
      };
      return e && s.default.preload
        ? (s.default.preload(t.src, r), null)
        : (0, i.jsx)(l.default, {
            children: (0, i.jsx)(
              "link",
              { rel: "preload", href: t.srcSet ? void 0 : t.src, ...r },
              "__nimg-" + t.src + t.srcSet + t.sizes
            ),
          });
    }
    let w = (0, a.forwardRef)((e, t) => {
      let r = (0, a.useContext)(f.RouterContext),
        o = (0, a.useContext)(d.ImageConfigContext),
        n = (0, a.useMemo)(() => {
          let e = g || o || u.imageConfigDefault,
            t = [...e.deviceSizes, ...e.imageSizes].sort((e, t) => e - t),
            r = e.deviceSizes.sort((e, t) => e - t),
            n = e.qualities?.sort((e, t) => e - t);
          return {
            ...e,
            allSizes: t,
            deviceSizes: r,
            qualities: n,
            localPatterns:
              "undefined" == typeof window ? o?.localPatterns : e.localPatterns,
          };
        }, [o]),
        { onLoad: s, onLoadingComplete: l } = e,
        m = (0, a.useRef)(s);
      (0, a.useEffect)(() => {
        m.current = s;
      }, [s]);
      let y = (0, a.useRef)(l);
      (0, a.useEffect)(() => {
        y.current = l;
      }, [l]);
      let [h, w] = (0, a.useState)(!1),
        [x, _] = (0, a.useState)(!1),
        { props: P, meta: j } = (0, c.getImgProps)(e, {
          defaultLoader: p.default,
          imgConf: n,
          blurComplete: h,
          showAltText: x,
        });
      return (0, i.jsxs)(i.Fragment, {
        children: [
          (0, i.jsx)(b, {
            ...P,
            unoptimized: j.unoptimized,
            placeholder: j.placeholder,
            fill: j.fill,
            onLoadRef: m,
            onLoadingCompleteRef: y,
            setBlurComplete: w,
            setShowAltText: _,
            sizesInput: e.sizes,
            ref: t,
          }),
          j.preload
            ? (0, i.jsx)(v, { isAppRouter: !r, imgAttributes: P })
            : null,
        ],
      });
    });
    ("function" == typeof r.default ||
      ("object" == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, "__esModule", { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  794909,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 });
    var o = {
      default: function () {
        return u;
      },
      getImageProps: function () {
        return c;
      },
    };
    for (var n in o) Object.defineProperty(r, n, { enumerable: !0, get: o[n] });
    let i = e.r(563141),
      a = e.r(908927),
      s = e.r(605500),
      l = i._(e.r(1948));
    function c(e) {
      let { props: t } = (0, a.getImgProps)(e, {
        defaultLoader: l.default,
        imgConf: {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [32, 48, 64, 96, 128, 256, 384],
          qualities: [75],
          path: "/_next/image/",
          loader: "default",
          dangerouslyAllowSVG: !1,
          unoptimized: !0,
        },
      });
      for (let [e, r] of Object.entries(t)) void 0 === r && delete t[e];
      return { props: t };
    }
    let u = s.Image;
  },
  657688,
  (e, t, r) => {
    t.exports = e.r(794909);
  },
  533372,
  (e) => {
    "use strict";
    var t = e.i(843476),
      r = e.i(682451);
    e.i(271645);
    var o = e.i(424848),
      n = e.i(143798);
    e.i(207670);
    var i = e.i(789549),
      a = e.i(314037),
      s = e.i(644662),
      l = e.i(257942),
      c = e.i(442948),
      u = e.i(298193),
      d = e.i(825436),
      f = e.i(321879),
      p = {
        root: "m_77c9d27d",
        inner: "m_80f1301b",
        label: "m_811560b9",
        section: "m_a74036a",
        loader: "m_a25b86ee",
        group: "m_80d6d844",
        groupSection: "m_70be2a01",
      };
    let m = { orientation: "horizontal" },
      g = (0, n.createVarsResolver)((e, { borderWidth: t }) => ({
        group: { "--button-border-width": (0, r.rem)(t) },
      })),
      y = (0, f.factory)((e, r) => {
        let o = (0, i.useProps)("ButtonGroup", m, e),
          {
            className: n,
            style: l,
            classNames: c,
            styles: u,
            unstyled: d,
            orientation: f,
            vars: y,
            borderWidth: h,
            variant: b,
            mod: v,
            attributes: w,
            ...x
          } = (0, i.useProps)("ButtonGroup", m, e),
          _ = (0, a.useStyles)({
            name: "ButtonGroup",
            props: o,
            classes: p,
            className: n,
            style: l,
            classNames: c,
            styles: u,
            unstyled: d,
            attributes: w,
            vars: y,
            varsResolver: g,
            rootSelector: "group",
          });
        return (0, t.jsx)(s.Box, {
          ..._("group"),
          ref: r,
          variant: b,
          mod: [{ "data-orientation": f }, v],
          role: "group",
          ...x,
        });
      });
    (y.classes = p), (y.displayName = "@mantine/core/ButtonGroup");
    let h = (0, n.createVarsResolver)(
        (
          e,
          {
            radius: t,
            color: r,
            gradient: n,
            variant: i,
            autoContrast: a,
            size: s,
          }
        ) => {
          let l = e.variantColorResolver({
            color: r || e.primaryColor,
            theme: e,
            gradient: n,
            variant: i || "filled",
            autoContrast: a,
          });
          return {
            groupSection: {
              "--section-height": (0, o.getSize)(s, "section-height"),
              "--section-padding-x": (0, o.getSize)(s, "section-padding-x"),
              "--section-fz": s?.includes("compact")
                ? (0, o.getFontSize)(s.replace("compact-", ""))
                : (0, o.getFontSize)(s),
              "--section-radius": void 0 === t ? void 0 : (0, o.getRadius)(t),
              "--section-bg": r || i ? l.background : void 0,
              "--section-color": l.color,
              "--section-bd": r || i ? l.border : void 0,
            },
          };
        }
      ),
      b = (0, f.factory)((e, r) => {
        let o = (0, i.useProps)("ButtonGroupSection", null, e),
          {
            className: n,
            style: l,
            classNames: c,
            styles: u,
            unstyled: d,
            vars: f,
            variant: m,
            gradient: g,
            radius: y,
            autoContrast: b,
            attributes: v,
            ...w
          } = o,
          x = (0, a.useStyles)({
            name: "ButtonGroupSection",
            props: o,
            classes: p,
            className: n,
            style: l,
            classNames: c,
            styles: u,
            unstyled: d,
            attributes: v,
            vars: f,
            varsResolver: h,
            rootSelector: "groupSection",
          });
        return (0, t.jsx)(s.Box, {
          ...x("groupSection"),
          ref: r,
          variant: m,
          ...w,
        });
      });
    (b.classes = p), (b.displayName = "@mantine/core/ButtonGroupSection");
    let v = {
        in: {
          opacity: 1,
          transform: `translate(-50%, calc(-50% + ${(0, r.rem)(1)}))`,
        },
        out: { opacity: 0, transform: "translate(-50%, -200%)" },
        common: { transformOrigin: "center" },
        transitionProperty: "transform, opacity",
      },
      w = (0, n.createVarsResolver)(
        (
          e,
          {
            radius: t,
            color: r,
            gradient: n,
            variant: i,
            size: a,
            justify: s,
            autoContrast: l,
          }
        ) => {
          let c = e.variantColorResolver({
            color: r || e.primaryColor,
            theme: e,
            gradient: n,
            variant: i || "filled",
            autoContrast: l,
          });
          return {
            root: {
              "--button-justify": s,
              "--button-height": (0, o.getSize)(a, "button-height"),
              "--button-padding-x": (0, o.getSize)(a, "button-padding-x"),
              "--button-fz": a?.includes("compact")
                ? (0, o.getFontSize)(a.replace("compact-", ""))
                : (0, o.getFontSize)(a),
              "--button-radius": void 0 === t ? void 0 : (0, o.getRadius)(t),
              "--button-bg": r || i ? c.background : void 0,
              "--button-hover": r || i ? c.hover : void 0,
              "--button-color": c.color,
              "--button-bd": r || i ? c.border : void 0,
              "--button-hover-color": r || i ? c.hoverColor : void 0,
            },
          };
        }
      ),
      x = (0, l.polymorphicFactory)((e, r) => {
        let o = (0, i.useProps)("Button", null, e),
          {
            style: n,
            vars: l,
            className: f,
            color: m,
            disabled: g,
            children: y,
            leftSection: h,
            rightSection: b,
            fullWidth: x,
            variant: _,
            radius: P,
            loading: j,
            loaderProps: S,
            gradient: O,
            classNames: R,
            styles: E,
            unstyled: C,
            "data-disabled": z,
            autoContrast: M,
            mod: B,
            attributes: k,
            ...N
          } = o,
          L = (0, a.useStyles)({
            name: "Button",
            props: o,
            classes: p,
            className: f,
            style: n,
            classNames: R,
            styles: E,
            unstyled: C,
            attributes: k,
            vars: l,
            varsResolver: w,
          }),
          T = !!h,
          I = !!b;
        return (0, t.jsxs)(d.UnstyledButton, {
          ref: r,
          ...L("root", { active: !g && !j && !z }),
          unstyled: C,
          variant: _,
          disabled: g || j,
          mod: [
            {
              disabled: g || z,
              loading: j,
              block: x,
              "with-left-section": T,
              "with-right-section": I,
            },
            B,
          ],
          ...N,
          children: [
            "boolean" == typeof j &&
              (0, t.jsx)(u.Transition, {
                mounted: j,
                transition: v,
                duration: 150,
                children: (e) =>
                  (0, t.jsx)(s.Box, {
                    component: "span",
                    ...L("loader", { style: e }),
                    "aria-hidden": !0,
                    children: (0, t.jsx)(c.Loader, {
                      color: "var(--button-color)",
                      size: "calc(var(--button-height) / 1.8)",
                      ...S,
                    }),
                  }),
              }),
            (0, t.jsxs)("span", {
              ...L("inner"),
              children: [
                h &&
                  (0, t.jsx)(s.Box, {
                    component: "span",
                    ...L("section"),
                    mod: { position: "left" },
                    children: h,
                  }),
                (0, t.jsx)(s.Box, {
                  component: "span",
                  mod: { loading: j },
                  ...L("label"),
                  children: y,
                }),
                b &&
                  (0, t.jsx)(s.Box, {
                    component: "span",
                    ...L("section"),
                    mod: { position: "right" },
                    children: b,
                  }),
              ],
            }),
          ],
        });
      });
    (x.classes = p),
      (x.displayName = "@mantine/core/Button"),
      (x.Group = y),
      (x.GroupSection = b),
      e.s(["Button", () => x], 533372);
  },
  442948,
  (e) => {
    "use strict";
    var t = e.i(843476),
      r = e.i(271645),
      o = e.i(424848),
      n = e.i(143798),
      i = e.i(207670),
      a = e.i(515259),
      s = e.i(789549),
      l = e.i(314037),
      c = e.i(644662),
      u = e.i(321879),
      d = {
        root: "m_5ae2e3c",
        barsLoader: "m_7a2bd4cd",
        bar: "m_870bb79",
        "bars-loader-animation": "m_5d2b3b9d",
        dotsLoader: "m_4e3f22d7",
        dot: "m_870c4af",
        "loader-dots-animation": "m_aac34a1",
        ovalLoader: "m_b34414df",
        "oval-loader-animation": "m_f8e89c4b",
      };
    let f = (0, r.forwardRef)(({ className: e, ...r }, o) =>
      (0, t.jsxs)(c.Box, {
        component: "span",
        className: (0, i.default)(d.barsLoader, e),
        ...r,
        ref: o,
        children: [
          (0, t.jsx)("span", { className: d.bar }),
          (0, t.jsx)("span", { className: d.bar }),
          (0, t.jsx)("span", { className: d.bar }),
        ],
      })
    );
    f.displayName = "@mantine/core/Bars";
    let p = (0, r.forwardRef)(({ className: e, ...r }, o) =>
      (0, t.jsxs)(c.Box, {
        component: "span",
        className: (0, i.default)(d.dotsLoader, e),
        ...r,
        ref: o,
        children: [
          (0, t.jsx)("span", { className: d.dot }),
          (0, t.jsx)("span", { className: d.dot }),
          (0, t.jsx)("span", { className: d.dot }),
        ],
      })
    );
    p.displayName = "@mantine/core/Dots";
    let m = (0, r.forwardRef)(({ className: e, ...r }, o) =>
      (0, t.jsx)(c.Box, {
        component: "span",
        className: (0, i.default)(d.ovalLoader, e),
        ...r,
        ref: o,
      })
    );
    m.displayName = "@mantine/core/Oval";
    let g = { bars: f, oval: m, dots: p },
      y = { loaders: g, type: "oval" },
      h = (0, n.createVarsResolver)((e, { size: t, color: r }) => ({
        root: {
          "--loader-size": (0, o.getSize)(t, "loader-size"),
          "--loader-color": r ? (0, a.getThemeColor)(r, e) : void 0,
        },
      })),
      b = (0, u.factory)((e, r) => {
        let o = (0, s.useProps)("Loader", y, e),
          {
            size: n,
            color: i,
            type: a,
            vars: u,
            className: f,
            style: p,
            classNames: m,
            styles: g,
            unstyled: b,
            loaders: v,
            variant: w,
            children: x,
            attributes: _,
            ...P
          } = o,
          j = (0, l.useStyles)({
            name: "Loader",
            props: o,
            classes: d,
            className: f,
            style: p,
            classNames: m,
            styles: g,
            unstyled: b,
            attributes: _,
            vars: u,
            varsResolver: h,
          });
        return x
          ? (0, t.jsx)(c.Box, { ...j("root"), ref: r, ...P, children: x })
          : (0, t.jsx)(c.Box, {
              ...j("root"),
              ref: r,
              component: v[a],
              variant: w,
              size: n,
              ...P,
            });
      });
    (b.defaultLoaders = g),
      (b.classes = d),
      (b.displayName = "@mantine/core/Loader"),
      e.s(["Loader", () => b], 442948);
  },
  736597,
  867228,
  145500,
  (e) => {
    "use strict";
    var t = e.i(271645);
    function r(
      e,
      o,
      { getInitialValueInEffect: n } = { getInitialValueInEffect: !0 }
    ) {
      let [i, a] = (0, t.useState)(
          n ? o : "matchMedia" in window && window.matchMedia(e).matches
        ),
        s = (0, t.useRef)(null);
      return (
        (0, t.useEffect)(() => {
          if ("matchMedia" in window) {
            (s.current = window.matchMedia(e)), a(s.current.matches);
            var t = s.current,
              r = (e) => a(e.matches);
            try {
              return (
                t.addEventListener("change", r),
                () => t.removeEventListener("change", r)
              );
            } catch (e) {
              return t.addListener(r), () => t.removeListener(r);
            }
          }
        }, [e]),
        i
      );
    }
    function o(e, t) {
      return r("(prefers-reduced-motion: reduce)", e, t);
    }
    function n(e, r) {
      let o = (0, t.useRef)(!1);
      (0, t.useEffect)(
        () => () => {
          o.current = !1;
        },
        []
      ),
        (0, t.useEffect)(() => {
          if (o.current) return e();
          o.current = !0;
        }, r);
    }
    e.s(["useMediaQuery", () => r], 867228),
      e.s(["useReducedMotion", () => o], 736597),
      e.s(["useDidUpdate", () => n], 145500);
  },
  257942,
  (e) => {
    "use strict";
    var t = e.i(843476),
      r = e.i(271645),
      o = e.i(321879);
    function n(e) {
      let n = (0, r.forwardRef)(e);
      return (
        (n.withProps = (e) => {
          let o = (0, r.forwardRef)((r, o) =>
            (0, t.jsx)(n, { ...e, ...r, ref: o })
          );
          return (
            (o.extend = n.extend),
            (o.displayName = `WithProps(${n.displayName})`),
            o
          );
        }),
        (n.extend = o.identity),
        n
      );
    }
    e.s(["polymorphicFactory", () => n]);
  },
  825436,
  (e) => {
    "use strict";
    var t = e.i(843476);
    e.i(271645), e.i(207670);
    var r = e.i(789549),
      o = e.i(314037),
      n = e.i(644662),
      i = e.i(257942),
      a = { root: "m_87cf2631" };
    let s = { __staticSelector: "UnstyledButton" },
      l = (0, i.polymorphicFactory)((e, i) => {
        let l = (0, r.useProps)("UnstyledButton", s, e),
          {
            className: c,
            component: u = "button",
            __staticSelector: d,
            unstyled: f,
            classNames: p,
            styles: m,
            style: g,
            attributes: y,
            ...h
          } = l,
          b = (0, o.useStyles)({
            name: d,
            props: l,
            classes: a,
            className: c,
            style: g,
            classNames: p,
            styles: m,
            unstyled: f,
            attributes: y,
          });
        return (0, t.jsx)(n.Box, {
          ...b("root", { focusable: !0 }),
          component: u,
          ref: i,
          type: "button" === u ? "button" : void 0,
          ...h,
        });
      });
    (l.classes = a),
      (l.displayName = "@mantine/core/UnstyledButton"),
      e.s(["UnstyledButton", () => l], 825436);
  },
  298193,
  (e) => {
    "use strict";
    var t = e.i(843476),
      r = e.i(271645);
    e.i(207670);
    var o = e.i(290098);
    let n = (e) => ({
        in: { opacity: 1, transform: "scale(1)" },
        out: {
          opacity: 0,
          transform: `scale(.9) translateY(${"bottom" === e ? 10 : -10}px)`,
        },
        transitionProperty: "transform, opacity",
      }),
      i = {
        fade: {
          in: { opacity: 1 },
          out: { opacity: 0 },
          transitionProperty: "opacity",
        },
        "fade-up": {
          in: { opacity: 1, transform: "translateY(0)" },
          out: { opacity: 0, transform: "translateY(30px)" },
          transitionProperty: "opacity, transform",
        },
        "fade-down": {
          in: { opacity: 1, transform: "translateY(0)" },
          out: { opacity: 0, transform: "translateY(-30px)" },
          transitionProperty: "opacity, transform",
        },
        "fade-left": {
          in: { opacity: 1, transform: "translateX(0)" },
          out: { opacity: 0, transform: "translateX(30px)" },
          transitionProperty: "opacity, transform",
        },
        "fade-right": {
          in: { opacity: 1, transform: "translateX(0)" },
          out: { opacity: 0, transform: "translateX(-30px)" },
          transitionProperty: "opacity, transform",
        },
        scale: {
          in: { opacity: 1, transform: "scale(1)" },
          out: { opacity: 0, transform: "scale(0)" },
          common: { transformOrigin: "top" },
          transitionProperty: "transform, opacity",
        },
        "scale-y": {
          in: { opacity: 1, transform: "scaleY(1)" },
          out: { opacity: 0, transform: "scaleY(0)" },
          common: { transformOrigin: "top" },
          transitionProperty: "transform, opacity",
        },
        "scale-x": {
          in: { opacity: 1, transform: "scaleX(1)" },
          out: { opacity: 0, transform: "scaleX(0)" },
          common: { transformOrigin: "left" },
          transitionProperty: "transform, opacity",
        },
        "skew-up": {
          in: { opacity: 1, transform: "translateY(0) skew(0deg, 0deg)" },
          out: {
            opacity: 0,
            transform: "translateY(-20px) skew(-10deg, -5deg)",
          },
          common: { transformOrigin: "top" },
          transitionProperty: "transform, opacity",
        },
        "skew-down": {
          in: { opacity: 1, transform: "translateY(0) skew(0deg, 0deg)" },
          out: {
            opacity: 0,
            transform: "translateY(20px) skew(-10deg, -5deg)",
          },
          common: { transformOrigin: "bottom" },
          transitionProperty: "transform, opacity",
        },
        "rotate-left": {
          in: { opacity: 1, transform: "translateY(0) rotate(0deg)" },
          out: { opacity: 0, transform: "translateY(20px) rotate(-5deg)" },
          common: { transformOrigin: "bottom" },
          transitionProperty: "transform, opacity",
        },
        "rotate-right": {
          in: { opacity: 1, transform: "translateY(0) rotate(0deg)" },
          out: { opacity: 0, transform: "translateY(20px) rotate(5deg)" },
          common: { transformOrigin: "top" },
          transitionProperty: "transform, opacity",
        },
        "slide-down": {
          in: { opacity: 1, transform: "translateY(0)" },
          out: { opacity: 0, transform: "translateY(-100%)" },
          common: { transformOrigin: "top" },
          transitionProperty: "transform, opacity",
        },
        "slide-up": {
          in: { opacity: 1, transform: "translateY(0)" },
          out: { opacity: 0, transform: "translateY(100%)" },
          common: { transformOrigin: "bottom" },
          transitionProperty: "transform, opacity",
        },
        "slide-left": {
          in: { opacity: 1, transform: "translateX(0)" },
          out: { opacity: 0, transform: "translateX(100%)" },
          common: { transformOrigin: "left" },
          transitionProperty: "transform, opacity",
        },
        "slide-right": {
          in: { opacity: 1, transform: "translateX(0)" },
          out: { opacity: 0, transform: "translateX(-100%)" },
          common: { transformOrigin: "right" },
          transitionProperty: "transform, opacity",
        },
        pop: { ...n("bottom"), common: { transformOrigin: "center center" } },
        "pop-bottom-left": {
          ...n("bottom"),
          common: { transformOrigin: "bottom left" },
        },
        "pop-bottom-right": {
          ...n("bottom"),
          common: { transformOrigin: "bottom right" },
        },
        "pop-top-left": {
          ...n("top"),
          common: { transformOrigin: "top left" },
        },
        "pop-top-right": {
          ...n("top"),
          common: { transformOrigin: "top right" },
        },
      },
      a = {
        entering: "in",
        entered: "in",
        exiting: "out",
        exited: "out",
        "pre-exiting": "out",
        "pre-entering": "out",
      };
    var s = e.i(174080),
      l = e.i(736597),
      c = e.i(145500),
      u = e.i(522442);
    function d({
      keepMounted: e,
      transition: n = "fade",
      duration: d = 250,
      exitDuration: f = d,
      mounted: p,
      children: m,
      timingFunction: g = "ease",
      onExit: y,
      onEntered: h,
      onEnter: b,
      onExited: v,
      enterDelay: w,
      exitDelay: x,
    }) {
      let _ = (0, o.useMantineEnv)(),
        {
          transitionDuration: P,
          transitionStatus: j,
          transitionTimingFunction: S,
        } = (function ({
          duration: e,
          exitDuration: t,
          timingFunction: o,
          mounted: n,
          onEnter: i,
          onExit: a,
          onEntered: d,
          onExited: f,
          enterDelay: p,
          exitDelay: m,
        }) {
          let g = (0, u.useMantineTheme)(),
            y = (0, l.useReducedMotion)(),
            h = !!g.respectReducedMotion && y,
            [b, v] = (0, r.useState)(h ? 0 : e),
            [w, x] = (0, r.useState)(n ? "entered" : "exited"),
            _ = (0, r.useRef)(-1),
            P = (0, r.useRef)(-1),
            j = (0, r.useRef)(-1);
          function S() {
            window.clearTimeout(_.current),
              window.clearTimeout(P.current),
              cancelAnimationFrame(j.current);
          }
          let O = (r) => {
            S();
            let o = r ? i : a,
              n = r ? d : f,
              l = h ? 0 : r ? e : t;
            v(l),
              0 === l
                ? ("function" == typeof o && o(),
                  "function" == typeof n && n(),
                  x(r ? "entered" : "exited"))
                : (j.current = requestAnimationFrame(() => {
                    s.default.flushSync(() => {
                      x(r ? "pre-entering" : "pre-exiting");
                    }),
                      (j.current = requestAnimationFrame(() => {
                        "function" == typeof o && o(),
                          x(r ? "entering" : "exiting"),
                          (_.current = window.setTimeout(() => {
                            "function" == typeof n && n(),
                              x(r ? "entered" : "exited");
                          }, l));
                      }));
                  }));
          };
          return (
            (0, c.useDidUpdate)(() => {
              (S(), "number" != typeof (n ? p : m))
                ? O(n)
                : (P.current = window.setTimeout(
                    () => {
                      O(n);
                    },
                    n ? p : m
                  ));
            }, [n]),
            (0, r.useEffect)(
              () => () => {
                S();
              },
              []
            ),
            {
              transitionDuration: b,
              transitionStatus: w,
              transitionTimingFunction: o || "ease",
            }
          );
        })({
          mounted: p,
          exitDuration: f,
          duration: d,
          timingFunction: g,
          onExit: y,
          onEntered: h,
          onEnter: b,
          onExited: v,
          enterDelay: w,
          exitDelay: x,
        });
      return 0 === P || "test" === _
        ? p
          ? (0, t.jsx)(t.Fragment, { children: m({}) })
          : e
          ? m({ display: "none" })
          : null
        : "exited" === j
        ? e
          ? m({ display: "none" })
          : null
        : (0, t.jsx)(t.Fragment, {
            children: m(
              (function ({
                transition: e,
                state: t,
                duration: r,
                timingFunction: o,
              }) {
                let n = {
                  WebkitBackfaceVisibility: "hidden",
                  transitionDuration: `${r}ms`,
                  transitionTimingFunction: o,
                };
                return "string" == typeof e
                  ? e in i
                    ? {
                        transitionProperty: i[e].transitionProperty,
                        ...n,
                        ...i[e].common,
                        ...i[e][a[t]],
                      }
                    : {}
                  : {
                      transitionProperty: e.transitionProperty,
                      ...n,
                      ...e.common,
                      ...e[a[t]],
                    };
              })({ transition: n, duration: P, state: j, timingFunction: S })
            ),
          });
    }
    (d.displayName = "@mantine/core/Transition"),
      e.s(["Transition", () => d], 298193);
  },
  818581,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "useMergedRef", {
        enumerable: !0,
        get: function () {
          return n;
        },
      });
    let o = e.r(271645);
    function n(e, t) {
      let r = (0, o.useRef)(null),
        n = (0, o.useRef)(null);
      return (0, o.useCallback)(
        (o) => {
          if (null === o) {
            let e = r.current;
            e && ((r.current = null), e());
            let t = n.current;
            t && ((n.current = null), t());
          } else e && (r.current = i(e, o)), t && (n.current = i(t, o));
        },
        [e, t]
      );
    }
    function i(e, t) {
      if ("function" != typeof e)
        return (
          (e.current = t),
          () => {
            e.current = null;
          }
        );
      {
        let r = e(t);
        return "function" == typeof r ? r : () => e(null);
      }
    }
    ("function" == typeof r.default ||
      ("object" == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, "__esModule", { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  33550,
  (e) => {
    "use strict";
    var t = e.i(271645),
      r = {
        outline: {
          xmlns: "http://www.w3.org/2000/svg",
          width: 24,
          height: 24,
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: 2,
          strokeLinecap: "round",
          strokeLinejoin: "round",
        },
        filled: {
          xmlns: "http://www.w3.org/2000/svg",
          width: 24,
          height: 24,
          viewBox: "0 0 24 24",
          fill: "currentColor",
          stroke: "none",
        },
      };
    let o = (e, o, n, i) => {
      let a = (0, t.forwardRef)(
        (
          {
            color: n = "currentColor",
            size: a = 24,
            stroke: s = 2,
            title: l,
            className: c,
            children: u,
            ...d
          },
          f
        ) =>
          (0, t.createElement)(
            "svg",
            {
              ref: f,
              ...r[e],
              width: a,
              height: a,
              className: ["tabler-icon", `tabler-icon-${o}`, c].join(" "),
              ...("filled" === e ? { fill: n } : { strokeWidth: s, stroke: n }),
              ...d,
            },
            [
              l && (0, t.createElement)("title", { key: "svg-title" }, l),
              ...i.map(([e, r]) => (0, t.createElement)(e, r)),
              ...(Array.isArray(u) ? u : [u]),
            ]
          )
      );
      return (a.displayName = `${n}`), a;
    };
    e.s(["default", () => o], 33550);
  },
]);
