(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  189991,
  (e) => {
    "use strict";
    function t(e) {
      return "string" == typeof e ? { address: e, type: "json-rpc" } : e;
    }
    e.s(["parseAccount", () => t]);
  },
  62570,
  (e) => {
    "use strict";
    var t = e.i(569934);
    class r extends t.BaseError {
      constructor({ address: e }) {
        super(`State for account "${e}" is set multiple times.`, {
          name: "AccountStateConflictError",
        });
      }
    }
    class n extends t.BaseError {
      constructor() {
        super("state and stateDiff are set on the same account.", {
          name: "StateAssignmentConflictError",
        });
      }
    }
    function a(e) {
      return e.reduce(
        (e, { slot: t, value: r }) => `${e}        ${t}: ${r}
`,
        ""
      );
    }
    function o(e) {
      return e
        .reduce((e, { address: t, ...r }) => {
          let n = `${e}    ${t}:
`;
          return (
            r.nonce &&
              (n += `      nonce: ${r.nonce}
`),
            r.balance &&
              (n += `      balance: ${r.balance}
`),
            r.code &&
              (n += `      code: ${r.code}
`),
            r.state && ((n += "      state:\n"), (n += a(r.state))),
            r.stateDiff && ((n += "      stateDiff:\n"), (n += a(r.stateDiff))),
            n
          );
        }, "  State Override:\n")
        .slice(0, -1);
    }
    e.s([
      "AccountStateConflictError",
      () => r,
      "StateAssignmentConflictError",
      () => n,
      "prettyStateOverride",
      () => o,
    ]);
  },
  826051,
  (e) => {
    "use strict";
    var t = e.i(608861),
      r = e.i(587286),
      n = e.i(62570),
      a = e.i(796516),
      o = e.i(675107);
    function i(e) {
      if (e && 0 !== e.length)
        return e.reduce((e, { slot: t, value: n }) => {
          if (66 !== t.length)
            throw new r.InvalidBytesLengthError({
              size: t.length,
              targetSize: 66,
              type: "hex",
            });
          if (66 !== n.length)
            throw new r.InvalidBytesLengthError({
              size: n.length,
              targetSize: 66,
              type: "hex",
            });
          return (e[t] = n), e;
        }, {});
    }
    function s(e) {
      if (!e) return;
      let r = {};
      for (let { address: s, ...c } of e) {
        if (!(0, a.isAddress)(s, { strict: !1 }))
          throw new t.InvalidAddressError({ address: s });
        if (r[s]) throw new n.AccountStateConflictError({ address: s });
        r[s] = (function (e) {
          let { balance: t, nonce: r, state: a, stateDiff: s, code: c } = e,
            u = {};
          if (
            (void 0 !== c && (u.code = c),
            void 0 !== t && (u.balance = (0, o.numberToHex)(t)),
            void 0 !== r && (u.nonce = (0, o.numberToHex)(r)),
            void 0 !== a && (u.state = i(a)),
            void 0 !== s)
          ) {
            if (u.state) throw new n.StateAssignmentConflictError();
            u.stateDiff = i(s);
          }
          return u;
        })(c);
      }
      return r;
    }
    e.s(["serializeStateOverride", () => s]);
  },
  727343,
  (e) => {
    "use strict";
    e.s([
      "panicReasons",
      0,
      {
        1: "An `assert` condition failed.",
        17: "Arithmetic operation resulted in underflow or overflow.",
        18: "Division or modulo by zero (e.g. `5 / 0` or `23 % 0`).",
        33: "Attempted to convert to an invalid type.",
        34: "Attempted to access a storage byte array that is incorrectly encoded.",
        49: "Performed `.pop()` on an empty array",
        50: "Array index is out of bounds.",
        65: "Allocated too much memory or created an array which is too large.",
        81: "Attempted to call a zero-initialized variable of internal function type.",
      },
      "solidityError",
      0,
      {
        inputs: [{ name: "message", type: "string" }],
        name: "Error",
        type: "error",
      },
      "solidityPanic",
      0,
      {
        inputs: [{ name: "reason", type: "uint256" }],
        name: "Panic",
        type: "error",
      },
    ]);
  },
  70204,
  332881,
  (e) => {
    "use strict";
    function t(e, { includeName: n = !1 } = {}) {
      if ("function" !== e.type && "event" !== e.type && "error" !== e.type)
        throw new I(e.type);
      return `${e.name}(${r(e.inputs, { includeName: n })})`;
    }
    function r(e, { includeName: t = !1 } = {}) {
      return e
        ? e
            .map((e) =>
              (function (e, { includeName: t }) {
                return e.type.startsWith("tuple")
                  ? `(${r(e.components, { includeName: t })})${e.type.slice(5)}`
                  : e.type + (t && e.name ? ` ${e.name}` : "");
              })(e, { includeName: t })
            )
            .join(t ? ", " : ",")
        : "";
    }
    e.s(
      [
        "AbiConstructorNotFoundError",
        () => o,
        "AbiConstructorParamsNotFoundError",
        () => i,
        "AbiDecodingDataSizeTooSmallError",
        () => s,
        "AbiDecodingZeroDataError",
        () => c,
        "AbiEncodingArrayLengthMismatchError",
        () => u,
        "AbiEncodingBytesSizeMismatchError",
        () => d,
        "AbiEncodingLengthMismatchError",
        () => f,
        "AbiErrorInputsNotFoundError",
        () => l,
        "AbiErrorNotFoundError",
        () => b,
        "AbiErrorSignatureNotFoundError",
        () => p,
        "AbiEventNotFoundError",
        () => h,
        "AbiEventSignatureEmptyTopicsError",
        () => y,
        "AbiEventSignatureNotFoundError",
        () => m,
        "AbiFunctionNotFoundError",
        () => g,
        "AbiFunctionOutputsNotFoundError",
        () => v,
        "AbiFunctionSignatureNotFoundError",
        () => w,
        "AbiItemAmbiguityError",
        () => E,
        "BytesSizeMismatchError",
        () => x,
        "DecodeLogDataMismatch",
        () => A,
        "DecodeLogTopicsMismatch",
        () => $,
        "InvalidAbiDecodingTypeError",
        () => B,
        "InvalidAbiEncodingTypeError",
        () => P,
        "InvalidArrayError",
        () => M,
        "InvalidDefinitionTypeError",
        () => I,
        "UnsupportedPackedAbiType",
        () => S,
      ],
      70204
    ),
      e.s(["formatAbiItem", () => t, "formatAbiParams", () => r], 332881);
    var n = e.i(401319),
      a = e.i(569934);
    class o extends a.BaseError {
      constructor({ docsPath: e }) {
        super(
          "A constructor was not found on the ABI.\nMake sure you are using the correct ABI and that the constructor exists on it.",
          { docsPath: e, name: "AbiConstructorNotFoundError" }
        );
      }
    }
    class i extends a.BaseError {
      constructor({ docsPath: e }) {
        super(
          "Constructor arguments were provided (`args`), but a constructor parameters (`inputs`) were not found on the ABI.\nMake sure you are using the correct ABI, and that the `inputs` attribute on the constructor exists.",
          { docsPath: e, name: "AbiConstructorParamsNotFoundError" }
        );
      }
    }
    a.BaseError;
    class s extends a.BaseError {
      constructor({ data: e, params: t, size: n }) {
        super(`Data size of ${n} bytes is too small for given parameters.`, {
          metaMessages: [
            `Params: (${r(t, { includeName: !0 })})`,
            `Data:   ${e} (${n} bytes)`,
          ],
          name: "AbiDecodingDataSizeTooSmallError",
        }),
          Object.defineProperty(this, "data", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          Object.defineProperty(this, "params", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          Object.defineProperty(this, "size", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          (this.data = e),
          (this.params = t),
          (this.size = n);
      }
    }
    class c extends a.BaseError {
      constructor({ cause: e } = {}) {
        super('Cannot decode zero data ("0x") with ABI parameters.', {
          name: "AbiDecodingZeroDataError",
          cause: e,
        });
      }
    }
    class u extends a.BaseError {
      constructor({ expectedLength: e, givenLength: t, type: r }) {
        super(
          `ABI encoding array length mismatch for type ${r}.
Expected length: ${e}
Given length: ${t}`,
          { name: "AbiEncodingArrayLengthMismatchError" }
        );
      }
    }
    class d extends a.BaseError {
      constructor({ expectedSize: e, value: t }) {
        super(
          `Size of bytes "${t}" (bytes${(0, n.size)(
            t
          )}) does not match expected size (bytes${e}).`,
          { name: "AbiEncodingBytesSizeMismatchError" }
        );
      }
    }
    class f extends a.BaseError {
      constructor({ expectedLength: e, givenLength: t }) {
        super(
          `ABI encoding params/values length mismatch.
Expected length (params): ${e}
Given length (values): ${t}`,
          { name: "AbiEncodingLengthMismatchError" }
        );
      }
    }
    class l extends a.BaseError {
      constructor(e, { docsPath: t }) {
        super(
          `Arguments (\`args\`) were provided to "${e}", but "${e}" on the ABI does not contain any parameters (\`inputs\`).
Cannot encode error result without knowing what the parameter types are.
Make sure you are using the correct ABI and that the inputs exist on it.`,
          { docsPath: t, name: "AbiErrorInputsNotFoundError" }
        );
      }
    }
    class b extends a.BaseError {
      constructor(e, { docsPath: t } = {}) {
        super(
          `Error ${e ? `"${e}" ` : ""}not found on ABI.
Make sure you are using the correct ABI and that the error exists on it.`,
          { docsPath: t, name: "AbiErrorNotFoundError" }
        );
      }
    }
    class p extends a.BaseError {
      constructor(e, { docsPath: t, cause: r }) {
        super(
          `Encoded error signature "${e}" not found on ABI.
Make sure you are using the correct ABI and that the error exists on it.
You can look up the decoded signature here: https://4byte.sourcify.dev/?q=${e}.`,
          { docsPath: t, name: "AbiErrorSignatureNotFoundError", cause: r }
        ),
          Object.defineProperty(this, "signature", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          (this.signature = e);
      }
    }
    class y extends a.BaseError {
      constructor({ docsPath: e }) {
        super("Cannot extract event signature from empty topics.", {
          docsPath: e,
          name: "AbiEventSignatureEmptyTopicsError",
        });
      }
    }
    class m extends a.BaseError {
      constructor(e, { docsPath: t }) {
        super(
          `Encoded event signature "${e}" not found on ABI.
Make sure you are using the correct ABI and that the event exists on it.
You can look up the signature here: https://4byte.sourcify.dev/?q=${e}.`,
          { docsPath: t, name: "AbiEventSignatureNotFoundError" }
        );
      }
    }
    class h extends a.BaseError {
      constructor(e, { docsPath: t } = {}) {
        super(
          `Event ${e ? `"${e}" ` : ""}not found on ABI.
Make sure you are using the correct ABI and that the event exists on it.`,
          { docsPath: t, name: "AbiEventNotFoundError" }
        );
      }
    }
    class g extends a.BaseError {
      constructor(e, { docsPath: t } = {}) {
        super(
          `Function ${e ? `"${e}" ` : ""}not found on ABI.
Make sure you are using the correct ABI and that the function exists on it.`,
          { docsPath: t, name: "AbiFunctionNotFoundError" }
        );
      }
    }
    class v extends a.BaseError {
      constructor(e, { docsPath: t }) {
        super(
          `Function "${e}" does not contain any \`outputs\` on ABI.
Cannot decode function result without knowing what the parameter types are.
Make sure you are using the correct ABI and that the function exists on it.`,
          { docsPath: t, name: "AbiFunctionOutputsNotFoundError" }
        );
      }
    }
    class w extends a.BaseError {
      constructor(e, { docsPath: t }) {
        super(
          `Encoded function signature "${e}" not found on ABI.
Make sure you are using the correct ABI and that the function exists on it.
You can look up the signature here: https://4byte.sourcify.dev/?q=${e}.`,
          { docsPath: t, name: "AbiFunctionSignatureNotFoundError" }
        );
      }
    }
    class E extends a.BaseError {
      constructor(e, r) {
        super("Found ambiguous types in overloaded ABI items.", {
          metaMessages: [
            `\`${e.type}\` in \`${t(e.abiItem)}\`, and`,
            `\`${r.type}\` in \`${t(r.abiItem)}\``,
            "",
            "These types encode differently and cannot be distinguished at runtime.",
            "Remove one of the ambiguous items in the ABI.",
          ],
          name: "AbiItemAmbiguityError",
        });
      }
    }
    class x extends a.BaseError {
      constructor({ expectedSize: e, givenSize: t }) {
        super(`Expected bytes${e}, got bytes${t}.`, {
          name: "BytesSizeMismatchError",
        });
      }
    }
    class A extends a.BaseError {
      constructor({ abiItem: e, data: t, params: n, size: a }) {
        super(
          `Data size of ${a} bytes is too small for non-indexed event parameters.`,
          {
            metaMessages: [
              `Params: (${r(n, { includeName: !0 })})`,
              `Data:   ${t} (${a} bytes)`,
            ],
            name: "DecodeLogDataMismatch",
          }
        ),
          Object.defineProperty(this, "abiItem", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          Object.defineProperty(this, "data", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          Object.defineProperty(this, "params", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          Object.defineProperty(this, "size", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          (this.abiItem = e),
          (this.data = t),
          (this.params = n),
          (this.size = a);
      }
    }
    class $ extends a.BaseError {
      constructor({ abiItem: e, param: r }) {
        super(
          `Expected a topic for indexed event parameter${
            r.name ? ` "${r.name}"` : ""
          } on event "${t(e, { includeName: !0 })}".`,
          { name: "DecodeLogTopicsMismatch" }
        ),
          Object.defineProperty(this, "abiItem", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          (this.abiItem = e);
      }
    }
    class P extends a.BaseError {
      constructor(e, { docsPath: t }) {
        super(
          `Type "${e}" is not a valid encoding type.
Please provide a valid ABI type.`,
          { docsPath: t, name: "InvalidAbiEncodingType" }
        );
      }
    }
    class B extends a.BaseError {
      constructor(e, { docsPath: t }) {
        super(
          `Type "${e}" is not a valid decoding type.
Please provide a valid ABI type.`,
          { docsPath: t, name: "InvalidAbiDecodingType" }
        );
      }
    }
    class M extends a.BaseError {
      constructor(e) {
        super(`Value "${e}" is not a valid array.`, {
          name: "InvalidArrayError",
        });
      }
    }
    class I extends a.BaseError {
      constructor(e) {
        super(
          `"${e}" is not a valid definition type.
Valid types: "function", "event", "error"`,
          { name: "InvalidDefinitionTypeError" }
        );
      }
    }
    class S extends a.BaseError {
      constructor(e) {
        super(`Type "${e}" is not supported for packed encoding.`, {
          name: "UnsupportedPackedAbiType",
        });
      }
    }
  },
  395312,
  (e) => {
    "use strict";
    var t = e.i(769936),
      r = e.i(831095);
    function n(e) {
      return (0, r.keccak256)((0, t.toBytes)(e));
    }
    e.s(["hashSignature", () => n]);
  },
  655330,
  (e) => {
    "use strict";
    function t(e, t) {
      let r = e.exec(t);
      return r?.groups;
    }
    e.s([
      "bytesRegex",
      0,
      /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/,
      "execTyped",
      () => t,
      "integerRegex",
      0,
      /^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/,
      "isTupleRegex",
      0,
      /^\(.+?\).*?$/,
    ]);
  },
  926336,
  620363,
  722716,
  (e) => {
    "use strict";
    var t = e.i(395312),
      r = e.i(655330);
    let n = /^tuple(?<array>(\[(\d*)\])*)$/;
    function a(e) {
      let t = "",
        a = e.length;
      for (let o = 0; o < a; o++)
        (t += (function e(t) {
          let a = t.type;
          if (n.test(t.type) && "components" in t) {
            a = "(";
            let o = t.components.length;
            for (let r = 0; r < o; r++)
              (a += e(t.components[r])), r < o - 1 && (a += ", ");
            let i = (0, r.execTyped)(n, t.type);
            return (a += `)${i?.array || ""}`), e({ ...t, type: a });
          }
          return ("indexed" in t && t.indexed && (a = `${a} indexed`), t.name)
            ? `${a} ${t.name}`
            : a;
        })(e[o])),
          o !== a - 1 && (t += ", ");
      return t;
    }
    function o(e) {
      return "function" === e.type
        ? `function ${e.name}(${a(e.inputs)})${
            e.stateMutability && "nonpayable" !== e.stateMutability
              ? ` ${e.stateMutability}`
              : ""
          }${e.outputs?.length ? ` returns (${a(e.outputs)})` : ""}`
        : "event" === e.type
        ? `event ${e.name}(${a(e.inputs)})`
        : "error" === e.type
        ? `error ${e.name}(${a(e.inputs)})`
        : "constructor" === e.type
        ? `constructor(${a(e.inputs)})${
            "payable" === e.stateMutability ? " payable" : ""
          }`
        : "fallback" === e.type
        ? `fallback() external${
            "payable" === e.stateMutability ? " payable" : ""
          }`
        : "receive() external payable";
    }
    e.s(["formatAbiParameters", () => a], 620363),
      e.s(["formatAbiItem", () => o], 722716);
    var i = e.i(569934);
    function s(e) {
      return (0, t.hashSignature)(
        (function (e) {
          let t = !0,
            r = "",
            n = 0,
            a = "",
            o = !1;
          for (let i = 0; i < e.length; i++) {
            let s = e[i];
            if (
              (["(", ")", ","].includes(s) && (t = !0),
              "(" === s && n++,
              ")" === s && n--,
              t)
            ) {
              if (0 === n) {
                if (" " === s && ["event", "function", ""].includes(a)) a = "";
                else if (((a += s), ")" === s)) {
                  o = !0;
                  break;
                }
                continue;
              }
              if (" " === s) {
                "," !== e[i - 1] &&
                  "," !== r &&
                  ",(" !== r &&
                  ((r = ""), (t = !1));
                continue;
              }
              (a += s), (r += s);
            }
          }
          if (!o) throw new i.BaseError("Unable to normalize signature.");
          return a;
        })("string" == typeof e ? e : o(e))
      );
    }
    e.s(["toSignatureHash", () => s], 926336);
  },
  879617,
  (e) => {
    "use strict";
    var t = e.i(790063),
      r = e.i(926336);
    e.s([
      "toFunctionSelector",
      0,
      (e) => (0, t.slice)((0, r.toSignatureHash)(e), 0, 4),
    ]);
  },
  249311,
  342692,
  704434,
  (e) => {
    "use strict";
    var t = e.i(70204),
      r = e.i(823838),
      n = e.i(795),
      a = e.i(401319),
      o = e.i(790063),
      i = e.i(8406),
      s = e.i(400564),
      c = e.i(450323),
      u = e.i(675107);
    function d(e, t = {}) {
      void 0 !== t.size && (0, c.assertSize)(e, { size: t.size });
      let r = (0, u.bytesToHex)(e, t);
      return (0, c.hexToNumber)(r, t);
    }
    var f = e.i(769936),
      l = e.i(608861),
      b = e.i(569934),
      p = e.i(796516),
      y = e.i(147526),
      m = e.i(22411);
    let h =
      /^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/;
    function g(e, r) {
      if (e.length !== r.length)
        throw new t.AbiEncodingLengthMismatchError({
          expectedLength: e.length,
          givenLength: r.length,
        });
      return v(
        (function ({ params: e, values: r }) {
          let n = [];
          for (let i = 0; i < e.length; i++)
            n.push(
              (function e({ param: r, value: n }) {
                let i = w(r.type);
                if (i) {
                  let [a, o] = i;
                  return (function (r, { length: n, param: a }) {
                    let o = null === n;
                    if (!Array.isArray(r)) throw new t.InvalidArrayError(r);
                    if (!o && r.length !== n)
                      throw new t.AbiEncodingArrayLengthMismatchError({
                        expectedLength: n,
                        givenLength: r.length,
                        type: `${a.type}[${n}]`,
                      });
                    let i =
                        0 === r.length &&
                        (function e(t) {
                          let { type: r } = t;
                          if (
                            "string" === r ||
                            "bytes" === r ||
                            r.endsWith("[]")
                          )
                            return !0;
                          if ("tuple" === r) return t.components.some(e);
                          let n = w(r);
                          return !!n && e({ ...t, type: n[1] });
                        })(a),
                      s = [];
                    for (let t = 0; t < r.length; t++) {
                      let n = e({ param: a, value: r[t] });
                      n.dynamic && (i = !0), s.push(n);
                    }
                    if (o || i) {
                      let e = v(s);
                      if (o) {
                        let t = (0, u.numberToHex)(s.length, { size: 32 });
                        return {
                          dynamic: !0,
                          encoded: (0, y.concatHex)([t, e]),
                        };
                      }
                      if (i) return { dynamic: !0, encoded: e };
                    }
                    return {
                      dynamic: !1,
                      encoded: (0, y.concatHex)(s.map(({ encoded: e }) => e)),
                    };
                  })(n, { length: a, param: { ...r, type: o } });
                }
                if ("tuple" === r.type)
                  return (function (t, { param: r }) {
                    let n = !1,
                      a = [];
                    for (let o = 0; o < r.components.length; o++) {
                      let i = r.components[o],
                        s = Array.isArray(t) ? o : i.name,
                        c = e({ param: i, value: t[s] });
                      a.push(c), c.dynamic && (n = !0);
                    }
                    return {
                      dynamic: n,
                      encoded: n
                        ? v(a)
                        : (0, y.concatHex)(a.map(({ encoded: e }) => e)),
                    };
                  })(n, { param: r });
                if ("address" === r.type) {
                  var c = n;
                  if (!(0, p.isAddress)(c))
                    throw new l.InvalidAddressError({ address: c });
                  return {
                    dynamic: !1,
                    encoded: (0, m.padHex)(c.toLowerCase()),
                  };
                }
                if ("bool" === r.type) {
                  var d = n;
                  if ("boolean" != typeof d)
                    throw new b.BaseError(
                      `Invalid boolean value: "${d}" (type: ${typeof d}). Expected: \`true\` or \`false\`.`
                    );
                  return {
                    dynamic: !1,
                    encoded: (0, m.padHex)((0, u.boolToHex)(d)),
                  };
                }
                if (r.type.startsWith("uint") || r.type.startsWith("int")) {
                  let e = r.type.startsWith("int"),
                    [, , t = "256"] = h.exec(r.type) ?? [];
                  return (function (e, { signed: t, size: r = 256 }) {
                    if ("number" == typeof r) {
                      let n = 2n ** (BigInt(r) - (t ? 1n : 0n)) - 1n,
                        a = t ? -n - 1n : 0n;
                      if (e > n || e < a)
                        throw new s.IntegerOutOfRangeError({
                          max: n.toString(),
                          min: a.toString(),
                          signed: t,
                          size: r / 8,
                          value: e.toString(),
                        });
                    }
                    return {
                      dynamic: !1,
                      encoded: (0, u.numberToHex)(e, { size: 32, signed: t }),
                    };
                  })(n, { signed: e, size: Number(t) });
                }
                if (r.type.startsWith("bytes"))
                  return (function (e, { param: r }) {
                    let [, n] = r.type.split("bytes"),
                      o = (0, a.size)(e);
                    if (!n) {
                      let t = e;
                      return (
                        o % 32 != 0 &&
                          (t = (0, m.padHex)(t, {
                            dir: "right",
                            size: 32 * Math.ceil((e.length - 2) / 2 / 32),
                          })),
                        {
                          dynamic: !0,
                          encoded: (0, y.concatHex)([
                            (0, m.padHex)((0, u.numberToHex)(o, { size: 32 })),
                            t,
                          ]),
                        }
                      );
                    }
                    if (o !== Number.parseInt(n, 10))
                      throw new t.AbiEncodingBytesSizeMismatchError({
                        expectedSize: Number.parseInt(n, 10),
                        value: e,
                      });
                    return {
                      dynamic: !1,
                      encoded: (0, m.padHex)(e, { dir: "right" }),
                    };
                  })(n, { param: r });
                if ("string" === r.type) {
                  var f = n;
                  let e = (0, u.stringToHex)(f),
                    t = Math.ceil((0, a.size)(e) / 32),
                    r = [];
                  for (let n = 0; n < t; n++)
                    r.push(
                      (0, m.padHex)((0, o.slice)(e, 32 * n, (n + 1) * 32), {
                        dir: "right",
                      })
                    );
                  return {
                    dynamic: !0,
                    encoded: (0, y.concatHex)([
                      (0, m.padHex)(
                        (0, u.numberToHex)((0, a.size)(e), { size: 32 })
                      ),
                      ...r,
                    ]),
                  };
                }
                throw new t.InvalidAbiEncodingTypeError(r.type, {
                  docsPath: "/docs/contract/encodeAbiParameters",
                });
              })({ param: e[i], value: r[i] })
            );
          return n;
        })({ params: e, values: r })
      );
    }
    e.s(
      [
        "arrayRegex",
        0,
        /^(.*)\[([0-9]*)\]$/,
        "bytesRegex",
        0,
        /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/,
        "integerRegex",
        0,
        h,
      ],
      342692
    );
    function v(e) {
      let t = 0;
      for (let r = 0; r < e.length; r++) {
        let { dynamic: n, encoded: o } = e[r];
        n ? (t += 32) : (t += (0, a.size)(o));
      }
      let r = [],
        n = [],
        o = 0;
      for (let i = 0; i < e.length; i++) {
        let { dynamic: s, encoded: c } = e[i];
        s
          ? (r.push((0, u.numberToHex)(t + o, { size: 32 })),
            n.push(c),
            (o += (0, a.size)(c)))
          : r.push(c);
      }
      return (0, y.concatHex)([...r, ...n]);
    }
    function w(e) {
      let t = e.match(/^(.*)\[(\d+)?\]$/);
      return t ? [t[2] ? Number(t[2]) : null, t[1]] : void 0;
    }
    function E(e, l) {
      let b = "string" == typeof l ? (0, f.hexToBytes)(l) : l,
        p = (0, n.createCursor)(b);
      if (0 === (0, a.size)(b) && e.length > 0)
        throw new t.AbiDecodingZeroDataError();
      if ((0, a.size)(l) && 32 > (0, a.size)(l))
        throw new t.AbiDecodingDataSizeTooSmallError({
          data: "string" == typeof l ? l : (0, u.bytesToHex)(l),
          params: e,
          size: (0, a.size)(l),
        });
      let y = 0,
        m = [];
      for (let n = 0; n < e.length; ++n) {
        let a = e[n];
        y < b.length && p.setPosition(y);
        let [f, l] = (function e(n, a, { staticPosition: f }) {
          let l = w(a.type);
          if (l) {
            let [t, r] = l;
            return (function (t, r, { length: n, staticPosition: a }) {
              if (null === n) {
                let n = a + d(t.readBytes(32)),
                  o = n + 32;
                t.setPosition(n);
                let i = d(t.readBytes(32)),
                  s = x(r),
                  c = 0,
                  u = [];
                for (let n = 0; n < i; ++n) {
                  t.setPosition(o + (s ? 32 * n : c));
                  let [a, i] = e(t, r, { staticPosition: o });
                  (c += i),
                    u.push(a),
                    0 === i && (t.assertReadLimit(), t._touch());
                }
                return t.setPosition(a + 32), [u, 32];
              }
              if (x(r)) {
                let o = a + d(t.readBytes(32)),
                  i = [];
                for (let a = 0; a < n; ++a) {
                  t.setPosition(o + 32 * a);
                  let [n] = e(t, r, { staticPosition: o });
                  i.push(n);
                }
                return t.setPosition(a + 32), [i, 32];
              }
              let o = 0,
                i = [];
              for (let s = 0; s < n; ++s) {
                let [n, s] = e(t, r, { staticPosition: a + o });
                (o += s),
                  i.push(n),
                  0 === s && (t.assertReadLimit(), t._touch());
              }
              return [i, o];
            })(n, { ...a, type: r }, { length: t, staticPosition: f });
          }
          if ("tuple" === a.type)
            return (function (t, r, { staticPosition: n }) {
              let a =
                  0 === r.components.length ||
                  r.components.some(({ name: e }) => !e),
                o = a ? [] : {},
                i = 0;
              if (x(r)) {
                let s = n + d(t.readBytes(32));
                for (let n = 0; n < r.components.length; ++n) {
                  let c = r.components[n];
                  t.setPosition(s + i);
                  let [u, d] = e(t, c, { staticPosition: s });
                  (i += d), (o[a ? n : c?.name] = u);
                }
                return t.setPosition(n + 32), [o, 32];
              }
              for (let s = 0; s < r.components.length; ++s) {
                let c = r.components[s],
                  [u, d] = e(t, c, { staticPosition: n });
                (o[a ? s : c?.name] = u), (i += d);
              }
              return [o, i];
            })(n, a, { staticPosition: f });
          if ("address" === a.type) {
            let e;
            return (
              (e = n.readBytes(32)),
              [
                (0, r.checksumAddress)(
                  (0, u.bytesToHex)((0, o.sliceBytes)(e, -20))
                ),
                32,
              ]
            );
          }
          if ("bool" === a.type)
            return [
              (function (e, t = {}) {
                let r = e;
                if (
                  (void 0 !== t.size &&
                    ((0, c.assertSize)(r, { size: t.size }),
                    (r = (0, i.trim)(r))),
                  r.length > 1 || r[0] > 1)
                )
                  throw new s.InvalidBytesBooleanError(r);
                return !!r[0];
              })(n.readBytes(32), { size: 32 }),
              32,
            ];
          if (a.type.startsWith("bytes"))
            return (function (e, t, { staticPosition: r }) {
              let [n, a] = t.type.split("bytes");
              if (!a) {
                let t = d(e.readBytes(32));
                e.setPosition(r + t);
                let n = d(e.readBytes(32));
                if (0 === n) return e.setPosition(r + 32), ["0x", 32];
                let a = e.readBytes(n);
                return e.setPosition(r + 32), [(0, u.bytesToHex)(a), 32];
              }
              return [
                (0, u.bytesToHex)(e.readBytes(Number.parseInt(a, 10), 32)),
                32,
              ];
            })(n, a, { staticPosition: f });
          if (a.type.startsWith("uint") || a.type.startsWith("int")) {
            var b, p;
            let e, t, r;
            return (
              (b = n),
              (e = (p = a).type.startsWith("int")),
              (t = Number.parseInt(p.type.split("int")[1] || "256", 10)),
              (r = b.readBytes(32)),
              [
                t > 48
                  ? (function (e, t = {}) {
                      void 0 !== t.size &&
                        (0, c.assertSize)(e, { size: t.size });
                      let r = (0, u.bytesToHex)(e, t);
                      return (0, c.hexToBigInt)(r, t);
                    })(r, { signed: e })
                  : d(r, { signed: e }),
                32,
              ]
            );
          }
          if ("string" === a.type)
            return (function (e, { staticPosition: t }) {
              let r = d(e.readBytes(32));
              e.setPosition(t + r);
              let n = d(e.readBytes(32));
              if (0 === n) return e.setPosition(t + 32), ["", 32];
              let a = e.readBytes(n, 32),
                o = (function (e, t = {}) {
                  let r = e;
                  return (
                    void 0 !== t.size &&
                      ((0, c.assertSize)(r, { size: t.size }),
                      (r = (0, i.trim)(r, { dir: "right" }))),
                    new TextDecoder().decode(r)
                  );
                })((0, i.trim)(a));
              return e.setPosition(t + 32), [o, 32];
            })(n, { staticPosition: f });
          throw new t.InvalidAbiDecodingTypeError(a.type, {
            docsPath: "/docs/contract/decodeAbiParameters",
          });
        })(p, a, { staticPosition: 0 });
        (y += l), m.push(f);
      }
      return m;
    }
    function x(e) {
      let { type: t } = e;
      if ("string" === t || "bytes" === t || t.endsWith("[]")) return !0;
      if ("tuple" === t) return e.components?.some(x);
      let r = w(e.type);
      return !!(r && x({ ...e, type: r[1] }));
    }
    e.s(
      ["encodeAbiParameters", () => g, "getArrayComponents", () => w],
      704434
    ),
      e.s(["decodeAbiParameters", () => E], 249311);
  },
  959953,
  (e) => {
    "use strict";
    var t = e.i(727343),
      r = e.i(70204),
      n = e.i(790063),
      a = e.i(879617),
      o = e.i(249311),
      i = e.i(332881);
    function s(e) {
      let { abi: s, data: c, cause: u } = e,
        d = (0, n.slice)(c, 0, 4);
      if ("0x" === d) throw new r.AbiDecodingZeroDataError({ cause: u });
      let f = [...(s || []), t.solidityError, t.solidityPanic].find(
        (e) =>
          "error" === e.type &&
          d === (0, a.toFunctionSelector)((0, i.formatAbiItem)(e))
      );
      if (!f)
        throw new r.AbiErrorSignatureNotFoundError(d, {
          docsPath: "/docs/contract/decodeErrorResult",
          cause: u,
        });
      return {
        abiItem: f,
        args:
          "inputs" in f && f.inputs && f.inputs.length > 0
            ? (0, o.decodeAbiParameters)(f.inputs, (0, n.slice)(c, 4))
            : void 0,
        errorName: f.name,
      };
    }
    e.s(["decodeErrorResult", () => s]);
  },
  34888,
  (e) => {
    "use strict";
    e.s([
      "stringify",
      0,
      (e, t, r) =>
        JSON.stringify(
          e,
          (e, r) => {
            let n = "bigint" == typeof r ? r.toString() : r;
            return "function" == typeof t ? t(e, n) : n;
          },
          r
        ),
    ]);
  },
  461295,
  (e) => {
    "use strict";
    var t = e.i(34888);
    function r({
      abiItem: e,
      args: r,
      includeFunctionName: n = !0,
      includeName: a = !1,
    }) {
      if ("name" in e && "inputs" in e && e.inputs)
        return `${n ? e.name : ""}(${e.inputs
          .map(
            (e, n) =>
              `${a && e.name ? `${e.name}: ` : ""}${
                "object" == typeof r[n] ? (0, t.stringify)(r[n]) : r[n]
              }`
          )
          .join(", ")})`;
    }
    e.s(["formatAbiItemWithArgs", () => r]);
  },
  774620,
  (e) => {
    "use strict";
    let t = e.i(926336).toSignatureHash;
    e.s(["toEventSelector", 0, t]);
  },
  627173,
  (e) => {
    "use strict";
    var t = e.i(70204),
      r = e.i(880841),
      n = e.i(796516),
      a = e.i(774620),
      o = e.i(879617);
    function i(e) {
      let i,
        { abi: s, args: c = [], name: u } = e,
        d = (0, r.isHex)(u, { strict: !1 }),
        f = s.filter((e) =>
          d
            ? "function" === e.type
              ? (0, o.toFunctionSelector)(e) === u
              : "event" === e.type && (0, a.toEventSelector)(e) === u
            : "name" in e && e.name === u
        );
      if (0 !== f.length) {
        if (1 === f.length) return f[0];
        for (let e of f) {
          if ("inputs" in e) {
            if (!c || 0 === c.length) {
              if (!e.inputs || 0 === e.inputs.length) return e;
              continue;
            }
            if (
              e.inputs &&
              0 !== e.inputs.length &&
              e.inputs.length === c.length &&
              c.every((t, r) => {
                let a = "inputs" in e && e.inputs[r];
                return (
                  !!a &&
                  (function e(t, r) {
                    let a = typeof t,
                      o = r.type;
                    switch (o) {
                      case "address":
                        return (0, n.isAddress)(t, { strict: !1 });
                      case "bool":
                        return "boolean" === a;
                      case "function":
                      case "string":
                        return "string" === a;
                      default:
                        if ("tuple" === o && "components" in r)
                          return Object.values(r.components).every(
                            (r, n) =>
                              "object" === a && e(Object.values(t)[n], r)
                          );
                        if (
                          /^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(
                            o
                          )
                        )
                          return "number" === a || "bigint" === a;
                        if (/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(o))
                          return "string" === a || t instanceof Uint8Array;
                        if (/[a-z]+[1-9]{0,3}(\[[0-9]{0,}\])+$/.test(o))
                          return (
                            Array.isArray(t) &&
                            t.every((t) =>
                              e(t, {
                                ...r,
                                type: o.replace(/(\[[0-9]{0,}\])$/, ""),
                              })
                            )
                          );
                        return !1;
                    }
                  })(t, a)
                );
              })
            ) {
              if (i && "inputs" in i && i.inputs) {
                let r = (function e(t, r, a) {
                  for (let o in t) {
                    let i = t[o],
                      s = r[o];
                    if (
                      "tuple" === i.type &&
                      "tuple" === s.type &&
                      "components" in i &&
                      "components" in s
                    )
                      return e(i.components, s.components, a[o]);
                    let c = [i.type, s.type];
                    if (
                      (c.includes("address") && c.includes("bytes20")) ||
                      (((c.includes("address") && c.includes("string")) ||
                        (c.includes("address") && c.includes("bytes"))) &&
                        (0, n.isAddress)(a[o], { strict: !1 }))
                    )
                      return c;
                  }
                })(e.inputs, i.inputs, c);
                if (r)
                  throw new t.AbiItemAmbiguityError(
                    { abiItem: e, type: r[0] },
                    { abiItem: i, type: r[1] }
                  );
              }
              i = e;
            }
          }
        }
        return i || f[0];
      }
    }
    e.s(["getAbiItem", () => i]);
  },
  363710,
  (e) => {
    "use strict";
    function t(e) {
      if (e?.reason) return e.reason;
      if ("function" == typeof DOMException)
        return new DOMException("This operation was aborted", "AbortError");
      let t = Error("This operation was aborted");
      return (t.name = "AbortError"), t;
    }
    function r(e) {
      return (
        "object" == typeof e &&
        null !== e &&
        "name" in e &&
        "AbortError" === e.name
      );
    }
    e.s([
      "getAbortError",
      () => t,
      "getContractAddress",
      0,
      (e) => e,
      "getUrl",
      0,
      (e) => {
        try {
          let t = new URL(e);
          if (!t.username && !t.password) return e;
          return (t.username = ""), (t.password = ""), t.toString();
        } catch {
          return e;
        }
      },
      "isAbortError",
      () => r,
    ]);
  },
  878023,
  (e) => {
    "use strict";
    var t = e.i(189991),
      r = e.i(727343),
      n = e.i(959953),
      a = e.i(332881),
      o = e.i(461295),
      i = e.i(627173),
      s = e.i(285973),
      c = e.i(976486),
      u = e.i(70204),
      d = e.i(569934),
      f = e.i(62570),
      l = e.i(393702),
      b = e.i(363710);
    class p extends d.BaseError {
      constructor(
        e,
        {
          account: r,
          docsPath: n,
          chain: a,
          data: o,
          gas: i,
          gasPrice: u,
          maxFeePerGas: d,
          maxPriorityFeePerGas: b,
          nonce: p,
          to: y,
          value: m,
          stateOverride: h,
        }
      ) {
        const g = r ? (0, t.parseAccount)(r) : void 0;
        let v = (0, l.prettyPrint)({
          from: g?.address,
          to: y,
          value:
            void 0 !== m &&
            `${(0, s.formatEther)(m)} ${a?.nativeCurrency?.symbol || "ETH"}`,
          data: o,
          gas: i,
          gasPrice: void 0 !== u && `${(0, c.formatGwei)(u)} gwei`,
          maxFeePerGas: void 0 !== d && `${(0, c.formatGwei)(d)} gwei`,
          maxPriorityFeePerGas: void 0 !== b && `${(0, c.formatGwei)(b)} gwei`,
          nonce: p,
        });
        h &&
          (v += `
${(0, f.prettyStateOverride)(h)}`),
          super(e.shortMessage, {
            cause: e,
            docsPath: n,
            metaMessages: [
              ...(e.metaMessages ? [...e.metaMessages, " "] : []),
              "Raw Call Arguments:",
              v,
            ].filter(Boolean),
            name: "CallExecutionError",
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
    class y extends d.BaseError {
      constructor(
        e,
        {
          abi: t,
          args: r,
          contractAddress: n,
          docsPath: s,
          functionName: c,
          sender: u,
        }
      ) {
        const d = (0, i.getAbiItem)({ abi: t, args: r, name: c }),
          f = d
            ? (0, o.formatAbiItemWithArgs)({
                abiItem: d,
                args: r,
                includeFunctionName: !1,
                includeName: !1,
              })
            : void 0,
          p = d ? (0, a.formatAbiItem)(d, { includeName: !0 }) : void 0,
          y = (0, l.prettyPrint)({
            address: n && (0, b.getContractAddress)(n),
            function: p,
            args:
              f &&
              "()" !== f &&
              `${[...Array(c?.length ?? 0).keys()]
                .map(() => " ")
                .join("")}${f}`,
            sender: u,
          });
        super(
          e.shortMessage ||
            `An unknown error occurred while executing the contract function "${c}".`,
          {
            cause: e,
            docsPath: s,
            metaMessages: [
              ...(e.metaMessages ? [...e.metaMessages, " "] : []),
              y && "Contract Call:",
              y,
            ].filter(Boolean),
            name: "ContractFunctionExecutionError",
          }
        ),
          Object.defineProperty(this, "abi", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          Object.defineProperty(this, "args", {
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
          Object.defineProperty(this, "contractAddress", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          Object.defineProperty(this, "formattedArgs", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          Object.defineProperty(this, "functionName", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          Object.defineProperty(this, "sender", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          (this.abi = t),
          (this.args = r),
          (this.cause = e),
          (this.contractAddress = n),
          (this.functionName = c),
          (this.sender = u);
      }
    }
    class m extends d.BaseError {
      constructor({ abi: e, data: t, functionName: i, message: s, cause: c }) {
        let d, f, l, b, p;
        if (t && "0x" !== t)
          try {
            const {
              abiItem: i,
              errorName: s,
              args: u,
            } = (f = (0, n.decodeErrorResult)({ abi: e, data: t, cause: c }));
            if ("Error" === s) b = u[0];
            else if ("Panic" === s) {
              const [e] = u;
              b = r.panicReasons[e];
            } else {
              const e = i
                  ? (0, a.formatAbiItem)(i, { includeName: !0 })
                  : void 0,
                t =
                  i && u
                    ? (0, o.formatAbiItemWithArgs)({
                        abiItem: i,
                        args: u,
                        includeFunctionName: !1,
                        includeName: !1,
                      })
                    : void 0;
              l = [
                e ? `Error: ${e}` : "",
                t && "()" !== t
                  ? `       ${[...Array(s?.length ?? 0).keys()]
                      .map(() => " ")
                      .join("")}${t}`
                  : "",
              ];
            }
          } catch (e) {
            d = e;
          }
        else s && (b = s);
        d instanceof u.AbiErrorSignatureNotFoundError &&
          ((p = d.signature),
          (l = [
            `Unable to decode signature "${p}" as it was not found on the provided ABI.`,
            "Make sure you are using the correct ABI and that the error exists on it.",
            `You can look up the decoded signature here: https://4byte.sourcify.dev/?q=${p}.`,
          ])),
          super(
            (b && "execution reverted" !== b) || p
              ? [
                  `The contract function "${i}" reverted with the following ${
                    p ? "signature" : "reason"
                  }:`,
                  b || p,
                ].join("\n")
              : `The contract function "${i}" reverted.`,
            {
              cause: d ?? c,
              metaMessages: l,
              name: "ContractFunctionRevertedError",
            }
          ),
          Object.defineProperty(this, "data", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          Object.defineProperty(this, "raw", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          Object.defineProperty(this, "reason", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          Object.defineProperty(this, "signature", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          (this.data = f),
          (this.raw = t),
          (this.reason = b),
          (this.signature = p);
      }
    }
    class h extends d.BaseError {
      constructor({ functionName: e, cause: t }) {
        super(`The contract function "${e}" returned no data ("0x").`, {
          metaMessages: [
            "This could be due to any of the following:",
            `  - The contract does not have the function "${e}",`,
            "  - The parameters passed to the contract function may be invalid, or",
            "  - The address is not a contract.",
          ],
          name: "ContractFunctionZeroDataError",
          cause: t,
        });
      }
    }
    class g extends d.BaseError {
      constructor({ factory: e }) {
        super(
          `Deployment for counterfactual contract call failed${
            e ? ` for factory "${e}".` : ""
          }`,
          {
            metaMessages: [
              "Please ensure:",
              "- The `factory` is a valid contract deployment factory (ie. Create2 Factory, ERC-4337 Factory, etc).",
              "- The `factoryData` is a valid encoded function call for contract deployment function on the factory.",
            ],
            name: "CounterfactualDeploymentFailedError",
          }
        );
      }
    }
    class v extends d.BaseError {
      constructor({ data: e, message: t }) {
        super(t || "", { name: "RawContractError" }),
          Object.defineProperty(this, "code", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: 3,
          }),
          Object.defineProperty(this, "data", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          (this.data = e);
      }
    }
    e.s([
      "CallExecutionError",
      () => p,
      "ContractFunctionExecutionError",
      () => y,
      "ContractFunctionRevertedError",
      () => m,
      "ContractFunctionZeroDataError",
      () => h,
      "CounterfactualDeploymentFailedError",
      () => g,
      "RawContractError",
      () => v,
    ]);
  },
  806685,
  (e) => {
    "use strict";
    var t = e.i(608861),
      r = e.i(796516);
    function n(e, n) {
      if (!(0, r.isAddress)(e, { strict: !1 }))
        throw new t.InvalidAddressError({ address: e });
      if (!(0, r.isAddress)(n, { strict: !1 }))
        throw new t.InvalidAddressError({ address: n });
      return e.toLowerCase() === n.toLowerCase();
    }
    e.s(["isAddressEqual", () => n]);
  },
  606580,
  (e) => {
    "use strict";
    var t = e.i(569934),
      r = e.i(675107);
    function n(e) {
      let {
        blockHash: n,
        blockNumber: a,
        blockTag: o,
        requireCanonical: i,
      } = e;
      if (void 0 !== i && !n)
        throw new t.BaseError(
          "`requireCanonical` can only be provided when `blockHash` is set."
        );
      return n
        ? i
          ? { blockHash: n, requireCanonical: i }
          : { blockHash: n }
        : "bigint" == typeof a
        ? (0, r.numberToHex)(a)
        : o ?? "latest";
    }
    e.s(["formatBlockParameter", () => n]);
  },
  656679,
  (e) => {
    "use strict";
    var t = e.i(147526),
      r = e.i(704434),
      n = e.i(70204),
      a = e.i(879617),
      o = e.i(332881),
      i = e.i(627173);
    let s = "/docs/contract/encodeFunctionData";
    function c(e) {
      let { args: c } = e,
        { abi: u, functionName: d } =
          1 === e.abi.length && e.functionName?.startsWith("0x")
            ? e
            : (function (e) {
                let { abi: t, args: r, functionName: c } = e,
                  u = t[0];
                if (c) {
                  let e = (0, i.getAbiItem)({ abi: t, args: r, name: c });
                  if (!e)
                    throw new n.AbiFunctionNotFoundError(c, { docsPath: s });
                  u = e;
                }
                if ("function" !== u.type)
                  throw new n.AbiFunctionNotFoundError(void 0, { docsPath: s });
                return {
                  abi: [u],
                  functionName: (0, a.toFunctionSelector)(
                    (0, o.formatAbiItem)(u)
                  ),
                };
              })(e),
        f = u[0],
        l =
          "inputs" in f && f.inputs
            ? (0, r.encodeAbiParameters)(f.inputs, c ?? [])
            : void 0;
      return (0, t.concatHex)([d, l ?? "0x"]);
    }
    e.s(["encodeFunctionData", () => c], 656679);
  },
  600547,
  (e) => {
    "use strict";
    var t = e.i(70204),
      r = e.i(249311),
      n = e.i(627173);
    let a = "/docs/contract/decodeFunctionResult";
    function o(e) {
      let { abi: o, args: i, functionName: s, data: c } = e,
        u = o[0];
      if (s) {
        let e = (0, n.getAbiItem)({ abi: o, args: i, name: s });
        if (!e) throw new t.AbiFunctionNotFoundError(s, { docsPath: a });
        u = e;
      }
      if ("function" !== u.type)
        throw new t.AbiFunctionNotFoundError(void 0, { docsPath: a });
      if (!u.outputs)
        throw new t.AbiFunctionOutputsNotFoundError(u.name, { docsPath: a });
      let d = (0, r.decodeAbiParameters)(u.outputs, c);
      return d && d.length > 1 ? d : d && 1 === d.length ? d[0] : void 0;
    }
    e.s(["decodeFunctionResult", () => o]);
  },
  1299,
  383856,
  (e) => {
    "use strict";
    var t = e.i(34888),
      r = e.i(569934),
      n = e.i(363710);
    class a extends r.BaseError {
      constructor({
        body: e,
        cause: r,
        details: a,
        headers: o,
        status: i,
        url: s,
      }) {
        super("HTTP request failed.", {
          cause: r,
          details: a,
          metaMessages: [
            i && `Status: ${i}`,
            `URL: ${(0, n.getUrl)(s)}`,
            e && `Request body: ${(0, t.stringify)(e)}`,
          ].filter(Boolean),
          name: "HttpRequestError",
        }),
          Object.defineProperty(this, "body", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          Object.defineProperty(this, "headers", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          Object.defineProperty(this, "status", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          Object.defineProperty(this, "url", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          (this.body = e),
          (this.headers = o),
          (this.status = i),
          (this.url = s);
      }
    }
    class o extends r.BaseError {
      constructor({ maxSize: e, size: t }) {
        super("HTTP response body exceeded the size limit.", {
          metaMessages: [`Max: ${e} bytes`, `Received: ${t} bytes`],
          name: "ResponseBodyTooLargeError",
        }),
          Object.defineProperty(this, "maxSize", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          Object.defineProperty(this, "size", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          (this.maxSize = e),
          (this.size = t);
      }
    }
    r.BaseError;
    class i extends r.BaseError {
      constructor({ body: e, error: r, url: a }) {
        super("RPC Request failed.", {
          cause: r,
          details: r.message,
          metaMessages: [
            `URL: ${(0, n.getUrl)(a)}`,
            `Request body: ${(0, t.stringify)(e)}`,
          ],
          name: "RpcRequestError",
        }),
          Object.defineProperty(this, "code", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          Object.defineProperty(this, "data", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          Object.defineProperty(this, "url", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          (this.code = r.code),
          (this.data = r.data),
          (this.url = a);
      }
    }
    r.BaseError;
    class s extends r.BaseError {
      constructor({ body: e, url: r }) {
        super("The request took too long to respond.", {
          details: "The request timed out.",
          metaMessages: [
            `URL: ${(0, n.getUrl)(r)}`,
            `Request body: ${(0, t.stringify)(e)}`,
          ],
          name: "TimeoutError",
        }),
          Object.defineProperty(this, "url", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          (this.url = r);
      }
    }
    e.s(
      [
        "HttpRequestError",
        () => a,
        "ResponseBodyTooLargeError",
        () => o,
        "RpcRequestError",
        () => i,
        "TimeoutError",
        () => s,
      ],
      1299
    );
    var c = r;
    class u extends c.BaseError {
      constructor(
        e,
        { code: t, docsPath: r, metaMessages: n, name: a, shortMessage: o }
      ) {
        super(o, {
          cause: e,
          docsPath: r,
          metaMessages: n || e?.metaMessages,
          name: a || "RpcError",
        }),
          Object.defineProperty(this, "code", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          (this.name = a || e.name),
          (this.code = e instanceof i ? e.code : t ?? -1);
      }
    }
    class d extends u {
      constructor(e, t) {
        super(e, t),
          Object.defineProperty(this, "data", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          (this.data = t.data);
      }
    }
    class f extends u {
      constructor(e) {
        super(e, {
          code: f.code,
          name: "ParseRpcError",
          shortMessage:
            "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text.",
        });
      }
    }
    Object.defineProperty(f, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: -32700,
    });
    class l extends u {
      constructor(e) {
        super(e, {
          code: l.code,
          name: "InvalidRequestRpcError",
          shortMessage: "JSON is not a valid request object.",
        });
      }
    }
    Object.defineProperty(l, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: -32600,
    });
    class b extends u {
      constructor(e, { method: t } = {}) {
        super(e, {
          code: b.code,
          name: "MethodNotFoundRpcError",
          shortMessage: `The method${
            t ? ` "${t}"` : ""
          } does not exist / is not available.`,
        });
      }
    }
    Object.defineProperty(b, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: -32601,
    });
    class p extends u {
      constructor(e) {
        super(e, {
          code: p.code,
          name: "InvalidParamsRpcError",
          shortMessage:
            "Invalid parameters were provided to the RPC method.\nDouble check you have provided the correct parameters.",
        });
      }
    }
    Object.defineProperty(p, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: -32602,
    });
    class y extends u {
      constructor(e) {
        super(e, {
          code: y.code,
          name: "InternalRpcError",
          shortMessage: "An internal error was received.",
        });
      }
    }
    Object.defineProperty(y, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: -32603,
    });
    class m extends u {
      constructor(e) {
        super(e, {
          code: m.code,
          name: "InvalidInputRpcError",
          shortMessage:
            "Missing or invalid parameters.\nDouble check you have provided the correct parameters.",
        });
      }
    }
    Object.defineProperty(m, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: -32e3,
    });
    class h extends u {
      constructor(e) {
        super(e, {
          code: h.code,
          name: "ResourceNotFoundRpcError",
          shortMessage: "Requested resource not found.",
        }),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "ResourceNotFoundRpcError",
          });
      }
    }
    Object.defineProperty(h, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: -32001,
    });
    class g extends u {
      constructor(e) {
        super(e, {
          code: g.code,
          name: "ResourceUnavailableRpcError",
          shortMessage: "Requested resource not available.",
        });
      }
    }
    Object.defineProperty(g, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: -32002,
    });
    class v extends u {
      constructor(e) {
        super(e, {
          code: v.code,
          name: "TransactionRejectedRpcError",
          shortMessage: "Transaction creation failed.",
        });
      }
    }
    Object.defineProperty(v, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: -32003,
    });
    class w extends u {
      constructor(e, { method: t } = {}) {
        super(e, {
          code: w.code,
          name: "MethodNotSupportedRpcError",
          shortMessage: `Method${t ? ` "${t}"` : ""} is not supported.`,
        });
      }
    }
    Object.defineProperty(w, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: -32004,
    });
    class E extends u {
      constructor(e) {
        super(e, {
          code: E.code,
          name: "LimitExceededRpcError",
          shortMessage: "Request exceeds defined limit.",
        });
      }
    }
    Object.defineProperty(E, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: -32005,
    });
    class x extends u {
      constructor(e) {
        super(e, {
          code: x.code,
          name: "JsonRpcVersionUnsupportedError",
          shortMessage: "Version of JSON-RPC protocol is not supported.",
        });
      }
    }
    Object.defineProperty(x, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: -32006,
    });
    class A extends d {
      constructor(e) {
        super(e, {
          code: A.code,
          name: "UserRejectedRequestError",
          shortMessage: "User rejected the request.",
        });
      }
    }
    Object.defineProperty(A, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: 4001,
    });
    class $ extends d {
      constructor(e) {
        super(e, {
          code: $.code,
          name: "UnauthorizedProviderError",
          shortMessage:
            "The requested method and/or account has not been authorized by the user.",
        });
      }
    }
    Object.defineProperty($, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: 4100,
    });
    class P extends d {
      constructor(e, { method: t } = {}) {
        super(e, {
          code: P.code,
          name: "UnsupportedProviderMethodError",
          shortMessage: `The Provider does not support the requested method${
            t ? ` " ${t}"` : ""
          }.`,
        });
      }
    }
    Object.defineProperty(P, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: 4200,
    });
    class B extends d {
      constructor(e) {
        super(e, {
          code: B.code,
          name: "ProviderDisconnectedError",
          shortMessage: "The Provider is disconnected from all chains.",
        });
      }
    }
    Object.defineProperty(B, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: 4900,
    });
    class M extends d {
      constructor(e) {
        super(e, {
          code: M.code,
          name: "ChainDisconnectedError",
          shortMessage: "The Provider is not connected to the requested chain.",
        });
      }
    }
    Object.defineProperty(M, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: 4901,
    });
    class I extends d {
      constructor(e) {
        super(e, {
          code: I.code,
          name: "SwitchChainError",
          shortMessage: "An error occurred when attempting to switch chain.",
        });
      }
    }
    Object.defineProperty(I, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: 4902,
    });
    class S extends d {
      constructor(e) {
        super(e, {
          code: S.code,
          name: "UnsupportedNonOptionalCapabilityError",
          shortMessage:
            "This Wallet does not support a capability that was not marked as optional.",
        });
      }
    }
    Object.defineProperty(S, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: 5700,
    });
    class O extends d {
      constructor(e) {
        super(e, {
          code: O.code,
          name: "UnsupportedChainIdError",
          shortMessage: "This Wallet does not support the requested chain ID.",
        });
      }
    }
    Object.defineProperty(O, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: 5710,
    });
    class T extends d {
      constructor(e) {
        super(e, {
          code: T.code,
          name: "DuplicateIdError",
          shortMessage: "There is already a bundle submitted with this ID.",
        });
      }
    }
    Object.defineProperty(T, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: 5720,
    });
    class R extends d {
      constructor(e) {
        super(e, {
          code: R.code,
          name: "UnknownBundleIdError",
          shortMessage: "This bundle id is unknown / has not been submitted",
        });
      }
    }
    Object.defineProperty(R, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: 5730,
    });
    class j extends d {
      constructor(e) {
        super(e, {
          code: j.code,
          name: "BundleTooLargeError",
          shortMessage:
            "The call bundle is too large for the Wallet to process.",
        });
      }
    }
    Object.defineProperty(j, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: 5740,
    });
    class z extends d {
      constructor(e) {
        super(e, {
          code: z.code,
          name: "AtomicReadyWalletRejectedUpgradeError",
          shortMessage:
            "The Wallet can support atomicity after an upgrade, but the user rejected the upgrade.",
        });
      }
    }
    Object.defineProperty(z, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: 5750,
    });
    class F extends d {
      constructor(e) {
        super(e, {
          code: F.code,
          name: "AtomicityNotSupportedError",
          shortMessage:
            "The wallet does not support atomic execution but the request requires it.",
        });
      }
    }
    Object.defineProperty(F, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: 5760,
    });
    class C extends d {
      constructor(e) {
        super(e, {
          code: C.code,
          name: "WalletConnectSessionSettlementError",
          shortMessage: "WalletConnect session settlement failed.",
        });
      }
    }
    Object.defineProperty(C, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: 7e3,
    });
    class N extends u {
      constructor(e) {
        super(e, {
          name: "UnknownRpcError",
          shortMessage: "An unknown RPC error occurred.",
        });
      }
    }
    e.s(
      [
        "AtomicReadyWalletRejectedUpgradeError",
        () => z,
        "AtomicityNotSupportedError",
        () => F,
        "BundleTooLargeError",
        () => j,
        "ChainDisconnectedError",
        () => M,
        "DuplicateIdError",
        () => T,
        "InternalRpcError",
        () => y,
        "InvalidInputRpcError",
        () => m,
        "InvalidParamsRpcError",
        () => p,
        "InvalidRequestRpcError",
        () => l,
        "JsonRpcVersionUnsupportedError",
        () => x,
        "LimitExceededRpcError",
        () => E,
        "MethodNotFoundRpcError",
        () => b,
        "MethodNotSupportedRpcError",
        () => w,
        "ParseRpcError",
        () => f,
        "ProviderDisconnectedError",
        () => B,
        "ResourceNotFoundRpcError",
        () => h,
        "ResourceUnavailableRpcError",
        () => g,
        "SwitchChainError",
        () => I,
        "TransactionRejectedRpcError",
        () => v,
        "UnauthorizedProviderError",
        () => $,
        "UnknownBundleIdError",
        () => R,
        "UnknownRpcError",
        () => N,
        "UnsupportedChainIdError",
        () => O,
        "UnsupportedNonOptionalCapabilityError",
        () => S,
        "UnsupportedProviderMethodError",
        () => P,
        "UserRejectedRequestError",
        () => A,
        "WalletConnectSessionSettlementError",
        () => C,
      ],
      383856
    );
  },
  251701,
  235036,
  146150,
  459258,
  304118,
  45831,
  48084,
  844328,
  334019,
  234814,
  578416,
  (e) => {
    "use strict";
    var t = e.i(655330);
    let r = /^error (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*)\((?<parameters>.*?)\)$/;
    function n(e) {
      return r.test(e);
    }
    function a(e) {
      return (0, t.execTyped)(r, e);
    }
    let o = /^event (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*)\((?<parameters>.*?)\)$/;
    function i(e) {
      return o.test(e);
    }
    function s(e) {
      return (0, t.execTyped)(o, e);
    }
    let c =
      /^function (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*)\((?<parameters>.*?)\)(?: (?<scope>external|public{1}))?(?: (?<stateMutability>pure|view|nonpayable|payable{1}))?(?: returns\s?\((?<returns>.*?)\))?$/;
    function u(e) {
      return c.test(e);
    }
    function d(e) {
      return (0, t.execTyped)(c, e);
    }
    let f = /^struct (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*) \{(?<properties>.*?)\}$/;
    function l(e) {
      return f.test(e);
    }
    function b(e) {
      return (0, t.execTyped)(f, e);
    }
    let p =
      /^constructor\((?<parameters>.*?)\)(?:\s(?<stateMutability>payable{1}))?$/;
    function y(e) {
      return p.test(e);
    }
    function m(e) {
      return (0, t.execTyped)(p, e);
    }
    let h = /^fallback\(\) external(?:\s(?<stateMutability>payable{1}))?$/;
    function g(e) {
      return h.test(e);
    }
    function v(e) {
      return (0, t.execTyped)(h, e);
    }
    let w = /^receive\(\) external payable$/;
    function E(e) {
      return w.test(e);
    }
    let x = new Set(["memory", "indexed", "storage", "calldata"]),
      A = new Set(["indexed"]),
      $ = new Set(["calldata", "memory", "storage"]);
    e.s(
      [
        "eventModifiers",
        0,
        A,
        "execConstructorSignature",
        () => m,
        "execErrorSignature",
        () => a,
        "execEventSignature",
        () => s,
        "execFallbackSignature",
        () => v,
        "execFunctionSignature",
        () => d,
        "execStructSignature",
        () => b,
        "functionModifiers",
        0,
        $,
        "isConstructorSignature",
        () => y,
        "isErrorSignature",
        () => n,
        "isEventSignature",
        () => i,
        "isFallbackSignature",
        () => g,
        "isFunctionSignature",
        () => u,
        "isReceiveSignature",
        () => E,
        "isStructSignature",
        () => l,
        "modifiers",
        0,
        x,
      ],
      235036
    );
    class P extends Error {
      constructor(e, t = {}) {
        const r =
            t.cause instanceof P
              ? t.cause.details
              : t.cause?.message
              ? t.cause.message
              : t.details,
          n = (t.cause instanceof P && t.cause.docsPath) || t.docsPath;
        super(
          [
            e || "An error occurred.",
            "",
            ...(t.metaMessages ? [...t.metaMessages, ""] : []),
            ...(n ? [`Docs: https://abitype.dev${n}`] : []),
            ...(r ? [`Details: ${r}`] : []),
            "Version: abitype@1.2.3",
          ].join("\n")
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
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "AbiTypeError",
          }),
          t.cause && (this.cause = t.cause),
          (this.details = r),
          (this.docsPath = n),
          (this.metaMessages = t.metaMessages),
          (this.shortMessage = e);
      }
    }
    class B extends P {
      constructor({ signature: e }) {
        super("Failed to parse ABI item.", {
          details: `parseAbiItem(${JSON.stringify(e, null, 2)})`,
          docsPath: "/api/human#parseabiitem-1",
        }),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "InvalidAbiItemError",
          });
      }
    }
    class M extends P {
      constructor({ type: e }) {
        super("Unknown type.", {
          metaMessages: [
            `Type "${e}" is not a valid ABI type. Perhaps you forgot to include a struct signature?`,
          ],
        }),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "UnknownTypeError",
          });
      }
    }
    class I extends P {
      constructor({ type: e }) {
        super("Unknown type.", {
          metaMessages: [`Type "${e}" is not a valid ABI type.`],
        }),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "UnknownSolidityTypeError",
          });
      }
    }
    e.s(
      [
        "InvalidAbiItemError",
        () => B,
        "UnknownSolidityTypeError",
        () => I,
        "UnknownTypeError",
        () => M,
      ],
      146150
    );
    class S extends P {
      constructor({ params: e }) {
        super("Failed to parse ABI parameters.", {
          details: `parseAbiParameters(${JSON.stringify(e, null, 2)})`,
          docsPath: "/api/human#parseabiparameters-1",
        }),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "InvalidAbiParametersError",
          });
      }
    }
    class O extends P {
      constructor({ param: e }) {
        super("Invalid ABI parameter.", { details: e }),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "InvalidParameterError",
          });
      }
    }
    class T extends P {
      constructor({ param: e, name: t }) {
        super("Invalid ABI parameter.", {
          details: e,
          metaMessages: [
            `"${t}" is a protected Solidity keyword. More info: https://docs.soliditylang.org/en/latest/cheatsheet.html`,
          ],
        }),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "SolidityProtectedKeywordError",
          });
      }
    }
    class R extends P {
      constructor({ param: e, type: t, modifier: r }) {
        super("Invalid ABI parameter.", {
          details: e,
          metaMessages: [
            `Modifier "${r}" not allowed${t ? ` in "${t}" type` : ""}.`,
          ],
        }),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "InvalidModifierError",
          });
      }
    }
    class j extends P {
      constructor({ param: e, type: t, modifier: r }) {
        super("Invalid ABI parameter.", {
          details: e,
          metaMessages: [
            `Modifier "${r}" not allowed${t ? ` in "${t}" type` : ""}.`,
            `Data location can only be specified for array, struct, or mapping types, but "${r}" was given.`,
          ],
        }),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "InvalidFunctionModifierError",
          });
      }
    }
    class z extends P {
      constructor({ abiParameter: e }) {
        super("Invalid ABI parameter.", {
          details: JSON.stringify(e, null, 2),
          metaMessages: ["ABI parameter type is invalid."],
        }),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "InvalidAbiTypeParameterError",
          });
      }
    }
    e.s(
      [
        "InvalidAbiParametersError",
        () => S,
        "InvalidAbiTypeParameterError",
        () => z,
        "InvalidFunctionModifierError",
        () => j,
        "InvalidModifierError",
        () => R,
        "InvalidParameterError",
        () => O,
        "SolidityProtectedKeywordError",
        () => T,
      ],
      459258
    );
    class F extends P {
      constructor({ signature: e, type: t }) {
        super(`Invalid ${t} signature.`, { details: e }),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "InvalidSignatureError",
          });
      }
    }
    class C extends P {
      constructor({ signature: e }) {
        super("Unknown signature.", { details: e }),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "UnknownSignatureError",
          });
      }
    }
    class N extends P {
      constructor({ signature: e }) {
        super("Invalid struct signature.", {
          details: e,
          metaMessages: ["No properties exist."],
        }),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "InvalidStructSignatureError",
          });
      }
    }
    class k extends P {
      constructor({ type: e }) {
        super("Circular reference detected.", {
          metaMessages: [`Struct "${e}" is a circular reference.`],
        }),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "CircularReferenceError",
          });
      }
    }
    class D extends P {
      constructor({ current: e, depth: t }) {
        super("Unbalanced parentheses.", {
          metaMessages: [
            `"${e.trim()}" has too many ${
              t > 0 ? "opening" : "closing"
            } parentheses.`,
          ],
          details: `Depth "${t}"`,
        }),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "InvalidParenthesisError",
          });
      }
    }
    let H = new Map([
      ["address", { type: "address" }],
      ["bool", { type: "bool" }],
      ["bytes", { type: "bytes" }],
      ["bytes32", { type: "bytes32" }],
      ["int", { type: "int256" }],
      ["int256", { type: "int256" }],
      ["string", { type: "string" }],
      ["uint", { type: "uint256" }],
      ["uint8", { type: "uint8" }],
      ["uint16", { type: "uint16" }],
      ["uint24", { type: "uint24" }],
      ["uint32", { type: "uint32" }],
      ["uint64", { type: "uint64" }],
      ["uint96", { type: "uint96" }],
      ["uint112", { type: "uint112" }],
      ["uint160", { type: "uint160" }],
      ["uint192", { type: "uint192" }],
      ["uint256", { type: "uint256" }],
      ["address owner", { type: "address", name: "owner" }],
      ["address to", { type: "address", name: "to" }],
      ["bool approved", { type: "bool", name: "approved" }],
      ["bytes _data", { type: "bytes", name: "_data" }],
      ["bytes data", { type: "bytes", name: "data" }],
      ["bytes signature", { type: "bytes", name: "signature" }],
      ["bytes32 hash", { type: "bytes32", name: "hash" }],
      ["bytes32 r", { type: "bytes32", name: "r" }],
      ["bytes32 root", { type: "bytes32", name: "root" }],
      ["bytes32 s", { type: "bytes32", name: "s" }],
      ["string name", { type: "string", name: "name" }],
      ["string symbol", { type: "string", name: "symbol" }],
      ["string tokenURI", { type: "string", name: "tokenURI" }],
      ["uint tokenId", { type: "uint256", name: "tokenId" }],
      ["uint8 v", { type: "uint8", name: "v" }],
      ["uint256 balance", { type: "uint256", name: "balance" }],
      ["uint256 tokenId", { type: "uint256", name: "tokenId" }],
      ["uint256 value", { type: "uint256", name: "value" }],
      [
        "event:address indexed from",
        { type: "address", name: "from", indexed: !0 },
      ],
      [
        "event:address indexed to",
        { type: "address", name: "to", indexed: !0 },
      ],
      [
        "event:uint indexed tokenId",
        { type: "uint256", name: "tokenId", indexed: !0 },
      ],
      [
        "event:uint256 indexed tokenId",
        { type: "uint256", name: "tokenId", indexed: !0 },
      ],
    ]);
    function U(e, t = {}) {
      if (u(e))
        return (function (e, t = {}) {
          let r = d(e);
          if (!r) throw new F({ signature: e, type: "function" });
          let n = W(r.parameters),
            a = [],
            o = n.length;
          for (let e = 0; e < o; e++)
            a.push(G(n[e], { modifiers: $, structs: t, type: "function" }));
          let i = [];
          if (r.returns) {
            let e = W(r.returns),
              n = e.length;
            for (let r = 0; r < n; r++)
              i.push(G(e[r], { modifiers: $, structs: t, type: "function" }));
          }
          return {
            name: r.name,
            type: "function",
            stateMutability: r.stateMutability ?? "nonpayable",
            inputs: a,
            outputs: i,
          };
        })(e, t);
      if (i(e))
        return (function (e, t = {}) {
          let r = s(e);
          if (!r) throw new F({ signature: e, type: "event" });
          let n = W(r.parameters),
            a = [],
            o = n.length;
          for (let e = 0; e < o; e++)
            a.push(G(n[e], { modifiers: A, structs: t, type: "event" }));
          return { name: r.name, type: "event", inputs: a };
        })(e, t);
      if (n(e))
        return (function (e, t = {}) {
          let r = a(e);
          if (!r) throw new F({ signature: e, type: "error" });
          let n = W(r.parameters),
            o = [],
            i = n.length;
          for (let e = 0; e < i; e++)
            o.push(G(n[e], { structs: t, type: "error" }));
          return { name: r.name, type: "error", inputs: o };
        })(e, t);
      if (y(e))
        return (function (e, t = {}) {
          let r = m(e);
          if (!r) throw new F({ signature: e, type: "constructor" });
          let n = W(r.parameters),
            a = [],
            o = n.length;
          for (let e = 0; e < o; e++)
            a.push(G(n[e], { structs: t, type: "constructor" }));
          return {
            type: "constructor",
            stateMutability: r.stateMutability ?? "nonpayable",
            inputs: a,
          };
        })(e, t);
      if (g(e)) {
        var r = e;
        let t = v(r);
        if (!t) throw new F({ signature: r, type: "fallback" });
        return {
          type: "fallback",
          stateMutability: t.stateMutability ?? "nonpayable",
        };
      }
      if (E(e)) return { type: "receive", stateMutability: "payable" };
      throw new C({ signature: e });
    }
    let L =
        /^(?<type>[a-zA-Z$_][a-zA-Z0-9$_]*(?:\spayable)?)(?<array>(?:\[\d*?\])+?)?(?:\s(?<modifier>calldata|indexed|memory|storage{1}))?(?:\s(?<name>[a-zA-Z$_][a-zA-Z0-9$_]*))?$/,
      q =
        /^\((?<type>.+?)\)(?<array>(?:\[\d*?\])+?)?(?:\s(?<modifier>calldata|indexed|memory|storage{1}))?(?:\s(?<name>[a-zA-Z$_][a-zA-Z0-9$_]*))?$/,
      _ = /^u?int$/;
    function G(e, r) {
      var n, a;
      let o,
        i = (function (e, t, r) {
          let n = "";
          if (r)
            for (let e of Object.entries(r)) {
              if (!e) continue;
              let t = "";
              for (let r of e[1])
                t += `[${r.type}${r.name ? `:${r.name}` : ""}]`;
              n += `(${e[0]}{${t}})`;
            }
          return t ? `${t}:${e}${n}` : `${e}${n}`;
        })(e, r?.type, r?.structs);
      if (H.has(i)) return H.get(i);
      let s = t.isTupleRegex.test(e),
        c = (0, t.execTyped)(s ? q : L, e);
      if (!c) throw new O({ param: e });
      if (
        c.name &&
        ("address" === (n = c.name) ||
          "bool" === n ||
          "function" === n ||
          "string" === n ||
          "tuple" === n ||
          t.bytesRegex.test(n) ||
          t.integerRegex.test(n) ||
          Z.test(n))
      )
        throw new T({ param: e, name: c.name });
      let u = c.name ? { name: c.name } : {},
        d = "indexed" === c.modifier ? { indexed: !0 } : {},
        f = r?.structs ?? {},
        l = {};
      if (s) {
        o = "tuple";
        let e = W(c.type),
          t = [],
          r = e.length;
        for (let n = 0; n < r; n++) t.push(G(e[n], { structs: f }));
        l = { components: t };
      } else if (c.type in f) (o = "tuple"), (l = { components: f[c.type] });
      else if (_.test(c.type)) o = `${c.type}256`;
      else if ("address payable" === c.type) o = "address";
      else if (((o = c.type), r?.type !== "struct" && !V(o)))
        throw new I({ type: o });
      if (c.modifier) {
        if (!r?.modifiers?.has?.(c.modifier))
          throw new R({ param: e, type: r?.type, modifier: c.modifier });
        if (
          $.has(c.modifier) &&
          ((a = o),
          !c.array && "bytes" !== a && "string" !== a && "tuple" !== a)
        )
          throw new j({ param: e, type: r?.type, modifier: c.modifier });
      }
      let b = { type: `${o}${c.array ?? ""}`, ...u, ...d, ...l };
      return H.set(i, b), b;
    }
    function W(e, t = [], r = "", n = 0) {
      let a = e.trim().length;
      for (let o = 0; o < a; o++) {
        let a = e[o],
          i = e.slice(o + 1);
        switch (a) {
          case ",":
            return 0 === n ? W(i, [...t, r.trim()]) : W(i, t, `${r}${a}`, n);
          case "(":
            return W(i, t, `${r}${a}`, n + 1);
          case ")":
            return W(i, t, `${r}${a}`, n - 1);
          default:
            return W(i, t, `${r}${a}`, n);
        }
      }
      if ("" === r) return t;
      if (0 !== n) throw new D({ current: r, depth: n });
      return t.push(r.trim()), t;
    }
    function V(e) {
      return (
        "address" === e ||
        "bool" === e ||
        "function" === e ||
        "string" === e ||
        t.bytesRegex.test(e) ||
        t.integerRegex.test(e)
      );
    }
    let Z =
      /^(?:after|alias|anonymous|apply|auto|byte|calldata|case|catch|constant|copyof|default|defined|error|event|external|false|final|function|immutable|implements|in|indexed|inline|internal|let|mapping|match|memory|mutable|null|of|override|partial|private|promise|public|pure|reference|relocatable|return|returns|sizeof|static|storage|struct|super|supports|switch|this|true|try|typedef|typeof|var|view|virtual)$/;
    function J(e) {
      let r = {},
        n = e.length;
      for (let t = 0; t < n; t++) {
        let n = e[t];
        if (!l(n)) continue;
        let a = b(n);
        if (!a) throw new F({ signature: n, type: "struct" });
        let o = a.properties.split(";"),
          i = [],
          s = o.length;
        for (let e = 0; e < s; e++) {
          let t = o[e].trim();
          if (!t) continue;
          let r = G(t, { type: "struct" });
          i.push(r);
        }
        if (!i.length) throw new N({ signature: n });
        r[a.name] = i;
      }
      let a = {},
        o = Object.entries(r),
        i = o.length;
      for (let e = 0; e < i; e++) {
        let [n, i] = o[e];
        a[n] = (function e(r = [], n = {}, a = new Set()) {
          let o = [],
            i = r.length;
          for (let s = 0; s < i; s++) {
            let i = r[s];
            if (t.isTupleRegex.test(i.type)) o.push(i);
            else {
              let r = (0, t.execTyped)(Y, i.type);
              if (!r?.type) throw new z({ abiParameter: i });
              let { array: s, type: c } = r;
              if (c in n) {
                if (a.has(c)) throw new k({ type: c });
                o.push({
                  ...i,
                  type: `tuple${s ?? ""}`,
                  components: e(n[c], n, new Set([...a, c])),
                });
              } else if (V(c)) o.push(i);
              else throw new M({ type: c });
            }
          }
          return o;
        })(i, r);
      }
      return a;
    }
    e.s(
      [
        "isSolidityType",
        () => V,
        "parseAbiParameter",
        () => G,
        "parseSignature",
        () => U,
        "splitParameters",
        () => W,
      ],
      304118
    );
    let Y = /^(?<type>[a-zA-Z$_][a-zA-Z0-9$_]*)(?<array>(?:\[\d*?\])+?)?$/;
    function K(e) {
      let t = J(e),
        r = [],
        n = e.length;
      for (let a = 0; a < n; a++) {
        let n = e[a];
        l(n) || r.push(U(n, t));
      }
      return r;
    }
    e.s(["parseStructs", () => J], 45831),
      e.s(["parseAbi", () => K], 251701),
      e.s(
        [
          "IntegerOutOfRangeError",
          () => eU,
          "InvalidLengthError",
          () => e_,
          "SizeExceedsPaddingSizeError",
          () => eV,
          "SizeOverflowError",
          () => eG,
          "SliceOffsetOutOfBoundsError",
          () => eW,
          "concat",
          () => eM,
          "from",
          () => eI,
          "fromBoolean",
          () => eS,
          "fromBytes",
          () => eO,
          "fromNumber",
          () => eT,
          "fromString",
          () => eR,
          "padLeft",
          () => ej,
          "padRight",
          () => ez,
          "size",
          () => eC,
          "slice",
          () => eF,
          "toBigInt",
          () => ek,
          "toNumber",
          () => eD,
          "trimLeft",
          () => eN,
          "validate",
          () => eH,
        ],
        234814
      ),
      e.i(537792),
      e.s(
        [
          "SizeExceedsPaddingSizeError",
          () => e$,
          "SizeOverflowError",
          () => ex,
          "SliceOffsetOutOfBoundsError",
          () => eA,
          "from",
          () => es,
          "fromHex",
          () => ec,
          "fromString",
          () => eu,
          "random",
          () => ed,
          "size",
          () => ef,
          "slice",
          () => el,
          "toBigInt",
          () => eb,
          "toBoolean",
          () => ep,
          "toNumber",
          () => ey,
          "toString",
          () => em,
          "trimLeft",
          () => eh,
          "trimRight",
          () => eg,
          "validate",
          () => ev,
        ],
        334019
      );
    class X extends Error {
      static setStaticOptions(e) {
        (X.prototype.docsOrigin = e.docsOrigin),
          (X.prototype.showVersion = e.showVersion),
          (X.prototype.version = e.version);
      }
      constructor(e, t = {}) {
        const r = (() => {
            if (t.cause instanceof X) {
              if (t.cause.details) return t.cause.details;
              if (t.cause.shortMessage) return t.cause.shortMessage;
            }
            return t.cause &&
              "details" in t.cause &&
              "string" == typeof t.cause.details
              ? t.cause.details
              : t.cause?.message
              ? t.cause.message
              : t.details;
          })(),
          n = (t.cause instanceof X && t.cause.docsPath) || t.docsPath,
          a = t.docsOrigin ?? X.prototype.docsOrigin,
          o = `${a}${n ?? ""}`,
          i = !!(t.version ?? X.prototype.showVersion),
          s = t.version ?? X.prototype.version;
        super(
          [
            e || "An error occurred.",
            ...(t.metaMessages ? ["", ...t.metaMessages] : []),
            ...(r || n || i
              ? [
                  "",
                  r ? `Details: ${r}` : void 0,
                  n ? `See: ${o}` : void 0,
                  i ? `Version: ${s}` : void 0,
                ]
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
          Object.defineProperty(this, "docsOrigin", {
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
          Object.defineProperty(this, "showVersion", {
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
          (this.cause = t.cause),
          (this.details = r),
          (this.docs = o),
          (this.docsOrigin = a),
          (this.docsPath = n),
          (this.shortMessage = e),
          (this.showVersion = i),
          (this.version = s);
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
    function Q(e, t) {
      if (ef(e) > t) throw new ex({ givenSize: ef(e), maxSize: t });
    }
    Object.defineProperty(X, "defaultStaticOptions", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: {
        docsOrigin: "https://oxlib.sh",
        showVersion: !1,
        version: "ox@0.1.1",
      },
    }),
      X.setStaticOptions(X.defaultStaticOptions),
      e.s(["BaseError", () => X], 48084);
    function ee(e) {
      return e >= 48 && e <= 57
        ? e - 48
        : e >= 65 && e <= 70
        ? e - 55
        : e >= 97 && e <= 102
        ? e - 87
        : void 0;
    }
    function et(e, t = {}) {
      let { dir: r = "left" } = t,
        n = e,
        a = 0;
      for (let e = 0; e < n.length - 1; e++)
        if ("0" === n["left" === r ? e : n.length - e - 1].toString()) a++;
        else break;
      return "left" === r ? n.slice(a) : n.slice(0, n.length - a);
    }
    function er(e, t) {
      if (eC(e) > t) throw new eG({ givenSize: eC(e), maxSize: t });
    }
    function en(e, t = {}) {
      let { dir: r, size: n = 32 } = t;
      if (0 === n) return e;
      let a = e.replace("0x", "");
      if (a.length > 2 * n)
        throw new eV({
          size: Math.ceil(a.length / 2),
          targetSize: n,
          type: "Hex",
        });
      return `0x${a["right" === r ? "padEnd" : "padStart"](2 * n, "0")}`;
    }
    function ea(e, t, r) {
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
    e.s(["stringify", () => ea], 844328);
    let eo = new TextDecoder(),
      ei = new TextEncoder();
    function es(e) {
      var t;
      return e instanceof Uint8Array
        ? e
        : "string" == typeof e
        ? ec(e)
        : (t = e) instanceof Uint8Array
        ? t
        : new Uint8Array(t);
    }
    function ec(e, t = {}) {
      let { size: r } = t,
        n = e;
      r && (er(e, r), (n = ez(e, r)));
      let a = n.slice(2);
      a.length % 2 && (a = `0${a}`);
      let o = a.length / 2,
        i = new Uint8Array(o);
      for (let e = 0, t = 0; e < o; e++) {
        let r = ee(a.charCodeAt(t++)),
          n = ee(a.charCodeAt(t++));
        if (void 0 === r || void 0 === n)
          throw new X(
            `Invalid byte sequence ("${a[t - 2]}${a[t - 1]}" in "${a}").`
          );
        i[e] = (r << 4) | n;
      }
      return i;
    }
    function eu(e, t = {}) {
      let { size: r } = t,
        n = ei.encode(e);
      return "number" == typeof r
        ? (Q(n, r),
          (function (e, t = {}) {
            let { dir: r, size: n = 32 } = t;
            if (0 === n) return e;
            if (e.length > n)
              throw new e$({ size: e.length, targetSize: n, type: "Bytes" });
            let a = new Uint8Array(n);
            for (let t = 0; t < n; t++) {
              let o = "right" === r;
              a[o ? t : n - t - 1] = e[o ? t : e.length - t - 1];
            }
            return a;
          })(n, { dir: "right", size: r }))
        : n;
    }
    function ed(e) {
      return crypto.getRandomValues(new Uint8Array(e));
    }
    function ef(e) {
      return e.length;
    }
    function el(e, t, r, n = {}) {
      let { strict: a } = n;
      if ("number" == typeof t && t > 0 && t > ef(e) - 1)
        throw new eA({ offset: t, position: "start", size: ef(e) });
      let o = e.slice(t, r);
      return (
        a &&
          (function (e, t, r) {
            if ("number" == typeof t && "number" == typeof r && ef(e) !== r - t)
              throw new eA({ offset: r, position: "end", size: ef(e) });
          })(o, t, r),
        o
      );
    }
    function eb(e, t = {}) {
      let { size: r } = t;
      return void 0 !== r && Q(e, r), ek(eO(e, t), t);
    }
    function ep(e, t = {}) {
      let { size: r } = t,
        n = e;
      if ((void 0 !== r && (Q(n, r), (n = eh(n))), n.length > 1 || n[0] > 1))
        throw new ew(n);
      return !!n[0];
    }
    function ey(e, t = {}) {
      let { size: r } = t;
      return void 0 !== r && Q(e, r), eD(eO(e, t), t);
    }
    function em(e, t = {}) {
      let { size: r } = t,
        n = e;
      return void 0 !== r && (Q(n, r), (n = eg(n))), eo.decode(n);
    }
    function eh(e) {
      return et(e, { dir: "left" });
    }
    function eg(e) {
      return et(e, { dir: "right" });
    }
    function ev(e) {
      try {
        if (
          !(e instanceof Uint8Array) &&
          (!e ||
            "object" != typeof e ||
            !("BYTES_PER_ELEMENT" in e) ||
            1 !== e.BYTES_PER_ELEMENT ||
            "Uint8Array" !== e.constructor.name)
        )
          throw new eE(e);
        return !0;
      } catch {
        return !1;
      }
    }
    class ew extends X {
      constructor(e) {
        super(`Bytes value \`${e}\` is not a valid boolean.`, {
          metaMessages: [
            "The bytes array must contain a single byte of either a `0` or `1` value.",
          ],
        }),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Bytes.InvalidBytesBooleanError",
          });
      }
    }
    class eE extends X {
      constructor(e) {
        super(
          `Value \`${
            "object" == typeof e ? ea(e) : e
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
    class ex extends X {
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
    class eA extends X {
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
    class e$ extends X {
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
    let eP = new TextEncoder(),
      eB = Array.from({ length: 256 }, (e, t) =>
        t.toString(16).padStart(2, "0")
      );
    function eM(...e) {
      return `0x${e.reduce((e, t) => e + t.replace("0x", ""), "")}`;
    }
    function eI(e) {
      return e instanceof Uint8Array
        ? eO(e)
        : Array.isArray(e)
        ? eO(new Uint8Array(e))
        : e;
    }
    function eS(e, t = {}) {
      let r = `0x${Number(e)}`;
      return "number" == typeof t.size ? (er(r, t.size), ej(r, t.size)) : r;
    }
    function eO(e, t = {}) {
      let r = "";
      for (let t = 0; t < e.length; t++) r += eB[e[t]];
      let n = `0x${r}`;
      return "number" == typeof t.size ? (er(n, t.size), ez(n, t.size)) : n;
    }
    function eT(e, t = {}) {
      let r,
        { signed: n, size: a } = t,
        o = BigInt(e);
      a
        ? (r = n
            ? (1n << (8n * BigInt(a) - 1n)) - 1n
            : 2n ** (8n * BigInt(a)) - 1n)
        : "number" == typeof e && (r = BigInt(Number.MAX_SAFE_INTEGER));
      let i = "bigint" == typeof r && n ? -r - 1n : 0;
      if ((r && o > r) || o < i) {
        let t = "bigint" == typeof e ? "n" : "";
        throw new eU({
          max: r ? `${r}${t}` : void 0,
          min: `${i}${t}`,
          signed: n,
          size: a,
          value: `${e}${t}`,
        });
      }
      let s = (n && o < 0 ? BigInt.asUintN(8 * a, BigInt(o)) : o).toString(16),
        c = `0x${s}`;
      return a ? ej(c, a) : c;
    }
    function eR(e, t = {}) {
      return eO(eP.encode(e), t);
    }
    function ej(e, t) {
      return en(e, { dir: "left", size: t });
    }
    function ez(e, t) {
      return en(e, { dir: "right", size: t });
    }
    function eF(e, t, r, n = {}) {
      let { strict: a } = n;
      if ("number" == typeof t && t > 0 && t > eC(e) - 1)
        throw new eW({ offset: t, position: "start", size: eC(e) });
      let o = `0x${e
        .replace("0x", "")
        .slice((t ?? 0) * 2, (r ?? e.length) * 2)}`;
      return (
        a &&
          (function (e, t, r) {
            if ("number" == typeof t && "number" == typeof r && eC(e) !== r - t)
              throw new eW({ offset: r, position: "end", size: eC(e) });
          })(o, t, r),
        o
      );
    }
    function eC(e) {
      return Math.ceil((e.length - 2) / 2);
    }
    function eN(e) {
      return (function (e, t = {}) {
        let { dir: r = "left" } = t,
          n = e.replace("0x", ""),
          a = 0;
        for (let e = 0; e < n.length - 1; e++)
          if ("0" === n["left" === r ? e : n.length - e - 1].toString()) a++;
          else break;
        return "0" ===
          (n = "left" === r ? n.slice(a) : n.slice(0, n.length - a))
          ? "0x"
          : "right" === r && n.length % 2 == 1
          ? `0x${n}0`
          : `0x${n}`;
      })(e, { dir: "left" });
    }
    function ek(e, t = {}) {
      let { signed: r } = t;
      t.size && er(e, t.size);
      let n = BigInt(e);
      if (!r) return n;
      let a = (1n << (8n * BigInt((e.length - 2) / 2))) - 1n;
      return n <= a >> 1n ? n : n - a - 1n;
    }
    function eD(e, t = {}) {
      let { signed: r, size: n } = t;
      return r || n ? Number(ek(e, t)) : Number(e);
    }
    function eH(e, t = {}) {
      let { strict: r = !1 } = t;
      try {
        return (
          !(function (e, t = {}) {
            let { strict: r = !1 } = t;
            if (!e || "string" != typeof e) throw new eL(e);
            if ((r && !/^0x[0-9a-fA-F]*$/.test(e)) || !e.startsWith("0x"))
              throw new eq(e);
          })(e, { strict: r }),
          !0
        );
      } catch {
        return !1;
      }
    }
    class eU extends X {
      constructor({ max: e, min: t, signed: r, size: n, value: a }) {
        super(
          `Number \`${a}\` is not in safe${n ? ` ${8 * n}-bit` : ""}${
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
    class eL extends X {
      constructor(e) {
        super(
          `Value \`${
            "object" == typeof e ? ea(e) : e
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
    class eq extends X {
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
    class e_ extends X {
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
    class eG extends X {
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
    class eW extends X {
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
    class eV extends X {
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
    function eZ(e) {
      return {
        address: e.address,
        amount: eT(e.amount),
        index: eT(e.index),
        validatorIndex: eT(e.validatorIndex),
      };
    }
    function eJ(e) {
      return {
        ...("bigint" == typeof e.baseFeePerGas && {
          baseFeePerGas: eT(e.baseFeePerGas),
        }),
        ...("bigint" == typeof e.blobBaseFee && {
          blobBaseFee: eT(e.blobBaseFee),
        }),
        ...("string" == typeof e.feeRecipient && {
          feeRecipient: e.feeRecipient,
        }),
        ...("bigint" == typeof e.gasLimit && { gasLimit: eT(e.gasLimit) }),
        ...("bigint" == typeof e.number && { number: eT(e.number) }),
        ...("bigint" == typeof e.prevRandao && {
          prevRandao: eT(e.prevRandao),
        }),
        ...("bigint" == typeof e.time && { time: eT(e.time) }),
        ...(e.withdrawals && { withdrawals: e.withdrawals.map(eZ) }),
      };
    }
    e.s(["toRpc", () => eJ], 578416);
  },
  752012,
  (e) => {
    "use strict";
    let t = [
        {
          inputs: [
            {
              components: [
                { name: "target", type: "address" },
                { name: "allowFailure", type: "bool" },
                { name: "callData", type: "bytes" },
              ],
              name: "calls",
              type: "tuple[]",
            },
          ],
          name: "aggregate3",
          outputs: [
            {
              components: [
                { name: "success", type: "bool" },
                { name: "returnData", type: "bytes" },
              ],
              name: "returnData",
              type: "tuple[]",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [{ name: "addr", type: "address" }],
          name: "getEthBalance",
          outputs: [{ name: "balance", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "getCurrentBlockTimestamp",
          outputs: [
            { internalType: "uint256", name: "timestamp", type: "uint256" },
          ],
          stateMutability: "view",
          type: "function",
        },
      ],
      r = [
        {
          name: "query",
          type: "function",
          stateMutability: "view",
          inputs: [
            {
              type: "tuple[]",
              name: "queries",
              components: [
                { type: "address", name: "sender" },
                { type: "string[]", name: "urls" },
                { type: "bytes", name: "data" },
              ],
            },
          ],
          outputs: [
            { type: "bool[]", name: "failures" },
            { type: "bytes[]", name: "responses" },
          ],
        },
        {
          name: "HttpError",
          type: "error",
          inputs: [
            { type: "uint16", name: "status" },
            { type: "string", name: "message" },
          ],
        },
      ],
      n = [
        {
          inputs: [{ name: "dns", type: "bytes" }],
          name: "DNSDecodingFailed",
          type: "error",
        },
        {
          inputs: [{ name: "ens", type: "string" }],
          name: "DNSEncodingFailed",
          type: "error",
        },
        { inputs: [], name: "EmptyAddress", type: "error" },
        {
          inputs: [
            { name: "status", type: "uint16" },
            { name: "message", type: "string" },
          ],
          name: "HttpError",
          type: "error",
        },
        { inputs: [], name: "InvalidBatchGatewayResponse", type: "error" },
        {
          inputs: [{ name: "errorData", type: "bytes" }],
          name: "ResolverError",
          type: "error",
        },
        {
          inputs: [
            { name: "name", type: "bytes" },
            { name: "resolver", type: "address" },
          ],
          name: "ResolverNotContract",
          type: "error",
        },
        {
          inputs: [{ name: "name", type: "bytes" }],
          name: "ResolverNotFound",
          type: "error",
        },
        {
          inputs: [
            { name: "primary", type: "string" },
            { name: "primaryAddress", type: "bytes" },
          ],
          name: "ReverseAddressMismatch",
          type: "error",
        },
        {
          inputs: [
            { internalType: "bytes4", name: "selector", type: "bytes4" },
          ],
          name: "UnsupportedResolverProfile",
          type: "error",
        },
      ],
      a = [
        ...n,
        {
          name: "resolveWithGateways",
          type: "function",
          stateMutability: "view",
          inputs: [
            { name: "name", type: "bytes" },
            { name: "data", type: "bytes" },
            { name: "gateways", type: "string[]" },
          ],
          outputs: [
            { name: "", type: "bytes" },
            { name: "address", type: "address" },
          ],
        },
      ],
      o = [
        ...n,
        {
          name: "reverseWithGateways",
          type: "function",
          stateMutability: "view",
          inputs: [
            { type: "bytes", name: "reverseName" },
            { type: "uint256", name: "coinType" },
            { type: "string[]", name: "gateways" },
          ],
          outputs: [
            { type: "string", name: "resolvedName" },
            { type: "address", name: "resolver" },
            { type: "address", name: "reverseResolver" },
          ],
        },
      ];
    e.s([
      "addressResolverAbi",
      0,
      [
        {
          name: "addr",
          type: "function",
          stateMutability: "view",
          inputs: [{ name: "name", type: "bytes32" }],
          outputs: [{ name: "", type: "address" }],
        },
        {
          name: "addr",
          type: "function",
          stateMutability: "view",
          inputs: [
            { name: "name", type: "bytes32" },
            { name: "coinType", type: "uint256" },
          ],
          outputs: [{ name: "", type: "bytes" }],
        },
      ],
      "batchGatewayAbi",
      0,
      r,
      "erc1271Abi",
      0,
      [
        {
          name: "isValidSignature",
          type: "function",
          stateMutability: "view",
          inputs: [
            { name: "hash", type: "bytes32" },
            { name: "signature", type: "bytes" },
          ],
          outputs: [{ name: "", type: "bytes4" }],
        },
      ],
      "erc20Abi",
      0,
      [
        {
          type: "event",
          name: "Approval",
          inputs: [
            { indexed: !0, name: "owner", type: "address" },
            { indexed: !0, name: "spender", type: "address" },
            { indexed: !1, name: "value", type: "uint256" },
          ],
        },
        {
          type: "event",
          name: "Transfer",
          inputs: [
            { indexed: !0, name: "from", type: "address" },
            { indexed: !0, name: "to", type: "address" },
            { indexed: !1, name: "value", type: "uint256" },
          ],
        },
        {
          type: "function",
          name: "allowance",
          stateMutability: "view",
          inputs: [
            { name: "owner", type: "address" },
            { name: "spender", type: "address" },
          ],
          outputs: [{ type: "uint256" }],
        },
        {
          type: "function",
          name: "approve",
          stateMutability: "nonpayable",
          inputs: [
            { name: "spender", type: "address" },
            { name: "amount", type: "uint256" },
          ],
          outputs: [{ type: "bool" }],
        },
        {
          type: "function",
          name: "balanceOf",
          stateMutability: "view",
          inputs: [{ name: "account", type: "address" }],
          outputs: [{ type: "uint256" }],
        },
        {
          type: "function",
          name: "decimals",
          stateMutability: "view",
          inputs: [],
          outputs: [{ type: "uint8" }],
        },
        {
          type: "function",
          name: "name",
          stateMutability: "view",
          inputs: [],
          outputs: [{ type: "string" }],
        },
        {
          type: "function",
          name: "symbol",
          stateMutability: "view",
          inputs: [],
          outputs: [{ type: "string" }],
        },
        {
          type: "function",
          name: "totalSupply",
          stateMutability: "view",
          inputs: [],
          outputs: [{ type: "uint256" }],
        },
        {
          type: "function",
          name: "transfer",
          stateMutability: "nonpayable",
          inputs: [
            { name: "recipient", type: "address" },
            { name: "amount", type: "uint256" },
          ],
          outputs: [{ type: "bool" }],
        },
        {
          type: "function",
          name: "transferFrom",
          stateMutability: "nonpayable",
          inputs: [
            { name: "sender", type: "address" },
            { name: "recipient", type: "address" },
            { name: "amount", type: "uint256" },
          ],
          outputs: [{ type: "bool" }],
        },
      ],
      "erc6492SignatureValidatorAbi",
      0,
      [
        {
          inputs: [
            { name: "_signer", type: "address" },
            { name: "_hash", type: "bytes32" },
            { name: "_signature", type: "bytes" },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [
            { name: "_signer", type: "address" },
            { name: "_hash", type: "bytes32" },
            { name: "_signature", type: "bytes" },
          ],
          outputs: [{ type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
          name: "isValidSig",
        },
      ],
      "multicall3Abi",
      0,
      t,
      "textResolverAbi",
      0,
      [
        {
          name: "text",
          type: "function",
          stateMutability: "view",
          inputs: [
            { name: "name", type: "bytes32" },
            { name: "key", type: "string" },
          ],
          outputs: [{ name: "", type: "string" }],
        },
      ],
      "universalResolverResolveAbi",
      0,
      a,
      "universalResolverReverseAbi",
      0,
      o,
    ]);
  },
  904119,
  472503,
  (e) => {
    "use strict";
    e.s(["aggregate3Signature", 0, "0x82ad56cb"], 904119),
      e.s(
        [
          "deploylessCallViaBytecodeBytecode",
          0,
          "0x608060405234801561001057600080fd5b5060405161018e38038061018e83398101604081905261002f91610124565b6000808351602085016000f59050803b61004857600080fd5b6000808351602085016000855af16040513d6000823e81610067573d81fd5b3d81f35b634e487b7160e01b600052604160045260246000fd5b600082601f83011261009257600080fd5b81516001600160401b038111156100ab576100ab61006b565b604051601f8201601f19908116603f011681016001600160401b03811182821017156100d9576100d961006b565b6040528181528382016020018510156100f157600080fd5b60005b82811015610110576020818601810151838301820152016100f4565b506000918101602001919091529392505050565b6000806040838503121561013757600080fd5b82516001600160401b0381111561014d57600080fd5b61015985828601610081565b602085015190935090506001600160401b0381111561017757600080fd5b61018385828601610081565b915050925092905056fe",
          "deploylessCallViaFactoryBytecode",
          0,
          "0x608060405234801561001057600080fd5b506040516102c03803806102c083398101604081905261002f916101e6565b836001600160a01b03163b6000036100e457600080836001600160a01b03168360405161005c9190610270565b6000604051808303816000865af19150503d8060008114610099576040519150601f19603f3d011682016040523d82523d6000602084013e61009e565b606091505b50915091508115806100b857506001600160a01b0386163b155b156100e1578060405163101bb98d60e01b81526004016100d8919061028c565b60405180910390fd5b50505b6000808451602086016000885af16040513d6000823e81610103573d81fd5b3d81f35b80516001600160a01b038116811461011e57600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b60005b8381101561015457818101518382015260200161013c565b50506000910152565b600082601f83011261016e57600080fd5b81516001600160401b0381111561018757610187610123565b604051601f8201601f19908116603f011681016001600160401b03811182821017156101b5576101b5610123565b6040528181528382016020018510156101cd57600080fd5b6101de826020830160208701610139565b949350505050565b600080600080608085870312156101fc57600080fd5b61020585610107565b60208601519094506001600160401b0381111561022157600080fd5b61022d8782880161015d565b93505061023c60408601610107565b60608601519092506001600160401b0381111561025857600080fd5b6102648782880161015d565b91505092959194509250565b60008251610282818460208701610139565b9190910192915050565b60208152600082518060208401526102ab816040850160208701610139565b601f01601f1916919091016040019291505056fe",
          "erc6492SignatureValidatorByteCode",
          0,
          "0x608060405234801561001057600080fd5b5060405161069438038061069483398101604081905261002f9161051e565b600061003c848484610048565b9050806000526001601ff35b60007f64926492649264926492649264926492649264926492649264926492649264926100748361040c565b036101e7576000606080848060200190518101906100929190610577565b60405192955090935091506000906001600160a01b038516906100b69085906105dd565b6000604051808303816000865af19150503d80600081146100f3576040519150601f19603f3d011682016040523d82523d6000602084013e6100f8565b606091505b50509050876001600160a01b03163b60000361016057806101605760405162461bcd60e51b815260206004820152601e60248201527f5369676e617475726556616c696461746f723a206465706c6f796d656e74000060448201526064015b60405180910390fd5b604051630b135d3f60e11b808252906001600160a01b038a1690631626ba7e90610190908b9087906004016105f9565b602060405180830381865afa1580156101ad573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101d19190610633565b6001600160e01b03191614945050505050610405565b6001600160a01b0384163b1561027a57604051630b135d3f60e11b808252906001600160a01b03861690631626ba7e9061022790879087906004016105f9565b602060405180830381865afa158015610244573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102689190610633565b6001600160e01b031916149050610405565b81516041146102df5760405162461bcd60e51b815260206004820152603a602482015260008051602061067483398151915260448201527f3a20696e76616c6964207369676e6174757265206c656e6774680000000000006064820152608401610157565b6102e7610425565b5060208201516040808401518451859392600091859190811061030c5761030c61065d565b016020015160f81c9050601b811480159061032b57508060ff16601c14155b1561038c5760405162461bcd60e51b815260206004820152603b602482015260008051602061067483398151915260448201527f3a20696e76616c6964207369676e617475726520762076616c756500000000006064820152608401610157565b60408051600081526020810180835289905260ff83169181019190915260608101849052608081018390526001600160a01b0389169060019060a0016020604051602081039080840390855afa1580156103ea573d6000803e3d6000fd5b505050602060405103516001600160a01b0316149450505050505b9392505050565b600060208251101561041d57600080fd5b508051015190565b60405180606001604052806003906020820280368337509192915050565b6001600160a01b038116811461045857600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b60005b8381101561048c578181015183820152602001610474565b50506000910152565b600082601f8301126104a657600080fd5b81516001600160401b038111156104bf576104bf61045b565b604051601f8201601f19908116603f011681016001600160401b03811182821017156104ed576104ed61045b565b60405281815283820160200185101561050557600080fd5b610516826020830160208701610471565b949350505050565b60008060006060848603121561053357600080fd5b835161053e81610443565b6020850151604086015191945092506001600160401b0381111561056157600080fd5b61056d86828701610495565b9150509250925092565b60008060006060848603121561058c57600080fd5b835161059781610443565b60208501519093506001600160401b038111156105b357600080fd5b6105bf86828701610495565b604086015190935090506001600160401b0381111561056157600080fd5b600082516105ef818460208701610471565b9190910192915050565b828152604060208201526000825180604084015261061e816060850160208701610471565b601f01601f1916919091016060019392505050565b60006020828403121561064557600080fd5b81516001600160e01b03198116811461040557600080fd5b634e487b7160e01b600052603260045260246000fdfe5369676e617475726556616c696461746f72237265636f7665725369676e6572",
          "multicall3Bytecode",
          0,
          "0x608060405234801561001057600080fd5b506115b9806100206000396000f3fe6080604052600436106100f35760003560e01c80634d2301cc1161008a578063a8b0574e11610059578063a8b0574e14610325578063bce38bd714610350578063c3077fa914610380578063ee82ac5e146103b2576100f3565b80634d2301cc1461026257806372425d9d1461029f57806382ad56cb146102ca57806386d516e8146102fa576100f3565b80633408e470116100c65780633408e470146101af578063399542e9146101da5780633e64a6961461020c57806342cbb15c14610237576100f3565b80630f28c97d146100f8578063174dea7114610123578063252dba421461015357806327e86d6e14610184575b600080fd5b34801561010457600080fd5b5061010d6103ef565b60405161011a9190610c0a565b60405180910390f35b61013d60048036038101906101389190610c94565b6103f7565b60405161014a9190610e94565b60405180910390f35b61016d60048036038101906101689190610f0c565b610615565b60405161017b92919061101b565b60405180910390f35b34801561019057600080fd5b506101996107ab565b6040516101a69190611064565b60405180910390f35b3480156101bb57600080fd5b506101c46107b7565b6040516101d19190610c0a565b60405180910390f35b6101f460048036038101906101ef91906110ab565b6107bf565b6040516102039392919061110b565b60405180910390f35b34801561021857600080fd5b506102216107e1565b60405161022e9190610c0a565b60405180910390f35b34801561024357600080fd5b5061024c6107e9565b6040516102599190610c0a565b60405180910390f35b34801561026e57600080fd5b50610289600480360381019061028491906111a7565b6107f1565b6040516102969190610c0a565b60405180910390f35b3480156102ab57600080fd5b506102b4610812565b6040516102c19190610c0a565b60405180910390f35b6102e460048036038101906102df919061122a565b61081a565b6040516102f19190610e94565b60405180910390f35b34801561030657600080fd5b5061030f6109e4565b60405161031c9190610c0a565b60405180910390f35b34801561033157600080fd5b5061033a6109ec565b6040516103479190611286565b60405180910390f35b61036a600480360381019061036591906110ab565b6109f4565b6040516103779190610e94565b60405180910390f35b61039a60048036038101906103959190610f0c565b610ba6565b6040516103a99392919061110b565b60405180910390f35b3480156103be57600080fd5b506103d960048036038101906103d491906112cd565b610bca565b6040516103e69190611064565b60405180910390f35b600042905090565b60606000808484905090508067ffffffffffffffff81111561041c5761041b6112fa565b5b60405190808252806020026020018201604052801561045557816020015b610442610bd5565b81526020019060019003908161043a5790505b5092503660005b828110156105c957600085828151811061047957610478611329565b5b6020026020010151905087878381811061049657610495611329565b5b90506020028101906104a89190611367565b925060008360400135905080860195508360000160208101906104cb91906111a7565b73ffffffffffffffffffffffffffffffffffffffff16818580606001906104f2919061138f565b604051610500929190611431565b60006040518083038185875af1925050503d806000811461053d576040519150601f19603f3d011682016040523d82523d6000602084013e610542565b606091505b5083600001846020018290528215151515815250505081516020850135176105bc577f08c379a000000000000000000000000000000000000000000000000000000000600052602060045260176024527f4d756c746963616c6c333a2063616c6c206661696c656400000000000000000060445260846000fd5b826001019250505061045c565b5082341461060c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610603906114a7565b60405180910390fd5b50505092915050565b6000606043915060008484905090508067ffffffffffffffff81111561063e5761063d6112fa565b5b60405190808252806020026020018201604052801561067157816020015b606081526020019060019003908161065c5790505b5091503660005b828110156107a157600087878381811061069557610694611329565b5b90506020028101906106a791906114c7565b92508260000160208101906106bc91906111a7565b73ffffffffffffffffffffffffffffffffffffffff168380602001906106e2919061138f565b6040516106f0929190611431565b6000604051808303816000865af19150503d806000811461072d576040519150601f19603f3d011682016040523d82523d6000602084013e610732565b606091505b5086848151811061074657610745611329565b5b60200260200101819052819250505080610795576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161078c9061153b565b60405180910390fd5b81600101915050610678565b5050509250929050565b60006001430340905090565b600046905090565b6000806060439250434091506107d68686866109f4565b905093509350939050565b600048905090565b600043905090565b60008173ffffffffffffffffffffffffffffffffffffffff16319050919050565b600044905090565b606060008383905090508067ffffffffffffffff81111561083e5761083d6112fa565b5b60405190808252806020026020018201604052801561087757816020015b610864610bd5565b81526020019060019003908161085c5790505b5091503660005b828110156109db57600084828151811061089b5761089a611329565b5b602002602001015190508686838181106108b8576108b7611329565b5b90506020028101906108ca919061155b565b92508260000160208101906108df91906111a7565b73ffffffffffffffffffffffffffffffffffffffff16838060400190610905919061138f565b604051610913929190611431565b6000604051808303816000865af19150503d8060008114610950576040519150601f19603f3d011682016040523d82523d6000602084013e610955565b606091505b5082600001836020018290528215151515815250505080516020840135176109cf577f08c379a000000000000000000000000000000000000000000000000000000000600052602060045260176024527f4d756c746963616c6c333a2063616c6c206661696c656400000000000000000060445260646000fd5b8160010191505061087e565b50505092915050565b600045905090565b600041905090565b606060008383905090508067ffffffffffffffff811115610a1857610a176112fa565b5b604051908082528060200260200182016040528015610a5157816020015b610a3e610bd5565b815260200190600190039081610a365790505b5091503660005b82811015610b9c576000848281518110610a7557610a74611329565b5b60200260200101519050868683818110610a9257610a91611329565b5b9050602002810190610aa491906114c7565b9250826000016020810190610ab991906111a7565b73ffffffffffffffffffffffffffffffffffffffff16838060200190610adf919061138f565b604051610aed929190611431565b6000604051808303816000865af19150503d8060008114610b2a576040519150601f19603f3d011682016040523d82523d6000602084013e610b2f565b606091505b508260000183602001829052821515151581525050508715610b90578060000151610b8f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b869061153b565b60405180910390fd5b5b81600101915050610a58565b5050509392505050565b6000806060610bb7600186866107bf565b8093508194508295505050509250925092565b600081409050919050565b6040518060400160405280600015158152602001606081525090565b6000819050919050565b610c0481610bf1565b82525050565b6000602082019050610c1f6000830184610bfb565b92915050565b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b60008083601f840112610c5457610c53610c2f565b5b8235905067ffffffffffffffff811115610c7157610c70610c34565b5b602083019150836020820283011115610c8d57610c8c610c39565b5b9250929050565b60008060208385031215610cab57610caa610c25565b5b600083013567ffffffffffffffff811115610cc957610cc8610c2a565b5b610cd585828601610c3e565b92509250509250929050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b60008115159050919050565b610d2281610d0d565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610d62578082015181840152602081019050610d47565b83811115610d71576000848401525b50505050565b6000601f19601f8301169050919050565b6000610d9382610d28565b610d9d8185610d33565b9350610dad818560208601610d44565b610db681610d77565b840191505092915050565b6000604083016000830151610dd96000860182610d19565b5060208301518482036020860152610df18282610d88565b9150508091505092915050565b6000610e0a8383610dc1565b905092915050565b6000602082019050919050565b6000610e2a82610ce1565b610e348185610cec565b935083602082028501610e4685610cfd565b8060005b85811015610e825784840389528151610e638582610dfe565b9450610e6e83610e12565b925060208a01995050600181019050610e4a565b50829750879550505050505092915050565b60006020820190508181036000830152610eae8184610e1f565b905092915050565b60008083601f840112610ecc57610ecb610c2f565b5b8235905067ffffffffffffffff811115610ee957610ee8610c34565b5b602083019150836020820283011115610f0557610f04610c39565b5b9250929050565b60008060208385031215610f2357610f22610c25565b5b600083013567ffffffffffffffff811115610f4157610f40610c2a565b5b610f4d85828601610eb6565b92509250509250929050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b6000610f918383610d88565b905092915050565b6000602082019050919050565b6000610fb182610f59565b610fbb8185610f64565b935083602082028501610fcd85610f75565b8060005b858110156110095784840389528151610fea8582610f85565b9450610ff583610f99565b925060208a01995050600181019050610fd1565b50829750879550505050505092915050565b60006040820190506110306000830185610bfb565b81810360208301526110428184610fa6565b90509392505050565b6000819050919050565b61105e8161104b565b82525050565b60006020820190506110796000830184611055565b92915050565b61108881610d0d565b811461109357600080fd5b50565b6000813590506110a58161107f565b92915050565b6000806000604084860312156110c4576110c3610c25565b5b60006110d286828701611096565b935050602084013567ffffffffffffffff8111156110f3576110f2610c2a565b5b6110ff86828701610eb6565b92509250509250925092565b60006060820190506111206000830186610bfb565b61112d6020830185611055565b818103604083015261113f8184610e1f565b9050949350505050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061117482611149565b9050919050565b61118481611169565b811461118f57600080fd5b50565b6000813590506111a18161117b565b92915050565b6000602082840312156111bd576111bc610c25565b5b60006111cb84828501611192565b91505092915050565b60008083601f8401126111ea576111e9610c2f565b5b8235905067ffffffffffffffff81111561120757611206610c34565b5b60208301915083602082028301111561122357611222610c39565b5b9250929050565b6000806020838503121561124157611240610c25565b5b600083013567ffffffffffffffff81111561125f5761125e610c2a565b5b61126b858286016111d4565b92509250509250929050565b61128081611169565b82525050565b600060208201905061129b6000830184611277565b92915050565b6112aa81610bf1565b81146112b557600080fd5b50565b6000813590506112c7816112a1565b92915050565b6000602082840312156112e3576112e2610c25565b5b60006112f1848285016112b8565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600080fd5b600080fd5b600080fd5b60008235600160800383360303811261138357611382611358565b5b80830191505092915050565b600080833560016020038436030381126113ac576113ab611358565b5b80840192508235915067ffffffffffffffff8211156113ce576113cd61135d565b5b6020830192506001820236038313156113ea576113e9611362565b5b509250929050565b600081905092915050565b82818337600083830152505050565b600061141883856113f2565b93506114258385846113fd565b82840190509392505050565b600061143e82848661140c565b91508190509392505050565b600082825260208201905092915050565b7f4d756c746963616c6c333a2076616c7565206d69736d61746368000000000000600082015250565b6000611491601a8361144a565b915061149c8261145b565b602082019050919050565b600060208201905081810360008301526114c081611484565b9050919050565b6000823560016040038336030381126114e3576114e2611358565b5b80830191505092915050565b7f4d756c746963616c6c333a2063616c6c206661696c6564000000000000000000600082015250565b600061152560178361144a565b9150611530826114ef565b602082019050919050565b6000602082019050818103600083015261155481611518565b9050919050565b60008235600160600383360303811261157757611576611358565b5b8083019150509291505056fea264697066735822122020c1bc9aacf8e4a6507193432a895a8e77094f45a1395583f07b24e860ef06cd64736f6c634300080c0033",
        ],
        472503
      );
  },
  289169,
  (e) => {
    "use strict";
    var t = e.i(70204),
      r = e.i(147526),
      n = e.i(704434);
    let a = "/docs/contract/encodeDeployData";
    function o(e) {
      let { abi: o, args: i, bytecode: s } = e;
      if (!i || 0 === i.length) return s;
      let c = o.find((e) => "type" in e && "constructor" === e.type);
      if (!c) throw new t.AbiConstructorNotFoundError({ docsPath: a });
      if (!("inputs" in c) || !c.inputs || 0 === c.inputs.length)
        throw new t.AbiConstructorParamsNotFoundError({ docsPath: a });
      let u = (0, n.encodeAbiParameters)(c.inputs, i);
      return (0, r.concatHex)([s, u]);
    }
    e.s(["encodeDeployData", () => o]);
  },
  404195,
  (e) => {
    "use strict";
    var t = e.i(505880);
    function r({ blockNumber: e, chain: r, contract: n }) {
      let a = r?.contracts?.[n];
      if (!a)
        throw new t.ChainDoesNotSupportContract({
          chain: r,
          contract: { name: n },
        });
      if (e && a.blockCreated && a.blockCreated > e)
        throw new t.ChainDoesNotSupportContract({
          blockNumber: e,
          chain: r,
          contract: { name: n, blockCreated: a.blockCreated },
        });
      return a.address;
    }
    e.s(["getChainContractAddress", () => r]);
  },
  467078,
  (e) => {
    "use strict";
    var t = e.i(569934),
      r = e.i(853532);
    function n(e, n) {
      let a = (e.details || "").toLowerCase(),
        o =
          e instanceof t.BaseError
            ? e.walk((e) => e?.code === r.ExecutionRevertedError.code)
            : e;
      return o instanceof t.BaseError
        ? new r.ExecutionRevertedError({ cause: e, message: o.details })
        : r.ExecutionRevertedError.nodeMessage.test(a)
        ? new r.ExecutionRevertedError({ cause: e, message: e.details })
        : r.FeeCapTooHighError.nodeMessage.test(a)
        ? new r.FeeCapTooHighError({ cause: e, maxFeePerGas: n?.maxFeePerGas })
        : r.FeeCapTooLowError.nodeMessage.test(a)
        ? new r.FeeCapTooLowError({ cause: e, maxFeePerGas: n?.maxFeePerGas })
        : r.NonceTooHighError.nodeMessage.test(a)
        ? new r.NonceTooHighError({ cause: e, nonce: n?.nonce })
        : r.NonceTooLowError.nodeMessage.test(a)
        ? new r.NonceTooLowError({ cause: e, nonce: n?.nonce })
        : r.NonceMaxValueError.nodeMessage.test(a)
        ? new r.NonceMaxValueError({ cause: e, nonce: n?.nonce })
        : r.InsufficientFundsError.nodeMessage.test(a)
        ? new r.InsufficientFundsError({ cause: e })
        : r.IntrinsicGasTooHighError.nodeMessage.test(a)
        ? new r.IntrinsicGasTooHighError({ cause: e, gas: n?.gas })
        : r.IntrinsicGasTooLowError.nodeMessage.test(a)
        ? new r.IntrinsicGasTooLowError({ cause: e, gas: n?.gas })
        : r.TransactionTypeNotSupportedError.nodeMessage.test(a)
        ? new r.TransactionTypeNotSupportedError({ cause: e })
        : r.TipAboveFeeCapError.nodeMessage.test(a)
        ? new r.TipAboveFeeCapError({
            cause: e,
            maxFeePerGas: n?.maxFeePerGas,
            maxPriorityFeePerGas: n?.maxPriorityFeePerGas,
          })
        : new r.UnknownNodeError({ cause: e });
    }
    e.i(1299), e.i(383856), e.s(["getNodeError", () => n]);
  },
  779690,
  (e) => {
    "use strict";
    var t = e.i(878023),
      r = e.i(853532),
      n = e.i(467078);
    function a(e, { docsPath: a, ...o }) {
      let i,
        s =
          (i = (0, n.getNodeError)(e, o)) instanceof r.UnknownNodeError ? e : i;
      return new t.CallExecutionError(s, { docsPath: a, ...o });
    }
    e.s(["getCallError", () => a]);
  },
  264404,
  (e) => {
    "use strict";
    function t(e, { format: t }) {
      if (!t) return {};
      let r = {};
      return (
        !(function t(n) {
          for (let a of Object.keys(n))
            a in e && (r[a] = e[a]),
              n[a] &&
                "object" == typeof n[a] &&
                !Array.isArray(n[a]) &&
                t(n[a]);
        })(t(e || {})),
        r
      );
    }
    e.s(["extract", () => t]);
  },
  871706,
  509486,
  (e) => {
    "use strict";
    function t() {
      let e = () => void 0,
        t = () => void 0;
      return {
        promise: new Promise((r, n) => {
          (e = r), (t = n);
        }),
        resolve: e,
        reject: t,
      };
    }
    e.s(["withResolvers", () => t], 509486);
    let r = new Map();
    function n({ fn: e, id: n, shouldSplitBatch: a, wait: o = 0, sort: i }) {
      let s = async () => {
          let t = u();
          c();
          let r = t.map(({ args: e }) => e);
          0 !== r.length &&
            e(r)
              .then((e) => {
                i && Array.isArray(e) && e.sort(i);
                for (let r = 0; r < t.length; r++) {
                  let { resolve: n } = t[r];
                  n?.([e[r], e]);
                }
              })
              .catch((e) => {
                for (let r = 0; r < t.length; r++) {
                  let { reject: n } = t[r];
                  n?.(e);
                }
              });
        },
        c = () => r.delete(n),
        u = () => r.get(n) || [],
        d = (e) => r.set(n, [...u(), e]);
      return {
        flush: c,
        async schedule(e) {
          let { promise: r, resolve: n, reject: i } = t();
          return (
            (a?.([...u().map(({ args: e }) => e), e]) && s(), u().length > 0)
              ? d({ args: e, resolve: n, reject: i })
              : (d({ args: e, resolve: n, reject: i }), setTimeout(s, o)),
            r
          );
        },
      };
    }
    e.s(["createBatchScheduler", () => n], 871706);
  },
  353464,
  (e) => {
    "use strict";
    var t = e.i(189991),
      r = e.i(674768),
      n = e.i(608861),
      a = e.i(853532),
      o = e.i(796516);
    function i(e) {
      let { account: i, maxFeePerGas: s, maxPriorityFeePerGas: c, to: u } = e,
        d = i ? (0, t.parseAccount)(i) : void 0;
      if (d && !(0, o.isAddress)(d.address))
        throw new n.InvalidAddressError({ address: d.address });
      if (u && !(0, o.isAddress)(u))
        throw new n.InvalidAddressError({ address: u });
      if (s && s > r.maxUint256)
        throw new a.FeeCapTooHighError({ maxFeePerGas: s });
      if (c && s && c > s)
        throw new a.TipAboveFeeCapError({
          maxFeePerGas: s,
          maxPriorityFeePerGas: c,
        });
    }
    e.s(["assertRequest", () => i]);
  },
  989509,
  (e) => {
    "use strict";
    var t = e.i(251701),
      r = e.i(578416),
      n = e.i(189991),
      a = e.i(752012),
      o = e.i(904119),
      i = e.i(472503),
      s = e.i(569934),
      c = e.i(505880),
      u = e.i(878023),
      d = e.i(363710),
      f = e.i(600547),
      l = e.i(289169),
      b = e.i(656679),
      p = e.i(806685),
      y = e.i(606580),
      m = e.i(404195),
      h = e.i(779690),
      g = e.i(264404),
      v = e.i(190521),
      w = e.i(871706),
      E = e.i(826051),
      x = e.i(353464);
    async function A(a, f) {
      let {
          account: b = a.account,
          authorizationList: m,
          batch: w = !!a.batch?.multicall,
          blockHash: A,
          blockNumber: $,
          blockTag: P = a.experimental_blockTag ?? "latest",
          requireCanonical: S,
          accessList: O,
          blobs: T,
          blockOverrides: R,
          code: j,
          data: z,
          factory: F,
          factoryData: C,
          gas: N,
          gasPrice: k,
          maxFeePerBlobGas: D,
          maxFeePerGas: H,
          maxPriorityFeePerGas: U,
          nonce: L,
          requestOptions: q,
          to: _,
          value: G,
          stateOverride: W,
          ...V
        } = f,
        Z = b ? (0, n.parseAccount)(b) : void 0;
      if (j && (F || C))
        throw new s.BaseError(
          "Cannot provide both `code` & `factory`/`factoryData` as parameters."
        );
      if (j && _)
        throw new s.BaseError(
          "Cannot provide both `code` & `to` as parameters."
        );
      let J = j && z,
        Y = F && C && _ && z,
        K = J || Y,
        X = J
          ? I({ code: j, data: z })
          : Y
          ? (function (e) {
              let { data: r, factory: n, factoryData: a, to: o } = e;
              return (0, l.encodeDeployData)({
                abi: (0, t.parseAbi)([
                  "constructor(address, bytes, address, bytes)",
                ]),
                bytecode: i.deploylessCallViaFactoryBytecode,
                args: [o, r, n, a],
              });
            })({ data: z, factory: F, factoryData: C, to: _ })
          : z;
      try {
        let e;
        (0, x.assertRequest)(f);
        let t = (0, y.formatBlockParameter)({
            blockHash: A,
            blockNumber: $,
            blockTag: P,
            requireCanonical: S,
          }),
          n = R ? r.toRpc(R) : void 0,
          i = (0, E.serializeStateOverride)(W),
          s = a.chain?.formatters?.transactionRequest?.format,
          u = (s || v.formatTransactionRequest)(
            {
              ...(0, g.extract)(V, { format: s }),
              accessList: O,
              account: Z,
              authorizationList: m,
              blobs: T,
              data: X,
              gas: N,
              gasPrice: k,
              maxFeePerBlobGas: D,
              maxFeePerGas: H,
              maxPriorityFeePerGas: U,
              nonce: L,
              to: K ? void 0 : _,
              value: G,
            },
            "call"
          );
        if (
          w &&
          (function ({ request: e }) {
            let { data: t, to: r, ...n } = e;
            return (
              !(!t || t.startsWith(o.aggregate3Signature)) &&
              !!r &&
              !(Object.values(n).filter((e) => void 0 !== e).length > 0)
            );
          })({ request: u }) &&
          !n &&
          void 0 === A
        )
          try {
            var Q, ee;
            let { deployless: e = !1 } =
                "object" == typeof a.batch?.multicall ? a.batch.multicall : {},
              t = M(a, { blockNumber: $, deployless: e });
            if (
              !t ||
              ((Q = i),
              (ee = t),
              !(Q && Object.keys(Q).some((e) => (0, p.isAddressEqual)(e, ee))))
            )
              return await B(a, {
                ...u,
                blockHash: A,
                blockNumber: $,
                blockTag: P,
                multicallAddress: t,
                requestOptions: q,
                requireCanonical: S,
                rpcStateOverride: i,
              });
          } catch (e) {
            if (
              !(e instanceof c.ClientChainNotConfiguredError) &&
              !(e instanceof c.ChainDoesNotSupportContract)
            )
              throw e;
          }
        let d =
            ((e = [u, t]),
            i && n ? [...e, i, n] : i ? [...e, i] : n ? [...e, {}, n] : e),
          l = await a.request({ method: "eth_call", params: d }, q);
        if ("0x" === l) return { data: void 0 };
        return { data: l };
      } catch (o) {
        if (q?.signal?.aborted) throw (0, d.getAbortError)(q.signal);
        if ((0, d.isAbortError)(o)) throw o;
        let t = (function (e) {
            if (!(e instanceof s.BaseError)) return;
            let t = e.walk();
            return "object" == typeof t?.data ? t.data?.data : t.data;
          })(o),
          { offchainLookup: r, offchainLookupSignature: n } = await e.A(101139);
        if (!1 !== a.ccipRead && t?.slice(0, 10) === n && _)
          return { data: await r(a, { data: t, requestOptions: q, to: _ }) };
        if (K && t?.slice(0, 10) === "0x101bb98d")
          throw new u.CounterfactualDeploymentFailedError({ factory: F });
        throw (0, h.getCallError)(o, { ...f, account: Z, chain: a.chain });
      }
    }
    let $ = 0,
      P = new WeakMap();
    async function B(e, t) {
      let {
          batchSize: r = 1024,
          deployless: n = !1,
          wait: o = 0,
        } = "object" == typeof e.batch?.multicall ? e.batch.multicall : {},
        {
          blockHash: s,
          blockNumber: c,
          blockTag: d = e.experimental_blockTag ?? "latest",
          requireCanonical: l,
          data: p,
          multicallAddress: m,
          requestOptions: h,
          rpcStateOverride: g,
          to: v,
        } = t,
        E = void 0 !== m ? m : M(e, { blockNumber: c, deployless: n }),
        x = (0, y.formatBlockParameter)({
          blockHash: s,
          blockNumber: c,
          blockTag: d,
          requireCanonical: l,
        }),
        A = "string" == typeof x ? x : JSON.stringify(x),
        B = g ? `.${JSON.stringify(g)}` : "",
        { schedule: S } = (0, w.createBatchScheduler)({
          id: `${e.uid}.${A}.${(function (e) {
            if (!e) return "default";
            let t = P.get(e);
            if (void 0 !== t) return t;
            let r = $++;
            return P.set(e, r), r;
          })(h)}${B}`,
          wait: o,
          shouldSplitBatch: (e) =>
            e.reduce((e, { data: t }) => e + (t.length - 2), 0) > 2 * r,
          fn: async (t) => {
            let r = t.map((e) => ({
                allowFailure: !0,
                callData: e.data,
                target: e.to,
              })),
              n = (0, b.encodeFunctionData)({
                abi: a.multicall3Abi,
                args: [r],
                functionName: "aggregate3",
              }),
              o = {
                ...(null === E
                  ? { data: I({ code: i.multicall3Bytecode, data: n }) }
                  : { to: E, data: n }),
              },
              s = await e.request(
                { method: "eth_call", params: g ? [o, x, g] : [o, x] },
                h
              );
            return (0, f.decodeFunctionResult)({
              abi: a.multicall3Abi,
              args: [r],
              functionName: "aggregate3",
              data: s || "0x",
            });
          },
        }),
        [{ returnData: O, success: T }] = await S({ data: p, to: v });
      if (!T) throw new u.RawContractError({ data: O });
      return "0x" === O ? { data: void 0 } : { data: O };
    }
    function M(e, t) {
      let { blockNumber: r, deployless: n } = t;
      if (n) return null;
      if (e.chain)
        return (0, m.getChainContractAddress)({
          blockNumber: r,
          chain: e.chain,
          contract: "multicall3",
        });
      throw new c.ClientChainNotConfiguredError();
    }
    function I(e) {
      let { code: r, data: n } = e;
      return (0, l.encodeDeployData)({
        abi: (0, t.parseAbi)(["constructor(bytes, bytes)"]),
        bytecode: i.deploylessCallViaBytecodeBytecode,
        args: [r, n],
      });
    }
    e.s(["call", () => A]);
  },
]);
