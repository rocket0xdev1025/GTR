(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  872081,
  (e) => {
    "use strict";
    let t = {
      src: e.i(898824).default,
      width: 17,
      height: 18,
      blurWidth: 0,
      blurHeight: 0,
    };
    e.s(["default", 0, t]);
  },
  47088,
  (e) => {
    "use strict";
    e.s([
      "wrappedTokenContractABI",
      0,
      [
        {
          constant: !0,
          inputs: [],
          name: "name",
          outputs: [{ name: "", type: "string" }],
          payable: !1,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: !1,
          inputs: [
            { name: "guy", type: "address" },
            { name: "wad", type: "uint256" },
          ],
          name: "approve",
          outputs: [{ name: "", type: "bool" }],
          payable: !1,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: !0,
          inputs: [],
          name: "totalSupply",
          outputs: [{ name: "", type: "uint256" }],
          payable: !1,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: !1,
          inputs: [
            { name: "src", type: "address" },
            { name: "dst", type: "address" },
            { name: "wad", type: "uint256" },
          ],
          name: "transferFrom",
          outputs: [{ name: "", type: "bool" }],
          payable: !1,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: !1,
          inputs: [{ name: "wad", type: "uint256" }],
          name: "withdraw",
          outputs: [],
          payable: !1,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: !0,
          inputs: [],
          name: "decimals",
          outputs: [{ name: "", type: "uint8" }],
          payable: !1,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: !0,
          inputs: [{ name: "", type: "address" }],
          name: "balanceOf",
          outputs: [{ name: "", type: "uint256" }],
          payable: !1,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: !0,
          inputs: [],
          name: "symbol",
          outputs: [{ name: "", type: "string" }],
          payable: !1,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: !1,
          inputs: [
            { name: "dst", type: "address" },
            { name: "wad", type: "uint256" },
          ],
          name: "transfer",
          outputs: [{ name: "", type: "bool" }],
          payable: !1,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: !1,
          inputs: [],
          name: "deposit",
          outputs: [],
          payable: !0,
          stateMutability: "payable",
          type: "function",
        },
        {
          constant: !0,
          inputs: [
            { name: "", type: "address" },
            { name: "", type: "address" },
          ],
          name: "allowance",
          outputs: [{ name: "", type: "uint256" }],
          payable: !1,
          stateMutability: "view",
          type: "function",
        },
        { payable: !0, stateMutability: "payable", type: "fallback" },
        {
          anonymous: !1,
          inputs: [
            { indexed: !0, name: "src", type: "address" },
            { indexed: !0, name: "guy", type: "address" },
            { indexed: !1, name: "wad", type: "uint256" },
          ],
          name: "Approval",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            { indexed: !0, name: "src", type: "address" },
            { indexed: !0, name: "dst", type: "address" },
            { indexed: !1, name: "wad", type: "uint256" },
          ],
          name: "Transfer",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            { indexed: !0, name: "dst", type: "address" },
            { indexed: !1, name: "wad", type: "uint256" },
          ],
          name: "Deposit",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            { indexed: !0, name: "src", type: "address" },
            { indexed: !1, name: "wad", type: "uint256" },
          ],
          name: "Withdrawal",
          type: "event",
        },
      ],
    ]);
  },
  638492,
  (e, t, r) => {
    (r.read = function (e, t, r, n, i) {
      var s,
        o,
        a = 8 * i - n - 1,
        u = (1 << a) - 1,
        c = u >> 1,
        l = -7,
        f = r ? i - 1 : 0,
        h = r ? -1 : 1,
        d = e[t + f];
      for (
        f += h, s = d & ((1 << -l) - 1), d >>= -l, l += a;
        l > 0;
        s = 256 * s + e[t + f], f += h, l -= 8
      );
      for (
        o = s & ((1 << -l) - 1), s >>= -l, l += n;
        l > 0;
        o = 256 * o + e[t + f], f += h, l -= 8
      );
      if (0 === s) s = 1 - c;
      else {
        if (s === u) return o ? NaN : (1 / 0) * (d ? -1 : 1);
        (o += Math.pow(2, n)), (s -= c);
      }
      return (d ? -1 : 1) * o * Math.pow(2, s - n);
    }),
      (r.write = function (e, t, r, n, i, s) {
        var o,
          a,
          u,
          c = 8 * s - i - 1,
          l = (1 << c) - 1,
          f = l >> 1,
          h = 5960464477539062e-23 * (23 === i),
          d = n ? 0 : s - 1,
          p = n ? 1 : -1,
          g = +(t < 0 || (0 === t && 1 / t < 0));
        for (
          isNaN((t = Math.abs(t))) || t === 1 / 0
            ? ((a = +!!isNaN(t)), (o = l))
            : ((o = Math.floor(Math.log(t) / Math.LN2)),
              t * (u = Math.pow(2, -o)) < 1 && (o--, (u *= 2)),
              o + f >= 1 ? (t += h / u) : (t += h * Math.pow(2, 1 - f)),
              t * u >= 2 && (o++, (u /= 2)),
              o + f >= l
                ? ((a = 0), (o = l))
                : o + f >= 1
                ? ((a = (t * u - 1) * Math.pow(2, i)), (o += f))
                : ((a = t * Math.pow(2, f - 1) * Math.pow(2, i)), (o = 0)));
          i >= 8;
          e[r + d] = 255 & a, d += p, a /= 256, i -= 8
        );
        for (
          o = (o << i) | a, c += i;
          c > 0;
          e[r + d] = 255 & o, d += p, o /= 256, c -= 8
        );
        e[r + d - p] |= 128 * g;
      });
  },
  843943,
  (e, t, r) => {
    "use strict";
    let n = e.r(734582),
      i = e.r(638492),
      s =
        "function" == typeof Symbol && "function" == typeof Symbol.for
          ? Symbol.for("nodejs.util.inspect.custom")
          : null;
    function o(e) {
      if (e > 0x7fffffff)
        throw RangeError('The value "' + e + '" is invalid for option "size"');
      let t = new Uint8Array(e);
      return Object.setPrototypeOf(t, a.prototype), t;
    }
    function a(e, t, r) {
      if ("number" == typeof e) {
        if ("string" == typeof t)
          throw TypeError(
            'The "string" argument must be of type string. Received type number'
          );
        return l(e);
      }
      return u(e, t, r);
    }
    function u(e, t, r) {
      if ("string" == typeof e) {
        var n = e,
          i = t;
        if (
          (("string" != typeof i || "" === i) && (i = "utf8"), !a.isEncoding(i))
        )
          throw TypeError("Unknown encoding: " + i);
        let r = 0 | p(n, i),
          s = o(r),
          u = s.write(n, i);
        return u !== r && (s = s.slice(0, u)), s;
      }
      if (ArrayBuffer.isView(e)) {
        var s = e;
        if (N(s, Uint8Array)) {
          let e = new Uint8Array(s);
          return h(e.buffer, e.byteOffset, e.byteLength);
        }
        return f(s);
      }
      if (null == e)
        throw TypeError(
          "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
            typeof e
        );
      if (
        N(e, ArrayBuffer) ||
        (e && N(e.buffer, ArrayBuffer)) ||
        ("undefined" != typeof SharedArrayBuffer &&
          (N(e, SharedArrayBuffer) || (e && N(e.buffer, SharedArrayBuffer))))
      )
        return h(e, t, r);
      if ("number" == typeof e)
        throw TypeError(
          'The "value" argument must not be of type number. Received type number'
        );
      let u = e.valueOf && e.valueOf();
      if (null != u && u !== e) return a.from(u, t, r);
      let c = (function (e) {
        if (a.isBuffer(e)) {
          let t = 0 | d(e.length),
            r = o(t);
          return 0 === r.length || e.copy(r, 0, 0, t), r;
        }
        return void 0 !== e.length
          ? "number" != typeof e.length ||
            (function (e) {
              return e != e;
            })(e.length)
            ? o(0)
            : f(e)
          : "Buffer" === e.type && Array.isArray(e.data)
          ? f(e.data)
          : void 0;
      })(e);
      if (c) return c;
      if (
        "undefined" != typeof Symbol &&
        null != Symbol.toPrimitive &&
        "function" == typeof e[Symbol.toPrimitive]
      )
        return a.from(e[Symbol.toPrimitive]("string"), t, r);
      throw TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
          typeof e
      );
    }
    function c(e) {
      if ("number" != typeof e)
        throw TypeError('"size" argument must be of type number');
      if (e < 0)
        throw RangeError('The value "' + e + '" is invalid for option "size"');
    }
    function l(e) {
      return c(e), o(e < 0 ? 0 : 0 | d(e));
    }
    function f(e) {
      let t = e.length < 0 ? 0 : 0 | d(e.length),
        r = o(t);
      for (let n = 0; n < t; n += 1) r[n] = 255 & e[n];
      return r;
    }
    function h(e, t, r) {
      let n;
      if (t < 0 || e.byteLength < t)
        throw RangeError('"offset" is outside of buffer bounds');
      if (e.byteLength < t + (r || 0))
        throw RangeError('"length" is outside of buffer bounds');
      return (
        Object.setPrototypeOf(
          (n =
            void 0 === t && void 0 === r
              ? new Uint8Array(e)
              : void 0 === r
              ? new Uint8Array(e, t)
              : new Uint8Array(e, t, r)),
          a.prototype
        ),
        n
      );
    }
    function d(e) {
      if (e >= 0x7fffffff)
        throw RangeError(
          "Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes"
        );
      return 0 | e;
    }
    function p(e, t) {
      if (a.isBuffer(e)) return e.length;
      if (ArrayBuffer.isView(e) || N(e, ArrayBuffer)) return e.byteLength;
      if ("string" != typeof e)
        throw TypeError(
          'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' +
            typeof e
        );
      let r = e.length,
        n = arguments.length > 2 && !0 === arguments[2];
      if (!n && 0 === r) return 0;
      let i = !1;
      for (;;)
        switch (t) {
          case "ascii":
          case "latin1":
          case "binary":
            return r;
          case "utf8":
          case "utf-8":
            return R(e).length;
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return 2 * r;
          case "hex":
            return r >>> 1;
          case "base64":
            return O(e).length;
          default:
            if (i) return n ? -1 : R(e).length;
            (t = ("" + t).toLowerCase()), (i = !0);
        }
    }
    function g(e, t, r) {
      let i = !1;
      if (
        ((void 0 === t || t < 0) && (t = 0),
        t > this.length ||
          ((void 0 === r || r > this.length) && (r = this.length),
          r <= 0 || (r >>>= 0) <= (t >>>= 0)))
      )
        return "";
      for (e || (e = "utf8"); ; )
        switch (e) {
          case "hex":
            return (function (e, t, r) {
              let n = e.length;
              (!t || t < 0) && (t = 0), (!r || r < 0 || r > n) && (r = n);
              let i = "";
              for (let n = t; n < r; ++n) i += W[e[n]];
              return i;
            })(this, t, r);
          case "utf8":
          case "utf-8":
            return w(this, t, r);
          case "ascii":
            return (function (e, t, r) {
              let n = "";
              r = Math.min(e.length, r);
              for (let i = t; i < r; ++i) n += String.fromCharCode(127 & e[i]);
              return n;
            })(this, t, r);
          case "latin1":
          case "binary":
            return (function (e, t, r) {
              let n = "";
              r = Math.min(e.length, r);
              for (let i = t; i < r; ++i) n += String.fromCharCode(e[i]);
              return n;
            })(this, t, r);
          case "base64":
            var s, o, a;
            return (
              (s = this),
              (o = t),
              (a = r),
              0 === o && a === s.length
                ? n.fromByteArray(s)
                : n.fromByteArray(s.slice(o, a))
            );
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return (function (e, t, r) {
              let n = e.slice(t, r),
                i = "";
              for (let e = 0; e < n.length - 1; e += 2)
                i += String.fromCharCode(n[e] + 256 * n[e + 1]);
              return i;
            })(this, t, r);
          default:
            if (i) throw TypeError("Unknown encoding: " + e);
            (e = (e + "").toLowerCase()), (i = !0);
        }
    }
    function y(e, t, r) {
      let n = e[t];
      (e[t] = e[r]), (e[r] = n);
    }
    function m(e, t, r, n, i) {
      var s;
      if (0 === e.length) return -1;
      if (
        ("string" == typeof r
          ? ((n = r), (r = 0))
          : r > 0x7fffffff
          ? (r = 0x7fffffff)
          : r < -0x80000000 && (r = -0x80000000),
        (s = r *= 1) != s && (r = i ? 0 : e.length - 1),
        r < 0 && (r = e.length + r),
        r >= e.length)
      )
        if (i) return -1;
        else r = e.length - 1;
      else if (r < 0)
        if (!i) return -1;
        else r = 0;
      if (("string" == typeof t && (t = a.from(t, n)), a.isBuffer(t)))
        return 0 === t.length ? -1 : b(e, t, r, n, i);
      if ("number" == typeof t) {
        if (((t &= 255), "function" == typeof Uint8Array.prototype.indexOf))
          if (i) return Uint8Array.prototype.indexOf.call(e, t, r);
          else return Uint8Array.prototype.lastIndexOf.call(e, t, r);
        return b(e, [t], r, n, i);
      }
      throw TypeError("val must be string, number or Buffer");
    }
    function b(e, t, r, n, i) {
      let s,
        o = 1,
        a = e.length,
        u = t.length;
      if (
        void 0 !== n &&
        ("ucs2" === (n = String(n).toLowerCase()) ||
          "ucs-2" === n ||
          "utf16le" === n ||
          "utf-16le" === n)
      ) {
        if (e.length < 2 || t.length < 2) return -1;
        (o = 2), (a /= 2), (u /= 2), (r /= 2);
      }
      function c(e, t) {
        return 1 === o ? e[t] : e.readUInt16BE(t * o);
      }
      if (i) {
        let n = -1;
        for (s = r; s < a; s++)
          if (c(e, s) === c(t, -1 === n ? 0 : s - n)) {
            if ((-1 === n && (n = s), s - n + 1 === u)) return n * o;
          } else -1 !== n && (s -= s - n), (n = -1);
      } else
        for (r + u > a && (r = a - u), s = r; s >= 0; s--) {
          let r = !0;
          for (let n = 0; n < u; n++)
            if (c(e, s + n) !== c(t, n)) {
              r = !1;
              break;
            }
          if (r) return s;
        }
      return -1;
    }
    function w(e, t, r) {
      r = Math.min(e.length, r);
      let n = [],
        i = t;
      for (; i < r; ) {
        let t = e[i],
          s = null,
          o = t > 239 ? 4 : t > 223 ? 3 : t > 191 ? 2 : 1;
        if (i + o <= r) {
          let r, n, a, u;
          switch (o) {
            case 1:
              t < 128 && (s = t);
              break;
            case 2:
              (192 & (r = e[i + 1])) == 128 &&
                (u = ((31 & t) << 6) | (63 & r)) > 127 &&
                (s = u);
              break;
            case 3:
              (r = e[i + 1]),
                (n = e[i + 2]),
                (192 & r) == 128 &&
                  (192 & n) == 128 &&
                  (u = ((15 & t) << 12) | ((63 & r) << 6) | (63 & n)) > 2047 &&
                  (u < 55296 || u > 57343) &&
                  (s = u);
              break;
            case 4:
              (r = e[i + 1]),
                (n = e[i + 2]),
                (a = e[i + 3]),
                (192 & r) == 128 &&
                  (192 & n) == 128 &&
                  (192 & a) == 128 &&
                  (u =
                    ((15 & t) << 18) |
                    ((63 & r) << 12) |
                    ((63 & n) << 6) |
                    (63 & a)) > 65535 &&
                  u < 1114112 &&
                  (s = u);
          }
        }
        null === s
          ? ((s = 65533), (o = 1))
          : s > 65535 &&
            ((s -= 65536),
            n.push(((s >>> 10) & 1023) | 55296),
            (s = 56320 | (1023 & s))),
          n.push(s),
          (i += o);
      }
      var s = n;
      let o = s.length;
      if (o <= 4096) return String.fromCharCode.apply(String, s);
      let a = "",
        u = 0;
      for (; u < o; )
        a += String.fromCharCode.apply(String, s.slice(u, (u += 4096)));
      return a;
    }
    function S(e, t, r) {
      if (e % 1 != 0 || e < 0) throw RangeError("offset is not uint");
      if (e + t > r) throw RangeError("Trying to access beyond buffer length");
    }
    function k(e, t, r, n, i, s) {
      if (!a.isBuffer(e))
        throw TypeError('"buffer" argument must be a Buffer instance');
      if (t > i || t < s) throw RangeError('"value" argument is out of bounds');
      if (r + n > e.length) throw RangeError("Index out of range");
    }
    function v(e, t, r, n, i) {
      P(t, n, i, e, r, 7);
      let s = Number(t & BigInt(0xffffffff));
      (e[r++] = s),
        (s >>= 8),
        (e[r++] = s),
        (s >>= 8),
        (e[r++] = s),
        (s >>= 8),
        (e[r++] = s);
      let o = Number((t >> BigInt(32)) & BigInt(0xffffffff));
      return (
        (e[r++] = o),
        (o >>= 8),
        (e[r++] = o),
        (o >>= 8),
        (e[r++] = o),
        (o >>= 8),
        (e[r++] = o),
        r
      );
    }
    function B(e, t, r, n, i) {
      P(t, n, i, e, r, 7);
      let s = Number(t & BigInt(0xffffffff));
      (e[r + 7] = s),
        (s >>= 8),
        (e[r + 6] = s),
        (s >>= 8),
        (e[r + 5] = s),
        (s >>= 8),
        (e[r + 4] = s);
      let o = Number((t >> BigInt(32)) & BigInt(0xffffffff));
      return (
        (e[r + 3] = o),
        (o >>= 8),
        (e[r + 2] = o),
        (o >>= 8),
        (e[r + 1] = o),
        (o >>= 8),
        (e[r] = o),
        r + 8
      );
    }
    function I(e, t, r, n, i, s) {
      if (r + n > e.length || r < 0) throw RangeError("Index out of range");
    }
    function E(e, t, r, n, s) {
      return (
        (t *= 1),
        (r >>>= 0),
        s || I(e, t, r, 4, 34028234663852886e22, -34028234663852886e22),
        i.write(e, t, r, n, 23, 4),
        r + 4
      );
    }
    function A(e, t, r, n, s) {
      return (
        (t *= 1),
        (r >>>= 0),
        s || I(e, t, r, 8, 17976931348623157e292, -17976931348623157e292),
        i.write(e, t, r, n, 52, 8),
        r + 8
      );
    }
    (r.Buffer = a),
      (r.SlowBuffer = function (e) {
        return +e != e && (e = 0), a.alloc(+e);
      }),
      (r.INSPECT_MAX_BYTES = 50),
      (r.kMaxLength = 0x7fffffff),
      (a.TYPED_ARRAY_SUPPORT = (function () {
        try {
          let e = new Uint8Array(1),
            t = {
              foo: function () {
                return 42;
              },
            };
          return (
            Object.setPrototypeOf(t, Uint8Array.prototype),
            Object.setPrototypeOf(e, t),
            42 === e.foo()
          );
        } catch (e) {
          return !1;
        }
      })()),
      a.TYPED_ARRAY_SUPPORT ||
        "undefined" == typeof console ||
        "function" != typeof console.error ||
        console.error(
          "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
        ),
      Object.defineProperty(a.prototype, "parent", {
        enumerable: !0,
        get: function () {
          if (a.isBuffer(this)) return this.buffer;
        },
      }),
      Object.defineProperty(a.prototype, "offset", {
        enumerable: !0,
        get: function () {
          if (a.isBuffer(this)) return this.byteOffset;
        },
      }),
      (a.poolSize = 8192),
      (a.from = function (e, t, r) {
        return u(e, t, r);
      }),
      Object.setPrototypeOf(a.prototype, Uint8Array.prototype),
      Object.setPrototypeOf(a, Uint8Array),
      (a.alloc = function (e, t, r) {
        return (c(e), e <= 0)
          ? o(e)
          : void 0 !== t
          ? "string" == typeof r
            ? o(e).fill(t, r)
            : o(e).fill(t)
          : o(e);
      }),
      (a.allocUnsafe = function (e) {
        return l(e);
      }),
      (a.allocUnsafeSlow = function (e) {
        return l(e);
      }),
      (a.isBuffer = function (e) {
        return null != e && !0 === e._isBuffer && e !== a.prototype;
      }),
      (a.compare = function (e, t) {
        if (
          (N(e, Uint8Array) && (e = a.from(e, e.offset, e.byteLength)),
          N(t, Uint8Array) && (t = a.from(t, t.offset, t.byteLength)),
          !a.isBuffer(e) || !a.isBuffer(t))
        )
          throw TypeError(
            'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
          );
        if (e === t) return 0;
        let r = e.length,
          n = t.length;
        for (let i = 0, s = Math.min(r, n); i < s; ++i)
          if (e[i] !== t[i]) {
            (r = e[i]), (n = t[i]);
            break;
          }
        return r < n ? -1 : +(n < r);
      }),
      (a.isEncoding = function (e) {
        switch (String(e).toLowerCase()) {
          case "hex":
          case "utf8":
          case "utf-8":
          case "ascii":
          case "latin1":
          case "binary":
          case "base64":
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return !0;
          default:
            return !1;
        }
      }),
      (a.concat = function (e, t) {
        let r;
        if (!Array.isArray(e))
          throw TypeError('"list" argument must be an Array of Buffers');
        if (0 === e.length) return a.alloc(0);
        if (void 0 === t)
          for (r = 0, t = 0; r < e.length; ++r) t += e[r].length;
        let n = a.allocUnsafe(t),
          i = 0;
        for (r = 0; r < e.length; ++r) {
          let t = e[r];
          if (N(t, Uint8Array))
            i + t.length > n.length
              ? (a.isBuffer(t) || (t = a.from(t)), t.copy(n, i))
              : Uint8Array.prototype.set.call(n, t, i);
          else if (a.isBuffer(t)) t.copy(n, i);
          else throw TypeError('"list" argument must be an Array of Buffers');
          i += t.length;
        }
        return n;
      }),
      (a.byteLength = p),
      (a.prototype._isBuffer = !0),
      (a.prototype.swap16 = function () {
        let e = this.length;
        if (e % 2 != 0)
          throw RangeError("Buffer size must be a multiple of 16-bits");
        for (let t = 0; t < e; t += 2) y(this, t, t + 1);
        return this;
      }),
      (a.prototype.swap32 = function () {
        let e = this.length;
        if (e % 4 != 0)
          throw RangeError("Buffer size must be a multiple of 32-bits");
        for (let t = 0; t < e; t += 4) y(this, t, t + 3), y(this, t + 1, t + 2);
        return this;
      }),
      (a.prototype.swap64 = function () {
        let e = this.length;
        if (e % 8 != 0)
          throw RangeError("Buffer size must be a multiple of 64-bits");
        for (let t = 0; t < e; t += 8)
          y(this, t, t + 7),
            y(this, t + 1, t + 6),
            y(this, t + 2, t + 5),
            y(this, t + 3, t + 4);
        return this;
      }),
      (a.prototype.toString = function () {
        let e = this.length;
        return 0 === e
          ? ""
          : 0 == arguments.length
          ? w(this, 0, e)
          : g.apply(this, arguments);
      }),
      (a.prototype.toLocaleString = a.prototype.toString),
      (a.prototype.equals = function (e) {
        if (!a.isBuffer(e)) throw TypeError("Argument must be a Buffer");
        return this === e || 0 === a.compare(this, e);
      }),
      (a.prototype.inspect = function () {
        let e = "",
          t = r.INSPECT_MAX_BYTES;
        return (
          (e = this.toString("hex", 0, t)
            .replace(/(.{2})/g, "$1 ")
            .trim()),
          this.length > t && (e += " ... "),
          "<Buffer " + e + ">"
        );
      }),
      s && (a.prototype[s] = a.prototype.inspect),
      (a.prototype.compare = function (e, t, r, n, i) {
        if (
          (N(e, Uint8Array) && (e = a.from(e, e.offset, e.byteLength)),
          !a.isBuffer(e))
        )
          throw TypeError(
            'The "target" argument must be one of type Buffer or Uint8Array. Received type ' +
              typeof e
          );
        if (
          (void 0 === t && (t = 0),
          void 0 === r && (r = e ? e.length : 0),
          void 0 === n && (n = 0),
          void 0 === i && (i = this.length),
          t < 0 || r > e.length || n < 0 || i > this.length)
        )
          throw RangeError("out of range index");
        if (n >= i && t >= r) return 0;
        if (n >= i) return -1;
        if (t >= r) return 1;
        if (((t >>>= 0), (r >>>= 0), (n >>>= 0), (i >>>= 0), this === e))
          return 0;
        let s = i - n,
          o = r - t,
          u = Math.min(s, o),
          c = this.slice(n, i),
          l = e.slice(t, r);
        for (let e = 0; e < u; ++e)
          if (c[e] !== l[e]) {
            (s = c[e]), (o = l[e]);
            break;
          }
        return s < o ? -1 : +(o < s);
      }),
      (a.prototype.includes = function (e, t, r) {
        return -1 !== this.indexOf(e, t, r);
      }),
      (a.prototype.indexOf = function (e, t, r) {
        return m(this, e, t, r, !0);
      }),
      (a.prototype.lastIndexOf = function (e, t, r) {
        return m(this, e, t, r, !1);
      }),
      (a.prototype.write = function (e, t, r, n) {
        var i, s, o, a, u, c, l, f;
        if (void 0 === t) (n = "utf8"), (r = this.length), (t = 0);
        else if (void 0 === r && "string" == typeof t)
          (n = t), (r = this.length), (t = 0);
        else if (isFinite(t))
          (t >>>= 0),
            isFinite(r)
              ? ((r >>>= 0), void 0 === n && (n = "utf8"))
              : ((n = r), (r = void 0));
        else
          throw Error(
            "Buffer.write(string, encoding, offset[, length]) is no longer supported"
          );
        let h = this.length - t;
        if (
          ((void 0 === r || r > h) && (r = h),
          (e.length > 0 && (r < 0 || t < 0)) || t > this.length)
        )
          throw RangeError("Attempt to write outside buffer bounds");
        n || (n = "utf8");
        let d = !1;
        for (;;)
          switch (n) {
            case "hex":
              return (function (e, t, r, n) {
                let i;
                r = Number(r) || 0;
                let s = e.length - r;
                n ? (n = Number(n)) > s && (n = s) : (n = s);
                let o = t.length;
                for (n > o / 2 && (n = o / 2), i = 0; i < n; ++i) {
                  var a;
                  let n = parseInt(t.substr(2 * i, 2), 16);
                  if ((a = n) != a) break;
                  e[r + i] = n;
                }
                return i;
              })(this, e, t, r);
            case "utf8":
            case "utf-8":
              return (i = t), (s = r), z(R(e, this.length - i), this, i, s);
            case "ascii":
            case "latin1":
            case "binary":
              return (
                (o = t),
                (a = r),
                z(
                  (function (e) {
                    let t = [];
                    for (let r = 0; r < e.length; ++r)
                      t.push(255 & e.charCodeAt(r));
                    return t;
                  })(e),
                  this,
                  o,
                  a
                )
              );
            case "base64":
              return (u = t), (c = r), z(O(e), this, u, c);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return (
                (l = t),
                (f = r),
                z(
                  (function (e, t) {
                    let r,
                      n,
                      i = [];
                    for (let s = 0; s < e.length && !((t -= 2) < 0); ++s)
                      (n = (r = e.charCodeAt(s)) >> 8),
                        i.push(r % 256),
                        i.push(n);
                    return i;
                  })(e, this.length - l),
                  this,
                  l,
                  f
                )
              );
            default:
              if (d) throw TypeError("Unknown encoding: " + n);
              (n = ("" + n).toLowerCase()), (d = !0);
          }
      }),
      (a.prototype.toJSON = function () {
        return {
          type: "Buffer",
          data: Array.prototype.slice.call(this._arr || this, 0),
        };
      }),
      (a.prototype.slice = function (e, t) {
        let r = this.length;
        (e = ~~e),
          (t = void 0 === t ? r : ~~t),
          e < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r),
          t < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r),
          t < e && (t = e);
        let n = this.subarray(e, t);
        return Object.setPrototypeOf(n, a.prototype), n;
      }),
      (a.prototype.readUintLE = a.prototype.readUIntLE =
        function (e, t, r) {
          (e >>>= 0), (t >>>= 0), r || S(e, t, this.length);
          let n = this[e],
            i = 1,
            s = 0;
          for (; ++s < t && (i *= 256); ) n += this[e + s] * i;
          return n;
        }),
      (a.prototype.readUintBE = a.prototype.readUIntBE =
        function (e, t, r) {
          (e >>>= 0), (t >>>= 0), r || S(e, t, this.length);
          let n = this[e + --t],
            i = 1;
          for (; t > 0 && (i *= 256); ) n += this[e + --t] * i;
          return n;
        }),
      (a.prototype.readUint8 = a.prototype.readUInt8 =
        function (e, t) {
          return (e >>>= 0), t || S(e, 1, this.length), this[e];
        }),
      (a.prototype.readUint16LE = a.prototype.readUInt16LE =
        function (e, t) {
          return (
            (e >>>= 0), t || S(e, 2, this.length), this[e] | (this[e + 1] << 8)
          );
        }),
      (a.prototype.readUint16BE = a.prototype.readUInt16BE =
        function (e, t) {
          return (
            (e >>>= 0), t || S(e, 2, this.length), (this[e] << 8) | this[e + 1]
          );
        }),
      (a.prototype.readUint32LE = a.prototype.readUInt32LE =
        function (e, t) {
          return (
            (e >>>= 0),
            t || S(e, 4, this.length),
            (this[e] | (this[e + 1] << 8) | (this[e + 2] << 16)) +
              0x1000000 * this[e + 3]
          );
        }),
      (a.prototype.readUint32BE = a.prototype.readUInt32BE =
        function (e, t) {
          return (
            (e >>>= 0),
            t || S(e, 4, this.length),
            0x1000000 * this[e] +
              ((this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3])
          );
        }),
      (a.prototype.readBigUInt64LE = M(function (e) {
        C((e >>>= 0), "offset");
        let t = this[e],
          r = this[e + 7];
        (void 0 === t || void 0 === r) && U(e, this.length - 8);
        let n = t + 256 * this[++e] + 65536 * this[++e] + 0x1000000 * this[++e],
          i = this[++e] + 256 * this[++e] + 65536 * this[++e] + 0x1000000 * r;
        return BigInt(n) + (BigInt(i) << BigInt(32));
      })),
      (a.prototype.readBigUInt64BE = M(function (e) {
        C((e >>>= 0), "offset");
        let t = this[e],
          r = this[e + 7];
        (void 0 === t || void 0 === r) && U(e, this.length - 8);
        let n = 0x1000000 * t + 65536 * this[++e] + 256 * this[++e] + this[++e],
          i = 0x1000000 * this[++e] + 65536 * this[++e] + 256 * this[++e] + r;
        return (BigInt(n) << BigInt(32)) + BigInt(i);
      })),
      (a.prototype.readIntLE = function (e, t, r) {
        (e >>>= 0), (t >>>= 0), r || S(e, t, this.length);
        let n = this[e],
          i = 1,
          s = 0;
        for (; ++s < t && (i *= 256); ) n += this[e + s] * i;
        return n >= (i *= 128) && (n -= Math.pow(2, 8 * t)), n;
      }),
      (a.prototype.readIntBE = function (e, t, r) {
        (e >>>= 0), (t >>>= 0), r || S(e, t, this.length);
        let n = t,
          i = 1,
          s = this[e + --n];
        for (; n > 0 && (i *= 256); ) s += this[e + --n] * i;
        return s >= (i *= 128) && (s -= Math.pow(2, 8 * t)), s;
      }),
      (a.prototype.readInt8 = function (e, t) {
        return ((e >>>= 0), t || S(e, 1, this.length), 128 & this[e])
          ? -((255 - this[e] + 1) * 1)
          : this[e];
      }),
      (a.prototype.readInt16LE = function (e, t) {
        (e >>>= 0), t || S(e, 2, this.length);
        let r = this[e] | (this[e + 1] << 8);
        return 32768 & r ? 0xffff0000 | r : r;
      }),
      (a.prototype.readInt16BE = function (e, t) {
        (e >>>= 0), t || S(e, 2, this.length);
        let r = this[e + 1] | (this[e] << 8);
        return 32768 & r ? 0xffff0000 | r : r;
      }),
      (a.prototype.readInt32LE = function (e, t) {
        return (
          (e >>>= 0),
          t || S(e, 4, this.length),
          this[e] |
            (this[e + 1] << 8) |
            (this[e + 2] << 16) |
            (this[e + 3] << 24)
        );
      }),
      (a.prototype.readInt32BE = function (e, t) {
        return (
          (e >>>= 0),
          t || S(e, 4, this.length),
          (this[e] << 24) |
            (this[e + 1] << 16) |
            (this[e + 2] << 8) |
            this[e + 3]
        );
      }),
      (a.prototype.readBigInt64LE = M(function (e) {
        C((e >>>= 0), "offset");
        let t = this[e],
          r = this[e + 7];
        return (
          (void 0 === t || void 0 === r) && U(e, this.length - 8),
          (BigInt(
            this[e + 4] + 256 * this[e + 5] + 65536 * this[e + 6] + (r << 24)
          ) <<
            BigInt(32)) +
            BigInt(
              t + 256 * this[++e] + 65536 * this[++e] + 0x1000000 * this[++e]
            )
        );
      })),
      (a.prototype.readBigInt64BE = M(function (e) {
        C((e >>>= 0), "offset");
        let t = this[e],
          r = this[e + 7];
        return (
          (void 0 === t || void 0 === r) && U(e, this.length - 8),
          (BigInt(
            (t << 24) + 65536 * this[++e] + 256 * this[++e] + this[++e]
          ) <<
            BigInt(32)) +
            BigInt(
              0x1000000 * this[++e] + 65536 * this[++e] + 256 * this[++e] + r
            )
        );
      })),
      (a.prototype.readFloatLE = function (e, t) {
        return (
          (e >>>= 0), t || S(e, 4, this.length), i.read(this, e, !0, 23, 4)
        );
      }),
      (a.prototype.readFloatBE = function (e, t) {
        return (
          (e >>>= 0), t || S(e, 4, this.length), i.read(this, e, !1, 23, 4)
        );
      }),
      (a.prototype.readDoubleLE = function (e, t) {
        return (
          (e >>>= 0), t || S(e, 8, this.length), i.read(this, e, !0, 52, 8)
        );
      }),
      (a.prototype.readDoubleBE = function (e, t) {
        return (
          (e >>>= 0), t || S(e, 8, this.length), i.read(this, e, !1, 52, 8)
        );
      }),
      (a.prototype.writeUintLE = a.prototype.writeUIntLE =
        function (e, t, r, n) {
          if (((e *= 1), (t >>>= 0), (r >>>= 0), !n)) {
            let n = Math.pow(2, 8 * r) - 1;
            k(this, e, t, r, n, 0);
          }
          let i = 1,
            s = 0;
          for (this[t] = 255 & e; ++s < r && (i *= 256); )
            this[t + s] = (e / i) & 255;
          return t + r;
        }),
      (a.prototype.writeUintBE = a.prototype.writeUIntBE =
        function (e, t, r, n) {
          if (((e *= 1), (t >>>= 0), (r >>>= 0), !n)) {
            let n = Math.pow(2, 8 * r) - 1;
            k(this, e, t, r, n, 0);
          }
          let i = r - 1,
            s = 1;
          for (this[t + i] = 255 & e; --i >= 0 && (s *= 256); )
            this[t + i] = (e / s) & 255;
          return t + r;
        }),
      (a.prototype.writeUint8 = a.prototype.writeUInt8 =
        function (e, t, r) {
          return (
            (e *= 1),
            (t >>>= 0),
            r || k(this, e, t, 1, 255, 0),
            (this[t] = 255 & e),
            t + 1
          );
        }),
      (a.prototype.writeUint16LE = a.prototype.writeUInt16LE =
        function (e, t, r) {
          return (
            (e *= 1),
            (t >>>= 0),
            r || k(this, e, t, 2, 65535, 0),
            (this[t] = 255 & e),
            (this[t + 1] = e >>> 8),
            t + 2
          );
        }),
      (a.prototype.writeUint16BE = a.prototype.writeUInt16BE =
        function (e, t, r) {
          return (
            (e *= 1),
            (t >>>= 0),
            r || k(this, e, t, 2, 65535, 0),
            (this[t] = e >>> 8),
            (this[t + 1] = 255 & e),
            t + 2
          );
        }),
      (a.prototype.writeUint32LE = a.prototype.writeUInt32LE =
        function (e, t, r) {
          return (
            (e *= 1),
            (t >>>= 0),
            r || k(this, e, t, 4, 0xffffffff, 0),
            (this[t + 3] = e >>> 24),
            (this[t + 2] = e >>> 16),
            (this[t + 1] = e >>> 8),
            (this[t] = 255 & e),
            t + 4
          );
        }),
      (a.prototype.writeUint32BE = a.prototype.writeUInt32BE =
        function (e, t, r) {
          return (
            (e *= 1),
            (t >>>= 0),
            r || k(this, e, t, 4, 0xffffffff, 0),
            (this[t] = e >>> 24),
            (this[t + 1] = e >>> 16),
            (this[t + 2] = e >>> 8),
            (this[t + 3] = 255 & e),
            t + 4
          );
        }),
      (a.prototype.writeBigUInt64LE = M(function (e, t = 0) {
        return v(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"));
      })),
      (a.prototype.writeBigUInt64BE = M(function (e, t = 0) {
        return B(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"));
      })),
      (a.prototype.writeIntLE = function (e, t, r, n) {
        if (((e *= 1), (t >>>= 0), !n)) {
          let n = Math.pow(2, 8 * r - 1);
          k(this, e, t, r, n - 1, -n);
        }
        let i = 0,
          s = 1,
          o = 0;
        for (this[t] = 255 & e; ++i < r && (s *= 256); )
          e < 0 && 0 === o && 0 !== this[t + i - 1] && (o = 1),
            (this[t + i] = (((e / s) | 0) - o) & 255);
        return t + r;
      }),
      (a.prototype.writeIntBE = function (e, t, r, n) {
        if (((e *= 1), (t >>>= 0), !n)) {
          let n = Math.pow(2, 8 * r - 1);
          k(this, e, t, r, n - 1, -n);
        }
        let i = r - 1,
          s = 1,
          o = 0;
        for (this[t + i] = 255 & e; --i >= 0 && (s *= 256); )
          e < 0 && 0 === o && 0 !== this[t + i + 1] && (o = 1),
            (this[t + i] = (((e / s) | 0) - o) & 255);
        return t + r;
      }),
      (a.prototype.writeInt8 = function (e, t, r) {
        return (
          (e *= 1),
          (t >>>= 0),
          r || k(this, e, t, 1, 127, -128),
          e < 0 && (e = 255 + e + 1),
          (this[t] = 255 & e),
          t + 1
        );
      }),
      (a.prototype.writeInt16LE = function (e, t, r) {
        return (
          (e *= 1),
          (t >>>= 0),
          r || k(this, e, t, 2, 32767, -32768),
          (this[t] = 255 & e),
          (this[t + 1] = e >>> 8),
          t + 2
        );
      }),
      (a.prototype.writeInt16BE = function (e, t, r) {
        return (
          (e *= 1),
          (t >>>= 0),
          r || k(this, e, t, 2, 32767, -32768),
          (this[t] = e >>> 8),
          (this[t + 1] = 255 & e),
          t + 2
        );
      }),
      (a.prototype.writeInt32LE = function (e, t, r) {
        return (
          (e *= 1),
          (t >>>= 0),
          r || k(this, e, t, 4, 0x7fffffff, -0x80000000),
          (this[t] = 255 & e),
          (this[t + 1] = e >>> 8),
          (this[t + 2] = e >>> 16),
          (this[t + 3] = e >>> 24),
          t + 4
        );
      }),
      (a.prototype.writeInt32BE = function (e, t, r) {
        return (
          (e *= 1),
          (t >>>= 0),
          r || k(this, e, t, 4, 0x7fffffff, -0x80000000),
          e < 0 && (e = 0xffffffff + e + 1),
          (this[t] = e >>> 24),
          (this[t + 1] = e >>> 16),
          (this[t + 2] = e >>> 8),
          (this[t + 3] = 255 & e),
          t + 4
        );
      }),
      (a.prototype.writeBigInt64LE = M(function (e, t = 0) {
        return v(
          this,
          e,
          t,
          -BigInt("0x8000000000000000"),
          BigInt("0x7fffffffffffffff")
        );
      })),
      (a.prototype.writeBigInt64BE = M(function (e, t = 0) {
        return B(
          this,
          e,
          t,
          -BigInt("0x8000000000000000"),
          BigInt("0x7fffffffffffffff")
        );
      })),
      (a.prototype.writeFloatLE = function (e, t, r) {
        return E(this, e, t, !0, r);
      }),
      (a.prototype.writeFloatBE = function (e, t, r) {
        return E(this, e, t, !1, r);
      }),
      (a.prototype.writeDoubleLE = function (e, t, r) {
        return A(this, e, t, !0, r);
      }),
      (a.prototype.writeDoubleBE = function (e, t, r) {
        return A(this, e, t, !1, r);
      }),
      (a.prototype.copy = function (e, t, r, n) {
        if (!a.isBuffer(e)) throw TypeError("argument should be a Buffer");
        if (
          (r || (r = 0),
          n || 0 === n || (n = this.length),
          t >= e.length && (t = e.length),
          t || (t = 0),
          n > 0 && n < r && (n = r),
          n === r || 0 === e.length || 0 === this.length)
        )
          return 0;
        if (t < 0) throw RangeError("targetStart out of bounds");
        if (r < 0 || r >= this.length) throw RangeError("Index out of range");
        if (n < 0) throw RangeError("sourceEnd out of bounds");
        n > this.length && (n = this.length),
          e.length - t < n - r && (n = e.length - t + r);
        let i = n - r;
        return (
          this === e && "function" == typeof Uint8Array.prototype.copyWithin
            ? this.copyWithin(t, r, n)
            : Uint8Array.prototype.set.call(e, this.subarray(r, n), t),
          i
        );
      }),
      (a.prototype.fill = function (e, t, r, n) {
        let i;
        if ("string" == typeof e) {
          if (
            ("string" == typeof t
              ? ((n = t), (t = 0), (r = this.length))
              : "string" == typeof r && ((n = r), (r = this.length)),
            void 0 !== n && "string" != typeof n)
          )
            throw TypeError("encoding must be a string");
          if ("string" == typeof n && !a.isEncoding(n))
            throw TypeError("Unknown encoding: " + n);
          if (1 === e.length) {
            let t = e.charCodeAt(0);
            (("utf8" === n && t < 128) || "latin1" === n) && (e = t);
          }
        } else
          "number" == typeof e
            ? (e &= 255)
            : "boolean" == typeof e && (e = Number(e));
        if (t < 0 || this.length < t || this.length < r)
          throw RangeError("Out of range index");
        if (r <= t) return this;
        if (
          ((t >>>= 0),
          (r = void 0 === r ? this.length : r >>> 0),
          e || (e = 0),
          "number" == typeof e)
        )
          for (i = t; i < r; ++i) this[i] = e;
        else {
          let s = a.isBuffer(e) ? e : a.from(e, n),
            o = s.length;
          if (0 === o)
            throw TypeError(
              'The value "' + e + '" is invalid for argument "value"'
            );
          for (i = 0; i < r - t; ++i) this[i + t] = s[i % o];
        }
        return this;
      });
    let x = {};
    function _(e, t, r) {
      x[e] = class extends r {
        constructor() {
          super(),
            Object.defineProperty(this, "message", {
              value: t.apply(this, arguments),
              writable: !0,
              configurable: !0,
            }),
            (this.name = `${this.name} [${e}]`),
            this.stack,
            delete this.name;
        }
        get code() {
          return e;
        }
        set code(e) {
          Object.defineProperty(this, "code", {
            configurable: !0,
            enumerable: !0,
            value: e,
            writable: !0,
          });
        }
        toString() {
          return `${this.name} [${e}]: ${this.message}`;
        }
      };
    }
    function T(e) {
      let t = "",
        r = e.length,
        n = +("-" === e[0]);
      for (; r >= n + 4; r -= 3) t = `_${e.slice(r - 3, r)}${t}`;
      return `${e.slice(0, r)}${t}`;
    }
    function P(e, t, r, n, i, s) {
      if (e > r || e < t) {
        let n,
          i = "bigint" == typeof t ? "n" : "";
        throw (
          ((n =
            s > 3
              ? 0 === t || t === BigInt(0)
                ? `>= 0${i} and < 2${i} ** ${(s + 1) * 8}${i}`
                : `>= -(2${i} ** ${(s + 1) * 8 - 1}${i}) and < 2 ** ${
                    (s + 1) * 8 - 1
                  }${i}`
              : `>= ${t}${i} and <= ${r}${i}`),
          new x.ERR_OUT_OF_RANGE("value", n, e))
        );
      }
      C(i, "offset"),
        (void 0 === n[i] || void 0 === n[i + s]) && U(i, n.length - (s + 1));
    }
    function C(e, t) {
      if ("number" != typeof e)
        throw new x.ERR_INVALID_ARG_TYPE(t, "number", e);
    }
    function U(e, t, r) {
      if (Math.floor(e) !== e)
        throw (C(e, r), new x.ERR_OUT_OF_RANGE(r || "offset", "an integer", e));
      if (t < 0) throw new x.ERR_BUFFER_OUT_OF_BOUNDS();
      throw new x.ERR_OUT_OF_RANGE(r || "offset", `>= ${+!!r} and <= ${t}`, e);
    }
    _(
      "ERR_BUFFER_OUT_OF_BOUNDS",
      function (e) {
        return e
          ? `${e} is outside of buffer bounds`
          : "Attempt to access memory outside buffer bounds";
      },
      RangeError
    ),
      _(
        "ERR_INVALID_ARG_TYPE",
        function (e, t) {
          return `The "${e}" argument must be of type number. Received type ${typeof t}`;
        },
        TypeError
      ),
      _(
        "ERR_OUT_OF_RANGE",
        function (e, t, r) {
          let n = `The value of "${e}" is out of range.`,
            i = r;
          return (
            Number.isInteger(r) && Math.abs(r) > 0x100000000
              ? (i = T(String(r)))
              : "bigint" == typeof r &&
                ((i = String(r)),
                (r > BigInt(2) ** BigInt(32) ||
                  r < -(BigInt(2) ** BigInt(32))) &&
                  (i = T(i)),
                (i += "n")),
            (n += ` It must be ${t}. Received ${i}`)
          );
        },
        RangeError
      );
    let L = /[^+/0-9A-Za-z-_]/g;
    function R(e, t) {
      let r;
      t = t || 1 / 0;
      let n = e.length,
        i = null,
        s = [];
      for (let o = 0; o < n; ++o) {
        if ((r = e.charCodeAt(o)) > 55295 && r < 57344) {
          if (!i) {
            if (r > 56319 || o + 1 === n) {
              (t -= 3) > -1 && s.push(239, 191, 189);
              continue;
            }
            i = r;
            continue;
          }
          if (r < 56320) {
            (t -= 3) > -1 && s.push(239, 191, 189), (i = r);
            continue;
          }
          r = (((i - 55296) << 10) | (r - 56320)) + 65536;
        } else i && (t -= 3) > -1 && s.push(239, 191, 189);
        if (((i = null), r < 128)) {
          if ((t -= 1) < 0) break;
          s.push(r);
        } else if (r < 2048) {
          if ((t -= 2) < 0) break;
          s.push((r >> 6) | 192, (63 & r) | 128);
        } else if (r < 65536) {
          if ((t -= 3) < 0) break;
          s.push((r >> 12) | 224, ((r >> 6) & 63) | 128, (63 & r) | 128);
        } else if (r < 1114112) {
          if ((t -= 4) < 0) break;
          s.push(
            (r >> 18) | 240,
            ((r >> 12) & 63) | 128,
            ((r >> 6) & 63) | 128,
            (63 & r) | 128
          );
        } else throw Error("Invalid code point");
      }
      return s;
    }
    function O(e) {
      return n.toByteArray(
        (function (e) {
          if ((e = (e = e.split("=")[0]).trim().replace(L, "")).length < 2)
            return "";
          for (; e.length % 4 != 0; ) e += "=";
          return e;
        })(e)
      );
    }
    function z(e, t, r, n) {
      let i;
      for (i = 0; i < n && !(i + r >= t.length) && !(i >= e.length); ++i)
        t[i + r] = e[i];
      return i;
    }
    function N(e, t) {
      return (
        e instanceof t ||
        (null != e &&
          null != e.constructor &&
          null != e.constructor.name &&
          e.constructor.name === t.name)
      );
    }
    let W = (function () {
      let e = "0123456789abcdef",
        t = Array(256);
      for (let r = 0; r < 16; ++r) {
        let n = 16 * r;
        for (let i = 0; i < 16; ++i) t[n + i] = e[r] + e[i];
      }
      return t;
    })();
    function M(e) {
      return "undefined" == typeof BigInt ? q : e;
    }
    function q() {
      throw Error("BigInt not supported");
    }
  },
  242524,
  (e, t, r) => {
    var n = e.r(843943),
      i = n.Buffer;
    function s(e, t) {
      for (var r in e) t[r] = e[r];
    }
    function o(e, t, r) {
      return i(e, t, r);
    }
    i.from && i.alloc && i.allocUnsafe && i.allocUnsafeSlow
      ? (t.exports = n)
      : (s(n, r), (r.Buffer = o)),
      (o.prototype = Object.create(i.prototype)),
      s(i, o),
      (o.from = function (e, t, r) {
        if ("number" == typeof e)
          throw TypeError("Argument must not be a number");
        return i(e, t, r);
      }),
      (o.alloc = function (e, t, r) {
        if ("number" != typeof e) throw TypeError("Argument must be a number");
        var n = i(e);
        return (
          void 0 !== t
            ? "string" == typeof r
              ? n.fill(t, r)
              : n.fill(t)
            : n.fill(0),
          n
        );
      }),
      (o.allocUnsafe = function (e) {
        if ("number" != typeof e) throw TypeError("Argument must be a number");
        return i(e);
      }),
      (o.allocUnsafeSlow = function (e) {
        if ("number" != typeof e) throw TypeError("Argument must be a number");
        return n.SlowBuffer(e);
      });
  },
  313227,
  (e, t, r) => {
    "use strict";
    var n = e.r(242524).Buffer;
    t.exports = function (e) {
      if (e.length >= 255) throw TypeError("Alphabet too long");
      for (var t = new Uint8Array(256), r = 0; r < t.length; r++) t[r] = 255;
      for (var i = 0; i < e.length; i++) {
        var s = e.charAt(i),
          o = s.charCodeAt(0);
        if (255 !== t[o]) throw TypeError(s + " is ambiguous");
        t[o] = i;
      }
      var a = e.length,
        u = e.charAt(0),
        c = Math.log(a) / Math.log(256),
        l = Math.log(256) / Math.log(a);
      function f(e) {
        if ("string" != typeof e) throw TypeError("Expected String");
        if (0 === e.length) return n.alloc(0);
        for (var r = 0, i = 0, s = 0; e[r] === u; ) i++, r++;
        for (
          var o = ((e.length - r) * c + 1) >>> 0, l = new Uint8Array(o);
          r < e.length;

        ) {
          var f = e.charCodeAt(r);
          if (f > 255) return;
          var h = t[f];
          if (255 === h) return;
          for (var d = 0, p = o - 1; (0 !== h || d < s) && -1 !== p; p--, d++)
            (h += (a * l[p]) >>> 0),
              (l[p] = h % 256 >>> 0),
              (h = (h / 256) >>> 0);
          if (0 !== h) throw Error("Non-zero carry");
          (s = d), r++;
        }
        for (var g = o - s; g !== o && 0 === l[g]; ) g++;
        var y = n.allocUnsafe(i + (o - g));
        y.fill(0, 0, i);
        for (var m = i; g !== o; ) y[m++] = l[g++];
        return y;
      }
      return {
        encode: function (t) {
          if (
            ((Array.isArray(t) || t instanceof Uint8Array) && (t = n.from(t)),
            !n.isBuffer(t))
          )
            throw TypeError("Expected Buffer");
          if (0 === t.length) return "";
          for (var r = 0, i = 0, s = 0, o = t.length; s !== o && 0 === t[s]; )
            s++, r++;
          for (
            var c = ((o - s) * l + 1) >>> 0, f = new Uint8Array(c);
            s !== o;

          ) {
            for (
              var h = t[s], d = 0, p = c - 1;
              (0 !== h || d < i) && -1 !== p;
              p--, d++
            )
              (h += (256 * f[p]) >>> 0),
                (f[p] = h % a >>> 0),
                (h = (h / a) >>> 0);
            if (0 !== h) throw Error("Non-zero carry");
            (i = d), s++;
          }
          for (var g = c - i; g !== c && 0 === f[g]; ) g++;
          for (var y = u.repeat(r); g < c; ++g) y += e.charAt(f[g]);
          return y;
        },
        decodeUnsafe: f,
        decode: function (e) {
          var t = f(e);
          if (t) return t;
          throw Error("Non-base" + a + " character");
        },
      };
    };
  },
  635030,
  (e, t, r) => {
    t.exports = e.r(313227)(
      "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
    );
  },
  217944,
  (e, t, r) => {
    "use strict";
    var n = e.r(242524).Buffer;
    t.exports = function (e) {
      if (e.length >= 255) throw TypeError("Alphabet too long");
      for (var t = new Uint8Array(256), r = 0; r < t.length; r++) t[r] = 255;
      for (var i = 0; i < e.length; i++) {
        var s = e.charAt(i),
          o = s.charCodeAt(0);
        if (255 !== t[o]) throw TypeError(s + " is ambiguous");
        t[o] = i;
      }
      var a = e.length,
        u = e.charAt(0),
        c = Math.log(a) / Math.log(256),
        l = Math.log(256) / Math.log(a);
      function f(e) {
        if ("string" != typeof e) throw TypeError("Expected String");
        if (0 === e.length) return n.alloc(0);
        for (var r = 0, i = 0, s = 0; e[r] === u; ) i++, r++;
        for (
          var o = ((e.length - r) * c + 1) >>> 0, l = new Uint8Array(o);
          r < e.length;

        ) {
          var f = e.charCodeAt(r);
          if (f > 255) return;
          var h = t[f];
          if (255 === h) return;
          for (var d = 0, p = o - 1; (0 !== h || d < s) && -1 !== p; p--, d++)
            (h += (a * l[p]) >>> 0),
              (l[p] = h % 256 >>> 0),
              (h = (h / 256) >>> 0);
          if (0 !== h) throw Error("Non-zero carry");
          (s = d), r++;
        }
        for (var g = o - s; g !== o && 0 === l[g]; ) g++;
        var y = n.allocUnsafe(i + (o - g));
        y.fill(0, 0, i);
        for (var m = i; g !== o; ) y[m++] = l[g++];
        return y;
      }
      return {
        encode: function (t) {
          if (
            ((Array.isArray(t) || t instanceof Uint8Array) && (t = n.from(t)),
            !n.isBuffer(t))
          )
            throw TypeError("Expected Buffer");
          if (0 === t.length) return "";
          for (var r = 0, i = 0, s = 0, o = t.length; s !== o && 0 === t[s]; )
            s++, r++;
          for (
            var c = ((o - s) * l + 1) >>> 0, f = new Uint8Array(c);
            s !== o;

          ) {
            for (
              var h = t[s], d = 0, p = c - 1;
              (0 !== h || d < i) && -1 !== p;
              p--, d++
            )
              (h += (256 * f[p]) >>> 0),
                (f[p] = h % a >>> 0),
                (h = (h / a) >>> 0);
            if (0 !== h) throw Error("Non-zero carry");
            (i = d), s++;
          }
          for (var g = c - i; g !== c && 0 === f[g]; ) g++;
          for (var y = u.repeat(r); g < c; ++g) y += e.charAt(f[g]);
          return y;
        },
        decodeUnsafe: f,
        decode: function (e) {
          var t = f(e);
          if (t) return t;
          throw Error("Non-base" + a + " character");
        },
      };
    };
  },
  701262,
  (e, t, r) => {
    t.exports = e.r(217944)(
      "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
    );
  },
  572766,
  (e, t, r) => {
    "use strict";
    function n(e, t, r) {
      return t <= e && e <= r;
    }
    function i(e) {
      if (void 0 === e) return {};
      if (e === Object(e)) return e;
      throw TypeError("Could not convert argument to dictionary");
    }
    function s(e) {
      this.tokens = [].slice.call(e);
    }
    function o(e, t) {
      if (e) throw TypeError("Decoder error");
      return t || 65533;
    }
    s.prototype = {
      endOfStream: function () {
        return !this.tokens.length;
      },
      read: function () {
        return this.tokens.length ? this.tokens.shift() : -1;
      },
      prepend: function (e) {
        if (Array.isArray(e)) for (; e.length; ) this.tokens.unshift(e.pop());
        else this.tokens.unshift(e);
      },
      push: function (e) {
        if (Array.isArray(e)) for (; e.length; ) this.tokens.push(e.shift());
        else this.tokens.push(e);
      },
    };
    var a = "utf-8";
    function u(e, t) {
      if (!(this instanceof u)) return new u(e, t);
      if ((e = void 0 !== e ? String(e).toLowerCase() : a) !== a)
        throw Error("Encoding not supported. Only utf-8 is supported");
      (t = i(t)),
        (this._streaming = !1),
        (this._BOMseen = !1),
        (this._decoder = null),
        (this._fatal = !!t.fatal),
        (this._ignoreBOM = !!t.ignoreBOM),
        Object.defineProperty(this, "encoding", { value: "utf-8" }),
        Object.defineProperty(this, "fatal", { value: this._fatal }),
        Object.defineProperty(this, "ignoreBOM", { value: this._ignoreBOM });
    }
    function c(e, t) {
      if (!(this instanceof c)) return new c(e, t);
      if ((e = void 0 !== e ? String(e).toLowerCase() : a) !== a)
        throw Error("Encoding not supported. Only utf-8 is supported");
      (t = i(t)),
        (this._streaming = !1),
        (this._encoder = null),
        (this._options = { fatal: !!t.fatal }),
        Object.defineProperty(this, "encoding", { value: "utf-8" });
    }
    function l(e) {
      var t = e.fatal,
        r = 0,
        i = 0,
        s = 0,
        a = 128,
        u = 191;
      this.handler = function (e, c) {
        if (-1 === c && 0 !== s) return (s = 0), o(t);
        if (-1 === c) return -1;
        if (0 === s) {
          if (n(c, 0, 127)) return c;
          if (n(c, 194, 223)) (s = 1), (r = c - 192);
          else if (n(c, 224, 239))
            224 === c && (a = 160),
              237 === c && (u = 159),
              (s = 2),
              (r = c - 224);
          else {
            if (!n(c, 240, 244)) return o(t);
            240 === c && (a = 144),
              244 === c && (u = 143),
              (s = 3),
              (r = c - 240);
          }
          return (r <<= 6 * s), null;
        }
        if (!n(c, a, u))
          return (r = s = i = 0), (a = 128), (u = 191), e.prepend(c), o(t);
        if (
          ((a = 128),
          (u = 191),
          (i += 1),
          (r += (c - 128) << (6 * (s - i))),
          i !== s)
        )
          return null;
        var l = r;
        return (r = s = i = 0), l;
      };
    }
    function f(e) {
      e.fatal,
        (this.handler = function (e, t) {
          if (-1 === t) return -1;
          if (n(t, 0, 127)) return t;
          n(t, 128, 2047)
            ? ((r = 1), (i = 192))
            : n(t, 2048, 65535)
            ? ((r = 2), (i = 224))
            : n(t, 65536, 1114111) && ((r = 3), (i = 240));
          for (var r, i, s = [(t >> (6 * r)) + i]; r > 0; ) {
            var o = t >> (6 * (r - 1));
            s.push(128 | (63 & o)), (r -= 1);
          }
          return s;
        });
    }
    (u.prototype = {
      decode: function (e, t) {
        (r =
          "object" == typeof e && e instanceof ArrayBuffer
            ? new Uint8Array(e)
            : "object" == typeof e &&
              "buffer" in e &&
              e.buffer instanceof ArrayBuffer
            ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength)
            : new Uint8Array(0)),
          (t = i(t)),
          this._streaming ||
            ((this._decoder = new l({ fatal: this._fatal })),
            (this._BOMseen = !1)),
          (this._streaming = !!t.stream);
        for (
          var r, n, o = new s(r), a = [];
          !o.endOfStream() && -1 !== (n = this._decoder.handler(o, o.read()));

        )
          null !== n && (Array.isArray(n) ? a.push.apply(a, n) : a.push(n));
        if (!this._streaming) {
          do {
            if (-1 === (n = this._decoder.handler(o, o.read()))) break;
            if (null === n) continue;
            Array.isArray(n) ? a.push.apply(a, n) : a.push(n);
          } while (!o.endOfStream());
          this._decoder = null;
        }
        !a.length ||
          -1 === ["utf-8"].indexOf(this.encoding) ||
          this._ignoreBOM ||
          this._BOMseen ||
          (65279 === a[0]
            ? ((this._BOMseen = !0), a.shift())
            : (this._BOMseen = !0));
        for (var u = "", c = 0; c < a.length; ++c) {
          var f = a[c];
          f <= 65535
            ? (u += String.fromCharCode(f))
            : ((f -= 65536),
              (u += String.fromCharCode(
                (f >> 10) + 55296,
                (1023 & f) + 56320
              )));
        }
        return u;
      },
    }),
      (c.prototype = {
        encode: function (e, t) {
          (e = e ? String(e) : ""),
            (t = i(t)),
            this._streaming || (this._encoder = new f(this._options)),
            (this._streaming = !!t.stream);
          for (
            var r,
              n = [],
              o = new s(
                (function (e) {
                  for (
                    var t = String(e), r = t.length, n = 0, i = [];
                    n < r;

                  ) {
                    var s = t.charCodeAt(n);
                    if (s < 55296 || s > 57343) i.push(s);
                    else if (56320 <= s && s <= 57343) i.push(65533);
                    else if (55296 <= s && s <= 56319)
                      if (n === r - 1) i.push(65533);
                      else {
                        var o = e.charCodeAt(n + 1);
                        if (56320 <= o && o <= 57343) {
                          var a = 1023 & s,
                            u = 1023 & o;
                          i.push(65536 + (a << 10) + u), (n += 1);
                        } else i.push(65533);
                      }
                    n += 1;
                  }
                  return i;
                })(e)
              );
            !o.endOfStream() && -1 !== (r = this._encoder.handler(o, o.read()));

          )
            Array.isArray(r) ? n.push.apply(n, r) : n.push(r);
          if (!this._streaming) {
            for (; -1 !== (r = this._encoder.handler(o, o.read())); )
              Array.isArray(r) ? n.push.apply(n, r) : n.push(r);
            this._encoder = null;
          }
          return new Uint8Array(n);
        },
      }),
      (r.TextEncoder = c),
      (r.TextDecoder = u);
  },
  154119,
  (e, t, r) => {
    "use strict";
    var n = e.i(467034),
      i =
        (e.e && e.e.__createBinding) ||
        (Object.create
          ? function (e, t, r, n) {
              void 0 === n && (n = r),
                Object.defineProperty(e, n, {
                  enumerable: !0,
                  get: function () {
                    return t[r];
                  },
                });
            }
          : function (e, t, r, n) {
              void 0 === n && (n = r), (e[n] = t[r]);
            }),
      s =
        (e.e && e.e.__setModuleDefault) ||
        (Object.create
          ? function (e, t) {
              Object.defineProperty(e, "default", { enumerable: !0, value: t });
            }
          : function (e, t) {
              e.default = t;
            }),
      o =
        (e.e && e.e.__decorate) ||
        function (e, t, r, n) {
          var i,
            s = arguments.length,
            o =
              s < 3
                ? t
                : null === n
                ? (n = Object.getOwnPropertyDescriptor(t, r))
                : n;
          if (
            "object" == typeof Reflect &&
            "function" == typeof Reflect.decorate
          )
            o = Reflect.decorate(e, t, r, n);
          else
            for (var a = e.length - 1; a >= 0; a--)
              (i = e[a]) &&
                (o = (s < 3 ? i(o) : s > 3 ? i(t, r, o) : i(t, r)) || o);
          return s > 3 && o && Object.defineProperty(t, r, o), o;
        },
      a =
        (e.e && e.e.__importStar) ||
        function (e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e)
            for (var r in e)
              "default" !== r && Object.hasOwnProperty.call(e, r) && i(t, e, r);
          return s(t, e), t;
        },
      u =
        (e.e && e.e.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
    Object.defineProperty(r, "__esModule", { value: !0 }),
      (r.deserializeUnchecked =
        r.deserialize =
        r.serialize =
        r.BinaryReader =
        r.BinaryWriter =
        r.BorshError =
        r.baseDecode =
        r.baseEncode =
          void 0);
    let c = u(e.r(659341)),
      l = u(e.r(701262)),
      f = a(e.r(572766)),
      h = new ("function" != typeof TextDecoder ? f.TextDecoder : TextDecoder)(
        "utf-8",
        { fatal: !0 }
      );
    (r.baseEncode = function (e) {
      return (
        "string" == typeof e && (e = n.Buffer.from(e, "utf8")),
        l.default.encode(n.Buffer.from(e))
      );
    }),
      (r.baseDecode = function (e) {
        return n.Buffer.from(l.default.decode(e));
      });
    class d extends Error {
      constructor(e) {
        super(e), (this.fieldPath = []), (this.originalMessage = e);
      }
      addToFieldPath(e) {
        this.fieldPath.splice(0, 0, e),
          (this.message =
            this.originalMessage + ": " + this.fieldPath.join("."));
      }
    }
    r.BorshError = d;
    class p {
      constructor() {
        (this.buf = n.Buffer.alloc(1024)), (this.length = 0);
      }
      maybeResize() {
        this.buf.length < 16 + this.length &&
          (this.buf = n.Buffer.concat([this.buf, n.Buffer.alloc(1024)]));
      }
      writeU8(e) {
        this.maybeResize(),
          this.buf.writeUInt8(e, this.length),
          (this.length += 1);
      }
      writeU16(e) {
        this.maybeResize(),
          this.buf.writeUInt16LE(e, this.length),
          (this.length += 2);
      }
      writeU32(e) {
        this.maybeResize(),
          this.buf.writeUInt32LE(e, this.length),
          (this.length += 4);
      }
      writeU64(e) {
        this.maybeResize(),
          this.writeBuffer(n.Buffer.from(new c.default(e).toArray("le", 8)));
      }
      writeU128(e) {
        this.maybeResize(),
          this.writeBuffer(n.Buffer.from(new c.default(e).toArray("le", 16)));
      }
      writeU256(e) {
        this.maybeResize(),
          this.writeBuffer(n.Buffer.from(new c.default(e).toArray("le", 32)));
      }
      writeU512(e) {
        this.maybeResize(),
          this.writeBuffer(n.Buffer.from(new c.default(e).toArray("le", 64)));
      }
      writeBuffer(e) {
        (this.buf = n.Buffer.concat([
          n.Buffer.from(this.buf.subarray(0, this.length)),
          e,
          n.Buffer.alloc(1024),
        ])),
          (this.length += e.length);
      }
      writeString(e) {
        this.maybeResize();
        let t = n.Buffer.from(e, "utf8");
        this.writeU32(t.length), this.writeBuffer(t);
      }
      writeFixedArray(e) {
        this.writeBuffer(n.Buffer.from(e));
      }
      writeArray(e, t) {
        for (let r of (this.maybeResize(), this.writeU32(e.length), e))
          this.maybeResize(), t(r);
      }
      toArray() {
        return this.buf.subarray(0, this.length);
      }
    }
    function g(e, t, r) {
      let n = r.value;
      r.value = function (...e) {
        try {
          return n.apply(this, e);
        } catch (e) {
          if (
            e instanceof RangeError &&
            ["ERR_BUFFER_OUT_OF_BOUNDS", "ERR_OUT_OF_RANGE"].indexOf(e.code) >=
              0
          )
            throw new d("Reached the end of buffer when deserializing");
          throw e;
        }
      };
    }
    r.BinaryWriter = p;
    class y {
      constructor(e) {
        (this.buf = e), (this.offset = 0);
      }
      readU8() {
        let e = this.buf.readUInt8(this.offset);
        return (this.offset += 1), e;
      }
      readU16() {
        let e = this.buf.readUInt16LE(this.offset);
        return (this.offset += 2), e;
      }
      readU32() {
        let e = this.buf.readUInt32LE(this.offset);
        return (this.offset += 4), e;
      }
      readU64() {
        let e = this.readBuffer(8);
        return new c.default(e, "le");
      }
      readU128() {
        let e = this.readBuffer(16);
        return new c.default(e, "le");
      }
      readU256() {
        let e = this.readBuffer(32);
        return new c.default(e, "le");
      }
      readU512() {
        let e = this.readBuffer(64);
        return new c.default(e, "le");
      }
      readBuffer(e) {
        if (this.offset + e > this.buf.length)
          throw new d(`Expected buffer length ${e} isn't within bounds`);
        let t = this.buf.slice(this.offset, this.offset + e);
        return (this.offset += e), t;
      }
      readString() {
        let e = this.readU32(),
          t = this.readBuffer(e);
        try {
          return h.decode(t);
        } catch (e) {
          throw new d(`Error decoding UTF-8 string: ${e}`);
        }
      }
      readFixedArray(e) {
        return new Uint8Array(this.readBuffer(e));
      }
      readArray(e) {
        let t = this.readU32(),
          r = [];
        for (let n = 0; n < t; ++n) r.push(e());
        return r;
      }
    }
    function m(e) {
      return e.charAt(0).toUpperCase() + e.slice(1);
    }
    function b(e, t, r, n, i) {
      try {
        if ("string" == typeof n) i[`write${m(n)}`](r);
        else if (n instanceof Array)
          if ("number" == typeof n[0]) {
            if (r.length !== n[0])
              throw new d(
                `Expecting byte array of length ${n[0]}, but got ${r.length} bytes`
              );
            i.writeFixedArray(r);
          } else if (2 === n.length && "number" == typeof n[1]) {
            if (r.length !== n[1])
              throw new d(
                `Expecting byte array of length ${n[1]}, but got ${r.length} bytes`
              );
            for (let t = 0; t < n[1]; t++) b(e, null, r[t], n[0], i);
          } else
            i.writeArray(r, (r) => {
              b(e, t, r, n[0], i);
            });
        else if (void 0 !== n.kind)
          switch (n.kind) {
            case "option":
              null == r ? i.writeU8(0) : (i.writeU8(1), b(e, t, r, n.type, i));
              break;
            case "map":
              i.writeU32(r.size),
                r.forEach((r, s) => {
                  b(e, t, s, n.key, i), b(e, t, r, n.value, i);
                });
              break;
            default:
              throw new d(`FieldType ${n} unrecognized`);
          }
        else w(e, r, i);
      } catch (e) {
        throw (e instanceof d && e.addToFieldPath(t), e);
      }
    }
    function w(e, t, r) {
      if ("function" == typeof t.borshSerialize)
        return void t.borshSerialize(r);
      let n = e.get(t.constructor);
      if (!n) throw new d(`Class ${t.constructor.name} is missing in schema`);
      if ("struct" === n.kind)
        n.fields.map(([n, i]) => {
          b(e, n, t[n], i, r);
        });
      else if ("enum" === n.kind) {
        let i = t[n.field];
        for (let s = 0; s < n.values.length; ++s) {
          let [o, a] = n.values[s];
          if (o === i) {
            r.writeU8(s), b(e, o, t[o], a, r);
            break;
          }
        }
      } else
        throw new d(
          `Unexpected schema kind: ${n.kind} for ${t.constructor.name}`
        );
    }
    function S(e, t, r, n) {
      try {
        if ("string" == typeof r) return n[`read${m(r)}`]();
        if (r instanceof Array)
          if ("number" == typeof r[0]) return n.readFixedArray(r[0]);
          else {
            if ("number" != typeof r[1])
              return n.readArray(() => S(e, t, r[0], n));
            let i = [];
            for (let t = 0; t < r[1]; t++) i.push(S(e, null, r[0], n));
            return i;
          }
        if ("option" === r.kind) {
          if (n.readU8()) return S(e, t, r.type, n);
          return;
        }
        if ("map" === r.kind) {
          let i = new Map(),
            s = n.readU32();
          for (let o = 0; o < s; o++) {
            let s = S(e, t, r.key, n),
              o = S(e, t, r.value, n);
            i.set(s, o);
          }
          return i;
        }
        return k(e, r, n);
      } catch (e) {
        throw (e instanceof d && e.addToFieldPath(t), e);
      }
    }
    function k(e, t, r) {
      if ("function" == typeof t.borshDeserialize) return t.borshDeserialize(r);
      let n = e.get(t);
      if (!n) throw new d(`Class ${t.name} is missing in schema`);
      if ("struct" === n.kind) {
        let n = {};
        for (let [i, s] of e.get(t).fields) n[i] = S(e, i, s, r);
        return new t(n);
      }
      if ("enum" === n.kind) {
        let i = r.readU8();
        if (i >= n.values.length)
          throw new d(`Enum index: ${i} is out of range`);
        let [s, o] = n.values[i],
          a = S(e, s, o, r);
        return new t({ [s]: a });
      }
      throw new d(
        `Unexpected schema kind: ${n.kind} for ${t.constructor.name}`
      );
    }
    o([g], y.prototype, "readU8", null),
      o([g], y.prototype, "readU16", null),
      o([g], y.prototype, "readU32", null),
      o([g], y.prototype, "readU64", null),
      o([g], y.prototype, "readU128", null),
      o([g], y.prototype, "readU256", null),
      o([g], y.prototype, "readU512", null),
      o([g], y.prototype, "readString", null),
      o([g], y.prototype, "readFixedArray", null),
      o([g], y.prototype, "readArray", null),
      (r.BinaryReader = y),
      (r.serialize = function (e, t, r = p) {
        let n = new r();
        return w(e, t, n), n.toArray();
      }),
      (r.deserialize = function (e, t, r, n = y) {
        let i = new n(r),
          s = k(e, t, i);
        if (i.offset < r.length)
          throw new d(
            `Unexpected ${r.length - i.offset} bytes after deserialized data`
          );
        return s;
      }),
      (r.deserializeUnchecked = function (e, t, r, n = y) {
        return k(e, t, new n(r));
      });
  },
  444610,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 }),
      (r.s16 =
        r.s8 =
        r.nu64be =
        r.u48be =
        r.u40be =
        r.u32be =
        r.u24be =
        r.u16be =
        r.nu64 =
        r.u48 =
        r.u40 =
        r.u32 =
        r.u24 =
        r.u16 =
        r.u8 =
        r.offset =
        r.greedy =
        r.Constant =
        r.UTF8 =
        r.CString =
        r.Blob =
        r.Boolean =
        r.BitField =
        r.BitStructure =
        r.VariantLayout =
        r.Union =
        r.UnionLayoutDiscriminator =
        r.UnionDiscriminator =
        r.Structure =
        r.Sequence =
        r.DoubleBE =
        r.Double =
        r.FloatBE =
        r.Float =
        r.NearInt64BE =
        r.NearInt64 =
        r.NearUInt64BE =
        r.NearUInt64 =
        r.IntBE =
        r.Int =
        r.UIntBE =
        r.UInt =
        r.OffsetLayout =
        r.GreedyCount =
        r.ExternalLayout =
        r.bindConstructorLayout =
        r.nameWithProperty =
        r.Layout =
        r.uint8ArrayToBuffer =
        r.checkUint8Array =
          void 0),
      (r.constant =
        r.utf8 =
        r.cstr =
        r.blob =
        r.unionLayoutDiscriminator =
        r.union =
        r.seq =
        r.bits =
        r.struct =
        r.f64be =
        r.f64 =
        r.f32be =
        r.f32 =
        r.ns64be =
        r.s48be =
        r.s40be =
        r.s32be =
        r.s24be =
        r.s16be =
        r.ns64 =
        r.s48 =
        r.s40 =
        r.s32 =
        r.s24 =
          void 0);
    let n = e.r(843943);
    function i(e) {
      if (!(e instanceof Uint8Array)) throw TypeError("b must be a Uint8Array");
    }
    function s(e) {
      return i(e), n.Buffer.from(e.buffer, e.byteOffset, e.length);
    }
    (r.checkUint8Array = i), (r.uint8ArrayToBuffer = s);
    class o {
      constructor(e, t) {
        if (!Number.isInteger(e)) throw TypeError("span must be an integer");
        (this.span = e), (this.property = t);
      }
      makeDestinationObject() {
        return {};
      }
      getSpan(e, t) {
        if (0 > this.span) throw RangeError("indeterminate span");
        return this.span;
      }
      replicate(e) {
        let t = Object.create(this.constructor.prototype);
        return Object.assign(t, this), (t.property = e), t;
      }
      fromArray(e) {}
    }
    function a(e, t) {
      return t.property ? e + "[" + t.property + "]" : e;
    }
    (r.Layout = o),
      (r.nameWithProperty = a),
      (r.bindConstructorLayout = function (e, t) {
        if ("function" != typeof e)
          throw TypeError("Class must be constructor");
        if (Object.prototype.hasOwnProperty.call(e, "layout_"))
          throw Error("Class is already bound to a layout");
        if (!(t && t instanceof o)) throw TypeError("layout must be a Layout");
        if (Object.prototype.hasOwnProperty.call(t, "boundConstructor_"))
          throw Error("layout is already bound to a constructor");
        (e.layout_ = t),
          (t.boundConstructor_ = e),
          (t.makeDestinationObject = () => new e()),
          Object.defineProperty(e.prototype, "encode", {
            value(e, r) {
              return t.encode(this, e, r);
            },
            writable: !0,
          }),
          Object.defineProperty(e, "decode", {
            value: (e, r) => t.decode(e, r),
            writable: !0,
          });
      });
    class u extends o {
      isCount() {
        throw Error("ExternalLayout is abstract");
      }
    }
    r.ExternalLayout = u;
    class c extends u {
      constructor(e = 1, t) {
        if (!Number.isInteger(e) || 0 >= e)
          throw TypeError("elementSpan must be a (positive) integer");
        super(-1, t), (this.elementSpan = e);
      }
      isCount() {
        return !0;
      }
      decode(e, t = 0) {
        return i(e), Math.floor((e.length - t) / this.elementSpan);
      }
      encode(e, t, r) {
        return 0;
      }
    }
    r.GreedyCount = c;
    class l extends u {
      constructor(e, t = 0, r) {
        if (!(e instanceof o)) throw TypeError("layout must be a Layout");
        if (!Number.isInteger(t))
          throw TypeError("offset must be integer or undefined");
        super(e.span, r || e.property), (this.layout = e), (this.offset = t);
      }
      isCount() {
        return this.layout instanceof f || this.layout instanceof h;
      }
      decode(e, t = 0) {
        return this.layout.decode(e, t + this.offset);
      }
      encode(e, t, r = 0) {
        return this.layout.encode(e, t, r + this.offset);
      }
    }
    r.OffsetLayout = l;
    class f extends o {
      constructor(e, t) {
        if ((super(e, t), 6 < this.span))
          throw RangeError("span must not exceed 6 bytes");
      }
      decode(e, t = 0) {
        return s(e).readUIntLE(t, this.span);
      }
      encode(e, t, r = 0) {
        return s(t).writeUIntLE(e, r, this.span), this.span;
      }
    }
    r.UInt = f;
    class h extends o {
      constructor(e, t) {
        if ((super(e, t), 6 < this.span))
          throw RangeError("span must not exceed 6 bytes");
      }
      decode(e, t = 0) {
        return s(e).readUIntBE(t, this.span);
      }
      encode(e, t, r = 0) {
        return s(t).writeUIntBE(e, r, this.span), this.span;
      }
    }
    r.UIntBE = h;
    class d extends o {
      constructor(e, t) {
        if ((super(e, t), 6 < this.span))
          throw RangeError("span must not exceed 6 bytes");
      }
      decode(e, t = 0) {
        return s(e).readIntLE(t, this.span);
      }
      encode(e, t, r = 0) {
        return s(t).writeIntLE(e, r, this.span), this.span;
      }
    }
    r.Int = d;
    class p extends o {
      constructor(e, t) {
        if ((super(e, t), 6 < this.span))
          throw RangeError("span must not exceed 6 bytes");
      }
      decode(e, t = 0) {
        return s(e).readIntBE(t, this.span);
      }
      encode(e, t, r = 0) {
        return s(t).writeIntBE(e, r, this.span), this.span;
      }
    }
    function g(e) {
      let t = Math.floor(e / 0x100000000);
      return { hi32: t, lo32: e - 0x100000000 * t };
    }
    function y(e, t) {
      return 0x100000000 * e + t;
    }
    r.IntBE = p;
    class m extends o {
      constructor(e) {
        super(8, e);
      }
      decode(e, t = 0) {
        let r = s(e),
          n = r.readUInt32LE(t);
        return y(r.readUInt32LE(t + 4), n);
      }
      encode(e, t, r = 0) {
        let n = g(e),
          i = s(t);
        return i.writeUInt32LE(n.lo32, r), i.writeUInt32LE(n.hi32, r + 4), 8;
      }
    }
    r.NearUInt64 = m;
    class b extends o {
      constructor(e) {
        super(8, e);
      }
      decode(e, t = 0) {
        let r = s(e);
        return y(r.readUInt32BE(t), r.readUInt32BE(t + 4));
      }
      encode(e, t, r = 0) {
        let n = g(e),
          i = s(t);
        return i.writeUInt32BE(n.hi32, r), i.writeUInt32BE(n.lo32, r + 4), 8;
      }
    }
    r.NearUInt64BE = b;
    class w extends o {
      constructor(e) {
        super(8, e);
      }
      decode(e, t = 0) {
        let r = s(e),
          n = r.readUInt32LE(t);
        return y(r.readInt32LE(t + 4), n);
      }
      encode(e, t, r = 0) {
        let n = g(e),
          i = s(t);
        return i.writeUInt32LE(n.lo32, r), i.writeInt32LE(n.hi32, r + 4), 8;
      }
    }
    r.NearInt64 = w;
    class S extends o {
      constructor(e) {
        super(8, e);
      }
      decode(e, t = 0) {
        let r = s(e);
        return y(r.readInt32BE(t), r.readUInt32BE(t + 4));
      }
      encode(e, t, r = 0) {
        let n = g(e),
          i = s(t);
        return i.writeInt32BE(n.hi32, r), i.writeUInt32BE(n.lo32, r + 4), 8;
      }
    }
    r.NearInt64BE = S;
    class k extends o {
      constructor(e) {
        super(4, e);
      }
      decode(e, t = 0) {
        return s(e).readFloatLE(t);
      }
      encode(e, t, r = 0) {
        return s(t).writeFloatLE(e, r), 4;
      }
    }
    r.Float = k;
    class v extends o {
      constructor(e) {
        super(4, e);
      }
      decode(e, t = 0) {
        return s(e).readFloatBE(t);
      }
      encode(e, t, r = 0) {
        return s(t).writeFloatBE(e, r), 4;
      }
    }
    r.FloatBE = v;
    class B extends o {
      constructor(e) {
        super(8, e);
      }
      decode(e, t = 0) {
        return s(e).readDoubleLE(t);
      }
      encode(e, t, r = 0) {
        return s(t).writeDoubleLE(e, r), 8;
      }
    }
    r.Double = B;
    class I extends o {
      constructor(e) {
        super(8, e);
      }
      decode(e, t = 0) {
        return s(e).readDoubleBE(t);
      }
      encode(e, t, r = 0) {
        return s(t).writeDoubleBE(e, r), 8;
      }
    }
    r.DoubleBE = I;
    class E extends o {
      constructor(e, t, r) {
        if (!(e instanceof o))
          throw TypeError("elementLayout must be a Layout");
        if (
          !((t instanceof u && t.isCount()) || (Number.isInteger(t) && 0 <= t))
        )
          throw TypeError(
            "count must be non-negative integer or an unsigned integer ExternalLayout"
          );
        let n = -1;
        t instanceof u || !(0 < e.span) || (n = t * e.span),
          super(n, r),
          (this.elementLayout = e),
          (this.count = t);
      }
      getSpan(e, t = 0) {
        if (0 <= this.span) return this.span;
        let r = 0,
          n = this.count;
        if (
          (n instanceof u && (n = n.decode(e, t)), 0 < this.elementLayout.span)
        )
          r = n * this.elementLayout.span;
        else {
          let i = 0;
          for (; i < n; ) (r += this.elementLayout.getSpan(e, t + r)), ++i;
        }
        return r;
      }
      decode(e, t = 0) {
        let r = [],
          n = 0,
          i = this.count;
        for (i instanceof u && (i = i.decode(e, t)); n < i; )
          r.push(this.elementLayout.decode(e, t)),
            (t += this.elementLayout.getSpan(e, t)),
            (n += 1);
        return r;
      }
      encode(e, t, r = 0) {
        let n = this.elementLayout,
          i = e.reduce((e, i) => e + n.encode(i, t, r + e), 0);
        return this.count instanceof u && this.count.encode(e.length, t, r), i;
      }
    }
    r.Sequence = E;
    class A extends o {
      constructor(e, t, r) {
        if (!(Array.isArray(e) && e.reduce((e, t) => e && t instanceof o, !0)))
          throw TypeError("fields must be array of Layout instances");
        for (const n of ("boolean" == typeof t &&
          void 0 === r &&
          ((r = t), (t = void 0)),
        e))
          if (0 > n.span && void 0 === n.property)
            throw Error("fields cannot contain unnamed variable-length layout");
        let n = -1;
        try {
          n = e.reduce((e, t) => e + t.getSpan(), 0);
        } catch (e) {}
        super(n, t), (this.fields = e), (this.decodePrefixes = !!r);
      }
      getSpan(e, t = 0) {
        if (0 <= this.span) return this.span;
        let r = 0;
        try {
          r = this.fields.reduce((r, n) => {
            let i = n.getSpan(e, t);
            return (t += i), r + i;
          }, 0);
        } catch (e) {
          throw RangeError("indeterminate span");
        }
        return r;
      }
      decode(e, t = 0) {
        i(e);
        let r = this.makeDestinationObject();
        for (let n of this.fields)
          if (
            (void 0 !== n.property && (r[n.property] = n.decode(e, t)),
            (t += n.getSpan(e, t)),
            this.decodePrefixes && e.length === t)
          )
            break;
        return r;
      }
      encode(e, t, r = 0) {
        let n = r,
          i = 0,
          s = 0;
        for (let n of this.fields) {
          let o = n.span;
          if (((s = 0 < o ? o : 0), void 0 !== n.property)) {
            let i = e[n.property];
            void 0 !== i &&
              ((s = n.encode(i, t, r)), 0 > o && (o = n.getSpan(t, r)));
          }
          (i = r), (r += o);
        }
        return i + s - n;
      }
      fromArray(e) {
        let t = this.makeDestinationObject();
        for (let r of this.fields)
          void 0 !== r.property && 0 < e.length && (t[r.property] = e.shift());
        return t;
      }
      layoutFor(e) {
        if ("string" != typeof e) throw TypeError("property must be string");
        for (let t of this.fields) if (t.property === e) return t;
      }
      offsetOf(e) {
        if ("string" != typeof e) throw TypeError("property must be string");
        let t = 0;
        for (let r of this.fields) {
          if (r.property === e) return t;
          0 > r.span ? (t = -1) : 0 <= t && (t += r.span);
        }
      }
    }
    r.Structure = A;
    class x {
      constructor(e) {
        this.property = e;
      }
      decode(e, t) {
        throw Error("UnionDiscriminator is abstract");
      }
      encode(e, t, r) {
        throw Error("UnionDiscriminator is abstract");
      }
    }
    r.UnionDiscriminator = x;
    class _ extends x {
      constructor(e, t) {
        if (!(e instanceof u && e.isCount()))
          throw TypeError("layout must be an unsigned integer ExternalLayout");
        super(t || e.property || "variant"), (this.layout = e);
      }
      decode(e, t) {
        return this.layout.decode(e, t);
      }
      encode(e, t, r) {
        return this.layout.encode(e, t, r);
      }
    }
    r.UnionLayoutDiscriminator = _;
    class T extends o {
      constructor(e, t, r) {
        let n;
        if (e instanceof f || e instanceof h) n = new _(new l(e));
        else if (e instanceof u && e.isCount()) n = new _(e);
        else if (e instanceof x) n = e;
        else
          throw TypeError(
            "discr must be a UnionDiscriminator or an unsigned integer layout"
          );
        if ((void 0 === t && (t = null), !(null === t || t instanceof o)))
          throw TypeError("defaultLayout must be null or a Layout");
        if (null !== t) {
          if (0 > t.span) throw Error("defaultLayout must have constant span");
          void 0 === t.property && (t = t.replicate("content"));
        }
        let i = -1;
        t &&
          0 <= (i = t.span) &&
          (e instanceof f || e instanceof h) &&
          (i += n.layout.span),
          super(i, r),
          (this.discriminator = n),
          (this.usesPrefixDiscriminator = e instanceof f || e instanceof h),
          (this.defaultLayout = t),
          (this.registry = {});
        let s = this.defaultGetSourceVariant.bind(this);
        (this.getSourceVariant = function (e) {
          return s(e);
        }),
          (this.configGetSourceVariant = function (e) {
            s = e.bind(this);
          });
      }
      getSpan(e, t = 0) {
        if (0 <= this.span) return this.span;
        let r = this.getVariant(e, t);
        if (!r)
          throw Error("unable to determine span for unrecognized variant");
        return r.getSpan(e, t);
      }
      defaultGetSourceVariant(e) {
        if (
          Object.prototype.hasOwnProperty.call(e, this.discriminator.property)
        ) {
          if (
            this.defaultLayout &&
            this.defaultLayout.property &&
            Object.prototype.hasOwnProperty.call(e, this.defaultLayout.property)
          )
            return;
          let t = this.registry[e[this.discriminator.property]];
          if (
            t &&
            (!t.layout ||
              (t.property &&
                Object.prototype.hasOwnProperty.call(e, t.property)))
          )
            return t;
        } else
          for (let t in this.registry) {
            let r = this.registry[t];
            if (
              r.property &&
              Object.prototype.hasOwnProperty.call(e, r.property)
            )
              return r;
          }
        throw Error("unable to infer src variant");
      }
      decode(e, t = 0) {
        let r,
          n = this.discriminator,
          i = n.decode(e, t),
          s = this.registry[i];
        if (void 0 === s) {
          let s = this.defaultLayout,
            o = 0;
          this.usesPrefixDiscriminator && (o = n.layout.span),
            ((r = this.makeDestinationObject())[n.property] = i),
            (r[s.property] = s.decode(e, t + o));
        } else r = s.decode(e, t);
        return r;
      }
      encode(e, t, r = 0) {
        let n = this.getSourceVariant(e);
        if (void 0 === n) {
          let n = this.discriminator,
            i = this.defaultLayout,
            s = 0;
          return (
            this.usesPrefixDiscriminator && (s = n.layout.span),
            n.encode(e[n.property], t, r),
            s + i.encode(e[i.property], t, r + s)
          );
        }
        return n.encode(e, t, r);
      }
      addVariant(e, t, r) {
        let n = new P(this, e, t, r);
        return (this.registry[e] = n), n;
      }
      getVariant(e, t = 0) {
        let r;
        return (
          (r = e instanceof Uint8Array ? this.discriminator.decode(e, t) : e),
          this.registry[r]
        );
      }
    }
    r.Union = T;
    class P extends o {
      constructor(e, t, r, n) {
        if (!(e instanceof T)) throw TypeError("union must be a Union");
        if (!Number.isInteger(t) || 0 > t)
          throw TypeError("variant must be a (non-negative) integer");
        if (
          ("string" == typeof r && void 0 === n && ((n = r), (r = null)), r)
        ) {
          if (!(r instanceof o)) throw TypeError("layout must be a Layout");
          if (
            null !== e.defaultLayout &&
            0 <= r.span &&
            r.span > e.defaultLayout.span
          )
            throw Error("variant span exceeds span of containing union");
          if ("string" != typeof n)
            throw TypeError("variant must have a String property");
        }
        let i = e.span;
        0 > e.span &&
          0 <= (i = r ? r.span : 0) &&
          e.usesPrefixDiscriminator &&
          (i += e.discriminator.layout.span),
          super(i, n),
          (this.union = e),
          (this.variant = t),
          (this.layout = r || null);
      }
      getSpan(e, t = 0) {
        if (0 <= this.span) return this.span;
        let r = 0;
        this.union.usesPrefixDiscriminator &&
          (r = this.union.discriminator.layout.span);
        let n = 0;
        return this.layout && (n = this.layout.getSpan(e, t + r)), r + n;
      }
      decode(e, t = 0) {
        let r = this.makeDestinationObject();
        if (this !== this.union.getVariant(e, t))
          throw Error("variant mismatch");
        let n = 0;
        return (
          this.union.usesPrefixDiscriminator &&
            (n = this.union.discriminator.layout.span),
          this.layout
            ? (r[this.property] = this.layout.decode(e, t + n))
            : this.property
            ? (r[this.property] = !0)
            : this.union.usesPrefixDiscriminator &&
              (r[this.union.discriminator.property] = this.variant),
          r
        );
      }
      encode(e, t, r = 0) {
        let n = 0;
        if (
          (this.union.usesPrefixDiscriminator &&
            (n = this.union.discriminator.layout.span),
          this.layout &&
            !Object.prototype.hasOwnProperty.call(e, this.property))
        )
          throw TypeError("variant lacks property " + this.property);
        this.union.discriminator.encode(this.variant, t, r);
        let i = n;
        if (
          this.layout &&
          (this.layout.encode(e[this.property], t, r + n),
          (i += this.layout.getSpan(t, r + n)),
          0 <= this.union.span && i > this.union.span)
        )
          throw Error("encoded variant overruns containing union");
        return i;
      }
      fromArray(e) {
        if (this.layout) return this.layout.fromArray(e);
      }
    }
    function C(e) {
      return 0 > e && (e += 0x100000000), e;
    }
    r.VariantLayout = P;
    class U extends o {
      constructor(e, t, r) {
        if (!(e instanceof f || e instanceof h))
          throw TypeError("word must be a UInt or UIntBE layout");
        if (
          ("string" == typeof t && void 0 === r && ((r = t), (t = !1)),
          4 < e.span)
        )
          throw RangeError("word cannot exceed 32 bits");
        super(e.span, r), (this.word = e), (this.msb = !!t), (this.fields = []);
        let n = 0;
        (this._packedSetValue = function (e) {
          return (n = C(e)), this;
        }),
          (this._packedGetValue = function () {
            return n;
          });
      }
      decode(e, t = 0) {
        let r = this.makeDestinationObject(),
          n = this.word.decode(e, t);
        for (let t of (this._packedSetValue(n), this.fields))
          void 0 !== t.property && (r[t.property] = t.decode(e));
        return r;
      }
      encode(e, t, r = 0) {
        let n = this.word.decode(t, r);
        for (let t of (this._packedSetValue(n), this.fields))
          if (void 0 !== t.property) {
            let r = e[t.property];
            void 0 !== r && t.encode(r);
          }
        return this.word.encode(this._packedGetValue(), t, r);
      }
      addField(e, t) {
        let r = new L(this, e, t);
        return this.fields.push(r), r;
      }
      addBoolean(e) {
        let t = new R(this, e);
        return this.fields.push(t), t;
      }
      fieldFor(e) {
        if ("string" != typeof e) throw TypeError("property must be string");
        for (let t of this.fields) if (t.property === e) return t;
      }
    }
    r.BitStructure = U;
    class L {
      constructor(e, t, r) {
        if (!(e instanceof U))
          throw TypeError("container must be a BitStructure");
        if (!Number.isInteger(t) || 0 >= t)
          throw TypeError("bits must be positive integer");
        const n = 8 * e.span,
          i = e.fields.reduce((e, t) => e + t.bits, 0);
        if (t + i > n)
          throw Error(
            "bits too long for span remainder (" +
              (n - i) +
              " of " +
              n +
              " remain)"
          );
        (this.container = e),
          (this.bits = t),
          (this.valueMask = (1 << t) - 1),
          32 === t && (this.valueMask = 0xffffffff),
          (this.start = i),
          this.container.msb && (this.start = n - i - t),
          (this.wordMask = C(this.valueMask << this.start)),
          (this.property = r);
      }
      decode(e, t) {
        return (
          C(this.container._packedGetValue() & this.wordMask) >>> this.start
        );
      }
      encode(e) {
        if (
          "number" != typeof e ||
          !Number.isInteger(e) ||
          e !== C(e & this.valueMask)
        )
          throw TypeError(
            a("BitField.encode", this) +
              " value must be integer not exceeding " +
              this.valueMask
          );
        let t = this.container._packedGetValue(),
          r = C(e << this.start);
        this.container._packedSetValue(C(t & ~this.wordMask) | r);
      }
    }
    r.BitField = L;
    class R extends L {
      constructor(e, t) {
        super(e, 1, t);
      }
      decode(e, t) {
        return !!super.decode(e, t);
      }
      encode(e) {
        "boolean" == typeof e && (e *= 1), super.encode(e);
      }
    }
    r.Boolean = R;
    class O extends o {
      constructor(e, t) {
        if (
          !((e instanceof u && e.isCount()) || (Number.isInteger(e) && 0 <= e))
        )
          throw TypeError(
            "length must be positive integer or an unsigned integer ExternalLayout"
          );
        let r = -1;
        e instanceof u || (r = e), super(r, t), (this.length = e);
      }
      getSpan(e, t) {
        let r = this.span;
        return 0 > r && (r = this.length.decode(e, t)), r;
      }
      decode(e, t = 0) {
        let r = this.span;
        return 0 > r && (r = this.length.decode(e, t)), s(e).slice(t, t + r);
      }
      encode(e, t, r) {
        let n = this.length;
        if (
          (this.length instanceof u && (n = e.length),
          !(e instanceof Uint8Array && n === e.length))
        )
          throw TypeError(
            a("Blob.encode", this) +
              " requires (length " +
              n +
              ") Uint8Array as src"
          );
        if (r + n > t.length) throw RangeError("encoding overruns Uint8Array");
        let i = s(e);
        return (
          s(t).write(i.toString("hex"), r, n, "hex"),
          this.length instanceof u && this.length.encode(n, t, r),
          n
        );
      }
    }
    r.Blob = O;
    class z extends o {
      constructor(e) {
        super(-1, e);
      }
      getSpan(e, t = 0) {
        i(e);
        let r = t;
        for (; r < e.length && 0 !== e[r]; ) r += 1;
        return 1 + r - t;
      }
      decode(e, t = 0) {
        let r = this.getSpan(e, t);
        return s(e)
          .slice(t, t + r - 1)
          .toString("utf-8");
      }
      encode(e, t, r = 0) {
        "string" != typeof e && (e = String(e));
        let i = n.Buffer.from(e, "utf8"),
          o = i.length;
        if (r + o > t.length) throw RangeError("encoding overruns Buffer");
        let a = s(t);
        return i.copy(a, r), (a[r + o] = 0), o + 1;
      }
    }
    r.CString = z;
    class N extends o {
      constructor(e, t) {
        if (
          ("string" == typeof e && void 0 === t && ((t = e), (e = void 0)),
          void 0 === e)
        )
          e = -1;
        else if (!Number.isInteger(e))
          throw TypeError("maxSpan must be an integer");
        super(-1, t), (this.maxSpan = e);
      }
      getSpan(e, t = 0) {
        return i(e), e.length - t;
      }
      decode(e, t = 0) {
        let r = this.getSpan(e, t);
        if (0 <= this.maxSpan && this.maxSpan < r)
          throw RangeError("text length exceeds maxSpan");
        return s(e)
          .slice(t, t + r)
          .toString("utf-8");
      }
      encode(e, t, r = 0) {
        "string" != typeof e && (e = String(e));
        let i = n.Buffer.from(e, "utf8"),
          o = i.length;
        if (0 <= this.maxSpan && this.maxSpan < o)
          throw RangeError("text length exceeds maxSpan");
        if (r + o > t.length) throw RangeError("encoding overruns Buffer");
        return i.copy(s(t), r), o;
      }
    }
    r.UTF8 = N;
    class W extends o {
      constructor(e, t) {
        super(0, t), (this.value = e);
      }
      decode(e, t) {
        return this.value;
      }
      encode(e, t, r) {
        return 0;
      }
    }
    (r.Constant = W),
      (r.greedy = (e, t) => new c(e, t)),
      (r.offset = (e, t, r) => new l(e, t, r)),
      (r.u8 = (e) => new f(1, e)),
      (r.u16 = (e) => new f(2, e)),
      (r.u24 = (e) => new f(3, e)),
      (r.u32 = (e) => new f(4, e)),
      (r.u40 = (e) => new f(5, e)),
      (r.u48 = (e) => new f(6, e)),
      (r.nu64 = (e) => new m(e)),
      (r.u16be = (e) => new h(2, e)),
      (r.u24be = (e) => new h(3, e)),
      (r.u32be = (e) => new h(4, e)),
      (r.u40be = (e) => new h(5, e)),
      (r.u48be = (e) => new h(6, e)),
      (r.nu64be = (e) => new b(e)),
      (r.s8 = (e) => new d(1, e)),
      (r.s16 = (e) => new d(2, e)),
      (r.s24 = (e) => new d(3, e)),
      (r.s32 = (e) => new d(4, e)),
      (r.s40 = (e) => new d(5, e)),
      (r.s48 = (e) => new d(6, e)),
      (r.ns64 = (e) => new w(e)),
      (r.s16be = (e) => new p(2, e)),
      (r.s24be = (e) => new p(3, e)),
      (r.s32be = (e) => new p(4, e)),
      (r.s40be = (e) => new p(5, e)),
      (r.s48be = (e) => new p(6, e)),
      (r.ns64be = (e) => new S(e)),
      (r.f32 = (e) => new k(e)),
      (r.f32be = (e) => new v(e)),
      (r.f64 = (e) => new B(e)),
      (r.f64be = (e) => new I(e)),
      (r.struct = (e, t, r) => new A(e, t, r)),
      (r.bits = (e, t, r) => new U(e, t, r)),
      (r.seq = (e, t, r) => new E(e, t, r)),
      (r.union = (e, t, r) => new T(e, t, r)),
      (r.unionLayoutDiscriminator = (e, t) => new _(e, t)),
      (r.blob = (e, t) => new O(e, t)),
      (r.cstr = (e) => new z(e)),
      (r.utf8 = (e, t) => new N(e, t)),
      (r.constant = (e, t) => new W(e, t));
  },
  719679,
  (e) => {
    "use strict";
    e.s([], 448675), e.i(448675);
    var t,
      r,
      n,
      i = new Uint8Array(16);
    function s() {
      if (
        !t &&
        !(t =
          ("undefined" != typeof crypto &&
            crypto.getRandomValues &&
            crypto.getRandomValues.bind(crypto)) ||
          ("undefined" != typeof msCrypto &&
            "function" == typeof msCrypto.getRandomValues &&
            msCrypto.getRandomValues.bind(msCrypto)))
      )
        throw Error(
          "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported"
        );
      return t(i);
    }
    let o =
        /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,
      a = function (e) {
        return "string" == typeof e && o.test(e);
      };
    for (var u = [], c = 0; c < 256; ++c)
      u.push((c + 256).toString(16).substr(1));
    let l = function (e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        r = (
          u[e[t + 0]] +
          u[e[t + 1]] +
          u[e[t + 2]] +
          u[e[t + 3]] +
          "-" +
          u[e[t + 4]] +
          u[e[t + 5]] +
          "-" +
          u[e[t + 6]] +
          u[e[t + 7]] +
          "-" +
          u[e[t + 8]] +
          u[e[t + 9]] +
          "-" +
          u[e[t + 10]] +
          u[e[t + 11]] +
          u[e[t + 12]] +
          u[e[t + 13]] +
          u[e[t + 14]] +
          u[e[t + 15]]
        ).toLowerCase();
      if (!a(r)) throw TypeError("Stringified UUID is invalid");
      return r;
    };
    var f = 0,
      h = 0;
    let d = function (e) {
      if (!a(e)) throw TypeError("Invalid UUID");
      var t,
        r = new Uint8Array(16);
      return (
        (r[0] = (t = parseInt(e.slice(0, 8), 16)) >>> 24),
        (r[1] = (t >>> 16) & 255),
        (r[2] = (t >>> 8) & 255),
        (r[3] = 255 & t),
        (r[4] = (t = parseInt(e.slice(9, 13), 16)) >>> 8),
        (r[5] = 255 & t),
        (r[6] = (t = parseInt(e.slice(14, 18), 16)) >>> 8),
        (r[7] = 255 & t),
        (r[8] = (t = parseInt(e.slice(19, 23), 16)) >>> 8),
        (r[9] = 255 & t),
        (r[10] = ((t = parseInt(e.slice(24, 36), 16)) / 0x10000000000) & 255),
        (r[11] = (t / 0x100000000) & 255),
        (r[12] = (t >>> 24) & 255),
        (r[13] = (t >>> 16) & 255),
        (r[14] = (t >>> 8) & 255),
        (r[15] = 255 & t),
        r
      );
    };
    function p(e, t, r) {
      function n(e, n, i, s) {
        if (
          ("string" == typeof e &&
            (e = (function (e) {
              e = unescape(encodeURIComponent(e));
              for (var t = [], r = 0; r < e.length; ++r)
                t.push(e.charCodeAt(r));
              return t;
            })(e)),
          "string" == typeof n && (n = d(n)),
          16 !== n.length)
        )
          throw TypeError(
            "Namespace must be array-like (16 iterable integer values, 0-255)"
          );
        var o = new Uint8Array(16 + e.length);
        if (
          (o.set(n),
          o.set(e, n.length),
          ((o = r(o))[6] = (15 & o[6]) | t),
          (o[8] = (63 & o[8]) | 128),
          i)
        ) {
          s = s || 0;
          for (var a = 0; a < 16; ++a) i[s + a] = o[a];
          return i;
        }
        return l(o);
      }
      try {
        n.name = e;
      } catch (e) {}
      return (
        (n.DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8"),
        (n.URL = "6ba7b811-9dad-11d1-80b4-00c04fd430c8"),
        n
      );
    }
    function g(e) {
      return (((e + 64) >>> 9) << 4) + 14 + 1;
    }
    function y(e, t) {
      var r = (65535 & e) + (65535 & t);
      return (((e >> 16) + (t >> 16) + (r >> 16)) << 16) | (65535 & r);
    }
    function m(e, t, r, n, i, s) {
      var o;
      return y(((o = y(y(t, e), y(n, s))) << i) | (o >>> (32 - i)), r);
    }
    function b(e, t, r, n, i, s, o) {
      return m((t & r) | (~t & n), e, t, i, s, o);
    }
    function w(e, t, r, n, i, s, o) {
      return m((t & n) | (r & ~n), e, t, i, s, o);
    }
    function S(e, t, r, n, i, s, o) {
      return m(t ^ r ^ n, e, t, i, s, o);
    }
    function k(e, t, r, n, i, s, o) {
      return m(r ^ (t | ~n), e, t, i, s, o);
    }
    var v = p("v3", 48, function (e) {
      if ("string" == typeof e) {
        var t = unescape(encodeURIComponent(e));
        e = new Uint8Array(t.length);
        for (var r = 0; r < t.length; ++r) e[r] = t.charCodeAt(r);
      }
      return (function (e) {
        for (
          var t = [], r = 32 * e.length, n = "0123456789abcdef", i = 0;
          i < r;
          i += 8
        ) {
          var s = (e[i >> 5] >>> i % 32) & 255,
            o = parseInt(n.charAt((s >>> 4) & 15) + n.charAt(15 & s), 16);
          t.push(o);
        }
        return t;
      })(
        (function (e, t) {
          (e[t >> 5] |= 128 << t % 32), (e[g(t) - 1] = t);
          for (
            var r = 0x67452301,
              n = -0x10325477,
              i = -0x67452302,
              s = 0x10325476,
              o = 0;
            o < e.length;
            o += 16
          ) {
            var a = r,
              u = n,
              c = i,
              l = s;
            (r = b(r, n, i, s, e[o], 7, -0x28955b88)),
              (s = b(s, r, n, i, e[o + 1], 12, -0x173848aa)),
              (i = b(i, s, r, n, e[o + 2], 17, 0x242070db)),
              (n = b(n, i, s, r, e[o + 3], 22, -0x3e423112)),
              (r = b(r, n, i, s, e[o + 4], 7, -0xa83f051)),
              (s = b(s, r, n, i, e[o + 5], 12, 0x4787c62a)),
              (i = b(i, s, r, n, e[o + 6], 17, -0x57cfb9ed)),
              (n = b(n, i, s, r, e[o + 7], 22, -0x2b96aff)),
              (r = b(r, n, i, s, e[o + 8], 7, 0x698098d8)),
              (s = b(s, r, n, i, e[o + 9], 12, -0x74bb0851)),
              (i = b(i, s, r, n, e[o + 10], 17, -42063)),
              (n = b(n, i, s, r, e[o + 11], 22, -0x76a32842)),
              (r = b(r, n, i, s, e[o + 12], 7, 0x6b901122)),
              (s = b(s, r, n, i, e[o + 13], 12, -0x2678e6d)),
              (i = b(i, s, r, n, e[o + 14], 17, -0x5986bc72)),
              (n = b(n, i, s, r, e[o + 15], 22, 0x49b40821)),
              (r = w(r, n, i, s, e[o + 1], 5, -0x9e1da9e)),
              (s = w(s, r, n, i, e[o + 6], 9, -0x3fbf4cc0)),
              (i = w(i, s, r, n, e[o + 11], 14, 0x265e5a51)),
              (n = w(n, i, s, r, e[o], 20, -0x16493856)),
              (r = w(r, n, i, s, e[o + 5], 5, -0x29d0efa3)),
              (s = w(s, r, n, i, e[o + 10], 9, 0x2441453)),
              (i = w(i, s, r, n, e[o + 15], 14, -0x275e197f)),
              (n = w(n, i, s, r, e[o + 4], 20, -0x182c0438)),
              (r = w(r, n, i, s, e[o + 9], 5, 0x21e1cde6)),
              (s = w(s, r, n, i, e[o + 14], 9, -0x3cc8f82a)),
              (i = w(i, s, r, n, e[o + 3], 14, -0xb2af279)),
              (n = w(n, i, s, r, e[o + 8], 20, 0x455a14ed)),
              (r = w(r, n, i, s, e[o + 13], 5, -0x561c16fb)),
              (s = w(s, r, n, i, e[o + 2], 9, -0x3105c08)),
              (i = w(i, s, r, n, e[o + 7], 14, 0x676f02d9)),
              (n = w(n, i, s, r, e[o + 12], 20, -0x72d5b376)),
              (r = S(r, n, i, s, e[o + 5], 4, -378558)),
              (s = S(s, r, n, i, e[o + 8], 11, -0x788e097f)),
              (i = S(i, s, r, n, e[o + 11], 16, 0x6d9d6122)),
              (n = S(n, i, s, r, e[o + 14], 23, -0x21ac7f4)),
              (r = S(r, n, i, s, e[o + 1], 4, -0x5b4115bc)),
              (s = S(s, r, n, i, e[o + 4], 11, 0x4bdecfa9)),
              (i = S(i, s, r, n, e[o + 7], 16, -0x944b4a0)),
              (n = S(n, i, s, r, e[o + 10], 23, -0x41404390)),
              (r = S(r, n, i, s, e[o + 13], 4, 0x289b7ec6)),
              (s = S(s, r, n, i, e[o], 11, -0x155ed806)),
              (i = S(i, s, r, n, e[o + 3], 16, -0x2b10cf7b)),
              (n = S(n, i, s, r, e[o + 6], 23, 0x4881d05)),
              (r = S(r, n, i, s, e[o + 9], 4, -0x262b2fc7)),
              (s = S(s, r, n, i, e[o + 12], 11, -0x1924661b)),
              (i = S(i, s, r, n, e[o + 15], 16, 0x1fa27cf8)),
              (n = S(n, i, s, r, e[o + 2], 23, -0x3b53a99b)),
              (r = k(r, n, i, s, e[o], 6, -0xbd6ddbc)),
              (s = k(s, r, n, i, e[o + 7], 10, 0x432aff97)),
              (i = k(i, s, r, n, e[o + 14], 15, -0x546bdc59)),
              (n = k(n, i, s, r, e[o + 5], 21, -0x36c5fc7)),
              (r = k(r, n, i, s, e[o + 12], 6, 0x655b59c3)),
              (s = k(s, r, n, i, e[o + 3], 10, -0x70f3336e)),
              (i = k(i, s, r, n, e[o + 10], 15, -1051523)),
              (n = k(n, i, s, r, e[o + 1], 21, -0x7a7ba22f)),
              (r = k(r, n, i, s, e[o + 8], 6, 0x6fa87e4f)),
              (s = k(s, r, n, i, e[o + 15], 10, -0x1d31920)),
              (i = k(i, s, r, n, e[o + 6], 15, -0x5cfebcec)),
              (n = k(n, i, s, r, e[o + 13], 21, 0x4e0811a1)),
              (r = k(r, n, i, s, e[o + 4], 6, -0x8ac817e)),
              (s = k(s, r, n, i, e[o + 11], 10, -0x42c50dcb)),
              (i = k(i, s, r, n, e[o + 2], 15, 0x2ad7d2bb)),
              (n = k(n, i, s, r, e[o + 9], 21, -0x14792c6f)),
              (r = y(r, a)),
              (n = y(n, u)),
              (i = y(i, c)),
              (s = y(s, l));
          }
          return [r, n, i, s];
        })(
          (function (e) {
            if (0 === e.length) return [];
            for (
              var t = 8 * e.length, r = new Uint32Array(g(t)), n = 0;
              n < t;
              n += 8
            )
              r[n >> 5] |= (255 & e[n / 8]) << n % 32;
            return r;
          })(e),
          8 * e.length
        )
      );
    });
    function B(e, t) {
      return (e << t) | (e >>> (32 - t));
    }
    var I = p("v5", 80, function (e) {
      var t = [0x5a827999, 0x6ed9eba1, 0x8f1bbcdc, 0xca62c1d6],
        r = [0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0];
      if ("string" == typeof e) {
        var n = unescape(encodeURIComponent(e));
        e = [];
        for (var i = 0; i < n.length; ++i) e.push(n.charCodeAt(i));
      } else Array.isArray(e) || (e = Array.prototype.slice.call(e));
      e.push(128);
      for (
        var s = Math.ceil((e.length / 4 + 2) / 16), o = Array(s), a = 0;
        a < s;
        ++a
      ) {
        for (var u = new Uint32Array(16), c = 0; c < 16; ++c)
          u[c] =
            (e[64 * a + 4 * c] << 24) |
            (e[64 * a + 4 * c + 1] << 16) |
            (e[64 * a + 4 * c + 2] << 8) |
            e[64 * a + 4 * c + 3];
        o[a] = u;
      }
      (o[s - 1][14] = ((e.length - 1) * 8) / 0x100000000),
        (o[s - 1][14] = Math.floor(o[s - 1][14])),
        (o[s - 1][15] = ((e.length - 1) * 8) | 0);
      for (var l = 0; l < s; ++l) {
        for (var f = new Uint32Array(80), h = 0; h < 16; ++h) f[h] = o[l][h];
        for (var d = 16; d < 80; ++d)
          f[d] = B(f[d - 3] ^ f[d - 8] ^ f[d - 14] ^ f[d - 16], 1);
        for (
          var p = r[0], g = r[1], y = r[2], m = r[3], b = r[4], w = 0;
          w < 80;
          ++w
        ) {
          var S = Math.floor(w / 20),
            k =
              (B(p, 5) +
                (function (e, t, r, n) {
                  switch (e) {
                    case 0:
                      return (t & r) ^ (~t & n);
                    case 1:
                    case 3:
                      return t ^ r ^ n;
                    case 2:
                      return (t & r) ^ (t & n) ^ (r & n);
                  }
                })(S, g, y, m) +
                b +
                t[S] +
                f[w]) >>>
              0;
          (b = m), (m = y), (y = B(g, 30) >>> 0), (g = p), (p = k);
        }
        (r[0] = (r[0] + p) >>> 0),
          (r[1] = (r[1] + g) >>> 0),
          (r[2] = (r[2] + y) >>> 0),
          (r[3] = (r[3] + m) >>> 0),
          (r[4] = (r[4] + b) >>> 0);
      }
      return [
        (r[0] >> 24) & 255,
        (r[0] >> 16) & 255,
        (r[0] >> 8) & 255,
        255 & r[0],
        (r[1] >> 24) & 255,
        (r[1] >> 16) & 255,
        (r[1] >> 8) & 255,
        255 & r[1],
        (r[2] >> 24) & 255,
        (r[2] >> 16) & 255,
        (r[2] >> 8) & 255,
        255 & r[2],
        (r[3] >> 24) & 255,
        (r[3] >> 16) & 255,
        (r[3] >> 8) & 255,
        255 & r[3],
        (r[4] >> 24) & 255,
        (r[4] >> 16) & 255,
        (r[4] >> 8) & 255,
        255 & r[4],
      ];
    });
    e.s(
      [
        "NIL",
        0,
        "00000000-0000-0000-0000-000000000000",
        "parse",
        0,
        d,
        "stringify",
        0,
        l,
        "v1",
        0,
        function (e, t, i) {
          var o = (t && i) || 0,
            a = t || Array(16),
            u = (e = e || {}).node || r,
            c = void 0 !== e.clockseq ? e.clockseq : n;
          if (null == u || null == c) {
            var d = e.random || (e.rng || s)();
            null == u && (u = r = [1 | d[0], d[1], d[2], d[3], d[4], d[5]]),
              null == c && (c = n = ((d[6] << 8) | d[7]) & 16383);
          }
          var p = void 0 !== e.msecs ? e.msecs : Date.now(),
            g = void 0 !== e.nsecs ? e.nsecs : h + 1,
            y = p - f + (g - h) / 1e4;
          if (
            (y < 0 && void 0 === e.clockseq && (c = (c + 1) & 16383),
            (y < 0 || p > f) && void 0 === e.nsecs && (g = 0),
            g >= 1e4)
          )
            throw Error("uuid.v1(): Can't create more than 10M uuids/sec");
          (f = p), (h = g), (n = c);
          var m = ((0xfffffff & (p += 122192928e5)) * 1e4 + g) % 0x100000000;
          (a[o++] = (m >>> 24) & 255),
            (a[o++] = (m >>> 16) & 255),
            (a[o++] = (m >>> 8) & 255),
            (a[o++] = 255 & m);
          var b = ((p / 0x100000000) * 1e4) & 0xfffffff;
          (a[o++] = (b >>> 8) & 255),
            (a[o++] = 255 & b),
            (a[o++] = ((b >>> 24) & 15) | 16),
            (a[o++] = (b >>> 16) & 255),
            (a[o++] = (c >>> 8) | 128),
            (a[o++] = 255 & c);
          for (var w = 0; w < 6; ++w) a[o + w] = u[w];
          return t || l(a);
        },
        "v3",
        0,
        v,
        "v4",
        0,
        function (e, t, r) {
          var n = (e = e || {}).random || (e.rng || s)();
          if (((n[6] = (15 & n[6]) | 64), (n[8] = (63 & n[8]) | 128), t)) {
            r = r || 0;
            for (var i = 0; i < 16; ++i) t[r + i] = n[i];
            return t;
          }
          return l(n);
        },
        "v5",
        0,
        I,
        "validate",
        0,
        a,
        "version",
        0,
        function (e) {
          if (!a(e)) throw TypeError("Invalid UUID");
          return parseInt(e.substr(14, 1), 16);
        },
      ],
      719679
    );
  },
  943173,
  (e, t, r) => {
    "use strict";
    let n = e.r(719679).v4;
    t.exports = function (e, t, r, i) {
      if ("string" != typeof e) throw TypeError(e + " must be a string");
      let s = "number" == typeof (i = i || {}).version ? i.version : 2;
      if (1 !== s && 2 !== s) throw TypeError(s + " must be 1 or 2");
      let o = { method: e };
      if ((2 === s && (o.jsonrpc = "2.0"), t)) {
        if ("object" != typeof t && !Array.isArray(t))
          throw TypeError(t + " must be an object, array or omitted");
        o.params = t;
      }
      return (
        void 0 === r
          ? (o.id = (
              "function" == typeof i.generator
                ? i.generator
                : function () {
                    return n();
                  }
            )(o, i))
          : 2 === s && null === r
          ? i.notificationIdNull && (o.id = null)
          : (o.id = r),
        o
      );
    };
  },
  578217,
  (e, t, r) => {
    "use strict";
    let n = e.r(719679).v4,
      i = e.r(943173),
      s = function (e, t) {
        if (!(this instanceof s)) return new s(e, t);
        t || (t = {}),
          (this.options = {
            reviver: void 0 !== t.reviver ? t.reviver : null,
            replacer: void 0 !== t.replacer ? t.replacer : null,
            generator:
              void 0 !== t.generator
                ? t.generator
                : function () {
                    return n();
                  },
            version: void 0 !== t.version ? t.version : 2,
            notificationIdNull:
              "boolean" == typeof t.notificationIdNull && t.notificationIdNull,
          }),
          (this.callServer = e);
      };
    (t.exports = s),
      (s.prototype.request = function (e, t, r, n) {
        let s,
          o = this,
          a = null,
          u = Array.isArray(e) && "function" == typeof t;
        if (1 === this.options.version && u)
          throw TypeError("JSON-RPC 1.0 does not support batching");
        let c = !u && e && "object" == typeof e && "function" == typeof t;
        if (u || c) (n = t), (a = e);
        else {
          "function" == typeof r && ((n = r), (r = void 0));
          let s = "function" == typeof n;
          try {
            a = i(e, t, r, {
              generator: this.options.generator,
              version: this.options.version,
              notificationIdNull: this.options.notificationIdNull,
            });
          } catch (e) {
            if (s) return n(e);
            throw e;
          }
          if (!s) return a;
        }
        try {
          s = JSON.stringify(a, this.options.replacer);
        } catch (e) {
          return n(e);
        }
        return (
          this.callServer(s, function (e, t) {
            o._parseResponse(e, t, n);
          }),
          a
        );
      }),
      (s.prototype._parseResponse = function (e, t, r) {
        let n;
        if (e) return void r(e);
        if (!t) return r();
        try {
          n = JSON.parse(t, this.options.reviver);
        } catch (e) {
          return r(e);
        }
        if (3 === r.length)
          if (!Array.isArray(n)) return r(null, n.error, n.result);
          else {
            let e = function (e) {
              return void 0 !== e.error;
            };
            return r(
              null,
              n.filter(e),
              n.filter(function (t) {
                return !e(t);
              })
            );
          }
        r(null, n);
      });
  },
  127261,
  (e) => {
    "use strict";
    var t,
      r,
      n,
      i,
      s,
      o = e.i(843943),
      a = e.i(44314),
      u = e.i(470525),
      c = e.i(810588),
      l = e.i(526539),
      f = e.i(870948);
    let h = BigInt(0),
      d = BigInt(1),
      p = BigInt(2),
      g = BigInt(8);
    class y {
      constructor(e) {
        this.ep = e;
      }
      static fromBytes(e) {
        (0, l.notImplemented)();
      }
      static fromHex(e) {
        (0, l.notImplemented)();
      }
      get x() {
        return this.toAffine().x;
      }
      get y() {
        return this.toAffine().y;
      }
      clearCofactor() {
        return this;
      }
      assertValidity() {
        this.ep.assertValidity();
      }
      toAffine(e) {
        return this.ep.toAffine(e);
      }
      toHex() {
        return (0, u.bytesToHex)(this.toBytes());
      }
      toString() {
        return this.toHex();
      }
      isTorsionFree() {
        return !0;
      }
      isSmallOrder() {
        return !1;
      }
      add(e) {
        return this.assertSame(e), this.init(this.ep.add(e.ep));
      }
      subtract(e) {
        return this.assertSame(e), this.init(this.ep.subtract(e.ep));
      }
      multiply(e) {
        return this.init(this.ep.multiply(e));
      }
      multiplyUnsafe(e) {
        return this.init(this.ep.multiplyUnsafe(e));
      }
      double() {
        return this.init(this.ep.double());
      }
      negate() {
        return this.init(this.ep.negate());
      }
      precompute(e, t) {
        return this.init(this.ep.precompute(e, t));
      }
      toRawBytes() {
        return this.toBytes();
      }
    }
    var m = e.i(933795);
    BigInt(0), BigInt(1), BigInt(2);
    let b = BigInt(0),
      w = BigInt(1),
      S = BigInt(2),
      k = BigInt(3),
      v = BigInt(5),
      B = BigInt(8),
      I = BigInt(
        "0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffed"
      ),
      E = {
        p: I,
        n: BigInt(
          "0x1000000000000000000000000000000014def9dea2f79cd65812631a5cf5d3ed"
        ),
        h: B,
        a: BigInt(
          "0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffec"
        ),
        d: BigInt(
          "0x52036cee2b6ffe738cc740797779e89800700a4d4141d8ab75eb4dca135978a3"
        ),
        Gx: BigInt(
          "0x216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a"
        ),
        Gy: BigInt(
          "0x6666666666666666666666666666666666666666666666666666666666666658"
        ),
      },
      A = BigInt(
        "19681161376707505956807079304988542015446066515923890162744021073123829784752"
      );
    function x(e, t) {
      var r;
      let n,
        i,
        s,
        o,
        a,
        u,
        c,
        l,
        h,
        d,
        p,
        g,
        y,
        m,
        b = (0, f.mod)(t * t * t, I),
        k = ((r = e * (0, f.mod)(b * b * t, I)),
        (n = BigInt(10)),
        (i = BigInt(20)),
        (s = BigInt(40)),
        (o = BigInt(80)),
        (a = (((r * r) % I) * r) % I),
        (u = ((0, f.pow2)(a, S, I) * a) % I),
        (c = ((0, f.pow2)(u, w, I) * r) % I),
        (l = ((0, f.pow2)(c, v, I) * c) % I),
        (h = ((0, f.pow2)(l, n, I) * l) % I),
        (d = ((0, f.pow2)(h, i, I) * h) % I),
        (p = ((0, f.pow2)(d, s, I) * d) % I),
        (g = ((0, f.pow2)(p, o, I) * p) % I),
        (y = ((0, f.pow2)(g, o, I) * p) % I),
        (m = ((0, f.pow2)(y, n, I) * l) % I),
        { pow_p_5_8: ((0, f.pow2)(m, S, I) * r) % I, b2: a }).pow_p_5_8,
        B = (0, f.mod)(e * b * k, I),
        E = (0, f.mod)(t * B * B, I),
        x = B,
        _ = (0, f.mod)(B * A, I),
        T = E === e,
        P = E === (0, f.mod)(-e, I),
        C = E === (0, f.mod)(-e * A, I);
      return (
        T && (B = x),
        (P || C) && (B = _),
        (0, f.isNegativeLE)(B, I) && (B = (0, f.mod)(-B, I)),
        { isValid: T || P, value: B }
      );
    }
    let _ = (0, f.Field)(E.p, { isLE: !0 }),
      T = (0, f.Field)(E.n, { isLE: !0 }),
      P = (function (e) {
        let t,
          r,
          n,
          i,
          {
            CURVE: s,
            curveOpts: o,
            hash: a,
            eddsaOpts: y,
          } = ((t = {
            a: e.a,
            d: e.d,
            p: e.Fp.ORDER,
            n: e.n,
            h: e.h,
            Gx: e.Gx,
            Gy: e.Gy,
          }),
          (r = {
            Fp: e.Fp,
            Fn: (0, f.Field)(t.n, e.nBitLength, !0),
            uvRatio: e.uvRatio,
          }),
          (n = {
            randomBytes: e.randomBytes,
            adjustScalarBytes: e.adjustScalarBytes,
            domain: e.domain,
            prehash: e.prehash,
            mapToCurve: e.mapToCurve,
          }),
          { CURVE: t, curveOpts: r, hash: e.hash, eddsaOpts: n }),
          m = (function (e, t, r = {}) {
            if ("function" != typeof t)
              throw Error('"hash" function param is required');
            (0, l._validateObject)(
              r,
              {},
              {
                adjustScalarBytes: "function",
                randomBytes: "function",
                domain: "function",
                prehash: "function",
                mapToCurve: "function",
              }
            );
            let { prehash: n } = r,
              { BASE: i, Fp: s, Fn: o } = e,
              a = r.randomBytes || u.randomBytes,
              c = r.adjustScalarBytes || ((e) => e),
              f =
                r.domain ||
                ((e, t, r) => {
                  if (((0, l._abool2)(r, "phflag"), t.length || r))
                    throw Error("Contexts/pre-hash are not supported");
                  return e;
                });
            function h(e) {
              return o.create((0, l.bytesToNumberLE)(e));
            }
            function p(e) {
              var r;
              let n,
                s,
                o,
                a,
                u,
                {
                  head: f,
                  prefix: d,
                  scalar: p,
                } = ((r = e),
                (n = w.secretKey),
                (r = (0, l.ensureBytes)("private key", r, n)),
                (o = c(
                  (s = (0, l.ensureBytes)(
                    "hashed private key",
                    t(r),
                    2 * n
                  )).slice(0, n)
                )),
                (a = s.slice(n, 2 * n)),
                (u = h(o)),
                { head: o, prefix: a, scalar: u }),
                g = i.multiply(p),
                y = g.toBytes();
              return { head: f, prefix: d, scalar: p, point: g, pointBytes: y };
            }
            function g(e) {
              return p(e).pointBytes;
            }
            function y(e = Uint8Array.of(), ...r) {
              return h(
                t(
                  f(
                    (0, u.concatBytes)(...r),
                    (0, l.ensureBytes)("context", e),
                    !!n
                  )
                )
              );
            }
            let m = { zip215: !0 },
              b = s.BYTES,
              w = { secretKey: b, publicKey: b, signature: 2 * b, seed: b };
            function S(e = a(w.seed)) {
              return (0, l._abytes2)(e, w.seed, "seed");
            }
            let k = {
              getExtendedPublicKey: p,
              randomSecretKey: S,
              isValidSecretKey: function (e) {
                return (0, u.isBytes)(e) && e.length === o.BYTES;
              },
              isValidPublicKey: function (t, r) {
                try {
                  return !!e.fromBytes(t, r);
                } catch (e) {
                  return !1;
                }
              },
              toMontgomery(t) {
                let { y: r } = e.fromBytes(t),
                  n = w.publicKey,
                  i = 32 === n;
                if (!i && 57 !== n)
                  throw Error("only defined for 25519 and 448");
                let o = i ? s.div(d + r, d - r) : s.div(r - d, r + d);
                return s.toBytes(o);
              },
              toMontgomerySecret(e) {
                let r = w.secretKey;
                return (
                  (0, l._abytes2)(e, r), c(t(e.subarray(0, r))).subarray(0, r)
                );
              },
              randomPrivateKey: S,
              precompute: (t = 8, r = e.BASE) => r.precompute(t, !1),
            };
            return Object.freeze({
              keygen: function (e) {
                let t = k.randomSecretKey(e);
                return { secretKey: t, publicKey: g(t) };
              },
              getPublicKey: g,
              sign: function (e, t, r = {}) {
                (e = (0, l.ensureBytes)("message", e)), n && (e = n(e));
                let { prefix: s, scalar: a, pointBytes: c } = p(t),
                  f = y(r.context, s, e),
                  h = i.multiply(f).toBytes(),
                  d = y(r.context, h, c, e),
                  g = o.create(f + d * a);
                if (!o.isValid(g)) throw Error("sign failed: invalid s");
                let m = (0, u.concatBytes)(h, o.toBytes(g));
                return (0, l._abytes2)(m, w.signature, "result");
              },
              verify: function (t, r, s, o = m) {
                let a,
                  u,
                  c,
                  { context: f, zip215: h } = o,
                  d = w.signature;
                (t = (0, l.ensureBytes)("signature", t, d)),
                  (r = (0, l.ensureBytes)("message", r)),
                  (s = (0, l.ensureBytes)("publicKey", s, w.publicKey)),
                  void 0 !== h && (0, l._abool2)(h, "zip215"),
                  n && (r = n(r));
                let p = d / 2,
                  g = t.subarray(0, p),
                  b = (0, l.bytesToNumberLE)(t.subarray(p, d));
                try {
                  (a = e.fromBytes(s, h)),
                    (u = e.fromBytes(g, h)),
                    (c = i.multiplyUnsafe(b));
                } catch (e) {
                  return !1;
                }
                if (!h && a.isSmallOrder()) return !1;
                let S = y(f, u.toBytes(), a.toBytes(), r);
                return u
                  .add(a.multiplyUnsafe(S))
                  .subtract(c)
                  .clearCofactor()
                  .is0();
              },
              utils: k,
              Point: e,
              lengths: w,
            });
          })(
            (function (e, t = {}) {
              var r, n;
              let i,
                s,
                o,
                a,
                f,
                y = (0, c._createCurveFields)("edwards", e, t, t.FpFnLE),
                { Fp: m, Fn: b } = y,
                w = y.CURVE,
                { h: S } = w;
              (0, l._validateObject)(t, {}, { uvRatio: "function" });
              let k = p << (BigInt(8 * b.BYTES) - d),
                v =
                  t.uvRatio ||
                  ((e, t) => {
                    try {
                      return { isValid: !0, value: m.sqrt(m.div(e, t)) };
                    } catch (e) {
                      return { isValid: !1, value: h };
                    }
                  });
              if (
                ((r = w.Gx),
                (n = w.Gy),
                (i = m.sqr(r)),
                (s = m.sqr(n)),
                (o = m.add(m.mul(w.a, i), s)),
                (a = m.add(m.ONE, m.mul(w.d, m.mul(i, s)))),
                !m.eql(o, a))
              )
                throw Error("bad curve params: generator point");
              function B(e, t, r = !1) {
                let n = r ? d : h;
                return (0, l.aInRange)("coordinate " + e, t, n, k), t;
              }
              function I(e) {
                if (!(e instanceof x)) throw Error("ExtendedPoint expected");
              }
              let E = (0, l.memoized)((e, t) => {
                  let r,
                    n,
                    { X: i, Y: s, Z: o } = e,
                    a = e.is0();
                  null == t && (t = a ? g : m.inv(o));
                  let u = ((r = i * t), m.create(r)),
                    c = ((n = s * t), m.create(n)),
                    l = m.mul(o, t);
                  if (a) return { x: h, y: d };
                  if (l !== d) throw Error("invZ was invalid");
                  return { x: u, y: c };
                }),
                A = (0, l.memoized)((e) => {
                  let t,
                    r,
                    n,
                    i,
                    s,
                    o,
                    a,
                    u,
                    c,
                    l,
                    f,
                    h,
                    { a: d, d: p } = w;
                  if (e.is0()) throw Error("bad point: ZERO");
                  let { X: g, Y: y, Z: b, T: S } = e,
                    k = ((t = g * g), m.create(t)),
                    v = ((r = y * y), m.create(r)),
                    B = ((n = b * b), m.create(n)),
                    I = ((i = B * B), m.create(i));
                  if (
                    ((a =
                      B * ((s = k * d), (o = m.create(s) + v), m.create(o))),
                    m.create(a) !==
                      ((l =
                        I +
                        ((c = p * ((u = k * v), m.create(u))), m.create(c))),
                      m.create(l)))
                  )
                    throw Error("bad point: equation left != right (1)");
                  if (((f = g * y), m.create(f) !== ((h = b * S), m.create(h))))
                    throw Error("bad point: equation left != right (2)");
                  return !0;
                });
              class x {
                constructor(e, t, r, n) {
                  (this.X = B("x", e)),
                    (this.Y = B("y", t)),
                    (this.Z = B("z", r, !0)),
                    (this.T = B("t", n)),
                    Object.freeze(this);
                }
                static CURVE() {
                  return w;
                }
                static fromAffine(e) {
                  let t;
                  if (e instanceof x) throw Error("extended point not allowed");
                  let { x: r, y: n } = e || {};
                  return (
                    B("x", r),
                    B("y", n),
                    new x(r, n, d, ((t = r * n), m.create(t)))
                  );
                }
                static fromBytes(e, t = !1) {
                  let r,
                    n,
                    i,
                    s,
                    o = m.BYTES,
                    { a, d: u } = w;
                  (e = (0, l.copyBytes)((0, l._abytes2)(e, o, "point"))),
                    (0, l._abool2)(t, "zip215");
                  let c = (0, l.copyBytes)(e),
                    f = e[o - 1];
                  c[o - 1] = -129 & f;
                  let p = (0, l.bytesToNumberLE)(c),
                    g = t ? k : m.ORDER;
                  (0, l.aInRange)("point.y", p, h, g);
                  let y = ((r = p * p), m.create(r)),
                    { isValid: b, value: S } = v(
                      ((n = y - d), m.create(n)),
                      ((i = u * y - a), m.create(i))
                    );
                  if (!b) throw Error("bad point: invalid y coordinate");
                  let B = (S & d) === d,
                    I = (128 & f) != 0;
                  if (!t && S === h && I)
                    throw Error("bad point: x=0 and x_0=1");
                  return (
                    I !== B && ((s = -S), (S = m.create(s))),
                    x.fromAffine({ x: S, y: p })
                  );
                }
                static fromHex(e, t = !1) {
                  return x.fromBytes((0, l.ensureBytes)("point", e), t);
                }
                get x() {
                  return this.toAffine().x;
                }
                get y() {
                  return this.toAffine().y;
                }
                precompute(e = 8, t = !0) {
                  return _.createCache(this, e), t || this.multiply(p), this;
                }
                assertValidity() {
                  A(this);
                }
                equals(e) {
                  let t, r, n, i;
                  I(e);
                  let { X: s, Y: o, Z: a } = this,
                    { X: u, Y: c, Z: l } = e,
                    f = ((t = s * l), m.create(t)),
                    h = ((r = u * a), m.create(r)),
                    d = ((n = o * l), m.create(n)),
                    p = ((i = c * a), m.create(i));
                  return f === h && d === p;
                }
                is0() {
                  return this.equals(x.ZERO);
                }
                negate() {
                  let e, t;
                  return new x(
                    ((e = -this.X), m.create(e)),
                    this.Y,
                    this.Z,
                    ((t = -this.T), m.create(t))
                  );
                }
                double() {
                  let e,
                    t,
                    r,
                    n,
                    i,
                    s,
                    o,
                    a,
                    u,
                    c,
                    l,
                    { a: f } = w,
                    { X: h, Y: d, Z: g } = this,
                    y = ((e = h * h), m.create(e)),
                    b = ((t = d * d), m.create(t)),
                    S = ((n = p * ((r = g * g), m.create(r))), m.create(n)),
                    k = ((i = f * y), m.create(i)),
                    v = h + d,
                    B = ((s = v * v), (o = m.create(s) - y - b), m.create(o)),
                    I = k + b,
                    E = I - S,
                    A = k - b,
                    _ = ((a = B * E), m.create(a)),
                    T = ((u = I * A), m.create(u)),
                    P = ((c = B * A), m.create(c));
                  return new x(_, T, ((l = E * I), m.create(l)), P);
                }
                add(e) {
                  let t, r, n, i, s, o, a, u, c, l;
                  I(e);
                  let { a: f, d: h } = w,
                    { X: d, Y: p, Z: g, T: y } = this,
                    { X: b, Y: S, Z: k, T: v } = e,
                    B = ((t = d * b), m.create(t)),
                    E = ((r = p * S), m.create(r)),
                    A = ((n = y * h * v), m.create(n)),
                    _ = ((i = g * k), m.create(i)),
                    T = ((s = (d + p) * (b + S) - B - E), m.create(s)),
                    P = _ - A,
                    C = _ + A,
                    U = ((o = E - f * B), m.create(o)),
                    L = ((a = T * P), m.create(a)),
                    R = ((u = C * U), m.create(u)),
                    O = ((c = T * U), m.create(c));
                  return new x(L, R, ((l = P * C), m.create(l)), O);
                }
                subtract(e) {
                  return this.add(e.negate());
                }
                multiply(e) {
                  if (!b.isValidNot0(e))
                    throw Error("invalid scalar: expected 1 <= sc < curve.n");
                  let { p: t, f: r } = _.cached(this, e, (e) =>
                    (0, c.normalizeZ)(x, e)
                  );
                  return (0, c.normalizeZ)(x, [t, r])[0];
                }
                multiplyUnsafe(e, t = x.ZERO) {
                  if (!b.isValid(e))
                    throw Error("invalid scalar: expected 0 <= sc < curve.n");
                  return e === h
                    ? x.ZERO
                    : this.is0() || e === d
                    ? this
                    : _.unsafe(this, e, (e) => (0, c.normalizeZ)(x, e), t);
                }
                isSmallOrder() {
                  return this.multiplyUnsafe(S).is0();
                }
                isTorsionFree() {
                  return _.unsafe(this, w.n).is0();
                }
                toAffine(e) {
                  return E(this, e);
                }
                clearCofactor() {
                  return S === d ? this : this.multiplyUnsafe(S);
                }
                toBytes() {
                  let { x: e, y: t } = this.toAffine(),
                    r = m.toBytes(t);
                  return (r[r.length - 1] |= e & d ? 128 : 0), r;
                }
                toHex() {
                  return (0, u.bytesToHex)(this.toBytes());
                }
                toString() {
                  return `<Point ${this.is0() ? "ZERO" : this.toHex()}>`;
                }
                get ex() {
                  return this.X;
                }
                get ey() {
                  return this.Y;
                }
                get ez() {
                  return this.Z;
                }
                get et() {
                  return this.T;
                }
                static normalizeZ(e) {
                  return (0, c.normalizeZ)(x, e);
                }
                static msm(e, t) {
                  return (0, c.pippenger)(x, b, e, t);
                }
                _setWindowSize(e) {
                  this.precompute(e);
                }
                toRawBytes() {
                  return this.toBytes();
                }
              }
              (x.BASE = new x(w.Gx, w.Gy, d, ((f = w.Gx * w.Gy), m.create(f)))),
                (x.ZERO = new x(h, d, d, h)),
                (x.Fp = m),
                (x.Fn = b);
              let _ = new c.wNAF(x, b.BITS);
              return x.BASE.precompute(8), x;
            })(s, o),
            a,
            y
          );
        return (
          (i = m.Point),
          Object.assign({}, m, {
            ExtendedPoint: i,
            CURVE: e,
            nBitLength: i.Fn.BITS,
            nByteLength: i.Fn.BYTES,
          })
        );
      })({
        ...E,
        Fp: _,
        hash: a.sha512,
        adjustScalarBytes: function (e) {
          return (e[0] &= 248), (e[31] &= 127), (e[31] |= 64), e;
        },
        uvRatio: x,
      }),
      C = (I + k) / B,
      U = _.pow(S, C),
      L = _.sqrt(_.neg(_.ONE)),
      R = (0, f.FpSqrtEven)(_, _.neg(BigInt(486664)));
    (0, m.createHasher)(
      P.Point,
      (e) =>
        (function (e) {
          let t,
            r,
            n,
            i,
            s,
            o,
            a,
            u,
            c,
            l,
            h,
            d,
            p,
            g,
            y,
            m,
            b,
            k,
            E,
            A,
            x,
            T,
            P,
            {
              xMn: C,
              xMd: O,
              yMn: z,
              yMd: N,
            } = ((t = (I - v) / B),
            (r = BigInt(486662)),
            (n = _.sqr(e)),
            (n = _.mul(n, S)),
            (i = _.add(n, _.ONE)),
            (s = _.neg(r)),
            (o = _.sqr(i)),
            (a = _.mul(o, i)),
            (u = _.mul(n, r)),
            (u = _.mul(u, s)),
            (u = _.add(u, o)),
            (u = _.mul(u, s)),
            (c = _.sqr(a)),
            (o = _.sqr(c)),
            (c = _.mul(c, a)),
            (c = _.mul(c, u)),
            (o = _.mul(o, c)),
            (l = _.pow(o, t)),
            (l = _.mul(l, c)),
            (h = _.mul(l, L)),
            (o = _.sqr(l)),
            (o = _.mul(o, a)),
            (d = _.eql(o, u)),
            (p = _.cmov(h, l, d)),
            (g = _.mul(s, n)),
            (y = _.mul(l, e)),
            (y = _.mul(y, U)),
            (m = _.mul(y, L)),
            (b = _.mul(u, n)),
            (o = _.sqr(y)),
            (o = _.mul(o, a)),
            (k = _.eql(o, b)),
            (E = _.cmov(m, y, k)),
            (o = _.sqr(p)),
            (o = _.mul(o, a)),
            (A = _.eql(o, u)),
            (x = _.cmov(g, s, A)),
            (T = _.cmov(E, p, A)),
            (P = _.isOdd(T)),
            {
              xMn: x,
              xMd: i,
              yMn: (T = _.cmov(T, _.neg(T), A !== P)),
              yMd: w,
            }),
            W = _.mul(C, N);
          W = _.mul(W, R);
          let M = _.mul(O, z),
            q = _.sub(C, O),
            K = _.add(C, O),
            D = _.mul(M, K),
            $ = _.eql(D, _.ZERO);
          (W = _.cmov(W, _.ZERO, $)),
            (M = _.cmov(M, _.ONE, $)),
            (q = _.cmov(q, _.ONE, $)),
            (K = _.cmov(K, _.ONE, $));
          let [F, j] = (0, f.FpInvertBatch)(_, [M, K], !0);
          return { x: _.mul(W, F), y: _.mul(q, j) };
        })(e[0]),
      {
        DST: "edwards25519_XMD:SHA-512_ELL2_RO_",
        encodeDST: "edwards25519_XMD:SHA-512_ELL2_NU_",
        p: I,
        m: 1,
        k: 128,
        expand: "xmd",
        hash: a.sha512,
      }
    );
    let O = BigInt(
        "25063068953384623474111414158702152701244531502492656460079210482610430750235"
      ),
      z = BigInt(
        "54469307008909316920995813868745141605393597292927456921205312896311721017578"
      ),
      N = BigInt(
        "1159843021668779879193775521855586647937357759715417654439879720876111806838"
      ),
      W = BigInt(
        "40440834346308536858101042469323190826248399146238708352240133220865137265952"
      ),
      M = BigInt(
        "0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
      ),
      q = (e) => P.Point.Fp.create((0, l.bytesToNumberLE)(e) & M);
    function K(e) {
      let t,
        r,
        n,
        i,
        s,
        o,
        a,
        u,
        c,
        l,
        h,
        d,
        p,
        g,
        y,
        { d: m } = E,
        b = ((t = A * e * e), _.create(t)),
        S = ((r = (b + w) * N), _.create(r)),
        k = BigInt(-1),
        v = ((i = (k - m * b) * ((n = b + m), _.create(n))), _.create(i)),
        { isValid: B, value: T } = x(S, v),
        C = ((s = T * e), _.create(s));
      (0, f.isNegativeLE)(C, I) || ((o = -C), (C = _.create(o))),
        B || (T = C),
        B || (k = b);
      let U = ((a = k * (b - w) * W - v), _.create(a)),
        L = T * T,
        R = ((u = (T + T) * v), _.create(u)),
        z = ((c = U * O), _.create(c)),
        M = ((l = w - L), _.create(l)),
        q = ((h = w + L), _.create(h));
      return new P.Point(
        ((d = R * q), _.create(d)),
        ((p = M * z), _.create(p)),
        ((g = z * q), _.create(g)),
        ((y = R * M), _.create(y))
      );
    }
    class D extends y {
      constructor(e) {
        super(e);
      }
      static fromAffine(e) {
        return new D(P.Point.fromAffine(e));
      }
      assertSame(e) {
        if (!(e instanceof D)) throw Error("RistrettoPoint expected");
      }
      init(e) {
        return new D(e);
      }
      static hashToCurve(e) {
        var t;
        let r, n;
        return (
          (t = (0, l.ensureBytes)("ristrettoHash", e, 64)),
          (0, u.abytes)(t, 64),
          (r = K(q(t.subarray(0, 32)))),
          (n = K(q(t.subarray(32, 64)))),
          new D(r.add(n))
        );
      }
      static fromBytes(e) {
        let t, r, n, i, s, o, a, c, h, d, p, g, y;
        (0, u.abytes)(e, 32);
        let { a: m, d: S } = E,
          k = q(e);
        if (!(0, l.equalBytes)(_.toBytes(k), e) || (0, f.isNegativeLE)(k, I))
          throw Error("invalid ristretto255 encoding 1");
        let v = ((t = k * k), _.create(t)),
          B = ((r = w + m * v), _.create(r)),
          A = ((n = w - m * v), _.create(n)),
          T = ((i = B * B), _.create(i)),
          C = ((s = A * A), _.create(s)),
          U = ((o = m * S * T - C), _.create(o)),
          { isValid: L, value: R } = ((a = U * C), x(w, _.create(a))),
          O = ((c = R * A), _.create(c)),
          z = ((h = R * O * U), _.create(h)),
          N = ((d = (k + k) * O), _.create(d));
        (0, f.isNegativeLE)(N, I) && ((p = -N), (N = _.create(p)));
        let W = ((g = B * z), _.create(g)),
          M = ((y = N * W), _.create(y));
        if (!L || (0, f.isNegativeLE)(M, I) || W === b)
          throw Error("invalid ristretto255 encoding 2");
        return new D(new P.Point(N, W, w, M));
      }
      static fromHex(e) {
        return D.fromBytes((0, l.ensureBytes)("ristrettoHex", e, 32));
      }
      static msm(e, t) {
        return (0, c.pippenger)(D, P.Point.Fn, e, t);
      }
      toBytes() {
        let e,
          t,
          r,
          n,
          i,
          s,
          o,
          a,
          u,
          c,
          l,
          h,
          d,
          { X: p, Y: g, Z: y, T: m } = this.ep,
          b =
            ((e = y + g),
            (r = _.create(e) * ((t = y - g), _.create(t))),
            _.create(r)),
          S = ((n = p * g), _.create(n)),
          { value: k } =
            ((s = b * ((i = S * S), _.create(i))), x(w, _.create(s))),
          v = ((o = k * b), _.create(o)),
          B = ((a = k * S), _.create(a)),
          E = ((u = v * B * m), _.create(u));
        if ((0, f.isNegativeLE)(m * E, I)) {
          let e,
            t,
            r = ((e = g * A), _.create(e)),
            n = ((t = p * A), _.create(t));
          (p = r), (g = n), (d = _.create(v * z));
        } else d = B;
        (0, f.isNegativeLE)(p * E, I) && ((c = -g), (g = _.create(c)));
        let T = ((l = (y - g) * d), _.create(l));
        return (
          (0, f.isNegativeLE)(T, I) && ((h = -T), (T = _.create(h))),
          _.toBytes(T)
        );
      }
      equals(e) {
        let t, r, n, i;
        this.assertSame(e);
        let { X: s, Y: o } = this.ep,
          { X: a, Y: u } = e.ep,
          c = ((t = s * u), _.create(t) === ((r = o * a), _.create(r))),
          l = ((n = o * u), _.create(n) === ((i = s * a), _.create(i)));
        return c || l;
      }
      is0() {
        return this.equals(D.ZERO);
      }
    }
    (D.BASE = new D(P.Point.BASE)),
      (D.ZERO = new D(P.Point.ZERO)),
      (D.Fp = _),
      (D.Fn = T);
    var $ = e.i(659341),
      F = e.i(635030),
      j = e.i(280355),
      V = e.i(154119),
      H = e.i(444610);
    function G([e, t]) {
      return `${e}=${(function e(t) {
        return Array.isArray(t)
          ? "%5B" + t.map(e).join("%2C%20") + "%5D"
          : "bigint" == typeof t
          ? `${t}n`
          : encodeURIComponent(
              String(
                null != t && null === Object.getPrototypeOf(t) ? { ...t } : t
              )
            );
      })(t)}`;
    }
    e.i(247167);
    var J = class extends Error {
      cause = this.cause;
      context;
      constructor(...[e, t]) {
        let r, n;
        if (t) {
          const { cause: e, ...i } = t;
          e && (n = { cause: e }), Object.keys(i).length > 0 && (r = i);
        }
        super(
          (function (e, t = {}) {
            {
              let r = `Solana error #${e}; Decode this error by running \`npx @solana/errors decode -- ${e}`;
              return (
                Object.keys(t).length &&
                  (r += ` '${btoa(Object.entries(t).map(G).join("&"))}'`),
                `${r}\``
              );
            }
          })(e, r),
          n
        ),
          (this.context = { __code: e, ...r }),
          (this.name = "SolanaError");
      }
    };
    function Z(e) {
      return "fixedSize" in e && "number" == typeof e.fixedSize;
    }
    var Y =
      (((t = Y || {})[(t.Little = 0)] = "Little"), (t[(t.Big = 1)] = "Big"), t);
    function X(e) {
      return e?.endian !== 1;
    }
    class Q extends TypeError {
      constructor(e, t) {
        let r;
        const { message: n, explanation: i, ...s } = e,
          { path: o } = e,
          a = 0 === o.length ? n : `At path: ${o.join(".")} -- ${n}`;
        super(i ?? a),
          null != i && (this.cause = a),
          Object.assign(this, s),
          (this.name = this.constructor.name),
          (this.failures = () => r ?? (r = [e, ...t()]));
      }
    }
    function ee(e) {
      return "object" == typeof e && null != e;
    }
    function et(e) {
      return ee(e) && !Array.isArray(e);
    }
    function er(e) {
      return "symbol" == typeof e
        ? e.toString()
        : "string" == typeof e
        ? JSON.stringify(e)
        : `${e}`;
    }
    function* en(e, t, r, n) {
      var i;
      for (let s of ((ee((i = e)) && "function" == typeof i[Symbol.iterator]) ||
        (e = [e]),
      e)) {
        let e = (function (e, t, r, n) {
          if (!0 === e) return;
          !1 === e ? (e = {}) : "string" == typeof e && (e = { message: e });
          let { path: i, branch: s } = t,
            { type: o } = r,
            {
              refinement: a,
              message: u = `Expected a value of type \`${o}\`${
                a ? ` with refinement \`${a}\`` : ""
              }, but received: \`${er(n)}\``,
            } = e;
          return {
            value: n,
            type: o,
            refinement: a,
            key: i[i.length - 1],
            path: i,
            branch: s,
            ...e,
            message: u,
          };
        })(s, t, r, n);
        e && (yield e);
      }
    }
    function* ei(e, t, r = {}) {
      let { path: n = [], branch: i = [e], coerce: s = !1, mask: o = !1 } = r,
        a = { path: n, branch: i, mask: o };
      s && (e = t.coercer(e, a));
      let u = "valid";
      for (let n of t.validator(e, a))
        (n.explanation = r.message), (u = "not_valid"), yield [n, void 0];
      for (let [c, l, f] of t.entries(e, a))
        for (let t of ei(l, f, {
          path: void 0 === c ? n : [...n, c],
          branch: void 0 === c ? i : [...i, l],
          coerce: s,
          mask: o,
          message: r.message,
        }))
          t[0]
            ? ((u = null != t[0].refinement ? "not_refined" : "not_valid"),
              yield [t[0], void 0])
            : s &&
              ((l = t[1]),
              void 0 === c
                ? (e = l)
                : e instanceof Map
                ? e.set(c, l)
                : e instanceof Set
                ? e.add(l)
                : ee(e) && (void 0 !== l || c in e) && (e[c] = l));
      if ("not_valid" !== u)
        for (let n of t.refiner(e, a))
          (n.explanation = r.message), (u = "not_refined"), yield [n, void 0];
      "valid" === u && (yield [void 0, e]);
    }
    class es {
      constructor(e) {
        const {
          type: t,
          schema: r,
          validator: n,
          refiner: i,
          coercer: s = (e) => e,
          entries: o = function* () {},
        } = e;
        (this.type = t),
          (this.schema = r),
          (this.entries = o),
          (this.coercer = s),
          n
            ? (this.validator = (e, t) => en(n(e, t), t, this, e))
            : (this.validator = () => []),
          i
            ? (this.refiner = (e, t) => en(i(e, t), t, this, e))
            : (this.refiner = () => []);
      }
      assert(e, t) {
        var r = e,
          n = this,
          i = t;
        let s = ea(r, n, { message: i });
        if (s[0]) throw s[0];
      }
      create(e, t) {
        return eo(e, this, t);
      }
      is(e) {
        var t, r;
        return (t = e), (r = this), !ea(t, r)[0];
      }
      mask(e, t) {
        var r = e,
          n = this,
          i = t;
        let s = ea(r, n, { coerce: !0, mask: !0, message: i });
        if (!s[0]) return s[1];
        throw s[0];
      }
      validate(e, t = {}) {
        return ea(e, this, t);
      }
    }
    function eo(e, t, r) {
      let n = ea(e, t, { coerce: !0, message: r });
      if (!n[0]) return n[1];
      throw n[0];
    }
    function ea(e, t, r = {}) {
      let n = ei(e, t, r),
        i = (function (e) {
          let { done: t, value: r } = e.next();
          return t ? void 0 : r;
        })(n);
      return i[0]
        ? [
            new Q(i[0], function* () {
              for (let e of n) e[0] && (yield e[0]);
            }),
            void 0,
          ]
        : [void 0, i[1]];
    }
    function eu(e, t) {
      return new es({ type: e, schema: null, validator: t });
    }
    function ec(e) {
      return new es({
        type: "array",
        schema: e,
        *entries(t) {
          if (e && Array.isArray(t))
            for (let [r, n] of t.entries()) yield [r, n, e];
        },
        coercer: (e) => (Array.isArray(e) ? e.slice() : e),
        validator: (e) =>
          Array.isArray(e) || `Expected an array value, but received: ${er(e)}`,
      });
    }
    function el() {
      return eu("boolean", (e) => "boolean" == typeof e);
    }
    function ef(e) {
      return eu(
        "instance",
        (t) =>
          t instanceof e ||
          `Expected a \`${e.name}\` instance, but received: ${er(t)}`
      );
    }
    function eh(e) {
      let t = er(e),
        r = typeof e;
      return new es({
        type: "literal",
        schema: "string" === r || "number" === r || "boolean" === r ? e : null,
        validator: (r) =>
          r === e || `Expected the literal \`${t}\`, but received: ${er(r)}`,
      });
    }
    function ed(e) {
      return new es({
        ...e,
        validator: (t, r) => null === t || e.validator(t, r),
        refiner: (t, r) => null === t || e.refiner(t, r),
      });
    }
    function ep() {
      return eu(
        "number",
        (e) =>
          ("number" == typeof e && !isNaN(e)) ||
          `Expected a number, but received: ${er(e)}`
      );
    }
    function eg(e) {
      return new es({
        ...e,
        validator: (t, r) => void 0 === t || e.validator(t, r),
        refiner: (t, r) => void 0 === t || e.refiner(t, r),
      });
    }
    function ey(e, t) {
      return new es({
        type: "record",
        schema: null,
        *entries(r) {
          if (ee(r))
            for (let n in r) {
              let i = r[n];
              yield [n, n, e], yield [n, i, t];
            }
        },
        validator: (e) => et(e) || `Expected an object, but received: ${er(e)}`,
        coercer: (e) => (et(e) ? { ...e } : e),
      });
    }
    function em() {
      return eu(
        "string",
        (e) =>
          "string" == typeof e || `Expected a string, but received: ${er(e)}`
      );
    }
    function eb(e) {
      let t = eu("never", () => !1);
      return new es({
        type: "tuple",
        schema: null,
        *entries(r) {
          if (Array.isArray(r)) {
            let n = Math.max(e.length, r.length);
            for (let i = 0; i < n; i++) yield [i, r[i], e[i] || t];
          }
        },
        validator: (e) =>
          Array.isArray(e) || `Expected an array, but received: ${er(e)}`,
        coercer: (e) => (Array.isArray(e) ? e.slice() : e),
      });
    }
    function ew(e) {
      let t = Object.keys(e);
      return new es({
        type: "type",
        schema: e,
        *entries(r) {
          if (ee(r)) for (let n of t) yield [n, r[n], e[n]];
        },
        validator: (e) => et(e) || `Expected an object, but received: ${er(e)}`,
        coercer: (e) => (et(e) ? { ...e } : e),
      });
    }
    function eS(e) {
      let t = e.map((e) => e.type).join(" | ");
      return new es({
        type: "union",
        schema: null,
        coercer(t, r) {
          for (let n of e) {
            let [e, i] = n.validate(t, { coerce: !0, mask: r.mask });
            if (!e) return i;
          }
          return t;
        },
        validator(r, n) {
          let i = [];
          for (let t of e) {
            let [...e] = ei(r, t, n),
              [s] = e;
            if (!s[0]) return [];
            for (let [t] of e) t && i.push(t);
          }
          return [
            `Expected the value to satisfy a union of \`${t}\`, but received: ${er(
              r
            )}`,
            ...i,
          ];
        },
      });
    }
    function ek() {
      return eu("unknown", () => !0);
    }
    function ev(e, t, r) {
      return new es({
        ...e,
        coercer: (n, i) =>
          ea(n, t)[0] ? e.coercer(n, i) : e.coercer(r(n, i), i),
      });
    }
    var eB = e.i(578217);
    e.i(595932);
    var eI = e.i(87246),
      eE = class extends eI.EventEmitter {
        socket;
        constructor(e, t) {
          super(),
            (this.socket = new window.WebSocket(e, t.protocols)),
            (this.socket.onopen = () => this.emit("open")),
            (this.socket.onmessage = (e) => this.emit("message", e.data)),
            (this.socket.onerror = (e) => this.emit("error", e)),
            (this.socket.onclose = (e) => {
              this.emit("close", e.code, e.reason);
            });
        }
        send(e, t, r) {
          let n = r || t;
          try {
            this.socket.send(e), n();
          } catch (e) {
            n(e);
          }
        }
        close(e, t) {
          this.socket.close(e, t);
        }
        addEventListener(e, t, r) {
          this.socket.addEventListener(e, t, r);
        }
      },
      eA = class {
        encode(e) {
          return JSON.stringify(e);
        }
        decode(e) {
          return JSON.parse(e);
        }
      },
      ex = class extends eI.EventEmitter {
        address;
        rpc_id;
        queue;
        options;
        autoconnect;
        ready;
        reconnect;
        reconnect_timer_id;
        reconnect_interval;
        max_reconnects;
        rest_options;
        current_reconnects;
        generate_request_id;
        socket;
        webSocketFactory;
        dataPack;
        constructor(
          e,
          t = "ws://localhost:8080",
          {
            autoconnect: r = !0,
            reconnect: n = !0,
            reconnect_interval: i = 1e3,
            max_reconnects: s = 5,
            ...o
          } = {},
          a,
          u
        ) {
          super(),
            (this.webSocketFactory = e),
            (this.queue = {}),
            (this.rpc_id = 0),
            (this.address = t),
            (this.autoconnect = r),
            (this.ready = !1),
            (this.reconnect = n),
            (this.reconnect_timer_id = void 0),
            (this.reconnect_interval = i),
            (this.max_reconnects = s),
            (this.rest_options = o),
            (this.current_reconnects = 0),
            (this.generate_request_id =
              a ||
              (() =>
                "number" == typeof this.rpc_id
                  ? ++this.rpc_id
                  : Number(this.rpc_id) + 1)),
            u ? (this.dataPack = u) : (this.dataPack = new eA()),
            this.autoconnect &&
              this._connect(this.address, {
                autoconnect: this.autoconnect,
                reconnect: this.reconnect,
                reconnect_interval: this.reconnect_interval,
                max_reconnects: this.max_reconnects,
                ...this.rest_options,
              });
        }
        connect() {
          this.socket ||
            this._connect(this.address, {
              autoconnect: this.autoconnect,
              reconnect: this.reconnect,
              reconnect_interval: this.reconnect_interval,
              max_reconnects: this.max_reconnects,
              ...this.rest_options,
            });
        }
        call(e, t, r, n) {
          return (
            n || "object" != typeof r || ((n = r), (r = null)),
            new Promise((i, s) => {
              if (!this.ready) return s(Error("socket not ready"));
              let o = this.generate_request_id(e, t);
              this.socket.send(
                this.dataPack.encode({
                  jsonrpc: "2.0",
                  method: e,
                  params: t || void 0,
                  id: o,
                }),
                n,
                (e) => {
                  if (e) return s(e);
                  (this.queue[o] = { promise: [i, s] }),
                    r &&
                      (this.queue[o].timeout = setTimeout(() => {
                        delete this.queue[o], s(Error("reply timeout"));
                      }, r));
                }
              );
            })
          );
        }
        async login(e) {
          let t = await this.call("rpc.login", e);
          if (!t) throw Error("authentication failed");
          return t;
        }
        async listMethods() {
          return await this.call("__listMethods");
        }
        notify(e, t) {
          return new Promise((r, n) => {
            if (!this.ready) return n(Error("socket not ready"));
            this.socket.send(
              this.dataPack.encode({ jsonrpc: "2.0", method: e, params: t }),
              (e) => {
                if (e) return n(e);
                r();
              }
            );
          });
        }
        async subscribe(e) {
          "string" == typeof e && (e = [e]);
          let t = await this.call("rpc.on", e);
          if ("string" == typeof e && "ok" !== t[e])
            throw Error(
              "Failed subscribing to an event '" + e + "' with: " + t[e]
            );
          return t;
        }
        async unsubscribe(e) {
          "string" == typeof e && (e = [e]);
          let t = await this.call("rpc.off", e);
          if ("string" == typeof e && "ok" !== t[e])
            throw Error("Failed unsubscribing from an event with: " + t);
          return t;
        }
        close(e, t) {
          this.socket && this.socket.close(e || 1e3, t);
        }
        setAutoReconnect(e) {
          this.reconnect = e;
        }
        setReconnectInterval(e) {
          this.reconnect_interval = e;
        }
        setMaxReconnects(e) {
          this.max_reconnects = e;
        }
        getCurrentReconnects() {
          return this.current_reconnects;
        }
        getMaxReconnects() {
          return this.max_reconnects;
        }
        isReconnecting() {
          return void 0 !== this.reconnect_timer_id;
        }
        willReconnect() {
          return (
            this.reconnect &&
            (0 === this.max_reconnects ||
              this.current_reconnects < this.max_reconnects)
          );
        }
        _connect(e, t) {
          clearTimeout(this.reconnect_timer_id),
            (this.socket = this.webSocketFactory(e, t)),
            this.socket.addEventListener("open", () => {
              (this.ready = !0),
                this.emit("open"),
                (this.current_reconnects = 0);
            }),
            this.socket.addEventListener("message", ({ data: e }) => {
              e instanceof ArrayBuffer && (e = o.Buffer.from(e).toString());
              try {
                e = this.dataPack.decode(e);
              } catch (e) {
                return;
              }
              if (e.notification && this.listeners(e.notification).length) {
                if (!Object.keys(e.params).length)
                  return this.emit(e.notification);
                let t = [e.notification];
                if (e.params.constructor === Object) t.push(e.params);
                else
                  for (let r = 0; r < e.params.length; r++) t.push(e.params[r]);
                return Promise.resolve().then(() => {
                  this.emit.apply(this, t);
                });
              }
              if (!this.queue[e.id])
                return e.method
                  ? Promise.resolve().then(() => {
                      this.emit(e.method, e?.params);
                    })
                  : void 0;
              "error" in e == "result" in e &&
                this.queue[e.id].promise[1](
                  Error(
                    'Server response malformed. Response must include either "result" or "error", but not both.'
                  )
                ),
                this.queue[e.id].timeout &&
                  clearTimeout(this.queue[e.id].timeout),
                e.error
                  ? this.queue[e.id].promise[1](e.error)
                  : this.queue[e.id].promise[0](e.result),
                delete this.queue[e.id];
            }),
            this.socket.addEventListener("error", (e) => this.emit("error", e)),
            this.socket.addEventListener("close", ({ code: r, reason: n }) => {
              this.ready && setTimeout(() => this.emit("close", r, n), 0),
                (this.ready = !1),
                (this.socket = void 0),
                1e3 !== r &&
                  (this.current_reconnects++,
                  this.reconnect &&
                  (this.max_reconnects > this.current_reconnects ||
                    0 === this.max_reconnects)
                    ? (this.reconnect_timer_id = setTimeout(
                        () => this._connect(e, t),
                        this.reconnect_interval
                      ))
                    : this.reconnect &&
                      this.max_reconnects > 0 &&
                      this.current_reconnects >= this.max_reconnects &&
                      setTimeout(
                        () => this.emit("max_reconnects_reached", r, n),
                        1
                      ));
            });
        }
      },
      e_ = e.i(145535),
      eT = e.i(776267);
    P.utils.randomPrivateKey;
    let eP = () => {
        let e = P.utils.randomPrivateKey(),
          t = eC(e),
          r = new Uint8Array(64);
        return r.set(e), r.set(t, 32), { publicKey: t, secretKey: r };
      },
      eC = P.getPublicKey;
    function eU(e) {
      try {
        return P.ExtendedPoint.fromHex(e), !0;
      } catch {
        return !1;
      }
    }
    let eL = (e, t) => P.sign(e, t.slice(0, 32)),
      eR = P.verify,
      eO = (e) =>
        o.Buffer.isBuffer(e)
          ? e
          : e instanceof Uint8Array
          ? o.Buffer.from(e.buffer, e.byteOffset, e.byteLength)
          : o.Buffer.from(e);
    class ez {
      constructor(e) {
        Object.assign(this, e);
      }
      encode() {
        return o.Buffer.from((0, V.serialize)(eN, this));
      }
      static decode(e) {
        return (0, V.deserialize)(eN, this, e);
      }
      static decodeUnchecked(e) {
        return (0, V.deserializeUnchecked)(eN, this, e);
      }
    }
    let eN = new Map(),
      eW = 1;
    class eM extends ez {
      constructor(e) {
        if ((super({}), (this._bn = void 0), void 0 !== e._bn))
          this._bn = e._bn;
        else {
          if ("string" == typeof e) {
            const t = F.default.decode(e);
            if (32 != t.length) throw Error("Invalid public key input");
            this._bn = new $.default(t);
          } else this._bn = new $.default(e);
          if (this._bn.byteLength() > 32)
            throw Error("Invalid public key input");
        }
      }
      static unique() {
        let e = new eM(eW);
        return (eW += 1), new eM(e.toBuffer());
      }
      equals(e) {
        return this._bn.eq(e._bn);
      }
      toBase58() {
        return F.default.encode(this.toBytes());
      }
      toJSON() {
        return this.toBase58();
      }
      toBytes() {
        let e = this.toBuffer();
        return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
      }
      toBuffer() {
        let e = this._bn.toArrayLike(o.Buffer);
        if (32 === e.length) return e;
        let t = o.Buffer.alloc(32);
        return e.copy(t, 32 - e.length), t;
      }
      get [Symbol.toStringTag]() {
        return `PublicKey(${this.toString()})`;
      }
      toString() {
        return this.toBase58();
      }
      static async createWithSeed(e, t, r) {
        let n = o.Buffer.concat([e.toBuffer(), o.Buffer.from(t), r.toBuffer()]);
        return new eM((0, j.sha256)(n));
      }
      static createProgramAddressSync(e, t) {
        let r = o.Buffer.alloc(0);
        e.forEach(function (e) {
          if (e.length > 32) throw TypeError("Max seed length exceeded");
          r = o.Buffer.concat([r, eO(e)]);
        }),
          (r = o.Buffer.concat([
            r,
            t.toBuffer(),
            o.Buffer.from("ProgramDerivedAddress"),
          ]));
        let n = (0, j.sha256)(r);
        if (eU(n))
          throw Error("Invalid seeds, address must fall off the curve");
        return new eM(n);
      }
      static async createProgramAddress(e, t) {
        return this.createProgramAddressSync(e, t);
      }
      static findProgramAddressSync(e, t) {
        let r,
          n = 255;
        for (; 0 != n; ) {
          try {
            let i = e.concat(o.Buffer.from([n]));
            r = this.createProgramAddressSync(i, t);
          } catch (e) {
            if (e instanceof TypeError) throw e;
            n--;
            continue;
          }
          return [r, n];
        }
        throw Error("Unable to find a viable program address nonce");
      }
      static async findProgramAddress(e, t) {
        return this.findProgramAddressSync(e, t);
      }
      static isOnCurve(e) {
        return eU(new eM(e).toBytes());
      }
    }
    (eM.default = new eM("11111111111111111111111111111111")),
      eN.set(eM, { kind: "struct", fields: [["_bn", "u256"]] }),
      new eM("BPFLoader1111111111111111111111111111111111");
    class eq extends Error {
      constructor(e) {
        super(`Signature ${e} has expired: block height exceeded.`),
          (this.signature = void 0),
          (this.signature = e);
      }
    }
    Object.defineProperty(eq.prototype, "name", {
      value: "TransactionExpiredBlockheightExceededError",
    });
    class eK extends Error {
      constructor(e, t) {
        super(
          `Transaction was not confirmed in ${t.toFixed(
            2
          )} seconds. It is unknown if it succeeded or failed. Check signature ${e} using the Solana Explorer or CLI tools.`
        ),
          (this.signature = void 0),
          (this.signature = e);
      }
    }
    Object.defineProperty(eK.prototype, "name", {
      value: "TransactionExpiredTimeoutError",
    });
    class eD extends Error {
      constructor(e) {
        super(`Signature ${e} has expired: the nonce is no longer valid.`),
          (this.signature = void 0),
          (this.signature = e);
      }
    }
    Object.defineProperty(eD.prototype, "name", {
      value: "TransactionExpiredNonceInvalidError",
    });
    class e$ {
      constructor(e, t) {
        (this.staticAccountKeys = void 0),
          (this.accountKeysFromLookups = void 0),
          (this.staticAccountKeys = e),
          (this.accountKeysFromLookups = t);
      }
      keySegments() {
        let e = [this.staticAccountKeys];
        return (
          this.accountKeysFromLookups &&
            (e.push(this.accountKeysFromLookups.writable),
            e.push(this.accountKeysFromLookups.readonly)),
          e
        );
      }
      get(e) {
        for (let t of this.keySegments())
          if (e < t.length) return t[e];
          else e -= t.length;
      }
      get length() {
        return this.keySegments().flat().length;
      }
      compileInstructions(e) {
        if (this.length > 256)
          throw Error("Account index overflow encountered during compilation");
        let t = new Map();
        this.keySegments()
          .flat()
          .forEach((e, r) => {
            t.set(e.toBase58(), r);
          });
        let r = (e) => {
          let r = t.get(e.toBase58());
          if (void 0 === r)
            throw Error(
              "Encountered an unknown instruction account key during compilation"
            );
          return r;
        };
        return e.map((e) => ({
          programIdIndex: r(e.programId),
          accountKeyIndexes: e.keys.map((e) => r(e.pubkey)),
          data: e.data,
        }));
      }
    }
    let eF = (e = "publicKey") => H.blob(32, e),
      ej = (e = "string") => {
        let t = H.struct(
            [
              H.u32("length"),
              H.u32("lengthPadding"),
              H.blob(H.offset(H.u32(), -8), "chars"),
            ],
            e
          ),
          r = t.decode.bind(t),
          n = t.encode.bind(t);
        return (
          (t.decode = (e, t) => r(e, t).chars.toString()),
          (t.encode = (e, t, r) =>
            n({ chars: o.Buffer.from(e, "utf8") }, t, r)),
          (t.alloc = (e) =>
            H.u32().span + H.u32().span + o.Buffer.from(e, "utf8").length),
          t
        );
      };
    function eV(e) {
      let t = 0,
        r = 0;
      for (;;) {
        let n = e.shift();
        if (((t |= (127 & n) << (7 * r)), (r += 1), (128 & n) == 0)) break;
      }
      return t;
    }
    function eH(e, t) {
      let r = t;
      for (;;) {
        let t = 127 & r;
        if (0 == (r >>= 7)) {
          e.push(t);
          break;
        }
        (t |= 128), e.push(t);
      }
    }
    function eG(e, t) {
      if (!e) throw Error(t || "Assertion failed");
    }
    class eJ {
      constructor(e, t) {
        (this.payer = void 0),
          (this.keyMetaMap = void 0),
          (this.payer = e),
          (this.keyMetaMap = t);
      }
      static compile(e, t) {
        let r = new Map(),
          n = (e) => {
            let t = e.toBase58(),
              n = r.get(t);
            return (
              void 0 === n &&
                ((n = { isSigner: !1, isWritable: !1, isInvoked: !1 }),
                r.set(t, n)),
              n
            );
          },
          i = n(t);
        for (let t of ((i.isSigner = !0), (i.isWritable = !0), e))
          for (let e of ((n(t.programId).isInvoked = !0), t.keys)) {
            let t = n(e.pubkey);
            (t.isSigner ||= e.isSigner), (t.isWritable ||= e.isWritable);
          }
        return new eJ(t, r);
      }
      getMessageComponents() {
        let e = [...this.keyMetaMap.entries()];
        eG(e.length <= 256, "Max static account keys length exceeded");
        let t = e.filter(([, e]) => e.isSigner && e.isWritable),
          r = e.filter(([, e]) => e.isSigner && !e.isWritable),
          n = e.filter(([, e]) => !e.isSigner && e.isWritable),
          i = e.filter(([, e]) => !e.isSigner && !e.isWritable),
          s = {
            numRequiredSignatures: t.length + r.length,
            numReadonlySignedAccounts: r.length,
            numReadonlyUnsignedAccounts: i.length,
          };
        {
          eG(t.length > 0, "Expected at least one writable signer key");
          let [e] = t[0];
          eG(
            e === this.payer.toBase58(),
            "Expected first writable signer key to be the fee payer"
          );
        }
        return [
          s,
          [
            ...t.map(([e]) => new eM(e)),
            ...r.map(([e]) => new eM(e)),
            ...n.map(([e]) => new eM(e)),
            ...i.map(([e]) => new eM(e)),
          ],
        ];
      }
      extractTableLookup(e) {
        let [t, r] = this.drainKeysFoundInLookupTable(
            e.state.addresses,
            (e) => !e.isSigner && !e.isInvoked && e.isWritable
          ),
          [n, i] = this.drainKeysFoundInLookupTable(
            e.state.addresses,
            (e) => !e.isSigner && !e.isInvoked && !e.isWritable
          );
        if (0 !== t.length || 0 !== n.length)
          return [
            { accountKey: e.key, writableIndexes: t, readonlyIndexes: n },
            { writable: r, readonly: i },
          ];
      }
      drainKeysFoundInLookupTable(e, t) {
        let r = [],
          n = [];
        for (let [i, s] of this.keyMetaMap.entries())
          if (t(s)) {
            let t = new eM(i),
              s = e.findIndex((e) => e.equals(t));
            s >= 0 &&
              (eG(s < 256, "Max lookup table index exceeded"),
              r.push(s),
              n.push(t),
              this.keyMetaMap.delete(i));
          }
        return [r, n];
      }
    }
    let eZ = "Reached end of buffer unexpectedly";
    function eY(e) {
      if (0 === e.length) throw Error(eZ);
      return e.shift();
    }
    function eX(e, ...t) {
      let [r] = t;
      if (2 === t.length ? r + (t[1] ?? 0) > e.length : r >= e.length)
        throw Error(eZ);
      return e.splice(...t);
    }
    class eQ {
      constructor(e) {
        (this.header = void 0),
          (this.accountKeys = void 0),
          (this.recentBlockhash = void 0),
          (this.instructions = void 0),
          (this.indexToProgramIds = new Map()),
          (this.header = e.header),
          (this.accountKeys = e.accountKeys.map((e) => new eM(e))),
          (this.recentBlockhash = e.recentBlockhash),
          (this.instructions = e.instructions),
          this.instructions.forEach((e) =>
            this.indexToProgramIds.set(
              e.programIdIndex,
              this.accountKeys[e.programIdIndex]
            )
          );
      }
      get version() {
        return "legacy";
      }
      get staticAccountKeys() {
        return this.accountKeys;
      }
      get compiledInstructions() {
        return this.instructions.map((e) => ({
          programIdIndex: e.programIdIndex,
          accountKeyIndexes: e.accounts,
          data: F.default.decode(e.data),
        }));
      }
      get addressTableLookups() {
        return [];
      }
      getAccountKeys() {
        return new e$(this.staticAccountKeys);
      }
      static compile(e) {
        let [t, r] = eJ
            .compile(e.instructions, e.payerKey)
            .getMessageComponents(),
          n = new e$(r)
            .compileInstructions(e.instructions)
            .map((e) => ({
              programIdIndex: e.programIdIndex,
              accounts: e.accountKeyIndexes,
              data: F.default.encode(e.data),
            }));
        return new eQ({
          header: t,
          accountKeys: r,
          recentBlockhash: e.recentBlockhash,
          instructions: n,
        });
      }
      isAccountSigner(e) {
        return e < this.header.numRequiredSignatures;
      }
      isAccountWritable(e) {
        let t = this.header.numRequiredSignatures;
        if (!(e >= this.header.numRequiredSignatures))
          return e < t - this.header.numReadonlySignedAccounts;
        {
          let r =
            this.accountKeys.length -
            t -
            this.header.numReadonlyUnsignedAccounts;
          return e - t < r;
        }
      }
      isProgramId(e) {
        return this.indexToProgramIds.has(e);
      }
      programIds() {
        return [...this.indexToProgramIds.values()];
      }
      nonProgramIds() {
        return this.accountKeys.filter((e, t) => !this.isProgramId(t));
      }
      serialize() {
        let e = this.accountKeys.length,
          t = [];
        eH(t, e);
        let r = this.instructions.map((e) => {
            let { accounts: t, programIdIndex: r } = e,
              n = Array.from(F.default.decode(e.data)),
              i = [];
            eH(i, t.length);
            let s = [];
            return (
              eH(s, n.length),
              {
                programIdIndex: r,
                keyIndicesCount: o.Buffer.from(i),
                keyIndices: t,
                dataLength: o.Buffer.from(s),
                data: n,
              }
            );
          }),
          n = [];
        eH(n, r.length);
        let i = o.Buffer.alloc(1232);
        o.Buffer.from(n).copy(i);
        let s = n.length;
        r.forEach((e) => {
          let t = H.struct([
            H.u8("programIdIndex"),
            H.blob(e.keyIndicesCount.length, "keyIndicesCount"),
            H.seq(H.u8("keyIndex"), e.keyIndices.length, "keyIndices"),
            H.blob(e.dataLength.length, "dataLength"),
            H.seq(H.u8("userdatum"), e.data.length, "data"),
          ]).encode(e, i, s);
          s += t;
        }),
          (i = i.slice(0, s));
        let a = H.struct([
            H.blob(1, "numRequiredSignatures"),
            H.blob(1, "numReadonlySignedAccounts"),
            H.blob(1, "numReadonlyUnsignedAccounts"),
            H.blob(t.length, "keyCount"),
            H.seq(eF("key"), e, "keys"),
            eF("recentBlockhash"),
          ]),
          u = {
            numRequiredSignatures: o.Buffer.from([
              this.header.numRequiredSignatures,
            ]),
            numReadonlySignedAccounts: o.Buffer.from([
              this.header.numReadonlySignedAccounts,
            ]),
            numReadonlyUnsignedAccounts: o.Buffer.from([
              this.header.numReadonlyUnsignedAccounts,
            ]),
            keyCount: o.Buffer.from(t),
            keys: this.accountKeys.map((e) => eO(e.toBytes())),
            recentBlockhash: F.default.decode(this.recentBlockhash),
          },
          c = o.Buffer.alloc(2048),
          l = a.encode(u, c);
        return i.copy(c, l), c.slice(0, l + i.length);
      }
      static from(e) {
        let t = [...e],
          r = eY(t);
        if (r !== (127 & r))
          throw Error(
            "Versioned messages must be deserialized with VersionedMessage.deserialize()"
          );
        let n = eY(t),
          i = eY(t),
          s = eV(t),
          a = [];
        for (let e = 0; e < s; e++) {
          let e = eX(t, 0, 32);
          a.push(new eM(o.Buffer.from(e)));
        }
        let u = eX(t, 0, 32),
          c = eV(t),
          l = [];
        for (let e = 0; e < c; e++) {
          let e = eY(t),
            r = eV(t),
            n = eX(t, 0, r),
            i = eV(t),
            s = eX(t, 0, i),
            a = F.default.encode(o.Buffer.from(s));
          l.push({ programIdIndex: e, accounts: n, data: a });
        }
        return new eQ({
          header: {
            numRequiredSignatures: r,
            numReadonlySignedAccounts: n,
            numReadonlyUnsignedAccounts: i,
          },
          recentBlockhash: F.default.encode(o.Buffer.from(u)),
          accountKeys: a,
          instructions: l,
        });
      }
    }
    class e0 {
      constructor(e) {
        (this.header = void 0),
          (this.staticAccountKeys = void 0),
          (this.recentBlockhash = void 0),
          (this.compiledInstructions = void 0),
          (this.addressTableLookups = void 0),
          (this.header = e.header),
          (this.staticAccountKeys = e.staticAccountKeys),
          (this.recentBlockhash = e.recentBlockhash),
          (this.compiledInstructions = e.compiledInstructions),
          (this.addressTableLookups = e.addressTableLookups);
      }
      get version() {
        return 0;
      }
      get numAccountKeysFromLookups() {
        let e = 0;
        for (let t of this.addressTableLookups)
          e += t.readonlyIndexes.length + t.writableIndexes.length;
        return e;
      }
      getAccountKeys(e) {
        let t;
        if (e && "accountKeysFromLookups" in e && e.accountKeysFromLookups) {
          if (
            this.numAccountKeysFromLookups !=
            e.accountKeysFromLookups.writable.length +
              e.accountKeysFromLookups.readonly.length
          )
            throw Error(
              "Failed to get account keys because of a mismatch in the number of account keys from lookups"
            );
          t = e.accountKeysFromLookups;
        } else if (
          e &&
          "addressLookupTableAccounts" in e &&
          e.addressLookupTableAccounts
        )
          t = this.resolveAddressTableLookups(e.addressLookupTableAccounts);
        else if (this.addressTableLookups.length > 0)
          throw Error(
            "Failed to get account keys because address table lookups were not resolved"
          );
        return new e$(this.staticAccountKeys, t);
      }
      isAccountSigner(e) {
        return e < this.header.numRequiredSignatures;
      }
      isAccountWritable(e) {
        let t = this.header.numRequiredSignatures,
          r = this.staticAccountKeys.length;
        if (e >= r)
          return (
            e - r <
            this.addressTableLookups.reduce(
              (e, t) => e + t.writableIndexes.length,
              0
            )
          );
        if (!(e >= this.header.numRequiredSignatures))
          return e < t - this.header.numReadonlySignedAccounts;
        {
          let n = r - t - this.header.numReadonlyUnsignedAccounts;
          return e - t < n;
        }
      }
      resolveAddressTableLookups(e) {
        let t = { writable: [], readonly: [] };
        for (let r of this.addressTableLookups) {
          let n = e.find((e) => e.key.equals(r.accountKey));
          if (!n)
            throw Error(
              `Failed to find address lookup table account for table key ${r.accountKey.toBase58()}`
            );
          for (let e of r.writableIndexes)
            if (e < n.state.addresses.length)
              t.writable.push(n.state.addresses[e]);
            else
              throw Error(
                `Failed to find address for index ${e} in address lookup table ${r.accountKey.toBase58()}`
              );
          for (let e of r.readonlyIndexes)
            if (e < n.state.addresses.length)
              t.readonly.push(n.state.addresses[e]);
            else
              throw Error(
                `Failed to find address for index ${e} in address lookup table ${r.accountKey.toBase58()}`
              );
        }
        return t;
      }
      static compile(e) {
        let t = eJ.compile(e.instructions, e.payerKey),
          r = [],
          n = { writable: [], readonly: [] };
        for (let i of e.addressLookupTableAccounts || []) {
          let e = t.extractTableLookup(i);
          if (void 0 !== e) {
            let [t, { writable: i, readonly: s }] = e;
            r.push(t), n.writable.push(...i), n.readonly.push(...s);
          }
        }
        let [i, s] = t.getMessageComponents(),
          o = new e$(s, n).compileInstructions(e.instructions);
        return new e0({
          header: i,
          staticAccountKeys: s,
          recentBlockhash: e.recentBlockhash,
          compiledInstructions: o,
          addressTableLookups: r,
        });
      }
      serialize() {
        let e = [];
        eH(e, this.staticAccountKeys.length);
        let t = this.serializeInstructions(),
          r = [];
        eH(r, this.compiledInstructions.length);
        let n = this.serializeAddressTableLookups(),
          i = [];
        eH(i, this.addressTableLookups.length);
        let s = H.struct([
            H.u8("prefix"),
            H.struct(
              [
                H.u8("numRequiredSignatures"),
                H.u8("numReadonlySignedAccounts"),
                H.u8("numReadonlyUnsignedAccounts"),
              ],
              "header"
            ),
            H.blob(e.length, "staticAccountKeysLength"),
            H.seq(eF(), this.staticAccountKeys.length, "staticAccountKeys"),
            eF("recentBlockhash"),
            H.blob(r.length, "instructionsLength"),
            H.blob(t.length, "serializedInstructions"),
            H.blob(i.length, "addressTableLookupsLength"),
            H.blob(n.length, "serializedAddressTableLookups"),
          ]),
          o = new Uint8Array(1232),
          a = s.encode(
            {
              prefix: 128,
              header: this.header,
              staticAccountKeysLength: new Uint8Array(e),
              staticAccountKeys: this.staticAccountKeys.map((e) => e.toBytes()),
              recentBlockhash: F.default.decode(this.recentBlockhash),
              instructionsLength: new Uint8Array(r),
              serializedInstructions: t,
              addressTableLookupsLength: new Uint8Array(i),
              serializedAddressTableLookups: n,
            },
            o
          );
        return o.slice(0, a);
      }
      serializeInstructions() {
        let e = 0,
          t = new Uint8Array(1232);
        for (let r of this.compiledInstructions) {
          let n = [];
          eH(n, r.accountKeyIndexes.length);
          let i = [];
          eH(i, r.data.length);
          let s = H.struct([
            H.u8("programIdIndex"),
            H.blob(n.length, "encodedAccountKeyIndexesLength"),
            H.seq(H.u8(), r.accountKeyIndexes.length, "accountKeyIndexes"),
            H.blob(i.length, "encodedDataLength"),
            H.blob(r.data.length, "data"),
          ]);
          e += s.encode(
            {
              programIdIndex: r.programIdIndex,
              encodedAccountKeyIndexesLength: new Uint8Array(n),
              accountKeyIndexes: r.accountKeyIndexes,
              encodedDataLength: new Uint8Array(i),
              data: r.data,
            },
            t,
            e
          );
        }
        return t.slice(0, e);
      }
      serializeAddressTableLookups() {
        let e = 0,
          t = new Uint8Array(1232);
        for (let r of this.addressTableLookups) {
          let n = [];
          eH(n, r.writableIndexes.length);
          let i = [];
          eH(i, r.readonlyIndexes.length);
          let s = H.struct([
            eF("accountKey"),
            H.blob(n.length, "encodedWritableIndexesLength"),
            H.seq(H.u8(), r.writableIndexes.length, "writableIndexes"),
            H.blob(i.length, "encodedReadonlyIndexesLength"),
            H.seq(H.u8(), r.readonlyIndexes.length, "readonlyIndexes"),
          ]);
          e += s.encode(
            {
              accountKey: r.accountKey.toBytes(),
              encodedWritableIndexesLength: new Uint8Array(n),
              writableIndexes: r.writableIndexes,
              encodedReadonlyIndexesLength: new Uint8Array(i),
              readonlyIndexes: r.readonlyIndexes,
            },
            t,
            e
          );
        }
        return t.slice(0, e);
      }
      static deserialize(e) {
        let t = [...e],
          r = eY(t),
          n = 127 & r;
        eG(r !== n, "Expected versioned message but received legacy message"),
          eG(
            0 === n,
            `Expected versioned message with version 0 but found version ${n}`
          );
        let i = {
            numRequiredSignatures: eY(t),
            numReadonlySignedAccounts: eY(t),
            numReadonlyUnsignedAccounts: eY(t),
          },
          s = [],
          o = eV(t);
        for (let e = 0; e < o; e++) s.push(new eM(eX(t, 0, 32)));
        let a = F.default.encode(eX(t, 0, 32)),
          u = eV(t),
          c = [];
        for (let e = 0; e < u; e++) {
          let e = eY(t),
            r = eV(t),
            n = eX(t, 0, r),
            i = eV(t),
            s = new Uint8Array(eX(t, 0, i));
          c.push({ programIdIndex: e, accountKeyIndexes: n, data: s });
        }
        let l = eV(t),
          f = [];
        for (let e = 0; e < l; e++) {
          let e = new eM(eX(t, 0, 32)),
            r = eV(t),
            n = eX(t, 0, r),
            i = eV(t),
            s = eX(t, 0, i);
          f.push({ accountKey: e, writableIndexes: n, readonlyIndexes: s });
        }
        return new e0({
          header: i,
          staticAccountKeys: s,
          recentBlockhash: a,
          compiledInstructions: c,
          addressTableLookups: f,
        });
      }
    }
    let e1 = {
        deserializeMessageVersion(e) {
          let t = e[0],
            r = 127 & t;
          return r === t ? "legacy" : r;
        },
        deserialize: (e) => {
          let t = e1.deserializeMessageVersion(e);
          if ("legacy" === t) return eQ.from(e);
          if (0 === t) return e0.deserialize(e);
          throw Error(
            `Transaction message version ${t} deserialization is not supported`
          );
        },
      },
      e2 =
        (((r = {})[(r.BLOCKHEIGHT_EXCEEDED = 0)] = "BLOCKHEIGHT_EXCEEDED"),
        (r[(r.PROCESSED = 1)] = "PROCESSED"),
        (r[(r.TIMED_OUT = 2)] = "TIMED_OUT"),
        (r[(r.NONCE_INVALID = 3)] = "NONCE_INVALID"),
        r),
      e6 = o.Buffer.alloc(64).fill(0);
    class e5 {
      constructor(e) {
        (this.keys = void 0),
          (this.programId = void 0),
          (this.data = o.Buffer.alloc(0)),
          (this.programId = e.programId),
          (this.keys = e.keys),
          e.data && (this.data = e.data);
      }
      toJSON() {
        return {
          keys: this.keys.map(({ pubkey: e, isSigner: t, isWritable: r }) => ({
            pubkey: e.toJSON(),
            isSigner: t,
            isWritable: r,
          })),
          programId: this.programId.toJSON(),
          data: [...this.data],
        };
      }
    }
    class e8 {
      get signature() {
        return this.signatures.length > 0 ? this.signatures[0].signature : null;
      }
      constructor(e) {
        if (
          ((this.signatures = []),
          (this.feePayer = void 0),
          (this.instructions = []),
          (this.recentBlockhash = void 0),
          (this.lastValidBlockHeight = void 0),
          (this.nonceInfo = void 0),
          (this.minNonceContextSlot = void 0),
          (this._message = void 0),
          (this._json = void 0),
          !e)
        )
          return;
        if (
          (e.feePayer && (this.feePayer = e.feePayer),
          e.signatures && (this.signatures = e.signatures),
          Object.prototype.hasOwnProperty.call(e, "nonceInfo"))
        ) {
          const { minContextSlot: t, nonceInfo: r } = e;
          (this.minNonceContextSlot = t), (this.nonceInfo = r);
        } else if (
          Object.prototype.hasOwnProperty.call(e, "lastValidBlockHeight")
        ) {
          const { blockhash: t, lastValidBlockHeight: r } = e;
          (this.recentBlockhash = t), (this.lastValidBlockHeight = r);
        } else {
          const { recentBlockhash: t, nonceInfo: r } = e;
          r && (this.nonceInfo = r), (this.recentBlockhash = t);
        }
      }
      toJSON() {
        return {
          recentBlockhash: this.recentBlockhash || null,
          feePayer: this.feePayer ? this.feePayer.toJSON() : null,
          nonceInfo: this.nonceInfo
            ? {
                nonce: this.nonceInfo.nonce,
                nonceInstruction: this.nonceInfo.nonceInstruction.toJSON(),
              }
            : null,
          instructions: this.instructions.map((e) => e.toJSON()),
          signers: this.signatures.map(({ publicKey: e }) => e.toJSON()),
        };
      }
      add(...e) {
        if (0 === e.length) throw Error("No instructions");
        return (
          e.forEach((e) => {
            "instructions" in e
              ? (this.instructions = this.instructions.concat(e.instructions))
              : "data" in e && "programId" in e && "keys" in e
              ? this.instructions.push(e)
              : this.instructions.push(new e5(e));
          }),
          this
        );
      }
      compileMessage() {
        let e, t, r;
        if (
          this._message &&
          JSON.stringify(this.toJSON()) === JSON.stringify(this._json)
        )
          return this._message;
        if (
          (this.nonceInfo
            ? ((e = this.nonceInfo.nonce),
              (t =
                this.instructions[0] != this.nonceInfo.nonceInstruction
                  ? [this.nonceInfo.nonceInstruction, ...this.instructions]
                  : this.instructions))
            : ((e = this.recentBlockhash), (t = this.instructions)),
          !e)
        )
          throw Error("Transaction recentBlockhash required");
        if (
          (t.length < 1 && console.warn("No instructions provided"),
          this.feePayer)
        )
          r = this.feePayer;
        else if (this.signatures.length > 0 && this.signatures[0].publicKey)
          r = this.signatures[0].publicKey;
        else throw Error("Transaction fee payer required");
        for (let e = 0; e < t.length; e++)
          if (void 0 === t[e].programId)
            throw Error(
              `Transaction instruction index ${e} has undefined program id`
            );
        let n = [],
          i = [];
        t.forEach((e) => {
          e.keys.forEach((e) => {
            i.push({ ...e });
          });
          let t = e.programId.toString();
          n.includes(t) || n.push(t);
        }),
          n.forEach((e) => {
            i.push({ pubkey: new eM(e), isSigner: !1, isWritable: !1 });
          });
        let s = [];
        i.forEach((e) => {
          let t = e.pubkey.toString(),
            r = s.findIndex((e) => e.pubkey.toString() === t);
          r > -1
            ? ((s[r].isWritable = s[r].isWritable || e.isWritable),
              (s[r].isSigner = s[r].isSigner || e.isSigner))
            : s.push(e);
        }),
          s.sort(function (e, t) {
            return e.isSigner !== t.isSigner
              ? e.isSigner
                ? -1
                : 1
              : e.isWritable !== t.isWritable
              ? e.isWritable
                ? -1
                : 1
              : e.pubkey
                  .toBase58()
                  .localeCompare(t.pubkey.toBase58(), "en", {
                    localeMatcher: "best fit",
                    usage: "sort",
                    sensitivity: "variant",
                    ignorePunctuation: !1,
                    numeric: !1,
                    caseFirst: "lower",
                  });
          });
        let o = s.findIndex((e) => e.pubkey.equals(r));
        if (o > -1) {
          let [e] = s.splice(o, 1);
          (e.isSigner = !0), (e.isWritable = !0), s.unshift(e);
        } else s.unshift({ pubkey: r, isSigner: !0, isWritable: !0 });
        for (let e of this.signatures) {
          let t = s.findIndex((t) => t.pubkey.equals(e.publicKey));
          if (t > -1)
            s[t].isSigner ||
              ((s[t].isSigner = !0),
              console.warn(
                "Transaction references a signature that is unnecessary, only the fee payer and instruction signer accounts should sign a transaction. This behavior is deprecated and will throw an error in the next major version release."
              ));
          else throw Error(`unknown signer: ${e.publicKey.toString()}`);
        }
        let a = 0,
          u = 0,
          c = 0,
          l = [],
          f = [];
        s.forEach(({ pubkey: e, isSigner: t, isWritable: r }) => {
          t
            ? (l.push(e.toString()), (a += 1), r || (u += 1))
            : (f.push(e.toString()), r || (c += 1));
        });
        let h = l.concat(f),
          d = t.map((e) => {
            let { data: t, programId: r } = e;
            return {
              programIdIndex: h.indexOf(r.toString()),
              accounts: e.keys.map((e) => h.indexOf(e.pubkey.toString())),
              data: F.default.encode(t),
            };
          });
        return (
          d.forEach((e) => {
            eG(e.programIdIndex >= 0), e.accounts.forEach((e) => eG(e >= 0));
          }),
          new eQ({
            header: {
              numRequiredSignatures: a,
              numReadonlySignedAccounts: u,
              numReadonlyUnsignedAccounts: c,
            },
            accountKeys: h,
            recentBlockhash: e,
            instructions: d,
          })
        );
      }
      _compile() {
        let e = this.compileMessage(),
          t = e.accountKeys.slice(0, e.header.numRequiredSignatures);
        return this.signatures.length === t.length &&
          this.signatures.every((e, r) => t[r].equals(e.publicKey))
          ? e
          : ((this.signatures = t.map((e) => ({
              signature: null,
              publicKey: e,
            }))),
            e);
      }
      serializeMessage() {
        return this._compile().serialize();
      }
      async getEstimatedFee(e) {
        return (await e.getFeeForMessage(this.compileMessage())).value;
      }
      setSigners(...e) {
        if (0 === e.length) throw Error("No signers");
        let t = new Set();
        this.signatures = e
          .filter((e) => {
            let r = e.toString();
            return !t.has(r) && (t.add(r), !0);
          })
          .map((e) => ({ signature: null, publicKey: e }));
      }
      sign(...e) {
        if (0 === e.length) throw Error("No signers");
        let t = new Set(),
          r = [];
        for (let n of e) {
          let e = n.publicKey.toString();
          t.has(e) || (t.add(e), r.push(n));
        }
        this.signatures = r.map((e) => ({
          signature: null,
          publicKey: e.publicKey,
        }));
        let n = this._compile();
        this._partialSign(n, ...r);
      }
      partialSign(...e) {
        if (0 === e.length) throw Error("No signers");
        let t = new Set(),
          r = [];
        for (let n of e) {
          let e = n.publicKey.toString();
          t.has(e) || (t.add(e), r.push(n));
        }
        let n = this._compile();
        this._partialSign(n, ...r);
      }
      _partialSign(e, ...t) {
        let r = e.serialize();
        t.forEach((e) => {
          let t = eL(r, e.secretKey);
          this._addSignature(e.publicKey, eO(t));
        });
      }
      addSignature(e, t) {
        this._compile(), this._addSignature(e, t);
      }
      _addSignature(e, t) {
        eG(64 === t.length);
        let r = this.signatures.findIndex((t) => e.equals(t.publicKey));
        if (r < 0) throw Error(`unknown signer: ${e.toString()}`);
        this.signatures[r].signature = o.Buffer.from(t);
      }
      verifySignatures(e = !0) {
        return !this._getMessageSignednessErrors(this.serializeMessage(), e);
      }
      _getMessageSignednessErrors(e, t) {
        let r = {};
        for (let { signature: n, publicKey: i } of this.signatures)
          null === n
            ? t && (r.missing ||= []).push(i)
            : eR(n, e, i.toBytes()) || (r.invalid ||= []).push(i);
        return r.invalid || r.missing ? r : void 0;
      }
      serialize(e) {
        let { requireAllSignatures: t, verifySignatures: r } = Object.assign(
            { requireAllSignatures: !0, verifySignatures: !0 },
            e
          ),
          n = this.serializeMessage();
        if (r) {
          let e = this._getMessageSignednessErrors(n, t);
          if (e) {
            let t = "Signature verification failed.";
            throw (
              (e.invalid &&
                (t += `
Invalid signature for public key${
                  1 === e.invalid.length ? "" : "(s)"
                } [\`${e.invalid.map((e) => e.toBase58()).join("`, `")}\`].`),
              e.missing &&
                (t += `
Missing signature for public key${
                  1 === e.missing.length ? "" : "(s)"
                } [\`${e.missing.map((e) => e.toBase58()).join("`, `")}\`].`),
              Error(t))
            );
          }
        }
        return this._serialize(n);
      }
      _serialize(e) {
        let { signatures: t } = this,
          r = [];
        eH(r, t.length);
        let n = r.length + 64 * t.length + e.length,
          i = o.Buffer.alloc(n);
        return (
          eG(t.length < 256),
          o.Buffer.from(r).copy(i, 0),
          t.forEach(({ signature: e }, t) => {
            null !== e &&
              (eG(64 === e.length, "signature has invalid length"),
              o.Buffer.from(e).copy(i, r.length + 64 * t));
          }),
          e.copy(i, r.length + 64 * t.length),
          eG(i.length <= 1232, `Transaction too large: ${i.length} > 1232`),
          i
        );
      }
      get keys() {
        return (
          eG(1 === this.instructions.length),
          this.instructions[0].keys.map((e) => e.pubkey)
        );
      }
      get programId() {
        return (
          eG(1 === this.instructions.length), this.instructions[0].programId
        );
      }
      get data() {
        return eG(1 === this.instructions.length), this.instructions[0].data;
      }
      static from(e) {
        let t = [...e],
          r = eV(t),
          n = [];
        for (let e = 0; e < r; e++) {
          let e = eX(t, 0, 64);
          n.push(F.default.encode(o.Buffer.from(e)));
        }
        return e8.populate(eQ.from(t), n);
      }
      static populate(e, t = []) {
        let r = new e8();
        return (
          (r.recentBlockhash = e.recentBlockhash),
          e.header.numRequiredSignatures > 0 && (r.feePayer = e.accountKeys[0]),
          t.forEach((t, n) => {
            let i = {
              signature: t == F.default.encode(e6) ? null : F.default.decode(t),
              publicKey: e.accountKeys[n],
            };
            r.signatures.push(i);
          }),
          e.instructions.forEach((t) => {
            let n = t.accounts.map((t) => {
              let n = e.accountKeys[t];
              return {
                pubkey: n,
                isSigner:
                  r.signatures.some(
                    (e) => e.publicKey.toString() === n.toString()
                  ) || e.isAccountSigner(t),
                isWritable: e.isAccountWritable(t),
              };
            });
            r.instructions.push(
              new e5({
                keys: n,
                programId: e.accountKeys[t.programIdIndex],
                data: F.default.decode(t.data),
              })
            );
          }),
          (r._message = e),
          (r._json = r.toJSON()),
          r
        );
      }
    }
    class e3 {
      get version() {
        return this.message.version;
      }
      constructor(e, t) {
        if (((this.signatures = void 0), (this.message = void 0), void 0 !== t))
          eG(
            t.length === e.header.numRequiredSignatures,
            "Expected signatures length to be equal to the number of required signatures"
          ),
            (this.signatures = t);
        else {
          const t = [];
          for (let r = 0; r < e.header.numRequiredSignatures; r++)
            t.push(new Uint8Array(64));
          this.signatures = t;
        }
        this.message = e;
      }
      serialize() {
        let e = this.message.serialize(),
          t = [];
        eH(t, this.signatures.length);
        let r = H.struct([
            H.blob(t.length, "encodedSignaturesLength"),
            H.seq(
              ((e = "signature") => H.blob(64, e))(),
              this.signatures.length,
              "signatures"
            ),
            H.blob(e.length, "serializedMessage"),
          ]),
          n = new Uint8Array(2048),
          i = r.encode(
            {
              encodedSignaturesLength: new Uint8Array(t),
              signatures: this.signatures,
              serializedMessage: e,
            },
            n
          );
        return n.slice(0, i);
      }
      static deserialize(e) {
        let t = [...e],
          r = [],
          n = eV(t);
        for (let e = 0; e < n; e++) r.push(new Uint8Array(eX(t, 0, 64)));
        return new e3(e1.deserialize(new Uint8Array(t)), r);
      }
      sign(e) {
        let t = this.message.serialize(),
          r = this.message.staticAccountKeys.slice(
            0,
            this.message.header.numRequiredSignatures
          );
        for (let n of e) {
          let e = r.findIndex((e) => e.equals(n.publicKey));
          eG(
            e >= 0,
            `Cannot sign with non signer key ${n.publicKey.toBase58()}`
          ),
            (this.signatures[e] = eL(t, n.secretKey));
        }
      }
      addSignature(e, t) {
        eG(64 === t.byteLength, "Signature must be 64 bytes long");
        let r = this.message.staticAccountKeys
          .slice(0, this.message.header.numRequiredSignatures)
          .findIndex((t) => t.equals(e));
        eG(
          r >= 0,
          `Can not add signature; \`${e.toBase58()}\` is not required to sign this transaction`
        ),
          (this.signatures[r] = t);
      }
    }
    let e4 = new eM("SysvarC1ock11111111111111111111111111111111");
    new eM("SysvarEpochSchedu1e111111111111111111111111"),
      new eM("Sysvar1nstructions1111111111111111111111111");
    let e7 = new eM("SysvarRecentB1ockHashes11111111111111111111"),
      e9 = new eM("SysvarRent111111111111111111111111111111111");
    new eM("SysvarRewards111111111111111111111111111111"),
      new eM("SysvarS1otHashes111111111111111111111111111"),
      new eM("SysvarS1otHistory11111111111111111111111111");
    let te = new eM("SysvarStakeHistory1111111111111111111111111");
    class tt extends Error {
      constructor({ action: e, signature: t, transactionMessage: r, logs: n }) {
        let i;
        const s = n
            ? `Logs: 
${JSON.stringify(n.slice(-10), null, 2)}. `
            : "",
          o =
            "\nCatch the `SendTransactionError` and call `getLogs()` on it for full details.";
        switch (e) {
          case "send":
            i =
              `Transaction ${t} resulted in an error. 
${r}. ` +
              s +
              o;
            break;
          case "simulate":
            i =
              `Simulation failed. 
Message: ${r}. 
` +
              s +
              o;
            break;
          default:
            i = `Unknown action '${e}'`;
        }
        super(i),
          (this.signature = void 0),
          (this.transactionMessage = void 0),
          (this.transactionLogs = void 0),
          (this.signature = t),
          (this.transactionMessage = r),
          (this.transactionLogs = n || void 0);
      }
      get transactionError() {
        return {
          message: this.transactionMessage,
          logs: Array.isArray(this.transactionLogs)
            ? this.transactionLogs
            : void 0,
        };
      }
      get logs() {
        let e = this.transactionLogs;
        if (null == e || "object" != typeof e || !("then" in e)) return e;
      }
      async getLogs(e) {
        return (
          Array.isArray(this.transactionLogs) ||
            (this.transactionLogs = new Promise((t, r) => {
              e.getTransaction(this.signature)
                .then((e) => {
                  if (e && e.meta && e.meta.logMessages) {
                    let r = e.meta.logMessages;
                    (this.transactionLogs = r), t(r);
                  } else r(Error("Log messages not found"));
                })
                .catch(r);
            })),
          await this.transactionLogs
        );
      }
    }
    class tr extends Error {
      constructor({ code: e, message: t, data: r }, n) {
        super(null != n ? `${n}: ${t}` : t),
          (this.code = void 0),
          (this.data = void 0),
          (this.code = e),
          (this.data = r),
          (this.name = "SolanaJSONRPCError");
      }
    }
    async function tn(e, t, r, n) {
      let i,
        s = n && {
          skipPreflight: n.skipPreflight,
          preflightCommitment: n.preflightCommitment || n.commitment,
          maxRetries: n.maxRetries,
          minContextSlot: n.minContextSlot,
        },
        o = await e.sendTransaction(t, r, s);
      if (null != t.recentBlockhash && null != t.lastValidBlockHeight)
        i = (
          await e.confirmTransaction(
            {
              abortSignal: n?.abortSignal,
              signature: o,
              blockhash: t.recentBlockhash,
              lastValidBlockHeight: t.lastValidBlockHeight,
            },
            n && n.commitment
          )
        ).value;
      else if (null != t.minNonceContextSlot && null != t.nonceInfo) {
        let { nonceInstruction: r } = t.nonceInfo,
          s = r.keys[0].pubkey;
        i = (
          await e.confirmTransaction(
            {
              abortSignal: n?.abortSignal,
              minContextSlot: t.minNonceContextSlot,
              nonceAccountPubkey: s,
              nonceValue: t.nonceInfo.nonce,
              signature: o,
            },
            n && n.commitment
          )
        ).value;
      } else
        n?.abortSignal != null &&
          console.warn(
            "sendAndConfirmTransaction(): A transaction with a deprecated confirmation strategy was supplied along with an `abortSignal`. Only transactions having `lastValidBlockHeight` or a combination of `nonceInfo` and `minNonceContextSlot` are abortable."
          ),
          (i = (await e.confirmTransaction(o, n && n.commitment)).value);
      if (i.err) {
        if (null != o)
          throw new tt({
            action: "send",
            signature: o,
            transactionMessage: `Status: (${JSON.stringify(i)})`,
          });
        throw Error(`Transaction ${o} failed (${JSON.stringify(i)})`);
      }
      return o;
    }
    function ti(e) {
      return new Promise((t) => setTimeout(t, e));
    }
    function ts(e, t) {
      let r =
          e.layout.span >= 0
            ? e.layout.span
            : (function e(t, r) {
                let n = (t) => {
                    if (t.span >= 0) return t.span;
                    if ("function" == typeof t.alloc)
                      return t.alloc(r[t.property]);
                    if ("count" in t && "elementLayout" in t) {
                      let e = r[t.property];
                      if (Array.isArray(e))
                        return e.length * n(t.elementLayout);
                    } else if ("fields" in t)
                      return e({ layout: t }, r[t.property]);
                    return 0;
                  },
                  i = 0;
                return (
                  t.layout.fields.forEach((e) => {
                    i += n(e);
                  }),
                  i
                );
              })(e, t),
        n = o.Buffer.alloc(r),
        i = Object.assign({ instruction: e.index }, t);
      return e.layout.encode(i, n), n;
    }
    let to = H.nu64("lamportsPerSignature"),
      ta = H.struct([
        H.u32("version"),
        H.u32("state"),
        eF("authorizedPubkey"),
        eF("nonce"),
        H.struct([to], "feeCalculator"),
      ]),
      tu = ta.span;
    class tc {
      constructor(e) {
        (this.authorizedPubkey = void 0),
          (this.nonce = void 0),
          (this.feeCalculator = void 0),
          (this.authorizedPubkey = e.authorizedPubkey),
          (this.nonce = e.nonce),
          (this.feeCalculator = e.feeCalculator);
      }
      static fromAccountData(e) {
        let t = ta.decode(eO(e), 0);
        return new tc({
          authorizedPubkey: new eM(t.authorizedPubkey),
          nonce: new eM(t.nonce).toString(),
          feeCalculator: t.feeCalculator,
        });
      }
    }
    function tl(e) {
      let t = (0, H.blob)(8, e),
        r = t.decode.bind(t),
        n = t.encode.bind(t),
        i = ((e = {}) =>
          (function (e, t) {
            if (Z(e) !== Z(t)) throw new J(8078004);
            if (Z(e) && Z(t) && e.fixedSize !== t.fixedSize)
              throw new J(8078005, {
                decoderFixedSize: t.fixedSize,
                encoderFixedSize: e.fixedSize,
              });
            if (!Z(e) && !Z(t) && e.maxSize !== t.maxSize)
              throw new J(8078006, {
                decoderMaxSize: t.maxSize,
                encoderMaxSize: e.maxSize,
              });
            return {
              ...t,
              ...e,
              decode: t.decode,
              encode: e.encode,
              read: t.read,
              write: e.write,
            };
          })(
            ((e = {}) => {
              var t, r;
              return Object.freeze({
                ...(r = {
                  fixedSize: (t = {
                    config: e,
                    name: "u64",
                    range: [0n, BigInt("0xffffffffffffffff")],
                    set: (e, t, r) => e.setBigUint64(0, BigInt(t), r),
                    size: 8,
                  }).size,
                  write(e, r, n) {
                    t.range &&
                      (function (e, t, r, n) {
                        if (n < t || n > r)
                          throw new J(8078011, {
                            codecDescription: e,
                            max: r,
                            min: t,
                            value: n,
                          });
                      })(t.name, t.range[0], t.range[1], e);
                    let i = new ArrayBuffer(t.size);
                    return (
                      t.set(new DataView(i), e, X(t.config)),
                      r.set(new Uint8Array(i), n),
                      n + t.size
                    );
                  },
                }),
                encode: (e) => {
                  let t = new Uint8Array(
                    "fixedSize" in r ? r.fixedSize : r.getSizeFromValue(e)
                  );
                  return r.write(e, t, 0), t;
                },
              });
            })(e),
            ((e = {}) => {
              var t, r;
              return Object.freeze({
                ...(r = {
                  fixedSize: (t = {
                    config: e,
                    get: (e, t) => e.getBigUint64(0, t),
                    name: "u64",
                    size: 8,
                  }).size,
                  read(e, r = 0) {
                    var n, i, s;
                    let o, a;
                    !(function (e, t, r = 0) {
                      if (t.length - r <= 0)
                        throw new J(8078e3, { codecDescription: e });
                    })(t.name, e, r),
                      (function (e, t, r, n = 0) {
                        let i = r.length - n;
                        if (i < t)
                          throw new J(8078001, {
                            bytesLength: i,
                            codecDescription: e,
                            expected: t,
                          });
                      })(t.name, t.size, e, r);
                    let u = new DataView(
                      ((n = e),
                      (i = r),
                      (s = t.size),
                      (o = n.byteOffset + (i ?? 0)),
                      (a = s ?? n.byteLength),
                      n.buffer.slice(o, o + a))
                    );
                    return [t.get(u, X(t.config)), r + t.size];
                  },
                }),
                decode: (e, t = 0) => r.read(e, t)[0],
              });
            })(e)
          ))();
      return (
        (t.decode = (e, t) => {
          let n = r(e, t);
          return i.decode(n);
        }),
        (t.encode = (e, t, r) => n(i.encode(e), t, r)),
        t
      );
    }
    let tf = Object.freeze({
      Create: {
        index: 0,
        layout: H.struct([
          H.u32("instruction"),
          H.ns64("lamports"),
          H.ns64("space"),
          eF("programId"),
        ]),
      },
      Assign: {
        index: 1,
        layout: H.struct([H.u32("instruction"), eF("programId")]),
      },
      Transfer: {
        index: 2,
        layout: H.struct([H.u32("instruction"), tl("lamports")]),
      },
      CreateWithSeed: {
        index: 3,
        layout: H.struct([
          H.u32("instruction"),
          eF("base"),
          ej("seed"),
          H.ns64("lamports"),
          H.ns64("space"),
          eF("programId"),
        ]),
      },
      AdvanceNonceAccount: {
        index: 4,
        layout: H.struct([H.u32("instruction")]),
      },
      WithdrawNonceAccount: {
        index: 5,
        layout: H.struct([H.u32("instruction"), H.ns64("lamports")]),
      },
      InitializeNonceAccount: {
        index: 6,
        layout: H.struct([H.u32("instruction"), eF("authorized")]),
      },
      AuthorizeNonceAccount: {
        index: 7,
        layout: H.struct([H.u32("instruction"), eF("authorized")]),
      },
      Allocate: {
        index: 8,
        layout: H.struct([H.u32("instruction"), H.ns64("space")]),
      },
      AllocateWithSeed: {
        index: 9,
        layout: H.struct([
          H.u32("instruction"),
          eF("base"),
          ej("seed"),
          H.ns64("space"),
          eF("programId"),
        ]),
      },
      AssignWithSeed: {
        index: 10,
        layout: H.struct([
          H.u32("instruction"),
          eF("base"),
          ej("seed"),
          eF("programId"),
        ]),
      },
      TransferWithSeed: {
        index: 11,
        layout: H.struct([
          H.u32("instruction"),
          tl("lamports"),
          ej("seed"),
          eF("programId"),
        ]),
      },
      UpgradeNonceAccount: {
        index: 12,
        layout: H.struct([H.u32("instruction")]),
      },
    });
    class th {
      constructor() {}
      static createAccount(e) {
        let t = ts(tf.Create, {
          lamports: e.lamports,
          space: e.space,
          programId: eO(e.programId.toBuffer()),
        });
        return new e5({
          keys: [
            { pubkey: e.fromPubkey, isSigner: !0, isWritable: !0 },
            { pubkey: e.newAccountPubkey, isSigner: !0, isWritable: !0 },
          ],
          programId: this.programId,
          data: t,
        });
      }
      static transfer(e) {
        let t, r;
        return (
          "basePubkey" in e
            ? ((t = ts(tf.TransferWithSeed, {
                lamports: BigInt(e.lamports),
                seed: e.seed,
                programId: eO(e.programId.toBuffer()),
              })),
              (r = [
                { pubkey: e.fromPubkey, isSigner: !1, isWritable: !0 },
                { pubkey: e.basePubkey, isSigner: !0, isWritable: !1 },
                { pubkey: e.toPubkey, isSigner: !1, isWritable: !0 },
              ]))
            : ((t = ts(tf.Transfer, { lamports: BigInt(e.lamports) })),
              (r = [
                { pubkey: e.fromPubkey, isSigner: !0, isWritable: !0 },
                { pubkey: e.toPubkey, isSigner: !1, isWritable: !0 },
              ])),
          new e5({ keys: r, programId: this.programId, data: t })
        );
      }
      static assign(e) {
        let t, r;
        return (
          "basePubkey" in e
            ? ((t = ts(tf.AssignWithSeed, {
                base: eO(e.basePubkey.toBuffer()),
                seed: e.seed,
                programId: eO(e.programId.toBuffer()),
              })),
              (r = [
                { pubkey: e.accountPubkey, isSigner: !1, isWritable: !0 },
                { pubkey: e.basePubkey, isSigner: !0, isWritable: !1 },
              ]))
            : ((t = ts(tf.Assign, { programId: eO(e.programId.toBuffer()) })),
              (r = [
                { pubkey: e.accountPubkey, isSigner: !0, isWritable: !0 },
              ])),
          new e5({ keys: r, programId: this.programId, data: t })
        );
      }
      static createAccountWithSeed(e) {
        let t = ts(tf.CreateWithSeed, {
            base: eO(e.basePubkey.toBuffer()),
            seed: e.seed,
            lamports: e.lamports,
            space: e.space,
            programId: eO(e.programId.toBuffer()),
          }),
          r = [
            { pubkey: e.fromPubkey, isSigner: !0, isWritable: !0 },
            { pubkey: e.newAccountPubkey, isSigner: !1, isWritable: !0 },
          ];
        return (
          e.basePubkey.equals(e.fromPubkey) ||
            r.push({ pubkey: e.basePubkey, isSigner: !0, isWritable: !1 }),
          new e5({ keys: r, programId: this.programId, data: t })
        );
      }
      static createNonceAccount(e) {
        let t = new e8();
        "basePubkey" in e && "seed" in e
          ? t.add(
              th.createAccountWithSeed({
                fromPubkey: e.fromPubkey,
                newAccountPubkey: e.noncePubkey,
                basePubkey: e.basePubkey,
                seed: e.seed,
                lamports: e.lamports,
                space: tu,
                programId: this.programId,
              })
            )
          : t.add(
              th.createAccount({
                fromPubkey: e.fromPubkey,
                newAccountPubkey: e.noncePubkey,
                lamports: e.lamports,
                space: tu,
                programId: this.programId,
              })
            );
        let r = {
          noncePubkey: e.noncePubkey,
          authorizedPubkey: e.authorizedPubkey,
        };
        return t.add(this.nonceInitialize(r)), t;
      }
      static nonceInitialize(e) {
        let t = ts(tf.InitializeNonceAccount, {
          authorized: eO(e.authorizedPubkey.toBuffer()),
        });
        return new e5({
          keys: [
            { pubkey: e.noncePubkey, isSigner: !1, isWritable: !0 },
            { pubkey: e7, isSigner: !1, isWritable: !1 },
            { pubkey: e9, isSigner: !1, isWritable: !1 },
          ],
          programId: this.programId,
          data: t,
        });
      }
      static nonceAdvance(e) {
        let t = ts(tf.AdvanceNonceAccount);
        return new e5({
          keys: [
            { pubkey: e.noncePubkey, isSigner: !1, isWritable: !0 },
            { pubkey: e7, isSigner: !1, isWritable: !1 },
            { pubkey: e.authorizedPubkey, isSigner: !0, isWritable: !1 },
          ],
          programId: this.programId,
          data: t,
        });
      }
      static nonceWithdraw(e) {
        let t = ts(tf.WithdrawNonceAccount, { lamports: e.lamports });
        return new e5({
          keys: [
            { pubkey: e.noncePubkey, isSigner: !1, isWritable: !0 },
            { pubkey: e.toPubkey, isSigner: !1, isWritable: !0 },
            { pubkey: e7, isSigner: !1, isWritable: !1 },
            { pubkey: e9, isSigner: !1, isWritable: !1 },
            { pubkey: e.authorizedPubkey, isSigner: !0, isWritable: !1 },
          ],
          programId: this.programId,
          data: t,
        });
      }
      static nonceAuthorize(e) {
        let t = ts(tf.AuthorizeNonceAccount, {
          authorized: eO(e.newAuthorizedPubkey.toBuffer()),
        });
        return new e5({
          keys: [
            { pubkey: e.noncePubkey, isSigner: !1, isWritable: !0 },
            { pubkey: e.authorizedPubkey, isSigner: !0, isWritable: !1 },
          ],
          programId: this.programId,
          data: t,
        });
      }
      static allocate(e) {
        let t, r;
        return (
          "basePubkey" in e
            ? ((t = ts(tf.AllocateWithSeed, {
                base: eO(e.basePubkey.toBuffer()),
                seed: e.seed,
                space: e.space,
                programId: eO(e.programId.toBuffer()),
              })),
              (r = [
                { pubkey: e.accountPubkey, isSigner: !1, isWritable: !0 },
                { pubkey: e.basePubkey, isSigner: !0, isWritable: !1 },
              ]))
            : ((t = ts(tf.Allocate, { space: e.space })),
              (r = [
                { pubkey: e.accountPubkey, isSigner: !0, isWritable: !0 },
              ])),
          new e5({ keys: r, programId: this.programId, data: t })
        );
      }
    }
    th.programId = new eM("11111111111111111111111111111111");
    class td {
      constructor() {}
      static getMinNumSignatures(e) {
        return 2 * (Math.ceil(e / td.chunkSize) + 1 + 1);
      }
      static async load(e, t, r, n, i) {
        {
          let s = await e.getMinimumBalanceForRentExemption(i.length),
            o = await e.getAccountInfo(r.publicKey, "confirmed"),
            a = null;
          if (null !== o) {
            if (o.executable)
              return (
                console.error(
                  "Program load failed, account is already executable"
                ),
                !1
              );
            o.data.length !== i.length &&
              (a = a || new e8()).add(
                th.allocate({ accountPubkey: r.publicKey, space: i.length })
              ),
              o.owner.equals(n) ||
                (a = a || new e8()).add(
                  th.assign({ accountPubkey: r.publicKey, programId: n })
                ),
              o.lamports < s &&
                (a = a || new e8()).add(
                  th.transfer({
                    fromPubkey: t.publicKey,
                    toPubkey: r.publicKey,
                    lamports: s - o.lamports,
                  })
                );
          } else
            a = new e8().add(
              th.createAccount({
                fromPubkey: t.publicKey,
                newAccountPubkey: r.publicKey,
                lamports: s > 0 ? s : 1,
                space: i.length,
                programId: n,
              })
            );
          null !== a && (await tn(e, a, [t, r], { commitment: "confirmed" }));
        }
        let s = H.struct([
            H.u32("instruction"),
            H.u32("offset"),
            H.u32("bytesLength"),
            H.u32("bytesLengthPadding"),
            H.seq(H.u8("byte"), H.offset(H.u32(), -8), "bytes"),
          ]),
          a = td.chunkSize,
          u = 0,
          c = i,
          l = [];
        for (; c.length > 0; ) {
          let i = c.slice(0, a),
            f = o.Buffer.alloc(a + 16);
          s.encode(
            {
              instruction: 0,
              offset: u,
              bytes: i,
              bytesLength: 0,
              bytesLengthPadding: 0,
            },
            f
          );
          let h = new e8().add({
            keys: [{ pubkey: r.publicKey, isSigner: !0, isWritable: !0 }],
            programId: n,
            data: f,
          });
          l.push(tn(e, h, [t, r], { commitment: "confirmed" })),
            e._rpcEndpoint.includes("solana.com") && (await ti(250)),
            (u += a),
            (c = c.slice(a));
        }
        await Promise.all(l);
        {
          let i = H.struct([H.u32("instruction")]),
            s = o.Buffer.alloc(i.span);
          i.encode({ instruction: 1 }, s);
          let a = new e8().add({
              keys: [
                { pubkey: r.publicKey, isSigner: !0, isWritable: !0 },
                { pubkey: e9, isSigner: !1, isWritable: !1 },
              ],
              programId: n,
              data: s,
            }),
            u = "processed",
            c = await e.sendTransaction(a, [t, r], { preflightCommitment: u }),
            { context: l, value: f } = await e.confirmTransaction(
              {
                signature: c,
                lastValidBlockHeight: a.lastValidBlockHeight,
                blockhash: a.recentBlockhash,
              },
              u
            );
          if (f.err)
            throw Error(`Transaction ${c} failed (${JSON.stringify(f)})`);
          for (;;) {
            try {
              if ((await e.getSlot({ commitment: u })) > l.slot) break;
            } catch {}
            await new Promise((e) => setTimeout(e, Math.round(200)));
          }
        }
        return !0;
      }
    }
    (td.chunkSize = 932), new eM("BPFLoader2111111111111111111111111111111111");
    var tp =
      (n = (function () {
        if (s) return i;
        s = 1;
        var e = Object.prototype.toString,
          t =
            Object.keys ||
            function (e) {
              var t = [];
              for (var r in e) t.push(r);
              return t;
            };
        return (i = function (r) {
          var n = (function r(n, i) {
            var s, o, a, u, c, l, f;
            if (!0 === n) return "true";
            if (!1 === n) return "false";
            switch (typeof n) {
              case "object":
                if (null === n) return null;
                if (n.toJSON && "function" == typeof n.toJSON)
                  return r(n.toJSON(), i);
                if ("[object Array]" === (f = e.call(n))) {
                  for (s = 0, a = "[", o = n.length - 1; s < o; s++)
                    a += r(n[s], !0) + ",";
                  return o > -1 && (a += r(n[s], !0)), a + "]";
                }
                if ("[object Object]" !== f) return JSON.stringify(n);
                for (o = (u = t(n).sort()).length, a = "", s = 0; s < o; )
                  void 0 !== (l = r(n[(c = u[s])], !1)) &&
                    (a && (a += ","), (a += JSON.stringify(c) + ":" + l)),
                    s++;
                return "{" + a + "}";
              case "function":
              case "undefined":
                return i ? null : void 0;
              case "string":
                return JSON.stringify(n);
              default:
                return isFinite(n) ? n : null;
            }
          })(r, !1);
          if (void 0 !== n) return "" + n;
        });
      })()) &&
      n.__esModule &&
      Object.prototype.hasOwnProperty.call(n, "default")
        ? n.default
        : n;
    function tg(e) {
      let t = 0;
      for (; e > 1; ) (e /= 2), t++;
      return t;
    }
    class ty {
      constructor(e, t, r, n, i) {
        (this.slotsPerEpoch = void 0),
          (this.leaderScheduleSlotOffset = void 0),
          (this.warmup = void 0),
          (this.firstNormalEpoch = void 0),
          (this.firstNormalSlot = void 0),
          (this.slotsPerEpoch = e),
          (this.leaderScheduleSlotOffset = t),
          (this.warmup = r),
          (this.firstNormalEpoch = n),
          (this.firstNormalSlot = i);
      }
      getEpoch(e) {
        return this.getEpochAndSlotIndex(e)[0];
      }
      getEpochAndSlotIndex(e) {
        if (e < this.firstNormalSlot) {
          var t;
          let r =
              tg(
                0 === (t = e + 32 + 1)
                  ? 1
                  : (t--,
                    (t |= t >> 1),
                    (t |= t >> 2),
                    (t |= t >> 4),
                    (t |= t >> 8),
                    (t |= t >> 16),
                    (t |= t >> 32) + 1)
              ) -
              tg(32) -
              1,
            n = this.getSlotsInEpoch(r);
          return [r, e - (n - 32)];
        }
        {
          let t = e - this.firstNormalSlot,
            r = Math.floor(t / this.slotsPerEpoch);
          return [this.firstNormalEpoch + r, t % this.slotsPerEpoch];
        }
      }
      getFirstSlotInEpoch(e) {
        return e <= this.firstNormalEpoch
          ? (Math.pow(2, e) - 1) * 32
          : (e - this.firstNormalEpoch) * this.slotsPerEpoch +
              this.firstNormalSlot;
      }
      getLastSlotInEpoch(e) {
        return this.getFirstSlotInEpoch(e) + this.getSlotsInEpoch(e) - 1;
      }
      getSlotsInEpoch(e) {
        return e < this.firstNormalEpoch
          ? Math.pow(2, e + tg(32))
          : this.slotsPerEpoch;
      }
    }
    var tm = globalThis.fetch;
    class tb extends ex {
      constructor(e, t, r) {
        super(
          (e) => {
            let r = new eE(e, {
              autoconnect: !0,
              max_reconnects: 5,
              reconnect: !0,
              reconnect_interval: 1e3,
              ...t,
            });
            return (
              "socket" in r
                ? (this.underlyingSocket = r.socket)
                : (this.underlyingSocket = r),
              r
            );
          },
          e,
          t,
          r
        ),
          (this.underlyingSocket = void 0);
      }
      call(...e) {
        let t = this.underlyingSocket?.readyState;
        return 1 === t
          ? super.call(...e)
          : Promise.reject(
              Error(
                "Tried to call a JSON-RPC method `" +
                  e[0] +
                  "` but the socket was not `CONNECTING` or `OPEN` (`readyState` was " +
                  t +
                  ")"
              )
            );
      }
      notify(...e) {
        let t = this.underlyingSocket?.readyState;
        return 1 === t
          ? super.notify(...e)
          : Promise.reject(
              Error(
                "Tried to send a JSON-RPC notification `" +
                  e[0] +
                  "` but the socket was not `CONNECTING` or `OPEN` (`readyState` was " +
                  t +
                  ")"
              )
            );
      }
    }
    class tw {
      constructor(e) {
        (this.key = void 0),
          (this.state = void 0),
          (this.key = e.key),
          (this.state = e.state);
      }
      isActive() {
        let e = BigInt("0xffffffffffffffff");
        return this.state.deactivationSlot === e;
      }
      static deserialize(e) {
        let t = (function (e, t) {
            let r;
            try {
              r = e.layout.decode(t);
            } catch (e) {
              throw Error("invalid instruction; " + e);
            }
            if (r.typeIndex !== e.index)
              throw Error(
                `invalid account data; account type mismatch ${r.typeIndex} != ${e.index}`
              );
            return r;
          })(tS, e),
          r = e.length - 56;
        eG(r >= 0, "lookup table is invalid"),
          eG(r % 32 == 0, "lookup table is invalid");
        let { addresses: n } = H.struct([
          H.seq(eF(), r / 32, "addresses"),
        ]).decode(e.slice(56));
        return {
          deactivationSlot: t.deactivationSlot,
          lastExtendedSlot: t.lastExtendedSlot,
          lastExtendedSlotStartIndex: t.lastExtendedStartIndex,
          authority: 0 !== t.authority.length ? new eM(t.authority[0]) : void 0,
          addresses: n.map((e) => new eM(e)),
        };
      }
    }
    let tS = {
        index: 1,
        layout: H.struct([
          H.u32("typeIndex"),
          tl("deactivationSlot"),
          H.nu64("lastExtendedSlot"),
          H.u8("lastExtendedStartIndex"),
          H.u8(),
          H.seq(eF(), H.offset(H.u8(), -1), "authority"),
        ]),
      },
      tk = /^[^:]+:\/\/([^:[]+|\[[^\]]+\])(:\d+)?(.*)/i,
      tv = ev(ef(eM), em(), (e) => new eM(e)),
      tB = eb([em(), eh("base64")]),
      tI = ev(ef(o.Buffer), tB, (e) => o.Buffer.from(e[0], "base64"));
    function tE(e) {
      let t, r;
      if ("string" == typeof e) t = e;
      else if (e) {
        let { commitment: n, ...i } = e;
        (t = n), (r = i);
      }
      return { commitment: t, config: r };
    }
    function tA(e) {
      return e.map((e) =>
        "memcmp" in e
          ? {
              ...e,
              memcmp: { ...e.memcmp, encoding: e.memcmp.encoding ?? "base58" },
            }
          : e
      );
    }
    function tx(e) {
      return eS([
        ew({ jsonrpc: eh("2.0"), id: em(), result: e }),
        ew({
          jsonrpc: eh("2.0"),
          id: em(),
          error: ew({
            code: ek(),
            message: em(),
            data: eg(eu("any", () => !0)),
          }),
        }),
      ]);
    }
    let t_ = tx(ek());
    function tT(e) {
      return ev(tx(e), t_, (t) =>
        "error" in t ? t : { ...t, result: eo(t.result, e) }
      );
    }
    function tP(e) {
      return tT(ew({ context: ew({ slot: ep() }), value: e }));
    }
    function tC(e) {
      return ew({ context: ew({ slot: ep() }), value: e });
    }
    function tU(e, t) {
      return 0 === e
        ? new e0({
            header: t.header,
            staticAccountKeys: t.accountKeys.map((e) => new eM(e)),
            recentBlockhash: t.recentBlockhash,
            compiledInstructions: t.instructions.map((e) => ({
              programIdIndex: e.programIdIndex,
              accountKeyIndexes: e.accounts,
              data: F.default.decode(e.data),
            })),
            addressTableLookups: t.addressTableLookups,
          })
        : new eQ(t);
    }
    let tL = ew({
        foundation: ep(),
        foundationTerm: ep(),
        initial: ep(),
        taper: ep(),
        terminal: ep(),
      }),
      tR = tT(
        ec(
          ed(
            ew({
              epoch: ep(),
              effectiveSlot: ep(),
              amount: ep(),
              postBalance: ep(),
              commission: eg(ed(ep())),
            })
          )
        )
      ),
      tO = ec(ew({ slot: ep(), prioritizationFee: ep() })),
      tz = ew({ total: ep(), validator: ep(), foundation: ep(), epoch: ep() }),
      tN = ew({
        epoch: ep(),
        slotIndex: ep(),
        slotsInEpoch: ep(),
        absoluteSlot: ep(),
        blockHeight: eg(ep()),
        transactionCount: eg(ep()),
      }),
      tW = ew({
        slotsPerEpoch: ep(),
        leaderScheduleSlotOffset: ep(),
        warmup: el(),
        firstNormalEpoch: ep(),
        firstNormalSlot: ep(),
      }),
      tM = ey(em(), ec(ep())),
      tq = ed(eS([ew({}), em()])),
      tK = ew({ err: tq }),
      tD = eh("receivedSignature"),
      t$ = ew({ "solana-core": em(), "feature-set": eg(ep()) }),
      tF = ew({ program: em(), programId: tv, parsed: ek() }),
      tj = ew({ programId: tv, accounts: ec(tv), data: em() }),
      tV = tP(
        ew({
          err: ed(eS([ew({}), em()])),
          logs: ed(ec(em())),
          accounts: eg(
            ed(
              ec(
                ed(
                  ew({
                    executable: el(),
                    owner: em(),
                    lamports: ep(),
                    data: ec(em()),
                    rentEpoch: eg(ep()),
                  })
                )
              )
            )
          ),
          unitsConsumed: eg(ep()),
          returnData: eg(
            ed(ew({ programId: em(), data: eb([em(), eh("base64")]) }))
          ),
          innerInstructions: eg(
            ed(ec(ew({ index: ep(), instructions: ec(eS([tF, tj])) })))
          ),
        })
      ),
      tH = tP(
        ew({
          byIdentity: ey(em(), ec(ep())),
          range: ew({ firstSlot: ep(), lastSlot: ep() }),
        })
      ),
      tG = tT(tL),
      tJ = tT(tz),
      tZ = tT(tO),
      tY = tT(tN),
      tX = tT(tW),
      tQ = tT(tM),
      t0 = tT(ep()),
      t1 = tP(
        ew({
          total: ep(),
          circulating: ep(),
          nonCirculating: ep(),
          nonCirculatingAccounts: ec(tv),
        })
      ),
      t2 = ew({
        amount: em(),
        uiAmount: ed(ep()),
        decimals: ep(),
        uiAmountString: eg(em()),
      }),
      t6 = tP(
        ec(
          ew({
            address: tv,
            amount: em(),
            uiAmount: ed(ep()),
            decimals: ep(),
            uiAmountString: eg(em()),
          })
        )
      ),
      t5 = tP(
        ec(
          ew({
            pubkey: tv,
            account: ew({
              executable: el(),
              owner: tv,
              lamports: ep(),
              data: tI,
              rentEpoch: ep(),
            }),
          })
        )
      ),
      t8 = ew({ program: em(), parsed: ek(), space: ep() }),
      t3 = tP(
        ec(
          ew({
            pubkey: tv,
            account: ew({
              executable: el(),
              owner: tv,
              lamports: ep(),
              data: t8,
              rentEpoch: ep(),
            }),
          })
        )
      ),
      t4 = tP(ec(ew({ lamports: ep(), address: tv }))),
      t7 = ew({
        executable: el(),
        owner: tv,
        lamports: ep(),
        data: tI,
        rentEpoch: ep(),
      }),
      t9 = ew({ pubkey: tv, account: t7 }),
      re = ev(eS([ef(o.Buffer), t8]), eS([tB, t8]), (e) =>
        Array.isArray(e) ? eo(e, tI) : e
      ),
      rt = ew({
        executable: el(),
        owner: tv,
        lamports: ep(),
        data: re,
        rentEpoch: ep(),
      }),
      rr = ew({ pubkey: tv, account: rt }),
      rn = ew({
        state: eS([
          eh("active"),
          eh("inactive"),
          eh("activating"),
          eh("deactivating"),
        ]),
        active: ep(),
        inactive: ep(),
      }),
      ri = tT(
        ec(
          ew({
            signature: em(),
            slot: ep(),
            err: tq,
            memo: ed(em()),
            blockTime: eg(ed(ep())),
          })
        )
      ),
      rs = tT(
        ec(
          ew({
            signature: em(),
            slot: ep(),
            err: tq,
            memo: ed(em()),
            blockTime: eg(ed(ep())),
          })
        )
      ),
      ro = ew({ subscription: ep(), result: tC(t7) }),
      ra = ew({ pubkey: tv, account: t7 }),
      ru = ew({ subscription: ep(), result: tC(ra) }),
      rc = ew({ parent: ep(), slot: ep(), root: ep() }),
      rl = ew({ subscription: ep(), result: rc }),
      rf = eS([
        ew({
          type: eS([
            eh("firstShredReceived"),
            eh("completed"),
            eh("optimisticConfirmation"),
            eh("root"),
          ]),
          slot: ep(),
          timestamp: ep(),
        }),
        ew({
          type: eh("createdBank"),
          parent: ep(),
          slot: ep(),
          timestamp: ep(),
        }),
        ew({
          type: eh("frozen"),
          slot: ep(),
          timestamp: ep(),
          stats: ew({
            numTransactionEntries: ep(),
            numSuccessfulTransactions: ep(),
            numFailedTransactions: ep(),
            maxTransactionsPerEntry: ep(),
          }),
        }),
        ew({ type: eh("dead"), slot: ep(), timestamp: ep(), err: em() }),
      ]),
      rh = ew({ subscription: ep(), result: rf }),
      rd = ew({ subscription: ep(), result: tC(eS([tK, tD])) }),
      rp = ew({ subscription: ep(), result: ep() }),
      rg = ew({
        pubkey: em(),
        gossip: ed(em()),
        tpu: ed(em()),
        rpc: ed(em()),
        version: ed(em()),
      }),
      ry = ew({
        votePubkey: em(),
        nodePubkey: em(),
        activatedStake: ep(),
        epochVoteAccount: el(),
        epochCredits: ec(eb([ep(), ep(), ep()])),
        commission: ep(),
        lastVote: ep(),
        rootSlot: ed(ep()),
      }),
      rm = tT(ew({ current: ec(ry), delinquent: ec(ry) })),
      rb = eS([eh("processed"), eh("confirmed"), eh("finalized")]),
      rw = ew({
        slot: ep(),
        confirmations: ed(ep()),
        err: tq,
        confirmationStatus: eg(rb),
      }),
      rS = tP(ec(ed(rw))),
      rk = tT(ep()),
      rv = ew({
        accountKey: tv,
        writableIndexes: ec(ep()),
        readonlyIndexes: ec(ep()),
      }),
      rB = ew({
        signatures: ec(em()),
        message: ew({
          accountKeys: ec(em()),
          header: ew({
            numRequiredSignatures: ep(),
            numReadonlySignedAccounts: ep(),
            numReadonlyUnsignedAccounts: ep(),
          }),
          instructions: ec(
            ew({ accounts: ec(ep()), data: em(), programIdIndex: ep() })
          ),
          recentBlockhash: em(),
          addressTableLookups: eg(ec(rv)),
        }),
      }),
      rI = ew({
        pubkey: tv,
        signer: el(),
        writable: el(),
        source: eg(eS([eh("transaction"), eh("lookupTable")])),
      }),
      rE = ew({ accountKeys: ec(rI), signatures: ec(em()) }),
      rA = ew({ parsed: ek(), program: em(), programId: tv }),
      rx = ew({ accounts: ec(tv), data: em(), programId: tv }),
      r_ = ev(
        eS([rx, rA]),
        eS([
          ew({ parsed: ek(), program: em(), programId: em() }),
          ew({ accounts: ec(em()), data: em(), programId: em() }),
        ]),
        (e) => ("accounts" in e ? eo(e, rx) : eo(e, rA))
      ),
      rT = ew({
        signatures: ec(em()),
        message: ew({
          accountKeys: ec(rI),
          instructions: ec(r_),
          recentBlockhash: em(),
          addressTableLookups: eg(ed(ec(rv))),
        }),
      }),
      rP = ew({
        accountIndex: ep(),
        mint: em(),
        owner: eg(em()),
        programId: eg(em()),
        uiTokenAmount: t2,
      }),
      rC = ew({ writable: ec(tv), readonly: ec(tv) }),
      rU = ew({
        err: tq,
        fee: ep(),
        innerInstructions: eg(
          ed(
            ec(
              ew({
                index: ep(),
                instructions: ec(
                  ew({ accounts: ec(ep()), data: em(), programIdIndex: ep() })
                ),
              })
            )
          )
        ),
        preBalances: ec(ep()),
        postBalances: ec(ep()),
        logMessages: eg(ed(ec(em()))),
        preTokenBalances: eg(ed(ec(rP))),
        postTokenBalances: eg(ed(ec(rP))),
        loadedAddresses: eg(rC),
        computeUnitsConsumed: eg(ep()),
        costUnits: eg(ep()),
      }),
      rL = ew({
        err: tq,
        fee: ep(),
        innerInstructions: eg(
          ed(ec(ew({ index: ep(), instructions: ec(r_) })))
        ),
        preBalances: ec(ep()),
        postBalances: ec(ep()),
        logMessages: eg(ed(ec(em()))),
        preTokenBalances: eg(ed(ec(rP))),
        postTokenBalances: eg(ed(ec(rP))),
        loadedAddresses: eg(rC),
        computeUnitsConsumed: eg(ep()),
        costUnits: eg(ep()),
      }),
      rR = eS([eh(0), eh("legacy")]),
      rO = ew({
        pubkey: em(),
        lamports: ep(),
        postBalance: ed(ep()),
        rewardType: ed(em()),
        commission: eg(ed(ep())),
      }),
      rz = tT(
        ed(
          ew({
            blockhash: em(),
            previousBlockhash: em(),
            parentSlot: ep(),
            transactions: ec(
              ew({ transaction: rB, meta: ed(rU), version: eg(rR) })
            ),
            rewards: eg(ec(rO)),
            blockTime: ed(ep()),
            blockHeight: ed(ep()),
          })
        )
      ),
      rN = tT(
        ed(
          ew({
            blockhash: em(),
            previousBlockhash: em(),
            parentSlot: ep(),
            rewards: eg(ec(rO)),
            blockTime: ed(ep()),
            blockHeight: ed(ep()),
          })
        )
      ),
      rW = tT(
        ed(
          ew({
            blockhash: em(),
            previousBlockhash: em(),
            parentSlot: ep(),
            transactions: ec(
              ew({ transaction: rE, meta: ed(rU), version: eg(rR) })
            ),
            rewards: eg(ec(rO)),
            blockTime: ed(ep()),
            blockHeight: ed(ep()),
          })
        )
      ),
      rM = tT(
        ed(
          ew({
            blockhash: em(),
            previousBlockhash: em(),
            parentSlot: ep(),
            transactions: ec(
              ew({ transaction: rT, meta: ed(rL), version: eg(rR) })
            ),
            rewards: eg(ec(rO)),
            blockTime: ed(ep()),
            blockHeight: ed(ep()),
          })
        )
      ),
      rq = tT(
        ed(
          ew({
            blockhash: em(),
            previousBlockhash: em(),
            parentSlot: ep(),
            transactions: ec(
              ew({ transaction: rE, meta: ed(rL), version: eg(rR) })
            ),
            rewards: eg(ec(rO)),
            blockTime: ed(ep()),
            blockHeight: ed(ep()),
          })
        )
      ),
      rK = tT(
        ed(
          ew({
            blockhash: em(),
            previousBlockhash: em(),
            parentSlot: ep(),
            rewards: eg(ec(rO)),
            blockTime: ed(ep()),
            blockHeight: ed(ep()),
          })
        )
      ),
      rD = tT(
        ed(
          ew({
            blockhash: em(),
            previousBlockhash: em(),
            parentSlot: ep(),
            transactions: ec(ew({ transaction: rB, meta: ed(rU) })),
            rewards: eg(ec(rO)),
            blockTime: ed(ep()),
          })
        )
      ),
      r$ = tT(
        ed(
          ew({
            blockhash: em(),
            previousBlockhash: em(),
            parentSlot: ep(),
            signatures: ec(em()),
            blockTime: ed(ep()),
          })
        )
      ),
      rF = tT(
        ed(
          ew({
            slot: ep(),
            meta: ed(rU),
            blockTime: eg(ed(ep())),
            transaction: rB,
            version: eg(rR),
          })
        )
      ),
      rj = tT(
        ed(
          ew({
            slot: ep(),
            transaction: rT,
            meta: ed(rL),
            blockTime: eg(ed(ep())),
            version: eg(rR),
          })
        )
      ),
      rV = tP(ew({ blockhash: em(), lastValidBlockHeight: ep() })),
      rH = tP(el()),
      rG = tT(
        ec(
          ew({
            slot: ep(),
            numTransactions: ep(),
            numSlots: ep(),
            samplePeriodSecs: ep(),
          })
        )
      ),
      rJ = tP(ed(ew({ feeCalculator: ew({ lamportsPerSignature: ep() }) }))),
      rZ = tT(em()),
      rY = tT(em()),
      rX = ew({ err: tq, logs: ec(em()), signature: em() }),
      rQ = ew({ result: tC(rX), subscription: ep() }),
      r0 = { "solana-client": "js/1.0.0-maintenance" };
    class r1 {
      constructor(e, t) {
        var r;
        let n, i, s, o, a, u;
        (this._commitment = void 0),
          (this._confirmTransactionInitialTimeout = void 0),
          (this._rpcEndpoint = void 0),
          (this._rpcWsEndpoint = void 0),
          (this._rpcClient = void 0),
          (this._rpcRequest = void 0),
          (this._rpcBatchRequest = void 0),
          (this._rpcWebSocket = void 0),
          (this._rpcWebSocketConnected = !1),
          (this._rpcWebSocketHeartbeat = null),
          (this._rpcWebSocketIdleTimeout = null),
          (this._rpcWebSocketGeneration = 0),
          (this._disableBlockhashCaching = !1),
          (this._pollingBlockhash = !1),
          (this._blockhashInfo = {
            latestBlockhash: null,
            lastFetch: 0,
            transactionSignatures: [],
            simulatedSignatures: [],
          }),
          (this._nextClientSubscriptionId = 0),
          (this._subscriptionDisposeFunctionsByClientSubscriptionId = {}),
          (this._subscriptionHashByClientSubscriptionId = {}),
          (this._subscriptionStateChangeCallbacksByHash = {}),
          (this._subscriptionCallbacksByServerSubscriptionId = {}),
          (this._subscriptionsByHash = {}),
          (this._subscriptionsAutoDisposedByRpc = new Set()),
          (this.getBlockHeight = (() => {
            let e = {};
            return async (t) => {
              let { commitment: r, config: n } = tE(t),
                i = this._buildArgs([], r, void 0, n),
                s = tp(i);
              return (
                (e[s] =
                  e[s] ??
                  (async () => {
                    try {
                      let e = await this._rpcRequest("getBlockHeight", i),
                        t = eo(e, tT(ep()));
                      if ("error" in t)
                        throw new tr(
                          t.error,
                          "failed to get block height information"
                        );
                      return t.result;
                    } finally {
                      delete e[s];
                    }
                  })()),
                await e[s]
              );
            };
          })()),
          t && "string" == typeof t
            ? (this._commitment = t)
            : t &&
              ((this._commitment = t.commitment),
              (this._confirmTransactionInitialTimeout =
                t.confirmTransactionInitialTimeout),
              (n = t.wsEndpoint),
              (i = t.httpHeaders),
              (s = t.fetch),
              (o = t.fetchMiddleware),
              (a = t.disableRetryOnRateLimit),
              (u = t.httpAgent)),
          (this._rpcEndpoint = (function (e) {
            if (!1 === /^https?:/.test(e))
              throw TypeError(
                "Endpoint URL must start with `http:` or `https:`."
              );
            return e;
          })(e)),
          (this._rpcWsEndpoint =
            n ||
            (function (e) {
              let t = e.match(tk);
              if (null == t)
                throw TypeError(`Failed to validate endpoint URL \`${e}\``);
              let [r, n, i, s] = t,
                o = e.startsWith("https:") ? "wss:" : "ws:",
                a = null == i ? null : parseInt(i.slice(1), 10),
                u = null == a ? "" : `:${a + 1}`;
              return `${o}//${n}${u}${s}`;
            })(e)),
          (this._rpcClient = (function (e, t, r, n, i, s) {
            let o,
              a,
              u = r || tm;
            return (
              null != s &&
                console.warn(
                  "You have supplied an `httpAgent` when creating a `Connection` in a browser environment.It has been ignored; `httpAgent` is only used in Node environments."
                ),
              n &&
                (a = async (e, t) => {
                  let r = await new Promise((r, i) => {
                    try {
                      n(e, t, (e, t) => r([e, t]));
                    } catch (e) {
                      i(e);
                    }
                  });
                  return await u(...r);
                }),
              new eB.default(async (r, n) => {
                let s = {
                  method: "POST",
                  body: r,
                  agent: o,
                  headers: Object.assign(
                    { "Content-Type": "application/json" },
                    t || {},
                    r0
                  ),
                };
                try {
                  let t,
                    r = 5,
                    o = 500;
                  for (
                    ;
                    ((t = a ? await a(e, s) : await u(e, s)),
                    429 === t.status && !0 !== i) && ((r -= 1), 0 !== r);

                  ) {
                    console.error(
                      `Server responded with ${t.status} ${t.statusText}.  Retrying after ${o}ms delay...`
                    ),
                      await ti(o),
                      (o *= 2);
                  }
                  let c = await t.text();
                  t.ok
                    ? n(null, c)
                    : n(Error(`${t.status} ${t.statusText}: ${c}`));
                } catch (e) {
                  e instanceof Error && n(e);
                }
              }, {})
            );
          })(e, i, s, o, a, u)),
          (this._rpcRequest =
            ((r = this._rpcClient),
            (e, t) =>
              new Promise((n, i) => {
                r.request(e, t, (e, t) => {
                  e ? i(e) : n(t);
                });
              }))),
          (this._rpcBatchRequest = (function (e) {
            return (t) =>
              new Promise((r, n) => {
                0 === t.length && r([]);
                let i = t.map((t) => e.request(t.methodName, t.args));
                e.request(i, (e, t) => {
                  e ? n(e) : r(t);
                });
              });
          })(this._rpcClient)),
          (this._rpcWebSocket = new tb(this._rpcWsEndpoint, {
            autoconnect: !1,
            max_reconnects: 1 / 0,
          })),
          this._rpcWebSocket.on("open", this._wsOnOpen.bind(this)),
          this._rpcWebSocket.on("error", this._wsOnError.bind(this)),
          this._rpcWebSocket.on("close", this._wsOnClose.bind(this)),
          this._rpcWebSocket.on(
            "accountNotification",
            this._wsOnAccountNotification.bind(this)
          ),
          this._rpcWebSocket.on(
            "programNotification",
            this._wsOnProgramAccountNotification.bind(this)
          ),
          this._rpcWebSocket.on(
            "slotNotification",
            this._wsOnSlotNotification.bind(this)
          ),
          this._rpcWebSocket.on(
            "slotsUpdatesNotification",
            this._wsOnSlotUpdatesNotification.bind(this)
          ),
          this._rpcWebSocket.on(
            "signatureNotification",
            this._wsOnSignatureNotification.bind(this)
          ),
          this._rpcWebSocket.on(
            "rootNotification",
            this._wsOnRootNotification.bind(this)
          ),
          this._rpcWebSocket.on(
            "logsNotification",
            this._wsOnLogsNotification.bind(this)
          );
      }
      get commitment() {
        return this._commitment;
      }
      get rpcEndpoint() {
        return this._rpcEndpoint;
      }
      async getBalanceAndContext(e, t) {
        let { commitment: r, config: n } = tE(t),
          i = this._buildArgs([e.toBase58()], r, void 0, n),
          s = eo(await this._rpcRequest("getBalance", i), tP(ep()));
        if ("error" in s)
          throw new tr(s.error, `failed to get balance for ${e.toBase58()}`);
        return s.result;
      }
      async getBalance(e, t) {
        return await this.getBalanceAndContext(e, t)
          .then((e) => e.value)
          .catch((t) => {
            throw Error(
              "failed to get balance of account " + e.toBase58() + ": " + t
            );
          });
      }
      async getBlockTime(e) {
        let t = eo(await this._rpcRequest("getBlockTime", [e]), tT(ed(ep())));
        if ("error" in t)
          throw new tr(t.error, `failed to get block time for slot ${e}`);
        return t.result;
      }
      async getMinimumLedgerSlot() {
        let e = eo(await this._rpcRequest("minimumLedgerSlot", []), tT(ep()));
        if ("error" in e)
          throw new tr(e.error, "failed to get minimum ledger slot");
        return e.result;
      }
      async getFirstAvailableBlock() {
        let e = eo(await this._rpcRequest("getFirstAvailableBlock", []), t0);
        if ("error" in e)
          throw new tr(e.error, "failed to get first available block");
        return e.result;
      }
      async getSupply(e) {
        let t = {};
        t =
          "string" == typeof e
            ? { commitment: e }
            : e
            ? { ...e, commitment: (e && e.commitment) || this.commitment }
            : { commitment: this.commitment };
        let r = eo(await this._rpcRequest("getSupply", [t]), t1);
        if ("error" in r) throw new tr(r.error, "failed to get supply");
        return r.result;
      }
      async getTokenSupply(e, t) {
        let r = this._buildArgs([e.toBase58()], t),
          n = eo(await this._rpcRequest("getTokenSupply", r), tP(t2));
        if ("error" in n) throw new tr(n.error, "failed to get token supply");
        return n.result;
      }
      async getTokenAccountBalance(e, t) {
        let r = this._buildArgs([e.toBase58()], t),
          n = eo(await this._rpcRequest("getTokenAccountBalance", r), tP(t2));
        if ("error" in n)
          throw new tr(n.error, "failed to get token account balance");
        return n.result;
      }
      async getTokenAccountsByOwner(e, t, r) {
        let { commitment: n, config: i } = tE(r),
          s = [e.toBase58()];
        "mint" in t
          ? s.push({ mint: t.mint.toBase58() })
          : s.push({ programId: t.programId.toBase58() });
        let o = this._buildArgs(s, n, "base64", i),
          a = eo(await this._rpcRequest("getTokenAccountsByOwner", o), t5);
        if ("error" in a)
          throw new tr(
            a.error,
            `failed to get token accounts owned by account ${e.toBase58()}`
          );
        return a.result;
      }
      async getParsedTokenAccountsByOwner(e, t, r) {
        let n = [e.toBase58()];
        "mint" in t
          ? n.push({ mint: t.mint.toBase58() })
          : n.push({ programId: t.programId.toBase58() });
        let i = this._buildArgs(n, r, "jsonParsed"),
          s = eo(await this._rpcRequest("getTokenAccountsByOwner", i), t3);
        if ("error" in s)
          throw new tr(
            s.error,
            `failed to get token accounts owned by account ${e.toBase58()}`
          );
        return s.result;
      }
      async getLargestAccounts(e) {
        let t = { ...e, commitment: (e && e.commitment) || this.commitment },
          r = t.filter || t.commitment ? [t] : [],
          n = eo(await this._rpcRequest("getLargestAccounts", r), t4);
        if ("error" in n)
          throw new tr(n.error, "failed to get largest accounts");
        return n.result;
      }
      async getTokenLargestAccounts(e, t) {
        let r = this._buildArgs([e.toBase58()], t),
          n = eo(await this._rpcRequest("getTokenLargestAccounts", r), t6);
        if ("error" in n)
          throw new tr(n.error, "failed to get token largest accounts");
        return n.result;
      }
      async getAccountInfoAndContext(e, t) {
        let { commitment: r, config: n } = tE(t),
          i = this._buildArgs([e.toBase58()], r, "base64", n),
          s = eo(await this._rpcRequest("getAccountInfo", i), tP(ed(t7)));
        if ("error" in s)
          throw new tr(
            s.error,
            `failed to get info about account ${e.toBase58()}`
          );
        return s.result;
      }
      async getParsedAccountInfo(e, t) {
        let { commitment: r, config: n } = tE(t),
          i = this._buildArgs([e.toBase58()], r, "jsonParsed", n),
          s = eo(await this._rpcRequest("getAccountInfo", i), tP(ed(rt)));
        if ("error" in s)
          throw new tr(
            s.error,
            `failed to get info about account ${e.toBase58()}`
          );
        return s.result;
      }
      async getAccountInfo(e, t) {
        try {
          return (await this.getAccountInfoAndContext(e, t)).value;
        } catch (t) {
          throw Error(
            "failed to get info about account " + e.toBase58() + ": " + t
          );
        }
      }
      async getMultipleParsedAccounts(e, t) {
        let { commitment: r, config: n } = tE(t),
          i = e.map((e) => e.toBase58()),
          s = this._buildArgs([i], r, "jsonParsed", n),
          o = eo(
            await this._rpcRequest("getMultipleAccounts", s),
            tP(ec(ed(rt)))
          );
        if ("error" in o)
          throw new tr(o.error, `failed to get info for accounts ${i}`);
        return o.result;
      }
      async getMultipleAccountsInfoAndContext(e, t) {
        let { commitment: r, config: n } = tE(t),
          i = e.map((e) => e.toBase58()),
          s = this._buildArgs([i], r, "base64", n),
          o = eo(
            await this._rpcRequest("getMultipleAccounts", s),
            tP(ec(ed(t7)))
          );
        if ("error" in o)
          throw new tr(o.error, `failed to get info for accounts ${i}`);
        return o.result;
      }
      async getMultipleAccountsInfo(e, t) {
        return (await this.getMultipleAccountsInfoAndContext(e, t)).value;
      }
      async getStakeActivation(e, t, r) {
        let { commitment: n, config: i } = tE(t),
          s = this._buildArgs([e.toBase58()], n, void 0, {
            ...i,
            epoch: null != r ? r : i?.epoch,
          }),
          o = eo(await this._rpcRequest("getStakeActivation", s), tT(rn));
        if ("error" in o)
          throw new tr(
            o.error,
            `failed to get Stake Activation ${e.toBase58()}`
          );
        return o.result;
      }
      async getProgramAccounts(e, t) {
        let { commitment: r, config: n } = tE(t),
          { encoding: i, ...s } = n || {},
          o = this._buildArgs([e.toBase58()], r, i || "base64", {
            ...s,
            ...(s.filters ? { filters: tA(s.filters) } : null),
          }),
          a = await this._rpcRequest("getProgramAccounts", o),
          u = ec(t9),
          c = !0 === s.withContext ? eo(a, tP(u)) : eo(a, tT(u));
        if ("error" in c)
          throw new tr(
            c.error,
            `failed to get accounts owned by program ${e.toBase58()}`
          );
        return c.result;
      }
      async getParsedProgramAccounts(e, t) {
        let { commitment: r, config: n } = tE(t),
          i = this._buildArgs([e.toBase58()], r, "jsonParsed", n),
          s = eo(await this._rpcRequest("getProgramAccounts", i), tT(ec(rr)));
        if ("error" in s)
          throw new tr(
            s.error,
            `failed to get accounts owned by program ${e.toBase58()}`
          );
        return s.result;
      }
      async confirmTransaction(e, t) {
        let r, n;
        if ("string" == typeof e) r = e;
        else {
          if (e.abortSignal?.aborted)
            return Promise.reject(e.abortSignal.reason);
          r = e.signature;
        }
        try {
          n = F.default.decode(r);
        } catch (e) {
          throw Error("signature must be base58 encoded: " + r);
        }
        return (eG(64 === n.length, "signature has invalid length"),
        "string" == typeof e)
          ? await this.confirmTransactionUsingLegacyTimeoutStrategy({
              commitment: t || this.commitment,
              signature: r,
            })
          : "lastValidBlockHeight" in e
          ? await this.confirmTransactionUsingBlockHeightExceedanceStrategy({
              commitment: t || this.commitment,
              strategy: e,
            })
          : await this.confirmTransactionUsingDurableNonceStrategy({
              commitment: t || this.commitment,
              strategy: e,
            });
      }
      getCancellationPromise(e) {
        return new Promise((t, r) => {
          null != e &&
            (e.aborted
              ? r(e.reason)
              : e.addEventListener("abort", () => {
                  r(e.reason);
                }));
        });
      }
      getTransactionConfirmationPromise({ commitment: e, signature: t }) {
        let r,
          n,
          i = !1;
        return {
          abortConfirmation: () => {
            n && (n(), (n = void 0)),
              null != r && (this.removeSignatureListener(r), (r = void 0));
          },
          confirmationPromise: new Promise((s, o) => {
            try {
              r = this.onSignature(
                t,
                (e, t) => {
                  (r = void 0),
                    s({
                      __type: e2.PROCESSED,
                      response: { context: t, value: e },
                    });
                },
                e
              );
              let a = new Promise((e) => {
                null == r
                  ? e()
                  : (n = this._onSubscriptionStateChange(r, (t) => {
                      "subscribed" === t && e();
                    }));
              });
              (async () => {
                if ((await a, i)) return;
                let r = await this.getSignatureStatus(t);
                if (i || null == r) return;
                let { context: n, value: u } = r;
                if (null != u)
                  if (u?.err) o(u.err);
                  else {
                    switch (e) {
                      case "confirmed":
                      case "single":
                      case "singleGossip":
                        if ("processed" === u.confirmationStatus) return;
                        break;
                      case "finalized":
                      case "max":
                      case "root":
                        if (
                          "processed" === u.confirmationStatus ||
                          "confirmed" === u.confirmationStatus
                        )
                          return;
                    }
                    (i = !0),
                      s({
                        __type: e2.PROCESSED,
                        response: { context: n, value: u },
                      });
                  }
              })();
            } catch (e) {
              o(e);
            }
          }),
        };
      }
      async confirmTransactionUsingBlockHeightExceedanceStrategy({
        commitment: e,
        strategy: { abortSignal: t, lastValidBlockHeight: r, signature: n },
      }) {
        let i,
          s = !1,
          o = new Promise((t) => {
            let n = async () => {
              try {
                return await this.getBlockHeight(e);
              } catch (e) {
                return -1;
              }
            };
            (async () => {
              let e = await n();
              if (!s) {
                for (; e <= r; )
                  if ((await ti(1e3), s || ((e = await n()), s))) return;
                t({ __type: e2.BLOCKHEIGHT_EXCEEDED });
              }
            })();
          }),
          { abortConfirmation: a, confirmationPromise: u } =
            this.getTransactionConfirmationPromise({
              commitment: e,
              signature: n,
            }),
          c = this.getCancellationPromise(t);
        try {
          let e = await Promise.race([c, u, o]);
          if (e.__type === e2.PROCESSED) i = e.response;
          else throw new eq(n);
        } finally {
          (s = !0), a();
        }
        return i;
      }
      async confirmTransactionUsingDurableNonceStrategy({
        commitment: e,
        strategy: {
          abortSignal: t,
          minContextSlot: r,
          nonceAccountPubkey: n,
          nonceValue: i,
          signature: s,
        },
      }) {
        let o,
          a = !1,
          u = new Promise((t) => {
            let s = i,
              o = null,
              u = async () => {
                try {
                  let { context: t, value: i } = await this.getNonceAndContext(
                    n,
                    { commitment: e, minContextSlot: r }
                  );
                  return (o = t.slot), i?.nonce;
                } catch (e) {
                  return s;
                }
              };
            (async () => {
              if (((s = await u()), !a))
                for (;;) {
                  if (i !== s)
                    return void t({
                      __type: e2.NONCE_INVALID,
                      slotInWhichNonceDidAdvance: o,
                    });
                  if ((await ti(2e3), a || ((s = await u()), a))) return;
                }
            })();
          }),
          { abortConfirmation: c, confirmationPromise: l } =
            this.getTransactionConfirmationPromise({
              commitment: e,
              signature: s,
            }),
          f = this.getCancellationPromise(t);
        try {
          let t = await Promise.race([f, l, u]);
          if (t.__type === e2.PROCESSED) o = t.response;
          else {
            let n;
            for (;;) {
              let e = await this.getSignatureStatus(s);
              if (null == e) break;
              if (e.context.slot < (t.slotInWhichNonceDidAdvance ?? r)) {
                await ti(400);
                continue;
              }
              n = e;
              break;
            }
            if (n?.value) {
              let t = e || "finalized",
                { confirmationStatus: r } = n.value;
              switch (t) {
                case "processed":
                case "recent":
                  if (
                    "processed" !== r &&
                    "confirmed" !== r &&
                    "finalized" !== r
                  )
                    throw new eD(s);
                  break;
                case "confirmed":
                case "single":
                case "singleGossip":
                  if ("confirmed" !== r && "finalized" !== r) throw new eD(s);
                  break;
                case "finalized":
                case "max":
                case "root":
                  if ("finalized" !== r) throw new eD(s);
              }
              o = { context: n.context, value: { err: n.value.err } };
            } else throw new eD(s);
          }
        } finally {
          (a = !0), c();
        }
        return o;
      }
      async confirmTransactionUsingLegacyTimeoutStrategy({
        commitment: e,
        signature: t,
      }) {
        let r,
          n,
          i = new Promise((t) => {
            let n = this._confirmTransactionInitialTimeout || 6e4;
            switch (e) {
              case "processed":
              case "recent":
              case "single":
              case "confirmed":
              case "singleGossip":
                n = this._confirmTransactionInitialTimeout || 3e4;
            }
            r = setTimeout(() => t({ __type: e2.TIMED_OUT, timeoutMs: n }), n);
          }),
          { abortConfirmation: s, confirmationPromise: o } =
            this.getTransactionConfirmationPromise({
              commitment: e,
              signature: t,
            });
        try {
          let e = await Promise.race([o, i]);
          if (e.__type === e2.PROCESSED) n = e.response;
          else throw new eK(t, e.timeoutMs / 1e3);
        } finally {
          clearTimeout(r), s();
        }
        return n;
      }
      async getClusterNodes() {
        let e = eo(await this._rpcRequest("getClusterNodes", []), tT(ec(rg)));
        if ("error" in e) throw new tr(e.error, "failed to get cluster nodes");
        return e.result;
      }
      async getVoteAccounts(e) {
        let t = this._buildArgs([], e),
          r = eo(await this._rpcRequest("getVoteAccounts", t), rm);
        if ("error" in r) throw new tr(r.error, "failed to get vote accounts");
        return r.result;
      }
      async getSlot(e) {
        let { commitment: t, config: r } = tE(e),
          n = this._buildArgs([], t, void 0, r),
          i = eo(await this._rpcRequest("getSlot", n), tT(ep()));
        if ("error" in i) throw new tr(i.error, "failed to get slot");
        return i.result;
      }
      async getSlotLeader(e) {
        let { commitment: t, config: r } = tE(e),
          n = this._buildArgs([], t, void 0, r),
          i = eo(await this._rpcRequest("getSlotLeader", n), tT(em()));
        if ("error" in i) throw new tr(i.error, "failed to get slot leader");
        return i.result;
      }
      async getSlotLeaders(e, t) {
        let r = eo(
          await this._rpcRequest("getSlotLeaders", [e, t]),
          tT(ec(tv))
        );
        if ("error" in r) throw new tr(r.error, "failed to get slot leaders");
        return r.result;
      }
      async getSignatureStatus(e, t) {
        let { context: r, value: n } = await this.getSignatureStatuses([e], t);
        return eG(1 === n.length), { context: r, value: n[0] };
      }
      async getSignatureStatuses(e, t) {
        let r = [e];
        t && r.push(t);
        let n = eo(await this._rpcRequest("getSignatureStatuses", r), rS);
        if ("error" in n)
          throw new tr(n.error, "failed to get signature status");
        return n.result;
      }
      async getTransactionCount(e) {
        let { commitment: t, config: r } = tE(e),
          n = this._buildArgs([], t, void 0, r),
          i = eo(await this._rpcRequest("getTransactionCount", n), tT(ep()));
        if ("error" in i)
          throw new tr(i.error, "failed to get transaction count");
        return i.result;
      }
      async getTotalSupply(e) {
        return (
          await this.getSupply({
            commitment: e,
            excludeNonCirculatingAccountsList: !0,
          })
        ).value.total;
      }
      async getInflationGovernor(e) {
        let t = this._buildArgs([], e),
          r = eo(await this._rpcRequest("getInflationGovernor", t), tG);
        if ("error" in r) throw new tr(r.error, "failed to get inflation");
        return r.result;
      }
      async getInflationReward(e, t, r) {
        let { commitment: n, config: i } = tE(r),
          s = this._buildArgs([e.map((e) => e.toBase58())], n, void 0, {
            ...i,
            epoch: null != t ? t : i?.epoch,
          }),
          o = eo(await this._rpcRequest("getInflationReward", s), tR);
        if ("error" in o)
          throw new tr(o.error, "failed to get inflation reward");
        return o.result;
      }
      async getInflationRate() {
        let e = eo(await this._rpcRequest("getInflationRate", []), tJ);
        if ("error" in e) throw new tr(e.error, "failed to get inflation rate");
        return e.result;
      }
      async getEpochInfo(e) {
        let { commitment: t, config: r } = tE(e),
          n = this._buildArgs([], t, void 0, r),
          i = eo(await this._rpcRequest("getEpochInfo", n), tY);
        if ("error" in i) throw new tr(i.error, "failed to get epoch info");
        return i.result;
      }
      async getEpochSchedule() {
        let e = eo(await this._rpcRequest("getEpochSchedule", []), tX);
        if ("error" in e) throw new tr(e.error, "failed to get epoch schedule");
        let t = e.result;
        return new ty(
          t.slotsPerEpoch,
          t.leaderScheduleSlotOffset,
          t.warmup,
          t.firstNormalEpoch,
          t.firstNormalSlot
        );
      }
      async getLeaderSchedule() {
        let e = eo(await this._rpcRequest("getLeaderSchedule", []), tQ);
        if ("error" in e)
          throw new tr(e.error, "failed to get leader schedule");
        return e.result;
      }
      async getMinimumBalanceForRentExemption(e, t) {
        let r = this._buildArgs([e], t),
          n = eo(
            await this._rpcRequest("getMinimumBalanceForRentExemption", r),
            rk
          );
        return "error" in n
          ? (console.warn("Unable to fetch minimum balance for rent exemption"),
            0)
          : n.result;
      }
      async getRecentBlockhashAndContext(e) {
        let {
          context: t,
          value: { blockhash: r },
        } = await this.getLatestBlockhashAndContext(e);
        return {
          context: t,
          value: {
            blockhash: r,
            feeCalculator: {
              get lamportsPerSignature() {
                throw Error(
                  "The capability to fetch `lamportsPerSignature` using the `getRecentBlockhash` API is no longer offered by the network. Use the `getFeeForMessage` API to obtain the fee for a given message."
                );
              },
              toJSON: () => ({}),
            },
          },
        };
      }
      async getRecentPerformanceSamples(e) {
        let t = eo(
          await this._rpcRequest("getRecentPerformanceSamples", e ? [e] : []),
          rG
        );
        if ("error" in t)
          throw new tr(t.error, "failed to get recent performance samples");
        return t.result;
      }
      async getFeeCalculatorForBlockhash(e, t) {
        let r = this._buildArgs([e], t),
          n = eo(await this._rpcRequest("getFeeCalculatorForBlockhash", r), rJ);
        if ("error" in n) throw new tr(n.error, "failed to get fee calculator");
        let { context: i, value: s } = n.result;
        return { context: i, value: null !== s ? s.feeCalculator : null };
      }
      async getFeeForMessage(e, t) {
        let r = eO(e.serialize()).toString("base64"),
          n = this._buildArgs([r], t),
          i = eo(await this._rpcRequest("getFeeForMessage", n), tP(ed(ep())));
        if ("error" in i)
          throw new tr(i.error, "failed to get fee for message");
        if (null === i.result) throw Error("invalid blockhash");
        return i.result;
      }
      async getRecentPrioritizationFees(e) {
        let t = e?.lockedWritableAccounts?.map((e) => e.toBase58()),
          r = t?.length ? [t] : [],
          n = eo(await this._rpcRequest("getRecentPrioritizationFees", r), tZ);
        if ("error" in n)
          throw new tr(n.error, "failed to get recent prioritization fees");
        return n.result;
      }
      async getRecentBlockhash(e) {
        try {
          return (await this.getRecentBlockhashAndContext(e)).value;
        } catch (e) {
          throw Error("failed to get recent blockhash: " + e);
        }
      }
      async getLatestBlockhash(e) {
        try {
          return (await this.getLatestBlockhashAndContext(e)).value;
        } catch (e) {
          throw Error("failed to get recent blockhash: " + e);
        }
      }
      async getLatestBlockhashAndContext(e) {
        let { commitment: t, config: r } = tE(e),
          n = this._buildArgs([], t, void 0, r),
          i = eo(await this._rpcRequest("getLatestBlockhash", n), rV);
        if ("error" in i)
          throw new tr(i.error, "failed to get latest blockhash");
        return i.result;
      }
      async isBlockhashValid(e, t) {
        let { commitment: r, config: n } = tE(t),
          i = this._buildArgs([e], r, void 0, n),
          s = eo(await this._rpcRequest("isBlockhashValid", i), rH);
        if ("error" in s)
          throw new tr(
            s.error,
            "failed to determine if the blockhash `" + e + "`is valid"
          );
        return s.result;
      }
      async getVersion() {
        let e = eo(await this._rpcRequest("getVersion", []), tT(t$));
        if ("error" in e) throw new tr(e.error, "failed to get version");
        return e.result;
      }
      async getGenesisHash() {
        let e = eo(await this._rpcRequest("getGenesisHash", []), tT(em()));
        if ("error" in e) throw new tr(e.error, "failed to get genesis hash");
        return e.result;
      }
      async getBlock(e, t) {
        let { commitment: r, config: n } = tE(t),
          i = this._buildArgsAtLeastConfirmed([e], r, void 0, n),
          s = await this._rpcRequest("getBlock", i);
        try {
          switch (n?.transactionDetails) {
            case "accounts": {
              let e = eo(s, rW);
              if ("error" in e) throw e.error;
              return e.result;
            }
            case "none": {
              let e = eo(s, rN);
              if ("error" in e) throw e.error;
              return e.result;
            }
            default: {
              let e = eo(s, rz);
              if ("error" in e) throw e.error;
              let { result: t } = e;
              return t
                ? {
                    ...t,
                    transactions: t.transactions.map(
                      ({ transaction: e, meta: t, version: r }) => ({
                        meta: t,
                        transaction: { ...e, message: tU(r, e.message) },
                        version: r,
                      })
                    ),
                  }
                : null;
            }
          }
        } catch (e) {
          throw new tr(e, "failed to get confirmed block");
        }
      }
      async getParsedBlock(e, t) {
        let { commitment: r, config: n } = tE(t),
          i = this._buildArgsAtLeastConfirmed([e], r, "jsonParsed", n),
          s = await this._rpcRequest("getBlock", i);
        try {
          switch (n?.transactionDetails) {
            case "accounts": {
              let e = eo(s, rq);
              if ("error" in e) throw e.error;
              return e.result;
            }
            case "none": {
              let e = eo(s, rK);
              if ("error" in e) throw e.error;
              return e.result;
            }
            default: {
              let e = eo(s, rM);
              if ("error" in e) throw e.error;
              return e.result;
            }
          }
        } catch (e) {
          throw new tr(e, "failed to get block");
        }
      }
      async getBlockProduction(e) {
        let t, r;
        if ("string" == typeof e) r = e;
        else if (e) {
          let { commitment: n, ...i } = e;
          (r = n), (t = i);
        }
        let n = this._buildArgs([], r, "base64", t),
          i = eo(await this._rpcRequest("getBlockProduction", n), tH);
        if ("error" in i)
          throw new tr(i.error, "failed to get block production information");
        return i.result;
      }
      async getTransaction(e, t) {
        let { commitment: r, config: n } = tE(t),
          i = this._buildArgsAtLeastConfirmed([e], r, void 0, n),
          s = eo(await this._rpcRequest("getTransaction", i), rF);
        if ("error" in s) throw new tr(s.error, "failed to get transaction");
        let o = s.result;
        return o
          ? {
              ...o,
              transaction: {
                ...o.transaction,
                message: tU(o.version, o.transaction.message),
              },
            }
          : o;
      }
      async getParsedTransaction(e, t) {
        let { commitment: r, config: n } = tE(t),
          i = this._buildArgsAtLeastConfirmed([e], r, "jsonParsed", n),
          s = eo(await this._rpcRequest("getTransaction", i), rj);
        if ("error" in s) throw new tr(s.error, "failed to get transaction");
        return s.result;
      }
      async getParsedTransactions(e, t) {
        let { commitment: r, config: n } = tE(t),
          i = e.map((e) => ({
            methodName: "getTransaction",
            args: this._buildArgsAtLeastConfirmed([e], r, "jsonParsed", n),
          }));
        return (await this._rpcBatchRequest(i)).map((e) => {
          let t = eo(e, rj);
          if ("error" in t) throw new tr(t.error, "failed to get transactions");
          return t.result;
        });
      }
      async getTransactions(e, t) {
        let { commitment: r, config: n } = tE(t),
          i = e.map((e) => ({
            methodName: "getTransaction",
            args: this._buildArgsAtLeastConfirmed([e], r, void 0, n),
          }));
        return (await this._rpcBatchRequest(i)).map((e) => {
          let t = eo(e, rF);
          if ("error" in t) throw new tr(t.error, "failed to get transactions");
          let r = t.result;
          return r
            ? {
                ...r,
                transaction: {
                  ...r.transaction,
                  message: tU(r.version, r.transaction.message),
                },
              }
            : r;
        });
      }
      async getConfirmedBlock(e, t) {
        let r = this._buildArgsAtLeastConfirmed([e], t),
          n = eo(await this._rpcRequest("getBlock", r), rD);
        if ("error" in n)
          throw new tr(n.error, "failed to get confirmed block");
        let i = n.result;
        if (!i) throw Error("Confirmed block " + e + " not found");
        let s = {
          ...i,
          transactions: i.transactions.map(({ transaction: e, meta: t }) => {
            let r = new eQ(e.message);
            return { meta: t, transaction: { ...e, message: r } };
          }),
        };
        return {
          ...s,
          transactions: s.transactions.map(({ transaction: e, meta: t }) => ({
            meta: t,
            transaction: e8.populate(e.message, e.signatures),
          })),
        };
      }
      async getBlocks(e, t, r) {
        let n = this._buildArgsAtLeastConfirmed(void 0 !== t ? [e, t] : [e], r),
          i = eo(await this._rpcRequest("getBlocks", n), tT(ec(ep())));
        if ("error" in i) throw new tr(i.error, "failed to get blocks");
        return i.result;
      }
      async getBlockSignatures(e, t) {
        let r = this._buildArgsAtLeastConfirmed([e], t, void 0, {
            transactionDetails: "signatures",
            rewards: !1,
          }),
          n = eo(await this._rpcRequest("getBlock", r), r$);
        if ("error" in n) throw new tr(n.error, "failed to get block");
        let i = n.result;
        if (!i) throw Error("Block " + e + " not found");
        return i;
      }
      async getConfirmedBlockSignatures(e, t) {
        let r = this._buildArgsAtLeastConfirmed([e], t, void 0, {
            transactionDetails: "signatures",
            rewards: !1,
          }),
          n = eo(await this._rpcRequest("getBlock", r), r$);
        if ("error" in n)
          throw new tr(n.error, "failed to get confirmed block");
        let i = n.result;
        if (!i) throw Error("Confirmed block " + e + " not found");
        return i;
      }
      async getConfirmedTransaction(e, t) {
        let r = this._buildArgsAtLeastConfirmed([e], t),
          n = eo(await this._rpcRequest("getTransaction", r), rF);
        if ("error" in n) throw new tr(n.error, "failed to get transaction");
        let i = n.result;
        if (!i) return i;
        let s = new eQ(i.transaction.message),
          o = i.transaction.signatures;
        return { ...i, transaction: e8.populate(s, o) };
      }
      async getParsedConfirmedTransaction(e, t) {
        let r = this._buildArgsAtLeastConfirmed([e], t, "jsonParsed"),
          n = eo(await this._rpcRequest("getTransaction", r), rj);
        if ("error" in n)
          throw new tr(n.error, "failed to get confirmed transaction");
        return n.result;
      }
      async getParsedConfirmedTransactions(e, t) {
        let r = e.map((e) => ({
          methodName: "getTransaction",
          args: this._buildArgsAtLeastConfirmed([e], t, "jsonParsed"),
        }));
        return (await this._rpcBatchRequest(r)).map((e) => {
          let t = eo(e, rj);
          if ("error" in t)
            throw new tr(t.error, "failed to get confirmed transactions");
          return t.result;
        });
      }
      async getConfirmedSignaturesForAddress(e, t, r) {
        let n = {},
          i = await this.getFirstAvailableBlock();
        for (; !("until" in n) && !(--t <= 0) && !(t < i); )
          try {
            let e = await this.getConfirmedBlockSignatures(t, "finalized");
            e.signatures.length > 0 &&
              (n.until = e.signatures[e.signatures.length - 1].toString());
          } catch (e) {
            if (e instanceof Error && e.message.includes("skipped")) continue;
            throw e;
          }
        let s = await this.getSlot("finalized");
        for (; !("before" in n) && !(++r > s); )
          try {
            let e = await this.getConfirmedBlockSignatures(r);
            e.signatures.length > 0 &&
              (n.before = e.signatures[e.signatures.length - 1].toString());
          } catch (e) {
            if (e instanceof Error && e.message.includes("skipped")) continue;
            throw e;
          }
        return (await this.getConfirmedSignaturesForAddress2(e, n)).map(
          (e) => e.signature
        );
      }
      async getConfirmedSignaturesForAddress2(e, t, r) {
        let n = this._buildArgsAtLeastConfirmed([e.toBase58()], r, void 0, t),
          i = eo(
            await this._rpcRequest("getConfirmedSignaturesForAddress2", n),
            ri
          );
        if ("error" in i)
          throw new tr(
            i.error,
            "failed to get confirmed signatures for address"
          );
        return i.result;
      }
      async getSignaturesForAddress(e, t, r) {
        let n = this._buildArgsAtLeastConfirmed([e.toBase58()], r, void 0, t),
          i = eo(await this._rpcRequest("getSignaturesForAddress", n), rs);
        if ("error" in i)
          throw new tr(i.error, "failed to get signatures for address");
        return i.result;
      }
      async getAddressLookupTable(e, t) {
        let { context: r, value: n } = await this.getAccountInfoAndContext(
            e,
            t
          ),
          i = null;
        return (
          null !== n && (i = new tw({ key: e, state: tw.deserialize(n.data) })),
          { context: r, value: i }
        );
      }
      async getNonceAndContext(e, t) {
        let { context: r, value: n } = await this.getAccountInfoAndContext(
            e,
            t
          ),
          i = null;
        return (
          null !== n && (i = tc.fromAccountData(n.data)),
          { context: r, value: i }
        );
      }
      async getNonce(e, t) {
        return await this.getNonceAndContext(e, t)
          .then((e) => e.value)
          .catch((t) => {
            throw Error(
              "failed to get nonce for account " + e.toBase58() + ": " + t
            );
          });
      }
      async requestAirdrop(e, t) {
        let r = eo(
          await this._rpcRequest("requestAirdrop", [e.toBase58(), t]),
          rZ
        );
        if ("error" in r)
          throw new tr(r.error, `airdrop to ${e.toBase58()} failed`);
        return r.result;
      }
      async _blockhashWithExpiryBlockHeight(e) {
        if (!e) {
          for (; this._pollingBlockhash; ) await ti(100);
          let e = Date.now() - this._blockhashInfo.lastFetch;
          if (null !== this._blockhashInfo.latestBlockhash && !(e >= 3e4))
            return this._blockhashInfo.latestBlockhash;
        }
        return await this._pollNewBlockhash();
      }
      async _pollNewBlockhash() {
        this._pollingBlockhash = !0;
        try {
          let e = Date.now(),
            t = this._blockhashInfo.latestBlockhash,
            r = t ? t.blockhash : null;
          for (let e = 0; e < 50; e++) {
            let e = await this.getLatestBlockhash("finalized");
            if (r !== e.blockhash)
              return (
                (this._blockhashInfo = {
                  latestBlockhash: e,
                  lastFetch: Date.now(),
                  transactionSignatures: [],
                  simulatedSignatures: [],
                }),
                e
              );
            await ti(200);
          }
          throw Error(
            `Unable to obtain a new blockhash after ${Date.now() - e}ms`
          );
        } finally {
          this._pollingBlockhash = !1;
        }
      }
      async getStakeMinimumDelegation(e) {
        let { commitment: t, config: r } = tE(e),
          n = this._buildArgs([], t, "base64", r),
          i = eo(
            await this._rpcRequest("getStakeMinimumDelegation", n),
            tP(ep())
          );
        if ("error" in i)
          throw new tr(i.error, "failed to get stake minimum delegation");
        return i.result;
      }
      async simulateTransaction(e, t, r) {
        let n;
        if ("message" in e) {
          let n = e.serialize(),
            i = o.Buffer.from(n).toString("base64");
          if (Array.isArray(t) || void 0 !== r)
            throw Error("Invalid arguments");
          let s = t || {};
          (s.encoding = "base64"),
            "commitment" in s || (s.commitment = this.commitment),
            t &&
              "object" == typeof t &&
              "innerInstructions" in t &&
              (s.innerInstructions = t.innerInstructions);
          let a = [i, s],
            u = eo(await this._rpcRequest("simulateTransaction", a), tV);
          if ("error" in u)
            throw Error("failed to simulate transaction: " + u.error.message);
          return u.result;
        }
        if (
          (e instanceof e8
            ? (((n = new e8()).feePayer = e.feePayer),
              (n.instructions = e.instructions),
              (n.nonceInfo = e.nonceInfo),
              (n.signatures = e.signatures))
            : ((n = e8.populate(e))._message = n._json = void 0),
          void 0 !== t && !Array.isArray(t))
        )
          throw Error("Invalid arguments");
        if (n.nonceInfo && t) n.sign(...t);
        else {
          let e = this._disableBlockhashCaching;
          for (;;) {
            let r = await this._blockhashWithExpiryBlockHeight(e);
            if (
              ((n.lastValidBlockHeight = r.lastValidBlockHeight),
              (n.recentBlockhash = r.blockhash),
              !t)
            )
              break;
            if ((n.sign(...t), !n.signature)) throw Error("!signature");
            let i = n.signature.toString("base64");
            if (
              this._blockhashInfo.simulatedSignatures.includes(i) ||
              this._blockhashInfo.transactionSignatures.includes(i)
            )
              e = !0;
            else {
              this._blockhashInfo.simulatedSignatures.push(i);
              break;
            }
          }
        }
        let i = n._compile(),
          s = i.serialize(),
          a = n._serialize(s).toString("base64"),
          u = { encoding: "base64", commitment: this.commitment };
        r &&
          (u.accounts = {
            encoding: "base64",
            addresses: (Array.isArray(r) ? r : i.nonProgramIds()).map((e) =>
              e.toBase58()
            ),
          }),
          t && (u.sigVerify = !0),
          t &&
            "object" == typeof t &&
            "innerInstructions" in t &&
            (u.innerInstructions = t.innerInstructions);
        let c = [a, u],
          l = eo(await this._rpcRequest("simulateTransaction", c), tV);
        if ("error" in l) {
          let e;
          if (
            "data" in l.error &&
            (e = l.error.data.logs) &&
            Array.isArray(e)
          ) {
            let t = "\n    ",
              r = t + e.join(t);
            console.error(l.error.message, r);
          }
          throw new tt({
            action: "simulate",
            signature: "",
            transactionMessage: l.error.message,
            logs: e,
          });
        }
        return l.result;
      }
      async sendTransaction(e, t, r) {
        if ("version" in e) {
          if (t && Array.isArray(t)) throw Error("Invalid arguments");
          let r = e.serialize();
          return await this.sendRawTransaction(r, t);
        }
        if (void 0 === t || !Array.isArray(t)) throw Error("Invalid arguments");
        if (e.nonceInfo) e.sign(...t);
        else {
          let r = this._disableBlockhashCaching;
          for (;;) {
            let n = await this._blockhashWithExpiryBlockHeight(r);
            if (
              ((e.lastValidBlockHeight = n.lastValidBlockHeight),
              (e.recentBlockhash = n.blockhash),
              e.sign(...t),
              !e.signature)
            )
              throw Error("!signature");
            let i = e.signature.toString("base64");
            if (this._blockhashInfo.transactionSignatures.includes(i)) r = !0;
            else {
              this._blockhashInfo.transactionSignatures.push(i);
              break;
            }
          }
        }
        let n = e.serialize();
        return await this.sendRawTransaction(n, r);
      }
      async sendRawTransaction(e, t) {
        let r = eO(e).toString("base64");
        return await this.sendEncodedTransaction(r, t);
      }
      async sendEncodedTransaction(e, t) {
        let r = { encoding: "base64" },
          n = t && t.skipPreflight,
          i =
            !0 === n
              ? "processed"
              : (t && t.preflightCommitment) || this.commitment;
        t && null != t.maxRetries && (r.maxRetries = t.maxRetries),
          t &&
            null != t.minContextSlot &&
            (r.minContextSlot = t.minContextSlot),
          n && (r.skipPreflight = n),
          i && (r.preflightCommitment = i);
        let s = [e, r],
          o = eo(await this._rpcRequest("sendTransaction", s), rY);
        if ("error" in o) {
          let e;
          throw (
            ("data" in o.error && (e = o.error.data.logs),
            new tt({
              action: n ? "send" : "simulate",
              signature: "",
              transactionMessage: o.error.message,
              logs: e,
            }))
          );
        }
        return o.result;
      }
      _wsOnOpen() {
        (this._rpcWebSocketConnected = !0),
          (this._rpcWebSocketHeartbeat = setInterval(() => {
            (async () => {
              try {
                await this._rpcWebSocket.notify("ping");
              } catch {}
            })();
          }, 5e3)),
          this._updateSubscriptions();
      }
      _wsOnError(e) {
        (this._rpcWebSocketConnected = !1),
          console.error("ws error:", e.message);
      }
      _wsOnClose(e) {
        ((this._rpcWebSocketConnected = !1),
        (this._rpcWebSocketGeneration =
          (this._rpcWebSocketGeneration + 1) % Number.MAX_SAFE_INTEGER),
        this._rpcWebSocketIdleTimeout &&
          (clearTimeout(this._rpcWebSocketIdleTimeout),
          (this._rpcWebSocketIdleTimeout = null)),
        this._rpcWebSocketHeartbeat &&
          (clearInterval(this._rpcWebSocketHeartbeat),
          (this._rpcWebSocketHeartbeat = null)),
        1e3 === e)
          ? this._updateSubscriptions()
          : ((this._subscriptionCallbacksByServerSubscriptionId = {}),
            Object.entries(this._subscriptionsByHash).forEach(([e, t]) => {
              this._setSubscription(e, { ...t, state: "pending" });
            }));
      }
      _setSubscription(e, t) {
        let r = this._subscriptionsByHash[e]?.state;
        if (((this._subscriptionsByHash[e] = t), r !== t.state)) {
          let r = this._subscriptionStateChangeCallbacksByHash[e];
          r &&
            r.forEach((e) => {
              try {
                e(t.state);
              } catch {}
            });
        }
      }
      _onSubscriptionStateChange(e, t) {
        let r = this._subscriptionHashByClientSubscriptionId[e];
        if (null == r) return () => {};
        let n = (this._subscriptionStateChangeCallbacksByHash[r] ||= new Set());
        return (
          n.add(t),
          () => {
            n.delete(t),
              0 === n.size &&
                delete this._subscriptionStateChangeCallbacksByHash[r];
          }
        );
      }
      async _updateSubscriptions() {
        if (0 === Object.keys(this._subscriptionsByHash).length) {
          this._rpcWebSocketConnected &&
            ((this._rpcWebSocketConnected = !1),
            (this._rpcWebSocketIdleTimeout = setTimeout(() => {
              this._rpcWebSocketIdleTimeout = null;
              try {
                this._rpcWebSocket.close();
              } catch (e) {
                e instanceof Error &&
                  console.log(
                    `Error when closing socket connection: ${e.message}`
                  );
              }
            }, 500)));
          return;
        }
        if (
          (null !== this._rpcWebSocketIdleTimeout &&
            (clearTimeout(this._rpcWebSocketIdleTimeout),
            (this._rpcWebSocketIdleTimeout = null),
            (this._rpcWebSocketConnected = !0)),
          !this._rpcWebSocketConnected)
        )
          return void this._rpcWebSocket.connect();
        let e = this._rpcWebSocketGeneration,
          t = () => e === this._rpcWebSocketGeneration;
        await Promise.all(
          Object.keys(this._subscriptionsByHash).map(async (e) => {
            let r = this._subscriptionsByHash[e];
            if (void 0 !== r)
              switch (r.state) {
                case "pending":
                case "unsubscribed":
                  if (0 === r.callbacks.size) {
                    delete this._subscriptionsByHash[e],
                      "unsubscribed" === r.state &&
                        delete this
                          ._subscriptionCallbacksByServerSubscriptionId[
                          r.serverSubscriptionId
                        ],
                      await this._updateSubscriptions();
                    return;
                  }
                  await (async () => {
                    let { args: n, method: i } = r;
                    try {
                      this._setSubscription(e, { ...r, state: "subscribing" });
                      let t = await this._rpcWebSocket.call(i, n);
                      this._setSubscription(e, {
                        ...r,
                        serverSubscriptionId: t,
                        state: "subscribed",
                      }),
                        (this._subscriptionCallbacksByServerSubscriptionId[t] =
                          r.callbacks),
                        await this._updateSubscriptions();
                    } catch (s) {
                      if (
                        (console.error(
                          `Received ${
                            s instanceof Error ? "" : "JSON-RPC "
                          }error calling \`${i}\``,
                          { args: n, error: s }
                        ),
                        !t())
                      )
                        return;
                      this._setSubscription(e, { ...r, state: "pending" }),
                        await this._updateSubscriptions();
                    }
                  })();
                  break;
                case "subscribed":
                  0 === r.callbacks.size &&
                    (await (async () => {
                      let { serverSubscriptionId: n, unsubscribeMethod: i } = r;
                      if (this._subscriptionsAutoDisposedByRpc.has(n))
                        this._subscriptionsAutoDisposedByRpc.delete(n);
                      else {
                        this._setSubscription(e, {
                          ...r,
                          state: "unsubscribing",
                        }),
                          this._setSubscription(e, {
                            ...r,
                            state: "unsubscribing",
                          });
                        try {
                          await this._rpcWebSocket.call(i, [n]);
                        } catch (n) {
                          if (
                            (n instanceof Error &&
                              console.error(`${i} error:`, n.message),
                            !t())
                          )
                            return;
                          this._setSubscription(e, {
                            ...r,
                            state: "subscribed",
                          }),
                            await this._updateSubscriptions();
                          return;
                        }
                      }
                      this._setSubscription(e, { ...r, state: "unsubscribed" }),
                        await this._updateSubscriptions();
                    })());
              }
          })
        );
      }
      _handleServerNotification(e, t) {
        let r = this._subscriptionCallbacksByServerSubscriptionId[e];
        void 0 !== r &&
          r.forEach((e) => {
            try {
              e(...t);
            } catch (e) {
              console.error(e);
            }
          });
      }
      _wsOnAccountNotification(e) {
        let { result: t, subscription: r } = eo(e, ro);
        this._handleServerNotification(r, [t.value, t.context]);
      }
      _makeSubscription(e, t) {
        let r = this._nextClientSubscriptionId++,
          n = tp([e.method, t]),
          i = this._subscriptionsByHash[n];
        return (
          void 0 === i
            ? (this._subscriptionsByHash[n] = {
                ...e,
                args: t,
                callbacks: new Set([e.callback]),
                state: "pending",
              })
            : i.callbacks.add(e.callback),
          (this._subscriptionHashByClientSubscriptionId[r] = n),
          (this._subscriptionDisposeFunctionsByClientSubscriptionId[r] =
            async () => {
              delete this._subscriptionDisposeFunctionsByClientSubscriptionId[
                r
              ],
                delete this._subscriptionHashByClientSubscriptionId[r];
              let t = this._subscriptionsByHash[n];
              eG(
                void 0 !== t,
                `Could not find a \`Subscription\` when tearing down client subscription #${r}`
              ),
                t.callbacks.delete(e.callback),
                await this._updateSubscriptions();
            }),
          this._updateSubscriptions(),
          r
        );
      }
      onAccountChange(e, t, r) {
        let { commitment: n, config: i } = tE(r),
          s = this._buildArgs(
            [e.toBase58()],
            n || this._commitment || "finalized",
            "base64",
            i
          );
        return this._makeSubscription(
          {
            callback: t,
            method: "accountSubscribe",
            unsubscribeMethod: "accountUnsubscribe",
          },
          s
        );
      }
      async removeAccountChangeListener(e) {
        await this._unsubscribeClientSubscription(e, "account change");
      }
      _wsOnProgramAccountNotification(e) {
        let { result: t, subscription: r } = eo(e, ru);
        this._handleServerNotification(r, [
          { accountId: t.value.pubkey, accountInfo: t.value.account },
          t.context,
        ]);
      }
      onProgramAccountChange(e, t, r, n) {
        let { commitment: i, config: s } = tE(r),
          o = this._buildArgs(
            [e.toBase58()],
            i || this._commitment || "finalized",
            "base64",
            s || (n ? { filters: tA(n) } : void 0)
          );
        return this._makeSubscription(
          {
            callback: t,
            method: "programSubscribe",
            unsubscribeMethod: "programUnsubscribe",
          },
          o
        );
      }
      async removeProgramAccountChangeListener(e) {
        await this._unsubscribeClientSubscription(e, "program account change");
      }
      onLogs(e, t, r) {
        let n = this._buildArgs(
          ["object" == typeof e ? { mentions: [e.toString()] } : e],
          r || this._commitment || "finalized"
        );
        return this._makeSubscription(
          {
            callback: t,
            method: "logsSubscribe",
            unsubscribeMethod: "logsUnsubscribe",
          },
          n
        );
      }
      async removeOnLogsListener(e) {
        await this._unsubscribeClientSubscription(e, "logs");
      }
      _wsOnLogsNotification(e) {
        let { result: t, subscription: r } = eo(e, rQ);
        this._handleServerNotification(r, [t.value, t.context]);
      }
      _wsOnSlotNotification(e) {
        let { result: t, subscription: r } = eo(e, rl);
        this._handleServerNotification(r, [t]);
      }
      onSlotChange(e) {
        return this._makeSubscription(
          {
            callback: e,
            method: "slotSubscribe",
            unsubscribeMethod: "slotUnsubscribe",
          },
          []
        );
      }
      async removeSlotChangeListener(e) {
        await this._unsubscribeClientSubscription(e, "slot change");
      }
      _wsOnSlotUpdatesNotification(e) {
        let { result: t, subscription: r } = eo(e, rh);
        this._handleServerNotification(r, [t]);
      }
      onSlotUpdate(e) {
        return this._makeSubscription(
          {
            callback: e,
            method: "slotsUpdatesSubscribe",
            unsubscribeMethod: "slotsUpdatesUnsubscribe",
          },
          []
        );
      }
      async removeSlotUpdateListener(e) {
        await this._unsubscribeClientSubscription(e, "slot update");
      }
      async _unsubscribeClientSubscription(e, t) {
        let r = this._subscriptionDisposeFunctionsByClientSubscriptionId[e];
        r
          ? await r()
          : console.warn(
              `Ignored unsubscribe request because an active subscription with id \`${e}\` for '${t}' events could not be found.`
            );
      }
      _buildArgs(e, t, r, n) {
        let i = t || this._commitment;
        if (i || r || n) {
          let t = {};
          r && (t.encoding = r),
            i && (t.commitment = i),
            n && (t = Object.assign(t, n)),
            e.push(t);
        }
        return e;
      }
      _buildArgsAtLeastConfirmed(e, t, r, n) {
        let i = t || this._commitment;
        if (i && !["confirmed", "finalized"].includes(i))
          throw Error(
            "Using Connection with default commitment: `" +
              this._commitment +
              "`, but method requires at least `confirmed`"
          );
        return this._buildArgs(e, t, r, n);
      }
      _wsOnSignatureNotification(e) {
        let { result: t, subscription: r } = eo(e, rd);
        "receivedSignature" !== t.value &&
          this._subscriptionsAutoDisposedByRpc.add(r),
          this._handleServerNotification(
            r,
            "receivedSignature" === t.value
              ? [{ type: "received" }, t.context]
              : [{ type: "status", result: t.value }, t.context]
          );
      }
      onSignature(e, t, r) {
        let n = this._buildArgs([e], r || this._commitment || "finalized"),
          i = this._makeSubscription(
            {
              callback: (e, r) => {
                if ("status" === e.type) {
                  t(e.result, r);
                  try {
                    this.removeSignatureListener(i);
                  } catch (e) {}
                }
              },
              method: "signatureSubscribe",
              unsubscribeMethod: "signatureUnsubscribe",
            },
            n
          );
        return i;
      }
      onSignatureWithOptions(e, t, r) {
        let { commitment: n, ...i } = {
            ...r,
            commitment: (r && r.commitment) || this._commitment || "finalized",
          },
          s = this._buildArgs([e], n, void 0, i),
          o = this._makeSubscription(
            {
              callback: (e, r) => {
                t(e, r);
                try {
                  this.removeSignatureListener(o);
                } catch (e) {}
              },
              method: "signatureSubscribe",
              unsubscribeMethod: "signatureUnsubscribe",
            },
            s
          );
        return o;
      }
      async removeSignatureListener(e) {
        await this._unsubscribeClientSubscription(e, "signature result");
      }
      _wsOnRootNotification(e) {
        let { result: t, subscription: r } = eo(e, rp);
        this._handleServerNotification(r, [t]);
      }
      onRootChange(e) {
        return this._makeSubscription(
          {
            callback: e,
            method: "rootSubscribe",
            unsubscribeMethod: "rootUnsubscribe",
          },
          []
        );
      }
      async removeRootChangeListener(e) {
        await this._unsubscribeClientSubscription(e, "root change");
      }
    }
    class r2 {
      constructor(e) {
        (this._keypair = void 0), (this._keypair = e ?? eP());
      }
      static generate() {
        return new r2(eP());
      }
      static fromSecretKey(e, t) {
        if (64 !== e.byteLength) throw Error("bad secret key size");
        let r = e.slice(32, 64);
        if (!t || !t.skipValidation) {
          let t = eC(e.slice(0, 32));
          for (let e = 0; e < 32; e++)
            if (r[e] !== t[e]) throw Error("provided secretKey is invalid");
        }
        return new r2({ publicKey: r, secretKey: e });
      }
      static fromSeed(e) {
        let t = eC(e),
          r = new Uint8Array(64);
        return r.set(e), r.set(t, 32), new r2({ publicKey: t, secretKey: r });
      }
      get publicKey() {
        return new eM(this._keypair.publicKey);
      }
      get secretKey() {
        return new Uint8Array(this._keypair.secretKey);
      }
    }
    Object.freeze({
      CreateLookupTable: {
        index: 0,
        layout: H.struct([
          H.u32("instruction"),
          tl("recentSlot"),
          H.u8("bumpSeed"),
        ]),
      },
      FreezeLookupTable: { index: 1, layout: H.struct([H.u32("instruction")]) },
      ExtendLookupTable: {
        index: 2,
        layout: H.struct([
          H.u32("instruction"),
          tl(),
          H.seq(eF(), H.offset(H.u32(), -8), "addresses"),
        ]),
      },
      DeactivateLookupTable: {
        index: 3,
        layout: H.struct([H.u32("instruction")]),
      },
      CloseLookupTable: { index: 4, layout: H.struct([H.u32("instruction")]) },
    }),
      new eM("AddressLookupTab1e1111111111111111111111111"),
      Object.freeze({
        RequestUnits: {
          index: 0,
          layout: H.struct([
            H.u8("instruction"),
            H.u32("units"),
            H.u32("additionalFee"),
          ]),
        },
        RequestHeapFrame: {
          index: 1,
          layout: H.struct([H.u8("instruction"), H.u32("bytes")]),
        },
        SetComputeUnitLimit: {
          index: 2,
          layout: H.struct([H.u8("instruction"), H.u32("units")]),
        },
        SetComputeUnitPrice: {
          index: 3,
          layout: H.struct([H.u8("instruction"), tl("microLamports")]),
        },
      }),
      new eM("ComputeBudget111111111111111111111111111111");
    let r6 = H.struct([
      H.u8("numSignatures"),
      H.u8("padding"),
      H.u16("signatureOffset"),
      H.u16("signatureInstructionIndex"),
      H.u16("publicKeyOffset"),
      H.u16("publicKeyInstructionIndex"),
      H.u16("messageDataOffset"),
      H.u16("messageDataSize"),
      H.u16("messageInstructionIndex"),
    ]);
    class r5 {
      constructor() {}
      static createInstructionWithPublicKey(e) {
        let { publicKey: t, message: r, signature: n, instructionIndex: i } = e;
        eG(
          32 === t.length,
          `Public Key must be 32 bytes but received ${t.length} bytes`
        ),
          eG(
            64 === n.length,
            `Signature must be 64 bytes but received ${n.length} bytes`
          );
        let s = r6.span,
          a = s + t.length,
          u = a + n.length,
          c = o.Buffer.alloc(u + r.length),
          l = null == i ? 65535 : i;
        return (
          r6.encode(
            {
              numSignatures: 1,
              padding: 0,
              signatureOffset: a,
              signatureInstructionIndex: l,
              publicKeyOffset: s,
              publicKeyInstructionIndex: l,
              messageDataOffset: u,
              messageDataSize: r.length,
              messageInstructionIndex: l,
            },
            c
          ),
          c.fill(t, s),
          c.fill(n, a),
          c.fill(r, u),
          new e5({ keys: [], programId: r5.programId, data: c })
        );
      }
      static createInstructionWithPrivateKey(e) {
        let { privateKey: t, message: r, instructionIndex: n } = e;
        eG(
          64 === t.length,
          `Private key must be 64 bytes but received ${t.length} bytes`
        );
        try {
          let e = r2.fromSecretKey(t),
            i = e.publicKey.toBytes(),
            s = eL(r, e.secretKey);
          return this.createInstructionWithPublicKey({
            publicKey: i,
            message: r,
            signature: s,
            instructionIndex: n,
          });
        } catch (e) {
          throw Error(`Error creating instruction; ${e}`);
        }
      }
    }
    (r5.programId = new eM("Ed25519SigVerify111111111111111111111111111")),
      eT.secp256k1.utils.isValidPrivateKey;
    let r8 = eT.secp256k1.getPublicKey,
      r3 = H.struct([
        H.u8("numSignatures"),
        H.u16("signatureOffset"),
        H.u8("signatureInstructionIndex"),
        H.u16("ethAddressOffset"),
        H.u8("ethAddressInstructionIndex"),
        H.u16("messageDataOffset"),
        H.u16("messageDataSize"),
        H.u8("messageInstructionIndex"),
        H.blob(20, "ethAddress"),
        H.blob(64, "signature"),
        H.u8("recoveryId"),
      ]);
    class r4 {
      constructor() {}
      static publicKeyToEthAddress(e) {
        eG(
          64 === e.length,
          `Public key must be 64 bytes but received ${e.length} bytes`
        );
        try {
          return o.Buffer.from((0, e_.keccak_256)(eO(e))).slice(-20);
        } catch (e) {
          throw Error(`Error constructing Ethereum address: ${e}`);
        }
      }
      static createInstructionWithPublicKey(e) {
        let {
          publicKey: t,
          message: r,
          signature: n,
          recoveryId: i,
          instructionIndex: s,
        } = e;
        return r4.createInstructionWithEthAddress({
          ethAddress: r4.publicKeyToEthAddress(t),
          message: r,
          signature: n,
          recoveryId: i,
          instructionIndex: s,
        });
      }
      static createInstructionWithEthAddress(e) {
        let t,
          {
            ethAddress: r,
            message: n,
            signature: i,
            recoveryId: s,
            instructionIndex: a = 0,
          } = e;
        eG(
          20 ===
            (t =
              "string" == typeof r
                ? r.startsWith("0x")
                  ? o.Buffer.from(r.substr(2), "hex")
                  : o.Buffer.from(r, "hex")
                : r).length,
          `Address must be 20 bytes but received ${t.length} bytes`
        );
        let u = 12 + t.length,
          c = u + i.length + 1,
          l = o.Buffer.alloc(r3.span + n.length);
        return (
          r3.encode(
            {
              numSignatures: 1,
              signatureOffset: u,
              signatureInstructionIndex: a,
              ethAddressOffset: 12,
              ethAddressInstructionIndex: a,
              messageDataOffset: c,
              messageDataSize: n.length,
              messageInstructionIndex: a,
              signature: eO(i),
              ethAddress: eO(t),
              recoveryId: s,
            },
            l
          ),
          l.fill(eO(n), r3.span),
          new e5({ keys: [], programId: r4.programId, data: l })
        );
      }
      static createInstructionWithPrivateKey(e) {
        let { privateKey: t, message: r, instructionIndex: n } = e;
        eG(
          32 === t.length,
          `Private key must be 32 bytes but received ${t.length} bytes`
        );
        try {
          var i;
          let e,
            s = eO(t),
            a = r8(s, !1).slice(1),
            [u, c] =
              ((i = o.Buffer.from((0, e_.keccak_256)(eO(r)))),
              [(e = eT.secp256k1.sign(i, s)).toCompactRawBytes(), e.recovery]);
          return this.createInstructionWithPublicKey({
            publicKey: a,
            message: r,
            signature: u,
            recoveryId: c,
            instructionIndex: n,
          });
        } catch (e) {
          throw Error(`Error creating instruction; ${e}`);
        }
      }
    }
    r4.programId = new eM("KeccakSecp256k11111111111111111111111111111");
    let r7 = new eM("StakeConfig11111111111111111111111111111111");
    class r9 {
      constructor(e, t, r) {
        (this.unixTimestamp = void 0),
          (this.epoch = void 0),
          (this.custodian = void 0),
          (this.unixTimestamp = e),
          (this.epoch = t),
          (this.custodian = r);
      }
    }
    r9.default = new r9(0, 0, eM.default);
    let ne = Object.freeze({
      Initialize: {
        index: 0,
        layout: H.struct([
          H.u32("instruction"),
          ((e = "authorized") =>
            H.struct([eF("staker"), eF("withdrawer")], e))(),
          ((e = "lockup") =>
            H.struct(
              [H.ns64("unixTimestamp"), H.ns64("epoch"), eF("custodian")],
              e
            ))(),
        ]),
      },
      Authorize: {
        index: 1,
        layout: H.struct([
          H.u32("instruction"),
          eF("newAuthorized"),
          H.u32("stakeAuthorizationType"),
        ]),
      },
      Delegate: { index: 2, layout: H.struct([H.u32("instruction")]) },
      Split: {
        index: 3,
        layout: H.struct([H.u32("instruction"), H.ns64("lamports")]),
      },
      Withdraw: {
        index: 4,
        layout: H.struct([H.u32("instruction"), H.ns64("lamports")]),
      },
      Deactivate: { index: 5, layout: H.struct([H.u32("instruction")]) },
      Merge: { index: 7, layout: H.struct([H.u32("instruction")]) },
      AuthorizeWithSeed: {
        index: 8,
        layout: H.struct([
          H.u32("instruction"),
          eF("newAuthorized"),
          H.u32("stakeAuthorizationType"),
          ej("authoritySeed"),
          eF("authorityOwner"),
        ]),
      },
    });
    Object.freeze({ Staker: { index: 0 }, Withdrawer: { index: 1 } });
    class nt {
      constructor() {}
      static initialize(e) {
        let { stakePubkey: t, authorized: r, lockup: n } = e,
          i = n || r9.default,
          s = ts(ne.Initialize, {
            authorized: {
              staker: eO(r.staker.toBuffer()),
              withdrawer: eO(r.withdrawer.toBuffer()),
            },
            lockup: {
              unixTimestamp: i.unixTimestamp,
              epoch: i.epoch,
              custodian: eO(i.custodian.toBuffer()),
            },
          });
        return new e5({
          keys: [
            { pubkey: t, isSigner: !1, isWritable: !0 },
            { pubkey: e9, isSigner: !1, isWritable: !1 },
          ],
          programId: this.programId,
          data: s,
        });
      }
      static createAccountWithSeed(e) {
        let t = new e8();
        t.add(
          th.createAccountWithSeed({
            fromPubkey: e.fromPubkey,
            newAccountPubkey: e.stakePubkey,
            basePubkey: e.basePubkey,
            seed: e.seed,
            lamports: e.lamports,
            space: this.space,
            programId: this.programId,
          })
        );
        let { stakePubkey: r, authorized: n, lockup: i } = e;
        return t.add(
          this.initialize({ stakePubkey: r, authorized: n, lockup: i })
        );
      }
      static createAccount(e) {
        let t = new e8();
        t.add(
          th.createAccount({
            fromPubkey: e.fromPubkey,
            newAccountPubkey: e.stakePubkey,
            lamports: e.lamports,
            space: this.space,
            programId: this.programId,
          })
        );
        let { stakePubkey: r, authorized: n, lockup: i } = e;
        return t.add(
          this.initialize({ stakePubkey: r, authorized: n, lockup: i })
        );
      }
      static delegate(e) {
        let { stakePubkey: t, authorizedPubkey: r, votePubkey: n } = e,
          i = ts(ne.Delegate);
        return new e8().add({
          keys: [
            { pubkey: t, isSigner: !1, isWritable: !0 },
            { pubkey: n, isSigner: !1, isWritable: !1 },
            { pubkey: e4, isSigner: !1, isWritable: !1 },
            { pubkey: te, isSigner: !1, isWritable: !1 },
            { pubkey: r7, isSigner: !1, isWritable: !1 },
            { pubkey: r, isSigner: !0, isWritable: !1 },
          ],
          programId: this.programId,
          data: i,
        });
      }
      static authorize(e) {
        let {
            stakePubkey: t,
            authorizedPubkey: r,
            newAuthorizedPubkey: n,
            stakeAuthorizationType: i,
            custodianPubkey: s,
          } = e,
          o = ts(ne.Authorize, {
            newAuthorized: eO(n.toBuffer()),
            stakeAuthorizationType: i.index,
          }),
          a = [
            { pubkey: t, isSigner: !1, isWritable: !0 },
            { pubkey: e4, isSigner: !1, isWritable: !0 },
            { pubkey: r, isSigner: !0, isWritable: !1 },
          ];
        return (
          s && a.push({ pubkey: s, isSigner: !0, isWritable: !1 }),
          new e8().add({ keys: a, programId: this.programId, data: o })
        );
      }
      static authorizeWithSeed(e) {
        let {
            stakePubkey: t,
            authorityBase: r,
            authoritySeed: n,
            authorityOwner: i,
            newAuthorizedPubkey: s,
            stakeAuthorizationType: o,
            custodianPubkey: a,
          } = e,
          u = ts(ne.AuthorizeWithSeed, {
            newAuthorized: eO(s.toBuffer()),
            stakeAuthorizationType: o.index,
            authoritySeed: n,
            authorityOwner: eO(i.toBuffer()),
          }),
          c = [
            { pubkey: t, isSigner: !1, isWritable: !0 },
            { pubkey: r, isSigner: !0, isWritable: !1 },
            { pubkey: e4, isSigner: !1, isWritable: !1 },
          ];
        return (
          a && c.push({ pubkey: a, isSigner: !0, isWritable: !1 }),
          new e8().add({ keys: c, programId: this.programId, data: u })
        );
      }
      static splitInstruction(e) {
        let {
            stakePubkey: t,
            authorizedPubkey: r,
            splitStakePubkey: n,
            lamports: i,
          } = e,
          s = ts(ne.Split, { lamports: i });
        return new e5({
          keys: [
            { pubkey: t, isSigner: !1, isWritable: !0 },
            { pubkey: n, isSigner: !1, isWritable: !0 },
            { pubkey: r, isSigner: !0, isWritable: !1 },
          ],
          programId: this.programId,
          data: s,
        });
      }
      static split(e, t) {
        let r = new e8();
        return (
          r.add(
            th.createAccount({
              fromPubkey: e.authorizedPubkey,
              newAccountPubkey: e.splitStakePubkey,
              lamports: t,
              space: this.space,
              programId: this.programId,
            })
          ),
          r.add(this.splitInstruction(e))
        );
      }
      static splitWithSeed(e, t) {
        let {
            stakePubkey: r,
            authorizedPubkey: n,
            splitStakePubkey: i,
            basePubkey: s,
            seed: o,
            lamports: a,
          } = e,
          u = new e8();
        return (
          u.add(
            th.allocate({
              accountPubkey: i,
              basePubkey: s,
              seed: o,
              space: this.space,
              programId: this.programId,
            })
          ),
          t &&
            t > 0 &&
            u.add(
              th.transfer({
                fromPubkey: e.authorizedPubkey,
                toPubkey: i,
                lamports: t,
              })
            ),
          u.add(
            this.splitInstruction({
              stakePubkey: r,
              authorizedPubkey: n,
              splitStakePubkey: i,
              lamports: a,
            })
          )
        );
      }
      static merge(e) {
        let { stakePubkey: t, sourceStakePubKey: r, authorizedPubkey: n } = e,
          i = ts(ne.Merge);
        return new e8().add({
          keys: [
            { pubkey: t, isSigner: !1, isWritable: !0 },
            { pubkey: r, isSigner: !1, isWritable: !0 },
            { pubkey: e4, isSigner: !1, isWritable: !1 },
            { pubkey: te, isSigner: !1, isWritable: !1 },
            { pubkey: n, isSigner: !0, isWritable: !1 },
          ],
          programId: this.programId,
          data: i,
        });
      }
      static withdraw(e) {
        let {
            stakePubkey: t,
            authorizedPubkey: r,
            toPubkey: n,
            lamports: i,
            custodianPubkey: s,
          } = e,
          o = ts(ne.Withdraw, { lamports: i }),
          a = [
            { pubkey: t, isSigner: !1, isWritable: !0 },
            { pubkey: n, isSigner: !1, isWritable: !0 },
            { pubkey: e4, isSigner: !1, isWritable: !1 },
            { pubkey: te, isSigner: !1, isWritable: !1 },
            { pubkey: r, isSigner: !0, isWritable: !1 },
          ];
        return (
          s && a.push({ pubkey: s, isSigner: !0, isWritable: !1 }),
          new e8().add({ keys: a, programId: this.programId, data: o })
        );
      }
      static deactivate(e) {
        let { stakePubkey: t, authorizedPubkey: r } = e,
          n = ts(ne.Deactivate);
        return new e8().add({
          keys: [
            { pubkey: t, isSigner: !1, isWritable: !0 },
            { pubkey: e4, isSigner: !1, isWritable: !1 },
            { pubkey: r, isSigner: !0, isWritable: !1 },
          ],
          programId: this.programId,
          data: n,
        });
      }
    }
    (nt.programId = new eM("Stake11111111111111111111111111111111111111")),
      (nt.space = 200);
    let nr = Object.freeze({
      InitializeAccount: {
        index: 0,
        layout: H.struct([
          H.u32("instruction"),
          ((e = "voteInit") =>
            H.struct(
              [
                eF("nodePubkey"),
                eF("authorizedVoter"),
                eF("authorizedWithdrawer"),
                H.u8("commission"),
              ],
              e
            ))(),
        ]),
      },
      Authorize: {
        index: 1,
        layout: H.struct([
          H.u32("instruction"),
          eF("newAuthorized"),
          H.u32("voteAuthorizationType"),
        ]),
      },
      Withdraw: {
        index: 3,
        layout: H.struct([H.u32("instruction"), H.ns64("lamports")]),
      },
      UpdateValidatorIdentity: {
        index: 4,
        layout: H.struct([H.u32("instruction")]),
      },
      AuthorizeWithSeed: {
        index: 10,
        layout: H.struct([
          H.u32("instruction"),
          ((e = "voteAuthorizeWithSeedArgs") =>
            H.struct(
              [
                H.u32("voteAuthorizationType"),
                eF("currentAuthorityDerivedKeyOwnerPubkey"),
                ej("currentAuthorityDerivedKeySeed"),
                eF("newAuthorized"),
              ],
              e
            ))(),
        ]),
      },
    });
    Object.freeze({ Voter: { index: 0 }, Withdrawer: { index: 1 } });
    class nn {
      constructor() {}
      static initializeAccount(e) {
        let { votePubkey: t, nodePubkey: r, voteInit: n } = e,
          i = ts(nr.InitializeAccount, {
            voteInit: {
              nodePubkey: eO(n.nodePubkey.toBuffer()),
              authorizedVoter: eO(n.authorizedVoter.toBuffer()),
              authorizedWithdrawer: eO(n.authorizedWithdrawer.toBuffer()),
              commission: n.commission,
            },
          });
        return new e5({
          keys: [
            { pubkey: t, isSigner: !1, isWritable: !0 },
            { pubkey: e9, isSigner: !1, isWritable: !1 },
            { pubkey: e4, isSigner: !1, isWritable: !1 },
            { pubkey: r, isSigner: !0, isWritable: !1 },
          ],
          programId: this.programId,
          data: i,
        });
      }
      static createAccount(e) {
        let t = new e8();
        return (
          t.add(
            th.createAccount({
              fromPubkey: e.fromPubkey,
              newAccountPubkey: e.votePubkey,
              lamports: e.lamports,
              space: this.space,
              programId: this.programId,
            })
          ),
          t.add(
            this.initializeAccount({
              votePubkey: e.votePubkey,
              nodePubkey: e.voteInit.nodePubkey,
              voteInit: e.voteInit,
            })
          )
        );
      }
      static authorize(e) {
        let {
            votePubkey: t,
            authorizedPubkey: r,
            newAuthorizedPubkey: n,
            voteAuthorizationType: i,
          } = e,
          s = ts(nr.Authorize, {
            newAuthorized: eO(n.toBuffer()),
            voteAuthorizationType: i.index,
          });
        return new e8().add({
          keys: [
            { pubkey: t, isSigner: !1, isWritable: !0 },
            { pubkey: e4, isSigner: !1, isWritable: !1 },
            { pubkey: r, isSigner: !0, isWritable: !1 },
          ],
          programId: this.programId,
          data: s,
        });
      }
      static authorizeWithSeed(e) {
        let {
            currentAuthorityDerivedKeyBasePubkey: t,
            currentAuthorityDerivedKeyOwnerPubkey: r,
            currentAuthorityDerivedKeySeed: n,
            newAuthorizedPubkey: i,
            voteAuthorizationType: s,
            votePubkey: o,
          } = e,
          a = ts(nr.AuthorizeWithSeed, {
            voteAuthorizeWithSeedArgs: {
              currentAuthorityDerivedKeyOwnerPubkey: eO(r.toBuffer()),
              currentAuthorityDerivedKeySeed: n,
              newAuthorized: eO(i.toBuffer()),
              voteAuthorizationType: s.index,
            },
          });
        return new e8().add({
          keys: [
            { pubkey: o, isSigner: !1, isWritable: !0 },
            { pubkey: e4, isSigner: !1, isWritable: !1 },
            { pubkey: t, isSigner: !0, isWritable: !1 },
          ],
          programId: this.programId,
          data: a,
        });
      }
      static withdraw(e) {
        let {
            votePubkey: t,
            authorizedWithdrawerPubkey: r,
            lamports: n,
            toPubkey: i,
          } = e,
          s = ts(nr.Withdraw, { lamports: n });
        return new e8().add({
          keys: [
            { pubkey: t, isSigner: !1, isWritable: !0 },
            { pubkey: i, isSigner: !1, isWritable: !0 },
            { pubkey: r, isSigner: !0, isWritable: !1 },
          ],
          programId: this.programId,
          data: s,
        });
      }
      static safeWithdraw(e, t, r) {
        if (e.lamports > t - r)
          throw Error(
            "Withdraw will leave vote account with insufficient funds."
          );
        return nn.withdraw(e);
      }
      static updateValidatorIdentity(e) {
        let { votePubkey: t, authorizedWithdrawerPubkey: r, nodePubkey: n } = e,
          i = ts(nr.UpdateValidatorIdentity);
        return new e8().add({
          keys: [
            { pubkey: t, isSigner: !1, isWritable: !0 },
            { pubkey: n, isSigner: !0, isWritable: !1 },
            { pubkey: r, isSigner: !0, isWritable: !1 },
          ],
          programId: this.programId,
          data: i,
        });
      }
    }
    (nn.programId = new eM("Vote111111111111111111111111111111111111111")),
      (nn.space = 3762),
      new eM("Va1idator1nfo111111111111111111111111111111"),
      ew({
        name: em(),
        website: eg(em()),
        details: eg(em()),
        iconUrl: eg(em()),
        keybaseUsername: eg(em()),
      }),
      new eM("Vote111111111111111111111111111111111111111"),
      H.struct([
        eF("nodePubkey"),
        eF("authorizedWithdrawer"),
        H.u8("commission"),
        H.nu64(),
        H.seq(
          H.struct([H.nu64("slot"), H.u32("confirmationCount")]),
          H.offset(H.u32(), -8),
          "votes"
        ),
        H.u8("rootSlotValid"),
        H.nu64("rootSlot"),
        H.nu64(),
        H.seq(
          H.struct([H.nu64("epoch"), eF("authorizedVoter")]),
          H.offset(H.u32(), -8),
          "authorizedVoters"
        ),
        H.struct(
          [
            H.seq(
              H.struct([
                eF("authorizedPubkey"),
                H.nu64("epochOfLastAuthorizedSwitch"),
                H.nu64("targetEpoch"),
              ]),
              32,
              "buf"
            ),
            H.nu64("idx"),
            H.u8("isEmpty"),
          ],
          "priorVoters"
        ),
        H.nu64(),
        H.seq(
          H.struct([H.nu64("epoch"), H.nu64("credits"), H.nu64("prevCredits")]),
          H.offset(H.u32(), -8),
          "epochCredits"
        ),
        H.struct([H.nu64("slot"), H.nu64("timestamp")], "lastTimestamp"),
      ]),
      e.s(
        [
          "Connection",
          () => r1,
          "PublicKey",
          () => eM,
          "VersionedTransaction",
          () => e3,
        ],
        127261
      );
  },
  142793,
  749630,
  (e) => {
    "use strict";
    e.i(247167);
    var t = e.i(467034),
      r = e.i(47088),
      n = e.i(551944),
      i = e.i(336005),
      s = e.i(974010),
      o = e.i(541473),
      a = e.i(638282),
      u = e.i(175654),
      c = e.i(911450),
      l = e.i(176394),
      f = e.i(127261),
      h = e.i(309682),
      d = e.i(656679),
      p = e.i(752012),
      g = e.i(285973),
      y = e.i(110163),
      m = e.i(599509),
      b = e.i(668375),
      w = e.i(128182),
      S = e.i(890357),
      k = e.i(699945),
      v = e.i(637406),
      B = e.i(872081);
    let I = {
        src: e.i(412913).default,
        width: 17,
        height: 18,
        blurWidth: 0,
        blurHeight: 0,
      },
      E = {
        src: e.i(792740).default,
        width: 18,
        height: 18,
        blurWidth: 0,
        blurHeight: 0,
      },
      A = {
        src: e.i(61490).default,
        width: 18,
        height: 18,
        blurWidth: 0,
        blurHeight: 0,
      };
    var x = e.i(656876);
    let _ = [
        {
          id: 1,
          label: "USDC",
          value: "solana",
          subLabel: "Solana",
          icon: k.default,
          networkId: 0x2f3fb341,
          balance: 0,
        },
        {
          id: 2,
          label: "USDC",
          value: "arbitrum",
          subLabel: "Arbitrum",
          icon: v.default,
          networkId: 42161,
          balance: 0,
        },
        {
          id: 3,
          label: "USDC",
          value: "base",
          subLabel: "Base",
          icon: B.default,
          networkId: 8453,
          balance: 0,
        },
        {
          id: 4,
          label: "USDC",
          value: "bsc",
          subLabel: "BSC",
          icon: I,
          networkId: 56,
          balance: 0,
        },
        {
          id: 5,
          label: "USDC",
          value: "monad",
          subLabel: "Monad",
          icon: E,
          networkId: 143,
          balance: 0,
        },
        {
          id: 6,
          label: "USDG",
          value: "robinhood",
          subLabel: "Robinhood",
          icon: A,
          networkId: 4663,
          balance: 0,
        },
        {
          id: 7,
          label: "USDC",
          value: "hyperliquid",
          subLabel: "Hyperliquid",
          icon: x.default,
          networkId: 1337,
          balance: 0,
        },
      ],
      T = "https://api.relay.link";
    e.s(["RELAY_API_BASE_URL", 0, T, "USDC_OPTIONS", 0, _], 749630);
    var P = e.i(236983),
      C = e.i(730210),
      U = e.i(346944),
      L = e.i(524795);
    let R = (e) =>
      (0, h.createPublicClient)({
        chain: (0, s.chainMapping)(e),
        transport:
          "bsc" === e
            ? (0, y.http)(
                "https://bnb-mainnet.g.alchemy.com/v2/adKSgbGvAJ_qsIxTU0rQuNIsuRzDfn3s"
              )
            : (0, y.http)(),
      });
    e.s(
      [
        "default",
        0,
        () => {
          let { user: e, ready: k } = (0, o.usePrivy)(),
            { wallets: v } = (0, u.useSolanaWallets)(),
            { client: B } = (0, l.useSmartWallets)(),
            { getHyperliquidUSDC: I } = (0, w.default)(),
            { allUsdcBalance: E } = (0, S.useBalanceStore)(
              (0, U.useShallow)((e) => ({ allUsdcBalance: e.allUsdcBalance }))
            ),
            { wallets: A } = (0, c.useWallets)(),
            { signTypedData: x } = (0, a.useSignTypedData)(),
            _ = A.find((e) => "privy" === e.walletClientType),
            O = async ({
              type: e,
              tokenAddress: t,
              chain: r,
              value: n,
              isMax: s,
              transferToPerps: o,
              isLimit: a = !1,
              limitPrice: u = 0,
            }) => {
              try {
                let { data: c } = await (0, i.getSwapTransaction)({
                    isBuy: "buy" === e,
                    isMax: s,
                    tokenAddress: t,
                    chain: r,
                    amount: Number(n),
                    transferToPerps: o,
                    price: u,
                    isLimit: a,
                  }),
                  { swapTransaction: l, otherDetails: f } = c?.data,
                  h = f?.orderId,
                  d = f?.requestId,
                  p = f?.lastValidBlockHeight;
                return {
                  swapTransaction: l,
                  orderId: h,
                  requestId: d,
                  lastValidBlockHeight: p,
                  success: c?.success,
                  otherDetails: f,
                };
              } catch (e) {
                (0, L.captureErrorToSentry)(
                  e,
                  "useTransaction:fetchTransactionHash"
                );
              }
            },
            z = async ({ type: e, value: t, categorySlug: r }) => {
              try {
                let { data: n } = await (0, i.getCategorySwapTransaction)({
                  isBuy: "buy" === e,
                  categorySlug: r,
                  amount: Number(t),
                });
                return n?.data;
              } catch (e) {
                return (
                  (0, L.captureErrorToSentry)(
                    e,
                    "useTransaction:fetchCategoryTransactionHash"
                  ),
                  { success: !1 }
                );
              }
            },
            N = async ({
              signedBuffer: e,
              type: t = "buy",
              orderId: r = "",
              requestId: n = "",
              isLimit: s = !1,
              isCancel: o = !1,
            }) => {
              try {
                let { data: a } = await (0, i.postSignedTransaction)(
                  {
                    signedBuffer: e,
                    type: t,
                    orderId: r,
                    requestId: n,
                    isLimit: s,
                    isCancel: o,
                  },
                  { timeout: 4e4 }
                );
                return a?.data?.signature;
              } catch (e) {
                (0, L.captureErrorToSentry)(
                  e,
                  "useTransaction:postTransaction"
                );
              }
            },
            W = async ({
              address: e,
              username: t,
              tokenAddress: r,
              value: i,
              chain: s,
            }) => {
              try {
                let { data: s } = await (0, n.getSendTokenTransaction)({
                    address: e,
                    username: t,
                    tokenAddress: r,
                    amount: i,
                  }),
                  { transaction: o, message: a } = s;
                return { transaction: o, message: a };
              } catch (e) {
                (0, L.captureErrorToSentry)(
                  e,
                  "useTransaction:fetchSendTransactionHash"
                );
              }
            },
            M = async ({ signedBuffers: e, categorySlug: t }) => {
              try {
                let { data: r } = await (0, i.postSignedCategoryTransaction)(
                  { signedBuffers: e, categorySlug: t },
                  { timeout: 4e4 }
                );
                return r?.data;
              } catch (e) {
                (0, L.captureErrorToSentry)(
                  e,
                  "useTransaction:postCategoryTransaction"
                );
              }
            };
          return {
            getBalance: async () => {
              let t = e?.linkedAccounts.find(
                (e) =>
                  "wallet" === e.type &&
                  "privy" === e.walletClientType &&
                  "solana" === e.chainType
              );
              try {
                let e = new f.Connection(
                    "https://adeline-jzhmcv-fast-mainnet.helius-rpc.com",
                    "confirmed"
                  ),
                  r = new f.PublicKey(t?.address),
                  n = new f.PublicKey(s.USDC_SOL_TOKEN_ADDRESS),
                  i = await e.getTokenAccountsByOwner(r, { mint: n });
                if (i.value.length > 0)
                  return (
                    (await e.getTokenAccountBalance(i.value[0].pubkey)).value
                      .uiAmount || 0
                  );
                return 0;
              } catch (e) {
                return (
                  (0, L.captureErrorToSentry)(e, "useTransaction:getBalance"), 0
                );
              }
            },
            convertUSDCTrade: async ({
              chain: e,
              swapTransaction: t,
              orderId: r,
              onSuccess: i,
              onFailure: o,
            }) => {
              try {
                let a = t?._forwarder?.params[0];
                await B.switchChain({ id: (0, s.chainMapping)(e).id });
                let u = t?.to,
                  c = await R(e).readContract({
                    address: a,
                    abi: p.erc20Abi,
                    functionName: "allowance",
                    args: [B?.account.address, u],
                  });
                if (BigInt(c) < BigInt(t?._forwarder?.params[1])) {
                  let r = (0, d.encodeFunctionData)({
                    abi: p.erc20Abi,
                    functionName: "approve",
                    args: [u, t?._forwarder?.params[1]],
                  });
                  await B?.sendTransaction({
                    chain: (0, s.chainMapping)(e),
                    calls: [{ to: a, data: r }],
                  });
                }
                let l = await B?.sendTransaction({
                  chain: (0, s.chainMapping)(e),
                  calls: [{ to: u, data: t?.data, value: BigInt(0) }],
                });
                l
                  ? (await (0, n.getAlphaOrderStatus)({ txHash: l, chain: e }),
                    i && i(r))
                  : o && o();
              } catch (e) {
                (0, L.captureErrorToSentry)(
                  e,
                  "useTransaction:convertUSDCTrade"
                ),
                  o && o();
              }
            },
            onTradeToken: async ({
              type: e,
              tokenAddress: r,
              chain: i,
              value: o,
              transferToPerps: a = !1,
              isMax: u = !1,
              onSuccess: c,
              onFailure: l,
              isLimit: h = !1,
              limitPrice: g = 0,
            }) => {
              try {
                let {
                  swapTransaction: m,
                  orderId: b,
                  success: w,
                  requestId: S,
                } = await O({
                  type: e,
                  tokenAddress: r,
                  chain: i,
                  value: o,
                  isMax: u,
                  transferToPerps: a,
                  isLimit: h,
                  limitPrice: g,
                });
                if (((S = S ?? ""), w)) {
                  if ("solana" === i || "buy" === e)
                    try {
                      let r = t.Buffer.from(m, "base64");
                      var y = f.VersionedTransaction.deserialize(r);
                      await v[0].signTransaction(y);
                      let n = await N({
                        signedBuffer: t.Buffer.from(y.serialize()).toString(
                          "base64"
                        ),
                        type: e,
                        orderId: b || "",
                        isLimit: h,
                        requestId: S || "",
                      });
                      if (n) {
                        try {
                          a && (await I());
                        } catch (e) {}
                        c("solana" === i ? n : b);
                      } else
                        l && l("No signature received from postTransaction");
                    } catch (e) {
                      (0, L.captureErrorToSentry)(
                        e,
                        "useTransaction:onTradeToken:solanaSign"
                      ),
                        l && l(e);
                    }
                  if ("solana" !== i && "sell" === e)
                    try {
                      await B.switchChain({ id: (0, s.chainMapping)(i).id });
                      let e = m?.to,
                        t = await R(i).readContract({
                          address: r,
                          abi: p.erc20Abi,
                          functionName: "allowance",
                          args: [B?.account.address, e],
                        });
                      if (BigInt(t) < BigInt(m?._forwarder?.params[1])) {
                        let t = (0, d.encodeFunctionData)({
                          abi: p.erc20Abi,
                          functionName: "approve",
                          args: [e, m?._forwarder?.params[1]],
                        });
                        await B?.sendTransaction({
                          chain: (0, s.chainMapping)(i),
                          calls: [{ to: r, data: t }],
                        });
                      }
                      let o = await B?.sendTransaction({
                        chain: (0, s.chainMapping)(i),
                        calls: [{ to: e, data: m?.data, value: BigInt(0) }],
                      });
                      o
                        ? (await (0, n.getAlphaOrderStatus)({
                            txHash: o,
                            chain: i,
                          }),
                          c && c(b))
                        : l && l("No userOpHash received from sendTransaction");
                    } catch (e) {
                      (0, L.captureErrorToSentry)(
                        e,
                        "useTransaction:onTradeToken:ethSell"
                      ),
                        l && l(e);
                    }
                }
                !w && l && l("Transaction success flag was false");
              } catch (e) {
                (0, L.captureErrorToSentry)(e, "useTransaction:onTradeToken"),
                  l && l(e);
              }
            },
            onSendToken: async ({
              address: e,
              username: r,
              recipientAddress: n,
              tokenAddress: i,
              chain: o,
              decimals: a = 18,
              value: u,
              onSuccess: c,
              onFailure: l,
            }) => {
              try {
                if ("solana" === o)
                  try {
                    let n = await W({
                        address: e,
                        username: r,
                        tokenAddress: i,
                        chain: o,
                        value: Number(u),
                      }),
                      s = n?.transaction;
                    if (!s) throw Error("Failed to fetch transaction hash");
                    let a = t.Buffer.from(s, "base64");
                    var h = f.VersionedTransaction.deserialize(a);
                    await v[0].signTransaction(h);
                    let d = await N({
                      signedBuffer: t.Buffer.from(h.serialize()).toString(
                        "base64"
                      ),
                      type: "send",
                    });
                    return (
                      d
                        ? c && c()
                        : l && l("No signature received from postTransaction"),
                      d
                    );
                  } catch (e) {
                    (0, L.captureErrorToSentry)(
                      e,
                      "useTransaction:onSendToken:solana"
                    ),
                      l && l(e);
                  }
                if ("solana" !== o) {
                  await B.switchChain({ id: (0, s.chainMapping)(o).id });
                  let e = await R(o).readContract({
                    address: i,
                    abi: p.erc20Abi,
                    functionName: "allowance",
                    args: [B?.account.address, n],
                  });
                  if (BigInt(e) < BigInt((0, m.parseEther)(String(u)))) {
                    let e = (0, d.encodeFunctionData)({
                      abi: p.erc20Abi,
                      functionName: "approve",
                      args: [n, (0, b.parseUnits)(String(u), a)],
                    });
                    await B?.sendTransaction({
                      chain: (0, s.chainMapping)(o),
                      calls: [{ to: i, data: e }],
                    });
                  }
                  let t = (0, d.encodeFunctionData)({
                    abi: p.erc20Abi,
                    functionName: "transfer",
                    args: [n, (0, b.parseUnits)(String(u), a)],
                  });
                  (await B.sendTransaction({
                    chain: (0, s.chainMapping)(o),
                    calls: [{ to: i, value: BigInt(0), data: t }],
                  }))
                    ? c && c()
                    : l && l("No userOpHash received from sendTransaction");
                }
              } catch (e) {
                (0, L.captureErrorToSentry)(e, "useTransaction:onSendToken"),
                  l && l(e);
              }
            },
            onTradeCategoryToken: async ({
              type: e,
              categorySlug: r,
              value: n,
              onSuccess: i,
              onFailure: s,
            }) => {
              try {
                let o = await z({ type: e, categorySlug: r, value: n });
                if (o) {
                  if ("buy" === e)
                    try {
                      let e = await Promise.all(
                        await o?.map(async (e) => {
                          let r = t.Buffer.from(e, "base64");
                          var n = f.VersionedTransaction.deserialize(r);
                          return (
                            await v[0].signTransaction(n),
                            t.Buffer.from(n.serialize()).toString("base64")
                          );
                        })
                      );
                      (await M({ signedBuffers: await e, categorySlug: r }))
                        ? i && i()
                        : s && (console.log("failure"), s());
                    } catch (e) {
                      console.log(e, 9999),
                        (0, L.captureErrorToSentry)(
                          e,
                          "useTransaction:onTradeCategoryToken:buy"
                        ),
                        s && s();
                    }
                } else s && s();
              } catch (e) {
                console.log(e, 9999),
                  (0, L.captureErrorToSentry)(
                    e,
                    "useTransaction:onTradeCategoryToken"
                  ),
                  s && s();
              }
            },
            wrapToken: async ({
              chain: e,
              tokenAddress: t,
              quantity: i,
              onSuccess: o,
              onFailure: a,
            }) => {
              try {
                await B.switchChain({ id: (0, s.chainMapping)(e).id });
                let u = (0, d.encodeFunctionData)({
                    abi: r.wrappedTokenContractABI,
                    functionName: "deposit",
                    args: [],
                  }),
                  c = await B.sendTransaction({
                    chain: (0, s.chainMapping)(e),
                    calls: [
                      { to: t, value: (0, m.parseEther)(String(i)), data: u },
                    ],
                  });
                if (c)
                  try {
                    (
                      await (0, n.parseWrappedTx)({
                        txHash: c,
                        chainSymbol: e,
                        tokenAddress: t,
                      })
                    ).success && o();
                  } catch (e) {
                    console.log(e);
                  }
                else a();
              } catch (e) {
                (0, L.captureErrorToSentry)(e, "useTransaction:wrapToken"), a();
              }
            },
            convertEVMToken: async ({
              quote: e,
              sourceChain: t,
              destinationChain: r,
              amount: n,
              destinationWalletAddress: i,
              onSuccess: o,
              onFailure: a,
              approvalData: u = null,
            }) => {
              try {
                if ("hyperliquid" === t && "arbitrum" === r) {
                  await (0, C.withdrawUSDC)({
                    type: "withdraw3",
                    wallet: B,
                    amount: n,
                    destinationWallet: i,
                    signTypedData: x,
                  }),
                    await o();
                  return;
                }
                {
                  let r = e?.[0]?.data?.action?.parameters?.destination,
                    n = e?.[0]?.data?.action?.parameters?.amount;
                  if ("hyperliquid" === t)
                    await (0, C.withdrawUSDC)({
                      type: "usdSend",
                      wallet: B,
                      amount: n,
                      destinationWallet: r,
                      signTypedData: x,
                    });
                  else {
                    await B.switchChain({ id: (0, s.chainMapping)(t).id });
                    let r = [];
                    u?.items &&
                      u.items.forEach((e) => {
                        r.push({
                          to: e.data.to,
                          data: e.data.data,
                          value: BigInt(e.data.value || 0),
                        });
                      }),
                      e?.[0]?.data &&
                        r.push({
                          to: e[0].data.to,
                          data: e[0].data.data,
                          value: BigInt(e[0].data.value || 0),
                        }),
                      r.length > 0 &&
                        (await B?.sendTransaction({
                          chain: (0, s.chainMapping)(t),
                          calls: r,
                        }));
                  }
                  let i = e?.[0]?.check?.endpoint,
                    c = async () => {
                      let e = Date.now();
                      for (; Date.now() - e < 6e4; )
                        try {
                          let e = await fetch(`${T}${i}`, {
                              method: "GET",
                              headers: { "Content-Type": "application/json" },
                            }),
                            t = await e.json();
                          if ("success" === t.status) return "success";
                          if ("refund" === t.status) return "refund";
                          if ("fallback" === t.status) return "fallback";
                          await new Promise((e) => setTimeout(e, 1e3));
                        } catch (e) {
                          return (
                            console.error("Error polling request status:", e),
                            "error"
                          );
                        }
                      return (
                        console.warn("Polling timed out after 60 seconds."),
                        "timeout"
                      );
                    },
                    l = await c();
                  "success" === l ? o() : a(l);
                }
              } catch (e) {
                (0, L.captureErrorToSentry)(
                  e,
                  "useTransaction:convertEVMToken"
                ),
                  a(e);
              }
            },
            getRelayQuote: async ({
              originChainId: e,
              destinationChainId: t,
              originWalletAddress: r,
              destinationWalletAddress: n,
              amount: i,
              destinationCurrency: o = "",
              destinationChain: a,
            }) => {
              try {
                let c = (0, h.createPublicClient)({
                  chain: P.arbitrum,
                  transport: (0, y.http)(
                    "https://arb-mainnet.g.alchemy.com/v2/adKSgbGvAJ_qsIxTU0rQuNIsuRzDfn3s"
                  ),
                });
                async function u(e) {
                  let t = await c.getBalance({ address: e });
                  return t ? Number((0, g.formatEther)(t)) : 0;
                }
                "hyperliquid" === a && (await u(_?.address));
                let l = {
                  originChainId: e,
                  destinationChainId: t,
                  originCurrency:
                    1337 === e
                      ? "0x00000000000000000000000000000000"
                      : E.find((t) => t.chain.networkId === e).chain
                          .usdcAddress,
                  destinationCurrency:
                    "solana" === a
                      ? s.USDC_SOL_TOKEN_ADDRESS
                      : o ||
                        E.find((e) => e.chain.networkId === t).chain
                          .usdcAddress,
                  amount: (0, b.parseUnits)(
                    i.toString(),
                    56 === e ? 18 : 1337 === e ? 8 : 6
                  ).toString(),
                  tradeType: "EXACT_INPUT",
                  user: r,
                  recipient: n,
                  useExternalLiquidity: !1,
                  useDepositAddress: 1337 === e,
                  topupGas: !1,
                  refundTo: r,
                };
                return await fetch(`${T}/quote`, {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(l),
                })
                  .then((e) => e.json())
                  .catch((e) => {
                    throw e;
                  });
              } catch (e) {
                (0, L.captureErrorToSentry)(e, "useTransaction:getRelayQuote");
              }
            },
            onCancelLimitOrder: async ({
              orderId: e,
              onSuccess: r,
              onFailure: n,
            }) => {
              try {
                let s = await (0, i.cancelOnchainOpenOrder)({ orderId: e });
                if (s.success) {
                  let { transaction: e, requestId: i } = s.data,
                    o = t.Buffer.from(e, "base64"),
                    a = f.VersionedTransaction.deserialize(o),
                    u = await v[0]?.getProvider(),
                    c = t.Buffer.from(a.message.serialize()),
                    l = a.message.staticAccountKeys
                      .slice(0, a.message.header.numRequiredSignatures)
                      .findIndex((e) => e.toBase58() === v[0]?.address);
                  if (-1 === l) throw Error("Signer not found in transaction");
                  let { signature: h } = await u.request({
                    method: "signMessage",
                    params: { message: c.toString("base64") },
                  });
                  a.signatures[l] = t.Buffer.from(h, "base64");
                  let d = await N({
                    signedBuffer: t.Buffer.from(a.serialize()).toString(
                      "base64"
                    ),
                    isCancel: !0,
                    requestId: i || "",
                  });
                  d ? r && r(d) : n && n();
                } else n && n();
              } catch (e) {
                (0, L.captureErrorToSentry)(
                  e,
                  "useTransaction:onCancelLimitOrder"
                ),
                  n && n(e);
              }
            },
          };
        },
      ],
      142793
    );
  },
]);
