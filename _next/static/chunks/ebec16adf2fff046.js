(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  249054,
  (e) => {
    "use strict";
    var l = e.i(843476),
      t = e.i(533372),
      a = e.i(271645),
      s = e.i(88653),
      r = e.i(846932),
      i = e.i(657688),
      n = e.i(343794);
    let d = {
      src: e.i(283945).default,
      width: 17,
      height: 18,
      blurWidth: 0,
      blurHeight: 0,
    };
    var o = e.i(905142),
      c = e.i(336005),
      x = e.i(156684),
      m = e.i(442948),
      u = e.i(974010);
    let h = ({
      level: e = "1",
      fees: t = "0",
      discount: a = "0",
      nextLevelThreshold: s,
      remainingToNext: r,
      isLoading: n = !1,
    }) => {
      let {
          level: d,
          title: o,
          nextTitle: c,
          background: h,
          badge: p,
          primaryColor: f,
          secondaryColor: g,
          gradient: b,
        } = (0, u.getPassDetails)(e),
        j = ((s - r) / s) * 100;
      return (0, l.jsxs)(l.Fragment, {
        children: [
          (0, l.jsxs)("div", {
            style: {
              backgroundImage: `url(${h.src})`,
              backgroundSize: "100%",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "100%",
            },
            className: "bg-black rounded-lg py-4 pl-3 relative",
            children: [
              n &&
                (0, l.jsx)("div", {
                  className:
                    "absolute inset-0 bg-black/50 backdrop-blur-sm rounded-lg flex items-center justify-center z-10",
                  children: (0, l.jsx)(m.Loader, {
                    color: "white",
                    size: "lg",
                  }),
                }),
              (0, l.jsxs)("div", {
                className: "flex items-center gap-2",
                children: [
                  (0, l.jsx)("div", {
                    className: "w-1/3",
                    children: (0, l.jsx)(i.default, {
                      src: p,
                      alt: `level ${e} badge`,
                      width: 160,
                    }),
                  }),
                  (0, l.jsxs)("div", {
                    className: "w-3/5",
                    children: [
                      (0, l.jsx)("p", {
                        className: `text-xs xl:text-sm ${f}`,
                        children: `Level ${e}`,
                      }),
                      (0, l.jsx)("h1", {
                        className: `bg-clip-text text-transparent uppercase  text-[28px] xl:text-[32px] font-semibold ${b}`,
                        children: o,
                      }),
                      (0, l.jsx)("p", {
                        className: `text-2xs xl:text-xs leading-5 ${g}`,
                        children: `${t}% Fees / ${a}% Discount`,
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          "end" !== c &&
            (0, l.jsxs)("div", {
              className: "py-4 px-3.5 flex flex-col gap-2 group",
              children: [
                (0, l.jsxs)("div", {
                  className:
                    "flex justify-between items-center flex-wrap gap-2 mb-1",
                  children: [
                    (0, l.jsx)("p", {
                      className:
                        "text-xs xl:text-sm font-semibold text-neutral-100",
                      children: `✦ ${c}(L-${d + 1})`,
                    }),
                    (0, l.jsxs)("p", {
                      className:
                        "text-xs xl:text-sm font-medium text-neutral-200 opacity:100 xl:opacity-0 group-hover:opacity-100 transition-opacity ease-in-out duration-450",
                      children: [
                        (0, u.convertIntl)(Number(r?.toFixed(2))),
                        " left",
                      ],
                    }),
                  ],
                }),
                (0, l.jsx)(x.Progress, {
                  value: j <= 5 ? 5 : j,
                  size: "md",
                  radius: "10px",
                  classNames: {
                    root: "bg-neutral-900",
                    section: `${b} bg-no-repeat !bg-auto rounded-[10px]`,
                  },
                }),
              ],
            }),
        ],
      });
    };
    var p = e.i(191892),
      f = e.i(344804),
      g = e.i(700653),
      b = e.i(33550);
    let j = (0, b.default)("outline", "brand-speedtest", "BrandSpeedtest", [
      ["path", { d: "M5.636 19.364a9 9 0 1 1 12.728 0", key: "svg-0" }],
      ["path", { d: "M16 9l-4 4", key: "svg-1" }],
    ]);
    var v = e.i(802315),
      y = e.i(170134);
    let N = ({ currentLevel: e = 1, levelsData: t }) =>
      (0, l.jsx)(f.Accordion, {
        classNames: {
          control: "!bg-transparent p-0 px-3.5",
          icon: "mr-2",
          chevron: "w-5 h-5",
          root: "border-t-1 border-neutral-900",
          content: "pl-1",
          item: "border-none",
        },
        defaultValue: "badges",
        chevron: (0, l.jsx)(v.IconChevronDown, {
          size: 20,
          className: "text-neutral-400",
        }),
        children: (0, l.jsxs)(
          f.Accordion.Item,
          {
            value: "badges",
            children: [
              (0, l.jsx)(f.Accordion.Control, {
                icon: (0, l.jsx)(j, {
                  size: 20,
                  className: "text-neutral-100",
                }),
                children: (0, l.jsx)("span", {
                  className: "text-sm font-medium text-neutral-100",
                  children: "Badge Map",
                }),
              }),
              (0, l.jsx)(f.Accordion.Panel, {
                children: t?.map((t) => {
                  let { title: a, badge: s } = (0, u.getPassDetails)(
                    String(t?.level || 1)
                  );
                  return (0, l.jsxs)(
                    "div",
                    {
                      className: "flex items-center gap-2 min-h-[50px]",
                      children: [
                        (0, l.jsx)("div", {
                          className: "min-w-10",
                          children: (0, l.jsx)(i.default, {
                            src: s,
                            alt: a,
                            width: 40,
                          }),
                        }),
                        (0, l.jsxs)("div", {
                          className: "pt-1 flex flex-col gap-1 w-full",
                          children: [
                            (0, l.jsxs)("div", {
                              className:
                                "flex justify-between items-center w- gap-2",
                              children: [
                                (0, l.jsxs)("div", {
                                  className: "flex gap-1 items-center",
                                  children: [
                                    (0, l.jsx)("p", {
                                      className:
                                        "text-xs font-medium text-white/80 uppercase",
                                      children: a,
                                    }),
                                    t?.level <= e
                                      ? (0, l.jsx)(y.IconCircleCheckFilled, {
                                          className: "text-emerald-400",
                                          size: 15,
                                        })
                                      : null,
                                  ],
                                }),
                                (0, l.jsx)(g.Divider, {
                                  variant: "dashed",
                                  className: "w-[110px] border-neutral-800",
                                }),
                                (0, l.jsx)("p", {
                                  className: "text-xs text-white/8 text-right",
                                  children: (0, u.formatBigNumber)(
                                    t?.threshold
                                  ),
                                }),
                              ],
                            }),
                            (0, l.jsxs)("p", {
                              className:
                                "text-2xs text-neutral-400 flex gap-1 items-center",
                              children: [
                                `${t?.fees}% Fees`,
                                (0, l.jsx)("span", {
                                  className: "text-neutral-600",
                                  children: "|",
                                }),
                                `${t?.discount}% discount`,
                              ],
                            }),
                          ],
                        }),
                      ],
                    },
                    t?.level
                  );
                }),
              }),
            ],
          },
          "badges"
        ),
      });
    var w = e.i(541473),
      C = e.i(898215),
      k = e.i(618566),
      T = e.i(73404),
      S = e.i(722071),
      D = e.i(682451),
      A = e.i(184086),
      R = e.i(626197),
      L = e.i(399582);
    let I = ({ refCode: e }) => {
      let t = `https://gtr.trade/?ref=${e}`;
      return (0, l.jsxs)("div", {
        className:
          "py-[18px] px-3.5 flex md:flex-col gap-3.5 md:border-t-1 md:border-neutral-900",
        children: [
          (0, l.jsxs)("div", {
            className: "w-1/2 md:w-full flex flex-col gap-1",
            children: [
              (0, l.jsx)("p", {
                className: "text-xs text-neutral-400",
                children: "Share Invitation",
              }),
              (0, l.jsxs)("div", {
                className:
                  "flex gap-1 justify-between items-center bg-neutral-900 p-1.5 pl-3 border-1 border-neutral-900 rounded-md",
                children: [
                  (0, l.jsx)("p", {
                    className: "text-xs font-medium text-neutral-300 truncate",
                    children: t,
                  }),
                  (0, l.jsx)(S.CopyButton, {
                    value: t,
                    timeout: 2e3,
                    children: ({ copied: e, copy: t }) =>
                      (0, l.jsx)(A.Tooltip, {
                        label: e ? "Copied" : "Copy",
                        withArrow: !0,
                        position: "right",
                        children: (0, l.jsx)(T.ActionIcon, {
                          className:
                            "!bg-neutral-800 border-1 border-neutral-600",
                          color: e ? "teal" : "white",
                          variant: "subtle",
                          onClick: t,
                          children: e
                            ? (0, l.jsx)(R.IconCheck, {
                                style: { width: (0, D.rem)(12) },
                              })
                            : (0, l.jsx)(L.IconCopy, {
                                style: { width: (0, D.rem)(12) },
                              }),
                        }),
                      }),
                  }),
                ],
              }),
            ],
          }),
          (0, l.jsxs)("div", {
            className: "w-1/2 md:w-full flex flex-col gap-1",
            children: [
              (0, l.jsx)("p", {
                className: "text-xs text-neutral-400",
                children: "Invite Code",
              }),
              (0, l.jsxs)("div", {
                className:
                  "flex gap-1 justify-between items-center bg-neutral-900 p-1.5 pl-3 border-1 border-neutral-900 rounded-md",
                children: [
                  (0, l.jsx)("p", {
                    className: "text-xs font-medium text-neutral-300",
                    children: e,
                  }),
                  (0, l.jsx)(S.CopyButton, {
                    value: e,
                    timeout: 2e3,
                    children: ({ copied: e, copy: t }) =>
                      (0, l.jsx)(A.Tooltip, {
                        label: e ? "Copied" : "Copy",
                        withArrow: !0,
                        position: "right",
                        children: (0, l.jsx)(T.ActionIcon, {
                          className:
                            "!bg-neutral-800 border-1 border-neutral-600",
                          color: e ? "teal" : "white",
                          variant: "subtle",
                          onClick: t,
                          children: e
                            ? (0, l.jsx)(R.IconCheck, {
                                style: { width: (0, D.rem)(12) },
                              })
                            : (0, l.jsx)(L.IconCopy, {
                                style: { width: (0, D.rem)(12) },
                              }),
                        }),
                      }),
                  }),
                ],
              }),
            ],
          }),
        ],
      });
    };
    var M = e.i(836733),
      P = e.i(469401),
      F = e.i(679240),
      E = e.i(145288),
      $ = e.i(682834);
    let z = () =>
        (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsx)("div", {
              className: "mb-4 mt-3.5 mx-5 flex flex-col gap-3",
              children: [
                "Earn trading commission  via a multi-level referral system: receive 35% from direct referrals (Level 1), 3% from their referrals (Level 2), and 2% from third-layer referrals (Level 3).",
                "All referral earnings can be claimed weekly directly from your wallet. ",
              ].map((e, t) =>
                (0, l.jsxs)(
                  "div",
                  {
                    className: "flex gap-2 items-start text-neutral-400",
                    children: [
                      (0, l.jsx)("div", {
                        className: "pt-2",
                        children: (0, l.jsx)($.IconCircleFilled, { size: 6 }),
                      }),
                      (0, l.jsx)("p", {
                        className: "text-sm font-normal text-neutral-400",
                        children: e,
                      }),
                    ],
                  },
                  t
                )
              ),
            }),
            (0, l.jsx)("div", {
              className: "bg-black",
              children: (0, l.jsx)(F.default, {
                columns: [
                  { key: "levels", label: "LEVELS", className: "pl-5" },
                  { key: "relationShip", label: "Relationship" },
                  {
                    key: "commissionRate",
                    label: "Commission Rate",
                    className: "pr-5 text-right",
                  },
                ],
                data: [
                  {
                    level: "1",
                    relationShip: "Direct Referrals",
                    commissionRate: "35%",
                  },
                  {
                    level: "2",
                    relationShip: "Referrals of Your Referrals",
                    commissionRate: "3%",
                  },
                  {
                    level: "3",
                    relationShip: "Third-Layer Referrals",
                    commissionRate: "2%",
                  },
                ],
                pagination: !1,
                renderRow: (e) =>
                  (0, l.jsxs)(l.Fragment, {
                    children: [
                      (0, l.jsxs)(E.Table.Td, {
                        className: "pl-5 w-1/3",
                        children: ["Level ", e.level],
                      }),
                      (0, l.jsx)(E.Table.Td, {
                        className: "w-1/3 uppercase",
                        children: e.relationShip,
                      }),
                      (0, l.jsx)(E.Table.Td, {
                        className: "pr-5 text-right w-1/3",
                        children: e.commissionRate,
                      }),
                    ],
                  }),
              }),
            }),
          ],
        }),
      H = ({ currentLevel: e = "0", tableData: t }) =>
        (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsx)("div", {
              className: "mb-4 pt-3.5 mx-5 flex flex-col gap-3",
              children: [
                "All referral earnings can be claimed weekly directly from your wallet.",
              ].map((e, t) =>
                (0, l.jsxs)(
                  "div",
                  {
                    className: "flex gap-2 items-start text-neutral-400",
                    children: [
                      (0, l.jsx)("div", {
                        className: "pt-2",
                        children: (0, l.jsx)($.IconCircleFilled, { size: 6 }),
                      }),
                      (0, l.jsx)("p", {
                        className: "text-sm font-normal text-neutral-400",
                        children: e,
                      }),
                    ],
                  },
                  t
                )
              ),
            }),
            (0, l.jsx)("div", {
              className: "bg-black",
              children: (0, l.jsx)(F.default, {
                columns: [
                  {
                    key: "level",
                    label: "LEVEL",
                    className: "pl-5 min-w-[85px]",
                  },
                  { key: "fees", label: "Fees", className: "text-right" },
                  {
                    key: "discount",
                    label: "Discount",
                    className: "text-right",
                  },
                  {
                    key: "nameOfLevel",
                    label: "Badge",
                    className: "pr-5 text-right",
                  },
                ],
                data: t,
                pagination: !1,
                renderRow: (t) => {
                  let { title: a } = (0, u.getPassDetails)(
                    String(t?.level || 1)
                  );
                  return (0, l.jsxs)(l.Fragment, {
                    children: [
                      (0, l.jsx)(E.Table.Td, {
                        className: "pl-5 w-1/4",
                        children: (0, l.jsxs)("div", {
                          className: "flex gap-1 items-center flex-wrap",
                          children: [
                            (0, l.jsxs)("span", {
                              children: ["Level ", t?.level],
                            }),
                            e && e === String(t?.level)
                              ? (0, l.jsx)("div", {
                                  className:
                                    "rounded-2xl bg-[linear-gradient(180deg,#155DFC_0%,#0D3796_100%)] backdrop-blur-md py-0.5 px-2 ml-1 text-xs font-semibold text-white leading-[120%]",
                                  children: "You",
                                })
                              : null,
                          ],
                        }),
                      }),
                      (0, l.jsxs)(E.Table.Td, {
                        className: "w-1/4 text-right",
                        children: [t?.fees, "%"],
                      }),
                      (0, l.jsxs)(E.Table.Td, {
                        className: "w-1/4 text-right",
                        children: [t?.discount, "%"],
                      }),
                      (0, l.jsx)(E.Table.Td, {
                        className: "pr-5 text-right w-1/4 uppercase",
                        children: a,
                      }),
                    ],
                  });
                },
              }),
            }),
          ],
        }),
      B = ({
        opened: e = !1,
        closeModal: t = () => {},
        currentLevel: i,
        levelsData: n,
      }) => {
        let [d, o] = (0, a.useState)("referral"),
          c = (0, a.useMemo)(() => ["referral", "Rebate"], []),
          [x, m] = (0, a.useState)(0);
        return (0, l.jsx)(M.default, {
          centered: !0,
          opened: e,
          onClose: t,
          title: "How it works?",
          size: "lg",
          content: (0, l.jsxs)("div", {
            children: [
              (0, l.jsx)("div", {
                className: "pt-4 px-2",
                children: (0, l.jsx)(P.GTRSegmentedControl, {
                  variant: "secondary",
                  value: d,
                  onChange: (e) => {
                    m(c.indexOf(e) - c.indexOf(d)), o(e);
                  },
                  data: [
                    { value: "referral", label: "Referral" },
                    { value: "rebate", label: "Rebate" },
                  ],
                }),
              }),
              (0, l.jsx)("div", {
                className: "relative",
                children: (0, l.jsx)(s.AnimatePresence, {
                  initial: !1,
                  custom: x,
                  mode: "wait",
                  children: (0, l.jsx)(
                    r.motion.div,
                    {
                      custom: x,
                      variants: {
                        enter: (e) => ({
                          x: e > 0 ? 40 : e < 0 ? -40 : 0,
                          opacity: 0,
                        }),
                        center: { x: 0, opacity: 1 },
                        exit: (e) => ({
                          x: e > 0 ? -40 : 40 * (e < 0),
                          opacity: 0,
                        }),
                      },
                      initial: "enter",
                      animate: "center",
                      exit: "exit",
                      transition: { duration: 0.15, ease: "easeInOut" },
                      className: "w-full",
                      children:
                        "referral" === d
                          ? (0, l.jsx)(z, {})
                          : (0, l.jsx)(H, {
                              currentLevel: String(i || 1),
                              tableData: n || [],
                            }),
                    },
                    d
                  ),
                }),
              }),
            ],
          }),
        });
      },
      O = {
        src: e.i(367897).default,
        width: 752,
        height: 113,
        blurWidth: 8,
        blurHeight: 1,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAYAAADjAO9DAAAALElEQVR42gEhAN7/AAEAAf0DAgj9CQQY/Q8GKP0RCCr9Gg83/TctVf0pIUH9jlQKQVT2jB8AAAAASUVORK5CYII=",
      };
    var V = e.i(963327),
      q = e.i(791123);
    let U = (0, b.default)("outline", "arrows-minimize", "ArrowsMinimize", [
      ["path", { d: "M5 9l4 0l0 -4", key: "svg-0" }],
      ["path", { d: "M3 3l6 6", key: "svg-1" }],
      ["path", { d: "M5 15l4 0l0 4", key: "svg-2" }],
      ["path", { d: "M3 21l6 -6", key: "svg-3" }],
      ["path", { d: "M19 9l-4 0l0 -4", key: "svg-4" }],
      ["path", { d: "M15 9l6 -6", key: "svg-5" }],
      ["path", { d: "M19 15l-4 0l0 4", key: "svg-6" }],
      ["path", { d: "M15 15l6 6", key: "svg-7" }],
    ]);
    var W = e.i(902161);
    let Y = {
        src: e.i(554276).default,
        width: 18,
        height: 15,
        blurWidth: 0,
        blurHeight: 0,
      },
      G = (0, b.default)("filled", "gift-filled", "GiftFilled", [
        [
          "path",
          {
            d: "M11 14v8h-4a3 3 0 0 1 -3 -3v-4a1 1 0 0 1 1 -1h6zm8 0a1 1 0 0 1 1 1v4a3 3 0 0 1 -3 3h-4v-8h6zm-2.5 -12a3.5 3.5 0 0 1 3.163 5h.337a2 2 0 0 1 2 2v1a2 2 0 0 1 -2 2h-7v-5h-2v5h-7a2 2 0 0 1 -2 -2v-1a2 2 0 0 1 2 -2h.337a3.486 3.486 0 0 1 -.337 -1.5c0 -1.933 1.567 -3.5 3.483 -3.5c1.755 -.03 3.312 1.092 4.381 2.934l.136 .243c1.033 -1.914 2.56 -3.114 4.291 -3.175l.209 -.002zm-9 2a1.5 1.5 0 0 0 0 3h3.143c-.741 -1.905 -1.949 -3.02 -3.143 -3zm8.983 0c-1.18 -.02 -2.385 1.096 -3.126 3h3.143a1.5 1.5 0 1 0 -.017 -3z",
            key: "svg-0",
          },
        ],
      ]),
      Q = {
        src: e.i(975254).default,
        width: 20,
        height: 21,
        blurWidth: 0,
        blurHeight: 0,
      };
    var K = e.i(574079);
    let _ = ({
      claimableRewards: e = 0,
      totalVolume: t = 0,
      totalClaimed: a = 0,
      isLoading: s = !1,
    }) => {
      let r = [
        {
          key: "1",
          title: "Available Rewards",
          value: (0, u.convertIntl)(e),
          icon: (0, l.jsx)(G, {
            className: "text-[#D4D4D4] p-1 bg-neutral-900 rounded-md",
            size: 26,
          }),
        },
        {
          key: "2",
          title: "Volume Traded",
          value: "$" + (0, u.formatBigNumber)(t),
          icon: (0, l.jsx)(i.default, {
            src: Q,
            alt: "Icon Users",
            width: 28,
            className: "p-1 px-1.5 text-[#D4D4D4] bg-neutral-900 rounded-md",
          }),
        },
        {
          key: "3",
          title: "Claimed Rebate",
          value: (0, u.convertIntl)(a),
          icon: (0, l.jsx)(i.default, {
            src: Y,
            alt: "Icon Wallet",
            width: 28,
            className: "p-1 px-1.5 text-violet-400 bg-neutral-900 rounded-md",
          }),
        },
      ];
      return (0, l.jsx)("div", {
        className: "grid grid-cols-2 md:grid-cols-3 gap-1.5",
        children: r?.map((e) =>
          (0, l.jsx)(
            "div",
            {
              className: (0, n.default)(
                "border-1 border-neutral-900 rounded-xl p-1",
                { "col-span-2 md:col-span-1": e?.key === "3" }
              ),
              children: (0, l.jsxs)("div", {
                className:
                  "px-3.5 py-3 bg-gradient-gold-diagonal rounded-lg flex flex-col justify-between h-full gap-0.5",
                children: [
                  (0, l.jsxs)("div", {
                    className: "flex justify-between items-center",
                    children: [
                      (0, l.jsx)("p", {
                        className: "text-[#7E8194] text-sm",
                        children: e?.title,
                      }),
                      e?.icon,
                    ],
                  }),
                  s
                    ? (0, l.jsx)(K.Skeleton, {
                        height: 32,
                        width: 100,
                        className:
                          "animate-pulse [&[data-visible]::after]:!bg-neutral-700/50",
                      })
                    : (0, l.jsx)("p", {
                        className:
                          "text-white font-bold text-2xl animate-in fade-in slide-in-from-bottom-2 duration-700",
                        children: e?.value,
                      }),
                ],
              }),
            },
            e?.key
          )
        ),
      });
    };
    var J = e.i(600017),
      X = e.i(744125),
      Z = e.i(344423);
    let ee = {
        src: e.i(97564).default,
        width: 36,
        height: 37,
        blurWidth: 0,
        blurHeight: 0,
      },
      el = {
        src: e.i(242794).default,
        width: 36,
        height: 37,
        blurWidth: 0,
        blurHeight: 0,
      },
      et = ({
        hyperliquidRewards: e = 0,
        solanaRewards: s = 0,
        rwaPerpsRewards: r = 0,
        isLoading: n = !1,
      }) => {
        let [d, o] = (0, a.useState)(""),
          x = (e) => {
            (0, X.notifyErrorToast)({
              message: e,
              icon: (0, l.jsx)(Z.IconAlertCircle, { size: 20 }),
            });
          },
          m = async (e, t, a) => {
            if (a <= 0) x("Not Enough Balance to claim");
            else {
              o(e);
              try {
                let { success: e, message: a } = await (0,
                c.claimReferralRebates)({ section: t, type: "rebates" });
                e
                  ? (0, X.notifySuccessToast)({
                      message: "Claimed successfully",
                      icon: (0, l.jsx)(J.default, { icon: "success" }),
                    })
                  : x(
                      a || "Failed to claim rewards, Please try after some time"
                    );
              } catch (e) {
                x("Failed to claim rewards, Please try after some time"),
                  console.log(
                    `Error in claiming rewards (section: ${t}): ${e}`
                  );
              } finally {
                o("");
              }
            }
          },
          h = [
            {
              key: "1",
              title: "Hyperliquid Rebates",
              tooltip: "You will receive money in the Hyperliquid wallet.",
              value: e,
              image: ee,
              isComingSoon: !1,
              onClick: () => m("1", "hyperliquid", e),
            },
            {
              key: "2",
              title: "Solana Rebates",
              tooltip: "You will receive money in USDC-Solana.",
              image: el,
              value: s,
              isComingSoon: !1,
              onClick: () => m("2", "memes", s),
            },
          ];
        return (0, l.jsx)("div", {
          className: "grid grid-cols-1 gap-1.5",
          children: h?.map((e) =>
            (0, l.jsx)(
              "div",
              {
                className:
                  "border-1 border-neutral-900 rounded-xl p-1 max-h-[300",
                children: (0, l.jsxs)("div", {
                  className:
                    "px-3.5 py-3 bg-gradient-purple-diagonal rounded-lg flex gap-4 items-center w-full",
                  children: [
                    (0, l.jsx)("div", {
                      className: "w-[40px]",
                      children: (0, l.jsx)(i.default, {
                        src: e?.image,
                        alt: e?.title,
                        width: 40,
                      }),
                    }),
                    (0, l.jsxs)("div", {
                      className:
                        "flex flex-col justify-between h-full w-full gap-0.5",
                      children: [
                        (0, l.jsxs)("div", {
                          className: "flex items-center gap-1",
                          children: [
                            (0, l.jsx)(A.Tooltip, {
                              label: e?.tooltip,
                              className:
                                "bg-neutral-950 border-1 border-neutral-700 text-white py-1 px-2 text-sm",
                              position: "top",
                              withArrow: !0,
                              children: (0, l.jsx)("p", {
                                className:
                                  "text-[#7E8194] text-sm underline underline-offset-1 decoration-dotted",
                                children: e?.title,
                              }),
                            }),
                            e?.isComingSoon
                              ? (0, l.jsx)("p", {
                                  className:
                                    "bg-[#00C95126] py-0.5 px-1.5 rounded text-2xs text-green-200",
                                  children: "COMING SOON",
                                })
                              : null,
                          ],
                        }),
                        (0, l.jsxs)("div", {
                          className: "flex justify-between items-end",
                          children: [
                            n
                              ? (0, l.jsx)(K.Skeleton, {
                                  height: 32,
                                  width: 120,
                                  className:
                                    "animate-pulse [&[data-visible]::after]:!bg-purple-400/30",
                                })
                              : (0, l.jsx)("p", {
                                  className:
                                    "text-white font-bold text-2xl animate-in fade-in slide-in-from-bottom-2 duration-700",
                                  children: e?.isComingSoon
                                    ? "N/A"
                                    : (0, u.convertIntl)(e?.value),
                                }),
                            (0, l.jsx)(t.Button, {
                              onClick: e?.isComingSoon ? null : e?.onClick,
                              className:
                                "!bg-yellow-200 disabled:!opacity-25 py-1.5 h-[30px] w-[100px] text-xs font-semibold !text-neutral-900",
                              disabled: n || e?.isComingSoon,
                              loading: d === e?.key,
                              children: "Claim Now",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              },
              e?.key
            )
          ),
        });
      },
      ea = ({ detailsData: e, isLoading: s }) => {
        let [r, o] = (0, a.useState)(!0);
        return (0, l.jsxs)("div", {
          className: "flex gap-5",
          children: [
            (0, l.jsxs)("div", {
              className: "flex flex-col gap-2 w-full xl:w-[65%]",
              children: [
                (0, l.jsx)("div", {
                  className:
                    "p-1 border-1 border-neutral-900 rounded-xl flex flex-col gap-2",
                  children: (0, l.jsxs)(q.BackgroundImage, {
                    src: O.src,
                    className: "px-5 pt-5 pb-[30px] rounded-lg",
                    style: { backgroundPosition: "unset" },
                    children: [
                      (0, l.jsxs)("div", {
                        className: "flex items-center mb-2",
                        children: [
                          (0, l.jsx)(i.default, {
                            src: V.default,
                            alt: "GTR Logo",
                            width: 100,
                            priority: !0,
                          }),
                          (0, l.jsx)(g.Divider, {
                            orientation: "vertical",
                            className: "border-[#878787] mx-1.5 my-0.5",
                          }),
                          (0, l.jsx)("p", {
                            className: "text-xs text-neutral-300 font-light",
                            children: "Rebate",
                          }),
                        ],
                      }),
                      (0, l.jsx)("h2", {
                        className:
                          "text-2xl font-semibold text-neutral-300 leading-[120%] my-1",
                        children: "Trade More & Earn More",
                      }),
                      (0, l.jsx)("p", {
                        className:
                          "text-xs text-neutral-300 font-light leading-[120%]",
                        children:
                          "Claim your cashback straight to your wallet.",
                      }),
                    ],
                  }),
                }),
                (0, l.jsx)(_, {
                  claimableRewards: e?.totalRebatesClaimable,
                  totalVolume: e?.volumeTraded,
                  totalClaimed:
                    e?.referralDetails?.hyperliquid?.rebates?.claimed +
                    e?.referralDetails?.memes?.rebates?.claimed +
                    e?.referralDetails?.rwaPerps?.rebates?.claimed,
                  isLoading: s,
                }),
                (0, l.jsx)(et, {
                  hyperliquidRewards:
                    e?.referralDetails?.hyperliquid?.rebates?.earned -
                    e?.referralDetails?.hyperliquid?.rebates?.claimed,
                  solanaRewards:
                    e?.referralDetails?.memes?.rebates?.earned -
                    e?.referralDetails?.memes?.rebates?.claimed,
                  rwaPerpsRewards:
                    e?.referralDetails?.rwaPerps?.rebates?.earned -
                    e?.referralDetails?.rwaPerps?.rebates?.claimed,
                  isLoading: s,
                }),
              ],
            }),
            (0, l.jsxs)("div", {
              className: "w-[35%] hidden xl:block",
              children: [
                (0, l.jsxs)("div", {
                  className: (0, n.default)(
                    "bg-neutral-950 rounded-lg overflow-hidden border-1 border-neutral-900 transition-opacity duration-300",
                    { "opacity-0 h-0": !r, "opacity-100": r }
                  ),
                  children: [
                    (0, l.jsxs)("div", {
                      className:
                        "bg-neutral-900 py-2.5 px-3.5 flex justify-between items-center",
                      children: [
                        (0, l.jsx)("h1", {
                          className:
                            "text-sm font-medium text-neutral-100 w-3/5",
                          children: "How It Works?",
                        }),
                        (0, l.jsxs)("div", {
                          className:
                            "transition-opacity duration-200 delay-100 ease-out opacity-0 group-hover:opacity-100 whitespace-nowrap pl-3 w-2/5",
                          children: [
                            (0, l.jsx)(t.Button, {
                              type: "button",
                              "aria-label": "Dismiss Hyperliquid badge",
                              className:
                                "absolute right-px top-px rounded !bg-black/20 w-3 h-3 flex justify-center items-center",
                              children: (0, l.jsx)(i.default, {
                                src: d,
                                alt: "Icon Question Circle",
                                width: 20,
                              }),
                            }),
                            (0, l.jsx)(W.default, {
                              position: "right",
                              direction: "row",
                              width: 96,
                            }),
                          ],
                        }),
                        (0, l.jsx)(t.Button, {
                          className: "m-0 p-0 !bg-transparent",
                          onClick: () => o(!r),
                          children: (0, l.jsx)(U, {
                            className:
                              "text-neutral-300 border-1 border-neutral-800 rounded-lg p-1.5  hover:bg-neutral-800 transition-all duration-200 ease-in-out",
                            size: 30,
                          }),
                        }),
                      ],
                    }),
                    (0, l.jsx)(H, {
                      currentLevel: String(e?.levelInfo?.level || 1),
                      tableData: e?.allLevels || [],
                    }),
                  ],
                }),
                (0, l.jsx)("div", {
                  className: (0, n.default)(
                    "bg-white/[2%] rounded-md backdrop-blur-md group w-10 hover:w-[200px] h-10 overflow-hidden transition-all duration-300 ease-out will-change-[width] cursor-pointer",
                    { hidden: r, "opacity-100": !r }
                  ),
                  onClick: () => o(!r),
                  children: (0, l.jsx)("div", {
                    className: "flex items-center h-full",
                    children: (0, l.jsxs)("div", {
                      className: "flex items-center justify-center min-w-0",
                      children: [
                        (0, l.jsx)("div", {
                          className:
                            "transition-opacity duration-150 ease-out opacity-100 group-hover:opacity-0 absolute",
                          children: (0, l.jsx)(i.default, {
                            src: d,
                            alt: "Hyperliquid Logo",
                            width: 30,
                            height: 30,
                            className: "flex-shrink-0",
                          }),
                        }),
                        (0, l.jsxs)("div", {
                          className:
                            "transition-opacity duration-200 delay-100 ease-out opacity-0 group-hover:opacity-100 whitespace-nowrap flex gap-2 items-center !bg-gradient-gold-diagonal px-1.5 py-1 pr-5 rounded-full border border-neutral-800 cursor-pointer",
                          children: [
                            (0, l.jsx)(i.default, {
                              src: d,
                              alt: "Hyperliquid Logo",
                              width: 30,
                              height: 30,
                              className: "flex-shrink-0",
                            }),
                            (0, l.jsx)("p", {
                              className: "text-sm font-medium text-neutral-100",
                              children: "How It Works?",
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                }),
              ],
            }),
          ],
        });
      },
      es = ({
        claimableRewards: e = 0,
        totalReferrals: t = 0,
        totalEarnings: a = 0,
        totalClaimed: s = 0,
        isLoading: r = !1,
      }) => {
        let d = [
          {
            key: "1",
            title: "Available Rewards",
            value: (0, u.convertIntl)(e),
            icon: (0, l.jsx)(G, {
              className:
                "text-[#D4D4D4] p-1 bg-neutral-900 rounded-md w-6 xl:w-7",
            }),
          },
          {
            key: "2",
            title: "Total Referrals",
            value: t,
            icon: (0, l.jsx)(i.default, {
              src: Q,
              alt: "Icon Users",
              width: 28,
              className:
                "p-1 px-1.5 text-[#D4D4D4] bg-neutral-900 rounded-md w-6 xl:w-7",
            }),
          },
          {
            key: "4",
            title: "Claimed Rewards",
            value: (0, u.convertIntl)(s),
            icon: (0, l.jsx)(i.default, {
              src: Y,
              alt: "Icon Wallet",
              width: 28,
              className: "p-1 px-1.5 text-violet-400 bg-neutral-900 rounded-md",
            }),
          },
        ];
        return (0, l.jsx)("div", {
          className: "grid grid-cols-2 md:grid-cols-3 gap-1.5 mb-2",
          children: d?.map((e) =>
            (0, l.jsx)(
              "div",
              {
                className: (0, n.default)(
                  "border-1 border-neutral-900 rounded-xl p-1",
                  { "col-span-2 md:col-span-1": e?.key === "4" }
                ),
                children: (0, l.jsxs)(
                  "div",
                  {
                    className:
                      "px-3.5 py-3 bg-gradient-gold-diagonal rounded-lg flex flex-col justify-between h-full gap-0.5",
                    children: [
                      (0, l.jsx)("p", {
                        className: "text-[#7E8194] text-xs xl:text-sm",
                        children: e?.title,
                      }),
                      (0, l.jsxs)("div", {
                        className: "flex justify-between items-center",
                        children: [
                          r
                            ? (0, l.jsx)(K.Skeleton, {
                                height: 32,
                                width: 100,
                                className:
                                  "animate-pulse [&[data-visible]::after]:!bg-neutral-700/50",
                              })
                            : (0, l.jsx)("p", {
                                className:
                                  "text-white font-bold text-xl xl:text-2xl animate-in fade-in slide-in-from-bottom-2 duration-700",
                                children: e?.value,
                              }),
                          e.icon,
                        ],
                      }),
                    ],
                  },
                  e?.key
                ),
              },
              e?.key
            )
          ),
        });
      },
      er = {
        src: e.i(268582).default,
        width: 36,
        height: 37,
        blurWidth: 0,
        blurHeight: 0,
      },
      ei = ({
        hyperliquidRewards: e = 0,
        solanaRewards: s = 0,
        rwaPerpsRewards: r = 0,
        isLoading: n = !1,
      }) => {
        let [d, o] = (0, a.useState)(""),
          x = (e) => {
            (0, X.notifyErrorToast)({
              message: e,
              icon: (0, l.jsx)(Z.IconAlertCircle, { size: 20 }),
            });
          },
          m = async (e, t, a) => {
            if (a <= 0) x("Not Enough Balance to claim");
            else {
              o(e);
              try {
                let { success: e, message: a } = await (0,
                c.claimReferralRebates)({ section: t, type: "referral" });
                e
                  ? (0, X.notifySuccessToast)({
                      message: "Claimed successfully",
                      icon: (0, l.jsx)(J.default, { icon: "success" }),
                    })
                  : x(
                      a || "Failed to claim rewards, Please try after some time"
                    );
              } catch (e) {
                x("Failed to claim rewards, Please try after some time"),
                  console.log(
                    `Error in claiming rewards (section: ${t}): ${e}`
                  );
              } finally {
                o("");
              }
            }
          },
          h = [
            {
              key: "1",
              title: "Hyperliquid Rewards",
              tooltip: "You will receive money in the Hyperliquid wallet.",
              value: e || 0,
              isComingSoon: !1,
              image: ee,
              onClick: () => m("1", "hyperliquid", e),
            },
            {
              key: "2",
              title: "Solana Rewards",
              tooltip: "You will receive money in USDC-Solana.",
              value: s || 0,
              isComingSoon: !1,
              image: el,
              onClick: () => m("2", "memes", s),
            },
            {
              key: "3",
              title: "RWA Perps Rewards",
              tooltip: "You will receive money in USDC-Arbitrum.",
              value: r || 0,
              isComingSoon: !0,
              image: er,
              onClick: () => m("3", "rwaPerps", r),
            },
          ];
        return (0, l.jsx)("div", {
          className: "grid grid-cols-1 md:grid-cols-3 gap-1.5",
          children: h?.map((e) =>
            (0, l.jsx)(
              "div",
              {
                className: "border-1 border-neutral-900 rounded-xl p-1",
                children: (0, l.jsxs)("div", {
                  className:
                    "px-3.5 py-3 bg-gradient-purple-diagonal rounded-lg flex flex-col justify-between h-full gap-0.5",
                  children: [
                    (0, l.jsxs)("div", {
                      className:
                        "flex justify-between items-start xl:items-center",
                      children: [
                        (0, l.jsxs)("div", {
                          className: "flex flex-col",
                          children: [
                            n
                              ? (0, l.jsx)(K.Skeleton, {
                                  height: 32,
                                  width: 120,
                                  className:
                                    "animate-pulse [&[data-visible]::after]:!bg-purple-400/30",
                                })
                              : (0, l.jsx)("p", {
                                  className:
                                    "text-white font-bold text-2xl animate-in fade-in slide-in-from-bottom-2 duration-700",
                                  children: e?.isComingSoon
                                    ? "N/A"
                                    : (0, u.convertIntl)(e?.value),
                                }),
                            (0, l.jsxs)("div", {
                              className: "flex items-center gap-1 flex-wrap",
                              children: [
                                (0, l.jsx)(A.Tooltip, {
                                  label: e?.tooltip,
                                  className:
                                    "bg-neutral-950 border-1 border-neutral-700 text-white py-1 px-2 text-sm",
                                  position: "top",
                                  withArrow: !0,
                                  children: (0, l.jsx)("p", {
                                    className:
                                      "text-[#7E8194] text-xs xl:text-sm underline underline-offset-1 decoration-dotted",
                                    children: e?.title,
                                  }),
                                }),
                                e?.isComingSoon
                                  ? (0, l.jsx)("p", {
                                      className:
                                        "bg-[#00C95126] py-0.5 px-1.5 rounded text-2xs text-green-200",
                                      children: "COMING SOON",
                                    })
                                  : null,
                              ],
                            }),
                          ],
                        }),
                        (0, l.jsx)("div", {
                          className: "min-w-[40px]",
                          children: (0, l.jsx)(i.default, {
                            src: e?.image,
                            alt: e?.title,
                            width: 40,
                          }),
                        }),
                      ],
                    }),
                    (0, l.jsx)("div", {
                      className: "flex justify-end md:justify-start",
                      children: (0, l.jsx)(t.Button, {
                        onClick: e?.isComingSoon ? null : e?.onClick,
                        className:
                          "!bg-yellow-200 disabled:!opacity-25 py-1.5 h-[30px] w-full text-xs font-semibold !text-neutral-900 mt-4 max-w-[100px] md:max-w-full ",
                        disabled: n || e?.isComingSoon,
                        loading: d === e?.key,
                        children: "Claim Now",
                      }),
                    }),
                  ],
                }),
              },
              e?.key
            )
          ),
        });
      };
    var en = e.i(401851),
      ed = e.i(522016),
      eo = e.i(890357),
      ec = e.i(346944);
    let ex = [
        { key: "username", label: "Username", className: "pl-5" },
        { key: "tier", label: "Tier" },
        { key: "joined", label: "Joined" },
        {
          key: "lifetimeVolume",
          label: "Lifetime Volume",
          className: "text-right pr-5",
        },
      ],
      em = ({ referralData: e, isLoading: t }) => {
        let { profileData: a } = (0, eo.useProfileStore)(
          (0, ec.useShallow)((e) => ({ profileData: e.profileData }))
        );
        return (0, l.jsx)(F.default, {
          columns: ex,
          data: e,
          pageLimit: 6,
          emptyText: "No Referrals Found",
          pagination: !1,
          loading: t,
          enableMobileCards: !0,
          showMobileVersion: !0,
          mobileCardSkeletonHeight: 180,
          renderRow: (e) => {
            let { level: t } = (0, p.getTradeVolumeBadgeProgress)(
                e?.volumeTraded
              ),
              { title: s, primaryColor: r } = (0, u.getPassDetails)(String(t));
            return (0, l.jsxs)(l.Fragment, {
              children: [
                (0, l.jsx)(E.Table.Td, {
                  className: "pl-5",
                  children: (0, l.jsx)(ed.default, {
                    href:
                      a?.username?.toLowerCase() === e?.username?.toLowerCase()
                        ? "/profile"
                        : `/profile/${e?.username}`,
                    target: "_blank",
                    className:
                      "hover:text-blue-400 transition-colors hover:underline",
                    children: e?.username,
                  }),
                }),
                (0, l.jsx)(E.Table.Td, {
                  children: (0, l.jsxs)("div", {
                    className: "flex gap-1.5 items-center",
                    children: [
                      (0, l.jsx)($.IconCircleFilled, {
                        className: `${r}`,
                        size: 12,
                      }),
                      (0, l.jsx)("p", {
                        className: "uppercase text-xs",
                        children: s,
                      }),
                    ],
                  }),
                }),
                (0, l.jsx)(E.Table.Td, {
                  children: (0, en.format)(
                    new Date(e?.createdAt),
                    "dd MMM yyyy"
                  ),
                }),
                (0, l.jsx)(E.Table.Td, {
                  className: "text-right pr-5",
                  children: (0, u.convertIntl)(e?.volumeTraded),
                }),
              ],
            });
          },
          renderMobileCard: (e) => {
            let { level: t } = (0, p.getTradeVolumeBadgeProgress)(
                e?.volumeTraded
              ),
              { title: s, primaryColor: r } = (0, u.getPassDetails)(String(t));
            return (0, l.jsxs)("div", {
              className: "flex flex-col gap-4",
              children: [
                (0, l.jsxs)("div", {
                  children: [
                    (0, l.jsx)("p", {
                      className: "text-xs text-neutral-500 uppercase mb-1.5",
                      children: "Username",
                    }),
                    (0, l.jsx)(ed.default, {
                      href:
                        a?.username?.toLowerCase() ===
                        e?.username?.toLowerCase()
                          ? "/profile"
                          : `/profile/${e?.username}`,
                      target: "_blank",
                      className:
                        "text-base font-semibold text-white hover:text-blue-400 transition-colors block",
                      children: e?.username,
                    }),
                  ],
                }),
                (0, l.jsxs)("div", {
                  className: "flex justify-between gap-4",
                  children: [
                    (0, l.jsxs)("div", {
                      children: [
                        (0, l.jsx)("p", {
                          className:
                            "text-xs text-neutral-500 uppercase mb-1.5",
                          children: "Tier",
                        }),
                        (0, l.jsxs)("div", {
                          className: "flex gap-1.5 items-center",
                          children: [
                            (0, l.jsx)($.IconCircleFilled, {
                              className: `${r}`,
                              size: 12,
                            }),
                            (0, l.jsx)("p", {
                              className:
                                "text-sm font-semibold uppercase text-neutral-300",
                              children: s,
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, l.jsxs)("div", {
                      children: [
                        (0, l.jsx)("p", {
                          className:
                            "text-xs text-neutral-500 uppercase mb-1.5",
                          children: "Joined",
                        }),
                        (0, l.jsx)("p", {
                          className: "text-sm font-semibold text-neutral-300",
                          children: (0, en.format)(
                            new Date(e?.createdAt),
                            "dd MMM yyyy"
                          ),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, l.jsxs)("div", {
                  children: [
                    (0, l.jsx)("p", {
                      className: "text-xs text-neutral-500 uppercase mb-1.5",
                      children: "Lifetime Volume",
                    }),
                    (0, l.jsx)("p", {
                      className: "text-base font-semibold text-white",
                      children: (0, u.convertIntl)(e?.volumeTraded),
                    }),
                  ],
                }),
              ],
            });
          },
          getMobileCardClassName: () => "bg-neutral-900/50",
        });
      };
    var eu = e.i(95567);
    let eh = (e) => {
        switch (e?.toLowerCase()) {
          case "claimed":
            return { color: "text-emerald-400", status: "Claimed" };
          case "pending":
            return { color: "text-yellow-300", status: "Pending" };
          case "failed":
            return { color: "text-red-400", status: "Failed" };
          default:
            return { color: "text-natural-400", status: "-----" };
        }
      },
      ep = [
        { key: "amount", label: "Amount", className: "pl-5" },
        { key: "type", label: "Type" },
        { key: "status", label: "Status" },
        { key: "date", label: "Date" },
        { key: "transaction", label: "Transaction" },
        { key: "section", label: "Section" },
        { key: "action", label: "Action", className: "text-right pr-5" },
      ],
      ef = ({ historyData: e, isLoading: t }) => (
        Array.from({ length: 10 }).map((e, l) => ({
          amount: "$150",
          type: "Reward",
          status: "completed",
          date: "2023-10-01",
          transaction: "TRN123456",
          action: "NA",
        })),
        (0, l.jsx)(F.default, {
          columns: ep,
          pagination: !1,
          pageLimit: 6,
          loading: t,
          emptyText: "No Transactions Found",
          data: e,
          enableMobileCards: !0,
          showMobileVersion: !0,
          mobileCardSkeletonHeight: 200,
          renderRow: (e) => {
            let { color: t, status: a } = eh(e?.status);
            return (0, l.jsxs)(l.Fragment, {
              children: [
                (0, l.jsx)(E.Table.Td, {
                  className: "pl-5",
                  children: (0, u.formatNumber)(e.amount),
                }),
                (0, l.jsx)(E.Table.Td, {
                  className: "uppercase",
                  children: e?.type,
                }),
                (0, l.jsx)(E.Table.Td, {
                  children: (0, l.jsxs)("div", {
                    className: "flex gap-1.5 items-center",
                    children: [
                      (0, l.jsx)($.IconCircleFilled, {
                        className: `${t}`,
                        size: 12,
                      }),
                      (0, l.jsx)("p", {
                        className: `uppercase ${t}`,
                        children: a,
                      }),
                    ],
                  }),
                }),
                (0, l.jsx)(E.Table.Td, {
                  children: (0, en.format)(
                    new Date(e?.createdAt),
                    "yyyy-MM-dd"
                  ),
                }),
                (0, l.jsx)(E.Table.Td, {
                  className: "uppercase",
                  children: (0, l.jsx)(eu.default, {
                    address: e?.transactionHash,
                    showTooltip: !1,
                  }),
                }),
                (0, l.jsx)(E.Table.Td, {
                  className: "uppercase",
                  children: e?.section,
                }),
                (0, l.jsx)(E.Table.Td, {
                  className: "text-right pr-5",
                  children: "N/A",
                }),
              ],
            });
          },
          renderMobileCard: (e) => {
            let { color: t, status: a } = eh(e?.status);
            return (0, l.jsxs)("div", {
              className: "flex flex-col gap-4",
              children: [
                (0, l.jsxs)("div", {
                  children: [
                    (0, l.jsx)("p", {
                      className: "text-xs text-neutral-500 uppercase mb-1.5",
                      children: "Amount",
                    }),
                    (0, l.jsx)("p", {
                      className: "text-base font-semibold text-white",
                      children: (0, u.formatNumber)(e.amount),
                    }),
                  ],
                }),
                (0, l.jsxs)("div", {
                  className: "flex justify-between gap-4",
                  children: [
                    (0, l.jsxs)("div", {
                      children: [
                        (0, l.jsx)("p", {
                          className:
                            "text-xs text-neutral-500 uppercase mb-1.5",
                          children: "Type",
                        }),
                        (0, l.jsx)("p", {
                          className:
                            "text-sm font-semibold uppercase text-neutral-300",
                          children: e?.type,
                        }),
                      ],
                    }),
                    (0, l.jsxs)("div", {
                      children: [
                        (0, l.jsx)("p", {
                          className:
                            "text-xs text-neutral-500 uppercase mb-1.5",
                          children: "Status",
                        }),
                        (0, l.jsxs)("div", {
                          className: "flex gap-1.5 items-center",
                          children: [
                            (0, l.jsx)($.IconCircleFilled, {
                              className: `${t}`,
                              size: 12,
                            }),
                            (0, l.jsx)("p", {
                              className: `text-sm font-semibold uppercase ${t}`,
                              children: a,
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, l.jsxs)("div", {
                  children: [
                    (0, l.jsx)("p", {
                      className: "text-xs text-neutral-500 uppercase mb-1.5",
                      children: "Date",
                    }),
                    (0, l.jsx)("p", {
                      className: "text-sm font-semibold text-neutral-300",
                      children: (0, en.format)(
                        new Date(e?.createdAt),
                        "yyyy-MM-dd"
                      ),
                    }),
                  ],
                }),
                (0, l.jsxs)("div", {
                  children: [
                    (0, l.jsx)("p", {
                      className: "text-xs text-neutral-500 uppercase mb-1.5",
                      children: "Transaction",
                    }),
                    (0, l.jsx)(eu.default, {
                      address: e?.transactionHash,
                      showTooltip: !1,
                      titleClassName: "text-sm text-neutral-300",
                      buttonSize: 14,
                    }),
                  ],
                }),
                (0, l.jsxs)("div", {
                  className: "flex justify-between gap-4",
                  children: [
                    (0, l.jsxs)("div", {
                      children: [
                        (0, l.jsx)("p", {
                          className:
                            "text-xs text-neutral-500 uppercase mb-1.5",
                          children: "Section",
                        }),
                        (0, l.jsx)("p", {
                          className:
                            "text-sm font-semibold uppercase text-neutral-300",
                          children: e?.section,
                        }),
                      ],
                    }),
                    (0, l.jsxs)("div", {
                      className: "text-right",
                      children: [
                        (0, l.jsx)("p", {
                          className:
                            "text-xs text-neutral-500 uppercase mb-1.5",
                          children: "Action",
                        }),
                        (0, l.jsx)("p", {
                          className: "text-sm font-semibold text-neutral-300",
                          children: "N/A",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            });
          },
          getMobileCardClassName: () => "bg-neutral-900/50",
        })
      ),
      eg = ({ detailsData: e, isLoading: t }) => {
        let [i, n] = (0, a.useState)("referrals"),
          d = (0, a.useMemo)(() => ["referrals", "transaction-history"], []),
          [o, c] = (0, a.useState)(0),
          { totalEarned: x, totalClaimed: m } = (() => {
            if (!e?.referralDetails) return { totalEarned: 0, totalClaimed: 0 };
            let l = Object.values(e.referralDetails),
              t = 0,
              a = 0;
            return (
              l.forEach((e) => {
                (t += e.referral.earned), (a += e.referral.claimed);
              }),
              { totalEarned: t, totalClaimed: a }
            );
          })();
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsx)(es, {
              claimableRewards: e?.totalReferralClaimable,
              totalReferrals: e?.totalReferredUsersCount,
              totalEarnings: x,
              totalClaimed: m,
              isLoading: t,
            }),
            (0, l.jsx)(ei, {
              hyperliquidRewards:
                e?.referralDetails?.hyperliquid?.referral?.earned -
                e?.referralDetails?.hyperliquid?.referral?.claimed,
              solanaRewards:
                e?.referralDetails?.memes?.referral?.earned -
                e?.referralDetails?.memes?.referral?.claimed,
              rwaPerpsRewards:
                e?.referralDetails?.rwaPerps?.referral?.earned -
                e?.referralDetails?.rwaPerps?.referral?.claimed,
              isLoading: t,
            }),
            (0, l.jsxs)("div", {
              className: "mt-2.5",
              children: [
                (0, l.jsx)(P.GTRSegmentedControl, {
                  variant: "secondary",
                  value: i,
                  onChange: (e) => {
                    c(d.indexOf(e) - d.indexOf(i)), n(e);
                  },
                  data: [
                    { value: "referrals", label: "Referrals" },
                    { value: "transaction-history", label: "Txn History" },
                  ],
                }),
                (0, l.jsx)("div", {
                  className: "relative mt-2.5",
                  children: (0, l.jsx)(s.AnimatePresence, {
                    initial: !1,
                    custom: o,
                    mode: "wait",
                    children: (0, l.jsx)(
                      r.motion.div,
                      {
                        custom: o,
                        variants: {
                          enter: (e) => ({
                            x: e > 0 ? 40 : e < 0 ? -40 : 0,
                            opacity: 0,
                          }),
                          center: { x: 0, opacity: 1 },
                          exit: (e) => ({
                            x: e > 0 ? -40 : 40 * (e < 0),
                            opacity: 0,
                          }),
                        },
                        initial: "enter",
                        animate: "center",
                        exit: "exit",
                        transition: { duration: 0.15, ease: "easeInOut" },
                        className: "w-full",
                        children:
                          "referrals" === i
                            ? (0, l.jsx)(em, {
                                referralData: e?.referredUsers,
                                isLoading: t,
                              })
                            : (0, l.jsx)(ef, {
                                historyData: e?.claimHistory,
                                isLoading: t,
                              }),
                      },
                      i
                    ),
                  }),
                }),
              ],
            }),
          ],
        });
      },
      eb = ({
        opened: e,
        onClose: t,
        level: a,
        fees: s,
        discount: r,
        nextLevelThreshold: i,
        remainingToNext: n,
        isLoading: d,
        currentLevel: o,
        levelsData: c,
      }) =>
        (0, l.jsx)(M.default, {
          opened: e,
          onClose: t,
          title: (0, l.jsx)("p", {
            className: "text-white text-base font-medium",
            children: "Badge Details",
          }),
          useDrawerOnMobile: !0,
          drawerHeight: "90%",
          content: (0, l.jsxs)("div", {
            children: [
              (0, l.jsx)(h, {
                level: d ? "1" : String(a),
                fees: String(s),
                discount: String(r),
                nextLevelThreshold: i,
                remainingToNext: n,
                isLoading: d,
              }),
              (0, l.jsx)(N, { currentLevel: o, levelsData: c }),
            ],
          }),
        });
    var ej = e.i(462337);
    e.s(
      [
        "default",
        0,
        () => {
          let { authenticated: e, ready: x } = (0, w.usePrivy)(),
            m = (0, k.useRouter)(),
            { login: u } = (0, C.useLogin)({
              onError: (e) => {
                console.log("Login error or modal closed:", e), m.push("/");
              },
            }),
            [f, g] = (0, a.useState)("referral"),
            [b, j] = (0, a.useState)(null),
            [v, y] = (0, a.useState)(!1),
            [T, { open: S, close: D }] = (0, o.useDisclosure)(!1);
          (0, a.useMemo)(() => ["referral", "Rebate"], []);
          let [A, R] = (0, a.useState)(0),
            [L, { open: M, close: P }] = (0, o.useDisclosure)(!1),
            F = async () => {
              y(!0);
              try {
                let { data: e, success: l } = await (0,
                c.getReferralRebatesDetails)();
                l ? j(e) : j(null);
              } catch (e) {
                j(null),
                  console.log(
                    "Error in getting referral and rebates details",
                    e
                  );
              } finally {
                y(!1);
              }
            };
          (0, a.useEffect)(() => {
            x && !e && u({ loginMethods: ["email"] });
          }, [x, e]),
            (0, a.useEffect)(() => {
              e && F();
            }, [e]);
          let {
            level: E,
            fees: $,
            discount: z,
            nextLevelThreshold: H,
            remainingToNext: O,
          } = (0, p.getTradeVolumeBadgeProgress)(b?.volumeTraded || 0);
          return (0, l.jsxs)(l.Fragment, {
            children: [
              (0, l.jsxs)("div", {
                className:
                  "bg-black min-h-[calc(100vh-48px)] px-3 md:px-9 py-4 md:py-7",
                children: [
                  (0, l.jsxs)("div", {
                    children: [
                      (0, l.jsxs)("div", {
                        className: "flex items-center gap-4",
                        children: [
                          (0, l.jsx)("h1", {
                            className:
                              "bg-clip-text text-transparent bg-[linear-gradient(90deg,#FFF_0%,#999_10%)] text-lg md:text-2xl font-medium leading-8",
                            children: "Affiliate Dashboard",
                          }),
                          (0, l.jsx)(t.Button, {
                            type: "button",
                            "aria-label": "Dismiss Hyperliquid badge",
                            className:
                              "sm:hidden rounded !bg-transparent flex justify-center items-center w-auto min-w-auto p-0",
                            onClick: () => M(),
                            children: (0, l.jsx)(i.default, {
                              src: d,
                              alt: "Icon Question Circle",
                              width: 25,
                            }),
                          }),
                        ],
                      }),
                      (0, l.jsx)("p", {
                        className: "text-neutral-500 text-sm",
                        children:
                          "Earn trading commission via a multi-level referral system: receive 35% from direct referrals (Level 1), 3% from their referrals (Level 2), and 2% from third-layer referrals (Level 3).",
                      }),
                    ],
                  }),
                  (0, l.jsx)("div", {
                    className: "my-5 flex items-center justify-end",
                    children: (0, l.jsx)(t.Button, {
                      rightSection: (0, l.jsx)(i.default, {
                        src: d,
                        alt: "Icon Question Circle",
                        width: 20,
                      }),
                      onClick: M,
                      className: (0, n.default)(
                        "hidden  sm:block !bg-gradient-gold-diagonal px-3 py-1 rounded-full border border-neutral-800 transition-opacity duration-300",
                        {
                          "xl:opacity-0": "referral" !== f,
                          "opacity-100": "referral" === f,
                        }
                      ),
                      children: "How it works",
                    }),
                  }),
                  (0, l.jsx)("div", {
                    className: "relative",
                    children: (0, l.jsxs)("div", {
                      className: "flex flex-col md:flex-row gap-5",
                      children: [
                        (0, l.jsx)("div", {
                          className: (0, n.default)(
                            "w-full md:w-[30%] xl:w-[25%]"
                          ),
                          children: (0, l.jsxs)("div", {
                            className: (0, n.default)(
                              "flex flex-col bg-neutral-950 border-1 border-neutral-900 rounded-lg overflow-hidden transition-all duration-700 ease-in-out transform h-auto",
                              {
                                "max-h-0 opacity-0 scale-y-95 md:max-h-[1000px] md:opacity-100 md:scale-y-100":
                                  "referral" !== f,
                                "max-h-[1000px] opacity-100 scale-y-100":
                                  "referral" === f,
                              }
                            ),
                            children: [
                              (0, l.jsx)(h, {
                                level: v ? "1" : String(E),
                                fees: String($),
                                discount: String(z),
                                nextLevelThreshold: H,
                                remainingToNext: O,
                                isLoading: v,
                              }),
                              (0, l.jsx)(t.Button, {
                                className:
                                  "xl:hidden h-9 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-white text-xs border border-neutral-600 mx-3.5 mb-4",
                                onClick: S,
                                rightSection: (0, l.jsx)(ej.IconChevronRight, {
                                  size: 14,
                                }),
                                children: "View More Details",
                              }),
                              (0, l.jsx)("div", {
                                className: "hidden xl:block",
                                children: (0, l.jsx)(N, {
                                  currentLevel: v ? 1 : E || 1,
                                  levelsData: b?.allLevels || [],
                                }),
                              }),
                              "referral" === f &&
                                (0, l.jsx)(I, { refCode: b?.referralCode }),
                            ],
                          }),
                        }),
                        (0, l.jsx)("div", {
                          className:
                            "w-full md:w-[70%] xl:w-[75%] flex flex-col gap-2.5",
                          children: (0, l.jsx)(s.AnimatePresence, {
                            initial: !1,
                            custom: A,
                            mode: "wait",
                            children: (0, l.jsx)(
                              r.motion.div,
                              {
                                custom: A,
                                variants: {
                                  enter: (e) => ({
                                    x: e > 0 ? 40 : e < 0 ? -40 : 0,
                                    opacity: 0,
                                  }),
                                  center: { x: 0, opacity: 1 },
                                  exit: (e) => ({
                                    x: e > 0 ? -40 : 40 * (e < 0),
                                    opacity: 0,
                                  }),
                                },
                                initial: "enter",
                                animate: "center",
                                exit: "exit",
                                transition: {
                                  duration: 0.15,
                                  ease: "easeInOut",
                                },
                                className: "w-full",
                                children:
                                  "referral" === f
                                    ? (0, l.jsx)(eg, {
                                        detailsData: b,
                                        isLoading: v,
                                      })
                                    : (0, l.jsx)(ea, {
                                        detailsData: b,
                                        isLoading: v,
                                      }),
                              },
                              f
                            ),
                          }),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              (0, l.jsx)(eb, {
                opened: T,
                onClose: D,
                level: v ? "1" : String(E),
                fees: String($),
                discount: String(z),
                nextLevelThreshold: H,
                remainingToNext: O,
                isLoading: v,
                currentLevel: v ? 1 : E || 1,
                levelsData: b?.allLevels || [],
              }),
              (0, l.jsx)(B, {
                opened: L,
                closeModal: P,
                currentLevel: String(E),
                levelsData: b?.allLevels || [],
              }),
            ],
          });
        },
      ],
      249054
    );
  },
]);
