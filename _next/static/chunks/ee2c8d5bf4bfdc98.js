(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  667055,
  (e) => {
    "use strict";
    let t,
      r,
      n,
      i,
      o =
        "object" == typeof globalThis && "crypto" in globalThis
          ? globalThis.crypto
          : void 0;
    function a(e) {
      if (!Number.isSafeInteger(e) || e < 0)
        throw Error("positive integer expected, got " + e);
    }
    function f(e, ...t) {
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
    function s(e, t = !0) {
      if (e.destroyed) throw Error("Hash instance has been destroyed");
      if (t && e.finished) throw Error("Hash#digest() has already been called");
    }
    function l(...e) {
      for (let t = 0; t < e.length; t++) e[t].fill(0);
    }
    function d(e) {
      return new DataView(e.buffer, e.byteOffset, e.byteLength);
    }
    function u(e, t) {
      return (e << (32 - t)) | (e >>> t);
    }
    function c(e) {
      return (
        "string" == typeof e &&
          (e = (function (e) {
            if ("string" != typeof e) throw Error("string expected");
            return new Uint8Array(new TextEncoder().encode(e));
          })(e)),
        f(e),
        e
      );
    }
    class h {}
    function b(e = 32) {
      if (o && "function" == typeof o.getRandomValues)
        return o.getRandomValues(new Uint8Array(e));
      if (o && "function" == typeof o.randomBytes)
        return Uint8Array.from(o.randomBytes(e));
      throw Error("crypto.getRandomValues must be defined");
    }
    class x extends h {
      constructor(e, t, r, n) {
        super(),
          (this.finished = !1),
          (this.length = 0),
          (this.pos = 0),
          (this.destroyed = !1),
          (this.blockLen = e),
          (this.outputLen = t),
          (this.padOffset = r),
          (this.isLE = n),
          (this.buffer = new Uint8Array(e)),
          (this.view = d(this.buffer));
      }
      update(e) {
        s(this), f((e = c(e)));
        let { view: t, buffer: r, blockLen: n } = this,
          i = e.length;
        for (let o = 0; o < i; ) {
          let a = Math.min(n - this.pos, i - o);
          if (a === n) {
            let t = d(e);
            for (; n <= i - o; o += n) this.process(t, o);
            continue;
          }
          r.set(e.subarray(o, o + a), this.pos),
            (this.pos += a),
            (o += a),
            this.pos === n && (this.process(t, 0), (this.pos = 0));
        }
        return (this.length += e.length), this.roundClean(), this;
      }
      digestInto(e) {
        s(this);
        f(e);
        let t = this.outputLen;
        if (e.length < t)
          throw Error(
            "digestInto() expects output buffer of length at least " + t
          );
        this.finished = !0;
        let { buffer: r, view: n, blockLen: i, isLE: o } = this,
          { pos: a } = this;
        (r[a++] = 128),
          l(this.buffer.subarray(a)),
          this.padOffset > i - a && (this.process(n, 0), (a = 0));
        for (let e = a; e < i; e++) r[e] = 0;
        !(function (e, t, r, n) {
          if ("function" == typeof e.setBigUint64)
            return e.setBigUint64(t, r, n);
          let i = BigInt(32),
            o = BigInt(0xffffffff),
            a = Number((r >> i) & o),
            f = Number(r & o),
            s = 4 * !!n,
            l = 4 * !n;
          e.setUint32(t + s, a, n), e.setUint32(t + l, f, n);
        })(n, i - 8, BigInt(8 * this.length), o),
          this.process(n, 0);
        let u = d(e),
          c = this.outputLen;
        if (c % 4) throw Error("_sha2: outputLen should be aligned to 32bit");
        let h = c / 4,
          b = this.get();
        if (h > b.length) throw Error("_sha2: outputLen bigger than state");
        for (let e = 0; e < h; e++) u.setUint32(4 * e, b[e], o);
      }
      digest() {
        let { buffer: e, outputLen: t } = this;
        this.digestInto(e);
        let r = e.slice(0, t);
        return this.destroy(), r;
      }
      _cloneInto(e) {
        e || (e = new this.constructor()), e.set(...this.get());
        let {
          blockLen: t,
          buffer: r,
          length: n,
          finished: i,
          destroyed: o,
          pos: a,
        } = this;
        return (
          (e.destroyed = o),
          (e.finished = i),
          (e.length = n),
          (e.pos = a),
          n % t && e.buffer.set(r),
          e
        );
      }
      clone() {
        return this._cloneInto();
      }
    }
    let y = Uint32Array.from([
        0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c,
        0x1f83d9ab, 0x5be0cd19,
      ]),
      g = Uint32Array.from([
        0xc1059ed8, 0x367cd507, 0x3070dd17, 0xf70e5939, 0xffc00b31, 0x68581511,
        0x64f98fa7, 0xbefa4fa4,
      ]),
      m = Uint32Array.from([
        0xcbbb9d5d, 0xc1059ed8, 0x629a292a, 0x367cd507, 0x9159015a, 0x3070dd17,
        0x152fecd8, 0xf70e5939, 0x67332667, 0xffc00b31, 0x8eb44a87, 0x68581511,
        0xdb0c2e0d, 0x64f98fa7, 0x47b5481d, 0xbefa4fa4,
      ]),
      p = Uint32Array.from([
        0x6a09e667, 0xf3bcc908, 0xbb67ae85, 0x84caa73b, 0x3c6ef372, 0xfe94f82b,
        0xa54ff53a, 0x5f1d36f1, 0x510e527f, 0xade682d1, 0x9b05688c, 0x2b3e6c1f,
        0x1f83d9ab, 0xfb41bd6b, 0x5be0cd19, 0x137e2179,
      ]),
      w = BigInt(0x100000000 - 1),
      E = BigInt(32),
      B = Uint32Array.from([
        0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1,
        0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3,
        0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174, 0xe49b69c1, 0xefbe4786,
        0xfc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da,
        0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147,
        0x6ca6351, 0x14292967, 0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13,
        0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85, 0xa2bfe8a1, 0xa81a664b,
        0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070,
        0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a,
        0x5b9cca4f, 0x682e6ff3, 0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208,
        0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2,
      ]),
      v = new Uint32Array(64);
    class A extends x {
      constructor(e = 32) {
        super(64, e, 8, !1),
          (this.A = 0 | y[0]),
          (this.B = 0 | y[1]),
          (this.C = 0 | y[2]),
          (this.D = 0 | y[3]),
          (this.E = 0 | y[4]),
          (this.F = 0 | y[5]),
          (this.G = 0 | y[6]),
          (this.H = 0 | y[7]);
      }
      get() {
        let { A: e, B: t, C: r, D: n, E: i, F: o, G: a, H: f } = this;
        return [e, t, r, n, i, o, a, f];
      }
      set(e, t, r, n, i, o, a, f) {
        (this.A = 0 | e),
          (this.B = 0 | t),
          (this.C = 0 | r),
          (this.D = 0 | n),
          (this.E = 0 | i),
          (this.F = 0 | o),
          (this.G = 0 | a),
          (this.H = 0 | f);
      }
      process(e, t) {
        for (let r = 0; r < 16; r++, t += 4) v[r] = e.getUint32(t, !1);
        for (let e = 16; e < 64; e++) {
          let t = v[e - 15],
            r = v[e - 2],
            n = u(t, 7) ^ u(t, 18) ^ (t >>> 3),
            i = u(r, 17) ^ u(r, 19) ^ (r >>> 10);
          v[e] = (i + v[e - 7] + n + v[e - 16]) | 0;
        }
        let { A: r, B: n, C: i, D: o, E: a, F: f, G: s, H: l } = this;
        for (let e = 0; e < 64; e++) {
          var d, c, h, b;
          let t =
              (l +
                (u(a, 6) ^ u(a, 11) ^ u(a, 25)) +
                (((d = a) & f) ^ (~d & s)) +
                B[e] +
                v[e]) |
              0,
            x =
              ((u(r, 2) ^ u(r, 13) ^ u(r, 22)) +
                (((c = r) & (h = n)) ^ (c & (b = i)) ^ (h & b))) |
              0;
          (l = s),
            (s = f),
            (f = a),
            (a = (o + t) | 0),
            (o = i),
            (i = n),
            (n = r),
            (r = (t + x) | 0);
        }
        (r = (r + this.A) | 0),
          (n = (n + this.B) | 0),
          (i = (i + this.C) | 0),
          (o = (o + this.D) | 0),
          (a = (a + this.E) | 0),
          (f = (f + this.F) | 0),
          (s = (s + this.G) | 0),
          (l = (l + this.H) | 0),
          this.set(r, n, i, o, a, f, s, l);
      }
      roundClean() {
        l(v);
      }
      destroy() {
        this.set(0, 0, 0, 0, 0, 0, 0, 0), l(this.buffer);
      }
    }
    let I = (function (e, t = !1) {
        let r = e.length,
          n = new Uint32Array(r),
          i = new Uint32Array(r);
        for (let o = 0; o < r; o++) {
          let { h: r, l: a } = (function (e, t = !1) {
            return t
              ? { h: Number(e & w), l: Number((e >> E) & w) }
              : { h: 0 | Number((e >> E) & w), l: 0 | Number(e & w) };
          })(e[o], t);
          [n[o], i[o]] = [r, a];
        }
        return [n, i];
      })(
        [
          "0x428a2f98d728ae22",
          "0x7137449123ef65cd",
          "0xb5c0fbcfec4d3b2f",
          "0xe9b5dba58189dbbc",
          "0x3956c25bf348b538",
          "0x59f111f1b605d019",
          "0x923f82a4af194f9b",
          "0xab1c5ed5da6d8118",
          "0xd807aa98a3030242",
          "0x12835b0145706fbe",
          "0x243185be4ee4b28c",
          "0x550c7dc3d5ffb4e2",
          "0x72be5d74f27b896f",
          "0x80deb1fe3b1696b1",
          "0x9bdc06a725c71235",
          "0xc19bf174cf692694",
          "0xe49b69c19ef14ad2",
          "0xefbe4786384f25e3",
          "0x0fc19dc68b8cd5b5",
          "0x240ca1cc77ac9c65",
          "0x2de92c6f592b0275",
          "0x4a7484aa6ea6e483",
          "0x5cb0a9dcbd41fbd4",
          "0x76f988da831153b5",
          "0x983e5152ee66dfab",
          "0xa831c66d2db43210",
          "0xb00327c898fb213f",
          "0xbf597fc7beef0ee4",
          "0xc6e00bf33da88fc2",
          "0xd5a79147930aa725",
          "0x06ca6351e003826f",
          "0x142929670a0e6e70",
          "0x27b70a8546d22ffc",
          "0x2e1b21385c26c926",
          "0x4d2c6dfc5ac42aed",
          "0x53380d139d95b3df",
          "0x650a73548baf63de",
          "0x766a0abb3c77b2a8",
          "0x81c2c92e47edaee6",
          "0x92722c851482353b",
          "0xa2bfe8a14cf10364",
          "0xa81a664bbc423001",
          "0xc24b8b70d0f89791",
          "0xc76c51a30654be30",
          "0xd192e819d6ef5218",
          "0xd69906245565a910",
          "0xf40e35855771202a",
          "0x106aa07032bbd1b8",
          "0x19a4c116b8d2d0c8",
          "0x1e376c085141ab53",
          "0x2748774cdf8eeb99",
          "0x34b0bcb5e19b48a8",
          "0x391c0cb3c5c95a63",
          "0x4ed8aa4ae3418acb",
          "0x5b9cca4f7763e373",
          "0x682e6ff3d6b2b8a3",
          "0x748f82ee5defb2fc",
          "0x78a5636f43172f60",
          "0x84c87814a1f0ab72",
          "0x8cc702081a6439ec",
          "0x90befffa23631e28",
          "0xa4506cebde82bde9",
          "0xbef9a3f7b2c67915",
          "0xc67178f2e372532b",
          "0xca273eceea26619c",
          "0xd186b8c721c0c207",
          "0xeada7dd6cde0eb1e",
          "0xf57d4f7fee6ed178",
          "0x06f067aa72176fba",
          "0x0a637dc5a2c898a6",
          "0x113f9804bef90dae",
          "0x1b710b35131c471b",
          "0x28db77f523047d84",
          "0x32caab7b40c72493",
          "0x3c9ebe0a15c9bebc",
          "0x431d67c49c100d4c",
          "0x4cc5d4becb3e42b6",
          "0x597f299cfc657e2a",
          "0x5fcb6fab3ad6faec",
          "0x6c44198c4a475817",
        ].map((e) => BigInt(e))
      ),
      S = I[0],
      O = I[1],
      R = new Uint32Array(80),
      T = new Uint32Array(80);
    let N =
      ((H = () => new A()),
      ((t = (e) => H().update(c(e)).digest()).outputLen = (r = H()).outputLen),
      (t.blockLen = r.blockLen),
      (t.create = () => H()),
      t);
    class q extends h {
      constructor(e, t) {
        super(),
          (this.finished = !1),
          (this.destroyed = !1),
          (function (e) {
            if ("function" != typeof e || "function" != typeof e.create)
              throw Error("Hash should be wrapped by utils.createHasher");
            a(e.outputLen), a(e.blockLen);
          })(e);
        const r = c(t);
        if (((this.iHash = e.create()), "function" != typeof this.iHash.update))
          throw Error("Expected instance of class which extends utils.Hash");
        (this.blockLen = this.iHash.blockLen),
          (this.outputLen = this.iHash.outputLen);
        const n = this.blockLen,
          i = new Uint8Array(n);
        i.set(r.length > n ? e.create().update(r).digest() : r);
        for (let e = 0; e < i.length; e++) i[e] ^= 54;
        this.iHash.update(i), (this.oHash = e.create());
        for (let e = 0; e < i.length; e++) i[e] ^= 106;
        this.oHash.update(i), l(i);
      }
      update(e) {
        return s(this), this.iHash.update(e), this;
      }
      digestInto(e) {
        s(this),
          f(e, this.outputLen),
          (this.finished = !0),
          this.iHash.digestInto(e),
          this.oHash.update(e),
          this.oHash.digestInto(e),
          this.destroy();
      }
      digest() {
        let e = new Uint8Array(this.oHash.outputLen);
        return this.digestInto(e), e;
      }
      _cloneInto(e) {
        e || (e = Object.create(Object.getPrototypeOf(this), {}));
        let {
          oHash: t,
          iHash: r,
          finished: n,
          destroyed: i,
          blockLen: o,
          outputLen: a,
        } = this;
        return (
          (e.finished = n),
          (e.destroyed = i),
          (e.blockLen = o),
          (e.outputLen = a),
          (e.oHash = t._cloneInto(e.oHash)),
          (e.iHash = r._cloneInto(e.iHash)),
          e
        );
      }
      clone() {
        return this._cloneInto();
      }
      destroy() {
        (this.destroyed = !0), this.oHash.destroy(), this.iHash.destroy();
      }
    }
    let U = (e, t, r) => new q(e, t).update(r).digest();
    U.create = (e, t) => new q(e, t);
    var H,
      L,
      P = e.i(320457);
    let C = BigInt(0),
      Z = BigInt(1),
      D = BigInt(2),
      z = BigInt(3),
      _ = BigInt(4),
      k = BigInt(5),
      V = BigInt(8);
    function F(e, t) {
      let r = e % t;
      return r >= C ? r : t + r;
    }
    function j(e, t, r) {
      let n = e;
      for (; t-- > C; ) (n *= n), (n %= r);
      return n;
    }
    function K(e, t) {
      if (e === C) throw Error("invert: expected non-zero number");
      if (t <= C) throw Error("invert: expected positive modulus, got " + t);
      let r = F(e, t),
        n = t,
        i = C,
        o = Z,
        a = Z,
        f = C;
      for (; r !== C; ) {
        let e = n / r,
          t = n % r,
          s = i - a * e,
          l = o - f * e;
        (n = r), (r = t), (i = a), (o = f), (a = s), (f = l);
      }
      if (n !== Z) throw Error("invert: does not exist");
      return F(i, t);
    }
    function M(e, t) {
      let r = (e.ORDER + Z) / _,
        n = e.pow(t, r);
      if (!e.eql(e.sqr(n), t)) throw Error("Cannot find square root");
      return n;
    }
    function Y(e, t) {
      let r = (e.ORDER - k) / V,
        n = e.mul(t, D),
        i = e.pow(n, r),
        o = e.mul(t, i),
        a = e.mul(e.mul(o, D), i),
        f = e.mul(o, e.sub(a, e.ONE));
      if (!e.eql(e.sqr(f), t)) throw Error("Cannot find square root");
      return f;
    }
    let W = [
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
    function G(e) {
      let t = W.reduce((e, t) => ((e[t] = "function"), e), {
        ORDER: "bigint",
        MASK: "bigint",
        BYTES: "isSafeInteger",
        BITS: "isSafeInteger",
      });
      return (0, P.validateObject)(e, t);
    }
    function X(e, t, r = !1) {
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
    function J(e, t) {
      let r = (e.ORDER - Z) / D,
        n = e.pow(t, r),
        i = e.eql(n, e.ONE),
        o = e.eql(n, e.ZERO),
        a = e.eql(n, e.neg(e.ONE));
      if (!i && !o && !a) throw Error("invalid Legendre symbol result");
      return i ? 1 : o ? 0 : -1;
    }
    function Q(e, t) {
      void 0 !== t && a(t);
      let r = void 0 !== t ? t : e.toString(2).length,
        n = Math.ceil(r / 8);
      return { nBitLength: r, nByteLength: n };
    }
    function $(e, t, r = !1, n = {}) {
      let i;
      if (e <= C) throw Error("invalid field: expected ORDER > 0, got " + e);
      let { nBitLength: o, nByteLength: a } = Q(e, t);
      if (a > 2048)
        throw Error("invalid field: expected ORDER of <= 2048 bytes");
      let f = Object.freeze({
        ORDER: e,
        isLE: r,
        BITS: o,
        BYTES: a,
        MASK: (0, P.bitMask)(o),
        ZERO: C,
        ONE: Z,
        create: (t) => F(t, e),
        isValid: (t) => {
          if ("bigint" != typeof t)
            throw Error(
              "invalid field element: expected bigint, got " + typeof t
            );
          return C <= t && t < e;
        },
        is0: (e) => e === C,
        isOdd: (e) => (e & Z) === Z,
        neg: (t) => F(-t, e),
        eql: (e, t) => e === t,
        sqr: (t) => F(t * t, e),
        add: (t, r) => F(t + r, e),
        sub: (t, r) => F(t - r, e),
        mul: (t, r) => F(t * r, e),
        pow: (e, t) =>
          (function (e, t, r) {
            if (r < C) throw Error("invalid exponent, negatives unsupported");
            if (r === C) return e.ONE;
            if (r === Z) return t;
            let n = e.ONE,
              i = t;
            for (; r > C; )
              r & Z && (n = e.mul(n, i)), (i = e.sqr(i)), (r >>= Z);
            return n;
          })(f, e, t),
        div: (t, r) => F(t * K(r, e), e),
        sqrN: (e) => e * e,
        addN: (e, t) => e + t,
        subN: (e, t) => e - t,
        mulN: (e, t) => e * t,
        inv: (t) => K(t, e),
        sqrt:
          n.sqrt ||
          ((t) => (
            i ||
              (i =
                e % _ === z
                  ? M
                  : e % V === k
                  ? Y
                  : (function (e) {
                      if (e < BigInt(3))
                        throw Error("sqrt is not defined for small field");
                      let t = e - Z,
                        r = 0;
                      for (; t % D === C; ) (t /= D), r++;
                      let n = D,
                        i = $(e);
                      for (; 1 === J(i, n); )
                        if (n++ > 1e3)
                          throw Error(
                            "Cannot find square root: probably non-prime P"
                          );
                      if (1 === r) return M;
                      let o = i.pow(n, t),
                        a = (t + Z) / D;
                      return function (e, n) {
                        if (e.is0(n)) return n;
                        if (1 !== J(e, n))
                          throw Error("Cannot find square root");
                        let i = r,
                          f = e.mul(e.ONE, o),
                          s = e.pow(n, t),
                          l = e.pow(n, a);
                        for (; !e.eql(s, e.ONE); ) {
                          if (e.is0(s)) return e.ZERO;
                          let t = 1,
                            r = e.sqr(s);
                          for (; !e.eql(r, e.ONE); )
                            if ((t++, (r = e.sqr(r)), t === i))
                              throw Error("Cannot find square root");
                          let n = Z << BigInt(i - t - 1),
                            o = e.pow(f, n);
                          (i = t),
                            (f = e.sqr(o)),
                            (s = e.mul(s, f)),
                            (l = e.mul(l, o));
                        }
                        return l;
                      };
                    })(e)),
            i(f, t)
          )),
        toBytes: (e) =>
          r ? (0, P.numberToBytesLE)(e, a) : (0, P.numberToBytesBE)(e, a),
        fromBytes: (e) => {
          if (e.length !== a)
            throw Error(
              "Field.fromBytes: expected " + a + " bytes, got " + e.length
            );
          return r ? (0, P.bytesToNumberLE)(e) : (0, P.bytesToNumberBE)(e);
        },
        invertBatch: (e) => X(f, e),
        cmov: (e, t, r) => (r ? t : e),
      });
      return Object.freeze(f);
    }
    function ee(e) {
      if ("bigint" != typeof e) throw Error("field order must be bigint");
      return Math.ceil(e.toString(2).length / 8);
    }
    function et(e) {
      let t = ee(e);
      return t + Math.ceil(t / 2);
    }
    let er = BigInt(0),
      en = BigInt(1);
    function ei(e, t) {
      let r = t.negate();
      return e ? r : t;
    }
    function eo(e, t) {
      if (!Number.isSafeInteger(e) || e <= 0 || e > t)
        throw Error("invalid window size, expected [1.." + t + "], got W=" + e);
    }
    function ea(e, t) {
      eo(e, t);
      let r = Math.ceil(t / e) + 1,
        n = 2 ** (e - 1),
        i = 2 ** e;
      return {
        windows: r,
        windowSize: n,
        mask: (0, P.bitMask)(e),
        maxNumber: i,
        shiftBy: BigInt(e),
      };
    }
    function ef(e, t, r) {
      let { windowSize: n, mask: i, maxNumber: o, shiftBy: a } = r,
        f = Number(e & i),
        s = e >> a;
      f > n && ((f -= o), (s += en));
      let l = t * n,
        d = l + Math.abs(f) - 1,
        u = 0 === f;
      return {
        nextN: s,
        offset: d,
        isZero: u,
        isNeg: f < 0,
        isNegF: t % 2 != 0,
        offsetF: l,
      };
    }
    let es = new WeakMap(),
      el = new WeakMap();
    function ed(e) {
      return el.get(e) || 1;
    }
    function eu(e) {
      return (
        G(e.Fp),
        (0, P.validateObject)(
          e,
          { n: "bigint", h: "bigint", Gx: "field", Gy: "field" },
          { nBitLength: "isSafeInteger", nByteLength: "isSafeInteger" }
        ),
        Object.freeze({ ...Q(e.n, e.nBitLength), ...e, ...{ p: e.Fp.ORDER } })
      );
    }
    function ec(e) {
      void 0 !== e.lowS && (0, P.abool)("lowS", e.lowS),
        void 0 !== e.prehash && (0, P.abool)("prehash", e.prehash);
    }
    let eh = {
      Err: class extends Error {
        constructor(e = "") {
          super(e);
        }
      },
      _tlv: {
        encode: (e, t) => {
          let { Err: r } = eh;
          if (e < 0 || e > 256) throw new r("tlv.encode: wrong tag");
          if (1 & t.length) throw new r("tlv.encode: unpadded data");
          let n = t.length / 2,
            i = (0, P.numberToHexUnpadded)(n);
          if ((i.length / 2) & 128)
            throw new r("tlv.encode: long form length too big");
          let o =
            n > 127 ? (0, P.numberToHexUnpadded)((i.length / 2) | 128) : "";
          return (0, P.numberToHexUnpadded)(e) + o + i + t;
        },
        decode(e, t) {
          let { Err: r } = eh,
            n = 0;
          if (e < 0 || e > 256) throw new r("tlv.encode: wrong tag");
          if (t.length < 2 || t[n++] !== e)
            throw new r("tlv.decode: wrong tlv");
          let i = t[n++],
            o = 0;
          if (128 & i) {
            let e = 127 & i;
            if (!e)
              throw new r("tlv.decode(long): indefinite length not supported");
            if (e > 4) throw new r("tlv.decode(long): byte length is too big");
            let a = t.subarray(n, n + e);
            if (a.length !== e)
              throw new r("tlv.decode: length bytes not complete");
            if (0 === a[0]) throw new r("tlv.decode(long): zero leftmost byte");
            for (let e of a) o = (o << 8) | e;
            if (((n += e), o < 128))
              throw new r("tlv.decode(long): not minimal encoding");
          } else o = i;
          let a = t.subarray(n, n + o);
          if (a.length !== o) throw new r("tlv.decode: wrong value length");
          return { v: a, l: t.subarray(n + o) };
        },
      },
      _int: {
        encode(e) {
          let { Err: t } = eh;
          if (e < ex) throw new t("integer: negative integers are not allowed");
          let r = (0, P.numberToHexUnpadded)(e);
          if ((8 & Number.parseInt(r[0], 16) && (r = "00" + r), 1 & r.length))
            throw new t("unexpected DER parsing assertion: unpadded hex");
          return r;
        },
        decode(e) {
          let { Err: t } = eh;
          if (128 & e[0]) throw new t("invalid signature integer: negative");
          if (0 === e[0] && !(128 & e[1]))
            throw new t("invalid signature integer: unnecessary leading zero");
          return (0, P.bytesToNumberBE)(e);
        },
      },
      toSig(e) {
        let { Err: t, _int: r, _tlv: n } = eh,
          i = (0, P.ensureBytes)("signature", e),
          { v: o, l: a } = n.decode(48, i);
        if (a.length)
          throw new t("invalid signature: left bytes after parsing");
        let { v: f, l: s } = n.decode(2, o),
          { v: l, l: d } = n.decode(2, s);
        if (d.length)
          throw new t("invalid signature: left bytes after parsing");
        return { r: r.decode(f), s: r.decode(l) };
      },
      hexFromSig(e) {
        let { _tlv: t, _int: r } = eh,
          n = t.encode(2, r.encode(e.r)),
          i = t.encode(2, r.encode(e.s));
        return t.encode(48, n + i);
      },
    };
    function eb(e, t) {
      return (0, P.bytesToHex)((0, P.numberToBytesBE)(e, t));
    }
    let ex = BigInt(0),
      ey = BigInt(1),
      eg = BigInt(2),
      em = BigInt(3),
      ep = BigInt(4),
      ew = P.bytesToNumberBE;
    function eE(e, t) {
      if ((eB(e), eB(t), e < 0 || e >= 1 << (8 * t)))
        throw Error("invalid I2OSP input: " + e);
      let r = Array.from({ length: t }).fill(0);
      for (let n = t - 1; n >= 0; n--) (r[n] = 255 & e), (e >>>= 8);
      return new Uint8Array(r);
    }
    function eB(e) {
      if (!Number.isSafeInteger(e)) throw Error("number expected");
    }
    function ev(e, t, r) {
      let n;
      (0, P.validateObject)(r, {
        DST: "stringOrUint8Array",
        p: "bigint",
        m: "isSafeInteger",
        k: "isSafeInteger",
        hash: "hash",
      });
      let { p: i, k: o, m: a, hash: f, expand: s, DST: l } = r;
      (0, P.abytes)(e), eB(t);
      let d = "string" == typeof l ? (0, P.utf8ToBytes)(l) : l,
        u = Math.ceil((i.toString(2).length + o) / 8),
        c = t * a * u;
      if ("xmd" === s)
        n = (function (e, t, r, n) {
          (0, P.abytes)(e),
            (0, P.abytes)(t),
            eB(r),
            t.length > 255 &&
              (t = n(
                (0, P.concatBytes)((0, P.utf8ToBytes)("H2C-OVERSIZE-DST-"), t)
              ));
          let { outputLen: i, blockLen: o } = n,
            a = Math.ceil(r / i);
          if (r > 65535 || a > 255)
            throw Error("expand_message_xmd: invalid lenInBytes");
          let f = (0, P.concatBytes)(t, eE(t.length, 1)),
            s = eE(0, o),
            l = eE(r, 2),
            d = Array(a),
            u = n((0, P.concatBytes)(s, e, l, eE(0, 1), f));
          d[0] = n((0, P.concatBytes)(u, eE(1, 1), f));
          for (let e = 1; e <= a; e++) {
            let t = [
              (function (e, t) {
                let r = new Uint8Array(e.length);
                for (let n = 0; n < e.length; n++) r[n] = e[n] ^ t[n];
                return r;
              })(u, d[e - 1]),
              eE(e + 1, 1),
              f,
            ];
            d[e] = n((0, P.concatBytes)(...t));
          }
          return (0, P.concatBytes)(...d).slice(0, r);
        })(e, d, c, f);
      else if ("xof" === s)
        n = (function (e, t, r, n, i) {
          if (((0, P.abytes)(e), (0, P.abytes)(t), eB(r), t.length > 255)) {
            let e = Math.ceil((2 * n) / 8);
            t = i
              .create({ dkLen: e })
              .update((0, P.utf8ToBytes)("H2C-OVERSIZE-DST-"))
              .update(t)
              .digest();
          }
          if (r > 65535 || t.length > 255)
            throw Error("expand_message_xof: invalid lenInBytes");
          return i
            .create({ dkLen: r })
            .update(e)
            .update(eE(r, 2))
            .update(t)
            .update(eE(t.length, 1))
            .digest();
        })(e, d, c, o, f);
      else if ("_internal_pass" === s) n = e;
      else throw Error('expand must be "xmd" or "xof"');
      let h = Array(t);
      for (let e = 0; e < t; e++) {
        let t = Array(a);
        for (let r = 0; r < a; r++) {
          let o = u * (r + e * a),
            f = n.subarray(o, o + u);
          t[r] = F(ew(f), i);
        }
        h[e] = t;
      }
      return h;
    }
    let eA = BigInt(
        "0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"
      ),
      eI = BigInt(
        "0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"
      ),
      eS = BigInt(0),
      eO = BigInt(1),
      eR = BigInt(2),
      eT = (e, t) => (e + t / eR) / t;
    function eN(e) {
      let t = BigInt(3),
        r = BigInt(6),
        n = BigInt(11),
        i = BigInt(22),
        o = BigInt(23),
        a = BigInt(44),
        f = BigInt(88),
        s = (e * e * e) % eA,
        l = (s * s * e) % eA,
        d = (j(l, t, eA) * l) % eA,
        u = (j(d, t, eA) * l) % eA,
        c = (j(u, eR, eA) * s) % eA,
        h = (j(c, n, eA) * c) % eA,
        b = (j(h, i, eA) * h) % eA,
        x = (j(b, a, eA) * b) % eA,
        y = (j(x, f, eA) * x) % eA,
        g = (j(y, a, eA) * b) % eA,
        m = (j(g, t, eA) * l) % eA,
        p = (j(m, o, eA) * h) % eA,
        w = (j(p, r, eA) * s) % eA,
        E = j(w, eR, eA);
      if (!eq.eql(eq.sqr(E), e)) throw Error("Cannot find square root");
      return E;
    }
    let eq = $(eA, void 0, void 0, { sqrt: eN }),
      eU =
        ((L = {
          a: eS,
          b: BigInt(7),
          Fp: eq,
          n: eI,
          Gx: BigInt(
            "55066263022277343669578718895168534326250603453777594175500187360389116729240"
          ),
          Gy: BigInt(
            "32670510020758816978083085130507043184471273380659243275938904335757337482424"
          ),
          h: BigInt(1),
          lowS: !0,
          endo: {
            beta: BigInt(
              "0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"
            ),
            splitScalar: (e) => {
              let t = BigInt("0x3086d221a7d46bcde86c90e49284eb15"),
                r = -eO * BigInt("0xe4437ed6010e88286f547fa90abfe4c3"),
                n = BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),
                i = BigInt("0x100000000000000000000000000000000"),
                o = eT(t * e, eI),
                a = eT(-r * e, eI),
                f = F(e - o * t - a * n, eI),
                s = F(-o * r - a * t, eI),
                l = f > i,
                d = s > i;
              if ((l && (f = eI - f), d && (s = eI - s), f > i || s > i))
                throw Error("splitScalar: Endomorphism failed, k=" + e);
              return { k1neg: l, k1: f, k2neg: d, k2: s };
            },
          },
        }),
        {
          ...(n = (e) =>
            (function (e) {
              let t,
                r =
                  ((t = eu(e)),
                  (0, P.validateObject)(
                    t,
                    { hash: "hash", hmac: "function", randomBytes: "function" },
                    {
                      bits2int: "function",
                      bits2int_modN: "function",
                      lowS: "boolean",
                    }
                  ),
                  Object.freeze({ lowS: !0, ...t })),
                { Fp: n, n: i, nByteLength: o, nBitLength: a } = r,
                f = n.BYTES + 1,
                s = 2 * n.BYTES + 1;
              function l(e) {
                return F(e, i);
              }
              let {
                  ProjectivePoint: d,
                  normPrivateKeyToScalar: u,
                  weierstrassEquation: c,
                  isWithinCurveOrder: h,
                } = (function (e) {
                  var t;
                  let r = (function (e) {
                      let t = eu(e);
                      (0, P.validateObject)(
                        t,
                        { a: "field", b: "field" },
                        {
                          allowInfinityPoint: "boolean",
                          allowedPrivateKeyLengths: "array",
                          clearCofactor: "function",
                          fromBytes: "function",
                          isTorsionFree: "function",
                          toBytes: "function",
                          wrapPrivateKey: "boolean",
                        }
                      );
                      let { endo: r, Fp: n, a: i } = t;
                      if (r) {
                        if (!n.eql(i, n.ZERO))
                          throw Error("invalid endo: CURVE.a must be 0");
                        if (
                          "object" != typeof r ||
                          "bigint" != typeof r.beta ||
                          "function" != typeof r.splitScalar
                        )
                          throw Error(
                            'invalid endo: expected "beta": bigint and "splitScalar": function'
                          );
                      }
                      return Object.freeze({ ...t });
                    })(e),
                    { Fp: n } = r,
                    i = $(r.n, r.nBitLength),
                    o =
                      r.toBytes ||
                      ((e, t, r) => {
                        let i = t.toAffine();
                        return (0, P.concatBytes)(
                          Uint8Array.from([4]),
                          n.toBytes(i.x),
                          n.toBytes(i.y)
                        );
                      }),
                    a =
                      r.fromBytes ||
                      ((e) => {
                        let t = e.subarray(1);
                        return {
                          x: n.fromBytes(t.subarray(0, n.BYTES)),
                          y: n.fromBytes(t.subarray(n.BYTES, 2 * n.BYTES)),
                        };
                      });
                  function f(e) {
                    let { a: t, b: i } = r,
                      o = n.sqr(e),
                      a = n.mul(o, e);
                    return n.add(n.add(a, n.mul(e, t)), i);
                  }
                  function s(e, t) {
                    let r = n.sqr(t),
                      i = f(e);
                    return n.eql(r, i);
                  }
                  if (!s(r.Gx, r.Gy))
                    throw Error("bad curve params: generator point");
                  let l = n.mul(n.pow(r.a, em), ep),
                    d = n.mul(n.sqr(r.b), BigInt(27));
                  if (n.is0(n.add(l, d)))
                    throw Error("bad curve params: a or b");
                  function u(e) {
                    let t,
                      {
                        allowedPrivateKeyLengths: n,
                        nByteLength: i,
                        wrapPrivateKey: o,
                        n: a,
                      } = r;
                    if (n && "bigint" != typeof e) {
                      if (
                        ((0, P.isBytes)(e) && (e = (0, P.bytesToHex)(e)),
                        "string" != typeof e || !n.includes(e.length))
                      )
                        throw Error("invalid private key");
                      e = e.padStart(2 * i, "0");
                    }
                    try {
                      t =
                        "bigint" == typeof e
                          ? e
                          : (0, P.bytesToNumberBE)(
                              (0, P.ensureBytes)("private key", e, i)
                            );
                    } catch (t) {
                      throw Error(
                        "invalid private key, expected hex or " +
                          i +
                          " bytes, got " +
                          typeof e
                      );
                    }
                    return (
                      o && (t = F(t, a)),
                      (0, P.aInRange)("private key", t, ey, a),
                      t
                    );
                  }
                  function c(e) {
                    if (!(e instanceof x))
                      throw Error("ProjectivePoint expected");
                  }
                  let h = (0, P.memoized)((e, t) => {
                      let { px: r, py: i, pz: o } = e;
                      if (n.eql(o, n.ONE)) return { x: r, y: i };
                      let a = e.is0();
                      null == t && (t = a ? n.ONE : n.inv(o));
                      let f = n.mul(r, t),
                        s = n.mul(i, t),
                        l = n.mul(o, t);
                      if (a) return { x: n.ZERO, y: n.ZERO };
                      if (!n.eql(l, n.ONE)) throw Error("invZ was invalid");
                      return { x: f, y: s };
                    }),
                    b = (0, P.memoized)((e) => {
                      if (e.is0()) {
                        if (r.allowInfinityPoint && !n.is0(e.py)) return;
                        throw Error("bad point: ZERO");
                      }
                      let { x: t, y: i } = e.toAffine();
                      if (!n.isValid(t) || !n.isValid(i))
                        throw Error("bad point: x or y not FE");
                      if (!s(t, i))
                        throw Error("bad point: equation left != right");
                      if (!e.isTorsionFree())
                        throw Error("bad point: not in prime-order subgroup");
                      return !0;
                    });
                  class x {
                    constructor(e, t, r) {
                      if (null == e || !n.isValid(e)) throw Error("x required");
                      if (null == t || !n.isValid(t) || n.is0(t))
                        throw Error("y required");
                      if (null == r || !n.isValid(r)) throw Error("z required");
                      (this.px = e),
                        (this.py = t),
                        (this.pz = r),
                        Object.freeze(this);
                    }
                    static fromAffine(e) {
                      let { x: t, y: r } = e || {};
                      if (!e || !n.isValid(t) || !n.isValid(r))
                        throw Error("invalid affine point");
                      if (e instanceof x)
                        throw Error("projective point not allowed");
                      let i = (e) => n.eql(e, n.ZERO);
                      return i(t) && i(r) ? x.ZERO : new x(t, r, n.ONE);
                    }
                    get x() {
                      return this.toAffine().x;
                    }
                    get y() {
                      return this.toAffine().y;
                    }
                    static normalizeZ(e) {
                      let t = X(
                        n,
                        e.map((e) => e.pz)
                      );
                      return e
                        .map((e, r) => e.toAffine(t[r]))
                        .map(x.fromAffine);
                    }
                    static fromHex(e) {
                      let t = x.fromAffine(
                        a((0, P.ensureBytes)("pointHex", e))
                      );
                      return t.assertValidity(), t;
                    }
                    static fromPrivateKey(e) {
                      return x.BASE.multiply(u(e));
                    }
                    static msm(e, t) {
                      return (function (e, t, r, n) {
                        if (!Array.isArray(r)) throw Error("array expected");
                        r.forEach((t, r) => {
                          if (!(t instanceof e))
                            throw Error("invalid point at index " + r);
                        });
                        if (!Array.isArray(n))
                          throw Error("array of scalars expected");
                        n.forEach((e, r) => {
                          if (!t.isValid(e))
                            throw Error("invalid scalar at index " + r);
                        });
                        let i = r.length,
                          o = n.length;
                        if (i !== o)
                          throw Error(
                            "arrays of points and scalars must have equal length"
                          );
                        let a = e.ZERO,
                          f = (0, P.bitLen)(BigInt(i)),
                          s = 1;
                        f > 12
                          ? (s = f - 3)
                          : f > 4
                          ? (s = f - 2)
                          : f > 0 && (s = 2);
                        let l = (0, P.bitMask)(s),
                          d = Array(Number(l) + 1).fill(a),
                          u = Math.floor((t.BITS - 1) / s) * s,
                          c = a;
                        for (let e = u; e >= 0; e -= s) {
                          d.fill(a);
                          for (let t = 0; t < o; t++) {
                            let i = Number((n[t] >> BigInt(e)) & l);
                            d[i] = d[i].add(r[t]);
                          }
                          let t = a;
                          for (let e = d.length - 1, r = a; e > 0; e--)
                            (r = r.add(d[e])), (t = t.add(r));
                          if (((c = c.add(t)), 0 !== e))
                            for (let e = 0; e < s; e++) c = c.double();
                        }
                        return c;
                      })(x, i, e, t);
                    }
                    _setWindowSize(e) {
                      m.setWindowSize(this, e);
                    }
                    assertValidity() {
                      b(this);
                    }
                    hasEvenY() {
                      let { y: e } = this.toAffine();
                      if (n.isOdd) return !n.isOdd(e);
                      throw Error("Field doesn't support isOdd");
                    }
                    equals(e) {
                      c(e);
                      let { px: t, py: r, pz: i } = this,
                        { px: o, py: a, pz: f } = e,
                        s = n.eql(n.mul(t, f), n.mul(o, i)),
                        l = n.eql(n.mul(r, f), n.mul(a, i));
                      return s && l;
                    }
                    negate() {
                      return new x(this.px, n.neg(this.py), this.pz);
                    }
                    double() {
                      let { a: e, b: t } = r,
                        i = n.mul(t, em),
                        { px: o, py: a, pz: f } = this,
                        s = n.ZERO,
                        l = n.ZERO,
                        d = n.ZERO,
                        u = n.mul(o, o),
                        c = n.mul(a, a),
                        h = n.mul(f, f),
                        b = n.mul(o, a);
                      return (
                        (b = n.add(b, b)),
                        (d = n.mul(o, f)),
                        (d = n.add(d, d)),
                        (s = n.mul(e, d)),
                        (l = n.mul(i, h)),
                        (l = n.add(s, l)),
                        (s = n.sub(c, l)),
                        (l = n.add(c, l)),
                        (l = n.mul(s, l)),
                        (s = n.mul(b, s)),
                        (d = n.mul(i, d)),
                        (h = n.mul(e, h)),
                        (b = n.sub(u, h)),
                        (b = n.mul(e, b)),
                        (b = n.add(b, d)),
                        (d = n.add(u, u)),
                        (u = n.add(d, u)),
                        (u = n.add(u, h)),
                        (u = n.mul(u, b)),
                        (l = n.add(l, u)),
                        (h = n.mul(a, f)),
                        (h = n.add(h, h)),
                        (u = n.mul(h, b)),
                        (s = n.sub(s, u)),
                        (d = n.mul(h, c)),
                        (d = n.add(d, d)),
                        new x(s, l, (d = n.add(d, d)))
                      );
                    }
                    add(e) {
                      c(e);
                      let { px: t, py: i, pz: o } = this,
                        { px: a, py: f, pz: s } = e,
                        l = n.ZERO,
                        d = n.ZERO,
                        u = n.ZERO,
                        h = r.a,
                        b = n.mul(r.b, em),
                        y = n.mul(t, a),
                        g = n.mul(i, f),
                        m = n.mul(o, s),
                        p = n.add(t, i),
                        w = n.add(a, f);
                      (p = n.mul(p, w)),
                        (w = n.add(y, g)),
                        (p = n.sub(p, w)),
                        (w = n.add(t, o));
                      let E = n.add(a, s);
                      return (
                        (w = n.mul(w, E)),
                        (E = n.add(y, m)),
                        (w = n.sub(w, E)),
                        (E = n.add(i, o)),
                        (l = n.add(f, s)),
                        (E = n.mul(E, l)),
                        (l = n.add(g, m)),
                        (E = n.sub(E, l)),
                        (u = n.mul(h, w)),
                        (l = n.mul(b, m)),
                        (u = n.add(l, u)),
                        (l = n.sub(g, u)),
                        (u = n.add(g, u)),
                        (d = n.mul(l, u)),
                        (g = n.add(y, y)),
                        (g = n.add(g, y)),
                        (m = n.mul(h, m)),
                        (w = n.mul(b, w)),
                        (g = n.add(g, m)),
                        (m = n.sub(y, m)),
                        (m = n.mul(h, m)),
                        (w = n.add(w, m)),
                        (y = n.mul(g, w)),
                        (d = n.add(d, y)),
                        (y = n.mul(E, w)),
                        (l = n.mul(p, l)),
                        (l = n.sub(l, y)),
                        (y = n.mul(p, g)),
                        (u = n.mul(E, u)),
                        new x(l, d, (u = n.add(u, y)))
                      );
                    }
                    subtract(e) {
                      return this.add(e.negate());
                    }
                    is0() {
                      return this.equals(x.ZERO);
                    }
                    wNAF(e) {
                      return m.wNAFCached(this, e, x.normalizeZ);
                    }
                    multiplyUnsafe(e) {
                      let { endo: t, n: i } = r;
                      (0, P.aInRange)("scalar", e, ex, i);
                      let o = x.ZERO;
                      if (e === ex) return o;
                      if (this.is0() || e === ey) return this;
                      if (!t || m.hasPrecomputes(this))
                        return m.wNAFCachedUnsafe(this, e, x.normalizeZ);
                      let {
                          k1neg: a,
                          k1: f,
                          k2neg: s,
                          k2: l,
                        } = t.splitScalar(e),
                        d = o,
                        u = o,
                        c = this;
                      for (; f > ex || l > ex; )
                        f & ey && (d = d.add(c)),
                          l & ey && (u = u.add(c)),
                          (c = c.double()),
                          (f >>= ey),
                          (l >>= ey);
                      return (
                        a && (d = d.negate()),
                        s && (u = u.negate()),
                        (u = new x(n.mul(u.px, t.beta), u.py, u.pz)),
                        d.add(u)
                      );
                    }
                    multiply(e) {
                      let t,
                        i,
                        { endo: o, n: a } = r;
                      if (((0, P.aInRange)("scalar", e, ey, a), o)) {
                        let {
                            k1neg: r,
                            k1: a,
                            k2neg: f,
                            k2: s,
                          } = o.splitScalar(e),
                          { p: l, f: d } = this.wNAF(a),
                          { p: u, f: c } = this.wNAF(s);
                        (l = m.constTimeNegate(r, l)),
                          (u = m.constTimeNegate(f, u)),
                          (u = new x(n.mul(u.px, o.beta), u.py, u.pz)),
                          (t = l.add(u)),
                          (i = d.add(c));
                      } else {
                        let { p: r, f: n } = this.wNAF(e);
                        (t = r), (i = n);
                      }
                      return x.normalizeZ([t, i])[0];
                    }
                    multiplyAndAddUnsafe(e, t, r) {
                      let n = x.BASE,
                        i = (e, t) =>
                          t !== ex && t !== ey && e.equals(n)
                            ? e.multiply(t)
                            : e.multiplyUnsafe(t),
                        o = i(this, t).add(i(e, r));
                      return o.is0() ? void 0 : o;
                    }
                    toAffine(e) {
                      return h(this, e);
                    }
                    isTorsionFree() {
                      let { h: e, isTorsionFree: t } = r;
                      if (e === ey) return !0;
                      if (t) return t(x, this);
                      throw Error(
                        "isTorsionFree() has not been declared for the elliptic curve"
                      );
                    }
                    clearCofactor() {
                      let { h: e, clearCofactor: t } = r;
                      return e === ey
                        ? this
                        : t
                        ? t(x, this)
                        : this.multiplyUnsafe(r.h);
                    }
                    toRawBytes(e = !0) {
                      return (
                        (0, P.abool)("isCompressed", e),
                        this.assertValidity(),
                        o(x, this, e)
                      );
                    }
                    toHex(e = !0) {
                      return (
                        (0, P.abool)("isCompressed", e),
                        (0, P.bytesToHex)(this.toRawBytes(e))
                      );
                    }
                  }
                  (x.BASE = new x(r.Gx, r.Gy, n.ONE)),
                    (x.ZERO = new x(n.ZERO, n.ONE, n.ZERO));
                  let { endo: y, nBitLength: g } = r,
                    m =
                      ((t = y ? Math.ceil(g / 2) : g),
                      {
                        constTimeNegate: ei,
                        hasPrecomputes: (e) => 1 !== ed(e),
                        unsafeLadder(e, t, r = x.ZERO) {
                          let n = e;
                          for (; t > er; )
                            t & en && (r = r.add(n)),
                              (n = n.double()),
                              (t >>= en);
                          return r;
                        },
                        precomputeWindow(e, r) {
                          let { windows: n, windowSize: i } = ea(r, t),
                            o = [],
                            a = e,
                            f = a;
                          for (let e = 0; e < n; e++) {
                            (f = a), o.push(f);
                            for (let e = 1; e < i; e++)
                              (f = f.add(a)), o.push(f);
                            a = f.double();
                          }
                          return o;
                        },
                        wNAF(e, r, n) {
                          let i = x.ZERO,
                            o = x.BASE,
                            a = ea(e, t);
                          for (let e = 0; e < a.windows; e++) {
                            let {
                              nextN: t,
                              offset: f,
                              isZero: s,
                              isNeg: l,
                              isNegF: d,
                              offsetF: u,
                            } = ef(n, e, a);
                            (n = t),
                              s
                                ? (o = o.add(ei(d, r[u])))
                                : (i = i.add(ei(l, r[f])));
                          }
                          return { p: i, f: o };
                        },
                        wNAFUnsafe(e, r, n, i = x.ZERO) {
                          let o = ea(e, t);
                          for (let e = 0; e < o.windows && n !== er; e++) {
                            let {
                              nextN: t,
                              offset: a,
                              isZero: f,
                              isNeg: s,
                            } = ef(n, e, o);
                            if (((n = t), !f)) {
                              let e = r[a];
                              i = i.add(s ? e.negate() : e);
                            }
                          }
                          return i;
                        },
                        getPrecomputes(e, t, r) {
                          let n = es.get(t);
                          return (
                            n ||
                              ((n = this.precomputeWindow(t, e)),
                              1 !== e && es.set(t, r(n))),
                            n
                          );
                        },
                        wNAFCached(e, t, r) {
                          let n = ed(e);
                          return this.wNAF(n, this.getPrecomputes(n, e, r), t);
                        },
                        wNAFCachedUnsafe(e, t, r, n) {
                          let i = ed(e);
                          return 1 === i
                            ? this.unsafeLadder(e, t, n)
                            : this.wNAFUnsafe(
                                i,
                                this.getPrecomputes(i, e, r),
                                t,
                                n
                              );
                        },
                        setWindowSize(e, r) {
                          eo(r, t), el.set(e, r), es.delete(e);
                        },
                      });
                  return {
                    CURVE: r,
                    ProjectivePoint: x,
                    normPrivateKeyToScalar: u,
                    weierstrassEquation: f,
                    isWithinCurveOrder: function (e) {
                      return (0, P.inRange)(e, ey, r.n);
                    },
                  };
                })({
                  ...r,
                  toBytes(e, t, r) {
                    let i = t.toAffine(),
                      o = n.toBytes(i.x),
                      a = P.concatBytes;
                    return ((0, P.abool)("isCompressed", r), r)
                      ? a(Uint8Array.from([t.hasEvenY() ? 2 : 3]), o)
                      : a(Uint8Array.from([4]), o, n.toBytes(i.y));
                  },
                  fromBytes(e) {
                    let t = e.length,
                      r = e[0],
                      i = e.subarray(1);
                    if (t === f && (2 === r || 3 === r)) {
                      let e,
                        t = (0, P.bytesToNumberBE)(i);
                      if (!(0, P.inRange)(t, ey, n.ORDER))
                        throw Error("Point is not on curve");
                      let o = c(t);
                      try {
                        e = n.sqrt(o);
                      } catch (e) {
                        throw Error(
                          "Point is not on curve" +
                            (e instanceof Error ? ": " + e.message : "")
                        );
                      }
                      return (
                        ((1 & r) == 1) != ((e & ey) === ey) && (e = n.neg(e)),
                        { x: t, y: e }
                      );
                    }
                    if (t === s && 4 === r)
                      return {
                        x: n.fromBytes(i.subarray(0, n.BYTES)),
                        y: n.fromBytes(i.subarray(n.BYTES, 2 * n.BYTES)),
                      };
                    throw Error(
                      "invalid Point, expected length of " +
                        f +
                        ", or uncompressed " +
                        s +
                        ", got " +
                        t
                    );
                  },
                }),
                b = (e, t, r) => (0, P.bytesToNumberBE)(e.slice(t, r));
              class x {
                constructor(e, t, r) {
                  (0, P.aInRange)("r", e, ey, i),
                    (0, P.aInRange)("s", t, ey, i),
                    (this.r = e),
                    (this.s = t),
                    null != r && (this.recovery = r),
                    Object.freeze(this);
                }
                static fromCompact(e) {
                  return new x(
                    b(
                      (e = (0, P.ensureBytes)("compactSignature", e, 2 * o)),
                      0,
                      o
                    ),
                    b(e, o, 2 * o)
                  );
                }
                static fromDER(e) {
                  let { r: t, s: r } = eh.toSig((0, P.ensureBytes)("DER", e));
                  return new x(t, r);
                }
                assertValidity() {}
                addRecoveryBit(e) {
                  return new x(this.r, this.s, e);
                }
                recoverPublicKey(e) {
                  let { r: t, s: o, recovery: a } = this,
                    f = m((0, P.ensureBytes)("msgHash", e));
                  if (null == a || ![0, 1, 2, 3].includes(a))
                    throw Error("recovery id invalid");
                  let s = 2 === a || 3 === a ? t + r.n : t;
                  if (s >= n.ORDER) throw Error("recovery id 2 or 3 invalid");
                  let u = (1 & a) == 0 ? "02" : "03",
                    c = d.fromHex(u + eb(s, n.BYTES)),
                    h = K(s, i),
                    b = l(-f * h),
                    x = l(o * h),
                    y = d.BASE.multiplyAndAddUnsafe(c, b, x);
                  if (!y) throw Error("point at infinify");
                  return y.assertValidity(), y;
                }
                hasHighS() {
                  return this.s > i >> ey;
                }
                normalizeS() {
                  return this.hasHighS()
                    ? new x(this.r, l(-this.s), this.recovery)
                    : this;
                }
                toDERRawBytes() {
                  return (0, P.hexToBytes)(this.toDERHex());
                }
                toDERHex() {
                  return eh.hexFromSig(this);
                }
                toCompactRawBytes() {
                  return (0, P.hexToBytes)(this.toCompactHex());
                }
                toCompactHex() {
                  return eb(this.r, o) + eb(this.s, o);
                }
              }
              function y(e) {
                if ("bigint" == typeof e) return !1;
                if (e instanceof d) return !0;
                let t = (0, P.ensureBytes)("key", e).length,
                  i = n.BYTES,
                  a = i + 1;
                if (!r.allowedPrivateKeyLengths && o !== a)
                  return t === a || t === 2 * i + 1;
              }
              let g =
                  r.bits2int ||
                  function (e) {
                    if (e.length > 8192) throw Error("input is too large");
                    let t = (0, P.bytesToNumberBE)(e),
                      r = 8 * e.length - a;
                    return r > 0 ? t >> BigInt(r) : t;
                  },
                m =
                  r.bits2int_modN ||
                  function (e) {
                    return l(g(e));
                  },
                p = (0, P.bitMask)(a);
              function w(e) {
                return (
                  (0, P.aInRange)("num < 2^" + a, e, ex, p),
                  (0, P.numberToBytesBE)(e, o)
                );
              }
              let E = { lowS: r.lowS, prehash: !1 },
                B = { lowS: r.lowS, prehash: !1 };
              return (
                d.BASE._setWindowSize(8),
                {
                  CURVE: r,
                  getPublicKey: function (e, t = !0) {
                    return d.fromPrivateKey(e).toRawBytes(t);
                  },
                  getSharedSecret: function (e, t, r = !0) {
                    if (!0 === y(e))
                      throw Error("first arg must be private key");
                    if (!1 === y(t))
                      throw Error("second arg must be public key");
                    return d.fromHex(t).multiply(u(e)).toRawBytes(r);
                  },
                  sign: function (e, t, o = E) {
                    let { seed: a, k2sig: f } = (function (e, t, o = E) {
                      if (["recovered", "canonical"].some((e) => e in o))
                        throw Error("sign() legacy options not supported");
                      let { hash: a, randomBytes: f } = r,
                        { lowS: s, prehash: c, extraEntropy: b } = o;
                      null == s && (s = !0),
                        (e = (0, P.ensureBytes)("msgHash", e)),
                        ec(o),
                        c &&
                          (e = (0, P.ensureBytes)("prehashed msgHash", a(e)));
                      let y = m(e),
                        p = u(t),
                        B = [w(p), w(y)];
                      if (null != b && !1 !== b) {
                        let e = !0 === b ? f(n.BYTES) : b;
                        B.push((0, P.ensureBytes)("extraEntropy", e));
                      }
                      return {
                        seed: (0, P.concatBytes)(...B),
                        k2sig: function (e) {
                          var t;
                          let r = g(e);
                          if (!h(r)) return;
                          let n = K(r, i),
                            o = d.BASE.multiply(r).toAffine(),
                            a = l(o.x);
                          if (a === ex) return;
                          let f = l(n * l(y + a * p));
                          if (f === ex) return;
                          let u = (2 * (o.x !== a)) | Number(o.y & ey),
                            c = f;
                          return (
                            s &&
                              f > i >> ey &&
                              ((c = (t = f) > i >> ey ? l(-t) : t), (u ^= 1)),
                            new x(a, c, u)
                          );
                        },
                      };
                    })(e, t, o);
                    return (0, P.createHmacDrbg)(
                      r.hash.outputLen,
                      r.nByteLength,
                      r.hmac
                    )(a, f);
                  },
                  verify: function (e, t, n, o = B) {
                    let a, f;
                    (t = (0, P.ensureBytes)("msgHash", t)),
                      (n = (0, P.ensureBytes)("publicKey", n));
                    let { lowS: s, prehash: u, format: c } = o;
                    if ((ec(o), "strict" in o))
                      throw Error("options.strict was renamed to lowS");
                    if (void 0 !== c && "compact" !== c && "der" !== c)
                      throw Error("format must be compact or der");
                    let h = "string" == typeof e || (0, P.isBytes)(e),
                      b =
                        !h &&
                        !c &&
                        "object" == typeof e &&
                        null !== e &&
                        "bigint" == typeof e.r &&
                        "bigint" == typeof e.s;
                    if (!h && !b)
                      throw Error(
                        "invalid signature, expected Uint8Array, hex string or Signature instance"
                      );
                    try {
                      if ((b && (f = new x(e.r, e.s)), h)) {
                        try {
                          "compact" !== c && (f = x.fromDER(e));
                        } catch (e) {
                          if (!(e instanceof eh.Err)) throw e;
                        }
                        f || "der" === c || (f = x.fromCompact(e));
                      }
                      a = d.fromHex(n);
                    } catch (e) {
                      return !1;
                    }
                    if (!f || (s && f.hasHighS())) return !1;
                    u && (t = r.hash(t));
                    let { r: y, s: g } = f,
                      p = m(t),
                      w = K(g, i),
                      E = l(p * w),
                      v = l(y * w),
                      A = d.BASE.multiplyAndAddUnsafe(a, E, v)?.toAffine();
                    return !!A && l(A.x) === y;
                  },
                  ProjectivePoint: d,
                  Signature: x,
                  utils: {
                    isValidPrivateKey(e) {
                      try {
                        return u(e), !0;
                      } catch (e) {
                        return !1;
                      }
                    },
                    normPrivateKeyToScalar: u,
                    randomPrivateKey: () => {
                      let e = et(r.n);
                      return (function (e, t, r = !1) {
                        let n = e.length,
                          i = ee(t),
                          o = et(t);
                        if (n < 16 || n < o || n > 1024)
                          throw Error(
                            "expected " + o + "-1024 bytes of input, got " + n
                          );
                        let a =
                          F(
                            r
                              ? (0, P.bytesToNumberLE)(e)
                              : (0, P.bytesToNumberBE)(e),
                            t - Z
                          ) + Z;
                        return r
                          ? (0, P.numberToBytesLE)(a, i)
                          : (0, P.numberToBytesBE)(a, i);
                      })(r.randomBytes(e), r.n);
                    },
                    precompute: (e = 8, t = d.BASE) => (
                      t._setWindowSize(e), t.multiply(BigInt(3)), t
                    ),
                  },
                }
              );
            })({
              ...L,
              hash: e,
              hmac: (t, ...r) =>
                U(
                  e,
                  t,
                  (function (...e) {
                    let t = 0;
                    for (let r = 0; r < e.length; r++) {
                      let n = e[r];
                      f(n), (t += n.length);
                    }
                    let r = new Uint8Array(t);
                    for (let t = 0, n = 0; t < e.length; t++) {
                      let i = e[t];
                      r.set(i, n), (n += i.length);
                    }
                    return r;
                  })(...r)
                ),
              randomBytes: b,
            }))(N),
          create: n,
        }),
      eH = {};
    function eL(e, ...t) {
      let r = eH[e];
      if (void 0 === r) {
        let t = N(Uint8Array.from(e, (e) => e.charCodeAt(0)));
        (r = (0, P.concatBytes)(t, t)), (eH[e] = r);
      }
      return N((0, P.concatBytes)(r, ...t));
    }
    let eP = (e) => e.toRawBytes(!0).slice(1),
      eC = (e) => (0, P.numberToBytesBE)(e, 32),
      eZ = eU.ProjectivePoint;
    function eD(e) {
      let t = eU.utils.normPrivateKeyToScalar(e),
        r = eZ.fromPrivateKey(t);
      return { scalar: r.hasEvenY() ? t : F(-t, eI), bytes: eP(r) };
    }
    function ez(e) {
      (0, P.aInRange)("x", e, eO, eA);
      let t = F(e * e, eA),
        r = eN(F(t * e + BigInt(7), eA));
      r % eR !== eS && (r = F(-r, eA));
      let n = new eZ(e, r, eO);
      return n.assertValidity(), n;
    }
    let e_ = P.bytesToNumberBE;
    function ek(...e) {
      return F(e_(eL("BIP0340/challenge", ...e)), eI);
    }
    function eV(e, t, r) {
      let n = (0, P.ensureBytes)("signature", e, 64),
        i = (0, P.ensureBytes)("message", t),
        o = (0, P.ensureBytes)("publicKey", r, 32);
      try {
        let e,
          t,
          r = ez(e_(o)),
          a = e_(n.subarray(0, 32));
        if (!(0, P.inRange)(a, eO, eA)) return !1;
        let f = e_(n.subarray(32, 64));
        if (!(0, P.inRange)(f, eO, eI)) return !1;
        let s = ek(eC(a), eP(r), i),
          l = ((e = -s), (t = F(e, eI)), eZ.BASE.multiplyAndAddUnsafe(r, f, t));
        if (!l || !l.hasEvenY() || l.toAffine().x !== a) return !1;
        return !0;
      } catch (e) {
        return !1;
      }
    }
    let eF = {
        getPublicKey: function (e) {
          return eD(e).bytes;
        },
        sign: function (e, t, r = b(32)) {
          let n = (0, P.ensureBytes)("message", e),
            { bytes: i, scalar: o } = eD(t),
            a = eC(
              o ^ e_(eL("BIP0340/aux", (0, P.ensureBytes)("auxRand", r, 32)))
            ),
            f = F(e_(eL("BIP0340/nonce", a, i, n)), eI);
          if (f === eS) throw Error("sign failed: k is zero");
          let { bytes: s, scalar: l } = eD(f),
            d = ek(s, i, n),
            u = new Uint8Array(64);
          if ((u.set(s, 0), u.set(eC(F(l + d * o, eI)), 32), !eV(u, n, i)))
            throw Error("sign: Invalid signature produced");
          return u;
        },
        verify: eV,
        utils: {
          randomPrivateKey: eU.utils.randomPrivateKey,
          lift_x: ez,
          pointToBytes: eP,
          numberToBytesBE: P.numberToBytesBE,
          bytesToNumberBE: P.bytesToNumberBE,
          taggedHash: eL,
          mod: F,
        },
      },
      ej =
        ((i = [
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
        ]
          .map((e) => e.map((e) => BigInt(e)))
          .map((e) => Array.from(e).reverse())),
        (e, t) => {
          let [r, n, o, a] = i.map((t) =>
              t.reduce((t, r) => eq.add(eq.mul(t, e), r))
            ),
            [f, s] = X(eq, [n, a], !0);
          return (
            (e = eq.mul(r, f)), (t = eq.mul(t, eq.mul(o, s))), { x: e, y: t }
          );
        }),
      eK = (function (e, t) {
        if ((G(e), !e.isValid(t.A) || !e.isValid(t.B) || !e.isValid(t.Z)))
          throw Error("mapToCurveSimpleSWU: invalid opts");
        let r = (function (e, t) {
          let r = e.ORDER,
            n = ex;
          for (let e = r - ey; e % eg === ex; e /= eg) n += ey;
          let i = n,
            o = eg << (i - ey - ey),
            a = o * eg,
            f = (r - ey) / a,
            s = (f - ey) / eg,
            l = a - ey,
            d = e.pow(t, f),
            u = e.pow(t, (f + ey) / eg),
            c = (t, r) => {
              let n = d,
                a = e.pow(r, l),
                f = e.sqr(a);
              f = e.mul(f, r);
              let c = e.mul(t, f);
              (c = e.pow(c, s)),
                (c = e.mul(c, a)),
                (a = e.mul(c, r)),
                (f = e.mul(c, t));
              let h = e.mul(f, a);
              c = e.pow(h, o);
              let b = e.eql(c, e.ONE);
              (a = e.mul(f, u)),
                (c = e.mul(h, n)),
                (f = e.cmov(a, f, b)),
                (h = e.cmov(c, h, b));
              for (let t = i; t > ey; t--) {
                let r = t - eg;
                r = eg << (r - ey);
                let i = e.pow(h, r),
                  o = e.eql(i, e.ONE);
                (a = e.mul(f, n)),
                  (n = e.mul(n, n)),
                  (i = e.mul(h, n)),
                  (f = e.cmov(a, f, o)),
                  (h = e.cmov(i, h, o));
              }
              return { isValid: b, value: f };
            };
          if (e.ORDER % ep === em) {
            let r = (e.ORDER - em) / ep,
              n = e.sqrt(e.neg(t));
            c = (t, i) => {
              let o = e.sqr(i),
                a = e.mul(t, i);
              o = e.mul(o, a);
              let f = e.pow(o, r);
              f = e.mul(f, a);
              let s = e.mul(f, n),
                l = e.mul(e.sqr(f), i),
                d = e.eql(l, t),
                u = e.cmov(s, f, d);
              return { isValid: d, value: u };
            };
          }
          return c;
        })(e, t.Z);
        if (!e.isOdd) throw Error("Fp.isOdd is not implemented!");
        return (n) => {
          let i, o, a, f, s, l, d, u;
          (i = e.sqr(n)),
            (i = e.mul(i, t.Z)),
            (o = e.sqr(i)),
            (o = e.add(o, i)),
            (a = e.add(o, e.ONE)),
            (a = e.mul(a, t.B)),
            (f = e.cmov(t.Z, e.neg(o), !e.eql(o, e.ZERO))),
            (f = e.mul(f, t.A)),
            (o = e.sqr(a)),
            (l = e.sqr(f)),
            (s = e.mul(l, t.A)),
            (o = e.add(o, s)),
            (o = e.mul(o, a)),
            (l = e.mul(l, f)),
            (s = e.mul(l, t.B)),
            (o = e.add(o, s)),
            (d = e.mul(i, a));
          let { isValid: c, value: h } = r(o, l);
          (u = e.mul(i, n)),
            (u = e.mul(u, h)),
            (d = e.cmov(d, a, c)),
            (u = e.cmov(u, h, c));
          let b = e.isOdd(n) === e.isOdd(u);
          u = e.cmov(e.neg(u), u, b);
          let x = X(e, [f], !0)[0];
          return { x: (d = e.mul(d, x)), y: u };
        };
      })(eq, {
        A: BigInt(
          "0x3f8731abdd661adca08a5558f0f5d272e953d363cb6f0e5d405447c01a444533"
        ),
        B: BigInt("1771"),
        Z: eq.create(BigInt("-11")),
      }),
      eM = (function (e, t, r) {
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
            let o = ev(e, 2, { ...r, DST: r.DST, ...t }),
              a = n(o[0]),
              f = n(o[1]);
            return i(a.add(f));
          },
          encodeToCurve: (e, t) =>
            i(n(ev(e, 1, { ...r, DST: r.encodeDST, ...t })[0])),
          mapToCurve(e) {
            if (!Array.isArray(e)) throw Error("expected array of bigints");
            for (let t of e)
              if ("bigint" != typeof t)
                throw Error("expected array of bigints");
            return i(n(e));
          },
        };
      })(
        eU.ProjectivePoint,
        (e) => {
          let { x: t, y: r } = eK(eq.create(e[0]));
          return ej(t, r);
        },
        {
          DST: "secp256k1_XMD:SHA-256_SSWU_RO_",
          encodeDST: "secp256k1_XMD:SHA-256_SSWU_NU_",
          p: eq.ORDER,
          m: 1,
          k: 128,
          expand: "xmd",
          hash: N,
        }
      ),
      eY = eM.hashToCurve,
      eW = eM.encodeToCurve;
    e.s(
      [
        "encodeToCurve",
        0,
        eW,
        "hashToCurve",
        0,
        eY,
        "schnorr",
        0,
        eF,
        "secp256k1",
        0,
        eU,
        "secp256k1_hasher",
        0,
        eM,
      ],
      667055
    );
  },
]);
