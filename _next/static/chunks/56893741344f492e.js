(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  905142,
  (e) => {
    "use strict";
    var t = e.i(271645);
    function n(e = !1, r) {
      let { onOpen: o, onClose: a } = r || {},
        [i, c] = (0, t.useState)(e),
        u = (0, t.useCallback)(() => {
          c((e) => e || (o?.(), !0));
        }, [o]),
        l = (0, t.useCallback)(() => {
          c((e) => (e ? (a?.(), !1) : e));
        }, [a]),
        s = (0, t.useCallback)(() => {
          i ? l() : u();
        }, [l, u, i]);
      return [i, { open: u, close: l, toggle: s }];
    }
    e.s(["useDisclosure", () => n]);
  },
  290571,
  (e) => {
    "use strict";
    var t = function () {
      return (t =
        Object.assign ||
        function (e) {
          for (var t, n = 1, r = arguments.length; n < r; n++)
            for (var o in (t = arguments[n]))
              Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
          return e;
        }).apply(this, arguments);
    };
    function n(e, t) {
      var n = {};
      for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) &&
          0 > t.indexOf(r) &&
          (n[r] = e[r]);
      if (null != e && "function" == typeof Object.getOwnPropertySymbols)
        for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
          0 > t.indexOf(r[o]) &&
            Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
            (n[r[o]] = e[r[o]]);
      return n;
    }
    function r(e, t, n, r) {
      return new (n || (n = Promise))(function (o, a) {
        function i(e) {
          try {
            u(r.next(e));
          } catch (e) {
            a(e);
          }
        }
        function c(e) {
          try {
            u(r.throw(e));
          } catch (e) {
            a(e);
          }
        }
        function u(e) {
          var t;
          e.done
            ? o(e.value)
            : ((t = e.value) instanceof n
                ? t
                : new n(function (e) {
                    e(t);
                  })
              ).then(i, c);
        }
        u((r = r.apply(e, t || [])).next());
      });
    }
    function o(e, t, n) {
      if (n || 2 == arguments.length)
        for (var r, o = 0, a = t.length; o < a; o++)
          (!r && o in t) ||
            (r || (r = Array.prototype.slice.call(t, 0, o)), (r[o] = t[o]));
      return e.concat(r || Array.prototype.slice.call(t));
    }
    "function" == typeof SuppressedError && SuppressedError,
      e.s([
        "__assign",
        () => t,
        "__awaiter",
        () => r,
        "__rest",
        () => n,
        "__spreadArray",
        () => o,
      ]);
  },
  513029,
  329969,
  (e) => {
    "use strict";
    var t = e.i(843476),
      n = e.i(682451),
      r = e.i(271645),
      o = e.i(598526),
      a = e.i(424848),
      i = e.i(143798);
    e.i(207670);
    var c = e.i(171255),
      u = e.i(789549),
      l = e.i(314037),
      s = e.i(644662),
      d = e.i(257942),
      f = { root: "m_9814e45f" };
    let m = { zIndex: (0, o.getDefaultZIndex)("modal") },
      p = (0, i.createVarsResolver)(
        (
          e,
          {
            gradient: t,
            color: r,
            backgroundOpacity: o,
            blur: i,
            radius: u,
            zIndex: l,
          }
        ) => ({
          root: {
            "--overlay-bg":
              t ||
              ((void 0 !== r || void 0 !== o) &&
                (0, c.rgba)(r || "#000", o ?? 0.6)) ||
              void 0,
            "--overlay-filter": i ? `blur(${(0, n.rem)(i)})` : void 0,
            "--overlay-radius": void 0 === u ? void 0 : (0, a.getRadius)(u),
            "--overlay-z-index": l?.toString(),
          },
        })
      ),
      v = (0, d.polymorphicFactory)((e, n) => {
        let r = (0, u.useProps)("Overlay", m, e),
          {
            classNames: o,
            className: a,
            style: i,
            styles: c,
            unstyled: d,
            vars: v,
            fixed: h,
            center: y,
            children: g,
            radius: b,
            zIndex: w,
            gradient: E,
            blur: x,
            color: C,
            backgroundOpacity: M,
            mod: S,
            attributes: _,
            ...B
          } = r,
          R = (0, l.useStyles)({
            name: "Overlay",
            props: r,
            classes: f,
            className: a,
            style: i,
            classNames: o,
            styles: c,
            unstyled: d,
            attributes: _,
            vars: v,
            varsResolver: p,
          });
        return (0, t.jsx)(s.Box, {
          ref: n,
          ...R("root"),
          mod: [{ center: y, fixed: h }, S],
          ...B,
          children: g,
        });
      });
    (v.classes = f),
      (v.displayName = "@mantine/core/Overlay"),
      e.s(["Overlay", () => v], 513029);
    var h = e.i(145500);
    function y({ opened: e, shouldReturnFocus: t = !0 }) {
      let n = (0, r.useRef)(null),
        o = () => {
          n.current &&
            "focus" in n.current &&
            "function" == typeof n.current.focus &&
            n.current?.focus({ preventScroll: !0 });
        };
      return (
        (0, h.useDidUpdate)(() => {
          let r = -1,
            a = (e) => {
              "Tab" === e.key && window.clearTimeout(r);
            };
          return (
            document.addEventListener("keydown", a),
            e
              ? (n.current = document.activeElement)
              : t && (r = window.setTimeout(o, 10)),
            () => {
              window.clearTimeout(r),
                document.removeEventListener("keydown", a);
            }
          );
        }, [e, t]),
        o
      );
    }
    e.s(["useFocusReturn", () => y], 329969);
  },
  587611,
  (e) => {
    "use strict";
    var t = e.i(843476),
      n = e.i(271645);
    e.i(247167);
    let r = /input|select|textarea|button|object/,
      o = "a, input, select, textarea, button, object, [tabindex]";
    function a(e) {
      let t = e.getAttribute("tabindex");
      return null === t && (t = void 0), parseInt(t, 10);
    }
    function i(e) {
      let t = e.nodeName.toLowerCase(),
        n = !Number.isNaN(a(e));
      return (
        ((r.test(t) && !e.disabled) ||
          (e instanceof HTMLAnchorElement && e.href) ||
          n) &&
        (function (e) {
          if (
            e.getAttribute("aria-hidden") ||
            e.getAttribute("hidden") ||
            "hidden" === e.getAttribute("type")
          )
            return !1;
          let t = e;
          for (; t && t !== document.body && 11 !== t.nodeType; ) {
            if ("none" === t.style.display) return !1;
            t = t.parentNode;
          }
          return !0;
        })(e)
      );
    }
    function c(e) {
      let t = a(e);
      return (Number.isNaN(t) || t >= 0) && i(e);
    }
    var u = e.i(931316),
      l = e.i(795991);
    e.i(207670);
    var s = e.i(789549),
      d = e.i(314037),
      f = e.i(644662),
      m = e.i(321879),
      p = { root: "m_515a97f8" };
    let v = (0, m.factory)((e, n) => {
      let r = (0, s.useProps)("VisuallyHidden", null, e),
        {
          classNames: o,
          className: a,
          style: i,
          styles: c,
          unstyled: u,
          vars: l,
          attributes: m,
          ...v
        } = r,
        h = (0, d.useStyles)({
          name: "VisuallyHidden",
          classes: p,
          props: r,
          className: a,
          style: i,
          classNames: o,
          styles: c,
          unstyled: u,
          attributes: m,
        });
      return (0, t.jsx)(f.Box, {
        component: "span",
        ref: n,
        ...h("root"),
        ...v,
      });
    });
    function h({
      children: e,
      active: t = !0,
      refProp: r = "ref",
      innerRef: a,
    }) {
      let s = (function (e = !0) {
          let t = (0, n.useRef)(null),
            r = (e) => {
              let t = e.querySelector("[data-autofocus]");
              if (!t) {
                let n = Array.from(e.querySelectorAll(o));
                !(t = n.find(c) || n.find(i) || null) && i(e) && (t = e);
              }
              t && t.focus({ preventScroll: !0 });
            },
            a = (0, n.useCallback)(
              (n) => {
                e &&
                  null !== n &&
                  t.current !== n &&
                  (n
                    ? (setTimeout(() => {
                        n.getRootNode() && r(n);
                      }),
                      (t.current = n))
                    : (t.current = null));
              },
              [e]
            );
          return (
            (0, n.useEffect)(() => {
              if (!e) return;
              t.current && setTimeout(() => r(t.current));
              let n = (e) => {
                "Tab" === e.key &&
                  t.current &&
                  (function (e, t) {
                    let n = Array.from(e.querySelectorAll(o)).filter(c);
                    if (!n.length) return t.preventDefault();
                    let r = n[t.shiftKey ? 0 : n.length - 1],
                      a = e.getRootNode(),
                      i = r === a.activeElement || e === a.activeElement,
                      u = a.activeElement;
                    if (
                      ("INPUT" === u.tagName &&
                        "radio" === u.getAttribute("type") &&
                        (i = n
                          .filter(
                            (e) =>
                              "radio" === e.getAttribute("type") &&
                              e.getAttribute("name") === u.getAttribute("name")
                          )
                          .includes(r)),
                      !i)
                    )
                      return;
                    t.preventDefault();
                    let l = n[t.shiftKey ? n.length - 1 : 0];
                    l && l.focus();
                  })(t.current, e);
              };
              return (
                document.addEventListener("keydown", n),
                () => document.removeEventListener("keydown", n)
              );
            }, [e]),
            a
          );
        })(t),
        d = (0, u.useMergedRef)(s, a);
      return (0, l.isElement)(e) ? (0, n.cloneElement)(e, { [r]: d }) : e;
    }
    function y(e) {
      return (0, t.jsx)(v, { tabIndex: -1, "data-autofocus": !0, ...e });
    }
    (v.classes = p),
      (v.displayName = "@mantine/core/VisuallyHidden"),
      (h.displayName = "@mantine/core/FocusTrap"),
      (y.displayName = "@mantine/core/FocusTrapInitialFocus"),
      (h.InitialFocus = y),
      e.s(["FocusTrap", () => h], 587611);
  },
  985369,
  (e) => {
    "use strict";
    var t,
      n,
      r,
      o,
      a,
      i,
      c,
      u = e.i(290571),
      l = e.i(271645),
      s = "right-scroll-bar-position",
      d = "width-before-scroll-bar";
    function f(e, t) {
      return "function" == typeof e ? e(t) : e && (e.current = t), e;
    }
    var m = "undefined" != typeof window ? l.useLayoutEffect : l.useEffect,
      p = new WeakMap(),
      v =
        (void 0 === t && (t = {}),
        ((void 0 === n &&
          (n = function (e) {
            return e;
          }),
        (r = []),
        (o = !1),
        (a = {
          read: function () {
            if (o)
              throw Error(
                "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`."
              );
            return r.length ? r[r.length - 1] : null;
          },
          useMedium: function (e) {
            var t = n(e, o);
            return (
              r.push(t),
              function () {
                r = r.filter(function (e) {
                  return e !== t;
                });
              }
            );
          },
          assignSyncMedium: function (e) {
            for (o = !0; r.length; ) {
              var t = r;
              (r = []), t.forEach(e);
            }
            r = {
              push: function (t) {
                return e(t);
              },
              filter: function () {
                return r;
              },
            };
          },
          assignMedium: function (e) {
            o = !0;
            var t = [];
            if (r.length) {
              var n = r;
              (r = []), n.forEach(e), (t = r);
            }
            var a = function () {
                var n = t;
                (t = []), n.forEach(e);
              },
              i = function () {
                return Promise.resolve().then(a);
              };
            i(),
              (r = {
                push: function (e) {
                  t.push(e), i();
                },
                filter: function (e) {
                  return (t = t.filter(e)), r;
                },
              });
          },
        })).options = (0, u.__assign)({ async: !0, ssr: !1 }, t)),
        a),
      h = function () {},
      y = l.forwardRef(function (e, t) {
        var n,
          r,
          o,
          a,
          i = l.useRef(null),
          c = l.useState({
            onScrollCapture: h,
            onWheelCapture: h,
            onTouchMoveCapture: h,
          }),
          s = c[0],
          d = c[1],
          y = e.forwardProps,
          g = e.children,
          b = e.className,
          w = e.removeScrollBar,
          E = e.enabled,
          x = e.shards,
          C = e.sideCar,
          M = e.noRelative,
          S = e.noIsolation,
          _ = e.inert,
          B = e.allowPinchZoom,
          R = e.as,
          N = e.gapMode,
          T = (0, u.__rest)(e, [
            "forwardProps",
            "children",
            "className",
            "removeScrollBar",
            "enabled",
            "shards",
            "sideCar",
            "noRelative",
            "noIsolation",
            "inert",
            "allowPinchZoom",
            "as",
            "gapMode",
          ]),
          k =
            ((n = [i, t]),
            (r = function (e) {
              return n.forEach(function (t) {
                return f(t, e);
              });
            }),
            ((o = (0, l.useState)(function () {
              return {
                value: null,
                callback: r,
                facade: {
                  get current() {
                    return o.value;
                  },
                  set current(value) {
                    var e = o.value;
                    e !== value && ((o.value = value), o.callback(value, e));
                  },
                },
              };
            })[0]).callback = r),
            (a = o.facade),
            m(
              function () {
                var e = p.get(a);
                if (e) {
                  var t = new Set(e),
                    r = new Set(n),
                    o = a.current;
                  t.forEach(function (e) {
                    r.has(e) || f(e, null);
                  }),
                    r.forEach(function (e) {
                      t.has(e) || f(e, o);
                    });
                }
                p.set(a, n);
              },
              [n]
            ),
            a),
          P = (0, u.__assign)((0, u.__assign)({}, T), s);
        return l.createElement(
          l.Fragment,
          null,
          E &&
            l.createElement(C, {
              sideCar: v,
              removeScrollBar: w,
              shards: x,
              noRelative: M,
              noIsolation: S,
              inert: _,
              setCallbacks: d,
              allowPinchZoom: !!B,
              lockRef: i,
              gapMode: N,
            }),
          y
            ? l.cloneElement(
                l.Children.only(g),
                (0, u.__assign)((0, u.__assign)({}, P), { ref: k })
              )
            : l.createElement(
                void 0 === R ? "div" : R,
                (0, u.__assign)({}, P, { className: b, ref: k }),
                g
              )
        );
      });
    (y.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 }),
      (y.classNames = { fullWidth: d, zeroRight: s });
    var g = function (e) {
      var t = e.sideCar,
        n = (0, u.__rest)(e, ["sideCar"]);
      if (!t)
        throw Error(
          "Sidecar: please provide `sideCar` property to import the right car"
        );
      var r = t.read();
      if (!r) throw Error("Sidecar medium not found");
      return l.createElement(r, (0, u.__assign)({}, n));
    };
    g.isSideCarExport = !0;
    var b = function () {
        var e = 0,
          t = null;
        return {
          add: function (n) {
            if (
              0 == e &&
              (t = (function () {
                if (!document) return null;
                var e = document.createElement("style");
                e.type = "text/css";
                var t =
                  c ||
                  ("undefined" != typeof __webpack_nonce__
                    ? __webpack_nonce__
                    : void 0);
                return t && e.setAttribute("nonce", t), e;
              })())
            ) {
              var r, o;
              (r = t).styleSheet
                ? (r.styleSheet.cssText = n)
                : r.appendChild(document.createTextNode(n)),
                (o = t),
                (
                  document.head || document.getElementsByTagName("head")[0]
                ).appendChild(o);
            }
            e++;
          },
          remove: function () {
            --e ||
              !t ||
              (t.parentNode && t.parentNode.removeChild(t), (t = null));
          },
        };
      },
      w = function () {
        var e = b();
        return function (t, n) {
          l.useEffect(
            function () {
              return (
                e.add(t),
                function () {
                  e.remove();
                }
              );
            },
            [t && n]
          );
        };
      },
      E = function () {
        var e = w();
        return function (t) {
          return e(t.styles, t.dynamic), null;
        };
      },
      x = { left: 0, top: 0, right: 0, gap: 0 },
      C = function (e) {
        return parseInt(e || "", 10) || 0;
      },
      M = function (e) {
        var t = window.getComputedStyle(document.body),
          n = t["padding" === e ? "paddingLeft" : "marginLeft"],
          r = t["padding" === e ? "paddingTop" : "marginTop"],
          o = t["padding" === e ? "paddingRight" : "marginRight"];
        return [C(n), C(r), C(o)];
      },
      S = function (e) {
        if ((void 0 === e && (e = "margin"), "undefined" == typeof window))
          return x;
        var t = M(e),
          n = document.documentElement.clientWidth,
          r = window.innerWidth;
        return {
          left: t[0],
          top: t[1],
          right: t[2],
          gap: Math.max(0, r - n + t[2] - t[0]),
        };
      },
      _ = E(),
      B = "data-scroll-locked",
      R = function (e, t, n, r) {
        var o = e.left,
          a = e.top,
          i = e.right,
          c = e.gap;
        return (
          void 0 === n && (n = "margin"),
          "\n  ."
            .concat("with-scroll-bars-hidden", " {\n   overflow: hidden ")
            .concat(r, ";\n   padding-right: ")
            .concat(c, "px ")
            .concat(r, ";\n  }\n  body[")
            .concat(B, "] {\n    overflow: hidden ")
            .concat(r, ";\n    overscroll-behavior: contain;\n    ")
            .concat(
              [
                t && "position: relative ".concat(r, ";"),
                "margin" === n &&
                  "\n    padding-left: "
                    .concat(o, "px;\n    padding-top: ")
                    .concat(a, "px;\n    padding-right: ")
                    .concat(
                      i,
                      "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: "
                    )
                    .concat(c, "px ")
                    .concat(r, ";\n    "),
                "padding" === n &&
                  "padding-right: ".concat(c, "px ").concat(r, ";"),
              ]
                .filter(Boolean)
                .join(""),
              "\n  }\n  \n  ."
            )
            .concat(s, " {\n    right: ")
            .concat(c, "px ")
            .concat(r, ";\n  }\n  \n  .")
            .concat(d, " {\n    margin-right: ")
            .concat(c, "px ")
            .concat(r, ";\n  }\n  \n  .")
            .concat(s, " .")
            .concat(s, " {\n    right: 0 ")
            .concat(r, ";\n  }\n  \n  .")
            .concat(d, " .")
            .concat(d, " {\n    margin-right: 0 ")
            .concat(r, ";\n  }\n  \n  body[")
            .concat(B, "] {\n    ")
            .concat("--removed-body-scroll-bar-size", ": ")
            .concat(c, "px;\n  }\n")
        );
      },
      N = function () {
        var e = parseInt(document.body.getAttribute(B) || "0", 10);
        return isFinite(e) ? e : 0;
      },
      T = function () {
        l.useEffect(function () {
          return (
            document.body.setAttribute(B, (N() + 1).toString()),
            function () {
              var e = N() - 1;
              e <= 0
                ? document.body.removeAttribute(B)
                : document.body.setAttribute(B, e.toString());
            }
          );
        }, []);
      },
      k = function (e) {
        var t = e.noRelative,
          n = e.noImportant,
          r = e.gapMode,
          o = void 0 === r ? "margin" : r;
        T();
        var a = l.useMemo(
          function () {
            return S(o);
          },
          [o]
        );
        return l.createElement(_, {
          styles: R(a, !t, o, n ? "" : "!important"),
        });
      },
      P = !1;
    if ("undefined" != typeof window)
      try {
        var j = Object.defineProperty({}, "passive", {
          get: function () {
            return (P = !0), !0;
          },
        });
        window.addEventListener("test", j, j),
          window.removeEventListener("test", j, j);
      } catch (e) {
        P = !1;
      }
    var A = !!P && { passive: !1 },
      O = function (e, t) {
        if (!(e instanceof Element)) return !1;
        var n = window.getComputedStyle(e);
        return (
          "hidden" !== n[t] &&
          (n.overflowY !== n.overflowX ||
            "TEXTAREA" === e.tagName ||
            "visible" !== n[t])
        );
      },
      I = function (e, t) {
        var n = t.ownerDocument,
          r = t;
        do {
          if (
            ("undefined" != typeof ShadowRoot &&
              r instanceof ShadowRoot &&
              (r = r.host),
            L(e, r))
          ) {
            var o = F(e, r);
            if (o[1] > o[2]) return !0;
          }
          r = r.parentNode;
        } while (r && r !== n.body);
        return !1;
      },
      L = function (e, t) {
        return "v" === e ? O(t, "overflowY") : O(t, "overflowX");
      },
      F = function (e, t) {
        return "v" === e
          ? [t.scrollTop, t.scrollHeight, t.clientHeight]
          : [t.scrollLeft, t.scrollWidth, t.clientWidth];
      },
      D = function (e, t, n, r, o) {
        var a,
          i =
            ((a = window.getComputedStyle(t).direction),
            "h" === e && "rtl" === a ? -1 : 1),
          c = i * r,
          u = n.target,
          l = t.contains(u),
          s = !1,
          d = c > 0,
          f = 0,
          m = 0;
        do {
          if (!u) break;
          var p = F(e, u),
            v = p[0],
            h = p[1] - p[2] - i * v;
          (v || h) && L(e, u) && ((f += h), (m += v));
          var y = u.parentNode;
          u = y && y.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? y.host : y;
        } while (
          (!l && u !== document.body) ||
          (l && (t.contains(u) || t === u))
        );
        return (
          d && ((o && 1 > Math.abs(f)) || (!o && c > f))
            ? (s = !0)
            : !d && ((o && 1 > Math.abs(m)) || (!o && -c > m)) && (s = !0),
          s
        );
      },
      H = function (e) {
        return "changedTouches" in e
          ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
          : [0, 0];
      },
      W = function (e) {
        return [e.deltaX, e.deltaY];
      },
      z = function (e) {
        return e && "current" in e ? e.current : e;
      },
      X = 0,
      Y = [];
    let Z =
      ((i = function (e) {
        var t = l.useRef([]),
          n = l.useRef([0, 0]),
          r = l.useRef(),
          o = l.useState(X++)[0],
          a = l.useState(E)[0],
          i = l.useRef(e);
        l.useEffect(
          function () {
            i.current = e;
          },
          [e]
        ),
          l.useEffect(
            function () {
              if (e.inert) {
                document.body.classList.add("block-interactivity-".concat(o));
                var t = (0, u.__spreadArray)(
                  [e.lockRef.current],
                  (e.shards || []).map(z),
                  !0
                ).filter(Boolean);
                return (
                  t.forEach(function (e) {
                    return e.classList.add("allow-interactivity-".concat(o));
                  }),
                  function () {
                    document.body.classList.remove(
                      "block-interactivity-".concat(o)
                    ),
                      t.forEach(function (e) {
                        return e.classList.remove(
                          "allow-interactivity-".concat(o)
                        );
                      });
                  }
                );
              }
            },
            [e.inert, e.lockRef.current, e.shards]
          );
        var c = l.useCallback(function (e, t) {
            if (
              ("touches" in e && 2 === e.touches.length) ||
              ("wheel" === e.type && e.ctrlKey)
            )
              return !i.current.allowPinchZoom;
            var o,
              a = H(e),
              c = n.current,
              u = "deltaX" in e ? e.deltaX : c[0] - a[0],
              l = "deltaY" in e ? e.deltaY : c[1] - a[1],
              s = e.target,
              d = Math.abs(u) > Math.abs(l) ? "h" : "v";
            if ("touches" in e && "h" === d && "range" === s.type) return !1;
            var f = window.getSelection(),
              m = f && f.anchorNode;
            if (m && (m === s || m.contains(s))) return !1;
            var p = I(d, s);
            if (!p) return !0;
            if (
              (p ? (o = d) : ((o = "v" === d ? "h" : "v"), (p = I(d, s))), !p)
            )
              return !1;
            if (
              (!r.current &&
                "changedTouches" in e &&
                (u || l) &&
                (r.current = o),
              !o)
            )
              return !0;
            var v = r.current || o;
            return D(v, t, e, "h" === v ? u : l, !0);
          }, []),
          s = l.useCallback(function (e) {
            if (Y.length && Y[Y.length - 1] === a) {
              var n = "deltaY" in e ? W(e) : H(e),
                r = t.current.filter(function (t) {
                  var r;
                  return (
                    t.name === e.type &&
                    (t.target === e.target || e.target === t.shadowParent) &&
                    ((r = t.delta), r[0] === n[0] && r[1] === n[1])
                  );
                })[0];
              if (r && r.should) {
                e.cancelable && e.preventDefault();
                return;
              }
              if (!r) {
                var o = (i.current.shards || [])
                  .map(z)
                  .filter(Boolean)
                  .filter(function (t) {
                    return t.contains(e.target);
                  });
                (o.length > 0 ? c(e, o[0]) : !i.current.noIsolation) &&
                  e.cancelable &&
                  e.preventDefault();
              }
            }
          }, []),
          d = l.useCallback(function (e, n, r, o) {
            var a = {
              name: e,
              delta: n,
              target: r,
              should: o,
              shadowParent: (function (e) {
                for (var t = null; null !== e; )
                  e instanceof ShadowRoot && ((t = e.host), (e = e.host)),
                    (e = e.parentNode);
                return t;
              })(r),
            };
            t.current.push(a),
              setTimeout(function () {
                t.current = t.current.filter(function (e) {
                  return e !== a;
                });
              }, 1);
          }, []),
          f = l.useCallback(function (e) {
            (n.current = H(e)), (r.current = void 0);
          }, []),
          m = l.useCallback(function (t) {
            d(t.type, W(t), t.target, c(t, e.lockRef.current));
          }, []),
          p = l.useCallback(function (t) {
            d(t.type, H(t), t.target, c(t, e.lockRef.current));
          }, []);
        l.useEffect(function () {
          return (
            Y.push(a),
            e.setCallbacks({
              onScrollCapture: m,
              onWheelCapture: m,
              onTouchMoveCapture: p,
            }),
            document.addEventListener("wheel", s, A),
            document.addEventListener("touchmove", s, A),
            document.addEventListener("touchstart", f, A),
            function () {
              (Y = Y.filter(function (e) {
                return e !== a;
              })),
                document.removeEventListener("wheel", s, A),
                document.removeEventListener("touchmove", s, A),
                document.removeEventListener("touchstart", f, A);
            }
          );
        }, []);
        var v = e.removeScrollBar,
          h = e.inert;
        return l.createElement(
          l.Fragment,
          null,
          h
            ? l.createElement(a, {
                styles: "\n  .block-interactivity-"
                  .concat(
                    o,
                    " {pointer-events: none;}\n  .allow-interactivity-"
                  )
                  .concat(o, " {pointer-events: all;}\n"),
              })
            : null,
          v
            ? l.createElement(k, {
                noRelative: e.noRelative,
                gapMode: e.gapMode,
              })
            : null
        );
      }),
      v.useMedium(i),
      g);
    var K = l.forwardRef(function (e, t) {
      return l.createElement(y, (0, u.__assign)({}, e, { ref: t, sideCar: Z }));
    });
    (K.classNames = y.classNames), e.s(["RemoveScroll", 0, K], 985369);
  },
  276728,
  958069,
  799756,
  927318,
  (e) => {
    "use strict";
    var t = e.i(843476),
      n = e.i(271645),
      r = e.i(207670),
      o = e.i(644662);
    let [a, i] = (0, e.i(384660).createSafeContext)(
      "ModalBase component was not found in tree"
    );
    e.s(["ModalBaseProvider", () => a, "useModalBaseContext", () => i], 958069);
    var c = {
      title: "m_615af6c9",
      header: "m_b5489c3c",
      inner: "m_60c222c7",
      content: "m_fd1ab0aa",
      close: "m_606cb269",
      body: "m_5df29311",
    };
    e.s(["default", () => c], 799756);
    let u = (0, n.forwardRef)(({ className: e, ...a }, u) => {
      let l,
        s =
          ((l = i()),
          (0, n.useEffect)(
            () => (l.setBodyMounted(!0), () => l.setBodyMounted(!1)),
            []
          ),
          l.getBodyId()),
        d = i();
      return (0, t.jsx)(o.Box, {
        ref: u,
        ...a,
        id: s,
        className: (0, r.default)({ [c.body]: !d.unstyled }, e),
      });
    });
    (u.displayName = "@mantine/core/ModalBaseBody"),
      e.s(["ModalBaseBody", () => u], 276728);
    var l = e.i(27556);
    let s = (0, n.forwardRef)(({ className: e, onClick: n, ...o }, a) => {
      let u = i();
      return (0, t.jsx)(l.CloseButton, {
        ref: a,
        ...o,
        onClick: (e) => {
          u.onClose(), n?.(e);
        },
        className: (0, r.default)({ [c.close]: !u.unstyled }, e),
        unstyled: u.unstyled,
      });
    });
    (s.displayName = "@mantine/core/ModalBaseCloseButton"),
      e.s(["ModalBaseCloseButton", () => s], 927318);
  },
  55150,
  (e) => {
    "use strict";
    var t = e.i(843476);
    e.i(271645);
    var n = e.i(424848),
      r = e.i(143798);
    e.i(207670);
    var o = e.i(789549),
      a = e.i(314037),
      i = e.i(644662),
      c = e.i(257942),
      u = { root: "m_1b7284a3" };
    let l = (0, r.createVarsResolver)((e, { radius: t, shadow: r }) => ({
        root: {
          "--paper-radius": void 0 === t ? void 0 : (0, n.getRadius)(t),
          "--paper-shadow": (0, n.getShadow)(r),
        },
      })),
      s = (0, c.polymorphicFactory)((e, n) => {
        let r = (0, o.useProps)("Paper", null, e),
          {
            classNames: c,
            className: s,
            style: d,
            styles: f,
            unstyled: m,
            withBorder: p,
            vars: v,
            radius: h,
            shadow: y,
            variant: g,
            mod: b,
            attributes: w,
            ...E
          } = r,
          x = (0, a.useStyles)({
            name: "Paper",
            props: r,
            classes: u,
            className: s,
            style: d,
            classNames: c,
            styles: f,
            unstyled: m,
            attributes: w,
            vars: v,
            varsResolver: l,
          });
        return (0, t.jsx)(i.Box, {
          ref: n,
          mod: [{ "data-with-border": p }, b],
          ...x("root"),
          variant: g,
          ...E,
        });
      });
    (s.classes = u),
      (s.displayName = "@mantine/core/Paper"),
      e.s(["Paper", () => s], 55150);
  },
  536002,
  926160,
  539986,
  6809,
  (e) => {
    "use strict";
    var t = e.i(843476),
      n = e.i(271645),
      r = e.i(207670),
      o = e.i(587611),
      a = e.i(55150),
      i = e.i(298193),
      c = e.i(958069),
      u = e.i(799756);
    let l = (0, n.forwardRef)(
      (
        {
          transitionProps: e,
          className: n,
          innerProps: l,
          onKeyDown: s,
          style: d,
          ...f
        },
        m
      ) => {
        let p = (0, c.useModalBaseContext)();
        return (0, t.jsx)(i.Transition, {
          mounted: p.opened,
          transition: "pop",
          ...p.transitionProps,
          onExited: () => {
            p.onExitTransitionEnd?.(), p.transitionProps?.onExited?.();
          },
          onEntered: () => {
            p.onEnterTransitionEnd?.(), p.transitionProps?.onEntered?.();
          },
          ...e,
          children: (e) =>
            (0, t.jsx)("div", {
              ...l,
              className: (0, r.default)(
                { [u.default.inner]: !p.unstyled },
                l.className
              ),
              children: (0, t.jsx)(o.FocusTrap, {
                active: p.opened && p.trapFocus,
                innerRef: m,
                children: (0, t.jsx)(a.Paper, {
                  ...f,
                  component: "section",
                  role: "dialog",
                  tabIndex: -1,
                  "aria-modal": !0,
                  "aria-describedby": p.bodyMounted ? p.getBodyId() : void 0,
                  "aria-labelledby": p.titleMounted ? p.getTitleId() : void 0,
                  style: [d, e],
                  className: (0, r.default)(
                    { [u.default.content]: !p.unstyled },
                    n
                  ),
                  unstyled: p.unstyled,
                  children: f.children,
                }),
              }),
            }),
        });
      }
    );
    function s({ children: e }) {
      return (0, t.jsx)(t.Fragment, { children: e });
    }
    (l.displayName = "@mantine/core/ModalBaseContent"),
      e.s(["ModalBaseContent", () => l], 536002),
      e.s(["NativeScrollArea", () => s], 926160);
    var d = e.i(644662);
    let f = (0, n.forwardRef)(({ className: e, ...n }, o) => {
      let a = (0, c.useModalBaseContext)();
      return (0, t.jsx)(d.Box, {
        component: "header",
        ref: o,
        className: (0, r.default)({ [u.default.header]: !a.unstyled }, e),
        ...n,
      });
    });
    (f.displayName = "@mantine/core/ModalBaseHeader"),
      e.s(["ModalBaseHeader", () => f], 539986);
    var m = e.i(513029);
    let p = { duration: 200, timingFunction: "ease", transition: "fade" },
      v = (0, n.forwardRef)(
        ({ onClick: e, transitionProps: n, style: r, visible: o, ...a }, u) => {
          let l,
            s = (0, c.useModalBaseContext)(),
            d =
              ((l = (0, c.useModalBaseContext)()),
              { ...p, ...l.transitionProps, ...n });
          return (0, t.jsx)(i.Transition, {
            mounted: void 0 !== o ? o : s.opened,
            ...d,
            transition: "fade",
            children: (n) =>
              (0, t.jsx)(m.Overlay, {
                ref: u,
                fixed: !0,
                style: [r, n],
                zIndex: s.zIndex,
                unstyled: s.unstyled,
                onClick: (t) => {
                  e?.(t), s.closeOnClickOutside && s.onClose();
                },
                ...a,
              }),
          });
        }
      );
    (v.displayName = "@mantine/core/ModalBaseOverlay"),
      e.s(["ModalBaseOverlay", () => v], 6809);
  },
  19060,
  987471,
  (e) => {
    "use strict";
    var t = e.i(843476),
      n = e.i(271645),
      r = e.i(985369),
      o = e.i(598526),
      a = e.i(424848),
      i = e.i(207670),
      c = e.i(644662),
      u = e.i(595556),
      l = e.i(958069),
      s = e.i(751937),
      d = e.i(329969),
      f = e.i(736597);
    let m = (0, n.forwardRef)(
      (
        {
          keepMounted: e,
          opened: i,
          onClose: m,
          id: p,
          transitionProps: v,
          onExitTransitionEnd: h,
          onEnterTransitionEnd: y,
          trapFocus: g,
          closeOnEscape: b,
          returnFocus: w,
          closeOnClickOutside: E,
          withinPortal: x,
          portalProps: C,
          lockScroll: M,
          children: S,
          zIndex: _,
          shadow: B,
          padding: R,
          __vars: N,
          unstyled: T,
          removeScrollProps: k,
          ...P
        },
        j
      ) => {
        let {
            _id: A,
            titleMounted: O,
            bodyMounted: I,
            shouldLockScroll: L,
            setTitleMounted: F,
            setBodyMounted: D,
          } = (function ({
            id: e,
            transitionProps: t,
            opened: r,
            trapFocus: o,
            closeOnEscape: a,
            onClose: i,
            returnFocus: c,
          }) {
            var u, l, m;
            let p = (0, s.useId)(e),
              [v, h] = (0, n.useState)(!1),
              [y, g] = (0, n.useState)(!1),
              b = (function ({ opened: e, transitionDuration: t }) {
                let [r, o] = (0, n.useState)(e),
                  a = (0, n.useRef)(-1),
                  i = (0, f.useReducedMotion)() ? 0 : t;
                return (
                  (0, n.useEffect)(
                    () => (
                      e
                        ? (o(!0), window.clearTimeout(a.current))
                        : 0 === i
                        ? o(!1)
                        : (a.current = window.setTimeout(() => o(!1), i)),
                      () => window.clearTimeout(a.current)
                    ),
                    [e, i]
                  ),
                  r
                );
              })({
                opened: r,
                transitionDuration:
                  "number" == typeof t?.duration ? t?.duration : 200,
              });
            return (
              (u = "keydown"),
              (l = (e) => {
                "Escape" === e.key &&
                  a &&
                  !e.isComposing &&
                  r &&
                  e.target?.getAttribute("data-mantine-stop-propagation") !==
                    "true" &&
                  i();
              }),
              (m = { capture: !0 }),
              (0, n.useEffect)(
                () => (
                  window.addEventListener(u, l, m),
                  () => window.removeEventListener(u, l, m)
                ),
                [u, l]
              ),
              (0, d.useFocusReturn)({ opened: r, shouldReturnFocus: o && c }),
              {
                _id: p,
                titleMounted: v,
                bodyMounted: y,
                shouldLockScroll: b,
                setTitleMounted: h,
                setBodyMounted: g,
              }
            );
          })({
            id: p,
            transitionProps: v,
            opened: i,
            trapFocus: g,
            closeOnEscape: b,
            onClose: m,
            returnFocus: w,
          }),
          { key: H, ...W } = k || {};
        return (0, t.jsx)(u.OptionalPortal, {
          ...C,
          withinPortal: x,
          children: (0, t.jsx)(l.ModalBaseProvider, {
            value: {
              opened: i,
              onClose: m,
              closeOnClickOutside: E,
              onExitTransitionEnd: h,
              onEnterTransitionEnd: y,
              transitionProps: { ...v, keepMounted: e },
              getTitleId: () => `${A}-title`,
              getBodyId: () => `${A}-body`,
              titleMounted: O,
              bodyMounted: I,
              setTitleMounted: F,
              setBodyMounted: D,
              trapFocus: g,
              closeOnEscape: b,
              zIndex: _,
              unstyled: T,
            },
            children: (0, t.jsx)(
              r.RemoveScroll,
              {
                enabled: L && M,
                ...W,
                children: (0, t.jsx)(c.Box, {
                  ref: j,
                  ...P,
                  __vars: {
                    ...N,
                    "--mb-z-index": (
                      _ || (0, o.getDefaultZIndex)("modal")
                    ).toString(),
                    "--mb-shadow": (0, a.getShadow)(B),
                    "--mb-padding": (0, a.getSpacing)(R),
                  },
                  children: S,
                }),
              },
              H
            ),
          }),
        });
      }
    );
    (m.displayName = "@mantine/core/ModalBase"),
      e.s(["ModalBase", () => m], 19060);
    var p = e.i(799756);
    let v = (0, n.forwardRef)(({ className: e, ...r }, o) => {
      let a,
        u =
          ((a = (0, l.useModalBaseContext)()),
          (0, n.useEffect)(
            () => (a.setTitleMounted(!0), () => a.setTitleMounted(!1)),
            []
          ),
          a.getTitleId()),
        s = (0, l.useModalBaseContext)();
      return (0, t.jsx)(c.Box, {
        component: "h2",
        ref: o,
        className: (0, i.default)({ [p.default.title]: !s.unstyled }, e),
        ...r,
        id: u,
      });
    });
    (v.displayName = "@mantine/core/ModalBaseTitle"),
      e.s(["ModalBaseTitle", () => v], 987471);
  },
]);
