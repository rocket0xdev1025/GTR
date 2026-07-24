(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  620777,
  (e) => {
    "use strict";
    let a = (0, e.i(33550).default)("outline", "chevron-up", "ChevronUp", [
      ["path", { d: "M6 15l6 -6l6 6", key: "svg-0" }],
    ]);
    e.s(["IconChevronUp", () => a], 620777);
  },
  345794,
  (e) => {
    "use strict";
    let a = (0, e.i(33550).default)("outline", "brand-x", "BrandX", [
      ["path", { d: "M4 4l11.733 16h4.267l-11.733 -16z", key: "svg-0" }],
      [
        "path",
        { d: "M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772", key: "svg-1" },
      ],
    ]);
    e.s(["IconBrandX", () => a], 345794);
  },
  326091,
  535090,
  770281,
  (e) => {
    "use strict";
    var a = e.i(33550);
    let i = (0, a.default)("outline", "brand-telegram", "BrandTelegram", [
      ["path", { d: "M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4", key: "svg-0" }],
    ]);
    e.s(["IconBrandTelegram", () => i], 326091);
    let t = (0, a.default)("outline", "settings", "Settings", [
      [
        "path",
        {
          d: "M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z",
          key: "svg-0",
        },
      ],
      ["path", { d: "M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0", key: "svg-1" }],
    ]);
    e.s(["IconSettings", () => t], 535090);
    let r = (0, a.default)("outline", "edit", "Edit", [
      [
        "path",
        {
          d: "M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1",
          key: "svg-0",
        },
      ],
      [
        "path",
        {
          d: "M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z",
          key: "svg-1",
        },
      ],
      ["path", { d: "M16 5l3 3", key: "svg-2" }],
    ]);
    e.s(["IconEdit", () => r], 770281);
  },
  364384,
  (e) => {
    "use strict";
    var a = e.i(843476),
      i = e.i(751937),
      t = e.i(446614),
      r = e.i(271645),
      l = e.i(424848),
      s = e.i(143798);
    e.i(207670);
    var o = e.i(515259),
      n = e.i(789549),
      c = e.i(314037),
      d = e.i(919254),
      x = e.i(644662),
      h = e.i(321879),
      m = e.i(41430);
    let u = (0, r.createContext)(null),
      k = u.Provider;
    var p = e.i(340427),
      b = e.i(22084);
    let g = (0, h.factory)((e, i) => {
      let {
          value: r,
          defaultValue: l,
          onChange: s,
          size: o,
          wrapperProps: c,
          children: d,
          readOnly: x,
          disabled: h,
          ...m
        } = (0, n.useProps)("SwitchGroup", null, e),
        [u, g] = (0, t.useUncontrolled)({
          value: r,
          defaultValue: l,
          finalValue: [],
          onChange: s,
        });
      return (0, a.jsx)(k, {
        value: {
          value: u,
          onChange: (e) => {
            let a = e.currentTarget.value;
            x || g(u.includes(a) ? u.filter((e) => e !== a) : [...u, a]);
          },
          size: o,
          disabled: h,
        },
        children: (0, a.jsx)(b.Input.Wrapper, {
          size: o,
          ref: i,
          ...c,
          ...m,
          labelElement: "div",
          __staticSelector: "SwitchGroup",
          children: (0, a.jsx)(p.InputsGroupFieldset, {
            role: "group",
            children: d,
          }),
        }),
      });
    });
    (g.classes = b.Input.Wrapper.classes),
      (g.displayName = "@mantine/core/SwitchGroup");
    var f = {
      root: "m_5f93f3bb",
      input: "m_926b4011",
      track: "m_9307d992",
      thumb: "m_93039a1d",
      trackLabel: "m_8277e082",
    };
    let y = { labelPosition: "right", withThumbIndicator: !0 },
      v = (0, s.createVarsResolver)((e, { radius: a, color: i, size: t }) => ({
        root: {
          "--switch-radius": void 0 === a ? void 0 : (0, l.getRadius)(a),
          "--switch-height": (0, l.getSize)(t, "switch-height"),
          "--switch-width": (0, l.getSize)(t, "switch-width"),
          "--switch-thumb-size": (0, l.getSize)(t, "switch-thumb-size"),
          "--switch-label-font-size": (0, l.getSize)(
            t,
            "switch-label-font-size"
          ),
          "--switch-track-label-padding": (0, l.getSize)(
            t,
            "switch-track-label-padding"
          ),
          "--switch-color": i ? (0, o.getThemeColor)(i, e) : void 0,
        },
      })),
      B = (0, h.factory)((e, l) => {
        let s = (0, n.useProps)("Switch", y, e),
          {
            classNames: o,
            className: h,
            style: k,
            styles: p,
            unstyled: b,
            vars: g,
            color: B,
            label: A,
            offLabel: C,
            onLabel: E,
            id: S,
            size: w,
            radius: D,
            wrapperProps: V,
            thumbIcon: G,
            checked: _,
            defaultChecked: j,
            onChange: F,
            labelPosition: I,
            description: P,
            error: T,
            disabled: R,
            variant: z,
            rootRef: M,
            mod: H,
            withThumbIndicator: N,
            attributes: U,
            ...W
          } = s,
          $ = (0, r.useContext)(u),
          O = w || $?.size,
          L = (0, c.useStyles)({
            name: "Switch",
            props: s,
            classes: f,
            className: h,
            style: k,
            classNames: o,
            styles: p,
            unstyled: b,
            attributes: U,
            vars: g,
            varsResolver: v,
          }),
          { styleProps: Q, rest: q } = (0, d.extractStyleProps)(W),
          X = (0, i.useId)(S),
          K = {
            checked: $?.value.includes(q.value) ?? _,
            onChange: (e) => {
              $?.onChange(e), F?.(e);
            },
            disabled: $?.disabled ?? R,
          },
          [J, Y] = (0, t.useUncontrolled)({
            value: K.checked ?? _,
            defaultValue: j,
            finalValue: !1,
          });
        return (0, a.jsxs)(m.InlineInput, {
          ...L("root"),
          __staticSelector: "Switch",
          __stylesApiProps: s,
          id: X,
          size: O,
          labelPosition: I,
          label: A,
          description: P,
          error: T,
          disabled: K.disabled,
          bodyElement: "label",
          labelElement: "span",
          classNames: o,
          styles: p,
          unstyled: b,
          "data-checked": K.checked,
          variant: z,
          ref: M,
          mod: H,
          ...Q,
          ...V,
          children: [
            (0, a.jsx)("input", {
              ...q,
              ...K,
              checked: J,
              "data-checked": K.checked,
              onChange: (e) => {
                K.onChange?.(e), Y(e.currentTarget.checked);
              },
              id: X,
              ref: l,
              type: "checkbox",
              role: "switch",
              ...L("input"),
            }),
            (0, a.jsxs)(x.Box, {
              "aria-hidden": "true",
              component: "span",
              mod: {
                error: T,
                "label-position": I,
                "without-labels": !E && !C,
              },
              ...L("track"),
              children: [
                (0, a.jsx)(x.Box, {
                  component: "span",
                  mod: { "reduce-motion": !0, "with-thumb-indicator": N && !G },
                  ...L("thumb"),
                  children: G,
                }),
                (0, a.jsx)("span", { ...L("trackLabel"), children: J ? E : C }),
              ],
            }),
          ],
        });
      });
    (B.classes = { ...f, ...m.InlineInputClasses }),
      (B.displayName = "@mantine/core/Switch"),
      (B.Group = g),
      e.s(["Switch", () => B], 364384);
  },
  964890,
  (e) => {
    "use strict";
    var a = e.i(890357),
      i = e.i(974010),
      t = e.i(346944);
    e.s([
      "useExchangePrice",
      0,
      () => {
        let { selectedCurrency: e, exchangeRates: r } = (0, a.useExchangeStore)(
          (0, t.useShallow)((e) => ({
            selectedCurrency: e.selectedCurrency,
            exchangeRates: e.exchangeRates,
          }))
        );
        return {
          formatPrice: (a, t = !0, l = !0) => {
            if ("usd" !== e) {
              let s = l ? (0, i.formatIntlNumber)(a * r[e]) : a * r[e];
              return t ? `${(0, i.exchangeSymbol)(e)}${s}` : s;
            }
            return t ? `$${a}` : a?.toString();
          },
          selectedCurrency: e,
          exchangeRates: r,
        };
      },
    ]);
  },
  785642,
  (e) => {
    "use strict";
    let a = (0, e.i(33550).default)("outline", "circle-check", "CircleCheck", [
      [
        "path",
        { d: "M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0", key: "svg-0" },
      ],
      ["path", { d: "M9 12l2 2l4 -4", key: "svg-1" }],
    ]);
    e.s(["IconCircleCheck", () => a], 785642);
  },
  81341,
  (e) => {
    "use strict";
    var a = e.i(843476);
    let i = {
      src: e.i(488840).default,
      width: 161,
      height: 161,
      blurWidth: 0,
      blurHeight: 0,
    };
    var t = e.i(657688);
    e.s(
      [
        "default",
        0,
        ({ text: e = "No data found" }) =>
          (0, a.jsxs)("div", {
            className: "relative w-full  text-xs flex flex-col items-center",
            children: [
              (0, a.jsx)(t.default, { src: i, alt: "Empty Placeholder" }),
              (0, a.jsx)("p", {
                className:
                  "absolute bottom-2 text-xs font-medium text-slate-900",
                children: e,
              }),
            ],
          }),
      ],
      81341
    );
  },
  600017,
  748452,
  846595,
  (e) => {
    "use strict";
    var a = e.i(843476);
    let i = {
      src: e.i(234473).default,
      width: 16,
      height: 16,
      blurWidth: 0,
      blurHeight: 0,
    };
    e.s(["default", 0, i], 748452);
    let t = {
      src: e.i(969219).default,
      width: 16,
      height: 16,
      blurWidth: 0,
      blurHeight: 0,
    };
    e.s(["default", 0, t], 846595),
      e.s(
        [
          "default",
          0,
          ({ icon: e }) =>
            (0, a.jsx)("img", {
              src: ((e) => {
                switch (e) {
                  case "success":
                    return i.src;
                  case "fail":
                    return t.src;
                }
              })(e),
              alt: "->",
            }),
        ],
        600017
      );
  },
  574079,
  (e) => {
    "use strict";
    var a = e.i(843476),
      i = e.i(682451);
    e.i(271645);
    var t = e.i(424848),
      r = e.i(143798);
    e.i(207670);
    var l = e.i(789549),
      s = e.i(314037),
      o = e.i(644662),
      n = e.i(321879),
      c = { root: "m_18320242", "skeleton-fade": "m_299c329c" };
    let d = { visible: !0, animate: !0 },
      x = (0, r.createVarsResolver)(
        (e, { width: a, height: r, radius: l, circle: s }) => ({
          root: {
            "--skeleton-height": (0, i.rem)(r),
            "--skeleton-width": s ? (0, i.rem)(r) : (0, i.rem)(a),
            "--skeleton-radius": s
              ? "1000px"
              : void 0 === l
              ? void 0
              : (0, t.getRadius)(l),
          },
        })
      ),
      h = (0, n.factory)((e, i) => {
        let t = (0, l.useProps)("Skeleton", d, e),
          {
            classNames: r,
            className: n,
            style: h,
            styles: m,
            unstyled: u,
            vars: k,
            width: p,
            height: b,
            circle: g,
            visible: f,
            radius: y,
            animate: v,
            mod: B,
            attributes: A,
            ...C
          } = t,
          E = (0, s.useStyles)({
            name: "Skeleton",
            classes: c,
            props: t,
            className: n,
            style: h,
            classNames: r,
            styles: m,
            unstyled: u,
            attributes: A,
            vars: k,
            varsResolver: x,
          });
        return (0, a.jsx)(o.Box, {
          ref: i,
          ...E("root"),
          mod: [{ visible: f, animate: v }, B],
          ...C,
        });
      });
    (h.classes = c),
      (h.displayName = "@mantine/core/Skeleton"),
      e.s(["Skeleton", () => h], 574079);
  },
  152702,
  (e) => {
    "use strict";
    var a = e.i(867228);
    e.s([
      "useIsMobile",
      0,
      (e = 1e3) => (0, a.useMediaQuery)(`(max-width: ${e}px)`),
    ]);
  },
  344423,
  (e) => {
    "use strict";
    let a = (0, e.i(33550).default)("outline", "alert-circle", "AlertCircle", [
      ["path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0", key: "svg-0" }],
      ["path", { d: "M12 8v4", key: "svg-1" }],
      ["path", { d: "M12 16h.01", key: "svg-2" }],
    ]);
    e.s(["IconAlertCircle", () => a], 344423);
  },
  898215,
  (e) => {
    "use strict";
    var a = e.i(271645),
      i = e.i(211441),
      t = e.i(390581);
    function r(e) {
      let { login: r } = (0, a.useContext)(t.P);
      return (0, i.u)("login", e), { login: r };
    }
    e.i(345234), e.s(["useLogin", () => r], 898215);
  },
  912761,
  (e) => {
    "use strict";
    function a(e, a) {
      return "boolean" == typeof e ? e : a.autoContrast;
    }
    e.s(["getAutoContrastValue", () => a]);
  },
  145288,
  (e) => {
    "use strict";
    var a = e.i(843476),
      i = e.i(682451);
    e.i(271645);
    var t = e.i(424848),
      r = e.i(143798);
    e.i(207670);
    var l = e.i(515259),
      s = e.i(789549),
      o = e.i(314037),
      n = e.i(644662),
      c = e.i(321879);
    let [d, x] = (0, e.i(384660).createSafeContext)(
      "Table component was not found in the tree"
    );
    var h = {
      table: "m_b23fa0ef",
      th: "m_4e7aa4f3",
      tr: "m_4e7aa4fd",
      td: "m_4e7aa4ef",
      tbody: "m_b2404537",
      thead: "m_b242d975",
      caption: "m_9e5a3ac7",
      scrollContainer: "m_a100c15",
      scrollContainerInner: "m_62259741",
    };
    function m(e, i) {
      let t = `Table${e.charAt(0).toUpperCase()}${e.slice(1)}`,
        r = (0, c.factory)((r, l) => {
          let o = (0, s.useProps)(t, {}, r),
            { classNames: c, className: d, style: h, styles: m, ...u } = o,
            k = x();
          return (0, a.jsx)(n.Box, {
            component: e,
            ref: l,
            ...(function (e, a) {
              if (!a) return;
              let i = {};
              return (
                a.columnBorder &&
                  e.withColumnBorders &&
                  (i["data-with-column-border"] = !0),
                a.rowBorder &&
                  e.withRowBorders &&
                  (i["data-with-row-border"] = !0),
                a.striped && e.striped && (i["data-striped"] = e.striped),
                a.highlightOnHover &&
                  e.highlightOnHover &&
                  (i["data-hover"] = !0),
                a.captionSide &&
                  e.captionSide &&
                  (i["data-side"] = e.captionSide),
                a.stickyHeader && e.stickyHeader && (i["data-sticky"] = !0),
                i
              );
            })(k, i),
            ...k.getStyles(e, {
              className: d,
              classNames: c,
              style: h,
              styles: m,
              props: o,
            }),
            ...u,
          });
        });
      return (r.displayName = `@mantine/core/${t}`), (r.classes = h), r;
    }
    let u = m("th", { columnBorder: !0 }),
      k = m("td", { columnBorder: !0 }),
      p = m("tr", { rowBorder: !0, striped: !0, highlightOnHover: !0 }),
      b = m("thead", { stickyHeader: !0 }),
      g = m("tbody"),
      f = m("tfoot"),
      y = m("caption", { captionSide: !0 });
    function v({ data: e }) {
      return (0, a.jsxs)(a.Fragment, {
        children: [
          e.caption && (0, a.jsx)(y, { children: e.caption }),
          e.head &&
            (0, a.jsx)(b, {
              children: (0, a.jsx)(p, {
                children: e.head.map((e, i) =>
                  (0, a.jsx)(u, { children: e }, i)
                ),
              }),
            }),
          e.body &&
            (0, a.jsx)(g, {
              children: e.body.map((e, i) =>
                (0, a.jsx)(
                  p,
                  {
                    children: e.map((e, i) =>
                      (0, a.jsx)(k, { children: e }, i)
                    ),
                  },
                  i
                )
              ),
            }),
          e.foot &&
            (0, a.jsx)(f, {
              children: (0, a.jsx)(p, {
                children: e.foot.map((e, i) =>
                  (0, a.jsx)(u, { children: e }, i)
                ),
              }),
            }),
        ],
      });
    }
    v.displayName = "@mantine/core/TableDataRenderer";
    var B = e.i(747596);
    let A = { type: "scrollarea" },
      C = (0, r.createVarsResolver)(
        (e, { minWidth: a, maxHeight: t, type: r }) => ({
          scrollContainer: {
            "--table-min-width": (0, i.rem)(a),
            "--table-max-height": (0, i.rem)(t),
            "--table-overflow": "native" === r ? "auto" : void 0,
          },
        })
      ),
      E = (0, c.factory)((e, i) => {
        let t = (0, s.useProps)("TableScrollContainer", A, e),
          {
            classNames: r,
            className: l,
            style: c,
            styles: d,
            unstyled: x,
            vars: m,
            children: u,
            minWidth: k,
            maxHeight: p,
            type: b,
            scrollAreaProps: g,
            attributes: f,
            ...y
          } = t,
          v = (0, o.useStyles)({
            name: "TableScrollContainer",
            classes: h,
            props: t,
            className: l,
            style: c,
            classNames: r,
            styles: d,
            unstyled: x,
            attributes: f,
            vars: m,
            varsResolver: C,
            rootSelector: "scrollContainer",
          });
        return (0, a.jsx)(n.Box, {
          component: "scrollarea" === b ? B.ScrollArea : "div",
          ...("scrollarea" === b
            ? p
              ? { offsetScrollbars: "xy", ...g }
              : { offsetScrollbars: "x", ...g }
            : {}),
          ref: i,
          ...v("scrollContainer"),
          ...y,
          children: (0, a.jsx)("div", {
            ...v("scrollContainerInner"),
            children: u,
          }),
        });
      });
    (E.classes = h), (E.displayName = "@mantine/core/TableScrollContainer");
    let S = { withRowBorders: !0, verticalSpacing: 7 },
      w = (0, r.createVarsResolver)(
        (
          e,
          {
            layout: a,
            captionSide: r,
            horizontalSpacing: s,
            verticalSpacing: o,
            borderColor: n,
            stripedColor: c,
            highlightOnHoverColor: d,
            striped: x,
            highlightOnHover: h,
            stickyHeaderOffset: m,
            stickyHeader: u,
          }
        ) => ({
          table: {
            "--table-layout": a,
            "--table-caption-side": r,
            "--table-horizontal-spacing": (0, t.getSpacing)(s),
            "--table-vertical-spacing": (0, t.getSpacing)(o),
            "--table-border-color": n ? (0, l.getThemeColor)(n, e) : void 0,
            "--table-striped-color":
              x && c ? (0, l.getThemeColor)(c, e) : void 0,
            "--table-highlight-on-hover-color":
              h && d ? (0, l.getThemeColor)(d, e) : void 0,
            "--table-sticky-header-offset": u ? (0, i.rem)(m) : void 0,
          },
        })
      ),
      D = (0, c.factory)((e, i) => {
        let t = (0, s.useProps)("Table", S, e),
          {
            classNames: r,
            className: l,
            style: c,
            styles: x,
            unstyled: m,
            vars: u,
            horizontalSpacing: k,
            verticalSpacing: p,
            captionSide: b,
            stripedColor: g,
            highlightOnHoverColor: f,
            striped: y,
            highlightOnHover: B,
            withColumnBorders: A,
            withRowBorders: C,
            withTableBorder: E,
            borderColor: D,
            layout: V,
            variant: G,
            data: _,
            children: j,
            stickyHeader: F,
            stickyHeaderOffset: I,
            mod: P,
            tabularNums: T,
            attributes: R,
            ...z
          } = t,
          M = (0, o.useStyles)({
            name: "Table",
            props: t,
            className: l,
            style: c,
            classes: h,
            classNames: r,
            styles: x,
            unstyled: m,
            attributes: R,
            rootSelector: "table",
            vars: u,
            varsResolver: w,
          });
        return (0, a.jsx)(d, {
          value: {
            getStyles: M,
            stickyHeader: F,
            striped: !0 === y ? "odd" : y || void 0,
            highlightOnHover: B,
            withColumnBorders: A,
            withRowBorders: C,
            captionSide: b || "bottom",
          },
          children: (0, a.jsx)(n.Box, {
            component: "table",
            variant: G,
            ref: i,
            mod: [{ "data-with-table-border": E, "data-tabular-nums": T }, P],
            ...M("table"),
            ...z,
            children: j || (!!_ && (0, a.jsx)(v, { data: _ })),
          }),
        });
      });
    (D.classes = h),
      (D.displayName = "@mantine/core/Table"),
      (D.Td = k),
      (D.Th = u),
      (D.Tr = p),
      (D.Thead = b),
      (D.Tbody = g),
      (D.Tfoot = f),
      (D.Caption = y),
      (D.ScrollContainer = E),
      (D.DataRenderer = v),
      e.s(["Table", () => D], 145288);
  },
  94681,
  (e) => {
    "use strict";
    var a = e.i(843476),
      i = e.i(682451);
    function t({ size: e, style: t, ...r }) {
      let l =
        void 0 !== e
          ? { width: (0, i.rem)(e), height: (0, i.rem)(e), ...t }
          : t;
      return (0, a.jsx)("svg", {
        viewBox: "0 0 10 7",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        style: l,
        "aria-hidden": !0,
        ...r,
        children: (0, a.jsx)("path", {
          d: "M4 4.586L1.707 2.293A1 1 0 1 0 .293 3.707l3 3a.997.997 0 0 0 1.414 0l5-5A1 1 0 1 0 8.293.293L4 4.586z",
          fill: "currentColor",
          fillRule: "evenodd",
          clipRule: "evenodd",
        }),
      });
    }
    function r({ indeterminate: e, ...i }) {
      return e
        ? (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 32 6",
            "aria-hidden": !0,
            ...i,
            children: (0, a.jsx)("rect", {
              width: "32",
              height: "6",
              fill: "currentColor",
              rx: "3",
            }),
          })
        : (0, a.jsx)(t, { ...i });
    }
    e.i(271645),
      e.i(207670),
      e.s(["CheckIcon", () => t, "CheckboxIcon", () => r]);
  },
  598323,
  41430,
  340427,
  (e) => {
    "use strict";
    var a = e.i(843476),
      i = e.i(271645),
      t = e.i(751937),
      r = e.i(424848),
      l = e.i(143798);
    e.i(207670);
    var s = e.i(882360),
      o = e.i(515259),
      n = e.i(835783),
      c = e.i(912761),
      d = e.i(789549),
      x = e.i(314037),
      h = e.i(919254),
      m = e.i(644662),
      u = e.i(321879),
      k = e.i(22084),
      p = {
        root: "m_5f75b09e",
        body: "m_5f6e695e",
        labelWrapper: "m_d3ea56bb",
        label: "m_8ee546b8",
        description: "m_328f68c0",
        error: "m_8e8a99cc",
      };
    let b = (0, i.forwardRef)(
      (
        {
          __staticSelector: e,
          __stylesApiProps: i,
          className: t,
          classNames: l,
          styles: s,
          unstyled: o,
          children: n,
          label: c,
          description: d,
          id: h,
          disabled: u,
          error: b,
          size: g,
          labelPosition: f = "left",
          bodyElement: y = "div",
          labelElement: v = "label",
          variant: B,
          style: A,
          vars: C,
          mod: E,
          attributes: S,
          ...w
        },
        D
      ) => {
        let V = (0, x.useStyles)({
          name: e,
          props: i,
          className: t,
          style: A,
          classes: p,
          classNames: l,
          styles: s,
          unstyled: o,
          attributes: S,
        });
        return (0, a.jsx)(m.Box, {
          ...V("root"),
          ref: D,
          __vars: {
            "--label-fz": (0, r.getFontSize)(g),
            "--label-lh": (0, r.getSize)(g, "label-lh"),
          },
          mod: [{ "label-position": f }, E],
          variant: B,
          size: g,
          ...w,
          children: (0, a.jsxs)(m.Box, {
            component: y,
            htmlFor: "label" === y ? h : void 0,
            ...V("body"),
            children: [
              n,
              (0, a.jsxs)("div", {
                ...V("labelWrapper"),
                "data-disabled": u || void 0,
                children: [
                  c &&
                    (0, a.jsx)(m.Box, {
                      component: v,
                      htmlFor: "label" === v ? h : void 0,
                      ...V("label"),
                      "data-disabled": u || void 0,
                      children: c,
                    }),
                  d &&
                    (0, a.jsx)(k.Input.Description, {
                      size: g,
                      __inheritStyles: !1,
                      ...V("description"),
                      children: d,
                    }),
                  b &&
                    "boolean" != typeof b &&
                    (0, a.jsx)(k.Input.Error, {
                      size: g,
                      __inheritStyles: !1,
                      ...V("error"),
                      children: b,
                    }),
                ],
              }),
            ],
          }),
        });
      }
    );
    (b.displayName = "@mantine/core/InlineInput"),
      e.s(["InlineInput", () => b, "InlineInputClasses", () => p], 41430);
    var g = e.i(446614),
      f = e.i(825436);
    let y = (0, i.createContext)(null),
      v = y.Provider,
      B = () => (0, i.useContext)(y),
      [A, C] = (0, e.i(592499).createOptionalContext)();
    var E = { card: "m_26775b0a" };
    let S = { withBorder: !0 },
      w = (0, l.createVarsResolver)((e, { radius: a }) => ({
        card: { "--card-radius": (0, r.getRadius)(a) },
      })),
      D = (0, u.factory)((e, i) => {
        let t = (0, d.useProps)("CheckboxCard", S, e),
          {
            classNames: r,
            className: l,
            style: s,
            styles: o,
            unstyled: n,
            vars: c,
            checked: h,
            mod: m,
            withBorder: u,
            value: k,
            onClick: p,
            defaultChecked: b,
            onChange: y,
            attributes: v,
            ...C
          } = t,
          D = (0, x.useStyles)({
            name: "CheckboxCard",
            classes: E,
            props: t,
            className: l,
            style: s,
            classNames: r,
            styles: o,
            unstyled: n,
            attributes: v,
            vars: c,
            varsResolver: w,
            rootSelector: "card",
          }),
          V = B(),
          G =
            "boolean" == typeof h ? h : V ? V.value.includes(k || "") : void 0,
          [_, j] = (0, g.useUncontrolled)({
            value: G,
            defaultValue: b,
            finalValue: !1,
            onChange: y,
          });
        return (0, a.jsx)(A, {
          value: { checked: _ },
          children: (0, a.jsx)(f.UnstyledButton, {
            ref: i,
            mod: [{ "with-border": u, checked: _ }, m],
            ...D("card"),
            ...C,
            role: "checkbox",
            "aria-checked": _,
            onClick: (e) => {
              p?.(e), V?.onChange(k || ""), j(!_);
            },
          }),
        });
      });
    (D.displayName = "@mantine/core/CheckboxCard"), (D.classes = E);
    var V = e.i(698874);
    function G({ children: e, role: i }) {
      let t = (0, V.useInputWrapperContext)();
      return t
        ? (0, a.jsx)("div", {
            role: i,
            "aria-labelledby": t.labelId,
            "aria-describedby": t.describedBy,
            children: e,
          })
        : (0, a.jsx)(a.Fragment, { children: e });
    }
    e.s(["InputsGroupFieldset", () => G], 340427);
    let _ = (0, u.factory)((e, i) => {
      let {
          value: t,
          defaultValue: r,
          onChange: l,
          size: s,
          wrapperProps: o,
          children: n,
          readOnly: c,
          disabled: x,
          ...h
        } = (0, d.useProps)("CheckboxGroup", null, e),
        [m, u] = (0, g.useUncontrolled)({
          value: t,
          defaultValue: r,
          finalValue: [],
          onChange: l,
        });
      return (0, a.jsx)(v, {
        value: {
          value: m,
          onChange: (e) => {
            let a = "string" == typeof e ? e : e.currentTarget.value;
            c || u(m.includes(a) ? m.filter((e) => e !== a) : [...m, a]);
          },
          size: s,
          disabled: x,
        },
        children: (0, a.jsx)(k.Input.Wrapper, {
          size: s,
          ref: i,
          ...o,
          ...h,
          labelElement: "div",
          __staticSelector: "CheckboxGroup",
          children: (0, a.jsx)(G, { role: "group", children: n }),
        }),
      });
    });
    (_.classes = k.Input.Wrapper.classes),
      (_.displayName = "@mantine/core/CheckboxGroup");
    var j = e.i(94681),
      F = {
        indicator: "m_5e5256ee",
        icon: "m_1b1c543a",
        "indicator--outline": "m_76e20374",
      };
    let I = { icon: j.CheckboxIcon, variant: "filled" },
      P = (0, l.createVarsResolver)(
        (
          e,
          {
            radius: a,
            color: i,
            size: t,
            iconColor: l,
            variant: d,
            autoContrast: x,
          }
        ) => {
          let h = (0, s.parseThemeColor)({
              color: i || e.primaryColor,
              theme: e,
            }),
            m =
              h.isThemeColor && void 0 === h.shade
                ? `var(--mantine-color-${h.color}-outline)`
                : h.color;
          return {
            indicator: {
              "--checkbox-size": (0, r.getSize)(t, "checkbox-size"),
              "--checkbox-radius": void 0 === a ? void 0 : (0, r.getRadius)(a),
              "--checkbox-color":
                "outline" === d ? m : (0, o.getThemeColor)(i, e),
              "--checkbox-icon-color": l
                ? (0, o.getThemeColor)(l, e)
                : (0, c.getAutoContrastValue)(x, e)
                ? (0, n.getContrastColor)({
                    color: i,
                    theme: e,
                    autoContrast: x,
                  })
                : void 0,
            },
          };
        }
      ),
      T = (0, u.factory)((e, i) => {
        let t = (0, d.useProps)("CheckboxIndicator", I, e),
          {
            classNames: r,
            className: l,
            style: s,
            styles: o,
            unstyled: n,
            vars: c,
            icon: h,
            indeterminate: u,
            radius: k,
            color: p,
            iconColor: b,
            autoContrast: g,
            checked: f,
            mod: y,
            variant: v,
            disabled: B,
            attributes: A,
            ...E
          } = t,
          S = (0, x.useStyles)({
            name: "CheckboxIndicator",
            classes: F,
            props: t,
            className: l,
            style: s,
            classNames: r,
            styles: o,
            unstyled: n,
            attributes: A,
            vars: c,
            varsResolver: P,
            rootSelector: "indicator",
          }),
          w = C(),
          D =
            "boolean" == typeof f || "boolean" == typeof u
              ? f || u
              : w?.checked || !1;
        return (0, a.jsx)(m.Box, {
          ref: i,
          ...S("indicator", { variant: v }),
          variant: v,
          mod: [{ checked: D, disabled: B }, y],
          ...E,
          children: (0, a.jsx)(h, { indeterminate: u, ...S("icon") }),
        });
      });
    (T.displayName = "@mantine/core/CheckboxIndicator"), (T.classes = F);
    var R = {
      root: "m_bf2d988c",
      inner: "m_26062bec",
      input: "m_26063560",
      icon: "m_bf295423",
      "input--outline": "m_215c4542",
    };
    let z = { labelPosition: "right", icon: j.CheckboxIcon, variant: "filled" },
      M = (0, l.createVarsResolver)(
        (
          e,
          {
            radius: a,
            color: i,
            size: t,
            iconColor: l,
            variant: d,
            autoContrast: x,
          }
        ) => {
          let h = (0, s.parseThemeColor)({
              color: i || e.primaryColor,
              theme: e,
            }),
            m =
              h.isThemeColor && void 0 === h.shade
                ? `var(--mantine-color-${h.color}-outline)`
                : h.color;
          return {
            root: {
              "--checkbox-size": (0, r.getSize)(t, "checkbox-size"),
              "--checkbox-radius": void 0 === a ? void 0 : (0, r.getRadius)(a),
              "--checkbox-color":
                "outline" === d ? m : (0, o.getThemeColor)(i, e),
              "--checkbox-icon-color": l
                ? (0, o.getThemeColor)(l, e)
                : (0, c.getAutoContrastValue)(x, e)
                ? (0, n.getContrastColor)({
                    color: i,
                    theme: e,
                    autoContrast: x,
                  })
                : void 0,
            },
          };
        }
      ),
      H = (0, u.factory)((e, r) => {
        let l = (0, d.useProps)("Checkbox", z, e),
          {
            classNames: s,
            className: o,
            style: n,
            styles: c,
            unstyled: u,
            vars: k,
            color: p,
            label: g,
            id: f,
            size: y,
            radius: v,
            wrapperProps: A,
            checked: C,
            labelPosition: E,
            description: S,
            error: w,
            disabled: D,
            variant: V,
            indeterminate: G,
            icon: _,
            rootRef: j,
            iconColor: F,
            onChange: I,
            autoContrast: P,
            mod: T,
            attributes: H,
            ...N
          } = l,
          U = B(),
          W = y || U?.size,
          $ = (0, x.useStyles)({
            name: "Checkbox",
            props: l,
            classes: R,
            className: o,
            style: n,
            classNames: s,
            styles: c,
            unstyled: u,
            attributes: H,
            vars: k,
            varsResolver: M,
          }),
          { styleProps: O, rest: L } = (0, h.extractStyleProps)(N),
          Q = (0, t.useId)(f),
          q = {
            checked: U?.value.includes(L.value) ?? C,
            onChange: (e) => {
              U?.onChange(e), I?.(e);
            },
            disabled: U?.disabled ?? D,
          },
          X = (0, i.useRef)(null),
          K = r || X;
        return (
          (0, i.useEffect)(() => {
            K &&
              "current" in K &&
              K.current &&
              ((K.current.indeterminate = G || !1),
              G
                ? K.current.setAttribute("data-indeterminate", "true")
                : K.current.removeAttribute("data-indeterminate"));
          }, [G, K]),
          (0, a.jsx)(b, {
            ...$("root"),
            __staticSelector: "Checkbox",
            __stylesApiProps: l,
            id: Q,
            size: W,
            labelPosition: E,
            label: g,
            description: S,
            error: w,
            disabled: q.disabled,
            classNames: s,
            styles: c,
            unstyled: u,
            "data-checked": q.checked || C || void 0,
            variant: V,
            ref: j,
            mod: T,
            ...O,
            ...A,
            children: (0, a.jsxs)(m.Box, {
              ...$("inner"),
              mod: { "data-label-position": E },
              children: [
                (0, a.jsx)(m.Box, {
                  component: "input",
                  id: Q,
                  ref: K,
                  mod: { error: !!w },
                  ...$("input", { focusable: !0, variant: V }),
                  ...L,
                  ...q,
                  type: "checkbox",
                }),
                (0, a.jsx)(_, { indeterminate: G, ...$("icon") }),
              ],
            }),
          })
        );
      });
    (H.classes = { ...R, ...p }),
      (H.displayName = "@mantine/core/Checkbox"),
      (H.Group = _),
      (H.Indicator = T),
      (H.Card = D),
      e.s(["Checkbox", () => H], 598323);
  },
  22909,
  (e) => {
    "use strict";
    var a = e.i(843476),
      i = e.i(598323);
    function t({ className: e, color: i }) {
      return (0, a.jsx)("div", { className: e, style: { background: i } });
    }
    e.s([
      "default",
      0,
      ({
        shape: e = "square",
        color: r = "#ffffff",
        inactiveColor: l = "#ffffff",
        size: s = "small",
        customClassNames: o,
        ...n
      }) =>
        (0, a.jsx)(i.Checkbox, {
          icon: ({ className: e }) =>
            (0, a.jsx)(t, { className: e, color: n?.checked ? r : l }),
          classNames: {
            inner: `!flex !justify-center !items-center ${o?.inner || ""}`,
            input: `!bg-transparent !rounded-[2px] ${o?.input || ""}`,
            label: `font-medium ${
              "small" === s ? "text-[12px] !pl-1" : "text-[14px] !pl-2"
            } ${o?.label || ""}`,
            icon: `!m-0 !top-1/2 !left-1/2 !transform !-translate-x-1/2 !-translate-y-1/2 ${
              "small" === s ? "!w-[35%] !h-[35%]" : "!w-[42%] !h-[42%]"
            } ${o?.icon || ""}`,
            description: `!text-slate-900 !text-sm ${
              "small" === s ? "!pl-1" : "!pl-2"
            } ${o?.description || ""}`,
            body: `!items-center ${o?.body || ""}`,
          },
          styles: {
            input: {
              width: "small" === s ? 13 : 16,
              height: "small" === s ? 13 : 16,
              borderColor: n?.checked ? r : l,
            },
          },
          ...n,
        }),
    ]);
  },
  270170,
  (e) => {
    e.v("/_next/static/media/powered-by-hyperliquid-one.ef619767.svg");
  },
  635855,
  (e) => {
    e.v("/_next/static/media/binance.c5e0df6a.svg");
  },
  904041,
  (e) => {
    e.v("/_next/static/media/bybit-logo.eafb4e35.svg");
  },
  145072,
  (e) => {
    e.v("/_next/static/media/binance-logo-title.b54ab8ff.png");
  },
  606846,
  (e) => {
    e.v("/_next/static/media/hype-logo-title.f2fc4bca.png");
  },
  526886,
  (e) => {
    e.v("/_next/static/media/perps.a961ca82.gif");
  },
  510158,
  (e) => {
    e.v(
      JSON.parse(
        '{"nm":"Main Scene","ddd":0,"h":500,"w":500,"meta":{"g":"@lottiefiles/creator 1.46.0"},"layers":[{"ty":4,"nm":"Layer 1","sr":1,"st":0,"op":3034.00012357735,"ip":0,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6},"sk":{"a":0,"k":0},"p":{"a":0,"k":[351.5958,165.0396],"ix":2},"r":{"a":0,"k":0,"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":100,"ix":11}},"shapes":[],"ind":1},{"ty":4,"nm":"shadow","sr":1,"st":0,"op":3034.00012357735,"ip":0,"hd":true,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6},"sk":{"a":0,"k":0},"p":{"a":0,"k":[299.8718,258.5926],"ix":2},"r":{"a":0,"k":0,"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":100,"ix":11}},"ef":[{"ty":5,"mn":"ADBE Bulge","nm":"Bulge","ix":1,"en":1,"ef":[{"ty":0,"mn":"ADBE Bulge-0001","nm":"Horizontal Radius","ix":1,"v":{"a":0,"k":50,"ix":1}},{"ty":0,"mn":"ADBE Bulge-0002","nm":"Vertical Radius","ix":2,"v":{"a":0,"k":50,"ix":2}},{"ty":3,"mn":"ADBE Bulge-0003","nm":"Bulge Center","ix":3,"v":{"a":0,"k":[400,400],"ix":3}},{"ty":0,"mn":"ADBE Bulge-0004","nm":"Bulge Height","ix":4,"v":{"a":0,"k":1,"ix":4}},{"ty":0,"mn":"ADBE Bulge-0005","nm":"Taper Radius","ix":5,"v":{"a":0,"k":0,"ix":5}},{"ty":7,"mn":"ADBE Bulge-0006","nm":"Antialiasing (Best Qual Only)","ix":6,"v":{"a":0,"k":1,"ix":6}},{"ty":7,"mn":"ADBE Bulge-0007","nm":"Pinning","ix":7,"v":{"a":0,"k":0,"ix":7}}]}],"shapes":[{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"shadow","ix":1,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[88.735,37.534],[0,-81.073],[136.547,0],[29.581,12.512],[-55.473,0],[0,136.547]],"o":[[60.287,45.087],[0,136.547],[-34.139,0],[41.251,30.85],[136.547,0],[0,-102.408]],"v":[[46.587,-237.524],[145.896,-39.404],[-101.343,207.835],[-197.585,188.404],[-49.655,237.524],[197.585,-9.716]]},"ix":2}},{"ty":"fl","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.3961,0.4,0.4078],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[0,0],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]}],"ind":2},{"ty":4,"nm":"globe 3","sr":1,"st":0,"op":3034.00012357735,"ip":0,"hd":false,"ddd":0,"bm":0,"hasMask":false,"td":1,"ao":0,"ks":{"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6},"sk":{"a":0,"k":0},"p":{"a":0,"k":[250.2168,248.8766],"ix":2},"r":{"a":0,"k":0,"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":100,"ix":11}},"shapes":[{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"globe","ix":1,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,-136.547],[136.547,0],[0,136.547],[-136.547,0]],"o":[[0,136.547],[-136.547,0],[0,-136.547],[136.547,0]],"v":[[247.239,0],[0,247.239],[-247.239,0],[0,-247.239]]},"ix":2}},{"ty":"fl","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.5843,0.7098,0.8745],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[0,0],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]}],"ind":3},{"ty":4,"nm":"map 2","sr":1,"st":108.00000439893,"op":3142.00012797628,"ip":63.0000025660426,"hd":false,"ddd":0,"bm":0,"tt":1,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[217.643,251.419,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6},"sk":{"a":0,"k":0},"p":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[707.8868,-7.8274],"t":0},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[688.699,18.01599999999999],"t":68},{"s":[304.225,236.611],"t":165.000006720588}],"ix":2},"r":{"a":0,"k":-12.421,"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":100,"ix":11}},"ef":[{"ty":5,"mn":"ADBE Bulge","nm":"Bulge","ix":1,"en":1,"ef":[{"ty":0,"mn":"ADBE Bulge-0001","nm":"Horizontal Radius","ix":1,"v":{"a":0,"k":252,"ix":1}},{"ty":0,"mn":"ADBE Bulge-0002","nm":"Vertical Radius","ix":2,"v":{"a":0,"k":250,"ix":2}},{"ty":3,"mn":"ADBE Bulge-0003","nm":"Bulge Center","ix":3,"v":{"a":0,"k":[382,422],"ix":3}},{"ty":0,"mn":"ADBE Bulge-0004","nm":"Bulge Height","ix":4,"v":{"a":0,"k":1,"ix":4}},{"ty":0,"mn":"ADBE Bulge-0005","nm":"Taper Radius","ix":5,"v":{"a":0,"k":0,"ix":5}},{"ty":7,"mn":"ADBE Bulge-0006","nm":"Antialiasing (Best Qual Only)","ix":6,"v":{"a":0,"k":1,"ix":6}},{"ty":7,"mn":"ADBE Bulge-0007","nm":"Pinning","ix":7,"v":{"a":0,"k":0,"ix":7}}]}],"shapes":[{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Layer 1-2","ix":1,"cix":2,"np":6,"it":[{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Group 1","ix":1,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[-7.584,-2.01],[-5.852,-2.242],[-5.471,3.437],[-0.577,4.726],[1.204,4.526],[3.632,8.461],[4.446,2.744],[4.834,0.177],[6.302,-2.468],[4.906,-7.993],[-17.699,-25.636],[-4.182,1.238]],"o":[[6.096,1.635],[5.852,2.242],[4.271,-2.681],[0.577,-4.726],[-2.4,-8.891],[-2.015,-4.681],[-3.983,-2.431],[-6.709,-0.251],[-9.031,3.573],[-4.043,6.589],[2.263,3.276],[7.577,-2.229]],"v":[[0.84,25.177],[18.126,32.513],[36.694,32.152],[43.852,19.916],[49.576,-2.025],[37.416,-20.837],[24.118,-32.31],[10.263,-35.335],[-9.709,-33.004],[-25.291,-9.773],[-44.536,34.79],[-22.245,26.458]]},"ix":2}},{"ty":"fl","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.0078,0.4667,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[499.904,293.767],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Group 2","ix":2,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[2.152,0.384],[1.724,0.041],[1.012,1.484],[-0.43,1.342],[-0.861,1.041],[-1.841,1.847],[-1.425,0.243],[-1.174,-0.538],[-1.359,-1.23],[-0.374,-2.616],[2.87,-0.225],[0.915,0.758]],"o":[[-1.721,-0.224],[-1.724,-0.041],[-0.735,-1.192],[0.427,-1.249],[1.551,-2.066],[1.007,-1.018],[1.317,-0.113],[1.795,0.577],[1.885,1.898],[0.312,2.161],[-1.128,0.086],[-1.552,-1.427]],"v":[[-0.93,5.142],[-6.087,5.22],[-10.726,3.154],[-11.205,-0.816],[-9.258,-4.279],[-4.164,-10.156],[-0.6,-12.43],[3.206,-11.779],[7.992,-9.036],[11.005,-1.774],[9.465,12.457],[4.746,7.916]]},"ix":2}},{"ty":"fl","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.0078,0.4667,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[509.258,229.18],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Group 3","ix":3,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[-1.03,1.34],[-0.856,1.328],[-1.181,0.035],[-0.419,-0.937],[-0.05,-1.115],[0.032,-2.339],[0.499,-1.255],[0.904,-0.729],[1.363,-0.526],[1.398,1.021],[-1.277,2.346],[-0.808,0.332]],"o":[[0.941,-1.222],[0.856,-1.328],[0.921,-0.035],[0.391,1.046],[0.206,2.255],[0.053,1.327],[-0.525,1.002],[-1.004,1.019],[-1.803,0.515],[-1.155,-0.842],[0.504,-0.918],[1.62,-0.637]],"v":[[-0.026,-3.789],[2.442,-7.842],[5.655,-10.409],[7.734,-8.797],[8.4,-5.539],[8.666,1.365],[7.99,5.277],[5.823,7.902],[2.229,10.249],[-2.616,8.951],[-8.497,0.628],[-4.081,-0.761]]},"ix":2}},{"ty":"fl","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.0078,0.4667,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[481.742,207.267],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Group 4","ix":4,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[-3.08,-3.585],[-2.134,-3.13],[-4.089,-0.024],[-2.046,2.298],[-1.067,2.774],[-1.369,5.654],[1.236,2.931],[2.386,1.704],[4.134,0.78],[5.505,-2.55],[-2.991,-5.576],[-2.593,-0.746]],"o":[[2.487,2.923],[2.134,3.13],[3.182,0.015],[2.046,-2.298],[2.148,-5.453],[0.757,-3.122],[-1.095,-2.598],[-3.334,-2.368],[-5.924,-1.139],[-4.544,2.103],[1.172,2.192],[4.71,1.309]],"v":[[-3.662,9.33],[2.334,18.945],[11.873,24.957],[20.116,20.92],[24.459,13.052],[29.741,-3.627],[29.884,-13.021],[24.011,-19.222],[13.004,-24.632],[-4.649,-21.194],[-30.33,-0.732],[-15.879,2.345]]},"ix":2}},{"ty":"fl","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.0078,0.4667,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[111.694,124.224],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Group 5","ix":5,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[-12.159,-0.821],[0,0],[-0.649,-5.406],[6.106,-4.041],[-6.589,-6.901],[2.434,-6.671],[4.347,-4.941],[2.607,-2.909],[1.93,-2.689],[2.455,-3.3],[25.969,-37.632],[-9.234,-3.065],[-9.879,-0.593],[-2.754,-8.69],[-7.947,-5.744],[-2.89,-1.063],[-1.368,-7.377],[4.856,-6.185],[3.1,-3.926],[0.369,-12.959],[-5.332,-15.168],[3.238,-4.513],[5.341,3.709],[4.429,4.614],[8.428,8.591],[18.349,22.013],[3.757,4.664],[-4.579,11.202],[2.243,12.322],[4.686,13.041],[5.118,3.953],[11.66,6.48],[-0.315,14.356],[-0.239,25.488],[-20.255,8.179],[-5.788,-7.82]],"o":[[0,0],[5.904,0.399],[0.816,6.741],[-8.359,5.532],[4.892,5.124],[-2.189,5.997],[-2.59,2.919],[-2.227,2.494],[-2.396,3.343],[-4.059,5.483],[-5.396,7.813],[9.234,3.065],[9.879,0.593],[2.874,8.986],[2.455,1.766],[7.516,2.74],[1.368,7.377],[-3.088,3.951],[-8.395,10.638],[-0.442,16.097],[1.767,5.024],[-3.797,5.293],[-5.341,-3.709],[-8.345,-8.687],[-20.172,-20.628],[-3.83,-4.589],[-7.402,-9.495],[4.972,-11.84],[-2.47,-13.592],[-1.494,-4.175],[-4.147,-3.205],[-13.103,-7.275],[0.24,-8.715],[0.345,-37.634],[8.478,-3.43],[6.218,8.424]],"v":[[49.187,-163.35],[81.096,-161.193],[95.075,-153.727],[79.852,-140.213],[76.337,-115.487],[87.957,-99.369],[71.712,-88.257],[66.193,-78.244],[58.4,-71.808],[58.617,-54.02],[23.28,-41.416],[34.668,-20.156],[64.117,-17.951],[96.175,-9.058],[100.591,17.912],[109.175,21.259],[114.968,42.301],[109.05,63.736],[98.872,74.879],[89.26,112.336],[94.022,160.032],[94.805,175.39],[76.668,176.401],[63.785,162.308],[34.277,140.697],[-12.937,60.343],[-25.469,47.369],[-29.994,14.197],[4.905,-19.002],[-16.478,-44.817],[-25.831,-59.683],[-51.696,-72.498],[-70.087,-105.459],[-115.345,-136.638],[6.728,-173.936],[27.369,-175.389]]},"ix":2}},{"ty":"fl","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.0078,0.4667,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[1,304.401],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Group 6","ix":6,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[9.583,-7.611],[16.435,-8.198],[3.292,-1.351],[5.636,-1.526],[-1.739,-5.07],[-5.045,0.45],[-4.867,-1.023],[-0.789,-5.576],[3.741,-4.572],[-2.494,-5.668],[-5.607,3.097],[-5.972,2.413],[-6.917,-3.695],[-6.031,-4.819],[-2.766,-0.112],[0.475,2.496],[1.256,1.236],[-6.37,4.732],[-8.058,-0.218],[3.05,-8.794],[5.965,-1.824],[10.935,-1.969],[18.04,-10.645],[3.67,-6.568],[-9.016,-15.036],[-1.357,-0.054],[-5.331,-2.399],[-1.329,-14.824],[-7.569,-1.066],[-2.84,30.114],[-3.065,15.621],[-4.862,13.22],[12.802,22.489],[1.209,5.337],[-4.941,3.211],[-5.991,-3.305],[-7.009,-0.777],[-9.235,2.981],[-9.442,2.093],[-28.581,20.881],[-22.652,39.713],[49.818,-16.938],[40.624,-7.492],[8.16,2.147],[6.603,-2.327]],"o":[[-14.19,11.261],[-3.144,1.567],[-5.384,2.224],[-5.636,1.526],[1.533,4.384],[5.045,-0.45],[5.935,1.239],[0.789,5.576],[-4.144,5.018],[2.448,5.419],[5.607,-3.097],[7.508,-3.035],[6.917,3.695],[2.064,1.648],[2.766,0.112],[-0.311,-1.688],[-5.454,-5.345],[6.37,-4.732],[5.837,2.589],[-1.882,5.501],[-10.623,3.231],[-20.859,3.766],[-6.765,4],[-8.77,15.672],[10.381,17.334],[16.912,0.675],[20.076,9.074],[3.67,40.871],[20.713,2.943],[1.481,-15.768],[2.685,-13.677],[8.917,-24.561],[-2.764,-4.779],[-1.209,-5.337],[5.877,-3.789],[5.991,3.305],[9.723,1.081],[22.129,-7.131],[13.651,-3.031],[26.062,-19.064],[7.802,-13.654],[-14.332,4.916],[-8.258,1.523],[-6.086,-1.583],[-12.623,4.479]],"v":[[-84.249,-129.545],[-135.967,-107.589],[-145.157,-102.445],[-162.315,-99.071],[-171.872,-87.427],[-159.297,-82.077],[-144.28,-83.121],[-133.263,-71.133],[-138.534,-55.22],[-146.395,-38.938],[-129.596,-36.72],[-113.732,-47.268],[-90.541,-44.829],[-72.039,-30.9],[-64.891,-27.484],[-59.504,-32.049],[-62.762,-36.047],[-59.152,-55.745],[-35.953,-61.193],[-27.041,-36.196],[-42.133,-26.92],[-73.583,-16.223],[-135.942,-10.931],[-151.214,5.933],[-153.831,56.066],[-118.832,89.035],[-86.451,89.15],[-79.959,144.894],[-57.302,207.586],[3.139,142.136],[3.518,94.87],[19.073,55.588],[12.986,-18.141],[5.745,-32.902],[10.874,-47.814],[30.791,-46.205],[53.925,-31.426],[68.178,-60.527],[123.998,-35.692],[153.897,-87.873],[171.07,-173.554],[95.317,-202.991],[28.932,-172.758],[-32.704,-164.096],[-61.732,-159.743]]},"ix":2}},{"ty":"fl","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.0078,0.4667,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[334.714,226.91],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"tr","a":{"a":0,"k":[334.714,226.91],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[334.714,226.91],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]}],"ind":4,"tp":3},{"ty":4,"nm":"globe 2","sr":1,"st":0,"op":3034.00012357735,"ip":0,"hd":false,"ddd":0,"bm":0,"hasMask":false,"td":1,"ao":0,"ks":{"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6},"sk":{"a":0,"k":0},"p":{"a":0,"k":[250.2168,248.8766],"ix":2},"r":{"a":0,"k":0,"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":100,"ix":11}},"shapes":[{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"globe","ix":1,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,-136.547],[136.547,0],[0,136.547],[-136.547,0]],"o":[[0,136.547],[-136.547,0],[0,-136.547],[136.547,0]],"v":[[247.239,0],[0,247.239],[-247.239,0],[0,-247.239]]},"ix":2}},{"ty":"fl","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.5843,0.7098,0.8745],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[0,0],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]}],"ind":5},{"ty":4,"nm":"map","sr":1,"st":0,"op":3034.00012357735,"ip":0,"hd":false,"ddd":0,"bm":0,"tt":1,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[217.643,251.419,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6},"sk":{"a":0,"k":0},"p":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[317.8868,214.1726],"t":0},{"s":[-279.868,584.787],"t":165.000006720588}],"ix":2},"r":{"a":0,"k":-12.421,"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":100,"ix":11}},"ef":[{"ty":5,"mn":"ADBE Bulge","nm":"Bulge","ix":1,"en":1,"ef":[{"ty":0,"mn":"ADBE Bulge-0001","nm":"Horizontal Radius","ix":1,"v":{"a":0,"k":252,"ix":1}},{"ty":0,"mn":"ADBE Bulge-0002","nm":"Vertical Radius","ix":2,"v":{"a":0,"k":250,"ix":2}},{"ty":3,"mn":"ADBE Bulge-0003","nm":"Bulge Center","ix":3,"v":{"a":0,"k":[382,422],"ix":3}},{"ty":0,"mn":"ADBE Bulge-0004","nm":"Bulge Height","ix":4,"v":{"a":0,"k":1,"ix":4}},{"ty":0,"mn":"ADBE Bulge-0005","nm":"Taper Radius","ix":5,"v":{"a":0,"k":0,"ix":5}},{"ty":7,"mn":"ADBE Bulge-0006","nm":"Antialiasing (Best Qual Only)","ix":6,"v":{"a":0,"k":1,"ix":6}},{"ty":7,"mn":"ADBE Bulge-0007","nm":"Pinning","ix":7,"v":{"a":0,"k":0,"ix":7}}]}],"shapes":[{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Layer 1-2","ix":1,"cix":2,"np":6,"it":[{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Group 1","ix":1,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[-7.584,-2.01],[-5.852,-2.242],[-5.471,3.437],[-0.577,4.726],[1.204,4.526],[3.632,8.461],[4.446,2.744],[4.834,0.177],[6.302,-2.468],[4.906,-7.993],[-17.699,-25.636],[-4.182,1.238]],"o":[[6.096,1.635],[5.852,2.242],[4.271,-2.681],[0.577,-4.726],[-2.4,-8.891],[-2.015,-4.681],[-3.983,-2.431],[-6.709,-0.251],[-9.031,3.573],[-4.043,6.589],[2.263,3.276],[7.577,-2.229]],"v":[[0.84,25.177],[18.126,32.513],[36.694,32.152],[43.852,19.916],[49.576,-2.025],[37.416,-20.837],[24.118,-32.31],[10.263,-35.335],[-9.709,-33.004],[-25.291,-9.773],[-44.536,34.79],[-22.245,26.458]]},"ix":2}},{"ty":"fl","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.0078,0.4667,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[499.904,293.767],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Group 2","ix":2,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[2.152,0.384],[1.724,0.041],[1.012,1.484],[-0.43,1.342],[-0.861,1.041],[-1.841,1.847],[-1.425,0.243],[-1.174,-0.538],[-1.359,-1.23],[-0.374,-2.616],[2.87,-0.225],[0.915,0.758]],"o":[[-1.721,-0.224],[-1.724,-0.041],[-0.735,-1.192],[0.427,-1.249],[1.551,-2.066],[1.007,-1.018],[1.317,-0.113],[1.795,0.577],[1.885,1.898],[0.312,2.161],[-1.128,0.086],[-1.552,-1.427]],"v":[[-0.93,5.142],[-6.087,5.22],[-10.726,3.154],[-11.205,-0.816],[-9.258,-4.279],[-4.164,-10.156],[-0.6,-12.43],[3.206,-11.779],[7.992,-9.036],[11.005,-1.774],[9.465,12.457],[4.746,7.916]]},"ix":2}},{"ty":"fl","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.0078,0.4667,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[509.258,229.18],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Group 3","ix":3,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[-1.03,1.34],[-0.856,1.328],[-1.181,0.035],[-0.419,-0.937],[-0.05,-1.115],[0.032,-2.339],[0.499,-1.255],[0.904,-0.729],[1.363,-0.526],[1.398,1.021],[-1.277,2.346],[-0.808,0.332]],"o":[[0.941,-1.222],[0.856,-1.328],[0.921,-0.035],[0.391,1.046],[0.206,2.255],[0.053,1.327],[-0.525,1.002],[-1.004,1.019],[-1.803,0.515],[-1.155,-0.842],[0.504,-0.918],[1.62,-0.637]],"v":[[-0.026,-3.789],[2.442,-7.842],[5.655,-10.409],[7.734,-8.797],[8.4,-5.539],[8.666,1.365],[7.99,5.277],[5.823,7.902],[2.229,10.249],[-2.616,8.951],[-8.497,0.628],[-4.081,-0.761]]},"ix":2}},{"ty":"fl","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.0078,0.4667,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[481.742,207.267],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Group 4","ix":4,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[-3.08,-3.585],[-2.134,-3.13],[-4.089,-0.024],[-2.046,2.298],[-1.067,2.774],[-1.369,5.654],[1.236,2.931],[2.386,1.704],[4.134,0.78],[5.505,-2.55],[-2.991,-5.576],[-2.593,-0.746]],"o":[[2.487,2.923],[2.134,3.13],[3.182,0.015],[2.046,-2.298],[2.148,-5.453],[0.757,-3.122],[-1.095,-2.598],[-3.334,-2.368],[-5.924,-1.139],[-4.544,2.103],[1.172,2.192],[4.71,1.309]],"v":[[-3.662,9.33],[2.334,18.945],[11.873,24.957],[20.116,20.92],[24.459,13.052],[29.741,-3.627],[29.884,-13.021],[24.011,-19.222],[13.004,-24.632],[-4.649,-21.194],[-30.33,-0.732],[-15.879,2.345]]},"ix":2}},{"ty":"fl","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.0078,0.4667,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[111.694,124.224],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Group 5","ix":5,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[-12.159,-0.821],[0,0],[-0.649,-5.406],[6.106,-4.041],[-6.589,-6.901],[2.434,-6.671],[4.347,-4.941],[2.607,-2.909],[1.93,-2.689],[2.455,-3.3],[25.969,-37.632],[-9.234,-3.065],[-9.879,-0.593],[-2.754,-8.69],[-7.947,-5.744],[-2.89,-1.063],[-1.368,-7.377],[4.856,-6.185],[3.1,-3.926],[0.369,-12.959],[-5.332,-15.168],[3.238,-4.513],[5.341,3.709],[4.429,4.614],[8.428,8.591],[18.349,22.013],[3.757,4.664],[-4.579,11.202],[2.243,12.322],[4.686,13.041],[5.118,3.953],[11.66,6.48],[-0.315,14.356],[-0.239,25.488],[-20.255,8.179],[-5.788,-7.82]],"o":[[0,0],[5.904,0.399],[0.816,6.741],[-8.359,5.532],[4.892,5.124],[-2.189,5.997],[-2.59,2.919],[-2.227,2.494],[-2.396,3.343],[-4.059,5.483],[-5.396,7.813],[9.234,3.065],[9.879,0.593],[2.874,8.986],[2.455,1.766],[7.516,2.74],[1.368,7.377],[-3.088,3.951],[-8.395,10.638],[-0.442,16.097],[1.767,5.024],[-3.797,5.293],[-5.341,-3.709],[-8.345,-8.687],[-20.172,-20.628],[-3.83,-4.589],[-7.402,-9.495],[4.972,-11.84],[-2.47,-13.592],[-1.494,-4.175],[-4.147,-3.205],[-13.103,-7.275],[0.24,-8.715],[0.345,-37.634],[8.478,-3.43],[6.218,8.424]],"v":[[49.187,-163.35],[81.096,-161.193],[95.075,-153.727],[79.852,-140.213],[76.337,-115.487],[87.957,-99.369],[71.712,-88.257],[66.193,-78.244],[58.4,-71.808],[58.617,-54.02],[23.28,-41.416],[34.668,-20.156],[64.117,-17.951],[96.175,-9.058],[100.591,17.912],[109.175,21.259],[114.968,42.301],[109.05,63.736],[98.872,74.879],[89.26,112.336],[94.022,160.032],[94.805,175.39],[76.668,176.401],[63.785,162.308],[34.277,140.697],[-12.937,60.343],[-25.469,47.369],[-29.994,14.197],[4.905,-19.002],[-16.478,-44.817],[-25.831,-59.683],[-51.696,-72.498],[-70.087,-105.459],[-115.345,-136.638],[6.728,-173.936],[27.369,-175.389]]},"ix":2}},{"ty":"fl","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.0078,0.4667,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[1,304.401],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Group 6","ix":6,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[9.583,-7.611],[16.435,-8.198],[3.292,-1.351],[5.636,-1.526],[-1.739,-5.07],[-5.045,0.45],[-4.867,-1.023],[-0.789,-5.576],[3.741,-4.572],[-2.494,-5.668],[-5.607,3.097],[-5.972,2.413],[-6.917,-3.695],[-6.031,-4.819],[-2.766,-0.112],[0.475,2.496],[1.256,1.236],[-6.37,4.732],[-8.058,-0.218],[3.05,-8.794],[5.965,-1.824],[10.935,-1.969],[18.04,-10.645],[3.67,-6.568],[-9.016,-15.036],[-1.357,-0.054],[-5.331,-2.399],[-1.329,-14.824],[-7.569,-1.066],[-2.84,30.114],[-3.065,15.621],[-4.862,13.22],[12.802,22.489],[1.209,5.337],[-4.941,3.211],[-5.991,-3.305],[-7.009,-0.777],[-9.235,2.981],[-9.442,2.093],[-28.581,20.881],[-22.652,39.713],[49.818,-16.938],[40.624,-7.492],[8.16,2.147],[6.603,-2.327]],"o":[[-14.19,11.261],[-3.144,1.567],[-5.384,2.224],[-5.636,1.526],[1.533,4.384],[5.045,-0.45],[5.935,1.239],[0.789,5.576],[-4.144,5.018],[2.448,5.419],[5.607,-3.097],[7.508,-3.035],[6.917,3.695],[2.064,1.648],[2.766,0.112],[-0.311,-1.688],[-5.454,-5.345],[6.37,-4.732],[5.837,2.589],[-1.882,5.501],[-10.623,3.231],[-20.859,3.766],[-6.765,4],[-8.77,15.672],[10.381,17.334],[16.912,0.675],[20.076,9.074],[3.67,40.871],[20.713,2.943],[1.481,-15.768],[2.685,-13.677],[8.917,-24.561],[-2.764,-4.779],[-1.209,-5.337],[5.877,-3.789],[5.991,3.305],[9.723,1.081],[22.129,-7.131],[13.651,-3.031],[26.062,-19.064],[7.802,-13.654],[-14.332,4.916],[-8.258,1.523],[-6.086,-1.583],[-12.623,4.479]],"v":[[-84.249,-129.545],[-135.967,-107.589],[-145.157,-102.445],[-162.315,-99.071],[-171.872,-87.427],[-159.297,-82.077],[-144.28,-83.121],[-133.263,-71.133],[-138.534,-55.22],[-146.395,-38.938],[-129.596,-36.72],[-113.732,-47.268],[-90.541,-44.829],[-72.039,-30.9],[-64.891,-27.484],[-59.504,-32.049],[-62.762,-36.047],[-59.152,-55.745],[-35.953,-61.193],[-27.041,-36.196],[-42.133,-26.92],[-73.583,-16.223],[-135.942,-10.931],[-151.214,5.933],[-153.831,56.066],[-118.832,89.035],[-86.451,89.15],[-79.959,144.894],[-57.302,207.586],[3.139,142.136],[3.518,94.87],[19.073,55.588],[12.986,-18.141],[5.745,-32.902],[10.874,-47.814],[30.791,-46.205],[53.925,-31.426],[68.178,-60.527],[123.998,-35.692],[153.897,-87.873],[171.07,-173.554],[95.317,-202.991],[28.932,-172.758],[-32.704,-164.096],[-61.732,-159.743]]},"ix":2}},{"ty":"fl","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.0078,0.4667,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[334.714,226.91],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"tr","a":{"a":0,"k":[334.714,226.91],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[334.714,226.91],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]}],"ind":6,"tp":5},{"ty":4,"nm":"globe","sr":1,"st":0,"op":3034.00012357735,"ip":0,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6},"sk":{"a":0,"k":0},"p":{"a":0,"k":[250.2168,248.8766],"ix":2},"r":{"a":0,"k":0,"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":100,"ix":11}},"shapes":[{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"globe","ix":1,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,-136.547],[136.547,0],[0,136.547],[-136.547,0]],"o":[[0,136.547],[-136.547,0],[0,-136.547],[136.547,0]],"v":[[247.239,0],[0,247.239],[-247.239,0],[0,-247.239]]},"ix":2}},{"ty":"fl","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.0941,0.102,0.1216],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[0,0],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]}],"ind":7}],"v":"5.7.0","fr":29.9700012207031,"op":167,"ip":0,"assets":[]}'
      )
    );
  },
  496288,
  (e) => {
    e.v("/_next/static/media/btc-new.42dea4fc.svg");
  },
  420409,
  (e) => {
    e.v("/_next/static/media/eth-new.6d17815a.svg");
  },
  522075,
  (e) => {
    e.v("/_next/static/media/hype-new.65c703a5.svg");
  },
  476308,
  (e) => {
    e.v("/_next/static/media/play-store-mini.c85fef9a.svg");
  },
  902161,
  (e) => {
    "use strict";
    var a = e.i(843476),
      i = e.i(657688);
    let t = {
      src: e.i(270170).default,
      width: 103,
      height: 16,
      blurWidth: 0,
      blurHeight: 0,
    };
    var r = e.i(343794);
    e.s(
      [
        "default",
        0,
        ({ position: e = "row", direction: l = "row", width: s = 125 }) =>
          (0, a.jsxs)("div", {
            className: (0, r.default)("flex gap-1.5 items-center", {
              "!items-end": "right" === e,
              "!items-start": "left" === e,
              "!flex-col": "column" === l,
              "!flex-row": "row" === l,
            }),
            children: [
              (0, a.jsx)("span", {
                className: "text-xs lg:text-sm text-neutral-400 font-medium",
                children: "Powered By",
              }),
              (0, a.jsx)(i.default, {
                src: t,
                alt: "Powered By Hyperliquid",
                width: s,
              }),
            ],
          }),
      ],
      902161
    );
  },
  170134,
  (e) => {
    "use strict";
    let a = (0, e.i(33550).default)(
      "filled",
      "circle-check-filled",
      "CircleCheckFilled",
      [
        [
          "path",
          {
            d: "M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z",
            key: "svg-0",
          },
        ],
      ]
    );
    e.s(["IconCircleCheckFilled", () => a], 170134);
  },
  191740,
  (e) => {
    "use strict";
    let a = {
      src: e.i(635855).default,
      width: 14,
      height: 14,
      blurWidth: 0,
      blurHeight: 0,
    };
    var i = e.i(478246);
    let t = {
        src: e.i(904041).default,
        width: 512,
        height: 171,
        blurWidth: 0,
        blurHeight: 0,
      },
      r = {
        src: e.i(145072).default,
        width: 153,
        height: 102,
        blurWidth: 8,
        blurHeight: 5,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAe0lEQVR42m2MzQqCQBSFz9U7d5SCgsjMqZ6idkVRoSiCzk58/wdx7kZceODAB+cHWGiT0laNNYmB6T/cqJXnICKQYbAVyPceP3+P+JUIbCiJZnBHysfK+OHPnQ/roWTfvbkO3B52tEdqkdzyyGnxmlFxyehcKJ/I2fAyAde/C8Lf9PidAAAAAElFTkSuQmCC",
      },
      l = {
        src: e.i(606846).default,
        width: 153,
        height: 102,
        blurWidth: 8,
        blurHeight: 5,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAoElEQVR42lXLTwsBQQAF8HExM8vMll3Wn5qhtRSyopSDJCk38qfcfQDtSVIOiqtyUSRXDnvZw36+nbZ22/2dXq/3ABDSMpWKZa4WOFO5UdVEVjK5LAGBFCW43u2wmtlm/cnYHMymPSWvyeEgIYw2i/VwNV/un/eX9X58kgjC2GB7sI672/l6cX7u6f+1IcYIREmUEIgRKhm6Xmk1muLl9x7lmxclsu75LQAAAABJRU5ErkJggg==",
      },
      s = [
        {
          id: 1,
          label: "Hyperliquid",
          value: "hyperliquid",
          logo: i.default,
          logoTitle: l,
          gradient:
            "[background:linear-gradient(180deg,rgba(175,241,228,0.00)_0%,rgba(175,241,228,0.20)_100%)]",
          color: "#AFF1E4",
          disabled: !1,
        },
        {
          id: 2,
          label: "Binance",
          value: "binance",
          logo: a,
          logoTitle: r,
          gradient:
            "[background:linear-gradient(180deg,rgba(240,185,11,0.00)_0%,rgba(240,185,11,0.20)_100%)]",
          color: "#F0B90B",
          disabled: !0,
        },
        {
          id: 3,
          label: "Bybit",
          value: "bybit",
          logo: t,
          logoTitle: t,
          gradient:
            "[background:linear-gradient(180deg,rgba(240,185,11,0.00)_0%,rgba(247,167,0,0.20)_100%)]",
          color: "#F0B90B",
          disabled: !0,
        },
      ];
    e.s(["EXCHANGES_DATA", 0, s], 191740);
  },
]);
