(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  405948,
  77656,
  (e) => {
    "use strict";
    var t = e.i(843476),
      r = e.i(271645),
      n = e.i(446614),
      a = e.i(295082);
    e.i(207670);
    var o = e.i(908954),
      i = e.i(314037),
      l = e.i(789549),
      u = e.i(321879);
    function s({ open: e, close: t, openDelay: n, closeDelay: a }) {
      let o = (0, r.useRef)(-1),
        i = (0, r.useRef)(-1),
        l = () => {
          window.clearTimeout(o.current), window.clearTimeout(i.current);
        };
      return (
        (0, r.useEffect)(() => l, []),
        {
          openDropdown: () => {
            l(),
              0 === n || void 0 === n
                ? e()
                : (o.current = window.setTimeout(e, n));
          },
          closeDropdown: () => {
            l(),
              0 === a || void 0 === a
                ? t()
                : (i.current = window.setTimeout(t, a));
          },
        }
      );
    }
    var c = e.i(857142);
    let [d, m] = (0, e.i(384660).createSafeContext)(
      "Menu component was not found in the tree"
    );
    var f = e.i(644662),
      v = {
        dropdown: "m_dc9b7c9f",
        label: "m_9bfac126",
        divider: "m_efdf90cb",
        item: "m_99ac2aa1",
        itemLabel: "m_5476e0d3",
        itemSection: "m_8b75e504",
        chevron: "m_b85b0bed",
      };
    let p = (0, u.factory)((e, r) => {
      let {
          classNames: n,
          className: a,
          style: o,
          styles: i,
          vars: u,
          ...s
        } = (0, l.useProps)("MenuDivider", null, e),
        c = m();
      return (0, t.jsx)(f.Box, {
        ref: r,
        ...c.getStyles("divider", {
          className: a,
          style: o,
          styles: i,
          classNames: n,
        }),
        ...s,
      });
    });
    (p.classes = v), (p.displayName = "@mantine/core/MenuDivider");
    var g = e.i(931316),
      h = e.i(608350);
    let y = (0, u.factory)((e, n) => {
      let {
          classNames: a,
          className: o,
          style: i,
          styles: u,
          vars: s,
          onMouseEnter: d,
          onMouseLeave: f,
          onKeyDown: v,
          children: p,
          ...y
        } = (0, l.useProps)("MenuDropdown", null, e),
        w = (0, r.useRef)(null),
        b = m(),
        S = (0, h.createEventHandler)(v, (e) => {
          ("ArrowUp" === e.key || "ArrowDown" === e.key) &&
            (e.preventDefault(),
            w.current
              ?.querySelectorAll("[data-menu-item]:not(:disabled)")[0]
              ?.focus());
        }),
        x = (0, h.createEventHandler)(
          d,
          () =>
            ("hover" === b.trigger || "click-hover" === b.trigger) &&
            b.openDropdown()
        ),
        D = (0, h.createEventHandler)(
          f,
          () =>
            ("hover" === b.trigger || "click-hover" === b.trigger) &&
            b.closeDropdown()
        );
      return (0, t.jsxs)(c.Popover.Dropdown, {
        ...y,
        onMouseEnter: x,
        onMouseLeave: D,
        role: "menu",
        "aria-orientation": "vertical",
        ref: (0, g.useMergedRef)(n, w),
        ...b.getStyles("dropdown", {
          className: o,
          style: i,
          styles: u,
          classNames: a,
          withStaticClass: !1,
        }),
        tabIndex: -1,
        "data-menu-dropdown": !0,
        onKeyDown: S,
        children: [
          b.withInitialFocusPlaceholder &&
            (0, t.jsx)("div", {
              tabIndex: -1,
              "data-autofocus": !0,
              "data-mantine-stop-propagation": !0,
              style: { outline: 0 },
            }),
          p,
        ],
      });
    });
    (y.classes = v), (y.displayName = "@mantine/core/MenuDropdown");
    var w = e.i(128410),
      b = e.i(882360),
      S = e.i(522442),
      x = e.i(257942),
      D = e.i(917303),
      N = e.i(825436);
    let [M, I] = (0, e.i(592499).createOptionalContext)(),
      E = (0, x.polymorphicFactory)((e, n) => {
        let {
            classNames: a,
            className: o,
            style: i,
            styles: u,
            vars: s,
            color: c,
            closeMenuOnClick: d,
            leftSection: f,
            rightSection: v,
            children: p,
            disabled: y,
            "data-disabled": x,
            ...M
          } = (0, l.useProps)("MenuItem", null, e),
          E = m(),
          V = I(),
          T = (0, S.useMantineTheme)(),
          { dir: C } = (0, D.useDirection)(),
          A = (0, r.useRef)(null),
          R = (0, h.createEventHandler)(M.onClick, () => {
            !x &&
              ("boolean" == typeof d
                ? d && E.closeDropdownImmediately()
                : E.closeOnItemClick && E.closeDropdownImmediately());
          }),
          j = c
            ? T.variantColorResolver({ color: c, theme: T, variant: "light" })
            : void 0,
          k = c ? (0, b.parseThemeColor)({ color: c, theme: T }) : null,
          P = (0, h.createEventHandler)(M.onKeyDown, (e) => {
            "ArrowLeft" === e.key && V && (V.close(), V.focusParentItem());
          });
        return (0, t.jsxs)(N.UnstyledButton, {
          onMouseDown: (e) => e.preventDefault(),
          ...M,
          unstyled: E.unstyled,
          tabIndex: E.menuItemTabIndex,
          ...E.getStyles("item", {
            className: o,
            style: i,
            styles: u,
            classNames: a,
          }),
          ref: (0, g.useMergedRef)(A, n),
          role: "menuitem",
          disabled: y,
          "data-menu-item": !0,
          "data-disabled": y || x || void 0,
          "data-mantine-stop-propagation": !0,
          onClick: R,
          onKeyDown: (0, w.createScopedKeydownHandler)({
            siblingSelector: "[data-menu-item]:not([data-disabled])",
            parentSelector: "[data-menu-dropdown]",
            activateOnFocus: !1,
            loop: E.loop,
            dir: C,
            orientation: "vertical",
            onKeyDown: P,
          }),
          __vars: {
            "--menu-item-color":
              k?.isThemeColor && k?.shade === void 0
                ? `var(--mantine-color-${k.color}-6)`
                : j?.color,
            "--menu-item-hover": j?.hover,
          },
          children: [
            f &&
              (0, t.jsx)("div", {
                ...E.getStyles("itemSection", { styles: u, classNames: a }),
                "data-position": "left",
                children: f,
              }),
            p &&
              (0, t.jsx)("div", {
                ...E.getStyles("itemLabel", { styles: u, classNames: a }),
                children: p,
              }),
            v &&
              (0, t.jsx)("div", {
                ...E.getStyles("itemSection", { styles: u, classNames: a }),
                "data-position": "right",
                children: v,
              }),
          ],
        });
      });
    (E.classes = v), (E.displayName = "@mantine/core/MenuItem");
    let V = (0, u.factory)((e, r) => {
      let {
          classNames: n,
          className: a,
          style: o,
          styles: i,
          vars: u,
          ...s
        } = (0, l.useProps)("MenuLabel", null, e),
        c = m();
      return (0, t.jsx)(f.Box, {
        ref: r,
        ...c.getStyles("label", {
          className: a,
          style: o,
          styles: i,
          classNames: n,
        }),
        ...s,
      });
    });
    (V.classes = v), (V.displayName = "@mantine/core/MenuLabel");
    var T = e.i(751937),
      C = e.i(905142);
    let A = (0, u.factory)((e, n) => {
      let {
          classNames: a,
          className: o,
          style: i,
          styles: u,
          vars: s,
          onMouseEnter: d,
          onMouseLeave: f,
          onKeyDown: v,
          children: p,
          ...y
        } = (0, l.useProps)("MenuSubDropdown", null, e),
        w = (0, r.useRef)(null),
        b = m(),
        S = I(),
        x = (0, h.createEventHandler)(d, S?.open),
        D = (0, h.createEventHandler)(f, S?.close);
      return (0, t.jsx)(c.Popover.Dropdown, {
        ...y,
        onMouseEnter: x,
        onMouseLeave: D,
        role: "menu",
        "aria-orientation": "vertical",
        ref: (0, g.useMergedRef)(n, w),
        ...b.getStyles("dropdown", {
          className: o,
          style: i,
          styles: u,
          classNames: a,
          withStaticClass: !1,
        }),
        tabIndex: -1,
        "data-menu-dropdown": !0,
        children: p,
      });
    });
    (A.classes = v), (A.displayName = "@mantine/core/MenuSubDropdown");
    var R = e.i(962881);
    let j = (0, x.polymorphicFactory)((e, n) => {
      let {
          classNames: a,
          className: o,
          style: i,
          styles: u,
          vars: s,
          color: c,
          leftSection: d,
          rightSection: f,
          children: v,
          disabled: p,
          "data-disabled": y,
          closeMenuOnClick: x,
          ...M
        } = (0, l.useProps)("MenuSubItem", null, e),
        E = m(),
        V = I(),
        T = (0, S.useMantineTheme)(),
        { dir: C } = (0, D.useDirection)(),
        A = (0, r.useRef)(null),
        j = c
          ? T.variantColorResolver({ color: c, theme: T, variant: "light" })
          : void 0,
        k = c ? (0, b.parseThemeColor)({ color: c, theme: T }) : null,
        P = (0, h.createEventHandler)(M.onKeyDown, (e) => {
          "ArrowRight" === e.key && (V?.open(), V?.focusFirstItem()),
            "ArrowLeft" === e.key &&
              V?.parentContext &&
              (V.parentContext.close(), V.parentContext.focusParentItem());
        }),
        O = (0, h.createEventHandler)(M.onClick, () => {
          !y && x && E.closeDropdownImmediately();
        }),
        F = (0, h.createEventHandler)(M.onMouseEnter, V?.open),
        B = (0, h.createEventHandler)(M.onMouseLeave, V?.close);
      return (0, t.jsxs)(N.UnstyledButton, {
        onMouseDown: (e) => e.preventDefault(),
        ...M,
        unstyled: E.unstyled,
        tabIndex: E.menuItemTabIndex,
        ...E.getStyles("item", {
          className: o,
          style: i,
          styles: u,
          classNames: a,
        }),
        ref: (0, g.useMergedRef)(A, n),
        role: "menuitem",
        disabled: p,
        "data-menu-item": !0,
        "data-sub-menu-item": !0,
        "data-disabled": p || y || void 0,
        "data-mantine-stop-propagation": !0,
        onMouseEnter: F,
        onMouseLeave: B,
        onClick: O,
        onKeyDown: (0, w.createScopedKeydownHandler)({
          siblingSelector: "[data-menu-item]:not([data-disabled])",
          parentSelector: "[data-menu-dropdown]",
          activateOnFocus: !1,
          loop: E.loop,
          dir: C,
          orientation: "vertical",
          onKeyDown: P,
        }),
        __vars: {
          "--menu-item-color":
            k?.isThemeColor && k?.shade === void 0
              ? `var(--mantine-color-${k.color}-6)`
              : j?.color,
          "--menu-item-hover": j?.hover,
        },
        children: [
          d &&
            (0, t.jsx)("div", {
              ...E.getStyles("itemSection", { styles: u, classNames: a }),
              "data-position": "left",
              children: d,
            }),
          v &&
            (0, t.jsx)("div", {
              ...E.getStyles("itemLabel", { styles: u, classNames: a }),
              children: v,
            }),
          (0, t.jsx)("div", {
            ...E.getStyles("itemSection", { styles: u, classNames: a }),
            "data-position": "right",
            children:
              f ||
              (0, t.jsx)(R.AccordionChevron, {
                ...E.getStyles("chevron"),
                size: 14,
              }),
          }),
        ],
      });
    });
    (j.classes = v), (j.displayName = "@mantine/core/MenuSubItem");
    var k = e.i(795991);
    function P({ children: e, refProp: r }) {
      if (!(0, k.isElement)(e))
        throw Error(
          "Menu.Sub.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
        );
      return (
        m(),
        (0, t.jsx)(c.Popover.Target, {
          refProp: r,
          popupType: "menu",
          children: e,
        })
      );
    }
    P.displayName = "@mantine/core/MenuSubTarget";
    let O = {
      offset: 0,
      position: "right-start",
      transitionProps: { duration: 0 },
      openDelay: 0,
      middlewares: { shift: { crossAxis: !0 } },
    };
    function F(e) {
      let {
          children: r,
          closeDelay: n,
          openDelay: a,
          ...o
        } = (0, l.useProps)("MenuSub", O, e),
        i = (0, T.useId)(),
        [u, { open: d, close: m }] = (0, C.useDisclosure)(!1),
        f = I(),
        { openDropdown: v, closeDropdown: p } = s({
          open: d,
          close: m,
          closeDelay: n,
          openDelay: a,
        });
      return (0, t.jsx)(M, {
        value: {
          opened: u,
          close: p,
          open: v,
          focusFirstItem: () =>
            window.setTimeout(() => {
              document
                .getElementById(`${i}-dropdown`)
                ?.querySelectorAll("[data-menu-item]:not([data-disabled])")[0]
                ?.focus();
            }, 16),
          focusParentItem: () =>
            window.setTimeout(() => {
              document.getElementById(`${i}-target`)?.focus();
            }, 16),
          parentContext: f,
        },
        children: (0, t.jsx)(c.Popover, {
          opened: u,
          withinPortal: !1,
          withArrow: !1,
          id: i,
          ...o,
          children: r,
        }),
      });
    }
    (F.extend = (e) => e),
      (F.displayName = "@mantine/core/MenuSub"),
      (F.Target = P),
      (F.Dropdown = A),
      (F.Item = j);
    let B = { refProp: "ref" },
      _ = (0, r.forwardRef)((e, n) => {
        let {
          children: a,
          refProp: o,
          ...i
        } = (0, l.useProps)("MenuTarget", B, e);
        if (!(0, k.isElement)(a))
          throw Error(
            "Menu.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
          );
        let u = m(),
          s = a.props,
          d = (0, h.createEventHandler)(s.onClick, () => {
            "click" === u.trigger
              ? u.toggleDropdown()
              : "click-hover" === u.trigger &&
                (u.setOpenedViaClick(!0), u.opened || u.openDropdown());
          }),
          f = (0, h.createEventHandler)(
            s.onMouseEnter,
            () =>
              ("hover" === u.trigger || "click-hover" === u.trigger) &&
              u.openDropdown()
          ),
          v = (0, h.createEventHandler)(s.onMouseLeave, () => {
            "hover" === u.trigger
              ? u.closeDropdown()
              : "click-hover" !== u.trigger ||
                u.openedViaClick ||
                u.closeDropdown();
          });
        return (0, t.jsx)(c.Popover.Target, {
          refProp: o,
          popupType: "menu",
          ref: n,
          ...i,
          children: (0, r.cloneElement)(a, {
            onClick: d,
            onMouseEnter: f,
            onMouseLeave: v,
            "data-expanded": !!u.opened || void 0,
          }),
        });
      });
    _.displayName = "@mantine/core/MenuTarget";
    let L = {
      trapFocus: !0,
      closeOnItemClick: !0,
      withInitialFocusPlaceholder: !0,
      clickOutsideEvents: ["mousedown", "touchstart", "keydown"],
      loop: !0,
      trigger: "click",
      openDelay: 0,
      closeDelay: 100,
      menuItemTabIndex: -1,
    };
    function K(e) {
      let u = (0, l.useProps)("Menu", L, e),
        {
          children: m,
          onOpen: f,
          onClose: p,
          opened: g,
          defaultOpened: h,
          trapFocus: y,
          onChange: w,
          closeOnItemClick: b,
          loop: S,
          closeOnEscape: x,
          trigger: D,
          openDelay: N,
          closeDelay: M,
          classNames: I,
          styles: E,
          unstyled: V,
          variant: T,
          vars: C,
          menuItemTabIndex: A,
          keepMounted: R,
          withInitialFocusPlaceholder: j,
          attributes: k,
          ...P
        } = u,
        O = (0, i.useStyles)({
          name: "Menu",
          classes: v,
          props: u,
          classNames: I,
          styles: E,
          unstyled: V,
          attributes: k,
        }),
        [F, B] = (0, n.useUncontrolled)({
          value: g,
          defaultValue: h,
          finalValue: !1,
          onChange: w,
        }),
        [_, K] = (0, r.useState)(!1),
        H = () => {
          B(!1), K(!1), F && p?.();
        },
        U = () => {
          B(!0), F || f?.();
        },
        $ = () => {
          F ? H() : U();
        },
        { openDropdown: W, closeDropdown: G } = s({
          open: U,
          close: H,
          closeDelay: M,
          openDelay: N,
        }),
        { resolvedClassNames: z, resolvedStyles: Z } = (0,
        o.useResolvedStylesApi)({ classNames: I, styles: E, props: u });
      return (0, t.jsx)(d, {
        value: {
          getStyles: O,
          opened: F,
          toggleDropdown: $,
          getItemIndex: (e) =>
            e
              ? Array.from(
                  (0, a.findElementAncestor)(
                    e,
                    "[data-menu-dropdown]"
                  )?.querySelectorAll("[data-menu-item]") || []
                ).findIndex((t) => t === e)
              : null,
          openedViaClick: _,
          setOpenedViaClick: K,
          closeOnItemClick: b,
          closeDropdown: "click" === D ? H : G,
          openDropdown: "click" === D ? U : W,
          closeDropdownImmediately: H,
          loop: S,
          trigger: D,
          unstyled: V,
          menuItemTabIndex: A,
          withInitialFocusPlaceholder: j,
        },
        children: (0, t.jsx)(c.Popover, {
          ...P,
          opened: F,
          onChange: $,
          defaultOpened: h,
          trapFocus: !R && y,
          closeOnEscape: x,
          __staticSelector: "Menu",
          classNames: z,
          styles: Z,
          unstyled: V,
          variant: T,
          keepMounted: R,
          children: m,
        }),
      });
    }
    (K.extend = (e) => e),
      (K.withProps = (0, u.getWithProps)(K)),
      (K.classes = v),
      (K.displayName = "@mantine/core/Menu"),
      (K.Item = E),
      (K.Label = V),
      (K.Dropdown = y),
      (K.Target = _),
      (K.Divider = p),
      (K.Sub = F),
      e.s(["Menu", () => K], 405948);
    let H = (0, e.i(33550).default)("outline", "send", "Send", [
      ["path", { d: "M10 14l11 -11", key: "svg-0" }],
      [
        "path",
        {
          d: "M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5",
          key: "svg-1",
        },
      ],
    ]);
    e.s(["IconSend", () => H], 77656);
  },
  10982,
  (e) => {
    "use strict";
    var t,
      r,
      n,
      a,
      o,
      i = e.i(843476),
      l = e.i(271645),
      u = e.i(207670);
    function s(e, t) {
      var r = {};
      for (var n in e)
        Object.prototype.hasOwnProperty.call(e, n) &&
          0 > t.indexOf(n) &&
          (r[n] = e[n]);
      if (null != e && "function" == typeof Object.getOwnPropertySymbols)
        for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
          0 > t.indexOf(n[a]) &&
            Object.prototype.propertyIsEnumerable.call(e, n[a]) &&
            (r[n[a]] = e[n[a]]);
      return r;
    }
    function c() {}
    function d(e) {
      return !!(e || "").match(/\d/);
    }
    function m(e) {
      return null == e;
    }
    function f(e) {
      return (
        m(e) ||
        ("number" == typeof e && isNaN(e)) ||
        ("number" == typeof e && !isFinite(e))
      );
    }
    function v(e) {
      return e.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&");
    }
    function p(e, t) {
      void 0 === t && (t = !0);
      var r = "-" === e[0],
        n = r && t,
        a = (e = e.replace("-", "")).split(".");
      return {
        beforeDecimal: a[0],
        afterDecimal: a[1] || "",
        hasNegation: r,
        addNegation: n,
      };
    }
    function g(e, t, r) {
      for (var n = "", a = r ? "0" : "", o = 0; o <= t - 1; o++) n += e[o] || a;
      return n;
    }
    function h(e, t) {
      return Array(t + 1).join(e);
    }
    function y(e) {
      var t = e + "",
        r = "-" === t[0] ? "-" : "";
      r && (t = t.substring(1));
      var n = t.split(/[eE]/g),
        a = n[0],
        o = n[1];
      if (!(o = Number(o))) return r + a;
      a = a.replace(".", "");
      var i = 1 + o,
        l = a.length;
      return (
        i < 0
          ? (a = "0." + h("0", Math.abs(i)) + a)
          : i >= l
          ? (a += h("0", i - l))
          : (a = (a.substring(0, i) || "0") + "." + a.substring(i)),
        r + a
      );
    }
    function w(e, t, r) {
      if (-1 !== ["", "-"].indexOf(e)) return e;
      var n = (-1 !== e.indexOf(".") || r) && t,
        a = p(e),
        o = a.beforeDecimal,
        i = a.afterDecimal,
        l = a.hasNegation,
        u = parseFloat("0." + (i || "0")),
        s = (i.length <= t ? "0." + i : u.toFixed(t)).split("."),
        c = o;
      return (
        o &&
          Number(s[0]) &&
          (c = o
            .split("")
            .reverse()
            .reduce(function (e, t, r) {
              return e.length > r
                ? (Number(e[0]) + Number(t)).toString() +
                    e.substring(1, e.length)
                : t + e;
            }, s[0])),
        (l ? "-" : "") + c + (n ? "." : "") + g(s[1] || "", t, r)
      );
    }
    function b(e, t) {
      if (((e.value = e.value), null !== e)) {
        if (e.createTextRange) {
          var r = e.createTextRange();
          return r.move("character", t), r.select(), !0;
        }
        return e.selectionStart || 0 === e.selectionStart
          ? (e.focus(), e.setSelectionRange(t, t), !0)
          : (e.focus(), !1);
      }
    }
    ((t = o || (o = {})).event = "event"), (t.props = "prop");
    var S =
        ((r = function (e, t) {
          for (
            var r = 0, n = 0, a = e.length, o = t.length;
            e[r] === t[r] && r < a;

          )
            r++;
          for (; e[a - 1 - n] === t[o - 1 - n] && o - n > r && a - n > r; ) n++;
          return {
            from: { start: r, end: a - n },
            to: { start: r, end: o - n },
          };
        }),
        (a = void 0),
        function () {
          for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
          return n &&
            e.length === n.length &&
            e.every(function (e, t) {
              return e === n[t];
            })
            ? a
            : ((n = e), (a = r.apply(void 0, e)));
        }),
      x = function (e, t) {
        var r = Math.min(e.selectionStart, t);
        return {
          from: { start: r, end: e.selectionEnd },
          to: { start: r, end: t },
        };
      };
    function D(e) {
      return Math.max(e.selectionStart, e.selectionEnd);
    }
    function N(e) {
      var t = e.currentValue,
        r = e.formattedValue,
        n = e.currentValueIndex,
        a = e.formattedValueIndex;
      return t[n] === r[a];
    }
    function M(e, t, r, n) {
      var a = e.length;
      if (((t = Math.min(Math.max(t, 0), a)), "left" === n)) {
        for (; t >= 0 && !r[t]; ) t--;
        -1 === t && (t = r.indexOf(!0));
      } else {
        for (; t <= a && !r[t]; ) t++;
        t > a && (t = r.lastIndexOf(!0));
      }
      return -1 === t && (t = a), t;
    }
    function I(e) {
      for (
        var t = Array.from({ length: e.length + 1 }).map(function () {
            return !0;
          }),
          r = 0,
          n = t.length;
        r < n;
        r++
      )
        t[r] = !!(d(e[r]) || d(e[r - 1]));
      return t;
    }
    function E(e, t, r, n, a, o) {
      void 0 === o && (o = c);
      var i,
        u,
        s =
          ((i = function (e, t) {
            var r, o;
            return (
              f(e)
                ? ((o = ""), (r = ""))
                : (r =
                    "number" == typeof e || t
                      ? n((o = "number" == typeof e ? y(e) : e))
                      : n((o = a(e, void 0)))),
              { formattedValue: r, numAsString: o }
            );
          }),
          ((u = (0, l.useRef)(i)).current = i),
          (0, l.useRef)(function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            return u.current.apply(u, e);
          }).current),
        d = (0, l.useState)(function () {
          return s(m(e) ? t : e, r);
        }),
        v = d[0],
        p = d[1],
        g = e,
        h = r;
      m(e) && ((g = v.numAsString), (h = !0));
      var w = s(g, h);
      return (
        (0, l.useMemo)(
          function () {
            p(w);
          },
          [w.formattedValue]
        ),
        [
          v,
          function (e, t) {
            e.formattedValue !== v.formattedValue &&
              p({ formattedValue: e.formattedValue, numAsString: e.value }),
              o(e, t);
          },
        ]
      );
    }
    function V(e) {
      return e.replace(/[^0-9]/g, "");
    }
    function T(e) {
      return e;
    }
    function C(e) {
      var t = e.type;
      void 0 === t && (t = "text");
      var r = e.displayType;
      void 0 === r && (r = "input");
      var n = e.customInput,
        a = e.renderText,
        i = e.getInputRef,
        u = e.format;
      void 0 === u && (u = T);
      var m = e.removeFormatting;
      void 0 === m && (m = V);
      var f = e.defaultValue,
        v = e.valueIsNumericString,
        p = e.onValueChange,
        g = e.isAllowed,
        h = e.onChange;
      void 0 === h && (h = c);
      var y = e.onKeyDown;
      void 0 === y && (y = c);
      var w = e.onMouseUp;
      void 0 === w && (w = c);
      var C = e.onFocus;
      void 0 === C && (C = c);
      var A = e.onBlur;
      void 0 === A && (A = c);
      var R = e.value,
        j = e.getCaretBoundary;
      void 0 === j && (j = I);
      var k = e.isValidInputCharacter;
      void 0 === k && (k = d);
      var P = e.isCharacterSame,
        O = s(e, [
          "type",
          "displayType",
          "customInput",
          "renderText",
          "getInputRef",
          "format",
          "removeFormatting",
          "defaultValue",
          "valueIsNumericString",
          "onValueChange",
          "isAllowed",
          "onChange",
          "onKeyDown",
          "onMouseUp",
          "onFocus",
          "onBlur",
          "value",
          "getCaretBoundary",
          "isValidInputCharacter",
          "isCharacterSame",
        ]),
        F = E(R, f, !!v, u, m, p),
        B = F[0],
        _ = B.formattedValue,
        L = B.numAsString,
        K = F[1],
        H = (0, l.useRef)(),
        U = (0, l.useRef)({ formattedValue: _, numAsString: L }),
        $ = function (e, t) {
          (U.current = {
            formattedValue: e.formattedValue,
            numAsString: e.value,
          }),
            K(e, t);
        },
        W = (0, l.useState)(!1),
        G = W[0],
        z = W[1],
        Z = (0, l.useRef)(null),
        q = (0, l.useRef)({ setCaretTimeout: null, focusTimeout: null });
      (0, l.useEffect)(function () {
        return (
          z(!0),
          function () {
            clearTimeout(q.current.setCaretTimeout),
              clearTimeout(q.current.focusTimeout);
          }
        );
      }, []);
      var X = u,
        J = function (e, t) {
          var r = parseFloat(t);
          return {
            formattedValue: e,
            value: t,
            floatValue: isNaN(r) ? void 0 : r,
          };
        },
        Q = function (e, t, r) {
          (0 !== e.selectionStart || e.selectionEnd !== e.value.length) &&
            (b(e, t),
            (q.current.setCaretTimeout = setTimeout(function () {
              e.value === r && e.selectionStart !== t && b(e, t);
            }, 0)));
        },
        Y = function (e, t, r) {
          return M(e, t, j(e), r);
        },
        ee = function (e, t, r) {
          var n = j(t),
            a = (function (e, t, r, n, a, o, i) {
              void 0 === i && (i = N);
              var l = a.findIndex(function (e) {
                  return e;
                }),
                u = e.slice(0, l);
              t || r.startsWith(u) || ((t = u), (r = u + r), (n += u.length));
              for (
                var s = r.length, c = e.length, d = {}, m = Array(s), f = 0;
                f < s;
                f++
              ) {
                m[f] = -1;
                for (var v = 0; v < c; v++)
                  if (
                    i({
                      currentValue: r,
                      lastValue: t,
                      formattedValue: e,
                      currentValueIndex: f,
                      formattedValueIndex: v,
                    }) &&
                    !0 !== d[v]
                  ) {
                    (m[f] = v), (d[v] = !0);
                    break;
                  }
              }
              for (var p = n; p < s && (-1 === m[p] || !o(r[p])); ) p++;
              var g = p === s || -1 === m[p] ? c : m[p];
              for (p = n - 1; p > 0 && -1 === m[p]; ) p--;
              var h = -1 === p || -1 === m[p] ? 0 : m[p] + 1;
              return h > g ? g : n - h < g - n ? h : g;
            })(t, _, e, r, n, k, P);
          return M(t, a, n);
        },
        et = function (e) {
          var t,
            r = e.formattedValue;
          void 0 === r && (r = "");
          var n = e.input,
            a = e.source,
            o = e.event,
            i = e.numAsString;
          if (n) {
            var l = e.inputValue || n.value,
              u = D(n);
            (n.value = r), void 0 !== (t = ee(l, r, u)) && Q(n, t, r);
          }
          r !== _ && $(J(r, i), { event: o, source: a });
        };
      (0, l.useEffect)(
        function () {
          var e = U.current,
            t = e.formattedValue,
            r = e.numAsString;
          (_ !== t || L !== r) &&
            $(J(_, L), { event: void 0, source: o.props });
        },
        [_, L]
      );
      var er = Z.current ? D(Z.current) : void 0;
      ("undefined" != typeof window ? l.useLayoutEffect : l.useEffect)(
        function () {
          var e = Z.current;
          if (_ !== U.current.formattedValue && e) {
            var t = ee(U.current.formattedValue, _, er);
            (e.value = _), Q(e, t, _);
          }
        },
        [_]
      );
      var en = function (e, t, r) {
          var n = t.target,
            a = Object.assign(
              Object.assign(
                {},
                H.current ? x(H.current, n.selectionEnd) : S(_, e)
              ),
              { lastValue: _ }
            ),
            o = m(e, a),
            i = X(o);
          if (((o = m(i, void 0)), g && !g(J(i, o)))) {
            var l = t.target,
              u = ee(e, _, D(l));
            return (l.value = _), Q(l, u, _), !1;
          }
          return (
            et({
              formattedValue: i,
              numAsString: o,
              inputValue: e,
              event: t,
              source: r,
              input: t.target,
            }),
            !0
          );
        },
        ea = function (e, t) {
          void 0 === t && (t = 0),
            (H.current = {
              selectionStart: e.selectionStart,
              selectionEnd: e.selectionEnd + t,
            });
        },
        eo = Object.assign(
          {
            inputMode:
              G &&
              "undefined" != typeof navigator &&
              !(navigator.platform && /iPhone|iPod/.test(navigator.platform))
                ? "numeric"
                : void 0,
          },
          O,
          {
            type: t,
            value: _,
            onChange: function (e) {
              en(e.target.value, e, o.event) && h(e), (H.current = void 0);
            },
            onKeyDown: function (e) {
              var t,
                r = e.target,
                n = e.key,
                a = r.selectionStart,
                o = r.selectionEnd,
                i = r.value;
              void 0 === i && (i = ""),
                "ArrowLeft" === n || "Backspace" === n
                  ? (t = Math.max(a - 1, 0))
                  : "ArrowRight" === n
                  ? (t = Math.min(a + 1, i.length))
                  : "Delete" === n && (t = a);
              var l = 0;
              "Delete" === n && a === o && (l = 1);
              var u = "ArrowLeft" === n || "ArrowRight" === n;
              if (void 0 === t || (a !== o && !u)) {
                y(e), ea(r, l);
                return;
              }
              var s = t;
              u
                ? (s = Y(i, t, "ArrowLeft" === n ? "left" : "right")) !== t &&
                  e.preventDefault()
                : "Delete" !== n || k(i[t])
                ? "Backspace" !== n || k(i[t]) || (s = Y(i, t, "left"))
                : (s = Y(i, t, "right")),
                s !== t && Q(r, s, i),
                y(e),
                ea(r, l);
            },
            onMouseUp: function (e) {
              var t = e.target,
                r = function () {
                  var e = t.selectionStart,
                    r = t.selectionEnd,
                    n = t.value;
                  if ((void 0 === n && (n = ""), e === r)) {
                    var a = Y(n, e);
                    a !== e && Q(t, a, n);
                  }
                };
              r(),
                requestAnimationFrame(function () {
                  r();
                }),
                w(e),
                ea(t);
            },
            onFocus: function (e) {
              e.persist && e.persist();
              var t = e.target,
                r = e.currentTarget;
              (Z.current = t),
                (q.current.focusTimeout = setTimeout(function () {
                  var n = t.selectionStart,
                    a = t.selectionEnd,
                    o = t.value;
                  void 0 === o && (o = "");
                  var i = Y(o, n);
                  i !== n && (0 !== n || a !== o.length) && Q(t, i, o),
                    C(
                      Object.assign(Object.assign({}, e), { currentTarget: r })
                    );
                }, 0));
            },
            onBlur: function (e) {
              (Z.current = null),
                clearTimeout(q.current.focusTimeout),
                clearTimeout(q.current.setCaretTimeout),
                A(e);
            },
          }
        );
      return "text" === r
        ? a
          ? l.default.createElement(l.default.Fragment, null, a(_, O) || null)
          : l.default.createElement("span", Object.assign({}, O, { ref: i }), _)
        : n
        ? l.default.createElement(n, Object.assign({}, eo, { ref: i }))
        : l.default.createElement("input", Object.assign({}, eo, { ref: i }));
    }
    function A(e, t) {
      var r,
        n,
        a,
        o = t.decimalScale,
        i = t.fixedDecimalScale,
        l = t.prefix;
      void 0 === l && (l = "");
      var u = t.suffix;
      void 0 === u && (u = "");
      var s = t.allowNegative,
        c = t.thousandsGroupStyle;
      if ((void 0 === c && (c = "thousand"), "" === e || "-" === e)) return e;
      var d = R(t),
        m = d.thousandSeparator,
        f = d.decimalSeparator,
        v = (0 !== o && -1 !== e.indexOf(".")) || (o && i),
        h = p(e, s),
        y = h.beforeDecimal,
        w = h.afterDecimal,
        b = h.addNegation;
      return (
        void 0 !== o && (w = g(w, o, !!i)),
        m &&
          ((r = y),
          (n = (function (e) {
            switch (e) {
              case "lakh":
                return /(\d+?)(?=(\d\d)+(\d)(?!\d))(\.\d+)?/g;
              case "wan":
                return /(\d)(?=(\d{4})+(?!\d))/g;
              default:
                return /(\d)(?=(\d{3})+(?!\d))/g;
            }
          })(c)),
          (a = -1 === (a = r.search(/[1-9]/)) ? r.length : a),
          (y =
            r.substring(0, a) + r.substring(a, r.length).replace(n, "$1" + m))),
        l && (y = l + y),
        u && (w += u),
        b && (y = "-" + y),
        (e = y + ((v && f) || "") + w)
      );
    }
    function R(e) {
      var t = e.decimalSeparator;
      void 0 === t && (t = ".");
      var r = e.thousandSeparator,
        n = e.allowedDecimalSeparators;
      return (
        !0 === r && (r = ","),
        n || (n = [t, "."]),
        {
          decimalSeparator: t,
          thousandSeparator: r,
          allowedDecimalSeparators: n,
        }
      );
    }
    function j(e) {
      var t,
        r,
        n,
        a,
        i,
        u,
        g,
        h,
        x,
        D,
        N,
        M,
        I,
        V,
        T,
        j,
        k,
        P,
        O,
        F,
        B,
        _,
        L,
        K,
        H,
        U,
        $,
        W,
        G,
        z =
          ((t = (function (e) {
            var t = R(e),
              r = t.thousandSeparator,
              n = t.decimalSeparator,
              a = e.prefix;
            void 0 === a && (a = "");
            var o = e.allowNegative;
            if ((void 0 === o && (o = !0), r === n))
              throw Error(
                "\n        Decimal separator can't be same as thousand separator.\n        thousandSeparator: " +
                  r +
                  ' (thousandSeparator = {true} is same as thousandSeparator = ",")\n        decimalSeparator: ' +
                  n +
                  " (default value for decimalSeparator is .)\n     "
              );
            return (
              a.startsWith("-") &&
                o &&
                (console.error(
                  "\n      Prefix can't start with '-' when allowNegative is true.\n      prefix: " +
                    a +
                    "\n      allowNegative: " +
                    o +
                    "\n    "
                ),
                (o = !1)),
              Object.assign(Object.assign({}, e), { allowNegative: o })
            );
          })((t = e))).decimalSeparator,
          t.allowedDecimalSeparators,
          t.thousandsGroupStyle,
          (r = t.suffix),
          (n = t.allowNegative),
          (a = t.allowLeadingZeros),
          void 0 === (i = t.onKeyDown) && (i = c),
          void 0 === (u = t.onBlur) && (u = c),
          (g = t.thousandSeparator),
          (h = t.decimalScale),
          (x = t.fixedDecimalScale),
          void 0 === (D = t.prefix) && (D = ""),
          (N = t.defaultValue),
          (M = t.value),
          (I = t.valueIsNumericString),
          (V = t.onValueChange),
          (T = s(t, [
            "decimalSeparator",
            "allowedDecimalSeparators",
            "thousandsGroupStyle",
            "suffix",
            "allowNegative",
            "allowLeadingZeros",
            "onKeyDown",
            "onBlur",
            "thousandSeparator",
            "decimalScale",
            "fixedDecimalScale",
            "prefix",
            "defaultValue",
            "value",
            "valueIsNumericString",
            "onValueChange",
          ])),
          (k = (j = R(t)).decimalSeparator),
          (P = j.allowedDecimalSeparators),
          (O = function (e) {
            return A(e, t);
          }),
          (F = function (e, r) {
            return (function (e, t, r) {
              void 0 === t &&
                (t = {
                  from: { start: 0, end: 0 },
                  to: { start: 0, end: e.length },
                  lastValue: "",
                });
              var n,
                a,
                o,
                i,
                l = r.allowNegative,
                u = r.prefix;
              void 0 === u && (u = "");
              var s = r.suffix;
              void 0 === s && (s = "");
              var c = r.decimalScale,
                m = t.from,
                f = t.to,
                g = f.start,
                h = f.end,
                y = R(r),
                w = y.allowedDecimalSeparators,
                b = y.decimalSeparator,
                S = e[h] === b;
              if (d(e) && (e === u || e === s) && "" === t.lastValue) return e;
              if (h - g == 1 && -1 !== w.indexOf(e[g])) {
                var x = 0 === c ? "" : b;
                e = e.substring(0, g) + x + e.substring(g + 1, e.length);
              }
              var D = function (e, t, r) {
                  var n = !1,
                    a = !1;
                  u.startsWith("-")
                    ? (n = !1)
                    : e.startsWith("--")
                    ? ((n = !1), (a = !0))
                    : s.startsWith("-") && e.length === s.length
                    ? (n = !1)
                    : "-" === e[0] && (n = !0);
                  var o = +!!n;
                  return (
                    a && (o = 2),
                    o && ((e = e.substring(o)), (t -= o), (r -= o)),
                    { value: e, start: t, end: r, hasNegation: n }
                  );
                },
                N = D(e, g, h),
                M = N.hasNegation;
              (e = N.value), (g = N.start), (h = N.end);
              var I = D(t.lastValue, m.start, m.end),
                E = I.start,
                V = I.end,
                T = I.value,
                C = e.substring(g, h);
              e.length &&
                T.length &&
                (E > T.length - s.length || V < u.length) &&
                !(C && s.startsWith(C)) &&
                (e = T);
              var A = 0;
              e.startsWith(u) ? (A += u.length) : g < u.length && (A = g),
                (e = e.substring(A)),
                (h -= A);
              var j = e.length,
                k = e.length - s.length;
              e.endsWith(s)
                ? (j = k)
                : h > k
                ? (j = h)
                : h > e.length - s.length && (j = h),
                (e = e.substring(0, j)),
                void 0 === (n = M ? "-" + e : e) && (n = ""),
                (a = RegExp("(-)(.)*(-)")),
                (o = /(-)/.test(n)),
                (i = a.test(n)),
                (n = n.replace(/-/g, "")),
                o && !i && l && (n = "-" + n);
              var P = (e = (
                  (e = n).match(RegExp("(^-)|[0-9]|" + v(b), "g")) || []
                ).join("")).indexOf(b),
                O = p(
                  (e = e.replace(RegExp(v(b), "g"), function (e, t) {
                    return t === P ? "." : "";
                  })),
                  l
                ),
                F = O.beforeDecimal,
                B = O.afterDecimal,
                _ = O.addNegation;
              return (
                f.end - f.start < m.end - m.start &&
                  "" === F &&
                  S &&
                  !parseFloat(B) &&
                  (e = _ ? "-" : ""),
                e
              );
            })(e, r, t);
          }),
          (B = m(M) ? N : M),
          (L =
            null != I
              ? I
              : ((_ = D),
                "" === B ||
                  (!(null == _ ? void 0 : _.match(/\d/)) &&
                    !(null == r ? void 0 : r.match(/\d/)) &&
                    "string" == typeof B &&
                    !isNaN(Number(B))))),
          m(M)
            ? m(N) || (L = L || "number" == typeof N)
            : (L = L || "number" == typeof M),
          ($ = (U = (H = E(
            (K = function (e) {
              return f(e)
                ? e
                : ("number" == typeof e && (e = y(e)),
                  L && "number" == typeof h)
                ? w(e, h, !!x)
                : e;
            })(M),
            K(N),
            !!L,
            O,
            F,
            V
          ))[0]).numAsString),
          (W = U.formattedValue),
          (G = H[1]),
          Object.assign(Object.assign({}, T), {
            value: W,
            valueIsNumericString: !1,
            isValidInputCharacter: function (e) {
              return e === k || d(e);
            },
            isCharacterSame: function (e) {
              var t = e.currentValue,
                r = e.lastValue,
                n = e.formattedValue,
                a = e.currentValueIndex,
                o = e.formattedValueIndex,
                i = t[a],
                l = n[o],
                u = S(r, t).to,
                s = function (e) {
                  return F(e).indexOf(".") + D.length;
                };
              return (
                !(
                  0 === M &&
                  x &&
                  h &&
                  t[u.start] === k &&
                  s(t) < a &&
                  s(n) > o
                ) &&
                ((!!(a >= u.start && a < u.end && P && P.includes(i)) &&
                  l === k) ||
                  i === l)
              );
            },
            onValueChange: G,
            format: O,
            removeFormatting: F,
            getCaretBoundary: function (e) {
              var r, n, a, o, i, l;
              return (
                void 0 === (n = (r = t).prefix) && (n = ""),
                void 0 === (a = r.suffix) && (a = ""),
                (o = Array.from({ length: e.length + 1 }).map(function () {
                  return !0;
                })),
                (i = "-" === e[0]),
                o.fill(!1, 0, n.length + +!!i),
                (l = e.length),
                o.fill(!1, l - a.length + 1, l + 1),
                o
              );
            },
            onKeyDown: function (e) {
              var t = e.target,
                r = e.key,
                a = t.selectionStart,
                o = t.selectionEnd,
                l = t.value;
              if (
                (void 0 === l && (l = ""),
                ("Backspace" === r || "Delete" === r) && o < D.length)
              )
                return void e.preventDefault();
              if (a !== o) return void i(e);
              "Backspace" === r &&
                "-" === l[0] &&
                a === D.length + 1 &&
                n &&
                b(t, 1),
                h &&
                  x &&
                  ("Backspace" === r && l[a - 1] === k
                    ? (b(t, a - 1), e.preventDefault())
                    : "Delete" === r && l[a] === k && e.preventDefault()),
                (null == P ? void 0 : P.includes(r)) &&
                  l[a] === k &&
                  b(t, a + 1);
              var u = !0 === g ? "," : g;
              "Backspace" === r && l[a - 1] === u && b(t, a - 1),
                "Delete" === r && l[a] === u && b(t, a + 1),
                i(e);
            },
            onBlur: function (e) {
              var r = $;
              r.match(/\d/g) || (r = ""),
                a ||
                  (r = (function (e) {
                    if (!e) return e;
                    var t = "-" === e[0];
                    t && (e = e.substring(1, e.length));
                    var r = e.split("."),
                      n = r[0].replace(/^0+/, "") || "0",
                      a = r[1] || "";
                    return (t ? "-" : "") + n + (a ? "." + a : "");
                  })(r)),
                x && h && (r = w(r, h, x)),
                r !== $ &&
                  G(
                    {
                      formattedValue: A(r, t),
                      value: r,
                      floatValue: parseFloat(r),
                    },
                    { event: e, source: o.event }
                  ),
                u(e);
            },
          }));
      return l.default.createElement(C, Object.assign({}, z));
    }
    var k = e.i(446614),
      P = e.i(393737),
      O = e.i(931316),
      F = e.i(144762),
      B = e.i(424848),
      _ = e.i(143798),
      L = e.i(908954),
      K = e.i(314037),
      H = e.i(789549),
      U = e.i(321879),
      $ = e.i(578565),
      W = e.i(825436);
    function G({ direction: e, style: t, ...r }) {
      return (0, i.jsx)("svg", {
        style: {
          width: "var(--ni-chevron-size)",
          height: "var(--ni-chevron-size)",
          transform: "up" === e ? "rotate(180deg)" : void 0,
          ...t,
        },
        viewBox: "0 0 15 15",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...r,
        children: (0, i.jsx)("path", {
          d: "M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",
          fill: "currentColor",
          fillRule: "evenodd",
          clipRule: "evenodd",
        }),
      });
    }
    var z = {
      root: "m_e2f5cd4e",
      controls: "m_95e17d22",
      control: "m_80b4b171",
    };
    let Z = /^(0\.0*|-0(\.0*)?)$/,
      q = /^-?0\d+(\.\d+)?\.?$/,
      X = /\.\d*0$/;
    function J(e) {
      return "string" == typeof e && "" !== e && !Number.isNaN(Number(e));
    }
    function Q(e) {
      return "number" == typeof e
        ? e < Number.MAX_SAFE_INTEGER
        : "" === e || (J(e) && Number(e) < Number.MAX_SAFE_INTEGER);
    }
    function Y(e, t, r) {
      return (
        void 0 === e || ((void 0 === t || e >= t) && (void 0 === r || e <= r))
      );
    }
    let ee = {
        step: 1,
        clampBehavior: "blur",
        allowDecimal: !0,
        allowNegative: !0,
        withKeyboardEvents: !0,
        allowLeadingZeros: !0,
        trimLeadingZeroesOnBlur: !0,
        startValue: 0,
        allowedDecimalSeparators: [".", ","],
      },
      et = (0, _.createVarsResolver)((e, { size: t }) => ({
        controls: { "--ni-chevron-size": (0, B.getSize)(t, "ni-chevron-size") },
      })),
      er = (0, U.factory)((e, t) => {
        let r = (0, H.useProps)("NumberInput", ee, e),
          {
            className: n,
            classNames: a,
            styles: o,
            unstyled: s,
            vars: c,
            onChange: d,
            onValueChange: m,
            value: f,
            defaultValue: v,
            max: p,
            min: g,
            step: h,
            hideControls: y,
            rightSection: w,
            isAllowed: b,
            clampBehavior: S,
            onBlur: x,
            allowDecimal: D,
            decimalScale: N,
            onKeyDown: M,
            onKeyDownCapture: I,
            handlersRef: E,
            startValue: V,
            disabled: T,
            rightSectionPointerEvents: C,
            allowNegative: A,
            readOnly: R,
            size: B,
            rightSectionWidth: _,
            stepHoldInterval: U,
            stepHoldDelay: er,
            allowLeadingZeros: en,
            withKeyboardEvents: ea,
            trimLeadingZeroesOnBlur: eo,
            allowedDecimalSeparators: ei,
            attributes: el,
            ...eu
          } = r,
          es = (0, K.useStyles)({
            name: "NumberInput",
            classes: z,
            props: r,
            classNames: a,
            styles: o,
            unstyled: s,
            attributes: el,
            vars: c,
            varsResolver: et,
          }),
          { resolvedClassNames: ec, resolvedStyles: ed } = (0,
          L.useResolvedStylesApi)({ classNames: a, styles: o, props: r }),
          [em, ef] = (0, k.useUncontrolled)({
            value: f,
            defaultValue: v,
            finalValue: "",
            onChange: d,
          }),
          ev = void 0 !== er && void 0 !== U,
          ep = (0, l.useRef)(null),
          eg = (0, l.useRef)(null),
          eh = (0, l.useRef)(0),
          ey = (e) => {
            let t = String(e).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
            return t
              ? Math.max(0, (t[1] ? t[1].length : 0) - (t[2] ? +t[2] : 0))
              : 0;
          },
          ew = (e) => {
            ep.current && void 0 !== e && ep.current.setSelectionRange(e, e);
          },
          eb = (0, l.useRef)(F.noop);
        eb.current = () => {
          let e;
          if (!Q(em)) return;
          let t = Math.max(ey(em), ey(h)),
            r = 10 ** t;
          if (!J(em) && ("number" != typeof em || Number.isNaN(em)))
            e = (0, P.clamp)(V, g, p);
          else if (void 0 !== p) {
            let t = (Math.round(Number(em) * r) + Math.round(h * r)) / r;
            e = t <= p ? t : p;
          } else e = (Math.round(Number(em) * r) + Math.round(h * r)) / r;
          let n = e.toFixed(t);
          ef(parseFloat(n)),
            m?.(
              { floatValue: parseFloat(n), formattedValue: n, value: n },
              { source: "increment" }
            ),
            setTimeout(() => ew(ep.current?.value.length), 0);
        };
        let eS = (0, l.useRef)(F.noop);
        (eS.current = () => {
          let e;
          if (!Q(em)) return;
          let t = void 0 !== g ? g : A ? Number.MIN_SAFE_INTEGER : 0,
            r = Math.max(ey(em), ey(h)),
            n = 10 ** r;
          if ((!J(em) && "number" != typeof em) || Number.isNaN(em))
            e = (0, P.clamp)(V, t, p);
          else {
            let r = (Math.round(Number(em) * n) - Math.round(h * n)) / n;
            e = void 0 !== t && r < t ? t : r;
          }
          let a = e.toFixed(r);
          ef(parseFloat(a)),
            m?.(
              { floatValue: parseFloat(a), formattedValue: a, value: a },
              { source: "decrement" }
            ),
            setTimeout(() => ew(ep.current?.value.length), 0);
        }),
          (0, O.assignRef)(E, { increment: eb.current, decrement: eS.current });
        let ex = (e) => {
            e ? eb.current?.() : eS.current?.(), (eh.current += 1);
          },
          eD = (e) => {
            if ((ex(e), ev)) {
              let t = "number" == typeof U ? U : U(eh.current);
              eg.current = window.setTimeout(() => eD(e), t);
            }
          },
          eN = (e, t) => {
            e.preventDefault(),
              ep.current?.focus(),
              ex(t),
              ev && (eg.current = window.setTimeout(() => eD(t), er));
          },
          eM = () => {
            eg.current && window.clearTimeout(eg.current),
              (eg.current = null),
              (eh.current = 0);
          },
          eI = (0, i.jsxs)("div", {
            ...es("controls"),
            children: [
              (0, i.jsx)(W.UnstyledButton, {
                ...es("control"),
                tabIndex: -1,
                "aria-hidden": !0,
                disabled:
                  T || ("number" == typeof em && void 0 !== p && em >= p),
                mod: { direction: "up" },
                onMouseDown: (e) => e.preventDefault(),
                onPointerDown: (e) => {
                  eN(e, !0);
                },
                onPointerUp: eM,
                onPointerLeave: eM,
                children: (0, i.jsx)(G, { direction: "up" }),
              }),
              (0, i.jsx)(W.UnstyledButton, {
                ...es("control"),
                tabIndex: -1,
                "aria-hidden": !0,
                disabled:
                  T || ("number" == typeof em && void 0 !== g && em <= g),
                mod: { direction: "down" },
                onMouseDown: (e) => e.preventDefault(),
                onPointerDown: (e) => {
                  eN(e, !1);
                },
                onPointerUp: eM,
                onPointerLeave: eM,
                children: (0, i.jsx)(G, { direction: "down" }),
              }),
            ],
          });
        return (0, i.jsx)($.InputBase, {
          component: j,
          allowNegative: A,
          className: (0, u.default)(z.root, n),
          size: B,
          inputMode: "decimal",
          ...eu,
          readOnly: R,
          disabled: T,
          value: em,
          getInputRef: (0, O.useMergedRef)(t, ep),
          onValueChange: (e, t) => {
            var r, n;
            "event" === t.source &&
              ef(
                ((r = e.floatValue),
                (n = e.value),
                ("number" == typeof r
                  ? !(r < Number.MAX_SAFE_INTEGER)
                  : !!Number.isNaN(Number(r))) ||
                  Number.isNaN(r) ||
                  !(14 > n.toString().replace(".", "").length) ||
                  "" === n ||
                  Z.test(e.value) ||
                  (en && q.test(e.value)) ||
                  X.test(e.value))
                  ? e.value
                  : e.floatValue
              ),
              m?.(e, t);
          },
          rightSection: y || R || !Q(em) ? w : w || eI,
          classNames: ec,
          styles: ed,
          unstyled: s,
          __staticSelector: "NumberInput",
          decimalScale: D ? N : 0,
          onKeyDown: (e) => {
            M?.(e),
              !R &&
                ea &&
                ("ArrowUp" === e.key && (e.preventDefault(), eb.current?.()),
                "ArrowDown" === e.key && (e.preventDefault(), eS.current?.()));
          },
          onKeyDownCapture: (e) => {
            if ((I?.(e), "Backspace" === e.key)) {
              let t = ep.current;
              t &&
                0 === t.selectionStart &&
                t.selectionStart === t.selectionEnd &&
                (e.preventDefault(), window.setTimeout(() => ew(0), 0));
            }
          },
          rightSectionPointerEvents: C ?? (T ? "none" : void 0),
          rightSectionWidth: _ ?? `var(--ni-right-section-width-${B || "sm"})`,
          allowLeadingZeros: en,
          allowedDecimalSeparators: ei,
          onBlur: (e) => {
            let t,
              r,
              n = em;
            "blur" === S && "number" == typeof n && (n = (0, P.clamp)(n, g, p)),
              eo &&
                "string" == typeof n &&
                15 > ey(n) &&
                (n = Number.isNaN(
                  (r = parseFloat((t = n.toString().replace(/^0+(?=\d)/, ""))))
                )
                  ? t
                  : r > Number.MAX_SAFE_INTEGER
                  ? void 0 !== p
                    ? p
                    : t
                  : (0, P.clamp)(r, g, p)),
              em !== n && ef(n),
              x?.(e);
          },
          attributes: el,
          isAllowed: (e) =>
            "strict" === S
              ? b
                ? b(e) && Y(e.floatValue, g, p)
                : Y(e.floatValue, g, p)
              : !b || b(e),
        });
      });
    (er.classes = { ...$.InputBase.classes, ...z }),
      (er.displayName = "@mantine/core/NumberInput"),
      e.s(["NumberInput", () => er], 10982);
  },
]);
