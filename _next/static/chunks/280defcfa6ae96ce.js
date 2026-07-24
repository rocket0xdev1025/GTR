(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  363625,
  606624,
  (e) => {
    "use strict";
    let t;
    var r = e.i(189991);
    let a = 256;
    function n(e = 11) {
      if (!t || a + e > 512) {
        (t = ""), (a = 0);
        for (let e = 0; e < 256; e++)
          t += ((256 + 256 * Math.random()) | 0).toString(16).substring(1);
      }
      return t.substring(a, a++ + e);
    }
    function i(e) {
      let {
          batch: t,
          chain: a,
          ccipRead: i,
          dataSuffix: s,
          key: c = "base",
          name: u = "Base Client",
          tokens: l,
          type: d = "base",
        } = e,
        p =
          e.experimental_blockTag ??
          ("number" == typeof a?.experimental_preconfirmationTime
            ? "pending"
            : void 0),
        f = Math.min(
          Math.max(Math.floor((a?.blockTime ?? 12e3) / 2), 500),
          4e3
        ),
        m = e.pollingInterval ?? f,
        h = e.cacheTime ?? m,
        y = e.account ? (0, r.parseAccount)(e.account) : void 0,
        {
          config: w,
          request: g,
          value: b,
        } = e.transport({ account: y, chain: a, pollingInterval: m }),
        v = {
          account: y,
          batch: t,
          cacheTime: h,
          ccipRead: i,
          chain: a,
          dataSuffix: s,
          key: c,
          name: u,
          pollingInterval: m,
          request: g,
          tokens: l,
          transport: { ...w, ...b },
          type: d,
          uid: n(),
          ...(p ? { experimental_blockTag: p } : {}),
        };
      return Object.assign(v, {
        extend: (function e(t) {
          return (r) => {
            let a = r(t);
            for (let e in v) delete a[e];
            let n = { ...t, ...a };
            for (let e in a) {
              let r = t[e],
                i = a[e];
              o(r) && o(i) && (n[e] = { ...r, ...i });
            }
            return Object.assign(n, { extend: e(n) });
          };
        })(v),
      });
    }
    function o(e) {
      if ("object" != typeof e || null === e) return !1;
      let t = Object.getPrototypeOf(e);
      return t === Object.prototype || null === t;
    }
    function s(e, t) {
      let r = (r = {}) => t(e, r);
      for (let a of [
        "call",
        "calls",
        "callWithPeriod",
        "estimateGas",
        "prepare",
        "prepareRecipient",
        "simulate",
      ])
        if (Object.hasOwn(t, a)) {
          let n = t[a];
          r[a] = (t = {}) => (1 === n.length ? n(t) : n(e, t));
        }
      for (let e of ["extractEvent", "extractEvents"])
        Object.hasOwn(t, e) && (r[e] = t[e]);
      return r;
    }
    e.s(["uid", () => n], 606624),
      e.s(["bindActionDecorators", () => s, "createClient", () => i], 363625);
  },
  975948,
  (e) => {
    "use strict";
    var t = e.i(450323);
    async function r(e) {
      let r = await e.request({ method: "eth_chainId" }, { dedupe: !0 });
      return (0, t.hexToNumber)(r);
    }
    e.s(["getChainId", () => r]);
  },
  611573,
  (e) => {
    "use strict";
    var t = e.i(569934);
    class r extends t.BaseError {
      constructor({ docsPath: e } = {}) {
        super(
          "Could not find an Account to execute with this Action.\nPlease provide an Account with the `account` argument on the Action, or by supplying an `account` to the Client.",
          { docsPath: e, docsSlug: "account", name: "AccountNotFoundError" }
        );
      }
    }
    class a extends t.BaseError {
      constructor({ docsPath: e, metaMessages: t, type: r }) {
        super(`Account type "${r}" is not supported.`, {
          docsPath: e,
          metaMessages: t,
          name: "AccountTypeNotSupportedError",
        });
      }
    }
    e.s([
      "AccountNotFoundError",
      () => r,
      "AccountTypeNotSupportedError",
      () => a,
    ]);
  },
  467125,
  (e) => {
    "use strict";
    function t(e, t, r) {
      let a = e[t.name];
      if ("function" == typeof a) return a;
      let n = e[r];
      return "function" == typeof n ? n : (r) => t(e, r);
    }
    e.s(["getAction", () => t]);
  },
  937445,
  (e) => {
    "use strict";
    var t = e.i(606580),
      r = e.i(450323);
    async function a(
      e,
      {
        address: a,
        blockHash: n,
        blockNumber: i,
        blockTag: o = "latest",
        requireCanonical: s,
      }
    ) {
      let c = (0, t.formatBlockParameter)({
          blockHash: n,
          blockNumber: i,
          blockTag: o,
          requireCanonical: s,
        }),
        u = await e.request(
          { method: "eth_getTransactionCount", params: [a, c] },
          { dedupe: "bigint" == typeof i || void 0 !== n }
        );
      return (0, r.hexToNumber)(u);
    }
    e.s(["getTransactionCount", () => a]);
  },
  829897,
  (e) => {
    "use strict";
    var t = e.i(189991),
      r = e.i(611573),
      a = e.i(806685),
      n = e.i(467125),
      i = e.i(975948),
      o = e.i(937445);
    async function s(e, s) {
      let { account: c = e.account, chainId: u, nonce: l } = s;
      if (!c)
        throw new r.AccountNotFoundError({
          docsPath: "/docs/eip7702/prepareAuthorization",
        });
      let d = (0, t.parseAccount)(c),
        p = (() => {
          if (s.executor)
            return "self" === s.executor
              ? s.executor
              : (0, t.parseAccount)(s.executor);
        })(),
        f = { address: s.contractAddress ?? s.address, chainId: u, nonce: l };
      return (
        void 0 === f.chainId &&
          (f.chainId =
            e.chain?.id ??
            (await (0, n.getAction)(e, i.getChainId, "getChainId")({}))),
        void 0 === f.nonce &&
          ((f.nonce = await (0, n.getAction)(
            e,
            o.getTransactionCount,
            "getTransactionCount"
          )({ address: d.address, blockTag: "pending" })),
          ("self" === p ||
            (p?.address && (0, a.isAddressEqual)(p.address, d.address))) &&
            (f.nonce += 1)),
        f
      );
    }
    e.s(["prepareAuthorization", () => s]);
  },
  170222,
  (e) => {
    "use strict";
    var t = e.i(976486),
      r = e.i(569934);
    class a extends r.BaseError {
      constructor() {
        super("`baseFeeMultiplier` must be greater than 1.", {
          name: "BaseFeeScalarError",
        });
      }
    }
    class n extends r.BaseError {
      constructor() {
        super("Chain does not support EIP-1559 fees.", {
          name: "Eip1559FeesNotSupportedError",
        });
      }
    }
    class i extends r.BaseError {
      constructor({ maxPriorityFeePerGas: e }) {
        super(
          `\`maxFeePerGas\` cannot be less than the \`maxPriorityFeePerGas\` (${(0,
          t.formatGwei)(e)} gwei).`,
          { name: "MaxFeePerGasTooLowError" }
        );
      }
    }
    e.s([
      "BaseFeeScalarError",
      () => a,
      "Eip1559FeesNotSupportedError",
      () => n,
      "MaxFeePerGasTooLowError",
      () => i,
    ]);
  },
  915588,
  57351,
  (e) => {
    "use strict";
    var t = e.i(569934);
    class r extends t.BaseError {
      constructor({ blockHash: e, blockNumber: t }) {
        let r = "Block";
        e && (r = `Block at hash "${e}"`),
          t && (r = `Block at number "${t}"`),
          super(`${r} could not be found.`, { name: "BlockNotFoundError" });
      }
    }
    e.s(["BlockNotFoundError", () => r], 57351);
    var a = e.i(675107),
      n = e.i(557874);
    async function i(
      e,
      {
        blockHash: t,
        blockNumber: o,
        blockTag: s = e.experimental_blockTag ?? "latest",
        includeTransactions: c,
      } = {}
    ) {
      let u = c ?? !1,
        l = void 0 !== o ? (0, a.numberToHex)(o) : void 0,
        d = null;
      if (
        !(d = t
          ? await e.request(
              { method: "eth_getBlockByHash", params: [t, u] },
              { dedupe: !0 }
            )
          : await e.request(
              { method: "eth_getBlockByNumber", params: [l || s, u] },
              { dedupe: !!l }
            ))
      )
        throw new r({ blockHash: t, blockNumber: o });
      return (e.chain?.formatters?.block?.format || n.formatBlock)(
        d,
        "getBlock"
      );
    }
    e.s(["getBlock", () => i], 915588);
  },
  972960,
  111047,
  194720,
  (e) => {
    "use strict";
    var t = e.i(170222),
      r = e.i(467125),
      a = e.i(450323),
      n = e.i(915588);
    async function i(e) {
      return BigInt(await e.request({ method: "eth_gasPrice" }));
    }
    async function o(e, t) {
      return s(e, t);
    }
    async function s(e, o) {
      let { block: s, chain: c = e.chain, request: u } = o || {};
      try {
        let t = c?.fees?.maxPriorityFeePerGas ?? c?.fees?.defaultPriorityFee;
        if ("function" == typeof t) {
          let a = s || (await (0, r.getAction)(e, n.getBlock, "getBlock")({})),
            i = await t({ block: a, client: e, request: u });
          if (null === i) throw Error();
          return i;
        }
        if (void 0 !== t) return t;
        let i = await e.request({ method: "eth_maxPriorityFeePerGas" });
        return (0, a.hexToBigInt)(i);
      } catch {
        let [a, o] = await Promise.all([
          s
            ? Promise.resolve(s)
            : (0, r.getAction)(e, n.getBlock, "getBlock")({}),
          (0, r.getAction)(e, i, "getGasPrice")({}),
        ]);
        if ("bigint" != typeof a.baseFeePerGas)
          throw new t.Eip1559FeesNotSupportedError();
        let c = o - a.baseFeePerGas;
        if (c < 0n) return 0n;
        return c;
      }
    }
    async function c(e, t) {
      return u(e, t);
    }
    async function u(e, a) {
      let {
          block: o,
          chain: c = e.chain,
          request: u,
          type: l = "eip1559",
        } = a || {},
        d = await (async () =>
          "function" == typeof c?.fees?.baseFeeMultiplier
            ? c.fees.baseFeeMultiplier({ block: o, client: e, request: u })
            : c?.fees?.baseFeeMultiplier ?? 1.2)();
      if (d < 1) throw new t.BaseFeeScalarError();
      let p = d.toString().split(".")[1]?.length ?? 0,
        f = 10 ** p,
        m = (e) => (e * BigInt(Math.ceil(d * f))) / BigInt(f),
        h = o || (await (0, r.getAction)(e, n.getBlock, "getBlock")({}));
      if ("function" == typeof c?.fees?.estimateFeesPerGas) {
        let t = await c.fees.estimateFeesPerGas({
          block: o,
          client: e,
          multiply: m,
          request: u,
          type: l,
        });
        if (null !== t) return t;
      }
      if ("eip1559" === l) {
        if ("bigint" != typeof h.baseFeePerGas)
          throw new t.Eip1559FeesNotSupportedError();
        let r =
            "bigint" == typeof u?.maxPriorityFeePerGas
              ? u.maxPriorityFeePerGas
              : await s(e, { block: h, chain: c, request: u }),
          a = m(h.baseFeePerGas);
        return {
          maxFeePerGas: u?.maxFeePerGas ?? a + r,
          maxPriorityFeePerGas: r,
        };
      }
      return {
        gasPrice:
          u?.gasPrice ?? m(await (0, r.getAction)(e, i, "getGasPrice")({})),
      };
    }
    e.s(["getGasPrice", () => i], 111047),
      e.s(
        [
          "estimateMaxPriorityFeePerGas",
          () => o,
          "internal_estimateMaxPriorityFeePerGas",
          () => s,
        ],
        194720
      ),
      e.s(
        ["estimateFeesPerGas", () => c, "internal_estimateFeesPerGas", () => u],
        972960
      );
  },
  43473,
  588233,
  (e) => {
    "use strict";
    let t = new Map(),
      r = new Map(),
      a = 0;
    function n(e, n, i) {
      let o = ++a,
        s = () => t.get(e) || [],
        c = () => {
          let a = s();
          if (!a.some((e) => e.id === o)) return;
          let n = r.get(e);
          if (1 === a.length && n) {
            let e = n();
            e instanceof Promise && e.catch(() => {});
          }
          (() => {
            let a = s().filter((e) => e.id !== o);
            if (0 === a.length) {
              t.delete(e), r.delete(e);
              return;
            }
            t.set(e, a);
          })();
        },
        u = s();
      if ((t.set(e, [...u, { id: o, fns: n }]), u && u.length > 0)) return c;
      let l = {};
      for (let e in n)
        l[e] = (...t) => {
          let r = s();
          if (0 !== r.length) for (let a of r) a.fns[e]?.(...t);
        };
      let d = i(l);
      return "function" == typeof d && r.set(e, d), c;
    }
    e.s(["observe", () => n], 43473);
    var i = e.i(363710);
    async function o(e, { signal: t } = {}) {
      return new Promise((r, a) => {
        if (t?.aborted) return void a((0, i.getAbortError)(t));
        let n = () => t?.removeEventListener("abort", s),
          o = setTimeout(() => {
            n(), r();
          }, e),
          s = () => {
            clearTimeout(o), n(), a((0, i.getAbortError)(t));
          };
        t?.addEventListener("abort", s, { once: !0 });
      });
    }
    e.s(["wait", () => o], 588233);
  },
  976215,
  (e) => {
    "use strict";
    var t = e.i(588233);
    function r(e, { emitOnBegin: r, initialWaitTime: a, interval: n }) {
      let i = !0,
        o = () => (i = !1);
      return (
        (async () => {
          let s;
          r && (s = await e({ unpoll: o }));
          let c = (await a?.(s)) ?? n;
          await (0, t.wait)(c);
          let u = async () => {
            i && (await e({ unpoll: o }), await (0, t.wait)(n), u());
          };
          u();
        })(),
        o
      );
    }
    e.s(["poll", () => r]);
  },
  643506,
  995062,
  (e) => {
    "use strict";
    e.s(
      [
        "domainSeparator",
        () => E,
        "getTypesForEIP712Domain",
        () => v,
        "serializeTypedData",
        () => g,
        "validateTypedData",
        () => b,
      ],
      643506
    );
    var t = e.i(70204),
      r = e.i(608861),
      a = e.i(34888),
      n = e.i(569934);
    class i extends n.BaseError {
      constructor({ domain: e }) {
        super(`Invalid domain "${(0, a.stringify)(e)}".`, {
          metaMessages: ["Must be a valid EIP-712 domain."],
        });
      }
    }
    class o extends n.BaseError {
      constructor({ primaryType: e, types: t }) {
        super(
          `Invalid primary type \`${e}\` must be one of \`${JSON.stringify(
            Object.keys(t)
          )}\`.`,
          {
            docsPath: "/api/glossary/Errors#typeddatainvalidprimarytypeerror",
            metaMessages: ["Check that the primary type is a key in `types`."],
          }
        );
      }
    }
    class s extends n.BaseError {
      constructor({ type: e }) {
        super(`Struct type "${e}" is invalid.`, {
          metaMessages: ["Struct type must not be a Solidity type."],
          name: "InvalidStructTypeError",
        });
      }
    }
    var c = e.i(796516),
      u = e.i(401319),
      l = e.i(675107),
      d = e.i(342692);
    e.s(["hashDomain", () => y, "hashTypedData", () => h], 995062);
    var p = e.i(704434),
      f = e.i(147526),
      m = e.i(831095);
    function h(e) {
      let { domain: t = {}, message: r, primaryType: a } = e,
        n = { EIP712Domain: v({ domain: t }), ...e.types };
      b({ domain: t, message: r, primaryType: a, types: n });
      let i = ["0x1901"];
      return (
        t && i.push(y({ domain: t, types: n })),
        "EIP712Domain" !== a &&
          i.push(w({ data: r, primaryType: a, types: n })),
        (0, m.keccak256)((0, f.concat)(i))
      );
    }
    function y({ domain: e, types: t }) {
      return w({ data: e, primaryType: "EIP712Domain", types: t });
    }
    function w({ data: e, primaryType: t, types: r }) {
      let a = (function e({ data: t, primaryType: r, types: a }) {
        let n = [{ type: "bytes32" }],
          i = [
            (function ({ primaryType: e, types: t }) {
              let r = (0, l.toHex)(
                (function ({ primaryType: e, types: t }) {
                  let r = "",
                    a = (function e(
                      { primaryType: t, types: r },
                      a = new Set()
                    ) {
                      let n = t.match(/^\w*/u),
                        i = n?.[0];
                      if (a.has(i) || void 0 === r[i]) return a;
                      for (let t of (a.add(i), r[i]))
                        e({ primaryType: t.type, types: r }, a);
                      return a;
                    })({ primaryType: e, types: t });
                  for (let n of (a.delete(e), [e, ...Array.from(a).sort()]))
                    r += `${n}(${t[n]
                      .map(({ name: e, type: t }) => `${t} ${e}`)
                      .join(",")})`;
                  return r;
                })({ primaryType: e, types: t })
              );
              return (0, m.keccak256)(r);
            })({ primaryType: r, types: a }),
          ];
        for (let o of a[r]) {
          let [r, s] = (function t({ types: r, name: a, type: n, value: i }) {
            if (void 0 !== r[n])
              return [
                { type: "bytes32" },
                (0, m.keccak256)(e({ data: i, primaryType: n, types: r })),
              ];
            if ("bytes" === n)
              return [{ type: "bytes32" }, (0, m.keccak256)(i)];
            if ("string" === n)
              return [{ type: "bytes32" }, (0, m.keccak256)((0, l.toHex)(i))];
            if (n.lastIndexOf("]") === n.length - 1) {
              let e = n.slice(0, n.lastIndexOf("[")),
                o = i.map((n) => t({ name: a, type: e, types: r, value: n }));
              return [
                { type: "bytes32" },
                (0, m.keccak256)(
                  (0, p.encodeAbiParameters)(
                    o.map(([e]) => e),
                    o.map(([, e]) => e)
                  )
                ),
              ];
            }
            return [{ type: n }, i];
          })({ types: a, name: o.name, type: o.type, value: t[o.name] });
          n.push(r), i.push(s);
        }
        return (0, p.encodeAbiParameters)(n, i);
      })({ data: e, primaryType: t, types: r });
      return (0, m.keccak256)(a);
    }
    function g(e) {
      let { domain: t, message: r, primaryType: n, types: i } = e,
        o = (e, t) => {
          let r = { ...t };
          for (let t of e) {
            let { name: e, type: a } = t;
            "address" === a && (r[e] = r[e].toLowerCase());
          }
          return r;
        },
        s = i.EIP712Domain && t ? o(i.EIP712Domain, t) : {},
        c = (() => {
          if ("EIP712Domain" !== n) return o(i[n], r);
        })();
      return (0, a.stringify)({
        domain: s,
        message: c,
        primaryType: n,
        types: i,
      });
    }
    function b(e) {
      let { domain: a, message: n, primaryType: p, types: f } = e,
        m = (e, a) => {
          for (let n of e) {
            let { name: e, type: i } = n,
              o = a[e],
              p = i.match(d.integerRegex);
            if (p && ("number" == typeof o || "bigint" == typeof o)) {
              let [e, t, r] = p;
              (0, l.numberToHex)(o, {
                signed: "int" === t,
                size: Number.parseInt(r, 10) / 8,
              });
            }
            if ("address" === i && "string" == typeof o && !(0, c.isAddress)(o))
              throw new r.InvalidAddressError({ address: o });
            let h = i.match(d.bytesRegex);
            if (h) {
              let [e, r] = h;
              if (r && (0, u.size)(o) !== Number.parseInt(r, 10))
                throw new t.BytesSizeMismatchError({
                  expectedSize: Number.parseInt(r, 10),
                  givenSize: (0, u.size)(o),
                });
            }
            let y = f[i];
            y &&
              ((function (e) {
                if (
                  "address" === e ||
                  "bool" === e ||
                  "string" === e ||
                  e.startsWith("bytes") ||
                  e.startsWith("uint") ||
                  e.startsWith("int")
                )
                  throw new s({ type: e });
              })(i),
              m(y, o));
          }
        };
      if (f.EIP712Domain && a) {
        if ("object" != typeof a) throw new i({ domain: a });
        m(f.EIP712Domain, a);
      }
      if ("EIP712Domain" !== p)
        if (f[p]) m(f[p], n);
        else throw new o({ primaryType: p, types: f });
    }
    function v({ domain: e }) {
      return [
        "string" == typeof e?.name && { name: "name", type: "string" },
        e?.version && { name: "version", type: "string" },
        ("number" == typeof e?.chainId || "bigint" == typeof e?.chainId) && {
          name: "chainId",
          type: "uint256",
        },
        e?.verifyingContract && { name: "verifyingContract", type: "address" },
        e?.salt && { name: "salt", type: "bytes32" },
      ].filter(Boolean);
    }
    function E({ domain: e }) {
      return y({ domain: e, types: { EIP712Domain: v({ domain: e }) } });
    }
  },
  807749,
  (e) => {
    "use strict";
    var t = e.i(70204),
      r = e.i(569934),
      a = e.i(878023),
      n = e.i(1299),
      i = e.i(383856);
    function o(
      e,
      { abi: o, address: s, args: c, docsPath: u, functionName: l, sender: d }
    ) {
      let p =
          e instanceof a.RawContractError
            ? e
            : e instanceof r.BaseError
            ? e.walk((e) => "data" in e) || e.walk()
            : {},
        { code: f, data: m, details: h, message: y, shortMessage: w } = p,
        g =
          e instanceof t.AbiDecodingZeroDataError
            ? new a.ContractFunctionZeroDataError({ functionName: l, cause: e })
            : ([3, i.InternalRpcError.code].includes(f) &&
                (m || h || y || w)) ||
              (f === i.InvalidInputRpcError.code &&
                "execution reverted" === h &&
                m)
            ? new a.ContractFunctionRevertedError({
                abi: o,
                data: "object" == typeof m ? m.data : m,
                functionName: l,
                message: p instanceof n.RpcRequestError ? h : w ?? y,
                cause: e,
              })
            : e;
      return new a.ContractFunctionExecutionError(g, {
        abi: o,
        args: c,
        contractAddress: s,
        docsPath: u,
        functionName: l,
        sender: d,
      });
    }
    e.s(["getContractError", () => o]);
  },
  388750,
  (e) => {
    "use strict";
    var t = e.i(600547),
      r = e.i(656679),
      a = e.i(807749),
      n = e.i(467125),
      i = e.i(989509);
    async function o(e, o) {
      let { abi: s, address: c, args: u, functionName: l, ...d } = o,
        p = (0, r.encodeFunctionData)({ abi: s, args: u, functionName: l });
      try {
        let { data: r } = await (0, n.getAction)(
          e,
          i.call,
          "call"
        )({ ...d, data: p, to: c });
        return (0, t.decodeFunctionResult)({
          abi: s,
          args: u,
          functionName: l,
          data: r || "0x",
        });
      } catch (e) {
        throw (0, a.getContractError)(e, {
          abi: s,
          address: c,
          args: u,
          docsPath: "/docs/contract/readContract",
          functionName: l,
        });
      }
    }
    e.s(["readContract", () => o]);
  },
  10725,
  (e) => {
    "use strict";
    var t = e.i(853532),
      r = e.i(393702),
      a = e.i(467078);
    function n(e, { docsPath: n, ...i }) {
      let o,
        s =
          (o = (0, a.getNodeError)(e, i)) instanceof t.UnknownNodeError ? e : o;
      return new r.TransactionExecutionError(s, { docsPath: n, ...i });
    }
    e.s(["getTransactionError", () => n]);
  },
  818249,
  222427,
  897282,
  (e) => {
    "use strict";
    var t = e.i(189991),
      r = e.i(170222),
      a = e.i(10725),
      n = e.i(264404),
      i = e.i(982191),
      o = e.i(190521),
      s = e.i(467125),
      c = e.i(353464),
      u = e.i(915588),
      l = e.i(975948);
    async function d(e, d) {
      let {
          account: p = e.account,
          accessList: f,
          authorizationList: m,
          chain: h = e.chain,
          blobVersionedHashes: y,
          blobs: w,
          data: g,
          gas: b,
          gasPrice: v,
          maxFeePerBlobGas: E,
          maxFeePerGas: T,
          maxPriorityFeePerGas: A,
          nonce: x,
          nonceManager: P,
          to: C,
          type: R,
          value: k,
          ...S
        } = d,
        F = await (async () => {
          if (!p || !P || void 0 !== x) return x;
          let r = (0, t.parseAccount)(p),
            a = h
              ? h.id
              : await (0, s.getAction)(e, l.getChainId, "getChainId")({});
          return await P.consume({ address: r.address, chainId: a, client: e });
        })();
      (0, c.assertRequest)(d);
      let I = h?.formatters?.transactionRequest?.format,
        N = (I || o.formatTransactionRequest)(
          {
            ...(0, n.extract)(S, { format: I }),
            account: p ? (0, t.parseAccount)(p) : void 0,
            accessList: f,
            authorizationList: m,
            blobs: w,
            blobVersionedHashes: y,
            data: g,
            gas: b,
            gasPrice: v,
            maxFeePerBlobGas: E,
            maxFeePerGas: T,
            maxPriorityFeePerGas: A,
            nonce: F,
            to: C,
            type: R,
            value: k,
          },
          "fillTransaction"
        );
      try {
        let t = await e.request({ method: "eth_fillTransaction", params: [N] }),
          a = (h?.formatters?.transaction?.format || i.formatTransaction)(t.tx);
        delete a.blockHash,
          delete a.blockNumber,
          delete a.r,
          delete a.s,
          delete a.transactionIndex,
          delete a.v,
          delete a.yParity,
          (a.data = a.input),
          a.gas && (a.gas = d.gas ?? a.gas),
          a.gasPrice && (a.gasPrice = d.gasPrice ?? a.gasPrice),
          a.maxFeePerBlobGas &&
            (a.maxFeePerBlobGas = d.maxFeePerBlobGas ?? a.maxFeePerBlobGas),
          a.maxFeePerGas && (a.maxFeePerGas = d.maxFeePerGas ?? a.maxFeePerGas),
          a.maxPriorityFeePerGas &&
            (a.maxPriorityFeePerGas =
              d.maxPriorityFeePerGas ?? a.maxPriorityFeePerGas),
          void 0 !== a.nonce && (a.nonce = d.nonce ?? a.nonce);
        let n = await (async () => {
          if ("function" == typeof h?.fees?.baseFeeMultiplier) {
            let t = await (0, s.getAction)(e, u.getBlock, "getBlock")({});
            return h.fees.baseFeeMultiplier({
              block: t,
              client: e,
              request: d,
            });
          }
          return h?.fees?.baseFeeMultiplier ?? 1.2;
        })();
        if (n < 1) throw new r.BaseFeeScalarError();
        let o = n.toString().split(".")[1]?.length ?? 0,
          c = 10 ** o,
          l = (e) => (e * BigInt(Math.ceil(n * c))) / BigInt(c);
        return (
          a.feePayerSignature ||
            (a.maxFeePerGas &&
              !d.maxFeePerGas &&
              (a.maxFeePerGas = l(a.maxFeePerGas)),
            a.gasPrice && !d.gasPrice && (a.gasPrice = l(a.gasPrice))),
          {
            raw: t.raw,
            transaction: { from: N.from, ...a },
            ...(t.capabilities ? { capabilities: t.capabilities } : {}),
          }
        );
      } catch (t) {
        throw (0, a.getTransactionError)(t, { ...d, chain: e.chain });
      }
    }
    e.s(["fillTransaction", () => d], 818249);
    var p = e.i(806685),
      f = e.i(769936),
      m = e.i(856324),
      h = e.i(831095),
      y = e.i(774620),
      w = e.i(70204),
      g = e.i(493429),
      b = e.i(401319),
      v = e.i(249311),
      E = e.i(332881);
    let T = "/docs/contract/decodeEventLog";
    function A(e) {
      let { abi: t, data: r, strict: a, topics: n } = e,
        i = a ?? !0,
        [o, ...s] = n;
      if (!o) throw new w.AbiEventSignatureEmptyTopicsError({ docsPath: T });
      let c = t.find(
        (e) =>
          "event" === e.type &&
          o === (0, y.toEventSelector)((0, E.formatAbiItem)(e))
      );
      if (!(c && "name" in c) || "event" !== c.type)
        throw new w.AbiEventSignatureNotFoundError(o, { docsPath: T });
      let { name: u, inputs: l } = c,
        d = l?.some((e) => !("name" in e && e.name)),
        p = d ? [] : {},
        f = l
          .map((e, t) => [e, t])
          .filter(([e]) => "indexed" in e && e.indexed),
        m = [];
      for (let e = 0; e < f.length; e++) {
        let [t, r] = f[e],
          a = s[e];
        if (!a) {
          if (i) throw new w.DecodeLogTopicsMismatch({ abiItem: c, param: t });
          m.push([t, r]);
          continue;
        }
        p[d ? r : t.name || r] = (function ({ param: e, value: t }) {
          return "string" === e.type ||
            "bytes" === e.type ||
            "tuple" === e.type ||
            e.type.match(/^(.*)\[(\d+)?\]$/)
            ? t
            : ((0, v.decodeAbiParameters)([e], t) || [])[0];
        })({ param: t, value: a });
      }
      let h = l.filter((e) => !("indexed" in e && e.indexed)),
        A = i ? h : [...m.map(([e]) => e), ...h];
      if (A.length > 0) {
        if (r && "0x" !== r)
          try {
            let e = (0, v.decodeAbiParameters)(A, r);
            if (e) {
              let t = 0;
              if (!i) for (let [r, a] of m) p[d ? a : r.name || a] = e[t++];
              if (d)
                for (let r = 0; r < l.length; r++)
                  void 0 === p[r] && t < e.length && (p[r] = e[t++]);
              else for (let r = 0; r < h.length; r++) p[h[r].name] = e[t++];
            }
          } catch (e) {
            if (i) {
              if (
                e instanceof w.AbiDecodingDataSizeTooSmallError ||
                e instanceof g.PositionOutOfBoundsError
              )
                throw new w.DecodeLogDataMismatch({
                  abiItem: c,
                  data: r,
                  params: A,
                  size: (0, b.size)(r),
                });
              throw e;
            }
          }
        else if (i)
          throw new w.DecodeLogDataMismatch({
            abiItem: c,
            data: "0x",
            params: A,
            size: 0,
          });
      }
      return { eventName: u, args: Object.values(p).length > 0 ? p : void 0 };
    }
    function x(e) {
      let { abi: t, args: r, logs: a, strict: n = !0 } = e,
        i = (() => {
          if (e.eventName)
            return Array.isArray(e.eventName) ? e.eventName : [e.eventName];
        })(),
        o = t
          .filter((e) => "event" === e.type)
          .map((e) => ({ abi: e, selector: (0, y.toEventSelector)(e) }));
      return a
        .map((e) => {
          let t,
            a,
            s = "string" == typeof e.blockNumber ? (0, m.formatLog)(e) : e,
            c = o.filter((e) => s.topics[0] === e.selector);
          if (0 === c.length) return null;
          for (let e of c)
            try {
              (t = A({ ...s, abi: [e.abi], strict: !0 })), (a = e);
              break;
            } catch {}
          if (!t && !n) {
            a = c[0];
            try {
              t = A({
                data: s.data,
                topics: s.topics,
                abi: [a.abi],
                strict: !1,
              });
            } catch {
              let e = a.abi.inputs?.some((e) => !("name" in e && e.name));
              return { ...s, args: e ? [] : {}, eventName: a.abi.name };
            }
          }
          return t &&
            a &&
            (!i || i.includes(t.eventName)) &&
            (function (e) {
              let { args: t, inputs: r, matchArgs: a } = e;
              if (!a) return !0;
              if (!t) return !1;
              function n(e, t, r) {
                try {
                  if ("address" === e.type) return (0, p.isAddressEqual)(t, r);
                  if ("string" === e.type || "bytes" === e.type)
                    return (0, h.keccak256)((0, f.toBytes)(t)) === r;
                  return t === r;
                } catch {
                  return !1;
                }
              }
              return Array.isArray(t) && Array.isArray(a)
                ? a.every((e, a) => {
                    if (null == e) return !0;
                    let i = r[a];
                    return (
                      !!i &&
                      (Array.isArray(e) ? e : [e]).some((e) => n(i, e, t[a]))
                    );
                  })
                : !(
                    "object" != typeof t ||
                    Array.isArray(t) ||
                    "object" != typeof a ||
                    Array.isArray(a)
                  ) &&
                    Object.entries(a).every(([e, a]) => {
                      if (null == a) return !0;
                      let i = r.find((t) => t.name === e);
                      return (
                        !!i &&
                        (Array.isArray(a) ? a : [a]).some((r) => n(i, r, t[e]))
                      );
                    });
            })({ args: t.args, inputs: a.abi.inputs, matchArgs: r })
            ? { ...t, ...s }
            : null;
        })
        .filter(Boolean);
    }
    e.s(["decodeEventLog", () => A], 222427),
      e.s(["parseEventLogs", () => x], 897282);
  },
  290392,
  418217,
  205789,
  (e) => {
    "use strict";
    var t = e.i(823838),
      r = e.i(831095),
      a = e.i(880841),
      n = e.i(401319),
      i = e.i(450323),
      o = e.i(675107);
    async function s({ hash: t, signature: r }) {
      let s = (0, a.isHex)(t) ? t : (0, o.toHex)(t),
        { secp256k1: u } = await e.A(389892),
        l = (() => {
          if ("object" == typeof r && "r" in r && "s" in r) {
            let { r: e, s: t, v: a, yParity: n } = r,
              o = c(Number(n ?? a));
            return new u.Signature(
              (0, i.hexToBigInt)(e),
              (0, i.hexToBigInt)(t)
            ).addRecoveryBit(o);
          }
          let e = (0, a.isHex)(r) ? r : (0, o.toHex)(r);
          if (65 !== (0, n.size)(e)) throw Error("invalid signature length");
          let t = c((0, i.hexToNumber)(`0x${e.slice(130)}`));
          return u.Signature.fromCompact(e.substring(2, 130)).addRecoveryBit(t);
        })()
          .recoverPublicKey(s.substring(2))
          .toHex(!1);
      return `0x${l}`;
    }
    function c(e) {
      if (0 === e || 1 === e) return e;
      if (27 === e) return 0;
      if (28 === e) return 1;
      throw Error("Invalid yParityOrV value");
    }
    async function u({ hash: e, signature: a }) {
      var n;
      let i;
      return (
        (n = await s({ hash: e, signature: a })),
        (i = (0, r.keccak256)(`0x${n.substring(4)}`).substring(26)),
        (0, t.checksumAddress)(`0x${i}`)
      );
    }
    e.s(["recoverAddress", () => u], 418217);
    var l = e.i(147526),
      d = e.i(769936),
      p = e.i(70326);
    async function f(e) {
      let { authorization: t, signature: a } = e;
      return u({
        hash: (function (e) {
          let { chainId: t, nonce: a, to: n } = e,
            i = e.contractAddress ?? e.address,
            s = (0, r.keccak256)(
              (0, l.concatHex)([
                "0x05",
                (0, p.toRlp)([
                  t ? (0, o.numberToHex)(t) : "0x",
                  i,
                  a ? (0, o.numberToHex)(a) : "0x",
                ]),
              ])
            );
          return "bytes" === n ? (0, d.hexToBytes)(s) : s;
        })(t),
        signature: a ?? t,
      });
    }
    e.s(["recoverAuthorizationAddress", () => f], 290392);
    var m = e.i(285973),
      h = e.i(976486),
      y = e.i(569934),
      w = e.i(393702);
    class g extends y.BaseError {
      constructor(
        e,
        {
          account: t,
          docsPath: r,
          chain: a,
          data: n,
          gas: i,
          gasPrice: o,
          maxFeePerGas: s,
          maxPriorityFeePerGas: c,
          nonce: u,
          to: l,
          value: d,
        }
      ) {
        super(e.shortMessage, {
          cause: e,
          docsPath: r,
          metaMessages: [
            ...(e.metaMessages ? [...e.metaMessages, " "] : []),
            "Estimate Gas Arguments:",
            (0, w.prettyPrint)({
              from: t?.address,
              to: l,
              value:
                void 0 !== d &&
                `${(0, m.formatEther)(d)} ${
                  a?.nativeCurrency?.symbol || "ETH"
                }`,
              data: n,
              gas: i,
              gasPrice: void 0 !== o && `${(0, h.formatGwei)(o)} gwei`,
              maxFeePerGas: void 0 !== s && `${(0, h.formatGwei)(s)} gwei`,
              maxPriorityFeePerGas:
                void 0 !== c && `${(0, h.formatGwei)(c)} gwei`,
              nonce: u,
            }),
          ].filter(Boolean),
          name: "EstimateGasExecutionError",
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
    var b = e.i(853532),
      v = e.i(467078);
    function E(e, { docsPath: t, ...r }) {
      let a;
      return new g(
        (a = (0, v.getNodeError)(e, r)) instanceof b.UnknownNodeError ? e : a,
        { docsPath: t, ...r }
      );
    }
    e.s(["getEstimateGasError", () => E], 205789);
  },
  369121,
  368941,
  484734,
  106145,
  (e) => {
    "use strict";
    var t = e.i(189991),
      r = e.i(656679),
      a = e.i(807749),
      n = e.i(467125);
    e.s(["estimateGas", () => S], 484734);
    var i = e.i(569934),
      o = e.i(290392),
      s = e.i(675107),
      c = e.i(205789),
      u = e.i(264404),
      l = e.i(190521),
      d = e.i(826051),
      p = e.i(353464);
    e.s(
      ["defaultParameters", () => P, "prepareTransactionRequest", () => k],
      368941
    );
    var f = e.i(972960),
      m = e.i(915588),
      h = e.i(937445),
      y = e.i(170222),
      w = e.i(94371),
      g = e.i(49810),
      b = e.i(883031),
      v = e.i(310538),
      E = e.i(976677),
      T = e.i(576213),
      A = e.i(818249),
      x = e.i(975948);
    let P = ["blobVersionedHashes", "chainId", "fees", "gas", "nonce", "type"],
      C = new Map(),
      R = new E.LruMap(128);
    async function k(e, r) {
      let a,
        i,
        o = r;
      (o.account ??= e.account), (o.parameters ??= P);
      let {
          account: s,
          chain: c = e.chain,
          nonceManager: u,
          parameters: l,
        } = o,
        d =
          "function" == typeof c?.prepareTransactionRequest
            ? {
                fn: c.prepareTransactionRequest,
                runAt: ["beforeFillTransaction"],
              }
            : Array.isArray(c?.prepareTransactionRequest)
            ? {
                fn: c.prepareTransactionRequest[0],
                runAt: c.prepareTransactionRequest[1].runAt,
              }
            : void 0;
      async function E() {
        return a
          ? a
          : void 0 !== o.chainId
          ? o.chainId
          : c
          ? c.id
          : (a = await (0, n.getAction)(e, x.getChainId, "getChainId")({}));
      }
      let k = s ? (0, t.parseAccount)(s) : s,
        F = o.nonce;
      if (l.includes("nonce") && void 0 === F && k && u) {
        let t = await E();
        F = await u.consume({ address: k.address, chainId: t, client: e });
      }
      d?.fn &&
        d.runAt?.includes("beforeFillTransaction") &&
        ((o = await d.fn(
          { ...o, chain: c },
          { client: e, phase: "beforeFillTransaction" }
        )),
        (F ??= o.nonce));
      let I =
        (!(l.includes("blobVersionedHashes") || l.includes("sidecars")) ||
          !o.kzg ||
          !o.blobs) &&
        !1 !== R.get(e.uid) &&
        ["fees", "gas"].some((e) => l.includes(e)) &&
        ((l.includes("chainId") && "number" != typeof o.chainId) ||
          (l.includes("nonce") && "number" != typeof F) ||
          (l.includes("fees") &&
            "bigint" != typeof o.gasPrice &&
            ("bigint" != typeof o.maxFeePerGas ||
              "bigint" != typeof o.maxPriorityFeePerGas)) ||
          (l.includes("gas") && "bigint" != typeof o.gas))
          ? await (0, n.getAction)(
              e,
              A.fillTransaction,
              "fillTransaction"
            )({ ...o, nonce: F })
              .then((t) => {
                let {
                    chainId: r,
                    from: a,
                    gas: n,
                    gasPrice: i,
                    nonce: s,
                    maxFeePerBlobGas: c,
                    maxFeePerGas: u,
                    maxPriorityFeePerGas: l,
                    type: d,
                    ...p
                  } = t.transaction,
                  f = "feeToken" in p ? p.feeToken : void 0,
                  m =
                    "feePayerSignature" in p &&
                    null !== p.feePayerSignature &&
                    void 0 !== p.feePayerSignature,
                  h = null != f && (!("feeToken" in o) || m);
                return (
                  R.set(e.uid, !0),
                  {
                    ...o,
                    ...(a ? { from: a } : {}),
                    ...(d && !o.type ? { type: d } : {}),
                    ...(void 0 !== r ? { chainId: r } : {}),
                    ...(void 0 !== n ? { gas: n } : {}),
                    ...(void 0 !== i ? { gasPrice: i } : {}),
                    ...(void 0 !== s ? { nonce: s } : {}),
                    ...(void 0 !== c &&
                    "legacy" !== o.type &&
                    "eip2930" !== o.type
                      ? { maxFeePerBlobGas: c }
                      : {}),
                    ...(void 0 !== u &&
                    "legacy" !== o.type &&
                    "eip2930" !== o.type
                      ? { maxFeePerGas: u }
                      : {}),
                    ...(void 0 !== l &&
                    "legacy" !== o.type &&
                    "eip2930" !== o.type
                      ? { maxPriorityFeePerGas: l }
                      : {}),
                    ...("nonceKey" in p && void 0 !== p.nonceKey
                      ? { nonceKey: p.nonceKey }
                      : {}),
                    ...("keyAuthorization" in p &&
                    void 0 !== p.keyAuthorization &&
                    null !== p.keyAuthorization &&
                    !("keyAuthorization" in o)
                      ? { keyAuthorization: p.keyAuthorization }
                      : {}),
                    ...("feePayerSignature" in p &&
                    void 0 !== p.feePayerSignature &&
                    null !== p.feePayerSignature
                      ? { feePayerSignature: p.feePayerSignature }
                      : {}),
                    ...(h ? { feeToken: f } : {}),
                    ...(t.capabilities
                      ? { _capabilities: t.capabilities }
                      : {}),
                  }
                );
              })
              .catch((t) => {
                if ("TransactionExecutionError" !== t.name) return o;
                if (t.walk?.((e) => "ExecutionRevertedError" === e.name))
                  throw t;
                return (
                  t.walk?.(
                    (e) =>
                      "MethodNotFoundRpcError" === e.name ||
                      "MethodNotSupportedRpcError" === e.name ||
                      e.message?.includes(
                        "eth_fillTransaction is not available"
                      )
                  ) && R.set(e.uid, !1),
                  o
                );
              })
          : o;
      F ??= I.nonce;
      let {
        blobs: N,
        gas: B,
        kzg: q,
        type: M,
      } = (o = {
        ...I,
        ...(k ? { from: k?.address } : {}),
        ...(void 0 !== F ? { nonce: F } : {}),
      });
      async function G() {
        return (
          i ||
          (i = await (0, n.getAction)(
            e,
            m.getBlock,
            "getBlock"
          )({ blockTag: "latest" }))
        );
      }
      if (
        (d?.fn &&
          d.runAt?.includes("beforeFillParameters") &&
          (o = await d.fn(
            { ...o, chain: c },
            { client: e, phase: "beforeFillParameters" }
          )),
        l.includes("nonce") &&
          void 0 === F &&
          k &&
          !u &&
          (o.nonce = await (0, n.getAction)(
            e,
            h.getTransactionCount,
            "getTransactionCount"
          )({ address: k.address, blockTag: "pending" })),
        (l.includes("blobVersionedHashes") || l.includes("sidecars")) && N && q)
      ) {
        let e = (0, w.blobsToCommitments)({ blobs: N, kzg: q });
        if (l.includes("blobVersionedHashes")) {
          let t = (0, b.commitmentsToVersionedHashes)({
            commitments: e,
            to: "hex",
          });
          o.blobVersionedHashes = t;
        }
        if (l.includes("sidecars")) {
          let t = (0, g.blobsToProofs)({ blobs: N, commitments: e, kzg: q }),
            r = (0, v.toBlobSidecars)({
              blobs: N,
              commitments: e,
              proofs: t,
              to: "hex",
            });
          o.sidecars = r;
        }
      }
      if (
        (l.includes("chainId") && (o.chainId = await E()),
        (l.includes("fees") || l.includes("type")) && void 0 === M)
      )
        try {
          o.type = (0, T.getTransactionType)(o);
        } catch {
          let t = C.get(e.uid);
          if (void 0 === t) {
            let r = await G();
            (t = "bigint" == typeof r?.baseFeePerGas), C.set(e.uid, t);
          }
          o.type = t ? "eip1559" : "legacy";
        }
      if (l.includes("fees"))
        if ("legacy" !== o.type && "eip2930" !== o.type) {
          if (void 0 === o.maxFeePerGas || void 0 === o.maxPriorityFeePerGas) {
            let t = await G(),
              { maxFeePerGas: r, maxPriorityFeePerGas: a } = await (0,
              f.internal_estimateFeesPerGas)(e, {
                block: t,
                chain: c,
                request: o,
              });
            if (
              void 0 === o.maxPriorityFeePerGas &&
              o.maxFeePerGas &&
              o.maxFeePerGas < a
            )
              throw new y.MaxFeePerGasTooLowError({ maxPriorityFeePerGas: a });
            (o.maxPriorityFeePerGas = a), (o.maxFeePerGas = r);
          }
        } else {
          if (void 0 !== o.maxFeePerGas || void 0 !== o.maxPriorityFeePerGas)
            throw new y.Eip1559FeesNotSupportedError();
          if (void 0 === o.gasPrice) {
            let t = await G(),
              { gasPrice: r } = await (0, f.internal_estimateFeesPerGas)(e, {
                block: t,
                chain: c,
                request: o,
                type: "legacy",
              });
            o.gasPrice = r;
          }
        }
      return (
        l.includes("gas") &&
          void 0 === B &&
          (o.gas = await (0, n.getAction)(
            e,
            S,
            "estimateGas"
          )({
            ...o,
            account: k,
            prepare: k?.type === "local" ? [] : ["blobVersionedHashes"],
          })),
        d?.fn &&
          d.runAt?.includes("afterFillParameters") &&
          (o = await d.fn(
            { ...o, chain: c },
            { client: e, phase: "afterFillParameters" }
          )),
        (0, p.assertRequest)(o),
        delete o.parameters,
        o
      );
    }
    async function S(e, r) {
      let { account: a = e.account, prepare: n = !0 } = r,
        f = a ? (0, t.parseAccount)(a) : void 0,
        m = Array.isArray(n)
          ? n
          : f?.type !== "local"
          ? ["blobVersionedHashes"]
          : void 0;
      try {
        let t = await (async () =>
            r.to
              ? r.to
              : r.authorizationList && r.authorizationList.length > 0
              ? await (0, o.recoverAuthorizationAddress)({
                  authorization: r.authorizationList[0],
                }).catch(() => {
                  throw new i.BaseError(
                    "`to` is required. Could not infer from `authorizationList`"
                  );
                })
              : void 0)(),
          {
            accessList: a,
            authorizationList: c,
            blobs: h,
            blobVersionedHashes: y,
            blockNumber: w,
            blockTag: g,
            data: b,
            gas: v,
            gasPrice: E,
            maxFeePerBlobGas: T,
            maxFeePerGas: A,
            maxPriorityFeePerGas: x,
            nonce: P,
            value: C,
            stateOverride: R,
            ...S
          } = n ? await k(e, { ...r, parameters: m, to: t }) : r;
        if (v && r.gas !== v) return v;
        let F = ("bigint" == typeof w ? (0, s.numberToHex)(w) : void 0) || g,
          I = (0, d.serializeStateOverride)(R);
        (0, p.assertRequest)(r);
        let N = e.chain?.formatters?.transactionRequest?.format,
          B = (N || l.formatTransactionRequest)(
            {
              ...(0, u.extract)(S, { format: N }),
              account: f,
              accessList: a,
              authorizationList: c,
              blobs: h,
              blobVersionedHashes: y,
              data: b,
              gasPrice: E,
              maxFeePerBlobGas: T,
              maxFeePerGas: A,
              maxPriorityFeePerGas: x,
              nonce: P,
              to: t,
              value: C,
            },
            "estimateGas"
          );
        return BigInt(
          await e.request({
            method: "eth_estimateGas",
            params: I
              ? [B, F ?? e.experimental_blockTag ?? "latest", I]
              : F
              ? [B, F]
              : [B],
          })
        );
      } catch (t) {
        throw (0, c.getEstimateGasError)(t, {
          ...r,
          account: f,
          chain: e.chain,
        });
      }
    }
    async function F(e, i) {
      let {
          abi: o,
          address: s,
          args: c,
          functionName: u,
          dataSuffix: l = "string" == typeof e.dataSuffix
            ? e.dataSuffix
            : e.dataSuffix?.value,
          ...d
        } = i,
        p = (0, r.encodeFunctionData)({ abi: o, args: c, functionName: u });
      try {
        return await (0, n.getAction)(
          e,
          S,
          "estimateGas"
        )({ data: `${p}${l ? l.replace("0x", "") : ""}`, to: s, ...d });
      } catch (r) {
        let e = d.account ? (0, t.parseAccount)(d.account) : void 0;
        throw (0, a.getContractError)(r, {
          abi: o,
          address: s,
          args: c,
          docsPath: "/docs/contract/estimateContractGas",
          functionName: u,
          sender: e?.address,
        });
      }
    }
    e.s(["estimateContractGas", () => F], 369121);
    var I = e.i(600547),
      N = e.i(989509);
    async function B(e, i) {
      let {
          abi: o,
          address: s,
          args: c,
          functionName: u,
          dataSuffix: l = "string" == typeof e.dataSuffix
            ? e.dataSuffix
            : e.dataSuffix?.value,
          ...d
        } = i,
        p = d.account ? (0, t.parseAccount)(d.account) : e.account,
        f = (0, r.encodeFunctionData)({ abi: o, args: c, functionName: u });
      try {
        let { data: t } = await (0, n.getAction)(
            e,
            N.call,
            "call"
          )({
            batch: !1,
            data: `${f}${l ? l.replace("0x", "") : ""}`,
            to: s,
            ...d,
            account: p,
          }),
          r = (0, I.decodeFunctionResult)({
            abi: o,
            args: c,
            functionName: u,
            data: t || "0x",
          }),
          a = o.filter((e) => "name" in e && e.name === i.functionName);
        return {
          result: r,
          request: {
            abi: a,
            address: s,
            args: c,
            dataSuffix: l,
            functionName: u,
            ...d,
            account: p,
          },
        };
      } catch (e) {
        throw (0, a.getContractError)(e, {
          abi: o,
          address: s,
          args: c,
          docsPath: "/docs/contract/simulateContract",
          functionName: u,
          sender: p?.address,
        });
      }
    }
    e.s(["simulateContract", () => B], 106145);
  },
  938630,
  942305,
  638291,
  888794,
  668375,
  (e) => {
    "use strict";
    var t = e.i(189991),
      r = e.i(611573),
      a = e.i(656679),
      n = e.i(807749),
      i = e.i(467125),
      o = e.i(569934),
      s = e.i(290392),
      c = e.i(505880);
    function u({ chain: e, currentChainId: t }) {
      if (!e) throw new c.ChainNotFoundError();
      if (t !== e.id)
        throw new c.ChainMismatchError({ chain: e, currentChainId: t });
    }
    e.s(["assertCurrentChain", () => u], 942305);
    var l = e.i(147526),
      d = e.i(10725),
      p = e.i(264404),
      f = e.i(190521),
      m = e.i(976677),
      h = e.i(353464),
      y = e.i(975948),
      w = e.i(368941);
    async function g(e, { serializedTransaction: t }) {
      return e.request(
        { method: "eth_sendRawTransaction", params: [t] },
        { retryCount: 0 }
      );
    }
    e.s(["sendRawTransaction", () => g], 638291);
    let b = new m.LruMap(128);
    async function v(e, a) {
      let n,
        {
          account: c = e.account,
          assertChainId: m = !0,
          chain: v = e.chain,
          accessList: E,
          authorizationList: T,
          blobs: A,
          data: x,
          dataSuffix: P = "string" == typeof e.dataSuffix
            ? e.dataSuffix
            : e.dataSuffix?.value,
          gas: C,
          gasPrice: R,
          maxFeePerBlobGas: k,
          maxFeePerGas: S,
          maxPriorityFeePerGas: F,
          nonce: I,
          type: N,
          value: B,
          ...q
        } = a;
      if (void 0 === c)
        throw new r.AccountNotFoundError({
          docsPath: "/docs/actions/wallet/sendTransaction",
        });
      let M = c ? (0, t.parseAccount)(c) : null;
      try {
        (0, h.assertRequest)(a);
        let t = await (async () =>
          a.to
            ? a.to
            : null !== a.to && T && T.length > 0
            ? await (0, s.recoverAuthorizationAddress)({
                authorization: T[0],
              }).catch(() => {
                throw new o.BaseError(
                  "`to` is required. Could not infer from `authorizationList`."
                );
              })
            : void 0)();
        if (M?.type === "json-rpc" || null === M) {
          let r;
          null !== v &&
            ((r = await (0, i.getAction)(e, y.getChainId, "getChainId")({})),
            m && u({ currentChainId: r, chain: v }));
          let a = e.chain?.formatters?.transactionRequest?.format,
            n = (a || f.formatTransactionRequest)(
              {
                ...(0, p.extract)(q, { format: a }),
                accessList: E,
                account: M,
                authorizationList: T,
                blobs: A,
                chainId: r,
                data: P ? (0, l.concat)([x ?? "0x", P]) : x,
                gas: C,
                gasPrice: R,
                maxFeePerBlobGas: k,
                maxFeePerGas: S,
                maxPriorityFeePerGas: F,
                nonce: I,
                to: t,
                type: N,
                value: B,
              },
              "sendTransaction"
            ),
            o = b.get(e.uid);
          try {
            return await e.request(
              {
                method: o ? "wallet_sendTransaction" : "eth_sendTransaction",
                params: [n],
              },
              { retryCount: 0 }
            );
          } catch (t) {
            if (!1 === o) throw t;
            if (
              "InvalidInputRpcError" === t.name ||
              "InvalidParamsRpcError" === t.name ||
              "MethodNotFoundRpcError" === t.name ||
              "MethodNotSupportedRpcError" === t.name
            )
              return await e
                .request(
                  { method: "wallet_sendTransaction", params: [n] },
                  { retryCount: 0 }
                )
                .then((t) => (b.set(e.uid, !0), t))
                .catch((r) => {
                  if (
                    "MethodNotFoundRpcError" === r.name ||
                    "MethodNotSupportedRpcError" === r.name
                  )
                    throw (b.set(e.uid, !1), t);
                  throw r;
                });
            throw t;
          }
        }
        if (M?.type === "local") {
          if (M.nonceManager && void 0 === I) {
            let t = q.chainId,
              r = await (async () =>
                "number" == typeof t
                  ? t
                  : v
                  ? v.id
                  : (0, i.getAction)(e, y.getChainId, "getChainId")({}))();
            n = { address: M.address, chainId: r };
          }
          let r = await (0, i.getAction)(
              e,
              w.prepareTransactionRequest,
              "prepareTransactionRequest"
            )({
              account: M,
              accessList: E,
              authorizationList: T,
              blobs: A,
              chain: v,
              data: P ? (0, l.concat)([x ?? "0x", P]) : x,
              gas: C,
              gasPrice: R,
              maxFeePerBlobGas: k,
              maxFeePerGas: S,
              maxPriorityFeePerGas: F,
              nonce: I,
              nonceManager: M.nonceManager,
              parameters: [...w.defaultParameters, "sidecars"],
              type: N,
              value: B,
              ...q,
              to: t,
            }),
            a = v?.serializers?.transaction,
            o = await M.signTransaction(r, { serializer: a });
          return await (0, i.getAction)(
            e,
            g,
            "sendRawTransaction"
          )({ serializedTransaction: o });
        }
        if (M?.type === "smart")
          throw new r.AccountTypeNotSupportedError({
            metaMessages: [
              "Consider using the `sendUserOperation` Action instead.",
            ],
            docsPath: "/docs/actions/bundler/sendUserOperation",
            type: "smart",
          });
        throw new r.AccountTypeNotSupportedError({
          docsPath: "/docs/actions/wallet/sendTransaction",
          type: M?.type,
        });
      } catch (e) {
        if (e instanceof r.AccountTypeNotSupportedError) throw e;
        throw (
          (n && M?.nonceManager?.reset(n),
          (0, d.getTransactionError)(e, {
            ...a,
            account: M,
            chain: a.chain || void 0,
          }))
        );
      }
    }
    async function E(e, t) {
      return E.internal(e, v, "sendTransaction", t);
    }
    e.s(["sendTransaction", () => v], 888794),
      ((E || (E = {})).internal = async function (e, o, s, c) {
        let {
          abi: u,
          account: l = e.account,
          address: d,
          args: p,
          functionName: f,
          ...m
        } = c;
        if (void 0 === l)
          throw new r.AccountNotFoundError({
            docsPath: "/docs/contract/writeContract",
          });
        let h = l ? (0, t.parseAccount)(l) : null,
          y = (0, a.encodeFunctionData)({ abi: u, args: p, functionName: f });
        try {
          return await (0, i.getAction)(
            e,
            o,
            s
          )({ data: y, to: d, account: h, ...m });
        } catch (e) {
          throw (0, n.getContractError)(e, {
            abi: u,
            address: d,
            args: p,
            docsPath: "/docs/contract/writeContract",
            functionName: f,
            sender: h?.address,
          });
        }
      }),
      e.s(["writeContract", () => E], 938630);
    var T = o;
    class A extends T.BaseError {
      constructor({ value: e }) {
        super(`Number \`${e}\` is not a valid decimal number.`, {
          name: "InvalidDecimalNumberError",
        });
      }
    }
    function x(e, t) {
      if (!/^(-?)([0-9]*)\.?([0-9]*)$/.test(e)) throw new A({ value: e });
      let [r, a = "0"] = e.split("."),
        n = r.startsWith("-");
      if ((n && (r = r.slice(1)), (a = a.replace(/(0+)$/, "")), 0 === t))
        1 === Math.round(Number(`.${a}`)) && (r = `${BigInt(r) + 1n}`),
          (a = "");
      else if (a.length > t) {
        let [e, n, i] = [a.slice(0, t - 1), a.slice(t - 1, t), a.slice(t)],
          o = Math.round(Number(`${n}.${i}`));
        (a =
          o > 9
            ? `${BigInt(e) + BigInt(1)}0`.padStart(e.length + 1, "0")
            : `${e}${o}`).length > t &&
          ((a = a.slice(1)), (r = `${BigInt(r) + 1n}`)),
          (a = a.slice(0, t));
      } else a = a.padEnd(t, "0");
      return BigInt(`${n ? "-" : ""}${r}${a}`);
    }
    e.s(["parseUnits", () => x], 668375);
  },
  767346,
  868750,
  (e) => {
    "use strict";
    var t = e.i(752012),
      r = e.i(897282),
      a = e.i(369121),
      n = e.i(106145),
      i = e.i(938630),
      o = e.i(796516),
      s = e.i(806685),
      c = e.i(656679),
      u = e.i(644616),
      l = e.i(668375),
      d = e.i(388750);
    function p(e, t) {
      return { amount: e, decimals: t, formatted: (0, u.formatUnits)(e, t) };
    }
    function f(e, t) {
      if ("bigint" == typeof e) return e;
      let r = e.decimals ?? t;
      return (0, l.parseUnits)(
        e.formatted,
        (function (e) {
          if (void 0 === e)
            throw Error(
              "Token decimals are required. Pass `amount.decimals` or select a declared token."
            );
          return e;
        })(r)
      );
    }
    function m(e, t) {
      return "bigint" == typeof e ? t : e.decimals ?? t;
    }
    function h(e, t) {
      let { decimals: r, token: a } = t,
        n = y(e, a);
      if (n) return { address: n.address, decimals: r ?? n.decimals };
      if ((0, o.isAddress)(a, { strict: !1 }))
        return {
          address: a,
          decimals:
            r ??
            (function (e, t) {
              let r = e.tokens,
                a = e.chain?.id;
              if (r && void 0 !== a)
                for (let e of r) {
                  let r = w(e, a);
                  if (r && (0, s.isAddressEqual)(r.address, t))
                    return r.decimals;
                }
            })(e, a),
        };
      throw Error(
        `Token "${a}" is not a declared ERC-20 token on the client's \`tokens\` array (with an address for the client's chain), and is not a valid address.`
      );
    }
    function y(e, t) {
      let r = e.tokens,
        a = e.chain?.id;
      if (!r || void 0 === a) return;
      let n = (function (e, t) {
        let r = t.toLowerCase();
        for (let t of e) if (t.symbol?.toLowerCase() === r) return t;
      })(r, t);
      if (n) return w(n, a);
      if ((0, o.isAddress)(t, { strict: !1 }))
        for (let e of r) {
          let r = w(e, a);
          if (r && (0, s.isAddressEqual)(r.address, t)) return r;
        }
    }
    function w(e, t) {
      let r = e.addresses[t];
      if (r)
        return {
          address: r,
          currency: e.currency,
          decimals: e.decimals,
          name: e.name,
          popular: e.popular,
          symbol: e.symbol,
        };
    }
    async function g(e, r) {
      let { address: a, decimals: n } = h(e, r);
      return void 0 !== n
        ? { address: a, decimals: n }
        : {
            address: a,
            decimals: await (0, d.readContract)(e, {
              abi: t.erc20Abi,
              address: a,
              functionName: "decimals",
            }),
          };
    }
    function b(e) {
      let {
        account: t,
        chain: r,
        gas: a,
        maxFeePerGas: n,
        maxPriorityFeePerGas: i,
        nonce: o,
      } = e;
      return {
        account: t,
        chain: r,
        gas: a,
        maxFeePerGas: n,
        maxPriorityFeePerGas: i,
        nonce: o,
      };
    }
    function v(e) {
      return { ...e, data: (0, c.encodeFunctionData)(e), to: e.address };
    }
    async function E(e, t) {
      return E.inner(i.writeContract, e, t);
    }
    e.s(
      [
        "defineCall",
        () => v,
        "findDeclaredToken",
        () => y,
        "pickWriteParameters",
        () => b,
        "resolveAmountDecimals",
        () => m,
        "resolveToken",
        () => h,
        "resolveTokenWithDecimals",
        () => g,
        "toAmount",
        () => p,
        "toBaseUnits",
        () => f,
      ],
      868750
    ),
      (function (e) {
        async function i(t, r, a) {
          return await t(r, { ...a, ...e.call(r, a) });
        }
        async function o(t, r) {
          return (0, a.estimateContractGas)(t, { ...b(r), ...e.call(t, r) });
        }
        async function s(t, r) {
          return (0, n.simulateContract)(t, { ...b(r), ...e.call(t, r) });
        }
        (e.inner = i),
          (e.call = function (e, r) {
            return v(
              (function (e, r) {
                let { amount: a, spender: n, token: i } = r,
                  { address: o, decimals: s } = h(e, { token: i });
                return {
                  abi: t.erc20Abi,
                  address: o,
                  args: [n, f(a, s)],
                  functionName: "approve",
                };
              })(e, r)
            );
          }),
          (e.estimateGas = o),
          (e.simulate = s),
          (e.extractEvent = function (e) {
            let [a] = (0, r.parseEventLogs)({
              abi: t.erc20Abi,
              logs: e,
              eventName: "Approval",
              strict: !0,
            });
            if (!a) throw Error("`Approval` event not found.");
            return a;
          });
      })(E || (E = {})),
      e.s(["approve", () => E], 767346);
  },
  204202,
  579917,
  568307,
  (e) => {
    "use strict";
    var t = e.i(363710),
      r = e.i(588233);
    function a(
      e,
      {
        delay: n = 100,
        retryCount: i = 2,
        shouldRetry: o = () => !0,
        signal: s,
      } = {}
    ) {
      return new Promise((a, c) => {
        let u = async ({ count: l = 0 } = {}) => {
          if (s?.aborted) return void c((0, t.getAbortError)(s));
          let d = async ({ error: e }) => {
            let t = "function" == typeof n ? n({ count: l, error: e }) : n;
            if (t)
              try {
                await (0, r.wait)(t, { signal: s });
              } catch (e) {
                c(e);
                return;
              }
            u({ count: l + 1 });
          };
          try {
            let t = await e();
            a(t);
          } catch (e) {
            if (s?.aborted) return void c((0, t.getAbortError)(s));
            if ((0, t.isAbortError)(e)) return void c(e);
            if (l < i && (await o({ count: l, error: e })))
              return d({ error: e });
            c(e);
          }
        };
        u();
      });
    }
    e.s(["withRetry", () => a], 204202);
    var n = e.i(393702),
      i = e.i(675107),
      o = e.i(982191);
    async function s(
      e,
      {
        blockHash: t,
        blockNumber: r,
        blockTag: a,
        hash: s,
        index: c,
        sender: u,
        nonce: l,
      }
    ) {
      let d = a || "latest",
        p = void 0 !== r ? (0, i.numberToHex)(r) : void 0,
        f = null;
      if (
        (s
          ? (f = await e.request(
              { method: "eth_getTransactionByHash", params: [s] },
              { dedupe: !0 }
            ))
          : t
          ? (f = await e.request(
              {
                method: "eth_getTransactionByBlockHashAndIndex",
                params: [t, (0, i.numberToHex)(c)],
              },
              { dedupe: !0 }
            ))
          : (p || d) && "number" == typeof c
          ? (f = await e.request(
              {
                method: "eth_getTransactionByBlockNumberAndIndex",
                params: [p || d, (0, i.numberToHex)(c)],
              },
              { dedupe: !!p }
            ))
          : u &&
            "number" == typeof l &&
            (f = await e.request(
              {
                method: "eth_getTransactionBySenderAndNonce",
                params: [u, (0, i.numberToHex)(l)],
              },
              { dedupe: !0 }
            )),
        !f)
      )
        throw new n.TransactionNotFoundError({
          blockHash: t,
          blockNumber: r,
          blockTag: d,
          hash: s,
          index: c,
        });
      return (e.chain?.formatters?.transaction?.format || o.formatTransaction)(
        f,
        "getTransaction"
      );
    }
    e.s(["getTransaction", () => s], 579917);
    var c = e.i(839080);
    async function u(e, { hash: t }) {
      let r = await e.request(
        { method: "eth_getTransactionReceipt", params: [t] },
        { dedupe: !0 }
      );
      if (!r) throw new n.TransactionReceiptNotFoundError({ hash: t });
      return (
        e.chain?.formatters?.transactionReceipt?.format ||
        c.formatTransactionReceipt
      )(r, "getTransactionReceipt");
    }
    e.s(["getTransactionReceipt", () => u], 568307);
  },
  127793,
  712371,
  127465,
  948789,
  738977,
  385421,
  696793,
  276761,
  734650,
  492975,
  996980,
  450689,
  460841,
  509916,
  477480,
  916207,
  (e) => {
    "use strict";
    var t = e.i(644616),
      r = e.i(189991),
      a = e.i(611573),
      n = e.i(569934),
      i = e.i(393702),
      o = e.i(290392),
      s = e.i(942305),
      c = e.i(147526),
      u = e.i(10725),
      l = e.i(264404),
      d = e.i(190521),
      p = e.i(467125),
      f = e.i(976677),
      m = e.i(353464),
      h = e.i(975948),
      y = e.i(57351),
      w = e.i(43473),
      g = e.i(509486),
      b = e.i(204202),
      v = e.i(34888),
      E = e.i(915588),
      T = e.i(579917),
      A = e.i(568307),
      x = e.i(450323),
      P = e.i(976215);
    let C = new Map(),
      R = new Map();
    async function k(e, { cacheKey: t, cacheTime: r = 1 / 0 }) {
      let a,
        n,
        i,
        o =
          ((n = (a = (e, t) => ({
            clear: () => t.delete(e),
            get: () => t.get(e),
            set: (r) => t.set(e, r),
          }))(t, C)),
          {
            clear: () => {
              n.clear(), i.clear();
            },
            promise: n,
            response: (i = a(t, R)),
          }),
        s = o.response.get();
      if (s && r > 0 && Date.now() - s.created.getTime() < r) return s.data;
      let c = o.promise.get();
      c || ((c = e()), o.promise.set(c));
      try {
        let e = await c;
        return o.response.set({ created: new Date(), data: e }), e;
      } finally {
        o.promise.clear();
      }
    }
    async function S(e, { cacheTime: t = e.cacheTime } = {}) {
      let r;
      return BigInt(
        await k(() => e.request({ method: "eth_blockNumber" }), {
          cacheKey: ((r = e.uid), `blockNumber.${r}`),
          cacheTime: t,
        })
      );
    }
    function F(
      e,
      {
        emitOnBegin: t = !1,
        emitMissed: r = !1,
        onBlockNumber: a,
        onError: n,
        poll: i,
        pollingInterval: o = e.pollingInterval,
      }
    ) {
      let s, c, u;
      return (
        void 0 !== i
          ? i
          : "webSocket" !== e.transport.type &&
            "ipc" !== e.transport.type &&
            ("fallback" !== e.transport.type ||
              ("webSocket" !== e.transport.transports[0].config.type &&
                "ipc" !== e.transport.transports[0].config.type))
      )
        ? ((c = (0, v.stringify)(["watchBlockNumber", e.uid, t, r, o])),
          (0, w.observe)(c, { onBlockNumber: a, onError: n }, (a) =>
            (0, P.poll)(
              async () => {
                try {
                  let t = await (0, p.getAction)(
                    e,
                    S,
                    "getBlockNumber"
                  )({ cacheTime: 0 });
                  if (void 0 !== s) {
                    if (t === s) return;
                    if (t - s > 1 && r)
                      for (let e = s + 1n; e < t; e++)
                        a.onBlockNumber(e, s), (s = e);
                  }
                  (void 0 === s || t > s) && (a.onBlockNumber(t, s), (s = t));
                } catch (e) {
                  a.onError?.(e);
                }
              },
              { emitOnBegin: t, interval: o }
            )
          ))
        : ((u = (0, v.stringify)(["watchBlockNumber", e.uid, t, r])),
          (0, w.observe)(u, { onBlockNumber: a, onError: n }, (t) => {
            let r = !0,
              a = () => (r = !1);
            return (
              (async () => {
                try {
                  let n = (() => {
                      if ("fallback" === e.transport.type) {
                        let t = e.transport.transports.find(
                          (e) =>
                            "webSocket" === e.config.type ||
                            "ipc" === e.config.type
                        );
                        return t ? t.value : e.transport;
                      }
                      return e.transport;
                    })(),
                    { unsubscribe: i } = await n.subscribe({
                      params: ["newHeads"],
                      onData(e) {
                        if (!r) return;
                        let a = (0, x.hexToBigInt)(e.result?.number);
                        t.onBlockNumber(a, s), (s = a);
                      },
                      onError(e) {
                        t.onError?.(e);
                      },
                    });
                  (a = i), r || a();
                } catch (e) {
                  n?.(e);
                }
              })(),
              () => a()
            );
          }));
    }
    async function I(e, t) {
      let r,
        a,
        n,
        o,
        s,
        {
          checkReplacement: c = e.chain
            ?.supportsTransactionReplacementDetection ?? !0,
          confirmations: u = 1,
          hash: l,
          onReplaced: d,
          retryCount: f = 6,
          retryDelay: m = ({ count: e }) => 200 * ~~(1 << e),
          timeout: h = 18e4,
        } = t,
        x = (0, v.stringify)(["waitForTransactionReceipt", e.uid, l]),
        P = t.pollingInterval
          ? t.pollingInterval
          : e.chain?.experimental_preconfirmationTime
          ? e.chain.experimental_preconfirmationTime
          : e.pollingInterval,
        C = !1,
        { promise: R, resolve: k, reject: S } = (0, g.withResolvers)(),
        I = h
          ? setTimeout(() => {
              s?.(),
                o?.(),
                S(new i.WaitForTransactionReceiptTimeoutError({ hash: l }));
            }, h)
          : void 0;
      return (
        (o = (0, w.observe)(
          x,
          { onReplaced: d, resolve: k, reject: S },
          async (t) => {
            if (
              (n = await (0, p.getAction)(
                e,
                A.getTransactionReceipt,
                "getTransactionReceipt"
              )({ hash: l }).catch(() => void 0)) &&
              u <= 1
            ) {
              clearTimeout(I), t.resolve(n), o?.();
              return;
            }
            s = (0, p.getAction)(
              e,
              F,
              "watchBlockNumber"
            )({
              emitMissed: !0,
              emitOnBegin: !0,
              poll: !0,
              pollingInterval: P,
              async onBlockNumber(d) {
                let h = (e) => {
                    clearTimeout(I), s?.(), e(), o?.();
                  },
                  w = d;
                if (!C)
                  try {
                    if (n) {
                      if (
                        u > 1 &&
                        (!n.blockNumber || w - n.blockNumber + 1n < u)
                      )
                        return;
                      h(() => t.resolve(n));
                      return;
                    }
                    if (
                      (c &&
                        !r &&
                        ((C = !0),
                        await (0, b.withRetry)(
                          async () => {
                            (r = await (0, p.getAction)(
                              e,
                              T.getTransaction,
                              "getTransaction"
                            )({ hash: l })).blockNumber && (w = r.blockNumber);
                          },
                          { delay: m, retryCount: f }
                        ),
                        (C = !1)),
                      (n = await (0, p.getAction)(
                        e,
                        A.getTransactionReceipt,
                        "getTransactionReceipt"
                      )({ hash: l })),
                      u > 1 && (!n.blockNumber || w - n.blockNumber + 1n < u))
                    )
                      return;
                    h(() => t.resolve(n));
                  } catch (o) {
                    if (
                      o instanceof i.TransactionNotFoundError ||
                      o instanceof i.TransactionReceiptNotFoundError
                    ) {
                      if (!r) {
                        C = !1;
                        return;
                      }
                      try {
                        (a = r), (C = !0);
                        let i = await (0, b.withRetry)(
                          () =>
                            (0, p.getAction)(
                              e,
                              E.getBlock,
                              "getBlock"
                            )({ blockNumber: w, includeTransactions: !0 }),
                          {
                            delay: m,
                            retryCount: f,
                            shouldRetry: ({ error: e }) =>
                              e instanceof y.BlockNotFoundError,
                          }
                        );
                        C = !1;
                        let o = i.transactions.find(
                          ({ from: e, nonce: t }) =>
                            e === a.from && t === a.nonce
                        );
                        if (
                          !o ||
                          ((n = await (0, p.getAction)(
                            e,
                            A.getTransactionReceipt,
                            "getTransactionReceipt"
                          )({ hash: o.hash })),
                          u > 1 &&
                            (!n.blockNumber || w - n.blockNumber + 1n < u))
                        )
                          return;
                        let s = "replaced";
                        o.to === a.to &&
                        o.value === a.value &&
                        o.input === a.input
                          ? (s = "repriced")
                          : o.from === o.to &&
                            0n === o.value &&
                            (s = "cancelled"),
                          h(() => {
                            t.onReplaced?.({
                              reason: s,
                              replacedTransaction: a,
                              transaction: o,
                              transactionReceipt: n,
                            }),
                              t.resolve(n);
                          });
                      } catch (e) {
                        h(() => t.reject(e));
                      }
                    } else h(() => t.reject(o));
                  }
              },
            });
          }
        )),
        R
      );
    }
    e.s(["getBlockNumber", () => S], 712371),
      e.s(["watchBlockNumber", () => F], 127465),
      e.s(["waitForTransactionReceipt", () => I], 948789);
    var N = e.i(368941),
      B = e.i(839080);
    async function q(
      e,
      { serializedTransaction: t, throwOnReceiptRevert: r, timeout: a }
    ) {
      let n = await e.request(
          { method: "eth_sendRawTransactionSync", params: a ? [t, a] : [t] },
          { retryCount: 0 }
        ),
        o = (
          e.chain?.formatters?.transactionReceipt?.format ||
          B.formatTransactionReceipt
        )(n);
      if ("reverted" === o.status && r)
        throw new i.TransactionReceiptRevertedError({ receipt: o });
      return o;
    }
    e.s(["sendRawTransactionSync", () => q], 738977);
    let M = new f.LruMap(128);
    async function G(e, t) {
      let f,
        {
          account: y = e.account,
          assertChainId: w = !0,
          chain: g = e.chain,
          accessList: b,
          authorizationList: v,
          blobs: E,
          data: T,
          dataSuffix: A = "string" == typeof e.dataSuffix
            ? e.dataSuffix
            : e.dataSuffix?.value,
          gas: x,
          gasPrice: P,
          maxFeePerBlobGas: C,
          maxFeePerGas: R,
          maxPriorityFeePerGas: k,
          nonce: S,
          pollingInterval: F,
          throwOnReceiptRevert: B,
          type: G,
          value: D,
          ...z
        } = t,
        _ = t.timeout ?? Math.max((g?.blockTime ?? 0) * 3, 5e3);
      if (void 0 === y)
        throw new a.AccountNotFoundError({
          docsPath: "/docs/actions/wallet/sendTransactionSync",
        });
      let H = y ? (0, r.parseAccount)(y) : null;
      try {
        (0, m.assertRequest)(t);
        let r = await (async () =>
          t.to
            ? t.to
            : null !== t.to && v && v.length > 0
            ? await (0, o.recoverAuthorizationAddress)({
                authorization: v[0],
              }).catch(() => {
                throw new n.BaseError(
                  "`to` is required. Could not infer from `authorizationList`."
                );
              })
            : void 0)();
        if (H?.type === "json-rpc" || null === H) {
          let t;
          null !== g &&
            ((t = await (0, p.getAction)(e, h.getChainId, "getChainId")({})),
            w && (0, s.assertCurrentChain)({ currentChainId: t, chain: g }));
          let a = e.chain?.formatters?.transactionRequest?.format,
            n = (a || d.formatTransactionRequest)(
              {
                ...(0, l.extract)(z, { format: a }),
                accessList: b,
                account: H,
                authorizationList: v,
                blobs: E,
                chainId: t,
                data: A ? (0, c.concat)([T ?? "0x", A]) : T,
                gas: x,
                gasPrice: P,
                maxFeePerBlobGas: C,
                maxFeePerGas: R,
                maxPriorityFeePerGas: k,
                nonce: S,
                to: r,
                type: G,
                value: D,
              },
              "sendTransaction"
            ),
            o = M.get(e.uid),
            u = o ? "wallet_sendTransaction" : "eth_sendTransaction",
            f = await (async () => {
              try {
                return await e.request(
                  { method: u, params: [n] },
                  { retryCount: 0 }
                );
              } catch (t) {
                if (!1 === o) throw t;
                if (
                  "InvalidInputRpcError" === t.name ||
                  "InvalidParamsRpcError" === t.name ||
                  "MethodNotFoundRpcError" === t.name ||
                  "MethodNotSupportedRpcError" === t.name
                )
                  return await e
                    .request(
                      { method: "wallet_sendTransaction", params: [n] },
                      { retryCount: 0 }
                    )
                    .then((t) => (M.set(e.uid, !0), t))
                    .catch((r) => {
                      if (
                        "MethodNotFoundRpcError" === r.name ||
                        "MethodNotSupportedRpcError" === r.name
                      )
                        throw (M.set(e.uid, !1), t);
                      throw r;
                    });
                throw t;
              }
            })(),
            m = await (0, p.getAction)(
              e,
              I,
              "waitForTransactionReceipt"
            )({
              checkReplacement: !1,
              hash: f,
              pollingInterval: F,
              timeout: _,
            });
          if (B && "reverted" === m.status)
            throw new i.TransactionReceiptRevertedError({ receipt: m });
          return m;
        }
        if (H?.type === "local") {
          if (H.nonceManager && void 0 === S) {
            let t = z.chainId,
              r = await (async () =>
                "number" == typeof t
                  ? t
                  : g
                  ? g.id
                  : (0, p.getAction)(e, h.getChainId, "getChainId")({}))();
            f = { address: H.address, chainId: r };
          }
          let a = await (0, p.getAction)(
              e,
              N.prepareTransactionRequest,
              "prepareTransactionRequest"
            )({
              account: H,
              accessList: b,
              authorizationList: v,
              blobs: E,
              chain: g,
              data: A ? (0, c.concat)([T ?? "0x", A]) : T,
              gas: x,
              gasPrice: P,
              maxFeePerBlobGas: C,
              maxFeePerGas: R,
              maxPriorityFeePerGas: k,
              nonce: S,
              nonceManager: H.nonceManager,
              parameters: [...N.defaultParameters, "sidecars"],
              type: G,
              value: D,
              ...z,
              to: r,
            }),
            n = g?.serializers?.transaction,
            i = await H.signTransaction(a, { serializer: n });
          return await (0, p.getAction)(
            e,
            q,
            "sendRawTransactionSync"
          )({
            serializedTransaction: i,
            throwOnReceiptRevert: B,
            timeout: t.timeout,
          });
        }
        if (H?.type === "smart")
          throw new a.AccountTypeNotSupportedError({
            metaMessages: [
              "Consider using the `sendUserOperation` Action instead.",
            ],
            docsPath: "/docs/actions/bundler/sendUserOperation",
            type: "smart",
          });
        throw new a.AccountTypeNotSupportedError({
          docsPath: "/docs/actions/wallet/sendTransactionSync",
          type: H?.type,
        });
      } catch (e) {
        if (e instanceof a.AccountTypeNotSupportedError) throw e;
        throw (
          (!f ||
            e instanceof i.TransactionReceiptRevertedError ||
            H?.nonceManager?.reset(f),
          (0, u.getTransactionError)(e, {
            ...t,
            account: H,
            chain: t.chain || void 0,
          }))
        );
      }
    }
    e.s(["sendTransactionSync", () => G], 385421);
    var D = e.i(938630);
    async function z(e, t) {
      return D.writeContract.internal(e, G, "sendTransactionSync", t);
    }
    e.s(["writeContractSync", () => z], 696793);
    var _ = e.i(767346),
      H = e.i(868750);
    async function $(e, r) {
      let { amount: a, token: n, throwOnReceiptRevert: i = !0 } = r,
        { decimals: o } = (0, H.resolveToken)(e, { token: n }),
        s = (0, H.resolveAmountDecimals)(a, o),
        c = await _.approve.inner(z, e, { ...r, throwOnReceiptRevert: i }),
        { args: u } = _.approve.extractEvent(c.logs);
      return {
        ...u,
        ...(void 0 === s
          ? {}
          : { decimals: s, formatted: (0, t.formatUnits)(u.value, s) }),
        receipt: c,
      };
    }
    e.s(["approveSync", () => $], 127793);
    var U = e.i(752012),
      L = e.i(897282),
      O = e.i(369121),
      j = e.i(106145);
    async function W(e, t) {
      return W.inner(D.writeContract, e, t);
    }
    async function V(e, r) {
      let { amount: a, token: n, throwOnReceiptRevert: i = !0 } = r,
        { decimals: o } = (0, H.resolveToken)(e, { token: n }),
        s = (0, H.resolveAmountDecimals)(a, o),
        c = await W.inner(z, e, { ...r, throwOnReceiptRevert: i }),
        { args: u } = W.extractEvent(c.logs);
      return {
        ...u,
        ...(void 0 === s
          ? {}
          : { decimals: s, formatted: (0, t.formatUnits)(u.value, s) }),
        receipt: c,
      };
    }
    !(function (e) {
      async function t(t, r, a) {
        return await t(r, { ...a, ...e.call(r, a) });
      }
      async function r(t, r) {
        return (0, O.estimateContractGas)(t, {
          ...(0, H.pickWriteParameters)(r),
          ...e.call(t, r),
        });
      }
      async function a(t, r) {
        return (0, j.simulateContract)(t, {
          ...(0, H.pickWriteParameters)(r),
          ...e.call(t, r),
        });
      }
      (e.inner = t),
        (e.call = function (e, t) {
          return (0, H.defineCall)(
            (function (e, t) {
              let { amount: r, from: a, to: n, token: i } = t,
                { address: o, decimals: s } = (0, H.resolveToken)(e, {
                  token: i,
                }),
                c = (0, H.toBaseUnits)(r, s);
              return a
                ? {
                    abi: U.erc20Abi,
                    address: o,
                    args: [a, n, c],
                    functionName: "transferFrom",
                  }
                : {
                    abi: U.erc20Abi,
                    address: o,
                    args: [n, c],
                    functionName: "transfer",
                  };
            })(e, t)
          );
        }),
        (e.estimateGas = r),
        (e.simulate = a),
        (e.extractEvent = function (e) {
          let [t] = (0, L.parseEventLogs)({
            abi: U.erc20Abi,
            logs: e,
            eventName: "Transfer",
            strict: !0,
          });
          if (!t) throw Error("`Transfer` event not found.");
          return t;
        });
    })(W || (W = {})),
      e.s(["transfer", () => W], 276761),
      e.s(["transferSync", () => V], 734650);
    var K = e.i(675107);
    async function J(e, { chain: t }) {
      let {
        id: r,
        name: a,
        nativeCurrency: n,
        rpcUrls: i,
        blockExplorers: o,
      } = t;
      await e.request(
        {
          method: "wallet_addEthereumChain",
          params: [
            {
              chainId: (0, K.numberToHex)(r),
              chainName: a,
              nativeCurrency: n,
              rpcUrls: i.default.http,
              blockExplorerUrls: o
                ? Object.values(o).map(({ url: e }) => e)
                : void 0,
            },
          ],
        },
        { dedupe: !0, retryCount: 0 }
      );
    }
    e.s(["addChain", () => J], 492975);
    var Z = e.i(289169),
      Q = e.i(888794);
    function X(e, t) {
      let { abi: r, args: a, bytecode: n, ...i } = t,
        o = (0, Z.encodeDeployData)({ abi: r, args: a, bytecode: n });
      return (0, Q.sendTransaction)(e, {
        ...i,
        ...(i.authorizationList ? { to: null } : {}),
        data: o,
      });
    }
    e.s(["deployContract", () => X], 996980);
    var Y = e.i(823838);
    async function ee(e) {
      return e.account?.type === "local"
        ? [e.account.address]
        : (await e.request({ method: "eth_accounts" }, { dedupe: !0 })).map(
            (e) => (0, Y.checksumAddress)(e)
          );
    }
    e.s(["getAddresses", () => ee], 450689);
    var et = e.i(790063),
      er = e.i(8406),
      ea = e.i(383856),
      en = e.i(656679);
    let ei =
        "0x5792579257925792579257925792579257925792579257925792579257925792",
      eo = (0, K.numberToHex)(0, { size: 32 });
    async function es(e, t) {
      let {
          account: a = e.account,
          chain: i = e.chain,
          experimental_fallback: o,
          experimental_fallbackDelay: s = 32,
          forceAtomic: l = !1,
          id: d,
          version: p = "2.0.0",
        } = t,
        f = a ? (0, r.parseAccount)(a) : null,
        m = t.capabilities;
      e.dataSuffix &&
        !t.capabilities?.dataSuffix &&
        (m =
          "string" == typeof e.dataSuffix
            ? {
                ...t.capabilities,
                dataSuffix: { value: e.dataSuffix, optional: !0 },
              }
            : {
                ...t.capabilities,
                dataSuffix: {
                  value: e.dataSuffix.value,
                  ...(e.dataSuffix.required ? {} : { optional: !0 }),
                },
              });
      let h = t.calls.map((e) => {
        let t = e.abi
          ? (0, en.encodeFunctionData)({
              abi: e.abi,
              functionName: e.functionName,
              args: e.args,
            })
          : e.data;
        return {
          data: e.dataSuffix && t ? (0, c.concat)([t, e.dataSuffix]) : t,
          to: e.to,
          value: e.value ? (0, K.numberToHex)(e.value) : void 0,
        };
      });
      try {
        let t = await e.request(
          {
            method: "wallet_sendCalls",
            params: [
              {
                atomicRequired: l,
                calls: h,
                capabilities: m,
                chainId: (0, K.numberToHex)(i.id),
                from: f?.address,
                id: d,
                version: p,
              },
            ],
          },
          { retryCount: 0 }
        );
        if ("string" == typeof t) return { id: t };
        return t;
      } catch (r) {
        if (
          o &&
          ("MethodNotFoundRpcError" === r.name ||
            "MethodNotSupportedRpcError" === r.name ||
            "UnknownRpcError" === r.name ||
            r.details
              .toLowerCase()
              .includes("does not exist / is not available") ||
            r.details.toLowerCase().includes("missing or invalid. request()") ||
            r.details
              .toLowerCase()
              .includes("did not match any variant of untagged enum") ||
            r.details
              .toLowerCase()
              .includes("account upgraded to unsupported contract") ||
            r.details.toLowerCase().includes("eip-7702 not supported") ||
            r.details.toLowerCase().includes("unsupported wc_ method") ||
            r.details.toLowerCase().includes("feature toggled misconfigured") ||
            r.details
              .toLowerCase()
              .includes(
                "jsonrpcengine: response has no error or result for request"
              ))
        ) {
          if (m && Object.values(m).some((e) => !e.optional)) {
            let e =
              "non-optional `capabilities` are not supported on fallback to `eth_sendTransaction`.";
            throw new ea.UnsupportedNonOptionalCapabilityError(
              new n.BaseError(e, { details: e })
            );
          }
          if (l && h.length > 1) {
            let e =
              "`forceAtomic` is not supported on fallback to `eth_sendTransaction`.";
            throw new ea.AtomicityNotSupportedError(
              new n.BaseError(e, { details: e })
            );
          }
          let t = [];
          for (let r of h) {
            try {
              let a = await (0, Q.sendTransaction)(e, {
                account: f,
                chain: i,
                data: r.data,
                to: r.to,
                value: r.value ? (0, x.hexToBigInt)(r.value) : void 0,
              });
              t.push({ status: "fulfilled", value: a });
            } catch (e) {
              t.push({ reason: e, status: "rejected" });
            }
            s > 0 && (await new Promise((e) => setTimeout(e, s)));
          }
          if (t.every((e) => "rejected" === e.status)) throw t[0].reason;
          let r = t.map((e) => ("fulfilled" === e.status ? e.value : eo));
          return {
            id: (0, c.concat)([
              ...r,
              (0, K.numberToHex)(i.id, { size: 32 }),
              ei,
            ]),
          };
        }
        throw (0, u.getTransactionError)(r, {
          ...t,
          account: f,
          chain: t.chain,
        });
      }
    }
    async function ec(e, t) {
      let r;
      async function a(t) {
        if (t.endsWith(ei.slice(2))) {
          let r = (0, er.trim)((0, et.sliceHex)(t, -64, -32)),
            a = (0, et.sliceHex)(t, 0, -64)
              .slice(2)
              .match(/.{1,64}/g),
            n = await Promise.all(
              a.map((t) =>
                eo.slice(2) !== t
                  ? e.request(
                      {
                        method: "eth_getTransactionReceipt",
                        params: [`0x${t}`],
                      },
                      { dedupe: !0 }
                    )
                  : void 0
              )
            ),
            i = n.some((e) => null === e)
              ? 100
              : n.every((e) => e?.status === "0x1")
              ? 200
              : n.every((e) => e?.status === "0x0")
              ? 500
              : 600;
          return {
            atomic: !1,
            chainId: (0, x.hexToNumber)(r),
            receipts: n.filter(Boolean),
            status: i,
            version: "2.0.0",
          };
        }
        return e.request({ method: "wallet_getCallsStatus", params: [t] });
      }
      let {
          atomic: n = !1,
          chainId: i,
          receipts: o,
          version: s = "2.0.0",
          ...c
        } = await a(t.id),
        [u, l] =
          (r = c.status) >= 100 && r < 200
            ? ["pending", r]
            : r >= 200 && r < 300
            ? ["success", r]
            : r >= 300 && r < 700
            ? ["failure", r]
            : "CONFIRMED" === r
            ? ["success", 200]
            : "PENDING" === r
            ? ["pending", 100]
            : [void 0, r];
      return {
        ...c,
        atomic: n,
        chainId: i ? (0, x.hexToNumber)(i) : void 0,
        receipts:
          o?.map((e) => ({
            ...e,
            blockNumber: (0, x.hexToBigInt)(e.blockNumber),
            gasUsed: (0, x.hexToBigInt)(e.gasUsed),
            status: B.receiptStatuses[e.status],
          })) ?? [],
        statusCode: l,
        status: u,
        version: s,
      };
    }
    async function eu(e, t = {}) {
      let { account: a = e.account, chainId: n } = t,
        i = a ? (0, r.parseAccount)(a) : void 0,
        o = n ? [i?.address, [(0, K.numberToHex)(n)]] : [i?.address],
        s = await e.request({ method: "wallet_getCapabilities", params: o }),
        c = {};
      for (let [e, t] of Object.entries(s))
        for (let [r, a] of ((c[Number(e)] = {}), Object.entries(t)))
          "addSubAccount" === r && (r = "unstable_addSubAccount"),
            (c[Number(e)][r] = a);
      return "number" == typeof n ? c[n] : c;
    }
    async function el(e) {
      return await e.request(
        { method: "wallet_getPermissions" },
        { dedupe: !0 }
      );
    }
    e.s(
      [
        "fallbackMagicIdentifier",
        0,
        ei,
        "fallbackTransactionErrorMagicIdentifier",
        0,
        eo,
        "sendCalls",
        () => es,
      ],
      460841
    ),
      e.s(["getCallsStatus", () => ec], 509916),
      e.s(["getCapabilities", () => eu], 477480),
      e.s(["getPermissions", () => el], 916207);
  },
  652946,
  288854,
  763448,
  494001,
  42430,
  377018,
  599976,
  866797,
  (e) => {
    "use strict";
    var t = e.i(823838);
    async function r(e) {
      return (
        await e.request(
          { method: "eth_requestAccounts" },
          { dedupe: !0, retryCount: 0 }
        )
      ).map((e) => (0, t.getAddress)(e));
    }
    async function a(e, t) {
      return e.request(
        { method: "wallet_requestPermissions", params: [t] },
        { retryCount: 0 }
      );
    }
    e.s(["requestAddresses", () => r], 652946),
      e.s(["requestPermissions", () => a], 288854);
    var n = e.i(467125),
      i = e.i(460841),
      o = e.i(569934),
      s = o;
    class c extends s.BaseError {
      constructor(e) {
        super(`Call bundle failed with status: ${e.statusCode}`, {
          name: "BundleFailedError",
        }),
          Object.defineProperty(this, "result", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          (this.result = e);
      }
    }
    var u = e.i(43473),
      l = e.i(976215),
      d = e.i(509486),
      p = e.i(204202),
      f = e.i(34888),
      m = e.i(509916);
    async function h(e, t) {
      let r,
        {
          id: a,
          pollingInterval: i = e.pollingInterval,
          status: o = ({ statusCode: e }) => 200 === e || e >= 300,
          retryCount: s = 4,
          retryDelay: h = ({ count: e }) => 200 * ~~(1 << e),
          timeout: w = 6e4,
          throwOnFailure: g = !1,
        } = t,
        b = (0, f.stringify)(["waitForCallsStatus", e.uid, a]),
        { promise: v, resolve: E, reject: T } = (0, d.withResolvers)(),
        A = (0, u.observe)(b, { resolve: E, reject: T }, (t) => {
          let u = (0, l.poll)(
            async () => {
              let i = (e) => {
                clearTimeout(r), u(), e(), A();
              };
              try {
                let r = await (0, p.withRetry)(
                  async () => {
                    let t = await (0, n.getAction)(
                      e,
                      m.getCallsStatus,
                      "getCallsStatus"
                    )({ id: a });
                    if (g && "failure" === t.status) throw new c(t);
                    return t;
                  },
                  { retryCount: s, delay: h }
                );
                if (!o(r)) return;
                i(() => t.resolve(r));
              } catch (e) {
                i(() => t.reject(e));
              }
            },
            { interval: i, emitOnBegin: !0 }
          );
          return u;
        });
      return (
        (r = w
          ? setTimeout(() => {
              A(), clearTimeout(r), T(new y({ id: a }));
            }, w)
          : void 0),
        await v
      );
    }
    class y extends o.BaseError {
      constructor({ id: e }) {
        super(
          `Timed out while waiting for call bundle with id "${e}" to be confirmed.`,
          { name: "WaitForCallsStatusTimeoutError" }
        );
      }
    }
    async function w(e, t) {
      let { chain: r = e.chain } = t,
        a = t.timeout ?? Math.max((r?.blockTime ?? 0) * 3, 5e3),
        o = await (0, n.getAction)(e, i.sendCalls, "sendCalls")(t);
      return await (0, n.getAction)(
        e,
        h,
        "waitForCallsStatus"
      )({ ...t, id: o.id, timeout: a });
    }
    async function g(e, t) {
      let { id: r } = t;
      await e.request({ method: "wallet_showCallsStatus", params: [r] });
    }
    e.s(["waitForCallsStatus", () => h], 763448),
      e.s(["sendCallsSync", () => w], 494001),
      e.s(["showCallsStatus", () => g], 42430);
    var b = e.i(189991),
      v = e.i(611573),
      E = e.i(829897);
    async function T(e, t) {
      let { account: r = e.account } = t;
      if (!r)
        throw new v.AccountNotFoundError({
          docsPath: "/docs/eip7702/signAuthorization",
        });
      let a = (0, b.parseAccount)(r);
      if (!a.signAuthorization)
        throw new v.AccountTypeNotSupportedError({
          docsPath: "/docs/eip7702/signAuthorization",
          metaMessages: [
            "The `signAuthorization` Action does not support JSON-RPC Accounts.",
          ],
          type: a.type,
        });
      let n = await (0, E.prepareAuthorization)(e, t);
      return a.signAuthorization(n);
    }
    e.s(["signAuthorization", () => T], 377018);
    var A = e.i(675107);
    async function x(e, { account: t = e.account, message: r }) {
      if (!t)
        throw new v.AccountNotFoundError({
          docsPath: "/docs/actions/wallet/signMessage",
        });
      let a = (0, b.parseAccount)(t);
      if (a.signMessage) return a.signMessage({ message: r });
      let n =
        "string" == typeof r
          ? (0, A.stringToHex)(r)
          : r.raw instanceof Uint8Array
          ? (0, A.toHex)(r.raw)
          : r.raw;
      return e.request(
        { method: "personal_sign", params: [n, a.address] },
        { retryCount: 0 }
      );
    }
    e.s(["signMessage", () => x], 599976);
    var P = e.i(942305),
      C = e.i(190521),
      R = e.i(353464),
      k = e.i(975948);
    async function S(e, t) {
      let { account: r = e.account, chain: a = e.chain, ...i } = t;
      if (!r)
        throw new v.AccountNotFoundError({
          docsPath: "/docs/actions/wallet/signTransaction",
        });
      let o = (0, b.parseAccount)(r);
      (0, R.assertRequest)({ account: o, ...t });
      let s = await (0, n.getAction)(e, k.getChainId, "getChainId")({});
      null !== a && (0, P.assertCurrentChain)({ currentChainId: s, chain: a });
      let c = a?.formatters || e.chain?.formatters,
        u = c?.transactionRequest?.format || C.formatTransactionRequest;
      return o.signTransaction
        ? o.signTransaction(
            { ...i, account: o, chainId: s },
            { serializer: e.chain?.serializers?.transaction }
          )
        : await e.request(
            {
              method: "eth_signTransaction",
              params: [
                {
                  ...u({ ...i, account: o }, "signTransaction"),
                  chainId: (0, A.numberToHex)(s),
                  from: o.address,
                },
              ],
            },
            { retryCount: 0 }
          );
    }
    e.s(["signTransaction", () => S], 866797);
  },
  57159,
  431254,
  695331,
  911347,
  (e) => {
    "use strict";
    var t = e.i(363625),
      r = e.i(818249),
      a = e.i(975948),
      n = e.i(767346),
      i = e.i(127793),
      o = e.i(276761),
      s = e.i(734650),
      c = e.i(492975),
      u = e.i(996980),
      l = e.i(450689),
      d = e.i(509916),
      p = e.i(477480),
      f = e.i(916207),
      m = e.i(829897),
      h = e.i(368941),
      y = e.i(652946),
      w = e.i(288854),
      g = e.i(460841),
      b = e.i(494001),
      v = e.i(638291),
      E = e.i(738977),
      T = e.i(888794),
      A = e.i(385421),
      x = e.i(42430),
      P = e.i(377018),
      C = e.i(599976),
      R = e.i(866797),
      k = e.i(189991),
      S = e.i(611573),
      F = e.i(643506);
    async function I(e, t) {
      let { account: r = e.account, domain: a, message: n, primaryType: i } = t;
      if (!r)
        throw new S.AccountNotFoundError({
          docsPath: "/docs/actions/wallet/signTypedData",
        });
      let o = (0, k.parseAccount)(r),
        s = {
          EIP712Domain: (0, F.getTypesForEIP712Domain)({ domain: a }),
          ...t.types,
        };
      if (
        ((0, F.validateTypedData)({
          domain: a,
          message: n,
          primaryType: i,
          types: s,
        }),
        o.signTypedData)
      )
        return o.signTypedData({
          domain: a,
          message: n,
          primaryType: i,
          types: s,
        });
      let c = (0, F.serializeTypedData)({
        domain: a,
        message: n,
        primaryType: i,
        types: s,
      });
      return e.request(
        { method: "eth_signTypedData_v4", params: [o.address, c] },
        { retryCount: 0 }
      );
    }
    e.s(["signTypedData", () => I], 431254);
    var N = e.i(675107);
    async function B(e, { id: t }) {
      await e.request(
        {
          method: "wallet_switchEthereumChain",
          params: [{ chainId: (0, N.numberToHex)(t) }],
        },
        { retryCount: 0 }
      );
    }
    var q = e.i(763448);
    async function M(e, t) {
      return await e.request(
        { method: "wallet_watchAsset", params: t },
        { retryCount: 0 }
      );
    }
    var G = e.i(938630),
      D = e.i(696793);
    function z(e) {
      return {
        addChain: (t) => (0, c.addChain)(e, t),
        deployContract: (t) => (0, u.deployContract)(e, t),
        fillTransaction: (t) => (0, r.fillTransaction)(e, t),
        getAddresses: () => (0, l.getAddresses)(e),
        getCallsStatus: (t) => (0, d.getCallsStatus)(e, t),
        getCapabilities: (t) => (0, p.getCapabilities)(e, t),
        getChainId: () => (0, a.getChainId)(e),
        getPermissions: () => (0, f.getPermissions)(e),
        prepareAuthorization: (t) => (0, m.prepareAuthorization)(e, t),
        prepareTransactionRequest: (t) =>
          (0, h.prepareTransactionRequest)(e, t),
        requestAddresses: () => (0, y.requestAddresses)(e),
        requestPermissions: (t) => (0, w.requestPermissions)(e, t),
        sendCalls: (t) => (0, g.sendCalls)(e, t),
        sendCallsSync: (t) => (0, b.sendCallsSync)(e, t),
        sendRawTransaction: (t) => (0, v.sendRawTransaction)(e, t),
        sendRawTransactionSync: (t) => (0, E.sendRawTransactionSync)(e, t),
        sendTransaction: (t) => (0, T.sendTransaction)(e, t),
        sendTransactionSync: (t) => (0, A.sendTransactionSync)(e, t),
        showCallsStatus: (t) => (0, x.showCallsStatus)(e, t),
        signAuthorization: (t) => (0, P.signAuthorization)(e, t),
        signMessage: (t) => (0, C.signMessage)(e, t),
        signTransaction: (t) => (0, R.signTransaction)(e, t),
        signTypedData: (t) => I(e, t),
        switchChain: (t) => B(e, t),
        waitForCallsStatus: (t) => (0, q.waitForCallsStatus)(e, t),
        watchAsset: (t) => M(e, t),
        writeContract: (t) => (0, G.writeContract)(e, t),
        writeContractSync: (t) => (0, D.writeContractSync)(e, t),
        token: {
          approve: (0, t.bindActionDecorators)(e, n.approve),
          approveSync: (0, t.bindActionDecorators)(e, i.approveSync),
          transfer: (0, t.bindActionDecorators)(e, o.transfer),
          transferSync: (0, t.bindActionDecorators)(e, s.transferSync),
        },
      };
    }
    function _(e) {
      let { key: r = "wallet", name: a = "Wallet Client", transport: n } = e;
      return (0, t.createClient)({
        ...e,
        key: r,
        name: a,
        transport: n,
        type: "walletClient",
      }).extend(z);
    }
    e.s(["createWalletClient", () => _], 57159);
    var H = e.i(569934),
      $ = e.i(1299),
      U = e.i(383856),
      L = e.i(363710);
    let O = new (e.i(976677).LruMap)(8192);
    var j = e.i(204202),
      W = e.i(34888),
      V = e.i(606624);
    function K(
      {
        key: e,
        methods: t,
        name: r,
        request: a,
        retryCount: n = 3,
        retryDelay: i = 150,
        timeout: o,
        type: s,
      },
      c
    ) {
      return {
        config: {
          key: e,
          methods: t,
          name: r,
          request: a,
          retryCount: n,
          retryDelay: i,
          timeout: o,
          type: s,
        },
        request: (function (e, t = {}) {
          return async (r, a = {}) => {
            let {
                dedupe: n = !1,
                methods: i,
                retryDelay: o = 150,
                retryCount: s = 3,
                signal: c,
                uid: u,
              } = { ...t, ...a },
              { method: l } = r;
            if (
              i?.exclude?.includes(l) ||
              (i?.include && !i.include.includes(l))
            )
              throw new U.MethodNotSupportedRpcError(
                Error("method not supported"),
                { method: l }
              );
            if (c?.aborted) throw (0, L.getAbortError)(c);
            let d = n
              ? (function (e, t = 0) {
                  let r = 0xdeadbeef ^ t,
                    a = 0x41c6ce57 ^ t;
                  for (let t = 0; t < e.length; t++) {
                    let n = e.charCodeAt(t);
                    (r = Math.imul(r ^ n, 0x9e3779b1)),
                      (a = Math.imul(a ^ n, 0x5f356495));
                  }
                  return (
                    (r =
                      Math.imul(r ^ (r >>> 16), 0x85ebca6b) ^
                      Math.imul(a ^ (a >>> 16), 0xc2b2ae35)),
                    (
                      0x100000000 *
                        (2097151 &
                          (a =
                            Math.imul(a ^ (a >>> 16), 0x85ebca6b) ^
                            Math.imul(r ^ (r >>> 16), 0xc2b2ae35))) +
                      (r >>> 0)
                    ).toString(36)
                  );
                })(`${u}.${(0, W.stringify)(r)}`)
              : void 0;
            return (function (e, { enabled: t = !0, id: r }) {
              if (!t || !r) return e();
              if (O.get(r)) return O.get(r);
              let a = e().finally(() => O.delete(r));
              return O.set(r, a), a;
            })(
              () =>
                (0, j.withRetry)(
                  async () => {
                    try {
                      return await e(r, c ? { signal: c } : void 0);
                    } catch (e) {
                      if (c?.aborted) throw (0, L.getAbortError)(c);
                      if ((0, L.isAbortError)(e)) throw e;
                      switch (e.code) {
                        case U.ParseRpcError.code:
                          throw new U.ParseRpcError(e);
                        case U.InvalidRequestRpcError.code:
                          throw new U.InvalidRequestRpcError(e);
                        case U.MethodNotFoundRpcError.code:
                          throw new U.MethodNotFoundRpcError(e, {
                            method: r.method,
                          });
                        case U.InvalidParamsRpcError.code:
                          throw new U.InvalidParamsRpcError(e);
                        case U.InternalRpcError.code:
                          throw new U.InternalRpcError(e);
                        case U.InvalidInputRpcError.code:
                          throw new U.InvalidInputRpcError(e);
                        case U.ResourceNotFoundRpcError.code:
                          throw new U.ResourceNotFoundRpcError(e);
                        case U.ResourceUnavailableRpcError.code:
                          throw new U.ResourceUnavailableRpcError(e);
                        case U.TransactionRejectedRpcError.code:
                          throw new U.TransactionRejectedRpcError(e);
                        case U.MethodNotSupportedRpcError.code:
                          throw new U.MethodNotSupportedRpcError(e, {
                            method: r.method,
                          });
                        case U.LimitExceededRpcError.code:
                          throw new U.LimitExceededRpcError(e);
                        case U.JsonRpcVersionUnsupportedError.code:
                          throw new U.JsonRpcVersionUnsupportedError(e);
                        case U.UserRejectedRequestError.code:
                          throw new U.UserRejectedRequestError(e);
                        case U.UnauthorizedProviderError.code:
                          throw new U.UnauthorizedProviderError(e);
                        case U.UnsupportedProviderMethodError.code:
                          throw new U.UnsupportedProviderMethodError(e);
                        case U.ProviderDisconnectedError.code:
                          throw new U.ProviderDisconnectedError(e);
                        case U.ChainDisconnectedError.code:
                          throw new U.ChainDisconnectedError(e);
                        case U.SwitchChainError.code:
                          throw new U.SwitchChainError(e);
                        case U.UnsupportedNonOptionalCapabilityError.code:
                          throw new U.UnsupportedNonOptionalCapabilityError(e);
                        case U.UnsupportedChainIdError.code:
                          throw new U.UnsupportedChainIdError(e);
                        case U.DuplicateIdError.code:
                          throw new U.DuplicateIdError(e);
                        case U.UnknownBundleIdError.code:
                          throw new U.UnknownBundleIdError(e);
                        case U.BundleTooLargeError.code:
                          throw new U.BundleTooLargeError(e);
                        case U.AtomicReadyWalletRejectedUpgradeError.code:
                          throw new U.AtomicReadyWalletRejectedUpgradeError(e);
                        case U.AtomicityNotSupportedError.code:
                          throw new U.AtomicityNotSupportedError(e);
                        case 5e3:
                          throw new U.UserRejectedRequestError(e);
                        case U.WalletConnectSessionSettlementError.code:
                          throw new U.WalletConnectSessionSettlementError(e);
                        default:
                          if (e instanceof H.BaseError) throw e;
                          throw new U.UnknownRpcError(e);
                      }
                    }
                  },
                  {
                    delay: ({ count: e, error: t }) => {
                      if (t && t instanceof $.HttpRequestError) {
                        let e = t?.headers?.get("Retry-After");
                        if (e?.match(/\d/)) return 1e3 * Number.parseInt(e, 10);
                      }
                      return ~~(1 << e) * o;
                    },
                    retryCount: s,
                    signal: c,
                    shouldRetry: ({ error: e }) => {
                      var t;
                      return (
                        (t = e),
                        !(0, L.isAbortError)(t) &&
                          ("code" in t && "number" == typeof t.code
                            ? -1 === t.code ||
                              t.code === U.LimitExceededRpcError.code ||
                              t.code === U.InternalRpcError.code ||
                              429 === t.code
                            : !(t instanceof $.HttpRequestError) ||
                              !t.status ||
                              403 === t.status ||
                              408 === t.status ||
                              413 === t.status ||
                              429 === t.status ||
                              500 === t.status ||
                              502 === t.status ||
                              503 === t.status ||
                              504 === t.status ||
                              !1)
                      );
                    },
                  }
                ),
              { enabled: n, id: d }
            );
          };
        })(a, { methods: t, retryCount: n, retryDelay: i, uid: (0, V.uid)() }),
        value: c,
      };
    }
    function J(e, t = {}) {
      let {
        key: r = "custom",
        methods: a,
        name: n = "Custom Provider",
        retryDelay: i,
      } = t;
      return ({ retryCount: o }) =>
        K({
          key: r,
          methods: a,
          name: n,
          request: e.request.bind(e),
          retryCount: t.retryCount ?? o,
          retryDelay: i,
          type: "custom",
        });
    }
    e.s(["createTransport", () => K], 695331), e.s(["custom", () => J], 911347);
  },
  559268,
  (e) => {
    "use strict";
    var t = e.i(969552),
      r = e.i(547104);
    function a(e) {
      let { r: a, s: n } = t.secp256k1.Signature.fromCompact(e.slice(2, 130)),
        i = Number(`0x${e.slice(130)}`),
        [o, s] = (() => {
          if (0 === i || 1 === i) return [void 0, i];
          if (27 === i) return [BigInt(i), 0];
          if (28 === i) return [BigInt(i), 1];
          throw Error("Invalid yParityOrV value");
        })();
      return void 0 !== o
        ? {
            r: (0, r.numberToHex)(a, { size: 32 }),
            s: (0, r.numberToHex)(n, { size: 32 }),
            v: o,
            yParity: s,
          }
        : {
            r: (0, r.numberToHex)(a, { size: 32 }),
            s: (0, r.numberToHex)(n, { size: 32 }),
            yParity: s,
          };
    }
    e.s(["parseSignature", () => a]);
  },
]);
