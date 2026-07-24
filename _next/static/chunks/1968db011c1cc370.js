(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  818581,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "useMergedRef", {
        enumerable: !0,
        get: function () {
          return a;
        },
      });
    let n = e.r(271645);
    function a(e, t) {
      let r = (0, n.useRef)(null),
        a = (0, n.useRef)(null);
      return (0, n.useCallback)(
        (n) => {
          if (null === n) {
            let e = r.current;
            e && ((r.current = null), e());
            let t = a.current;
            t && ((a.current = null), t());
          } else e && (r.current = s(e, n)), t && (a.current = s(t, n));
        },
        [e, t]
      );
    }
    function s(e, t) {
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
  768834,
  (e) => {
    "use strict";
    var t = e.i(271645);
    let r = (e) => {
        let t,
          r = new Set(),
          n = (e, n) => {
            let a = "function" == typeof e ? e(t) : e;
            if (!Object.is(a, t)) {
              let e = t;
              (t = (null != n ? n : "object" != typeof a || null === a)
                ? a
                : Object.assign({}, t, a)),
                r.forEach((r) => r(t, e));
            }
          },
          a = () => t,
          s = {
            setState: n,
            getState: a,
            getInitialState: () => o,
            subscribe: (e) => (r.add(e), () => r.delete(e)),
          },
          o = (t = e(n, a, s));
        return s;
      },
      n = (e) => {
        let n = e ? r(e) : r,
          a = (e) =>
            (function (e, r = (e) => e) {
              let n = t.default.useSyncExternalStore(
                e.subscribe,
                t.default.useCallback(() => r(e.getState()), [e, r]),
                t.default.useCallback(() => r(e.getInitialState()), [e, r])
              );
              return t.default.useDebugValue(n), n;
            })(n, e);
        return Object.assign(a, n), a;
      },
      a = (e) => (e ? n(e) : n);
    e.s(["create", () => a], 768834);
  },
  579473,
  (e) => {
    "use strict";
    function t(e, t) {
      let r;
      try {
        r = e();
      } catch (e) {
        return;
      }
      return {
        getItem: (e) => {
          var n;
          let a = (e) =>
              null === e ? null : JSON.parse(e, null == t ? void 0 : t.reviver),
            s = null != (n = r.getItem(e)) ? n : null;
          return s instanceof Promise ? s.then(a) : a(s);
        },
        setItem: (e, n) =>
          r.setItem(e, JSON.stringify(n, null == t ? void 0 : t.replacer)),
        removeItem: (e) => r.removeItem(e),
      };
    }
    let r = (e) => (t) => {
        try {
          let n = e(t);
          if (n instanceof Promise) return n;
          return {
            then: (e) => r(e)(n),
            catch(e) {
              return this;
            },
          };
        } catch (e) {
          return {
            then(e) {
              return this;
            },
            catch: (t) => r(t)(e),
          };
        }
      },
      n = (e, n) => (a, s, o) => {
        let l,
          i = {
            storage: t(() => localStorage),
            partialize: (e) => e,
            version: 0,
            merge: (e, t) => ({ ...t, ...e }),
            ...n,
          },
          c = !1,
          u = new Set(),
          d = new Set(),
          f = i.storage;
        if (!f)
          return e(
            (...e) => {
              console.warn(
                `[zustand persist middleware] Unable to update item '${i.name}', the given storage is currently unavailable.`
              ),
                a(...e);
            },
            s,
            o
          );
        let p = () => {
            let e = i.partialize({ ...s() });
            return f.setItem(i.name, { state: e, version: i.version });
          },
          g = o.setState;
        o.setState = (e, t) => (g(e, t), p());
        let h = e((...e) => (a(...e), p()), s, o);
        o.getInitialState = () => h;
        let y = () => {
          var e, t;
          if (!f) return;
          (c = !1),
            u.forEach((e) => {
              var t;
              return e(null != (t = s()) ? t : h);
            });
          let n =
            (null == (t = i.onRehydrateStorage)
              ? void 0
              : t.call(i, null != (e = s()) ? e : h)) || void 0;
          return r(f.getItem.bind(f))(i.name)
            .then((e) => {
              if (e)
                if ("number" != typeof e.version || e.version === i.version)
                  return [!1, e.state];
                else {
                  if (i.migrate) {
                    let t = i.migrate(e.state, e.version);
                    return t instanceof Promise
                      ? t.then((e) => [!0, e])
                      : [!0, t];
                  }
                  console.error(
                    "State loaded from storage couldn't be migrated since no migrate function was provided"
                  );
                }
              return [!1, void 0];
            })
            .then((e) => {
              var t;
              let [r, n] = e;
              if ((a((l = i.merge(n, null != (t = s()) ? t : h)), !0), r))
                return p();
            })
            .then(() => {
              null == n || n(l, void 0),
                (l = s()),
                (c = !0),
                d.forEach((e) => e(l));
            })
            .catch((e) => {
              null == n || n(void 0, e);
            });
        };
        return (
          (o.persist = {
            setOptions: (e) => {
              (i = { ...i, ...e }), e.storage && (f = e.storage);
            },
            clearStorage: () => {
              null == f || f.removeItem(i.name);
            },
            getOptions: () => i,
            rehydrate: () => y(),
            hasHydrated: () => c,
            onHydrate: (e) => (
              u.add(e),
              () => {
                u.delete(e);
              }
            ),
            onFinishHydration: (e) => (
              d.add(e),
              () => {
                d.delete(e);
              }
            ),
          }),
          i.skipHydration || y(),
          l || h
        );
      };
    e.s(["createJSONStorage", () => t, "persist", () => n]);
  },
  890357,
  (e) => {
    "use strict";
    var t = e.i(768834),
      r = e.i(579473);
    let n = (0, t.create)()(
        (0, r.persist)(
          (e) => ({
            categoryList: [],
            trendingCategoryList: [],
            setCategories: (t) => e(() => ({ categoryList: t })),
            setTrendingCategories: (t) =>
              e(() => ({ trendingCategoryList: t })),
          }),
          { name: "category-storage", skipHydration: !0 }
        )
      ),
      a = (0, t.create)()(
        (0, r.persist)(
          (e) => ({
            usdcBalance: 0,
            allUsdcBalance: [],
            stockBalance: 0,
            cryptoPerpsBalance: 0,
            myCryptoTokens: [],
            holdingsData: { totalInvested: 0, totalGains: 0, gainInPercent: 0 },
            setUsdcBalance: (t) => e(() => ({ usdcBalance: t })),
            setStockBalance: (t) => e(() => ({ stockBalance: t })),
            setCryptoPerpsBalance: (t) => e(() => ({ cryptoPerpsBalance: t })),
            setAllUsdcBalances: (t) => e(() => ({ allUsdcBalance: t })),
            setMyCryptoTokens: (t) => e(() => ({ myCryptoTokens: t })),
            setHoldingsData: (t) => e(() => ({ holdingsData: t })),
            resetStore: () =>
              e(() => ({
                usdcBalance: 0,
                allUsdcBalance: [],
                stockBalance: 0,
                cryptoPerpsBalance: 0,
                myCryptoTokens: [],
                holdingsData: {
                  totalInvested: 0,
                  totalGains: 0,
                  gainInPercent: 0,
                },
              })),
          }),
          { name: "balance-storage", skipHydration: !0 }
        )
      ),
      s = (0, t.create)()(
        (0, r.persist)(
          (e) => ({
            profileData: {},
            holdings: {},
            stockHoldings: {},
            trackersOrder: [],
            showTickers: !1,
            country: "",
            selectedDiscussionAsset: "",
            favTickers: [],
            newsTrackerSettings: {
              enableBlogs: !0,
              enableTwitter: !0,
              enableSound: !0,
              enableNotifications: !0,
            },
            completedOnchainTrades: [],
            openOrdersAltcoins: [],
            limitPrice: "",
            selectedOrderType: "market",
            onChainTableCurrentTab: "positions",
            onchainHoldersData: [],
            setCompletedOnchainTrades: (t) =>
              e(() => ({ completedOnchainTrades: t })),
            setOpenOrdersAltcoins: (t) => e(() => ({ openOrdersAltcoins: t })),
            setLimitPrice: (t) => e(() => ({ limitPrice: t })),
            setSelectedOrderType: (t) => e(() => ({ selectedOrderType: t })),
            setOnChainTableCurrentTab: (t) =>
              e(() => ({ onChainTableCurrentTab: t })),
            setOnchainHoldersData: (t) => e(() => ({ onchainHoldersData: t })),
            setSelectedDiscussionAsset: (t) =>
              e(() => ({ selectedDiscussionAsset: t })),
            setCountry: (t) => e(() => ({ country: t })),
            setShowTickers: (t) => e(() => ({ showTickers: t })),
            setTrackersOrder: (t) => e(() => ({ trackersOrder: t })),
            setProfileData: (t) => e(() => ({ profileData: t })),
            setHoldings: (t) => e(() => ({ holdings: t })),
            setStockHoldings: (t) => e(() => ({ stockHoldings: t })),
            setFavTickers: (t) => e(() => ({ favTickers: t })),
            setNewsTrackerSettings: (t) =>
              e(() => ({ newsTrackerSettings: t })),
            resetStore: () =>
              e(() => ({ profileData: {}, holdings: {}, stockHoldings: {} })),
          }),
          { name: "profile-storage", skipHydration: !0 }
        )
      ),
      o = (0, t.create)()(
        (0, r.persist)(
          (e) => ({
            exchangeRates: {},
            selectedCurrency: "usd",
            setCurrentCurrency: (t) => e(() => ({ selectedCurrency: t })),
            setExchangeRates: (t) => e(() => ({ exchangeRates: t })),
          }),
          { name: "exchange-storage", skipHydration: !0 }
        )
      );
    e.s([
      "useBalanceStore",
      0,
      a,
      "useCategoryStore",
      0,
      n,
      "useExchangeStore",
      0,
      o,
      "useProfileStore",
      0,
      s,
    ]);
  },
  524795,
  (e) => {
    "use strict";
    var t = e.i(662537),
      r = e.i(890357);
    e.s([
      "captureErrorToSentry",
      0,
      (e, n) => {
        let a = r.useProfileStore.getState()?.profileData,
          s = a?.email || "Not logged label";
        t.setUser({ email: s });
        let o = {
          tags: {
            location: n,
            user_status: a?.email ? "logged_in" : "not_logged_in",
          },
          extra: { occuredIn: n, userEmail: s },
        };
        if (e instanceof Error) t.captureException(e, o);
        else {
          let r = "string" == typeof e ? e : JSON.stringify(e);
          t.captureMessage(`Error in ${n}: ${r}`, { ...o, level: "error" });
        }
      },
    ]);
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
        return m;
      },
      useLinkStatus: function () {
        return b;
      },
    };
    for (var a in n) Object.defineProperty(r, a, { enumerable: !0, get: n[a] });
    let s = e.r(151836),
      o = e.r(843476),
      l = s._(e.r(271645)),
      i = e.r(195057),
      c = e.r(8372),
      u = e.r(818581),
      d = e.r(718967),
      f = e.r(405550);
    e.r(233525);
    let p = e.r(91949),
      g = e.r(573668),
      h = e.r(509396);
    function y(e) {
      return "string" == typeof e ? e : (0, i.formatUrl)(e);
    }
    function m(t) {
      var r;
      let n,
        a,
        s,
        [i, m] = (0, l.useOptimistic)(p.IDLE_LINK_STATUS),
        b = (0, l.useRef)(null),
        {
          href: S,
          as: T,
          children: k,
          prefetch: C = null,
          passHref: O,
          replace: P,
          shallow: x,
          scroll: j,
          onClick: E,
          onMouseEnter: _,
          onTouchStart: I,
          legacyBehavior: w = !1,
          onNavigate: B,
          ref: D,
          unstable_dynamicOnHover: R,
          ...N
        } = t;
      (n = k),
        w &&
          ("string" == typeof n || "number" == typeof n) &&
          (n = (0, o.jsx)("a", { children: n }));
      let H = l.default.useContext(c.AppRouterContext),
        L = !1 !== C,
        M =
          !1 !== C
            ? null === (r = C) || "auto" === r
              ? h.FetchStrategy.PPR
              : h.FetchStrategy.Full
            : h.FetchStrategy.PPR,
        { href: A, as: U } = l.default.useMemo(() => {
          let e = y(S);
          return { href: e, as: T ? y(T) : e };
        }, [S, T]);
      if (w) {
        if (n?.$$typeof === Symbol.for("react.lazy"))
          throw Object.defineProperty(
            Error(
              "`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."
            ),
            "__NEXT_ERROR_CODE",
            { value: "E863", enumerable: !1, configurable: !0 }
          );
        a = l.default.Children.only(n);
      }
      let K = w ? a && "object" == typeof a && a.ref : D,
        F = l.default.useCallback(
          (e) => (
            null !== H &&
              (b.current = (0, p.mountLinkInstance)(e, A, H, M, L, m)),
            () => {
              b.current &&
                ((0, p.unmountLinkForCurrentNavigation)(b.current),
                (b.current = null)),
                (0, p.unmountPrefetchableInstance)(e);
            }
          ),
          [L, A, H, M, m]
        ),
        z = {
          ref: (0, u.useMergedRef)(F, K),
          onClick(t) {
            w || "function" != typeof E || E(t),
              w &&
                a.props &&
                "function" == typeof a.props.onClick &&
                a.props.onClick(t),
              !H ||
                t.defaultPrevented ||
                (function (t, r, n, a, s, o, i) {
                  if ("undefined" != typeof window) {
                    let c,
                      { nodeName: u } = t.currentTarget;
                    if (
                      ("A" === u.toUpperCase() &&
                        (((c = t.currentTarget.getAttribute("target")) &&
                          "_self" !== c) ||
                          t.metaKey ||
                          t.ctrlKey ||
                          t.shiftKey ||
                          t.altKey ||
                          (t.nativeEvent && 2 === t.nativeEvent.which))) ||
                      t.currentTarget.hasAttribute("download")
                    )
                      return;
                    if (!(0, g.isLocalURL)(r)) {
                      s && (t.preventDefault(), location.replace(r));
                      return;
                    }
                    if ((t.preventDefault(), i)) {
                      let e = !1;
                      if (
                        (i({
                          preventDefault: () => {
                            e = !0;
                          },
                        }),
                        e)
                      )
                        return;
                    }
                    let { dispatchNavigateAction: d } = e.r(699781);
                    l.default.startTransition(() => {
                      d(n || r, s ? "replace" : "push", o ?? !0, a.current);
                    });
                  }
                })(t, A, U, b, P, j, B);
          },
          onMouseEnter(e) {
            w || "function" != typeof _ || _(e),
              w &&
                a.props &&
                "function" == typeof a.props.onMouseEnter &&
                a.props.onMouseEnter(e),
              H && L && (0, p.onNavigationIntent)(e.currentTarget, !0 === R);
          },
          onTouchStart: function (e) {
            w || "function" != typeof I || I(e),
              w &&
                a.props &&
                "function" == typeof a.props.onTouchStart &&
                a.props.onTouchStart(e),
              H && L && (0, p.onNavigationIntent)(e.currentTarget, !0 === R);
          },
        };
      return (
        (0, d.isAbsoluteUrl)(U)
          ? (z.href = U)
          : (w && !O && ("a" !== a.type || "href" in a.props)) ||
            (z.href = (0, f.addBasePath)(U)),
        (s = w
          ? l.default.cloneElement(a, z)
          : (0, o.jsx)("a", { ...N, ...z, children: n })),
        (0, o.jsx)(v.Provider, { value: i, children: s })
      );
    }
    e.r(284508);
    let v = (0, l.createContext)(p.IDLE_LINK_STATUS),
      b = () => (0, l.useContext)(v);
    ("function" == typeof r.default ||
      ("object" == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, "__esModule", { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  563491,
  (e) => {
    "use strict";
    var t = e.i(843476),
      r = e.i(524795),
      n = e.i(522016),
      a = e.i(271645);
    function s({ error: e }) {
      return (
        (0, a.useEffect)(() => {
          (0, r.captureErrorToSentry)(e, "GlobalError");
        }, [e]),
        (0, t.jsx)("html", {
          children: (0, t.jsx)("body", {
            children: (0, t.jsxs)("div", {
              className:
                "flex flex-col h-screen w-screen items-center justify-center gap-4",
              children: [
                (0, t.jsx)("div", {
                  className: "text-2xl font-bold",
                  children: "Something went wrong",
                }),
                (0, t.jsx)("div", {
                  className: "text-sm text-gray-500",
                  children:
                    "Please try again later or contact support if the problem persists.",
                }),
                (0, t.jsx)("div", {
                  className: "text-sm text-gray-500",
                  children: (0, t.jsx)(n.default, {
                    href: "/",
                    className: "text-blue-500",
                    children: "Go to home",
                  }),
                }),
              ],
            }),
          }),
        })
      );
    }
    e.s(["default", () => s]);
  },
]);
