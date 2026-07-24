(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  720594,
  (e) => {
    "use strict";
    let t = (0, e.i(768834).create)((e) => ({
      isDepositDrawerOpen: !1,
      openDepositDrawer: () => e({ isDepositDrawerOpen: !0 }),
      closeDepositDrawer: () => e({ isDepositDrawerOpen: !1 }),
      isTwitterModalOpen: !1,
      openTwitterModal: () => e({ isTwitterModalOpen: !0 }),
      closeTwitterModal: () => e({ isTwitterModalOpen: !1 }),
    }));
    e.s(["useUIStore", 0, t]);
  },
  357772,
  (e) => {
    "use strict";
    let t = (0, e.i(33550).default)("outline", "x", "X", [
      ["path", { d: "M18 6l-12 12", key: "svg-0" }],
      ["path", { d: "M6 6l12 12", key: "svg-1" }],
    ]);
    e.s(["IconX", () => t], 357772);
  },
  802315,
  (e) => {
    "use strict";
    let t = (0, e.i(33550).default)("outline", "chevron-down", "ChevronDown", [
      ["path", { d: "M6 9l6 6l6 -6", key: "svg-0" }],
    ]);
    e.s(["IconChevronDown", () => t], 802315);
  },
  700653,
  (e) => {
    "use strict";
    var t = e.i(843476);
    e.i(271645);
    var s = e.i(424848),
      a = e.i(143798);
    e.i(207670);
    var r = e.i(515259),
      i = e.i(789549),
      o = e.i(314037),
      n = e.i(644662),
      l = e.i(321879),
      d = { root: "m_3eebeb36", label: "m_9e365f20" };
    let c = { orientation: "horizontal" },
      u = (0, a.createVarsResolver)((e, { color: t, variant: a, size: i }) => ({
        root: {
          "--divider-color": t ? (0, r.getThemeColor)(t, e) : void 0,
          "--divider-border-style": a,
          "--divider-size": (0, s.getSize)(i, "divider-size"),
        },
      })),
      p = (0, l.factory)((e, s) => {
        let a = (0, i.useProps)("Divider", c, e),
          {
            classNames: r,
            className: l,
            style: p,
            styles: m,
            unstyled: g,
            vars: f,
            color: h,
            orientation: S,
            label: y,
            labelPosition: P,
            mod: O,
            attributes: A,
            ...T
          } = a,
          w = (0, o.useStyles)({
            name: "Divider",
            classes: d,
            props: a,
            className: l,
            style: p,
            classNames: r,
            styles: m,
            unstyled: g,
            attributes: A,
            vars: f,
            varsResolver: u,
          });
        return (0, t.jsx)(n.Box, {
          ref: s,
          mod: [{ orientation: S, "with-label": !!y }, O],
          ...w("root"),
          ...T,
          role: "separator",
          children:
            y &&
            (0, t.jsx)(n.Box, {
              component: "span",
              mod: { position: P },
              ...w("label"),
              children: y,
            }),
        });
      });
    (p.classes = d),
      (p.displayName = "@mantine/core/Divider"),
      e.s(["Divider", () => p], 700653);
  },
  594805,
  (e) => {
    "use strict";
    function t(e, t) {
      return (s) => {
        if ("string" != typeof s || 0 === s.trim().length) throw Error(t);
        return `${e}-${s}`;
      };
    }
    e.s(["getSafeId", () => t]);
  },
  236983,
  538463,
  (e) => {
    "use strict";
    function t(e) {
      let t = { formatters: void 0, fees: void 0, serializers: void 0, ...e };
      return Object.assign(t, {
        extend: (function e(t) {
          return (s) => {
            let a = "function" == typeof s ? s(t) : s,
              r = { ...t, ...a };
            return Object.assign(r, { extend: e(r) });
          };
        })(t),
      });
    }
    e.s(["defineChain", () => t], 538463);
    let s = t({
      id: 42161,
      name: "Arbitrum One",
      nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
      blockTime: 250,
      rpcUrls: { default: { http: ["https://arb1.arbitrum.io/rpc"] } },
      blockExplorers: {
        default: {
          name: "Arbiscan",
          url: "https://arbiscan.io",
          apiUrl: "https://api.arbiscan.io/api",
        },
      },
      contracts: {
        multicall3: {
          address: "0xca11bde05977b3631167028862be2a173976ca11",
          blockCreated: 7654707,
        },
      },
    });
    e.s(["arbitrum", 0, s], 236983);
  },
  455457,
  (e) => {
    "use strict";
    let t = {
      src: e.i(230241).default,
      width: 40,
      height: 40,
      blurWidth: 0,
      blurHeight: 0,
    };
    e.s(["default", 0, t]);
  },
  626603,
  (e) => {
    "use strict";
    let t = {
      src: e.i(313158).default,
      width: 40,
      height: 40,
      blurWidth: 0,
      blurHeight: 0,
    };
    e.s(["default", 0, t]);
  },
  782839,
  (e) => {
    "use strict";
    let t = {
      src: e.i(701339).default,
      width: 40,
      height: 40,
      blurWidth: 0,
      blurHeight: 0,
    };
    e.s(["default", 0, t]);
  },
  725780,
  (e) => {
    "use strict";
    let t = {
      src: e.i(571244).default,
      width: 40,
      height: 40,
      blurWidth: 0,
      blurHeight: 0,
    };
    e.s(["default", 0, t]);
  },
  856499,
  (e) => {
    "use strict";
    let t = {
      src: e.i(849682).default,
      width: 40,
      height: 40,
      blurWidth: 0,
      blurHeight: 0,
    };
    e.s(["default", 0, t]);
  },
  674528,
  (e) => {
    "use strict";
    let t = {
      src: e.i(630455).default,
      width: 40,
      height: 40,
      blurWidth: 0,
      blurHeight: 0,
    };
    e.s(["default", 0, t]);
  },
  109078,
  265760,
  (e) => {
    "use strict";
    let t = {
      src: e.i(572176).default,
      width: 256,
      height: 256,
      blurWidth: 0,
      blurHeight: 0,
    };
    e.s(["default", 0, t], 109078);
    let s = {
      src: e.i(990282).default,
      width: 40,
      height: 40,
      blurWidth: 0,
      blurHeight: 0,
    };
    e.s(["default", 0, s], 265760);
  },
  553917,
  879515,
  (e) => {
    "use strict";
    var t = e.i(636202),
      s = e.i(271645);
    function a(e) {
      let t = e,
        s = !1,
        a = new Set();
      return {
        getState: () => t,
        updateState(e) {
          t = "function" == typeof e ? e(t) : e;
        },
        setState(e) {
          this.updateState(e), a.forEach((e) => e(t));
        },
        initialize(e) {
          s || ((t = e), (s = !0));
        },
        subscribe: (e) => (a.add(e), () => a.delete(e)),
      };
    }
    function r(e) {
      return (0, s.useSyncExternalStore)(
        e.subscribe,
        () => e.getState(),
        () => e.getState()
      );
    }
    e.s(["createStore", () => a, "useStore", () => r], 879515);
    let i = a({
        notifications: [],
        queue: [],
        defaultPosition: "bottom-right",
        limit: 5,
      }),
      o = (e = i) => r(e);
    function n(e, t) {
      let s = e.getState(),
        a = (function (e, t, s) {
          let a = [],
            r = [],
            i = {};
          for (let o of e) {
            let e = o.position || t;
            (i[e] = i[e] || 0), (i[e] += 1), i[e] <= s ? r.push(o) : a.push(o);
          }
          return { notifications: r, queue: a };
        })(t([...s.notifications, ...s.queue]), s.defaultPosition, s.limit);
      e.setState({
        notifications: a.notifications,
        queue: a.queue,
        limit: s.limit,
        defaultPosition: s.defaultPosition,
      });
    }
    function l(e, t = i) {
      return (
        n(t, (t) => t.filter((t) => t.id !== e || (t.onClose?.(t), !1))), e
      );
    }
    let d = {
      show: function (e, s = i) {
        let a = e.id || (0, t.randomId)();
        return (
          n(s, (t) =>
            e.id && t.some((t) => t.id === e.id) ? t : [...t, { ...e, id: a }]
          ),
          a
        );
      },
      hide: l,
      update: function (e, t = i) {
        return (
          n(t, (t) => t.map((t) => (t.id === e.id ? { ...t, ...e } : t))), e.id
        );
      },
      clean: function (e = i) {
        n(e, () => []);
      },
      cleanQueue: function (e = i) {
        n(e, (t) => t.slice(0, e.getState().limit));
      },
      updateState: n,
    };
    e.s(
      [
        "hideNotification",
        () => l,
        "notifications",
        () => d,
        "notificationsStore",
        () => i,
        "useNotifications",
        () => o,
      ],
      553917
    );
  },
  511552,
  (e) => {
    e.v({
      closeButton: "Notifications-module__bKUq5q__closeButton",
      description: "Notifications-module__bKUq5q__description",
      icon: "Notifications-module__bKUq5q__icon",
      "mantine-Notification-loader":
        "Notifications-module__bKUq5q__mantine-Notification-loader",
      root: "Notifications-module__bKUq5q__root",
      title: "Notifications-module__bKUq5q__title",
    });
  },
  744125,
  (e) => {
    "use strict";
    var t = e.i(553917),
      s = e.i(511552);
    e.s([
      "notifyErrorToast",
      0,
      ({ message: e, icon: a = null }) => {
        t.notifications.clean(),
          t.notifications.show({
            message: e,
            color: "#F23645",
            classNames: s.default,
            position: "top-center",
            withCloseButton: !0,
            loading: !1,
            icon: a,
            styles: (e, t, s) => ({ root: { height: "auto" } }),
          });
      },
      "notifyLoadingToast",
      0,
      ({ message: e }) =>
        t.notifications.show({
          message: e,
          color: "#00AC66",
          position: "top-center",
          autoClose: !1,
          withCloseButton: !1,
          top: 40,
          loading: !0,
          loaderProps: { size: "xs", color: "white" },
          styles: (e, t, s) => ({
            root: {
              border: "1px solid #2D313C",
              display: "flex",
              justifyContent: "center",
            },
          }),
        }),
      "notifyNewsToast",
      0,
      ({ message: e, action: s }) =>
        t.notifications.show({
          message: e,
          position: "top-center",
          autoClose: 5e3,
          color: "transparent",
          withCloseButton: !0,
          onClick: (e) => {
            e.target.closest("button") || s();
          },
          top: 40,
          styles: (e, t, s) => ({
            root: {
              cursor: "pointer",
              padding: "4px 4px",
              border: "1px solid #2862FF",
              background: "#2862FF",
              borderRadius: "4px",
            },
          }),
        }),
      "notifySuccessToast",
      0,
      ({ message: e, id: a = "", icon: r, autoClose: i = 2e3 }) =>
        a
          ? t.notifications.update({
              id: a,
              message: e,
              color: "#00AC66",
              position: "top-center",
              autoClose: i,
              classNames: s.default,
              withCloseButton: !0,
              loading: !1,
              icon: r,
            })
          : t.notifications.show({
              message: e,
              color: "#00AC66",
              position: "top-center",
              autoClose: i,
              classNames: s.default,
              withCloseButton: !0,
              loading: !1,
              icon: r,
            }),
      "notifyUpdateToast",
      0,
      ({ message: e, id: s }) =>
        t.notifications.update({
          id: s,
          message: e,
          color: "#00AC66",
          position: "top-center",
          autoClose: !1,
          withCloseButton: !1,
          top: 40,
          loading: !0,
          loaderProps: { size: "xs", color: "white" },
          styles: (e, t, s) => ({ root: { border: "1px solid #2D313C" } }),
        }),
    ]);
  },
  462815,
  946396,
  (e) => {
    "use strict";
    var t = e.i(581949),
      s = e.i(211441);
    e.s(["getAccessToken", () => s.X], 946396);
    var s = s,
      a = e.i(744125);
    let r = t.default.create({ baseURL: "https://api.gtr.trade/v1" });
    r.interceptors.request.use(
      async (e) => {
        let t = await (0, s.X)();
        return (
          t && (e.headers.Authorization = `Bearer ${t}`),
          localStorage.getItem("token") &&
            (e.headers["x-access-token"] = localStorage.getItem("token")),
          e
        );
      },
      (e) => Promise.reject(e)
    ),
      r.interceptors.response.use(
        (e) => e,
        (e) => {
          let { response: s } = e;
          if (!s)
            return (
              t.default.isCancel(e) ||
                (console.error("Error message:", e.message),
                console.error("An error occurred:", "Network Error")),
              Promise.reject(e)
            );
          if (400 === s.status)
            return (
              s.data.message &&
                "/users/verify-stock-invite-code" !== s.config.url &&
                !s.config.headers["x-skip-error-toast"] &&
                (0, a.notifyErrorToast)({ message: s.data.message }),
              s
            );
          if (401 === s.status) {
            let e = window.location?.pathname;
            e?.includes("leaderboard") ||
              e?.includes("affiliate") ||
              (window.location.href = "/");
          }
          if (
            (403 === s.status &&
              console.log("response.data.message", s.data.message),
            404 === s.status || 500 === s.status)
          )
            return (
              s.config.headers["x-skip-error-toast"] ||
                (0, a.notifyErrorToast)({
                  message:
                    s?.data?.message?.message ||
                    s?.data?.data?.message ||
                    "Something went wrong",
                }),
              s
            );
        }
      ),
      e.s(["default", 0, r], 462815);
  },
  336005,
  (e) => {
    "use strict";
    e.i(581949);
    var t = e.i(462815);
    let s = async (e) =>
        (
          await t.default.get(
            e ? `/users/invested-graph?username=${e}` : "/users/invested-graph"
          )
        ).data,
      a = async (e) =>
        (
          await t.default.get(
            e ? `/users/holdings?username=${e}` : "/users/holdings"
          )
        ).data,
      r = async () =>
        (
          await t.default.get("/users/profile", {
            headers: { "x-country-code": "DEFAULT" },
          })
        ).data,
      i = async (e, s) =>
        await t.default.post("/tokens/confirm-transaction", e, s),
      o = async (e, s) =>
        await t.default.post("/tokens/send-category-transactions", e, s),
      n = async (e) => await t.default.post("/tokens/swap-category", e),
      l = async ({ orderId: e }) =>
        (await t.default.post("/tokens/limit-order/cancel", { orderId: e }))
          .data,
      d = async ({ status: e }) =>
        (await t.default.get("/tokens/limit-orders", { params: { status: e } }))
          .data,
      c = async ({ tokenAddress: e, page: s, userName: a }) =>
        (
          await t.default.get(
            a
              ? `/users/token-transactions?page=${s}&username=${a}`
              : e
              ? `/users/token-transactions?tokenAddress=${e}&page=${s}`
              : `/users/token-transactions?page=${s}`
          )
        ).data,
      u = async () => (await t.default.get("/users/referral-details")).data,
      p = async ({ referralCode: e }) =>
        (await t.default.post("/users/add-referral", { referralCode: e })).data,
      m = async () =>
        (await t.default.post("/users/claim-referral-reward", {})).data,
      g = async (e) =>
        (
          await t.default.get(
            e
              ? `/users/balance/all-usdc?username=${e}`
              : "/users/balance/all-usdc"
          )
        ).data,
      f = async ({ walletAddress: e, walletName: s, emoji: a, id: r = null }) =>
        (
          await t.default.post("/users/wallet-trackers", {
            id: r,
            name: s,
            walletAddress: e,
            type: "perps",
            emoji: a,
            notify: !1,
          })
        ).data,
      h = async () => (await t.default.get("/users/wallet-trackers")).data,
      S = async ({ id: e }) =>
        (await t.default.post("/users/wallet-trackers/delete", { id: e })).data,
      y = async () => (await t.default.get("/users/perps-presets")).data,
      P = async ({ presets: e }) =>
        (await t.default.post("/users/perps-presets", e)).data,
      O = async ({ synopticApiKey: e }) =>
        (await t.default.post("/users/add-synoptic-key", { synopticApiKey: e }))
          .data,
      A = async ({ treeofalphaApiKey: e }) =>
        (
          await t.default.post("/users/add-treeofalpha-key", {
            treeofalphaApiKey: e,
          })
        ).data,
      T = async ({ currentPage: e = 1, fetchQuery: s = "points" }) =>
        (await t.default.get(`/users/leaderboard/${s}?page=${e}`)).data,
      w = async () =>
        (await t.default.get("/users/referral-rebates-details")).data,
      x = async ({ section: e, type: s }) =>
        (
          await t.default.post("/users/claim-referral-rebates", {
            section: e,
            type: s,
          })
        ).data,
      k = async ({
        username: e,
        profileImage: s,
        displayName: a,
        bio: r,
        telegramLink: i,
      }) =>
        (
          await t.default.post("/users/edit-profile", {
            username: e,
            profileImage: s,
            displayName: a,
            bio: r,
            telegramLink: i,
          })
        ).data;
    e.s([
      "addReferral",
      0,
      p,
      "addSynopticApiKey",
      0,
      O,
      "addTreeOfAlphaApiKey",
      0,
      A,
      "addWalletTracker",
      0,
      f,
      "cancelOnchainOpenOrder",
      0,
      l,
      "claimReferral",
      0,
      m,
      "claimReferralRebates",
      0,
      x,
      "deleteWalletFromTracker",
      0,
      S,
      "getAllUsdcBalances",
      0,
      g,
      "getCategorySwapTransaction",
      0,
      n,
      "getHoldings",
      0,
      a,
      "getInvestedGraph",
      0,
      s,
      "getLeaderboardPoints",
      0,
      T,
      "getOnchainLimitOrders",
      0,
      d,
      "getPresets",
      0,
      y,
      "getProfileInfo",
      0,
      r,
      "getReferralDetails",
      0,
      u,
      "getReferralRebatesDetails",
      0,
      w,
      "getSwapTransaction",
      0,
      (e) => t.default.post("/tokens/swap", e),
      "getTokenOrderHistory",
      0,
      c,
      "getWalletTrackers",
      0,
      h,
      "postSignedCategoryTransaction",
      0,
      o,
      "postSignedTransaction",
      0,
      i,
      "updatePresets",
      0,
      P,
      "updateUserDetails",
      0,
      k,
    ]);
  },
  128410,
  295082,
  (e) => {
    "use strict";
    function t(e, t) {
      let s = e;
      for (; (s = s.parentElement) && !s.matches(t); );
      return s;
    }
    function s({
      parentSelector: e,
      siblingSelector: s,
      onKeyDown: a,
      loop: r = !0,
      activateOnFocus: i = !1,
      dir: o = "rtl",
      orientation: n,
    }) {
      return (l) => {
        a?.(l);
        let d = Array.from(
            t(l.currentTarget, e)?.querySelectorAll(s) || []
          ).filter((s) => {
            var a;
            return (a = l.currentTarget), t(a, e) === t(s, e);
          }),
          c = d.findIndex((e) => l.currentTarget === e),
          u = (function (e, t, s) {
            for (let s = e + 1; s < t.length; s += 1)
              if (!t[s].disabled) return s;
            if (s) {
              for (let e = 0; e < t.length; e += 1)
                if (!t[e].disabled) return e;
            }
            return e;
          })(c, d, r),
          p = (function (e, t, s) {
            for (let s = e - 1; s >= 0; s -= 1) if (!t[s].disabled) return s;
            if (s) {
              for (let e = t.length - 1; e > -1; e -= 1)
                if (!t[e].disabled) return e;
            }
            return e;
          })(c, d, r),
          m = "rtl" === o ? p : u,
          g = "rtl" === o ? u : p;
        switch (l.key) {
          case "ArrowRight":
            "horizontal" === n &&
              (l.stopPropagation(),
              l.preventDefault(),
              d[m].focus(),
              i && d[m].click());
            break;
          case "ArrowLeft":
            "horizontal" === n &&
              (l.stopPropagation(),
              l.preventDefault(),
              d[g].focus(),
              i && d[g].click());
            break;
          case "ArrowUp":
            "vertical" === n &&
              (l.stopPropagation(),
              l.preventDefault(),
              d[p].focus(),
              i && d[p].click());
            break;
          case "ArrowDown":
            "vertical" === n &&
              (l.stopPropagation(),
              l.preventDefault(),
              d[u].focus(),
              i && d[u].click());
            break;
          case "Home":
            l.stopPropagation(),
              l.preventDefault(),
              d[0].disabled || d[0].focus();
            break;
          case "End": {
            l.stopPropagation(), l.preventDefault();
            let e = d.length - 1;
            d[e].disabled || d[e].focus();
          }
        }
      };
    }
    e.s(["findElementAncestor", () => t], 295082),
      e.s(["createScopedKeydownHandler", () => s], 128410);
  },
  862278,
  (e) => {
    "use strict";
    var t = e.i(768834),
      s = e.i(579473);
    let a = (0, t.create)()(
      (0, s.persist)(
        (e) => ({
          candles: [],
          selectedAsset: "",
          metaAssets: [],
          marginSummary: {
            accountValue: "",
            totalMarginUsed: "",
            totalNtlPos: "",
            totalRawUsd: "",
          },
          crossMarginSummary: {
            accountValue: "",
            totalMarginUsed: "",
            totalNtlPos: "",
            totalRawUsd: "",
          },
          assetPositions: [],
          openOrders: [],
          withdrawable: "",
          leverage: { rawUsd: "", type: "", value: 0 },
          maxBuilderFee: 0,
          fills: [],
          nonFundingLedgerUpdates: [],
          referralDetails: { code: "" },
          fundingHistory: [],
          orderHistory: [],
          assetCtxs: [],
          crossMaintenanceMarginUsed: "",
          orderForm: { limitPrice: 0 },
          userTwapSliceFills: [],
          userTwapHistory: [],
          twapStates: [],
          spotMetaAssets: [],
          spotAssetCtxs: [],
          spotMetaTokens: [],
          spotBalances: [],
          perpsSzDecimals: {},
          isHLAssetsLoaded: !1,
          perpsDex: [],
          perpsMetaAssetsByDex: {},
          clearinghouseStateByDex: {},
          openOrdersByDex: {},
          userDexAbstractionState: !1,
          socialAssetPositions: [],
          socialCrossMaintenanceMarginUsed: "",
          socialOpenOrders: [],
          socialMarginSummary: {
            accountValue: "",
            totalMarginUsed: "",
            totalNtlPos: "",
            totalRawUsd: "",
          },
          socialCrossMarginSummary: {
            accountValue: "",
            totalMarginUsed: "",
            totalNtlPos: "",
            totalRawUsd: "",
          },
          socialWithdrawable: "",
          socialFills: [],
          socialOrderHistory: [],
          socialAssetCtxs: [],
          socialFundingHistory: [],
          socialMetaAssets: [],
          socialPerpsDex: [],
          socialPerpsSzDecimals: {},
          socialPerpsMetaAssetsByDex: {},
          socialSpotMetaTokens: [],
          socialSpotMetaAssets: [],
          socialSpotAssetCtxs: [],
          socialIsHLAssetsLoaded: !1,
          socialClearinghouseStateByDex: {},
          socialTwapStates: [],
          socialSpotBalances: [],
          socialOpenOrdersByDex: {},
          socialNonFundingLedgerUpdates: [],
          socialUserTwapHistory: [],
          socialUserTwapSliceFills: [],
          selectedSocialAddress: { evm: "", hyperliquid: "" },
          activeAssetData: null,
          shouldShowOrderConfirmation: !0,
          setActiveAssetData: (t) => e(() => ({ activeAssetData: t })),
          setUserDexAbstractionState: (t) =>
            e(() => ({ userDexAbstractionState: t })),
          setPerpsMetaAssetsByDex: (t) =>
            e((e) => ({ perpsMetaAssetsByDex: t })),
          setPerpsMetaAssetsCtxByDex: (t, s) =>
            e((e) => ({
              perpsMetaAssetsByDex: {
                ...e.perpsMetaAssetsByDex,
                [s]: { ...e.perpsMetaAssetsByDex[s], assetCtxs: t },
              },
            })),
          setPerpsDex: (t) => e(() => ({ perpsDex: t })),
          setClearinghouseStateByDex: (t) =>
            e((e) => ({
              clearinghouseStateByDex: { ...e.clearinghouseStateByDex, ...t },
            })),
          setOpenOrdersByDex: (t) => e(() => ({ openOrdersByDex: t })),
          setIsHLAssetsLoaded: (t) => e(() => ({ isHLAssetsLoaded: t })),
          setPerpsSzDecimals: (t) => e(() => ({ perpsSzDecimals: t })),
          setSpotBalances: (t) => e(() => ({ spotBalances: t })),
          setSpotMetaTokens: (t) => e(() => ({ spotMetaTokens: t })),
          setSpotAssetCtxs: (t) => e(() => ({ spotAssetCtxs: t })),
          setSpotMetaAssets: (t) => e(() => ({ spotMetaAssets: t })),
          setTwapStates: (t) => e(() => ({ twapStates: t })),
          setUserTwapSliceFills: (t) => e(() => ({ userTwapSliceFills: t })),
          setUserTwapHistory: (t) => e(() => ({ userTwapHistory: t })),
          setNonFundingLedgerUpdates: (t) =>
            e(() => ({ nonFundingLedgerUpdates: t })),
          setOrderForm: (t, s) =>
            e((e) => ({ orderForm: { ...e.orderForm, [t]: s } })),
          setCrossMaintenanceMarginUsed: (t) =>
            e(() => ({ crossMaintenanceMarginUsed: t })),
          setAssetCtxs: (t) => e(() => ({ assetCtxs: t })),
          setFundingHistory: (t) => e(() => ({ fundingHistory: t })),
          setOrderHistory: (t) => e(() => ({ orderHistory: t })),
          setReferralDetails: (t) => e(() => ({ referralDetails: t })),
          setFills: (t) => e(() => ({ fills: t })),
          setMaxBuilderFee: (t) => e(() => ({ maxBuilderFee: t })),
          setLeverage: (t) => e(() => ({ leverage: t })),
          setWithdrawable: (t) => e(() => ({ withdrawable: t })),
          setOpenOrders: (t) => e(() => ({ openOrders: t })),
          setAssetPositions: (t) => e(() => ({ assetPositions: t })),
          setMarginSummary: (t) => e(() => ({ marginSummary: t })),
          setCrossMarginSummary: (t) => e(() => ({ crossMarginSummary: t })),
          setSelectedAsset: (t) => e(() => ({ selectedAsset: t })),
          setMetaAssets: (t) => e(() => ({ metaAssets: t })),
          setCandles: (t) => e(() => ({ candles: t })),
          setSocialAssetPositions: (t) => e({ socialAssetPositions: t }),
          setSocialCrossMaintenanceMarginUsed: (t) =>
            e({ socialCrossMaintenanceMarginUsed: t }),
          setSocialOpenOrders: (t) => e({ socialOpenOrders: t }),
          setSocialMarginSummary: (t) => e({ socialMarginSummary: t }),
          setSocialCrossMarginSummary: (t) =>
            e({ socialCrossMarginSummary: t }),
          setSocialWithdrawable: (t) => e({ socialWithdrawable: t }),
          setSocialFills: (t) => e({ socialFills: t }),
          setSocialOrderHistory: (t) => e({ socialOrderHistory: t }),
          setSocialAssetCtxs: (t) => e({ socialAssetCtxs: t }),
          setSocialFundingHistory: (t) => e({ socialFundingHistory: t }),
          setSocialMetaAssets: (t) => e({ socialMetaAssets: t }),
          setSocialPerpsDex: (t) => e({ socialPerpsDex: t }),
          setSocialPerpsSzDecimals: (t) => e({ socialPerpsSzDecimals: t }),
          setSocialPerpsMetaAssetsByDex: (t) =>
            e({ socialPerpsMetaAssetsByDex: t }),
          setSocialSpotMetaTokens: (t) => e({ socialSpotMetaTokens: t }),
          setSocialSpotMetaAssets: (t) => e({ socialSpotMetaAssets: t }),
          setSocialSpotAssetCtxs: (t) => e({ socialSpotAssetCtxs: t }),
          setSocialIsHLAssetsLoaded: (t) => e({ socialIsHLAssetsLoaded: t }),
          setSocialClearinghouseStateByDex: (t) =>
            e((e) => ({
              socialClearinghouseStateByDex: {
                ...e.socialClearinghouseStateByDex,
                ...t,
              },
            })),
          setSocialTwapStates: (t) => e({ socialTwapStates: t }),
          setSocialSpotBalances: (t) => e({ socialSpotBalances: t }),
          setSocialOpenOrdersByDex: (t) => e({ socialOpenOrdersByDex: t }),
          setSocialNonFundingLedgerUpdates: (t) =>
            e({ socialNonFundingLedgerUpdates: t }),
          setSocialUserTwapHistory: (t) => e({ socialUserTwapHistory: t }),
          setSocialUserTwapSliceFills: (t) =>
            e({ socialUserTwapSliceFills: t }),
          setSelectedSocialAddress: (t) =>
            e((e) => ({
              selectedSocialAddress: { ...e.selectedSocialAddress, ...t },
            })),
          setShouldShowOrderConfirmation: (t) =>
            e(() => ({ shouldShowOrderConfirmation: t })),
          resetStore: () =>
            e(() => ({
              marginSummary: {
                accountValue: "",
                totalMarginUsed: "",
                totalNtlPos: "",
                totalRawUsd: "",
              },
              crossMarginSummary: {
                accountValue: "",
                totalMarginUsed: "",
                totalNtlPos: "",
                totalRawUsd: "",
              },
              assetPositions: [],
              openOrders: [],
              withdrawable: "",
              leverage: { rawUsd: "", type: "", value: 0 },
              maxBuilderFee: 0,
              fills: [],
              nonFundingLedgerUpdates: [],
              referralDetails: { code: "" },
              fundingHistory: [],
              orderHistory: [],
              crossMaintenanceMarginUsed: "",
              orderForm: { limitPrice: 0 },
              userTwapSliceFills: [],
              userTwapHistory: [],
              twapStates: [],
            })),
          resetSocialStore: () =>
            e(() => ({
              socialMarginSummary: {
                accountValue: "",
                totalMarginUsed: "",
                totalNtlPos: "",
                totalRawUsd: "",
              },
              socialCrossMarginSummary: {
                accountValue: "",
                totalMarginUsed: "",
                totalNtlPos: "",
                totalRawUsd: "",
              },
              socialAssetPositions: [],
              socialOpenOrders: [],
              socialWithdrawable: "",
              socialFills: [],
              socialFundingHistory: [],
              socialOrderHistory: [],
              socialCrossMaintenanceMarginUsed: "",
              socialTwapStates: [],
              socialSpotBalances: [],
              socialClearinghouseStateByDex: {},
              socialAssetCtxs: [],
              socialMetaAssets: [],
              socialPerpsDex: [],
              socialPerpsSzDecimals: {},
              socialPerpsMetaAssetsByDex: {},
              socialSpotMetaTokens: [],
              socialSpotMetaAssets: [],
              socialSpotAssetCtxs: [],
              socialIsHLAssetsLoaded: !1,
              socialOpenOrdersByDex: {},
              socialNonFundingLedgerUpdates: [],
              socialUserTwapHistory: [],
              socialUserTwapSliceFills: [],
              selectedSocialAddress: { evm: "", hyperliquid: "" },
            })),
        }),
        { name: "hyperliquid-storage", skipHydration: !0 }
      )
    );
    e.s(["useHyperliquidStore", 0, a]);
  },
  720478,
  (e) => {
    "use strict";
    let t = {
        ai: {
          FET: "Fetch.ai",
          GRASS: "Grass",
          ZEREBRO: "Zerebro",
          NEAR: "Near Protocol",
          RENDER: "Render",
          PROMPT: "Prompt",
          GRIFFAIN: "Griffain",
          IO: "IO Net",
          VVV: "Venice Token",
          WLD: "Worldcoin",
          VIRTUAL: "Virtual Protocol",
          AI16Z: "AI16Z",
          TAO: "Bittensor",
          KAITO: "Kaito",
          AIXBT: "AIxBT",
        },
        defi: {
          PYTH: "Pyth Network",
          BANANA: "Banana Gun",
          SUSHI: "SushiSwap",
          SNX: "Synthetix",
          STG: "Stargate Finance",
          OGN: "Origin Protocol",
          MAV: "Maverick Protocol",
          REQ: "Request Network",
          UMA: "UMA",
          COMP: "Compound",
          REZ: "Renzo",
          RSR: "Reserve Rights",
          DYDX: "dYdX",
          ALT: "AltLayer",
          JUP: "Jupiter",
          PENDLE: "Pendle",
          ETHFI: "EtherFi",
          EIGEN: "EigenLayer",
          TRB: "Tellor",
          JTO: "Jito",
          CAKE: "PancakeSwap",
          RUNE: "THORChain",
          GMX: "GMX",
          MORPHO: "Morpho",
          ENA: "Ethena",
          AAVE: "Aave",
          MKR: "Maker",
          INJ: "Injective",
          CRV: "Curve DAO",
          LINK: "Chainlink",
          WCT: "WalletConnect",
          UNI: "Uniswap",
          LDO: "Lido DAO",
        },
        gaming: {
          XAI: "Xai",
          GALA: "Gala",
          BIGTIME: "Big Time",
          GMT: "STEPN",
          SAND: "The Sandbox",
          NOT: "Notcoin",
          YGG: "Yield Guild Games",
          HMSTR: "Hamster Kombat",
          ACE: "Fusionist",
          NXPC: "Nexpace",
          APE: "ApeCoin",
          IMX: "Immutable",
          SUPER: "SuperVerse",
          MAVIA: "Heroes of Mavia",
        },
        layer1: {
          CFX: "Conflux",
          ETC: "Ethereum Classic",
          OMNI: "Omni Network",
          DYM: "Dymension",
          ZETA: "ZetaChain",
          kLUNC: "Terra Classic",
          MINA: "Mina Protocol",
          BSV: "Bitcoin SV",
          POLYX: "Polymesh",
          IP: "Story Protocol",
          SAGA: "Saga",
          ALGO: "Algorand",
          NEO: "Neo",
          NEAR: "Near Protocol",
          TRX: "Tron",
          APT: "Aptos",
          BCH: "Bitcoin Cash",
          DOT: "Polkadot",
          KAS: "Kaspa",
          RUNE: "THORChain",
          XLM: "Stellar",
          OM: "Mantra",
          ATOM: "Cosmos",
          S: "Sonic",
          TIA: "Celestia",
          BNB: "BNB",
          SEI: "Sei",
          TON: "Toncoin",
          LTC: "Litecoin",
          ADA: "Cardano",
          INIT: "Initia",
          ZEN: "Horizen",
          BTC: "Bitcoin",
          ETH: "Ethereum",
          SOL: "Solana",
          HYPE: "Hyperliquid",
          XRP: "XRP",
          SUI: "Sui",
          AVAX: "Avalanche",
          BERA: "Berachain",
          INJ: "Injective",
        },
        layer2: {
          ARB: "Arbitrum",
          MOVE: "Movement",
          OP: "Optimism",
          STRK: "Starknet",
          LAYER: "Solayer",
          ZK: "zkSync",
          POL: "Polygon",
          SCR: "Scroll",
          IMX: "Immutable",
          BLAST: "Blast",
          CELO: "Celo",
          MNT: "Mantle",
        },
        meme: {
          TST: "Test Token",
          GOAT: "Goatseus Maximus",
          kFLOKI: "Floki",
          BOME: "Book of Meme",
          VINE: "Vine Coin",
          TURBO: "Turbo",
          MEW: "Cat in a Dogs World",
          MEME: "Memecoin",
          PEOPLE: "ConstitutionDAO",
          LAUNCHCOIN: "Launch Coin",
          MOODENG: "Moo Deng",
          kBONK: "Bonk",
          TRUMP: "Trump Coin",
          PENGU: "Pudgy Penguins",
          kSHIB: "Shiba Inu",
          MELANIA: "Melania Coin",
          CHILLGUY: "Chill Guy",
          BRETT: "Brett",
          NEIROETH: "Neiro ETH",
          PNUT: "Peanut",
          kNEIRO: "Neiro",
          kPEPE: "Pepe",
          FARTCOIN: "Fartcoin",
          DOGE: "Dogecoin",
          WIF: "Dogwifhat",
          SPX: "SPX6900",
          POPCAT: "Popcat",
        },
      },
      s = {
        stocks: {
          AAPL: "Apple",
          AMD: "Advanced Micro Devices",
          AMZN: "Amazon",
          ANTHROPIC: "Anthropic",
          BABA: "Alibaba",
          COIN: "Coinbase",
          CRCL: "Circle",
          GOOGL: "Google",
          HOOD: "Robinhood",
          INTC: "Intel",
          LILY: "Eli Lilly",
          META: "Meta",
          MSFT: "Microsoft",
          MU: "Micron Technology",
          NFLX: "Netflix",
          NVDA: "Nvidia",
          ORCL: "Oracle",
          PLTR: "Palantir",
          ROBOT: "Figure Robotics",
          SNDK: "SanDisk",
          SPACEX: "SpaceX",
          TSM: "Taiwan Semiconductor",
          TSLA: "Tesla",
        },
        commodity: {
          GOLD: "Gold",
          SILVER: "Silver",
          OIL: "Crude Oil",
          BRENTOIL: "Brent Oil",
          CL: "Crude Oil",
        },
        indices: { XYZ100: "XYZ 100 Index", US500: "S&P 500" },
        forex: {
          EUR: "Euro",
          GBP: "British Pound",
          JPY: "Japanese Yen",
          USD: "US Dollar",
        },
        "pre Ipo": { CXMT: "CXMT", QNT: "QNT" },
      },
      a = {};
    [t, s].forEach((e) => {
      Object.values(e).forEach((e) => {
        Object.entries(e).forEach(([e, t]) => {
          a[e] = t;
        });
      });
    });
    let r = null,
      i = null,
      o = "favorite-tokens",
      n = "onchain-favorite-details";
    e.s([
      "FAVORITE_TOKENS",
      0,
      o,
      "GlobalTokenNameMap",
      0,
      a,
      "RESTRICTED_TOKENS",
      0,
      ["@248", "@246", "@272", "@260"],
      "getFavorites",
      0,
      () => {
        if (null !== r) return r;
        let e = localStorage.getItem(o);
        if (!e) return (r = []), [];
        try {
          let t = JSON.parse(e);
          return (r = Array.isArray(t) ? t : []);
        } catch {
          return (r = []), [];
        }
      },
      "getOnChainFavoriteDetails",
      0,
      () => {
        let e = localStorage.getItem(n);
        if (!e) return {};
        try {
          return JSON.parse(e);
        } catch {
          return {};
        }
      },
      "hip3TokenList",
      0,
      s,
      "perpsTokenList",
      0,
      t,
      "setFavorites",
      0,
      (e) => {
        (r = e),
          i && clearTimeout(i),
          (i = setTimeout(() => {
            localStorage.setItem(o, JSON.stringify(e));
          }, 0));
      },
      "setOnChainFavoriteDetails",
      0,
      (e) => {
        localStorage.setItem(n, JSON.stringify(e));
      },
    ]);
  },
  489020,
  (e) => {
    "use strict";
    var t = e.i(862278),
      s = e.i(346944);
    e.s([
      "useSpotUtils",
      0,
      () => {
        let {
            spotMetaAssets: e,
            spotAssetCtxs: a,
            spotMetaTokens: r,
          } = (0, t.useHyperliquidStore)(
            (0, s.useShallow)((e) => ({
              spotMetaAssets: e.spotMetaAssets,
              spotAssetCtxs: e.spotAssetCtxs,
              spotMetaTokens: e.spotMetaTokens,
            }))
          ),
          i = (t) => {
            if (!e) return null;
            let s = e.find(
              (e) => e.tokens && e.tokens.length > 0 && e.tokens[0] === t
            );
            return s ? s.name : null;
          },
          o = (e, t = "markPx") => {
            if (!a) return null;
            let s = a.find((t) => t.coin === e);
            return s ? s[t] : null;
          },
          n = (t) => {
            if (!e || !r) return null;
            let s = r.find((e) => e.name === t);
            if (!s) return null;
            let a = e.find(
              (e) => e.tokens && e.tokens.length > 0 && e.tokens[0] === s.index
            );
            return a ? a.name : null;
          },
          l = (t) => {
            if (!e) return null;
            let s = e.find(
              (e) => e.tokens && e.tokens.length > 0 && e.tokens[0] === t
            );
            return s ? s.name : null;
          };
        return {
          getSpotAssetData: (t, s = "markPx") => {
            if (!e || !a) return null;
            let r = null;
            if ("number" == typeof t) {
              let s = e.find(
                (e) => e.tokens && e.tokens.length > 0 && e.tokens[0] === t
              );
              s && (r = s.name);
            } else r = t;
            if (!r) return null;
            let i = a.find((e) => e.coin === r);
            return i ? i[s] : null;
          },
          getNameByIndex: i,
          getDataByIndex: (t, s = "markPx") => {
            if (!e || !a) return null;
            let r = e.find(
              (e) => e.tokens && e.tokens.length > 0 && e.tokens[0] === t
            );
            if (!r) return null;
            let i = a.find((e) => e.coin === r.name);
            return i ? i[s] : null;
          },
          getDataByName: o,
          getAllAssetNames: () => (a ? a.map((e) => e.coin) : []),
          getAllAssetIndices: () =>
            e
              ? e
                  .filter((e) => e.tokens && e.tokens.length > 0)
                  .map((e) => e.tokens[0])
              : [],
          existsByIndex: (e) => null !== i(e),
          existsByName: (e) => null !== o(e),
          getFullAssetByIndex: (e) => {
            let t = i(e);
            return (t && a && a.find((e) => e.coin === t)) || null;
          },
          getFullAssetByName: (e) => (a && a.find((t) => t.coin === e)) || null,
          getSzDecimalsByMetaAssetsName: (t) => {
            if (!e || !r) return null;
            let s = e.find((e) => e.name === t);
            if (!s || !s.tokens || 0 === s.tokens.length) return null;
            let a = s.tokens[0],
              i = r.find((e) => e.index === a);
            return i ? i.szDecimals : null;
          },
          getSpotMetaTokenByMetaAssetsName: (t) => {
            if (!e || !r) return null;
            let s = e.find((e) => e.name === t);
            if (!s || !s.tokens || 0 === s.tokens.length) return null;
            let a = s.tokens[0];
            return r.find((e) => e.index === a) || null;
          },
          getMetaAssetsNameByTokenName: n,
          getMetaAssetsNameByTokenIndex: l,
          getMetaAssetsNameByToken: (e) => ("string" == typeof e ? n(e) : l(e)),
          getTokenIdByName: (e) => {
            if (!r) return null;
            let t = r.find((t) => t.name === e);
            return t ? t.tokenId : null;
          },
          getTokenNameByMetaAssetsName: (t) => {
            if (!e || !r) return null;
            let s = e.find((e) => e.name === t);
            if (!s || !s.tokens || 0 === s.tokens.length) return null;
            let a = s.tokens[0],
              i = r.find((e) => e.index === a);
            return i ? i.name : null;
          },
          spotMetaAssets: e,
          spotAssetCtxs: a,
          spotMetaTokens: r,
          getMetaAssetIndexByTradingPair: (t) => {
            if (!r || !e) return null;
            let s = t.split("/");
            if (2 !== s.length) return null;
            let [a, i] = s,
              o = r.find((e) => e.name === a),
              n = r.find((e) => e.name === i);
            if (!o || !n) return null;
            let l = [o.index, n.index],
              d = e.find(
                (e) =>
                  e.tokens &&
                  2 === e.tokens.length &&
                  e.tokens[0] === l[0] &&
                  e.tokens[1] === l[1]
              );
            return d ? d.name : null;
          },
          getTradingPairByMetaAsset: (t) => {
            let s;
            if (
              !e ||
              !r ||
              !(s =
                "string" == typeof t
                  ? e.find((e) => e.name === t)
                  : e.find((e) => e.index === t)) ||
              !s.tokens ||
              s.tokens.length < 2
            )
              return null;
            let a = r[s.tokens[0]],
              i = r[s.tokens[1]];
            return a && i ? `${a.name}/${i.name}` : null;
          },
        };
      },
    ]);
  },
  557663,
  (e) => {
    "use strict";
    var t = e.i(843476),
      s = e.i(862278),
      a = e.i(184086),
      r = e.i(346944),
      i = e.i(720478);
    e.s([
      "default",
      0,
      ({ tokenName: e, includeCurrency: o = !1, isTruncate: n = !1 }) => {
        let { perpsMetaAssetsByDex: l, spotMetaTokens: d } = (0,
          s.useHyperliquidStore)(
            (0, r.useShallow)((e) => ({
              perpsMetaAssetsByDex: e.perpsMetaAssetsByDex,
              spotMetaTokens: e.spotMetaTokens,
            }))
          ),
          c = e?.split(":")[0],
          u = e?.split(":")[1],
          p = i.GlobalTokenNameMap[e] || i.GlobalTokenNameMap[u] || "";
        if (e?.includes(":")) {
          let e = l?.[c]?.collateralToken,
            s = d?.find((t) => t.index === e)?.name,
            r = (0, t.jsxs)("span", {
              className: n ? "truncate max-w-[100px]" : "",
              children: [
                u,
                o &&
                  (0, t.jsxs)("span", {
                    className: "text-white",
                    children: ["-", s || "USDC"],
                  }),
              ],
            }),
            i = p || r;
          return (0, t.jsx)(a.Tooltip, {
            label: i,
            color: "#434754",
            zIndex: 1e4,
            className: "text-xs text-[#ffffff]",
            children: (0, t.jsxs)("span", {
              className: "flex items-center whitespace-nowrap",
              children: [
                r,
                (0, t.jsx)("span", {
                  className: "w-1 h-1 rounded-full bg-white/20 mx-1.5",
                }),
                (0, t.jsx)("span", {
                  className:
                    "flex items-center px-1 pb-px pt-0.5 rounded-[2px] text-[10px] font-black bg-[#2861FF]/10 text-[#2861FF] border border-[#2861FF]/20 leading-none",
                  children: c,
                }),
              ],
            }),
          });
        }
        let m = (0, t.jsxs)("span", {
          className: "whitespace-nowrap flex items-center",
          children: [e, o ? "-USDC" : ""],
        });
        return p
          ? (0, t.jsx)(a.Tooltip, {
              label: p,
              color: "#434754",
              zIndex: 1e4,
              className: "text-xs text-[#ffffff]",
              children: m,
            })
          : m;
      },
    ]);
  },
  931067,
  (e) => {
    "use strict";
    function t() {
      return (t = Object.assign.bind()).apply(null, arguments);
    }
    e.s(["default", () => t]);
  },
  915874,
  (e) => {
    "use strict";
    function t(e, t) {
      if (null == e) return {};
      var s = {};
      for (var a in e)
        if ({}.hasOwnProperty.call(e, a)) {
          if (-1 !== t.indexOf(a)) continue;
          s[a] = e[a];
        }
      return s;
    }
    e.s(["default", () => t]);
  },
  756302,
  3130,
  (e) => {
    "use strict";
    var t = e.i(581949),
      s = e.i(462815),
      a = e.i(768834),
      r = e.i(579473);
    let i = (0, a.create)()(
      (0, r.persist)(
        (e, t) => ({
          pairs: [],
          ostiumPositions: [],
          ostiumOpenOrders: [],
          ostiumOrderHistory: [],
          ostiumCompletedTrades: [],
          selectedAssetNonCrypto: "",
          ostiumLeverage: 1,
          rwaPerpsPairsPriceList: [],
          socialOstiumPositions: [],
          socialOstiumOpenOrders: [],
          socialOstiumOrderHistory: [],
          socialOstiumCompletedTrades: [],
          isOstiumServerDown: !1,
          consecutiveFailures: 0,
          setIsOstiumServerDown: (t) => e(() => ({ isOstiumServerDown: t })),
          resetConsecutiveFailures: () => e(() => ({ consecutiveFailures: 0 })),
          incrementConsecutiveFailures: () => {
            let { consecutiveFailures: s } = t(),
              a = s + 1;
            e(() => ({ consecutiveFailures: a })),
              a >= 4 && e(() => ({ isOstiumServerDown: !0 }));
          },
          setRWAPerpsPairsPriceList: (t) =>
            e(() => ({ rwaPerpsPairsPriceList: t })),
          setPairs: (t) => e(() => ({ pairs: t })),
          setostiumPositions: (t) => e(() => ({ ostiumPositions: t })),
          setOstiumOpenOrders: (t) => e(() => ({ ostiumOpenOrders: t })),
          setOstiumOrderHistory: (t) => e(() => ({ ostiumOrderHistory: t })),
          setOstiumCompletedTrades: (t) =>
            e(() => ({ ostiumCompletedTrades: t })),
          setSelectedAssetNonCrypto: (t) =>
            e(() => ({ selectedAssetNonCrypto: t })),
          setOstiumLeverage: (t) => e(() => ({ ostiumLeverage: t })),
          setSocialOstiumPositions: (t) =>
            e(() => ({ socialOstiumPositions: t })),
          setSocialOstiumOpenOrders: (t) =>
            e(() => ({ socialOstiumOpenOrders: t })),
          setSocialOstiumOrderHistory: (t) =>
            e(() => ({ socialOstiumOrderHistory: t })),
          setSocialOstiumCompletedTrades: (t) =>
            e(() => ({ socialOstiumCompletedTrades: t })),
          updateOtherPrices: (s) => {
            let { pairs: a, selectedAssetNonCrypto: r } = t(),
              i = a.map((e) => {
                let t = r.split("/")[0],
                  a = r.split("/")[1];
                if (e?.from === t && e?.to === a) return e;
                let i = s.find((t) => t.feed_id === e.feed);
                if (i) {
                  let t = i.mid || 0,
                    s = e.price24hAgo || t;
                  return {
                    ...e,
                    ...i,
                    percentChange24h: s ? ((t - s) / s) * 100 : 0,
                  };
                }
                return e;
              });
            e(() => ({ pairs: i }));
          },
          updatePrices: (s, a) => {
            let { pairs: r } = t(),
              i = s.split("/")[0],
              o = s.split("/")[1],
              n = r.findIndex((e) => e.from === i && e.to === o);
            if (-1 !== n) {
              let t = r[n],
                s = t.price24hAgo || a,
                i = [...r];
              (i[n] = {
                ...t,
                mid: a,
                percentChange24h: s ? ((a - s) / s) * 100 : 0,
              }),
                e(() => ({ pairs: i }));
            }
          },
          resetStore: () =>
            e(() => ({
              pairs: [],
              ostiumPositions: [],
              isOstiumServerDown: !1,
              consecutiveFailures: 0,
            })),
        }),
        {
          name: "ostium-storage",
          storage: (0, r.createJSONStorage)(() => localStorage),
          skipHydration: !0,
          partialize: (e) =>
            Object.fromEntries(
              Object.entries(e).filter(
                ([e]) =>
                  !["isOstiumServerDown", "consecutiveFailures"].includes(e)
              )
            ),
        }
      )
    );
    e.s(["useOstiumStore", 0, i], 3130);
    let o = async () => {
        try {
          let e = {
              query: `query GetPairsAndMetadata {
              pairs(first: 1000) {
                ...PairFullFields
                __typename
              }
              metaData(id: "ostium") {
                ...MetadataFields
                __typename
              }
            }
            fragment PairFullFields on Pair {
              ...PairDetailFields
              makerMaxLeverage
              maxLeverage
              group {
                ...PairGroupFields
                __typename
              }
              makerFeeP
              takerFeeP
              fee {
                ...PairFeeFields
                __typename
              }
              hillInflectionPoint
              hillPosScale
              hillNegScale
              lastOiDelta
              springFactor
              sFactorUpScaleP
              sFactorDownScaleP
              lastTradePrice
              __typename
            }
            fragment PairDetailFields on Pair {
              ...PairBaseFields
              volume
              accRollover
              accFundingLong
              accFundingShort
              curRollover
              curFundingLong
              curFundingShort
              lastFundingRate
              maxFundingFeePerBlock
              lastFundingBlock
              lastFundingTime
              longOI
              shortOI
              maxOI
              rolloverFeePerBlock
              lastRolloverBlock
              overnightMaxLeverage
              totalOpenTrades
              totalOpenLimitOrders
              __typename
            }
            fragment PairBaseFields on Pair {
              id
              from
              to
              feed
              __typename
            }
            fragment PairGroupFields on Group {
              id
              name
              maxLeverage
              minLeverage
              maxCollateralP
              longCollateral
              shortCollateral
              __typename
            }
            fragment PairFeeFields on Fee {
              id
              minLevPos
              liqFeeP
              oracleFee
              __typename
            }
            fragment MetadataFields on MetaData {
              maxTradesPerPair
              maxPendingMarketOrders
              totalTrades
              totalUsers
              totalOpenTrades
              totalVolume
              liqMarginThresholdP
              __typename
            }`,
              variables: {},
            },
            t = await s.default.post("/stocks/perps/subgraph", e);
          if (!t.data?.data?.data?.pairs)
            throw Error("Invalid response format from pairs API");
          let a = t.data?.data?.data?.pairs,
            r = t.data?.data?.data?.metaData,
            i = await s.default.get("/stocks/perps/latest-prices?", {}),
            o = i?.data?.data,
            n = await s.default.get("/stocks/perps/asset-performance"),
            l = n?.data?.data;
          return a.map((e) => {
            let t = o?.find((t) => t.feed_id === e?.feed),
              s = l?.find((t) => t.id === e?.feed),
              a = t?.mid || 0,
              i = s?.price24hAgo || a,
              n = e.longOI ? Number(e.longOI) / 1e18 : 0,
              d = e.shortOI ? Number(e.shortOI) / 1e18 : 0,
              c = e.maxOI ? Number(e.maxOI) / 1e18 : 0;
            return {
              ...e,
              ...t,
              percentChange24h: i ? ((a - i) / i) * 100 : 0,
              price24hAgo: i,
              highest24h: s?.highest || a,
              lowest24h: s?.lowest || a,
              totalOI: n + d,
              oiUtilization: c ? ((n + d) / c) * 100 : 0,
              metadata: r,
            };
          });
        } catch (e) {
          throw (
            (console.error("Error fetching pairs:", e),
            t.default.isAxiosError(e) &&
              console.error("API Error:", e.response?.data),
            e)
          );
        }
      },
      n = async (e, t = 20) => {
        let a = e.startsWith("0x") ? e.toLowerCase() : `0x${e.toLowerCase()}`;
        try {
          let e = {
              query: `
      query orderHistory($trader: Bytes!, $limit: Int!) {
        orders(
          where: { trader: $trader, isPending: false }
          first: $limit
          orderBy: executedAt
          orderDirection: desc
        ) {
          id
          isBuy
          notional
          tradeNotional
          collateral
          leverage
          orderType
          orderAction
          profitPercent
          totalProfitPercent
          orderAction
          price
          initiatedAt
          executedAt
          isCancelled
          isPending
          cancelReason
          rolloverFee
          fundingFee
          pair {
            from
            to
            feed
          }
        }
      }
    `,
              variables: { trader: a, limit: t },
            },
            r = await s.default.post("/stocks/perps/subgraph", e);
          return r?.data?.data?.data?.orders ?? [];
        } catch (e) {
          return (
            console.error("Error fetching order history:", e),
            i.getState().incrementConsecutiveFailures(),
            []
          );
        }
      },
      l = async (e) => {
        let t = {
          query: `query GetTradesData($trader: Bytes!) {
  trades(where: {trader: $trader, isOpen: true}) {
    id
    index
    trader
    tradeNotional
    tradeType
    openPrice
    isOpen
    isBuy
    notional
    collateral
    leverage
    highestLeverage
    stopLossPrice
    takeProfitPrice
    timestamp
    funding
    rollover
    pair {
      ...TradePairFields
      __typename
    }
    __typename
  }
  orders(
    where: {trader: $trader, isPending: true, isCancelled: false}
  ) {
    id
    isBuy
    tradeNotional
    notional
    trader
    collateral
    leverage
    orderType
    orderAction
    price
    initiatedAt
    totalProfitPercent
    profitPercent
    isPending
    amountSentToTrader
    initiatedTx
    initiatedBlock
    isCancelled
    cancelReason
    rolloverFee
    fundingFee
    tradeID
    pair {
      ...OrderPairFields
      __typename
    }
    __typename
  }
  limits(where: {trader: $trader, isActive: true}) {
    id
    trader
    isActive
    initiatedAt
    isBuy
    notional
    tradeNotional
    collateral
    leverage
    limitType
    openPrice
    stopLossPrice
    takeProfitPrice
    initiatedAt
    updatedAt
    pair {
      ...OrderPairFields
      __typename
    }
    __typename
  }
}

fragment TradePairFields on Pair {
  ...PairDetailFields
  maxLeverage
  fee {
    minLevPos
    oracleFee
    __typename
  }
  group {
    name
    maxLeverage
    minLeverage
    __typename
  }
  hillInflectionPoint
  hillPosScale
  hillNegScale
  lastOiDelta
  springFactor
  sFactorUpScaleP
  sFactorDownScaleP
  lastTradePrice
  __typename
}

fragment PairDetailFields on Pair {
  ...PairBaseFields
  volume
  accRollover
  accFundingLong
  accFundingShort
  curRollover
  curFundingLong
  curFundingShort
  lastFundingRate
  maxFundingFeePerBlock
  lastFundingBlock
  lastFundingTime
  longOI
  shortOI
  maxOI
  rolloverFeePerBlock
  lastRolloverBlock
  overnightMaxLeverage
  __typename
}

fragment PairBaseFields on Pair {
  id
  from
  to
  feed
  __typename
}

fragment OrderPairFields on Pair {
  ...PairBaseFields
  longOI
  shortOI
  maxOI
  makerFeeP
  takerFeeP
  makerMaxLeverage
  lastTradePrice
  fee {
    liqFeeP
    oracleFee
    __typename
  }
  group {
    name
    __typename
  }
  __typename
}`,
          variables: { trader: e },
        };
        try {
          let e = await s.default.post("/stocks/perps/subgraph", t);
          return e?.data?.data?.data ?? {};
        } catch (e) {
          return (
            console.error("Error fetching trader trades data:", e),
            i.getState().incrementConsecutiveFailures(),
            {}
          );
        }
      },
      d = async ({ asset: e, from: t, to: a, resolution: r }) => {
        try {
          return (
            await s.default.get("/stocks/perps/get-historical-data", {
              params: { asset: e, from: t, to: a, resolution: r },
            })
          ).data;
        } catch (e) {
          throw (
            (console.error("Error fetching historical data:", e),
            i.getState().incrementConsecutiveFailures(),
            e)
          );
        }
      },
      c = async ({ asset: e }) =>
        (await s.default.get(`/stocks/perps/asset-schedule?asset=${e}`, {}))
          .data,
      u = async ({ user: e }) => {
        let t = {
            variables: { user: e },
            query: `query getUserPairsStatistics($user: String) {
  userPairStats(where: {user: $user}) {
    totalPnL
    totalOpenTrades
    totalTrades
    totalMarketOrders
    totalOpenLimitOrders
    totalCancelledOrders
    id
    totalVolume
    totalOpenVolume
    totalClosedVolume
    totalProfitTrades
    totalLossTrades
    totalPnL
    pair {
      id
      from
      to
      __typename
    }
    __typename
  }
}`,
          },
          a = await s.default.post("/stocks/perps/subgraph", t);
        return a?.data;
      },
      p = async ({ id: e }) => {
        let t = {
          query: `query getUserPortfolio($id: ID!) {
  user(id: $id) {
    totalVolume
    totalOpenTrades
    totalTrades
    totalMarketOrders
    totalOpenVolume
    totalClosedVolume
    totalOpenLimitOrders
    totalCancelledOrders
    totalProfitTrades
    totalLossTrades
    totalPnL
    totalLIQOrders
    totalTPOrders
    totalSLOrders
    totalClosedCollateral
    __typename
  }
}`,
          variables: { id: e },
        };
        return (await s.default.post("/stocks/perps/subgraph", t)).data;
      };
    e.s(
      [
        "getOrderHistory",
        0,
        n,
        "getPairsFromSubgraph",
        0,
        o,
        "getStocksHistoricalData",
        0,
        d,
        "getStocksTradingHours",
        0,
        c,
        "getTraderTradesData",
        0,
        l,
        "getUserPairsStatistics",
        0,
        u,
        "getUserPortfolio",
        0,
        p,
      ],
      756302
    );
  },
]);
