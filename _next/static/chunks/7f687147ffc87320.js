(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  205918,
  (e, t, s) => {
    e.e,
      (t.exports = (function () {
        "use strict";
        var e,
          t,
          s =
            /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
          i =
            /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,
          r = {
            years: 31536e6,
            months: 2628e6,
            days: 864e5,
            hours: 36e5,
            minutes: 6e4,
            seconds: 1e3,
            milliseconds: 1,
            weeks: 6048e5,
          },
          l = function (e) {
            return e instanceof h;
          },
          a = function (e, t, s) {
            return new h(e, s, t.$l);
          },
          n = function (e) {
            return t.p(e) + "s";
          },
          o = function (e) {
            return e < 0;
          },
          d = function (e) {
            return o(e) ? Math.ceil(e) : Math.floor(e);
          },
          c = function (e, t) {
            return e
              ? o(e)
                ? { negative: !0, format: "" + Math.abs(e) + t }
                : { negative: !1, format: "" + e + t }
              : { negative: !1, format: "" };
          },
          h = (function () {
            function o(e, t, s) {
              var l = this;
              if (
                ((this.$d = {}),
                (this.$l = s),
                void 0 === e && ((this.$ms = 0), this.parseFromMilliseconds()),
                t)
              )
                return a(e * r[n(t)], this);
              if ("number" == typeof e)
                return (this.$ms = e), this.parseFromMilliseconds(), this;
              if ("object" == typeof e)
                return (
                  Object.keys(e).forEach(function (t) {
                    l.$d[n(t)] = e[t];
                  }),
                  this.calMilliseconds(),
                  this
                );
              if ("string" == typeof e) {
                var o = e.match(i);
                if (o) {
                  var d = o.slice(2).map(function (e) {
                    return null != e ? Number(e) : 0;
                  });
                  return (
                    (this.$d.years = d[0]),
                    (this.$d.months = d[1]),
                    (this.$d.weeks = d[2]),
                    (this.$d.days = d[3]),
                    (this.$d.hours = d[4]),
                    (this.$d.minutes = d[5]),
                    (this.$d.seconds = d[6]),
                    this.calMilliseconds(),
                    this
                  );
                }
              }
              return this;
            }
            var h = o.prototype;
            return (
              (h.calMilliseconds = function () {
                var e = this;
                this.$ms = Object.keys(this.$d).reduce(function (t, s) {
                  return t + (e.$d[s] || 0) * r[s];
                }, 0);
              }),
              (h.parseFromMilliseconds = function () {
                var e = this.$ms;
                (this.$d.years = d(e / 31536e6)),
                  (e %= 31536e6),
                  (this.$d.months = d(e / 2628e6)),
                  (e %= 2628e6),
                  (this.$d.days = d(e / 864e5)),
                  (e %= 864e5),
                  (this.$d.hours = d(e / 36e5)),
                  (e %= 36e5),
                  (this.$d.minutes = d(e / 6e4)),
                  (e %= 6e4),
                  (this.$d.seconds = d(e / 1e3)),
                  (e %= 1e3),
                  (this.$d.milliseconds = e);
              }),
              (h.toISOString = function () {
                var e = c(this.$d.years, "Y"),
                  t = c(this.$d.months, "M"),
                  s = +this.$d.days || 0;
                this.$d.weeks && (s += 7 * this.$d.weeks);
                var i = c(s, "D"),
                  r = c(this.$d.hours, "H"),
                  l = c(this.$d.minutes, "M"),
                  a = this.$d.seconds || 0;
                this.$d.milliseconds &&
                  ((a += this.$d.milliseconds / 1e3),
                  (a = Math.round(1e3 * a) / 1e3));
                var n = c(a, "S"),
                  o =
                    e.negative ||
                    t.negative ||
                    i.negative ||
                    r.negative ||
                    l.negative ||
                    n.negative,
                  d = r.format || l.format || n.format ? "T" : "",
                  h =
                    (o ? "-" : "") +
                    "P" +
                    e.format +
                    t.format +
                    i.format +
                    d +
                    r.format +
                    l.format +
                    n.format;
                return "P" === h || "-P" === h ? "P0D" : h;
              }),
              (h.toJSON = function () {
                return this.toISOString();
              }),
              (h.format = function (e) {
                var i = {
                  Y: this.$d.years,
                  YY: t.s(this.$d.years, 2, "0"),
                  YYYY: t.s(this.$d.years, 4, "0"),
                  M: this.$d.months,
                  MM: t.s(this.$d.months, 2, "0"),
                  D: this.$d.days,
                  DD: t.s(this.$d.days, 2, "0"),
                  H: this.$d.hours,
                  HH: t.s(this.$d.hours, 2, "0"),
                  m: this.$d.minutes,
                  mm: t.s(this.$d.minutes, 2, "0"),
                  s: this.$d.seconds,
                  ss: t.s(this.$d.seconds, 2, "0"),
                  SSS: t.s(this.$d.milliseconds, 3, "0"),
                };
                return (e || "YYYY-MM-DDTHH:mm:ss").replace(s, function (e, t) {
                  return t || String(i[e]);
                });
              }),
              (h.as = function (e) {
                return this.$ms / r[n(e)];
              }),
              (h.get = function (e) {
                var t = this.$ms,
                  s = n(e);
                return (
                  "milliseconds" === s
                    ? (t %= 1e3)
                    : (t = "weeks" === s ? d(t / r[s]) : this.$d[s]),
                  t || 0
                );
              }),
              (h.add = function (e, t, s) {
                var i;
                return (
                  (i = t ? e * r[n(t)] : l(e) ? e.$ms : a(e, this).$ms),
                  a(this.$ms + i * (s ? -1 : 1), this)
                );
              }),
              (h.subtract = function (e, t) {
                return this.add(e, t, !0);
              }),
              (h.locale = function (e) {
                var t = this.clone();
                return (t.$l = e), t;
              }),
              (h.clone = function () {
                return a(this.$ms, this);
              }),
              (h.humanize = function (t) {
                return e().add(this.$ms, "ms").locale(this.$l).fromNow(!t);
              }),
              (h.valueOf = function () {
                return this.asMilliseconds();
              }),
              (h.milliseconds = function () {
                return this.get("milliseconds");
              }),
              (h.asMilliseconds = function () {
                return this.as("milliseconds");
              }),
              (h.seconds = function () {
                return this.get("seconds");
              }),
              (h.asSeconds = function () {
                return this.as("seconds");
              }),
              (h.minutes = function () {
                return this.get("minutes");
              }),
              (h.asMinutes = function () {
                return this.as("minutes");
              }),
              (h.hours = function () {
                return this.get("hours");
              }),
              (h.asHours = function () {
                return this.as("hours");
              }),
              (h.days = function () {
                return this.get("days");
              }),
              (h.asDays = function () {
                return this.as("days");
              }),
              (h.weeks = function () {
                return this.get("weeks");
              }),
              (h.asWeeks = function () {
                return this.as("weeks");
              }),
              (h.months = function () {
                return this.get("months");
              }),
              (h.asMonths = function () {
                return this.as("months");
              }),
              (h.years = function () {
                return this.get("years");
              }),
              (h.asYears = function () {
                return this.as("years");
              }),
              o
            );
          })(),
          u = function (e, t, s) {
            return e
              .add(t.years() * s, "y")
              .add(t.months() * s, "M")
              .add(t.days() * s, "d")
              .add(t.hours() * s, "h")
              .add(t.minutes() * s, "m")
              .add(t.seconds() * s, "s")
              .add(t.milliseconds() * s, "ms");
          };
        return function (s, i, r) {
          (e = r),
            (t = r().$utils()),
            (r.duration = function (e, t) {
              return a(e, { $l: r.locale() }, t);
            }),
            (r.isDuration = l);
          var n = i.prototype.add,
            o = i.prototype.subtract;
          (i.prototype.add = function (e, t) {
            return l(e) ? u(this, e, 1) : n.bind(this)(e, t);
          }),
            (i.prototype.subtract = function (e, t) {
              return l(e) ? u(this, e, -1) : o.bind(this)(e, t);
            });
        };
      })());
  },
  212866,
  (e) => {
    "use strict";
    var t = e.i(843476),
      s = e.i(711166),
      i = e.i(582426),
      r = e.i(890357);
    let l = {
      src: e.i(331674).default,
      width: 16,
      height: 16,
      blurWidth: 0,
      blurHeight: 0,
    };
    var a = e.i(19607),
      n = e.i(455457),
      o = e.i(782839),
      d = e.i(626603),
      c = e.i(40364),
      h = e.i(109078),
      u = e.i(265760);
    let m = {
        src: e.i(559593).default,
        width: 14,
        height: 14,
        blurWidth: 0,
        blurHeight: 0,
      },
      x = {
        src: e.i(600737).default,
        width: 14,
        height: 14,
        blurWidth: 0,
        blurHeight: 0,
      },
      f = {
        src: e.i(918382).default,
        width: 14,
        height: 14,
        blurWidth: 0,
        blurHeight: 0,
      },
      g = {
        src: e.i(914135).default,
        width: 14,
        height: 14,
        blurWidth: 0,
        blurHeight: 0,
      },
      p = {
        src: e.i(932802).default,
        width: 8,
        height: 6,
        blurWidth: 0,
        blurHeight: 0,
      },
      b = {
        src: e.i(581326).default,
        width: 40,
        height: 40,
        blurWidth: 8,
        blurHeight: 8,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA/ElEQVR42iWPvUrDYBiFvyRTCGRIXdraRiMOHSwipKlIi9JBzeBP/YE4OWhFEAeDZCmKODi0BTevQBzUzcVBnLwIUSdvILmCx+8zwwsv5xwezhFCiFjTtNSdcPGmPBoLDcarFaSWKU+eyEzTZP0k5Pi6x+YgIjzapuJWkV6qAti2zcZFl7VhRHO0y9LNAWG0g2VZ/AdmgzlW7/bpvCUEz31mRucsnh7iOA5C4VfO9gi/bun8PtD8fKE1uMT1JlUPhMIv93u0v5/wf96pf7wyv9VF13WFR8gnrQc+7eEV/uM9rSShWC7nphygOsSGYWTFUonpWo1CYSxH5wviP6rnZoE68kGGAAAAAElFTkSuQmCC",
      };
    var v = e.i(116824);
    let j = {
        src: e.i(226573).default,
        width: 40,
        height: 40,
        blurWidth: 8,
        blurHeight: 8,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAtUlEQVR42jWPPQvCMBiEUyfjrDY1RR2COohiios6iNIg/XXugruTH7g4iCgIdhTH/g/X196LHQ6OJ5dLTnieV5IVOa8p/6pC/YWqyr+Vc4YzARMYk3XiFbVsxIIHw0WBtIkdJfeUlvszK3mkBIZWgcqmHdH0sKPF+8WCB8MZB7Qd0PC4ofHnwoIH4wBqQjej3nNL3dOaBQ+G5wU+UjftrOEmFER9ls49GAYITIFBupiJVvmf+QM1E10/RzcwPgAAAABJRU5ErkJggg==",
      },
      y = {
        src: e.i(761620).default,
        width: 14,
        height: 14,
        blurWidth: 0,
        blurHeight: 0,
      };
    var w = e.i(700653),
      C = e.i(10982),
      N = e.i(682451),
      S = e.i(211048),
      T = e.i(541473),
      $ = e.i(891102),
      k = e.i(343794),
      A = e.i(271645),
      B = e.i(618566),
      F = e.i(974010),
      M = e.i(964890),
      E = e.i(551944),
      U = e.i(822315),
      H = e.i(472856),
      P = e.i(205918);
    U.default.extend(H.default), U.default.extend(P.default);
    let I = ({ lastTransaction: e }) => {
      let [s, i] = (0, A.useState)("");
      return (
        (0, A.useEffect)(() => {
          let t = () => {
            let t, s, r;
            i(
              ((t = (0, U.default)()),
              (s = U.default.unix(e)),
              (r = U.default.duration(t.diff(s))).years() > 0
                ? `${r.years()}y`
                : r.months() > 0
                ? `${r.months()}mo`
                : r.days() > 0
                ? `${r.days()}d`
                : r.hours() > 0
                ? `${r.hours()}h`
                : r.minutes() > 0
                ? `${r.minutes()}m`
                : `${r.seconds()}s`)
            );
          };
          t();
          let s = setInterval(t, 1e3);
          return () => clearInterval(s);
        }, [e]),
        (0, t.jsx)("div", { className: "w-full", children: s })
      );
    };
    var D = e.i(884307),
      W = e.i(142793),
      R = e.i(524795),
      Y = e.i(533372),
      z = e.i(553917),
      O = e.i(785642),
      V = e.i(457633),
      L = e.i(346944);
    let q = ({
      amount: e,
      chain: s,
      tokenAddress: i,
      tokenSymbol: l,
      setVibrating: a,
    }) => {
      let [n, o] = (0, A.useState)(!1),
        { onTradeToken: d, getBalance: c } = (0, W.default)(),
        { usdcBalance: h, setUsdcBalance: u } = (0, r.useBalanceStore)(
          (0, L.useShallow)((e) => ({
            usdcBalance: e.usdcBalance,
            setUsdcBalance: e.setUsdcBalance,
          }))
        ),
        { selectedCurrency: m, exchangeRates: x } = (0, r.useExchangeStore)(
          (0, L.useShallow)((e) => ({
            selectedCurrency: e.selectedCurrency,
            exchangeRates: e.exchangeRates,
          }))
        ),
        { login: f, authenticated: g } = (0, T.usePrivy)(),
        p = async () => {
          u(await c());
        };
      return (0, t.jsx)("div", {
        className: "flex justify-center items-center w-full",
        children: (0, t.jsx)(Y.Button, {
          ref: (r) => {
            r &&
              (r.onclick = (r) => {
                if ((r.stopPropagation(), o(!0), g))
                  if (e && e <= h) {
                    let r = z.notifications.show({
                      message: `Your order to buy ${(0, F.exchangeSymbol)(
                        m
                      )}${e} of ${l} is in process..`,
                      color: "green",
                      top: 40,
                      position: "top-center",
                      autoClose: !1,
                      withCloseButton: !1,
                      loading: !0,
                    });
                    d({
                      type: "buy",
                      tokenAddress: i,
                      chain: s,
                      value: "usd" === m ? Number(e) : Number(e) / x[m],
                      onSuccess: () => {
                        z.notifications.update({
                          id: r,
                          message: `Your order to buy ${(0, F.exchangeSymbol)(
                            m
                          )}${e} of ${l} is complete.`,
                          color: "#05B31C",
                          position: "top-center",
                          autoClose: 2e3,
                          classNames: V.default,
                          withCloseButton: !0,
                          icon: (0, t.jsx)(O.IconCircleCheck, {
                            color: "white",
                            style: {
                              width: (0, N.rem)(16),
                              height: (0, N.rem)(16),
                              color: "white!important",
                            },
                          }),
                        }),
                          o(!1),
                          setTimeout(() => {
                            p();
                          }, 2e3);
                      },
                      onFailure: (t) => {
                        z.notifications.clean(),
                          z.notifications.show({
                            message: `Your order to buy ${(0, F.exchangeSymbol)(
                              m
                            )}${e} of ${l} failed.`,
                            color: "red",
                            position: "top-center",
                          }),
                          o(!1),
                          p(),
                          setTimeout(() => {}, 3e3),
                          (0, R.captureErrorToSentry)(
                            t,
                            "QuickBuyButton.tsx:onTradeToken:onFailure"
                          );
                      },
                    });
                  } else
                    a(!0),
                      setTimeout(() => {
                        a(!1);
                      }, 1e3);
                else f({ loginMethods: ["email"] });
              });
          },
          size: "xs",
          className: (0, k.default)(
            "!rounded-lg !px-4 !font-semibold !text-white"
          ),
          color: "#858DA399",
          variant: "outline",
          children: (0, t.jsxs)("div", {
            className: "flex gap-1.5 items-center",
            children: [
              (0, t.jsx)("img", { src: $.default.src, width: 8 }),
              (0, t.jsx)("div", { children: "Buy" }),
            ],
          }),
        }),
      });
    };
    var Q = e.i(184086),
      G = e.i(17024),
      K = e.i(796682);
    let J = {
        src: e.i(655678).default,
        width: 10,
        height: 10,
        blurWidth: 0,
        blurHeight: 0,
      },
      Z = {
        src: e.i(621662).default,
        width: 10,
        height: 10,
        blurWidth: 0,
        blurHeight: 0,
      },
      _ = {
        src: e.i(694115).default,
        width: 10,
        height: 10,
        blurWidth: 0,
        blurHeight: 0,
      };
    var X = e.i(522016);
    let ee = ({
      chainIcon: e,
      icon: s,
      symbol: i,
      name: r,
      verified: l,
      exchanges: a,
      chainSymbol: n,
      address: o,
      websiteUrl: d = "",
      telegramUrl: c = "",
      twitterUrl: h = "",
    }) =>
      (0, t.jsxs)("div", {
        className: "flex items-center gap-3",
        children: [
          (0, t.jsx)(G.default, {
            chainIcon: e,
            icon: s,
            iconClassName: "!w-8 !h-8",
            chainIconClassName: "!w-4 !h-4",
            symbol: i,
          }),
          (0, t.jsxs)("div", {
            children: [
              (0, t.jsxs)("div", {
                className: "text-xs flex items-center gap-2",
                children: [
                  (0, t.jsx)("div", {
                    className: "max-w-[56px] truncate",
                    children: i,
                  }),
                  (0, t.jsx)("div", {
                    className:
                      "text-xs opacity-70 text-slate-900 font-medium max-w-[100px] truncate",
                    title: r,
                    children: r,
                  }),
                  (0, t.jsx)("div", {
                    children: l ? (0, t.jsx)(K.default, {}) : null,
                  }),
                ],
              }),
              (0, t.jsxs)("div", {
                className: "flex items-center gap-2 pt-1",
                children: [
                  a?.length
                    ? (0, t.jsx)("div", {
                        className: "flex gap-2 items-center",
                        children: (0, t.jsx)("div", {
                          className: "overlapping-container",
                          children: a
                            ?.filter(
                              (e, t, s) =>
                                t ===
                                s.findIndex((t) => t.tradeUrl === e.tradeUrl)
                            )
                            .map((e, s) =>
                              e.iconUrl
                                ? (0, t.jsx)(
                                    Q.Tooltip,
                                    {
                                      label: e.name,
                                      color: "black",
                                      style: { fontSize: 12 },
                                      children: (0, t.jsx)("img", {
                                        alt: e.name,
                                        src: e.iconUrl,
                                        width: 18,
                                        height: 18,
                                        className: "rounded-full",
                                      }),
                                    },
                                    s
                                  )
                                : null
                            ),
                        }),
                      })
                    : null,
                  (0, t.jsx)(w.Divider, {
                    orientation: "vertical",
                    size: "xs",
                    color: "#1b1e26",
                    style: { width: "1px" },
                  }),
                  (0, t.jsx)("div", {
                    ref: (e) => {
                      e &&
                        (e.onclick = (e) => {
                          e.stopPropagation();
                        });
                    },
                    children: (0, t.jsx)(X.default, {
                      href: (0, F.scanAccountUrl)(n, o),
                      target: "_blank",
                      children: (0, t.jsx)("img", {
                        src: (0, F.scanImages)(n).src,
                        alt: "=>",
                        width: 14,
                        height: 14,
                      }),
                    }),
                  }),
                  d || h || c
                    ? (0, t.jsx)(w.Divider, {
                        orientation: "vertical",
                        size: "xs",
                        color: "#1b1e26",
                        style: { width: "1px" },
                      })
                    : null,
                  d
                    ? (0, t.jsx)("div", {
                        ref: (e) => {
                          e &&
                            (e.onclick = (e) => {
                              e.stopPropagation();
                            });
                        },
                        children: (0, t.jsx)(X.default, {
                          href: d,
                          target: "_blank",
                          children: (0, t.jsx)("img", {
                            src: J.src,
                            alt: "=>",
                            width: 14,
                            height: 14,
                          }),
                        }),
                      })
                    : null,
                  h
                    ? (0, t.jsx)("div", {
                        ref: (e) => {
                          e &&
                            (e.onclick = (e) => {
                              e.stopPropagation();
                            });
                        },
                        children: (0, t.jsx)(X.default, {
                          href: h,
                          target: "_blank",
                          children: (0, t.jsx)("img", {
                            src: _.src,
                            alt: "=>",
                            width: 14,
                            height: 14,
                          }),
                        }),
                      })
                    : null,
                  c
                    ? (0, t.jsx)("div", {
                        ref: (e) => {
                          e &&
                            (e.onclick = (e) => {
                              e.stopPropagation();
                            });
                        },
                        children: (0, t.jsx)(X.default, {
                          href: c,
                          target: "_blank",
                          children: (0, t.jsx)("img", {
                            src: Z.src,
                            alt: "=>",
                            width: 14,
                            height: 14,
                          }),
                        }),
                      })
                    : null,
                ],
              }),
            ],
          }),
        ],
      });
    var et = e.i(344873);
    let es = ({ price: e, address: s, prevPrice: i }) => {
        let { formatPrice: r } = (0, M.useExchangePrice)(),
          [l, a] = (0, A.useState)(null);
        return (
          (0, A.useEffect)(() => {
            void 0 !== i &&
              e !== i &&
              (a(e > i ? "text-grass" : "text-blood"),
              setTimeout(() => {
                a(null);
              }, 1e3));
          }, [e, i]),
          (0, t.jsx)("div", {
            className: `transition-colors leading-5 duration-300 ${l || ""}`,
            title: r((0, F.formatNumber)(e)),
            children: (0, et.formatCompactZeroNotation)(e),
          })
        );
      },
      ei = {
        src: e.i(139169).default,
        width: 7,
        height: 6,
        blurWidth: 0,
        blurHeight: 0,
      },
      er = {
        src: e.i(474971).default,
        width: 6,
        height: 6,
        blurWidth: 0,
        blurHeight: 0,
      };
    var el = e.i(971133),
      ea = e.i(442948),
      en = e.i(145288),
      eo = e.i(825436),
      ed = e.i(81341),
      ec = e.i(802315),
      eh = e.i(620777),
      eu = e.i(522112),
      em = e.i(229032);
    function ex({ children: e, reversed: s, sorted: i, onSort: r }) {
      let l = i ? (s ? eh.IconChevronUp : ec.IconChevronDown) : eu.IconSelector;
      return (0, t.jsx)(en.Table.Th, {
        className: em.default.th,
        children: (0, t.jsx)(eo.UnstyledButton, {
          onClick: r,
          className: (0, k.default)("!bg-transparent", em.default.control),
          children: (0, t.jsxs)("div", {
            className: "flex items-center justify-between",
            children: [
              e,
              (0, t.jsx)(el.Center, {
                className: em.default.icon,
                children: (0, t.jsx)(l, { size: 16, stroke: 1.5 }),
              }),
            ],
          }),
        }),
      });
    }
    let ef = ({
      amount: e,
      selectedTab: s,
      selectedTimeFrame: i,
      selectedChain: l,
      setVibrating: a,
    }) => {
      let [n, o] = (0, A.useState)([]),
        [d, c] = (0, A.useState)(!1),
        h = (0, B.useRouter)(),
        [u, m] = (0, A.useState)(1),
        [x, f] = (0, A.useState)({}),
        [g, p] = (0, A.useState)({}),
        { selectedCurrency: b } = (0, r.useExchangeStore)(
          (0, L.useShallow)((e) => ({ selectedCurrency: e.selectedCurrency }))
        ),
        [v, j] = (0, A.useState)([]),
        [y, w] = (0, A.useState)("dayNtlVlm"),
        [C, N] = (0, A.useState)(!0),
        { formatPrice: S, exchangeRates: T } = (0, M.useExchangePrice)(),
        $ = (0, A.useRef)(!1),
        U = async (e = !1) => {
          if (!$.current) {
            ($.current = !0), e || c(!0);
            try {
              let { data: e } = await (0, E.getTokensByFilter)({
                chain: l,
                filter: s,
                page: u,
                timeFrame: i,
              });
              f(
                e.tokens.reduce(
                  (e, t) => ((e[t.address] = g[t.address]), e),
                  {}
                )
              ),
                p(e.tokens.reduce((e, t) => ((e[t.address] = t.price), e), {})),
                o(e.tokens);
            } catch (e) {
              console.log("Error in fetching Tokens", e);
            } finally {
              ($.current = !1), e || c(!1);
            }
          }
        };
      (0, A.useEffect)(() => {
        U();
      }, [s, i, l, u]),
        (0, D.default)(() => U(!0), 15e3, [s, i, l, u]);
      let H = (e, t) => {
          let s = t?.toLowerCase().trim();
          return s
            ? e.filter((e) =>
                Object.keys(e).some((t) =>
                  String(e[t]).toLowerCase().includes(s)
                )
              )
            : e;
        },
        P = (e, t) => {
          let { sortBy: s, reversed: i, search: r } = t;
          return s
            ? H(
                [...e].sort((e, t) => {
                  let r, l;
                  if ("totalTxns" === s)
                    (r =
                      (e.buyCount?.["24h"] || 0) + (e.sellCount?.["24h"] || 0)),
                      (l =
                        (t.buyCount?.["24h"] || 0) +
                        (t.sellCount?.["24h"] || 0));
                  else if ("volume.24h" === s)
                    (r = e.volume?.["24h"]), (l = t.volume?.["24h"]);
                  else if (s.includes(".")) {
                    let [i, a] = s.split(".");
                    (r = e[i]?.[a]), (l = t[i]?.[a]);
                  } else (r = e[s]), (l = t[s]);
                  return "string" == typeof r && "string" == typeof l
                    ? i
                      ? l.localeCompare(r)
                      : r.localeCompare(l)
                    : i
                    ? l - r
                    : r - l;
                }),
                r
              )
            : H(e, r);
        },
        W = (e) => {
          let t = e === y && !C;
          N(t), w(e), j(P(n, { sortBy: e, reversed: t, search: "" }));
        };
      (0, A.useEffect)(() => {
        n.length > 0 ? j(P(n, { sortBy: y, reversed: C, search: "" })) : j([]);
      }, [n, y, C]);
      let R = (0, A.useMemo)(
        () =>
          v.map((s, i) =>
            (0, t.jsxs)(
              en.Table.Tr,
              {
                className: "cursor-pointer hover:bg-[#1f222c]/40",
                onClick: () => {
                  h.push(`/token/${s?.address}/?chain=${s?.chainSymbol}`);
                },
                children: [
                  (0, t.jsx)(en.Table.Td, {
                    className: "max-w-[300px] overflow-hidden",
                    children: (0, t.jsx)(ee, {
                      chainIcon: s?.chainIcon,
                      icon: s?.icon,
                      symbol: s?.symbol,
                      name: s?.name,
                      verified: s?.verified,
                      exchanges: s?.exchanges,
                      chainSymbol: s?.chainSymbol,
                      address: s?.address,
                      websiteUrl: s?.websiteUrl,
                      telegramUrl: s?.telegramUrl,
                      twitterUrl: s?.twitterUrl,
                    }),
                  }),
                  (0, t.jsx)(en.Table.Td, {
                    children: (0, t.jsx)(I, {
                      lastTransaction: s?.lastTransaction,
                    }),
                  }),
                  (0, t.jsx)(en.Table.Td, {
                    children: (0, t.jsx)(es, {
                      price: s?.price,
                      address: s?.address,
                      prevPrice: x[s?.address],
                    }),
                  }),
                  (0, t.jsx)(en.Table.Td, {
                    children: (0, t.jsxs)("span", {
                      className: (0, k.default)("text-xs", {
                        "text-grass": s?.priceChange?.["5m"] > 0,
                        "text-blood": s?.priceChange?.["5m"] < 0,
                      }),
                      children: [
                        s?.priceChange?.["5m"] > 9999
                          ? ">9999"
                          : s?.priceChange?.["5m"].toFixed(2),
                        "%",
                      ],
                    }),
                  }),
                  (0, t.jsx)(en.Table.Td, {
                    children: (0, t.jsxs)("span", {
                      className: (0, k.default)("text-xs", {
                        "text-grass": s?.priceChange?.["1h"] > 0,
                        "text-blood": s?.priceChange?.["1h"] < 0,
                      }),
                      children: [
                        s?.priceChange?.["1h"] > 9999
                          ? ">9999"
                          : s?.priceChange?.["1h"].toFixed(2),
                        "%",
                      ],
                    }),
                  }),
                  (0, t.jsx)(en.Table.Td, {
                    children: (0, t.jsxs)("span", {
                      className: (0, k.default)("text-xs", {
                        "text-grass": s?.priceChange?.["12h"] > 0,
                        "text-blood": s?.priceChange?.["12h"] < 0,
                      }),
                      children: [
                        s?.priceChange?.["12h"] > 9999
                          ? ">9999"
                          : s?.priceChange?.["12h"].toFixed(2),
                        "%",
                      ],
                    }),
                  }),
                  (0, t.jsx)(en.Table.Td, {
                    children: (0, t.jsxs)("span", {
                      className: (0, k.default)("text-xs", {
                        "text-grass": s?.priceChange?.["24h"] > 0,
                        "text-blood": s?.priceChange?.["24h"] < 0,
                      }),
                      children: [
                        s?.priceChange?.["24h"] > 9999
                          ? ">9999"
                          : s?.priceChange?.["24h"].toFixed(2),
                        "%",
                      ],
                    }),
                  }),
                  (0, t.jsx)(en.Table.Td, {
                    children: (0, t.jsxs)("span", {
                      children: [
                        (0, F.exchangeSymbol)(b),
                        (0, F.formatBigNumber)(
                          S(Number(s?.volume?.["24h"])?.toFixed(2), !1),
                          b
                        ),
                      ],
                    }),
                  }),
                  (0, t.jsx)(en.Table.Td, {
                    children: (0, t.jsxs)("span", {
                      children: [
                        (0, F.exchangeSymbol)(b),
                        (0, F.formatBigNumber)(S(s?.marketCap, !1), b),
                      ],
                    }),
                  }),
                  (0, t.jsx)(en.Table.Td, {
                    children: (0, t.jsx)("span", {
                      children: (0, F.formatBigNumber)(S(s?.holders, !1), b),
                    }),
                  }),
                  (0, t.jsx)(en.Table.Td, {
                    children: (0, t.jsxs)("span", {
                      children: [
                        (0, F.exchangeSymbol)(b),
                        (0, F.formatBigNumber)(S(s?.liquidity, !1), b),
                      ],
                    }),
                  }),
                  (0, t.jsx)(en.Table.Td, {
                    children: (0, t.jsxs)("div", {
                      style: { lineHeight: "1.4" },
                      children: [
                        (0, t.jsx)("div", {
                          children: (0, t.jsx)("span", {
                            children: (0, F.formatBigNumber)(
                              s?.buyCount["24h"] + s?.sellCount["24h"]
                            ),
                          }),
                        }),
                        (0, t.jsxs)("div", {
                          children: [
                            " ",
                            (0, t.jsx)("span", {
                              className: "text-grass text-[8px]",
                              children: (0, F.formatBigNumber)(
                                S(s?.buyCount["24h"], !1),
                                b
                              ),
                            }),
                            " ",
                            "/",
                            " ",
                            (0, t.jsx)("span", {
                              className: "text-blood text-[8px]",
                              children: (0, F.formatBigNumber)(
                                S(s?.sellCount["24h"], !1),
                                b
                              ),
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  (0, t.jsx)(en.Table.Td, {
                    children: (0, t.jsxs)("div", {
                      className: "flex items-center gap-6 text-xs",
                      children: [
                        (0, t.jsx)(Q.Tooltip, {
                          label: "Mint authority disabled",
                          style: { fontSize: 12 },
                          children: (0, t.jsxs)("div", {
                            className: "py-0 flex items-center gap-1",
                            children: [
                              (0, t.jsx)("img", {
                                src: s?.audits.isMintable ? er.src : ei.src,
                                alt: "->",
                                className: "w-2.5 h-2.5",
                              }),
                              (0, t.jsx)("div", { children: "MAD" }),
                            ],
                          }),
                        }),
                        (0, t.jsx)(Q.Tooltip, {
                          label: "Freeze authority disabled",
                          style: { fontSize: 12 },
                          children: (0, t.jsxs)("div", {
                            className: "py-0 flex items-center gap-1",
                            children: [
                              (0, t.jsx)("img", {
                                src: s?.audits.isFreezable ? er.src : ei.src,
                                alt: "->",
                                className: "w-2.5 h-2.5",
                              }),
                              (0, t.jsx)("div", { children: "FAD" }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  }),
                  (0, t.jsx)(en.Table.Td, {
                    children: (0, t.jsx)(q, {
                      amount: e,
                      chain: s?.chainSymbol,
                      tokenAddress: s?.address,
                      tokenSymbol: s?.symbol,
                      setVibrating: a,
                    }),
                  }),
                ],
              },
              i
            )
          ),
        [v, h, x, b, S, e, a]
      );
      return (0, t.jsxs)("div", {
        style: {
          fontFamily: "Google Sans, sans-serif",
          overflowY: d ? "hidden" : "scroll",
        },
        className: "relative",
        children: [
          (0, t.jsx)("div", {
            className: (0, k.default)("h-[calc(100vh-252px)] overflow-y-auto", {
              "!h-auto": !d && !n?.length,
            }),
            children: (0, t.jsxs)(en.Table, {
              classNames: {
                table: "!min-w-[1400px] overflow-x-auto",
                th: "!pl-0.5 !py-2 !font-normal !text-xs !text-slate-900 !border-ash !border-b !bg-[#0A0A0C]",
                td: "!pl-0.5 !py-1 !text-xs",
                tr: "border-b-1 !border-[#1D212A] ",
              },
              className: "mt-1",
              stickyHeader: !0,
              children: [
                (0, t.jsx)(en.Table.Thead, {
                  children: (0, t.jsxs)(en.Table.Tr, {
                    children: [
                      (0, t.jsx)(ex, {
                        sorted: "name" === y,
                        reversed: C,
                        onSort: () => W("name"),
                        children: (0, t.jsx)("div", {
                          className: "ml-4",
                          children: "Asset",
                        }),
                      }),
                      (0, t.jsx)(ex, {
                        sorted: "lastTransaction" === y,
                        reversed: C,
                        onSort: () => W("lastTransaction"),
                        children: "Last Txn",
                      }),
                      (0, t.jsx)(ex, {
                        sorted: "price" === y,
                        reversed: C,
                        onSort: () => W("price"),
                        children: "Price",
                      }),
                      (0, t.jsx)(ex, {
                        sorted: "priceChange.5m" === y,
                        reversed: C,
                        onSort: () => W("priceChange.5m"),
                        children: "5m",
                      }),
                      (0, t.jsx)(ex, {
                        sorted: "priceChange.1h" === y,
                        reversed: C,
                        onSort: () => W("priceChange.1h"),
                        children: "1h",
                      }),
                      (0, t.jsx)(ex, {
                        sorted: "priceChange.12h" === y,
                        reversed: C,
                        onSort: () => W("priceChange.12h"),
                        children: "12h",
                      }),
                      (0, t.jsx)(ex, {
                        sorted: "priceChange.24h" === y,
                        reversed: C,
                        onSort: () => W("priceChange.24h"),
                        children: "24h",
                      }),
                      (0, t.jsx)(ex, {
                        sorted: "volume.24h" === y,
                        reversed: C,
                        onSort: () => W("volume.24h"),
                        children: "Volume",
                      }),
                      (0, t.jsx)(ex, {
                        sorted: "marketCap" === y,
                        reversed: C,
                        onSort: () => W("marketCap"),
                        children: "Mkt Cap",
                      }),
                      (0, t.jsx)(ex, {
                        sorted: "holders" === y,
                        reversed: C,
                        onSort: () => W("holders"),
                        children: "Holders",
                      }),
                      (0, t.jsx)(ex, {
                        sorted: "liquidity" === y,
                        reversed: C,
                        onSort: () => W("liquidity"),
                        children: "Liquidity",
                      }),
                      (0, t.jsx)(ex, {
                        sorted: "totalTxns" === y,
                        reversed: C,
                        onSort: () => W("totalTxns"),
                        children: "Txns",
                      }),
                      (0, t.jsx)(ex, {
                        sorted: "audits.isMintable" === y,
                        reversed: C,
                        onSort: () => W("audits.isMintable"),
                        children: "Audit",
                      }),
                      (0, t.jsx)(en.Table.Th, {}),
                    ],
                  }),
                }),
                (0, t.jsx)(en.Table.Tbody, { children: R }),
              ],
            }),
          }),
          d
            ? (0, t.jsx)("div", {
                className:
                  "absolute top-0 right-0 bottom-0 left-0 bg-black/50 flex justify-center items-center",
                children: (0, t.jsx)(ea.Loader, {
                  type: "dots",
                  color: "white",
                  size: 50,
                }),
              })
            : null,
          d || n?.length
            ? null
            : (0, t.jsx)("div", {
                className: "flex flex-col items-center w-full mt-10",
                children: (0, t.jsx)(ed.default, { text: "No Tokens Found" }),
              }),
        ],
      });
    };
    var eg = e.i(657688),
      ep = e.i(905142),
      eb = e.i(902282),
      ev = e.i(879010),
      ej = e.i(908369);
    e.s(
      [
        "default",
        0,
        () => {
          let e = (0, B.useSearchParams)(),
            F = e.get("q"),
            M = e.get("filter"),
            [E, U] = (0, A.useState)(F || "memescope"),
            [H, P] = (0, A.useState)("1h"),
            [I, D] = (0, A.useState)("all"),
            [R, Y] = (0, A.useState)(!1),
            [z, O] = (0, A.useState)(0),
            { authenticated: V, login: q } = (0, T.usePrivy)(),
            [Q, G] = (0, A.useState)(
              M || ("tokens" === F ? "trending" : "pumpfun")
            ),
            { selectedCurrency: K } = (0, r.useExchangeStore)(
              (0, L.useShallow)((e) => ({
                selectedCurrency: e.selectedCurrency,
              }))
            ),
            { getBalance: J } = (0, W.default)(),
            [Z, { open: _, close: X }] = (0, ep.useDisclosure)(!1),
            { setUsdcBalance: ee, usdcBalance: et } = (0, r.useBalanceStore)(
              (0, L.useShallow)((e) => ({
                setUsdcBalance: e.setUsdcBalance,
                usdcBalance: e.usdcBalance,
              }))
            ),
            es = (0, S.useCombobox)({
              onDropdownClose: () => es.resetSelectedOption(),
            }),
            ei = (0, B.useRouter)(),
            er = { graduated: g, trending: f, gainers: p, major: y },
            el = ej.ONCHAIN_CATEGORIES.map((e) => ({
              label: e.label,
              value: e.value,
              icon: er[e.value],
            })),
            ea = {
              all: "all" === I ? x : m,
              solana: n.default,
              arbitrum: o.default,
              base: d.default,
              bsc: c.default,
              monad: h.default,
              robinhood: u.default,
            },
            en = ej.ONCHAIN_NETWORKS.map((e) => ({
              label: e.label,
              value: e.value,
              image: ea[e.value],
            }));
          (0, A.useEffect)(() => {
            G(M || ("tokens" === F ? "trending" : "pumpfun")),
              U(F || "memescope");
          }, [e]);
          let eo = [
              { label: "Pump.fun", value: "pumpfun", image: v.default },
              { label: "Four.meme", value: "fourmeme", image: b },
              {
                label: "Virtuals",
                value: "virtuals",
                image:
                  "https://crypto-exchange-logos-production.s3.us-west-2.amazonaws.com/0x158d7ccaa23dc3c8861c3323ed546e3d25e74309_8453.png",
              },
              {
                label: "Pons",
                value: "pons",
                image:
                  "https://crypto-exchange-logos-production.s3.us-west-2.amazonaws.com/launchpad/pons.jpg",
              },
              { label: "xStocks", value: "xstocks", image: j },
            ],
            ed = [...ej.ONCHAIN_TIMEFRAMES],
            ec = async () => {
              ee(await J());
            };
          return (
            (0, A.useEffect)(() => {
              V && ec();
            }, [V]),
            (0, A.useEffect)(() => {
              (0, a.trackEvent)("Page Viewed", { page_name: "Crypto" });
            }, []),
            (0, t.jsxs)(t.Fragment, {
              children: [
                (0, t.jsxs)("div", {
                  className: "mx-auto w-[97vw]",
                  children: [
                    (0, t.jsxs)("div", {
                      className: "flex items-center gap-5",
                      children: [
                        (0, t.jsx)("div", {
                          className: (0, k.default)(
                            "text-lg font-medium mt-3 cursor-pointer",
                            {
                              "text-[#858DA3]": "tokens" !== E,
                              "text-white": "tokens" === E,
                            }
                          ),
                          onClick: () => {
                            if ("tokens" !== E) {
                              U("tokens"), G("trending"), D("all"), P("1h");
                              let t = new URLSearchParams(e.toString());
                              t.set("q", "tokens"),
                                t.set("filter", "trending"),
                                ei.replace(`?${t.toString()}`, { scroll: !1 });
                            }
                          },
                          children: "Tokens",
                        }),
                        (0, t.jsx)("div", {
                          className: (0, k.default)(
                            "text-lg font-medium mt-3 cursor-pointer",
                            {
                              "text-[#858DA3]": "memescope" !== E,
                              "text-white": "memescope" === E,
                            }
                          ),
                          onClick: () => {
                            if ("memescope" !== E) {
                              U("memescope"), G("pumpfun"), P("1h");
                              let t = new URLSearchParams(e.toString());
                              t.set("q", "memescope"),
                                t.set("filter", "pumpfun"),
                                ei.replace(`?${t.toString()}`, { scroll: !1 });
                            }
                          },
                          children: "Memescope",
                        }),
                      ],
                    }),
                    (0, t.jsx)("div", {
                      className:
                        "pt-4 w-full overflow-x-auto overflow-y-hidden",
                      children: (0, t.jsx)("div", {
                        className:
                          "flex flex-nowrap gap-2 items-center min-w-[950px]",
                        children:
                          "tokens" === E
                            ? (0, t.jsx)(t.Fragment, {
                                children: en.map((e, s) =>
                                  (0, t.jsxs)(
                                    "div",
                                    {
                                      className: "flex",
                                      children: [
                                        (0, t.jsxs)(
                                          "div",
                                          {
                                            style: {
                                              border: "1px solid #1F222C",
                                            },
                                            className: (0, k.default)(
                                              "text-xs font-semibold flex gap-2 items-center px-2 py-1.5 rounded-full cursor-pointer",
                                              {
                                                "bg-black": I !== e.value,
                                                "text-white": I !== e.value,
                                                "bg-white": I === e.value,
                                                "text-black": I === e.value,
                                              }
                                            ),
                                            onClick: () => {
                                              D(e.value);
                                            },
                                            children: [
                                              (0, t.jsx)("div", {
                                                children: (0, t.jsx)(
                                                  eg.default,
                                                  {
                                                    src: e.image,
                                                    alt: e.label,
                                                    width: 20,
                                                  }
                                                ),
                                              }),
                                              (0, t.jsx)("div", {
                                                children: e.label,
                                              }),
                                            ],
                                          },
                                          s
                                        ),
                                        0 === s
                                          ? (0, t.jsx)(w.Divider, {
                                              orientation: "vertical",
                                              size: "xs",
                                              color: "#1b1e26",
                                              style: {
                                                width: "1px",
                                                height: "34px",
                                                marginLeft: "8px",
                                              },
                                            })
                                          : null,
                                      ],
                                    },
                                    e?.value
                                  )
                                ),
                              })
                            : (0, t.jsx)(t.Fragment, {
                                children: eo.map((s, i) =>
                                  (0, t.jsxs)(
                                    "div",
                                    {
                                      style: { border: "1px solid #1F222C" },
                                      className: (0, k.default)(
                                        "text-xs font-semibold flex gap-2 items-center px-2 py-1.5 rounded-full cursor-pointer",
                                        {
                                          "bg-black": Q !== s.value,
                                          "text-white": Q !== s.value,
                                          "bg-white": Q === s.value,
                                          "text-black": Q === s.value,
                                        }
                                      ),
                                      onClick: () => {
                                        G(s.value);
                                        let t = new URLSearchParams(
                                          e.toString()
                                        );
                                        t.set("q", "memescope"),
                                          t.set("filter", s.value),
                                          ei.replace(`?${t.toString()}`, {
                                            scroll: !1,
                                          });
                                      },
                                      children: [
                                        (0, t.jsx)("div", {
                                          children: (0, t.jsx)(eg.default, {
                                            src: s.image,
                                            alt: s.label,
                                            width: 20,
                                            height: 20,
                                            className: "rounded-full",
                                          }),
                                        }),
                                        (0, t.jsx)("div", {
                                          children: s.label,
                                        }),
                                      ],
                                    },
                                    i
                                  )
                                ),
                              }),
                      }),
                    }),
                    (0, t.jsxs)("div", {
                      className:
                        "pt-2 flex  gap-2 flex-wrap md:items-center md:justify-between",
                      children: [
                        (0, t.jsxs)("div", {
                          className:
                            "flex gap-2 items-center flex-wrap justify-between md:justify-start md:gap-6",
                          children: [
                            (0, t.jsx)("div", {
                              className: "flex gap-2 items-center",
                              children: ed.map((e, s) =>
                                (0, t.jsx)(
                                  "div",
                                  {
                                    className: (0, k.default)(
                                      "text-xs font-semibold flex gap-2 items-center px-2 py-1.5 rounded cursor-pointer",
                                      {
                                        "bg-black": H !== e,
                                        "text-white": H !== e,
                                        "bg-white": H === e,
                                        "text-black": H === e,
                                      }
                                    ),
                                    onClick: () => {
                                      P(e);
                                    },
                                    children: (0, t.jsx)("div", {
                                      children: e,
                                    }),
                                  },
                                  s
                                )
                              ),
                            }),
                            (0, t.jsx)("div", {
                              className: "flex gap-2 items-center",
                              children:
                                "tokens" === E
                                  ? (0, t.jsx)(t.Fragment, {
                                      children: el.map((e, s) =>
                                        (0, t.jsxs)(
                                          "div",
                                          {
                                            className: (0, k.default)(
                                              "text-white text-xs font-semibold px-2 py-1.5 rounded cursor-pointer flex items-center gap-1.5",
                                              {
                                                "bg-[#1F222C]": Q !== e.value,
                                                "bg-[#6D47FF]": Q === e.value,
                                              }
                                            ),
                                            onClick: () => {
                                              G(e.value);
                                            },
                                            children: [
                                              (0, t.jsx)("div", {
                                                children: (0, t.jsx)(
                                                  eg.default,
                                                  { src: e.icon, alt: e.label }
                                                ),
                                              }),
                                              (0, t.jsx)("div", {
                                                children: e.label,
                                              }),
                                            ],
                                          },
                                          s
                                        )
                                      ),
                                    })
                                  : null,
                            }),
                          ],
                        }),
                        (0, t.jsxs)("div", {
                          style: { border: "1px solid #1B1E26" },
                          className: `flex items-center bg-black text-xs rounded-full px-2 w-fit ${
                            R ? "shake" : ""
                          }`,
                          children: [
                            (0, t.jsxs)("div", {
                              className: "flex gap-2 items-center",
                              children: [
                                (0, t.jsx)("div", {
                                  style: { fontSize: 0 },
                                  className: "pl-2",
                                  children: (0, t.jsx)("img", {
                                    src: $.default.src,
                                    alt: "->",
                                    style: { width: (0, N.rem)(8) },
                                  }),
                                }),
                                (0, t.jsx)("div", {
                                  className: "text-xs font-medium",
                                  children: "Quick Buy",
                                }),
                                (0, t.jsx)("div", {
                                  children: (0, t.jsx)(C.NumberInput, {
                                    classNames: {
                                      input:
                                        "!border-0 !bg-transparent overflow-hidden whitespace-nowrap !text-white !text-xs !font-medium max-[850px]:w-[125px] w-auto",
                                      section: "!w-[50px]",
                                    },
                                    id: "quick-buy",
                                    allowDecimal: !1,
                                    allowNegative: !1,
                                    min: 0,
                                    value: z || "",
                                    placeholder: "Enter Amount",
                                    onChange: (e) => {
                                      let t = Number(e);
                                      !isNaN(t) && t >= 0 && O(t);
                                    },
                                    hideControls: !0,
                                    leftSection: (0, t.jsx)(i.CurrencyIcon, {
                                      symbol: K,
                                      size: 14,
                                    }),
                                    className:
                                      "text-[14px] text-textPrimary placeholder:text-textTertiary font-regular outline-none bg-transparent text-right",
                                  }),
                                }),
                              ],
                            }),
                            (0, t.jsxs)("div", {
                              className: "flex items-center gap-2",
                              style: { borderLeft: "1px solid #1B1E26" },
                              children: [
                                (0, t.jsxs)("div", {
                                  className: "flex items-center",
                                  children: [
                                    (0, t.jsx)("img", {
                                      src: l.src,
                                      alt: "->",
                                      style: { width: (0, N.rem)(12) },
                                    }),
                                    (0, t.jsx)("div", {
                                      className: "pl-1 font-semibold text-xs",
                                      children: Number(et).toFixed(2),
                                    }),
                                  ],
                                }),
                                (0, t.jsx)(eg.default, {
                                  src: s.default,
                                  alt: "->",
                                  className: "cursor-pointer",
                                  style: { width: (0, N.rem)(12) },
                                  onClick: () => {
                                    V ? _() : q({ loginMethods: ["email"] });
                                  },
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, t.jsx)("div", {
                      className:
                        "mt-2 overflow-scroll border border-[#1D212A] rounded",
                      children: (0, t.jsx)(ef, {
                        selectedTab: Q,
                        amount: z,
                        selectedTimeFrame: H,
                        selectedChain: I,
                        setVibrating: Y,
                      }),
                    }),
                    (0, t.jsx)(ev.default, {
                      opened: Z,
                      close: X,
                      chain: "solana",
                    }),
                  ],
                }),
                (0, t.jsx)(eb.default, { isFixed: !0 }),
              ],
            })
          );
        },
      ],
      212866
    );
  },
]);
