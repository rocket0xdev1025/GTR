(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  277936,
  (e) => {
    "use strict";
    var t = e.i(843476);
    e.i(271645);
    var a = e.i(424848),
      i = e.i(143798);
    e.i(207670);
    var r = e.i(789549),
      s = e.i(314037),
      o = e.i(644662),
      n = e.i(321879),
      l = { root: "m_6d731127" };
    let c = { gap: "md", align: "stretch", justify: "flex-start" },
      d = (0, i.createVarsResolver)((e, { gap: t, align: i, justify: r }) => ({
        root: {
          "--stack-gap": (0, a.getSpacing)(t),
          "--stack-align": i,
          "--stack-justify": r,
        },
      })),
      p = (0, n.factory)((e, a) => {
        let i = (0, r.useProps)("Stack", c, e),
          {
            classNames: n,
            className: p,
            style: u,
            styles: x,
            unstyled: h,
            vars: m,
            align: y,
            justify: g,
            gap: f,
            variant: k,
            attributes: v,
            ...b
          } = i,
          w = (0, s.useStyles)({
            name: "Stack",
            props: i,
            classes: l,
            className: p,
            style: u,
            classNames: n,
            styles: x,
            unstyled: h,
            attributes: v,
            vars: m,
            varsResolver: d,
          });
        return (0, t.jsx)(o.Box, { ref: a, ...w("root"), variant: k, ...b });
      });
    (p.classes = l),
      (p.displayName = "@mantine/core/Stack"),
      e.s(["Stack", () => p], 277936);
  },
  971133,
  (e) => {
    "use strict";
    var t = e.i(843476);
    e.i(271645), e.i(207670);
    var a = e.i(789549),
      i = e.i(314037),
      r = e.i(644662),
      s = e.i(257942),
      o = { root: "m_4451eb3a" };
    let n = (0, s.polymorphicFactory)((e, s) => {
      let n = (0, a.useProps)("Center", null, e),
        {
          classNames: l,
          className: c,
          style: d,
          styles: p,
          unstyled: u,
          vars: x,
          inline: h,
          mod: m,
          attributes: y,
          ...g
        } = n,
        f = (0, i.useStyles)({
          name: "Center",
          props: n,
          classes: o,
          className: c,
          style: d,
          classNames: l,
          styles: p,
          unstyled: u,
          attributes: y,
          vars: x,
        });
      return (0, t.jsx)(r.Box, {
        ref: s,
        mod: [{ inline: h }, m],
        ...f("root"),
        ...g,
      });
    });
    (n.classes = o),
      (n.displayName = "@mantine/core/Center"),
      e.s(["Center", () => n], 971133);
  },
  518716,
  (e) => {
    "use strict";
    let t = (0, e.i(33550).default)("outline", "refresh", "Refresh", [
      ["path", { d: "M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4", key: "svg-0" }],
      ["path", { d: "M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4", key: "svg-1" }],
    ]);
    e.s(["IconRefresh", () => t], 518716);
  },
  294229,
  (e) => {
    "use strict";
    var t = e.i(843476);
    e.i(271645);
    var a = e.i(424848),
      i = e.i(143798);
    e.i(207670);
    var r = e.i(515259),
      s = e.i(19715),
      o = e.i(789549),
      n = e.i(314037),
      l = e.i(644662),
      c = e.i(257942),
      d = { root: "m_b6d8b162" };
    let p = { inherit: !1 },
      u = (0, i.createVarsResolver)(
        (e, { variant: t, lineClamp: i, gradient: o, size: n, color: l }) => ({
          root: {
            "--text-fz": (0, a.getFontSize)(n),
            "--text-lh": (0, a.getLineHeight)(n),
            "--text-gradient":
              "gradient" === t ? (0, s.getGradient)(o, e) : void 0,
            "--text-line-clamp": "number" == typeof i ? i.toString() : void 0,
            "--text-color": l ? (0, r.getThemeColor)(l, e) : void 0,
          },
        })
      ),
      x = (0, c.polymorphicFactory)((e, a) => {
        let i = (0, o.useProps)("Text", p, e),
          {
            lineClamp: r,
            truncate: s,
            inline: c,
            inherit: x,
            gradient: h,
            span: m,
            __staticSelector: y,
            vars: g,
            className: f,
            style: k,
            classNames: v,
            styles: b,
            unstyled: w,
            variant: C,
            mod: P,
            size: S,
            attributes: j,
            ...T
          } = i,
          A = (0, n.useStyles)({
            name: ["Text", y],
            props: i,
            classes: d,
            className: f,
            style: k,
            classNames: v,
            styles: b,
            unstyled: w,
            attributes: j,
            vars: g,
            varsResolver: u,
          });
        return (0, t.jsx)(l.Box, {
          ...A("root", { focusable: !0 }),
          ref: a,
          component: m ? "span" : "p",
          variant: C,
          mod: [
            {
              "data-truncate":
                "start" === s ? "start" : "end" === s || s ? "end" : void 0,
              "data-line-clamp": "number" == typeof r,
              "data-inline": c,
              "data-inherit": x,
            },
            P,
          ],
          size: S,
          ...T,
        });
      });
    (x.classes = d),
      (x.displayName = "@mantine/core/Text"),
      e.s(["Text", () => x], 294229);
  },
  146874,
  (e) => {
    "use strict";
    let t = (0, e.i(33550).default)(
      "outline",
      "alert-triangle",
      "AlertTriangle",
      [
        ["path", { d: "M12 9v4", key: "svg-0" }],
        [
          "path",
          {
            d: "M10.363 3.591l-8.106 13.534a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636 -2.87l-8.106 -13.536a1.914 1.914 0 0 0 -3.274 0z",
            key: "svg-1",
          },
        ],
        ["path", { d: "M12 16h.01", key: "svg-2" }],
      ]
    );
    e.s(["IconAlertTriangle", () => t], 146874);
  },
  11901,
  (e) => {
    "use strict";
    var t = e.i(843476),
      a = e.i(271645),
      i = e.i(524795),
      r = e.i(971133),
      s = e.i(294229),
      o = e.i(533372),
      n = e.i(277936),
      l = e.i(146874),
      c = e.i(518716);
    let d = ({
        error: e,
        resetErrorBoundary: a,
        title: i = "Something went wrong",
        description:
          d = "This section failed to load. We've been notified and are looking into it.",
        className: p = "",
      }) =>
        (0, t.jsx)("div", {
          className: `flex flex-col justify-center min-h-[200px] w-full p-6 bg-white/[0.02] border border-white/5 rounded-2xl ${p}`,
          children: (0, t.jsx)(r.Center, {
            children: (0, t.jsxs)(n.Stack, {
              gap: "md",
              align: "center",
              className: "text-center",
              children: [
                (0, t.jsxs)("div", {
                  className: "relative",
                  children: [
                    (0, t.jsx)("div", {
                      className:
                        "absolute inset-0 bg-red-500/10 blur-2xl rounded-full scale-150",
                    }),
                    (0, t.jsx)("div", {
                      className:
                        "relative p-4 bg-white/[0.03] rounded-2xl border border-white/5",
                      children: (0, t.jsx)(l.IconAlertTriangle, {
                        size: 32,
                        stroke: 1.5,
                        className: "text-red-500/70",
                      }),
                    }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  className: "space-y-1",
                  children: [
                    (0, t.jsx)(s.Text, {
                      fw: 700,
                      size: "lg",
                      className: "text-white",
                      children: i,
                    }),
                    (0, t.jsx)(s.Text, {
                      size: "sm",
                      className: "text-neutral-500 max-w-[280px]",
                      children: d,
                    }),
                  ],
                }),
                a &&
                  (0, t.jsx)(o.Button, {
                    variant: "outline",
                    color: "gray",
                    leftSection: (0, t.jsx)(c.IconRefresh, { size: 16 }),
                    onClick: a,
                    className:
                      "mt-2 border-white/10 hover:bg-white/5 text-white",
                    children: "Retry",
                  }),
              ],
            }),
          }),
        }),
      p = () =>
        (0, t.jsx)("div", {
          className:
            "fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0E0E0E] text-white p-6",
          children: (0, t.jsxs)("div", {
            className: "max-w-md w-full text-center space-y-6",
            children: [
              (0, t.jsxs)("div", {
                className:
                  "relative w-24 h-24 mx-auto flex items-center justify-center",
                children: [
                  (0, t.jsx)("div", {
                    className:
                      "absolute inset-0 bg-yellow-500/20 rounded-full blur-xl animate-pulse",
                  }),
                  (0, t.jsx)(l.IconAlertTriangle, {
                    size: 64,
                    className: "text-yellow-500 relative z-10",
                    stroke: 1.5,
                  }),
                ],
              }),
              (0, t.jsxs)("div", {
                className: "space-y-2",
                children: [
                  (0, t.jsx)("h1", {
                    className: "text-3xl font-bold tracking-tight text-white",
                    children: "Service Unavailable",
                  }),
                  (0, t.jsx)("p", {
                    className: "text-neutral-400 text-lg",
                    children:
                      "We are currently experiencing issues with our authentication provider. Please try again later.",
                  }),
                ],
              }),
              (0, t.jsx)("div", {
                className: "pt-4",
                children: (0, t.jsxs)("button", {
                  onClick: () => window.location.reload(),
                  className:
                    "inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 text-white rounded-lg font-medium transition-colors border border-white/10",
                  children: [
                    (0, t.jsx)(c.IconRefresh, { size: 20 }),
                    (0, t.jsx)("span", { children: "Reload Page" }),
                  ],
                }),
              }),
            ],
          }),
        });
    class u extends a.Component {
      constructor(e) {
        super(e), (this.state = { hasError: !1, error: null });
      }
      static getDerivedStateFromError(e) {
        return { hasError: !0, error: e };
      }
      componentDidCatch(e, t) {
        let { name: a = "ErrorBoundary", onError: r } = this.props;
        (0, i.captureErrorToSentry)(e, `${a}:componentDidCatch`), r && r(e, t);
      }
      componentDidUpdate(e) {
        this.state.hasError &&
          e.triggerReset !== this.props.triggerReset &&
          this.setState({ hasError: !1, error: null });
      }
      render() {
        let { hasError: e, error: a } = this.state,
          { children: i, fallback: r, variant: s = "section" } = this.props;
        if (e && a) {
          let e = () => {
            this.props.onReset && this.props.onReset(),
              this.setState({ hasError: !1, error: null });
          };
          return "function" == typeof r
            ? r({ error: a, resetErrorBoundary: e })
            : r ||
                ("global" === s
                  ? (0, t.jsx)(p, {})
                  : (0, t.jsx)(d, { error: a, resetErrorBoundary: e }));
        }
        return i;
      }
    }
    e.s(
      [
        "default",
        0,
        (e) => {
          let [i, r] = (0, a.useState)(0),
            s = (0, a.useCallback)(() => {
              e.onReset && e.onReset(), r((e) => e + 1);
            }, [e.onReset]);
          return (0, t.jsx)(u, {
            ...e,
            triggerReset: i,
            onReset: s,
            children: e.children,
          });
        },
      ],
      11901
    );
  },
  548184,
  (e) => {
    "use strict";
    var t = e.i(843476),
      a = e.i(736597),
      i = e.i(271645);
    e.i(207670);
    var r = e.i(522442),
      s = e.i(789549),
      o = e.i(819488),
      n = e.i(644662),
      l = e.i(321879),
      c = e.i(174080),
      d = e.i(145500),
      p = e.i(931316);
    function u(e) {
      return e?.current ? e.current.scrollHeight : "auto";
    }
    let x = window.requestAnimationFrame,
      h = {
        transitionDuration: 200,
        transitionTimingFunction: "ease",
        animateOpacity: !0,
      },
      m = (0, l.factory)((e, l) => {
        let {
            children: m,
            in: y,
            transitionDuration: g,
            transitionTimingFunction: f,
            style: k,
            onTransitionEnd: v,
            animateOpacity: b,
            keepMounted: w,
            ...C
          } = (0, s.useProps)("Collapse", h, e),
          P = (0, r.useMantineTheme)(),
          S = (0, a.useReducedMotion)(),
          j = P.respectReducedMotion && S ? 0 : g,
          T = (function ({
            transitionDuration: e,
            transitionTimingFunction: t = "ease",
            onTransitionEnd: a = () => {},
            opened: r,
            keepMounted: s = !1,
          }) {
            let o = (0, i.useRef)(null),
              n = {
                height: 0,
                overflow: "hidden",
                ...(s ? {} : { display: "none" }),
              },
              [l, h] = (0, i.useState)(r ? {} : n),
              m = (e) => {
                (0, c.flushSync)(() => h(e));
              },
              y = (e) => {
                m((t) => ({ ...t, ...e }));
              };
            function g(a) {
              let i =
                e ||
                (function (e) {
                  if (!e || "string" == typeof e) return 0;
                  let t = e / 36;
                  return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10);
                })(a);
              return { transition: `height ${i}ms ${t}, opacity ${i}ms ${t}` };
            }
            (0, d.useDidUpdate)(() => {
              "function" == typeof x &&
                (r
                  ? x(() => {
                      y({
                        willChange: "height",
                        display: "block",
                        overflow: "hidden",
                      }),
                        x(() => {
                          let e = u(o);
                          y({ ...g(e), height: e });
                        });
                    })
                  : x(() => {
                      let e = u(o);
                      y({ ...g(e), willChange: "height", height: e }),
                        x(() => y({ height: 0, overflow: "hidden" }));
                    }));
            }, [r]);
            let f = (e) => {
              if (e.target === o.current && "height" === e.propertyName)
                if (r) {
                  let e = u(o);
                  e === l.height ? m({}) : y({ height: e }), a();
                } else 0 === l.height && (m(n), a());
            };
            return function ({ style: e = {}, refKey: t = "ref", ...a } = {}) {
              let s = a[t],
                n = {
                  "aria-hidden": !r,
                  ...a,
                  [t]: (0, p.mergeRefs)(o, s),
                  onTransitionEnd: f,
                  style: { boxSizing: "border-box", ...e, ...l },
                };
              return (
                i.default.version.startsWith("18")
                  ? r || (n.inert = "")
                  : (n.inert = !r),
                n
              );
            };
          })({
            opened: y,
            transitionDuration: j,
            transitionTimingFunction: f,
            onTransitionEnd: v,
            keepMounted: w,
          });
        return 0 === j
          ? y
            ? (0, t.jsx)(n.Box, { ...C, children: m })
            : null
          : (0, t.jsx)(n.Box, {
              ...T({
                style: {
                  opacity: y || !b ? 1 : 0,
                  transition: b ? `opacity ${j}ms ${f}` : "none",
                  ...(0, o.getStyleObject)(k, P),
                },
                ref: l,
                ...C,
              }),
              children: m,
            });
      });
    (m.displayName = "@mantine/core/Collapse"),
      e.s(["Collapse", () => m], 548184);
  },
  344804,
  (e) => {
    "use strict";
    var t = e.i(843476),
      a = e.i(751937),
      i = e.i(446614),
      r = e.i(682451);
    e.i(271645);
    var s = e.i(594805),
      o = e.i(424848),
      n = e.i(143798);
    e.i(207670);
    var l = e.i(789549),
      c = e.i(314037),
      d = e.i(644662),
      p = e.i(321879),
      u = e.i(384660);
    let [x, h] = (0, u.createSafeContext)(
      "Accordion component was not found in the tree"
    );
    var m = e.i(962881),
      y = e.i(128410),
      g = e.i(825436);
    let [f, k] = (0, u.createSafeContext)(
      "Accordion.Item component was not found in the tree"
    );
    var v = {
      root: "m_9bdbb667",
      panel: "m_df78851f",
      content: "m_4ba554d4",
      itemTitle: "m_8fa820a0",
      control: "m_4ba585b8",
      "control--default": "m_6939a5e9",
      "control--contained": "m_4271d21b",
      label: "m_df3ffa0f",
      chevron: "m_3f35ae96",
      icon: "m_9bd771fe",
      item: "m_9bd7b098",
      "item--default": "m_fe19b709",
      "item--contained": "m_1f921b3b",
      "item--filled": "m_2cdf939a",
      "item--separated": "m_9f59b069",
    };
    let b = (0, p.factory)((e, a) => {
      let {
          classNames: i,
          className: r,
          style: s,
          styles: o,
          vars: n,
          chevron: c,
          icon: p,
          onClick: u,
          onKeyDown: x,
          children: m,
          disabled: f,
          mod: v,
          ...b
        } = (0, l.useProps)("AccordionControl", null, e),
        { value: w } = k(),
        C = h(),
        P = C.isItemActive(w),
        S = "number" == typeof C.order,
        j = `h${C.order}`,
        T = (0, t.jsxs)(g.UnstyledButton, {
          ...b,
          ...C.getStyles("control", {
            className: r,
            classNames: i,
            style: s,
            styles: o,
            variant: C.variant,
          }),
          unstyled: C.unstyled,
          mod: [
            "accordion-control",
            { active: P, "chevron-position": C.chevronPosition, disabled: f },
            v,
          ],
          ref: a,
          onClick: (e) => {
            u?.(e), C.onChange(w);
          },
          type: "button",
          disabled: f,
          "aria-expanded": P,
          "aria-controls": C.getRegionId(w),
          id: C.getControlId(w),
          onKeyDown: (0, y.createScopedKeydownHandler)({
            siblingSelector: "[data-accordion-control]",
            parentSelector: "[data-accordion]",
            activateOnFocus: !1,
            loop: C.loop,
            orientation: "vertical",
            onKeyDown: x,
          }),
          children: [
            (0, t.jsx)(d.Box, {
              component: "span",
              mod: {
                rotate: !C.disableChevronRotation && P,
                position: C.chevronPosition,
              },
              ...C.getStyles("chevron", { classNames: i, styles: o }),
              children: c || C.chevron,
            }),
            (0, t.jsx)("span", {
              ...C.getStyles("label", { classNames: i, styles: o }),
              children: m,
            }),
            p &&
              (0, t.jsx)(d.Box, {
                component: "span",
                mod: { "chevron-position": C.chevronPosition },
                ...C.getStyles("icon", { classNames: i, styles: o }),
                children: p,
              }),
          ],
        });
      return S
        ? (0, t.jsx)(j, {
            ...C.getStyles("itemTitle", { classNames: i, styles: o }),
            children: T,
          })
        : T;
    });
    (b.displayName = "@mantine/core/AccordionControl"), (b.classes = v);
    let w = (0, p.factory)((e, a) => {
      let {
          classNames: i,
          className: r,
          style: s,
          styles: o,
          vars: n,
          value: c,
          mod: p,
          ...u
        } = (0, l.useProps)("AccordionItem", null, e),
        x = h();
      return (0, t.jsx)(f, {
        value: { value: c },
        children: (0, t.jsx)(d.Box, {
          ref: a,
          mod: [{ active: x.isItemActive(c) }, p],
          ...x.getStyles("item", {
            className: r,
            classNames: i,
            styles: o,
            style: s,
            variant: x.variant,
          }),
          ...u,
        }),
      });
    });
    (w.displayName = "@mantine/core/AccordionItem"), (w.classes = v);
    var C = e.i(548184);
    let P = (0, p.factory)((e, a) => {
      let {
          classNames: i,
          className: r,
          style: s,
          styles: o,
          vars: n,
          children: c,
          ...d
        } = (0, l.useProps)("AccordionPanel", null, e),
        { value: p } = k(),
        u = h();
      return (0, t.jsx)(C.Collapse, {
        ref: a,
        ...u.getStyles("panel", {
          className: r,
          classNames: i,
          style: s,
          styles: o,
        }),
        ...d,
        in: u.isItemActive(p),
        transitionDuration: u.transitionDuration ?? 200,
        role: "region",
        id: u.getRegionId(p),
        "aria-labelledby": u.getControlId(p),
        children: (0, t.jsx)("div", {
          ...u.getStyles("content", { classNames: i, styles: o }),
          children: c,
        }),
      });
    });
    (P.displayName = "@mantine/core/AccordionPanel"), (P.classes = v);
    let S = {
        multiple: !1,
        disableChevronRotation: !1,
        chevronPosition: "right",
        variant: "default",
        chevronSize: "auto",
        chevronIconSize: 16,
      },
      j = (0, n.createVarsResolver)(
        (e, { transitionDuration: t, chevronSize: a, radius: i }) => ({
          root: {
            "--accordion-transition-duration": void 0 === t ? void 0 : `${t}ms`,
            "--accordion-chevron-size": void 0 === a ? void 0 : (0, r.rem)(a),
            "--accordion-radius": void 0 === i ? void 0 : (0, o.getRadius)(i),
          },
        })
      );
    function T(e) {
      let r = (0, l.useProps)("Accordion", S, e),
        {
          classNames: o,
          className: n,
          style: p,
          styles: u,
          unstyled: h,
          vars: y,
          children: g,
          multiple: f,
          value: k,
          defaultValue: b,
          onChange: w,
          id: C,
          loop: P,
          transitionDuration: T,
          disableChevronRotation: A,
          chevronPosition: N,
          chevronSize: L,
          order: _,
          chevron: H,
          variant: D,
          radius: M,
          chevronIconSize: E,
          attributes: B,
          ...V
        } = r,
        O = (0, a.useId)(C),
        [R, I] = (0, i.useUncontrolled)({
          value: k,
          defaultValue: b,
          finalValue: f ? [] : null,
          onChange: w,
        }),
        F = (0, c.useStyles)({
          name: "Accordion",
          classes: v,
          props: r,
          className: n,
          style: p,
          classNames: o,
          styles: u,
          unstyled: h,
          attributes: B,
          vars: y,
          varsResolver: j,
        });
      return (0, t.jsx)(x, {
        value: {
          isItemActive: (e) => (Array.isArray(R) ? R.includes(e) : e === R),
          onChange: (e) => {
            I(
              Array.isArray(R)
                ? R.includes(e)
                  ? R.filter((t) => t !== e)
                  : [...R, e]
                : e === R
                ? null
                : e
            );
          },
          getControlId: (0, s.getSafeId)(
            `${O}-control`,
            "Accordion.Item component was rendered with invalid value or without value"
          ),
          getRegionId: (0, s.getSafeId)(
            `${O}-panel`,
            "Accordion.Item component was rendered with invalid value or without value"
          ),
          chevron:
            null === H
              ? null
              : H || (0, t.jsx)(m.AccordionChevron, { size: E }),
          transitionDuration: T,
          disableChevronRotation: A,
          chevronPosition: N,
          order: _,
          loop: P,
          getStyles: F,
          variant: D,
          unstyled: h,
        },
        children: (0, t.jsx)(d.Box, {
          ...F("root"),
          id: O,
          ...V,
          variant: D,
          "data-accordion": !0,
          children: g,
        }),
      });
    }
    (T.extend = (e) => e),
      (T.withProps = (0, p.getWithProps)(T)),
      (T.classes = v),
      (T.displayName = "@mantine/core/Accordion"),
      (T.Item = w),
      (T.Panel = P),
      (T.Control = b),
      (T.Chevron = m.AccordionChevron),
      e.s(["Accordion", () => T], 344804);
  },
  159973,
  409159,
  (e) => {
    "use strict";
    var t = e.i(843476),
      a = e.i(890357),
      i = e.i(974010),
      r = e.i(744125),
      s = e.i(946396),
      o = e.i(541473);
    let n = (0, e.i(33550).default)(
      "outline",
      "brand-planetscale",
      "BrandPlanetscale",
      [
        [
          "path",
          {
            d: "M20.993 11.63a9 9 0 0 1 -9.362 9.362l9.362 -9.362z",
            key: "svg-0",
          },
        ],
        [
          "path",
          {
            d: "M12 3a9.001 9.001 0 0 1 8.166 5.211l-11.955 11.955a9 9 0 0 1 3.789 -17.166z",
            key: "svg-1",
          },
        ],
        ["path", { d: "M12 12l-6 6", key: "svg-2" }],
      ]
    );
    var l = e.i(618566),
      c = e.i(271645),
      d = e.i(346944);
    let p = (0, c.createContext)(void 0);
    e.s(
      [
        "MuxProvider",
        0,
        ({ children: e }) => {
          let u = (0, c.useRef)(null),
            x = (0, c.useRef)({}),
            { setTrackersOrder: h, trackersOrder: m } = (0, a.useProfileStore)(
              (0, d.useShallow)((e) => ({
                setTrackersOrder: e.setTrackersOrder,
                trackersOrder: e.trackersOrder,
              }))
            ),
            { authenticated: y } = (0, o.usePrivy)(),
            g = (0, l.usePathname)(),
            f = (0, c.useRef)(m),
            k = (0, c.useRef)(h);
          (0, c.useEffect)(() => {
            (f.current = m), (k.current = h);
          }, [m, h]);
          let [v, b] = (0, c.useState)(null),
            [w, C] = (0, c.useState)(!1),
            P = (0, c.useRef)(!1),
            S = (0, c.useRef)(new Map()),
            j = (0, c.useCallback)((e) => {
              u.current?.readyState === WebSocket.OPEN &&
                u.current.send(JSON.stringify(e));
            }, []),
            T = (0, c.useCallback)(
              ({ roomName: e, type: t = "unsubscribe" }) => {
                u.current?.readyState === WebSocket.OPEN &&
                  u.current.send(JSON.stringify({ type: t, roomName: e }));
              },
              []
            ),
            A = (0, c.useCallback)((e, t) => {
              x.current[e] || (x.current[e] = []), x.current[e].push(t);
            }, []),
            N = (0, c.useCallback)((e, t) => {
              x.current[e] &&
                (x.current[e] = x.current[e].filter((e) => e !== t));
            }, []),
            L = (0, c.useCallback)((e, t) => {
              u.current?.readyState === WebSocket.OPEN &&
                u.current.send(
                  JSON.stringify({
                    type: "rwaPerps",
                    message: "subscribe",
                    subType: "graph",
                    identifier: t,
                    body: e,
                  })
                );
            }, []),
            _ = (0, c.useCallback)((e) => {
              if (u.current?.readyState === WebSocket.OPEN) {
                u.current.send(
                  JSON.stringify({
                    type: "rwaPerps",
                    message: "unsubscribe",
                    subType: "graph",
                    identifier: e,
                  })
                );
                let t = [];
                S.current.forEach((e, a) => {
                  "rwaPerps" === e.type && "graph" === e.subType && t.push(a);
                }),
                  t.forEach((e) => S.current.delete(e));
              }
            }, []),
            H = (0, c.useCallback)((e) => {
              let a = localStorage.getItem("newsTrackerSettings"),
                {
                  enableBlogs: i,
                  enableTwitter: s,
                  enableSound: o,
                  enableNotifications: l,
                } = a
                  ? JSON.parse(a)
                  : { enableBlogs: !1, enableTwitter: !1, enableSound: !1 };
              if (
                (i && e?.data?.streamName === "Blogs") ||
                (s && e?.data?.streamName === "Twitter")
              )
                return;
              let {
                eventType: c,
                eventSourceName: d,
                twitterUsername: p,
              } = e?.data ?? {};
              l &&
                (0, r.notifyNewsToast)({
                  message: (0, t.jsxs)("div", {
                    className:
                      "flex justify-center text-white items-center gap-1 font-medium",
                    children: [
                      (0, t.jsx)(n, {}),
                      "Incoming ",
                      "Blogs" === c
                        ? "blog"
                        : "Twitter" === c
                        ? "tweet"
                        : "news",
                      " from",
                      " ",
                      (0, t.jsx)("span", {
                        className: "font-semibold",
                        children:
                          "Twitter" === c && p ? p : "Blogs" === c && d ? d : c,
                      }),
                    ],
                  }),
                  action: () => {
                    f.current.includes("newsTracker") ||
                      k.current(["newsTracker", ...f.current]);
                  },
                }),
                o &&
                  new Audio(
                    "https://getrabbit.nyc3.cdn.digitaloceanspaces.com/website-assets/notification.mp3"
                  )
                    .play()
                    .catch((e) => {});
            }, []);
          (0, c.useEffect)(() => {
            let e,
              t,
              a,
              r = async () => {
                let o = await (0, s.getAccessToken)();
                (u.current = e =
                  new WebSocket("wss://api.gtr.trade/", [`Bearer-${o}`])),
                  (e.onopen = () => {
                    C(!0),
                      (a = setInterval(() => {
                        u.current?.readyState === WebSocket.OPEN &&
                          e.send(JSON.stringify({ method: "ping" }));
                      }, 1e4));
                  }),
                  (e.onclose = () => {
                    C(!1), clearInterval(a), (t = setTimeout(() => r(), 2e3));
                  }),
                  (e.onmessage = (e) => {
                    let t = JSON.parse(e.data);
                    if (
                      (t?.type === "feed" &&
                        P.current &&
                        (b(t), (0, i.checkIsMobile)(1024) || H(t)),
                      t?.type === "new_message_room_discussion" &&
                        t?.roomName &&
                        x.current[t?.roomName] &&
                        x.current[t?.roomName].forEach((e) =>
                          e(t?.discussions)
                        ),
                      t?.type === "userCryptoPerpsTracker" &&
                        (t?.subType === "portfolio" ||
                          t?.subType === "userFills") &&
                        x?.current?.[t?.subType] &&
                        x?.current?.[t?.subType]?.forEach((e) => e(t)),
                      t?.type === "portfolio_update" &&
                        x.current.portfolio_update &&
                        x.current.portfolio_update.forEach((e) => e(t)),
                      t?.type === "trades_feed" &&
                        x.current.trades_feed &&
                        x.current.trades_feed.forEach((e) => e(t)),
                      t?.type === "rwaPerps")
                    ) {
                      let e =
                        t?.message === "data" && t?.identifier
                          ? `rwaPerps.data.${t.identifier}`
                          : "rwaPerps.data";
                      x.current[e] && x.current[e].forEach((e) => e(t));
                    }
                  });
              };
            return (
              y && r(),
              () => {
                clearTimeout(t), clearInterval(a), e?.close();
              }
            );
          }, [y]),
            (0, c.useEffect)(() => {
              P.current = g?.includes("/trade/");
            }, [g]);
          let D = (0, c.useMemo)(
            () => ({
              isConnected: w,
              subscribe: j,
              unsubscribe: T,
              messageEvent: A,
              removeListener: N,
              message: v,
              setMessage: b,
              triggerNotification: H,
              subscribeToRWAPerpsGraph: L,
              unsubscribeFromRWAPerpsGraph: _,
            }),
            [w, j, T, A, N, v, b, H, L, _]
          );
          return (0, t.jsx)(p.Provider, { value: D, children: e });
        },
        "WsContext",
        0,
        p,
      ],
      409159
    ),
      e.s(
        [
          "useMuxSocket",
          0,
          () => {
            let e = (0, c.useContext)(p);
            if (!e) throw Error("useMuxSocket must be used within MuxProvider");
            return e;
          },
        ],
        159973
      );
  },
  144492,
  737716,
  (e) => {
    "use strict";
    var t = e.i(33550);
    let a = (0, t.default)("outline", "download", "Download", [
      [
        "path",
        { d: "M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2", key: "svg-0" },
      ],
      ["path", { d: "M7 11l5 5l5 -5", key: "svg-1" }],
      ["path", { d: "M12 4l0 12", key: "svg-2" }],
    ]);
    e.s(["IconDownload", () => a], 144492);
    let i = (0, t.default)("outline", "upload", "Upload", [
      [
        "path",
        { d: "M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2", key: "svg-0" },
      ],
      ["path", { d: "M7 9l5 -5l5 5", key: "svg-1" }],
      ["path", { d: "M12 4l0 12", key: "svg-2" }],
    ]);
    e.s(["IconUpload", () => i], 737716);
  },
  447519,
  (e) => {
    "use strict";
    var t = e.i(768834),
      a = e.i(579473);
    let i = (0, t.create)()(
      (0, a.persist)(
        (e) => ({
          walletTrackers: [],
          selectedWalletTracker: "",
          setWalletTrackers: (t) => e(() => ({ walletTrackers: t })),
          setSelectedWalletTracker: (t) =>
            e(() => ({ selectedWalletTracker: t })),
          resetStore: () =>
            e(() => ({ walletTrackers: [], selectedWalletTracker: "" })),
        }),
        { name: "tracker-storage", skipHydration: !0 }
      )
    );
    e.s(["useTrackerStore", 0, i]);
  },
  17024,
  (e) => {
    "use strict";
    var t = e.i(843476),
      a = e.i(843464),
      i = e.i(974010),
      r = e.i(734616);
    e.s([
      "default",
      0,
      ({
        icon: e,
        chainIcon: s = "",
        iconClassName: o = "",
        chainIconClassName: n = "",
        badgeIconClassName: l = "",
        verified: c = !1,
        symbol: d = "",
      }) =>
        (0, t.jsxs)("div", {
          className: "relative flex",
          children: [
            (0, t.jsx)(r.Avatar, {
              src: e || "",
              alt: d,
              className: `rounded-full w-6 h-6 min-w-6 text-[10px] font-bold ${o}`,
              color: "gray",
              children: (0, i.getInitials)(d),
            }),
            s
              ? (0, t.jsx)("img", {
                  src: s,
                  alt: "->",
                  className: `rounded-full w-4 h-4 absolute -top-1 -right-1 bg-black p-0.5 ${n}`,
                })
              : null,
            c
              ? (0, t.jsx)("img", {
                  src: a.default.src,
                  alt: "->",
                  className: `w-4 h-4 absolute -bottom-1 -right-1 ${l}`,
                })
              : null,
          ],
        }),
    ]);
  },
  796682,
  (e) => {
    "use strict";
    var t = e.i(843476),
      a = e.i(184086),
      i = e.i(843464);
    e.s([
      "default",
      0,
      ({ width: e = 16 }) =>
        (0, t.jsx)(a.Tooltip, {
          label: "Verified",
          style: { fontSize: 12 },
          children: (0, t.jsx)("img", {
            src: i.default.src,
            alt: "verified",
            style: { width: e },
          }),
        }),
    ]);
  },
  918676,
  (e) => {
    "use strict";
    var t = e.i(843476),
      a = e.i(700653),
      i = e.i(2710),
      r = e.i(618566);
    let s = (e) =>
        (0, t.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 24 24",
          fill: "currentColor",
          ...e,
          children: (0, t.jsx)("path", {
            d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z",
          }),
        }),
      o = (e) =>
        (0, t.jsx)("svg", {
          width: "15",
          height: "17",
          viewBox: "0 0 15 17",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: (0, t.jsx)("path", {
            d: "M5.08333 6.04167L0.875 3.6875L7.5 0L14.125 3.6875L9.91667 6.04167C9.59722 5.70833 9.22917 5.45139 8.8125 5.27083C8.39583 5.09028 7.95833 5 7.5 5C7.04167 5 6.60417 5.09028 6.1875 5.27083C5.77083 5.45139 5.40278 5.70833 5.08333 6.04167ZM6.66667 16.2083L0 12.5V5.10417L4.27083 7.5C4.22917 7.63889 4.20139 7.77431 4.1875 7.90625C4.17361 8.03819 4.16667 8.18056 4.16667 8.33333C4.16667 9.09722 4.39583 9.77778 4.85417 10.375C5.3125 10.9722 5.91667 11.3681 6.66667 11.5625V16.2083ZM7.5 10C7.04167 10 6.64931 9.83681 6.32292 9.51042C5.99653 9.18403 5.83333 8.79167 5.83333 8.33333C5.83333 7.875 5.99653 7.48264 6.32292 7.15625C6.64931 6.82986 7.04167 6.66667 7.5 6.66667C7.95833 6.66667 8.35069 6.82986 8.67708 7.15625C9.00347 7.48264 9.16667 7.875 9.16667 8.33333C9.16667 8.79167 9.00347 9.18403 8.67708 9.51042C8.35069 9.83681 7.95833 10 7.5 10ZM8.33333 16.2083V11.5625C9.08333 11.3681 9.6875 10.9722 10.1458 10.375C10.6042 9.77778 10.8333 9.09722 10.8333 8.33333C10.8333 8.18056 10.8264 8.03819 10.8125 7.90625C10.7986 7.77431 10.7708 7.63889 10.7292 7.5L15 5.10417V12.5L8.33333 16.2083Z",
            fill: "#A684FF",
          }),
        }),
      n = (e) =>
        (0, t.jsx)("svg", {
          width: "17",
          height: "14",
          viewBox: "0 0 17 14",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: (0, t.jsx)("path", {
            d: "M4.16667 13.3333L0 9.16667L4.16667 5L5.33333 6.1875L3.1875 8.33333H9.16667V10H3.1875L5.33333 12.1458L4.16667 13.3333ZM12.5 8.33333L11.3333 7.14583L13.4792 5H7.5V3.33333H13.4792L11.3333 1.1875L12.5 0L16.6667 4.16667L12.5 8.33333Z",
            fill: "#A684FF",
          }),
        }),
      l = (e) =>
        (0, t.jsxs)("svg", {
          width: "20",
          height: "20",
          viewBox: "0 0 20 20",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [
            (0, t.jsx)("g", {
              clipPath: "url(#clip0_3661_13469)",
              children: (0, t.jsx)("path", {
                d: "M4.1665 14.1663V8.33301H5.83317V14.1663H4.1665ZM9.1665 14.1663V8.33301H10.8332V14.1663H9.1665ZM1.6665 6.66634V4.99967L9.99984 0.833008L18.3332 4.99967V6.66634H1.6665ZM1.6665 17.4997V15.833H11.7082C11.7359 16.1247 11.7707 16.4059 11.8123 16.6768C11.854 16.9476 11.9165 17.2219 11.9998 17.4997H1.6665ZM14.1665 11.0413V8.33301H15.8332V10.208L14.1665 11.0413ZM16.6665 19.9997C15.7082 19.7636 14.913 19.2115 14.2811 18.3434C13.6491 17.4754 13.3332 16.5136 13.3332 15.458V13.333L16.6665 11.6663L19.9998 13.333V15.458C19.9998 16.5136 19.6839 17.4754 19.0519 18.3434C18.42 19.2115 17.6248 19.7636 16.6665 19.9997ZM16.0623 17.4997L18.9582 14.6247L18.0832 13.7497L16.0623 15.7288L15.2498 14.9163L14.3748 15.8122L16.0623 17.4997Z",
                fill: "#8EC5FF",
              }),
            }),
            (0, t.jsx)("defs", {
              children: (0, t.jsx)("clipPath", {
                id: "clip0_3661_13469",
                children: (0, t.jsx)("rect", {
                  width: "20",
                  height: "20",
                  fill: "white",
                }),
              }),
            }),
          ],
        }),
      c = (e) =>
        (0, t.jsx)("svg", {
          width: "12",
          height: "14",
          viewBox: "0 0 12 14",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          children: (0, t.jsx)("path", {
            d: "M1.66667 13.3333V11.6667H0V1.66667H1.66667V0H3.33333V1.66667H5V11.6667H3.33333V13.3333H1.66667ZM8.33333 13.3333V9.16667H6.66667V3.33333H8.33333V0H10V3.33333H11.6667V9.16667H10V13.3333H8.33333Z",
            fill: "currentcolor",
          }),
        }),
      d = (e) =>
        (0, t.jsx)("svg", {
          width: "20",
          height: "20",
          viewBox: "0 0 20 20",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: (0, t.jsx)("path", {
            d: "M10 13.3333C9.54167 13.3333 9.14931 13.1701 8.82292 12.8438C8.49653 12.5174 8.33333 12.125 8.33333 11.6667C8.33333 11.2083 8.49653 10.816 8.82292 10.4896C9.14931 10.1632 9.54167 10 10 10C10.4583 10 10.8507 10.1632 11.1771 10.4896C11.5035 10.816 11.6667 11.2083 11.6667 11.6667C11.6667 12.125 11.5035 12.5174 11.1771 12.8438C10.8507 13.1701 10.4583 13.3333 10 13.3333ZM6.14583 5.83333H13.8542L15.5208 2.5H4.47917L6.14583 5.83333ZM7 17.5H13C14.25 17.5 15.3125 17.066 16.1875 16.1979C17.0625 15.3299 17.5 14.2639 17.5 13C17.5 12.4722 17.4097 11.9583 17.2292 11.4583C17.0486 10.9583 16.7917 10.5069 16.4583 10.1042L14.2917 7.5H5.70833L3.54167 10.1042C3.20833 10.5069 2.95139 10.9583 2.77083 11.4583C2.59028 11.9583 2.5 12.4722 2.5 13C2.5 14.2639 2.93403 15.3299 3.80208 16.1979C4.67014 17.066 5.73611 17.5 7 17.5Z",
            fill: "currentColor",
          }),
        }),
      p = (e) =>
        (0, t.jsx)("svg", {
          width: "20",
          height: "20",
          viewBox: "0 0 20 20",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: (0, t.jsx)("path", {
            d: "M15.8335 7.49967C15.0418 7.49967 14.3543 7.26356 13.771 6.79134C13.1877 6.31912 12.7988 5.7219 12.6043 4.99967H7.37516C7.22239 5.58301 6.93419 6.08648 6.51058 6.51009C6.08697 6.9337 5.5835 7.2219 5.00016 7.37467V12.6038C5.72238 12.7983 6.31961 13.1872 6.79183 13.7705C7.26405 14.3538 7.50016 15.0413 7.50016 15.833C7.50016 16.7497 7.17377 17.5344 6.521 18.1872C5.86822 18.84 5.0835 19.1663 4.16683 19.1663C3.25016 19.1663 2.46544 18.84 1.81266 18.1872C1.15988 17.5344 0.833496 16.7497 0.833496 15.833C0.833496 15.0413 1.06961 14.3538 1.54183 13.7705C2.01405 13.1872 2.61127 12.7983 3.3335 12.6038V7.37467C2.61127 7.18023 2.01405 6.79134 1.54183 6.20801C1.06961 5.62467 0.833496 4.94412 0.833496 4.16634C0.833496 3.24967 1.15988 2.46495 1.81266 1.81217C2.46544 1.1594 3.25016 0.833008 4.16683 0.833008C4.94461 0.833008 5.62516 1.06912 6.2085 1.54134C6.79183 2.01356 7.18072 2.61079 7.37516 3.33301H12.6043C12.7988 2.61079 13.1877 2.01356 13.771 1.54134C14.3543 1.06912 15.0418 0.833008 15.8335 0.833008C16.7502 0.833008 17.5349 1.1594 18.1877 1.81217C18.8404 2.46495 19.1668 3.24967 19.1668 4.16634C19.1668 5.08301 18.8404 5.86773 18.1877 6.52051C17.5349 7.17329 16.7502 7.49967 15.8335 7.49967ZM15.8335 19.1663C14.9168 19.1663 14.1321 18.84 13.4793 18.1872C12.8266 17.5344 12.5002 16.7497 12.5002 15.833C12.5002 14.9163 12.8266 14.1316 13.4793 13.4788C14.1321 12.8261 14.9168 12.4997 15.8335 12.4997C16.7502 12.4997 17.5349 12.8261 18.1877 13.4788C18.8404 14.1316 19.1668 14.9163 19.1668 15.833C19.1668 16.7497 18.8404 17.5344 18.1877 18.1872C17.5349 18.84 16.7502 19.1663 15.8335 19.1663Z",
            fill: "currentColor",
          }),
        }),
      u = (e) =>
        (0, t.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 24 24",
          fill: "currentColor",
          ...e,
          children: (0, t.jsx)("path", {
            d: "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z",
          }),
        }),
      x = ({ icon: e, title: a, description: i, color: r, onClick: s }) =>
        (0, t.jsxs)("div", {
          onClick: s,
          className: `${
            "purple" === r
              ? "bg-[#262234] hover:bg-[#262234]/80"
              : "bg-[#1C2331] hover:bg-[#1C2331]/80"
          } p-4 rounded-xl flex items-center justify-between cursor-pointer transition-colors group`,
          children: [
            (0, t.jsxs)("div", {
              className: "flex items-center gap-4",
              children: [
                (0, t.jsx)("div", {
                  className: "bg-[#171717] p-3 rounded-lg",
                  children: e,
                }),
                (0, t.jsxs)("div", {
                  children: [
                    (0, t.jsx)("h4", {
                      className: "font-medium text-white",
                      children: a,
                    }),
                    (0, t.jsx)("p", {
                      className: "text-xs text-[#a1a1a1]",
                      children: i,
                    }),
                  ],
                }),
              ],
            }),
            (0, t.jsx)(u, {
              className:
                "w-5 h-5 text-[#a1a1a1] group-hover:text-white transition-colors",
            }),
          ],
        }),
      h = ({ icon: e, title: a, description: i, onClick: r }) =>
        (0, t.jsxs)("div", {
          onClick: r,
          className:
            "flex items-center justify-between p-3 rounded-lg cursor-pointer hover:bg-[#2C2B19] border border-transparent transition-all group",
          children: [
            (0, t.jsxs)("div", {
              className: "flex items-center gap-3",
              children: [
                (0, t.jsx)("div", {
                  className:
                    "p-2 rounded-md bg-[#262626] group-hover:bg-[#171717] transition-colors text-neutral-300 group-hover:text-[#FFEE8E]",
                  children: e,
                }),
                (0, t.jsxs)("div", {
                  children: [
                    (0, t.jsx)("h4", {
                      className: "font-medium text-white",
                      children: a,
                    }),
                    (0, t.jsx)("p", {
                      className: "text-xs text-[#a1a1a1]",
                      children: i,
                    }),
                  ],
                }),
              ],
            }),
            (0, t.jsx)(u, {
              className:
                "w-4 h-4 text-gray-600 group-hover:text-white transition-colors",
            }),
          ],
        });
    e.s([
      "default",
      0,
      ({ opened: e, close: u }) => {
        let m = (0, r.useRouter)();
        return (0, t.jsx)(i.Drawer, {
          opened: e,
          position: "right",
          onClose: u,
          withCloseButton: !1,
          size: "md",
          offset: 8,
          classNames: {
            body: "!rounded-xl !p-0 !overflow-hidden !bg-[#0a0a0a] ",
            content: "!rounded-xl !bg-[#0a0a0a] border-4 border-neutral-900",
            overlay: "!bg-black/50 !backdrop-blur-sm",
          },
          children: (0, t.jsxs)("div", {
            className:
              "flex flex-col h-full text-white p-5 overflow-y-auto !rounded-xl",
            children: [
              (0, t.jsxs)("div", {
                className: "flex items-center justify-between mb-4",
                children: [
                  (0, t.jsx)("h2", {
                    className: "text-lg font-semibold",
                    children: "Choose Deposit Method",
                  }),
                  (0, t.jsx)("button", {
                    onClick: u,
                    className:
                      "text-gray-400 hover:text-white transition-colors",
                    children: (0, t.jsx)(s, { className: "w-6 h-6" }),
                  }),
                ],
              }),
              (0, t.jsxs)("div", {
                className: "mb-4",
                children: [
                  (0, t.jsx)("h3", {
                    className: "text-sm text-[#D4D4D4] mb-2",
                    children: "Have Crypto Already?",
                  }),
                  (0, t.jsxs)("div", {
                    className: "space-y-2",
                    children: [
                      (0, t.jsx)(x, {
                        icon: (0, t.jsx)(o, {
                          className: "w-6 h-6 text-[#A855F7]",
                        }),
                        title: "Deposit Crypto",
                        description: "Move your crypto here to start trading",
                        color: "purple",
                        onClick: () => {
                          m.push("/deposit"), u();
                        },
                      }),
                      (0, t.jsx)(x, {
                        icon: (0, t.jsx)(n, {
                          className: "w-6 h-6 text-[#A855F7]",
                        }),
                        title: "Convert Crypto",
                        description: "Move your crypto here to start trading",
                        color: "purple",
                        onClick: () => {
                          m.push("/convert"), u();
                        },
                      }),
                    ],
                  }),
                ],
              }),
              (0, t.jsxs)("div", {
                children: [
                  (0, t.jsx)("h3", {
                    className: "text-xs text-neutral-300 mb-2",
                    children: "New to Crypto?",
                  }),
                  (0, t.jsx)(x, {
                    icon: (0, t.jsx)(l, {
                      className: "w-6 h-6 text-[#3B82F6]",
                    }),
                    title: "Buy with Card",
                    description: "Buy crypto using card or local payments",
                    color: "blue",
                    onClick: () => {
                      m.push("/buy"), u();
                    },
                  }),
                ],
              }),
              (0, t.jsx)(a.Divider, {
                variant: "dotted",
                className: "border-neutral-800 my-5",
              }),
              (0, t.jsxs)("div", {
                children: [
                  (0, t.jsxs)("div", {
                    className: "mb-3",
                    children: [
                      (0, t.jsx)("h3", {
                        className:
                          "text-base font-medium uppercase text-neutral-300",
                        children: "FAST FORWARD",
                      }),
                      (0, t.jsx)("p", {
                        className: "text-sm text-neutral-500",
                        children: "One click deposit to any GTR.Trade product",
                      }),
                    ],
                  }),
                  (0, t.jsxs)("div", {
                    className:
                      "border border-[#2A2A35] rounded-xl p-2 bg-[#101114]",
                    children: [
                      (0, t.jsx)(h, {
                        icon: (0, t.jsx)(c, { className: "w-5 h-5" }),
                        title: "Crypto Perpetuals",
                        description: "Trade perpetual futures with leverage",
                        onClick: () => {
                          m.push("/deposit?token=usdc&network=hyperliquid"),
                            u();
                        },
                      }),
                      (0, t.jsx)(h, {
                        icon: (0, t.jsx)(d, {
                          className: "w-5 h-5 text-gray-400",
                        }),
                        title: "Spot Market",
                        description: "Trade tokens on the spot market",
                        onClick: () => {
                          m.push("/deposit?token=usdc&network=hyperliquid"),
                            u();
                        },
                      }),
                      (0, t.jsx)(h, {
                        icon: (0, t.jsx)(p, {
                          className: "w-5 h-5 text-gray-400",
                        }),
                        title: "Onchain Trading",
                        description: "Trade on-chain tokens across networks",
                        onClick: () => {
                          m.push("/deposit?token=usdc&network=solana"), u();
                        },
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      },
    ]);
  },
  393612,
  (e) => {
    "use strict";
    var t = e.i(768834),
      a = e.i(579473);
    let i = {
        socialCryptoPerpsValue: 0,
        socialCryptoPerpsPnl: 0,
        socialCryptoPerpsWithdrawable: 0,
        socialCryptoAvailableToTrade: 0,
        socialCryptoPerpsHasLoaded: !1,
        socialSpotValue: 0,
        socialSpotPnl: 0,
        socialSpotAvailable: 0,
        socialSpotHasLoaded: !1,
        socialAltcoinsValue: 0,
        socialAltcoinsPnl: 0,
        socialAltcoinsHasLoaded: !1,
        socialRwaValue: 0,
        socialRwaPnl: 0,
        socialRwaHasLoaded: !1,
        socialAssetPositionsRWAPerps: [],
        socialCompletedTradesRWAPerps: [],
        socialInvestedGraph: null,
        socialPortfolioTotalValue: 0,
        socialPortfolioChangeAmount: 0,
        socialPortfolioChangePercent: 0,
        socialPortfolioHasLoaded: !1,
        socialAssetPositionsHL: [],
        socialMyCryptoTokens: [],
        socialCompletedOnchainTrades: [],
        socialHoldingsData: {
          totalInvested: 0,
          totalGains: 0,
          gainInPercent: 0,
        },
        socialHoldings: {},
        socialAllUsdcBalances: [],
      },
      r = (e, t) => {
        let a = t.cryptoPerps?.value ?? e.socialCryptoPerpsValue,
          i = t.cryptoPerps?.pnl ?? e.socialCryptoPerpsPnl,
          r = t.spot?.value ?? e.socialSpotValue,
          s = t.spot?.pnl ?? e.socialSpotPnl,
          o = t.altcoins?.value ?? e.socialAltcoinsValue,
          n = t.altcoins?.pnl ?? e.socialAltcoinsPnl,
          l = t.rwa?.value ?? e.socialRwaValue,
          c = t.rwa?.pnl ?? e.socialRwaPnl,
          d = (a || 0) + (r || 0) + (o || 0) + (l || 0),
          p = (i || 0) + (s || 0) + (n || 0) + (c || 0),
          u = d - p;
        return {
          totalValue: d,
          totalPnl: p,
          changePercent: 0 !== u ? (p / u) * 100 : 0,
        };
      },
      s = (0, t.create)()(
        (0, a.persist)(
          (e, t) => ({
            ...i,
            setSocialAssetPositionsHL: (t) => {
              e({ socialAssetPositionsHL: t });
            },
            setSocialCompletedTradesRWAPerps: (t) => {
              e({ socialCompletedTradesRWAPerps: t });
            },
            setSocialInvestedGraph: (t) => {
              e({ socialInvestedGraph: t });
            },
            setSocialMyCryptoTokens: (t) => {
              e({ socialMyCryptoTokens: t });
            },
            setSocialCryptoTokens: (t) => {
              e({ socialMyCryptoTokens: t });
            },
            setSocialHoldingsData: (t) => {
              e({ socialHoldingsData: t });
            },
            setSocialHoldings: (t) => {
              e({ socialHoldings: t });
            },
            setSocialAllUsdcBalances: (t) => {
              e({ socialAllUsdcBalances: t });
            },
            setSocialCompletedOnchainTrades: (t) => {
              e({ socialCompletedOnchainTrades: t });
            },
            setSocialCryptoPerpsData: (a) => {
              let i = t(),
                {
                  totalValue: s,
                  totalPnl: o,
                  changePercent: n,
                } = r(i, { cryptoPerps: a });
              e({
                socialCryptoPerpsValue: a.value,
                socialCryptoPerpsPnl: a.pnl,
                socialCryptoPerpsWithdrawable: a.withdrawable,
                socialCryptoAvailableToTrade: a.availableToTrade,
                socialCryptoPerpsHasLoaded: !0,
                socialPortfolioTotalValue: s,
                socialPortfolioChangeAmount: o,
                socialPortfolioChangePercent: n,
                socialPortfolioHasLoaded:
                  i.socialSpotHasLoaded &&
                  i.socialRwaHasLoaded &&
                  i.socialAltcoinsHasLoaded,
              });
            },
            setSocialSpotData: (a) => {
              let i = t(),
                {
                  totalValue: s,
                  totalPnl: o,
                  changePercent: n,
                } = r(i, { spot: a });
              e({
                socialSpotValue: a.value,
                socialSpotPnl: a.pnl,
                socialSpotAvailable: a.available,
                socialSpotHasLoaded: !0,
                socialPortfolioTotalValue: s,
                socialPortfolioChangeAmount: o,
                socialPortfolioChangePercent: n,
                socialPortfolioHasLoaded:
                  i.socialCryptoPerpsHasLoaded &&
                  i.socialRwaHasLoaded &&
                  i.socialAltcoinsHasLoaded,
              });
            },
            setSocialRwaData: (a) => {
              let i = t(),
                {
                  totalValue: s,
                  totalPnl: o,
                  changePercent: n,
                } = r(i, { rwa: a });
              e({
                socialRwaValue: a.value,
                socialRwaPnl: a.pnl,
                socialRwaHasLoaded: !0,
                socialPortfolioTotalValue: s,
                socialPortfolioChangeAmount: o,
                socialPortfolioChangePercent: n,
                socialPortfolioHasLoaded:
                  i.socialCryptoPerpsHasLoaded &&
                  i.socialSpotHasLoaded &&
                  i.socialAltcoinsHasLoaded,
              });
            },
            setSocialAssetPositionsRWAPerps: (t) => {
              e({ socialAssetPositionsRWAPerps: t });
            },
            setSocialAltcoinsData: (a) => {
              let i = t(),
                {
                  totalValue: s,
                  totalPnl: o,
                  changePercent: n,
                } = r(i, { altcoins: a });
              e({
                socialAltcoinsValue: a.value,
                socialAltcoinsPnl: a.pnl,
                socialAltcoinsHasLoaded: !0,
                socialPortfolioTotalValue: s,
                socialPortfolioChangeAmount: o,
                socialPortfolioChangePercent: n,
                socialPortfolioHasLoaded:
                  i.socialCryptoPerpsHasLoaded &&
                  i.socialSpotHasLoaded &&
                  i.socialRwaHasLoaded &&
                  !0,
              });
            },
            resetSocialPortfolio: () => {
              e(i);
            },
          }),
          { name: "social-portfolio-storage", skipHydration: !0 }
        )
      );
    e.s(["useSocialPortfolioStore", 0, s]);
  },
  11942,
  642215,
  503781,
  (e) => {
    "use strict";
    var t = e.i(33550);
    let a = (0, t.default)("outline", "eye", "Eye", [
      ["path", { d: "M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0", key: "svg-0" }],
      [
        "path",
        {
          d: "M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6",
          key: "svg-1",
        },
      ],
    ]);
    e.s(["IconEye", () => a], 11942);
    let i = (0, t.default)("outline", "eye-off", "EyeOff", [
      ["path", { d: "M10.585 10.587a2 2 0 0 0 2.829 2.828", key: "svg-0" }],
      [
        "path",
        {
          d: "M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87",
          key: "svg-1",
        },
      ],
      ["path", { d: "M3 3l18 18", key: "svg-2" }],
    ]);
    e.s(["IconEyeOff", () => i], 642215),
      e.s(
        [
          "getOrdersQuery",
          0,
          (e) => {
            let t;
            return (
              e &&
                (t = {
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
                }),
              t
            );
          },
        ],
        503781
      );
  },
  330508,
  (e) => {
    e.v("/_next/static/media/download.26d8dc07.svg");
  },
  971151,
  885963,
  (e) => {
    "use strict";
    function t(e) {
      if (void 0 === e)
        throw ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return e;
    }
    function a(e, t) {
      return (a = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
    }
    e.s(["default", () => t], 971151), e.s(["default", () => a], 885963);
  },
  3303,
  (e, t, a) => {
    t.exports = e.r(479520);
  },
  222959,
  (e) => {
    "use strict";
    var t = e.i(843476),
      a = e.i(3303);
    function i() {
      return (0, t.jsx)(a.default, {
        id: "organization-structured-data",
        type: "application/ld+json",
        dangerouslySetInnerHTML: {
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "GTR",
            url: "https://gtr.trade",
            logo: "https://getrabbit.nyc3.cdn.digitaloceanspaces.com/brand-assets/android-chrome-192x192.png",
            description:
              "Trade Crypto Perpetuals, Onchain, Stocks, and RWA Perpetuals with up to 100x leverage. Track smart money, react to breaking news, and catch market-moving events as they happen.",
            foundingDate: "2023",
            sameAs: ["https://x.com/tradeongtr"],
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "Customer Support",
              email: "support@gtr.trade",
            },
          }),
        },
      });
    }
    function r() {
      return (0, t.jsx)(a.default, {
        id: "website-structured-data",
        type: "application/ld+json",
        dangerouslySetInnerHTML: {
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "GTR",
            url: "https://gtr.trade",
            description:
              "Trade Crypto Perpetuals, Onchain, Stocks, and RWA Perpetuals with up to 100x leverage. Your edge in real-time trading.",
            potentialAction: {
              "@type": "SearchAction",
              target: {
                "@type": "EntryPoint",
                urlTemplate: "https://gtr.trade/crypto?q={search_term_string}",
              },
              "query-input": "required name=search_term_string",
            },
          }),
        },
      });
    }
    function s() {
      return (0, t.jsx)(a.default, {
        id: "sitelink-searchbox-data",
        type: "application/ld+json",
        dangerouslySetInnerHTML: {
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            url: "https://gtr.trade",
            potentialAction: {
              "@type": "SearchAction",
              target: {
                "@type": "EntryPoint",
                urlTemplate: "https://gtr.trade/search?q={search_term_string}",
              },
              "query-input": "required name=search_term_string",
            },
          }),
        },
      });
    }
    function o({ items: e }) {
      let i = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: e.map((e, t) => ({
          "@type": "ListItem",
          position: t + 1,
          name: e.name,
          item: e.url,
        })),
      };
      return (0, t.jsx)(a.default, {
        id: "breadcrumb-structured-data",
        type: "application/ld+json",
        dangerouslySetInnerHTML: { __html: JSON.stringify(i) },
      });
    }
    function n() {
      return (0, t.jsx)(a.default, {
        id: "financial-service-data",
        type: "application/ld+json",
        dangerouslySetInnerHTML: {
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FinancialService",
            name: "GTR Trading Platform",
            url: "https://gtr.trade",
            description:
              "Trade Crypto Perps, Onchain, Stocks, and RWA Perpetuals with up to 100x leverage",
            logo: "https://getrabbit.nyc3.cdn.digitaloceanspaces.com/brand-assets/android-chrome-192x192.png",
            brand: { "@type": "Brand", name: "GTR" },
            areaServed: "Worldwide",
            serviceType: [
              "Cryptocurrency Trading",
              "Stock Trading",
              "Perpetual Futures",
              "Real-World Asset Trading",
            ],
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Trading Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Crypto Perpetuals Trading",
                    description:
                      "Trade crypto perpetuals with up to 100x leverage",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Stock Trading",
                    description: "Trade stocks with cryptocurrency",
                  },
                },
              ],
            },
          }),
        },
      });
    }
    function l({
      name: e,
      description: i,
      price: r,
      currency: s = "USD",
      image: o,
      category: n,
    }) {
      let l = {
        "@context": "https://schema.org",
        "@type": "Product",
        name: e,
        description: i,
        ...(o && { image: o }),
        ...(n && { category: n }),
        ...(r && {
          offers: {
            "@type": "Offer",
            priceCurrency: s,
            price: r.toString(),
            availability: "https://schema.org/InStock",
          },
        }),
      };
      return (0, t.jsx)(a.default, {
        id: "product-structured-data",
        type: "application/ld+json",
        dangerouslySetInnerHTML: { __html: JSON.stringify(l) },
      });
    }
    function c({ items: e, listName: i }) {
      let r = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: i,
        itemListElement: e.map((e) => ({
          "@type": "ListItem",
          position: e.position,
          name: e.name,
          url: e.url,
        })),
      };
      return (0, t.jsx)(a.default, {
        id: "itemlist-structured-data",
        type: "application/ld+json",
        dangerouslySetInnerHTML: { __html: JSON.stringify(r) },
      });
    }
    function d({ userName: e, profileUrl: i, description: r }) {
      let s = {
        "@context": "https://schema.org",
        "@type": "ProfilePage",
        mainEntity: {
          "@type": "Person",
          name: e,
          url: i,
          ...(r && { description: r }),
        },
      };
      return (0, t.jsx)(a.default, {
        id: "profile-page-structured-data",
        type: "application/ld+json",
        dangerouslySetInnerHTML: { __html: JSON.stringify(s) },
      });
    }
    function p({
      name: e,
      description: i,
      startDate: r,
      endDate: s,
      eventStatus: o = "https://schema.org/EventScheduled",
    }) {
      let n = {
        "@context": "https://schema.org",
        "@type": "Event",
        name: e,
        description: i,
        startDate: r,
        ...(s && { endDate: s }),
        eventStatus: o,
        eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
        location: { "@type": "VirtualLocation", url: "https://gtr.trade" },
        organizer: {
          "@type": "Organization",
          name: "GTR",
          url: "https://gtr.trade",
        },
      };
      return (0, t.jsx)(a.default, {
        id: "event-structured-data",
        type: "application/ld+json",
        dangerouslySetInnerHTML: { __html: JSON.stringify(n) },
      });
    }
    function u({ faqs: e }) {
      let i = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: e.map((e) => ({
          "@type": "Question",
          name: e.question,
          acceptedAnswer: { "@type": "Answer", text: e.answer },
        })),
      };
      return (0, t.jsx)(a.default, {
        id: "faq-structured-data",
        type: "application/ld+json",
        dangerouslySetInnerHTML: { __html: JSON.stringify(i) },
      });
    }
    function x({ name: e, description: i, steps: r }) {
      let s = {
        "@context": "https://schema.org",
        "@type": "HowTo",
        name: e,
        description: i,
        step: r.map((e, t) => ({
          "@type": "HowToStep",
          position: t + 1,
          name: e.name,
          text: e.text,
        })),
      };
      return (0, t.jsx)(a.default, {
        id: "howto-structured-data",
        type: "application/ld+json",
        dangerouslySetInnerHTML: { __html: JSON.stringify(s) },
      });
    }
    e.s([
      "BreadcrumbStructuredData",
      () => o,
      "EventStructuredData",
      () => p,
      "FAQStructuredData",
      () => u,
      "FinancialServiceData",
      () => n,
      "HowToStructuredData",
      () => x,
      "ItemListStructuredData",
      () => c,
      "OrganizationStructuredData",
      () => i,
      "ProductStructuredData",
      () => l,
      "ProfilePageStructuredData",
      () => d,
      "SitelinkSearchBoxData",
      () => s,
      "WebSiteStructuredData",
      () => r,
    ]);
  },
  523481,
  (e) => {
    e.v(
      JSON.parse(
        '{"v":"4.8.0","meta":{"g":"LottieFiles AE 3.6.0","a":"","k":"","d":"","tc":""},"fr":60,"ip":0,"op":18,"w":500,"h":500,"nm":"davsan","ddd":0,"assets":[{"id":"comp_0","layers":[{"ddd":0,"ind":1,"ty":4,"nm":"floor 3","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[250,371,0],"ix":2},"a":{"a":0,"k":[-56,89,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[-36,0],[0,0]],"o":[[0,0],[36,0],[0,0]],"v":[[-118,89],[-55.5,85.5],[6,89]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"tr","p":{"a":0,"k":[-56,87.25],"ix":2},"a":{"a":0,"k":[-56,87.25],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":1,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":0,"k":21,"ix":1},"e":{"a":0,"k":84,"ix":2},"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[-89]},{"t":20,"s":[-449]}],"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":14,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":240,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"floor 2","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[250,350,0],"ix":2},"a":{"a":0,"k":[-56,89,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[-36,0],[0,0]],"o":[[0,0],[36,0],[0,0]],"v":[[-118,89],[-55.5,85.5],[6,89]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"tr","p":{"a":0,"k":[-56,87.25],"ix":2},"a":{"a":0,"k":[-56,87.25],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":1,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":1},"e":{"a":0,"k":58,"ix":2},"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[159]},{"t":20,"s":[-201]}],"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":14,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":240,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":3,"nm":"Null 2","sr":1,"ks":{"o":{"a":0,"k":0,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[250,274,0],"ix":2},"a":{"a":0,"k":[50,50,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"ip":0,"op":240,"st":0,"bm":0},{"ddd":0,"ind":4,"ty":4,"nm":"eyes","parent":3,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.91,"y":0.922},"o":{"x":0.671,"y":0.25},"t":0,"s":[137.267,29.267,0],"to":[0.983,-3.517,0],"ti":[0,0,0]},{"i":{"x":0.866,"y":0.901},"o":{"x":0.563,"y":0.158},"t":8,"s":[150.267,-41.233,0],"to":[0,0,0],"ti":[-4.233,-0.983,0]},{"i":{"x":0.673,"y":1},"o":{"x":0.333,"y":0},"t":14,"s":[127.767,41.767,0],"to":[4.233,0.983,0],"ti":[-2.733,3.017,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0.423},"t":17,"s":[131.767,39.767,0],"to":[2.733,-3.017,0],"ti":[0,0,0]},{"t":20,"s":[137.267,29.267,0]}],"ix":2},"a":{"a":0,"k":[154.767,-15.233,0],"ix":1},"s":{"a":0,"k":[126.012,126.012,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[11.533,11.533],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[154.767,-15.233],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[127,138.339],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":240,"st":0,"bm":0},{"ddd":0,"ind":5,"ty":4,"nm":"floor","parent":3,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[50,126,0],"ix":2},"a":{"a":0,"k":[-56,89,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[-36,0],[0,0]],"o":[[0,0],[36,0],[0,0]],"v":[[-118,89],[-55.5,85.5],[6,89]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"tr","p":{"a":0,"k":[-56,87.25],"ix":2},"a":{"a":0,"k":[-56,87.25],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":1,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":1},"e":{"a":0,"k":58,"ix":2},"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[159]},{"t":20,"s":[-201]}],"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":14,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":240,"st":0,"bm":0},{"ddd":0,"ind":6,"ty":3,"nm":"Null 1","parent":3,"sr":1,"ks":{"o":{"a":0,"k":0,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.828],"y":[0.54]},"t":0,"s":[0]},{"i":{"x":[0.54],"y":[0.748]},"o":{"x":[0.5],"y":[0]},"t":10,"s":[18]},{"t":20,"s":[0]}],"ix":10},"p":{"a":1,"k":[{"i":{"x":0.536,"y":1},"o":{"x":0.889,"y":0},"t":0,"s":[50,50,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.163,"y":1},"o":{"x":0.561,"y":0},"t":10,"s":[50,2,0],"to":[0,0,0],"ti":[0,0,0]},{"t":20,"s":[50,50,0]}],"ix":2},"a":{"a":0,"k":[50,50,0],"ix":1},"s":{"a":0,"k":[-100,100,100],"ix":6}},"ao":0,"ip":0,"op":240,"st":0,"bm":0},{"ddd":0,"ind":7,"ty":4,"nm":"kyrk","parent":6,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":0,"s":[0]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":14,"s":[-20]},{"t":20,"s":[0]}],"ix":10},"p":{"a":1,"k":[{"i":{"x":0.713,"y":1},"o":{"x":0.678,"y":0},"t":0,"s":[145.224,37.404,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.667,"y":0.76},"o":{"x":0.333,"y":0},"t":8,"s":[130.724,22.904,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.434,"y":1},"o":{"x":0.48,"y":0.238},"t":14,"s":[135.724,-10.096,0],"to":[0,0,0],"ti":[0,0,0]},{"t":20,"s":[145.224,37.404,0]}],"ix":2},"a":{"a":0,"k":[34.059,42.784,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0.142,-13.018],[6.66,6.66]],"o":[[13.321,-5.449],[-0.142,13.073],[0,0]],"v":[[22.5,27.949],[45.476,43.36],[22.5,56.407]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[33.989,42.613],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667],"y":[1,1]},"o":{"x":[0.333,0.333],"y":[0,0]},"t":0,"s":[100,100]},{"i":{"x":[0.667,0.667],"y":[1,1]},"o":{"x":[0.333,0.333],"y":[0,0]},"t":7,"s":[123,74]},{"i":{"x":[0.667,0.667],"y":[1,1]},"o":{"x":[0.333,0.333],"y":[0,0]},"t":14,"s":[100,100]},{"t":20,"s":[100,100]}],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":1,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":14,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[34.059,42.784],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":240,"st":0,"bm":0},{"ddd":0,"ind":8,"ty":4,"nm":"main Outlines","parent":6,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[33.99,32.79,0],"ix":2},"a":{"a":0,"k":[133.236,117.836,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.452,"y":0.44},"t":0,"s":[{"i":[[0,0],[-0.349,-1.448],[6.623,-3.761],[24.016,19.224],[7.562,22.498],[-12.193,2.825],[-24.471,-15.321],[33.697,-8.192],[-33.736,-12.173],[19.509,-37.364],[15.696,12.477],[0,0],[-36.321,39.318]],"o":[[0.344,1.174],[2.213,9.183],[-14.393,8.174],[-12.526,11.283],[-8.268,-24.598],[18.776,-17.531],[16.779,10.505],[14.778,-5.006],[27.923,10.076],[-12.842,26.267],[-15.696,-12.476],[-17.024,3.799],[0,0]],"v":[[10.157,40.566],[11.212,44.527],[8.499,71.052],[-42.526,14.44],[-102.468,14.137],[-67.785,-32.658],[23.472,-80.015],[-26.691,-30.2],[70.094,-45.806],[91.227,41.252],[14.087,82.859],[53.443,52.888],[25.981,-1.389]],"c":false}]},{"i":{"x":0.464,"y":0.613},"o":{"x":0.167,"y":0.167},"t":4,"s":[{"i":[[0,0],[1.202,-1.144],[7.244,6.007],[18.283,19.456],[7.952,19.978],[-12.193,2.825],[-24.157,-15.797],[34.868,-2.726],[-28.78,-10.817],[15.16,-41.267],[17.494,4.343],[0,0],[-22.562,36.673]],"o":[[-17.089,2.437],[-19.247,9.829],[-16.443,-11.078],[-13.775,7.237],[-9.778,-23.962],[21.336,-13.746],[15.613,10.173],[16.447,-2.703],[28.153,10.715],[-11.088,34.429],[-22.938,-2.525],[-17.836,5.085],[0,0]],"v":[[13.347,36.526],[-10.459,26.869],[-51.39,33.922],[-45.928,-3.635],[-102.681,-12.444],[-67.36,-53.71],[32.403,-78.101],[-27.542,-45.511],[59.462,-48.57],[86.761,33.171],[50.663,82.646],[52.592,47.572],[20.452,0.1]],"c":false}]},{"i":{"x":0.833,"y":0.809},"o":{"x":0.642,"y":0.464},"t":8,"s":[{"i":[[0,0],[3.298,-0.732],[0.011,12.224],[10.536,19.77],[8.478,16.573],[-12.193,2.825],[-23.733,-16.441],[36.451,4.66],[-22.084,-8.984],[9.283,-46.542],[19.923,-6.649],[0,0],[2.591,18.298]],"o":[[-40.647,4.144],[-48.246,10.702],[-0.016,-18.51],[-15.464,1.77],[-11.819,-23.103],[24.795,-8.632],[14.038,9.725],[18.701,0.41],[28.463,11.579],[-8.717,45.458],[-32.723,10.921],[-10.933,5.519],[0,0]],"v":[[17.657,31.066],[-39.743,3.007],[-108.501,-8.948],[-50.526,-28.06],[-102.968,-48.363],[-66.785,-82.158],[44.472,-75.515],[-28.691,-66.2],[45.094,-52.306],[80.727,22.252],[100.087,82.359],[51.443,40.388],[13.228,15.794]],"c":false}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.191},"t":11,"s":[{"i":[[0,0],[1.833,-1.563],[-2.302,11.688],[7.323,19.341],[8.383,21.673],[-20.34,4.986],[-22.974,-14.013],[29.131,-10.66],[-28.833,-10.055],[8.533,-40.972],[10.914,-0.189],[0,0],[-14.147,18.958]],"o":[[-23.989,2.323],[-26.49,29.966],[3.638,-18.01],[-14.178,5.198],[-7.846,-20.832],[10.429,-25.93],[14.592,8.781],[24.915,-1.84],[29.105,10.515],[-15.323,44.493],[-25.086,-5.689],[-16.255,-0.356],[0,0]],"v":[[20.034,21.994],[-28.602,19.29],[-87.719,30.688],[-47.527,-0.636],[-100.54,-9.369],[-63.786,-53.234],[24.19,-91.229],[-29.548,-44.775],[54.628,-55.413],[83.834,21.716],[35.097,59.899],[41.588,33.318],[26.8,-5.923]],"c":false}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":12,"s":[{"i":[[0,0],[1.121,-1.968],[-3.426,11.428],[5.76,19.133],[8.782,21.272],[-24.3,6.036],[-22.605,-12.833],[25.694,-14.098],[-32.114,-10.576],[8.169,-38.263],[6.657,4.847],[0,0],[-19.095,12.083]],"o":[[-13.71,1.352],[-15.913,39.332],[5.415,-17.767],[-13.553,6.864],[-7.641,-19.001],[6.37,-30.014],[14.862,8.322],[27.935,-2.934],[29.417,9.997],[-16.469,49.037],[-15.422,-12.874],[-14.953,-3.845],[0,0]],"v":[[25.234,25.944],[-23.186,27.207],[-77.615,49.959],[-46.068,12.697],[-98.873,7.402],[-62.327,-39.172],[14.086,-92.791],[-29.965,-34.358],[59.264,-56.923],[85.344,21.456],[11.945,46.305],[36.796,29.88],[33.519,-9.83]],"c":false}]},{"i":{"x":0.627,"y":0.73},"o":{"x":0.167,"y":0.167},"t":13,"s":[{"i":[[0,0],[0.434,-2.358],[-4.51,11.177],[4.253,18.932],[9.167,20.885],[-28.12,7.05],[-22.249,-11.695],[22.379,-17.413],[-35.278,-11.078],[7.817,-35.652],[2.552,9.704],[0,0],[-23.867,5.454]],"o":[[-3.798,0.417],[-5.712,48.364],[7.128,-17.532],[-12.95,8.472],[-7.443,-17.235],[2.456,-33.952],[15.122,7.88],[30.848,-3.988],[29.718,9.498],[-17.574,53.419],[-6.103,-19.803],[-13.697,-7.21],[0,0]],"v":[[-10.595,33.512],[-17.962,34.841],[-67.871,68.543],[-44.662,25.555],[-97.266,23.575],[-60.921,-25.611],[4.342,-94.298],[-30.366,-24.313],[63.734,-58.38],[86.801,21.205],[-10.381,33.196],[32.175,26.565],[39.998,-13.597]],"c":false}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.333,"y":0.241},"t":14,"s":[{"i":[[0,0],[-0.121,-2.673],[-5.386,10.974],[3.036,18.77],[9.478,20.573],[-31.205,7.868],[-21.962,-10.775],[19.701,-20.09],[-37.834,-11.484],[7.533,-33.542],[-0.764,13.627],[0,0],[-27.721,0.099]],"o":[[-1.772,-0.106],[2.526,55.659],[8.511,-17.342],[-12.464,9.77],[-7.284,-15.809],[-0.705,-37.132],[15.332,7.522],[33.201,-4.84],[29.962,9.095],[-18.467,56.958],[1.423,-25.399],[-12.683,-9.928],[0,0]],"v":[[-9.468,39.066],[-13.743,41.007],[-60.001,83.552],[-43.526,35.94],[-95.968,36.637],[-59.785,-14.658],[-3.528,-95.515],[-30.691,-16.2],[67.344,-59.556],[87.977,21.002],[-28.413,22.609],[28.443,23.888],[45.231,-16.639]],"c":false}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":15,"s":[{"i":[[0,0],[-0.155,-2.491],[-3.609,8.794],[6.141,18.837],[9.195,20.858],[-28.392,7.122],[-22.333,-11.448],[21.772,-18.33],[-37.227,-11.586],[9.305,-34.108],[1.672,13.457],[0,0],[-28.993,5.902]],"o":[[-1.459,0.083],[0.253,43.783],[5.122,-13.567],[-12.473,9.994],[-7.429,-17.11],[2.178,-34.232],[15.546,7.964],[30.475,-4.865],[29.66,9.24],[-17.259,51.781],[-1.488,-22.355],[-13.216,-7.958],[0,0]],"v":[[-6.993,47.026],[-10.48,49.266],[-49.865,81.703],[-43.378,32.759],[-96.93,33.308],[-60.969,-17.321],[0.467,-93.222],[-30.099,-18.271],[67.751,-57.522],[88.458,23.998],[-20.718,36.167],[32.142,28.179],[42.383,-14.383]],"c":false}]},{"i":{"x":0.663,"y":0.614},"o":{"x":0.167,"y":0.167},"t":16,"s":[{"i":[[0,0],[-3.898,-0.874],[-1.432,6.122],[9.944,18.919],[8.847,21.207],[-24.945,6.207],[-22.788,-12.272],[24.31,-16.173],[-36.484,-11.711],[11.476,-34.801],[4.656,13.248],[0,0],[-30.552,13.012]],"o":[[-1.075,0.315],[0.958,33.473],[0.97,-8.941],[-12.484,10.268],[-7.608,-18.703],[5.71,-30.678],[15.808,8.504],[27.135,-4.895],[29.29,9.418],[-15.78,45.437],[-5.056,-18.624],[-13.87,-5.544],[0,0]],"v":[[-9.643,45.59],[-9.425,55.499],[-37.447,79.436],[-43.197,28.861],[-98.108,29.229],[-62.419,-20.585],[5.362,-90.411],[-29.374,-20.81],[68.249,-55.029],[89.047,27.67],[-11.289,52.779],[36.675,33.437],[38.893,-11.618]],"c":false}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.516,"y":0.591},"t":17,"s":[{"i":[[0,0],[-0.241,-2.029],[0.929,3.226],[14.068,19.009],[8.471,21.585],[-21.208,5.216],[-23.281,-13.165],[27.061,-13.834],[-35.679,-11.846],[13.83,-35.552],[7.891,13.022],[0,0],[-32.243,20.721]],"o":[[-0.659,0.567],[2.362,31.221],[-3.532,-3.925],[-12.496,10.566],[-7.801,-20.431],[9.539,-26.825],[16.093,9.091],[23.514,-4.927],[28.89,9.611],[-14.176,38.56],[-8.924,-14.58],[-14.578,-2.927],[0,0]],"v":[[25.822,33.978],[-0.621,42.858],[-23.982,76.979],[-43,24.635],[-99.386,24.806],[-63.992,-24.123],[10.669,-87.365],[-28.588,-23.562],[68.79,-52.326],[89.686,31.65],[-1.066,70.79],[41.589,39.137],[35.109,-8.62]],"c":false}]},{"i":{"x":0.721,"y":0.724},"o":{"x":0.167,"y":0.167},"t":18,"s":[{"i":[[0,0],[-0.282,-1.811],[3.068,0.601],[17.805,19.09],[8.129,21.928],[-17.821,4.318],[-23.728,-13.975],[29.554,-11.714],[-34.949,-11.969],[15.964,-36.233],[10.823,12.817],[0,0],[-33.775,27.708]],"o":[[-0.282,0.795],[2.306,22.942],[-7.612,0.62],[-12.508,10.835],[-7.977,-21.996],[13.009,-23.334],[16.351,9.622],[20.232,-4.957],[28.527,9.785],[-13.675,33.942],[-11.468,-13.79],[-15.497,-0.4],[0,0]],"v":[[27.563,37.757],[3.824,43.485],[-11.78,74.753],[-42.822,20.805],[-100.544,20.798],[-65.417,-27.329],[15.479,-84.604],[-27.875,-26.055],[69.28,-49.877],[90.265,35.257],[4.627,75.324],[46.042,44.303],[31.68,-5.904]],"c":false}]},{"t":20,"s":[{"i":[[0,0],[-0.349,-1.448],[6.623,-3.761],[24.016,19.224],[7.562,22.498],[-12.193,2.825],[-24.471,-15.321],[33.697,-8.192],[-33.736,-12.173],[19.509,-37.364],[15.696,12.477],[0,0],[-36.321,39.318]],"o":[[0.344,1.174],[2.213,9.183],[-14.393,8.174],[-12.526,11.283],[-8.268,-24.598],[18.776,-17.531],[16.779,10.505],[14.778,-5.006],[27.923,10.076],[-12.842,26.267],[-15.696,-12.476],[-17.024,3.799],[0,0]],"v":[[10.157,40.566],[11.212,44.527],[8.499,71.052],[-42.526,14.44],[-102.468,14.137],[-67.785,-32.658],[23.472,-80.015],[-26.691,-30.2],[70.094,-45.806],[91.227,41.252],[14.087,82.859],[53.443,52.888],[25.981,-1.389]],"c":false}]}],"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":14,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[133.236,117.836],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":240,"st":0,"bm":0}]}],"layers":[{"ddd":0,"ind":1,"ty":0,"nm":"Pre-comp 1","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[250,250,0],"ix":2},"a":{"a":0,"k":[250,250,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"tm":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":18,"s":[0.333]},{"t":240,"s":[4]}],"ix":2},"w":500,"h":500,"ip":0,"op":240,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":3,"nm":"Null 1","sr":1,"ks":{"o":{"a":0,"k":0,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.828],"y":[0.54]},"t":0,"s":[0]},{"i":{"x":[0.54],"y":[0.748]},"o":{"x":[0.5],"y":[0]},"t":10,"s":[18]},{"t":20,"s":[0]}],"ix":10},"p":{"a":1,"k":[{"i":{"x":0.536,"y":1},"o":{"x":0.889,"y":0},"t":0,"s":[250,250,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.163,"y":1},"o":{"x":0.561,"y":0},"t":10,"s":[250,202,0],"to":[0,0,0],"ti":[0,0,0]},{"t":20,"s":[250,250,0]}],"ix":2},"a":{"a":0,"k":[50,50,0],"ix":1},"s":{"a":0,"k":[-100,100,100],"ix":6}},"ao":0,"ip":0,"op":240,"st":0,"bm":0}],"markers":[]}'
      )
    );
  },
  737701,
  (e) => {
    "use strict";
    var t = e.i(843476),
      a = e.i(523481);
    let i = (0, e.i(770703).default)(() => e.A(357852), {
      loadableGenerated: { modules: [790239] },
      ssr: !1,
    });
    function r() {
      return (0, t.jsxs)("div", {
        className: "flex justify-center items-center",
        style: { height: "calc(100vh - 80px)" },
        children: [
          " ",
          (0, t.jsx)(i, {
            loop: !0,
            animationData: a.default,
            play: !0,
            style: { width: 100, height: 100 },
          }),
        ],
      });
    }
    e.s(["default", () => r]);
  },
  261291,
  (e) => {
    e.v("/_next/static/media/hyperliquid.b0ae16e4.svg");
  },
  260794,
  (e) => {
    e.v("/_next/static/media/onchain.931c84cf.svg");
  },
  874704,
  350611,
  (e) => {
    "use strict";
    let t = {
      src: e.i(261291).default,
      width: 144,
      height: 144,
      blurWidth: 0,
      blurHeight: 0,
    };
    e.s(["default", 0, t], 874704);
    let a = {
      src: e.i(260794).default,
      width: 24,
      height: 24,
      blurWidth: 0,
      blurHeight: 0,
    };
    e.s(["default", 0, a], 350611);
  },
  441414,
  283473,
  (e) => {
    "use strict";
    let t = {
      SPX: "S&P 500",
      DJI: "Dow Jones",
      NDX: "Nasdaq 100",
      NIK: "Nikkei 225",
      FTSE: "FTSE 100",
      DAX: "DAX 40",
      HSI: "Hang Seng",
      EUR: "Euro",
      GBP: "British Pound",
      JPY: "Japanese Yen",
      CHF: "Swiss Franc",
      CAD: "Canadian Dollar",
      AUD: "Australian Dollar",
      NZD: "New Zealand Dollar",
      MXN: "Mexican Peso",
      USD: "US Dollar",
      XAU: "Gold",
      XAG: "Silver",
      XPT: "Platinum",
      XPD: "Palladium",
      HG: "Copper",
      CL: "WTI Oil",
      NG: "Natural Gas",
      NVDA: "Nvidia",
      GOOG: "Google",
      AMZN: "Amazon",
      META: "Meta",
      TSLA: "Tesla",
      AAPL: "Apple",
      MSFT: "Microsoft",
    };
    e.s(["getSymbolDisplayName", 0, (e) => t[e] || e], 441414);
    var a = e.i(843476);
    e.s(
      [
        "default",
        0,
        ({
          size: e = "w-1 h-1",
          color: t = "bg-primary-400",
          gap: i = "gap-0.5",
          className: r = "",
        }) =>
          (0, a.jsxs)("div", {
            className: `flex items-center ${i} ${r}`,
            children: [
              (0, a.jsx)("div", {
                className: `${e} rounded-full ${t} animate-bounce [animation-delay:-0.3s]`,
              }),
              (0, a.jsx)("div", {
                className: `${e} rounded-full ${t} animate-bounce [animation-delay:-0.15s]`,
              }),
              (0, a.jsx)("div", {
                className: `${e} rounded-full ${t} animate-bounce`,
              }),
            ],
          }),
      ],
      283473
    );
  },
  172167,
  (e) => {
    "use strict";
    var t = e.i(768834),
      a = e.i(579473);
    let i = (0, t.create)()(
      (0, a.persist)(
        (e) => ({
          topTraders: [],
          setTopTraders: (t) => e(() => ({ topTraders: t })),
          resetStore: () => e(() => ({})),
          codexAuth: "",
          setCodexAuth: (t) => e(() => ({ codexAuth: t })),
        }),
        { name: "generic-storage", skipHydration: !0 }
      )
    );
    e.s(["useGenericStore", 0, i]);
  },
  757033,
  (e) => {
    "use strict";
    let t = (0, e.i(33550).default)("outline", "coin", "Coin", [
      [
        "path",
        { d: "M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0", key: "svg-0" },
      ],
      [
        "path",
        {
          d: "M14.8 9a2 2 0 0 0 -1.8 -1h-2a2 2 0 1 0 0 4h2a2 2 0 1 1 0 4h-2a2 2 0 0 1 -1.8 -1",
          key: "svg-1",
        },
      ],
      ["path", { d: "M12 7v10", key: "svg-2" }],
    ]);
    e.s(["IconCoin", () => t], 757033);
  },
  357852,
  (e) => {
    e.v((t) =>
      Promise.all(
        ["static/chunks/4c7c9becc737ae77.js"].map((t) => e.l(t))
      ).then(() => t(790239))
    );
  },
  637970,
  (e) => {
    e.v((t) =>
      Promise.all(
        ["static/chunks/a9733480a21385e1.js"].map((t) => e.l(t))
      ).then(() => t(11068))
    );
  },
  454944,
  (e) => {
    e.v((e) => Promise.resolve().then(() => e(969552)));
  },
  958766,
  (e) => {
    e.v((t) =>
      Promise.all(
        ["static/chunks/4e59b022d82b67bd.js"].map((t) => e.l(t))
      ).then(() => t(614822))
    );
  },
  380375,
  (e) => {
    e.v((t) =>
      Promise.all(
        [
          "static/chunks/00a63aa36da791b8.js",
          "static/chunks/42e6cc42965c81d6.js",
          "static/chunks/4c1985413e0aa57c.js",
          "static/chunks/2ce05ea8498321ea.js",
        ].map((t) => e.l(t))
      ).then(() => t(760641))
    );
  },
  467399,
  (e) => {
    e.v((t) =>
      Promise.all(
        ["static/chunks/2299924e688885e3.js"].map((t) => e.l(t))
      ).then(() => t(781))
    );
  },
  224814,
  (e) => {
    e.v((t) =>
      Promise.all(
        [
          "static/chunks/da7e23fc28b79574.js",
          "static/chunks/ee2c8d5bf4bfdc98.js",
          "static/chunks/29f5d3662f89f702.js",
          "static/chunks/e70dfa11a8de05f0.js",
        ].map((t) => e.l(t))
      ).then(() => t(653806))
    );
  },
  101139,
  (e) => {
    e.v((t) =>
      Promise.all(
        ["static/chunks/9d3e9ccf5c298960.js"].map((t) => e.l(t))
      ).then(() => t(109963))
    );
  },
  389892,
  (e) => {
    e.v((e) => Promise.resolve().then(() => e(337575)));
  },
]);
