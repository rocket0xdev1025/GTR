(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  974010,
  297197,
  746256,
  86811,
  625421,
  792890,
  615892,
  631780,
  431213,
  344873,
  (e) => {
    "use strict";
    let r, t, o, a, n;
    e.i(271645);
    var s,
      i = e.i(455457),
      l = e.i(450323),
      c = e.i(557874),
      d = e.i(982191),
      u = e.i(839080);
    let m = {
      block: (0, c.defineBlock)({
        format: (e) => ({
          transactions: e.transactions?.map((e) => {
            if ("string" == typeof e) return e;
            let r = (0, d.formatTransaction)(e);
            return (
              "0x7e" === r.typeHex &&
                ((r.isSystemTx = e.isSystemTx),
                (r.mint = e.mint ? (0, l.hexToBigInt)(e.mint) : void 0),
                (r.sourceHash = e.sourceHash),
                (r.type = "deposit")),
              r
            );
          }),
          stateRoot: e.stateRoot,
        }),
      }),
      transaction: (0, d.defineTransaction)({
        format(e) {
          let r = {};
          return (
            "0x7e" === e.type &&
              ((r.isSystemTx = e.isSystemTx),
              (r.mint = e.mint ? (0, l.hexToBigInt)(e.mint) : void 0),
              (r.sourceHash = e.sourceHash),
              (r.type = "deposit")),
            r
          );
        },
      }),
      transactionReceipt: (0, u.defineTransactionReceipt)({
        format: (e) => ({
          ...(e.depositNonce
            ? { depositNonce: (0, l.hexToBigInt)(e.depositNonce) }
            : {}),
          ...(e.depositReceiptVersion
            ? {
                depositReceiptVersion: (0, l.hexToNumber)(
                  e.depositReceiptVersion
                ),
              }
            : {}),
          l1GasPrice: e.l1GasPrice ? (0, l.hexToBigInt)(e.l1GasPrice) : null,
          l1GasUsed: e.l1GasUsed ? (0, l.hexToBigInt)(e.l1GasUsed) : null,
          l1Fee: e.l1Fee ? (0, l.hexToBigInt)(e.l1Fee) : null,
          l1FeeScalar: e.l1FeeScalar ? Number(e.l1FeeScalar) : null,
        }),
      }),
    };
    var p = e.i(608861),
      b = e.i(796516),
      h = e.i(147526),
      g = e.i(675107),
      f = e.i(70326),
      x = e.i(393702),
      y = e.i(94371),
      w = e.i(49810),
      k = e.i(883031),
      v = e.i(310538),
      T = e.i(8406),
      B = e.i(556047),
      I = e.i(674768),
      C = e.i(569934),
      A = e.i(86741),
      S = e.i(505880),
      H = e.i(853532),
      F = e.i(401319),
      E = e.i(790063);
    function N(e) {
      let { chainId: r, maxPriorityFeePerGas: t, maxFeePerGas: o, to: a } = e;
      if (r <= 0) throw new S.InvalidChainIdError({ chainId: r });
      if (a && !(0, b.isAddress)(a))
        throw new p.InvalidAddressError({ address: a });
      if (o && o > I.maxUint256)
        throw new H.FeeCapTooHighError({ maxFeePerGas: o });
      if (t && o && t > o)
        throw new H.TipAboveFeeCapError({
          maxFeePerGas: o,
          maxPriorityFeePerGas: t,
        });
    }
    var P = e.i(576213);
    function z(e) {
      if (!e || 0 === e.length) return [];
      let r = [];
      for (let t = 0; t < e.length; t++) {
        let { address: o, storageKeys: a } = e[t];
        for (let e = 0; e < a.length; e++)
          if (a[e].length - 2 != 64)
            throw new x.InvalidStorageKeySizeError({ storageKey: a[e] });
        if (!(0, b.isAddress)(o, { strict: !1 }))
          throw new p.InvalidAddressError({ address: o });
        r.push([o, a]);
      }
      return r;
    }
    function M(e, r) {
      let t = (0, P.getTransactionType)(e);
      return "eip1559" === t
        ? (function (e, r) {
            let {
              chainId: t,
              gas: o,
              nonce: a,
              to: n,
              value: s,
              maxFeePerGas: i,
              maxPriorityFeePerGas: l,
              accessList: c,
              data: d,
            } = e;
            N(e);
            let u = z(c),
              m = [
                (0, g.numberToHex)(t),
                a ? (0, g.numberToHex)(a) : "0x",
                l ? (0, g.numberToHex)(l) : "0x",
                i ? (0, g.numberToHex)(i) : "0x",
                o ? (0, g.numberToHex)(o) : "0x",
                n ?? "0x",
                s ? (0, g.numberToHex)(s) : "0x",
                d ?? "0x",
                u,
                ...U(e, r),
              ];
            return (0, h.concatHex)(["0x02", (0, f.toRlp)(m)]);
          })(e, r)
        : "eip2930" === t
        ? (function (e, r) {
            let {
              chainId: t,
              gas: o,
              data: a,
              nonce: n,
              to: s,
              value: i,
              accessList: l,
              gasPrice: c,
            } = e;
            !(function (e) {
              let {
                chainId: r,
                maxPriorityFeePerGas: t,
                gasPrice: o,
                maxFeePerGas: a,
                to: n,
              } = e;
              if (r <= 0) throw new S.InvalidChainIdError({ chainId: r });
              if (n && !(0, b.isAddress)(n))
                throw new p.InvalidAddressError({ address: n });
              if (t || a)
                throw new C.BaseError(
                  "`maxFeePerGas`/`maxPriorityFeePerGas` is not a valid EIP-2930 Transaction attribute."
                );
              if (o && o > I.maxUint256)
                throw new H.FeeCapTooHighError({ maxFeePerGas: o });
            })(e);
            let d = z(l),
              u = [
                (0, g.numberToHex)(t),
                n ? (0, g.numberToHex)(n) : "0x",
                c ? (0, g.numberToHex)(c) : "0x",
                o ? (0, g.numberToHex)(o) : "0x",
                s ?? "0x",
                i ? (0, g.numberToHex)(i) : "0x",
                a ?? "0x",
                d,
                ...U(e, r),
              ];
            return (0, h.concatHex)(["0x01", (0, f.toRlp)(u)]);
          })(e, r)
        : "eip4844" === t
        ? (function (e, r) {
            let {
              chainId: t,
              gas: o,
              nonce: a,
              to: n,
              value: s,
              maxFeePerBlobGas: i,
              maxFeePerGas: c,
              maxPriorityFeePerGas: d,
              accessList: u,
              data: m,
            } = e;
            !(function (e) {
              let { blobVersionedHashes: r } = e;
              if (r) {
                if (0 === r.length) throw new A.EmptyBlobError();
                for (let e of r) {
                  let r = (0, F.size)(e),
                    t = (0, l.hexToNumber)((0, E.slice)(e, 0, 1));
                  if (32 !== r)
                    throw new A.InvalidVersionedHashSizeError({
                      hash: e,
                      size: r,
                    });
                  if (t !== B.versionedHashVersionKzg)
                    throw new A.InvalidVersionedHashVersionError({
                      hash: e,
                      version: t,
                    });
                }
              }
              N(e);
            })(e);
            let p = e.blobVersionedHashes,
              b = e.sidecars;
            if (e.blobs && (void 0 === p || void 0 === b)) {
              let r =
                  "string" == typeof e.blobs[0]
                    ? e.blobs
                    : e.blobs.map((e) => (0, g.bytesToHex)(e)),
                t = e.kzg,
                o = (0, y.blobsToCommitments)({ blobs: r, kzg: t });
              if (
                (void 0 === p &&
                  (p = (0, k.commitmentsToVersionedHashes)({ commitments: o })),
                void 0 === b)
              ) {
                let e = (0, w.blobsToProofs)({
                  blobs: r,
                  commitments: o,
                  kzg: t,
                });
                b = (0, v.toBlobSidecars)({
                  blobs: r,
                  commitments: o,
                  proofs: e,
                });
              }
            }
            let x = z(u),
              T = [
                (0, g.numberToHex)(t),
                a ? (0, g.numberToHex)(a) : "0x",
                d ? (0, g.numberToHex)(d) : "0x",
                c ? (0, g.numberToHex)(c) : "0x",
                o ? (0, g.numberToHex)(o) : "0x",
                n ?? "0x",
                s ? (0, g.numberToHex)(s) : "0x",
                m ?? "0x",
                x,
                i ? (0, g.numberToHex)(i) : "0x",
                p ?? [],
                ...U(e, r),
              ],
              I = [],
              C = [],
              S = [];
            if (b)
              for (let e = 0; e < b.length; e++) {
                let { blob: r, commitment: t, proof: o } = b[e];
                I.push(r), C.push(t), S.push(o);
              }
            return (0, h.concatHex)([
              "0x03",
              b ? (0, f.toRlp)([T, I, C, S]) : (0, f.toRlp)(T),
            ]);
          })(e, r)
        : "eip7702" === t
        ? (function (e, r) {
            let {
              authorizationList: t,
              chainId: o,
              gas: a,
              nonce: n,
              to: s,
              value: i,
              maxFeePerGas: l,
              maxPriorityFeePerGas: c,
              accessList: d,
              data: u,
            } = e;
            !(function (e) {
              let { authorizationList: r } = e;
              if (r)
                for (let e of r) {
                  let { chainId: r } = e,
                    t = e.address;
                  if (!(0, b.isAddress)(t))
                    throw new p.InvalidAddressError({ address: t });
                  if (r < 0) throw new S.InvalidChainIdError({ chainId: r });
                }
              N(e);
            })(e);
            let m = z(d),
              x = (function (e) {
                if (!e || 0 === e.length) return [];
                let r = [];
                for (let t of e) {
                  let { chainId: e, nonce: o, ...a } = t,
                    n = t.address;
                  r.push([
                    e ? (0, g.toHex)(e) : "0x",
                    n,
                    o ? (0, g.toHex)(o) : "0x",
                    ...U({}, a),
                  ]);
                }
                return r;
              })(t);
            return (0, h.concatHex)([
              "0x04",
              (0, f.toRlp)([
                (0, g.numberToHex)(o),
                n ? (0, g.numberToHex)(n) : "0x",
                c ? (0, g.numberToHex)(c) : "0x",
                l ? (0, g.numberToHex)(l) : "0x",
                a ? (0, g.numberToHex)(a) : "0x",
                s ?? "0x",
                i ? (0, g.numberToHex)(i) : "0x",
                u ?? "0x",
                m,
                x,
                ...U(e, r),
              ]),
            ]);
          })(e, r)
        : (function (e, r) {
            let {
              chainId: t = 0,
              gas: o,
              data: a,
              nonce: n,
              to: s,
              value: i,
              gasPrice: l,
            } = e;
            !(function (e) {
              let {
                chainId: r,
                maxPriorityFeePerGas: t,
                gasPrice: o,
                maxFeePerGas: a,
                to: n,
              } = e;
              if (n && !(0, b.isAddress)(n))
                throw new p.InvalidAddressError({ address: n });
              if (void 0 !== r && r <= 0)
                throw new S.InvalidChainIdError({ chainId: r });
              if (t || a)
                throw new C.BaseError(
                  "`maxFeePerGas`/`maxPriorityFeePerGas` is not a valid Legacy Transaction attribute."
                );
              if (o && o > I.maxUint256)
                throw new H.FeeCapTooHighError({ maxFeePerGas: o });
            })(e);
            let c = [
              n ? (0, g.numberToHex)(n) : "0x",
              l ? (0, g.numberToHex)(l) : "0x",
              o ? (0, g.numberToHex)(o) : "0x",
              s ?? "0x",
              i ? (0, g.numberToHex)(i) : "0x",
              a ?? "0x",
            ];
            if (r) {
              let e = (() => {
                  if (r.v >= 35n)
                    return (r.v - 35n) / 2n > 0
                      ? r.v
                      : 27n + (35n === r.v ? 0n : 1n);
                  if (t > 0) return BigInt(2 * t) + BigInt(35n + r.v - 27n);
                  let e = 27n + (27n === r.v ? 0n : 1n);
                  if (r.v !== e) throw new x.InvalidLegacyVError({ v: r.v });
                  return e;
                })(),
                o = (0, T.trim)(r.r),
                a = (0, T.trim)(r.s);
              c = [
                ...c,
                (0, g.numberToHex)(e),
                "0x00" === o ? "0x" : o,
                "0x00" === a ? "0x" : a,
              ];
            } else t > 0 && (c = [...c, (0, g.numberToHex)(t), "0x", "0x"]);
            return (0, f.toRlp)(c);
          })(e, r);
    }
    function U(e, r) {
      let t = r ?? e,
        { v: o, yParity: a } = t;
      if (void 0 === t.r || void 0 === t.s || (void 0 === o && void 0 === a))
        return [];
      let n = (0, T.trim)(t.r),
        s = (0, T.trim)(t.s);
      return [
        "number" == typeof a
          ? a
            ? (0, g.numberToHex)(1)
            : "0x"
          : 0n === o
          ? "0x"
          : 1n === o
          ? (0, g.numberToHex)(1)
          : 27n === o
          ? "0x"
          : (0, g.numberToHex)(1),
        "0x00" === n ? "0x" : n,
        "0x00" === s ? "0x" : s,
      ];
    }
    let D = {
      blockTime: 2e3,
      contracts: {
        gasPriceOracle: {
          address: "0x420000000000000000000000000000000000000F",
        },
        l1Block: { address: "0x4200000000000000000000000000000000000015" },
        l2CrossDomainMessenger: {
          address: "0x4200000000000000000000000000000000000007",
        },
        l2Erc721Bridge: {
          address: "0x4200000000000000000000000000000000000014",
        },
        l2StandardBridge: {
          address: "0x4200000000000000000000000000000000000010",
        },
        l2ToL1MessagePasser: {
          address: "0x4200000000000000000000000000000000000016",
        },
      },
      formatters: m,
      serializers: {
        transaction: function (e, r) {
          var t;
          return "deposit" === (t = e).type || void 0 !== t.sourceHash
            ? (function (e) {
                !(function (e) {
                  let { from: r, to: t } = e;
                  if (r && !(0, b.isAddress)(r))
                    throw new p.InvalidAddressError({ address: r });
                  if (t && !(0, b.isAddress)(t))
                    throw new p.InvalidAddressError({ address: t });
                })(e);
                let {
                    sourceHash: r,
                    data: t,
                    from: o,
                    gas: a,
                    isSystemTx: n,
                    mint: s,
                    to: i,
                    value: l,
                  } = e,
                  c = [
                    r,
                    o,
                    i ?? "0x",
                    s ? (0, g.toHex)(s) : "0x",
                    l ? (0, g.toHex)(l) : "0x",
                    a ? (0, g.toHex)(a) : "0x",
                    n ? "0x1" : "0x",
                    t ?? "0x",
                  ];
                return (0, h.concatHex)(["0x7e", (0, f.toRlp)(c)]);
              })(e)
            : M(e, r);
        },
      },
    };
    var G = e.i(538463);
    let L = (0, G.defineChain)({
      ...D,
      id: 8453,
      name: "Base",
      nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
      rpcUrls: { default: { http: ["https://mainnet.base.org"] } },
      blockExplorers: {
        default: {
          name: "Basescan",
          url: "https://basescan.org",
          apiUrl: "https://api.basescan.org/api",
        },
      },
      contracts: {
        ...D.contracts,
        disputeGameFactory: {
          1: { address: "0x43edB88C4B80fDD2AdFF2412A7BebF9dF42cB40e" },
        },
        l2OutputOracle: {
          1: { address: "0x56315b90c40730925ec5485cf004d835058518A0" },
        },
        multicall3: {
          address: "0xca11bde05977b3631167028862be2a173976ca11",
          blockCreated: 5022,
        },
        portal: {
          1: {
            address: "0x49048044D57e1C92A77f79988d21Fa8fAF74E97e",
            blockCreated: 0x10ac19f,
          },
        },
        l1StandardBridge: {
          1: {
            address: "0x3154Cf16ccdb4C6d922629664174b904d80F2C35",
            blockCreated: 0x10ac19f,
          },
        },
      },
      sourceId: 1,
    });
    e.s(["base", 0, L], 297197);
    var R = e.i(236983);
    let $ = (0, G.defineChain)({
      id: 56,
      name: "BNB Smart Chain",
      blockTime: 750,
      nativeCurrency: { decimals: 18, name: "BNB", symbol: "BNB" },
      rpcUrls: { default: { http: ["https://56.rpc.thirdweb.com"] } },
      blockExplorers: {
        default: {
          name: "BscScan",
          url: "https://bscscan.com",
          apiUrl: "https://api.bscscan.com/api",
        },
      },
      contracts: {
        multicall3: {
          address: "0xca11bde05977b3631167028862be2a173976ca11",
          blockCreated: 0xf2f12c,
        },
      },
    });
    e.s(["bsc", 0, $], 746256);
    let O = (0, G.defineChain)({
      id: 146,
      name: "Sonic",
      blockTime: 630,
      nativeCurrency: { decimals: 18, name: "Sonic", symbol: "S" },
      rpcUrls: { default: { http: ["https://rpc.soniclabs.com"] } },
      blockExplorers: {
        default: { name: "Sonic Explorer", url: "https://sonicscan.org" },
      },
      contracts: {
        multicall3: {
          address: "0xca11bde05977b3631167028862be2a173976ca11",
          blockCreated: 60,
        },
      },
      testnet: !1,
    });
    e.s(["sonic", 0, O], 86811);
    let W = (0, G.defineChain)({
      id: 80094,
      name: "Berachain",
      blockTime: 2e3,
      nativeCurrency: { decimals: 18, name: "BERA Token", symbol: "BERA" },
      contracts: {
        multicall3: {
          address: "0xcA11bde05977b3631167028862bE2a173976CA11",
          blockCreated: 0,
        },
        ensRegistry: {
          address: "0x5b22280886a2f5e09a49bea7e320eab0e5320e28",
          blockCreated: 877007,
        },
        ensUniversalResolver: {
          address: "0x4D41762915F83c76EcaF6776d9b08076aA32b492",
          blockCreated: 9310021,
        },
      },
      rpcUrls: { default: { http: ["https://rpc.berachain.com"] } },
      blockExplorers: {
        default: { name: "Berascan", url: "https://berascan.com" },
      },
      ensTlds: [".bera"],
      testnet: !1,
    });
    e.s(["berachain", 0, W], 625421);
    let _ = (0, G.defineChain)({
      id: 137,
      name: "Polygon",
      blockTime: 2e3,
      nativeCurrency: { name: "POL", symbol: "POL", decimals: 18 },
      rpcUrls: { default: { http: ["https://polygon.drpc.org"] } },
      blockExplorers: {
        default: {
          name: "PolygonScan",
          url: "https://polygonscan.com",
          apiUrl: "https://api.etherscan.io/v2/api",
        },
      },
      contracts: {
        multicall3: {
          address: "0xca11bde05977b3631167028862be2a173976ca11",
          blockCreated: 0x18938b0,
        },
      },
    });
    e.s(["polygon", 0, _], 792890);
    var j = e.i(769936),
      V = e.i(856324),
      K = e.i(190521);
    let q = 32n * I.maxUint16,
      Q = {
        block: (0, c.defineBlock)({
          format(e) {
            let r = e.transactions?.map((e) => {
              if ("string" == typeof e) return e;
              let r = Q.transaction?.format(e);
              return (
                "0x71" === r.typeHex
                  ? (r.type = "eip712")
                  : "0xff" === r.typeHex && (r.type = "priority"),
                r
              );
            });
            return {
              l1BatchNumber: e.l1BatchNumber
                ? (0, l.hexToBigInt)(e.l1BatchNumber)
                : null,
              l1BatchTimestamp: e.l1BatchTimestamp
                ? (0, l.hexToBigInt)(e.l1BatchTimestamp)
                : null,
              transactions: r,
            };
          },
        }),
        transaction: (0, d.defineTransaction)({
          format(e) {
            let r = {};
            return (
              "0x71" === e.type
                ? (r.type = "eip712")
                : "0xff" === e.type && (r.type = "priority"),
              {
                ...r,
                l1BatchNumber: e.l1BatchNumber
                  ? (0, l.hexToBigInt)(e.l1BatchNumber)
                  : null,
                l1BatchTxIndex: e.l1BatchTxIndex
                  ? (0, l.hexToBigInt)(e.l1BatchTxIndex)
                  : null,
              }
            );
          },
        }),
        transactionReceipt: (0, u.defineTransactionReceipt)({
          format: (e) => ({
            l1BatchNumber: e.l1BatchNumber
              ? (0, l.hexToBigInt)(e.l1BatchNumber)
              : null,
            l1BatchTxIndex: e.l1BatchTxIndex
              ? (0, l.hexToBigInt)(e.l1BatchTxIndex)
              : null,
            logs: e.logs.map((e) => ({
              ...(0, V.formatLog)(e),
              l1BatchNumber: e.l1BatchNumber
                ? (0, l.hexToBigInt)(e.l1BatchNumber)
                : null,
              transactionLogIndex: (0, l.hexToNumber)(e.transactionLogIndex),
              logType: e.logType,
            })),
            l2ToL1Logs: e.l2ToL1Logs.map((e) => ({
              blockNumber: (0, l.hexToBigInt)(e.blockHash),
              blockHash: e.blockHash,
              l1BatchNumber: e.l1BatchNumber
                ? (0, l.hexToBigInt)(e.l1BatchNumber)
                : null,
              transactionIndex: (0, l.hexToBigInt)(e.transactionIndex),
              shardId: (0, l.hexToBigInt)(e.shardId),
              isService: e.isService,
              sender: e.sender,
              key: e.key,
              value: e.value,
              transactionHash: e.transactionHash,
              logIndex: (0, l.hexToBigInt)(e.logIndex),
            })),
          }),
        }),
        transactionRequest: (0, K.defineTransactionRequest)({
          exclude: [
            "customSignature",
            "factoryDeps",
            "gasPerPubdata",
            "paymaster",
            "paymasterInput",
          ],
          format: (e) =>
            e.gasPerPubdata ||
            (e.paymaster && e.paymasterInput) ||
            e.factoryDeps ||
            e.customSignature
              ? {
                  eip712Meta: {
                    ...(e.gasPerPubdata
                      ? { gasPerPubdata: (0, g.toHex)(e.gasPerPubdata) }
                      : { gasPerPubdata: (0, g.toHex)(50000n) }),
                    ...(e.paymaster && e.paymasterInput
                      ? {
                          paymasterParams: {
                            paymaster: e.paymaster,
                            paymasterInput: Array.from(
                              (0, j.hexToBytes)(e.paymasterInput)
                            ),
                          },
                        }
                      : {}),
                    ...(e.factoryDeps
                      ? {
                          factoryDeps: e.factoryDeps.map((e) =>
                            Array.from((0, j.hexToBytes)(e))
                          ),
                        }
                      : {}),
                    ...(e.customSignature
                      ? {
                          customSignature: Array.from(
                            (0, j.hexToBytes)(e.customSignature)
                          ),
                        }
                      : {}),
                  },
                  type: "0x71",
                }
              : {},
        }),
      };
    var Y = C;
    class Z extends Y.BaseError {
      constructor() {
        super(
          'Transaction is not an EIP712 transaction.\n\nTransaction must:\n  - include `type: "eip712"`\n  - include one of the following: `customSignature`, `paymaster`, `paymasterInput`, `gasPerPubdata`, `factoryDeps`',
          { name: "InvalidEip712TransactionError" }
        );
      }
    }
    function X(e) {
      return (
        "eip712" === e.type ||
        ("customSignature" in e && !!e.customSignature) ||
        ("paymaster" in e && !!e.paymaster) ||
        ("paymasterInput" in e && !!e.paymasterInput) ||
        ("gasPerPubdata" in e && "bigint" == typeof e.gasPerPubdata) ||
        ("factoryDeps" in e && !!e.factoryDeps) ||
        !1
      );
    }
    function J(e) {
      let { chainId: r, to: t, from: o, paymaster: a, paymasterInput: n } = e;
      if (!X(e)) throw new Z();
      if (!r || r <= 0) throw new S.InvalidChainIdError({ chainId: r });
      if (t && !(0, b.isAddress)(t))
        throw new p.InvalidAddressError({ address: t });
      if (o && !(0, b.isAddress)(o))
        throw new p.InvalidAddressError({ address: o });
      if (a && !(0, b.isAddress)(a))
        throw new p.InvalidAddressError({ address: a });
      if (a && !n)
        throw new C.BaseError(
          "`paymasterInput` must be provided when `paymaster` is defined"
        );
      if (!a && n)
        throw new C.BaseError(
          "`paymaster` must be provided when `paymasterInput` is defined"
        );
    }
    var ee = e.i(22411),
      er = e.i(862243),
      et = C;
    class eo extends et.BaseError {
      constructor({ givenLength: e, maxBytecodeSize: r }) {
        super(`Bytecode cannot be longer than ${r} bytes. Given length: ${e}`, {
          name: "BytecodeLengthExceedsMaxSizeError",
        });
      }
    }
    class ea extends et.BaseError {
      constructor({ givenLengthInWords: e }) {
        super(
          `Bytecode length in 32-byte words must be odd. Given length in words: ${e}`,
          { name: "BytecodeLengthInWordsMustBeOddError" }
        );
      }
    }
    class en extends et.BaseError {
      constructor({ givenLength: e }) {
        super(
          `The bytecode length in bytes must be divisible by 32. Given length: ${e}`,
          { name: "BytecodeLengthMustBeDivisibleBy32Error" }
        );
      }
    }
    let es = (0, G.defineChain)({
      blockTime: 1e3,
      formatters: Q,
      serializers: {
        transaction: function (e, r) {
          return X(e)
            ? (function (e) {
                let {
                  chainId: r,
                  gas: t,
                  nonce: o,
                  to: a,
                  from: n,
                  value: s,
                  maxFeePerGas: i,
                  maxPriorityFeePerGas: l,
                  customSignature: c,
                  factoryDeps: d,
                  paymaster: u,
                  paymasterInput: m,
                  gasPerPubdata: p,
                  data: b,
                } = e;
                J(e);
                let x = [
                  o ? (0, g.toHex)(o) : "0x",
                  l ? (0, g.toHex)(l) : "0x",
                  i ? (0, g.toHex)(i) : "0x",
                  t ? (0, g.toHex)(t) : "0x",
                  a ?? "0x",
                  s ? (0, g.toHex)(s) : "0x",
                  b ?? "0x",
                  (0, g.toHex)(r),
                  (0, g.toHex)(""),
                  (0, g.toHex)(""),
                  (0, g.toHex)(r),
                  n ?? "0x",
                  p ? (0, g.toHex)(p) : (0, g.toHex)(50000n),
                  d ?? [],
                  c ?? "0x",
                  u && m ? [u, m] : [],
                ];
                return (0, h.concatHex)(["0x71", (0, f.toRlp)(x)]);
              })(e)
            : M(e, r);
        },
      },
      custom: {
        getEip712Domain: (e) => {
          J(e);
          let r = (function (e) {
            let {
              gas: r,
              nonce: t,
              to: o,
              from: a,
              value: n,
              maxFeePerGas: s,
              maxPriorityFeePerGas: i,
              factoryDeps: l,
              paymaster: c,
              paymasterInput: d,
              gasPerPubdata: u,
              data: m,
            } = e;
            return {
              txType: 113n,
              from: BigInt(a),
              to: o ? BigInt(o) : 0n,
              gasLimit: r ?? 0n,
              gasPerPubdataByteLimit: u ?? 50000n,
              maxFeePerGas: s ?? 0n,
              maxPriorityFeePerGas: i ?? 0n,
              paymaster: c ? BigInt(c) : 0n,
              nonce: t ? BigInt(t) : 0n,
              value: n ?? 0n,
              data: m ?? "0x",
              factoryDeps:
                l?.map((e) =>
                  (0, g.toHex)(
                    (function (e) {
                      let r = (0, j.toBytes)(e);
                      if (r.length % 32 != 0)
                        throw new en({ givenLength: r.length });
                      if (r.length > q)
                        throw new eo({
                          givenLength: r.length,
                          maxBytecodeSize: q,
                        });
                      let t = (0, er.sha256)(r),
                        o = (0, j.toBytes)(t),
                        a = r.length / 32;
                      if (a % 2 == 0) throw new ea({ givenLengthInWords: a });
                      let n = (0, j.toBytes)(a),
                        s = (0, ee.pad)(n, { size: 2 }),
                        i = new Uint8Array([1, 0]);
                      return o.set(i, 0), o.set(s, 2), o;
                    })(e)
                  )
                ) ?? [],
              paymasterInput: d || "0x",
            };
          })(e);
          return {
            domain: { name: "zkSync", version: "2", chainId: e.chainId },
            types: {
              Transaction: [
                { name: "txType", type: "uint256" },
                { name: "from", type: "uint256" },
                { name: "to", type: "uint256" },
                { name: "gasLimit", type: "uint256" },
                { name: "gasPerPubdataByteLimit", type: "uint256" },
                { name: "maxFeePerGas", type: "uint256" },
                { name: "maxPriorityFeePerGas", type: "uint256" },
                { name: "paymaster", type: "uint256" },
                { name: "nonce", type: "uint256" },
                { name: "value", type: "uint256" },
                { name: "data", type: "bytes" },
                { name: "factoryDeps", type: "bytes32[]" },
                { name: "paymasterInput", type: "bytes" },
              ],
            },
            primaryType: "Transaction",
            message: r,
          };
        },
      },
      blockTime: 200,
      id: 2741,
      name: "Abstract",
      nativeCurrency: { decimals: 18, name: "ETH", symbol: "ETH" },
      rpcUrls: {
        default: {
          http: ["https://api.mainnet.abs.xyz"],
          webSocket: ["wss://api.mainnet.abs.xyz/ws"],
        },
      },
      blockExplorers: {
        default: { name: "Etherscan", url: "https://abscan.org" },
        native: {
          name: "Abstract Explorer",
          url: "https://explorer.mainnet.abs.xyz",
        },
      },
      contracts: {
        multicall3: {
          address: "0xAa4De41dba0Ca5dCBb288b7cC6b708F3aaC759E7",
          blockCreated: 5288,
        },
        erc6492Verifier: {
          address: "0xfB688330379976DA81eB64Fe4BF50d7401763B9C",
          blockCreated: 5263,
        },
      },
    });
    e.s(["abstract", 0, es], 615892);
    let ei = (0, G.defineChain)({
      id: 143,
      name: "Monad",
      blockTime: 400,
      nativeCurrency: { name: "Monad", symbol: "MON", decimals: 18 },
      rpcUrls: {
        default: {
          http: ["https://rpc.monad.xyz", "https://rpc1.monad.xyz"],
          webSocket: ["wss://rpc.monad.xyz", "wss://rpc1.monad.xyz"],
        },
      },
      blockExplorers: {
        default: {
          name: "Monadscan",
          url: "https://monadscan.com",
          apiUrl: "https://api.etherscan.io/v2/api?chainid=143",
        },
        monadvision: { name: "MonadVision", url: "https://monadvision.com" },
      },
      testnet: !1,
      contracts: {
        multicall3: {
          address: "0xcA11bde05977b3631167028862bE2a173976CA11",
          blockCreated: 9248132,
        },
      },
    });
    e.s(["monad", 0, ei], 631780);
    let el = (0, G.defineChain)({
      id: 4663,
      name: "Robinhood Chain",
      nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
      rpcUrls: {
        default: { http: ["https://rpc.mainnet.chain.robinhood.com"] },
      },
      blockExplorers: {
        default: {
          name: "Blockscout",
          url: "https://robinhoodchain.blockscout.com",
          apiUrl: "https://robinhoodchain.blockscout.com/api",
        },
      },
      contracts: {
        multicall3: { address: "0xca11bde05977b3631167028862be2a173976ca11" },
      },
    });
    e.s(["robinhood", 0, el], 431213);
    var ec = e.i(207670);
    let ed = (e = new Map(), r = null, t) => ({
        nextPart: e,
        validators: r,
        classGroupId: t,
      }),
      eu = [],
      em = (e, r, t) => {
        if (0 == e.length - r) return t.classGroupId;
        let o = e[r],
          a = t.nextPart.get(o);
        if (a) {
          let t = em(e, r + 1, a);
          if (t) return t;
        }
        let n = t.validators;
        if (null === n) return;
        let s = 0 === r ? e.join("-") : e.slice(r).join("-"),
          i = n.length;
        for (let e = 0; e < i; e++) {
          let r = n[e];
          if (r.validator(s)) return r.classGroupId;
        }
      },
      ep = (e, r) => {
        let t = ed();
        for (let o in e) eb(e[o], t, o, r);
        return t;
      },
      eb = (e, r, t, o) => {
        let a = e.length;
        for (let n = 0; n < a; n++) eh(e[n], r, t, o);
      },
      eh = (e, r, t, o) => {
        "string" == typeof e
          ? eg(e, r, t)
          : "function" == typeof e
          ? ef(e, r, t, o)
          : ex(e, r, t, o);
      },
      eg = (e, r, t) => {
        ("" === e ? r : ey(r, e)).classGroupId = t;
      },
      ef = (e, r, t, o) => {
        ew(e)
          ? eb(e(o), r, t, o)
          : (null === r.validators && (r.validators = []),
            r.validators.push({ classGroupId: t, validator: e }));
      },
      ex = (e, r, t, o) => {
        let a = Object.entries(e),
          n = a.length;
        for (let e = 0; e < n; e++) {
          let [n, s] = a[e];
          eb(s, ey(r, n), t, o);
        }
      },
      ey = (e, r) => {
        let t = e,
          o = r.split("-"),
          a = o.length;
        for (let e = 0; e < a; e++) {
          let r = o[e],
            a = t.nextPart.get(r);
          a || ((a = ed()), t.nextPart.set(r, a)), (t = a);
        }
        return t;
      },
      ew = (e) => "isThemeGetter" in e && !0 === e.isThemeGetter,
      ek = [],
      ev = (e, r, t, o, a) => ({
        modifiers: e,
        hasImportantModifier: r,
        baseClassName: t,
        maybePostfixModifierPosition: o,
        isExternal: a,
      }),
      eT = /\s+/,
      eB = (e) => {
        let r;
        if ("string" == typeof e) return e;
        let t = "";
        for (let o = 0; o < e.length; o++)
          e[o] && (r = eB(e[o])) && (t && (t += " "), (t += r));
        return t;
      },
      eI = [],
      eC = (e) => {
        let r = (r) => r[e] || eI;
        return (r.isThemeGetter = !0), r;
      },
      eA = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
      eS = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
      eH = /^\d+\/\d+$/,
      eF = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
      eE =
        /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
      eN = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
      eP = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
      ez =
        /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
      eM = (e) => eH.test(e),
      eU = (e) => !!e && !Number.isNaN(Number(e)),
      eD = (e) => !!e && Number.isInteger(Number(e)),
      eG = (e) => e.endsWith("%") && eU(e.slice(0, -1)),
      eL = (e) => eF.test(e),
      eR = () => !0,
      e$ = (e) => eE.test(e) && !eN.test(e),
      eO = () => !1,
      eW = (e) => eP.test(e),
      e_ = (e) => ez.test(e),
      ej = (e) => !eK(e) && !eJ(e),
      eV = (e) => e4(e, re, eO),
      eK = (e) => eA.test(e),
      eq = (e) => e4(e, rr, e$),
      eQ = (e) => e4(e, rt, eU),
      eY = (e) => e4(e, e8, eO),
      eZ = (e) => e4(e, e9, e_),
      eX = (e) => e4(e, ra, eW),
      eJ = (e) => eS.test(e),
      e0 = (e) => e5(e, rr),
      e1 = (e) => e5(e, ro),
      e2 = (e) => e5(e, e8),
      e3 = (e) => e5(e, re),
      e7 = (e) => e5(e, e9),
      e6 = (e) => e5(e, ra, !0),
      e4 = (e, r, t) => {
        let o = eA.exec(e);
        return !!o && (o[1] ? r(o[1]) : t(o[2]));
      },
      e5 = (e, r, t = !1) => {
        let o = eS.exec(e);
        return !!o && (o[1] ? r(o[1]) : t);
      },
      e8 = (e) => "position" === e || "percentage" === e,
      e9 = (e) => "image" === e || "url" === e,
      re = (e) => "length" === e || "size" === e || "bg-size" === e,
      rr = (e) => "length" === e,
      rt = (e) => "number" === e,
      ro = (e) => "family-name" === e,
      ra = (e) => "shadow" === e,
      rn =
        ((s = () => {
          let e = eC("color"),
            r = eC("font"),
            t = eC("text"),
            o = eC("font-weight"),
            a = eC("tracking"),
            n = eC("leading"),
            s = eC("breakpoint"),
            i = eC("container"),
            l = eC("spacing"),
            c = eC("radius"),
            d = eC("shadow"),
            u = eC("inset-shadow"),
            m = eC("text-shadow"),
            p = eC("drop-shadow"),
            b = eC("blur"),
            h = eC("perspective"),
            g = eC("aspect"),
            f = eC("ease"),
            x = eC("animate"),
            y = () => [
              "auto",
              "avoid",
              "all",
              "avoid-page",
              "page",
              "left",
              "right",
              "column",
            ],
            w = () => [
              "center",
              "top",
              "bottom",
              "left",
              "right",
              "top-left",
              "left-top",
              "top-right",
              "right-top",
              "bottom-right",
              "right-bottom",
              "bottom-left",
              "left-bottom",
            ],
            k = () => [...w(), eJ, eK],
            v = () => ["auto", "hidden", "clip", "visible", "scroll"],
            T = () => ["auto", "contain", "none"],
            B = () => [eJ, eK, l],
            I = () => [eM, "full", "auto", ...B()],
            C = () => [eD, "none", "subgrid", eJ, eK],
            A = () => ["auto", { span: ["full", eD, eJ, eK] }, eD, eJ, eK],
            S = () => [eD, "auto", eJ, eK],
            H = () => ["auto", "min", "max", "fr", eJ, eK],
            F = () => [
              "start",
              "end",
              "center",
              "between",
              "around",
              "evenly",
              "stretch",
              "baseline",
              "center-safe",
              "end-safe",
            ],
            E = () => [
              "start",
              "end",
              "center",
              "stretch",
              "center-safe",
              "end-safe",
            ],
            N = () => ["auto", ...B()],
            P = () => [
              eM,
              "auto",
              "full",
              "dvw",
              "dvh",
              "lvw",
              "lvh",
              "svw",
              "svh",
              "min",
              "max",
              "fit",
              ...B(),
            ],
            z = () => [e, eJ, eK],
            M = () => [...w(), e2, eY, { position: [eJ, eK] }],
            U = () => [
              "no-repeat",
              { repeat: ["", "x", "y", "space", "round"] },
            ],
            D = () => ["auto", "cover", "contain", e3, eV, { size: [eJ, eK] }],
            G = () => [eG, e0, eq],
            L = () => ["", "none", "full", c, eJ, eK],
            R = () => ["", eU, e0, eq],
            $ = () => ["solid", "dashed", "dotted", "double"],
            O = () => [
              "normal",
              "multiply",
              "screen",
              "overlay",
              "darken",
              "lighten",
              "color-dodge",
              "color-burn",
              "hard-light",
              "soft-light",
              "difference",
              "exclusion",
              "hue",
              "saturation",
              "color",
              "luminosity",
            ],
            W = () => [eU, eG, e2, eY],
            _ = () => ["", "none", b, eJ, eK],
            j = () => ["none", eU, eJ, eK],
            V = () => ["none", eU, eJ, eK],
            K = () => [eU, eJ, eK],
            q = () => [eM, "full", ...B()];
          return {
            cacheSize: 500,
            theme: {
              animate: ["spin", "ping", "pulse", "bounce"],
              aspect: ["video"],
              blur: [eL],
              breakpoint: [eL],
              color: [eR],
              container: [eL],
              "drop-shadow": [eL],
              ease: ["in", "out", "in-out"],
              font: [ej],
              "font-weight": [
                "thin",
                "extralight",
                "light",
                "normal",
                "medium",
                "semibold",
                "bold",
                "extrabold",
                "black",
              ],
              "inset-shadow": [eL],
              leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
              perspective: [
                "dramatic",
                "near",
                "normal",
                "midrange",
                "distant",
                "none",
              ],
              radius: [eL],
              shadow: [eL],
              spacing: ["px", eU],
              text: [eL],
              "text-shadow": [eL],
              tracking: [
                "tighter",
                "tight",
                "normal",
                "wide",
                "wider",
                "widest",
              ],
            },
            classGroups: {
              aspect: [{ aspect: ["auto", "square", eM, eK, eJ, g] }],
              container: ["container"],
              columns: [{ columns: [eU, eK, eJ, i] }],
              "break-after": [{ "break-after": y() }],
              "break-before": [{ "break-before": y() }],
              "break-inside": [
                {
                  "break-inside": [
                    "auto",
                    "avoid",
                    "avoid-page",
                    "avoid-column",
                  ],
                },
              ],
              "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
              box: [{ box: ["border", "content"] }],
              display: [
                "block",
                "inline-block",
                "inline",
                "flex",
                "inline-flex",
                "table",
                "inline-table",
                "table-caption",
                "table-cell",
                "table-column",
                "table-column-group",
                "table-footer-group",
                "table-header-group",
                "table-row-group",
                "table-row",
                "flow-root",
                "grid",
                "inline-grid",
                "contents",
                "list-item",
                "hidden",
              ],
              sr: ["sr-only", "not-sr-only"],
              float: [{ float: ["right", "left", "none", "start", "end"] }],
              clear: [
                { clear: ["left", "right", "both", "none", "start", "end"] },
              ],
              isolation: ["isolate", "isolation-auto"],
              "object-fit": [
                { object: ["contain", "cover", "fill", "none", "scale-down"] },
              ],
              "object-position": [{ object: k() }],
              overflow: [{ overflow: v() }],
              "overflow-x": [{ "overflow-x": v() }],
              "overflow-y": [{ "overflow-y": v() }],
              overscroll: [{ overscroll: T() }],
              "overscroll-x": [{ "overscroll-x": T() }],
              "overscroll-y": [{ "overscroll-y": T() }],
              position: ["static", "fixed", "absolute", "relative", "sticky"],
              inset: [{ inset: I() }],
              "inset-x": [{ "inset-x": I() }],
              "inset-y": [{ "inset-y": I() }],
              start: [{ start: I() }],
              end: [{ end: I() }],
              top: [{ top: I() }],
              right: [{ right: I() }],
              bottom: [{ bottom: I() }],
              left: [{ left: I() }],
              visibility: ["visible", "invisible", "collapse"],
              z: [{ z: [eD, "auto", eJ, eK] }],
              basis: [{ basis: [eM, "full", "auto", i, ...B()] }],
              "flex-direction": [
                { flex: ["row", "row-reverse", "col", "col-reverse"] },
              ],
              "flex-wrap": [{ flex: ["nowrap", "wrap", "wrap-reverse"] }],
              flex: [{ flex: [eU, eM, "auto", "initial", "none", eK] }],
              grow: [{ grow: ["", eU, eJ, eK] }],
              shrink: [{ shrink: ["", eU, eJ, eK] }],
              order: [{ order: [eD, "first", "last", "none", eJ, eK] }],
              "grid-cols": [{ "grid-cols": C() }],
              "col-start-end": [{ col: A() }],
              "col-start": [{ "col-start": S() }],
              "col-end": [{ "col-end": S() }],
              "grid-rows": [{ "grid-rows": C() }],
              "row-start-end": [{ row: A() }],
              "row-start": [{ "row-start": S() }],
              "row-end": [{ "row-end": S() }],
              "grid-flow": [
                {
                  "grid-flow": [
                    "row",
                    "col",
                    "dense",
                    "row-dense",
                    "col-dense",
                  ],
                },
              ],
              "auto-cols": [{ "auto-cols": H() }],
              "auto-rows": [{ "auto-rows": H() }],
              gap: [{ gap: B() }],
              "gap-x": [{ "gap-x": B() }],
              "gap-y": [{ "gap-y": B() }],
              "justify-content": [{ justify: [...F(), "normal"] }],
              "justify-items": [{ "justify-items": [...E(), "normal"] }],
              "justify-self": [{ "justify-self": ["auto", ...E()] }],
              "align-content": [{ content: ["normal", ...F()] }],
              "align-items": [{ items: [...E(), { baseline: ["", "last"] }] }],
              "align-self": [
                { self: ["auto", ...E(), { baseline: ["", "last"] }] },
              ],
              "place-content": [{ "place-content": F() }],
              "place-items": [{ "place-items": [...E(), "baseline"] }],
              "place-self": [{ "place-self": ["auto", ...E()] }],
              p: [{ p: B() }],
              px: [{ px: B() }],
              py: [{ py: B() }],
              ps: [{ ps: B() }],
              pe: [{ pe: B() }],
              pt: [{ pt: B() }],
              pr: [{ pr: B() }],
              pb: [{ pb: B() }],
              pl: [{ pl: B() }],
              m: [{ m: N() }],
              mx: [{ mx: N() }],
              my: [{ my: N() }],
              ms: [{ ms: N() }],
              me: [{ me: N() }],
              mt: [{ mt: N() }],
              mr: [{ mr: N() }],
              mb: [{ mb: N() }],
              ml: [{ ml: N() }],
              "space-x": [{ "space-x": B() }],
              "space-x-reverse": ["space-x-reverse"],
              "space-y": [{ "space-y": B() }],
              "space-y-reverse": ["space-y-reverse"],
              size: [{ size: P() }],
              w: [{ w: [i, "screen", ...P()] }],
              "min-w": [{ "min-w": [i, "screen", "none", ...P()] }],
              "max-w": [
                {
                  "max-w": [
                    i,
                    "screen",
                    "none",
                    "prose",
                    { screen: [s] },
                    ...P(),
                  ],
                },
              ],
              h: [{ h: ["screen", "lh", ...P()] }],
              "min-h": [{ "min-h": ["screen", "lh", "none", ...P()] }],
              "max-h": [{ "max-h": ["screen", "lh", ...P()] }],
              "font-size": [{ text: ["base", t, e0, eq] }],
              "font-smoothing": ["antialiased", "subpixel-antialiased"],
              "font-style": ["italic", "not-italic"],
              "font-weight": [{ font: [o, eJ, eQ] }],
              "font-stretch": [
                {
                  "font-stretch": [
                    "ultra-condensed",
                    "extra-condensed",
                    "condensed",
                    "semi-condensed",
                    "normal",
                    "semi-expanded",
                    "expanded",
                    "extra-expanded",
                    "ultra-expanded",
                    eG,
                    eK,
                  ],
                },
              ],
              "font-family": [{ font: [e1, eK, r] }],
              "fvn-normal": ["normal-nums"],
              "fvn-ordinal": ["ordinal"],
              "fvn-slashed-zero": ["slashed-zero"],
              "fvn-figure": ["lining-nums", "oldstyle-nums"],
              "fvn-spacing": ["proportional-nums", "tabular-nums"],
              "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
              tracking: [{ tracking: [a, eJ, eK] }],
              "line-clamp": [{ "line-clamp": [eU, "none", eJ, eQ] }],
              leading: [{ leading: [n, ...B()] }],
              "list-image": [{ "list-image": ["none", eJ, eK] }],
              "list-style-position": [{ list: ["inside", "outside"] }],
              "list-style-type": [
                { list: ["disc", "decimal", "none", eJ, eK] },
              ],
              "text-alignment": [
                {
                  text: ["left", "center", "right", "justify", "start", "end"],
                },
              ],
              "placeholder-color": [{ placeholder: z() }],
              "text-color": [{ text: z() }],
              "text-decoration": [
                "underline",
                "overline",
                "line-through",
                "no-underline",
              ],
              "text-decoration-style": [{ decoration: [...$(), "wavy"] }],
              "text-decoration-thickness": [
                { decoration: [eU, "from-font", "auto", eJ, eq] },
              ],
              "text-decoration-color": [{ decoration: z() }],
              "underline-offset": [
                { "underline-offset": [eU, "auto", eJ, eK] },
              ],
              "text-transform": [
                "uppercase",
                "lowercase",
                "capitalize",
                "normal-case",
              ],
              "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
              "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
              indent: [{ indent: B() }],
              "vertical-align": [
                {
                  align: [
                    "baseline",
                    "top",
                    "middle",
                    "bottom",
                    "text-top",
                    "text-bottom",
                    "sub",
                    "super",
                    eJ,
                    eK,
                  ],
                },
              ],
              whitespace: [
                {
                  whitespace: [
                    "normal",
                    "nowrap",
                    "pre",
                    "pre-line",
                    "pre-wrap",
                    "break-spaces",
                  ],
                },
              ],
              break: [{ break: ["normal", "words", "all", "keep"] }],
              wrap: [{ wrap: ["break-word", "anywhere", "normal"] }],
              hyphens: [{ hyphens: ["none", "manual", "auto"] }],
              content: [{ content: ["none", eJ, eK] }],
              "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
              "bg-clip": [
                { "bg-clip": ["border", "padding", "content", "text"] },
              ],
              "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
              "bg-position": [{ bg: M() }],
              "bg-repeat": [{ bg: U() }],
              "bg-size": [{ bg: D() }],
              "bg-image": [
                {
                  bg: [
                    "none",
                    {
                      linear: [
                        { to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
                        eD,
                        eJ,
                        eK,
                      ],
                      radial: ["", eJ, eK],
                      conic: [eD, eJ, eK],
                    },
                    e7,
                    eZ,
                  ],
                },
              ],
              "bg-color": [{ bg: z() }],
              "gradient-from-pos": [{ from: G() }],
              "gradient-via-pos": [{ via: G() }],
              "gradient-to-pos": [{ to: G() }],
              "gradient-from": [{ from: z() }],
              "gradient-via": [{ via: z() }],
              "gradient-to": [{ to: z() }],
              rounded: [{ rounded: L() }],
              "rounded-s": [{ "rounded-s": L() }],
              "rounded-e": [{ "rounded-e": L() }],
              "rounded-t": [{ "rounded-t": L() }],
              "rounded-r": [{ "rounded-r": L() }],
              "rounded-b": [{ "rounded-b": L() }],
              "rounded-l": [{ "rounded-l": L() }],
              "rounded-ss": [{ "rounded-ss": L() }],
              "rounded-se": [{ "rounded-se": L() }],
              "rounded-ee": [{ "rounded-ee": L() }],
              "rounded-es": [{ "rounded-es": L() }],
              "rounded-tl": [{ "rounded-tl": L() }],
              "rounded-tr": [{ "rounded-tr": L() }],
              "rounded-br": [{ "rounded-br": L() }],
              "rounded-bl": [{ "rounded-bl": L() }],
              "border-w": [{ border: R() }],
              "border-w-x": [{ "border-x": R() }],
              "border-w-y": [{ "border-y": R() }],
              "border-w-s": [{ "border-s": R() }],
              "border-w-e": [{ "border-e": R() }],
              "border-w-t": [{ "border-t": R() }],
              "border-w-r": [{ "border-r": R() }],
              "border-w-b": [{ "border-b": R() }],
              "border-w-l": [{ "border-l": R() }],
              "divide-x": [{ "divide-x": R() }],
              "divide-x-reverse": ["divide-x-reverse"],
              "divide-y": [{ "divide-y": R() }],
              "divide-y-reverse": ["divide-y-reverse"],
              "border-style": [{ border: [...$(), "hidden", "none"] }],
              "divide-style": [{ divide: [...$(), "hidden", "none"] }],
              "border-color": [{ border: z() }],
              "border-color-x": [{ "border-x": z() }],
              "border-color-y": [{ "border-y": z() }],
              "border-color-s": [{ "border-s": z() }],
              "border-color-e": [{ "border-e": z() }],
              "border-color-t": [{ "border-t": z() }],
              "border-color-r": [{ "border-r": z() }],
              "border-color-b": [{ "border-b": z() }],
              "border-color-l": [{ "border-l": z() }],
              "divide-color": [{ divide: z() }],
              "outline-style": [{ outline: [...$(), "none", "hidden"] }],
              "outline-offset": [{ "outline-offset": [eU, eJ, eK] }],
              "outline-w": [{ outline: ["", eU, e0, eq] }],
              "outline-color": [{ outline: z() }],
              shadow: [{ shadow: ["", "none", d, e6, eX] }],
              "shadow-color": [{ shadow: z() }],
              "inset-shadow": [{ "inset-shadow": ["none", u, e6, eX] }],
              "inset-shadow-color": [{ "inset-shadow": z() }],
              "ring-w": [{ ring: R() }],
              "ring-w-inset": ["ring-inset"],
              "ring-color": [{ ring: z() }],
              "ring-offset-w": [{ "ring-offset": [eU, eq] }],
              "ring-offset-color": [{ "ring-offset": z() }],
              "inset-ring-w": [{ "inset-ring": R() }],
              "inset-ring-color": [{ "inset-ring": z() }],
              "text-shadow": [{ "text-shadow": ["none", m, e6, eX] }],
              "text-shadow-color": [{ "text-shadow": z() }],
              opacity: [{ opacity: [eU, eJ, eK] }],
              "mix-blend": [
                { "mix-blend": [...O(), "plus-darker", "plus-lighter"] },
              ],
              "bg-blend": [{ "bg-blend": O() }],
              "mask-clip": [
                {
                  "mask-clip": [
                    "border",
                    "padding",
                    "content",
                    "fill",
                    "stroke",
                    "view",
                  ],
                },
                "mask-no-clip",
              ],
              "mask-composite": [
                { mask: ["add", "subtract", "intersect", "exclude"] },
              ],
              "mask-image-linear-pos": [{ "mask-linear": [eU] }],
              "mask-image-linear-from-pos": [{ "mask-linear-from": W() }],
              "mask-image-linear-to-pos": [{ "mask-linear-to": W() }],
              "mask-image-linear-from-color": [{ "mask-linear-from": z() }],
              "mask-image-linear-to-color": [{ "mask-linear-to": z() }],
              "mask-image-t-from-pos": [{ "mask-t-from": W() }],
              "mask-image-t-to-pos": [{ "mask-t-to": W() }],
              "mask-image-t-from-color": [{ "mask-t-from": z() }],
              "mask-image-t-to-color": [{ "mask-t-to": z() }],
              "mask-image-r-from-pos": [{ "mask-r-from": W() }],
              "mask-image-r-to-pos": [{ "mask-r-to": W() }],
              "mask-image-r-from-color": [{ "mask-r-from": z() }],
              "mask-image-r-to-color": [{ "mask-r-to": z() }],
              "mask-image-b-from-pos": [{ "mask-b-from": W() }],
              "mask-image-b-to-pos": [{ "mask-b-to": W() }],
              "mask-image-b-from-color": [{ "mask-b-from": z() }],
              "mask-image-b-to-color": [{ "mask-b-to": z() }],
              "mask-image-l-from-pos": [{ "mask-l-from": W() }],
              "mask-image-l-to-pos": [{ "mask-l-to": W() }],
              "mask-image-l-from-color": [{ "mask-l-from": z() }],
              "mask-image-l-to-color": [{ "mask-l-to": z() }],
              "mask-image-x-from-pos": [{ "mask-x-from": W() }],
              "mask-image-x-to-pos": [{ "mask-x-to": W() }],
              "mask-image-x-from-color": [{ "mask-x-from": z() }],
              "mask-image-x-to-color": [{ "mask-x-to": z() }],
              "mask-image-y-from-pos": [{ "mask-y-from": W() }],
              "mask-image-y-to-pos": [{ "mask-y-to": W() }],
              "mask-image-y-from-color": [{ "mask-y-from": z() }],
              "mask-image-y-to-color": [{ "mask-y-to": z() }],
              "mask-image-radial": [{ "mask-radial": [eJ, eK] }],
              "mask-image-radial-from-pos": [{ "mask-radial-from": W() }],
              "mask-image-radial-to-pos": [{ "mask-radial-to": W() }],
              "mask-image-radial-from-color": [{ "mask-radial-from": z() }],
              "mask-image-radial-to-color": [{ "mask-radial-to": z() }],
              "mask-image-radial-shape": [
                { "mask-radial": ["circle", "ellipse"] },
              ],
              "mask-image-radial-size": [
                {
                  "mask-radial": [
                    {
                      closest: ["side", "corner"],
                      farthest: ["side", "corner"],
                    },
                  ],
                },
              ],
              "mask-image-radial-pos": [{ "mask-radial-at": w() }],
              "mask-image-conic-pos": [{ "mask-conic": [eU] }],
              "mask-image-conic-from-pos": [{ "mask-conic-from": W() }],
              "mask-image-conic-to-pos": [{ "mask-conic-to": W() }],
              "mask-image-conic-from-color": [{ "mask-conic-from": z() }],
              "mask-image-conic-to-color": [{ "mask-conic-to": z() }],
              "mask-mode": [{ mask: ["alpha", "luminance", "match"] }],
              "mask-origin": [
                {
                  "mask-origin": [
                    "border",
                    "padding",
                    "content",
                    "fill",
                    "stroke",
                    "view",
                  ],
                },
              ],
              "mask-position": [{ mask: M() }],
              "mask-repeat": [{ mask: U() }],
              "mask-size": [{ mask: D() }],
              "mask-type": [{ "mask-type": ["alpha", "luminance"] }],
              "mask-image": [{ mask: ["none", eJ, eK] }],
              filter: [{ filter: ["", "none", eJ, eK] }],
              blur: [{ blur: _() }],
              brightness: [{ brightness: [eU, eJ, eK] }],
              contrast: [{ contrast: [eU, eJ, eK] }],
              "drop-shadow": [{ "drop-shadow": ["", "none", p, e6, eX] }],
              "drop-shadow-color": [{ "drop-shadow": z() }],
              grayscale: [{ grayscale: ["", eU, eJ, eK] }],
              "hue-rotate": [{ "hue-rotate": [eU, eJ, eK] }],
              invert: [{ invert: ["", eU, eJ, eK] }],
              saturate: [{ saturate: [eU, eJ, eK] }],
              sepia: [{ sepia: ["", eU, eJ, eK] }],
              "backdrop-filter": [{ "backdrop-filter": ["", "none", eJ, eK] }],
              "backdrop-blur": [{ "backdrop-blur": _() }],
              "backdrop-brightness": [{ "backdrop-brightness": [eU, eJ, eK] }],
              "backdrop-contrast": [{ "backdrop-contrast": [eU, eJ, eK] }],
              "backdrop-grayscale": [
                { "backdrop-grayscale": ["", eU, eJ, eK] },
              ],
              "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [eU, eJ, eK] }],
              "backdrop-invert": [{ "backdrop-invert": ["", eU, eJ, eK] }],
              "backdrop-opacity": [{ "backdrop-opacity": [eU, eJ, eK] }],
              "backdrop-saturate": [{ "backdrop-saturate": [eU, eJ, eK] }],
              "backdrop-sepia": [{ "backdrop-sepia": ["", eU, eJ, eK] }],
              "border-collapse": [{ border: ["collapse", "separate"] }],
              "border-spacing": [{ "border-spacing": B() }],
              "border-spacing-x": [{ "border-spacing-x": B() }],
              "border-spacing-y": [{ "border-spacing-y": B() }],
              "table-layout": [{ table: ["auto", "fixed"] }],
              caption: [{ caption: ["top", "bottom"] }],
              transition: [
                {
                  transition: [
                    "",
                    "all",
                    "colors",
                    "opacity",
                    "shadow",
                    "transform",
                    "none",
                    eJ,
                    eK,
                  ],
                },
              ],
              "transition-behavior": [{ transition: ["normal", "discrete"] }],
              duration: [{ duration: [eU, "initial", eJ, eK] }],
              ease: [{ ease: ["linear", "initial", f, eJ, eK] }],
              delay: [{ delay: [eU, eJ, eK] }],
              animate: [{ animate: ["none", x, eJ, eK] }],
              backface: [{ backface: ["hidden", "visible"] }],
              perspective: [{ perspective: [h, eJ, eK] }],
              "perspective-origin": [{ "perspective-origin": k() }],
              rotate: [{ rotate: j() }],
              "rotate-x": [{ "rotate-x": j() }],
              "rotate-y": [{ "rotate-y": j() }],
              "rotate-z": [{ "rotate-z": j() }],
              scale: [{ scale: V() }],
              "scale-x": [{ "scale-x": V() }],
              "scale-y": [{ "scale-y": V() }],
              "scale-z": [{ "scale-z": V() }],
              "scale-3d": ["scale-3d"],
              skew: [{ skew: K() }],
              "skew-x": [{ "skew-x": K() }],
              "skew-y": [{ "skew-y": K() }],
              transform: [{ transform: [eJ, eK, "", "none", "gpu", "cpu"] }],
              "transform-origin": [{ origin: k() }],
              "transform-style": [{ transform: ["3d", "flat"] }],
              translate: [{ translate: q() }],
              "translate-x": [{ "translate-x": q() }],
              "translate-y": [{ "translate-y": q() }],
              "translate-z": [{ "translate-z": q() }],
              "translate-none": ["translate-none"],
              accent: [{ accent: z() }],
              appearance: [{ appearance: ["none", "auto"] }],
              "caret-color": [{ caret: z() }],
              "color-scheme": [
                {
                  scheme: [
                    "normal",
                    "dark",
                    "light",
                    "light-dark",
                    "only-dark",
                    "only-light",
                  ],
                },
              ],
              cursor: [
                {
                  cursor: [
                    "auto",
                    "default",
                    "pointer",
                    "wait",
                    "text",
                    "move",
                    "help",
                    "not-allowed",
                    "none",
                    "context-menu",
                    "progress",
                    "cell",
                    "crosshair",
                    "vertical-text",
                    "alias",
                    "copy",
                    "no-drop",
                    "grab",
                    "grabbing",
                    "all-scroll",
                    "col-resize",
                    "row-resize",
                    "n-resize",
                    "e-resize",
                    "s-resize",
                    "w-resize",
                    "ne-resize",
                    "nw-resize",
                    "se-resize",
                    "sw-resize",
                    "ew-resize",
                    "ns-resize",
                    "nesw-resize",
                    "nwse-resize",
                    "zoom-in",
                    "zoom-out",
                    eJ,
                    eK,
                  ],
                },
              ],
              "field-sizing": [{ "field-sizing": ["fixed", "content"] }],
              "pointer-events": [{ "pointer-events": ["auto", "none"] }],
              resize: [{ resize: ["none", "", "y", "x"] }],
              "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
              "scroll-m": [{ "scroll-m": B() }],
              "scroll-mx": [{ "scroll-mx": B() }],
              "scroll-my": [{ "scroll-my": B() }],
              "scroll-ms": [{ "scroll-ms": B() }],
              "scroll-me": [{ "scroll-me": B() }],
              "scroll-mt": [{ "scroll-mt": B() }],
              "scroll-mr": [{ "scroll-mr": B() }],
              "scroll-mb": [{ "scroll-mb": B() }],
              "scroll-ml": [{ "scroll-ml": B() }],
              "scroll-p": [{ "scroll-p": B() }],
              "scroll-px": [{ "scroll-px": B() }],
              "scroll-py": [{ "scroll-py": B() }],
              "scroll-ps": [{ "scroll-ps": B() }],
              "scroll-pe": [{ "scroll-pe": B() }],
              "scroll-pt": [{ "scroll-pt": B() }],
              "scroll-pr": [{ "scroll-pr": B() }],
              "scroll-pb": [{ "scroll-pb": B() }],
              "scroll-pl": [{ "scroll-pl": B() }],
              "snap-align": [
                { snap: ["start", "end", "center", "align-none"] },
              ],
              "snap-stop": [{ snap: ["normal", "always"] }],
              "snap-type": [{ snap: ["none", "x", "y", "both"] }],
              "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
              touch: [{ touch: ["auto", "none", "manipulation"] }],
              "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
              "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
              "touch-pz": ["touch-pinch-zoom"],
              select: [{ select: ["none", "text", "all", "auto"] }],
              "will-change": [
                {
                  "will-change": [
                    "auto",
                    "scroll",
                    "contents",
                    "transform",
                    eJ,
                    eK,
                  ],
                },
              ],
              fill: [{ fill: ["none", ...z()] }],
              "stroke-w": [{ stroke: [eU, e0, eq, eQ] }],
              stroke: [{ stroke: ["none", ...z()] }],
              "forced-color-adjust": [
                { "forced-color-adjust": ["auto", "none"] },
              ],
            },
            conflictingClassGroups: {
              overflow: ["overflow-x", "overflow-y"],
              overscroll: ["overscroll-x", "overscroll-y"],
              inset: [
                "inset-x",
                "inset-y",
                "start",
                "end",
                "top",
                "right",
                "bottom",
                "left",
              ],
              "inset-x": ["right", "left"],
              "inset-y": ["top", "bottom"],
              flex: ["basis", "grow", "shrink"],
              gap: ["gap-x", "gap-y"],
              p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
              px: ["pr", "pl"],
              py: ["pt", "pb"],
              m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
              mx: ["mr", "ml"],
              my: ["mt", "mb"],
              size: ["w", "h"],
              "font-size": ["leading"],
              "fvn-normal": [
                "fvn-ordinal",
                "fvn-slashed-zero",
                "fvn-figure",
                "fvn-spacing",
                "fvn-fraction",
              ],
              "fvn-ordinal": ["fvn-normal"],
              "fvn-slashed-zero": ["fvn-normal"],
              "fvn-figure": ["fvn-normal"],
              "fvn-spacing": ["fvn-normal"],
              "fvn-fraction": ["fvn-normal"],
              "line-clamp": ["display", "overflow"],
              rounded: [
                "rounded-s",
                "rounded-e",
                "rounded-t",
                "rounded-r",
                "rounded-b",
                "rounded-l",
                "rounded-ss",
                "rounded-se",
                "rounded-ee",
                "rounded-es",
                "rounded-tl",
                "rounded-tr",
                "rounded-br",
                "rounded-bl",
              ],
              "rounded-s": ["rounded-ss", "rounded-es"],
              "rounded-e": ["rounded-se", "rounded-ee"],
              "rounded-t": ["rounded-tl", "rounded-tr"],
              "rounded-r": ["rounded-tr", "rounded-br"],
              "rounded-b": ["rounded-br", "rounded-bl"],
              "rounded-l": ["rounded-tl", "rounded-bl"],
              "border-spacing": ["border-spacing-x", "border-spacing-y"],
              "border-w": [
                "border-w-x",
                "border-w-y",
                "border-w-s",
                "border-w-e",
                "border-w-t",
                "border-w-r",
                "border-w-b",
                "border-w-l",
              ],
              "border-w-x": ["border-w-r", "border-w-l"],
              "border-w-y": ["border-w-t", "border-w-b"],
              "border-color": [
                "border-color-x",
                "border-color-y",
                "border-color-s",
                "border-color-e",
                "border-color-t",
                "border-color-r",
                "border-color-b",
                "border-color-l",
              ],
              "border-color-x": ["border-color-r", "border-color-l"],
              "border-color-y": ["border-color-t", "border-color-b"],
              translate: ["translate-x", "translate-y", "translate-none"],
              "translate-none": [
                "translate",
                "translate-x",
                "translate-y",
                "translate-z",
              ],
              "scroll-m": [
                "scroll-mx",
                "scroll-my",
                "scroll-ms",
                "scroll-me",
                "scroll-mt",
                "scroll-mr",
                "scroll-mb",
                "scroll-ml",
              ],
              "scroll-mx": ["scroll-mr", "scroll-ml"],
              "scroll-my": ["scroll-mt", "scroll-mb"],
              "scroll-p": [
                "scroll-px",
                "scroll-py",
                "scroll-ps",
                "scroll-pe",
                "scroll-pt",
                "scroll-pr",
                "scroll-pb",
                "scroll-pl",
              ],
              "scroll-px": ["scroll-pr", "scroll-pl"],
              "scroll-py": ["scroll-pt", "scroll-pb"],
              touch: ["touch-x", "touch-y", "touch-pz"],
              "touch-x": ["touch"],
              "touch-y": ["touch"],
              "touch-pz": ["touch"],
            },
            conflictingClassGroupModifiers: { "font-size": ["leading"] },
            orderSensitiveModifiers: [
              "*",
              "**",
              "after",
              "backdrop",
              "before",
              "details-content",
              "file",
              "first-letter",
              "first-line",
              "marker",
              "placeholder",
              "selection",
            ],
          };
        }),
        (n = (e) => {
          let a = t(e);
          if (a) return a;
          let n = ((e, r) => {
            let {
                parseClassName: t,
                getClassGroupId: o,
                getConflictingClassGroupIds: a,
                sortModifiers: n,
              } = r,
              s = [],
              i = e.trim().split(eT),
              l = "";
            for (let e = i.length - 1; e >= 0; e -= 1) {
              let r = i[e],
                {
                  isExternal: c,
                  modifiers: d,
                  hasImportantModifier: u,
                  baseClassName: m,
                  maybePostfixModifierPosition: p,
                } = t(r);
              if (c) {
                l = r + (l.length > 0 ? " " + l : l);
                continue;
              }
              let b = !!p,
                h = o(b ? m.substring(0, p) : m);
              if (!h) {
                if (!b || !(h = o(m))) {
                  l = r + (l.length > 0 ? " " + l : l);
                  continue;
                }
                b = !1;
              }
              let g =
                  0 === d.length ? "" : 1 === d.length ? d[0] : n(d).join(":"),
                f = u ? g + "!" : g,
                x = f + h;
              if (s.indexOf(x) > -1) continue;
              s.push(x);
              let y = a(h, b);
              for (let e = 0; e < y.length; ++e) {
                let r = y[e];
                s.push(f + r);
              }
              l = r + (l.length > 0 ? " " + l : l);
            }
            return l;
          })(e, r);
          return o(e, n), n;
        }),
        (a = (e) => {
          var i;
          let l;
          return (
            (t = (r = {
              cache: ((e) => {
                if (e < 1) return { get: () => void 0, set: () => {} };
                let r = 0,
                  t = Object.create(null),
                  o = Object.create(null),
                  a = (a, n) => {
                    (t[a] = n),
                      ++r > e && ((r = 0), (o = t), (t = Object.create(null)));
                  };
                return {
                  get(e) {
                    let r = t[e];
                    return void 0 !== r
                      ? r
                      : void 0 !== (r = o[e])
                      ? (a(e, r), r)
                      : void 0;
                  },
                  set(e, r) {
                    e in t ? (t[e] = r) : a(e, r);
                  },
                };
              })((i = [].reduce((e, r) => r(e), s())).cacheSize),
              parseClassName: ((e) => {
                let { prefix: r, experimentalParseClassName: t } = e,
                  o = (e) => {
                    let r,
                      t = [],
                      o = 0,
                      a = 0,
                      n = 0,
                      s = e.length;
                    for (let i = 0; i < s; i++) {
                      let s = e[i];
                      if (0 === o && 0 === a) {
                        if (":" === s) {
                          t.push(e.slice(n, i)), (n = i + 1);
                          continue;
                        }
                        if ("/" === s) {
                          r = i;
                          continue;
                        }
                      }
                      "[" === s
                        ? o++
                        : "]" === s
                        ? o--
                        : "(" === s
                        ? a++
                        : ")" === s && a--;
                    }
                    let i = 0 === t.length ? e : e.slice(n),
                      l = i,
                      c = !1;
                    return (
                      i.endsWith("!")
                        ? ((l = i.slice(0, -1)), (c = !0))
                        : i.startsWith("!") && ((l = i.slice(1)), (c = !0)),
                      ev(t, c, l, r && r > n ? r - n : void 0)
                    );
                  };
                if (r) {
                  let e = r + ":",
                    t = o;
                  o = (r) =>
                    r.startsWith(e)
                      ? t(r.slice(e.length))
                      : ev(ek, !1, r, void 0, !0);
                }
                if (t) {
                  let e = o;
                  o = (r) => t({ className: r, parseClassName: e });
                }
                return o;
              })(i),
              sortModifiers:
                ((l = new Map()),
                i.orderSensitiveModifiers.forEach((e, r) => {
                  l.set(e, 1e6 + r);
                }),
                (e) => {
                  let r = [],
                    t = [];
                  for (let o = 0; o < e.length; o++) {
                    let a = e[o],
                      n = "[" === a[0],
                      s = l.has(a);
                    n || s
                      ? (t.length > 0 && (t.sort(), r.push(...t), (t = [])),
                        r.push(a))
                      : t.push(a);
                  }
                  return t.length > 0 && (t.sort(), r.push(...t)), r;
                }),
              ...((e) => {
                let r = ((e) => {
                    let { theme: r, classGroups: t } = e;
                    return ep(t, r);
                  })(e),
                  {
                    conflictingClassGroups: t,
                    conflictingClassGroupModifiers: o,
                  } = e;
                return {
                  getClassGroupId: (e) => {
                    if (e.startsWith("[") && e.endsWith("]")) {
                      var t;
                      let r, o, a;
                      return -1 === (t = e).slice(1, -1).indexOf(":")
                        ? void 0
                        : ((o = (r = t.slice(1, -1)).indexOf(":")),
                          (a = r.slice(0, o)) ? "arbitrary.." + a : void 0);
                    }
                    let o = e.split("-"),
                      a = +("" === o[0] && o.length > 1);
                    return em(o, a, r);
                  },
                  getConflictingClassGroupIds: (e, r) => {
                    if (r) {
                      let r = o[e],
                        a = t[e];
                      if (r) {
                        if (a) {
                          let e = Array(a.length + r.length);
                          for (let r = 0; r < a.length; r++) e[r] = a[r];
                          for (let t = 0; t < r.length; t++)
                            e[a.length + t] = r[t];
                          return e;
                        }
                        return r;
                      }
                      return a || eu;
                    }
                    return t[e] || eu;
                  },
                };
              })(i),
            }).cache.get),
            (o = r.cache.set),
            (a = n),
            n(e)
          );
        }),
        (...e) =>
          a(
            ((...e) => {
              let r,
                t,
                o = 0,
                a = "";
              for (; o < e.length; )
                (r = e[o++]) && (t = eB(r)) && (a && (a += " "), (a += t));
              return a;
            })(...e)
          )),
      rs = {
        src: e.i(723479).default,
        width: 40,
        height: 40,
        blurWidth: 8,
        blurHeight: 8,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA1UlEQVR42kWPywpBYRSF/zBxy8wbMFReQEaGilIm8gRyKwPGRF7BnCcQSScxOrlk4HJyeQAGp06/3ylp+fc5ZPDVbq3d2mszl5M5UjFXXO15pvokKAg5K6SRx2jQBv6TMY/APLdgXjowFlGQRh5Te26FrzMQh8qXKsS+hMcmC0pl+sgruJrA89zEm2sWppxJI89aELsCxLGG122I130sE8qSor1AMXyZhHnt4qnVJQ3Zow2+StMJxS7Z952MWQiPbU6ShzELgzSr5P9Nt6KPA4Kg1N+bHwphnqhTfq2XAAAAAElFTkSuQmCC",
      };
    var ri = e.i(626603),
      rl = e.i(782839),
      rc = e.i(725780);
    let rd = {
        src: e.i(262414).default,
        width: 40,
        height: 40,
        blurWidth: 0,
        blurHeight: 0,
      },
      ru = {
        src: e.i(734423).default,
        width: 40,
        height: 40,
        blurWidth: 0,
        blurHeight: 0,
      };
    var rm = e.i(856499);
    let rp = {
        src: e.i(380383).default,
        width: 40,
        height: 40,
        blurWidth: 0,
        blurHeight: 0,
      },
      rb = {
        src: e.i(837991).default,
        width: 40,
        height: 40,
        blurWidth: 0,
        blurHeight: 0,
      },
      rh = {
        src: e.i(808367).default,
        width: 40,
        height: 40,
        blurWidth: 0,
        blurHeight: 0,
      },
      rg = {
        src: e.i(547625).default,
        width: 40,
        height: 40,
        blurWidth: 0,
        blurHeight: 0,
      },
      rf = {
        src: e.i(624779).default,
        width: 48,
        height: 48,
        blurWidth: 0,
        blurHeight: 0,
      },
      rx = {
        src: e.i(845987).default,
        width: 256,
        height: 256,
        blurWidth: 8,
        blurHeight: 8,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAArUlEQVR42oWPuwrCQBBFF/wuCxH8Q0XB1s46xmCRIIpFRE2RYtcY0CIEbI15es2dYO3CwLD37MxZ1WvPoD8aWsudl+gyZ7HnHTPFxncjc/Nr3C8NnjGkjl5kmCnS51WJzTyDM82g9zVS/RGImUp0kW8Xb4RuhcApYY9fcGYdyEyA66GWCfYkEyj0KvCRABzDcakBTAuup92qk1V0KyhCoZ/cI2gQt8IUF8l/3/wCyLa7xd7/udQAAAAASUVORK5CYII=",
      };
    var ry = e.i(674528);
    let rw = {
      src: e.i(536702).default,
      width: 40,
      height: 40,
      blurWidth: 0,
      blurHeight: 0,
    };
    var rk = e.i(109078),
      rv = e.i(265760);
    let rT = {
        src: e.i(752041).default,
        width: 276,
        height: 270,
        blurWidth: 0,
        blurHeight: 0,
      },
      rB = {
        src: e.i(56480).default,
        width: 300,
        height: 175,
        blurWidth: 0,
        blurHeight: 0,
      },
      rI = {
        src: e.i(113074).default,
        width: 300,
        height: 175,
        blurWidth: 0,
        blurHeight: 0,
      },
      rC = {
        src: e.i(587348).default,
        width: 300,
        height: 175,
        blurWidth: 0,
        blurHeight: 0,
      },
      rA = {
        src: e.i(836821).default,
        width: 300,
        height: 175,
        blurWidth: 0,
        blurHeight: 0,
      },
      rS = {
        src: e.i(254478).default,
        width: 300,
        height: 175,
        blurWidth: 0,
        blurHeight: 0,
      },
      rH = {
        src: e.i(731549).default,
        width: 138,
        height: 147,
        blurWidth: 0,
        blurHeight: 0,
      },
      rF = {
        src: e.i(786543).default,
        width: 135,
        height: 144,
        blurWidth: 0,
        blurHeight: 0,
      },
      rE = {
        src: e.i(772691).default,
        width: 135,
        height: 144,
        blurWidth: 0,
        blurHeight: 0,
      },
      rN = {
        src: e.i(306389).default,
        width: 135,
        height: 144,
        blurWidth: 0,
        blurHeight: 0,
      },
      rP = {
        src: e.i(25095).default,
        width: 135,
        height: 144,
        blurWidth: 0,
        blurHeight: 0,
      };
    function rz(e) {
      let r = ["₀", "₁", "₂", "₃", "₄", "₅", "₆", "₇", "₈", "₉"];
      return e
        .toString()
        .split("")
        .map((e) => r[parseInt(e)])
        .join("");
    }
    function rM(e) {
      let r = e.toString();
      if (r.includes("e-")) {
        let [e, t] = r.split("e-"),
          o = parseInt(t);
        if (o >= 5) {
          let r = parseFloat(e).toString().replace(".", "").substring(0, 4);
          return `0.0${rz(o - 2)}${r}`;
        }
        if (4 === o) {
          let r = parseFloat(e).toString().replace(".", "").substring(0, 4);
          return `0.000${r}`;
        }
      }
      if (r.includes(".") && r.split(".")[1]?.startsWith("000")) {
        let e = r.split(".")[1],
          t = e.match(/^0+/)?.[0].length || 0;
        if (t >= 4) {
          let r = e.substring(t, t + 4);
          return `0.0${rz(t)}${r}`;
        }
        if (3 === t) {
          let r = e.substring(3, 7);
          return `0.000${r}`;
        }
      }
      return e >= 1e3 ? e.toLocaleString() : r;
    }
    function rU(e) {
      let r = 100 * e;
      return r < 0.01
        ? r.toFixed(3)
        : r < 1
        ? r.toFixed(4)
        : r < 10
        ? r.toFixed(2)
        : r.toFixed(0);
    }
    function rD(e) {
      return e >= 1e6
        ? `$${(e / 1e6).toFixed(1)}M`
        : e >= 1e3
        ? `$${(e / 1e3).toFixed(1)}K`
        : `$${e.toFixed(2)}`;
    }
    let rG = (e, r) => {
      let t = "string" == typeof e ? parseFloat(e) : e,
        o = r || 2,
        a = Math.abs(t);
      if (
        (a > 0 && a < 1 && (o = -Math.floor(Math.log10(a)) - 1 + 2),
        isNaN(t) || 0 === t)
      )
        return "0";
      if (t >= 1) {
        let e = Math.pow(10, o);
        return (Math.floor(t * e) / e).toLocaleString(void 0, {
          minimumFractionDigits: o,
          maximumFractionDigits: o,
        });
      }
      let n = t?.toString(),
        s = (e) => {
          let r = {
            0: "₀",
            1: "₁",
            2: "₂",
            3: "₃",
            4: "₄",
            5: "₅",
            6: "₆",
            7: "₇",
            8: "₈",
            9: "₉",
          };
          return e
            ?.toString()
            .split("")
            .map((e) => r[e])
            .join("");
        };
      if (n.includes("e")) {
        let [e, r] = n.toLowerCase().split("e"),
          o = parseInt(r);
        if (o >= 0) return t?.toString();
        let a = Math.abs(o) - 1;
        if (a >= 3) {
          let r = parseFloat(e),
            t = r?.toString().replace(".", "").substring(0, 4);
          return `0.0${s(a)}${t}`;
        }
      }
      let i = n.indexOf(".");
      if (-1 === i) return n;
      let l = n.substring(i + 1);
      if (l.length <= 4) return n;
      if (!l.startsWith("000")) return Number(n)?.toFixed(5);
      let c = 0;
      for (let e = 0; e < l.length; e++)
        if ("0" === l[e]) c++;
        else break;
      if (c >= 3) {
        let e = l.substring(c, c + 4);
        return `0.0${s(c)}${e}`;
      }
      return n;
    };
    function rL(...e) {
      return rn((0, ec.clsx)(e));
    }
    function rR(e) {
      if (!e) return 0;
      if (
        ("string" == typeof e && (e = Number(e)), e.toString().includes("e"))
      ) {
        let r = e.toString().split("-")[1];
        return e.toFixed(Number(r) + 2);
      }
      return e >= 2
        ? Math.floor(100 * e) / 100
        : e >= 1
        ? e.toPrecision(4)
        : e > 0.01
        ? parseFloat(e.toPrecision(3))
        : e > 0
        ? parseFloat(e.toPrecision(5))
        : e;
    }
    function r$(e, r = 4) {
      return !e || isNaN(e)
        ? "0"
        : Math.abs(e) >= 1
        ? Number(e.toFixed(r)).toString()
        : Number(e.toPrecision(6)).toString();
    }
    function rO(e) {
      return e > 0 && e < 1
        ? parseFloat(e.toFixed(6))
        : parseFloat(e.toFixed(2));
    }
    e.s(
      [
        "formatCompactZeroNotation",
        0,
        rG,
        "formatDecimalDigits",
        0,
        (e) => {
          let r = "string" == typeof e ? parseFloat(e) : e;
          return isNaN(r)
            ? "0"
            : r > 100
            ? r.toFixed(2)
            : r > 1
            ? r.toFixed(4)
            : r.toFixed(8);
        },
        "formatNumberWithSubscript",
        () => rM,
        "formatPercentage",
        () => rU,
        "formatVolume",
        () => rD,
        "getPricePrecision",
        0,
        (e) =>
          e && 0 !== e
            ? e > 1e3
              ? 2
              : e > 1
              ? 4
              : e > 0.1
              ? 6
              : e > 0.01
              ? 7
              : e > 0.001
              ? 8
              : Math.max(8, -Math.floor(Math.log10(e)) - 1 + 4)
            : 6,
        "handleNumberInput",
        0,
        (e) => {
          if ("" === e) return "";
          let r = e.replace(/[^0-9.]/g, ""),
            t = r.split(".");
          if (!(t.length > 2))
            return (
              (r = t[0] + (void 0 !== t[1] ? "." + t[1] : "")).startsWith(
                "."
              ) && (r = "0" + r),
              (r = r.includes(".")
                ? r.replace(/^0+(?=\d)/, "0")
                : r.replace(/^0+/, "") || "0")
            );
        },
      ],
      344873
    );
    let rW = (e, r = !0, t = 8) =>
        new Intl.NumberFormat("en-US", {
          style: r ? "currency" : "decimal",
          currency: "USD",
          maximumFractionDigits: t,
        }).format(e),
      r_ = ["UBTC", "UETH", "USOL", "UXPL", "UFART", "UPUMP", "UBONK"],
      rj = (e, r) => {
        if (void 0 !== r) return r;
        let t = Math.abs(e);
        if (t >= 100) return 2;
        let o = Math.round(100 * t) / 100;
        if (1e-10 > Math.abs(t - o)) return 2;
        if (t >= 10) return 3;
        if (t >= 1) return 4;
        if (t > 0) {
          let e = -Math.floor(Math.log10(t)) - 1;
          return e + (e > 3 ? 5 : 4);
        }
        return 2;
      };
    e.s(
      [
        "ANNOUNCEMENT_FINISHED_KEY",
        0,
        "announcementFinished",
        "ANNOUNCEMENT_STORAGE_KEY",
        0,
        "announcementVersion",
        "ANNOUNCEMENT_VERSION",
        0,
        "1.0.3",
        "RWAPERPS_SOCKET_IDENTIFIERS",
        0,
        { positions: "positions", publicTrades: "publicTrades" },
        "SOL_ADDRESS",
        0,
        "So11111111111111111111111111111111111111112",
        "STABLECOINS_CONFIG",
        0,
        ["USDH", "USDE"],
        "USDC_CHAIN_SYMBOLS",
        0,
        {
          solana: "solana",
          base: "base",
          bsc: "bsc",
          arbitrum: "arbitrum",
          hyperliquid: "hyperliquid",
          "hyperliquid-spot": "hyperliquid-spot",
        },
        "USDC_SOL_TOKEN_ADDRESS",
        0,
        "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
        "calculateLiquidationPrice",
        0,
        (e, r, t, o, a, n = 0, s = "cross") => {
          let i;
          if (e <= 0 || r <= 0 || o < 0) return "$0";
          if (!t || t <= 0) return null;
          if ("isolated" === s) {
            let n = ((t * e) / r - t * e * o) / t;
            i = a ? e - n : e + n;
          } else {
            let s = (n + (t * e) / r - t * e * o) / t;
            i = a ? e - s : e + s;
          }
          return rW(Math.max(0, Number(i.toPrecision(6))), !1);
        },
        "chainMapping",
        0,
        (e) => {
          switch (e) {
            case "base":
              return L;
            case "arbitrum":
              return R.arbitrum;
            case "bsc":
              return $;
            case "sonic":
              return O;
            case "berachain":
              return W;
            case "polygon":
              return _;
            case "monad":
              return ei;
            case "abstract":
              return es;
            case "robinhood":
              return el;
            default:
              return e;
          }
        },
        "checkIsMobile",
        0,
        (e = 768) => window.innerWidth <= e,
        "cn",
        () => rL,
        "convertIntl",
        0,
        rW,
        "convertIntlV2",
        0,
        (e, r = !1, t = !0, o) => {
          let a = Math.abs(e);
          if (r && a > 0 && a < 0.001) {
            let r = rG(a),
              o = e < 0 ? "-" : "";
            return `${o}${t ? "$" : ""}${r}`;
          }
          let n = rj(e, o);
          return new Intl.NumberFormat("en-US", {
            style: t ? "currency" : "decimal",
            currency: "USD",
            minimumFractionDigits: n,
            maximumFractionDigits: n,
          }).format(e);
        },
        "defaultChainIdForStocks",
        0,
        42161,
        "detectDevice",
        0,
        () => {
          let e = navigator.userAgent;
          return /Samsung|SM-|Galaxy/i.test(e)
            ? "Samsung"
            : /android/i.test(e)
            ? "Android"
            : /iPhone|iPad|iPod/i.test(e)
            ? "iOS"
            : "Unknown";
        },
        "exchangeSymbol",
        0,
        (e) => {
          switch (e) {
            case "usd":
            default:
              return "$";
            case "inr":
              return "₹";
            case "cny":
              return "¥";
            case "krw":
              return "₩";
            case "try":
              return "₺";
          }
        },
        "findUsdcBySymbol",
        0,
        (e, r) => {
          let t = e?.find((e) => e?.chain?.symbol === r);
          return t?.balance ? Number(t.balance) : 0;
        },
        "formatBigNumber",
        0,
        (e, r = "usd") => {
          if (!isNaN(e)) {
            let t = 2,
              o = Math.abs(e);
            if (
              (o > 0 && o < 1 && (t = -Math.floor(Math.log10(o)) - 1 + 2),
              "inr" === r)
            ) {
              if (Math.abs(e) >= 1e7) return (e / 1e7).toFixed(1) + " Cr";
              else if (Math.abs(e) >= 1e5) return (e / 1e5).toFixed(1) + " L";
              else if (Math.abs(e) >= 1e3) return (e / 1e3).toFixed(1) + "K";
            } else if (["usd", "krw", "try", "cny"].includes(r)) {
              if (Math.abs(e) >= 1e9) return (e / 1e9).toFixed(1) + "B";
              else if (Math.abs(e) >= 1e6) return (e / 1e6).toFixed(1) + "M";
              else if (Math.abs(e) >= 1e3) return (e / 1e3).toFixed(1) + "K";
            }
            return Number(e)?.toFixed(t);
          }
        },
        "formatIntlNumber",
        () => rO,
        "formatNumber",
        () => rR,
        "formatPrice",
        () => r$,
        "getCapsText",
        0,
        (e) => e?.replace(/[^A-Z]/g, ""),
        "getChainImage",
        0,
        (e) => {
          switch (e?.toLowerCase()) {
            case "solana":
            default:
              return i.default.src;
            case "arbitrum":
              return rl.default.src;
            case "base":
              return ri.default.src;
            case "bnb":
              return rs.src;
            case "sonic":
              return rc.default.src;
            case "berachain":
              return rd.src;
            case "polygon":
              return ry.default.src;
            case "monad":
              return rk.default.src;
            case "abstract":
              return rw.src;
            case "robinhood":
              return rv.default.src;
          }
        },
        "getDigitsCount",
        0,
        rj,
        "getDisplayName",
        0,
        (e) => (e && r_.includes(e) ? e.slice(1) : e),
        "getIconUri",
        0,
        (e, r = "perps") => {
          try {
            let t = "perps",
              o = r?.toLowerCase();
            if (
              ("spot" === o
                ? (t = "spot")
                : "crypto perps" === o || "cryptoperps" === o || "perps" === o
                ? (t = "perps")
                : ("raw perps" === o ||
                    "rwa perps" === o ||
                    "rwa-perps" === o ||
                    "rwaperps" === o) &&
                  (t = "rwa-perps"),
              e && "string" == typeof e && "" !== e.trim())
            )
              return `https://getrabbit.nyc3.cdn.digitaloceanspaces.com/${t}/${e.toLowerCase()}.png`;
            return "";
          } catch (e) {
            return console.log("Error in getIconUri:", e), "";
          }
        },
        "getInitials",
        0,
        (e) => {
          if (!e) return "";
          let r = e.includes(":") ? e.split(":").pop() : e,
            t = r.trim().split(/ +/);
          return t.length >= 2
            ? (t[0][0] + t[1][0]).toUpperCase()
            : r.trim()[0]?.toUpperCase() || "";
        },
        "getMarkDetails",
        0,
        (e, r) => {
          if ("ONCHAIN" === r)
            return {
              label: e?.isBuy ? "B" : "S",
              description: e?.isBuy ? "Buy Order" : "Sell Order",
              color: e?.isBuy ? "green" : "red",
            };
          let { isBuy: t, isOpen: o } = e;
          return t && o
            ? { label: "OL", description: "Open Long", color: "green" }
            : t && !o
            ? { label: "CL", description: "Close Long", color: "red" }
            : !t && o
            ? { label: "OS", description: "Open Short", color: "red" }
            : { label: "CS", description: "Close Short", color: "green" };
        },
        "getNamebySymbol",
        0,
        (e) => {
          switch (e) {
            case "solana":
              return "Solana";
            case "base":
              return "Base";
            case "bsc":
              return "Binanace Smart Chain";
            case "arbitrum":
              return "Arbitrum";
            case "sonic":
              return "Sonic";
            case "berachain":
              return "Berachain";
            case "polygon":
              return "Polygon";
            case "monad":
              return "Monad";
            case "abstract":
              return "Abstract";
            case "robinhood":
              return "Robinhood";
            default:
              return e;
          }
        },
        "getPassDetails",
        0,
        (e) => {
          switch (e) {
            case "1":
            default:
              return {
                level: 1,
                primaryColor: "text-orange-200",
                secondaryColor: "text-orange-100",
                gradient:
                  "bg-[linear-gradient(99deg,#E6A172_0.05%,#FFF_99.6%)]",
                rowGradient:
                  "bg-[linear-gradient(90deg,#000_0%,#22190F_54.37%,#000_100%)]",
                title: "Bronze",
                background: rB,
                badge: rH,
                nextTitle: "Silver",
              };
            case "2":
              return {
                level: 2,
                primaryColor: "text-neutral-200",
                secondaryColor: "text-neutral-200",
                gradient:
                  "bg-[linear-gradient(99deg,#CBCBCB_0.05%,#FFF_99.6%)]",
                rowGradient:
                  "bg-[linear-gradient(90deg,#000_0%,#262626_53.37%,#000_100%)]",
                title: "Silver",
                background: rI,
                badge: rF,
                nextTitle: "Gold",
              };
            case "3":
              return {
                level: 3,
                primaryColor: "text-yellow-100",
                secondaryColor: "text-yellow-100",
                gradient:
                  "bg-[linear-gradient(99deg,#FCDD72_0.05%,#FFF_99.6%)]",
                rowGradient:
                  "bg-[linear-gradient(90deg,#000_0%,#302818_53.37%,#000_100%)]",
                title: "Gold",
                background: rC,
                badge: rE,
                nextTitle: "Diamond",
              };
            case "4":
              return {
                level: 4,
                primaryColor: "text-cyan-100",
                secondaryColor: "text-cyan-100",
                gradient:
                  "bg-[linear-gradient(99deg,#B4F9FF_0.05%,#FFF_99.6%)]",
                rowGradient:
                  "bg-[linear-gradient(90deg,#000_0%,#0F2934_53.37%,#000_100%)]",
                title: "Diamond",
                background: rA,
                badge: rN,
                nextTitle: "Sapphire",
              };
            case "5":
              return {
                level: 5,
                primaryColor: "text-blue-300",
                secondaryColor: "text-blue-300",
                gradient:
                  "bg-[linear-gradient(99deg,#167DFF_0.05%,#FFF_99.6%)]",
                rowGradient:
                  "bg-[linear-gradient(90deg,#000_0%,#0C213A_53.37%,#000_100%)]",
                title: "Sapphire",
                background: rS,
                badge: rP,
                nextTitle: "end",
              };
          }
        },
        "getProfileLink",
        0,
        (e, r, t) =>
          t || (e && r && e.toLowerCase() === r.toLowerCase())
            ? "/profile"
            : e
            ? `/profile/${e}`
            : "#",
        "getProxyImage",
        0,
        (e) =>
          !e || e.includes("images.weserv.nl")
            ? e
            : e.includes("digitaloceanspaces.com")
            ? `https://images.weserv.nl/?url=${encodeURIComponent(e)}`
            : e,
        "getTimeAgo",
        0,
        (e) => {
          let r = Date.now() - new Date(e).getTime(),
            t = Math.floor(r / 1e3),
            o = Math.floor(r / 6e4),
            a = Math.floor(r / 36e5),
            n = Math.floor(r / 864e5);
          return t < 60
            ? `${t}s`
            : o < 60
            ? `${o}m`
            : a < 24
            ? `${a}h`
            : `${n}d`;
        },
        "isHyperliquidAccountEmpty",
        0,
        (e, r) => (e?.length === 0 || !e) && 0 === Number(r || 0),
        "roundedNumber",
        0,
        (e) => Math.floor(100 * e) / 100,
        "scanAccountUrl",
        0,
        (e, r) => {
          switch (e?.toLowerCase()) {
            case "solana":
            default:
              return `https://solscan.io/token/${r}`;
            case "base":
              return `https://basescan.org/address/${r}`;
            case "arbitrum":
              return `https://arbiscan.io/address/${r}`;
            case "bsc":
              return `https://bscscan.com/address/${r}`;
            case "sonic":
              return `https://sonicscan.org/address/${r}`;
            case "berachain":
              return `https://berascan.com/address/${r}`;
            case "polygon":
              return `https://polygonscan.com/address/${r}`;
            case "monad":
              return `https://monadscan.com/address/${r}`;
            case "abstract":
              return `https://abscan.org/address/${r}`;
            case "robinhood":
              return `https://robinhoodchain.blockscout.com/address/${r}`;
          }
        },
        "scanImages",
        0,
        (e) => {
          switch (e?.toLowerCase()) {
            case "solana":
            default:
              return rp;
            case "base":
              return rg;
            case "arbitrum":
              return rb;
            case "bsc":
              return rm.default;
            case "sonic":
              return rh;
            case "berachain":
              return ru;
            case "polygon":
              return rx;
            case "abstract":
              return rf;
            case "monad":
              return rk.default;
            case "robinhood":
              return rT;
          }
        },
        "truncateToDecimals",
        0,
        (e, r) => {
          let t = Math.pow(10, r);
          return Math.trunc(e * t) / t;
        },
      ],
      974010
    );
  },
]);
