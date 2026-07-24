(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  815518,
  79145,
  219826,
  190384,
  (e) => {
    "use strict";
    var t = e.i(843476),
      s = e.i(271645),
      l = e.i(646563),
      a = e.i(541473),
      r = e.i(533372),
      i = e.i(862278),
      n = e.i(40658),
      o = e.i(145288),
      d = e.i(905142),
      c = e.i(152702),
      x = e.i(343794),
      u = e.i(730210),
      m = e.i(974010),
      h = e.i(2710),
      p = e.i(129277),
      b = e.i(10982),
      f = e.i(458790),
      g = e.i(911450),
      j = e.i(57159),
      N = e.i(911347),
      v = e.i(236983),
      T = e.i(557663),
      w = e.i(127615),
      y = e.i(553917),
      S = e.i(524795);
    let C = ({
      opened: e,
      close: l,
      isMarket: a,
      maxSize: n,
      coin: o,
      currentPrice: d,
      isBuy: C,
      entryPrice: P,
      leverage: D,
    }) => {
      let [k, A] = (0, s.useState)(0),
        [z, M] = (0, s.useState)(100),
        [$, F] = (0, s.useState)(0),
        [B, L] = (0, s.useState)(!1),
        { wallets: I } = (0, g.useWallets)(),
        {
          metaAssets: O,
          perpsSzDecimals: E,
          perpsDex: H,
          perpsMetaAssetsByDex: U,
        } = (0, i.useHyperliquidStore)((e) => e),
        q = I.find((e) => "privy" === e.walletClientType),
        W = (e) => {
          if (!e) return null;
          let t = O.find((t) => t.name === e);
          if (t) return t;
          if (e.includes(":") && U) {
            let [s] = e.split(":"),
              l = U[s];
            if (
              l?.metaAssets?.length &&
              (t = l.metaAssets.find((t) => t.name === e))
            )
              return t;
          }
          return null;
        };
      (0, s.useEffect)(() => {
        F(n);
      }, [n]);
      let V = async () => {
          let e = Date.now().toString(),
            t = {
              tokenName: o,
              selectedAsset: `${o}-USDC`,
              isSpot: !1,
              isClosePosition: !0,
              selectedSection: C ? "long" : "short",
              leverage: D,
              takeProfit: String(
                (0, m.convertIntl)((0, m.roundedNumber)(C ? R : _))
              ),
              isProfit: Y,
              isLoss: !Y,
              tokenQuantity: String($),
              showTpsl: !0,
            };
          try {
            L(!0),
              (0, w.hlTradeNotifications)({
                notificationId: e,
                title: "Order Submitting..",
                showProgress: !1,
                autoClose: !1,
                loading: !0,
                ...t,
              }),
              await q.switchChain(v.arbitrum.id);
            let s = (0, j.createWalletClient)({
                account: q?.address,
                chain: v.arbitrum,
                transport: (0, N.custom)(await q.getEthereumProvider()),
              }),
              r = [
                {
                  a: ((e) => {
                    if (!e) return -1;
                    if (e.includes(":")) {
                      let [t] = e.split(":"),
                        s = H.findIndex((e) => e.name === t) + 1;
                      if (0 === s)
                        return (
                          console.warn(`DEX ${t} not found in perpsDex`),
                          O.findIndex((t) => t.name === e)
                        );
                      let l = U[t];
                      if (!l?.metaAssets)
                        return (
                          console.warn(`No metaAssets found for DEX ${t}`),
                          O.findIndex((t) => t.name === e)
                        );
                      let a = l.metaAssets.findIndex((t) => t.name === e);
                      return -1 === a
                        ? (console.warn(
                            `Asset ${e} not found in DEX ${t} metaAssets`
                          ),
                          O.findIndex((t) => t.name === e))
                        : 1e5 + 1e4 * s + a;
                    }
                    return O.findIndex((t) => t.name === e);
                  })(o),
                  b: !C,
                  p: a
                    ? String(
                        (0, u.formatHyperliquidPrice)(
                          C ? 0.9 * d : 1.1 * d,
                          W(o)?.szDecimals
                        )
                      )
                    : String(
                        (0, u.formatHyperliquidPrice)(k, W(o)?.szDecimals)
                      ),
                  s: String((0, u.formatHyperliquidSize)($, W(o)?.szDecimals)),
                  r: !0,
                  t: { limit: { tif: "Gtc" } },
                },
              ],
              i = await (0, u.placeOrder)({
                wallet: s,
                orders: r,
                grouping: "na",
              }),
              c = (0, u.handleHyperliquidResponse)(i);
            c?.success
              ? (A(0),
                F(n),
                (0, w.hlTradeNotifications)({
                  title: "Order Placed",
                  showProgress: !0,
                  isError: !1,
                  ...t,
                }),
                l())
              : ((0, w.hlTradeNotifications)({
                  title: c.message || "Something went wrong!",
                  isError: !0,
                  showProgress: !1,
                  autoClose: !0,
                  ...t,
                }),
                (0, S.captureErrorToSentry)(
                  c.message ?? JSON.stringify(c),
                  "ClosePositionModal.tsx:handlePlaceOrder:else"
                )),
              L(!1);
          } catch (e) {
            L(!1),
              (0, w.hlTradeNotifications)({
                title: "Something went wrong!",
                isError: !0,
                showProgress: !1,
                autoClose: !0,
                ...t,
              }),
              (0, S.captureErrorToSentry)(
                e,
                "ClosePositionModal.tsx:handlePlaceOrder:catch"
              );
          } finally {
            y.notifications.hide(e);
          }
        },
        R = Number($) * (Number(a ? d : k) - Number(P)),
        _ = Number($) * (Number(P) - Number(a ? d : k)),
        Y = C ? R > 0 : _ > 0,
        X = (0, c.useIsMobile)(),
        G = (0, t.jsxs)("div", {
          className: "pb-4",
          children: [
            (0, t.jsx)("div", {
              className: "text-sm text-slate-900",
              children: a
                ? "This will attempt to immediately close your position."
                : "Your position will be closed when the limit price is reached.",
            }),
            a
              ? null
              : (0, t.jsxs)("div", {
                  className: "pt-4",
                  children: [
                    (0, t.jsx)("div", {
                      className: "text-xs pb-1 text-slate-900",
                      children: "Price",
                    }),
                    (0, t.jsx)(b.NumberInput, {
                      classNames: {
                        input:
                          "!border-1 border-solid border-slate-600 !bg-[#17191f] h-10 font-semibold",
                      },
                      value: k || "",
                      placeholder: `Current Price: $${d.toFixed(6 - E[o])}`,
                      clampBehavior: "strict",
                      onChange: (e) => {
                        A(Number(e));
                      },
                      rightSection: (0, t.jsx)("div", {
                        className: "mr-4 cursor-pointer text-blue-500 text-xs",
                        onClick: () => A(d?.toFixed(6 - E[o])),
                        children: "MID",
                      }),
                      hideControls: !0,
                    }),
                  ],
                }),
            (0, t.jsxs)("div", {
              className: "pt-4 grid grid-cols-5 gap-2",
              children: [
                (0, t.jsxs)("div", {
                  className: "col-span-4",
                  children: [
                    (0, t.jsx)("div", {
                      className: "text-xs pb-1 text-slate-900",
                      children: "Size",
                    }),
                    (0, t.jsx)(b.NumberInput, {
                      classNames: {
                        input:
                          "!border-1 border-solid border-slate-600 !bg-[#17191f] h-10 font-semibold",
                        section: "w-[60px]",
                      },
                      value: $ || "",
                      placeholder: "Enter Size",
                      min: 0,
                      max: n,
                      clampBehavior: "strict",
                      rightSection: (0, t.jsx)("div", {
                        className: (0, x.default)("text-sm text-slate-900", {
                          "pr-6": o?.length < 4,
                          "pr-[64px]": o?.length > 4 && o?.length < 10,
                          "pr-[76px]": o?.length >= 10,
                        }),
                        children: (0, t.jsx)(T.default, { tokenName: o }),
                      }),
                      onChange: (e) => {
                        F(Number(e)), M((Number(e) / n) * 100);
                      },
                      hideControls: !0,
                    }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  children: [
                    (0, t.jsx)("div", {
                      className: "text-xs pb-1 text-slate-900",
                      children: "Percentage",
                    }),
                    (0, t.jsx)(b.NumberInput, {
                      classNames: {
                        input:
                          "!border-1 border-solid border-slate-600 !bg-[#17191f] h-10 font-semibold",
                      },
                      max: 100,
                      rightSection: (0, t.jsx)("div", {
                        className: "pr-1 text-sm text-slate-900",
                        children: "%",
                      }),
                      min: 0,
                      clampBehavior: "strict",
                      value: Number(z) || "",
                      onChange: (e) => {
                        M(Number(e)),
                          F(Number(((n * Number(e)) / 100).toFixed(5)));
                      },
                      hideControls: !0,
                    }),
                  ],
                }),
              ],
            }),
            (0, t.jsxs)("div", {
              className: "pt-2 text-slate-900 text-xs flex items-center gap-1",
              children: [
                "Max Size: ",
                n,
                " ",
                (0, t.jsx)(T.default, { tokenName: o }),
              ],
            }),
            (0, t.jsx)("div", {
              className: "pt-8",
              children: (0, t.jsx)(f.Slider, {
                value: z,
                size: 5,
                min: 0,
                max: 100,
                marks: [
                  {
                    value: 0,
                    label: (0, t.jsx)("span", {
                      className: "pl-2",
                      children: "0%",
                    }),
                  },
                  { value: 25, label: "25%" },
                  { value: 50, label: "50%" },
                  { value: 75, label: "75%" },
                  {
                    value: 100,
                    label: (0, t.jsx)("span", {
                      className: "pr-4",
                      children: "100%",
                    }),
                  },
                ],
                classNames: {
                  mark: "hidden",
                  markLabel: "text-[12px] text-slate-900 pt-2",
                  label: "bg-[#101216]",
                  bar: "bg-gradient-to-r from-[#1f222c] to-primary-500",
                },
                onChange: (e) => {
                  M(e), F(Number(((n * e) / 100).toFixed(5)));
                },
              }),
            }),
            a || k
              ? (0, t.jsxs)("div", {
                  className:
                    "mt-12 pb-4 flex justify-end items-center gap-2 text-xs text-slate-900",
                  children: [
                    (0, t.jsxs)("div", {
                      children: ["Expected ", Y ? "Profit" : "Loss", ": "],
                    }),
                    (0, t.jsx)("div", {
                      className: (0, x.default)("font-medium", {
                        "text-grass": Y,
                        "text-blood": !Y,
                      }),
                      children: (0, m.convertIntl)(
                        (0, m.roundedNumber)(C ? R : _)
                      ),
                    }),
                  ],
                })
              : null,
            (0, t.jsx)("div", {
              className: (0, x.default)({ "mt-12": a || k, "mt-20": !a && !k }),
              children: (0, t.jsxs)(r.Button, {
                color: "#00FF99",
                fullWidth: !0,
                className: "!px-2 !py-1",
                classNames: { label: "!text-black" },
                disabled: (a ? 0 === $ : 0 === k || 0 === $) || B,
                onClick: V,
                children: ["Confirm ", a ? "Market" : "Limit", " Close"],
              }),
            }),
          ],
        });
      return X
        ? (0, t.jsx)(h.Drawer, {
            opened: e,
            onClose: l,
            position: "bottom",
            size: a ? "52%" : "55%",
            title: (0, t.jsxs)("div", {
              className: "font-semibold text-[18px]",
              children: [a ? "Market" : "Limit", " Close on Position"],
            }),
            classNames: {
              header: "!bg-[#16171B]",
              body: "!p-4 !overflow-hidden bg-[#16171B]",
              content:
                "!bg-[#16171B] !rounded-t-2xl !border-t border-[#1F2126]",
              close: "!text-white hover:!bg-slate-200 hover:!text-white/60",
            },
            children: G,
          })
        : (0, t.jsx)(p.Modal, {
            opened: e,
            size: 440,
            centered: !0,
            onClose: l,
            title: (0, t.jsxs)("div", {
              className: "font-semibold text-[18px]",
              children: [a ? "Market" : "Limit", " Close on Position"],
            }),
            classNames: {
              header: "!bg-[#16171B]",
              body: "!p-4 !overflow-hidden",
              content: "!bg-[#16171B] !rounded-lg",
              close: "!text-white hover:!bg-slate-200 hover:!text-white/60",
            },
            styles: {
              content: { border: "1px solid #1F2126" },
              header: { borderBottom: "1px solid #1B1E26" },
            },
            children: G,
          });
    };
    var P = e.i(453165),
      D = e.i(294229),
      k = e.i(802315),
      A = e.i(346944),
      z = e.i(270112);
    let M = (e) => Math.floor(100 * e) / 100,
      $ = ({
        opened: e,
        close: l,
        currentPrice: a,
        liquidationPrice: n,
        coin: o,
        isBuy: d,
        leverage: x,
        marginUsed: T,
        szi: C,
      }) => {
        let [$, F] = (0, s.useState)("add"),
          [B, L] = (0, s.useState)(0),
          [I, O] = (0, s.useState)(!1),
          {
            metaAssets: E,
            perpsDex: H,
            perpsMetaAssetsByDex: U,
            spotBalances: q,
            withdrawable: W,
            spotMetaTokens: V,
          } = (0, i.useHyperliquidStore)(
            (0, A.useShallow)((e) => ({
              metaAssets: e.metaAssets,
              perpsDex: e.perpsDex,
              perpsMetaAssetsByDex: e.perpsMetaAssetsByDex,
              spotBalances: e.spotBalances,
              withdrawable: e.withdrawable,
              spotMetaTokens: e.spotMetaTokens,
            }))
          ),
          [R, _] = (0, s.useState)(0),
          [Y, X] = (0, s.useState)(0),
          [G, J] = (0, s.useState)({}),
          { wallets: Q } = (0, g.useWallets)(),
          K = Q.find((e) => "privy" === e.walletClientType),
          Z = 0 === R || R > Number(Y) || I,
          ee = async () => {
            let e = Date.now().toString(),
              t = {
                tokenName: "",
                selectedAsset: `${o}-USDC`,
                isSpot: !1,
                selectedSection: d ? "long" : "short",
                leverage: x,
                takeProfit: `$${(0, m.convertIntl)((0, m.roundedNumber)(R))}`,
                isProfit: !1,
                isLoss: !1,
                tokenQuantity: "$" + String(R),
                showTpsl: !1,
              };
            try {
              O(!0),
                (0, w.hlTradeNotifications)({
                  notificationId: e,
                  title: "Updating Margin..",
                  showProgress: !1,
                  autoClose: !1,
                  loading: !0,
                  ...t,
                }),
                await K.switchChain(v.arbitrum.id);
              let s = (0, j.createWalletClient)({
                  account: K?.address,
                  chain: v.arbitrum,
                  transport: (0, N.custom)(await K.getEthereumProvider()),
                }),
                a = await (0, u.updateIsolatedMargin)({
                  wallet: s,
                  index: ((e) => {
                    if (!e) return -1;
                    if (e.includes(":")) {
                      let [t] = e.split(":"),
                        s = H.findIndex((e) => e.name === t) + 1;
                      if (0 === s)
                        return (
                          console.warn(`DEX ${t} not found in perpsDex`),
                          E.findIndex((t) => t.name === e)
                        );
                      let l = U[t];
                      if (!l?.metaAssets)
                        return (
                          console.warn(`No metaAssets found for DEX ${t}`),
                          E.findIndex((t) => t.name === e)
                        );
                      let a = l.metaAssets.findIndex((t) => t.name === e);
                      return -1 === a
                        ? (console.warn(
                            `Asset ${e} not found in DEX ${t} metaAssets`
                          ),
                          E.findIndex((t) => t.name === e))
                        : 1e5 + 1e4 * s + a;
                    }
                    return E.findIndex((t) => t.name === e);
                  })(o),
                  isBuy: d,
                  amount: R,
                  type: $,
                });
              "ok" === a.status
                ? ((0, w.hlTradeNotifications)({
                    title: "Margin Updated",
                    showProgress: !0,
                    isError: !1,
                    ...t,
                  }),
                  l())
                : ((0, w.hlTradeNotifications)({
                    title: a.response || "Something went wrong!",
                    isError: !0,
                    showProgress: !1,
                    autoClose: !0,
                    ...t,
                  }),
                  (0, S.captureErrorToSentry)(
                    a.message ?? JSON.stringify(a),
                    "UpdateIsolatedMarginModal.tsx:handleIsolatedMarginUpdate:else"
                  )),
                O(!1);
            } catch (e) {
              console.error("Error updating isolated margin:", e),
                O(!1),
                (0, w.hlTradeNotifications)({
                  title: "Something went wrong!",
                  isError: !0,
                  showProgress: !1,
                  autoClose: !0,
                  ...t,
                }),
                (0, S.captureErrorToSentry)(
                  e,
                  "UpdateIsolatedMarginModal.tsx:handleIsolatedMarginUpdate:catch"
                );
            } finally {
              y.notifications.hide(e);
            }
          };
        (0, s.useEffect)(() => {
          e &&
            (0, u.getMetaAndAssetCtxs)().then((e) => {
              if (e && e[1]) {
                let t = e[1],
                  s = {};
                t.forEach((e) => {
                  e.coin && (s[e.coin] = e.markPx);
                }),
                  J(s);
              }
            });
        }, [e]),
          (0, s.useEffect)(() => {
            if ("add" === $) {
              let e = o.includes(":")
                  ? V.find(
                      (e) => e.index === U[o?.split(":")[0]]?.collateralToken
                    )?.name
                  : null,
                t = e && m.STABLECOINS_CONFIG.includes(e);
              if (o.includes(":") && t) {
                let t = q?.find((t) => t.coin === e);
                X(
                  M(
                    Number(t ? Number(t?.total || 0) - Number(t?.hold || 0) : 0)
                  )
                );
              } else X(M(Number(W)));
            } else {
              let e = Number(G[o] || a),
                t = Number(T),
                s = Math.abs(Number(C)),
                l = Number(x),
                r = s * e;
              X(M(Math.max(0, t - Math.max(r / l, 0.1 * r))));
            }
          }, [o, $, T, x, C, G, a, W, q, V, U]),
          (0, s.useEffect)(() => {
            if (e)
              if ("add" === $) {
                let e = o.includes(":")
                    ? V.find(
                        (e) => e.index === U[o?.split(":")[0]]?.collateralToken
                      )?.name
                    : null,
                  t = e && m.STABLECOINS_CONFIG.includes(e),
                  s = 0;
                if (o.includes(":") && t) {
                  let t = q?.find((t) => t.coin === e);
                  s = t ? Number(t?.total || 0) - Number(t?.hold || 0) : 0;
                } else s = Number(W);
                _(M(s)), L(100);
              } else _(0), L(0);
          }, [e, $]);
        let et = (0, c.useIsMobile)(),
          es = (0, t.jsxs)("div", {
            className: "pb-4",
            children: [
              (0, t.jsxs)("div", {
                className: "flex gap-2 items-center mb-2",
                children: [
                  (0, t.jsx)("div", {
                    className: "flex-1",
                    children: (0, t.jsx)(b.NumberInput, {
                      classNames: {
                        input:
                          "!border-1 border-solid border-slate-600 !bg-[#17191f] h-11 !pr-12",
                        section: "pr-2",
                      },
                      value: R || "",
                      placeholder: "0.0",
                      clampBehavior: "strict",
                      onChange: (e) => {
                        let t = Number(e);
                        _(t),
                          L(
                            Math.min(
                              100,
                              Math.floor((1e4 * t) / Number(Y)) / 100
                            ) || 0
                          );
                      },
                      min: 0,
                      max: Number(Y),
                      hideControls: !0,
                      allowDecimal: !0,
                      rightSection: (0, t.jsx)(D.Text, {
                        className:
                          "text-grass text-xs cursor-pointer hover:opacity-80 transition-opacity",
                        onClick: () => {
                          _(Y), L(100);
                        },
                        children: "Max",
                      }),
                      rightSectionWidth: 50,
                    }),
                  }),
                  z.ALLOW_REMOVE_MARGIN &&
                    (0, t.jsx)(P.Select, {
                      value: $,
                      onChange: (e) => F(e),
                      data: [
                        { label: "Add", value: "add" },
                        z.ALLOW_REMOVE_MARGIN && {
                          label: "Remove",
                          value: "remove",
                        },
                      ].filter(Boolean),
                      variant: "unstyled",
                      rightSection: (0, t.jsx)(k.IconChevronDown, {
                        size: 14,
                        className: "text-slate-900",
                      }),
                      classNames: {
                        input: "text-white text-sm w-[110px] h-11 !pl-2",
                        root: "bg-[#17191f] border-1 border-solid border-slate-600 rounded-md",
                      },
                    }),
                ],
              }),
              (0, t.jsx)("div", {
                className: "pt-4 pb-2",
                children: (0, t.jsx)(f.Slider, {
                  color: "#00FF2B",
                  value: B,
                  size: 5,
                  min: 0,
                  max: 100,
                  marks: [
                    {
                      value: 100,
                      label: (0, t.jsx)("p", {
                        className: "pr-10",
                        children: `${"add" === $ ? "+" : "-"}$${
                          Math.floor(100 * Number(Y)) / 100
                        }`,
                      }),
                    },
                  ],
                  classNames: {
                    mark: "hidden",
                    markLabel: "text-[12px] text-slate-900 pt-1.5",
                    label: "bg-[#101216] hidden",
                    bar: "bg-gradient-to-r from-[#1f222c] to-primary-500",
                  },
                  onChange: (e) => {
                    L(e), _(M((Number(Y) * e) / 100));
                  },
                }),
              }),
              (0, t.jsxs)("div", {
                className: "space-y-3 pt-6",
                children: [
                  (0, t.jsxs)("div", {
                    className: "flex items-center justify-between",
                    children: [
                      (0, t.jsxs)("div", {
                        className: "text-slate-900 text-xs",
                        children: ["Current margin for ", o, "-USDC"],
                      }),
                      (0, t.jsxs)("div", {
                        className: "text-white text-xs",
                        children: [
                          (0, m.convertIntl)((0, m.roundedNumber)(T)),
                          " USDC",
                        ],
                      }),
                    ],
                  }),
                  (0, t.jsxs)("div", {
                    className: "flex items-center justify-between",
                    children: [
                      (0, t.jsxs)("div", {
                        className: "text-slate-900 text-xs",
                        children: ["Margin available to ", $],
                      }),
                      (0, t.jsxs)("div", {
                        className: "text-white text-xs",
                        children: [
                          (0, m.convertIntl)((0, m.roundedNumber)(Y)),
                          " USDC",
                        ],
                      }),
                    ],
                  }),
                  "remove" === $ &&
                    R > Y &&
                    (0, t.jsxs)("div", {
                      className: "text-red-500 text-[10px] mt-1",
                      children: [
                        "Amount exceeds removable margin (",
                        (0, m.convertIntl)((0, m.roundedNumber)(Y)),
                        " USDC)",
                      ],
                    }),
                ],
              }),
              (0, t.jsx)("div", {
                className: "mt-8",
                children: (0, t.jsx)(r.Button, {
                  color: "#00FF2B",
                  fullWidth: !0,
                  className: `!px-2 !py-2 ${Z ? "!bg-grass/20" : "!bg-grass"}`,
                  classNames: { label: "!text-black" },
                  disabled: Z,
                  onClick: ee,
                  children: "add" === $ ? "Add Margin" : "Remove Margin",
                }),
              }),
            ],
          });
        return et
          ? (0, t.jsx)(h.Drawer, {
              opened: e,
              onClose: l,
              position: "bottom",
              size: "40%",
              title: (0, t.jsx)("div", {
                className: "text-[18px]",
                children: "Adjust Margin for Position",
              }),
              classNames: {
                header: "!bg-[#16171B]",
                body: "!p-4 !overflow-hidden bg-[#16171B]",
                content:
                  "!bg-[#16171B] !rounded-t-2xl !border-t border-[#1F2126]",
                close: "!text-white hover:!bg-slate-200 hover:!text-white/60",
              },
              children: es,
            })
          : (0, t.jsx)(p.Modal, {
              opened: e,
              size: 480,
              centered: !0,
              onClose: l,
              title: (0, t.jsx)("div", {
                className: "text-[18px]",
                children: "Adjust Margin for Position",
              }),
              classNames: {
                header: "!bg-[#16171B]",
                body: "!p-4 !overflow-hidden",
                content: "!bg-[#16171B] !rounded-lg",
                close: "!text-white hover:!bg-slate-200 hover:!text-white/60",
              },
              styles: {
                content: { border: "1px solid #1F2126" },
                header: { borderBottom: "1px solid #1B1E26" },
              },
              children: es,
            });
      };
    function F(...e) {
      return e.filter(Boolean).join(" ");
    }
    let B = ({
        opened: e,
        close: l,
        coin: a,
        currentLeverage: n,
        isCross: o,
        onUpdateSuccess: d,
      }) => {
        let [x, m] = (0, s.useState)(n),
          [T, C] = (0, s.useState)(!1),
          {
            metaAssets: P,
            perpsDex: D,
            perpsMetaAssetsByDex: k,
          } = (0, i.useHyperliquidStore)(
            (0, A.useShallow)((e) => ({
              metaAssets: e.metaAssets,
              perpsDex: e.perpsDex,
              perpsMetaAssetsByDex: e.perpsMetaAssetsByDex,
            }))
          ),
          { wallets: z } = (0, g.useWallets)(),
          M = z.find((e) => "privy" === e.walletClientType);
        (0, s.useEffect)(() => {
          e && m(n);
        }, [e, n]);
        let $ = ((e) => {
            if (!e) return null;
            let t = P.find((t) => t.name === e);
            if (t) return t;
            if (k) {
              for (let s of Object.values(k))
                if (
                  s?.metaAssets?.length &&
                  (t = s.metaAssets.find((t) => t.name === e))
                )
                  return t;
            }
            return null;
          })(a),
          B = $?.maxLeverage || 50,
          L = async () => {
            if (x === n) return;
            C(!0);
            let e = Date.now().toString();
            (0, w.hlTradeNotifications)({
              notificationId: e,
              title: "Updating leverage...",
              showProgress: !1,
              loading: !0,
              autoClose: !1,
              showTpsl: !1,
              showContent: !1,
            });
            try {
              await M.switchChain(v.arbitrum.id);
              let e = (0, j.createWalletClient)({
                  account: M?.address,
                  chain: v.arbitrum,
                  transport: (0, N.custom)(await M.getEthereumProvider()),
                }),
                t = await (0, u.updateLeverage)({
                  wallet: e,
                  value: x,
                  index: a.includes(":")
                    ? (() => {
                        let [e] = a.split(":"),
                          t = D.findIndex((t) => t.name === e) + 1,
                          s = k[e],
                          l = s?.metaAssets.findIndex((e) => e.name === a);
                        return 1e5 + 1e4 * t + l;
                      })()
                    : P.findIndex((e) => e.name === a),
                  isCross: o,
                });
              "ok" === t.status
                ? ((0, w.hlTradeNotifications)({
                    title: "Leverage updated successfully",
                    showProgress: !0,
                    isError: !1,
                    showTpsl: !1,
                    showContent: !1,
                  }),
                  d && d(),
                  l())
                : ((0, w.hlTradeNotifications)({
                    title: t.response || "Failed to update leverage",
                    isError: !0,
                    showProgress: !1,
                    showTpsl: !1,
                    showContent: !1,
                  }),
                  (0, S.captureErrorToSentry)(
                    t.response || JSON.stringify(t),
                    "UpdateLeverageModal.tsx:handleUpdate:else"
                  ));
            } catch (e) {
              console.error("Error updating leverage:", e),
                (0, w.hlTradeNotifications)({
                  title: "Something went wrong!",
                  isError: !0,
                  showProgress: !1,
                  showTpsl: !1,
                  showContent: !1,
                }),
                (0, S.captureErrorToSentry)(
                  e,
                  "UpdateLeverageModal.tsx:handleUpdate:catch"
                );
            } finally {
              y.notifications.hide(e), C(!1);
            }
          },
          I = x === n,
          O = x < 1 || x > B,
          E =
            x > B
              ? {
                  type: "error",
                  text: "Selected leverage exceeds the allowed leverage for this position size.",
                }
              : x < n
              ? {
                  type: "info",
                  text: "Reducing leverage may require additional margin to maintain this position.",
                }
              : x >= 30
              ? {
                  type: "tier",
                  text: "Max position size decreases as leverage increases.",
                }
              : null,
          H = I || O || E?.type === "error",
          U = (0, c.useIsMobile)(),
          q = (0, t.jsxs)("div", {
            className: "flex flex-col",
            children: [
              (0, t.jsx)("div", {
                className: "flex flex-col gap-1",
                children: (0, t.jsxs)("p", {
                  className: "text-slate-900 text-sm leading-relaxed",
                  children: [
                    "Control the leverage used for ",
                    (0, t.jsx)("b", { children: a }),
                    " positions.",
                    (0, t.jsx)("br", {}),
                    "The maximum leverage is ",
                    B,
                    "x.",
                  ],
                }),
              }),
              E &&
                (0, t.jsx)("div", {
                  className: F(
                    "mt-3 p-3 rounded-lg text-[13px] border leading-relaxed transition-all",
                    "error" === E.type
                      ? "bg-red-500/10 border-red-500/20 text-red-400"
                      : "info" === E.type
                      ? "bg-blue-500/10 border-blue-500/20 text-blue-400"
                      : "bg-white/[0.04] border-white/[0.06] text-white/70"
                  ),
                  children: E.text,
                }),
              (0, t.jsxs)("div", {
                className:
                  "mt-[12px] mb-[16px] flex items-center justify-between",
                children: [
                  (0, t.jsx)("span", {
                    className: "text-[13px] text-white/55",
                    children: "Current Leverage",
                  }),
                  (0, t.jsxs)("span", {
                    className: "text-[14px] font-semibold text-[#36D6B5]",
                    children: [n, "x"],
                  }),
                ],
              }),
              (0, t.jsxs)("div", {
                className: "flex flex-col gap-[12px]",
                children: [
                  (0, t.jsxs)("div", {
                    className: "flex items-center justify-between",
                    children: [
                      (0, t.jsx)("div", {
                        className: "text-slate-900 text-sm",
                        children: "Leverage",
                      }),
                      (0, t.jsx)("div", {
                        className: "w-[80px]",
                        children: (0, t.jsx)(b.NumberInput, {
                          value: x,
                          onChange: (e) => m(Number(e)),
                          min: 1,
                          max: B,
                          hideControls: !0,
                          rightSection: (0, t.jsx)("span", {
                            className: "text-white/45 pr-2 text-xs",
                            children: "x",
                          }),
                          classNames: {
                            input:
                              "!bg-[#0B0F16] !border-white/[0.08] !rounded-[10px] !text-[#E6EDF3] !h-[36px] !text-center !font-normal !pl-4 !pr-6",
                            section: "!w-auto !pointer-events-none",
                          },
                        }),
                      }),
                    ],
                  }),
                  (0, t.jsxs)("div", {
                    className: "flex flex-col gap-[8px] px-1",
                    children: [
                      (0, t.jsx)(f.Slider, {
                        value: x,
                        onChange: m,
                        min: 1,
                        max: B,
                        step: 1,
                        label: (e) => `${e}x`,
                        classNames: {
                          mark: "hidden",
                          label: "bg-[#101216]",
                          bar: "bg-gradient-to-r from-[#1f222c] to-primary-500",
                        },
                      }),
                      (0, t.jsxs)("div", {
                        className:
                          "flex items-center justify-between text-[12px] text-white/45",
                        children: [
                          (0, t.jsx)("span", { children: "1x" }),
                          (0, t.jsxs)("span", { children: [B, "x"] }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, t.jsxs)("div", {
                className: "flex flex-col gap-4 mt-8",
                children: [
                  (0, t.jsx)(r.Button, {
                    fullWidth: !0,
                    onClick: L,
                    loading: T,
                    disabled: H,
                    className: F(
                      "!h-10 !rounded-lg font-semibold text-sm transition-all",
                      H
                        ? "!bg-primary-500/20 !text-white/30"
                        : "!bg-primary-500 !text-white hover:brightness-110 active:scale-[0.98]"
                    ),
                    children: "Confirm",
                  }),
                  (0, t.jsx)("div", {
                    className:
                      "bg-warning/10 border border-warning/20 rounded-lg p-3",
                    children: (0, t.jsx)("p", {
                      className: "text-warning text-[12px] text-center",
                      children:
                        "Note that setting a higher leverage increases the risk of liquidation.",
                    }),
                  }),
                ],
              }),
            ],
          });
        return U
          ? (0, t.jsx)(h.Drawer, {
              opened: e,
              onClose: l,
              position: "bottom",
              size: "80%",
              title: (0, t.jsx)("div", {
                className: "font-semibold text-[18px]",
                children: "Adjust Leverage",
              }),
              classNames: {
                header: "!bg-[#16171B]",
                body: "!p-4 !px-6 !overflow-hidden bg-[#16171B]",
                content:
                  "!bg-[#16171B] !rounded-t-2xl !border-t border-[#1F2126]",
                close: "!text-white hover:!bg-slate-200 hover:!text-white/60",
              },
              children: q,
            })
          : (0, t.jsx)(p.Modal, {
              opened: e,
              onClose: l,
              centered: !0,
              size: 440,
              title: (0, t.jsx)("div", {
                className: "font-semibold text-[18px]",
                children: "Adjust Leverage",
              }),
              classNames: {
                header: "!bg-[#16171B]",
                body: "!p-4 !px-6 !overflow-hidden",
                content: "!bg-[#16171B] !rounded-lg",
                close: "!text-white hover:!bg-slate-200 hover:!text-white/60",
              },
              styles: {
                content: { border: "1px solid #1F2126" },
                header: { borderBottom: "1px solid #1B1E26" },
              },
              children: q,
            });
      },
      L = {
        src: e.i(516504).default,
        width: 10,
        height: 10,
        blurWidth: 0,
        blurHeight: 0,
      };
    e.s(["default", 0, L], 79145);
    var I = e.i(22909);
    let O = ({
      opened: e,
      close: l,
      currentPrice: a,
      liquidationPrice: n,
      entryPrice: o,
      maxSize: d,
      coin: T,
      isLong: C,
      leverage: P,
      setCurrentTab: D,
    }) => {
      let [k, z] = (0, s.useState)(0),
        [M, $] = (0, s.useState)(0),
        [F, B] = (0, s.useState)(0),
        [L, O] = (0, s.useState)(0),
        [E, H] = (0, s.useState)(!1),
        [U, q] = (0, s.useState)(0),
        [W, V] = (0, s.useState)(0),
        [R, _] = (0, s.useState)(!1),
        [Y, X] = (0, s.useState)(d),
        [G, J] = (0, s.useState)(100),
        [Q, K] = (0, s.useState)(!1),
        Z = C ? F > 0 && F < a : F > 0 && F > a,
        ee = C ? L > 0 && L > a : L > 0 && L < a,
        {
          metaAssets: et,
          openOrders: es,
          perpsSzDecimals: el,
          perpsDex: ea,
          perpsMetaAssetsByDex: er,
        } = (0, i.useHyperliquidStore)(
          (0, A.useShallow)((e) => ({
            metaAssets: e.metaAssets,
            openOrders: e.openOrders,
            perpsSzDecimals: e.perpsSzDecimals,
            perpsDex: e.perpsDex,
            perpsMetaAssetsByDex: e.perpsMetaAssetsByDex,
          }))
        ),
        ei = R && Y > d,
        en = R && (Y <= 0 || Y > d),
        eo = E && U > 0 && !F,
        ed = E && W > 0 && !L,
        { wallets: ec } = (0, g.useWallets)(),
        ex = ec.find((e) => "privy" === e.walletClientType),
        eu = (e) => {
          if (!e) return null;
          let t = et.find((t) => t.name === e);
          if (t) return t;
          if (e.includes(":") && er) {
            let [s] = e.split(":"),
              l = er[s];
            if (
              l?.metaAssets?.length &&
              (t = l.metaAssets.find((t) => t.name === e))
            )
              return t;
          }
          return null;
        },
        em = (e) => {
          if (!e) return -1;
          if (e.includes(":")) {
            let [t] = e.split(":"),
              s = ea.findIndex((e) => e.name === t) + 1;
            if (0 === s)
              return (
                console.warn(`DEX ${t} not found in perpsDex`),
                et.findIndex((t) => t.name === e)
              );
            let l = er[t];
            if (!l?.metaAssets)
              return (
                console.warn(`No metaAssets found for DEX ${t}`),
                et.findIndex((t) => t.name === e)
              );
            let a = l.metaAssets.findIndex((t) => t.name === e);
            return -1 === a
              ? (console.warn(`Asset ${e} not found in DEX ${t} metaAssets`),
                et.findIndex((t) => t.name === e))
              : 1e5 + 1e4 * s + a;
          }
          return et.findIndex((t) => t.name === e);
        },
        eh = R ? Y : d,
        ep = (C && eh * (F - o) > 0) || (!C && eh * (o - F) > 0),
        eb = (C && eh * (F - o) < 0) || (!C && eh * (o - F) < 0),
        ef = (C && eh * (L - o) > 0) || (!C && eh * (o - L) > 0),
        eg = (C && eh * (L - o) < 0) || (!C && eh * (o - L) < 0),
        ej = es?.find(
          (e) =>
            e.coin === T &&
            e.isTrigger &&
            e.reduceOnly &&
            !e.isPositionTpsl &&
            Number(e.sz) > 0 &&
            e.orderType?.toLowerCase().includes("take")
        ),
        eN = es?.find(
          (e) =>
            e.coin === T &&
            e.isTrigger &&
            e.reduceOnly &&
            !e.isPositionTpsl &&
            Number(e.sz) > 0 &&
            e.orderType?.toLowerCase().includes("stop")
        ),
        ev = ej && Number(ej.sz) === Number(d),
        eT = eN && Number(eN.sz) === Number(d);
      ej && ej.sz, eN && eN.sz;
      let ew = ev && eT,
        ey = async (e, t) => {
          await ex.switchChain(v.arbitrum.id);
          let s = (0, j.createWalletClient)({
            account: ex?.address,
            chain: v.arbitrum,
            transport: (0, N.custom)(await ex.getEthereumProvider()),
          });
          try {
            await (0, u.cancelOrder)({ wallet: s, cancels: e }),
              "tp" === t
                ? (B(0), q(0), z(0))
                : "sl" === t && (O(0), V(0), $(0));
          } catch (e) {
            console.log(e);
          }
        },
        eS = async () => {
          let e = Date.now().toString(),
            t = R ? Y : d,
            s = C ? t * (F - o) : t * (o - F),
            a = C ? t * (L - o) : t * (o - L),
            r = {
              tokenName: T,
              selectedAsset: `${T}-USDC`,
              isSpot: !1,
              selectedSection: C ? "long" : "short",
              leverage: String(P),
              takeProfit: F
                ? String((0, m.convertIntl)((0, m.roundedNumber)(s)))
                : L
                ? String((0, m.convertIntl)((0, m.roundedNumber)(a)))
                : "0",
              isProfit: F ? ep : !!L && ef,
              isLoss: F ? eb : !!L && eg,
              tokenQuantity: String(t),
              showTpsl: !0,
            };
          if (ew && R)
            return void (0, w.hlTradeNotifications)({
              title:
                "Full TP and SL already exist. Cancel them before configuring partial TP/SL.",
              isError: !0,
              autoClose: !0,
              ...r,
            });
          try {
            K(!0),
              (0, w.hlTradeNotifications)({
                notificationId: e,
                title: "Placing TP/SL Order..",
                showProgress: !1,
                autoClose: !1,
                loading: !0,
                ...r,
              }),
              await ex.switchChain(v.arbitrum.id);
            let s = (0, j.createWalletClient)({
                account: ex?.address,
                chain: v.arbitrum,
                transport: (0, N.custom)(await ex.getEthereumProvider()),
              }),
              a = [],
              i = eu(T),
              n = em(T);
            if (L) {
              let e = E && W > 0,
                s = e ? W : C ? 0.9 * L : 1.1 * L;
              a.push({
                a: n,
                b: !C,
                p: String((0, u.formatHyperliquidPrice)(s, i?.szDecimals)),
                r: !0,
                s: String((0, u.formatHyperliquidSize)(t, i?.szDecimals)),
                t: {
                  trigger: {
                    isMarket: !e,
                    tpsl: "sl",
                    triggerPx: String(
                      (0, u.formatHyperliquidPrice)(L, i?.szDecimals)
                    ),
                  },
                },
              });
            }
            if (F) {
              let e = E && U > 0,
                s = e ? U : C ? 0.9 * F : 1.1 * F;
              a.push({
                a: n,
                b: !C,
                p: String((0, u.formatHyperliquidPrice)(s, i?.szDecimals)),
                r: !0,
                s: String((0, u.formatHyperliquidSize)(t, i?.szDecimals)),
                t: {
                  trigger: {
                    isMarket: !e,
                    tpsl: "tp",
                    triggerPx: String(
                      (0, u.formatHyperliquidPrice)(F, i?.szDecimals)
                    ),
                  },
                },
              });
            }
            if (!a.length) throw Error("No TPSL orders to submit");
            let o = await (0, u.placeOrder)({
                wallet: s,
                orders: a,
                grouping: "positionTpsl",
              }),
              d = (0, u.handleHyperliquidResponse)(o);
            d?.success
              ? (q(0),
                V(0),
                z(0),
                $(0),
                (0, w.hlTradeNotifications)({
                  title: "TP/SL Order Placed",
                  showProgress: !0,
                  isError: !1,
                  ...r,
                }),
                R && D?.("openOrders"),
                l())
              : ((0, w.hlTradeNotifications)({
                  title: d.message || "Something went wrong!",
                  isError: !0,
                  showProgress: !1,
                  autoClose: !0,
                  ...r,
                }),
                (0, S.captureErrorToSentry)(
                  d.message ?? JSON.stringify(d),
                  "UpdateTPSLModal.tsx:handlePlaceOrder:else"
                ));
          } catch (e) {
            (0, w.hlTradeNotifications)({
              title: "Something went wrong!",
              isError: !0,
              showProgress: !1,
              autoClose: !0,
              ...r,
            }),
              (0, S.captureErrorToSentry)(
                e,
                "UpdateTPSLModal.tsx:handlePlaceOrder:catch"
              );
          } finally {
            K(!1), y.notifications.hide(e);
          }
        };
      (0, s.useEffect)(() => {
        ew && (_(!1), H(!1));
      }, [ew]);
      let eC =
          ej &&
          eN &&
          F === Number(ej.triggerPx) &&
          L === Number(eN.triggerPx) &&
          !R &&
          !E,
        eP = Q || !(L || F) || en || eC || eo || ed || (ew && R),
        eD = (0, c.useIsMobile)(),
        ek = (0, t.jsxs)("div", {
          children: [
            (0, t.jsxs)("div", {
              className: "flex justify-between items-center gap-2 mb-6",
              children: [
                (0, t.jsxs)("div", {
                  className: "text-xs mb-1",
                  children: [
                    (0, t.jsx)("div", {
                      className: "text-slate-900 text-[12px]",
                      children: "Entry Price",
                    }),
                    (0, t.jsxs)("div", {
                      className: "text-white font-medium text-[14px] pt-0.5",
                      children: [
                        "$",
                        (0, m.truncateToDecimals)(o, 6 - (el[T] || 0)),
                      ],
                    }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  className: "text-xs mb-1",
                  children: [
                    (0, t.jsx)("div", {
                      className: "text-slate-900 text-[12px]",
                      children: "Position",
                    }),
                    (0, t.jsxs)("div", {
                      className: (0, x.default)(
                        "font-medium text-[14px] pt-0.5",
                        { "text-grass": C, "text-blood": !C }
                      ),
                      children: [d, " ", T],
                    }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  className: "text-xs mb-1",
                  children: [
                    (0, t.jsx)("div", {
                      className: "text-slate-900 text-[12px]",
                      children: "Mark Price",
                    }),
                    (0, t.jsxs)("div", {
                      className: "text-white font-medium text-[14px] pt-0.5",
                      children: ["$", (0, m.truncateToDecimals)(a, 6 - el[T])],
                    }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  className: "text-xs mb-1 text-right",
                  children: [
                    (0, t.jsx)("div", {
                      className: "text-slate-900 text-[12px]",
                      children: "Liq. Price",
                    }),
                    (0, t.jsxs)("div", {
                      className: "text-white font-medium text-[14px] pt-0.5",
                      children: ["$", Number(n).toFixed(6 - el[T])],
                    }),
                  ],
                }),
              ],
            }),
            ev
              ? (0, t.jsx)("div", {
                  className: "pt-2",
                  children: (0, t.jsxs)("div", {
                    className:
                      "border border-[#23262F] bg-[#0F1116] rounded-lg px-4 py-3 hover:border-[#2E323D] transition-colors mb-3",
                    children: [
                      (0, t.jsxs)("div", {
                        className: "flex items-center justify-between mb-2",
                        children: [
                          (0, t.jsx)("div", {
                            className: "text-sm font-semibold text-neutral-200",
                            children: "Take Profit",
                          }),
                          (0, t.jsx)("button", {
                            onClick: () => ey([{ a: em(T), o: ej.oid }], "tp"),
                            className:
                              "text-xs text-red-400 hover:text-red-300 transition-colors",
                            children: "Cancel",
                          }),
                        ],
                      }),
                      (0, t.jsxs)("div", {
                        className: "text-xs text-neutral-400 mb-1",
                        children: [
                          "Price ",
                          C ? "above" : "below",
                          " ",
                          ej.triggerPx,
                        ],
                      }),
                      (0, t.jsxs)("div", {
                        className: "text-xs text-neutral-400",
                        children: [
                          "Expected profit:",
                          " ",
                          (0, t.jsxs)("span", {
                            className: "text-emerald-400 font-medium",
                            children: [
                              (0, m.convertIntl)(
                                (0, m.roundedNumber)(
                                  Math.abs(
                                    Number(ej.sz) * (Number(ej.triggerPx) - o)
                                  )
                                )
                              ),
                              " ",
                              "USDC",
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                })
              : null,
            eT
              ? (0, t.jsx)("div", {
                  className: "pt-2",
                  children: (0, t.jsxs)("div", {
                    className:
                      "border border-[#23262F] bg-[#0F1116] rounded-lg px-4 py-3 hover:border-[#2E323D] transition-colors mb-3",
                    children: [
                      (0, t.jsxs)("div", {
                        className: "flex items-center justify-between mb-2",
                        children: [
                          (0, t.jsx)("div", {
                            className: "text-sm font-semibold text-neutral-200",
                            children: "Stop Loss",
                          }),
                          (0, t.jsx)("button", {
                            onClick: () => ey([{ a: em(T), o: eN.oid }], "sl"),
                            className:
                              "text-xs text-red-400 hover:text-red-300 transition-colors",
                            children: "Cancel",
                          }),
                        ],
                      }),
                      (0, t.jsxs)("div", {
                        className: "text-xs text-neutral-400 mb-1",
                        children: [
                          "Price ",
                          C ? "below" : "above",
                          " ",
                          eN.triggerPx,
                        ],
                      }),
                      (0, t.jsxs)("div", {
                        className: "text-xs text-neutral-400",
                        children: [
                          "Expected loss:",
                          " ",
                          (0, t.jsxs)("span", {
                            className: "text-red-400 font-medium",
                            children: [
                              (0, m.convertIntl)(
                                (0, m.roundedNumber)(
                                  Math.abs(
                                    Number(eN.sz) * (Number(eN.triggerPx) - o)
                                  )
                                )
                              ),
                              " ",
                              "USDC",
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                })
              : null,
            ev
              ? null
              : (0, t.jsxs)("div", {
                  className: "grid grid-cols-5 gap-3",
                  children: [
                    (0, t.jsxs)("div", {
                      className: "col-span-4",
                      children: [
                        (0, t.jsx)("div", {
                          className: "text-xs pb-1 text-slate-900",
                          children: "TP Price",
                        }),
                        (0, t.jsx)(b.NumberInput, {
                          variant: "unstyled",
                          hideControls: !0,
                          classNames: {
                            input:
                              "border-1 border-ash hover:border-slate-600 bg-black/40 hover:bg-black rounded-sm pl-2 text-sm text-white",
                          },
                          value: F || "",
                          min: 0,
                          clampBehavior: "strict",
                          size: "sm",
                          onChange: (e) => {
                            e
                              ? (B(Number(e)),
                                z(
                                  (0, m.roundedNumber)(
                                    C
                                      ? ((Number(e) - o) / o) * 100 * P
                                      : -(100 * ((Number(e) - o) / o)) * P
                                  )
                                ))
                              : (B(0), z(0));
                          },
                          placeholder: "Enter Trigger Price",
                        }),
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      children: [
                        (0, t.jsx)("div", {
                          className: "text-xs pb-1 text-slate-900",
                          children: "TP %",
                        }),
                        (0, t.jsx)(b.NumberInput, {
                          variant: "unstyled",
                          classNames: {
                            input:
                              "border-1 border-ash hover:border-slate-600 bg-black/40 hover:bg-black rounded-sm pl-2 text-sm text-white",
                          },
                          value: k || "",
                          size: "sm",
                          onChange: (e) => {
                            e && Number(e) > 0
                              ? (C
                                  ? B(
                                      (o * (1 + Number(e) / (100 * P))).toFixed(
                                        6 - el[T]
                                      )
                                    )
                                  : B(
                                      (o * (1 - Number(e) / (100 * P))).toFixed(
                                        6 - el[T]
                                      )
                                    ),
                                z(Number(e)))
                              : (B(0), z(0));
                          },
                          placeholder: "0.00",
                          min: 0,
                          clampBehavior: "strict",
                        }),
                      ],
                    }),
                  ],
                }),
            eT
              ? null
              : (0, t.jsxs)("div", {
                  className: "pt-5 grid grid-cols-5 gap-3",
                  children: [
                    (0, t.jsxs)("div", {
                      className: "col-span-4",
                      children: [
                        (0, t.jsx)("div", {
                          className: "text-xs pb-1 text-slate-900",
                          children: "SL Price",
                        }),
                        (0, t.jsx)(b.NumberInput, {
                          variant: "unstyled",
                          hideControls: !0,
                          classNames: {
                            input:
                              "border-1 border-ash hover:border-slate-600 bg-black/40 hover:bg-black rounded-sm pl-2 text-sm text-white",
                          },
                          min: 0,
                          clampBehavior: "strict",
                          size: "sm",
                          onChange: (e) => {
                            e
                              ? (O(Number(e)),
                                $(
                                  (0, m.roundedNumber)(
                                    C
                                      ? Number(
                                          ((o - Number(e)) / o) *
                                            100 *
                                            Number(P)
                                        )
                                      : Number(
                                          ((Number(e) - o) / o) *
                                            100 *
                                            Number(P)
                                        )
                                  )
                                ))
                              : (O(0), $(0));
                          },
                          value: L || "",
                          placeholder: "Enter SL Price",
                        }),
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      children: [
                        (0, t.jsx)("div", {
                          className: "text-xs pb-1 text-slate-900",
                          children: "SL %",
                        }),
                        (0, t.jsx)(b.NumberInput, {
                          variant: "unstyled",
                          classNames: {
                            input:
                              "border-1 border-ash hover:border-slate-600 bg-black/40 hover:bg-black rounded-sm pl-2 text-sm text-white",
                          },
                          size: "sm",
                          value: M || "",
                          onChange: (e) => {
                            e
                              ? (C
                                  ? O(
                                      (o * (1 - Number(e) / (100 * P))).toFixed(
                                        6 - el[T]
                                      )
                                    )
                                  : O(
                                      (o * (1 + Number(e) / (100 * P))).toFixed(
                                        6 - el[T]
                                      )
                                    ),
                                $(Number(e)))
                              : (O(0), $(0));
                          },
                          placeholder: "0.00",
                          min: 0,
                          clampBehavior: "strict",
                        }),
                      ],
                    }),
                  ],
                }),
            (0, t.jsxs)("div", {
              className: "flex flex-col gap-3 mt-6",
              children: [
                (0, t.jsx)("div", {
                  className: ew ? "opacity-40 pointer-events-none" : "",
                  children: (0, t.jsx)(I.default, {
                    label: (0, t.jsx)("span", {
                      className: "text-xs font-semibold text-neutral-400",
                      children: "Configure Amount",
                    }),
                    checked: R,
                    disabled: ew,
                    onChange: (e) => _(e.currentTarget.checked),
                  }),
                }),
                ew &&
                  (0, t.jsx)("div", {
                    className: "text-[11px] text-neutral-500 mt-1 pl-1",
                    children:
                      "Full TP/SL already exists. Cancel them before configuring partial TP/SL.",
                  }),
                R &&
                  !ew &&
                  (0, t.jsxs)("div", {
                    className:
                      "mb-2 animate-in fade-in slide-in-from-top-2 duration-300 px-1",
                    children: [
                      (0, t.jsxs)("div", {
                        className: "flex items-center gap-4 h-11",
                        children: [
                          (0, t.jsx)("div", {
                            className: "flex-[4]",
                            children: (0, t.jsx)(f.Slider, {
                              size: "sm",
                              value: G,
                              onChange: (e) => {
                                J(e);
                                let t = eu(T)?.szDecimals || 2;
                                X(Number(((d * e) / 100).toFixed(t)));
                              },
                              marks: [
                                { value: 0, label: "0%" },
                                { value: 25, label: "25%" },
                                { value: 50, label: "50%" },
                                { value: 75, label: "75%" },
                                { value: 100, label: "100%" },
                              ],
                              classNames: {
                                mark: "hidden",
                                markLabel:
                                  "text-[10px] text-neutral-600 pt-1.5 font-bold",
                                label: "bg-[#101216]",
                                track:
                                  "bg-neutral-800/80 before:hidden after:hidden h-1 rounded-full !mb-1",
                                bar: "bg-grass h-1 rounded-full",
                                thumb: "border-grass bg-grass ring-0 h-4 w-4",
                              },
                            }),
                          }),
                          (0, t.jsxs)("div", {
                            className: (0, x.default)(
                              "flex-[1.2] flex items-center bg-black/40 border rounded-md px-2 h-9 hover:border-slate-600 transition-colors",
                              ei ? "border-red-500" : "border-ash"
                            ),
                            children: [
                              (0, t.jsx)(b.NumberInput, {
                                variant: "unstyled",
                                hideControls: !0,
                                value: Y || "",
                                onChange: (e) => {
                                  let t = Number(e);
                                  X(t), d > 0 && J(t > d ? 100 : (t / d) * 100);
                                },
                                classNames: {
                                  input:
                                    "text-xs text-white font-bold w-full h-full",
                                },
                                placeholder: "0.00",
                                decimalScale: eu(T)?.szDecimals || 2,
                                clampBehavior: "strict",
                              }),
                              (0, t.jsx)("span", {
                                className:
                                  "text-[10px] font-bold text-neutral-500 ml-1 whitespace-nowrap",
                                children: T,
                              }),
                            ],
                          }),
                        ],
                      }),
                      ei &&
                        (0, t.jsx)("div", {
                          className:
                            "text-[10px] text-red-500 font-semibold mt-1 animate-in fade-in slide-in-from-top-1",
                          children:
                            "Amount cannot exceed current position size",
                        }),
                    ],
                  }),
                (0, t.jsxs)("div", {
                  className: "mt-2",
                  children: [
                    (0, t.jsx)("div", {
                      className: ew ? "opacity-40 pointer-events-none" : "",
                      children: (0, t.jsx)(I.default, {
                        label: (0, t.jsx)("span", {
                          className: "text-xs font-semibold text-neutral-400",
                          children: "Limit Price",
                        }),
                        checked: E,
                        disabled: ew,
                        onChange: (e) => H(e.currentTarget.checked),
                      }),
                    }),
                    ew &&
                      (0, t.jsx)("div", {
                        className: "text-[11px] text-neutral-500 mt-1 pl-1",
                        children:
                          "Full TP/SL already exists. Cancel them before modifying limit execution.",
                      }),
                    E &&
                      !ew &&
                      (0, t.jsxs)("div", {
                        className:
                          "mt-4 grid grid-cols-2 gap-[12px] animate-in fade-in slide-in-from-top-2 duration-300",
                        children: [
                          (0, t.jsxs)("div", {
                            children: [
                              (0, t.jsx)("div", {
                                className: "text-xs pb-1 text-slate-900",
                                children: "TP Limit Price",
                              }),
                              (0, t.jsx)(b.NumberInput, {
                                variant: "unstyled",
                                hideControls: !0,
                                classNames: {
                                  input:
                                    "border-1 border-ash hover:border-slate-600 bg-black/40 hover:bg-black rounded-sm pl-2 text-sm text-white h-9",
                                },
                                value: U || "",
                                onChange: (e) => q(Number(e)),
                                placeholder: "0.00",
                                min: 0,
                                size: "sm",
                              }),
                            ],
                          }),
                          (0, t.jsxs)("div", {
                            children: [
                              (0, t.jsx)("div", {
                                className: "text-xs pb-1 text-slate-900",
                                children: "SL Limit Price",
                              }),
                              (0, t.jsx)(b.NumberInput, {
                                variant: "unstyled",
                                hideControls: !0,
                                classNames: {
                                  input:
                                    "border-1 border-ash hover:border-slate-600 bg-black/40 hover:bg-black rounded-sm pl-2 text-sm text-white h-9",
                                },
                                value: W || "",
                                onChange: (e) => V(Number(e)),
                                placeholder: "0.00",
                                min: 0,
                                size: "sm",
                              }),
                            ],
                          }),
                        ],
                      }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  className: "mt-4",
                  children: [
                    !ew &&
                      (0, t.jsx)(r.Button, {
                        fullWidth: !0,
                        classNames: { label: "!text-black" },
                        className: `!px-2 !py-1 ${
                          eP ? "!bg-grass/20" : "!bg-grass"
                        }`,
                        onClick: () => {
                          Z
                            ? (0, w.hlTradeNotifications)({
                                title: `Take Profit ($${F}) is ${
                                  C ? "below" : "above"
                                } the mark price ($${Number(a).toFixed(
                                  2
                                )}) — position will close immediately at market price.`,
                                isError: !0,
                                autoClose: !0,
                                showContent: !1,
                              })
                            : ee
                            ? (0, w.hlTradeNotifications)({
                                title: `Stop Loss ($${L}) is ${
                                  C ? "above" : "below"
                                } the mark price ($${Number(a).toFixed(
                                  2
                                )}) — position will close immediately at market price.`,
                                isError: !0,
                                autoClose: !0,
                                showContent: !1,
                              })
                            : eS();
                        },
                        disabled: eP,
                        children: "Confirm TP/SL",
                      }),
                    ew &&
                      (0, t.jsxs)("div", {
                        className:
                          "text-[11px] text-neutral-500 text-center my-4",
                        children: [
                          "Both take-profit and stop-loss are already configured for this position.",
                          (0, t.jsx)("br", {}),
                          "Cancel an existing order to modify TP/SL.",
                        ],
                      }),
                  ],
                }),
              ],
            }),
            !ew &&
              (0, t.jsxs)("div", {
                className:
                  "pt-2 text-xs text-slate-900 text-center leading-relaxed",
                children: [
                  "By default take-profit and stop-loss orders apply to the entire position. Take-profit and stop-loss automatically cancel after closing the position. A market order is triggered when the stop loss or take profit price is reached.",
                  (0, t.jsx)("br", {}),
                  "If the order size is configured above, the TP/SL order will be for that size no matter how the position changes in the future.",
                ],
              }),
          ],
        });
      return eD
        ? (0, t.jsx)(h.Drawer, {
            opened: e,
            onClose: l,
            position: "bottom",
            size: "70%",
            title: (0, t.jsx)("div", {
              className: "font-semibold text-[18px]",
              children: "Add TP/SL",
            }),
            classNames: {
              header: "!bg-[#16171B]",
              body: "!p-4 !px-4 !overflow-hidden bg-[#16171B]",
              content:
                "!bg-[#16171A] !rounded-t-2xl !border-t border-[#1F2126]",
              close: "!text-white hover:!bg-slate-200 hover:!text-white/60",
            },
            children: ek,
          })
        : (0, t.jsx)(p.Modal, {
            opened: e,
            size: 520,
            centered: !0,
            onClose: l,
            title: (0, t.jsx)("div", {
              className: "font-semibold text-[18px]",
              children: "Add TP/SL",
            }),
            classNames: {
              header: "!bg-[#16171B]",
              body: "!p-4 !px-4 !overflow-hidden",
              content: "!bg-[#16171A] !rounded-lg",
              close: "!text-white hover:!bg-slate-200 hover:!text-white/60",
            },
            styles: {
              content: { border: "1px solid #1F2126" },
              header: { borderBottom: "1px solid #1B1E26" },
            },
            children: ek,
          });
    };
    var E = e.i(618566),
      H = e.i(308794),
      U = e.i(295374),
      q = e.i(194390),
      W = e.i(398949),
      V = e.i(81341);
    let R = ({
      tableSize: e = "large",
      variant: l = "tabs",
      isSocial: a = !1,
      setCurrentTab: r,
    }) => {
      let {
          assetPositions: n,
          openOrders: u,
          selectedAsset: h,
          perpsSzDecimals: p,
          clearinghouseStateByDex: b,
          perpsDex: f,
          openOrdersByDex: j,
        } = (0, i.useHyperliquidStore)(
          (0, A.useShallow)((e) => ({
            assetPositions: a ? e.socialAssetPositions : e.assetPositions,
            openOrders: a ? e.socialOpenOrders : e.openOrders,
            selectedAsset: e.selectedAsset,
            perpsSzDecimals: a ? e.socialPerpsSzDecimals : e.perpsSzDecimals,
            clearinghouseStateByDex: a
              ? e.socialClearinghouseStateByDex
              : e.clearinghouseStateByDex,
            perpsDex: a ? e.socialPerpsDex : e.perpsDex,
            openOrdersByDex: a ? e.socialOpenOrdersByDex : e.openOrdersByDex,
          }))
        ),
        [N, v] = (0, s.useState)(!0),
        [w, y] = (0, s.useState)(0),
        [S, P] = (0, s.useState)(""),
        [D, k] = (0, s.useState)(0),
        [M, F] = (0, s.useState)(0),
        [I, R] = (0, s.useState)(0),
        [_, Y] = (0, s.useState)(!1),
        [X, { open: G, close: J }] = (0, d.useDisclosure)(!1),
        [Q, { open: K, close: Z }] = (0, d.useDisclosure)(!1),
        [ee, { open: et, close: es }] = (0, d.useDisclosure)(!1),
        [el, { open: ea, close: er }] = (0, d.useDisclosure)(!1),
        [ei, en] = (0, s.useState)(!1),
        [eo, ed] = (0, s.useState)(0),
        [ec, ex] = (0, s.useState)(!1),
        [eu, em] = (0, s.useState)(null),
        [eh, { open: ep, close: eb }] = (0, d.useDisclosure)(!1),
        [ef, { open: eg, close: ej }] = (0, d.useDisclosure)(!1),
        [eN, ev] = (0, s.useState)(null),
        [eT, ew] = (0, s.useState)(""),
        [ey, eS] = (0, s.useState)(0),
        [eC, eP] = (0, s.useState)(0),
        [eD, ek] = (0, s.useState)(null),
        eA = (0, c.useIsMobile)(),
        ez = (0, E.useRouter)(),
        { unsubscribe: eM } = (0, q.useHyperliquidWebSocket)(),
        e$ = (e) => {
          let t =
              Number(e?.position?.positionValue) /
              Math.abs(Number(e.position.szi)),
            s = Math.abs(Number(e?.position?.szi)),
            l = Number(e?.position?.entryPx),
            a = Number(e?.position?.leverage?.value),
            r = Number(e?.position?.szi) > 0 ? (t - l) * s : (l - t) * s,
            i =
              Number(e?.position?.szi) > 0
                ? ((t - l) / l) * a * 100
                : ((l - t) / l) * a * 100,
            n = Number(e?.position?.szi) > 0,
            o = (0, m.convertIntl)(
              (0, m.truncateToDecimals)(
                Number(e?.position?.entryPx),
                6 - p[e.position.coin]
              ),
              !1
            ),
            d = (0, m.convertIntl)(
              (0, m.truncateToDecimals)(
                Number(e?.position?.positionValue) /
                  Math.abs(Number(e.position.szi)),
                6 - p[e.position.coin]
              ),
              !1
            ),
            c = e?.position?.liquidationPx
              ? (0, m.convertIntl)(
                  (0, m.truncateToDecimals)(
                    Number(e?.position?.liquidationPx),
                    6 - p[e.position.coin]
                  ),
                  !1
                )
              : "N/A",
            x = eU?.filter(
              (t) =>
                ("Take Profit Market" === t.orderType ||
                  "Take Profit Limit" === t.orderType) &&
                t.coin === e?.position?.coin
            ),
            u = eU?.filter(
              (t) =>
                ("Stop Market" === t.orderType ||
                  "Stop Limit" === t.orderType) &&
                t.coin === e?.position?.coin
            ),
            h = x[0]?.triggerPx,
            b = u[0]?.triggerPx,
            f =
              x.length > 1 ||
              u.length > 1 ||
              (1 === x.length && Math.abs(Number(x[0].sz)) !== s) ||
              (1 === u.length && Math.abs(Number(u[0].sz)) !== s);
          return {
            currentPrice: t,
            size: s,
            entryPrice: l,
            leverage: a,
            pnl: r,
            pnlPercentage: i,
            isLong: n,
            entryPriceDiv: o,
            markPriceDiv: d,
            liquidationPriceDIv: c,
            tpPrice: h,
            slPrice: b,
            isPartialTpsl: f,
          };
        },
        eF = (e) => {
          e !== h &&
            (eM({ type: "l2Book", coin: h }),
            eM({ type: "trades", coin: h }),
            eM({ type: "activeAssetCtx", coin: h })),
            eE?.address &&
              eM({ type: "activeAssetData", coin: h, user: eE?.address }),
            ez.replace(`/trade/crypto-perps/${e}`);
        },
        eB = (e) => {
          R(e?.position?.liquidationPx),
            P(e.position.coin),
            k(
              Number(
                Number(e?.position?.positionValue) /
                  Math.abs(Number(e.position.szi))
              )
            ),
            F(e?.position?.entryPx),
            y(Math.abs(Number(e?.position?.szi))),
            en(Number(e?.position?.szi) > 0),
            ed(Number(e?.position?.leverage?.value)),
            et();
        },
        eL = (e, t) => {
          P(e.position.coin),
            y(Math.abs(Number(e?.position?.szi))),
            v(t),
            Y(!(0 > Number(e?.position?.szi))),
            k(
              Number(
                Number(e?.position?.positionValue) /
                  Math.abs(Number(e.position.szi))
              )
            ),
            ed(Number(e?.position?.leverage?.value)),
            F(e?.position?.entryPx),
            G();
        },
        eI = (e) => {
          R(e?.position?.liquidationPx),
            P(e.position.coin),
            k(
              Number(e?.position?.positionValue) /
                Math.abs(Number(e.position.szi))
            ),
            ed(Number(e?.position?.leverage?.value)),
            Y(!(0 > Number(e?.position?.szi))),
            eS(Number(e?.position?.marginUsed)),
            F(Number(e?.position?.entryPx)),
            eP(Number(e?.position?.szi)),
            K();
        },
        { wallets: eO } = (0, g.useWallets)(),
        eE = eO.find((e) => "privy" === e.walletClientType),
        eH = (0, s.useMemo)(() => {
          if (!n?.length) return [];
          let e = [...n?.map((e) => ({ ...e, dex: "" }))];
          return (
            b &&
              f?.length > 0 &&
              f.forEach((t) => {
                let s = b[t.name];
                s?.assetPositions?.length &&
                  e.push(
                    ...s.assetPositions.map((e) => ({ ...e, dex: t.name }))
                  );
              }),
            e
          );
        }, [n, b, f]),
        eU = (0, s.useMemo)(() => {
          let e = [...u];
          return (
            j &&
              f?.length > 0 &&
              f.forEach((t) => {
                let s = j[t.name] || [];
                e.push(...s);
              }),
            e
          );
        }, [u, j, f]),
        eq = (e) => {
          let t =
            Number(e?.position?.positionValue) /
            Math.abs(Number(e.position.szi));
          ed(Number(e?.position?.leverage?.value)),
            em({
              ...e,
              sz: Math.abs(Number(e?.position?.szi)),
              px:
                Number(e?.position?.positionValue) /
                Math.abs(Number(e.position.szi)),
              dir: Number(e?.position?.szi) > 0 ? "Close Long" : "Close Short",
              coin: e?.position?.coin,
              closedPnl:
                Number(e?.position?.szi) > 0
                  ? (t - e?.position?.entryPx) *
                    Math.abs(Number(e?.position?.szi))
                  : (e?.position?.entryPx - t) *
                    Math.abs(Number(e?.position?.szi)),
            }),
            ep();
        },
        eW = eH?.map((s, l) => {
          let {
              currentPrice: i,
              size: n,
              entryPrice: d,
              leverage: c,
              pnl: u,
              pnlPercentage: h,
              isLong: p,
              entryPriceDiv: b,
              markPriceDiv: f,
              liquidationPriceDIv: g,
              tpPrice: j,
              slPrice: N,
              isPartialTpsl: v,
            } = e$(s),
            w = (0, t.jsxs)("span", {
              onClick: (e) => {
                !a &&
                  z.ALLOW_UPDATE_LEVERAGE &&
                  (e.stopPropagation(),
                  P(s.position.coin),
                  ed(Number(s.position.leverage.value)),
                  ex("cross" === s.position.leverage.type),
                  ea());
              },
              className: (0, x.default)(
                "inline-block  text-center rounded-sm text-2xs font-medium  transition-opacity",
                {
                  "cursor-pointer hover:opacity-80":
                    !a && z.ALLOW_UPDATE_LEVERAGE,
                  "text-grass bg-grass/20 border border-grass/40": p,
                  "text-blood bg-blood/20 border border-blood/40": !p,
                  "px-1 py-0.5 w-[80px]": "large" === e,
                  "px-0.5 py-0.5  ml-2 mt-0.5 leading-[100%]": "small" === e,
                }
              ),
              children: [
                p ? "LONG" : "SHORT",
                " ",
                s?.position?.leverage?.value,
                "x",
              ],
            });
          return (0, t.jsxs)(
            o.Table.Tr,
            {
              children: [
                (0, t.jsxs)(o.Table.Td, {
                  className: "cursor-pointer relative",
                  onClick: () => eF(s?.position?.coin),
                  children: [
                    (0, t.jsx)("div", {
                      className: (0, x.default)(
                        "absolute top-0 left-0 bottom-0 w-[2px] ",
                        { "bg-grass": p, "bg-blood": !p }
                      ),
                    }),
                    (0, t.jsx)("div", {
                      className: (0, x.default)(
                        "absolute top-0 left-0 bottom-0 w-full bg-gradient-to-r from-blood/30 to-transparent",
                        { "from-grass/30": p, "from-blood/30": !p }
                      ),
                    }),
                    (0, t.jsx)("div", {
                      className:
                        "flex items-center gap-1 ml-2 font-semibold relative z-10",
                      children: (0, t.jsx)(T.default, {
                        tokenName: s?.position?.coin,
                      }),
                    }),
                    "large" === e ? null : w,
                  ],
                }),
                "large" === e ? (0, t.jsx)(o.Table.Td, { children: w }) : null,
                (0, t.jsx)(o.Table.Td, {
                  children: (0, t.jsx)("div", {
                    className: (0, x.default)({
                      "flex flex-col gap-1": "small" === e,
                    }),
                    children: (0, t.jsxs)("div", {
                      className: (0, x.default)("flex gap-1 items-center", {
                        "text-grass": p,
                        "text-blood": !p,
                        "min-w-[100px]": "large" === e,
                      }),
                      children: [
                        Math.abs(s.position.szi),
                        " ",
                        (0, t.jsx)(T.default, { tokenName: s?.position?.coin }),
                      ],
                    }),
                  }),
                }),
                "large" === e
                  ? (0, t.jsx)(o.Table.Td, {
                      children: (0, m.convertIntl)(
                        (0, m.roundedNumber)(s?.position?.positionValue)
                      ),
                    })
                  : null,
                "large" === e
                  ? (0, t.jsxs)(t.Fragment, {
                      children: [
                        (0, t.jsxs)(o.Table.Td, { children: ["$", b] }),
                        (0, t.jsxs)(o.Table.Td, { children: ["$", f] }),
                      ],
                    })
                  : (0, t.jsxs)(o.Table.Td, { children: [b, " / ", g] }),
                (0, t.jsx)(o.Table.Td, {
                  children: (0, t.jsxs)("div", {
                    className: (0, x.default)("flex gap-1 items-center", {
                      "flex-wrap": "small" === e,
                    }),
                    children: [
                      (0, t.jsxs)("div", {
                        className: (0, x.default)({
                          "text-grass": u > 0,
                          "text-blood": u < 0,
                          "text-slate-900": 0 === u,
                        }),
                        children: [
                          u >= 0 ? "+" : "-",
                          (0, m.convertIntl)(Number(Math.abs(u).toFixed(2))),
                          " (",
                          h.toFixed(2),
                          "%)",
                        ],
                      }),
                      a
                        ? null
                        : (0, t.jsx)("div", {
                            className: "group p-1 cursor-pointer",
                            onClick: () => eq(s),
                            children: (0, t.jsx)(H.IconShare2, {
                              size: 15,
                              className:
                                "text-slate-900 group-hover:text-white transition-colors duration-300",
                            }),
                          }),
                    ],
                  }),
                }),
                "large" === e
                  ? (0, t.jsxs)(o.Table.Td, { children: ["$", g] })
                  : null,
                "large" === e
                  ? (0, t.jsx)(o.Table.Td, {
                      children: (0, t.jsxs)("div", {
                        className: (0, x.default)("flex items-center", {
                          "gap-2": s?.position?.leverage?.type !== "cross",
                          "gap-1": s?.position?.leverage?.type === "cross",
                        }),
                        children: [
                          (0, t.jsx)("div", {
                            children: (0, m.convertIntl)(
                              (0, m.roundedNumber)(s?.position?.marginUsed)
                            ),
                          }),
                          s?.position?.leverage?.type !== "cross"
                            ? !a &&
                              (0, t.jsx)("div", {
                                onClick: () => eI(s),
                                className: "p-1 cursor-pointer",
                                children: (0, t.jsx)("img", {
                                  src: L.src,
                                  alt: "->",
                                  width: 12,
                                  className: "cursor-pointer",
                                }),
                              })
                            : (0, t.jsx)("span", { children: "(Cross)" }),
                        ],
                      }),
                    })
                  : null,
                "large" === e
                  ? (0, t.jsx)(o.Table.Td, {
                      className: (0, x.default)({
                        "text-grass":
                          0 > Number(s?.position?.cumFunding?.sinceOpen),
                        "text-blood":
                          Number(s?.position?.cumFunding?.sinceOpen) > 0,
                      }),
                      children: (0, t.jsxs)("div", {
                        title: `All Time: ${
                          0 >= Number(s?.position?.cumFunding?.sinceOpen)
                            ? ""
                            : "-"
                        } $${
                          s?.position?.cumFunding?.sinceOpen
                        }  Since Change: ${
                          0 >= Number(s?.position?.cumFunding?.sinceChange)
                            ? ""
                            : "-"
                        } $${s?.position?.cumFunding?.sinceChange}`,
                        children: [
                          0 >= Number(s?.position?.cumFunding?.sinceOpen)
                            ? ""
                            : "-",
                          (0, m.convertIntl)(
                            (0, m.roundedNumber)(
                              Math.abs(
                                Number(s?.position?.cumFunding?.sinceOpen)
                              )
                            )
                          ),
                        ],
                      }),
                    })
                  : null,
                "large" === e
                  ? (0, t.jsx)(o.Table.Td, {
                      children: (0, t.jsxs)("div", {
                        className: "flex items-center gap-2",
                        children: [
                          (0, t.jsx)("div", {
                            className: (0, x.default)("text-xs font-semibold", {
                              "text-grass cursor-pointer hover:underline": v,
                              "text-white": !v && (j || N),
                              "text-slate-900": !v && !j && !N,
                            }),
                            onClick: (e) => {
                              v && (e.stopPropagation(), r?.("openOrders"));
                            },
                            children: v
                              ? "View Orders"
                              : j || N
                              ? `${j || "-"} / ${N || "-"}`
                              : "-- / --",
                          }),
                          !a &&
                            (0, t.jsx)("div", {
                              onClick: () => eB(s),
                              className: "p-1 cursor-pointer",
                              children: (0, t.jsx)("img", {
                                src: L.src,
                                alt: "edit",
                                width: 12,
                                className: "cursor-pointer",
                              }),
                            }),
                        ],
                      }),
                    })
                  : null,
                "large" !== e || a
                  ? null
                  : (0, t.jsx)(o.Table.Td, {
                      children: (0, t.jsxs)("div", {
                        className:
                          "flex justify-end items-center gap-2 text-white max-w-[100px]",
                        children: [
                          (0, t.jsx)("div", {
                            className:
                              "cursor-pointer hover:bg-slate-900/10 border border-transparent hover:border-slate-900/40 px-1 py-0.5 rounded-sm",
                            onClick: () => eL(s, !0),
                            children: "Market",
                          }),
                          (0, t.jsx)("div", {
                            className:
                              "cursor-pointer hover:bg-slate-900/10 border border-transparent hover:border-slate-900/40 px-1 py-0.5 rounded-sm",
                            onClick: () => eL(s, !1),
                            children: "Limit",
                          }),
                        ],
                      }),
                    }),
              ],
            },
            l
          );
        });
      return (0, t.jsxs)("div", {
        className: "h-full overflow-auto",
        children: [
          eA
            ? (0, t.jsxs)("div", {
                className: "flex flex-col gap-3 p-2",
                children: [
                  eH?.map((e, s) =>
                    ((e, s) => {
                      let {
                        currentPrice: l,
                        size: i,
                        entryPrice: n,
                        leverage: o,
                        pnl: d,
                        pnlPercentage: c,
                        isLong: u,
                        entryPriceDiv: h,
                        markPriceDiv: p,
                        liquidationPriceDIv: b,
                        tpPrice: f,
                        slPrice: g,
                        isPartialTpsl: j,
                      } = e$(e);
                      return (0, t.jsxs)(
                        "div",
                        {
                          className:
                            "flex flex-col gap-2 py-3 px-4 rounded-xl bg-neutral-900 border border-neutral-800 shadow-lg",
                          children: [
                            (0, t.jsxs)("div", {
                              className: "flex items-center justify-between",
                              children: [
                                (0, t.jsxs)("div", {
                                  onClick: () => eF(e?.position?.coin),
                                  children: [
                                    (0, t.jsx)("span", {
                                      className:
                                        "text-neutral-400 text-xs font-normal",
                                      children: "Coin",
                                    }),
                                    (0, t.jsx)(T.default, {
                                      tokenName: e?.position?.coin,
                                    }),
                                  ],
                                }),
                                (0, t.jsxs)("div", {
                                  className: "flex items-center gap-3",
                                  children: [
                                    (0, t.jsxs)("div", {
                                      className: (0, x.default)(
                                        "text-sm font-semibold",
                                        {
                                          "text-grass": d > 0,
                                          "text-blood": d < 0,
                                          "text-white": 0 === d,
                                        }
                                      ),
                                      children: [
                                        d >= 0 ? "+" : "-",
                                        (0, m.convertIntl)(
                                          Number(Math.abs(d).toFixed(2))
                                        ),
                                        " (",
                                        c.toFixed(2),
                                        "%)",
                                      ],
                                    }),
                                    !a &&
                                      (0, t.jsx)("div", {
                                        className: "flex items-center gap-2",
                                        children: (0, t.jsx)("div", {
                                          className:
                                            "p-1.5 pt-1 rounded-lg bg-neutral-800 border border-neutral-700 hover:bg-neutral-700 transition-all cursor-pointer",
                                          onClick: () => eq(e),
                                          children: (0, t.jsx)(H.IconShare2, {
                                            size: 16,
                                            className:
                                              "text-slate-900 group-hover:text-white transition-colors duration-300",
                                          }),
                                        }),
                                      }),
                                  ],
                                }),
                              ],
                            }),
                            (0, t.jsxs)("div", {
                              className: "flex items-center gap-2",
                              children: [
                                (0, t.jsxs)("div", {
                                  className:
                                    "text-neutral-400 text-xs font-normal",
                                  children: [
                                    e?.position?.leverage?.type === "cross"
                                      ? "Crossed"
                                      : "Isolated",
                                    " ",
                                  ],
                                }),
                                (0, t.jsxs)("div", {
                                  className: (0, x.default)(
                                    "px-2 py-0.5 rounded text-[10px] font-medium",
                                    {
                                      "text-grass bg-grass/20": u,
                                      "text-blood bg-blood/20": !u,
                                    }
                                  ),
                                  children: [
                                    u ? "Long " : "Short ",
                                    (0, t.jsxs)("span", {
                                      className: "text-xs font-normal",
                                      children: [
                                        e?.position?.leverage?.value,
                                        "x",
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, t.jsxs)("div", {
                              className: "grid grid-cols-3 gap-y-4 gap-x-2",
                              children: [
                                (0, t.jsxs)("div", {
                                  className: "flex flex-col gap-1",
                                  children: [
                                    (0, t.jsx)("span", {
                                      className:
                                        "text-neutral-500 text-xs font-normal",
                                      children: "Pos. Value",
                                    }),
                                    (0, t.jsx)("span", {
                                      className:
                                        "text-white text-xs font-medium",
                                      children: (0, m.convertIntlV2)(
                                        (0, m.roundedNumber)(
                                          e?.position?.positionValue
                                        )
                                      ),
                                    }),
                                  ],
                                }),
                                (0, t.jsxs)("div", {
                                  className: "flex flex-col gap-1",
                                  children: [
                                    (0, t.jsx)("span", {
                                      className:
                                        "text-neutral-500 text-xs font-normal",
                                      children: "Entry Price",
                                    }),
                                    (0, t.jsxs)("span", {
                                      className:
                                        "text-white text-xs font-medium",
                                      children: ["$", h],
                                    }),
                                  ],
                                }),
                                (0, t.jsxs)("div", {
                                  className: "flex flex-col gap-1",
                                  children: [
                                    (0, t.jsx)("span", {
                                      className:
                                        "text-neutral-500 text-xs font-normal",
                                      children: "Mark Price",
                                    }),
                                    (0, t.jsxs)("span", {
                                      className:
                                        "text-white text-xs font-medium",
                                      children: ["$", p],
                                    }),
                                  ],
                                }),
                                (0, t.jsxs)("div", {
                                  className: "flex flex-col gap-1",
                                  children: [
                                    (0, t.jsx)("span", {
                                      className:
                                        "text-neutral-500 text-xs font-normal",
                                      children: "Liq. Price",
                                    }),
                                    (0, t.jsxs)("span", {
                                      className:
                                        "text-white text-xs font-medium",
                                      children: ["$", b],
                                    }),
                                  ],
                                }),
                                (0, t.jsxs)("div", {
                                  className: "flex flex-col gap-1",
                                  children: [
                                    (0, t.jsx)("span", {
                                      className:
                                        "text-neutral-500 text-xs font-normal",
                                      children: "Margin",
                                    }),
                                    (0, t.jsxs)("div", {
                                      className: (0, x.default)(
                                        "flex items-center gap-1",
                                        {
                                          "cursor-pointer":
                                            e?.position?.leverage?.type !==
                                              "cross" && !a,
                                        }
                                      ),
                                      onClick: () => {
                                        e?.position?.leverage?.type ===
                                          "cross" ||
                                          a ||
                                          eI(e);
                                      },
                                      children: [
                                        (0, t.jsx)("span", {
                                          className:
                                            "text-white text-xs font-medium",
                                          children: (0, m.convertIntlV2)(
                                            (0, m.roundedNumber)(
                                              e?.position?.marginUsed
                                            )
                                          ),
                                        }),
                                        e?.position?.leverage?.type !== "cross"
                                          ? !a &&
                                            (0, t.jsx)("img", {
                                              src: L.src,
                                              width: 10,
                                              alt: "edit",
                                              className: "opacity-60",
                                            })
                                          : (0, t.jsx)("span", {
                                              className:
                                                "text-neutral-500 text-xs font-normal",
                                              children: "(Cross)",
                                            }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, t.jsxs)("div", {
                                  className: "flex flex-col gap-1",
                                  children: [
                                    (0, t.jsx)("span", {
                                      className:
                                        "text-neutral-500 text-xs font-normal",
                                      children: "TP/SL",
                                    }),
                                    (0, t.jsxs)("div", {
                                      className: (0, x.default)(
                                        "flex items-center gap-1",
                                        { "cursor-pointer": j || !a }
                                      ),
                                      onClick: (t) => {
                                        j
                                          ? (t.stopPropagation(),
                                            r?.("openOrders"))
                                          : a || eB(e);
                                      },
                                      children: [
                                        (0, t.jsx)("span", {
                                          className: (0, x.default)(
                                            "text-xs font-medium",
                                            {
                                              "text-grass hover:underline": j,
                                              "text-white": !j && (f || g),
                                              "text-white/20": !j && !f && !g,
                                            }
                                          ),
                                          children: j
                                            ? "View Orders"
                                            : f || g
                                            ? (0, t.jsxs)(t.Fragment, {
                                                children: [
                                                  f || "-",
                                                  " / ",
                                                  g || "-",
                                                ],
                                              })
                                            : "-- / --",
                                        }),
                                        !j &&
                                          !a &&
                                          (0, t.jsx)("img", {
                                            src: L.src,
                                            width: 10,
                                            alt: "edit",
                                            className: "opacity-60",
                                          }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            !a &&
                              (0, t.jsx)("div", {
                                className:
                                  "flex items-center justify-between pt-2 border-t border-white/5 mt-1",
                                children: (0, t.jsxs)("div", {
                                  className: "flex items-center gap-4",
                                  children: [
                                    (0, t.jsx)("span", {
                                      className:
                                        "text-brand-blue text-xs font-semibold cursor-pointer hover:opacity-80 transition-opacity",
                                      onClick: () => eL(e, !1),
                                      children: "Limit Close",
                                    }),
                                    (0, t.jsx)("span", {
                                      className:
                                        "text-brand-blue text-xs font-semibold cursor-pointer hover:opacity-80 transition-opacity",
                                      onClick: () => eL(e, !0),
                                      children: "Market Close",
                                    }),
                                  ],
                                }),
                              }),
                          ],
                        },
                        s
                      );
                    })(e, s)
                  ),
                  eH?.length === 0
                    ? (0, t.jsx)("div", {
                        className: "pb-10 pt-10",
                        children: (0, t.jsx)(V.default, {
                          text: "No Positions",
                        }),
                      })
                    : null,
                ],
              })
            : (0, t.jsxs)(t.Fragment, {
                children: [
                  (0, t.jsxs)(o.Table, {
                    classNames:
                      "gtr" === l
                        ? {
                            table:
                              "rounded-lg overflow-hidden border-1 border-neutral-900",
                            thead:
                              "!bg-neutral-950 hover:!bg-neutral-950 uppercase",
                            th: "text-xs font-normal !bg-neutral-950 hover:!bg-neutral-950 text-neutral-400 h-10",
                            tbody: "bg-white/5",
                            td: "text-neutral-300 text-sm py-4 font-semibold",
                            tr: "border-b-1 border-neutral-800 last:border-b-0 hover:bg-white/5 transition-all duration-400 even:bg-neutral-950 odd:bg-[#141414]",
                          }
                        : {
                            table: "overflow-x-auto",
                            th: "!pl-0.5 !py-2 !font-normal !text-xs !text-slate-900 !border-ash !border-b bg-transparent",
                            td: "!pl-0.5 !py-1 !text-xs",
                            tr: "border-b-2 !border-black",
                          },
                    styles: {
                      table: { minWidth: "large" === e ? "1400px" : "500px" },
                    },
                    className: "!p-1",
                    children: [
                      (0, t.jsx)(o.Table.Thead, {
                        children: (0, t.jsxs)(o.Table.Tr, {
                          children: [
                            (0, t.jsx)(o.Table.Th, {
                              children: (0, t.jsx)("div", {
                                className: "ml-4 min-w-[60px]",
                                children: "Coin",
                              }),
                            }),
                            "large" === e
                              ? (0, t.jsx)(o.Table.Th, {
                                  children: "Direction",
                                })
                              : null,
                            (0, t.jsx)(o.Table.Th, { children: "Size" }),
                            "large" === e
                              ? (0, t.jsx)(o.Table.Th, {
                                  children: "Position Value",
                                })
                              : null,
                            "large" === e
                              ? (0, t.jsxs)(t.Fragment, {
                                  children: [
                                    (0, t.jsx)(o.Table.Th, {
                                      children: "Entry Price",
                                    }),
                                    (0, t.jsx)(o.Table.Th, {
                                      children: "Mark Price",
                                    }),
                                  ],
                                })
                              : (0, t.jsx)(o.Table.Th, {
                                  children: "Entry / Liq Price",
                                }),
                            (0, t.jsx)(o.Table.Th, { children: "PNL (ROE %)" }),
                            "large" === e
                              ? (0, t.jsx)(o.Table.Th, {
                                  children: "Liquidation Price",
                                })
                              : null,
                            "large" === e
                              ? (0, t.jsx)(o.Table.Th, {
                                  children: "Margin Used",
                                })
                              : null,
                            "large" === e
                              ? (0, t.jsx)(o.Table.Th, { children: "Funding" })
                              : null,
                            "large" === e
                              ? (0, t.jsx)(o.Table.Th, { children: "TP/SL" })
                              : null,
                            "large" !== e || a
                              ? null
                              : (0, t.jsx)(o.Table.Th, {
                                  className: "!w-[100px] !max-w-[100px]",
                                  children: "Close",
                                }),
                          ],
                        }),
                      }),
                      (0, t.jsx)(o.Table.Tbody, { children: eW }),
                    ],
                  }),
                  eH?.length === 0
                    ? (0, t.jsx)("div", {
                        className: "pb-10",
                        children: (0, t.jsx)(V.default, {
                          text: "No Positions",
                        }),
                      })
                    : null,
                ],
              }),
          X
            ? (0, t.jsx)(C, {
                opened: X,
                close: J,
                entryPrice: M,
                isMarket: N,
                maxSize: w,
                coin: S,
                currentPrice: D,
                isBuy: _,
                leverage: eo,
              })
            : null,
          Q
            ? (0, t.jsx)($, {
                opened: Q,
                close: Z,
                coin: S,
                currentPrice: D,
                liquidationPrice: I,
                isBuy: _,
                leverage: eo,
                marginUsed: ey,
                szi: eC,
              })
            : null,
          ee
            ? (0, t.jsx)(O, {
                opened: ee,
                close: es,
                coin: S,
                currentPrice: D,
                liquidationPrice: I,
                entryPrice: M,
                maxSize: w,
                isLong: ei,
                leverage: eo,
                setCurrentTab: r,
              })
            : null,
          el
            ? (0, t.jsx)(B, {
                opened: el,
                close: er,
                coin: S,
                currentLeverage: eo,
                isCross: ec,
              })
            : null,
          (0, t.jsx)(U.default, {
            opened: eh,
            close: eb,
            tradeItem: eu,
            leverage: eo,
          }),
          (0, t.jsx)(W.default, {
            opened: ef,
            onClose: () => {
              ej(), ew(null), ev(null);
            },
            token: eN,
            isLong: eN?.szi > 0,
            tradeSource: "CRYPTO_PERPS",
            pnl: eN?.gains,
            pnlPercentage: eN?.gainsPercentage,
            entryPrice: eN?.price,
            uniqueTradeId: eT,
            onSaveSuccess: () => {
              ez.push("/feeds"), ew(null), ev(null);
            },
          }),
        ],
      });
    };
    var _ = e.i(836733),
      Y = e.i(744125),
      X = e.i(600017),
      G = e.i(489020),
      J = e.i(890357);
    let Q = () => {
      let {
        perpsSzDecimals: e,
        perpsMetaAssetsByDex: t,
        metaAssets: s,
      } = (0, i.useHyperliquidStore)(
        (0, A.useShallow)((e) => ({
          perpsSzDecimals: e.perpsSzDecimals,
          perpsMetaAssetsByDex: e.perpsMetaAssetsByDex,
          metaAssets: e.metaAssets,
        }))
      );
      return {
        getSzDecimals: (l) => {
          if (!l) return 3;
          if (void 0 !== e[l]) return e[l];
          let a = s?.find((e) => e.name === l);
          if (a?.szDecimals !== void 0) return a.szDecimals;
          if (t) {
            for (let e of Object.values(t))
              if (e?.metaAssets?.length) {
                let t = e.metaAssets.find((e) => e.name === l);
                if (t?.szDecimals !== void 0) return t.szDecimals;
              }
          }
          return 3;
        },
        getAssetMeta: (e) => {
          if (!e) return null;
          let l = s?.find((t) => t.name === e);
          if (l) return l;
          if (t) {
            for (let s of Object.values(t))
              if (s?.metaAssets?.length) {
                let t = s.metaAssets.find((t) => t.name === e);
                if (t) return t;
              }
          }
          return null;
        },
        getAssetContext: (e) => {
          if (!e) return null;
          let { assetCtxs: l } = i.useHyperliquidStore.getState(),
            a = s?.findIndex((t) => t.name === e);
          if (-1 !== a && l[a]) return l[a];
          if (t) {
            for (let s of Object.values(t))
              if (s?.metaAssets?.length && s?.assetCtxs?.length) {
                let t = s.metaAssets.findIndex((t) => t.name === e);
                if (-1 !== t && s.assetCtxs[t]) return s.assetCtxs[t];
              }
          }
          return null;
        },
        useIsDepositRequired: () => {
          let { fills: e } = (0, i.useHyperliquidStore)(
              (0, A.useShallow)((e) => ({ fills: e.fills }))
            ),
            { cryptoPerpsBalance: t } = (0, J.useBalanceStore)(
              (0, A.useShallow)((e) => ({
                cryptoPerpsBalance: e.cryptoPerpsBalance,
              }))
            );
          return (e?.length === 0 || !e) && 0 === Number(t);
        },
      };
    };
    e.s(["usePerpsUtils", 0, Q], 219826);
    let K = ({
        hideColumns: e = [],
        minWidth: l = "",
        variant: a = "tabs",
        isSocial: n = !1,
      }) => {
        let [h, { open: p, close: b }] = (0, d.useDisclosure)(!1),
          {
            openOrders: f,
            metaAssets: S,
            spotMetaAssets: C,
            assetCtxs: P,
            spotAssetCtxs: D,
            openOrdersByDex: k,
            perpsDex: z,
            perpsMetaAssetsByDex: M,
          } = (0, i.useHyperliquidStore)(
            (0, A.useShallow)((e) => ({
              openOrders: n ? e.socialOpenOrders : e.openOrders,
              metaAssets: n ? e.socialMetaAssets : e.metaAssets,
              spotMetaAssets: n ? e.socialSpotMetaAssets : e.spotMetaAssets,
              assetCtxs: n ? e.socialAssetCtxs : e.assetCtxs,
              spotAssetCtxs: n ? e.socialSpotAssetCtxs : e.spotAssetCtxs,
              openOrdersByDex: n ? e.socialOpenOrdersByDex : e.openOrdersByDex,
              perpsDex: n ? e.socialPerpsDex : e.perpsDex,
              perpsMetaAssetsByDex: n
                ? e.socialPerpsMetaAssetsByDex
                : e.perpsMetaAssetsByDex,
            }))
          ),
          { wallets: $ } = (0, g.useWallets)(),
          { getTokenNameByMetaAssetsName: F } = (0, G.useSpotUtils)(),
          { getAssetContext: B } = Q(),
          L = $.find((e) => "privy" === e.walletClientType),
          I = (e) => {
            if (!e) return -1;
            if (e.includes(":")) {
              let [t] = e.split(":"),
                s = z.findIndex((e) => e.name === t) + 1;
              if (0 === s)
                return (
                  console.warn(`DEX ${t} not found in perpsDex`),
                  S.findIndex((t) => t.name === e)
                );
              let l = M[t];
              if (!l?.metaAssets)
                return (
                  console.warn(`No metaAssets found for DEX ${t}`),
                  S.findIndex((t) => t.name === e)
                );
              let a = l.metaAssets.findIndex((t) => t.name === e);
              return -1 === a
                ? (console.warn(`Asset ${e} not found in DEX ${t} metaAssets`),
                  S.findIndex((t) => t.name === e))
                : 1e5 + 1e4 * s + a;
            }
            return S.findIndex((t) => t.name === e);
          },
          O = s.default.useMemo(() => {
            let e = [...f.map((e) => ({ ...e, dex: "" }))];
            return (
              k &&
                z?.length > 0 &&
                z.forEach((t) => {
                  let s = k[t.name] || [];
                  e.push(...s.map((e) => ({ ...e, dex: t.name })));
                }),
              e
            );
          }, [f, k, z]),
          E = async (e) => {
            await L.switchChain(v.arbitrum.id);
            let t = (0, j.createWalletClient)({
                account: L?.address,
                chain: v.arbitrum,
                transport: (0, N.custom)(await L.getEthereumProvider()),
              }),
              s = Date.now().toString();
            (0, w.hlTradeNotifications)({
              notificationId: s,
              loading: !0,
              title: "Cancelling Order",
              showDots: !0,
              showContent: !1,
              autoClose: !1,
            });
            try {
              let s = await (0, u.cancelOrder)({ wallet: t, cancels: e });
              "ok" === s.status
                ? (0, w.hlTradeNotifications)({
                    loading: !1,
                    title: "Order Cancelled",
                    showContent: !1,
                    autoClose: !0,
                  })
                : (0, w.hlTradeNotifications)({
                    loading: !1,
                    isError: !0,
                    title: "Couldn't cancel. Try again shortly.",
                    showContent: !1,
                    autoClose: !0,
                  });
            } catch (e) {
              (0, w.hlTradeNotifications)({
                loading: !1,
                isError: !0,
                title: "Couldn't cancel. Try again shortly.",
                showContent: !1,
                autoClose: !0,
              });
            } finally {
              y.notifications.hide(s);
            }
          },
          H = async (e) => {
            let s = e?.coin.includes("@"),
              l = s ? C : S,
              a = s ? D : P,
              r = 0;
            if (s) {
              let t = a.find((t) => t.coin === e?.coin);
              r = t ? parseFloat(t.markPx) : 0;
            } else {
              let t = I(e?.coin);
              if (-1 !== t && a[t]) r = parseFloat(a[t].markPx);
              else {
                let t = B(e?.coin);
                t && t.markPx && (r = parseFloat(t.markPx));
              }
            }
            if (0 === r)
              return void (0, Y.notifyErrorToast)({
                message: "Unable to get current market price",
                icon: (0, t.jsx)(X.default, { icon: "fail" }),
              });
            let i = r * (e?.side === "B" ? 0.9997 : 1.0003),
              n = s ? 1e4 + Number(e?.coin.split("@")[1]) : I(e?.coin),
              o = ((e, t) => {
                if (!e) return null;
                let s = t.find((t) => t.name === e);
                if (s) return s;
                if (e.includes(":") && M) {
                  let [t] = e.split(":"),
                    l = M[t];
                  if (
                    l?.metaAssets?.length &&
                    (s = l.metaAssets.find((t) => t.name === e))
                  )
                    return s;
                }
                return null;
              })(e?.coin, l),
              d = o?.szDecimals || 0,
              c = (0, u.formatHyperliquidPrice)(i, d);
            await L.switchChain(v.arbitrum.id);
            let x = (0, j.createWalletClient)({
                account: L?.address,
                chain: v.arbitrum,
                transport: (0, N.custom)(await L.getEthereumProvider()),
              }),
              m = Date.now().toString();
            (0, w.hlTradeNotifications)({
              notificationId: m,
              loading: !0,
              title: "Chasing Order",
              showDots: !0,
              showContent: !1,
              autoClose: !1,
            });
            try {
              let t = await (0, u.modifyOrder)({
                wallet: x,
                oid: e?.oid,
                order: {
                  a: n,
                  b: e?.side === "B",
                  p: c.toString(),
                  s: String((0, u.formatHyperliquidSize)(e?.sz, d)),
                  r: e?.reduceOnly,
                  t: { limit: { tif: e?.tif } },
                },
              });
              "ok" === t.status
                ? (0, w.hlTradeNotifications)({
                    loading: !1,
                    title: "Order Chase Successful",
                    showContent: !1,
                    autoClose: !0,
                  })
                : (0, w.hlTradeNotifications)({
                    loading: !1,
                    isError: !0,
                    title: "Failed to chase order",
                    showContent: !1,
                    autoClose: !0,
                  });
            } catch (e) {
              (0, w.hlTradeNotifications)({
                loading: !1,
                isError: !0,
                title: "Failed to chase order",
                showContent: !1,
                autoClose: !0,
              });
            } finally {
              y.notifications.hide(m);
            }
          },
          U = async () => {
            let e = O.map((e) => ({
              a: e?.coin.includes("@")
                ? 1e4 + Number(e?.coin.split("@")[1])
                : I(e?.coin),
              o: e?.oid,
            }));
            b(), await E(e);
          },
          q = (e) => {
            let t = e?.coin.includes("@"),
              s = e?.side === "B",
              l = new Date(e?.timestamp),
              a = `${l.getMonth() + 1}/${l.getDate()}/${l.getFullYear()}  — ${
                l.getHours() % 12 || 12
              }:${String(l.getMinutes()).padStart(2, "0")}:${String(
                l.getSeconds()
              ).padStart(2, "0")} ${l.getHours() >= 12 ? "PM" : "AM"}`;
            return {
              isSpotTrading: t,
              isLong: s,
              formattedTime: a,
              orderValue:
                e?.orderType === "Limit" ||
                e?.orderType === "Take Profit Limit" ||
                e?.orderType === "Stop Limit"
                  ? Number(e?.sz) * Number(e?.limitPx)
                  : 0,
              price:
                e?.orderType === "Limit" ||
                e?.orderType === "Take Profit Limit" ||
                e?.orderType === "Stop Limit"
                  ? Number(e?.limitPx)
                  : 0,
            };
          },
          W = (0, c.useIsMobile)(),
          R = O?.sort((e, t) => t.timestamp - e.timestamp).map((s, l) => {
            let { isLong: a, formattedTime: r, orderValue: i, price: d } = q(s);
            return (0, t.jsxs)(
              o.Table.Tr,
              {
                children: [
                  e.includes("Time")
                    ? null
                    : (0, t.jsx)(o.Table.Td, {
                        className: "cursor-pointer w-24",
                        children: (0, t.jsx)("div", {
                          className: "ml-2",
                          children: r,
                        }),
                      }),
                  e.includes("Type")
                    ? null
                    : (0, t.jsx)(o.Table.Td, {
                        className: "font-medium",
                        children: s?.orderType,
                      }),
                  e.includes("Coin")
                    ? null
                    : (0, t.jsx)(o.Table.Td, {
                        children: (0, t.jsx)("div", {
                          className: "font-medium ml-2",
                          children: s?.coin.includes("@")
                            ? F(s?.coin) || s?.coin
                            : (0, t.jsx)(T.default, { tokenName: s?.coin }),
                        }),
                      }),
                  e.includes("Direction")
                    ? null
                    : (0, t.jsx)(o.Table.Td, {
                        children: (0, t.jsxs)("span", {
                          className: (0, x.default)(
                            "inline-block w-[70px] text-center px-1 py-0.5 rounded-sm text-2xs font-medium",
                            {
                              "text-blood bg-blood/20 border border-blood/40":
                                !a,
                              "text-grass bg-grass/20 border border-grass/40":
                                a,
                            }
                          ),
                          children: [
                            s?.isTrigger
                              ? `Close ${!a ? "Long" : "Short"}`
                              : "",
                            s?.isTrigger
                              ? null
                              : (0, t.jsx)(t.Fragment, {
                                  children: a ? "Long" : "Short",
                                }),
                          ],
                        }),
                      }),
                  e.includes("Size")
                    ? null
                    : (0, t.jsx)(o.Table.Td, {
                        className: "font-medium",
                        children: s?.sz
                          ? (0, m.convertIntl)(Number(s?.sz), !1)
                          : "--",
                      }),
                  e.includes("Order_Value")
                    ? null
                    : (0, t.jsx)(o.Table.Td, {
                        children:
                          i > 0
                            ? `${(0, m.convertIntl)((0, m.roundedNumber)(i))}`
                            : "--",
                      }),
                  e.includes("Price")
                    ? null
                    : (0, t.jsxs)(o.Table.Td, {
                        children: [
                          " ",
                          d > 0 ? `${(0, m.convertIntlV2)(d, !1)}` : "Market",
                        ],
                      }),
                  e.includes("Trigger_Condition")
                    ? null
                    : (0, t.jsx)(o.Table.Td, {
                        children:
                          s?.orderType === "Limit"
                            ? "N/A"
                            : s?.triggerCondition,
                      }),
                  e.includes("Cancel") || n
                    ? null
                    : (0, t.jsxs)(o.Table.Td, {
                        className: "flex justify-end gap-2 mt-0.5",
                        children: [
                          s?.orderType !== "Limit" || e.includes("Chase")
                            ? null
                            : (0, t.jsx)("div", {
                                onClick: () => {
                                  H(s);
                                },
                                children: (0, t.jsx)("span", {
                                  className:
                                    "cursor-pointer text-slate-900 bg-slate-900/10 border border-slate-900/40 px-1 py-0.5 rounded-sm font-medium",
                                  children: "Chase Order",
                                }),
                              }),
                          (0, t.jsx)("div", {
                            onClick: () => {
                              E([
                                {
                                  a: s?.coin.includes("@")
                                    ? 1e4 + Number(s?.coin.split("@")[1])
                                    : I(s?.coin),
                                  o: s?.oid,
                                },
                              ]);
                            },
                            children: (0, t.jsx)("span", {
                              className:
                                "cursor-pointer text-slate-900 hover:text-blood bg-slate-900/10 hover:bg-blood/20 border border-slate-900/40 hover:border-blood/40 px-1 py-0.5 rounded-sm font-medium",
                              children: "Cancel",
                            }),
                          }),
                        ],
                      }),
                ],
              },
              l
            );
          });
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsxs)("div", {
              className: "h-full overflow-auto",
              children: [
                W
                  ? (0, t.jsxs)("div", {
                      className: "flex flex-col gap-3 p-2",
                      children: [
                        !n &&
                          O?.length > 0 &&
                          (0, t.jsxs)("div", {
                            className:
                              "flex justify-between items-center px-2 py-1",
                            children: [
                              (0, t.jsxs)("span", {
                                className: "text-zinc-400 text-xs",
                                children: [O.length, " Open Orders"],
                              }),
                              (0, t.jsx)("span", {
                                className:
                                  "text-blood text-xs font-semibold cursor-pointer hover:opacity-80",
                                onClick: p,
                                children: "Cancel All",
                              }),
                            ],
                          }),
                        O?.sort((e, t) => t.timestamp - e.timestamp).map(
                          (s, l) =>
                            ((s, l) => {
                              let {
                                isLong: a,
                                formattedTime: r,
                                orderValue: i,
                                price: o,
                              } = q(s);
                              return (0, t.jsxs)(
                                "div",
                                {
                                  className:
                                    "flex flex-col gap-4 py-4 px-4 rounded-xl bg-neutral-900 border border-neutral-800 shadow-lg",
                                  children: [
                                    (0, t.jsxs)("div", {
                                      className:
                                        "grid grid-cols-3 gap-y-4 gap-x-2",
                                      children: [
                                        !e.includes("Coin") &&
                                          (0, t.jsxs)("div", {
                                            className: "flex flex-col gap-0.5",
                                            children: [
                                              (0, t.jsx)("span", {
                                                className:
                                                  "text-neutral-500 text-xs font-normal",
                                                children: "Coin",
                                              }),
                                              (0, t.jsx)("div", {
                                                className:
                                                  "text-white text-xs font-semibold",
                                                children: s?.coin.includes("@")
                                                  ? F(s?.coin) || s?.coin
                                                  : (0, t.jsx)(T.default, {
                                                      tokenName: s?.coin,
                                                    }),
                                              }),
                                            ],
                                          }),
                                        !e.includes("Order_Value") &&
                                          (0, t.jsxs)("div", {
                                            className: "flex flex-col gap-0.5",
                                            children: [
                                              (0, t.jsx)("span", {
                                                className:
                                                  "text-neutral-500 text-xs font-normal",
                                                children: "Order Value",
                                              }),
                                              (0, t.jsx)("span", {
                                                className:
                                                  "text-white text-xs font-medium",
                                                children:
                                                  i > 0
                                                    ? (0, m.convertIntl)(
                                                        (0, m.roundedNumber)(i)
                                                      )
                                                    : "--",
                                              }),
                                            ],
                                          }),
                                        !e.includes("Type") &&
                                          (0, t.jsxs)("div", {
                                            className: "flex flex-col gap-0.5",
                                            children: [
                                              (0, t.jsx)("span", {
                                                className:
                                                  "text-neutral-500 text-xs font-normal text-nowrap",
                                                children: "Type",
                                              }),
                                              (0, t.jsx)("span", {
                                                className:
                                                  "text-white text-xs font-medium",
                                                children: s?.orderType,
                                              }),
                                            ],
                                          }),
                                        !e.includes("Direction") &&
                                          (0, t.jsxs)("div", {
                                            className: "flex flex-col gap-0.5",
                                            children: [
                                              (0, t.jsx)("span", {
                                                className:
                                                  "text-neutral-500 text-xs font-normal",
                                                children: "Direction",
                                              }),
                                              (0, t.jsxs)("span", {
                                                className: (0, x.default)(
                                                  "text-xs font-medium",
                                                  {
                                                    "text-blood": !a,
                                                    "text-grass": a,
                                                  }
                                                ),
                                                children: [
                                                  s?.isTrigger
                                                    ? `Close ${
                                                        !a ? "Long" : "Short"
                                                      }`
                                                    : "",
                                                  s?.isTrigger
                                                    ? null
                                                    : (0, t.jsx)(t.Fragment, {
                                                        children: a
                                                          ? "Long"
                                                          : "Short",
                                                      }),
                                                ],
                                              }),
                                            ],
                                          }),
                                        !e.includes("Price") &&
                                          (0, t.jsxs)("div", {
                                            className: "flex flex-col gap-0.5",
                                            children: [
                                              (0, t.jsx)("span", {
                                                className:
                                                  "text-neutral-500 text-xs font-normal",
                                                children: "Price",
                                              }),
                                              (0, t.jsx)("span", {
                                                className:
                                                  "text-white text-xs font-medium",
                                                children:
                                                  o > 0
                                                    ? (0, m.convertIntlV2)(
                                                        o,
                                                        !1
                                                      )
                                                    : "Market",
                                              }),
                                            ],
                                          }),
                                        !e.includes("Trigger_Condition") &&
                                          (0, t.jsxs)("div", {
                                            className: "flex flex-col gap-0.5",
                                            children: [
                                              (0, t.jsx)("span", {
                                                className:
                                                  "text-neutral-500 text-xs font-normal text-nowrap",
                                                children: "Trigger Conditions",
                                              }),
                                              (0, t.jsx)("span", {
                                                className:
                                                  "text-white text-xs font-medium",
                                                children:
                                                  s?.orderType === "Limit"
                                                    ? "N/A"
                                                    : s?.triggerCondition ||
                                                      "--",
                                              }),
                                            ],
                                          }),
                                        !e.includes("Size") &&
                                          (0, t.jsxs)("div", {
                                            className: "flex flex-col gap-0.5",
                                            children: [
                                              (0, t.jsx)("span", {
                                                className:
                                                  "text-neutral-500 text-xs font-normal",
                                                children: "Size",
                                              }),
                                              (0, t.jsx)("span", {
                                                className:
                                                  "text-white text-xs font-medium",
                                                children: s?.sz
                                                  ? (0, m.convertIntl)(
                                                      Number(s?.sz),
                                                      !1
                                                    )
                                                  : "--",
                                              }),
                                            ],
                                          }),
                                        !e.includes("Time") &&
                                          (0, t.jsxs)("div", {
                                            className:
                                              "flex flex-col gap-0.5 col-span-2",
                                            children: [
                                              (0, t.jsx)("span", {
                                                className:
                                                  "text-neutral-500 text-xs font-normal text-nowrap",
                                                children: "Time",
                                              }),
                                              (0, t.jsx)("span", {
                                                className:
                                                  "text-white text-xs font-medium leading-[1.2]",
                                                children: r,
                                              }),
                                            ],
                                          }),
                                      ],
                                    }),
                                    (0, t.jsx)("div", {
                                      className:
                                        "flex items-center gap-4 pt-3 border-t border-white/5 mt-1",
                                      children:
                                        !n &&
                                        (0, t.jsxs)(t.Fragment, {
                                          children: [
                                            s?.orderType !== "Limit" ||
                                            e.includes("Chase")
                                              ? null
                                              : (0, t.jsx)("span", {
                                                  className:
                                                    "text-brand-blue text-xs font-semibold cursor-pointer hover:opacity-80 transition-opacity",
                                                  onClick: () => H(s),
                                                  children: "Chase Order",
                                                }),
                                            (0, t.jsx)("span", {
                                              className:
                                                "text-brand-blue text-xs font-semibold cursor-pointer hover:opacity-80 transition-opacity",
                                              onClick: () => {
                                                E([
                                                  {
                                                    a: s?.coin.includes("@")
                                                      ? 1e4 +
                                                        Number(
                                                          s?.coin.split("@")[1]
                                                        )
                                                      : I(s?.coin),
                                                    o: s?.oid,
                                                  },
                                                ]);
                                              },
                                              children: "Cancel",
                                            }),
                                          ],
                                        }),
                                    }),
                                  ],
                                },
                                l
                              );
                            })(s, l)
                        ),
                      ],
                    })
                  : (0, t.jsxs)(o.Table, {
                      classNames:
                        "gtr" === a
                          ? {
                              table:
                                "rounded-lg overflow-hidden border-1 border-neutral-900",
                              thead:
                                "!bg-neutral-950 hover:!bg-neutral-950 uppercase",
                              th: "text-xs font-normal !bg-neutral-950 hover:!bg-neutral-950 text-neutral-400 h-10",
                              tbody: "bg-white/5",
                              td: "text-neutral-300 text-sm py-4 font-semibold",
                              tr: "border-b-1 border-neutral-800 last:border-b-0 hover:bg-white/5 transition-all duration-400 even:bg-neutral-950 odd:bg-[#141414]",
                            }
                          : {
                              table: "overflow-x-auto",
                              th: "!pl-0.5 !py-2 !font-normal !text-xs !text-slate-900 !border-ash !border-b bg-transparent",
                              td: "!pl-0.5 !py-1 !text-xs",
                              tr: "!border-[#1f222c]/90",
                            },
                      styles: { table: { minWidth: l || "1200px" } },
                      className: "!p-1",
                      children: [
                        (0, t.jsx)(o.Table.Thead, {
                          children: (0, t.jsxs)(o.Table.Tr, {
                            children: [
                              e.includes("Time")
                                ? null
                                : (0, t.jsx)(o.Table.Th, {
                                    className: "!w-[210px] !max-w-[250px]",
                                    children: (0, t.jsx)("div", {
                                      className: "ml-2",
                                      children: "Time",
                                    }),
                                  }),
                              e.includes("Type")
                                ? null
                                : (0, t.jsx)(o.Table.Th, { children: "Type" }),
                              e.includes("Coin")
                                ? null
                                : (0, t.jsx)(o.Table.Th, {
                                    children: (0, t.jsx)("div", {
                                      className: "ml-2",
                                      children: "Coin",
                                    }),
                                  }),
                              e.includes("Direction")
                                ? null
                                : (0, t.jsx)(o.Table.Th, {
                                    className: "!w-[120px] !max-w-[120px]",
                                    children: "Direction",
                                  }),
                              e.includes("Size")
                                ? null
                                : (0, t.jsx)(o.Table.Th, { children: "Size" }),
                              e.includes("Order_Value")
                                ? null
                                : (0, t.jsx)(o.Table.Th, {
                                    className: "!w-[150px] !max-w-[150px]",
                                    children: "Order Value",
                                  }),
                              e.includes("Price")
                                ? null
                                : (0, t.jsx)(o.Table.Th, {
                                    className: "!w-[100px] !max-w-[100px]",
                                    children: "Price",
                                  }),
                              e.includes("Trigger_Condition")
                                ? null
                                : (0, t.jsx)(o.Table.Th, {
                                    className: "!w-[120px] !max-w-[120px]",
                                    children: "Trigger Condition",
                                  }),
                              e.includes("Cancel") || n
                                ? null
                                : (0, t.jsx)(o.Table.Th, {
                                    className:
                                      "text-right !w-[180px] !max-w-[180px] cursor-pointer hover:!text-blood",
                                    onClick: () => {
                                      p();
                                    },
                                    children: "Cancel All",
                                  }),
                            ],
                          }),
                        }),
                        (0, t.jsx)(o.Table.Tbody, { children: R }),
                      ],
                    }),
                O?.length === 0
                  ? (0, t.jsx)("div", {
                      className: "pb-10",
                      children: (0, t.jsx)(V.default, {
                        text: "No Open Orders",
                      }),
                    })
                  : null,
              ],
            }),
            (0, t.jsx)(_.default, {
              opened: h,
              onClose: b,
              centered: !0,
              size: "md",
              withCloseButton: !0,
              useDrawerOnMobile: !0,
              classNames: {
                content: "!bg-[#0B0E11] !border-zinc-800 !rounded-2xl",
                header: "!bg-transparent !p-4 !h-auto !min-h-0",
                close: "!text-zinc-500 hover:!bg-white/5",
              },
              drawerHeight: "30%",
              content: (0, t.jsxs)("div", {
                className: "p-6 pt-0 text-center",
                children: [
                  (0, t.jsx)("h2", {
                    className: "text-2xl font-medium text-white mb-2",
                    children: "Confirm Cancel All",
                  }),
                  (0, t.jsx)("p", {
                    className: "text-zinc-400 text-sm mb-8",
                    children: "This will cancel all your open orders.",
                  }),
                  (0, t.jsx)(r.Button, {
                    className:
                      "!w-full !bg-long-text hover:!bg-long-text/90 !text-black !h-12 !rounded-xl !font-medium",
                    onClick: U,
                    children: "Confirm",
                  }),
                ],
              }),
            }),
          ],
        });
      },
      Z = ({ variant: e = "tabs", isSocial: l = !1 }) => {
        let { fills: r, metaAssets: n } = (0, i.useHyperliquidStore)(
            (0, A.useShallow)((e) => ({
              fills: l ? e.socialFills : e.fills,
              metaAssets: l ? e.socialMetaAssets : e.metaAssets,
            }))
          ),
          { getTokenNameByMetaAssetsName: u } = (0, G.useSpotUtils)(),
          h = (0, E.useRouter)(),
          { authenticated: p } = (0, a.usePrivy)(),
          [b, { open: f, close: g }] = (0, d.useDisclosure)(!1),
          [j, N] = (0, s.useState)(null),
          [v, w] = (0, s.useState)(1),
          y = "gtr" === e,
          S = y
            ? {
                table: "rounded-lg overflow-hidden border-1 border-neutral-900",
                thead: "!bg-neutral-950 hover:!bg-neutral-950 uppercase",
                th: "text-xs font-normal !bg-neutral-950 hover:!bg-neutral-950 text-neutral-400 h-10",
                tbody: "bg-white/5",
                td: "text-neutral-300 text-sm py-4 font-semibold",
                tr: "border-b-1 border-neutral-800 last:border-b-0 hover:bg-white/5 transition-all duration-400 even:bg-neutral-950 odd:bg-[#141414]",
              }
            : {
                table: "!min-w-[1200px] overflow-x-auto",
                th: "!pl-0.5 !py-2 !font-normal !text-xs !text-slate-900 !border-ash !border-b bg-transparent",
                td: "!pl-0.5 !py-1 !text-xs",
                tr: "!border-[#1f222c]/90",
              };
        (0, s.useEffect)(() => {
          if (!j?.coin) return;
          let e = localStorage.getItem("lastSetLeverage");
          w(
            e && Object.keys(JSON.parse(e)).includes(j.coin)
              ? JSON.parse(e || "{}")[j.coin]
              : n.find((e) => e.name === j.coin)?.maxLeverage
          );
        }, [j, n]);
        let C = (0, s.useCallback)(
            (e) => {
              N(e), f();
            },
            [f]
          ),
          P = (0, s.useCallback)(() => {
            h.push("/trade/trade-history");
          }, [h]),
          D = (0, s.useMemo)(
            () => [...(r?.sort((e, t) => t.time - e.time).slice(0, 15) || [])],
            [r]
          ),
          k = (e) => {
            let t = new Date(e?.time);
            return {
              formattedTime: `${
                t.getMonth() + 1
              }/${t.getDate()}/${t.getFullYear()} — ${
                t.getHours() % 12 || 12
              }:${String(t.getMinutes()).padStart(2, "0")}:${String(
                t.getSeconds()
              ).padStart(2, "0")} ${t.getHours() >= 12 ? "PM" : "AM"}`,
              tradeValue: (0, m.convertIntl)(
                (0, m.roundedNumber)(Number(e?.sz) * Number(e?.px))
              ),
            };
          },
          z = (0, c.useIsMobile)(),
          M = (0, s.useMemo)(
            () =>
              D.map((e, s) => {
                let { formattedTime: a, tradeValue: r } = k(e);
                return (0, t.jsxs)(
                  o.Table.Tr,
                  {
                    children: [
                      (0, t.jsx)(o.Table.Td, {
                        className: "cursor-pointer",
                        children: (0, t.jsx)("div", {
                          className: "ml-2",
                          children: a,
                        }),
                      }),
                      (0, t.jsx)(o.Table.Td, {
                        children: e?.coin.includes("@")
                          ? u(e?.coin) || e?.coin
                          : (0, t.jsx)(T.default, { tokenName: e?.coin }),
                      }),
                      (0, t.jsx)(o.Table.Td, {
                        children: (0, t.jsx)("span", {
                          className: (0, x.default)(
                            "inline-block px-1 py-0.5 rounded-sm text-2xs font-medium uppercase !w-[88px] text-center",
                            {
                              "text-grass bg-grass/20 border border-grass/40":
                                e?.dir === "Open Long" ||
                                e?.dir === "Close Short" ||
                                e?.dir === "Buy",
                              "text-blood bg-blood/20 border border-blood/40":
                                e?.dir === "Open Short" ||
                                e?.dir === "Close Long" ||
                                e?.dir === "Sell",
                              "text-blue-500 bg-blue-500/20 border border-blue-500/40":
                                ![
                                  "Open Long",
                                  "Close Short",
                                  "Buy",
                                  "Open Short",
                                  "Close Long",
                                  "Sell",
                                ].includes(e?.dir),
                            }
                          ),
                          children: e?.dir,
                        }),
                      }),
                      (0, t.jsx)(o.Table.Td, {
                        children: (0, m.convertIntlV2)(Number(e?.px), !1),
                      }),
                      (0, t.jsx)(o.Table.Td, {
                        children: (0, m.convertIntl)(Number(e?.sz), !1),
                      }),
                      (0, t.jsx)(o.Table.Td, { children: r }),
                      (0, t.jsx)(o.Table.Td, {
                        children: (0, t.jsxs)("div", {
                          className: "flex gap-1 items-center",
                          children: [
                            (0, t.jsx)("div", {
                              className: (0, x.default)({
                                "text-grass": e?.closedPnl > 0,
                                "text-blood": e?.closedPnl < 0,
                                "text-slate-900": e?.closedPnl === 0 && !y,
                                "text-neutral-500": e?.closedPnl === 0 && y,
                              }),
                              children:
                                0 === Number(e?.closedPnl)
                                  ? "$0"
                                  : `${e?.closedPnl >= 0 ? "" : "-"}${(0,
                                    m.convertIntl)(
                                      (0, m.truncateToDecimals)(
                                        Math.abs(e?.closedPnl),
                                        3
                                      )
                                    )}`,
                            }),
                            e?.dir?.includes("Close") &&
                              !l &&
                              (0, t.jsx)("div", {
                                className: "group p-1 cursor-pointer",
                                onClick: () => C(e),
                                children: (0, t.jsx)(H.IconShare2, {
                                  size: 15,
                                  className: (0, x.default)(
                                    "transition-colors duration-300",
                                    {
                                      "text-slate-900 group-hover:text-white":
                                        !y,
                                      "text-neutral-500 group-hover:text-white":
                                        y,
                                    }
                                  ),
                                }),
                              }),
                          ],
                        }),
                      }),
                    ],
                  },
                  e?.tid || e?.hash || s
                );
              }),
            [D, y, u, C]
          );
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsxs)("div", {
              className: "pb-2 h-full",
              children: [
                z
                  ? (0, t.jsxs)("div", {
                      className: "flex flex-col gap-3 p-2",
                      children: [
                        !l &&
                          D.length > 0 &&
                          (0, t.jsx)("div", {
                            className:
                              "flex justify-end items-center px-2 py-1",
                            children:
                              p &&
                              r.length > 15 &&
                              (0, t.jsx)("span", {
                                className:
                                  "text-xs font-semibold text-brand-blue cursor-pointer",
                                onClick: P,
                                children: "View All",
                              }),
                          }),
                        D.map((e, s) =>
                          ((e, s) => {
                            let { formattedTime: a, tradeValue: r } = k(e);
                            return (0, t.jsx)(
                              "div",
                              {
                                className:
                                  "flex flex-col gap-4 py-4 px-4 rounded-xl bg-neutral-900 border border-neutral-800 shadow-lg",
                                children: (0, t.jsxs)("div", {
                                  className: "grid grid-cols-3 gap-y-4 gap-x-2",
                                  children: [
                                    (0, t.jsxs)("div", {
                                      className: "flex flex-col gap-0.5",
                                      children: [
                                        (0, t.jsx)("span", {
                                          className:
                                            "text-neutral-500 text-xs font-normal",
                                          children: "Coin",
                                        }),
                                        (0, t.jsx)("div", {
                                          className:
                                            "text-white text-xs font-semibold",
                                          children: e?.coin.includes("@")
                                            ? u(e?.coin) || e?.coin
                                            : (0, t.jsx)(T.default, {
                                                tokenName: e?.coin,
                                              }),
                                        }),
                                      ],
                                    }),
                                    (0, t.jsxs)("div", {
                                      className:
                                        "flex flex-col gap-0.5 col-span-2",
                                      children: [
                                        (0, t.jsx)("span", {
                                          className:
                                            "text-neutral-500 text-xs font-normal text-nowrap",
                                          children: "Time",
                                        }),
                                        (0, t.jsx)("span", {
                                          className:
                                            "text-white text-xs font-medium leading-[1.2]",
                                          children: a,
                                        }),
                                      ],
                                    }),
                                    (0, t.jsxs)("div", {
                                      className: "flex flex-col gap-0.5",
                                      children: [
                                        (0, t.jsx)("span", {
                                          className:
                                            "text-neutral-500 text-xs font-normal",
                                          children: "Description",
                                        }),
                                        (0, t.jsx)("span", {
                                          className: (0, x.default)(
                                            "text-xs font-medium uppercase",
                                            {
                                              "text-grass":
                                                e?.dir === "Open Long" ||
                                                e?.dir === "Close Short" ||
                                                e?.dir === "Buy",
                                              "text-blood":
                                                e?.dir === "Open Short" ||
                                                e?.dir === "Close Long" ||
                                                e?.dir === "Sell",
                                            }
                                          ),
                                          children: e?.dir,
                                        }),
                                      ],
                                    }),
                                    (0, t.jsxs)("div", {
                                      className: "flex flex-col gap-0.5",
                                      children: [
                                        (0, t.jsx)("span", {
                                          className:
                                            "text-neutral-500 text-xs font-normal",
                                          children: "Price",
                                        }),
                                        (0, t.jsx)("span", {
                                          className:
                                            "text-white text-xs font-medium",
                                          children: (0, m.convertIntlV2)(
                                            Number(e?.px),
                                            !1
                                          ),
                                        }),
                                      ],
                                    }),
                                    (0, t.jsxs)("div", {
                                      className: "flex flex-col gap-0.5",
                                      children: [
                                        (0, t.jsx)("span", {
                                          className:
                                            "text-neutral-500 text-xs font-normal",
                                          children: "Size",
                                        }),
                                        (0, t.jsx)("span", {
                                          className:
                                            "text-white text-xs font-medium",
                                          children: (0, m.convertIntl)(
                                            Number(e?.sz),
                                            !1
                                          ),
                                        }),
                                      ],
                                    }),
                                    (0, t.jsxs)("div", {
                                      className: "flex flex-col gap-0.5",
                                      children: [
                                        (0, t.jsx)("span", {
                                          className:
                                            "text-neutral-500 text-xs font-normal",
                                          children: "Trade Value",
                                        }),
                                        (0, t.jsx)("span", {
                                          className:
                                            "text-white text-xs font-medium",
                                          children: r,
                                        }),
                                      ],
                                    }),
                                    (0, t.jsxs)("div", {
                                      className:
                                        "flex flex-col gap-0.5 col-span-2",
                                      children: [
                                        (0, t.jsx)("span", {
                                          className:
                                            "text-neutral-500 text-xs font-normal",
                                          children: "Closed PnL",
                                        }),
                                        (0, t.jsxs)("div", {
                                          className: "flex gap-2 items-center",
                                          children: [
                                            (0, t.jsx)("div", {
                                              className: (0, x.default)(
                                                "text-xs font-medium",
                                                {
                                                  "text-grass":
                                                    e?.closedPnl > 0,
                                                  "text-blood":
                                                    e?.closedPnl < 0,
                                                  "text-neutral-500":
                                                    e?.closedPnl === 0,
                                                }
                                              ),
                                              children:
                                                0 === Number(e?.closedPnl)
                                                  ? "$0"
                                                  : `${
                                                      e?.closedPnl >= 0
                                                        ? ""
                                                        : "-"
                                                    }${(0, m.convertIntl)(
                                                      (0, m.truncateToDecimals)(
                                                        Math.abs(e?.closedPnl),
                                                        3
                                                      )
                                                    )}`,
                                            }),
                                            e?.dir?.includes("Close") &&
                                              !l &&
                                              (0, t.jsx)("div", {
                                                className: "p-1 cursor-pointer",
                                                onClick: () => C(e),
                                                children: (0, t.jsx)(
                                                  H.IconShare2,
                                                  {
                                                    size: 15,
                                                    className:
                                                      "text-neutral-500",
                                                  }
                                                ),
                                              }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              },
                              e?.tid || e?.hash || s
                            );
                          })(e, s)
                        ),
                      ],
                    })
                  : (0, t.jsx)("div", {
                      className: "overflow-auto",
                      children: (0, t.jsxs)(o.Table, {
                        classNames: S,
                        className: "!p-1",
                        styles: { table: { minWidth: "1200px" } },
                        children: [
                          (0, t.jsx)(o.Table.Thead, {
                            children: (0, t.jsxs)(o.Table.Tr, {
                              children: [
                                (0, t.jsx)(o.Table.Th, {
                                  className: "!w-[250px] !max-w-[250px]",
                                  children: (0, t.jsx)("div", {
                                    className: "ml-2",
                                    children: "Time",
                                  }),
                                }),
                                (0, t.jsx)(o.Table.Th, { children: "Coin" }),
                                (0, t.jsx)(o.Table.Th, {
                                  children: "Description",
                                }),
                                (0, t.jsx)(o.Table.Th, { children: "Price" }),
                                (0, t.jsx)(o.Table.Th, { children: "Size" }),
                                (0, t.jsx)(o.Table.Th, {
                                  className: "!w-[150px] !max-w-[150px]",
                                  children: "Trade Value",
                                }),
                                (0, t.jsx)(o.Table.Th, {
                                  className: "!w-[150px] !max-w-[150px]",
                                  children: "Closed PnL",
                                }),
                              ],
                            }),
                          }),
                          (0, t.jsx)(o.Table.Tbody, { children: M }),
                        ],
                      }),
                    }),
                0 === r.length
                  ? (0, t.jsx)("div", {
                      className: "pb-10",
                      children: (0, t.jsx)(V.default, {
                        text: "No Trades Yet",
                      }),
                    })
                  : null,
                !z && p && r.length > 15 && !l
                  ? (0, t.jsx)("div", {
                      className:
                        "text-sm font-medium pt-2 pb-2 pl-2 text-grass hover:underline underline-offset-4 cursor-pointer",
                      onClick: P,
                      children: "View all trades",
                    })
                  : null,
              ],
            }),
            (0, t.jsx)(U.default, {
              opened: b,
              close: g,
              tradeItem: j,
              leverage: v,
            }),
          ],
        });
      },
      ee = ({ variant: e = "tabs" }) => {
        let { fundingHistory: l, setFundingHistory: r } = (0,
          i.useHyperliquidStore)(
            (0, A.useShallow)((e) => ({
              fundingHistory: e.fundingHistory,
              setFundingHistory: e.setFundingHistory,
            }))
          ),
          { messageEvent: n, isConnected: d } = (0,
          q.useHyperliquidWebSocket)(),
          { authenticated: u } = (0, a.usePrivy)(),
          m = (0, E.useRouter)(),
          { wallets: h } = (0, g.useWallets)(),
          p = h.find((e) => "privy" === e.walletClientType),
          b = (0, s.useMemo)(
            () => [...(l?.sort((e, t) => t.time - e.time).slice(0, 15) || [])],
            [l]
          ),
          f = (e) => {
            let t = new Date(e?.time),
              s = `${t.getMonth() + 1}/${t.getDate()}/${t.getFullYear()} — ${
                t.getHours() % 12 || 12
              }:${String(t.getMinutes()).padStart(2, "0")}:${String(
                t.getSeconds()
              ).padStart(2, "0")} ${t.getHours() >= 12 ? "PM" : "AM"}`;
            return {
              formattedTime: s,
              isLong: e?.szi > 0,
              rate: parseFloat(e?.fundingRate)
                ? (100 * parseFloat(e?.fundingRate)).toFixed(4) + "%"
                : "N/A",
            };
          },
          j = (0, c.useIsMobile)(),
          N = b.map((e, s) => {
            let { formattedTime: l, isLong: a, rate: r } = f(e);
            return (0, t.jsxs)(
              o.Table.Tr,
              {
                children: [
                  (0, t.jsx)(o.Table.Td, {
                    className: "cursor-pointer",
                    children: (0, t.jsx)("div", {
                      className: "ml-2",
                      children: l,
                    }),
                  }),
                  (0, t.jsx)(o.Table.Td, {
                    children: (0, t.jsx)("div", {
                      className: (0, x.default)("font-semibold", {
                        "text-grass/90": a,
                        "text-blood/90": !a,
                      }),
                      children: (0, t.jsx)(T.default, { tokenName: e?.coin }),
                    }),
                  }),
                  (0, t.jsx)(o.Table.Td, {
                    children: (0, t.jsx)("span", {
                      className: (0, x.default)(
                        "inline-block w-[50px] text-center px-1 py-0.5 rounded-sm text-2xs font-medium",
                        {
                          "text-grass bg-grass/20 border border-grass/40": a,
                          "text-blood bg-blood/20 border border-blood/40": !a,
                        }
                      ),
                      children: a ? "LONG" : "SHORT",
                    }),
                  }),
                  (0, t.jsxs)(o.Table.Td, {
                    children: [Math.abs(Number(e?.szi)), " ", e?.coin],
                  }),
                  (0, t.jsx)(o.Table.Td, {
                    className: (0, x.default)({
                      "text-grass": e?.usdc > 0,
                      "text-blood": e?.usdc < 0,
                    }),
                    children: e?.usdc,
                  }),
                  (0, t.jsx)(o.Table.Td, { children: r }),
                ],
              },
              s
            );
          }),
          v = (e) => {
            e &&
              e?.user?.toLowerCase() === p?.address?.toLowerCase() &&
              r(e?.fundings);
          };
        return (
          (0, s.useEffect)(() => {
            d && u && p?.address && n("userFundings", v);
          }, [d, u, p]),
          (0, t.jsxs)("div", {
            className: "h-full overflow-auto pb-10",
            children: [
              j
                ? (0, t.jsxs)("div", {
                    className: "flex flex-col gap-3 p-2",
                    children: [
                      b.length > 0 &&
                        (0, t.jsx)("div", {
                          className: "flex justify-end items-center px-2 py-1",
                          children:
                            u &&
                            l.length > 15 &&
                            (0, t.jsx)("span", {
                              className:
                                "text-xs font-semibold text-brand-blue cursor-pointer",
                              onClick: () => m.push("/trade/funding-history"),
                              children: "View All",
                            }),
                        }),
                      b.map((e, s) =>
                        ((e, s) => {
                          let { formattedTime: l, isLong: a, rate: r } = f(e);
                          return (0, t.jsx)(
                            "div",
                            {
                              className:
                                "flex flex-col gap-4 py-4 px-4 rounded-xl bg-neutral-900 border border-neutral-800 shadow-lg",
                              children: (0, t.jsxs)("div", {
                                className: "grid grid-cols-3 gap-y-4 gap-x-2",
                                children: [
                                  (0, t.jsxs)("div", {
                                    className: "flex flex-col gap-0.5",
                                    children: [
                                      (0, t.jsx)("span", {
                                        className:
                                          "text-neutral-500 text-xs font-normal",
                                        children: "Coin",
                                      }),
                                      (0, t.jsx)("div", {
                                        className: (0, x.default)(
                                          "text-xs font-semibold",
                                          {
                                            "text-grass/90": a,
                                            "text-blood/90": !a,
                                          }
                                        ),
                                        children: (0, t.jsx)(T.default, {
                                          tokenName: e?.coin,
                                        }),
                                      }),
                                    ],
                                  }),
                                  (0, t.jsxs)("div", {
                                    className:
                                      "flex flex-col gap-0.5 col-span-2",
                                    children: [
                                      (0, t.jsx)("span", {
                                        className:
                                          "text-neutral-500 text-xs font-normal text-nowrap",
                                        children: "Time",
                                      }),
                                      (0, t.jsx)("span", {
                                        className:
                                          "text-white text-xs font-medium leading-[1.2]",
                                        children: l,
                                      }),
                                    ],
                                  }),
                                  (0, t.jsxs)("div", {
                                    className: "flex flex-col gap-0.5",
                                    children: [
                                      (0, t.jsx)("span", {
                                        className:
                                          "text-neutral-500 text-xs font-normal",
                                        children: "Side",
                                      }),
                                      (0, t.jsx)("span", {
                                        className: (0, x.default)(
                                          "text-xs font-medium",
                                          { "text-grass": a, "text-blood": !a }
                                        ),
                                        children: a ? "LONG" : "SHORT",
                                      }),
                                    ],
                                  }),
                                  (0, t.jsxs)("div", {
                                    className: "flex flex-col gap-0.5",
                                    children: [
                                      (0, t.jsx)("span", {
                                        className:
                                          "text-neutral-500 text-xs font-normal",
                                        children: "Size",
                                      }),
                                      (0, t.jsxs)("span", {
                                        className:
                                          "text-white text-xs font-medium",
                                        children: [
                                          Math.abs(Number(e?.szi)),
                                          " ",
                                          e?.coin,
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, t.jsxs)("div", {
                                    className: "flex flex-col gap-0.5",
                                    children: [
                                      (0, t.jsx)("span", {
                                        className:
                                          "text-neutral-500 text-xs font-normal",
                                        children: "Payment",
                                      }),
                                      (0, t.jsxs)("span", {
                                        className: (0, x.default)(
                                          "text-xs font-medium",
                                          {
                                            "text-grass": e?.usdc > 0,
                                            "text-blood": e?.usdc < 0,
                                            "text-white": e?.usdc === 0,
                                          }
                                        ),
                                        children: [e?.usdc, " USDC"],
                                      }),
                                    ],
                                  }),
                                  (0, t.jsxs)("div", {
                                    className: "flex flex-col gap-0.5",
                                    children: [
                                      (0, t.jsx)("span", {
                                        className:
                                          "text-neutral-500 text-xs font-normal",
                                        children: "Rate",
                                      }),
                                      (0, t.jsx)("span", {
                                        className:
                                          "text-white text-xs font-medium",
                                        children: r,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            },
                            s
                          );
                        })(e, s)
                      ),
                    ],
                  })
                : (0, t.jsxs)(o.Table, {
                    classNames:
                      "gtr" === e
                        ? {
                            table:
                              "rounded-lg overflow-hidden border-1 border-neutral-900",
                            thead:
                              "!bg-neutral-950 hover:!bg-neutral-950 uppercase",
                            th: "text-xs font-normal !bg-neutral-950 hover:!bg-neutral-950 text-neutral-400 h-10",
                            tbody: "bg-white/5",
                            td: "text-neutral-300 text-sm py-4 font-semibold",
                            tr: "border-b-1 border-neutral-800 last:border-b-0 hover:bg-white/5 transition-all duration-400 even:bg-neutral-950 odd:bg-[#141414]",
                          }
                        : {
                            table: "!min-w-[700px] overflow-x-auto",
                            th: "!pl-0.5 !py-2 !font-normal !text-xs !text-slate-900 !border-ash !border-b bg-transparent",
                            td: "!pl-0.5 !py-2 !text-xs",
                            tr: "!border-[#1f222c]/90",
                          },
                    className: "!p-1",
                    styles: { table: { minWidth: "1200px" } },
                    children: [
                      (0, t.jsx)(o.Table.Thead, {
                        children: (0, t.jsxs)(o.Table.Tr, {
                          children: [
                            (0, t.jsx)(o.Table.Th, {
                              className: "!w-[250px] !max-w-[250px]",
                              children: (0, t.jsx)("div", {
                                className: "ml-2",
                                children: "Time",
                              }),
                            }),
                            (0, t.jsx)(o.Table.Th, { children: "Coin" }),
                            (0, t.jsx)(o.Table.Th, {
                              children: "Position Side",
                            }),
                            (0, t.jsx)(o.Table.Th, { children: "Size" }),
                            (0, t.jsx)(o.Table.Th, { children: "Payment" }),
                            (0, t.jsx)(o.Table.Th, { children: "Rate" }),
                          ],
                        }),
                      }),
                      (0, t.jsx)(o.Table.Tbody, { children: N }),
                    ],
                  }),
              0 === l.length
                ? (0, t.jsx)("div", {
                    className: "pb-10",
                    children: (0, t.jsx)(V.default, { text: "No Data" }),
                  })
                : null,
              !j && u && l.length > 15
                ? (0, t.jsx)("div", {
                    className:
                      "text-sm font-medium pt-2 pb-2 pl-2 text-grass hover:underline underline-offset-4 cursor-pointer",
                    onClick: () => m.push("/trade/funding-history"),
                    children: "View all",
                  })
                : null,
            ],
          })
        );
      },
      et = ({
        minHeight: e = "auto",
        variant: l = "tabs",
        isSocial: r = !1,
      }) => {
        let {
            orderHistory: n,
            setOrderHistory: d,
            selectedSocialAddress: u,
          } = (0, i.useHyperliquidStore)(
            (0, A.useShallow)((e) => ({
              orderHistory: r ? e.socialOrderHistory : e.orderHistory,
              setOrderHistory: r ? e.setSocialOrderHistory : e.setOrderHistory,
              selectedSocialAddress: e.selectedSocialAddress,
            }))
          ),
          { getTokenNameByMetaAssetsName: h } = (0, G.useSpotUtils)(),
          p = (0, E.useRouter)(),
          { authenticated: b } = (0, a.usePrivy)(),
          { messageEvent: f, isConnected: j } = (0,
          q.useHyperliquidWebSocket)(),
          { wallets: N } = (0, g.useWallets)(),
          v = N.find((e) => "privy" === e.walletClientType),
          w = (0, s.useCallback)(
            (e) => {
              let t = r ? u?.hyperliquid : v?.address;
              e &&
                t &&
                e?.user?.toLowerCase() === t?.toLowerCase() &&
                (e?.isSnapshot
                  ? d(e?.orderHistory)
                  : d([
                      ...(r
                        ? i.useHyperliquidStore.getState().socialOrderHistory
                        : i.useHyperliquidStore.getState().orderHistory),
                      ...e?.orderHistory,
                    ]));
            },
            [r, u?.hyperliquid, v?.address, d]
          );
        (0, s.useEffect)(() => {
          j && b && v?.address && !r && f("userHistoricalOrders", w);
        }, [j, b, v?.address, r, w]);
        let y = (0, s.useMemo)(
            () => [
              ...(n
                ?.sort((e, t) => t.order.timestamp - e.order.timestamp)
                .slice(0, 15) || []),
            ],
            [n]
          ),
          S = (e) => {
            let t = new Date(e?.order.timestamp),
              s = `${t.getMonth() + 1}/${t.getDate()}/${t.getFullYear()} — ${
                t.getHours() % 12 || 12
              }:${String(t.getMinutes()).padStart(2, "0")}:${String(
                t.getSeconds()
              ).padStart(2, "0")} ${t.getHours() >= 12 ? "PM" : "AM"}`;
            return {
              formattedTime: s,
              isLong: e?.order.side === "B",
              orderValue:
                e?.order.orderType === "Limit"
                  ? `${(0, m.convertIntl)(
                      (0, m.roundedNumber)(
                        Number(e?.order.sz) * Number(e?.order.limitPx)
                      )
                    )}`
                  : "Market",
            };
          },
          C = (0, c.useIsMobile)(),
          P = y.map((e, s) => {
            let { formattedTime: l, isLong: a, orderValue: r } = S(e);
            return (0, t.jsxs)(
              o.Table.Tr,
              {
                children: [
                  (0, t.jsx)(o.Table.Td, {
                    className: "cursor-pointer",
                    children: (0, t.jsx)("div", {
                      className: "ml-2",
                      children: l,
                    }),
                  }),
                  (0, t.jsx)(o.Table.Td, { children: e?.order.orderType }),
                  (0, t.jsx)(o.Table.Td, {
                    children: (0, t.jsx)("div", {
                      className: (0, x.default)("font-semibold", {
                        "text-grass/90": a,
                        "text-blood/90": !a,
                      }),
                      children: e?.order?.coin.includes("@")
                        ? h(e?.order?.coin) || e?.order?.coin
                        : (0, t.jsx)(T.default, { tokenName: e?.order?.coin }),
                    }),
                  }),
                  (0, t.jsx)(o.Table.Td, {
                    children: (0, t.jsx)("span", {
                      className: (0, x.default)(
                        "text-center px-1 py-0.5 rounded-sm text-2xs font-medium uppercase",
                        {
                          "w-[50px]": !e?.order.isTrigger,
                          "w-[80px]": e?.order.isTrigger,
                          "text-grass bg-grass/20 border border-grass/40": a,
                          "text-blood bg-blood/20 border border-blood/40": !a,
                        }
                      ),
                      children: e?.order?.coin.includes("@")
                        ? (0, t.jsx)(t.Fragment, {
                            children: a ? "Buy" : "Sell",
                          })
                        : (0, t.jsx)(t.Fragment, {
                            children: a ? "Long" : "Short",
                          }),
                    }),
                  }),
                  (0, t.jsx)(o.Table.Td, {
                    children: (0, m.convertIntl)(Number(e?.order.origSz), !1),
                  }),
                  (0, t.jsx)(o.Table.Td, {
                    children: (0, m.convertIntl)(Number(e?.order?.sz), !1),
                  }),
                  (0, t.jsx)(o.Table.Td, { children: r }),
                  (0, t.jsx)(o.Table.Td, {
                    children:
                      e?.order.orderType === "Limit"
                        ? `${(0, m.convertIntlV2)(
                            Number(e?.order.limitPx),
                            !1
                          )}`
                        : "Market",
                  }),
                  (0, t.jsx)(o.Table.Td, {
                    children: e?.order.reduceOnly ? "Yes" : "No",
                  }),
                  (0, t.jsx)(o.Table.Td, {
                    children:
                      e?.order.orderType === "Limit"
                        ? "N/A"
                        : e?.order.triggerCondition,
                  }),
                  (0, t.jsx)(o.Table.Td, {
                    className: "capitalize",
                    title: e?.status,
                    children: e?.status.toLowerCase().includes("rejected")
                      ? "Rejected"
                      : e?.status,
                  }),
                  (0, t.jsx)(o.Table.Td, {
                    className: "text-right",
                    children: (0, t.jsx)("span", {
                      className: "mr-2",
                      children: e?.order.oid,
                    }),
                  }),
                ],
              },
              s
            );
          });
        return (0, t.jsxs)("div", {
          className: "h-full overflow-auto pb-10",
          style: { minHeight: e },
          children: [
            C
              ? (0, t.jsxs)("div", {
                  className: "flex flex-col gap-3 p-2",
                  children: [
                    !r &&
                      y.length > 0 &&
                      (0, t.jsx)("div", {
                        className: "flex justify-end items-center px-2 py-1",
                        children:
                          b &&
                          n.length > 15 &&
                          (0, t.jsx)("span", {
                            className:
                              "text-xs font-semibold text-brand-blue cursor-pointer",
                            onClick: () => p.push("/trade/order-history"),
                            children: "View All",
                          }),
                      }),
                    y.map((e, s) =>
                      ((e, s) => {
                        let {
                          formattedTime: l,
                          isLong: a,
                          orderValue: r,
                        } = S(e);
                        return (0, t.jsxs)(
                          "div",
                          {
                            className:
                              "flex flex-col gap-4 py-4 px-4 rounded-xl bg-neutral-900 border border-neutral-800 shadow-lg",
                            children: [
                              (0, t.jsxs)("div", {
                                className: "grid grid-cols-3 gap-y-4 gap-x-2",
                                children: [
                                  (0, t.jsxs)("div", {
                                    className: "flex flex-col gap-0.5",
                                    children: [
                                      (0, t.jsx)("span", {
                                        className:
                                          "text-neutral-500 text-xs font-normal",
                                        children: "Coin",
                                      }),
                                      (0, t.jsx)("div", {
                                        className: (0, x.default)(
                                          "text-xs font-semibold",
                                          {
                                            "text-grass/90": a,
                                            "text-blood/90": !a,
                                          }
                                        ),
                                        children: e?.order?.coin.includes("@")
                                          ? h(e?.order?.coin) || e?.order?.coin
                                          : (0, t.jsx)(T.default, {
                                              tokenName: e?.order?.coin,
                                            }),
                                      }),
                                    ],
                                  }),
                                  (0, t.jsxs)("div", {
                                    className:
                                      "flex flex-col gap-0.5 col-span-2",
                                    children: [
                                      (0, t.jsx)("span", {
                                        className:
                                          "text-neutral-500 text-xs font-normal text-nowrap",
                                        children: "Time",
                                      }),
                                      (0, t.jsx)("span", {
                                        className:
                                          "text-white text-xs font-medium leading-[1.2]",
                                        children: l,
                                      }),
                                    ],
                                  }),
                                  (0, t.jsxs)("div", {
                                    className: "flex flex-col gap-0.5",
                                    children: [
                                      (0, t.jsx)("span", {
                                        className:
                                          "text-neutral-500 text-xs font-normal",
                                        children: "Type",
                                      }),
                                      (0, t.jsx)("span", {
                                        className:
                                          "text-white text-xs font-medium",
                                        children: e?.order.orderType,
                                      }),
                                    ],
                                  }),
                                  (0, t.jsxs)("div", {
                                    className: "flex flex-col gap-0.5",
                                    children: [
                                      (0, t.jsx)("span", {
                                        className:
                                          "text-neutral-500 text-xs font-normal",
                                        children: "Direction",
                                      }),
                                      (0, t.jsx)("span", {
                                        className: (0, x.default)(
                                          "text-xs font-medium uppercase",
                                          { "text-grass": a, "text-blood": !a }
                                        ),
                                        children: e?.order?.coin.includes("@")
                                          ? a
                                            ? "Buy"
                                            : "Sell"
                                          : a
                                          ? "Long"
                                          : "Short",
                                      }),
                                    ],
                                  }),
                                  (0, t.jsxs)("div", {
                                    className: "flex flex-col gap-0.5",
                                    children: [
                                      (0, t.jsx)("span", {
                                        className:
                                          "text-neutral-500 text-xs font-normal text-nowrap",
                                        children: "Status",
                                      }),
                                      (0, t.jsx)("span", {
                                        className:
                                          "text-white text-xs font-medium capitalize",
                                        children: e?.status
                                          .toLowerCase()
                                          .includes("rejected")
                                          ? "Rejected"
                                          : e?.status,
                                      }),
                                    ],
                                  }),
                                  (0, t.jsxs)("div", {
                                    className: "flex flex-col gap-0.5",
                                    children: [
                                      (0, t.jsx)("span", {
                                        className:
                                          "text-neutral-500 text-xs font-normal",
                                        children: "Size",
                                      }),
                                      (0, t.jsx)("span", {
                                        className:
                                          "text-white text-xs font-medium text-nowrap overflow-hidden",
                                        children: (0, m.convertIntl)(
                                          Number(e?.order.origSz),
                                          !1
                                        ),
                                      }),
                                    ],
                                  }),
                                  (0, t.jsxs)("div", {
                                    className: "flex flex-col gap-0.5",
                                    children: [
                                      (0, t.jsx)("span", {
                                        className:
                                          "text-neutral-500 text-xs font-normal",
                                        children: "Filled Size",
                                      }),
                                      (0, t.jsx)("span", {
                                        className:
                                          "text-white text-xs font-medium",
                                        children: (0, m.convertIntl)(
                                          Number(e?.order?.sz),
                                          !1
                                        ),
                                      }),
                                    ],
                                  }),
                                  (0, t.jsxs)("div", {
                                    className: "flex flex-col gap-0.5",
                                    children: [
                                      (0, t.jsx)("span", {
                                        className:
                                          "text-neutral-500 text-xs font-normal",
                                        children: "Price",
                                      }),
                                      (0, t.jsx)("span", {
                                        className:
                                          "text-white text-xs font-medium",
                                        children:
                                          e?.order.orderType === "Limit"
                                            ? `${(0, m.convertIntlV2)(
                                                Number(e?.order.limitPx),
                                                !1
                                              )}`
                                            : "Market",
                                      }),
                                    ],
                                  }),
                                  (0, t.jsxs)("div", {
                                    className: "flex flex-col gap-0.5",
                                    children: [
                                      (0, t.jsx)("span", {
                                        className:
                                          "text-neutral-500 text-xs font-normal",
                                        children: "Order Value",
                                      }),
                                      (0, t.jsx)("span", {
                                        className:
                                          "text-white text-xs font-medium",
                                        children:
                                          "Market" !== r ? `${r}` : "Market",
                                      }),
                                    ],
                                  }),
                                  (0, t.jsxs)("div", {
                                    className: "flex flex-col gap-0.5",
                                    children: [
                                      (0, t.jsx)("span", {
                                        className:
                                          "text-neutral-500 text-xs font-normal",
                                        children: "Reduce",
                                      }),
                                      (0, t.jsx)("span", {
                                        className:
                                          "text-white text-xs font-medium",
                                        children: e?.order.reduceOnly
                                          ? "Yes"
                                          : "No",
                                      }),
                                    ],
                                  }),
                                  (0, t.jsxs)("div", {
                                    className: "flex flex-col gap-0.5",
                                    children: [
                                      (0, t.jsx)("span", {
                                        className:
                                          "text-neutral-500 text-xs font-normal",
                                        children: "Trigger Condition",
                                      }),
                                      (0, t.jsx)("span", {
                                        className:
                                          "text-white text-xs font-medium truncate max-w-[80px]",
                                        children:
                                          e?.order.orderType === "Limit"
                                            ? "N/A"
                                            : e?.order.triggerCondition || "--",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, t.jsxs)("div", {
                                className:
                                  "mt-2 pt-2 border-t border-neutral-800 flex justify-between items-center",
                                children: [
                                  (0, t.jsx)("span", {
                                    className:
                                      "text-neutral-500 text-xs font-normal",
                                    children: "Order ID",
                                  }),
                                  (0, t.jsx)("span", {
                                    className:
                                      "text-neutral-400 text-xs font-mono",
                                    children: e?.order.oid,
                                  }),
                                ],
                              }),
                            ],
                          },
                          s
                        );
                      })(e, s)
                    ),
                  ],
                })
              : (0, t.jsxs)(o.Table, {
                  classNames:
                    "gtr" === l
                      ? {
                          table:
                            "rounded-lg overflow-hidden border-1 border-neutral-900",
                          thead:
                            "!bg-neutral-950 hover:!bg-neutral-950 uppercase",
                          th: "text-xs font-normal !bg-neutral-950 hover:!bg-neutral-950 text-neutral-400 h-10",
                          tbody: "bg-white/5",
                          td: "text-neutral-300 text-sm py-4 font-semibold",
                          tr: "border-b-1 border-neutral-800 last:border-b-0 hover:bg-white/5 transition-all duration-400 even:bg-neutral-950 odd:bg-[#141414]",
                        }
                      : {
                          table: "!min-w-[1200px] overflow-x-auto",
                          th: "!pl-0.5 !py-2 !font-normal !text-xs !text-slate-900 !border-ash !border-b bg-transparent",
                          td: "!pl-0.5 !py-1 !text-xs",
                          tr: "!border-[#1f222c]/90",
                        },
                  className: "!p-1",
                  styles: { table: { minWidth: "1200px" } },
                  children: [
                    (0, t.jsx)(o.Table.Thead, {
                      children: (0, t.jsxs)(o.Table.Tr, {
                        children: [
                          (0, t.jsx)(o.Table.Th, {
                            children: (0, t.jsx)("div", {
                              className: "ml-2",
                              children: "Time",
                            }),
                          }),
                          (0, t.jsx)(o.Table.Th, { children: "Type" }),
                          (0, t.jsx)(o.Table.Th, { children: "Coin" }),
                          (0, t.jsx)(o.Table.Th, { children: "Direction" }),
                          (0, t.jsx)(o.Table.Th, { children: "Size" }),
                          (0, t.jsx)(o.Table.Th, { children: "Filled Size" }),
                          (0, t.jsx)(o.Table.Th, { children: "Order Value" }),
                          (0, t.jsx)(o.Table.Th, { children: "Price" }),
                          (0, t.jsx)(o.Table.Th, { children: "Reduce Only" }),
                          (0, t.jsx)(o.Table.Th, {
                            children: "Trigger Condition",
                          }),
                          (0, t.jsx)(o.Table.Th, { children: "Status" }),
                          (0, t.jsx)(o.Table.Th, {
                            className: "text-right",
                            children: (0, t.jsx)("span", {
                              className: "mr-2",
                              children: "Order ID",
                            }),
                          }),
                        ],
                      }),
                    }),
                    (0, t.jsx)(o.Table.Tbody, { children: P }),
                  ],
                }),
            0 === n.length
              ? (0, t.jsx)("div", {
                  className: "pb-10",
                  children: (0, t.jsx)(V.default, { text: "No Data" }),
                })
              : null,
            !C && b && n.length > 15 && !r
              ? (0, t.jsx)("div", {
                  className:
                    "text-sm font-medium pt-2 pb-2 pl-2 text-grass hover:underline underline-offset-4 cursor-pointer",
                  onClick: () => p.push("/trade/order-history"),
                  children: "View all orders",
                })
              : null,
          ],
        });
      },
      es = ({
        tableSize: e = "large",
        variant: l = "tabs",
        isSocial: r = !1,
      }) => {
        let [n, u] = (0, s.useState)([]),
          { getTokenNameByMetaAssetsName: h } = (0, G.useSpotUtils)(),
          { wallets: p } = (0, g.useWallets)(),
          { ready: b, authenticated: f } = (0, a.usePrivy)(),
          {
            fills: j,
            metaAssets: N,
            perpsSzDecimals: v,
            selectedSocialAddress: w,
          } = (0, i.useHyperliquidStore)(
            (0, A.useShallow)((e) => ({
              fills: r ? e.socialFills : e.fills,
              metaAssets: r ? e.socialMetaAssets : e.metaAssets,
              perpsSzDecimals: r ? e.socialPerpsSzDecimals : e.perpsSzDecimals,
              selectedSocialAddress: e.selectedSocialAddress,
            }))
          ),
          [y, { open: S, close: C }] = (0, d.useDisclosure)(!1),
          [P, D] = (0, s.useState)(1),
          [k, z] = (0, s.useState)(null),
          M = (0, E.useRouter)(),
          $ = p.find((e) => "privy" === e.walletClientType),
          F = "gtr" === l,
          B = F
            ? {
                table: "rounded-lg overflow-hidden border-1 border-neutral-900",
                thead: "!bg-neutral-950 hover:!bg-neutral-950 uppercase",
                th: "text-xs font-normal !bg-neutral-950 hover:!bg-neutral-950 text-neutral-400 h-10",
                tbody: "bg-white/5",
                td: "text-neutral-300 text-sm py-4 font-semibold",
                tr: "border-b-1 border-neutral-800 last:border-b-0 hover:bg-white/5 transition-all duration-400 even:bg-neutral-950 odd:bg-[#141414]",
              }
            : {
                table: "overflow-x-auto",
                th: "!pl-0.5 !py-2 !font-normal !text-xs !text-slate-900 !border-ash !border-b bg-transparent",
                td: "!pl-0.5 !py-1 !text-xs",
                tr: "!border-[#1f222c]/90",
              };
        (0, s.useEffect)(() => {
          let e = localStorage.getItem("lastSetLeverage");
          D(
            e && Object.keys(JSON.parse(e)).includes(k?.coin)
              ? JSON.parse(e || "{}")[k?.coin]
              : N.find((e) => e.name === k?.coin)?.maxLeverage
          );
        }, [k]);
        let L = async () => {
          u(
            (function (e) {
              let t = [],
                s = new Map();
              for (let l of [...e].sort((e, t) => e.time - t.time)) {
                let e = l.dir?.toLowerCase().includes("long")
                    ? "Long"
                    : "Short",
                  a = l.dir?.toLowerCase().startsWith("open"),
                  r = l.dir?.toLowerCase().startsWith("close"),
                  i = `${l.coin}-${e}`;
                s.has(i) ||
                  s.set(i, {
                    coin: l.coin,
                    direction: e,
                    qty: 0,
                    firstTime: l.time,
                    trades: [],
                    totalPnL: 0,
                    totalFees: 0,
                  });
                let n = s.get(i),
                  o = parseFloat(l.sz || "0");
                if (
                  (a ? (n.qty += o) : r && (n.qty -= o),
                  n.qty < 0 && (n.qty = 0),
                  n.trades.push(l),
                  (n.totalPnL += parseFloat(l.closedPnl || "0")),
                  (n.totalFees += parseFloat(l.fee || "0")),
                  1e-7 > Math.abs(n.qty))
                ) {
                  let e = (function (e, t) {
                      let s = Math.floor(Math.abs(t - e) / 6e4),
                        l = Math.floor(s / 60),
                        a = Math.floor(l / 24);
                      return a > 0
                        ? `${a}d ${l % 24}h`
                        : l > 0
                        ? `${l}h ${s % 60}m`
                        : s > 0
                        ? `${s}m`
                        : "0m";
                    })(n.firstTime, l.time),
                    a = n.totalPnL - n.totalFees;
                  t.push({
                    endTime: l.time,
                    asset: n.coin,
                    direction: n.direction,
                    duration: e,
                    pnl: parseFloat(n.totalPnL.toFixed(2)),
                    fees: parseFloat(n.totalFees.toFixed(2)),
                    netPnl: parseFloat(a.toFixed(2)),
                    fills: n.trades.length,
                    trades: [...n.trades],
                  }),
                    s.delete(i);
                }
              }
              return t.sort((e, t) => t.endTime - e.endTime);
            })(j)
          );
        };
        (0, s.useEffect)(() => {
          (!r && b && f && $?.address) || (r && w?.hyperliquid) ? L() : u([]);
        }, [f, $?.address, j, w?.hyperliquid, r, b]);
        let I = (0, s.useCallback)(
            (e) => {
              let t,
                s,
                l = e?.trades;
              if (!l.length) return null;
              e?.direction === "Long"
                ? ((t = l.filter(
                    (e) => "Open Long" === e.dir && "B" === e.side
                  )),
                  (s = l.filter(
                    (e) => "Close Long" === e.dir && "A" === e.side
                  )))
                : ((t = l.filter(
                    (e) => "Open Short" === e.dir && "A" === e.side
                  )),
                  (s = l.filter(
                    (e) => "Close Short" === e.dir && "B" === e.side
                  )));
              let a = t.reduce((e, t) => e + parseFloat(t.sz), 0),
                r = s.reduce(
                  (e, t) => e + parseFloat(t.px) * parseFloat(t.sz),
                  0
                ),
                i = s.reduce((e, t) => e + parseFloat(t.sz), 0);
              z({
                ...e,
                px: r / i,
                sz: a,
                coin: e?.asset,
                closedPnl: e?.pnl,
                dir: `Close ${e?.direction}`,
              }),
                S();
            },
            [S]
          ),
          O = (0, s.useCallback)(() => {
            M.push("/trade/completed-trades");
          }, [M]),
          q = (0, s.useMemo)(
            () => [
              ...(n?.sort((e, t) => t.endTime - e.endTime).slice(0, 15) || []),
            ],
            [n]
          ),
          W = (e) => {
            let t = new Date(e?.endTime),
              s = `${t.getMonth() + 1}/${t.getDate()}/${t.getFullYear()} — ${
                t.getHours() % 12 || 12
              }:${String(t.getMinutes()).padStart(2, "0")}:${String(
                t.getSeconds()
              ).padStart(2, "0")} ${t.getHours() >= 12 ? "PM" : "AM"}`,
              l = e?.trades.filter((e) => "B" === e.side),
              a = e?.trades.filter((e) => "A" === e.side),
              r = a.length
                ? a.reduce((e, t) => e + parseFloat(t.sz), 0)
                : l.reduce((e, t) => e + parseFloat(t.sz), 0),
              i =
                l?.length > 0
                  ? l.reduce(
                      (e, t) => e + parseFloat(t.px) * parseFloat(t.sz),
                      0
                    ) / r
                  : 0,
              n =
                a?.length > 0
                  ? a.reduce(
                      (e, t) => e + parseFloat(t.px) * parseFloat(t.sz),
                      0
                    ) / r
                  : 0;
            return {
              formattedTime: s,
              avgBuyPrice:
                i > 0
                  ? (0, m.convertIntl)(parseFloat(i.toFixed(6 - v[e?.asset])))
                  : "-",
              avgSellPrice:
                n > 0
                  ? (0, m.convertIntl)(parseFloat(n.toFixed(6 - v[e?.asset])))
                  : "-",
              totalSize: r,
            };
          },
          R = (0, c.useIsMobile)(),
          _ = q.map((s, l) => {
            let { formattedTime: a, avgBuyPrice: i, avgSellPrice: n } = W(s),
              d = s?.direction === "Long";
            return (0, t.jsxs)(
              o.Table.Tr,
              {
                children: [
                  "large" === e
                    ? (0, t.jsx)(o.Table.Td, {
                        className: "cursor-pointer",
                        children: (0, t.jsx)("div", {
                          className: "ml-2",
                          children: a,
                        }),
                      })
                    : null,
                  (0, t.jsx)(o.Table.Td, {
                    children: (0, t.jsx)("div", {
                      className: (0, x.default)({
                        "ml-2 text-white": "small" === e,
                      }),
                      children: (0, t.jsx)("div", {
                        className: (0, x.default)("font-semibold", {
                          "text-grass/90": d,
                          "text-blood/90": !d,
                        }),
                        children: s?.asset.includes("@")
                          ? h(s?.asset) || s?.asset
                          : (0, t.jsx)(T.default, { tokenName: s?.asset }),
                      }),
                    }),
                  }),
                  (0, t.jsx)(o.Table.Td, {
                    children: (0, t.jsx)("span", {
                      className: (0, x.default)(
                        "inline-block px-1 py-0.5 rounded-sm text-2xs font-medium uppercase !w-[80px] text-center",
                        {
                          "text-grass bg-grass/20 border border-grass/40": d,
                          "text-blood bg-blood/20 border border-blood/40": !d,
                        }
                      ),
                      children: s?.direction,
                    }),
                  }),
                  "large" === e
                    ? (0, t.jsx)(o.Table.Td, { children: s?.duration })
                    : null,
                  (0, t.jsx)(o.Table.Td, { children: i }),
                  (0, t.jsx)(o.Table.Td, { children: n }),
                  (0, t.jsx)(o.Table.Td, {
                    children: (0, t.jsxs)("div", {
                      className: "flex gap-1 items-center",
                      children: [
                        (0, t.jsx)("div", {
                          className: (0, x.default)({
                            "text-grass": s?.netPnl > 0,
                            "text-blood": s?.netPnl < 0,
                            "text-slate-900": s?.netPnl === 0 && !F,
                            "text-neutral-500": s?.netPnl === 0 && F,
                          }),
                          children:
                            s?.netPnl === 0
                              ? "$0"
                              : `${s?.netPnl >= 0 ? "" : "-"}${(0,
                                m.convertIntl)(
                                  (0, m.truncateToDecimals)(
                                    Math.abs(s?.netPnl),
                                    3
                                  )
                                )}`,
                        }),
                        r || "-" === i
                          ? null
                          : (0, t.jsx)("div", {
                              onClick: () => I(s),
                              className: "cursor-pointer",
                              children: (0, t.jsx)(H.IconShare2, {
                                size: 15,
                                className: (0, x.default)(
                                  "transition-colors duration-300",
                                  {
                                    "text-slate-900 group-hover:text-white": !F,
                                    "text-neutral-500 group-hover:text-white":
                                      F,
                                  }
                                ),
                              }),
                            }),
                      ],
                    }),
                  }),
                  "large" === e
                    ? (0, t.jsx)(o.Table.Td, { children: s?.fills })
                    : null,
                ],
              },
              `${s?.asset}-${s?.endTime}-${s?.direction}`
            );
          });
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsxs)("div", {
              className: "pb-2",
              children: [
                (0, t.jsxs)("div", {
                  className: "overflow-auto h-full pb-10 mobile-scroll-padding",
                  children: [
                    R
                      ? (0, t.jsxs)("div", {
                          className: "flex flex-col gap-3 p-2",
                          children: [
                            !r &&
                              q.length > 0 &&
                              (0, t.jsx)("div", {
                                className:
                                  "flex justify-end items-center px-2 py-1",
                                children:
                                  f &&
                                  n.length > 15 &&
                                  (0, t.jsx)("span", {
                                    className:
                                      "text-xs font-semibold text-brand-blue cursor-pointer",
                                    onClick: O,
                                    children: "View All",
                                  }),
                              }),
                            q.map((e, s) =>
                              ((e, s) => {
                                let {
                                    formattedTime: l,
                                    avgBuyPrice: a,
                                    avgSellPrice: i,
                                  } = W(e),
                                  n = e?.direction === "Long";
                                return (0, t.jsx)(
                                  "div",
                                  {
                                    className:
                                      "flex flex-col gap-4 py-4 px-4 rounded-xl bg-neutral-900 border border-neutral-800 shadow-lg",
                                    children: (0, t.jsxs)("div", {
                                      className:
                                        "grid grid-cols-3 gap-y-4 gap-x-2",
                                      children: [
                                        (0, t.jsxs)("div", {
                                          className: "flex flex-col gap-0.5",
                                          children: [
                                            (0, t.jsx)("span", {
                                              className:
                                                "text-neutral-500 text-xs font-normal",
                                              children: "Coin",
                                            }),
                                            (0, t.jsx)("div", {
                                              className: (0, x.default)(
                                                "text-xs font-semibold",
                                                {
                                                  "text-grass/90": n,
                                                  "text-blood/90": !n,
                                                }
                                              ),
                                              children: e?.asset.includes("@")
                                                ? h(e?.asset) || e?.asset
                                                : (0, t.jsx)(T.default, {
                                                    tokenName: e?.asset,
                                                  }),
                                            }),
                                          ],
                                        }),
                                        (0, t.jsxs)("div", {
                                          className:
                                            "flex flex-col gap-0.5 col-span-2",
                                          children: [
                                            (0, t.jsx)("span", {
                                              className:
                                                "text-neutral-500 text-xs font-normal text-nowrap",
                                              children: "End Time",
                                            }),
                                            (0, t.jsx)("span", {
                                              className:
                                                "text-white text-xs font-medium leading-[1.2]",
                                              children: l,
                                            }),
                                          ],
                                        }),
                                        (0, t.jsxs)("div", {
                                          className: "flex flex-col gap-0.5",
                                          children: [
                                            (0, t.jsx)("span", {
                                              className:
                                                "text-neutral-500 text-xs font-normal",
                                              children: "Direction",
                                            }),
                                            (0, t.jsx)("span", {
                                              className: (0, x.default)(
                                                "text-xs font-medium uppercase",
                                                {
                                                  "text-grass": n,
                                                  "text-blood": !n,
                                                }
                                              ),
                                              children: e?.direction,
                                            }),
                                          ],
                                        }),
                                        (0, t.jsxs)("div", {
                                          className: "flex flex-col gap-0.5",
                                          children: [
                                            (0, t.jsx)("span", {
                                              className:
                                                "text-neutral-500 text-xs font-normal",
                                              children: "Duration",
                                            }),
                                            (0, t.jsx)("span", {
                                              className:
                                                "text-white text-xs font-medium",
                                              children: e?.duration,
                                            }),
                                          ],
                                        }),
                                        (0, t.jsxs)("div", {
                                          className: "flex flex-col gap-0.5",
                                          children: [
                                            (0, t.jsx)("span", {
                                              className:
                                                "text-neutral-500 text-xs font-normal",
                                              children: "Fills",
                                            }),
                                            (0, t.jsx)("span", {
                                              className:
                                                "text-white text-xs font-medium",
                                              children: e?.fills,
                                            }),
                                          ],
                                        }),
                                        (0, t.jsxs)("div", {
                                          className: "flex flex-col gap-0.5",
                                          children: [
                                            (0, t.jsx)("span", {
                                              className:
                                                "text-neutral-500 text-xs font-normal",
                                              children: "Avg Buy",
                                            }),
                                            (0, t.jsx)("span", {
                                              className:
                                                "text-white text-xs font-medium overflow-hidden",
                                              children: a,
                                            }),
                                          ],
                                        }),
                                        (0, t.jsxs)("div", {
                                          className: "flex flex-col gap-0.5",
                                          children: [
                                            (0, t.jsx)("span", {
                                              className:
                                                "text-neutral-500 text-xs font-normal text-nowrap",
                                              children: "Avg Sell",
                                            }),
                                            (0, t.jsx)("span", {
                                              className:
                                                "text-white text-xs font-medium overflow-hidden",
                                              children: i,
                                            }),
                                          ],
                                        }),
                                        (0, t.jsxs)("div", {
                                          className: "flex flex-col gap-0.5",
                                          children: [
                                            (0, t.jsx)("span", {
                                              className:
                                                "text-neutral-500 text-xs font-normal",
                                              children: "Net PNL",
                                            }),
                                            (0, t.jsxs)("div", {
                                              className:
                                                "flex gap-1 items-center",
                                              children: [
                                                (0, t.jsx)("div", {
                                                  className: (0, x.default)(
                                                    "text-xs font-medium",
                                                    {
                                                      "text-grass":
                                                        e?.netPnl > 0,
                                                      "text-blood":
                                                        e?.netPnl < 0,
                                                      "text-neutral-500":
                                                        e?.netPnl === 0,
                                                    }
                                                  ),
                                                  children:
                                                    e?.netPnl === 0
                                                      ? "$0"
                                                      : `${
                                                          e?.netPnl >= 0
                                                            ? ""
                                                            : "-"
                                                        }${(0, m.convertIntl)(
                                                          (0,
                                                          m.truncateToDecimals)(
                                                            Math.abs(e?.netPnl),
                                                            3
                                                          )
                                                        )}`,
                                                }),
                                                !r &&
                                                  "-" !== a &&
                                                  (0, t.jsx)("div", {
                                                    onClick: () => I(e),
                                                    className: "cursor-pointer",
                                                    children: (0, t.jsx)(
                                                      H.IconShare2,
                                                      {
                                                        size: 14,
                                                        className:
                                                          "text-zinc-400 hover:text-white transition-colors",
                                                      }
                                                    ),
                                                  }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  },
                                  `${e?.asset}-${e?.endTime}-${e?.direction}`
                                );
                              })(e, 0)
                            ),
                          ],
                        })
                      : (0, t.jsxs)(o.Table, {
                          classNames: B,
                          styles: {
                            table: {
                              minWidth: "large" === e ? "1200px" : "350px",
                            },
                          },
                          className: "!p-1",
                          children: [
                            (0, t.jsx)(o.Table.Thead, {
                              children: (0, t.jsxs)(o.Table.Tr, {
                                children: [
                                  "large" === e
                                    ? (0, t.jsx)(o.Table.Th, {
                                        className: "!w-[250px] !max-w-[250px]",
                                        children: (0, t.jsx)("div", {
                                          className: "ml-2",
                                          children: "End Time",
                                        }),
                                      })
                                    : null,
                                  (0, t.jsx)(o.Table.Th, {
                                    children: (0, t.jsx)("div", {
                                      className: (0, x.default)({
                                        "ml-2": "small" === e,
                                      }),
                                      children: "Coin",
                                    }),
                                  }),
                                  (0, t.jsx)(o.Table.Th, {
                                    children: "Direction",
                                  }),
                                  "large" === e
                                    ? (0, t.jsx)(o.Table.Th, {
                                        children: "Duration",
                                      })
                                    : null,
                                  (0, t.jsx)(o.Table.Th, {
                                    children: "Avg. Buy Price",
                                  }),
                                  (0, t.jsx)(o.Table.Th, {
                                    children: "Avg. Sell Price",
                                  }),
                                  (0, t.jsx)(o.Table.Th, {
                                    className: (0, x.default)({
                                      "!w-[150px] !max-w-[150px]":
                                        "large" === e,
                                    }),
                                    children: "Net PNL",
                                  }),
                                  "large" === e
                                    ? (0, t.jsx)(o.Table.Th, {
                                        className: "!w-[150px] !max-w-[150px]",
                                        children: "Fills",
                                      })
                                    : null,
                                ],
                              }),
                            }),
                            (0, t.jsx)(o.Table.Tbody, { children: _ }),
                          ],
                        }),
                    0 === n.length
                      ? (0, t.jsx)(V.default, { text: "No Trades Yet" })
                      : null,
                  ],
                }),
                !R && f && n.length > 15 && !r
                  ? (0, t.jsx)("div", {
                      className:
                        "text-sm font-medium pt-2 pb-2 pl-2 text-grass hover:underline underline-offset-4 cursor-pointer",
                      onClick: O,
                      children: "View all trades",
                    })
                  : null,
              ],
            }),
            (0, t.jsx)(U.default, {
              opened: y,
              close: C,
              tradeItem: k,
              leverage: P,
            }),
          ],
        });
      };
    var el = e.i(590246);
    let ea = ({ variant: e = "tabs", isSocial: l = !1 }) => {
        let { wallets: r } = (0, g.useWallets)(),
          { ready: n, authenticated: d } = (0, a.usePrivy)(),
          {
            nonFundingLedgerUpdates: m,
            setNonFundingLedgerUpdates: h,
            selectedSocialAddress: p,
          } = (0, i.useHyperliquidStore)(
            (0, A.useShallow)((e) => ({
              nonFundingLedgerUpdates: l
                ? e.socialNonFundingLedgerUpdates
                : e.nonFundingLedgerUpdates,
              setNonFundingLedgerUpdates: l
                ? e.setSocialNonFundingLedgerUpdates
                : e.setNonFundingLedgerUpdates,
              selectedSocialAddress: e.selectedSocialAddress,
            }))
          ),
          b = (0, E.useRouter)(),
          f = (0, c.useIsMobile)(),
          j = r.find((e) => "privy" === e.walletClientType),
          N = async () => {
            let e = l ? p?.hyperliquid : j?.address;
            e && h(await (0, u.getDepositsWithdrawals)(e));
          };
        (0, s.useEffect)(() => {
          (!l && n && d && j?.address) || (l && p?.hyperliquid) ? N() : h([]);
        }, [d, j?.address, l, p?.hyperliquid, n]);
        let v = (e) =>
            e.replace(/([A-Z])/g, " $1").replace(/^./, (e) => e.toUpperCase()),
          T = (e, t) => {
            switch (t) {
              case "deposit":
              case "withdraw":
                window.open(`https://arbiscan.io/tx/${e}`, "_blank");
                break;
              default:
                window.open(
                  `https://app.hyperliquid.xyz/explorer/tx/${e}`,
                  "_blank"
                );
            }
          },
          w = (0, s.useMemo)(
            () => [...(m?.sort((e, t) => t.time - e.time).slice(0, 15) || [])],
            [m]
          ),
          y = (e) => {
            let t = new Date(e?.time);
            return {
              formattedTime: `${
                t.getMonth() + 1
              }/${t.getDate()}/${t.getFullYear()} — ${
                t.getHours() % 12 || 12
              }:${String(t.getMinutes()).padStart(2, "0")}:${String(
                t.getSeconds()
              ).padStart(2, "0")} ${t.getHours() >= 12 ? "PM" : "AM"}`,
              amount: Number(
                e?.delta?.usdc || Number(e?.delta?.usdcValue) || 0
              ).toFixed(2),
            };
          },
          S = w.map((e, s) => {
            let { formattedTime: l, amount: a } = y(e);
            return (0, t.jsxs)(
              o.Table.Tr,
              {
                children: [
                  (0, t.jsx)(o.Table.Td, {
                    className: "cursor-pointer",
                    children: (0, t.jsx)("div", {
                      className: "ml-2",
                      children: l,
                    }),
                  }),
                  (0, t.jsx)(o.Table.Td, {
                    className: "w-[300px]",
                    children: (0, t.jsx)("div", {
                      className: (0, x.default)(
                        "inline-block w-[120px] lg:w-auto text-center px-2 py-0.5 rounded-sm text-xs font-medium",
                        {
                          "text-grass bg-grass/20 border border-grass/40":
                            e?.delta?.type === "deposit",
                          "text-blood bg-blood/20 border border-blood/40":
                            e?.delta?.type === "withdraw",
                          "text-blue-500 bg-blue-500/20 border border-blue-500/40":
                            e?.delta?.type === "internalTransfer" ||
                            e?.delta?.type === "spotTransfer" ||
                            e?.delta?.type === "accountClassTransfer",
                          "text-purple-500 bg-purple-500/20 border border-purple-500/40":
                            e?.delta?.type === "activateDexAbstraction",
                          "text-orange-500 bg-orange-500/20 border border-orange-500/40":
                            e?.delta?.type === "send",
                        }
                      ),
                      children: v(e?.delta?.type),
                    }),
                  }),
                  (0, t.jsxs)(o.Table.Td, {
                    className: "text-white font-medium",
                    children: ["$", a],
                  }),
                  (0, t.jsx)(o.Table.Td, {
                    children: (0, t.jsxs)("div", {
                      className:
                        "cursor-pointer text-brand-blue hover:underline font-mono flex items-center gap-1",
                      onClick: () => {
                        T(e?.hash, e?.delta?.type);
                      },
                      children: [
                        (0, t.jsxs)("span", {
                          children: [
                            e?.hash?.slice(0, 6),
                            "...",
                            e?.hash?.slice(-4),
                          ],
                        }),
                        (0, t.jsx)(el.IconExternalLink, {
                          size: 12,
                          className: "shrink-0",
                        }),
                      ],
                    }),
                  }),
                ],
              },
              s
            );
          });
        return (0, t.jsxs)("div", {
          className: "h-full overflow-auto mobile-scroll-padding",
          children: [
            f
              ? (0, t.jsxs)("div", {
                  className: "flex flex-col gap-3 p-2",
                  children: [
                    !l &&
                      w.length > 0 &&
                      (0, t.jsx)("div", {
                        className: "flex justify-end items-center px-2 py-1",
                        children:
                          d &&
                          m.length > 15 &&
                          (0, t.jsx)("span", {
                            className:
                              "text-xs font-semibold text-brand-blue cursor-pointer",
                            onClick: () =>
                              b.push("/trade/deposits-withdrawals"),
                            children: "View All",
                          }),
                      }),
                    w.map((e, s) =>
                      ((e, s) => {
                        let { formattedTime: l, amount: a } = y(e),
                          r = e?.delta?.type;
                        return (0, t.jsx)(
                          "div",
                          {
                            className:
                              "flex flex-col gap-4 py-4 px-4 rounded-xl bg-neutral-900 border border-neutral-800 shadow-lg",
                            children: (0, t.jsxs)("div", {
                              className: "grid grid-cols-2 gap-y-4 gap-x-2",
                              children: [
                                (0, t.jsxs)("div", {
                                  className: "flex flex-col gap-0.5",
                                  children: [
                                    (0, t.jsx)("span", {
                                      className:
                                        "text-neutral-500 text-xs font-normal",
                                      children: "Type",
                                    }),
                                    (0, t.jsx)("span", {
                                      className: (0, x.default)(
                                        "text-xs font-medium",
                                        {
                                          "text-grass": "deposit" === r,
                                          "text-blood": "withdraw" === r,
                                          "text-brand-blue":
                                            "internalTransfer" === r ||
                                            "spotTransfer" === r ||
                                            "accountClassTransfer" === r,
                                          "text-purple-500":
                                            "activateDexAbstraction" === r,
                                          "text-orange-500": "send" === r,
                                        }
                                      ),
                                      children: v(r),
                                    }),
                                  ],
                                }),
                                (0, t.jsxs)("div", {
                                  className: "flex flex-col gap-0.5 items-end",
                                  children: [
                                    (0, t.jsx)("span", {
                                      className:
                                        "text-neutral-500 text-xs font-normal",
                                      children: "Time",
                                    }),
                                    (0, t.jsx)("span", {
                                      className:
                                        "text-white text-xs font-medium leading-[1.2] text-right",
                                      children: l,
                                    }),
                                  ],
                                }),
                                (0, t.jsxs)("div", {
                                  className: "flex flex-col gap-0.5",
                                  children: [
                                    (0, t.jsx)("span", {
                                      className:
                                        "text-neutral-500 text-xs font-normal",
                                      children: "Amount",
                                    }),
                                    (0, t.jsxs)("span", {
                                      className:
                                        "text-white text-xs font-medium",
                                      children: ["$", a],
                                    }),
                                  ],
                                }),
                                (0, t.jsxs)("div", {
                                  className: "flex flex-col gap-0.5 items-end",
                                  children: [
                                    (0, t.jsx)("span", {
                                      className:
                                        "text-neutral-500 text-xs font-normal",
                                      children: "Transaction",
                                    }),
                                    (0, t.jsxs)("div", {
                                      className:
                                        "text-brand-blue cursor-pointer flex items-center gap-1 hover:underline max-w-full",
                                      onClick: () => T(e?.hash, r),
                                      children: [
                                        (0, t.jsxs)("span", {
                                          className:
                                            "text-xs font-mono truncate text-right",
                                          children: [
                                            e?.hash?.slice(0, 8),
                                            "...",
                                            e?.hash?.slice(-6),
                                          ],
                                        }),
                                        (0, t.jsx)(el.IconExternalLink, {
                                          size: 12,
                                          className: "shrink-0",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          },
                          s
                        );
                      })(e, s)
                    ),
                  ],
                })
              : (0, t.jsxs)(o.Table, {
                  classNames:
                    "gtr" === e
                      ? {
                          table:
                            "rounded-lg overflow-hidden border-1 border-neutral-900",
                          thead:
                            "!bg-neutral-950 hover:!bg-neutral-950 uppercase",
                          th: "text-xs font-normal !bg-neutral-950 hover:!bg-neutral-950 text-neutral-400 h-10",
                          tbody: "bg-white/5",
                          td: "text-neutral-300 text-sm py-4 font-semibold",
                          tr: "border-b-1 border-neutral-800 last:border-b-0 hover:bg-white/5 transition-all duration-400 even:bg-neutral-950 odd:bg-[#141414]",
                        }
                      : {
                          table: "!min-w-[600px] overflow-x-auto",
                          th: "!pl-0.5 !py-2 !font-normal !text-xs !text-slate-900 !border-ash !border-b bg-transparent",
                          td: "!pl-0.5 !py-1 !text-xs",
                          tr: "!border-[#1f222c]/90",
                        },
                  className: "!p-1",
                  styles: { table: { minWidth: "1200px" } },
                  children: [
                    (0, t.jsx)(o.Table.Thead, {
                      children: (0, t.jsxs)(o.Table.Tr, {
                        children: [
                          (0, t.jsx)(o.Table.Th, {
                            className: "!w-[250px] !max-w-[250px]",
                            children: (0, t.jsx)("div", {
                              className: "ml-2",
                              children: "Time",
                            }),
                          }),
                          (0, t.jsx)(o.Table.Th, { children: "Type" }),
                          (0, t.jsx)(o.Table.Th, { children: "Amount" }),
                          (0, t.jsx)(o.Table.Th, { children: "Transaction" }),
                        ],
                      }),
                    }),
                    (0, t.jsx)(o.Table.Tbody, { children: S }),
                  ],
                }),
            0 === m.length
              ? (0, t.jsx)("div", {
                  className: "pb-10",
                  children: (0, t.jsx)(V.default, { text: "No Data" }),
                })
              : null,
            !f && d && m.length > 15 && !l
              ? (0, t.jsx)("div", {
                  className:
                    "text-sm font-medium pt-2 pb-2 pl-2 text-grass hover:underline underline-offset-4 cursor-pointer",
                  onClick: () => b.push("/trade/deposits-withdrawals"),
                  children: "View all transactions",
                })
              : null,
          ],
        });
      },
      er = (e, t) => {
        let s = Math.floor(t / 60),
          l = t % 60,
          a = e + s,
          r = 1 === l ? "minute" : "minutes";
        return 0 === a
          ? `${l} ${r}`
          : `${a} ${1 === a ? "hour" : "hours"} ${l} ${r}`;
      },
      ei = ({ hours: e = 0, minutes: t = 0, frequencySeconds: s = 30 }) => {
        if (s <= 0) throw Error("frequencySeconds must be > 0");
        let l = (60 * e + t) * 60;
        return l <= 0 ? 0 : Math.floor(l / s) + 1;
      },
      en = (e) => {
        let t = Math.floor(Math.max(0, Date.now() - e) / 1e3),
          s = String(Math.floor(t / 3600)).padStart(2, "0"),
          l = String(Math.floor((t % 3600) / 60)).padStart(2, "0"),
          a = String(t % 60).padStart(2, "0");
        return `${s}:${l}:${a}`;
      };
    e.s(
      [
        "convertToRuntime",
        0,
        er,
        "sizePerOrder",
        0,
        ({
          totalSize: e,
          hours: t = 0,
          minutes: s = 0,
          frequencySeconds: l = 30,
        }) => {
          let a = ei({ hours: t, minutes: s, frequencySeconds: l });
          return a <= 0 ? 0 : Number(e / a).toFixed(5);
        },
        "timeSince",
        0,
        en,
        "toTotalMinutes",
        0,
        (e, t) => 60 * e + t,
        "twapOrderCount",
        0,
        ei,
      ],
      190384
    );
    let eo = ({ variant: e = "tabs", isSocial: s = !1 }) => {
        let { wallets: l } = (0, g.useWallets)(),
          a = l.find((e) => "privy" === e.walletClientType),
          {
            twapStates: r,
            metaAssets: n,
            perpsSzDecimals: d,
            perpsDex: m,
            perpsMetaAssetsByDex: h,
          } = (0, i.useHyperliquidStore)(
            (0, A.useShallow)((e) => ({
              twapStates: s ? e.socialTwapStates : e.twapStates,
              metaAssets: s ? e.socialMetaAssets : e.metaAssets,
              perpsSzDecimals: s ? e.socialPerpsSzDecimals : e.perpsSzDecimals,
              perpsDex: s ? e.socialPerpsDex : e.perpsDex,
              perpsMetaAssetsByDex: s
                ? e.socialPerpsMetaAssetsByDex
                : e.perpsMetaAssetsByDex,
            }))
          ),
          p = async (e, s) => {
            await a.switchChain(v.arbitrum.id);
            let l = (0, j.createWalletClient)({
                account: a?.address,
                chain: v.arbitrum,
                transport: (0, N.custom)(await a.getEthereumProvider()),
              }),
              r = (0, Y.notifyLoadingToast)({
                message: "Terminating Order...",
              });
            try {
              let a = await (0, u.terminateTWAPOrder)({
                wallet: l,
                asset: ((e) => {
                  if (!e) return -1;
                  if (e.includes(":")) {
                    let [t] = e.split(":"),
                      s = m.findIndex((e) => e.name === t) + 1;
                    if (0 === s)
                      return (
                        console.warn(`DEX ${t} not found in perpsDex`),
                        n.findIndex((t) => t.name === e)
                      );
                    let l = h[t];
                    if (!l?.metaAssets)
                      return (
                        console.warn(`No metaAssets found for DEX ${t}`),
                        n.findIndex((t) => t.name === e)
                      );
                    let a = l.metaAssets.findIndex((t) => t.name === e);
                    return -1 === a
                      ? (console.warn(
                          `Asset ${e} not found in DEX ${t} metaAssets`
                        ),
                        n.findIndex((t) => t.name === e))
                      : 1e5 + 1e4 * s + a;
                  }
                  return n.findIndex((t) => t.name === e);
                })(s),
                twapId: e,
              });
              "ok" === a.status
                ? (0, Y.notifySuccessToast)({
                    message: "Order Terminated",
                    icon: (0, t.jsx)(X.default, { icon: "success" }),
                    id: r,
                  })
                : (0, Y.notifyErrorToast)({
                    message: "Failed to terminate order",
                    icon: (0, t.jsx)(X.default, { icon: "fail" }),
                  });
            } catch (e) {
              (0, Y.notifyErrorToast)({
                message: "Failed to terminate order",
                icon: (0, t.jsx)(X.default, { icon: "fail" }),
              });
            }
          },
          b = (e) => {
            let t = new Date(e?.[1]?.timestamp);
            return {
              creationTime: `${
                t.getMonth() + 1
              }/${t.getDate()}/${t.getFullYear()} — ${
                t.getHours() % 12 || 12
              }:${String(t.getMinutes()).padStart(2, "0")}:${String(
                t.getSeconds()
              ).padStart(2, "0")} ${t.getHours() >= 12 ? "PM" : "AM"}`,
              avgPrice: Number(e?.[1]?.executedSz)
                ? Number(
                    Number(e?.[1]?.executedNtl) / Number(e?.[1]?.executedSz)
                  ).toFixed(6 - d[e?.[1]?.coin] || 6)
                : "--",
            };
          },
          f = (0, c.useIsMobile)(),
          w = r
            ?.sort((e, t) => t[1].timestamp - e[1].timestamp)
            .map((e, l) => {
              let { creationTime: a, avgPrice: r } = b(e);
              return (0, t.jsxs)(
                o.Table.Tr,
                {
                  children: [
                    (0, t.jsx)(o.Table.Td, {
                      className: "cursor-pointer",
                      children: (0, t.jsx)("div", {
                        className: (0, x.default)("ml-2 font-medium", {
                          "text-grass/90": e?.[1]?.side === "B",
                          "text-blood/90": e?.[1]?.side === "A",
                        }),
                        children: (0, t.jsx)(T.default, {
                          tokenName: e?.[1]?.coin,
                        }),
                      }),
                    }),
                    (0, t.jsxs)(o.Table.Td, {
                      className: (0, x.default)({
                        "text-grass": e?.[1]?.side === "B",
                        "text-blood": e?.[1]?.side === "A",
                      }),
                      children: [e?.[1].sz, " ", e?.[1]?.coin],
                    }),
                    (0, t.jsxs)(o.Table.Td, {
                      className: (0, x.default)({
                        "text-grass": e?.[1]?.side === "B",
                        "text-blood": e?.[1]?.side === "A",
                      }),
                      children: [e?.[1].executedSz, " ", e?.[1]?.coin],
                    }),
                    (0, t.jsx)(o.Table.Td, {
                      className: "font-medium",
                      children: "--" !== r ? `$${r}` : "--",
                    }),
                    (0, t.jsxs)(o.Table.Td, {
                      className: "font-medium",
                      children: [
                        en(e?.[1]?.timestamp),
                        " /",
                        " ",
                        er(0, e?.[1]?.minutes),
                      ],
                    }),
                    (0, t.jsx)(o.Table.Td, {
                      className: "font-medium",
                      children: e?.[1]?.reduceOnly ? "Yes" : "No",
                    }),
                    (0, t.jsx)(o.Table.Td, { children: a }),
                    !s &&
                      (0, t.jsx)(o.Table.Td, {
                        children: (0, t.jsx)("div", {
                          className: "text-grass cursor-pointer",
                          onClick: () => {
                            p(e?.[0], e?.[1]?.coin);
                          },
                          children: "Terminate",
                        }),
                      }),
                  ],
                },
                l
              );
            });
        return (0, t.jsxs)("div", {
          className: "overflow-auto h-full pb-10",
          children: [
            f
              ? (0, t.jsxs)("div", {
                  className: "flex flex-col gap-3 p-2",
                  children: [
                    !s &&
                      r?.length > 0 &&
                      (0, t.jsx)("div", {
                        className:
                          "flex justify-between items-center px-2 py-1",
                        children: (0, t.jsxs)("span", {
                          className: "text-zinc-400 text-xs",
                          children: [r.length, " Active TWAPs"],
                        }),
                      }),
                    r
                      ?.sort((e, t) => t[1].timestamp - e[1].timestamp)
                      .map((e, l) =>
                        ((e, l) => {
                          let { creationTime: a, avgPrice: r } = b(e);
                          return (0, t.jsxs)(
                            "div",
                            {
                              className:
                                "flex flex-col gap-4 py-4 px-4 rounded-xl bg-neutral-900 border border-neutral-800 shadow-lg",
                              children: [
                                (0, t.jsxs)("div", {
                                  className: "grid grid-cols-3 gap-y-4 gap-x-2",
                                  children: [
                                    (0, t.jsxs)("div", {
                                      className: "flex flex-col gap-0.5",
                                      children: [
                                        (0, t.jsx)("span", {
                                          className:
                                            "text-neutral-500 text-xs font-normal",
                                          children: "Coin",
                                        }),
                                        (0, t.jsx)("div", {
                                          className: (0, x.default)(
                                            "text-xs font-semibold",
                                            {
                                              "text-grass/90":
                                                e?.[1]?.side === "B",
                                              "text-blood/90":
                                                e?.[1]?.side === "A",
                                            }
                                          ),
                                          children: (0, t.jsx)(T.default, {
                                            tokenName: e?.[1]?.coin,
                                          }),
                                        }),
                                      ],
                                    }),
                                    (0, t.jsxs)("div", {
                                      className:
                                        "flex flex-col gap-0.5 col-span-2",
                                      children: [
                                        (0, t.jsx)("span", {
                                          className:
                                            "text-neutral-500 text-xs font-normal text-nowrap",
                                          children: "Creation Time",
                                        }),
                                        (0, t.jsx)("span", {
                                          className:
                                            "text-white text-xs font-medium leading-[1.2]",
                                          children: a,
                                        }),
                                      ],
                                    }),
                                    (0, t.jsxs)("div", {
                                      className: "flex flex-col gap-0.5",
                                      children: [
                                        (0, t.jsx)("span", {
                                          className:
                                            "text-neutral-500 text-xs font-normal",
                                          children: "Size",
                                        }),
                                        (0, t.jsxs)("span", {
                                          className:
                                            "text-white text-xs font-medium",
                                          children: [
                                            e?.[1].sz,
                                            " ",
                                            e?.[1]?.coin,
                                          ],
                                        }),
                                      ],
                                    }),
                                    (0, t.jsxs)("div", {
                                      className: "flex flex-col gap-0.5",
                                      children: [
                                        (0, t.jsx)("span", {
                                          className:
                                            "text-neutral-500 text-xs font-normal",
                                          children: "Executed Size",
                                        }),
                                        (0, t.jsxs)("span", {
                                          className:
                                            "text-white text-xs font-medium",
                                          children: [
                                            e?.[1].executedSz,
                                            " ",
                                            e?.[1]?.coin,
                                          ],
                                        }),
                                      ],
                                    }),
                                    (0, t.jsxs)("div", {
                                      className: "flex flex-col gap-0.5",
                                      children: [
                                        (0, t.jsx)("span", {
                                          className:
                                            "text-neutral-500 text-xs font-normal",
                                          children: "Avg Price",
                                        }),
                                        (0, t.jsx)("span", {
                                          className:
                                            "text-white text-xs font-medium",
                                          children: "--" !== r ? `$${r}` : "--",
                                        }),
                                      ],
                                    }),
                                    (0, t.jsxs)("div", {
                                      className: "flex flex-col gap-0.5",
                                      children: [
                                        (0, t.jsx)("span", {
                                          className:
                                            "text-neutral-500 text-xs font-normal",
                                          children: "Runtime Time / Total",
                                        }),
                                        (0, t.jsxs)("span", {
                                          className:
                                            "text-white text-xs font-medium",
                                          children: [
                                            en(e?.[1]?.timestamp),
                                            " /",
                                            " ",
                                            er(0, e?.[1]?.minutes),
                                          ],
                                        }),
                                      ],
                                    }),
                                    (0, t.jsxs)("div", {
                                      className: "flex flex-col gap-0.5",
                                      children: [
                                        (0, t.jsx)("span", {
                                          className:
                                            "text-neutral-500 text-xs font-normal",
                                          children: "Reduce Only",
                                        }),
                                        (0, t.jsx)("span", {
                                          className:
                                            "text-white text-xs font-medium",
                                          children: e?.[1]?.reduceOnly
                                            ? "Yes"
                                            : "No",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                !s &&
                                  (0, t.jsx)("div", {
                                    className:
                                      "flex items-center gap-4 pt-3 border-t border-white/5 mt-1",
                                    children: (0, t.jsx)("span", {
                                      className:
                                        "text-brand-blue text-xs font-semibold cursor-pointer hover:opacity-80 transition-opacity",
                                      onClick: () => {
                                        p(e?.[0], e?.[1]?.coin);
                                      },
                                      children: "Terminate",
                                    }),
                                  }),
                              ],
                            },
                            l
                          );
                        })(e, l)
                      ),
                  ],
                })
              : (0, t.jsxs)(o.Table, {
                  classNames:
                    "gtr" === e
                      ? {
                          table:
                            "rounded-lg overflow-hidden border-1 border-neutral-900",
                          thead:
                            "!bg-neutral-950 hover:!bg-neutral-950 uppercase",
                          th: "text-xs font-normal !bg-neutral-950 hover:!bg-neutral-950 text-neutral-400 h-10",
                          tbody: "bg-white/5",
                          td: "text-neutral-300 text-sm py-4 font-semibold",
                          tr: "border-b-1 border-neutral-800 last:border-b-0 hover:bg-white/5 transition-all duration-400 even:bg-neutral-950 odd:bg-[#141414]",
                        }
                      : {
                          table: "!min-w-[1000px] overflow-x-auto",
                          th: "!pl-0.5 !py-2 !font-normal !text-xs !text-slate-900 !border-ash !border-b bg-transparent",
                          td: "!pl-0.5 !py-2 !text-xs",
                          tr: "!border-[#1f222c]/90",
                        },
                  className: "!p-1",
                  styles: { table: { minWidth: "1200px" } },
                  children: [
                    (0, t.jsx)(o.Table.Thead, {
                      children: (0, t.jsxs)(o.Table.Tr, {
                        children: [
                          (0, t.jsx)(o.Table.Th, {
                            children: (0, t.jsx)("div", {
                              className: "ml-2",
                              children: "Coin",
                            }),
                          }),
                          (0, t.jsx)(o.Table.Th, { children: "Size" }),
                          (0, t.jsx)(o.Table.Th, { children: "Executed Size" }),
                          (0, t.jsx)(o.Table.Th, { children: "Average Price" }),
                          (0, t.jsx)(o.Table.Th, {
                            children: "Running Time / Total",
                          }),
                          (0, t.jsx)(o.Table.Th, { children: "Reduce Only" }),
                          (0, t.jsx)(o.Table.Th, { children: "Creation Time" }),
                          !s &&
                            (0, t.jsx)(o.Table.Th, { children: "Terminate" }),
                        ],
                      }),
                    }),
                    (0, t.jsx)(o.Table.Tbody, { children: w }),
                  ],
                }),
            r?.length === 0
              ? (0, t.jsx)("div", {
                  className: "pb-10",
                  children: (0, t.jsx)(V.default, { text: "No TWAPs Yet" }),
                })
              : null,
          ],
        });
      },
      ed = ({ variant: e = "tabs", isSocial: s = !1 }) => {
        let { userTwapHistory: l, perpsSzDecimals: a } = (0,
          i.useHyperliquidStore)(
            (0, A.useShallow)((e) => ({
              userTwapHistory: s ? e.socialUserTwapHistory : e.userTwapHistory,
              perpsSzDecimals: s ? e.socialPerpsSzDecimals : e.perpsSzDecimals,
            }))
          ),
          r = (e) => {
            let t = new Date(e?.state?.timestamp);
            return {
              formattedTime: `${
                t.getMonth() + 1
              }/${t.getDate()}/${t.getFullYear()} — ${
                t.getHours() % 12 || 12
              }:${String(t.getMinutes()).padStart(2, "0")}:${String(
                t.getSeconds()
              ).padStart(2, "0")} ${t.getHours() >= 12 ? "PM" : "AM"}`,
              avgPrice: Number(e?.state?.executedSz)
                ? Number(
                    Number(e?.state?.executedNtl) / Number(e?.state?.executedSz)
                  ).toFixed(6 - a[e?.state?.coin] || 6)
                : "--",
            };
          },
          n = (0, c.useIsMobile)(),
          d = l
            .sort((e, t) => t.time - e.time)
            .map((e, s) => {
              let { formattedTime: l, avgPrice: a } = r(e);
              return (0, t.jsxs)(
                o.Table.Tr,
                {
                  children: [
                    (0, t.jsx)(o.Table.Td, {
                      className: "cursor-pointer",
                      children: (0, t.jsx)("div", {
                        className: "ml-2",
                        children: l,
                      }),
                    }),
                    (0, t.jsx)(o.Table.Td, {
                      className: (0, x.default)("font-medium", {
                        "text-grass/90": e?.state?.side === "B",
                        "text-blood/90": e?.state?.side === "A",
                      }),
                      children: (0, t.jsx)(T.default, {
                        tokenName: e?.state?.coin,
                      }),
                    }),
                    (0, t.jsxs)(o.Table.Td, {
                      className: (0, x.default)({
                        "text-grass": e?.state?.side === "B",
                        "text-blood": e?.state?.side === "A",
                      }),
                      children: [e?.state?.sz, " ", e?.state?.coin],
                    }),
                    (0, t.jsx)(o.Table.Td, {
                      className: (0, x.default)({
                        "text-grass": e?.state?.side === "B",
                        "text-blood": e?.state?.side === "A",
                      }),
                      children: Number(e?.state?.executedSz)
                        ? `${e?.state?.executedSz} ${e?.state?.coin}`
                        : "--",
                    }),
                    (0, t.jsx)(o.Table.Td, {
                      children: "--" !== a ? `$${a}` : "--",
                    }),
                    (0, t.jsx)(o.Table.Td, {
                      children: er(0, e?.state?.minutes),
                    }),
                    (0, t.jsx)(o.Table.Td, {
                      children: e?.state?.reduceOnly ? "Yes" : "No",
                    }),
                    (0, t.jsx)(o.Table.Td, {
                      children: e?.state?.randomize ? "Yes" : "No",
                    }),
                    (0, t.jsx)(o.Table.Td, {
                      className: "capitalize",
                      children: e?.status?.status,
                    }),
                  ],
                },
                s
              );
            });
        return (0, t.jsxs)("div", {
          className: "h-full overflow-auto pb-10",
          children: [
            n
              ? (0, t.jsxs)("div", {
                  className: "flex flex-col gap-3 p-2",
                  children: [
                    !s &&
                      l?.length > 0 &&
                      (0, t.jsx)("div", {
                        className:
                          "flex justify-between items-center px-2 py-1",
                        children: (0, t.jsxs)("span", {
                          className: "text-zinc-400 text-xs",
                          children: [l.length, " History"],
                        }),
                      }),
                    l
                      .sort((e, t) => t.time - e.time)
                      .map((e, s) =>
                        ((e, s) => {
                          let { formattedTime: l, avgPrice: a } = r(e);
                          return (0, t.jsx)(
                            "div",
                            {
                              className:
                                "flex flex-col gap-4 py-4 px-4 rounded-xl bg-neutral-900 border border-neutral-800 shadow-lg",
                              children: (0, t.jsxs)("div", {
                                className: "grid grid-cols-3 gap-y-4 gap-x-2",
                                children: [
                                  (0, t.jsxs)("div", {
                                    className: "flex flex-col gap-0.5",
                                    children: [
                                      (0, t.jsx)("span", {
                                        className:
                                          "text-neutral-500 text-xs font-normal",
                                        children: "Coin",
                                      }),
                                      (0, t.jsx)("div", {
                                        className: (0, x.default)(
                                          "text-xs font-semibold",
                                          {
                                            "text-grass/90":
                                              e?.state?.side === "B",
                                            "text-blood/90":
                                              e?.state?.side === "A",
                                          }
                                        ),
                                        children: (0, t.jsx)(T.default, {
                                          tokenName: e?.state?.coin,
                                        }),
                                      }),
                                    ],
                                  }),
                                  (0, t.jsxs)("div", {
                                    className:
                                      "flex flex-col gap-0.5 col-span-2",
                                    children: [
                                      (0, t.jsx)("span", {
                                        className:
                                          "text-neutral-500 text-xs font-normal text-nowrap",
                                        children: "Time",
                                      }),
                                      (0, t.jsx)("span", {
                                        className:
                                          "text-white text-xs font-medium leading-[1.2]",
                                        children: l,
                                      }),
                                    ],
                                  }),
                                  (0, t.jsxs)("div", {
                                    className: "flex flex-col gap-0.5",
                                    children: [
                                      (0, t.jsx)("span", {
                                        className:
                                          "text-neutral-500 text-xs font-normal",
                                        children: "Total Size",
                                      }),
                                      (0, t.jsxs)("span", {
                                        className:
                                          "text-white text-xs font-medium",
                                        children: [
                                          e?.state?.sz,
                                          " ",
                                          e?.state?.coin,
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, t.jsxs)("div", {
                                    className: "flex flex-col gap-0.5",
                                    children: [
                                      (0, t.jsx)("span", {
                                        className:
                                          "text-neutral-500 text-xs font-normal",
                                        children: "Executed",
                                      }),
                                      (0, t.jsx)("span", {
                                        className:
                                          "text-white text-xs font-medium",
                                        children: Number(e?.state?.executedSz)
                                          ? `${e?.state?.executedSz}`
                                          : "--",
                                      }),
                                    ],
                                  }),
                                  (0, t.jsxs)("div", {
                                    className: "flex flex-col gap-0.5",
                                    children: [
                                      (0, t.jsx)("span", {
                                        className:
                                          "text-neutral-500 text-xs font-normal",
                                        children: "Avg Price",
                                      }),
                                      (0, t.jsx)("span", {
                                        className:
                                          "text-white text-xs font-medium",
                                        children: "--" !== a ? `$${a}` : "--",
                                      }),
                                    ],
                                  }),
                                  (0, t.jsxs)("div", {
                                    className: "flex flex-col gap-0.5",
                                    children: [
                                      (0, t.jsx)("span", {
                                        className:
                                          "text-neutral-500 text-xs font-normal",
                                        children: "Runtime",
                                      }),
                                      (0, t.jsx)("span", {
                                        className:
                                          "text-white text-xs font-medium",
                                        children: er(0, e?.state?.minutes),
                                      }),
                                    ],
                                  }),
                                  (0, t.jsxs)("div", {
                                    className: "flex flex-col gap-0.5",
                                    children: [
                                      (0, t.jsx)("span", {
                                        className:
                                          "text-neutral-500 text-xs font-normal",
                                        children: "Reduce Only",
                                      }),
                                      (0, t.jsx)("span", {
                                        className:
                                          "text-white text-xs font-medium",
                                        children: e?.state?.reduceOnly
                                          ? "Yes"
                                          : "No",
                                      }),
                                    ],
                                  }),
                                  (0, t.jsxs)("div", {
                                    className: "flex flex-col gap-0.5",
                                    children: [
                                      (0, t.jsx)("span", {
                                        className:
                                          "text-neutral-500 text-xs font-normal",
                                        children: "Status",
                                      }),
                                      (0, t.jsx)("span", {
                                        className:
                                          "text-white text-xs font-medium capitalize",
                                        children: e?.status?.status,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            },
                            s
                          );
                        })(e, s)
                      ),
                  ],
                })
              : (0, t.jsxs)(o.Table, {
                  classNames:
                    "gtr" === e
                      ? {
                          table:
                            "rounded-lg overflow-hidden border-1 border-neutral-900",
                          thead:
                            "!bg-neutral-950 hover:!bg-neutral-950 uppercase",
                          th: "text-xs font-normal !bg-neutral-950 hover:!bg-neutral-950 text-neutral-400 h-10",
                          tbody: "bg-white/5",
                          td: "text-neutral-300 text-sm py-4 font-semibold",
                          tr: "border-b-1 border-neutral-800 last:border-b-0 hover:bg-white/5 transition-all duration-400 even:bg-neutral-950 odd:bg-[#141414]",
                        }
                      : {
                          table: "!min-w-[1000px] overflow-x-auto",
                          th: "!pl-0.5 !py-2 !font-normal !text-xs !text-slate-900 !border-ash !border-b bg-transparent",
                          td: "!pl-0.5 !py-2 !text-xs",
                          tr: "!border-[#1f222c]/90",
                        },
                  className: "!p-1",
                  styles: { table: { minWidth: "1200px" } },
                  children: [
                    (0, t.jsx)(o.Table.Thead, {
                      children: (0, t.jsxs)(o.Table.Tr, {
                        children: [
                          (0, t.jsx)(o.Table.Th, {
                            children: (0, t.jsx)("div", {
                              className: "ml-2",
                              children: "Time",
                            }),
                          }),
                          (0, t.jsx)(o.Table.Th, { children: "Coin" }),
                          (0, t.jsx)(o.Table.Th, { children: "Total Size" }),
                          (0, t.jsx)(o.Table.Th, { children: "Executed Size" }),
                          (0, t.jsx)(o.Table.Th, { children: "Average Price" }),
                          (0, t.jsx)(o.Table.Th, { children: "Total Runtime" }),
                          (0, t.jsx)(o.Table.Th, { children: "Reduce Only" }),
                          (0, t.jsx)(o.Table.Th, { children: "Randomize" }),
                          (0, t.jsx)(o.Table.Th, { children: "Status" }),
                        ],
                      }),
                    }),
                    (0, t.jsx)(o.Table.Tbody, { children: d }),
                  ],
                }),
            l?.length === 0
              ? (0, t.jsx)("div", {
                  className: "pb-10",
                  children: (0, t.jsx)(V.default, { text: "No TWAPs Yet" }),
                })
              : null,
          ],
        });
      },
      ec = ({ variant: e = "tabs", isSocial: s = !1 }) => {
        let { userTwapSliceFills: l } = (0, i.useHyperliquidStore)(
            (0, A.useShallow)((e) => ({
              userTwapSliceFills: s
                ? e.socialUserTwapSliceFills
                : e.userTwapSliceFills,
            }))
          ),
          a = (e) => {
            let t = new Date(e?.fill?.time);
            return {
              formattedTime: `${
                t.getMonth() + 1
              }/${t.getDate()}/${t.getFullYear()} — ${
                t.getHours() % 12 || 12
              }:${String(t.getMinutes()).padStart(2, "0")}:${String(
                t.getSeconds()
              ).padStart(2, "0")} ${t.getHours() >= 12 ? "PM" : "AM"}`,
              tradeValue: Number(
                Number(e?.fill?.px) * Number(e?.fill?.sz)
              ).toFixed(2),
            };
          },
          r = (0, c.useIsMobile)(),
          n = l
            .sort((e, t) => t.fill?.time - e.fill?.time)
            .map((e, s) => {
              let { formattedTime: l, tradeValue: r } = a(e);
              return (0, t.jsxs)(
                o.Table.Tr,
                {
                  children: [
                    (0, t.jsx)(o.Table.Td, {
                      className: "cursor-pointer",
                      children: (0, t.jsx)("div", {
                        className: "ml-2",
                        children: l,
                      }),
                    }),
                    (0, t.jsx)(o.Table.Td, {
                      className: (0, x.default)("font-medium", {
                        "text-grass/90": e?.fill?.side === "B",
                        "text-blood/90": e?.fill?.side === "A",
                      }),
                      children: (0, t.jsx)(T.default, {
                        tokenName: e?.fill?.coin,
                      }),
                    }),
                    (0, t.jsx)(o.Table.Td, {
                      className: (0, x.default)({
                        "text-grass": e?.fill?.side === "B",
                        "text-blood": e?.fill?.side === "A",
                      }),
                      children: e?.fill?.dir,
                    }),
                    (0, t.jsxs)(o.Table.Td, { children: ["$", e?.fill?.px] }),
                    (0, t.jsxs)(o.Table.Td, {
                      children: [e?.fill?.sz, " ", e?.fill.coin],
                    }),
                    (0, t.jsxs)(o.Table.Td, { children: ["$", r] }),
                    (0, t.jsxs)(o.Table.Td, {
                      children: [e?.fill?.closedPnl, " USDC"],
                    }),
                  ],
                },
                s
              );
            });
        return (0, t.jsxs)("div", {
          className: "h-full overflow-auto pb-10",
          children: [
            r
              ? (0, t.jsxs)("div", {
                  className: "flex flex-col gap-3 p-2",
                  children: [
                    !s &&
                      l?.length > 0 &&
                      (0, t.jsx)("div", {
                        className:
                          "flex justify-between items-center px-2 py-1",
                        children: (0, t.jsxs)("span", {
                          className: "text-zinc-400 text-xs",
                          children: [l.length, " Fills"],
                        }),
                      }),
                    l
                      .sort((e, t) => t.fill?.time - e.fill?.time)
                      .map((e, s) =>
                        ((e, s) => {
                          let { formattedTime: l, tradeValue: r } = a(e);
                          return (0, t.jsx)(
                            "div",
                            {
                              className:
                                "flex flex-col gap-4 py-4 px-4 rounded-xl bg-neutral-900 border border-neutral-800 shadow-lg",
                              children: (0, t.jsxs)("div", {
                                className: "grid grid-cols-3 gap-y-4 gap-x-2",
                                children: [
                                  (0, t.jsxs)("div", {
                                    className: "flex flex-col gap-0.5",
                                    children: [
                                      (0, t.jsx)("span", {
                                        className:
                                          "text-neutral-500 text-xs font-normal",
                                        children: "Coin",
                                      }),
                                      (0, t.jsx)("div", {
                                        className: (0, x.default)(
                                          "text-xs font-semibold",
                                          {
                                            "text-grass/90":
                                              e?.fill?.side === "B",
                                            "text-blood/90":
                                              e?.fill?.side === "A",
                                          }
                                        ),
                                        children: (0, t.jsx)(T.default, {
                                          tokenName: e?.fill?.coin,
                                        }),
                                      }),
                                    ],
                                  }),
                                  (0, t.jsxs)("div", {
                                    className:
                                      "flex flex-col gap-0.5 col-span-2",
                                    children: [
                                      (0, t.jsx)("span", {
                                        className:
                                          "text-neutral-500 text-xs font-normal text-nowrap",
                                        children: "Time",
                                      }),
                                      (0, t.jsx)("span", {
                                        className:
                                          "text-white text-xs font-medium leading-[1.2]",
                                        children: l,
                                      }),
                                    ],
                                  }),
                                  (0, t.jsxs)("div", {
                                    className: "flex flex-col gap-0.5",
                                    children: [
                                      (0, t.jsx)("span", {
                                        className:
                                          "text-neutral-500 text-xs font-normal",
                                        children: "Direction",
                                      }),
                                      (0, t.jsx)("span", {
                                        className: (0, x.default)(
                                          "text-xs font-medium",
                                          {
                                            "text-blood/90":
                                              e?.fill?.side === "A",
                                            "text-grass/90":
                                              e?.fill?.side === "B",
                                          }
                                        ),
                                        children: e?.fill?.dir,
                                      }),
                                    ],
                                  }),
                                  (0, t.jsxs)("div", {
                                    className: "flex flex-col gap-0.5",
                                    children: [
                                      (0, t.jsx)("span", {
                                        className:
                                          "text-neutral-500 text-xs font-normal",
                                        children: "Price",
                                      }),
                                      (0, t.jsxs)("span", {
                                        className:
                                          "text-white text-xs font-medium",
                                        children: ["$", e?.fill?.px],
                                      }),
                                    ],
                                  }),
                                  (0, t.jsxs)("div", {
                                    className: "flex flex-col gap-0.5",
                                    children: [
                                      (0, t.jsx)("span", {
                                        className:
                                          "text-neutral-500 text-xs font-normal",
                                        children: "Size",
                                      }),
                                      (0, t.jsxs)("span", {
                                        className:
                                          "text-white text-xs font-medium",
                                        children: [
                                          e?.fill?.sz,
                                          " ",
                                          e?.fill.coin,
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, t.jsxs)("div", {
                                    className: "flex flex-col gap-0.5",
                                    children: [
                                      (0, t.jsx)("span", {
                                        className:
                                          "text-neutral-500 text-xs font-normal",
                                        children: "Trade Value",
                                      }),
                                      (0, t.jsxs)("span", {
                                        className:
                                          "text-white text-xs font-medium",
                                        children: ["$", r],
                                      }),
                                    ],
                                  }),
                                  (0, t.jsxs)("div", {
                                    className: "flex flex-col gap-0.5",
                                    children: [
                                      (0, t.jsx)("span", {
                                        className:
                                          "text-neutral-500 text-xs font-normal",
                                        children: "Closed PNL",
                                      }),
                                      (0, t.jsxs)("span", {
                                        className:
                                          "text-white text-xs font-medium",
                                        children: [e?.fill?.closedPnl, " USDC"],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            },
                            s
                          );
                        })(e, s)
                      ),
                  ],
                })
              : (0, t.jsxs)(o.Table, {
                  classNames:
                    "gtr" === e
                      ? {
                          table:
                            "rounded-lg overflow-hidden border-1 border-neutral-900",
                          thead:
                            "!bg-neutral-950 hover:!bg-neutral-950 uppercase",
                          th: "text-xs font-normal !bg-neutral-950 hover:!bg-neutral-950 text-neutral-400 h-10",
                          tbody: "bg-white/5",
                          td: "text-neutral-300 text-sm py-4 font-semibold",
                          tr: "border-b-1 border-neutral-800 last:border-b-0 hover:bg-white/5 transition-all duration-400 even:bg-neutral-950 odd:bg-[#141414]",
                        }
                      : {
                          table: "!min-w-[700px] overflow-x-auto",
                          th: "!pl-0.5 !py-2 !font-normal !text-xs !text-slate-900 !border-ash !border-b bg-transparent",
                          td: "!pl-0.5 !py-2 !text-xs",
                          tr: "!border-[#1f222c]/90",
                        },
                  className: "!p-1",
                  styles: { table: { minWidth: "1200px" } },
                  children: [
                    (0, t.jsx)(o.Table.Thead, {
                      children: (0, t.jsxs)(o.Table.Tr, {
                        children: [
                          (0, t.jsx)(o.Table.Th, {
                            children: (0, t.jsx)("div", {
                              className: "ml-2",
                              children: "Time",
                            }),
                          }),
                          (0, t.jsx)(o.Table.Th, { children: "Coin" }),
                          (0, t.jsx)(o.Table.Th, { children: "Direction" }),
                          (0, t.jsx)(o.Table.Th, { children: "Price" }),
                          (0, t.jsx)(o.Table.Th, { children: "Size" }),
                          (0, t.jsx)(o.Table.Th, { children: "Trade Value" }),
                          (0, t.jsx)(o.Table.Th, { children: "Closed PNL" }),
                        ],
                      }),
                    }),
                    (0, t.jsx)(o.Table.Tbody, { children: n }),
                  ],
                }),
            l?.length === 0
              ? (0, t.jsx)("div", {
                  className: "pb-10",
                  children: (0, t.jsx)(V.default, { text: "No TWAPs Yet" }),
                })
              : null,
          ],
        });
      },
      ex = ({ variant: e = "tabs", isSocial: r = !1 }) => {
        let [n, o] = (0, s.useState)("active"),
          { messageEvent: d, isConnected: c } = (0,
          q.useHyperliquidWebSocket)(),
          { authenticated: x } = (0, a.usePrivy)(),
          {
            setUserTwapHistory: u,
            setUserTwapSliceFills: m,
            selectedSocialAddress: h,
          } = (0, i.useHyperliquidStore)(
            (0, A.useShallow)((e) => ({
              setUserTwapHistory: r
                ? e.setSocialUserTwapHistory
                : e.setUserTwapHistory,
              setUserTwapSliceFills: r
                ? e.setSocialUserTwapSliceFills
                : e.setUserTwapSliceFills,
              selectedSocialAddress: e.selectedSocialAddress,
            }))
          ),
          { wallets: p } = (0, g.useWallets)(),
          b = p.find((e) => "privy" === e.walletClientType),
          f = (e) => {
            let t = r ? h?.hyperliquid : b?.address;
            e &&
              t &&
              e?.user?.toLowerCase() === t?.toLowerCase() &&
              (e?.isSnapshot
                ? u(e?.history)
                : u([
                    ...(r
                      ? i.useHyperliquidStore.getState().socialUserTwapHistory
                      : i.useHyperliquidStore.getState().userTwapHistory),
                    ...e?.history,
                  ]));
          },
          j = (e) => {
            let t = r ? h?.hyperliquid : b?.address;
            e &&
              t &&
              e?.user?.toLowerCase() === t?.toLowerCase() &&
              (e?.isSnapshot
                ? m(e?.twapSliceFills)
                : m([
                    ...(r
                      ? i.useHyperliquidStore.getState()
                          .socialUserTwapSliceFills
                      : i.useHyperliquidStore.getState().userTwapSliceFills),
                    ...e?.twapSliceFills,
                  ]));
          };
        return (
          (0, s.useEffect)(() => {
            c &&
              x &&
              b?.address &&
              !r &&
              (d("userTwapHistory", f), d("userTwapSliceFills", j));
          }, [c, x, b, r, h?.hyperliquid]),
          (0, t.jsxs)(l.Tabs, {
            value: n,
            onChange: o,
            classNames: {
              root: "flex flex-col flex-1",
              tab: "!h-9 !px-4 !py-0 !text-[14px] !font-medium hover:bg-slate-600/50 hover:rounded-none",
              tabLabel: "!text-xs !font-medium",
              list: "!p-0 !h-9 flex-nowrap overflow-scroll",
              panel: "overflow-hidden",
            },
            color: "#95FF00",
            children: [
              (0, t.jsxs)(l.Tabs.List, {
                children: [
                  (0, t.jsx)(l.Tabs.Tab, {
                    value: "active",
                    className:
                      "active" === n
                        ? "!bg-slate-600/50"
                        : "text-slate-900 hover:text-white !bg-transparent border-b-2 border-solid border-ash hover:border-ash",
                    children: "Active",
                  }),
                  (0, t.jsx)(l.Tabs.Tab, {
                    value: "history",
                    className:
                      "history" === n
                        ? "!bg-slate-600/50"
                        : "text-slate-900 hover:text-white !bg-transparent border-b-2 border-solid border-ash hover:border-ash",
                    children: "History",
                  }),
                  (0, t.jsx)(l.Tabs.Tab, {
                    value: "fills",
                    className:
                      "fills" === n
                        ? "!bg-slate-600/50"
                        : "text-slate-900 hover:text-white !bg-transparent border-b-2 border-solid border-ash hover:border-ash",
                    children: "Fill History",
                  }),
                ],
              }),
              (0, t.jsx)(l.Tabs.Panel, {
                value: "active",
                children: (0, t.jsx)(eo, { variant: e, isSocial: r }),
              }),
              (0, t.jsx)(l.Tabs.Panel, {
                value: "history",
                children: (0, t.jsx)(ed, { variant: e, isSocial: r }),
              }),
              (0, t.jsx)(l.Tabs.Panel, {
                value: "fills",
                children: (0, t.jsx)(ec, { variant: e, isSocial: r }),
              }),
            ],
          })
        );
      };
    var eu = e.i(77656),
      em = e.i(25293);
    let eh = (0, e.i(33550).default)(
      "outline",
      "arrows-left-right",
      "ArrowsLeftRight",
      [
        ["path", { d: "M21 17l-18 0", key: "svg-0" }],
        ["path", { d: "M6 10l-3 -3l3 -3", key: "svg-1" }],
        ["path", { d: "M3 7l18 0", key: "svg-2" }],
        ["path", { d: "M18 20l3 -3l-3 -3", key: "svg-3" }],
      ]
    );
    var ep = e.i(638282);
    let eb = ({
      opened: e,
      close: l,
      fromType: a,
      toType: i,
      maxAmount: n,
      onSwapDirection: o,
    }) => {
      let [d, m] = (0, s.useState)(""),
        [b, f] = (0, s.useState)(!1),
        { wallets: T } = (0, g.useWallets)(),
        w = T.find((e) => "privy" === e.walletClientType),
        { signTypedData: y } = (0, ep.useSignTypedData)(),
        S = (0, c.useIsMobile)(),
        C = async () => {
          if (!(!d || 0 >= Number(d))) {
            f(!0);
            try {
              w.switchChain(v.arbitrum.id);
              let e = (0, j.createWalletClient)({
                  account: w?.address,
                  chain: v.arbitrum,
                  transport: (0, N.custom)(await w.getEthereumProvider()),
                }),
                t = await (0, u.usdClassTransfer)({
                  wallet: e,
                  amount: d,
                  toPerp: "Perps" === i,
                  signTypedData: y,
                });
              "ok" === t.status && (l(), m(""));
            } catch (e) {
              console.error("Transfer failed:", e);
            } finally {
              f(!1);
            }
          }
        },
        P = d && Number(d) > 0 && Number(d) <= n,
        D = (0, t.jsxs)("div", {
          className: "pb-4",
          children: [
            (0, t.jsx)("div", {
              className: "mb-4",
              children: (0, t.jsx)("p", {
                className: "text-white text-sm",
                children: "Transfer USDC between your Perps and Spot balances.",
              }),
            }),
            (0, t.jsx)("div", {
              className: "flex items-center justify-center gap-4 mb-6",
              children: (0, t.jsxs)("div", {
                className: "flex items-center gap-3",
                children: [
                  (0, t.jsx)("span", {
                    className: "text-white font-medium text-sm",
                    children: a,
                  }),
                  (0, t.jsx)("button", {
                    onClick: () => {
                      o && o();
                    },
                    className:
                      "flex items-center justify-center w-6 h-6 rounded-full bg-grass/20 border border-grass/40 hover:bg-grass/30 hover:border-grass/60 transition-all cursor-pointer",
                    children: (0, t.jsx)(eh, {
                      size: 12,
                      className: "text-grass",
                    }),
                  }),
                  (0, t.jsx)("span", {
                    className: "text-white font-medium text-sm",
                    children: i,
                  }),
                ],
              }),
            }),
            (0, t.jsxs)("div", {
              children: [
                (0, t.jsxs)("div", {
                  className: "flex justify-between items-center mb-2",
                  children: [
                    (0, t.jsx)("div", {
                      className: "text-xs text-slate-900",
                      children: "Amount",
                    }),
                    (0, t.jsxs)("button", {
                      onClick: () => {
                        m(n.toString());
                      },
                      className:
                        "text-xs text-grass hover:text-grass/80 transition-colors",
                      children: ["MAX: ", n.toFixed(2)],
                    }),
                  ],
                }),
                (0, t.jsx)(em.TextInput, {
                  value: d,
                  onChange: (e) => m(e.target.value),
                  placeholder: "0.00",
                  classNames: {
                    input: (0, x.default)(
                      "!border-1 border-solid border-slate-600 !bg-[#17191f] h-10 font-semibold",
                      { "!border-red-500": d && (!P || Number(d) > n) }
                    ),
                  },
                  type: "number",
                  min: "0",
                  max: n,
                  step: "0.01",
                }),
                d &&
                  Number(d) > n &&
                  (0, t.jsx)("p", {
                    className: "text-red-400 text-xs mt-1",
                    children: "Amount exceeds maximum available balance",
                  }),
              ],
            }),
            (0, t.jsx)("div", {
              className: "mt-8",
              children: (0, t.jsx)(r.Button, {
                color: "#00FF2B",
                fullWidth: !0,
                className: `!px-2 !py-1 ${
                  !P || b ? "!bg-grass/20" : "!bg-grass"
                }`,
                classNames: { label: "!text-black" },
                disabled: !P || b,
                loading: b,
                onClick: C,
                children: b ? "Confirming..." : "Confirm",
              }),
            }),
          ],
        });
      return S
        ? (0, t.jsx)(h.Drawer, {
            opened: e,
            onClose: l,
            position: "bottom",
            size: "40%",
            title: (0, t.jsx)("div", {
              className: "font-semibold text-[18px]",
              children: "Transfer USDC",
            }),
            classNames: {
              header: "!bg-[#16171B] !text-white",
              body: "!p-4 !overflow-hidden bg-[#16171B]",
              content:
                "!bg-[#16171B] !rounded-t-2xl !border-t border-[#1F2126]",
              close: "!text-white hover:!bg-slate-200 hover:!text-white/60",
            },
            children: D,
          })
        : (0, t.jsx)(p.Modal, {
            opened: e,
            onClose: l,
            title: (0, t.jsx)("div", {
              className: "font-semibold text-[18px]",
              children: "Transfer USDC",
            }),
            centered: !0,
            size: 480,
            classNames: {
              header: "!bg-[#16171B]",
              body: "!p-4 !overflow-hidden",
              content: "!bg-[#16171B] !rounded-lg",
              close: "!text-white hover:!bg-slate-200 hover:!text-white/60",
            },
            styles: {
              content: { border: "1px solid #1F2126" },
              header: { borderBottom: "1px solid #1B1E26" },
            },
            children: D,
          });
    };
    var ef = e.i(22084),
      eg = e.i(146874),
      ej = e.i(176394);
    let eN = ({ close: e, balance: l, isMobile: a }) => {
        let n,
          [o, d] = (0, s.useState)(""),
          [c, x] = (0, s.useState)(0),
          [h, p] = (0, s.useState)(0),
          [T, w] = (0, s.useState)("perps"),
          [y, S] = (0, s.useState)("USDC"),
          [C, D] = (0, s.useState)(!1),
          { withdrawable: k, spotBalances: z } = (0, i.useHyperliquidStore)(
            (0, A.useShallow)((e) => ({
              withdrawable: e.withdrawable,
              spotBalances: e.spotBalances,
            }))
          ),
          { client: M } = (0, ej.useSmartWallets)(),
          { signTypedData: $ } = (0, ep.useSignTypedData)(),
          { wallets: F } = (0, g.useWallets)(),
          B = F.find((e) => "privy" === e.walletClientType),
          L = (n = z?.find((e) => e.coin === y || e.coin === `${y}`))
            ? Number(n.total || 0) - Number(n.hold || 0)
            : 0,
          I = async () => {
            if (!o.trim())
              return void (0, Y.notifyErrorToast)({
                message: "Please enter a valid destination address",
                icon: (0, t.jsx)(X.default, { icon: "fail" }),
              });
            if (0 >= Number(c) || Number(c) > L)
              return void (0, Y.notifyErrorToast)({
                message: "Please enter a valid amount",
                icon: (0, t.jsx)(X.default, { icon: "fail" }),
              });
            if ("perps" !== T)
              return void (0, Y.notifyErrorToast)({
                message:
                  "Currently only Perps account is supported for sending",
                icon: (0, t.jsx)(X.default, { icon: "fail" }),
              });
            D(!0);
            let s = (0, Y.notifyLoadingToast)({ message: "Sending USDC..." });
            try {
              B?.switchChain(v.arbitrum.id);
              let l = (0, j.createWalletClient)({
                  account: B?.address,
                  chain: v.arbitrum,
                  transport: (0, N.custom)(await B?.getEthereumProvider()),
                }),
                a = await (0, u.withdrawUSDC)({
                  type: "usdSend",
                  wallet: l,
                  amount: c,
                  destinationWallet: o,
                  signTypedData: $,
                });
              "ok" === a.status
                ? (e(),
                  (0, Y.notifySuccessToast)({
                    message: "USDC sent successfully!",
                    icon: (0, t.jsx)(X.default, { icon: "success" }),
                    id: s,
                  }))
                : (0, Y.notifyErrorToast)({
                    message: "Send failed",
                    icon: (0, t.jsx)(X.default, { icon: "fail" }),
                  });
            } catch (e) {
              (0, Y.notifyErrorToast)({
                message: "Send failed",
                icon: (0, t.jsx)(X.default, { icon: "fail" }),
              });
            } finally {
              D(!1);
            }
          };
        return (
          l?.coin.includes("USDC") || l?.coin.replace(" (Spot)", ""),
          (0, t.jsxs)("div", {
            className: "flex flex-col justify-between min-h-[500px]",
            children: [
              !a &&
                (0, t.jsx)("div", {
                  className: "p-4 border-b border-[#2D313C]",
                  children: (0, t.jsx)("h1", {
                    className:
                      "text-[18px] font-medium leading-[88%] text-white",
                    children: "Send Tokens",
                  }),
                }),
              (0, t.jsxs)("div", {
                className:
                  "mx-4 mt-4 bg-yellow-400/20 border border-yellow-400/40 rounded-lg p-3 flex items-start gap-2",
                children: [
                  (0, t.jsx)(eg.IconAlertTriangle, {
                    size: 16,
                    className: "text-yellow-400 mt-0.5 flex-shrink-0",
                  }),
                  (0, t.jsx)("p", {
                    className: "text-yellow-400/90 text-xs leading-relaxed",
                    children:
                      "Make sure to check wallet address before sending, funds might be lost if sent to wrong address",
                  }),
                ],
              }),
              (0, t.jsxs)("div", {
                className: "px-4 py-6 space-y-4 flex-1",
                children: [
                  (0, t.jsxs)("div", {
                    children: [
                      (0, t.jsx)("label", {
                        className: "text-xs text-[#858DA3] mb-1 block",
                        children: "Destination",
                      }),
                      (0, t.jsx)(ef.Input, {
                        classNames: {
                          input:
                            "!border-0 !border-b !border-slate-600 !bg-transparent h-8 font-medium placeholder:!text-sm placeholder:!text-[#858DA399] rounded-none",
                        },
                        placeholder:
                          "Enter Hyperliquid account address (0x...)",
                        value: o,
                        onChange: (e) => d(e.target.value),
                        disabled: C,
                      }),
                    ],
                  }),
                  (0, t.jsxs)("div", {
                    children: [
                      (0, t.jsx)("label", {
                        className: "text-xs text-[#858DA3] mb-1 block",
                        children: "Token",
                      }),
                      (0, t.jsx)(P.Select, {
                        data:
                          "perps" === T
                            ? [{ value: "USDC", label: "USDC" }]
                            : [
                                { value: "USDC", label: "USDC" },
                                { value: "UBTC", label: "UBTC" },
                                { value: "UETH", label: "UETH" },
                                { value: "USOL", label: "USOL" },
                              ],
                        value: y,
                        onChange: (e) => {
                          S(e || "USDC"), x(0), p(0);
                        },
                        classNames: {
                          input:
                            "!border border-slate-600 !bg-black/40 h-8 font-medium",
                          dropdown: "!bg-[#16171B] !border-[#1F2126]",
                        },
                        disabled: C,
                        searchable: !0,
                        placeholder: "Select token",
                      }),
                    ],
                  }),
                  (0, t.jsxs)("div", {
                    children: [
                      (0, t.jsx)("label", {
                        className: "text-xs text-[#858DA3] mb-1 block",
                        children: "Amount",
                      }),
                      (0, t.jsx)(b.NumberInput, {
                        classNames: {
                          input:
                            "!border-0 !border-b !border-slate-600 !bg-transparent h-8 font-medium placeholder:!text-sm placeholder:!text-[#858DA399] rounded-none",
                        },
                        placeholder: "0.0",
                        min: 0,
                        max: L,
                        value: c || "",
                        onChange: (e) => {
                          x(Number(e)), p((Number(e) / L) * 100);
                        },
                        disabled: C,
                        hideControls: !0,
                        rightSection: (0, t.jsx)("div", {
                          className:
                            "bg-[#858DA34D] mr-2 text-xs text-white w-[60px] flex justify-center cursor-pointer font-medium py-[5px] px-[8px] rounded-sm hover:bg-[#858DA34D]/80 transition-colors",
                          onClick: () => {
                            x(L), p(100);
                          },
                          children: "MAX",
                        }),
                      }),
                    ],
                  }),
                  (0, t.jsxs)("div", {
                    children: [
                      (0, t.jsx)("label", {
                        className: "text-xs text-[#858DA3] mb-1 block",
                        children: "Available",
                      }),
                      (0, t.jsxs)("div", {
                        className: "text-sm text-[#858DA3]",
                        children: [(0, m.truncateToDecimals)(L, 6), " ", y],
                      }),
                    ],
                  }),
                  (0, t.jsx)("div", {
                    className: "pt-4",
                    children: (0, t.jsx)(f.Slider, {
                      color: "#00FF2B",
                      value: h,
                      size: 5,
                      min: 0,
                      max: 100,
                      marks: [
                        { value: 0, label: "0%" },
                        { value: 25, label: "25%" },
                        { value: 50, label: "50%" },
                        { value: 75, label: "75%" },
                        { value: 100, label: "100%" },
                      ],
                      classNames: {
                        mark: "hidden",
                        markLabel: "text-[12px] text-slate-900 pt-1",
                        label: "bg-[#101216]",
                        bar: "bg-gradient-to-r from-[#1f222c] to-[#02E88C]",
                      },
                      onChange: (e) => {
                        p(e), x((0, m.roundedNumber)((e / 100) * L));
                      },
                    }),
                  }),
                ],
              }),
              (0, t.jsx)("div", {
                className: "px-4 pb-6 mt-8",
                children: (0, t.jsx)(r.Button, {
                  color: "#00FF2B",
                  fullWidth: !0,
                  className: `!px-2 !py-1 ${
                    0 >= Number(c) || Number(c) > L || C
                      ? "!bg-grass/20"
                      : "!bg-grass"
                  }`,
                  classNames: { label: "!text-black" },
                  disabled: !o.trim() || 0 >= Number(c) || Number(c) > L || C,
                  onClick: I,
                  loading: C,
                  children: "Send",
                }),
              }),
            ],
          })
        );
      },
      ev = ({ opened: e, close: s, balance: l }) => {
        let a = (0, c.useIsMobile)();
        return a
          ? (0, t.jsx)(h.Drawer, {
              opened: e,
              onClose: s,
              position: "bottom",
              size: "80%",
              title: (0, t.jsx)("div", {
                className: "font-semibold text-[18px]",
                children: "Send Tokens",
              }),
              classNames: {
                header: "!bg-[#16171B]",
                body: "!p-0 !overflow-hidden bg-[#16171B]",
                content:
                  "!bg-[#16171A] !rounded-t-2xl !border-t border-[#1F2126]",
                close: "!text-white hover:!bg-slate-200 hover:!text-white/60",
              },
              children: (0, t.jsx)(eN, { close: s, balance: l, isMobile: a }),
            })
          : (0, t.jsx)(p.Modal, {
              opened: e,
              centered: !0,
              onClose: s,
              title: null,
              classNames: {
                header: "!hidden",
                body: "!p-0 !overflow-hidden",
                content: "!bg-[#16171B] !rounded-lg",
                close: "!text-white hover:!bg-slate-200 hover:!text-white/60",
              },
              styles: { content: { border: "1px solid #1F2126" } },
              size: 444,
              children: (0, t.jsx)(eN, { close: s, balance: l, isMobile: a }),
            });
      },
      eT = ({ close: e }) => {
        let {
            withdrawable: l,
            clearinghouseStateByDex: a,
            perpsDex: n,
          } = (0, i.useHyperliquidStore)((e) => e),
          o = () => {
            if (n && Array.isArray(n) && n.length > 0) {
              let e = n[0];
              if (e && e.name) return e.name;
            }
            return "spot";
          },
          [d, c] = (0, s.useState)("perps"),
          [x, h] = (0, s.useState)(o()),
          [p, f] = (0, s.useState)("USDC"),
          [T, w] = (0, s.useState)(0),
          [y, S] = (0, s.useState)(!1),
          { signTypedData: C } = (0, ep.useSignTypedData)(),
          { wallets: D } = (0, g.useWallets)(),
          k = D.find((e) => "privy" === e.walletClientType),
          A = [
            { value: "perps", label: "Hyperliquid (Perps)" },
            { value: "spot", label: "Hyperliquid (Spot)" },
            ...(n && n.length > 0
              ? n.map((e) => ({ value: e.name, label: e.name.toUpperCase() }))
              : []),
          ],
          z = (() => {
            if ("USDC" === p) {
              if ("perps" === d) return Number(l || 0);
              if (a && a[d]) return Number(a[d].withdrawable || 0);
            }
            return 0;
          })(),
          M = async () => {
            if (0 >= Number(T))
              return void (0, Y.notifyErrorToast)({
                message: "Please enter a valid amount",
                icon: (0, t.jsx)(X.default, { icon: "fail" }),
              });
            if (Number(T) > z)
              return void (0, Y.notifyErrorToast)({
                message: "Insufficient balance",
                icon: (0, t.jsx)(X.default, { icon: "fail" }),
              });
            S(!0);
            let s = (0, Y.notifyLoadingToast)({
              message: "Transferring funds between DEXes...",
            });
            try {
              k?.switchChain(v.arbitrum.id);
              let l = (0, j.createWalletClient)({
                  account: k?.address,
                  chain: v.arbitrum,
                  transport: (0, N.custom)(await k?.getEthereumProvider()),
                }),
                a = await (0, u.sendAsset)({
                  sourceDex: "perps" === d ? "" : d,
                  destinationDex: "perps" === x ? "" : x,
                  token: "USDC:0x6d1e7cde53ba9467b783cb7c530ce054",
                  wallet: l,
                  destinationWallet: k?.address,
                  amount: String(T),
                  signTypedData: C,
                });
              "ok" === a.status
                ? (e(),
                  (0, Y.notifySuccessToast)({
                    message: "Transfer completed successfully!",
                    icon: (0, t.jsx)(X.default, { icon: "success" }),
                    id: s,
                  }))
                : (0, Y.notifyErrorToast)({
                    message: "Transfer failed",
                    icon: (0, t.jsx)(X.default, { icon: "fail" }),
                  });
            } catch (e) {
              console.log(e),
                (0, Y.notifyErrorToast)({
                  message: "Transfer failed",
                  icon: (0, t.jsx)(X.default, { icon: "fail" }),
                });
            } finally {
              S(!1);
            }
          };
        return (0, t.jsxs)("div", {
          className: "flex flex-col justify-between min-h-[500px]",
          children: [
            (0, t.jsx)("div", {
              className: "p-4 border-b border-[#2D313C]",
              children: (0, t.jsx)("h1", {
                className: "text-[18px] font-medium leading-[88%] text-white",
                children: "Transfer Between HIP-3 Dexes",
              }),
            }),
            (0, t.jsxs)("div", {
              className: "px-4 py-6 space-y-4 flex-1",
              children: [
                (0, t.jsxs)("div", {
                  className: "grid grid-cols-2 gap-4",
                  children: [
                    (0, t.jsxs)("div", {
                      children: [
                        (0, t.jsx)("label", {
                          className: "text-xs text-[#858DA3] mb-1 block",
                          children: "From DEX",
                        }),
                        (0, t.jsx)(P.Select, {
                          data: A.filter((e) => e.value !== x),
                          value: d,
                          onChange: (e) => {
                            c(e || "perps"), w(0);
                          },
                          classNames: {
                            input:
                              "!border border-slate-600 !bg-black/40 h-8 font-medium",
                            dropdown: "!bg-[#16171B] !border-[#1F2126]",
                          },
                          disabled: y,
                        }),
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      children: [
                        (0, t.jsx)("label", {
                          className: "text-xs text-[#858DA3] mb-1 block",
                          children: "To DEX",
                        }),
                        (0, t.jsx)(P.Select, {
                          data: A.filter((e) => e.value !== d),
                          value: x,
                          onChange: (e) => h(e || o()),
                          classNames: {
                            input:
                              "!border border-slate-600 !bg-black/40 h-8 font-medium",
                            dropdown: "!bg-[#16171B] !border-[#1F2126]",
                          },
                          disabled: y,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  children: [
                    (0, t.jsx)("label", {
                      className: "text-xs text-[#858DA3] mb-1 block",
                      children: "Token to Transfer",
                    }),
                    (0, t.jsx)(P.Select, {
                      data: [{ value: "USDC", label: "USDC" }],
                      value: p,
                      onChange: (e) => {
                        f(e || "USDC"), w(0);
                      },
                      classNames: {
                        input:
                          "!border border-slate-600 !bg-black/40 h-8 font-medium",
                        dropdown: "!bg-[#16171B] !border-[#1F2126]",
                      },
                      disabled: y,
                    }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  children: [
                    (0, t.jsxs)("label", {
                      className: "text-xs text-[#858DA3] mb-1 block",
                      children: ["Amount (", p, ")"],
                    }),
                    (0, t.jsx)(b.NumberInput, {
                      classNames: {
                        input:
                          "!border-0 !border-b !border-slate-600 !bg-transparent h-8 font-medium placeholder:!text-sm placeholder:!text-[#858DA399] rounded-none",
                      },
                      placeholder: "Enter amount",
                      min: 0,
                      max: z,
                      value: T || "",
                      onChange: (e) => w(Number(e)),
                      disabled: y,
                      hideControls: !0,
                      rightSection: (0, t.jsx)("div", {
                        className:
                          "bg-[#858DA34D] mr-2 text-xs text-white w-[60px] flex justify-center cursor-pointer font-medium py-[5px] px-[8px] rounded-sm hover:bg-[#858DA34D]/80 transition-colors",
                        onClick: () => w(z),
                        children: "MAX",
                      }),
                    }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  className: "flex justify-between items-center",
                  children: [
                    (0, t.jsx)("label", {
                      className: "text-xs text-[#858DA3]",
                      children: "Available",
                    }),
                    (0, t.jsxs)("div", {
                      className: "text-sm text-white",
                      children: [(0, m.truncateToDecimals)(z, 6), " ", p],
                    }),
                  ],
                }),
              ],
            }),
            (0, t.jsx)("div", {
              className: "px-4 pb-6",
              children: (0, t.jsx)(r.Button, {
                color: "#00FF2B",
                fullWidth: !0,
                className: `!px-2 !py-1 ${
                  0 >= Number(T) || Number(T) > z || y
                    ? "!bg-grass/20"
                    : "!bg-grass"
                }`,
                classNames: { label: "!text-black" },
                disabled: 0 >= Number(T) || Number(T) > z || y,
                onClick: M,
                loading: y,
                children: "Transfer Funds",
              }),
            }),
          ],
        });
      },
      ew = ({ opened: e, close: s }) =>
        (0, t.jsx)(p.Modal, {
          opened: e,
          centered: !0,
          onClose: s,
          title: null,
          classNames: {
            header: "!hidden",
            body: "!p-0 !overflow-hidden",
            content: "!bg-[#16171B] !rounded-lg",
            close: "!text-white hover:!bg-slate-200 hover:!text-white/60",
          },
          styles: { content: { border: "1px solid #1F2126" } },
          size: 444,
          children: (0, t.jsx)(eT, { close: s }),
        }),
      ey = ({
        hideBalanceTableColumns: e = [],
        minWidth: l = "",
        variant: a = "tabs",
        isSocial: r = !1,
      }) => {
        let {
            spotBalances: n,
            spotMetaTokens: u,
            withdrawable: h,
            marginSummary: p,
            clearinghouseStateByDex: b,
            perpsDex: f,
          } = (0, i.useHyperliquidStore)(
            (0, A.useShallow)((e) => ({
              spotBalances: e.spotBalances,
              spotMetaTokens: r ? e.socialSpotMetaTokens : e.spotMetaTokens,
              withdrawable: r ? e.socialWithdrawable : e.withdrawable,
              marginSummary: r ? e.socialMarginSummary : e.marginSummary,
              clearinghouseStateByDex: r
                ? e.socialClearinghouseStateByDex
                : e.clearinghouseStateByDex,
              perpsDex: r ? e.socialPerpsDex : e.perpsDex,
            }))
          ),
          g = (0, E.useRouter)(),
          [j, { open: N, close: v }] = (0, d.useDisclosure)(!1),
          [T, { open: w, close: y }] = (0, d.useDisclosure)(!1),
          [S, { open: C, close: P }] = (0, d.useDisclosure)(!1),
          [D, k] = (0, s.useState)("Perps"),
          [z, M] = (0, s.useState)("Spot"),
          [$, F] = (0, s.useState)(0),
          [B, L] = (0, s.useState)(null),
          { getDataByIndex: I, getTokenIdByName: O } = (0, G.useSpotUtils)(),
          H = [...e, ...(r ? ["Send", "Transfer", "Contract"] : [])],
          U = n ? [...n] : [];
        U.findIndex((e) => "USDC" === e.coin);
        let q = [];
        if (
          (m.STABLECOINS_CONFIG.forEach((e) => {
            let t = U.findIndex((t) => t.coin === e);
            if (-1 !== t) {
              let s = { ...U[t], coin: `${e}` };
              U.splice(t, 1), q.push(s);
            }
          }),
          q.length > 0)
        ) {
          let e = U.findIndex((e) => "USDC" === e.coin);
          -1 !== e ? U.splice(e + 1, 0, ...q) : U.unshift(...q);
        }
        let W = [
            ...(U?.length === 0
              ? [
                  {
                    coin: "USDC",
                    token: 0,
                    total: "0",
                    hold: "0.0",
                    entryNtl: "0.0",
                  },
                ]
              : U),
          ],
          V = U?.find((e) => "USDC" === e.coin),
          R = Number(h || 0),
          _ = V ? Number(V.total || 0) - Number(V.hold || 0) : 0,
          Y = (e) => {
            L(e), w();
          },
          X = (e) => {
            let t = e.coin.includes("(Perps)") || void 0 !== e.dex,
              s = "USDC" === e.coin,
              l = e.coin.replace(/\s\(.+\)$/, ""),
              a = l.includes("USDC"),
              r = Number(e.total || 0),
              i = Number(e.hold || 0),
              n = a ? null : u?.find((e) => e.name === l),
              o =
                n && "number" == typeof n?.index
                  ? r * (Number(I(n.index, "markPx")) || 0)
                  : 0,
              d = s
                ? ["Transfer to Spot"]
                : e?.coin === "USDC"
                ? ["Transfer to Perps"]
                : [],
              c = a ? "" : O(l),
              x = a ? 0 : o - Number(e?.entryNtl),
              m = a
                ? 0
                : ((o - Number(e?.entryNtl)) / Number(e?.entryNtl)) * 100;
            return {
              isPerpsBalance: t,
              isMainPerpsBalance: s,
              baseCoinName: l,
              isUSDC: a,
              totalBalance: r,
              heldBalance: i,
              availableBalance: t ? i : r - i,
              token: n,
              tokenUsdcValue: o,
              usdcValue: a ? r : o,
              transferOptions: d,
              contractAddress: c,
              pnl: x,
              pnlPercentage: m,
            };
          },
          J = (0, c.useIsMobile)(),
          Q = W?.map((e, s) => {
            let {
              baseCoinName: l,
              isUSDC: a,
              totalBalance: r,
              availableBalance: i,
              usdcValue: n,
              transferOptions: d,
              contractAddress: c,
              pnl: u,
              pnlPercentage: h,
            } = X(e);
            return (0, t.jsxs)(
              o.Table.Tr,
              {
                children: [
                  H?.includes("Coin")
                    ? null
                    : (0, t.jsx)(o.Table.Td, {
                        className: (0, x.default)("relative", {
                          "cursor-pointer": !a,
                        }),
                        onClick: () => {
                          a || g.push(`/trade/spot/${l}/USDC`);
                        },
                        children: (0, t.jsx)("div", {
                          className:
                            "flex items-center gap-2 ml-2 font-semibold",
                          children: e.coin,
                        }),
                      }),
                  H?.includes("Total_Balance")
                    ? null
                    : (0, t.jsxs)(o.Table.Td, {
                        children: [
                          (0, m.truncateToDecimals)(r, r > 1 ? 2 : 6),
                          " ",
                          a ? "USDC" : l,
                        ],
                      }),
                  H?.includes("Available_Balance")
                    ? null
                    : (0, t.jsxs)(o.Table.Td, {
                        children: [
                          (0, m.truncateToDecimals)(i, i > 1 ? 2 : 6),
                          " ",
                          a ? "USDC" : l,
                        ],
                      }),
                  H?.includes("USDC_Value")
                    ? null
                    : (0, t.jsx)(o.Table.Td, {
                        children: (0, m.convertIntl)((0, m.roundedNumber)(n)),
                      }),
                  H?.includes("PNL")
                    ? null
                    : (0, t.jsx)(o.Table.Td, {
                        children: u
                          ? (0, t.jsxs)("div", {
                              className: (0, x.default)({
                                "text-grass": u > 0,
                                "text-blood": u < 0,
                                "text-slate-900": 0 === u,
                              }),
                              children: [
                                u >= 0 ? "+" : "-",
                                (0, m.convertIntl)(
                                  Number(Math.abs(u)?.toFixed(2))
                                ),
                                " (",
                                h?.toFixed(2),
                                "%)",
                              ],
                            })
                          : null,
                      }),
                  H?.includes("Send")
                    ? null
                    : (0, t.jsx)(o.Table.Td, {
                        children:
                          "USDC" === e.coin
                            ? (0, t.jsx)("button", {
                                onClick: () => Y(e),
                                className:
                                  "flex items-center justify-center w-7 h-7 bg-black/30 border border-blue-400/60 rounded hover:bg-black/50 transition-colors",
                                title: "Send",
                                children: (0, t.jsx)(eu.IconSend, {
                                  size: 12,
                                  className: "text-white",
                                }),
                              })
                            : "",
                      }),
                  H?.includes("Contract")
                    ? null
                    : (0, t.jsx)(o.Table.Td, {
                        children:
                          !a &&
                          (0, t.jsxs)("div", {
                            className: "flex items-center gap-1",
                            children: [
                              (0, t.jsx)("div", {
                                className: "text-xs font-mono",
                                children: c
                                  ? `${c.slice(0, 6)}...${c.slice(-4)}`
                                  : null,
                              }),
                              (0, t.jsx)(el.IconExternalLink, {
                                onClick: () => {
                                  window.open(
                                    `https://app.hyperliquid.xyz/explorer/token/${c}`,
                                    "_blank"
                                  );
                                },
                                size: 14,
                                className:
                                  "cursor-pointer text-slate-900 hover:text-white transition-colors",
                                title: "View on explorer",
                              }),
                            ],
                          }),
                      }),
                ],
              },
              s
            );
          });
        return (0, t.jsxs)("div", {
          className: "h-full overflow-auto",
          children: [
            J
              ? (0, t.jsxs)("div", {
                  className: "flex flex-col gap-3 p-2",
                  children: [
                    !r &&
                      W?.length > 0 &&
                      (0, t.jsx)("div", {
                        className:
                          "flex justify-between items-center px-2 py-1",
                        children: (0, t.jsxs)("span", {
                          className: "text-zinc-400 text-xs",
                          children: [W.length, " Assets"],
                        }),
                      }),
                    W?.map((e, s) =>
                      ((e, s) => {
                        let {
                          baseCoinName: l,
                          isUSDC: a,
                          totalBalance: r,
                          availableBalance: i,
                          usdcValue: n,
                          transferOptions: o,
                          contractAddress: d,
                          pnl: c,
                          pnlPercentage: u,
                        } = X(e);
                        return (0, t.jsxs)(
                          "div",
                          {
                            className:
                              "flex flex-col gap-3 py-4 px-4 rounded-xl bg-neutral-900 border border-neutral-800 shadow-lg",
                            children: [
                              (0, t.jsxs)("div", {
                                className: "flex items-center justify-between",
                                children: [
                                  !H?.includes("Coin") &&
                                    (0, t.jsxs)("div", {
                                      className: (0, x.default)(
                                        "flex flex-col gap-0.5",
                                        { "cursor-pointer": !a }
                                      ),
                                      onClick: () => {
                                        a || g.push(`/trade/spot/${l}/USDC`);
                                      },
                                      children: [
                                        (0, t.jsx)("span", {
                                          className:
                                            "text-neutral-400 text-xs font-normal",
                                          children: "Coin",
                                        }),
                                        (0, t.jsx)("span", {
                                          className:
                                            "text-white text-sm font-semibold",
                                          children: e.coin,
                                        }),
                                        !H?.includes("Contract") &&
                                          !a &&
                                          (0, t.jsxs)("div", {
                                            className:
                                              "flex items-center gap-1.5 font-mono text-xs text-neutral-500 mt-1",
                                            children: [
                                              d &&
                                                (0, t.jsxs)("span", {
                                                  children: [
                                                    d.slice(0, 6),
                                                    "...",
                                                    d.slice(-4),
                                                  ],
                                                }),
                                              (0, t.jsx)(el.IconExternalLink, {
                                                onClick: (e) => {
                                                  e.stopPropagation(),
                                                    window.open(
                                                      `https://app.hyperliquid.xyz/explorer/token/${d}`,
                                                      "_blank"
                                                    );
                                                },
                                                size: 14,
                                                className:
                                                  "cursor-pointer text-neutral-400 hover:text-white transition-colors",
                                              }),
                                            ],
                                          }),
                                      ],
                                    }),
                                  !H?.includes("USDC_Value") &&
                                    (0, t.jsxs)("div", {
                                      className:
                                        "flex flex-col items-end gap-0.5",
                                      children: [
                                        (0, t.jsx)("span", {
                                          className:
                                            "text-neutral-400 text-xs font-normal",
                                          children: "USDC Value",
                                        }),
                                        (0, t.jsx)("span", {
                                          className:
                                            "text-white text-sm font-semibold",
                                          children: (0, m.convertIntl)(
                                            (0, m.roundedNumber)(n)
                                          ),
                                        }),
                                      ],
                                    }),
                                ],
                              }),
                              (0, t.jsxs)("div", {
                                className: "flex justify-between",
                                children: [
                                  !H?.includes("Total_Balance") &&
                                    (0, t.jsxs)("div", {
                                      className: "flex flex-col gap-0.5",
                                      children: [
                                        (0, t.jsx)("span", {
                                          className:
                                            "text-neutral-500 text-xs font-normal",
                                          children: "Total Balance",
                                        }),
                                        (0, t.jsxs)("span", {
                                          className:
                                            "text-white text-xs font-medium",
                                          children: [
                                            (0, m.truncateToDecimals)(
                                              r,
                                              r > 1 ? 2 : 6
                                            ),
                                            " ",
                                            a ? "USDC" : l,
                                          ],
                                        }),
                                      ],
                                    }),
                                  !H?.includes("Available_Balance") &&
                                    (0, t.jsxs)("div", {
                                      className:
                                        "flex flex-col items-end gap-0.5",
                                      children: [
                                        (0, t.jsx)("span", {
                                          className:
                                            "text-neutral-500 text-xs font-normal",
                                          children: "Available",
                                        }),
                                        (0, t.jsxs)("span", {
                                          className:
                                            "text-white text-xs font-medium",
                                          children: [
                                            (0, m.truncateToDecimals)(
                                              i,
                                              i > 1 ? 2 : 6
                                            ),
                                            " ",
                                            a ? "USDC" : l,
                                          ],
                                        }),
                                      ],
                                    }),
                                ],
                              }),
                              !H?.includes("PNL") &&
                                !a &&
                                0 !== c &&
                                (0, t.jsxs)("div", {
                                  className: "flex flex-col gap-0.5",
                                  children: [
                                    (0, t.jsx)("span", {
                                      className:
                                        "text-neutral-500 text-xs font-normal tracking-wider",
                                      children: "PNL (ROE %)",
                                    }),
                                    (0, t.jsxs)("div", {
                                      className: (0, x.default)(
                                        "text-xs font-medium",
                                        {
                                          "text-grass": c > 0,
                                          "text-blood": c < 0,
                                        }
                                      ),
                                      children: [
                                        c >= 0 ? "+" : "-",
                                        (0, m.convertIntl)(
                                          Number(Math.abs(c)?.toFixed(2))
                                        ),
                                        " (",
                                        u?.toFixed(2),
                                        "%)",
                                      ],
                                    }),
                                  ],
                                }),
                              ((!H?.includes("Send") && "USDC" === e.coin) ||
                                (!H?.includes("Transfer") && o.length > 0)) &&
                                (0, t.jsx)("div", {
                                  className:
                                    "flex items-center pt-3 border-t border-white/5 mt-1",
                                  children: (0, t.jsxs)("div", {
                                    className: "flex items-center gap-4",
                                    children: [
                                      "USDC" === e.coin &&
                                        !H?.includes("Send") &&
                                        (0, t.jsx)("span", {
                                          className:
                                            "text-brand-blue text-xs font-semibold cursor-pointer hover:opacity-80 transition-opacity",
                                          onClick: () => Y(e),
                                          children: "Send",
                                        }),
                                      o.length > 0 &&
                                        !H?.includes("Transfer") &&
                                        (0, t.jsx)("span", {
                                          className:
                                            "text-brand-blue text-xs font-semibold cursor-pointer hover:opacity-80 transition-opacity",
                                          onClick: () => {
                                            var e;
                                            return (
                                              (e = o[0]),
                                              void ("Transfer to Spot" === e
                                                ? (k("Perps"), M("Spot"), F(R))
                                                : "Transfer to Perps" === e &&
                                                  (k("Spot"),
                                                  M("Perps"),
                                                  F(
                                                    (0, m.truncateToDecimals)(
                                                      _,
                                                      6
                                                    )
                                                  )),
                                              N())
                                            );
                                          },
                                          children: o[0],
                                        }),
                                    ],
                                  }),
                                }),
                            ],
                          },
                          s
                        );
                      })(e, s)
                    ),
                  ],
                })
              : (0, t.jsxs)(o.Table, {
                  classNames:
                    "gtr" === a
                      ? {
                          table:
                            "rounded-lg overflow-hidden border-1 border-neutral-900",
                          thead:
                            "!bg-neutral-950 hover:!bg-neutral-950 uppercase",
                          th: "text-xs font-normal !bg-neutral-950 hover:!bg-neutral-950 text-neutral-400 h-10",
                          tbody: "bg-white/5",
                          td: "text-neutral-300 text-sm py-4 font-semibold",
                          tr: "border-b-1 border-neutral-800 last:border-b-0 hover:bg-white/5 transition-all duration-400 even:bg-neutral-950 odd:bg-[#141414]",
                        }
                      : {
                          table: "overflow-x-auto",
                          th: "!pl-0.5 !py-2 !font-normal !text-xs !text-slate-900 !border-ash !border-b bg-transparent",
                          td: "!pl-0.5 !py-2.5 !text-xs",
                          tr: "border-b-2 !border-black",
                        },
                  styles: { table: { minWidth: l || "1200px" } },
                  className: "!p-1",
                  children: [
                    (0, t.jsx)(o.Table.Thead, {
                      children: (0, t.jsxs)(o.Table.Tr, {
                        children: [
                          H?.includes("Coin")
                            ? null
                            : (0, t.jsx)(o.Table.Th, {
                                children: (0, t.jsx)("div", {
                                  className: "ml-4 min-w-[60px]",
                                  children: "Coin",
                                }),
                              }),
                          H?.includes("Total_Balance")
                            ? null
                            : (0, t.jsx)(o.Table.Th, {
                                children: "Total Balance",
                              }),
                          H?.includes("Available_Balance")
                            ? null
                            : (0, t.jsx)(o.Table.Th, {
                                children: "Available Balance",
                              }),
                          H?.includes("USDC_Value")
                            ? null
                            : (0, t.jsx)(o.Table.Th, {
                                children: "USDC Value",
                              }),
                          H?.includes("PNL")
                            ? null
                            : (0, t.jsx)(o.Table.Th, {
                                children: "PNL (ROE %)",
                              }),
                          H?.includes("Send")
                            ? null
                            : (0, t.jsx)(o.Table.Th, { children: "Send" }),
                          H?.includes("Contract")
                            ? null
                            : (0, t.jsx)(o.Table.Th, { children: "Contract" }),
                        ],
                      }),
                    }),
                    (0, t.jsx)(o.Table.Tbody, { children: Q }),
                  ],
                }),
            (0, t.jsx)(eb, {
              opened: j,
              close: v,
              fromType: D,
              toType: z,
              maxAmount: $,
              onSwapDirection: () => {
                k(z), M(D), F("Perps" === z ? R : _);
              },
            }),
            (0, t.jsx)(ev, { opened: T, close: y, balance: B }),
            (0, t.jsx)(ew, { opened: S, close: P }),
          ],
        });
      };
    var eS = e.i(469401);
    e.s(
      [
        "default",
        0,
        ({
          minHeight: e,
          maxHeight: o,
          fullWidth: d = !1,
          showBalances: c = !0,
          showPositions: x = !0,
          showOpenOrders: u = !0,
          showTWAP: m = !0,
          showTrades: h = !0,
          showFundingHistory: p = !0,
          showOrderHistory: b = !0,
          showCompletedTrades: f = !0,
          showDepositsWithdrawals: g = !0,
          showDiscussions: j = !0,
          hideBalanceTableColumns: N = [],
          hideOpenOrderTableColumns: v = [],
          balanceTableWidth: T = "",
          openOrdersTableWidth: w = "",
          positionTableSize: y = "large",
          completedTradesTableSize: S = "large",
          variant: C = "tabs",
          labels: P,
          isSocial: D = !1,
        }) => {
          let k,
            { authenticated: z, login: M } = (0, a.usePrivy)(),
            [$, F] = (0, s.useState)("positions"),
            {
              openOrders: B,
              assetPositions: L,
              twapStates: I,
              spotBalances: O,
              perpsDex: H,
              clearinghouseStateByDex: U,
              openOrdersByDex: q,
            } = (0, i.useHyperliquidStore)(
              (0, A.useShallow)((e) => ({
                openOrders: D ? e.socialOpenOrders : e.openOrders,
                assetPositions: D ? e.socialAssetPositions : e.assetPositions,
                twapStates: D ? e.socialTwapStates : e.twapStates,
                spotBalances: D ? e.socialSpotBalances : e.spotBalances,
                perpsDex: D ? e.socialPerpsDex : e.perpsDex,
                clearinghouseStateByDex: D
                  ? e.socialClearinghouseStateByDex
                  : e.clearinghouseStateByDex,
                openOrdersByDex: D
                  ? e.socialOpenOrdersByDex
                  : e.openOrdersByDex,
              }))
            );
          (0, E.usePathname)();
          let W = L?.length || 0,
            V =
              ((k = B.length),
              q &&
                H?.length > 0 &&
                H.forEach((e) => {
                  let t = q[e.name] || [];
                  k += t.length;
                }),
              k),
            _ = (0, s.useMemo)(() => {
              let e = [];
              return (
                c &&
                  e.push({
                    label: P?.balances || `Balances (${O?.length || 0})`,
                    value: "balances",
                  }),
                x &&
                  e.push({
                    label: P?.positions || `Positions${W ? ` (${W})` : ""}`,
                    value: "positions",
                  }),
                u &&
                  e.push({
                    label: P?.openOrders || `Open Orders${V ? ` (${V})` : ""}`,
                    value: "openOrders",
                  }),
                m && e.push({ label: P?.twap || "TWAP", value: "twap" }),
                h && e.push({ label: P?.trades || "Trades", value: "trades" }),
                p &&
                  !D &&
                  e.push({
                    label: P?.fundingHistory || "Funding History",
                    value: "fundingHistory",
                  }),
                b &&
                  e.push({
                    label: P?.orderHistory || "Order History",
                    value: "orderHistory",
                  }),
                f &&
                  e.push({
                    label: P?.completedTrades || "Completed Trades",
                    value: "completedTrades",
                  }),
                g &&
                  e.push({
                    label: P?.depositsWithdrawals || "Deposits & Withdrawals",
                    value: "depositsWithdrawals",
                  }),
                e
              );
            }, [c, x, u, m, h, p, b, f, g, O, W, V, P]),
            Y = () =>
              (0, t.jsxs)(l.Tabs.List, {
                grow: d,
                children: [
                  c
                    ? (0, t.jsx)(n.default, {
                        value: "balances",
                        currentTab: $,
                        title: P?.balances || `Balances (${O?.length || 0})`,
                      })
                    : null,
                  x
                    ? (0, t.jsx)(n.default, {
                        value: "positions",
                        currentTab: $,
                        title: P?.positions || `Positions${W ? ` (${W})` : ""}`,
                      })
                    : null,
                  u
                    ? (0, t.jsx)(n.default, {
                        value: "openOrders",
                        currentTab: $,
                        title:
                          P?.openOrders || `Open Orders${V ? ` (${V})` : ""}`,
                      })
                    : null,
                  m
                    ? (0, t.jsx)(n.default, {
                        value: "twap",
                        currentTab: $,
                        title: P?.twap || "TWAP",
                      })
                    : null,
                  h
                    ? (0, t.jsx)(n.default, {
                        value: "trades",
                        currentTab: $,
                        title: P?.trades || "Trades",
                      })
                    : null,
                  p && !D
                    ? (0, t.jsx)(n.default, {
                        value: "fundingHistory",
                        currentTab: $,
                        title: P?.fundingHistory || "Funding History",
                      })
                    : null,
                  b
                    ? (0, t.jsx)(n.default, {
                        value: "orderHistory",
                        currentTab: $,
                        title: P?.orderHistory || "Order History",
                      })
                    : null,
                  f
                    ? (0, t.jsx)(n.default, {
                        value: "completedTrades",
                        currentTab: $,
                        title: P?.completedTrades || "Completed Trades",
                      })
                    : null,
                  g
                    ? (0, t.jsx)(n.default, {
                        value: "depositsWithdrawals",
                        currentTab: $,
                        title:
                          P?.depositsWithdrawals || "Deposits & Withdrawals",
                      })
                    : null,
                ],
              });
          return (0, t.jsx)("div", {
            className: "flex flex-col h-full w-full",
            style: { minHeight: e || "200px", maxHeight: o },
            children: z
              ? "gtr" === C
                ? (0, t.jsxs)("div", {
                    className: "flex flex-col h-full overflow-hidden",
                    children: [
                      (0, t.jsx)("div", {
                        className: "overflow-scroll",
                        children: (0, t.jsx)(eS.GTRSegmentedControl, {
                          value: $,
                          onChange: F,
                          variant: "underline",
                          data: _,
                          classNames: {
                            root: "w-fit mb-4 px-4 rounded-none overflow-x-auto no-scrollbar",
                            label:
                              "!text-sm !pb-2.5 rounded-none whitespace-nowrap",
                          },
                        }),
                      }),
                      (0, t.jsx)("div", {
                        className:
                          "flex-1 overflow-auto border-1 border-neutral-900 rounded-xl min-h-[400px]",
                        children: (0, t.jsxs)(t.Fragment, {
                          children: [
                            "balances" === $ &&
                              (0, t.jsx)(ey, {
                                hideBalanceTableColumns: N,
                                minWidth: T,
                                variant: C,
                                isSocial: D,
                              }),
                            "positions" === $ &&
                              (0, t.jsx)(R, {
                                tableSize: y,
                                variant: C,
                                isSocial: D,
                              }),
                            "openOrders" === $ &&
                              (0, t.jsx)(K, {
                                hideColumns: v,
                                minWidth: w,
                                variant: C,
                                isSocial: D,
                              }),
                            "twap" === $ &&
                              (0, t.jsx)(ex, { variant: C, isSocial: D }),
                            "trades" === $ &&
                              (0, t.jsx)(Z, { variant: C, isSocial: D }),
                            "fundingHistory" === $ &&
                              (0, t.jsx)(ee, { variant: C }),
                            "orderHistory" === $ &&
                              (0, t.jsx)(et, {
                                minHeight: e,
                                variant: C,
                                isSocial: D,
                              }),
                            "completedTrades" === $ &&
                              (0, t.jsx)(es, {
                                tableSize: S,
                                variant: C,
                                isSocial: D,
                              }),
                            "depositsWithdrawals" === $ &&
                              (0, t.jsx)(ea, { variant: C, isSocial: D }),
                          ],
                        }),
                      }),
                    ],
                  })
                : (0, t.jsxs)(l.Tabs, {
                    value: $,
                    onChange: F,
                    classNames: {
                      root: "flex flex-col h-full overflow-hidden",
                      tab: "!h-9 !px-4 !py-0 !text-[14px] hover:bg-slate-600/50 !outline-none data-[active=true]:tab-center-border",
                      tabLabel: "!text-xs !font-medium",
                      list: "!p-0 !h-9 overflow-scroll flex-nowrap before:!border-transparent",
                      panel: "overflow-auto flex-1",
                    },
                    children: [
                      Y(),
                      c
                        ? (0, t.jsx)(l.Tabs.Panel, {
                            value: "balances",
                            children: (0, t.jsx)(ey, {
                              hideBalanceTableColumns: N,
                              minWidth: T,
                              isSocial: D,
                            }),
                          })
                        : null,
                      x
                        ? (0, t.jsx)(l.Tabs.Panel, {
                            value: "positions",
                            children: (0, t.jsx)(R, {
                              tableSize: y,
                              isSocial: D,
                              setCurrentTab: F,
                            }),
                          })
                        : null,
                      u
                        ? (0, t.jsx)(l.Tabs.Panel, {
                            value: "openOrders",
                            children: (0, t.jsx)(K, {
                              hideColumns: v,
                              minWidth: w,
                              isSocial: D,
                            }),
                          })
                        : null,
                      m
                        ? (0, t.jsx)(l.Tabs.Panel, {
                            value: "twap",
                            children: (0, t.jsx)(ex, { isSocial: D }),
                          })
                        : null,
                      h
                        ? (0, t.jsx)(l.Tabs.Panel, {
                            value: "trades",
                            children: (0, t.jsx)(Z, { isSocial: D }),
                          })
                        : null,
                      p && !D
                        ? (0, t.jsx)(l.Tabs.Panel, {
                            value: "fundingHistory",
                            children: (0, t.jsx)(ee, {}),
                          })
                        : null,
                      b
                        ? (0, t.jsx)(l.Tabs.Panel, {
                            value: "orderHistory",
                            children: (0, t.jsx)(et, {
                              minHeight: e,
                              isSocial: D,
                            }),
                          })
                        : null,
                      f
                        ? (0, t.jsx)(l.Tabs.Panel, {
                            value: "completedTrades",
                            children: (0, t.jsx)(es, {
                              tableSize: S,
                              isSocial: D,
                            }),
                          })
                        : null,
                      g
                        ? (0, t.jsx)(l.Tabs.Panel, {
                            value: "depositsWithdrawals",
                            children: (0, t.jsx)(ea, { isSocial: D }),
                          })
                        : null,
                    ],
                  })
              : (0, t.jsxs)("div", {
                  className: "relative h-full",
                  children: [
                    (0, t.jsx)("div", {
                      className:
                        "absolute inset-0 blur-sm pointer-events-none opacity-50",
                      children: (0, t.jsx)(l.Tabs, {
                        value: $,
                        classNames: {
                          root: "flex flex-col h-full overflow-hidden",
                          tab: "!h-9 !px-4 !py-0 !text-[14px] !font-medium",
                          tabLabel: "!text-xs !font-medium",
                          list: "!p-0 !h-9 overflow-scroll flex-nowrap",
                          panel: "overflow-y-auto flex-1",
                        },
                        color: "#95FF00",
                        children: Y(),
                      }),
                    }),
                    (0, t.jsx)("div", {
                      className:
                        "absolute inset-0 flex items-center justify-center bg-black/10 backdrop-blur-sm",
                      children: (0, t.jsxs)("div", {
                        className: "text-center space-y-4",
                        children: [
                          (0, t.jsx)("h3", {
                            className: "text-xl font-semibold text-white",
                            children: "Login to view your portfolio",
                          }),
                          (0, t.jsx)(r.Button, {
                            variant: "filled",
                            size: "md",
                            color: "white",
                            className:
                              "!text-black hover:bg-white !rounded px-8",
                            onClick: () => M({ loginMethods: ["email"] }),
                            children: (0, t.jsx)("span", {
                              className: "text-sm font-semibold",
                              children: "Log In",
                            }),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
          });
        },
      ],
      815518
    );
  },
]);
