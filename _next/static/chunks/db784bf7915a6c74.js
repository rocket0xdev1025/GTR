(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  315825,
  (e) => {
    "use strict";
    var t = e.i(768834),
      r = e.i(579473);
    let a = (0, t.create)()(
      (0, r.persist)(
        (e) => ({
          kycStatus: "",
          allStocks: [],
          isMarketOpen: !1,
          setKycStatus: (t) => e(() => ({ kycStatus: t })),
          setMarketOpen: (t) => e(() => ({ isMarketOpen: t })),
          setAllStocks: (t) => e(() => ({ allStocks: t })),
          resetStore: () => e(() => ({ kycStatus: "", isMarketOpen: !1 })),
        }),
        { name: "stock-storage", skipHydration: !0 }
      )
    );
    e.s(["useStockStore", 0, a]);
  },
  625568,
  (e) => {
    "use strict";
    var t = e.i(843476),
      r = e.i(737701),
      a = e.i(890357),
      s = e.i(561026),
      n = e.i(315825),
      o = e.i(862278),
      i = e.i(271645);
    function l({ children: e }) {
      let [l, c] = (0, i.useState)(!1);
      return ((0, i.useEffect)(() => {
        (async () => {
          await Promise.all([
            a.useCategoryStore.persist.rehydrate(),
            a.useBalanceStore.persist.rehydrate(),
            a.useProfileStore.persist.rehydrate(),
            a.useExchangeStore.persist.rehydrate(),
            n.useStockStore.persist.rehydrate(),
            s.usePresetStore.persist.rehydrate(),
            o.useHyperliquidStore.persist.rehydrate(),
          ]),
            c(!0);
        })();
      }, []),
      l)
        ? e
        : (0, t.jsx)(r.default, {});
    }
    e.s(["default", () => l]);
  },
  12447,
  (e, t, r) => {
    t.exports = function (e) {
      var t = typeof e;
      return null != e && ("object" == t || "function" == t);
    };
  },
  100236,
  (e, t, r) => {
    t.exports = e.g && e.g.Object === Object && e.g;
  },
  139088,
  (e, t, r) => {
    var a = e.r(100236),
      s = "object" == typeof self && self && self.Object === Object && self;
    t.exports = a || s || Function("return this")();
  },
  631926,
  (e, t, r) => {
    var a = e.r(139088);
    t.exports = function () {
      return a.Date.now();
    };
  },
  748891,
  (e, t, r) => {
    var a = /\s/;
    t.exports = function (e) {
      for (var t = e.length; t-- && a.test(e.charAt(t)); );
      return t;
    };
  },
  830364,
  (e, t, r) => {
    var a = e.r(748891),
      s = /^\s+/;
    t.exports = function (e) {
      return e ? e.slice(0, a(e) + 1).replace(s, "") : e;
    };
  },
  630353,
  (e, t, r) => {
    t.exports = e.r(139088).Symbol;
  },
  243436,
  (e, t, r) => {
    var a = e.r(630353),
      s = Object.prototype,
      n = s.hasOwnProperty,
      o = s.toString,
      i = a ? a.toStringTag : void 0;
    t.exports = function (e) {
      var t = n.call(e, i),
        r = e[i];
      try {
        e[i] = void 0;
        var a = !0;
      } catch (e) {}
      var s = o.call(e);
      return a && (t ? (e[i] = r) : delete e[i]), s;
    };
  },
  223243,
  (e, t, r) => {
    var a = Object.prototype.toString;
    t.exports = function (e) {
      return a.call(e);
    };
  },
  377684,
  (e, t, r) => {
    var a = e.r(630353),
      s = e.r(243436),
      n = e.r(223243),
      o = a ? a.toStringTag : void 0;
    t.exports = function (e) {
      return null == e
        ? void 0 === e
          ? "[object Undefined]"
          : "[object Null]"
        : o && o in Object(e)
        ? s(e)
        : n(e);
    };
  },
  877289,
  (e, t, r) => {
    t.exports = function (e) {
      return null != e && "object" == typeof e;
    };
  },
  361884,
  (e, t, r) => {
    var a = e.r(377684),
      s = e.r(877289);
    t.exports = function (e) {
      return "symbol" == typeof e || (s(e) && "[object Symbol]" == a(e));
    };
  },
  773759,
  (e, t, r) => {
    var a = e.r(830364),
      s = e.r(12447),
      n = e.r(361884),
      o = 0 / 0,
      i = /^[-+]0x[0-9a-f]+$/i,
      l = /^0b[01]+$/i,
      c = /^0o[0-7]+$/i,
      d = parseInt;
    t.exports = function (e) {
      if ("number" == typeof e) return e;
      if (n(e)) return o;
      if (s(e)) {
        var t = "function" == typeof e.valueOf ? e.valueOf() : e;
        e = s(t) ? t + "" : t;
      }
      if ("string" != typeof e) return 0 === e ? e : +e;
      e = a(e);
      var r = l.test(e);
      return r || c.test(e) ? d(e.slice(2), r ? 2 : 8) : i.test(e) ? o : +e;
    };
  },
  374009,
  (e, t, r) => {
    var a = e.r(12447),
      s = e.r(631926),
      n = e.r(773759),
      o = Math.max,
      i = Math.min;
    t.exports = function (e, t, r) {
      var l,
        c,
        d,
        u,
        m,
        p,
        h = 0,
        f = !1,
        x = !1,
        g = !0;
      if ("function" != typeof e) throw TypeError("Expected a function");
      function v(t) {
        var r = l,
          a = c;
        return (l = c = void 0), (h = t), (u = e.apply(a, r));
      }
      function b(e) {
        var r = e - p,
          a = e - h;
        return void 0 === p || r >= t || r < 0 || (x && a >= d);
      }
      function y() {
        var e,
          r,
          a,
          n = s();
        if (b(n)) return S(n);
        m = setTimeout(
          y,
          ((e = n - p), (r = n - h), (a = t - e), x ? i(a, d - r) : a)
        );
      }
      function S(e) {
        return ((m = void 0), g && l) ? v(e) : ((l = c = void 0), u);
      }
      function w() {
        var e,
          r = s(),
          a = b(r);
        if (((l = arguments), (c = this), (p = r), a)) {
          if (void 0 === m)
            return (h = e = p), (m = setTimeout(y, t)), f ? v(e) : u;
          if (x) return clearTimeout(m), (m = setTimeout(y, t)), v(p);
        }
        return void 0 === m && (m = setTimeout(y, t)), u;
      }
      return (
        (t = n(t) || 0),
        a(r) &&
          ((f = !!r.leading),
          (d = (x = "maxWait" in r) ? o(n(r.maxWait) || 0, t) : d),
          (g = "trailing" in r ? !!r.trailing : g)),
        (w.cancel = function () {
          void 0 !== m && clearTimeout(m), (h = 0), (l = p = c = m = void 0);
        }),
        (w.flush = function () {
          return void 0 === m ? u : S(s());
        }),
        w
      );
    };
  },
  224283,
  (e, t, r) => {
    var a = e.r(374009),
      s = e.r(12447);
    t.exports = function (e, t, r) {
      var n = !0,
        o = !0;
      if ("function" != typeof e) throw TypeError("Expected a function");
      return (
        s(r) &&
          ((n = "leading" in r ? !!r.leading : n),
          (o = "trailing" in r ? !!r.trailing : o)),
        a(e, t, { leading: n, maxWait: t, trailing: o })
      );
    };
  },
  596860,
  (e) => {
    e.v({
      fall: "Snowfall-module__TC0oGq__fall",
      snowflake: "Snowfall-module__TC0oGq__snowflake",
    });
  },
  888708,
  (e) => {
    "use strict";
    let t;
    var r = e.i(843476);
    e.i(247167);
    var a = e.i(271645);
    function s(e, t) {
      return {
        ...e,
        rpcUrls: { ...e.rpcUrls, privyWalletOverride: { http: [t] } },
      };
    }
    var n = e.i(211441),
      n = n,
      o = e.i(541473),
      i = e.i(176394),
      l = e.i(297197),
      c = e.i(746256),
      d = e.i(236983),
      u = e.i(86811),
      m = e.i(625421);
    let p = (0, e.i(538463).defineChain)({
      id: 421614,
      name: "Arbitrum Sepolia",
      blockTime: 250,
      nativeCurrency: {
        name: "Arbitrum Sepolia Ether",
        symbol: "ETH",
        decimals: 18,
      },
      rpcUrls: {
        default: { http: ["https://sepolia-rollup.arbitrum.io/rpc"] },
      },
      blockExplorers: {
        default: {
          name: "Arbiscan",
          url: "https://sepolia.arbiscan.io",
          apiUrl: "https://api-sepolia.arbiscan.io/api",
        },
      },
      contracts: {
        multicall3: {
          address: "0xca11bde05977b3631167028862be2a173976ca11",
          blockCreated: 81930,
        },
      },
      testnet: !0,
    });
    var h = e.i(792890),
      f = e.i(615892),
      x = e.i(631780),
      g = e.i(431213);
    function v({ children: e }) {
      let [t, o] = a.default.useState(!1),
        v = s(
          d.arbitrum,
          "https://arb-mainnet.g.alchemy.com/v2/adKSgbGvAJ_qsIxTU0rQuNIsuRzDfn3s"
        ),
        y = s(
          c.bsc,
          "https://bnb-mainnet.g.alchemy.com/v2/adKSgbGvAJ_qsIxTU0rQuNIsuRzDfn3s"
        );
      return (0, r.jsx)(n.V, {
        appId: "cm1f11s7a031z11l7x40nhoxl",
        clientId: "client-WY5bpZWgieM1voADY1J88o4jTzhwp8ipspHBsPTNB7HN2",
        config: {
          appearance: { theme: "dark", accentColor: "#FFFFFF" },
          defaultChain: l.base,
          embeddedWallets: { createOnLogin: "users-without-wallets" },
          supportedChains: [
            l.base,
            y,
            v,
            u.sonic,
            m.berachain,
            p,
            h.polygon,
            f.abstract,
            x.monad,
            g.robinhood,
          ],
          loginMethods: ["email", "twitter"],
        },
        children: (0, r.jsxs)(i.SmartWalletsProvider, {
          children: [
            (0, r.jsx)(b, { onTimeout: () => o(!0), isMaintenanceShown: t }),
            e,
          ],
        }),
      });
    }
    function b({ onTimeout: e, isMaintenanceShown: t }) {
      let { ready: r } = (0, o.usePrivy)();
      return (
        a.default.useEffect(() => {
          if (r || t) return;
          let a = setTimeout(() => {
            r || e();
          }, 5e3);
          return () => clearTimeout(a);
        }, [r, e, t]),
        null
      );
    }
    function y(e) {
      return "auto" === e || "dark" === e || "light" === e;
    }
    var S = e.i(290098),
      w = e.i(945981),
      j = e.i(682451),
      k = e.i(522442);
    function N() {
      let e = (0, k.useMantineTheme)(),
        t = (0, S.useMantineStyleNonce)(),
        a = (0, w.keys)(e.breakpoints).reduce((t, r) => {
          let a = e.breakpoints[r].includes("px"),
            s = (function (e) {
              let t =
                "string" == typeof e && e.includes("var(--mantine-scale)")
                  ? e
                      .match(/^calc\((.*?)\)$/)?.[1]
                      .split("*")[0]
                      .trim()
                  : e;
              return "number" == typeof t
                ? t
                : "string" == typeof t
                ? t.includes("calc") || t.includes("var")
                  ? t
                  : t.includes("px")
                  ? Number(t.replace("px", ""))
                  : t.includes("rem")
                  ? 16 * Number(t.replace("rem", ""))
                  : t.includes("em")
                  ? 16 * Number(t.replace("em", ""))
                  : Number(t)
                : NaN;
            })(e.breakpoints[r]),
            n = a ? `${s - 0.1}px` : (0, j.em)(s - 0.1),
            o = a ? `${s}px` : (0, j.em)(s);
          return `${t}@media (max-width: ${n}) {.mantine-visible-from-${r} {display: none !important;}}@media (min-width: ${o}) {.mantine-hidden-from-${r} {display: none !important;}}`;
        }, "");
      return (0, r.jsx)("style", {
        "data-mantine-styles": "classes",
        nonce: t?.(),
        dangerouslySetInnerHTML: { __html: a },
      });
    }
    function C(e) {
      return Object.entries(e)
        .map(([e, t]) => `${e}: ${t};`)
        .join("");
    }
    function E(e, t) {
      return (Array.isArray(e) ? e : [e]).reduce((e, t) => `${t}{${e}}`, t);
    }
    var P = e.i(395335),
      T = e.i(355634),
      A = e.i(835783),
      D = e.i(171255);
    function M({
      theme: e,
      color: t,
      colorScheme: r,
      name: a = t,
      withColorValues: s = !0,
    }) {
      if (!e.colors[t]) return {};
      if ("light" === r) {
        let r = (0, T.getPrimaryShade)(e, "light"),
          n = {
            [`--mantine-color-${a}-text`]: `var(--mantine-color-${a}-filled)`,
            [`--mantine-color-${a}-filled`]: `var(--mantine-color-${a}-${r})`,
            [`--mantine-color-${a}-filled-hover`]: `var(--mantine-color-${a}-${
              9 === r ? 8 : r + 1
            })`,
            [`--mantine-color-${a}-light`]: (0, D.alpha)(e.colors[t][r], 0.1),
            [`--mantine-color-${a}-light-hover`]: (0, D.alpha)(
              e.colors[t][r],
              0.12
            ),
            [`--mantine-color-${a}-light-color`]: `var(--mantine-color-${a}-${r})`,
            [`--mantine-color-${a}-outline`]: `var(--mantine-color-${a}-${r})`,
            [`--mantine-color-${a}-outline-hover`]: (0, D.alpha)(
              e.colors[t][r],
              0.05
            ),
          };
        return s
          ? {
              [`--mantine-color-${a}-0`]: e.colors[t][0],
              [`--mantine-color-${a}-1`]: e.colors[t][1],
              [`--mantine-color-${a}-2`]: e.colors[t][2],
              [`--mantine-color-${a}-3`]: e.colors[t][3],
              [`--mantine-color-${a}-4`]: e.colors[t][4],
              [`--mantine-color-${a}-5`]: e.colors[t][5],
              [`--mantine-color-${a}-6`]: e.colors[t][6],
              [`--mantine-color-${a}-7`]: e.colors[t][7],
              [`--mantine-color-${a}-8`]: e.colors[t][8],
              [`--mantine-color-${a}-9`]: e.colors[t][9],
              ...n,
            }
          : n;
      }
      let n = (0, T.getPrimaryShade)(e, "dark"),
        o = {
          [`--mantine-color-${a}-text`]: `var(--mantine-color-${a}-4)`,
          [`--mantine-color-${a}-filled`]: `var(--mantine-color-${a}-${n})`,
          [`--mantine-color-${a}-filled-hover`]: `var(--mantine-color-${a}-${
            9 === n ? 8 : n + 1
          })`,
          [`--mantine-color-${a}-light`]: (0, D.alpha)(
            e.colors[t][Math.max(0, n - 2)],
            0.15
          ),
          [`--mantine-color-${a}-light-hover`]: (0, D.alpha)(
            e.colors[t][Math.max(0, n - 2)],
            0.2
          ),
          [`--mantine-color-${a}-light-color`]: `var(--mantine-color-${a}-${Math.max(
            n - 5,
            0
          )})`,
          [`--mantine-color-${a}-outline`]: `var(--mantine-color-${a}-${Math.max(
            n - 4,
            0
          )})`,
          [`--mantine-color-${a}-outline-hover`]: (0, D.alpha)(
            e.colors[t][Math.max(n - 4, 0)],
            0.05
          ),
        };
      return s
        ? {
            [`--mantine-color-${a}-0`]: e.colors[t][0],
            [`--mantine-color-${a}-1`]: e.colors[t][1],
            [`--mantine-color-${a}-2`]: e.colors[t][2],
            [`--mantine-color-${a}-3`]: e.colors[t][3],
            [`--mantine-color-${a}-4`]: e.colors[t][4],
            [`--mantine-color-${a}-5`]: e.colors[t][5],
            [`--mantine-color-${a}-6`]: e.colors[t][6],
            [`--mantine-color-${a}-7`]: e.colors[t][7],
            [`--mantine-color-${a}-8`]: e.colors[t][8],
            [`--mantine-color-${a}-9`]: e.colors[t][9],
            ...o,
          }
        : o;
    }
    function $(e, t, r) {
      (0, w.keys)(t).forEach((a) =>
        Object.assign(e, { [`--mantine-${r}-${a}`]: t[a] })
      );
    }
    let O = (e) => {
        let t = (0, T.getPrimaryShade)(e, "light"),
          r =
            e.defaultRadius in e.radius
              ? e.radius[e.defaultRadius]
              : (0, j.rem)(e.defaultRadius),
          a = {
            variables: {
              "--mantine-z-index-app": "100",
              "--mantine-z-index-modal": "200",
              "--mantine-z-index-popover": "300",
              "--mantine-z-index-overlay": "400",
              "--mantine-z-index-max": "9999",
              "--mantine-scale": e.scale.toString(),
              "--mantine-cursor-type": e.cursorType,
              "--mantine-webkit-font-smoothing": e.fontSmoothing
                ? "antialiased"
                : "unset",
              "--mantine-moz-font-smoothing": e.fontSmoothing
                ? "grayscale"
                : "unset",
              "--mantine-color-white": e.white,
              "--mantine-color-black": e.black,
              "--mantine-line-height": e.lineHeights.md,
              "--mantine-font-family": e.fontFamily,
              "--mantine-font-family-monospace": e.fontFamilyMonospace,
              "--mantine-font-family-headings": e.headings.fontFamily,
              "--mantine-heading-font-weight": e.headings.fontWeight,
              "--mantine-heading-text-wrap": e.headings.textWrap,
              "--mantine-radius-default": r,
              "--mantine-primary-color-filled": `var(--mantine-color-${e.primaryColor}-filled)`,
              "--mantine-primary-color-filled-hover": `var(--mantine-color-${e.primaryColor}-filled-hover)`,
              "--mantine-primary-color-light": `var(--mantine-color-${e.primaryColor}-light)`,
              "--mantine-primary-color-light-hover": `var(--mantine-color-${e.primaryColor}-light-hover)`,
              "--mantine-primary-color-light-color": `var(--mantine-color-${e.primaryColor}-light-color)`,
            },
            light: {
              "--mantine-color-scheme": "light",
              "--mantine-primary-color-contrast": (0,
              A.getPrimaryContrastColor)(e, "light"),
              "--mantine-color-bright": "var(--mantine-color-black)",
              "--mantine-color-text": e.black,
              "--mantine-color-body": e.white,
              "--mantine-color-error": "var(--mantine-color-red-6)",
              "--mantine-color-placeholder": "var(--mantine-color-gray-5)",
              "--mantine-color-anchor": `var(--mantine-color-${e.primaryColor}-${t})`,
              "--mantine-color-default": "var(--mantine-color-white)",
              "--mantine-color-default-hover": "var(--mantine-color-gray-0)",
              "--mantine-color-default-color": "var(--mantine-color-black)",
              "--mantine-color-default-border": "var(--mantine-color-gray-4)",
              "--mantine-color-dimmed": "var(--mantine-color-gray-6)",
              "--mantine-color-disabled": "var(--mantine-color-gray-2)",
              "--mantine-color-disabled-color": "var(--mantine-color-gray-5)",
              "--mantine-color-disabled-border": "var(--mantine-color-gray-3)",
            },
            dark: {
              "--mantine-color-scheme": "dark",
              "--mantine-primary-color-contrast": (0,
              A.getPrimaryContrastColor)(e, "dark"),
              "--mantine-color-bright": "var(--mantine-color-white)",
              "--mantine-color-text": "var(--mantine-color-dark-0)",
              "--mantine-color-body": "var(--mantine-color-dark-7)",
              "--mantine-color-error": "var(--mantine-color-red-8)",
              "--mantine-color-placeholder": "var(--mantine-color-dark-3)",
              "--mantine-color-anchor": `var(--mantine-color-${e.primaryColor}-4)`,
              "--mantine-color-default": "var(--mantine-color-dark-6)",
              "--mantine-color-default-hover": "var(--mantine-color-dark-5)",
              "--mantine-color-default-color": "var(--mantine-color-white)",
              "--mantine-color-default-border": "var(--mantine-color-dark-4)",
              "--mantine-color-dimmed": "var(--mantine-color-dark-2)",
              "--mantine-color-disabled": "var(--mantine-color-dark-6)",
              "--mantine-color-disabled-color": "var(--mantine-color-dark-3)",
              "--mantine-color-disabled-border": "var(--mantine-color-dark-4)",
            },
          };
        $(a.variables, e.breakpoints, "breakpoint"),
          $(a.variables, e.spacing, "spacing"),
          $(a.variables, e.fontSizes, "font-size"),
          $(a.variables, e.lineHeights, "line-height"),
          $(a.variables, e.shadows, "shadow"),
          $(a.variables, e.radius, "radius"),
          e.colors[e.primaryColor].forEach((t, r) => {
            a.variables[
              `--mantine-primary-color-${r}`
            ] = `var(--mantine-color-${e.primaryColor}-${r})`;
          }),
          (0, w.keys)(e.colors).forEach((t) => {
            let r = e.colors[t];
            if (r && "object" == typeof r && "mantine-virtual-color" in r) {
              Object.assign(
                a.light,
                M({
                  theme: e,
                  name: r.name,
                  color: r.light,
                  colorScheme: "light",
                  withColorValues: !0,
                })
              ),
                Object.assign(
                  a.dark,
                  M({
                    theme: e,
                    name: r.name,
                    color: r.dark,
                    colorScheme: "dark",
                    withColorValues: !0,
                  })
                );
              return;
            }
            r.forEach((e, r) => {
              a.variables[`--mantine-color-${t}-${r}`] = e;
            }),
              Object.assign(
                a.light,
                M({
                  theme: e,
                  color: t,
                  colorScheme: "light",
                  withColorValues: !1,
                })
              ),
              Object.assign(
                a.dark,
                M({
                  theme: e,
                  color: t,
                  colorScheme: "dark",
                  withColorValues: !1,
                })
              );
          });
        let s = e.headings.sizes;
        return (
          (0, w.keys)(s).forEach((t) => {
            (a.variables[`--mantine-${t}-font-size`] = s[t].fontSize),
              (a.variables[`--mantine-${t}-line-height`] = s[t].lineHeight),
              (a.variables[`--mantine-${t}-font-weight`] =
                s[t].fontWeight || e.headings.fontWeight);
          }),
          a
        );
      },
      R = O(e.i(38944).DEFAULT_THEME);
    function B({ cssVariablesSelector: e, deduplicateCssVariables: t }) {
      var a;
      let s,
        n,
        o,
        i,
        l,
        c,
        d,
        u = (0, k.useMantineTheme)(),
        m = (0, S.useMantineStyleNonce)(),
        p = (function ({ theme: e, generator: t }) {
          let r = O(e),
            a = t?.(e);
          return a ? (0, P.deepMerge)(r, a) : r;
        })({ theme: u, generator: (0, S.useMantineCssVariablesResolver)() }),
        h = ":root" === e && t,
        f =
          ((a = h
            ? ((s = { variables: {}, light: {}, dark: {} }),
              (0, w.keys)(p.variables).forEach((e) => {
                R.variables[e] !== p.variables[e] &&
                  (s.variables[e] = p.variables[e]);
              }),
              (0, w.keys)(p.light).forEach((e) => {
                R.light[e] !== p.light[e] && (s.light[e] = p.light[e]);
              }),
              (0, w.keys)(p.dark).forEach((e) => {
                R.dark[e] !== p.dark[e] && (s.dark[e] = p.dark[e]);
              }),
              s)
            : p),
          (o = (n = C(a.variables)) ? E(e, n) : ""),
          (i = C(a.dark)),
          (l = C(a.light)),
          (c = i
            ? ":host" === e
              ? E(`${e}([data-mantine-color-scheme="dark"])`, i)
              : E(`${e}[data-mantine-color-scheme="dark"]`, i)
            : ""),
          (d = l
            ? ":host" === e
              ? E(`${e}([data-mantine-color-scheme="light"])`, l)
              : E(`${e}[data-mantine-color-scheme="light"]`, l)
            : ""),
          `${o}

${c}

${d}`);
      return f
        ? (0, r.jsx)("style", {
            "data-mantine-styles": !0,
            nonce: m?.(),
            dangerouslySetInnerHTML: {
              __html: `${f}${
                h
                  ? ""
                  : `
  ${e}[data-mantine-color-scheme="dark"] { --mantine-color-scheme: dark; }
  ${e}[data-mantine-color-scheme="light"] { --mantine-color-scheme: light; }
`
              }`,
            },
          })
        : null;
    }
    B.displayName = "@mantine/CssVariables";
    var I = e.i(931141);
    function L(e, t) {
      let r =
        "matchMedia" in window &&
        window.matchMedia("(prefers-color-scheme: dark)")?.matches;
      t()?.setAttribute(
        "data-mantine-color-scheme",
        "auto" !== e ? e : r ? "dark" : "light"
      );
    }
    function F({
      theme: e,
      children: t,
      getStyleNonce: s,
      withStaticClasses: n = !0,
      withGlobalClasses: o = !0,
      deduplicateCssVariables: i = !0,
      withCssVariables: l = !0,
      cssVariablesSelector: c = ":root",
      classNamesPrefix: d = "mantine",
      colorSchemeManager: u = (function ({
        key: e = "mantine-color-scheme-value",
      } = {}) {
        let t;
        return {
          get: (t) => {
            try {
              let r = window.localStorage.getItem(e);
              return y(r) ? r : t;
            } catch {
              return t;
            }
          },
          set: (t) => {
            try {
              window.localStorage.setItem(e, t);
            } catch (e) {
              console.warn(
                "[@mantine/core] Local storage color scheme manager was unable to save color scheme.",
                e
              );
            }
          },
          subscribe: (r) => {
            (t = (t) => {
              t.storageArea === window.localStorage &&
                t.key === e &&
                y(t.newValue) &&
                r(t.newValue);
            }),
              window.addEventListener("storage", t);
          },
          unsubscribe: () => {
            window.removeEventListener("storage", t);
          },
          clear: () => {
            window.localStorage.removeItem(e);
          },
        };
      })(),
      defaultColorScheme: m = "light",
      getRootElement: p = () => document.documentElement,
      cssVariablesResolver: h,
      forceColorScheme: f,
      stylesTransform: x,
      env: g,
    }) {
      let {
        colorScheme: v,
        setColorScheme: b,
        clearColorScheme: w,
      } = (function ({
        manager: e,
        defaultColorScheme: t,
        getRootElement: r,
        forceColorScheme: s,
      }) {
        let n = (0, a.useRef)(null),
          [o, i] = (0, a.useState)(() => e.get(t)),
          l = s || o,
          c = (0, a.useCallback)(
            (t) => {
              s || (L(t, r), i(t), e.set(t));
            },
            [e.set, l, s]
          ),
          d = (0, a.useCallback)(() => {
            i(t), L(t, r), e.clear();
          }, [e.clear, t]);
        return (
          (0, a.useEffect)(
            () => (e.subscribe(c), e.unsubscribe),
            [e.subscribe, e.unsubscribe]
          ),
          (0, I.useIsomorphicEffect)(() => {
            L(e.get(t), r);
          }, []),
          (0, a.useEffect)(() => {
            if (s) return L(s, r), () => {};
            void 0 === s && L(o, r),
              "matchMedia" in window &&
                (n.current = window.matchMedia("(prefers-color-scheme: dark)"));
            let e = (e) => {
              "auto" === o && L(e.matches ? "dark" : "light", r);
            };
            return (
              n.current?.addEventListener("change", e),
              () => n.current?.removeEventListener("change", e)
            );
          }, [o, s]),
          { colorScheme: l, setColorScheme: c, clearColorScheme: d }
        );
      })({
        defaultColorScheme: m,
        forceColorScheme: f,
        manager: u,
        getRootElement: p,
      });
      return (
        !(function ({ respectReducedMotion: e, getRootElement: t }) {
          (0, I.useIsomorphicEffect)(() => {
            e && t()?.setAttribute("data-respect-reduced-motion", "true");
          }, [e]);
        })({
          respectReducedMotion: e?.respectReducedMotion || !1,
          getRootElement: p,
        }),
        (0, r.jsx)(S.MantineContext.Provider, {
          value: {
            colorScheme: v,
            setColorScheme: b,
            clearColorScheme: w,
            getRootElement: p,
            classNamesPrefix: d,
            getStyleNonce: s,
            cssVariablesResolver: h,
            cssVariablesSelector: c,
            withStaticClasses: n,
            stylesTransform: x,
            env: g,
          },
          children: (0, r.jsxs)(k.MantineThemeProvider, {
            theme: e,
            children: [
              l &&
                (0, r.jsx)(B, {
                  cssVariablesSelector: c,
                  deduplicateCssVariables: i,
                }),
              o && (0, r.jsx)(N, {}),
              t,
            ],
          }),
        })
      );
    }
    F.displayName = "@mantine/core/MantineProvider";
    var _ = e.i(915874),
      z = e.i(931067),
      W = e.i(971151),
      U = e.i(885963);
    function H(e, t) {
      (e.prototype = Object.create(t.prototype)),
        (e.prototype.constructor = e),
        (0, U.default)(e, t);
    }
    let V = a.default.createContext(null);
    function K(e, t) {
      var r = Object.create(null);
      return (
        e &&
          a.Children.map(e, function (e) {
            return e;
          }).forEach(function (e) {
            r[e.key] = t && (0, a.isValidElement)(e) ? t(e) : e;
          }),
        r
      );
    }
    function q(e, t, r) {
      return null != r[t] ? r[t] : e.props[t];
    }
    var G =
        Object.values ||
        function (e) {
          return Object.keys(e).map(function (t) {
            return e[t];
          });
        },
      J = (function (e) {
        function t(t, r) {
          var a = e.call(this, t, r) || this,
            s = a.handleExited.bind((0, W.default)(a));
          return (
            (a.state = {
              contextValue: { isMounting: !0 },
              handleExited: s,
              firstRender: !0,
            }),
            a
          );
        }
        H(t, e);
        var r = t.prototype;
        return (
          (r.componentDidMount = function () {
            (this.mounted = !0),
              this.setState({ contextValue: { isMounting: !1 } });
          }),
          (r.componentWillUnmount = function () {
            this.mounted = !1;
          }),
          (t.getDerivedStateFromProps = function (e, t) {
            var r,
              s,
              n = t.children,
              o = t.handleExited;
            return {
              children: t.firstRender
                ? K(e.children, function (t) {
                    return (0,
                    a.cloneElement)(t, { onExited: o.bind(null, t), in: !0, appear: q(t, "appear", e), enter: q(t, "enter", e), exit: q(t, "exit", e) });
                  })
                : (Object.keys(
                    (s = (function (e, t) {
                      function r(r) {
                        return r in t ? t[r] : e[r];
                      }
                      (e = e || {}), (t = t || {});
                      var a,
                        s = Object.create(null),
                        n = [];
                      for (var o in e)
                        o in t ? n.length && ((s[o] = n), (n = [])) : n.push(o);
                      var i = {};
                      for (var l in t) {
                        if (s[l])
                          for (a = 0; a < s[l].length; a++) {
                            var c = s[l][a];
                            i[s[l][a]] = r(c);
                          }
                        i[l] = r(l);
                      }
                      for (a = 0; a < n.length; a++) i[n[a]] = r(n[a]);
                      return i;
                    })(n, (r = K(e.children))))
                  ).forEach(function (t) {
                    var i = s[t];
                    if ((0, a.isValidElement)(i)) {
                      var l = t in n,
                        c = t in r,
                        d = n[t],
                        u = (0, a.isValidElement)(d) && !d.props.in;
                      c && (!l || u)
                        ? (s[t] = (0, a.cloneElement)(i, {
                            onExited: o.bind(null, i),
                            in: !0,
                            exit: q(i, "exit", e),
                            enter: q(i, "enter", e),
                          }))
                        : c || !l || u
                        ? c &&
                          l &&
                          (0, a.isValidElement)(d) &&
                          (s[t] = (0, a.cloneElement)(i, {
                            onExited: o.bind(null, i),
                            in: d.props.in,
                            exit: q(i, "exit", e),
                            enter: q(i, "enter", e),
                          }))
                        : (s[t] = (0, a.cloneElement)(i, { in: !1 }));
                    }
                  }),
                  s),
              firstRender: !1,
            };
          }),
          (r.handleExited = function (e, t) {
            var r = K(this.props.children);
            e.key in r ||
              (e.props.onExited && e.props.onExited(t),
              this.mounted &&
                this.setState(function (t) {
                  var r = (0, z.default)({}, t.children);
                  return delete r[e.key], { children: r };
                }));
          }),
          (r.render = function () {
            var e = this.props,
              t = e.component,
              r = e.childFactory,
              s = (0, _.default)(e, ["component", "childFactory"]),
              n = this.state.contextValue,
              o = G(this.state.children).map(r);
            return (delete s.appear, delete s.enter, delete s.exit, null === t)
              ? a.default.createElement(V.Provider, { value: n }, o)
              : a.default.createElement(
                  V.Provider,
                  { value: n },
                  a.default.createElement(t, s, o)
                );
          }),
          t
        );
      })(a.default.Component);
    (J.propTypes = {}),
      (J.defaultProps = {
        component: "div",
        childFactory: function (e) {
          return e;
        },
      });
    var X = e.i(174080),
      Q = "unmounted",
      Y = "exited",
      Z = "entering",
      ee = "entered",
      et = "exiting",
      er = (function (e) {
        function t(t, r) {
          var a,
            s = e.call(this, t, r) || this,
            n = r && !r.isMounting ? t.enter : t.appear;
          return (
            (s.appearStatus = null),
            t.in
              ? n
                ? ((a = Y), (s.appearStatus = Z))
                : (a = ee)
              : (a = t.unmountOnExit || t.mountOnEnter ? Q : Y),
            (s.state = { status: a }),
            (s.nextCallback = null),
            s
          );
        }
        H(t, e),
          (t.getDerivedStateFromProps = function (e, t) {
            return e.in && t.status === Q ? { status: Y } : null;
          });
        var r = t.prototype;
        return (
          (r.componentDidMount = function () {
            this.updateStatus(!0, this.appearStatus);
          }),
          (r.componentDidUpdate = function (e) {
            var t = null;
            if (e !== this.props) {
              var r = this.state.status;
              this.props.in
                ? r !== Z && r !== ee && (t = Z)
                : (r === Z || r === ee) && (t = et);
            }
            this.updateStatus(!1, t);
          }),
          (r.componentWillUnmount = function () {
            this.cancelNextCallback();
          }),
          (r.getTimeouts = function () {
            var e,
              t,
              r,
              a = this.props.timeout;
            return (
              (e = t = r = a),
              null != a &&
                "number" != typeof a &&
                ((e = a.exit),
                (t = a.enter),
                (r = void 0 !== a.appear ? a.appear : t)),
              { exit: e, enter: t, appear: r }
            );
          }),
          (r.updateStatus = function (e, t) {
            if ((void 0 === e && (e = !1), null !== t))
              if ((this.cancelNextCallback(), t === Z)) {
                if (this.props.unmountOnExit || this.props.mountOnEnter) {
                  var r = this.props.nodeRef
                    ? this.props.nodeRef.current
                    : X.default.findDOMNode(this);
                  r && r.scrollTop;
                }
                this.performEnter(e);
              } else this.performExit();
            else
              this.props.unmountOnExit &&
                this.state.status === Y &&
                this.setState({ status: Q });
          }),
          (r.performEnter = function (e) {
            var t = this,
              r = this.props.enter,
              a = this.context ? this.context.isMounting : e,
              s = this.props.nodeRef ? [a] : [X.default.findDOMNode(this), a],
              n = s[0],
              o = s[1],
              i = this.getTimeouts(),
              l = a ? i.appear : i.enter;
            (e || r) && 1
              ? (this.props.onEnter(n, o),
                this.safeSetState({ status: Z }, function () {
                  t.props.onEntering(n, o),
                    t.onTransitionEnd(l, function () {
                      t.safeSetState({ status: ee }, function () {
                        t.props.onEntered(n, o);
                      });
                    });
                }))
              : this.safeSetState({ status: ee }, function () {
                  t.props.onEntered(n);
                });
          }),
          (r.performExit = function () {
            var e = this,
              t = this.props.exit,
              r = this.getTimeouts(),
              a = this.props.nodeRef ? void 0 : X.default.findDOMNode(this);
            t
              ? (this.props.onExit(a),
                this.safeSetState({ status: et }, function () {
                  e.props.onExiting(a),
                    e.onTransitionEnd(r.exit, function () {
                      e.safeSetState({ status: Y }, function () {
                        e.props.onExited(a);
                      });
                    });
                }))
              : this.safeSetState({ status: Y }, function () {
                  e.props.onExited(a);
                });
          }),
          (r.cancelNextCallback = function () {
            null !== this.nextCallback &&
              (this.nextCallback.cancel(), (this.nextCallback = null));
          }),
          (r.safeSetState = function (e, t) {
            (t = this.setNextCallback(t)), this.setState(e, t);
          }),
          (r.setNextCallback = function (e) {
            var t = this,
              r = !0;
            return (
              (this.nextCallback = function (a) {
                r && ((r = !1), (t.nextCallback = null), e(a));
              }),
              (this.nextCallback.cancel = function () {
                r = !1;
              }),
              this.nextCallback
            );
          }),
          (r.onTransitionEnd = function (e, t) {
            this.setNextCallback(t);
            var r = this.props.nodeRef
                ? this.props.nodeRef.current
                : X.default.findDOMNode(this),
              a = null == e && !this.props.addEndListener;
            if (!r || a) return void setTimeout(this.nextCallback, 0);
            if (this.props.addEndListener) {
              var s = this.props.nodeRef
                  ? [this.nextCallback]
                  : [r, this.nextCallback],
                n = s[0],
                o = s[1];
              this.props.addEndListener(n, o);
            }
            null != e && setTimeout(this.nextCallback, e);
          }),
          (r.render = function () {
            var e = this.state.status;
            if (e === Q) return null;
            var t = this.props,
              r = t.children,
              s =
                (t.in,
                t.mountOnEnter,
                t.unmountOnExit,
                t.appear,
                t.enter,
                t.exit,
                t.timeout,
                t.addEndListener,
                t.onEnter,
                t.onEntering,
                t.onEntered,
                t.onExit,
                t.onExiting,
                t.onExited,
                t.nodeRef,
                (0, _.default)(t, [
                  "children",
                  "in",
                  "mountOnEnter",
                  "unmountOnExit",
                  "appear",
                  "enter",
                  "exit",
                  "timeout",
                  "addEndListener",
                  "onEnter",
                  "onEntering",
                  "onEntered",
                  "onExit",
                  "onExiting",
                  "onExited",
                  "nodeRef",
                ]));
            return a.default.createElement(
              V.Provider,
              { value: null },
              "function" == typeof r
                ? r(e, s)
                : a.default.cloneElement(a.default.Children.only(r), s)
            );
          }),
          t
        );
      })(a.default.Component);
    function ea() {}
    (er.contextType = V),
      (er.propTypes = {}),
      (er.defaultProps = {
        in: !1,
        mountOnEnter: !1,
        unmountOnExit: !1,
        appear: !1,
        enter: !0,
        exit: !0,
        onEnter: ea,
        onEntering: ea,
        onEntered: ea,
        onExit: ea,
        onExiting: ea,
        onExited: ea,
      }),
      (er.UNMOUNTED = Q),
      (er.EXITED = Y),
      (er.ENTERING = Z),
      (er.ENTERED = ee),
      (er.EXITING = et);
    var es = e.i(598526),
      en = e.i(143798),
      eo = e.i(321879),
      ei = e.i(789549),
      el = e.i(314037),
      ec = e.i(595556),
      ed = e.i(644662),
      eu = e.i(985369);
    let em = (e) => (e + 1) % 1e6;
    var ep = e.i(736597),
      eh = e.i(145500);
    let ef = [
        "bottom-center",
        "bottom-left",
        "bottom-right",
        "top-center",
        "top-left",
        "top-right",
      ],
      ex = {
        left: "translateX(-100%)",
        right: "translateX(100%)",
        "top-center": "translateY(-100%)",
        "bottom-center": "translateY(100%)",
      },
      eg = {
        left: "translateX(0)",
        right: "translateX(0)",
        "top-center": "translateY(0)",
        "bottom-center": "translateY(0)",
      };
    var ev = e.i(424848);
    e.i(207670);
    var eb = e.i(515259),
      ey = e.i(27556),
      eS = e.i(442948),
      ew = {
        root: "m_a513464",
        icon: "m_a4ceffb",
        loader: "m_b0920b15",
        body: "m_a49ed24",
        title: "m_3feedf16",
        description: "m_3d733a3a",
        closeButton: "m_919a4d88",
      };
    let ej = { withCloseButton: !0 },
      ek = (0, en.createVarsResolver)((e, { radius: t, color: r }) => ({
        root: {
          "--notification-radius": void 0 === t ? void 0 : (0, ev.getRadius)(t),
          "--notification-color": r ? (0, eb.getThemeColor)(r, e) : void 0,
        },
      })),
      eN = (0, eo.factory)((e, t) => {
        let a = (0, ei.useProps)("Notification", ej, e),
          {
            className: s,
            color: n,
            radius: o,
            loading: i,
            withCloseButton: l,
            withBorder: c,
            title: d,
            icon: u,
            children: m,
            onClose: p,
            closeButtonProps: h,
            classNames: f,
            style: x,
            styles: g,
            unstyled: v,
            variant: b,
            vars: y,
            mod: S,
            loaderProps: w,
            role: j,
            attributes: k,
            ...N
          } = a,
          C = (0, el.useStyles)({
            name: "Notification",
            classes: ew,
            props: a,
            className: s,
            style: x,
            classNames: f,
            styles: g,
            unstyled: v,
            attributes: k,
            vars: y,
            varsResolver: ek,
          });
        return (0, r.jsxs)(ed.Box, {
          ...C("root"),
          mod: [{ "data-with-icon": !!u || i, "data-with-border": c }, S],
          ref: t,
          variant: b,
          role: j || "alert",
          ...N,
          children: [
            u && !i && (0, r.jsx)("div", { ...C("icon"), children: u }),
            i &&
              (0, r.jsx)(eS.Loader, {
                size: 28,
                color: n,
                ...w,
                ...C("loader"),
              }),
            (0, r.jsxs)("div", {
              ...C("body"),
              children: [
                d && (0, r.jsx)("div", { ...C("title"), children: d }),
                (0, r.jsx)(ed.Box, {
                  ...C("description"),
                  mod: { "data-with-title": !!d },
                  children: m,
                }),
              ],
            }),
            l &&
              (0, r.jsx)(ey.CloseButton, {
                iconSize: 16,
                color: "gray",
                ...h,
                unstyled: v,
                onClick: p,
                ...C("closeButton"),
              }),
          ],
        });
      });
    (eN.classes = ew), (eN.displayName = "@mantine/core/Notification");
    let eC = (0, a.forwardRef)(
      ({ data: e, onHide: t, autoClose: s, ...n }, o) => {
        var i;
        let { autoClose: l, message: c, ...d } = e,
          u =
            "number" == typeof (i = e.autoClose)
              ? i
              : !1 !== i && !1 !== s && s,
          m = (0, a.useRef)(-1),
          p = () => window.clearTimeout(m.current),
          h = () => {
            t(e.id), p();
          },
          f = () => {
            "number" == typeof u && (m.current = window.setTimeout(h, u));
          };
        return (
          (0, a.useEffect)(() => {
            e.onOpen?.(e);
          }, []),
          (0, a.useEffect)(() => (f(), p), [u]),
          (0, r.jsx)(eN, {
            ...n,
            ...d,
            onClose: h,
            ref: o,
            onMouseEnter: p,
            onMouseLeave: f,
            children: c,
          })
        );
      }
    );
    eC.displayName = "@mantine/notifications/NotificationContainer";
    var eE = e.i(553917),
      eP = { root: "m_b37d9ac7", notification: "m_5ed0edd0" };
    let eT = {
        position: "bottom-right",
        autoClose: 4e3,
        transitionDuration: 250,
        containerWidth: 440,
        notificationMaxHeight: 200,
        limit: 5,
        zIndex: (0, es.getDefaultZIndex)("overlay"),
        store: eE.notificationsStore,
        withinPortal: !0,
      },
      eA = (0, en.createVarsResolver)(
        (e, { zIndex: t, containerWidth: r }) => ({
          root: {
            "--notifications-z-index": t?.toString(),
            "--notifications-container-width": (0, j.rem)(r),
          },
        })
      ),
      eD = (0, eo.factory)((e, t) => {
        var s;
        let n = (0, ei.useProps)("Notifications", eT, e),
          {
            classNames: o,
            className: i,
            style: l,
            styles: c,
            unstyled: d,
            vars: u,
            position: m,
            autoClose: p,
            transitionDuration: h,
            containerWidth: f,
            notificationMaxHeight: x,
            limit: g,
            zIndex: v,
            store: b,
            portalProps: y,
            withinPortal: S,
            ...w
          } = n,
          j = (0, k.useMantineTheme)(),
          N = (0, eE.useNotifications)(b),
          C = (function () {
            let [, e] = (0, a.useReducer)(em, 0);
            return e;
          })(),
          E = (0, ep.useReducedMotion)(),
          P = (0, a.useRef)({}),
          T = (0, a.useRef)(0),
          A = j.respectReducedMotion && E ? 1 : h,
          D = (0, el.useStyles)({
            name: "Notifications",
            classes: eP,
            props: n,
            className: i,
            style: l,
            classNames: o,
            styles: c,
            unstyled: d,
            vars: u,
            varsResolver: eA,
          });
        (0, a.useEffect)(() => {
          b?.updateState((e) => ({ ...e, limit: g || 5, defaultPosition: m }));
        }, [g, m]),
          (0, eh.useDidUpdate)(() => {
            N.notifications.length > T.current && setTimeout(() => C(), 0),
              (T.current = N.notifications.length);
          }, [N.notifications]);
        let M =
            ((s = N.notifications),
            s.reduce(
              (e, t) => (e[t.position || m].push(t), e),
              ef.reduce((e, t) => ((e[t] = []), e), {})
            )),
          $ = ef.reduce(
            (e, t) => (
              (e[t] = M[t].map(({ style: e, ...a }) =>
                (0, r.jsx)(
                  er,
                  {
                    timeout: A,
                    onEnter: () => P.current[a.id].offsetHeight,
                    nodeRef: { current: P.current[a.id] },
                    children: (s) =>
                      (0, r.jsx)(eC, {
                        ref: (e) => {
                          P.current[a.id] = e;
                        },
                        data: a,
                        onHide: (e) => (0, eE.hideNotification)(e, b),
                        autoClose: p,
                        ...D("notification", {
                          style: {
                            ...(function ({
                              state: e,
                              maxHeight: t,
                              position: r,
                              transitionDuration: a,
                            }) {
                              let [s, n] = r.split("-"),
                                o = "center" === n ? `${s}-center` : n,
                                i = {
                                  opacity: 0,
                                  maxHeight: t,
                                  transform: ex[o],
                                  transitionDuration: `${a}ms, ${a}ms, ${a}ms`,
                                  transitionTimingFunction:
                                    "cubic-bezier(.51,.3,0,1.21), cubic-bezier(.51,.3,0,1.21), linear",
                                  transitionProperty:
                                    "opacity, transform, max-height",
                                },
                                l = { opacity: 1, transform: eg[o] },
                                c = {
                                  opacity: 0,
                                  maxHeight: 0,
                                  transform: ex[o],
                                };
                              return {
                                ...i,
                                ...{
                                  entering: l,
                                  entered: l,
                                  exiting: c,
                                  exited: c,
                                }[e],
                              };
                            })({
                              state: s,
                              position: t,
                              transitionDuration: A,
                              maxHeight: x,
                            }),
                            ...e,
                          },
                        }),
                      }),
                  },
                  a.id
                )
              )),
              e
            ),
            {}
          );
        return (0, r.jsxs)(ec.OptionalPortal, {
          withinPortal: S,
          ...y,
          children: [
            (0, r.jsx)(ed.Box, {
              ...D("root"),
              "data-position": "top-center",
              ref: t,
              ...w,
              children: (0, r.jsx)(J, { children: $["top-center"] }),
            }),
            (0, r.jsx)(ed.Box, {
              ...D("root"),
              "data-position": "top-left",
              ...w,
              children: (0, r.jsx)(J, { children: $["top-left"] }),
            }),
            (0, r.jsx)(ed.Box, {
              ...D("root", { className: eu.RemoveScroll.classNames.fullWidth }),
              "data-position": "top-right",
              ...w,
              children: (0, r.jsx)(J, { children: $["top-right"] }),
            }),
            (0, r.jsx)(ed.Box, {
              ...D("root", { className: eu.RemoveScroll.classNames.fullWidth }),
              "data-position": "bottom-right",
              ...w,
              children: (0, r.jsx)(J, { children: $["bottom-right"] }),
            }),
            (0, r.jsx)(ed.Box, {
              ...D("root"),
              "data-position": "bottom-left",
              ...w,
              children: (0, r.jsx)(J, { children: $["bottom-left"] }),
            }),
            (0, r.jsx)(ed.Box, {
              ...D("root"),
              "data-position": "bottom-center",
              ...w,
              children: (0, r.jsx)(J, { children: $["bottom-center"] }),
            }),
          ],
        });
      });
    (eD.classes = eP),
      (eD.displayName = "@mantine/notifications/Notifications"),
      (eD.show = eE.notifications.show),
      (eD.hide = eE.notifications.hide),
      (eD.update = eE.notifications.update),
      (eD.clean = eE.notifications.clean),
      (eD.cleanQueue = eE.notifications.cleanQueue),
      (eD.updateState = eE.notifications.updateState);
    var eM = e.i(618566),
      e$ = e.i(346944),
      eO = e.i(657688),
      eR = e.i(343794),
      eB = e.i(522016),
      eI = e.i(533372),
      eL = e.i(184086),
      eF = e.i(946396),
      e_ = e.i(175654),
      ez = e.i(963327),
      eW = e.i(393737),
      eU = e.i(879515);
    function eH(e, t) {
      let r = t.getState();
      t.setState({ ...r, ...e(t.getState()) });
    }
    function eV(e) {
      eH(() => ({ opened: !1 }), e);
    }
    let [eK, eq] = [
        (t = (0, eU.createStore)({
          opened: !1,
          empty: !1,
          selected: -1,
          listId: "",
          query: "",
          registeredActions: new Set(),
        })),
        {
          open: () => {
            eH(() => ({ opened: !0, selected: -1 }), t);
          },
          close: () => eV(t),
          toggle: () => {
            eH(
              (e) => ({
                opened: !e.opened,
                selected: e.opened ? e.selected : -1,
              }),
              t
            );
          },
        },
      ],
      { open: eG, close: eJ, toggle: eX } = eq;
    var eQ = e.i(257942),
      eY = e.i(882360);
    function eZ({ color: e, theme: t, defaultShade: r }) {
      let a = (0, eY.parseThemeColor)({ color: e, theme: t });
      return a.isThemeColor
        ? void 0 === a.shade
          ? `var(--mantine-color-${a.color}-${r})`
          : `var(${a.variable})`
        : e;
    }
    var e0 = { root: "m_bcb3f3c2" };
    let e1 = { color: "yellow" },
      e2 = (0, en.createVarsResolver)((e, { color: t }) => ({
        root: {
          "--mark-bg-dark": eZ({ color: t, theme: e, defaultShade: 5 }),
          "--mark-bg-light": eZ({ color: t, theme: e, defaultShade: 2 }),
        },
      })),
      e4 = (0, eo.factory)((e, t) => {
        let a = (0, ei.useProps)("Mark", e1, e),
          {
            classNames: s,
            className: n,
            style: o,
            styles: i,
            unstyled: l,
            vars: c,
            color: d,
            variant: u,
            attributes: m,
            ...p
          } = a,
          h = (0, el.useStyles)({
            name: "Mark",
            props: a,
            className: n,
            style: o,
            classes: e0,
            classNames: s,
            styles: i,
            unstyled: l,
            attributes: m,
            vars: c,
            varsResolver: e2,
          });
        return (0, r.jsx)(ed.Box, {
          component: "mark",
          ref: t,
          variant: u,
          ...h("root"),
          ...p,
        });
      });
    (e4.classes = e0), (e4.displayName = "@mantine/core/Mark");
    var e5 = e.i(294229);
    function e3(e) {
      return e.replace(/[-[\]{}()*+?.,\\^$|#]/g, "\\$&");
    }
    let e8 = (0, eQ.polymorphicFactory)((e, t) => {
      let {
          unstyled: a,
          children: s,
          highlight: n,
          highlightStyles: o,
          color: i,
          ...l
        } = (0, ei.useProps)("Highlight", null, e),
        c = (function (e, t) {
          if (null == t) return [{ chunk: e, highlighted: !1 }];
          let r = Array.isArray(t) ? t.map(e3) : e3(t);
          if (
            !(Array.isArray(r)
              ? r.filter((e) => e.trim().length > 0).length > 0
              : "" !== r.trim())
          )
            return [{ chunk: e, highlighted: !1 }];
          let a =
              "string" == typeof r
                ? r.trim()
                : r
                    .filter((e) => 0 !== e.trim().length)
                    .map((e) => e.trim())
                    .sort((e, t) => t.length - e.length)
                    .join("|"),
            s = RegExp(`(${a})`, "gi");
          return e
            .split(s)
            .map((e) => ({ chunk: e, highlighted: s.test(e) }))
            .filter(({ chunk: e }) => e);
        })(s, n);
      return (0, r.jsx)(e5.Text, {
        unstyled: a,
        ref: t,
        ...l,
        __staticSelector: "Highlight",
        children: c.map(({ chunk: e, highlighted: t }, s) =>
          t
            ? (0, r.jsx)(
                e4,
                {
                  unstyled: a,
                  color: i,
                  style: o,
                  "data-highlight": e,
                  children: e,
                },
                s
              )
            : (0, r.jsx)("span", { children: e }, s)
        ),
      });
    });
    (e8.classes = e5.Text.classes),
      (e8.displayName = "@mantine/core/Highlight");
    var e6 = e.i(825436);
    let [e7, e9] = (0, e.i(384660).createSafeContext)(
        "Spotlight component was not found in tree"
      ),
      te = { dimmedSections: !0, highlightQuery: !1 },
      tt = (0, eo.factory)((e, t) => {
        let {
            className: a,
            style: s,
            classNames: n,
            styles: o,
            id: i,
            description: l,
            label: c,
            leftSection: d,
            rightSection: u,
            children: m,
            dimmedSections: p,
            highlightQuery: h,
            highlightColor: f,
            closeSpotlightOnTrigger: x,
            onClick: g,
            onMouseDown: v,
            keywords: b,
            vars: y,
            ...S
          } = (0, ei.useProps)("SpotlightAction", te, e),
          w = e9(),
          j = { classNames: n, styles: o },
          k =
            h && "string" == typeof c
              ? (0, r.jsx)(e8, {
                  component: "span",
                  highlight: w.query,
                  color: f,
                  ...w.getStyles("actionLabel", j),
                  children: c,
                })
              : (0, r.jsx)("span", {
                  ...w.getStyles("actionLabel", j),
                  children: c,
                });
        return (0, r.jsx)(e6.UnstyledButton, {
          ref: t,
          "data-action": !0,
          ...w.getStyles("action", { className: a, style: s, ...j }),
          ...S,
          onMouseDown: (e) => {
            e.preventDefault(), v?.(e);
          },
          onClick: (e) => {
            g?.(e), (x ?? w.closeOnActionTrigger) && eV(w.store);
          },
          tabIndex: -1,
          children:
            m ||
            (0, r.jsxs)(r.Fragment, {
              children: [
                d &&
                  (0, r.jsx)(ed.Box, {
                    component: "span",
                    mod: { position: "left", dimmed: p },
                    ...w.getStyles("actionSection", j),
                    children: d,
                  }),
                (0, r.jsxs)("span", {
                  ...w.getStyles("actionBody", j),
                  children: [
                    k,
                    (0, r.jsx)("span", {
                      ...w.getStyles("actionDescription", j),
                      children: l,
                    }),
                  ],
                }),
                u &&
                  (0, r.jsx)(ed.Box, {
                    component: "span",
                    mod: { position: "right", dimmed: p },
                    ...w.getStyles("actionSection", j),
                    children: u,
                  }),
              ],
            }),
        });
      });
    (tt.classes = {
      root: "m_d2b315db",
      content: "m_3cd250e0",
      body: "m_d2abce9b",
      search: "m_f366a061",
      actionsList: "m_6e463822",
      action: "m_d49bb8ef",
      actionBody: "m_3d475731",
      actionSection: "m_832642f6",
      actionLabel: "m_6c2a1345",
      actionDescription: "m_a6d9d78d",
      empty: "m_82f78f74",
      footer: "m_ddcaf054",
      actionsGroup: "m_5a3e5f7b",
    }),
      (tt.displayName = "@mantine/spotlight/SpotlightAction");
    var tr = e.i(890357),
      ta = e.i(133824),
      ts = e.i(905142),
      tn = e.i(848719),
      to = e.i(336005),
      ti = e.i(19607),
      tl = e.i(796682),
      tc = e.i(247746);
    let td = {
      src: e.i(330508).default,
      width: 24,
      height: 24,
      blurWidth: 0,
      blurHeight: 0,
    };
    var tu = e.i(928835);
    let tm = () =>
      (0, r.jsxs)(tc.HoverCard, {
        shadow: "xl",
        children: [
          (0, r.jsx)(tc.HoverCard.Target, {
            children: (0, r.jsx)(eO.default, {
              src: td,
              style: { width: 24, height: 24 },
              alt: "avatar",
              className: "cursor-pointer",
            }),
          }),
          (0, r.jsx)(tc.HoverCard.Dropdown, {
            style: {
              left: window.innerWidth - 350,
              marginTop: 8,
              padding: 0,
              borderRadius: 8,
              width: 240,
              background: "#20212b",
            },
            children: (0, r.jsx)("div", {
              className: "p-8 flex justify-center",
              children: (0, r.jsxs)("div", {
                children: [
                  (0, r.jsx)(tu.QRCodeSVG, {
                    value: "https://gtr.trade",
                    width: 200,
                    height: 200,
                    bgColor: "#000000",
                    fgColor: "#ffffff",
                  }),
                  (0, r.jsx)("div", {
                    className:
                      "text-white pt-4 text-center text-sm font-medium",
                    children: "Scan to download app iOS & Android",
                  }),
                ],
              }),
            }),
          }),
        ],
      });
    var tp = e.i(17024),
      th = e.i(857142);
    let tf = (e) => (e || "").toLowerCase().replace(/\/+$/g, ""),
      tx = (e, t) => {
        try {
          if (!t || "" === t.trim()) return !1;
          let r = new URL(e, "http://_"),
            a = new URL(t, "http://_"),
            s = tf(r.pathname),
            n = tf(a.pathname);
          if (
            !["/trade/crypto-perps"].some((e) => {
              let t = tf(e);
              return (
                s === t ||
                n === t ||
                (s.startsWith(t + "/") && n.startsWith(t + "/"))
              );
            }) &&
            s !== n
          )
            return !1;
          if (0 == [...a.searchParams.keys()].length) return !0;
          let o = { "/rwa-perps": ["coin"] },
            i = o[s] || o[n] || [];
          for (let [e, t] of a.searchParams.entries()) {
            let a = r.searchParams.getAll(e);
            if (i.includes(e)) {
              if (0 === a.length) return !1;
              continue;
            }
            if (!a.includes(t)) return !1;
          }
          return !0;
        } catch {
          return e === t;
        }
      },
      tg = (0, a.memo)(({ item: e, isActive: t, onPrefetch: a }) =>
        (0, r.jsx)("div", {
          onMouseEnter: () => {
            e.href && a(e.href);
          },
          children: (0, r.jsx)(eB.default, {
            href: e.href,
            children: (0, r.jsx)("div", {
              className: (0, eR.default)("pr-3 py-2 relative group", {
                "cursor-not-allowed": e.isComingSoon,
              }),
              children: (0, r.jsx)("div", {
                className: "flex items-center gap-2",
                children: (0, r.jsxs)("div", {
                  children: [
                    (0, r.jsxs)("div", {
                      className: "flex items-center gap-1",
                      children: [
                        (0, r.jsx)("div", {
                          className: (0, eR.default)(
                            "font-medium group-hover:nav-active-text",
                            { "nav-active-text": t }
                          ),
                          children: e.label,
                        }),
                        !e.isComingSoon &&
                          (0, r.jsx)("div", {
                            className: "overflow-hidden",
                            children: (0, r.jsx)("svg", {
                              width: "6",
                              height: "9",
                              viewBox: "0 0 6 9",
                              fill: "none",
                              xmlns: "http://www.w3.org/2000/svg",
                              className:
                                "transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out",
                              children: (0, r.jsx)("path", {
                                d: "M1 0.999898L4.42876 4.42866L1 7.85742",
                                stroke: "#00FF2B",
                              }),
                            }),
                          }),
                        e.isComingSoon &&
                          (0, r.jsx)("div", {
                            className: "overflow-hidden",
                            children: (0, r.jsx)("div", {
                              className:
                                "bg-lemon text-black font-bold uppercase rounded-sm text-[8px] px-0.5 h-2.5 py-px leading-none transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out",
                              children: "Coming Soon",
                            }),
                          }),
                      ],
                    }),
                    (0, r.jsx)("div", {
                      className: "text-xs text-slate-900",
                      children: e.description,
                    }),
                  ],
                }),
              }),
            }),
          }),
        })
      );
    tg.displayName = "NavbarItem";
    let tv = (0, a.memo)(
      ({
        label: e,
        isNew: t,
        columnOne: s,
        columnTwo: n = null,
        columnThree: o = null,
        popoverWidth: i = 500,
        activeKeys: l,
        excludeKeys: c = [],
      }) => {
        let [d, { open: u, close: m }] = (0, ts.useDisclosure)(!1),
          p = (0, eM.useRouter)(),
          h = (0, eM.usePathname)(),
          f = (0, eM.useSearchParams)().toString(),
          x = `${h}${f ? `?${f}` : ""}`,
          g = (h || "")
            .split("/")
            .filter(Boolean)
            .map((e) => e.toLowerCase()),
          v = l?.map((e) => e.toLowerCase()) ?? [],
          b = c?.map((e) => e.toLowerCase()) ?? [],
          y = b.length > 0 && g.some((e) => b.includes(e)),
          S =
            (0, a.useMemo)(
              () =>
                [
                  ...(s?.items || []),
                  ...(n?.items || []),
                  ...(o?.items || []),
                ].some((e) => tx(x, e.href)),
              [x, s, n, o]
            ) ||
            (!y && v.length > 0 && g.some((e) => v.includes(e)));
        return (0, r.jsxs)("div", {
          className: "text-xs relative",
          onMouseEnter: u,
          onMouseLeave: () => {
            setTimeout(() => {
              m();
            }, 100);
          },
          children: [
            t &&
              (0, r.jsx)("span", {
                className:
                  "absolute -top-2 bg-gradient-to-r from-primary-400 to-buy text-black left-0 text-[7px] font-bold",
                style: { borderRadius: 1, lineHeight: 1.2 },
                children: (0, r.jsx)("span", {
                  className: "px-1 py-0",
                  children: "NEW",
                }),
              }),
            (0, r.jsxs)(th.Popover, {
              opened: d,
              width: i,
              position: "bottom-start",
              shadow: "md",
              classNames: {
                dropdown: "!bg-matte border-1 border-solid border-ash !p-0",
              },
              children: [
                (0, r.jsx)(th.Popover.Target, {
                  children: (0, r.jsxs)("div", {
                    className: (0, eR.default)(
                      "flex items-center gap-2 hover:nav-active-text",
                      { "nav-active-text": S }
                    ),
                    children: [
                      (0, r.jsx)("div", {
                        className: "text-xs font-medium",
                        children: e,
                      }),
                      (0, r.jsx)("div", {
                        className: (0, eR.default)(
                          "transition-transform duration-150 ease-in-out",
                          { "rotate-180": d }
                        ),
                        children: (0, r.jsx)("svg", {
                          width: "14",
                          height: "14",
                          viewBox: "0 0 14 14",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg",
                          children: (0, r.jsx)("path", {
                            d: "M10.8284 5L6.82823 9.00022L2.828 5",
                            stroke: "#fff",
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
                (0, r.jsx)(th.Popover.Dropdown, {
                  children: (0, r.jsxs)("div", {
                    className: (0, eR.default)("flex gap-3", {
                      "p-4": !!n?.heading || !!o?.heading,
                      "px-4 py-2": !n?.heading && !o?.heading,
                    }),
                    children: [
                      (0, r.jsxs)("div", {
                        className: (0, eR.default)({
                          "w-1/3": o,
                          "w-1/2": n && !o,
                          "w-full": !n && !o,
                        }),
                        children: [
                          s?.heading
                            ? (0, r.jsx)("p", {
                                className: "text-xs text-slate-900 font-medium",
                                children: s?.heading,
                              })
                            : null,
                          (0, r.jsx)("div", {
                            className: (0, eR.default)(
                              "flex flex-col text-xs",
                              { "mt-2": !!s?.heading }
                            ),
                            children: s?.items?.map((e, t) =>
                              (0, r.jsx)(
                                tg,
                                {
                                  item: e,
                                  isActive: tx(x, e.href),
                                  onPrefetch: (e) => p.prefetch(e),
                                },
                                `${e.label}-${t}`
                              )
                            ),
                          }),
                        ],
                      }),
                      n
                        ? (0, r.jsxs)("div", {
                            className: (0, eR.default)({
                              "w-1/3": o,
                              "w-1/2": !o,
                            }),
                            children: [
                              n?.heading
                                ? (0, r.jsx)("p", {
                                    className:
                                      "text-xs text-slate-900 font-medium",
                                    children: n?.heading,
                                  })
                                : null,
                              (0, r.jsx)("div", {
                                className: (0, eR.default)(
                                  "flex flex-col text-xs",
                                  { "mt-2": !!n?.heading }
                                ),
                                children: n?.items?.map((e, t) =>
                                  (0, r.jsx)(
                                    tg,
                                    {
                                      item: e,
                                      isActive: tx(x, e.href),
                                      onPrefetch: (e) => p.prefetch(e),
                                    },
                                    `${e.label}-${t}`
                                  )
                                ),
                              }),
                            ],
                          })
                        : null,
                      o
                        ? (0, r.jsxs)("div", {
                            className: "w-1/3",
                            children: [
                              o?.heading
                                ? (0, r.jsx)("p", {
                                    className:
                                      "text-xs text-slate-900 font-medium",
                                    children: o?.heading,
                                  })
                                : null,
                              (0, r.jsx)("div", {
                                className: (0, eR.default)(
                                  "flex flex-col text-xs",
                                  { "mt-2": !!o?.heading }
                                ),
                                children: o?.items?.map((e, t) =>
                                  (0, r.jsx)(
                                    tg,
                                    {
                                      item: e,
                                      isActive: tx(x, e.href),
                                      onPrefetch: (e) => p.prefetch(e),
                                    },
                                    `${e.label}-${t}`
                                  )
                                ),
                              }),
                            ],
                          })
                        : null,
                    ],
                  }),
                }),
              ],
            }),
          ],
        });
      }
    );
    tv.displayName = "NavbarDropdownCols";
    var tb = e.i(802315),
      ty = e.i(144492),
      tS = e.i(11942),
      tw = e.i(642215),
      tj = e.i(737716),
      tk = e.i(159973),
      tN = e.i(260201),
      tC = e.i(974010),
      tE = e.i(194390),
      tP = e.i(911450),
      tT = e.i(862278),
      tA = e.i(644616),
      tD = e.i(224283),
      tM = e.i(3130),
      t$ = e.i(503781),
      tO = e.i(489020);
    let tR = function (e = {}) {
      let {
          isConnected: t,
          subscribe: r,
          messageEvent: s,
          unsubscribe: n,
          removeListener: o,
        } = (0, tE.useHyperliquidWebSocket)(),
        {
          subscribe: l,
          unsubscribe: c,
          messageEvent: d,
          removeListener: u,
          isConnected: m,
          subscribeToRWAPerpsGraph: p,
          unsubscribeFromRWAPerpsGraph: h,
        } = (0, tk.useMuxSocket)(),
        {
          setCryptoPerpsData: f,
          setRwaPerpsData: x,
          setSpotData: g,
          setAltcoinsData: v,
        } = (0, tN.usePortfolioStore)(
          (0, e$.useShallow)((e) => ({
            setCryptoPerpsData: e.setCryptoPerpsData,
            setRwaPerpsData: e.setRwaPerpsData,
            setSpotData: e.setSpotData,
            setAltcoinsData: e.setAltcoinsData,
          }))
        ),
        {
          ostiumPositions: b,
          pairs: y,
          rwaPerpsPairsPriceList: S,
          setostiumPositions: w,
          setOstiumOpenOrders: j,
          setRWAPerpsPairsPriceList: k,
        } = (0, tM.useOstiumStore)(
          (0, e$.useShallow)((e) => ({
            ostiumPositions: e.ostiumPositions,
            pairs: e.pairs,
            rwaPerpsPairsPriceList: e.rwaPerpsPairsPriceList,
            setostiumPositions: e.setostiumPositions,
            setOstiumOpenOrders: e.setOstiumOpenOrders,
            setRWAPerpsPairsPriceList: e.setRWAPerpsPairsPriceList,
          }))
        ),
        { getMetaAssetsNameByTokenName: N } = (0, tO.useSpotUtils)(),
        {
          leverage: C,
          perpsDex: E,
          spotAssetCtxs: P,
          setAssetPositions: T,
          setOpenOrders: A,
          setSpotAssetCtxs: D,
          setClearinghouseStateByDex: M,
          setOpenOrdersByDex: $,
          setSpotBalances: O,
        } = (0, tT.useHyperliquidStore)(
          (0, e$.useShallow)((e) => ({
            leverage: e.leverage,
            perpsDex: e.perpsDex,
            spotAssetCtxs: e.spotAssetCtxs,
            setSpotAssetCtxs: e.setSpotAssetCtxs,
            setAssetPositions: e.setAssetPositions,
            setOpenOrders: e.setOpenOrders,
            setClearinghouseStateByDex: e.setClearinghouseStateByDex,
            setOpenOrdersByDex: e.setOpenOrdersByDex,
            setSpotBalances: e.setSpotBalances,
          }))
        ),
        {
          holdingsData: R,
          setHoldingsData: B,
          setMyCryptoTokens: I,
          setAllUsdcBalances: L,
        } = (0, tr.useBalanceStore)(
          (0, e$.useShallow)((e) => ({
            holdingsData: e.holdingsData,
            setHoldingsData: e.setHoldingsData,
            setMyCryptoTokens: e.setMyCryptoTokens,
            setAllUsdcBalances: e.setAllUsdcBalances,
          }))
        ),
        { holdings: F, setHoldings: _ } = (0, tr.useProfileStore)(
          (0, e$.useShallow)((e) => ({
            holdings: e.holdings,
            setHoldings: e.setHoldings,
          }))
        ),
        { wallets: z } = (0, tP.useWallets)(),
        W = z.find((e) => "privy" === e.walletClientType),
        { client: U } = (0, i.useSmartWallets)(),
        H = (0, a.useRef)(0),
        V = (0, a.useRef)(0),
        K = (0, a.useRef)(0),
        q = (0, a.useRef)(0),
        G = (0, a.useRef)(0),
        J = (0, a.useRef)(0),
        X = (0, a.useRef)(0),
        Q = (0, a.useRef)(0),
        Y = (0, a.useRef)(0),
        Z = (0, a.useRef)(0),
        ee = (0, a.useRef)(null),
        et = (0, a.useRef)(""),
        er = (0, a.useRef)(""),
        ea = (0, a.useRef)(""),
        es = (0, a.useRef)(""),
        en = (0, a.useRef)(W?.address);
      (0, a.useEffect)(() => {
        en.current !== W?.address &&
          ((H.current = 0),
          (V.current = 0),
          (K.current = 0),
          (q.current = 0),
          (G.current = 0),
          (J.current = 0),
          (X.current = 0),
          (Q.current = 0),
          (Y.current = 0),
          (Z.current = 0),
          (ee.current = null),
          (et.current = ""),
          (er.current = ""),
          (ea.current = ""),
          (es.current = ""),
          W?.address ||
            (f({ value: 0, pnl: 0, withdrawable: 0, availableToTrade: 0 }),
            x({ value: 0, pnl: 0 }),
            g({ value: 0, pnl: 0, available: 0 }),
            v({ value: 0, pnl: 0 }),
            T([]),
            A([]),
            w([]),
            j([])),
          (en.current = W?.address));
      }, [W?.address, f, x, g, v, T, A, w, j]),
        (0, a.useEffect)(() => {
          if (t && W?.address) {
            r({ type: "allDexsClearinghouseState", user: W?.address });
            let e = (e) => {
              if (e && e?.user?.toLowerCase() === W?.address.toLowerCase()) {
                let t = 0,
                  r = 0,
                  a = 0,
                  s = 0;
                C?.type,
                  e?.clearinghouseStates.forEach((e) => {
                    let n = e?.[1]?.marginSummary,
                      o = e?.[1]?.crossMarginSummary,
                      i = Math.max(
                        Number(n?.accountValue) || 0,
                        Number(o?.accountValue) || 0
                      );
                    t += i;
                    let l = Math.max(
                      Number(n?.totalMarginUsed) || 0,
                      Number(o?.totalMarginUsed) || 0
                    );
                    s += l;
                    let c = Number(e?.[1]?.withdrawable) || 0;
                    (a += c),
                      (e?.[1]?.assetPositions || []).forEach((e) => {
                        let t = Number(e?.position?.unrealizedPnl) || 0;
                        r += t;
                      });
                  });
                let n = t !== H.current,
                  o = r !== V.current,
                  i = a !== K.current;
                (n || o || i) &&
                  ((H.current = t),
                  (V.current = r),
                  (K.current = a),
                  f({
                    value: t,
                    pnl: r,
                    withdrawable: a,
                    availableToTrade: Number(t) - Number(s),
                  }));
                let l = e?.clearinghouseStates?.[0]?.[1]?.assetPositions,
                  c = JSON.stringify(l);
                c !== et.current && ((et.current = c), T(l || []));
                let d = e?.clearinghouseStates?.[0]?.[1]?.openOrders,
                  u = JSON.stringify(d);
                if (
                  (u !== ea.current && ((ea.current = u), A(d || [])),
                  E?.length > 0 && e?.clearinghouseStates?.length > 1)
                ) {
                  let t = {},
                    r = {};
                  E.forEach((a, s) => {
                    let n = e.clearinghouseStates[0];
                    n &&
                      ((t[n] = {
                        assetPositions: n[1].assetPositions,
                        marginSummary: n[1].marginSummary,
                        crossMarginSummary: n[1].crossMarginSummary,
                        withdrawable: n[1].withdrawable,
                        crossMaintenanceMarginUsed:
                          n[1].crossMaintenanceMarginUsed,
                        time: n[1].time,
                      }),
                      n[1].openOrders ? (r[n] = n[1].openOrders) : (r[n] = []));
                  });
                  let a = JSON.stringify(t);
                  a !== er.current &&
                    Object.keys(t).length > 0 &&
                    ((er.current = a), M(t));
                  let s = JSON.stringify(r);
                  s !== es.current &&
                    Object.keys(r).length > 0 &&
                    ((es.current = s), $(r));
                }
              }
            };
            return (
              s("allDexsClearinghouseState", e),
              () => {
                o("allDexsClearinghouseState", e),
                  n({ type: "allDexsClearinghouseState", user: W?.address });
              }
            );
          }
        }, [t, W?.address]),
        (0, a.useEffect)(() => {
          if (!m) return;
          let e = (e) => {
            e?.data &&
              (e.data.holdingsData &&
                (B({
                  totalInvested: e?.data?.holdingsData?.totalInvested,
                  totalGains: e?.data?.holdingsData?.totalGains,
                  gainInPercent: e?.data?.holdingsData?.totalRealizedGains,
                }),
                e.data.holdingsData.holdings &&
                  (I(e.data.holdingsData.holdings),
                  _({
                    ...F,
                    holdings: e.data.holdingsData.holdings?.length
                      ? e.data.holdingsData.holdings
                      : F?.holdings,
                  }))),
              e?.data?.allBalances && L(e?.data?.allBalances));
          };
          return (
            l({ type: "portfolio_update" }),
            d("portfolio_update", e),
            () => {
              c({ type: "portfolio_update", roomName: "" }),
                u("portfolio_update", e);
            }
          );
        }, [m]);
      let eo = (0, a.useRef)(
        (0, tD.default)((e) => {
          if (!b || 0 === b.length) return;
          let t = new Map();
          if (
            (e?.forEach((e) => {
              let r = `${e?.from}-${e?.to}`;
              t.set(r, e);
            }),
            y?.forEach((e) => {
              let r = `${e?.from}-${e?.to}`;
              (t.has(r) && t.get(r)?.mid !== 0 && t.get(r)?.mid) || t.set(r, e);
            }),
            0 === t.size)
          )
            return;
          let r = 0,
            a = 0;
          b.forEach((e) => {
            let s = e?.isBuy,
              n = `${e?.pair?.from}-${e?.pair?.to}`,
              o = t.get(n),
              i = Math.abs(
                Number((0, tA.formatUnits)(BigInt(e?.tradeNotional || 0), 18))
              ),
              l = Number((0, tA.formatUnits)(BigInt(e?.openPrice || 0), 18)),
              c = o?.mid ?? 0,
              d = s ? (Number(c) - Number(l)) * i : (Number(l) - Number(c)) * i;
            isNaN(d) || (a += d);
            let u = e?.collateral
              ? Number((0, tA.formatUnits)(BigInt(e.collateral), 6))
              : 0;
            isNaN(u) || (r += u);
          });
          let s = r !== q.current,
            n = a !== G.current;
          (s || n) &&
            ((q.current = r), (G.current = a), x({ value: r, pnl: a }));
        }, 1e3)
      ).current;
      (0, a.useEffect)(() => {
        if (!U?.account?.address || !m) {
          w([]), j([]), x({ value: 0, pnl: 0 });
          return;
        }
        p(
          (0, t$.getOrdersQuery)(U.account.address),
          tC.RWAPERPS_SOCKET_IDENTIFIERS.positions
        );
        let e = (e) => {
          if (
            e?.message === "data" &&
            e?.data &&
            e?.subType === "graph" &&
            e?.type === "rwaPerps" &&
            e?.identifier === tC.RWAPERPS_SOCKET_IDENTIFIERS.positions
          ) {
            let t = e?.data?.data?.trades,
              r = e?.data?.data?.orders,
              a = e?.data?.data?.limits;
            Array.isArray(t) ? w(t) : w([]);
            let s = Array.isArray(r)
              ? r.filter((e) => e?.orderAction === "Open" && e?.isPending)
              : [];
            if (
              (j([...(Array.isArray(a) ? a : []), ...s]),
              !Array.isArray(t) || 0 === t.length)
            ) {
              (0 !== q.current || 0 !== G.current) &&
                ((q.current = 0), (G.current = 0), x({ value: 0, pnl: 0 }));
              return;
            }
            let n = new Map();
            if (
              (S?.forEach((e) => {
                let t = `${e?.from}-${e?.to}`;
                n.set(t, e);
              }),
              y?.forEach((e) => {
                let t = `${e?.from}-${e?.to}`;
                (n.has(t) && n.get(t)?.mid !== 0 && n.get(t)?.mid) ||
                  n.set(t, e);
              }),
              0 === n.size && t.length > 0)
            )
              return;
            let o = 0,
              i = 0;
            t.forEach((e) => {
              let t = e?.isBuy,
                r = `${e?.pair?.from}-${e?.pair?.to}`,
                a = n.get(r),
                s = Math.abs(
                  Number((0, tA.formatUnits)(BigInt(e?.tradeNotional || 0), 18))
                ),
                l = Number((0, tA.formatUnits)(BigInt(e?.openPrice || 0), 18)),
                c = a?.mid ?? 0,
                d = t
                  ? (Number(c) - Number(l)) * s
                  : (Number(l) - Number(c)) * s;
              isNaN(d) || (i += d);
              let u = e?.collateral
                ? Number((0, tA.formatUnits)(BigInt(e.collateral), 6))
                : 0;
              isNaN(u) || (o += u);
            });
            let l = o !== q.current,
              c = i !== G.current;
            (l || c) &&
              ((q.current = o), (G.current = i), x({ value: o, pnl: i }));
          }
        };
        return (
          d(`rwaPerps.data.${tC.RWAPERPS_SOCKET_IDENTIFIERS.positions}`, e),
          () => {
            u(`rwaPerps.data.${tC.RWAPERPS_SOCKET_IDENTIFIERS.positions}`, e),
              h(tC.RWAPERPS_SOCKET_IDENTIFIERS.positions);
          }
        );
      }, [m, U?.account?.address, p, h, d, u, x, w, j]),
        (0, a.useEffect)(() => {
          if (m) {
            l({
              type: "rwaPerps",
              message: "subscribe",
              subType: "latestPrices",
            });
            let e = (e) => {
              "data" === e.message &&
                e.data &&
                "latestPrices" === e.subType &&
                (k(e.data), eo(e.data));
            };
            return (
              d("rwaPerps.data", e),
              () => {
                u("rwaPerps.data", e), c({ type: "rwaPerps", roomName: "" });
              }
            );
          }
        }, [m, l, c, d, u, k, eo]);
      let ei = (0, a.useRef)([]);
      return (
        (0, a.useEffect)(() => {
          if (t && W?.address) {
            r({ type: "spotState", user: W?.address }),
              r({ type: "spotAssetCtxs" });
            let e = (e) => {
                if (e && e.user?.toLowerCase() === W?.address.toLowerCase()) {
                  let t = e?.spotState?.balances || [];
                  JSON.stringify(ee.current) !== JSON.stringify(t) &&
                    ((ee.current = t), (ei.current = t), O(t));
                }
              },
              t = (e) => {
                D(e);
              };
            return (
              s("spotState", e),
              s("spotAssetCtxs", t),
              () => {
                o("spotState", e),
                  o("spotAssetCtxs", t),
                  n({ type: "spotState" }),
                  n({ type: "spotState", user: W?.address });
              }
            );
          }
        }, [t, W?.address]),
        (0, a.useEffect)(() => {
          let e = ei.current;
          if (!e || 0 === e.length || !P || 0 === P.length) return;
          let t = 0,
            r = 0,
            a = 0;
          e.forEach((e) => {
            let s = Number(e?.total || 0),
              n = Number(e?.hold || 0),
              o = Number(e?.entryNtl || 0),
              i = e?.coin,
              l = s - n;
            if (("USDC" === i && (a = l), l <= 0)) return;
            let c = 0;
            if ("USDC" === i) c = 1;
            else {
              let e = N(i),
                t = P?.find((t) => t.coin === e);
              c = t?.midPx ? Number(t.midPx) : 0;
            }
            let d = l * c;
            (t += d), o > 0 && (r += d - o);
          });
          let s = t !== J.current,
            n = r !== X.current,
            o = a !== Q.current;
          (s || n || o) &&
            ((J.current = t),
            (X.current = r),
            (Q.current = a),
            g({ value: t, pnl: r, available: a }));
        }, [P, N, g]),
        (0, a.useEffect)(() => {
          let e = tr.useBalanceStore.subscribe((e) => {
              let t = e.holdingsData,
                r = t?.totalInvested || 0,
                a = t?.totalGains || 0,
                s = r + a,
                n = s !== Y.current,
                o = a !== Z.current;
              (n || o) &&
                ((Y.current = s), (Z.current = a), v({ value: s, pnl: a }));
            }),
            t = R?.totalInvested || 0,
            r = R?.totalGains || 0,
            a = t + r;
          return (
            (a !== Y.current || r !== Z.current) &&
              ((Y.current = a), (Z.current = r), v({ value: a, pnl: r })),
            () => e()
          );
        }, [v, R]),
        { totalValue: 0, changeAmount: 0, changePercent: 0 }
      );
    };
    var tB = e.i(918676);
    let tI = (0, a.memo)(({ opened: e }) =>
      (0, r.jsx)(tb.IconChevronDown, {
        size: 16,
        className: `text-gray-400 transition-transform duration-200 ${
          e ? "rotate-180" : ""
        }`,
      })
    );
    tI.displayName = "MemoizedChevron";
    let tL = () => {
      let e = (0, eM.useRouter)(),
        [t, { open: s, close: n }] = (0, ts.useDisclosure)(!1),
        [i, { open: l, close: c }] = (0, ts.useDisclosure)(!1),
        [d, u] = (0, a.useState)(!1),
        { authenticated: m } = (0, o.usePrivy)(),
        {
          subscribe: p,
          unsubscribe: h,
          isConnected: f,
        } = (0, tk.useMuxSocket)(),
        { portfolioTotalValue: x } = (0, tN.usePortfolioStore)(
          (0, e$.useShallow)((e) => ({
            portfolioTotalValue: e.portfolioTotalValue,
          }))
        ),
        g = (0, a.useRef)(void 0),
        v = (0, a.useRef)(void 0);
      tR();
      let b = () => {
          clearTimeout(v.current), (g.current = setTimeout(s, 0));
        },
        y = () => {
          clearTimeout(g.current), (v.current = setTimeout(n, 200));
        };
      return (
        (0, a.useEffect)(
          () => (
            f &&
              m &&
              (async () => {
                let e = await (0, eF.getAccessToken)();
                try {
                  e && p({ type: "auth", token: e });
                } catch (e) {
                  console.error("Error setting up RWA auth subscription:", e);
                }
              })(),
            () => {
              h({ type: "auth-unsubscribe", roomName: "" });
            }
          ),
          [f, m]
        ),
        (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsxs)(th.Popover, {
              opened: t,
              onChange: t ? n : s,
              width: 320,
              position: "bottom-end",
              shadow: "xl",
              offset: 0,
              children: [
                (0, r.jsx)(th.Popover.Target, {
                  children: (0, r.jsxs)("div", {
                    onMouseEnter: b,
                    onMouseLeave: y,
                    className:
                      "flex items-center gap-1 cursor-pointer px-3 py-2 rounded-lg hover:bg-white/5 transition-colors",
                    children: [
                      (0, r.jsx)("span", {
                        className: "text-sm font-medium text-white",
                        children: "Assets",
                      }),
                      (0, r.jsx)(tI, { opened: t }),
                    ],
                  }),
                }),
                (0, r.jsx)(th.Popover.Dropdown, {
                  onMouseEnter: b,
                  onMouseLeave: y,
                  style: {
                    backgroundColor: "rgba(18, 18, 20, 0.95)",
                    backdropFilter: "blur(10px)",
                    borderColor: "rgba(255, 255, 255, 0.1)",
                    padding: "20px",
                    borderRadius: "16px",
                    marginTop: "8px",
                  },
                  children: (0, r.jsxs)("div", {
                    className: "flex flex-col gap-4",
                    children: [
                      (0, r.jsxs)("div", {
                        className: "flex items-center gap-2 text-gray-400",
                        children: [
                          (0, r.jsx)("span", {
                            className: "text-sm",
                            children: "Assets Overview",
                          }),
                          (0, r.jsx)(eL.Tooltip, {
                            label: d ? "Hide balance" : "Show balance",
                            children: d
                              ? (0, r.jsx)(tw.IconEyeOff, {
                                  size: 16,
                                  onClick: () => u(!d),
                                  className:
                                    "cursor-pointer hover:text-white transition-colors",
                                })
                              : (0, r.jsx)(tS.IconEye, {
                                  size: 16,
                                  onClick: () => u(!d),
                                  className:
                                    "cursor-pointer hover:text-white transition-colors",
                                }),
                          }),
                        ],
                      }),
                      (0, r.jsx)("div", {
                        children: (0, r.jsxs)("div", {
                          className: "flex items-baseline gap-2",
                          children: [
                            (0, r.jsx)("span", {
                              className: "text-3xl font-bold text-white",
                              children: d
                                ? (0, tC.convertIntl)(
                                    Number(Number(x)?.toFixed(2))
                                  )
                                : "******",
                            }),
                            (0, r.jsx)("span", {
                              className: "text-sm font-medium text-gray-400",
                              children: "USD",
                            }),
                          ],
                        }),
                      }),
                      (0, r.jsxs)("div", {
                        className: "grid grid-cols-2 gap-3 mt-2",
                        children: [
                          (0, r.jsxs)("button", {
                            onClick: () => {
                              n(), l();
                            },
                            className:
                              "flex items-center justify-center gap-2 bg-[#8D4DFF] hover:bg-[#7B3FE4] text-white py-2.5 rounded-xl text-sm font-bold transition-all active:scale-95",
                            children: [
                              (0, r.jsx)(ty.IconDownload, { size: 18 }),
                              "Deposit",
                            ],
                          }),
                          (0, r.jsxs)("button", {
                            onClick: () => {
                              n(), e.push("/withdraw");
                            },
                            className:
                              "flex items-center justify-center gap-2 bg-transparent border border-[#8D4DFF]/50 hover:border-[#8D4DFF] text-[#8D4DFF] py-2.5 rounded-xl text-sm font-bold transition-all active:scale-95",
                            children: [
                              (0, r.jsx)(tj.IconUpload, { size: 18 }),
                              "Withdraw",
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
            (0, r.jsx)(tB.default, { opened: i, close: c }),
          ],
        })
      );
    };
    var tF = e.i(344804),
      t_ = e.i(967929),
      tz = e.i(357772),
      tW = e.i(734616),
      tU = e.i(315825),
      tH = e.i(757033),
      tV = e.i(33550);
    let tK = (0, tV.default)("outline", "headset", "Headset", [
        ["path", { d: "M4 14v-3a8 8 0 1 1 16 0v3", key: "svg-0" }],
        ["path", { d: "M18 19c0 1.657 -2.686 3 -6 3", key: "svg-1" }],
        [
          "path",
          {
            d: "M4 14a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-1a2 2 0 0 1 -2 -2v-3z",
            key: "svg-2",
          },
        ],
        [
          "path",
          {
            d: "M15 14a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-1a2 2 0 0 1 -2 -2v-3z",
            key: "svg-3",
          },
        ],
      ]),
      tq = (0, tV.default)("outline", "power", "Power", [
        ["path", { d: "M7 6a7.75 7.75 0 1 0 10 0", key: "svg-0" }],
        ["path", { d: "M12 4l0 8", key: "svg-1" }],
      ]);
    var tG = e.i(561026),
      tJ = e.i(393612),
      tX = e.i(447519),
      tQ = e.i(172167);
    let tY = ({ isMobileScreen: e = !1 }) => {
        let t = (0, eM.useRouter)(),
          { logout: s } = (0, o.usePrivy)(),
          { profileData: n, resetStore: i } = (0, tr.useProfileStore)(
            (0, e$.useShallow)((e) => ({
              profileData: e.profileData,
              resetStore: e.resetStore,
            }))
          ),
          { resetStore: l } = (0, tG.usePresetStore)(
            (0, e$.useShallow)((e) => ({ resetStore: e.resetStore }))
          ),
          {
            resetStore: c,
            selectedAsset: d,
            resetSocialStore: u,
          } = (0, tT.useHyperliquidStore)((e) => e),
          { resetStore: m } = (0, tN.usePortfolioStore)(
            (0, e$.useShallow)((e) => ({ resetStore: e.resetStore }))
          ),
          { resetSocialPortfolio: p } = (0, tJ.useSocialPortfolioStore)(
            (0, e$.useShallow)((e) => ({
              resetSocialPortfolio: e.resetSocialPortfolio,
            }))
          ),
          { resetStore: h } = (0, tM.useOstiumStore)(
            (0, e$.useShallow)((e) => ({ resetStore: e.resetStore }))
          ),
          { resetStore: f } = (0, tX.useTrackerStore)(
            (0, e$.useShallow)((e) => ({ resetStore: e.resetStore }))
          ),
          { resetStore: x } = (0, tQ.useGenericStore)(
            (0, e$.useShallow)((e) => ({ resetStore: e.resetStore }))
          ),
          [g, { open: v, close: b }] = (0, ts.useDisclosure)(!1),
          [y, { open: S, close: w }] = (0, ts.useDisclosure)(!1),
          k = (0, a.useRef)(null),
          N = (0, a.useRef)(null),
          C = () => {
            clearTimeout(N.current), (k.current = setTimeout(S, 0));
          },
          E = () => {
            clearTimeout(k.current), (N.current = setTimeout(w, 200));
          },
          { resetStore: P } = (0, tr.useBalanceStore)(
            (0, e$.useShallow)((e) => ({ resetStore: e.resetStore }))
          ),
          { resetStore: T } = (0, tU.useStockStore)(
            (0, e$.useShallow)((e) => ({ resetStore: e.resetStore }))
          ),
          { unsubscribe: A } = (0, tE.useHyperliquidWebSocket)(),
          { wallets: D } = (0, tP.useWallets)(),
          M = D.find((e) => "privy" === e.walletClientType),
          $ = async () => {
            A({ type: "activeAssetData", coin: d, user: M?.address }),
              A({ type: "userFills", user: M?.address, aggregateByTime: !0 }),
              A({ type: "allDexsClearinghouseState", user: M?.address }),
              A({ type: "userHistoricalOrders", user: M?.address }),
              A({ type: "userFundings", user: M?.address }),
              A({ type: "userTwapHistory", user: M?.address }),
              A({ type: "userTwapSliceFills", user: M?.address }),
              A({ type: "openOrders", user: M?.address, dex: "ALL_DEXS" }),
              setTimeout(() => {
                c(),
                  u(),
                  i(),
                  P(),
                  T(),
                  l(),
                  m(),
                  p(),
                  h(),
                  f(),
                  x(),
                  localStorage.clear();
              }, 500);
            try {
              s();
            } catch (e) {
              console.log(e);
            } finally {
              setTimeout(() => {
                t.push("/");
              }, 500);
            }
          },
          O = (0, a.useCallback)(() => {
            (0, tC.checkIsMobile)(1024) && t.push("/profile");
          }, [t]);
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsxs)(th.Popover, {
              shadow: "xl",
              opened: y,
              onChange: y ? w : S,
              children: [
                (0, r.jsx)(th.Popover.Target, {
                  children: (0, r.jsx)("div", {
                    onMouseEnter: C,
                    onMouseLeave: E,
                    onClick: O,
                    children: (0, r.jsx)(tW.Avatar, {
                      src:
                        n?.profileImage ||
                        "https://abs.twimg.com/sticky/default_profile_images/default_profile.png",
                      alt: n?.username,
                      name: n?.username,
                      size: 28,
                      radius: "xl",
                      className: "cursor-pointer",
                    }),
                  }),
                }),
                (0, r.jsx)(th.Popover.Dropdown, {
                  onMouseEnter: C,
                  onMouseLeave: E,
                  style: {
                    left: window.innerWidth - 300,
                    marginTop: 8,
                    padding: 0,
                    borderRadius: 8,
                    width: 280,
                    background: "rgba(18, 18, 20, 0.95)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                  },
                  children: (0, r.jsx)("div", {
                    children: (0, r.jsxs)("div", {
                      className: "pt-2",
                      children: [
                        (0, r.jsxs)("div", {
                          className: "pt-4 cursor-pointer text-sm px-6",
                          children: [
                            (0, r.jsxs)("div", {
                              className: "text-white font-semibold",
                              children: ["@", n?.username],
                            }),
                            (0, r.jsx)("div", {
                              className: "text-white opacity-70 text-xs pt-2",
                              children: n?.email,
                            }),
                          ],
                        }),
                        (0, r.jsxs)("div", {
                          className: "pt-8",
                          children: [
                            (0, r.jsxs)("div", {
                              className:
                                "py-3 flex items-center gap-2 text-sm hover:bg-slate-600 cursor-pointer px-6",
                              onClick: () => {
                                v(), w();
                              },
                              children: [
                                (0, r.jsx)(tH.IconCoin, {
                                  color: "#b2b2b2",
                                  style: {
                                    width: (0, j.rem)(18),
                                    height: (0, j.rem)(18),
                                  },
                                }),
                                (0, r.jsx)("div", { children: "Deposit" }),
                              ],
                            }),
                            (0, r.jsxs)("div", {
                              className:
                                "py-3 flex items-center gap-2 text-sm hover:bg-slate-600 cursor-pointer px-6",
                              onClick: () => t.push("/settings/?tab=export"),
                              children: [
                                (0, r.jsx)(tj.IconUpload, {
                                  color: "#b2b2b2",
                                  style: {
                                    width: (0, j.rem)(18),
                                    height: (0, j.rem)(18),
                                  },
                                }),
                                (0, r.jsx)("div", { children: "Export Keys" }),
                              ],
                            }),
                            (0, r.jsxs)("div", {
                              className:
                                "py-3 flex items-center gap-2 text-sm hover:bg-slate-600 cursor-pointer px-6",
                              onClick: () => {
                                window.open(
                                  "https://discord.gg/vn5sC8TyET",
                                  "_blank"
                                );
                              },
                              children: [
                                (0, r.jsx)(tK, {
                                  color: "#b2b2b2",
                                  style: {
                                    width: (0, j.rem)(18),
                                    height: (0, j.rem)(18),
                                  },
                                }),
                                (0, r.jsx)("div", { children: "Support 24/7" }),
                              ],
                            }),
                            (0, r.jsxs)("div", {
                              className:
                                "py-3 flex items-center gap-2 text-sm hover:bg-slate-600 cursor-pointer px-6",
                              onClick: () => $(),
                              children: [
                                (0, r.jsx)(tq, {
                                  className: "text-blood",
                                  style: {
                                    width: (0, j.rem)(18),
                                    height: (0, j.rem)(18),
                                  },
                                }),
                                (0, r.jsx)("div", {
                                  className: "text-blood",
                                  children: "Logout",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                }),
              ],
            }),
            (0, r.jsx)(tB.default, { opened: g, close: b }),
          ],
        });
      },
      tZ = () => {
        let {
          login: e,
          ready: t,
          user: a,
          authenticated: s,
        } = (0, o.usePrivy)();
        return t && s
          ? (0, r.jsx)(tY, {})
          : (0, r.jsx)("div", {
              children: (0, r.jsx)(eI.Button, {
                variant: "outline",
                size: "xs",
                color: "white",
                className:
                  "!text-white !border-white hover:!bg-white/10 !rounded px-8 transition-all duration-200",
                onClick: () => e({ loginMethods: ["email"] }),
                children: (0, r.jsx)("span", {
                  className: "text-sm font-semibold",
                  children: "Log In",
                }),
              }),
            });
      },
      t0 = ({ isMobileMenuOpen: e, setIsMobileMenuOpen: t }) => {
        let a = (0, eM.useRouter)(),
          {
            login: s,
            ready: n,
            user: i,
            authenticated: l,
            logout: c,
          } = (0, o.usePrivy)(),
          d = (0, eM.usePathname)(),
          u = (0, eM.useSearchParams)().toString(),
          m = `${d}${u ? `?${u}` : ""}`,
          p = [
            {
              label: "Crypto",
              activeKeys: ["crypto"],
              isTrue: !0,
              items: [
                { label: "Spot", href: "/trade/spot/UBTC/USDC/" },
                {
                  label: "Memescope",
                  href: "/crypto/?q=memescope&filter=pumpfun",
                },
                { label: "Onchain", href: "/crypto/?q=tokens&filter=trending" },
              ],
            },
            {
              label: "Stocks",
              activeKeys: ["stocks", "prestocks"],
              isTrue: !0,
              items: [
                {
                  label: "xStocks",
                  href: "/crypto/?q=memescope&filter=xstocks",
                },
                {
                  label: "PreStocks",
                  href: "/crypto/?q=memescope&filter=prestocks",
                  isTrue: !0,
                },
              ],
            },
            {
              label: "Perpetuals",
              activeKeys: ["crypto-perps", "rwa-perps"],
              items: [
                {
                  label: "Crypto Perpetuals",
                  href: "/trade/crypto-perps/BTC/",
                },
              ],
            },
            {
              label: "Terminal",
              activeKeys: ["terminal"],
              items: [
                {
                  label: "Crypto Terminal",
                  href: "/trade/terminal/crypto/?tab=terminal",
                },
                {
                  label: "War Terminal",
                  href: "/trade/terminal/war/",
                  isComingSoon: !1,
                },
                { label: "Stock Terminal", href: "", isComingSoon: !0 },
              ],
            },
            {
              label: "Rewards",
              activeKeys: [
                "competitions",
                "clans",
                "affiliate",
                "leaderboard",
                "airdrop",
              ],
              items: [
                { label: "Affiliate", href: "/affiliate" },
                { label: "Leaderboard", href: "/leaderboard" },
                { label: "Airdrop", href: "/airdrop" },
              ],
            },
          ],
          h = () => {
            t(!1);
          };
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)("div", {
              className: "flex items-center gap-3",
              children: (0, r.jsx)(eO.default, {
                src: ez.default,
                alt: "->",
                width: 110,
                className: "cursor-pointer",
                onClick: () => a.push("/"),
              }),
            }),
            (0, r.jsxs)("div", {
              className: "flex items-center gap-2.5",
              children: [
                (0, r.jsx)("div", {
                  className: "hidden lg:block",
                  children: (0, r.jsx)(tm, {}),
                }),
                (0, r.jsx)("div", { children: (0, r.jsx)(tZ, {}) }),
                (0, r.jsx)("button", {
                  "aria-label": e ? "Close menu" : "Open menu",
                  "aria-expanded": e,
                  onClick: () => t((e) => !e),
                  className:
                    "relative h-10 w-10 inline-flex items-center justify-center",
                  children: (0, r.jsx)(t_.IconMenu2, { size: 22 }),
                }),
              ],
            }),
            e &&
              (0, r.jsx)("div", {
                onClick: h,
                className:
                  "fixed inset-0 bg-black/60 animate-in fade-in duration-300",
                style: { zIndex: 19 },
              }),
            (0, r.jsxs)("div", {
              className:
                "fixed top-0 right-0 h-screen w-[82%] max-w-xs bg-background-700 border-l border-ash/40 shadow-xl transition-transform duration-300 ease-out " +
                (e ? "translate-x-0" : "translate-x-full"),
              style: { zIndex: 20 },
              children: [
                (0, r.jsxs)("div", {
                  className:
                    "h-14 flex items-center px-4 justify-between border-b border-ash/40",
                  children: [
                    (0, r.jsx)("div", {
                      className: "flex items-center gap-2",
                      children: (0, r.jsx)(eO.default, {
                        src: ez.default,
                        alt: "->",
                        width: 110,
                        onClick: () => a.push("/"),
                      }),
                    }),
                    (0, r.jsx)("button", {
                      "aria-label": "Close menu",
                      onClick: h,
                      className:
                        "h-9 w-9 inline-flex items-center justify-center",
                      children: (0, r.jsx)(tz.IconX, {
                        size: 22,
                        stroke: 1.8,
                        className:
                          "absolute transition-all duration-200 " +
                          (e
                            ? "scale-100 opacity-100 rotate-0"
                            : "scale-50 opacity-0 -rotate-45"),
                      }),
                    }),
                  ],
                }),
                (0, r.jsx)("div", {
                  className: "p-4",
                  children: (0, r.jsxs)("nav", {
                    className: "flex flex-col gap-0.5",
                    children: [
                      (0, r.jsx)(tF.Accordion, {
                        chevronPosition: "right",
                        classNames: {
                          root: "flex flex-col gap-0.5",
                          control:
                            "h-12 px-3 rounded-lg transition-all duration-200 hover:bg-white/5 active:scale-[0.98] !bg-transparent",
                          label: "text-white text-lg font-medium",
                          content: "px-3 pb-2 flex flex-col gap-0.5",
                          item: "border-none bg-transparent !m-0",
                          chevron: "text-white",
                        },
                        children: p?.map((e) => {
                          let t = e?.items?.some((e) => tx(m, e?.href || "")),
                            a = p.some((e) =>
                              e?.items?.some((e) => tx(m, e?.href || ""))
                            ),
                            s = t;
                          if (!s && !a) {
                            let t = (d || "")
                                .split("/")
                                .filter(Boolean)
                                .map((e) => e.toLowerCase()),
                              r =
                                e.activeKeys?.map((e) => e.toLowerCase()) ?? [];
                            s = r.length > 0 && t.some((e) => r.includes(e));
                          }
                          return e?.items?.length > 0
                            ? (0, r.jsxs)(
                                tF.Accordion.Item,
                                {
                                  value: e.label,
                                  children: [
                                    (0, r.jsx)(tF.Accordion.Control, {
                                      children: (0, r.jsx)("span", {
                                        className: (0, eR.default)(
                                          "transition-colors duration-200",
                                          {
                                            "nav-active-text": s,
                                            "text-white": !s,
                                          }
                                        ),
                                        children: e.label,
                                      }),
                                    }),
                                    (0, r.jsx)(tF.Accordion.Panel, {
                                      children: (0, r.jsx)("div", {
                                        className: "flex flex-col gap-0.5 mt-1",
                                        children: e?.items?.map((e) => {
                                          let t = tx(m, e?.href || "");
                                          return e?.isComingSoon
                                            ? (0, r.jsxs)(
                                                "div",
                                                {
                                                  className:
                                                    "flex items-center gap-1.5 px-3 h-10",
                                                  children: [
                                                    (0, r.jsx)("span", {
                                                      className:
                                                        "text-sm font-normal text-slate-900/50",
                                                      children: e?.label,
                                                    }),
                                                    (0, r.jsx)("div", {
                                                      className:
                                                        "bg-lemon text-black font-bold uppercase rounded-sm text-[8px] px-0.5 h-2.5 py-px leading-none",
                                                      children: "Coming Soon",
                                                    }),
                                                  ],
                                                },
                                                e.label
                                              )
                                            : (0, r.jsx)(
                                                eB.default,
                                                {
                                                  href: e?.href,
                                                  className: (0, eR.default)(
                                                    "flex items-center px-3 h-10 rounded-md text-sm font-normal transition-all duration-200",
                                                    {
                                                      "nav-active-text": t,
                                                      "text-slate-900 hover:text-white hover:bg-white/5":
                                                        !t,
                                                    }
                                                  ),
                                                  onClick: h,
                                                  children: e?.label,
                                                },
                                                e.label
                                              );
                                        }),
                                      }),
                                    }),
                                  ],
                                },
                                e.label
                              )
                            : (0, r.jsx)(
                                eB.default,
                                {
                                  href: e?.href,
                                  className: (0, eR.default)(
                                    "flex items-center h-12 px-3 rounded-lg text-lg font-normal transition-all duration-200 active:scale-[0.98]",
                                    {
                                      "nav-active-text": tx(m, e?.href || ""),
                                      "text-white hover:bg-white/5": !tx(
                                        m,
                                        e?.href || ""
                                      ),
                                    }
                                  ),
                                  onClick: h,
                                  children: e?.label,
                                },
                                e.label
                              );
                        }),
                      }),
                      l
                        ? [
                            { label: "Profile", href: "/profile" },
                            {
                              label: "Settings",
                              href: "/settings/?tab=profile",
                            },
                          ].map((e) => {
                            let t = tx(m, e?.href || "");
                            return (0, r.jsx)(
                              eB.default,
                              {
                                href: e?.href,
                                className: (0, eR.default)(
                                  "flex items-center h-12 px-3 rounded-lg text-lg font-normal transition-all duration-200 active:scale-[0.98]",
                                  {
                                    "nav-active-text": t,
                                    "text-white hover:bg-white/5": !t,
                                  }
                                ),
                                onClick: h,
                                children: e?.label,
                              },
                              e.label
                            );
                          })
                        : null,
                      l &&
                        (0, r.jsx)("div", {
                          className:
                            "flex items-center h-12 px-3 rounded-lg text-lg font-normal transition-all duration-200 hover:bg-blood/10 text-blood active:scale-[0.98] cursor-pointer",
                          onClick: () => {
                            c(), h();
                          },
                          children: "Logout",
                        }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        });
      };
    var t1 = e.i(596860);
    (0, a.memo)(() =>
      (0, r.jsx)("div", {
        className: "absolute inset-0 pointer-events-none overflow-hidden z-0",
        children: [...Array(20)].map((e, t) =>
          (0, r.jsx)(
            "div",
            {
              className: t1.default.snowflake,
              style: {
                left: `${100 * Math.random()}%`,
                animationDelay: `${5 * Math.random()}s`,
                animationDuration: `${3 + 4 * Math.random()}s`,
                opacity: 0.3 + 0.5 * Math.random(),
                width: `${2 + 4 * Math.random()}px`,
                height: `${2 + 4 * Math.random()}px`,
              },
            },
            t
          )
        ),
      })
    ).displayName = "Snowfall";
    var t2 = e.i(874704),
      t4 = e.i(350611),
      t5 = e.i(129277),
      t3 = e.i(25293);
    let t8 = (0, tV.default)("outline", "trending-up", "TrendingUp", [
      ["path", { d: "M3 17l6 -6l4 4l8 -8", key: "svg-0" }],
      ["path", { d: "M14 7l7 0l0 7", key: "svg-1" }],
    ]);
    var t6 = e.i(551944),
      t7 = e.i(646444),
      t9 = e.i(441414),
      re = e.i(730210),
      rt = e.i(720478),
      rr = e.i(557663),
      ra = e.i(469401),
      rs = e.i(283473),
      rn = e.i(11901);
    let ro = {
        cryptoPerps: {
          id: "crypto-perps",
          label: "Crypto Perps",
          logo: t2.default,
          width: 130,
        },
        onChain: {
          id: "on-chain",
          label: "Onchain",
          logo: t4.default,
          width: 100,
        },
        spot: { id: "spot", label: "Spot", logo: t2.default, width: 90 },
      },
      ri = (0, a.memo)(
        ({
          label: e,
          count: t,
          loading: a = !1,
          logo: s,
          isSelected: n,
          width: o,
        }) =>
          (0, r.jsxs)("div", {
            className: "flex items-center justify-center gap-2",
            style: o ? { width: o } : void 0,
            children: [
              s &&
                (0, r.jsx)(eO.default, {
                  src: s,
                  alt: e,
                  width: 14,
                  height: 14,
                  className: (0, eR.default)("transition-all duration-300", {
                    "brightness-0 invert opacity-100": n,
                    "brightness-0 invert opacity-50": !n,
                  }),
                }),
              (0, r.jsx)("span", { children: e }),
              a
                ? (0, r.jsx)(rs.default, { className: "ml-0.5" })
                : t > 0
                ? (0, r.jsxs)("span", {
                    className: "opacity-50 text-[11px] font-bold",
                    children: ["(", t, ")"],
                  })
                : null,
            ],
          })
      ),
      rl = ({ opened: e, onClose: t }) => {
        let s,
          n = (0, eM.useRouter)(),
          [o, i] = (0, a.useState)(""),
          [l, c] = (0, a.useState)(ro.cryptoPerps.id),
          [d, u] = (0, a.useState)([]),
          [m, p] = (0, a.useState)(!1),
          h = (0, a.useRef)(!1),
          {
            metaAssets: f,
            spotMetaAssets: x,
            spotMetaTokens: g,
            assetCtxs: v,
            spotAssetCtxs: b,
            setMetaAssets: y,
            setAssetCtxs: S,
            setSpotMetaTokens: w,
            setSpotMetaAssets: j,
            setSpotAssetCtxs: k,
            perpsMetaAssetsByDex: N,
            setPerpsDex: C,
            setPerpsMetaAssetsByDex: E,
            setPerpsSzDecimals: P,
          } = (0, tT.useHyperliquidStore)(
            (0, e$.useShallow)((e) => ({
              metaAssets: e.metaAssets,
              spotMetaAssets: e.spotMetaAssets,
              spotMetaTokens: e.spotMetaTokens,
              assetCtxs: e.assetCtxs,
              spotAssetCtxs: e.spotAssetCtxs,
              setMetaAssets: e.setMetaAssets,
              setAssetCtxs: e.setAssetCtxs,
              setSpotMetaTokens: e.setSpotMetaTokens,
              setSpotMetaAssets: e.setSpotMetaAssets,
              setSpotAssetCtxs: e.setSpotAssetCtxs,
              perpsMetaAssetsByDex: e.perpsMetaAssetsByDex,
              setPerpsDex: e.setPerpsDex,
              setPerpsMetaAssetsByDex: e.setPerpsMetaAssetsByDex,
              setPerpsSzDecimals: e.setPerpsSzDecimals,
            }))
          ),
          { pairs: T } = (0, tM.useOstiumStore)(
            (0, e$.useShallow)((e) => ({ pairs: e.pairs }))
          ),
          { fetchAllAssets: A } = (0, t7.useOstium)();
        (0, a.useEffect)(() => {
          let t = async () => {
            try {
              if (0 === f.length) {
                let e = await (0, re.getAllPerpMetas)();
                if (e && e.length > 0) {
                  let t = e[0].universe || [];
                  y(t);
                  let r = t.reduce(
                    (e, t) => ((e[t.name] = t.szDecimals), e),
                    {}
                  );
                  if (e.length > 1) {
                    let t = e.slice(1),
                      a = t.map((e, t) => {
                        let r = e.universe[0]?.name || "";
                        return {
                          name: r.includes(":")
                            ? r.split(":")[0]
                            : `dex${t + 1}`,
                          collateralToken: e.collateralToken,
                        };
                      }),
                      s = {};
                    t.forEach((e, t) => {
                      let n = a[t].name,
                        o = e.universe.reduce(
                          (e, t) => ((e[t.name] = t.szDecimals), e),
                          {}
                        );
                      (s[n] = {
                        collateralToken: e.collateralToken,
                        index: t + 1,
                        metaAssets: e.universe,
                        perpsSzDecimals: o,
                      }),
                        Object.assign(r, o);
                    }),
                      C(a),
                      E(s);
                  }
                  P(r);
                }
              }
              if (0 === v.length) {
                let e = await (0, re.getMetaAndAssetCtxs)();
                e && e.length > 1 && S(e[1]);
              }
              if (0 === x.length) {
                let e = await (0, re.getSpotMetaAssets)();
                e &&
                  e.length > 0 &&
                  (w(e[0].tokens || []), j(e[0].universe || []), k(e[1] || []));
              }
            } catch (e) {
              console.error("Error fetching HL data in modal:", e);
            }
          };
          e && t();
        }, [e, f.length, v.length, x.length]);
        let { getTradingPairByMetaAsset: D, getTokenNameByMetaAssetsName: M } =
            (0, tO.useSpotUtils)(),
          $ = (0, a.useMemo)(() => {
            if (!o) return { items: [], count: 0 };
            let e = o.toLowerCase(),
              t = new Map(),
              r = new Map();
            f.forEach((e, a) => {
              t.set(e.name, e), v[a] && r.set(e.name, v[a]);
            }),
              Object.values(N).forEach((e) => {
                e?.metaAssets?.length &&
                  e.metaAssets.forEach((a, s) => {
                    let n = a.name,
                      o = e.assetCtxs?.[s];
                    !t.has(n) && (t.set(n, a), o && r.set(n, o));
                  });
              });
            let a = Array.from(t.values()).filter((t) => {
              let r = t.name.toLowerCase().includes(e),
                a =
                  "string" == typeof t.name && t.name.includes(":")
                    ? t.name.split(":").pop()
                    : t.name,
                s = (rt.GlobalTokenNameMap[a] || "").toLowerCase().includes(e);
              return r || s;
            });
            return {
              items: a
                .map((e) => {
                  let t = e.name.includes(":") ? e.name.split(":")[1] : e.name,
                    a = r.get(e.name) || r.get(t);
                  return {
                    id: e.name,
                    name: e.name,
                    symbol: e.name,
                    price: a?.markPx ? Number(a.markPx) : 0,
                    change: a?.prevDayPx
                      ? ((Number(a.markPx) - Number(a.prevDayPx)) /
                          Number(a.prevDayPx)) *
                        100
                      : 0,
                    type: "crypto-perps",
                    icon: (0, tC.getIconUri)(e?.name, "crypto-perps"),
                    leverage: e?.maxLeverage,
                    vol24h: a?.dayNtlVlm ? Number(a.dayNtlVlm) : 0,
                    openInterest: a?.openInterest,
                  };
                })
                .slice(0, 10),
              count: a.length,
            };
          }, [o, f, v, N]),
          O = (0, a.useMemo)(() => {
            if (!o) return { items: [], count: 0 };
            let e = o.toLowerCase(),
              t = T.filter((t) => {
                let r = `${t.from}/${t.to}`.toLowerCase(),
                  a = (0, t9.getSymbolDisplayName)(t.from).toLowerCase();
                return r.includes(e) || a.includes(e);
              });
            return {
              items: t
                .map((e) => ({
                  id: `${e?.from}/${e?.to}`,
                  name: `${e?.from}/${e?.to}`,
                  displayName: (0, t9.getSymbolDisplayName)(e?.from),
                  symbol: e?.from,
                  price: e?.mid,
                  change: e?.percentChange24h || 0,
                  type: "rwa-perps",
                  icon: (0, tC.getIconUri)(e?.from, "rwa-perps"),
                  leverage:
                    e?.maxLeverage && e?.maxLeverage !== "0"
                      ? Number(e.maxLeverage) / 100
                      : e?.group?.maxLeverage
                      ? Number(e.group.maxLeverage) / 100
                      : 0,
                  displayDescription:
                    e?.displayDescription ||
                    (0, t9.getSymbolDisplayName)(e?.from),
                  vol24h: e?.volume ? Number(e.volume) / 1e6 : e?.vol24h || 0,
                  isMarketClosed: e?.isMarketOpen === !1,
                }))
                .slice(0, 10),
              count: t.length,
            };
          }, [o, T]),
          R = (0, a.useMemo)(() => {
            if (!o) return { items: [], count: 0 };
            let e = o.toLowerCase(),
              t = x.filter((t) => {
                let r = D(t.name) || "",
                  a = r.split("/")[0] || "",
                  s = M(t.name) || "";
                return (
                  t.name.toLowerCase().includes(e) ||
                  r.toLowerCase().includes(e) ||
                  a.toLowerCase().includes(e) ||
                  s.toLowerCase().includes(e)
                );
              });
            return {
              items: t
                .map((e) => {
                  let t = D(e.name),
                    r = M(e.name),
                    a = b.find((t) => t.coin === e.name);
                  return {
                    id: e.name,
                    name: t || r || e.name,
                    displayName: t || r || e.name,
                    symbol: r || e.name,
                    price: a?.markPx ? Number(a.markPx) : 0,
                    change: a?.prevDayPx
                      ? ((Number(a.markPx) - Number(a.prevDayPx)) /
                          Number(a.prevDayPx)) *
                        100
                      : 0,
                    type: "spot",
                    icon: (0, tC.getIconUri)(r || e?.name, "spot"),
                    vol24h: a?.dayNtlVlm ? Number(a.dayNtlVlm) : 0,
                    marketCap:
                      Number(a?.markPx || 0) *
                      Number(a?.circulatingSupply || 0),
                  };
                })
                .slice(0, 10),
              count: t.length,
            };
          }, [o, x, b, D, M]);
        (0, a.useEffect)(() => {
          h.current = !1;
        }, [o]),
          (0, a.useEffect)(() => {
            if (!o.trim()) {
              u([]), p(!1);
              return;
            }
            let e = new AbortController(),
              t = setTimeout(async () => {
                p(!0);
                try {
                  let { data: t, success: r } = await (0, t6.getTokenByValue)({
                    search: o.trim(),
                    signal: e.signal,
                  });
                  r && t?.tokens && u(t?.tokens);
                } catch (e) {
                  e instanceof Error &&
                    "AbortError" !== e.name &&
                    console.error("Search error:", e);
                } finally {
                  p(!1);
                }
              }, 500);
            return () => {
              clearTimeout(t), e.abort();
            };
          }, [o]),
          (0, a.useEffect)(() => {
            if (!e || !o.trim() || h.current) return;
            let t = setTimeout(() => {
              let e = Object.values(ro).map((e) => e.id),
                t = {
                  [ro.cryptoPerps.id]: $.count,
                  [ro.rwaPerps.id]: O.count,
                  [ro.onChain.id]: d.length,
                  [ro.spot.id]: R.count,
                },
                r = e.find((e) => t[e] > 0);
              r && r !== l && c(r);
            }, 300);
            return () => clearTimeout(t);
          }, [e, o, $.count, O.count, d.length, R.count, l]);
        let B = (0, a.useMemo)(
          () =>
            Object.values(ro).map((e) => ({
              label: (0, r.jsx)(ri, {
                label: e.label,
                logo: e.logo,
                isSelected: l === e.id,
                count:
                  e.id === ro.cryptoPerps.id
                    ? $.count
                    : e.id === ro.onChain.id
                    ? d.length
                    : R.count,
                loading: e.id === ro.onChain.id && m,
                width: e.width,
              }),
              value: e.id,
            })),
          [l, $.count, O.count, d.length, R.count, m]
        );
        return (0, r.jsx)(t5.Modal, {
          opened: e,
          onClose: t,
          withCloseButton: !1,
          padding: 0,
          size: "lg",
          radius: "xl",
          centered: !0,
          zIndex: 2e3,
          classNames: {
            content:
              "!bg-[#0A0A0B] !border !border-white/10 shadow-[0_0_80px_rgba(0,0,0,0.8)] overflow-hidden",
            body: "p-0",
          },
          children: (0, r.jsx)(rn.default, {
            name: "GlobalSearchModal:Content",
            children: (0, r.jsxs)(ed.Box, {
              className: "relative flex flex-col",
              children: [
                (0, r.jsx)("div", {
                  className:
                    "absolute -top-24 -right-24 w-64 h-64 bg-primary-500/10 blur-[120px] pointer-events-none",
                }),
                (0, r.jsx)("div", {
                  className:
                    "absolute -bottom-24 -left-24 w-64 h-64 bg-violet-500/5 blur-[120px] pointer-events-none",
                }),
                (0, r.jsx)(ed.Box, {
                  className:
                    "p-6 bg-[#0F0F11]/40 backdrop-blur-3xl border-b border-white/[0.03]",
                  children: (0, r.jsxs)("div", {
                    className: "relative flex items-center",
                    children: [
                      (0, r.jsx)(tn.IconSearch, {
                        size: 26,
                        className:
                          "absolute left-0 text-primary-400 drop-shadow-[0_0_8px_rgba(195,254,20,0.3)]",
                        stroke: 2.5,
                      }),
                      (0, r.jsx)(t3.TextInput, {
                        placeholder: "Search assets, markers or addresses...",
                        variant: "unstyled",
                        size: "lg",
                        value: o,
                        onChange: (e) => i(e.currentTarget.value),
                        autoFocus: !0,
                        className: "w-full",
                        styles: {
                          input: {
                            color: "#fff",
                            fontSize: "24px",
                            fontWeight: 700,
                            paddingLeft: "48px",
                            letterSpacing: "-0.03em",
                            height: "auto",
                            lineHeight: "1.1",
                            "::placeholder": {
                              color: "rgba(255, 255, 255, 0.15)",
                            },
                          },
                        },
                      }),
                    ],
                  }),
                }),
                (0, r.jsxs)(ed.Box, {
                  className: "h-[480px] flex flex-col min-h-0",
                  children: [
                    (0, r.jsx)(ed.Box, {
                      className:
                        "px-2 py-3 border-b border-white/[0.02] bg-[#0A0A0B]/20",
                      children: (0, r.jsx)(ra.GTRSegmentedControl, {
                        value: l || "",
                        onChange: (e) => {
                          (h.current = !0), c(e);
                        },
                        data: B,
                        variant: "tabs",
                        classNames: {
                          root: "!gap-2",
                          label:
                            "!py-2 !px-4 !text-sm !font-bold flex justify-center",
                        },
                      }),
                    }),
                    (0, r.jsx)("div", {
                      className: "flex-1 min-h-0 overflow-hidden flex flex-col",
                      children:
                        ((s = []),
                        (l === ro.cryptoPerps.id && (s = $.items),
                        l === ro.spot.id && (s = R.items),
                        l === ro.onChain.id && (s = d),
                        o)
                          ? m && l === ro.onChain.id
                            ? (0, r.jsx)(ed.Box, {
                                className:
                                  "flex-1 flex items-center justify-center p-12",
                                children: (0, r.jsx)(eS.Loader, {
                                  color: "white",
                                  size: "lg",
                                  variant: "bars",
                                }),
                              })
                            : 0 === s.length
                            ? (0, r.jsxs)(ed.Box, {
                                className:
                                  "flex-1 flex flex-col items-center justify-center p-12 text-center opacity-40",
                                children: [
                                  (0, r.jsx)(t8, {
                                    size: 48,
                                    stroke: 1,
                                    className: "mb-4",
                                  }),
                                  (0, r.jsxs)(e5.Text, {
                                    size: "lg",
                                    className: "font-bold",
                                    children: [
                                      'No results found for "',
                                      o,
                                      '"',
                                    ],
                                  }),
                                  (0, r.jsx)(e5.Text, {
                                    size: "sm",
                                    children: "Try a different name or symbol",
                                  }),
                                ],
                              })
                            : (0, r.jsx)("div", {
                                className:
                                  "flex-1 min-h-0 overflow-y-auto no-scrollbar p-2 pb-8 flex flex-col gap-0",
                                children: s.map((e) => {
                                  let a = e.type,
                                    s = e.name,
                                    o = e.name,
                                    l =
                                      e.icon ||
                                      (0, tC.getIconUri)(
                                        "spot" === a
                                          ? o?.split("/")?.[0]
                                          : "rwa-perps" === a
                                          ? s?.split("/")?.[0]
                                          : s,
                                        a
                                      );
                                  return (0, r.jsxs)(
                                    "div",
                                    {
                                      onClick: () => {
                                        "crypto-perps" === e.type
                                          ? n.push(
                                              `/trade/crypto-perps/${e.name}/`
                                            )
                                          : "spot" === e.type
                                          ? n.push(`/trade/spot/${e.name}`)
                                          : e.address &&
                                            n.push(
                                              `/token/${e.address}?chain=${e.chainSymbol}`
                                            ),
                                          t(),
                                          i("");
                                      },
                                      className:
                                        "group flex items-center justify-between py-1.5 px-3 rounded-xl hover:bg-white/[0.04] border border-transparent transition-all duration-200 cursor-pointer",
                                      children: [
                                        (0, r.jsxs)("div", {
                                          className: "flex items-center gap-3",
                                          children: [
                                            (0, r.jsx)("div", {
                                              className: "relative",
                                              children: (0, r.jsx)(tp.default, {
                                                chainIcon: e?.chainIcon,
                                                icon: l,
                                                symbol: e?.symbol || e?.name,
                                              }),
                                            }),
                                            (0, r.jsxs)("div", {
                                              children: [
                                                (0, r.jsxs)("div", {
                                                  className:
                                                    "flex items-center gap-1.5",
                                                  children: [
                                                    (0, r.jsx)(e5.Text, {
                                                      component: "span",
                                                      className:
                                                        "font-bold text-white text-[15px]",
                                                      children: e.address
                                                        ? e.symbol
                                                        : "spot" === e.type
                                                        ? e.name.split("/")[0]
                                                        : "crypto-perps" ===
                                                          e.type
                                                        ? (0, r.jsx)(
                                                            rr.default,
                                                            {
                                                              tokenName: e.name,
                                                              includeCurrency:
                                                                !0,
                                                            }
                                                          )
                                                        : (0,
                                                          tC.getDisplayName)(
                                                            e.name
                                                          ),
                                                    }),
                                                    e.address &&
                                                      (0, r.jsxs)("div", {
                                                        className:
                                                          "flex items-center gap-1.5 translate-y-[0.5px]",
                                                        children: [
                                                          e.verified &&
                                                            (0, r.jsx)(
                                                              tl.default,
                                                              { width: 14 }
                                                            ),
                                                          (0, r.jsx)(e5.Text, {
                                                            className:
                                                              "text-[14px] text-neutral-500 font-medium truncate max-w-[200px]",
                                                            children: e.name,
                                                          }),
                                                        ],
                                                      }),
                                                    !e.address &&
                                                      e.verified &&
                                                      (0, r.jsx)(tl.default, {
                                                        width: 14,
                                                      }),
                                                    e.leverage &&
                                                      (0, r.jsxs)("div", {
                                                        className:
                                                          "flex items-center gap-1.5",
                                                        children: [
                                                          (0, r.jsx)("div", {
                                                            className:
                                                              "w-1 h-1 rounded-full bg-white/20 mx-0.5",
                                                          }),
                                                          (0, r.jsxs)("span", {
                                                            className:
                                                              "text-[10px] font-bold text-yellow-400",
                                                            children: [
                                                              e.leverage,
                                                              "x",
                                                            ],
                                                          }),
                                                        ],
                                                      }),
                                                  ],
                                                }),
                                                (0, r.jsxs)("div", {
                                                  className:
                                                    "flex items-center gap-2 mt-0",
                                                  children: [
                                                    (0, r.jsx)(e5.Text, {
                                                      className:
                                                        "text-[11px] text-neutral-500 font-medium whitespace-nowrap",
                                                      children: e.address
                                                        ? `MC: $${(0,
                                                          tC.formatBigNumber)(
                                                            e.marketCap || 0
                                                          )}`
                                                        : "crypto-perps" ===
                                                          e.type
                                                        ? (0, r.jsxs)(
                                                            r.Fragment,
                                                            {
                                                              children: [
                                                                "24h Vol: $",
                                                                (0,
                                                                tC.formatBigNumber)(
                                                                  e.vol24h || 0
                                                                ),
                                                                (0, r.jsx)(
                                                                  "span",
                                                                  {
                                                                    className:
                                                                      "mx-1 opacity-20 text-white",
                                                                    children:
                                                                      "|",
                                                                  }
                                                                ),
                                                                "OI: $",
                                                                (0,
                                                                tC.formatBigNumber)(
                                                                  (e.openInterest ||
                                                                    0) *
                                                                    (e.price ||
                                                                      0)
                                                                ),
                                                              ],
                                                            }
                                                          )
                                                        : "rwa-perps" === e.type
                                                        ? (0, r.jsxs)(
                                                            r.Fragment,
                                                            {
                                                              children: [
                                                                e.displayDescription,
                                                                (0, r.jsx)(
                                                                  "span",
                                                                  {
                                                                    className:
                                                                      "mx-1 opacity-20 text-white",
                                                                    children:
                                                                      "|",
                                                                  }
                                                                ),
                                                                "24h Vol: $",
                                                                (0,
                                                                tC.formatBigNumber)(
                                                                  e.vol24h || 0
                                                                ),
                                                              ],
                                                            }
                                                          )
                                                        : (0, r.jsxs)(
                                                            r.Fragment,
                                                            {
                                                              children: [
                                                                "24h Vol: $",
                                                                (0,
                                                                tC.formatBigNumber)(
                                                                  e.vol24h || 0
                                                                ),
                                                                (0, r.jsx)(
                                                                  "span",
                                                                  {
                                                                    className:
                                                                      "mx-1 opacity-20 text-white",
                                                                    children:
                                                                      "|",
                                                                  }
                                                                ),
                                                                "MC: $",
                                                                (0,
                                                                tC.formatBigNumber)(
                                                                  e.marketCap ||
                                                                    0
                                                                ),
                                                              ],
                                                            }
                                                          ),
                                                    }),
                                                    e.isMarketClosed &&
                                                      (0, r.jsxs)("span", {
                                                        className:
                                                          "flex items-center gap-1.5 ml-1",
                                                        children: [
                                                          (0, r.jsx)("div", {
                                                            className:
                                                              "w-1 h-1 rounded-full bg-red-500",
                                                          }),
                                                          (0, r.jsx)("span", {
                                                            className:
                                                              "text-[9px] text-red-500 font-bold uppercase",
                                                            children: "Closed",
                                                          }),
                                                        ],
                                                      }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        (0, r.jsxs)("div", {
                                          className:
                                            "flex flex-col items-end gap-0",
                                          children: [
                                            void 0 !== e.price &&
                                              (0, r.jsx)(e5.Text, {
                                                className:
                                                  "font-bold text-white tabular-nums text-sm",
                                                children: (0, tC.convertIntlV2)(
                                                  Number(
                                                    e.price || e.price_usd || 0
                                                  )
                                                ),
                                              }),
                                            (void 0 !== e.change ||
                                              void 0 !== e.percent_change_24h ||
                                              void 0 !== e.priceChange24h) &&
                                              (0, r.jsxs)("div", {
                                                className: (0, eR.default)(
                                                  "text-[10px] font-bold",
                                                  (e.change ||
                                                    e.percent_change_24h ||
                                                    e.priceChange24h ||
                                                    0) >= 0
                                                    ? "text-green-500"
                                                    : "text-red-500"
                                                ),
                                                children: [
                                                  (e.change ||
                                                    e.percent_change_24h ||
                                                    e.priceChange24h ||
                                                    0) >= 0
                                                    ? "▲"
                                                    : "▼",
                                                  " ",
                                                  (
                                                    e.change ||
                                                    e.percent_change_24h ||
                                                    e.priceChange24h ||
                                                    0
                                                  ).toFixed(2),
                                                  "%",
                                                ],
                                              }),
                                          ],
                                        }),
                                      ],
                                    },
                                    e.id || e.address
                                  );
                                }),
                              })
                          : (0, r.jsxs)(ed.Box, {
                              className:
                                "flex-1 flex flex-col items-center justify-center p-8 text-center",
                              children: [
                                (0, r.jsxs)("div", {
                                  className: "relative mb-6 group",
                                  children: [
                                    (0, r.jsx)("div", {
                                      className:
                                        "absolute inset-0 bg-primary-500/25 blur-3xl rounded-full group-hover:bg-primary-500/40 transition-all duration-1000",
                                    }),
                                    (0, r.jsx)("div", {
                                      className:
                                        "relative w-24 h-24 flex items-center justify-center rounded-[2rem] bg-gradient-to-br from-white/[0.08] to-white/[0.01] border border-white/[0.1] shadow-2xl backdrop-blur-xl rotate-6 group-hover:rotate-0 transition-all duration-700",
                                      children: (0, r.jsx)(tn.IconSearch, {
                                        size: 40,
                                        stroke: 1,
                                        className:
                                          "text-white/20 group-hover:text-primary-400 transition-colors duration-500",
                                      }),
                                    }),
                                  ],
                                }),
                                (0, r.jsxs)("div", {
                                  className: "max-w-[340px]",
                                  children: [
                                    (0, r.jsx)("h3", {
                                      className:
                                        "text-xl font-black text-white mb-2 tracking-tighter bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent",
                                      children: "Search Everywhere",
                                    }),
                                    (0, r.jsx)("p", {
                                      className:
                                        "text-[14px] text-neutral-500 font-semibold leading-relaxed opacity-70",
                                      children:
                                        "Discover tokens across all markets. Type a ticker or paste an address to start.",
                                    }),
                                  ],
                                }),
                                (0, r.jsx)("div", {
                                  className:
                                    "mt-8 flex gap-3 flex-wrap justify-center max-w-sm",
                                  children: [
                                    "BTC",
                                    "ETH",
                                    "SOL",
                                    "SPX",
                                    "NVDA",
                                    "PEPE",
                                  ].map((e) =>
                                    (0, r.jsx)(
                                      "button",
                                      {
                                        className:
                                          "px-5 py-2 rounded-2xl bg-white/[0.03] border border-white/[0.05] text-[12px] font-bold text-neutral-400 hover:bg-primary-400 hover:text-black hover:border-primary-400 hover:shadow-[0_0_20px_rgba(195,254,20,0.4)] transition-all duration-500 hover:-translate-y-1 active:scale-95",
                                        onClick: () => i(e),
                                        children: e,
                                      },
                                      e
                                    )
                                  ),
                                }),
                              ],
                            })),
                    }),
                  ],
                }),
                (0, r.jsx)(ed.Box, {
                  className:
                    "px-6 py-3 bg-[#0A0A0B] border-t border-white/[0.05] flex justify-between items-center relative z-10",
                  children: (0, r.jsx)("div", {
                    className: "flex gap-4 items-center opacity-40",
                    children: (0, r.jsxs)("div", {
                      className: "flex items-center gap-1.5",
                      children: [
                        (0, r.jsx)("span", {
                          className:
                            "px-1.5 py-0.5 rounded border border-white/20 text-[10px] font-bold",
                          children: "ESC",
                        }),
                        (0, r.jsx)("span", {
                          className:
                            "text-[10px] font-bold uppercase tracking-widest",
                          children: "Close",
                        }),
                      ],
                    }),
                  }),
                }),
              ],
            }),
          }),
        });
      },
      rc = (0, a.memo)(
        ({ className: e, href: t, onMouseEnter: a, children: s }) =>
          (0, r.jsx)(eB.default, {
            className: e,
            href: t,
            children: (0, r.jsx)("span", { onMouseEnter: a, children: s }),
          })
      );
    rc.displayName = "MemoizedNavLink";
    let rd = (0, a.memo)(({ onClick: e }) =>
      (0, r.jsx)("div", {
        className: "relative group cursor-pointer h-10 flex items-center",
        onClick: e,
        children: (0, r.jsxs)("div", {
          className: "relative",
          children: [
            (0, r.jsx)(eO.default, {
              src: ez.default,
              alt: "GTR.TRADE",
              width: 140,
              priority: !0,
            }),
            (0, r.jsx)("div", {
              className:
                "absolute -bottom-[19px] right-[5px] z-20 pointer-events-none select-none",
              children: (0, r.jsxs)("svg", {
                width: "40",
                height: "25",
                viewBox: "0 0 40 25",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                className: "transform rotate-[-8deg]",
                style: { transformOrigin: "20px 0px" },
                children: [
                  (0, r.jsx)("line", {
                    x1: "20",
                    y1: "2",
                    x2: "20",
                    y2: "8",
                    stroke: "#4CFF5E",
                    strokeWidth: "1",
                  }),
                  (0, r.jsx)("rect", {
                    x: "5",
                    y: "8",
                    width: "30",
                    height: "12",
                    rx: "3",
                    fill: "#4CFF5E",
                  }),
                  (0, r.jsx)("text", {
                    x: "20",
                    y: "17",
                    textAnchor: "middle",
                    fill: "black",
                    fontSize: "8",
                    fontWeight: "900",
                    fontFamily: "sans-serif",
                    className: "tracking-tighter uppercase",
                    children: "BETA",
                  }),
                  (0, r.jsx)("circle", {
                    cx: "20",
                    cy: "10.5",
                    r: "0.8",
                    fill: "black",
                    fillOpacity: "0.2",
                  }),
                ],
              }),
            }),
          ],
        }),
      })
    );
    rd.displayName = "MemoizedLogo";
    let ru = (0, a.memo)(({ onClick: e }) =>
      (0, r.jsx)(eI.Button, {
        variant: "unstyled",
        onClick: e,
        className:
          "h-9 px-3 rounded-xl bg-white/[0.03] border border-white/[0.05] hover:bg-white/[0.06] hover:border-white/[0.1] transition-all flex items-center gap-3 group",
        children: (0, r.jsx)(tn.IconSearch, {
          size: 18,
          className:
            "text-neutral-500 group-hover:text-primary-400 transition-colors",
        }),
      })
    );
    ru.displayName = "MemoizedSearchTrigger";
    var rm = e.i(581949);
    let rp = (0, a.memo)(() => {
      let e = {
          ghost: [
            "Boo! Just kidding, I'm friendly! 👻",
            "I'm here for the treats, not tricks!",
            "Floating through your portfolio~",
            "Spooky gains ahead! OoOoOo~",
            "Ghost of profits past 👻",
          ],
          bat: [
            "Bat-tastic trades! 🦇",
            "I only come out for good deals!",
            "Hanging around for moon shots 🌙",
            "Echo-locating the best tokens!",
            "Flying to new ATHs! 🦇",
          ],
          pumpkin: [
            "Happy Halloween! 🎃",
            "Carving out profits!",
            "Pumpkin spice and everything nice!",
            "Let's get smashing (those gains)!",
            "Seeds of success! 🎃",
          ],
          web: [
            "Caught in the web of success! 🕸️",
            "Weaving profitable connections~",
            "Spider sense says... BULLISH!",
            "Tangled in good vibes only!",
            "Spinning webs of wealth! 🕸️",
          ],
        },
        t = {
          santa: [
            "Ho Ho Ho! Merry Trading! 🎅",
            "Gifts of gains for everyone!",
            "Checking the naughty and nice list (Bulls are nice!)",
            "Delivering multi-baggers tonight!",
            "Santa's bag is full of tokens! 🎁",
          ],
          tree: [
            "Rocking around the Christmas tree! 🎄",
            "Decorating your portfolio with green candles!",
            "Topped with a bright mooning star!",
            "Under the tree: 100x gems!",
            "Festive vibes only! 🎄",
          ],
          snowflake: [
            "Let it snow... green candles! ❄️",
            "Every snowflake is unique, like your trades!",
            "Chilly outside, hot trades inside!",
            "Winter wonderland of wealth!",
            "Crystal clear profits! ❄️",
          ],
          gift: [
            "Unwrap your gains! 🎁",
            "A little something for the bulls!",
            "Best gift: A successful exit!",
            "Boxed and ready for moon!",
            "Surprise pump incoming! 🎁",
          ],
        },
        [s, n] = (0, a.useState)(""),
        i = (0, a.useRef)(null),
        [l, c] = (0, a.useState)([]),
        [d, u] = (0, a.useState)(!1),
        [m, p] = (0, a.useState)(!1),
        [h, { open: f, close: x }] = (0, ts.useDisclosure)(!1),
        [g, { open: v, close: b }] = (0, ts.useDisclosure)(!1),
        [y] = (0, ta.useDebouncedValue)(s, 200),
        { login: S, ready: w, user: j, authenticated: k } = (0, o.usePrivy)(),
        N = (0, eM.useRouter)(),
        { createWallet: C } = (0, e_.useSolanaWallets)(),
        E = (0, eM.usePathname)(),
        {
          setProfileData: P,
          profileData: { isReferralAvailable: T, isClanMember: A },
        } = (0, tr.useProfileStore)(
          (0, e$.useShallow)((e) => ({
            profileData: e.profileData,
            setProfileData: e.setProfileData,
          }))
        ),
        D = (0, eM.useSearchParams)().get("ref"),
        M = !!j?.linkedAccounts.find(
          (e) =>
            "wallet" === e.type &&
            "privy" === e.walletClientType &&
            "solana" === e.chainType
        ),
        $ = !!j?.linkedAccounts.find(
          (e) =>
            "wallet" === e.type &&
            "privy" === e.walletClientType &&
            "ethereum" === e.chainType
        ),
        O = (0, a.useMemo)(
          () => ({
            activeKeys: [
              "crypto",
              "stocks",
              "spot",
              "rwa-perps",
              "crypto-perps",
            ],
            columnOne: {
              heading: "Perpetuals",
              items: [
                {
                  label: "Crypto Perpetuals",
                  href: "/trade/crypto-perps/BTC/",
                  description: "Trade crypto futures with up to 40x leverage",
                },
              ],
            },
            columnTwo: {
              heading: "Crypto",
              items: [
                {
                  label: "Spot",
                  href: "/trade/spot/UBTC/USDC/",
                  description: "Buy and sell on the Hyperliquid Spot market",
                },
                {
                  label: "Memescope",
                  href: "/crypto/?q=memescope&filter=pumpfun",
                  description: "Trade tokens from different launchpads",
                },
                {
                  label: "Onchain",
                  href: "/crypto/?q=tokens&filter=trending",
                  description: "Trade all tokens across all chains",
                },
              ],
            },
            columnThree: {
              heading: "Stocks",
              items: [
                {
                  label: "xStocks",
                  href: "/crypto/?q=memescope&filter=xstocks",
                  description: "50+ Tokenized Stocks available on Solana chain",
                },
                {
                  label: "PreStocks",
                  href: "/crypto/?q=memescope&filter=prestocks",
                  description: "Tokenized Pre-IPO Stocks on Solana",
                },
              ],
            },
          }),
          []
        ),
        R = (0, a.useMemo)(
          () => ({
            activeKeys: ["terminal"],
            columnOne: {
              items: [
                {
                  label: "Crypto Terminal",
                  href: "/trade/terminal/crypto/?tab=terminal",
                  description:
                    "Trade, track, and analyze crypto markets in real-time",
                },
                {
                  label: "War Terminal",
                  href: "/trade/terminal/war/",
                  description:
                    "Track live token battles and market wars with real-time insights",
                  isComingSoon: !1,
                },
                {
                  label: "Stock Terminal",
                  href: "",
                  description:
                    "Monitor, research, and trade stocks with live insights",
                  isComingSoon: !0,
                },
              ],
            },
          }),
          []
        ),
        B = (0, a.useMemo)(
          () => ({
            activeKeys: [
              "competitions",
              "clans",
              "affiliate",
              "leaderboard",
              "airdrop",
            ],
            columnOne: {
              items: [
                {
                  label: "Affiliate",
                  href: "/affiliate",
                  description:
                    "Earn rewards by referring traders to the platform",
                },
                {
                  label: "Leaderboard",
                  href: "/leaderboard",
                  description:
                    "View top traders and compete for the highest rankings",
                },
                {
                  label: "Airdrop",
                  href: "/airdrop",
                  description:
                    "Participate in token distributions and rewards programs",
                },
              ],
            },
          }),
          []
        );
      (0, a.useMemo)(
        () =>
          (0, eR.default)(
            { "nav-active-text": E.includes("/competitions/") },
            "cursor-pointer hover:nav-active-text text-xs relative"
          ),
        [E]
      ),
        (0, a.useMemo)(
          () =>
            (0, eR.default)(
              {
                "nav-active-text": "/portfolio/" === E,
                "text-white": "/portfolio/" !== E,
              },
              "cursor-pointer hover:nav-active-text text-xs"
            ),
          [E]
        );
      let I = (0, a.useMemo)(
        () =>
          (0, eR.default)(
            {
              "nav-active-text": "/profile/" === E,
              "text-white": "/profile/" !== E,
            },
            "cursor-pointer hover:nav-active-text text-xs"
          ),
        [E]
      );
      (0, a.useMemo)(
        () =>
          (0, eR.default)(
            {
              "nav-active-text": "/feeds/" === E,
              "text-white": "/feeds/" !== E,
            },
            "cursor-pointer hover:nav-active-text text-xs"
          ),
        [E]
      ),
        (0, a.useMemo)(
          () =>
            (0, eR.default)(
              { "nav-active-text": "/clans/" === E },
              "cursor-pointer hover:nav-active-text text-xs relative"
            ),
          [E]
        ),
        (0, a.useCallback)(() => {
          N.prefetch("/competitions");
        }, [N]),
        (0, a.useCallback)(() => {
          N.prefetch("/portfolio");
        }, [N]);
      let L = (0, a.useCallback)(() => {
        N.prefetch("/profile");
      }, [N]);
      (0, a.useCallback)(() => {
        N.prefetch("/feeds");
      }, [N]),
        (0, a.useCallback)(() => {
          N.prefetch("/clans");
        }, [N]);
      let F = (0, a.useCallback)(() => {
          N.push("/");
        }, [N]),
        _ = (0, a.useCallback)(() => {
          v();
        }, [v]),
        z = async () => {
          try {
            let { data: e, success: t } = await (0, to.getProfileInfo)();
            t && P(e);
          } catch (e) {
            console.log("errorxx", e);
          }
        },
        W = async () => {
          try {
            let { success: e } = await (0, to.addReferral)({
              referralCode: localStorage.getItem("ref"),
            });
            e &&
              ((0, ti.trackEvent)("Referral Added", {
                referralCode: localStorage.getItem("ref"),
              }),
              z(),
              localStorage.removeItem("ref"));
          } catch (e) {
            console.log("errorxx", e);
          }
        };
      return ((0, a.useEffect)(() => {
        D && localStorage.setItem("ref", D);
        let e = (e) => {
          (((e.metaKey || e.ctrlKey) && "k" === e.key) ||
            ("/" === e.key &&
              e.target instanceof HTMLElement &&
              !["INPUT", "TEXTAREA"].includes(e.target.tagName))) &&
            (e.preventDefault(), v()),
            "Escape" === e.key && b();
        };
        return (
          window.addEventListener("keydown", e),
          () => window.removeEventListener("keydown", e)
        );
      }, []),
      (0, a.useEffect)(() => {
        p(!1);
      }, [E]),
      (0, a.useEffect)(() => {
        m
          ? (document.body.style.overflow = "hidden")
          : (document.body.style.overflow = "");
      }, [m]),
      (0, a.useEffect)(() => {
        w && k && T && localStorage.getItem("ref") && W();
      }, [w, k, T]),
      (0, a.useEffect)(() => {
        if (w && k) {
          if ((0, eF.getAccessToken)() && $ && !M)
            try {
              C();
            } catch (e) {
              console.log(e);
            }
          (0, ti.setUserEmail)(j.email.address);
        }
      }, [w, k, $]),
      ["/export/", "/terms/", "/privacy/"].includes(E))
        ? null
        : (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsxs)("div", {
                ref: i,
                style: {
                  position: "fixed",
                  left: 0,
                  right: 0,
                  top: 0,
                  zIndex: 100,
                  height: "48px",
                },
                className:
                  "hidden lg:flex px-6 py-2 justify-between items-center bg-neutral-950 fixed left-0 right-0 top-0 z-[10] border-b-1 border-b-neutral-800 overflow-hidden",
                children: [
                  !1,
                  !1,
                  (0, r.jsx)("div", {
                    className:
                      "flex justify-center lg:justify-start items-center gap-4 font-medium z-10",
                    children: (0, r.jsxs)("div", {
                      className:
                        "flex justify-center lg:justify-start items-center gap-4 xl:gap-16 cursor-pointer",
                      children: [
                        (0, r.jsx)(rd, { onClick: F }),
                        (0, r.jsxs)("div", {
                          className: "flex gap-4 xl:gap-6 items-center",
                          children: [
                            (0, r.jsx)(tv, {
                              label: "Trade",
                              popoverWidth: 750,
                              activeKeys: O.activeKeys,
                              excludeKeys: ["terminal"],
                              columnOne: O.columnOne,
                              columnTwo: O.columnTwo,
                              columnThree: O.columnThree,
                            }),
                            (0, r.jsx)(tv, {
                              label: "Terminal",
                              popoverWidth: 300,
                              activeKeys: R.activeKeys,
                              columnOne: R.columnOne,
                            }),
                            (0, r.jsx)(tv, {
                              label: "Rewards",
                              popoverWidth: 300,
                              activeKeys: B.activeKeys,
                              columnOne: B.columnOne,
                            }),
                            k
                              ? (0, r.jsx)(r.Fragment, {
                                  children: (0, r.jsx)(rc, {
                                    className: I,
                                    href: "/profile",
                                    onMouseEnter: L,
                                    children: "Profile",
                                  }),
                                })
                              : null,
                          ],
                        }),
                      ],
                    }),
                  }),
                  (0, r.jsxs)("div", {
                    className: "flex gap-3 xl:gap-5 items-center text-sm",
                    children: [
                      (0, r.jsxs)(r.Fragment, {
                        children: [
                          (0, r.jsx)("div", {
                            children: (0, r.jsx)(ru, { onClick: _ }),
                          }),
                          (0, r.jsx)(rl, { opened: g, onClose: b }),
                        ],
                      }),
                      k
                        ? (0, r.jsxs)(r.Fragment, {
                            children: [
                              (0, r.jsx)(eI.Button, {
                                color: "#8e51ff",
                                onClick: () => f(),
                                size: "xs",
                                children: (0, r.jsx)("span", {
                                  className: "text-[14px]",
                                  children: "Deposit",
                                }),
                              }),
                              (0, r.jsx)(tL, {}),
                            ],
                          })
                        : null,
                      (0, r.jsx)(tm, {}),
                      (0, r.jsx)(tZ, {}),
                    ],
                  }),
                ],
              }),
              (0, r.jsx)("div", {
                style: {
                  position: "fixed",
                  left: 0,
                  right: 0,
                  top: 0,
                  height: "48px",
                  zIndex: 100,
                },
                className:
                  "flex lg:hidden px-4 items-center justify-between bg-background-700 fixed left-0 right-0 top-0 z-[20]",
                children: (0, r.jsx)(t0, {
                  isMobileMenuOpen: m,
                  setIsMobileMenuOpen: p,
                }),
              }),
              (0, r.jsx)(tB.default, { opened: h, close: x }),
            ],
          });
    });
    function rh({ children: e }) {
      let { setCategories: t, setTrendingCategories: s } = (0,
        tr.useCategoryStore)(
          (0, e$.useShallow)((e) => ({
            setCategories: e.setCategories,
            setTrendingCategories: e.setTrendingCategories,
          }))
        ),
        { setProfileData: n, setHoldings: i } = (0, tr.useProfileStore)(
          (0, e$.useShallow)((e) => ({
            setProfileData: e.setProfileData,
            setHoldings: e.setHoldings,
          }))
        ),
        { setPresets: l } = (0, tG.usePresetStore)(
          (0, e$.useShallow)((e) => ({ setPresets: e.setPresets }))
        ),
        {
          setAllUsdcBalances: c,
          setUsdcBalance: d,
          setStockBalance: u,
          setCryptoPerpsBalance: m,
        } = (0, tr.useBalanceStore)(
          (0, e$.useShallow)((e) => ({
            setAllUsdcBalances: e.setAllUsdcBalances,
            setUsdcBalance: e.setUsdcBalance,
            setStockBalance: e.setStockBalance,
            setCryptoPerpsBalance: e.setCryptoPerpsBalance,
          }))
        ),
        { setExchangeRates: p } = (0, tr.useExchangeStore)(
          (0, e$.useShallow)((e) => ({ setExchangeRates: e.setExchangeRates }))
        ),
        h = (0, eM.usePathname)(),
        { authenticated: f, ready: x } = (0, o.usePrivy)(),
        {
          setMetaAssets: g,
          setSpotAssetCtxs: v,
          setSpotMetaTokens: b,
          setSpotMetaAssets: y,
          setPerpsSzDecimals: S,
          setPerpsDex: w,
          setPerpsMetaAssetsByDex: j,
          setAssetCtxs: k,
          setPerpsMetaAssetsCtxByDex: N,
          setMarginSummary: C,
          setCrossMarginSummary: E,
          setWithdrawable: P,
          setAssetPositions: T,
          setCrossMaintenanceMarginUsed: A,
          setSpotBalances: D,
          setClearinghouseStateByDex: M,
        } = (0, tT.useHyperliquidStore)(
          (0, e$.useShallow)((e) => ({
            setMetaAssets: e.setMetaAssets,
            setSpotAssetCtxs: e.setSpotAssetCtxs,
            setSpotMetaTokens: e.setSpotMetaTokens,
            setSpotMetaAssets: e.setSpotMetaAssets,
            setPerpsSzDecimals: e.setPerpsSzDecimals,
            setPerpsDex: e.setPerpsDex,
            setPerpsMetaAssetsByDex: e.setPerpsMetaAssetsByDex,
            setAssetCtxs: e.setAssetCtxs,
            setPerpsMetaAssetsCtxByDex: e.setPerpsMetaAssetsCtxByDex,
            setMarginSummary: e.setMarginSummary,
            setCrossMarginSummary: e.setCrossMarginSummary,
            setWithdrawable: e.setWithdrawable,
            setAssetPositions: e.setAssetPositions,
            setCrossMaintenanceMarginUsed: e.setCrossMaintenanceMarginUsed,
            setSpotBalances: e.setSpotBalances,
            setClearinghouseStateByDex: e.setClearinghouseStateByDex,
          }))
        ),
        { wallets: $ } = (0, tP.useWallets)(),
        O = $.find((e) => "privy" === e.walletClientType),
        {
          isConnected: R,
          subscribe: B,
          unsubscribe: I,
          messageEvent: L,
          removeListener: F,
        } = (0, tE.useHyperliquidWebSocket)(),
        { setPairs: _ } = (0, tM.useOstiumStore)(
          (0, e$.useShallow)((e) => ({ setPairs: e.setPairs }))
        ),
        z = async () => {
          try {
            let e = await (0, re.getSpotMetaAssets)();
            if (!e || 0 === e.length) return null;
            return {
              tokens: e[0].tokens,
              universe: e[0].universe,
              assetCtxs: e[1],
            };
          } catch (e) {
            return console.error("Error fetching spot meta assets:", e), null;
          }
        },
        W = async () => {
          try {
            let e = await (0, re.getAllPerpMetas)();
            if (!e || 0 === e.length) return null;
            let t = e[0].universe || [],
              r = t.reduce((e, t) => ((e[t.name] = t.szDecimals), e), {}),
              a = [],
              s = {};
            if (e.length > 1) {
              let t = e.slice(1);
              a = t.map((e, t) => {
                let r = e.universe[0]?.name || "";
                return {
                  name: r.includes(":") ? r.split(":")[0] : `dex${t + 1}`,
                  collateralToken: e.collateralToken,
                };
              });
              let n = {};
              t.forEach((e, t) => {
                let s = a[t].name,
                  o = e.universe.reduce(
                    (e, t) => ((e[t.name] = t.szDecimals), e),
                    {}
                  );
                (n[s] = {
                  collateralToken: e.collateralToken,
                  index: t + 1,
                  metaAssets: e.universe,
                  perpsSzDecimals: o,
                }),
                  Object.assign(r, o);
              }),
                (s = n);
            }
            return {
              mainMetaAssets: t,
              perpsDexs: a,
              perpsMetaAssetsByDex: s,
              mergedPerpsSzDecimals: r,
            };
          } catch (e) {
            return console.error("Error fetching all perp metas:", e), null;
          }
        },
        U = async () => {
          try {
            let { data: e, success: t } = await (0, to.getProfileInfo)();
            t && n(e);
          } catch (e) {
            console.log("errorxx", e);
          }
        },
        H = async () => {
          let { data: e, success: t } = await (0, to.getHoldings)();
          t && i(e);
        },
        V = async () => {
          try {
            let e = await rm.default.get(
              "https://api.coingecko.com/api/v3/coins/usd"
            );
            p(e.data.market_data.current_price);
          } catch (e) {
            console.log("errorxx", e);
          }
        },
        K = async () => {
          let { data: e, success: t } = await (0, to.getPresets)();
          t && l(e?.[0]);
        },
        q = async () => {
          let { success: e, data: t } = await (0, to.getAllUsdcBalances)();
          e &&
            (c(t),
            u(t.find((e) => "arbitrum" === e.chain.symbol).balance),
            d(t.find((e) => "solana" === e.chain.symbol).balance));
        },
        G = ["/portfolio", "/history", "/settings"],
        J = (0, eM.useRouter)();
      return (
        (0, a.useEffect)(() => {
          (async () => {
            try {
              let [e, t, r] = await Promise.allSettled([
                z(),
                W(),
                (0, re.getMetaAndAssetCtxs)(),
              ]);
              if ("fulfilled" === e.status && e.value) {
                let t = e.value;
                b(t.tokens || []), y(t.universe || []), v(t.assetCtxs || []);
              }
              if ("fulfilled" === t.status && t.value) {
                let e = t.value;
                g(e.mainMetaAssets || []),
                  w(e.perpsDexs || []),
                  j(e.perpsMetaAssetsByDex || {}),
                  S(e.mergedPerpsSzDecimals || {});
              }
              "fulfilled" === r.status &&
                r.value &&
                r.value.length > 1 &&
                k(r.value[1]);
            } catch (e) {
              console.error("Error initializing data:", e);
            }
          })(),
            J.prefetch("/trade/terminal"),
            J.prefetch("/trade/crypto-perps/BTC"),
            J.prefetch("/portfolio"),
            J.prefetch("/crypto"),
            J.prefetch(
              "/token/So11111111111111111111111111111111111111112/?chain=solana"
            ),
            J.prefetch("/stocks/AAPL"),
            J.prefetch("/affiliate"),
            V();
          try {
            (0, ti.initMixpanel)();
          } catch (e) {}
        }, []),
        (0, a.useEffect)(() => {
          f && x && (U(), H(), K(), q()),
            x && !f && G.some((e) => h.includes(e)) && (0, eM.redirect)("/");
        }, [f, x]),
        (0, a.useEffect)(() => {
          let e = (e) => {
            k(e?.ctxs?.[0][1]),
              e?.ctxs?.length > 1 &&
                e.ctxs.slice(1).forEach((e) => {
                  N(e[1], e[0]);
                });
          };
          return (
            R &&
              (B({ type: "allDexsAssetCtxs" }),
              B({ type: "spotAssetCtxs" }),
              L("allDexsAssetCtxs", e),
              L("spotAssetCtxs", v)),
            () => {
              I({ type: "allDexsAssetCtxs" }),
                I({ type: "spotAssetCtxs" }),
                F("allDexsAssetCtxs", e),
                F("spotAssetCtxs", v);
            }
          );
        }, [R]),
        (0, a.useEffect)(() => {
          let e = (e) => {
              if (e && e?.user?.toLowerCase() === O?.address?.toLowerCase()) {
                A(e?.clearinghouseStates?.[0]?.[1]?.crossMaintenanceMarginUsed),
                  C(e?.clearinghouseStates?.[0]?.[1]?.marginSummary),
                  E(e?.clearinghouseStates?.[0]?.[1]?.crossMarginSummary),
                  P(e?.clearinghouseStates?.[0]?.[1]?.withdrawable);
                let t = [];
                if (
                  (e?.clearinghouseStates.forEach((e) => {
                    t.push(...e?.[1]?.assetPositions);
                  }),
                  T(t),
                  e?.clearinghouseStates && e.clearinghouseStates.length > 1)
                ) {
                  let t = e.clearinghouseStates.slice(1),
                    r = {};
                  t.forEach((e) => {
                    let t = e[0];
                    e[1].clearinghouseState && (r[t] = e[1].clearinghouseState);
                  }),
                    M(r);
                }
              }
            },
            t = (e) => {
              if (e && e?.user?.toLowerCase() === O?.address?.toLowerCase()) {
                D(e?.spotState.balances);
                let t = e?.spotState.balances.find((e) => "USDC" === e.coin);
                m(Number(t?.total) - Number(t?.hold) || 0);
              }
            };
          return (
            R &&
              f &&
              O?.address &&
              (B({ type: "allDexsClearinghouseState", user: O.address }),
              B({ type: "spotState", user: O.address }),
              L("allDexsClearinghouseState", e),
              L("spotState", t)),
            () => {
              O?.address &&
                (I({ type: "allDexsClearinghouseState", user: O.address }),
                I({ type: "spotState", user: O.address }),
                F("allDexsClearinghouseState", e),
                F("spotState", t));
            }
          );
        }, [R, f, O?.address]),
        (0, r.jsx)(r.Fragment, {
          children: x
            ? (0, r.jsx)(r.Fragment, {
                children: (0, r.jsxs)("div", {
                  className: "mx-auto w-full",
                  children: [
                    (0, r.jsx)(rp, {}),
                    (0, r.jsx)("div", {
                      style: { paddingTop: "48px" },
                      children: e,
                    }),
                  ],
                }),
              })
            : null,
        })
      );
    }
    var rf = e.i(194412),
      rx = e.i(409159);
    let rg = (0, a.createContext)(void 0),
      rv = ({ children: e }) => {
        let t = (0, a.useRef)(null),
          s = (0, a.useRef)({}),
          { profileData: n } = (0, tr.useProfileStore)(
            (0, e$.useShallow)((e) => ({ profileData: e.profileData }))
          ),
          {
            isConnected: o,
            setMessage: i,
            triggerNotification: l,
          } = (0, tk.useMuxSocket)(),
          [c, d] = (0, a.useState)(!1),
          u = (0, a.useCallback)(() => {
            let e = n?.synopticApiKey;
            return e
              ? `wss://api.synoptic.com/v1/ws/on-stream-post?apiKey=${e}`
              : null;
          }, [n?.synopticApiKey]),
          m = (0, a.useCallback)((e, t) => {
            s.current[e] || (s.current[e] = []), s.current[e].push(t);
          }, []),
          p = (0, a.useCallback)((e, t) => {
            s.current[e] &&
              (s.current[e] = s.current[e].filter((e) => e !== t));
          }, []),
          h = (0, a.useRef)(void 0);
        return (
          (0, a.useEffect)(() => {
            let e = n?.synopticApiKey,
              r = h.current,
              a = () => {
                let e = u();
                if (!e) return;
                t.current && t.current.close();
                let r = new WebSocket(e);
                (t.current = r),
                  (r.onopen = () => {
                    d(!0);
                  }),
                  (r.onclose = (e) => {
                    d(!1);
                  }),
                  (r.onerror = (e) => {
                    console.error("Synoptic WebSocket error:", e);
                  }),
                  (r.onmessage = (e) => {
                    try {
                      var t, r;
                      let a,
                        n,
                        o,
                        c,
                        d,
                        u = JSON.parse(e.data),
                        m =
                          ((a =
                            (r = t = u?.data).vendorMetadata &&
                            r.vendorMetadata.twitterScreenName
                              ? "Twitter"
                              : r.text?.includes("Filed file:") ||
                                r.text?.includes("CIK:") ||
                                r.text?.includes("sec.gov")
                              ? "SEC Filing"
                              : r.text?.includes("PR Newswire") ||
                                r.text?.includes("press release")
                              ? "Press Release"
                              : "General"),
                          {
                            type: "feed",
                            data: {
                              newsEventId:
                                Math.random().toString(36).substring(2, 15) +
                                Math.random().toString(36).substring(2, 15) +
                                Math.random().toString(36).substring(2, 8),
                              source: "Synoptics",
                              eventType: a,
                              message:
                                ((n = t.text),
                                "Twitter" === a
                                  ? ((n = n?.replace(/^.*@.*\n/, "")),
                                    (n = n
                                      ?.replace(/https:\/\/t\.co\/\w+/g, "")
                                      .trim()),
                                    (n = n?.replace(/\nTweet Link\n/, "")),
                                    (n = n?.replace(/\nType: Post$/, "")))
                                  : "SEC Filing" === a &&
                                    (n = n?.replace(/\n/g, " | ").trim()),
                                (n = n?.replace(/\s+/g, " ").trim())),
                              links:
                                ((o = []),
                                t.metadata &&
                                  t.metadata.sourceLink &&
                                  o.push(t.metadata.sourceLink),
                                (c = t.text?.match(/https?:\/\/[^\s]+/g)) &&
                                  c.forEach((e) => {
                                    let t = e.replace(/[,\s]*$/, "");
                                    o.includes(t) || o.push(t);
                                  }),
                                o),
                              coin: "",
                              twitterUsername:
                                (t.vendorMetadata &&
                                  t.vendorMetadata.twitterScreenName) ||
                                "",
                              twitterIcon:
                                (t.metadata &&
                                  t.metadata.icon &&
                                  t.metadata.icon.url) ||
                                "",
                              twitterName:
                                (t.vendorMetadata &&
                                  t.vendorMetadata.twitterUserName) ||
                                "",
                              timestamp: t.createdAt,
                              isImportant:
                                ((d = t.text?.toLowerCase()),
                                [
                                  "breaking",
                                  "urgent",
                                  "alert",
                                  "acquisition",
                                  "merger",
                                  "earnings",
                                  "FDA approval",
                                  "10-K",
                                  "10-Q",
                                  "8-K",
                                  "NPORT-P",
                                ].some((e) => d?.includes(e))),
                              color: ((e) => {
                                switch (e) {
                                  case "Twitter":
                                    return "#1DA1F2";
                                  case "SEC Filing":
                                    return "#FF6B35";
                                  case "Press Release":
                                    return "#28A745";
                                  default:
                                    return "#0099FF";
                                }
                              })(a),
                              imageUrl:
                                t.metadata &&
                                t.metadata.media &&
                                t.metadata.media.length > 0
                                  ? t.metadata.media[0].url
                                  : null,
                            },
                          });
                      (0, tC.checkIsMobile)(1024) || l(m), i(m);
                      let { type: p, channel: h, data: f } = u;
                      p && s.current[p]
                        ? s.current[p].forEach((e) => e(u))
                        : h && s.current[h]
                        ? s.current[h].forEach((e) => e(f))
                        : s.current.message &&
                          s.current.message.forEach((e) => e(u));
                    } catch (e) {
                      console.error(
                        "Error parsing Synoptic WebSocket message:",
                        e
                      );
                    }
                  });
              };
            e
              ? e !== r
                ? a()
                : (t.current && t.current.readyState !== WebSocket.CLOSED) ||
                  a()
              : t.current &&
                t.current.readyState === WebSocket.OPEN &&
                (t.current && (t.current.close(), (t.current = null)), d(!1)),
              (h.current = e);
            let o = () => {
                "visible" === document.visibilityState &&
                  e &&
                  (!t.current || t.current.readyState === WebSocket.CLOSED) &&
                  a();
              },
              c = () => {
                e &&
                  (!t.current || t.current.readyState === WebSocket.CLOSED) &&
                  a();
              };
            return (
              document.addEventListener("visibilitychange", o),
              window.addEventListener("focus", c),
              () => {
                document.removeEventListener("visibilitychange", o),
                  window.removeEventListener("focus", c);
              }
            );
          }, [n, u]),
          (0, r.jsx)(rg.Provider, {
            value: {
              isConnected: c,
              subscribe: (e) => {
                t.current?.readyState === WebSocket.OPEN &&
                  t.current.send(
                    JSON.stringify({ method: "subscribe", subscription: e })
                  );
              },
              unsubscribe: (e) => {
                t.current?.readyState === WebSocket.OPEN &&
                  t.current.send(
                    JSON.stringify({ method: "unsubscribe", subscription: e })
                  );
              },
              messageEvent: m,
              removeListener: p,
            },
            children: e,
          })
        );
      },
      rb = (0, a.createContext)(void 0),
      ry = [
        "#FF6B6B",
        "#4ECDC4",
        "#45B7D1",
        "#FFA07A",
        "#98D8C8",
        "#F7DC6F",
        "#BB8FCE",
        "#85C1E2",
        "#F8B739",
        "#52B788",
      ],
      rS = ({ children: e }) => {
        let t = (0, a.useRef)(null),
          { profileData: s } = (0, tr.useProfileStore)(
            (0, e$.useShallow)((e) => ({ profileData: e.profileData }))
          ),
          { setMessage: n, triggerNotification: o } = (0, tk.useMuxSocket)(),
          [i, l] = (0, a.useState)(!1),
          c = (0, a.useRef)(new Set()),
          d = (0, a.useCallback)(
            () =>
              s?.treeofalphaApiKey ? "wss://news.treeofalpha.com/ws" : null,
            [s?.treeofalphaApiKey]
          ),
          u = (0, a.useRef)(void 0);
        return (
          (0, a.useEffect)(() => {
            let e = s?.treeofalphaApiKey,
              r = u.current,
              a = () => {
                let e = d(),
                  r = s?.treeofalphaApiKey;
                if (!e || !r) return;
                t.current && t.current.close();
                let a = new WebSocket(e);
                (t.current = a),
                  (a.onopen = () => {
                    a.send(`login ${r}`), l(!0);
                  }),
                  (a.onclose = (e) => {
                    l(!1);
                  }),
                  (a.onerror = (e) => {
                    console.error("TreeOfAlpha WebSocket error:", e);
                  }),
                  (a.onmessage = (e) => {
                    try {
                      let t = JSON.parse(e.data),
                        r = (function (e) {
                          let t;
                          if (
                            e &&
                            "object" == typeof e.user &&
                            !e.title &&
                            !e.en &&
                            !e.text &&
                            !e.body
                          )
                            return null;
                          let r = e.body || "",
                            a = e.created_at ?? e.time,
                            s = a
                              ? new Date(a).toISOString()
                              : new Date().toISOString(),
                            n = String(
                              (e.id || e._id) ?? `${s}-${r.slice(0, 32)}`
                            ),
                            o = `${n}-${r}`;
                          if (c.current.has(o)) return null;
                          c.current.add(o),
                            setTimeout(() => c.current.delete(o), 36e5);
                          let i = new Set(
                            r?.match(/https?:\/\/[^\s]+/gi) || []
                          );
                          e.url && "string" == typeof e.url && i.add(e.url),
                            e.link &&
                              "string" == typeof e.link &&
                              i.add(e.link);
                          let l = Array.from(i),
                            d = Math.floor(11 % ry.length),
                            u = ry[d];
                          if (e.coin && "string" == typeof e.coin) t = e.coin;
                          else if (
                            Array.isArray(e.suggestions) &&
                            e.suggestions.length > 0
                          ) {
                            let r = e.suggestions.find(
                              (e) => "string" == typeof e?.coin && e.coin
                            );
                            r?.coin && (t = r.coin);
                          }
                          let m = "direct" === e.type,
                            p = m ? "TreeOfAlpha" : e.source || "TreeOfAlpha",
                            h = "",
                            f = "";
                          if (e?.type === "direct" && e.title) {
                            let t = e.title.match(/^(.+?)\s*\(@([^)]+)\)$/);
                            t && ((f = t[1].trim()), (h = t[2].trim()));
                          }
                          return {
                            type: "feed",
                            data: {
                              newsEventId: n,
                              source: p,
                              eventType: m ? "Twitter" : "News",
                              title: e?.type !== "direct" ? e.title : "",
                              message: r,
                              links: l,
                              imageUrl: e.image || e.imageUrl || null,
                              coin: t || "",
                              color: u,
                              timestamp: s,
                              twitterUsername: h || "",
                              twitterIcon: e.icon || "",
                              twitterName: f || "",
                              twitterId: e.info?.twitterId || "",
                              isImportant: e.requireInteraction || !1,
                              suggestions: e.suggestions || [],
                              isQuote: e.info?.isQuote || !1,
                              isReply: e.info?.isReply || !1,
                              isRetweet: e.info?.isRetweet || !1,
                            },
                          };
                        })(t);
                      if (!r) return;
                      (0, tC.checkIsMobile)(1024) || o(r), n(r);
                    } catch (e) {
                      console.error(
                        "Error parsing TreeOfAlpha WebSocket message:",
                        e
                      );
                    }
                  });
              };
            e
              ? e !== r
                ? (console.log(
                    "TreeOfAlpha WebSocket: API key changed, reconnecting"
                  ),
                  a())
                : (t.current && t.current.readyState !== WebSocket.CLOSED) ||
                  a()
              : t.current &&
                t.current.readyState === WebSocket.OPEN &&
                (console.log(
                  "TreeOfAlpha WebSocket: No API key, disconnecting"
                ),
                t.current &&
                  (console.log("TreeOfAlpha WebSocket: Disconnecting"),
                  t.current.close(),
                  (t.current = null)),
                l(!1)),
              (u.current = e);
            let i = () => {
                "visible" === document.visibilityState &&
                  e &&
                  (!t.current || t.current.readyState === WebSocket.CLOSED) &&
                  (console.log(
                    "TreeOfAlpha WebSocket: Page visible, reconnecting"
                  ),
                  a());
              },
              m = () => {
                e &&
                  (!t.current || t.current.readyState === WebSocket.CLOSED) &&
                  (console.log(
                    "TreeOfAlpha WebSocket: Window focused, reconnecting"
                  ),
                  a());
              };
            return (
              document.addEventListener("visibilitychange", i),
              window.addEventListener("focus", m),
              () => {
                document.removeEventListener("visibilitychange", i),
                  window.removeEventListener("focus", m);
              }
            );
          }, [s, d, o, n]),
          (0, r.jsx)(rb.Provider, { value: { isConnected: i }, children: e })
        );
      };
    var rw = e.i(720594);
    let rj = {
        primaryColor: "follow-primary",
        cursorType: "pointer",
        fontFamily: "Google Sans, sans-serif",
        primaryShade: { light: 6, dark: 4 },
        colors: {
          "follow-primary": [
            "#6D47FF",
            "#6D47FF",
            "#6D47FF",
            "#6D47FF",
            "#6D47FF",
            "#6D47FF",
            "#6D47FF",
            "#6D47FF",
            "#6D47FF",
            "#6D47FF",
          ],
        },
        components: {
          Popover: { defaultProps: { transitionProps: { duration: 0 } } },
          Tooltip: { defaultProps: { transitionProps: { duration: 0 } } },
          Modal: { defaultProps: { transitionProps: { duration: 0 } } },
        },
      },
      rk = ["crypto-perps", "rwa-perps", "spot", "token", "terminal"];
    e.s(
      [
        "default",
        0,
        ({ children: e }) => {
          let t = (0, a.useRef)(null),
            s = (0, eM.usePathname)(),
            { isDepositDrawerOpen: n, closeDepositDrawer: o } = (0,
            rw.useUIStore)(
              (0, e$.useShallow)((e) => ({
                isDepositDrawerOpen: e.isDepositDrawerOpen,
                closeDepositDrawer: e.closeDepositDrawer,
              }))
            );
          return (
            (0, a.useEffect)(() => {
              if (!rk.some((e) => s?.includes(e))) return;
              let e = () => {
                "hidden" === document.visibilityState
                  ? (t.current = Date.now())
                  : "visible" === document.visibilityState &&
                    t.current &&
                    Date.now() - t.current > 12e4 &&
                    window.location.reload();
              };
              document.addEventListener("visibilitychange", e);
              let r = Date.now(),
                a = setInterval(() => {
                  let e = Date.now();
                  e - r > 12e4 && window.location.reload(), (r = e);
                }, 5e3);
              return () => {
                document.removeEventListener("visibilitychange", e),
                  clearInterval(a);
              };
            }, [s]),
            (0, r.jsx)(v, {
              children: (0, r.jsxs)(F, {
                theme: rj,
                defaultColorScheme: "dark",
                children: [
                  (0, r.jsx)(eD, {}),
                  (0, r.jsx)("main", {
                    className: "min-h-screen",
                    children: (0, r.jsx)(rf.HyperliquidWsProvider, {
                      children: (0, r.jsx)(rx.MuxProvider, {
                        children: (0, r.jsx)(rh, {
                          children: (0, r.jsx)(rv, {
                            children: (0, r.jsx)(rS, {
                              children: (0, r.jsxs)(rn.default, {
                                variant: "global",
                                name: "GlobalErrorBoundary",
                                children: [
                                  e,
                                  (0, r.jsx)(tB.default, {
                                    opened: n,
                                    close: o,
                                  }),
                                ],
                              }),
                            }),
                          }),
                        }),
                      }),
                    }),
                  }),
                ],
              }),
            })
          );
        },
      ],
      888708
    );
  },
  302355,
  (e) => {
    "use strict";
    var t = e.i(247167),
      r = e.i(271645),
      a = e.i(618566);
    function s() {
      return "undefined" != typeof window;
    }
    function n() {
      return "production";
    }
    function o() {
      return "development" === ((s() ? window.vam : n()) || "production");
    }
    function i(e) {
      return RegExp(`/${e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}(?=[/?#]|$)`);
    }
    function l(e) {
      return (
        (0, r.useEffect)(() => {
          var t;
          e.beforeSend &&
            (null == (t = window.va) ||
              t.call(window, "beforeSend", e.beforeSend));
        }, [e.beforeSend]),
        (0, r.useEffect)(() => {
          !(function (e = { debug: !0 }) {
            var t;
            if (!s()) return;
            !(function (e = "auto") {
              if ("auto" === e) {
                window.vam = n();
                return;
              }
              window.vam = e;
            })(e.mode),
              window.va ||
                (window.va = function (...e) {
                  (window.vaq = window.vaq || []).push(e);
                }),
              e.beforeSend &&
                (null == (t = window.va) ||
                  t.call(window, "beforeSend", e.beforeSend));
            let r = e.scriptSrc
              ? e.scriptSrc
              : o()
              ? "https://va.vercel-scripts.com/v1/script.debug.js"
              : e.basePath
              ? `${e.basePath}/insights/script.js`
              : "/_vercel/insights/script.js";
            if (document.head.querySelector(`script[src*="${r}"]`)) return;
            let a = document.createElement("script");
            (a.src = r),
              (a.defer = !0),
              (a.dataset.sdkn =
                "@vercel/analytics" + (e.framework ? `/${e.framework}` : "")),
              (a.dataset.sdkv = "1.6.1"),
              e.disableAutoTrack && (a.dataset.disableAutoTrack = "1"),
              e.endpoint
                ? (a.dataset.endpoint = e.endpoint)
                : e.basePath && (a.dataset.endpoint = `${e.basePath}/insights`),
              e.dsn && (a.dataset.dsn = e.dsn),
              (a.onerror = () => {
                let e = o()
                  ? "Please check if any ad blockers are enabled and try again."
                  : "Be sure to enable Web Analytics for your project and deploy again. See https://vercel.com/docs/analytics/quickstart for more information.";
                console.log(
                  `[Vercel Web Analytics] Failed to load script from ${r}. ${e}`
                );
              }),
              o() && !1 === e.debug && (a.dataset.debug = "false"),
              document.head.appendChild(a);
          })({
            framework: e.framework || "react",
            basePath:
              e.basePath ??
              (function () {
                if (void 0 !== t.default && void 0 !== t.default.env)
                  return t.default.env.REACT_APP_VERCEL_OBSERVABILITY_BASEPATH;
              })(),
            ...(void 0 !== e.route && { disableAutoTrack: !0 }),
            ...e,
          });
        }, []),
        (0, r.useEffect)(() => {
          e.route &&
            e.path &&
            (function ({ route: e, path: t }) {
              var r;
              null == (r = window.va) ||
                r.call(window, "pageview", { route: e, path: t });
            })({ route: e.route, path: e.path });
        }, [e.route, e.path]),
        null
      );
    }
    function c(e) {
      let s,
        n,
        o,
        { route: c, path: d } =
          ((s = (0, a.useParams)()),
          (n = (0, a.useSearchParams)()),
          (o = (0, a.usePathname)()),
          s
            ? {
                route: (function (e, t) {
                  if (!e || !t) return e;
                  let r = e;
                  try {
                    let e = Object.entries(t);
                    for (let [t, a] of e)
                      if (!Array.isArray(a)) {
                        let e = i(a);
                        e.test(r) && (r = r.replace(e, `/[${t}]`));
                      }
                    for (let [t, a] of e)
                      if (Array.isArray(a)) {
                        let e = i(a.join("/"));
                        e.test(r) && (r = r.replace(e, `/[...${t}]`));
                      }
                    return r;
                  } catch (t) {
                    return e;
                  }
                })(
                  o,
                  Object.keys(s).length ? s : Object.fromEntries(n.entries())
                ),
                path: o,
              }
            : { route: null, path: o });
      return r.default.createElement(l, {
        path: d,
        route: c,
        ...e,
        basePath: (function () {
          if (void 0 !== t.default && void 0 !== t.default.env)
            return t.default.env.NEXT_PUBLIC_VERCEL_OBSERVABILITY_BASEPATH;
        })(),
        framework: "next",
      });
    }
    function d(e) {
      return r.default.createElement(
        r.Suspense,
        { fallback: null },
        r.default.createElement(c, { ...e })
      );
    }
    e.s(["Analytics", () => d]);
  },
  957215,
  (e) => {
    "use strict";
    var t = e.i(247167),
      r = e.i(271645),
      a = e.i(618566);
    function s() {
      return false;
    }
    function n(e) {
      return RegExp(`/${e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}(?=[/?#]|$)`);
    }
    function o(e) {
      (0, r.useEffect)(() => {
        var t;
        e.beforeSend &&
          (null == (t = window.si) ||
            t.call(window, "beforeSend", e.beforeSend));
      }, [e.beforeSend]);
      let a = (0, r.useRef)(null);
      return (
        (0, r.useEffect)(() => {
          if (a.current) e.route && a.current(e.route);
          else {
            let r = (function (e = {}) {
              var t;
              if ("undefined" == typeof window || null === e.route) return null;
              window.si ||
                (window.si = function (...e) {
                  (window.siq = window.siq || []).push(e);
                });
              let r = e.scriptSrc
                ? e.scriptSrc
                : s()
                ? "https://va.vercel-scripts.com/v1/speed-insights/script.debug.js"
                : e.dsn
                ? "https://va.vercel-scripts.com/v1/speed-insights/script.js"
                : e.basePath
                ? `${e.basePath}/speed-insights/script.js`
                : "/_vercel/speed-insights/script.js";
              if (document.head.querySelector(`script[src*="${r}"]`))
                return null;
              e.beforeSend &&
                (null == (t = window.si) ||
                  t.call(window, "beforeSend", e.beforeSend));
              let a = document.createElement("script");
              return (
                (a.src = r),
                (a.defer = !0),
                (a.dataset.sdkn =
                  "@vercel/speed-insights" +
                  (e.framework ? `/${e.framework}` : "")),
                (a.dataset.sdkv = "1.3.1"),
                e.sampleRate &&
                  (a.dataset.sampleRate = e.sampleRate.toString()),
                e.route && (a.dataset.route = e.route),
                e.endpoint
                  ? (a.dataset.endpoint = e.endpoint)
                  : e.basePath &&
                    (a.dataset.endpoint = `${e.basePath}/speed-insights/vitals`),
                e.dsn && (a.dataset.dsn = e.dsn),
                s() && !1 === e.debug && (a.dataset.debug = "false"),
                (a.onerror = () => {
                  console.log(
                    `[Vercel Speed Insights] Failed to load script from ${r}. Please check if any content blockers are enabled and try again.`
                  );
                }),
                document.head.appendChild(a),
                {
                  setRoute: (e) => {
                    a.dataset.route = e ?? void 0;
                  },
                }
              );
            })({
              framework: e.framework ?? "react",
              basePath:
                e.basePath ??
                (function () {
                  if (void 0 !== t.default && void 0 !== t.default.env)
                    return t.default.env
                      .REACT_APP_VERCEL_OBSERVABILITY_BASEPATH;
                })(),
              ...e,
            });
            r && (a.current = r.setRoute);
          }
        }, [e.route]),
        null
      );
    }
    function i(e) {
      let s = (() => {
        let e = (0, a.useParams)(),
          t = (0, a.useSearchParams)() || new URLSearchParams(),
          r = (0, a.usePathname)();
        if (!e) return null;
        let s = Object.keys(e).length ? e : Object.fromEntries(t.entries());
        if (!r || !s) return r;
        let o = r;
        try {
          let e = Object.entries(s);
          for (let [t, r] of e)
            if (!Array.isArray(r)) {
              let e = n(r);
              e.test(o) && (o = o.replace(e, `/[${t}]`));
            }
          for (let [t, r] of e)
            if (Array.isArray(r)) {
              let e = n(r.join("/"));
              e.test(o) && (o = o.replace(e, `/[...${t}]`));
            }
          return o;
        } catch (e) {
          return r;
        }
      })();
      return r.default.createElement(o, {
        route: s,
        ...e,
        framework: "next",
        basePath: (function () {
          if (void 0 !== t.default && void 0 !== t.default.env)
            return t.default.env.NEXT_PUBLIC_VERCEL_OBSERVABILITY_BASEPATH;
        })(),
      });
    }
    function l(e) {
      return r.default.createElement(
        r.Suspense,
        { fallback: null },
        r.default.createElement(i, { ...e })
      );
    }
    e.s(["SpeedInsights", () => l]);
  },
]);
