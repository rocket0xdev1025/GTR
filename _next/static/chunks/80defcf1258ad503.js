(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  526539,
  (e) => {
    "use strict";
    var t = e.i(470525);
    let r = BigInt(0),
      n = BigInt(1);
    function i(e, t) {
      if ("boolean" != typeof t) throw Error(e + " boolean expected, got " + t);
    }
    function o(e, t = "") {
      if ("boolean" != typeof e)
        throw Error((t && `"${t}"`) + "expected boolean, got type=" + typeof e);
      return e;
    }
    function s(e, r, n = "") {
      let i = (0, t.isBytes)(e),
        o = e?.length,
        a = void 0 !== r;
      if (!i || (a && o !== r))
        throw Error(
          (n && `"${n}" `) +
            "expected Uint8Array" +
            (a ? ` of length ${r}` : "") +
            ", got " +
            (i ? `length=${o}` : `type=${typeof e}`)
        );
      return e;
    }
    function a(e) {
      let t = e.toString(16);
      return 1 & t.length ? "0" + t : t;
    }
    function u(e) {
      if ("string" != typeof e)
        throw Error("hex string expected, got " + typeof e);
      return "" === e ? r : BigInt("0x" + e);
    }
    function l(e) {
      return u((0, t.bytesToHex)(e));
    }
    function f(e) {
      return (
        (0, t.abytes)(e), u((0, t.bytesToHex)(Uint8Array.from(e).reverse()))
      );
    }
    function c(e, r) {
      return (0, t.hexToBytes)(e.toString(16).padStart(2 * r, "0"));
    }
    function d(e, t) {
      return c(e, t).reverse();
    }
    function m(e) {
      return (0, t.hexToBytes)(a(e));
    }
    function y(e, r, n) {
      let i;
      if ("string" == typeof r)
        try {
          i = (0, t.hexToBytes)(r);
        } catch (t) {
          throw Error(e + " must be hex string or Uint8Array, cause: " + t);
        }
      else if ((0, t.isBytes)(r)) i = Uint8Array.from(r);
      else throw Error(e + " must be hex string or Uint8Array");
      let o = i.length;
      if ("number" == typeof n && o !== n)
        throw Error(e + " of length " + n + " expected, got " + o);
      return i;
    }
    function b(e, t) {
      if (e.length !== t.length) return !1;
      let r = 0;
      for (let n = 0; n < e.length; n++) r |= e[n] ^ t[n];
      return 0 === r;
    }
    function h(e) {
      return Uint8Array.from(e);
    }
    function g(e) {
      return Uint8Array.from(e, (t, r) => {
        let n = t.charCodeAt(0);
        if (1 !== t.length || n > 127)
          throw Error(
            `string contains non-ASCII character "${e[r]}" with code ${n} at position ${r}`
          );
        return n;
      });
    }
    let p = (e) => "bigint" == typeof e && r <= e;
    function E(e, t, r) {
      return p(e) && p(t) && p(r) && t <= e && e < r;
    }
    function w(e, t, r, n) {
      if (!E(t, r, n))
        throw Error(
          "expected valid " + e + ": " + r + " <= n < " + n + ", got " + t
        );
    }
    function v(e) {
      let t;
      for (t = 0; e > r; e >>= n, t += 1);
      return t;
    }
    function B(e, t) {
      return (e >> BigInt(t)) & n;
    }
    function x(e, t, i) {
      return e | ((i ? n : r) << BigInt(t));
    }
    function O(e, r, n) {
      if ("number" != typeof e || e < 2)
        throw Error("hashLen must be a number");
      if ("number" != typeof r || r < 2)
        throw Error("qByteLen must be a number");
      if ("function" != typeof n) throw Error("hmacFn must be a function");
      let i = (e) => new Uint8Array(e),
        o = i(e),
        s = i(e),
        a = 0,
        u = () => {
          o.fill(1), s.fill(0), (a = 0);
        },
        l = (...e) => n(s, o, ...e),
        f = (e = i(0)) => {
          ((s = l(Uint8Array.of(0), e)), (o = l()), 0 !== e.length) &&
            ((s = l(Uint8Array.of(1), e)), (o = l()));
        },
        c = () => {
          if (a++ >= 1e3) throw Error("drbg: tried 1000 values");
          let e = 0,
            n = [];
          for (; e < r; ) {
            let t = (o = l()).slice();
            n.push(t), (e += o.length);
          }
          return (0, t.concatBytes)(...n);
        };
      return (e, t) => {
        let r;
        for (u(), f(e); !(r = t(c())); ) f();
        return u(), r;
      };
    }
    let S = {
      bigint: (e) => "bigint" == typeof e,
      function: (e) => "function" == typeof e,
      boolean: (e) => "boolean" == typeof e,
      string: (e) => "string" == typeof e,
      stringOrUint8Array: (e) => "string" == typeof e || (0, t.isBytes)(e),
      isSafeInteger: (e) => Number.isSafeInteger(e),
      array: (e) => Array.isArray(e),
      field: (e, t) => t.Fp.isValid(e),
      hash: (e) => "function" == typeof e && Number.isSafeInteger(e.outputLen),
    };
    function I(e, t, r = {}) {
      let n = (t, r, n) => {
        let i = S[r];
        if ("function" != typeof i) throw Error("invalid validator function");
        let o = e[t];
        if ((!n || void 0 !== o) && !i(o, e))
          throw Error(
            "param " + String(t) + " is invalid. Expected " + r + ", got " + o
          );
      };
      for (let [e, r] of Object.entries(t)) n(e, r, !1);
      for (let [e, t] of Object.entries(r)) n(e, t, !0);
      return e;
    }
    function R(e) {
      return "function" == typeof e && Number.isSafeInteger(e.outputLen);
    }
    function T(e, t, r = {}) {
      if (!e || "object" != typeof e)
        throw Error("expected valid options object");
      function n(t, r, n) {
        let i = e[t];
        if (n && void 0 === i) return;
        let o = typeof i;
        if (o !== r || null === i)
          throw Error(`param "${t}" is invalid: expected ${r}, got ${o}`);
      }
      Object.entries(t).forEach(([e, t]) => n(e, t, !1)),
        Object.entries(r).forEach(([e, t]) => n(e, t, !0));
    }
    function z(e) {
      let t = new WeakMap();
      return (r, ...n) => {
        let i = t.get(r);
        if (void 0 !== i) return i;
        let o = e(r, ...n);
        return t.set(r, o), o;
      };
    }
    e.s([
      "_abool2",
      () => o,
      "_abytes2",
      () => s,
      "_validateObject",
      () => T,
      "aInRange",
      () => w,
      "abool",
      () => i,
      "asciiToBytes",
      () => g,
      "bitGet",
      () => B,
      "bitLen",
      () => v,
      "bitMask",
      0,
      (e) => (n << BigInt(e)) - n,
      "bitSet",
      () => x,
      "bytesToNumberBE",
      () => l,
      "bytesToNumberLE",
      () => f,
      "copyBytes",
      () => h,
      "createHmacDrbg",
      () => O,
      "ensureBytes",
      () => y,
      "equalBytes",
      () => b,
      "hexToNumber",
      () => u,
      "inRange",
      () => E,
      "isHash",
      () => R,
      "memoized",
      () => z,
      "notImplemented",
      0,
      () => {
        throw Error("not implemented");
      },
      "numberToBytesBE",
      () => c,
      "numberToBytesLE",
      () => d,
      "numberToHexUnpadded",
      () => a,
      "numberToVarBytesBE",
      () => m,
      "validateObject",
      () => I,
    ]);
  },
  5450,
  602376,
  382721,
  931312,
  992239,
  (e) => {
    "use strict";
    var t = e.i(470525),
      r = e.i(526539);
    t.abytes,
      t.anumber,
      t.bytesToHex,
      t.bytesToUtf8,
      t.concatBytes,
      t.hexToBytes,
      t.isBytes,
      t.randomBytes,
      t.utf8ToBytes,
      r.abool,
      r.numberToHexUnpadded,
      r.hexToNumber,
      r.bytesToNumberBE,
      r.bytesToNumberLE,
      r.numberToBytesBE,
      r.numberToBytesLE,
      r.numberToVarBytesBE,
      r.ensureBytes;
    let n = r.equalBytes;
    r.copyBytes,
      r.asciiToBytes,
      r.inRange,
      r.aInRange,
      r.bitLen,
      r.bitGet,
      r.bitSet,
      r.bitMask,
      r.createHmacDrbg,
      r.notImplemented,
      r.memoized,
      r.validateObject,
      r.isHash,
      e.s(["equalBytes", 0, n], 5450);
    class i extends Error {
      constructor(e, t = {}) {
        const r = (() => {
            if (t.cause instanceof i) {
              if (t.cause.details) return t.cause.details;
              if (t.cause.shortMessage) return t.cause.shortMessage;
            }
            return t.cause?.message ? t.cause.message : t.details;
          })(),
          n = (t.cause instanceof i && t.cause.docsPath) || t.docsPath,
          o = `https://oxlib.sh${n ?? ""}`;
        super(
          [
            e || "An error occurred.",
            ...(t.metaMessages ? ["", ...t.metaMessages] : []),
            ...(r || n
              ? ["", r ? `Details: ${r}` : void 0, n ? `See: ${o}` : void 0]
              : []),
          ]
            .filter((e) => "string" == typeof e)
            .join("\n"),
          t.cause ? { cause: t.cause } : void 0
        ),
          Object.defineProperty(this, "details", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          Object.defineProperty(this, "docs", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          Object.defineProperty(this, "docsPath", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          Object.defineProperty(this, "shortMessage", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          Object.defineProperty(this, "cause", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "BaseError",
          }),
          Object.defineProperty(this, "version", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "ox@0.1.1",
          }),
          (this.cause = t.cause),
          (this.details = r),
          (this.docs = o),
          (this.docsPath = n),
          (this.shortMessage = e);
      }
      walk(e) {
        return (function e(t, r) {
          return r?.(t)
            ? t
            : t && "object" == typeof t && "cause" in t && t.cause
            ? e(t.cause, r)
            : r
            ? null
            : t;
        })(this, e);
      }
    }
    function o(e, t, r) {
      return JSON.stringify(
        e,
        (e, r) =>
          "function" == typeof t
            ? t(e, r)
            : "bigint" == typeof r
            ? r.toString() + "#__bigint"
            : r,
        r
      );
    }
    e.s(["BaseError", () => i], 602376),
      e.s(["stringify", () => o], 382721),
      e.s(
        [
          "assertEndOffset",
          () => l,
          "assertSize",
          () => a,
          "assertStartOffset",
          () => u,
          "charCodeToBase16",
          () => f,
          "pad",
          () => c,
          "trim",
          () => d,
        ],
        931312
      );
    var s = e.i(759384);
    function a(e, t) {
      if (s.size(e) > t)
        throw new s.SizeOverflowError({ givenSize: s.size(e), maxSize: t });
    }
    function u(e, t) {
      if ("number" == typeof t && t > 0 && t > s.size(e) - 1)
        throw new s.SliceOffsetOutOfBoundsError({
          offset: t,
          position: "start",
          size: s.size(e),
        });
    }
    function l(e, t, r) {
      if ("number" == typeof t && "number" == typeof r && s.size(e) !== r - t)
        throw new s.SliceOffsetOutOfBoundsError({
          offset: r,
          position: "end",
          size: s.size(e),
        });
    }
    function f(e) {
      return e >= 48 && e <= 57
        ? e - 48
        : e >= 65 && e <= 70
        ? e - 55
        : e >= 97 && e <= 102
        ? e - 87
        : void 0;
    }
    function c(e, t = {}) {
      let { dir: r, size: n = 32 } = t;
      if (0 === n) return e;
      if (e.length > n)
        throw new s.SizeExceedsPaddingSizeError({
          size: e.length,
          targetSize: n,
          type: "Bytes",
        });
      let i = new Uint8Array(n);
      for (let t = 0; t < n; t++) {
        let o = "right" === r;
        i[o ? t : n - t - 1] = e[o ? t : e.length - t - 1];
      }
      return i;
    }
    function d(e, t = {}) {
      let { dir: r = "left" } = t,
        n = e,
        i = 0;
      for (let e = 0; e < n.length - 1; e++)
        if ("0" === n["left" === r ? e : n.length - e - 1].toString()) i++;
        else break;
      return "left" === r ? n.slice(i) : n.slice(0, n.length - i);
    }
    e.s(
      [
        "assertEndOffset",
        () => h,
        "assertSize",
        () => y,
        "assertStartOffset",
        () => b,
        "pad",
        () => g,
        "trim",
        () => p,
      ],
      992239
    );
    var m = e.i(284251);
    function y(e, t) {
      if (m.size(e) > t)
        throw new m.SizeOverflowError({ givenSize: m.size(e), maxSize: t });
    }
    function b(e, t) {
      if ("number" == typeof t && t > 0 && t > m.size(e) - 1)
        throw new m.SliceOffsetOutOfBoundsError({
          offset: t,
          position: "start",
          size: m.size(e),
        });
    }
    function h(e, t, r) {
      if ("number" == typeof t && "number" == typeof r && m.size(e) !== r - t)
        throw new m.SliceOffsetOutOfBoundsError({
          offset: r,
          position: "end",
          size: m.size(e),
        });
    }
    function g(e, t = {}) {
      let { dir: r, size: n = 32 } = t;
      if (0 === n) return e;
      let i = e.replace("0x", "");
      if (i.length > 2 * n)
        throw new m.SizeExceedsPaddingSizeError({
          size: Math.ceil(i.length / 2),
          targetSize: n,
          type: "Hex",
        });
      return `0x${i["right" === r ? "padEnd" : "padStart"](2 * n, "0")}`;
    }
    function p(e, t = {}) {
      let { dir: r = "left" } = t,
        n = e.replace("0x", ""),
        i = 0;
      for (let e = 0; e < n.length - 1; e++)
        if ("0" === n["left" === r ? e : n.length - e - 1].toString()) i++;
        else break;
      return "0" === (n = "left" === r ? n.slice(i) : n.slice(0, n.length - i))
        ? "0x"
        : "right" === r && n.length % 2 == 1
        ? `0x${n}0`
        : `0x${n}`;
    }
  },
  284251,
  (e) => {
    "use strict";
    e.s([
      "IntegerOutOfRangeError",
      () => P,
      "InvalidHexBooleanError",
      () => A,
      "InvalidHexTypeError",
      () => N,
      "InvalidHexValueError",
      () => $,
      "InvalidLengthError",
      () => H,
      "SizeExceedsPaddingSizeError",
      () => j,
      "SizeOverflowError",
      () => U,
      "SliceOffsetOutOfBoundsError",
      () => q,
      "assert",
      () => l,
      "concat",
      () => f,
      "from",
      () => c,
      "fromBoolean",
      () => d,
      "fromBytes",
      () => m,
      "fromNumber",
      () => y,
      "fromString",
      () => b,
      "isEqual",
      () => h,
      "padLeft",
      () => g,
      "padRight",
      () => p,
      "random",
      () => E,
      "size",
      () => v,
      "slice",
      () => w,
      "toBigInt",
      () => O,
      "toBoolean",
      () => S,
      "toBytes",
      () => I,
      "toNumber",
      () => R,
      "toString",
      () => T,
      "trimLeft",
      () => B,
      "trimRight",
      () => x,
      "validate",
      () => z,
    ]);
    var t = e.i(5450),
      r = e.i(759384),
      n = e.i(602376),
      i = e.i(382721),
      o = e.i(931312),
      s = e.i(992239);
    let a = new TextEncoder(),
      u = Array.from({ length: 256 }, (e, t) =>
        t.toString(16).padStart(2, "0")
      );
    function l(e, t = {}) {
      let { strict: r = !1 } = t;
      if (!e || "string" != typeof e) throw new N(e);
      if ((r && !/^0x[0-9a-fA-F]*$/.test(e)) || !e.startsWith("0x"))
        throw new $(e);
    }
    function f(...e) {
      return `0x${e.reduce((e, t) => e + t.replace("0x", ""), "")}`;
    }
    function c(e) {
      return e instanceof Uint8Array
        ? m(e)
        : Array.isArray(e)
        ? m(new Uint8Array(e))
        : e;
    }
    function d(e, t = {}) {
      let r = `0x${Number(e)}`;
      return "number" == typeof t.size
        ? (s.assertSize(r, t.size), g(r, t.size))
        : r;
    }
    function m(e, t = {}) {
      let r = "";
      for (let t = 0; t < e.length; t++) r += u[e[t]];
      let n = `0x${r}`;
      return "number" == typeof t.size
        ? (s.assertSize(n, t.size), p(n, t.size))
        : n;
    }
    function y(e, t = {}) {
      let r,
        { signed: n, size: i } = t,
        o = BigInt(e);
      i
        ? (r = n
            ? (1n << (8n * BigInt(i) - 1n)) - 1n
            : 2n ** (8n * BigInt(i)) - 1n)
        : "number" == typeof e && (r = BigInt(Number.MAX_SAFE_INTEGER));
      let s = "bigint" == typeof r && n ? -r - 1n : 0;
      if ((r && o > r) || o < s) {
        let t = "bigint" == typeof e ? "n" : "";
        throw new P({
          max: r ? `${r}${t}` : void 0,
          min: `${s}${t}`,
          signed: n,
          size: i,
          value: `${e}${t}`,
        });
      }
      let a = (n && o < 0 ? (1n << BigInt(8 * i)) + BigInt(o) : o).toString(16),
        u = `0x${a}`;
      return i ? g(u, i) : u;
    }
    function b(e, t = {}) {
      return m(a.encode(e), t);
    }
    function h(e, n) {
      return (0, t.equalBytes)(r.fromHex(e), r.fromHex(n));
    }
    function g(e, t) {
      return s.pad(e, { dir: "left", size: t });
    }
    function p(e, t) {
      return s.pad(e, { dir: "right", size: t });
    }
    function E(e) {
      return m(r.random(e));
    }
    function w(e, t, r, n = {}) {
      let { strict: i } = n;
      s.assertStartOffset(e, t);
      let o = `0x${e
        .replace("0x", "")
        .slice((t ?? 0) * 2, (r ?? e.length) * 2)}`;
      return i && s.assertEndOffset(o, t, r), o;
    }
    function v(e) {
      return Math.ceil((e.length - 2) / 2);
    }
    function B(e) {
      return s.trim(e, { dir: "left" });
    }
    function x(e) {
      return s.trim(e, { dir: "right" });
    }
    function O(e, t = {}) {
      let { signed: r } = t;
      t.size && s.assertSize(e, t.size);
      let n = BigInt(e);
      if (!r) return n;
      let i = (1n << (8n * BigInt((e.length - 2) / 2))) - 1n;
      return n <= i >> 1n ? n : n - i - 1n;
    }
    function S(e, t = {}) {
      t.size && s.assertSize(e, t.size);
      let r = B(e);
      if ("0x" === r) return !1;
      if ("0x1" === r) return !0;
      throw new A(e);
    }
    function I(e, t = {}) {
      return r.fromHex(e, t);
    }
    function R(e, t = {}) {
      let { signed: r, size: n } = t;
      return r || n ? Number(O(e, t)) : Number(e);
    }
    function T(e, t = {}) {
      let { size: n } = t,
        i = r.fromHex(e);
      return (
        n && (o.assertSize(i, n), (i = r.trimRight(i))),
        new TextDecoder().decode(i)
      );
    }
    function z(e, t = {}) {
      let { strict: r = !1 } = t;
      try {
        return l(e, { strict: r }), !0;
      } catch {
        return !1;
      }
    }
    class P extends n.BaseError {
      constructor({ max: e, min: t, signed: r, size: n, value: i }) {
        super(
          `Number \`${i}\` is not in safe${n ? ` ${8 * n}-bit` : ""}${
            r ? " signed" : " unsigned"
          } integer range ${e ? `(\`${t}\` to \`${e}\`)` : `(above \`${t}\`)`}`
        ),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Hex.IntegerOutOfRangeError",
          });
      }
    }
    class A extends n.BaseError {
      constructor(e) {
        super(`Hex value \`"${e}"\` is not a valid boolean.`, {
          metaMessages: [
            'The hex value must be `"0x0"` (false) or `"0x1"` (true).',
          ],
        }),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Hex.InvalidHexBooleanError",
          });
      }
    }
    class N extends n.BaseError {
      constructor(e) {
        super(
          `Value \`${
            "object" == typeof e ? i.stringify(e) : e
          }\` of type \`${typeof e}\` is an invalid hex type.`,
          {
            metaMessages: ['Hex types must be represented as `"0x${string}"`.'],
          }
        ),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Hex.InvalidHexTypeError",
          });
      }
    }
    class $ extends n.BaseError {
      constructor(e) {
        super(`Value \`${e}\` is an invalid hex value.`, {
          metaMessages: [
            'Hex values must start with `"0x"` and contain only hexadecimal characters (0-9, a-f, A-F).',
          ],
        }),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Hex.InvalidHexValueError",
          });
      }
    }
    class H extends n.BaseError {
      constructor(e) {
        super(
          `Hex value \`"${e}"\` is an odd length (${e.length - 2} nibbles).`,
          { metaMessages: ["It must be an even length."] }
        ),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Hex.InvalidLengthError",
          });
      }
    }
    class U extends n.BaseError {
      constructor({ givenSize: e, maxSize: t }) {
        super(`Size cannot exceed \`${t}\` bytes. Given size: \`${e}\` bytes.`),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Hex.SizeOverflowError",
          });
      }
    }
    class q extends n.BaseError {
      constructor({ offset: e, position: t, size: r }) {
        super(
          `Slice ${
            "start" === t ? "starting" : "ending"
          } at offset \`${e}\` is out-of-bounds (size: \`${r}\`).`
        ),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Hex.SliceOffsetOutOfBoundsError",
          });
      }
    }
    class j extends n.BaseError {
      constructor({ size: e, targetSize: t, type: r }) {
        super(
          `${r.charAt(0).toUpperCase()}${r
            .slice(1)
            .toLowerCase()} size (\`${e}\`) exceeds padding size (\`${t}\`).`
        ),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Hex.SizeExceedsPaddingSizeError",
          });
      }
    }
  },
  759384,
  (e) => {
    "use strict";
    e.s([
      "SizeExceedsPaddingSizeError",
      () => O,
      "SizeOverflowError",
      () => B,
      "SliceOffsetOutOfBoundsError",
      () => x,
      "concat",
      () => u,
      "from",
      () => l,
      "fromArray",
      () => f,
      "fromHex",
      () => c,
      "fromNumber",
      () => d,
      "fromString",
      () => m,
      "random",
      () => y,
      "size",
      () => b,
      "slice",
      () => h,
      "toBigInt",
      () => g,
      "toString",
      () => p,
      "trimRight",
      () => E,
      "validate",
      () => w,
    ]),
      e.i(5450);
    var t = e.i(602376),
      r = e.i(284251),
      n = e.i(382721),
      i = e.i(931312),
      o = e.i(992239);
    let s = new TextDecoder(),
      a = new TextEncoder();
    function u(...e) {
      let t = 0;
      for (let r of e) t += r.length;
      let r = new Uint8Array(t);
      for (let t = 0, n = 0; t < e.length; t++) {
        let i = e[t];
        r.set(i, n), (n += i.length);
      }
      return r;
    }
    function l(e) {
      return e instanceof Uint8Array ? e : "string" == typeof e ? c(e) : f(e);
    }
    function f(e) {
      return e instanceof Uint8Array ? e : new Uint8Array(e);
    }
    function c(e, n = {}) {
      let { size: s } = n,
        a = e;
      s && (o.assertSize(e, s), (a = r.padRight(e, s)));
      let u = a.slice(2);
      u.length % 2 && (u = `0${u}`);
      let l = u.length / 2,
        f = new Uint8Array(l);
      for (let e = 0, r = 0; e < l; e++) {
        let n = i.charCodeToBase16(u.charCodeAt(r++)),
          o = i.charCodeToBase16(u.charCodeAt(r++));
        if (void 0 === n || void 0 === o)
          throw new t.BaseError(
            `Invalid byte sequence ("${u[r - 2]}${u[r - 1]}" in "${u}").`
          );
        f[e] = 16 * n + o;
      }
      return f;
    }
    function d(e, t) {
      return c(r.fromNumber(e, t));
    }
    function m(e, t = {}) {
      var r, n;
      let { size: o } = t,
        s = a.encode(e);
      return "number" == typeof o
        ? (i.assertSize(s, o),
          (r = s),
          (n = o),
          i.pad(r, { dir: "right", size: n }))
        : s;
    }
    function y(e) {
      return crypto.getRandomValues(new Uint8Array(e));
    }
    function b(e) {
      return e.length;
    }
    function h(e, t, r, n = {}) {
      let { strict: o } = n;
      i.assertStartOffset(e, t);
      let s = e.slice(t, r);
      return o && i.assertEndOffset(s, t, r), s;
    }
    function g(e, t = {}) {
      let { size: n } = t;
      void 0 !== n && i.assertSize(e, n);
      let o = r.fromBytes(e, t);
      return r.toBigInt(o, t);
    }
    function p(e, t = {}) {
      let { size: r } = t,
        n = e;
      return void 0 !== r && (i.assertSize(n, r), (n = E(n))), s.decode(n);
    }
    function E(e) {
      return i.trim(e, { dir: "right" });
    }
    function w(e) {
      try {
        if (
          !(e instanceof Uint8Array) &&
          (!e ||
            "object" != typeof e ||
            !("BYTES_PER_ELEMENT" in e) ||
            1 !== e.BYTES_PER_ELEMENT ||
            "Uint8Array" !== e.constructor.name)
        )
          throw new v(e);
        return !0;
      } catch {
        return !1;
      }
    }
    t.BaseError;
    class v extends t.BaseError {
      constructor(e) {
        super(
          `Value \`${
            "object" == typeof e ? n.stringify(e) : e
          }\` of type \`${typeof e}\` is an invalid Bytes value.`,
          { metaMessages: ["Bytes values must be of type `Bytes`."] }
        ),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Bytes.InvalidBytesTypeError",
          });
      }
    }
    class B extends t.BaseError {
      constructor({ givenSize: e, maxSize: t }) {
        super(`Size cannot exceed \`${t}\` bytes. Given size: \`${e}\` bytes.`),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Bytes.SizeOverflowError",
          });
      }
    }
    class x extends t.BaseError {
      constructor({ offset: e, position: t, size: r }) {
        super(
          `Slice ${
            "start" === t ? "starting" : "ending"
          } at offset \`${e}\` is out-of-bounds (size: \`${r}\`).`
        ),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Bytes.SliceOffsetOutOfBoundsError",
          });
      }
    }
    class O extends t.BaseError {
      constructor({ size: e, targetSize: t, type: r }) {
        super(
          `${r.charAt(0).toUpperCase()}${r
            .slice(1)
            .toLowerCase()} size (\`${e}\`) exceeds padding size (\`${t}\`).`
        ),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Bytes.SizeExceedsPaddingSizeError",
          });
      }
    }
  },
  826999,
  (e) => {
    "use strict";
    var t = e.i(759384),
      r = e.i(284251);
    let n = new TextEncoder(),
      i = new TextDecoder(),
      o = Object.fromEntries(
        Array.from(
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
        ).map((e, t) => [t, e.charCodeAt(0)])
      ),
      s = {
        ...Object.fromEntries(
          Array.from(
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
          ).map((e, t) => [e.charCodeAt(0), t])
        ),
        61: 0,
        45: 62,
        95: 63,
      };
    function a(e, t = {}) {
      let { pad: r = !0, url: n = !1 } = t,
        s = new Uint8Array(4 * Math.ceil(e.length / 3));
      for (let t = 0, r = 0; r < e.length; t += 4, r += 3) {
        let n = (e[r] << 16) + (e[r + 1] << 8) + (0 | e[r + 2]);
        (s[t] = o[n >> 18]),
          (s[t + 1] = o[(n >> 12) & 63]),
          (s[t + 2] = o[(n >> 6) & 63]),
          (s[t + 3] = o[63 & n]);
      }
      let u = e.length % 3,
        l = 4 * Math.floor(e.length / 3) + (u && u + 1),
        f = i.decode(new Uint8Array(s.buffer, 0, l));
      return (
        r && 1 === u && (f += "=="),
        r && 2 === u && (f += "="),
        n && (f = f.replaceAll("+", "-").replaceAll("/", "_")),
        f
      );
    }
    function u(e, r = {}) {
      return a(t.fromHex(e), r);
    }
    function l(e, r = {}) {
      return a(t.fromString(e), r);
    }
    function f(e) {
      let t = e.replace(/=+$/, ""),
        r = t.length,
        i = new Uint8Array(r + 3);
      n.encodeInto(t + "===", i);
      for (let e = 0, r = 0; e < t.length; e += 4, r += 3) {
        let t =
          (s[i[e]] << 18) +
          (s[i[e + 1]] << 12) +
          (s[i[e + 2]] << 6) +
          s[i[e + 3]];
        (i[r] = t >> 16), (i[r + 1] = (t >> 8) & 255), (i[r + 2] = 255 & t);
      }
      return new Uint8Array(i.buffer, 0, (r >> 2) * 3 + (r % 4 && (r % 4) - 1));
    }
    function c(e) {
      return r.fromBytes(f(e));
    }
    function d(e) {
      return t.toString(f(e));
    }
    e.s([
      "fromBytes",
      () => a,
      "fromHex",
      () => u,
      "fromString",
      () => l,
      "toBytes",
      () => f,
      "toHex",
      () => c,
      "toString",
      () => d,
    ]);
  },
  112667,
  620046,
  959103,
  (e) => {
    "use strict";
    var t = e.i(284251);
    e.s(["Hex", 0, t], 112667);
    var r = e.i(759384),
      n = e.i(602376),
      i = e.i(382721);
    function o(e, t = {}) {
      let { compressed: r } = t,
        { prefix: n, x: i, y: s } = e;
      if (!1 === r || ("bigint" == typeof i && "bigint" == typeof s)) {
        if (4 !== n) throw new y({ prefix: n, cause: new h() });
        return;
      }
      if (!0 === r || ("bigint" == typeof i && void 0 === s)) {
        if (3 !== n && 2 !== n) throw new y({ prefix: n, cause: new b() });
        return;
      }
      throw new m({ publicKey: e });
    }
    function s(e) {
      let { x: t, y: r } = e;
      return { prefix: r % 2n === 0n ? 2 : 3, x: t };
    }
    function a(e) {
      let n = (() => {
        if (t.validate(e)) return l(e);
        if (r.validate(e)) return u(e);
        let { prefix: n, x: i, y: o } = e;
        return "bigint" == typeof i && "bigint" == typeof o
          ? { prefix: n ?? 4, x: i, y: o }
          : { prefix: n, x: i };
      })();
      return o(n), n;
    }
    function u(e) {
      return l(t.fromBytes(e));
    }
    function l(e) {
      if (132 !== e.length && 130 !== e.length && 68 !== e.length)
        throw new g({ publicKey: e });
      if (130 === e.length)
        return {
          prefix: 4,
          x: BigInt(t.slice(e, 0, 32)),
          y: BigInt(t.slice(e, 32, 64)),
        };
      if (132 === e.length) {
        let r = Number(t.slice(e, 0, 1));
        return {
          prefix: r,
          x: BigInt(t.slice(e, 1, 33)),
          y: BigInt(t.slice(e, 33, 65)),
        };
      }
      return { prefix: Number(t.slice(e, 0, 1)), x: BigInt(t.slice(e, 1, 33)) };
    }
    function f(e, t = {}) {
      return r.fromHex(c(e, t));
    }
    function c(e, r = {}) {
      o(e);
      let { prefix: n, x: i, y: s } = e,
        { includePrefix: a = !0 } = r;
      return t.concat(
        a ? t.fromNumber(n, { size: 1 }) : "0x",
        t.fromNumber(i, { size: 32 }),
        "bigint" == typeof s ? t.fromNumber(s, { size: 32 }) : "0x"
      );
    }
    function d(e, t = {}) {
      try {
        return o(e, t), !0;
      } catch (e) {
        return !1;
      }
    }
    class m extends n.BaseError {
      constructor({ publicKey: e }) {
        super(`Value \`${i.stringify(e)}\` is not a valid public key.`, {
          metaMessages: [
            "Public key must contain:",
            "- an `x` and `prefix` value (compressed)",
            "- an `x`, `y`, and `prefix` value (uncompressed)",
          ],
        }),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "PublicKey.InvalidError",
          });
      }
    }
    class y extends n.BaseError {
      constructor({ prefix: e, cause: t }) {
        super(`Prefix "${e}" is invalid.`, { cause: t }),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "PublicKey.InvalidPrefixError",
          });
      }
    }
    class b extends n.BaseError {
      constructor() {
        super("Prefix must be 2 or 3 for compressed public keys."),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "PublicKey.InvalidCompressedPrefixError",
          });
      }
    }
    class h extends n.BaseError {
      constructor() {
        super("Prefix must be 4 for uncompressed public keys."),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "PublicKey.InvalidUncompressedPrefixError",
          });
      }
    }
    class g extends n.BaseError {
      constructor({ publicKey: e }) {
        super(`Value \`${e}\` is an invalid public key size.`, {
          metaMessages: [
            "Expected: 33 bytes (compressed + prefix), 64 bytes (uncompressed) or 65 bytes (uncompressed + prefix).",
            `Received ${t.size(t.from(e))} bytes.`,
          ],
        }),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "PublicKey.InvalidSerializedSizeError",
          });
      }
    }
    e.s(
      [
        "InvalidCompressedPrefixError",
        () => b,
        "InvalidError",
        () => m,
        "InvalidPrefixError",
        () => y,
        "InvalidSerializedSizeError",
        () => g,
        "InvalidUncompressedPrefixError",
        () => h,
        "assert",
        () => o,
        "compress",
        () => s,
        "from",
        () => a,
        "fromBytes",
        () => u,
        "fromHex",
        () => l,
        "toBytes",
        () => f,
        "toHex",
        () => c,
        "validate",
        () => d,
      ],
      620046
    );
    var p = e.i(620046);
    e.s(["PublicKey", 0, p], 959103);
  },
  810588,
  870948,
  (e) => {
    "use strict";
    var t = e.i(526539),
      r = e.i(470525);
    let n = BigInt(0),
      i = BigInt(1),
      o = BigInt(2),
      s = BigInt(3),
      a = BigInt(4),
      u = BigInt(5),
      l = BigInt(7),
      f = BigInt(8),
      c = BigInt(9),
      d = BigInt(16);
    function m(e, t) {
      let r = e % t;
      return r >= n ? r : t + r;
    }
    function y(e, t, r) {
      let i = e;
      for (; t-- > n; ) (i *= i), (i %= r);
      return i;
    }
    function b(e, t) {
      if (e === n) throw Error("invert: expected non-zero number");
      if (t <= n) throw Error("invert: expected positive modulus, got " + t);
      let r = m(e, t),
        o = t,
        s = n,
        a = i,
        u = i,
        l = n;
      for (; r !== n; ) {
        let e = o / r,
          t = o % r,
          n = s - u * e,
          i = a - l * e;
        (o = r), (r = t), (s = u), (a = l), (u = n), (l = i);
      }
      if (o !== i) throw Error("invert: does not exist");
      return m(s, t);
    }
    function h(e, t, r) {
      if (!e.eql(e.sqr(t), r)) throw Error("Cannot find square root");
    }
    function g(e, t) {
      let r = (e.ORDER + i) / a,
        n = e.pow(t, r);
      return h(e, n, t), n;
    }
    function p(e, t) {
      let r = (e.ORDER - u) / f,
        n = e.mul(t, o),
        i = e.pow(n, r),
        s = e.mul(t, i),
        a = e.mul(e.mul(s, o), i),
        l = e.mul(s, e.sub(a, e.ONE));
      return h(e, l, t), l;
    }
    function E(e) {
      if (e < s) throw Error("sqrt is not defined for small field");
      let t = e - i,
        r = 0;
      for (; t % o === n; ) (t /= o), r++;
      let a = o,
        u = S(e);
      for (; 1 === x(u, a); )
        if (a++ > 1e3)
          throw Error("Cannot find square root: probably non-prime P");
      if (1 === r) return g;
      let l = u.pow(a, t),
        f = (t + i) / o;
      return function (e, n) {
        if (e.is0(n)) return n;
        if (1 !== x(e, n)) throw Error("Cannot find square root");
        let o = r,
          s = e.mul(e.ONE, l),
          a = e.pow(n, t),
          u = e.pow(n, f);
        for (; !e.eql(a, e.ONE); ) {
          if (e.is0(a)) return e.ZERO;
          let t = 1,
            r = e.sqr(a);
          for (; !e.eql(r, e.ONE); )
            if ((t++, (r = e.sqr(r)), t === o))
              throw Error("Cannot find square root");
          let n = i << BigInt(o - t - 1),
            l = e.pow(s, n);
          (o = t), (s = e.sqr(l)), (a = e.mul(a, s)), (u = e.mul(u, l));
        }
        return u;
      };
    }
    let w = [
      "create",
      "isValid",
      "is0",
      "neg",
      "inv",
      "sqrt",
      "sqr",
      "eql",
      "add",
      "sub",
      "mul",
      "pow",
      "div",
      "addN",
      "subN",
      "mulN",
      "sqrN",
    ];
    function v(e) {
      let r = w.reduce((e, t) => ((e[t] = "function"), e), {
        ORDER: "bigint",
        MASK: "bigint",
        BYTES: "number",
        BITS: "number",
      });
      return (0, t._validateObject)(e, r), e;
    }
    function B(e, t, r = !1) {
      let n = Array(t.length).fill(r ? e.ZERO : void 0),
        i = t.reduce(
          (t, r, i) => (e.is0(r) ? t : ((n[i] = t), e.mul(t, r))),
          e.ONE
        ),
        o = e.inv(i);
      return (
        t.reduceRight(
          (t, r, i) => (e.is0(r) ? t : ((n[i] = e.mul(t, n[i])), e.mul(t, r))),
          o
        ),
        n
      );
    }
    function x(e, t) {
      let r = (e.ORDER - i) / o,
        n = e.pow(t, r),
        s = e.eql(n, e.ONE),
        a = e.eql(n, e.ZERO),
        u = e.eql(n, e.neg(e.ONE));
      if (!s && !a && !u) throw Error("invalid Legendre symbol result");
      return s ? 1 : a ? 0 : -1;
    }
    function O(e, t) {
      void 0 !== t && (0, r.anumber)(t);
      let n = void 0 !== t ? t : e.toString(2).length,
        i = Math.ceil(n / 8);
      return { nBitLength: n, nByteLength: i };
    }
    function S(e, r, o = !1, y = {}) {
      let w, v, x, I;
      if (e <= n) throw Error("invalid field: expected ORDER > 0, got " + e);
      let R = !1;
      if ("object" == typeof r && null != r) {
        if (y.sqrt || o) throw Error("cannot specify opts in two arguments");
        r.BITS && (v = r.BITS),
          r.sqrt && (x = r.sqrt),
          "boolean" == typeof r.isLE && (o = r.isLE),
          "boolean" == typeof r.modFromBytes && (R = r.modFromBytes),
          (I = r.allowedLengths);
      } else "number" == typeof r && (v = r), y.sqrt && (x = y.sqrt);
      let { nBitLength: T, nByteLength: z } = O(e, v);
      if (z > 2048)
        throw Error("invalid field: expected ORDER of <= 2048 bytes");
      let P = Object.freeze({
        ORDER: e,
        isLE: o,
        BITS: T,
        BYTES: z,
        MASK: (0, t.bitMask)(T),
        ZERO: n,
        ONE: i,
        allowedLengths: I,
        create: (t) => m(t, e),
        isValid: (t) => {
          if ("bigint" != typeof t)
            throw Error(
              "invalid field element: expected bigint, got " + typeof t
            );
          return n <= t && t < e;
        },
        is0: (e) => e === n,
        isValidNot0: (e) => !P.is0(e) && P.isValid(e),
        isOdd: (e) => (e & i) === i,
        neg: (t) => m(-t, e),
        eql: (e, t) => e === t,
        sqr: (t) => m(t * t, e),
        add: (t, r) => m(t + r, e),
        sub: (t, r) => m(t - r, e),
        mul: (t, r) => m(t * r, e),
        pow: (e, t) =>
          (function (e, t, r) {
            if (r < n) throw Error("invalid exponent, negatives unsupported");
            if (r === n) return e.ONE;
            if (r === i) return t;
            let o = e.ONE,
              s = t;
            for (; r > n; )
              r & i && (o = e.mul(o, s)), (s = e.sqr(s)), (r >>= i);
            return o;
          })(P, e, t),
        div: (t, r) => m(t * b(r, e), e),
        sqrN: (e) => e * e,
        addN: (e, t) => e + t,
        subN: (e, t) => e - t,
        mulN: (e, t) => e * t,
        inv: (t) => b(t, e),
        sqrt:
          x ||
          ((t) => (
            w ||
              (w = (function (e) {
                if (e % a === s) return g;
                if (e % f === u) return p;
                if (e % d === c) {
                  let t, r, n, i, o, s;
                  return (
                    (t = S(e)),
                    (n = (r = E(e))(t, t.neg(t.ONE))),
                    (i = r(t, n)),
                    (o = r(t, t.neg(n))),
                    (s = (e + l) / d),
                    (e, t) => {
                      let r = e.pow(t, s),
                        a = e.mul(r, n),
                        u = e.mul(r, i),
                        l = e.mul(r, o),
                        f = e.eql(e.sqr(a), t),
                        c = e.eql(e.sqr(u), t);
                      (r = e.cmov(r, a, f)), (a = e.cmov(l, u, c));
                      let d = e.eql(e.sqr(a), t),
                        m = e.cmov(r, a, d);
                      return h(e, m, t), m;
                    }
                  );
                }
                return E(e);
              })(e)),
            w(P, t)
          )),
        toBytes: (e) =>
          o ? (0, t.numberToBytesLE)(e, z) : (0, t.numberToBytesBE)(e, z),
        fromBytes: (r, n = !0) => {
          if (I) {
            if (!I.includes(r.length) || r.length > z)
              throw Error(
                "Field.fromBytes: expected " + I + " bytes, got " + r.length
              );
            let e = new Uint8Array(z);
            e.set(r, o ? 0 : e.length - r.length), (r = e);
          }
          if (r.length !== z)
            throw Error(
              "Field.fromBytes: expected " + z + " bytes, got " + r.length
            );
          let i = o ? (0, t.bytesToNumberLE)(r) : (0, t.bytesToNumberBE)(r);
          if ((R && (i = m(i, e)), !n && !P.isValid(i)))
            throw Error("invalid field element: outside of range 0..ORDER");
          return i;
        },
        invertBatch: (e) => B(P, e),
        cmov: (e, t, r) => (r ? t : e),
      });
      return Object.freeze(P);
    }
    function I(e, t) {
      if (!e.isOdd) throw Error("Field doesn't have isOdd");
      let r = e.sqrt(t);
      return e.isOdd(r) ? e.neg(r) : r;
    }
    function R(e) {
      if ("bigint" != typeof e) throw Error("field order must be bigint");
      return Math.ceil(e.toString(2).length / 8);
    }
    function T(e) {
      let t = R(e);
      return t + Math.ceil(t / 2);
    }
    function z(e, r, n = !1) {
      let o = e.length,
        s = R(r),
        a = T(r);
      if (o < 16 || o < a || o > 1024)
        throw Error("expected " + a + "-1024 bytes of input, got " + o);
      let u =
        m(n ? (0, t.bytesToNumberLE)(e) : (0, t.bytesToNumberBE)(e), r - i) + i;
      return n ? (0, t.numberToBytesLE)(u, s) : (0, t.numberToBytesBE)(u, s);
    }
    e.s(
      [
        "Field",
        () => S,
        "FpInvertBatch",
        () => B,
        "FpSqrtEven",
        () => I,
        "getMinHashLength",
        () => T,
        "isNegativeLE",
        0,
        (e, t) => (m(e, t) & i) === i,
        "mapHashToField",
        () => z,
        "mod",
        () => m,
        "nLength",
        () => O,
        "pow2",
        () => y,
        "validateField",
        () => v,
      ],
      870948
    );
    let P = BigInt(0),
      A = BigInt(1);
    function N(e, t) {
      let r = t.negate();
      return e ? r : t;
    }
    function $(e, t) {
      let r = B(
        e.Fp,
        t.map((e) => e.Z)
      );
      return t.map((t, n) => e.fromAffine(t.toAffine(r[n])));
    }
    function H(e, t) {
      if (!Number.isSafeInteger(e) || e <= 0 || e > t)
        throw Error("invalid window size, expected [1.." + t + "], got W=" + e);
    }
    function U(e, r) {
      H(e, r);
      let n = Math.ceil(r / e) + 1,
        i = 2 ** (e - 1),
        o = 2 ** e;
      return {
        windows: n,
        windowSize: i,
        mask: (0, t.bitMask)(e),
        maxNumber: o,
        shiftBy: BigInt(e),
      };
    }
    function q(e, t, r) {
      let { windowSize: n, mask: i, maxNumber: o, shiftBy: s } = r,
        a = Number(e & i),
        u = e >> s;
      a > n && ((a -= o), (u += A));
      let l = t * n,
        f = l + Math.abs(a) - 1,
        c = 0 === a;
      return {
        nextN: u,
        offset: f,
        isZero: c,
        isNeg: a < 0,
        isNegF: t % 2 != 0,
        offsetF: l,
      };
    }
    let j = new WeakMap(),
      F = new WeakMap();
    function V(e) {
      return F.get(e) || 1;
    }
    function C(e) {
      if (e !== P) throw Error("invalid wNAF");
    }
    class _ {
      constructor(e, t) {
        (this.BASE = e.BASE),
          (this.ZERO = e.ZERO),
          (this.Fn = e.Fn),
          (this.bits = t);
      }
      _unsafeLadder(e, t, r = this.ZERO) {
        let n = e;
        for (; t > P; ) t & A && (r = r.add(n)), (n = n.double()), (t >>= A);
        return r;
      }
      precomputeWindow(e, t) {
        let { windows: r, windowSize: n } = U(t, this.bits),
          i = [],
          o = e,
          s = o;
        for (let e = 0; e < r; e++) {
          (s = o), i.push(s);
          for (let e = 1; e < n; e++) (s = s.add(o)), i.push(s);
          o = s.double();
        }
        return i;
      }
      wNAF(e, t, r) {
        if (!this.Fn.isValid(r)) throw Error("invalid scalar");
        let n = this.ZERO,
          i = this.BASE,
          o = U(e, this.bits);
        for (let e = 0; e < o.windows; e++) {
          let {
            nextN: s,
            offset: a,
            isZero: u,
            isNeg: l,
            isNegF: f,
            offsetF: c,
          } = q(r, e, o);
          (r = s), u ? (i = i.add(N(f, t[c]))) : (n = n.add(N(l, t[a])));
        }
        return C(r), { p: n, f: i };
      }
      wNAFUnsafe(e, t, r, n = this.ZERO) {
        let i = U(e, this.bits);
        for (let e = 0; e < i.windows && r !== P; e++) {
          let { nextN: o, offset: s, isZero: a, isNeg: u } = q(r, e, i);
          if (((r = o), !a)) {
            let e = t[s];
            n = n.add(u ? e.negate() : e);
          }
        }
        return C(r), n;
      }
      getPrecomputes(e, t, r) {
        let n = j.get(t);
        return (
          n ||
            ((n = this.precomputeWindow(t, e)),
            1 !== e && ("function" == typeof r && (n = r(n)), j.set(t, n))),
          n
        );
      }
      cached(e, t, r) {
        let n = V(e);
        return this.wNAF(n, this.getPrecomputes(n, e, r), t);
      }
      unsafe(e, t, r, n) {
        let i = V(e);
        return 1 === i
          ? this._unsafeLadder(e, t, n)
          : this.wNAFUnsafe(i, this.getPrecomputes(i, e, r), t, n);
      }
      createCache(e, t) {
        H(t, this.bits), F.set(e, t), j.delete(e);
      }
      hasCache(e) {
        return 1 !== V(e);
      }
    }
    function M(e, t, r, n) {
      let i = t,
        o = e.ZERO,
        s = e.ZERO;
      for (; r > P || n > P; )
        r & A && (o = o.add(i)),
          n & A && (s = s.add(i)),
          (i = i.double()),
          (r >>= A),
          (n >>= A);
      return { p1: o, p2: s };
    }
    function D(e, r, n, i) {
      if (!Array.isArray(n)) throw Error("array expected");
      n.forEach((t, r) => {
        if (!(t instanceof e)) throw Error("invalid point at index " + r);
      });
      if (!Array.isArray(i)) throw Error("array of scalars expected");
      i.forEach((e, t) => {
        if (!r.isValid(e)) throw Error("invalid scalar at index " + t);
      });
      let o = n.length,
        s = i.length;
      if (o !== s)
        throw Error("arrays of points and scalars must have equal length");
      let a = e.ZERO,
        u = (0, t.bitLen)(BigInt(o)),
        l = 1;
      u > 12 ? (l = u - 3) : u > 4 ? (l = u - 2) : u > 0 && (l = 2);
      let f = (0, t.bitMask)(l),
        c = Array(Number(f) + 1).fill(a),
        d = Math.floor((r.BITS - 1) / l) * l,
        m = a;
      for (let e = d; e >= 0; e -= l) {
        c.fill(a);
        for (let t = 0; t < s; t++) {
          let r = Number((i[t] >> BigInt(e)) & f);
          c[r] = c[r].add(n[t]);
        }
        let t = a;
        for (let e = c.length - 1, r = a; e > 0; e--)
          (r = r.add(c[e])), (t = t.add(r));
        if (((m = m.add(t)), 0 !== e))
          for (let e = 0; e < l; e++) m = m.double();
      }
      return m;
    }
    function L(e, t, r) {
      if (!t) return S(e, { isLE: r });
      if (t.ORDER !== e)
        throw Error("Field.ORDER must match order: Fp == p, Fn == n");
      return v(t), t;
    }
    function Z(e, t, r = {}, n) {
      if ((void 0 === n && (n = "edwards" === e), !t || "object" != typeof t))
        throw Error(`expected valid ${e} CURVE object`);
      for (let e of ["p", "n", "h"]) {
        let r = t[e];
        if (!("bigint" == typeof r && r > P))
          throw Error(`CURVE.${e} must be positive bigint`);
      }
      let i = L(t.p, r.Fp, n),
        o = L(t.n, r.Fn, n);
      for (let r of ["Gx", "Gy", "a", "weierstrass" === e ? "b" : "d"])
        if (!i.isValid(t[r]))
          throw Error(`CURVE.${r} must be valid field element of CURVE.Fp`);
      return { CURVE: (t = Object.freeze(Object.assign({}, t))), Fp: i, Fn: o };
    }
    e.s(
      [
        "_createCurveFields",
        () => Z,
        "mulEndoUnsafe",
        () => M,
        "negateCt",
        () => N,
        "normalizeZ",
        () => $,
        "pippenger",
        () => D,
        "wNAF",
        () => _,
      ],
      810588
    );
  },
  893554,
  5746,
  (e) => {
    "use strict";
    var t = e.i(140965),
      r = e.i(470525),
      n = e.i(526539),
      i = e.i(810588),
      o = e.i(870948);
    let s = (e, t) => (e + (e >= 0 ? t : -t) / d) / t;
    function a(e) {
      if (!["compact", "recovered", "der"].includes(e))
        throw Error(
          'Signature format must be "compact", "recovered", or "der"'
        );
      return e;
    }
    function u(e, t) {
      let r = {};
      for (let n of Object.keys(t)) r[n] = void 0 === e[n] ? t[n] : e[n];
      return (
        (0, n._abool2)(r.lowS, "lowS"),
        (0, n._abool2)(r.prehash, "prehash"),
        void 0 !== r.format && a(r.format),
        r
      );
    }
    let l = {
        Err: class extends Error {
          constructor(e = "") {
            super(e);
          }
        },
        _tlv: {
          encode: (e, t) => {
            let { Err: r } = l;
            if (e < 0 || e > 256) throw new r("tlv.encode: wrong tag");
            if (1 & t.length) throw new r("tlv.encode: unpadded data");
            let i = t.length / 2,
              o = (0, n.numberToHexUnpadded)(i);
            if ((o.length / 2) & 128)
              throw new r("tlv.encode: long form length too big");
            let s =
              i > 127 ? (0, n.numberToHexUnpadded)((o.length / 2) | 128) : "";
            return (0, n.numberToHexUnpadded)(e) + s + o + t;
          },
          decode(e, t) {
            let { Err: r } = l,
              n = 0;
            if (e < 0 || e > 256) throw new r("tlv.encode: wrong tag");
            if (t.length < 2 || t[n++] !== e)
              throw new r("tlv.decode: wrong tlv");
            let i = t[n++],
              o = 0;
            if (128 & i) {
              let e = 127 & i;
              if (!e)
                throw new r(
                  "tlv.decode(long): indefinite length not supported"
                );
              if (e > 4)
                throw new r("tlv.decode(long): byte length is too big");
              let s = t.subarray(n, n + e);
              if (s.length !== e)
                throw new r("tlv.decode: length bytes not complete");
              if (0 === s[0])
                throw new r("tlv.decode(long): zero leftmost byte");
              for (let e of s) o = (o << 8) | e;
              if (((n += e), o < 128))
                throw new r("tlv.decode(long): not minimal encoding");
            } else o = i;
            let s = t.subarray(n, n + o);
            if (s.length !== o) throw new r("tlv.decode: wrong value length");
            return { v: s, l: t.subarray(n + o) };
          },
        },
        _int: {
          encode(e) {
            let { Err: t } = l;
            if (e < f)
              throw new t("integer: negative integers are not allowed");
            let r = (0, n.numberToHexUnpadded)(e);
            if ((8 & Number.parseInt(r[0], 16) && (r = "00" + r), 1 & r.length))
              throw new t("unexpected DER parsing assertion: unpadded hex");
            return r;
          },
          decode(e) {
            let { Err: t } = l;
            if (128 & e[0]) throw new t("invalid signature integer: negative");
            if (0 === e[0] && !(128 & e[1]))
              throw new t(
                "invalid signature integer: unnecessary leading zero"
              );
            return (0, n.bytesToNumberBE)(e);
          },
        },
        toSig(e) {
          let { Err: t, _int: r, _tlv: i } = l,
            o = (0, n.ensureBytes)("signature", e),
            { v: s, l: a } = i.decode(48, o);
          if (a.length)
            throw new t("invalid signature: left bytes after parsing");
          let { v: u, l: f } = i.decode(2, s),
            { v: c, l: d } = i.decode(2, f);
          if (d.length)
            throw new t("invalid signature: left bytes after parsing");
          return { r: r.decode(u), s: r.decode(c) };
        },
        hexFromSig(e) {
          let { _tlv: t, _int: r } = l,
            n = t.encode(2, r.encode(e.r)),
            i = t.encode(2, r.encode(e.s));
          return t.encode(48, n + i);
        },
      },
      f = BigInt(0),
      c = BigInt(1),
      d = BigInt(2),
      m = BigInt(3),
      y = BigInt(4);
    function b(e, t) {
      let r,
        { BYTES: i } = e;
      if ("bigint" == typeof t) r = t;
      else {
        let o = (0, n.ensureBytes)("private key", t);
        try {
          r = e.fromBytes(o);
        } catch (e) {
          throw Error(
            `invalid private key: expected ui8a of size ${i}, got ${typeof t}`
          );
        }
      }
      if (!e.isValidNot0(r))
        throw Error("invalid private key: out of range [1..N-1]");
      return r;
    }
    function h(e) {
      return Uint8Array.of(e ? 2 : 3);
    }
    function g(e, t) {
      (0, o.validateField)(e);
      let { A: r, B: n, Z: i } = t;
      if (!e.isValid(r) || !e.isValid(n) || !e.isValid(i))
        throw Error("mapToCurveSimpleSWU: invalid opts");
      let s = (function (e, t) {
        let r = e.ORDER,
          n = f;
        for (let e = r - c; e % d === f; e /= d) n += c;
        let i = n,
          o = d << (i - c - c),
          s = o * d,
          a = (r - c) / s,
          u = (a - c) / d,
          l = s - c,
          b = e.pow(t, a),
          h = e.pow(t, (a + c) / d),
          g = (t, r) => {
            let n = b,
              s = e.pow(r, l),
              a = e.sqr(s);
            a = e.mul(a, r);
            let f = e.mul(t, a);
            (f = e.pow(f, u)),
              (f = e.mul(f, s)),
              (s = e.mul(f, r)),
              (a = e.mul(f, t));
            let m = e.mul(a, s);
            f = e.pow(m, o);
            let y = e.eql(f, e.ONE);
            (s = e.mul(a, h)),
              (f = e.mul(m, n)),
              (a = e.cmov(s, a, y)),
              (m = e.cmov(f, m, y));
            for (let t = i; t > c; t--) {
              let r = t - d;
              r = d << (r - c);
              let i = e.pow(m, r),
                o = e.eql(i, e.ONE);
              (s = e.mul(a, n)),
                (n = e.mul(n, n)),
                (i = e.mul(m, n)),
                (a = e.cmov(s, a, o)),
                (m = e.cmov(i, m, o));
            }
            return { isValid: y, value: a };
          };
        if (e.ORDER % y === m) {
          let r = (e.ORDER - m) / y,
            n = e.sqrt(e.neg(t));
          g = (t, i) => {
            let o = e.sqr(i),
              s = e.mul(t, i);
            o = e.mul(o, s);
            let a = e.pow(o, r);
            a = e.mul(a, s);
            let u = e.mul(a, n),
              l = e.mul(e.sqr(a), i),
              f = e.eql(l, t),
              c = e.cmov(u, a, f);
            return { isValid: f, value: c };
          };
        }
        return g;
      })(e, i);
      if (!e.isOdd) throw Error("Field does not have .isOdd()");
      return (t) => {
        let a, u, l, f, c, d, m, y;
        (a = e.sqr(t)),
          (a = e.mul(a, i)),
          (u = e.sqr(a)),
          (u = e.add(u, a)),
          (l = e.add(u, e.ONE)),
          (l = e.mul(l, n)),
          (f = e.cmov(i, e.neg(u), !e.eql(u, e.ZERO))),
          (f = e.mul(f, r)),
          (u = e.sqr(l)),
          (d = e.sqr(f)),
          (c = e.mul(d, r)),
          (u = e.add(u, c)),
          (u = e.mul(u, l)),
          (d = e.mul(d, f)),
          (c = e.mul(d, n)),
          (u = e.add(u, c)),
          (m = e.mul(a, l));
        let { isValid: b, value: h } = s(u, d);
        (y = e.mul(a, t)),
          (y = e.mul(y, h)),
          (m = e.cmov(m, l, b)),
          (y = e.cmov(y, h, b));
        let g = e.isOdd(t) === e.isOdd(y);
        y = e.cmov(e.neg(y), y, g);
        let p = (0, o.FpInvertBatch)(e, [f], !0)[0];
        return { x: (m = e.mul(m, p)), y };
      };
    }
    function p(e, t) {
      return {
        secretKey: t.BYTES,
        publicKey: 1 + e.BYTES,
        publicKeyUncompressed: 1 + 2 * e.BYTES,
        publicKeyHasPrefix: !0,
        signature: 2 * t.BYTES,
      };
    }
    function E(e) {
      let g,
        {
          CURVE: E,
          curveOpts: w,
          hash: v,
          ecdsaOpts: B,
        } = (function (e) {
          let t,
            r,
            n,
            i,
            { CURVE: s, curveOpts: a } =
              ((t = {
                a: e.a,
                b: e.b,
                p: e.Fp.ORDER,
                n: e.n,
                h: e.h,
                Gx: e.Gx,
                Gy: e.Gy,
              }),
              (r = e.Fp),
              (n = e.allowedPrivateKeyLengths
                ? Array.from(
                    new Set(
                      e.allowedPrivateKeyLengths.map((e) => Math.ceil(e / 2))
                    )
                  )
                : void 0),
              (i = {
                Fp: r,
                Fn: (0, o.Field)(t.n, {
                  BITS: e.nBitLength,
                  allowedLengths: n,
                  modFromBytes: e.wrapPrivateKey,
                }),
                allowInfinityPoint: e.allowInfinityPoint,
                endo: e.endo,
                isTorsionFree: e.isTorsionFree,
                clearCofactor: e.clearCofactor,
                fromBytes: e.fromBytes,
                toBytes: e.toBytes,
              }),
              { CURVE: t, curveOpts: i }),
            u = {
              hmac: e.hmac,
              randomBytes: e.randomBytes,
              lowS: e.lowS,
              bits2int: e.bits2int,
              bits2int_modN: e.bits2int_modN,
            };
          return { CURVE: s, curveOpts: a, hash: e.hash, ecdsaOpts: u };
        })(e),
        x = (function (e, i, s = {}) {
          (0, r.ahash)(i),
            (0, n._validateObject)(
              s,
              {},
              {
                hmac: "function",
                lowS: "boolean",
                randomBytes: "function",
                bits2int: "function",
                bits2int_modN: "function",
              }
            );
          let m = s.randomBytes || r.randomBytes,
            y =
              s.hmac ||
              ((e, ...n) => (0, t.hmac)(i, e, (0, r.concatBytes)(...n))),
            { Fp: g, Fn: E } = e,
            { ORDER: w, BITS: v } = E,
            {
              keygen: B,
              getPublicKey: x,
              getSharedSecret: O,
              utils: S,
              lengths: I,
            } = (function (e, t = {}) {
              let { Fn: i } = e,
                s = t.randomBytes || r.randomBytes,
                a = Object.assign(p(e.Fp, i), {
                  seed: (0, o.getMinHashLength)(i.ORDER),
                });
              function u(e) {
                try {
                  return !!b(i, e);
                } catch (e) {
                  return !1;
                }
              }
              function l(e = s(a.seed)) {
                return (0, o.mapHashToField)(
                  (0, n._abytes2)(e, a.seed, "seed"),
                  i.ORDER
                );
              }
              function f(t, r = !0) {
                return e.BASE.multiply(b(i, t)).toBytes(r);
              }
              function c(t) {
                if ("bigint" == typeof t) return !1;
                if (t instanceof e) return !0;
                let {
                  secretKey: r,
                  publicKey: o,
                  publicKeyUncompressed: s,
                } = a;
                if (i.allowedLengths || r === o) return;
                let u = (0, n.ensureBytes)("key", t).length;
                return u === o || u === s;
              }
              return Object.freeze({
                getPublicKey: f,
                getSharedSecret: function (t, r, n = !0) {
                  if (!0 === c(t)) throw Error("first arg must be private key");
                  if (!1 === c(r)) throw Error("second arg must be public key");
                  let o = b(i, t);
                  return e.fromHex(r).multiply(o).toBytes(n);
                },
                keygen: function (e) {
                  let t = l(e);
                  return { secretKey: t, publicKey: f(t) };
                },
                Point: e,
                utils: {
                  isValidSecretKey: u,
                  isValidPublicKey: function (t, r) {
                    let { publicKey: n, publicKeyUncompressed: i } = a;
                    try {
                      let o = t.length;
                      if ((!0 === r && o !== n) || (!1 === r && o !== i))
                        return !1;
                      return !!e.fromBytes(t);
                    } catch (e) {
                      return !1;
                    }
                  },
                  randomSecretKey: l,
                  isValidPrivateKey: u,
                  randomPrivateKey: l,
                  normPrivateKeyToScalar: (e) => b(i, e),
                  precompute: (t = 8, r = e.BASE) => r.precompute(t, !1),
                },
                lengths: a,
              });
            })(e, s),
            R = {
              prehash: !1,
              lowS: "boolean" == typeof s.lowS && s.lowS,
              format: void 0,
              extraEntropy: !1,
            },
            T = "compact";
          function z(e, t) {
            if (!E.isValidNot0(t))
              throw Error(
                `invalid signature ${e}: out of range 1..Point.Fn.ORDER`
              );
            return t;
          }
          class P {
            constructor(e, t, r) {
              (this.r = z("r", e)),
                (this.s = z("s", t)),
                null != r && (this.recovery = r),
                Object.freeze(this);
            }
            static fromBytes(e, t = T) {
              var r, i;
              let o, s;
              if (
                ((r = e),
                a((i = t)),
                (s = I.signature),
                (0, n._abytes2)(
                  r,
                  "compact" === i ? s : "recovered" === i ? s + 1 : void 0,
                  `${i} signature`
                ),
                "der" === t)
              ) {
                let { r: t, s: r } = l.toSig((0, n._abytes2)(e));
                return new P(t, r);
              }
              "recovered" === t &&
                ((o = e[0]), (t = "compact"), (e = e.subarray(1)));
              let u = E.BYTES,
                f = e.subarray(0, u),
                c = e.subarray(u, 2 * u);
              return new P(E.fromBytes(f), E.fromBytes(c), o);
            }
            static fromHex(e, t) {
              return this.fromBytes((0, r.hexToBytes)(e), t);
            }
            addRecoveryBit(e) {
              return new P(this.r, this.s, e);
            }
            recoverPublicKey(t) {
              let i = g.ORDER,
                { r: o, s, recovery: a } = this;
              if (null == a || ![0, 1, 2, 3].includes(a))
                throw Error("recovery id invalid");
              if (w * d < i && a > 1)
                throw Error("recovery id is ambiguous for h>1 curve");
              let u = 2 === a || 3 === a ? o + w : o;
              if (!g.isValid(u)) throw Error("recovery id 2 or 3 invalid");
              let l = g.toBytes(u),
                f = e.fromBytes((0, r.concatBytes)(h((1 & a) == 0), l)),
                c = E.inv(u),
                m = N((0, n.ensureBytes)("msgHash", t)),
                y = E.create(-m * c),
                b = E.create(s * c),
                p = e.BASE.multiplyUnsafe(y).add(f.multiplyUnsafe(b));
              if (p.is0()) throw Error("point at infinify");
              return p.assertValidity(), p;
            }
            hasHighS() {
              return this.s > w >> c;
            }
            toBytes(e = T) {
              if ((a(e), "der" === e))
                return (0, r.hexToBytes)(l.hexFromSig(this));
              let t = E.toBytes(this.r),
                n = E.toBytes(this.s);
              if ("recovered" === e) {
                if (null == this.recovery)
                  throw Error("recovery bit must be present");
                return (0, r.concatBytes)(Uint8Array.of(this.recovery), t, n);
              }
              return (0, r.concatBytes)(t, n);
            }
            toHex(e) {
              return (0, r.bytesToHex)(this.toBytes(e));
            }
            assertValidity() {}
            static fromCompact(e) {
              return P.fromBytes((0, n.ensureBytes)("sig", e), "compact");
            }
            static fromDER(e) {
              return P.fromBytes((0, n.ensureBytes)("sig", e), "der");
            }
            normalizeS() {
              return this.hasHighS()
                ? new P(this.r, E.neg(this.s), this.recovery)
                : this;
            }
            toDERRawBytes() {
              return this.toBytes("der");
            }
            toDERHex() {
              return (0, r.bytesToHex)(this.toBytes("der"));
            }
            toCompactRawBytes() {
              return this.toBytes("compact");
            }
            toCompactHex() {
              return (0, r.bytesToHex)(this.toBytes("compact"));
            }
          }
          let A =
              s.bits2int ||
              function (e) {
                if (e.length > 8192) throw Error("input is too large");
                let t = (0, n.bytesToNumberBE)(e),
                  r = 8 * e.length - v;
                return r > 0 ? t >> BigInt(r) : t;
              },
            N =
              s.bits2int_modN ||
              function (e) {
                return E.create(A(e));
              },
            $ = (0, n.bitMask)(v);
          function H(e) {
            return (0, n.aInRange)("num < 2^" + v, e, f, $), E.toBytes(e);
          }
          function U(e, t) {
            return (
              (0, n._abytes2)(e, void 0, "message"),
              t ? (0, n._abytes2)(i(e), void 0, "prehashed message") : e
            );
          }
          return Object.freeze({
            keygen: B,
            getPublicKey: x,
            getSharedSecret: O,
            utils: S,
            lengths: I,
            Point: e,
            sign: function (t, o, s = {}) {
              let { seed: a, k2sig: l } = (function (t, i, o) {
                if (["recovered", "canonical"].some((e) => e in o))
                  throw Error("sign() legacy options not supported");
                let { lowS: s, prehash: a, extraEntropy: l } = u(o, R),
                  d = N((t = U(t, a))),
                  y = b(E, i),
                  h = [H(y), H(d)];
                if (null != l && !1 !== l) {
                  let e = !0 === l ? m(I.secretKey) : l;
                  h.push((0, n.ensureBytes)("extraEntropy", e));
                }
                return {
                  seed: (0, r.concatBytes)(...h),
                  k2sig: function (t) {
                    let r = A(t);
                    if (!E.isValidNot0(r)) return;
                    let n = E.inv(r),
                      i = e.BASE.multiply(r).toAffine(),
                      o = E.create(i.x);
                    if (o === f) return;
                    let a = E.create(n * E.create(d + o * y));
                    if (a === f) return;
                    let u = (2 * (i.x !== o)) | Number(i.y & c),
                      l = a;
                    return (
                      s && a > w >> c && ((l = E.neg(a)), (u ^= 1)),
                      new P(o, l, u)
                    );
                  },
                };
              })((t = (0, n.ensureBytes)("message", t)), o, s);
              return (0, n.createHmacDrbg)(i.outputLen, E.BYTES, y)(a, l);
            },
            verify: function (t, i, o, s = {}) {
              let { lowS: a, prehash: f, format: c } = u(s, R);
              if (
                ((o = (0, n.ensureBytes)("publicKey", o)),
                (i = U((0, n.ensureBytes)("message", i), f)),
                "strict" in s)
              )
                throw Error("options.strict was renamed to lowS");
              let d =
                void 0 === c
                  ? (function (e) {
                      let t,
                        i = "string" == typeof e || (0, r.isBytes)(e),
                        o =
                          !i &&
                          null !== e &&
                          "object" == typeof e &&
                          "bigint" == typeof e.r &&
                          "bigint" == typeof e.s;
                      if (!i && !o)
                        throw Error(
                          "invalid signature, expected Uint8Array, hex string or Signature instance"
                        );
                      if (o) t = new P(e.r, e.s);
                      else if (i) {
                        try {
                          t = P.fromBytes((0, n.ensureBytes)("sig", e), "der");
                        } catch (e) {
                          if (!(e instanceof l.Err)) throw e;
                        }
                        if (!t)
                          try {
                            t = P.fromBytes(
                              (0, n.ensureBytes)("sig", e),
                              "compact"
                            );
                          } catch (e) {
                            return !1;
                          }
                      }
                      return !!t && t;
                    })(t)
                  : P.fromBytes((0, n.ensureBytes)("sig", t), c);
              if (!1 === d) return !1;
              try {
                let t = e.fromBytes(o);
                if (a && d.hasHighS()) return !1;
                let { r, s: n } = d,
                  s = N(i),
                  u = E.inv(n),
                  l = E.create(s * u),
                  f = E.create(r * u),
                  c = e.BASE.multiplyUnsafe(l).add(t.multiplyUnsafe(f));
                if (c.is0()) return !1;
                return E.create(c.x) === r;
              } catch (e) {
                return !1;
              }
            },
            recoverPublicKey: function (e, t, r = {}) {
              let { prehash: n } = u(r, R);
              return (
                (t = U(t, n)),
                P.fromBytes(e, "recovered").recoverPublicKey(t).toBytes()
              );
            },
            Signature: P,
            hash: i,
          });
        })(
          (function (e, t = {}) {
            let o = (0, i._createCurveFields)("weierstrass", e, t),
              { Fp: a, Fn: u } = o,
              l = o.CURVE,
              { h: d, n: g } = l;
            (0, n._validateObject)(
              t,
              {},
              {
                allowInfinityPoint: "boolean",
                clearCofactor: "function",
                isTorsionFree: "function",
                fromBytes: "function",
                toBytes: "function",
                endo: "object",
                wrapPrivateKey: "boolean",
              }
            );
            let { endo: E } = t;
            if (
              E &&
              (!a.is0(l.a) ||
                "bigint" != typeof E.beta ||
                !Array.isArray(E.basises))
            )
              throw Error(
                'invalid endo: expected "beta": bigint and "basises": array'
              );
            let w = p(a, u);
            function v() {
              if (!a.isOdd)
                throw Error(
                  "compression is not supported: Field does not have .isOdd()"
                );
            }
            let B =
                t.toBytes ||
                function (e, t, i) {
                  let { x: o, y: s } = t.toAffine(),
                    u = a.toBytes(o);
                  if (((0, n._abool2)(i, "isCompressed"), !i))
                    return (0, r.concatBytes)(
                      Uint8Array.of(4),
                      u,
                      a.toBytes(s)
                    );
                  {
                    v();
                    let e = !a.isOdd(s);
                    return (0, r.concatBytes)(h(e), u);
                  }
                },
              x =
                t.fromBytes ||
                function (e) {
                  (0, n._abytes2)(e, void 0, "Point");
                  let { publicKey: t, publicKeyUncompressed: r } = w,
                    i = e.length,
                    o = e[0],
                    s = e.subarray(1);
                  if (i === t && (2 === o || 3 === o)) {
                    let e,
                      t = a.fromBytes(s);
                    if (!a.isValid(t))
                      throw Error("bad point: is not on curve, wrong x");
                    let r = O(t);
                    try {
                      e = a.sqrt(r);
                    } catch (e) {
                      throw Error(
                        "bad point: is not on curve, sqrt error" +
                          (e instanceof Error ? ": " + e.message : "")
                      );
                    }
                    return (
                      v(),
                      ((1 & o) == 1) !== a.isOdd(e) && (e = a.neg(e)),
                      { x: t, y: e }
                    );
                  }
                  if (i === r && 4 === o) {
                    let e = a.BYTES,
                      t = a.fromBytes(s.subarray(0, e)),
                      r = a.fromBytes(s.subarray(e, 2 * e));
                    if (!S(t, r)) throw Error("bad point: is not on curve");
                    return { x: t, y: r };
                  }
                  throw Error(
                    `bad point: got length ${i}, expected compressed=${t} or uncompressed=${r}`
                  );
                };
            function O(e) {
              let t = a.sqr(e),
                r = a.mul(t, e);
              return a.add(a.add(r, a.mul(e, l.a)), l.b);
            }
            function S(e, t) {
              let r = a.sqr(t),
                n = O(e);
              return a.eql(r, n);
            }
            if (!S(l.Gx, l.Gy))
              throw Error("bad curve params: generator point");
            let I = a.mul(a.pow(l.a, m), y),
              R = a.mul(a.sqr(l.b), BigInt(27));
            if (a.is0(a.add(I, R))) throw Error("bad curve params: a or b");
            function T(e, t, r = !1) {
              if (!a.isValid(t) || (r && a.is0(t)))
                throw Error(`bad point coordinate ${e}`);
              return t;
            }
            function z(e) {
              if (!(e instanceof H)) throw Error("ProjectivePoint expected");
            }
            function P(e) {
              if (!E || !E.basises) throw Error("no endo");
              return (function (e, t, r) {
                let [[i, o], [a, u]] = t,
                  l = s(u * e, r),
                  d = s(-o * e, r),
                  m = e - l * i - d * a,
                  y = -l * o - d * u,
                  b = m < f,
                  h = y < f;
                b && (m = -m), h && (y = -y);
                let g = (0, n.bitMask)(Math.ceil((0, n.bitLen)(r) / 2)) + c;
                if (m < f || m >= g || y < f || y >= g)
                  throw Error("splitScalar (endomorphism): failed, k=" + e);
                return { k1neg: b, k1: m, k2neg: h, k2: y };
              })(e, E.basises, u.ORDER);
            }
            let A = (0, n.memoized)((e, t) => {
                let { X: r, Y: n, Z: i } = e;
                if (a.eql(i, a.ONE)) return { x: r, y: n };
                let o = e.is0();
                null == t && (t = o ? a.ONE : a.inv(i));
                let s = a.mul(r, t),
                  u = a.mul(n, t),
                  l = a.mul(i, t);
                if (o) return { x: a.ZERO, y: a.ZERO };
                if (!a.eql(l, a.ONE)) throw Error("invZ was invalid");
                return { x: s, y: u };
              }),
              N = (0, n.memoized)((e) => {
                if (e.is0()) {
                  if (t.allowInfinityPoint && !a.is0(e.Y)) return;
                  throw Error("bad point: ZERO");
                }
                let { x: r, y: n } = e.toAffine();
                if (!a.isValid(r) || !a.isValid(n))
                  throw Error("bad point: x or y not field elements");
                if (!S(r, n)) throw Error("bad point: equation left != right");
                if (!e.isTorsionFree())
                  throw Error("bad point: not in prime-order subgroup");
                return !0;
              });
            function $(e, t, r, n, o) {
              return (
                (r = new H(a.mul(r.X, e), r.Y, r.Z)),
                (t = (0, i.negateCt)(n, t)),
                (r = (0, i.negateCt)(o, r)),
                t.add(r)
              );
            }
            class H {
              constructor(e, t, r) {
                (this.X = T("x", e)),
                  (this.Y = T("y", t, !0)),
                  (this.Z = T("z", r)),
                  Object.freeze(this);
              }
              static CURVE() {
                return l;
              }
              static fromAffine(e) {
                let { x: t, y: r } = e || {};
                if (!e || !a.isValid(t) || !a.isValid(r))
                  throw Error("invalid affine point");
                if (e instanceof H) throw Error("projective point not allowed");
                return a.is0(t) && a.is0(r) ? H.ZERO : new H(t, r, a.ONE);
              }
              static fromBytes(e) {
                let t = H.fromAffine(x((0, n._abytes2)(e, void 0, "point")));
                return t.assertValidity(), t;
              }
              static fromHex(e) {
                return H.fromBytes((0, n.ensureBytes)("pointHex", e));
              }
              get x() {
                return this.toAffine().x;
              }
              get y() {
                return this.toAffine().y;
              }
              precompute(e = 8, t = !0) {
                return q.createCache(this, e), t || this.multiply(m), this;
              }
              assertValidity() {
                N(this);
              }
              hasEvenY() {
                let { y: e } = this.toAffine();
                if (!a.isOdd) throw Error("Field doesn't support isOdd");
                return !a.isOdd(e);
              }
              equals(e) {
                z(e);
                let { X: t, Y: r, Z: n } = this,
                  { X: i, Y: o, Z: s } = e,
                  u = a.eql(a.mul(t, s), a.mul(i, n)),
                  l = a.eql(a.mul(r, s), a.mul(o, n));
                return u && l;
              }
              negate() {
                return new H(this.X, a.neg(this.Y), this.Z);
              }
              double() {
                let { a: e, b: t } = l,
                  r = a.mul(t, m),
                  { X: n, Y: i, Z: o } = this,
                  s = a.ZERO,
                  u = a.ZERO,
                  f = a.ZERO,
                  c = a.mul(n, n),
                  d = a.mul(i, i),
                  y = a.mul(o, o),
                  b = a.mul(n, i);
                return (
                  (b = a.add(b, b)),
                  (f = a.mul(n, o)),
                  (f = a.add(f, f)),
                  (s = a.mul(e, f)),
                  (u = a.mul(r, y)),
                  (u = a.add(s, u)),
                  (s = a.sub(d, u)),
                  (u = a.add(d, u)),
                  (u = a.mul(s, u)),
                  (s = a.mul(b, s)),
                  (f = a.mul(r, f)),
                  (y = a.mul(e, y)),
                  (b = a.sub(c, y)),
                  (b = a.mul(e, b)),
                  (b = a.add(b, f)),
                  (f = a.add(c, c)),
                  (c = a.add(f, c)),
                  (c = a.add(c, y)),
                  (c = a.mul(c, b)),
                  (u = a.add(u, c)),
                  (y = a.mul(i, o)),
                  (y = a.add(y, y)),
                  (c = a.mul(y, b)),
                  (s = a.sub(s, c)),
                  (f = a.mul(y, d)),
                  (f = a.add(f, f)),
                  new H(s, u, (f = a.add(f, f)))
                );
              }
              add(e) {
                z(e);
                let { X: t, Y: r, Z: n } = this,
                  { X: i, Y: o, Z: s } = e,
                  u = a.ZERO,
                  f = a.ZERO,
                  c = a.ZERO,
                  d = l.a,
                  y = a.mul(l.b, m),
                  b = a.mul(t, i),
                  h = a.mul(r, o),
                  g = a.mul(n, s),
                  p = a.add(t, r),
                  E = a.add(i, o);
                (p = a.mul(p, E)),
                  (E = a.add(b, h)),
                  (p = a.sub(p, E)),
                  (E = a.add(t, n));
                let w = a.add(i, s);
                return (
                  (E = a.mul(E, w)),
                  (w = a.add(b, g)),
                  (E = a.sub(E, w)),
                  (w = a.add(r, n)),
                  (u = a.add(o, s)),
                  (w = a.mul(w, u)),
                  (u = a.add(h, g)),
                  (w = a.sub(w, u)),
                  (c = a.mul(d, E)),
                  (u = a.mul(y, g)),
                  (c = a.add(u, c)),
                  (u = a.sub(h, c)),
                  (c = a.add(h, c)),
                  (f = a.mul(u, c)),
                  (h = a.add(b, b)),
                  (h = a.add(h, b)),
                  (g = a.mul(d, g)),
                  (E = a.mul(y, E)),
                  (h = a.add(h, g)),
                  (g = a.sub(b, g)),
                  (g = a.mul(d, g)),
                  (E = a.add(E, g)),
                  (b = a.mul(h, E)),
                  (f = a.add(f, b)),
                  (b = a.mul(w, E)),
                  (u = a.mul(p, u)),
                  (u = a.sub(u, b)),
                  (b = a.mul(p, h)),
                  (c = a.mul(w, c)),
                  new H(u, f, (c = a.add(c, b)))
                );
              }
              subtract(e) {
                return this.add(e.negate());
              }
              is0() {
                return this.equals(H.ZERO);
              }
              multiply(e) {
                let r,
                  n,
                  { endo: o } = t;
                if (!u.isValidNot0(e))
                  throw Error("invalid scalar: out of range");
                let s = (e) =>
                  q.cached(this, e, (e) => (0, i.normalizeZ)(H, e));
                if (o) {
                  let { k1neg: t, k1: i, k2neg: a, k2: u } = P(e),
                    { p: l, f: f } = s(i),
                    { p: c, f: d } = s(u);
                  (n = f.add(d)), (r = $(o.beta, l, c, t, a));
                } else {
                  let { p: t, f: i } = s(e);
                  (r = t), (n = i);
                }
                return (0, i.normalizeZ)(H, [r, n])[0];
              }
              multiplyUnsafe(e) {
                let { endo: r } = t;
                if (!u.isValid(e)) throw Error("invalid scalar: out of range");
                if (e === f || this.is0()) return H.ZERO;
                if (e === c) return this;
                if (q.hasCache(this)) return this.multiply(e);
                if (!r) return q.unsafe(this, e);
                {
                  let { k1neg: t, k1: n, k2neg: o, k2: s } = P(e),
                    { p1: a, p2: u } = (0, i.mulEndoUnsafe)(H, this, n, s);
                  return $(r.beta, a, u, t, o);
                }
              }
              multiplyAndAddUnsafe(e, t, r) {
                let n = this.multiplyUnsafe(t).add(e.multiplyUnsafe(r));
                return n.is0() ? void 0 : n;
              }
              toAffine(e) {
                return A(this, e);
              }
              isTorsionFree() {
                let { isTorsionFree: e } = t;
                return d === c || (e ? e(H, this) : q.unsafe(this, g).is0());
              }
              clearCofactor() {
                let { clearCofactor: e } = t;
                return d === c ? this : e ? e(H, this) : this.multiplyUnsafe(d);
              }
              isSmallOrder() {
                return this.multiplyUnsafe(d).is0();
              }
              toBytes(e = !0) {
                return (
                  (0, n._abool2)(e, "isCompressed"),
                  this.assertValidity(),
                  B(H, this, e)
                );
              }
              toHex(e = !0) {
                return (0, r.bytesToHex)(this.toBytes(e));
              }
              toString() {
                return `<Point ${this.is0() ? "ZERO" : this.toHex()}>`;
              }
              get px() {
                return this.X;
              }
              get py() {
                return this.X;
              }
              get pz() {
                return this.Z;
              }
              toRawBytes(e = !0) {
                return this.toBytes(e);
              }
              _setWindowSize(e) {
                this.precompute(e);
              }
              static normalizeZ(e) {
                return (0, i.normalizeZ)(H, e);
              }
              static msm(e, t) {
                return (0, i.pippenger)(H, u, e, t);
              }
              static fromPrivateKey(e) {
                return H.BASE.multiply(b(u, e));
              }
            }
            (H.BASE = new H(l.Gx, l.Gy, a.ONE)),
              (H.ZERO = new H(a.ZERO, a.ONE, a.ZERO)),
              (H.Fp = a),
              (H.Fn = u);
            let U = u.BITS,
              q = new i.wNAF(H, t.endo ? Math.ceil(U / 2) : U);
            return H.BASE.precompute(8), H;
          })(E, w),
          v,
          B
        );
      return (
        (g = x.Point),
        Object.assign({}, x, {
          ProjectivePoint: g,
          CURVE: Object.assign({}, e, (0, o.nLength)(g.Fn.ORDER, g.Fn.BITS)),
        })
      );
    }
    function w(e, t) {
      let r = (t) => E({ ...e, hash: t });
      return { ...r(t), create: r };
    }
    e.s(
      [
        "_normFnElement",
        () => b,
        "mapToCurveSimpleSWU",
        () => g,
        "weierstrass",
        () => E,
      ],
      5746
    ),
      e.s(["createCurve", () => w], 893554);
  },
  933795,
  (e) => {
    "use strict";
    var t = e.i(526539),
      r = e.i(470525),
      n = e.i(870948);
    let i = t.bytesToNumberBE;
    function o(e, t) {
      if ((s(e), s(t), e < 0 || e >= 1 << (8 * t)))
        throw Error("invalid I2OSP input: " + e);
      let r = Array.from({ length: t }).fill(0);
      for (let n = t - 1; n >= 0; n--) (r[n] = 255 & e), (e >>>= 8);
      return new Uint8Array(r);
    }
    function s(e) {
      if (!Number.isSafeInteger(e)) throw Error("number expected");
    }
    function a(e) {
      if (!(0, r.isBytes)(e) && "string" != typeof e)
        throw Error("DST must be Uint8Array or string");
      return "string" == typeof e ? (0, r.utf8ToBytes)(e) : e;
    }
    function u(e, t, n, i) {
      (0, r.abytes)(e),
        s(n),
        (t = a(t)).length > 255 &&
          (t = i(
            (0, r.concatBytes)((0, r.utf8ToBytes)("H2C-OVERSIZE-DST-"), t)
          ));
      let { outputLen: u, blockLen: l } = i,
        f = Math.ceil(n / u);
      if (n > 65535 || f > 255)
        throw Error("expand_message_xmd: invalid lenInBytes");
      let c = (0, r.concatBytes)(t, o(t.length, 1)),
        d = o(0, l),
        m = o(n, 2),
        y = Array(f),
        b = i((0, r.concatBytes)(d, e, m, o(0, 1), c));
      y[0] = i((0, r.concatBytes)(b, o(1, 1), c));
      for (let e = 1; e <= f; e++) {
        let t = [
          (function (e, t) {
            let r = new Uint8Array(e.length);
            for (let n = 0; n < e.length; n++) r[n] = e[n] ^ t[n];
            return r;
          })(b, y[e - 1]),
          o(e + 1, 1),
          c,
        ];
        y[e] = i((0, r.concatBytes)(...t));
      }
      return (0, r.concatBytes)(...y).slice(0, n);
    }
    function l(e, l, f) {
      let c;
      (0, t._validateObject)(f, {
        p: "bigint",
        m: "number",
        k: "number",
        hash: "function",
      });
      let { p: d, k: m, m: y, hash: b, expand: h, DST: g } = f;
      if (!(0, t.isHash)(f.hash)) throw Error("expected valid hash");
      (0, r.abytes)(e), s(l);
      let p = Math.ceil((d.toString(2).length + m) / 8),
        E = l * y * p;
      if ("xmd" === h) c = u(e, g, E, b);
      else if ("xof" === h)
        c = (function (e, t, n, i, u) {
          if (((0, r.abytes)(e), s(n), (t = a(t)).length > 255)) {
            let e = Math.ceil((2 * i) / 8);
            t = u
              .create({ dkLen: e })
              .update((0, r.utf8ToBytes)("H2C-OVERSIZE-DST-"))
              .update(t)
              .digest();
          }
          if (n > 65535 || t.length > 255)
            throw Error("expand_message_xof: invalid lenInBytes");
          return u
            .create({ dkLen: n })
            .update(e)
            .update(o(n, 2))
            .update(t)
            .update(o(t.length, 1))
            .digest();
        })(e, g, E, m, b);
      else if ("_internal_pass" === h) c = e;
      else throw Error('expand must be "xmd" or "xof"');
      let w = Array(l);
      for (let e = 0; e < l; e++) {
        let t = Array(y);
        for (let r = 0; r < y; r++) {
          let o = p * (r + e * y),
            s = c.subarray(o, o + p);
          t[r] = (0, n.mod)(i(s), d);
        }
        w[e] = t;
      }
      return w;
    }
    function f(e, t) {
      let r = t.map((e) => Array.from(e).reverse());
      return (t, i) => {
        let [o, s, a, u] = r.map((r) =>
            r.reduce((r, n) => e.add(e.mul(r, t), n))
          ),
          [l, f] = (0, n.FpInvertBatch)(e, [s, u], !0);
        return (t = e.mul(o, l)), (i = e.mul(i, e.mul(a, f))), { x: t, y: i };
      };
    }
    let c = (0, r.utf8ToBytes)("HashToScalar-");
    function d(e, t, r) {
      if ("function" != typeof t) throw Error("mapToCurve() must be defined");
      function n(r) {
        return e.fromAffine(t(r));
      }
      function i(t) {
        let r = t.clearCofactor();
        return r.equals(e.ZERO) ? e.ZERO : (r.assertValidity(), r);
      }
      return {
        defaults: r,
        hashToCurve(e, t) {
          let o = l(e, 2, Object.assign({}, r, t)),
            s = n(o[0]),
            a = n(o[1]);
          return i(s.add(a));
        },
        encodeToCurve(e, t) {
          let o = r.encodeDST ? { DST: r.encodeDST } : {};
          return i(n(l(e, 1, Object.assign({}, r, o, t))[0]));
        },
        mapToCurve(e) {
          if (!Array.isArray(e)) throw Error("expected array of bigints");
          for (let t of e)
            if ("bigint" != typeof t) throw Error("expected array of bigints");
          return i(n(e));
        },
        hashToScalar: (t, n) =>
          l(
            t,
            1,
            Object.assign({}, r, { p: e.Fn.ORDER, m: 1, DST: c }, n)
          )[0][0],
      };
    }
    e.s([
      "_DST_scalar",
      0,
      c,
      "createHasher",
      () => d,
      "expand_message_xmd",
      () => u,
      "isogenyMap",
      () => f,
    ]);
  },
  776267,
  (e) => {
    "use strict";
    var t = e.i(44314),
      r = e.i(470525),
      n = e.i(893554),
      i = e.i(933795),
      o = e.i(870948),
      s = e.i(5746),
      a = e.i(526539);
    let u = {
        p: BigInt(
          "0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"
        ),
        n: BigInt(
          "0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"
        ),
        h: BigInt(1),
        a: BigInt(0),
        b: BigInt(7),
        Gx: BigInt(
          "0x79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798"
        ),
        Gy: BigInt(
          "0x483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8"
        ),
      },
      l = {
        beta: BigInt(
          "0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"
        ),
        basises: [
          [
            BigInt("0x3086d221a7d46bcde86c90e49284eb15"),
            -BigInt("0xe4437ed6010e88286f547fa90abfe4c3"),
          ],
          [
            BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),
            BigInt("0x3086d221a7d46bcde86c90e49284eb15"),
          ],
        ],
      },
      f = BigInt(0),
      c = BigInt(2),
      d = (0, o.Field)(u.p, {
        sqrt: function (e) {
          let t = u.p,
            r = BigInt(3),
            n = BigInt(6),
            i = BigInt(11),
            s = BigInt(22),
            a = BigInt(23),
            l = BigInt(44),
            f = BigInt(88),
            m = (e * e * e) % t,
            y = (m * m * e) % t,
            b = ((0, o.pow2)(y, r, t) * y) % t,
            h = ((0, o.pow2)(b, r, t) * y) % t,
            g = ((0, o.pow2)(h, c, t) * m) % t,
            p = ((0, o.pow2)(g, i, t) * g) % t,
            E = ((0, o.pow2)(p, s, t) * p) % t,
            w = ((0, o.pow2)(E, l, t) * E) % t,
            v = ((0, o.pow2)(w, f, t) * w) % t,
            B = ((0, o.pow2)(v, l, t) * E) % t,
            x = ((0, o.pow2)(B, r, t) * y) % t,
            O = ((0, o.pow2)(x, a, t) * p) % t,
            S = ((0, o.pow2)(O, n, t) * m) % t,
            I = (0, o.pow2)(S, c, t);
          if (!d.eql(d.sqr(I), e)) throw Error("Cannot find square root");
          return I;
        },
      }),
      m = (0, n.createCurve)({ ...u, Fp: d, lowS: !0, endo: l }, t.sha256);
    m.Point;
    a.bytesToNumberBE;
    let y = (0, i.isogenyMap)(
        d,
        [
          [
            "0x8e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38daaaaa8c7",
            "0x7d3d4c80bc321d5b9f315cea7fd44c5d595d2fc0bf63b92dfff1044f17c6581",
            "0x534c328d23f234e6e2a413deca25caece4506144037c40314ecbd0b53d9dd262",
            "0x8e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38daaaaa88c",
          ],
          [
            "0xd35771193d94918a9ca34ccbb7b640dd86cd409542f8487d9fe6b745781eb49b",
            "0xedadc6f64383dc1df7c4b2d51b54225406d36b641f5e41bbc52a56612a8c6d14",
            "0x0000000000000000000000000000000000000000000000000000000000000001",
          ],
          [
            "0x4bda12f684bda12f684bda12f684bda12f684bda12f684bda12f684b8e38e23c",
            "0xc75e0c32d5cb7c0fa9d0a54b12a0a6d5647ab046d686da6fdffc90fc201d71a3",
            "0x29a6194691f91a73715209ef6512e576722830a201be2018a765e85a9ecee931",
            "0x2f684bda12f684bda12f684bda12f684bda12f684bda12f684bda12f38e38d84",
          ],
          [
            "0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffff93b",
            "0x7a06534bb8bdb49fd5e9e6632722c2989467c1bfc8e8d978dfb425d2685c2573",
            "0x6484aa716545ca2cf3a70c3fa8fe337e0a3d21162f0d6299a7bf8192bfd2a76f",
            "0x0000000000000000000000000000000000000000000000000000000000000001",
          ],
        ].map((e) => e.map((e) => BigInt(e)))
      ),
      b = (0, s.mapToCurveSimpleSWU)(d, {
        A: BigInt(
          "0x3f8731abdd661adca08a5558f0f5d272e953d363cb6f0e5d405447c01a444533"
        ),
        B: BigInt("1771"),
        Z: d.create(BigInt("-11")),
      });
    (0, i.createHasher)(
      m.Point,
      (e) => {
        let { x: t, y: r } = b(d.create(e[0]));
        return y(t, r);
      },
      {
        DST: "secp256k1_XMD:SHA-256_SSWU_RO_",
        encodeDST: "secp256k1_XMD:SHA-256_SSWU_NU_",
        p: d.ORDER,
        m: 1,
        k: 128,
        expand: "xmd",
        hash: t.sha256,
      }
    ),
      e.s(["secp256k1", 0, m]);
  },
  962187,
  779591,
  (e) => {
    "use strict";
    var t = e.i(776267),
      r = e.i(759384),
      n = e.i(602376),
      i = e.i(284251),
      o = e.i(382721);
    let s = 2n ** 256n - 1n;
    function a(e, t = {}) {
      let { recovered: r } = t;
      if (void 0 === e.r || void 0 === e.s || (r && void 0 === e.yParity))
        throw new T({ signature: e });
      if (e.r < 0n || e.r > s) throw new z({ value: e.r });
      if (e.s < 0n || e.s > s) throw new P({ value: e.s });
      if ("number" == typeof e.yParity && 0 !== e.yParity && 1 !== e.yParity)
        throw new A({ value: e.yParity });
    }
    function u(e) {
      return l(i.fromBytes(e));
    }
    function l(e) {
      if (130 !== e.length && 132 !== e.length) throw new R({ signature: e });
      let t = BigInt(i.slice(e, 0, 32)),
        r = BigInt(i.slice(e, 32, 64)),
        n = (() => {
          let t = Number(`0x${e.slice(130)}`);
          if (!Number.isNaN(t))
            try {
              return S(t);
            } catch {
              throw new A({ value: t });
            }
        })();
      return void 0 === n ? { r: t, s: r } : { r: t, s: r, yParity: n };
    }
    function f(e) {
      if (void 0 !== e.r && void 0 !== e.s) return c(e);
    }
    function c(e) {
      let t =
        "string" == typeof e
          ? l(e)
          : e instanceof Uint8Array
          ? u(e)
          : "string" == typeof e.r
          ? b(e)
          : e.v
          ? y(e)
          : {
              r: e.r,
              s: e.s,
              ...(void 0 !== e.yParity ? { yParity: e.yParity } : {}),
            };
      return a(t), t;
    }
    function d(e) {
      return m(i.fromBytes(e));
    }
    function m(e) {
      let { r, s: n } = t.secp256k1.Signature.fromDER(i.from(e).slice(2));
      return { r, s: n };
    }
    function y(e) {
      return { r: e.r, s: e.s, yParity: S(e.v) };
    }
    function b(e) {
      let t = (() => {
        let t = e.v ? Number(e.v) : void 0,
          r = e.yParity ? Number(e.yParity) : void 0;
        if (
          ("number" == typeof t && "number" != typeof r && (r = S(t)),
          "number" != typeof r)
        )
          throw new A({ value: e.yParity });
        return r;
      })();
      return { r: BigInt(e.r), s: BigInt(e.s), yParity: t };
    }
    function h(e) {
      let [t, r, n] = e;
      return c({
        r: "0x" === r ? 0n : BigInt(r),
        s: "0x" === n ? 0n : BigInt(n),
        yParity: "0x" === t ? 0 : Number(t),
      });
    }
    function g(e) {
      return r.fromHex(p(e));
    }
    function p(e) {
      a(e);
      let t = e.r,
        r = e.s;
      return i.concat(
        i.fromNumber(t, { size: 32 }),
        i.fromNumber(r, { size: 32 }),
        "number" == typeof e.yParity
          ? i.fromNumber(I(e.yParity), { size: 1 })
          : "0x"
      );
    }
    function E(e) {
      return new t.secp256k1.Signature(e.r, e.s).toDERRawBytes();
    }
    function w(e) {
      let r = new t.secp256k1.Signature(e.r, e.s);
      return `0x${r.toDERHex()}`;
    }
    function v(e) {
      return { r: e.r, s: e.s, v: I(e.yParity) };
    }
    function B(e) {
      let { r: t, s: r, yParity: n } = e;
      return {
        r: i.fromNumber(t, { size: 32 }),
        s: i.fromNumber(r, { size: 32 }),
        yParity: 0 === n ? "0x0" : "0x1",
      };
    }
    function x(e) {
      let { r: t, s: r, yParity: n } = e;
      return [
        n ? "0x01" : "0x",
        0n === t ? "0x" : i.trimLeft(i.fromNumber(t)),
        0n === r ? "0x" : i.trimLeft(i.fromNumber(r)),
      ];
    }
    function O(e, t = {}) {
      try {
        return a(e, t), !0;
      } catch {
        return !1;
      }
    }
    function S(e) {
      if (0 === e || 27 === e) return 0;
      if (1 === e || 28 === e) return 1;
      if (e >= 35) return +(e % 2 == 0);
      throw new N({ value: e });
    }
    function I(e) {
      if (0 === e) return 27;
      if (1 === e) return 28;
      throw new A({ value: e });
    }
    class R extends n.BaseError {
      constructor({ signature: e }) {
        super(`Value \`${e}\` is an invalid signature size.`, {
          metaMessages: [
            "Expected: 64 bytes or 65 bytes.",
            `Received ${i.size(i.from(e))} bytes.`,
          ],
        }),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Signature.InvalidSerializedSizeError",
          });
      }
    }
    class T extends n.BaseError {
      constructor({ signature: e }) {
        super(
          `Signature \`${o.stringify(
            e
          )}\` is missing either an \`r\`, \`s\`, or \`yParity\` property.`
        ),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Signature.MissingPropertiesError",
          });
      }
    }
    class z extends n.BaseError {
      constructor({ value: e }) {
        super(
          `Value \`${e}\` is an invalid r value. r must be a positive integer less than 2^256.`
        ),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Signature.InvalidRError",
          });
      }
    }
    class P extends n.BaseError {
      constructor({ value: e }) {
        super(
          `Value \`${e}\` is an invalid s value. s must be a positive integer less than 2^256.`
        ),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Signature.InvalidSError",
          });
      }
    }
    class A extends n.BaseError {
      constructor({ value: e }) {
        super(
          `Value \`${e}\` is an invalid y-parity value. Y-parity must be 0 or 1.`
        ),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Signature.InvalidYParityError",
          });
      }
    }
    class N extends n.BaseError {
      constructor({ value: e }) {
        super(
          `Value \`${e}\` is an invalid v value. v must be 27, 28 or >=35.`
        ),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Signature.InvalidVError",
          });
      }
    }
    e.s(
      [
        "InvalidRError",
        () => z,
        "InvalidSError",
        () => P,
        "InvalidSerializedSizeError",
        () => R,
        "InvalidVError",
        () => N,
        "InvalidYParityError",
        () => A,
        "MissingPropertiesError",
        () => T,
        "assert",
        () => a,
        "extract",
        () => f,
        "from",
        () => c,
        "fromBytes",
        () => u,
        "fromDerBytes",
        () => d,
        "fromDerHex",
        () => m,
        "fromHex",
        () => l,
        "fromLegacy",
        () => y,
        "fromRpc",
        () => b,
        "fromTuple",
        () => h,
        "toBytes",
        () => g,
        "toDerBytes",
        () => E,
        "toDerHex",
        () => w,
        "toHex",
        () => p,
        "toLegacy",
        () => v,
        "toRpc",
        () => B,
        "toTuple",
        () => x,
        "vToYParity",
        () => S,
        "validate",
        () => O,
        "yParityToV",
        () => I,
      ],
      779591
    );
    var $ = e.i(779591);
    e.s(["Signature", 0, $], 962187);
  },
]);
