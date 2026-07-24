(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  928621,
  (e) => {
    "use strict";
    var t = e.i(271645);
    function n(e, n, r) {
      let o = (0, t.useRef)(null),
        u = (0, t.useRef)(null);
      return (
        (0, t.useEffect)(() => {
          let t = "function" == typeof r ? r() : r;
          return (
            (t || u.current) &&
              ((o.current = new MutationObserver(e)),
              o.current.observe(t || u.current, n)),
            () => {
              o.current?.disconnect();
            }
          );
        }, [e, n]),
        u
      );
    }
    e.s(["useMutationObserver", () => n]);
  },
  917303,
  (e) => {
    "use strict";
    e.i(843476);
    var t = e.i(271645);
    e.i(931141), e.i(928621);
    let n = (0, t.createContext)({
      dir: "ltr",
      toggleDirection: () => {},
      setDirection: () => {},
    });
    function r() {
      return (0, t.useContext)(n);
    }
    e.s(["useDirection", () => r]);
  },
  171189,
  (e) => {
    "use strict";
    e.i(247167);
    var t = e.i(271645),
      n = e.i(229315);
    e.i(343084);
    e.i(397126);
    let r = "data-floating-ui-focusable";
    function o(e) {
      let t = e.activeElement;
      for (
        ;
        (null == (n = t) || null == (n = n.shadowRoot)
          ? void 0
          : n.activeElement) != null;

      ) {
        var n;
        t = t.shadowRoot.activeElement;
      }
      return t;
    }
    function u(e, t) {
      if (!e || !t) return !1;
      let r = null == t.getRootNode ? void 0 : t.getRootNode();
      if (e.contains(t)) return !0;
      if (r && (0, n.isShadowRoot)(r)) {
        let n = t;
        for (; n; ) {
          if (e === n) return !0;
          n = n.parentNode || n.host;
        }
      }
      return !1;
    }
    function l(e) {
      return "composedPath" in e ? e.composedPath()[0] : e.target;
    }
    function i(e, t) {
      return (
        null != t &&
        ("composedPath" in e
          ? e.composedPath().includes(t)
          : null != e.target && t.contains(e.target))
      );
    }
    function s(e) {
      return (null == e ? void 0 : e.ownerDocument) || document;
    }
    function c(e, t, n) {
      return (
        void 0 === n && (n = !0),
        e
          .filter((e) => {
            var r;
            return (
              e.parentId === t &&
              (!n || (null == (r = e.context) ? void 0 : r.open))
            );
          })
          .flatMap((t) => [t, ...c(e, t.id, n)])
      );
    }
    function a(e, t) {
      let n = ["mouse", "pen"];
      return t || n.push("", void 0), n.includes(e);
    }
    var f = "undefined" != typeof document ? t.useLayoutEffect : function () {};
    function d(e) {
      let n = t.useRef(e);
      return (
        f(() => {
          n.current = e;
        }),
        n
      );
    }
    let v = { ...t }.useInsertionEffect || ((e) => e());
    function m(e) {
      let n = t.useRef(() => {});
      return (
        v(() => {
          n.current = e;
        }),
        t.useCallback(function () {
          for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
            t[r] = arguments[r];
          return null == n.current ? void 0 : n.current(...t);
        }, [])
      );
    }
    var p = e.i(843476);
    e.i(174080);
    var g = e.i(258950);
    function E(e) {
      let n = t.useRef(void 0),
        r = t.useCallback((t) => {
          let n = e.map((e) => {
            if (null != e) {
              if ("function" == typeof e) {
                let n = e(t);
                return "function" == typeof n
                  ? n
                  : () => {
                      e(null);
                    };
              }
              return (
                (e.current = t),
                () => {
                  e.current = null;
                }
              );
            }
          });
          return () => {
            n.forEach((e) => (null == e ? void 0 : e()));
          };
        }, e);
      return t.useMemo(
        () =>
          e.every((e) => null == e)
            ? null
            : (e) => {
                n.current && (n.current(), (n.current = void 0)),
                  null != e && (n.current = r(e));
              },
        e
      );
    }
    e.i(953760);
    let b = "active",
      y = "selected",
      R = { ...t },
      h = !1,
      w = 0,
      C = () => "floating-ui-" + Math.random().toString(36).slice(2, 6) + w++,
      L =
        R.useId ||
        function () {
          let [e, n] = t.useState(() => (h ? C() : void 0));
          return (
            f(() => {
              null == e && n(C());
            }, []),
            t.useEffect(() => {
              h = !0;
            }, []),
            e
          );
        },
      x = t.createContext(null),
      M = t.createContext(null),
      k = () => {
        var e;
        return (null == (e = t.useContext(x)) ? void 0 : e.id) || null;
      };
    function P(e) {
      return "data-floating-ui-" + e;
    }
    function T(e) {
      -1 !== e.current && (clearTimeout(e.current), (e.current = -1));
    }
    let I = P("safe-polygon");
    function D(e, t, n) {
      if (n && !a(n)) return 0;
      if ("number" == typeof e) return e;
      if ("function" == typeof e) {
        let n = e();
        return "number" == typeof n ? n : null == n ? void 0 : n[t];
      }
      return null == e ? void 0 : e[t];
    }
    function A(e) {
      return "function" == typeof e ? e() : e;
    }
    function S(e, r) {
      void 0 === r && (r = {});
      let { open: o, onOpenChange: l, dataRef: i, events: c, elements: v } = e,
        {
          enabled: p = !0,
          delay: g = 0,
          handleClose: E = null,
          mouseOnly: b = !1,
          restMs: y = 0,
          move: R = !0,
        } = r,
        h = t.useContext(M),
        w = k(),
        C = d(E),
        L = d(g),
        x = d(o),
        P = d(y),
        S = t.useRef(),
        K = t.useRef(-1),
        _ = t.useRef(),
        O = t.useRef(-1),
        B = t.useRef(!0),
        W = t.useRef(!1),
        H = t.useRef(() => {}),
        N = t.useRef(!1),
        X = m(() => {
          var e;
          let t = null == (e = i.current.openEvent) ? void 0 : e.type;
          return (
            (null == t ? void 0 : t.includes("mouse")) && "mousedown" !== t
          );
        });
      t.useEffect(() => {
        if (p)
          return (
            c.on("openchange", e),
            () => {
              c.off("openchange", e);
            }
          );
        function e(e) {
          let { open: t } = e;
          t || (T(K), T(O), (B.current = !0), (N.current = !1));
        }
      }, [p, c]),
        t.useEffect(() => {
          if (!p || !C.current || !o) return;
          function e(e) {
            X() && l(!1, e, "hover");
          }
          let t = s(v.floating).documentElement;
          return (
            t.addEventListener("mouseleave", e),
            () => {
              t.removeEventListener("mouseleave", e);
            }
          );
        }, [v.floating, o, l, p, C, X]);
      let j = t.useCallback(
          function (e, t, n) {
            void 0 === t && (t = !0), void 0 === n && (n = "hover");
            let r = D(L.current, "close", S.current);
            r && !_.current
              ? (T(K), (K.current = window.setTimeout(() => l(!1, e, n), r)))
              : t && (T(K), l(!1, e, n));
          },
          [L, l]
        ),
        F = m(() => {
          H.current(), (_.current = void 0);
        }),
        Y = m(() => {
          if (W.current) {
            let e = s(v.floating).body;
            (e.style.pointerEvents = ""),
              e.removeAttribute(I),
              (W.current = !1);
          }
        }),
        U = m(
          () =>
            !!i.current.openEvent &&
            ["click", "mousedown"].includes(i.current.openEvent.type)
        );
      t.useEffect(() => {
        if (p && (0, n.isElement)(v.domReference)) {
          let n = v.domReference,
            u = v.floating;
          return (
            o && n.addEventListener("mouseleave", r),
            R && n.addEventListener("mousemove", e, { once: !0 }),
            n.addEventListener("mouseenter", e),
            n.addEventListener("mouseleave", t),
            u &&
              (u.addEventListener("mouseleave", r),
              u.addEventListener("mouseenter", c),
              u.addEventListener("mouseleave", f)),
            () => {
              o && n.removeEventListener("mouseleave", r),
                R && n.removeEventListener("mousemove", e),
                n.removeEventListener("mouseenter", e),
                n.removeEventListener("mouseleave", t),
                u &&
                  (u.removeEventListener("mouseleave", r),
                  u.removeEventListener("mouseenter", c),
                  u.removeEventListener("mouseleave", f));
            }
          );
        }
        function e(e) {
          if (
            (T(K),
            (B.current = !1),
            (b && !a(S.current)) || (A(P.current) > 0 && !D(L.current, "open")))
          )
            return;
          let t = D(L.current, "open", S.current);
          t
            ? (K.current = window.setTimeout(() => {
                x.current || l(!0, e, "hover");
              }, t))
            : o || l(!0, e, "hover");
        }
        function t(e) {
          if (U()) return void Y();
          H.current();
          let t = s(v.floating);
          if (
            (T(O), (N.current = !1), C.current && i.current.floatingContext)
          ) {
            o || T(K),
              (_.current = C.current({
                ...i.current.floatingContext,
                tree: h,
                x: e.clientX,
                y: e.clientY,
                onClose() {
                  Y(), F(), U() || j(e, !0, "safe-polygon");
                },
              }));
            let n = _.current;
            t.addEventListener("mousemove", n),
              (H.current = () => {
                t.removeEventListener("mousemove", n);
              });
            return;
          }
          ("touch" === S.current && u(v.floating, e.relatedTarget)) || j(e);
        }
        function r(e) {
          U() ||
            (i.current.floatingContext &&
              (null == C.current ||
                C.current({
                  ...i.current.floatingContext,
                  tree: h,
                  x: e.clientX,
                  y: e.clientY,
                  onClose() {
                    Y(), F(), U() || j(e);
                  },
                })(e)));
        }
        function c() {
          T(K);
        }
        function f(e) {
          U() || j(e, !1);
        }
      }, [v, p, e, b, R, j, F, Y, l, o, x, h, L, C, i, U, P]),
        f(() => {
          var e, t;
          if (
            p &&
            o &&
            null != (e = C.current) &&
            null != (e = e.__options) &&
            e.blockPointerEvents &&
            X()
          ) {
            W.current = !0;
            let e = v.floating;
            if ((0, n.isElement)(v.domReference) && e) {
              let n = s(v.floating).body;
              n.setAttribute(I, "");
              let r = v.domReference,
                o =
                  null == h ||
                  null == (t = h.nodesRef.current.find((e) => e.id === w)) ||
                  null == (t = t.context)
                    ? void 0
                    : t.elements.floating;
              return (
                o && (o.style.pointerEvents = ""),
                (n.style.pointerEvents = "none"),
                (r.style.pointerEvents = "auto"),
                (e.style.pointerEvents = "auto"),
                () => {
                  (n.style.pointerEvents = ""),
                    (r.style.pointerEvents = ""),
                    (e.style.pointerEvents = "");
                }
              );
            }
          }
        }, [p, o, w, v, h, C, X]),
        f(() => {
          o || ((S.current = void 0), (N.current = !1), F(), Y());
        }, [o, F, Y]),
        t.useEffect(
          () => () => {
            F(), T(K), T(O), Y();
          },
          [p, v.domReference, F, Y]
        );
      let q = t.useMemo(() => {
        function e(e) {
          S.current = e.pointerType;
        }
        return {
          onPointerDown: e,
          onPointerEnter: e,
          onMouseMove(e) {
            let { nativeEvent: t } = e;
            function n() {
              B.current || x.current || l(!0, t, "hover");
            }
            (b && !a(S.current)) ||
              o ||
              0 === A(P.current) ||
              (N.current && e.movementX ** 2 + e.movementY ** 2 < 2) ||
              (T(O),
              "touch" === S.current
                ? n()
                : ((N.current = !0),
                  (O.current = window.setTimeout(n, A(P.current)))));
          },
        };
      }, [b, l, o, x, P]);
      return t.useMemo(() => (p ? { reference: q } : {}), [p, q]);
    }
    let K = () => {},
      _ = t.createContext({
        delay: 0,
        initialDelay: 0,
        timeoutMs: 0,
        currentId: null,
        setCurrentId: K,
        setState: K,
        isInstantPhase: !1,
      });
    function O(e) {
      let { children: n, delay: r, timeoutMs: o = 0 } = e,
        [u, l] = t.useReducer((e, t) => ({ ...e, ...t }), {
          delay: r,
          timeoutMs: o,
          initialDelay: r,
          currentId: null,
          isInstantPhase: !1,
        }),
        i = t.useRef(null),
        s = t.useCallback((e) => {
          l({ currentId: e });
        }, []);
      return (
        f(() => {
          u.currentId
            ? null === i.current
              ? (i.current = u.currentId)
              : u.isInstantPhase || l({ isInstantPhase: !0 })
            : (u.isInstantPhase && l({ isInstantPhase: !1 }),
              (i.current = null));
        }, [u.currentId, u.isInstantPhase]),
        (0, p.jsx)(_.Provider, {
          value: t.useMemo(
            () => ({ ...u, setState: l, setCurrentId: s }),
            [u, s]
          ),
          children: n,
        })
      );
    }
    function B(e, n) {
      void 0 === n && (n = {});
      let { open: r, onOpenChange: o, floatingId: u } = e,
        { id: l, enabled: i = !0 } = n,
        s = null != l ? l : u,
        c = t.useContext(_),
        {
          currentId: a,
          setCurrentId: d,
          initialDelay: v,
          setState: m,
          timeoutMs: p,
        } = c;
      return (
        f(() => {
          !i ||
            (a &&
              (m({ delay: { open: 1, close: D(v, "close") } }),
              a !== s && o(!1)));
        }, [i, s, o, m, a, v]),
        f(() => {
          function e() {
            o(!1), m({ delay: v, currentId: null });
          }
          if (i && a && !r && a === s) {
            if (p) {
              let t = window.setTimeout(e, p);
              return () => {
                clearTimeout(t);
              };
            }
            e();
          }
        }, [i, r, m, a, s, o, v, p]),
        f(() => {
          !i || (d !== K && r && d(s));
        }, [i, r, d, s]),
        c
      );
    }
    let W = {
        pointerdown: "onPointerDown",
        mousedown: "onMouseDown",
        click: "onClick",
      },
      H = {
        pointerdown: "onPointerDownCapture",
        mousedown: "onMouseDownCapture",
        click: "onClickCapture",
      },
      N = (e) => {
        var t, n;
        return {
          escapeKey:
            "boolean" == typeof e
              ? e
              : null != (t = null == e ? void 0 : e.escapeKey) && t,
          outsidePress:
            "boolean" == typeof e
              ? e
              : null == (n = null == e ? void 0 : e.outsidePress) || n,
        };
      };
    function X(e, r) {
      void 0 === r && (r = {});
      let { open: o, onOpenChange: a, elements: f, dataRef: d } = e,
        {
          enabled: v = !0,
          escapeKey: p = !0,
          outsidePress: g = !0,
          outsidePressEvent: E = "pointerdown",
          referencePress: b = !1,
          referencePressEvent: y = "pointerdown",
          ancestorScroll: R = !1,
          bubbles: h,
          capture: w,
        } = r,
        C = t.useContext(M),
        L = m("function" == typeof g ? g : () => !1),
        x = "function" == typeof g ? L : g,
        k = t.useRef(!1),
        { escapeKey: T, outsidePress: I } = N(h),
        { escapeKey: D, outsidePress: A } = N(w),
        S = t.useRef(!1),
        K = m((e) => {
          var t;
          if (!o || !v || !p || "Escape" !== e.key || S.current) return;
          let n = null == (t = d.current.floatingContext) ? void 0 : t.nodeId,
            r = C ? c(C.nodesRef.current, n) : [];
          if (!T && (e.stopPropagation(), r.length > 0)) {
            let e = !0;
            if (
              (r.forEach((t) => {
                var n;
                if (
                  null != (n = t.context) &&
                  n.open &&
                  !t.context.dataRef.current.__escapeKeyBubbles
                ) {
                  e = !1;
                  return;
                }
              }),
              !e)
            )
              return;
          }
          a(!1, "nativeEvent" in e ? e.nativeEvent : e, "escape-key");
        }),
        _ = m((e) => {
          var t;
          let n = () => {
            var t;
            K(e), null == (t = l(e)) || t.removeEventListener("keydown", n);
          };
          null == (t = l(e)) || t.addEventListener("keydown", n);
        }),
        O = m((e) => {
          var t;
          let r = d.current.insideReactTree;
          d.current.insideReactTree = !1;
          let o = k.current;
          if (
            ((k.current = !1),
            ("click" === E && o) || r || ("function" == typeof x && !x(e)))
          )
            return;
          let v = l(e),
            m = "[" + P("inert") + "]",
            p = s(f.floating).querySelectorAll(m),
            g = (0, n.isElement)(v) ? v : null;
          for (; g && !(0, n.isLastTraversableNode)(g); ) {
            let e = (0, n.getParentNode)(g);
            if ((0, n.isLastTraversableNode)(e) || !(0, n.isElement)(e)) break;
            g = e;
          }
          if (
            p.length &&
            (0, n.isElement)(v) &&
            !v.matches("html,body") &&
            !u(v, f.floating) &&
            Array.from(p).every((e) => !u(g, e))
          )
            return;
          if ((0, n.isHTMLElement)(v) && j) {
            let t = (0, n.isLastTraversableNode)(v),
              r = (0, n.getComputedStyle)(v),
              o = /auto|scroll/,
              u = t || o.test(r.overflowX),
              l = t || o.test(r.overflowY),
              i = u && v.clientWidth > 0 && v.scrollWidth > v.clientWidth,
              s = l && v.clientHeight > 0 && v.scrollHeight > v.clientHeight,
              c = "rtl" === r.direction,
              a =
                s &&
                (c
                  ? e.offsetX <= v.offsetWidth - v.clientWidth
                  : e.offsetX > v.clientWidth),
              f = i && e.offsetY > v.clientHeight;
            if (a || f) return;
          }
          let b = null == (t = d.current.floatingContext) ? void 0 : t.nodeId,
            y =
              C &&
              c(C.nodesRef.current, b).some((t) => {
                var n;
                return i(
                  e,
                  null == (n = t.context) ? void 0 : n.elements.floating
                );
              });
          if (i(e, f.floating) || i(e, f.domReference) || y) return;
          let R = C ? c(C.nodesRef.current, b) : [];
          if (R.length > 0) {
            let e = !0;
            if (
              (R.forEach((t) => {
                var n;
                if (
                  null != (n = t.context) &&
                  n.open &&
                  !t.context.dataRef.current.__outsidePressBubbles
                ) {
                  e = !1;
                  return;
                }
              }),
              !e)
            )
              return;
          }
          a(!1, e, "outside-press");
        }),
        B = m((e) => {
          var t;
          let n = () => {
            var t;
            O(e), null == (t = l(e)) || t.removeEventListener(E, n);
          };
          null == (t = l(e)) || t.addEventListener(E, n);
        });
      t.useEffect(() => {
        if (!o || !v) return;
        (d.current.__escapeKeyBubbles = T),
          (d.current.__outsidePressBubbles = I);
        let e = -1;
        function t(e) {
          a(!1, e, "ancestor-scroll");
        }
        function r() {
          window.clearTimeout(e), (S.current = !0);
        }
        function u() {
          e = window.setTimeout(() => {
            S.current = !1;
          }, 5 * !!(0, n.isWebKit)());
        }
        let l = s(f.floating);
        p &&
          (l.addEventListener("keydown", D ? _ : K, D),
          l.addEventListener("compositionstart", r),
          l.addEventListener("compositionend", u)),
          x && l.addEventListener(E, A ? B : O, A);
        let i = [];
        return (
          R &&
            ((0, n.isElement)(f.domReference) &&
              (i = (0, n.getOverflowAncestors)(f.domReference)),
            (0, n.isElement)(f.floating) &&
              (i = i.concat((0, n.getOverflowAncestors)(f.floating))),
            !(0, n.isElement)(f.reference) &&
              f.reference &&
              f.reference.contextElement &&
              (i = i.concat(
                (0, n.getOverflowAncestors)(f.reference.contextElement)
              ))),
          (i = i.filter((e) => {
            var t;
            return (
              e !== (null == (t = l.defaultView) ? void 0 : t.visualViewport)
            );
          })).forEach((e) => {
            e.addEventListener("scroll", t, { passive: !0 });
          }),
          () => {
            p &&
              (l.removeEventListener("keydown", D ? _ : K, D),
              l.removeEventListener("compositionstart", r),
              l.removeEventListener("compositionend", u)),
              x && l.removeEventListener(E, A ? B : O, A),
              i.forEach((e) => {
                e.removeEventListener("scroll", t);
              }),
              window.clearTimeout(e);
          }
        );
      }, [d, f, p, x, E, o, a, R, v, T, I, K, D, _, O, A, B]),
        t.useEffect(() => {
          d.current.insideReactTree = !1;
        }, [d, x, E]);
      let X = t.useMemo(
          () => ({
            onKeyDown: K,
            ...(b && {
              [W[y]]: (e) => {
                a(!1, e.nativeEvent, "reference-press");
              },
              ...("click" !== y && {
                onClick(e) {
                  a(!1, e.nativeEvent, "reference-press");
                },
              }),
            }),
          }),
          [K, a, b, y]
        ),
        j = t.useMemo(
          () => ({
            onKeyDown: K,
            onMouseDown() {
              k.current = !0;
            },
            onMouseUp() {
              k.current = !0;
            },
            [H[E]]: () => {
              d.current.insideReactTree = !0;
            },
          }),
          [K, E, d]
        );
      return t.useMemo(
        () => (v ? { reference: X, floating: j } : {}),
        [v, X, j]
      );
    }
    function j(e) {
      void 0 === e && (e = {});
      let { nodeId: r } = e,
        o = (function (e) {
          let { open: n = !1, onOpenChange: r, elements: o } = e,
            u = L(),
            l = t.useRef({}),
            [i] = t.useState(() => {
              let e;
              return (
                (e = new Map()),
                {
                  emit(t, n) {
                    var r;
                    null == (r = e.get(t)) || r.forEach((e) => e(n));
                  },
                  on(t, n) {
                    e.has(t) || e.set(t, new Set()), e.get(t).add(n);
                  },
                  off(t, n) {
                    var r;
                    null == (r = e.get(t)) || r.delete(n);
                  },
                }
              );
            }),
            s = null != k(),
            [c, a] = t.useState(o.reference),
            f = m((e, t, n) => {
              (l.current.openEvent = e ? t : void 0),
                i.emit("openchange", {
                  open: e,
                  event: t,
                  reason: n,
                  nested: s,
                }),
                null == r || r(e, t, n);
            }),
            d = t.useMemo(() => ({ setPositionReference: a }), []),
            v = t.useMemo(
              () => ({
                reference: c || o.reference || null,
                floating: o.floating || null,
                domReference: o.reference,
              }),
              [c, o.reference, o.floating]
            );
          return t.useMemo(
            () => ({
              dataRef: l,
              open: n,
              onOpenChange: f,
              elements: v,
              events: i,
              floatingId: u,
              refs: d,
            }),
            [n, f, v, i, u, d]
          );
        })({
          ...e,
          elements: { reference: null, floating: null, ...e.elements },
        }),
        u = e.rootContext || o,
        l = u.elements,
        [i, s] = t.useState(null),
        [c, a] = t.useState(null),
        d = (null == l ? void 0 : l.domReference) || i,
        v = t.useRef(null),
        p = t.useContext(M);
      f(() => {
        d && (v.current = d);
      }, [d]);
      let E = (0, g.useFloating)({
          ...e,
          elements: { ...l, ...(c && { reference: c }) },
        }),
        b = t.useCallback(
          (e) => {
            let t = (0, n.isElement)(e)
              ? {
                  getBoundingClientRect: () => e.getBoundingClientRect(),
                  getClientRects: () => e.getClientRects(),
                  contextElement: e,
                }
              : e;
            a(t), E.refs.setReference(t);
          },
          [E.refs]
        ),
        y = t.useCallback(
          (e) => {
            ((0, n.isElement)(e) || null === e) && ((v.current = e), s(e)),
              ((0, n.isElement)(E.refs.reference.current) ||
                null === E.refs.reference.current ||
                (null !== e && !(0, n.isElement)(e))) &&
                E.refs.setReference(e);
          },
          [E.refs]
        ),
        R = t.useMemo(
          () => ({
            ...E.refs,
            setReference: y,
            setPositionReference: b,
            domReference: v,
          }),
          [E.refs, y, b]
        ),
        h = t.useMemo(
          () => ({ ...E.elements, domReference: d }),
          [E.elements, d]
        ),
        w = t.useMemo(
          () => ({ ...E, ...u, refs: R, elements: h, nodeId: r }),
          [E, R, h, r, u]
        );
      return (
        f(() => {
          u.dataRef.current.floatingContext = w;
          let e =
            null == p ? void 0 : p.nodesRef.current.find((e) => e.id === r);
          e && (e.context = w);
        }),
        t.useMemo(
          () => ({ ...E, context: w, refs: R, elements: h }),
          [E, R, h, w]
        )
      );
    }
    function F() {
      let e;
      return (
        (null != (e = navigator.userAgentData) && e.platform
          ? e.platform
          : navigator.platform
        )
          .toLowerCase()
          .startsWith("mac") &&
        !navigator.maxTouchPoints &&
        /apple/i.test(navigator.vendor)
      );
    }
    function Y(e, r) {
      void 0 === r && (r = {});
      let { open: i, onOpenChange: c, events: a, dataRef: f, elements: d } = e,
        { enabled: v = !0, visibleOnly: m = !0 } = r,
        p = t.useRef(!1),
        g = t.useRef(-1),
        E = t.useRef(!0);
      t.useEffect(() => {
        if (!v) return;
        let e = (0, n.getWindow)(d.domReference);
        function t() {
          !i &&
            (0, n.isHTMLElement)(d.domReference) &&
            d.domReference === o(s(d.domReference)) &&
            (p.current = !0);
        }
        function r() {
          E.current = !0;
        }
        function u() {
          E.current = !1;
        }
        return (
          e.addEventListener("blur", t),
          F() &&
            (e.addEventListener("keydown", r, !0),
            e.addEventListener("pointerdown", u, !0)),
          () => {
            e.removeEventListener("blur", t),
              F() &&
                (e.removeEventListener("keydown", r, !0),
                e.removeEventListener("pointerdown", u, !0));
          }
        );
      }, [d.domReference, i, v]),
        t.useEffect(() => {
          if (v)
            return (
              a.on("openchange", e),
              () => {
                a.off("openchange", e);
              }
            );
          function e(e) {
            let { reason: t } = e;
            ("reference-press" === t || "escape-key" === t) && (p.current = !0);
          }
        }, [a, v]),
        t.useEffect(
          () => () => {
            T(g);
          },
          []
        );
      let b = t.useMemo(
        () => ({
          onMouseLeave() {
            p.current = !1;
          },
          onFocus(e) {
            if (p.current) return;
            let t = l(e.nativeEvent);
            if (m && (0, n.isElement)(t)) {
              if (F() && !e.relatedTarget) {
                if (
                  !E.current &&
                  !(
                    (0, n.isHTMLElement)(t) &&
                    t.matches(
                      "input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])"
                    )
                  )
                )
                  return;
              } else if (
                !(function (e) {
                  let t;
                  if (
                    !e ||
                    ((t = navigator.userAgentData) && Array.isArray(t.brands)
                      ? t.brands
                          .map((e) => {
                            let { brand: t, version: n } = e;
                            return t + "/" + n;
                          })
                          .join(" ")
                      : navigator.userAgent
                    ).includes("jsdom/")
                  )
                    return !0;
                  try {
                    return e.matches(":focus-visible");
                  } catch (e) {
                    return !0;
                  }
                })(t)
              )
                return;
            }
            c(!0, e.nativeEvent, "focus");
          },
          onBlur(e) {
            p.current = !1;
            let t = e.relatedTarget,
              r = e.nativeEvent,
              l =
                (0, n.isElement)(t) &&
                t.hasAttribute(P("focus-guard")) &&
                "outside" === t.getAttribute("data-type");
            g.current = window.setTimeout(() => {
              var e;
              let n = o(
                d.domReference ? d.domReference.ownerDocument : document
              );
              (!t && n === d.domReference) ||
                u(
                  null == (e = f.current.floatingContext)
                    ? void 0
                    : e.refs.floating.current,
                  n
                ) ||
                u(d.domReference, n) ||
                l ||
                c(!1, r, "focus");
            });
          },
        }),
        [f, d.domReference, c, m]
      );
      return t.useMemo(() => (v ? { reference: b } : {}), [v, b]);
    }
    function U(e, t, n) {
      let r = new Map(),
        o = "item" === n,
        u = e;
      if (o && e) {
        let { [b]: t, [y]: n, ...r } = e;
        u = r;
      }
      return {
        ...("floating" === n && {
          tabIndex: -1,
          "data-floating-ui-focusable": "",
        }),
        ...u,
        ...t
          .map((t) => {
            let r = t ? t[n] : null;
            return "function" == typeof r ? (e ? r(e) : null) : r;
          })
          .concat(e)
          .reduce(
            (e, t) => (
              t &&
                Object.entries(t).forEach((t) => {
                  let [n, u] = t;
                  if (!(o && [b, y].includes(n)))
                    if (0 === n.indexOf("on")) {
                      if ((r.has(n) || r.set(n, []), "function" == typeof u)) {
                        var l;
                        null == (l = r.get(n)) || l.push(u),
                          (e[n] = function () {
                            for (
                              var e, t = arguments.length, o = Array(t), u = 0;
                              u < t;
                              u++
                            )
                              o[u] = arguments[u];
                            return null == (e = r.get(n))
                              ? void 0
                              : e.map((e) => e(...o)).find((e) => void 0 !== e);
                          });
                      }
                    } else e[n] = u;
                }),
              e
            ),
            {}
          ),
      };
    }
    function q(e) {
      void 0 === e && (e = []);
      let n = e.map((e) => (null == e ? void 0 : e.reference)),
        r = e.map((e) => (null == e ? void 0 : e.floating)),
        o = e.map((e) => (null == e ? void 0 : e.item)),
        u = t.useCallback((t) => U(t, e, "reference"), n),
        l = t.useCallback((t) => U(t, e, "floating"), r),
        i = t.useCallback((t) => U(t, e, "item"), o);
      return t.useMemo(
        () => ({ getReferenceProps: u, getFloatingProps: l, getItemProps: i }),
        [u, l, i]
      );
    }
    let G = new Map([
      ["select", "listbox"],
      ["combobox", "listbox"],
      ["label", !1],
    ]);
    function V(e, n) {
      var o, u;
      void 0 === n && (n = {});
      let { open: l, elements: i, floatingId: s } = e,
        { enabled: c = !0, role: a = "dialog" } = n,
        f = L(),
        d = (null == (o = i.domReference) ? void 0 : o.id) || f,
        v = t.useMemo(() => {
          var e, t;
          return (
            (null ==
            (e = (t = i.floating)
              ? t.hasAttribute(r)
                ? t
                : t.querySelector("[" + r + "]") || t
              : null)
              ? void 0
              : e.id) || s
          );
        }, [i.floating, s]),
        m = null != (u = G.get(a)) ? u : a,
        p = null != k(),
        g = t.useMemo(
          () =>
            "tooltip" === m || "label" === a
              ? {
                  ["aria-" + ("label" === a ? "labelledby" : "describedby")]: l
                    ? v
                    : void 0,
                }
              : {
                  "aria-expanded": l ? "true" : "false",
                  "aria-haspopup": "alertdialog" === m ? "dialog" : m,
                  "aria-controls": l ? v : void 0,
                  ...("listbox" === m && { role: "combobox" }),
                  ...("menu" === m && { id: d }),
                  ...("menu" === m && p && { role: "menuitem" }),
                  ...("select" === a && { "aria-autocomplete": "none" }),
                  ...("combobox" === a && { "aria-autocomplete": "list" }),
                },
          [m, v, p, l, d, a]
        ),
        E = t.useMemo(() => {
          let e = { id: v, ...(m && { role: m }) };
          return "tooltip" === m || "label" === a
            ? e
            : { ...e, ...("menu" === m && { "aria-labelledby": d }) };
        }, [m, v, d, a]),
        b = t.useCallback(
          (e) => {
            let { active: t, selected: n } = e,
              r = { role: "option", ...(t && { id: v + "-fui-option" }) };
            switch (a) {
              case "select":
              case "combobox":
                return { ...r, "aria-selected": n };
            }
            return {};
          },
          [v, a]
        );
      return t.useMemo(
        () => (c ? { reference: g, floating: E, item: b } : {}),
        [c, g, E, b]
      );
    }
    e.s(
      [
        "FloatingDelayGroup",
        () => O,
        "useDelayGroup",
        () => B,
        "useDismiss",
        () => X,
        "useFloating",
        () => j,
        "useFocus",
        () => Y,
        "useHover",
        () => S,
        "useInteractions",
        () => q,
        "useMergeRefs",
        () => E,
        "useRole",
        () => V,
      ],
      171189
    );
  },
]);
