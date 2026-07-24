(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  430885,
  (e) => {
    "use strict";
    var s = e.i(843476),
      t = e.i(184086);
    e.s([
      "default",
      0,
      ({ children: e, label: r, showBottom: a = !1, width: l = 280 }) =>
        (0, s.jsx)(t.Tooltip, {
          label: r,
          position: a ? "bottom" : "top",
          color: "#434754",
          multiline: !0,
          className: "text-xs text-[#ffffff]",
          w: l,
          children: e,
        }),
    ]);
  },
  552745,
  (e) => {
    e.v("/_next/static/media/upnlIcon.ada1dc5c.svg");
  },
  156684,
  (e) => {
    "use strict";
    var s = e.i(843476);
    e.i(271645), e.i(207670);
    var t = e.i(908954),
      r = e.i(789549),
      a = e.i(321879),
      l = e.i(644662);
    let [i, n] = (0, e.i(384660).createSafeContext)(
      "Progress.Root component was not found in tree"
    );
    var o = {
      root: "m_db6d6462",
      section: "m_2242eb65",
      "stripes-animation": "m_81a374bd",
      "stripes-animation-vertical": "m_e0fb7a86",
      label: "m_91e40b74",
    };
    let c = (0, a.factory)((e, t) => {
      let {
          classNames: a,
          className: i,
          style: o,
          styles: c,
          vars: d,
          ...x
        } = (0, r.useProps)("ProgressLabel", null, e),
        u = n();
      return (0, s.jsx)(l.Box, {
        ref: t,
        ...u.getStyles("label", {
          className: i,
          style: o,
          classNames: a,
          styles: c,
        }),
        ...x,
      });
    });
    (c.classes = o), (c.displayName = "@mantine/core/ProgressLabel");
    var d = e.i(424848),
      x = e.i(143798),
      u = e.i(314037);
    let m = (0, x.createVarsResolver)(
        (e, { size: s, radius: t, transitionDuration: r }) => ({
          root: {
            "--progress-size": (0, d.getSize)(s, "progress-size"),
            "--progress-radius": void 0 === t ? void 0 : (0, d.getRadius)(t),
            "--progress-transition-duration":
              "number" == typeof r ? `${r}ms` : void 0,
          },
        })
      ),
      h = (0, a.factory)((e, t) => {
        let a = (0, r.useProps)("ProgressRoot", null, e),
          {
            classNames: n,
            className: c,
            style: d,
            styles: x,
            unstyled: h,
            vars: p,
            autoContrast: g,
            transitionDuration: f,
            orientation: v,
            attributes: j,
            mod: b,
            ...N
          } = a,
          y = (0, u.useStyles)({
            name: "Progress",
            classes: o,
            props: a,
            className: c,
            style: d,
            classNames: n,
            styles: x,
            unstyled: h,
            attributes: j,
            vars: p,
            varsResolver: m,
          });
        return (0, s.jsx)(i, {
          value: { getStyles: y, autoContrast: g },
          children: (0, s.jsx)(l.Box, {
            ref: t,
            mod: [{ orientation: v }, b],
            ...y("root"),
            ...N,
          }),
        });
      });
    (h.classes = o), (h.displayName = "@mantine/core/ProgressRoot");
    var p = e.i(515259),
      g = e.i(835783),
      f = e.i(912761),
      v = e.i(522442);
    let j = { withAria: !0 },
      b = (0, a.factory)((e, t) => {
        let {
            classNames: a,
            className: i,
            style: o,
            styles: c,
            vars: d,
            value: x,
            withAria: u,
            color: m,
            striped: h,
            animated: b,
            mod: N,
            ...y
          } = (0, r.useProps)("ProgressSection", j, e),
          w = n(),
          P = (0, v.useMantineTheme)(),
          S = u
            ? {
                role: "progressbar",
                "aria-valuemax": 100,
                "aria-valuemin": 0,
                "aria-valuenow": x,
                "aria-valuetext": `${x}%`,
              }
            : {};
        return (0, s.jsx)(l.Box, {
          ref: t,
          ...w.getStyles("section", {
            className: i,
            classNames: a,
            styles: c,
            style: o,
          }),
          ...y,
          ...S,
          mod: [{ striped: h || b, animated: b }, N],
          __vars: {
            "--progress-section-size": `${x}%`,
            "--progress-section-color": (0, p.getThemeColor)(m, P),
            "--progress-label-color": (0, f.getAutoContrastValue)(
              w.autoContrast,
              P
            )
              ? (0, g.getContrastColor)({
                  color: m,
                  theme: P,
                  autoContrast: w.autoContrast,
                })
              : void 0,
          },
        });
      });
    (b.classes = o), (b.displayName = "@mantine/core/ProgressSection");
    let N = (0, a.factory)((e, a) => {
      let l = (0, r.useProps)("Progress", null, e),
        {
          value: i,
          classNames: n,
          styles: o,
          vars: c,
          color: d,
          striped: x,
          animated: u,
          "aria-label": m,
          ...p
        } = l,
        { resolvedClassNames: g, resolvedStyles: f } = (0,
        t.useResolvedStylesApi)({ classNames: n, styles: o, props: l });
      return (0, s.jsx)(h, {
        ref: a,
        classNames: g,
        styles: f,
        vars: c,
        ...p,
        children: (0, s.jsx)(b, {
          value: i,
          color: d,
          striped: x,
          animated: u,
          "aria-label": m,
        }),
      });
    });
    (N.classes = o),
      (N.displayName = "@mantine/core/Progress"),
      (N.Section = b),
      (N.Root = h),
      (N.Label = c),
      e.s(["Progress", () => N], 156684);
  },
  301272,
  (e) => {
    "use strict";
    var s = e.i(843476),
      t = e.i(717745),
      r = e.i(156684),
      a = e.i(271645);
    let l = ({ duration: e = 5e3, rootBg: t = "gray", paused: l = !1 }) => {
      let [i, n] = (0, a.useState)(100),
        [o, c] = (0, a.useState)(0),
        d = (0, a.useRef)(null),
        x = (0, a.useRef)(null);
      return (
        (0, a.useEffect)(
          () => (
            n(100),
            c(0),
            d.current && clearInterval(d.current),
            l ||
              ((x.current = Date.now()),
              (d.current = setInterval(() => {
                let s = 0 + (Date.now() - x.current);
                n(Math.max(0, 100 - (s / e) * 100)),
                  s >= e && (n(0), clearInterval(d.current));
              }, 20))),
            () => {
              d.current && clearInterval(d.current);
            }
          ),
          [e, t]
        ),
        (0, a.useEffect)(
          () => (
            d.current && clearInterval(d.current),
            !l &&
              i > 0 &&
              ((x.current = Date.now()),
              (d.current = setInterval(() => {
                let s = o + (Date.now() - x.current);
                n(Math.max(0, 100 - (s / e) * 100)),
                  s >= e && (n(0), clearInterval(d.current));
              }, 20))),
            () => {
              d.current && clearInterval(d.current);
            }
          ),
          [l, o]
        ),
        (0, a.useEffect)(() => {
          l && i > 0 && x.current && c((e) => e + (Date.now() - x.current));
        }, [l]),
        (0, s.jsx)("div", {
          className: "w-full",
          children: (0, s.jsx)(r.Progress, {
            value: i,
            size: "xs",
            radius: "sm",
            color: "#2862ff",
            styles: { root: { backgroundColor: t } },
          }),
        })
      );
    };
    var i = e.i(533372),
      n = e.i(442948),
      o = e.i(553917),
      c = e.i(344423),
      d = e.i(343794),
      x = e.i(657688),
      u = e.i(34342);
    let m = ({ duration: e, children: t, showProgress: r = !0 }) => {
      let [i, n] = (0, a.useState)(!1),
        o = (e) => {
          n(e);
        };
      return (0, s.jsxs)("div", {
        className: "relative",
        onMouseEnter: () => o(!0),
        onMouseLeave: () => o(!1),
        children: [
          t,
          (0, s.jsx)(u.ProgressBar, { progress: 400 }),
          r && (0, s.jsx)(l, { rootBg: "transparent", duration: e, paused: i }),
        ],
      });
    };
    e.s(
      [
        "ostiumNotification",
        0,
        ({
          notificationId: e = Date.now().toString(),
          showProgress: r = !0,
          loading: a = !1,
          autoClose: l = !0,
          isError: u = !1,
          isClosePosition: h = !1,
          title: p = "",
          tokenName: g = "",
          selectedAsset: f = "",
          selectedSection: v = "",
          ostiumLeverage: j = "",
          takeProfit: b = "",
          tokenQuantity: N = "",
          isProfit: y = !1,
          isLoss: w = !1,
          showTpsl: P = !0,
          showContent: S = !0,
        }) => {
          e = o.notifications.show({
            id: e,
            autoClose: !!l && 4500,
            color: "transparent",
            withCloseButton: !1,
            styles: (e, s, t) => ({
              body: { margin: 0, borderRadius: 0 },
              root: { padding: "0", cursor: "pointer" },
              loader: { marginLeft: "10px", marginRight: "10px" },
              icon: { marginRight: "0px" },
            }),
            message: (0, s.jsx)(m, {
              duration: 5e3,
              showProgress: r,
              children: (0, s.jsxs)("div", {
                className: "py-3 px-2.5",
                children: [
                  (0, s.jsxs)("div", {
                    className: "flex gap-2 items-center",
                    children: [
                      a &&
                        (0, s.jsx)("div", {
                          className: "flex justify-center items-center h-full",
                          children: (0, s.jsx)(n.Loader, {
                            className: "animate-spin-loader",
                            color: "white",
                            size: 10,
                          }),
                        }),
                      !a &&
                        u &&
                        (0, s.jsx)(c.IconAlertCircle, {
                          size: 20,
                          color: "red",
                        }),
                      (0, s.jsxs)("div", {
                        className:
                          "flex gap-2 justify-between items-center w-full",
                        children: [
                          (0, s.jsx)("h2", {
                            className: (0, d.default)("font-medium text-xs", {
                              "text-blood": u,
                              "text-white": !u,
                            }),
                            children: p,
                          }),
                          (0, s.jsx)(i.Button, {
                            unstyled: !0,
                            onClick: () => o.notifications.hide(e),
                            className:
                              "!text-white border border-transparent hover:border-[#16171B]/20 hover:!bg-[#16171B]/30 hover:!text-white/60 p-1.5 rounded",
                            children: (0, s.jsx)(t.default, {}),
                          }),
                        ],
                      }),
                    ],
                  }),
                  S
                    ? (0, s.jsxs)(s.Fragment, {
                        children: [
                          (0, s.jsxs)("div", {
                            className: "flex gap-2 px-2.5 py-3",
                            children: [
                              (0, s.jsx)(x.default, {
                                width: 28,
                                height: 28,
                                src: `https://static.ostium.io/assets/pairs/${g}.svg`,
                                alt: "->",
                                className: "rounded-full",
                                onError: (e) => {
                                  e.currentTarget.src =
                                    "https://app.hyperliquid.xyz/coins/missing.svg";
                                },
                              }),
                              (0, s.jsxs)("div", {
                                className:
                                  "flex gap-2 justify-between items-center w-full",
                                children: [
                                  (0, s.jsxs)("div", {
                                    className: "flex flex-col gap-1",
                                    children: [
                                      (0, s.jsx)("p", {
                                        className:
                                          "leading-[100%] text-xs text-white font-semibold",
                                        children: f,
                                      }),
                                      (0, s.jsxs)("p", {
                                        className: (0, d.default)(
                                          "leading-[100%] text-xs font-medium ",
                                          {
                                            "text-grass": "long" === v,
                                            "text-blood": "long" !== v,
                                          }
                                        ),
                                        children: [
                                          (0, s.jsx)("span", {
                                            className: "uppercase",
                                            children: v,
                                          }),
                                          " ",
                                          j,
                                          "x",
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, s.jsx)("div", {
                                    className: "flex flex-col gap-1 items-end",
                                    children: (0, s.jsxs)("p", {
                                      className:
                                        "leading-[100%] text-xs text-white font-semibold uppercase",
                                      children: [N, " ", g],
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          P &&
                            (0, s.jsxs)("div", {
                              className: "flex gap-2 px-2.5 justify-between",
                              children: [
                                (0, s.jsxs)("p", {
                                  children: [
                                    h ? "Realized" : "Expected",
                                    " ",
                                    y ? "Profit" : "Loss",
                                  ],
                                }),
                                (0, s.jsx)("p", {
                                  className: (0, d.default)("font-medium", {
                                    "text-grass": y,
                                    "text-blood": w,
                                  }),
                                  children: b,
                                }),
                              ],
                            }),
                        ],
                      })
                    : null,
                ],
              }),
            }),
          });
        },
      ],
      301272
    );
  },
  658404,
  (e) => {
    "use strict";
    let s = {
      src: e.i(552745).default,
      width: 12,
      height: 12,
      blurWidth: 0,
      blurHeight: 0,
    };
    e.s(["default", 0, s]);
  },
  886267,
  (e) => {
    "use strict";
    var s = e.i(843476),
      t = e.i(346944),
      r = e.i(343794),
      a = e.i(890357),
      l = e.i(974010),
      i = e.i(700653),
      n = e.i(144492),
      o = e.i(737716),
      c = e.i(905142),
      d = e.i(879010),
      x = e.i(736566),
      u = e.i(447519);
    e.s([
      "default",
      0,
      ({
        portfolio: e,
        isLoading: m,
        assetPositions: h = [],
        containerClassName: p = "",
        externalAddress: g = !1,
        externalWalletAddress: f = "",
      }) => {
        let v = 0,
          [j, { open: b, close: N }] = (0, c.useDisclosure)(!1),
          [y, { open: w, close: P }] = (0, c.useDisclosure)(!1),
          { cryptoPerpsBalance: S } = (0, a.useBalanceStore)(
            (0, t.useShallow)((e) => ({
              cryptoPerpsBalance: e.cryptoPerpsBalance,
            }))
          ),
          { walletTrackers: B } = (0, u.useTrackerStore)(
            (0, t.useShallow)((e) => ({ walletTrackers: e.walletTrackers }))
          ),
          C = B?.find((e) => e.walletAddress === f);
        return (
          h?.forEach(({ position: e }) => {
            let s = Number(e.unrealizedPnl);
            isNaN(s) || (v = (0, l.roundedNumber)(Number(v + s)));
          }),
          (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsxs)("div", {
                className: `bg-black card-border h-full ${p}`,
                children: [
                  (0, s.jsxs)("div", {
                    className: "py-6 px-4",
                    children: [
                      (0, s.jsxs)("div", {
                        children: [
                          (0, s.jsx)("div", {
                            className: "text-slate-900 text-xs leading-[100%]",
                            children: "Volume",
                          }),
                          (0, s.jsx)("div", {
                            className:
                              "text-base font-medium pt-3 leading-[112%]",
                            children: m
                              ? "--"
                              : `$${(0, l.formatBigNumber)(
                                  Number(e?.[1]?.vlm)?.toFixed(2)
                                )}`,
                          }),
                        ],
                      }),
                      (0, s.jsx)("div", {
                        className: "grid grid-cols-2 gap-4 pt-6",
                        children: (0, s.jsxs)("div", {
                          children: [
                            (0, s.jsx)("div", {
                              className:
                                "text-slate-900 text-xs leading-[100%]",
                              children: "P&L",
                            }),
                            (0, s.jsx)("div", {
                              className: (0, r.default)(
                                "text-base font-medium pt-3 leading-[112%]",
                                {
                                  "text-grass":
                                    e?.[1]?.pnlHistory[
                                      e?.[1]?.pnlHistory.length - 1
                                    ][1] > 0,
                                  "text-blood":
                                    e?.[1]?.pnlHistory[
                                      e?.[1]?.pnlHistory.length - 1
                                    ][1] < 0,
                                }
                              ),
                              children: m
                                ? "--"
                                : (0, s.jsxs)(s.Fragment, {
                                    children: [
                                      e?.[1]?.pnlHistory[
                                        e?.[1]?.pnlHistory.length - 1
                                      ][1] < 0
                                        ? "-"
                                        : "+",
                                      "$",
                                      (0, l.formatBigNumber)(
                                        Number(
                                          Math.abs(
                                            e?.[1]?.pnlHistory[
                                              e?.[1]?.pnlHistory.length - 1
                                            ][1]
                                          )
                                        )?.toFixed(2)
                                      ),
                                    ],
                                  }),
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                  (0, s.jsx)(i.Divider, {
                    variant: "dashed",
                    className: "border-ash",
                  }),
                  (0, s.jsx)("div", {
                    className: "py-6 px-4",
                    children: (0, s.jsxs)("div", {
                      className: "grid grid-cols-2 gap-4",
                      children: [
                        (0, s.jsxs)("div", {
                          children: [
                            (0, s.jsx)("div", {
                              className:
                                "text-slate-900 text-xs leading-[100%]",
                              children: "Account Value",
                            }),
                            (0, s.jsx)("div", {
                              className:
                                "text-base font-medium pt-3 leading-[112%]",
                              children: m
                                ? "--"
                                : (0, s.jsxs)(s.Fragment, {
                                    children: [
                                      e?.[1]?.accountValueHistory[
                                        e?.[1]?.accountValueHistory.length - 1
                                      ][1] < 0
                                        ? "-"
                                        : "",
                                      "$",
                                      (0, l.formatBigNumber)(
                                        Number(
                                          Math.abs(
                                            e?.[1]?.accountValueHistory[
                                              e?.[1]?.accountValueHistory
                                                .length - 1
                                            ][1]
                                          )
                                        )?.toFixed(2)
                                      ),
                                    ],
                                  }),
                            }),
                          ],
                        }),
                        (0, s.jsxs)("div", {
                          children: [
                            (0, s.jsx)("div", {
                              className:
                                "text-slate-900 text-xs leading-[100%]",
                              children: "Unrealized P&L",
                            }),
                            (0, s.jsx)("div", {
                              className: (0, r.default)(
                                "h-7 text-base font-medium pt-3 leading-[112%]",
                                { "text-grass": v > 0, "text-blood": v < 0 }
                              ),
                              children: m
                                ? "--"
                                : (0, l.convertIntl)((0, l.roundedNumber)(v)),
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  (0, s.jsx)(i.Divider, { variant: "dashed" }),
                  (0, s.jsxs)("div", {
                    className: "flex rounded-b",
                    children: [
                      (0, s.jsxs)("div", {
                        className: "w-2/5 pt-4 px-4 pb-6",
                        children: [
                          (0, s.jsx)("div", {
                            className:
                              "text-slate-900 text-xs leading-[160%] pt-0.5",
                            children: g ? "Available USDC" : "Balance",
                          }),
                          (0, s.jsx)("div", {
                            className:
                              "text-base font-medium pt-1 leading-[120%]",
                            children: g
                              ? C?.withdrawable
                                ? (0, l.convertIntl)(
                                    Number(C.withdrawable).toFixed(2)
                                  )
                                : "--"
                              : (0, l.convertIntl)(Number(S).toFixed(2)),
                          }),
                        ],
                      }),
                      g
                        ? null
                        : (0, s.jsxs)(s.Fragment, {
                            children: [
                              (0, s.jsxs)("div", {
                                className:
                                  "w-[30%] flex flex-col justify-center items-center gap-1 cursor-pointer border-x border-x-ash hover:bg-slate-900/10 transition-all duration-150",
                                onClick: b,
                                children: [
                                  (0, s.jsx)(n.IconDownload, {
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
                                onClick: w,
                                children: [
                                  (0, s.jsx)(o.IconUpload, {
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
              (0, s.jsx)(d.default, {
                opened: j,
                close: N,
                chain: "hyperliquid",
              }),
              (0, s.jsx)(x.default, {
                opened: y,
                close: P,
                chain: "hyperliquid",
              }),
            ],
          })
        );
      },
    ]);
  },
  955548,
  (e) => {
    "use strict";
    var s = e.i(843476),
      t = e.i(657688),
      r = e.i(440845),
      a = e.i(658404),
      l = e.i(442948);
    e.s([
      "default",
      0,
      ({
        isLoading: e = !1,
        portfolio: i,
        isPositive: n,
        containerClassName: o = "",
      }) =>
        (0, s.jsxs)("div", {
          className: `bg-black card-border p-4 flex flex-col justify-between h-full w-full ${o}`,
          children: [
            (0, s.jsxs)("div", {
              className: "flex gap-1 items-center",
              children: [
                (0, s.jsx)(t.default, {
                  src: a.default,
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
            e
              ? (0, s.jsxs)("div", {
                  className:
                    "flex flex-col items-center gap-2 px-5 text-xs  py-20",
                  children: [
                    (0, s.jsx)(l.Loader, { size: "xs", color: "#ffffff" }),
                    (0, s.jsx)("div", { children: "Loading..." }),
                  ],
                })
              : (0, s.jsx)("div", {
                  className: "flex flex-col justify-end",
                  children: i?.length
                    ? (0, s.jsx)(r.default, {
                        color: n ? "#00FF99" : "#FF5D6D",
                        data: i?.length
                          ? i?.map((e) => ({
                              time: new Date(e[0]).getTime() / 1e3,
                              value: Number(e[1]),
                            }))
                          : [],
                        height: 240,
                      })
                    : null,
                }),
          ],
        }),
    ]);
  },
  467399,
  (e) => {
    e.v((s) =>
      Promise.all(
        ["static/chunks/2299924e688885e3.js"].map((s) => e.l(s))
      ).then(() => s(781))
    );
  },
]);
