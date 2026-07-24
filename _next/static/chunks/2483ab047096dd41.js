(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  788223,
  (e) => {
    e.v("/_next/static/media/logo.126a5b62.svg");
  },
  230241,
  (e) => {
    e.v("/_next/static/media/solana.482ba264.svg");
  },
  313158,
  (e) => {
    e.v("/_next/static/media/base.85491d74.svg");
  },
  701339,
  (e) => {
    e.v("/_next/static/media/arbitrum.8e8f974f.svg");
  },
  571244,
  (e) => {
    e.v("/_next/static/media/sonic.78975ca0.svg");
  },
  849682,
  (e) => {
    e.v("/_next/static/media/bscscan.b50a0193.svg");
  },
  630455,
  (e) => {
    e.v("/_next/static/media/polygon.cb38ed45.svg");
  },
  572176,
  (e) => {
    e.v("/_next/static/media/monad.1ded84db.svg");
  },
  990282,
  (e) => {
    e.v("/_next/static/media/robinhood.b0062e87.svg");
  },
  723479,
  (e) => {
    e.v("/_next/static/media/bnb.20d5de31.png");
  },
  262414,
  (e) => {
    e.v("/_next/static/media/berachain.2f79b089.svg");
  },
  734423,
  (e) => {
    e.v("/_next/static/media/berascan.2cfc4bf4.svg");
  },
  380383,
  (e) => {
    e.v("/_next/static/media/solscan.a882d6fc.svg");
  },
  837991,
  (e) => {
    e.v("/_next/static/media/arbscan.f9539eb0.svg");
  },
  808367,
  (e) => {
    e.v("/_next/static/media/sonicscan.9f9308da.svg");
  },
  547625,
  (e) => {
    e.v("/_next/static/media/basescan.a1bcfe3e.svg");
  },
  624779,
  (e) => {
    e.v("/_next/static/media/abscan.9fac6636.ico");
  },
  845987,
  (e) => {
    e.v("/_next/static/media/polygonscan.796e5e0d.png");
  },
  536702,
  (e) => {
    e.v("/_next/static/media/abstract.6649f182.svg");
  },
  752041,
  (e) => {
    e.v("/_next/static/media/robinhoodscan.ae1130fd.svg");
  },
  56480,
  (e) => {
    e.v("/_next/static/media/bronze-bg.9e3339ec.svg");
  },
  113074,
  (e) => {
    e.v("/_next/static/media/silver-bg.13b7048f.svg");
  },
  587348,
  (e) => {
    e.v("/_next/static/media/gold-bg.5d472a16.svg");
  },
  836821,
  (e) => {
    e.v("/_next/static/media/diamond-bg.f408aaca.svg");
  },
  254478,
  (e) => {
    e.v("/_next/static/media/sapphire-bg.b780eb7a.svg");
  },
  731549,
  (e) => {
    e.v("/_next/static/media/bronze-badge.5734b62a.svg");
  },
  786543,
  (e) => {
    e.v("/_next/static/media/silver-badge.57b1a6c5.svg");
  },
  772691,
  (e) => {
    e.v("/_next/static/media/gold-badge.85978350.svg");
  },
  306389,
  (e) => {
    e.v("/_next/static/media/diamond-badge.8168250a.svg");
  },
  25095,
  (e) => {
    e.v("/_next/static/media/sapphire-badge.ba3753e4.svg");
  },
  169255,
  (e) => {
    e.v("/_next/static/media/verified.653af235.svg");
  },
  578565,
  (e) => {
    "use strict";
    var t = e.i(843476);
    e.i(271645), e.i(207670);
    var r = e.i(257942),
      a = e.i(22084),
      o = e.i(789549),
      n = e.i(919254);
    let s = { __staticSelector: "InputBase", withAria: !0, size: "sm" },
      i = (0, r.polymorphicFactory)((e, r) => {
        let {
          inputProps: i,
          wrapperProps: l,
          ...d
        } = (function (e, t, r) {
          let a = (0, o.useProps)(e, t, r),
            {
              label: s,
              description: i,
              error: l,
              required: d,
              classNames: c,
              styles: u,
              className: v,
              unstyled: m,
              __staticSelector: f,
              __stylesApiProps: p,
              errorProps: g,
              labelProps: b,
              descriptionProps: x,
              wrapperProps: h,
              id: y,
              size: C,
              style: w,
              inputContainer: S,
              inputWrapperOrder: B,
              withAsterisk: k,
              variant: I,
              vars: T,
              mod: j,
              attributes: O,
              ..._
            } = a,
            { styleProps: N, rest: M } = (0, n.extractStyleProps)(_),
            P = {
              label: s,
              description: i,
              error: l,
              required: d,
              classNames: c,
              className: v,
              __staticSelector: f,
              __stylesApiProps: p || a,
              errorProps: g,
              labelProps: b,
              descriptionProps: x,
              unstyled: m,
              styles: u,
              size: C,
              style: w,
              inputContainer: S,
              inputWrapperOrder: B,
              withAsterisk: k,
              variant: I,
              id: y,
              mod: j,
              attributes: O,
              ...h,
            };
          return {
            ...M,
            classNames: c,
            styles: u,
            unstyled: m,
            wrapperProps: { ...P, ...N },
            inputProps: {
              required: d,
              classNames: c,
              styles: u,
              unstyled: m,
              size: C,
              __staticSelector: f,
              __stylesApiProps: p || a,
              error: l,
              variant: I,
              id: y,
              attributes: O,
            },
          };
        })("InputBase", s, e);
        return (0, t.jsx)(a.Input.Wrapper, {
          ...l,
          children: (0, t.jsx)(a.Input, { ...i, ...d, ref: r }),
        });
      });
    (i.classes = { ...a.Input.classes, ...a.Input.Wrapper.classes }),
      (i.displayName = "@mantine/core/InputBase"),
      e.s(["InputBase", () => i], 578565);
  },
  963327,
  (e) => {
    "use strict";
    let t = {
      src: e.i(788223).default,
      width: 124,
      height: 10,
      blurWidth: 0,
      blurHeight: 0,
    };
    e.s(["default", 0, t]);
  },
  129277,
  (e) => {
    "use strict";
    var t = e.i(843476),
      r = e.i(271645),
      a = e.i(598526);
    e.i(207670);
    var o = e.i(789549),
      n = e.i(321879),
      s = e.i(276728);
    let [i, l] = (0, e.i(384660).createSafeContext)(
      "Modal component was not found in tree"
    );
    var d = {
      root: "m_9df02822",
      content: "m_54c44539",
      inner: "m_1f958f16",
      header: "m_d0e2b9cd",
    };
    let c = (0, n.factory)((e, r) => {
      let {
          classNames: a,
          className: n,
          style: i,
          styles: d,
          vars: c,
          ...u
        } = (0, o.useProps)("ModalBody", null, e),
        v = l();
      return (0, t.jsx)(s.ModalBaseBody, {
        ref: r,
        ...v.getStyles("body", {
          classNames: a,
          style: i,
          styles: d,
          className: n,
        }),
        ...u,
      });
    });
    (c.classes = d), (c.displayName = "@mantine/core/ModalBody");
    var u = e.i(927318);
    let v = (0, n.factory)((e, r) => {
      let {
          classNames: a,
          className: n,
          style: s,
          styles: i,
          vars: d,
          ...c
        } = (0, o.useProps)("ModalCloseButton", null, e),
        v = l();
      return (0, t.jsx)(u.ModalBaseCloseButton, {
        ref: r,
        ...v.getStyles("close", {
          classNames: a,
          style: s,
          styles: i,
          className: n,
        }),
        ...c,
      });
    });
    (v.classes = d), (v.displayName = "@mantine/core/ModalCloseButton");
    var m = e.i(682451),
      f = e.i(536002),
      p = e.i(926160);
    let g = (0, n.factory)((e, r) => {
      let {
          classNames: a,
          className: n,
          style: s,
          styles: i,
          vars: d,
          children: c,
          __hidden: u,
          ...v
        } = (0, o.useProps)("ModalContent", null, e),
        g = l(),
        b = g.scrollAreaComponent || p.NativeScrollArea;
      return (0, t.jsx)(f.ModalBaseContent, {
        ...g.getStyles("content", {
          className: n,
          style: s,
          styles: i,
          classNames: a,
        }),
        innerProps: g.getStyles("inner", {
          className: n,
          style: s,
          styles: i,
          classNames: a,
        }),
        "data-full-screen": g.fullScreen || void 0,
        "data-modal-content": !0,
        "data-hidden": u || void 0,
        ref: r,
        ...v,
        children: (0, t.jsx)(b, {
          style: {
            maxHeight: g.fullScreen
              ? "100dvh"
              : `calc(100dvh - (${(0, m.rem)(g.yOffset)} * 2))`,
          },
          children: c,
        }),
      });
    });
    (g.classes = d), (g.displayName = "@mantine/core/ModalContent");
    var b = e.i(539986);
    let x = (0, n.factory)((e, r) => {
      let {
          classNames: a,
          className: n,
          style: s,
          styles: i,
          vars: d,
          ...c
        } = (0, o.useProps)("ModalHeader", null, e),
        u = l();
      return (0, t.jsx)(b.ModalBaseHeader, {
        ref: r,
        ...u.getStyles("header", {
          classNames: a,
          style: s,
          styles: i,
          className: n,
        }),
        ...c,
      });
    });
    (x.classes = d), (x.displayName = "@mantine/core/ModalHeader");
    var h = e.i(6809);
    let y = (0, n.factory)((e, r) => {
      let {
          classNames: a,
          className: n,
          style: s,
          styles: i,
          vars: d,
          ...c
        } = (0, o.useProps)("ModalOverlay", null, e),
        u = l();
      return (0, t.jsx)(h.ModalBaseOverlay, {
        ref: r,
        ...u.getStyles("overlay", {
          classNames: a,
          style: s,
          styles: i,
          className: n,
        }),
        ...c,
      });
    });
    (y.classes = d), (y.displayName = "@mantine/core/ModalOverlay");
    var C = e.i(424848),
      w = e.i(143798),
      S = e.i(314037),
      B = e.i(19060),
      k = e.i(747596);
    let I = {
        __staticSelector: "Modal",
        closeOnClickOutside: !0,
        withinPortal: !0,
        lockScroll: !0,
        trapFocus: !0,
        returnFocus: !0,
        closeOnEscape: !0,
        keepMounted: !1,
        zIndex: (0, a.getDefaultZIndex)("modal"),
        transitionProps: { duration: 200, transition: "fade-down" },
        yOffset: "5dvh",
      },
      T = (0, w.createVarsResolver)(
        (e, { radius: t, size: r, yOffset: a, xOffset: o }) => ({
          root: {
            "--modal-radius": void 0 === t ? void 0 : (0, C.getRadius)(t),
            "--modal-size": (0, C.getSize)(r, "modal-size"),
            "--modal-y-offset": (0, m.rem)(a),
            "--modal-x-offset": (0, m.rem)(o),
          },
        })
      ),
      j = (0, n.factory)((e, r) => {
        let a = (0, o.useProps)("ModalRoot", I, e),
          {
            classNames: n,
            className: s,
            style: l,
            styles: c,
            unstyled: u,
            vars: v,
            yOffset: m,
            scrollAreaComponent: f,
            radius: p,
            fullScreen: g,
            centered: b,
            xOffset: x,
            __staticSelector: h,
            attributes: y,
            ...C
          } = a,
          w = (0, S.useStyles)({
            name: h,
            classes: d,
            props: a,
            className: s,
            style: l,
            classNames: n,
            styles: c,
            unstyled: u,
            attributes: y,
            vars: v,
            varsResolver: T,
          });
        return (0, t.jsx)(i, {
          value: {
            yOffset: m,
            scrollAreaComponent: f,
            getStyles: w,
            fullScreen: g,
          },
          children: (0, t.jsx)(B.ModalBase, {
            ref: r,
            ...w("root"),
            "data-full-screen": g || void 0,
            "data-centered": b || void 0,
            "data-offset-scrollbars": f === k.ScrollArea.Autosize || void 0,
            unstyled: u,
            ...C,
          }),
        });
      });
    (j.classes = d), (j.displayName = "@mantine/core/ModalRoot");
    let [O, _] = (0, e.i(592499).createOptionalContext)();
    function N({ children: e }) {
      let [o, n] = (0, r.useState)([]),
        [s, i] = (0, r.useState)((0, a.getDefaultZIndex)("modal"));
      return (0, t.jsx)(O, {
        value: {
          stack: o,
          addModal: (e, t) => {
            n((t) => [...new Set([...t, e])]),
              i((e) =>
                "number" == typeof t && "number" == typeof e
                  ? Math.max(e, t)
                  : e
              );
          },
          removeModal: (e) => n((t) => t.filter((t) => t !== e)),
          getZIndex: (e) => `calc(${s} + ${o.indexOf(e)} + 1)`,
          currentId: o[o.length - 1],
          maxZIndex: s,
        },
        children: e,
      });
    }
    N.displayName = "@mantine/core/ModalStack";
    var M = e.i(987471);
    let P = (0, n.factory)((e, r) => {
      let {
          classNames: a,
          className: n,
          style: s,
          styles: i,
          vars: d,
          ...c
        } = (0, o.useProps)("ModalTitle", null, e),
        u = l();
      return (0, t.jsx)(M.ModalBaseTitle, {
        ref: r,
        ...u.getStyles("title", {
          classNames: a,
          style: s,
          styles: i,
          className: n,
        }),
        ...c,
      });
    });
    (P.classes = d), (P.displayName = "@mantine/core/ModalTitle");
    let D = {
        closeOnClickOutside: !0,
        withinPortal: !0,
        lockScroll: !0,
        trapFocus: !0,
        returnFocus: !0,
        closeOnEscape: !0,
        keepMounted: !1,
        zIndex: (0, a.getDefaultZIndex)("modal"),
        transitionProps: { duration: 200, transition: "fade-down" },
        withOverlay: !0,
        withCloseButton: !0,
      },
      R = (0, n.factory)((e, n) => {
        let {
            title: s,
            withOverlay: i,
            overlayProps: l,
            withCloseButton: d,
            closeButtonProps: u,
            children: m,
            radius: f,
            opened: p,
            stackId: b,
            zIndex: h,
            ...C
          } = (0, o.useProps)("Modal", D, e),
          w = _(),
          S = !!s || d,
          B =
            w && b
              ? {
                  closeOnEscape: w.currentId === b,
                  trapFocus: w.currentId === b,
                  zIndex: w.getZIndex(b),
                }
              : {},
          k = !1 !== i && (b && w ? w.currentId === b : p);
        return (
          (0, r.useEffect)(() => {
            w &&
              b &&
              (p
                ? w.addModal(b, h || (0, a.getDefaultZIndex)("modal"))
                : w.removeModal(b));
          }, [p, b, h]),
          (0, t.jsxs)(j, {
            ref: n,
            radius: f,
            opened: p,
            zIndex: w && b ? w.getZIndex(b) : h,
            ...C,
            ...B,
            children: [
              i &&
                (0, t.jsx)(y, {
                  visible: k,
                  transitionProps: w && b ? { duration: 0 } : void 0,
                  ...l,
                }),
              (0, t.jsxs)(g, {
                radius: f,
                __hidden: !!w && !!b && !!p && b !== w.currentId,
                children: [
                  S &&
                    (0, t.jsxs)(x, {
                      children: [
                        s && (0, t.jsx)(P, { children: s }),
                        d && (0, t.jsx)(v, { ...u }),
                      ],
                    }),
                  (0, t.jsx)(c, { children: m }),
                ],
              }),
            ],
          })
        );
      });
    (R.classes = d),
      (R.displayName = "@mantine/core/Modal"),
      (R.Root = j),
      (R.Overlay = y),
      (R.Content = g),
      (R.Body = c),
      (R.Header = x),
      (R.Title = P),
      (R.CloseButton = v),
      (R.Stack = N),
      e.s(["Modal", () => R], 129277);
  },
  2710,
  (e) => {
    "use strict";
    var t = e.i(843476),
      r = e.i(271645),
      a = e.i(598526);
    e.i(207670);
    var o = e.i(789549),
      n = e.i(321879),
      s = e.i(276728);
    let [i, l] = (0, e.i(384660).createSafeContext)(
      "Drawer component was not found in tree"
    );
    var d = {
      root: "m_f11b401e",
      header: "m_5a7c2c9",
      content: "m_b8a05bbd",
      inner: "m_31cd769a",
    };
    let c = (0, n.factory)((e, r) => {
      let {
          classNames: a,
          className: n,
          style: i,
          styles: d,
          vars: c,
          ...u
        } = (0, o.useProps)("DrawerBody", null, e),
        v = l();
      return (0, t.jsx)(s.ModalBaseBody, {
        ref: r,
        ...v.getStyles("body", {
          classNames: a,
          style: i,
          styles: d,
          className: n,
        }),
        ...u,
      });
    });
    (c.classes = d), (c.displayName = "@mantine/core/DrawerBody");
    var u = e.i(927318);
    let v = (0, n.factory)((e, r) => {
      let {
          classNames: a,
          className: n,
          style: s,
          styles: i,
          vars: d,
          ...c
        } = (0, o.useProps)("DrawerCloseButton", null, e),
        v = l();
      return (0, t.jsx)(u.ModalBaseCloseButton, {
        ref: r,
        ...v.getStyles("close", {
          classNames: a,
          style: s,
          styles: i,
          className: n,
        }),
        ...c,
      });
    });
    (v.classes = d), (v.displayName = "@mantine/core/DrawerCloseButton");
    var m = e.i(536002),
      f = e.i(926160);
    let p = (0, n.factory)((e, r) => {
      let {
          classNames: a,
          className: n,
          style: s,
          styles: i,
          vars: d,
          children: c,
          radius: u,
          __hidden: v,
          ...p
        } = (0, o.useProps)("DrawerContent", null, e),
        g = l(),
        b = g.scrollAreaComponent || f.NativeScrollArea;
      return (0, t.jsx)(m.ModalBaseContent, {
        ...g.getStyles("content", {
          className: n,
          style: s,
          styles: i,
          classNames: a,
        }),
        innerProps: g.getStyles("inner", {
          className: n,
          style: s,
          styles: i,
          classNames: a,
        }),
        ref: r,
        ...p,
        radius: u || g.radius || 0,
        "data-hidden": v || void 0,
        children: (0, t.jsx)(b, {
          style: { height: "calc(100vh - var(--drawer-offset) * 2)" },
          children: c,
        }),
      });
    });
    (p.classes = d), (p.displayName = "@mantine/core/DrawerContent");
    var g = e.i(539986);
    let b = (0, n.factory)((e, r) => {
      let {
          classNames: a,
          className: n,
          style: s,
          styles: i,
          vars: d,
          ...c
        } = (0, o.useProps)("DrawerHeader", null, e),
        u = l();
      return (0, t.jsx)(g.ModalBaseHeader, {
        ref: r,
        ...u.getStyles("header", {
          classNames: a,
          style: s,
          styles: i,
          className: n,
        }),
        ...c,
      });
    });
    (b.classes = d), (b.displayName = "@mantine/core/DrawerHeader");
    var x = e.i(6809);
    let h = (0, n.factory)((e, r) => {
      let {
          classNames: a,
          className: n,
          style: s,
          styles: i,
          vars: d,
          ...c
        } = (0, o.useProps)("DrawerOverlay", null, e),
        u = l();
      return (0, t.jsx)(x.ModalBaseOverlay, {
        ref: r,
        ...u.getStyles("overlay", {
          classNames: a,
          style: s,
          styles: i,
          className: n,
        }),
        ...c,
      });
    });
    (h.classes = d), (h.displayName = "@mantine/core/DrawerOverlay");
    var y = e.i(682451),
      C = e.i(424848),
      w = e.i(143798),
      S = e.i(314037),
      B = e.i(917303),
      k = e.i(19060),
      I = e.i(747596);
    let T = {
        top: "slide-down",
        bottom: "slide-up",
        left: "slide-right",
        right: "slide-left",
      },
      j = {
        top: "slide-down",
        bottom: "slide-up",
        right: "slide-right",
        left: "slide-left",
      },
      O = {
        closeOnClickOutside: !0,
        withinPortal: !0,
        lockScroll: !0,
        trapFocus: !0,
        returnFocus: !0,
        closeOnEscape: !0,
        keepMounted: !1,
        zIndex: (0, a.getDefaultZIndex)("modal"),
        position: "left",
      },
      _ = (0, w.createVarsResolver)(
        (e, { position: t, size: r, offset: a }) => ({
          root: {
            "--drawer-size": (0, C.getSize)(r, "drawer-size"),
            "--drawer-flex": (function (e) {
              if ("top" === e || "bottom" === e)
                return "0 0 calc(100% - var(--drawer-offset, 0rem) * 2)";
            })(t),
            "--drawer-height":
              "left" === t || "right" === t ? void 0 : "var(--drawer-size)",
            "--drawer-align": (function (e) {
              switch (e) {
                case "top":
                  return "flex-start";
                case "bottom":
                  return "flex-end";
                default:
                  return;
              }
            })(t),
            "--drawer-justify": "right" === t ? "flex-end" : void 0,
            "--drawer-offset": (0, y.rem)(a),
          },
        })
      ),
      N = (0, n.factory)((e, r) => {
        let a = (0, o.useProps)("DrawerRoot", O, e),
          {
            classNames: n,
            className: s,
            style: l,
            styles: c,
            unstyled: u,
            vars: v,
            scrollAreaComponent: m,
            position: f,
            transitionProps: p,
            radius: g,
            attributes: b,
            ...x
          } = a,
          { dir: h } = (0, B.useDirection)(),
          y = (0, S.useStyles)({
            name: "Drawer",
            classes: d,
            props: a,
            className: s,
            style: l,
            classNames: n,
            styles: c,
            unstyled: u,
            attributes: b,
            vars: v,
            varsResolver: _,
          }),
          C = ("rtl" === h ? j : T)[f];
        return (0, t.jsx)(i, {
          value: { scrollAreaComponent: m, getStyles: y, radius: g },
          children: (0, t.jsx)(k.ModalBase, {
            ref: r,
            ...y("root"),
            transitionProps: { transition: C, ...p },
            "data-offset-scrollbars": m === I.ScrollArea.Autosize || void 0,
            unstyled: u,
            ...x,
          }),
        });
      });
    (N.classes = d), (N.displayName = "@mantine/core/DrawerRoot");
    let [M, P] = (0, e.i(592499).createOptionalContext)();
    function D({ children: e }) {
      let [o, n] = (0, r.useState)([]),
        [s, i] = (0, r.useState)((0, a.getDefaultZIndex)("modal"));
      return (0, t.jsx)(M, {
        value: {
          stack: o,
          addModal: (e, t) => {
            n((t) => [...new Set([...t, e])]),
              i((e) =>
                "number" == typeof t && "number" == typeof e
                  ? Math.max(e, t)
                  : e
              );
          },
          removeModal: (e) => n((t) => t.filter((t) => t !== e)),
          getZIndex: (e) => `calc(${s} + ${o.indexOf(e)} + 1)`,
          currentId: o[o.length - 1],
          maxZIndex: s,
        },
        children: e,
      });
    }
    D.displayName = "@mantine/core/DrawerStack";
    var R = e.i(987471);
    let $ = (0, n.factory)((e, r) => {
      let {
          classNames: a,
          className: n,
          style: s,
          styles: i,
          vars: d,
          ...c
        } = (0, o.useProps)("DrawerTitle", null, e),
        u = l();
      return (0, t.jsx)(R.ModalBaseTitle, {
        ref: r,
        ...u.getStyles("title", {
          classNames: a,
          style: s,
          styles: i,
          className: n,
        }),
        ...c,
      });
    });
    ($.classes = d), ($.displayName = "@mantine/core/DrawerTitle");
    let z = {
        closeOnClickOutside: !0,
        withinPortal: !0,
        lockScroll: !0,
        trapFocus: !0,
        returnFocus: !0,
        closeOnEscape: !0,
        keepMounted: !1,
        zIndex: (0, a.getDefaultZIndex)("modal"),
        withOverlay: !0,
        withCloseButton: !0,
      },
      A = (0, n.factory)((e, n) => {
        let {
            title: s,
            withOverlay: i,
            overlayProps: l,
            withCloseButton: d,
            closeButtonProps: u,
            children: m,
            opened: f,
            stackId: g,
            zIndex: x,
            ...y
          } = (0, o.useProps)("Drawer", z, e),
          C = P(),
          w = !!s || d,
          S =
            C && g
              ? {
                  closeOnEscape: C.currentId === g,
                  trapFocus: C.currentId === g,
                  zIndex: C.getZIndex(g),
                }
              : {},
          B = !1 !== i && (g && C ? C.currentId === g : f);
        return (
          (0, r.useEffect)(() => {
            C &&
              g &&
              (f
                ? C.addModal(g, x || (0, a.getDefaultZIndex)("modal"))
                : C.removeModal(g));
          }, [f, g, x]),
          (0, t.jsxs)(N, {
            ref: n,
            opened: f,
            zIndex: C && g ? C.getZIndex(g) : x,
            ...y,
            ...S,
            children: [
              i &&
                (0, t.jsx)(h, {
                  visible: B,
                  transitionProps: C && g ? { duration: 0 } : void 0,
                  ...l,
                }),
              (0, t.jsxs)(p, {
                __hidden: !!C && !!g && !!f && g !== C.currentId,
                children: [
                  w &&
                    (0, t.jsxs)(b, {
                      children: [
                        s && (0, t.jsx)($, { children: s }),
                        d && (0, t.jsx)(v, { ...u }),
                      ],
                    }),
                  (0, t.jsx)(c, { children: m }),
                ],
              }),
            ],
          })
        );
      });
    (A.classes = d),
      (A.displayName = "@mantine/core/Drawer"),
      (A.Root = N),
      (A.Overlay = h),
      (A.Content = p),
      (A.Body = c),
      (A.Header = b),
      (A.Title = $),
      (A.CloseButton = v),
      (A.Stack = D),
      e.s(["Drawer", () => A], 2710);
  },
  25293,
  (e) => {
    "use strict";
    var t = e.i(843476);
    e.i(271645), e.i(207670);
    var r = e.i(789549),
      a = e.i(321879),
      o = e.i(578565);
    let n = (0, a.factory)((e, a) => {
      let n = (0, r.useProps)("TextInput", null, e);
      return (0, t.jsx)(o.InputBase, {
        component: "input",
        ref: a,
        ...n,
        __staticSelector: "TextInput",
      });
    });
    (n.classes = o.InputBase.classes),
      (n.displayName = "@mantine/core/TextInput"),
      e.s(["TextInput", () => n]);
  },
  962881,
  (e) => {
    "use strict";
    var t = e.i(843476),
      r = e.i(682451);
    function a({ style: e, size: a = 16, ...o }) {
      return (0, t.jsx)("svg", {
        viewBox: "0 0 15 15",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        style: {
          ...e,
          width: (0, r.rem)(a),
          height: (0, r.rem)(a),
          display: "block",
        },
        ...o,
        children: (0, t.jsx)("path", {
          d: "M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",
          fill: "currentColor",
          fillRule: "evenodd",
          clipRule: "evenodd",
        }),
      });
    }
    e.i(271645),
      e.i(207670),
      (a.displayName = "@mantine/core/AccordionChevron"),
      e.s(["AccordionChevron", () => a]);
  },
  541473,
  (e) => {
    "use strict";
    var t = e.i(211441);
    e.s(["usePrivy", () => t.h]);
  },
  890357,
  (e) => {
    "use strict";
    var t = e.i(768834),
      r = e.i(579473);
    let a = (0, t.create)()(
        (0, r.persist)(
          (e) => ({
            categoryList: [],
            trendingCategoryList: [],
            setCategories: (t) => e(() => ({ categoryList: t })),
            setTrendingCategories: (t) =>
              e(() => ({ trendingCategoryList: t })),
          }),
          { name: "category-storage", skipHydration: !0 }
        )
      ),
      o = (0, t.create)()(
        (0, r.persist)(
          (e) => ({
            usdcBalance: 0,
            allUsdcBalance: [],
            stockBalance: 0,
            cryptoPerpsBalance: 0,
            myCryptoTokens: [],
            holdingsData: { totalInvested: 0, totalGains: 0, gainInPercent: 0 },
            setUsdcBalance: (t) => e(() => ({ usdcBalance: t })),
            setStockBalance: (t) => e(() => ({ stockBalance: t })),
            setCryptoPerpsBalance: (t) => e(() => ({ cryptoPerpsBalance: t })),
            setAllUsdcBalances: (t) => e(() => ({ allUsdcBalance: t })),
            setMyCryptoTokens: (t) => e(() => ({ myCryptoTokens: t })),
            setHoldingsData: (t) => e(() => ({ holdingsData: t })),
            resetStore: () =>
              e(() => ({
                usdcBalance: 0,
                allUsdcBalance: [],
                stockBalance: 0,
                cryptoPerpsBalance: 0,
                myCryptoTokens: [],
                holdingsData: {
                  totalInvested: 0,
                  totalGains: 0,
                  gainInPercent: 0,
                },
              })),
          }),
          { name: "balance-storage", skipHydration: !0 }
        )
      ),
      n = (0, t.create)()(
        (0, r.persist)(
          (e) => ({
            profileData: {},
            holdings: {},
            stockHoldings: {},
            trackersOrder: [],
            showTickers: !1,
            country: "",
            selectedDiscussionAsset: "",
            favTickers: [],
            newsTrackerSettings: {
              enableBlogs: !0,
              enableTwitter: !0,
              enableSound: !0,
              enableNotifications: !0,
            },
            completedOnchainTrades: [],
            openOrdersAltcoins: [],
            limitPrice: "",
            selectedOrderType: "market",
            onChainTableCurrentTab: "positions",
            onchainHoldersData: [],
            setCompletedOnchainTrades: (t) =>
              e(() => ({ completedOnchainTrades: t })),
            setOpenOrdersAltcoins: (t) => e(() => ({ openOrdersAltcoins: t })),
            setLimitPrice: (t) => e(() => ({ limitPrice: t })),
            setSelectedOrderType: (t) => e(() => ({ selectedOrderType: t })),
            setOnChainTableCurrentTab: (t) =>
              e(() => ({ onChainTableCurrentTab: t })),
            setOnchainHoldersData: (t) => e(() => ({ onchainHoldersData: t })),
            setSelectedDiscussionAsset: (t) =>
              e(() => ({ selectedDiscussionAsset: t })),
            setCountry: (t) => e(() => ({ country: t })),
            setShowTickers: (t) => e(() => ({ showTickers: t })),
            setTrackersOrder: (t) => e(() => ({ trackersOrder: t })),
            setProfileData: (t) => e(() => ({ profileData: t })),
            setHoldings: (t) => e(() => ({ holdings: t })),
            setStockHoldings: (t) => e(() => ({ stockHoldings: t })),
            setFavTickers: (t) => e(() => ({ favTickers: t })),
            setNewsTrackerSettings: (t) =>
              e(() => ({ newsTrackerSettings: t })),
            resetStore: () =>
              e(() => ({ profileData: {}, holdings: {}, stockHoldings: {} })),
          }),
          { name: "profile-storage", skipHydration: !0 }
        )
      ),
      s = (0, t.create)()(
        (0, r.persist)(
          (e) => ({
            exchangeRates: {},
            selectedCurrency: "usd",
            setCurrentCurrency: (t) => e(() => ({ selectedCurrency: t })),
            setExchangeRates: (t) => e(() => ({ exchangeRates: t })),
          }),
          { name: "exchange-storage", skipHydration: !0 }
        )
      );
    e.s([
      "useBalanceStore",
      0,
      o,
      "useCategoryStore",
      0,
      a,
      "useExchangeStore",
      0,
      s,
      "useProfileStore",
      0,
      n,
    ]);
  },
  618566,
  (e, t, r) => {
    t.exports = e.r(976562);
  },
  579473,
  (e) => {
    "use strict";
    function t(e, t) {
      let r;
      try {
        r = e();
      } catch (e) {
        return;
      }
      return {
        getItem: (e) => {
          var a;
          let o = (e) =>
              null === e ? null : JSON.parse(e, null == t ? void 0 : t.reviver),
            n = null != (a = r.getItem(e)) ? a : null;
          return n instanceof Promise ? n.then(o) : o(n);
        },
        setItem: (e, a) =>
          r.setItem(e, JSON.stringify(a, null == t ? void 0 : t.replacer)),
        removeItem: (e) => r.removeItem(e),
      };
    }
    let r = (e) => (t) => {
        try {
          let a = e(t);
          if (a instanceof Promise) return a;
          return {
            then: (e) => r(e)(a),
            catch(e) {
              return this;
            },
          };
        } catch (e) {
          return {
            then(e) {
              return this;
            },
            catch: (t) => r(t)(e),
          };
        }
      },
      a = (e, a) => (o, n, s) => {
        let i,
          l = {
            storage: t(() => localStorage),
            partialize: (e) => e,
            version: 0,
            merge: (e, t) => ({ ...t, ...e }),
            ...a,
          },
          d = !1,
          c = new Set(),
          u = new Set(),
          v = l.storage;
        if (!v)
          return e(
            (...e) => {
              console.warn(
                `[zustand persist middleware] Unable to update item '${l.name}', the given storage is currently unavailable.`
              ),
                o(...e);
            },
            n,
            s
          );
        let m = () => {
            let e = l.partialize({ ...n() });
            return v.setItem(l.name, { state: e, version: l.version });
          },
          f = s.setState;
        s.setState = (e, t) => (f(e, t), m());
        let p = e((...e) => (o(...e), m()), n, s);
        s.getInitialState = () => p;
        let g = () => {
          var e, t;
          if (!v) return;
          (d = !1),
            c.forEach((e) => {
              var t;
              return e(null != (t = n()) ? t : p);
            });
          let a =
            (null == (t = l.onRehydrateStorage)
              ? void 0
              : t.call(l, null != (e = n()) ? e : p)) || void 0;
          return r(v.getItem.bind(v))(l.name)
            .then((e) => {
              if (e)
                if ("number" != typeof e.version || e.version === l.version)
                  return [!1, e.state];
                else {
                  if (l.migrate) {
                    let t = l.migrate(e.state, e.version);
                    return t instanceof Promise
                      ? t.then((e) => [!0, e])
                      : [!0, t];
                  }
                  console.error(
                    "State loaded from storage couldn't be migrated since no migrate function was provided"
                  );
                }
              return [!1, void 0];
            })
            .then((e) => {
              var t;
              let [r, a] = e;
              if ((o((i = l.merge(a, null != (t = n()) ? t : p)), !0), r))
                return m();
            })
            .then(() => {
              null == a || a(i, void 0),
                (i = n()),
                (d = !0),
                u.forEach((e) => e(i));
            })
            .catch((e) => {
              null == a || a(void 0, e);
            });
        };
        return (
          (s.persist = {
            setOptions: (e) => {
              (l = { ...l, ...e }), e.storage && (v = e.storage);
            },
            clearStorage: () => {
              null == v || v.removeItem(l.name);
            },
            getOptions: () => l,
            rehydrate: () => g(),
            hasHydrated: () => d,
            onHydrate: (e) => (
              c.add(e),
              () => {
                c.delete(e);
              }
            ),
            onFinishHydration: (e) => (
              u.add(e),
              () => {
                u.delete(e);
              }
            ),
          }),
          l.skipHydration || g(),
          i || p
        );
      };
    e.s(["createJSONStorage", () => t, "persist", () => a]);
  },
  346944,
  (e) => {
    "use strict";
    var t = e.i(271645);
    let r = (e, t) => {
      let r = e instanceof Map ? e : new Map(e.entries()),
        a = t instanceof Map ? t : new Map(t.entries());
      if (r.size !== a.size) return !1;
      for (let [e, t] of r) if (!a.has(e) || !Object.is(t, a.get(e))) return !1;
      return !0;
    };
    function a(e) {
      let a = t.default.useRef(void 0);
      return (t) => {
        let o = e(t);
        return !(function (e, t) {
          if (Object.is(e, t)) return !0;
          if (
            "object" != typeof e ||
            null === e ||
            "object" != typeof t ||
            null === t ||
            Object.getPrototypeOf(e) !== Object.getPrototypeOf(t)
          )
            return !1;
          if (Symbol.iterator in e && Symbol.iterator in t) {
            if ("entries" in e && "entries" in t) return r(e, t);
            let a = e[Symbol.iterator](),
              o = t[Symbol.iterator](),
              n = a.next(),
              s = o.next();
            for (; !n.done && !s.done; ) {
              if (!Object.is(n.value, s.value)) return !1;
              (n = a.next()), (s = o.next());
            }
            return !!n.done && !!s.done;
          }
          return r(
            { entries: () => Object.entries(e) },
            { entries: () => Object.entries(t) }
          );
        })(a.current, o)
          ? (a.current = o)
          : a.current;
      };
    }
    e.s(["useShallow", () => a], 346944);
  },
  689736,
  (e) => {
    "use strict";
    var t = e.i(247167);
    function r() {
      return void 0 !== t.default && t.default.env && 1
        ? "production"
        : "development";
    }
    e.s(["getEnv", () => r]);
  },
  139330,
  421458,
  (e) => {
    "use strict";
    var t = e.i(843476),
      r = e.i(271645),
      a = e.i(636202),
      o = e.i(446614),
      n = e.i(751937),
      s = e.i(931316),
      i = e.i(424848),
      l = e.i(143798);
    e.i(207670);
    var d = e.i(515259),
      c = e.i(835783),
      u = e.i(522442),
      v = e.i(789549),
      m = e.i(314037),
      f = e.i(644662),
      p = e.i(321879),
      g = e.i(928621),
      b = e.i(689736),
      x = e.i(346929),
      h = { root: "m_96b553a6" };
    let y = (0, l.createVarsResolver)((e, { transitionDuration: t }) => ({
        root: { "--transition-duration": "number" == typeof t ? `${t}ms` : t },
      })),
      C = (0, p.factory)((e, a) => {
        let o = (0, v.useProps)("FloatingIndicator", null, e),
          {
            classNames: n,
            className: i,
            style: l,
            styles: d,
            unstyled: c,
            vars: u,
            target: p,
            parent: C,
            transitionDuration: w,
            mod: S,
            displayAfterTransitionEnd: B,
            attributes: k,
            ...I
          } = o,
          T = (0, m.useStyles)({
            name: "FloatingIndicator",
            classes: h,
            props: o,
            className: i,
            style: l,
            classNames: n,
            styles: d,
            unstyled: c,
            attributes: k,
            vars: u,
            varsResolver: y,
          }),
          j = (0, r.useRef)(null),
          { initialized: O, hidden: _ } = (function ({
            target: e,
            parent: t,
            ref: a,
            displayAfterTransitionEnd: o,
          }) {
            let n = (0, r.useRef)(-1),
              [s, i] = (0, r.useState)(!1),
              [l, d] = (0, r.useState)("boolean" == typeof o && o),
              c = () => {
                if (!e || !t || !a.current) return;
                let r = e.getBoundingClientRect(),
                  o = t.getBoundingClientRect(),
                  n = window.getComputedStyle(e),
                  s = window.getComputedStyle(t),
                  i =
                    (0, x.toInt)(n.borderTopWidth) +
                    (0, x.toInt)(s.borderTopWidth),
                  l =
                    (0, x.toInt)(n.borderLeftWidth) +
                    (0, x.toInt)(s.borderLeftWidth),
                  d = {
                    top: r.top - o.top - i,
                    left: r.left - o.left - l,
                    width: r.width,
                    height: r.height,
                  };
                (a.current.style.transform = `translateY(${d.top}px) translateX(${d.left}px)`),
                  (a.current.style.width = `${d.width}px`),
                  (a.current.style.height = `${d.height}px`);
              },
              u = () => {
                window.clearTimeout(n.current),
                  a.current && (a.current.style.transitionDuration = "0ms"),
                  c(),
                  (n.current = window.setTimeout(() => {
                    a.current && (a.current.style.transitionDuration = "");
                  }, 30));
              },
              v = (0, r.useRef)(null),
              m = (0, r.useRef)(null);
            return (
              (0, r.useEffect)(() => {
                if ((c(), e))
                  return (
                    (v.current = new ResizeObserver(u)),
                    v.current.observe(e),
                    t &&
                      ((m.current = new ResizeObserver(u)),
                      m.current.observe(t)),
                    () => {
                      v.current?.disconnect(), m.current?.disconnect();
                    }
                  );
              }, [t, e]),
              (0, r.useEffect)(() => {
                if (t) {
                  let e = (e) => {
                    (function (e, t) {
                      if (!t || !e) return !1;
                      let r = t.parentNode;
                      for (; null != r; ) {
                        if (r === e) return !0;
                        r = r.parentNode;
                      }
                      return !1;
                    })(e.target, t) && (u(), d(!1));
                  };
                  return (
                    t.addEventListener("transitionend", e),
                    () => {
                      t.removeEventListener("transitionend", e);
                    }
                  );
                }
              }, [t]),
              !(function (e, t, a = { autoInvoke: !1 }) {
                let o = (0, r.useRef)(null),
                  n = (0, r.useCallback)(
                    (...t) => {
                      o.current ||
                        (o.current = window.setTimeout(() => {
                          e(t), (o.current = null);
                        }, 20));
                    },
                    [20]
                  ),
                  s = (0, r.useCallback)(() => {
                    o.current &&
                      (window.clearTimeout(o.current), (o.current = null));
                  }, []);
                (0, r.useEffect)(() => (a.autoInvoke && n(), s), [s, n]);
              })(
                () => {
                  "test" !== (0, b.getEnv)() && i(!0);
                },
                0,
                { autoInvoke: !0 }
              ),
              (0, g.useMutationObserver)(
                (e) => {
                  e.forEach((e) => {
                    "attributes" === e.type && "dir" === e.attributeName && u();
                  });
                },
                { attributes: !0, attributeFilter: ["dir"] },
                () => document.documentElement
              ),
              { initialized: s, hidden: l }
            );
          })({ target: p, parent: C, ref: j, displayAfterTransitionEnd: B }),
          N = (0, s.useMergedRef)(a, j);
        return p && C
          ? (0, t.jsx)(f.Box, {
              ref: N,
              mod: [{ initialized: O, hidden: _ }, S],
              ...T("root"),
              ...I,
            })
          : null;
      });
    (C.displayName = "@mantine/core/FloatingIndicator"),
      (C.classes = h),
      e.s(["FloatingIndicator", () => C], 421458);
    var w = {
      root: "m_cf365364",
      indicator: "m_9e182ccd",
      label: "m_1738fcb2",
      input: "m_1714d588",
      control: "m_69686b9b",
      innerLabel: "m_78882f40",
    };
    let S = { withItemsBorders: !0 },
      B = (0, l.createVarsResolver)(
        (
          e,
          {
            radius: t,
            color: r,
            transitionDuration: a,
            size: o,
            transitionTimingFunction: n,
          }
        ) => ({
          root: {
            "--sc-radius": void 0 === t ? void 0 : (0, i.getRadius)(t),
            "--sc-color": r ? (0, d.getThemeColor)(r, e) : void 0,
            "--sc-shadow": r ? void 0 : "var(--mantine-shadow-xs)",
            "--sc-transition-duration": void 0 === a ? void 0 : `${a}ms`,
            "--sc-transition-timing-function": n,
            "--sc-padding": (0, i.getSize)(o, "sc-padding"),
            "--sc-font-size": (0, i.getFontSize)(o),
          },
        })
      ),
      k = (0, p.factory)((e, i) => {
        var l, d;
        let p,
          g,
          b = (0, v.useProps)("SegmentedControl", S, e),
          {
            classNames: x,
            className: h,
            style: y,
            styles: k,
            unstyled: I,
            vars: T,
            data: j,
            value: O,
            defaultValue: _,
            onChange: N,
            size: M,
            name: P,
            disabled: D,
            readOnly: R,
            fullWidth: $,
            orientation: z,
            radius: A,
            color: F,
            transitionDuration: W,
            transitionTimingFunction: E,
            variant: H,
            autoContrast: L,
            withItemsBorders: Z,
            mod: U,
            attributes: V,
            ...G
          } = b,
          J = (0, m.useStyles)({
            name: "SegmentedControl",
            props: b,
            classes: w,
            className: h,
            style: y,
            classNames: x,
            styles: k,
            unstyled: I,
            attributes: V,
            vars: T,
            varsResolver: B,
          }),
          K = (0, u.useMantineTheme)(),
          X = j.map((e) => ("string" == typeof e ? { label: e, value: e } : e)),
          Y = (function () {
            let [e, t] = (0, r.useState)(!1);
            return (0, r.useEffect)(() => t(!0), []), e;
          })(),
          [q, Q] = (0, r.useState)((0, a.randomId)()),
          [ee, et] = (0, r.useState)(null),
          [er, ea] = (0, r.useState)({}),
          [eo, en] = (0, o.useUncontrolled)({
            value: O,
            defaultValue: _,
            finalValue: Array.isArray(j)
              ? X.find((e) => !e.disabled)?.value ?? j[0]?.value ?? null
              : null,
            onChange: N,
          }),
          es = (0, n.useId)(P),
          ei = X.map((e) =>
            (0, r.createElement)(
              f.Box,
              {
                ...J("control"),
                mod: { active: eo === e.value, orientation: z },
                key: e.value,
              },
              (0, r.createElement)("input", {
                ...J("input"),
                disabled: D || e.disabled,
                type: "radio",
                name: es,
                value: e.value,
                id: `${es}-${e.value}`,
                checked: eo === e.value,
                onChange: () => !R && en(e.value),
                "data-focus-ring": K.focusRing,
                key: `${e.value}-input`,
              }),
              (0, r.createElement)(
                f.Box,
                {
                  component: "label",
                  ...J("label"),
                  mod: {
                    active: eo === e.value && !(D || e.disabled),
                    disabled: D || e.disabled,
                    "read-only": R,
                  },
                  htmlFor: `${es}-${e.value}`,
                  ref: (t) => {
                    (er[e.value] = t), ea(er);
                  },
                  __vars: {
                    "--sc-label-color":
                      void 0 !== F
                        ? (0, c.getContrastColor)({
                            color: F,
                            theme: K,
                            autoContrast: L,
                          })
                        : void 0,
                  },
                  key: `${e.value}-label`,
                },
                (0, t.jsx)("span", { ...J("innerLabel"), children: e.label })
              )
            )
          ),
          el = (0, s.useMergedRef)(i, (e) => et(e));
        return ((l = () => {
          Q((0, a.randomId)());
        }),
        (d = [j.length]),
        (0, r.useEffect)(
          l,
          ((p = (0, r.useRef)([])),
          (g = (0, r.useRef)(0)),
          !(function (e, t) {
            if (!e || !t) return !1;
            if (e === t) return !0;
            if (e.length !== t.length) return !1;
            for (let r = 0; r < e.length; r += 1)
              if (
                !(function (e, t) {
                  if (e === t || (Number.isNaN(e) && Number.isNaN(t)))
                    return !0;
                  if (!(e instanceof Object) || !(t instanceof Object))
                    return !1;
                  let r = Object.keys(e),
                    { length: a } = r;
                  if (a !== Object.keys(t).length) return !1;
                  for (let o = 0; o < a; o += 1) {
                    let a = r[o];
                    if (
                      !(a in t) ||
                      (e[a] !== t[a] &&
                        !(Number.isNaN(e[a]) && Number.isNaN(t[a])))
                    )
                      return !1;
                  }
                  return !0;
                })(e[r], t[r])
              )
                return !1;
            return !0;
          })(p.current, d) && ((p.current = d), (g.current += 1)),
          [g.current])
        ),
        0 === j.length)
          ? null
          : (0, t.jsxs)(f.Box, {
              ...J("root"),
              variant: H,
              size: M,
              ref: el,
              mod: [
                {
                  "full-width": $,
                  orientation: z,
                  initialized: Y,
                  "with-items-borders": Z,
                },
                U,
              ],
              ...G,
              role: "radiogroup",
              "data-disabled": D,
              children: [
                "string" == typeof eo &&
                  (0, t.jsx)(
                    C,
                    {
                      target: er[eo],
                      parent: ee,
                      component: "span",
                      transitionDuration: "var(--sc-transition-duration)",
                      ...J("indicator"),
                    },
                    q
                  ),
                ei,
              ],
            });
      });
    (k.classes = w),
      (k.displayName = "@mantine/core/SegmentedControl"),
      e.s(["SegmentedControl", () => k], 139330);
  },
  469401,
  (e) => {
    "use strict";
    var t = e.i(843476),
      r = e.i(139330),
      a = e.i(184086);
    e.s([
      "GTRSegmentedControl",
      0,
      ({
        variant: e = "primary",
        value: o,
        itemWidth: n,
        orientation: s = "horizontal",
        data: i,
        classNames: l,
        customColors: d,
        ...c
      }) => {
        let u = {
            primary: {
              color: "#ffffff",
              activeTextColor: "text-neutral-900",
              inactiveTextColor: "text-neutral-300",
              defaultWidth: "w-[165px]",
              classNames: {
                root: "bg-black rounded-xl p-0.5 border-1 border-neutral-800",
                label:
                  "flex justify-center items-center py-2 px-2.5 !outline-none",
                indicator: "rounded-[10px]",
                innerLabel: "text-sm font-semibold",
              },
            },
            secondary: {
              color: "#27272A",
              activeTextColor: "text-[#FAFAFA]",
              inactiveTextColor: "text-slate-900",
              defaultWidth: "w-[118px]",
              classNames: {
                root: "bg-neutral-900 rounded-xl p-0.5",
                label:
                  "flex justify-center items-center py-1.5 px-2.5 !outline-none",
                indicator: "rounded-lg border-1 border-neutral-500",
                innerLabel: "text-xs font-semibold",
              },
            },
            tabs: {
              color: void 0,
              activeTextColor: "!text-white",
              inactiveTextColor: "",
              defaultWidth: "",
              classNames: {
                root: "bg-transparent border-none gap-1.5",
                label:
                  "text-sm font-medium border border-neutral-600 leading-[120%] py-1.5 px-4 !outline-none",
                indicator: "bg-neutral-900 !text-white border-1 !border-white",
                innerLabel: "",
              },
            },
            compact: {
              color: void 0,
              activeTextColor: "text-white",
              inactiveTextColor: "",
              defaultWidth: "",
              classNames: {
                root: "bg-black border-1 border-neutral-800",
                label: "text-xs font-semibold !outline-none",
                indicator:
                  "bg-neutral-800 text-white border-1 border-neutral-500",
                innerLabel: "",
              },
            },
            stacked: {
              color: void 0,
              activeTextColor: "text-white",
              inactiveTextColor: "text-[#A4ABC1]",
              defaultWidth: "w-full",
              classNames: {
                root: "bg-transparent gap-2 p-0.5 rounded w-full",
                label:
                  "text-xs font-medium py-1.5 px-2.5 rounded w-full relative border border-neutral-800 font-medium !outline-none",
                indicator: "bg-blue-500 border-1 border-blue-500 rounded",
                innerLabel: "",
              },
            },
            pills: {
              color: void 0,
              activeTextColor: "!text-white",
              inactiveTextColor: "!text-neutral-500",
              defaultWidth: "",
              classNames: {
                root: "bg-transparent md:gap-4 p-0 rounded-none",
                label:
                  "px-4 md:px-6 py-2.5 h-11 rounded-xl text-base font-medium border-0 !outline-none",
                indicator: "!bg-[#2B7FFF26] rounded-xl",
                innerLabel: "",
              },
            },
            underline: {
              color: void 0,
              activeTextColor: "!text-white",
              inactiveTextColor: "!text-neutral-500",
              defaultWidth: "",
              classNames: {
                root: "bg-transparent gap-8 p-0 border-b-0",
                label:
                  "pb-4 text-xl font-medium transition-all bg-transparent p-0 border-0 cursor-pointer !outline-none",
                indicator:
                  "!bg-transparent !h-full !top-0 after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:w-8 after:h-1 after:bottom-0 after:bg-[#8B5CF6] after:rounded-full",
                innerLabel: "",
              },
            },
          }[e],
          v = n || u.defaultWidth,
          m = "vertical" === s ? "flex-col" : "",
          f = d?.activeTextColor || u.activeTextColor,
          p = d?.inactiveTextColor || u.inactiveTextColor,
          g = i.map((e) => ({
            value: e.value,
            disabled: e?.disabled,
            label: (0, t.jsx)(a.Tooltip, {
              label: e?.tooltip,
              disabled: !e?.tooltip,
              children: (0, t.jsxs)("span", {
                className: `flex items-center justify-center gap-2 ${
                  o === e.value ? f : p
                }`,
                style:
                  o === e.value &&
                  d?.activeTextColor &&
                  !d.activeTextColor.startsWith("text-")
                    ? { color: d.activeTextColor }
                    : o !== e.value &&
                      d?.inactiveTextColor &&
                      !d.inactiveTextColor.startsWith("text-")
                    ? { color: d.inactiveTextColor }
                    : void 0,
                children: [
                  e.icon &&
                    (0, t.jsx)("span", {
                      className: "flex items-center",
                      children: e.icon,
                    }),
                  e.label,
                ],
              }),
            }),
          })),
          b = u.classNames.indicator,
          x = u.classNames.root;
        if (d) {
          d.rootBackgroundColor &&
            (d.rootBackgroundColor.startsWith("bg-") ||
              d.rootBackgroundColor.startsWith("!bg-")) &&
            ((x = x.replace(/!?bg-[^\s]+/g, "")),
            (x = `${x} ${d.rootBackgroundColor}`));
          let e = [];
          d.activeBorderColor &&
            ((b = b.replace(
              /border-(neutral|slate|gray|zinc|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose|white|black|transparent|current)-[^\s]+/g,
              ""
            )),
            d.activeBorderColor.startsWith("border-") &&
              e.push(d.activeBorderColor)),
            d.activeBackgroundColor &&
              ((b = b.replace(/!?bg-[^\s]+/g, "")),
              (d.activeBackgroundColor.startsWith("bg-") ||
                d.activeBackgroundColor.startsWith("!bg-")) &&
                e.push(d.activeBackgroundColor)),
            e.length > 0 && (b = `${b} ${e.join(" ")}`);
        }
        return (0, t.jsx)(r.SegmentedControl, {
          withItemsBorders: !1,
          radius: "xl",
          color: u.color,
          value: o,
          orientation: s,
          classNames: {
            root: `${x} ${m} ${l?.root || ""}`,
            label: `${u.classNames.label} ${v} ${l?.label || ""}`,
            indicator: `${b} ${l?.indicator || ""}`,
            innerLabel: `${u.classNames.innerLabel} ${l?.innerLabel || ""}`,
          },
          styles: {
            root: {
              ...(d?.rootBackgroundColor &&
              !d.rootBackgroundColor.startsWith("bg-") &&
              !d.rootBackgroundColor.startsWith("!bg-")
                ? { backgroundColor: d.rootBackgroundColor }
                : {}),
            },
            indicator: {
              ...(d?.activeBorderColor &&
              !d.activeBorderColor.startsWith("border-")
                ? { borderColor: d.activeBorderColor }
                : {}),
              ...(d?.activeBackgroundColor &&
              !d.activeBackgroundColor.startsWith("bg-") &&
              !d.activeBackgroundColor.startsWith("!bg-")
                ? { backgroundColor: d.activeBackgroundColor }
                : {}),
            },
          },
          data: g,
          ...c,
        });
      },
    ]);
  },
]);
