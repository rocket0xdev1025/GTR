(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  760145,
  (e) => {
    "use strict";
    var s = e.i(843476),
      t = e.i(343794),
      a = e.i(271645),
      r = e.i(890357),
      l = e.i(35777),
      i = e.i(943719),
      o = e.i(336005),
      n = e.i(442948),
      d = e.i(541473),
      c = e.i(658404),
      x = e.i(657688);
    let m = () => {
      let { authenticated: e } = (0, d.usePrivy)(),
        [t, r] = (0, a.useState)(!1),
        [l, m] = (0, a.useState)(null),
        [u, h] = (0, a.useState)(0),
        p = async () => {
          try {
            r(!0);
            let { success: e, data: s } = await (0, o.getInvestedGraph)();
            e && m(s);
          } catch (e) {
            console.error("Error fetching data:", e);
          } finally {
            r(!1);
          }
        };
      return (
        (0, a.useEffect)(() => {
          e && p();
        }, [e]),
        (0, s.jsxs)("div", {
          className: "h-full flex flex-col justify-between px-4 py-6",
          children: [
            (0, s.jsxs)("div", {
              className: "flex gap-1 items-center",
              children: [
                (0, s.jsx)(x.default, {
                  src: c.default,
                  alt: "PnL Icon",
                  width: 16,
                }),
                (0, s.jsx)("div", {
                  className:
                    "text-sm leading-[100%] font-semibold tracking-wide",
                  children: "PnL",
                }),
              ],
            }),
            (0, s.jsx)("div", {
              className: "flex items-end",
              children:
                !t && l?.userInvestedGains?.length
                  ? (0, s.jsx)(i.default, {
                      height: 275,
                      textColor: "white",
                      width: "95%",
                      showCrossHairTooltip: !0,
                      color: l?.gains > 0 ? "#00FF99" : "#FF5D6D",
                      data: l?.userInvestedGains.length
                        ? l?.userInvestedGains?.map((e) => ({
                            time: new Date(1e3 * e.date).getTime(),
                            value: e.value,
                          }))
                        : [],
                      setPriceValue: (e) => {
                        h(e);
                      },
                      currentPrice: u,
                    })
                  : null,
            }),
            t
              ? (0, s.jsxs)("div", {
                  className:
                    "flex flex-col items-center gap-2 px-5 text-xs  py-20",
                  children: [
                    (0, s.jsx)(n.Loader, { size: "xs", color: "#ffffff" }),
                    (0, s.jsx)("div", { children: "Loading..." }),
                  ],
                })
              : null,
          ],
        })
      );
    };
    var u = e.i(879010),
      h = e.i(736566),
      p = e.i(964890),
      b = e.i(974010),
      f = e.i(700653),
      g = e.i(905142),
      N = e.i(144492),
      j = e.i(737716);
    let v = (0, e.i(33550).default)("outline", "wallet", "Wallet", [
      [
        "path",
        {
          d: "M17 8v-3a1 1 0 0 0 -1 -1h-10a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12",
          key: "svg-0",
        },
      ],
      ["path", { d: "M20 12v4h-4a2 2 0 0 1 0 -4h4", key: "svg-1" }],
    ]);
    var w = e.i(346944);
    let y = ({ isLoading: e = !1 }) => {
      let { holdings: a } = (0, r.useProfileStore)(
          (0, w.useShallow)((e) => ({ holdings: e.holdings }))
        ),
        { allUsdcBalance: l } = (0, r.useBalanceStore)(
          (0, w.useShallow)((e) => ({ allUsdcBalance: e.allUsdcBalance }))
        ),
        { formatPrice: i } = (0, p.useExchangePrice)(),
        [o, { open: n, close: d }] = (0, g.useDisclosure)(!1),
        [c, { open: x, close: m }] = (0, g.useDisclosure)(!1),
        y = a && Object.keys(a).length > 0,
        T = (a?.totalInvested || 0) + (a?.totalGains || 0);
      return (0, s.jsxs)(s.Fragment, {
        children: [
          (0, s.jsxs)("div", {
            className:
              "bg-container-background border border-container-border rounded",
            children: [
              (0, s.jsxs)("div", {
                className: "py-6 px-4",
                children: [
                  (0, s.jsxs)("div", {
                    className: "flex items-center gap-1 pb-7 text-white",
                    children: [
                      (0, s.jsx)(v, { color: "#ffffff", size: 16 }),
                      (0, s.jsx)("div", {
                        className: "text-sm font-medium leading-[100%]",
                        children: "Balance",
                      }),
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    className:
                      "flex flex-wrap justify-between gap-6 sm:flex-col",
                    children: [
                      (0, s.jsxs)("div", {
                        children: [
                          (0, s.jsx)("div", {
                            className: "text-slate-900 text-xs leading-[100%]",
                            children: "Crypto Wallet",
                          }),
                          (0, s.jsx)("div", {
                            className:
                              "text-base font-medium pt-3 leading-[112%]",
                            children:
                              y || !e ? i((0, b.roundedNumber)(T)) : "--",
                          }),
                        ],
                      }),
                      (0, s.jsxs)("div", {
                        className: "sm:pt-6",
                        children: [
                          (0, s.jsx)("div", {
                            className: "text-slate-900 text-xs leading-[100%]",
                            children: "Unrealized P&L",
                          }),
                          (0, s.jsx)("div", {
                            className: (0, t.default)(
                              "text-base font-medium pt-3 leading-[112%]",
                              {
                                "text-grass": a?.totalGains > 0,
                                "text-blood": a?.totalGains < 0,
                              }
                            ),
                            children:
                              y || !e
                                ? (0, s.jsxs)(s.Fragment, {
                                    children: [
                                      a?.totalGains < 0 ? "-" : "",
                                      " ",
                                      i(
                                        Math.abs(
                                          (0, b.roundedNumber)(a?.totalGains)
                                        )
                                      ),
                                      " ",
                                      "(",
                                      a?.totalInvested !== 0 &&
                                      a?.totalInvested !== void 0
                                        ? (0, b.roundedNumber)(
                                            (Number(a?.totalGains) /
                                              Number(a?.totalInvested)) *
                                              100
                                          )
                                        : "0.00",
                                      "%)",
                                    ],
                                  })
                                : "--",
                          }),
                        ],
                      }),
                      (0, s.jsxs)("div", {
                        className: "sm:pt-6",
                        children: [
                          (0, s.jsx)("div", {
                            className: "text-slate-900 text-xs leading-[100%]",
                            children: "Realized P&L",
                          }),
                          (0, s.jsx)("div", {
                            className:
                              "text-base font-medium pt-3 leading-[112%]",
                            children:
                              y || !e
                                ? (0, s.jsxs)(s.Fragment, {
                                    children: [
                                      a?.totalRealizedGains < 0 ? "-" : "",
                                      " ",
                                      i(
                                        Math.abs(
                                          (0, b.roundedNumber)(
                                            a?.totalRealizedGains
                                          )
                                        )
                                      ),
                                    ],
                                  })
                                : "--",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, s.jsx)(f.Divider, { variant: "dashed" }),
              (0, s.jsxs)("div", {
                className: "flex rounded-b",
                children: [
                  (0, s.jsxs)("div", {
                    className: "w-2/5 pt-4 px-4 pb-6",
                    children: [
                      (0, s.jsx)("div", {
                        className:
                          "text-slate-900 text-xs leading-[160%] pt-0.5",
                        children: "Balance",
                      }),
                      (0, s.jsx)("div", {
                        className: "text-base font-medium pt-1 leading-[120%]",
                        children: i(
                          (0, b.roundedNumber)(
                            l.find((e) => "solana" === e.chain.symbol)?.balance
                          )
                        ),
                      }),
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    className:
                      "w-[30%] flex flex-col justify-center items-center gap-1 cursor-pointer border-x border-x-ash hover:bg-slate-900/10 transition-all duration-150",
                    onClick: n,
                    children: [
                      (0, s.jsx)(N.IconDownload, { size: 20, color: "white" }),
                      (0, s.jsx)("p", {
                        className: "text-xs text-slate-900",
                        children: "Deposit",
                      }),
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    className:
                      "w-[30%] flex rounded-br flex-col justify-center items-center gap-1 cursor-pointer hover:bg-slate-900/10 transition-all duration-150",
                    onClick: x,
                    children: [
                      (0, s.jsx)(j.IconUpload, { size: 20, color: "white" }),
                      (0, s.jsx)("p", {
                        className: "text-xs text-slate-900",
                        children: "Withdraw",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          (0, s.jsx)(u.default, { opened: o, close: d, chain: "solana" }),
          (0, s.jsx)(h.default, { opened: c, close: m, chain: "solana" }),
        ],
      });
    };
    var T = e.i(112335);
    let S = () => {
        let { ready: e, authenticated: t } = (0, d.usePrivy)(),
          { setHoldings: i } = (0, r.useProfileStore)(
            (0, w.useShallow)((e) => ({ setHoldings: e.setHoldings }))
          ),
          n = async () => {
            let { data: e, success: s } = await (0, o.getHoldings)();
            s && i(e);
          };
        return (
          (0, a.useEffect)(() => {
            e && t && n();
          }, [e, t]),
          (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsxs)("div", {
                className:
                  "pt-1 px-2 grid grid-rows-1 sm:grid-rows-1 sm:grid-cols-8 sm:px-0 gap-2 sm:gap-1",
                children: [
                  (0, s.jsx)("div", {
                    className:
                      "flex flex-col gap-1 sm:col-span-4 md:col-span-3 xl:col-span-2 sm:h-full rounded",
                    children: (0, s.jsx)(y, {}),
                  }),
                  (0, s.jsx)("div", {
                    className:
                      "bg-container-background border border-container-border rounded sm:col-span-4 md:col-span-5 xl:col-span-6",
                    children: (0, s.jsx)(m, {}),
                  }),
                ],
              }),
              (0, s.jsxs)("div", {
                className:
                  "mt-2 sm:mt-1 px-2 sm:px-0 grid grid-cols-1 gap-2 sm:gap-1 md:grid-cols-8",
                children: [
                  (0, s.jsx)("div", {
                    className:
                      "col-span-1 md:col-span-5 lg:col-span-6 bg-container-background border border-container-border rounded",
                    children: (0, s.jsx)(T.default, {}),
                  }),
                  (0, s.jsx)("div", {
                    className:
                      "col-span-1 md:col-span-3 lg:col-span-2 bg-container-background border border-container-border rounded",
                    children: (0, s.jsx)(l.default, {}),
                  }),
                ],
              }),
            ],
          })
        );
      },
      P = ({ isLoading: e = !1 }) => {
        let { stockHoldings: a } = (0, r.useProfileStore)(
            (0, w.useShallow)((e) => ({ stockHoldings: e.stockHoldings }))
          ),
          { allUsdcBalance: l } = (0, r.useBalanceStore)(
            (0, w.useShallow)((e) => ({ allUsdcBalance: e.allUsdcBalance }))
          ),
          { formatPrice: i } = (0, p.useExchangePrice)(),
          [o, { open: n, close: d }] = (0, g.useDisclosure)(!1),
          [c, { open: x, close: m }] = (0, g.useDisclosure)(!1),
          y = a && Object.keys(a).length > 0;
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsxs)("div", {
              className: "bg-container-background rounded",
              children: [
                (0, s.jsxs)("div", {
                  className: "py-6 px-4",
                  children: [
                    (0, s.jsxs)("div", {
                      className: "flex items-center gap-1 pb-7 text-white",
                      children: [
                        (0, s.jsx)(v, { color: "#ffffff", size: 16 }),
                        (0, s.jsx)("div", {
                          className: "text-sm font-medium leading-[100%]",
                          children: "Balance",
                        }),
                      ],
                    }),
                    (0, s.jsxs)("div", {
                      className:
                        "flex flex-wrap justify-between gap-6 sm:flex-col",
                      children: [
                        (0, s.jsxs)("div", {
                          children: [
                            (0, s.jsx)("div", {
                              className:
                                "text-slate-900 text-xs leading-[100%]",
                              children: "Stocks Wallet",
                            }),
                            (0, s.jsx)("div", {
                              className:
                                "text-base font-medium pt-3 leading-[112%]",
                              children:
                                y || !e
                                  ? i((0, b.roundedNumber)(a?.totalInvested))
                                  : "--",
                            }),
                          ],
                        }),
                        (0, s.jsxs)("div", {
                          className: "sm:pt-6",
                          children: [
                            (0, s.jsx)("div", {
                              className:
                                "text-slate-900 text-xs leading-[100%]",
                              children: "Unrealized P&L",
                            }),
                            (0, s.jsx)("div", {
                              className: (0, t.default)(
                                "text-base font-medium pt-3 leading-[112%]",
                                {
                                  "text-grass": a?.totalGains > 0,
                                  "text-blood": a?.totalGains < 0,
                                }
                              ),
                              children:
                                y || !e
                                  ? (0, s.jsxs)(s.Fragment, {
                                      children: [
                                        a?.totalGains < 0 ? "-" : "",
                                        " ",
                                        i(
                                          Math.abs(
                                            (0, b.roundedNumber)(a?.totalGains)
                                          )
                                        ),
                                        " ",
                                        "(",
                                        a?.totalInvested !== 0 &&
                                        a?.totalInvested !== void 0
                                          ? (0, b.roundedNumber)(
                                              (Number(a?.totalGains) /
                                                Number(a?.totalInvested)) *
                                                100
                                            )
                                          : "0.00",
                                        "%)",
                                      ],
                                    })
                                  : "--",
                            }),
                          ],
                        }),
                        (0, s.jsxs)("div", {
                          className: "sm:pt-6",
                          children: [
                            (0, s.jsx)("div", {
                              className:
                                "text-slate-900 text-xs leading-[100%]",
                              children: "Realized P&L",
                            }),
                            (0, s.jsx)("div", {
                              className:
                                "text-base font-medium pt-3 leading-[112%]",
                              children:
                                y || !e
                                  ? (0, s.jsxs)(s.Fragment, {
                                      children: [
                                        a?.totalRealizedGains < 0 ? "-" : "",
                                        " ",
                                        i(
                                          Math.abs(
                                            (0, b.roundedNumber)(
                                              a?.totalRealizedGains || 0
                                            )
                                          )
                                        ),
                                      ],
                                    })
                                  : "--",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, s.jsx)(f.Divider, { variant: "dashed" }),
                (0, s.jsxs)("div", {
                  className: "flex rounded-b",
                  children: [
                    (0, s.jsxs)("div", {
                      className: "w-2/5 pt-4 px-4 pb-6",
                      children: [
                        (0, s.jsx)("div", {
                          className:
                            "text-slate-900 text-xs leading-[160%] pt-0.5",
                          children: "Balance",
                        }),
                        (0, s.jsx)("div", {
                          className:
                            "text-base font-medium pt-1 leading-[120%]",
                          children: i(
                            (0, b.roundedNumber)(
                              l.find((e) => "arbitrum" === e.chain.symbol)
                                ?.balance
                            )
                          ),
                        }),
                      ],
                    }),
                    (0, s.jsxs)("div", {
                      className:
                        "w-[30%] flex flex-col justify-center items-center gap-1 cursor-pointer border-x border-x-ash hover:bg-slate-900/10 transition-all duration-150",
                      onClick: n,
                      children: [
                        (0, s.jsx)(N.IconDownload, {
                          size: 20,
                          color: "white",
                        }),
                        (0, s.jsx)("p", {
                          className: "text-xs text-slate-900",
                          children: "Deposit",
                        }),
                      ],
                    }),
                    (0, s.jsxs)("div", {
                      className:
                        "w-[30%] flex rounded-br flex-col justify-center items-center gap-1 cursor-pointer hover:bg-slate-900/10 transition-all duration-150",
                      onClick: x,
                      children: [
                        (0, s.jsx)(j.IconUpload, { size: 20, color: "white" }),
                        (0, s.jsx)("p", {
                          className: "text-xs text-slate-900",
                          children: "Withdraw",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, s.jsx)(u.default, { opened: o, close: d, chain: "arbitrum" }),
            (0, s.jsx)(h.default, { opened: c, close: m, chain: "arbitrum" }),
          ],
        });
      };
    var C = e.i(689861);
    let k = () => {
      let { authenticated: e } = (0, d.usePrivy)(),
        [t, r] = (0, a.useState)(!1),
        [l, o] = (0, a.useState)(null),
        [m, u] = (0, a.useState)(0),
        h = async () => {
          try {
            r(!0);
            let { success: e, data: s } = await (0, C.getStocksInvestedGraph)();
            e && o(s);
          } catch (e) {
            console.error("Error fetching data:", e);
          } finally {
            r(!1);
          }
        };
      return (
        (0, a.useEffect)(() => {
          e && h();
        }, [e]),
        (0, s.jsxs)("div", {
          className: "h-full flex flex-col justify-between px-4 py-6",
          children: [
            (0, s.jsxs)("div", {
              className: "flex gap-1 items-center",
              children: [
                (0, s.jsx)(x.default, {
                  src: c.default,
                  alt: "PnL Icon",
                  width: 16,
                }),
                (0, s.jsx)("div", {
                  className:
                    "text-sm leading-[100%] font-semibold tracking-wide",
                  children: "PnL",
                }),
              ],
            }),
            (0, s.jsx)("div", {
              className: "flex items-end",
              children:
                !t && l?.userInvestedGains?.length
                  ? (0, s.jsx)(i.default, {
                      height: 275,
                      textColor: "white",
                      width: "95%",
                      showCrossHairTooltip: !0,
                      color: l?.gains > 0 ? "#00FF99" : "#FF5D6D",
                      data: l?.userInvestedGains.length
                        ? l?.userInvestedGains?.map((e) => ({
                            time: new Date(1e3 * e.date).getTime(),
                            value: e.value,
                          }))
                        : [],
                      setPriceValue: (e) => {
                        u(e);
                      },
                      currentPrice: m,
                    })
                  : null,
            }),
            t
              ? (0, s.jsxs)("div", {
                  className:
                    "flex flex-col items-center gap-2 px-5 text-xs  py-20",
                  children: [
                    (0, s.jsx)(n.Loader, { size: "xs", color: "#ffffff" }),
                    (0, s.jsx)("div", { children: "Loading..." }),
                  ],
                })
              : null,
          ],
        })
      );
    };
    var L = e.i(599926),
      $ = e.i(934597);
    let O = () => {
      let [e, t] = (0, a.useState)(!1),
        { stockHoldings: l, setStockHoldings: i } = (0, r.useProfileStore)(
          (0, w.useShallow)((e) => ({
            stockHoldings: e.stockHoldings,
            setStockHoldings: e.setStockHoldings,
          }))
        ),
        { ready: o, authenticated: n } = (0, d.usePrivy)(),
        c = async () => {
          (l && 0 !== Object.keys(l).length) || t(!0);
          let { data: e, success: s } = await (0, C.getStockHoldings)();
          s && i(e), t(!1);
        };
      return (
        (0, a.useEffect)(() => {
          o && n && c();
        }, [o, n]),
        (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsxs)("div", {
              className:
                "pt-1 px-2 grid grid-rows-1 sm:grid-rows-1 sm:grid-cols-8 sm:px-0 gap-2 sm:gap-1",
              children: [
                (0, s.jsx)("div", {
                  className:
                    "flex flex-col gap-1 sm:col-span-4 md:col-span-3 xl:col-span-2 sm:h-full rounded",
                  children: (0, s.jsx)(P, { isLoading: e }),
                }),
                (0, s.jsx)("div", {
                  className:
                    "bg-container-background rounded sm:col-span-4 md:col-span-5 xl:col-span-6",
                  children: (0, s.jsx)(k, {}),
                }),
              ],
            }),
            (0, s.jsxs)("div", {
              className:
                "mt-2 sm:mt-1 px-2 sm:px-0 grid grid-cols-1 gap-2 sm:gap-1 md:grid-cols-8",
              children: [
                (0, s.jsx)("div", {
                  className:
                    "col-span-1 md:col-span-5 lg:col-span-6 bg-container-background rounded",
                  children: (0, s.jsx)(L.default, {}),
                }),
                (0, s.jsx)("div", {
                  className:
                    "col-span-1 md:col-span-3 lg:col-span-2 bg-container-background rounded",
                  children: (0, s.jsx)($.default, {}),
                }),
              ],
            }),
          ],
        })
      );
    };
    var I = e.i(815518),
      M = e.i(862278),
      A = e.i(730210),
      F = e.i(911450),
      B = e.i(886267),
      U = e.i(955548),
      D = e.i(194390);
    let E = ({ range: e }) => {
        let t,
          l,
          [i, o] = (0, a.useState)([]),
          [d, c] = (0, a.useState)(!1),
          { wallets: x } = (0, F.useWallets)(),
          {
            isConnected: m,
            subscribe: u,
            unsubscribe: h,
            messageEvent: p,
          } = (0, D.useHyperliquidWebSocket)(),
          {
            assetPositions: b,
            setAssetPositions: f,
            setCrossMaintenanceMarginUsed: g,
            setOpenOrders: N,
            setMarginSummary: j,
            setCrossMarginSummary: v,
            setWithdrawable: y,
            setFills: T,
            setOrderHistory: S,
            setAssetCtxs: P,
            setFundingHistory: C,
            setMetaAssets: k,
            setPerpsDex: L,
            setPerpsSzDecimals: $,
            setPerpsMetaAssetsByDex: O,
            setSpotMetaTokens: E,
            setSpotMetaAssets: z,
            setSpotAssetCtxs: H,
            setIsHLAssetsLoaded: R,
            setClearinghouseStateByDex: G,
            setTwapStates: W,
            setSpotBalances: _,
          } = (0, M.useHyperliquidStore)(
            (0, w.useShallow)((e) => ({
              assetPositions: e.assetPositions,
              setAssetPositions: e.setAssetPositions,
              setPerpsMetaAssetsByDex: e.setPerpsMetaAssetsByDex,
              setCrossMaintenanceMarginUsed: e.setCrossMaintenanceMarginUsed,
              setOpenOrders: e.setOpenOrders,
              setMarginSummary: e.setMarginSummary,
              setCrossMarginSummary: e.setCrossMarginSummary,
              setWithdrawable: e.setWithdrawable,
              setFills: e.setFills,
              setOrderHistory: e.setOrderHistory,
              setAssetCtxs: e.setAssetCtxs,
              setFundingHistory: e.setFundingHistory,
              setMetaAssets: e.setMetaAssets,
              setPerpsDex: e.setPerpsDex,
              setPerpsSzDecimals: e.setPerpsSzDecimals,
              setSpotMetaTokens: e.setSpotMetaTokens,
              setSpotMetaAssets: e.setSpotMetaAssets,
              setSpotAssetCtxs: e.setSpotAssetCtxs,
              setIsHLAssetsLoaded: e.setIsHLAssetsLoaded,
              setClearinghouseStateByDex: e.setClearinghouseStateByDex,
              setTwapStates: e.setTwapStates,
              setSpotBalances: e.setSpotBalances,
            }))
          ),
          { setCryptoPerpsBalance: q } = (0, r.useBalanceStore)(
            (0, w.useShallow)((e) => ({
              setCryptoPerpsBalance: e.setCryptoPerpsBalance,
            }))
          ),
          V = x.find((e) => "privy" === e.walletClientType),
          Z = async () => {
            try {
              let e = await (0, A.getAllPerpMetas)();
              if (!e || 0 === e.length) return null;
              let s = e[0].universe || [],
                t = s.reduce((e, s) => ((e[s.name] = s.szDecimals), e), {}),
                a = [],
                r = {};
              if (e.length > 1) {
                let s = e.slice(1);
                a = s.map((e, s) => {
                  let t = e.universe[0]?.name || "";
                  return {
                    name: t.includes(":") ? t.split(":")[0] : `dex${s + 1}`,
                    collateralToken: e.collateralToken,
                  };
                });
                let l = {};
                s.forEach((e, s) => {
                  let r = a[s].name,
                    i = e.universe.reduce(
                      (e, s) => ((e[s.name] = s.szDecimals), e),
                      {}
                    );
                  (l[r] = {
                    collateralToken: e.collateralToken,
                    index: s + 1,
                    metaAssets: e.universe,
                    perpsSzDecimals: i,
                  }),
                    Object.assign(t, i);
                }),
                  (r = l);
              }
              return {
                mainMetaAssets: s,
                perpsDexs: a,
                perpsMetaAssetsByDex: r,
                mergedPerpsSzDecimals: t,
              };
            } catch (e) {
              return console.error("Error fetching all perp metas:", e), null;
            }
          },
          Y = async () => {
            try {
              let e = await (0, A.getSpotMetaAssets)();
              if (!e || 0 === e.length) return null;
              return {
                tokens: e[0].tokens,
                universe: e[0].universe,
                assetCtxs: e[1],
              };
            } catch (e) {
              return console.error("Error fetching spot meta assets:", e), null;
            }
          };
        (0, a.useEffect)(() => {
          (async () => {
            try {
              let [e, s] = await Promise.all([Y(), Z()]);
              e && s
                ? (E(e.tokens || []),
                  z(e.universe || []),
                  H(e.assetCtxs || []),
                  k(s.mainMetaAssets || []),
                  L(s.perpsDexs || []),
                  O(s.perpsMetaAssetsByDex || {}),
                  $(s.mergedPerpsSzDecimals || {}),
                  R(!0))
                : console.warn(
                    "Skipping store update: spot or perp meta data missing.",
                    { spotMetaDataExists: !!e, perpMetaDataExists: !!s }
                  );
            } catch (e) {
              console.error("Error initializing data:", e);
            }
          })();
        }, []),
          (0, a.useEffect)(() => {
            V?.address &&
              (async () => {
                c(!0), o(await (0, A.getUserPortfolio)(V?.address)), c(!1);
              })();
          }, [V?.address]);
        let X = (e) => {
            if (e && e?.user?.toLowerCase() === V.address.toLowerCase()) {
              g(e?.clearinghouseStates?.[0]?.[1]?.crossMaintenanceMarginUsed),
                j(e?.clearinghouseStates?.[0]?.[1]?.marginSummary),
                v(e?.clearinghouseStates?.[0]?.[1]?.crossMarginSummary),
                y(e?.clearinghouseStates?.[0]?.[1]?.withdrawable),
                e?.clearinghouseStates?.[0]?.[1]?.twapStates;
              let s = [];
              if (
                (e?.clearinghouseStates.forEach((e) => {
                  s.push(...e?.[1]?.assetPositions);
                }),
                f(s),
                e?.clearinghouseStates && e.clearinghouseStates.length > 1)
              ) {
                let s = e.clearinghouseStates.slice(1);
                M.useHyperliquidStore.getState().perpsDex;
                let t = {},
                  a = !1;
                s.forEach((e, s) => {
                  let r = e[0];
                  e[1].clearinghouseState &&
                    ((t[r] = e[1].clearinghouseState), (a = !0));
                }),
                  a && G(t);
              }
            }
          },
          Q = (e) => {
            e &&
              e?.user?.toLowerCase() === V?.address?.toLowerCase() &&
              (e?.isSnapshot
                ? T(e?.fills)
                : T([...M.useHyperliquidStore.getState().fills, ...e?.fills]));
          },
          J = (e) => {
            H(e);
          },
          K = (e) => {
            if (e?.user?.toLowerCase() === V?.address?.toLowerCase()) {
              _(e?.spotState.balances);
              let s = e?.spotState.balances.find((e) => "USDC" === e.coin);
              q(Number(s?.total) - Number(s?.hold) || 0);
            }
          },
          ee = (e) => {
            e?.user?.toLowerCase() === V?.address?.toLowerCase() &&
              N(e?.orders);
          },
          es = (e) => {
            e?.user?.toLowerCase() === V?.address?.toLowerCase() &&
              W(e?.states);
          };
        return (
          (0, a.useEffect)(
            () => (
              m &&
                V?.address &&
                (u({
                  type: "userFills",
                  user: V?.address,
                  aggregateByTime: !0,
                }),
                u({ type: "allDexsClearinghouseState", user: V?.address }),
                u({ type: "userHistoricalOrders", user: V?.address }),
                u({ type: "userFundings", user: V?.address }),
                u({ type: "spotAssetCtxs" }),
                u({ type: "spotState", user: V?.address }),
                u({ type: "openOrders", user: V?.address, dex: "ALL_DEXS" }),
                u({ type: "twapStates", user: V?.address, dex: "ALL_DEXS" }),
                p("allDexsClearinghouseState", X),
                p("userFills", Q),
                p("spotAssetCtxs", J),
                p("spotState", K),
                p("openOrders", ee),
                p("twapStates", es),
                p("userHistoricalOrders", (e) => {
                  e &&
                    e?.user?.toLowerCase() === V?.address?.toLowerCase() &&
                    (e?.isSnapshot
                      ? S(e?.orderHistory)
                      : S([
                          ...M.useHyperliquidStore.getState().orderHistory,
                          ...e?.orderHistory,
                        ]));
                }),
                p("userFundings", (e) => {
                  e && C(e?.fundings);
                })),
              () => {
                h({ type: "userFills", user: V?.address, aggregateByTime: !0 }),
                  h({ type: "allDexsClearinghouseState", user: V?.address }),
                  h({ type: "openOrders", user: V?.address, dex: "ALL_DEXS" }),
                  h({ type: "twapStates", user: V?.address, dex: "ALL_DEXS" }),
                  h({ type: "userHistoricalOrders", user: V?.address }),
                  h({ type: "userFundings", user: V?.address }),
                  h({ type: "spotState", user: V?.address });
              }
            ),
            [V?.address, m]
          ),
          (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsxs)("div", {
                className:
                  "pt-1 px-2 grid grid-rows-2 sm:grid-rows-1 sm:grid-cols-8 sm:px-0 gap-2 sm:gap-1",
                children: [
                  (0, s.jsx)("div", {
                    className: "sm:col-span-4 md:col-span-3 xl:col-span-2",
                    children: (0, s.jsx)(B.default, {
                      portfolio: i?.find((s) => s[0] === e),
                      isLoading: d,
                      assetPositions: b,
                      containerClassName: "bg-container-background !border-0",
                    }),
                  }),
                  (0, s.jsx)("div", {
                    className:
                      "bg-container-background rounded sm:col-span-4 md:col-span-5 xl:col-span-6",
                    children: d
                      ? (0, s.jsxs)("div", {
                          className:
                            "flex flex-col items-center gap-2 px-5 text-xs  py-20",
                          children: [
                            (0, s.jsx)(n.Loader, {
                              size: "xs",
                              color: "#ffffff",
                            }),
                            (0, s.jsx)("div", { children: "Loading..." }),
                          ],
                        })
                      : i?.find((s) => s[0] === e)?.[1]?.pnlHistory.length > 0
                      ? (0, s.jsx)(U.default, {
                          containerClassName:
                            "bg-container-background !border-0 !rounded py-6 px-4",
                          portfolio:
                            i?.find((s) => s[0] === e)?.[1]?.pnlHistory || [],
                          isPositive:
                            ((t = i?.find((s) => s[0] === e)?.[1]),
                            (l = t?.pnlHistory),
                            l?.[l.length - 1]?.[1] > 0),
                        })
                      : null,
                  }),
                ],
              }),
              (0, s.jsx)("div", {
                className:
                  "mt-2 sm:mt-1 bg-container-background rounded min-h-[calc(100vh-406px)] mx-2 sm:mx-0",
                children: (0, s.jsx)(I.default, {}),
              }),
            ],
          })
        );
      },
      z = ({ range: e, setRange: t }) =>
        (0, s.jsx)(s.Fragment, {
          children: (0, s.jsx)("div", {
            className: "flex justify-end items-center gap-2 text-sm pl-2",
            children: [
              { label: "24h", value: "day" },
              { label: "7d", value: "week" },
              { label: "30d", value: "month" },
              { label: "Max", value: "allTime" },
            ].map((a) =>
              (0, s.jsx)(
                "div",
                {
                  className: `cursor-pointer bg-[#0A0A0C] border-1 border-ash/60 hover:bg-overdueBlue/20 rounded px-2 py-1 font-medium ${
                    e === a.value
                      ? "text-overdueBlue bg-background-700 border-overdueBlue"
                      : "text-white"
                  }`,
                  onClick: () => t(a.value),
                  children: a.label,
                },
                a.value
              )
            ),
          }),
        });
    var H = e.i(81341),
      R = e.i(857142);
    let G = ({
      assetList: e,
      selected: r,
      onChange: l,
      width: i = 60,
      height: o = 25,
      isDisabled: n = !1,
      containerClassName: d = "",
      dropdownContainerClassName: c = "",
      dropdownClassName: x = "",
    }) => {
      let [m, u] = (0, a.useState)(!1);
      return (0, s.jsxs)(R.Popover, {
        opened: m,
        width: i,
        shadow: "md",
        position: "bottom",
        classNames: {
          dropdown: `!bg-[#23262f] !p-0 border border-solid border-slate-600 max-w-[${i}px]`,
          arrow: "!bg-[#23262f]",
        },
        onDismiss: () => u(!1),
        children: [
          (0, s.jsx)(R.Popover.Target, {
            children: (0, s.jsxs)("div", {
              className: (0, t.default)(
                "text-slate-900 text-xs flex items-center justify-between gap-px cursor-pointer rounded pl-1.5 pr-1",
                d,
                {
                  "cursor-default": n,
                  "border border-slate-600 bg-slate-600/70": !n,
                }
              ),
              style: { width: i, height: o || "auto" },
              onClick: () => {
                n || u((e) => !e);
              },
              children: [
                r,
                (0, s.jsx)("div", {
                  className: (0, t.default)(
                    "transition-transform duration-150 ease-in-out",
                    { "rotate-180": m, hidden: n }
                  ),
                  children: (0, s.jsx)("svg", {
                    width: "12",
                    height: "12",
                    viewBox: "0 0 14 14",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, s.jsx)("path", {
                      d: "M10.8284 5L6.82823 9.00022L2.828 5",
                      stroke: "#A4ABC1",
                      strokeWidth: 1.5,
                    }),
                  }),
                }),
              ],
            }),
          }),
          (0, s.jsx)(R.Popover.Dropdown, {
            children: (0, s.jsx)("div", {
              className: (0, t.default)(
                "flex flex-col text-xs text-slate-900",
                c
              ),
              children: e.map((e) =>
                (0, s.jsx)(
                  "div",
                  {
                    className: (0, t.default)(
                      "hover:bg-slate-600/50 p-1 cursor-pointer",
                      x,
                      r === e && "bg-slate-600/50"
                    ),
                    style: { borderBottom: "1px solid #2d313c88" },
                    color: "white",
                    onClick: () => {
                      u(!1), l?.(e);
                    },
                    children: e,
                  },
                  e
                )
              ),
            }),
          }),
        ],
      });
    };
    var W = e.i(756302),
      _ = e.i(176394),
      q = e.i(644616);
    let V = () => {
      let [e, r] = (0, a.useState)("Volume"),
        [l, i] = (0, a.useState)(!1),
        [o, d] = (0, a.useState)([]),
        { client: c } = (0, _.useSmartWallets)(),
        m = async () => {
          i(!0);
          try {
            let e = await (0, W.getUserPairsStatistics)({
              user: c?.account?.address?.toLowerCase(),
            });
            d(e?.data?.data?.userPairStats);
          } catch (e) {
            d([]), console.error("Error fetching pairs:", e);
          } finally {
            i(!1);
          }
        };
      (0, a.useEffect)(() => {
        i(!0), c?.account?.address && m();
      }, [c?.account?.address, e]);
      let u = (0, a.useMemo)(() => {
        let s = (s) =>
          "Volume" === e
            ? Number((0, q.formatUnits)(s?.totalVolume, 6))
            : "Trades" === e
            ? Number(s?.totalTrades)
            : "PNL" === e
            ? Number((0, q.formatUnits)(s?.totalPnL, 6))
            : 0;
        return [...(o || [])].sort((e, t) => s(t) - s(e));
      }, [o, e]);
      return (0, s.jsxs)("div", {
        className:
          "bg-container-background rounded w-full sm:w-[30%] lg:w-1/3 h-full flex flex-col min-h-[200px]",
        children: [
          (0, s.jsxs)("div", {
            className:
              "min-h-11 px-4 flex items-center justify-between border-b border-b-ash ",
            children: [
              (0, s.jsx)("p", {
                className: "text-xs font-semibold uppercase",
                children: "Markets",
              }),
              (0, s.jsx)("p", {
                className: "text-2xs",
                children: (0, s.jsx)(G, {
                  assetList: ["Volume", "Trades", "PNL"],
                  selected: e,
                  onChange: (e) => r(e),
                  width: 80,
                }),
              }),
            ],
          }),
          !l &&
            o?.length > 0 &&
            (0, s.jsx)("div", {
              className: "flex flex-col overflow-scroll no-scrollbar",
              children: u?.map((a) =>
                (0, s.jsxs)(
                  "div",
                  {
                    className:
                      "flex gap-3 justify-between items-center px-4 py-2.5 border-b border-b-ash/50 last:border-b-0 hover:bg-slate-600/50 min-h-10",
                    children: [
                      (0, s.jsxs)("div", {
                        className: "flex gap-1.5 items-center",
                        children: [
                          (0, s.jsx)(x.default, {
                            src: `https://static.ostium.io/assets/pairs/${a?.pair?.from?.toLowerCase()}.svg`,
                            alt: "->",
                            width: 15,
                            height: 15,
                            className: "rounded-full",
                            onError: (e) => {
                              e.currentTarget.src =
                                "https://app.hyperliquid.xyz/coins/missing.svg";
                            },
                          }),
                          (0, s.jsx)("p", {
                            className: "text-xs font-semibold uppercase",
                            children: `${a?.pair?.from}/${a?.pair?.to}`,
                          }),
                        ],
                      }),
                      (0, s.jsx)("div", {
                        className: "text-xs",
                        children:
                          "Volume" === e
                            ? (0, b.formatBigNumber)(
                                Number((0, q.formatUnits)(a?.totalVolume, 6))
                              )
                            : "Trades" === e
                            ? (0, b.formatBigNumber)(Number(a?.totalTrades))
                            : "PNL" === e
                            ? (0, s.jsx)("p", {
                                className: (0, t.default)("font-semibold", {
                                  "text-grass": a?.totalPnL > 0,
                                  "text-blood": a?.totalPnL < 0,
                                  "text-slate-900": a?.totalPnL === 0,
                                }),
                                children: (0, b.formatBigNumber)(
                                  (0, b.roundedNumber)(
                                    Number((0, q.formatUnits)(a?.totalPnL, 6))
                                  )
                                ),
                              })
                            : "--",
                      }),
                    ],
                  },
                  a?.id
                )
              ),
            }),
          (0, s.jsxs)("div", {
            children: [
              !l && o?.length <= 0
                ? (0, s.jsx)("div", {
                    children: (0, s.jsx)(H.default, { text: "No Data" }),
                  })
                : null,
              l
                ? (0, s.jsx)("div", {
                    className: "flex w-full mt-[50px] justify-center",
                    children: (0, s.jsx)(n.Loader, {
                      type: "dots",
                      color: "white",
                    }),
                  })
                : null,
            ],
          }),
        ],
      });
    };
    var Z = e.i(646563),
      Y = e.i(533372),
      X = e.i(3130),
      Q = e.i(145288),
      J = e.i(79145),
      K = e.i(139330),
      ee = e.i(646444),
      es = e.i(10982),
      et = e.i(458790),
      ea = e.i(301272),
      er = e.i(553917),
      el = e.i(524795);
    let ei = ({
      close: e,
      isMarket: r,
      maxSize: l,
      coin: i,
      currentPrice: o,
      isBuy: n,
      entryPrice: d,
      stocksTradeIndex: c = 0,
      selectedAsset: x,
    }) => {
      let [m, u] = (0, a.useState)(0),
        [h, p] = (0, a.useState)(100),
        [f, g] = (0, a.useState)(0),
        [N, j] = (0, a.useState)(!1),
        { pairs: v } = (0, X.useOstiumStore)(
          (0, w.useShallow)((e) => ({ pairs: e.pairs }))
        ),
        { closePosition: y } = (0, ee.useOstium)(),
        T = (0, a.useCallback)(
          (e) => {
            let s = e?.split("/")[0],
              t = e?.split("/")[1],
              a = v?.find(
                (e) =>
                  e?.from?.toLowerCase() === s?.toLowerCase() &&
                  e?.to?.toLowerCase() === t?.toLowerCase()
              );
            return a?.mid;
          },
          [v]
        );
      (0, a.useEffect)(() => {
        g(
          (0, b.truncateToDecimals)(
            Math.abs(Number((0, q.formatUnits)(l, 18))),
            7
          )
        );
      }, [l]);
      let S = Number((0, q.formatUnits)(l, 18)),
        P = async () => {
          let s = Date.now().toString(),
            t = `${r ? "Market" : "Limit"} Close on Position`,
            a = {
              tokenName: x?.pair?.from?.toLowerCase(),
              selectedAsset: `${x?.pair?.from}/${x?.pair?.to}`,
              selectedSection: x?.isBuy ? "long" : "short",
              ostiumLeverage: String(Number(x?.leverage) / 100),
              takeProfit: (0, b.convertIntl)(
                (0, b.roundedNumber)(n ? C : k),
                !1
              ),
              isProfit: L,
              isLoss: !L,
              tokenQuantity: String(
                Number((0, q.formatUnits)(x?.tradeNotional, 18)).toFixed(4)
              ),
              isClosePosition: !0,
            };
          try {
            j(!0),
              (0, ea.ostiumNotification)({
                notificationId: s,
                title: `Initiating ${t}`,
                showProgress: !1,
                autoClose: !1,
                loading: !0,
                ...a,
              });
            let e = v.find((e) => {
                let s = i?.split("/")[0],
                  t = i?.split("/")[1];
                return e?.from === s && e?.to === t;
              }),
              r = await y({
                pairId: e?.id,
                index: c,
                percentage: h,
                currentPrice: o,
              });
            setTimeout(() => {
              er.notifications.hide(s);
            }, 100),
              r?.order_id && r?.receipt?.status === "success"
                ? (0, ea.ostiumNotification)({
                    title: "Position Closed.",
                    showProgress: !0,
                    isError: !1,
                    ...a,
                  })
                : ((0, ea.ostiumNotification)({
                    title: "Something went wrong!",
                    isError: !0,
                    showProgress: !1,
                    autoClose: !0,
                    ...a,
                  }),
                  (0, el.captureErrorToSentry)(
                    r?.message ?? JSON.stringify(r),
                    "OstiumClosePositionModal.tsx:handlePlaceOrder:else"
                  ));
          } catch (e) {
            setTimeout(() => {
              er.notifications.hide(s);
            }, 100),
              (0, ea.ostiumNotification)({
                title: "Something went wrong!",
                isError: !0,
                showProgress: !1,
                autoClose: !0,
                ...a,
              }),
              (0, el.captureErrorToSentry)(
                e,
                "OstiumClosePositionModal.tsx:handlePlaceOrder:catch"
              );
          } finally {
            j(!1), e();
          }
        },
        C =
          Number(f) *
          (Number(r ? T(i) : m) - Number((0, q.formatUnits)(d, 18))),
        k =
          Number(f) *
          (Number((0, q.formatUnits)(d, 18)) - Number(r ? T(i) : m)),
        L = n ? C > 0 : k > 0;
      return (0, s.jsxs)("div", {
        className: "pt-4 flex flex-col justify-between h-full",
        children: [
          (0, s.jsxs)("div", {
            children: [
              (0, s.jsx)("div", {
                className: "text-sm text-slate-900",
                children: r
                  ? "This will attempt to immediately close your position."
                  : "Your position will be closed when the limit price is reached.",
              }),
              r
                ? null
                : (0, s.jsxs)("div", {
                    className: "pt-4",
                    children: [
                      (0, s.jsx)("div", {
                        className: "text-xs pb-1 text-slate-900",
                        children: "Price",
                      }),
                      (0, s.jsx)(es.NumberInput, {
                        variant: "unstyled",
                        classNames: {
                          input:
                            "border-1 border-ash bg-background-500 focus:border-white rounded pl-2",
                        },
                        size: "xs",
                        value: m || "",
                        placeholder: `Current Price: $${(0, b.formatPrice)(
                          Number(o)
                        )}`,
                        clampBehavior: "strict",
                        onChange: (e) => {
                          u(Number(e));
                        },
                        hideControls: !0,
                      }),
                    ],
                  }),
              (0, s.jsxs)("div", {
                className: "pt-4 grid grid-cols-5 gap-2",
                children: [
                  (0, s.jsxs)("div", {
                    className: "col-span-4",
                    children: [
                      (0, s.jsx)("div", {
                        className: "text-xs pb-1 text-slate-900",
                        children: "Size",
                      }),
                      (0, s.jsx)(es.NumberInput, {
                        variant: "unstyled",
                        classNames: {
                          input:
                            "border-1 border-ash bg-background-500 focus:border-white rounded pl-2",
                          section: "!pr-5",
                        },
                        size: "xs",
                        value: f || "",
                        min: 0,
                        max: S,
                        clampBehavior: "strict",
                        rightSection: (0, s.jsx)("div", {
                          className: "pr-12 text-sm text-slate-900",
                          children: i,
                        }),
                        onChange: (e) => {
                          let s = Number(e) || 0;
                          g(s),
                            S > 0
                              ? p(
                                  Number(
                                    Math.max(
                                      0,
                                      Math.min(100, (s / S) * 100)
                                    ).toFixed(2)
                                  )
                                )
                              : p(0);
                        },
                        hideControls: !0,
                      }),
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    children: [
                      (0, s.jsx)("div", {
                        className: "text-xs pb-1 text-slate-900",
                        children: "Percentage",
                      }),
                      (0, s.jsx)(es.NumberInput, {
                        variant: "unstyled",
                        classNames: {
                          input:
                            "border-1 border-ash bg-background-500 focus:border-white rounded pl-2",
                        },
                        size: "xs",
                        max: 100,
                        rightSection: (0, s.jsx)("div", {
                          className: "pr-1 text-sm text-slate-900",
                          children: "%",
                        }),
                        min: 0,
                        clampBehavior: "strict",
                        value: Number(h) || "",
                        onChange: (e) => {
                          let s = Math.max(0, Math.min(100, Number(e) || 0));
                          p(s), g(Number(((S * s) / 100).toFixed(5)));
                        },
                        hideControls: !0,
                      }),
                    ],
                  }),
                ],
              }),
              (0, s.jsxs)("div", {
                className: "pt-2 text-slate-900 text-xs",
                children: [
                  "Max Size:",
                  " ",
                  (0, b.convertIntl)(
                    Number(Number((0, q.formatUnits)(l, 18)).toFixed(4))
                  ),
                  " ",
                  i,
                ],
              }),
              (0, s.jsx)("div", {
                className: "pt-4",
                children: (0, s.jsx)(et.Slider, {
                  value: h,
                  size: 5,
                  min: 0,
                  max: 100,
                  marks: [
                    {
                      value: 0,
                      label: (0, s.jsx)("span", {
                        className: "pl-2",
                        children: "0%",
                      }),
                    },
                    { value: 25, label: "25%" },
                    { value: 50, label: "50%" },
                    { value: 75, label: "75%" },
                    {
                      value: 100,
                      label: (0, s.jsx)("span", {
                        className: "pr-4",
                        children: "100%",
                      }),
                    },
                  ],
                  classNames: {
                    mark: "hidden",
                    markLabel: "text-2xs text-slate-900 pt-2",
                    label: "bg-[#101216]",
                    bar: "bg-gradient-to-r from-[#1f222c] to-primary-500",
                  },
                  onChange: (e) => {
                    p(e),
                      g(
                        Number(
                          (
                            (Number((0, q.formatUnits)(l, 18)) * e) /
                            100
                          ).toFixed(5)
                        )
                      );
                  },
                }),
              }),
              r || m
                ? (0, s.jsxs)("div", {
                    className:
                      "mt-12 pb-4 flex justify-end items-center gap-2 text-xs text-slate-900",
                    children: [
                      (0, s.jsxs)("div", {
                        children: ["Expected ", L ? "Profit" : "Loss", ": "],
                      }),
                      (0, s.jsx)("div", {
                        className: (0, t.default)("font-medium", {
                          "text-grass": L,
                          "text-blood": !L,
                        }),
                        children: (0, b.convertIntl)(
                          (0, b.roundedNumber)(n ? C : k)
                        ),
                      }),
                    ],
                  })
                : null,
            ],
          }),
          (0, s.jsx)("div", {
            children: (0, s.jsxs)(Y.Button, {
              color: "#00FF99",
              fullWidth: !0,
              className: "!px-2 !py-1",
              classNames: { label: "!text-black" },
              disabled: (r ? 0 === f : 0 === m || 0 === f) || N,
              onClick: P,
              children: ["Confirm ", r ? "Market" : "Limit", " Close"],
            }),
          }),
        ],
      });
    };
    var eo = e.i(300506),
      en = e.i(668375);
    let ed = ({
        close: e,
        coin: t,
        stocksTradeIndex: l,
        collateral: i,
        maxLeverage: o,
        leverage: n,
        entryPrice: d,
        isLong: c,
        selectedAsset: x,
      }) => {
        let [m, u] = (0, a.useState)(0),
          [h, p] = (0, a.useState)(100),
          [f, g] = (0, a.useState)(!1),
          { stockBalance: N } = (0, r.useBalanceStore)(
            (0, w.useShallow)((e) => ({ stockBalance: e.stockBalance }))
          ),
          [j, v] = (0, a.useState)("N/A"),
          { pairs: y } = (0, X.useOstiumStore)(
            (0, w.useShallow)((e) => ({ pairs: e.pairs }))
          ),
          { updateCollateral: T } = (0, ee.useOstium)(),
          S = (0, a.useCallback)(async () => {
            let e = "N/A";
            return (
              d &&
                i &&
                n &&
                o &&
                (e = await (0, eo.getTradeLiquidationPrice)({
                  openPrice: d.toString(),
                  long: c,
                  collateral: (
                    Number(i) + Number((0, en.parseUnits)(m.toString(), 6))
                  )?.toString(),
                  leverage: n.toString(),
                  rolloverFee: "0",
                  fundingFee: "0",
                  maxLeverage: o?.toString(),
                })),
              e ? Number((0, q.formatUnits)(BigInt(e), 18))?.toFixed(4) : "N/A"
            );
          }, [d, i, n, o, c, m]);
        (0, a.useEffect)(() => {
          (async () => {
            v(await S());
          })();
        }, [m]),
          (0, a.useEffect)(() => {
            u((0, b.roundedNumber)(Number(N))), p(100);
          }, [N]);
        let P = 0 === m || m > N || f,
          C = (0, a.useCallback)(
            (e) => {
              let s = e?.split("/")[0],
                t = e?.split("/")[1],
                a = y?.find(
                  (e) =>
                    e?.from?.toLowerCase() === s?.toLowerCase() &&
                    e?.to?.toLowerCase() === t?.toLowerCase()
                );
              return a?.mid;
            },
            [y]
          ),
          k = async () => {
            let s = Date.now().toString();
            g(!0);
            let a = {
              tokenName: x?.pair?.from?.toLowerCase(),
              selectedAsset: `${x?.pair?.from}/${x?.pair?.to}`,
              selectedSection: x?.isBuy ? "long" : "short",
              ostiumLeverage: String(Number(x?.leverage) / 100),
              tokenQuantity: String(
                Number((0, q.formatUnits)(x?.tradeNotional, 18)).toFixed(4)
              ),
              showTpsl: !1,
            };
            try {
              let r,
                i = t?.split("/")[0],
                o = t?.split("/")[1],
                n = y?.find(
                  (e) =>
                    e?.from?.toLowerCase() === i?.toLowerCase() &&
                    e?.to?.toLowerCase() === o?.toLowerCase()
                )?.id;
              (0, ea.ostiumNotification)({
                notificationId: s,
                title: "Updating margin...",
                showProgress: !1,
                autoClose: !1,
                loading: !0,
                ...a,
              }),
                m && (r = await T(n, l, Number(m).toString())),
                setTimeout(() => {
                  er.notifications.hide(s);
                }, 100),
                r
                  ? (0, ea.ostiumNotification)({
                      title: "Margin Updated",
                      showProgress: !0,
                      isError: !1,
                      ...a,
                    })
                  : ((0, ea.ostiumNotification)({
                      title: "Something went wrong!",
                      isError: !0,
                      showProgress: !1,
                      autoClose: !0,
                      ...a,
                    }),
                    (0, el.captureErrorToSentry)(
                      JSON.stringify(r),
                      "OstiumUpdateIsolatedMarginModal.tsx:handleIsolatedMarginUpdate:else"
                    )),
                g(!1),
                e();
            } catch (e) {
              console.error("Error updating isolated margin:", e),
                (0, ea.ostiumNotification)({
                  title: "Something went wrong!",
                  isError: !0,
                  showProgress: !1,
                  autoClose: !0,
                  ...a,
                }),
                (0, el.captureErrorToSentry)(
                  e,
                  "OstiumUpdateIsolatedMarginModal.tsx:handleIsolatedMarginUpdate:catch"
                );
            }
          };
        return (0, s.jsxs)("div", {
          className: "pt-6 h-full flex flex-col justify-between",
          children: [
            (0, s.jsxs)("div", {
              children: [
                (0, s.jsxs)("div", {
                  children: [
                    (0, s.jsx)("div", {
                      className: "text-xs pb-1 text-slate-900",
                      children: "Enter amount to add collateral",
                    }),
                    (0, s.jsx)(es.NumberInput, {
                      variant: "unstyled",
                      classNames: {
                        input:
                          "border-1 border-ash bg-background-500 focus:border-white rounded pl-2",
                      },
                      placeholder: "Enter amount to add",
                      value: m || "",
                      min: 0,
                      clampBehavior: "strict",
                      hideControls: !0,
                      onChange: (e) => {
                        let s = Number(e) || 0;
                        u(s),
                          N > 0
                            ? p(
                                Number(
                                  Math.max(
                                    0,
                                    Math.min(100, (s / N) * 100)
                                  ).toFixed(2)
                                )
                              )
                            : p(0);
                      },
                      max: N,
                      allowDecimal: !0,
                    }),
                  ],
                }),
                (0, s.jsx)("div", {
                  className: "pt-8 px-0.5",
                  children: (0, s.jsx)(et.Slider, {
                    color: "#00FF2B",
                    value: h,
                    size: 5,
                    min: 0,
                    max: 100,
                    marks: [
                      { value: 100, label: `+$${Number(N)?.toFixed(2)}` },
                    ],
                    classNames: {
                      mark: "hidden",
                      markLabel: "text-2xs text-slate-900 pt-2 pr-10",
                      label: "bg-[#101216]",
                      bar: "bg-gradient-to-r from-[#1f222c] to-primary-500",
                    },
                    onChange: (e) => {
                      p(e), u(Number(((N * e) / 100).toFixed(4)));
                    },
                  }),
                }),
                (0, s.jsxs)("div", {
                  className: "pt-12",
                  children: [
                    (0, s.jsxs)("div", {
                      className:
                        "flex items-center justify-between text-sm mb-1 ",
                      children: [
                        (0, s.jsx)("div", {
                          className: "text-slate-900",
                          children: "Current Price:",
                        }),
                        (0, s.jsxs)("div", {
                          className: "text-white",
                          children: ["$", (0, b.formatPrice)(Number(C(t)))],
                        }),
                      ],
                    }),
                    (0, s.jsxs)("div", {
                      className:
                        "flex items-center justify-between text-sm mb-1 pt-2",
                      children: [
                        (0, s.jsx)("div", {
                          className: "text-slate-900",
                          children: "Liquidation Price:",
                        }),
                        (0, s.jsxs)("div", {
                          className: "text-white",
                          children: ["$", (0, b.formatPrice)(Number(j))],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, s.jsx)("div", {
              className: "mt-4",
              children: (0, s.jsx)(Y.Button, {
                color: "#00FF2B",
                fullWidth: !0,
                className: `!px-2 !py-1 ${P ? "!bg-grass/20" : "!bg-grass"}`,
                classNames: { label: "!text-black" },
                disabled: P,
                onClick: k,
                children: "Confirm Margin Adjustment",
              }),
            }),
          ],
        });
      },
      ec = ({
        close: e,
        currentPrice: r,
        liquidationPrice: l,
        entryPrice: i,
        maxSize: o,
        coin: n,
        isLong: d,
        leverage: c,
        stocksTradeIndex: x,
        isTpsl: m = !0,
        selectedAsset: u,
      }) => {
        let [h, p] = (0, a.useState)(0),
          [f, g] = (0, a.useState)(0),
          [N, j] = (0, a.useState)(0),
          [v, y] = (0, a.useState)(0),
          [T, S] = (0, a.useState)(!1),
          { pairs: P } = (0, X.useOstiumStore)(
            (0, w.useShallow)((e) => ({ pairs: e.pairs }))
          ),
          [C, k] = (0, a.useState)({
            tpPrice: "",
            tpPercent: "",
            slPrice: "",
            slPercent: "",
          });
        (0, a.useEffect)(() => {
          if (Number(u?.takeProfitPrice)) {
            let e = Number(
                Number((0, q.formatUnits)(u?.takeProfitPrice, 18))?.toFixed(2)
              ),
              s = (0, b.roundedNumber)(
                d
                  ? ((Number((0, q.formatUnits)(u?.takeProfitPrice, 18)) - M) /
                      M) *
                      100 *
                      F
                  : -(
                      100 *
                      ((Number((0, q.formatUnits)(u?.takeProfitPrice, 18)) -
                        M) /
                        M)
                    ) * F
              );
            j(e), p(s), k((t) => ({ ...t, tpPrice: e, tpPercent: s }));
          }
          if (Number(u?.stopLossPrice)) {
            let e = Number(
                Number((0, q.formatUnits)(u?.stopLossPrice, 18))?.toFixed(2)
              ),
              s = (0, b.roundedNumber)(
                d
                  ? ((M - Number((0, q.formatUnits)(u?.stopLossPrice, 18))) /
                      M) *
                      100 *
                      F
                  : ((Number((0, q.formatUnits)(u?.stopLossPrice, 18)) - M) /
                      M) *
                      100 *
                      F
              );
            y(e), g(s);
          }
        }, []);
        let L = T || !(v || N),
          { updateTp: $, updateSl: O } = (0, ee.useOstium)(),
          I = async () => {
            let s = Date.now().toString(),
              t = {
                tokenName: u?.pair?.from?.toLowerCase(),
                selectedAsset: `${u?.pair?.from}/${u?.pair?.to}`,
                selectedSection: u?.isBuy ? "long" : "short",
                ostiumLeverage: String(Number(u?.leverage) / 100),
                takeProfit: m
                  ? d
                    ? (0, b.convertIntl)((0, b.roundedNumber)(A * (N - M)), !1)
                    : (0, b.convertIntl)((0, b.roundedNumber)(A * (M - N)), !1)
                  : d
                  ? (0, b.convertIntl)((0, b.roundedNumber)(A * (v - M)), !1)
                  : (0, b.convertIntl)((0, b.roundedNumber)(A * (M - v)), !1),
                isProfit: m ? B : D,
                isLoss: m ? U : E,
                tokenQuantity: String(A),
              };
            try {
              let a;
              S(!0),
                (0, ea.ostiumNotification)({
                  title: "Placing Order...",
                  notificationId: s,
                  showProgress: !1,
                  autoClose: !1,
                  loading: !0,
                  ...t,
                });
              let r = n?.split("/")[0],
                l = n?.split("/")[1],
                i = P?.find(
                  (e) =>
                    e?.from?.toLowerCase() === r?.toLowerCase() &&
                    e?.to?.toLowerCase() === l?.toLowerCase()
                )?.id;
              m
                ? N && (a = await $(i, x, N?.toString()))
                : v && (a = await O(i, x, v?.toString())),
                a
                  ? (j(0),
                    y(0),
                    p(0),
                    g(0),
                    setTimeout(() => {
                      er.notifications.hide(s);
                    }, 100),
                    (0, ea.ostiumNotification)({
                      title: "Order Placed",
                      showProgress: !0,
                      isError: !1,
                      ...t,
                    }),
                    e())
                  : ((0, ea.ostiumNotification)({
                      title: "Something went wrong!",
                      isError: !0,
                      showProgress: !1,
                      autoClose: !0,
                      ...t,
                    }),
                    (0, el.captureErrorToSentry)(
                      JSON.stringify(a),
                      "OstiumUpdateTPSLModal.tsx:handlePlaceOrder:else"
                    ));
            } catch (e) {
              S(!1),
                setTimeout(() => {
                  er.notifications.hide(s);
                }, 100),
                (0, ea.ostiumNotification)({
                  title: "Something went wrong!",
                  isError: !0,
                  showProgress: !1,
                  autoClose: !0,
                  ...t,
                }),
                (0, el.captureErrorToSentry)(
                  e,
                  "OstiumUpdateTPSLModal.tsx:handlePlaceOrder:catch"
                );
            }
          },
          M = Number((0, b.formatPrice)(Number((0, q.formatUnits)(i, 18)))),
          A = Number(Math.abs(Number((0, q.formatUnits)(o, 18)))?.toFixed(4)),
          F = Number(c) / 100,
          B = (d && A * (N - M) > 0) || (!d && A * (M - N) > 0),
          U = (d && A * (N - M) < 0) || (!d && A * (M - N) < 0),
          D = (d && A * (v - M) > 0) || (!d && A * (M - v) > 0),
          E = (d && A * (v - M) < 0) || (!d && A * (M - v) < 0);
        return (0, s.jsxs)("div", {
          className: "pt-1 flex flex-col h-full justify-between",
          children: [
            (0, s.jsx)("div", {
              children: m
                ? (0, s.jsxs)("div", {
                    className: "pt-6 grid grid-cols-5 gap-2",
                    children: [
                      (0, s.jsxs)("div", {
                        className: "col-span-4",
                        children: [
                          (0, s.jsx)("div", {
                            className: "text-xs pb-1 text-slate-900",
                            children: "TP Price",
                          }),
                          (0, s.jsx)(es.NumberInput, {
                            variant: "unstyled",
                            classNames: {
                              input:
                                "border-1 border-ash bg-background-500 focus:border-white rounded pl-2",
                            },
                            size: "xs",
                            placeholder: Number(C?.tpPrice)
                              ? `$${C?.tpPrice}`
                              : "None",
                            value: N || "",
                            min: 0,
                            clampBehavior: "strict",
                            hideControls: !0,
                            onChange: (e) => {
                              e
                                ? (j(Number(e)),
                                  p(
                                    (0, b.roundedNumber)(
                                      d
                                        ? ((Number(e) - M) / M) * 100 * F
                                        : -(100 * ((Number(e) - M) / M)) * F
                                    )
                                  ))
                                : (j(0), p(0));
                            },
                          }),
                        ],
                      }),
                      (0, s.jsxs)("div", {
                        children: [
                          (0, s.jsx)("div", {
                            className: "text-xs pb-1 text-slate-900",
                            children: "TP %",
                          }),
                          (0, s.jsx)(es.NumberInput, {
                            variant: "unstyled",
                            classNames: {
                              input:
                                "border-1 border-ash bg-background-500 focus:border-white rounded pl-2",
                            },
                            size: "xs",
                            placeholder: Number(C?.tpPercent)
                              ? `${C?.tpPercent}%`
                              : "None",
                            value: h,
                            min: 0,
                            clampBehavior: "strict",
                            onChange: (e) => {
                              e && Number(e) > 0
                                ? (d
                                    ? j(
                                        (0, b.roundedNumber)(
                                          M * (1 + Number(e) / (100 * F))
                                        )
                                      )
                                    : j(
                                        (0, b.roundedNumber)(
                                          M * (1 - Number(e) / (100 * F))
                                        )
                                      ),
                                  p(Number(e)))
                                : (j(0), p(0));
                            },
                          }),
                        ],
                      }),
                      (0, s.jsxs)("div", {
                        className: "col-span-5",
                        children: [
                          (0, s.jsx)("div", {
                            className: "mx-1 mt-2 mb-8",
                            children: (0, s.jsx)(et.Slider, {
                              size: "sm",
                              value: h,
                              onChange: (e) => {
                                e
                                  ? (d
                                      ? j(
                                          (0, b.roundedNumber)(
                                            M * (1 + Number(e) / (100 * F))
                                          )
                                        )
                                      : j(
                                          (0, b.roundedNumber)(
                                            M * (1 - Number(e) / (100 * F))
                                          )
                                        ),
                                    p(Number(e)))
                                  : (j(0), p(0));
                              },
                              label: (e) => {
                                let s = Number(e);
                                return s <= 0
                                  ? "0%"
                                  : s >= 100
                                  ? "100%"
                                  : `${s?.toFixed(2)}%`;
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
                                markLabel: "text-2xs text-slate-900 pt-2",
                                label: "bg-[#101216]",
                                bar: "#1f222c",
                              },
                              min: 0,
                              max: 100,
                            }),
                          }),
                          N
                            ? (0, s.jsxs)("div", {
                                className:
                                  "pt-2 pb-4 flex justify-end items-center gap-2 text-xs text-slate-900",
                                children: [
                                  (0, s.jsxs)("div", {
                                    children: [
                                      "Expected ",
                                      B ? "Profit" : "Loss",
                                      ": ",
                                    ],
                                  }),
                                  (0, s.jsx)("div", {
                                    className: (0, t.default)("font-medium", {
                                      "text-grass": B,
                                      "text-blood": U,
                                    }),
                                    children: d
                                      ? (0, b.convertIntl)(
                                          (0, b.roundedNumber)(A * (N - M))
                                        )
                                      : (0, b.convertIntl)(
                                          (0, b.roundedNumber)(A * (M - N))
                                        ),
                                  }),
                                ],
                              })
                            : null,
                        ],
                      }),
                    ],
                  })
                : (0, s.jsxs)("div", {
                    className: "pt-6 grid grid-cols-5 gap-2",
                    children: [
                      (0, s.jsxs)("div", {
                        className: "col-span-4",
                        children: [
                          (0, s.jsx)("div", {
                            className: "text-xs pb-1 text-slate-900",
                            children: "SL Price",
                          }),
                          (0, s.jsx)(es.NumberInput, {
                            variant: "unstyled",
                            classNames: {
                              input:
                                "border-1 border-ash bg-background-500 focus:border-white rounded pl-2",
                            },
                            size: "xs",
                            placeholder: Number(C?.slPrice)
                              ? `$${C?.slPrice}`
                              : "None",
                            hideControls: !0,
                            value: v || "",
                            min: 0,
                            clampBehavior: "strict",
                            onChange: (e) => {
                              e
                                ? (y(Number(e)),
                                  g(
                                    (0, b.roundedNumber)(
                                      d
                                        ? ((M - Number(e)) / M) * 100 * F
                                        : ((Number(e) - M) / M) * 100 * F
                                    )
                                  ))
                                : (y(0), g(0));
                            },
                          }),
                        ],
                      }),
                      (0, s.jsxs)("div", {
                        children: [
                          (0, s.jsx)("div", {
                            className: "text-xs pb-1 text-slate-900",
                            children: "SL %",
                          }),
                          (0, s.jsx)(es.NumberInput, {
                            variant: "unstyled",
                            classNames: {
                              input:
                                "border-1 border-ash bg-background-500 focus:border-white rounded pl-2",
                            },
                            size: "xs",
                            placeholder: Number(C?.slPercent)
                              ? `${C?.slPercent}%`
                              : "None",
                            value: f,
                            min: 0,
                            clampBehavior: "strict",
                            onChange: (e) => {
                              e
                                ? (d
                                    ? y(
                                        (0, b.roundedNumber)(
                                          M * (1 - Number(e) / (100 * F))
                                        )
                                      )
                                    : y(
                                        (0, b.roundedNumber)(
                                          M * (1 + Number(e) / (100 * F))
                                        )
                                      ),
                                  g(Number(e)))
                                : (y(0), g(0));
                            },
                          }),
                        ],
                      }),
                      (0, s.jsxs)("div", {
                        className: "col-span-5",
                        children: [
                          (0, s.jsx)("div", {
                            className: "mx-1 mt-2 mb-8",
                            children: (0, s.jsx)(et.Slider, {
                              size: "sm",
                              value: f,
                              label: (e) => {
                                let s = Number(e);
                                return s <= 0
                                  ? "0%"
                                  : s >= 100
                                  ? "100%"
                                  : `${s?.toFixed(2)}%`;
                              },
                              onChange: (e) => {
                                e
                                  ? (d
                                      ? y(
                                          (0, b.roundedNumber)(
                                            M * (1 - Number(e) / (100 * F))
                                          )
                                        )
                                      : y(
                                          (0, b.roundedNumber)(
                                            M * (1 + Number(e) / (100 * F))
                                          )
                                        ),
                                    g(Number(e)))
                                  : (y(0), g(0));
                              },
                              marks: [
                                { value: 0, label: "0%" },
                                { value: 25, label: "25%" },
                                { value: 50, label: "50%" },
                                { value: 75, label: "75%" },
                              ],
                              classNames: {
                                mark: "hidden",
                                markLabel: "text-2xs text-slate-900 pt-2",
                                label: "bg-[#101216]",
                                bar: "#1f222c",
                              },
                              min: 0,
                              max: 75,
                            }),
                          }),
                          v
                            ? (0, s.jsxs)("div", {
                                className:
                                  "pt-2 pb-4 flex justify-end items-center gap-2 text-xs text-slate-900",
                                children: [
                                  (0, s.jsxs)("div", {
                                    children: [
                                      "Expected ",
                                      D ? "Profit" : "Loss",
                                      ": ",
                                    ],
                                  }),
                                  (0, s.jsx)("div", {
                                    className: (0, t.default)("font-medium", {
                                      "text-grass": D,
                                      "text-blood": E,
                                    }),
                                    children: d
                                      ? (0, b.convertIntl)(
                                          (0, b.roundedNumber)(A * (v - M))
                                        )
                                      : (0, b.convertIntl)(
                                          (0, b.roundedNumber)(A * (M - v))
                                        ),
                                  }),
                                ],
                              })
                            : null,
                        ],
                      }),
                    ],
                  }),
            }),
            (0, s.jsxs)("div", {
              children: [
                (0, s.jsx)("div", {
                  className: "",
                  children: (0, s.jsxs)(Y.Button, {
                    color: "#00FF99",
                    fullWidth: !0,
                    classNames: { label: "!text-black" },
                    className: `!px-2 !py-1 ${
                      L ? "!bg-grass/20" : "!bg-grass"
                    }`,
                    onClick: I,
                    disabled: L,
                    children: ["Confirm ", m ? "Take Profit" : "Stop Loss"],
                  }),
                }),
                (0, s.jsxs)("div", {
                  className: "pt-4 text-xs text-slate-900 text-center",
                  children: [
                    "By default take-profit and stop-loss orders apply to the entire position. Take-profit and stop-loss automatically cancel after closing the position. A market order is triggered when the stop loss or take profit price is reached. ",
                    (0, s.jsx)("br", {}),
                    (0, s.jsx)("br", {}),
                    "If the order size is configured above, the TP/SL order will be for that size no matter how the position changes in the future.",
                  ],
                }),
              ],
            }),
          ],
        });
      };
    var ex = e.i(344873),
      em = e.i(836733);
    let eu = ({
      opened: e,
      close: r,
      currentTab: l,
      isMarket: i,
      coin: o,
      entryPrice: n,
      maxSize: d,
      currentPrice: c,
      stocksTradeIndex: x,
      collateral: m,
      maxLeverage: u,
      leverage: h,
      liquidationPrice: p,
      isLong: f,
      selectedAsset: g,
    }) => {
      let [N, j] = (0, a.useState)(l),
        { pairs: v } = (0, X.useOstiumStore)(
          (0, w.useShallow)((e) => ({ pairs: e.pairs }))
        );
      (0, a.useEffect)(() => {
        j(l);
      }, [l]);
      let y =
          "margin" === N
            ? "Adjust Margin for Position"
            : "tpsl" === N
            ? "Add TP/SL"
            : "close" === N
            ? `${i ? "Market" : "Limit"} Close on Position`
            : "Position",
        T = (0, b.formatPrice)(Number((0, q.formatUnits)(n, 18))),
        S = (() => {
          try {
            let e =
                "bigint" == typeof d
                  ? d
                  : "number" == typeof d || "string" == typeof d
                  ? BigInt(d)
                  : BigInt(0),
              s = Number((0, q.formatUnits)(e, 18));
            return Number.isFinite(s) ? Number(Math.abs(s).toFixed(4)) : 0;
          } catch (s) {
            let e = "number" == typeof d ? Math.abs(d) : 0;
            return Number.isFinite(e) ? Number(e.toFixed?.(4) ?? e) : 0;
          }
        })(),
        P = (0, a.useCallback)(() => {
          let e = o?.split("/")[0],
            s = o?.split("/")[1],
            t = v?.find(
              (t) =>
                t?.from?.toLowerCase() === e?.toLowerCase() &&
                t?.to?.toLowerCase() === s?.toLowerCase()
            );
          return t?.mid?.toFixed(2);
        }, [v, o])(),
        C = c ? Number((0, q.formatUnits)(c, 18))?.toFixed(2) : void 0,
        k = P ?? C,
        L = !(k && !Number.isNaN(Number(k))),
        $ = (0, a.useMemo)(() => {
          let e = o?.split("/")[0],
            s = o?.split("/")[1];
          return v?.find(
            (t) =>
              t?.from?.toLowerCase() === e?.toLowerCase() &&
              t?.to?.toLowerCase() === s?.toLowerCase()
          );
        }, [v, o]);
      return (0, s.jsx)(em.default, {
        opened: e,
        size: 550,
        centered: !0,
        onClose: r,
        useDrawerOnMobile: !0,
        drawerHeight: "600px",
        title: (0, s.jsx)("div", {
          className: "font-semibold text-[18px]",
          children: y,
        }),
        classNames: {
          header: "!bg-[#16171B]",
          body: "!p-4 !overflow-hidden h-[540px]",
          content: "!bg-[#16171B] !rounded-lg",
          close: "!text-white hover:!bg-slate-200 hover:!text-white/60",
        },
        styles: {
          content: { border: "1px solid #1F2126" },
          header: { borderBottom: "1px solid #1B1E26" },
        },
        content: (0, s.jsxs)("div", {
          className: "flex flex-col h-full",
          children: [
            (0, s.jsx)("div", {
              children: (0, s.jsx)(K.SegmentedControl, {
                value: N,
                onChange: j,
                withItemsBorders: !1,
                size: "sm",
                color: "#ffffff",
                classNames: {
                  indicator: "!rounded-sm",
                  root: "bg-slate-900/10 !p-[2px] !bg-black/40 border-1 border-ash",
                  label: "text-[11px] font-medium",
                },
                data: [
                  { label: "Add Collateral", value: "margin" },
                  { label: "Take Profit", value: "tpsl" },
                  { label: "Stop Loss", value: "stopLoss" },
                  { label: "Close", value: "close" },
                ].map((e) => ({
                  label: (0, s.jsx)("span", {
                    className: `${
                      N === e?.value ? "text-black" : "text-slate-900"
                    }`,
                    children: e?.label,
                  }),
                  value: e?.value,
                })),
                fullWidth: !0,
              }),
            }),
            (0, s.jsxs)("div", {
              className:
                "grid grid-cols-4 max-[600px]:grid-cols-2 justify-between items-center gap-2 border border-ash p-4 mt-4 rounded bg-slate-600",
              children: [
                (0, s.jsxs)("div", {
                  className: "text-xs mb-1",
                  children: [
                    (0, s.jsx)("div", {
                      className: "text-slate-900 text-[12px]",
                      children: "Entry Price",
                    }),
                    (0, s.jsxs)("div", {
                      className: "text-white font-medium text-[14px] pt-0.5",
                      children: [
                        "$",
                        (0, ex.formatCompactZeroNotation)(Number(T)),
                      ],
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  className: "text-xs mb-1",
                  children: [
                    (0, s.jsx)("div", {
                      className: "text-slate-900 text-[12px]",
                      children: "Position",
                    }),
                    (0, s.jsxs)("div", {
                      className: (0, t.default)(
                        "font-medium text-[14px] pt-0.5",
                        { "text-grass": f, "text-blood": !f }
                      ),
                      children: [S, " ", o],
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  className: "text-xs mb-1",
                  children: [
                    (0, s.jsx)("div", {
                      className: "text-slate-900 text-[12px]",
                      children: "Mark Price",
                    }),
                    (0, s.jsx)("div", {
                      className: "text-white font-medium text-[14px] pt-0.5",
                      children: L
                        ? (0, s.jsx)("div", {
                            className:
                              "h-[16px]  rounded-sm bg-gradient-to-r from-slate-500/50 via-slate-400/40 to-slate-500/50 animate-pulse ring-1 ring-slate-600/40",
                            "aria-hidden": !0,
                          })
                        : (0, s.jsxs)(s.Fragment, {
                            children: [
                              "$",
                              (0, ex.formatCompactZeroNotation)(Number(k)),
                            ],
                          }),
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  className: "text-xs mb-1 max-[600px]:text-left text-right",
                  children: [
                    (0, s.jsx)("div", {
                      className: "text-slate-900 text-[12px]",
                      children: "Liq. Price",
                    }),
                    (0, s.jsxs)("div", {
                      className: "text-white font-medium text-[14px] pt-0.5",
                      children: [
                        "$",
                        (0, ex.formatCompactZeroNotation)(Number(p)),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            $?.overnightMaxLeverage &&
              $?.overnightMaxLeverage !== "0" &&
              (0, s.jsx)("div", {
                className:
                  "mt-3 text-xs text-yellow-400 bg-yellow-950/20 border border-yellow-800/30 rounded-lg p-2.5",
                children: (0, s.jsxs)("div", {
                  className: "flex items-start gap-2",
                  children: [
                    (0, s.jsx)("svg", {
                      className: "w-3.5 h-3.5 mt-0.5 flex-shrink-0",
                      fill: "currentColor",
                      viewBox: "0 0 20 20",
                      children: (0, s.jsx)("path", {
                        fillRule: "evenodd",
                        d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z",
                        clipRule: "evenodd",
                      }),
                    }),
                    (0, s.jsx)("span", {
                      children:
                        "This position will automatically close at the end of trading hours today.",
                    }),
                  ],
                }),
              }),
            "margin" === N
              ? (0, s.jsx)(ed, {
                  close: r,
                  coin: o,
                  entryPrice: n,
                  stocksTradeIndex: x,
                  collateral: m,
                  maxLeverage: u,
                  leverage: h,
                  isLong: f,
                  selectedAsset: g,
                })
              : null,
            "tpsl" === N || "stopLoss" === N
              ? (0, s.jsx)(ec, {
                  close: r,
                  coin: o,
                  entryPrice: n,
                  currentPrice: c,
                  liquidationPrice: p,
                  maxSize: d,
                  isLong: f,
                  leverage: h,
                  stocksTradeIndex: x,
                  isTpsl: "tpsl" === N,
                  selectedAsset: g,
                })
              : null,
            "close" === N
              ? (0, s.jsx)(ei, {
                  close: r,
                  coin: o,
                  entryPrice: n,
                  isMarket: i,
                  maxSize: d,
                  currentPrice: c,
                  isBuy: f,
                  stocksTradeIndex: x,
                  selectedAsset: g,
                })
              : null,
          ],
        }),
      });
    };
    var eh = e.i(19607),
      ep = e.i(618566),
      eb = e.i(430885),
      ef = e.i(398949),
      eg = e.i(152702),
      eN = e.i(559516);
    let ej = ({ closeTime: e, timezone: t = "America/New_York" }) => {
        let [r, l] = (0, a.useState)("");
        return (
          (0, a.useEffect)(() => {
            let s = () => {
              if (!e) return void l("Closed");
              try {
                let s = new Date(),
                  a = new Date(s.toLocaleString("en-US", { timeZone: t })),
                  [r, i] = e.split(":").map(Number),
                  o = new Date(a);
                if ((o.setHours(r, i, 0, 0), a >= o)) return void l("Closed");
                let n = o.getTime() - a.getTime(),
                  d = Math.floor(n / 36e5),
                  c = Math.floor((n % 36e5) / 6e4);
                d > 0 ? l(`${d}h`) : c > 0 ? l(`${c}m`) : l("Closed");
              } catch (e) {
                console.error("Error calculating time remaining:", e),
                  l("Closed");
              }
            };
            s();
            let a = setInterval(s, 6e4);
            return () => clearInterval(a);
          }, [e, t]),
          (0, s.jsx)("span", { children: r })
        );
      },
      ev = ({ variant: e = "tabs", isSocial: r = !1 }) => {
        let l = (0, ep.useSearchParams)(),
          i = (0, ep.useRouter)(),
          {
            ostiumPositions: o,
            pairs: n,
            setSelectedAssetNonCrypto: d,
          } = (0, X.useOstiumStore)(
            (0, w.useShallow)((e) => ({
              ostiumPositions: r ? e.socialOstiumPositions : e.ostiumPositions,
              pairs: e.pairs,
              setSelectedAssetNonCrypto: e.setSelectedAssetNonCrypto,
            }))
          ),
          [c, x] = (0, a.useState)("margin"),
          [m, u] = (0, a.useState)(!0),
          [h, p] = (0, a.useState)(BigInt(0)),
          [f, N] = (0, a.useState)(""),
          [j, v] = (0, a.useState)(0),
          [y, T] = (0, a.useState)(0),
          [S, P] = (0, a.useState)(0),
          [C, k] = (0, a.useState)(!1),
          [L, $] = (0, a.useState)(0),
          [O, I] = (0, a.useState)([]),
          [M, A] = (0, a.useState)(null),
          [F, B] = (0, a.useState)(""),
          [U, { open: D, close: E }] = (0, g.useDisclosure)(!1),
          [z, { open: R, close: G }] = (0, g.useDisclosure)(!1),
          [_, V] = (0, a.useState)(!1),
          [Z, Y] = (0, a.useState)(0),
          [K, ee] = (0, a.useState)(0),
          [es, et] = (0, a.useState)(0),
          [ea, er] = (0, a.useState)({}),
          el = (0, eg.useIsMobile)(),
          ei = "gtr" === e,
          eo = ei
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
                tr: "border-b-2 !border-black",
              };
        (0, a.useEffect)(() => {
          let e = o?.map((e) => {
            if (e?.pair?.group?.name === "stocks")
              return e?.pair?.from + e?.pair?.to;
          });
          (async () => {
            if (e && e.length > 0) {
              let s = e.map(async (e) => {
                if (!e) return {};
                let s = await (0, W.getStocksTradingHours)({ asset: e });
                return { asset: e, timing: s?.data };
              });
              try {
                let e = await Promise.all(s);
                I(e);
              } catch (e) {
                console.error("Error fetching market times:", e), I([]);
              }
            }
          })();
        }, [o]);
        let en = (0, a.useCallback)(
            (e) => {
              let s = n?.find(
                (s) =>
                  s?.from?.toLowerCase() === e?.pair?.from?.toLowerCase() &&
                  s?.to?.toLowerCase() === e?.pair?.to?.toLowerCase()
              );
              return s?.mid;
            },
            [n]
          ),
          ed = (e) => {
            let s = new URLSearchParams(l.toString());
            s.set("coin", `${e?.pair?.from}/${e?.pair?.to}`),
              i.replace(`?${s.toString().replace(/%2F/g, "/")}`, {
                scroll: !1,
              }),
              d(`${e?.pair?.from}/${e?.pair?.to}`),
              (0, eh.trackEvent)("Page Viewed", {
                page_name: "RWA Perps",
                coin: `${e?.pair?.from}/${e?.pair?.to}`,
              }),
              setTimeout(() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }, 100);
          },
          ec = o?.map((e, a) => {
            let l = en(e),
              i = !(void 0 !== l && !Number.isNaN(Number(l))),
              o = Math.abs(Number((0, q.formatUnits)(e?.tradeNotional, 18))),
              n = Number((0, q.formatUnits)(e?.openPrice, 18)),
              d = Number(e?.leverage) / 100,
              c = Number(
                e?.pair?.maxLeverage !== "0"
                  ? e?.pair?.maxLeverage
                  : e?.pair?.group?.maxLeverage
              ),
              x = e?.isBuy ? l > n : l < n,
              m = e?.isBuy,
              h = m ? (l - n) * o : (n - l) * o,
              f = m ? ((l - n) / n) * d * 100 : ((n - l) / n) * d * 100,
              g = Number((0, q.formatUnits)(e?.collateral, 6)),
              j = O?.find((s) => s?.asset === e?.pair?.from + e?.pair?.to),
              w = () => {
                P(e?.liqPrice),
                  N(e?.pair?.from + "/" + e?.pair?.to),
                  v(en(e)),
                  T(e?.openPrice),
                  k(e?.isBuy),
                  Y(Number(e?.leverage)),
                  $(e?.index),
                  et(e?.collateral),
                  ee(c),
                  V(m);
                let s = e?.tradeNotional;
                p(void 0 !== s ? (s >= BigInt(0) ? s : -s) : BigInt(0)), er(e);
              };
            return (0, s.jsxs)(
              Q.Table.Tr,
              {
                children: [
                  (0, s.jsxs)(Q.Table.Td, {
                    className: "cursor-pointer relative",
                    onClick: () => ed(e),
                    children: [
                      (0, s.jsx)("div", {
                        className: (0, t.default)(
                          "absolute top-0 left-0 bottom-0 w-[2px] ",
                          { "bg-grass": m, "bg-blood": !m }
                        ),
                      }),
                      (0, s.jsx)("div", {
                        className: (0, t.default)(
                          "absolute top-0 left-0 bottom-0 w-full bg-gradient-to-r from-blood/30 to-transparent",
                          { "from-grass/30": m, "from-blood/30": !m }
                        ),
                      }),
                      (0, s.jsxs)("span", {
                        className: (0, t.default)(
                          "inline-block w-[80px] text-center px-1 py-0.5 rounded-sm text-2xs font-medium ml-2"
                        ),
                        children: [e?.pair?.from, "/", e?.pair?.to],
                      }),
                      j &&
                        (0, s.jsx)("span", {
                          className:
                            "text-2xs text-blood bg-blood/20 border border-blood/40 rounded-sm px-1 py-0.5",
                          children: j?.timing?.isOpenNow
                            ? (0, s.jsx)(ej, {
                                closeTime: j?.timing?.dayTradingHours?.to,
                                timezone: j?.timing?.timezone,
                              })
                            : "Closed",
                        }),
                    ],
                  }),
                  (0, s.jsx)(Q.Table.Td, {
                    children: (0, s.jsxs)("span", {
                      className: (0, t.default)(
                        "inline-block w-[80px] text-center px-1 py-0.5 rounded-sm text-2xs font-medium",
                        {
                          "text-grass bg-grass/20 border border-grass/40": m,
                          "text-blood bg-blood/20 border border-blood/40": !m,
                        }
                      ),
                      children: [
                        m ? "LONG" : "SHORT",
                        " ",
                        e?.leverage / 100,
                        "x",
                      ],
                    }),
                  }),
                  (0, s.jsx)(Q.Table.Td, {
                    children: (0, s.jsx)("div", {
                      children: Number(
                        (0, q.formatUnits)(e?.tradeNotional, 18)
                      ).toFixed(4),
                    }),
                  }),
                  (0, s.jsx)(Q.Table.Td, {
                    children: i
                      ? (0, s.jsx)("span", {
                          className: (0, t.default)({
                            "text-slate-900/60": !ei,
                            "text-neutral-500": ei,
                          }),
                          children: "--",
                        })
                      : (0, s.jsx)("div", {
                          children: (0, b.convertIntl)(
                            (0, b.roundedNumber)(
                              Number((0, q.formatUnits)(e?.tradeNotional, 18)) *
                                Number(l)
                            )
                          ),
                        }),
                  }),
                  (0, s.jsxs)(Q.Table.Td, {
                    children: [
                      "$",
                      (0, ex.formatCompactZeroNotation)(
                        Number((0, q.formatUnits)(e?.openPrice, 18))
                      ),
                    ],
                  }),
                  (0, s.jsx)(Q.Table.Td, {
                    children: i
                      ? (0, s.jsx)("span", {
                          className: (0, t.default)({
                            "text-slate-900/60": !ei,
                            "text-neutral-500": ei,
                          }),
                          children: "--",
                        })
                      : "$" + (0, ex.formatCompactZeroNotation)(Number(l)),
                  }),
                  (0, s.jsxs)(Q.Table.Td, {
                    children: [
                      " ",
                      i
                        ? (0, s.jsx)("span", {
                            className: (0, t.default)({
                              "text-slate-900/60": !ei,
                              "text-neutral-500": ei,
                            }),
                            children: "-- (--)",
                          })
                        : (0, s.jsxs)("div", {
                            className: (0, t.default)({
                              "text-grass": x,
                              "text-blood": !x,
                              "text-slate-900": 0 === h && !ei,
                              "text-neutral-500": 0 === h && ei,
                            }),
                            children: [
                              x ? "+" : "-",
                              (0, b.convertIntl)(
                                Number(Math.abs(h).toFixed(2))
                              ),
                              " (",
                              f.toFixed(2),
                              "%)",
                            ],
                          }),
                    ],
                  }),
                  !r &&
                    (0, s.jsx)(Q.Table.Td, {
                      children: (0, s.jsx)(eb.default, {
                        label: "Post Trade",
                        width: "auto",
                        children: (0, s.jsx)("div", {
                          className: (0, t.default)(
                            "flex items-center justify-center w-7 h-7 rounded-sm border transition-all duration-300 group cursor-pointer bg-brand-blue/5 border-brand-blue/20 hover:bg-brand-blue hover:border-brand-blue"
                          ),
                          onClick: async () => {
                            A({
                              ...e,
                              size: o,
                              isLong: m,
                              source: "RWA_PERPS",
                              coin: `${e?.pair?.from}/${e?.pair?.to}`,
                              symbol: `${e?.pair?.from}/${e?.pair?.to}`,
                              price: n,
                              gains: h,
                              gainsPercentage: f,
                            });
                            let s = e?.tradeId || e?._id || e?.id || e?.index,
                              t = `${e?.pair?.from}_${e?.pair?.to}` || "",
                              a = e?.isBuy ? "BUY" : "SELL";
                            B(`${s}_${t}_${a}_OPEN`), R();
                          },
                          children: (0, s.jsx)(eN.IconPencilPlus, {
                            size: 14,
                            className:
                              "text-brand-blue group-hover:text-white transition-colors duration-300",
                          }),
                        }),
                      }),
                    }),
                  (0, s.jsx)(Q.Table.Td, {
                    children: e?.liqPrice
                      ? "$" +
                        (0, ex.formatCompactZeroNotation)(Number(e.liqPrice))
                      : "N/A",
                  }),
                  (0, s.jsx)(Q.Table.Td, {
                    children: (0, s.jsxs)("div", {
                      className: "flex items-center gap-2",
                      children: [
                        (0, b.convertIntl)((0, b.roundedNumber)(Number(g))),
                        " ",
                        !r &&
                          (0, s.jsx)("div", {
                            onClick: () => {
                              w(), em("margin");
                            },
                            children: (0, s.jsx)("img", {
                              src: J.default.src,
                              alt: "->",
                              width: 12,
                              className: "cursor-pointer",
                            }),
                          }),
                      ],
                    }),
                  }),
                  (0, s.jsx)(Q.Table.Td, {
                    children: (0, s.jsxs)("div", {
                      className: "flex items-center gap-2",
                      children: [
                        (0, s.jsxs)("div", {
                          children: [
                            e?.takeProfitPrice
                              ? "$" +
                                Number(
                                  (0, q.formatUnits)(e?.takeProfitPrice, 18)
                                )?.toFixed(2)
                              : "-",
                            "/",
                            " ",
                            e?.stopLossPrice
                              ? "$" +
                                Number(
                                  (0, q.formatUnits)(e?.stopLossPrice, 18)
                                )?.toFixed(2)
                              : "-",
                            " ",
                          ],
                        }),
                        !r &&
                          (0, s.jsx)("div", {
                            onClick: () => {
                              w(), em("tpsl");
                            },
                            children: (0, s.jsx)("img", {
                              src: J.default.src,
                              alt: "->",
                              width: 12,
                              className: "cursor-pointer",
                            }),
                          }),
                      ],
                    }),
                  }),
                  !r &&
                    (0, s.jsx)(Q.Table.Td, {
                      children: (0, s.jsx)("div", {
                        className:
                          "flex  items-center gap-2 text-white max-w-[100px]",
                        children: (0, s.jsx)("div", {
                          className:
                            "cursor-pointer hover:bg-slate-900/10 border border-transparent hover:border-slate-900/40 px-1 py-0.5 rounded-sm",
                          onClick: () => {
                            w(), u(!0), em("close");
                          },
                          children: "Market",
                        }),
                      }),
                    }),
                ],
              },
              a
            );
          }),
          em = (e) => {
            x(e), D();
          };
        return (0, s.jsxs)("div", {
          className: "overflow-auto h-full",
          children: [
            el
              ? (0, s.jsxs)("div", {
                  className: "flex flex-col gap-3 p-2",
                  children: [
                    o?.map((e, a) => {
                      let l, i, o, n, d, c, x, m, h, f, g, j;
                      return (
                        (i = !(
                          void 0 !== (l = en(e)) && !Number.isNaN(Number(l))
                        )),
                        (o = Math.abs(
                          Number((0, q.formatUnits)(e?.tradeNotional, 18))
                        )),
                        (n = Number((0, q.formatUnits)(e?.openPrice, 18))),
                        (d = Number(e?.leverage) / 100),
                        (c = Number(
                          e?.pair?.maxLeverage !== "0"
                            ? e?.pair?.maxLeverage
                            : e?.pair?.group?.maxLeverage
                        )),
                        (x = e?.isBuy ? l > n : l < n),
                        (h = (m = e?.isBuy) ? (l - n) * o : (n - l) * o),
                        (f = m
                          ? ((l - n) / n) * d * 100
                          : ((n - l) / n) * d * 100),
                        (g = Number((0, q.formatUnits)(e?.collateral, 6))),
                        (j = () => {
                          P(e?.liqPrice),
                            N(e?.pair?.from + "/" + e?.pair?.to),
                            v(en(e)),
                            T(e?.openPrice),
                            k(e?.isBuy),
                            Y(Number(e?.leverage)),
                            $(e?.index),
                            et(e?.collateral),
                            ee(c),
                            V(m);
                          let s = e?.tradeNotional;
                          p(
                            void 0 !== s ? (s >= BigInt(0) ? s : -s) : BigInt(0)
                          ),
                            er(e);
                        }),
                        (0, s.jsxs)(
                          "div",
                          {
                            className:
                              "flex flex-col gap-2 py-3 px-4 rounded-xl bg-neutral-900 border border-neutral-800 shadow-lg",
                            children: [
                              (0, s.jsxs)("div", {
                                className: "flex items-center justify-between",
                                children: [
                                  (0, s.jsxs)("div", {
                                    className: "cursor-pointer",
                                    onClick: () => ed(e),
                                    children: [
                                      (0, s.jsx)("span", {
                                        className:
                                          "text-neutral-400 text-xs font-normal",
                                        children: "Market",
                                      }),
                                      (0, s.jsx)("div", {
                                        className: "flex items-center h-5",
                                        children: (0, s.jsxs)("span", {
                                          className:
                                            "text-white text-base font-semibold",
                                          children: [
                                            e?.pair?.from,
                                            "/",
                                            e?.pair?.to,
                                          ],
                                        }),
                                      }),
                                    ],
                                  }),
                                  (0, s.jsx)("div", {
                                    className: "flex items-center gap-3",
                                    children: i
                                      ? (0, s.jsx)("span", {
                                          className:
                                            "text-neutral-500 text-xs font-normal",
                                          children: "-- (--)",
                                        })
                                      : (0, s.jsxs)("div", {
                                          className: (0, t.default)(
                                            "text-sm font-semibold",
                                            {
                                              "text-grass": x,
                                              "text-blood": !x,
                                              "text-white": 0 === h,
                                            }
                                          ),
                                          children: [
                                            x ? "+" : "-",
                                            (0, b.convertIntl)(
                                              Number(Math.abs(h).toFixed(2))
                                            ),
                                            " (",
                                            f.toFixed(2),
                                            "%)",
                                          ],
                                        }),
                                  }),
                                ],
                              }),
                              (0, s.jsx)("div", {
                                className: "flex items-center gap-2",
                                children: (0, s.jsxs)("div", {
                                  className: (0, t.default)(
                                    "px-2 py-0.5 rounded text-[10px] font-medium",
                                    {
                                      "text-grass bg-grass/20": m,
                                      "text-blood bg-blood/20": !m,
                                    }
                                  ),
                                  children: [
                                    m ? "Long " : "Short ",
                                    (0, s.jsxs)("span", {
                                      className: "text-xs font-normal",
                                      children: [e?.leverage / 100, "x"],
                                    }),
                                  ],
                                }),
                              }),
                              (0, s.jsxs)("div", {
                                className: "grid grid-cols-3 gap-y-4 gap-x-2",
                                children: [
                                  (0, s.jsxs)("div", {
                                    className: "flex flex-col gap-1",
                                    children: [
                                      (0, s.jsx)("span", {
                                        className:
                                          "text-neutral-500 text-xs font-normal",
                                        children: "Size",
                                      }),
                                      (0, s.jsx)("span", {
                                        className:
                                          "text-white text-xs font-medium",
                                        children: Number(
                                          (0, q.formatUnits)(
                                            e?.tradeNotional,
                                            18
                                          )
                                        ).toFixed(4),
                                      }),
                                    ],
                                  }),
                                  (0, s.jsxs)("div", {
                                    className: "flex flex-col gap-1",
                                    children: [
                                      (0, s.jsx)("span", {
                                        className:
                                          "text-neutral-500 text-xs font-normal",
                                        children: "Pos. Value",
                                      }),
                                      (0, s.jsx)("span", {
                                        className:
                                          "text-white text-xs font-medium",
                                        children: i
                                          ? "--"
                                          : (0, b.convertIntl)(
                                              (0, b.roundedNumber)(
                                                Number(
                                                  (0, q.formatUnits)(
                                                    e?.tradeNotional,
                                                    18
                                                  )
                                                ) * Number(l)
                                              )
                                            ),
                                      }),
                                    ],
                                  }),
                                  (0, s.jsxs)("div", {
                                    className: "flex flex-col gap-1",
                                    children: [
                                      (0, s.jsx)("span", {
                                        className:
                                          "text-neutral-500 text-xs font-normal",
                                        children: "Entry Price",
                                      }),
                                      (0, s.jsxs)("span", {
                                        className:
                                          "text-white text-xs font-medium",
                                        children: [
                                          "$",
                                          (0, ex.formatCompactZeroNotation)(
                                            Number(
                                              (0, q.formatUnits)(
                                                e?.openPrice,
                                                18
                                              )
                                            )
                                          ),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, s.jsxs)("div", {
                                    className: "flex flex-col gap-1",
                                    children: [
                                      (0, s.jsx)("span", {
                                        className:
                                          "text-neutral-500 text-xs font-normal",
                                        children: "Mark Price",
                                      }),
                                      (0, s.jsx)("span", {
                                        className:
                                          "text-white text-xs font-medium",
                                        children: i
                                          ? "--"
                                          : "$" +
                                            (0, ex.formatCompactZeroNotation)(
                                              Number(l)
                                            ),
                                      }),
                                    ],
                                  }),
                                  (0, s.jsxs)("div", {
                                    className: "flex flex-col gap-1",
                                    children: [
                                      (0, s.jsx)("span", {
                                        className:
                                          "text-neutral-500 text-xs font-normal",
                                        children: "Liq. Price",
                                      }),
                                      (0, s.jsx)("span", {
                                        className:
                                          "text-white text-xs font-medium",
                                        children: e?.liqPrice
                                          ? "$" +
                                            (0, ex.formatCompactZeroNotation)(
                                              Number(e.liqPrice)
                                            )
                                          : "N/A",
                                      }),
                                    ],
                                  }),
                                  (0, s.jsxs)("div", {
                                    className: "flex flex-col gap-1",
                                    children: [
                                      (0, s.jsx)("span", {
                                        className:
                                          "text-neutral-500 text-xs font-normal",
                                        children: "Margin",
                                      }),
                                      (0, s.jsxs)("div", {
                                        className: (0, t.default)(
                                          "flex items-center gap-1",
                                          { "cursor-pointer": !r }
                                        ),
                                        onClick: () => {
                                          r || (j(), em("margin"));
                                        },
                                        children: [
                                          (0, s.jsx)("span", {
                                            className:
                                              "text-white text-xs font-medium",
                                            children: (0, b.convertIntl)(
                                              (0, b.roundedNumber)(Number(g))
                                            ),
                                          }),
                                          !r &&
                                            (0, s.jsx)("img", {
                                              src: J.default.src,
                                              width: 10,
                                              alt: "edit",
                                              className: "opacity-60",
                                            }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, s.jsxs)("div", {
                                    className: "flex flex-col gap-1 col-span-2",
                                    children: [
                                      (0, s.jsx)("span", {
                                        className:
                                          "text-neutral-500 text-xs font-normal",
                                        children: "TP/SL",
                                      }),
                                      (0, s.jsxs)("div", {
                                        className: (0, t.default)(
                                          "flex items-center gap-1",
                                          { "cursor-pointer": !r }
                                        ),
                                        onClick: (e) => {
                                          r || (j(), em("tpsl"));
                                        },
                                        children: [
                                          (0, s.jsxs)("span", {
                                            className: (0, t.default)(
                                              "text-xs font-medium text-white"
                                            ),
                                            children: [
                                              e?.takeProfitPrice
                                                ? "$" +
                                                  Number(
                                                    (0, q.formatUnits)(
                                                      e?.takeProfitPrice,
                                                      18
                                                    )
                                                  )?.toFixed(2)
                                                : "-",
                                              "/",
                                              " ",
                                              e?.stopLossPrice
                                                ? "$" +
                                                  Number(
                                                    (0, q.formatUnits)(
                                                      e?.stopLossPrice,
                                                      18
                                                    )
                                                  )?.toFixed(2)
                                                : "-",
                                            ],
                                          }),
                                          !r &&
                                            (0, s.jsx)("img", {
                                              src: J.default.src,
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
                              !r &&
                                (0, s.jsxs)("div", {
                                  className:
                                    "flex items-center justify-between pt-2 border-t border-white/5 mt-1",
                                  children: [
                                    (0, s.jsx)("div", {
                                      className: "flex items-center gap-4",
                                      children: (0, s.jsx)("span", {
                                        className:
                                          "text-brand-blue text-xs font-semibold cursor-pointer hover:opacity-80 transition-opacity",
                                        onClick: () => {
                                          j(), u(!0), em("close");
                                        },
                                        children: "Market Close",
                                      }),
                                    }),
                                    !r &&
                                      (0, s.jsx)("div", {
                                        className:
                                          "flex items-center justify-center p-1.5 rounded-lg border transition-all cursor-pointer bg-brand-blue/10 border-brand-blue/30 hover:bg-brand-blue/20",
                                        onClick: async () => {
                                          A({
                                            ...e,
                                            size: o,
                                            isLong: m,
                                            source: "RWA_PERPS",
                                            coin: `${e?.pair?.from}/${e?.pair?.to}`,
                                            symbol: `${e?.pair?.from}/${e?.pair?.to}`,
                                            price: n,
                                            gains: h,
                                            gainsPercentage: f,
                                          });
                                          let s =
                                              e?.tradeId ||
                                              e?._id ||
                                              e?.id ||
                                              e?.index,
                                            t =
                                              `${e?.pair?.from}_${e?.pair?.to}` ||
                                              "",
                                            a = e?.isBuy ? "BUY" : "SELL";
                                          B(`${s}_${t}_${a}_OPEN`), R();
                                        },
                                        children: (0, s.jsx)(
                                          eN.IconPencilPlus,
                                          {
                                            size: 16,
                                            className: "text-brand-blue",
                                          }
                                        ),
                                      }),
                                  ],
                                }),
                            ],
                          },
                          a
                        )
                      );
                    }),
                    o?.length === 0
                      ? (0, s.jsx)("div", {
                          className: "pb-10 pt-10",
                          children: (0, s.jsx)(H.default, {
                            text: "No Positions",
                          }),
                        })
                      : null,
                  ],
                })
              : (0, s.jsxs)(s.Fragment, {
                  children: [
                    (0, s.jsxs)(Q.Table, {
                      classNames: eo,
                      className: "!p-1",
                      stickyHeader: !0,
                      styles: { table: { minWidth: "1200px" } },
                      children: [
                        (0, s.jsx)(Q.Table.Thead, {
                          children: (0, s.jsxs)(Q.Table.Tr, {
                            children: [
                              (0, s.jsx)(Q.Table.Th, {
                                children: (0, s.jsx)("span", {
                                  className: "ml-[18px]",
                                  children: "Market",
                                }),
                              }),
                              (0, s.jsx)(Q.Table.Th, { children: "Direction" }),
                              (0, s.jsx)(Q.Table.Th, { children: "Size" }),
                              (0, s.jsx)(Q.Table.Th, {
                                children: "Position Value",
                              }),
                              (0, s.jsx)(Q.Table.Th, {
                                children: "Entry Price",
                              }),
                              (0, s.jsx)(Q.Table.Th, {
                                children: "Mark Price",
                              }),
                              (0, s.jsx)(Q.Table.Th, {
                                children: "PNL (ROE %)",
                              }),
                              !r &&
                                (0, s.jsx)(Q.Table.Th, { children: "Post" }),
                              (0, s.jsx)(Q.Table.Th, {
                                children: "Liquidation Price",
                              }),
                              (0, s.jsx)(Q.Table.Th, {
                                children: "Margin Used",
                              }),
                              (0, s.jsx)(Q.Table.Th, { children: "TP/SL" }),
                              !r &&
                                (0, s.jsx)(Q.Table.Th, {
                                  className: "!w-[100px] !max-w-[100px]",
                                  children: "Close",
                                }),
                            ],
                          }),
                        }),
                        (0, s.jsx)(Q.Table.Tbody, { children: ec }),
                      ],
                    }),
                    o?.length === 0
                      ? (0, s.jsx)("div", {
                          className: "mt-[10px]",
                          children: (0, s.jsx)(H.default, {
                            text: "No Positions",
                          }),
                        })
                      : null,
                  ],
                }),
            (0, s.jsx)(eu, {
              opened: U,
              close: () => {
                x(""), E(), er({});
              },
              currentTab: c,
              isMarket: m,
              coin: f,
              entryPrice: y,
              maxSize: h,
              currentPrice: j,
              stocksTradeIndex: L,
              collateral: es,
              maxLeverage: K,
              leverage: Z,
              liquidationPrice: S,
              isLong: "tpsl" === c ? _ : C,
              selectedAsset: ea,
            }),
            (0, s.jsx)(ef.default, {
              opened: z,
              onClose: () => {
                G(), B(""), A(null);
              },
              token: M,
              isLong: M?.isLong,
              tradeSource: "RWA_PERPS",
              pnl: M?.gains,
              pnlPercentage: M?.gainsPercentage,
              entryPrice: M?.price,
              uniqueTradeId: F,
              onSaveSuccess: () => {
                i.push("/feeds"), B(""), A(null);
              },
            }),
          ],
        });
      };
    var ew = e.i(744125),
      ey = e.i(600017);
    let eT = ({ variant: e = "tabs", isSocial: r = !1 }) => {
        let l = (0, eg.useIsMobile)(),
          i = (0, ep.useRouter)(),
          { ostiumOpenOrders: o, pairs: n } = (0, X.useOstiumStore)(
            (0, w.useShallow)((e) => ({
              ostiumOpenOrders: r
                ? e.socialOstiumOpenOrders
                : e.ostiumOpenOrders,
              pairs: e.pairs,
            }))
          ),
          [d, c] = (0, a.useState)(!1),
          { cancelOpenLimitOrder: x, cancelOpenMarketOrder: m } = (0,
          ee.useOstium)(),
          u = async (e) => {
            let t;
            try {
              let a;
              if (
                ((t = (0, ew.notifyLoadingToast)({
                  message: "Cancelling Order...",
                })),
                c(!0),
                e?.limitType === "LIMIT")
              ) {
                let s = e?.id?.split("_")[2],
                  t = e?.id?.split("_")[1];
                a = await x(Number(t), Number(s));
              } else
                e?.orderType === "Market" &&
                  (a = await m(Number(e?.id), e?.orderAction));
              a &&
                (0, ew.notifySuccessToast)({
                  message: "Order Cancelled",
                  icon: (0, s.jsx)(ey.default, { icon: "success" }),
                  id: t,
                });
            } catch (e) {
              (0, ew.notifyErrorToast)({
                message: "Couldn't cancel. Try again shortly.",
                icon: (0, s.jsx)(ey.default, { icon: "fail" }),
              });
            } finally {
              c(!1);
            }
          },
          h = (0, a.useCallback)(
            (e) => {
              let s = n?.find(
                (s) =>
                  s?.from?.toLowerCase() === e?.pair?.from?.toLowerCase() &&
                  s?.to?.toLowerCase() === e?.pair?.to?.toLowerCase()
              );
              return s?.mid;
            },
            [n]
          ),
          p = (e) => {
            i.push(`/rwa-perps?coin=${e}`);
          },
          f = (e) => {
            let s = e?.pair?.from,
              t = e?.pair?.to,
              a = `${s}/${t}`,
              r = new Date(e?.initiatedAt * 1e3),
              l = Number((0, q.formatUnits)(e?.collateral, 6)),
              i = Number(e?.leverage) / 100,
              o = `${r.getMonth() + 1}/${r.getDate()}/${r.getFullYear()}  — ${
                r.getHours() % 12 || 12
              }:${String(r.getMinutes()).padStart(2, "0")}:${String(
                r.getSeconds()
              ).padStart(2, "0")} ${r.getHours() >= 12 ? "PM" : "AM"}`,
              n = e?.isBuy;
            return {
              pair: a,
              collateral: l,
              leverage: i,
              formattedTime: o,
              isLong: n,
              currentPrice: h(e),
              openPrice: e?.openPrice
                ? Number((0, q.formatUnits)(e?.openPrice, 18))
                : "N/A",
            };
          },
          g = o
            ?.sort((e, s) => 1e3 * s.initiatedAt - 1e3 * e.initiatedAt)
            .map((e, a) => {
              let {
                pair: l,
                collateral: i,
                leverage: o,
                formattedTime: n,
                isLong: c,
                currentPrice: x,
                openPrice: m,
              } = f(e);
              return (0, s.jsxs)(
                Q.Table.Tr,
                {
                  children: [
                    (0, s.jsx)(Q.Table.Td, {
                      className: "cursor-pointer",
                      onClick: () => p(l),
                      children: (0, s.jsx)("div", {
                        className: "ml-2",
                        children: n,
                      }),
                    }),
                    (0, s.jsx)(Q.Table.Td, {
                      className: "font-medium",
                      children: e?.limitType ?? e?.orderType,
                    }),
                    (0, s.jsxs)(Q.Table.Td, {
                      className: "font-medium",
                      children: [e?.pair?.from, "/", e?.pair?.to],
                    }),
                    (0, s.jsx)(Q.Table.Td, {
                      children: (0, s.jsx)("span", {
                        className: (0, t.default)(
                          "inline-block w-[70px] text-center px-1 py-0.5 rounded-sm text-2xs font-medium",
                          {
                            "text-blood bg-blood/20 border border-blood/40": !c,
                            "text-grass bg-grass/20 border border-grass/40": c,
                          }
                        ),
                        children: (0, s.jsx)(s.Fragment, {
                          children: c ? "Long" : "Short",
                        }),
                      }),
                    }),
                    (0, s.jsx)(Q.Table.Td, {
                      className: "font-medium",
                      children: (0, b.convertIntl)(i),
                    }),
                    (0, s.jsx)(Q.Table.Td, {
                      children: 0 === o ? "N/A" : `${o}x`,
                    }),
                    (0, s.jsxs)(Q.Table.Td, {
                      children: ["$", (0, b.formatPrice)(Number(x))],
                    }),
                    (0, s.jsx)(Q.Table.Td, {
                      children:
                        "N/A" === m
                          ? "N/A"
                          : `$${(0, b.formatPrice)(Number(m))}`,
                    }),
                    !r &&
                      (0, s.jsx)(Q.Table.Td, {
                        className: "flex justify-end",
                        children: (0, s.jsx)("div", {
                          onClick: () => {
                            d || u(e);
                          },
                          className: "mr-2",
                          children: (0, s.jsx)("span", {
                            className: (0, t.default)(
                              "cursor-pointer text-slate-900 hover:text-blood bg-slate-900/10 hover:bg-blood/20 border border-slate-900/40 hover:border-blood/40 px-1 py-0.5 rounded-sm font-medium"
                            ),
                            children: "Cancel",
                          }),
                        }),
                      }),
                  ],
                },
                a
              );
            });
        return (0, s.jsxs)("div", {
          className: "overflow-auto h-full",
          children: [
            l
              ? (0, s.jsx)("div", {
                  className: "flex flex-col gap-3 p-2",
                  children: o
                    ?.sort((e, s) => 1e3 * s.initiatedAt - 1e3 * e.initiatedAt)
                    .map((e, a) =>
                      ((e, a) => {
                        let {
                          pair: l,
                          collateral: i,
                          leverage: o,
                          formattedTime: n,
                          isLong: c,
                          currentPrice: x,
                          openPrice: m,
                        } = f(e);
                        return (0, s.jsxs)(
                          "div",
                          {
                            className:
                              "flex flex-col gap-4 py-4 px-4 rounded-xl bg-neutral-900 border border-neutral-800 shadow-lg",
                            children: [
                              (0, s.jsxs)("div", {
                                className: "grid grid-cols-2 gap-y-4 gap-x-2",
                                children: [
                                  (0, s.jsxs)("div", {
                                    className:
                                      "flex flex-col gap-0.5 cursor-pointer",
                                    onClick: () => p(l),
                                    children: [
                                      (0, s.jsx)("span", {
                                        className:
                                          "text-neutral-500 text-xs font-normal",
                                        children: "Market",
                                      }),
                                      (0, s.jsx)("div", {
                                        className:
                                          "text-white text-base font-semibold",
                                        children: l,
                                      }),
                                    ],
                                  }),
                                  (0, s.jsxs)("div", {
                                    className: "flex flex-col gap-0.5",
                                    children: [
                                      (0, s.jsx)("span", {
                                        className:
                                          "text-neutral-500 text-xs font-normal",
                                        children: "Time",
                                      }),
                                      (0, s.jsx)("span", {
                                        className:
                                          "text-white text-xs font-medium",
                                        children: n,
                                      }),
                                    ],
                                  }),
                                  (0, s.jsxs)("div", {
                                    className: "flex flex-col gap-0.5",
                                    children: [
                                      (0, s.jsx)("span", {
                                        className:
                                          "text-neutral-500 text-xs font-normal",
                                        children: "Type",
                                      }),
                                      (0, s.jsx)("span", {
                                        className:
                                          "text-white text-xs font-medium",
                                        children: e?.limitType ?? e?.orderType,
                                      }),
                                    ],
                                  }),
                                  (0, s.jsxs)("div", {
                                    className: "flex flex-col gap-0.5",
                                    children: [
                                      (0, s.jsx)("span", {
                                        className:
                                          "text-neutral-500 text-xs font-normal",
                                        children: "Direction",
                                      }),
                                      (0, s.jsx)("span", {
                                        className: (0, t.default)(
                                          "text-xs font-medium",
                                          { "text-blood": !c, "text-grass": c }
                                        ),
                                        children: c ? "Long" : "Short",
                                      }),
                                    ],
                                  }),
                                  (0, s.jsxs)("div", {
                                    className: "flex flex-col gap-0.5",
                                    children: [
                                      (0, s.jsx)("span", {
                                        className:
                                          "text-neutral-500 text-xs font-normal",
                                        children: "Collateral",
                                      }),
                                      (0, s.jsx)("span", {
                                        className:
                                          "text-white text-xs font-medium",
                                        children: (0, b.convertIntl)(i),
                                      }),
                                    ],
                                  }),
                                  (0, s.jsxs)("div", {
                                    className: "flex flex-col gap-0.5",
                                    children: [
                                      (0, s.jsx)("span", {
                                        className:
                                          "text-neutral-500 text-xs font-normal",
                                        children: "Leverage",
                                      }),
                                      (0, s.jsx)("span", {
                                        className:
                                          "text-white text-xs font-medium",
                                        children: 0 === o ? "N/A" : `${o}x`,
                                      }),
                                    ],
                                  }),
                                  (0, s.jsxs)("div", {
                                    className: "flex flex-col gap-0.5",
                                    children: [
                                      (0, s.jsx)("span", {
                                        className:
                                          "text-neutral-500 text-xs font-normal",
                                        children: "Price",
                                      }),
                                      (0, s.jsxs)("span", {
                                        className:
                                          "text-white text-xs font-medium",
                                        children: [
                                          "$",
                                          (0, b.formatPrice)(Number(x)),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, s.jsxs)("div", {
                                    className: "flex flex-col gap-0.5",
                                    children: [
                                      (0, s.jsx)("span", {
                                        className:
                                          "text-neutral-500 text-xs font-normal",
                                        children: "Trigger Condition",
                                      }),
                                      (0, s.jsx)("span", {
                                        className:
                                          "text-white text-xs font-medium",
                                        children:
                                          "N/A" === m
                                            ? "N/A"
                                            : `$${(0, b.formatPrice)(
                                                Number(m)
                                              )}`,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              !r &&
                                (0, s.jsx)("div", {
                                  className:
                                    "flex items-center gap-4 pt-3 border-t border-white/5 mt-1",
                                  children: (0, s.jsx)("span", {
                                    className:
                                      "text-brand-blue text-xs font-semibold cursor-pointer hover:opacity-80 transition-opacity",
                                    onClick: () => {
                                      d || u(e);
                                    },
                                    children: "Cancel",
                                  }),
                                }),
                            ],
                          },
                          a
                        );
                      })(e, a)
                    ),
                })
              : (0, s.jsxs)(Q.Table, {
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
                          table: "!min-w-[1200px] overflow-x-auto",
                          th: "!pl-0.5 !py-2 !font-normal !text-xs !text-slate-900 !border-ash !border-b bg-transparent",
                          td: "!pl-0.5 !py-1 !text-xs",
                          tr: "!border-[#1f222c]/90",
                        },
                  className: "!p-1",
                  stickyHeader: !0,
                  styles: { table: { minWidth: "1200px" } },
                  children: [
                    (0, s.jsx)(Q.Table.Thead, {
                      children: (0, s.jsxs)(Q.Table.Tr, {
                        children: [
                          (0, s.jsx)(Q.Table.Th, {
                            className: "!w-[250px] !max-w-[250px]",
                            children: (0, s.jsx)("div", {
                              className: "ml-2",
                              children: "Time",
                            }),
                          }),
                          (0, s.jsx)(Q.Table.Th, { children: "Type" }),
                          (0, s.jsx)(Q.Table.Th, { children: "Market" }),
                          (0, s.jsx)(Q.Table.Th, {
                            className: "!w-[120px] !max-w-[120px]",
                            children: "Direction",
                          }),
                          (0, s.jsx)(Q.Table.Th, { children: "Collateral" }),
                          (0, s.jsx)(Q.Table.Th, { children: "Leverage" }),
                          (0, s.jsx)(Q.Table.Th, {
                            className: "!w-[100px] !max-w-[100px]",
                            children: "Price",
                          }),
                          (0, s.jsx)(Q.Table.Th, {
                            className: "!w-[120px] !max-w-[120px]",
                            children: "Trigger Condition",
                          }),
                          !r &&
                            (0, s.jsx)(Q.Table.Th, {
                              className:
                                "text-right !w-[100px] !max-w-[100px] cursor-pointer hover:!text-blood",
                              children: (0, s.jsx)("span", {
                                className: "mr-2",
                                children: "Action",
                              }),
                            }),
                        ],
                      }),
                    }),
                    (0, s.jsx)(Q.Table.Tbody, { children: g }),
                  ],
                }),
            0 === o.length
              ? (0, s.jsx)("div", {
                  className: "mt-[10px]",
                  children: (0, s.jsx)(H.default, { text: "No Open Orders" }),
                })
              : null,
          ],
        });
      },
      eS = ({ variant: e = "tabs", isSocial: a = !1 }) => {
        let r = (0, eg.useIsMobile)(),
          l = (0, ep.useRouter)(),
          { ostiumOrderHistory: i } = (0, X.useOstiumStore)(
            (0, w.useShallow)((e) => ({
              ostiumOrderHistory: a
                ? e.socialOstiumOrderHistory
                : e.ostiumOrderHistory,
            }))
          ),
          o = "gtr" === e,
          n = o
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
              },
          d = (e) => {
            l.push(`/rwa-perps?coin=${e}`);
          },
          c = (e) => {
            let s = e?.pair?.from,
              t = e?.pair?.to,
              a = `${s}/${t}`,
              r = new Date(e?.executedAt * 1e3),
              l = `${r.getMonth() + 1}/${r.getDate()}/${r.getFullYear()}  — ${
                r.getHours() % 12 || 12
              }:${String(r.getMinutes()).padStart(2, "0")}:${String(
                r.getSeconds()
              ).padStart(2, "0")} ${r.getHours() >= 12 ? "PM" : "AM"}`,
              i = e?.isBuy,
              o = Math.abs(Number((0, q.formatUnits)(e?.tradeNotional, 18)));
            return {
              pair: a,
              formattedTime: l,
              isLong: i,
              filledSize: o,
              price: Number((0, q.formatUnits)(e?.price, 18)),
              status: e?.isCancelled ? "Cancelled" : "Filled",
            };
          },
          x = i
            ?.sort((e, s) => s.executedAt - e.executedAt)
            .map((e, a) => {
              let {
                pair: r,
                formattedTime: l,
                isLong: i,
                filledSize: n,
                price: x,
                status: m,
              } = c(e);
              return (0, s.jsxs)(
                Q.Table.Tr,
                {
                  children: [
                    (0, s.jsx)(Q.Table.Td, {
                      className: "cursor-pointer",
                      onClick: () => d(r),
                      children: (0, s.jsx)("div", {
                        className: "ml-2",
                        children: l,
                      }),
                    }),
                    (0, s.jsx)(Q.Table.Td, { children: e?.orderType }),
                    (0, s.jsx)(Q.Table.Td, { children: r }),
                    (0, s.jsx)(Q.Table.Td, {
                      children: (0, s.jsx)("span", {
                        className: (0, t.default)(
                          "inline-block text-center px-1 py-0.5 rounded-sm text-2xs font-medium uppercase",
                          {
                            "w-[80px]": !0,
                            "text-grass bg-grass/20 border border-grass/40":
                              i && e?.orderAction === "Open",
                            "text-blood bg-blood/20 border border-blood/40":
                              !i || e?.orderAction !== "Open",
                          }
                        ),
                        children:
                          e?.orderAction === "Open"
                            ? (0, s.jsx)(s.Fragment, {
                                children: i ? "Long" : "Short",
                              })
                            : (0, s.jsxs)(s.Fragment, {
                                children: ["Close ", i ? "Long" : "Short"],
                              }),
                      }),
                    }),
                    (0, s.jsx)(Q.Table.Td, {
                      children: (0, b.convertIntl)(n, !1),
                    }),
                    (0, s.jsxs)(Q.Table.Td, {
                      className: "flex flex-col",
                      children: [
                        (0, s.jsx)("div", {
                          className: "text-sm font-medium",
                          children: e?.orderAction,
                        }),
                        (0, s.jsxs)("div", {
                          className: (0, t.default)("!text-xs", {
                            "!text-slate-900": !o,
                            "!text-neutral-500": o,
                          }),
                          children: [e?.orderType, " Order"],
                        }),
                      ],
                    }),
                    (0, s.jsxs)(Q.Table.Td, {
                      children: ["$", (0, b.convertIntlV2)(x, !0)],
                    }),
                    (0, s.jsx)(Q.Table.Td, {
                      className: "capitalize",
                      children: m,
                    }),
                    (0, s.jsx)(Q.Table.Td, {
                      className: "text-right",
                      children: (0, s.jsx)("span", {
                        className: "mr-2",
                        children: e?.id,
                      }),
                    }),
                  ],
                },
                a
              );
            });
        return (0, s.jsxs)("div", {
          className: "overflow-auto h-full",
          children: [
            r
              ? (0, s.jsx)("div", {
                  className: "flex flex-col gap-3 p-2",
                  children: i
                    ?.sort((e, s) => s.executedAt - e.executedAt)
                    .map((e, a) =>
                      ((e, a) => {
                        let {
                          pair: r,
                          formattedTime: l,
                          isLong: i,
                          filledSize: o,
                          price: n,
                          status: x,
                        } = c(e);
                        return (0, s.jsx)(
                          "div",
                          {
                            className:
                              "flex flex-col gap-4 py-4 px-4 rounded-xl bg-neutral-900 border border-neutral-800 shadow-lg",
                            children: (0, s.jsxs)("div", {
                              className: "grid grid-cols-2 gap-y-4 gap-x-2",
                              children: [
                                (0, s.jsxs)("div", {
                                  className:
                                    "flex flex-col gap-0.5 cursor-pointer",
                                  onClick: () => d(r),
                                  children: [
                                    (0, s.jsx)("span", {
                                      className:
                                        "text-neutral-500 text-xs font-normal",
                                      children: "Market",
                                    }),
                                    (0, s.jsx)("div", {
                                      className:
                                        "text-white text-base font-semibold",
                                      children: r,
                                    }),
                                  ],
                                }),
                                (0, s.jsxs)("div", {
                                  className: "flex flex-col gap-0.5",
                                  children: [
                                    (0, s.jsx)("span", {
                                      className:
                                        "text-neutral-500 text-xs font-normal",
                                      children: "Time",
                                    }),
                                    (0, s.jsx)("span", {
                                      className:
                                        "text-white text-xs font-medium",
                                      children: l,
                                    }),
                                  ],
                                }),
                                (0, s.jsxs)("div", {
                                  className: "flex flex-col gap-0.5",
                                  children: [
                                    (0, s.jsx)("span", {
                                      className:
                                        "text-neutral-500 text-xs font-normal",
                                      children: "Operation",
                                    }),
                                    (0, s.jsxs)("span", {
                                      className:
                                        "text-white text-xs font-medium capitalize",
                                      children: [
                                        e?.orderAction,
                                        " ",
                                        e?.orderType,
                                      ],
                                    }),
                                  ],
                                }),
                                (0, s.jsxs)("div", {
                                  className: "flex flex-col gap-0.5",
                                  children: [
                                    (0, s.jsx)("span", {
                                      className:
                                        "text-neutral-500 text-xs font-normal",
                                      children: "Direction",
                                    }),
                                    (0, s.jsx)("span", {
                                      className: (0, t.default)(
                                        "text-xs font-medium uppercase",
                                        {
                                          "text-grass":
                                            i && e?.orderAction === "Open",
                                          "text-blood":
                                            !i || e?.orderAction !== "Open",
                                        }
                                      ),
                                      children:
                                        e?.orderAction === "Open"
                                          ? (0, s.jsx)(s.Fragment, {
                                              children: i ? "Long" : "Short",
                                            })
                                          : (0, s.jsxs)(s.Fragment, {
                                              children: [
                                                "Close ",
                                                i ? "Long" : "Short",
                                              ],
                                            }),
                                    }),
                                  ],
                                }),
                                (0, s.jsxs)("div", {
                                  className: "flex flex-col gap-0.5",
                                  children: [
                                    (0, s.jsx)("span", {
                                      className:
                                        "text-neutral-500 text-xs font-normal",
                                      children: "Filled Size",
                                    }),
                                    (0, s.jsx)("span", {
                                      className:
                                        "text-white text-xs font-medium",
                                      children: (0, b.convertIntlV2)(o, !1),
                                    }),
                                  ],
                                }),
                                (0, s.jsxs)("div", {
                                  className: "flex flex-col gap-0.5",
                                  children: [
                                    (0, s.jsx)("span", {
                                      className:
                                        "text-neutral-500 text-xs font-normal",
                                      children: "Price",
                                    }),
                                    (0, s.jsx)("span", {
                                      className:
                                        "text-white text-xs font-medium",
                                      children: (0, b.convertIntlV2)(n, !0),
                                    }),
                                  ],
                                }),
                                (0, s.jsxs)("div", {
                                  className: "flex flex-col gap-0.5",
                                  children: [
                                    (0, s.jsx)("span", {
                                      className:
                                        "text-neutral-500 text-xs font-normal",
                                      children: "Status",
                                    }),
                                    (0, s.jsx)("span", {
                                      className:
                                        "text-white text-xs font-medium capitalize",
                                      children: x,
                                    }),
                                  ],
                                }),
                                (0, s.jsxs)("div", {
                                  className: "flex flex-col gap-0.5",
                                  children: [
                                    (0, s.jsx)("span", {
                                      className:
                                        "text-neutral-500 text-xs font-normal",
                                      children: "Order ID",
                                    }),
                                    (0, s.jsx)("span", {
                                      className:
                                        "text-white text-xs font-medium break-all",
                                      children: e?.id,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          },
                          a
                        );
                      })(e, a)
                    ),
                })
              : (0, s.jsxs)(Q.Table, {
                  classNames: n,
                  className: "!p-1",
                  stickyHeader: !0,
                  styles: { table: { minWidth: "1200px" } },
                  children: [
                    (0, s.jsx)(Q.Table.Thead, {
                      children: (0, s.jsxs)(Q.Table.Tr, {
                        children: [
                          (0, s.jsx)(Q.Table.Th, {
                            children: (0, s.jsx)("div", {
                              className: "ml-2",
                              children: "Time",
                            }),
                          }),
                          (0, s.jsx)(Q.Table.Th, { children: "Type" }),
                          (0, s.jsx)(Q.Table.Th, { children: "Coin" }),
                          (0, s.jsx)(Q.Table.Th, { children: "Direction" }),
                          (0, s.jsx)(Q.Table.Th, { children: "Filled Size" }),
                          (0, s.jsx)(Q.Table.Th, {
                            children: "Operation & Type",
                          }),
                          (0, s.jsx)(Q.Table.Th, { children: "Price" }),
                          (0, s.jsx)(Q.Table.Th, { children: "Status" }),
                          (0, s.jsx)(Q.Table.Th, {
                            className: "text-right",
                            children: (0, s.jsx)("span", {
                              className: "mr-2",
                              children: "Order ID",
                            }),
                          }),
                        ],
                      }),
                    }),
                    (0, s.jsx)(Q.Table.Tbody, { children: x }),
                  ],
                }),
            0 === i.length
              ? (0, s.jsx)("div", {
                  className: "mt-[10px]",
                  children: (0, s.jsx)(H.default, { text: "No Data" }),
                })
              : null,
          ],
        });
      };
    var eP = e.i(722071),
      eC = e.i(2710),
      ek = e.i(129277),
      eL = e.i(729895),
      e$ = e.i(416059),
      eO = e.i(24535),
      eI = e.i(963327),
      eM = e.i(785642),
      eA = e.i(266459);
    let eF = ({ opened: e, close: l, tradeItem: i, leverage: o = 1 }) => {
      let { pairs: d } = (0, X.useOstiumStore)(
          (0, w.useShallow)((e) => ({ pairs: e.pairs }))
        ),
        [c, m] = (0, a.useState)(null),
        u = (0, a.useRef)(null),
        { referralCode: h } = (0, r.useProfileStore)((e) => e.profileData),
        [p, f] = (0, a.useState)(""),
        g = (0, eg.useIsMobile)();
      (0, a.useEffect)(() => {
        i?.pair?.from &&
          i?.pair?.to &&
          f(`Trade ${i?.pair?.from}/${i?.pair?.to} seamlessly on @GTRTrade`);
      }, [i]),
        (0, a.useEffect)(() => {
          if (d?.length) {
            let e = d.find((e) => e.from === i?.pair?.from);
            m(e?.mid);
          }
        }, [d, i]);
      let N = async () => {
          if (u.current)
            try {
              let e = await (0, eA.toPng)(u.current, { cacheBust: !0 }),
                s = document.createElement("a");
              (s.href = e),
                (s.download = `GTR Trade ${i?.pair?.from}/${i?.pair?.to} PnL.png`),
                document.body.appendChild(s),
                s.click(),
                document.body.removeChild(s);
            } catch (e) {
              console.error("Screenshot failed:", e),
                er.notifications.show({
                  color: "red",
                  message: "Failed to save image. Please try again.",
                  position: "top-center",
                  autoClose: 2e3,
                });
            }
        },
        j = `https://gtr.trade/?ref=${h}`,
        v = i?.profitPercent?.toString()?.startsWith("-"),
        y = (0, s.jsx)("div", {
          className: "p-6 pt-0 bg-[#15161C]",
          children: (0, s.jsxs)("div", {
            className: (0, t.default)("flex gap-6", {
              "flex-col": g,
              "flex-row": !g,
            }),
            children: [
              (0, s.jsx)("div", {
                className: (0, t.default)("flex-shrink-0", {
                  "w-full overflow-hidden flex justify-center": g,
                }),
                children: (0, s.jsxs)("div", {
                  ref: u,
                  style: {
                    width: "606px",
                    height: "409px",
                    backgroundImage:
                      Number(i?.profitPercent) >= 0
                        ? `url(${e$.default.src})`
                        : `url(${eO.default.src})`,
                    backgroundSize: g ? "cover" : "120%",
                    transform: g ? "scale(calc((100vw - 48px) / 606))" : "none",
                    transformOrigin: "top left",
                  },
                  className:
                    "bg-no-repeat p-7 rounded-lg flex flex-col justify-between bg-[#07130F] border border-[#2D313C]",
                  children: [
                    (0, s.jsx)(x.default, {
                      src: eI.default,
                      alt: "Logo - PNL",
                      width: 262,
                      className: "mb-4 sm:mb-0",
                    }),
                    (0, s.jsxs)("div", {
                      children: [
                        (0, s.jsxs)("div", {
                          className: "flex items-center gap-2",
                          children: [
                            (0, s.jsxs)("p", {
                              className:
                                "text-2xl leading-none font-medium flex items-center h-8",
                              children: [i?.pair?.from, "/", i?.pair?.to],
                            }),
                            (0, s.jsxs)("div", {
                              className: (0, t.default)(
                                "ml-2 px-2.5 w-[160px] h-8 py-0 rounded-sm text-[22px] leading-none font-medium uppercase text-center flex justify-center items-center",
                                {
                                  "text-grass bg-grass/20 border border-grass/40":
                                    i?.isBuy,
                                  "text-blood bg-blood/20 border border-blood/40":
                                    !i?.isBuy,
                                }
                              ),
                              children: [
                                i?.isBuy ? "LONG" : "SHORT",
                                " ",
                                o,
                                "x",
                              ],
                            }),
                          ],
                        }),
                        i
                          ? (0, s.jsxs)("h1", {
                              className: (0, t.default)(
                                "mt-6 mb-16 p-0 text-[80px] tracking-[-6px] font-medium leading-[88%]",
                                {
                                  "text-grass": i?.profitPercent >= 0,
                                  "text-blood": i?.profitPercent < 0,
                                }
                              ),
                              children: [
                                v ? "" : "+",
                                Number(
                                  (0, q.formatUnits)(i?.profitPercent, 6)
                                )?.toFixed(2),
                                "%",
                              ],
                            })
                          : null,
                        (0, s.jsxs)("div", {
                          className: "flex justify-between gap-10 flex-wrap",
                          children: [
                            (0, s.jsxs)("div", {
                              className: "flex gap-12",
                              children: [
                                i
                                  ? (0, s.jsxs)("div", {
                                      className: "flex flex-col gap-1",
                                      children: [
                                        (0, s.jsx)("p", {
                                          className:
                                            "text-white font-normal text-sm leading-[128%]",
                                          children: "Executed Price",
                                        }),
                                        (0, s.jsxs)("p", {
                                          className:
                                            "text-white text-lg font-medium",
                                          children: [
                                            "$",
                                            `${(0, b.convertIntl)(
                                              (0, b.roundedNumber)(
                                                Number(
                                                  (0, q.formatUnits)(
                                                    i?.price,
                                                    18
                                                  )
                                                )
                                              ),
                                              !1
                                            )}`,
                                          ],
                                        }),
                                      ],
                                    })
                                  : null,
                                (0, s.jsxs)("div", {
                                  className: "flex flex-col gap-1",
                                  children: [
                                    (0, s.jsx)("p", {
                                      className:
                                        "text-white font-normal text-sm leading-[128%]",
                                      children: "Mark Price",
                                    }),
                                    d?.length
                                      ? (0, s.jsx)("p", {
                                          className:
                                            "text-white text-lg font-medium",
                                          children: (0, b.convertIntl)(
                                            (0, b.roundedNumber)(c)
                                          ),
                                        })
                                      : (0, s.jsx)(n.Loader, {
                                          type: "dots",
                                          color: "white",
                                          size: "sm",
                                        }),
                                  ],
                                }),
                              ],
                            }),
                            (0, s.jsx)("div", {
                              className:
                                "flex items-start sm:items-end justify-between flex-1",
                              children: (0, s.jsxs)("div", {
                                className:
                                  "flex flex-col gap-1 items-start sm:items-end w-full",
                                children: [
                                  (0, s.jsx)("p", {
                                    className:
                                      "text-white text-sm font-normal leading-[128%]",
                                    children: "Referral code",
                                  }),
                                  (0, s.jsx)("p", {
                                    className: (0, t.default)(
                                      "text-lg font-medium text-white text-left sm:text-right min-w-[250px]"
                                    ),
                                    children: j,
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
              (0, s.jsxs)("div", {
                className: (0, t.default)(
                  "pt-1 pb-2 flex flex-col justify-between",
                  { "w-[30%] min-h-[400px]": !g, "w-full gap-8": g }
                ),
                children: [
                  (0, s.jsxs)("div", {
                    className: (0, t.default)("flex flex-col w-full", {
                      "gap-12": !g,
                      "gap-6": g,
                    }),
                    children: [
                      (0, s.jsxs)("div", {
                        className: "flex flex-col gap-4",
                        children: [
                          (0, s.jsx)("p", {
                            className:
                              "text-xs font-normal leading-[10px] text-slate-800",
                            children: "Referral Code",
                          }),
                          (0, s.jsx)("p", {
                            className:
                              "text-white text-sm leading-[10px] font-medium",
                            children: j,
                          }),
                        ],
                      }),
                      (0, s.jsxs)("div", {
                        className: "flex flex-col gap-4 w-full",
                        children: [
                          (0, s.jsx)("p", {
                            className:
                              "text-xs font-normal leading-[10px] text-slate-800",
                            children: "Customize your text",
                          }),
                          (0, s.jsx)(eL.Textarea, {
                            value: p,
                            unstyled: !0,
                            rows: 4,
                            onChange: (e) => f(e.target.value),
                            classNames: {
                              input:
                                "bg-black/40 w-full py-2 px-2.5 rounded !outline-none text-sm text-white font-normal border border-slate-500",
                            },
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    className: (0, t.default)("flex flex-col gap-2", {
                      "mt-4": g,
                    }),
                    children: [
                      (0, s.jsxs)("div", {
                        className: "flex gap-2",
                        children: [
                          (0, s.jsx)(Y.Button, {
                            unstyled: !0,
                            className:
                              "text-black !outline:none text-sm font-semibold bg-white hover:bg-white/90 rounded h-8 w-1/2",
                            onClick: N,
                            children: "Save Image",
                          }),
                          (0, s.jsx)(eP.CopyButton, {
                            value: j,
                            children: ({ copy: e }) =>
                              (0, s.jsx)(Y.Button, {
                                unstyled: !0,
                                onClick: () => {
                                  e(),
                                    er.notifications.show({
                                      color: "#00AC66",
                                      message: "Copied Successfully",
                                      position: "top-center",
                                      autoClose: 2e3,
                                      icon: (0, s.jsx)(eM.IconCircleCheck, {
                                        className: "text-black bg-transparent",
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
                      (0, s.jsx)(Y.Button, {
                        unstyled: !0,
                        className:
                          "text-black !outline:none text-sm font-semibold bg-white hover:bg-white/90 rounded h-8 w-full",
                        onClick: () => {
                          window.open(
                            `https://x.com/intent/post?url=${encodeURIComponent(
                              j
                            )}&text=${encodeURIComponent(p)}`,
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
      return g
        ? (0, s.jsx)(eC.Drawer, {
            opened: e,
            onClose: l,
            position: "bottom",
            size: "90%",
            title: (0, s.jsx)("p", {
              className: "text-white text-md font-medium leading-[88%]",
              children: "Share PnL",
            }),
            classNames: {
              header: "!bg-[#15161C] !p-6 !pb-4",
              body: "!p-0 bg-[#15161C]",
              close: "!text-white hover:!bg-slate-200 hover:!text-white/60",
              content: "!rounded-t-2xl !border-t border-[#1F2126]",
            },
            children: y,
          })
        : (0, s.jsx)(ek.Modal, {
            opened: e,
            onClose: l,
            centered: !0,
            title: (0, s.jsx)("p", {
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
            children: y,
          });
    };
    var eB = e.i(308794);
    let eU = ({ variant: e = "tabs", isSocial: r = !1 }) => {
      let l = (0, eg.useIsMobile)(),
        i = (0, ep.useRouter)(),
        { ostiumCompletedTrades: o } = (0, X.useOstiumStore)(
          (0, w.useShallow)((e) => ({
            ostiumCompletedTrades: r
              ? e.socialOstiumCompletedTrades
              : e.ostiumCompletedTrades,
          }))
        ),
        [n, d] = (0, a.useState)(null),
        [c, { open: x, close: m }] = (0, g.useDisclosure)(!1),
        u = "gtr" === e,
        h = u
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
            },
        p = (e) => {
          i.push(`/rwa-perps?coin=${e}`);
        },
        f = (e) => {
          let s = e?.pair?.from,
            t = e?.pair?.to,
            a = `${s}/${t}`,
            r = new Date(e?.executedAt * 1e3),
            l = Number((0, q.formatUnits)(e?.collateral, 6)),
            i = Number(e?.leverage) / 100,
            o = `${r.getMonth() + 1}/${r.getDate()}/${r.getFullYear()}  — ${
              r.getHours() % 12 || 12
            }:${String(r.getMinutes()).padStart(2, "0")}:${String(
              r.getSeconds()
            ).padStart(2, "0")} ${r.getHours() >= 12 ? "PM" : "AM"}`,
            n = e?.isBuy;
          return {
            pair: a,
            collateral: l,
            leverage: i,
            formattedTime: o,
            isLong: n,
            isLoss: e?.profitPercent?.toString()?.startsWith("-"),
            pnl: Number(
              (Number((0, q.formatUnits)(e?.profitPercent, 6)) *
                Number((0, q.formatUnits)(e?.collateral, 6))) /
                100
            ),
          };
        },
        N = (e) => {
          d(e), x();
        },
        j = o
          ?.sort((e, s) => 1e3 * s.executedAt - 1e3 * e.executedAt)
          .map((e, a) => {
            let {
              pair: l,
              collateral: i,
              leverage: o,
              formattedTime: n,
              isLong: d,
              isLoss: c,
              pnl: x,
            } = f(e);
            return (0, s.jsxs)(
              Q.Table.Tr,
              {
                children: [
                  (0, s.jsx)(Q.Table.Td, {
                    className: "cursor-pointer",
                    onClick: () => p(l),
                    children: (0, s.jsx)("div", {
                      className: "ml-2",
                      children: n,
                    }),
                  }),
                  (0, s.jsx)(Q.Table.Td, {
                    className: "font-medium",
                    children: l,
                  }),
                  (0, s.jsxs)(Q.Table.Td, {
                    className: "flex flex-col ",
                    children: [
                      (0, s.jsx)("div", {
                        className: "text-sm font-medium",
                        children: e?.orderAction
                          ?.replace(/([A-Z])/g, " $1")
                          .trim(),
                      }),
                      (0, s.jsxs)("div", {
                        className: (0, t.default)("!text-xs", {
                          "!text-slate-900": !u,
                          "!text-neutral-500": u,
                        }),
                        children: [e?.orderType, " Order"],
                      }),
                    ],
                  }),
                  (0, s.jsx)(Q.Table.Td, {
                    children: (0, s.jsx)("span", {
                      className: (0, t.default)(
                        "inline-block w-[70px] text-center px-1 py-0.5 rounded-sm text-2xs font-medium",
                        {
                          "text-blood bg-blood/20 border border-blood/40": !d,
                          "text-grass bg-grass/20 border border-grass/40": d,
                        }
                      ),
                      children: (0, s.jsx)(s.Fragment, {
                        children: d ? "LONG" : "SHORT",
                      }),
                    }),
                  }),
                  (0, s.jsx)(Q.Table.Td, {
                    className: "font-medium",
                    children: (0, b.convertIntl)(i),
                  }),
                  (0, s.jsx)(Q.Table.Td, {
                    children: 0 === o ? "N/A" : `${o}x`,
                  }),
                  (0, s.jsx)(Q.Table.Td, {
                    children: (0, s.jsxs)("div", {
                      className: "flex items-center gap-1",
                      children: [
                        (0, s.jsxs)("div", {
                          className: (0, t.default)({
                            "text-long-text": c,
                            "text-short-text": !c,
                          }),
                          children: [c ? "" : "+", (0, b.convertIntlV2)(x, !1)],
                        }),
                        !r &&
                          (0, s.jsx)("div", {
                            className: "group p-1 cursor-pointer",
                            onClick: () => N(e),
                            children: (0, s.jsx)(eB.IconShare2, {
                              size: 15,
                              className: (0, t.default)(
                                "transition-colors duration-300",
                                {
                                  "text-slate-900 group-hover:text-white": !u,
                                  "text-neutral-500 group-hover:text-white": u,
                                }
                              ),
                            }),
                          }),
                      ],
                    }),
                  }),
                ],
              },
              a
            );
          });
      return (0, s.jsxs)("div", {
        className: "overflow-auto h-full",
        children: [
          l
            ? (0, s.jsx)("div", {
                className: "flex flex-col gap-3 p-2",
                children: o
                  ?.sort((e, s) => 1e3 * s.executedAt - 1e3 * e.executedAt)
                  .map((e, a) =>
                    ((e, a) => {
                      let {
                        pair: l,
                        collateral: i,
                        leverage: o,
                        formattedTime: n,
                        isLong: d,
                        isLoss: c,
                        pnl: x,
                      } = f(e);
                      return (0, s.jsx)(
                        "div",
                        {
                          className:
                            "flex flex-col gap-4 py-4 px-4 rounded-xl bg-neutral-900 border border-neutral-800 shadow-lg",
                          children: (0, s.jsxs)("div", {
                            className: "grid grid-cols-2 gap-y-4 gap-x-2",
                            children: [
                              (0, s.jsxs)("div", {
                                className:
                                  "flex flex-col gap-0.5 cursor-pointer",
                                onClick: () => p(l),
                                children: [
                                  (0, s.jsx)("span", {
                                    className:
                                      "text-neutral-500 text-xs font-normal",
                                    children: "Market",
                                  }),
                                  (0, s.jsx)("div", {
                                    className:
                                      "text-white text-base font-semibold",
                                    children: l,
                                  }),
                                ],
                              }),
                              (0, s.jsxs)("div", {
                                className: "flex flex-col gap-0.5",
                                children: [
                                  (0, s.jsx)("span", {
                                    className:
                                      "text-neutral-500 text-xs font-normal",
                                    children: "Time",
                                  }),
                                  (0, s.jsx)("span", {
                                    className: "text-white text-xs font-medium",
                                    children: n,
                                  }),
                                ],
                              }),
                              (0, s.jsxs)("div", {
                                className: "flex flex-col gap-0.5",
                                children: [
                                  (0, s.jsx)("span", {
                                    className:
                                      "text-neutral-500 text-xs font-normal",
                                    children: "Operation",
                                  }),
                                  (0, s.jsxs)("span", {
                                    className: "text-white text-xs font-medium",
                                    children: [
                                      e?.orderAction
                                        ?.replace(/([A-Z])/g, " $1")
                                        .trim(),
                                      " ",
                                      e?.orderType,
                                      " Order",
                                    ],
                                  }),
                                ],
                              }),
                              (0, s.jsxs)("div", {
                                className: "flex flex-col gap-0.5",
                                children: [
                                  (0, s.jsx)("span", {
                                    className:
                                      "text-neutral-500 text-xs font-normal",
                                    children: "Direction",
                                  }),
                                  (0, s.jsx)("span", {
                                    className: (0, t.default)(
                                      "text-xs font-medium",
                                      { "text-blood": !d, "text-grass": d }
                                    ),
                                    children: d ? "LONG" : "SHORT",
                                  }),
                                ],
                              }),
                              (0, s.jsxs)("div", {
                                className: "flex flex-col gap-0.5",
                                children: [
                                  (0, s.jsx)("span", {
                                    className:
                                      "text-neutral-500 text-xs font-normal",
                                    children: "Collateral",
                                  }),
                                  (0, s.jsx)("span", {
                                    className: "text-white text-xs font-medium",
                                    children: (0, b.convertIntl)(i),
                                  }),
                                ],
                              }),
                              (0, s.jsxs)("div", {
                                className: "flex flex-col gap-0.5",
                                children: [
                                  (0, s.jsx)("span", {
                                    className:
                                      "text-neutral-500 text-xs font-normal",
                                    children: "Leverage",
                                  }),
                                  (0, s.jsx)("span", {
                                    className: "text-white text-xs font-medium",
                                    children: 0 === o ? "N/A" : `${o}x`,
                                  }),
                                ],
                              }),
                              (0, s.jsxs)("div", {
                                className: "flex flex-col gap-0.5",
                                children: [
                                  (0, s.jsx)("span", {
                                    className:
                                      "text-neutral-500 text-xs font-normal",
                                    children: "Net P/L",
                                  }),
                                  (0, s.jsxs)("div", {
                                    className: (0, t.default)(
                                      "text-xs font-medium",
                                      {
                                        "text-long-text": c,
                                        "text-short-text": !c,
                                      }
                                    ),
                                    children: [
                                      c ? "" : "+",
                                      (0, b.convertIntlV2)(x, !1),
                                    ],
                                  }),
                                ],
                              }),
                              !r &&
                                (0, s.jsx)("div", {
                                  className: "flex items-center justify-end",
                                  children: (0, s.jsx)("div", {
                                    className:
                                      "p-1.5 rounded-lg bg-neutral-800 border border-neutral-700 hover:bg-neutral-700 transition-all cursor-pointer",
                                    onClick: () => N(e),
                                    children: (0, s.jsx)(eB.IconShare2, {
                                      size: 16,
                                      className: "text-white",
                                    }),
                                  }),
                                }),
                            ],
                          }),
                        },
                        a
                      );
                    })(e, a)
                  ),
              })
            : (0, s.jsxs)(Q.Table, {
                classNames: h,
                className: "!p-1",
                stickyHeader: !0,
                styles: { table: { minWidth: "1200px" } },
                children: [
                  (0, s.jsx)(Q.Table.Thead, {
                    children: (0, s.jsxs)(Q.Table.Tr, {
                      children: [
                        (0, s.jsx)(Q.Table.Th, {
                          className: "!w-[200px] !max-w-[220px]",
                          children: (0, s.jsx)("div", {
                            className: "ml-2",
                            children: "Time",
                          }),
                        }),
                        (0, s.jsx)(Q.Table.Th, {
                          className: "!w-[120px] !max-w-[140px]",
                          children: "Market",
                        }),
                        (0, s.jsx)(Q.Table.Th, {
                          className: "!w-[150px] !max-w-[200px]",
                          children: "Operation & Type",
                        }),
                        (0, s.jsx)(Q.Table.Th, {
                          className: "!w-[120px] !max-w-[140px]",
                          children: "Direction",
                        }),
                        (0, s.jsx)(Q.Table.Th, {
                          className: "!w-[120px] !max-w-[140px]",
                          children: "Collateral",
                        }),
                        (0, s.jsx)(Q.Table.Th, {
                          className: "!w-[120px] !max-w-[140px]",
                          children: "Leverage",
                        }),
                        (0, s.jsx)(Q.Table.Th, {
                          className: "!w-[120px] !max-w-[140px]",
                          children: "Net P/L",
                        }),
                      ],
                    }),
                  }),
                  (0, s.jsx)(Q.Table.Tbody, { children: j }),
                ],
              }),
          0 === o.length
            ? (0, s.jsx)("div", {
                className: "mt-[10px]",
                children: (0, s.jsx)(H.default, { text: "No Trades" }),
              })
            : null,
          (0, s.jsx)(eF, {
            opened: c,
            close: m,
            tradeItem: n,
            leverage: n?.leverage / 100,
          }),
        ],
      });
    };
    var eD = e.i(40658),
      eE = e.i(469401);
    let ez = ({
        showPadding: e = !1,
        variant: r = "tabs",
        isSocial: l = !1,
        minHeight: i,
        maxHeight: o,
      }) => {
        let { authenticated: n, login: c } = (0, d.usePrivy)(),
          [x, m] = (0, a.useState)("positions"),
          { ostiumPositions: u, ostiumOpenOrders: h } = (0, X.useOstiumStore)(
            (0, w.useShallow)((e) => ({
              ostiumPositions: l ? e.socialOstiumPositions : e.ostiumPositions,
              ostiumOpenOrders: l
                ? e.socialOstiumOpenOrders
                : e.ostiumOpenOrders,
            }))
          ),
          p = (0, a.useMemo)(
            () => [
              {
                label: `Trades ${u.length ? `(${u.length})` : ""}`,
                value: "positions",
              },
              {
                label: `Open Orders ${h.length ? `(${h.length})` : ""}`,
                value: "openOrders",
              },
              { label: "Order History", value: "orderHistory" },
              { label: "Completed Trades", value: "completedTrades" },
            ],
            [u.length, h.length]
          ),
          b = () =>
            (0, s.jsxs)(Z.Tabs.List, {
              children: [
                (0, s.jsx)(eD.default, {
                  value: "positions",
                  currentTab: x,
                  title: `Trades 
        ${u.length ? `(${u.length})` : ""}`,
                }),
                (0, s.jsx)(eD.default, {
                  value: "openOrders",
                  currentTab: x,
                  title: ` Open Orders 
        ${h.length ? `(${h.length})` : ""}`,
                }),
                (0, s.jsx)(eD.default, {
                  value: "orderHistory",
                  currentTab: x,
                  title: "Order History",
                }),
                (0, s.jsx)(eD.default, {
                  value: "completedTrades",
                  currentTab: x,
                  title: "Completed Trades",
                }),
              ],
            });
        return (0, s.jsx)("div", {
          className: "flex flex-col h-full w-full",
          style: { minHeight: i || "300px", maxHeight: o },
          children: n
            ? "gtr" === r
              ? (0, s.jsxs)("div", {
                  className: "flex flex-col h-full overflow-hidden",
                  children: [
                    (0, s.jsx)("div", {
                      className: "px-4 pt-4 overflow-scroll",
                      children: (0, s.jsx)(eE.GTRSegmentedControl, {
                        value: x,
                        onChange: m,
                        variant: "underline",
                        data: p,
                        classNames: {
                          root: "w-fit mb-4 rounded-none overflow-x-auto no-scrollbar",
                          label:
                            "!text-sm !pb-2.5 rounded-none whitespace-nowrap",
                        },
                      }),
                    }),
                    (0, s.jsxs)("div", {
                      className: (0, t.default)(
                        "flex-1 overflow-auto rounded-xl border-1 border-neutral-900",
                        { "min-h-[400px]": "gtr" === r }
                      ),
                      children: [
                        "positions" === x &&
                          (0, s.jsx)(ev, { variant: r, isSocial: l }),
                        "openOrders" === x &&
                          (0, s.jsx)(eT, { variant: r, isSocial: l }),
                        "orderHistory" === x &&
                          (0, s.jsx)(eS, { variant: r, isSocial: l }),
                        "completedTrades" === x &&
                          (0, s.jsx)(eU, { variant: r, isSocial: l }),
                      ],
                    }),
                  ],
                })
              : (0, s.jsxs)(Z.Tabs, {
                  value: x,
                  onChange: m,
                  classNames: {
                    root: "flex flex-col h-full overflow-hidden",
                    tab: "!h-9 !px-4 !py-0 !text-[14px] hover:bg-slate-600/50 !outline-none data-[active=true]:tab-center-border",
                    tabLabel: "!text-xs !font-medium",
                    list: "!p-0 !h-11 overflow-scroll flex-nowrap before:!border-transparent",
                    panel: "overflow-auto flex-1",
                  },
                  children: [
                    b(),
                    (0, s.jsxs)("div", {
                      className: `h-full overflow-auto no-scrollbar min-h-[300px] ${
                        e ? "pb-14" : ""
                      }`,
                      children: [
                        (0, s.jsx)(Z.Tabs.Panel, {
                          value: "positions",
                          children: (0, s.jsx)(ev, { isSocial: l }),
                        }),
                        (0, s.jsx)(Z.Tabs.Panel, {
                          value: "openOrders",
                          children: (0, s.jsx)(eT, { isSocial: l }),
                        }),
                        (0, s.jsx)(Z.Tabs.Panel, {
                          value: "orderHistory",
                          children: (0, s.jsx)(eS, { isSocial: l }),
                        }),
                        (0, s.jsx)(Z.Tabs.Panel, {
                          value: "completedTrades",
                          children: (0, s.jsx)(eU, { isSocial: l }),
                        }),
                      ],
                    }),
                  ],
                })
            : (0, s.jsxs)("div", {
                className: "relative h-full min-h-[300px]",
                children: [
                  (0, s.jsx)("div", {
                    className:
                      "absolute inset-0 blur-sm pointer-events-none opacity-50",
                    children: (0, s.jsx)(Z.Tabs, {
                      value: x,
                      classNames: {
                        root: "flex flex-col h-full overflow-hidden",
                        tab: "!h-9 !px-4 !py-0 !text-[14px] !font-medium",
                        tabLabel: "!text-xs !font-medium",
                        list: "!p-0 !h-9 overflow-scroll flex-nowrap",
                        panel: "overflow-y-auto flex-1",
                      },
                      color: "#95FF00",
                      children: b(),
                    }),
                  }),
                  (0, s.jsx)("div", {
                    className:
                      "absolute inset-0 flex items-center justify-center bg-black/10 backdrop-blur-sm",
                    children: (0, s.jsxs)("div", {
                      className: "text-center space-y-4",
                      children: [
                        (0, s.jsx)("h3", {
                          className: "text-xl font-semibold text-white",
                          children: "Login to view your portfolio",
                        }),
                        (0, s.jsx)(Y.Button, {
                          variant: "filled",
                          size: "md",
                          color: "white",
                          className: "!text-black hover:bg-white !rounded px-8",
                          onClick: () => c({ loginMethods: ["email"] }),
                          children: (0, s.jsx)("span", {
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
      eH = ({ setOperationsData: e }) => {
        let { client: t } = (0, _.useSmartWallets)(),
          [r, l] = (0, a.useState)(!1),
          [i, o] = (0, a.useState)([]),
          d = async () => {
            l(!0);
            try {
              let s = await (0, W.getUserPortfolio)({
                  id: t?.account?.address?.toLowerCase(),
                }),
                a = s?.data?.data?.user;
              e(a),
                o([
                  { id: 1, label: "Open", value: a?.totalOpenTrades || 0 },
                  {
                    id: 3,
                    label: "Closed",
                    value: a ? Number(a?.totalTrades) : 0,
                  },
                  { id: 4, label: "Take Profit", value: a?.totalTPOrders || 0 },
                  { id: 5, label: "Stop Loss", value: a?.totalSLOrders || 0 },
                  {
                    id: 6,
                    label: "Liquidation",
                    value: a?.totalLIQOrders || 0,
                  },
                  {
                    id: 7,
                    label: "Cancelled",
                    value: a?.totalCancelledOrders || 0,
                  },
                ]);
            } catch (e) {
              o([
                { id: 1, label: "Open", value: 0 },
                { id: 2, label: "Pending", value: 0 },
                { id: 3, label: "Closed", value: 0 },
                { id: 4, label: "Take Profit", value: 0 },
                { id: 5, label: "Stop Loss", value: 0 },
                { id: 6, label: "Liquidation", value: 0 },
                { id: 7, label: "Cancelled", value: 0 },
              ]),
                console.error("Error fetching pairs:", e);
            } finally {
              l(!1);
            }
          };
        return (
          (0, a.useEffect)(() => {
            l(!0), t?.account?.address && d();
          }, [t?.account?.address]),
          (0, s.jsxs)("div", {
            className:
              "bg-container-background rounded w-full sm:w-[30%] lg:w-1/3 sm:h-full",
            children: [
              (0, s.jsx)("div", {
                className:
                  "h-11 px-4 flex items-center justify-between border-b border-b-ash ",
                children: (0, s.jsx)("p", {
                  className: "text-xs font-semibold uppercase",
                  children: "Operations",
                }),
              }),
              (0, s.jsx)("div", {
                className: "flex flex-col",
                children:
                  !r &&
                  i?.map((e) =>
                    (0, s.jsxs)(
                      "div",
                      {
                        className:
                          "text-slate-900 flex justify-between items-center gap-1 py-2.5 min-h-10 px-4 border-b border-b-ash/50 last:border-b-0",
                        children: [
                          (0, s.jsx)("p", {
                            className: "text-xs  leading-[100%]",
                            children: e?.label,
                          }),
                          (0, s.jsx)("p", {
                            className: "text-sm font-semibold leading-[100%]",
                            children: e?.value,
                          }),
                        ],
                      },
                      e?.id
                    )
                  ),
              }),
              r
                ? (0, s.jsx)("div", {
                    className: "flex w-full mt-[50px] justify-center",
                    children: (0, s.jsx)(n.Loader, {
                      type: "dots",
                      color: "white",
                    }),
                  })
                : null,
            ],
          })
        );
      },
      eR = ({ operationsData: e }) => {
        let { allUsdcBalance: a } = (0, r.useBalanceStore)(
            (0, w.useShallow)((e) => ({ allUsdcBalance: e.allUsdcBalance }))
          ),
          { formatPrice: l } = (0, p.useExchangePrice)(),
          [i, { open: o, close: n }] = (0, g.useDisclosure)(!1),
          [d, { open: c, close: x }] = (0, g.useDisclosure)(!1);
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsxs)("div", {
              className:
                "bg-container-background rounded w-full sm:w-2/5 lg:w-1/3 sm:h-full flex flex-col justify-between",
              children: [
                (0, s.jsxs)("div", {
                  className: "py-6 px-4",
                  children: [
                    (0, s.jsxs)("div", {
                      className: "flex items-center gap-1 pb-2 text-white",
                      children: [
                        (0, s.jsx)(v, { color: "#ffffff", size: 16 }),
                        (0, s.jsx)("div", {
                          className: "text-sm font-medium leading-[100%]",
                          children: "Balance",
                        }),
                      ],
                    }),
                    (0, s.jsxs)("div", {
                      className:
                        " flex justify-between items-center sm:flex-col sm:justify-start sm:items-start",
                      children: [
                        (0, s.jsxs)("div", {
                          className: "pt-6",
                          children: [
                            (0, s.jsx)("div", {
                              className:
                                "text-slate-900 text-xs leading-[100%]",
                              children: "PnL",
                            }),
                            (0, s.jsx)("div", {
                              className: (0, t.default)(
                                "text-base font-medium pt-3 leading-[112%]",
                                {
                                  "text-grass": e?.totalPnL > 0,
                                  "text-blood": e?.totalPnL < 0,
                                }
                              ),
                              children: e?.totalPnL
                                ? (0, s.jsxs)(s.Fragment, {
                                    children: [
                                      e?.totalPnL < 0 ? "-" : "",
                                      " ",
                                      l(
                                        Math.abs(
                                          (0, b.roundedNumber)(
                                            +(0, q.formatUnits)(e?.totalPnL, 6)
                                          )
                                        )
                                      ),
                                    ],
                                  })
                                : "--",
                            }),
                          ],
                        }),
                        (0, s.jsxs)("div", {
                          className: "pt-6",
                          children: [
                            (0, s.jsx)("div", {
                              className:
                                "text-slate-900 text-xs leading-[100%]",
                              children: "Total Volume",
                            }),
                            (0, s.jsxs)("div", {
                              className:
                                "text-base font-medium pt-3 leading-[112%]",
                              children: [
                                e?.totalVolume < 0 ? "-" : "",
                                " ",
                                l(
                                  Math.abs(
                                    (0, b.roundedNumber)(
                                      +(0, q.formatUnits)(
                                        e?.totalVolume || 0,
                                        6
                                      )
                                    )
                                  )
                                ),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  children: [
                    (0, s.jsx)(f.Divider, { variant: "dashed" }),
                    (0, s.jsxs)("div", {
                      className: "flex rounded-b",
                      children: [
                        (0, s.jsxs)("div", {
                          className:
                            "w-1/3 sm:w-2/5 md:w-1/3 lg:w-1/2 pt-4 px-4 pb-6",
                          children: [
                            (0, s.jsx)("div", {
                              className:
                                "text-slate-900 text-xs leading-[160%] pt-0.5",
                              children: "Balance",
                            }),
                            (0, s.jsx)("div", {
                              className:
                                "text-base font-medium pt-1 leading-[120%]",
                              children: l(
                                (0, b.roundedNumber)(
                                  a?.find(
                                    (e) => e?.chain?.symbol === "arbitrum"
                                  )?.balance || 0
                                )
                              ),
                            }),
                          ],
                        }),
                        (0, s.jsxs)("div", {
                          className:
                            "w-1/3 sm:w-[30%] md:w-1/3 lg:w-1/4 flex flex-col justify-center items-center gap-1 cursor-pointer border-x border-x-ash hover:bg-slate-900/10 transition-all duration-150",
                          onClick: o,
                          children: [
                            (0, s.jsx)(N.IconDownload, {
                              size: 20,
                              color: "white",
                            }),
                            (0, s.jsx)("p", {
                              className: "text-xs text-slate-900",
                              children: "Deposit",
                            }),
                          ],
                        }),
                        (0, s.jsxs)("div", {
                          className:
                            "w-1/3 sm:w-[30%] md:w-1/3 lg:w-1/4 flex rounded-br flex-col justify-center items-center gap-1 cursor-pointer hover:bg-slate-900/10 transition-all duration-150",
                          onClick: c,
                          children: [
                            (0, s.jsx)(j.IconUpload, {
                              size: 20,
                              color: "white",
                            }),
                            (0, s.jsx)("p", {
                              className: "text-xs text-slate-900",
                              children: "Withdraw",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, s.jsx)(u.default, { opened: i, close: n, chain: "arbitrum" }),
            (0, s.jsx)(h.default, { opened: d, close: x, chain: "arbitrum" }),
          ],
        });
      },
      eG = () => {
        let [e, t] = (0, a.useState)({}),
          { fetchAllOrders: r, fetchAllAssets: l } = (0, ee.useOstium)(),
          { client: i } = (0, _.useSmartWallets)(),
          o = () => {
            i?.account?.address && r(i?.account?.address);
          };
        return (
          (0, a.useEffect)(() => {
            if (i?.account?.address) {
              o();
              let e = setInterval(o, 1e3);
              return () => clearInterval(e);
            }
          }, [i?.account?.address, r]),
          (0, a.useEffect)(() => {
            l();
          }, []),
          (0, s.jsx)(s.Fragment, {
            children: (0, s.jsxs)("div", {
              className:
                "flex flex-col sm:!h-[calc(100vh-96px)] pt-1 gap-2 sm:gap-1 px-2 sm:px-0",
              children: [
                (0, s.jsxs)("div", {
                  className:
                    "flex flex-col sm:flex-row gap-2 sm:gap-1 sm:min-h-[330px] sm:max-h-[330px]",
                  children: [
                    (0, s.jsx)(eR, { operationsData: e }),
                    (0, s.jsx)(V, {}),
                    (0, s.jsx)(eH, { setOperationsData: t }),
                  ],
                }),
                (0, s.jsx)("div", {
                  className:
                    "sm:h-3/5 bg-container-background rounded overflow-hidden no-scrollbar",
                  children: (0, s.jsx)(ez, { showPadding: !0 }),
                }),
              ],
            }),
          })
        );
      };
    var eW = e.i(11901);
    e.s(
      [
        "default",
        0,
        () => {
          let [e, r] = (0, a.useState)("perpetuals"),
            [l, i] = (0, a.useState)("allTime");
          return (
            (0, a.useEffect)(() => {
              let e = localStorage.getItem("selected-tab");
              e && r(e);
            }, []),
            (0, s.jsx)(s.Fragment, {
              children: (0, s.jsxs)("div", {
                className: "p-1 ",
                children: [
                  (0, s.jsxs)("div", {
                    className: "flex gap-2 justify-between pb-1 flex-wrap",
                    children: [
                      (0, s.jsx)("div", {
                        className:
                          "flex items-center gap-8 bg-black p-2 pl-5 overflow-x-auto overflow-y-hidden max-w-full scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent",
                        children: [
                          { label: "Crypto Perps", value: "perpetuals" },
                          { label: "Altcoins", value: "crypto" },
                          { label: "Stocks", value: "stocks" },
                        ].map((a, l) =>
                          (0, s.jsx)(
                            "div",
                            {
                              className: (0, t.default)(
                                "text-base leading-[112%] font-medium cursor-pointer flex-shrink-0",
                                {
                                  "text-[#858DA3]": e !== a?.value,
                                  "text-white": e === a?.value,
                                }
                              ),
                              onClick: () => {
                                localStorage.setItem("selected-tab", a?.value),
                                  r(a?.value);
                              },
                              children: a?.label,
                            },
                            l
                          )
                        ),
                      }),
                      "perpetuals" === e &&
                        (0, s.jsx)(z, { range: l, setRange: i }),
                    ],
                  }),
                  "rwaPerps" === e &&
                    (0, s.jsx)(eW.default, {
                      name: "Portfolio:RwaPerpsTab",
                      children: (0, s.jsx)(eG, {}),
                    }),
                  "crypto" === e &&
                    (0, s.jsx)(eW.default, {
                      name: "Portfolio:CryptoTab",
                      children: (0, s.jsx)(S, {}),
                    }),
                  "stocks" === e &&
                    (0, s.jsx)(eW.default, {
                      name: "Portfolio:StocksTab",
                      children: (0, s.jsx)(O, {}),
                    }),
                  "perpetuals" === e &&
                    (0, s.jsx)(eW.default, {
                      name: "Portfolio:PerpsTab",
                      children: (0, s.jsx)(E, { range: l }),
                    }),
                ],
              }),
            })
          );
        },
      ],
      760145
    );
  },
]);
