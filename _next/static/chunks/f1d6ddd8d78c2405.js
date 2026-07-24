(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  537792,
  (e) => {
    "use strict";
    let t = BigInt(0),
      r = BigInt(1);
    function n(e) {
      return (
        e instanceof Uint8Array ||
        (ArrayBuffer.isView(e) && "Uint8Array" === e.constructor.name)
      );
    }
    function i(e) {
      if (!n(e)) throw Error("Uint8Array expected");
    }
    function a(e, t) {
      if ("boolean" != typeof t) throw Error(e + " boolean expected, got " + t);
    }
    function s(e) {
      let t = e.toString(16);
      return 1 & t.length ? "0" + t : t;
    }
    function o(e) {
      if ("string" != typeof e)
        throw Error("hex string expected, got " + typeof e);
      return "" === e ? t : BigInt("0x" + e);
    }
    let u =
        "function" == typeof Uint8Array.from([]).toHex &&
        "function" == typeof Uint8Array.fromHex,
      f = Array.from({ length: 256 }, (e, t) =>
        t.toString(16).padStart(2, "0")
      );
    function l(e) {
      if ((i(e), u)) return e.toHex();
      let t = "";
      for (let r = 0; r < e.length; r++) t += f[e[r]];
      return t;
    }
    function d(e) {
      return e >= 48 && e <= 57
        ? e - 48
        : e >= 65 && e <= 70
        ? e - 55
        : e >= 97 && e <= 102
        ? e - 87
        : void 0;
    }
    function c(e) {
      if ("string" != typeof e)
        throw Error("hex string expected, got " + typeof e);
      if (u) return Uint8Array.fromHex(e);
      let t = e.length,
        r = t / 2;
      if (t % 2)
        throw Error("hex string expected, got unpadded hex of length " + t);
      let n = new Uint8Array(r);
      for (let t = 0, i = 0; t < r; t++, i += 2) {
        let r = d(e.charCodeAt(i)),
          a = d(e.charCodeAt(i + 1));
        if (void 0 === r || void 0 === a)
          throw Error(
            'hex string expected, got non-hex character "' +
              (e[i] + e[i + 1]) +
              '" at index ' +
              i
          );
        n[t] = 16 * r + a;
      }
      return n;
    }
    function y(e) {
      return o(l(e));
    }
    function p(e) {
      return i(e), o(l(Uint8Array.from(e).reverse()));
    }
    function h(e, t) {
      return c(e.toString(16).padStart(2 * t, "0"));
    }
    function g(e, t) {
      return h(e, t).reverse();
    }
    function w(e, t, r) {
      let i;
      if ("string" == typeof t)
        try {
          i = c(t);
        } catch (t) {
          throw Error(e + " must be hex string or Uint8Array, cause: " + t);
        }
      else if (n(t)) i = Uint8Array.from(t);
      else throw Error(e + " must be hex string or Uint8Array");
      let a = i.length;
      if ("number" == typeof r && a !== r)
        throw Error(e + " of length " + r + " expected, got " + a);
      return i;
    }
    function b(...e) {
      let t = 0;
      for (let r = 0; r < e.length; r++) {
        let n = e[r];
        i(n), (t += n.length);
      }
      let r = new Uint8Array(t);
      for (let t = 0, n = 0; t < e.length; t++) {
        let i = e[t];
        r.set(i, n), (n += i.length);
      }
      return r;
    }
    function m(e, t) {
      if (e.length !== t.length) return !1;
      let r = 0;
      for (let n = 0; n < e.length; n++) r |= e[n] ^ t[n];
      return 0 === r;
    }
    function A(e) {
      if ("string" != typeof e) throw Error("string expected");
      return new Uint8Array(new TextEncoder().encode(e));
    }
    let U = (e) => "bigint" == typeof e && t <= e;
    function x(e, t, r) {
      return U(e) && U(t) && U(r) && t <= e && e < r;
    }
    function v(e, t, r, n) {
      if (!x(t, r, n))
        throw Error(
          "expected valid " + e + ": " + r + " <= n < " + n + ", got " + t
        );
    }
    function T(e) {
      let n;
      for (n = 0; e > t; e >>= r, n += 1);
      return n;
    }
    let E = (e) => new Uint8Array(e);
    function D(e, t, r) {
      if ("number" != typeof e || e < 2)
        throw Error("hashLen must be a number");
      if ("number" != typeof t || t < 2)
        throw Error("qByteLen must be a number");
      if ("function" != typeof r) throw Error("hmacFn must be a function");
      let n = E(e),
        i = E(e),
        a = 0,
        s = () => {
          n.fill(1), i.fill(0), (a = 0);
        },
        o = (...e) => r(i, n, ...e),
        u = (e = E(0)) => {
          let t;
          if (
            ((i = o(((t = [0]), Uint8Array.from(t)), e)),
            (n = o()),
            0 !== e.length)
          ) {
            let t;
            (i = o(((t = [1]), Uint8Array.from(t)), e)), (n = o());
          }
        },
        f = () => {
          if (a++ >= 1e3) throw Error("drbg: tried 1000 values");
          let e = 0,
            r = [];
          for (; e < t; ) {
            let t = (n = o()).slice();
            r.push(t), (e += n.length);
          }
          return b(...r);
        };
      return (e, t) => {
        let r;
        for (s(), u(e); !(r = t(f())); ) u();
        return s(), r;
      };
    }
    let I = {
      bigint: (e) => "bigint" == typeof e,
      function: (e) => "function" == typeof e,
      boolean: (e) => "boolean" == typeof e,
      string: (e) => "string" == typeof e,
      stringOrUint8Array: (e) => "string" == typeof e || n(e),
      isSafeInteger: (e) => Number.isSafeInteger(e),
      array: (e) => Array.isArray(e),
      field: (e, t) => t.Fp.isValid(e),
      hash: (e) => "function" == typeof e && Number.isSafeInteger(e.outputLen),
    };
    function B(e, t, r = {}) {
      let n = (t, r, n) => {
        let i = I[r];
        if ("function" != typeof i) throw Error("invalid validator function");
        let a = e[t];
        if ((!n || void 0 !== a) && !i(a, e))
          throw Error(
            "param " + String(t) + " is invalid. Expected " + r + ", got " + a
          );
      };
      for (let [e, r] of Object.entries(t)) n(e, r, !1);
      for (let [e, t] of Object.entries(r)) n(e, t, !0);
      return e;
    }
    function O(e) {
      let t = new WeakMap();
      return (r, ...n) => {
        let i = t.get(r);
        if (void 0 !== i) return i;
        let a = e(r, ...n);
        return t.set(r, a), a;
      };
    }
    e.s([
      "aInRange",
      () => v,
      "abool",
      () => a,
      "abytes",
      () => i,
      "bitLen",
      () => T,
      "bitMask",
      0,
      (e) => (r << BigInt(e)) - r,
      "bytesToHex",
      () => l,
      "bytesToNumberBE",
      () => y,
      "bytesToNumberLE",
      () => p,
      "concatBytes",
      () => b,
      "createHmacDrbg",
      () => D,
      "ensureBytes",
      () => w,
      "equalBytes",
      () => m,
      "hexToBytes",
      () => c,
      "inRange",
      () => x,
      "isBytes",
      () => n,
      "memoized",
      () => O,
      "numberToBytesBE",
      () => h,
      "numberToBytesLE",
      () => g,
      "numberToHexUnpadded",
      () => s,
      "utf8ToBytes",
      () => A,
      "validateObject",
      () => B,
    ]);
  },
  911450,
  (e) => {
    "use strict";
    var t = e.i(211441);
    e.s(["useWallets", () => t.F]);
  },
  730210,
  (e) => {
    "use strict";
    let t, r;
    e.i(247167);
    var n,
      i = e.i(581949),
      a = e.i(337575),
      s = e.i(675107);
    let o = BigInt(0x100000000 - 1),
      u = BigInt(32);
    function f(e) {
      if (!Number.isSafeInteger(e) || e < 0)
        throw Error("positive integer expected, got " + e);
    }
    function l(e, ...t) {
      if (
        !(
          e instanceof Uint8Array ||
          (ArrayBuffer.isView(e) && "Uint8Array" === e.constructor.name)
        )
      )
        throw Error("Uint8Array expected");
      if (t.length > 0 && !t.includes(e.length))
        throw Error(
          "Uint8Array expected of length " + t + ", got length=" + e.length
        );
    }
    function d(e, t = !0) {
      if (e.destroyed) throw Error("Hash instance has been destroyed");
      if (t && e.finished) throw Error("Hash#digest() has already been called");
    }
    function c(...e) {
      for (let t = 0; t < e.length; t++) e[t].fill(0);
    }
    let y =
      68 === new Uint8Array(new Uint32Array([0x11223344]).buffer)[0]
        ? (e) => e
        : function (e) {
            for (let r = 0; r < e.length; r++) {
              var t;
              e[r] =
                (((t = e[r]) << 24) & 0xff000000) |
                ((t << 8) & 0xff0000) |
                ((t >>> 8) & 65280) |
                ((t >>> 24) & 255);
            }
            return e;
          };
    function p(e) {
      return (
        "string" == typeof e &&
          (e = (function (e) {
            if ("string" != typeof e) throw Error("string expected");
            return new Uint8Array(new TextEncoder().encode(e));
          })(e)),
        l(e),
        e
      );
    }
    class h {}
    let g = BigInt(0),
      w = BigInt(1),
      b = BigInt(2),
      m = BigInt(7),
      A = BigInt(256),
      U = BigInt(113),
      x = [],
      v = [],
      T = [];
    for (let e = 0, t = w, r = 1, n = 0; e < 24; e++) {
      ([r, n] = [n, (2 * r + 3 * n) % 5]),
        x.push(2 * (5 * n + r)),
        v.push((((e + 1) * (e + 2)) / 2) % 64);
      let i = g;
      for (let e = 0; e < 7; e++)
        (t = ((t << w) ^ ((t >> m) * U)) % A) & b &&
          (i ^= w << ((w << BigInt(e)) - w));
      T.push(i);
    }
    let E = (function (e, t = !1) {
        let r = e.length,
          n = new Uint32Array(r),
          i = new Uint32Array(r);
        for (let a = 0; a < r; a++) {
          let { h: r, l: s } = (function (e, t = !1) {
            return t
              ? { h: Number(e & o), l: Number((e >> u) & o) }
              : { h: 0 | Number((e >> u) & o), l: 0 | Number(e & o) };
          })(e[a], t);
          [n[a], i[a]] = [r, s];
        }
        return [n, i];
      })(T, !0),
      D = E[0],
      I = E[1],
      B = (e, t, r) =>
        r > 32
          ? (t << (r - 32)) | (e >>> (64 - r))
          : (e << r) | (t >>> (32 - r)),
      O = (e, t, r) =>
        r > 32
          ? (e << (r - 32)) | (t >>> (64 - r))
          : (t << r) | (e >>> (32 - r));
    class C extends h {
      constructor(e, t, r, n = !1, i = 24) {
        if (
          (super(),
          Object.defineProperty(this, "state", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          Object.defineProperty(this, "pos", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: 0,
          }),
          Object.defineProperty(this, "posOut", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: 0,
          }),
          Object.defineProperty(this, "finished", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: !1,
          }),
          Object.defineProperty(this, "state32", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          Object.defineProperty(this, "destroyed", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: !1,
          }),
          Object.defineProperty(this, "blockLen", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          Object.defineProperty(this, "suffix", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          Object.defineProperty(this, "outputLen", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          Object.defineProperty(this, "enableXOF", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: !1,
          }),
          Object.defineProperty(this, "rounds", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          (this.blockLen = e),
          (this.suffix = t),
          (this.outputLen = r),
          (this.enableXOF = n),
          (this.rounds = i),
          f(r),
          !(0 < e && e < 200))
        )
          throw Error("only keccak-f1600 function is supported");
        (this.state = new Uint8Array(200)),
          (this.state32 = (function (e) {
            return new Uint32Array(
              e.buffer,
              e.byteOffset,
              Math.floor(e.byteLength / 4)
            );
          })(this.state));
      }
      clone() {
        return this._cloneInto();
      }
      keccak() {
        y(this.state32),
          (function (e, t = 24) {
            let r = new Uint32Array(10);
            for (let n = 24 - t; n < 24; n++) {
              for (let t = 0; t < 10; t++)
                r[t] = e[t] ^ e[t + 10] ^ e[t + 20] ^ e[t + 30] ^ e[t + 40];
              for (let t = 0; t < 10; t += 2) {
                let n = (t + 8) % 10,
                  i = (t + 2) % 10,
                  a = r[i],
                  s = r[i + 1],
                  o = B(a, s, 1) ^ r[n],
                  u = O(a, s, 1) ^ r[n + 1];
                for (let r = 0; r < 50; r += 10)
                  (e[t + r] ^= o), (e[t + r + 1] ^= u);
              }
              let t = e[2],
                i = e[3];
              for (let r = 0; r < 24; r++) {
                let n = v[r],
                  a = B(t, i, n),
                  s = O(t, i, n),
                  o = x[r];
                (t = e[o]), (i = e[o + 1]), (e[o] = a), (e[o + 1] = s);
              }
              for (let t = 0; t < 50; t += 10) {
                for (let n = 0; n < 10; n++) r[n] = e[t + n];
                for (let n = 0; n < 10; n++)
                  e[t + n] ^= ~r[(n + 2) % 10] & r[(n + 4) % 10];
              }
              (e[0] ^= D[n]), (e[1] ^= I[n]);
            }
            c(r);
          })(this.state32, this.rounds),
          y(this.state32),
          (this.posOut = 0),
          (this.pos = 0);
      }
      update(e) {
        d(this), l((e = p(e)));
        let { blockLen: t, state: r } = this,
          n = e.length;
        for (let i = 0; i < n; ) {
          let a = Math.min(t - this.pos, n - i);
          for (let t = 0; t < a; t++) r[this.pos++] ^= e[i++];
          this.pos === t && this.keccak();
        }
        return this;
      }
      finish() {
        if (this.finished) return;
        this.finished = !0;
        let { state: e, suffix: t, pos: r, blockLen: n } = this;
        (e[r] ^= t),
          (128 & t) != 0 && r === n - 1 && this.keccak(),
          (e[n - 1] ^= 128),
          this.keccak();
      }
      writeInto(e) {
        d(this, !1), l(e), this.finish();
        let t = this.state,
          { blockLen: r } = this;
        for (let n = 0, i = e.length; n < i; ) {
          this.posOut >= r && this.keccak();
          let a = Math.min(r - this.posOut, i - n);
          e.set(t.subarray(this.posOut, this.posOut + a), n),
            (this.posOut += a),
            (n += a);
        }
        return e;
      }
      xofInto(e) {
        if (!this.enableXOF)
          throw Error("XOF is not possible for this instance");
        return this.writeInto(e);
      }
      xof(e) {
        return f(e), this.xofInto(new Uint8Array(e));
      }
      digestInto(e) {
        l(e);
        let t = this.outputLen;
        if (e.length < t)
          throw Error(
            "digestInto() expects output buffer of length at least " + t
          );
        if (this.finished) throw Error("digest() was already called");
        return this.writeInto(e), this.destroy(), e;
      }
      digest() {
        return this.digestInto(new Uint8Array(this.outputLen));
      }
      destroy() {
        (this.destroyed = !0), c(this.state);
      }
      _cloneInto(e) {
        let {
          blockLen: t,
          suffix: r,
          outputLen: n,
          rounds: i,
          enableXOF: a,
        } = this;
        return (
          (e ||= new C(t, r, n, a, i)).state32.set(this.state32),
          (e.pos = this.pos),
          (e.posOut = this.posOut),
          (e.finished = this.finished),
          (e.rounds = i),
          (e.suffix = r),
          (e.outputLen = n),
          (e.enableXOF = a),
          (e.destroyed = this.destroyed),
          e
        );
      }
    }
    let S =
      ((n = () => new C(136, 1, 32)),
      ((t = (e) => n().update(p(e)).digest()).outputLen = (r = n()).outputLen),
      (t.blockLen = r.blockLen),
      (t.create = () => n()),
      t);
    function F(e) {
      let t = 0;
      for (let r of e) t += r.length;
      let r = new Uint8Array(t),
        n = 0;
      for (let t of e) r.set(t, n), (n += t.length);
      return r;
    }
    let k = new TextEncoder();
    function N(e) {
      let t = new DataView(new ArrayBuffer(9));
      return t.setFloat64(1, e), t.setUint8(0, 203), new Uint8Array(t.buffer);
    }
    let j = new TextEncoder().encode("0123456789abcdef"),
      q = new Uint8Array(128).fill(16);
    function P(e, t) {
      let r = t[e] ?? 16;
      if (16 === r)
        throw TypeError(
          `Cannot decode input as hex: Invalid character (${String.fromCharCode(
            e
          )})`
        );
      return r;
    }
    j.forEach((e, t) => (q[e] = t)),
      new TextEncoder().encode("ABCDEF").forEach((e, t) => (q[e] = t + 10));
    let H = new TextEncoder().encode("0123456789abcdef"),
      L = new Uint8Array(128).fill(16);
    async function M(e) {
      var t, r;
      let n,
        i,
        a,
        s,
        o,
        u,
        f,
        l,
        d,
        {
          wallet: c,
          action: y,
          nonce: p,
          isTestnet: h = !1,
          vaultAddress: g,
          expiresAfter: w,
        } = e,
        b =
          ((function e(t, r) {
            if (null === t) return void r.push(new Uint8Array([192]));
            if (!1 === t) return void r.push(new Uint8Array([194]));
            if (!0 === t) return void r.push(new Uint8Array([195]));
            if ("number" == typeof t)
              return void r.push(
                (function (e) {
                  if (!Number.isInteger(e)) return N(e);
                  if (e < 0) {
                    if (e >= -32) return new Uint8Array([e]);
                    if (e >= -128) return new Uint8Array([208, e]);
                    if (e >= -32768) {
                      let t = new DataView(new ArrayBuffer(3));
                      return (
                        t.setInt16(1, e),
                        t.setUint8(0, 209),
                        new Uint8Array(t.buffer)
                      );
                    }
                    if (e >= -0x80000000) {
                      let t = new DataView(new ArrayBuffer(5));
                      return (
                        t.setInt32(1, e),
                        t.setUint8(0, 210),
                        new Uint8Array(t.buffer)
                      );
                    }
                    return N(e);
                  }
                  if (e <= 127) return new Uint8Array([e]);
                  if (e < 256) return new Uint8Array([204, e]);
                  if (e < 65536) {
                    let t = new DataView(new ArrayBuffer(3));
                    return (
                      t.setUint16(1, e),
                      t.setUint8(0, 205),
                      new Uint8Array(t.buffer)
                    );
                  }
                  if (e < 0x100000000) {
                    let t = new DataView(new ArrayBuffer(5));
                    return (
                      t.setUint32(1, e),
                      t.setUint8(0, 206),
                      new Uint8Array(t.buffer)
                    );
                  }
                  return N(e);
                })(t)
              );
            if ("bigint" == typeof t) {
              if (t < 0) {
                if (t < -0x8000000000000000n)
                  throw Error(
                    "Cannot safely encode bigint larger than 64 bits"
                  );
                let e = new DataView(new ArrayBuffer(9));
                e.setBigInt64(1, t),
                  e.setUint8(0, 211),
                  r.push(new Uint8Array(e.buffer));
                return;
              }
              if (t >= 0x10000000000000000n)
                throw Error("Cannot safely encode bigint larger than 64 bits");
              let e = new DataView(new ArrayBuffer(9));
              e.setBigUint64(1, t),
                e.setUint8(0, 207),
                r.push(new Uint8Array(e.buffer));
              return;
            }
            if ("string" == typeof t) {
              let e = k.encode(t),
                n = e.length;
              if (n < 32) r.push(new Uint8Array([160 | n]));
              else if (n < 256) r.push(new Uint8Array([217, n]));
              else if (n < 65536) {
                let e = new DataView(new ArrayBuffer(3));
                e.setUint16(1, n),
                  e.setUint8(0, 218),
                  r.push(new Uint8Array(e.buffer));
              } else if (n < 0x100000000) {
                let e = new DataView(new ArrayBuffer(5));
                e.setUint32(1, n),
                  e.setUint8(0, 219),
                  r.push(new Uint8Array(e.buffer));
              } else
                throw Error(
                  "Cannot safely encode string with size larger than 32 bits"
                );
              r.push(e);
              return;
            }
            if (t instanceof Uint8Array) {
              if (t.length < 256) r.push(new Uint8Array([196, t.length]));
              else if (t.length < 65536) {
                let e = new DataView(new ArrayBuffer(3));
                e.setUint16(1, t.length),
                  e.setUint8(0, 197),
                  r.push(new Uint8Array(e.buffer));
              } else if (t.length < 0x100000000) {
                let e = new DataView(new ArrayBuffer(5));
                e.setUint32(1, t.length),
                  e.setUint8(0, 198),
                  r.push(new Uint8Array(e.buffer));
              } else
                throw Error(
                  "Cannot safely encode Uint8Array with size larger than 32 bits"
                );
              r.push(t);
              return;
            }
            if (Array.isArray(t)) {
              if (t.length < 16) r.push(new Uint8Array([144 | t.length]));
              else if (t.length < 65536) {
                let e = new DataView(new ArrayBuffer(3));
                e.setUint16(1, t.length),
                  e.setUint8(0, 220),
                  r.push(new Uint8Array(e.buffer));
              } else if (t.length < 0x100000000) {
                let e = new DataView(new ArrayBuffer(5));
                e.setUint32(1, t.length),
                  e.setUint8(0, 221),
                  r.push(new Uint8Array(e.buffer));
              } else
                throw Error(
                  "Cannot safely encode array with size larger than 32 bits"
                );
              for (let n of t) e(n, r);
              return;
            }
            let n = Object.getPrototypeOf(t);
            if (null === n || n === Object.prototype) {
              let n = Object.keys(t).length;
              if (n < 16) r.push(new Uint8Array([128 | n]));
              else if (n < 65536) {
                let e = new DataView(new ArrayBuffer(3));
                e.setUint16(1, n),
                  e.setUint8(0, 222),
                  r.push(new Uint8Array(e.buffer));
              } else if (n < 0x100000000) {
                let e = new DataView(new ArrayBuffer(5));
                e.setUint32(1, n),
                  e.setUint8(0, 223),
                  r.push(new Uint8Array(e.buffer));
              } else
                throw Error(
                  "Cannot safely encode map with size larger than 32 bits"
                );
              for (let [n, i] of Object.entries(t)) e(n, r), e(i, r);
              return;
            }
            throw Error("Cannot safely encode value into messagepack");
          })(
            (function e(t) {
              return "number" == typeof t &&
                Number.isInteger(t) &&
                t <= Number.MAX_SAFE_INTEGER &&
                t >= Number.MIN_SAFE_INTEGER &&
                (t >= 0x100000000 || t < -0x80000000)
                ? BigInt(t)
                : Array.isArray(t)
                ? t.map(e)
                : t && "object" == typeof t && null !== t
                ? Object.fromEntries(
                    Object.entries(t).map(([t, r]) => [t, e(r)])
                  )
                : t;
            })(y),
            (n = [])
          ),
          (i = F(n)),
          new DataView((a = new Uint8Array(8)).buffer).setBigUint64(
            0,
            BigInt(p)
          ),
          (s = Uint8Array.of(+!!g)),
          (u = g
            ? ((t = g.slice(2)),
              new Uint8Array(
                (o = new TextEncoder().encode(t)).buffer.transfer(
                  (function (e, t, r, n) {
                    if ((e.length - r) % 2 == 1)
                      throw RangeError(
                        `Cannot decode input as hex: Length (${
                          e.length - r
                        }) must be divisible by 2`
                      );
                    for (t += 1; t < e.length; t += 2)
                      e[r++] = (P(e[t - 1], n) << 4) | P(e[t], n);
                    return r;
                  })(o, 0, 0, L)
                )
              ))
            : new Uint8Array()),
          (f = new Uint8Array(+(void 0 !== w))),
          (l = new Uint8Array(8 * (void 0 !== w))),
          void 0 !== w && new DataView(l.buffer).setBigUint64(0, BigInt(w)),
          (d = S(F([i, a, s, u, f, l]))),
          `0x${(function (e) {
            let [t, r] = (function (e, t) {
              let r = e.length;
              if (e.byteOffset) {
                let t = new Uint8Array(e.buffer);
                t.set(e), (e = t.subarray(0, r));
              }
              return (
                (e = new Uint8Array(e.buffer.transfer(t))).set(
                  e.subarray(0, r),
                  t - r
                ),
                [e, t - r]
              );
            })(
              (e =
                "string" == typeof e
                  ? new TextEncoder().encode(e)
                  : e instanceof ArrayBuffer
                  ? new Uint8Array(e).slice()
                  : e.slice()),
              2 * e.length
            );
            return (
              !(function (e, t, r, n) {
                for (; t < e.length; ++t) {
                  let i = e[t];
                  (e[r++] = n[i >> 4]), (e[r++] = n[15 & i]);
                }
              })(t, r, 0, H),
              new TextDecoder().decode(t)
            );
          })(d)}`);
      return (
        (r = await V({
          wallet: c,
          domain: {
            name: "Exchange",
            version: "1",
            chainId: 1337,
            verifyingContract: "0x0000000000000000000000000000000000000000",
          },
          types: {
            Agent: [
              { name: "source", type: "string" },
              { name: "connectionId", type: "bytes32" },
            ],
          },
          message: { source: h ? "b" : "a", connectionId: b },
        })),
        {
          r: `0x${r.slice(2, 66)}`,
          s: `0x${r.slice(66, 130)}`,
          v: parseInt(r.slice(130, 132), 16),
        }
      );
    }
    async function V(e) {
      var t, r, n, i, a;
      let { wallet: s, domain: o, types: u, message: f } = e;
      if (
        ("object" == typeof (t = s) &&
          null !== t &&
          "signTypedData" in t &&
          "function" == typeof t.signTypedData &&
          1 === t.signTypedData.length) ||
        ("object" == typeof (r = s) &&
          null !== r &&
          "signTypedData" in r &&
          "function" == typeof r.signTypedData &&
          2 === r.signTypedData.length)
      )
        return await s.signTypedData({
          domain: o,
          types: {
            EIP712Domain: [
              { name: "name", type: "string" },
              { name: "version", type: "string" },
              { name: "chainId", type: "uint256" },
              { name: "verifyingContract", type: "address" },
            ],
            ...u,
          },
          primaryType: Object.keys(u)[0],
          message: f,
        });
      if (
        "object" == typeof (n = s) &&
        null !== n &&
        "signTypedData" in n &&
        "function" == typeof n.signTypedData &&
        3 === n.signTypedData.length
      )
        return await s.signTypedData(o, u, f);
      if (
        "object" == typeof (i = s) &&
        null !== i &&
        "_signTypedData" in i &&
        "function" == typeof i._signTypedData &&
        3 === i._signTypedData.length
      )
        return await s._signTypedData(o, u, f);
      if (
        "object" == typeof (a = s) &&
        null !== a &&
        "request" in a &&
        "function" == typeof a.request &&
        a.request.length >= 1
      )
        return await R(s, o, u, f);
      else throw Error("Unsupported wallet for signing typed data");
    }
    async function R(e, t, r, n) {
      let i = await e.request({ method: "eth_requestAccounts", params: [] });
      if (!Array.isArray(i) || 0 === i.length)
        throw Error("No Ethereum accounts available");
      let a = i[0],
        s = JSON.stringify({
          domain: t,
          types: {
            EIP712Domain: [
              { name: "name", type: "string" },
              { name: "version", type: "string" },
              { name: "chainId", type: "uint256" },
              { name: "verifyingContract", type: "address" },
            ],
            ...r,
          },
          primaryType: Object.keys(r)[0],
          message: n,
        });
      return await e.request({
        method: "eth_signTypedData_v4",
        params: [a, s],
      });
    }
    H.forEach((e, t) => (L[e] = t)),
      new TextEncoder().encode("ABCDEF").forEach((e, t) => (L[e] = t + 10));
    let _ = "https://api.hyperliquid.xyz/info",
      z = "https://api.hyperliquid.xyz/exchange";
    function $(e, t) {
      return (function (e) {
        if (0 === e) return 0;
        Number.isInteger(e);
        let [t, r] = e.toString().split(".");
        if (t.length > 5) return parseInt(t, 10);
        if ((t + (r || "")).replace(/^0+/, "").length <= 5) return e;
        let n = "",
          i = 0;
        for (let t of e.toString())
          if (
            (t >= "0" && t <= "9"
              ? (("0" !== t || i > 0) && i++, i <= 5 && (n += t))
              : "." === t && (n += "."),
            5 === i && "." !== t)
          )
            break;
        return Number((n = n.replace(/\.$/, "")));
      })(parseFloat(e).toFixed(5 - t));
    }
    function W(e, t) {
      return parseFloat(e).toFixed(t);
    }
    let X = (e) => {
      if (!e.includes(".")) return e;
      let [t, r] = e.split("."),
        n = r.replace(/0+$/, "");
      return n ? `${t}.${n}` : t;
    };
    async function G(e, t, r) {
      let { signature: n } = await r({
        domain: t.domain,
        types: t.types,
        primaryType: t.primaryType,
        message: t.message,
      });
      return (function (e) {
        let { r: t, s: r } = a.secp256k1.Signature.fromCompact(e.slice(2, 130)),
          n = Number(`0x${e.slice(130)}`),
          [i, o] = (() => {
            if (0 === n || 1 === n) return [void 0, n];
            if (27 === n) return [BigInt(n), 0];
            if (28 === n) return [BigInt(n), 1];
            throw Error("Invalid yParityOrV value");
          })();
        return void 0 !== i
          ? {
              r: (0, s.numberToHex)(t, { size: 32 }),
              s: (0, s.numberToHex)(r, { size: 32 }),
              v: i,
              yParity: o,
            }
          : {
              r: (0, s.numberToHex)(t, { size: 32 }),
              s: (0, s.numberToHex)(r, { size: 32 }),
              yParity: o,
            };
      })(n);
    }
    async function K(e, t, r, n, i, a) {
      return G(
        e,
        {
          domain: {
            name: "HyperliquidSignTransaction",
            version: "1",
            chainId: 42161,
            verifyingContract: "0x0000000000000000000000000000000000000000",
          },
          types: { [n]: r },
          primaryType: n,
          message: t,
        },
        a
      );
    }
    let J = async ({ userAddress: e }) =>
        (await i.default.post(_, { type: "referral", user: e })).data,
      Q = async () =>
        (await i.default.post(_, { type: "allPerpMetas" })).data.filter(
          (e) => 0 === e.collateralToken
        ),
      Y = async (e = "") =>
        (await i.default.post(_, { type: "spotMetaAndAssetCtxs", dex: e }))
          .data,
      Z = async (e) =>
        (await i.default.post(_, { type: "frontendOpenOrders", user: e })).data,
      ee = async (e) =>
        (
          await i.default.post(_, {
            type: "userNonFundingLedgerUpdates",
            user: e,
            startTime: 0x197053bcf54,
          })
        ).data,
      et = async (e) =>
        (await i.default.post(_, { type: "userFunding", user: e })).data,
      er = async (e, t = !1) =>
        (
          await i.default.post(_, {
            type: "userFills",
            user: e,
            aggregateByTime: t,
          })
        ).data,
      en = async (e) =>
        (await i.default.post(_, { type: "l2Book", coin: e })).data,
      ei = async ({ coin: e, interval: t, from: r, to: n }) =>
        (
          await i.default.post(_, {
            type: "candleSnapshot",
            req: {
              coin: e,
              interval: (function (e) {
                switch (e) {
                  case "60":
                    return "1h";
                  case "120":
                    return "2h";
                  case "240":
                    return "4h";
                  case "480":
                    return "8h";
                  case "720":
                    return "12h";
                  case "1D":
                    return "1d";
                  case "3D":
                    return "3d";
                  case "1W":
                    return "1w";
                  case "2W":
                    return "2w";
                  case "1M":
                    return "1m";
                  default:
                    return e;
                }
              })(t),
              startTime: r,
              endTime: n,
            },
          })
        ).data,
      ea = async (e) =>
        (
          await i.default.post(_, {
            type: "maxBuilderFee",
            user: e,
            builder: "0x5EF4DeeB76F87d979D0Ddc8c51f5b4F65d1c972A",
          })
        ).data,
      es = async (e) =>
        (await i.default.post(_, { type: "historicalOrders", user: e })).data,
      eo = async (e) =>
        (await i.default.post(_, { type: "portfolio", user: e })).data,
      eu = async (e) =>
        (await i.default.post(_, { type: "clearinghouseState", user: e })).data,
      ef = async (e) =>
        (
          await i.default.post(_, {
            type: "spotClearinghouseState",
            user: e,
            dex: "",
          })
        ).data,
      el = async (e = "") =>
        (await i.default.post(_, { type: "metaAndAssetCtxs", dex: e })).data,
      ed = async (e, t) => {
        let r = Date.now(),
          n = {
            type: "approveBuilderFee",
            hyperliquidChain: "Mainnet",
            signatureChainId: "0xa4b1",
            maxFeeRate: "0.05%",
            builder: "0x5EF4DeeB76F87d979D0Ddc8c51f5b4F65d1c972A",
            nonce: r,
          },
          a = await K(
            e,
            n,
            [
              { name: "hyperliquidChain", type: "string" },
              { name: "maxFeeRate", type: "string" },
              { name: "builder", type: "address" },
              { name: "nonce", type: "uint64" },
            ],
            "HyperliquidTransaction:ApproveBuilderFee",
            !0,
            t
          );
        return (
          await i.default.post(z, {
            action: n,
            nonce: r,
            signature: { r: a.r, s: a.s, v: Number(a.v) },
            vaultAddress: null,
          })
        ).data;
      },
      ec = async (e) => {
        let t = Date.now(),
          r = { type: "setReferrer", code: "GTRDOTRADE" },
          n = await M({ wallet: e, action: r, nonce: t, isTestnet: !1 });
        return (
          await i.default.post(z, {
            action: r,
            nonce: t,
            signature: { r: n.r, s: n.s, v: Number(n.v) },
          })
        ).data;
      },
      ey = async ({ wallet: e, orders: t, grouping: r }) => {
        let n = Date.now(),
          a = {
            type: "order",
            orders: t.map((e) => {
              let t = {
                a: e.a,
                b: e.b,
                p: X(e.p),
                s: X(e.s),
                r: e.r,
                t:
                  "limit" in e.t
                    ? { limit: { tif: e.t.limit.tif } }
                    : {
                        trigger: {
                          isMarket: e.t.trigger.isMarket,
                          triggerPx: X(e.t.trigger.triggerPx),
                          tpsl: e.t.trigger.tpsl,
                        },
                      },
                c: e.c,
              };
              return void 0 === e.c && delete t.c, t;
            }),
            grouping: r,
            builder: { b: "0x5ef4deeb76f87d979d0ddc8c51f5b4f65d1c972a", f: 50 },
          },
          s = await M({ wallet: e, action: a, nonce: n, isTestnet: !1 });
        return (
          await i.default.post(z, {
            action: a,
            nonce: n,
            signature: { r: s.r, s: s.s, v: Number(s.v) },
          })
        ).data;
      },
      ep = async ({ wallet: e, orders: t }) => {
        let r = {
            type: "twapOrder",
            twap: { a: t?.a, b: t?.b, s: t?.s, r: t?.r, m: t?.m, t: t?.t },
          },
          n = Date.now(),
          a = await M({ wallet: e, action: r, isTestnet: !1, nonce: n });
        return (
          await i.default.post(z, {
            action: r,
            nonce: n,
            signature: { r: a.r, s: a.s, v: Number(a.v) },
          })
        ).data;
      },
      eh = async ({ wallet: e, cancels: t }) => {
        let r = Date.now(),
          n = { type: "cancel", cancels: t },
          a = await M({ wallet: e, action: n, nonce: r, isTestnet: !1 });
        return (await i.default.post(z, { action: n, nonce: r, signature: a }))
          .data;
      },
      eg = async ({ wallet: e, asset: t, twapId: r }) => {
        let n = Date.now(),
          a = { type: "twapCancel", a: t, t: r },
          s = await M({ wallet: e, action: a, nonce: n, isTestnet: !1 });
        return (await i.default.post(z, { action: a, nonce: n, signature: s }))
          .data;
      },
      ew = async ({
        type: e,
        wallet: t,
        destinationWallet: r,
        amount: n,
        signTypedData: a,
      }) => {
        let s = Date.now(),
          o = {
            type: e,
            hyperliquidChain: "Mainnet",
            signatureChainId: "0xa4b1",
            destination: r.toLowerCase(),
            amount: n.toString(),
            time: s,
          },
          u = "withdraw3" === e ? "Withdraw" : "UsdSend",
          f = await K(
            t,
            o,
            [
              { name: "hyperliquidChain", type: "string" },
              { name: "destination", type: "string" },
              { name: "amount", type: "string" },
              { name: "time", type: "uint64" },
            ],
            `HyperliquidTransaction:${u}`,
            !0,
            a
          );
        return (
          await i.default.post(z, {
            action: o,
            nonce: s,
            signature: { r: f.r, s: f.s, v: Number(f.v) },
          })
        ).data;
      },
      eb = async ({
        sourceDex: e,
        destinationDex: t,
        token: r,
        wallet: n,
        destinationWallet: a,
        amount: s,
        signTypedData: o,
      }) => {
        let u = Date.now(),
          f = {
            type: "sendAsset",
            hyperliquidChain: "Mainnet",
            signatureChainId: "0xa4b1",
            destination: a.toLowerCase(),
            sourceDex: e,
            destinationDex: t,
            token: r,
            fromSubAccount: "",
            amount: s.toString(),
            nonce: u,
          },
          l = await K(
            n,
            f,
            [
              { name: "hyperliquidChain", type: "string" },
              { name: "destination", type: "string" },
              { name: "sourceDex", type: "string" },
              { name: "destinationDex", type: "string" },
              { name: "token", type: "string" },
              { name: "amount", type: "string" },
              { name: "fromSubAccount", type: "string" },
              { name: "nonce", type: "uint64" },
            ],
            "HyperliquidTransaction:SendAsset",
            !0,
            o
          );
        return (
          await i.default.post(z, {
            action: f,
            nonce: u,
            signature: { r: l.r, s: l.s, v: Number(l.v) },
          })
        ).data;
      },
      em = async ({
        wallet: e,
        amount: t,
        index: r,
        isBuy: n,
        type: a = "add",
      }) => {
        let s = Date.now(),
          o = {
            type: "updateIsolatedMargin",
            asset: r,
            isBuy: n,
            ntli: "remove" === a ? -(1e6 * t) : 1e6 * t,
          },
          u = await M({ wallet: e, action: o, nonce: s, isTestnet: !1 });
        return (
          await i.default.post(z, {
            action: o,
            nonce: s,
            signature: { r: u.r, s: u.s, v: Number(u.v) },
          })
        ).data;
      },
      eA = async ({ wallet: e, value: t, index: r, isCross: n = !1 }) => {
        let a = Date.now(),
          s = { type: "updateLeverage", asset: r, isCross: n, leverage: t },
          o = await M({ wallet: e, action: s, nonce: a, isTestnet: !1 });
        return (
          await i.default.post(z, {
            action: s,
            nonce: a,
            signature: { r: o.r, s: o.s, v: Number(o.v) },
          })
        ).data;
      },
      eU = async ({ wallet: e, toPerp: t, amount: r, signTypedData: n }) => {
        let a = Date.now(),
          s = {
            type: "usdClassTransfer",
            hyperliquidChain: "Mainnet",
            signatureChainId: "0xa4b1",
            toPerp: t,
            amount: r.toString(),
            nonce: a,
          },
          o = await K(
            e,
            s,
            [
              { name: "hyperliquidChain", type: "string" },
              { name: "amount", type: "string" },
              { name: "toPerp", type: "bool" },
              { name: "nonce", type: "uint64" },
            ],
            "HyperliquidTransaction:UsdClassTransfer",
            !0,
            n
          );
        return (
          await i.default.post(z, {
            action: s,
            nonce: a,
            signature: { r: o.r, s: o.s, v: Number(o.v) },
          })
        ).data;
      },
      ex = async ({ wallet: e, oid: t, order: r }) => {
        let n = Date.now(),
          a = { type: "modify", oid: t, order: r },
          s = await M({ wallet: e, action: a, nonce: n, isTestnet: !1 });
        return (await i.default.post(z, { action: a, nonce: n, signature: s }))
          .data;
      },
      ev = async ({ walletAddress: e }) =>
        (await i.default.post(_, { type: "userAbstraction", user: e })).data,
      eT = async (e) => {
        let t = Date.now(),
          r = { type: "agentSetAbstraction", abstraction: "u" },
          n = await M({ wallet: e, action: r, nonce: t, isTestnet: !1 }),
          a = {
            action: r,
            nonce: t,
            signature: { r: n.r, s: n.s, v: Number(n.v) },
          };
        return (await i.default.post(z, a)).data;
      };
    e.s(
      [
        "approveBuilderFee",
        0,
        ed,
        "cancelOrder",
        0,
        eh,
        "checkHIP3UserDexAbstractionState",
        0,
        ev,
        "enableHIP3UserDexAbstractionState",
        0,
        eT,
        "formatHyperliquidPrice",
        () => $,
        "formatHyperliquidSize",
        () => W,
        "getAllPerpMetas",
        0,
        Q,
        "getBuilderFeeApproval",
        0,
        ea,
        "getCandleStick",
        0,
        ei,
        "getDepositsWithdrawals",
        0,
        ee,
        "getHistoricalOrders",
        0,
        es,
        "getHyperliquidReferralDetails",
        0,
        J,
        "getL2Book",
        0,
        en,
        "getMetaAndAssetCtxs",
        0,
        el,
        "getOpenOrdersDetails",
        0,
        Z,
        "getSpotMetaAssets",
        0,
        Y,
        "getUserAccountSpotSummary",
        0,
        ef,
        "getUserAccountSummary",
        0,
        eu,
        "getUserFills",
        0,
        er,
        "getUserFundingHistory",
        0,
        et,
        "getUserPortfolio",
        0,
        eo,
        "handleHyperliquidResponse",
        0,
        (e) => {
          if ("ok" === e.status && e.response?.data?.statuses?.length) {
            let t = e.response.data.statuses[0];
            if (t.error)
              return (
                console.error("Error:", t.error),
                { success: !1, message: t.error }
              );
            if (t.resting) return { success: !0, orderId: t.resting.oid, ...t };
            if (t.filled) return { success: !0, orderId: t.filled.oid, ...t };
            if ("waitingForTrigger" === t) return { success: !0, orderId: "1" };
          }
          if ("ok" === e.status && e?.response?.data?.status) {
            let t = e?.response?.data?.status;
            if (t?.running?.twapId)
              return {
                success: !0,
                twapId: e?.response?.data?.status?.running?.twapId,
              };
            if (t?.error) return { success: !1, message: t.error };
          }
          return (
            console.error("Unexpected response structure:", e),
            {
              success: !1,
              message: "Something went wrong! Please try again later.",
            }
          );
        },
        "modifyOrder",
        0,
        ex,
        "placeOrder",
        0,
        ey,
        "placeTwapOrder",
        0,
        ep,
        "sendAsset",
        0,
        eb,
        "setReferrer",
        0,
        ec,
        "terminateTWAPOrder",
        0,
        eg,
        "updateIsolatedMargin",
        0,
        em,
        "updateLeverage",
        0,
        eA,
        "usdClassTransfer",
        0,
        eU,
        "withdrawUSDC",
        0,
        ew,
      ],
      730210
    );
  },
]);
