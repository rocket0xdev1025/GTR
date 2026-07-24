(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  247746,
  967929,
  (e) => {
    "use strict";
    var t = e.i(843476),
      r = e.i(271645);
    e.i(207670);
    var n = e.i(789549),
      o = e.i(857142);
    let [l, i] = (0, e.i(384660).createSafeContext)(
      "HoverCard component was not found in the tree"
    );
    var a = e.i(608350);
    let s = (0, r.createContext)(!1),
      u = s.Provider,
      c = () => (0, r.useContext)(s);
    function d(e) {
      let {
          children: r,
          onMouseEnter: l,
          onMouseLeave: s,
          ...u
        } = (0, n.useProps)("HoverCardDropdown", null, e),
        d = i();
      if (c() && d.getFloatingProps && d.floating) {
        let e = d.getFloatingProps();
        return (0, t.jsx)(o.Popover.Dropdown, {
          ref: d.floating,
          ...e,
          onMouseEnter: (0, a.createEventHandler)(l, e.onMouseEnter),
          onMouseLeave: (0, a.createEventHandler)(s, e.onMouseLeave),
          ...u,
          children: r,
        });
      }
      let f = (0, a.createEventHandler)(l, d.openDropdown),
        h = (0, a.createEventHandler)(s, d.closeDropdown);
      return (0, t.jsx)(o.Popover.Dropdown, {
        onMouseEnter: f,
        onMouseLeave: h,
        ...u,
        children: r,
      });
    }
    d.displayName = "@mantine/core/HoverCardDropdown";
    var f = e.i(171189);
    let h = { openDelay: 0, closeDelay: 0 };
    function p(e) {
      let {
        openDelay: r,
        closeDelay: o,
        children: l,
      } = (0, n.useProps)("HoverCardGroup", h, e);
      return (0, t.jsx)(u, {
        value: !0,
        children: (0, t.jsx)(f.FloatingDelayGroup, {
          delay: { open: r, close: o },
          children: l,
        }),
      });
    }
    (p.displayName = "@mantine/core/HoverCardGroup"), (p.extend = (e) => e);
    var g = e.i(795991);
    let m = { refProp: "ref" },
      y = (0, r.forwardRef)((e, l) => {
        let {
          children: s,
          refProp: u,
          eventPropsWrapperName: d,
          ...f
        } = (0, n.useProps)("HoverCardTarget", m, e);
        if (!(0, g.isElement)(s))
          throw Error(
            "HoverCard.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
          );
        let h = i();
        if (c() && h.getReferenceProps && h.reference) {
          let e = h.getReferenceProps();
          return (0, t.jsx)(o.Popover.Target, {
            refProp: u,
            ref: l,
            ...f,
            children: (0, r.cloneElement)(
              s,
              d
                ? { [d]: { ...e, ref: h.reference } }
                : { ...e, ref: h.reference }
            ),
          });
        }
        let p = {
          onMouseEnter: (0, a.createEventHandler)(
            s.props.onMouseEnter,
            h.openDropdown
          ),
          onMouseLeave: (0, a.createEventHandler)(
            s.props.onMouseLeave,
            h.closeDropdown
          ),
        };
        return (0, t.jsx)(o.Popover.Target, {
          refProp: u,
          ref: l,
          ...f,
          children: (0, r.cloneElement)(s, d ? { [d]: p } : p),
        });
      });
    y.displayName = "@mantine/core/HoverCardTarget";
    var E = e.i(751937);
    let v = { openDelay: 0, closeDelay: 150, initiallyOpened: !1 };
    function C(e) {
      let {
          children: i,
          onOpen: a,
          onClose: s,
          openDelay: u,
          closeDelay: d,
          initiallyOpened: h,
          ...p
        } = (0, n.useProps)("HoverCard", v, e),
        g = (function (e) {
          let [t, n] = (0, r.useState)(e.defaultOpened),
            o = "boolean" == typeof e.opened ? e.opened : t,
            l = c(),
            i = (0, E.useId)(),
            a = (0, r.useRef)(-1),
            s = (0, r.useRef)(-1),
            u = (0, r.useCallback)(() => {
              window.clearTimeout(a.current), window.clearTimeout(s.current);
            }, []),
            d = (0, r.useCallback)(
              (t) => {
                n(t), t ? (m(i), e.onOpen?.()) : e.onClose?.();
              },
              [i, e.onOpen, e.onClose]
            ),
            { context: h, refs: p } = (0, f.useFloating)({
              open: o,
              onOpenChange: d,
            }),
            { delay: g, setCurrentId: m } = (0, f.useDelayGroup)(h, { id: i }),
            { getReferenceProps: y, getFloatingProps: v } = (0,
            f.useInteractions)([
              (0, f.useHover)(h, {
                enabled: !0,
                delay: l ? g : { open: e.openDelay, close: e.closeDelay },
              }),
              (0, f.useRole)(h, { role: "dialog" }),
              (0, f.useDismiss)(h, { enabled: l }),
            ]),
            C = (0, r.useCallback)(() => {
              l ||
                (u(),
                0 === e.openDelay || void 0 === e.openDelay
                  ? d(!0)
                  : (a.current = window.setTimeout(() => d(!0), e.openDelay)));
            }, [l, u, e.openDelay, d]),
            M = (0, r.useCallback)(() => {
              l ||
                (u(),
                0 === e.closeDelay || void 0 === e.closeDelay
                  ? d(!1)
                  : (s.current = window.setTimeout(() => d(!1), e.closeDelay)));
            }, [l, u, e.closeDelay, d]);
          return (
            (0, r.useEffect)(() => () => u(), [u]),
            {
              opened: o,
              reference: p.setReference,
              floating: p.setFloating,
              getReferenceProps: y,
              getFloatingProps: v,
              openDropdown: C,
              closeDropdown: M,
            }
          );
        })({
          openDelay: u,
          closeDelay: d,
          defaultOpened: h,
          onOpen: a,
          onClose: s,
        });
      return (0, t.jsx)(l, {
        value: {
          openDropdown: g.openDropdown,
          closeDropdown: g.closeDropdown,
          getReferenceProps: g.getReferenceProps,
          getFloatingProps: g.getFloatingProps,
          reference: g.reference,
          floating: g.floating,
        },
        children: (0, t.jsx)(o.Popover, {
          ...p,
          opened: g.opened,
          __staticSelector: "HoverCard",
          children: i,
        }),
      });
    }
    (C.displayName = "@mantine/core/HoverCard"),
      (C.Target = y),
      (C.Dropdown = d),
      (C.Group = p),
      (C.extend = (e) => e),
      e.s(["HoverCard", () => C], 247746);
    let M = (0, e.i(33550).default)("outline", "menu-2", "Menu2", [
      ["path", { d: "M4 6l16 0", key: "svg-0" }],
      ["path", { d: "M4 12l16 0", key: "svg-1" }],
      ["path", { d: "M4 18l16 0", key: "svg-2" }],
    ]);
    e.s(["IconMenu2", () => M], 967929);
  },
  446614,
  (e) => {
    "use strict";
    var t = e.i(271645);
    function r({
      value: e,
      defaultValue: r,
      finalValue: n,
      onChange: o = () => {},
    }) {
      let [l, i] = (0, t.useState)(void 0 !== r ? r : n);
      return void 0 !== e
        ? [e, o, !0]
        : [
            l,
            (e, ...t) => {
              i(e), o?.(e, ...t);
            },
            !1,
          ];
    }
    e.s(["useUncontrolled", () => r]);
  },
  835783,
  (e) => {
    "use strict";
    var t = e.i(355634),
      r = e.i(882360);
    function n({ color: e, theme: t, autoContrast: n }) {
      return ("boolean" == typeof n ? n : t.autoContrast) &&
        (0, r.parseThemeColor)({ color: e || t.primaryColor, theme: t }).isLight
        ? "var(--mantine-color-black)"
        : "var(--mantine-color-white)";
    }
    function o(e, r) {
      return n({
        color: e.colors[e.primaryColor][(0, t.getPrimaryShade)(e, r)],
        theme: e,
        autoContrast: null,
      });
    }
    e.s(["getContrastColor", () => n, "getPrimaryContrastColor", () => o]);
  },
  608350,
  (e) => {
    "use strict";
    function t(e, t) {
      return (r) => {
        e?.(r), t?.(r);
      };
    }
    e.s(["createEventHandler", () => t]);
  },
  284508,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "errorOnce", {
        enumerable: !0,
        get: function () {
          return n;
        },
      });
    let n = (e) => {};
  },
  522016,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 });
    var n = {
      default: function () {
        return y;
      },
      useLinkStatus: function () {
        return v;
      },
    };
    for (var o in n) Object.defineProperty(r, o, { enumerable: !0, get: n[o] });
    let l = e.r(151836),
      i = e.r(843476),
      a = l._(e.r(271645)),
      s = e.r(195057),
      u = e.r(8372),
      c = e.r(818581),
      d = e.r(718967),
      f = e.r(405550);
    e.r(233525);
    let h = e.r(91949),
      p = e.r(573668),
      g = e.r(509396);
    function m(e) {
      return "string" == typeof e ? e : (0, s.formatUrl)(e);
    }
    function y(t) {
      var r;
      let n,
        o,
        l,
        [s, y] = (0, a.useOptimistic)(h.IDLE_LINK_STATUS),
        v = (0, a.useRef)(null),
        {
          href: C,
          as: M,
          children: w,
          prefetch: P = null,
          passHref: R,
          replace: b,
          shallow: S,
          scroll: _,
          onClick: N,
          onMouseEnter: A,
          onTouchStart: O,
          legacyBehavior: D = !1,
          onNavigate: I,
          ref: T,
          unstable_dynamicOnHover: L,
          ...x
        } = t;
      (n = w),
        D &&
          ("string" == typeof n || "number" == typeof n) &&
          (n = (0, i.jsx)("a", { children: n }));
      let k = a.default.useContext(u.AppRouterContext),
        F = !1 !== P,
        H =
          !1 !== P
            ? null === (r = P) || "auto" === r
              ? g.FetchStrategy.PPR
              : g.FetchStrategy.Full
            : g.FetchStrategy.PPR,
        { href: j, as: z } = a.default.useMemo(() => {
          let e = m(C);
          return { href: e, as: M ? m(M) : e };
        }, [C, M]);
      if (D) {
        if (n?.$$typeof === Symbol.for("react.lazy"))
          throw Object.defineProperty(
            Error(
              "`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."
            ),
            "__NEXT_ERROR_CODE",
            { value: "E863", enumerable: !1, configurable: !0 }
          );
        o = a.default.Children.only(n);
      }
      let B = D ? o && "object" == typeof o && o.ref : T,
        U = a.default.useCallback(
          (e) => (
            null !== k &&
              (v.current = (0, h.mountLinkInstance)(e, j, k, H, F, y)),
            () => {
              v.current &&
                ((0, h.unmountLinkForCurrentNavigation)(v.current),
                (v.current = null)),
                (0, h.unmountPrefetchableInstance)(e);
            }
          ),
          [F, j, k, H, y]
        ),
        Q = {
          ref: (0, c.useMergedRef)(U, B),
          onClick(t) {
            D || "function" != typeof N || N(t),
              D &&
                o.props &&
                "function" == typeof o.props.onClick &&
                o.props.onClick(t),
              !k ||
                t.defaultPrevented ||
                (function (t, r, n, o, l, i, s) {
                  if ("undefined" != typeof window) {
                    let u,
                      { nodeName: c } = t.currentTarget;
                    if (
                      ("A" === c.toUpperCase() &&
                        (((u = t.currentTarget.getAttribute("target")) &&
                          "_self" !== u) ||
                          t.metaKey ||
                          t.ctrlKey ||
                          t.shiftKey ||
                          t.altKey ||
                          (t.nativeEvent && 2 === t.nativeEvent.which))) ||
                      t.currentTarget.hasAttribute("download")
                    )
                      return;
                    if (!(0, p.isLocalURL)(r)) {
                      l && (t.preventDefault(), location.replace(r));
                      return;
                    }
                    if ((t.preventDefault(), s)) {
                      let e = !1;
                      if (
                        (s({
                          preventDefault: () => {
                            e = !0;
                          },
                        }),
                        e)
                      )
                        return;
                    }
                    let { dispatchNavigateAction: d } = e.r(699781);
                    a.default.startTransition(() => {
                      d(n || r, l ? "replace" : "push", i ?? !0, o.current);
                    });
                  }
                })(t, j, z, v, b, _, I);
          },
          onMouseEnter(e) {
            D || "function" != typeof A || A(e),
              D &&
                o.props &&
                "function" == typeof o.props.onMouseEnter &&
                o.props.onMouseEnter(e),
              k && F && (0, h.onNavigationIntent)(e.currentTarget, !0 === L);
          },
          onTouchStart: function (e) {
            D || "function" != typeof O || O(e),
              D &&
                o.props &&
                "function" == typeof o.props.onTouchStart &&
                o.props.onTouchStart(e),
              k && F && (0, h.onNavigationIntent)(e.currentTarget, !0 === L);
          },
        };
      return (
        (0, d.isAbsoluteUrl)(z)
          ? (Q.href = z)
          : (D && !R && ("a" !== o.type || "href" in o.props)) ||
            (Q.href = (0, f.addBasePath)(z)),
        (l = D
          ? a.default.cloneElement(o, Q)
          : (0, i.jsx)("a", { ...x, ...Q, children: n })),
        (0, i.jsx)(E.Provider, { value: s, children: l })
      );
    }
    e.r(284508);
    let E = (0, a.createContext)(h.IDLE_LINK_STATUS),
      v = () => (0, a.useContext)(E);
    ("function" == typeof r.default ||
      ("object" == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, "__esModule", { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  667585,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "BailoutToCSR", {
        enumerable: !0,
        get: function () {
          return o;
        },
      });
    let n = e.r(132061);
    function o({ reason: e, children: t }) {
      if ("undefined" == typeof window)
        throw Object.defineProperty(
          new n.BailoutToCSRError(e),
          "__NEXT_ERROR_CODE",
          { value: "E394", enumerable: !1, configurable: !0 }
        );
      return t;
    }
  },
  652157,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "PreloadChunks", {
        enumerable: !0,
        get: function () {
          return a;
        },
      });
    let n = e.r(843476),
      o = e.r(174080),
      l = e.r(563599),
      i = e.r(309885);
    function a({ moduleIds: e }) {
      if ("undefined" != typeof window) return null;
      let t = l.workAsyncStorage.getStore();
      if (void 0 === t) return null;
      let r = [];
      if (t.reactLoadableManifest && e) {
        let n = t.reactLoadableManifest;
        for (let t of e) {
          if (!n[t]) continue;
          let e = n[t].files;
          r.push(...e);
        }
      }
      return 0 === r.length
        ? null
        : (0, n.jsx)(n.Fragment, {
            children: r.map((e) => {
              let r = `${t.assetPrefix}/_next/${(0, i.encodeURIPath)(
                e
              )}?dpl=dpl_2ZHwP4hQB88hnQPok3Df3yCfTXLS`;
              return e.endsWith(".css")
                ? (0, n.jsx)(
                    "link",
                    {
                      precedence: "dynamic",
                      href: r,
                      rel: "stylesheet",
                      as: "style",
                      nonce: t.nonce,
                    },
                    e
                  )
                : ((0, o.preload)(r, {
                    as: "script",
                    fetchPriority: "low",
                    nonce: t.nonce,
                  }),
                  null);
            }),
          });
    }
  },
  869093,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "default", {
        enumerable: !0,
        get: function () {
          return u;
        },
      });
    let n = e.r(843476),
      o = e.r(271645),
      l = e.r(667585),
      i = e.r(652157);
    function a(e) {
      return { default: e && "default" in e ? e.default : e };
    }
    let s = {
        loader: () => Promise.resolve(a(() => null)),
        loading: null,
        ssr: !0,
      },
      u = function (e) {
        let t = { ...s, ...e },
          r = (0, o.lazy)(() => t.loader().then(a)),
          u = t.loading;
        function c(e) {
          let a = u
              ? (0, n.jsx)(u, { isLoading: !0, pastDelay: !0, error: null })
              : null,
            s = !t.ssr || !!t.loading,
            c = s ? o.Suspense : o.Fragment,
            d = t.ssr
              ? (0, n.jsxs)(n.Fragment, {
                  children: [
                    "undefined" == typeof window
                      ? (0, n.jsx)(i.PreloadChunks, { moduleIds: t.modules })
                      : null,
                    (0, n.jsx)(r, { ...e }),
                  ],
                })
              : (0, n.jsx)(l.BailoutToCSR, {
                  reason: "next/dynamic",
                  children: (0, n.jsx)(r, { ...e }),
                });
          return (0, n.jsx)(c, { ...(s ? { fallback: a } : {}), children: d });
        }
        return (c.displayName = "LoadableComponent"), c;
      };
  },
  770703,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "default", {
        enumerable: !0,
        get: function () {
          return o;
        },
      });
    let n = e.r(563141)._(e.r(869093));
    function o(e, t) {
      let r = {};
      "function" == typeof e && (r.loader = e);
      let o = { ...r, ...t };
      return (0, n.default)({ ...o, modules: o.loadableGenerated?.modules });
    }
    ("function" == typeof r.default ||
      ("object" == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, "__esModule", { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  848719,
  (e) => {
    "use strict";
    let t = (0, e.i(33550).default)("outline", "search", "Search", [
      [
        "path",
        { d: "M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0", key: "svg-0" },
      ],
      ["path", { d: "M21 21l-6 -6", key: "svg-1" }],
    ]);
    e.s(["IconSearch", () => t], 848719);
  },
  561026,
  (e) => {
    "use strict";
    var t = e.i(768834),
      r = e.i(579473);
    let n = (0, t.create)()(
      (0, r.persist)(
        (e) => ({
          presets: null,
          setPresets: (t) => e(() => ({ presets: t })),
          resetStore: () => e(() => ({})),
        }),
        { name: "presets-storage", skipHydration: !0 }
      )
    );
    e.s(["usePresetStore", 0, n]);
  },
  928835,
  (e) => {
    "use strict";
    let t, r;
    var n,
      o,
      l,
      i,
      a,
      s = e.i(271645),
      u = Object.defineProperty,
      c = Object.getOwnPropertySymbols,
      d = Object.prototype.hasOwnProperty,
      f = Object.prototype.propertyIsEnumerable,
      h = (e, t, r) =>
        t in e
          ? u(e, t, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: r,
            })
          : (e[t] = r),
      p = (e, t) => {
        for (var r in t || (t = {})) d.call(t, r) && h(e, r, t[r]);
        if (c) for (var r of c(t)) f.call(t, r) && h(e, r, t[r]);
        return e;
      },
      g = (e, t) => {
        var r = {};
        for (var n in e) d.call(e, n) && 0 > t.indexOf(n) && (r[n] = e[n]);
        if (null != e && c)
          for (var n of c(e)) 0 > t.indexOf(n) && f.call(e, n) && (r[n] = e[n]);
        return r;
      };
    ((e) => {
      let t = class t {
        constructor(e, r, n, l) {
          if (
            ((this.version = e),
            (this.errorCorrectionLevel = r),
            (this.modules = []),
            (this.isFunction = []),
            e < t.MIN_VERSION || e > t.MAX_VERSION)
          )
            throw RangeError("Version value out of range");
          if (l < -1 || l > 7) throw RangeError("Mask value out of range");
          this.size = 4 * e + 17;
          let i = [];
          for (let e = 0; e < this.size; e++) i.push(!1);
          for (let e = 0; e < this.size; e++)
            this.modules.push(i.slice()), this.isFunction.push(i.slice());
          this.drawFunctionPatterns();
          const a = this.addEccAndInterleave(n);
          if ((this.drawCodewords(a), -1 == l)) {
            let e = 1e9;
            for (let t = 0; t < 8; t++) {
              this.applyMask(t), this.drawFormatBits(t);
              const r = this.getPenaltyScore();
              r < e && ((l = t), (e = r)), this.applyMask(t);
            }
          }
          o(0 <= l && l <= 7),
            (this.mask = l),
            this.applyMask(l),
            this.drawFormatBits(l),
            (this.isFunction = []);
        }
        static encodeText(r, n) {
          let o = e.QrSegment.makeSegments(r);
          return t.encodeSegments(o, n);
        }
        static encodeBinary(r, n) {
          let o = e.QrSegment.makeBytes(r);
          return t.encodeSegments([o], n);
        }
        static encodeSegments(e, n, l = 1, a = 40, s = -1, u = !0) {
          let c, d;
          if (
            !(t.MIN_VERSION <= l && l <= a && a <= t.MAX_VERSION) ||
            s < -1 ||
            s > 7
          )
            throw RangeError("Invalid value");
          for (c = l; ; c++) {
            let r = 8 * t.getNumDataCodewords(c, n),
              o = i.getTotalBits(e, c);
            if (o <= r) {
              d = o;
              break;
            }
            if (c >= a) throw RangeError("Data too long");
          }
          for (let e of [t.Ecc.MEDIUM, t.Ecc.QUARTILE, t.Ecc.HIGH])
            u && d <= 8 * t.getNumDataCodewords(c, e) && (n = e);
          let f = [];
          for (let t of e)
            for (let e of (r(t.mode.modeBits, 4, f),
            r(t.numChars, t.mode.numCharCountBits(c), f),
            t.getData()))
              f.push(e);
          o(f.length == d);
          let h = 8 * t.getNumDataCodewords(c, n);
          o(f.length <= h),
            r(0, Math.min(4, h - f.length), f),
            r(0, (8 - (f.length % 8)) % 8, f),
            o(f.length % 8 == 0);
          for (let e = 236; f.length < h; e ^= 253) r(e, 8, f);
          let p = [];
          for (; 8 * p.length < f.length; ) p.push(0);
          return (
            f.forEach((e, t) => (p[t >>> 3] |= e << (7 - (7 & t)))),
            new t(c, n, p, s)
          );
        }
        getModule(e, t) {
          return (
            0 <= e &&
            e < this.size &&
            0 <= t &&
            t < this.size &&
            this.modules[t][e]
          );
        }
        getModules() {
          return this.modules;
        }
        drawFunctionPatterns() {
          for (let e = 0; e < this.size; e++)
            this.setFunctionModule(6, e, e % 2 == 0),
              this.setFunctionModule(e, 6, e % 2 == 0);
          this.drawFinderPattern(3, 3),
            this.drawFinderPattern(this.size - 4, 3),
            this.drawFinderPattern(3, this.size - 4);
          let e = this.getAlignmentPatternPositions(),
            t = e.length;
          for (let r = 0; r < t; r++)
            for (let n = 0; n < t; n++)
              (0 != r || 0 != n) &&
                (0 != r || n != t - 1) &&
                (r != t - 1 || 0 != n) &&
                this.drawAlignmentPattern(e[r], e[n]);
          this.drawFormatBits(0), this.drawVersion();
        }
        drawFormatBits(e) {
          let t = (this.errorCorrectionLevel.formatBits << 3) | e,
            r = t;
          for (let e = 0; e < 10; e++) r = (r << 1) ^ ((r >>> 9) * 1335);
          let l = ((t << 10) | r) ^ 21522;
          o(l >>> 15 == 0);
          for (let e = 0; e <= 5; e++) this.setFunctionModule(8, e, n(l, e));
          this.setFunctionModule(8, 7, n(l, 6)),
            this.setFunctionModule(8, 8, n(l, 7)),
            this.setFunctionModule(7, 8, n(l, 8));
          for (let e = 9; e < 15; e++)
            this.setFunctionModule(14 - e, 8, n(l, e));
          for (let e = 0; e < 8; e++)
            this.setFunctionModule(this.size - 1 - e, 8, n(l, e));
          for (let e = 8; e < 15; e++)
            this.setFunctionModule(8, this.size - 15 + e, n(l, e));
          this.setFunctionModule(8, this.size - 8, !0);
        }
        drawVersion() {
          if (this.version < 7) return;
          let e = this.version;
          for (let t = 0; t < 12; t++) e = (e << 1) ^ ((e >>> 11) * 7973);
          let t = (this.version << 12) | e;
          o(t >>> 18 == 0);
          for (let e = 0; e < 18; e++) {
            let r = n(t, e),
              o = this.size - 11 + (e % 3),
              l = Math.floor(e / 3);
            this.setFunctionModule(o, l, r), this.setFunctionModule(l, o, r);
          }
        }
        drawFinderPattern(e, t) {
          for (let r = -4; r <= 4; r++)
            for (let n = -4; n <= 4; n++) {
              let o = Math.max(Math.abs(n), Math.abs(r)),
                l = e + n,
                i = t + r;
              0 <= l &&
                l < this.size &&
                0 <= i &&
                i < this.size &&
                this.setFunctionModule(l, i, 2 != o && 4 != o);
            }
        }
        drawAlignmentPattern(e, t) {
          for (let r = -2; r <= 2; r++)
            for (let n = -2; n <= 2; n++)
              this.setFunctionModule(
                e + n,
                t + r,
                1 != Math.max(Math.abs(n), Math.abs(r))
              );
        }
        setFunctionModule(e, t, r) {
          (this.modules[t][e] = r), (this.isFunction[t][e] = !0);
        }
        addEccAndInterleave(e) {
          let r = this.version,
            n = this.errorCorrectionLevel;
          if (e.length != t.getNumDataCodewords(r, n))
            throw RangeError("Invalid argument");
          let l = t.NUM_ERROR_CORRECTION_BLOCKS[n.ordinal][r],
            i = t.ECC_CODEWORDS_PER_BLOCK[n.ordinal][r],
            a = Math.floor(t.getNumRawDataModules(r) / 8),
            s = l - (a % l),
            u = Math.floor(a / l),
            c = [],
            d = t.reedSolomonComputeDivisor(i);
          for (let r = 0, n = 0; r < l; r++) {
            let o = e.slice(n, n + u - i + (r < s ? 0 : 1));
            n += o.length;
            let l = t.reedSolomonComputeRemainder(o, d);
            r < s && o.push(0), c.push(o.concat(l));
          }
          let f = [];
          for (let e = 0; e < c[0].length; e++)
            c.forEach((t, r) => {
              (e != u - i || r >= s) && f.push(t[e]);
            });
          return o(f.length == a), f;
        }
        drawCodewords(e) {
          if (e.length != Math.floor(t.getNumRawDataModules(this.version) / 8))
            throw RangeError("Invalid argument");
          let r = 0;
          for (let t = this.size - 1; t >= 1; t -= 2) {
            6 == t && (t = 5);
            for (let o = 0; o < this.size; o++)
              for (let l = 0; l < 2; l++) {
                let i = t - l,
                  a = ((t + 1) & 2) == 0 ? this.size - 1 - o : o;
                !this.isFunction[a][i] &&
                  r < 8 * e.length &&
                  ((this.modules[a][i] = n(e[r >>> 3], 7 - (7 & r))), r++);
              }
          }
          o(r == 8 * e.length);
        }
        applyMask(e) {
          if (e < 0 || e > 7) throw RangeError("Mask value out of range");
          for (let t = 0; t < this.size; t++)
            for (let r = 0; r < this.size; r++) {
              let n;
              switch (e) {
                case 0:
                  n = (r + t) % 2 == 0;
                  break;
                case 1:
                  n = t % 2 == 0;
                  break;
                case 2:
                  n = r % 3 == 0;
                  break;
                case 3:
                  n = (r + t) % 3 == 0;
                  break;
                case 4:
                  n = (Math.floor(r / 3) + Math.floor(t / 2)) % 2 == 0;
                  break;
                case 5:
                  n = ((r * t) % 2) + ((r * t) % 3) == 0;
                  break;
                case 6:
                  n = (((r * t) % 2) + ((r * t) % 3)) % 2 == 0;
                  break;
                case 7:
                  n = (((r + t) % 2) + ((r * t) % 3)) % 2 == 0;
                  break;
                default:
                  throw Error("Unreachable");
              }
              !this.isFunction[t][r] &&
                n &&
                (this.modules[t][r] = !this.modules[t][r]);
            }
        }
        getPenaltyScore() {
          let e = 0;
          for (let r = 0; r < this.size; r++) {
            let n = !1,
              o = 0,
              l = [0, 0, 0, 0, 0, 0, 0];
            for (let i = 0; i < this.size; i++)
              this.modules[r][i] == n
                ? 5 == ++o
                  ? (e += t.PENALTY_N1)
                  : o > 5 && e++
                : (this.finderPenaltyAddHistory(o, l),
                  n || (e += this.finderPenaltyCountPatterns(l) * t.PENALTY_N3),
                  (n = this.modules[r][i]),
                  (o = 1));
            e += this.finderPenaltyTerminateAndCount(n, o, l) * t.PENALTY_N3;
          }
          for (let r = 0; r < this.size; r++) {
            let n = !1,
              o = 0,
              l = [0, 0, 0, 0, 0, 0, 0];
            for (let i = 0; i < this.size; i++)
              this.modules[i][r] == n
                ? 5 == ++o
                  ? (e += t.PENALTY_N1)
                  : o > 5 && e++
                : (this.finderPenaltyAddHistory(o, l),
                  n || (e += this.finderPenaltyCountPatterns(l) * t.PENALTY_N3),
                  (n = this.modules[i][r]),
                  (o = 1));
            e += this.finderPenaltyTerminateAndCount(n, o, l) * t.PENALTY_N3;
          }
          for (let r = 0; r < this.size - 1; r++)
            for (let n = 0; n < this.size - 1; n++) {
              let o = this.modules[r][n];
              o == this.modules[r][n + 1] &&
                o == this.modules[r + 1][n] &&
                o == this.modules[r + 1][n + 1] &&
                (e += t.PENALTY_N2);
            }
          let r = 0;
          for (let e of this.modules) r = e.reduce((e, t) => e + +!!t, r);
          let n = this.size * this.size,
            l = Math.ceil(Math.abs(20 * r - 10 * n) / n) - 1;
          return (
            o(0 <= l && l <= 9),
            o(0 <= (e += l * t.PENALTY_N4) && e <= 2568888),
            e
          );
        }
        getAlignmentPatternPositions() {
          if (1 == this.version) return [];
          {
            let e = Math.floor(this.version / 7) + 2,
              t =
                32 == this.version
                  ? 26
                  : 2 * Math.ceil((4 * this.version + 4) / (2 * e - 2)),
              r = [6];
            for (let n = this.size - 7; r.length < e; n -= t) r.splice(1, 0, n);
            return r;
          }
        }
        static getNumRawDataModules(e) {
          if (e < t.MIN_VERSION || e > t.MAX_VERSION)
            throw RangeError("Version number out of range");
          let r = (16 * e + 128) * e + 64;
          if (e >= 2) {
            let t = Math.floor(e / 7) + 2;
            (r -= (25 * t - 10) * t - 55), e >= 7 && (r -= 36);
          }
          return o(208 <= r && r <= 29648), r;
        }
        static getNumDataCodewords(e, r) {
          return (
            Math.floor(t.getNumRawDataModules(e) / 8) -
            t.ECC_CODEWORDS_PER_BLOCK[r.ordinal][e] *
              t.NUM_ERROR_CORRECTION_BLOCKS[r.ordinal][e]
          );
        }
        static reedSolomonComputeDivisor(e) {
          if (e < 1 || e > 255) throw RangeError("Degree out of range");
          let r = [];
          for (let t = 0; t < e - 1; t++) r.push(0);
          r.push(1);
          let n = 1;
          for (let o = 0; o < e; o++) {
            for (let e = 0; e < r.length; e++)
              (r[e] = t.reedSolomonMultiply(r[e], n)),
                e + 1 < r.length && (r[e] ^= r[e + 1]);
            n = t.reedSolomonMultiply(n, 2);
          }
          return r;
        }
        static reedSolomonComputeRemainder(e, r) {
          let n = r.map((e) => 0);
          for (let o of e) {
            let e = o ^ n.shift();
            n.push(0),
              r.forEach((r, o) => (n[o] ^= t.reedSolomonMultiply(r, e)));
          }
          return n;
        }
        static reedSolomonMultiply(e, t) {
          if (e >>> 8 != 0 || t >>> 8 != 0)
            throw RangeError("Byte out of range");
          let r = 0;
          for (let n = 7; n >= 0; n--)
            r = (r << 1) ^ ((r >>> 7) * 285) ^ (((t >>> n) & 1) * e);
          return o(r >>> 8 == 0), r;
        }
        finderPenaltyCountPatterns(e) {
          let t = e[1];
          o(t <= 3 * this.size);
          let r = t > 0 && e[2] == t && e[3] == 3 * t && e[4] == t && e[5] == t;
          return (
            (r && e[0] >= 4 * t && e[6] >= t ? 1 : 0) +
            (r && e[6] >= 4 * t && e[0] >= t ? 1 : 0)
          );
        }
        finderPenaltyTerminateAndCount(e, t, r) {
          return (
            e && (this.finderPenaltyAddHistory(t, r), (t = 0)),
            (t += this.size),
            this.finderPenaltyAddHistory(t, r),
            this.finderPenaltyCountPatterns(r)
          );
        }
        finderPenaltyAddHistory(e, t) {
          0 == t[0] && (e += this.size), t.pop(), t.unshift(e);
        }
      };
      function r(e, t, r) {
        if (t < 0 || t > 31 || e >>> t != 0)
          throw RangeError("Value out of range");
        for (let n = t - 1; n >= 0; n--) r.push((e >>> n) & 1);
      }
      function n(e, t) {
        return ((e >>> t) & 1) != 0;
      }
      function o(e) {
        if (!e) throw Error("Assertion error");
      }
      (t.MIN_VERSION = 1),
        (t.MAX_VERSION = 40),
        (t.PENALTY_N1 = 3),
        (t.PENALTY_N2 = 3),
        (t.PENALTY_N3 = 40),
        (t.PENALTY_N4 = 10),
        (t.ECC_CODEWORDS_PER_BLOCK = [
          [
            -1, 7, 10, 15, 20, 26, 18, 20, 24, 30, 18, 20, 24, 26, 30, 22, 24,
            28, 30, 28, 28, 28, 28, 30, 30, 26, 28, 30, 30, 30, 30, 30, 30, 30,
            30, 30, 30, 30, 30, 30, 30,
          ],
          [
            -1, 10, 16, 26, 18, 24, 16, 18, 22, 22, 26, 30, 22, 22, 24, 24, 28,
            28, 26, 26, 26, 26, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28,
            28, 28, 28, 28, 28, 28, 28,
          ],
          [
            -1, 13, 22, 18, 26, 18, 24, 18, 22, 20, 24, 28, 26, 24, 20, 30, 24,
            28, 28, 26, 30, 28, 30, 30, 30, 30, 28, 30, 30, 30, 30, 30, 30, 30,
            30, 30, 30, 30, 30, 30, 30,
          ],
          [
            -1, 17, 28, 22, 16, 22, 28, 26, 26, 24, 28, 24, 28, 22, 24, 24, 30,
            28, 28, 26, 28, 30, 24, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30,
            30, 30, 30, 30, 30, 30, 30,
          ],
        ]),
        (t.NUM_ERROR_CORRECTION_BLOCKS = [
          [
            -1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 4, 4, 4, 4, 4, 6, 6, 6, 6, 7, 8, 8,
            9, 9, 10, 12, 12, 12, 13, 14, 15, 16, 17, 18, 19, 19, 20, 21, 22,
            24, 25,
          ],
          [
            -1, 1, 1, 1, 2, 2, 4, 4, 4, 5, 5, 5, 8, 9, 9, 10, 10, 11, 13, 14,
            16, 17, 17, 18, 20, 21, 23, 25, 26, 28, 29, 31, 33, 35, 37, 38, 40,
            43, 45, 47, 49,
          ],
          [
            -1, 1, 1, 2, 2, 4, 4, 6, 6, 8, 8, 8, 10, 12, 16, 12, 17, 16, 18, 21,
            20, 23, 23, 25, 27, 29, 34, 34, 35, 38, 40, 43, 45, 48, 51, 53, 56,
            59, 62, 65, 68,
          ],
          [
            -1, 1, 1, 2, 4, 4, 4, 5, 6, 8, 8, 11, 11, 16, 16, 18, 16, 19, 21,
            25, 25, 25, 34, 30, 32, 35, 37, 40, 42, 45, 48, 51, 54, 57, 60, 63,
            66, 70, 74, 77, 81,
          ],
        ]),
        (e.QrCode = t);
      let l = class e {
        constructor(e, t, r) {
          if (((this.mode = e), (this.numChars = t), (this.bitData = r), t < 0))
            throw RangeError("Invalid argument");
          this.bitData = r.slice();
        }
        static makeBytes(t) {
          let n = [];
          for (let e of t) r(e, 8, n);
          return new e(e.Mode.BYTE, t.length, n);
        }
        static makeNumeric(t) {
          if (!e.isNumeric(t))
            throw RangeError("String contains non-numeric characters");
          let n = [];
          for (let e = 0; e < t.length; ) {
            let o = Math.min(t.length - e, 3);
            r(parseInt(t.substring(e, e + o), 10), 3 * o + 1, n), (e += o);
          }
          return new e(e.Mode.NUMERIC, t.length, n);
        }
        static makeAlphanumeric(t) {
          let n;
          if (!e.isAlphanumeric(t))
            throw RangeError(
              "String contains unencodable characters in alphanumeric mode"
            );
          let o = [];
          for (n = 0; n + 2 <= t.length; n += 2) {
            let l = 45 * e.ALPHANUMERIC_CHARSET.indexOf(t.charAt(n));
            r((l += e.ALPHANUMERIC_CHARSET.indexOf(t.charAt(n + 1))), 11, o);
          }
          return (
            n < t.length &&
              r(e.ALPHANUMERIC_CHARSET.indexOf(t.charAt(n)), 6, o),
            new e(e.Mode.ALPHANUMERIC, t.length, o)
          );
        }
        static makeSegments(t) {
          return "" == t
            ? []
            : e.isNumeric(t)
            ? [e.makeNumeric(t)]
            : e.isAlphanumeric(t)
            ? [e.makeAlphanumeric(t)]
            : [e.makeBytes(e.toUtf8ByteArray(t))];
        }
        static makeEci(t) {
          let n = [];
          if (t < 0) throw RangeError("ECI assignment value out of range");
          if (t < 128) r(t, 8, n);
          else if (t < 16384) r(2, 2, n), r(t, 14, n);
          else if (t < 1e6) r(6, 3, n), r(t, 21, n);
          else throw RangeError("ECI assignment value out of range");
          return new e(e.Mode.ECI, 0, n);
        }
        static isNumeric(t) {
          return e.NUMERIC_REGEX.test(t);
        }
        static isAlphanumeric(t) {
          return e.ALPHANUMERIC_REGEX.test(t);
        }
        getData() {
          return this.bitData.slice();
        }
        static getTotalBits(e, t) {
          let r = 0;
          for (let n of e) {
            let e = n.mode.numCharCountBits(t);
            if (n.numChars >= 1 << e) return 1 / 0;
            r += 4 + e + n.bitData.length;
          }
          return r;
        }
        static toUtf8ByteArray(e) {
          e = encodeURI(e);
          let t = [];
          for (let r = 0; r < e.length; r++)
            "%" != e.charAt(r)
              ? t.push(e.charCodeAt(r))
              : (t.push(parseInt(e.substring(r + 1, r + 3), 16)), (r += 2));
          return t;
        }
      };
      (l.NUMERIC_REGEX = /^[0-9]*$/),
        (l.ALPHANUMERIC_REGEX = /^[A-Z0-9 $%*+.\/:-]*$/),
        (l.ALPHANUMERIC_CHARSET =
          "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:");
      let i = l;
      e.QrSegment = l;
    })(a || (a = {})),
      (o = (n = a || (a = {})).QrCode || (n.QrCode = {})),
      ((t = class {
        constructor(e, t) {
          (this.ordinal = e), (this.formatBits = t);
        }
      }).LOW = new t(0, 1)),
      (t.MEDIUM = new t(1, 0)),
      (t.QUARTILE = new t(2, 3)),
      (t.HIGH = new t(3, 2)),
      (o.Ecc = t),
      (i = (l = a || (a = {})).QrSegment || (l.QrSegment = {})),
      ((r = class {
        constructor(e, t) {
          (this.modeBits = e), (this.numBitsCharCount = t);
        }
        numCharCountBits(e) {
          return this.numBitsCharCount[Math.floor((e + 7) / 17)];
        }
      }).NUMERIC = new r(1, [10, 12, 14])),
      (r.ALPHANUMERIC = new r(2, [9, 11, 13])),
      (r.BYTE = new r(4, [8, 16, 16])),
      (r.KANJI = new r(8, [8, 10, 12])),
      (r.ECI = new r(7, [0, 0, 0])),
      (i.Mode = r);
    var m = a,
      y = {
        L: m.QrCode.Ecc.LOW,
        M: m.QrCode.Ecc.MEDIUM,
        Q: m.QrCode.Ecc.QUARTILE,
        H: m.QrCode.Ecc.HIGH,
      },
      E = "#FFFFFF",
      v = "#000000";
    function C(e, t = 0) {
      let r = [];
      return (
        e.forEach(function (e, n) {
          let o = null;
          e.forEach(function (l, i) {
            if (!l && null !== o) {
              r.push(`M${o + t} ${n + t}h${i - o}v1H${o + t}z`), (o = null);
              return;
            }
            if (i === e.length - 1) {
              if (!l) return;
              null === o
                ? r.push(`M${i + t},${n + t} h1v1H${i + t}z`)
                : r.push(`M${o + t},${n + t} h${i + 1 - o}v1H${o + t}z`);
              return;
            }
            l && null === o && (o = i);
          });
        }),
        r.join("")
      );
    }
    function M(e, t) {
      return e
        .slice()
        .map((e, r) =>
          r < t.y || r >= t.y + t.h
            ? e
            : e.map((e, r) => (r < t.x || r >= t.x + t.w) && e)
        );
    }
    function w({
      value: e,
      level: t,
      minVersion: r,
      includeMargin: n,
      marginSize: o,
      imageSettings: l,
      size: i,
      boostLevel: a,
    }) {
      let u = s.default.useMemo(() => {
          let n = (Array.isArray(e) ? e : [e]).reduce(
            (e, t) => (e.push(...m.QrSegment.makeSegments(t)), e),
            []
          );
          return m.QrCode.encodeSegments(n, y[t], r, void 0, void 0, a);
        }, [e, t, r, a]),
        {
          cells: c,
          margin: d,
          numCells: f,
          calculatedImageSettings: h,
        } = s.default.useMemo(() => {
          let e = u.getModules(),
            t = null != o ? Math.max(Math.floor(o), 0) : 4 * !!n,
            r = e.length + 2 * t,
            a = (function (e, t, r, n) {
              if (null == n) return null;
              let o = e.length + 2 * r,
                l = Math.floor(0.1 * t),
                i = o / t,
                a = (n.width || l) * i,
                s = (n.height || l) * i,
                u = null == n.x ? e.length / 2 - a / 2 : n.x * i,
                c = null == n.y ? e.length / 2 - s / 2 : n.y * i,
                d = null == n.opacity ? 1 : n.opacity,
                f = null;
              if (n.excavate) {
                let e = Math.floor(u),
                  t = Math.floor(c),
                  r = Math.ceil(a + u - e),
                  n = Math.ceil(s + c - t);
                f = { x: e, y: t, w: r, h: n };
              }
              return {
                x: u,
                y: c,
                h: s,
                w: a,
                excavation: f,
                opacity: d,
                crossOrigin: n.crossOrigin,
              };
            })(e, i, t, l);
          return {
            cells: e,
            margin: t,
            numCells: r,
            calculatedImageSettings: a,
          };
        }, [u, i, l, n, o]);
      return {
        qrcode: u,
        margin: d,
        cells: c,
        numCells: f,
        calculatedImageSettings: h,
      };
    }
    var P = (function () {
      try {
        new Path2D().addPath(new Path2D());
      } catch (e) {
        return !1;
      }
      return !0;
    })();
    s.default.forwardRef(function (e, t) {
      let {
          value: r,
          size: n = 128,
          level: o = "L",
          bgColor: l = E,
          fgColor: i = v,
          includeMargin: a = !1,
          minVersion: u = 1,
          boostLevel: c,
          marginSize: d,
          imageSettings: f,
        } = e,
        h = g(e, [
          "value",
          "size",
          "level",
          "bgColor",
          "fgColor",
          "includeMargin",
          "minVersion",
          "boostLevel",
          "marginSize",
          "imageSettings",
        ]),
        { style: m } = h,
        y = g(h, ["style"]),
        R = null == f ? void 0 : f.src,
        b = s.default.useRef(null),
        S = s.default.useRef(null),
        _ = s.default.useCallback(
          (e) => {
            (b.current = e),
              "function" == typeof t ? t(e) : t && (t.current = e);
          },
          [t]
        ),
        [N, A] = s.default.useState(!1),
        {
          margin: O,
          cells: D,
          numCells: I,
          calculatedImageSettings: T,
        } = w({
          value: r,
          level: o,
          minVersion: u,
          boostLevel: c,
          includeMargin: a,
          marginSize: d,
          imageSettings: f,
          size: n,
        });
      s.default.useEffect(() => {
        if (null != b.current) {
          let e = b.current,
            t = e.getContext("2d");
          if (!t) return;
          let r = D,
            o = S.current,
            a =
              null != T &&
              null !== o &&
              o.complete &&
              0 !== o.naturalHeight &&
              0 !== o.naturalWidth;
          a && null != T.excavation && (r = M(D, T.excavation));
          let s = window.devicePixelRatio || 1;
          e.height = e.width = n * s;
          let u = (n / I) * s;
          t.scale(u, u),
            (t.fillStyle = l),
            t.fillRect(0, 0, I, I),
            (t.fillStyle = i),
            P
              ? t.fill(new Path2D(C(r, O)))
              : D.forEach(function (e, r) {
                  e.forEach(function (e, n) {
                    e && t.fillRect(n + O, r + O, 1, 1);
                  });
                }),
            T && (t.globalAlpha = T.opacity),
            a && t.drawImage(o, T.x + O, T.y + O, T.w, T.h);
        }
      }),
        s.default.useEffect(() => {
          A(!1);
        }, [R]);
      let L = p({ height: n, width: n }, m),
        x = null;
      return (
        null != R &&
          (x = s.default.createElement("img", {
            src: R,
            key: R,
            style: { display: "none" },
            onLoad: () => {
              A(!0);
            },
            ref: S,
            crossOrigin: null == T ? void 0 : T.crossOrigin,
          })),
        s.default.createElement(
          s.default.Fragment,
          null,
          s.default.createElement(
            "canvas",
            p({ style: L, height: n, width: n, ref: _, role: "img" }, y)
          ),
          x
        )
      );
    }).displayName = "QRCodeCanvas";
    var R = s.default.forwardRef(function (e, t) {
      let {
          value: r,
          size: n = 128,
          level: o = "L",
          bgColor: l = E,
          fgColor: i = v,
          includeMargin: a = !1,
          minVersion: u = 1,
          boostLevel: c,
          title: d,
          marginSize: f,
          imageSettings: h,
        } = e,
        m = g(e, [
          "value",
          "size",
          "level",
          "bgColor",
          "fgColor",
          "includeMargin",
          "minVersion",
          "boostLevel",
          "title",
          "marginSize",
          "imageSettings",
        ]),
        {
          margin: y,
          cells: P,
          numCells: R,
          calculatedImageSettings: b,
        } = w({
          value: r,
          level: o,
          minVersion: u,
          boostLevel: c,
          includeMargin: a,
          marginSize: f,
          imageSettings: h,
          size: n,
        }),
        S = P,
        _ = null;
      null != h &&
        null != b &&
        (null != b.excavation && (S = M(P, b.excavation)),
        (_ = s.default.createElement("image", {
          href: h.src,
          height: b.h,
          width: b.w,
          x: b.x + y,
          y: b.y + y,
          preserveAspectRatio: "none",
          opacity: b.opacity,
          crossOrigin: b.crossOrigin,
        })));
      let N = C(S, y);
      return s.default.createElement(
        "svg",
        p(
          {
            height: n,
            width: n,
            viewBox: `0 0 ${R} ${R}`,
            ref: t,
            role: "img",
          },
          m
        ),
        !!d && s.default.createElement("title", null, d),
        s.default.createElement("path", {
          fill: l,
          d: `M0,0 h${R}v${R}H0z`,
          shapeRendering: "crispEdges",
        }),
        s.default.createElement("path", {
          fill: i,
          d: N,
          shapeRendering: "crispEdges",
        }),
        _
      );
    });
    (R.displayName = "QRCodeSVG"), e.s(["QRCodeSVG", () => R]);
  },
]);
