(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  819488,
  (e) => {
    "use strict";
    e.s([
      "getStyleObject",
      () =>
        function e(t, r) {
          return Array.isArray(t)
            ? [...t].reduce((t, o) => ({ ...t, ...e(o, r) }), {})
            : "function" == typeof t
            ? t(r)
            : null == t
            ? {}
            : t;
        },
    ]);
  },
  532503,
  (e) => {
    "use strict";
    var t = e.i(271645);
    function r(e) {
      let r = t.default.version;
      return "string" != typeof t.default.version || r.startsWith("18.")
        ? e?.ref
        : e?.props?.ref;
    }
    e.s(["getRefProp", () => r]);
  },
  368637,
  (e) => {
    "use strict";
    var t = e.i(843476),
      r = e.i(271645);
    e.i(207670);
    var o = e.i(917303);
    function n(e, t, r, o) {
      return "center" === e || "center" === o
        ? { top: t }
        : "end" === e
        ? { bottom: r }
        : "start" === e
        ? { top: r }
        : {};
    }
    function l(e, t, r, o, n) {
      return "center" === e || "center" === o
        ? { left: t }
        : "end" === e
        ? { ["ltr" === n ? "right" : "left"]: r }
        : "start" === e
        ? { ["ltr" === n ? "left" : "right"]: r }
        : {};
    }
    let i = {
        bottom: "borderTopLeftRadius",
        left: "borderTopRightRadius",
        right: "borderBottomLeftRadius",
        top: "borderBottomRightRadius",
      },
      s = (0, r.forwardRef)(
        (
          {
            position: e,
            arrowSize: r,
            arrowOffset: s,
            arrowRadius: a,
            arrowPosition: u,
            visible: c,
            arrowX: d,
            arrowY: f,
            style: p,
            ...h
          },
          m
        ) => {
          let { dir: v } = (0, o.useDirection)();
          return c
            ? (0, t.jsx)("div", {
                ...h,
                ref: m,
                style: {
                  ...p,
                  ...(function ({
                    position: e,
                    arrowSize: t,
                    arrowOffset: r,
                    arrowRadius: o,
                    arrowPosition: s,
                    arrowX: a,
                    arrowY: u,
                    dir: c,
                  }) {
                    let [d, f = "center"] = e.split("-"),
                      p = {
                        width: t,
                        height: t,
                        transform: "rotate(45deg)",
                        position: "absolute",
                        [i[d]]: o,
                      },
                      h = -t / 2;
                    return "left" === d
                      ? {
                          ...p,
                          ...n(f, u, r, s),
                          right: h,
                          borderLeftColor: "transparent",
                          borderBottomColor: "transparent",
                          clipPath: "polygon(100% 0, 0 0, 100% 100%)",
                        }
                      : "right" === d
                      ? {
                          ...p,
                          ...n(f, u, r, s),
                          left: h,
                          borderRightColor: "transparent",
                          borderTopColor: "transparent",
                          clipPath: "polygon(0 100%, 0 0, 100% 100%)",
                        }
                      : "top" === d
                      ? {
                          ...p,
                          ...l(f, a, r, s, c),
                          bottom: h,
                          borderTopColor: "transparent",
                          borderLeftColor: "transparent",
                          clipPath: "polygon(0 100%, 100% 100%, 100% 0)",
                        }
                      : "bottom" === d
                      ? {
                          ...p,
                          ...l(f, a, r, s, c),
                          top: h,
                          borderBottomColor: "transparent",
                          borderRightColor: "transparent",
                          clipPath: "polygon(0 100%, 0 0, 100% 0)",
                        }
                      : {};
                  })({
                    position: e,
                    arrowSize: r,
                    arrowOffset: s,
                    arrowRadius: a,
                    arrowPosition: u,
                    dir: v,
                    arrowX: d,
                    arrowY: f,
                  }),
                },
              })
            : null;
        }
      );
    (s.displayName = "@mantine/core/FloatingArrow"),
      e.s(["FloatingArrow", () => s], 368637);
  },
  268598,
  (e) => {
    "use strict";
    function t(e, t) {
      if ("rtl" === e && (t.includes("right") || t.includes("left"))) {
        let [e, r] = t.split("-"),
          o = "right" === e ? "left" : "right";
        return void 0 === r ? o : `${o}-${r}`;
      }
      return t;
    }
    e.s(["getFloatingPosition", () => t]);
  },
  184086,
  (e) => {
    "use strict";
    var t = e.i(843476),
      r = e.i(271645),
      o = e.i(207670),
      n = e.i(931316),
      l = e.i(795991),
      i = e.i(598526),
      s = e.i(424848),
      a = e.i(532503),
      u = e.i(143798),
      c = e.i(789549),
      d = e.i(314037),
      f = e.i(644662),
      p = e.i(321879),
      h = e.i(917303),
      m = e.i(368637),
      v = e.i(268598),
      g = e.i(595556),
      b = e.i(298193);
    let y = { duration: 100, transition: "fade" };
    function w(e, t) {
      return { ...y, ...t, ...e };
    }
    var S = e.i(515259),
      x = e.i(522442),
      R = e.i(819488),
      C = e.i(171189),
      P = e.i(258950),
      T = e.i(229315),
      E = { tooltip: "m_1b3c8819", arrow: "m_f898399f" };
    let j = {
        refProp: "ref",
        withinPortal: !0,
        offset: 10,
        position: "right",
        zIndex: (0, i.getDefaultZIndex)("popover"),
      },
      A = (0, u.createVarsResolver)((e, { radius: t, color: r }) => ({
        tooltip: {
          "--tooltip-radius": void 0 === t ? void 0 : (0, s.getRadius)(t),
          "--tooltip-bg": r ? (0, S.getThemeColor)(r, e) : void 0,
          "--tooltip-color": r ? "var(--mantine-color-white)" : void 0,
        },
      })),
      D = (0, p.factory)((e, o) => {
        let i = (0, c.useProps)("TooltipFloating", j, e),
          {
            children: s,
            refProp: u,
            withinPortal: p,
            style: h,
            className: m,
            classNames: v,
            styles: b,
            unstyled: y,
            radius: w,
            color: S,
            label: D,
            offset: M,
            position: z,
            multiline: L,
            zIndex: F,
            disabled: O,
            defaultOpened: N,
            variant: I,
            vars: B,
            portalProps: H,
            attributes: W,
            ...k
          } = i,
          X = (0, x.useMantineTheme)(),
          Y = (0, d.useStyles)({
            name: "TooltipFloating",
            props: i,
            classes: E,
            className: m,
            style: h,
            classNames: v,
            styles: b,
            unstyled: y,
            attributes: W,
            rootSelector: "tooltip",
            vars: B,
            varsResolver: A,
          }),
          {
            handleMouseMove: U,
            x: $,
            y: _,
            opened: G,
            boundaryRef: V,
            floating: q,
            setOpened: Z,
          } = (function ({ offset: e, position: t, defaultOpened: o }) {
            let [n, l] = (0, r.useState)(o),
              i = (0, r.useRef)(null),
              {
                x: s,
                y: a,
                elements: u,
                refs: c,
                update: d,
                placement: f,
              } = (0, C.useFloating)({
                placement: t,
                middleware: [
                  (0, P.shift)({
                    crossAxis: !0,
                    padding: 5,
                    rootBoundary: "document",
                  }),
                ],
              }),
              p = f.includes("right") ? e : t.includes("left") ? -1 * e : 0,
              h = f.includes("bottom") ? e : t.includes("top") ? -1 * e : 0,
              m = (0, r.useCallback)(
                ({ clientX: e, clientY: t }) => {
                  c.setPositionReference({
                    getBoundingClientRect: () => ({
                      width: 0,
                      height: 0,
                      x: e,
                      y: t,
                      left: e + p,
                      top: t + h,
                      right: e,
                      bottom: t,
                    }),
                  });
                },
                [u.reference]
              );
            return (
              (0, r.useEffect)(() => {
                if (c.floating.current) {
                  let e = i.current;
                  e.addEventListener("mousemove", m);
                  let t = (0, T.getOverflowAncestors)(c.floating.current);
                  return (
                    t.forEach((e) => {
                      e.addEventListener("scroll", d);
                    }),
                    () => {
                      e.removeEventListener("mousemove", m),
                        t.forEach((e) => {
                          e.removeEventListener("scroll", d);
                        });
                    }
                  );
                }
              }, [u.reference, c.floating.current, d, m, n]),
              {
                handleMouseMove: m,
                x: s,
                y: a,
                opened: n,
                setOpened: l,
                boundaryRef: i,
                floating: c.setFloating,
              }
            );
          })({ offset: M, position: z, defaultOpened: N });
        if (!(0, l.isElement)(s))
          throw Error(
            "[@mantine/core] Tooltip.Floating component children should be an element or a component that accepts ref, fragments, strings, numbers and other primitive values are not supported"
          );
        let K = (0, n.useMergedRef)(V, (0, a.getRefProp)(s), o),
          J = s.props;
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsx)(g.OptionalPortal, {
              ...H,
              withinPortal: p,
              children: (0, t.jsx)(f.Box, {
                ...k,
                ...Y("tooltip", {
                  style: {
                    ...(0, R.getStyleObject)(h, X),
                    zIndex: F,
                    display: !O && G ? "block" : "none",
                    top: (_ && Math.round(_)) ?? "",
                    left: ($ && Math.round($)) ?? "",
                  },
                }),
                variant: I,
                ref: q,
                mod: { multiline: L },
                children: D,
              }),
            }),
            (0, r.cloneElement)(s, {
              ...J,
              [u]: K,
              onMouseEnter: (e) => {
                J.onMouseEnter?.(e), U(e), Z(!0);
              },
              onMouseLeave: (e) => {
                J.onMouseLeave?.(e), Z(!1);
              },
            }),
          ],
        });
      });
    (D.classes = E), (D.displayName = "@mantine/core/TooltipFloating");
    let M = (0, r.createContext)(!1),
      z = M.Provider,
      L = { openDelay: 0, closeDelay: 0 };
    function F(e) {
      let {
        openDelay: r,
        closeDelay: o,
        children: n,
      } = (0, c.useProps)("TooltipGroup", L, e);
      return (0, t.jsx)(z, {
        value: !0,
        children: (0, t.jsx)(C.FloatingDelayGroup, {
          delay: { open: r, close: o },
          children: n,
        }),
      });
    }
    (F.displayName = "@mantine/core/TooltipGroup"), (F.extend = (e) => e);
    var O = e.i(953760),
      N = e.i(751937),
      I = e.i(145500);
    let B = {
        position: "top",
        refProp: "ref",
        withinPortal: !0,
        arrowSize: 4,
        arrowOffset: 5,
        arrowRadius: 0,
        arrowPosition: "side",
        offset: 5,
        transitionProps: { duration: 100, transition: "fade" },
        events: { hover: !0, focus: !1, touch: !1 },
        zIndex: (0, i.getDefaultZIndex)("popover"),
        positionDependencies: [],
        middlewares: { flip: !0, shift: !0, inline: !1 },
      },
      H = (0, u.createVarsResolver)(
        (e, { radius: t, color: r, variant: o, autoContrast: n }) => {
          let l = e.variantColorResolver({
            theme: e,
            color: r || e.primaryColor,
            autoContrast: n,
            variant: o || "filled",
          });
          return {
            tooltip: {
              "--tooltip-radius": void 0 === t ? void 0 : (0, s.getRadius)(t),
              "--tooltip-bg": r ? l.background : void 0,
              "--tooltip-color": r ? l.color : void 0,
            },
          };
        }
      ),
      W = (0, p.factory)((e, i) => {
        let s = (0, c.useProps)("Tooltip", B, e),
          {
            children: u,
            position: p,
            refProp: y,
            label: S,
            openDelay: x,
            closeDelay: R,
            onPositionChange: T,
            opened: j,
            defaultOpened: A,
            withinPortal: D,
            radius: z,
            color: L,
            classNames: F,
            styles: W,
            unstyled: k,
            style: X,
            className: Y,
            withArrow: U,
            arrowSize: $,
            arrowOffset: _,
            arrowRadius: G,
            arrowPosition: V,
            offset: q,
            transitionProps: Z,
            multiline: K,
            events: J,
            zIndex: Q,
            disabled: ee,
            positionDependencies: et,
            onClick: er,
            onMouseEnter: eo,
            onMouseLeave: en,
            inline: el,
            variant: ei,
            keepMounted: es,
            vars: ea,
            portalProps: eu,
            mod: ec,
            floatingStrategy: ed,
            middlewares: ef,
            autoContrast: ep,
            attributes: eh,
            target: em,
            ...ev
          } = (0, c.useProps)("Tooltip", B, s),
          { dir: eg } = (0, h.useDirection)(),
          eb = (0, r.useRef)(null),
          ey = (function (e) {
            let t,
              o,
              [n, l] = (0, r.useState)(e.defaultOpened),
              i = "boolean" == typeof e.opened ? e.opened : n,
              s = (0, r.useContext)(M),
              a = (0, N.useId)(),
              u = (0, r.useCallback)(
                (e) => {
                  l(e), e && y(a);
                },
                [a]
              ),
              {
                x: c,
                y: d,
                context: f,
                refs: p,
                placement: h,
                middlewareData: { arrow: { x: m, y: v } = {} },
              } = (0, C.useFloating)({
                strategy: e.strategy,
                placement: e.position,
                open: i,
                onOpenChange: u,
                middleware:
                  ((t = (function (e) {
                    if (void 0 === e) return { shift: !0, flip: !0 };
                    let t = { ...e };
                    return (
                      void 0 === e.shift && (t.shift = !0),
                      void 0 === e.flip && (t.flip = !0),
                      t
                    );
                  })(e.middlewares)),
                  (o = [(0, P.offset)(e.offset)]),
                  t.shift &&
                    o.push(
                      (0, P.shift)(
                        "boolean" == typeof t.shift
                          ? { padding: 8 }
                          : { padding: 8, ...t.shift }
                      )
                    ),
                  t.flip &&
                    o.push(
                      "boolean" == typeof t.flip
                        ? (0, P.flip)()
                        : (0, P.flip)(t.flip)
                    ),
                  o.push(
                    (0, P.arrow)({
                      element: e.arrowRef,
                      padding: e.arrowOffset,
                    })
                  ),
                  t.inline
                    ? o.push(
                        "boolean" == typeof t.inline
                          ? (0, P.inline)()
                          : (0, P.inline)(t.inline)
                      )
                    : e.inline && o.push((0, P.inline)()),
                  o),
                whileElementsMounted: O.autoUpdate,
              }),
              {
                delay: g,
                currentId: b,
                setCurrentId: y,
              } = (0, C.useDelayGroup)(f, { id: a }),
              { getReferenceProps: w, getFloatingProps: S } = (0,
              C.useInteractions)([
                (0, C.useHover)(f, {
                  enabled: e.events?.hover,
                  delay: s ? g : { open: e.openDelay, close: e.closeDelay },
                  mouseOnly: !e.events?.touch,
                }),
                (0, C.useFocus)(f, {
                  enabled: e.events?.focus,
                  visibleOnly: !0,
                }),
                (0, C.useRole)(f, { role: "tooltip" }),
                (0, C.useDismiss)(f, { enabled: void 0 === e.opened }),
              ]);
            (0, I.useDidUpdate)(() => {
              e.onPositionChange?.(h);
            }, [h]);
            let x = i && b && b !== a;
            return {
              x: c,
              y: d,
              arrowX: m,
              arrowY: v,
              reference: p.setReference,
              floating: p.setFloating,
              getFloatingProps: S,
              getReferenceProps: w,
              isGroupPhase: x,
              opened: i,
              placement: h,
            };
          })({
            position: (0, v.getFloatingPosition)(eg, p),
            closeDelay: R,
            openDelay: x,
            onPositionChange: T,
            opened: j,
            defaultOpened: A,
            events: J,
            arrowRef: eb,
            arrowOffset: _,
            offset: "number" == typeof q ? q + (U ? $ / 2 : 0) : q,
            positionDependencies: [...et, em ?? u],
            inline: el,
            strategy: ed,
            middlewares: ef,
          });
        (0, r.useEffect)(() => {
          let e =
            em instanceof HTMLElement
              ? em
              : "string" == typeof em
              ? document.querySelector(em)
              : em?.current || null;
          e && ey.reference(e);
        }, [em, ey]);
        let ew = (0, d.useStyles)({
          name: "Tooltip",
          props: s,
          classes: E,
          className: Y,
          style: X,
          classNames: F,
          styles: W,
          unstyled: k,
          attributes: eh,
          rootSelector: "tooltip",
          vars: ea,
          varsResolver: H,
        });
        if (!em && !(0, l.isElement)(u)) return null;
        if (em) {
          let e = w(Z, { duration: 100, transition: "fade" });
          return (0, t.jsx)(t.Fragment, {
            children: (0, t.jsx)(g.OptionalPortal, {
              ...eu,
              withinPortal: D,
              children: (0, t.jsx)(b.Transition, {
                ...e,
                keepMounted: es,
                mounted: !ee && !!ey.opened,
                duration: ey.isGroupPhase ? 10 : e.duration,
                children: (e) =>
                  (0, t.jsxs)(f.Box, {
                    ...ev,
                    "data-fixed": "fixed" === ed || void 0,
                    variant: ei,
                    mod: [{ multiline: K }, ec],
                    ...ey.getFloatingProps({
                      ref: ey.floating,
                      className: ew("tooltip").className,
                      style: {
                        ...ew("tooltip").style,
                        ...e,
                        zIndex: Q,
                        top: ey.y ?? 0,
                        left: ey.x ?? 0,
                      },
                    }),
                    children: [
                      S,
                      (0, t.jsx)(m.FloatingArrow, {
                        ref: eb,
                        arrowX: ey.arrowX,
                        arrowY: ey.arrowY,
                        visible: U,
                        position: ey.placement,
                        arrowSize: $,
                        arrowOffset: _,
                        arrowRadius: G,
                        arrowPosition: V,
                        ...ew("arrow"),
                      }),
                    ],
                  }),
              }),
            }),
          });
        }
        let eS = u.props,
          ex = (0, n.useMergedRef)(ey.reference, (0, a.getRefProp)(u), i),
          eR = w(Z, { duration: 100, transition: "fade" });
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsx)(g.OptionalPortal, {
              ...eu,
              withinPortal: D,
              children: (0, t.jsx)(b.Transition, {
                ...eR,
                keepMounted: es,
                mounted: !ee && !!ey.opened,
                duration: ey.isGroupPhase ? 10 : eR.duration,
                children: (e) =>
                  (0, t.jsxs)(f.Box, {
                    ...ev,
                    "data-fixed": "fixed" === ed || void 0,
                    variant: ei,
                    mod: [{ multiline: K }, ec],
                    ...ey.getFloatingProps({
                      ref: ey.floating,
                      className: ew("tooltip").className,
                      style: {
                        ...ew("tooltip").style,
                        ...e,
                        zIndex: Q,
                        top: ey.y ?? 0,
                        left: ey.x ?? 0,
                      },
                    }),
                    children: [
                      S,
                      (0, t.jsx)(m.FloatingArrow, {
                        ref: eb,
                        arrowX: ey.arrowX,
                        arrowY: ey.arrowY,
                        visible: U,
                        position: ey.placement,
                        arrowSize: $,
                        arrowOffset: _,
                        arrowRadius: G,
                        arrowPosition: V,
                        ...ew("arrow"),
                      }),
                    ],
                  }),
              }),
            }),
            (0, r.cloneElement)(
              u,
              ey.getReferenceProps({
                onClick: er,
                onMouseEnter: eo,
                onMouseLeave: en,
                onMouseMove: s.onMouseMove,
                onPointerDown: s.onPointerDown,
                onPointerEnter: s.onPointerEnter,
                className: (0, o.default)(Y, eS.className),
                ...eS,
                [y]: ex,
              })
            ),
          ],
        });
      });
    (W.classes = E),
      (W.displayName = "@mantine/core/Tooltip"),
      (W.Floating = D),
      (W.Group = F),
      e.s(["Tooltip", () => W], 184086);
  },
  622977,
  840712,
  759386,
  66355,
  643686,
  301798,
  567443,
  611694,
  413723,
  916183,
  155997,
  (e) => {
    "use strict";
    var t = e.i(843476),
      r = e.i(271645),
      o = e.i(384660);
    e.i(207670);
    let [n, l] = (0, o.createSafeContext)(
      "ScrollArea.Root component was not found in tree"
    );
    function i(e) {
      let t = (0, r.useRef)(e);
      return (
        (0, r.useEffect)(() => {
          t.current = e;
        }),
        (0, r.useMemo)(
          () =>
            (...e) =>
              t.current?.(...e),
          []
        )
      );
    }
    e.s(
      ["ScrollAreaProvider", () => n, "useScrollAreaContext", () => l],
      840712
    ),
      e.s(["useCallbackRef", () => i], 759386);
    var s = e.i(931141);
    function a(e, t) {
      let r = i(t);
      (0, s.useIsomorphicEffect)(() => {
        let t = 0;
        if (e) {
          let o = new ResizeObserver(() => {
            cancelAnimationFrame(t), (t = window.requestAnimationFrame(r));
          });
          return (
            o.observe(e),
            () => {
              window.cancelAnimationFrame(t), o.unobserve(e);
            }
          );
        }
      }, [e, r]);
    }
    e.s(["useResizeObserver", () => a], 66355);
    let u = (0, r.forwardRef)((e, o) => {
        let { style: n, ...i } = e,
          s = l(),
          [u, c] = (0, r.useState)(0),
          [d, f] = (0, r.useState)(0),
          p = !!(u && d);
        return (
          a(s.scrollbarX, () => {
            let e = s.scrollbarX?.offsetHeight || 0;
            s.onCornerHeightChange(e), f(e);
          }),
          a(s.scrollbarY, () => {
            let e = s.scrollbarY?.offsetWidth || 0;
            s.onCornerWidthChange(e), c(e);
          }),
          p
            ? (0, t.jsx)("div", {
                ...i,
                ref: o,
                style: { ...n, width: u, height: d },
              })
            : null
        );
      }),
      c = (0, r.forwardRef)((e, r) => {
        let o = l(),
          n = !!(o.scrollbarX && o.scrollbarY);
        return "scroll" !== o.type && n
          ? (0, t.jsx)(u, { ...e, ref: r })
          : null;
      });
    e.s(["ScrollAreaCorner", () => c], 622977);
    var d = e.i(931316),
      f = e.i(789549),
      p = e.i(644662);
    let h = { scrollHideDelay: 1e3, type: "hover" },
      m = (0, r.forwardRef)((e, o) => {
        let {
            type: l,
            scrollHideDelay: i,
            scrollbars: s,
            getStyles: a,
            ...u
          } = (0, f.useProps)("ScrollAreaRoot", h, e),
          [c, m] = (0, r.useState)(null),
          [v, g] = (0, r.useState)(null),
          [b, y] = (0, r.useState)(null),
          [w, S] = (0, r.useState)(null),
          [x, R] = (0, r.useState)(null),
          [C, P] = (0, r.useState)(0),
          [T, E] = (0, r.useState)(0),
          [j, A] = (0, r.useState)(!1),
          [D, M] = (0, r.useState)(!1),
          z = (0, d.useMergedRef)(o, (e) => m(e));
        return (0, t.jsx)(n, {
          value: {
            type: l,
            scrollHideDelay: i,
            scrollArea: c,
            viewport: v,
            onViewportChange: g,
            content: b,
            onContentChange: y,
            scrollbarX: w,
            onScrollbarXChange: S,
            scrollbarXEnabled: j,
            onScrollbarXEnabledChange: A,
            scrollbarY: x,
            onScrollbarYChange: R,
            scrollbarYEnabled: D,
            onScrollbarYEnabledChange: M,
            onCornerWidthChange: P,
            onCornerHeightChange: E,
            getStyles: a,
          },
          children: (0, t.jsx)(p.Box, {
            ...u,
            ref: z,
            __vars: {
              "--sa-corner-width": "xy" !== s ? "0px" : `${C}px`,
              "--sa-corner-height": "xy" !== s ? "0px" : `${T}px`,
            },
          }),
        });
      });
    function v(e, t) {
      let o = "number" == typeof t ? t : t.delay,
        n = "number" != typeof t && t.flushOnUnmount,
        l = i(e),
        s = (0, r.useRef)(0),
        a = (0, r.useRef)(() => {}),
        u = Object.assign(
          (0, r.useCallback)(
            (...e) => {
              window.clearTimeout(s.current);
              let t = () => {
                0 !== s.current && ((s.current = 0), l(...e));
              };
              (a.current = t),
                (u.flush = t),
                (s.current = window.setTimeout(t, o));
            },
            [l, o]
          ),
          { flush: a.current }
        );
      return (
        (0, r.useEffect)(
          () => () => {
            window.clearTimeout(s.current), n && u.flush();
          },
          [u, n]
        ),
        u
      );
    }
    function g(e, t) {
      let r = e / t;
      return Number.isNaN(r) ? 0 : r;
    }
    function b(e) {
      let t = g(e.viewport, e.content),
        r = e.scrollbar.paddingStart + e.scrollbar.paddingEnd;
      return Math.max((e.scrollbar.size - r) * t, 18);
    }
    function y(e, t) {
      return (r) => {
        if (e[0] === e[1] || t[0] === t[1]) return t[0];
        let o = (t[1] - t[0]) / (e[1] - e[0]);
        return t[0] + o * (r - e[0]);
      };
    }
    function w(e, t, r = "ltr") {
      let o = b(t),
        n = t.scrollbar.paddingStart + t.scrollbar.paddingEnd,
        l = t.scrollbar.size - n,
        i = t.content - t.viewport,
        s = (function (e, [t, r]) {
          return Math.min(r, Math.max(t, e));
        })(e, "ltr" === r ? [0, i] : [-1 * i, 0]);
      return y([0, i], [0, l - o])(s);
    }
    function S(e, t, r, o = "ltr") {
      let n = b(r),
        l = t || n / 2,
        i = r.scrollbar.paddingStart + l,
        s = r.scrollbar.size - r.scrollbar.paddingEnd - (n - l),
        a = r.content - r.viewport;
      return y([i, s], "ltr" === o ? [0, a] : [-1 * a, 0])(e);
    }
    function x(e, t) {
      return e > 0 && e < t;
    }
    (m.displayName = "@mantine/core/ScrollAreaRoot"),
      e.s(["ScrollAreaRoot", () => m], 643686),
      e.s(["useDebouncedCallback", () => v], 301798),
      e.s(["getThumbRatio", () => g], 567443),
      e.s(["getThumbSize", () => b], 611694),
      e.s(["getThumbOffsetFromScroll", () => w], 413723),
      e.s(["getScrollPositionFromPointer", () => S], 916183),
      e.s(["isScrollingWithinScrollbarBounds", () => x], 155997);
  },
  346929,
  (e) => {
    "use strict";
    function t(e) {
      return e ? parseInt(e, 10) : 0;
    }
    e.s(["toInt", () => t]);
  },
  747596,
  (e) => {
    "use strict";
    var t = e.i(843476),
      r = e.i(271645),
      o = e.i(171189),
      n = e.i(682451),
      l = e.i(143798);
    e.i(207670);
    var i = e.i(789549),
      s = e.i(314037),
      a = e.i(644662),
      u = e.i(321879),
      c = e.i(622977),
      d = e.i(643686),
      f = e.i(840712),
      p = e.i(301798),
      h = e.i(66355),
      m = e.i(917303),
      v = e.i(567443),
      g = e.i(413723),
      b = e.i(916183),
      y = e.i(931316),
      w = e.i(155997),
      S = e.i(611694),
      x = e.i(346929),
      R = e.i(759386);
    function C(e, t, { checkForDefaultPrevented: r = !0 } = {}) {
      return (o) => {
        e?.(o), (!1 !== r && o.defaultPrevented) || t?.(o);
      };
    }
    let [P, T] = (0, e.i(384660).createSafeContext)(
        "ScrollAreaScrollbar was not found in tree"
      ),
      E = (0, r.forwardRef)((e, o) => {
        let {
            sizes: n,
            hasThumb: l,
            onThumbChange: i,
            onThumbPointerUp: s,
            onThumbPointerDown: a,
            onThumbPositionChange: u,
            onDragScroll: c,
            onWheelScroll: d,
            onResize: m,
            ...v
          } = e,
          g = (0, f.useScrollAreaContext)(),
          [b, w] = (0, r.useState)(null),
          S = (0, y.useMergedRef)(o, (e) => w(e)),
          x = (0, r.useRef)(null),
          T = (0, r.useRef)(""),
          { viewport: E } = g,
          j = n.content - n.viewport,
          A = (0, R.useCallbackRef)(d),
          D = (0, R.useCallbackRef)(u),
          M = (0, p.useDebouncedCallback)(m, 10),
          z = (e) => {
            x.current &&
              c({
                x: e.clientX - x.current.left,
                y: e.clientY - x.current.top,
              });
          };
        return (
          (0, r.useEffect)(() => {
            let e = (e) => {
              let t = e.target;
              b?.contains(t) && A(e, j);
            };
            return (
              document.addEventListener("wheel", e, { passive: !1 }),
              () => document.removeEventListener("wheel", e, { passive: !1 })
            );
          }, [E, b, j, A]),
          (0, r.useEffect)(D, [n, D]),
          (0, h.useResizeObserver)(b, M),
          (0, h.useResizeObserver)(g.content, M),
          (0, t.jsx)(P, {
            value: {
              scrollbar: b,
              hasThumb: l,
              onThumbChange: (0, R.useCallbackRef)(i),
              onThumbPointerUp: (0, R.useCallbackRef)(s),
              onThumbPositionChange: D,
              onThumbPointerDown: (0, R.useCallbackRef)(a),
            },
            children: (0, t.jsx)("div", {
              ...v,
              ref: S,
              "data-mantine-scrollbar": !0,
              style: { position: "absolute", ...v.style },
              onPointerDown: C(e.onPointerDown, (e) => {
                e.preventDefault(),
                  0 === e.button &&
                    (e.target.setPointerCapture(e.pointerId),
                    (x.current = b.getBoundingClientRect()),
                    (T.current = document.body.style.webkitUserSelect),
                    (document.body.style.webkitUserSelect = "none"),
                    z(e));
              }),
              onPointerMove: C(e.onPointerMove, z),
              onPointerUp: C(e.onPointerUp, (e) => {
                let t = e.target;
                t.hasPointerCapture(e.pointerId) &&
                  (e.preventDefault(), t.releasePointerCapture(e.pointerId));
              }),
              onLostPointerCapture: () => {
                (document.body.style.webkitUserSelect = T.current),
                  (x.current = null);
              },
            }),
          })
        );
      }),
      j = (0, r.forwardRef)((e, o) => {
        let { sizes: n, onSizesChange: l, style: i, ...s } = e,
          a = (0, f.useScrollAreaContext)(),
          [u, c] = (0, r.useState)(),
          d = (0, r.useRef)(null),
          p = (0, y.useMergedRef)(o, d, a.onScrollbarXChange);
        return (
          (0, r.useEffect)(() => {
            d.current && c(getComputedStyle(d.current));
          }, [d]),
          (0, t.jsx)(E, {
            "data-orientation": "horizontal",
            ...s,
            ref: p,
            sizes: n,
            style: { ...i, "--sa-thumb-width": `${(0, S.getThumbSize)(n)}px` },
            onThumbPointerDown: (t) => e.onThumbPointerDown(t.x),
            onDragScroll: (t) => e.onDragScroll(t.x),
            onWheelScroll: (t, r) => {
              if (a.viewport) {
                let o = a.viewport.scrollLeft + t.deltaX;
                e.onWheelScroll(o),
                  (0, w.isScrollingWithinScrollbarBounds)(o, r) &&
                    t.preventDefault();
              }
            },
            onResize: () => {
              d.current &&
                a.viewport &&
                u &&
                l({
                  content: a.viewport.scrollWidth,
                  viewport: a.viewport.offsetWidth,
                  scrollbar: {
                    size: d.current.clientWidth,
                    paddingStart: (0, x.toInt)(u.paddingLeft),
                    paddingEnd: (0, x.toInt)(u.paddingRight),
                  },
                });
            },
          })
        );
      });
    j.displayName = "@mantine/core/ScrollAreaScrollbarX";
    let A = (0, r.forwardRef)((e, o) => {
      let { sizes: n, onSizesChange: l, style: i, ...s } = e,
        a = (0, f.useScrollAreaContext)(),
        [u, c] = (0, r.useState)(),
        d = (0, r.useRef)(null),
        p = (0, y.useMergedRef)(o, d, a.onScrollbarYChange);
      return (
        (0, r.useEffect)(() => {
          d.current && c(window.getComputedStyle(d.current));
        }, []),
        (0, t.jsx)(E, {
          ...s,
          "data-orientation": "vertical",
          ref: p,
          sizes: n,
          style: { "--sa-thumb-height": `${(0, S.getThumbSize)(n)}px`, ...i },
          onThumbPointerDown: (t) => e.onThumbPointerDown(t.y),
          onDragScroll: (t) => e.onDragScroll(t.y),
          onWheelScroll: (t, r) => {
            if (a.viewport) {
              let o = a.viewport.scrollTop + t.deltaY;
              e.onWheelScroll(o),
                (0, w.isScrollingWithinScrollbarBounds)(o, r) &&
                  t.preventDefault();
            }
          },
          onResize: () => {
            d.current &&
              a.viewport &&
              u &&
              l({
                content: a.viewport.scrollHeight,
                viewport: a.viewport.offsetHeight,
                scrollbar: {
                  size: d.current.clientHeight,
                  paddingStart: (0, x.toInt)(u.paddingTop),
                  paddingEnd: (0, x.toInt)(u.paddingBottom),
                },
              });
          },
        })
      );
    });
    A.displayName = "@mantine/core/ScrollAreaScrollbarY";
    let D = (0, r.forwardRef)((e, o) => {
      let { orientation: n = "vertical", ...l } = e,
        { dir: i } = (0, m.useDirection)(),
        s = (0, f.useScrollAreaContext)(),
        a = (0, r.useRef)(null),
        u = (0, r.useRef)(0),
        [c, d] = (0, r.useState)({
          content: 0,
          viewport: 0,
          scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 },
        }),
        p = (0, v.getThumbRatio)(c.viewport, c.content),
        h = {
          ...l,
          sizes: c,
          onSizesChange: d,
          hasThumb: !!(p > 0 && p < 1),
          onThumbChange: (e) => {
            a.current = e;
          },
          onThumbPointerUp: () => {
            u.current = 0;
          },
          onThumbPointerDown: (e) => {
            u.current = e;
          },
        },
        y = (e, t) => (0, b.getScrollPositionFromPointer)(e, u.current, c, t);
      return "horizontal" === n
        ? (0, t.jsx)(j, {
            ...h,
            ref: o,
            onThumbPositionChange: () => {
              if (s.viewport && a.current) {
                let e = s.viewport.scrollLeft,
                  t = (0, g.getThumbOffsetFromScroll)(e, c, i);
                a.current.style.transform = `translate3d(${t}px, 0, 0)`;
              }
            },
            onWheelScroll: (e) => {
              s.viewport && (s.viewport.scrollLeft = e);
            },
            onDragScroll: (e) => {
              s.viewport && (s.viewport.scrollLeft = y(e, i));
            },
          })
        : "vertical" === n
        ? (0, t.jsx)(A, {
            ...h,
            ref: o,
            onThumbPositionChange: () => {
              if (s.viewport && a.current) {
                let e = s.viewport.scrollTop,
                  t = (0, g.getThumbOffsetFromScroll)(e, c);
                0 === c.scrollbar.size
                  ? a.current.style.setProperty("--thumb-opacity", "0")
                  : a.current.style.setProperty("--thumb-opacity", "1"),
                  (a.current.style.transform = `translate3d(0, ${t}px, 0)`);
              }
            },
            onWheelScroll: (e) => {
              s.viewport && (s.viewport.scrollTop = e);
            },
            onDragScroll: (e) => {
              s.viewport && (s.viewport.scrollTop = y(e));
            },
          })
        : null;
    });
    D.displayName = "@mantine/core/ScrollAreaScrollbarVisible";
    let M = (0, r.forwardRef)((e, o) => {
      let n = (0, f.useScrollAreaContext)(),
        { forceMount: l, ...i } = e,
        [s, a] = (0, r.useState)(!1),
        u = "horizontal" === e.orientation,
        c = (0, p.useDebouncedCallback)(() => {
          if (n.viewport) {
            let e = n.viewport.offsetWidth < n.viewport.scrollWidth,
              t = n.viewport.offsetHeight < n.viewport.scrollHeight;
            a(u ? e : t);
          }
        }, 10);
      return ((0, h.useResizeObserver)(n.viewport, c),
      (0, h.useResizeObserver)(n.content, c),
      l || s)
        ? (0, t.jsx)(D, {
            "data-state": s ? "visible" : "hidden",
            ...i,
            ref: o,
          })
        : null;
    });
    M.displayName = "@mantine/core/ScrollAreaScrollbarAuto";
    let z = (0, r.forwardRef)((e, o) => {
      let { forceMount: n, ...l } = e,
        i = (0, f.useScrollAreaContext)(),
        [s, a] = (0, r.useState)(!1);
      return ((0, r.useEffect)(() => {
        let { scrollArea: e } = i,
          t = 0;
        if (e) {
          let r = () => {
              window.clearTimeout(t), a(!0);
            },
            o = () => {
              t = window.setTimeout(() => a(!1), i.scrollHideDelay);
            };
          return (
            e.addEventListener("pointerenter", r),
            e.addEventListener("pointerleave", o),
            () => {
              window.clearTimeout(t),
                e.removeEventListener("pointerenter", r),
                e.removeEventListener("pointerleave", o);
            }
          );
        }
      }, [i.scrollArea, i.scrollHideDelay]),
      n || s)
        ? (0, t.jsx)(M, {
            "data-state": s ? "visible" : "hidden",
            ...l,
            ref: o,
          })
        : null;
    });
    z.displayName = "@mantine/core/ScrollAreaScrollbarHover";
    let L = (0, r.forwardRef)((e, o) => {
        let { forceMount: n, ...l } = e,
          i = (0, f.useScrollAreaContext)(),
          s = "horizontal" === e.orientation,
          [a, u] = (0, r.useState)("hidden"),
          c = (0, p.useDebouncedCallback)(() => u("idle"), 100);
        return ((0, r.useEffect)(() => {
          if ("idle" === a) {
            let e = window.setTimeout(() => u("hidden"), i.scrollHideDelay);
            return () => window.clearTimeout(e);
          }
        }, [a, i.scrollHideDelay]),
        (0, r.useEffect)(() => {
          let { viewport: e } = i,
            t = s ? "scrollLeft" : "scrollTop";
          if (e) {
            let r = e[t],
              o = () => {
                let o = e[t];
                r !== o && (u("scrolling"), c()), (r = o);
              };
            return (
              e.addEventListener("scroll", o),
              () => e.removeEventListener("scroll", o)
            );
          }
        }, [i.viewport, s, c]),
        n || "hidden" !== a)
          ? (0, t.jsx)(D, {
              "data-state": "hidden" === a ? "hidden" : "visible",
              ...l,
              ref: o,
              onPointerEnter: C(e.onPointerEnter, () => u("interacting")),
              onPointerLeave: C(e.onPointerLeave, () => u("idle")),
            })
          : null;
      }),
      F = (0, r.forwardRef)((e, o) => {
        let { forceMount: n, ...l } = e,
          i = (0, f.useScrollAreaContext)(),
          { onScrollbarXEnabledChange: s, onScrollbarYEnabledChange: a } = i,
          u = "horizontal" === e.orientation;
        return (
          (0, r.useEffect)(
            () => (
              u ? s(!0) : a(!0),
              () => {
                u ? s(!1) : a(!1);
              }
            ),
            [u, s, a]
          ),
          "hover" === i.type
            ? (0, t.jsx)(z, { ...l, ref: o, forceMount: n })
            : "scroll" === i.type
            ? (0, t.jsx)(L, { ...l, ref: o, forceMount: n })
            : "auto" === i.type
            ? (0, t.jsx)(M, { ...l, ref: o, forceMount: n })
            : "always" === i.type
            ? (0, t.jsx)(D, { ...l, ref: o })
            : null
        );
      });
    F.displayName = "@mantine/core/ScrollAreaScrollbar";
    let O = (0, r.forwardRef)((e, o) => {
      let { style: n, ...l } = e,
        i = (0, f.useScrollAreaContext)(),
        s = T(),
        { onThumbPositionChange: a } = s,
        u = (0, y.useMergedRef)(o, (e) => s.onThumbChange(e)),
        c = (0, r.useRef)(void 0),
        d = (0, p.useDebouncedCallback)(() => {
          c.current && (c.current(), (c.current = void 0));
        }, 100);
      return (
        (0, r.useEffect)(() => {
          let { viewport: e } = i;
          if (e) {
            let t = () => {
              d(),
                c.current ||
                  ((c.current = (function (e, t = () => {}) {
                    let r = { left: e.scrollLeft, top: e.scrollTop },
                      o = 0;
                    return (
                      !(function n() {
                        let l = { left: e.scrollLeft, top: e.scrollTop },
                          i = r.left !== l.left,
                          s = r.top !== l.top;
                        (i || s) && t(),
                          (r = l),
                          (o = window.requestAnimationFrame(n));
                      })(),
                      () => window.cancelAnimationFrame(o)
                    );
                  })(e, a)),
                  a());
            };
            return (
              a(),
              e.addEventListener("scroll", t),
              () => e.removeEventListener("scroll", t)
            );
          }
        }, [i.viewport, d, a]),
        (0, t.jsx)("div", {
          "data-state": s.hasThumb ? "visible" : "hidden",
          ...l,
          ref: u,
          style: {
            width: "var(--sa-thumb-width)",
            height: "var(--sa-thumb-height)",
            ...n,
          },
          onPointerDownCapture: C(e.onPointerDownCapture, (e) => {
            let t = e.target.getBoundingClientRect(),
              r = e.clientX - t.left,
              o = e.clientY - t.top;
            s.onThumbPointerDown({ x: r, y: o });
          }),
          onPointerUp: C(e.onPointerUp, s.onThumbPointerUp),
        })
      );
    });
    O.displayName = "@mantine/core/ScrollAreaThumb";
    let N = (0, r.forwardRef)((e, r) => {
      let { forceMount: o, ...n } = e,
        l = T();
      return o || l.hasThumb ? (0, t.jsx)(O, { ref: r, ...n }) : null;
    });
    N.displayName = "@mantine/core/ScrollAreaThumb";
    let I = (0, r.forwardRef)(({ children: e, style: r, ...o }, n) => {
      let l = (0, f.useScrollAreaContext)(),
        i = (0, y.useMergedRef)(n, l.onViewportChange);
      return (0, t.jsx)(a.Box, {
        ...o,
        ref: i,
        style: {
          overflowX: l.scrollbarXEnabled ? "scroll" : "hidden",
          overflowY: l.scrollbarYEnabled ? "scroll" : "hidden",
          ...r,
        },
        children: (0, t.jsx)("div", {
          ...l.getStyles("content"),
          ref: l.onContentChange,
          children: e,
        }),
      });
    });
    I.displayName = "@mantine/core/ScrollAreaViewport";
    var B = {
      root: "m_d57069b5",
      content: "m_b1336c6",
      viewport: "m_c0783ff9",
      viewportInner: "m_f8f631dd",
      scrollbar: "m_c44ba933",
      thumb: "m_d8b5e363",
      corner: "m_21657268",
    };
    let H = { scrollHideDelay: 1e3, type: "hover", scrollbars: "xy" },
      W = (0, l.createVarsResolver)(
        (e, { scrollbarSize: t, overscrollBehavior: r }) => ({
          root: {
            "--scrollarea-scrollbar-size": (0, n.rem)(t),
            "--scrollarea-over-scroll-behavior": r,
          },
        })
      ),
      k = (0, u.factory)((e, n) => {
        let l = (0, i.useProps)("ScrollArea", H, e),
          {
            classNames: a,
            className: u,
            style: f,
            styles: p,
            unstyled: h,
            scrollbarSize: m,
            vars: v,
            type: g,
            scrollHideDelay: b,
            viewportProps: y,
            viewportRef: w,
            onScrollPositionChange: S,
            children: x,
            offsetScrollbars: R,
            scrollbars: C,
            onBottomReached: P,
            onTopReached: T,
            overscrollBehavior: E,
            attributes: j,
            ...A
          } = l,
          [D, M] = (0, r.useState)(!1),
          [z, L] = (0, r.useState)(!1),
          [O, k] = (0, r.useState)(!1),
          X = (0, s.useStyles)({
            name: "ScrollArea",
            props: l,
            classes: B,
            className: u,
            style: f,
            classNames: a,
            styles: p,
            unstyled: h,
            attributes: j,
            vars: v,
            varsResolver: W,
          }),
          Y = (0, r.useRef)(null),
          U = (0, o.useMergeRefs)([w, Y]);
        return (
          (0, r.useEffect)(() => {
            if (!Y.current || "present" !== R) return;
            let e = Y.current,
              t = new ResizeObserver(() => {
                let {
                  scrollHeight: t,
                  clientHeight: r,
                  scrollWidth: o,
                  clientWidth: n,
                } = e;
                L(t > r), k(o > n);
              });
            return t.observe(e), () => t.disconnect();
          }, [Y, R]),
          (0, t.jsxs)(d.ScrollAreaRoot, {
            getStyles: X,
            type: "never" === g ? "always" : g,
            scrollHideDelay: b,
            ref: n,
            scrollbars: C,
            ...X("root"),
            ...A,
            children: [
              (0, t.jsx)(I, {
                ...y,
                ...X("viewport", { style: y?.style }),
                ref: U,
                "data-offset-scrollbars": !0 === R ? "xy" : R || void 0,
                "data-scrollbars": C || void 0,
                "data-horizontal-hidden":
                  "present" !== R || O ? void 0 : "true",
                "data-vertical-hidden": "present" !== R || z ? void 0 : "true",
                onScroll: (e) => {
                  y?.onScroll?.(e),
                    S?.({
                      x: e.currentTarget.scrollLeft,
                      y: e.currentTarget.scrollTop,
                    });
                  let {
                    scrollTop: t,
                    scrollHeight: r,
                    clientHeight: o,
                  } = e.currentTarget;
                  t - (r - o) >= -0.6 && P?.(), 0 === t && T?.();
                },
                children: x,
              }),
              ("xy" === C || "x" === C) &&
                (0, t.jsx)(F, {
                  ...X("scrollbar"),
                  orientation: "horizontal",
                  "data-hidden":
                    "never" === g || ("present" === R && !O) || void 0,
                  forceMount: !0,
                  onMouseEnter: () => M(!0),
                  onMouseLeave: () => M(!1),
                  children: (0, t.jsx)(N, { ...X("thumb") }),
                }),
              ("xy" === C || "y" === C) &&
                (0, t.jsx)(F, {
                  ...X("scrollbar"),
                  orientation: "vertical",
                  "data-hidden":
                    "never" === g || ("present" === R && !z) || void 0,
                  forceMount: !0,
                  onMouseEnter: () => M(!0),
                  onMouseLeave: () => M(!1),
                  children: (0, t.jsx)(N, { ...X("thumb") }),
                }),
              (0, t.jsx)(c.ScrollAreaCorner, {
                ...X("corner"),
                "data-hovered": D || void 0,
                "data-hidden": "never" === g || void 0,
              }),
            ],
          })
        );
      });
    k.displayName = "@mantine/core/ScrollArea";
    let X = (0, u.factory)((e, n) => {
      let {
          children: l,
          classNames: s,
          styles: u,
          scrollbarSize: c,
          scrollHideDelay: d,
          type: f,
          dir: p,
          offsetScrollbars: h,
          viewportRef: m,
          onScrollPositionChange: v,
          unstyled: g,
          variant: b,
          viewportProps: y,
          scrollbars: w,
          style: S,
          vars: x,
          onBottomReached: R,
          onTopReached: C,
          onOverflowChange: P,
          ...T
        } = (0, i.useProps)("ScrollAreaAutosize", H, e),
        E = (0, r.useRef)(null),
        j = (0, o.useMergeRefs)([m, E]),
        [A, D] = (0, r.useState)(!1),
        M = (0, r.useRef)(!1);
      return (
        (0, r.useEffect)(() => {
          if (!P) return;
          let e = E.current;
          if (!e) return;
          let t = () => {
            let t = e.scrollHeight > e.clientHeight;
            t !== A &&
              (M.current ? P?.(t) : ((M.current = !0), t && P?.(!0)), D(t));
          };
          t();
          let r = new ResizeObserver(t);
          return r.observe(e), () => r.disconnect();
        }, [P, A]),
        (0, t.jsx)(a.Box, {
          ...T,
          ref: n,
          style: [{ display: "flex", overflow: "hidden" }, S],
          children: (0, t.jsx)(a.Box, {
            style: {
              display: "flex",
              flexDirection: "column",
              flex: 1,
              overflow: "hidden",
              ...("y" === w && { minWidth: 0 }),
              ...("x" === w && { minHeight: 0 }),
              ...("xy" === w && { minWidth: 0, minHeight: 0 }),
              ...(!1 === w && { minWidth: 0, minHeight: 0 }),
            },
            children: (0, t.jsx)(k, {
              classNames: s,
              styles: u,
              scrollHideDelay: d,
              scrollbarSize: c,
              type: f,
              dir: p,
              offsetScrollbars: h,
              viewportRef: j,
              onScrollPositionChange: v,
              unstyled: g,
              variant: b,
              viewportProps: y,
              vars: x,
              scrollbars: w,
              onBottomReached: R,
              onTopReached: C,
              "data-autosize": "true",
              children: l,
            }),
          }),
        })
      );
    });
    (k.classes = B),
      (X.displayName = "@mantine/core/ScrollAreaAutosize"),
      (X.classes = B),
      (k.Autosize = X),
      e.s(["ScrollArea", () => k], 747596);
  },
  384660,
  (e) => {
    "use strict";
    var t = e.i(843476),
      r = e.i(271645);
    function o(e) {
      let o = (0, r.createContext)(null);
      return [
        ({ children: e, value: r }) =>
          (0, t.jsx)(o.Provider, { value: r, children: e }),
        () => {
          let t = (0, r.useContext)(o);
          if (null === t) throw Error(e);
          return t;
        },
      ];
    }
    e.s(["createSafeContext", () => o]);
  },
  751937,
  (e) => {
    "use strict";
    var t = e.i(271645),
      r = e.i(931141),
      o = e.i(636202);
    let n = t.default["useId".toString()] || (() => void 0);
    function l(e) {
      let l,
        i = (l = n()) ? `mantine-${l.replace(/:/g, "")}` : "",
        [s, a] = (0, t.useState)(i);
      return ((0, r.useIsomorphicEffect)(() => {
        a((0, o.randomId)());
      }, []),
      "string" == typeof e)
        ? e
        : s;
    }
    e.s(["useId", () => l], 751937);
  },
  636202,
  (e) => {
    "use strict";
    function t(e = "mantine-") {
      return `${e}${Math.random().toString(36).slice(2, 11)}`;
    }
    e.s(["randomId", () => t]);
  },
  931141,
  (e) => {
    "use strict";
    var t = e.i(271645);
    let r = "undefined" != typeof document ? t.useLayoutEffect : t.useEffect;
    e.s(["useIsomorphicEffect", () => r]);
  },
  931316,
  (e) => {
    "use strict";
    var t = e.i(271645);
    function r(e, t) {
      if ("function" == typeof e) return e(t);
      "object" == typeof e && null !== e && "current" in e && (e.current = t);
    }
    function o(...e) {
      let t = new Map();
      return (o) => {
        if (
          (e.forEach((e) => {
            let n = r(e, o);
            n && t.set(e, n);
          }),
          t.size > 0)
        )
          return () => {
            e.forEach((e) => {
              let o = t.get(e);
              o ? o() : r(e, null);
            }),
              t.clear();
          };
      };
    }
    function n(...e) {
      return (0, t.useCallback)(o(...e), e);
    }
    e.s(["assignRef", () => r, "mergeRefs", () => o, "useMergedRef", () => n]);
  },
  343794,
  (e, t, r) => {
    !(function () {
      "use strict";
      var r = {}.hasOwnProperty;
      function o() {
        for (var e = "", t = 0; t < arguments.length; t++) {
          var l = arguments[t];
          l &&
            (e = n(
              e,
              (function (e) {
                if ("string" == typeof e || "number" == typeof e) return e;
                if ("object" != typeof e) return "";
                if (Array.isArray(e)) return o.apply(null, e);
                if (
                  e.toString !== Object.prototype.toString &&
                  !e.toString.toString().includes("[native code]")
                )
                  return e.toString();
                var t = "";
                for (var l in e) r.call(e, l) && e[l] && (t = n(t, l));
                return t;
              })(l)
            ));
        }
        return e;
      }
      function n(e, t) {
        return t ? (e ? e + " " + t : e + t) : e;
      }
      if (t.exports) (o.default = o), (t.exports = o);
      else if (
        "function" == typeof define &&
        "object" == typeof define.amd &&
        define.amd
      )
        void 0 !== o && e.v(o);
      else window.classNames = o;
    })();
  },
  598526,
  (e) => {
    "use strict";
    let t = { app: 100, modal: 200, popover: 300, overlay: 400, max: 9999 };
    function r(e) {
      return t[e];
    }
    e.s(["getDefaultZIndex", () => r]);
  },
  595556,
  (e) => {
    "use strict";
    var t = e.i(843476),
      r = e.i(271645);
    e.i(207670);
    var o = e.i(290098),
      n = e.i(321879),
      l = e.i(174080),
      i = e.i(931141),
      s = e.i(931316),
      a = e.i(789549);
    function u(e) {
      let t = document.createElement("div");
      return (
        t.setAttribute("data-portal", "true"),
        "string" == typeof e.className &&
          t.classList.add(...e.className.split(" ").filter(Boolean)),
        "object" == typeof e.style && Object.assign(t.style, e.style),
        "string" == typeof e.id && t.setAttribute("id", e.id),
        t
      );
    }
    let c = { reuseTargetNode: !0 },
      d = (0, n.factory)((e, o) => {
        let {
            children: n,
            target: d,
            reuseTargetNode: f,
            ...p
          } = (0, a.useProps)("Portal", c, e),
          [h, m] = (0, r.useState)(!1),
          v = (0, r.useRef)(null);
        return ((0, i.useIsomorphicEffect)(
          () => (
            m(!0),
            (v.current = (function ({ target: e, reuseTargetNode: t, ...r }) {
              if (e)
                return "string" == typeof e
                  ? document.querySelector(e) || u(r)
                  : e;
              if (t) {
                let e = document.querySelector(
                  "[data-mantine-shared-portal-node]"
                );
                if (e) return e;
                let t = u(r);
                return (
                  t.setAttribute("data-mantine-shared-portal-node", "true"),
                  document.body.appendChild(t),
                  t
                );
              }
              return u(r);
            })({ target: d, reuseTargetNode: f, ...p })),
            (0, s.assignRef)(o, v.current),
            d || f || !v.current || document.body.appendChild(v.current),
            () => {
              d || f || !v.current || document.body.removeChild(v.current);
            }
          ),
          [d]
        ),
        h && v.current)
          ? (0, l.createPortal)(
              (0, t.jsx)(t.Fragment, { children: n }),
              v.current
            )
          : null;
      });
    d.displayName = "@mantine/core/Portal";
    let f = (0, n.factory)(({ withinPortal: e = !0, children: r, ...n }, l) =>
      "test" !== (0, o.useMantineEnv)() && e
        ? (0, t.jsx)(d, { ref: l, ...n, children: r })
        : (0, t.jsx)(t.Fragment, { children: r })
    );
    (f.displayName = "@mantine/core/OptionalPortal"),
      e.s(["OptionalPortal", () => f], 595556);
  },
  795991,
  (e) => {
    "use strict";
    var t = e.i(271645);
    function r(e) {
      return (
        !Array.isArray(e) &&
        null !== e &&
        "object" == typeof e &&
        e.type !== t.Fragment
      );
    }
    e.s(["isElement", () => r]);
  },
]);
