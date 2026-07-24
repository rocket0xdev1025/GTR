(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  343084,
  (e) => {
    "use strict";
    let t = ["top", "right", "bottom", "left"],
      n = t.reduce((e, t) => e.concat(t, t + "-start", t + "-end"), []),
      i = Math.min,
      o = Math.max,
      r = Math.round,
      l = Math.floor,
      a = (e) => ({ x: e, y: e }),
      s = { left: "right", right: "left", bottom: "top", top: "bottom" },
      c = { start: "end", end: "start" };
    function u(e, t, n) {
      return o(e, i(t, n));
    }
    function f(e, t) {
      return "function" == typeof e ? e(t) : e;
    }
    function d(e) {
      return e.split("-")[0];
    }
    function m(e) {
      return e.split("-")[1];
    }
    function g(e) {
      return "x" === e ? "y" : "x";
    }
    function p(e) {
      return "y" === e ? "height" : "width";
    }
    let h = new Set(["top", "bottom"]);
    function y(e) {
      return h.has(d(e)) ? "y" : "x";
    }
    function w(e) {
      return g(y(e));
    }
    function v(e, t, n) {
      void 0 === n && (n = !1);
      let i = m(e),
        o = w(e),
        r = p(o),
        l =
          "x" === o
            ? i === (n ? "end" : "start")
              ? "right"
              : "left"
            : "start" === i
            ? "bottom"
            : "top";
      return t.reference[r] > t.floating[r] && (l = C(l)), [l, C(l)];
    }
    function x(e) {
      let t = C(e);
      return [b(e), t, b(t)];
    }
    function b(e) {
      return e.replace(/start|end/g, (e) => c[e]);
    }
    let S = ["left", "right"],
      A = ["right", "left"],
      E = ["top", "bottom"],
      R = ["bottom", "top"];
    function T(e, t, n, i) {
      let o = m(e),
        r = (function (e, t, n) {
          switch (e) {
            case "top":
            case "bottom":
              if (n) return t ? A : S;
              return t ? S : A;
            case "left":
            case "right":
              return t ? E : R;
            default:
              return [];
          }
        })(d(e), "start" === n, i);
      return (
        o && ((r = r.map((e) => e + "-" + o)), t && (r = r.concat(r.map(b)))), r
      );
    }
    function C(e) {
      return e.replace(/left|right|bottom|top/g, (e) => s[e]);
    }
    function L(e) {
      return "number" != typeof e
        ? { top: 0, right: 0, bottom: 0, left: 0, ...e }
        : { top: e, right: e, bottom: e, left: e };
    }
    function O(e) {
      let { x: t, y: n, width: i, height: o } = e;
      return {
        width: i,
        height: o,
        top: n,
        left: t,
        right: t + i,
        bottom: n + o,
        x: t,
        y: n,
      };
    }
    e.s([
      "clamp",
      () => u,
      "createCoords",
      () => a,
      "evaluate",
      () => f,
      "floor",
      () => l,
      "getAlignment",
      () => m,
      "getAlignmentAxis",
      () => w,
      "getAlignmentSides",
      () => v,
      "getAxisLength",
      () => p,
      "getExpandedPlacements",
      () => x,
      "getOppositeAlignmentPlacement",
      () => b,
      "getOppositeAxis",
      () => g,
      "getOppositeAxisPlacements",
      () => T,
      "getOppositePlacement",
      () => C,
      "getPaddingObject",
      () => L,
      "getSide",
      () => d,
      "getSideAxis",
      () => y,
      "max",
      () => o,
      "min",
      () => i,
      "placements",
      () => n,
      "rectToClientRect",
      () => O,
      "round",
      () => r,
      "sides",
      () => t,
    ]);
  },
  101534,
  (e) => {
    "use strict";
    var t = e.i(343084);
    function n(e, n, i) {
      let o,
        { reference: r, floating: l } = e,
        a = (0, t.getSideAxis)(n),
        s = (0, t.getAlignmentAxis)(n),
        c = (0, t.getAxisLength)(s),
        u = (0, t.getSide)(n),
        f = "y" === a,
        d = r.x + r.width / 2 - l.width / 2,
        m = r.y + r.height / 2 - l.height / 2,
        g = r[c] / 2 - l[c] / 2;
      switch (u) {
        case "top":
          o = { x: d, y: r.y - l.height };
          break;
        case "bottom":
          o = { x: d, y: r.y + r.height };
          break;
        case "right":
          o = { x: r.x + r.width, y: m };
          break;
        case "left":
          o = { x: r.x - l.width, y: m };
          break;
        default:
          o = { x: r.x, y: r.y };
      }
      switch ((0, t.getAlignment)(n)) {
        case "start":
          o[s] -= g * (i && f ? -1 : 1);
          break;
        case "end":
          o[s] += g * (i && f ? -1 : 1);
      }
      return o;
    }
    let i = async (e, t, i) => {
      let {
          placement: o = "bottom",
          strategy: r = "absolute",
          middleware: l = [],
          platform: a,
        } = i,
        s = l.filter(Boolean),
        c = await (null == a.isRTL ? void 0 : a.isRTL(t)),
        u = await a.getElementRects({ reference: e, floating: t, strategy: r }),
        { x: f, y: d } = n(u, o, c),
        m = o,
        g = {},
        p = 0;
      for (let i = 0; i < s.length; i++) {
        let { name: l, fn: h } = s[i],
          {
            x: y,
            y: w,
            data: v,
            reset: x,
          } = await h({
            x: f,
            y: d,
            initialPlacement: o,
            placement: m,
            strategy: r,
            middlewareData: g,
            rects: u,
            platform: a,
            elements: { reference: e, floating: t },
          });
        (f = null != y ? y : f),
          (d = null != w ? w : d),
          (g = { ...g, [l]: { ...g[l], ...v } }),
          x &&
            p <= 50 &&
            (p++,
            "object" == typeof x &&
              (x.placement && (m = x.placement),
              x.rects &&
                (u =
                  !0 === x.rects
                    ? await a.getElementRects({
                        reference: e,
                        floating: t,
                        strategy: r,
                      })
                    : x.rects),
              ({ x: f, y: d } = n(u, m, c))),
            (i = -1));
      }
      return { x: f, y: d, placement: m, strategy: r, middlewareData: g };
    };
    async function o(e, n) {
      var i;
      void 0 === n && (n = {});
      let { x: o, y: r, platform: l, rects: a, elements: s, strategy: c } = e,
        {
          boundary: u = "clippingAncestors",
          rootBoundary: f = "viewport",
          elementContext: d = "floating",
          altBoundary: m = !1,
          padding: g = 0,
        } = (0, t.evaluate)(n, e),
        p = (0, t.getPaddingObject)(g),
        h = s[m ? ("floating" === d ? "reference" : "floating") : d],
        y = (0, t.rectToClientRect)(
          await l.getClippingRect({
            element:
              null ==
                (i = await (null == l.isElement ? void 0 : l.isElement(h))) || i
                ? h
                : h.contextElement ||
                  (await (null == l.getDocumentElement
                    ? void 0
                    : l.getDocumentElement(s.floating))),
            boundary: u,
            rootBoundary: f,
            strategy: c,
          })
        ),
        w =
          "floating" === d
            ? { x: o, y: r, width: a.floating.width, height: a.floating.height }
            : a.reference,
        v = await (null == l.getOffsetParent
          ? void 0
          : l.getOffsetParent(s.floating)),
        x = ((await (null == l.isElement ? void 0 : l.isElement(v))) &&
          (await (null == l.getScale ? void 0 : l.getScale(v)))) || {
          x: 1,
          y: 1,
        },
        b = (0, t.rectToClientRect)(
          l.convertOffsetParentRelativeRectToViewportRelativeRect
            ? await l.convertOffsetParentRelativeRectToViewportRelativeRect({
                elements: s,
                rect: w,
                offsetParent: v,
                strategy: c,
              })
            : w
        );
      return {
        top: (y.top - b.top + p.top) / x.y,
        bottom: (b.bottom - y.bottom + p.bottom) / x.y,
        left: (y.left - b.left + p.left) / x.x,
        right: (b.right - y.right + p.right) / x.x,
      };
    }
    let r = (e) => ({
        name: "arrow",
        options: e,
        async fn(n) {
          let {
              x: i,
              y: o,
              placement: r,
              rects: l,
              platform: a,
              elements: s,
              middlewareData: c,
            } = n,
            { element: u, padding: f = 0 } = (0, t.evaluate)(e, n) || {};
          if (null == u) return {};
          let d = (0, t.getPaddingObject)(f),
            m = { x: i, y: o },
            g = (0, t.getAlignmentAxis)(r),
            p = (0, t.getAxisLength)(g),
            h = await a.getDimensions(u),
            y = "y" === g,
            w = y ? "clientHeight" : "clientWidth",
            v = l.reference[p] + l.reference[g] - m[g] - l.floating[p],
            x = m[g] - l.reference[g],
            b = await (null == a.getOffsetParent
              ? void 0
              : a.getOffsetParent(u)),
            S = b ? b[w] : 0;
          (S && (await (null == a.isElement ? void 0 : a.isElement(b)))) ||
            (S = s.floating[w] || l.floating[p]);
          let A = S / 2 - h[p] / 2 - 1,
            E = (0, t.min)(d[y ? "top" : "left"], A),
            R = (0, t.min)(d[y ? "bottom" : "right"], A),
            T = S - h[p] - R,
            C = S / 2 - h[p] / 2 + (v / 2 - x / 2),
            L = (0, t.clamp)(E, C, T),
            O =
              !c.arrow &&
              null != (0, t.getAlignment)(r) &&
              C !== L &&
              l.reference[p] / 2 - (C < E ? E : R) - h[p] / 2 < 0,
            P = O ? (C < E ? C - E : C - T) : 0;
          return {
            [g]: m[g] + P,
            data: {
              [g]: L,
              centerOffset: C - L - P,
              ...(O && { alignmentOffset: P }),
            },
            reset: O,
          };
        },
      }),
      l = function (e) {
        return (
          void 0 === e && (e = {}),
          {
            name: "autoPlacement",
            options: e,
            async fn(n) {
              var i, r, l, a;
              let {
                  rects: s,
                  middlewareData: c,
                  placement: u,
                  platform: f,
                  elements: d,
                } = n,
                {
                  crossAxis: m = !1,
                  alignment: g,
                  allowedPlacements: p = t.placements,
                  autoAlignment: h = !0,
                  ...y
                } = (0, t.evaluate)(e, n),
                w =
                  void 0 !== g || p === t.placements
                    ? ((a = g || null)
                        ? [
                            ...p.filter((e) => (0, t.getAlignment)(e) === a),
                            ...p.filter((e) => (0, t.getAlignment)(e) !== a),
                          ]
                        : p.filter((e) => (0, t.getSide)(e) === e)
                      ).filter(
                        (e) =>
                          !a ||
                          (0, t.getAlignment)(e) === a ||
                          (!!h && (0, t.getOppositeAlignmentPlacement)(e) !== e)
                      )
                    : p,
                v = await o(n, y),
                x = (null == (i = c.autoPlacement) ? void 0 : i.index) || 0,
                b = w[x];
              if (null == b) return {};
              let S = (0, t.getAlignmentSides)(
                b,
                s,
                await (null == f.isRTL ? void 0 : f.isRTL(d.floating))
              );
              if (u !== b) return { reset: { placement: w[0] } };
              let A = [v[(0, t.getSide)(b)], v[S[0]], v[S[1]]],
                E = [
                  ...((null == (r = c.autoPlacement) ? void 0 : r.overflows) ||
                    []),
                  { placement: b, overflows: A },
                ],
                R = w[x + 1];
              if (R)
                return {
                  data: { index: x + 1, overflows: E },
                  reset: { placement: R },
                };
              let T = E.map((e) => {
                  let n = (0, t.getAlignment)(e.placement);
                  return [
                    e.placement,
                    n && m
                      ? e.overflows.slice(0, 2).reduce((e, t) => e + t, 0)
                      : e.overflows[0],
                    e.overflows,
                  ];
                }).sort((e, t) => e[1] - t[1]),
                C =
                  (null ==
                  (l = T.filter((e) =>
                    e[2]
                      .slice(0, (0, t.getAlignment)(e[0]) ? 2 : 3)
                      .every((e) => e <= 0)
                  )[0])
                    ? void 0
                    : l[0]) || T[0][0];
              return C !== u
                ? {
                    data: { index: x + 1, overflows: E },
                    reset: { placement: C },
                  }
                : {};
            },
          }
        );
      },
      a = function (e) {
        return (
          void 0 === e && (e = {}),
          {
            name: "flip",
            options: e,
            async fn(n) {
              var i, r, l, a, s;
              let {
                  placement: c,
                  middlewareData: u,
                  rects: f,
                  initialPlacement: d,
                  platform: m,
                  elements: g,
                } = n,
                {
                  mainAxis: p = !0,
                  crossAxis: h = !0,
                  fallbackPlacements: y,
                  fallbackStrategy: w = "bestFit",
                  fallbackAxisSideDirection: v = "none",
                  flipAlignment: x = !0,
                  ...b
                } = (0, t.evaluate)(e, n);
              if (null != (i = u.arrow) && i.alignmentOffset) return {};
              let S = (0, t.getSide)(c),
                A = (0, t.getSideAxis)(d),
                E = (0, t.getSide)(d) === d,
                R = await (null == m.isRTL ? void 0 : m.isRTL(g.floating)),
                T =
                  y ||
                  (E || !x
                    ? [(0, t.getOppositePlacement)(d)]
                    : (0, t.getExpandedPlacements)(d)),
                C = "none" !== v;
              !y &&
                C &&
                T.push(...(0, t.getOppositeAxisPlacements)(d, x, v, R));
              let L = [d, ...T],
                O = await o(n, b),
                P = [],
                N = (null == (r = u.flip) ? void 0 : r.overflows) || [];
              if ((p && P.push(O[S]), h)) {
                let e = (0, t.getAlignmentSides)(c, f, R);
                P.push(O[e[0]], O[e[1]]);
              }
              if (
                ((N = [...N, { placement: c, overflows: P }]),
                !P.every((e) => e <= 0))
              ) {
                let e = ((null == (l = u.flip) ? void 0 : l.index) || 0) + 1,
                  n = L[e];
                if (
                  n &&
                  ("alignment" !== h ||
                    A === (0, t.getSideAxis)(n) ||
                    N.every(
                      (e) =>
                        (0, t.getSideAxis)(e.placement) !== A ||
                        e.overflows[0] > 0
                    ))
                )
                  return {
                    data: { index: e, overflows: N },
                    reset: { placement: n },
                  };
                let i =
                  null ==
                  (a = N.filter((e) => e.overflows[0] <= 0).sort(
                    (e, t) => e.overflows[1] - t.overflows[1]
                  )[0])
                    ? void 0
                    : a.placement;
                if (!i)
                  switch (w) {
                    case "bestFit": {
                      let e =
                        null ==
                        (s = N.filter((e) => {
                          if (C) {
                            let n = (0, t.getSideAxis)(e.placement);
                            return n === A || "y" === n;
                          }
                          return !0;
                        })
                          .map((e) => [
                            e.placement,
                            e.overflows
                              .filter((e) => e > 0)
                              .reduce((e, t) => e + t, 0),
                          ])
                          .sort((e, t) => e[1] - t[1])[0])
                          ? void 0
                          : s[0];
                      e && (i = e);
                      break;
                    }
                    case "initialPlacement":
                      i = d;
                  }
                if (c !== i) return { reset: { placement: i } };
              }
              return {};
            },
          }
        );
      };
    function s(e, t) {
      return {
        top: e.top - t.height,
        right: e.right - t.width,
        bottom: e.bottom - t.height,
        left: e.left - t.width,
      };
    }
    function c(e) {
      return t.sides.some((t) => e[t] >= 0);
    }
    let u = function (e) {
      return (
        void 0 === e && (e = {}),
        {
          name: "hide",
          options: e,
          async fn(n) {
            let { rects: i } = n,
              { strategy: r = "referenceHidden", ...l } = (0, t.evaluate)(e, n);
            switch (r) {
              case "referenceHidden": {
                let e = s(
                  await o(n, { ...l, elementContext: "reference" }),
                  i.reference
                );
                return {
                  data: { referenceHiddenOffsets: e, referenceHidden: c(e) },
                };
              }
              case "escaped": {
                let e = s(await o(n, { ...l, altBoundary: !0 }), i.floating);
                return { data: { escapedOffsets: e, escaped: c(e) } };
              }
              default:
                return {};
            }
          },
        }
      );
    };
    function f(e) {
      let n = (0, t.min)(...e.map((e) => e.left)),
        i = (0, t.min)(...e.map((e) => e.top));
      return {
        x: n,
        y: i,
        width: (0, t.max)(...e.map((e) => e.right)) - n,
        height: (0, t.max)(...e.map((e) => e.bottom)) - i,
      };
    }
    let d = function (e) {
        return (
          void 0 === e && (e = {}),
          {
            name: "inline",
            options: e,
            async fn(n) {
              let {
                  placement: i,
                  elements: o,
                  rects: r,
                  platform: l,
                  strategy: a,
                } = n,
                { padding: s = 2, x: c, y: u } = (0, t.evaluate)(e, n),
                d = Array.from(
                  (await (null == l.getClientRects
                    ? void 0
                    : l.getClientRects(o.reference))) || []
                ),
                m = (function (e) {
                  let n = e.slice().sort((e, t) => e.y - t.y),
                    i = [],
                    o = null;
                  for (let e = 0; e < n.length; e++) {
                    let t = n[e];
                    !o || t.y - o.y > o.height / 2
                      ? i.push([t])
                      : i[i.length - 1].push(t),
                      (o = t);
                  }
                  return i.map((e) => (0, t.rectToClientRect)(f(e)));
                })(d),
                g = (0, t.rectToClientRect)(f(d)),
                p = (0, t.getPaddingObject)(s),
                h = await l.getElementRects({
                  reference: {
                    getBoundingClientRect: function () {
                      if (
                        2 === m.length &&
                        m[0].left > m[1].right &&
                        null != c &&
                        null != u
                      )
                        return (
                          m.find(
                            (e) =>
                              c > e.left - p.left &&
                              c < e.right + p.right &&
                              u > e.top - p.top &&
                              u < e.bottom + p.bottom
                          ) || g
                        );
                      if (m.length >= 2) {
                        if ("y" === (0, t.getSideAxis)(i)) {
                          let e = m[0],
                            n = m[m.length - 1],
                            o = "top" === (0, t.getSide)(i),
                            r = e.top,
                            l = n.bottom,
                            a = o ? e.left : n.left,
                            s = o ? e.right : n.right;
                          return {
                            top: r,
                            bottom: l,
                            left: a,
                            right: s,
                            width: s - a,
                            height: l - r,
                            x: a,
                            y: r,
                          };
                        }
                        let e = "left" === (0, t.getSide)(i),
                          n = (0, t.max)(...m.map((e) => e.right)),
                          o = (0, t.min)(...m.map((e) => e.left)),
                          r = m.filter((t) =>
                            e ? t.left === o : t.right === n
                          ),
                          l = r[0].top,
                          a = r[r.length - 1].bottom;
                        return {
                          top: l,
                          bottom: a,
                          left: o,
                          right: n,
                          width: n - o,
                          height: a - l,
                          x: o,
                          y: l,
                        };
                      }
                      return g;
                    },
                  },
                  floating: o.floating,
                  strategy: a,
                });
              return r.reference.x !== h.reference.x ||
                r.reference.y !== h.reference.y ||
                r.reference.width !== h.reference.width ||
                r.reference.height !== h.reference.height
                ? { reset: { rects: h } }
                : {};
            },
          }
        );
      },
      m = new Set(["left", "top"]);
    async function g(e, n) {
      let { placement: i, platform: o, elements: r } = e,
        l = await (null == o.isRTL ? void 0 : o.isRTL(r.floating)),
        a = (0, t.getSide)(i),
        s = (0, t.getAlignment)(i),
        c = "y" === (0, t.getSideAxis)(i),
        u = m.has(a) ? -1 : 1,
        f = l && c ? -1 : 1,
        d = (0, t.evaluate)(n, e),
        {
          mainAxis: g,
          crossAxis: p,
          alignmentAxis: h,
        } = "number" == typeof d
          ? { mainAxis: d, crossAxis: 0, alignmentAxis: null }
          : {
              mainAxis: d.mainAxis || 0,
              crossAxis: d.crossAxis || 0,
              alignmentAxis: d.alignmentAxis,
            };
      return (
        s && "number" == typeof h && (p = "end" === s ? -1 * h : h),
        c ? { x: p * f, y: g * u } : { x: g * u, y: p * f }
      );
    }
    let p = function (e) {
        return (
          void 0 === e && (e = 0),
          {
            name: "offset",
            options: e,
            async fn(t) {
              var n, i;
              let { x: o, y: r, placement: l, middlewareData: a } = t,
                s = await g(t, e);
              return l === (null == (n = a.offset) ? void 0 : n.placement) &&
                null != (i = a.arrow) &&
                i.alignmentOffset
                ? {}
                : { x: o + s.x, y: r + s.y, data: { ...s, placement: l } };
            },
          }
        );
      },
      h = function (e) {
        return (
          void 0 === e && (e = {}),
          {
            name: "shift",
            options: e,
            async fn(n) {
              let { x: i, y: r, placement: l } = n,
                {
                  mainAxis: a = !0,
                  crossAxis: s = !1,
                  limiter: c = {
                    fn: (e) => {
                      let { x: t, y: n } = e;
                      return { x: t, y: n };
                    },
                  },
                  ...u
                } = (0, t.evaluate)(e, n),
                f = { x: i, y: r },
                d = await o(n, u),
                m = (0, t.getSideAxis)((0, t.getSide)(l)),
                g = (0, t.getOppositeAxis)(m),
                p = f[g],
                h = f[m];
              if (a) {
                let e = "y" === g ? "top" : "left",
                  n = "y" === g ? "bottom" : "right",
                  i = p + d[e],
                  o = p - d[n];
                p = (0, t.clamp)(i, p, o);
              }
              if (s) {
                let e = "y" === m ? "top" : "left",
                  n = "y" === m ? "bottom" : "right",
                  i = h + d[e],
                  o = h - d[n];
                h = (0, t.clamp)(i, h, o);
              }
              let y = c.fn({ ...n, [g]: p, [m]: h });
              return {
                ...y,
                data: { x: y.x - i, y: y.y - r, enabled: { [g]: a, [m]: s } },
              };
            },
          }
        );
      },
      y = function (e) {
        return (
          void 0 === e && (e = {}),
          {
            options: e,
            fn(n) {
              let { x: i, y: o, placement: r, rects: l, middlewareData: a } = n,
                {
                  offset: s = 0,
                  mainAxis: c = !0,
                  crossAxis: u = !0,
                } = (0, t.evaluate)(e, n),
                f = { x: i, y: o },
                d = (0, t.getSideAxis)(r),
                g = (0, t.getOppositeAxis)(d),
                p = f[g],
                h = f[d],
                y = (0, t.evaluate)(s, n),
                w =
                  "number" == typeof y
                    ? { mainAxis: y, crossAxis: 0 }
                    : { mainAxis: 0, crossAxis: 0, ...y };
              if (c) {
                let e = "y" === g ? "height" : "width",
                  t = l.reference[g] - l.floating[e] + w.mainAxis,
                  n = l.reference[g] + l.reference[e] - w.mainAxis;
                p < t ? (p = t) : p > n && (p = n);
              }
              if (u) {
                var v, x;
                let e = "y" === g ? "width" : "height",
                  n = m.has((0, t.getSide)(r)),
                  i =
                    l.reference[d] -
                    l.floating[e] +
                    ((n && (null == (v = a.offset) ? void 0 : v[d])) || 0) +
                    (n ? 0 : w.crossAxis),
                  o =
                    l.reference[d] +
                    l.reference[e] +
                    (n ? 0 : (null == (x = a.offset) ? void 0 : x[d]) || 0) -
                    (n ? w.crossAxis : 0);
                h < i ? (h = i) : h > o && (h = o);
              }
              return { [g]: p, [d]: h };
            },
          }
        );
      },
      w = function (e) {
        return (
          void 0 === e && (e = {}),
          {
            name: "size",
            options: e,
            async fn(n) {
              var i, r;
              let l,
                a,
                { placement: s, rects: c, platform: u, elements: f } = n,
                { apply: d = () => {}, ...m } = (0, t.evaluate)(e, n),
                g = await o(n, m),
                p = (0, t.getSide)(s),
                h = (0, t.getAlignment)(s),
                y = "y" === (0, t.getSideAxis)(s),
                { width: w, height: v } = c.floating;
              "top" === p || "bottom" === p
                ? ((l = p),
                  (a =
                    h ===
                    ((await (null == u.isRTL ? void 0 : u.isRTL(f.floating)))
                      ? "start"
                      : "end")
                      ? "left"
                      : "right"))
                : ((a = p), (l = "end" === h ? "top" : "bottom"));
              let x = v - g.top - g.bottom,
                b = w - g.left - g.right,
                S = (0, t.min)(v - g[l], x),
                A = (0, t.min)(w - g[a], b),
                E = !n.middlewareData.shift,
                R = S,
                T = A;
              if (
                (null != (i = n.middlewareData.shift) && i.enabled.x && (T = b),
                null != (r = n.middlewareData.shift) && r.enabled.y && (R = x),
                E && !h)
              ) {
                let e = (0, t.max)(g.left, 0),
                  n = (0, t.max)(g.right, 0),
                  i = (0, t.max)(g.top, 0),
                  o = (0, t.max)(g.bottom, 0);
                y
                  ? (T =
                      w -
                      2 *
                        (0 !== e || 0 !== n
                          ? e + n
                          : (0, t.max)(g.left, g.right)))
                  : (R =
                      v -
                      2 *
                        (0 !== i || 0 !== o
                          ? i + o
                          : (0, t.max)(g.top, g.bottom)));
              }
              await d({ ...n, availableWidth: T, availableHeight: R });
              let C = await u.getDimensions(f.floating);
              return w !== C.width || v !== C.height
                ? { reset: { rects: !0 } }
                : {};
            },
          }
        );
      };
    e.s([
      "arrow",
      () => r,
      "autoPlacement",
      () => l,
      "computePosition",
      () => i,
      "detectOverflow",
      () => o,
      "flip",
      () => a,
      "hide",
      () => u,
      "inline",
      () => d,
      "limitShift",
      () => y,
      "offset",
      () => p,
      "shift",
      () => h,
      "size",
      () => w,
    ]);
  },
  229315,
  (e) => {
    "use strict";
    function t() {
      return "undefined" != typeof window;
    }
    function n(e) {
      return r(e) ? (e.nodeName || "").toLowerCase() : "#document";
    }
    function i(e) {
      var t;
      return (
        (null == e || null == (t = e.ownerDocument) ? void 0 : t.defaultView) ||
        window
      );
    }
    function o(e) {
      var t;
      return null ==
        (t = (r(e) ? e.ownerDocument : e.document) || window.document)
        ? void 0
        : t.documentElement;
    }
    function r(e) {
      return !!t() && (e instanceof Node || e instanceof i(e).Node);
    }
    function l(e) {
      return !!t() && (e instanceof Element || e instanceof i(e).Element);
    }
    function a(e) {
      return (
        !!t() && (e instanceof HTMLElement || e instanceof i(e).HTMLElement)
      );
    }
    function s(e) {
      return (
        !!t() &&
        "undefined" != typeof ShadowRoot &&
        (e instanceof ShadowRoot || e instanceof i(e).ShadowRoot)
      );
    }
    let c = new Set(["inline", "contents"]);
    function u(e) {
      let { overflow: t, overflowX: n, overflowY: i, display: o } = A(e);
      return /auto|scroll|overlay|hidden|clip/.test(t + i + n) && !c.has(o);
    }
    let f = new Set(["table", "td", "th"]);
    function d(e) {
      return f.has(n(e));
    }
    let m = [":popover-open", ":modal"];
    function g(e) {
      return m.some((t) => {
        try {
          return e.matches(t);
        } catch (e) {
          return !1;
        }
      });
    }
    let p = ["transform", "translate", "scale", "rotate", "perspective"],
      h = [
        "transform",
        "translate",
        "scale",
        "rotate",
        "perspective",
        "filter",
      ],
      y = ["paint", "layout", "strict", "content"];
    function w(e) {
      let t = x(),
        n = l(e) ? A(e) : e;
      return (
        p.some((e) => !!n[e] && "none" !== n[e]) ||
        (!!n.containerType && "normal" !== n.containerType) ||
        (!t && !!n.backdropFilter && "none" !== n.backdropFilter) ||
        (!t && !!n.filter && "none" !== n.filter) ||
        h.some((e) => (n.willChange || "").includes(e)) ||
        y.some((e) => (n.contain || "").includes(e))
      );
    }
    function v(e) {
      let t = R(e);
      for (; a(t) && !S(t); ) {
        if (w(t)) return t;
        if (g(t)) break;
        t = R(t);
      }
      return null;
    }
    function x() {
      return (
        "undefined" != typeof CSS &&
        !!CSS.supports &&
        CSS.supports("-webkit-backdrop-filter", "none")
      );
    }
    let b = new Set(["html", "body", "#document"]);
    function S(e) {
      return b.has(n(e));
    }
    function A(e) {
      return i(e).getComputedStyle(e);
    }
    function E(e) {
      return l(e)
        ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
        : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
    }
    function R(e) {
      if ("html" === n(e)) return e;
      let t = e.assignedSlot || e.parentNode || (s(e) && e.host) || o(e);
      return s(t) ? t.host : t;
    }
    function T(e) {
      return e.parent && Object.getPrototypeOf(e.parent)
        ? e.frameElement
        : null;
    }
    e.s([
      "getComputedStyle",
      () => A,
      "getContainingBlock",
      () => v,
      "getDocumentElement",
      () => o,
      "getFrameElement",
      () => T,
      "getNodeName",
      () => n,
      "getNodeScroll",
      () => E,
      "getOverflowAncestors",
      () =>
        function e(t, n, o) {
          var r;
          void 0 === n && (n = []), void 0 === o && (o = !0);
          let l = (function e(t) {
              let n = R(t);
              return S(n)
                ? t.ownerDocument
                  ? t.ownerDocument.body
                  : t.body
                : a(n) && u(n)
                ? n
                : e(n);
            })(t),
            s = l === (null == (r = t.ownerDocument) ? void 0 : r.body),
            c = i(l);
          if (s) {
            let t = T(c);
            return n.concat(
              c,
              c.visualViewport || [],
              u(l) ? l : [],
              t && o ? e(t) : []
            );
          }
          return n.concat(l, e(l, [], o));
        },
      "getParentNode",
      () => R,
      "getWindow",
      () => i,
      "isContainingBlock",
      () => w,
      "isElement",
      () => l,
      "isHTMLElement",
      () => a,
      "isLastTraversableNode",
      () => S,
      "isNode",
      () => r,
      "isOverflowElement",
      () => u,
      "isShadowRoot",
      () => s,
      "isTableElement",
      () => d,
      "isTopLayer",
      () => g,
      "isWebKit",
      () => x,
    ]);
  },
  258950,
  953760,
  (e) => {
    "use strict";
    var t = e.i(343084),
      n = e.i(101534),
      i = e.i(229315);
    function o(e) {
      let n = (0, i.getComputedStyle)(e),
        o = parseFloat(n.width) || 0,
        r = parseFloat(n.height) || 0,
        l = (0, i.isHTMLElement)(e),
        a = l ? e.offsetWidth : o,
        s = l ? e.offsetHeight : r,
        c = (0, t.round)(o) !== a || (0, t.round)(r) !== s;
      return c && ((o = a), (r = s)), { width: o, height: r, $: c };
    }
    function r(e) {
      return (0, i.isElement)(e) ? e : e.contextElement;
    }
    function l(e) {
      let n = r(e);
      if (!(0, i.isHTMLElement)(n)) return (0, t.createCoords)(1);
      let l = n.getBoundingClientRect(),
        { width: a, height: s, $: c } = o(n),
        u = (c ? (0, t.round)(l.width) : l.width) / a,
        f = (c ? (0, t.round)(l.height) : l.height) / s;
      return (
        (u && Number.isFinite(u)) || (u = 1),
        (f && Number.isFinite(f)) || (f = 1),
        { x: u, y: f }
      );
    }
    let a = (0, t.createCoords)(0);
    function s(e) {
      let t = (0, i.getWindow)(e);
      return (0, i.isWebKit)() && t.visualViewport
        ? { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop }
        : a;
    }
    function c(e, n, o, a) {
      var c;
      void 0 === n && (n = !1), void 0 === o && (o = !1);
      let u = e.getBoundingClientRect(),
        f = r(e),
        d = (0, t.createCoords)(1);
      n && (a ? (0, i.isElement)(a) && (d = l(a)) : (d = l(e)));
      let m = (void 0 === (c = o) && (c = !1),
        a && (!c || a === (0, i.getWindow)(f)) && c)
          ? s(f)
          : (0, t.createCoords)(0),
        g = (u.left + m.x) / d.x,
        p = (u.top + m.y) / d.y,
        h = u.width / d.x,
        y = u.height / d.y;
      if (f) {
        let e = (0, i.getWindow)(f),
          t = a && (0, i.isElement)(a) ? (0, i.getWindow)(a) : a,
          n = e,
          o = (0, i.getFrameElement)(n);
        for (; o && a && t !== n; ) {
          let e = l(o),
            t = o.getBoundingClientRect(),
            r = (0, i.getComputedStyle)(o),
            a = t.left + (o.clientLeft + parseFloat(r.paddingLeft)) * e.x,
            s = t.top + (o.clientTop + parseFloat(r.paddingTop)) * e.y;
          (g *= e.x),
            (p *= e.y),
            (h *= e.x),
            (y *= e.y),
            (g += a),
            (p += s),
            (n = (0, i.getWindow)(o)),
            (o = (0, i.getFrameElement)(n));
        }
      }
      return (0, t.rectToClientRect)({ width: h, height: y, x: g, y: p });
    }
    function u(e, t) {
      let n = (0, i.getNodeScroll)(e).scrollLeft;
      return t ? t.left + n : c((0, i.getDocumentElement)(e)).left + n;
    }
    function f(e, t) {
      let n = e.getBoundingClientRect();
      return { x: n.left + t.scrollLeft - u(e, n), y: n.top + t.scrollTop };
    }
    let d = new Set(["absolute", "fixed"]);
    function m(e, n, o) {
      var r;
      let a;
      if ("viewport" === n)
        a = (function (e, t) {
          let n = (0, i.getWindow)(e),
            o = (0, i.getDocumentElement)(e),
            r = n.visualViewport,
            l = o.clientWidth,
            a = o.clientHeight,
            s = 0,
            c = 0;
          if (r) {
            (l = r.width), (a = r.height);
            let e = (0, i.isWebKit)();
            (!e || (e && "fixed" === t)) &&
              ((s = r.offsetLeft), (c = r.offsetTop));
          }
          let f = u(o);
          if (f <= 0) {
            let e = o.ownerDocument,
              t = e.body,
              n = getComputedStyle(t),
              i =
                ("CSS1Compat" === e.compatMode &&
                  parseFloat(n.marginLeft) + parseFloat(n.marginRight)) ||
                0,
              r = Math.abs(o.clientWidth - t.clientWidth - i);
            r <= 25 && (l -= r);
          } else f <= 25 && (l += f);
          return { width: l, height: a, x: s, y: c };
        })(e, o);
      else if ("document" === n) {
        let n, o, l, s, c, f, d;
        (r = (0, i.getDocumentElement)(e)),
          (n = (0, i.getDocumentElement)(r)),
          (o = (0, i.getNodeScroll)(r)),
          (l = r.ownerDocument.body),
          (s = (0, t.max)(
            n.scrollWidth,
            n.clientWidth,
            l.scrollWidth,
            l.clientWidth
          )),
          (c = (0, t.max)(
            n.scrollHeight,
            n.clientHeight,
            l.scrollHeight,
            l.clientHeight
          )),
          (f = -o.scrollLeft + u(r)),
          (d = -o.scrollTop),
          "rtl" === (0, i.getComputedStyle)(l).direction &&
            (f += (0, t.max)(n.clientWidth, l.clientWidth) - s),
          (a = { width: s, height: c, x: f, y: d });
      } else if ((0, i.isElement)(n)) {
        let e, r, s, u, f, d;
        (r = (e = c(n, !0, "fixed" === o)).top + n.clientTop),
          (s = e.left + n.clientLeft),
          (u = (0, i.isHTMLElement)(n) ? l(n) : (0, t.createCoords)(1)),
          (f = n.clientWidth * u.x),
          (d = n.clientHeight * u.y),
          (a = { width: f, height: d, x: s * u.x, y: r * u.y });
      } else {
        let t = s(e);
        a = { x: n.x - t.x, y: n.y - t.y, width: n.width, height: n.height };
      }
      return (0, t.rectToClientRect)(a);
    }
    function g(e) {
      return "static" === (0, i.getComputedStyle)(e).position;
    }
    function p(e, t) {
      if (
        !(0, i.isHTMLElement)(e) ||
        "fixed" === (0, i.getComputedStyle)(e).position
      )
        return null;
      if (t) return t(e);
      let n = e.offsetParent;
      return (
        (0, i.getDocumentElement)(e) === n && (n = n.ownerDocument.body), n
      );
    }
    function h(e, t) {
      let n = (0, i.getWindow)(e);
      if ((0, i.isTopLayer)(e)) return n;
      if (!(0, i.isHTMLElement)(e)) {
        let t = (0, i.getParentNode)(e);
        for (; t && !(0, i.isLastTraversableNode)(t); ) {
          if ((0, i.isElement)(t) && !g(t)) return t;
          t = (0, i.getParentNode)(t);
        }
        return n;
      }
      let o = p(e, t);
      for (; o && (0, i.isTableElement)(o) && g(o); ) o = p(o, t);
      return o &&
        (0, i.isLastTraversableNode)(o) &&
        g(o) &&
        !(0, i.isContainingBlock)(o)
        ? n
        : o || (0, i.getContainingBlock)(e) || n;
    }
    let y = async function (e) {
        let n = this.getOffsetParent || h,
          o = this.getDimensions,
          r = await o(e.floating);
        return {
          reference: (function (e, n, o) {
            let r = (0, i.isHTMLElement)(n),
              l = (0, i.getDocumentElement)(n),
              a = "fixed" === o,
              s = c(e, !0, a, n),
              d = { scrollLeft: 0, scrollTop: 0 },
              m = (0, t.createCoords)(0);
            if (r || (!r && !a))
              if (
                (("body" !== (0, i.getNodeName)(n) ||
                  (0, i.isOverflowElement)(l)) &&
                  (d = (0, i.getNodeScroll)(n)),
                r)
              ) {
                let e = c(n, !0, a, n);
                (m.x = e.x + n.clientLeft), (m.y = e.y + n.clientTop);
              } else l && (m.x = u(l));
            a && !r && l && (m.x = u(l));
            let g = !l || r || a ? (0, t.createCoords)(0) : f(l, d);
            return {
              x: s.left + d.scrollLeft - m.x - g.x,
              y: s.top + d.scrollTop - m.y - g.y,
              width: s.width,
              height: s.height,
            };
          })(e.reference, await n(e.floating), e.strategy),
          floating: { x: 0, y: 0, width: r.width, height: r.height },
        };
      },
      w = {
        convertOffsetParentRelativeRectToViewportRelativeRect: function (e) {
          let { elements: n, rect: o, offsetParent: r, strategy: a } = e,
            s = "fixed" === a,
            u = (0, i.getDocumentElement)(r),
            d = !!n && (0, i.isTopLayer)(n.floating);
          if (r === u || (d && s)) return o;
          let m = { scrollLeft: 0, scrollTop: 0 },
            g = (0, t.createCoords)(1),
            p = (0, t.createCoords)(0),
            h = (0, i.isHTMLElement)(r);
          if (
            (h || (!h && !s)) &&
            (("body" !== (0, i.getNodeName)(r) ||
              (0, i.isOverflowElement)(u)) &&
              (m = (0, i.getNodeScroll)(r)),
            (0, i.isHTMLElement)(r))
          ) {
            let e = c(r);
            (g = l(r)), (p.x = e.x + r.clientLeft), (p.y = e.y + r.clientTop);
          }
          let y = !u || h || s ? (0, t.createCoords)(0) : f(u, m);
          return {
            width: o.width * g.x,
            height: o.height * g.y,
            x: o.x * g.x - m.scrollLeft * g.x + p.x + y.x,
            y: o.y * g.y - m.scrollTop * g.y + p.y + y.y,
          };
        },
        getDocumentElement: i.getDocumentElement,
        getClippingRect: function (e) {
          let { element: n, boundary: o, rootBoundary: r, strategy: l } = e,
            a = [
              ...("clippingAncestors" === o
                ? (0, i.isTopLayer)(n)
                  ? []
                  : (function (e, t) {
                      let n = t.get(e);
                      if (n) return n;
                      let o = (0, i.getOverflowAncestors)(e, [], !1).filter(
                          (e) =>
                            (0, i.isElement)(e) &&
                            "body" !== (0, i.getNodeName)(e)
                        ),
                        r = null,
                        l = "fixed" === (0, i.getComputedStyle)(e).position,
                        a = l ? (0, i.getParentNode)(e) : e;
                      for (
                        ;
                        (0, i.isElement)(a) && !(0, i.isLastTraversableNode)(a);

                      ) {
                        let t = (0, i.getComputedStyle)(a),
                          n = (0, i.isContainingBlock)(a);
                        n || "fixed" !== t.position || (r = null),
                          (
                            l
                              ? !n && !r
                              : (!n &&
                                  "static" === t.position &&
                                  !!r &&
                                  d.has(r.position)) ||
                                ((0, i.isOverflowElement)(a) &&
                                  !n &&
                                  (function e(t, n) {
                                    let o = (0, i.getParentNode)(t);
                                    return (
                                      !(
                                        o === n ||
                                        !(0, i.isElement)(o) ||
                                        (0, i.isLastTraversableNode)(o)
                                      ) &&
                                      ("fixed" ===
                                        (0, i.getComputedStyle)(o).position ||
                                        e(o, n))
                                    );
                                  })(e, a))
                          )
                            ? (o = o.filter((e) => e !== a))
                            : (r = t),
                          (a = (0, i.getParentNode)(a));
                      }
                      return t.set(e, o), o;
                    })(n, this._c)
                : [].concat(o)),
              r,
            ],
            s = a[0],
            c = a.reduce((e, i) => {
              let o = m(n, i, l);
              return (
                (e.top = (0, t.max)(o.top, e.top)),
                (e.right = (0, t.min)(o.right, e.right)),
                (e.bottom = (0, t.min)(o.bottom, e.bottom)),
                (e.left = (0, t.max)(o.left, e.left)),
                e
              );
            }, m(n, s, l));
          return {
            width: c.right - c.left,
            height: c.bottom - c.top,
            x: c.left,
            y: c.top,
          };
        },
        getOffsetParent: h,
        getElementRects: y,
        getClientRects: function (e) {
          return Array.from(e.getClientRects());
        },
        getDimensions: function (e) {
          let { width: t, height: n } = o(e);
          return { width: t, height: n };
        },
        getScale: l,
        isElement: i.isElement,
        isRTL: function (e) {
          return "rtl" === (0, i.getComputedStyle)(e).direction;
        },
      };
    function v(e, t) {
      return (
        e.x === t.x &&
        e.y === t.y &&
        e.width === t.width &&
        e.height === t.height
      );
    }
    function x(e, n, o, l) {
      let a;
      void 0 === l && (l = {});
      let {
          ancestorScroll: s = !0,
          ancestorResize: u = !0,
          elementResize: f = "function" == typeof ResizeObserver,
          layoutShift: d = "function" == typeof IntersectionObserver,
          animationFrame: m = !1,
        } = l,
        g = r(e),
        p =
          s || u
            ? [
                ...(g ? (0, i.getOverflowAncestors)(g) : []),
                ...(0, i.getOverflowAncestors)(n),
              ]
            : [];
      p.forEach((e) => {
        s && e.addEventListener("scroll", o, { passive: !0 }),
          u && e.addEventListener("resize", o);
      });
      let h =
          g && d
            ? (function (e, n) {
                let o,
                  r = null,
                  l = (0, i.getDocumentElement)(e);
                function a() {
                  var e;
                  clearTimeout(o),
                    null == (e = r) || e.disconnect(),
                    (r = null);
                }
                return (
                  !(function i(s, c) {
                    void 0 === s && (s = !1), void 0 === c && (c = 1), a();
                    let u = e.getBoundingClientRect(),
                      { left: f, top: d, width: m, height: g } = u;
                    if ((s || n(), !m || !g)) return;
                    let p = {
                        rootMargin:
                          -(0, t.floor)(d) +
                          "px " +
                          -(0, t.floor)(l.clientWidth - (f + m)) +
                          "px " +
                          -(0, t.floor)(l.clientHeight - (d + g)) +
                          "px " +
                          -(0, t.floor)(f) +
                          "px",
                        threshold: (0, t.max)(0, (0, t.min)(1, c)) || 1,
                      },
                      h = !0;
                    function y(t) {
                      let n = t[0].intersectionRatio;
                      if (n !== c) {
                        if (!h) return i();
                        n
                          ? i(!1, n)
                          : (o = setTimeout(() => {
                              i(!1, 1e-7);
                            }, 1e3));
                      }
                      1 !== n || v(u, e.getBoundingClientRect()) || i(),
                        (h = !1);
                    }
                    try {
                      r = new IntersectionObserver(y, {
                        ...p,
                        root: l.ownerDocument,
                      });
                    } catch (e) {
                      r = new IntersectionObserver(y, p);
                    }
                    r.observe(e);
                  })(!0),
                  a
                );
              })(g, o)
            : null,
        y = -1,
        w = null;
      f &&
        ((w = new ResizeObserver((e) => {
          let [t] = e;
          t &&
            t.target === g &&
            w &&
            (w.unobserve(n),
            cancelAnimationFrame(y),
            (y = requestAnimationFrame(() => {
              var e;
              null == (e = w) || e.observe(n);
            }))),
            o();
        })),
        g && !m && w.observe(g),
        w.observe(n));
      let x = m ? c(e) : null;
      return (
        m &&
          (function t() {
            let n = c(e);
            x && !v(x, n) && o(), (x = n), (a = requestAnimationFrame(t));
          })(),
        o(),
        () => {
          var e;
          p.forEach((e) => {
            s && e.removeEventListener("scroll", o),
              u && e.removeEventListener("resize", o);
          }),
            null == h || h(),
            null == (e = w) || e.disconnect(),
            (w = null),
            m && cancelAnimationFrame(a);
        }
      );
    }
    let b = n.detectOverflow,
      S = n.offset,
      A = n.autoPlacement,
      E = n.shift,
      R = n.flip,
      T = n.size,
      C = n.hide,
      L = n.arrow,
      O = n.inline,
      P = n.limitShift,
      N = (e, t, i) => {
        let o = new Map(),
          r = { platform: w, ...i },
          l = { ...r.platform, _c: o };
        return (0, n.computePosition)(e, t, { ...r, platform: l });
      };
    e.s(
      [
        "arrow",
        () => L,
        "autoPlacement",
        () => A,
        "autoUpdate",
        () => x,
        "computePosition",
        () => N,
        "detectOverflow",
        () => b,
        "flip",
        () => R,
        "hide",
        () => C,
        "inline",
        () => O,
        "limitShift",
        () => P,
        "offset",
        () => S,
        "shift",
        () => E,
        "size",
        () => T,
      ],
      953760
    );
    var D = e.i(271645),
      k = e.i(174080),
      M = "undefined" != typeof document ? D.useLayoutEffect : function () {};
    function F(e, t) {
      let n, i, o;
      if (e === t) return !0;
      if (typeof e != typeof t) return !1;
      if ("function" == typeof e && e.toString() === t.toString()) return !0;
      if (e && t && "object" == typeof e) {
        if (Array.isArray(e)) {
          if ((n = e.length) !== t.length) return !1;
          for (i = n; 0 != i--; ) if (!F(e[i], t[i])) return !1;
          return !0;
        }
        if ((n = (o = Object.keys(e)).length) !== Object.keys(t).length)
          return !1;
        for (i = n; 0 != i--; ) if (!{}.hasOwnProperty.call(t, o[i])) return !1;
        for (i = n; 0 != i--; ) {
          let n = o[i];
          if (("_owner" !== n || !e.$$typeof) && !F(e[n], t[n])) return !1;
        }
        return !0;
      }
      return e != e && t != t;
    }
    function H(e) {
      return "undefined" == typeof window
        ? 1
        : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
    }
    function W(e, t) {
      let n = H(e);
      return Math.round(t * n) / n;
    }
    function I(e) {
      let t = D.useRef(e);
      return (
        M(() => {
          t.current = e;
        }),
        t
      );
    }
    function B(e) {
      void 0 === e && (e = {});
      let {
          placement: t = "bottom",
          strategy: n = "absolute",
          middleware: i = [],
          platform: o,
          elements: { reference: r, floating: l } = {},
          transform: a = !0,
          whileElementsMounted: s,
          open: c,
        } = e,
        [u, f] = D.useState({
          x: 0,
          y: 0,
          strategy: n,
          placement: t,
          middlewareData: {},
          isPositioned: !1,
        }),
        [d, m] = D.useState(i);
      F(d, i) || m(i);
      let [g, p] = D.useState(null),
        [h, y] = D.useState(null),
        w = D.useCallback((e) => {
          e !== S.current && ((S.current = e), p(e));
        }, []),
        v = D.useCallback((e) => {
          e !== A.current && ((A.current = e), y(e));
        }, []),
        x = r || g,
        b = l || h,
        S = D.useRef(null),
        A = D.useRef(null),
        E = D.useRef(u),
        R = null != s,
        T = I(s),
        C = I(o),
        L = I(c),
        O = D.useCallback(() => {
          if (!S.current || !A.current) return;
          let e = { placement: t, strategy: n, middleware: d };
          C.current && (e.platform = C.current),
            N(S.current, A.current, e).then((e) => {
              let t = { ...e, isPositioned: !1 !== L.current };
              P.current &&
                !F(E.current, t) &&
                ((E.current = t),
                k.flushSync(() => {
                  f(t);
                }));
            });
        }, [d, t, n, C, L]);
      M(() => {
        !1 === c &&
          E.current.isPositioned &&
          ((E.current.isPositioned = !1),
          f((e) => ({ ...e, isPositioned: !1 })));
      }, [c]);
      let P = D.useRef(!1);
      M(
        () => (
          (P.current = !0),
          () => {
            P.current = !1;
          }
        ),
        []
      ),
        M(() => {
          if ((x && (S.current = x), b && (A.current = b), x && b)) {
            if (T.current) return T.current(x, b, O);
            O();
          }
        }, [x, b, O, T, R]);
      let B = D.useMemo(
          () => ({
            reference: S,
            floating: A,
            setReference: w,
            setFloating: v,
          }),
          [w, v]
        ),
        V = D.useMemo(() => ({ reference: x, floating: b }), [x, b]),
        j = D.useMemo(() => {
          let e = { position: n, left: 0, top: 0 };
          if (!V.floating) return e;
          let t = W(V.floating, u.x),
            i = W(V.floating, u.y);
          return a
            ? {
                ...e,
                transform: "translate(" + t + "px, " + i + "px)",
                ...(H(V.floating) >= 1.5 && { willChange: "transform" }),
              }
            : { position: n, left: t, top: i };
        }, [n, a, V.floating, u.x, u.y]);
      return D.useMemo(
        () => ({ ...u, update: O, refs: B, elements: V, floatingStyles: j }),
        [u, O, B, V, j]
      );
    }
    let V = (e, t) => ({ ...S(e), options: [e, t] }),
      j = (e, t) => ({ ...E(e), options: [e, t] }),
      z = (e, t) => ({ ...P(e), options: [e, t] }),
      U = (e, t) => ({ ...R(e), options: [e, t] }),
      K = (e, t) => ({ ...T(e), options: [e, t] }),
      $ = (e, t) => ({ ...C(e), options: [e, t] }),
      _ = (e, t) => ({ ...O(e), options: [e, t] }),
      q = (e, t) => ({
        name: "arrow",
        options: e,
        fn(t) {
          let { element: n, padding: i } = "function" == typeof e ? e(t) : e;
          return n && {}.hasOwnProperty.call(n, "current")
            ? null != n.current
              ? L({ element: n.current, padding: i }).fn(t)
              : {}
            : n
            ? L({ element: n, padding: i }).fn(t)
            : {};
        },
        options: [e, t],
      });
    e.s(
      [
        "arrow",
        () => q,
        "flip",
        () => U,
        "hide",
        () => $,
        "inline",
        () => _,
        "limitShift",
        () => z,
        "offset",
        () => V,
        "shift",
        () => j,
        "size",
        () => K,
        "useFloating",
        () => B,
      ],
      258950
    );
  },
  397126,
  (e) => {
    "use strict";
    var t =
        'input:not([inert]),select:not([inert]),textarea:not([inert]),a[href]:not([inert]),button:not([inert]),[tabindex]:not(slot):not([inert]),audio[controls]:not([inert]),video[controls]:not([inert]),[contenteditable]:not([contenteditable="false"]):not([inert]),details>summary:first-of-type:not([inert]),details:not([inert])',
      n = "undefined" == typeof Element,
      i = n
        ? function () {}
        : Element.prototype.matches ||
          Element.prototype.msMatchesSelector ||
          Element.prototype.webkitMatchesSelector,
      o =
        !n && Element.prototype.getRootNode
          ? function (e) {
              var t;
              return null == e || null == (t = e.getRootNode)
                ? void 0
                : t.call(e);
            }
          : function (e) {
              return null == e ? void 0 : e.ownerDocument;
            },
      r = function (e, t) {
        void 0 === t && (t = !0);
        var n,
          i =
            null == e || null == (n = e.getAttribute)
              ? void 0
              : n.call(e, "inert");
        return "" === i || "true" === i || (t && e && r(e.parentNode));
      },
      l = function (e) {
        var t,
          n =
            null == e || null == (t = e.getAttribute)
              ? void 0
              : t.call(e, "contenteditable");
        return "" === n || "true" === n;
      },
      a = function (e, n, o) {
        if (r(e)) return [];
        var l = Array.prototype.slice.apply(e.querySelectorAll(t));
        return n && i.call(e, t) && l.unshift(e), (l = l.filter(o));
      },
      s = function (e, n, o) {
        for (var l = [], a = Array.from(e); a.length; ) {
          var c = a.shift();
          if (!r(c, !1))
            if ("SLOT" === c.tagName) {
              var u = c.assignedElements(),
                f = s(u.length ? u : c.children, !0, o);
              o.flatten
                ? l.push.apply(l, f)
                : l.push({ scopeParent: c, candidates: f });
            } else {
              i.call(c, t) && o.filter(c) && (n || !e.includes(c)) && l.push(c);
              var d =
                  c.shadowRoot ||
                  ("function" == typeof o.getShadowRoot && o.getShadowRoot(c)),
                m = !r(d, !1) && (!o.shadowRootFilter || o.shadowRootFilter(c));
              if (d && m) {
                var g = s(!0 === d ? c.children : d.children, !0, o);
                o.flatten
                  ? l.push.apply(l, g)
                  : l.push({ scopeParent: c, candidates: g });
              } else a.unshift.apply(a, c.children);
            }
        }
        return l;
      },
      c = function (e) {
        return !isNaN(parseInt(e.getAttribute("tabindex"), 10));
      },
      u = function (e) {
        if (!e) throw Error("No node provided");
        return e.tabIndex < 0 &&
          (/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName) || l(e)) &&
          !c(e)
          ? 0
          : e.tabIndex;
      },
      f = function (e, t) {
        var n = u(e);
        return n < 0 && t && !c(e) ? 0 : n;
      },
      d = function (e, t) {
        return e.tabIndex === t.tabIndex
          ? e.documentOrder - t.documentOrder
          : e.tabIndex - t.tabIndex;
      },
      m = function (e) {
        return "INPUT" === e.tagName;
      },
      g = function (e, t) {
        for (var n = 0; n < e.length; n++)
          if (e[n].checked && e[n].form === t) return e[n];
      },
      p = function (e) {
        if (!e.name) return !0;
        var t,
          n = e.form || o(e),
          i = function (e) {
            return n.querySelectorAll('input[type="radio"][name="' + e + '"]');
          };
        if (
          "undefined" != typeof window &&
          void 0 !== window.CSS &&
          "function" == typeof window.CSS.escape
        )
          t = i(window.CSS.escape(e.name));
        else
          try {
            t = i(e.name);
          } catch (e) {
            return (
              console.error(
                "Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",
                e.message
              ),
              !1
            );
          }
        var r = g(t, e.form);
        return !r || r === e;
      },
      h = function (e) {
        return m(e) && "radio" === e.type && !p(e);
      },
      y = function (e) {
        var t,
          n,
          i,
          r,
          l,
          a,
          s,
          c = e && o(e),
          u = null == (t = c) ? void 0 : t.host,
          f = !1;
        if (c && c !== e)
          for (
            f = !!(
              (null != (n = u) &&
                null != (i = n.ownerDocument) &&
                i.contains(u)) ||
              (null != e && null != (r = e.ownerDocument) && r.contains(e))
            );
            !f && u;

          )
            f = !!(
              null != (a = u = null == (l = c = o(u)) ? void 0 : l.host) &&
              null != (s = a.ownerDocument) &&
              s.contains(u)
            );
        return f;
      },
      w = function (e) {
        var t = e.getBoundingClientRect(),
          n = t.width,
          i = t.height;
        return 0 === n && 0 === i;
      },
      v = function (e, t) {
        var n = t.displayCheck,
          r = t.getShadowRoot;
        if ("full-native" === n && "checkVisibility" in e)
          return !e.checkVisibility({
            checkOpacity: !1,
            opacityProperty: !1,
            contentVisibilityAuto: !0,
            visibilityProperty: !0,
            checkVisibilityCSS: !0,
          });
        if ("hidden" === getComputedStyle(e).visibility) return !0;
        var l = i.call(e, "details>summary:first-of-type")
          ? e.parentElement
          : e;
        if (i.call(l, "details:not([open]) *")) return !0;
        if (n && "full" !== n && "full-native" !== n && "legacy-full" !== n) {
          if ("non-zero-area" === n) return w(e);
        } else {
          if ("function" == typeof r) {
            for (var a = e; e; ) {
              var s = e.parentElement,
                c = o(e);
              if (s && !s.shadowRoot && !0 === r(s)) return w(e);
              e = e.assignedSlot
                ? e.assignedSlot
                : s || c === e.ownerDocument
                ? s
                : c.host;
            }
            e = a;
          }
          if (y(e)) return !e.getClientRects().length;
          if ("legacy-full" !== n) return !0;
        }
        return !1;
      },
      x = function (e) {
        if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))
          for (var t = e.parentElement; t; ) {
            if ("FIELDSET" === t.tagName && t.disabled) {
              for (var n = 0; n < t.children.length; n++) {
                var o = t.children.item(n);
                if ("LEGEND" === o.tagName)
                  return !!i.call(t, "fieldset[disabled] *") || !o.contains(e);
              }
              return !0;
            }
            t = t.parentElement;
          }
        return !1;
      },
      b = function (e, t) {
        return !(
          t.disabled ||
          r(t) ||
          (m(t) && "hidden" === t.type) ||
          v(t, e) ||
          ("DETAILS" === t.tagName &&
            Array.prototype.slice.apply(t.children).some(function (e) {
              return "SUMMARY" === e.tagName;
            })) ||
          x(t)
        );
      },
      S = function (e, t) {
        return !(h(t) || 0 > u(t)) && !!b(e, t);
      },
      A = function (e) {
        var t = parseInt(e.getAttribute("tabindex"), 10);
        return !!isNaN(t) || !!(t >= 0);
      },
      E = function (e) {
        var t = [],
          n = [];
        return (
          e.forEach(function (e, i) {
            var o = !!e.scopeParent,
              r = o ? e.scopeParent : e,
              l = f(r, o),
              a = o ? E(e.candidates) : r;
            0 === l
              ? o
                ? t.push.apply(t, a)
                : t.push(r)
              : n.push({
                  documentOrder: i,
                  tabIndex: l,
                  item: e,
                  isScope: o,
                  content: a,
                });
          }),
          n
            .sort(d)
            .reduce(function (e, t) {
              return (
                t.isScope ? e.push.apply(e, t.content) : e.push(t.content), e
              );
            }, [])
            .concat(t)
        );
      },
      R = function (e, t) {
        return E(
          (t = t || {}).getShadowRoot
            ? s([e], t.includeContainer, {
                filter: S.bind(null, t),
                flatten: !1,
                getShadowRoot: t.getShadowRoot,
                shadowRootFilter: A,
              })
            : a(e, t.includeContainer, S.bind(null, t))
        );
      },
      T = function (e, t) {
        return (t = t || {}).getShadowRoot
          ? s([e], t.includeContainer, {
              filter: b.bind(null, t),
              flatten: !0,
              getShadowRoot: t.getShadowRoot,
            })
          : a(e, t.includeContainer, b.bind(null, t));
      },
      C = function (e, n) {
        if (((n = n || {}), !e)) throw Error("No node provided");
        return !1 !== i.call(e, t) && S(n, e);
      };
    e.s(["focusable", () => T, "isTabbable", () => C, "tabbable", () => R]);
  },
]);
