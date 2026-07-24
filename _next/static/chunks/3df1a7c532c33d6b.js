(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  952683,
  (e) => {
    "use strict";
    let t, r;
    var a = e.i(843476),
      i = e.i(271645),
      s = e.i(541473),
      n = e.i(19607),
      l = e.i(902282),
      o = e.i(657688),
      c = e.i(963327),
      d = e.i(846932),
      p = e.i(344804);
    let u = {
        src: e.i(434502).default,
        width: 24,
        height: 24,
        blurWidth: 0,
        blurHeight: 0,
      },
      x = [
        {
          id: 1,
          title: "What is GTR?",
          desc: "GTR is a real-time trading terminal that helps you trade smarter across crypto, stocks, and ETFs. It lets you react to market news, track top wallets, and catch new listings early, all in one easy-to-use platform.",
          points: [],
        },
        {
          id: 2,
          title: "How do I get started with GTR?",
          desc: "Getting started takes less than 1 minute. Just create your free account with your email, fund your wallet with crypto, card, or bank, and you are ready to trade instantly using all the advanced features of GTR.",
          points: [],
        },
        {
          id: 3,
          title: "What can I trade on GTR?",
          desc: "You can trade:",
          points: [
            "Crypto (spot & perps)",
            "Meme coins (across chains)",
            "Stocks",
            "ETFs (leveraged and regular)",
          ],
        },
        {
          id: 4,
          title: "How is GTR different from other trading apps?",
          desc: "",
          points: [
            "Real-time news and global event alerts",
            "Track & Copy top traders",
            "Get notified for new token listings",
            "Trade stocks and crypto in one place",
            "On-chain, self-custodial wallet",
            "Fast execution, low fees",
          ],
        },
        {
          id: 5,
          title: " How fast are news alerts on GTR?",
          desc: "You’ll get breaking news alerts in real-time — often seconds faster than other platforms — so you can react before the market does.",
          points: [],
        },
        {
          id: 6,
          title: "How does GTR help with new token listings?",
          desc: "Our Exchange Listing Tracker alerts you as soon as a new token is listed on major exchanges. This helps you catch the early pumps.",
          points: [],
        },
        {
          id: 7,
          title: "What networks does GTR support?",
          desc: "We support multiple blockchains (Solana, Arbitrum, Base, and more), and trading happens on-chain — no CEX risk.",
          points: [],
        },
        {
          id: 8,
          title: "Is GTR self-custodial?",
          desc: "Yes. You always hold your own keys and funds. GTR is a fully self-custodial platform.",
          points: [],
        },
      ],
      f = [
        {
          id: 1,
          title: "Social Trade Feed",
          descWidth: "100%",
          desc: "Copy top traders in one click",
          media:
            "https://getrabbit.nyc3.cdn.digitaloceanspaces.com/website-assets/wallet-tracker.mp4",
          mediaType: "video",
          poster:
            "https://getrabbit.nyc3.cdn.digitaloceanspaces.com/website-assets/wallet-tracker-fallback.png",
        },
        {
          id: 2,
          title: "Global Event Feed",
          descWidth: "50%",
          desc: "Get market-moving news in 1 second",
          media:
            "https://getrabbit.nyc3.cdn.digitaloceanspaces.com/website-assets/news-tracker.mp4",
          mediaType: "video",
          poster:
            "https://getrabbit.nyc3.cdn.digitaloceanspaces.com/website-assets/news-tracker-fallback.png",
        },
        {
          id: 3,
          title: "Listing trackers",
          descWidth: "80%",
          desc: "Alert for new listing, buy before the 10% pump",
          media:
            "https://getrabbit.nyc3.cdn.digitaloceanspaces.com/website-assets/exchange-listing.png",
          mediaType: "image",
          poster: "",
        },
        {
          id: 4,
          descWidth: "80%",
          title: "1 Click Execution",
          desc: "High speed terminal for instant trade execution on news",
          media:
            "https://getrabbit.nyc3.cdn.digitaloceanspaces.com/website-assets/terminal-second-fold.png",
          mediaType: "image",
          poster: "",
        },
      ],
      h = () =>
        (0, a.jsx)(p.Accordion, {
          defaultValue: "1",
          classNames: {
            control: "!bg-transparent p-0",
            item: "text-base !leading-[150%] !text-slate-900 border-b !border-b-white/70 last:!border-b-0",
            label: "text-[20px] text-white font-medium !py-4 !leading-[120%]",
            chevron:
              "transition-transform duration-200 data-[rotate]:rotate-[45deg] w-6",
            content: "pt-0 pb-6 pl-0 !font-sm !text-[#A4ABC1] !leading-[142%]",
          },
          chevron: (0, a.jsx)(o.default, {
            className: "hidden lg:block",
            src: u,
            alt: "Close Icon",
          }),
          children: x?.map((e) =>
            (0, a.jsxs)(
              p.Accordion.Item,
              {
                value: e?.id?.toString(),
                children: [
                  (0, a.jsx)(p.Accordion.Control, { children: e?.title }),
                  (0, a.jsxs)(p.Accordion.Panel, {
                    children: [
                      (0, a.jsx)("div", { children: e?.desc }),
                      (0, a.jsx)("div", {
                        className: "pl-3 pt-1 flex flex-col gap-1",
                        children: e?.points?.map((e) =>
                          (0, a.jsx)("li", { children: e }, e)
                        ),
                      }),
                    ],
                  }),
                ],
              },
              e?.id
            )
          ),
        }),
      g = {
        src: e.i(967144).default,
        width: 22,
        height: 22,
        blurWidth: 0,
        blurHeight: 0,
      };
    var m = e.i(288003),
      b = e.i(271329),
      y = e.i(947414);
    e.i(105369);
    var v = e.i(965566);
    e.i(861200);
    var w = e.i(930551),
      j = e.i(260830),
      k = e.i(28327);
    function N(e, t) {
      let r,
        a = () => {
          let { currentTime: a } = t,
            i = (null === a ? 0 : a.value) / 100;
          r !== i && e(i), (r = i);
        };
      return k.frame.update(a, !0), () => (0, k.cancelFrame)(a);
    }
    var C = e.i(749652);
    let E = new WeakMap();
    function T({ target: e, contentRect: t, borderBoxSize: r }) {
      var a;
      null == (a = E.get(e)) ||
        a.forEach((a) => {
          a({
            target: e,
            contentSize: t,
            get size() {
              return (function (e, t) {
                if (t) {
                  let { inlineSize: e, blockSize: r } = t[0];
                  return { width: e, height: r };
                }
                return e instanceof SVGElement && "getBBox" in e
                  ? e.getBBox()
                  : { width: e.offsetWidth, height: e.offsetHeight };
              })(e, r);
            },
          });
        });
    }
    function S(e) {
      e.forEach(T);
    }
    let R = new Set();
    var W = e.i(783920),
      A = e.i(368935);
    let z = () => ({
        current: 0,
        offset: [],
        progress: 0,
        scrollLength: 0,
        targetOffset: 0,
        targetLength: 0,
        containerLength: 0,
        velocity: 0,
      }),
      M = {
        x: { length: "Width", position: "Left" },
        y: { length: "Height", position: "Top" },
      };
    function B(e, t, r, a) {
      let i = r[t],
        { length: s, position: n } = M[t],
        l = i.current,
        o = r.time;
      (i.current = e[`scroll${n}`]),
        (i.scrollLength = e[`scroll${s}`] - e[`client${s}`]),
        (i.offset.length = 0),
        (i.offset[0] = 0),
        (i.offset[1] = i.scrollLength),
        (i.progress = (0, W.progress)(0, i.scrollLength, i.current));
      let c = a - o;
      i.velocity = c > 50 ? 0 : (0, A.velocityPerSecond)(i.current - l, c);
    }
    e.i(247167);
    var F = e.i(974780),
      L = e.i(625711),
      G = e.i(630040);
    let I = { start: 0, center: 0.5, end: 1 };
    function P(e, t, r = 0) {
      let a = 0;
      if ((e in I && (e = I[e]), "string" == typeof e)) {
        let t = parseFloat(e);
        e.endsWith("px")
          ? (a = t)
          : e.endsWith("%")
          ? (e = t / 100)
          : e.endsWith("vw")
          ? (a = (t / 100) * document.documentElement.clientWidth)
          : e.endsWith("vh")
          ? (a = (t / 100) * document.documentElement.clientHeight)
          : (e = t);
      }
      return "number" == typeof e && (a = t * e), r + a;
    }
    let H = [0, 0],
      O = [
        [0, 0],
        [1, 1],
      ],
      V = { x: 0, y: 0 },
      D = new WeakMap(),
      Y = new WeakMap(),
      $ = new WeakMap(),
      X = (e) => (e === document.documentElement ? window : e);
    function q(e, { container: a = document.documentElement, ...i } = {}) {
      let s = $.get(a);
      s || ((s = new Set()), $.set(a, s));
      let n = (function (e, t, r, a = {}) {
        return {
          measure: () =>
            (function (e, t = e, r) {
              if (((r.x.targetOffset = 0), (r.y.targetOffset = 0), t !== e)) {
                let a = t;
                for (; a && a !== e; )
                  (r.x.targetOffset += a.offsetLeft),
                    (r.y.targetOffset += a.offsetTop),
                    (a = a.offsetParent);
              }
              (r.x.targetLength = t === e ? t.scrollWidth : t.clientWidth),
                (r.y.targetLength = t === e ? t.scrollHeight : t.clientHeight),
                (r.x.containerLength = e.clientWidth),
                (r.y.containerLength = e.clientHeight);
            })(e, a.target, r),
          update: (t) => {
            B(e, "x", r, t),
              B(e, "y", r, t),
              (r.time = t),
              (a.offset || a.target) &&
                (function (e, t, r) {
                  let { offset: a = O } = r,
                    { target: i = e, axis: s = "y" } = r,
                    n = "y" === s ? "height" : "width",
                    l =
                      i !== e
                        ? (function (e, t) {
                            let r = { x: 0, y: 0 },
                              a = e;
                            for (; a && a !== t; )
                              if (a instanceof HTMLElement)
                                (r.x += a.offsetLeft),
                                  (r.y += a.offsetTop),
                                  (a = a.offsetParent);
                              else if ("svg" === a.tagName) {
                                let e = a.getBoundingClientRect(),
                                  t = (a =
                                    a.parentElement).getBoundingClientRect();
                                (r.x += e.left - t.left),
                                  (r.y += e.top - t.top);
                              } else if (a instanceof SVGGraphicsElement) {
                                let { x: e, y: t } = a.getBBox();
                                (r.x += e), (r.y += t);
                                let i = null,
                                  s = a.parentNode;
                                for (; !i; )
                                  "svg" === s.tagName && (i = s),
                                    (s = a.parentNode);
                                a = i;
                              } else break;
                            return r;
                          })(i, e)
                        : V,
                    o =
                      i === e
                        ? { width: e.scrollWidth, height: e.scrollHeight }
                        : "getBBox" in i && "svg" !== i.tagName
                        ? i.getBBox()
                        : { width: i.clientWidth, height: i.clientHeight },
                    c = { width: e.clientWidth, height: e.clientHeight };
                  t[s].offset.length = 0;
                  let d = !t[s].interpolate,
                    p = a.length;
                  for (let e = 0; e < p; e++) {
                    let r = (function (e, t, r, a) {
                      let i = Array.isArray(e) ? e : H,
                        s = 0;
                      return (
                        "number" == typeof e
                          ? (i = [e, e])
                          : "string" == typeof e &&
                            (i = (e = e.trim()).includes(" ")
                              ? e.split(" ")
                              : [e, I[e] ? e : "0"]),
                        (s = P(i[0], r, a)) - P(i[1], t)
                      );
                    })(a[e], c[n], o[n], l[s]);
                    d || r === t[s].interpolatorOffsets[e] || (d = !0),
                      (t[s].offset[e] = r);
                  }
                  d &&
                    ((t[s].interpolate = (0, L.interpolate)(
                      t[s].offset,
                      (0, G.defaultOffset)(a),
                      { clamp: !1 }
                    )),
                    (t[s].interpolatorOffsets = [...t[s].offset])),
                    (t[s].progress = (0, F.clamp)(
                      0,
                      1,
                      t[s].interpolate(t[s].current)
                    ));
                })(e, r, a);
          },
          notify: () => t(r),
        };
      })(a, e, { time: 0, x: z(), y: z() }, i);
      if ((s.add(n), !D.has(a))) {
        let e,
          i = () => {
            for (let e of s) e.measure();
          },
          n = () => {
            for (let e of s) e.update(k.frameData.timestamp);
          },
          l = () => {
            for (let e of s) e.notify();
          },
          o = () => {
            k.frame.read(i, !1, !0),
              k.frame.read(n, !1, !0),
              k.frame.update(l, !1, !0);
          };
        D.set(a, o);
        let c = X(a);
        window.addEventListener("resize", o, { passive: !0 }),
          a !== document.documentElement &&
            Y.set(
              a,
              "function" == typeof a
                ? (R.add(a),
                  r ||
                    ((r = () => {
                      let e = {
                          width: window.innerWidth,
                          height: window.innerHeight,
                        },
                        t = { target: window, size: e, contentSize: e };
                      R.forEach((e) => e(t));
                    }),
                    window.addEventListener("resize", r)),
                  () => {
                    R.delete(a), !R.size && r && (r = void 0);
                  })
                : (t ||
                    ("undefined" != typeof ResizeObserver &&
                      (t = new ResizeObserver(S))),
                  (e = (0, C.resolveElements)(a)).forEach((e) => {
                    let r = E.get(e);
                    r || ((r = new Set()), E.set(e, r)),
                      r.add(o),
                      null == t || t.observe(e);
                  }),
                  () => {
                    e.forEach((e) => {
                      let r = E.get(e);
                      null == r || r.delete(o),
                        (null == r ? void 0 : r.size) ||
                          null == t ||
                          t.unobserve(e);
                    });
                  })
            ),
          c.addEventListener("scroll", o, { passive: !0 });
      }
      let l = D.get(a);
      return (
        k.frame.read(l, !1, !0),
        () => {
          var e;
          (0, k.cancelFrame)(l);
          let t = $.get(a);
          if (!t || (t.delete(n), t.size)) return;
          let r = D.get(a);
          D.delete(a),
            r &&
              (X(a).removeEventListener("scroll", r),
              null == (e = Y.get(a)) || e(),
              window.removeEventListener("resize", r));
        }
      );
    }
    let J = new Map();
    function _({
      source: e,
      container: t = document.documentElement,
      axis: r = "y",
    } = {}) {
      e && (t = e), J.has(t) || J.set(t, {});
      let a = J.get(t);
      return (
        a[r] ||
          (a[r] = (0, w.supportsScrollTimeline)()
            ? new ScrollTimeline({ source: t, axis: r })
            : (function ({ source: e, container: t, axis: r = "y" }) {
                e && (t = e);
                let a = { value: 0 },
                  i = q(
                    (e) => {
                      a.value = 100 * e[r].progress;
                    },
                    { container: t, axis: r }
                  );
                return { currentTime: a, cancel: i };
              })({ source: t, axis: r })),
        a[r]
      );
    }
    function K(e) {
      return e && (e.target || e.offset);
    }
    var U = e.i(674008);
    function Z(e, t) {
      (0, v.warning)(
        !!(!t || t.current),
        `You have defined a ${e} options but the provided ref is not yet hydrated, probably because it's defined higher up the tree. Try calling useScroll() in the same component as the ref, or setting its \`layoutEffect: false\` option.`
      );
    }
    let Q = () => ({
      scrollX: (0, b.motionValue)(0),
      scrollY: (0, b.motionValue)(0),
      scrollXProgress: (0, b.motionValue)(0),
      scrollYProgress: (0, b.motionValue)(0),
    });
    function ee({ container: e, target: t, layoutEffect: r = !0, ...a } = {}) {
      let s = (0, y.useConstant)(Q);
      return (
        (r ? U.useIsomorphicLayoutEffect : i.useEffect)(
          () => (
            Z("target", t),
            Z("container", e),
            (function (e, { axis: t = "y", ...r } = {}) {
              var a, i;
              let s = { axis: t, ...r };
              return "function" == typeof e
                ? ((a = e),
                  (i = s),
                  2 === a.length || K(i)
                    ? q((e) => {
                        a(e[i.axis].progress, e);
                      }, i)
                    : N(a, _(i)))
                : (function (e, t) {
                    if ((e.flatten(), K(t)))
                      return (
                        e.pause(),
                        q((r) => {
                          e.time = e.duration * r[t.axis].progress;
                        }, t)
                      );
                    {
                      let r = _(t);
                      return e.attachTimeline
                        ? e.attachTimeline(
                            r,
                            (e) => (
                              e.pause(),
                              N((t) => {
                                e.time = e.duration * t;
                              }, r)
                            )
                          )
                        : j.noop;
                    }
                  })(e, s);
            })(
              (e, { x: t, y: r }) => {
                s.scrollX.set(t.current),
                  s.scrollXProgress.set(t.progress),
                  s.scrollY.set(r.current),
                  s.scrollYProgress.set(r.progress);
              },
              {
                ...a,
                container: (null == e ? void 0 : e.current) || void 0,
                target: (null == t ? void 0 : t.current) || void 0,
              }
            )
          ),
          [e, t, JSON.stringify(a.offset)]
        ),
        s
      );
    }
    var et = e.i(193521),
      er = e.i(737806);
    function ea(e) {
      let t = (0, y.useConstant)(() => (0, b.motionValue)(e)),
        { isStatic: r } = (0, i.useContext)(er.MotionConfigContext);
      if (r) {
        let [, r] = (0, i.useState)(e);
        (0, i.useEffect)(() => t.on("change", r), []);
      }
      return t;
    }
    var ei = e.i(298549);
    function es(e) {
      return "number" == typeof e ? e : parseFloat(e);
    }
    function en(e, t = {}) {
      let { isStatic: r } = (0, i.useContext)(er.MotionConfigContext),
        a = (0, i.useRef)(null),
        s = ea((0, ei.isMotionValue)(e) ? es(e.get()) : e),
        n = (0, i.useRef)(s.get()),
        l = (0, i.useRef)(() => {}),
        o = () => {
          let e = a.current;
          e && 0 === e.time && e.sample(k.frameData.delta),
            c(),
            (a.current = (0, et.animateValue)({
              keyframes: [s.get(), n.current],
              velocity: s.getVelocity(),
              type: "spring",
              restDelta: 0.001,
              restSpeed: 0.01,
              ...t,
              onUpdate: l.current,
            }));
        },
        c = () => {
          a.current && a.current.stop();
        };
      return (
        (0, i.useInsertionEffect)(
          () =>
            s.attach(
              (e, t) =>
                r
                  ? t(e)
                  : ((n.current = e),
                    (l.current = t),
                    k.frame.update(o),
                    s.get()),
              c
            ),
          [JSON.stringify(t)]
        ),
        (0, U.useIsomorphicLayoutEffect)(() => {
          if ((0, ei.isMotionValue)(e))
            return e.on("change", (e) => s.set(es(e)));
        }, [s]),
        s
      );
    }
    function el(e, t) {
      let r = ea(t()),
        a = () => r.set(t());
      return (
        a(),
        (0, U.useIsomorphicLayoutEffect)(() => {
          let t = () => k.frame.preRender(a, !1, !0),
            r = e.map((e) => e.on("change", t));
          return () => {
            r.forEach((e) => e()), (0, k.cancelFrame)(a);
          };
        }),
        r
      );
    }
    function eo(e, t, r, a) {
      if ("function" == typeof e) {
        let t;
        return (
          (b.collectMotionValues.current = []),
          e(),
          (t = el(b.collectMotionValues.current, e)),
          (b.collectMotionValues.current = void 0),
          t
        );
      }
      let i =
        "function" == typeof t
          ? t
          : (function (...e) {
              var t;
              let r,
                a = !Array.isArray(e[0]),
                i = a ? 0 : -1,
                s = e[0 + i],
                n = e[1 + i],
                l = e[2 + i],
                o = e[3 + i],
                c = (0, L.interpolate)(n, l, {
                  mixer:
                    (r = t = l[0]) && "object" == typeof r && r.mix
                      ? t.mix
                      : void 0,
                  ...o,
                });
              return a ? c(s) : c;
            })(t, r, a);
      return Array.isArray(e) ? ec(e, i) : ec([e], ([e]) => i(e));
    }
    function ec(e, t) {
      let r = (0, y.useConstant)(() => []);
      return el(e, () => {
        r.length = 0;
        let a = e.length;
        for (let t = 0; t < a; t++) r[t] = e[t].get();
        return t(r);
      });
    }
    function ed({ card: e, isActive: t }) {
      let r = (0, i.useRef)(null);
      return (
        (0, i.useEffect)(() => {
          t &&
            r.current &&
            ((r.current.currentTime = 0), r.current.play().catch(() => {}));
        }, [t]),
        (0, a.jsx)("video", {
          ref: r,
          src: e.media,
          poster: e.poster,
          className: "w-full h-full object-contain relative z-10",
          loop: !0,
          muted: !0,
          playsInline: !0,
          style: { borderRadius: "16px" },
        })
      );
    }
    function ep({ card: e, index: t, activeIndex: r }) {
      let i = t === r;
      return (0, a.jsxs)(d.motion.div, {
        animate: { opacity: +!!i },
        transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
        className: "absolute inset-0 flex items-center justify-center",
        style: { pointerEvents: i ? "auto" : "none" },
        children: [
          (0, a.jsx)("div", {
            className: "absolute inset-0 opacity-20 pointer-events-none",
            style: {
              background:
                "radial-gradient(ellipse at 50% 60%, #3D1BFF 0%, transparent 70%)",
              filter: "blur(40px)",
            },
          }),
          "image" === e.mediaType
            ? (0, a.jsx)("img", {
                src: e.media,
                alt: e.title,
                className:
                  "w-full h-full object-contain relative z-10 rounded-2xl",
                loading: "lazy",
              })
            : (0, a.jsx)(ed, { card: e, isActive: i }),
        ],
      });
    }
    function eu({ card: e, index: t, scrollYProgress: r, total: i }) {
      let s,
        n,
        l,
        o,
        c = 1 / i,
        p = t * c,
        u = (t + 1) * c,
        x = p + 0.82 * c,
        f = p - 0.08 * c;
      0 === t
        ? ((s = [0, x, u]),
          (n = [0, 0, -120]),
          (l = [0, x, u]),
          (o = [1, 1, 0]))
        : ((s = [0, f, p, x, u]),
          (n = [480, 480, 0, 0, -120]),
          (l = [0, f, p, x, u]),
          (o = [0, 0, 1, 1, 0]));
      let h = eo(r, s, n),
        g = eo(r, l, o),
        m = en(h, { stiffness: 120, damping: 28, mass: 0.6 }),
        b = en(g, { stiffness: 120, damping: 28, mass: 0.6 });
      return (0, a.jsxs)(d.motion.div, {
        className: "absolute w-full flex flex-col",
        style: { top: 0, pointerEvents: "none", gap: "20px", y: m, opacity: b },
        children: [
          (0, a.jsx)("span", {
            style: {
              color: "#02E88C",
              fontSize: "13.8px",
              fontWeight: 700,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              lineHeight: 1,
            },
            children: e.title,
          }),
          (0, a.jsx)("h3", {
            style: {
              color: "#ffffff",
              fontWeight: 800,
              fontSize: "clamp(28px, 2.55vw, 42px)",
              lineHeight: "112%",
              letterSpacing: "-0.5px",
              margin: 0,
            },
            children: e.desc,
          }),
        ],
      });
    }
    let ex = ({ setSelectedCard: e, selectedCard: t }) => {
        var r, s;
        let n = (0, i.useRef)(null),
          [l, c] = (0, i.useState)(0),
          { scrollYProgress: d } = ee({
            target: n,
            offset: ["start start", "end end"],
          });
        return (
          (r = "change"),
          (s = (t) => {
            let r = 1 / f.length,
              a = Math.min(t, 0.9999),
              i = Math.min(f.length - 1, Math.max(0, Math.floor(a / r)));
            i !== l && (c(i), e(f[i]));
          }),
          (0, i.useInsertionEffect)(() => d.on(r, s), [d, r, s]),
          (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)("div", {
                ref: n,
                className: "hidden xl:block",
                style: { height: `${150 * f.length}vh` },
                children: (0, a.jsxs)("div", {
                  className: "sticky top-0 flex gap-12 items-center",
                  style: { height: "100vh" },
                  children: [
                    (0, a.jsx)("div", {
                      className: "w-[32%] flex flex-col justify-center h-full",
                      children: (0, a.jsx)("div", {
                        className: "relative",
                        style: { height: "500px", overflow: "hidden" },
                        children: f.map((e, t) =>
                          (0, a.jsx)(
                            eu,
                            {
                              card: e,
                              index: t,
                              scrollYProgress: d,
                              total: f.length,
                            },
                            e.id
                          )
                        ),
                      }),
                    }),
                    (0, a.jsx)("div", {
                      className:
                        "w-[68%] rounded-2xl border border-[#1B1E26] bg-black overflow-hidden relative",
                      style: { aspectRatio: "16/9", maxHeight: "88vh" },
                      children: f.map((e, t) =>
                        (0, a.jsx)(
                          ep,
                          { card: e, index: t, activeIndex: l },
                          e.id
                        )
                      ),
                    }),
                  ],
                }),
              }),
              (0, a.jsx)("div", {
                className: "block xl:hidden",
                children: (0, a.jsx)(p.Accordion, {
                  className: "my-[50px]",
                  defaultValue: "1",
                  classNames: {
                    control: "!bg-transparent p-0",
                    item: "!bg-[#15161C] text-base !leading-[150%] !text-slate-900 border !border-[#1B1E26] rounded mb-2",
                    label: "text-[20px] font-medium !py-4 !leading-[120%]",
                    chevron:
                      "transition-transform duration-200 data-[rotate]:rotate-[45deg] w-[7%] max-w-[30px]",
                    content:
                      "pt-0 pb-2 px-2 !font-sm !text-[#A4ABC1] !leading-[142%]",
                  },
                  chevronPosition: "left",
                  chevron: (0, a.jsx)(o.default, {
                    src: g,
                    alt: "Close Icon two",
                    width: 50,
                    priority: !0,
                  }),
                  children: f?.map((e) =>
                    (0, a.jsxs)(
                      p.Accordion.Item,
                      {
                        value: e?.id?.toString(),
                        children: [
                          (0, a.jsx)(p.Accordion.Control, {
                            children: e?.title,
                          }),
                          (0, a.jsx)(p.Accordion.Panel, {
                            children: (0, a.jsxs)("div", {
                              className: "flex flex-col gap-5",
                              children: [
                                (0, a.jsx)("div", {
                                  className: "text-left pl-2",
                                  children: e?.desc,
                                }),
                                e?.mediaType === "image"
                                  ? (0, a.jsx)("img", {
                                      src: e?.media,
                                      alt: e?.title,
                                      loading: "lazy",
                                    })
                                  : (0, a.jsx)(m.default, {
                                      src: e?.media,
                                      poster: e?.poster,
                                      className: "w-full",
                                      autoPlay: !0,
                                      loop: !0,
                                      muted: !0,
                                      playsInline: !0,
                                      style: { borderRadius: "13px" },
                                    }),
                              ],
                            }),
                          }),
                        ],
                      },
                      e?.id
                    )
                  ),
                }),
              }),
            ],
          })
        );
      },
      ef = { some: 0, all: 1 };
    function eh(e, { root: t, margin: r, amount: a, once: s = !1 } = {}) {
      let [n, l] = (0, i.useState)(!1);
      return (
        (0, i.useEffect)(() => {
          if (!e.current || (s && n)) return;
          let i = { root: (t && t.current) || void 0, margin: r, amount: a };
          return (function (
            e,
            t,
            { root: r, margin: a, amount: i = "some" } = {}
          ) {
            let s = (0, C.resolveElements)(e),
              n = new WeakMap(),
              l = new IntersectionObserver(
                (e) => {
                  e.forEach((e) => {
                    let r = n.get(e.target);
                    if (!!r !== e.isIntersecting)
                      if (e.isIntersecting) {
                        let r = t(e);
                        "function" == typeof r
                          ? n.set(e.target, r)
                          : l.unobserve(e.target);
                      } else
                        "function" == typeof r && (r(e), n.delete(e.target));
                  });
                },
                {
                  root: r,
                  rootMargin: a,
                  threshold: "number" == typeof i ? i : ef[i],
                }
              );
            return s.forEach((e) => l.observe(e)), () => l.disconnect();
          })(e.current, () => (l(!0), s ? void 0 : () => l(!1)), i);
        }, [t, e, r, s, a]),
        n
      );
    }
    let eg = [
        {
          number: "01",
          title: "Create your account",
          body: "Sign up with email in 10 seconds. Your self-custodial wallet is created automatically. You own your keys.",
          icon: (0, a.jsxs)("svg", {
            width: "22",
            height: "22",
            viewBox: "0 0 22 22",
            fill: "none",
            children: [
              (0, a.jsx)("circle", {
                cx: "11",
                cy: "8",
                r: "4",
                stroke: "#02E88C",
                strokeWidth: "1.5",
              }),
              (0, a.jsx)("path", {
                d: "M3 19c0-4 3.582-7 8-7s8 3 8 7",
                stroke: "#02E88C",
                strokeWidth: "1.5",
                strokeLinecap: "round",
              }),
            ],
          }),
        },
        {
          number: "02",
          title: "Fund your wallet",
          body: "Fund with crypto, card, or bank transfer. Supports Solana, Arbitrum, Base, and more. Instant deposits.",
          icon: (0, a.jsxs)("svg", {
            width: "22",
            height: "22",
            viewBox: "0 0 22 22",
            fill: "none",
            children: [
              (0, a.jsx)("rect", {
                x: "2",
                y: "6",
                width: "18",
                height: "12",
                rx: "2.5",
                stroke: "#02E88C",
                strokeWidth: "1.5",
              }),
              (0, a.jsx)("path", {
                d: "M2 10h18",
                stroke: "#02E88C",
                strokeWidth: "1.5",
              }),
              (0, a.jsx)("circle", {
                cx: "6.5",
                cy: "14.5",
                r: "1",
                fill: "#02E88C",
              }),
            ],
          }),
        },
        {
          number: "03",
          title: "Trade & build your rep",
          body: "Pick your market, follow top traders, join a clan, and start building your public track record.",
          icon: (0, a.jsxs)("svg", {
            width: "22",
            height: "22",
            viewBox: "0 0 22 22",
            fill: "none",
            children: [
              (0, a.jsx)("polyline", {
                points: "3,16 8,10 12,13 19,5",
                stroke: "#02E88C",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }),
              (0, a.jsx)("polyline", {
                points: "15,5 19,5 19,9",
                stroke: "#02E88C",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }),
            ],
          }),
        },
      ],
      em = () => {
        let e = (0, i.useRef)(null),
          t = eh(e, { once: !0, margin: "-100px" }),
          [r, s] = (0, i.useState)(0);
        return (
          (0, i.useEffect)(() => {
            if (t) {
              let e = setTimeout(() => s(100), 300);
              return () => clearTimeout(e);
            }
          }, [t]),
          (0, a.jsxs)("section", {
            className: "w-full relative pt-[96px] pb-[96px] overflow-hidden",
            children: [
              (0, a.jsx)("div", {
                className: "absolute inset-0 pointer-events-none",
                style: {
                  background:
                    "radial-gradient(ellipse at 30% 60%, rgba(2,232,140,0.05) 0%, transparent 55%)",
                },
              }),
              (0, a.jsxs)("div", {
                className: "w-[90%] lg:w-[79%] max-w-[1195px] mx-auto",
                ref: e,
                children: [
                  (0, a.jsxs)(d.motion.div, {
                    initial: { opacity: 0, y: 20 },
                    animate: t ? { opacity: 1, y: 0 } : {},
                    transition: { duration: 0.6 },
                    className: "mb-10 lg:mb-12",
                    children: [
                      (0, a.jsx)("span", {
                        className:
                          "text-[#02E88C] text-[13.8px] font-semibold tracking-[0.18em] uppercase block mb-3",
                        children: "Getting Started",
                      }),
                      (0, a.jsxs)("h2", {
                        className:
                          "text-white font-bold text-[32px] lg:text-[44px] leading-[115%] mb-4",
                        children: [
                          "Trading in under",
                          " ",
                          (0, a.jsx)("span", {
                            style: {
                              background:
                                "linear-gradient(91deg, #02E88C 0%, #25CDF7 100%)",
                              WebkitBackgroundClip: "text",
                              WebkitTextFillColor: "transparent",
                            },
                            children: "60 seconds",
                          }),
                        ],
                      }),
                      (0, a.jsx)("p", {
                        className:
                          "text-[#A4ABC1] text-sm lg:text-base leading-[165%] max-w-xl",
                        children:
                          "No KYC walls. No brokerage applications. Just sign up, fund, and go.",
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className: "relative",
                    children: [
                      (0, a.jsxs)("div", {
                        className:
                          "hidden lg:block absolute top-[52px] left-[calc(16.67%-12px)] right-[calc(16.67%-12px)] h-[1px] z-0",
                        children: [
                          (0, a.jsx)("div", {
                            className: "absolute inset-0 bg-[#ffffff08]",
                          }),
                          (0, a.jsx)("div", {
                            className:
                              "absolute inset-y-0 left-0 transition-all duration-[1400ms] ease-out",
                            style: {
                              width: `${r}%`,
                              background:
                                "linear-gradient(90deg, #02E88C 0%, #25CDF7 100%)",
                              boxShadow: "0 0 8px rgba(2,232,140,0.4)",
                            },
                          }),
                          [33.5, 67].map((e, r) =>
                            (0, a.jsx)(
                              d.motion.div,
                              {
                                initial: { opacity: 0, scale: 0 },
                                animate: t ? { opacity: 1, scale: 1 } : {},
                                transition: {
                                  delay: 0.8 + 0.3 * r,
                                  duration: 0.3,
                                },
                                className:
                                  "absolute top-1/2 -translate-y-1/2 -translate-x-1/2",
                                style: { left: `${e}%` },
                                children: (0, a.jsxs)("svg", {
                                  width: "14",
                                  height: "14",
                                  viewBox: "0 0 14 14",
                                  fill: "none",
                                  children: [
                                    (0, a.jsx)("circle", {
                                      cx: "7",
                                      cy: "7",
                                      r: "6.5",
                                      stroke: "#02E88C",
                                      strokeOpacity: "0.3",
                                    }),
                                    (0, a.jsx)("circle", {
                                      cx: "7",
                                      cy: "7",
                                      r: "2.5",
                                      fill: "#02E88C",
                                    }),
                                  ],
                                }),
                              },
                              r
                            )
                          ),
                        ],
                      }),
                      (0, a.jsx)("div", {
                        className: "flex flex-col lg:flex-row gap-4 lg:gap-6",
                        children: eg.map((e, r) =>
                          (0, a.jsxs)(
                            d.motion.div,
                            {
                              initial: { opacity: 0, y: 32 },
                              animate: t ? { opacity: 1, y: 0 } : {},
                              transition: {
                                duration: 0.6,
                                delay: 0.2 + 0.18 * r,
                              },
                              className: "flex-1 group relative",
                              children: [
                                (0, a.jsx)("div", {
                                  className:
                                    "relative h-full rounded-2xl p-[1px] transition-all duration-300",
                                  style: {
                                    background:
                                      "linear-gradient(135deg, rgba(2,232,140,0.2) 0%, rgba(2,232,140,0.05) 50%, rgba(255,255,255,0.04) 100%)",
                                  },
                                  children: (0, a.jsxs)("div", {
                                    className:
                                      "relative h-full rounded-2xl px-6 pt-14 pb-7 flex flex-col gap-4 overflow-hidden transition-all duration-300 group-hover:bg-[#0d1410]",
                                    style: { background: "#0b0e12" },
                                    children: [
                                      (0, a.jsx)("div", {
                                        className:
                                          "absolute top-4 right-5 text-[64px] font-black leading-none select-none pointer-events-none transition-all duration-500 group-hover:opacity-100",
                                        style: {
                                          color: "transparent",
                                          WebkitTextStroke:
                                            "1px rgba(2,232,140,0.1)",
                                          fontVariantNumeric: "tabular-nums",
                                        },
                                        children: e.number,
                                      }),
                                      (0, a.jsxs)("div", {
                                        className:
                                          "flex items-center gap-3 z-10",
                                        children: [
                                          (0, a.jsx)("div", {
                                            className:
                                              "w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-105",
                                            style: {
                                              background: "rgba(2,232,140,0.1)",
                                              border:
                                                "1px solid rgba(2,232,140,0.2)",
                                              boxShadow:
                                                "0 0 16px rgba(2,232,140,0.08)",
                                            },
                                            children: e.icon,
                                          }),
                                          (0, a.jsxs)("span", {
                                            className:
                                              "text-[11px] font-semibold tracking-[0.16em] uppercase",
                                            style: {
                                              color: "#02E88C",
                                              opacity: 0.75,
                                            },
                                            children: ["Step ", e.number],
                                          }),
                                        ],
                                      }),
                                      (0, a.jsx)("h3", {
                                        className:
                                          "text-white font-bold text-lg lg:text-xl leading-[130%] z-10",
                                        children: e.title,
                                      }),
                                      (0, a.jsx)("p", {
                                        className:
                                          "text-[#A4ABC1] text-sm leading-[165%] z-10",
                                        children: e.body,
                                      }),
                                      (0, a.jsx)("div", {
                                        className:
                                          "absolute bottom-0 left-0 right-0 h-[2px] rounded-b-2xl transition-all duration-500 opacity-0 group-hover:opacity-100",
                                        style: {
                                          background:
                                            "linear-gradient(90deg, #02E88C 0%, #25CDF7 100%)",
                                        },
                                      }),
                                    ],
                                  }),
                                }),
                                r < eg.length - 1 &&
                                  (0, a.jsx)("div", {
                                    className:
                                      "lg:hidden flex justify-center py-2",
                                    children: (0, a.jsx)("svg", {
                                      width: "14",
                                      height: "20",
                                      viewBox: "0 0 14 20",
                                      fill: "none",
                                      children: (0, a.jsx)("path", {
                                        d: "M7 0v16M1 10l6 8 6-8",
                                        stroke: "#02E88C",
                                        strokeOpacity: "0.4",
                                        strokeWidth: "1.5",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                      }),
                                    }),
                                  }),
                              ],
                            },
                            e.number
                          )
                        ),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          })
        );
      },
      eb = i.forwardRef(
        ({ className: e, variant: t = "green", children: r, ...i }, s) =>
          (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)("style", {
                children: `
          .gtr-gradient-btn {
            --pos-x: 11.14%;
            --pos-y: 140%;
            --spread-x: 150%;
            --spread-y: 180%;
            --border-angle: 20deg;
            --stop-1: 37%;
            --stop-2: 61%;
            --stop-3: 78%;
            --stop-4: 89%;
            --stop-5: 100%;

            position: relative;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            appearance: none;
            cursor: pointer;
            border: none;
            outline: none;
            border-radius: 10px;
            padding: 0.75rem 2rem;
            font-size: 1rem;
            font-weight: 600;
            color: #fff;
            transition:
              --pos-x 0.5s, --pos-y 0.5s,
              --spread-x 0.5s, --spread-y 0.5s,
              --color-1 0.5s, --color-2 0.5s, --color-3 0.5s, --color-4 0.5s, --color-5 0.5s,
              --border-angle 0.5s, --border-color-1 0.5s, --border-color-2 0.5s,
              --stop-1 0.5s, --stop-2 0.5s, --stop-3 0.5s, --stop-4 0.5s, --stop-5 0.5s;
          }

          .gtr-gradient-btn::before {
            content: '';
            position: absolute;
            inset: 0;
            border-radius: inherit;
            padding: 1px;
            background: linear-gradient(var(--border-angle), var(--border-color-1), var(--border-color-2));
            mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            mask-composite: exclude;
            pointer-events: none;
          }

          .gtr-gradient-btn span { position: relative; z-index: 1; }

          /* ── GREEN variant ── */
          .gtr-gradient-btn-green {
            --color-1: #001a0e;
            --color-2: #003d1f;
            --color-3: #016634;
            --color-4: #01b359;
            --color-5: #02E88C;
            --border-color-1: hsla(154, 100%, 45%, 0.25);
            --border-color-2: hsla(154, 100%, 45%, 0.7);
            background: radial-gradient(
              var(--spread-x) var(--spread-y) at var(--pos-x) var(--pos-y),
              var(--color-1) var(--stop-1),
              var(--color-2) var(--stop-2),
              var(--color-3) var(--stop-3),
              var(--color-4) var(--stop-4),
              var(--color-5) var(--stop-5)
            );
          }
          .gtr-gradient-btn-green:hover {
            --pos-x: 0%;
            --pos-y: 91%;
            --spread-x: 120%;
            --spread-y: 103%;
            --color-1: #02E88C;
            --color-2: #01c478;
            --color-3: #019a5c;
            --color-4: #004d29;
            --color-5: #001208;
            --border-angle: 190deg;
            --border-color-1: hsla(154, 100%, 80%, 0.1);
            --border-color-2: hsla(154, 100%, 75%, 0.65);
            --stop-1: 0%;
            --stop-2: 9%;
            --stop-3: 21%;
            --stop-4: 71%;
            --stop-5: 86%;
          }

          /* ── CYAN variant ── */
          .gtr-gradient-btn-cyan {
            --color-1: #001219;
            --color-2: #002d3d;
            --color-3: #015470;
            --color-4: #0199cc;
            --color-5: #25CDF7;
            --border-color-1: hsla(194, 91%, 60%, 0.25);
            --border-color-2: hsla(194, 91%, 60%, 0.7);
            background: radial-gradient(
              var(--spread-x) var(--spread-y) at var(--pos-x) var(--pos-y),
              var(--color-1) var(--stop-1),
              var(--color-2) var(--stop-2),
              var(--color-3) var(--stop-3),
              var(--color-4) var(--stop-4),
              var(--color-5) var(--stop-5)
            );
          }
          .gtr-gradient-btn-cyan:hover {
            --pos-x: 0%;
            --pos-y: 91%;
            --spread-x: 120%;
            --spread-y: 103%;
            --color-1: #25CDF7;
            --color-2: #00aad4;
            --color-3: #007fa0;
            --color-4: #003d52;
            --color-5: #000e14;
            --border-angle: 190deg;
            --border-color-1: hsla(194, 91%, 85%, 0.1);
            --border-color-2: hsla(194, 91%, 80%, 0.65);
            --stop-1: 0%;
            --stop-2: 9%;
            --stop-3: 21%;
            --stop-4: 71%;
            --stop-5: 86%;
          }

          @property --pos-x { syntax: '<percentage>'; initial-value: 11.14%; inherits: false; }
          @property --pos-y { syntax: '<percentage>'; initial-value: 140%; inherits: false; }
          @property --spread-x { syntax: '<percentage>'; initial-value: 150%; inherits: false; }
          @property --spread-y { syntax: '<percentage>'; initial-value: 180%; inherits: false; }
          @property --color-1 { syntax: '<color>'; initial-value: #000; inherits: false; }
          @property --color-2 { syntax: '<color>'; initial-value: #000; inherits: false; }
          @property --color-3 { syntax: '<color>'; initial-value: #000; inherits: false; }
          @property --color-4 { syntax: '<color>'; initial-value: #000; inherits: false; }
          @property --color-5 { syntax: '<color>'; initial-value: #000; inherits: false; }
          @property --border-angle { syntax: '<angle>'; initial-value: 20deg; inherits: true; }
          @property --border-color-1 { syntax: '<color>'; initial-value: transparent; inherits: true; }
          @property --border-color-2 { syntax: '<color>'; initial-value: transparent; inherits: true; }
          @property --stop-1 { syntax: '<percentage>'; initial-value: 37%; inherits: false; }
          @property --stop-2 { syntax: '<percentage>'; initial-value: 61%; inherits: false; }
          @property --stop-3 { syntax: '<percentage>'; initial-value: 78%; inherits: false; }
          @property --stop-4 { syntax: '<percentage>'; initial-value: 89%; inherits: false; }
          @property --stop-5 { syntax: '<percentage>'; initial-value: 100%; inherits: false; }
        `,
              }),
              (0, a.jsx)("button", {
                ref: s,
                className: `gtr-gradient-btn ${
                  "cyan" === t
                    ? "gtr-gradient-btn-cyan"
                    : "gtr-gradient-btn-green"
                } ${e ?? ""}`,
                ...i,
                children: (0, a.jsx)("span", { children: r }),
              }),
            ],
          })
      );
    eb.displayName = "GradientButton";
    let ey = () => {
        let e = (0, i.useRef)(null),
          t = eh(e, { once: !0, margin: "-80px" });
        return (0, a.jsxs)("section", {
          className: "w-full relative pt-[96px] pb-[96px] overflow-hidden",
          children: [
            (0, a.jsxs)("div", {
              className: "absolute inset-0 pointer-events-none",
              children: [
                (0, a.jsx)("div", {
                  className: "absolute inset-0",
                  style: {
                    background:
                      "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(61,27,255,0.13) 0%, transparent 65%)",
                  },
                }),
                (0, a.jsx)("div", {
                  className: "absolute inset-0",
                  style: {
                    background:
                      "radial-gradient(ellipse 50% 40% at 50% 80%, rgba(2,232,140,0.07) 0%, transparent 60%)",
                  },
                }),
              ],
            }),
            (0, a.jsxs)("div", {
              ref: e,
              className:
                "w-[90%] lg:w-[79%] max-w-[1195px] mx-auto flex flex-col items-center text-center gap-6",
              children: [
                (0, a.jsxs)(d.motion.div, {
                  initial: { opacity: 0, y: 30 },
                  animate: t ? { opacity: 1, y: 0 } : {},
                  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
                  className:
                    "w-full text-[36px] lg:text-[56px] leading-[106%] lg:leading-[117%] tracking-[-2.4px] lg:tracking-[-0.68px] font-semibold",
                  children: [
                    (0, a.jsx)("div", { children: "Stop trading alone." }),
                    (0, a.jsx)("div", {
                      style: {
                        background:
                          "linear-gradient(91deg, #02E88C 0%, #25CDF7 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      },
                      children: "Trade with your Inner Circle.",
                    }),
                  ],
                }),
                (0, a.jsx)(d.motion.p, {
                  initial: { opacity: 0, y: 20 },
                  animate: t ? { opacity: 1, y: 0 } : {},
                  transition: {
                    duration: 0.7,
                    delay: 0.15,
                    ease: [0.22, 1, 0.36, 1],
                  },
                  className:
                    "text-sm lg:text-[18px] leading-[157%] lg:leading-[160%] w-[95%] lg:w-[55%] font-medium text-[#A4ABC1]",
                  children:
                    "Join 4,000+ traders already on GTR. Every market. Every friend. One terminal.",
                }),
                (0, a.jsx)(d.motion.div, {
                  initial: { opacity: 0, y: 16 },
                  animate: t ? { opacity: 1, y: 0 } : {},
                  transition: {
                    duration: 0.6,
                    delay: 0.28,
                    ease: [0.22, 1, 0.36, 1],
                  },
                  className: "mt-4",
                  children: (0, a.jsx)(eb, {
                    variant: "cyan",
                    onClick: () => {
                      window.location.href = "/trade/crypto-perps/BTC/";
                    },
                    children: "Start Trading Now",
                  }),
                }),
              ],
            }),
          ],
        });
      },
      ev = [
        {
          src: "/clan-metrics.png",
          label: "Clan Metrics",
          desc: "Volume, multipliers & invite code",
        },
        {
          src: "/clan-screenshot.png",
          label: "Clan Leaderboard",
          desc: "Track your clan's top traders",
        },
        {
          src: "/clan-affiliate.png",
          label: "Affiliate Dashboard",
          desc: "Invite & earn 50% fees back",
        },
      ],
      ew = () => {
        let [e, t] = (0, i.useState)(0);
        return (0, a.jsx)("div", {
          className: "flex gap-3 items-end",
          style: { height: "517px" },
          children: ev.map((r, i) => {
            let s = e === i;
            return (0, a.jsx)(
              "div",
              {
                onClick: () => t(i),
                onMouseEnter: () => t(i),
                className: "relative cursor-pointer shrink-0",
                style: {
                  width: s ? "260px" : "64px",
                  height: "517px",
                  transition: "width 0.55s cubic-bezier(0.4,0,0.2,1)",
                },
                children: (0, a.jsx)("div", {
                  className: "w-full h-full rounded-[32px] p-[1.5px]",
                  style: {
                    background: s
                      ? "linear-gradient(160deg, #02E88C77 0%, #02E88C33 40%, #ffffff15 70%, #02E88C33 100%)"
                      : "linear-gradient(160deg, #ffffff50 0%, #ffffff28 100%)",
                    transition: "background 0.4s",
                  },
                  children: (0, a.jsxs)("div", {
                    className:
                      "relative w-full h-full rounded-[31px] overflow-hidden",
                    style: {
                      background: "#060809",
                      boxShadow: s
                        ? "0 0 40px rgba(2,232,140,0.13), 0 24px 60px rgba(0,0,0,0.65)"
                        : "0 8px 24px rgba(0,0,0,0.4)",
                      transition: "box-shadow 0.4s",
                    },
                    children: [
                      s &&
                        (0, a.jsx)("div", {
                          className:
                            "absolute top-0 left-1/2 -translate-x-1/2 z-20 w-14 h-5 bg-[#060809] rounded-b-2xl",
                        }),
                      (0, a.jsx)("img", {
                        src: r.src,
                        alt: r.label,
                        className: "absolute inset-0 w-full h-full",
                        style: {
                          objectFit: "contain",
                          objectPosition: "top center",
                          opacity: s ? 1 : 0.45,
                          transition: "opacity 0.5s",
                          filter: s ? "none" : "saturate(0.4) brightness(0.7)",
                        },
                        onError: (e) => {
                          e.target.style.display = "none";
                        },
                      }),
                      (0, a.jsx)("div", {
                        className:
                          "absolute top-0 left-0 right-0 h-16 z-10 pointer-events-none",
                        style: {
                          background:
                            "linear-gradient(to bottom, rgba(255,255,255,0.04), transparent)",
                        },
                      }),
                      !s &&
                        (0, a.jsx)("div", {
                          className:
                            "absolute inset-0 z-20 flex items-center justify-center pointer-events-none",
                          children: (0, a.jsx)("span", {
                            style: {
                              writingMode: "vertical-rl",
                              textOrientation: "mixed",
                              transform: "rotate(180deg)",
                              fontSize: "10px",
                              fontWeight: 600,
                              letterSpacing: "0.12em",
                              color: "rgba(255,255,255,0.55)",
                              textTransform: "uppercase",
                              userSelect: "none",
                            },
                            children: r.label,
                          }),
                        }),
                    ],
                  }),
                }),
              },
              r.label
            );
          }),
        });
      },
      ej = () =>
        (0, a.jsxs)("div", {
          className: "w-full relative overflow-hidden pt-[96px] pb-[96px]",
          children: [
            (0, a.jsx)("div", {
              className: "absolute inset-0 pointer-events-none",
              style: {
                background:
                  "radial-gradient(ellipse at 70% 50%, rgba(2,232,140,0.07) 0%, transparent 55%)",
              },
            }),
            (0, a.jsx)("div", {
              className: "w-[90%] lg:w-[79%] max-w-[1195px] mx-auto",
              children: (0, a.jsxs)("div", {
                className: "flex flex-col lg:flex-row items-center gap-12",
                children: [
                  (0, a.jsxs)("div", {
                    className: "w-full lg:w-[42%] flex flex-col gap-6 shrink-0",
                    children: [
                      (0, a.jsxs)("div", {
                        className: "flex flex-col gap-2",
                        children: [
                          (0, a.jsx)("span", {
                            className:
                              "text-[#02E88C] text-[13.8px] font-semibold tracking-[0.18em] uppercase",
                            children: "Clans",
                          }),
                          (0, a.jsx)("h2", {
                            className:
                              "text-white font-bold text-[32px] lg:text-[44px] leading-[115%]",
                            children: "Build the next great trading circle",
                          }),
                        ],
                      }),
                      (0, a.jsx)("p", {
                        className:
                          "text-[#A4ABC1] text-sm lg:text-base leading-[165%]",
                        children:
                          "Clans are GTR's trading circles. Rally your people, share fee revenue, climb the leaderboard together, and compete against other groups. Hedge fund energy—without the suit.",
                      }),
                      (0, a.jsx)("style", {
                        children: `
              @keyframes bounce-y { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-3px)} }
              @keyframes trophy-rock { 0%,100%{transform:rotate(0deg)} 25%{transform:rotate(-10deg)} 75%{transform:rotate(10deg)} }
              @keyframes spin-gift { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
            `,
                      }),
                      (0, a.jsx)("div", {
                        className: "flex flex-col gap-3",
                        children: [
                          {
                            icon: "💰",
                            anim: "bounce-y 1.4s ease-in-out infinite",
                            label: "Shared Fee Revenue",
                            sub: "Earn a cut of every trade your clan makes",
                            accent: !0,
                          },
                          {
                            icon: "🏆",
                            anim: "trophy-rock 2s ease-in-out infinite",
                            label: "Clan Leaderboards",
                            sub: "Compete against other clans for top spot",
                            accent: !1,
                          },
                          {
                            icon: "👥",
                            anim: "bounce-y 1.8s ease-in-out infinite",
                            label: "Trade as a Group",
                            sub: "Copy, coordinate, and execute together",
                            accent: !0,
                          },
                          {
                            icon: "🎁",
                            anim: "spin-gift 4s linear infinite",
                            label: "Airdrop Rewards",
                            sub: "Exclusive drops for active clan members",
                            accent: !1,
                          },
                        ].map((e) =>
                          (0, a.jsxs)(
                            "div",
                            {
                              className:
                                "flex items-center gap-4 px-4 py-3 rounded-2xl",
                              style: e.accent
                                ? {
                                    background: "rgba(2,232,140,0.06)",
                                    border: "1px solid rgba(2,232,140,0.15)",
                                  }
                                : {
                                    background: "rgba(255,255,255,0.03)",
                                    border: "1px solid rgba(255,255,255,0.06)",
                                  },
                              children: [
                                (0, a.jsx)("div", {
                                  className:
                                    "w-10 h-10 rounded-xl flex items-center justify-center shrink-0 text-lg",
                                  style: e.accent
                                    ? { background: "rgba(2,232,140,0.12)" }
                                    : { background: "rgba(255,255,255,0.05)" },
                                  children: (0, a.jsx)("span", {
                                    style: {
                                      animation: e.anim,
                                      display: "inline-block",
                                    },
                                    children: e.icon,
                                  }),
                                }),
                                (0, a.jsxs)("div", {
                                  children: [
                                    (0, a.jsx)("p", {
                                      className:
                                        "text-white text-sm font-semibold leading-tight",
                                      children: e.label,
                                    }),
                                    (0, a.jsx)("p", {
                                      className:
                                        "text-[#A4ABC1] text-xs leading-[150%] mt-0.5",
                                      children: e.sub,
                                    }),
                                  ],
                                }),
                              ],
                            },
                            e.label
                          )
                        ),
                      }),
                      (0, a.jsx)("div", {
                        className: "w-fit",
                        children: (0, a.jsx)(eb, {
                          variant: "green",
                          onClick: () => {
                            window.location.href = "/clans";
                          },
                          children: "Create a Clan",
                        }),
                      }),
                    ],
                  }),
                  (0, a.jsx)("div", {
                    className:
                      "w-full lg:w-[58%] flex justify-center items-center",
                    children: (0, a.jsx)(ew, {}),
                  }),
                ],
              }),
            }),
          ],
        }),
      ek = () =>
        (0, a.jsxs)("div", {
          className: "border-t border-t-ash pt-4 pb-12",
          children: [
            (0, a.jsx)("div", {
              className: "text-xs font-medium leading-[166%] text-white",
              children: "Disclaimer & Disclosure",
            }),
            (0, a.jsx)("div", {
              className: "text-xs font-normal leading-[166%] text-slate-900",
              children:
                "GTR.Trade is a decentralized platform that provides non-custodial wallet. We do not hold or control your funds; all assets in your wallet are owned and managed solely by you. GTR.Trade facilitates decentralized swaps but does not influence transactions or prices. Cryptocurrencies are volatile, and users should be aware of potential losses. Fees may fluctuate based on blockchain conditions. GTR.Trade uses third-party onramp services for fiat transactions, but we do not access or store user data. We do not provide financial advice, and all decisions made with GTR.Trade are the user's responsibility. Always secure your private keys as GTR.Trade cannot recover them. GTR.Trade is not available to users in jurisdictions where its usage is restricted by law.",
            }),
          ],
        });
    function eN() {
      let e = (0, i.useRef)(null);
      return (
        (0, i.useEffect)(() => {
          let t,
            r = e.current;
          if (!r) return;
          let a = r.getContext("2d");
          if (!a) return;
          let i = () => {
            (r.width = window.innerWidth), (r.height = window.innerHeight);
          };
          i(), window.addEventListener("resize", i);
          let s = Array.from({ length: 120 }, () => ({
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              r: 0.8 + 1.6 * Math.random(),
              speed: 0.12 + 0.25 * Math.random(),
              drift: (Math.random() - 0.5) * 0.18,
              alpha: 0.15 + 0.35 * Math.random(),
              hue: 160 + 60 * Math.random(),
              pulse: Math.random() * Math.PI * 2,
            })),
            n = () => {
              let e = r.width,
                i = r.height;
              for (let t of (a.clearRect(0, 0, e, i), s)) {
                (t.y -= t.speed),
                  (t.x += t.drift),
                  (t.pulse += 0.012),
                  t.y < -4 && ((t.y = i + 4), (t.x = Math.random() * e)),
                  t.x < -4 && (t.x = e + 4),
                  t.x > e + 4 && (t.x = -4);
                let r = t.alpha * (0.7 + 0.3 * Math.sin(t.pulse));
                a.beginPath(),
                  a.arc(t.x, t.y, t.r, 0, 2 * Math.PI),
                  (a.fillStyle = `hsla(${t.hue}, 80%, 65%, ${r})`),
                  a.fill();
              }
              t = requestAnimationFrame(n);
            };
          return (
            n(),
            () => {
              cancelAnimationFrame(t), window.removeEventListener("resize", i);
            }
          );
        }, []),
        (0, a.jsx)("canvas", {
          ref: e,
          style: {
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            zIndex: 0,
            pointerEvents: "none",
          },
        })
      );
    }
    let eC = ({ titleComponent: e, children: t }) => {
        let r = (0, i.useRef)(null),
          { scrollYProgress: s } = ee({
            target: r,
            offset: ["start end", "end start"],
          }),
          [n, l] = i.default.useState(!1);
        i.default.useEffect(() => {
          let e = () => {
            l(window.innerWidth <= 768);
          };
          return (
            e(),
            window.addEventListener("resize", e),
            () => {
              window.removeEventListener("resize", e);
            }
          );
        }, []);
        let o = eo(s, [0, 0.5], [20, 0]),
          c = eo(s, [0, 0.5], n ? [0.85, 1] : [0.9, 1]);
        return (0, a.jsx)("div", {
          className: "flex items-center justify-center relative w-full",
          ref: r,
          children: (0, a.jsxs)("div", {
            className: "w-full relative",
            style: { perspective: "1200px" },
            children: [
              (0, a.jsx)(eE, { titleComponent: e }),
              (0, a.jsx)(eT, { rotate: o, scale: c, children: t }),
            ],
          }),
        });
      },
      eE = ({ titleComponent: e }) =>
        (0, a.jsx)("div", {
          className: "max-w-5xl mx-auto text-center",
          children: e,
        }),
      eT = ({ rotate: e, scale: t, children: r }) =>
        (0, a.jsx)(d.motion.div, {
          style: { rotateX: e, scale: t, transformOrigin: "center top" },
          className: "w-full",
          children: r,
        });
    var eS = e.i(974010);
    let eR = {
        src: e.i(622879).default,
        width: 135,
        height: 40,
        blurWidth: 0,
        blurHeight: 0,
      },
      eW = {
        src: e.i(169143).default,
        width: 162,
        height: 54,
        blurWidth: 0,
        blurHeight: 0,
      };
    var eA = e.i(618566);
    let ez = () => {
        let e = (0, eA.useSearchParams)().get("ref"),
          t = (0, eA.useRouter)();
        return (0, a.jsx)(a.Fragment, {
          children: (0, eS.checkIsMobile)()
            ? (0, a.jsx)(a.Fragment, {
                children:
                  "iOS" === (0, eS.detectDevice)()
                    ? (0, a.jsx)("div", {
                        className: "flex justify-center z-[1]",
                        children: (0, a.jsx)(o.default, {
                          src: eW,
                          alt: "app",
                          onClick: () => {
                            navigator.clipboard.writeText(e || "").then(() => {
                              window.location.href =
                                "https://apps.apple.com/app/id6698866243";
                            });
                          },
                        }),
                      })
                    : (0, a.jsx)("div", {
                        className: "flex justify-center z-[1]",
                        children: (0, a.jsx)(o.default, {
                          src: eR,
                          alt: "app",
                          onClick: () => {
                            navigator.clipboard.writeText(e || "").then(() => {
                              window.location.href =
                                "https://play.google.com/store/apps/details?id=com.dev_getrabbit.getrabbitapp";
                            });
                          },
                        }),
                      }),
              })
            : (0, a.jsx)("button", {
                onClick: () => t.push("/trade/crypto-perps/BTC"),
                className:
                  "px-8 py-3 rounded-xl text-white font-bold text-base tracking-wide transition-all duration-300 hover:scale-105 hover:brightness-110",
                style: {
                  background:
                    "linear-gradient(135deg, #2563EB 0%, #4F46E5 100%)",
                },
                children: "Start Trading",
              }),
        });
      },
      eM = [
        {
          prefix: "$",
          target: 80,
          suffix: "M+",
          label: "Volume Traded",
          duration: 2e3,
        },
        {
          prefix: "",
          target: 2e3,
          suffix: "+",
          label: "Active Traders",
          duration: 2200,
        },
        {
          prefix: "",
          target: 5,
          suffix: "",
          label: "Markets in One App",
          duration: 1200,
        },
      ],
      eB = ({ stat: e, started: t, isLast: r }) => {
        let s = ((e, t, r) => {
          let [a, s] = (0, i.useState)(0);
          return (
            (0, i.useEffect)(() => {
              if (!r) return;
              let a = null,
                i = (r) => {
                  a || (a = r);
                  let n = Math.min((r - a) / t, 1);
                  s(Math.floor((1 - Math.pow(1 - n, 3)) * e)),
                    n < 1 && requestAnimationFrame(i);
                };
              requestAnimationFrame(i);
            }, [r, e, t]),
            a
          );
        })(e.target, e.duration, t);
        return (0, a.jsxs)("div", {
          className: "flex items-center gap-4",
          children: [
            (0, a.jsxs)("div", {
              className: "flex items-center gap-1.5",
              children: [
                (0, a.jsxs)(d.motion.span, {
                  initial: { opacity: 0 },
                  animate: t ? { opacity: 1 } : {},
                  transition: { duration: 0.6 },
                  className: "text-sm font-semibold",
                  style: {
                    background:
                      "linear-gradient(91deg, #02E88C 0%, #25CDF7 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  },
                  children: [e.prefix, s.toLocaleString(), e.suffix],
                }),
                (0, a.jsx)(d.motion.span, {
                  initial: { opacity: 0 },
                  animate: t ? { opacity: 1 } : {},
                  transition: { duration: 0.6, delay: 0.2 },
                  className: "text-sm text-neutral-400 font-medium",
                  children: e.label,
                }),
              ],
            }),
            !r &&
              (0, a.jsx)("span", {
                className: "text-neutral-600 text-sm",
                children: "·",
              }),
          ],
        });
      },
      eF = () => {
        let e = (0, i.useRef)(null),
          [t, r] = (0, i.useState)(!1);
        return (
          (0, i.useEffect)(() => {
            let t = new IntersectionObserver(
              ([e]) => {
                e.isIntersecting && r(!0);
              },
              { threshold: 0.4 }
            );
            return e.current && t.observe(e.current), () => t.disconnect();
          }, []),
          (0, a.jsx)("div", {
            ref: e,
            className: "w-full mb-8",
            children: (0, a.jsxs)(d.motion.div, {
              initial: { opacity: 0, y: 8 },
              animate: t ? { opacity: 1, y: 0 } : {},
              transition: { duration: 0.8 },
              className:
                "flex flex-wrap items-center justify-center gap-3 text-sm text-neutral-400",
              children: [
                (0, a.jsxs)("div", {
                  className: "flex items-center gap-1.5",
                  children: [
                    (0, a.jsx)("span", {
                      className: "font-medium",
                      children: "Powered By",
                    }),
                    (0, a.jsx)("img", {
                      src: "https://hyperliquid.xyz/icon.png",
                      alt: "Hyperliquid",
                      className: "h-4 w-4 opacity-80",
                      onError: (e) => {
                        e.target.style.display = "none";
                      },
                    }),
                    (0, a.jsxs)("span", {
                      className: "text-white/80 text-sm",
                      children: [
                        (0, a.jsx)("span", {
                          className: "font-normal",
                          children: "Hyper",
                        }),
                        (0, a.jsx)("span", {
                          className: "italic font-normal",
                          children: "liquid",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, a.jsx)("span", {
                  className: "text-neutral-600",
                  children: "·",
                }),
                eM.map((e, r) =>
                  (0, a.jsx)(
                    eB,
                    { stat: e, started: t, isLast: r === eM.length - 1 },
                    r
                  )
                ),
              ],
            }),
          })
        );
      },
      eL = () => {
        let [e, t] = (0, i.useState)(f[0]),
          [r, s] = (0, i.useState)(!0),
          [n, l] = (0, i.useState)(0);
        (0, i.useEffect)(() => {
          let e = () => s(window.innerWidth < 1024);
          return (
            e(),
            window.addEventListener("resize", e),
            () => window.removeEventListener("resize", e)
          );
        }, []);
        let p = (0, i.useMemo)(
          () => ["Memecoins", "Stock Perps", "Predictions", "Crypto Perps"],
          []
        );
        return (
          (0, i.useEffect)(() => {
            let e = setTimeout(() => {
              n === p.length - 1 ? l(0) : l(n + 1);
            }, 2e3);
            return () => clearTimeout(e);
          }, [n, p]),
          (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)(eN, {}),
              (0, a.jsx)("div", {
                className: "relative pt-8",
                style: { zIndex: 1 },
                children: (0, a.jsxs)("div", {
                  className:
                    "relative w-[90%] lg:w-[79%] max-w-[1195px] mx-auto",
                  children: [
                    (0, a.jsx)("div", {
                      className: "lg:hidden flex justify-center pt-[40px] pb-5",
                      children: (0, a.jsx)(o.default, {
                        src: c.default,
                        alt: "GTR Logo",
                        width: 150,
                        priority: !0,
                      }),
                    }),
                    (0, a.jsxs)("div", {
                      className: "flex flex-col items-center pt-8 pb-6",
                      children: [
                        (0, a.jsxs)("div", {
                          className:
                            "w-full text-center xl:mt-10 flex flex-col items-center gap-2",
                          children: [
                            (0, a.jsxs)("div", {
                              className:
                                "font-semibold leading-[110%] tracking-[-1.5px] lg:tracking-[-0.68px] w-full",
                              style: { fontSize: "clamp(28px, 6.5vw, 58px)" },
                              children: [
                                (0, a.jsx)("span", {
                                  className: "text-white",
                                  children: "Make money on ",
                                }),
                                (0, a.jsxs)("span", {
                                  className: "relative inline-block",
                                  style: { verticalAlign: "bottom" },
                                  children: [
                                    (0, a.jsx)("span", {
                                      className:
                                        "invisible font-semibold whitespace-nowrap",
                                      children: "$Crypto Perps",
                                    }),
                                    p.map((e, t) =>
                                      (0, a.jsxs)(
                                        d.motion.span,
                                        {
                                          className:
                                            "absolute left-0 top-0 h-full flex items-center font-semibold bg-[linear-gradient(91deg,#02E88C_0%,#25CDF7_100%)] bg-clip-text text-transparent whitespace-nowrap",
                                          initial: { opacity: 0, y: 40 },
                                          transition: {
                                            type: "spring",
                                            stiffness: 60,
                                            damping: 14,
                                          },
                                          animate:
                                            n === t
                                              ? { y: 0, opacity: 1 }
                                              : {
                                                  y: n > t ? -40 : 40,
                                                  opacity: 0,
                                                },
                                          children: ["$", e],
                                        },
                                        t
                                      )
                                    ),
                                  ],
                                }),
                              ],
                            }),
                            (0, a.jsx)("div", {
                              className:
                                "text-white/60 font-medium tracking-[-0.3px] leading-[130%]",
                              style: { fontSize: "clamp(15px, 3.5vw, 34px)" },
                              children: "Trade with your Inner Circle",
                            }),
                          ],
                        }),
                        (0, a.jsx)("div", {
                          className:
                            "text-base lg:text-[20px] leading-[157%] lg:leading-[160%] w-[95%] lg:w-[75%] text-center font-medium pt-8 text-[#A4ABC1]",
                          children:
                            "GTR is a social trading platform to trade Crypto Perps, Stocks, Memes, & Prediction Markets alongside the best traders in real time. Your P&L is your reputation.",
                        }),
                        (0, a.jsx)("div", {
                          className: "py-12",
                          children: (0, a.jsx)(ez, {}),
                        }),
                        (0, a.jsx)(eF, {}),
                        (0, a.jsx)(eC, {
                          titleComponent: (0, a.jsx)(a.Fragment, {}),
                          children: (0, a.jsx)("div", {
                            className: "relative w-full",
                            style: {
                              padding: "1.5px",
                              borderRadius: "16px",
                              backgroundImage:
                                "linear-gradient(180deg, rgba(99,102,241,0.9) 0%, rgba(124,58,237,0.5) 40%, transparent 80%)",
                            },
                            children: (0, a.jsxs)("div", {
                              className: "relative w-full",
                              style: {
                                borderRadius: "14px",
                                background: "#080a0d",
                              },
                              children: [
                                (0, a.jsx)("div", {
                                  style: {
                                    position: "absolute",
                                    top: "-80px",
                                    left: "50%",
                                    transform: "translateX(-50%)",
                                    width: "70%",
                                    height: "240px",
                                    background:
                                      "radial-gradient(ellipse at center, rgba(79,70,229,0.94) 0%, rgba(99,102,241,0.5) 40%, transparent 70%)",
                                    filter: "blur(30px)",
                                    pointerEvents: "none",
                                    zIndex: 1,
                                  },
                                }),
                                (0, a.jsxs)("div", {
                                  className:
                                    "relative flex items-center justify-center",
                                  style: {
                                    height: "clamp(280px, 50vw, 700px)",
                                  },
                                  children: [
                                    (0, a.jsx)("div", {
                                      className:
                                        "absolute max-[450px]:hidden left-1/2 z-0 max-w-[450px] top-[30%] lg:top-[20%] w-[70%] lg:w-2/5 h-4/5 lg:h-1/2 rounded-full bg-[#3D1BFF]",
                                      style: {
                                        filter: "blur(114px)",
                                        transform: "translate(-50%, -50%)",
                                        opacity: 0.6,
                                      },
                                    }),
                                    (0, a.jsxs)("div", {
                                      className: "relative z-10",
                                      style: {
                                        height: "100%",
                                        width: "auto",
                                        maxWidth: "100%",
                                      },
                                      children: [
                                        (0, a.jsx)("img", {
                                          src: "/heroimage.png",
                                          alt: "Home ScreenShot",
                                          style: {
                                            height: "100%",
                                            width: "auto",
                                            maxWidth: "100%",
                                          },
                                          loading: "lazy",
                                        }),
                                        (0, a.jsx)("div", {
                                          style: {
                                            position: "absolute",
                                            top: 0,
                                            right: 0,
                                            width: "25%",
                                            height: "100%",
                                            background:
                                              "linear-gradient(to right, transparent 0%, #080a0d 100%)",
                                            pointerEvents: "none",
                                            zIndex: 11,
                                          },
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                        }),
                        (0, a.jsx)("div", {
                          className:
                            "w-full flex justify-center pt-[40px] pb-2",
                          children: (0, a.jsx)("div", {
                            className: "relative w-full rounded-2xl p-[1px]",
                            style: {
                              background:
                                "linear-gradient(135deg, #02E88C40 0%, #02E88C15 50%, #1B1E2600 100%)",
                              boxShadow: "0 0 40px rgba(2,232,140,0.06)",
                            },
                            children: (0, a.jsxs)("div", {
                              className:
                                "relative rounded-2xl bg-[#0b0e12] px-6 py-5 flex items-center gap-4 overflow-hidden",
                              children: [
                                (0, a.jsx)("div", {
                                  className:
                                    "absolute -left-6 top-0 bottom-0 w-32 pointer-events-none",
                                  style: {
                                    background:
                                      "radial-gradient(ellipse at left center, rgba(2,232,140,0.10) 0%, transparent 70%)",
                                  },
                                }),
                                (0, a.jsxs)("div", {
                                  className:
                                    "shrink-0 w-10 h-10 rounded-xl bg-[#0d1410] border border-[#02E88C22] flex items-center justify-center z-10 overflow-hidden",
                                  children: [
                                    (0, a.jsx)("style", {
                                      children: `
                      @keyframes bar1 { 0%,100%{height:5px} 50%{height:13px} }
                      @keyframes bar2 { 0%,100%{height:11px} 50%{height:5px} }
                      @keyframes bar3 { 0%,100%{height:7px} 33%{height:15px} 66%{height:3px} }
                      @keyframes bar4 { 0%,100%{height:13px} 50%{height:7px} }
                    `,
                                    }),
                                    (0, a.jsxs)("div", {
                                      className: "flex items-end gap-[3px]",
                                      children: [
                                        (0, a.jsx)("div", {
                                          style: {
                                            width: 3,
                                            background: "#02E88C",
                                            borderRadius: 2,
                                            animation:
                                              "bar1 1.2s ease-in-out infinite",
                                          },
                                        }),
                                        (0, a.jsx)("div", {
                                          style: {
                                            width: 3,
                                            background: "#02E88Caa",
                                            borderRadius: 2,
                                            animation:
                                              "bar2 1s ease-in-out infinite",
                                          },
                                        }),
                                        (0, a.jsx)("div", {
                                          style: {
                                            width: 3,
                                            background: "#02E88C",
                                            borderRadius: 2,
                                            animation:
                                              "bar3 1.4s ease-in-out infinite",
                                          },
                                        }),
                                        (0, a.jsx)("div", {
                                          style: {
                                            width: 3,
                                            background: "#02E88Caa",
                                            borderRadius: 2,
                                            animation:
                                              "bar4 0.9s ease-in-out infinite",
                                          },
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, a.jsxs)("p", {
                                  className:
                                    "text-base lg:text-lg leading-[160%] text-[#A4ABC1] z-10",
                                  children: [
                                    (0, a.jsx)("span", {
                                      className: "text-white font-semibold",
                                      children:
                                        "Think Robinhood meets Discord, but built for real traders.",
                                    }),
                                    " ",
                                    "GTR combines a professional trading terminal with live social feeds, clan leaderboards, and group trading. Your edge is your circle.",
                                  ],
                                }),
                              ],
                            }),
                          }),
                        }),
                        (0, a.jsxs)("div", {
                          className:
                            "pt-[80px] flex flex-col items-center justify-center gap-4",
                          children: [
                            (0, a.jsxs)("svg", {
                              width: "40",
                              height: "36",
                              viewBox: "0 0 40 36",
                              fill: "none",
                              xmlns: "http://www.w3.org/2000/svg",
                              children: [
                                (0, a.jsx)("path", {
                                  d: "M15 1C15 1 16.4 9.8 19 12.5C21.6 15.2 30 17 30 17C30 17 21.6 18.8 19 21.5C16.4 24.2 15 33 15 33C15 33 13.6 24.2 11 21.5C8.4 18.8 0 17 0 17C0 17 8.4 15.2 11 12.5C13.6 9.8 15 1 15 1Z",
                                  fill: "#02E88C",
                                }),
                                (0, a.jsx)("path", {
                                  d: "M32 3C32 3 32.8 7.5 34.2 9.2C35.6 10.9 40 12 40 12C40 12 35.6 13.1 34.2 14.8C32.8 16.5 32 21 32 21C32 21 31.2 16.5 29.8 14.8C28.4 13.1 24 12 24 12C24 12 28.4 10.9 29.8 9.2C31.2 7.5 32 3 32 3Z",
                                  fill: "#02E88C",
                                }),
                              ],
                            }),
                            (0, a.jsx)("span", {
                              className:
                                "text-[#02E88C] text-[13.8px] font-semibold tracking-[0.18em] uppercase",
                              children: "Social-First Trading",
                            }),
                            (0, a.jsx)("p", {
                              className:
                                "text-white text-center font-semibold text-[32px] lg:text-[44px] leading-[115%]",
                              children:
                                "Trade Alongside elite traders with Social Feeds",
                            }),
                            (0, a.jsx)("p", {
                              className:
                                "text-center font-medium text-sm lg:text-xl leading-[140%]",
                              children:
                                "With GTR's advanced real-time terminal",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, a.jsx)("div", {
                className: "w-[90%] lg:w-[79%] max-w-[1195px] mx-auto",
                children: (0, a.jsx)(ex, {
                  selectedCard: e,
                  setSelectedCard: t,
                }),
              }),
              (0, a.jsx)(ej, {}),
              (0, a.jsx)(em, {}),
              (0, a.jsx)(ey, {}),
              (0, a.jsx)("div", {
                className:
                  "mt-[96px] w-full bg-gradient-to-b from-[#0D0636] to-black via-black",
                children: (0, a.jsx)("div", {
                  className:
                    "w-[90%] lg:w-[79%] max-w-[1195px] mx-auto py-[50px] lg:py-[80px]",
                  children: (0, a.jsxs)("div", {
                    className: "mx-auto flex flex-col lg:flex-row gap-2",
                    children: [
                      (0, a.jsx)("div", {
                        className:
                          "text-[42px] font-medium leading-[119%] w-full lg:w-2/5",
                        children: "FAQ",
                      }),
                      (0, a.jsx)("div", {
                        className: "w-full lg:w-3/5",
                        children: (0, a.jsx)(h, {}),
                      }),
                    ],
                  }),
                }),
              }),
              (0, a.jsx)("div", {
                className: "mt-[96px] w-[90%] max-w-[1195px] mx-auto",
                children: (0, a.jsx)(ek, {}),
              }),
            ],
          })
        );
      };
    var eG = e.i(442948);
    let eI = () => {
      let { authenticated: e, ready: t } = (0, s.usePrivy)(),
        r = (0, eA.useRouter)();
      return (
        (0, i.useEffect)(() => {
          (0, n.trackEvent)("Page Viewed", { page_name: "Home Page" });
        }, []),
        (0, i.useEffect)(() => {
          e && r.push("/trade/crypto-perps");
        }, [e]),
        (0, a.jsxs)("div", {
          className: "bg-black",
          children: [
            t && !e
              ? (0, a.jsx)(eL, {})
              : (0, a.jsx)("div", {
                  className: "flex justify-center items-center h-screen",
                  children: (0, a.jsx)(eG.Loader, {
                    color: "white",
                    size: "lg",
                  }),
                }),
            (0, a.jsx)("div", {
              className: "mt-6",
              children: (0, a.jsx)(l.default, { logo: !0, isFixed: !1 }),
            }),
          ],
        })
      );
    };
    function eP() {
      return (0, a.jsx)(eI, {});
    }
    e.s(["default", () => eP], 952683);
  },
]);
