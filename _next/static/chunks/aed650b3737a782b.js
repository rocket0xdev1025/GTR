(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  309682,
  (e) => {
    "use strict";
    var t = e.i(363625),
      r = e.i(752012),
      n = e.i(600547),
      a = e.i(656679),
      i = e.i(823838),
      s = e.i(404195),
      o = e.i(401319),
      c = e.i(8406),
      l = e.i(675107),
      u = e.i(569934),
      d = e.i(878023);
    function f(e) {
      if (!(e instanceof u.BaseError)) return !1;
      let t = e.walk((e) => e instanceof d.ContractFunctionRevertedError);
      return (
        t instanceof d.ContractFunctionRevertedError &&
        (t.data?.errorName === "HttpError" ||
          t.data?.errorName === "ResolverError" ||
          t.data?.errorName === "ResolverNotContract" ||
          t.data?.errorName === "ResolverNotFound" ||
          t.data?.errorName === "ReverseAddressMismatch" ||
          t.data?.errorName === "UnsupportedResolverProfile")
      );
    }
    var p = e.i(461147),
      h = e.i(147526),
      m = e.i(769936),
      b = e.i(831095),
      g = e.i(880841);
    function y(e) {
      if (66 !== e.length || 0 !== e.indexOf("[") || 65 !== e.indexOf("]"))
        return null;
      let t = `0x${e.slice(1, 65)}`;
      return (0, g.isHex)(t) ? t : null;
    }
    function w(e) {
      let t = new Uint8Array(32).fill(0);
      if (!e) return (0, l.bytesToHex)(t);
      let r = e.split(".");
      for (let e = r.length - 1; e >= 0; e -= 1) {
        let n = y(r[e]),
          a = n
            ? (0, m.toBytes)(n)
            : (0, b.keccak256)((0, m.stringToBytes)(r[e]), "bytes");
        t = (0, b.keccak256)((0, h.concat)([t, a]), "bytes");
      }
      return (0, l.bytesToHex)(t);
    }
    function v(e) {
      let t = e.replace(/^\.|\.$/gm, "");
      if (0 === t.length) return new Uint8Array(1);
      let r = new Uint8Array((0, m.stringToBytes)(t).byteLength + 2),
        n = 0,
        a = t.split(".");
      for (let e = 0; e < a.length; e++) {
        var i;
        let t = (0, m.stringToBytes)(a[e]);
        t.byteLength > 255 &&
          (t = (0, m.stringToBytes)(
            ((i = (function (e) {
              let t = new Uint8Array(32).fill(0);
              return e
                ? y(e) || (0, b.keccak256)((0, m.stringToBytes)(e))
                : (0, l.bytesToHex)(t);
            })(a[e])),
            `[${i.slice(2)}]`)
          )),
          (r[n] = t.length),
          r.set(t, n + 1),
          (n += t.length + 1);
      }
      return r.byteLength !== n + 1 ? r.slice(0, n + 1) : r;
    }
    var A = e.i(467125),
      B = e.i(388750);
    async function E(e, t) {
      let {
          blockNumber: u,
          blockTag: d,
          coinType: h,
          name: m,
          gatewayUrls: b,
          strict: g,
        } = t,
        { chain: y } = e,
        E = (() => {
          if (t.universalResolverAddress) return t.universalResolverAddress;
          if (!y)
            throw Error(
              "client chain not configured. universalResolverAddress is required."
            );
          return (0, s.getChainContractAddress)({
            blockNumber: u,
            chain: y,
            contract: "ensUniversalResolver",
          });
        })(),
        x = y?.ensTlds;
      if (x && !x.some((e) => m.endsWith(e))) return null;
      let P = null != h ? [w(m), BigInt(h)] : [w(m)];
      try {
        let t = (0, a.encodeFunctionData)({
            abi: r.addressResolverAbi,
            functionName: "addr",
            args: P,
          }),
          s = {
            address: E,
            abi: r.universalResolverResolveAbi,
            functionName: "resolveWithGateways",
            args: [(0, l.toHex)(v(m)), t, b ?? [p.localBatchGatewayUrl]],
            blockNumber: u,
            blockTag: d,
          },
          f = (0, A.getAction)(e, B.readContract, "readContract"),
          g = await f(s);
        if ("0x" === g[0]) return null;
        let y = (function ({ coinType: e, data: t, args: a }) {
          try {
            return (0, n.decodeFunctionResult)({
              abi: r.addressResolverAbi,
              args: a,
              functionName: "addr",
              data: t,
            });
          } catch (n) {
            if (null == e) throw n;
            let r = (0, c.trim)(t);
            if (20 === (0, o.size)(r)) return (0, i.getAddress)(r);
            throw n;
          }
        })({ coinType: h, data: g[0], args: P });
        if ("0x" === y || "0x00" === (0, c.trim)(y)) return null;
        return y;
      } catch (e) {
        if (g) throw e;
        if (f(e)) return null;
        throw e;
      }
    }
    var x = u;
    class P extends x.BaseError {
      constructor({ data: e }) {
        super(
          "Unable to extract image from metadata. The metadata may be malformed or invalid.",
          {
            metaMessages: [
              "- Metadata must be a JSON object with at least an `image`, `image_url` or `image_data` property.",
              "",
              `Provided data: ${JSON.stringify(e)}`,
            ],
            name: "EnsAvatarInvalidMetadataError",
          }
        );
      }
    }
    class R extends x.BaseError {
      constructor({ reason: e }) {
        super(`ENS NFT avatar URI is invalid. ${e}`, {
          name: "EnsAvatarInvalidNftUriError",
        });
      }
    }
    class k extends x.BaseError {
      constructor({ uri: e }) {
        super(
          `Unable to resolve ENS avatar URI "${e}". The URI may be malformed, invalid, or does not respond with a valid image.`,
          { name: "EnsAvatarUriResolutionError" }
        );
      }
    }
    class N extends x.BaseError {
      constructor({ namespace: e }) {
        super(
          `ENS NFT avatar namespace "${e}" is not supported. Must be "erc721" or "erc1155".`,
          { name: "EnsAvatarUnsupportedNamespaceError" }
        );
      }
    }
    x.BaseError;
    let C =
        /(?<protocol>https?:\/\/[^/]*|ipfs:\/|ipns:\/|ar:\/)?(?<root>\/)?(?<subpath>ipfs\/|ipns\/)?(?<target>[\w\-.]+)(?<subtarget>\/.*)?/,
      I =
        /^(Qm[1-9A-HJ-NP-Za-km-z]{44,}|b[A-Za-z2-7]{58,}|B[A-Z2-7]{58,}|z[1-9A-HJ-NP-Za-km-z]{48,}|F[0-9A-F]{50,})(\/(?<target>[\w\-.]+))?(?<subtarget>\/.*)?$/,
      T = /^data:([a-zA-Z\-/+]*);base64,([^"].*)/,
      S = /^data:([a-zA-Z\-/+]*)?(;[a-zA-Z0-9].*?)?(,)/;
    async function z(e) {
      try {
        let t = await fetch(e, { method: "HEAD" });
        if (200 === t.status) {
          let e = t.headers.get("content-type");
          return e?.startsWith("image/");
        }
        return !1;
      } catch (t) {
        if (
          ("object" == typeof t && void 0 !== t.response) ||
          !Object.hasOwn(globalThis, "Image")
        )
          return !1;
        return new Promise((t) => {
          let r = new Image();
          (r.onload = () => {
            t(!0);
          }),
            (r.onerror = () => {
              t(!1);
            }),
            (r.src = e);
        });
      }
    }
    function $(e, t) {
      return e ? (e.endsWith("/") ? e.slice(0, -1) : e) : t;
    }
    function L({ uri: e, gatewayUrls: t }) {
      let r = T.test(e);
      if (r) return { uri: e, isOnChain: !0, isEncoded: r };
      let n = $(t?.ipfs, "https://ipfs.io"),
        a = $(t?.arweave, "https://arweave.net"),
        i = e.match(C),
        {
          protocol: s,
          subpath: o,
          target: c,
          subtarget: l = "",
        } = i?.groups || {},
        u = "ipns:/" === s || "ipns/" === o,
        d = "ipfs:/" === s || "ipfs/" === o || I.test(e);
      if (e.startsWith("http") && !u && !d) {
        let r = e;
        return (
          t?.arweave && (r = e.replace(/https:\/\/arweave.net/g, t?.arweave)),
          { uri: r, isOnChain: !1, isEncoded: !1 }
        );
      }
      if ((u || d) && c)
        return {
          uri: `${n}/${u ? "ipns" : "ipfs"}/${c}${l}`,
          isOnChain: !1,
          isEncoded: !1,
        };
      if ("ar:/" === s && c)
        return { uri: `${a}/${c}${l || ""}`, isOnChain: !1, isEncoded: !1 };
      let f = e.replace(S, "");
      if (
        (f.startsWith("<svg") && (f = `data:image/svg+xml;base64,${btoa(f)}`),
        f.startsWith("data:") || f.startsWith("{"))
      )
        return { uri: f, isOnChain: !0, isEncoded: !1 };
      throw new k({ uri: e });
    }
    function U(e) {
      if (
        "object" != typeof e ||
        (!("image" in e) && !("image_url" in e) && !("image_data" in e))
      )
        throw new P({ data: e });
      return e.image || e.image_url || e.image_data;
    }
    async function F({ gatewayUrls: e, uri: t }) {
      try {
        let r = await fetch(t).then((e) => e.json());
        return await O({ gatewayUrls: e, uri: U(r) });
      } catch {
        throw new k({ uri: t });
      }
    }
    async function O({ gatewayUrls: e, uri: t }) {
      let { uri: r, isOnChain: n } = L({ uri: t, gatewayUrls: e });
      if (n || (await z(r))) return r;
      throw new k({ uri: t });
    }
    async function D(e, { nft: t }) {
      if ("erc721" === t.namespace)
        return (0, B.readContract)(e, {
          address: t.contractAddress,
          abi: [
            {
              name: "tokenURI",
              type: "function",
              stateMutability: "view",
              inputs: [{ name: "tokenId", type: "uint256" }],
              outputs: [{ name: "", type: "string" }],
            },
          ],
          functionName: "tokenURI",
          args: [BigInt(t.tokenID)],
        });
      if ("erc1155" === t.namespace)
        return (0, B.readContract)(e, {
          address: t.contractAddress,
          abi: [
            {
              name: "uri",
              type: "function",
              stateMutability: "view",
              inputs: [{ name: "_id", type: "uint256" }],
              outputs: [{ name: "", type: "string" }],
            },
          ],
          functionName: "uri",
          args: [BigInt(t.tokenID)],
        });
      throw new N({ namespace: t.namespace });
    }
    async function q(e, { gatewayUrls: t, record: r }) {
      return /eip155:/i.test(r)
        ? j(e, { gatewayUrls: t, record: r })
        : O({ uri: r, gatewayUrls: t });
    }
    async function j(e, { gatewayUrls: t, record: r }) {
      let n = (function (e) {
          let t = e;
          t.startsWith("did:nft:") &&
            (t = t.replace("did:nft:", "").replace(/_/g, "/"));
          let [r, n, a] = t.split("/"),
            [i, s] = r.split(":"),
            [o, c] = n.split(":");
          if (!i || "eip155" !== i.toLowerCase())
            throw new R({ reason: "Only EIP-155 supported" });
          if (!s) throw new R({ reason: "Chain ID not found" });
          if (!c) throw new R({ reason: "Contract address not found" });
          if (!a) throw new R({ reason: "Token ID not found" });
          if (!o) throw new R({ reason: "ERC namespace not found" });
          return {
            chainID: Number.parseInt(s, 10),
            namespace: o.toLowerCase(),
            contractAddress: c,
            tokenID: a,
          };
        })(r),
        {
          uri: a,
          isOnChain: i,
          isEncoded: s,
        } = L({ uri: await D(e, { nft: n }), gatewayUrls: t });
      if (
        i &&
        (a.includes("data:application/json;base64,") || a.startsWith("{"))
      )
        return O({
          uri: U(
            JSON.parse(
              s ? atob(a.replace("data:application/json;base64,", "")) : a
            )
          ),
          gatewayUrls: t,
        });
      let o = n.tokenID;
      return (
        "erc1155" === n.namespace &&
          (o = o.replace("0x", "").padStart(64, "0")),
        F({ gatewayUrls: t, uri: a.replace(/(?:0x)?{id}/, o) })
      );
    }
    async function _(e, t) {
      let {
          blockNumber: i,
          blockTag: o,
          key: c,
          name: u,
          gatewayUrls: d,
          strict: h,
        } = t,
        { chain: m } = e,
        b = (() => {
          if (t.universalResolverAddress) return t.universalResolverAddress;
          if (!m)
            throw Error(
              "client chain not configured. universalResolverAddress is required."
            );
          return (0, s.getChainContractAddress)({
            blockNumber: i,
            chain: m,
            contract: "ensUniversalResolver",
          });
        })(),
        g = m?.ensTlds;
      if (g && !g.some((e) => u.endsWith(e))) return null;
      try {
        let t = {
            address: b,
            abi: r.universalResolverResolveAbi,
            args: [
              (0, l.toHex)(v(u)),
              (0, a.encodeFunctionData)({
                abi: r.textResolverAbi,
                functionName: "text",
                args: [w(u), c],
              }),
              d ?? [p.localBatchGatewayUrl],
            ],
            functionName: "resolveWithGateways",
            blockNumber: i,
            blockTag: o,
          },
          s = (0, A.getAction)(e, B.readContract, "readContract"),
          f = await s(t);
        if ("0x" === f[0]) return null;
        let h = (0, n.decodeFunctionResult)({
          abi: r.textResolverAbi,
          functionName: "text",
          data: f[0],
        });
        return "" === h ? null : h;
      } catch (e) {
        if (h) throw e;
        if (f(e)) return null;
        throw e;
      }
    }
    async function H(
      e,
      {
        blockNumber: t,
        blockTag: r,
        assetGatewayUrls: n,
        name: a,
        gatewayUrls: i,
        strict: s,
        universalResolverAddress: o,
      }
    ) {
      let c = await (0, A.getAction)(
        e,
        _,
        "getEnsText"
      )({
        blockNumber: t,
        blockTag: r,
        key: "avatar",
        name: a,
        universalResolverAddress: o,
        gatewayUrls: i,
        strict: s,
      });
      if (!c) return null;
      try {
        return await q(e, { record: c, gatewayUrls: n });
      } catch {
        return null;
      }
    }
    async function M(e, t) {
      let {
          address: n,
          blockNumber: a,
          blockTag: i,
          coinType: o = 60n,
          gatewayUrls: c,
          strict: l,
        } = t,
        { chain: u } = e,
        d = (() => {
          if (t.universalResolverAddress) return t.universalResolverAddress;
          if (!u)
            throw Error(
              "client chain not configured. universalResolverAddress is required."
            );
          return (0, s.getChainContractAddress)({
            blockNumber: a,
            chain: u,
            contract: "ensUniversalResolver",
          });
        })();
      try {
        let t = {
            address: d,
            abi: r.universalResolverReverseAbi,
            args: [n, o, c ?? [p.localBatchGatewayUrl]],
            functionName: "reverseWithGateways",
            blockNumber: a,
            blockTag: i,
          },
          s = (0, A.getAction)(e, B.readContract, "readContract"),
          [l] = await s(t);
        return l || null;
      } catch (e) {
        if (l) throw e;
        if (f(e)) return null;
        throw e;
      }
    }
    async function V(e, t) {
      let { blockNumber: r, blockTag: n, name: a } = t,
        { chain: i } = e,
        o = (() => {
          if (t.universalResolverAddress) return t.universalResolverAddress;
          if (!i)
            throw Error(
              "client chain not configured. universalResolverAddress is required."
            );
          return (0, s.getChainContractAddress)({
            blockNumber: r,
            chain: i,
            contract: "ensUniversalResolver",
          });
        })(),
        c = i?.ensTlds;
      if (c && !c.some((e) => a.endsWith(e)))
        throw Error(
          `${a} is not a valid ENS TLD (${c?.join(", ")}) for chain "${
            i.name
          }" (id: ${i.id}).`
        );
      let [u] = await (0, A.getAction)(
        e,
        B.readContract,
        "readContract"
      )({
        address: o,
        abi: [
          {
            inputs: [{ type: "bytes" }],
            name: "findResolver",
            outputs: [
              { type: "address" },
              { type: "bytes32" },
              { type: "uint256" },
            ],
            stateMutability: "view",
            type: "function",
          },
        ],
        functionName: "findResolver",
        args: [(0, l.toHex)(v(a))],
        blockNumber: r,
        blockTag: n,
      });
      return u;
    }
    var W = e.i(989509),
      G = e.i(189991),
      Z = e.i(779690),
      J = e.i(264404),
      K = e.i(190521),
      Y = e.i(353464);
    async function Q(e, t) {
      let {
          account: r = e.account,
          blockNumber: n,
          blockTag: a = "latest",
          blobs: i,
          data: s,
          gas: o,
          gasPrice: c,
          maxFeePerBlobGas: d,
          maxFeePerGas: f,
          maxPriorityFeePerGas: p,
          to: h,
          value: m,
          ...b
        } = t,
        g = r ? (0, G.parseAccount)(r) : void 0;
      try {
        (0, Y.assertRequest)(t);
        let r = "bigint" == typeof n ? (0, l.numberToHex)(n) : void 0,
          y = e.chain?.formatters?.transactionRequest?.format,
          w = (y || K.formatTransactionRequest)(
            {
              ...(0, J.extract)(b, { format: y }),
              account: g,
              blobs: i,
              data: s,
              gas: o,
              gasPrice: c,
              maxFeePerBlobGas: d,
              maxFeePerGas: f,
              maxPriorityFeePerGas: p,
              to: h,
              value: m,
            },
            "createAccessList"
          ),
          v = await e.request({
            method: "eth_createAccessList",
            params: [w, r || a],
          });
        if (v.error) throw new u.BaseError(v.error, { details: v.error });
        return { accessList: v.accessList, gasUsed: BigInt(v.gasUsed) };
      } catch (r) {
        throw (0, Z.getCallError)(r, { ...t, account: g, chain: e.chain });
      }
    }
    function X(e, { method: t }) {
      let r = {};
      return (
        "fallback" === e.transport.type &&
          e.transport.onResponse?.(
            ({ method: e, response: n, status: a, transport: i }) => {
              "success" === a && t === e && (r[n] = i.request);
            }
          ),
        (t) => r[t] || e.request
      );
    }
    async function ee(e) {
      let t = X(e, { method: "eth_newBlockFilter" }),
        r = await e.request({ method: "eth_newBlockFilter" });
      return { id: r, request: t(r), type: "block" };
    }
    var et = e.i(70204),
      er = u;
    class en extends er.BaseError {
      constructor(e) {
        super(`Filter type "${e}" is not supported.`, {
          name: "FilterTypeNotSupportedError",
        });
      }
    }
    var ea = e.i(774620),
      ei = e.i(704434),
      es = e.i(332881),
      eo = e.i(627173);
    let ec = "/docs/contract/encodeEventTopics";
    function el(e) {
      let { abi: t, eventName: r, args: n } = e,
        a = t[0];
      if (r) {
        let e = (0, eo.getAbiItem)({ abi: t, name: r });
        if (!e) throw new et.AbiEventNotFoundError(r, { docsPath: ec });
        a = e;
      }
      if ("event" !== a.type)
        throw new et.AbiEventNotFoundError(void 0, { docsPath: ec });
      let i = [];
      if (n && "inputs" in a) {
        let e = a.inputs?.filter((e) => "indexed" in e && e.indexed),
          t = Array.isArray(n)
            ? n
            : Object.values(n).length > 0
            ? e?.map((e) => n[e.name]) ?? []
            : [];
        t.length > 0 &&
          (i =
            e?.map((e, r) =>
              Array.isArray(t[r])
                ? t[r].map((n, a) => eu({ param: e, value: t[r][a] }))
                : void 0 !== t[r] && null !== t[r]
                ? eu({ param: e, value: t[r] })
                : null
            ) ?? []);
      }
      if (a.anonymous) return i;
      let s = (0, es.formatAbiItem)(a);
      return [(0, ea.toEventSelector)(s), ...i];
    }
    function eu({ param: e, value: t }) {
      if ("string" === e.type || "bytes" === e.type)
        return (0, b.keccak256)((0, m.toBytes)(t));
      if ("tuple" === e.type || e.type.match(/^(.*)\[(\d+)?\]$/))
        throw new en(e.type);
      return (0, ei.encodeAbiParameters)([e], [t]);
    }
    async function ed(e, t) {
      let {
          address: r,
          abi: n,
          args: a,
          eventName: i,
          fromBlock: s,
          strict: o,
          toBlock: c,
        } = t,
        u = X(e, { method: "eth_newFilter" }),
        d = i ? el({ abi: n, args: a, eventName: i }) : void 0,
        f = await e.request({
          method: "eth_newFilter",
          params: [
            {
              address: r,
              fromBlock: "bigint" == typeof s ? (0, l.numberToHex)(s) : s,
              toBlock: "bigint" == typeof c ? (0, l.numberToHex)(c) : c,
              topics: d,
            },
          ],
        });
      return {
        abi: n,
        args: a,
        eventName: i,
        id: f,
        request: u(f),
        strict: !!o,
        type: "event",
      };
    }
    async function ef(
      e,
      {
        address: t,
        args: r,
        event: n,
        events: a,
        fromBlock: i,
        strict: s,
        toBlock: o,
      } = {}
    ) {
      let c = a ?? (n ? [n] : void 0),
        u = X(e, { method: "eth_newFilter" }),
        d = [];
      c &&
        ((d = [c.flatMap((e) => el({ abi: [e], eventName: e.name, args: r }))]),
        n && (d = d[0]));
      let f = await e.request({
        method: "eth_newFilter",
        params: [
          {
            address: t,
            fromBlock: "bigint" == typeof i ? (0, l.numberToHex)(i) : i,
            toBlock: "bigint" == typeof o ? (0, l.numberToHex)(o) : o,
            ...(d.length ? { topics: d } : {}),
          },
        ],
      });
      return {
        abi: c,
        args: r,
        eventName: n ? n.name : void 0,
        fromBlock: i,
        id: f,
        request: u(f),
        strict: !!s,
        toBlock: o,
        type: "event",
      };
    }
    async function ep(e) {
      let t = X(e, { method: "eth_newPendingTransactionFilter" }),
        r = await e.request({ method: "eth_newPendingTransactionFilter" });
      return { id: r, request: t(r), type: "transaction" };
    }
    var eh = e.i(369121),
      em = e.i(972960),
      eb = e.i(484734),
      eg = e.i(194720),
      ey = e.i(818249),
      ew = e.i(606580);
    async function ev(
      e,
      {
        address: t,
        blockHash: i,
        blockNumber: s,
        blockTag: o = e.experimental_blockTag ?? "latest",
        requireCanonical: c,
      }
    ) {
      let l = (0, ew.formatBlockParameter)({
        blockHash: i,
        blockNumber: s,
        blockTag: o,
        requireCanonical: c,
      });
      if (e.batch?.multicall && e.chain?.contracts?.multicall3) {
        let l = e.chain.contracts.multicall3.address,
          u = (0, a.encodeFunctionData)({
            abi: r.multicall3Abi,
            functionName: "getEthBalance",
            args: [t],
          }),
          { data: d } = await (0, A.getAction)(
            e,
            W.call,
            "call"
          )({
            to: l,
            data: u,
            blockHash: i,
            blockNumber: s,
            blockTag: o,
            requireCanonical: c,
          });
        return (0, n.decodeFunctionResult)({
          abi: r.multicall3Abi,
          functionName: "getEthBalance",
          args: [t],
          data: d || "0x",
        });
      }
      return BigInt(
        await e.request({ method: "eth_getBalance", params: [t, l] })
      );
    }
    async function eA(e) {
      return BigInt(await e.request({ method: "eth_blobBaseFee" }));
    }
    var eB = e.i(915588),
      eE = e.i(712371),
      ex = e.i(57351),
      eP = e.i(839080);
    async function eR(
      e,
      {
        blockHash: t,
        blockNumber: r,
        blockTag: n = e.experimental_blockTag ?? "latest",
      } = {}
    ) {
      let a = void 0 !== r ? (0, l.numberToHex)(r) : void 0,
        i = await e.request(
          { method: "eth_getBlockReceipts", params: [t || a || n] },
          { dedupe: !!(t || a) }
        );
      if (!i) throw new ex.BlockNotFoundError({ blockHash: t, blockNumber: r });
      let s =
        e.chain?.formatters?.transactionReceipt?.format ||
        eP.formatTransactionReceipt;
      return i.map((e) => s(e, "getBlockReceipts"));
    }
    var ek = e.i(450323);
    async function eN(
      e,
      { blockHash: t, blockNumber: r, blockTag: n = "latest" } = {}
    ) {
      let a,
        i = void 0 !== r ? (0, l.numberToHex)(r) : void 0;
      return (
        (a = t
          ? await e.request(
              { method: "eth_getBlockTransactionCountByHash", params: [t] },
              { dedupe: !0 }
            )
          : await e.request(
              {
                method: "eth_getBlockTransactionCountByNumber",
                params: [i || n],
              },
              { dedupe: !!i }
            )),
        (0, ek.hexToNumber)(a)
      );
    }
    var eC = e.i(975948),
      eI = e.i(528804),
      eT = e.i(897282),
      eS = e.i(856324);
    async function ez(
      e,
      {
        address: t,
        blockHash: r,
        fromBlock: n,
        toBlock: a,
        event: i,
        events: s,
        args: o,
        strict: c,
      } = {}
    ) {
      let u = s ?? (i ? [i] : void 0),
        d = [];
      u &&
        ((d = [
          u.flatMap((e) =>
            el({ abi: [e], eventName: e.name, args: s ? void 0 : o })
          ),
        ]),
        i && (d = d[0]));
      let f = (
        r
          ? await e.request({
              method: "eth_getLogs",
              params: [{ address: t, topics: d, blockHash: r }],
            })
          : await e.request({
              method: "eth_getLogs",
              params: [
                {
                  address: t,
                  topics: d,
                  fromBlock: "bigint" == typeof n ? (0, l.numberToHex)(n) : n,
                  toBlock: "bigint" == typeof a ? (0, l.numberToHex)(a) : a,
                },
              ],
            })
      ).map((e) => (0, eS.formatLog)(e));
      return u
        ? (0, eT.parseEventLogs)({ abi: u, args: o, logs: f, strict: c ?? !1 })
        : f;
    }
    async function e$(e, t) {
      let {
          abi: r,
          address: n,
          args: a,
          blockHash: i,
          eventName: s,
          fromBlock: o,
          toBlock: c,
          strict: l,
        } = t,
        u = s ? (0, eo.getAbiItem)({ abi: r, name: s }) : void 0,
        d = u ? void 0 : r.filter((e) => "event" === e.type);
      return (0, A.getAction)(
        e,
        ez,
        "getLogs"
      )({
        address: n,
        args: a,
        blockHash: i,
        event: u,
        events: d,
        fromBlock: o,
        toBlock: c,
        strict: l,
      });
    }
    var eL = e.i(790063);
    async function eU(
      e,
      { address: t, blockNumber: r, blockTag: n = "latest" }
    ) {
      let a = await (0, eI.getCode)(e, {
        address: t,
        ...(void 0 !== r ? { blockNumber: r } : { blockTag: n }),
      });
      if (a && 23 === (0, o.size)(a) && a.startsWith("0xef0100"))
        return (0, i.getAddress)((0, eL.slice)(a, 3, 23));
    }
    var eF = u;
    class eO extends eF.BaseError {
      constructor({ address: e }) {
        super(`No EIP-712 domain found on contract "${e}".`, {
          metaMessages: [
            "Ensure that:",
            `- The contract is deployed at the address "${e}".`,
            "- `eip712Domain()` function exists on the contract.",
            "- `eip712Domain()` function matches signature to ERC-5267 specification.",
          ],
          name: "Eip712DomainNotFoundError",
        });
      }
    }
    async function eD(e, t) {
      let { address: r, factory: n, factoryData: a } = t;
      try {
        let [t, i, s, o, c, l, u] = await (0, A.getAction)(
          e,
          B.readContract,
          "readContract"
        )({
          abi: eq,
          address: r,
          functionName: "eip712Domain",
          factory: n,
          factoryData: a,
        });
        return {
          domain: {
            name: i,
            version: s,
            chainId: Number(o),
            verifyingContract: c,
            salt: l,
          },
          extensions: u,
          fields: t,
        };
      } catch (e) {
        if (
          "ContractFunctionExecutionError" === e.name &&
          "ContractFunctionZeroDataError" === e.cause.name
        )
          throw new eO({ address: r });
        throw e;
      }
    }
    let eq = [
      {
        inputs: [],
        name: "eip712Domain",
        outputs: [
          { name: "fields", type: "bytes1" },
          { name: "name", type: "string" },
          { name: "version", type: "string" },
          { name: "chainId", type: "uint256" },
          { name: "verifyingContract", type: "address" },
          { name: "salt", type: "bytes32" },
          { name: "extensions", type: "uint256[]" },
        ],
        stateMutability: "view",
        type: "function",
      },
    ];
    async function ej(
      e,
      {
        blockCount: t,
        blockNumber: r,
        blockTag: n = "latest",
        rewardPercentiles: a,
      }
    ) {
      var i;
      let s = "bigint" == typeof r ? (0, l.numberToHex)(r) : void 0;
      return {
        baseFeePerGas: (i = await e.request(
          {
            method: "eth_feeHistory",
            params: [(0, l.numberToHex)(t), s || n, a],
          },
          { dedupe: !!s }
        )).baseFeePerGas.map((e) => BigInt(e)),
        gasUsedRatio: i.gasUsedRatio,
        oldestBlock: BigInt(i.oldestBlock),
        reward: i.reward?.map((e) => e.map((e) => BigInt(e))),
      };
    }
    async function e_(e, { filter: t }) {
      let r = "strict" in t && t.strict,
        n = await t.request({ method: "eth_getFilterChanges", params: [t.id] });
      if ("string" == typeof n[0]) return n;
      let a = n.map((e) => (0, eS.formatLog)(e));
      return "abi" in t && t.abi
        ? (0, eT.parseEventLogs)({ abi: t.abi, logs: a, strict: r })
        : a;
    }
    async function eH(e, { filter: t }) {
      let r = t.strict ?? !1,
        n = (
          await t.request({ method: "eth_getFilterLogs", params: [t.id] })
        ).map((e) => (0, eS.formatLog)(e));
      return t.abi
        ? (0, eT.parseEventLogs)({ abi: t.abi, logs: n, strict: r })
        : n;
    }
    var eM = e.i(111047);
    async function eV(
      e,
      {
        address: t,
        blockHash: r,
        blockNumber: n,
        blockTag: a = "latest",
        requireCanonical: i,
        storageKeys: s,
      }
    ) {
      let o = (0, ew.formatBlockParameter)({
        blockHash: r,
        blockNumber: n,
        blockTag: a,
        requireCanonical: i,
      });
      var c = await e.request({ method: "eth_getProof", params: [t, s, o] });
      return {
        ...c,
        balance: c.balance ? BigInt(c.balance) : void 0,
        nonce: c.nonce ? (0, ek.hexToNumber)(c.nonce) : void 0,
        storageProof: c.storageProof
          ? c.storageProof.map((e) => ({ ...e, value: BigInt(e.value) }))
          : void 0,
      };
    }
    var eW = e.i(393702);
    async function eG(e, { hash: t }) {
      let r = await e.request(
        { method: "eth_getRawTransactionByHash", params: [t] },
        { dedupe: !0 }
      );
      if (!r) throw new eW.TransactionNotFoundError({ hash: t });
      return r;
    }
    async function eZ(
      e,
      {
        address: t,
        blockHash: r,
        blockNumber: n,
        blockTag: a = "latest",
        requireCanonical: i,
        slot: s,
      }
    ) {
      let o = (0, ew.formatBlockParameter)({
        blockHash: r,
        blockNumber: n,
        blockTag: a,
        requireCanonical: i,
      });
      return await e.request({ method: "eth_getStorageAt", params: [t, s, o] });
    }
    var eJ = e.i(579917);
    async function eK(e, { hash: t, transactionReceipt: r }) {
      let [n, a] = await Promise.all([
          (0, A.getAction)(e, eE.getBlockNumber, "getBlockNumber")({}),
          t
            ? (0, A.getAction)(
                e,
                eJ.getTransaction,
                "getTransaction"
              )({ hash: t })
            : void 0,
        ]),
        i = r?.blockNumber || a?.blockNumber;
      return i ? n - i + 1n : 0n;
    }
    var eY = e.i(937445),
      eQ = e.i(568307),
      eX = e.i(472503),
      e0 = e.i(807749);
    async function e1(e, t) {
      let {
          account: i,
          authorizationList: o,
          allowFailure: c = !0,
          blockHash: l,
          blockNumber: f,
          blockOverrides: p,
          blockTag: h,
          requireCanonical: m,
          stateOverride: b,
        } = t,
        g = t.contracts,
        y = "object" == typeof e.batch?.multicall ? e.batch.multicall : {},
        w = t.batchSize ?? y.batchSize ?? 1024,
        v = t.deployless ?? y.deployless ?? !1,
        E = (() => {
          if (t.multicallAddress) return t.multicallAddress;
          if (v) return null;
          if (e.chain)
            return (0, s.getChainContractAddress)({
              blockNumber: f,
              chain: e.chain,
              contract: "multicall3",
            });
          throw Error(
            "client chain not configured. multicallAddress is required."
          );
        })(),
        x = [[]],
        P = 0,
        R = 0;
      for (let e = 0; e < g.length; e++) {
        let { abi: t, address: r, args: n, functionName: s } = g[e];
        try {
          let e = (0, a.encodeFunctionData)({
            abi: t,
            args: n,
            functionName: s,
          });
          (R += (e.length - 2) / 2),
            w > 0 &&
              R > w &&
              x[P].length > 0 &&
              (P++, (R = (e.length - 2) / 2), (x[P] = [])),
            (x[P] = [...x[P], { allowFailure: !0, callData: e, target: r }]);
        } catch (a) {
          let e = (0, e0.getContractError)(a, {
            abi: t,
            address: r,
            args: n,
            docsPath: "/docs/contract/multicall",
            functionName: s,
            sender: i,
          });
          if (!c) throw e;
          x[P] = [...x[P], { allowFailure: !0, callData: "0x", target: r }];
        }
      }
      let k = await Promise.allSettled(
          x.map((t) =>
            (0, A.getAction)(
              e,
              B.readContract,
              "readContract"
            )({
              ...(null === E
                ? { code: eX.multicall3Bytecode }
                : { address: E }),
              abi: r.multicall3Abi,
              account: i,
              args: [t],
              authorizationList: o,
              blockHash: l,
              blockNumber: f,
              blockOverrides: p,
              blockTag: h,
              functionName: "aggregate3",
              requireCanonical: m,
              stateOverride: b,
            })
          )
        ),
        N = [];
      for (let e = 0; e < k.length; e++) {
        let t = k[e];
        if ("rejected" === t.status) {
          if (!c) throw t.reason;
          for (let r = 0; r < x[e].length; r++)
            N.push({ status: "failure", error: t.reason, result: void 0 });
          continue;
        }
        let r = t.value;
        for (let t = 0; t < r.length; t++) {
          let { returnData: a, success: i } = r[t],
            { callData: s } = x[e][t],
            { abi: o, address: l, functionName: u, args: f } = g[N.length];
          try {
            if ("0x" === s) throw new et.AbiDecodingZeroDataError();
            if (!i) throw new d.RawContractError({ data: a });
            let e = (0, n.decodeFunctionResult)({
              abi: o,
              args: f,
              data: a,
              functionName: u,
            });
            N.push(c ? { result: e, status: "success" } : e);
          } catch (t) {
            let e = (0, e0.getContractError)(t, {
              abi: o,
              address: l,
              args: f,
              docsPath: "/docs/contract/multicall",
              functionName: u,
            });
            if (!c) throw e;
            N.push({ error: e, result: void 0, status: "failure" });
          }
        }
      }
      if (N.length !== g.length)
        throw new u.BaseError("multicall results mismatch");
      return N;
    }
    var e6 = e.i(578416),
      e5 = e.i(853532),
      e2 = e.i(467078),
      e8 = e.i(557874),
      e3 = e.i(826051);
    async function e4(e, t) {
      let {
        blockNumber: r,
        blockTag: i = e.experimental_blockTag ?? "latest",
        blocks: s,
        returnFullTransactions: o,
        traceTransfers: c,
        validation: u,
      } = t;
      try {
        let t = [];
        for (let e of s) {
          let r = e.blockOverrides ? e6.toRpc(e.blockOverrides) : void 0,
            n = e.calls.map((e) => {
              let t = e.account ? (0, G.parseAccount)(e.account) : void 0,
                r = e.abi ? (0, a.encodeFunctionData)(e) : e.data,
                n = {
                  ...e,
                  account: t,
                  data: e.dataSuffix
                    ? (0, h.concat)([r || "0x", e.dataSuffix])
                    : r,
                  from: e.from ?? t?.address,
                };
              return (
                (0, Y.assertRequest)(n), (0, K.formatTransactionRequest)(n)
              );
            }),
            i = e.stateOverrides
              ? (0, e3.serializeStateOverride)(e.stateOverrides)
              : void 0;
          t.push({ blockOverrides: r, calls: n, stateOverrides: i });
        }
        let f = "bigint" == typeof r ? (0, l.numberToHex)(r) : void 0;
        return (
          await e.request({
            method: "eth_simulateV1",
            params: [
              {
                blockStateCalls: t,
                returnFullTransactions: o,
                traceTransfers: c,
                validation: u,
              },
              f || i,
            ],
          })
        ).map((e, t) => ({
          ...(0, e8.formatBlock)(e),
          calls: e.calls.map((e, r) => {
            let { abi: a, args: i, functionName: o, to: c } = s[t].calls[r],
              l = e.error?.data ?? e.returnData,
              u = BigInt(e.gasUsed),
              f = e.logs?.map((e) => (0, eS.formatLog)(e)),
              p = "0x1" === e.status ? "success" : "failure",
              h =
                a && "success" === p && "0x" !== l
                  ? (0, n.decodeFunctionResult)({
                      abi: a,
                      data: l,
                      functionName: o,
                    })
                  : null,
              m = (() => {
                let e;
                if (
                  "success" !== p &&
                  ("0x" === l
                    ? (e = new et.AbiDecodingZeroDataError())
                    : l && (e = new d.RawContractError({ data: l })),
                  e)
                )
                  return (0, e0.getContractError)(e, {
                    abi: a ?? [],
                    address: c ?? "0x",
                    args: i,
                    functionName: o ?? "<unknown>",
                  });
              })();
            return {
              data: l,
              gasUsed: u,
              logs: f,
              status: p,
              ...("success" === p ? { result: h } : { error: m }),
            };
          }),
        }));
      } catch (t) {
        let e = (0, e2.getNodeError)(t, {});
        if (e instanceof e5.UnknownNodeError) throw t;
        throw e;
      }
    }
    var e9 = e.i(722716),
      e7 = e.i(146150),
      te = e.i(235036),
      tt = e.i(45831),
      tr = e.i(304118),
      tn = e.i(48084);
    e.i(140965), e.i(671647);
    var ta = e.i(145535);
    e.i(280355);
    var ti = e.i(334019),
      ts = e.i(234814);
    function to(e, t = {}) {
      let { as: r = "string" == typeof e ? "Hex" : "Bytes" } = t,
        n = (0, ta.keccak_256)(ti.from(e));
      return "Bytes" === r ? n : ts.fromBytes(n);
    }
    class tc extends Map {
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
        return (
          super.has(e) && void 0 !== t && (this.delete(e), super.set(e, t)), t
        );
      }
      set(e, t) {
        if ((super.set(e, t), this.maxSize && this.size > this.maxSize)) {
          let e = this.keys().next().value;
          e && this.delete(e);
        }
        return this;
      }
    }
    let tl = { checksum: new tc(8192) }.checksum;
    var tu = tn,
      td = tn,
      tf = e.i(844328);
    function tp(e, t = {}) {
      let { compressed: r } = t,
        { prefix: n, x: a, y: i } = e;
      if (!1 === r || ("bigint" == typeof a && "bigint" == typeof i)) {
        if (4 !== n) throw new tb({ prefix: n, cause: new ty() });
        return;
      }
      if (!0 === r || ("bigint" == typeof a && void 0 === i)) {
        if (3 !== n && 2 !== n) throw new tb({ prefix: n, cause: new tg() });
        return;
      }
      throw new tm({ publicKey: e });
    }
    function th(e) {
      if (132 !== e.length && 130 !== e.length && 68 !== e.length)
        throw new tw({ publicKey: e });
      if (130 === e.length)
        return {
          prefix: 4,
          x: BigInt(ts.slice(e, 0, 32)),
          y: BigInt(ts.slice(e, 32, 64)),
        };
      if (132 === e.length) {
        let t = Number(ts.slice(e, 0, 1));
        return {
          prefix: t,
          x: BigInt(ts.slice(e, 1, 33)),
          y: BigInt(ts.slice(e, 33, 65)),
        };
      }
      return {
        prefix: Number(ts.slice(e, 0, 1)),
        x: BigInt(ts.slice(e, 1, 33)),
      };
    }
    class tm extends td.BaseError {
      constructor({ publicKey: e }) {
        super(`Value \`${tf.stringify(e)}\` is not a valid public key.`, {
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
    class tb extends td.BaseError {
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
    class tg extends td.BaseError {
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
    class ty extends td.BaseError {
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
    class tw extends td.BaseError {
      constructor({ publicKey: e }) {
        super(`Value \`${e}\` is an invalid public key size.`, {
          metaMessages: [
            "Expected: 33 bytes (compressed + prefix), 64 bytes (uncompressed) or 65 bytes (uncompressed + prefix).",
            `Received ${ts.size(ts.from(e))} bytes.`,
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
    let tv = /^0x[a-fA-F0-9]{40}$/;
    function tA(e, t = {}) {
      let { strict: r = !0 } = t;
      if (!tv.test(e)) throw new tx({ address: e, cause: new tP() });
      if (r) {
        if (e.toLowerCase() === e) return;
        if (tB(e) !== e) throw new tx({ address: e, cause: new tR() });
      }
    }
    function tB(e) {
      if (tl.has(e)) return tl.get(e);
      tA(e, { strict: !1 });
      let t = e.substring(2).toLowerCase(),
        r = to(ti.fromString(t), { as: "Bytes" }),
        n = t.split("");
      for (let e = 0; e < 40; e += 2)
        r[e >> 1] >> 4 >= 8 && n[e] && (n[e] = n[e].toUpperCase()),
          (15 & r[e >> 1]) >= 8 &&
            n[e + 1] &&
            (n[e + 1] = n[e + 1].toUpperCase());
      let a = `0x${n.join("")}`;
      return tl.set(e, a), a;
    }
    function tE(e, t = {}) {
      let { strict: r = !0 } = t ?? {};
      try {
        return tA(e, { strict: r }), !0;
      } catch {
        return !1;
      }
    }
    class tx extends tu.BaseError {
      constructor({ address: e, cause: t }) {
        super(`Address "${e}" is invalid.`, { cause: t }),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Address.InvalidAddressError",
          });
      }
    }
    class tP extends tu.BaseError {
      constructor() {
        super("Address is not a 20 byte (40 hexadecimal character) value."),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Address.InvalidInputError",
          });
      }
    }
    class tR extends tu.BaseError {
      constructor() {
        super("Address does not match its checksum counterpart."),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Address.InvalidChecksumError",
          });
      }
    }
    function tk(e) {
      let t = !0,
        r = "",
        n = 0,
        a = "",
        i = !1;
      for (let s = 0; s < e.length; s++) {
        let o = e[s];
        if (
          (["(", ")", ","].includes(o) && (t = !0),
          "(" === o && n++,
          ")" === o && n--,
          t)
        ) {
          if (0 === n) {
            if (" " === o && ["event", "function", "error", ""].includes(a))
              a = "";
            else if (((a += o), ")" === o)) {
              i = !0;
              break;
            }
            continue;
          }
          if (" " === o) {
            "," !== e[s - 1] && "," !== r && ",(" !== r && ((r = ""), (t = !1));
            continue;
          }
          (a += o), (r += o);
        }
      }
      if (!i) throw new tn.BaseError("Unable to normalize signature.");
      return a;
    }
    function tN(e, t = {}) {
      let { prepare: r = !0 } = t,
        n =
          Array.isArray(e) || "string" == typeof e
            ? (function (e) {
                let t;
                if ("string" == typeof e) t = (0, tr.parseSignature)(e);
                else {
                  let r = (0, tt.parseStructs)(e),
                    n = e.length;
                  for (let a = 0; a < n; a++) {
                    let n = e[a];
                    if (!(0, te.isStructSignature)(n)) {
                      t = (0, tr.parseSignature)(n, r);
                      break;
                    }
                  }
                }
                if (!t) throw new e7.InvalidAbiItemError({ signature: e });
                return t;
              })(e)
            : e;
      return { ...n, ...(r ? { hash: tT(n) } : {}) };
    }
    function tC(e, t, r) {
      let n,
        { args: a = [], prepare: i = !0 } = r ?? {},
        s = ts.validate(t, { strict: !1 }),
        o = e.filter((e) =>
          s
            ? "function" === e.type || "error" === e.type
              ? tI(e) === ts.slice(t, 0, 4)
              : "event" === e.type && tT(e) === t
            : "name" in e && e.name === t
        );
      if (0 === o.length) throw new tz({ name: t });
      if (1 === o.length) return { ...o[0], ...(i ? { hash: tT(o[0]) } : {}) };
      for (let e of o) {
        if ("inputs" in e) {
          if (!a || 0 === a.length) {
            if (!e.inputs || 0 === e.inputs.length)
              return { ...e, ...(i ? { hash: tT(e) } : {}) };
            continue;
          }
          if (
            e.inputs &&
            0 !== e.inputs.length &&
            e.inputs.length === a.length &&
            a.every((t, r) => {
              let n = "inputs" in e && e.inputs[r];
              return (
                !!n &&
                (function e(t, r) {
                  let n = typeof t,
                    a = r.type;
                  switch (a) {
                    case "address":
                      return tE(t, { strict: !1 });
                    case "bool":
                      return "boolean" === n;
                    case "function":
                    case "string":
                      return "string" === n;
                    default:
                      if ("tuple" === a && "components" in r)
                        return Object.values(r.components).every((r, n) =>
                          e(Object.values(t)[n], r)
                        );
                      if (
                        /^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(
                          a
                        )
                      )
                        return "number" === n || "bigint" === n;
                      if (/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(a))
                        return "string" === n || t instanceof Uint8Array;
                      if (/[a-z]+[1-9]{0,3}(\[[0-9]{0,}\])+$/.test(a))
                        return (
                          Array.isArray(t) &&
                          t.every((t) =>
                            e(t, {
                              ...r,
                              type: a.replace(/(\[[0-9]{0,}\])$/, ""),
                            })
                          )
                        );
                      return !1;
                  }
                })(t, n)
              );
            })
          ) {
            if (n && "inputs" in n && n.inputs) {
              let t = (function e(t, r, n) {
                for (let a in t) {
                  let i = t[a],
                    s = r[a];
                  if (
                    "tuple" === i.type &&
                    "tuple" === s.type &&
                    "components" in i &&
                    "components" in s
                  )
                    return e(i.components, s.components, n[a]);
                  let o = [i.type, s.type];
                  if (
                    (o.includes("address") && o.includes("bytes20")) ||
                    (((o.includes("address") && o.includes("string")) ||
                      (o.includes("address") && o.includes("bytes"))) &&
                      tE(n[a], { strict: !1 }))
                  )
                    return o;
                }
              })(e.inputs, n.inputs, a);
              if (t)
                throw new tS(
                  { abiItem: e, type: t[0] },
                  { abiItem: n, type: t[1] }
                );
            }
            n = e;
          }
        }
      }
      let c = (() => {
        if (n) return n;
        let [e, ...t] = o;
        return { ...e, overloads: t };
      })();
      if (!c) throw new tz({ name: t });
      return { ...c, ...(i ? { hash: tT(c) } : {}) };
    }
    function tI(...e) {
      let t = (() => {
        if (Array.isArray(e[0])) {
          let [t, r] = e;
          return tC(t, r);
        }
        return e[0];
      })();
      return ts.slice(tT(t), 0, 4);
    }
    function tT(...e) {
      let t = (() => {
        if (Array.isArray(e[0])) {
          let [t, r] = e;
          return tC(t, r);
        }
        return e[0];
      })();
      return "string" != typeof t && "hash" in t && t.hash
        ? t.hash
        : to(
            ts.fromString(
              (function (...e) {
                let t = (() => {
                  if (Array.isArray(e[0])) {
                    let [t, r] = e;
                    return tC(t, r);
                  }
                  return e[0];
                })();
                return tk("string" == typeof t ? t : e9.formatAbiItem(t));
              })(t)
            )
          );
    }
    class tS extends tn.BaseError {
      constructor(e, t) {
        super("Found ambiguous types in overloaded ABI Items.", {
          metaMessages: [
            `\`${e.type}\` in \`${tk(e9.formatAbiItem(e.abiItem))}\`, and`,
            `\`${t.type}\` in \`${tk(e9.formatAbiItem(t.abiItem))}\``,
            "",
            "These types encode differently and cannot be distinguished at runtime.",
            "Remove one of the ambiguous items in the ABI.",
          ],
        }),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "AbiItem.AmbiguityError",
          });
      }
    }
    class tz extends tn.BaseError {
      constructor({ name: e, data: t, type: r = "item" }) {
        super(
          `ABI ${r}${
            e ? ` with name "${e}"` : t ? ` with data "${t}"` : ""
          } not found.`
        ),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "AbiItem.NotFoundError",
          });
      }
    }
    tn.BaseError;
    var t$ = e.i(620363),
      tL = e.i(484564),
      tU = tn;
    let tF = /^(.*)\[([0-9]*)\]$/,
      tO = /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/,
      tD =
        /^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/,
      tq = 2n ** 256n - 1n;
    function tj(e) {
      let t = 0;
      for (let r = 0; r < e.length; r++) {
        let { dynamic: n, encoded: a } = e[r];
        n ? (t += 32) : (t += ts.size(a));
      }
      let r = [],
        n = [],
        a = 0;
      for (let i = 0; i < e.length; i++) {
        let { dynamic: s, encoded: o } = e[i];
        s
          ? (r.push(ts.fromNumber(t + a, { size: 32 })),
            n.push(o),
            (a += ts.size(o)))
          : r.push(o);
      }
      return ts.concat(...r, ...n);
    }
    function t_(e) {
      let t = e.match(/^(.*)\[(\d+)?\]$/);
      return t ? [t[2] ? Number(t[2]) : null, t[1]] : void 0;
    }
    function tH(e) {
      let { type: t } = e;
      if ("string" === t || "bytes" === t || t.endsWith("[]")) return !0;
      if ("tuple" === t) return e.components?.some(tH);
      let r = t_(e.type);
      return !!(r && tH({ ...e, type: r[1] }));
    }
    var tM = tn;
    let tV = {
      bytes: new Uint8Array(),
      dataView: new DataView(new ArrayBuffer(0)),
      position: 0,
      positionReadCount: new Map(),
      recursiveReadCount: 0,
      recursiveReadLimit: 1 / 0,
      assertReadLimit() {
        if (this.recursiveReadCount >= this.recursiveReadLimit)
          throw new tJ({
            count: this.recursiveReadCount + 1,
            limit: this.recursiveReadLimit,
          });
      },
      assertPosition(e) {
        if (e < 0 || e > this.bytes.length - 1)
          throw new tZ({ length: this.bytes.length, position: e });
      },
      decrementPosition(e) {
        if (e < 0) throw new tG({ offset: e });
        let t = this.position - e;
        this.assertPosition(t), (this.position = t);
      },
      getReadCount(e) {
        return this.positionReadCount.get(e || this.position) || 0;
      },
      incrementPosition(e) {
        if (e < 0) throw new tG({ offset: e });
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
    function tW(e, { recursiveReadLimit: t = 8192 } = {}) {
      let r = Object.create(tV);
      return (
        (r.bytes = e),
        (r.dataView = new DataView(e.buffer, e.byteOffset, e.byteLength)),
        (r.positionReadCount = new Map()),
        (r.recursiveReadLimit = t),
        r
      );
    }
    class tG extends tM.BaseError {
      constructor({ offset: e }) {
        super(`Offset \`${e}\` cannot be negative.`),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Cursor.NegativeOffsetError",
          });
      }
    }
    class tZ extends tM.BaseError {
      constructor({ length: e, position: t }) {
        super(`Position \`${t}\` is out of bounds (\`0 < position < ${e}\`).`),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Cursor.PositionOutOfBoundsError",
          });
      }
    }
    class tJ extends tM.BaseError {
      constructor({ count: e, limit: t }) {
        super(
          `Recursive read limit of \`${t}\` exceeded (recursive read count: \`${e}\`).`
        ),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Cursor.RecursiveReadLimitExceededError",
          });
      }
    }
    function tK(e, t, r = {}) {
      let { as: n = "Array", checksumAddress: a = !1 } = r,
        i = "string" == typeof t ? ti.fromHex(t) : t,
        s = tW(i);
      if (0 === ti.size(i) && e.length > 0) throw new t1();
      if (ti.size(i) && 32 > ti.size(i))
        throw new t0({
          data: "string" == typeof t ? t : ts.fromBytes(t),
          parameters: e,
          size: ti.size(i),
        });
      let o = 0,
        c = "Array" === n ? [] : {};
      for (let t = 0; t < e.length; ++t) {
        let r = e[t];
        s.setPosition(o);
        let [i, l] = (function e(t, r, n) {
          var a, i, s;
          let { checksumAddress: o, staticPosition: c } = n,
            l = t_(r.type);
          if (l) {
            let [n, a] = l;
            return (function (t, r, n) {
              let { checksumAddress: a, length: i, staticPosition: s } = n;
              if (!i) {
                let n = s + ti.toNumber(t.readBytes(32)),
                  i = n + 32;
                t.setPosition(n);
                let o = ti.toNumber(t.readBytes(32)),
                  c = tH(r),
                  l = 0,
                  u = [];
                for (let n = 0; n < o; ++n) {
                  t.setPosition(i + (c ? 32 * n : l));
                  let [s, o] = e(t, r, {
                    checksumAddress: a,
                    staticPosition: i,
                  });
                  (l += o), u.push(s);
                }
                return t.setPosition(s + 32), [u, 32];
              }
              if (tH(r)) {
                let n = s + ti.toNumber(t.readBytes(32)),
                  o = [];
                for (let s = 0; s < i; ++s) {
                  t.setPosition(n + 32 * s);
                  let [i] = e(t, r, { checksumAddress: a, staticPosition: n });
                  o.push(i);
                }
                return t.setPosition(s + 32), [o, 32];
              }
              let o = 0,
                c = [];
              for (let n = 0; n < i; ++n) {
                let [n, i] = e(t, r, {
                  checksumAddress: a,
                  staticPosition: s + o,
                });
                (o += i), c.push(n);
              }
              return [c, o];
            })(
              t,
              { ...r, type: a },
              { checksumAddress: o, length: n, staticPosition: c }
            );
          }
          if ("tuple" === r.type)
            return (function (t, r, n) {
              let { checksumAddress: a, staticPosition: i } = n,
                s =
                  0 === r.components.length ||
                  r.components.some(({ name: e }) => !e),
                o = s ? [] : {},
                c = 0;
              if (tH(r)) {
                let n = i + ti.toNumber(t.readBytes(32));
                for (let i = 0; i < r.components.length; ++i) {
                  let l = r.components[i];
                  t.setPosition(n + c);
                  let [u, d] = e(t, l, {
                    checksumAddress: a,
                    staticPosition: n,
                  });
                  (c += d), (o[s ? i : l?.name] = u);
                }
                return t.setPosition(i + 32), [o, 32];
              }
              for (let n = 0; n < r.components.length; ++n) {
                let l = r.components[n],
                  [u, d] = e(t, l, { checksumAddress: a, staticPosition: i });
                (o[s ? n : l?.name] = u), (c += d);
              }
              return [o, c];
            })(t, r, { checksumAddress: o, staticPosition: c });
          if ("address" === r.type)
            return (function (e, t = {}) {
              let r,
                { checksum: n = !1 } = t,
                a = e.readBytes(32);
              return [
                ((r = ts.fromBytes(ti.slice(a, -20))), n ? tB(r) : r),
                32,
              ];
            })(t, { checksum: o });
          if ("bool" === r.type) {
            return (a = t), [ti.toBoolean(a.readBytes(32), { size: 32 }), 32];
          }
          if (r.type.startsWith("bytes"))
            return (function (e, t, { staticPosition: r }) {
              let [n, a] = t.type.split("bytes");
              if (!a) {
                let t = ti.toNumber(e.readBytes(32));
                e.setPosition(r + t);
                let n = ti.toNumber(e.readBytes(32));
                if (0 === n) return e.setPosition(r + 32), ["0x", 32];
                let a = e.readBytes(n);
                return e.setPosition(r + 32), [ts.fromBytes(a), 32];
              }
              return [
                ts.fromBytes(e.readBytes(Number.parseInt(a, 10), 32)),
                32,
              ];
            })(t, r, { staticPosition: c });
          if (r.type.startsWith("uint") || r.type.startsWith("int")) {
            let e, n, a;
            return (
              (i = t),
              (e = (s = r).type.startsWith("int")),
              (n = Number.parseInt(s.type.split("int")[1] || "256", 10)),
              (a = i.readBytes(32)),
              [
                n > 48
                  ? ti.toBigInt(a, { signed: e })
                  : ti.toNumber(a, { signed: e }),
                32,
              ]
            );
          }
          if ("string" === r.type)
            return (function (e, { staticPosition: t }) {
              let r = ti.toNumber(e.readBytes(32));
              e.setPosition(t + r);
              let n = ti.toNumber(e.readBytes(32));
              if (0 === n) return e.setPosition(t + 32), ["", 32];
              let a = e.readBytes(n, 32),
                i = ti.toString(ti.trimLeft(a));
              return e.setPosition(t + 32), [i, 32];
            })(t, { staticPosition: c });
          throw new t3(r.type);
        })(s, r, { checksumAddress: a, staticPosition: 0 });
        (o += l), "Array" === n ? c.push(i) : (c[r.name ?? t] = i);
      }
      return c;
    }
    function tY(e, t, r) {
      let { checksumAddress: n = !1 } = r ?? {};
      if (e.length !== t.length)
        throw new t2({ expectedLength: e.length, givenLength: t.length });
      let a = tj(
        (function ({ checksumAddress: e, parameters: t, values: r }) {
          let n = [];
          for (let a = 0; a < t.length; a++)
            n.push(
              (function e({ checksumAddress: t = !1, parameter: r, value: n }) {
                let a = t_(r.type);
                if (a) {
                  let [i, s] = a;
                  return (function (t, r) {
                    let { checksumAddress: n, length: a, parameter: i } = r,
                      s = null === a;
                    if (!Array.isArray(t)) throw new t8(t);
                    if (!s && t.length !== a)
                      throw new t6({
                        expectedLength: a,
                        givenLength: t.length,
                        type: `${i.type}[${a}]`,
                      });
                    let o = !1,
                      c = [];
                    for (let r = 0; r < t.length; r++) {
                      let a = e({
                        checksumAddress: n,
                        parameter: i,
                        value: t[r],
                      });
                      a.dynamic && (o = !0), c.push(a);
                    }
                    if (s || o) {
                      let e = tj(c);
                      if (s) {
                        let t = ts.fromNumber(c.length, { size: 32 });
                        return {
                          dynamic: !0,
                          encoded: c.length > 0 ? ts.concat(t, e) : t,
                        };
                      }
                      if (o) return { dynamic: !0, encoded: e };
                    }
                    return {
                      dynamic: !1,
                      encoded: ts.concat(...c.map(({ encoded: e }) => e)),
                    };
                  })(n, {
                    checksumAddress: t,
                    length: i,
                    parameter: { ...r, type: s },
                  });
                }
                if ("tuple" === r.type)
                  return (function (t, r) {
                    let { checksumAddress: n, parameter: a } = r,
                      i = !1,
                      s = [];
                    for (let r = 0; r < a.components.length; r++) {
                      let o = a.components[r],
                        c = Array.isArray(t) ? r : o.name,
                        l = e({
                          checksumAddress: n,
                          parameter: o,
                          value: t[c],
                        });
                      s.push(l), l.dynamic && (i = !0);
                    }
                    return {
                      dynamic: i,
                      encoded: i
                        ? tj(s)
                        : ts.concat(...s.map(({ encoded: e }) => e)),
                    };
                  })(n, { checksumAddress: t, parameter: r });
                if ("address" === r.type)
                  return (function (e, t) {
                    let { checksum: r = !1 } = t;
                    return (
                      tA(e, { strict: r }),
                      { dynamic: !1, encoded: ts.padLeft(e.toLowerCase()) }
                    );
                  })(n, { checksum: t });
                if ("bool" === r.type) {
                  var i = n;
                  if ("boolean" != typeof i)
                    throw new tn.BaseError(
                      `Invalid boolean value: "${i}" (type: ${typeof i}). Expected: \`true\` or \`false\`.`
                    );
                  return {
                    dynamic: !1,
                    encoded: ts.padLeft(ts.fromBoolean(i)),
                  };
                }
                if (r.type.startsWith("uint") || r.type.startsWith("int")) {
                  let e = r.type.startsWith("int"),
                    [, , t = "256"] = tD.exec(r.type) ?? [];
                  return (function (e, { signed: t, size: r }) {
                    if ("number" == typeof r) {
                      let n = 2n ** (BigInt(r) - (t ? 1n : 0n)) - 1n,
                        a = t ? -n - 1n : 0n;
                      if (e > n || e < a)
                        throw new ts.IntegerOutOfRangeError({
                          max: n.toString(),
                          min: a.toString(),
                          signed: t,
                          size: r / 8,
                          value: e.toString(),
                        });
                    }
                    return {
                      dynamic: !1,
                      encoded: ts.fromNumber(e, { size: 32, signed: t }),
                    };
                  })(n, { signed: e, size: Number(t) });
                }
                if (r.type.startsWith("bytes"))
                  return (function (e, { type: t }) {
                    let [, r] = t.split("bytes"),
                      n = ts.size(e);
                    if (!r) {
                      let t = e;
                      return (
                        n % 32 != 0 &&
                          (t = ts.padRight(
                            t,
                            32 * Math.ceil((e.length - 2) / 2 / 32)
                          )),
                        {
                          dynamic: !0,
                          encoded: ts.concat(
                            ts.padLeft(ts.fromNumber(n, { size: 32 })),
                            t
                          ),
                        }
                      );
                    }
                    if (n !== Number.parseInt(r, 10))
                      throw new t5({
                        expectedSize: Number.parseInt(r, 10),
                        value: e,
                      });
                    return { dynamic: !1, encoded: ts.padRight(e) };
                  })(n, { type: r.type });
                if ("string" === r.type) {
                  var s = n;
                  let e = ts.fromString(s),
                    t = Math.ceil(ts.size(e) / 32),
                    r = [];
                  for (let n = 0; n < t; n++)
                    r.push(ts.padRight(ts.slice(e, 32 * n, (n + 1) * 32)));
                  return {
                    dynamic: !0,
                    encoded: ts.concat(
                      ts.padRight(ts.fromNumber(ts.size(e), { size: 32 })),
                      ...r
                    ),
                  };
                }
                throw new t3(r.type);
              })({ checksumAddress: e, parameter: t[a], value: r[a] })
            );
          return n;
        })({ checksumAddress: n, parameters: e, values: t })
      );
      return 0 === a.length ? "0x" : a;
    }
    function tQ(e, t) {
      if (e.length !== t.length)
        throw new t2({ expectedLength: e.length, givenLength: t.length });
      let r = [];
      for (let n = 0; n < e.length; n++) {
        let a = e[n],
          i = t[n];
        r.push(tQ.encode(a, i));
      }
      return ts.concat(...r);
    }
    function tX(e) {
      return (Array.isArray(e) && "string" == typeof e[0]) ||
        "string" == typeof e
        ? tL.parseAbiParameters(e)
        : e;
    }
    (tQ || (tQ = {})).encode = function e(t, r, n = !1) {
      if ("address" === t) return tA(r), ts.padLeft(r.toLowerCase(), 32 * !!n);
      if ("string" === t) return ts.fromString(r);
      if ("bytes" === t) return r;
      if ("bool" === t) return ts.padLeft(ts.fromBoolean(r), n ? 32 : 1);
      let a = t.match(tD);
      if (a) {
        let [e, t, i = "256"] = a,
          s = Number.parseInt(i, 10) / 8;
        return ts.fromNumber(r, { size: n ? 32 : s, signed: "int" === t });
      }
      let i = t.match(tO);
      if (i) {
        let [e, t] = i;
        if (Number.parseInt(t, 10) !== (r.length - 2) / 2)
          throw new t5({ expectedSize: Number.parseInt(t, 10), value: r });
        return ts.padRight(r, 32 * !!n);
      }
      let s = t.match(tF);
      if (s && Array.isArray(r)) {
        let [t, n] = s,
          a = [];
        for (let t = 0; t < r.length; t++) a.push(e(n, r[t], !0));
        return 0 === a.length ? "0x" : ts.concat(...a);
      }
      throw new t3(t);
    };
    class t0 extends tU.BaseError {
      constructor({ data: e, parameters: t, size: r }) {
        super(`Data size of ${r} bytes is too small for given parameters.`, {
          metaMessages: [
            `Params: (${t$.formatAbiParameters(t)})`,
            `Data:   ${e} (${r} bytes)`,
          ],
        }),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "AbiParameters.DataSizeTooSmallError",
          });
      }
    }
    class t1 extends tU.BaseError {
      constructor() {
        super('Cannot decode zero data ("0x") with ABI parameters.'),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "AbiParameters.ZeroDataError",
          });
      }
    }
    class t6 extends tU.BaseError {
      constructor({ expectedLength: e, givenLength: t, type: r }) {
        super(
          `Array length mismatch for type \`${r}\`. Expected: \`${e}\`. Given: \`${t}\`.`
        ),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "AbiParameters.ArrayLengthMismatchError",
          });
      }
    }
    class t5 extends tU.BaseError {
      constructor({ expectedSize: e, value: t }) {
        super(
          `Size of bytes "${t}" (bytes${ts.size(
            t
          )}) does not match expected size (bytes${e}).`
        ),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "AbiParameters.BytesSizeMismatchError",
          });
      }
    }
    class t2 extends tU.BaseError {
      constructor({ expectedLength: e, givenLength: t }) {
        super(`ABI encoding parameters/values length mismatch.
Expected length (parameters): ${e}
Given length (values): ${t}`),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "AbiParameters.LengthMismatchError",
          });
      }
    }
    class t8 extends tU.BaseError {
      constructor(e) {
        super(`Value \`${e}\` is not a valid array.`),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "AbiParameters.InvalidArrayError",
          });
      }
    }
    class t3 extends tU.BaseError {
      constructor(e) {
        super(`Type \`${e}\` is not a valid ABI Type.`),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "AbiParameters.InvalidTypeError",
          });
      }
    }
    function t4(e, t = {}) {
      return tN(e, t);
    }
    function t9(e, t, r) {
      let n = tC(e, t, r);
      if ("function" !== n.type) throw new tz({ name: t, type: "function" });
      return n;
    }
    var t7 = e.i(914146);
    async function re(e, t) {
      let {
          blockNumber: r,
          blockTag: n,
          calls: i,
          stateOverrides: s,
          traceAssetChanges: o,
          traceTransfers: c,
          validation: l,
        } = t,
        d = t.account ? (0, G.parseAccount)(t.account) : void 0;
      if (o && !d)
        throw new u.BaseError(
          "`account` is required when `traceAssetChanges` is true"
        );
      let f = d
          ? (function (...e) {
              let [t, r] = (() => {
                  if (Array.isArray(e[0])) {
                    let [t, r] = e;
                    return [
                      (function (e) {
                        let t = e.find((e) => "constructor" === e.type);
                        if (!t) throw new tz({ name: "constructor" });
                        return t;
                      })(t),
                      r,
                    ];
                  }
                  return e;
                })(),
                { bytecode: n, args: a } = r;
              return ts.concat(
                n,
                t.inputs?.length && a?.length ? tY(t.inputs, a) : "0x"
              );
            })(tN("constructor(bytes, bytes)"), {
              bytecode: eX.deploylessCallViaBytecodeBytecode,
              args: [
                "0x6080604052348015600e575f80fd5b5061016d8061001c5f395ff3fe608060405234801561000f575f80fd5b5060043610610029575f3560e01c8063f8b2cb4f1461002d575b5f80fd5b610047600480360381019061004291906100db565b61005d565b604051610054919061011e565b60405180910390f35b5f8173ffffffffffffffffffffffffffffffffffffffff16319050919050565b5f80fd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6100aa82610081565b9050919050565b6100ba816100a0565b81146100c4575f80fd5b50565b5f813590506100d5816100b1565b92915050565b5f602082840312156100f0576100ef61007d565b5b5f6100fd848285016100c7565b91505092915050565b5f819050919050565b61011881610106565b82525050565b5f6020820190506101315f83018461010f565b9291505056fea26469706673582212203b9fe929fe995c7cf9887f0bdba8a36dd78e8b73f149b17d2d9ad7cd09d2dc6264736f6c634300081a0033",
                (function (...e) {
                  let [t, r = []] = (() => {
                      if (Array.isArray(e[0])) {
                        let [t, r, n] = e;
                        return [t9(t, r, { args: n }), n];
                      }
                      let [t, r] = e;
                      return [t, r];
                    })(),
                    { overloads: n } = t,
                    a = n ? t9([t, ...n], t.name, { args: r }) : t,
                    i = tI(a),
                    s = r.length > 0 ? tY(a.inputs, r) : void 0;
                  return s ? ts.concat(i, s) : i;
                })(t4("function getBalance(address)"), [d.address]),
              ],
            })
          : void 0,
        p = o
          ? await Promise.all(
              t.calls.map(async (t) => {
                if (!t.data && !t.abi) return;
                let { accessList: r } = await Q(e, {
                  account: d.address,
                  ...t,
                  data: t.abi ? (0, a.encodeFunctionData)(t) : t.data,
                });
                return r.map(({ address: e, storageKeys: t }) =>
                  t.length > 0 ? e : null
                );
              })
            ).then((e) => e.flat().filter(Boolean))
          : [],
        h = await e4(e, {
          blockNumber: r,
          blockTag: n,
          blocks: [
            ...(o
              ? [
                  { calls: [{ data: f }], stateOverrides: s },
                  {
                    calls: p.map((e, t) => ({
                      abi: [
                        t4("function balanceOf(address) returns (uint256)"),
                      ],
                      functionName: "balanceOf",
                      args: [d.address],
                      to: e,
                      from: t7.zeroAddress,
                      nonce: t,
                    })),
                    stateOverrides: [{ address: t7.zeroAddress, nonce: 0 }],
                  },
                ]
              : []),
            {
              calls: [...i, { to: t7.zeroAddress }].map((e) => ({
                ...e,
                from: d?.address,
              })),
              stateOverrides: s,
            },
            ...(o
              ? [
                  { calls: [{ data: f }] },
                  {
                    calls: p.map((e, t) => ({
                      abi: [
                        t4("function balanceOf(address) returns (uint256)"),
                      ],
                      functionName: "balanceOf",
                      args: [d.address],
                      to: e,
                      from: t7.zeroAddress,
                      nonce: t,
                    })),
                    stateOverrides: [{ address: t7.zeroAddress, nonce: 0 }],
                  },
                  {
                    calls: p.map((e, t) => ({
                      to: e,
                      abi: [t4("function decimals() returns (uint256)")],
                      functionName: "decimals",
                      from: t7.zeroAddress,
                      nonce: t,
                    })),
                    stateOverrides: [{ address: t7.zeroAddress, nonce: 0 }],
                  },
                  {
                    calls: p.map((e, t) => ({
                      to: e,
                      abi: [t4("function tokenURI(uint256) returns (string)")],
                      functionName: "tokenURI",
                      args: [0n],
                      from: t7.zeroAddress,
                      nonce: t,
                    })),
                    stateOverrides: [{ address: t7.zeroAddress, nonce: 0 }],
                  },
                  {
                    calls: p.map((e, t) => ({
                      to: e,
                      abi: [t4("function symbol() returns (string)")],
                      functionName: "symbol",
                      from: t7.zeroAddress,
                      nonce: t,
                    })),
                    stateOverrides: [{ address: t7.zeroAddress, nonce: 0 }],
                  },
                ]
              : []),
          ],
          traceTransfers: c,
          validation: l,
        }),
        m = o ? h[2] : h[0],
        [b, g, , y, w, v, A, B] = o ? h : [],
        { calls: E, ...x } = m,
        P = E.slice(0, -1) ?? [],
        R = [...(b?.calls ?? []), ...(g?.calls ?? [])].map((e) =>
          "success" === e.status ? (0, ek.hexToBigInt)(e.data) : null
        ),
        k = [...(y?.calls ?? []), ...(w?.calls ?? [])].map((e) =>
          "success" === e.status ? (0, ek.hexToBigInt)(e.data) : null
        ),
        N = (v?.calls ?? []).map((e) =>
          "success" === e.status ? e.result : null
        ),
        C = (B?.calls ?? []).map((e) =>
          "success" === e.status ? e.result : null
        ),
        I = (A?.calls ?? []).map((e) =>
          "success" === e.status ? e.result : null
        ),
        T = [];
      for (let [e, t] of k.entries()) {
        let r = R[e];
        if ("bigint" != typeof t || "bigint" != typeof r) continue;
        let n = N[e - 1],
          a = C[e - 1],
          i = I[e - 1],
          s =
            0 === e
              ? { address: t7.ethAddress, decimals: 18, symbol: "ETH" }
              : {
                  address: p[e - 1],
                  decimals: i || n ? Number(n ?? 1) : void 0,
                  symbol: a ?? void 0,
                };
        T.some((e) => e.token.address === s.address) ||
          T.push({ token: s, value: { pre: r, post: t, diff: t - r } });
      }
      return { assetChanges: T, block: x, results: P };
    }
    var rt = e.i(106145);
    async function rr(e, { filter: t }) {
      return t.request({ method: "eth_uninstallFilter", params: [t.id] });
    }
    var rn = tn;
    let ra =
      "0x6492649264926492649264926492649264926492649264926492649264926492";
    function ri(e) {
      if (ts.slice(e, -32) !== ra) throw new ru(e);
    }
    function rs(e) {
      return "string" == typeof e ? ro(e) : e;
    }
    function ro(e) {
      ri(e);
      let [t, r, n] = tK(tX("address, bytes, bytes"), e);
      return { data: r, signature: n, to: t };
    }
    function rc(e) {
      let { data: t, signature: r, to: n } = e;
      return ts.concat(tY(tX("address, bytes, bytes"), [n, t, r]), ra);
    }
    function rl(e) {
      try {
        return ri(e), !0;
      } catch {
        return !1;
      }
    }
    class ru extends rn.BaseError {
      constructor(e) {
        super(`Value \`${e}\` is an invalid ERC-6492 wrapped signature.`),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "SignatureErc6492.InvalidWrappedSignatureError",
          });
      }
    }
    e.s(
      [
        "InvalidWrappedSignatureError",
        () => ru,
        "assert",
        () => ri,
        "from",
        () => rs,
        "magicBytes",
        0,
        ra,
        "universalSignatureValidatorAbi",
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
        "universalSignatureValidatorBytecode",
        0,
        "0x608060405234801561001057600080fd5b5060405161069438038061069483398101604081905261002f9161051e565b600061003c848484610048565b9050806000526001601ff35b60007f64926492649264926492649264926492649264926492649264926492649264926100748361040c565b036101e7576000606080848060200190518101906100929190610577565b60405192955090935091506000906001600160a01b038516906100b69085906105dd565b6000604051808303816000865af19150503d80600081146100f3576040519150601f19603f3d011682016040523d82523d6000602084013e6100f8565b606091505b50509050876001600160a01b03163b60000361016057806101605760405162461bcd60e51b815260206004820152601e60248201527f5369676e617475726556616c696461746f723a206465706c6f796d656e74000060448201526064015b60405180910390fd5b604051630b135d3f60e11b808252906001600160a01b038a1690631626ba7e90610190908b9087906004016105f9565b602060405180830381865afa1580156101ad573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101d19190610633565b6001600160e01b03191614945050505050610405565b6001600160a01b0384163b1561027a57604051630b135d3f60e11b808252906001600160a01b03861690631626ba7e9061022790879087906004016105f9565b602060405180830381865afa158015610244573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102689190610633565b6001600160e01b031916149050610405565b81516041146102df5760405162461bcd60e51b815260206004820152603a602482015260008051602061067483398151915260448201527f3a20696e76616c6964207369676e6174757265206c656e6774680000000000006064820152608401610157565b6102e7610425565b5060208201516040808401518451859392600091859190811061030c5761030c61065d565b016020015160f81c9050601b811480159061032b57508060ff16601c14155b1561038c5760405162461bcd60e51b815260206004820152603b602482015260008051602061067483398151915260448201527f3a20696e76616c6964207369676e617475726520762076616c756500000000006064820152608401610157565b60408051600081526020810180835289905260ff83169181019190915260608101849052608081018390526001600160a01b0389169060019060a0016020604051602081039080840390855afa1580156103ea573d6000803e3d6000fd5b505050602060405103516001600160a01b0316149450505050505b9392505050565b600060208251101561041d57600080fd5b508051015190565b60405180606001604052806003906020820280368337509192915050565b6001600160a01b038116811461045857600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b60005b8381101561048c578181015183820152602001610474565b50506000910152565b600082601f8301126104a657600080fd5b81516001600160401b038111156104bf576104bf61045b565b604051601f8201601f19908116603f011681016001600160401b03811182821017156104ed576104ed61045b565b60405281815283820160200185101561050557600080fd5b610516826020830160208701610471565b949350505050565b60008060006060848603121561053357600080fd5b835161053e81610443565b6020850151604086015191945092506001600160401b0381111561056157600080fd5b61056d86828701610495565b9150509250925092565b60008060006060848603121561058c57600080fd5b835161059781610443565b60208501519093506001600160401b038111156105b357600080fd5b6105bf86828701610495565b604086015190935090506001600160401b0381111561056157600080fd5b600082516105ef818460208701610471565b9190910192915050565b828152604060208201526000825180604084015261061e816060850160208701610471565b601f01601f1916919091016060019392505050565b60006020828403121561064557600080fd5b81516001600160e01b03198116811461040557600080fd5b634e487b7160e01b600052603260045260246000fdfe5369676e617475726556616c696461746f72237265636f7665725369676e6572",
        "unwrap",
        () => ro,
        "validate",
        () => rl,
        "wrap",
        () => rc,
      ],
      134848
    );
    var rd = e.i(134848),
      rd = rd;
    function rf(e) {
      if (e <= 255) return 1;
      if (e <= 65535) return 2;
      if (e <= 0xffffff) return 3;
      if (e <= 0xffffffff) return 4;
      throw new tn.BaseError("Length is too large.");
    }
    var rp = e.i(337575),
      rh = tn;
    function rm(e, t = {}) {
      let { recovered: r } = t;
      if (void 0 === e.r || void 0 === e.s || (r && void 0 === e.yParity))
        throw new rA({ signature: e });
      if (e.r < 0n || e.r > tq) throw new rB({ value: e.r });
      if (e.s < 0n || e.s > tq) throw new rE({ value: e.s });
      if ("number" == typeof e.yParity && 0 !== e.yParity && 1 !== e.yParity)
        throw new rx({ value: e.yParity });
    }
    function rb(e) {
      if (130 !== e.length && 132 !== e.length) throw new rv({ signature: e });
      let t = BigInt(ts.slice(e, 0, 32)),
        r = BigInt(ts.slice(e, 32, 64)),
        n = (() => {
          let t = Number(`0x${e.slice(130)}`);
          if (!Number.isNaN(t))
            try {
              return rw(t);
            } catch {
              throw new rx({ value: t });
            }
        })();
      return void 0 === n ? { r: t, s: r } : { r: t, s: r, yParity: n };
    }
    function rg(e) {
      if (void 0 !== e.r && void 0 !== e.s) return ry(e);
    }
    function ry(e) {
      let t = (() => {
        var t, r;
        let n;
        if ("string" == typeof e) return rb(e);
        if (e instanceof Uint8Array) return rb(ts.fromBytes(e));
        return "string" == typeof e.r
          ? ((t = e),
            (n = (() => {
              let e = t.v ? Number(t.v) : void 0,
                r = t.yParity ? Number(t.yParity) : void 0;
              if (
                ("number" == typeof e && "number" != typeof r && (r = rw(e)),
                "number" != typeof r)
              )
                throw new rx({ value: t.yParity });
              return r;
            })()),
            { r: BigInt(t.r), s: BigInt(t.s), yParity: n })
          : e.v
          ? { r: (r = e).r, s: r.s, yParity: rw(r.v) }
          : {
              r: e.r,
              s: e.s,
              ...(void 0 !== e.yParity ? { yParity: e.yParity } : {}),
            };
      })();
      return rm(t), t;
    }
    function rw(e) {
      if (0 === e || 27 === e) return 0;
      if (1 === e || 28 === e) return 1;
      if (e >= 35) return +(e % 2 == 0);
      throw new rP({ value: e });
    }
    class rv extends rh.BaseError {
      constructor({ signature: e }) {
        super(`Value \`${e}\` is an invalid signature size.`, {
          metaMessages: [
            "Expected: 64 bytes or 65 bytes.",
            `Received ${ts.size(ts.from(e))} bytes.`,
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
    class rA extends rh.BaseError {
      constructor({ signature: e }) {
        super(
          `Signature \`${tf.stringify(
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
    class rB extends rh.BaseError {
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
    class rE extends rh.BaseError {
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
    class rx extends rh.BaseError {
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
    class rP extends rh.BaseError {
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
    var rR = tn;
    rp.secp256k1;
    let rk =
        "0x8010801080108010801080108010801080108010801080108010801080108010",
      rN = tX(
        "(uint256 chainId, address delegation, uint256 nonce, uint8 yParity, uint256 r, uint256 s), address to, bytes data"
      );
    function rC(e) {
      if ("string" == typeof e) {
        if (ts.slice(e, -32) !== rk) throw new r$(e);
      } else rm(e.authorization);
    }
    function rI(e) {
      return "string" == typeof e ? rT(e) : e;
    }
    function rT(e) {
      rC(e);
      let t = ts.toNumber(ts.slice(e, -64, -32)),
        r = ts.slice(e, -t - 64, -64),
        n = ts.slice(e, 0, -t - 64),
        [a, i, s] = tK(rN, r);
      return {
        authorization: (function (e, t = {}) {
          return "string" == typeof e.chainId
            ? (function (e) {
                let { address: t, chainId: r, nonce: n } = e,
                  a = rg(e);
                return {
                  address: t,
                  chainId: Number(r),
                  nonce: BigInt(n),
                  ...a,
                };
              })(e)
            : { ...e, ...t.signature };
        })({
          address: a.delegation,
          chainId: Number(a.chainId),
          nonce: a.nonce,
          yParity: a.yParity,
          r: a.r,
          s: a.s,
        }),
        signature: n,
        ...(s && "0x" !== s ? { data: s, to: i } : {}),
      };
    }
    function rS(e) {
      let { data: t, signature: r } = e;
      rC(e);
      let n = (function (e, t = {}) {
          let r = to(
            `0x${(function (e, t = {}) {
              tp(e);
              let { prefix: r, x: n, y: a } = e,
                { includePrefix: i = !0 } = t;
              return ts.concat(
                i ? ts.fromNumber(r, { size: 1 }) : "0x",
                ts.fromNumber(n, { size: 32 }),
                "bigint" == typeof a ? ts.fromNumber(a, { size: 32 }) : "0x"
              );
            })(e).slice(4)}`
          ).substring(26);
          return (function (e, t = {}) {
            let { checksum: r = !1 } = t;
            return (tA(e), r) ? tB(e) : e;
          })(`0x${r}`, t);
        })(
          (function (e) {
            var t;
            let r,
              { payload: n, signature: a } = e,
              { r: i, s, yParity: o } = a;
            return (
              (t = new rp.secp256k1.Signature(BigInt(i), BigInt(s))
                .addRecoveryBit(o)
                .recoverPublicKey(ts.from(n).substring(2))),
              tp(
                (r = (() => {
                  if (ts.validate(t)) return th(t);
                  if (ti.validate(t)) {
                    var e;
                    return (e = t), th(ts.fromBytes(e));
                  }
                  let { prefix: r, x: n, y: a } = t;
                  return "bigint" == typeof n && "bigint" == typeof a
                    ? { prefix: r ?? 4, x: n, y: a }
                    : { prefix: r, x: n };
                })())
              ),
              r
            );
          })({
            payload: (function (e, t = {}) {
              let { presign: r } = t;
              return to(
                ts.concat(
                  "0x05",
                  (function (e, t = {}) {
                    let { as: r = "Hex" } = t;
                    return (function (e, t) {
                      let { as: r } = t,
                        n = (function e(t) {
                          var r, n;
                          let a, i, s, o;
                          return Array.isArray(t)
                            ? ((i = rf(
                                (a = (r = t.map((t) => e(t))).reduce(
                                  (e, t) => e + t.length,
                                  0
                                ))
                              )),
                              {
                                length: a <= 55 ? 1 + a : 1 + i + a,
                                encode(e) {
                                  for (let { encode: t } of (a <= 55
                                    ? e.pushByte(192 + a)
                                    : (e.pushByte(247 + i),
                                      1 === i
                                        ? e.pushUint8(a)
                                        : 2 === i
                                        ? e.pushUint16(a)
                                        : 3 === i
                                        ? e.pushUint24(a)
                                        : e.pushUint32(a)),
                                  r))
                                    t(e);
                                },
                              })
                            : ((o = rf(
                                (s =
                                  "string" == typeof (n = t)
                                    ? ti.fromHex(n)
                                    : n).length
                              )),
                              {
                                length:
                                  1 === s.length && s[0] < 128
                                    ? 1
                                    : s.length <= 55
                                    ? 1 + s.length
                                    : 1 + o + s.length,
                                encode(e) {
                                  (1 === s.length && s[0] < 128) ||
                                    (s.length <= 55
                                      ? e.pushByte(128 + s.length)
                                      : (e.pushByte(183 + o),
                                        1 === o
                                          ? e.pushUint8(s.length)
                                          : 2 === o
                                          ? e.pushUint16(s.length)
                                          : 3 === o
                                          ? e.pushUint24(s.length)
                                          : e.pushUint32(s.length))),
                                    e.pushBytes(s);
                                },
                              });
                        })(e),
                        a = tW(new Uint8Array(n.length));
                      return (n.encode(a), "Hex" === r)
                        ? ts.fromBytes(a.bytes)
                        : a.bytes;
                    })(e, { as: r });
                  })(
                    (function (e) {
                      let { address: t, chainId: r, nonce: n } = e,
                        a = rg(e);
                      return [
                        r ? ts.fromNumber(r) : "0x",
                        t,
                        n ? ts.fromNumber(n) : "0x",
                        ...(a
                          ? (function (e) {
                              let { r: t, s: r, yParity: n } = e;
                              return [
                                n ? "0x01" : "0x",
                                0n === t ? "0x" : ts.trimLeft(ts.fromNumber(t)),
                                0n === r ? "0x" : ts.trimLeft(ts.fromNumber(r)),
                              ];
                            })(a)
                          : []),
                      ];
                    })(
                      r
                        ? {
                            address: e.address,
                            chainId: e.chainId,
                            nonce: e.nonce,
                          }
                        : e
                    )
                  )
                )
              );
            })(e.authorization, { presign: !0 }),
            signature: ry(e.authorization),
          })
        ),
        a = tY(rN, [
          {
            ...e.authorization,
            delegation: e.authorization.address,
            chainId: BigInt(e.authorization.chainId),
          },
          e.to ?? n,
          t ?? "0x",
        ]),
        i = ts.fromNumber(ts.size(a), { size: 32 });
      return ts.concat(r, a, i, rk);
    }
    function rz(e) {
      try {
        return rC(e), !0;
      } catch {
        return !1;
      }
    }
    class r$ extends rR.BaseError {
      constructor(e) {
        super(`Value \`${e}\` is an invalid ERC-8010 wrapped signature.`),
          Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "SignatureErc8010.InvalidWrappedSignatureError",
          });
      }
    }
    e.s(
      [
        "InvalidWrappedSignatureError",
        () => r$,
        "assert",
        () => rC,
        "from",
        () => rI,
        "magicBytes",
        0,
        rk,
        "suffixParameters",
        0,
        rN,
        "unwrap",
        () => rT,
        "validate",
        () => rz,
        "wrap",
        () => rS,
      ],
      696350
    );
    var rL = e.i(696350),
      rL = rL,
      rU = e.i(289169),
      rF = e.i(806685),
      rO = e.i(290392);
    async function rD({ address: e, authorization: t, signature: r }) {
      return (0, rF.isAddressEqual)(
        (0, i.getAddress)(e),
        await (0, rO.recoverAuthorizationAddress)({
          authorization: t,
          signature: r,
        })
      );
    }
    var rq = e.i(418217);
    async function rj(e, t) {
      let r,
        {
          address: n,
          chain: a = e.chain,
          hash: s,
          erc6492VerifierAddress: o = t.universalSignatureVerifierAddress ??
            a?.contracts?.erc6492Verifier?.address,
          multicallAddress: c = t.multicallAddress ??
            a?.contracts?.multicall3?.address,
          mode: u = "auto",
        } = t;
      if (a?.verifyHash) return await a.verifyHash(e, t);
      let d =
        ((r = t.signature),
        (0, g.isHex)(r)
          ? r
          : "object" == typeof r && "r" in r && "s" in r
          ? (function ({ r: e, s: t, to: r = "hex", v: n, yParity: a }) {
              let i = (() => {
                  if (0 === a || 1 === a) return a;
                  if (n && (27n === n || 28n === n || n >= 35n))
                    return +(n % 2n === 0n);
                  throw Error("Invalid `v` or `yParity` value");
                })(),
                s = `0x${new rp.secp256k1.Signature(
                  (0, ek.hexToBigInt)(e),
                  (0, ek.hexToBigInt)(t)
                ).toCompactHex()}${0 === i ? "1b" : "1c"}`;
              return "hex" === r ? s : (0, m.hexToBytes)(s);
            })(r)
          : (0, l.bytesToHex)(r));
      try {
        if ("eoa" === u)
          try {
            if (
              (0, rF.isAddressEqual)(
                (0, i.getAddress)(n),
                await (0, rq.recoverAddress)({ hash: s, signature: d })
              )
            )
              return !0;
          } catch {}
        if (rL.validate(d))
          return await r_(e, { ...t, multicallAddress: c, signature: d });
        return await rH(e, { ...t, verifierAddress: o, signature: d });
      } catch (e) {
        if ("eoa" !== u)
          try {
            if (
              (0, rF.isAddressEqual)(
                (0, i.getAddress)(n),
                await (0, rq.recoverAddress)({ hash: s, signature: d })
              )
            )
              return !0;
          } catch {}
        if (e instanceof rV) return !1;
        throw e;
      }
    }
    async function r_(e, t) {
      let {
          address: n,
          blockHash: i,
          blockNumber: s,
          blockTag: o,
          hash: c,
          multicallAddress: u,
          requireCanonical: d,
        } = t,
        {
          authorization: f,
          data: p,
          signature: m,
          to: b,
        } = rL.unwrap(t.signature);
      if (
        (await (0, eI.getCode)(e, {
          address: n,
          blockHash: i,
          blockNumber: s,
          blockTag: o,
          requireCanonical: d,
        })) === (0, h.concatHex)(["0xef0100", f.address])
      )
        return await rM(e, { ...t, signature: m });
      let g = {
        address: f.address,
        chainId: Number(f.chainId),
        nonce: Number(f.nonce),
        r: (0, l.numberToHex)(f.r, { size: 32 }),
        s: (0, l.numberToHex)(f.s, { size: 32 }),
        yParity: f.yParity,
      };
      if (!(await rD({ address: n, authorization: g }))) throw new rV();
      let y = await (0, A.getAction)(
          e,
          B.readContract,
          "readContract"
        )({
          ...(u ? { address: u } : { code: eX.multicall3Bytecode }),
          authorizationList: [g],
          abi: r.multicall3Abi,
          blockHash: i,
          blockNumber: s,
          blockTag: "pending",
          functionName: "aggregate3",
          requireCanonical: d,
          args: [
            [
              ...(p ? [{ allowFailure: !0, target: b ?? n, callData: p }] : []),
              {
                allowFailure: !0,
                target: n,
                callData: (0, a.encodeFunctionData)({
                  abi: r.erc1271Abi,
                  functionName: "isValidSignature",
                  args: [c, m],
                }),
              },
            ],
          ],
        }),
        w = y[y.length - 1]?.returnData;
      if (w?.startsWith("0x1626ba7e")) return !0;
      throw new rV();
    }
    async function rH(e, t) {
      let {
          address: n,
          factory: i,
          factoryData: s,
          hash: o,
          signature: c,
          verifierAddress: l,
          ...u
        } = t,
        f = await (async () =>
          (!i && !s) || rd.validate(c)
            ? c
            : rd.wrap({ data: s, signature: c, to: i }))(),
        p = l
          ? {
              to: l,
              data: (0, a.encodeFunctionData)({
                abi: r.erc6492SignatureValidatorAbi,
                functionName: "isValidSig",
                args: [n, o, f],
              }),
              ...u,
            }
          : {
              data: (0, rU.encodeDeployData)({
                abi: r.erc6492SignatureValidatorAbi,
                args: [n, o, f],
                bytecode: eX.erc6492SignatureValidatorByteCode,
              }),
              ...u,
            },
        { data: h } = await (0, A.getAction)(
          e,
          W.call,
          "call"
        )(p).catch((e) => {
          if (e instanceof d.CallExecutionError) throw new rV();
          throw e;
        });
      if ((0, ek.hexToBool)(h ?? "0x0")) return !0;
      throw new rV();
    }
    async function rM(e, t) {
      let {
        address: n,
        blockHash: a,
        blockNumber: i,
        blockTag: s,
        hash: o,
        requireCanonical: c,
        signature: l,
      } = t;
      if (
        (
          await (0, A.getAction)(
            e,
            B.readContract,
            "readContract"
          )({
            address: n,
            abi: r.erc1271Abi,
            args: [o, l],
            blockHash: a,
            blockNumber: i,
            blockTag: s,
            functionName: "isValidSignature",
            requireCanonical: c,
          }).catch((e) => {
            if (e instanceof d.ContractFunctionExecutionError) throw new rV();
            throw e;
          })
        ).startsWith("0x1626ba7e")
      )
        return !0;
      throw new rV();
    }
    class rV extends Error {}
    var rW = e.i(658765);
    async function rG(
      e,
      { address: t, message: r, factory: n, factoryData: a, signature: i, ...s }
    ) {
      let o = (0, rW.hashMessage)(r);
      return (0, A.getAction)(
        e,
        rj,
        "verifyHash"
      )({
        address: t,
        factory: n,
        factoryData: a,
        hash: o,
        signature: i,
        ...s,
      });
    }
    var rZ = e.i(995062);
    async function rJ(e, t) {
      let {
          address: r,
          factory: n,
          factoryData: a,
          signature: i,
          message: s,
          primaryType: o,
          types: c,
          domain: l,
          ...u
        } = t,
        d = (0, rZ.hashTypedData)({
          message: s,
          primaryType: o,
          types: c,
          domain: l,
        });
      return (0, A.getAction)(
        e,
        rj,
        "verifyHash"
      )({
        address: r,
        factory: n,
        factoryData: a,
        hash: d,
        signature: i,
        ...u,
      });
    }
    var rK = e.i(948789),
      rY = e.i(127465),
      rQ = e.i(43473),
      rX = e.i(976215),
      r0 = e.i(34888),
      r1 = e.i(383856),
      r6 = e.i(222427);
    let r5 =
        /^(?:(?<scheme>[a-zA-Z][a-zA-Z0-9+-.]*):\/\/)?(?<domain>[a-zA-Z0-9+-.]*(?::[0-9]{1,5})?) (?:wants you to sign in with your Ethereum account:\n)(?<address>0x[a-fA-F0-9]{40})\n\n(?:(?<statement>.*)\n\n)?/,
      r2 =
        /(?:URI: (?<uri>.+))\n(?:Version: (?<version>.+))\n(?:Chain ID: (?<chainId>\d+))\n(?:Nonce: (?<nonce>[a-zA-Z0-9]+))\n(?:Issued At: (?<issuedAt>.+))(?:\nExpiration Time: (?<expirationTime>.+))?(?:\nNot Before: (?<notBefore>.+))?(?:\nRequest ID: (?<requestId>.+))?/;
    var r8 = e.i(796516);
    async function r3(e, t) {
      let {
          address: r,
          domain: n,
          message: a,
          nonce: i,
          scheme: s,
          signature: o,
          time: c = new Date(),
          ...l
        } = t,
        u = (function (e) {
          let { scheme: t, statement: r, ...n } = e.match(r5)?.groups ?? {},
            {
              chainId: a,
              expirationTime: i,
              issuedAt: s,
              notBefore: o,
              requestId: c,
              ...l
            } = e.match(r2)?.groups ?? {},
            u = e.split("Resources:")[1]?.split("\n- ").slice(1);
          return {
            ...n,
            ...l,
            ...(a ? { chainId: Number(a) } : {}),
            ...(i ? { expirationTime: new Date(i) } : {}),
            ...(s ? { issuedAt: new Date(s) } : {}),
            ...(o ? { notBefore: new Date(o) } : {}),
            ...(c ? { requestId: c } : {}),
            ...(u ? { resources: u } : {}),
            ...(t ? { scheme: t } : {}),
            ...(r ? { statement: r } : {}),
          };
        })(a);
      if (
        !u.address ||
        !(function (e) {
          let {
            address: t,
            domain: r,
            message: n,
            nonce: a,
            scheme: i,
            time: s = new Date(),
          } = e;
          if (
            (r && n.domain !== r) ||
            (a && n.nonce !== a) ||
            (i && n.scheme !== i) ||
            (n.expirationTime && s >= n.expirationTime) ||
            (n.notBefore && s < n.notBefore)
          )
            return !1;
          try {
            if (
              !n.address ||
              !(0, r8.isAddress)(n.address, { strict: !1 }) ||
              (t && !(0, rF.isAddressEqual)(n.address, t))
            )
              return !1;
          } catch {
            return !1;
          }
          return !0;
        })({ address: r, domain: n, message: u, nonce: i, scheme: s, time: c })
      )
        return !1;
      let d = (0, rW.hashMessage)(a);
      return rj(e, { address: u.address, hash: d, signature: o, ...l });
    }
    var r4 = e.i(868750);
    async function r9(e, t) {
      let { account: r, decimals: n, spender: a, token: i, ...s } = t,
        [o, { decimals: c }] = await Promise.all([
          (0, B.readContract)(e, {
            ...s,
            ...r9.call(e, { account: r, spender: a, token: i }),
          }),
          (0, r4.resolveTokenWithDecimals)(e, { decimals: n, token: i }),
        ]);
      return (0, r4.toAmount)(o, c);
    }
    async function r7(e, t) {
      let { token: n, ...a } = t,
        { address: i } = (0, r4.resolveToken)(e, { token: n }),
        s = (0, r4.findDeclaredToken)(e, n),
        [o, c, l] = await Promise.all([
          s?.decimals ??
            (0, B.readContract)(e, {
              ...a,
              abi: r.erc20Abi,
              address: i,
              functionName: "decimals",
            }),
          s?.name ??
            (0, B.readContract)(e, {
              ...a,
              abi: r.erc20Abi,
              address: i,
              functionName: "name",
            }),
          s?.symbol ??
            (0, B.readContract)(e, {
              ...a,
              abi: r.erc20Abi,
              address: i,
              functionName: "symbol",
            }),
        ]);
      return { decimals: o, name: c, symbol: l };
    }
    (r9 || (r9 = {})).call = function (e, t) {
      return (0, r4.defineCall)({
        address: (0, r4.resolveToken)(e, t).address,
        abi: r.erc20Abi,
        functionName: "allowance",
        args: [t.account, t.spender],
      });
    };
    var ne = e.i(611573);
    async function nt(e, t) {
      let { account: r = e.account, decimals: n, token: a, ...i } = t;
      if (!r) throw new ne.AccountNotFoundError();
      let s = (0, G.parseAccount)(r).address,
        [o, { decimals: c }] = await Promise.all([
          (0, B.readContract)(e, {
            ...i,
            ...nt.call(e, { account: s, token: a }),
          }),
          (0, r4.resolveTokenWithDecimals)(e, { decimals: n, token: a }),
        ]);
      return (0, r4.toAmount)(o, c);
    }
    async function nr(e, t) {
      let { decimals: r, token: n, ...a } = t,
        [i, { decimals: s }] = await Promise.all([
          (0, B.readContract)(e, { ...a, ...nr.call(e, { token: n }) }),
          (0, r4.resolveTokenWithDecimals)(e, { decimals: r, token: n }),
        ]);
      return (0, r4.toAmount)(i, s);
    }
    ((nt || (nt = {})).call = function (e, t) {
      let n = t.account ?? e.account;
      if (!n) throw new ne.AccountNotFoundError();
      let a = (0, G.parseAccount)(n).address;
      return (0, r4.defineCall)({
        address: (0, r4.resolveToken)(e, t).address,
        abi: r.erc20Abi,
        functionName: "balanceOf",
        args: [a],
      });
    }),
      ((nr || (nr = {})).call = function (e, t) {
        return (0, r4.defineCall)({
          address: (0, r4.resolveToken)(e, t).address,
          abi: r.erc20Abi,
          args: [],
          functionName: "totalSupply",
        });
      });
    var nn = e.i(368941),
      na = e.i(638291),
      ni = e.i(738977);
    function ns(e) {
      var r;
      return {
        call: (t) => (0, W.call)(e, t),
        createAccessList: (t) => Q(e, t),
        createBlockFilter: () => ee(e),
        createContractEventFilter: (t) => ed(e, t),
        createEventFilter: (t) => ef(e, t),
        createPendingTransactionFilter: () => ep(e),
        estimateContractGas: (t) => (0, eh.estimateContractGas)(e, t),
        estimateGas: (t) => (0, eb.estimateGas)(e, t),
        getBalance: (t) => ev(e, t),
        getBlobBaseFee: () => eA(e),
        getBlock: (t) => (0, eB.getBlock)(e, t),
        getBlockNumber: (t) => (0, eE.getBlockNumber)(e, t),
        getBlockReceipts: (t) => eR(e, t),
        getBlockTransactionCount: (t) => eN(e, t),
        getBytecode: (t) => (0, eI.getCode)(e, t),
        getChainId: () => (0, eC.getChainId)(e),
        getCode: (t) => (0, eI.getCode)(e, t),
        getContractEvents: (t) => e$(e, t),
        getDelegation: (t) => eU(e, t),
        getEip712Domain: (t) => eD(e, t),
        getEnsAddress: (t) => E(e, t),
        getEnsAvatar: (t) => H(e, t),
        getEnsName: (t) => M(e, t),
        getEnsResolver: (t) => V(e, t),
        getEnsText: (t) => _(e, t),
        getFeeHistory: (t) => ej(e, t),
        estimateFeesPerGas: (t) => (0, em.estimateFeesPerGas)(e, t),
        getFilterChanges: (t) => e_(e, t),
        getFilterLogs: (t) => eH(e, t),
        getGasPrice: () => (0, eM.getGasPrice)(e),
        getLogs: (t) => ez(e, t),
        getProof: (t) => eV(e, t),
        estimateMaxPriorityFeePerGas: (t) =>
          (0, eg.estimateMaxPriorityFeePerGas)(e, t),
        fillTransaction: (t) => (0, ey.fillTransaction)(e, t),
        getRawTransaction: (t) => eG(e, t),
        getStorageAt: (t) => eZ(e, t),
        getTransaction: (t) => (0, eJ.getTransaction)(e, t),
        getTransactionConfirmations: (t) => eK(e, t),
        getTransactionCount: (t) => (0, eY.getTransactionCount)(e, t),
        getTransactionReceipt: (t) => (0, eQ.getTransactionReceipt)(e, t),
        multicall: (t) => e1(e, t),
        prepareTransactionRequest: (t) =>
          (0, nn.prepareTransactionRequest)(e, t),
        readContract: (t) => (0, B.readContract)(e, t),
        sendRawTransaction: (t) => (0, na.sendRawTransaction)(e, t),
        sendRawTransactionSync: (t) => (0, ni.sendRawTransactionSync)(e, t),
        simulate: (t) => e4(e, t),
        simulateBlocks: (t) => e4(e, t),
        simulateCalls: (t) => re(e, t),
        simulateContract: (t) => (0, rt.simulateContract)(e, t),
        verifyHash: (t) => rj(e, t),
        verifyMessage: (t) => rG(e, t),
        verifySiweMessage: (t) => r3(e, t),
        verifyTypedData: (t) => rJ(e, t),
        uninstallFilter: (t) => rr(e, t),
        waitForTransactionReceipt: (t) =>
          (0, rK.waitForTransactionReceipt)(e, t),
        watchBlocks: (t) =>
          (function (
            e,
            {
              blockTag: t = e.experimental_blockTag ?? "latest",
              emitMissed: r = !1,
              emitOnBegin: n = !1,
              onBlock: a,
              onError: i,
              includeTransactions: s,
              poll: o,
              pollingInterval: c = e.pollingInterval,
            }
          ) {
            let l,
              u,
              d,
              f,
              p,
              h =
                void 0 !== o
                  ? o
                  : "webSocket" !== e.transport.type &&
                    "ipc" !== e.transport.type &&
                    ("fallback" !== e.transport.type ||
                      ("webSocket" !== e.transport.transports[0].config.type &&
                        "ipc" !== e.transport.transports[0].config.type)),
              m = s ?? !1;
            return h
              ? ((u = (0, r0.stringify)(["watchBlocks", e.uid, t, r, n, m, c])),
                (0, rQ.observe)(u, { onBlock: a, onError: i }, (a) =>
                  (0, rX.poll)(
                    async () => {
                      try {
                        let n = await (0, A.getAction)(
                          e,
                          eB.getBlock,
                          "getBlock"
                        )({ blockTag: t, includeTransactions: m });
                        if (null !== n.number && l?.number != null) {
                          if (n.number === l.number) return;
                          if (n.number - l.number > 1 && r)
                            for (let t = l?.number + 1n; t < n.number; t++) {
                              let r = await (0, A.getAction)(
                                e,
                                eB.getBlock,
                                "getBlock"
                              )({ blockNumber: t, includeTransactions: m });
                              a.onBlock(r, l), (l = r);
                            }
                        }
                        (l?.number == null ||
                          ("pending" === t && n?.number == null) ||
                          (null !== n.number && n.number > l.number)) &&
                          (a.onBlock(n, l), (l = n));
                      } catch (e) {
                        a.onError?.(e);
                      }
                    },
                    { emitOnBegin: n, interval: c }
                  )
                ))
              : ((d = !0),
                (f = !0),
                (p = () => (d = !1)),
                (async () => {
                  try {
                    n &&
                      (0, A.getAction)(
                        e,
                        eB.getBlock,
                        "getBlock"
                      )({ blockTag: t, includeTransactions: m })
                        .then((e) => {
                          !d || (f && (a(e, void 0), (f = !1)));
                        })
                        .catch(i);
                    let r = (() => {
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
                      { unsubscribe: s } = await r.subscribe({
                        params: ["newHeads"],
                        async onData(t) {
                          if (!d) return;
                          let r = await (0, A.getAction)(
                            e,
                            eB.getBlock,
                            "getBlock"
                          )({
                            blockNumber: t.result?.number,
                            includeTransactions: m,
                          }).catch(() => {});
                          d && (a(r, l), (f = !1), (l = r));
                        },
                        onError(e) {
                          i?.(e);
                        },
                      });
                    (p = s), d || p();
                  } catch (e) {
                    i?.(e);
                  }
                })(),
                () => p());
          })(e, t),
        watchBlockNumber: (t) => (0, rY.watchBlockNumber)(e, t),
        watchContractEvent: (t) =>
          (function (e, t) {
            let r,
              n,
              a,
              i,
              s,
              {
                abi: o,
                address: c,
                args: l,
                batch: u = !0,
                eventName: d,
                fromBlock: f,
                onError: p,
                onLogs: h,
                poll: m,
                pollingInterval: b = e.pollingInterval,
                strict: g,
              } = t;
            return (
              void 0 !== m
                ? m
                : "bigint" == typeof f ||
                  ("webSocket" !== e.transport.type &&
                    "ipc" !== e.transport.type &&
                    ("fallback" !== e.transport.type ||
                      ("webSocket" !== e.transport.transports[0].config.type &&
                        "ipc" !== e.transport.transports[0].config.type)))
            )
              ? ((r = g ?? !1),
                (n = (0, r0.stringify)([
                  "watchContractEvent",
                  c,
                  l,
                  u,
                  e.uid,
                  d,
                  b,
                  r,
                  f,
                ])),
                (0, rQ.observe)(n, { onLogs: h, onError: p }, (t) => {
                  let n, a;
                  void 0 !== f && (n = f - 1n);
                  let i = !1,
                    s = (0, rX.poll)(
                      async () => {
                        if (!i) {
                          try {
                            a = await (0, A.getAction)(
                              e,
                              ed,
                              "createContractEventFilter"
                            )({
                              abi: o,
                              address: c,
                              args: l,
                              eventName: d,
                              strict: r,
                              fromBlock: f,
                            });
                          } catch {}
                          i = !0;
                          return;
                        }
                        try {
                          let i;
                          if (a)
                            i = await (0, A.getAction)(
                              e,
                              e_,
                              "getFilterChanges"
                            )({ filter: a });
                          else {
                            let t = await (0, A.getAction)(
                              e,
                              eE.getBlockNumber,
                              "getBlockNumber"
                            )({});
                            (i =
                              n && n < t
                                ? await (0, A.getAction)(
                                    e,
                                    e$,
                                    "getContractEvents"
                                  )({
                                    abi: o,
                                    address: c,
                                    args: l,
                                    eventName: d,
                                    fromBlock: n + 1n,
                                    toBlock: t,
                                    strict: r,
                                  })
                                : []),
                              (n = t);
                          }
                          if (0 === i.length) return;
                          if (u) t.onLogs(i);
                          else for (let e of i) t.onLogs([e]);
                        } catch (e) {
                          a && e instanceof r1.InvalidInputRpcError && (i = !1),
                            t.onError?.(e);
                        }
                      },
                      { emitOnBegin: !0, interval: b }
                    );
                  return async () => {
                    a &&
                      (await (0, A.getAction)(
                        e,
                        rr,
                        "uninstallFilter"
                      )({ filter: a })),
                      s();
                  };
                }))
              : ((a = (0, r0.stringify)([
                  "watchContractEvent",
                  c,
                  l,
                  u,
                  e.uid,
                  d,
                  b,
                  g ?? !1,
                ])),
                (i = !0),
                (s = () => (i = !1)),
                (0, rQ.observe)(
                  a,
                  { onLogs: h, onError: p },
                  (t) => (
                    (async () => {
                      try {
                        let r = (() => {
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
                          n = d ? el({ abi: o, eventName: d, args: l }) : [],
                          { unsubscribe: a } = await r.subscribe({
                            params: ["logs", { address: c, topics: n }],
                            onData(e) {
                              if (!i) return;
                              let r = e.result;
                              try {
                                let { eventName: e, args: n } = (0,
                                  r6.decodeEventLog)({
                                    abi: o,
                                    data: r.data,
                                    topics: r.topics,
                                    strict: g,
                                  }),
                                  a = (0, eS.formatLog)(r, {
                                    args: n,
                                    eventName: e,
                                  });
                                t.onLogs([a]);
                              } catch (i) {
                                let e, n;
                                if (
                                  i instanceof et.DecodeLogDataMismatch ||
                                  i instanceof et.DecodeLogTopicsMismatch
                                ) {
                                  if (g) return;
                                  (e = i.abiItem.name),
                                    (n = i.abiItem.inputs?.some(
                                      (e) => !("name" in e && e.name)
                                    ));
                                }
                                let a = (0, eS.formatLog)(r, {
                                  args: n ? [] : {},
                                  eventName: e,
                                });
                                t.onLogs([a]);
                              }
                            },
                            onError(e) {
                              t.onError?.(e);
                            },
                          });
                        (s = a), i || s();
                      } catch (e) {
                        p?.(e);
                      }
                    })(),
                    () => s()
                  )
                ));
          })(e, t),
        watchEvent: (t) =>
          (function (
            e,
            {
              address: t,
              args: r,
              batch: n = !0,
              event: a,
              events: i,
              fromBlock: s,
              onError: o,
              onLogs: c,
              poll: l,
              pollingInterval: u = e.pollingInterval,
              strict: d,
            }
          ) {
            let f,
              p,
              h,
              m =
                void 0 !== l
                  ? l
                  : "bigint" == typeof s ||
                    ("webSocket" !== e.transport.type &&
                      "ipc" !== e.transport.type &&
                      ("fallback" !== e.transport.type ||
                        ("webSocket" !==
                          e.transport.transports[0].config.type &&
                          "ipc" !== e.transport.transports[0].config.type))),
              b = d ?? !1;
            return m
              ? ((f = (0, r0.stringify)([
                  "watchEvent",
                  t,
                  r,
                  n,
                  e.uid,
                  a,
                  u,
                  s,
                ])),
                (0, rQ.observe)(f, { onLogs: c, onError: o }, (o) => {
                  let c, l;
                  void 0 !== s && (c = s - 1n);
                  let d = !1,
                    f = (0, rX.poll)(
                      async () => {
                        if (!d) {
                          try {
                            l = await (0, A.getAction)(
                              e,
                              ef,
                              "createEventFilter"
                            )({
                              address: t,
                              args: r,
                              event: a,
                              events: i,
                              strict: b,
                              fromBlock: s,
                            });
                          } catch {}
                          d = !0;
                          return;
                        }
                        try {
                          let s;
                          if (l)
                            s = await (0, A.getAction)(
                              e,
                              e_,
                              "getFilterChanges"
                            )({ filter: l });
                          else {
                            let n = await (0, A.getAction)(
                              e,
                              eE.getBlockNumber,
                              "getBlockNumber"
                            )({});
                            (s =
                              c && c !== n
                                ? await (0, A.getAction)(
                                    e,
                                    ez,
                                    "getLogs"
                                  )({
                                    address: t,
                                    args: r,
                                    event: a,
                                    events: i,
                                    fromBlock: c + 1n,
                                    toBlock: n,
                                  })
                                : []),
                              (c = n);
                          }
                          if (0 === s.length) return;
                          if (n) o.onLogs(s);
                          else for (let e of s) o.onLogs([e]);
                        } catch (e) {
                          l && e instanceof r1.InvalidInputRpcError && (d = !1),
                            o.onError?.(e);
                        }
                      },
                      { emitOnBegin: !0, interval: u }
                    );
                  return async () => {
                    l &&
                      (await (0, A.getAction)(
                        e,
                        rr,
                        "uninstallFilter"
                      )({ filter: l })),
                      f();
                  };
                }))
              : ((p = !0),
                (h = () => (p = !1)),
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
                      s = i ?? (a ? [a] : void 0),
                      l = [];
                    s &&
                      ((l = [
                        s.flatMap((e) =>
                          el({ abi: [e], eventName: e.name, args: r })
                        ),
                      ]),
                      a && (l = l[0]));
                    let { unsubscribe: u } = await n.subscribe({
                      params: ["logs", { address: t, topics: l }],
                      onData(e) {
                        if (!p) return;
                        let t = e.result;
                        try {
                          let { eventName: e, args: r } = (0,
                            r6.decodeEventLog)({
                              abi: s ?? [],
                              data: t.data,
                              topics: t.topics,
                              strict: b,
                            }),
                            n = (0, eS.formatLog)(t, { args: r, eventName: e });
                          c([n]);
                        } catch (a) {
                          let e, r;
                          if (
                            a instanceof et.DecodeLogDataMismatch ||
                            a instanceof et.DecodeLogTopicsMismatch
                          ) {
                            if (d) return;
                            (e = a.abiItem.name),
                              (r = a.abiItem.inputs?.some(
                                (e) => !("name" in e && e.name)
                              ));
                          }
                          let n = (0, eS.formatLog)(t, {
                            args: r ? [] : {},
                            eventName: e,
                          });
                          c([n]);
                        }
                      },
                      onError(e) {
                        o?.(e);
                      },
                    });
                    (h = u), p || h();
                  } catch (e) {
                    o?.(e);
                  }
                })(),
                () => h());
          })(e, t),
        watchPendingTransactions: (t) =>
          (function (
            e,
            {
              batch: t = !0,
              onError: r,
              onTransactions: n,
              poll: a,
              pollingInterval: i = e.pollingInterval,
            }
          ) {
            let s, o, c;
            return (
              void 0 !== a
                ? a
                : "webSocket" !== e.transport.type && "ipc" !== e.transport.type
            )
              ? ((s = (0, r0.stringify)([
                  "watchPendingTransactions",
                  e.uid,
                  t,
                  i,
                ])),
                (0, rQ.observe)(s, { onTransactions: n, onError: r }, (r) => {
                  let n,
                    a = (0, rX.poll)(
                      async () => {
                        try {
                          if (!n)
                            try {
                              n = await (0, A.getAction)(
                                e,
                                ep,
                                "createPendingTransactionFilter"
                              )({});
                              return;
                            } catch (e) {
                              throw (a(), e);
                            }
                          let i = await (0, A.getAction)(
                            e,
                            e_,
                            "getFilterChanges"
                          )({ filter: n });
                          if (0 === i.length) return;
                          if (t) r.onTransactions(i);
                          else for (let e of i) r.onTransactions([e]);
                        } catch (e) {
                          r.onError?.(e);
                        }
                      },
                      { emitOnBegin: !0, interval: i }
                    );
                  return async () => {
                    n &&
                      (await (0, A.getAction)(
                        e,
                        rr,
                        "uninstallFilter"
                      )({ filter: n })),
                      a();
                  };
                }))
              : ((o = !0),
                (c = () => (o = !1)),
                (async () => {
                  try {
                    let { unsubscribe: t } = await e.transport.subscribe({
                      params: ["newPendingTransactions"],
                      onData(e) {
                        if (!o) return;
                        let t = e.result;
                        n([t]);
                      },
                      onError(e) {
                        r?.(e);
                      },
                    });
                    (c = t), o || c();
                  } catch (e) {
                    r?.(e);
                  }
                })(),
                () => c());
          })(e, t),
        token:
          ((r = e),
          {
            getAllowance: (0, t.bindActionDecorators)(r, r9),
            getBalance: (0, t.bindActionDecorators)(r, nt),
            getMetadata: (0, t.bindActionDecorators)(r, r7),
            getTotalSupply: (0, t.bindActionDecorators)(r, nr),
          }),
      };
    }
    function no(e) {
      let { key: r = "public", name: n = "Public Client" } = e;
      return (0, t.createClient)({
        ...e,
        key: r,
        name: n,
        type: "publicClient",
      }).extend(ns);
    }
    e.s(["createPublicClient", () => no], 309682);
  },
  110163,
  (e) => {
    "use strict";
    var t = e.i(1299),
      r = e.i(569934);
    class n extends r.BaseError {
      constructor() {
        super(
          "No URL was provided to the Transport. Please provide a valid RPC URL to the Transport.",
          { docsPath: "/docs/clients/intro", name: "UrlRequiredError" }
        );
      }
    }
    var a = e.i(871706),
      i = e.i(363710),
      s = e.i(34888);
    let o = {
      current: 0,
      take() {
        return this.current++;
      },
      reset() {
        this.current = 0;
      },
    };
    async function c(e, { maxResponseBodySize: r }) {
      if (!1 === r) return e.text();
      let n = e.headers.get("Content-Length");
      if (n) {
        let e = Number(n);
        if (e > r)
          throw new t.ResponseBodyTooLargeError({ maxSize: r, size: e });
      }
      if (!e.body) {
        let n = await e.text(),
          a = new TextEncoder().encode(n).length;
        if (a > r)
          throw new t.ResponseBodyTooLargeError({ maxSize: r, size: a });
        return n;
      }
      let a = e.body.getReader(),
        i = new TextDecoder(),
        s = "",
        o = 0;
      try {
        for (;;) {
          let { done: e, value: n } = await a.read();
          if (e) break;
          if ((o += n.byteLength) > r)
            throw (
              (await a.cancel(),
              new t.ResponseBodyTooLargeError({ maxSize: r, size: o }))
            );
          s += i.decode(n, { stream: !0 });
        }
        return (s += i.decode());
      } finally {
        a.releaseLock();
      }
    }
    var l = e.i(695331);
    let u = 0,
      d = new WeakMap();
    function f(e, r = {}) {
      let {
        batch: p,
        fetchFn: h,
        fetchOptions: m,
        key: b = "http",
        maxResponseBodySize: g,
        methods: y,
        name: w = "HTTP JSON-RPC",
        onFetchRequest: v,
        onFetchResponse: A,
        retryDelay: B,
        raw: E,
      } = r;
      return ({ chain: f, retryCount: x, timeout: P }) => {
        let { batchSize: R = 1e3, wait: k = 0 } = "object" == typeof p ? p : {},
          N = r.retryCount ?? x,
          C = P ?? r.timeout ?? 1e4,
          I = e || f?.rpcUrls.default.http[0];
        if (!I) throw new n();
        let T = (function (e, r = {}) {
          let { url: n, headers: a } = (function (e) {
            try {
              let t = new URL(e),
                r = (() => {
                  if (t.username) {
                    let e = `${decodeURIComponent(
                      t.username
                    )}:${decodeURIComponent(t.password)}`;
                    return (
                      (t.username = ""),
                      (t.password = ""),
                      {
                        url: t.toString(),
                        headers: { Authorization: `Basic ${btoa(e)}` },
                      }
                    );
                  }
                })();
              return { url: t.toString(), ...r };
            } catch {
              return { url: e };
            }
          })(e);
          return {
            async request(e) {
              let {
                  body: l,
                  fetchFn: u = r.fetchFn ?? fetch,
                  maxResponseBodySize: d = r.maxResponseBodySize ?? 0xa00000,
                  onRequest: f = r.onRequest,
                  onResponse: p = r.onResponse,
                  timeout: h = r.timeout ?? 1e4,
                } = e,
                m = { ...(r.fetchOptions ?? {}), ...(e.fetchOptions ?? {}) },
                { headers: b, method: g, signal: y } = m;
              try {
                let e,
                  r = await (function (
                    e,
                    {
                      errorInstance: t = Error("timed out"),
                      timeout: r,
                      signal: n,
                    }
                  ) {
                    return new Promise((a, s) => {
                      (async () => {
                        let o,
                          c = new AbortController();
                        try {
                          r > 0 &&
                            (o = setTimeout(() => {
                              n ? c.abort() : s(t);
                            }, r)),
                            a(await e({ signal: c?.signal || null }));
                        } catch (e) {
                          if (c?.signal.aborted && (0, i.isAbortError)(e))
                            return void s(t);
                          s(e);
                        } finally {
                          clearTimeout(o);
                        }
                      })();
                    });
                  })(
                    async ({ signal: e }) => {
                      let t = {
                          ...m,
                          body: Array.isArray(l)
                            ? (0, s.stringify)(
                                l.map((e) => ({
                                  jsonrpc: "2.0",
                                  id: e.id ?? o.take(),
                                  ...e,
                                }))
                              )
                            : (0, s.stringify)({
                                jsonrpc: "2.0",
                                id: l.id ?? o.take(),
                                ...l,
                              }),
                          headers: {
                            ...a,
                            "Content-Type": "application/json",
                            ...b,
                          },
                          method: g || "POST",
                          signal: y || (h > 0 ? e : null),
                        },
                        r = new Request(n, t),
                        i = (await f?.(r, t)) ?? { ...t, url: n };
                      return await u(i.url ?? n, i);
                    },
                    {
                      errorInstance: new t.TimeoutError({ body: l, url: n }),
                      timeout: h,
                      signal: !0,
                    }
                  );
                p && (await p(r));
                let w = await c(r, { maxResponseBodySize: d });
                if (
                  r.headers.get("Content-Type")?.startsWith("application/json")
                )
                  e = JSON.parse(w);
                else {
                  e = w;
                  try {
                    e = JSON.parse(e || "{}");
                  } catch (t) {
                    if (r.ok) throw t;
                    e = { error: e };
                  }
                }
                if (!r.ok) {
                  if (
                    "number" == typeof e.error?.code &&
                    "string" == typeof e.error?.message
                  )
                    return e;
                  throw new t.HttpRequestError({
                    body: l,
                    details: (0, s.stringify)(e.error) || r.statusText,
                    headers: r.headers,
                    status: r.status,
                    url: n,
                  });
                }
                return e;
              } catch (e) {
                if (y?.aborted) throw (0, i.getAbortError)(y);
                if (
                  (0, i.isAbortError)(e) ||
                  e instanceof t.HttpRequestError ||
                  e instanceof t.ResponseBodyTooLargeError ||
                  e instanceof t.TimeoutError
                )
                  throw e;
                throw new t.HttpRequestError({ body: l, cause: e, url: n });
              }
            },
          };
        })(I, {
          fetchFn: h,
          fetchOptions: m,
          maxResponseBodySize: g,
          onRequest: v,
          onResponse: A,
          timeout: C,
        });
        return (0, l.createTransport)(
          {
            key: b,
            methods: y,
            name: w,
            async request({ method: e, params: r }, n) {
              let i = { method: e, params: r },
                s = n?.signal ? { signal: n.signal } : void 0,
                { schedule: o } = (0, a.createBatchScheduler)({
                  id: `${I}.${(function (e) {
                    if (!e) return "default";
                    let t = d.get(e);
                    if (void 0 !== t) return t;
                    let r = u++;
                    return d.set(e, r), r;
                  })(n?.signal)}`,
                  wait: k,
                  shouldSplitBatch: (e) => e.length > R,
                  fn: (e) => T.request({ body: e, fetchOptions: s }),
                  sort: (e, t) => e.id - t.id,
                }),
                c = async (e) =>
                  p ? o(e) : [await T.request({ body: e, fetchOptions: s })],
                [{ error: l, result: f }] = await c(i);
              if (E) return { error: l, result: f };
              if (l) throw new t.RpcRequestError({ body: i, error: l, url: I });
              return f;
            },
            retryCount: N,
            retryDelay: B,
            timeout: C,
            type: "http",
          },
          { fetchOptions: m, url: I }
        );
      };
    }
    e.s(["http", () => f], 110163);
  },
]);
