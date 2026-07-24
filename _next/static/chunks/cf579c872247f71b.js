(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  599509,
  (e) => {
    "use strict";
    var t = e.i(855723),
      n = e.i(668375);
    function a(e, r = "wei") {
      return (0, n.parseUnits)(e, t.etherUnits[r]);
    }
    e.s(["parseEther", () => a]);
  },
  316819,
  (e) => {
    "use strict";
    var t = e.i(70204),
      n = e.i(790063),
      a = e.i(879617),
      r = e.i(249311),
      i = e.i(332881);
    function s(e) {
      let { abi: s, data: p } = e,
        u = (0, n.slice)(p, 0, 4),
        y = s.find(
          (e) =>
            "function" === e.type &&
            u === (0, a.toFunctionSelector)((0, i.formatAbiItem)(e))
        );
      if (!y)
        throw new t.AbiFunctionSignatureNotFoundError(u, {
          docsPath: "/docs/contract/decodeFunctionData",
        });
      return {
        functionName: y.name,
        args:
          "inputs" in y && y.inputs && y.inputs.length > 0
            ? (0, r.decodeAbiParameters)(y.inputs, (0, n.slice)(p, 4))
            : void 0,
      };
    }
    e.s(["decodeFunctionData", () => s]);
  },
  528804,
  (e) => {
    "use strict";
    var t = e.i(606580);
    async function n(
      e,
      {
        address: n,
        blockHash: a,
        blockNumber: r,
        blockTag: i = "latest",
        requireCanonical: s,
      }
    ) {
      let p = (0, t.formatBlockParameter)({
          blockHash: a,
          blockNumber: r,
          blockTag: i,
          requireCanonical: s,
        }),
        u = await e.request(
          { method: "eth_getCode", params: [n, p] },
          { dedupe: "bigint" == typeof r || void 0 !== a }
        );
      if ("0x" !== u) return u;
    }
    e.s(["getCode", () => n]);
  },
  658765,
  (e) => {
    "use strict";
    var t = e.i(831095),
      n = e.i(147526),
      a = e.i(401319),
      r = e.i(675107);
    function i(e, i) {
      let s, p;
      return (0, t.keccak256)(
        ((s =
          "string" == typeof e
            ? (0, r.stringToHex)(e)
            : "string" == typeof e.raw
            ? e.raw
            : (0, r.bytesToHex)(e.raw)),
        (p = (0, r.stringToHex)(`\x19Ethereum Signed Message:
${(0, a.size)(s)}`)),
        (0, n.concat)([p, s])),
        i
      );
    }
    e.s(["hashMessage", () => i], 658765);
  },
  484564,
  914146,
  (e) => {
    "use strict";
    var t = e.i(459258),
      n = e.i(235036),
      a = e.i(45831),
      r = e.i(304118);
    function i(e) {
      let i = [];
      if ("string" == typeof e) {
        let t = (0, r.splitParameters)(e),
          a = t.length;
        for (let e = 0; e < a; e++)
          i.push((0, r.parseAbiParameter)(t[e], { modifiers: n.modifiers }));
      } else {
        let t = (0, a.parseStructs)(e),
          s = e.length;
        for (let a = 0; a < s; a++) {
          let s = e[a];
          if ((0, n.isStructSignature)(s)) continue;
          let p = (0, r.splitParameters)(s),
            u = p.length;
          for (let e = 0; e < u; e++)
            i.push(
              (0, r.parseAbiParameter)(p[e], {
                modifiers: n.modifiers,
                structs: t,
              })
            );
        }
      }
      if (0 === i.length) throw new t.InvalidAbiParametersError({ params: e });
      return i;
    }
    e.s(["parseAbiParameters", () => i], 484564),
      e.s(
        [
          "ethAddress",
          0,
          "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
          "zeroAddress",
          0,
          "0x0000000000000000000000000000000000000000",
        ],
        914146
      );
  },
  461147,
  (e) => {
    "use strict";
    var t = e.i(752012),
      n = e.i(727343),
      a = e.i(316819),
      r = e.i(70204),
      i = e.i(147526),
      s = e.i(879617),
      p = e.i(704434),
      u = e.i(332881),
      y = e.i(627173);
    let o = "/docs/contract/encodeErrorResult";
    function d(e) {
      let { abi: t, errorName: n, args: a } = e,
        d = t[0];
      if (n) {
        let e = (0, y.getAbiItem)({ abi: t, args: a, name: n });
        if (!e) throw new r.AbiErrorNotFoundError(n, { docsPath: o });
        d = e;
      }
      if ("error" !== d.type)
        throw new r.AbiErrorNotFoundError(void 0, { docsPath: o });
      let l = (0, u.formatAbiItem)(d),
        m = (0, s.toFunctionSelector)(l),
        c = "0x";
      if (a && a.length > 0) {
        if (!d.inputs)
          throw new r.AbiErrorInputsNotFoundError(d.name, { docsPath: o });
        c = (0, p.encodeAbiParameters)(d.inputs, a);
      }
      return (0, i.concatHex)([m, c]);
    }
    let l = "/docs/contract/encodeFunctionResult",
      m = "x-batch-gateway:true";
    async function c(e) {
      let { data: i, ccipRequest: s } = e,
        {
          args: [u],
        } = (0, a.decodeFunctionData)({ abi: t.batchGatewayAbi, data: i }),
        o = [],
        T = [];
      return (
        await Promise.all(
          u.map(async (e, a) => {
            try {
              (T[a] = e.urls.includes(m)
                ? await c({ data: e.data, ccipRequest: s })
                : await s(e)),
                (o[a] = !1);
            } catch (e) {
              var r;
              (o[a] = !0),
                (T[a] =
                  "HttpRequestError" === (r = e).name && r.status
                    ? d({
                        abi: t.batchGatewayAbi,
                        errorName: "HttpError",
                        args: [r.status, r.shortMessage],
                      })
                    : d({
                        abi: [n.solidityError],
                        errorName: "Error",
                        args: [
                          "shortMessage" in r ? r.shortMessage : r.message,
                        ],
                      }));
            }
          })
        ),
        (function (e) {
          let { abi: t, functionName: n, result: a } = e,
            i = t[0];
          if (n) {
            let e = (0, y.getAbiItem)({ abi: t, name: n });
            if (!e) throw new r.AbiFunctionNotFoundError(n, { docsPath: l });
            i = e;
          }
          if ("function" !== i.type)
            throw new r.AbiFunctionNotFoundError(void 0, { docsPath: l });
          if (!i.outputs)
            throw new r.AbiFunctionOutputsNotFoundError(i.name, {
              docsPath: l,
            });
          let s = (() => {
            if (0 === i.outputs.length) return [];
            if (1 === i.outputs.length) return [a];
            if (Array.isArray(a)) return a;
            throw new r.InvalidArrayError(a);
          })();
          return (0, p.encodeAbiParameters)(i.outputs, s);
        })({ abi: t.batchGatewayAbi, functionName: "query", result: [o, T] })
      );
    }
    e.s(
      ["localBatchGatewayRequest", () => c, "localBatchGatewayUrl", 0, m],
      461147
    );
  },
  524795,
  (e) => {
    "use strict";
    var t = e.i(662537),
      n = e.i(890357);
    e.s([
      "captureErrorToSentry",
      0,
      (e, a) => {
        let r = n.useProfileStore.getState()?.profileData,
          i = r?.email || "Not logged label";
        t.setUser({ email: i });
        let s = {
          tags: {
            location: a,
            user_status: r?.email ? "logged_in" : "not_logged_in",
          },
          extra: { occuredIn: a, userEmail: i },
        };
        if (e instanceof Error) t.captureException(e, s);
        else {
          let n = "string" == typeof e ? e : JSON.stringify(e);
          t.captureMessage(`Error in ${a}: ${n}`, { ...s, level: "error" });
        }
      },
    ]);
  },
  175654,
  (e) => {
    "use strict";
    var t = e.i(211441);
    e.s(["useSolanaWallets", () => t.ab]);
  },
  551944,
  (e) => {
    "use strict";
    var t = e.i(581949),
      n = e.i(462815);
    let a = async ({ tokenAddress: e, chain: t }) =>
        (await n.default.get(`/tokens/overview?address=${e}&chain=${t}`)).data,
      r = async (e) =>
        (await n.default.get(`/categories/${e.type}?extraFields=true`)).data,
      i = async (e) =>
        (await n.default.get(`/categories/tokens/${e.slug}`)).data,
      s = async () => (await n.default.get("/categories/trending")).data,
      p = async (e) => {
        try {
          return (
            await n.default.get(`/tokens/search?q=${e.search}`, {
              signal: e.signal,
            })
          ).data;
        } catch (e) {
          if (t.default.isCancel(e)) return { success: !1, data: null };
          return (
            console.error("Error fetching tokens:", e),
            { success: !1, data: null }
          );
        }
      },
      u = async (e) =>
        (await n.default.post("/tokens/send-sol-tokens", e)).data,
      y = async (e) => (await n.default.get(`/users/search?q=${e}`)).data,
      o = async ({ txHash: e, chain: t }) =>
        (
          await n.default.get(
            `/tokens/check-order-alpha?txHash=${e}&chain=${t}`
          )
        ).data,
      d = async ({
        chain: e = "all",
        filter: t = "trending",
        page: a = 1,
        timeFrame: r = "24h",
        extraInfo: i = !0,
      }) =>
        (
          await n.default.get(
            `/tokens/explore?chain=${e}&filter=${t}&page=${a}&timeframe=${r}&extraInfo=${i}`
          )
        ).data,
      l = async (e) =>
        (await n.default.post("/tokens/parse-wrapped-transaction", e)).data;
    e.s([
      "fetchChartData",
      0,
      ({ address: e, chain: t, chartType: a }) =>
        n.default.get("/tokens/chart", {
          params: { address: e, chain: t, chartType: a },
        }),
      "getAlphaOrderStatus",
      0,
      o,
      "getCategories",
      0,
      r,
      "getSendTokenTransaction",
      0,
      u,
      "getTokenByValue",
      0,
      p,
      "getTokenOverview",
      0,
      a,
      "getTokensByCategory",
      0,
      i,
      "getTokensByFilter",
      0,
      d,
      "getTrendingCategories",
      0,
      s,
      "getUserSearch",
      0,
      y,
      "parseWrappedTx",
      0,
      l,
    ]);
  },
  133824,
  (e) => {
    "use strict";
    var t = e.i(271645);
    function n(e, a, r = { leading: !1 }) {
      let [i, s] = (0, t.useState)(e),
        p = (0, t.useRef)(!1),
        u = (0, t.useRef)(null),
        y = (0, t.useRef)(!1),
        o = () => window.clearTimeout(u.current);
      return (
        (0, t.useEffect)(() => {
          p.current &&
            (!y.current && r.leading
              ? ((y.current = !0), s(e))
              : (o(),
                (u.current = window.setTimeout(() => {
                  (y.current = !1), s(e);
                }, a))));
        }, [e, r.leading, a]),
        (0, t.useEffect)(() => ((p.current = !0), o), []),
        [i, o]
      );
    }
    e.s(["useDebouncedValue", () => n]);
  },
  296508,
  (e) => {
    "use strict";
    var t = e.i(675107);
    function n(e) {
      let n = BigInt((0, t.toHex)(e.key, { size: 24 })),
        a = BigInt((0, t.toHex)(e.sequence, { size: 8 }));
      return (n << BigInt(64)) + a;
    }
    e.s(["encodeNonce", () => n]);
  },
  96742,
  (e) => {
    "use strict";
    let t = {
      defaultAddress: "0xFA922457873F750244D93679df0d810881E4131D",
      contractName: "OrderProcessor",
      version: "0.4.1",
      networkAddresses: {
        1: "0xA8a48C202AF4E73ad19513D37158A872A4ac79Cb",
        42161: "0xFA922457873F750244D93679df0d810881E4131D",
        81457: "0xA8a48C202AF4E73ad19513D37158A872A4ac79Cb",
        0xaa36a7: "0xd0d00Ee8457d79C12B4D7429F59e896F11364247",
      },
      abi: [
        { type: "constructor", inputs: [], stateMutability: "nonpayable" },
        {
          type: "function",
          name: "DOMAIN_SEPARATOR",
          inputs: [],
          outputs: [{ name: "", type: "bytes32", internalType: "bytes32" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "UPGRADE_INTERFACE_VERSION",
          inputs: [],
          outputs: [{ name: "", type: "string", internalType: "string" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "acceptOwnership",
          inputs: [],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "cancelOrder",
          inputs: [
            {
              name: "order",
              type: "tuple",
              internalType: "struct IOrderProcessor.Order",
              components: [
                {
                  name: "requestTimestamp",
                  type: "uint64",
                  internalType: "uint64",
                },
                { name: "recipient", type: "address", internalType: "address" },
                {
                  name: "assetToken",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "paymentToken",
                  type: "address",
                  internalType: "address",
                },
                { name: "sell", type: "bool", internalType: "bool" },
                {
                  name: "orderType",
                  type: "uint8",
                  internalType: "enum IOrderProcessor.OrderType",
                },
                {
                  name: "assetTokenQuantity",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "paymentTokenQuantity",
                  type: "uint256",
                  internalType: "uint256",
                },
                { name: "price", type: "uint256", internalType: "uint256" },
                {
                  name: "tif",
                  type: "uint8",
                  internalType: "enum IOrderProcessor.TIF",
                },
              ],
            },
            { name: "reason", type: "string", internalType: "string" },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "createOrder",
          inputs: [
            {
              name: "order",
              type: "tuple",
              internalType: "struct IOrderProcessor.Order",
              components: [
                {
                  name: "requestTimestamp",
                  type: "uint64",
                  internalType: "uint64",
                },
                { name: "recipient", type: "address", internalType: "address" },
                {
                  name: "assetToken",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "paymentToken",
                  type: "address",
                  internalType: "address",
                },
                { name: "sell", type: "bool", internalType: "bool" },
                {
                  name: "orderType",
                  type: "uint8",
                  internalType: "enum IOrderProcessor.OrderType",
                },
                {
                  name: "assetTokenQuantity",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "paymentTokenQuantity",
                  type: "uint256",
                  internalType: "uint256",
                },
                { name: "price", type: "uint256", internalType: "uint256" },
                {
                  name: "tif",
                  type: "uint8",
                  internalType: "enum IOrderProcessor.TIF",
                },
              ],
            },
            {
              name: "feeQuote",
              type: "tuple",
              internalType: "struct IOrderProcessor.FeeQuote",
              components: [
                { name: "orderId", type: "uint256", internalType: "uint256" },
                { name: "requester", type: "address", internalType: "address" },
                { name: "fee", type: "uint256", internalType: "uint256" },
                { name: "timestamp", type: "uint64", internalType: "uint64" },
                { name: "deadline", type: "uint64", internalType: "uint64" },
              ],
            },
            { name: "feeQuoteSignature", type: "bytes", internalType: "bytes" },
          ],
          outputs: [{ name: "id", type: "uint256", internalType: "uint256" }],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "createOrderStandardFees",
          inputs: [
            {
              name: "order",
              type: "tuple",
              internalType: "struct IOrderProcessor.Order",
              components: [
                {
                  name: "requestTimestamp",
                  type: "uint64",
                  internalType: "uint64",
                },
                { name: "recipient", type: "address", internalType: "address" },
                {
                  name: "assetToken",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "paymentToken",
                  type: "address",
                  internalType: "address",
                },
                { name: "sell", type: "bool", internalType: "bool" },
                {
                  name: "orderType",
                  type: "uint8",
                  internalType: "enum IOrderProcessor.OrderType",
                },
                {
                  name: "assetTokenQuantity",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "paymentTokenQuantity",
                  type: "uint256",
                  internalType: "uint256",
                },
                { name: "price", type: "uint256", internalType: "uint256" },
                {
                  name: "tif",
                  type: "uint8",
                  internalType: "enum IOrderProcessor.TIF",
                },
              ],
            },
          ],
          outputs: [{ name: "id", type: "uint256", internalType: "uint256" }],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "createOrderWithSignature",
          inputs: [
            {
              name: "order",
              type: "tuple",
              internalType: "struct IOrderProcessor.Order",
              components: [
                {
                  name: "requestTimestamp",
                  type: "uint64",
                  internalType: "uint64",
                },
                { name: "recipient", type: "address", internalType: "address" },
                {
                  name: "assetToken",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "paymentToken",
                  type: "address",
                  internalType: "address",
                },
                { name: "sell", type: "bool", internalType: "bool" },
                {
                  name: "orderType",
                  type: "uint8",
                  internalType: "enum IOrderProcessor.OrderType",
                },
                {
                  name: "assetTokenQuantity",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "paymentTokenQuantity",
                  type: "uint256",
                  internalType: "uint256",
                },
                { name: "price", type: "uint256", internalType: "uint256" },
                {
                  name: "tif",
                  type: "uint8",
                  internalType: "enum IOrderProcessor.TIF",
                },
              ],
            },
            {
              name: "orderSignature",
              type: "tuple",
              internalType: "struct IOrderProcessor.Signature",
              components: [
                { name: "deadline", type: "uint64", internalType: "uint64" },
                { name: "signature", type: "bytes", internalType: "bytes" },
              ],
            },
            {
              name: "feeQuote",
              type: "tuple",
              internalType: "struct IOrderProcessor.FeeQuote",
              components: [
                { name: "orderId", type: "uint256", internalType: "uint256" },
                { name: "requester", type: "address", internalType: "address" },
                { name: "fee", type: "uint256", internalType: "uint256" },
                { name: "timestamp", type: "uint64", internalType: "uint64" },
                { name: "deadline", type: "uint64", internalType: "uint64" },
              ],
            },
            { name: "feeQuoteSignature", type: "bytes", internalType: "bytes" },
          ],
          outputs: [{ name: "id", type: "uint256", internalType: "uint256" }],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "dShareFactory",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "contract IDShareFactory",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "eip712Domain",
          inputs: [],
          outputs: [
            { name: "fields", type: "bytes1", internalType: "bytes1" },
            { name: "name", type: "string", internalType: "string" },
            { name: "version", type: "string", internalType: "string" },
            { name: "chainId", type: "uint256", internalType: "uint256" },
            {
              name: "verifyingContract",
              type: "address",
              internalType: "address",
            },
            { name: "salt", type: "bytes32", internalType: "bytes32" },
            {
              name: "extensions",
              type: "uint256[]",
              internalType: "uint256[]",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "fillOrder",
          inputs: [
            {
              name: "order",
              type: "tuple",
              internalType: "struct IOrderProcessor.Order",
              components: [
                {
                  name: "requestTimestamp",
                  type: "uint64",
                  internalType: "uint64",
                },
                { name: "recipient", type: "address", internalType: "address" },
                {
                  name: "assetToken",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "paymentToken",
                  type: "address",
                  internalType: "address",
                },
                { name: "sell", type: "bool", internalType: "bool" },
                {
                  name: "orderType",
                  type: "uint8",
                  internalType: "enum IOrderProcessor.OrderType",
                },
                {
                  name: "assetTokenQuantity",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "paymentTokenQuantity",
                  type: "uint256",
                  internalType: "uint256",
                },
                { name: "price", type: "uint256", internalType: "uint256" },
                {
                  name: "tif",
                  type: "uint8",
                  internalType: "enum IOrderProcessor.TIF",
                },
              ],
            },
            { name: "fillAmount", type: "uint256", internalType: "uint256" },
            {
              name: "receivedAmount",
              type: "uint256",
              internalType: "uint256",
            },
            { name: "fees", type: "uint256", internalType: "uint256" },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "getFeesEscrowed",
          inputs: [{ name: "id", type: "uint256", internalType: "uint256" }],
          outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getFeesTaken",
          inputs: [{ name: "id", type: "uint256", internalType: "uint256" }],
          outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getOrderStatus",
          inputs: [{ name: "id", type: "uint256", internalType: "uint256" }],
          outputs: [
            {
              name: "",
              type: "uint8",
              internalType: "enum IOrderProcessor.OrderStatus",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getPaymentTokenConfig",
          inputs: [
            { name: "paymentToken", type: "address", internalType: "address" },
          ],
          outputs: [
            {
              name: "",
              type: "tuple",
              internalType: "struct OrderProcessor.PaymentTokenConfig",
              components: [
                { name: "enabled", type: "bool", internalType: "bool" },
                { name: "decimals", type: "uint8", internalType: "uint8" },
                {
                  name: "blacklistCallSelector",
                  type: "bytes4",
                  internalType: "bytes4",
                },
                {
                  name: "perOrderFeeBuy",
                  type: "uint64",
                  internalType: "uint64",
                },
                {
                  name: "percentageFeeRateBuy",
                  type: "uint24",
                  internalType: "uint24",
                },
                {
                  name: "perOrderFeeSell",
                  type: "uint64",
                  internalType: "uint64",
                },
                {
                  name: "percentageFeeRateSell",
                  type: "uint24",
                  internalType: "uint24",
                },
              ],
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getReceivedAmount",
          inputs: [{ name: "id", type: "uint256", internalType: "uint256" }],
          outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getStandardFees",
          inputs: [
            { name: "sell", type: "bool", internalType: "bool" },
            { name: "paymentToken", type: "address", internalType: "address" },
          ],
          outputs: [
            { name: "", type: "uint256", internalType: "uint256" },
            { name: "", type: "uint24", internalType: "uint24" },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getUnfilledAmount",
          inputs: [{ name: "id", type: "uint256", internalType: "uint256" }],
          outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "hashFeeQuote",
          inputs: [
            {
              name: "feeQuote",
              type: "tuple",
              internalType: "struct IOrderProcessor.FeeQuote",
              components: [
                { name: "orderId", type: "uint256", internalType: "uint256" },
                { name: "requester", type: "address", internalType: "address" },
                { name: "fee", type: "uint256", internalType: "uint256" },
                { name: "timestamp", type: "uint64", internalType: "uint64" },
                { name: "deadline", type: "uint64", internalType: "uint64" },
              ],
            },
          ],
          outputs: [{ name: "", type: "bytes32", internalType: "bytes32" }],
          stateMutability: "pure",
        },
        {
          type: "function",
          name: "hashOrder",
          inputs: [
            {
              name: "order",
              type: "tuple",
              internalType: "struct IOrderProcessor.Order",
              components: [
                {
                  name: "requestTimestamp",
                  type: "uint64",
                  internalType: "uint64",
                },
                { name: "recipient", type: "address", internalType: "address" },
                {
                  name: "assetToken",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "paymentToken",
                  type: "address",
                  internalType: "address",
                },
                { name: "sell", type: "bool", internalType: "bool" },
                {
                  name: "orderType",
                  type: "uint8",
                  internalType: "enum IOrderProcessor.OrderType",
                },
                {
                  name: "assetTokenQuantity",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "paymentTokenQuantity",
                  type: "uint256",
                  internalType: "uint256",
                },
                { name: "price", type: "uint256", internalType: "uint256" },
                {
                  name: "tif",
                  type: "uint8",
                  internalType: "enum IOrderProcessor.TIF",
                },
              ],
            },
          ],
          outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
          stateMutability: "pure",
        },
        {
          type: "function",
          name: "hashOrderRequest",
          inputs: [
            {
              name: "order",
              type: "tuple",
              internalType: "struct IOrderProcessor.Order",
              components: [
                {
                  name: "requestTimestamp",
                  type: "uint64",
                  internalType: "uint64",
                },
                { name: "recipient", type: "address", internalType: "address" },
                {
                  name: "assetToken",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "paymentToken",
                  type: "address",
                  internalType: "address",
                },
                { name: "sell", type: "bool", internalType: "bool" },
                {
                  name: "orderType",
                  type: "uint8",
                  internalType: "enum IOrderProcessor.OrderType",
                },
                {
                  name: "assetTokenQuantity",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "paymentTokenQuantity",
                  type: "uint256",
                  internalType: "uint256",
                },
                { name: "price", type: "uint256", internalType: "uint256" },
                {
                  name: "tif",
                  type: "uint8",
                  internalType: "enum IOrderProcessor.TIF",
                },
              ],
            },
            { name: "deadline", type: "uint64", internalType: "uint64" },
          ],
          outputs: [{ name: "", type: "bytes32", internalType: "bytes32" }],
          stateMutability: "pure",
        },
        {
          type: "function",
          name: "initialize",
          inputs: [
            { name: "_owner", type: "address", internalType: "address" },
            { name: "_treasury", type: "address", internalType: "address" },
            { name: "_vault", type: "address", internalType: "address" },
            {
              name: "_dShareFactory",
              type: "address",
              internalType: "contract IDShareFactory",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "isOperator",
          inputs: [
            { name: "account", type: "address", internalType: "address" },
          ],
          outputs: [{ name: "", type: "bool", internalType: "bool" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "isTransferLocked",
          inputs: [
            { name: "token", type: "address", internalType: "address" },
            { name: "account", type: "address", internalType: "address" },
          ],
          outputs: [{ name: "", type: "bool", internalType: "bool" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "latestFillPrice",
          inputs: [
            { name: "assetToken", type: "address", internalType: "address" },
            { name: "paymentToken", type: "address", internalType: "address" },
          ],
          outputs: [
            {
              name: "",
              type: "tuple",
              internalType: "struct IOrderProcessor.PricePoint",
              components: [
                { name: "price", type: "uint256", internalType: "uint256" },
                { name: "blocktime", type: "uint64", internalType: "uint64" },
              ],
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "multicall",
          inputs: [{ name: "data", type: "bytes[]", internalType: "bytes[]" }],
          outputs: [
            { name: "results", type: "bytes[]", internalType: "bytes[]" },
          ],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "orderDecimalReduction",
          inputs: [{ name: "token", type: "address", internalType: "address" }],
          outputs: [{ name: "", type: "uint8", internalType: "uint8" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "ordersPaused",
          inputs: [],
          outputs: [{ name: "", type: "bool", internalType: "bool" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "owner",
          inputs: [],
          outputs: [{ name: "", type: "address", internalType: "address" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "pendingOwner",
          inputs: [],
          outputs: [{ name: "", type: "address", internalType: "address" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "proxiableUUID",
          inputs: [],
          outputs: [{ name: "", type: "bytes32", internalType: "bytes32" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "removePaymentToken",
          inputs: [
            { name: "paymentToken", type: "address", internalType: "address" },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "renounceOwnership",
          inputs: [],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "requestCancel",
          inputs: [{ name: "id", type: "uint256", internalType: "uint256" }],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "selfPermit",
          inputs: [
            { name: "token", type: "address", internalType: "address" },
            { name: "owner", type: "address", internalType: "address" },
            { name: "value", type: "uint256", internalType: "uint256" },
            { name: "deadline", type: "uint256", internalType: "uint256" },
            { name: "v", type: "uint8", internalType: "uint8" },
            { name: "r", type: "bytes32", internalType: "bytes32" },
            { name: "s", type: "bytes32", internalType: "bytes32" },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "setOperator",
          inputs: [
            { name: "account", type: "address", internalType: "address" },
            { name: "status", type: "bool", internalType: "bool" },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "setOrderDecimalReduction",
          inputs: [
            { name: "token", type: "address", internalType: "address" },
            { name: "decimalReduction", type: "uint8", internalType: "uint8" },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "setOrdersPaused",
          inputs: [{ name: "pause", type: "bool", internalType: "bool" }],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "setPaymentToken",
          inputs: [
            { name: "paymentToken", type: "address", internalType: "address" },
            {
              name: "blacklistCallSelector",
              type: "bytes4",
              internalType: "bytes4",
            },
            { name: "perOrderFeeBuy", type: "uint64", internalType: "uint64" },
            {
              name: "percentageFeeRateBuy",
              type: "uint24",
              internalType: "uint24",
            },
            { name: "perOrderFeeSell", type: "uint64", internalType: "uint64" },
            {
              name: "percentageFeeRateSell",
              type: "uint24",
              internalType: "uint24",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "setTreasury",
          inputs: [
            { name: "account", type: "address", internalType: "address" },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "setVault",
          inputs: [
            { name: "account", type: "address", internalType: "address" },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "totalStandardFee",
          inputs: [
            { name: "sell", type: "bool", internalType: "bool" },
            { name: "paymentToken", type: "address", internalType: "address" },
            {
              name: "paymentTokenQuantity",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "transferOwnership",
          inputs: [
            { name: "newOwner", type: "address", internalType: "address" },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "treasury",
          inputs: [],
          outputs: [{ name: "", type: "address", internalType: "address" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "upgradeToAndCall",
          inputs: [
            {
              name: "newImplementation",
              type: "address",
              internalType: "address",
            },
            { name: "data", type: "bytes", internalType: "bytes" },
          ],
          outputs: [],
          stateMutability: "payable",
        },
        {
          type: "function",
          name: "vault",
          inputs: [],
          outputs: [{ name: "", type: "address", internalType: "address" }],
          stateMutability: "view",
        },
        {
          type: "event",
          name: "CancelRequested",
          inputs: [
            {
              name: "id",
              type: "uint256",
              indexed: !0,
              internalType: "uint256",
            },
            {
              name: "requester",
              type: "address",
              indexed: !0,
              internalType: "address",
            },
          ],
          anonymous: !1,
        },
        {
          type: "event",
          name: "EIP712DomainChanged",
          inputs: [],
          anonymous: !1,
        },
        {
          type: "event",
          name: "Initialized",
          inputs: [
            {
              name: "version",
              type: "uint64",
              indexed: !1,
              internalType: "uint64",
            },
          ],
          anonymous: !1,
        },
        {
          type: "event",
          name: "OperatorSet",
          inputs: [
            {
              name: "account",
              type: "address",
              indexed: !0,
              internalType: "address",
            },
            { name: "status", type: "bool", indexed: !1, internalType: "bool" },
          ],
          anonymous: !1,
        },
        {
          type: "event",
          name: "OrderCancelled",
          inputs: [
            {
              name: "id",
              type: "uint256",
              indexed: !0,
              internalType: "uint256",
            },
            {
              name: "requester",
              type: "address",
              indexed: !0,
              internalType: "address",
            },
            {
              name: "reason",
              type: "string",
              indexed: !1,
              internalType: "string",
            },
          ],
          anonymous: !1,
        },
        {
          type: "event",
          name: "OrderCreated",
          inputs: [
            {
              name: "id",
              type: "uint256",
              indexed: !0,
              internalType: "uint256",
            },
            {
              name: "requester",
              type: "address",
              indexed: !0,
              internalType: "address",
            },
            {
              name: "order",
              type: "tuple",
              indexed: !1,
              internalType: "struct IOrderProcessor.Order",
              components: [
                {
                  name: "requestTimestamp",
                  type: "uint64",
                  internalType: "uint64",
                },
                { name: "recipient", type: "address", internalType: "address" },
                {
                  name: "assetToken",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "paymentToken",
                  type: "address",
                  internalType: "address",
                },
                { name: "sell", type: "bool", internalType: "bool" },
                {
                  name: "orderType",
                  type: "uint8",
                  internalType: "enum IOrderProcessor.OrderType",
                },
                {
                  name: "assetTokenQuantity",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "paymentTokenQuantity",
                  type: "uint256",
                  internalType: "uint256",
                },
                { name: "price", type: "uint256", internalType: "uint256" },
                {
                  name: "tif",
                  type: "uint8",
                  internalType: "enum IOrderProcessor.TIF",
                },
              ],
            },
            {
              name: "feesEscrowed",
              type: "uint256",
              indexed: !1,
              internalType: "uint256",
            },
          ],
          anonymous: !1,
        },
        {
          type: "event",
          name: "OrderDecimalReductionSet",
          inputs: [
            {
              name: "assetToken",
              type: "address",
              indexed: !0,
              internalType: "address",
            },
            {
              name: "decimalReduction",
              type: "uint8",
              indexed: !1,
              internalType: "uint8",
            },
          ],
          anonymous: !1,
        },
        {
          type: "event",
          name: "OrderFill",
          inputs: [
            {
              name: "id",
              type: "uint256",
              indexed: !0,
              internalType: "uint256",
            },
            {
              name: "paymentToken",
              type: "address",
              indexed: !0,
              internalType: "address",
            },
            {
              name: "assetToken",
              type: "address",
              indexed: !0,
              internalType: "address",
            },
            {
              name: "requester",
              type: "address",
              indexed: !1,
              internalType: "address",
            },
            {
              name: "assetAmount",
              type: "uint256",
              indexed: !1,
              internalType: "uint256",
            },
            {
              name: "paymentAmount",
              type: "uint256",
              indexed: !1,
              internalType: "uint256",
            },
            {
              name: "feesTaken",
              type: "uint256",
              indexed: !1,
              internalType: "uint256",
            },
            { name: "sell", type: "bool", indexed: !1, internalType: "bool" },
          ],
          anonymous: !1,
        },
        {
          type: "event",
          name: "OrderFulfilled",
          inputs: [
            {
              name: "id",
              type: "uint256",
              indexed: !0,
              internalType: "uint256",
            },
            {
              name: "requester",
              type: "address",
              indexed: !0,
              internalType: "address",
            },
          ],
          anonymous: !1,
        },
        {
          type: "event",
          name: "OrdersPaused",
          inputs: [
            { name: "paused", type: "bool", indexed: !1, internalType: "bool" },
          ],
          anonymous: !1,
        },
        {
          type: "event",
          name: "OwnershipTransferStarted",
          inputs: [
            {
              name: "previousOwner",
              type: "address",
              indexed: !0,
              internalType: "address",
            },
            {
              name: "newOwner",
              type: "address",
              indexed: !0,
              internalType: "address",
            },
          ],
          anonymous: !1,
        },
        {
          type: "event",
          name: "OwnershipTransferred",
          inputs: [
            {
              name: "previousOwner",
              type: "address",
              indexed: !0,
              internalType: "address",
            },
            {
              name: "newOwner",
              type: "address",
              indexed: !0,
              internalType: "address",
            },
          ],
          anonymous: !1,
        },
        {
          type: "event",
          name: "PaymentTokenRemoved",
          inputs: [
            {
              name: "paymentToken",
              type: "address",
              indexed: !0,
              internalType: "address",
            },
          ],
          anonymous: !1,
        },
        {
          type: "event",
          name: "PaymentTokenSet",
          inputs: [
            {
              name: "paymentToken",
              type: "address",
              indexed: !0,
              internalType: "address",
            },
            {
              name: "blacklistCallSelector",
              type: "bytes4",
              indexed: !1,
              internalType: "bytes4",
            },
            {
              name: "perOrderFeeBuy",
              type: "uint64",
              indexed: !1,
              internalType: "uint64",
            },
            {
              name: "percentageFeeRateBuy",
              type: "uint24",
              indexed: !1,
              internalType: "uint24",
            },
            {
              name: "perOrderFeeSell",
              type: "uint64",
              indexed: !1,
              internalType: "uint64",
            },
            {
              name: "percentageFeeRateSell",
              type: "uint24",
              indexed: !1,
              internalType: "uint24",
            },
          ],
          anonymous: !1,
        },
        {
          type: "event",
          name: "TreasurySet",
          inputs: [
            {
              name: "treasury",
              type: "address",
              indexed: !0,
              internalType: "address",
            },
          ],
          anonymous: !1,
        },
        {
          type: "event",
          name: "Upgraded",
          inputs: [
            {
              name: "implementation",
              type: "address",
              indexed: !0,
              internalType: "address",
            },
          ],
          anonymous: !1,
        },
        {
          type: "event",
          name: "VaultSet",
          inputs: [
            {
              name: "vault",
              type: "address",
              indexed: !0,
              internalType: "address",
            },
          ],
          anonymous: !1,
        },
        {
          type: "error",
          name: "AddressEmptyCode",
          inputs: [
            { name: "target", type: "address", internalType: "address" },
          ],
        },
        {
          type: "error",
          name: "AddressInsufficientBalance",
          inputs: [
            { name: "account", type: "address", internalType: "address" },
          ],
        },
        { type: "error", name: "AmountTooLarge", inputs: [] },
        { type: "error", name: "Blacklist", inputs: [] },
        { type: "error", name: "DecimalsTooLarge", inputs: [] },
        { type: "error", name: "ECDSAInvalidSignature", inputs: [] },
        {
          type: "error",
          name: "ECDSAInvalidSignatureLength",
          inputs: [
            { name: "length", type: "uint256", internalType: "uint256" },
          ],
        },
        {
          type: "error",
          name: "ECDSAInvalidSignatureS",
          inputs: [{ name: "s", type: "bytes32", internalType: "bytes32" }],
        },
        {
          type: "error",
          name: "ERC1967InvalidImplementation",
          inputs: [
            {
              name: "implementation",
              type: "address",
              internalType: "address",
            },
          ],
        },
        { type: "error", name: "ERC1967NonPayable", inputs: [] },
        { type: "error", name: "ExistingOrder", inputs: [] },
        { type: "error", name: "ExpiredSignature", inputs: [] },
        { type: "error", name: "FailedInnerCall", inputs: [] },
        { type: "error", name: "FeeTooLarge", inputs: [] },
        { type: "error", name: "InvalidInitialization", inputs: [] },
        { type: "error", name: "InvalidPrecision", inputs: [] },
        { type: "error", name: "LimitPriceNotSet", inputs: [] },
        { type: "error", name: "NotInitializing", inputs: [] },
        { type: "error", name: "NotOperator", inputs: [] },
        { type: "error", name: "NotRequester", inputs: [] },
        { type: "error", name: "OrderFillAboveLimitPrice", inputs: [] },
        { type: "error", name: "OrderFillBelowLimitPrice", inputs: [] },
        { type: "error", name: "OrderNotActive", inputs: [] },
        {
          type: "error",
          name: "OwnableInvalidOwner",
          inputs: [{ name: "owner", type: "address", internalType: "address" }],
        },
        {
          type: "error",
          name: "OwnableUnauthorizedAccount",
          inputs: [
            { name: "account", type: "address", internalType: "address" },
          ],
        },
        {
          type: "error",
          name: "PRBMath_MulDiv18_Overflow",
          inputs: [
            { name: "x", type: "uint256", internalType: "uint256" },
            { name: "y", type: "uint256", internalType: "uint256" },
          ],
        },
        {
          type: "error",
          name: "PRBMath_MulDiv_Overflow",
          inputs: [
            { name: "x", type: "uint256", internalType: "uint256" },
            { name: "y", type: "uint256", internalType: "uint256" },
            { name: "denominator", type: "uint256", internalType: "uint256" },
          ],
        },
        { type: "error", name: "Paused", inputs: [] },
        {
          type: "error",
          name: "SafeERC20FailedOperation",
          inputs: [{ name: "token", type: "address", internalType: "address" }],
        },
        { type: "error", name: "UUPSUnauthorizedCallContext", inputs: [] },
        {
          type: "error",
          name: "UUPSUnsupportedProxiableUUID",
          inputs: [{ name: "slot", type: "bytes32", internalType: "bytes32" }],
        },
        {
          type: "error",
          name: "UnsupportedToken",
          inputs: [{ name: "token", type: "address", internalType: "address" }],
        },
        { type: "error", name: "ZeroAddress", inputs: [] },
        { type: "error", name: "ZeroValue", inputs: [] },
      ],
    };
    e.s(["dinariOrderProcessing", 0, t]);
  },
  689861,
  (e) => {
    "use strict";
    var t = e.i(462815);
    let n = async () => (await t.default.get("/stocks/invested-graph")).data,
      a = async () => (await t.default.get("/stocks/history")).data,
      r = async () => (await t.default.get("/stocks/holdings")).data,
      i = async ({ address: e }) =>
        (
          await t.default.get(
            `/stocks/web3/wallet/${e}/kyc/managed/status?chain_id=42161`
          )
        ).data,
      s = async ({ address: e }) =>
        (
          await t.default.post(`/stocks/web3/wallet/${e}/kyc/managed/nonce`, {
            chain_id: 42161,
          })
        ).data,
      p = async ({ address: e, signature: n, nonce: a, chainId: r }) =>
        (
          await t.default.post(`/stocks/web3/wallet/${e}/kyc/managed`, {
            signature: n,
            nonce: a,
            chain_id: r,
          })
        ).data,
      u = async (e) =>
        (await t.default.post("/stocks/web3/orders/fee", { ...e })).data;
    e.s([
      "fetchFee",
      0,
      u,
      "getKycMessageNonce",
      0,
      s,
      "getKycStatus",
      0,
      i,
      "getOrderHistory",
      0,
      a,
      "getStockHoldings",
      0,
      r,
      "getStocksInvestedGraph",
      0,
      n,
      "handleKycManaged",
      0,
      p,
    ]);
  },
  657390,
  (e) => {
    "use strict";
    var t = e.i(96742),
      n = e.i(176394),
      a = e.i(110163),
      r = e.i(309682),
      i = e.i(656679),
      s = e.i(752012),
      p = e.i(897282),
      u = e.i(236983),
      y = e.i(974010),
      o = e.i(689861),
      d = e.i(296508);
    let l = t.dinariOrderProcessing.abi,
      m = [
        {
          type: "function",
          name: "approve",
          stateMutability: "nonpayable",
          inputs: [
            { name: "spender", type: "address" },
            { name: "value", type: "uint256" },
          ],
          outputs: [{ name: "", type: "bool" }],
        },
        {
          type: "function",
          name: "decimals",
          stateMutability: "view",
          inputs: [],
          outputs: [{ name: "", type: "uint8" }],
        },
      ];
    e.s([
      "default",
      0,
      () => {
        let { getClientForChain: e } = (0, n.useSmartWallets)();
        return {
          createOrder: async ({
            isBuy: n,
            price: s = 0,
            isMarket: c = !0,
            assetAddress: T,
            value: b,
            onSuccess: f,
            onFailure: g,
          }) => {
            try {
              let g = await e({ id: u.arbitrum.id });
              if (!T) throw Error("empty asset token address");
              let w = "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
                h =
                  t.dinariOrderProcessing.networkAddresses[
                    y.defaultChainIdForStocks
                  ],
                k = n ? BigInt(1e6 * Number(b)) : BigInt(1e18 * Number(b)),
                O = !n,
                v = Number(+!c),
                I = Number(c ? 0 : 1e6 * Number(s)),
                P = (0, r.createPublicClient)({
                  chain: u.arbitrum,
                  transport: (0, a.http)(),
                });
              if (O) {
                let e = await P.readContract({
                  address: h,
                  abi: l,
                  functionName: "orderDecimalReduction",
                  args: [T],
                });
                if (Number(k) % 10 ** e != 0)
                  throw Error(
                    `Order amount precision exceeds max decimals of ${18 - e}`
                  );
              }
              let F = {
                  requestTimestamp: Date.now(),
                  recipient: g.account.address,
                  assetToken: T,
                  paymentToken: w,
                  sell: O,
                  orderType: v,
                  assetTokenQuantity: n ? 0 : Number(k),
                  paymentTokenQuantity: n ? Number(k) : 0,
                  price: I,
                  tif: 1,
                },
                S = {
                  chain_id: y.defaultChainIdForStocks,
                  contract_address: h,
                  order_data: F,
                },
                x = await (0, o.fetchFee)(S),
                A = BigInt(x.data.fee_quote.fee),
                M = (0, i.encodeFunctionData)({
                  abi: m,
                  functionName: "approve",
                  args: [h, k + A],
                }),
                E = (0, i.encodeFunctionData)({
                  abi: l,
                  functionName: "createOrder",
                  args: [
                    [
                      F.requestTimestamp,
                      F.recipient,
                      F.assetToken,
                      F.paymentToken,
                      F.sell,
                      F.orderType,
                      F.assetTokenQuantity.toString(),
                      F.paymentTokenQuantity,
                      F.price,
                      F.tif,
                    ],
                    [
                      x.data.fee_quote.orderId,
                      x.data.fee_quote.requester,
                      x.data.fee_quote.fee,
                      x.data.fee_quote.timestamp,
                      x.data.fee_quote.deadline,
                    ],
                    x.data.fee_quote_signature,
                  ],
                }),
                C = (0, d.encodeNonce)({
                  key: BigInt(Date.now()),
                  sequence: BigInt(0),
                }),
                N = await g?.sendTransaction({
                  chain: y.defaultChainIdForStocks,
                  calls: [
                    { to: n ? w : T, data: M },
                    { to: h, data: E, value: BigInt(0) },
                  ],
                  nonce: C,
                });
              f();
              let q = await P.getTransactionReceipt({ hash: N }),
                D = (0, p.parseEventLogs)({ abi: l, logs: q.logs })[0],
                R = D?.args?.id;
              await P.readContract({
                address: h,
                abi: l,
                functionName: "getOrderStatus",
                args: [R.toString()],
              }),
                f();
            } catch (e) {
              console.log(e, "error"), g && g();
            }
          },
          checkKyc: async () => {
            let t = await e({ id: u.arbitrum.id });
            try {
              return (
                await (0, o.getKycStatus)({ address: t?.account?.address })
              ).data;
            } catch (e) {
              return { status: "PENDING" };
            }
          },
          checkStockBalance: async () => {
            let t = await e({ id: u.arbitrum.id }),
              n = (0, r.createPublicClient)({
                chain: u.arbitrum,
                transport: (0, a.http)(),
              });
            return (
              Number(
                await n.readContract({
                  address: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
                  abi: s.erc20Abi,
                  functionName: "balanceOf",
                  args: [t.account.address],
                })
              ) / 1e6
            );
          },
          generateKycLink: async () => {
            let t = await e({ id: u.arbitrum.id });
            try {
              let e = await (0, o.getKycStatus)({
                address: t?.account?.address,
              });
              if (e.status) {
                if (e.data?.status !== "PASS") {
                  let { success: e, data: n } = await (0, o.getKycMessageNonce)(
                    { address: t?.account?.address }
                  );
                  if (e) {
                    let e = await t.signMessage({ message: n.message });
                    return (
                      await (0, o.handleKycManaged)({
                        address: t?.account?.address,
                        signature: e,
                        nonce: n.nonce,
                        chainId: u.arbitrum.id,
                      })
                    ).data.embed_url;
                  }
                }
              } else {
                let { success: e, data: n } = await (0, o.getKycMessageNonce)({
                  address: t?.account?.address,
                });
                if (e) {
                  let e = await t.signMessage({ message: n.message });
                  return (
                    await (0, o.handleKycManaged)({
                      address: t?.account?.address,
                      signature: e,
                      nonce: n.nonce,
                      chainId: u.arbitrum.id,
                    })
                  ).data.embed_url;
                }
              }
            } catch (e) {
              console.log(e, "e");
            }
          },
          cancelOrder: async ({
            orderId: n,
            refetch: a,
            onSuccess: r,
            onFailure: s,
          }) => {
            try {
              let s = await e({ id: u.arbitrum.id }),
                p =
                  t.dinariOrderProcessing.networkAddresses[
                    y.defaultChainIdForStocks
                  ],
                o = (0, i.encodeFunctionData)({
                  abi: l,
                  functionName: "requestCancel",
                  args: [n],
                });
              (await s?.sendTransaction({
                chain: y.defaultChainIdForStocks,
                calls: [{ to: p, data: o, value: BigInt(0) }],
              })) && (await a(), r());
            } catch (e) {
              console.log(e, "error"), s();
            }
          },
        };
      },
    ]);
  },
]);
