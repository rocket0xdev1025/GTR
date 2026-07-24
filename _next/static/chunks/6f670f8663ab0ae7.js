(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  194390,
  194412,
  (e) => {
    "use strict";
    var t = e.i(843476),
      r = e.i(271645);
    let o = (0, r.createContext)(void 0);
    e.s(
      [
        "HyperliquidWsProvider",
        0,
        ({ children: e }) => {
          let i = (0, r.useRef)(null),
            n = (0, r.useRef)({}),
            s = (0, r.useRef)([]),
            a = (0, r.useRef)(Date.now()),
            l = (0, r.useRef)(null),
            [d, u] = (0, r.useState)(!1),
            c = (0, r.useCallback)((e) => {
              let t = JSON.stringify(e);
              s.current.some((e) => JSON.stringify(e) === t) ||
                s.current.push(e),
                i.current?.readyState === WebSocket.OPEN &&
                  i.current.send(
                    JSON.stringify({ method: "subscribe", subscription: e })
                  );
            }, []),
            p = (0, r.useCallback)((e) => {
              let t = JSON.stringify(e);
              (s.current = s.current.filter((e) => JSON.stringify(e) !== t)),
                i.current?.readyState === WebSocket.OPEN &&
                  i.current.send(
                    JSON.stringify({ method: "unsubscribe", subscription: e })
                  );
            }, []),
            f = (0, r.useCallback)((e, t) => {
              n.current[e] || (n.current[e] = []), n.current[e].push(t);
            }, []),
            v = (0, r.useCallback)((e, t) => {
              n.current[e] &&
                (n.current[e] = n.current[e].filter((e) => e !== t));
            }, []);
          (0, r.useEffect)(() => {
            let e,
              t = () => {
                let e = new WebSocket("wss://api.hyperliquid.xyz/ws?");
                (i.current = e),
                  (e.onopen = () => {
                    u(!0),
                      (a.current = Date.now()),
                      r(),
                      i.current?.readyState === WebSocket.OPEN &&
                        s.current.length > 0 &&
                        s.current.forEach((e) => {
                          i.current.send(
                            JSON.stringify({
                              method: "subscribe",
                              subscription: e,
                            })
                          );
                        });
                  }),
                  (e.onclose = () => {
                    u(!1);
                  }),
                  (e.onmessage = (e) => {
                    let { channel: t, data: r } = JSON.parse(e.data);
                    (a.current = Date.now()),
                      n.current[t] && n.current[t].forEach((e) => e(r));
                  });
              };
            t();
            let r = () => {
              l.current && clearInterval(l.current),
                (l.current = setInterval(() => {
                  Date.now() - a.current > 6e4 &&
                    i.current?.readyState === WebSocket.OPEN &&
                    (i.current.close(), t());
                }, 3e4));
            };
            return () => {
              l.current && clearInterval(l.current), e?.close();
            };
          }, []);
          let m = (0, r.useMemo)(
            () => ({
              isConnected: d,
              subscribe: c,
              unsubscribe: p,
              messageEvent: f,
              removeListener: v,
            }),
            [d, c, p, f, v]
          );
          return (0, t.jsx)(o.Provider, { value: m, children: e });
        },
        "WsContext",
        0,
        o,
      ],
      194412
    ),
      e.s(
        [
          "useHyperliquidWebSocket",
          0,
          () => {
            let e = (0, r.useContext)(o);
            if (!e)
              throw Error(
                "useHyperliquidWebSocket must be used inside HyperliquidWsProvider"
              );
            return e;
          },
        ],
        194390
      );
  },
  648322,
  665739,
  (e) => {
    "use strict";
    var t = e.i(271645);
    let r = ["mousedown", "touchstart"];
    function o(e, o, i) {
      let n = (0, t.useRef)(null);
      return (
        (0, t.useEffect)(() => {
          let t = (t) => {
            let { target: r } = t ?? {};
            if (Array.isArray(i)) {
              let o =
                r?.hasAttribute("data-ignore-outside-clicks") ||
                (!document.body.contains(r) && "HTML" !== r.tagName);
              i.every((e) => !!e && !t.composedPath().includes(e)) && !o && e();
            } else n.current && !n.current.contains(r) && e();
          };
          return (
            (o || r).forEach((e) => document.addEventListener(e, t)),
            () => {
              (o || r).forEach((e) => document.removeEventListener(e, t));
            }
          );
        }, [n, e, i]),
        n
      );
    }
    e.s(["useClickOutside", () => o], 648322);
    var i = e.i(384660);
    e.i(843476), e.i(207670);
    let [n, s] = (0, i.createSafeContext)(
      "Popover component was not found in the tree"
    );
    e.s(
      ["PopoverContextProvider", () => n, "usePopoverContext", () => s],
      665739
    );
  },
  144762,
  (e) => {
    "use strict";
    let t = () => {};
    e.s(["noop", () => t]);
  },
  857142,
  (e) => {
    "use strict";
    var t = e.i(843476),
      r = e.i(271645),
      o = e.i(751937),
      i = e.i(648322),
      n = e.i(598526),
      s = e.i(424848),
      a = e.i(143798),
      l = e.i(207670),
      d = e.i(908954),
      u = e.i(314037),
      c = e.i(290098),
      p = e.i(789549),
      f = e.i(917303),
      v = e.i(268598),
      m = e.i(513029),
      g = e.i(595556),
      h = e.i(298193),
      y = e.i(665739),
      w = e.i(329969),
      x = e.i(931316),
      b = e.i(682451),
      C = e.i(144762),
      S = e.i(644662),
      P = e.i(321879),
      R = e.i(368637),
      z = e.i(587611),
      I = {
        dropdown: "m_38a85659",
        arrow: "m_a31dc6c1",
        overlay: "m_3d7bc908",
      };
    let j = (0, P.factory)((e, r) => {
      let o = (0, p.useProps)("PopoverDropdown", null, e),
        {
          className: i,
          style: n,
          vars: s,
          children: a,
          onKeyDownCapture: l,
          variant: d,
          classNames: u,
          styles: c,
          ...f
        } = o,
        v = (0, y.usePopoverContext)(),
        m = (0, w.useFocusReturn)({
          opened: v.opened,
          shouldReturnFocus: v.returnFocus,
        }),
        P = v.withRoles
          ? {
              "aria-labelledby": v.getTargetId(),
              id: v.getDropdownId(),
              role: "dialog",
              tabIndex: -1,
            }
          : {},
        I = (0, x.useMergedRef)(r, v.floating);
      return v.disabled
        ? null
        : (0, t.jsx)(g.OptionalPortal, {
            ...v.portalProps,
            withinPortal: v.withinPortal,
            children: (0, t.jsx)(h.Transition, {
              mounted: v.opened,
              ...v.transitionProps,
              transition: v.transitionProps?.transition || "fade",
              duration: v.transitionProps?.duration ?? 150,
              keepMounted: v.keepMounted,
              exitDuration:
                "number" == typeof v.transitionProps?.exitDuration
                  ? v.transitionProps.exitDuration
                  : v.transitionProps?.duration,
              children: (e) =>
                (0, t.jsx)(z.FocusTrap, {
                  active: v.trapFocus && v.opened,
                  innerRef: I,
                  children: (0, t.jsxs)(S.Box, {
                    ...P,
                    ...f,
                    variant: d,
                    onKeyDownCapture: (function (e, t = { active: !0 }) {
                      return "function" == typeof e && t.active
                        ? (r) => {
                            "Escape" === r.key && (e(r), t.onTrigger?.());
                          }
                        : t.onKeyDown || C.noop;
                    })(
                      () => {
                        v.onClose?.(), v.onDismiss?.();
                      },
                      { active: v.closeOnEscape, onTrigger: m, onKeyDown: l }
                    ),
                    "data-position": v.placement,
                    "data-fixed": "fixed" === v.floatingStrategy || void 0,
                    ...v.getStyles("dropdown", {
                      className: i,
                      props: o,
                      classNames: u,
                      styles: c,
                      style: [
                        {
                          ...e,
                          zIndex: v.zIndex,
                          top: v.y ?? 0,
                          left: v.x ?? 0,
                          width:
                            "target" === v.width ? void 0 : (0, b.rem)(v.width),
                          ...(v.referenceHidden ? { display: "none" } : null),
                        },
                        v.resolvedStyles.dropdown,
                        c?.dropdown,
                        n,
                      ],
                    }),
                    children: [
                      a,
                      (0, t.jsx)(R.FloatingArrow, {
                        ref: v.arrowRef,
                        arrowX: v.arrowX,
                        arrowY: v.arrowY,
                        visible: v.withArrow,
                        position: v.placement,
                        arrowSize: v.arrowSize,
                        arrowRadius: v.arrowRadius,
                        arrowOffset: v.arrowOffset,
                        arrowPosition: v.arrowPosition,
                        ...v.getStyles("arrow", {
                          props: o,
                          classNames: u,
                          styles: c,
                        }),
                      }),
                    ],
                  }),
                }),
            }),
          });
    });
    (j.classes = I), (j.displayName = "@mantine/core/PopoverDropdown");
    var E = e.i(795991),
      N = e.i(532503);
    let O = { refProp: "ref", popupType: "dialog" },
      D = (0, P.factory)((e, t) => {
        let {
          children: o,
          refProp: i,
          popupType: n,
          ...s
        } = (0, p.useProps)("PopoverTarget", O, e);
        if (!(0, E.isElement)(o))
          throw Error(
            "Popover.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
          );
        let a = (0, y.usePopoverContext)(),
          d = (0, x.useMergedRef)(a.reference, (0, N.getRefProp)(o), t),
          u = a.withRoles
            ? {
                "aria-haspopup": n,
                "aria-expanded": a.opened,
                "aria-controls": a.getDropdownId(),
                id: a.getTargetId(),
              }
            : {};
        return (0, r.cloneElement)(o, {
          ...s,
          ...u,
          ...a.targetProps,
          className: (0, l.default)(
            a.targetProps.className,
            s.className,
            o.props.className
          ),
          [i]: d,
          ...(!a.controlled
            ? {
                onClick: () => {
                  a.onToggle(), o.props.onClick?.();
                },
              }
            : null),
        });
      });
    D.displayName = "@mantine/core/PopoverTarget";
    var k = e.i(171189),
      B = e.i(953760),
      T = e.i(258950),
      W = e.i(446614),
      F = e.i(145500);
    let _ = {
        position: "bottom",
        offset: 8,
        positionDependencies: [],
        transitionProps: { transition: "fade", duration: 150 },
        middlewares: { flip: !0, shift: !0, inline: !1 },
        arrowSize: 7,
        arrowOffset: 5,
        arrowRadius: 0,
        arrowPosition: "side",
        closeOnClickOutside: !0,
        withinPortal: !0,
        closeOnEscape: !0,
        trapFocus: !1,
        withRoles: !0,
        returnFocus: !1,
        withOverlay: !1,
        hideDetached: !0,
        clickOutsideEvents: ["mousedown", "touchstart"],
        zIndex: (0, n.getDefaultZIndex)("popover"),
        __staticSelector: "Popover",
        width: "max-content",
      },
      M = (0, a.createVarsResolver)((e, { radius: t, shadow: r }) => ({
        dropdown: {
          "--popover-radius": void 0 === t ? void 0 : (0, s.getRadius)(t),
          "--popover-shadow": (0, s.getShadow)(r),
        },
      }));
    function A(e) {
      let n = (0, p.useProps)("Popover", _, e),
        {
          children: s,
          position: a,
          offset: l,
          onPositionChange: w,
          positionDependencies: x,
          opened: b,
          transitionProps: C,
          onExitTransitionEnd: S,
          onEnterTransitionEnd: P,
          width: R,
          middlewares: z,
          withArrow: j,
          arrowSize: E,
          arrowOffset: N,
          arrowRadius: O,
          arrowPosition: D,
          unstyled: A,
          classNames: $,
          styles: V,
          closeOnClickOutside: L,
          withinPortal: U,
          portalProps: H,
          closeOnEscape: q,
          clickOutsideEvents: J,
          trapFocus: Z,
          onClose: G,
          onDismiss: K,
          onOpen: X,
          onChange: Y,
          zIndex: Q,
          radius: ee,
          shadow: et,
          id: er,
          defaultOpened: eo,
          __staticSelector: ei,
          withRoles: en,
          disabled: es,
          returnFocus: ea,
          variant: el,
          keepMounted: ed,
          vars: eu,
          floatingStrategy: ec,
          withOverlay: ep,
          overlayProps: ef,
          hideDetached: ev,
          attributes: em,
          preventPositionChangeWhenVisible: eg,
          ...eh
        } = n,
        ey = (0, u.useStyles)({
          name: ei,
          props: n,
          classes: I,
          classNames: $,
          styles: V,
          unstyled: A,
          attributes: em,
          rootSelector: "dropdown",
          vars: eu,
          varsResolver: M,
        }),
        { resolvedStyles: ew } = (0, d.useResolvedStylesApi)({
          classNames: $,
          styles: V,
          props: n,
        }),
        [ex, eb] = (0, r.useState)(b ?? eo ?? !1),
        eC = (0, r.useRef)(a),
        eS = (0, r.useRef)(null),
        [eP, eR] = (0, r.useState)(null),
        [ez, eI] = (0, r.useState)(null),
        { dir: ej } = (0, f.useDirection)(),
        eE = (0, c.useMantineEnv)(),
        eN = (0, o.useId)(er),
        eO = (function (e) {
          var t;
          let o,
            i,
            n = (0, c.useMantineEnv)(),
            [s, a] = (0, W.useUncontrolled)({
              value: e.opened,
              defaultValue: e.defaultOpened,
              finalValue: !1,
              onChange: e.onChange,
            }),
            l = (0, r.useRef)(s),
            d = (0, k.useFloating)({
              strategy: e.strategy,
              placement: e.preventPositionChangeWhenVisible
                ? e.positionRef.current
                : e.position,
              middleware:
                ((t = () => d),
                (o = (function (e) {
                  if (void 0 === e) return { shift: !0, flip: !0 };
                  let t = { ...e };
                  return (
                    void 0 === e.shift && (t.shift = !0),
                    void 0 === e.flip && (t.flip = !0),
                    t
                  );
                })(e.middlewares)),
                (i = [(0, T.offset)(e.offset), (0, T.hide)()]),
                e.dropdownVisible &&
                  "test" !== n &&
                  e.preventPositionChangeWhenVisible &&
                  (o.flip = !1),
                o.shift &&
                  i.push(
                    (0, T.shift)(
                      "boolean" == typeof o.shift
                        ? { limiter: (0, T.limitShift)(), padding: 5 }
                        : {
                            limiter: (0, T.limitShift)(),
                            padding: 5,
                            ...o.shift,
                          }
                    )
                  ),
                o.flip &&
                  i.push(
                    "boolean" == typeof o.flip
                      ? (0, T.flip)()
                      : (0, T.flip)(o.flip)
                  ),
                o.inline &&
                  i.push(
                    "boolean" == typeof o.inline
                      ? (0, T.inline)()
                      : (0, T.inline)(o.inline)
                  ),
                i.push(
                  (0, T.arrow)({ element: e.arrowRef, padding: e.arrowOffset })
                ),
                (o.size || "target" === e.width) &&
                  i.push(
                    (0, T.size)({
                      ...("boolean" == typeof o.size ? {} : o.size),
                      apply({
                        rects: r,
                        availableWidth: i,
                        availableHeight: n,
                        ...s
                      }) {
                        let a = t(),
                          l = a.refs.floating.current?.style ?? {};
                        o.size &&
                          ("object" == typeof o.size && o.size.apply
                            ? o.size.apply({
                                rects: r,
                                availableWidth: i,
                                availableHeight: n,
                                ...s,
                              })
                            : Object.assign(l, {
                                maxWidth: `${i}px`,
                                maxHeight: `${n}px`,
                              })),
                          "target" === e.width &&
                            Object.assign(l, {
                              width: `${r.reference.width}px`,
                            });
                      },
                    })
                  ),
                i),
              whileElementsMounted: e.keepMounted ? void 0 : B.autoUpdate,
            });
          return (
            (0, r.useEffect)(() => {
              if (d.refs.reference.current && d.refs.floating.current && s)
                return (0, B.autoUpdate)(
                  d.refs.reference.current,
                  d.refs.floating.current,
                  d.update
                );
            }, [s, d.update]),
            (0, F.useDidUpdate)(() => {
              e.onPositionChange?.(d.placement),
                (e.positionRef.current = d.placement);
            }, [d.placement, e.preventPositionChangeWhenVisible]),
            (0, F.useDidUpdate)(() => {
              s !== l.current && (s ? e.onOpen?.() : e.onClose?.()),
                (l.current = s);
            }, [s, e.onClose, e.onOpen]),
            (0, F.useDidUpdate)(() => {
              let t = -1;
              return (
                s && (t = window.setTimeout(() => e.setDropdownVisible(!0), 4)),
                () => {
                  window.clearTimeout(t);
                }
              );
            }, [s, e.position]),
            {
              floating: d,
              controlled: "boolean" == typeof e.opened,
              opened: s,
              onClose: () => {
                s && !e.disabled && a(!1);
              },
              onToggle: () => {
                e.disabled || a(!s);
              },
            }
          );
        })({
          middlewares: z,
          width: R,
          position: (0, v.getFloatingPosition)(ej, a),
          offset: "number" == typeof l ? l + (j ? E / 2 : 0) : l,
          arrowRef: eS,
          arrowOffset: N,
          onPositionChange: w,
          positionDependencies: x,
          opened: b,
          defaultOpened: eo,
          onChange: Y,
          onOpen: X,
          onClose: G,
          onDismiss: K,
          strategy: ec,
          dropdownVisible: ex,
          setDropdownVisible: eb,
          positionRef: eC,
          disabled: es,
          preventPositionChangeWhenVisible: eg,
          keepMounted: ed,
        });
      (0, i.useClickOutside)(
        () => {
          L && (eO.onClose(), K?.());
        },
        J,
        [eP, ez]
      );
      let eD = (0, r.useCallback)(
          (e) => {
            eR(e), eO.floating.refs.setReference(e);
          },
          [eO.floating.refs.setReference]
        ),
        ek = (0, r.useCallback)(
          (e) => {
            eI(e), eO.floating.refs.setFloating(e);
          },
          [eO.floating.refs.setFloating]
        ),
        eB = (0, r.useCallback)(() => {
          C?.onExited?.(), S?.(), eb(!1), eg || (eC.current = a);
        }, [C?.onExited, S, eg, a]),
        eT = (0, r.useCallback)(() => {
          C?.onEntered?.(), P?.();
        }, [C?.onEntered, P]);
      return (0, t.jsxs)(y.PopoverContextProvider, {
        value: {
          returnFocus: ea,
          disabled: es,
          controlled: eO.controlled,
          reference: eD,
          floating: ek,
          x: eO.floating.x,
          y: eO.floating.y,
          arrowX: eO.floating?.middlewareData?.arrow?.x,
          arrowY: eO.floating?.middlewareData?.arrow?.y,
          opened: eO.opened,
          arrowRef: eS,
          transitionProps: { ...C, onExited: eB, onEntered: eT },
          width: R,
          withArrow: j,
          arrowSize: E,
          arrowOffset: N,
          arrowRadius: O,
          arrowPosition: D,
          placement: eO.floating.placement,
          trapFocus: Z,
          withinPortal: U,
          portalProps: H,
          zIndex: Q,
          radius: ee,
          shadow: et,
          closeOnEscape: q,
          onDismiss: K,
          onClose: eO.onClose,
          onToggle: eO.onToggle,
          getTargetId: () => `${eN}-target`,
          getDropdownId: () => `${eN}-dropdown`,
          withRoles: en,
          targetProps: eh,
          __staticSelector: ei,
          classNames: $,
          styles: V,
          unstyled: A,
          variant: el,
          keepMounted: ed,
          getStyles: ey,
          resolvedStyles: ew,
          floatingStrategy: ec,
          referenceHidden:
            !!ev &&
            "test" !== eE &&
            eO.floating.middlewareData.hide?.referenceHidden,
        },
        children: [
          s,
          ep &&
            (0, t.jsx)(h.Transition, {
              transition: "fade",
              mounted: eO.opened,
              duration: C?.duration || 250,
              exitDuration: C?.exitDuration || 250,
              children: (e) =>
                (0, t.jsx)(g.OptionalPortal, {
                  withinPortal: U,
                  children: (0, t.jsx)(m.Overlay, {
                    ...ef,
                    ...ey("overlay", {
                      className: ef?.className,
                      style: [e, ef?.style],
                    }),
                  }),
                }),
            }),
        ],
      });
    }
    (A.Target = D),
      (A.Dropdown = j),
      (A.displayName = "@mantine/core/Popover"),
      (A.extend = (e) => e),
      e.s(["Popover", () => A], 857142);
  },
  27556,
  (e) => {
    "use strict";
    var t = e.i(843476),
      r = e.i(682451),
      o = e.i(271645),
      i = e.i(424848),
      n = e.i(143798);
    e.i(207670);
    var s = e.i(789549),
      a = e.i(314037),
      l = e.i(257942),
      d = e.i(825436);
    let u = (0, o.forwardRef)(
      ({ size: e = "var(--cb-icon-size, 70%)", style: r, ...o }, i) =>
        (0, t.jsx)("svg", {
          viewBox: "0 0 15 15",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          style: { ...r, width: e, height: e },
          ref: i,
          ...o,
          children: (0, t.jsx)("path", {
            d: "M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",
            fill: "currentColor",
            fillRule: "evenodd",
            clipRule: "evenodd",
          }),
        })
    );
    u.displayName = "@mantine/core/CloseIcon";
    var c = { root: "m_86a44da5", "root--subtle": "m_220c80f2" };
    let p = { variant: "subtle" },
      f = (0, n.createVarsResolver)(
        (e, { size: t, radius: o, iconSize: n }) => ({
          root: {
            "--cb-size": (0, i.getSize)(t, "cb-size"),
            "--cb-radius": void 0 === o ? void 0 : (0, i.getRadius)(o),
            "--cb-icon-size": (0, r.rem)(n),
          },
        })
      ),
      v = (0, l.polymorphicFactory)((e, r) => {
        let o = (0, s.useProps)("CloseButton", p, e),
          {
            iconSize: i,
            children: n,
            vars: l,
            radius: v,
            className: m,
            classNames: g,
            style: h,
            styles: y,
            unstyled: w,
            "data-disabled": x,
            disabled: b,
            variant: C,
            icon: S,
            mod: P,
            attributes: R,
            __staticSelector: z,
            ...I
          } = o,
          j = (0, a.useStyles)({
            name: z || "CloseButton",
            props: o,
            className: m,
            style: h,
            classes: c,
            classNames: g,
            styles: y,
            unstyled: w,
            attributes: R,
            vars: l,
            varsResolver: f,
          });
        return (0, t.jsxs)(d.UnstyledButton, {
          ref: r,
          ...I,
          unstyled: w,
          variant: C,
          disabled: b,
          mod: [{ disabled: b || x }, P],
          ...j("root", { variant: C, active: !b && !x }),
          children: [S || (0, t.jsx)(u, {}), n],
        });
      });
    (v.classes = c),
      (v.displayName = "@mantine/core/CloseButton"),
      e.s(["CloseButton", () => v], 27556);
  },
  592499,
  (e) => {
    "use strict";
    var t = e.i(843476),
      r = e.i(271645);
    function o(e = null) {
      let i = (0, r.createContext)(e);
      return [
        ({ children: e, value: r }) =>
          (0, t.jsx)(i.Provider, { value: r, children: e }),
        () => (0, r.useContext)(i),
      ];
    }
    e.s(["createOptionalContext", () => o]);
  },
  908954,
  (e) => {
    "use strict";
    e.i(271645), e.i(843476);
    var t = e.i(522442),
      r = e.i(718356),
      o = e.i(515400);
    function i({ classNames: e, styles: i, props: n, stylesCtx: s }) {
      let a = (0, t.useMantineTheme)();
      return {
        resolvedClassNames: (0, r.resolveClassNames)({
          theme: a,
          classNames: e,
          props: n,
          stylesCtx: s || void 0,
        }),
        resolvedStyles: (0, o.resolveStyles)({
          theme: a,
          styles: i,
          props: n,
          stylesCtx: s || void 0,
        }),
      };
    }
    e.s(["useResolvedStylesApi", () => i]);
  },
  22084,
  698874,
  (e) => {
    "use strict";
    var t = e.i(843476),
      r = e.i(682451),
      o = e.i(271645),
      i = e.i(424848),
      n = e.i(143798);
    e.i(207670);
    var s = e.i(789549),
      a = e.i(314037),
      l = e.i(919254),
      d = e.i(644662),
      u = e.i(257942),
      c = e.i(592499);
    let [p, f] = (0, c.createOptionalContext)({ size: "sm" });
    var v = e.i(908954),
      m = e.i(321879),
      g = e.i(27556);
    let h = (0, m.factory)((e, r) => {
      let o = (0, s.useProps)("InputClearButton", null, e),
        { size: i, variant: n, vars: a, classNames: l, styles: d, ...u } = o,
        c = f(),
        { resolvedClassNames: p, resolvedStyles: m } = (0,
        v.useResolvedStylesApi)({ classNames: l, styles: d, props: o });
      return (0, t.jsx)(g.CloseButton, {
        variant: n || "transparent",
        ref: r,
        size: i || c?.size || "sm",
        classNames: p,
        styles: m,
        __staticSelector: "InputClearButton",
        style: {
          pointerEvents: "all",
          background: "var(--input-bg)",
          ...u.style,
        },
        ...u,
      });
    });
    h.displayName = "@mantine/core/InputClearButton";
    let y = { xs: 7, sm: 8, md: 10, lg: 12, xl: 15 },
      [w, x] = (0, c.createOptionalContext)({
        offsetBottom: !1,
        offsetTop: !1,
        describedBy: void 0,
        getStyles: null,
        inputId: void 0,
        labelId: void 0,
      });
    e.s(
      ["InputWrapperProvider", () => w, "useInputWrapperContext", () => x],
      698874
    );
    var b = {
      wrapper: "m_6c018570",
      input: "m_8fb7ebe7",
      section: "m_82577fc2",
      placeholder: "m_88bacfd0",
      root: "m_46b77525",
      label: "m_8fdc1311",
      required: "m_78a94662",
      error: "m_8f816625",
      description: "m_fe47ce59",
    };
    let C = (0, n.createVarsResolver)((e, { size: t }) => ({
        description: {
          "--input-description-size":
            void 0 === t
              ? void 0
              : `calc(${(0, i.getFontSize)(t)} - ${(0, r.rem)(2)})`,
        },
      })),
      S = (0, m.factory)((e, r) => {
        let o = (0, s.useProps)("InputDescription", null, e),
          {
            classNames: i,
            className: n,
            style: l,
            styles: u,
            unstyled: c,
            vars: p,
            size: f,
            __staticSelector: v,
            __inheritStyles: m = !0,
            attributes: g,
            variant: h,
            ...y
          } = (0, s.useProps)("InputDescription", null, o),
          w = x(),
          S = (0, a.useStyles)({
            name: ["InputWrapper", v],
            props: o,
            classes: b,
            className: n,
            style: l,
            classNames: i,
            styles: u,
            unstyled: c,
            attributes: g,
            rootSelector: "description",
            vars: p,
            varsResolver: C,
          }),
          P = (m && w?.getStyles) || S;
        return (0, t.jsx)(d.Box, {
          component: "p",
          ref: r,
          variant: h,
          size: f,
          ...P(
            "description",
            w?.getStyles ? { className: n, style: l } : void 0
          ),
          ...y,
        });
      });
    (S.classes = b), (S.displayName = "@mantine/core/InputDescription");
    let P = (0, n.createVarsResolver)((e, { size: t }) => ({
        error: {
          "--input-error-size":
            void 0 === t
              ? void 0
              : `calc(${(0, i.getFontSize)(t)} - ${(0, r.rem)(2)})`,
        },
      })),
      R = (0, m.factory)((e, r) => {
        let o = (0, s.useProps)("InputError", null, e),
          {
            classNames: i,
            className: n,
            style: l,
            styles: u,
            unstyled: c,
            vars: p,
            size: f,
            attributes: v,
            __staticSelector: m,
            __inheritStyles: g = !0,
            variant: h,
            ...y
          } = o,
          w = (0, a.useStyles)({
            name: ["InputWrapper", m],
            props: o,
            classes: b,
            className: n,
            style: l,
            classNames: i,
            styles: u,
            unstyled: c,
            attributes: v,
            rootSelector: "error",
            vars: p,
            varsResolver: P,
          }),
          C = x(),
          S = (g && C?.getStyles) || w;
        return (0, t.jsx)(d.Box, {
          component: "p",
          ref: r,
          variant: h,
          size: f,
          ...S("error", C?.getStyles ? { className: n, style: l } : void 0),
          ...y,
        });
      });
    (R.classes = b), (R.displayName = "@mantine/core/InputError");
    let z = { labelElement: "label" },
      I = (0, n.createVarsResolver)((e, { size: t }) => ({
        label: {
          "--input-label-size": (0, i.getFontSize)(t),
          "--input-asterisk-color": void 0,
        },
      })),
      j = (0, m.factory)((e, r) => {
        let o = (0, s.useProps)("InputLabel", z, e),
          {
            classNames: i,
            className: n,
            style: l,
            styles: u,
            unstyled: c,
            vars: p,
            labelElement: f,
            size: v,
            required: m,
            htmlFor: g,
            onMouseDown: h,
            children: y,
            __staticSelector: w,
            variant: C,
            mod: S,
            attributes: P,
            ...R
          } = (0, s.useProps)("InputLabel", z, o),
          j = (0, a.useStyles)({
            name: ["InputWrapper", w],
            props: o,
            classes: b,
            className: n,
            style: l,
            classNames: i,
            styles: u,
            unstyled: c,
            attributes: P,
            rootSelector: "label",
            vars: p,
            varsResolver: I,
          }),
          E = x(),
          N = E?.getStyles || j;
        return (0, t.jsxs)(d.Box, {
          ...N("label", E?.getStyles ? { className: n, style: l } : void 0),
          component: f,
          variant: C,
          size: v,
          ref: r,
          htmlFor: "label" === f ? g : void 0,
          mod: [{ required: m }, S],
          onMouseDown: (e) => {
            h?.(e), !e.defaultPrevented && e.detail > 1 && e.preventDefault();
          },
          ...R,
          children: [
            y,
            m &&
              (0, t.jsx)("span", {
                ...N("required"),
                "aria-hidden": !0,
                children: " *",
              }),
          ],
        });
      });
    (j.classes = b), (j.displayName = "@mantine/core/InputLabel");
    let E = (0, m.factory)((e, r) => {
      let o = (0, s.useProps)("InputPlaceholder", null, e),
        {
          classNames: i,
          className: n,
          style: l,
          styles: u,
          unstyled: c,
          vars: p,
          __staticSelector: f,
          variant: v,
          error: m,
          mod: g,
          attributes: h,
          ...y
        } = o,
        w = (0, a.useStyles)({
          name: ["InputPlaceholder", f],
          props: o,
          classes: b,
          className: n,
          style: l,
          classNames: i,
          styles: u,
          unstyled: c,
          attributes: h,
          rootSelector: "placeholder",
        });
      return (0, t.jsx)(d.Box, {
        ...w("placeholder"),
        mod: [{ error: !!m }, g],
        component: "span",
        variant: v,
        ref: r,
        ...y,
      });
    });
    (E.classes = b), (E.displayName = "@mantine/core/InputPlaceholder");
    var N = e.i(751937);
    let O = {
        labelElement: "label",
        inputContainer: (e) => e,
        inputWrapperOrder: ["label", "description", "input", "error"],
      },
      D = (0, n.createVarsResolver)((e, { size: t }) => ({
        label: {
          "--input-label-size": (0, i.getFontSize)(t),
          "--input-asterisk-color": void 0,
        },
        error: {
          "--input-error-size":
            void 0 === t
              ? void 0
              : `calc(${(0, i.getFontSize)(t)} - ${(0, r.rem)(2)})`,
        },
        description: {
          "--input-description-size":
            void 0 === t
              ? void 0
              : `calc(${(0, i.getFontSize)(t)} - ${(0, r.rem)(2)})`,
        },
      })),
      k = (0, m.factory)((e, r) => {
        let i = (0, s.useProps)("InputWrapper", O, e),
          {
            classNames: n,
            className: l,
            style: u,
            styles: c,
            unstyled: p,
            vars: f,
            size: v,
            variant: m,
            __staticSelector: g,
            inputContainer: h,
            inputWrapperOrder: y,
            label: x,
            error: C,
            description: P,
            labelProps: z,
            descriptionProps: I,
            errorProps: E,
            labelElement: k,
            children: B,
            withAsterisk: T,
            id: W,
            required: F,
            __stylesApiProps: _,
            mod: M,
            attributes: A,
            ...$
          } = i,
          V = (0, a.useStyles)({
            name: ["InputWrapper", g],
            props: _ || i,
            classes: b,
            className: l,
            style: u,
            classNames: n,
            styles: c,
            unstyled: p,
            attributes: A,
            vars: f,
            varsResolver: D,
          }),
          L = { size: v, variant: m, __staticSelector: g },
          U = (0, N.useId)(W),
          H = E?.id || `${U}-error`,
          q = I?.id || `${U}-description`,
          J = !!C && "boolean" != typeof C,
          Z = !!P,
          G = `${J ? H : ""} ${Z ? q : ""}`,
          K = G.trim().length > 0 ? G.trim() : void 0,
          X = z?.id || `${U}-label`,
          Y =
            x &&
            (0, t.jsx)(
              j,
              {
                labelElement: k,
                id: X,
                htmlFor: U,
                required: "boolean" == typeof T ? T : F,
                ...L,
                ...z,
                children: x,
              },
              "label"
            ),
          Q =
            Z &&
            (0, t.jsx)(
              S,
              {
                ...I,
                ...L,
                size: I?.size || L.size,
                id: I?.id || q,
                children: P,
              },
              "description"
            ),
          ee = (0, t.jsx)(o.Fragment, { children: h(B) }, "input"),
          et =
            J &&
            (0, o.createElement)(
              R,
              {
                ...E,
                ...L,
                size: E?.size || L.size,
                key: "error",
                id: E?.id || H,
              },
              C
            ),
          er = y.map((e) => {
            switch (e) {
              case "label":
                return Y;
              case "input":
                return ee;
              case "description":
                return Q;
              case "error":
                return et;
              default:
                return null;
            }
          });
        return (0, t.jsx)(w, {
          value: {
            getStyles: V,
            describedBy: K,
            inputId: U,
            labelId: X,
            ...(function (e, { hasDescription: t, hasError: r }) {
              let o = e.findIndex((e) => "input" === e),
                i = e.slice(0, o),
                n = e.slice(o + 1),
                s =
                  (t && i.includes("description")) ||
                  (r && i.includes("error"));
              return {
                offsetBottom:
                  (t && n.includes("description")) ||
                  (r && n.includes("error")),
                offsetTop: s,
              };
            })(y, { hasDescription: Z, hasError: J }),
          },
          children: (0, t.jsx)(d.Box, {
            ref: r,
            variant: m,
            size: v,
            mod: [{ error: !!C }, M],
            ...V("root"),
            ...$,
            children: er,
          }),
        });
      });
    (k.classes = b), (k.displayName = "@mantine/core/InputWrapper");
    let B = {
        variant: "default",
        leftSectionPointerEvents: "none",
        rightSectionPointerEvents: "none",
        withAria: !0,
        withErrorStyles: !0,
        size: "sm",
      },
      T = (0, n.createVarsResolver)((e, t, o) => ({
        wrapper: {
          "--input-margin-top": o.offsetTop
            ? "calc(var(--mantine-spacing-xs) / 2)"
            : void 0,
          "--input-margin-bottom": o.offsetBottom
            ? "calc(var(--mantine-spacing-xs) / 2)"
            : void 0,
          "--input-height": (0, i.getSize)(t.size, "input-height"),
          "--input-fz": (0, i.getFontSize)(t.size),
          "--input-radius":
            void 0 === t.radius ? void 0 : (0, i.getRadius)(t.radius),
          "--input-left-section-width":
            void 0 !== t.leftSectionWidth
              ? (0, r.rem)(t.leftSectionWidth)
              : void 0,
          "--input-right-section-width":
            void 0 !== t.rightSectionWidth
              ? (0, r.rem)(t.rightSectionWidth)
              : void 0,
          "--input-padding-y": t.multiline
            ? (0, i.getSize)(t.size, "input-padding-y")
            : void 0,
          "--input-left-section-pointer-events": t.leftSectionPointerEvents,
          "--input-right-section-pointer-events": t.rightSectionPointerEvents,
        },
      })),
      W = (0, u.polymorphicFactory)((e, r) => {
        let o = (0, s.useProps)("Input", B, e),
          {
            classNames: i,
            className: n,
            style: u,
            styles: c,
            unstyled: f,
            required: v,
            __staticSelector: m,
            __stylesApiProps: g,
            size: h,
            wrapperProps: w,
            error: C,
            disabled: S,
            leftSection: P,
            leftSectionProps: R,
            leftSectionWidth: z,
            rightSection: I,
            rightSectionProps: j,
            rightSectionWidth: E,
            rightSectionPointerEvents: N,
            leftSectionPointerEvents: O,
            variant: D,
            vars: k,
            pointer: W,
            multiline: F,
            radius: _,
            id: M,
            withAria: A,
            withErrorStyles: $,
            mod: V,
            inputSize: L,
            attributes: U,
            __clearSection: H,
            __clearable: q,
            __defaultRightSection: J,
            ...Z
          } = o,
          { styleProps: G, rest: K } = (0, l.extractStyleProps)(Z),
          X = x(),
          Y = { offsetBottom: X?.offsetBottom, offsetTop: X?.offsetTop },
          Q = (0, a.useStyles)({
            name: ["Input", m],
            props: g || o,
            classes: b,
            className: n,
            style: u,
            classNames: i,
            styles: c,
            unstyled: f,
            attributes: U,
            stylesCtx: Y,
            rootSelector: "wrapper",
            vars: k,
            varsResolver: T,
          }),
          ee = A
            ? {
                required: v,
                disabled: S,
                "aria-invalid": !!C,
                "aria-describedby": X?.describedBy,
                id: X?.inputId || M,
              }
            : {},
          et = (function ({
            __clearable: e,
            __clearSection: r,
            rightSection: o,
            __defaultRightSection: i,
            size: n = "sm",
          }) {
            let s = e && r;
            return s && (o || i)
              ? (0, t.jsxs)("div", {
                  "data-combined-clear-section": !0,
                  style: {
                    display: "flex",
                    gap: 2,
                    alignItems: "center",
                    paddingInlineEnd: y[n],
                  },
                  children: [s, o || i],
                })
              : null === o
              ? null
              : o || s || i;
          })({
            __clearable: q,
            __clearSection: H,
            rightSection: I,
            __defaultRightSection: J,
            size: h,
          });
        return (0, t.jsx)(p, {
          value: { size: h || "sm" },
          children: (0, t.jsxs)(d.Box, {
            ...Q("wrapper"),
            ...G,
            ...w,
            mod: [
              {
                error: !!C && $,
                pointer: W,
                disabled: S,
                multiline: F,
                "data-with-right-section": !!et,
                "data-with-left-section": !!P,
              },
              V,
            ],
            variant: D,
            size: h,
            children: [
              P &&
                (0, t.jsx)("div", {
                  ...R,
                  "data-position": "left",
                  ...Q("section", { className: R?.className, style: R?.style }),
                  children: P,
                }),
              (0, t.jsx)(d.Box, {
                component: "input",
                ...K,
                ...ee,
                ref: r,
                required: v,
                mod: { disabled: S, error: !!C && $ },
                variant: D,
                __size: L,
                ...Q("input"),
              }),
              et &&
                (0, t.jsx)("div", {
                  ...j,
                  "data-position": "right",
                  ...Q("section", { className: j?.className, style: j?.style }),
                  children: et,
                }),
            ],
          }),
        });
      });
    (W.classes = b),
      (W.Wrapper = k),
      (W.Label = j),
      (W.Error = R),
      (W.Description = S),
      (W.Placeholder = E),
      (W.ClearButton = h),
      (W.displayName = "@mantine/core/Input"),
      e.s(["Input", () => W], 22084);
  },
  734616,
  (e) => {
    "use strict";
    var t = e.i(843476),
      r = e.i(271645),
      o = e.i(424848),
      i = e.i(143798);
    e.i(207670);
    var n = e.i(789549),
      s = e.i(314037),
      a = e.i(644662),
      l = e.i(257942),
      d = e.i(321879);
    let u = (0, r.createContext)(null),
      c = u.Provider;
    var p = {
      group: "m_11def92b",
      root: "m_f85678b6",
      image: "m_11f8ac07",
      placeholder: "m_104cd71f",
    };
    let f = (0, i.createVarsResolver)((e, { spacing: t }) => ({
        group: { "--ag-spacing": (0, o.getSpacing)(t) },
      })),
      v = (0, d.factory)((e, r) => {
        let o = (0, n.useProps)("AvatarGroup", null, e),
          {
            classNames: i,
            className: l,
            style: d,
            styles: u,
            unstyled: v,
            vars: m,
            spacing: g,
            attributes: h,
            ...y
          } = o,
          w = (0, s.useStyles)({
            name: "AvatarGroup",
            classes: p,
            props: o,
            className: l,
            style: d,
            classNames: i,
            styles: u,
            unstyled: v,
            attributes: h,
            vars: m,
            varsResolver: f,
            rootSelector: "group",
          });
        return (0, t.jsx)(c, {
          value: !0,
          children: (0, t.jsx)(a.Box, { ref: r, ...w("group"), ...y }),
        });
      });
    function m(e) {
      return (0, t.jsx)("svg", {
        ...e,
        "data-avatar-placeholder-icon": !0,
        viewBox: "0 0 15 15",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: (0, t.jsx)("path", {
          d: "M0.877014 7.49988C0.877014 3.84219 3.84216 0.877045 7.49985 0.877045C11.1575 0.877045 14.1227 3.84219 14.1227 7.49988C14.1227 11.1575 11.1575 14.1227 7.49985 14.1227C3.84216 14.1227 0.877014 11.1575 0.877014 7.49988ZM7.49985 1.82704C4.36683 1.82704 1.82701 4.36686 1.82701 7.49988C1.82701 8.97196 2.38774 10.3131 3.30727 11.3213C4.19074 9.94119 5.73818 9.02499 7.50023 9.02499C9.26206 9.02499 10.8093 9.94097 11.6929 11.3208C12.6121 10.3127 13.1727 8.97172 13.1727 7.49988C13.1727 4.36686 10.6328 1.82704 7.49985 1.82704ZM10.9818 11.9787C10.2839 10.7795 8.9857 9.97499 7.50023 9.97499C6.01458 9.97499 4.71624 10.7797 4.01845 11.9791C4.97952 12.7272 6.18765 13.1727 7.49985 13.1727C8.81227 13.1727 10.0206 12.727 10.9818 11.9787ZM5.14999 6.50487C5.14999 5.207 6.20212 4.15487 7.49999 4.15487C8.79786 4.15487 9.84999 5.207 9.84999 6.50487C9.84999 7.80274 8.79786 8.85487 7.49999 8.85487C6.20212 8.85487 5.14999 7.80274 5.14999 6.50487ZM7.49999 5.10487C6.72679 5.10487 6.09999 5.73167 6.09999 6.50487C6.09999 7.27807 6.72679 7.90487 7.49999 7.90487C8.27319 7.90487 8.89999 7.27807 8.89999 6.50487C8.89999 5.73167 8.27319 5.10487 7.49999 5.10487Z",
          fill: "currentColor",
          fillRule: "evenodd",
          clipRule: "evenodd",
        }),
      });
    }
    (v.classes = p), (v.displayName = "@mantine/core/AvatarGroup");
    let g = [
        "blue",
        "cyan",
        "grape",
        "green",
        "indigo",
        "lime",
        "orange",
        "pink",
        "red",
        "teal",
        "violet",
      ],
      h = (0, i.createVarsResolver)(
        (
          e,
          {
            size: t,
            radius: r,
            variant: i,
            gradient: n,
            color: s,
            autoContrast: a,
            name: l,
            allowedInitialsColors: d,
          }
        ) => {
          let u =
              "initials" === s && "string" == typeof l
                ? (function (e, t = g) {
                    let r =
                      Math.abs(
                        (function (e) {
                          let t = 0;
                          for (let r = 0; r < e.length; r += 1)
                            t = ((t << 5) - t + e.charCodeAt(r)) | 0;
                          return t;
                        })(e)
                      ) % t.length;
                    return t[r];
                  })(l, d)
                : s,
            c = e.variantColorResolver({
              color: u || "gray",
              theme: e,
              gradient: n,
              variant: i || "light",
              autoContrast: a,
            });
          return {
            root: {
              "--avatar-size": (0, o.getSize)(t, "avatar-size"),
              "--avatar-radius": void 0 === r ? void 0 : (0, o.getRadius)(r),
              "--avatar-bg": u || i ? c.background : void 0,
              "--avatar-color": u || i ? c.color : void 0,
              "--avatar-bd": u || i ? c.border : void 0,
            },
          };
        }
      ),
      y = (0, l.polymorphicFactory)((e, o) => {
        let i = (0, n.useProps)("Avatar", null, e),
          {
            classNames: l,
            className: d,
            style: c,
            styles: f,
            unstyled: v,
            vars: g,
            src: y,
            alt: w,
            radius: x,
            color: b,
            gradient: C,
            imageProps: S,
            children: P,
            autoContrast: R,
            mod: z,
            name: I,
            allowedInitialsColors: j,
            attributes: E,
            ...N
          } = i,
          O = { withinGroup: !!(0, r.useContext)(u) },
          [D, k] = (0, r.useState)(!y),
          B = (0, s.useStyles)({
            name: "Avatar",
            props: i,
            classes: p,
            className: d,
            style: c,
            classNames: l,
            styles: f,
            unstyled: v,
            attributes: E,
            vars: g,
            varsResolver: h,
          });
        return (
          (0, r.useEffect)(() => k(!y), [y]),
          (0, t.jsx)(a.Box, {
            ...B("root"),
            mod: [{ "within-group": O.withinGroup }, z],
            ref: o,
            ...N,
            children:
              D || !y
                ? (0, t.jsx)("span", {
                    ...B("placeholder"),
                    title: w,
                    children:
                      P ||
                      ("string" == typeof I &&
                        (function (e, t = 2) {
                          let r = e.split(" ");
                          return 1 === r.length
                            ? e.slice(0, t).toUpperCase()
                            : r
                                .map((e) => e[0])
                                .slice(0, t)
                                .join("")
                                .toUpperCase();
                        })(I)) ||
                      (0, t.jsx)(m, {}),
                  })
                : (0, t.jsx)("img", {
                    ...S,
                    ...B("image"),
                    src: y,
                    alt: w,
                    onError: (e) => {
                      k(!0), S?.onError?.(e);
                    },
                  }),
          })
        );
      });
    (y.classes = p),
      (y.displayName = "@mantine/core/Avatar"),
      (y.Group = v),
      e.s(["Avatar", () => y], 734616);
  },
  843464,
  (e) => {
    "use strict";
    let t = {
      src: e.i(169255).default,
      width: 14,
      height: 14,
      blurWidth: 0,
      blurHeight: 0,
    };
    e.s(["default", 0, t]);
  },
  393737,
  (e) => {
    "use strict";
    function t(e, t, r) {
      return void 0 === t && void 0 === r
        ? e
        : void 0 !== t && void 0 === r
        ? Math.max(e, t)
        : void 0 === t && void 0 !== r
        ? Math.min(e, r)
        : Math.min(Math.max(e, t), r);
    }
    e.s(["clamp", () => t]);
  },
]);
