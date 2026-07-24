(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  902282,
  223362,
  531952,
  288003,
  102761,
  449465,
  (e) => {
    "use strict";
    let t;
    var r,
      n,
      s,
      l,
      a,
      i,
      o,
      d,
      c,
      u,
      h,
      p,
      m,
      x,
      f,
      g,
      b,
      v,
      w,
      y = e.i(843476),
      j = e.i(657688),
      N = e.i(343794),
      C = e.i(618566),
      k = e.i(890357),
      S = e.i(271645);
    let E = (0, S.memo)(({ icon: e, text: t, className: r }) =>
        (0, y.jsxs)("div", {
          className: `flex gap-1 items-center bg-slate-900/10 border-1 px-1.5 py-0.5 rounded-sm transition-all duration-300 ${r}`,
          children: [
            e && (0, y.jsx)(j.default, { src: e, alt: t, width: 12 }),
            (0, y.jsx)("p", {
              className: "text-xs  text-white font-medium",
              children: t,
            }),
          ],
        })
      ),
      D = {
        src: e.i(526886).default,
        width: 80,
        height: 80,
        blurWidth: 0,
        blurHeight: 0,
      };
    e.s(["default", 0, D], 223362);
    var T = e.i(963327),
      A = e.i(345794),
      M = e.i(33550);
    let P = (0, M.default)("outline", "message", "Message", [
        ["path", { d: "M8 9h8", key: "svg-0" }],
        ["path", { d: "M8 13h6", key: "svg-1" }],
        [
          "path",
          {
            d: "M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z",
            key: "svg-2",
          },
        ],
      ]),
      I = (0, M.default)("outline", "speakerphone", "Speakerphone", [
        ["path", { d: "M18 8a3 3 0 0 1 0 6", key: "svg-0" }],
        [
          "path",
          { d: "M10 8v11a1 1 0 0 1 -1 1h-1a1 1 0 0 1 -1 -1v-5", key: "svg-1" },
        ],
        [
          "path",
          {
            d: "M12 8h0l4.524 -3.77a.9 .9 0 0 1 1.476 .692v12.156a.9 .9 0 0 1 -1.476 .692l-4.524 -3.77h-8a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h8",
            key: "svg-2",
          },
        ],
      ]),
      R = (0, M.default)("outline", "video", "Video", [
        [
          "path",
          {
            d: "M15 10l4.553 -2.276a1 1 0 0 1 1.447 .894v6.764a1 1 0 0 1 -1.447 .894l-4.553 -2.276v-4z",
            key: "svg-0",
          },
        ],
        [
          "path",
          {
            d: "M3 6m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z",
            key: "svg-1",
          },
        ],
      ]);
    var O = e.i(533372),
      z = e.i(770703),
      B = e.i(510158);
    let F = {
        src: e.i(496288).default,
        width: 14,
        height: 14,
        blurWidth: 0,
        blurHeight: 0,
      },
      L = {
        src: e.i(420409).default,
        width: 8,
        height: 14,
        blurWidth: 0,
        blurHeight: 0,
      },
      _ = {
        src: e.i(522075).default,
        width: 144,
        height: 144,
        blurWidth: 0,
        blurHeight: 0,
      };
    var K = e.i(974010),
      U = e.i(862278);
    let H = ({
      color: e = "yellow",
      size: t = 10,
      animationDuration: r = 1e3,
    }) =>
      (0, y.jsxs)("span", {
        className: "relative flex justify-center items-center",
        children: [
          (0, y.jsx)("span", {
            style: {
              background: e,
              width: t + 4,
              height: t + 4,
              animationDuration: `${r}ms`,
            },
            className:
              "absolute inline-flex h-full w-full animate-ping duration-1000 rounded-full opacity-75",
          }),
          (0, y.jsx)("span", {
            style: { background: e, width: t, height: t },
            className: "relative inline-flex rounded-full",
          }),
        ],
      });
    e.s(["default", 0, H], 531952);
    var W = e.i(194390);
    let G = () => {
      let e = (0, C.usePathname)(),
        { isConnected: t } = (0, W.useHyperliquidWebSocket)();
      return t || e.includes("/rwa-perps")
        ? (0, y.jsxs)("div", {
            className:
              "flex gap-2 items-center py-1 px-2 bg-grass/20 rounded-sm h-[22px]",
            children: [
              (0, y.jsx)(H, {
                color: "#00FF99",
                size: 5,
                animationDuration: 2e3,
              }),
              (0, y.jsx)("p", {
                className: "text-grass text-xs leading-[110%] font-medium",
                children: "Connection is stable",
              }),
            ],
          })
        : (0, y.jsxs)("div", {
            className:
              "flex gap-2 items-center py-1 px-2 bg-blood/20 rounded-sm animate-vibrate",
            children: [
              (0, y.jsx)(H, { color: "#FF5D6D", size: 5 }),
              (0, y.jsx)("p", {
                className: "text-blood text-xs leading-[110%] font-medium",
                children: "Disconnected",
              }),
            ],
          });
    };
    var V = e.i(522016),
      Y = e.i(129277),
      X = e.i(905142);
    let q = ({ src: e, poster: t, ...r }) => {
      let n = (0, S.useRef)(null),
        [s, l] = (0, S.useState)(!1);
      return (
        (0, S.useEffect)(() => {
          let e = new window.IntersectionObserver(
            (t) => {
              t.forEach((t) => {
                t.isIntersecting && (l(!0), e.disconnect());
              });
            },
            { threshold: 0.1 }
          );
          return n.current && e.observe(n.current), () => e.disconnect();
        }, []),
        (0, y.jsx)("div", {
          ref: n,
          children: s && (0, y.jsx)("video", { src: e, poster: t, ...r }),
        })
      );
    };
    e.s(["default", 0, q], 288003);
    var $ = e.i(902161);
    let J = [
        {
          title: "Welcome to GTR.Trade Desktop (Beta)",
          description: [
            "We just launched our desktop experience & some features are still being polished.",
            "For the smoothest trading experience, we recommend our mobile app.",
          ],
          isWelcome: !0,
        },
        {
          title: "New Account Overview + X Connect",
          description: [
            "The Profile page has been redesigned to give you a clearer view of your account.",
            "Track balances, PNL, positions, and activity across products from one place. You can also connect your X account to enable social features.",
          ],
          video:
            "https://getrabbit.nyc3.cdn.digitaloceanspaces.com/website-assets/announcements/profile.mp4",
          poster:
            "https://getrabbit.nyc3.cdn.digitaloceanspaces.com/website-assets/announcements/profile.png",
        },
        {
          title: "Live Trading Feed",
          description: [
            "Feeds lets you view live trades and market activity on GTR.",
            "Discover trades, follow smart money, and track market moves in real time.",
          ],
          video:
            "https://getrabbit.nyc3.cdn.digitaloceanspaces.com/website-assets/announcements/feeds.mp4",
          poster:
            "https://getrabbit.nyc3.cdn.digitaloceanspaces.com/website-assets/announcements/feeds-2.png",
        },
        {
          title: "Community Airdrops",
          description: [
            "Community Airdrop is live. Track your exposure to all partner protocols you interact with on GTR.",
          ],
          poster:
            "https://getrabbit.nyc3.cdn.digitaloceanspaces.com/website-assets/announcements/airdrop.png",
          video:
            "https://getrabbit.nyc3.cdn.digitaloceanspaces.com/website-assets/announcements/airdrop.mp4",
        },
        {
          title: "Trading Terminal",
          description: [
            "We’ve updated the Terminal UI & UX for a cleaner look and smoother navigation. Check out the new layout and improvements live now.",
          ],
          poster:
            "https://getrabbit.nyc3.cdn.digitaloceanspaces.com/website-assets/announcements/terminal.png",
          video:
            "https://getrabbit.nyc3.cdn.digitaloceanspaces.com/website-assets/announcements/terminal.mp4",
        },
        {
          title: "Affiliate Program",
          description: [
            "The Affiliate Program is now live.",
            "You earn from both your trading and your referrals’ trading, and all rewards, XP, and stats update instantly and can be claimed bi-weekly.",
          ],
          poster:
            "https://getrabbit.nyc3.cdn.digitaloceanspaces.com/website-assets/announcements/affiliate.png",
          video:
            "https://getrabbit.nyc3.cdn.digitaloceanspaces.com/website-assets/announcements/affiliate.mp4",
        },
        {
          title: "GTR Clans",
          description: [
            "GTR Clans are groups created by traders, projects, or creators you can join on GTR to trade as part of a community.",
            "Different clans offer different perks, and you’re free to join the one you like.",
          ],
          video:
            "https://getrabbit.nyc3.cdn.digitaloceanspaces.com/website-assets/announcements/clans.mp4",
          poster:
            "https://getrabbit.nyc3.cdn.digitaloceanspaces.com/website-assets/announcements/clans.png",
        },
        {
          title: "GTR Competitions",
          description: [
            "This page hosts all live and upcoming trading competitions on GTR.",
            "Join a competition, trade as usual, and earn rewards based on your results.",
          ],
          video:
            "https://getrabbit.nyc3.cdn.digitaloceanspaces.com/website-assets/announcements/competitions.mp4",
          poster:
            "https://getrabbit.nyc3.cdn.digitaloceanspaces.com/website-assets/announcements/competitions.png",
        },
        {
          title: "Leaderboard",
          description: [
            "The GTR leaderboard shows how you rank against other traders. View rankings based on XP, PNL, or trading volume.",
          ],
          poster:
            "https://getrabbit.nyc3.cdn.digitaloceanspaces.com/website-assets/announcements/leaderboard.png",
          video:
            "https://getrabbit.nyc3.cdn.digitaloceanspaces.com/website-assets/announcements/leaderboard.mp4",
        },
        {
          title: "New Deposit and Withdraw Flow",
          description: [
            "We’ve redesigned deposits and withdrawals on GTR to make them faster and simpler.",
            "You can now move funds across multiple chains in just a few steps.",
          ],
          video:
            "https://getrabbit.nyc3.cdn.digitaloceanspaces.com/website-assets/announcements/deposit-withdrawal.mp4",
          poster:
            "https://getrabbit.nyc3.cdn.digitaloceanspaces.com/website-assets/announcements/deposit-withdrawal.png",
        },
      ],
      Q = {
        src: e.i(476308).default,
        width: 40,
        height: 40,
        blurWidth: 0,
        blurHeight: 0,
      },
      Z = (0, M.default)("outline", "brand-apple", "BrandApple", [
        [
          "path",
          {
            d: "M8.286 7.008c-3.216 0 -4.286 3.23 -4.286 5.92c0 3.229 2.143 8.072 4.286 8.072c1.165 -.05 1.799 -.538 3.214 -.538c1.406 0 1.607 .538 3.214 .538s4.286 -3.229 4.286 -5.381c-.03 -.011 -2.649 -.434 -2.679 -3.23c-.02 -2.335 2.589 -3.179 2.679 -3.228c-1.096 -1.606 -3.162 -2.113 -3.75 -2.153c-1.535 -.12 -3.032 1.077 -3.75 1.077c-.729 0 -2.036 -1.077 -3.214 -1.077z",
            key: "svg-0",
          },
        ],
        ["path", { d: "M12 4a2 2 0 0 0 2 -2a2 2 0 0 0 -2 2", key: "svg-1" }],
      ]),
      ee = (0, M.default)("outline", "device-desktop", "DeviceDesktop", [
        [
          "path",
          {
            d: "M3 5a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1v-10z",
            key: "svg-0",
          },
        ],
        ["path", { d: "M7 20h10", key: "svg-1" }],
        ["path", { d: "M9 16v4", key: "svg-2" }],
        ["path", { d: "M15 16v4", key: "svg-3" }],
      ]),
      et = (0, M.default)("outline", "rocket", "Rocket", [
        [
          "path",
          {
            d: "M4 13a8 8 0 0 1 7 7a6 6 0 0 0 3 -5a9 9 0 0 0 6 -8a3 3 0 0 0 -3 -3a9 9 0 0 0 -8 6a6 6 0 0 0 -5 3",
            key: "svg-0",
          },
        ],
        ["path", { d: "M7 14a6 6 0 0 0 -3 6a6 6 0 0 0 6 -3", key: "svg-1" }],
        [
          "path",
          { d: "M15 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-2" },
        ],
      ]),
      er = (0, M.default)("outline", "star", "Star", [
        [
          "path",
          {
            d: "M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z",
            key: "svg-0",
          },
        ],
      ]);
    e.s(["IconStar", () => er], 102761);
    var en = e.i(247746),
      es = e.i(928835);
    let el = ({ forceShow: e = !1, onClose: t }) => {
        let [r, { open: n, close: s }] = (0, X.useDisclosure)(!1),
          [l, a] = (0, S.useState)(0),
          i = J[l];
        (0, S.useEffect)(() => {
          (() => {
            try {
              return (
                localStorage.getItem(K.ANNOUNCEMENT_STORAGE_KEY) !==
                K.ANNOUNCEMENT_VERSION
              );
            } catch (e) {
              return console.error("Error reading localStorage:", e), !0;
            }
          })() && n();
        }, []),
          (0, S.useEffect)(() => {
            e && (a(0), n());
          }, [e, n]);
        let o = (e) => {
          e !== l && a(e);
        };
        return (
          (0, S.useEffect)(() => {
            J.forEach((e) => {
              e.poster && (new window.Image().src = e.poster);
            });
          }, []),
          (0, y.jsx)(Y.Modal, {
            opened: r,
            onClose: () => {
              try {
                localStorage.setItem(
                  K.ANNOUNCEMENT_STORAGE_KEY,
                  K.ANNOUNCEMENT_VERSION
                );
              } catch (e) {
                console.error("Error writing to localStorage:", e);
              }
              s(), t?.();
            },
            withCloseButton: !1,
            size: 868,
            centered: !0,
            className: "hidden md:block",
            classNames: {
              body: "p-2 border-1 border-ash rounded bg-background-900",
              close: "!text-white hover:!bg-slate-200 hover:!text-white/60",
            },
            children: (0, y.jsxs)("div", {
              className: "grid grid-cols-7 gap-2",
              children: [
                (0, y.jsxs)("div", {
                  className:
                    "border border-ash bg-gradient-to-b from-black via-black/20 to-transparent rounded pt-8 pb-4 px-4 col-span-2 flex flex-col",
                  children: [
                    (0, y.jsxs)("div", {
                      className: "font-bold mb-4 text-xl",
                      children: [
                        "We've",
                        (0, y.jsx)("br", {}),
                        " Leveled Up! 🚀",
                      ],
                    }),
                    (0, y.jsxs)("div", {
                      className: "h-full flex flex-col justify-between",
                      children: [
                        (0, y.jsx)("div", {
                          className: "flex flex-col gap-1 pt-2",
                          children: J.map((e, t) => {
                            let r = t === l;
                            return (0, y.jsxs)(
                              "div",
                              {
                                onClick: () => {
                                  a(t);
                                },
                                className: (0, N.default)(
                                  "p-2 rounded-md flex gap-2",
                                  {
                                    "bg-grass/10 text-grass": r,
                                    "text-slate-900 cursor-pointer hover:text-white hover:bg-ash":
                                      !r,
                                  }
                                ),
                                children: [
                                  (0, y.jsx)("svg", {
                                    width: "12",
                                    height: "12",
                                    viewBox: "0 0 14 14",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    className: (0, N.default)("mt-1"),
                                    children: (0, y.jsx)("path", {
                                      d: "M7 0L9.38578 4.61422L14 7L9.38578 9.38578L7 14L4.61422 9.38578L0 7L4.61422 4.61422L7 0Z",
                                      fill: "currentColor",
                                    }),
                                  }),
                                  (0, y.jsx)("div", {
                                    className: "text-sm font-medium",
                                    children: e.title,
                                  }),
                                ],
                              },
                              t
                            );
                          }),
                        }),
                        (0, y.jsx)($.default, {
                          position: "left",
                          direction: "column",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, y.jsxs)("div", {
                  className: "col-span-5",
                  children: [
                    (0, y.jsx)("div", {
                      className: "relative w-full overflow-hidden",
                      style: { minHeight: "340px" },
                      children: i?.isWelcome
                        ? (0, y.jsxs)("div", {
                            className:
                              "w-full h-[340px] bg-[linear-gradient(135deg,#0D0F14_0%,#1A1D23_100%)] rounded-md flex flex-col items-center justify-center p-8 relative border-1 border-slate-800/50",
                            children: [
                              (0, y.jsxs)("div", {
                                className:
                                  "absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none",
                                children: [
                                  (0, y.jsx)("div", {
                                    className:
                                      "absolute top-10 left-10 text-grass rotate-12",
                                    children: (0, y.jsx)(er, {
                                      size: 40,
                                      fill: "currentColor",
                                    }),
                                  }),
                                  (0, y.jsx)("div", {
                                    className:
                                      "absolute bottom-20 right-10 text-purple-500 -rotate-12",
                                    children: (0, y.jsx)(er, {
                                      size: 60,
                                      fill: "currentColor",
                                    }),
                                  }),
                                  (0, y.jsx)("div", {
                                    className:
                                      "absolute top-1/4 right-1/4 text-blue-500",
                                    children: (0, y.jsx)(er, {
                                      size: 30,
                                      fill: "currentColor",
                                    }),
                                  }),
                                ],
                              }),
                              (0, y.jsxs)("div", {
                                className:
                                  "z-10 flex flex-col items-center text-center",
                                children: [
                                  (0, y.jsxs)("h2", {
                                    className:
                                      "text-3xl font-bold text-white mb-2 leading-tight",
                                    children: [
                                      "Welcome to",
                                      " ",
                                      (0, y.jsx)("span", {
                                        className: "text-grass",
                                        children: "GTR.Trade Desktop",
                                      }),
                                    ],
                                  }),
                                  (0, y.jsx)("div", {
                                    className:
                                      "h-1 w-20 bg-grass rounded-full mb-8",
                                  }),
                                  (0, y.jsx)("div", {
                                    className:
                                      "bg-grass/10 text-grass border border-grass/20 px-4 py-1.5 rounded-full text-xs font-bold mb-6 tracking-[2px] animate-pulse",
                                    children: "BETA VERSION",
                                  }),
                                  (0, y.jsxs)("div", {
                                    className: "relative",
                                    children: [
                                      (0, y.jsx)("div", {
                                        className:
                                          "absolute -inset-4 bg-grass/20 blur-2xl rounded-full opacity-50",
                                      }),
                                      (0, y.jsx)(et, {
                                        size: 80,
                                        className: "text-white relative z-10",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          })
                        : (0, y.jsx)(q, {
                            src: i?.video || "",
                            poster: i?.poster,
                            className: "w-full h-full object-fill",
                            autoPlay: !0,
                            loop: !0,
                            muted: !0,
                            playsInline: !0,
                            style: { borderRadius: "4px", minHeight: "340px" },
                          }),
                    }),
                    (0, y.jsxs)(
                      "div",
                      {
                        className:
                          "mt-8 px-4 animate-[fadeIn_0.5s_ease-in-out]",
                        children: [
                          (0, y.jsx)("div", {
                            className: "text-xl font-bold",
                            children: i?.title,
                          }),
                          (0, y.jsx)("div", {
                            className:
                              "text-slate-900 mt-2 min-h-[100px] flex flex-col gap-1.5 text-base",
                            children: i?.description?.map((e, t) =>
                              (0, y.jsx)("div", { children: e }, t)
                            ),
                          }),
                        ],
                      },
                      l
                    ),
                    (0, y.jsxs)("div", {
                      className:
                        "flex gap-2 items-center justify-end mt-12 p-4",
                      children: [
                        l > 0
                          ? (0, y.jsx)(O.Button, {
                              onClick: () => o(l - 1),
                              className:
                                "border-1 border-slate-800/40 bg-slate-800/10 hover:text-white hover:bg-slate-800/20 text-white outline-none w-20",
                              children: "Back",
                            })
                          : (0, y.jsx)("div", {}),
                        (0, y.jsxs)(O.Button, {
                          onClick: () => {
                            if (l < J.length - 1) o(l + 1);
                            else {
                              try {
                                localStorage.setItem(
                                  K.ANNOUNCEMENT_FINISHED_KEY,
                                  "true"
                                ),
                                  localStorage.setItem(
                                    K.ANNOUNCEMENT_STORAGE_KEY,
                                    K.ANNOUNCEMENT_VERSION
                                  );
                              } catch (e) {
                                console.error(
                                  "Error writing to localStorage:",
                                  e
                                );
                              }
                              s(), t?.();
                            }
                          },
                          className: (0, N.default)(
                            "bg-grass text-black border-none hover:bg-grass/90 hover:text-black outline-none rounded-lg transition-all duration-300",
                            {
                              "px-4 h-10 hover:ring-2 hover:ring-indigo-500 hover:ring-offset-2 hover:ring-offset-background-900 flex items-center gap-2":
                                i?.isWelcome,
                              "w-20 font-medium": !i?.isWelcome,
                            }
                          ),
                          children: [
                            i?.isWelcome &&
                              (0, y.jsx)(ee, { size: 20, className: "mr-2" }),
                            (0, y.jsx)("span", {
                              className: (0, N.default)({
                                "font-bold": i?.isWelcome,
                              }),
                              children: i?.isWelcome
                                ? "Desktop"
                                : l < J.length - 1
                                ? "Next"
                                : "Finish",
                            }),
                          ],
                        }),
                        i?.isWelcome &&
                          (0, y.jsx)("div", {
                            className: "flex items-center gap-3",
                            children: (0, y.jsxs)("div", {
                              className: "flex gap-3",
                              children: [
                                (0, y.jsxs)(en.HoverCard, {
                                  shadow: "md",
                                  offset: 15,
                                  openDelay: 0,
                                  closeDelay: 0,
                                  children: [
                                    (0, y.jsx)(en.HoverCard.Target, {
                                      children: (0, y.jsx)(O.Button, {
                                        className:
                                          "h-10 px-4 bg-white text-black hover:bg-slate-200 rounded-lg flex items-center gap-2 border-none transition-all duration-300",
                                        onClick: () =>
                                          window.open(
                                            "https://apps.apple.com/app/id6698866243",
                                            "_blank"
                                          ),
                                        leftSection: (0, y.jsx)(Z, {
                                          size: 22,
                                          fill: "currentColor",
                                        }),
                                        classNames: {
                                          section: "mr-1.5 mb-0.5",
                                        },
                                        children: (0, y.jsx)("span", {
                                          className: "text-sm",
                                          children: "iOS",
                                        }),
                                      }),
                                    }),
                                    (0, y.jsx)(en.HoverCard.Dropdown, {
                                      className:
                                        "bg-[#121316] border-slate-800 p-4 rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.5)]",
                                      children: (0, y.jsxs)("div", {
                                        className:
                                          "flex flex-col items-center gap-4",
                                        children: [
                                          (0, y.jsx)("div", {
                                            className:
                                              "bg-white p-2 rounded-xl",
                                            children: (0, y.jsx)(es.QRCodeSVG, {
                                              value:
                                                "https://apps.apple.com/app/id6698866243",
                                              size: 140,
                                            }),
                                          }),
                                          (0, y.jsxs)("div", {
                                            className:
                                              "flex flex-col items-center gap-1 text-center",
                                            children: [
                                              (0, y.jsxs)("div", {
                                                className:
                                                  "flex items-center gap-2 text-white",
                                                children: [
                                                  (0, y.jsx)(Z, {
                                                    size: 18,
                                                    fill: "currentColor",
                                                  }),
                                                  (0, y.jsx)("span", {
                                                    className: "font-bold",
                                                    children: "App Store",
                                                  }),
                                                ],
                                              }),
                                              (0, y.jsx)("span", {
                                                className:
                                                  "text-neutral-500 text-xs font-medium",
                                                children:
                                                  "Scan to download app",
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    }),
                                  ],
                                }),
                                (0, y.jsxs)(en.HoverCard, {
                                  shadow: "md",
                                  offset: 15,
                                  openDelay: 0,
                                  closeDelay: 0,
                                  children: [
                                    (0, y.jsx)(en.HoverCard.Target, {
                                      children: (0, y.jsx)(O.Button, {
                                        className:
                                          "h-10 px-4 bg-white text-black hover:bg-slate-200 rounded-lg flex items-center gap-2 border-none transition-all duration-300",
                                        onClick: () =>
                                          window.open(
                                            "https://play.google.com/store/apps/details?id=com.dev_getrabbit.getrabbitapp",
                                            "_blank"
                                          ),
                                        leftSection: (0, y.jsx)(j.default, {
                                          src: Q,
                                          alt: "Play Store",
                                          width: 20,
                                        }),
                                        classNames: { section: "mr-1.5" },
                                        children: (0, y.jsx)("span", {
                                          className:
                                            "text-sm whitespace-nowrap",
                                          children: "Google Play",
                                        }),
                                      }),
                                    }),
                                    (0, y.jsx)(en.HoverCard.Dropdown, {
                                      className:
                                        "bg-[#121316] border-slate-800 p-4 rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.5)]",
                                      children: (0, y.jsxs)("div", {
                                        className:
                                          "flex flex-col items-center gap-4",
                                        children: [
                                          (0, y.jsx)("div", {
                                            className:
                                              "bg-white p-2 rounded-xl",
                                            children: (0, y.jsx)(es.QRCodeSVG, {
                                              value:
                                                "https://play.google.com/store/apps/details?id=com.dev_getrabbit.getrabbitapp",
                                              size: 140,
                                            }),
                                          }),
                                          (0, y.jsxs)("div", {
                                            className:
                                              "flex flex-col items-center gap-1 text-center",
                                            children: [
                                              (0, y.jsxs)("div", {
                                                className:
                                                  "flex items-center gap-2 text-white",
                                                children: [
                                                  (0, y.jsx)(j.default, {
                                                    src: Q,
                                                    alt: "Play Store",
                                                    width: 18,
                                                  }),
                                                  (0, y.jsx)("span", {
                                                    children: "Google Play",
                                                  }),
                                                ],
                                              }),
                                              (0, y.jsx)("span", {
                                                className:
                                                  "text-neutral-500 text-xs font-medium",
                                                children:
                                                  "Scan to download app",
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    }),
                                  ],
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
          })
        );
      },
      ea = () =>
        (0, y.jsx)("svg", {
          width: "14",
          height: "14",
          viewBox: "0 0 14 14",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          stroke: "currentColor",
          children: (0, y.jsx)("path", {
            d: "M8.25 6.4H4.5M5.75 8.8H4.5M9.5 4H4.5M12 3.88V9.12C12 10.1281 12 10.6321 11.7956 11.0172C11.6159 11.3559 11.329 11.6312 10.9762 11.8038C10.5751 12 10.0501 12 9 12H5C3.9499 12 3.42485 12 3.02377 11.8038C2.67096 11.6312 2.38413 11.3559 2.20436 11.0172C2 10.6321 2 10.1281 2 9.12V3.88C2 2.87191 2 2.36786 2.20436 1.98282C2.38413 1.64413 2.67096 1.36876 3.02377 1.19619C3.42485 1 3.9499 1 5 1H9C10.0501 1 10.5751 1 10.9762 1.19619C11.329 1.36876 11.6159 1.64413 11.7956 1.98282C12 2.36786 12 2.87191 12 3.88Z",
            strokeLinecap: "square",
            strokeLinejoin: "round",
          }),
        });
    var ei = e.i(19607),
      eo = e.i(405948);
    let ed = (0, M.default)("outline", "brand-discord", "BrandDiscord", [
      ["path", { d: "M8 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0", key: "svg-0" }],
      ["path", { d: "M14 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0", key: "svg-1" }],
      [
        "path",
        {
          d: "M15.5 17c0 1 1.5 3 2 3c1.5 0 2.833 -1.667 3.5 -3c.667 -1.667 .5 -5.833 -1.5 -11.5c-1.457 -1.015 -3 -1.34 -4.5 -1.5l-.972 1.923a11.913 11.913 0 0 0 -4.053 0l-.975 -1.923c-1.5 .16 -3.043 .485 -4.5 1.5c-2 5.667 -2.167 9.833 -1.5 11.5c.667 1.333 2 3 3.5 3c.5 0 2 -2 2 -3",
          key: "svg-2",
        },
      ],
      ["path", { d: "M7 16.5c3.5 1 6.5 1 10 0", key: "svg-3" }],
    ]);
    var ec = e.i(326091);
    let eu = (0, M.default)(
      "filled",
      "message-report-filled",
      "MessageReportFilled",
      [
        [
          "path",
          {
            d: "M18 3a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-4.724l-4.762 2.857a1 1 0 0 1 -1.508 -.743l-.006 -.114v-2h-1a4 4 0 0 1 -3.995 -3.8l-.005 -.2v-8a4 4 0 0 1 4 -4zm-6 10a1 1 0 0 0 -1 1v.01a1 1 0 0 0 2 0v-.01a1 1 0 0 0 -1 -1m0 -6a1 1 0 0 0 -1 1v3a1 1 0 0 0 2 0v-3a1 1 0 0 0 -1 -1",
            key: "svg-0",
          },
        ],
      ]
    );
    var eh = e.i(77656);
    let ep = () => {
      let e = [
        {
          id: 1,
          icon: (0, y.jsx)(ec.IconBrandTelegram, {
            size: 14,
            className: "w-3.5 h-3.5",
          }),
          label: "Telegram",
          href: "https://t.me/OxOLeeh",
        },
        {
          id: 2,
          icon: (0, y.jsx)(ed, { size: 14, className: "w-3.5 h-3.5" }),
          label: "Discord",
          onClick: () => {},
          href: "https://discord.gg/vn5sC8TyET",
        },
        {
          id: 3,
          icon: (0, y.jsx)(eh.IconSend, { size: 14, className: "w-3.5 h-3.5" }),
          label: "Feedback",
          onClick: () => {},
          href: "https://forms.gle/Y7nz34iNdQiyQYzJ6",
        },
      ];
      return (0, y.jsxs)(eo.Menu, {
        shadow: "md",
        width: 120,
        classNames: {
          dropdown: "bg-[#1B1E26] p-0 text-xs",
          item: "!bg-transparent !hover:bg-none text-[#858DA3] hover:text-white transition-all duration-300 text-xs",
        },
        children: [
          (0, y.jsx)(eo.Menu.Target, {
            children: (0, y.jsxs)("div", {
              className:
                "cursor-pointer flex items-center gap-1.5 bg-warning/10 hover:bg-warning/20 px-2 rounded-sm h-[22px] text-warning  transition-all duration-300",
              children: [
                (0, y.jsx)(eu, { className: "w-3.5 h-3.5 " }),
                (0, y.jsx)("span", { children: "Report" }),
              ],
            }),
          }),
          (0, y.jsx)(eo.Menu.Dropdown, {
            children: e?.map((e) =>
              (0, y.jsx)(
                eo.Menu.Item,
                {
                  leftSection: e?.icon,
                  children: (0, y.jsx)("div", {
                    children: (0, y.jsx)("a", {
                      href: e?.href,
                      target: "_blank",
                      onClick: () => {
                        (0, ei.trackEvent)("Clicked Report Issues", {
                          source: "footer",
                          platform: e?.label,
                        });
                      },
                      children: (0, y.jsx)("span", { children: e?.label }),
                    }),
                  }),
                },
                e?.id
              )
            ),
          }),
        ],
      });
    };
    var em = e.i(541473),
      ex = e.i(535090),
      ef = e.i(836733),
      eg = e.i(469401),
      eb = e.i(10982),
      ev = e.i(458790),
      ew = e.i(453165),
      ey = e.i(751937),
      ej = e.i(446614);
    e.i(207670);
    var eN = e.i(908954),
      eC = e.i(314037),
      ek = e.i(789549),
      eS = e.i(919254),
      eE = e.i(321879),
      eD = e.i(515389),
      eT = e.i(813325),
      eA = e.i(19824),
      eM = e.i(537528),
      eP = e.i(211048),
      eI = e.i(578565),
      eR = e.i(424848),
      eO = e.i(143798),
      ez = e.i(644662),
      eB = e.i(27556),
      eF = e.i(592499);
    let [eL, e_] = (0, eF.createOptionalContext)(),
      [eK, eU] = (0, eF.createOptionalContext)();
    var eH = {
      root: "m_7cda1cd6",
      "root--default": "m_44da308b",
      "root--contrast": "m_e3a01f8",
      label: "m_1e0e6180",
      remove: "m_ae386778",
      group: "m_1dcfd90b",
    };
    let eW = (0, eO.createVarsResolver)((e, { gap: t }, { size: r }) => ({
        group: {
          "--pg-gap":
            void 0 !== t ? (0, eR.getSize)(t) : (0, eR.getSize)(r, "pg-gap"),
        },
      })),
      eG = (0, eE.factory)((e, t) => {
        let r = (0, ek.useProps)("PillGroup", null, e),
          {
            classNames: n,
            className: s,
            style: l,
            styles: a,
            unstyled: i,
            vars: o,
            size: d,
            disabled: c,
            attributes: u,
            ...h
          } = r,
          p = e_(),
          m = p?.size || d || void 0,
          x = (0, eC.useStyles)({
            name: "PillGroup",
            classes: eH,
            props: r,
            className: s,
            style: l,
            classNames: n,
            styles: a,
            unstyled: i,
            attributes: u,
            vars: o,
            varsResolver: eW,
            stylesCtx: { size: m },
            rootSelector: "group",
          });
        return (0, y.jsx)(eK, {
          value: { size: m, disabled: c },
          children: (0, y.jsx)(ez.Box, {
            ref: t,
            size: m,
            ...x("group"),
            ...h,
          }),
        });
      });
    (eG.classes = eH), (eG.displayName = "@mantine/core/PillGroup");
    let eV = { variant: "default" },
      eY = (0, eO.createVarsResolver)((e, { radius: t }, { size: r }) => ({
        root: {
          "--pill-fz": (0, eR.getSize)(r, "pill-fz"),
          "--pill-height": (0, eR.getSize)(r, "pill-height"),
          "--pill-radius": void 0 === t ? void 0 : (0, eR.getRadius)(t),
        },
      })),
      eX = (0, eE.factory)((e, t) => {
        let r = (0, ek.useProps)("Pill", eV, e),
          {
            classNames: n,
            className: s,
            style: l,
            styles: a,
            unstyled: i,
            vars: o,
            variant: d,
            children: c,
            withRemoveButton: u,
            onRemove: h,
            removeButtonProps: p,
            radius: m,
            size: x,
            disabled: f,
            mod: g,
            attributes: b,
            ...v
          } = r,
          w = eU(),
          j = e_(),
          N = x || w?.size || void 0,
          C = j?.variant === "filled" ? "contrast" : d || "default",
          k = (0, eC.useStyles)({
            name: "Pill",
            classes: eH,
            props: r,
            className: s,
            style: l,
            classNames: n,
            styles: a,
            unstyled: i,
            attributes: b,
            vars: o,
            varsResolver: eY,
            stylesCtx: { size: N },
          });
        return (0, y.jsxs)(ez.Box, {
          component: "span",
          ref: t,
          variant: C,
          size: N,
          ...k("root", { variant: C }),
          mod: [{ "with-remove": u && !f, disabled: f || w?.disabled }, g],
          ...v,
          children: [
            (0, y.jsx)("span", { ...k("label"), children: c }),
            u &&
              (0, y.jsx)(eB.CloseButton, {
                variant: "transparent",
                radius: m,
                tabIndex: -1,
                "aria-hidden": !0,
                unstyled: i,
                ...p,
                ...k("remove", { className: p?.className, style: p?.style }),
                onMouseDown: (e) => {
                  e.preventDefault(), e.stopPropagation(), p?.onMouseDown?.(e);
                },
                onClick: (e) => {
                  e.stopPropagation(), h?.(), p?.onClick?.(e);
                },
              }),
          ],
        });
      });
    (eX.classes = eH), (eX.displayName = "@mantine/core/Pill"), (eX.Group = eG);
    var eq = e.i(931316),
      e$ = e.i(698874),
      eJ = { field: "m_45c4369d" };
    let eQ = { type: "visible" },
      eZ = (0, eE.factory)((e, t) => {
        let r = (0, ek.useProps)("PillsInputField", eQ, e),
          {
            classNames: n,
            className: s,
            style: l,
            styles: a,
            unstyled: i,
            vars: o,
            type: d,
            disabled: c,
            id: u,
            pointer: h,
            mod: p,
            attributes: m,
            ...x
          } = r,
          f = e_(),
          g = (0, e$.useInputWrapperContext)(),
          b = (0, eC.useStyles)({
            name: "PillsInputField",
            classes: eJ,
            props: r,
            className: s,
            style: l,
            classNames: n,
            styles: a,
            unstyled: i,
            attributes: m,
            rootSelector: "field",
          }),
          v = c || f?.disabled;
        return (0, y.jsx)(ez.Box, {
          component: "input",
          ref: (0, eq.useMergedRef)(t, f?.fieldRef),
          "data-type": d,
          disabled: v,
          mod: [{ disabled: v, pointer: h }, p],
          ...b("field"),
          ...x,
          id: g?.inputId || u,
          "aria-invalid": f?.hasError,
          "aria-describedby": g?.describedBy,
          type: "text",
          onMouseDown: (e) => !h && e.stopPropagation(),
        });
      });
    (eZ.classes = eJ), (eZ.displayName = "@mantine/core/PillsInputField");
    let e0 = { size: "sm" },
      e1 = (0, eE.factory)((e, t) => {
        let {
            children: r,
            onMouseDown: n,
            onClick: s,
            size: l,
            disabled: a,
            __staticSelector: i,
            error: o,
            variant: d,
            ...c
          } = (0, ek.useProps)("PillsInput", e0, e),
          u = (0, S.useRef)(null);
        return (0, y.jsx)(eL, {
          value: {
            fieldRef: u,
            size: l,
            disabled: a,
            hasError: !!o,
            variant: d,
          },
          children: (0, y.jsx)(eI.InputBase, {
            size: l,
            error: o,
            variant: d,
            component: "div",
            ref: t,
            "data-no-overflow": !0,
            onMouseDown: (e) => {
              e.preventDefault(), n?.(e), u.current?.focus();
            },
            onClick: (e) => {
              e.preventDefault();
              let t = e.currentTarget.closest("fieldset");
              t?.disabled || (u.current?.focus(), s?.(e));
            },
            ...c,
            multiline: !0,
            disabled: a,
            __staticSelector: i || "PillsInput",
            withAria: !1,
            children: r,
          }),
        });
      });
    (e1.displayName = "@mantine/core/PillsInput"), (e1.Field = eZ);
    var e2 = e.i(8477);
    let e3 = {
        maxValues: 1 / 0,
        withCheckIcon: !0,
        checkIconPosition: "left",
        hiddenInputValuesDivider: ",",
        clearSearchOnChange: !0,
        size: "sm",
      },
      e5 = (0, eE.factory)((e, t) => {
        let r = (0, ek.useProps)("MultiSelect", e3, e),
          {
            classNames: n,
            className: s,
            style: l,
            styles: a,
            unstyled: i,
            vars: o,
            size: d,
            value: c,
            defaultValue: u,
            onChange: h,
            onKeyDown: p,
            variant: m,
            data: x,
            dropdownOpened: f,
            defaultDropdownOpened: g,
            onDropdownOpen: b,
            onDropdownClose: v,
            selectFirstOptionOnChange: w,
            onOptionSubmit: j,
            comboboxProps: N,
            filter: C,
            limit: k,
            withScrollArea: E,
            maxDropdownHeight: D,
            searchValue: T,
            defaultSearchValue: A,
            onSearchChange: M,
            readOnly: P,
            disabled: I,
            onFocus: R,
            onBlur: O,
            radius: z,
            rightSection: B,
            rightSectionWidth: F,
            rightSectionPointerEvents: L,
            rightSectionProps: _,
            leftSection: K,
            leftSectionWidth: U,
            leftSectionPointerEvents: H,
            leftSectionProps: W,
            inputContainer: G,
            inputWrapperOrder: V,
            withAsterisk: Y,
            labelProps: X,
            descriptionProps: q,
            errorProps: $,
            wrapperProps: J,
            description: Q,
            label: Z,
            error: ee,
            maxValues: et,
            searchable: er,
            nothingFoundMessage: en,
            withCheckIcon: es,
            withAlignedLabels: el,
            checkIconPosition: ea,
            hidePickedOptions: ei,
            withErrorStyles: eo,
            name: ed,
            form: ec,
            id: eu,
            clearable: eh,
            clearButtonProps: ep,
            hiddenInputProps: em,
            placeholder: ex,
            hiddenInputValuesDivider: ef,
            required: eg,
            mod: eb,
            renderOption: ev,
            onRemove: ew,
            onClear: eE,
            scrollAreaProps: eI,
            chevronColor: eR,
            attributes: eO,
            clearSearchOnChange: ez,
            ...eB
          } = r,
          eF = (0, ey.useId)(eu),
          eL = (0, eD.getParsedComboboxData)(x),
          e_ = (0, eT.getOptionsLockup)(eL),
          eK = (0, S.useRef)({}),
          eU = (0, eP.useCombobox)({
            opened: f,
            defaultOpened: g,
            onDropdownOpen: b,
            onDropdownClose: () => {
              v?.(), eU.resetSelectedOption();
            },
          }),
          {
            styleProps: eH,
            rest: { type: eW, autoComplete: eG, ...eV },
          } = (0, eS.extractStyleProps)(eB),
          [eY, eq] = (0, ej.useUncontrolled)({
            value: c,
            defaultValue: u,
            finalValue: [],
            onChange: h,
          }),
          [e$, eJ] = (0, ej.useUncontrolled)({
            value: T,
            defaultValue: A,
            finalValue: "",
            onChange: M,
          }),
          eQ = (e) => {
            eJ(e), eU.resetSelectedOption();
          },
          eZ = (0, eC.useStyles)({
            name: "MultiSelect",
            classes: {},
            props: r,
            classNames: n,
            styles: a,
            unstyled: i,
            attributes: eO,
          }),
          { resolvedClassNames: e0, resolvedStyles: e5 } = (0,
          eN.useResolvedStylesApi)({ props: r, styles: a, classNames: n }),
          e4 = eY.map((e, t) => {
            let r = e_[e] || eK.current[e];
            return (0, y.jsx)(
              eX,
              {
                withRemoveButton: !P && !e_[e]?.disabled,
                onRemove: () => {
                  eq(eY.filter((t) => e !== t)), ew?.(e);
                },
                unstyled: i,
                disabled: I,
                ...eZ("pill"),
                children: r?.label || e,
              },
              `${e}-${t}`
            );
          });
        (0, S.useEffect)(() => {
          w && eU.selectFirstOption();
        }, [w, e$]),
          (0, S.useEffect)(() => {
            eY.forEach((e) => {
              e in e_ && (eK.current[e] = e_[e]);
            });
          }, [e_, eY]);
        let e6 = (0, y.jsx)(eA.Combobox.ClearButton, {
            ...ep,
            onClear: () => {
              eE?.(), eq([]), eQ("");
            },
          }),
          e8 = (function ({ data: e, value: t }) {
            let r = t.map((e) => e.trim().toLowerCase());
            return e.reduce(
              (e, t) => (
                (0, e2.isOptionsGroup)(t)
                  ? e.push({
                      group: t.group,
                      items: t.items.filter(
                        (e) => -1 === r.indexOf(e.value.toLowerCase().trim())
                      ),
                    })
                  : -1 === r.indexOf(t.value.toLowerCase().trim()) && e.push(t),
                e
              ),
              []
            );
          })({ data: eL, value: eY }),
          e9 = eh && eY.length > 0 && !I && !P;
        return (0, y.jsxs)(y.Fragment, {
          children: [
            (0, y.jsxs)(eA.Combobox, {
              store: eU,
              classNames: e0,
              styles: e5,
              unstyled: i,
              size: d,
              readOnly: P,
              __staticSelector: "MultiSelect",
              attributes: eO,
              onOptionSubmit: (e) => {
                j?.(e),
                  ez && eQ(""),
                  eU.updateSelectedOptionIndex("selected"),
                  eY.includes(e_[e].value)
                    ? (eq(eY.filter((t) => t !== e_[e].value)),
                      ew?.(e_[e].value))
                    : eY.length < et && eq([...eY, e_[e].value]);
              },
              ...N,
              children: [
                (0, y.jsx)(eA.Combobox.DropdownTarget, {
                  children: (0, y.jsx)(e1, {
                    ...eH,
                    __staticSelector: "MultiSelect",
                    classNames: e0,
                    styles: e5,
                    unstyled: i,
                    size: d,
                    className: s,
                    style: l,
                    variant: m,
                    disabled: I,
                    radius: z,
                    __defaultRightSection: (0, y.jsx)(eA.Combobox.Chevron, {
                      size: d,
                      error: ee,
                      unstyled: i,
                      color: eR,
                    }),
                    __clearSection: e6,
                    __clearable: e9,
                    rightSection: B,
                    rightSectionPointerEvents: L || "none",
                    rightSectionWidth: F,
                    rightSectionProps: _,
                    leftSection: K,
                    leftSectionWidth: U,
                    leftSectionPointerEvents: H,
                    leftSectionProps: W,
                    inputContainer: G,
                    inputWrapperOrder: V,
                    withAsterisk: Y,
                    labelProps: X,
                    descriptionProps: q,
                    errorProps: $,
                    wrapperProps: J,
                    description: Q,
                    label: Z,
                    error: ee,
                    withErrorStyles: eo,
                    __stylesApiProps: {
                      ...r,
                      rightSectionPointerEvents: L || (e9 ? "all" : "none"),
                      multiline: !0,
                    },
                    pointer: !er,
                    onClick: () =>
                      er ? eU.openDropdown() : eU.toggleDropdown(),
                    "data-expanded": eU.dropdownOpened || void 0,
                    id: eF,
                    required: eg,
                    mod: eb,
                    attributes: eO,
                    children: (0, y.jsxs)(eX.Group, {
                      attributes: eO,
                      disabled: I,
                      unstyled: i,
                      ...eZ("pillsList"),
                      children: [
                        e4,
                        (0, y.jsx)(eA.Combobox.EventsTarget, {
                          autoComplete: eG,
                          children: (0, y.jsx)(e1.Field, {
                            ...eV,
                            ref: t,
                            id: eF,
                            placeholder: ex,
                            type: er || ex ? "visible" : "hidden",
                            ...eZ("inputField"),
                            unstyled: i,
                            onFocus: (e) => {
                              R?.(e), er && eU.openDropdown();
                            },
                            onBlur: (e) => {
                              O?.(e), eU.closeDropdown(), eQ("");
                            },
                            onKeyDown: (e) => {
                              p?.(e),
                                " " !== e.key ||
                                  er ||
                                  (e.preventDefault(), eU.toggleDropdown()),
                                "Backspace" === e.key &&
                                  0 === e$.length &&
                                  eY.length > 0 &&
                                  (ew?.(eY[eY.length - 1]),
                                  eq(eY.slice(0, eY.length - 1)));
                            },
                            value: e$,
                            onChange: (e) => {
                              eQ(e.currentTarget.value),
                                er && eU.openDropdown(),
                                w && eU.selectFirstOption();
                            },
                            disabled: I,
                            readOnly: P || !er,
                            pointer: !er,
                          }),
                        }),
                      ],
                    }),
                  }),
                }),
                (0, y.jsx)(eM.OptionsDropdown, {
                  data: ei ? e8 : eL,
                  hidden: P || I,
                  filter: C,
                  search: e$,
                  limit: k,
                  hiddenWhenEmpty: !en,
                  withScrollArea: E,
                  maxDropdownHeight: D,
                  filterOptions: er,
                  value: eY,
                  checkIconPosition: ea,
                  withCheckIcon: es,
                  withAlignedLabels: el,
                  nothingFoundMessage: en,
                  unstyled: i,
                  labelId: Z ? `${eF}-label` : void 0,
                  "aria-label": Z ? void 0 : eB["aria-label"],
                  renderOption: ev,
                  scrollAreaProps: eI,
                }),
              ],
            }),
            (0, y.jsx)(eA.Combobox.HiddenInput, {
              name: ed,
              valuesDivider: ef,
              value: eY,
              form: ec,
              disabled: I,
              ...em,
            }),
          ],
        });
      });
    (e5.classes = { ...eI.InputBase.classes, ...eA.Combobox.classes }),
      (e5.displayName = "@mantine/core/MultiSelect");
    var e4 = e.i(598323),
      e6 = e.i(184086),
      e8 = e.i(700653),
      e9 = e.i(553917),
      e7 = e.i(770281),
      te = e.i(967929),
      tt = e.i(357772),
      tr = e.i(174080);
    let tn =
      "undefined" != typeof window &&
      void 0 !== window.document &&
      void 0 !== window.document.createElement;
    function ts(e) {
      let t = Object.prototype.toString.call(e);
      return "[object Window]" === t || "[object global]" === t;
    }
    function tl(e) {
      return "nodeType" in e;
    }
    function ta(e) {
      var t, r;
      return e
        ? ts(e)
          ? e
          : tl(e) &&
            null != (t = null == (r = e.ownerDocument) ? void 0 : r.defaultView)
          ? t
          : window
        : window;
    }
    function ti(e) {
      let { Document: t } = ta(e);
      return e instanceof t;
    }
    function to(e) {
      return !ts(e) && e instanceof ta(e).HTMLElement;
    }
    function td(e) {
      return e instanceof ta(e).SVGElement;
    }
    function tc(e) {
      return e
        ? ts(e)
          ? e.document
          : tl(e)
          ? ti(e)
            ? e
            : to(e) || td(e)
            ? e.ownerDocument
            : document
          : document
        : document;
    }
    let tu = tn ? S.useLayoutEffect : S.useEffect;
    function th(e) {
      let t = (0, S.useRef)(e);
      return (
        tu(() => {
          t.current = e;
        }),
        (0, S.useCallback)(function () {
          for (var e = arguments.length, r = Array(e), n = 0; n < e; n++)
            r[n] = arguments[n];
          return null == t.current ? void 0 : t.current(...r);
        }, [])
      );
    }
    function tp(e, t) {
      void 0 === t && (t = [e]);
      let r = (0, S.useRef)(e);
      return (
        tu(() => {
          r.current !== e && (r.current = e);
        }, t),
        r
      );
    }
    function tm(e, t) {
      let r = (0, S.useRef)();
      return (0, S.useMemo)(() => {
        let t = e(r.current);
        return (r.current = t), t;
      }, [...t]);
    }
    function tx(e) {
      let t = th(e),
        r = (0, S.useRef)(null),
        n = (0, S.useCallback)((e) => {
          e !== r.current && (null == t || t(e, r.current)), (r.current = e);
        }, []);
      return [r, n];
    }
    function tf(e) {
      let t = (0, S.useRef)();
      return (
        (0, S.useEffect)(() => {
          t.current = e;
        }, [e]),
        t.current
      );
    }
    let tg = {};
    function tb(e, t) {
      return (0, S.useMemo)(() => {
        if (t) return t;
        let r = null == tg[e] ? 0 : tg[e] + 1;
        return (tg[e] = r), e + "-" + r;
      }, [e, t]);
    }
    function tv(e) {
      return function (t) {
        for (
          var r = arguments.length, n = Array(r > 1 ? r - 1 : 0), s = 1;
          s < r;
          s++
        )
          n[s - 1] = arguments[s];
        return n.reduce(
          (t, r) => {
            for (let [n, s] of Object.entries(r)) {
              let r = t[n];
              null != r && (t[n] = r + e * s);
            }
            return t;
          },
          { ...t }
        );
      };
    }
    let tw = tv(1),
      ty = tv(-1);
    function tj(e) {
      if (!e) return !1;
      let { KeyboardEvent: t } = ta(e.target);
      return t && e instanceof t;
    }
    function tN(e) {
      if (
        (function (e) {
          if (!e) return !1;
          let { TouchEvent: t } = ta(e.target);
          return t && e instanceof t;
        })(e)
      ) {
        if (e.touches && e.touches.length) {
          let { clientX: t, clientY: r } = e.touches[0];
          return { x: t, y: r };
        } else if (e.changedTouches && e.changedTouches.length) {
          let { clientX: t, clientY: r } = e.changedTouches[0];
          return { x: t, y: r };
        }
      }
      return "clientX" in e && "clientY" in e
        ? { x: e.clientX, y: e.clientY }
        : null;
    }
    let tC = Object.freeze({
        Translate: {
          toString(e) {
            if (!e) return;
            let { x: t, y: r } = e;
            return (
              "translate3d(" +
              (t ? Math.round(t) : 0) +
              "px, " +
              (r ? Math.round(r) : 0) +
              "px, 0)"
            );
          },
        },
        Scale: {
          toString(e) {
            if (!e) return;
            let { scaleX: t, scaleY: r } = e;
            return "scaleX(" + t + ") scaleY(" + r + ")";
          },
        },
        Transform: {
          toString(e) {
            if (e)
              return [tC.Translate.toString(e), tC.Scale.toString(e)].join(" ");
          },
        },
        Transition: {
          toString(e) {
            let { property: t, duration: r, easing: n } = e;
            return t + " " + r + "ms " + n;
          },
        },
      }),
      tk =
        "a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]",
      tS = { display: "none" };
    function tE(e) {
      let { id: t, value: r } = e;
      return S.default.createElement("div", { id: t, style: tS }, r);
    }
    function tD(e) {
      let { id: t, announcement: r, ariaLiveType: n = "assertive" } = e;
      return S.default.createElement(
        "div",
        {
          id: t,
          style: {
            position: "fixed",
            top: 0,
            left: 0,
            width: 1,
            height: 1,
            margin: -1,
            border: 0,
            padding: 0,
            overflow: "hidden",
            clip: "rect(0 0 0 0)",
            clipPath: "inset(100%)",
            whiteSpace: "nowrap",
          },
          role: "status",
          "aria-live": n,
          "aria-atomic": !0,
        },
        r
      );
    }
    let tT = (0, S.createContext)(null),
      tA = {
        draggable:
          "\n    To pick up a draggable item, press the space bar.\n    While dragging, use the arrow keys to move the item.\n    Press space again to drop the item in its new position, or press escape to cancel.\n  ",
      },
      tM = {
        onDragStart(e) {
          let { active: t } = e;
          return "Picked up draggable item " + t.id + ".";
        },
        onDragOver(e) {
          let { active: t, over: r } = e;
          return r
            ? "Draggable item " +
                t.id +
                " was moved over droppable area " +
                r.id +
                "."
            : "Draggable item " + t.id + " is no longer over a droppable area.";
        },
        onDragEnd(e) {
          let { active: t, over: r } = e;
          return r
            ? "Draggable item " +
                t.id +
                " was dropped over droppable area " +
                r.id
            : "Draggable item " + t.id + " was dropped.";
        },
        onDragCancel(e) {
          let { active: t } = e;
          return (
            "Dragging was cancelled. Draggable item " + t.id + " was dropped."
          );
        },
      };
    function tP(e) {
      var t;
      let r,
        {
          announcements: n = tM,
          container: s,
          hiddenTextDescribedById: l,
          screenReaderInstructions: a = tA,
        } = e,
        { announce: i, announcement: o } = (function () {
          let [e, t] = (0, S.useState)("");
          return {
            announce: (0, S.useCallback)((e) => {
              null != e && t(e);
            }, []),
            announcement: e,
          };
        })(),
        d = tb("DndLiveRegion"),
        [c, u] = (0, S.useState)(!1);
      if (
        ((0, S.useEffect)(() => {
          u(!0);
        }, []),
        (t = (0, S.useMemo)(
          () => ({
            onDragStart(e) {
              let { active: t } = e;
              i(n.onDragStart({ active: t }));
            },
            onDragMove(e) {
              let { active: t, over: r } = e;
              n.onDragMove && i(n.onDragMove({ active: t, over: r }));
            },
            onDragOver(e) {
              let { active: t, over: r } = e;
              i(n.onDragOver({ active: t, over: r }));
            },
            onDragEnd(e) {
              let { active: t, over: r } = e;
              i(n.onDragEnd({ active: t, over: r }));
            },
            onDragCancel(e) {
              let { active: t, over: r } = e;
              i(n.onDragCancel({ active: t, over: r }));
            },
          }),
          [i, n]
        )),
        (r = (0, S.useContext)(tT)),
        (0, S.useEffect)(() => {
          if (!r)
            throw Error(
              "useDndMonitor must be used within a children of <DndContext>"
            );
          return r(t);
        }, [t, r]),
        !c)
      )
        return null;
      let h = S.default.createElement(
        S.default.Fragment,
        null,
        S.default.createElement(tE, { id: l, value: a.draggable }),
        S.default.createElement(tD, { id: d, announcement: o })
      );
      return s ? (0, tr.createPortal)(h, s) : h;
    }
    function tI() {}
    function tR(e, t) {
      return (0, S.useMemo)(
        () => ({ sensor: e, options: null != t ? t : {} }),
        [e, t]
      );
    }
    ((r = u || (u = {})).DragStart = "dragStart"),
      (r.DragMove = "dragMove"),
      (r.DragEnd = "dragEnd"),
      (r.DragCancel = "dragCancel"),
      (r.DragOver = "dragOver"),
      (r.RegisterDroppable = "registerDroppable"),
      (r.SetDroppableDisabled = "setDroppableDisabled"),
      (r.UnregisterDroppable = "unregisterDroppable");
    let tO = Object.freeze({ x: 0, y: 0 });
    function tz(e, t) {
      return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
    }
    function tB(e, t) {
      let {
          data: { value: r },
        } = e,
        {
          data: { value: n },
        } = t;
      return r - n;
    }
    function tF(e, t) {
      let {
          data: { value: r },
        } = e,
        {
          data: { value: n },
        } = t;
      return n - r;
    }
    function tL(e) {
      let { left: t, top: r, height: n, width: s } = e;
      return [
        { x: t, y: r },
        { x: t + s, y: r },
        { x: t, y: r + n },
        { x: t + s, y: r + n },
      ];
    }
    function t_(e, t) {
      if (!e || 0 === e.length) return null;
      let [r] = e;
      return t ? r[t] : r;
    }
    function tK(e, t, r) {
      return (
        void 0 === t && (t = e.left),
        void 0 === r && (r = e.top),
        { x: t + 0.5 * e.width, y: r + 0.5 * e.height }
      );
    }
    let tU = (e) => {
        let { collisionRect: t, droppableRects: r, droppableContainers: n } = e,
          s = tK(t, t.left, t.top),
          l = [];
        for (let e of n) {
          let { id: t } = e,
            n = r.get(t);
          if (n) {
            let r = tz(tK(n), s);
            l.push({ id: t, data: { droppableContainer: e, value: r } });
          }
        }
        return l.sort(tB);
      },
      tH = (e) => {
        let { collisionRect: t, droppableRects: r, droppableContainers: n } = e,
          s = [];
        for (let e of n) {
          let { id: n } = e,
            l = r.get(n);
          if (l) {
            let r = (function (e, t) {
              let r = Math.max(t.top, e.top),
                n = Math.max(t.left, e.left),
                s = Math.min(t.left + t.width, e.left + e.width),
                l = Math.min(t.top + t.height, e.top + e.height);
              if (n < s && r < l) {
                let a = t.width * t.height,
                  i = e.width * e.height,
                  o = (s - n) * (l - r);
                return Number((o / (a + i - o)).toFixed(4));
              }
              return 0;
            })(l, t);
            r > 0 &&
              s.push({ id: n, data: { droppableContainer: e, value: r } });
          }
        }
        return s.sort(tF);
      };
    function tW(e, t) {
      return e && t ? { x: e.left - t.left, y: e.top - t.top } : tO;
    }
    let tG = function (e) {
        for (
          var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1;
          n < t;
          n++
        )
          r[n - 1] = arguments[n];
        return r.reduce(
          (e, t) => ({
            ...e,
            top: e.top + +t.y,
            bottom: e.bottom + +t.y,
            left: e.left + +t.x,
            right: e.right + +t.x,
          }),
          { ...e }
        );
      },
      tV = { ignoreTransform: !1 };
    function tY(e, t) {
      void 0 === t && (t = tV);
      let r = e.getBoundingClientRect();
      if (t.ignoreTransform) {
        let { transform: t, transformOrigin: n } = ta(e).getComputedStyle(e);
        t &&
          (r = (function (e, t, r) {
            let n = (function (e) {
              if (e.startsWith("matrix3d(")) {
                let t = e.slice(9, -1).split(/, /);
                return { x: +t[12], y: +t[13], scaleX: +t[0], scaleY: +t[5] };
              }
              if (e.startsWith("matrix(")) {
                let t = e.slice(7, -1).split(/, /);
                return { x: +t[4], y: +t[5], scaleX: +t[0], scaleY: +t[3] };
              }
              return null;
            })(t);
            if (!n) return e;
            let { scaleX: s, scaleY: l, x: a, y: i } = n,
              o = e.left - a - (1 - s) * parseFloat(r),
              d = e.top - i - (1 - l) * parseFloat(r.slice(r.indexOf(" ") + 1)),
              c = s ? e.width / s : e.width,
              u = l ? e.height / l : e.height;
            return {
              width: c,
              height: u,
              top: d,
              right: o + c,
              bottom: d + u,
              left: o,
            };
          })(r, t, n));
      }
      let { top: n, left: s, width: l, height: a, bottom: i, right: o } = r;
      return { top: n, left: s, width: l, height: a, bottom: i, right: o };
    }
    function tX(e) {
      return tY(e, { ignoreTransform: !0 });
    }
    function tq(e, t) {
      let r = [];
      return e
        ? (function n(s) {
            var l, a;
            let i;
            if ((null != t && r.length >= t) || !s) return r;
            if (
              ti(s) &&
              null != s.scrollingElement &&
              !r.includes(s.scrollingElement)
            )
              return r.push(s.scrollingElement), r;
            if (!to(s) || td(s) || r.includes(s)) return r;
            let o = ta(e).getComputedStyle(s);
            return (s !== e &&
              (void 0 === (l = o) && (l = ta(s).getComputedStyle(s)),
              (i = /(auto|scroll|overlay)/),
              ["overflow", "overflowX", "overflowY"].some((e) => {
                let t = l[e];
                return "string" == typeof t && i.test(t);
              })) &&
              r.push(s),
            void 0 === (a = o) && (a = ta(s).getComputedStyle(s)),
            "fixed" === a.position)
              ? r
              : n(s.parentNode);
          })(e)
        : r;
    }
    function t$(e) {
      let [t] = tq(e, 1);
      return null != t ? t : null;
    }
    function tJ(e) {
      return tn && e
        ? ts(e)
          ? e
          : tl(e)
          ? ti(e) || e === tc(e).scrollingElement
            ? window
            : to(e)
            ? e
            : null
          : null
        : null;
    }
    function tQ(e) {
      return ts(e) ? e.scrollX : e.scrollLeft;
    }
    function tZ(e) {
      return ts(e) ? e.scrollY : e.scrollTop;
    }
    function t0(e) {
      return { x: tQ(e), y: tZ(e) };
    }
    function t1(e) {
      return !!tn && !!e && e === document.scrollingElement;
    }
    function t2(e) {
      let t = { x: 0, y: 0 },
        r = t1(e)
          ? { height: window.innerHeight, width: window.innerWidth }
          : { height: e.clientHeight, width: e.clientWidth },
        n = { x: e.scrollWidth - r.width, y: e.scrollHeight - r.height },
        s = e.scrollTop <= t.y,
        l = e.scrollLeft <= t.x;
      return {
        isTop: s,
        isLeft: l,
        isBottom: e.scrollTop >= n.y,
        isRight: e.scrollLeft >= n.x,
        maxScroll: n,
        minScroll: t,
      };
    }
    ((n = h || (h = {}))[(n.Forward = 1)] = "Forward"),
      (n[(n.Backward = -1)] = "Backward");
    let t3 = { x: 0.2, y: 0.2 };
    function t5(e) {
      return e.reduce((e, t) => tw(e, t0(t)), tO);
    }
    let t4 = [
      [
        "x",
        ["left", "right"],
        function (e) {
          return e.reduce((e, t) => e + tQ(t), 0);
        },
      ],
      [
        "y",
        ["top", "bottom"],
        function (e) {
          return e.reduce((e, t) => e + tZ(t), 0);
        },
      ],
    ];
    class t6 {
      constructor(e, t) {
        (this.rect = void 0),
          (this.width = void 0),
          (this.height = void 0),
          (this.top = void 0),
          (this.bottom = void 0),
          (this.right = void 0),
          (this.left = void 0);
        const r = tq(t),
          n = t5(r);
        for (const [t, s, l] of ((this.rect = { ...e }),
        (this.width = e.width),
        (this.height = e.height),
        t4))
          for (const e of s)
            Object.defineProperty(this, e, {
              get: () => {
                let s = l(r),
                  a = n[t] - s;
                return this.rect[e] + a;
              },
              enumerable: !0,
            });
        Object.defineProperty(this, "rect", { enumerable: !1 });
      }
    }
    class t8 {
      constructor(e) {
        (this.target = void 0),
          (this.listeners = []),
          (this.removeAll = () => {
            this.listeners.forEach((e) => {
              var t;
              return null == (t = this.target)
                ? void 0
                : t.removeEventListener(...e);
            });
          }),
          (this.target = e);
      }
      add(e, t, r) {
        var n;
        null == (n = this.target) || n.addEventListener(e, t, r),
          this.listeners.push([e, t, r]);
      }
    }
    function t9(e, t) {
      let r = Math.abs(e.x),
        n = Math.abs(e.y);
      return "number" == typeof t
        ? Math.sqrt(r ** 2 + n ** 2) > t
        : "x" in t && "y" in t
        ? r > t.x && n > t.y
        : "x" in t
        ? r > t.x
        : "y" in t && n > t.y;
    }
    function t7(e) {
      e.preventDefault();
    }
    function re(e) {
      e.stopPropagation();
    }
    ((s = p || (p = {})).Click = "click"),
      (s.DragStart = "dragstart"),
      (s.Keydown = "keydown"),
      (s.ContextMenu = "contextmenu"),
      (s.Resize = "resize"),
      (s.SelectionChange = "selectionchange"),
      (s.VisibilityChange = "visibilitychange"),
      ((l = m || (m = {})).Space = "Space"),
      (l.Down = "ArrowDown"),
      (l.Right = "ArrowRight"),
      (l.Left = "ArrowLeft"),
      (l.Up = "ArrowUp"),
      (l.Esc = "Escape"),
      (l.Enter = "Enter"),
      (l.Tab = "Tab");
    let rt = {
        start: [m.Space, m.Enter],
        cancel: [m.Esc],
        end: [m.Space, m.Enter, m.Tab],
      },
      rr = (e, t) => {
        let { currentCoordinates: r } = t;
        switch (e.code) {
          case m.Right:
            return { ...r, x: r.x + 25 };
          case m.Left:
            return { ...r, x: r.x - 25 };
          case m.Down:
            return { ...r, y: r.y + 25 };
          case m.Up:
            return { ...r, y: r.y - 25 };
        }
      };
    class rn {
      constructor(e) {
        (this.props = void 0),
          (this.autoScrollEnabled = !1),
          (this.referenceCoordinates = void 0),
          (this.listeners = void 0),
          (this.windowListeners = void 0),
          (this.props = e);
        const {
          event: { target: t },
        } = e;
        (this.props = e),
          (this.listeners = new t8(tc(t))),
          (this.windowListeners = new t8(ta(t))),
          (this.handleKeyDown = this.handleKeyDown.bind(this)),
          (this.handleCancel = this.handleCancel.bind(this)),
          this.attach();
      }
      attach() {
        this.handleStart(),
          this.windowListeners.add(p.Resize, this.handleCancel),
          this.windowListeners.add(p.VisibilityChange, this.handleCancel),
          setTimeout(() => this.listeners.add(p.Keydown, this.handleKeyDown));
      }
      handleStart() {
        let { activeNode: e, onStart: t } = this.props,
          r = e.node.current;
        r &&
          (function (e, t) {
            if ((void 0 === t && (t = tY), !e)) return;
            let { top: r, left: n, bottom: s, right: l } = t(e);
            t$(e) &&
              (s <= 0 ||
                l <= 0 ||
                r >= window.innerHeight ||
                n >= window.innerWidth) &&
              e.scrollIntoView({ block: "center", inline: "center" });
          })(r),
          t(tO);
      }
      handleKeyDown(e) {
        if (tj(e)) {
          let { active: t, context: r, options: n } = this.props,
            {
              keyboardCodes: s = rt,
              coordinateGetter: l = rr,
              scrollBehavior: a = "smooth",
            } = n,
            { code: i } = e;
          if (s.end.includes(i)) return void this.handleEnd(e);
          if (s.cancel.includes(i)) return void this.handleCancel(e);
          let { collisionRect: o } = r.current,
            d = o ? { x: o.left, y: o.top } : tO;
          this.referenceCoordinates || (this.referenceCoordinates = d);
          let c = l(e, {
            active: t,
            context: r.current,
            currentCoordinates: d,
          });
          if (c) {
            let t = ty(c, d),
              n = { x: 0, y: 0 },
              { scrollableAncestors: s } = r.current;
            for (let r of s) {
              let s = e.code,
                {
                  isTop: l,
                  isRight: i,
                  isLeft: o,
                  isBottom: d,
                  maxScroll: u,
                  minScroll: h,
                } = t2(r),
                p = (function (e) {
                  if (e === document.scrollingElement) {
                    let { innerWidth: e, innerHeight: t } = window;
                    return {
                      top: 0,
                      left: 0,
                      right: e,
                      bottom: t,
                      width: e,
                      height: t,
                    };
                  }
                  let {
                    top: t,
                    left: r,
                    right: n,
                    bottom: s,
                  } = e.getBoundingClientRect();
                  return {
                    top: t,
                    left: r,
                    right: n,
                    bottom: s,
                    width: e.clientWidth,
                    height: e.clientHeight,
                  };
                })(r),
                x = {
                  x: Math.min(
                    s === m.Right ? p.right - p.width / 2 : p.right,
                    Math.max(s === m.Right ? p.left : p.left + p.width / 2, c.x)
                  ),
                  y: Math.min(
                    s === m.Down ? p.bottom - p.height / 2 : p.bottom,
                    Math.max(s === m.Down ? p.top : p.top + p.height / 2, c.y)
                  ),
                },
                f = (s === m.Right && !i) || (s === m.Left && !o),
                g = (s === m.Down && !d) || (s === m.Up && !l);
              if (f && x.x !== c.x) {
                let e = r.scrollLeft + t.x,
                  l = (s === m.Right && e <= u.x) || (s === m.Left && e >= h.x);
                if (l && !t.y) return void r.scrollTo({ left: e, behavior: a });
                l
                  ? (n.x = r.scrollLeft - e)
                  : (n.x =
                      s === m.Right ? r.scrollLeft - u.x : r.scrollLeft - h.x),
                  n.x && r.scrollBy({ left: -n.x, behavior: a });
                break;
              }
              if (g && x.y !== c.y) {
                let e = r.scrollTop + t.y,
                  l = (s === m.Down && e <= u.y) || (s === m.Up && e >= h.y);
                if (l && !t.x) return void r.scrollTo({ top: e, behavior: a });
                l
                  ? (n.y = r.scrollTop - e)
                  : (n.y =
                      s === m.Down ? r.scrollTop - u.y : r.scrollTop - h.y),
                  n.y && r.scrollBy({ top: -n.y, behavior: a });
                break;
              }
            }
            this.handleMove(e, tw(ty(c, this.referenceCoordinates), n));
          }
        }
      }
      handleMove(e, t) {
        let { onMove: r } = this.props;
        e.preventDefault(), r(t);
      }
      handleEnd(e) {
        let { onEnd: t } = this.props;
        e.preventDefault(), this.detach(), t();
      }
      handleCancel(e) {
        let { onCancel: t } = this.props;
        e.preventDefault(), this.detach(), t();
      }
      detach() {
        this.listeners.removeAll(), this.windowListeners.removeAll();
      }
    }
    function rs(e) {
      return !!(e && "distance" in e);
    }
    function rl(e) {
      return !!(e && "delay" in e);
    }
    rn.activators = [
      {
        eventName: "onKeyDown",
        handler: (e, t, r) => {
          let { keyboardCodes: n = rt, onActivation: s } = t,
            { active: l } = r,
            { code: a } = e.nativeEvent;
          if (n.start.includes(a)) {
            let t = l.activatorNode.current;
            return (
              (!t || e.target === t) &&
              (e.preventDefault(), null == s || s({ event: e.nativeEvent }), !0)
            );
          }
          return !1;
        },
      },
    ];
    class ra {
      constructor(e, t, r) {
        var n;
        void 0 === r &&
          (r = (function (e) {
            let { EventTarget: t } = ta(e);
            return e instanceof t ? e : tc(e);
          })(e.event.target)),
          (this.props = void 0),
          (this.events = void 0),
          (this.autoScrollEnabled = !0),
          (this.document = void 0),
          (this.activated = !1),
          (this.initialCoordinates = void 0),
          (this.timeoutId = null),
          (this.listeners = void 0),
          (this.documentListeners = void 0),
          (this.windowListeners = void 0),
          (this.props = e),
          (this.events = t);
        const { event: s } = e,
          { target: l } = s;
        (this.props = e),
          (this.events = t),
          (this.document = tc(l)),
          (this.documentListeners = new t8(this.document)),
          (this.listeners = new t8(r)),
          (this.windowListeners = new t8(ta(l))),
          (this.initialCoordinates = null != (n = tN(s)) ? n : tO),
          (this.handleStart = this.handleStart.bind(this)),
          (this.handleMove = this.handleMove.bind(this)),
          (this.handleEnd = this.handleEnd.bind(this)),
          (this.handleCancel = this.handleCancel.bind(this)),
          (this.handleKeydown = this.handleKeydown.bind(this)),
          (this.removeTextSelection = this.removeTextSelection.bind(this)),
          this.attach();
      }
      attach() {
        let {
          events: e,
          props: {
            options: { activationConstraint: t, bypassActivationConstraint: r },
          },
        } = this;
        if (
          (this.listeners.add(e.move.name, this.handleMove, { passive: !1 }),
          this.listeners.add(e.end.name, this.handleEnd),
          e.cancel && this.listeners.add(e.cancel.name, this.handleCancel),
          this.windowListeners.add(p.Resize, this.handleCancel),
          this.windowListeners.add(p.DragStart, t7),
          this.windowListeners.add(p.VisibilityChange, this.handleCancel),
          this.windowListeners.add(p.ContextMenu, t7),
          this.documentListeners.add(p.Keydown, this.handleKeydown),
          t)
        ) {
          if (
            null != r &&
            r({
              event: this.props.event,
              activeNode: this.props.activeNode,
              options: this.props.options,
            })
          )
            return this.handleStart();
          if (rl(t)) {
            (this.timeoutId = setTimeout(this.handleStart, t.delay)),
              this.handlePending(t);
            return;
          }
          if (rs(t)) return void this.handlePending(t);
        }
        this.handleStart();
      }
      detach() {
        this.listeners.removeAll(),
          this.windowListeners.removeAll(),
          setTimeout(this.documentListeners.removeAll, 50),
          null !== this.timeoutId &&
            (clearTimeout(this.timeoutId), (this.timeoutId = null));
      }
      handlePending(e, t) {
        let { active: r, onPending: n } = this.props;
        n(r, e, this.initialCoordinates, t);
      }
      handleStart() {
        let { initialCoordinates: e } = this,
          { onStart: t } = this.props;
        e &&
          ((this.activated = !0),
          this.documentListeners.add(p.Click, re, { capture: !0 }),
          this.removeTextSelection(),
          this.documentListeners.add(
            p.SelectionChange,
            this.removeTextSelection
          ),
          t(e));
      }
      handleMove(e) {
        var t;
        let { activated: r, initialCoordinates: n, props: s } = this,
          {
            onMove: l,
            options: { activationConstraint: a },
          } = s;
        if (!n) return;
        let i = null != (t = tN(e)) ? t : tO,
          o = ty(n, i);
        if (!r && a) {
          if (rs(a)) {
            if (null != a.tolerance && t9(o, a.tolerance))
              return this.handleCancel();
            if (t9(o, a.distance)) return this.handleStart();
          }
          return rl(a) && t9(o, a.tolerance)
            ? this.handleCancel()
            : void this.handlePending(a, o);
        }
        e.cancelable && e.preventDefault(), l(i);
      }
      handleEnd() {
        let { onAbort: e, onEnd: t } = this.props;
        this.detach(), this.activated || e(this.props.active), t();
      }
      handleCancel() {
        let { onAbort: e, onCancel: t } = this.props;
        this.detach(), this.activated || e(this.props.active), t();
      }
      handleKeydown(e) {
        e.code === m.Esc && this.handleCancel();
      }
      removeTextSelection() {
        var e;
        null == (e = this.document.getSelection()) || e.removeAllRanges();
      }
    }
    let ri = {
      cancel: { name: "pointercancel" },
      move: { name: "pointermove" },
      end: { name: "pointerup" },
    };
    class ro extends ra {
      constructor(e) {
        const { event: t } = e;
        super(e, ri, tc(t.target));
      }
    }
    ro.activators = [
      {
        eventName: "onPointerDown",
        handler: (e, t) => {
          let { nativeEvent: r } = e,
            { onActivation: n } = t;
          return (
            !!r.isPrimary &&
            0 === r.button &&
            (null == n || n({ event: r }), !0)
          );
        },
      },
    ];
    (a = x || (x = {}))[(a.RightClick = 2)] = "RightClick";
    ((i = f || (f = {}))[(i.Pointer = 0)] = "Pointer"),
      (i[(i.DraggableRect = 1)] = "DraggableRect"),
      ((o = g || (g = {}))[(o.TreeOrder = 0)] = "TreeOrder"),
      (o[(o.ReversedTreeOrder = 1)] = "ReversedTreeOrder");
    let rd = {
      x: { [h.Backward]: !1, [h.Forward]: !1 },
      y: { [h.Backward]: !1, [h.Forward]: !1 },
    };
    ((d = b || (b = {}))[(d.Always = 0)] = "Always"),
      (d[(d.BeforeDragging = 1)] = "BeforeDragging"),
      (d[(d.WhileDragging = 2)] = "WhileDragging"),
      ((v || (v = {})).Optimized = "optimized");
    let rc = new Map();
    function ru(e, t) {
      return tm(
        (r) => (e ? r || ("function" == typeof t ? t(e) : e) : null),
        [t, e]
      );
    }
    function rh(e) {
      let { callback: t, disabled: r } = e,
        n = th(t),
        s = (0, S.useMemo)(() => {
          if (
            r ||
            "undefined" == typeof window ||
            void 0 === window.ResizeObserver
          )
            return;
          let { ResizeObserver: e } = window;
          return new e(n);
        }, [r]);
      return (
        (0, S.useEffect)(() => () => null == s ? void 0 : s.disconnect(), [s]),
        s
      );
    }
    function rp(e) {
      return new t6(tY(e), e);
    }
    function rm(e, t, r) {
      void 0 === t && (t = rp);
      let [n, s] = (0, S.useState)(null);
      function l() {
        s((n) => {
          if (!e) return null;
          if (!1 === e.isConnected) {
            var s;
            return null != (s = null != n ? n : r) ? s : null;
          }
          let l = t(e);
          return JSON.stringify(n) === JSON.stringify(l) ? n : l;
        });
      }
      let a = (function (e) {
          let { callback: t, disabled: r } = e,
            n = th(t),
            s = (0, S.useMemo)(() => {
              if (
                r ||
                "undefined" == typeof window ||
                void 0 === window.MutationObserver
              )
                return;
              let { MutationObserver: e } = window;
              return new e(n);
            }, [n, r]);
          return (
            (0, S.useEffect)(
              () => () => null == s ? void 0 : s.disconnect(),
              [s]
            ),
            s
          );
        })({
          callback(t) {
            if (e)
              for (let r of t) {
                let { type: t, target: n } = r;
                if (
                  "childList" === t &&
                  n instanceof HTMLElement &&
                  n.contains(e)
                ) {
                  l();
                  break;
                }
              }
          },
        }),
        i = rh({ callback: l });
      return (
        tu(() => {
          l(),
            e
              ? (null == i || i.observe(e),
                null == a ||
                  a.observe(document.body, { childList: !0, subtree: !0 }))
              : (null == i || i.disconnect(), null == a || a.disconnect());
        }, [e]),
        n
      );
    }
    let rx = [];
    function rf(e, t) {
      void 0 === t && (t = []);
      let r = (0, S.useRef)(null);
      return (
        (0, S.useEffect)(() => {
          r.current = null;
        }, t),
        (0, S.useEffect)(() => {
          let t = e !== tO;
          t && !r.current && (r.current = e),
            !t && r.current && (r.current = null);
        }, [e]),
        r.current ? ty(e, r.current) : tO
      );
    }
    function rg(e) {
      return (0, S.useMemo)(() => {
        let t, r;
        return e
          ? ((t = e.innerWidth),
            {
              top: 0,
              left: 0,
              right: t,
              bottom: (r = e.innerHeight),
              width: t,
              height: r,
            })
          : null;
      }, [e]);
    }
    let rb = [],
      rv = [
        { sensor: ro, options: {} },
        { sensor: rn, options: {} },
      ],
      rw = { current: {} },
      ry = {
        draggable: { measure: tX },
        droppable: {
          measure: tX,
          strategy: b.WhileDragging,
          frequency: v.Optimized,
        },
        dragOverlay: { measure: tY },
      };
    class rj extends Map {
      get(e) {
        var t;
        return null != e && null != (t = super.get(e)) ? t : void 0;
      }
      toArray() {
        return Array.from(this.values());
      }
      getEnabled() {
        return this.toArray().filter((e) => {
          let { disabled: t } = e;
          return !t;
        });
      }
      getNodeFor(e) {
        var t, r;
        return null != (t = null == (r = this.get(e)) ? void 0 : r.node.current)
          ? t
          : void 0;
      }
    }
    let rN = {
        activatorEvent: null,
        active: null,
        activeNode: null,
        activeNodeRect: null,
        collisions: null,
        containerNodeRect: null,
        draggableNodes: new Map(),
        droppableRects: new Map(),
        droppableContainers: new rj(),
        over: null,
        dragOverlay: { nodeRef: { current: null }, rect: null, setRef: tI },
        scrollableAncestors: [],
        scrollableAncestorRects: [],
        measuringConfiguration: ry,
        measureDroppableContainers: tI,
        windowRect: null,
        measuringScheduled: !1,
      },
      rC = {
        activatorEvent: null,
        activators: [],
        active: null,
        activeNodeRect: null,
        ariaDescribedById: { draggable: "" },
        dispatch: tI,
        draggableNodes: new Map(),
        over: null,
        measureDroppableContainers: tI,
      },
      rk = (0, S.createContext)(rC),
      rS = (0, S.createContext)(rN);
    function rE() {
      return {
        draggable: {
          active: null,
          initialCoordinates: { x: 0, y: 0 },
          nodes: new Map(),
          translate: { x: 0, y: 0 },
        },
        droppable: { containers: new rj() },
      };
    }
    function rD(e, t) {
      switch (t.type) {
        case u.DragStart:
          return {
            ...e,
            draggable: {
              ...e.draggable,
              initialCoordinates: t.initialCoordinates,
              active: t.active,
            },
          };
        case u.DragMove:
          if (null == e.draggable.active) return e;
          return {
            ...e,
            draggable: {
              ...e.draggable,
              translate: {
                x: t.coordinates.x - e.draggable.initialCoordinates.x,
                y: t.coordinates.y - e.draggable.initialCoordinates.y,
              },
            },
          };
        case u.DragEnd:
        case u.DragCancel:
          return {
            ...e,
            draggable: {
              ...e.draggable,
              active: null,
              initialCoordinates: { x: 0, y: 0 },
              translate: { x: 0, y: 0 },
            },
          };
        case u.RegisterDroppable: {
          let { element: r } = t,
            { id: n } = r,
            s = new rj(e.droppable.containers);
          return (
            s.set(n, r), { ...e, droppable: { ...e.droppable, containers: s } }
          );
        }
        case u.SetDroppableDisabled: {
          let { id: r, key: n, disabled: s } = t,
            l = e.droppable.containers.get(r);
          if (!l || n !== l.key) return e;
          let a = new rj(e.droppable.containers);
          return (
            a.set(r, { ...l, disabled: s }),
            { ...e, droppable: { ...e.droppable, containers: a } }
          );
        }
        case u.UnregisterDroppable: {
          let { id: r, key: n } = t,
            s = e.droppable.containers.get(r);
          if (!s || n !== s.key) return e;
          let l = new rj(e.droppable.containers);
          return (
            l.delete(r), { ...e, droppable: { ...e.droppable, containers: l } }
          );
        }
        default:
          return e;
      }
    }
    function rT(e) {
      let { disabled: t } = e,
        {
          active: r,
          activatorEvent: n,
          draggableNodes: s,
        } = (0, S.useContext)(rk),
        l = tf(n),
        a = tf(null == r ? void 0 : r.id);
      return (
        (0, S.useEffect)(() => {
          if (!t && !n && l && null != a) {
            if (!tj(l) || document.activeElement === l.target) return;
            let e = s.get(a);
            if (!e) return;
            let { activatorNode: t, node: r } = e;
            (t.current || r.current) &&
              requestAnimationFrame(() => {
                for (let e of [t.current, r.current]) {
                  if (!e) continue;
                  let t = e.matches(tk) ? e : e.querySelector(tk);
                  if (t) {
                    t.focus();
                    break;
                  }
                }
              });
          }
        }, [n, t, s, a, l]),
        null
      );
    }
    let rA = (0, S.createContext)({ ...tO, scaleX: 1, scaleY: 1 });
    ((c = w || (w = {}))[(c.Uninitialized = 0)] = "Uninitialized"),
      (c[(c.Initializing = 1)] = "Initializing"),
      (c[(c.Initialized = 2)] = "Initialized");
    let rM = (0, S.memo)(function (e) {
        var t, r, n, s, l, a, i, o;
        let d,
          c,
          p,
          m,
          x,
          v,
          y,
          j,
          {
            id: N,
            accessibility: C,
            autoScroll: k = !0,
            children: E,
            sensors: D = rv,
            collisionDetection: T = tH,
            measuring: A,
            modifiers: M,
            ...P
          } = e,
          [I, R] = (0, S.useReducer)(rD, void 0, rE),
          [O, z] = (function () {
            let [e] = (0, S.useState)(() => new Set()),
              t = (0, S.useCallback)((t) => (e.add(t), () => e.delete(t)), [e]);
            return [
              (0, S.useCallback)(
                (t) => {
                  let { type: r, event: n } = t;
                  e.forEach((e) => {
                    var t;
                    return null == (t = e[r]) ? void 0 : t.call(e, n);
                  });
                },
                [e]
              ),
              t,
            ];
          })(),
          [B, F] = (0, S.useState)(w.Uninitialized),
          L = B === w.Initialized,
          {
            draggable: { active: _, nodes: K, translate: U },
            droppable: { containers: H },
          } = I,
          W = null != _ ? K.get(_) : null,
          G = (0, S.useRef)({ initial: null, translated: null }),
          V = (0, S.useMemo)(() => {
            var e;
            return null != _
              ? {
                  id: _,
                  data: null != (e = null == W ? void 0 : W.data) ? e : rw,
                  rect: G,
                }
              : null;
          }, [_, W]),
          Y = (0, S.useRef)(null),
          [X, q] = (0, S.useState)(null),
          [$, J] = (0, S.useState)(null),
          Q = tp(P, Object.values(P)),
          Z = tb("DndDescribedBy", N),
          ee = (0, S.useMemo)(() => H.getEnabled(), [H]),
          et = (0, S.useMemo)(
            () => ({
              draggable: {
                ...ry.draggable,
                ...(null == A ? void 0 : A.draggable),
              },
              droppable: {
                ...ry.droppable,
                ...(null == A ? void 0 : A.droppable),
              },
              dragOverlay: {
                ...ry.dragOverlay,
                ...(null == A ? void 0 : A.dragOverlay),
              },
            }),
            [
              null == A ? void 0 : A.draggable,
              null == A ? void 0 : A.droppable,
              null == A ? void 0 : A.dragOverlay,
            ]
          ),
          {
            droppableRects: er,
            measureDroppableContainers: en,
            measuringScheduled: es,
          } = (function (e, t) {
            let { dragging: r, dependencies: n, config: s } = t,
              [l, a] = (0, S.useState)(null),
              { frequency: i, measure: o, strategy: d } = s,
              c = (0, S.useRef)(e),
              u = (function () {
                switch (d) {
                  case b.Always:
                    return !1;
                  case b.BeforeDragging:
                    return r;
                  default:
                    return !r;
                }
              })(),
              h = tp(u),
              p = (0, S.useCallback)(
                function (e) {
                  void 0 === e && (e = []),
                    h.current ||
                      a((t) =>
                        null === t
                          ? e
                          : t.concat(e.filter((e) => !t.includes(e)))
                      );
                },
                [h]
              ),
              m = (0, S.useRef)(null),
              x = tm(
                (t) => {
                  if (u && !r) return rc;
                  if (!t || t === rc || c.current !== e || null != l) {
                    let t = new Map();
                    for (let r of e) {
                      if (!r) continue;
                      if (
                        l &&
                        l.length > 0 &&
                        !l.includes(r.id) &&
                        r.rect.current
                      ) {
                        t.set(r.id, r.rect.current);
                        continue;
                      }
                      let e = r.node.current,
                        n = e ? new t6(o(e), e) : null;
                      (r.rect.current = n), n && t.set(r.id, n);
                    }
                    return t;
                  }
                  return t;
                },
                [e, l, r, u, o]
              );
            return (
              (0, S.useEffect)(() => {
                c.current = e;
              }, [e]),
              (0, S.useEffect)(() => {
                u || p();
              }, [r, u]),
              (0, S.useEffect)(() => {
                l && l.length > 0 && a(null);
              }, [JSON.stringify(l)]),
              (0, S.useEffect)(() => {
                u ||
                  "number" != typeof i ||
                  null !== m.current ||
                  (m.current = setTimeout(() => {
                    p(), (m.current = null);
                  }, i));
              }, [i, u, p, ...n]),
              {
                droppableRects: x,
                measureDroppableContainers: p,
                measuringScheduled: null != l,
              }
            );
          })(ee, {
            dragging: L,
            dependencies: [U.x, U.y],
            config: et.droppable,
          }),
          el = tm(
            (e) => {
              var t;
              return null == _
                ? null
                : null != (t = null != x ? x : e)
                ? t
                : null;
            },
            [
              (x = (m = null != _ ? K.get(_) : void 0) ? m.node.current : null),
              _,
            ]
          ),
          ea = (0, S.useMemo)(() => ($ ? tN($) : null), [$]),
          ei =
            ((d = (null == X ? void 0 : X.autoScrollEnabled) === !1),
            (c = "object" == typeof k ? !1 === k.enabled : !1 === k),
            (p = L && !d && !c),
            "object" == typeof k ? { ...k, enabled: p } : { enabled: p }),
          eo = ru(el, et.draggable.measure);
        !(function (e) {
          let { activeNode: t, measure: r, initialRect: n, config: s = !0 } = e,
            l = (0, S.useRef)(!1),
            { x: a, y: i } = "boolean" == typeof s ? { x: s, y: s } : s;
          tu(() => {
            if ((!a && !i) || !t) {
              l.current = !1;
              return;
            }
            if (l.current || !n) return;
            let e = null == t ? void 0 : t.node.current;
            if (!e || !1 === e.isConnected) return;
            let s = tW(r(e), n);
            if (
              (a || (s.x = 0),
              i || (s.y = 0),
              (l.current = !0),
              Math.abs(s.x) > 0 || Math.abs(s.y) > 0)
            ) {
              let t = t$(e);
              t && t.scrollBy({ top: s.y, left: s.x });
            }
          }, [t, a, i, n, r]);
        })({
          activeNode: null != _ ? K.get(_) : null,
          config: ei.layoutShiftCompensation,
          initialRect: eo,
          measure: et.draggable.measure,
        });
        let ed = rm(el, et.draggable.measure, eo),
          ec = rm(el ? el.parentElement : null),
          eu = (0, S.useRef)({
            activatorEvent: null,
            active: null,
            activeNode: el,
            collisionRect: null,
            collisions: null,
            droppableRects: er,
            draggableNodes: K,
            draggingNode: null,
            draggingNodeRect: null,
            droppableContainers: H,
            over: null,
            scrollableAncestors: [],
            scrollAdjustedTranslate: null,
          }),
          eh = H.getNodeFor(null == (t = eu.current.over) ? void 0 : t.id),
          ep = (function (e) {
            let { measure: t } = e,
              [r, n] = (0, S.useState)(null),
              s = rh({
                callback: (0, S.useCallback)(
                  (e) => {
                    for (let { target: r } of e)
                      if (to(r)) {
                        n((e) => {
                          let n = t(r);
                          return e
                            ? { ...e, width: n.width, height: n.height }
                            : n;
                        });
                        break;
                      }
                  },
                  [t]
                ),
              }),
              [l, a] = tx(
                (0, S.useCallback)(
                  (e) => {
                    let r = (function (e) {
                      if (!e) return null;
                      if (e.children.length > 1) return e;
                      let t = e.children[0];
                      return to(t) ? t : e;
                    })(e);
                    null == s || s.disconnect(),
                      r && (null == s || s.observe(r)),
                      n(r ? t(r) : null);
                  },
                  [t, s]
                )
              );
            return (0, S.useMemo)(
              () => ({ nodeRef: l, rect: r, setRef: a }),
              [r, l, a]
            );
          })({ measure: et.dragOverlay.measure }),
          em = null != (r = ep.nodeRef.current) ? r : el,
          ex = L ? (null != (n = ep.rect) ? n : ed) : null,
          ef = !!(ep.nodeRef.current && ep.rect),
          eg = ((v = ru((l = ef ? null : ed))), tW(l, v)),
          eb = rg(em ? ta(em) : null),
          ev =
            ((a = L ? (null != eh ? eh : el) : null),
            (y = (0, S.useRef)(a)),
            (j = tm(
              (e) =>
                a
                  ? e &&
                    e !== rx &&
                    a &&
                    y.current &&
                    a.parentNode === y.current.parentNode
                    ? e
                    : tq(a)
                  : rx,
              [a]
            )),
            (0, S.useEffect)(() => {
              y.current = a;
            }, [a]),
            j),
          ew = (function (e, t) {
            void 0 === t && (t = tY);
            let [r] = e,
              n = rg(r ? ta(r) : null),
              [s, l] = (0, S.useState)(rb);
            function a() {
              l(() =>
                e.length ? e.map((e) => (t1(e) ? n : new t6(t(e), e))) : rb
              );
            }
            let i = rh({ callback: a });
            return (
              tu(() => {
                null == i || i.disconnect(),
                  a(),
                  e.forEach((e) => (null == i ? void 0 : i.observe(e)));
              }, [e]),
              s
            );
          })(ev),
          ey = (function (e, t) {
            let { transform: r, ...n } = t;
            return null != e && e.length
              ? e.reduce((e, t) => t({ transform: e, ...n }), r)
              : r;
          })(M, {
            transform: { x: U.x - eg.x, y: U.y - eg.y, scaleX: 1, scaleY: 1 },
            activatorEvent: $,
            active: V,
            activeNodeRect: ed,
            containerNodeRect: ec,
            draggingNodeRect: ex,
            over: eu.current.over,
            overlayNodeRect: ep.rect,
            scrollableAncestors: ev,
            scrollableAncestorRects: ew,
            windowRect: eb,
          }),
          ej = ea ? tw(ea, U) : null,
          eN = (function (e) {
            let [t, r] = (0, S.useState)(null),
              n = (0, S.useRef)(e),
              s = (0, S.useCallback)((e) => {
                let t = tJ(e.target);
                t && r((e) => (e ? (e.set(t, t0(t)), new Map(e)) : null));
              }, []);
            return (
              (0, S.useEffect)(() => {
                let t = n.current;
                if (e !== t) {
                  l(t);
                  let a = e
                    .map((e) => {
                      let t = tJ(e);
                      return t
                        ? (t.addEventListener("scroll", s, { passive: !0 }),
                          [t, t0(t)])
                        : null;
                    })
                    .filter((e) => null != e);
                  r(a.length ? new Map(a) : null), (n.current = e);
                }
                return () => {
                  l(e), l(t);
                };
                function l(e) {
                  e.forEach((e) => {
                    let t = tJ(e);
                    null == t || t.removeEventListener("scroll", s);
                  });
                }
              }, [s, e]),
              (0, S.useMemo)(
                () =>
                  e.length
                    ? t
                      ? Array.from(t.values()).reduce((e, t) => tw(e, t), tO)
                      : t5(e)
                    : tO,
                [e, t]
              )
            );
          })(ev),
          eC = rf(eN),
          ek = rf(eN, [ed]),
          eS = tw(ey, eC),
          eE = ex ? tG(ex, ey) : null,
          eD =
            V && eE
              ? T({
                  active: V,
                  collisionRect: eE,
                  droppableRects: er,
                  droppableContainers: ee,
                  pointerCoordinates: ej,
                })
              : null,
          eT = t_(eD, "id"),
          [eA, eM] = (0, S.useState)(null),
          eP =
            ((i = ef ? ey : tw(ey, ek)),
            (o = null != (s = null == eA ? void 0 : eA.rect) ? s : null),
            {
              ...i,
              scaleX: o && ed ? o.width / ed.width : 1,
              scaleY: o && ed ? o.height / ed.height : 1,
            }),
          eI = (0, S.useRef)(null),
          eR = (0, S.useCallback)(
            (e, t) => {
              let { sensor: r, options: n } = t;
              if (null == Y.current) return;
              let s = K.get(Y.current);
              if (!s) return;
              let l = e.nativeEvent,
                a = new r({
                  active: Y.current,
                  activeNode: s,
                  event: l,
                  options: n,
                  context: eu,
                  onAbort(e) {
                    if (!K.get(e)) return;
                    let { onDragAbort: t } = Q.current,
                      r = { id: e };
                    null == t || t(r), O({ type: "onDragAbort", event: r });
                  },
                  onPending(e, t, r, n) {
                    if (!K.get(e)) return;
                    let { onDragPending: s } = Q.current,
                      l = {
                        id: e,
                        constraint: t,
                        initialCoordinates: r,
                        offset: n,
                      };
                    null == s || s(l), O({ type: "onDragPending", event: l });
                  },
                  onStart(e) {
                    let t = Y.current;
                    if (null == t) return;
                    let r = K.get(t);
                    if (!r) return;
                    let { onDragStart: n } = Q.current,
                      s = {
                        activatorEvent: l,
                        active: { id: t, data: r.data, rect: G },
                      };
                    (0, tr.unstable_batchedUpdates)(() => {
                      null == n || n(s),
                        F(w.Initializing),
                        R({
                          type: u.DragStart,
                          initialCoordinates: e,
                          active: t,
                        }),
                        O({ type: "onDragStart", event: s }),
                        q(eI.current),
                        J(l);
                    });
                  },
                  onMove(e) {
                    R({ type: u.DragMove, coordinates: e });
                  },
                  onEnd: i(u.DragEnd),
                  onCancel: i(u.DragCancel),
                });
              function i(e) {
                return async function () {
                  let {
                      active: t,
                      collisions: r,
                      over: n,
                      scrollAdjustedTranslate: s,
                    } = eu.current,
                    a = null;
                  if (t && s) {
                    let { cancelDrop: i } = Q.current;
                    (a = {
                      activatorEvent: l,
                      active: t,
                      collisions: r,
                      delta: s,
                      over: n,
                    }),
                      e === u.DragEnd &&
                        "function" == typeof i &&
                        (await Promise.resolve(i(a))) &&
                        (e = u.DragCancel);
                  }
                  (Y.current = null),
                    (0, tr.unstable_batchedUpdates)(() => {
                      R({ type: e }),
                        F(w.Uninitialized),
                        eM(null),
                        q(null),
                        J(null),
                        (eI.current = null);
                      let t = e === u.DragEnd ? "onDragEnd" : "onDragCancel";
                      if (a) {
                        let e = Q.current[t];
                        null == e || e(a), O({ type: t, event: a });
                      }
                    });
                };
              }
              eI.current = a;
            },
            [K]
          ),
          eO = (0, S.useCallback)(
            (e, t) => (r, n) => {
              let s = r.nativeEvent,
                l = K.get(n);
              null !== Y.current ||
                !l ||
                s.dndKit ||
                s.defaultPrevented ||
                (!0 === e(r, t.options, { active: l }) &&
                  ((s.dndKit = { capturedBy: t.sensor }),
                  (Y.current = n),
                  eR(r, t)));
            },
            [K, eR]
          ),
          ez = (0, S.useMemo)(
            () =>
              D.reduce((e, t) => {
                let { sensor: r } = t;
                return [
                  ...e,
                  ...r.activators.map((e) => ({
                    eventName: e.eventName,
                    handler: eO(e.handler, t),
                  })),
                ];
              }, []),
            [D, eO]
          );
        (0, S.useEffect)(
          () => {
            if (!tn) return;
            let e = D.map((e) => {
              let { sensor: t } = e;
              return null == t.setup ? void 0 : t.setup();
            });
            return () => {
              for (let t of e) null == t || t();
            };
          },
          D.map((e) => {
            let { sensor: t } = e;
            return t;
          })
        ),
          tu(() => {
            ed && B === w.Initializing && F(w.Initialized);
          }, [ed, B]),
          (0, S.useEffect)(() => {
            let { onDragMove: e } = Q.current,
              {
                active: t,
                activatorEvent: r,
                collisions: n,
                over: s,
              } = eu.current;
            if (!t || !r) return;
            let l = {
              active: t,
              activatorEvent: r,
              collisions: n,
              delta: { x: eS.x, y: eS.y },
              over: s,
            };
            (0, tr.unstable_batchedUpdates)(() => {
              null == e || e(l), O({ type: "onDragMove", event: l });
            });
          }, [eS.x, eS.y]),
          (0, S.useEffect)(() => {
            let {
              active: e,
              activatorEvent: t,
              collisions: r,
              droppableContainers: n,
              scrollAdjustedTranslate: s,
            } = eu.current;
            if (!e || null == Y.current || !t || !s) return;
            let { onDragOver: l } = Q.current,
              a = n.get(eT),
              i =
                a && a.rect.current
                  ? {
                      id: a.id,
                      rect: a.rect.current,
                      data: a.data,
                      disabled: a.disabled,
                    }
                  : null,
              o = {
                active: e,
                activatorEvent: t,
                collisions: r,
                delta: { x: s.x, y: s.y },
                over: i,
              };
            (0, tr.unstable_batchedUpdates)(() => {
              eM(i), null == l || l(o), O({ type: "onDragOver", event: o });
            });
          }, [eT]),
          tu(() => {
            (eu.current = {
              activatorEvent: $,
              active: V,
              activeNode: el,
              collisionRect: eE,
              collisions: eD,
              droppableRects: er,
              draggableNodes: K,
              draggingNode: em,
              draggingNodeRect: ex,
              droppableContainers: H,
              over: eA,
              scrollableAncestors: ev,
              scrollAdjustedTranslate: eS,
            }),
              (G.current = { initial: ex, translated: eE });
          }, [V, el, eD, eE, K, em, ex, er, H, eA, ev, eS]),
          (function (e) {
            let t,
              {
                acceleration: r,
                activator: n = f.Pointer,
                canScroll: s,
                draggingRect: l,
                enabled: a,
                interval: i = 5,
                order: o = g.TreeOrder,
                pointerCoordinates: d,
                scrollableAncestors: c,
                scrollableAncestorRects: u,
                delta: p,
                threshold: m,
              } = e,
              x = (function (e) {
                let { delta: t, disabled: r } = e,
                  n = tf(t);
                return tm(
                  (e) => {
                    if (r || !n || !e) return rd;
                    let s = {
                      x: Math.sign(t.x - n.x),
                      y: Math.sign(t.y - n.y),
                    };
                    return {
                      x: {
                        [h.Backward]: e.x[h.Backward] || -1 === s.x,
                        [h.Forward]: e.x[h.Forward] || 1 === s.x,
                      },
                      y: {
                        [h.Backward]: e.y[h.Backward] || -1 === s.y,
                        [h.Forward]: e.y[h.Forward] || 1 === s.y,
                      },
                    };
                  },
                  [r, t, n]
                );
              })({ delta: p, disabled: !a }),
              [b, v] =
                ((t = (0, S.useRef)(null)),
                [
                  (0, S.useCallback)((e, r) => {
                    t.current = setInterval(e, r);
                  }, []),
                  (0, S.useCallback)(() => {
                    null !== t.current &&
                      (clearInterval(t.current), (t.current = null));
                  }, []),
                ]),
              w = (0, S.useRef)({ x: 0, y: 0 }),
              y = (0, S.useRef)({ x: 0, y: 0 }),
              j = (0, S.useMemo)(() => {
                switch (n) {
                  case f.Pointer:
                    return d
                      ? { top: d.y, bottom: d.y, left: d.x, right: d.x }
                      : null;
                  case f.DraggableRect:
                    return l;
                }
              }, [n, l, d]),
              N = (0, S.useRef)(null),
              C = (0, S.useCallback)(() => {
                let e = N.current;
                if (!e) return;
                let t = w.current.x * y.current.x,
                  r = w.current.y * y.current.y;
                e.scrollBy(t, r);
              }, []),
              k = (0, S.useMemo)(
                () => (o === g.TreeOrder ? [...c].reverse() : c),
                [o, c]
              );
            (0, S.useEffect)(() => {
              if (!a || !c.length || !j) return void v();
              for (let e of k) {
                if ((null == s ? void 0 : s(e)) === !1) continue;
                let t = u[c.indexOf(e)];
                if (!t) continue;
                let { direction: n, speed: l } = (function (e, t, r, n, s) {
                  let { top: l, left: a, right: i, bottom: o } = r;
                  void 0 === n && (n = 10), void 0 === s && (s = t3);
                  let { isTop: d, isBottom: c, isLeft: u, isRight: p } = t2(e),
                    m = { x: 0, y: 0 },
                    x = { x: 0, y: 0 },
                    f = { height: t.height * s.y, width: t.width * s.x };
                  return (
                    !d && l <= t.top + f.height
                      ? ((m.y = h.Backward),
                        (x.y = n * Math.abs((t.top + f.height - l) / f.height)))
                      : !c &&
                        o >= t.bottom - f.height &&
                        ((m.y = h.Forward),
                        (x.y =
                          n * Math.abs((t.bottom - f.height - o) / f.height))),
                    !p && i >= t.right - f.width
                      ? ((m.x = h.Forward),
                        (x.x = n * Math.abs((t.right - f.width - i) / f.width)))
                      : !u &&
                        a <= t.left + f.width &&
                        ((m.x = h.Backward),
                        (x.x = n * Math.abs((t.left + f.width - a) / f.width))),
                    { direction: m, speed: x }
                  );
                })(e, t, j, r, m);
                for (let e of ["x", "y"])
                  x[e][n[e]] || ((l[e] = 0), (n[e] = 0));
                if (l.x > 0 || l.y > 0) {
                  v(),
                    (N.current = e),
                    b(C, i),
                    (w.current = l),
                    (y.current = n);
                  return;
                }
              }
              (w.current = { x: 0, y: 0 }), (y.current = { x: 0, y: 0 }), v();
            }, [
              r,
              C,
              s,
              v,
              a,
              i,
              JSON.stringify(j),
              JSON.stringify(x),
              b,
              c,
              k,
              u,
              JSON.stringify(m),
            ]);
          })({
            ...ei,
            delta: U,
            draggingRect: eE,
            pointerCoordinates: ej,
            scrollableAncestors: ev,
            scrollableAncestorRects: ew,
          });
        let eB = (0, S.useMemo)(
            () => ({
              active: V,
              activeNode: el,
              activeNodeRect: ed,
              activatorEvent: $,
              collisions: eD,
              containerNodeRect: ec,
              dragOverlay: ep,
              draggableNodes: K,
              droppableContainers: H,
              droppableRects: er,
              over: eA,
              measureDroppableContainers: en,
              scrollableAncestors: ev,
              scrollableAncestorRects: ew,
              measuringConfiguration: et,
              measuringScheduled: es,
              windowRect: eb,
            }),
            [V, el, ed, $, eD, ec, ep, K, H, er, eA, en, ev, ew, et, es, eb]
          ),
          eF = (0, S.useMemo)(
            () => ({
              activatorEvent: $,
              activators: ez,
              active: V,
              activeNodeRect: ed,
              ariaDescribedById: { draggable: Z },
              dispatch: R,
              draggableNodes: K,
              over: eA,
              measureDroppableContainers: en,
            }),
            [$, ez, V, ed, R, Z, K, eA, en]
          );
        return S.default.createElement(
          tT.Provider,
          { value: z },
          S.default.createElement(
            rk.Provider,
            { value: eF },
            S.default.createElement(
              rS.Provider,
              { value: eB },
              S.default.createElement(rA.Provider, { value: eP }, E)
            ),
            S.default.createElement(rT, {
              disabled: (null == C ? void 0 : C.restoreFocus) === !1,
            })
          ),
          S.default.createElement(tP, { ...C, hiddenTextDescribedById: Z })
        );
      }),
      rP = (0, S.createContext)(null),
      rI = "button",
      rR = { timeout: 25 },
      rO = { position: "fixed", touchAction: "none" },
      rz = (e) => (tj(e) ? "transform 250ms ease" : void 0);
    function rB(e, t, r) {
      let n = e.slice();
      return n.splice(r < 0 ? n.length + r : r, 0, n.splice(t, 1)[0]), n;
    }
    function rF(e) {
      return null !== e && e >= 0;
    }
    (t = { styles: { active: { opacity: "0" } } }),
      (e) => {
        let { active: r, dragOverlay: n } = e,
          s = {},
          { styles: l, className: a } = t;
        if (null != l && l.active)
          for (let [e, t] of Object.entries(l.active))
            void 0 !== t &&
              ((s[e] = r.node.style.getPropertyValue(e)),
              r.node.style.setProperty(e, t));
        if (null != l && l.dragOverlay)
          for (let [e, t] of Object.entries(l.dragOverlay))
            void 0 !== t && n.node.style.setProperty(e, t);
        return (
          null != a && a.active && r.node.classList.add(a.active),
          null != a && a.dragOverlay && n.node.classList.add(a.dragOverlay),
          function () {
            for (let [e, t] of Object.entries(s))
              r.node.style.setProperty(e, t);
            null != a && a.active && r.node.classList.remove(a.active);
          }
        );
      };
    let rL = (e) => {
        let { rects: t, activeIndex: r, overIndex: n, index: s } = e,
          l = rB(t, n, r),
          a = t[s],
          i = l[s];
        return i && a
          ? {
              x: i.left - a.left,
              y: i.top - a.top,
              scaleX: i.width / a.width,
              scaleY: i.height / a.height,
            }
          : null;
      },
      r_ = { scaleX: 1, scaleY: 1 },
      rK = (e) => {
        var t, r, n, s;
        let l,
          a,
          i,
          {
            activeIndex: o,
            activeNodeRect: d,
            index: c,
            rects: u,
            overIndex: h,
          } = e,
          p = null != (t = u[o]) ? t : d;
        if (!p) return null;
        if (c === o) {
          let e = u[h];
          return e
            ? {
                x: 0,
                y:
                  o < h ? e.top + e.height - (p.top + p.height) : e.top - p.top,
                ...r_,
              }
            : null;
        }
        let m =
          ((r = u),
          (n = c),
          (s = o),
          (l = r[n]),
          (a = r[n - 1]),
          (i = r[n + 1]),
          l
            ? s < n
              ? a
                ? l.top - (a.top + a.height)
                : i
                ? i.top - (l.top + l.height)
                : 0
              : i
              ? i.top - (l.top + l.height)
              : a
              ? l.top - (a.top + a.height)
              : 0
            : 0);
        return c > o && c <= h
          ? { x: 0, y: -p.height - m, ...r_ }
          : c < o && c >= h
          ? { x: 0, y: p.height + m, ...r_ }
          : { x: 0, y: 0, ...r_ };
      },
      rU = "Sortable",
      rH = S.default.createContext({
        activeIndex: -1,
        containerId: rU,
        disableTransforms: !1,
        items: [],
        overIndex: -1,
        useDragOverlay: !1,
        sortedRects: [],
        strategy: rL,
        disabled: { draggable: !1, droppable: !1 },
      });
    function rW(e) {
      let {
          children: t,
          id: r,
          items: n,
          strategy: s = rL,
          disabled: l = !1,
        } = e,
        {
          active: a,
          dragOverlay: i,
          droppableRects: o,
          over: d,
          measureDroppableContainers: c,
        } = (0, S.useContext)(rS),
        u = tb(rU, r),
        h = null !== i.rect,
        p = (0, S.useMemo)(
          () => n.map((e) => ("object" == typeof e && "id" in e ? e.id : e)),
          [n]
        ),
        m = null != a,
        x = a ? p.indexOf(a.id) : -1,
        f = d ? p.indexOf(d.id) : -1,
        g = (0, S.useRef)(p),
        b = !(function (e, t) {
          if (e === t) return !0;
          if (e.length !== t.length) return !1;
          for (let r = 0; r < e.length; r++) if (e[r] !== t[r]) return !1;
          return !0;
        })(p, g.current),
        v = (-1 !== f && -1 === x) || b,
        w = "boolean" == typeof l ? { draggable: l, droppable: l } : l;
      tu(() => {
        b && m && c(p);
      }, [b, p, m, c]),
        (0, S.useEffect)(() => {
          g.current = p;
        }, [p]);
      let y = (0, S.useMemo)(
        () => ({
          activeIndex: x,
          containerId: u,
          disabled: w,
          disableTransforms: v,
          items: p,
          overIndex: f,
          useDragOverlay: h,
          sortedRects: p.reduce((e, t, r) => {
            let n = o.get(t);
            return n && (e[r] = n), e;
          }, Array(p.length)),
          strategy: s,
        }),
        [x, u, w.draggable, w.droppable, v, p, f, o, h, s]
      );
      return S.default.createElement(rH.Provider, { value: y }, t);
    }
    let rG = (e) => {
        let { id: t, items: r, activeIndex: n, overIndex: s } = e;
        return rB(r, n, s).indexOf(t);
      },
      rV = (e) => {
        let {
          containerId: t,
          isSorting: r,
          wasDragging: n,
          index: s,
          items: l,
          newIndex: a,
          previousItems: i,
          previousContainerId: o,
          transition: d,
        } = e;
        return (
          !!d && !!n && (i === l || s !== a) && (!!r || (a !== s && t === o))
        );
      },
      rY = { duration: 200, easing: "ease" },
      rX = "transform",
      rq = tC.Transition.toString({
        property: rX,
        duration: 0,
        easing: "linear",
      }),
      r$ = { roleDescription: "sortable" };
    function rJ(e) {
      if (!e) return !1;
      let t = e.data.current;
      return (
        !!t &&
        "sortable" in t &&
        "object" == typeof t.sortable &&
        "containerId" in t.sortable &&
        "items" in t.sortable &&
        "index" in t.sortable
      );
    }
    let rQ = [m.Down, m.Right, m.Up, m.Left],
      rZ = (e, t) => {
        let {
          context: {
            active: r,
            collisionRect: n,
            droppableRects: s,
            droppableContainers: l,
            over: a,
            scrollableAncestors: i,
          },
        } = t;
        if (rQ.includes(e.code)) {
          if ((e.preventDefault(), !r || !n)) return;
          let t = [];
          l.getEnabled().forEach((r) => {
            if (!r || (null != r && r.disabled)) return;
            let l = s.get(r.id);
            if (l)
              switch (e.code) {
                case m.Down:
                  n.top < l.top && t.push(r);
                  break;
                case m.Up:
                  n.top > l.top && t.push(r);
                  break;
                case m.Left:
                  n.left > l.left && t.push(r);
                  break;
                case m.Right:
                  n.left < l.left && t.push(r);
              }
          });
          let c = ((e) => {
              let {
                  collisionRect: t,
                  droppableRects: r,
                  droppableContainers: n,
                } = e,
                s = tL(t),
                l = [];
              for (let e of n) {
                let { id: t } = e,
                  n = r.get(t);
                if (n) {
                  let r = tL(n),
                    a = Number(
                      (s.reduce((e, t, n) => e + tz(r[n], t), 0) / 4).toFixed(4)
                    );
                  l.push({ id: t, data: { droppableContainer: e, value: a } });
                }
              }
              return l.sort(tB);
            })({
              active: r,
              collisionRect: n,
              droppableRects: s,
              droppableContainers: t,
              pointerCoordinates: null,
            }),
            u = t_(c, "id");
          if (
            (u === (null == a ? void 0 : a.id) && c.length > 1 && (u = c[1].id),
            null != u)
          ) {
            let e = l.get(r.id),
              t = l.get(u),
              a = t ? s.get(t.id) : null,
              c = null == t ? void 0 : t.node.current;
            if (c && a && e && t) {
              var o, d;
              let r = tq(c).some((e, t) => i[t] !== e),
                s = r0(e, t),
                l =
                  ((o = e),
                  (d = t),
                  !!rJ(o) &&
                    !!rJ(d) &&
                    !!r0(o, d) &&
                    o.data.current.sortable.index <
                      d.data.current.sortable.index),
                u =
                  r || !s
                    ? { x: 0, y: 0 }
                    : {
                        x: l ? n.width - a.width : 0,
                        y: l ? n.height - a.height : 0,
                      },
                h = { x: a.left, y: a.top };
              return u.x && u.y ? h : ty(h, u);
            }
          }
        }
      };
    function r0(e, t) {
      return (
        !!rJ(e) &&
        !!rJ(t) &&
        e.data.current.sortable.containerId ===
          t.data.current.sortable.containerId
      );
    }
    var r1 = e.i(346944),
      r2 = e.i(561026);
    let r3 = ({ presetValue: e, onEdit: t, onDelete: r, disableDelete: n }) => {
        let s,
          { authenticated: l } = (0, em.usePrivy)(),
          {
            attributes: a,
            listeners: i,
            setNodeRef: o,
            transform: d,
            transition: c,
            isDragging: h,
          } = (function (e) {
            var t, r, n, s;
            let {
                animateLayoutChanges: l = rV,
                attributes: a,
                disabled: i,
                data: o,
                getNewIndex: d = rG,
                id: c,
                strategy: h,
                resizeObserverConfig: p,
                transition: m = rY,
              } = e,
              {
                items: x,
                containerId: f,
                activeIndex: g,
                disabled: b,
                disableTransforms: v,
                sortedRects: w,
                overIndex: y,
                useDragOverlay: j,
                strategy: N,
              } = (0, S.useContext)(rH),
              C =
                ((t = i),
                (r = b),
                "boolean" == typeof t
                  ? { draggable: t, droppable: !1 }
                  : {
                      draggable:
                        null != (n = null == t ? void 0 : t.draggable)
                          ? n
                          : r.draggable,
                      droppable:
                        null != (s = null == t ? void 0 : t.droppable)
                          ? s
                          : r.droppable,
                    }),
              k = x.indexOf(c),
              E = (0, S.useMemo)(
                () => ({
                  sortable: { containerId: f, index: k, items: x },
                  ...o,
                }),
                [f, o, k, x]
              ),
              D = (0, S.useMemo)(() => x.slice(x.indexOf(c)), [x, c]),
              {
                rect: T,
                node: A,
                isOver: M,
                setNodeRef: P,
              } = (function (e) {
                let {
                    data: t,
                    disabled: r = !1,
                    id: n,
                    resizeObserverConfig: s,
                  } = e,
                  l = tb("Droppable"),
                  {
                    active: a,
                    dispatch: i,
                    over: o,
                    measureDroppableContainers: d,
                  } = (0, S.useContext)(rk),
                  c = (0, S.useRef)({ disabled: r }),
                  h = (0, S.useRef)(!1),
                  p = (0, S.useRef)(null),
                  m = (0, S.useRef)(null),
                  {
                    disabled: x,
                    updateMeasurementsFor: f,
                    timeout: g,
                  } = { ...rR, ...s },
                  b = tp(null != f ? f : n),
                  v = rh({
                    callback: (0, S.useCallback)(() => {
                      if (!h.current) {
                        h.current = !0;
                        return;
                      }
                      null != m.current && clearTimeout(m.current),
                        (m.current = setTimeout(() => {
                          d(Array.isArray(b.current) ? b.current : [b.current]),
                            (m.current = null);
                        }, g));
                    }, [g]),
                    disabled: x || !a,
                  }),
                  [w, y] = tx(
                    (0, S.useCallback)(
                      (e, t) => {
                        v &&
                          (t && (v.unobserve(t), (h.current = !1)),
                          e && v.observe(e));
                      },
                      [v]
                    )
                  ),
                  j = tp(t);
                return (
                  (0, S.useEffect)(() => {
                    v &&
                      w.current &&
                      (v.disconnect(), (h.current = !1), v.observe(w.current));
                  }, [w, v]),
                  (0, S.useEffect)(
                    () => (
                      i({
                        type: u.RegisterDroppable,
                        element: {
                          id: n,
                          key: l,
                          disabled: r,
                          node: w,
                          rect: p,
                          data: j,
                        },
                      }),
                      () => i({ type: u.UnregisterDroppable, key: l, id: n })
                    ),
                    [n]
                  ),
                  (0, S.useEffect)(() => {
                    r !== c.current.disabled &&
                      (i({
                        type: u.SetDroppableDisabled,
                        id: n,
                        key: l,
                        disabled: r,
                      }),
                      (c.current.disabled = r));
                  }, [n, l, r, i]),
                  {
                    active: a,
                    rect: p,
                    isOver: (null == o ? void 0 : o.id) === n,
                    node: w,
                    over: o,
                    setNodeRef: y,
                  }
                );
              })({
                id: c,
                data: E,
                disabled: C.droppable,
                resizeObserverConfig: { updateMeasurementsFor: D, ...p },
              }),
              {
                active: I,
                activatorEvent: R,
                activeNodeRect: O,
                attributes: z,
                setNodeRef: B,
                listeners: F,
                isDragging: L,
                over: _,
                setActivatorNodeRef: K,
                transform: U,
              } = (function (e) {
                let { id: t, data: r, disabled: n = !1, attributes: s } = e,
                  l = tb("Draggable"),
                  {
                    activators: a,
                    activatorEvent: i,
                    active: o,
                    activeNodeRect: d,
                    ariaDescribedById: c,
                    draggableNodes: u,
                    over: h,
                  } = (0, S.useContext)(rk),
                  {
                    role: p = rI,
                    roleDescription: m = "draggable",
                    tabIndex: x = 0,
                  } = null != s ? s : {},
                  f = (null == o ? void 0 : o.id) === t,
                  g = (0, S.useContext)(f ? rA : rP),
                  [b, v] = tx(),
                  [w, y] = tx(),
                  j = (0, S.useMemo)(
                    () =>
                      a.reduce((e, r) => {
                        let { eventName: n, handler: s } = r;
                        return (
                          (e[n] = (e) => {
                            s(e, t);
                          }),
                          e
                        );
                      }, {}),
                    [a, t]
                  ),
                  N = tp(r);
                return (
                  tu(
                    () => (
                      u.set(t, {
                        id: t,
                        key: l,
                        node: b,
                        activatorNode: w,
                        data: N,
                      }),
                      () => {
                        let e = u.get(t);
                        e && e.key === l && u.delete(t);
                      }
                    ),
                    [u, t]
                  ),
                  {
                    active: o,
                    activatorEvent: i,
                    activeNodeRect: d,
                    attributes: (0, S.useMemo)(
                      () => ({
                        role: p,
                        tabIndex: x,
                        "aria-disabled": n,
                        "aria-pressed": (!!f && p === rI) || void 0,
                        "aria-roledescription": m,
                        "aria-describedby": c.draggable,
                      }),
                      [n, p, x, f, m, c.draggable]
                    ),
                    isDragging: f,
                    listeners: n ? void 0 : j,
                    node: b,
                    over: h,
                    setNodeRef: v,
                    setActivatorNodeRef: y,
                    transform: g,
                  }
                );
              })({
                id: c,
                data: E,
                attributes: { ...r$, ...a },
                disabled: C.draggable,
              }),
              H = (function () {
                for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
                  t[r] = arguments[r];
                return (0, S.useMemo)(
                  () => (e) => {
                    t.forEach((t) => t(e));
                  },
                  t
                );
              })(P, B),
              W = !!I,
              G = W && !v && rF(g) && rF(y),
              V = !j && L,
              Y = V && G ? U : null,
              X = G
                ? null != Y
                  ? Y
                  : (null != h ? h : N)({
                      rects: w,
                      activeNodeRect: O,
                      activeIndex: g,
                      overIndex: y,
                      index: k,
                    })
                : null,
              q =
                rF(g) && rF(y)
                  ? d({ id: c, items: x, activeIndex: g, overIndex: y })
                  : k,
              $ = null == I ? void 0 : I.id,
              J = (0, S.useRef)({
                activeId: $,
                items: x,
                newIndex: q,
                containerId: f,
              }),
              Q = x !== J.current.items,
              Z = l({
                active: I,
                containerId: f,
                isDragging: L,
                isSorting: W,
                id: c,
                index: k,
                items: x,
                newIndex: J.current.newIndex,
                previousItems: J.current.items,
                previousContainerId: J.current.containerId,
                transition: m,
                wasDragging: null != J.current.activeId,
              }),
              ee = (function (e) {
                let { disabled: t, index: r, node: n, rect: s } = e,
                  [l, a] = (0, S.useState)(null),
                  i = (0, S.useRef)(r);
                return (
                  tu(() => {
                    if (!t && r !== i.current && n.current) {
                      let e = s.current;
                      if (e) {
                        let t = tY(n.current, { ignoreTransform: !0 }),
                          r = {
                            x: e.left - t.left,
                            y: e.top - t.top,
                            scaleX: e.width / t.width,
                            scaleY: e.height / t.height,
                          };
                        (r.x || r.y) && a(r);
                      }
                    }
                    r !== i.current && (i.current = r);
                  }, [t, r, n, s]),
                  (0, S.useEffect)(() => {
                    l && a(null);
                  }, [l]),
                  l
                );
              })({ disabled: !Z, index: k, node: A, rect: T });
            return (
              (0, S.useEffect)(() => {
                W && J.current.newIndex !== q && (J.current.newIndex = q),
                  f !== J.current.containerId && (J.current.containerId = f),
                  x !== J.current.items && (J.current.items = x);
              }, [W, q, f, x]),
              (0, S.useEffect)(() => {
                if ($ === J.current.activeId) return;
                if (null != $ && null == J.current.activeId) {
                  J.current.activeId = $;
                  return;
                }
                let e = setTimeout(() => {
                  J.current.activeId = $;
                }, 50);
                return () => clearTimeout(e);
              }, [$]),
              {
                active: I,
                activeIndex: g,
                attributes: z,
                data: E,
                rect: T,
                index: k,
                newIndex: q,
                items: x,
                isOver: M,
                isSorting: W,
                isDragging: L,
                listeners: F,
                node: A,
                overIndex: y,
                over: _,
                setNodeRef: H,
                setActivatorNodeRef: K,
                setDroppableNodeRef: P,
                setDraggableNodeRef: B,
                transform: null != ee ? ee : X,
                transition:
                  ee || (Q && J.current.newIndex === k)
                    ? rq
                    : (!V || tj(R)) && m && (W || Z)
                    ? tC.Transition.toString({ ...m, property: rX })
                    : void 0,
              }
            );
          })({ id: e }),
          { presets: p } = (0, r2.usePresetStore)(
            (0, r1.useShallow)((e) => ({ presets: e.presets }))
          ),
          m = {
            transform: tC.Transform.toString(d ? { ...d, x: 0 } : null),
            transition: c,
            opacity: h ? 0.5 : 1,
          };
        return (0, y.jsx)("div", {
          ref: o,
          style: m,
          ...a,
          children: (0, y.jsxs)("div", {
            className:
              "flex items-center justify-between bg-[#262626BF] p-1 px-1.5 rounded h-8",
            children: [
              (0, y.jsxs)("div", {
                className: "w-[90%] flex items-center justify-between gap-2",
                ...i,
                children: [
                  (0, y.jsxs)("div", {
                    className: "flex items-center gap-2",
                    children: [
                      (0, y.jsx)(te.IconMenu2, {
                        size: 16,
                        className: "text-neutral-500 cursor-move",
                      }),
                      (0, y.jsx)("p", {
                        className: "text-sm text-white font-medium",
                        children: e,
                      }),
                    ],
                  }),
                  (0, y.jsx)("div", {
                    className: "flex gap-1 items-center",
                    children: (0, y.jsxs)("p", {
                      className: "text-xs text-neutral-400 font-medium",
                      children: [
                        "$ ",
                        ((s = Number(e)),
                        l
                          ? (0, K.formatBigNumber)(Number(s) * p?.leverage)
                          : ""),
                      ],
                    }),
                  }),
                ],
              }),
              (0, y.jsxs)("div", {
                className: "w-[10%] flex items-center justify-end gap-1.5",
                children: [
                  (0, y.jsx)("div", {
                    className:
                      "p-0.5 cursor-pointer text-neutral-500 hover:text-white transition-all duration-200",
                    onClick: () => t?.(e),
                    children: (0, y.jsx)(e7.IconEdit, { size: 16 }),
                  }),
                  (0, y.jsx)("div", {
                    className: `p-0.5 transition-all duration-200 ${
                      n
                        ? "cursor-not-allowed text-neutral-700 opacity-40"
                        : "cursor-pointer text-neutral-500 hover:text-white"
                    }`,
                    onClick: () => !n && r?.(e),
                    children: (0, y.jsx)(tt.IconX, { size: 16 }),
                  }),
                ],
              }),
            ],
          }),
        });
      },
      r5 = ({
        presetValues: e,
        onReorder: t,
        onEdit: r,
        onDelete: n,
        disableDelete: s,
      }) => {
        let l = (function () {
          for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
            t[r] = arguments[r];
          return (0, S.useMemo)(() => [...t].filter((e) => null != e), [...t]);
        })(
          tR(ro, { activationConstraint: { distance: 8 } }),
          tR(rn, { coordinateGetter: rZ })
        );
        return (0, y.jsx)(rM, {
          sensors: l,
          collisionDetection: tU,
          onDragEnd: (r) => {
            let { active: n, over: s } = r;
            if (s && n.id !== s.id) {
              let r = e.indexOf(n.id),
                l = e.indexOf(s.id);
              t(rB(e, r, l));
            }
          },
          children: (0, y.jsx)(rW, {
            items: e,
            strategy: rK,
            children: (0, y.jsx)("div", {
              className: "flex flex-col gap-2",
              children: e?.map((e) =>
                (0, y.jsx)(
                  r3,
                  { presetValue: e, onEdit: r, onDelete: n, disableDelete: s },
                  e
                )
              ),
            }),
          }),
        });
      };
    var r4 = e.i(336005),
      r6 = e.i(127615);
    let r8 = (0, M.default)(
      "outline",
      "info-square-rounded",
      "InfoSquareRounded",
      [
        ["path", { d: "M12 9h.01", key: "svg-0" }],
        ["path", { d: "M11 12h1v4h1", key: "svg-1" }],
        [
          "path",
          {
            d: "M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z",
            key: "svg-2",
          },
        ],
      ]
    );
    var r9 = e.i(848719),
      r7 = e.i(22909);
    let ne = ({ onUnsavedChanges: e, onSave: t }) => {
        let [r, n] = (0, S.useState)(null),
          [s, l] = (0, S.useState)(0),
          [a, i] = (0, S.useState)("cross"),
          [o, d] = (0, S.useState)(0),
          [c, u] = (0, S.useState)(0),
          [h, p] = (0, S.useState)(40),
          [m, x] = (0, S.useState)([]),
          [f, g] = (0, S.useState)([]),
          [b, v] = (0, S.useState)(!1),
          [w, j] = (0, S.useState)(!1),
          [N, C] = (0, S.useState)(""),
          [k, E] = (0, S.useState)(null),
          D = (0, S.useRef)(null),
          [T, A] = (0, S.useState)(!1),
          {
            metaAssets: M,
            assetCtxs: P,
            perpsMetaAssetsByDex: I,
          } = (0, U.useHyperliquidStore)(
            (0, r1.useShallow)((e) => ({
              metaAssets: e.metaAssets,
              spotMetaAssets: e.spotMetaAssets,
              spotMetaTokens: e.spotMetaTokens,
              spotAssetCtxs: e.spotAssetCtxs,
              assetCtxs: e.assetCtxs,
              perpsMetaAssetsByDex: e.perpsMetaAssetsByDex,
            }))
          ),
          { presets: R, setPresets: z } = (0, r2.usePresetStore)(
            (0, r1.useShallow)((e) => ({
              presets: e.presets,
              setPresets: e.setPresets,
            }))
          );
        (0, S.useEffect)(() => {
          n(R?.defaultAsset || "BTC"),
            l(R?.slippage || 0),
            i(R?.marginMode || "cross"),
            d(R?.stoplossPercent || 0),
            u(R?.takeProfitPercent || 0),
            p(R?.leverage || 40),
            x(R?.tradeAmount?.map((e) => String(e)) || ["100"]),
            g(R?.newsTrackerAssets || ["BTC"]),
            v(R?.enableTakeProfit || !1),
            j(R?.enableStoploss || !1);
        }, [R]),
          (0, S.useEffect)(() => {
            null !== k && D.current?.focus();
          }, [k]),
          (0, S.useEffect)(() => {
            let t =
              r !== (R?.defaultAsset || "BTC") ||
              s !== (R?.slippage || 0) ||
              a !== (R?.marginMode || "cross") ||
              o !== (R?.stoplossPercent || 0) ||
              c !== (R?.takeProfitPercent || 0) ||
              h !== (R?.leverage || 40) ||
              JSON.stringify(m) !==
                JSON.stringify(
                  R?.tradeAmount?.map((e) => String(e)) || ["100"]
                );
            f !== (R?.newsTrackerAssets || ["BTC"]) ||
              b !== (R?.enableTakeProfit || !1) ||
              R?.enableStoploss,
              e?.(t);
          }, [r, s, a, o, c, h, m, R, f, b, w, e]);
        let B = (0, S.useMemo)(() => {
            if (!P?.length || !M?.length) return [];
            let e = new Set();
            for (let t = 0; t < M.length; t++) {
              let r = M[t]?.name;
              r && P[t] && e.add(r);
            }
            if (I)
              for (let t of Object.values(I)) {
                let r = t?.metaAssets,
                  n = t?.assetCtxs;
                if (r?.length && n?.length)
                  for (let t = 0; t < r.length; t++) {
                    let s = r[t]?.name;
                    s && n[t] && e.add(s);
                  }
              }
            return Array.from(e).map((e) => {
              let t = e?.includes(":")
                ? `${e?.split(":")?.[0]} - [${e?.split(":")?.[1]}]`
                : e;
              return { value: e, label: t };
            });
          }, [P, M, I]),
          F = async () => {
            A(!0);
            let e = Date.now().toString(),
              n = { showTpsl: !1, showContent: !1 };
            (0, r6.hlTradeNotifications)({
              notificationId: e,
              title: "Updating presets...",
              showProgress: !1,
              loading: !0,
              autoClose: !1,
              ...n,
            });
            try {
              let e = {
                  ...R,
                  defaultAsset: r,
                  slippage: s,
                  marginMode: a,
                  takeProfitPercent: o,
                  stoplossPercent: c,
                  leverage: h,
                  tradeAmount: m?.map((e) => Number(e)),
                  newsTrackerAssets: f,
                  enableTakeProfit: b,
                  enableStoploss: w,
                },
                { success: l, message: i } = await (0, r4.updatePresets)({
                  presets: [e],
                });
              if (l) {
                let { data: e, success: r } = await (0, r4.getPresets)();
                r && z(e?.[0]),
                  (0, r6.hlTradeNotifications)({
                    title: i || "Presets updated successfully",
                    showProgress: !0,
                    isError: !1,
                    ...n,
                  }),
                  t?.();
              } else
                (0, r6.hlTradeNotifications)({
                  title: i || "Failed to update presets",
                  isError: !0,
                  showProgress: !1,
                  ...n,
                });
            } catch (e) {
              console.error("Error updating presets:", e),
                (0, r6.hlTradeNotifications)({
                  title: "An error occurred while updating presets",
                  isError: !0,
                  showProgress: !1,
                  ...n,
                });
            } finally {
              e9.notifications.hide(e), A(!1);
            }
          };
        return (0, y.jsxs)(y.Fragment, {
          children: [
            (0, y.jsxs)("div", {
              className:
                "flex flex-col gap-5 p-4 pb-14 shadow-[inset_0_-20px_30px_-20px_rgba(255,255,255,0.1)] h-[540px] overflow-scroll",
              children: [
                (0, y.jsxs)("div", {
                  children: [
                    (0, y.jsx)("div", {
                      className: "text-sm text-neutral-200 mb-3 font-semibold",
                      children: "Trade Size ($)",
                    }),
                    (0, y.jsxs)("div", {
                      className: "flex gap-1.5 items-center",
                      children: [
                        (0, y.jsx)("div", {
                          className: "w-[90%]",
                          children: (0, y.jsx)(eb.NumberInput, {
                            ref: D,
                            variant: "unstyled",
                            hideControls: !0,
                            classNames: {
                              input:
                                "border-1 border-ash hover:border-slate-600 h-9 bg-black/40 hover:bg-black rounded-md pl-2 focus:border-blue-500",
                            },
                            min: 0,
                            clampBehavior: "strict",
                            size: "xs",
                            placeholder: "0.00",
                            value: N || "",
                            onChange: (e) => {
                              C(String(e));
                            },
                            rightSectionWidth: 40,
                            rightSection: (0, y.jsx)("div", {
                              className: "text-slate-900 text-sm text-right",
                              children: "USD",
                            }),
                          }),
                        }),
                        (0, y.jsx)(O.Button, {
                          className:
                            "w-[15%] h-9 rounded-md border-1 border-neutral-400 !bg-[#26262680] outline-none text-xs font-medium text-white",
                          onClick: () => {
                            if (N && "0" !== N) {
                              if (k)
                                x((e) => e.map((e) => (e === k ? N : e))),
                                  E(null);
                              else {
                                if (m.length >= 3)
                                  return void (0, r6.hlTradeNotifications)({
                                    title: "Maximum of 3 trade sizes allowed",
                                    isError: !0,
                                    showProgress: !1,
                                    showTpsl: !1,
                                    showContent: !1,
                                  });
                                m?.includes(N) || x((e) => [...e, N]);
                              }
                              C("");
                            }
                          },
                          children: k ? "Update" : "Add",
                        }),
                      ],
                    }),
                    (0, y.jsx)("div", {
                      className: "mt-4 select-none",
                      children: (0, y.jsx)(r5, {
                        presetValues: m,
                        onReorder: x,
                        disableDelete: m.length <= 1,
                        onEdit: (e) => {
                          C(e), E(e);
                        },
                        onDelete: (e) => {
                          m.length <= 1
                            ? (0, r6.hlTradeNotifications)({
                                title: "At least one trade size is required",
                                isError: !0,
                                showProgress: !1,
                                showTpsl: !1,
                                showContent: !1,
                              })
                            : x((t) => t.filter((t) => t !== e));
                        },
                      }),
                    }),
                  ],
                }),
                (0, y.jsxs)("div", {
                  children: [
                    (0, y.jsx)("div", {
                      className: "text-sm text-neutral-200 font-semibold mb-3",
                      children: "Slippage (%)",
                    }),
                    (0, y.jsx)(eb.NumberInput, {
                      variant: "unstyled",
                      hideControls: !0,
                      classNames: {
                        input:
                          "bg-transparent !text-white text-sm text-left p-0 font-medium bg-black/40 border-1 border-ash hover:border-slate-600 rounded-md h-9 px-2 focus:border-blue-500",
                        section: "pr-5",
                      },
                      placeholder: "Enter slippage in %",
                      min: 0,
                      max: 100,
                      clampBehavior: "strict",
                      size: "xs",
                      value: s || "",
                      onChange: (e) => l(Number(e)),
                      rightSection: (0, y.jsx)("span", {
                        className: "text-white text-sm",
                        children: "%",
                      }),
                    }),
                  ],
                }),
                (0, y.jsxs)("div", {
                  children: [
                    (0, y.jsxs)("div", {
                      className: "flex items-center gap-1 mb-1.5",
                      children: [
                        (0, y.jsx)("div", {
                          className: "text-sm text-neutral-200 font-semibold ",
                          children: "Margin Mode",
                        }),
                        (0, y.jsx)(e6.Tooltip, {
                          color: "#1A1B1E",
                          multiline: !0,
                          w: 400,
                          styles: {
                            tooltip: {
                              backgroundColor: "#1A1B1E",
                              border: "1px solid #2C2E33",
                              padding: "12px",
                              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
                            },
                          },
                          label: (0, y.jsxs)("div", {
                            className: "text-xs flex flex-col gap-2",
                            children: [
                              (0, y.jsxs)("div", {
                                className: "flex flex-col gap-1",
                                children: [
                                  (0, y.jsx)("span", {
                                    className: "font-semibold text-white",
                                    children: "Cross",
                                  }),
                                  (0, y.jsx)("span", {
                                    className: "text-gray-400 leading-relaxed",
                                    children:
                                      "Shares margin across all positions. If one gets liquidated, others may also be affected.",
                                  }),
                                ],
                              }),
                              (0, y.jsxs)("div", {
                                className: "flex flex-col gap-1",
                                children: [
                                  (0, y.jsx)("span", {
                                    className: "font-semibold text-white",
                                    children: "Isolated",
                                  }),
                                  (0, y.jsx)("span", {
                                    className: "text-gray-400 leading-relaxed",
                                    children:
                                      "Margin is limited to each position. Only that position is at risk if liquidated.",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          children: (0, y.jsx)(r8, {
                            color: "#81858C",
                            size: 16,
                          }),
                        }),
                      ],
                    }),
                    (0, y.jsx)("div", {
                      className: "text-xs text-neutral-400 mb-2",
                      children: "Choose between cross and isolated positions",
                    }),
                    (0, y.jsxs)("div", {
                      className:
                        "flex items-center py-2 px-2.5 bg-neutral-950 w-fit rounded-md border-1 border-neutral-800",
                      children: [
                        (0, y.jsx)(r7.default, {
                          value: "cross",
                          label: "Cross",
                          checked: "cross" === a,
                          onChange: () => i("cross"),
                          color: "#2B7FFF",
                          inactiveColor: "#737373",
                        }),
                        (0, y.jsx)(e8.Divider, {
                          className: "border-neutral-700 mx-3.5",
                          orientation: "vertical",
                        }),
                        (0, y.jsx)(r7.default, {
                          value: "isolated",
                          label: "Isolated",
                          checked: "isolated" === a,
                          onChange: () => i("isolated"),
                          color: "#2B7FFF",
                          inactiveColor: "#737373",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, y.jsxs)("div", {
                  className: "mb-4",
                  children: [
                    (0, y.jsxs)("div", {
                      className: "flex items-center justify-between mb-5",
                      children: [
                        (0, y.jsxs)("div", {
                          className: "text-xs text-white font-medium",
                          children: [
                            "Leverage",
                            " ",
                            (0, y.jsxs)("span", {
                              className: "text-blue-500 ml-1",
                              children: [h, "x"],
                            }),
                          ],
                        }),
                        (0, y.jsx)(O.Button, {
                          className:
                            "h-6 px-2 rounded border-1 border-blue-500 !bg-transparent !outline-none text-xs font-medium !text-blue-500",
                          onClick: () => p(40),
                          children: "Max",
                        }),
                      ],
                    }),
                    (0, y.jsx)(ev.Slider, {
                      min: 1,
                      max: 40,
                      size: "md",
                      value: h,
                      onChange: (e) => p(e),
                      label: (e) => `${e.toFixed(0)}x`,
                      marks: [
                        { value: 1, label: "1x" },
                        { value: 10, label: "10x" },
                        { value: 20, label: "20x" },
                        { value: 30, label: "30x" },
                        { value: 40, label: "40x" },
                      ],
                      classNames: {
                        mark: "hidden",
                        markLabel: "text-[12px] text-slate-900 pt-2",
                        label: "bg-[#101216]",
                        bar: "bg-[#2B7FFF]",
                        thumb: "bg-[#ffffff]",
                      },
                      className: "mt-5",
                      labelTransitionProps: {
                        transition: "skew-down",
                        duration: 150,
                        timingFunction: "linear",
                      },
                    }),
                  ],
                }),
                (0, y.jsxs)("div", {
                  children: [
                    (0, y.jsx)("div", {
                      className:
                        "text-sm text-neutral-200 font-semibold mb-1.5",
                      children: "News Trading Tickers",
                    }),
                    (0, y.jsxs)("div", {
                      className: "text-xs text-neutral-400 mb-2",
                      children: [
                        "If no tickers match the news, those will be used.",
                        (0, y.jsx)("br", {}),
                        "For readability reasons, only 3 tickers can be picked.",
                      ],
                    }),
                    (0, y.jsx)(e5, {
                      placeholder: f?.length >= 3 ? "" : "Select Ticker",
                      data: B,
                      value: f,
                      onChange: (e) => {
                        0 === e.length
                          ? (0, r6.hlTradeNotifications)({
                              title: "At least one ticker is required",
                              isError: !0,
                              showProgress: !1,
                              showTpsl: !1,
                              showContent: !1,
                            })
                          : e.length <= 3
                          ? g(e)
                          : (0, r6.hlTradeNotifications)({
                              title: "Maximum of 3 tickers allowed",
                              isError: !0,
                              showProgress: !1,
                              showTpsl: !1,
                              showContent: !1,
                            });
                      },
                      leftSection:
                        f?.length === 0
                          ? (0, y.jsx)(r9.IconSearch, {
                              color: "#81858C",
                              size: 16,
                            })
                          : null,
                      searchable: !0,
                      maxValues: 3,
                      classNames: {
                        input:
                          "border-1 border-ash hover:border-slate-600 bg-black/40 hover:bg-black rounded-md text-white h-9 items-center flex",
                        dropdown: "bg-neutral-900 border-1 border-neutral-800",
                        option: "text-white hover:bg-neutral-800",
                        pill: "bg-neutral-800 border-none text-white text-xs font-medium rounded-[2px]",
                        pillsList: "gap-1.5",
                      },
                      size: "xs",
                    }),
                  ],
                }),
                (0, y.jsxs)("div", {
                  children: [
                    (0, y.jsx)("div", {
                      className:
                        "text-sm text-neutral-200 font-semibold mb-1.5",
                      children: "APE (One token only)",
                    }),
                    (0, y.jsxs)("div", {
                      className: "text-xs text-neutral-400 mb-2",
                      children: [
                        "Choose the Coin/Asset which you want to long from your whole account.",
                        (0, y.jsx)("br", {}),
                        (0, y.jsx)("span", {
                          className: "text-neutral-300 font-medium italic",
                          children:
                            "Note: This will LONG the Chosen asset with your entire portfolio account.",
                        }),
                      ],
                    }),
                    (0, y.jsx)(ew.Select, {
                      placeholder: "Select Ticker",
                      data: B,
                      value: r,
                      onChange: (e) => n(e),
                      searchable: !0,
                      classNames: {
                        input:
                          "border-1 border-ash hover:border-slate-600 bg-black/40 hover:bg-black rounded-md text-white h-9 items-center flex",
                        dropdown: "bg-neutral-900 border-1 border-neutral-800",
                        option: "text-white hover:bg-neutral-800",
                      },
                      size: "xs",
                      leftSection: r
                        ? null
                        : (0, y.jsx)(r9.IconSearch, {
                            color: "#81858C",
                            size: 16,
                          }),
                    }),
                  ],
                }),
                (0, y.jsxs)("div", {
                  children: [
                    (0, y.jsx)("div", {
                      className:
                        "text-sm text-neutral-200 font-semibold mb-1.5",
                      children: "Auto TP",
                    }),
                    (0, y.jsxs)("div", {
                      className: "text-xs text-neutral-400 mb-2",
                      children: [
                        "Automatically set take profit when trading from news feed. ",
                        (0, y.jsx)("br", {}),
                        "This only works with entries on limit & market orders.",
                      ],
                    }),
                    (0, y.jsxs)("div", {
                      className: "flex items-center gap-2 mb-2",
                      children: [
                        (0, y.jsx)("div", {
                          className: "text-xs text-neutral-200 font-normal",
                          children: "Enter Distance in % from entry price",
                        }),
                        (0, y.jsx)(eb.NumberInput, {
                          variant: "unstyled",
                          hideControls: !0,
                          classNames: {
                            input:
                              "w-16  text-white text-sm text-right p-0 bg-black/40 border-1 border-ash hover:border-slate-600 rounded-md h-9 pl-2 pr-6 font-medium",
                          },
                          placeholder: "0",
                          min: 0,
                          max: 100,
                          clampBehavior: "strict",
                          size: "xs",
                          value: o || "",
                          onChange: (e) => d(Number(e)),
                          rightSection: (0, y.jsx)("span", {
                            className: "text-neutral-500 text-sm pr-2",
                            children: "%",
                          }),
                        }),
                      ],
                    }),
                    (0, y.jsx)(e4.Checkbox, {
                      size: "xs",
                      color: "#2563EB",
                      label: (0, y.jsx)("p", {
                        className: "text-neutral-200 text-xs",
                        children: "Enable auto TP when trading from news",
                      }),
                      checked: b,
                      onChange: () => v(!b),
                    }),
                  ],
                }),
                (0, y.jsxs)("div", {
                  children: [
                    (0, y.jsx)("div", {
                      className:
                        "text-sm text-neutral-200 font-semibold mb-1.5",
                      children: "Auto SL",
                    }),
                    (0, y.jsxs)("div", {
                      className: "text-xs text-neutral-400 mb-2",
                      children: [
                        "Automatically set stop loss when trading from news feed. ",
                        (0, y.jsx)("br", {}),
                        "This only works with entries on limit & market orders.",
                      ],
                    }),
                    (0, y.jsxs)("div", {
                      className: "flex items-center gap-2 mb-2",
                      children: [
                        (0, y.jsx)("div", {
                          className: "text-xs text-neutral-200 font-normal",
                          children: "Enter distance in % from entry price",
                        }),
                        (0, y.jsx)(eb.NumberInput, {
                          variant: "unstyled",
                          hideControls: !0,
                          classNames: {
                            input:
                              "w-16  text-white text-sm font-medium text-right p-0 bg-black/40 border-1 border-ash hover:border-slate-600 rounded-md h-9 pl-2 pr-6",
                          },
                          placeholder: "0",
                          min: 0,
                          max: 100,
                          clampBehavior: "strict",
                          size: "xs",
                          value: c || "",
                          onChange: (e) => u(Number(e)),
                          rightSection: (0, y.jsx)("span", {
                            className: "text-neutral-500 text-sm pr-2",
                            children: "%",
                          }),
                        }),
                      ],
                    }),
                    (0, y.jsx)(e4.Checkbox, {
                      size: "xs",
                      color: "#2563EB",
                      label: (0, y.jsx)("p", {
                        className: "text-neutral-200 text-xs",
                        children: "Enable auto SL when trading from news",
                      }),
                      checked: w,
                      onChange: () => j(!w),
                    }),
                  ],
                }),
              ],
            }),
            (0, y.jsx)("div", {
              className:
                "flex justify-end items-center sticky bottom-0 py-4 px-3.5 bg-neutral-950",
              children: (0, y.jsx)(O.Button, {
                onClick: F,
                disabled: T,
                loading: T,
                className:
                  "!bg-white border-1 border-transparent !text-black disabled:opacity-50",
                children: "Save",
              }),
            }),
          ],
        });
      },
      nt = (0, M.default)("outline", "link", "Link", [
        ["path", { d: "M9 15l6 -6", key: "svg-0" }],
        [
          "path",
          {
            d: "M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464",
            key: "svg-1",
          },
        ],
        [
          "path",
          {
            d: "M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463",
            key: "svg-2",
          },
        ],
      ]);
    var nr = e.i(25293),
      nn = e.i(898215);
    let ns = () => {
        let { profileData: e, setProfileData: t } = (0, k.useProfileStore)(
            (0, r1.useShallow)((e) => ({
              profileData: e.profileData,
              setProfileData: e.setProfileData,
            }))
          ),
          { authenticated: r, ready: n } = (0, em.usePrivy)(),
          s = (0, C.useRouter)(),
          { login: l } = (0, nn.useLogin)({
            onError: (e) => {
              console.log("Login error or modal closed:", e), s.push("/");
            },
          }),
          [a, i] = (0, S.useState)(""),
          [o, d] = (0, S.useState)(""),
          [c, u] = (0, S.useState)(!1),
          [h, p] = (0, S.useState)(!1);
        (0, S.useEffect)(() => {
          i(e?.synopticApiKey);
        }, [e?.synopticApiKey]),
          (0, S.useEffect)(() => {
            d(e?.treeofalphaApiKey);
          }, [e?.treeofalphaApiKey]);
        let m = async () => {
            try {
              let { data: e, success: r } = await (0, r4.getProfileInfo)();
              r && t(e);
            } catch (e) {
              console.error("error in getProfileInfo", e);
            }
          },
          x = async () => {
            if (n && !r) return void l({ loginMethods: ["email"] });
            if (!e?.synopticApiKey && !a) return;
            u(!0);
            let t = Date.now().toString(),
              s = { showTpsl: !1, showContent: !1 };
            (0, r6.hlTradeNotifications)({
              notificationId: t,
              title: "Updating Synoptic API Key...",
              showProgress: !1,
              loading: !0,
              autoClose: !1,
              ...s,
            });
            try {
              let e = await (0, r4.addSynopticApiKey)({ synopticApiKey: a });
              e?.success &&
                (m(),
                (0, r6.hlTradeNotifications)({
                  title: "Synoptic API Key updated successfully",
                  showProgress: !0,
                  isError: !1,
                  ...s,
                }));
            } catch (e) {
              (0, r6.hlTradeNotifications)({
                title: "Failed to update Synoptic API Key",
                isError: !0,
                showProgress: !1,
                ...s,
              }),
                console.error("Error in setting synoptic api key", e);
            } finally {
              e9.notifications.hide(t), u(!1);
            }
          },
          f = async () => {
            if (n && !r) return void l({ loginMethods: ["email"] });
            if (!e?.treeofalphaApiKey && !o) return;
            p(!0);
            let t = Date.now().toString(),
              s = { showTpsl: !1, showContent: !1 };
            (0, r6.hlTradeNotifications)({
              notificationId: t,
              title: "Updating Tree Of Alpha API Key...",
              showProgress: !1,
              loading: !0,
              autoClose: !1,
              ...s,
            });
            try {
              let e = await (0, r4.addTreeOfAlphaApiKey)({
                treeofalphaApiKey: o,
              });
              e?.success &&
                (m(),
                (0, r6.hlTradeNotifications)({
                  title: "Tree Of Alpha API Key updated successfully",
                  showProgress: !0,
                  isError: !1,
                  ...s,
                }));
            } catch (e) {
              (0, r6.hlTradeNotifications)({
                title: "Failed to update Tree Of Alpha API Key",
                isError: !0,
                showProgress: !1,
                ...s,
              }),
                console.error("Error in setting Tree Of Alpha api key", e);
            } finally {
              e9.notifications.hide(t), p(!1);
            }
          };
        return (0, y.jsxs)("div", {
          className: "flex flex-col gap-6 p-4",
          children: [
            (0, y.jsxs)("div", {
              children: [
                (0, y.jsxs)("div", {
                  className: "flex items-center gap-2 mb-3",
                  children: [
                    (0, y.jsx)("div", {
                      className: "text-sm text-neutral-200 font-semibold ",
                      children: "Synoptic API Key",
                    }),
                    (0, y.jsx)(e6.Tooltip, {
                      w: 260,
                      multiline: !0,
                      position: "top",
                      withArrow: !0,
                      classNames: {
                        tooltip:
                          "!bg-[#20222A] !text-white !border !border-[#333742] !px-3.5 !py-2.5 !rounded-md !shadow-lg",
                        arrow: "!border-[#20222A]",
                      },
                      label: (0, y.jsxs)("div", {
                        className:
                          "text-[13px] leading-5 tracking-normal text-white/90",
                        children: [
                          (0, y.jsx)("span", {
                            className: "font-bold",
                            children: "Optional:",
                          }),
                          " Add your Synoptic API key to personalize how news is fetched",
                        ],
                      }),
                      children: (0, y.jsx)("div", {
                        className: "p-1 cursor-pointer",
                        children: (0, y.jsx)(r8, { size: 20 }),
                      }),
                    }),
                  ],
                }),
                (0, y.jsxs)("div", {
                  className: "flex gap-1.5 items-center",
                  children: [
                    (0, y.jsx)("div", {
                      className: "w-[80%]",
                      children: (0, y.jsx)(nr.TextInput, {
                        placeholder: "Enter API Key",
                        leftSection: (0, y.jsx)(nt, {
                          size: 18,
                          className: "text-neutral-600",
                        }),
                        classNames: {
                          input:
                            "border-1 border-ash hover:border-slate-600 h-9 bg-black/40 hover:bg-black rounded-md pl-10 focus:border-blue-500 text-white placeholder:text-neutral-600 pr-4",
                        },
                        variant: "unstyled",
                        value: a,
                        onChange: (e) => i(e.target.value),
                        size: "sm",
                      }),
                    }),
                    (0, y.jsxs)(O.Button, {
                      className:
                        "w-[20%] h-9 rounded-md border-1 border-neutral-400 !bg-[#26262680] outline-none text-sm font-medium text-white hover:bg-[#303030]",
                      onClick: x,
                      loading: c,
                      children: [
                        e?.synopticApiKey && e?.synopticApiKey != ""
                          ? "Update"
                          : "Add",
                        " ",
                        "key",
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, y.jsxs)("div", {
              children: [
                (0, y.jsxs)("div", {
                  className: "flex items-center gap-2 mb-3",
                  children: [
                    (0, y.jsx)("div", {
                      className: "text-sm text-neutral-200 font-semibold ",
                      children: "Tree Of Alpha API Key",
                    }),
                    (0, y.jsx)(e6.Tooltip, {
                      w: 260,
                      multiline: !0,
                      position: "top",
                      withArrow: !0,
                      classNames: {
                        tooltip:
                          "!bg-[#20222A] !text-white !border !border-[#333742] !px-3.5 !py-2.5 !rounded-md !shadow-lg",
                        arrow: "!border-[#20222A]",
                      },
                      label: (0, y.jsxs)("div", {
                        className:
                          "text-[13px] leading-5 tracking-normal text-white/90",
                        children: [
                          (0, y.jsx)("span", {
                            className: "font-bold",
                            children: "Optional:",
                          }),
                          " Add your Tree Of Alpha API key to personalize how news is fetched",
                        ],
                      }),
                      children: (0, y.jsx)("div", {
                        className: "p-1 cursor-pointer",
                        children: (0, y.jsx)(r8, { size: 20 }),
                      }),
                    }),
                  ],
                }),
                (0, y.jsxs)("div", {
                  className: "flex gap-1.5 items-center",
                  children: [
                    (0, y.jsx)("div", {
                      className: "w-[80%]",
                      children: (0, y.jsx)(nr.TextInput, {
                        placeholder: "Enter API Key",
                        leftSection: (0, y.jsx)(nt, {
                          size: 18,
                          className: "text-neutral-600",
                        }),
                        classNames: {
                          input:
                            "border-1 border-ash hover:border-slate-600 h-9 bg-black/40 hover:bg-black rounded-md pl-10 focus:border-blue-500 text-white placeholder:text-neutral-600 pr-4",
                        },
                        value: o,
                        onChange: (e) => d(e.target.value),
                        variant: "unstyled",
                        size: "sm",
                      }),
                    }),
                    (0, y.jsxs)(O.Button, {
                      className:
                        "w-[20%] h-9 rounded-md border-1 border-neutral-400 !bg-[#26262680] outline-none text-sm font-medium text-white hover:bg-[#303030]",
                      onClick: f,
                      loading: h,
                      children: [
                        e?.treeofalphaApiKey && e?.treeofalphaApiKey != ""
                          ? "Update"
                          : "Add",
                        " ",
                        "key",
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, y.jsxs)("div", {
              className:
                "bg-amber-500/10 border border-amber-500/20 p-3 rounded-md flex gap-3 items-start",
              children: [
                (0, y.jsx)(r8, {
                  size: 20,
                  className: "text-amber-500 mt-0.5 shrink-0",
                }),
                (0, y.jsxs)("div", {
                  className: "flex flex-col gap-1",
                  children: [
                    (0, y.jsx)("div", {
                      className: "text-[13px] font-bold text-amber-500",
                      children: "Important Note",
                    }),
                    (0, y.jsx)("p", {
                      className: "text-xs text-neutral-300/90 leading-relaxed",
                      children:
                        "Please ensure you provide the correct API keys. Providing incorrect keys will affect your news feeds and may result in missing or outdated information.",
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      },
      nl = (0, M.default)("outline", "volume", "Volume", [
        ["path", { d: "M15 8a5 5 0 0 1 0 8", key: "svg-0" }],
        ["path", { d: "M17.7 5a9 9 0 0 1 0 14", key: "svg-1" }],
        [
          "path",
          {
            d: "M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a.8 .8 0 0 1 1.5 .5v14a.8 .8 0 0 1 -1.5 .5l-3.5 -4.5",
            key: "svg-2",
          },
        ],
      ]),
      na = (0, M.default)("outline", "volume-3", "Volume3", [
        [
          "path",
          {
            d: "M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a.8 .8 0 0 1 1.5 .5v14a.8 .8 0 0 1 -1.5 .5l-3.5 -4.5",
            key: "svg-0",
          },
        ],
        ["path", { d: "M16 10l4 4m0 -4l-4 4", key: "svg-1" }],
      ]);
    var ni = e.i(364384);
    let no = () => {
      let { newsTrackerSettings: e, setNewsTrackerSettings: t } = (0,
        k.useProfileStore)(
          (0, r1.useShallow)((e) => ({
            newsTrackerSettings: e.newsTrackerSettings,
            setNewsTrackerSettings: e.setNewsTrackerSettings,
          }))
        ),
        r = (r) => {
          try {
            let n = { ...e, ...r };
            localStorage.setItem("newsTrackerSettings", JSON.stringify(n)),
              t(n);
          } catch (e) {
            console.error("Error saving news tracker settings:", e);
          }
        },
        n = () => {
          r({ enableSound: !e.enableSound });
        };
      return (0, y.jsxs)("div", {
        className: "flex flex-col gap-4 p-4 ",
        children: [
          (0, y.jsxs)("div", {
            className: "flex flex-col gap-4",
            children: [
              (0, y.jsxs)("div", {
                className: "flex items-center gap-2",
                children: [
                  (0, y.jsx)("h2", {
                    className: "text-sm font-medium",
                    children: "Notifications",
                  }),
                  (0, y.jsx)("div", { onClick: n }),
                ],
              }),
              (0, y.jsxs)("div", {
                className: "flex gap-4 items-center",
                children: [
                  (0, y.jsxs)("div", {
                    className: "flex items-center gap-2 w-1/2 justify-between",
                    children: [
                      (0, y.jsx)("p", {
                        className: "text-slate-900 text-sm",
                        children: "Notification Popup",
                      }),
                      (0, y.jsx)(ni.Switch, {
                        color: "#458846",
                        onChange: () => {
                          r({ enableNotifications: !e.enableNotifications });
                        },
                        checked: e.enableNotifications,
                        size: "md",
                      }),
                    ],
                  }),
                  (0, y.jsx)(e8.Divider, {
                    orientation: "vertical",
                    className: "border-zinc-800",
                  }),
                  (0, y.jsxs)("div", {
                    className: "flex items-center gap-2 w-1/2 justify-between",
                    children: [
                      (0, y.jsxs)("div", {
                        className: "flex items-center gap-1",
                        children: [
                          (0, y.jsx)("p", {
                            className: "text-slate-900 text-sm",
                            children: "News Sound",
                          }),
                          (0, y.jsx)("div", {
                            onClick: n,
                            className: "cursor-pointer",
                            children: e.enableSound
                              ? (0, y.jsx)(nl, { size: 16 })
                              : (0, y.jsx)(na, {
                                  size: 16,
                                  className: "text-slate-900",
                                }),
                          }),
                        ],
                      }),
                      (0, y.jsx)(ni.Switch, {
                        color: "#458846",
                        onChange: n,
                        checked: e.enableSound,
                        size: "md",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          (0, y.jsx)(e8.Divider, { className: "border-zinc-900" }),
          (0, y.jsxs)("div", {
            className: "flex flex-col gap-4",
            children: [
              (0, y.jsxs)("div", {
                className: "flex items-center gap-2",
                children: [
                  (0, y.jsx)("h2", {
                    className: "text-sm font-medium",
                    children: "Feeds",
                  }),
                  (0, y.jsx)("div", { onClick: n }),
                ],
              }),
              (0, y.jsxs)("div", {
                className: "flex gap-4 items-center",
                children: [
                  (0, y.jsxs)("div", {
                    className: "flex items-center gap-2 w-1/2 justify-between",
                    children: [
                      (0, y.jsx)("p", {
                        className: "text-slate-900 text-sm",
                        children: "Blogs",
                      }),
                      (0, y.jsx)(ni.Switch, {
                        color: "#458846",
                        onChange: () => {
                          r({ enableBlogs: !e.enableBlogs });
                        },
                        checked: e.enableBlogs,
                        size: "md",
                      }),
                    ],
                  }),
                  (0, y.jsx)(e8.Divider, {
                    orientation: "vertical",
                    className: "border-zinc-800",
                  }),
                  (0, y.jsxs)("div", {
                    className: "flex items-center gap-2 w-1/2 justify-between",
                    children: [
                      (0, y.jsx)("p", {
                        className: "text-slate-900 text-sm",
                        children: "Twitter",
                      }),
                      (0, y.jsx)(ni.Switch, {
                        color: "#458846",
                        onChange: () => {
                          r({ enableTwitter: !e.enableTwitter });
                        },
                        checked: e.enableTwitter,
                        size: "md",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      });
    };
    var nd = e.i(191740),
      nc = e.i(22084),
      nu = e.i(139330),
      nh = e.i(170134);
    let np = () => {
        let [e, t] = (0, S.useState)(nd.EXCHANGES_DATA?.[0]);
        return (0, y.jsxs)("div", {
          children: [
            (0, y.jsx)(nu.SegmentedControl, {
              withItemsBorders: !1,
              classNames: {
                root: "bg-transparent w-fit gap-2.5",
                label: "w-[100px]",
                indicator: `rounded-none border-b outline-none ${e?.gradient}`,
              },
              styles: { indicator: { borderBottomColor: e?.color } },
              fullWidth: !1,
              value: e?.value,
              onChange: (e) => {
                t(nd.EXCHANGES_DATA.find((t) => t.value === e));
              },
              data: nd.EXCHANGES_DATA?.map((e) => ({
                value: e.value,
                label: (0, y.jsx)("div", {
                  className: (0, N.default)(
                    "w-20 h-12 flex items-center justify-center"
                  ),
                  children: (0, y.jsx)(j.default, {
                    src: e.logoTitle,
                    alt: e.label,
                    width: 70,
                  }),
                }),
              })),
            }),
            e?.value === "hyperliquid"
              ? (0, y.jsxs)("div", {
                  className:
                    "flex items-center gap-3 bg-neutral-950 border border-neutral-800 rounded-md p-4 my-4",
                  children: [
                    (0, y.jsx)("div", {
                      className:
                        "flex items-center justify-center w-10 h-10 rounded-full bg-green-500/10",
                      children: (0, y.jsx)(nh.IconCircleCheckFilled, {
                        className: "w-6 h-6 text-green-500",
                      }),
                    }),
                    (0, y.jsxs)("div", {
                      className: "flex flex-col",
                      children: [
                        (0, y.jsx)("span", {
                          className: "text-sm font-medium text-white",
                          children: "Connected",
                        }),
                        (0, y.jsx)("span", {
                          className: "text-xs text-neutral-500",
                          children: "Your Hyperliquid account is linked",
                        }),
                      ],
                    }),
                  ],
                })
              : null,
            e?.value !== "hyperliquid"
              ? (0, y.jsxs)(y.Fragment, {
                  children: [
                    (0, y.jsxs)("div", {
                      className: "flex flex-col gap-1.5 my-2.5",
                      children: [
                        (0, y.jsxs)("div", {
                          className:
                            "flex items-center justify-between bg-neutral-950 border border-neutral-800  rounded-md h-9 px-2",
                          children: [
                            (0, y.jsx)("div", {
                              className: "text-sm text-neutral-500 w-1/2",
                              children: "Account Name",
                            }),
                            (0, y.jsx)("div", {
                              className: "flex items-center gap-1 w-1/2",
                              children: (0, y.jsx)(nc.Input, {
                                variant: "unstyled",
                                classNames: {
                                  input:
                                    "bg-transparent text-white text-sm text-right p-0",
                                },
                                w: "100%",
                                placeholder: "Enter Name",
                                size: "xs",
                              }),
                            }),
                          ],
                        }),
                        (0, y.jsxs)("div", {
                          className:
                            "flex items-center justify-between bg-neutral-950 border border-neutral-800   rounded-md h-9 px-2",
                          children: [
                            (0, y.jsx)("div", {
                              className: "text-sm text-neutral-500 w-1/2",
                              children: "API Key",
                            }),
                            (0, y.jsx)("div", {
                              className: "flex items-center gap-1 w-1/2",
                              children: (0, y.jsx)(nc.Input, {
                                variant: "unstyled",
                                classNames: {
                                  input:
                                    "bg-transparent text-white text-sm text-right p-0",
                                },
                                w: "100%",
                                placeholder: "Enter key",
                                size: "xs",
                              }),
                            }),
                          ],
                        }),
                        (0, y.jsxs)("div", {
                          className:
                            "flex items-center justify-between bg-neutral-950 border border-neutral-800   rounded-md h-9 px-2",
                          children: [
                            (0, y.jsx)("div", {
                              className: "text-sm text-neutral-500 w-1/2",
                              children: "Secret",
                            }),
                            (0, y.jsx)("div", {
                              className: "flex items-center gap-1 w-1/2",
                              children: (0, y.jsx)(nc.Input, {
                                variant: "unstyled",
                                classNames: {
                                  input:
                                    "bg-transparent text-white text-sm text-right p-0",
                                },
                                w: "100%",
                                placeholder: "Enter key",
                                size: "xs",
                              }),
                            }),
                          ],
                        }),
                        (0, y.jsxs)("div", {
                          className:
                            "flex items-center justify-between bg-neutral-950 border border-neutral-800  rounded-md h-9 px-2",
                          children: [
                            (0, y.jsx)("div", {
                              className: "text-sm text-neutral-500 w-1/2",
                              children: "Passpharase",
                            }),
                            (0, y.jsx)("div", {
                              className: "flex items-center gap-1 w-1/2",
                              children: (0, y.jsx)(nc.Input, {
                                variant: "unstyled",
                                classNames: {
                                  input:
                                    "bg-transparent text-white text-sm text-right p-0",
                                },
                                w: "100%",
                                placeholder: "Enter key",
                                size: "xs",
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, y.jsx)("div", {
                      className: "flex justify-end pt-2.5",
                      children: (0, y.jsx)(O.Button, {
                        disabled: !0,
                        className:
                          "!bg-white border-1 border-transparent !text-black disabled:opacity-50 disabled:cursor-not-allowed",
                        children: "Connect",
                      }),
                    }),
                  ],
                })
              : null,
          ],
        });
      },
      nm = ({ onUnsavedChanges: e, onSave: t }) => {
        let [r, n] = (0, S.useState)([]),
          [s, l] = (0, S.useState)(!1),
          [a, i] = (0, S.useState)([]);
        return (
          (0, S.useEffect)(() => {
            let e = [
              {
                id: "binance_1",
                name: "Binance_3",
                exchange: "binance",
                exchangeLogo: nd.EXCHANGES_DATA[1].logo,
                apiKey: "qrstuvwxyzabcdefghijklmnopqrstuvwxyzAbcd",
                secret: "secret1",
                passphrase: "",
              },
              {
                id: "binance_2",
                name: "Binance_3",
                exchange: "binance",
                exchangeLogo: nd.EXCHANGES_DATA[1].logo,
                apiKey: "qrstuvwxyzabcdefghijklmnopqrstuvwxyzAbcd",
                secret: "secret2",
                passphrase: "",
              },
              {
                id: "binance_3",
                name: "Binance_3",
                exchange: "binance",
                exchangeLogo: nd.EXCHANGES_DATA[1].logo,
                apiKey: "qrstuvwxyzabcdefghijklmnopqrstuvwxyzAbcd",
                secret: "secret3",
                passphrase: "",
              },
            ];
            n(e), i(e);
          }, []),
          (0, S.useEffect)(() => {
            let t = JSON.stringify(r) !== JSON.stringify(a);
            e?.(t);
          }, [r, a, e]),
          (0, y.jsx)("div", {
            className: "flex flex-col gap-4",
            children: (0, y.jsx)("div", {
              className: "flex flex-col items-center justify-center py-12 px-4",
              children: (0, y.jsxs)("div", {
                className: "flex flex-col items-center gap-3 text-center",
                children: [
                  (0, y.jsx)("div", {
                    className:
                      "w-16 h-16 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center",
                    children: (0, y.jsx)("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      className: "w-8 h-8 text-neutral-600",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      stroke: "currentColor",
                      children: (0, y.jsx)("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
                      }),
                    }),
                  }),
                  (0, y.jsxs)("div", {
                    children: [
                      (0, y.jsx)("p", {
                        className: "text-sm font-medium text-neutral-300",
                        children: "No accounts found",
                      }),
                      (0, y.jsx)("p", {
                        className: "text-xs text-neutral-500 mt-1",
                        children: "Add your exchange accounts to get started",
                      }),
                    ],
                  }),
                ],
              }),
            }),
          })
        );
      },
      nx = () => {
        let [e, t] = (0, S.useState)("api-keys");
        return (0, y.jsxs)("div", {
          className: "flex flex-col gap-4 p-4",
          children: [
            (0, y.jsx)(eg.GTRSegmentedControl, {
              variant: "compact",
              value: e,
              data: [
                { label: "Set API Keys", value: "api-keys" },
                { label: "Accounts", value: "accounts" },
              ],
              onChange: t,
              classNames: {
                root: "w-fit !rounded-md",
                indicator: "!rounded-md",
              },
            }),
            (0, y.jsxs)("div", {
              children: [
                "api-keys" === e && (0, y.jsx)(np, {}),
                "accounts" === e && (0, y.jsx)(nm, {}),
              ],
            }),
          ],
        });
      },
      nf = ({ isOpen: e, closeModal: t, defaultTab: r = "presets" }) => {
        let [n, s] = (0, S.useState)(r),
          [l, a] = (0, S.useState)(!1),
          [i, o] = (0, S.useState)(!1),
          d = () => {
            a(!1);
          };
        return (0, y.jsxs)(y.Fragment, {
          children: [
            (0, y.jsx)(ef.default, {
              opened: e,
              onClose: () => {
                "presets" === n && i ? a(!0) : (t(), o(!1));
              },
              size: "xl",
              classNames: {
                body: "max-h-[600px] !bg-neutral-950",
                header: "border-b border-neutral-800 !bg-neutral-950",
              },
              title: (0, y.jsxs)("div", {
                className: "flex items-center gap-3",
                children: [
                  (0, y.jsx)(ex.IconSettings, {
                    size: 18,
                    className: "text-neutral-200",
                  }),
                  "Configuration",
                ],
              }),
              content: (0, y.jsxs)("div", {
                className: "flex  h-full",
                children: [
                  (0, y.jsx)("div", {
                    className: "w-1/5",
                    children: (0, y.jsx)("div", {
                      className: "sticky top-[56px] p-2 flex flex-col",
                      children: (0, y.jsx)(eg.GTRSegmentedControl, {
                        variant: "stacked",
                        value: n,
                        data: [
                          { label: "Presets", value: "presets" },
                          { label: "Notification", value: "notification" },
                          { label: "Exchanges", value: "exchanges" },
                          { label: "Integrations", value: "integrations" },
                        ],
                        onChange: s,
                        orientation: "vertical",
                      }),
                    }),
                  }),
                  (0, y.jsxs)("div", {
                    className:
                      "relative w-4/5 border-l-1 border-neutral-800 overflow-y-scroll h-full min-h-[500px] bg-[#17171780]",
                    children: [
                      "presets" === n
                        ? (0, y.jsx)(ne, {
                            onUnsavedChanges: o,
                            onSave: () => o(!1),
                          })
                        : null,
                      "notification" === n ? (0, y.jsx)(no, {}) : null,
                      "exchanges" === n ? (0, y.jsx)(nx, {}) : null,
                      "integrations" === n ? (0, y.jsx)(ns, {}) : null,
                    ],
                  }),
                ],
              }),
            }),
            (0, y.jsx)(ef.default, {
              opened: l,
              onClose: d,
              size: "sm",
              title: (0, y.jsxs)("div", {
                className: "flex items-center gap-3",
                children: [
                  (0, y.jsx)(ex.IconSettings, {
                    size: 18,
                    className: "text-neutral-200",
                  }),
                  "Unsaved Changes",
                ],
              }),
              content: (0, y.jsxs)("div", {
                className: "p-6",
                children: [
                  (0, y.jsx)("p", {
                    className: "text-neutral-300 mb-6",
                    children:
                      "You have unsaved changes in your presets. Please save your settings before closing to avoid losing your changes.",
                  }),
                  (0, y.jsxs)("div", {
                    className: "flex justify-end gap-3",
                    children: [
                      (0, y.jsx)(O.Button, {
                        onClick: d,
                        variant: "outline",
                        className:
                          "!border-neutral-600 !text-white hover:!bg-neutral-800",
                        children: "Go Back",
                      }),
                      (0, y.jsx)(O.Button, {
                        onClick: () => {
                          a(!1), o(!1), t();
                        },
                        className: "!bg-red-600 hover:!bg-red-700 !text-white",
                        children: "Close Without Saving",
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        });
      },
      ng = ({ showTitle: e = !0, defaultTab: t = "presets" }) => {
        let [r, { open: n, close: s }] = (0, X.useDisclosure)(),
          { authenticated: l } = (0, em.usePrivy)();
        return l
          ? (0, y.jsxs)(y.Fragment, {
              children: [
                (0, y.jsxs)("div", {
                  className:
                    "cursor-pointer p-1  bg-zinc-950 text-white/60 hover:text-white transition-all duration-200 border-1 border-neutral-800 rounded-md flex gap-1 items-center text-xs",
                  onClick: n,
                  children: [
                    (0, y.jsx)(ex.IconSettings, { size: 20 }),
                    e
                      ? (0, y.jsx)("p", {
                          className: "pr-1",
                          children: "Configure",
                        })
                      : null,
                  ],
                }),
                r &&
                  (0, y.jsx)(nf, { isOpen: r, closeModal: s, defaultTab: t }),
              ],
            })
          : null;
      };
    e.s(["default", 0, ng], 449465);
    let nb = (0, z.default)(() => e.A(357852), {
        loadableGenerated: { modules: [790239] },
        ssr: !1,
      }),
      nv = ({ symbol: e, icon: t, color: r, assetCtxs: n, metaAssets: s }) => {
        let l = s?.findIndex((t) => t.name === e),
          a = n?.[l]?.markPx;
        return s && 0 !== s.length
          ? (0, y.jsx)(V.default, {
              href: `/trade/crypto-perps/${e}`,
              children: (0, y.jsxs)("div", {
                className: "flex gap-1 items-center",
                children: [
                  (0, y.jsx)(j.default, {
                    src: t,
                    alt: e,
                    width: 12,
                    className: "max-w-[12px] max-h-[12px]",
                  }),
                  (0, y.jsx)("div", {
                    className: "text-xs font-medium",
                    style: { color: r },
                    children: a ? (0, K.convertIntl)(a) : "$ --",
                  }),
                ],
              }),
            })
          : null;
      };
    e.s(
      [
        "default",
        0,
        ({
          logo: e = !1,
          isFixed: t,
          onToggleVideo: r = null,
          isVideoOpen: n = !0,
        }) => {
          let s = (0, C.useRouter)(),
            l = (0, C.usePathname)().includes("/crypto-perps"),
            a = (0, C.usePathname)().includes("/terminal"),
            i = (0, C.usePathname)().includes("/feeds"),
            {
              setTrackersOrder: o,
              trackersOrder: d,
              showTickers: c,
              setShowTickers: u,
            } = (0, k.useProfileStore)((e) => e),
            { assetCtxs: h, metaAssets: p } = (0, U.useHyperliquidStore)(
              (0, r1.useShallow)((e) => ({
                assetCtxs: e.assetCtxs,
                metaAssets: e.metaAssets,
              }))
            ),
            [m, x] = (0, S.useState)(!1),
            f =
              "true" === localStorage.getItem(K.ANNOUNCEMENT_FINISHED_KEY) &&
              localStorage.getItem(K.ANNOUNCEMENT_STORAGE_KEY) ===
                K.ANNOUNCEMENT_VERSION;
          return (0, y.jsxs)(y.Fragment, {
            children: [
              !(0, K.checkIsMobile)(1024) && t
                ? (0, y.jsxs)(y.Fragment, {
                    children: [
                      (0, y.jsx)("div", { className: "h-[4px]" }),
                      (0, y.jsx)(el, { forceShow: m, onClose: () => x(!1) }),
                    ],
                  })
                : (0, y.jsx)(y.Fragment, {}),
              (0, y.jsxs)("div", {
                className: (0, N.default)(
                  "hidden text-xs lg:flex flex-col lg:flex-row items-center gap-4 justify-between pt-1.5 pb-3 lg:py-1.5 px-4 lg:px-4 bg-container-background z-10 border-t-1 border-ash",
                  { "fixed bottom-0 left-0 right-0": t }
                ),
                children: [
                  (0, y.jsxs)("div", {
                    className:
                      "flex justify-between lg:justify-start gap-2 font-medium items-center w-full lg:w-auto pt-2 lg:pt-0",
                    children: [
                      e
                        ? (0, y.jsxs)(y.Fragment, {
                            children: [
                              (0, y.jsx)("img", {
                                src: T.default.src,
                                alt: "->",
                                onClick: () => s.push("/"),
                                className: "cursor-pointer",
                              }),
                              (0, y.jsxs)("div", {
                                className: "flex gap-2",
                                children: [
                                  (0, y.jsx)("a", {
                                    href: "/terms",
                                    className: "pl-4",
                                    children: "Terms",
                                  }),
                                  (0, y.jsx)("a", {
                                    href: "/privacy",
                                    children: "Privacy",
                                  }),
                                ],
                              }),
                            ],
                          })
                        : null,
                      (l || a) && (0, y.jsx)(ng, {}),
                      l &&
                        (0, y.jsx)(y.Fragment, {
                          children: (0, y.jsx)("div", {
                            className: "cursor-pointer",
                            onClick: () => {
                              d.includes("perpsTracker")
                                ? o(d.filter((e) => "perpsTracker" !== e))
                                : o(["perpsTracker", ...d]);
                            },
                            children: (0, y.jsx)(E, {
                              icon: D,
                              text: "Wallet Tracker",
                              className: (0, N.default)(
                                "!bg-[#181A20] hover:!bg-ash !border-slate-600 hover:!border-slate-200",
                                { "!bg-ash": d.includes("perpsTracker") }
                              ),
                            }),
                          }),
                        }),
                      l &&
                        (0, y.jsx)(y.Fragment, {
                          children: (0, y.jsx)("div", {
                            className: "cursor-pointer",
                            onClick: () => {
                              d.includes("newsTracker")
                                ? o(d.filter((e) => "newsTracker" !== e))
                                : o(["newsTracker", ...d]);
                            },
                            children: (0, y.jsxs)("div", {
                              className: (0, N.default)(
                                "flex gap-1 items-center bg-slate-900/10 border-1 px-1.5 py-0.5 rounded-sm !bg-[#181A20] hover:!bg-ash !border-slate-600 hover:!border-slate-200 cursor-pointer",
                                { "!bg-ash": d.includes("newsTracker") }
                              ),
                              children: [
                                (0, y.jsx)(nb, {
                                  loop: !0,
                                  animationData: B.default,
                                  play: !0,
                                  style: {
                                    width: 12,
                                    height: 12,
                                    borderRadius: "50%",
                                    border: "1px solid #0277FF",
                                  },
                                }),
                                (0, y.jsx)("p", {
                                  className: "text-xs  text-white font-medium",
                                  children: "News Tracker",
                                }),
                              ],
                            }),
                          }),
                        }),
                      (l || a || i) &&
                        (0, y.jsx)("div", {
                          className:
                            "border-l border-l-slate-500 px-4 ml-2 flex gap-4",
                          children: [
                            { symbol: "BTC", icon: F, color: "#F7931A" },
                            { symbol: "ETH", icon: L, color: "#5C64FF" },
                            { symbol: "HYPE", icon: _, color: "#98FCE4" },
                          ].map((e) =>
                            (0, y.jsx)(
                              nv,
                              {
                                symbol: e.symbol,
                                icon: e.icon,
                                color: e.color,
                                assetCtxs: h,
                                metaAssets: p,
                              },
                              e.symbol
                            )
                          ),
                        }),
                    ],
                  }),
                  (0, y.jsxs)("div", {
                    className:
                      "flex items-center gap-2 justify-between lg:justify-end w-full lg:w-auto",
                    children: [
                      (0, y.jsx)(ep, {}),
                      (l || a) &&
                        (0, y.jsxs)("div", {
                          className:
                            "flex items-center gap-2 border-r border-r-[#1B1E26] pr-4 mr-1",
                          children: [
                            (0, y.jsx)(G, {}),
                            (0, y.jsxs)(O.Button, {
                              unstyled: !0,
                              className:
                                "w-[22px] h-[22px] bg-[#AD3AFF]/20 rounded-sm flex items-center justify-center hover:bg-[#AD3AFF]/30 relative",
                              onClick: () => x(!0),
                              children: [
                                !f &&
                                  (0, y.jsx)("div", {
                                    className:
                                      "absolute bg-lemon rounded-full w-[5px] h-[5px] -top-0.5 -right-0.5",
                                  }),
                                (0, y.jsx)(I, {
                                  color: "#AD3AFF",
                                  className: "w-3.5 h-3.5",
                                }),
                              ],
                            }),
                          ],
                        }),
                      (0, y.jsx)("div", {
                        className: "flex items-center gap-4 pr-6",
                        children: (0, y.jsx)("div", {
                          children: (0, y.jsx)("a", {
                            href: "https://x.com/gtrtraderbh",
                            target: "_blank",
                            children: (0, y.jsx)(A.IconBrandX, {
                              className:
                                "w-3.5 h-3.5 text-[#858DA3] hover:text-white",
                            }),
                          }),
                        }),
                      }),
                      (0, y.jsxs)("div", {
                        className: "flex items-center gap-2",
                        children: [
                          r &&
                            (0, y.jsx)("div", {
                              className: "cursor-pointer",
                              onClick: r,
                              children: (0, y.jsxs)("div", {
                                className: (0, N.default)(
                                  "flex items-center gap-1.5 px-2 rounded-sm h-[22px] transition-all duration-300",
                                  {
                                    "bg-[#1B1E26] text-[#858DA3] hover:text-white":
                                      n,
                                    "bg-[#C3FE14] text-black animate-glow-pulse":
                                      !n,
                                  }
                                ),
                                children: [
                                  (0, y.jsx)(R, { className: "w-3.5 h-3.5" }),
                                  (0, y.jsx)("p", {
                                    className: "text-xs font-medium",
                                    children: "Video",
                                  }),
                                ],
                              }),
                            }),
                          (0, y.jsx)("div", {
                            children: (0, y.jsxs)("a", {
                              href: "https://support.gtr.trade/en/",
                              target: "_blank",
                              className:
                                "flex items-center gap-1.5 bg-[#1B1E26] px-2 rounded-sm h-[22px] text-[#858DA3] hover:text-white transition-all duration-300",
                              children: [
                                (0, y.jsx)(P, { className: "w-3.5 h-3.5" }),
                                (0, y.jsx)("span", { children: "Support" }),
                              ],
                            }),
                          }),
                          (0, y.jsx)("div", {
                            className: "mr-0",
                            children: (0, y.jsxs)("a", {
                              href: "https://get-rabbit-app.gitbook.io/docs",
                              target: "_blank",
                              className:
                                "flex items-center gap-1.5 bg-[#1B1E26] px-2 rounded-sm h-[22px] text-[#858DA3] hover:text-white transition-all duration-300",
                              children: [
                                (0, y.jsx)(ea, {}),
                                (0, y.jsx)("span", { children: "Docs" }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
      ],
      902282
    );
  },
]);
