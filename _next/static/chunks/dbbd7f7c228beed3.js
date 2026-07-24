(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  478246,
  (e) => {
    "use strict";
    let t = {
      src: e.i(348918).default,
      width: 16,
      height: 16,
      blurWidth: 0,
      blurHeight: 0,
    };
    e.s(["default", 0, t]);
  },
  34342,
  (e) => {
    "use strict";
    var t = e.i(207670),
      o = e.i(271645);
    e.s([
      "ProgressBar",
      0,
      ({ className: e, onClick: r, progress: n }) =>
        o.default.createElement(
          "div",
          {
            className: (0, t.default)(
              "str-chat__message-attachment-audio-widget--progress-track",
              e
            ),
            "data-progress": n,
            "data-testid": "audio-progress",
            onClick: r,
            role: "progressbar",
            style: {
              "--str-chat__message-attachment-audio-widget-progress": n + "%",
            },
          },
          o.default.createElement("div", {
            className:
              "str-chat__message-attachment-audio-widget--progress-slider",
            style: { left: `${n}px` },
          })
        ),
    ]);
  },
  127615,
  717745,
  85141,
  (e) => {
    "use strict";
    var t = e.i(843476);
    let o = () =>
      (0, t.jsxs)("svg", {
        width: "10",
        height: "10",
        viewBox: "0 0 10 10",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
          (0, t.jsx)("path", {
            d: "M1 1L9 9",
            stroke: "currentColor",
            strokeWidth: "1",
          }),
          (0, t.jsx)("path", {
            d: "M9 1L1 9",
            stroke: "currentColor",
            strokeWidth: "1",
          }),
        ],
      });
    e.s(["default", 0, o], 717745);
    var r = e.i(974010),
      n = e.i(734616),
      a = e.i(533372),
      l = e.i(442948),
      s = e.i(553917),
      i = e.i(344423),
      u = e.i(343794),
      c = e.i(271645),
      d = e.i(34342),
      p = e.i(843464);
    let m = (0, c.memo)(
      ({
        icon: e,
        chainIcon: o = "",
        iconClassName: r = "",
        chainIconClassName: n = "",
        badgeIconClassName: a = "",
        verified: l = !1,
        symbol: s = "",
      }) =>
        (0, t.jsxs)("div", {
          className: "relative flex",
          children: [
            e
              ? (0, t.jsx)("img", {
                  src: e,
                  alt: "->",
                  className: `rounded-full w-8 h-8 border-1 border-[#1B1E26] ${r}`,
                  onError: ({ currentTarget: e }) => {
                    (e.onerror = null),
                      (e.src =
                        "https://getrabbit.nyc3.cdn.digitaloceanspaces.com/tokens/CTgiaZUK12kCcB8sosn4Nt2NZtzLgtPqDwyQyr2syATC.jpg");
                  },
                })
              : (0, t.jsx)("div", {
                  className: `rounded-full w-8 h-8 flex justify-center text-white text-[8px] items-center font-semibold uppercase ${r}`,
                  style: { background: "#505562" },
                  children: s.slice(0, 2),
                }),
            o
              ? (0, t.jsx)("img", {
                  src: o,
                  alt: "->",
                  className: `border-1 border-[#1B1E26] w-4 h-4 absolute top-0 right-0 bg-black rounded-full p-0.5 ${n}`,
                })
              : null,
            l
              ? (0, t.jsx)("img", {
                  src: p.default.src,
                  alt: "->",
                  className: `w-4 h-4 absolute -bottom-1 -right-1 ${a}`,
                })
              : null,
          ],
        })
    );
    e.s(["default", 0, m], 85141);
    let b = ({ duration: e, children: o, showProgress: r = !0 }) => {
      let [n, a] = (0, c.useState)(!1),
        l = (e) => {
          a(e);
        };
      return (0, t.jsxs)("div", {
        className: "relative",
        onMouseEnter: () => l(!0),
        onMouseLeave: () => l(!1),
        children: [o, (0, t.jsx)(d.ProgressBar, { progress: 400 })],
      });
    };
    e.s(
      [
        "hlTradeNotifications",
        0,
        ({
          notificationId: e = Date.now().toString(),
          showProgress: c = !0,
          isClosePosition: d = !1,
          loading: p = !1,
          autoClose: f = !0,
          isError: x = !1,
          isSpot: h = !1,
          baseToken: v = !1,
          title: g = "",
          tokenName: w = "",
          selectedAsset: C = "",
          selectedSection: y = "",
          leverage: j = "",
          takeProfit: k = "",
          tokenQuantity: S = "",
          isProfit: D = !1,
          isLoss: E = !1,
          showTpsl: N = !0,
          showContent: O = !0,
          isOnChain: R = !1,
          onChainLogoURI: A = "",
          onChainChainIcon: P = "",
          isWarning: T = !1,
          onDeposit: _ = null,
          showDots: I = !1,
        }) => {
          e = s.notifications.show({
            id: e,
            autoClose: !!f && 4500,
            color: "transparent",
            withCloseButton: !1,
            styles: (e, t, o) => ({
              body: { margin: 0, borderRadius: 0 },
              root: { padding: "0", cursor: "pointer" },
              loader: { marginLeft: "10px", marginRight: "10px" },
              icon: { marginRight: "0px" },
            }),
            message: (0, t.jsx)(b, {
              duration: 5e3,
              showProgress: c,
              children: (0, t.jsxs)("div", {
                className: (0, u.default)("py-3 px-2.5", {
                  "bg-[#FFAC00]/10": T,
                  "bg-blood/10": x,
                }),
                children: [
                  (0, t.jsxs)("div", {
                    className: "flex gap-2 items-center",
                    children: [
                      p &&
                        (0, t.jsx)("div", {
                          className: "flex justify-center items-center h-full",
                          children: (0, t.jsx)(l.Loader, {
                            className: "animate-spin-loader",
                            color: "white",
                            size: 10,
                          }),
                        }),
                      !p &&
                        (x || T) &&
                        (0, t.jsx)(i.IconAlertCircle, {
                          size: 20,
                          color: x ? "red" : "#FFAC00",
                        }),
                      (0, t.jsxs)("div", {
                        className:
                          "flex gap-2 justify-between items-center w-full",
                        children: [
                          (0, t.jsxs)("h2", {
                            className: (0, u.default)(
                              "font-medium text-xs flex items-center",
                              {
                                "text-blood": x,
                                "text-[#FFAC00]": T,
                                "text-white": !x && !T,
                              }
                            ),
                            children: [
                              g,
                              I &&
                                (0, t.jsxs)("span", {
                                  className: "loading-dots flex gap-0.5 ml-0.5",
                                  children: [
                                    (0, t.jsx)("span", { children: "." }),
                                    (0, t.jsx)("span", { children: "." }),
                                    (0, t.jsx)("span", { children: "." }),
                                  ],
                                }),
                            ],
                          }),
                          (0, t.jsxs)("div", {
                            className: "flex items-center gap-1",
                            children: [
                              _ &&
                                (0, t.jsx)(a.Button, {
                                  size: "xs",
                                  onClick: () => {
                                    _(), s.notifications.hide(e);
                                  },
                                  className:
                                    "!bg-white !text-black !h-6 !px-3 !text-[10px] font-bold border-none hover:!bg-white/90",
                                  children: "Deposit",
                                }),
                              (0, t.jsx)(a.Button, {
                                unstyled: !0,
                                onClick: () => s.notifications.hide(e),
                                className:
                                  "!text-white border border-transparent hover:border-[#16171B]/20 hover:!bg-[#16171B]/30 hover:!text-white/60 p-1.5 rounded",
                                children: (0, t.jsx)(o, {}),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  O
                    ? (0, t.jsxs)(t.Fragment, {
                        children: [
                          (0, t.jsxs)("div", {
                            className: "flex gap-2 px-2.5 py-3",
                            children: [
                              R
                                ? (0, t.jsx)(m, {
                                    icon: A,
                                    chainIcon: P,
                                    iconClassName:
                                      "w-[35px] h-[30px] sm:w-[48px] sm:h-[43px]",
                                    chainIconClassName: "w-[15px] h-[15px]",
                                  })
                                : (0, t.jsx)(
                                    n.Avatar,
                                    {
                                      src: (0, r.getIconUri)(
                                        w,
                                        h ? "spot" : "crypto-perps"
                                      ),
                                      alt: "->",
                                      size: 22,
                                      name: w,
                                      color: "initials",
                                    },
                                    w
                                  ),
                              (0, t.jsxs)("div", {
                                className:
                                  "flex gap-2 justify-between items-center w-full",
                                children: [
                                  (0, t.jsxs)("div", {
                                    className: "flex flex-col gap-1",
                                    children: [
                                      (0, t.jsx)("p", {
                                        className:
                                          "leading-[100%] text-xs text-white font-semibold",
                                        children: C,
                                      }),
                                      h || R
                                        ? null
                                        : (0, t.jsxs)("p", {
                                            className: (0, u.default)(
                                              "leading-[100%] text-xs font-medium ",
                                              {
                                                "text-grass": "long" === y,
                                                "text-blood": "long" !== y,
                                              }
                                            ),
                                            children: [
                                              (0, t.jsx)("span", {
                                                className: "uppercase",
                                                children: y,
                                              }),
                                              " ",
                                              j,
                                              "x",
                                            ],
                                          }),
                                    ],
                                  }),
                                  (0, t.jsx)("div", {
                                    className: "flex flex-col gap-1 items-end",
                                    children: (0, t.jsxs)("p", {
                                      className:
                                        "leading-[100%] text-xs text-white font-semibold uppercase",
                                      children: [S, " ", w],
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          N &&
                            (0, t.jsxs)("div", {
                              className: "flex gap-2 px-2.5 justify-between",
                              children: [
                                (0, t.jsxs)("p", {
                                  children: [
                                    d ? "Realized" : "Expected",
                                    " ",
                                    D ? "Profit" : "Loss",
                                  ],
                                }),
                                (0, t.jsx)("p", {
                                  className: (0, u.default)("font-medium", {
                                    "text-grass": D,
                                    "text-blood": E,
                                  }),
                                  children: k,
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
      127615
    );
  },
  458790,
  (e) => {
    "use strict";
    var t = e.i(843476),
      o = e.i(271645),
      r = e.i(446614),
      n = e.i(393737),
      a = e.i(931316),
      l = e.i(682451),
      s = e.i(424848);
    function i(e, t) {
      return 0 === t.length
        ? e
        : t.reduce((t, o) => (Math.abs(o - e) < Math.abs(t - e) ? o : t));
    }
    var u = e.i(143798);
    e.i(207670);
    var c = e.i(515259),
      d = e.i(789549),
      p = e.i(314037),
      m = e.i(321879),
      b = e.i(917303);
    let [f, x] = (0, e.i(384660).createSafeContext)(
      "SliderProvider was not found in tree"
    );
    var h = e.i(644662);
    let v = (0, o.forwardRef)(
      (
        {
          size: e,
          disabled: o,
          variant: r,
          color: n,
          thumbSize: a,
          radius: l,
          ...s
        },
        i
      ) => {
        let { getStyles: u } = x();
        return (0, t.jsx)(h.Box, {
          tabIndex: -1,
          variant: r,
          size: e,
          ref: i,
          ...u("root"),
          ...s,
        });
      }
    );
    v.displayName = "@mantine/core/SliderRoot";
    var g = e.i(298193);
    let w = (0, o.forwardRef)(
      (
        {
          max: e,
          min: r,
          value: n,
          position: a,
          label: l,
          dragging: s,
          onMouseDown: i,
          onKeyDownCapture: u,
          labelTransitionProps: c,
          labelAlwaysOn: d,
          thumbLabel: p,
          onFocus: m,
          onBlur: b,
          showLabelOnHover: f,
          isHovered: v,
          children: w = null,
          disabled: C,
        },
        y
      ) => {
        let { getStyles: j } = x(),
          [k, S] = (0, o.useState)(!1),
          D = d || s || k || (f && v);
        return (0, t.jsxs)(h.Box, {
          tabIndex: 0,
          role: "slider",
          "aria-label": p,
          "aria-valuemax": e,
          "aria-valuemin": r,
          "aria-valuenow": n,
          ref: y,
          __vars: { "--slider-thumb-offset": `${a}%` },
          ...j("thumb", { focusable: !0 }),
          mod: { dragging: s, disabled: C },
          onFocus: (e) => {
            S(!0), "function" == typeof m && m(e);
          },
          onBlur: (e) => {
            S(!1), "function" == typeof b && b(e);
          },
          onTouchStart: i,
          onMouseDown: i,
          onKeyDownCapture: u,
          onClick: (e) => e.stopPropagation(),
          children: [
            w,
            (0, t.jsx)(g.Transition, {
              mounted: null != l && !!D,
              transition: "fade",
              duration: 0,
              ...c,
              children: (e) =>
                (0, t.jsx)("div", { ...j("label", { style: e }), children: l }),
            }),
          ],
        });
      }
    );
    function C({ value: e, min: t, max: o }) {
      return Math.min(Math.max(((e - t) / (o - t)) * 100, 0), 100);
    }
    function y({
      marks: e,
      min: r,
      max: n,
      disabled: a,
      value: l,
      offset: s,
      inverted: i,
    }) {
      let { getStyles: u } = x();
      if (!e) return null;
      let c = e.map((e, c) =>
        (0, o.createElement)(
          h.Box,
          {
            ...u("markWrapper"),
            __vars: {
              "--mark-offset": `${C({ value: e.value, min: r, max: n })}%`,
            },
            key: c,
          },
          (0, t.jsx)(h.Box, {
            ...u("mark"),
            mod: {
              filled: (function ({
                mark: e,
                offset: t,
                value: o,
                inverted: r = !1,
              }) {
                return r
                  ? ("number" == typeof t && e.value <= t) || e.value >= o
                  : "number" == typeof t
                  ? e.value >= t && e.value <= o
                  : e.value <= o;
              })({ mark: e, value: l, offset: s, inverted: i }),
              disabled: a,
            },
          }),
          e.label && (0, t.jsx)("div", { ...u("markLabel"), children: e.label })
        )
      );
      return (0, t.jsx)("div", { children: c });
    }
    function j({
      filled: e,
      children: o,
      offset: r,
      disabled: n,
      marksOffset: a,
      inverted: l,
      containerProps: s,
      ...i
    }) {
      let { getStyles: u } = x();
      return (0, t.jsx)(h.Box, {
        ...u("trackContainer"),
        mod: { disabled: n },
        ...s,
        children: (0, t.jsxs)(h.Box, {
          ...u("track"),
          mod: { inverted: l, disabled: n },
          children: [
            (0, t.jsx)(h.Box, {
              mod: { inverted: l, disabled: n },
              __vars: {
                "--slider-bar-width": `calc(${e}% + 2 * var(--slider-size))`,
                "--slider-bar-offset": `calc(${r}% - var(--slider-size))`,
              },
              ...u("bar"),
            }),
            o,
            (0, t.jsx)(y, { ...i, offset: a, disabled: n, inverted: l }),
          ],
        }),
      });
    }
    function k(e, t) {
      return parseFloat(e.toFixed(t));
    }
    function S(e, t) {
      let o = [...t].sort((e, t) => e.value - t.value).find((t) => t.value > e);
      return o ? o.value : e;
    }
    function D(e, t) {
      let o = [...t].sort((e, t) => t.value - e.value).find((t) => t.value < e);
      return o ? o.value : e;
    }
    function E(e) {
      let t = [...e].sort((e, t) => e.value - t.value);
      return t.length > 0 ? t[0].value : 0;
    }
    function N(e) {
      let t = [...e].sort((e, t) => e.value - t.value);
      return t.length > 0 ? t[t.length - 1].value : 100;
    }
    (w.displayName = "@mantine/core/SliderThumb"),
      (y.displayName = "@mantine/core/SliderMarks"),
      (j.displayName = "@mantine/core/SliderTrack");
    var O = {
      root: "m_dd36362e",
      label: "m_c9357328",
      thumb: "m_c9a9a60a",
      trackContainer: "m_a8645c2",
      track: "m_c9ade57f",
      bar: "m_38aeed47",
      markWrapper: "m_b7b0423a",
      mark: "m_dd33bc19",
      markLabel: "m_68c77a5b",
    };
    let R = {
        radius: "xl",
        min: 0,
        max: 100,
        step: 1,
        marks: [],
        label: (e) => e,
        labelTransitionProps: { transition: "fade", duration: 0 },
        thumbLabel: "",
        showLabelOnHover: !0,
        scale: (e) => e,
        size: "md",
      },
      A = (0, u.createVarsResolver)(
        (e, { size: t, color: o, thumbSize: r, radius: n }) => ({
          root: {
            "--slider-size": (0, s.getSize)(t, "slider-size"),
            "--slider-color": o ? (0, c.getThemeColor)(o, e) : void 0,
            "--slider-radius": void 0 === n ? void 0 : (0, s.getRadius)(n),
            "--slider-thumb-size":
              void 0 !== r ? (0, l.rem)(r) : "calc(var(--slider-size) * 2)",
          },
        })
      ),
      P = (0, m.factory)((e, l) => {
        let s = (0, d.useProps)("Slider", R, e),
          {
            classNames: u,
            styles: c,
            value: m,
            onChange: x,
            onChangeEnd: h,
            size: g,
            min: y,
            max: P,
            domain: T,
            step: _,
            precision: I,
            defaultValue: B,
            name: M,
            marks: L,
            label: z,
            labelTransitionProps: F,
            labelAlwaysOn: $,
            thumbLabel: V,
            showLabelOnHover: H,
            thumbChildren: K,
            disabled: U,
            unstyled: G,
            scale: W,
            inverted: q,
            className: Z,
            style: X,
            vars: Q,
            hiddenInputProps: Y,
            restrictToMarks: J,
            thumbProps: ee,
            attributes: et,
            ...eo
          } = s,
          er = (0, p.useStyles)({
            name: "Slider",
            props: s,
            classes: O,
            classNames: u,
            className: Z,
            styles: c,
            style: X,
            attributes: et,
            vars: Q,
            varsResolver: A,
            unstyled: G,
          }),
          { dir: en } = (0, b.useDirection)(),
          [ea, el] = (0, o.useState)(!1),
          [es, ei] = (0, r.useUncontrolled)({
            value: "number" == typeof m ? (0, n.clamp)(m, y, P) : m,
            defaultValue: "number" == typeof B ? (0, n.clamp)(B, y, P) : B,
            finalValue: (0, n.clamp)(0, y, P),
            onChange: x,
          }),
          eu = (0, o.useRef)(es),
          ec = (0, o.useRef)(h);
        (0, o.useEffect)(() => {
          ec.current = h;
        }, [h]);
        let ed = (0, o.useRef)(null),
          ep = (0, o.useRef)(null),
          [em, eb] = T || [y, P],
          ef = C({ value: es, min: em, max: eb }),
          ex = W(es),
          eh = "function" == typeof z ? z(ex) : z,
          ev =
            I ??
            (function (e) {
              if (!e) return 0;
              let t = e.toString().split(".");
              return t.length > 1 ? t[1].length : 0;
            })(_),
          { ref: eg, active: ew } = (function (e, t, r = "ltr") {
            let a = (0, o.useRef)(null),
              l = (0, o.useRef)(!1),
              s = (0, o.useRef)(!1),
              i = (0, o.useRef)(0),
              [u, c] = (0, o.useState)(!1);
            return (
              (0, o.useEffect)(() => {
                l.current = !0;
              }, []),
              (0, o.useEffect)(() => {
                let o = a.current,
                  u = ({ x: t, y: a }) => {
                    cancelAnimationFrame(i.current),
                      (i.current = requestAnimationFrame(() => {
                        if (l.current && o) {
                          o.style.userSelect = "none";
                          let l = o.getBoundingClientRect();
                          if (l.width && l.height) {
                            let o = (0, n.clamp)((t - l.left) / l.width, 0, 1);
                            e({
                              x: "ltr" === r ? o : 1 - o,
                              y: (0, n.clamp)((a - l.top) / l.height, 0, 1),
                            });
                          }
                        }
                      }));
                  },
                  d = () => {
                    !s.current &&
                      l.current &&
                      ((s.current = !0),
                      "function" == typeof t?.onScrubStart && t.onScrubStart(),
                      c(!0),
                      document.addEventListener("mousemove", b),
                      document.addEventListener("mouseup", p),
                      document.addEventListener("touchmove", x),
                      document.addEventListener("touchend", p));
                  },
                  p = () => {
                    s.current &&
                      l.current &&
                      ((s.current = !1),
                      c(!1),
                      document.removeEventListener("mousemove", b),
                      document.removeEventListener("mouseup", p),
                      document.removeEventListener("touchmove", x),
                      document.removeEventListener("touchend", p),
                      setTimeout(() => {
                        "function" == typeof t?.onScrubEnd && t.onScrubEnd();
                      }, 0));
                  },
                  m = (e) => {
                    d(), e.preventDefault(), b(e);
                  },
                  b = (e) => u({ x: e.clientX, y: e.clientY }),
                  f = (e) => {
                    e.cancelable && e.preventDefault(), d(), x(e);
                  },
                  x = (e) => {
                    e.cancelable && e.preventDefault(),
                      u({
                        x: e.changedTouches[0].clientX,
                        y: e.changedTouches[0].clientY,
                      });
                  };
                return (
                  o?.addEventListener("mousedown", m),
                  o?.addEventListener("touchstart", f, { passive: !1 }),
                  () => {
                    o &&
                      (o.removeEventListener("mousedown", m),
                      o.removeEventListener("touchstart", f));
                  }
                );
              }, [r, e]),
              { ref: a, active: u }
            );
          })(
            (0, o.useCallback)(
              ({ x: e }) => {
                if (!U) {
                  let t = (function ({
                      value: e,
                      containerWidth: t,
                      min: o,
                      max: r,
                      step: n,
                      precision: a,
                    }) {
                      let l =
                          (t ? Math.min(Math.max(e, 0), t) / t : e) * (r - o),
                        s = Math.max(
                          (0 !== l ? Math.round(l / n) * n : 0) + o,
                          o
                        );
                      return void 0 !== a ? Number(s.toFixed(a)) : s;
                    })({ value: e, min: em, max: eb, step: _, precision: ev }),
                    o = (0, n.clamp)(t, y, P);
                  ei(
                    J && L?.length
                      ? i(
                          o,
                          L.map((e) => e.value)
                        )
                      : o
                  ),
                    (eu.current = o);
                }
              },
              [U, y, P, em, eb, _, ev, ei, L, J]
            ),
            {
              onScrubEnd: (0, o.useCallback)(() => {
                if (!U && ec.current) {
                  let e =
                    J && L?.length
                      ? i(
                          eu.current,
                          L.map((e) => e.value)
                        )
                      : eu.current;
                  ec.current(e);
                }
              }, [U, L, J]),
            },
            en
          ),
          eC = (0, o.useCallback)(
            (e) => {
              !U && ec.current && ec.current(e);
            },
            [U]
          );
        return (0, t.jsx)(f, {
          value: { getStyles: er },
          children: (0, t.jsxs)(v, {
            ...eo,
            ref: (0, a.useMergedRef)(l, ed),
            onKeyDownCapture: (e) => {
              if (!U)
                switch (e.key) {
                  case "ArrowUp": {
                    if ((e.preventDefault(), ep.current?.focus(), J && L)) {
                      let e = S(es, L);
                      ei(e), eC(e);
                      break;
                    }
                    let t = k(Math.min(Math.max(es + _, y), P), ev);
                    ei(t), eC(t);
                    break;
                  }
                  case "ArrowRight": {
                    if ((e.preventDefault(), ep.current?.focus(), J && L)) {
                      let e = "rtl" === en ? D(es, L) : S(es, L);
                      ei(e), eC(e);
                      break;
                    }
                    let t = k(
                      Math.min(Math.max("rtl" === en ? es - _ : es + _, y), P),
                      ev
                    );
                    ei(t), eC(t);
                    break;
                  }
                  case "ArrowDown": {
                    if ((e.preventDefault(), ep.current?.focus(), J && L)) {
                      let e = D(es, L);
                      ei(e), eC(e);
                      break;
                    }
                    let t = k(Math.min(Math.max(es - _, y), P), ev);
                    ei(t), eC(t);
                    break;
                  }
                  case "ArrowLeft": {
                    if ((e.preventDefault(), ep.current?.focus(), J && L)) {
                      let e = "rtl" === en ? S(es, L) : D(es, L);
                      ei(e), eC(e);
                      break;
                    }
                    let t = k(
                      Math.min(Math.max("rtl" === en ? es + _ : es - _, y), P),
                      ev
                    );
                    ei(t), eC(t);
                    break;
                  }
                  case "Home":
                    if ((e.preventDefault(), ep.current?.focus(), J && L)) {
                      ei(E(L)), eC(E(L));
                      break;
                    }
                    ei(y), eC(y);
                    break;
                  case "End":
                    if ((e.preventDefault(), ep.current?.focus(), J && L)) {
                      ei(N(L)), eC(N(L));
                      break;
                    }
                    ei(P), eC(P);
                }
            },
            onMouseDownCapture: () => ed.current?.focus(),
            size: g,
            disabled: U,
            children: [
              (0, t.jsx)(j, {
                inverted: q,
                offset: 0,
                filled: ef,
                marks: L,
                min: em,
                max: eb,
                value: ex,
                disabled: U,
                containerProps: {
                  ref: eg,
                  onMouseEnter: H ? () => el(!0) : void 0,
                  onMouseLeave: H ? () => el(!1) : void 0,
                },
                children: (0, t.jsx)(w, {
                  max: eb,
                  min: em,
                  value: ex,
                  position: ef,
                  dragging: ew,
                  label: eh,
                  ref: ep,
                  labelTransitionProps: F,
                  labelAlwaysOn: $,
                  thumbLabel: V,
                  showLabelOnHover: H,
                  isHovered: ea,
                  disabled: U,
                  ...ee,
                  children: K,
                }),
              }),
              (0, t.jsx)("input", { type: "hidden", name: M, value: ex, ...Y }),
            ],
          }),
        });
      });
    (P.classes = O),
      (P.displayName = "@mantine/core/Slider"),
      e.s(["Slider", () => P], 458790);
  },
  836733,
  (e) => {
    "use strict";
    var t = e.i(843476),
      o = e.i(129277),
      r = e.i(2710),
      n = e.i(357772),
      a = e.i(867228),
      l = e.i(974010);
    e.s([
      "default",
      0,
      ({
        content: e,
        classNames: s,
        useDrawerOnMobile: i,
        drawerHeight: u = "75%",
        ...c
      }) => {
        let d = (0, a.useMediaQuery)("(max-width: 768px)"),
          p = {
            overlay: "bg-[#000000E5]",
            content: "bg-neutral-950 rounded-2xl border-1 border-neutral-800",
            header: "!bg-neutral-900 p-4 m-0 h-14 min-h-14",
            title: "text-white font-medium",
            body: "p-0 m-0",
            close: "bg-transparent transition-all duration-150 !outline-none",
          },
          m = {
            overlay: "bg-[#000000B2]",
            content:
              "bg-neutral-950 rounded-t-[20px] border-t border-neutral-800",
            header: "!bg-neutral-900 p-4 m-0 h-14 min-h-14 sticky top-0 z-10",
            title: "text-white font-medium",
            body: "p-0 m-0",
            close: "bg-transparent transition-all duration-150 !outline-none",
          },
          b = (e) => {
            let t = e ? m : p;
            return {
              overlay: (0, l.cn)(t.overlay, s?.overlay),
              content: (0, l.cn)(t.content, s?.content),
              header: (0, l.cn)(t.header, s?.header),
              title: (0, l.cn)(t.title, s?.title),
              body: (0, l.cn)(t.body, s?.body),
              close: (0, l.cn)(t.close, s?.close),
            };
          },
          f = (0, t.jsx)(n.IconX, {
            size: 22,
            stroke: 1.5,
            className:
              "text-zinc-700 hover:text-zinc-400 transition-all duration-150",
          }),
          { centered: x, ...h } = c;
        return i && d
          ? (0, t.jsx)(r.Drawer, {
              ...h,
              position: "bottom",
              size: u,
              classNames: b(!0),
              closeButtonProps: { icon: f },
              children: e,
            })
          : (0, t.jsx)(o.Modal, {
              classNames: b(!1),
              closeButtonProps: { icon: f },
              centered: x,
              ...h,
              children: e,
            });
      },
    ]);
  },
  211048,
  (e) => {
    "use strict";
    var t = e.i(271645),
      o = e.i(446614);
    function r(e, t = document) {
      let o = t.querySelector(e);
      if (o) return o;
      let n = t.querySelectorAll("*");
      for (let t = 0; t < n.length; t += 1) {
        let o = n[t];
        if (o.shadowRoot) {
          let t = r(e, o.shadowRoot);
          if (t) return t;
        }
      }
      return null;
    }
    function n(e, t = document) {
      let o = [],
        r = t.querySelectorAll(e);
      o.push(...Array.from(r));
      let a = t.querySelectorAll("*");
      for (let t = 0; t < a.length; t += 1) {
        let r = a[t];
        if (r.shadowRoot) {
          let t = n(e, r.shadowRoot);
          o.push(...t);
        }
      }
      return o;
    }
    function a(e) {
      if (!e) return document;
      let t = e.getRootNode();
      return t instanceof ShadowRoot || t instanceof Document ? t : document;
    }
    function l({
      defaultOpened: e,
      opened: s,
      onOpenedChange: i,
      onDropdownClose: u,
      onDropdownOpen: c,
      loop: d = !0,
      scrollBehavior: p = "instant",
    } = {}) {
      let [m, b] = (0, o.useUncontrolled)({
          value: s,
          defaultValue: e,
          finalValue: !1,
          onChange: i,
        }),
        f = (0, t.useRef)(null),
        x = (0, t.useRef)(-1),
        h = (0, t.useRef)(null),
        v = (0, t.useRef)(null),
        g = (0, t.useRef)(-1),
        w = (0, t.useRef)(-1),
        C = (0, t.useRef)(-1),
        y = (0, t.useCallback)(
          (e = "unknown") => {
            m || (b(!0), c?.(e));
          },
          [b, c, m]
        ),
        j = (0, t.useCallback)(
          (e = "unknown") => {
            m && (b(!1), u?.(e));
          },
          [b, u, m]
        ),
        k = (0, t.useCallback)(
          (e = "unknown") => {
            m ? j(e) : y(e);
          },
          [j, y, m]
        ),
        S = (0, t.useCallback)(() => {
          let e = a(v.current),
            t = r(`#${f.current} [data-combobox-selected]`, e);
          t?.removeAttribute("data-combobox-selected"),
            t?.removeAttribute("aria-selected");
        }, []),
        D = (0, t.useCallback)(
          (e) => {
            let t = a(v.current),
              o = r(`#${f.current}`, t),
              l = o ? n("[data-combobox-option]", o) : null;
            if (!l) return null;
            let s = e >= l.length ? 0 : e < 0 ? l.length - 1 : e;
            return ((x.current = s),
            l?.[s] && !l[s].hasAttribute("data-combobox-disabled"))
              ? (S(),
                l[s].setAttribute("data-combobox-selected", "true"),
                l[s].setAttribute("aria-selected", "true"),
                l[s].scrollIntoView({ block: "nearest", behavior: p }),
                l[s].id)
              : null;
          },
          [p, S]
        ),
        E = (0, t.useCallback)(() => {
          let e = a(v.current),
            t = r(`#${f.current} [data-combobox-active]`, e);
          return t
            ? D(
                n(`#${f.current} [data-combobox-option]`, e).findIndex(
                  (e) => e === t
                )
              )
            : D(0);
        }, [D]),
        N = (0, t.useCallback)(() => {
          let e = a(v.current),
            t = n(`#${f.current} [data-combobox-option]`, e);
          return D(
            (function (e, t, o) {
              for (let o = e + 1; o < t.length; o += 1)
                if (!t[o].hasAttribute("data-combobox-disabled")) return o;
              if (o) {
                for (let e = 0; e < t.length; e += 1)
                  if (!t[e].hasAttribute("data-combobox-disabled")) return e;
              }
              return e;
            })(x.current, t, d)
          );
        }, [D, d]),
        O = (0, t.useCallback)(() => {
          let e = a(v.current),
            t = n(`#${f.current} [data-combobox-option]`, e);
          return D(
            (function (e, t, o) {
              for (let o = e - 1; o >= 0; o -= 1)
                if (!t[o].hasAttribute("data-combobox-disabled")) return o;
              if (o) {
                for (let e = t.length - 1; e > -1; e -= 1)
                  if (!t[e].hasAttribute("data-combobox-disabled")) return e;
              }
              return e;
            })(x.current, t, d)
          );
        }, [D, d]),
        R = (0, t.useCallback)(() => {
          let e = a(v.current);
          return D(
            (function (e) {
              for (let t = 0; t < e.length; t += 1)
                if (!e[t].hasAttribute("data-combobox-disabled")) return t;
              return -1;
            })(n(`#${f.current} [data-combobox-option]`, e))
          );
        }, [D]),
        A = (0, t.useCallback)((e = "selected", t) => {
          C.current = window.setTimeout(() => {
            let o = a(v.current),
              r = n(`#${f.current} [data-combobox-option]`, o),
              l = r.findIndex((t) => t.hasAttribute(`data-combobox-${e}`));
            (x.current = l),
              t?.scrollIntoView &&
                r[l]?.scrollIntoView({ block: "nearest", behavior: p });
          }, 0);
        }, []),
        P = (0, t.useCallback)(() => {
          (x.current = -1), S();
        }, [S]),
        T = (0, t.useCallback)(() => {
          let e = a(v.current),
            t = n(`#${f.current} [data-combobox-option]`, e),
            o = t?.[x.current];
          o?.click();
        }, []),
        _ = (0, t.useCallback)((e) => {
          f.current = e;
        }, []),
        I = (0, t.useCallback)(() => {
          g.current = window.setTimeout(() => h.current?.focus(), 0);
        }, []),
        B = (0, t.useCallback)(() => {
          w.current = window.setTimeout(() => v.current?.focus(), 0);
        }, []),
        M = (0, t.useCallback)(() => x.current, []);
      return (
        (0, t.useEffect)(
          () => () => {
            window.clearTimeout(g.current),
              window.clearTimeout(w.current),
              window.clearTimeout(C.current);
          },
          []
        ),
        {
          dropdownOpened: m,
          openDropdown: y,
          closeDropdown: j,
          toggleDropdown: k,
          selectedOptionIndex: x.current,
          getSelectedOptionIndex: M,
          selectOption: D,
          selectFirstOption: R,
          selectActiveOption: E,
          selectNextOption: N,
          selectPreviousOption: O,
          resetSelectedOption: P,
          updateSelectedOptionIndex: A,
          listId: f.current,
          setListId: _,
          clickSelectedOption: T,
          searchRef: h,
          focusSearchInput: I,
          targetRef: v,
          focusTarget: B,
        }
      );
    }
    e.i(843476), e.s(["useCombobox", () => l], 211048);
  },
  884601,
  515389,
  813325,
  735986,
  197328,
  372311,
  224116,
  47003,
  475444,
  373922,
  125866,
  452963,
  838818,
  207823,
  123054,
  582967,
  802851,
  602758,
  355827,
  (e) => {
    "use strict";
    var t = e.i(271645);
    function o(e) {
      let o = (0, t.useRef)(void 0);
      return (
        (0, t.useEffect)(() => {
          o.current = e;
        }, [e]),
        o.current
      );
    }
    function r(e) {
      return e
        ? e.map((e) =>
            (function e(t) {
              return "string" == typeof t
                ? { value: t, label: t }
                : "value" in t && !("label" in t)
                ? { value: t.value, label: t.value, disabled: t.disabled }
                : "number" == typeof t
                ? { value: t.toString(), label: t.toString() }
                : "group" in t
                ? { group: t.group, items: t.items.map((t) => e(t)) }
                : t;
            })(e)
          )
        : [];
    }
    e.s(["usePrevious", () => o], 884601),
      e.s(["getParsedComboboxData", () => r], 515389),
      e.s(
        [
          "getOptionsLockup",
          () =>
            function e(t) {
              return t.reduce(
                (t, o) =>
                  "group" in o
                    ? { ...t, ...e(o.items) }
                    : ((t[o.value] = o), t),
                {}
              );
            },
        ],
        813325
      );
    var n = e.i(384660),
      a = e.i(843476);
    e.i(207670);
    let [l, s] = (0, n.createSafeContext)(
      "Combobox component was not found in tree"
    );
    e.s(["ComboboxProvider", () => l, "useComboboxContext", () => s], 735986);
    var i = e.i(424848),
      u = e.i(143798),
      c = e.i(515259),
      d = e.i(789549),
      p = e.i(314037),
      m = e.i(644662),
      b = e.i(321879),
      f = {
        dropdown: "m_88b62a41",
        search: "m_985517d8",
        options: "m_b2821a6e",
        option: "m_92253aa5",
        empty: "m_2530cd1d",
        header: "m_858f94bd",
        footer: "m_82b967cb",
        group: "m_254f3e4f",
        groupLabel: "m_2bb2e9e5",
        chevron: "m_2943220b",
        optionsDropdownOption: "m_390b5f4",
        optionsDropdownCheckIcon: "m_8ee53fc2",
        optionsDropdownCheckPlaceholder: "m_a530ee0a",
      };
    e.s(["default", () => f], 197328);
    let x = { error: null },
      h = (0, u.createVarsResolver)((e, { size: t, color: o }) => ({
        chevron: {
          "--combobox-chevron-size": (0, i.getSize)(t, "combobox-chevron-size"),
          "--combobox-chevron-color": o ? (0, c.getThemeColor)(o, e) : void 0,
        },
      })),
      v = (0, b.factory)((e, t) => {
        let o = (0, d.useProps)("ComboboxChevron", x, e),
          {
            size: r,
            error: n,
            style: l,
            className: s,
            classNames: i,
            styles: u,
            unstyled: c,
            vars: b,
            mod: v,
            ...g
          } = o,
          w = (0, p.useStyles)({
            name: "ComboboxChevron",
            classes: f,
            props: o,
            style: l,
            className: s,
            classNames: i,
            styles: u,
            unstyled: c,
            vars: b,
            varsResolver: h,
            rootSelector: "chevron",
          });
        return (0, a.jsx)(m.Box, {
          component: "svg",
          ...g,
          ...w("chevron"),
          size: r,
          viewBox: "0 0 15 15",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          mod: ["combobox-chevron", { error: n }, v],
          ref: t,
          children: (0, a.jsx)("path", {
            d: "M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z",
            fill: "currentColor",
            fillRule: "evenodd",
            clipRule: "evenodd",
          }),
        });
      });
    (v.classes = f),
      (v.displayName = "@mantine/core/ComboboxChevron"),
      e.s(["ComboboxChevron", () => v], 372311);
    var g = e.i(22084);
    let w = (0, t.forwardRef)(
      ({ size: e, onMouseDown: t, onClick: o, onClear: r, ...n }, l) =>
        (0, a.jsx)(g.Input.ClearButton, {
          ref: l,
          tabIndex: -1,
          "aria-hidden": !0,
          ...n,
          onMouseDown: (e) => {
            e.preventDefault(), t?.(e);
          },
          onClick: (e) => {
            r(), o?.(e);
          },
        })
    );
    (w.displayName = "@mantine/core/ComboboxClearButton"),
      e.s(["ComboboxClearButton", () => w], 224116);
    var C = e.i(857142);
    let y = (0, b.factory)((e, t) => {
      let {
          classNames: o,
          styles: r,
          className: n,
          style: l,
          hidden: i,
          ...u
        } = (0, d.useProps)("ComboboxDropdown", null, e),
        c = s();
      return (0, a.jsx)(C.Popover.Dropdown, {
        ...u,
        ref: t,
        role: "presentation",
        "data-hidden": i || void 0,
        ...c.getStyles("dropdown", {
          className: n,
          style: l,
          classNames: o,
          styles: r,
        }),
      });
    });
    (y.classes = f),
      (y.displayName = "@mantine/core/ComboboxDropdown"),
      e.s(["ComboboxDropdown", () => y], 47003);
    var j = e.i(795991);
    let k = { refProp: "ref" },
      S = (0, b.factory)((e, t) => {
        let { children: o, refProp: r } = (0, d.useProps)(
          "ComboboxDropdownTarget",
          k,
          e
        );
        if ((s(), !(0, j.isElement)(o)))
          throw Error(
            "Combobox.DropdownTarget component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
          );
        return (0, a.jsx)(C.Popover.Target, {
          ref: t,
          refProp: r,
          children: o,
        });
      });
    (S.displayName = "@mantine/core/ComboboxDropdownTarget"),
      e.s(["ComboboxDropdownTarget", () => S], 475444);
    let D = (0, b.factory)((e, t) => {
      let {
          classNames: o,
          className: r,
          style: n,
          styles: l,
          vars: i,
          ...u
        } = (0, d.useProps)("ComboboxEmpty", null, e),
        c = s();
      return (0, a.jsx)(m.Box, {
        ref: t,
        ...c.getStyles("empty", {
          className: r,
          classNames: o,
          styles: l,
          style: n,
        }),
        ...u,
      });
    });
    (D.classes = f),
      (D.displayName = "@mantine/core/ComboboxEmpty"),
      e.s(["ComboboxEmpty", () => D], 373922);
    var E = e.i(931316),
      N = e.i(532503);
    function O({
      onKeyDown: e,
      withKeyboardNavigation: o,
      withAriaAttributes: r,
      withExpandedAttribute: n,
      targetType: a,
      autoComplete: l,
    }) {
      let i = s(),
        [u, c] = (0, t.useState)(null);
      return {
        ...(r
          ? {
              "aria-haspopup": "listbox",
              "aria-expanded": n
                ? !!(i.store.listId && i.store.dropdownOpened)
                : void 0,
              "aria-controls":
                i.store.dropdownOpened && i.store.listId
                  ? i.store.listId
                  : void 0,
              "aria-activedescendant": (i.store.dropdownOpened && u) || void 0,
              autoComplete: l,
              "data-expanded": i.store.dropdownOpened || void 0,
              "data-mantine-stop-propagation": i.store.dropdownOpened || void 0,
            }
          : {}),
        onKeyDown: (t) => {
          if ((e?.(t), !i.readOnly && o) && !t.nativeEvent.isComposing) {
            if (
              ("ArrowDown" === t.nativeEvent.code &&
                (t.preventDefault(),
                i.store.dropdownOpened
                  ? c(i.store.selectNextOption())
                  : (i.store.openDropdown("keyboard"),
                    c(i.store.selectActiveOption()),
                    i.store.updateSelectedOptionIndex("selected", {
                      scrollIntoView: !0,
                    }))),
              "ArrowUp" === t.nativeEvent.code &&
                (t.preventDefault(),
                i.store.dropdownOpened
                  ? c(i.store.selectPreviousOption())
                  : (i.store.openDropdown("keyboard"),
                    c(i.store.selectActiveOption()),
                    i.store.updateSelectedOptionIndex("selected", {
                      scrollIntoView: !0,
                    }))),
              "Enter" === t.nativeEvent.code ||
                "NumpadEnter" === t.nativeEvent.code)
            ) {
              if (229 === t.nativeEvent.keyCode) return;
              let e = i.store.getSelectedOptionIndex();
              i.store.dropdownOpened && -1 !== e
                ? (t.preventDefault(), i.store.clickSelectedOption())
                : "button" === a &&
                  (t.preventDefault(), i.store.openDropdown("keyboard"));
            }
            "Escape" === t.key && i.store.closeDropdown("keyboard"),
              "Space" === t.nativeEvent.code &&
                "button" === a &&
                (t.preventDefault(), i.store.toggleDropdown("keyboard"));
          }
        },
      };
    }
    let R = {
        refProp: "ref",
        targetType: "input",
        withKeyboardNavigation: !0,
        withAriaAttributes: !0,
        withExpandedAttribute: !1,
        autoComplete: "off",
      },
      A = (0, b.factory)((e, o) => {
        let {
          children: r,
          refProp: n,
          withKeyboardNavigation: a,
          withAriaAttributes: l,
          withExpandedAttribute: i,
          targetType: u,
          autoComplete: c,
          ...p
        } = (0, d.useProps)("ComboboxEventsTarget", R, e);
        if (!(0, j.isElement)(r))
          throw Error(
            "Combobox.EventsTarget component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
          );
        let m = s(),
          b = O({
            targetType: u,
            withAriaAttributes: l,
            withKeyboardNavigation: a,
            withExpandedAttribute: i,
            onKeyDown: r.props.onKeyDown,
            autoComplete: c,
          });
        return (0, t.cloneElement)(r, {
          ...b,
          ...p,
          [n]: (0, E.useMergedRef)(o, m.store.targetRef, (0, N.getRefProp)(r)),
        });
      });
    (A.displayName = "@mantine/core/ComboboxEventsTarget"),
      e.s(["ComboboxEventsTarget", () => A], 125866);
    let P = (0, b.factory)((e, t) => {
      let {
          classNames: o,
          className: r,
          style: n,
          styles: l,
          vars: i,
          ...u
        } = (0, d.useProps)("ComboboxFooter", null, e),
        c = s();
      return (0, a.jsx)(m.Box, {
        ref: t,
        ...c.getStyles("footer", {
          className: r,
          classNames: o,
          style: n,
          styles: l,
        }),
        ...u,
        onMouseDown: (e) => {
          e.preventDefault();
        },
      });
    });
    (P.classes = f),
      (P.displayName = "@mantine/core/ComboboxFooter"),
      e.s(["ComboboxFooter", () => P], 452963);
    var T = e.i(751937);
    let _ = (0, b.factory)((e, t) => {
      let {
          classNames: o,
          className: r,
          style: n,
          styles: l,
          vars: i,
          children: u,
          label: c,
          id: p,
          ...b
        } = (0, d.useProps)("ComboboxGroup", null, e),
        f = s(),
        x = (0, T.useId)(p);
      return (0, a.jsxs)(m.Box, {
        ref: t,
        role: "group",
        "aria-labelledby": c ? x : void 0,
        ...f.getStyles("group", {
          className: r,
          classNames: o,
          style: n,
          styles: l,
        }),
        ...b,
        children: [
          c &&
            (0, a.jsx)("div", {
              id: x,
              ...f.getStyles("groupLabel", { classNames: o, styles: l }),
              children: c,
            }),
          u,
        ],
      });
    });
    (_.classes = f),
      (_.displayName = "@mantine/core/ComboboxGroup"),
      e.s(["ComboboxGroup", () => _], 838818);
    let I = (0, b.factory)((e, t) => {
      let {
          classNames: o,
          className: r,
          style: n,
          styles: l,
          vars: i,
          ...u
        } = (0, d.useProps)("ComboboxHeader", null, e),
        c = s();
      return (0, a.jsx)(m.Box, {
        ref: t,
        ...c.getStyles("header", {
          className: r,
          classNames: o,
          style: n,
          styles: l,
        }),
        ...u,
        onMouseDown: (e) => {
          e.preventDefault();
        },
      });
    });
    function B({ value: e, valuesDivider: t = ",", ...o }) {
      return (0, a.jsx)("input", {
        type: "hidden",
        value: Array.isArray(e) ? e.join(t) : e || "",
        ...o,
      });
    }
    (I.classes = f),
      (I.displayName = "@mantine/core/ComboboxHeader"),
      e.s(["ComboboxHeader", () => I], 207823),
      (B.displayName = "@mantine/core/ComboboxHiddenInput"),
      e.s(["ComboboxHiddenInput", () => B], 123054);
    let M = (0, b.factory)((e, o) => {
      let r = (0, d.useProps)("ComboboxOption", null, e),
        {
          classNames: n,
          className: l,
          style: i,
          styles: u,
          vars: c,
          onClick: p,
          id: b,
          active: f,
          onMouseDown: x,
          onMouseOver: h,
          disabled: v,
          selected: g,
          mod: w,
          ...C
        } = r,
        y = s(),
        j = (0, t.useId)();
      return (0, a.jsx)(m.Box, {
        ...y.getStyles("option", {
          className: l,
          classNames: n,
          styles: u,
          style: i,
        }),
        ...C,
        ref: o,
        id: b || j,
        mod: [
          "combobox-option",
          {
            "combobox-active": f,
            "combobox-disabled": v,
            "combobox-selected": g,
          },
          w,
        ],
        role: "option",
        onClick: (e) => {
          v ? e.preventDefault() : (y.onOptionSubmit?.(r.value, r), p?.(e));
        },
        onMouseDown: (e) => {
          e.preventDefault(), x?.(e);
        },
        onMouseOver: (e) => {
          y.resetSelectionOnOptionHover && y.store.resetSelectedOption(),
            h?.(e);
        },
      });
    });
    (M.classes = f),
      (M.displayName = "@mantine/core/ComboboxOption"),
      e.s(["ComboboxOption", () => M], 582967);
    let L = (0, b.factory)((e, o) => {
      let {
          classNames: r,
          className: n,
          style: l,
          styles: i,
          id: u,
          onMouseDown: c,
          labelledBy: p,
          ...b
        } = (0, d.useProps)("ComboboxOptions", null, e),
        f = s(),
        x = (0, T.useId)(u);
      return (
        (0, t.useEffect)(() => {
          f.store.setListId(x);
        }, [x]),
        (0, a.jsx)(m.Box, {
          ref: o,
          ...f.getStyles("options", {
            className: n,
            style: l,
            classNames: r,
            styles: i,
          }),
          ...b,
          id: x,
          role: "listbox",
          "aria-labelledby": p,
          onMouseDown: (e) => {
            e.preventDefault(), c?.(e);
          },
        })
      );
    });
    (L.classes = f),
      (L.displayName = "@mantine/core/ComboboxOptions"),
      e.s(["ComboboxOptions", () => L], 802851);
    let z = { withAriaAttributes: !0, withKeyboardNavigation: !0 },
      F = (0, b.factory)((e, t) => {
        let {
            classNames: o,
            styles: r,
            unstyled: n,
            vars: l,
            withAriaAttributes: i,
            onKeyDown: u,
            withKeyboardNavigation: c,
            size: p,
            ...m
          } = (0, d.useProps)("ComboboxSearch", z, e),
          b = s(),
          f = b.getStyles("search"),
          x = O({
            targetType: "input",
            withAriaAttributes: i,
            withKeyboardNavigation: c,
            withExpandedAttribute: !1,
            onKeyDown: u,
            autoComplete: "off",
          });
        return (0, a.jsx)(g.Input, {
          ref: (0, E.useMergedRef)(t, b.store.searchRef),
          classNames: [{ input: f.className }, o],
          styles: [{ input: f.style }, r],
          size: p || b.size,
          ...x,
          ...m,
          __staticSelector: "Combobox",
        });
      });
    (F.classes = f),
      (F.displayName = "@mantine/core/ComboboxSearch"),
      e.s(["ComboboxSearch", () => F], 602758);
    let $ = {
        refProp: "ref",
        targetType: "input",
        withKeyboardNavigation: !0,
        withAriaAttributes: !0,
        withExpandedAttribute: !1,
        autoComplete: "off",
      },
      V = (0, b.factory)((e, o) => {
        let {
          children: r,
          refProp: n,
          withKeyboardNavigation: l,
          withAriaAttributes: i,
          withExpandedAttribute: u,
          targetType: c,
          autoComplete: p,
          ...m
        } = (0, d.useProps)("ComboboxTarget", $, e);
        if (!(0, j.isElement)(r))
          throw Error(
            "Combobox.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
          );
        let b = s(),
          f = O({
            targetType: c,
            withAriaAttributes: i,
            withKeyboardNavigation: l,
            withExpandedAttribute: u,
            onKeyDown: r.props.onKeyDown,
            autoComplete: p,
          }),
          x = (0, t.cloneElement)(r, { ...f, ...m });
        return (0, a.jsx)(C.Popover.Target, {
          ref: (0, E.useMergedRef)(o, b.store.targetRef),
          children: x,
        });
      });
    (V.displayName = "@mantine/core/ComboboxTarget"),
      e.s(["ComboboxTarget", () => V], 355827);
  },
  453165,
  19824,
  8477,
  537528,
  (e) => {
    "use strict";
    var t = e.i(843476),
      o = e.i(271645),
      r = e.i(751937),
      n = e.i(446614),
      a = e.i(884601),
      l = e.i(207670),
      s = e.i(908954),
      i = e.i(789549),
      u = e.i(321879),
      c = e.i(515389),
      d = e.i(813325),
      p = e.i(682451),
      m = e.i(424848),
      b = e.i(143798),
      f = e.i(314037),
      x = e.i(857142),
      h = e.i(735986),
      v = e.i(372311),
      g = e.i(224116),
      w = e.i(47003),
      C = e.i(475444),
      y = e.i(373922),
      j = e.i(125866),
      k = e.i(452963),
      S = e.i(838818),
      D = e.i(207823),
      E = e.i(123054),
      N = e.i(582967),
      O = e.i(802851),
      R = e.i(602758),
      A = e.i(355827),
      P = e.i(211048),
      T = e.i(197328);
    let _ = {
        keepMounted: !0,
        withinPortal: !0,
        resetSelectionOnOptionHover: !1,
        width: "target",
        transitionProps: { transition: "fade", duration: 0 },
        size: "sm",
      },
      I = (0, b.createVarsResolver)((e, { size: t, dropdownPadding: o }) => ({
        options: {
          "--combobox-option-fz": (0, m.getFontSize)(t),
          "--combobox-option-padding": (0, m.getSize)(
            t,
            "combobox-option-padding"
          ),
        },
        dropdown: {
          "--combobox-padding": void 0 === o ? void 0 : (0, p.rem)(o),
          "--combobox-option-fz": (0, m.getFontSize)(t),
          "--combobox-option-padding": (0, m.getSize)(
            t,
            "combobox-option-padding"
          ),
        },
      }));
    function B(e) {
      let o = (0, i.useProps)("Combobox", _, e),
        {
          classNames: r,
          styles: n,
          unstyled: a,
          children: l,
          store: s,
          vars: u,
          onOptionSubmit: c,
          onClose: d,
          size: p,
          dropdownPadding: m,
          resetSelectionOnOptionHover: b,
          __staticSelector: v,
          readOnly: g,
          attributes: w,
          ...C
        } = o,
        y = (0, P.useCombobox)(),
        j = s || y,
        k = (0, f.useStyles)({
          name: v || "Combobox",
          classes: T.default,
          props: o,
          classNames: r,
          styles: n,
          unstyled: a,
          attributes: w,
          vars: u,
          varsResolver: I,
        });
      return (0, t.jsx)(h.ComboboxProvider, {
        value: {
          getStyles: k,
          store: j,
          onOptionSubmit: c,
          size: p,
          resetSelectionOnOptionHover: b,
          readOnly: g,
        },
        children: (0, t.jsx)(x.Popover, {
          opened: j.dropdownOpened,
          preventPositionChangeWhenVisible: !0,
          ...C,
          onChange: (e) => !e && void (d?.(), j.closeDropdown()),
          withRoles: !1,
          unstyled: a,
          children: l,
        }),
      });
    }
    (B.extend = (e) => e),
      (B.classes = T.default),
      (B.displayName = "@mantine/core/Combobox"),
      (B.Target = A.ComboboxTarget),
      (B.Dropdown = w.ComboboxDropdown),
      (B.Options = O.ComboboxOptions),
      (B.Option = N.ComboboxOption),
      (B.Search = R.ComboboxSearch),
      (B.Empty = y.ComboboxEmpty),
      (B.Chevron = v.ComboboxChevron),
      (B.Footer = k.ComboboxFooter),
      (B.Header = D.ComboboxHeader),
      (B.EventsTarget = j.ComboboxEventsTarget),
      (B.DropdownTarget = C.ComboboxDropdownTarget),
      (B.Group = S.ComboboxGroup),
      (B.ClearButton = g.ComboboxClearButton),
      (B.HiddenInput = E.ComboboxHiddenInput),
      e.s(["Combobox", () => B], 19824);
    var M = e.i(94681),
      L = e.i(747596);
    function z(e) {
      return "group" in e;
    }
    function F({
      data: e,
      withCheckIcon: o,
      withAlignedLabels: r,
      value: n,
      checkIconPosition: a,
      unstyled: s,
      renderOption: i,
    }) {
      if (!z(e)) {
        var u;
        let c = ((u = e.value), Array.isArray(n) ? n.includes(u) : n === u),
          d =
            o &&
            (c
              ? (0, t.jsx)(M.CheckIcon, {
                  className: T.default.optionsDropdownCheckIcon,
                })
              : r
              ? (0, t.jsx)("div", {
                  className: T.default.optionsDropdownCheckPlaceholder,
                })
              : null),
          p = (0, t.jsxs)(t.Fragment, {
            children: [
              "left" === a && d,
              (0, t.jsx)("span", { children: e.label }),
              "right" === a && d,
            ],
          });
        return (0, t.jsx)(B.Option, {
          value: e.value,
          disabled: e.disabled,
          className: (0, l.default)({ [T.default.optionsDropdownOption]: !s }),
          "data-reverse": "right" === a || void 0,
          "data-checked": c || void 0,
          "aria-selected": c,
          active: c,
          children: "function" == typeof i ? i({ option: e, checked: c }) : p,
        });
      }
      let c = e.items.map((e) =>
        (0, t.jsx)(
          F,
          {
            data: e,
            value: n,
            unstyled: s,
            withCheckIcon: o,
            withAlignedLabels: r,
            checkIconPosition: a,
            renderOption: i,
          },
          e.value
        )
      );
      return (0, t.jsx)(B.Group, { label: e.group, children: c });
    }
    function $({
      data: e,
      hidden: o,
      hiddenWhenEmpty: r,
      filter: n,
      search: a,
      limit: l,
      maxDropdownHeight: s,
      withScrollArea: i = !0,
      filterOptions: u = !0,
      withCheckIcon: c = !1,
      withAlignedLabels: d = !1,
      value: p,
      checkIconPosition: m,
      nothingFoundMessage: b,
      unstyled: f,
      labelId: x,
      renderOption: h,
      scrollAreaProps: v,
      "aria-label": g,
    }) {
      !(function e(t, o = new Set()) {
        if (Array.isArray(t))
          for (let r of t)
            if (z(r)) e(r.items, o);
            else {
              if (void 0 === r.value)
                throw Error(
                  "[@mantine/core] Each option must have value property"
                );
              if ("string" != typeof r.value)
                throw Error(
                  `[@mantine/core] Option value must be a string, other data formats are not supported, got ${typeof r.value}`
                );
              if (o.has(r.value))
                throw Error(
                  `[@mantine/core] Duplicate options are not supported. Option with value "${r.value}" was provided more than once`
                );
              o.add(r.value);
            }
      })(e);
      let w =
          "string" == typeof a
            ? (
                n ||
                function e({ options: t, search: o, limit: r }) {
                  let n = o.trim().toLowerCase(),
                    a = [];
                  for (let l = 0; l < t.length; l += 1) {
                    let s = t[l];
                    if (a.length === r) break;
                    z(s) &&
                      a.push({
                        group: s.group,
                        items: e({
                          options: s.items,
                          search: o,
                          limit: r - a.length,
                        }),
                      }),
                      !z(s) && s.label.toLowerCase().includes(n) && a.push(s);
                  }
                  return a;
                }
              )({ options: e, search: u ? a : "", limit: l ?? 1 / 0 })
            : e,
        C = (function (e) {
          if (0 === e.length) return !0;
          for (let t of e) if (!("group" in t) || t.items.length > 0) return !1;
          return !0;
        })(w),
        y = w.map((e) =>
          (0, t.jsx)(
            F,
            {
              data: e,
              withCheckIcon: c,
              withAlignedLabels: d,
              value: p,
              checkIconPosition: m,
              unstyled: f,
              renderOption: h,
            },
            z(e) ? e.group : e.value
          )
        );
      return (0, t.jsx)(B.Dropdown, {
        hidden: o || (r && C),
        "data-composed": !0,
        children: (0, t.jsxs)(B.Options, {
          labelledBy: x,
          "aria-label": g,
          children: [
            i
              ? (0, t.jsx)(L.ScrollArea.Autosize, {
                  mah: s ?? 220,
                  type: "scroll",
                  scrollbarSize: "var(--combobox-padding)",
                  offsetScrollbars: "y",
                  ...v,
                  children: y,
                })
              : y,
            C && b && (0, t.jsx)(B.Empty, { children: b }),
          ],
        }),
      });
    }
    e.s(["isOptionsGroup", () => z], 8477),
      e.s(["OptionsDropdown", () => $], 537528);
    var V = e.i(578565);
    let H = { withCheckIcon: !0, allowDeselect: !0, checkIconPosition: "left" },
      K = (0, u.factory)((e, l) => {
        let u = (0, i.useProps)("Select", H, e),
          {
            classNames: p,
            styles: m,
            unstyled: b,
            vars: f,
            dropdownOpened: x,
            defaultDropdownOpened: h,
            onDropdownClose: v,
            onDropdownOpen: g,
            onFocus: w,
            onBlur: C,
            onClick: y,
            onChange: j,
            data: k,
            value: S,
            defaultValue: D,
            selectFirstOptionOnChange: E,
            onOptionSubmit: N,
            comboboxProps: O,
            readOnly: R,
            disabled: A,
            filter: T,
            limit: _,
            withScrollArea: I,
            maxDropdownHeight: M,
            size: L,
            searchable: z,
            rightSection: F,
            checkIconPosition: K,
            withCheckIcon: U,
            withAlignedLabels: G,
            nothingFoundMessage: W,
            name: q,
            form: Z,
            searchValue: X,
            defaultSearchValue: Q,
            onSearchChange: Y,
            allowDeselect: J,
            error: ee,
            rightSectionPointerEvents: et,
            id: eo,
            clearable: er,
            clearButtonProps: en,
            hiddenInputProps: ea,
            renderOption: el,
            onClear: es,
            autoComplete: ei,
            scrollAreaProps: eu,
            __defaultRightSection: ec,
            __clearSection: ed,
            __clearable: ep,
            chevronColor: em,
            autoSelectOnBlur: eb,
            attributes: ef,
            ...ex
          } = u,
          eh = (0, o.useMemo)(() => (0, c.getParsedComboboxData)(k), [k]),
          ev = (0, o.useRef)({}),
          eg = (0, o.useMemo)(() => (0, d.getOptionsLockup)(eh), [eh]),
          ew = (0, r.useId)(eo),
          [eC, ey, ej] = (0, n.useUncontrolled)({
            value: S,
            defaultValue: D,
            finalValue: null,
            onChange: j,
          }),
          ek =
            "string" == typeof eC
              ? eC in eg
                ? eg[eC]
                : ev.current[eC]
              : void 0,
          eS = (0, a.usePrevious)(ek),
          [eD, eE, eN] = (0, n.useUncontrolled)({
            value: X,
            defaultValue: Q,
            finalValue: ek ? ek.label : "",
            onChange: Y,
          }),
          eO = (0, P.useCombobox)({
            opened: x,
            defaultOpened: h,
            onDropdownOpen: () => {
              g?.(),
                eO.updateSelectedOptionIndex("active", { scrollIntoView: !0 });
            },
            onDropdownClose: () => {
              v?.(), setTimeout(eO.resetSelectedOption, 0);
            },
          }),
          eR = (e) => {
            eE(e), eO.resetSelectedOption();
          },
          { resolvedClassNames: eA, resolvedStyles: eP } = (0,
          s.useResolvedStylesApi)({ props: u, styles: m, classNames: p });
        (0, o.useEffect)(() => {
          E && eO.selectFirstOption();
        }, [E, eD]),
          (0, o.useEffect)(() => {
            null === S && eR(""),
              "string" == typeof S &&
                ek &&
                (eS?.value !== ek.value || eS?.label !== ek.label) &&
                eR(ek.label);
          }, [S, ek]),
          (0, o.useEffect)(() => {
            ej ||
              eN ||
              eR(
                "string" == typeof eC
                  ? eC in eg
                    ? eg[eC]?.label
                    : ev.current[eC]?.label || ""
                  : ""
              );
          }, [eg, eC]),
          (0, o.useEffect)(() => {
            eC && eC in eg && (ev.current[eC] = eg[eC]);
          }, [eg, eC]);
        let eT = (0, t.jsx)(B.ClearButton, {
            ...en,
            onClear: () => {
              ey(null, null), eR(""), es?.();
            },
          }),
          e_ = er && !!eC && !A && !R;
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsxs)(B, {
              store: eO,
              __staticSelector: "Select",
              classNames: eA,
              styles: eP,
              unstyled: b,
              readOnly: R,
              size: L,
              attributes: ef,
              keepMounted: eb,
              onOptionSubmit: (e) => {
                N?.(e);
                let t = J && eg[e].value === eC ? null : eg[e],
                  o = t ? t.value : null;
                o !== eC && ey(o, t),
                  ej || eR(("string" == typeof o && t?.label) || ""),
                  eO.closeDropdown();
              },
              ...O,
              children: [
                (0, t.jsx)(B.Target, {
                  targetType: z ? "input" : "button",
                  autoComplete: ei,
                  children: (0, t.jsx)(V.InputBase, {
                    id: ew,
                    ref: l,
                    __defaultRightSection: (0, t.jsx)(B.Chevron, {
                      size: L,
                      error: ee,
                      unstyled: b,
                      color: em,
                    }),
                    __clearSection: eT,
                    __clearable: e_,
                    rightSection: F,
                    rightSectionPointerEvents: et || "none",
                    ...ex,
                    size: L,
                    __staticSelector: "Select",
                    disabled: A,
                    readOnly: R || !z,
                    value: eD,
                    onChange: (e) => {
                      eR(e.currentTarget.value),
                        eO.openDropdown(),
                        E && eO.selectFirstOption();
                    },
                    onFocus: (e) => {
                      z && eO.openDropdown(), w?.(e);
                    },
                    onBlur: (e) => {
                      eb && eO.clickSelectedOption(), z && eO.closeDropdown();
                      let t =
                        "string" == typeof eC &&
                        (eC in eg ? eg[eC] : ev.current[eC]);
                      eR((t && t.label) || ""), C?.(e);
                    },
                    onClick: (e) => {
                      z ? eO.openDropdown() : eO.toggleDropdown(), y?.(e);
                    },
                    classNames: eA,
                    styles: eP,
                    unstyled: b,
                    pointer: !z,
                    error: ee,
                    attributes: ef,
                  }),
                }),
                (0, t.jsx)($, {
                  data: eh,
                  hidden: R || A,
                  filter: T,
                  search: eD,
                  limit: _,
                  hiddenWhenEmpty: !W,
                  withScrollArea: I,
                  maxDropdownHeight: M,
                  filterOptions: !!z && ek?.label !== eD,
                  value: eC,
                  checkIconPosition: K,
                  withCheckIcon: U,
                  withAlignedLabels: G,
                  nothingFoundMessage: W,
                  unstyled: b,
                  labelId: ex.label ? `${ew}-label` : void 0,
                  "aria-label": ex.label ? void 0 : ex["aria-label"],
                  renderOption: el,
                  scrollAreaProps: eu,
                }),
              ],
            }),
            (0, t.jsx)(B.HiddenInput, {
              value: eC,
              name: q,
              form: Z,
              disabled: A,
              ...ea,
            }),
          ],
        });
      });
    (K.classes = { ...V.InputBase.classes, ...B.classes }),
      (K.displayName = "@mantine/core/Select"),
      e.s(["Select", () => K], 453165);
  },
]);
