(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  569934,
  (e) => {
    "use strict";
    let t = "2.55.2",
      r = {
        getDocsUrl: ({ docsBaseUrl: e, docsPath: t = "", docsSlug: r }) =>
          t ? `${e ?? "https://viem.sh"}${t}${r ? `#${r}` : ""}` : void 0,
        version: `viem@${t}`,
      };
    class s extends Error {
      constructor(e, i = {}) {
        const o =
            i.cause instanceof s
              ? i.cause.details
              : i.cause?.message
              ? i.cause.message
              : i.details,
          n = (i.cause instanceof s && i.cause.docsPath) || i.docsPath,
          a = r.getDocsUrl?.({ ...i, docsPath: n });
        super(
          [
            e || "An error occurred.",
            "",
            ...(i.metaMessages ? [...i.metaMessages, ""] : []),
            ...(a ? [`Docs: ${a}`] : []),
            ...(o ? [`Details: ${o}`] : []),
            ...(r.version ? [`Version: ${r.version}`] : []),
          ].join("\n"),
          i.cause ? { cause: i.cause } : void 0
        ),
          Object.defineProperty(this, "details", {
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
          Object.defineProperty(this, "metaMessages", {
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
          Object.defineProperty(this, "version", {
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
          (this.details = o),
          (this.docsPath = n),
          (this.metaMessages = i.metaMessages),
          (this.name = i.name ?? this.name),
          (this.shortMessage = e),
          (this.version = t);
      }
      walk(e) {
        return (function e(t, r) {
          return r?.(t)
            ? t
            : t && "object" == typeof t && "cause" in t && void 0 !== t.cause
            ? e(t.cause, r)
            : r
            ? null
            : t;
        })(this, e);
      }
    }
    e.s(["BaseError", () => s], 569934);
  },
  400564,
  (e) => {
    "use strict";
    var t = e.i(569934);
    class r extends t.BaseError {
      constructor({ max: e, min: t, signed: r, size: s, value: i }) {
        super(
          `Number "${i}" is not in safe ${
            s ? `${8 * s}-bit ${r ? "signed" : "unsigned"} ` : ""
          }integer range ${e ? `(${t} to ${e})` : `(above ${t})`}`,
          { name: "IntegerOutOfRangeError" }
        );
      }
    }
    class s extends t.BaseError {
      constructor(e) {
        super(
          `Bytes value "${e}" is not a valid boolean. The bytes array must contain a single byte of either a 0 or 1 value.`,
          { name: "InvalidBytesBooleanError" }
        );
      }
    }
    class i extends t.BaseError {
      constructor(e) {
        super(
          `Hex value "${e}" is not a valid boolean. The hex value must be "0x0" (false) or "0x1" (true).`,
          { name: "InvalidHexBooleanError" }
        );
      }
    }
    t.BaseError, t.BaseError, t.BaseError, t.BaseError;
    class o extends t.BaseError {
      constructor({ givenSize: e, maxSize: t }) {
        super(`Size cannot exceed ${t} bytes. Given size: ${e} bytes.`, {
          name: "SizeOverflowError",
        });
      }
    }
    e.s([
      "IntegerOutOfRangeError",
      () => r,
      "InvalidBytesBooleanError",
      () => s,
      "InvalidHexBooleanError",
      () => i,
      "SizeOverflowError",
      () => o,
    ]);
  },
  401319,
  880841,
  (e) => {
    "use strict";
    function t(e, { strict: r = !0 } = {}) {
      return (
        !!e &&
        "string" == typeof e &&
        (r ? /^0x[0-9a-fA-F]*$/.test(e) : e.startsWith("0x"))
      );
    }
    function r(e) {
      return t(e, { strict: !1 }) ? Math.ceil((e.length - 2) / 2) : e.length;
    }
    e.s(["isHex", () => t], 880841), e.s(["size", () => r], 401319);
  },
  8406,
  (e) => {
    "use strict";
    function t(e, { dir: r = "left" } = {}) {
      let s = "string" == typeof e ? e.replace("0x", "") : e,
        i = 0;
      for (let e = 0; e < s.length - 1; e++)
        if ("0" === s["left" === r ? e : s.length - e - 1].toString()) i++;
        else break;
      return ((s = "left" === r ? s.slice(i) : s.slice(0, s.length - i)),
      "string" == typeof e)
        ? (1 === s.length && "right" === r && (s = `${s}0`),
          `0x${s.length % 2 == 1 ? `0${s}` : s}`)
        : s;
    }
    e.s(["trim", () => t]);
  },
  22411,
  587286,
  (e) => {
    "use strict";
    var t = e.i(569934);
    class r extends t.BaseError {
      constructor({ offset: e, position: t, size: r }) {
        super(
          `Slice ${
            "start" === t ? "starting" : "ending"
          } at offset "${e}" is out-of-bounds (size: ${r}).`,
          { name: "SliceOffsetOutOfBoundsError" }
        );
      }
    }
    class s extends t.BaseError {
      constructor({ size: e, targetSize: t, type: r }) {
        super(
          `${r.charAt(0).toUpperCase()}${r
            .slice(1)
            .toLowerCase()} size (${e}) exceeds padding size (${t}).`,
          { name: "SizeExceedsPaddingSizeError" }
        );
      }
    }
    class i extends t.BaseError {
      constructor({ size: e, targetSize: t, type: r }) {
        super(
          `${r.charAt(0).toUpperCase()}${r
            .slice(1)
            .toLowerCase()} is expected to be ${t} ${r} long, but is ${e} ${r} long.`,
          { name: "InvalidBytesLengthError" }
        );
      }
    }
    function o(e, { dir: t, size: r = 32 } = {}) {
      return "string" == typeof e
        ? n(e, { dir: t, size: r })
        : (function (e, { dir: t, size: r = 32 } = {}) {
            if (null === r) return e;
            if (e.length > r)
              throw new s({ size: e.length, targetSize: r, type: "bytes" });
            let i = new Uint8Array(r);
            for (let s = 0; s < r; s++) {
              let o = "right" === t;
              i[o ? s : r - s - 1] = e[o ? s : e.length - s - 1];
            }
            return i;
          })(e, { dir: t, size: r });
    }
    function n(e, { dir: t, size: r = 32 } = {}) {
      if (null === r) return e;
      let i = e.replace("0x", "");
      if (i.length > 2 * r)
        throw new s({
          size: Math.ceil(i.length / 2),
          targetSize: r,
          type: "hex",
        });
      return `0x${i["right" === t ? "padEnd" : "padStart"](2 * r, "0")}`;
    }
    e.s(
      [
        "InvalidBytesLengthError",
        () => i,
        "SizeExceedsPaddingSizeError",
        () => s,
        "SliceOffsetOutOfBoundsError",
        () => r,
      ],
      587286
    ),
      e.s(["pad", () => o, "padHex", () => n], 22411);
  },
  675107,
  (e) => {
    "use strict";
    e.s([
      "boolToHex",
      () => n,
      "bytesToHex",
      () => a,
      "numberToHex",
      () => c,
      "stringToHex",
      () => l,
      "toHex",
      () => o,
    ]);
    var t = e.i(400564),
      r = e.i(22411),
      s = e.i(450323);
    let i = Array.from({ length: 256 }, (e, t) =>
      t.toString(16).padStart(2, "0")
    );
    function o(e, t = {}) {
      return "number" == typeof e || "bigint" == typeof e
        ? c(e, t)
        : "string" == typeof e
        ? l(e, t)
        : "boolean" == typeof e
        ? n(e, t)
        : a(e, t);
    }
    function n(e, t = {}) {
      let i = `0x${Number(e)}`;
      return "number" == typeof t.size
        ? ((0, s.assertSize)(i, { size: t.size }),
          (0, r.pad)(i, { size: t.size }))
        : i;
    }
    function a(e, t = {}) {
      let o = "";
      for (let t = 0; t < e.length; t++) o += i[e[t]];
      let n = `0x${o}`;
      return "number" == typeof t.size
        ? ((0, s.assertSize)(n, { size: t.size }),
          (0, r.pad)(n, { dir: "right", size: t.size }))
        : n;
    }
    function c(e, s = {}) {
      let i,
        { signed: o, size: n } = s,
        a = BigInt(e);
      n
        ? (i = o
            ? (1n << (8n * BigInt(n) - 1n)) - 1n
            : 2n ** (8n * BigInt(n)) - 1n)
        : "number" == typeof e && (i = BigInt(Number.MAX_SAFE_INTEGER));
      let u = "bigint" == typeof i && o ? -i - 1n : 0;
      if ((i && a > i) || a < u) {
        let r = "bigint" == typeof e ? "n" : "";
        throw new t.IntegerOutOfRangeError({
          max: i ? `${i}${r}` : void 0,
          min: `${u}${r}`,
          signed: o,
          size: n,
          value: `${e}${r}`,
        });
      }
      let l = `0x${(o && a < 0
        ? (1n << BigInt(8 * n)) + BigInt(a)
        : a
      ).toString(16)}`;
      return n ? (0, r.pad)(l, { size: n }) : l;
    }
    let u = new TextEncoder();
    function l(e, t = {}) {
      return a(u.encode(e), t);
    }
  },
  769936,
  (e) => {
    "use strict";
    e.s(["hexToBytes", () => u, "stringToBytes", () => l, "toBytes", () => a]);
    var t = e.i(569934),
      r = e.i(880841),
      s = e.i(22411),
      i = e.i(450323),
      o = e.i(675107);
    let n = new TextEncoder();
    function a(e, t = {}) {
      var n, c;
      return "number" == typeof e || "bigint" == typeof e
        ? ((n = e), (c = t), u((0, o.numberToHex)(n, c)))
        : "boolean" == typeof e
        ? (function (e, t = {}) {
            let r = new Uint8Array(1);
            return ((r[0] = Number(e)), "number" == typeof t.size)
              ? ((0, i.assertSize)(r, { size: t.size }),
                (0, s.pad)(r, { size: t.size }))
              : r;
          })(e, t)
        : (0, r.isHex)(e)
        ? u(e, t)
        : l(e, t);
    }
    function c(e) {
      return e >= 48 && e <= 57
        ? e - 48
        : e >= 65 && e <= 70
        ? e - 55
        : e >= 97 && e <= 102
        ? e - 87
        : void 0;
    }
    function u(e, r = {}) {
      let o = e;
      r.size &&
        ((0, i.assertSize)(o, { size: r.size }),
        (o = (0, s.pad)(o, { dir: "right", size: r.size })));
      let n = o.slice(2);
      n.length % 2 && (n = `0${n}`);
      let a = n.length / 2,
        l = new Uint8Array(a);
      for (let e = 0, r = 0; e < a; e++) {
        let s = c(n.charCodeAt(r++)),
          i = c(n.charCodeAt(r++));
        if (void 0 === s || void 0 === i)
          throw new t.BaseError(
            `Invalid byte sequence ("${n[r - 2]}${n[r - 1]}" in "${n}").`
          );
        l[e] = 16 * s + i;
      }
      return l;
    }
    function l(e, t = {}) {
      let r = n.encode(e);
      return "number" == typeof t.size
        ? ((0, i.assertSize)(r, { size: t.size }),
          (0, s.pad)(r, { dir: "right", size: t.size }))
        : r;
    }
  },
  450323,
  (e) => {
    "use strict";
    e.s([
      "assertSize",
      () => i,
      "hexToBigInt",
      () => o,
      "hexToBool",
      () => n,
      "hexToNumber",
      () => a,
    ]);
    var t = e.i(400564),
      r = e.i(401319),
      s = e.i(8406);
    function i(e, { size: s }) {
      if ((0, r.size)(e) > s)
        throw new t.SizeOverflowError({
          givenSize: (0, r.size)(e),
          maxSize: s,
        });
    }
    function o(e, t = {}) {
      let { signed: r } = t;
      t.size && i(e, { size: t.size });
      let s = BigInt(e);
      if (!r) return s;
      let n = (e.length - 2) / 2;
      return s <= (1n << (8n * BigInt(n) - 1n)) - 1n
        ? s
        : s - BigInt(`0x${"f".padStart(2 * n, "f")}`) - 1n;
    }
    function n(e, r = {}) {
      let o = e;
      if (
        (r.size && (i(o, { size: r.size }), (o = (0, s.trim)(o))),
        "0x00" === (0, s.trim)(o))
      )
        return !1;
      if ("0x01" === (0, s.trim)(o)) return !0;
      throw new t.InvalidHexBooleanError(o);
    }
    function a(e, r = {}) {
      let s = o(e, r),
        i = Number(s);
      if (!Number.isSafeInteger(i))
        throw new t.IntegerOutOfRangeError({
          max: `${Number.MAX_SAFE_INTEGER}`,
          min: `${Number.MIN_SAFE_INTEGER}`,
          signed: r.signed,
          size: r.size,
          value: `${s}n`,
        });
      return i;
    }
    e.i(769936);
  },
  608861,
  976677,
  (e) => {
    "use strict";
    var t = e.i(569934);
    class r extends t.BaseError {
      constructor({ address: e }) {
        super(`Address "${e}" is invalid.`, {
          metaMessages: [
            "- Address must be a hex value of 20 bytes (40 hex characters).",
            "- Address must match its checksum counterpart.",
          ],
          name: "InvalidAddressError",
        });
      }
    }
    e.s(["InvalidAddressError", () => r], 608861);
    class s extends Map {
      constructor(e) {
        super(),
          Object.defineProperty(this, "maxSize", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          (this.maxSize = e);
      }
      get(e) {
        let t = super.get(e);
        return super.has(e) && (super.delete(e), super.set(e, t)), t;
      }
      set(e, t) {
        if (
          (super.has(e) && super.delete(e),
          super.set(e, t),
          this.maxSize && this.size > this.maxSize)
        ) {
          let e = super.keys().next().value;
          void 0 !== e && super.delete(e);
        }
        return this;
      }
    }
    e.s(["LruMap", () => s], 976677);
  },
  831095,
  (e) => {
    "use strict";
    var t = e.i(145535),
      r = e.i(880841),
      s = e.i(769936),
      i = e.i(675107);
    function o(e, o) {
      let n = (0, t.keccak_256)(
        (0, r.isHex)(e, { strict: !1 }) ? (0, s.toBytes)(e) : e
      );
      return "bytes" === (o || "hex") ? n : (0, i.toHex)(n);
    }
    e.s(["keccak256", () => o]);
  },
  823838,
  (e) => {
    "use strict";
    e.s(["checksumAddress", () => a, "getAddress", () => c]);
    var t = e.i(608861),
      r = e.i(769936),
      s = e.i(831095),
      i = e.i(976677),
      o = e.i(796516);
    let n = new i.LruMap(8192);
    function a(e, t) {
      if (n.has(`${e}.${t}`)) return n.get(`${e}.${t}`);
      let i = t ? `${t}${e.toLowerCase()}` : e.substring(2).toLowerCase(),
        o = (0, s.keccak256)((0, r.stringToBytes)(i), "bytes"),
        a = (t ? i.substring(`${t}0x`.length) : i).split("");
      for (let e = 0; e < 40; e += 2)
        o[e >> 1] >> 4 >= 8 && a[e] && (a[e] = a[e].toUpperCase()),
          (15 & o[e >> 1]) >= 8 &&
            a[e + 1] &&
            (a[e + 1] = a[e + 1].toUpperCase());
      let c = `0x${a.join("")}`;
      return n.set(`${e}.${t}`, c), c;
    }
    function c(e, r) {
      if (!(0, o.isAddress)(e, { strict: !1 }))
        throw new t.InvalidAddressError({ address: e });
      return a(e, r);
    }
  },
  796516,
  (e) => {
    "use strict";
    e.s(["isAddress", () => o]);
    var t = e.i(976677),
      r = e.i(823838);
    let s = /^0x[a-fA-F0-9]{40}$/,
      i = new t.LruMap(8192);
    function o(e, t) {
      let { strict: o = !0 } = t ?? {},
        n = `${e}.${o}`;
      if (i.has(n)) return i.get(n);
      let a =
        !!s.test(e) &&
        (e.toLowerCase() === e || !o || (0, r.checksumAddress)(e) === e);
      return i.set(n, a), a;
    }
  },
  790063,
  (e) => {
    "use strict";
    var t = e.i(587286),
      r = e.i(880841),
      s = e.i(401319);
    function i(e, t, s, { strict: o } = {}) {
      return (0, r.isHex)(e, { strict: !1 })
        ? c(e, t, s, { strict: o })
        : a(e, t, s, { strict: o });
    }
    function o(e, r) {
      if ("number" == typeof r && r > 0 && r > (0, s.size)(e) - 1)
        throw new t.SliceOffsetOutOfBoundsError({
          offset: r,
          position: "start",
          size: (0, s.size)(e),
        });
    }
    function n(e, r, i) {
      if (
        "number" == typeof r &&
        "number" == typeof i &&
        (0, s.size)(e) !== i - r
      )
        throw new t.SliceOffsetOutOfBoundsError({
          offset: i,
          position: "end",
          size: (0, s.size)(e),
        });
    }
    function a(e, t, r, { strict: s } = {}) {
      o(e, t);
      let i = e.slice(t, r);
      return s && n(i, t, r), i;
    }
    function c(e, t, r, { strict: s } = {}) {
      o(e, t);
      let i = `0x${e
        .replace("0x", "")
        .slice((t ?? 0) * 2, (r ?? e.length) * 2)}`;
      return s && n(i, t, r), i;
    }
    e.s(["slice", () => i, "sliceBytes", () => a, "sliceHex", () => c]);
  },
  795,
  493429,
  (e) => {
    "use strict";
    var t = e.i(569934);
    class r extends t.BaseError {
      constructor({ offset: e }) {
        super(`Offset \`${e}\` cannot be negative.`, {
          name: "NegativeOffsetError",
        });
      }
    }
    class s extends t.BaseError {
      constructor({ length: e, position: t }) {
        super(`Position \`${t}\` is out of bounds (\`0 < position < ${e}\`).`, {
          name: "PositionOutOfBoundsError",
        });
      }
    }
    class i extends t.BaseError {
      constructor({ count: e, limit: t }) {
        super(
          `Recursive read limit of \`${t}\` exceeded (recursive read count: \`${e}\`).`,
          { name: "RecursiveReadLimitExceededError" }
        );
      }
    }
    e.s(
      [
        "NegativeOffsetError",
        () => r,
        "PositionOutOfBoundsError",
        () => s,
        "RecursiveReadLimitExceededError",
        () => i,
      ],
      493429
    );
    let o = {
      bytes: new Uint8Array(),
      dataView: new DataView(new ArrayBuffer(0)),
      position: 0,
      positionReadCount: new Map(),
      recursiveReadCount: 0,
      recursiveReadLimit: 1 / 0,
      assertReadLimit() {
        if (this.recursiveReadCount >= this.recursiveReadLimit)
          throw new i({
            count: this.recursiveReadCount + 1,
            limit: this.recursiveReadLimit,
          });
      },
      assertPosition(e) {
        if (e < 0 || e > this.bytes.length - 1)
          throw new s({ length: this.bytes.length, position: e });
      },
      decrementPosition(e) {
        if (e < 0) throw new r({ offset: e });
        let t = this.position - e;
        this.assertPosition(t), (this.position = t);
      },
      getReadCount(e) {
        return this.positionReadCount.get(e || this.position) || 0;
      },
      incrementPosition(e) {
        if (e < 0) throw new r({ offset: e });
        let t = this.position + e;
        this.assertPosition(t), (this.position = t);
      },
      inspectByte(e) {
        let t = e ?? this.position;
        return this.assertPosition(t), this.bytes[t];
      },
      inspectBytes(e, t) {
        let r = t ?? this.position;
        return this.assertPosition(r + e - 1), this.bytes.subarray(r, r + e);
      },
      inspectUint8(e) {
        let t = e ?? this.position;
        return this.assertPosition(t), this.bytes[t];
      },
      inspectUint16(e) {
        let t = e ?? this.position;
        return this.assertPosition(t + 1), this.dataView.getUint16(t);
      },
      inspectUint24(e) {
        let t = e ?? this.position;
        return (
          this.assertPosition(t + 2),
          (this.dataView.getUint16(t) << 8) + this.dataView.getUint8(t + 2)
        );
      },
      inspectUint32(e) {
        let t = e ?? this.position;
        return this.assertPosition(t + 3), this.dataView.getUint32(t);
      },
      pushByte(e) {
        this.assertPosition(this.position),
          (this.bytes[this.position] = e),
          this.position++;
      },
      pushBytes(e) {
        this.assertPosition(this.position + e.length - 1),
          this.bytes.set(e, this.position),
          (this.position += e.length);
      },
      pushUint8(e) {
        this.assertPosition(this.position),
          (this.bytes[this.position] = e),
          this.position++;
      },
      pushUint16(e) {
        this.assertPosition(this.position + 1),
          this.dataView.setUint16(this.position, e),
          (this.position += 2);
      },
      pushUint24(e) {
        this.assertPosition(this.position + 2),
          this.dataView.setUint16(this.position, e >> 8),
          this.dataView.setUint8(this.position + 2, 255 & e),
          (this.position += 3);
      },
      pushUint32(e) {
        this.assertPosition(this.position + 3),
          this.dataView.setUint32(this.position, e),
          (this.position += 4);
      },
      readByte() {
        this.assertReadLimit(), this._touch();
        let e = this.inspectByte();
        return this.position++, e;
      },
      readBytes(e, t) {
        this.assertReadLimit(), this._touch();
        let r = this.inspectBytes(e);
        return (this.position += t ?? e), r;
      },
      readUint8() {
        this.assertReadLimit(), this._touch();
        let e = this.inspectUint8();
        return (this.position += 1), e;
      },
      readUint16() {
        this.assertReadLimit(), this._touch();
        let e = this.inspectUint16();
        return (this.position += 2), e;
      },
      readUint24() {
        this.assertReadLimit(), this._touch();
        let e = this.inspectUint24();
        return (this.position += 3), e;
      },
      readUint32() {
        this.assertReadLimit(), this._touch();
        let e = this.inspectUint32();
        return (this.position += 4), e;
      },
      get remaining() {
        return this.bytes.length - this.position;
      },
      setPosition(e) {
        let t = this.position;
        return (
          this.assertPosition(e), (this.position = e), () => (this.position = t)
        );
      },
      _touch() {
        if (this.recursiveReadLimit === 1 / 0) return;
        let e = this.getReadCount();
        this.positionReadCount.set(this.position, e + 1),
          e > 0 && this.recursiveReadCount++;
      },
    };
    function n(e, { recursiveReadLimit: t = 8192 } = {}) {
      let r = Object.create(o);
      return (
        (r.bytes = e),
        (r.dataView = new DataView(e.buffer ?? e, e.byteOffset, e.byteLength)),
        (r.positionReadCount = new Map()),
        (r.recursiveReadLimit = t),
        r
      );
    }
    e.s(["createCursor", () => n], 795);
  },
  147526,
  (e) => {
    "use strict";
    function t(e) {
      return "string" == typeof e[0]
        ? r(e)
        : (function (e) {
            let t = 0;
            for (let r of e) t += r.length;
            let r = new Uint8Array(t),
              s = 0;
            for (let t of e) r.set(t, s), (s += t.length);
            return r;
          })(e);
    }
    function r(e) {
      return `0x${e.reduce((e, t) => e + t.replace("0x", ""), "")}`;
    }
    e.s(["concat", () => t, "concatHex", () => r]);
  },
  855723,
  644616,
  (e) => {
    "use strict";
    function t(e, t) {
      let r = e.toString(),
        s = r.startsWith("-");
      s && (r = r.slice(1));
      let [i, o] = [
        (r = r.padStart(t, "0")).slice(0, r.length - t),
        r.slice(r.length - t),
      ];
      return (
        (o = o.replace(/(0+)$/, "")),
        `${s ? "-" : ""}${i || "0"}${o ? `.${o}` : ""}`
      );
    }
    e.s(
      [
        "etherUnits",
        0,
        { gwei: 9, wei: 18 },
        "gweiUnits",
        0,
        { ether: -9, wei: 9 },
      ],
      855723
    ),
      e.s(["formatUnits", () => t], 644616);
  },
  285973,
  (e) => {
    "use strict";
    var t = e.i(855723),
      r = e.i(644616);
    function s(e, i = "wei") {
      return (0, r.formatUnits)(e, t.etherUnits[i]);
    }
    e.s(["formatEther", () => s]);
  },
  976486,
  (e) => {
    "use strict";
    var t = e.i(855723),
      r = e.i(644616);
    function s(e, i = "wei") {
      return (0, r.formatUnits)(e, t.gweiUnits[i]);
    }
    e.s(["formatGwei", () => s]);
  },
  393702,
  (e) => {
    "use strict";
    var t = e.i(285973),
      r = e.i(976486),
      s = e.i(569934);
    function i(e) {
      let t = Object.entries(e)
          .map(([e, t]) => (void 0 === t || !1 === t ? null : [e, t]))
          .filter(Boolean),
        r = t.reduce((e, [t]) => Math.max(e, t.length), 0);
      return t.map(([e, t]) => `  ${`${e}:`.padEnd(r + 1)}  ${t}`).join("\n");
    }
    s.BaseError;
    class o extends s.BaseError {
      constructor({ v: e }) {
        super(`Invalid \`v\` value "${e}". Expected 27 or 28.`, {
          name: "InvalidLegacyVError",
        });
      }
    }
    s.BaseError;
    class n extends s.BaseError {
      constructor({ transaction: e }) {
        super("Cannot infer a transaction type from provided transaction.", {
          metaMessages: [
            "Provided Transaction:",
            "{",
            i(e),
            "}",
            "",
            "To infer the type, either provide:",
            "- a `type` to the Transaction, or",
            "- an EIP-1559 Transaction with `maxFeePerGas`, or",
            "- an EIP-2930 Transaction with `gasPrice` & `accessList`, or",
            "- an EIP-4844 Transaction with `blobs`, `blobVersionedHashes`, `sidecars`, or",
            "- an EIP-7702 Transaction with `authorizationList`, or",
            "- a Legacy Transaction with `gasPrice`",
          ],
          name: "InvalidSerializableTransactionError",
        });
      }
    }
    s.BaseError, s.BaseError;
    class a extends s.BaseError {
      constructor({ storageKey: e }) {
        super(
          `Size for storage key "${e}" is invalid. Expected 32 bytes. Got ${Math.floor(
            (e.length - 2) / 2
          )} bytes.`,
          { name: "InvalidStorageKeySizeError" }
        );
      }
    }
    class c extends s.BaseError {
      constructor(
        e,
        {
          account: s,
          docsPath: o,
          chain: n,
          data: a,
          gas: c,
          gasPrice: u,
          maxFeePerGas: l,
          maxPriorityFeePerGas: d,
          nonce: h,
          to: p,
          value: f,
        }
      ) {
        super(e.shortMessage, {
          cause: e,
          docsPath: o,
          metaMessages: [
            ...(e.metaMessages ? [...e.metaMessages, " "] : []),
            "Request Arguments:",
            i({
              chain: n && `${n?.name} (id: ${n?.id})`,
              from: s?.address,
              to: p,
              value:
                void 0 !== f &&
                `${(0, t.formatEther)(f)} ${
                  n?.nativeCurrency?.symbol || "ETH"
                }`,
              data: a,
              gas: c,
              gasPrice: void 0 !== u && `${(0, r.formatGwei)(u)} gwei`,
              maxFeePerGas: void 0 !== l && `${(0, r.formatGwei)(l)} gwei`,
              maxPriorityFeePerGas:
                void 0 !== d && `${(0, r.formatGwei)(d)} gwei`,
              nonce: h,
            }),
          ].filter(Boolean),
          name: "TransactionExecutionError",
        }),
          Object.defineProperty(this, "cause", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          (this.cause = e);
      }
    }
    class u extends s.BaseError {
      constructor({
        blockHash: e,
        blockNumber: t,
        blockTag: r,
        hash: s,
        index: i,
      }) {
        let o = "Transaction";
        r &&
          void 0 !== i &&
          (o = `Transaction at block time "${r}" at index "${i}"`),
          e &&
            void 0 !== i &&
            (o = `Transaction at block hash "${e}" at index "${i}"`),
          t &&
            void 0 !== i &&
            (o = `Transaction at block number "${t}" at index "${i}"`),
          s && (o = `Transaction with hash "${s}"`),
          super(`${o} could not be found.`, {
            name: "TransactionNotFoundError",
          });
      }
    }
    class l extends s.BaseError {
      constructor({ hash: e }) {
        super(
          `Transaction receipt with hash "${e}" could not be found. The Transaction may not be processed on a block yet.`,
          { name: "TransactionReceiptNotFoundError" }
        );
      }
    }
    class d extends s.BaseError {
      constructor({ receipt: e }) {
        super(`Transaction with hash "${e.transactionHash}" reverted.`, {
          metaMessages: [
            'The receipt marked the transaction as "reverted". This could mean that the function on the contract you are trying to call threw an error.',
            " ",
            "You can attempt to extract the revert reason by:",
            "- calling the `simulateContract` or `simulateCalls` Action with the `abi` and `functionName` of the contract",
            "- using the `call` Action with raw `data`",
          ],
          name: "TransactionReceiptRevertedError",
        }),
          Object.defineProperty(this, "receipt", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          (this.receipt = e);
      }
    }
    class h extends s.BaseError {
      constructor({ hash: e }) {
        super(
          `Timed out while waiting for transaction with hash "${e}" to be confirmed.`,
          { name: "WaitForTransactionReceiptTimeoutError" }
        );
      }
    }
    e.s([
      "InvalidLegacyVError",
      () => o,
      "InvalidSerializableTransactionError",
      () => n,
      "InvalidStorageKeySizeError",
      () => a,
      "TransactionExecutionError",
      () => c,
      "TransactionNotFoundError",
      () => u,
      "TransactionReceiptNotFoundError",
      () => l,
      "TransactionReceiptRevertedError",
      () => d,
      "WaitForTransactionReceiptTimeoutError",
      () => h,
      "prettyPrint",
      () => i,
    ]);
  },
  445024,
  (e) => {
    "use strict";
    function t(e, t) {
      return ({ exclude: r, format: s }) => ({
        exclude: r,
        format: (e, i) => {
          let o = t(e, i);
          if (r) for (let e of r) delete o[e];
          return { ...o, ...s(e, i) };
        },
        type: e,
      });
    }
    e.s(["defineFormatter", () => t]);
  },
  505880,
  (e) => {
    "use strict";
    var t = e.i(569934);
    class r extends t.BaseError {
      constructor({ blockNumber: e, chain: t, contract: r }) {
        super(`Chain "${t.name}" does not support contract "${r.name}".`, {
          metaMessages: [
            "This could be due to any of the following:",
            ...(e && r.blockCreated && r.blockCreated > e
              ? [
                  `- The contract "${r.name}" was not deployed until block ${r.blockCreated} (current block ${e}).`,
                ]
              : [
                  `- The chain does not have the contract "${r.name}" configured.`,
                ]),
          ],
          name: "ChainDoesNotSupportContract",
        });
      }
    }
    class s extends t.BaseError {
      constructor({ chain: e, currentChainId: t }) {
        super(
          `The current chain of the wallet (id: ${t}) does not match the target chain for the transaction (id: ${e.id} – ${e.name}).`,
          {
            metaMessages: [
              `Current Chain ID:  ${t}`,
              `Expected Chain ID: ${e.id} – ${e.name}`,
            ],
            name: "ChainMismatchError",
          }
        );
      }
    }
    class i extends t.BaseError {
      constructor() {
        super(
          "No chain was provided to the request.\nPlease provide a chain with the `chain` argument on the Action, or by supplying a `chain` to WalletClient.",
          { name: "ChainNotFoundError" }
        );
      }
    }
    class o extends t.BaseError {
      constructor() {
        super("No chain was provided to the Client.", {
          name: "ClientChainNotConfiguredError",
        });
      }
    }
    class n extends t.BaseError {
      constructor({ chainId: e }) {
        super(
          "number" == typeof e
            ? `Chain ID "${e}" is invalid.`
            : "Chain ID is invalid.",
          { name: "InvalidChainIdError" }
        );
      }
    }
    e.s([
      "ChainDoesNotSupportContract",
      () => r,
      "ChainMismatchError",
      () => s,
      "ChainNotFoundError",
      () => i,
      "ClientChainNotConfiguredError",
      () => o,
      "InvalidChainIdError",
      () => n,
    ]);
  },
  853532,
  (e) => {
    "use strict";
    var t = e.i(976486),
      r = e.i(569934);
    class s extends r.BaseError {
      constructor({ cause: e, message: t } = {}) {
        const r = t
          ?.replace("execution reverted: ", "")
          ?.replace("execution reverted", "");
        super(
          `Execution reverted ${
            r ? `with reason: ${r}` : "for an unknown reason"
          }.`,
          { cause: e, name: "ExecutionRevertedError" }
        );
      }
    }
    Object.defineProperty(s, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: 3,
    }),
      Object.defineProperty(s, "nodeMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /execution reverted|gas required exceeds allowance/,
      });
    class i extends r.BaseError {
      constructor({ cause: e, maxFeePerGas: r } = {}) {
        super(
          `The fee cap (\`maxFeePerGas\`${
            r ? ` = ${(0, t.formatGwei)(r)} gwei` : ""
          }) cannot be higher than the maximum allowed value (2^256-1).`,
          { cause: e, name: "FeeCapTooHighError" }
        );
      }
    }
    Object.defineProperty(i, "nodeMessage", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value:
        /max fee per gas higher than 2\^256-1|fee cap higher than 2\^256-1/,
    });
    class o extends r.BaseError {
      constructor({ cause: e, maxFeePerGas: r } = {}) {
        super(
          `The fee cap (\`maxFeePerGas\`${
            r ? ` = ${(0, t.formatGwei)(r)}` : ""
          } gwei) cannot be lower than the block base fee.`,
          { cause: e, name: "FeeCapTooLowError" }
        );
      }
    }
    Object.defineProperty(o, "nodeMessage", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value:
        /max fee per gas less than block base fee|fee cap less than block base fee|transaction is outdated/,
    });
    class n extends r.BaseError {
      constructor({ cause: e, nonce: t } = {}) {
        super(
          `Nonce provided for the transaction ${
            t ? `(${t}) ` : ""
          }is higher than the next one expected.`,
          { cause: e, name: "NonceTooHighError" }
        );
      }
    }
    Object.defineProperty(n, "nodeMessage", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: /nonce too high/,
    });
    class a extends r.BaseError {
      constructor({ cause: e, nonce: t } = {}) {
        super(
          `Nonce provided for the transaction ${
            t ? `(${t}) ` : ""
          }is lower than the current nonce of the account.
Try increasing the nonce or find the latest nonce with \`getTransactionCount\`.`,
          { cause: e, name: "NonceTooLowError" }
        );
      }
    }
    Object.defineProperty(a, "nodeMessage", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: /nonce too low|transaction already imported|already known/,
    });
    class c extends r.BaseError {
      constructor({ cause: e, nonce: t } = {}) {
        super(
          `Nonce provided for the transaction ${
            t ? `(${t}) ` : ""
          }exceeds the maximum allowed nonce.`,
          { cause: e, name: "NonceMaxValueError" }
        );
      }
    }
    Object.defineProperty(c, "nodeMessage", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: /nonce has max value/,
    });
    class u extends r.BaseError {
      constructor({ cause: e } = {}) {
        super(
          "The total cost (gas * gas fee + value) of executing this transaction exceeds the balance of the account.",
          {
            cause: e,
            metaMessages: [
              "This error could arise when the account does not have enough funds to:",
              " - pay for the total gas fee,",
              " - pay for the value to send.",
              " ",
              "The cost of the transaction is calculated as `gas * gas fee + value`, where:",
              " - `gas` is the amount of gas needed for transaction to execute,",
              " - `gas fee` is the gas fee,",
              " - `value` is the amount of ether to send to the recipient.",
            ],
            name: "InsufficientFundsError",
          }
        );
      }
    }
    Object.defineProperty(u, "nodeMessage", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: /insufficient funds|exceeds transaction sender account balance/,
    });
    class l extends r.BaseError {
      constructor({ cause: e, gas: t } = {}) {
        super(
          `The amount of gas ${
            t ? `(${t}) ` : ""
          }provided for the transaction exceeds the limit allowed for the block.`,
          { cause: e, name: "IntrinsicGasTooHighError" }
        );
      }
    }
    Object.defineProperty(l, "nodeMessage", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: /intrinsic gas too high|gas limit reached/,
    });
    class d extends r.BaseError {
      constructor({ cause: e, gas: t } = {}) {
        super(
          `The amount of gas ${
            t ? `(${t}) ` : ""
          }provided for the transaction is too low.`,
          { cause: e, name: "IntrinsicGasTooLowError" }
        );
      }
    }
    Object.defineProperty(d, "nodeMessage", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: /intrinsic gas too low/,
    });
    class h extends r.BaseError {
      constructor({ cause: e }) {
        super("The transaction type is not supported for this chain.", {
          cause: e,
          name: "TransactionTypeNotSupportedError",
        });
      }
    }
    Object.defineProperty(h, "nodeMessage", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: /transaction type not valid/,
    });
    class p extends r.BaseError {
      constructor({ cause: e, maxPriorityFeePerGas: r, maxFeePerGas: s } = {}) {
        super(
          `The provided tip (\`maxPriorityFeePerGas\`${
            r ? ` = ${(0, t.formatGwei)(r)} gwei` : ""
          }) cannot be higher than the fee cap (\`maxFeePerGas\`${
            s ? ` = ${(0, t.formatGwei)(s)} gwei` : ""
          }).`,
          { cause: e, name: "TipAboveFeeCapError" }
        );
      }
    }
    Object.defineProperty(p, "nodeMessage", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value:
        /max priority fee per gas higher than max fee per gas|tip higher than fee cap/,
    });
    class f extends r.BaseError {
      constructor({ cause: e }) {
        super(`An error occurred while executing: ${e?.shortMessage}`, {
          cause: e,
          name: "UnknownNodeError",
        });
      }
    }
    e.s([
      "ExecutionRevertedError",
      () => s,
      "FeeCapTooHighError",
      () => i,
      "FeeCapTooLowError",
      () => o,
      "InsufficientFundsError",
      () => u,
      "IntrinsicGasTooHighError",
      () => l,
      "IntrinsicGasTooLowError",
      () => d,
      "NonceMaxValueError",
      () => c,
      "NonceTooHighError",
      () => n,
      "NonceTooLowError",
      () => a,
      "TipAboveFeeCapError",
      () => p,
      "TransactionTypeNotSupportedError",
      () => h,
      "UnknownNodeError",
      () => f,
    ]);
  },
  190521,
  (e) => {
    "use strict";
    var t = e.i(675107),
      r = e.i(445024);
    let s = {
      legacy: "0x0",
      eip2930: "0x1",
      eip1559: "0x2",
      eip4844: "0x3",
      eip7702: "0x4",
    };
    function i(e, r) {
      let i = {};
      return (
        void 0 !== e.authorizationList &&
          (i.authorizationList = e.authorizationList.map((e) => ({
            address: e.address,
            r: e.r ? (0, t.numberToHex)(BigInt(e.r)) : e.r,
            s: e.s ? (0, t.numberToHex)(BigInt(e.s)) : e.s,
            chainId: (0, t.numberToHex)(e.chainId),
            nonce: (0, t.numberToHex)(e.nonce),
            ...(void 0 !== e.yParity
              ? { yParity: (0, t.numberToHex)(e.yParity) }
              : {}),
            ...(void 0 !== e.v && void 0 === e.yParity
              ? { v: (0, t.numberToHex)(e.v) }
              : {}),
          }))),
        void 0 !== e.accessList && (i.accessList = e.accessList),
        void 0 !== e.blobVersionedHashes &&
          (i.blobVersionedHashes = e.blobVersionedHashes),
        void 0 !== e.blobs &&
          ("string" != typeof e.blobs[0]
            ? (i.blobs = e.blobs.map((e) => (0, t.bytesToHex)(e)))
            : (i.blobs = e.blobs)),
        void 0 !== e.data && (i.data = e.data),
        e.account && (i.from = e.account.address),
        void 0 !== e.from && (i.from = e.from),
        void 0 !== e.gas && (i.gas = (0, t.numberToHex)(e.gas)),
        void 0 !== e.gasPrice && (i.gasPrice = (0, t.numberToHex)(e.gasPrice)),
        void 0 !== e.maxFeePerBlobGas &&
          (i.maxFeePerBlobGas = (0, t.numberToHex)(e.maxFeePerBlobGas)),
        void 0 !== e.maxFeePerGas &&
          (i.maxFeePerGas = (0, t.numberToHex)(e.maxFeePerGas)),
        void 0 !== e.maxPriorityFeePerGas &&
          (i.maxPriorityFeePerGas = (0, t.numberToHex)(e.maxPriorityFeePerGas)),
        void 0 !== e.nonce && (i.nonce = (0, t.numberToHex)(e.nonce)),
        void 0 !== e.to && (i.to = e.to),
        void 0 !== e.type && (i.type = s[e.type]),
        void 0 !== e.value && (i.value = (0, t.numberToHex)(e.value)),
        i
      );
    }
    let o = (0, r.defineFormatter)("transactionRequest", i);
    e.s([
      "defineTransactionRequest",
      0,
      o,
      "formatTransactionRequest",
      () => i,
    ]);
  },
  674768,
  (e) => {
    "use strict";
    e.s(["maxUint16", 0, 2n ** 16n - 1n, "maxUint256", 0, 2n ** 256n - 1n]);
  },
  557874,
  982191,
  856324,
  (e) => {
    "use strict";
    var t = e.i(445024),
      r = e.i(450323);
    let s = {
      "0x0": "legacy",
      "0x1": "eip2930",
      "0x2": "eip1559",
      "0x3": "eip4844",
      "0x4": "eip7702",
    };
    function i(e, t) {
      let i = {
        ...e,
        blockHash: e.blockHash ? e.blockHash : null,
        blockNumber: e.blockNumber ? BigInt(e.blockNumber) : null,
        ...(null != e.blockTimestamp && {
          blockTimestamp: BigInt(e.blockTimestamp),
        }),
        chainId: e.chainId ? (0, r.hexToNumber)(e.chainId) : void 0,
        gas: e.gas ? BigInt(e.gas) : void 0,
        gasPrice: e.gasPrice ? BigInt(e.gasPrice) : void 0,
        maxFeePerBlobGas: e.maxFeePerBlobGas
          ? BigInt(e.maxFeePerBlobGas)
          : void 0,
        maxFeePerGas: e.maxFeePerGas ? BigInt(e.maxFeePerGas) : void 0,
        maxPriorityFeePerGas: e.maxPriorityFeePerGas
          ? BigInt(e.maxPriorityFeePerGas)
          : void 0,
        nonce: e.nonce ? (0, r.hexToNumber)(e.nonce) : void 0,
        to: e.to ? e.to : null,
        transactionIndex: e.transactionIndex
          ? Number(e.transactionIndex)
          : null,
        type: e.type ? s[e.type] : void 0,
        typeHex: e.type ? e.type : void 0,
        value: e.value ? BigInt(e.value) : void 0,
        v: e.v ? BigInt(e.v) : void 0,
      };
      return (
        e.authorizationList &&
          (i.authorizationList = e.authorizationList.map((e) => ({
            address: e.address,
            chainId: Number(e.chainId),
            nonce: Number(e.nonce),
            r: e.r,
            s: e.s,
            yParity: Number(e.yParity),
          }))),
        (i.yParity = (() => {
          if (e.yParity) return Number(e.yParity);
          if ("bigint" == typeof i.v) {
            if (0n === i.v || 27n === i.v) return 0;
            if (1n === i.v || 28n === i.v) return 1;
            if (i.v >= 35n) return +(i.v % 2n === 0n);
          }
        })()),
        "legacy" === i.type &&
          (delete i.accessList,
          delete i.maxFeePerBlobGas,
          delete i.maxFeePerGas,
          delete i.maxPriorityFeePerGas,
          delete i.yParity),
        "eip2930" === i.type &&
          (delete i.maxFeePerBlobGas,
          delete i.maxFeePerGas,
          delete i.maxPriorityFeePerGas),
        "eip1559" === i.type && delete i.maxFeePerBlobGas,
        i
      );
    }
    let o = (0, t.defineFormatter)("transaction", i);
    function n(e, t) {
      let r = (e.transactions ?? []).map((e) =>
        "string" == typeof e ? e : i(e)
      );
      return {
        ...e,
        baseFeePerGas: e.baseFeePerGas ? BigInt(e.baseFeePerGas) : null,
        blobGasUsed: e.blobGasUsed ? BigInt(e.blobGasUsed) : void 0,
        difficulty: e.difficulty ? BigInt(e.difficulty) : void 0,
        excessBlobGas: e.excessBlobGas ? BigInt(e.excessBlobGas) : void 0,
        gasLimit: e.gasLimit ? BigInt(e.gasLimit) : void 0,
        gasUsed: e.gasUsed ? BigInt(e.gasUsed) : void 0,
        hash: e.hash ? e.hash : null,
        logsBloom: e.logsBloom ? e.logsBloom : null,
        nonce: e.nonce ? e.nonce : null,
        number: e.number ? BigInt(e.number) : null,
        size: e.size ? BigInt(e.size) : void 0,
        timestamp: e.timestamp ? BigInt(e.timestamp) : void 0,
        transactions: r,
        totalDifficulty: e.totalDifficulty ? BigInt(e.totalDifficulty) : null,
      };
    }
    e.s(
      [
        "defineTransaction",
        0,
        o,
        "formatTransaction",
        () => i,
        "transactionType",
        0,
        s,
      ],
      982191
    );
    let a = (0, t.defineFormatter)("block", n);
    function c(e, { args: t, eventName: r } = {}) {
      return {
        ...e,
        blockHash: e.blockHash ? e.blockHash : null,
        blockNumber: e.blockNumber ? BigInt(e.blockNumber) : null,
        blockTimestamp: e.blockTimestamp
          ? BigInt(e.blockTimestamp)
          : null === e.blockTimestamp
          ? null
          : void 0,
        logIndex: e.logIndex ? Number(e.logIndex) : null,
        transactionHash: e.transactionHash ? e.transactionHash : null,
        transactionIndex: e.transactionIndex
          ? Number(e.transactionIndex)
          : null,
        ...(r ? { args: t, eventName: r } : {}),
      };
    }
    e.s(["defineBlock", 0, a, "formatBlock", () => n], 557874),
      e.s(["formatLog", () => c], 856324);
  },
  839080,
  (e) => {
    "use strict";
    var t = e.i(450323),
      r = e.i(445024),
      s = e.i(856324),
      i = e.i(982191);
    let o = { "0x0": "reverted", "0x1": "success" };
    function n(e, r) {
      let n = {
        ...e,
        blockNumber: e.blockNumber ? BigInt(e.blockNumber) : null,
        contractAddress: e.contractAddress ? e.contractAddress : null,
        cumulativeGasUsed: e.cumulativeGasUsed
          ? BigInt(e.cumulativeGasUsed)
          : null,
        effectiveGasPrice: e.effectiveGasPrice
          ? BigInt(e.effectiveGasPrice)
          : null,
        gasUsed: e.gasUsed ? BigInt(e.gasUsed) : null,
        logs: e.logs ? e.logs.map((e) => (0, s.formatLog)(e)) : null,
        to: e.to ? e.to : null,
        transactionIndex: e.transactionIndex
          ? (0, t.hexToNumber)(e.transactionIndex)
          : null,
        status: e.status ? o[e.status] : null,
        type: e.type ? i.transactionType[e.type] || e.type : null,
      };
      return (
        e.blobGasPrice && (n.blobGasPrice = BigInt(e.blobGasPrice)),
        e.blobGasUsed && (n.blobGasUsed = BigInt(e.blobGasUsed)),
        n
      );
    }
    let a = (0, r.defineFormatter)("transactionReceipt", n);
    e.s([
      "defineTransactionReceipt",
      0,
      a,
      "formatTransactionReceipt",
      () => n,
      "receiptStatuses",
      0,
      o,
    ]);
  },
  70326,
  94371,
  49810,
  862243,
  883031,
  556047,
  86741,
  310538,
  576213,
  (e) => {
    "use strict";
    var t = e.i(569934),
      r = e.i(795),
      s = e.i(769936),
      i = e.i(675107);
    function o(e, t = "hex") {
      let a = (function e(t) {
          var r, i;
          let o, a, c, u;
          return Array.isArray(t)
            ? ((a = n(
                (o = (r = t.map((t) => e(t))).reduce((e, t) => e + t.length, 0))
              )),
              {
                length: o <= 55 ? 1 + o : 1 + a + o,
                encode(e) {
                  for (let { encode: t } of (o <= 55
                    ? e.pushByte(192 + o)
                    : (e.pushByte(247 + a),
                      1 === a
                        ? e.pushUint8(o)
                        : 2 === a
                        ? e.pushUint16(o)
                        : 3 === a
                        ? e.pushUint24(o)
                        : e.pushUint32(o)),
                  r))
                    t(e);
                },
              })
            : ((u = n(
                (c = "string" == typeof (i = t) ? (0, s.hexToBytes)(i) : i)
                  .length
              )),
              {
                length:
                  1 === c.length && c[0] < 128
                    ? 1
                    : c.length <= 55
                    ? 1 + c.length
                    : 1 + u + c.length,
                encode(e) {
                  (1 === c.length && c[0] < 128) ||
                    (c.length <= 55
                      ? e.pushByte(128 + c.length)
                      : (e.pushByte(183 + u),
                        1 === u
                          ? e.pushUint8(c.length)
                          : 2 === u
                          ? e.pushUint16(c.length)
                          : 3 === u
                          ? e.pushUint24(c.length)
                          : e.pushUint32(c.length))),
                    e.pushBytes(c);
                },
              });
        })(e),
        c = (0, r.createCursor)(new Uint8Array(a.length));
      return (a.encode(c), "hex" === t) ? (0, i.bytesToHex)(c.bytes) : c.bytes;
    }
    function n(e) {
      if (e < 256) return 1;
      if (e < 65536) return 2;
      if (e < 0x1000000) return 3;
      if (e < 0x100000000) return 4;
      throw new t.BaseError("Length is too large.");
    }
    function a(e) {
      let { kzg: t } = e,
        r = e.to ?? ("string" == typeof e.blobs[0] ? "hex" : "bytes"),
        o =
          "string" == typeof e.blobs[0]
            ? e.blobs.map((e) => (0, s.hexToBytes)(e))
            : e.blobs,
        n = [];
      for (let e of o) n.push(Uint8Array.from(t.blobToKzgCommitment(e)));
      return "bytes" === r ? n : n.map((e) => (0, i.bytesToHex)(e));
    }
    function c(e) {
      let { kzg: t } = e,
        r = e.to ?? ("string" == typeof e.blobs[0] ? "hex" : "bytes"),
        o =
          "string" == typeof e.blobs[0]
            ? e.blobs.map((e) => (0, s.hexToBytes)(e))
            : e.blobs,
        n =
          "string" == typeof e.commitments[0]
            ? e.commitments.map((e) => (0, s.hexToBytes)(e))
            : e.commitments,
        a = [];
      for (let e = 0; e < o.length; e++) {
        let r = o[e],
          s = n[e];
        a.push(Uint8Array.from(t.computeBlobKzgProof(r, s)));
      }
      return "bytes" === r ? a : a.map((e) => (0, i.bytesToHex)(e));
    }
    e.s(["toRlp", () => o], 70326),
      e.s(["blobsToCommitments", () => a], 94371),
      e.s(["blobsToProofs", () => c], 49810);
    var u = e.i(280355),
      l = e.i(880841);
    function d(e, t) {
      let r = (0, u.sha256)(
        (0, l.isHex)(e, { strict: !1 }) ? (0, s.toBytes)(e) : e
      );
      return "bytes" === (t || "hex") ? r : (0, i.toHex)(r);
    }
    function h(e) {
      let { commitments: t, version: r } = e,
        s = e.to ?? ("string" == typeof t[0] ? "hex" : "bytes"),
        o = [];
      for (let e of t)
        o.push(
          (function (e) {
            let { commitment: t, version: r = 1 } = e,
              s = e.to ?? ("string" == typeof t ? "hex" : "bytes"),
              o = d(t, "bytes");
            return o.set([r], 0), "bytes" === s ? o : (0, i.bytesToHex)(o);
          })({ commitment: e, to: s, version: r })
        );
      return o;
    }
    e.s(["sha256", () => d], 862243),
      e.s(["commitmentsToVersionedHashes", () => h], 883031);
    e.s(["versionedHashVersionKzg", 0, 1], 556047);
    var p = t;
    class f extends p.BaseError {
      constructor({ maxSize: e, size: t }) {
        super("Blob size is too large.", {
          metaMessages: [`Max: ${e} bytes`, `Given: ${t} bytes`],
          name: "BlobSizeTooLargeError",
        });
      }
    }
    class m extends p.BaseError {
      constructor() {
        super("Blob data must not be empty.", { name: "EmptyBlobError" });
      }
    }
    class b extends p.BaseError {
      constructor({ hash: e, size: t }) {
        super(`Versioned hash "${e}" size is invalid.`, {
          metaMessages: ["Expected: 32", `Received: ${t}`],
          name: "InvalidVersionedHashSizeError",
        });
      }
    }
    class g extends p.BaseError {
      constructor({ hash: e, version: t }) {
        super(`Versioned hash "${e}" version is invalid.`, {
          metaMessages: ["Expected: 1", `Received: ${t}`],
          name: "InvalidVersionedHashVersionError",
        });
      }
    }
    e.s(
      [
        "BlobSizeTooLargeError",
        () => f,
        "EmptyBlobError",
        () => m,
        "InvalidVersionedHashSizeError",
        () => b,
        "InvalidVersionedHashVersionError",
        () => g,
      ],
      86741
    );
    var v = e.i(401319);
    function y(e) {
      let { data: t, kzg: o, to: n } = e,
        u =
          e.blobs ??
          (function (e) {
            let t = e.to ?? ("string" == typeof e.data ? "hex" : "bytes"),
              o =
                "string" == typeof e.data ? (0, s.hexToBytes)(e.data) : e.data,
              n = (0, v.size)(o);
            if (!n) throw new m();
            if (n > 761855) throw new f({ maxSize: 761855, size: n });
            let a = [],
              c = !0,
              u = 0;
            for (; c; ) {
              let e = (0, r.createCursor)(new Uint8Array(131072)),
                t = 0;
              for (; t < 4096; ) {
                let r = o.slice(u, u + 31);
                if ((e.pushByte(0), e.pushBytes(r), r.length < 31)) {
                  e.pushByte(128), (c = !1);
                  break;
                }
                t++, (u += 31);
              }
              a.push(e);
            }
            return "bytes" === t
              ? a.map((e) => e.bytes)
              : a.map((e) => (0, i.bytesToHex)(e.bytes));
          })({ data: t, to: n }),
        l = e.commitments ?? a({ blobs: u, kzg: o, to: n }),
        d = e.proofs ?? c({ blobs: u, commitments: l, kzg: o, to: n }),
        h = [];
      for (let e = 0; e < u.length; e++)
        h.push({ blob: u[e], commitment: l[e], proof: d[e] });
      return h;
    }
    e.s(["toBlobSidecars", () => y], 310538);
    var x = e.i(393702);
    function E(e) {
      if (e.type) return e.type;
      if (void 0 !== e.authorizationList) return "eip7702";
      if (
        void 0 !== e.blobs ||
        void 0 !== e.blobVersionedHashes ||
        void 0 !== e.maxFeePerBlobGas ||
        void 0 !== e.sidecars
      )
        return "eip4844";
      if (void 0 !== e.maxFeePerGas || void 0 !== e.maxPriorityFeePerGas)
        return "eip1559";
      if (void 0 !== e.gasPrice)
        return void 0 !== e.accessList ? "eip2930" : "legacy";
      throw new x.InvalidSerializableTransactionError({ transaction: e });
    }
    e.s(["getTransactionType", () => E], 576213);
  },
]);
