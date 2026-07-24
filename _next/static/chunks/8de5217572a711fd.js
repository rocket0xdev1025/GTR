(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  94681,
  (e) => {
    "use strict";
    var t = e.i(843476),
      o = e.i(682451);
    function r({ size: e, style: r, ...n }) {
      let a =
        void 0 !== e
          ? { width: (0, o.rem)(e), height: (0, o.rem)(e), ...r }
          : r;
      return (0, t.jsx)("svg", {
        viewBox: "0 0 10 7",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        style: a,
        "aria-hidden": !0,
        ...n,
        children: (0, t.jsx)("path", {
          d: "M4 4.586L1.707 2.293A1 1 0 1 0 .293 3.707l3 3a.997.997 0 0 0 1.414 0l5-5A1 1 0 1 0 8.293.293L4 4.586z",
          fill: "currentColor",
          fillRule: "evenodd",
          clipRule: "evenodd",
        }),
      });
    }
    function n({ indeterminate: e, ...o }) {
      return e
        ? (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 32 6",
            "aria-hidden": !0,
            ...o,
            children: (0, t.jsx)("rect", {
              width: "32",
              height: "6",
              fill: "currentColor",
              rx: "3",
            }),
          })
        : (0, t.jsx)(r, { ...o });
    }
    e.i(271645),
      e.i(207670),
      e.s(["CheckIcon", () => r, "CheckboxIcon", () => n]);
  },
  598323,
  41430,
  340427,
  (e) => {
    "use strict";
    var t = e.i(843476),
      o = e.i(271645),
      r = e.i(751937),
      n = e.i(424848),
      a = e.i(143798);
    e.i(207670);
    var l = e.i(882360),
      i = e.i(515259),
      s = e.i(835783),
      c = e.i(912761),
      u = e.i(789549),
      d = e.i(314037),
      p = e.i(919254),
      m = e.i(644662),
      b = e.i(321879),
      x = e.i(22084),
      f = {
        root: "m_5f75b09e",
        body: "m_5f6e695e",
        labelWrapper: "m_d3ea56bb",
        label: "m_8ee546b8",
        description: "m_328f68c0",
        error: "m_8e8a99cc",
      };
    let h = (0, o.forwardRef)(
      (
        {
          __staticSelector: e,
          __stylesApiProps: o,
          className: r,
          classNames: a,
          styles: l,
          unstyled: i,
          children: s,
          label: c,
          description: u,
          id: p,
          disabled: b,
          error: h,
          size: v,
          labelPosition: g = "left",
          bodyElement: C = "div",
          labelElement: y = "label",
          variant: w,
          style: k,
          vars: j,
          mod: S,
          attributes: D,
          ...N
        },
        E
      ) => {
        let _ = (0, d.useStyles)({
          name: e,
          props: o,
          className: r,
          style: k,
          classes: f,
          classNames: a,
          styles: l,
          unstyled: i,
          attributes: D,
        });
        return (0, t.jsx)(m.Box, {
          ..._("root"),
          ref: E,
          __vars: {
            "--label-fz": (0, n.getFontSize)(v),
            "--label-lh": (0, n.getSize)(v, "label-lh"),
          },
          mod: [{ "label-position": g }, S],
          variant: w,
          size: v,
          ...N,
          children: (0, t.jsxs)(m.Box, {
            component: C,
            htmlFor: "label" === C ? p : void 0,
            ..._("body"),
            children: [
              s,
              (0, t.jsxs)("div", {
                ..._("labelWrapper"),
                "data-disabled": b || void 0,
                children: [
                  c &&
                    (0, t.jsx)(m.Box, {
                      component: y,
                      htmlFor: "label" === y ? p : void 0,
                      ..._("label"),
                      "data-disabled": b || void 0,
                      children: c,
                    }),
                  u &&
                    (0, t.jsx)(x.Input.Description, {
                      size: v,
                      __inheritStyles: !1,
                      ..._("description"),
                      children: u,
                    }),
                  h &&
                    "boolean" != typeof h &&
                    (0, t.jsx)(x.Input.Error, {
                      size: v,
                      __inheritStyles: !1,
                      ..._("error"),
                      children: h,
                    }),
                ],
              }),
            ],
          }),
        });
      }
    );
    (h.displayName = "@mantine/core/InlineInput"),
      e.s(["InlineInput", () => h, "InlineInputClasses", () => f], 41430);
    var v = e.i(446614),
      g = e.i(825436);
    let C = (0, o.createContext)(null),
      y = C.Provider,
      w = () => (0, o.useContext)(C),
      [k, j] = (0, e.i(592499).createOptionalContext)();
    var S = { card: "m_26775b0a" };
    let D = { withBorder: !0 },
      N = (0, a.createVarsResolver)((e, { radius: t }) => ({
        card: { "--card-radius": (0, n.getRadius)(t) },
      })),
      E = (0, b.factory)((e, o) => {
        let r = (0, u.useProps)("CheckboxCard", D, e),
          {
            classNames: n,
            className: a,
            style: l,
            styles: i,
            unstyled: s,
            vars: c,
            checked: p,
            mod: m,
            withBorder: b,
            value: x,
            onClick: f,
            defaultChecked: h,
            onChange: C,
            attributes: y,
            ...j
          } = r,
          E = (0, d.useStyles)({
            name: "CheckboxCard",
            classes: S,
            props: r,
            className: a,
            style: l,
            classNames: n,
            styles: i,
            unstyled: s,
            attributes: y,
            vars: c,
            varsResolver: N,
            rootSelector: "card",
          }),
          _ = w(),
          I =
            "boolean" == typeof p ? p : _ ? _.value.includes(x || "") : void 0,
          [R, A] = (0, v.useUncontrolled)({
            value: I,
            defaultValue: h,
            finalValue: !1,
            onChange: C,
          });
        return (0, t.jsx)(k, {
          value: { checked: R },
          children: (0, t.jsx)(g.UnstyledButton, {
            ref: o,
            mod: [{ "with-border": b, checked: R }, m],
            ...E("card"),
            ...j,
            role: "checkbox",
            "aria-checked": R,
            onClick: (e) => {
              f?.(e), _?.onChange(x || ""), A(!R);
            },
          }),
        });
      });
    (E.displayName = "@mantine/core/CheckboxCard"), (E.classes = S);
    var _ = e.i(698874);
    function I({ children: e, role: o }) {
      let r = (0, _.useInputWrapperContext)();
      return r
        ? (0, t.jsx)("div", {
            role: o,
            "aria-labelledby": r.labelId,
            "aria-describedby": r.describedBy,
            children: e,
          })
        : (0, t.jsx)(t.Fragment, { children: e });
    }
    e.s(["InputsGroupFieldset", () => I], 340427);
    let R = (0, b.factory)((e, o) => {
      let {
          value: r,
          defaultValue: n,
          onChange: a,
          size: l,
          wrapperProps: i,
          children: s,
          readOnly: c,
          disabled: d,
          ...p
        } = (0, u.useProps)("CheckboxGroup", null, e),
        [m, b] = (0, v.useUncontrolled)({
          value: r,
          defaultValue: n,
          finalValue: [],
          onChange: a,
        });
      return (0, t.jsx)(y, {
        value: {
          value: m,
          onChange: (e) => {
            let t = "string" == typeof e ? e : e.currentTarget.value;
            c || b(m.includes(t) ? m.filter((e) => e !== t) : [...m, t]);
          },
          size: l,
          disabled: d,
        },
        children: (0, t.jsx)(x.Input.Wrapper, {
          size: l,
          ref: o,
          ...i,
          ...p,
          labelElement: "div",
          __staticSelector: "CheckboxGroup",
          children: (0, t.jsx)(I, { role: "group", children: s }),
        }),
      });
    });
    (R.classes = x.Input.Wrapper.classes),
      (R.displayName = "@mantine/core/CheckboxGroup");
    var A = e.i(94681),
      O = {
        indicator: "m_5e5256ee",
        icon: "m_1b1c543a",
        "indicator--outline": "m_76e20374",
      };
    let P = { icon: A.CheckboxIcon, variant: "filled" },
      T = (0, a.createVarsResolver)(
        (
          e,
          {
            radius: t,
            color: o,
            size: r,
            iconColor: a,
            variant: u,
            autoContrast: d,
          }
        ) => {
          let p = (0, l.parseThemeColor)({
              color: o || e.primaryColor,
              theme: e,
            }),
            m =
              p.isThemeColor && void 0 === p.shade
                ? `var(--mantine-color-${p.color}-outline)`
                : p.color;
          return {
            indicator: {
              "--checkbox-size": (0, n.getSize)(r, "checkbox-size"),
              "--checkbox-radius": void 0 === t ? void 0 : (0, n.getRadius)(t),
              "--checkbox-color":
                "outline" === u ? m : (0, i.getThemeColor)(o, e),
              "--checkbox-icon-color": a
                ? (0, i.getThemeColor)(a, e)
                : (0, c.getAutoContrastValue)(d, e)
                ? (0, s.getContrastColor)({
                    color: o,
                    theme: e,
                    autoContrast: d,
                  })
                : void 0,
            },
          };
        }
      ),
      B = (0, b.factory)((e, o) => {
        let r = (0, u.useProps)("CheckboxIndicator", P, e),
          {
            classNames: n,
            className: a,
            style: l,
            styles: i,
            unstyled: s,
            vars: c,
            icon: p,
            indeterminate: b,
            radius: x,
            color: f,
            iconColor: h,
            autoContrast: v,
            checked: g,
            mod: C,
            variant: y,
            disabled: w,
            attributes: k,
            ...S
          } = r,
          D = (0, d.useStyles)({
            name: "CheckboxIndicator",
            classes: O,
            props: r,
            className: a,
            style: l,
            classNames: n,
            styles: i,
            unstyled: s,
            attributes: k,
            vars: c,
            varsResolver: T,
            rootSelector: "indicator",
          }),
          N = j(),
          E =
            "boolean" == typeof g || "boolean" == typeof b
              ? g || b
              : N?.checked || !1;
        return (0, t.jsx)(m.Box, {
          ref: o,
          ...D("indicator", { variant: y }),
          variant: y,
          mod: [{ checked: E, disabled: w }, C],
          ...S,
          children: (0, t.jsx)(p, { indeterminate: b, ...D("icon") }),
        });
      });
    (B.displayName = "@mantine/core/CheckboxIndicator"), (B.classes = O);
    var M = {
      root: "m_bf2d988c",
      inner: "m_26062bec",
      input: "m_26063560",
      icon: "m_bf295423",
      "input--outline": "m_215c4542",
    };
    let z = { labelPosition: "right", icon: A.CheckboxIcon, variant: "filled" },
      L = (0, a.createVarsResolver)(
        (
          e,
          {
            radius: t,
            color: o,
            size: r,
            iconColor: a,
            variant: u,
            autoContrast: d,
          }
        ) => {
          let p = (0, l.parseThemeColor)({
              color: o || e.primaryColor,
              theme: e,
            }),
            m =
              p.isThemeColor && void 0 === p.shade
                ? `var(--mantine-color-${p.color}-outline)`
                : p.color;
          return {
            root: {
              "--checkbox-size": (0, n.getSize)(r, "checkbox-size"),
              "--checkbox-radius": void 0 === t ? void 0 : (0, n.getRadius)(t),
              "--checkbox-color":
                "outline" === u ? m : (0, i.getThemeColor)(o, e),
              "--checkbox-icon-color": a
                ? (0, i.getThemeColor)(a, e)
                : (0, c.getAutoContrastValue)(d, e)
                ? (0, s.getContrastColor)({
                    color: o,
                    theme: e,
                    autoContrast: d,
                  })
                : void 0,
            },
          };
        }
      ),
      F = (0, b.factory)((e, n) => {
        let a = (0, u.useProps)("Checkbox", z, e),
          {
            classNames: l,
            className: i,
            style: s,
            styles: c,
            unstyled: b,
            vars: x,
            color: f,
            label: v,
            id: g,
            size: C,
            radius: y,
            wrapperProps: k,
            checked: j,
            labelPosition: S,
            description: D,
            error: N,
            disabled: E,
            variant: _,
            indeterminate: I,
            icon: R,
            rootRef: A,
            iconColor: O,
            onChange: P,
            autoContrast: T,
            mod: B,
            attributes: F,
            ...$
          } = a,
          V = w(),
          H = C || V?.size,
          U = (0, d.useStyles)({
            name: "Checkbox",
            props: a,
            classes: M,
            className: i,
            style: s,
            classNames: l,
            styles: c,
            unstyled: b,
            attributes: F,
            vars: x,
            varsResolver: L,
          }),
          { styleProps: G, rest: K } = (0, p.extractStyleProps)($),
          W = (0, r.useId)(g),
          q = {
            checked: V?.value.includes(K.value) ?? j,
            onChange: (e) => {
              V?.onChange(e), P?.(e);
            },
            disabled: V?.disabled ?? E,
          },
          Z = (0, o.useRef)(null),
          X = n || Z;
        return (
          (0, o.useEffect)(() => {
            X &&
              "current" in X &&
              X.current &&
              ((X.current.indeterminate = I || !1),
              I
                ? X.current.setAttribute("data-indeterminate", "true")
                : X.current.removeAttribute("data-indeterminate"));
          }, [I, X]),
          (0, t.jsx)(h, {
            ...U("root"),
            __staticSelector: "Checkbox",
            __stylesApiProps: a,
            id: W,
            size: H,
            labelPosition: S,
            label: v,
            description: D,
            error: N,
            disabled: q.disabled,
            classNames: l,
            styles: c,
            unstyled: b,
            "data-checked": q.checked || j || void 0,
            variant: _,
            ref: A,
            mod: B,
            ...G,
            ...k,
            children: (0, t.jsxs)(m.Box, {
              ...U("inner"),
              mod: { "data-label-position": S },
              children: [
                (0, t.jsx)(m.Box, {
                  component: "input",
                  id: W,
                  ref: X,
                  mod: { error: !!N },
                  ...U("input", { focusable: !0, variant: _ }),
                  ...K,
                  ...q,
                  type: "checkbox",
                }),
                (0, t.jsx)(R, { indeterminate: I, ...U("icon") }),
              ],
            }),
          })
        );
      });
    (F.classes = { ...M, ...f }),
      (F.displayName = "@mantine/core/Checkbox"),
      (F.Group = R),
      (F.Indicator = B),
      (F.Card = E),
      e.s(["Checkbox", () => F], 598323);
  },
  22909,
  (e) => {
    "use strict";
    var t = e.i(843476),
      o = e.i(598323);
    function r({ className: e, color: o }) {
      return (0, t.jsx)("div", { className: e, style: { background: o } });
    }
    e.s([
      "default",
      0,
      ({
        shape: e = "square",
        color: n = "#ffffff",
        inactiveColor: a = "#ffffff",
        size: l = "small",
        customClassNames: i,
        ...s
      }) =>
        (0, t.jsx)(o.Checkbox, {
          icon: ({ className: e }) =>
            (0, t.jsx)(r, { className: e, color: s?.checked ? n : a }),
          classNames: {
            inner: `!flex !justify-center !items-center ${i?.inner || ""}`,
            input: `!bg-transparent !rounded-[2px] ${i?.input || ""}`,
            label: `font-medium ${
              "small" === l ? "text-[12px] !pl-1" : "text-[14px] !pl-2"
            } ${i?.label || ""}`,
            icon: `!m-0 !top-1/2 !left-1/2 !transform !-translate-x-1/2 !-translate-y-1/2 ${
              "small" === l ? "!w-[35%] !h-[35%]" : "!w-[42%] !h-[42%]"
            } ${i?.icon || ""}`,
            description: `!text-slate-900 !text-sm ${
              "small" === l ? "!pl-1" : "!pl-2"
            } ${i?.description || ""}`,
            body: `!items-center ${i?.body || ""}`,
          },
          styles: {
            input: {
              width: "small" === l ? 13 : 16,
              height: "small" === l ? 13 : 16,
              borderColor: s?.checked ? n : a,
            },
          },
          ...s,
        }),
    ]);
  },
  344423,
  (e) => {
    "use strict";
    let t = (0, e.i(33550).default)("outline", "alert-circle", "AlertCircle", [
      ["path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0", key: "svg-0" }],
      ["path", { d: "M12 8v4", key: "svg-1" }],
      ["path", { d: "M12 16h.01", key: "svg-2" }],
    ]);
    e.s(["IconAlertCircle", () => t], 344423);
  },
  912761,
  (e) => {
    "use strict";
    function t(e, t) {
      return "boolean" == typeof e ? e : t.autoContrast;
    }
    e.s(["getAutoContrastValue", () => t]);
  },
  898215,
  (e) => {
    "use strict";
    var t = e.i(271645),
      o = e.i(211441),
      r = e.i(390581);
    function n(e) {
      let { login: n } = (0, t.useContext)(r.P);
      return (0, o.u)("login", e), { login: n };
    }
    e.i(345234), e.s(["useLogin", () => n], 898215);
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
        classNames: i,
        useDrawerOnMobile: s,
        drawerHeight: c = "75%",
        ...u
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
              overlay: (0, l.cn)(t.overlay, i?.overlay),
              content: (0, l.cn)(t.content, i?.content),
              header: (0, l.cn)(t.header, i?.header),
              title: (0, l.cn)(t.title, i?.title),
              body: (0, l.cn)(t.body, i?.body),
              close: (0, l.cn)(t.close, i?.close),
            };
          },
          x = (0, t.jsx)(n.IconX, {
            size: 22,
            stroke: 1.5,
            className:
              "text-zinc-700 hover:text-zinc-400 transition-all duration-150",
          }),
          { centered: f, ...h } = u;
        return s && d
          ? (0, t.jsx)(r.Drawer, {
              ...h,
              position: "bottom",
              size: c,
              classNames: b(!0),
              closeButtonProps: { icon: x },
              children: e,
            })
          : (0, t.jsx)(o.Modal, {
              classNames: b(!1),
              closeButtonProps: { icon: x },
              centered: f,
              ...h,
              children: e,
            });
      },
    ]);
  },
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
      i = e.i(553917),
      s = e.i(344423),
      c = e.i(343794),
      u = e.i(271645),
      d = e.i(34342),
      p = e.i(843464);
    let m = (0, u.memo)(
      ({
        icon: e,
        chainIcon: o = "",
        iconClassName: r = "",
        chainIconClassName: n = "",
        badgeIconClassName: a = "",
        verified: l = !1,
        symbol: i = "",
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
                  children: i.slice(0, 2),
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
      let [n, a] = (0, u.useState)(!1),
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
          showProgress: u = !0,
          isClosePosition: d = !1,
          loading: p = !1,
          autoClose: x = !0,
          isError: f = !1,
          isSpot: h = !1,
          baseToken: v = !1,
          title: g = "",
          tokenName: C = "",
          selectedAsset: y = "",
          selectedSection: w = "",
          leverage: k = "",
          takeProfit: j = "",
          tokenQuantity: S = "",
          isProfit: D = !1,
          isLoss: N = !1,
          showTpsl: E = !0,
          showContent: _ = !0,
          isOnChain: I = !1,
          onChainLogoURI: R = "",
          onChainChainIcon: A = "",
          isWarning: O = !1,
          onDeposit: P = null,
          showDots: T = !1,
        }) => {
          e = i.notifications.show({
            id: e,
            autoClose: !!x && 4500,
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
              showProgress: u,
              children: (0, t.jsxs)("div", {
                className: (0, c.default)("py-3 px-2.5", {
                  "bg-[#FFAC00]/10": O,
                  "bg-blood/10": f,
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
                        (f || O) &&
                        (0, t.jsx)(s.IconAlertCircle, {
                          size: 20,
                          color: f ? "red" : "#FFAC00",
                        }),
                      (0, t.jsxs)("div", {
                        className:
                          "flex gap-2 justify-between items-center w-full",
                        children: [
                          (0, t.jsxs)("h2", {
                            className: (0, c.default)(
                              "font-medium text-xs flex items-center",
                              {
                                "text-blood": f,
                                "text-[#FFAC00]": O,
                                "text-white": !f && !O,
                              }
                            ),
                            children: [
                              g,
                              T &&
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
                              P &&
                                (0, t.jsx)(a.Button, {
                                  size: "xs",
                                  onClick: () => {
                                    P(), i.notifications.hide(e);
                                  },
                                  className:
                                    "!bg-white !text-black !h-6 !px-3 !text-[10px] font-bold border-none hover:!bg-white/90",
                                  children: "Deposit",
                                }),
                              (0, t.jsx)(a.Button, {
                                unstyled: !0,
                                onClick: () => i.notifications.hide(e),
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
                  _
                    ? (0, t.jsxs)(t.Fragment, {
                        children: [
                          (0, t.jsxs)("div", {
                            className: "flex gap-2 px-2.5 py-3",
                            children: [
                              I
                                ? (0, t.jsx)(m, {
                                    icon: R,
                                    chainIcon: A,
                                    iconClassName:
                                      "w-[35px] h-[30px] sm:w-[48px] sm:h-[43px]",
                                    chainIconClassName: "w-[15px] h-[15px]",
                                  })
                                : (0, t.jsx)(
                                    n.Avatar,
                                    {
                                      src: (0, r.getIconUri)(
                                        C,
                                        h ? "spot" : "crypto-perps"
                                      ),
                                      alt: "->",
                                      size: 22,
                                      name: C,
                                      color: "initials",
                                    },
                                    C
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
                                        children: y,
                                      }),
                                      h || I
                                        ? null
                                        : (0, t.jsxs)("p", {
                                            className: (0, c.default)(
                                              "leading-[100%] text-xs font-medium ",
                                              {
                                                "text-grass": "long" === w,
                                                "text-blood": "long" !== w,
                                              }
                                            ),
                                            children: [
                                              (0, t.jsx)("span", {
                                                className: "uppercase",
                                                children: w,
                                              }),
                                              " ",
                                              k,
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
                                      children: [S, " ", C],
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          E &&
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
                                  className: (0, c.default)("font-medium", {
                                    "text-grass": D,
                                    "text-blood": N,
                                  }),
                                  children: j,
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
      i = e.i(424848);
    function s(e, t) {
      return 0 === t.length
        ? e
        : t.reduce((t, o) => (Math.abs(o - e) < Math.abs(t - e) ? o : t));
    }
    var c = e.i(143798);
    e.i(207670);
    var u = e.i(515259),
      d = e.i(789549),
      p = e.i(314037),
      m = e.i(321879),
      b = e.i(917303);
    let [x, f] = (0, e.i(384660).createSafeContext)(
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
          ...i
        },
        s
      ) => {
        let { getStyles: c } = f();
        return (0, t.jsx)(h.Box, {
          tabIndex: -1,
          variant: r,
          size: e,
          ref: s,
          ...c("root"),
          ...i,
        });
      }
    );
    v.displayName = "@mantine/core/SliderRoot";
    var g = e.i(298193);
    let C = (0, o.forwardRef)(
      (
        {
          max: e,
          min: r,
          value: n,
          position: a,
          label: l,
          dragging: i,
          onMouseDown: s,
          onKeyDownCapture: c,
          labelTransitionProps: u,
          labelAlwaysOn: d,
          thumbLabel: p,
          onFocus: m,
          onBlur: b,
          showLabelOnHover: x,
          isHovered: v,
          children: C = null,
          disabled: y,
        },
        w
      ) => {
        let { getStyles: k } = f(),
          [j, S] = (0, o.useState)(!1),
          D = d || i || j || (x && v);
        return (0, t.jsxs)(h.Box, {
          tabIndex: 0,
          role: "slider",
          "aria-label": p,
          "aria-valuemax": e,
          "aria-valuemin": r,
          "aria-valuenow": n,
          ref: w,
          __vars: { "--slider-thumb-offset": `${a}%` },
          ...k("thumb", { focusable: !0 }),
          mod: { dragging: i, disabled: y },
          onFocus: (e) => {
            S(!0), "function" == typeof m && m(e);
          },
          onBlur: (e) => {
            S(!1), "function" == typeof b && b(e);
          },
          onTouchStart: s,
          onMouseDown: s,
          onKeyDownCapture: c,
          onClick: (e) => e.stopPropagation(),
          children: [
            C,
            (0, t.jsx)(g.Transition, {
              mounted: null != l && !!D,
              transition: "fade",
              duration: 0,
              ...u,
              children: (e) =>
                (0, t.jsx)("div", { ...k("label", { style: e }), children: l }),
            }),
          ],
        });
      }
    );
    function y({ value: e, min: t, max: o }) {
      return Math.min(Math.max(((e - t) / (o - t)) * 100, 0), 100);
    }
    function w({
      marks: e,
      min: r,
      max: n,
      disabled: a,
      value: l,
      offset: i,
      inverted: s,
    }) {
      let { getStyles: c } = f();
      if (!e) return null;
      let u = e.map((e, u) =>
        (0, o.createElement)(
          h.Box,
          {
            ...c("markWrapper"),
            __vars: {
              "--mark-offset": `${y({ value: e.value, min: r, max: n })}%`,
            },
            key: u,
          },
          (0, t.jsx)(h.Box, {
            ...c("mark"),
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
              })({ mark: e, value: l, offset: i, inverted: s }),
              disabled: a,
            },
          }),
          e.label && (0, t.jsx)("div", { ...c("markLabel"), children: e.label })
        )
      );
      return (0, t.jsx)("div", { children: u });
    }
    function k({
      filled: e,
      children: o,
      offset: r,
      disabled: n,
      marksOffset: a,
      inverted: l,
      containerProps: i,
      ...s
    }) {
      let { getStyles: c } = f();
      return (0, t.jsx)(h.Box, {
        ...c("trackContainer"),
        mod: { disabled: n },
        ...i,
        children: (0, t.jsxs)(h.Box, {
          ...c("track"),
          mod: { inverted: l, disabled: n },
          children: [
            (0, t.jsx)(h.Box, {
              mod: { inverted: l, disabled: n },
              __vars: {
                "--slider-bar-width": `calc(${e}% + 2 * var(--slider-size))`,
                "--slider-bar-offset": `calc(${r}% - var(--slider-size))`,
              },
              ...c("bar"),
            }),
            o,
            (0, t.jsx)(w, { ...s, offset: a, disabled: n, inverted: l }),
          ],
        }),
      });
    }
    function j(e, t) {
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
    function N(e) {
      let t = [...e].sort((e, t) => e.value - t.value);
      return t.length > 0 ? t[0].value : 0;
    }
    function E(e) {
      let t = [...e].sort((e, t) => e.value - t.value);
      return t.length > 0 ? t[t.length - 1].value : 100;
    }
    (C.displayName = "@mantine/core/SliderThumb"),
      (w.displayName = "@mantine/core/SliderMarks"),
      (k.displayName = "@mantine/core/SliderTrack");
    var _ = {
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
    let I = {
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
      R = (0, c.createVarsResolver)(
        (e, { size: t, color: o, thumbSize: r, radius: n }) => ({
          root: {
            "--slider-size": (0, i.getSize)(t, "slider-size"),
            "--slider-color": o ? (0, u.getThemeColor)(o, e) : void 0,
            "--slider-radius": void 0 === n ? void 0 : (0, i.getRadius)(n),
            "--slider-thumb-size":
              void 0 !== r ? (0, l.rem)(r) : "calc(var(--slider-size) * 2)",
          },
        })
      ),
      A = (0, m.factory)((e, l) => {
        let i = (0, d.useProps)("Slider", I, e),
          {
            classNames: c,
            styles: u,
            value: m,
            onChange: f,
            onChangeEnd: h,
            size: g,
            min: w,
            max: A,
            domain: O,
            step: P,
            precision: T,
            defaultValue: B,
            name: M,
            marks: z,
            label: L,
            labelTransitionProps: F,
            labelAlwaysOn: $,
            thumbLabel: V,
            showLabelOnHover: H,
            thumbChildren: U,
            disabled: G,
            unstyled: K,
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
          } = i,
          er = (0, p.useStyles)({
            name: "Slider",
            props: i,
            classes: _,
            classNames: c,
            className: Z,
            styles: u,
            style: X,
            attributes: et,
            vars: Q,
            varsResolver: R,
            unstyled: K,
          }),
          { dir: en } = (0, b.useDirection)(),
          [ea, el] = (0, o.useState)(!1),
          [ei, es] = (0, r.useUncontrolled)({
            value: "number" == typeof m ? (0, n.clamp)(m, w, A) : m,
            defaultValue: "number" == typeof B ? (0, n.clamp)(B, w, A) : B,
            finalValue: (0, n.clamp)(0, w, A),
            onChange: f,
          }),
          ec = (0, o.useRef)(ei),
          eu = (0, o.useRef)(h);
        (0, o.useEffect)(() => {
          eu.current = h;
        }, [h]);
        let ed = (0, o.useRef)(null),
          ep = (0, o.useRef)(null),
          [em, eb] = O || [w, A],
          ex = y({ value: ei, min: em, max: eb }),
          ef = W(ei),
          eh = "function" == typeof L ? L(ef) : L,
          ev =
            T ??
            (function (e) {
              if (!e) return 0;
              let t = e.toString().split(".");
              return t.length > 1 ? t[1].length : 0;
            })(P),
          { ref: eg, active: eC } = (function (e, t, r = "ltr") {
            let a = (0, o.useRef)(null),
              l = (0, o.useRef)(!1),
              i = (0, o.useRef)(!1),
              s = (0, o.useRef)(0),
              [c, u] = (0, o.useState)(!1);
            return (
              (0, o.useEffect)(() => {
                l.current = !0;
              }, []),
              (0, o.useEffect)(() => {
                let o = a.current,
                  c = ({ x: t, y: a }) => {
                    cancelAnimationFrame(s.current),
                      (s.current = requestAnimationFrame(() => {
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
                    !i.current &&
                      l.current &&
                      ((i.current = !0),
                      "function" == typeof t?.onScrubStart && t.onScrubStart(),
                      u(!0),
                      document.addEventListener("mousemove", b),
                      document.addEventListener("mouseup", p),
                      document.addEventListener("touchmove", f),
                      document.addEventListener("touchend", p));
                  },
                  p = () => {
                    i.current &&
                      l.current &&
                      ((i.current = !1),
                      u(!1),
                      document.removeEventListener("mousemove", b),
                      document.removeEventListener("mouseup", p),
                      document.removeEventListener("touchmove", f),
                      document.removeEventListener("touchend", p),
                      setTimeout(() => {
                        "function" == typeof t?.onScrubEnd && t.onScrubEnd();
                      }, 0));
                  },
                  m = (e) => {
                    d(), e.preventDefault(), b(e);
                  },
                  b = (e) => c({ x: e.clientX, y: e.clientY }),
                  x = (e) => {
                    e.cancelable && e.preventDefault(), d(), f(e);
                  },
                  f = (e) => {
                    e.cancelable && e.preventDefault(),
                      c({
                        x: e.changedTouches[0].clientX,
                        y: e.changedTouches[0].clientY,
                      });
                  };
                return (
                  o?.addEventListener("mousedown", m),
                  o?.addEventListener("touchstart", x, { passive: !1 }),
                  () => {
                    o &&
                      (o.removeEventListener("mousedown", m),
                      o.removeEventListener("touchstart", x));
                  }
                );
              }, [r, e]),
              { ref: a, active: c }
            );
          })(
            (0, o.useCallback)(
              ({ x: e }) => {
                if (!G) {
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
                        i = Math.max(
                          (0 !== l ? Math.round(l / n) * n : 0) + o,
                          o
                        );
                      return void 0 !== a ? Number(i.toFixed(a)) : i;
                    })({ value: e, min: em, max: eb, step: P, precision: ev }),
                    o = (0, n.clamp)(t, w, A);
                  es(
                    J && z?.length
                      ? s(
                          o,
                          z.map((e) => e.value)
                        )
                      : o
                  ),
                    (ec.current = o);
                }
              },
              [G, w, A, em, eb, P, ev, es, z, J]
            ),
            {
              onScrubEnd: (0, o.useCallback)(() => {
                if (!G && eu.current) {
                  let e =
                    J && z?.length
                      ? s(
                          ec.current,
                          z.map((e) => e.value)
                        )
                      : ec.current;
                  eu.current(e);
                }
              }, [G, z, J]),
            },
            en
          ),
          ey = (0, o.useCallback)(
            (e) => {
              !G && eu.current && eu.current(e);
            },
            [G]
          );
        return (0, t.jsx)(x, {
          value: { getStyles: er },
          children: (0, t.jsxs)(v, {
            ...eo,
            ref: (0, a.useMergedRef)(l, ed),
            onKeyDownCapture: (e) => {
              if (!G)
                switch (e.key) {
                  case "ArrowUp": {
                    if ((e.preventDefault(), ep.current?.focus(), J && z)) {
                      let e = S(ei, z);
                      es(e), ey(e);
                      break;
                    }
                    let t = j(Math.min(Math.max(ei + P, w), A), ev);
                    es(t), ey(t);
                    break;
                  }
                  case "ArrowRight": {
                    if ((e.preventDefault(), ep.current?.focus(), J && z)) {
                      let e = "rtl" === en ? D(ei, z) : S(ei, z);
                      es(e), ey(e);
                      break;
                    }
                    let t = j(
                      Math.min(Math.max("rtl" === en ? ei - P : ei + P, w), A),
                      ev
                    );
                    es(t), ey(t);
                    break;
                  }
                  case "ArrowDown": {
                    if ((e.preventDefault(), ep.current?.focus(), J && z)) {
                      let e = D(ei, z);
                      es(e), ey(e);
                      break;
                    }
                    let t = j(Math.min(Math.max(ei - P, w), A), ev);
                    es(t), ey(t);
                    break;
                  }
                  case "ArrowLeft": {
                    if ((e.preventDefault(), ep.current?.focus(), J && z)) {
                      let e = "rtl" === en ? S(ei, z) : D(ei, z);
                      es(e), ey(e);
                      break;
                    }
                    let t = j(
                      Math.min(Math.max("rtl" === en ? ei + P : ei - P, w), A),
                      ev
                    );
                    es(t), ey(t);
                    break;
                  }
                  case "Home":
                    if ((e.preventDefault(), ep.current?.focus(), J && z)) {
                      es(N(z)), ey(N(z));
                      break;
                    }
                    es(w), ey(w);
                    break;
                  case "End":
                    if ((e.preventDefault(), ep.current?.focus(), J && z)) {
                      es(E(z)), ey(E(z));
                      break;
                    }
                    es(A), ey(A);
                }
            },
            onMouseDownCapture: () => ed.current?.focus(),
            size: g,
            disabled: G,
            children: [
              (0, t.jsx)(k, {
                inverted: q,
                offset: 0,
                filled: ex,
                marks: z,
                min: em,
                max: eb,
                value: ef,
                disabled: G,
                containerProps: {
                  ref: eg,
                  onMouseEnter: H ? () => el(!0) : void 0,
                  onMouseLeave: H ? () => el(!1) : void 0,
                },
                children: (0, t.jsx)(C, {
                  max: eb,
                  min: em,
                  value: ef,
                  position: ex,
                  dragging: eC,
                  label: eh,
                  ref: ep,
                  labelTransitionProps: F,
                  labelAlwaysOn: $,
                  thumbLabel: V,
                  showLabelOnHover: H,
                  isHovered: ea,
                  disabled: G,
                  ...ee,
                  children: U,
                }),
              }),
              (0, t.jsx)("input", { type: "hidden", name: M, value: ef, ...Y }),
            ],
          }),
        });
      });
    (A.classes = _),
      (A.displayName = "@mantine/core/Slider"),
      e.s(["Slider", () => A], 458790);
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
    let [l, i] = (0, n.createSafeContext)(
      "Combobox component was not found in tree"
    );
    e.s(["ComboboxProvider", () => l, "useComboboxContext", () => i], 735986);
    var s = e.i(424848),
      c = e.i(143798),
      u = e.i(515259),
      d = e.i(789549),
      p = e.i(314037),
      m = e.i(644662),
      b = e.i(321879),
      x = {
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
    e.s(["default", () => x], 197328);
    let f = { error: null },
      h = (0, c.createVarsResolver)((e, { size: t, color: o }) => ({
        chevron: {
          "--combobox-chevron-size": (0, s.getSize)(t, "combobox-chevron-size"),
          "--combobox-chevron-color": o ? (0, u.getThemeColor)(o, e) : void 0,
        },
      })),
      v = (0, b.factory)((e, t) => {
        let o = (0, d.useProps)("ComboboxChevron", f, e),
          {
            size: r,
            error: n,
            style: l,
            className: i,
            classNames: s,
            styles: c,
            unstyled: u,
            vars: b,
            mod: v,
            ...g
          } = o,
          C = (0, p.useStyles)({
            name: "ComboboxChevron",
            classes: x,
            props: o,
            style: l,
            className: i,
            classNames: s,
            styles: c,
            unstyled: u,
            vars: b,
            varsResolver: h,
            rootSelector: "chevron",
          });
        return (0, a.jsx)(m.Box, {
          component: "svg",
          ...g,
          ...C("chevron"),
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
    (v.classes = x),
      (v.displayName = "@mantine/core/ComboboxChevron"),
      e.s(["ComboboxChevron", () => v], 372311);
    var g = e.i(22084);
    let C = (0, t.forwardRef)(
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
    (C.displayName = "@mantine/core/ComboboxClearButton"),
      e.s(["ComboboxClearButton", () => C], 224116);
    var y = e.i(857142);
    let w = (0, b.factory)((e, t) => {
      let {
          classNames: o,
          styles: r,
          className: n,
          style: l,
          hidden: s,
          ...c
        } = (0, d.useProps)("ComboboxDropdown", null, e),
        u = i();
      return (0, a.jsx)(y.Popover.Dropdown, {
        ...c,
        ref: t,
        role: "presentation",
        "data-hidden": s || void 0,
        ...u.getStyles("dropdown", {
          className: n,
          style: l,
          classNames: o,
          styles: r,
        }),
      });
    });
    (w.classes = x),
      (w.displayName = "@mantine/core/ComboboxDropdown"),
      e.s(["ComboboxDropdown", () => w], 47003);
    var k = e.i(795991);
    let j = { refProp: "ref" },
      S = (0, b.factory)((e, t) => {
        let { children: o, refProp: r } = (0, d.useProps)(
          "ComboboxDropdownTarget",
          j,
          e
        );
        if ((i(), !(0, k.isElement)(o)))
          throw Error(
            "Combobox.DropdownTarget component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
          );
        return (0, a.jsx)(y.Popover.Target, {
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
          vars: s,
          ...c
        } = (0, d.useProps)("ComboboxEmpty", null, e),
        u = i();
      return (0, a.jsx)(m.Box, {
        ref: t,
        ...u.getStyles("empty", {
          className: r,
          classNames: o,
          styles: l,
          style: n,
        }),
        ...c,
      });
    });
    (D.classes = x),
      (D.displayName = "@mantine/core/ComboboxEmpty"),
      e.s(["ComboboxEmpty", () => D], 373922);
    var N = e.i(931316),
      E = e.i(532503);
    function _({
      onKeyDown: e,
      withKeyboardNavigation: o,
      withAriaAttributes: r,
      withExpandedAttribute: n,
      targetType: a,
      autoComplete: l,
    }) {
      let s = i(),
        [c, u] = (0, t.useState)(null);
      return {
        ...(r
          ? {
              "aria-haspopup": "listbox",
              "aria-expanded": n
                ? !!(s.store.listId && s.store.dropdownOpened)
                : void 0,
              "aria-controls":
                s.store.dropdownOpened && s.store.listId
                  ? s.store.listId
                  : void 0,
              "aria-activedescendant": (s.store.dropdownOpened && c) || void 0,
              autoComplete: l,
              "data-expanded": s.store.dropdownOpened || void 0,
              "data-mantine-stop-propagation": s.store.dropdownOpened || void 0,
            }
          : {}),
        onKeyDown: (t) => {
          if ((e?.(t), !s.readOnly && o) && !t.nativeEvent.isComposing) {
            if (
              ("ArrowDown" === t.nativeEvent.code &&
                (t.preventDefault(),
                s.store.dropdownOpened
                  ? u(s.store.selectNextOption())
                  : (s.store.openDropdown("keyboard"),
                    u(s.store.selectActiveOption()),
                    s.store.updateSelectedOptionIndex("selected", {
                      scrollIntoView: !0,
                    }))),
              "ArrowUp" === t.nativeEvent.code &&
                (t.preventDefault(),
                s.store.dropdownOpened
                  ? u(s.store.selectPreviousOption())
                  : (s.store.openDropdown("keyboard"),
                    u(s.store.selectActiveOption()),
                    s.store.updateSelectedOptionIndex("selected", {
                      scrollIntoView: !0,
                    }))),
              "Enter" === t.nativeEvent.code ||
                "NumpadEnter" === t.nativeEvent.code)
            ) {
              if (229 === t.nativeEvent.keyCode) return;
              let e = s.store.getSelectedOptionIndex();
              s.store.dropdownOpened && -1 !== e
                ? (t.preventDefault(), s.store.clickSelectedOption())
                : "button" === a &&
                  (t.preventDefault(), s.store.openDropdown("keyboard"));
            }
            "Escape" === t.key && s.store.closeDropdown("keyboard"),
              "Space" === t.nativeEvent.code &&
                "button" === a &&
                (t.preventDefault(), s.store.toggleDropdown("keyboard"));
          }
        },
      };
    }
    let I = {
        refProp: "ref",
        targetType: "input",
        withKeyboardNavigation: !0,
        withAriaAttributes: !0,
        withExpandedAttribute: !1,
        autoComplete: "off",
      },
      R = (0, b.factory)((e, o) => {
        let {
          children: r,
          refProp: n,
          withKeyboardNavigation: a,
          withAriaAttributes: l,
          withExpandedAttribute: s,
          targetType: c,
          autoComplete: u,
          ...p
        } = (0, d.useProps)("ComboboxEventsTarget", I, e);
        if (!(0, k.isElement)(r))
          throw Error(
            "Combobox.EventsTarget component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
          );
        let m = i(),
          b = _({
            targetType: c,
            withAriaAttributes: l,
            withKeyboardNavigation: a,
            withExpandedAttribute: s,
            onKeyDown: r.props.onKeyDown,
            autoComplete: u,
          });
        return (0, t.cloneElement)(r, {
          ...b,
          ...p,
          [n]: (0, N.useMergedRef)(o, m.store.targetRef, (0, E.getRefProp)(r)),
        });
      });
    (R.displayName = "@mantine/core/ComboboxEventsTarget"),
      e.s(["ComboboxEventsTarget", () => R], 125866);
    let A = (0, b.factory)((e, t) => {
      let {
          classNames: o,
          className: r,
          style: n,
          styles: l,
          vars: s,
          ...c
        } = (0, d.useProps)("ComboboxFooter", null, e),
        u = i();
      return (0, a.jsx)(m.Box, {
        ref: t,
        ...u.getStyles("footer", {
          className: r,
          classNames: o,
          style: n,
          styles: l,
        }),
        ...c,
        onMouseDown: (e) => {
          e.preventDefault();
        },
      });
    });
    (A.classes = x),
      (A.displayName = "@mantine/core/ComboboxFooter"),
      e.s(["ComboboxFooter", () => A], 452963);
    var O = e.i(751937);
    let P = (0, b.factory)((e, t) => {
      let {
          classNames: o,
          className: r,
          style: n,
          styles: l,
          vars: s,
          children: c,
          label: u,
          id: p,
          ...b
        } = (0, d.useProps)("ComboboxGroup", null, e),
        x = i(),
        f = (0, O.useId)(p);
      return (0, a.jsxs)(m.Box, {
        ref: t,
        role: "group",
        "aria-labelledby": u ? f : void 0,
        ...x.getStyles("group", {
          className: r,
          classNames: o,
          style: n,
          styles: l,
        }),
        ...b,
        children: [
          u &&
            (0, a.jsx)("div", {
              id: f,
              ...x.getStyles("groupLabel", { classNames: o, styles: l }),
              children: u,
            }),
          c,
        ],
      });
    });
    (P.classes = x),
      (P.displayName = "@mantine/core/ComboboxGroup"),
      e.s(["ComboboxGroup", () => P], 838818);
    let T = (0, b.factory)((e, t) => {
      let {
          classNames: o,
          className: r,
          style: n,
          styles: l,
          vars: s,
          ...c
        } = (0, d.useProps)("ComboboxHeader", null, e),
        u = i();
      return (0, a.jsx)(m.Box, {
        ref: t,
        ...u.getStyles("header", {
          className: r,
          classNames: o,
          style: n,
          styles: l,
        }),
        ...c,
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
    (T.classes = x),
      (T.displayName = "@mantine/core/ComboboxHeader"),
      e.s(["ComboboxHeader", () => T], 207823),
      (B.displayName = "@mantine/core/ComboboxHiddenInput"),
      e.s(["ComboboxHiddenInput", () => B], 123054);
    let M = (0, b.factory)((e, o) => {
      let r = (0, d.useProps)("ComboboxOption", null, e),
        {
          classNames: n,
          className: l,
          style: s,
          styles: c,
          vars: u,
          onClick: p,
          id: b,
          active: x,
          onMouseDown: f,
          onMouseOver: h,
          disabled: v,
          selected: g,
          mod: C,
          ...y
        } = r,
        w = i(),
        k = (0, t.useId)();
      return (0, a.jsx)(m.Box, {
        ...w.getStyles("option", {
          className: l,
          classNames: n,
          styles: c,
          style: s,
        }),
        ...y,
        ref: o,
        id: b || k,
        mod: [
          "combobox-option",
          {
            "combobox-active": x,
            "combobox-disabled": v,
            "combobox-selected": g,
          },
          C,
        ],
        role: "option",
        onClick: (e) => {
          v ? e.preventDefault() : (w.onOptionSubmit?.(r.value, r), p?.(e));
        },
        onMouseDown: (e) => {
          e.preventDefault(), f?.(e);
        },
        onMouseOver: (e) => {
          w.resetSelectionOnOptionHover && w.store.resetSelectedOption(),
            h?.(e);
        },
      });
    });
    (M.classes = x),
      (M.displayName = "@mantine/core/ComboboxOption"),
      e.s(["ComboboxOption", () => M], 582967);
    let z = (0, b.factory)((e, o) => {
      let {
          classNames: r,
          className: n,
          style: l,
          styles: s,
          id: c,
          onMouseDown: u,
          labelledBy: p,
          ...b
        } = (0, d.useProps)("ComboboxOptions", null, e),
        x = i(),
        f = (0, O.useId)(c);
      return (
        (0, t.useEffect)(() => {
          x.store.setListId(f);
        }, [f]),
        (0, a.jsx)(m.Box, {
          ref: o,
          ...x.getStyles("options", {
            className: n,
            style: l,
            classNames: r,
            styles: s,
          }),
          ...b,
          id: f,
          role: "listbox",
          "aria-labelledby": p,
          onMouseDown: (e) => {
            e.preventDefault(), u?.(e);
          },
        })
      );
    });
    (z.classes = x),
      (z.displayName = "@mantine/core/ComboboxOptions"),
      e.s(["ComboboxOptions", () => z], 802851);
    let L = { withAriaAttributes: !0, withKeyboardNavigation: !0 },
      F = (0, b.factory)((e, t) => {
        let {
            classNames: o,
            styles: r,
            unstyled: n,
            vars: l,
            withAriaAttributes: s,
            onKeyDown: c,
            withKeyboardNavigation: u,
            size: p,
            ...m
          } = (0, d.useProps)("ComboboxSearch", L, e),
          b = i(),
          x = b.getStyles("search"),
          f = _({
            targetType: "input",
            withAriaAttributes: s,
            withKeyboardNavigation: u,
            withExpandedAttribute: !1,
            onKeyDown: c,
            autoComplete: "off",
          });
        return (0, a.jsx)(g.Input, {
          ref: (0, N.useMergedRef)(t, b.store.searchRef),
          classNames: [{ input: x.className }, o],
          styles: [{ input: x.style }, r],
          size: p || b.size,
          ...f,
          ...m,
          __staticSelector: "Combobox",
        });
      });
    (F.classes = x),
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
          withAriaAttributes: s,
          withExpandedAttribute: c,
          targetType: u,
          autoComplete: p,
          ...m
        } = (0, d.useProps)("ComboboxTarget", $, e);
        if (!(0, k.isElement)(r))
          throw Error(
            "Combobox.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
          );
        let b = i(),
          x = _({
            targetType: u,
            withAriaAttributes: s,
            withKeyboardNavigation: l,
            withExpandedAttribute: c,
            onKeyDown: r.props.onKeyDown,
            autoComplete: p,
          }),
          f = (0, t.cloneElement)(r, { ...x, ...m });
        return (0, a.jsx)(y.Popover.Target, {
          ref: (0, N.useMergedRef)(o, b.store.targetRef),
          children: f,
        });
      });
    (V.displayName = "@mantine/core/ComboboxTarget"),
      e.s(["ComboboxTarget", () => V], 355827);
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
      opened: i,
      onOpenedChange: s,
      onDropdownClose: c,
      onDropdownOpen: u,
      loop: d = !0,
      scrollBehavior: p = "instant",
    } = {}) {
      let [m, b] = (0, o.useUncontrolled)({
          value: i,
          defaultValue: e,
          finalValue: !1,
          onChange: s,
        }),
        x = (0, t.useRef)(null),
        f = (0, t.useRef)(-1),
        h = (0, t.useRef)(null),
        v = (0, t.useRef)(null),
        g = (0, t.useRef)(-1),
        C = (0, t.useRef)(-1),
        y = (0, t.useRef)(-1),
        w = (0, t.useCallback)(
          (e = "unknown") => {
            m || (b(!0), u?.(e));
          },
          [b, u, m]
        ),
        k = (0, t.useCallback)(
          (e = "unknown") => {
            m && (b(!1), c?.(e));
          },
          [b, c, m]
        ),
        j = (0, t.useCallback)(
          (e = "unknown") => {
            m ? k(e) : w(e);
          },
          [k, w, m]
        ),
        S = (0, t.useCallback)(() => {
          let e = a(v.current),
            t = r(`#${x.current} [data-combobox-selected]`, e);
          t?.removeAttribute("data-combobox-selected"),
            t?.removeAttribute("aria-selected");
        }, []),
        D = (0, t.useCallback)(
          (e) => {
            let t = a(v.current),
              o = r(`#${x.current}`, t),
              l = o ? n("[data-combobox-option]", o) : null;
            if (!l) return null;
            let i = e >= l.length ? 0 : e < 0 ? l.length - 1 : e;
            return ((f.current = i),
            l?.[i] && !l[i].hasAttribute("data-combobox-disabled"))
              ? (S(),
                l[i].setAttribute("data-combobox-selected", "true"),
                l[i].setAttribute("aria-selected", "true"),
                l[i].scrollIntoView({ block: "nearest", behavior: p }),
                l[i].id)
              : null;
          },
          [p, S]
        ),
        N = (0, t.useCallback)(() => {
          let e = a(v.current),
            t = r(`#${x.current} [data-combobox-active]`, e);
          return t
            ? D(
                n(`#${x.current} [data-combobox-option]`, e).findIndex(
                  (e) => e === t
                )
              )
            : D(0);
        }, [D]),
        E = (0, t.useCallback)(() => {
          let e = a(v.current),
            t = n(`#${x.current} [data-combobox-option]`, e);
          return D(
            (function (e, t, o) {
              for (let o = e + 1; o < t.length; o += 1)
                if (!t[o].hasAttribute("data-combobox-disabled")) return o;
              if (o) {
                for (let e = 0; e < t.length; e += 1)
                  if (!t[e].hasAttribute("data-combobox-disabled")) return e;
              }
              return e;
            })(f.current, t, d)
          );
        }, [D, d]),
        _ = (0, t.useCallback)(() => {
          let e = a(v.current),
            t = n(`#${x.current} [data-combobox-option]`, e);
          return D(
            (function (e, t, o) {
              for (let o = e - 1; o >= 0; o -= 1)
                if (!t[o].hasAttribute("data-combobox-disabled")) return o;
              if (o) {
                for (let e = t.length - 1; e > -1; e -= 1)
                  if (!t[e].hasAttribute("data-combobox-disabled")) return e;
              }
              return e;
            })(f.current, t, d)
          );
        }, [D, d]),
        I = (0, t.useCallback)(() => {
          let e = a(v.current);
          return D(
            (function (e) {
              for (let t = 0; t < e.length; t += 1)
                if (!e[t].hasAttribute("data-combobox-disabled")) return t;
              return -1;
            })(n(`#${x.current} [data-combobox-option]`, e))
          );
        }, [D]),
        R = (0, t.useCallback)((e = "selected", t) => {
          y.current = window.setTimeout(() => {
            let o = a(v.current),
              r = n(`#${x.current} [data-combobox-option]`, o),
              l = r.findIndex((t) => t.hasAttribute(`data-combobox-${e}`));
            (f.current = l),
              t?.scrollIntoView &&
                r[l]?.scrollIntoView({ block: "nearest", behavior: p });
          }, 0);
        }, []),
        A = (0, t.useCallback)(() => {
          (f.current = -1), S();
        }, [S]),
        O = (0, t.useCallback)(() => {
          let e = a(v.current),
            t = n(`#${x.current} [data-combobox-option]`, e),
            o = t?.[f.current];
          o?.click();
        }, []),
        P = (0, t.useCallback)((e) => {
          x.current = e;
        }, []),
        T = (0, t.useCallback)(() => {
          g.current = window.setTimeout(() => h.current?.focus(), 0);
        }, []),
        B = (0, t.useCallback)(() => {
          C.current = window.setTimeout(() => v.current?.focus(), 0);
        }, []),
        M = (0, t.useCallback)(() => f.current, []);
      return (
        (0, t.useEffect)(
          () => () => {
            window.clearTimeout(g.current),
              window.clearTimeout(C.current),
              window.clearTimeout(y.current);
          },
          []
        ),
        {
          dropdownOpened: m,
          openDropdown: w,
          closeDropdown: k,
          toggleDropdown: j,
          selectedOptionIndex: f.current,
          getSelectedOptionIndex: M,
          selectOption: D,
          selectFirstOption: I,
          selectActiveOption: N,
          selectNextOption: E,
          selectPreviousOption: _,
          resetSelectedOption: A,
          updateSelectedOptionIndex: R,
          listId: x.current,
          setListId: P,
          clickSelectedOption: O,
          searchRef: h,
          focusSearchInput: T,
          targetRef: v,
          focusTarget: B,
        }
      );
    }
    e.i(843476), e.s(["useCombobox", () => l], 211048);
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
      i = e.i(908954),
      s = e.i(789549),
      c = e.i(321879),
      u = e.i(515389),
      d = e.i(813325),
      p = e.i(682451),
      m = e.i(424848),
      b = e.i(143798),
      x = e.i(314037),
      f = e.i(857142),
      h = e.i(735986),
      v = e.i(372311),
      g = e.i(224116),
      C = e.i(47003),
      y = e.i(475444),
      w = e.i(373922),
      k = e.i(125866),
      j = e.i(452963),
      S = e.i(838818),
      D = e.i(207823),
      N = e.i(123054),
      E = e.i(582967),
      _ = e.i(802851),
      I = e.i(602758),
      R = e.i(355827),
      A = e.i(211048),
      O = e.i(197328);
    let P = {
        keepMounted: !0,
        withinPortal: !0,
        resetSelectionOnOptionHover: !1,
        width: "target",
        transitionProps: { transition: "fade", duration: 0 },
        size: "sm",
      },
      T = (0, b.createVarsResolver)((e, { size: t, dropdownPadding: o }) => ({
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
      let o = (0, s.useProps)("Combobox", P, e),
        {
          classNames: r,
          styles: n,
          unstyled: a,
          children: l,
          store: i,
          vars: c,
          onOptionSubmit: u,
          onClose: d,
          size: p,
          dropdownPadding: m,
          resetSelectionOnOptionHover: b,
          __staticSelector: v,
          readOnly: g,
          attributes: C,
          ...y
        } = o,
        w = (0, A.useCombobox)(),
        k = i || w,
        j = (0, x.useStyles)({
          name: v || "Combobox",
          classes: O.default,
          props: o,
          classNames: r,
          styles: n,
          unstyled: a,
          attributes: C,
          vars: c,
          varsResolver: T,
        });
      return (0, t.jsx)(h.ComboboxProvider, {
        value: {
          getStyles: j,
          store: k,
          onOptionSubmit: u,
          size: p,
          resetSelectionOnOptionHover: b,
          readOnly: g,
        },
        children: (0, t.jsx)(f.Popover, {
          opened: k.dropdownOpened,
          preventPositionChangeWhenVisible: !0,
          ...y,
          onChange: (e) => !e && void (d?.(), k.closeDropdown()),
          withRoles: !1,
          unstyled: a,
          children: l,
        }),
      });
    }
    (B.extend = (e) => e),
      (B.classes = O.default),
      (B.displayName = "@mantine/core/Combobox"),
      (B.Target = R.ComboboxTarget),
      (B.Dropdown = C.ComboboxDropdown),
      (B.Options = _.ComboboxOptions),
      (B.Option = E.ComboboxOption),
      (B.Search = I.ComboboxSearch),
      (B.Empty = w.ComboboxEmpty),
      (B.Chevron = v.ComboboxChevron),
      (B.Footer = j.ComboboxFooter),
      (B.Header = D.ComboboxHeader),
      (B.EventsTarget = k.ComboboxEventsTarget),
      (B.DropdownTarget = y.ComboboxDropdownTarget),
      (B.Group = S.ComboboxGroup),
      (B.ClearButton = g.ComboboxClearButton),
      (B.HiddenInput = N.ComboboxHiddenInput),
      e.s(["Combobox", () => B], 19824);
    var M = e.i(94681),
      z = e.i(747596);
    function L(e) {
      return "group" in e;
    }
    function F({
      data: e,
      withCheckIcon: o,
      withAlignedLabels: r,
      value: n,
      checkIconPosition: a,
      unstyled: i,
      renderOption: s,
    }) {
      if (!L(e)) {
        var c;
        let u = ((c = e.value), Array.isArray(n) ? n.includes(c) : n === c),
          d =
            o &&
            (u
              ? (0, t.jsx)(M.CheckIcon, {
                  className: O.default.optionsDropdownCheckIcon,
                })
              : r
              ? (0, t.jsx)("div", {
                  className: O.default.optionsDropdownCheckPlaceholder,
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
          className: (0, l.default)({ [O.default.optionsDropdownOption]: !i }),
          "data-reverse": "right" === a || void 0,
          "data-checked": u || void 0,
          "aria-selected": u,
          active: u,
          children: "function" == typeof s ? s({ option: e, checked: u }) : p,
        });
      }
      let u = e.items.map((e) =>
        (0, t.jsx)(
          F,
          {
            data: e,
            value: n,
            unstyled: i,
            withCheckIcon: o,
            withAlignedLabels: r,
            checkIconPosition: a,
            renderOption: s,
          },
          e.value
        )
      );
      return (0, t.jsx)(B.Group, { label: e.group, children: u });
    }
    function $({
      data: e,
      hidden: o,
      hiddenWhenEmpty: r,
      filter: n,
      search: a,
      limit: l,
      maxDropdownHeight: i,
      withScrollArea: s = !0,
      filterOptions: c = !0,
      withCheckIcon: u = !1,
      withAlignedLabels: d = !1,
      value: p,
      checkIconPosition: m,
      nothingFoundMessage: b,
      unstyled: x,
      labelId: f,
      renderOption: h,
      scrollAreaProps: v,
      "aria-label": g,
    }) {
      !(function e(t, o = new Set()) {
        if (Array.isArray(t))
          for (let r of t)
            if (L(r)) e(r.items, o);
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
      let C =
          "string" == typeof a
            ? (
                n ||
                function e({ options: t, search: o, limit: r }) {
                  let n = o.trim().toLowerCase(),
                    a = [];
                  for (let l = 0; l < t.length; l += 1) {
                    let i = t[l];
                    if (a.length === r) break;
                    L(i) &&
                      a.push({
                        group: i.group,
                        items: e({
                          options: i.items,
                          search: o,
                          limit: r - a.length,
                        }),
                      }),
                      !L(i) && i.label.toLowerCase().includes(n) && a.push(i);
                  }
                  return a;
                }
              )({ options: e, search: c ? a : "", limit: l ?? 1 / 0 })
            : e,
        y = (function (e) {
          if (0 === e.length) return !0;
          for (let t of e) if (!("group" in t) || t.items.length > 0) return !1;
          return !0;
        })(C),
        w = C.map((e) =>
          (0, t.jsx)(
            F,
            {
              data: e,
              withCheckIcon: u,
              withAlignedLabels: d,
              value: p,
              checkIconPosition: m,
              unstyled: x,
              renderOption: h,
            },
            L(e) ? e.group : e.value
          )
        );
      return (0, t.jsx)(B.Dropdown, {
        hidden: o || (r && y),
        "data-composed": !0,
        children: (0, t.jsxs)(B.Options, {
          labelledBy: f,
          "aria-label": g,
          children: [
            s
              ? (0, t.jsx)(z.ScrollArea.Autosize, {
                  mah: i ?? 220,
                  type: "scroll",
                  scrollbarSize: "var(--combobox-padding)",
                  offsetScrollbars: "y",
                  ...v,
                  children: w,
                })
              : w,
            y && b && (0, t.jsx)(B.Empty, { children: b }),
          ],
        }),
      });
    }
    e.s(["isOptionsGroup", () => L], 8477),
      e.s(["OptionsDropdown", () => $], 537528);
    var V = e.i(578565);
    let H = { withCheckIcon: !0, allowDeselect: !0, checkIconPosition: "left" },
      U = (0, c.factory)((e, l) => {
        let c = (0, s.useProps)("Select", H, e),
          {
            classNames: p,
            styles: m,
            unstyled: b,
            vars: x,
            dropdownOpened: f,
            defaultDropdownOpened: h,
            onDropdownClose: v,
            onDropdownOpen: g,
            onFocus: C,
            onBlur: y,
            onClick: w,
            onChange: k,
            data: j,
            value: S,
            defaultValue: D,
            selectFirstOptionOnChange: N,
            onOptionSubmit: E,
            comboboxProps: _,
            readOnly: I,
            disabled: R,
            filter: O,
            limit: P,
            withScrollArea: T,
            maxDropdownHeight: M,
            size: z,
            searchable: L,
            rightSection: F,
            checkIconPosition: U,
            withCheckIcon: G,
            withAlignedLabels: K,
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
            onClear: ei,
            autoComplete: es,
            scrollAreaProps: ec,
            __defaultRightSection: eu,
            __clearSection: ed,
            __clearable: ep,
            chevronColor: em,
            autoSelectOnBlur: eb,
            attributes: ex,
            ...ef
          } = c,
          eh = (0, o.useMemo)(() => (0, u.getParsedComboboxData)(j), [j]),
          ev = (0, o.useRef)({}),
          eg = (0, o.useMemo)(() => (0, d.getOptionsLockup)(eh), [eh]),
          eC = (0, r.useId)(eo),
          [ey, ew, ek] = (0, n.useUncontrolled)({
            value: S,
            defaultValue: D,
            finalValue: null,
            onChange: k,
          }),
          ej =
            "string" == typeof ey
              ? ey in eg
                ? eg[ey]
                : ev.current[ey]
              : void 0,
          eS = (0, a.usePrevious)(ej),
          [eD, eN, eE] = (0, n.useUncontrolled)({
            value: X,
            defaultValue: Q,
            finalValue: ej ? ej.label : "",
            onChange: Y,
          }),
          e_ = (0, A.useCombobox)({
            opened: f,
            defaultOpened: h,
            onDropdownOpen: () => {
              g?.(),
                e_.updateSelectedOptionIndex("active", { scrollIntoView: !0 });
            },
            onDropdownClose: () => {
              v?.(), setTimeout(e_.resetSelectedOption, 0);
            },
          }),
          eI = (e) => {
            eN(e), e_.resetSelectedOption();
          },
          { resolvedClassNames: eR, resolvedStyles: eA } = (0,
          i.useResolvedStylesApi)({ props: c, styles: m, classNames: p });
        (0, o.useEffect)(() => {
          N && e_.selectFirstOption();
        }, [N, eD]),
          (0, o.useEffect)(() => {
            null === S && eI(""),
              "string" == typeof S &&
                ej &&
                (eS?.value !== ej.value || eS?.label !== ej.label) &&
                eI(ej.label);
          }, [S, ej]),
          (0, o.useEffect)(() => {
            ek ||
              eE ||
              eI(
                "string" == typeof ey
                  ? ey in eg
                    ? eg[ey]?.label
                    : ev.current[ey]?.label || ""
                  : ""
              );
          }, [eg, ey]),
          (0, o.useEffect)(() => {
            ey && ey in eg && (ev.current[ey] = eg[ey]);
          }, [eg, ey]);
        let eO = (0, t.jsx)(B.ClearButton, {
            ...en,
            onClear: () => {
              ew(null, null), eI(""), ei?.();
            },
          }),
          eP = er && !!ey && !R && !I;
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsxs)(B, {
              store: e_,
              __staticSelector: "Select",
              classNames: eR,
              styles: eA,
              unstyled: b,
              readOnly: I,
              size: z,
              attributes: ex,
              keepMounted: eb,
              onOptionSubmit: (e) => {
                E?.(e);
                let t = J && eg[e].value === ey ? null : eg[e],
                  o = t ? t.value : null;
                o !== ey && ew(o, t),
                  ek || eI(("string" == typeof o && t?.label) || ""),
                  e_.closeDropdown();
              },
              ..._,
              children: [
                (0, t.jsx)(B.Target, {
                  targetType: L ? "input" : "button",
                  autoComplete: es,
                  children: (0, t.jsx)(V.InputBase, {
                    id: eC,
                    ref: l,
                    __defaultRightSection: (0, t.jsx)(B.Chevron, {
                      size: z,
                      error: ee,
                      unstyled: b,
                      color: em,
                    }),
                    __clearSection: eO,
                    __clearable: eP,
                    rightSection: F,
                    rightSectionPointerEvents: et || "none",
                    ...ef,
                    size: z,
                    __staticSelector: "Select",
                    disabled: R,
                    readOnly: I || !L,
                    value: eD,
                    onChange: (e) => {
                      eI(e.currentTarget.value),
                        e_.openDropdown(),
                        N && e_.selectFirstOption();
                    },
                    onFocus: (e) => {
                      L && e_.openDropdown(), C?.(e);
                    },
                    onBlur: (e) => {
                      eb && e_.clickSelectedOption(), L && e_.closeDropdown();
                      let t =
                        "string" == typeof ey &&
                        (ey in eg ? eg[ey] : ev.current[ey]);
                      eI((t && t.label) || ""), y?.(e);
                    },
                    onClick: (e) => {
                      L ? e_.openDropdown() : e_.toggleDropdown(), w?.(e);
                    },
                    classNames: eR,
                    styles: eA,
                    unstyled: b,
                    pointer: !L,
                    error: ee,
                    attributes: ex,
                  }),
                }),
                (0, t.jsx)($, {
                  data: eh,
                  hidden: I || R,
                  filter: O,
                  search: eD,
                  limit: P,
                  hiddenWhenEmpty: !W,
                  withScrollArea: T,
                  maxDropdownHeight: M,
                  filterOptions: !!L && ej?.label !== eD,
                  value: ey,
                  checkIconPosition: U,
                  withCheckIcon: G,
                  withAlignedLabels: K,
                  nothingFoundMessage: W,
                  unstyled: b,
                  labelId: ef.label ? `${eC}-label` : void 0,
                  "aria-label": ef.label ? void 0 : ef["aria-label"],
                  renderOption: el,
                  scrollAreaProps: ec,
                }),
              ],
            }),
            (0, t.jsx)(B.HiddenInput, {
              value: ey,
              name: q,
              form: Z,
              disabled: R,
              ...ea,
            }),
          ],
        });
      });
    (U.classes = { ...V.InputBase.classes, ...B.classes }),
      (U.displayName = "@mantine/core/Select"),
      e.s(["Select", () => U], 453165);
  },
]);
