(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  260201,
  (e) => {
    "use strict";
    var t = e.i(768834),
      n = e.i(579473);
    let a = {
        cryptoPerpsValue: 0,
        cryptoPerpsPnl: 0,
        cryptoPerpsWithdrawable: 0,
        cryptoAvailableToTrade: 0,
        cryptoPerpsHasLoaded: !1,
        rwaPerpsValue: 0,
        rwaPerpsPnl: 0,
        rwaPerpsHasLoaded: !1,
        spotValue: 0,
        spotPnl: 0,
        spotAvailable: 0,
        spotHasLoaded: !1,
        altcoinsValue: 0,
        altcoinsPnl: 0,
        altcoinsHasLoaded: !1,
        stocksValue: 0,
        stocksPnl: 0,
        stocksAvailable: 0,
        stocksHasLoaded: !1,
        portfolioTotalValue: 0,
        portfolioChangeAmount: 0,
        portfolioChangePercent: 0,
        portfolioHasLoaded: !1,
      },
      i = (e, t, n, a, i, r, p, o, u, s) => {
        let d = e + n + a + i + p + u,
          l = t + a + r + o + s,
          y = d - l;
        return {
          totalValue: d,
          totalPnl: l,
          changePercent: 0 !== y ? (l / y) * 100 : 0,
        };
      },
      r = (0, t.create)()(
        (0, n.persist)(
          (e, t) => ({
            ...a,
            setCryptoPerpsData: (n) => {
              let a = t(),
                {
                  totalValue: r,
                  totalPnl: p,
                  changePercent: o,
                } = i(
                  n.value,
                  n.pnl,
                  a.rwaPerpsValue,
                  a.rwaPerpsPnl,
                  a.spotValue,
                  a.spotPnl,
                  a.altcoinsValue,
                  a.altcoinsPnl,
                  a.stocksValue,
                  a.stocksPnl
                );
              e({
                cryptoPerpsValue: n.value,
                cryptoPerpsPnl: n.pnl,
                cryptoPerpsWithdrawable: n.withdrawable,
                cryptoAvailableToTrade: n.availableToTrade,
                portfolioTotalValue: r,
                portfolioChangeAmount: p,
                portfolioChangePercent: o,
              });
            },
            setRwaPerpsData: (n) => {
              let a = t(),
                {
                  totalValue: r,
                  totalPnl: p,
                  changePercent: o,
                } = i(
                  a.cryptoPerpsValue,
                  a.cryptoPerpsPnl,
                  n.value,
                  n.pnl,
                  a.spotValue,
                  a.spotPnl,
                  a.altcoinsValue,
                  a.altcoinsPnl,
                  a.stocksValue,
                  a.stocksPnl
                );
              e({
                rwaPerpsValue: n.value,
                rwaPerpsPnl: n.pnl,
                portfolioTotalValue: r,
                portfolioChangeAmount: p,
                portfolioChangePercent: o,
              });
            },
            setSpotData: (n) => {
              let a = t(),
                {
                  totalValue: r,
                  totalPnl: p,
                  changePercent: o,
                } = i(
                  a.cryptoPerpsValue,
                  a.cryptoPerpsPnl,
                  a.rwaPerpsValue,
                  a.rwaPerpsPnl,
                  n.value,
                  n.pnl,
                  a.altcoinsValue,
                  a.altcoinsPnl,
                  a.stocksValue,
                  a.stocksPnl
                );
              e({
                spotValue: n.value,
                spotPnl: n.pnl,
                spotAvailable: n.available,
                portfolioTotalValue: r,
                portfolioChangeAmount: p,
                portfolioChangePercent: o,
              });
            },
            setAltcoinsData: (n) => {
              let a = t(),
                {
                  totalValue: r,
                  totalPnl: p,
                  changePercent: o,
                } = i(
                  a.cryptoPerpsValue,
                  a.cryptoPerpsPnl,
                  a.rwaPerpsValue,
                  a.rwaPerpsPnl,
                  a.spotValue,
                  a.spotPnl,
                  n.value,
                  n.pnl,
                  a.stocksValue,
                  a.stocksPnl
                );
              e({
                altcoinsValue: n.value,
                altcoinsPnl: n.pnl,
                portfolioTotalValue: r,
                portfolioChangeAmount: p,
                portfolioChangePercent: o,
              });
            },
            setStocksData: (n) => {
              let a = t(),
                {
                  totalValue: r,
                  totalPnl: p,
                  changePercent: o,
                } = i(
                  a.cryptoPerpsValue,
                  a.cryptoPerpsPnl,
                  a.rwaPerpsValue,
                  a.rwaPerpsPnl,
                  a.spotValue,
                  a.spotPnl,
                  a.altcoinsValue,
                  a.altcoinsPnl,
                  n.value,
                  n.pnl
                );
              e({
                stocksValue: n.value,
                stocksPnl: n.pnl,
                stocksAvailable: n.available,
                portfolioTotalValue: r,
                portfolioChangeAmount: p,
                portfolioChangePercent: o,
              });
            },
            resetStore: () =>
              e({
                cryptoPerpsValue: 0,
                cryptoPerpsPnl: 0,
                cryptoPerpsWithdrawable: 0,
                cryptoAvailableToTrade: 0,
                rwaPerpsValue: 0,
                rwaPerpsPnl: 0,
                spotValue: 0,
                spotPnl: 0,
                spotAvailable: 0,
                altcoinsValue: 0,
                altcoinsPnl: 0,
                stocksValue: 0,
                stocksPnl: 0,
                stocksAvailable: 0,
                portfolioTotalValue: 0,
                portfolioChangeAmount: 0,
                portfolioChangePercent: 0,
              }),
          }),
          { name: "portfolio-storage", skipHydration: !0 }
        )
      );
    e.s(["usePortfolioStore", 0, r]);
  },
  646444,
  300506,
  (e) => {
    "use strict";
    let t = [
        {
          inputs: [
            {
              internalType: "contract IOstiumRegistry",
              name: "_registry",
              type: "address",
            },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [{ internalType: "address", name: "a", type: "address" }],
          name: "NotGov",
          type: "error",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              indexed: !0,
              internalType: "address",
              name: "spender",
              type: "address",
            },
            {
              indexed: !1,
              internalType: "uint256",
              name: "value",
              type: "uint256",
            },
          ],
          name: "Approval",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: "address",
              name: "from",
              type: "address",
            },
            {
              indexed: !0,
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              indexed: !1,
              internalType: "uint256",
              name: "value",
              type: "uint256",
            },
          ],
          name: "Transfer",
          type: "event",
        },
        {
          inputs: [
            { internalType: "address", name: "owner", type: "address" },
            { internalType: "address", name: "spender", type: "address" },
          ],
          name: "allowance",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "spender", type: "address" },
            { internalType: "uint256", name: "amount", type: "uint256" },
          ],
          name: "approve",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "account", type: "address" },
          ],
          name: "balanceOf",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "decimals",
          outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "spender", type: "address" },
            {
              internalType: "uint256",
              name: "subtractedValue",
              type: "uint256",
            },
          ],
          name: "decreaseAllowance",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "spender", type: "address" },
            { internalType: "uint256", name: "addedValue", type: "uint256" },
          ],
          name: "increaseAllowance",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "name",
          outputs: [{ internalType: "string", name: "", type: "string" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "symbol",
          outputs: [{ internalType: "string", name: "", type: "string" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "totalSupply",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "to", type: "address" },
            { internalType: "uint256", name: "amount", type: "uint256" },
          ],
          name: "transfer",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "from", type: "address" },
            { internalType: "address", name: "to", type: "address" },
            { internalType: "uint256", name: "amount", type: "uint256" },
          ],
          name: "transferFrom",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
      n = [
        { inputs: [], stateMutability: "nonpayable", type: "constructor" },
        { inputs: [], name: "AboveMaxAllowedCollateral", type: "error" },
        {
          inputs: [
            { internalType: "address", name: "trader", type: "address" },
            { internalType: "uint16", name: "pairIndex", type: "uint16" },
            { internalType: "uint8", name: "index", type: "uint8" },
          ],
          name: "AlreadyMarketClosed",
          type: "error",
        },
        { inputs: [], name: "BelowFees", type: "error" },
        { inputs: [], name: "BelowMinLevPos", type: "error" },
        { inputs: [], name: "DelegatedActionFailed", type: "error" },
        { inputs: [], name: "ExposureLimits", type: "error" },
        { inputs: [], name: "InvalidInitialization", type: "error" },
        {
          inputs: [{ internalType: "address", name: "a", type: "address" }],
          name: "IsContract",
          type: "error",
        },
        { inputs: [], name: "IsDone", type: "error" },
        { inputs: [], name: "IsPaused", type: "error" },
        { inputs: [], name: "MathOverflowedMulDiv", type: "error" },
        {
          inputs: [
            { internalType: "address", name: "trader", type: "address" },
          ],
          name: "MaxPendingMarketOrdersReached",
          type: "error",
        },
        {
          inputs: [
            { internalType: "address", name: "trader", type: "address" },
            { internalType: "uint16", name: "pairIndex", type: "uint16" },
          ],
          name: "MaxTradesPerPairReached",
          type: "error",
        },
        {
          inputs: [{ internalType: "address", name: "a", type: "address" }],
          name: "NoDelegate",
          type: "error",
        },
        {
          inputs: [
            { internalType: "address", name: "trader", type: "address" },
            { internalType: "uint16", name: "pairIndex", type: "uint16" },
            { internalType: "uint8", name: "index", type: "uint8" },
          ],
          name: "NoLimitFound",
          type: "error",
        },
        {
          inputs: [
            { internalType: "address", name: "trader", type: "address" },
            { internalType: "uint16", name: "pairIndex", type: "uint16" },
            { internalType: "uint8", name: "index", type: "uint8" },
          ],
          name: "NoTradeFound",
          type: "error",
        },
        {
          inputs: [
            { internalType: "uint256", name: "orderId", type: "uint256" },
          ],
          name: "NoTradeToTimeoutFound",
          type: "error",
        },
        {
          inputs: [
            { internalType: "uint256", name: "orderId", type: "uint256" },
          ],
          name: "NotCloseMarketTimeoutOrder",
          type: "error",
        },
        {
          inputs: [
            { internalType: "address", name: "trader", type: "address" },
            { internalType: "address", name: "caller", type: "address" },
          ],
          name: "NotDelegate",
          type: "error",
        },
        {
          inputs: [{ internalType: "address", name: "a", type: "address" }],
          name: "NotGov",
          type: "error",
        },
        { inputs: [], name: "NotInitializing", type: "error" },
        {
          inputs: [{ internalType: "address", name: "a", type: "address" }],
          name: "NotManager",
          type: "error",
        },
        {
          inputs: [
            { internalType: "uint256", name: "orderId", type: "uint256" },
          ],
          name: "NotOpenMarketTimeoutOrder",
          type: "error",
        },
        {
          inputs: [{ internalType: "address", name: "a", type: "address" }],
          name: "NotTradesUpKeep",
          type: "error",
        },
        {
          inputs: [
            { internalType: "uint256", name: "orderId", type: "uint256" },
            { internalType: "address", name: "trader", type: "address" },
          ],
          name: "NotYourOrder",
          type: "error",
        },
        { inputs: [], name: "NullAddr", type: "error" },
        {
          inputs: [{ internalType: "uint16", name: "index", type: "uint16" }],
          name: "PairNotListed",
          type: "error",
        },
        {
          inputs: [
            { internalType: "uint8", name: "bits", type: "uint8" },
            { internalType: "uint256", name: "value", type: "uint256" },
          ],
          name: "SafeCastOverflowedUintDowncast",
          type: "error",
        },
        {
          inputs: [
            { internalType: "address", name: "sender", type: "address" },
            { internalType: "uint16", name: "pairIndex", type: "uint16" },
            { internalType: "uint8", name: "index", type: "uint8" },
          ],
          name: "TriggerPending",
          type: "error",
        },
        {
          inputs: [
            { internalType: "uint256", name: "orderId", type: "uint256" },
          ],
          name: "WaitTimeout",
          type: "error",
        },
        {
          inputs: [
            { internalType: "uint32", name: "leverage", type: "uint32" },
          ],
          name: "WrongLeverage",
          type: "error",
        },
        { inputs: [], name: "WrongParams", type: "error" },
        { inputs: [], name: "WrongSL", type: "error" },
        { inputs: [], name: "WrongTP", type: "error" },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: "uint256",
              name: "orderId",
              type: "uint256",
            },
            {
              indexed: !0,
              internalType: "uint256",
              name: "tradeId",
              type: "uint256",
            },
            {
              indexed: !0,
              internalType: "address",
              name: "trader",
              type: "address",
            },
            {
              indexed: !1,
              internalType: "uint16",
              name: "pairIndex",
              type: "uint16",
            },
            {
              indexed: !1,
              internalType: "enum IOstiumTradingStorage.LimitOrder",
              name: "",
              type: "uint8",
            },
          ],
          name: "AutomationCloseOrderInitiated",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: "uint256",
              name: "orderId",
              type: "uint256",
            },
            {
              indexed: !0,
              internalType: "address",
              name: "trader",
              type: "address",
            },
            {
              indexed: !0,
              internalType: "uint16",
              name: "pairIndex",
              type: "uint16",
            },
            {
              indexed: !1,
              internalType: "uint8",
              name: "index",
              type: "uint8",
            },
          ],
          name: "AutomationOpenOrderInitiated",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: "address",
              name: "delegator",
              type: "address",
            },
            {
              indexed: !0,
              internalType: "address",
              name: "delegate",
              type: "address",
            },
          ],
          name: "DelegateAdded",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: "address",
              name: "delegator",
              type: "address",
            },
            {
              indexed: !0,
              internalType: "address",
              name: "delegate",
              type: "address",
            },
          ],
          name: "DelegateRemoved",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            { indexed: !1, internalType: "bool", name: "done", type: "bool" },
          ],
          name: "Done",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !1,
              internalType: "uint64",
              name: "version",
              type: "uint64",
            },
          ],
          name: "Initialized",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: "uint256",
              name: "tradeId",
              type: "uint256",
            },
            {
              indexed: !0,
              internalType: "address",
              name: "trader",
              type: "address",
            },
            {
              indexed: !0,
              internalType: "uint16",
              name: "pairIndex",
              type: "uint16",
            },
          ],
          name: "MarketCloseFailed",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: "uint256",
              name: "orderId",
              type: "uint256",
            },
            {
              indexed: !0,
              internalType: "uint256",
              name: "tradeId",
              type: "uint256",
            },
            {
              indexed: !0,
              internalType: "address",
              name: "trader",
              type: "address",
            },
            {
              indexed: !1,
              internalType: "uint16",
              name: "pairIndex",
              type: "uint16",
            },
          ],
          name: "MarketCloseOrderInitiated",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: "uint256",
              name: "orderId",
              type: "uint256",
            },
            {
              indexed: !0,
              internalType: "uint256",
              name: "tradeId",
              type: "uint256",
            },
            {
              indexed: !0,
              internalType: "address",
              name: "trader",
              type: "address",
            },
            {
              indexed: !1,
              internalType: "uint16",
              name: "pairIndex",
              type: "uint16",
            },
            {
              indexed: !1,
              internalType: "uint16",
              name: "closePercentage",
              type: "uint16",
            },
          ],
          name: "MarketCloseOrderInitiatedV2",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: "uint256",
              name: "orderId",
              type: "uint256",
            },
            {
              indexed: !0,
              internalType: "uint256",
              name: "tradeId",
              type: "uint256",
            },
            {
              components: [
                { internalType: "uint256", name: "block", type: "uint256" },
                {
                  internalType: "uint192",
                  name: "wantedPrice",
                  type: "uint192",
                },
                { internalType: "uint32", name: "slippageP", type: "uint32" },
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "collateral",
                      type: "uint256",
                    },
                    {
                      internalType: "uint192",
                      name: "openPrice",
                      type: "uint192",
                    },
                    { internalType: "uint192", name: "tp", type: "uint192" },
                    { internalType: "uint192", name: "sl", type: "uint192" },
                    {
                      internalType: "address",
                      name: "trader",
                      type: "address",
                    },
                    {
                      internalType: "uint32",
                      name: "leverage",
                      type: "uint32",
                    },
                    {
                      internalType: "uint16",
                      name: "pairIndex",
                      type: "uint16",
                    },
                    { internalType: "uint8", name: "index", type: "uint8" },
                    { internalType: "bool", name: "buy", type: "bool" },
                  ],
                  internalType: "struct IOstiumTradingStorage.Trade",
                  name: "trade",
                  type: "tuple",
                },
              ],
              indexed: !1,
              internalType: "struct IOstiumTradingStorage.PendingMarketOrder",
              name: "order",
              type: "tuple",
            },
          ],
          name: "MarketCloseTimeoutExecuted",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: "uint256",
              name: "orderId",
              type: "uint256",
            },
            {
              indexed: !0,
              internalType: "uint256",
              name: "tradeId",
              type: "uint256",
            },
            {
              components: [
                { internalType: "uint256", name: "block", type: "uint256" },
                {
                  internalType: "uint192",
                  name: "wantedPrice",
                  type: "uint192",
                },
                { internalType: "uint32", name: "slippageP", type: "uint32" },
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "collateral",
                      type: "uint256",
                    },
                    {
                      internalType: "uint192",
                      name: "openPrice",
                      type: "uint192",
                    },
                    { internalType: "uint192", name: "tp", type: "uint192" },
                    { internalType: "uint192", name: "sl", type: "uint192" },
                    {
                      internalType: "address",
                      name: "trader",
                      type: "address",
                    },
                    {
                      internalType: "uint32",
                      name: "leverage",
                      type: "uint32",
                    },
                    {
                      internalType: "uint16",
                      name: "pairIndex",
                      type: "uint16",
                    },
                    { internalType: "uint8", name: "index", type: "uint8" },
                    { internalType: "bool", name: "buy", type: "bool" },
                  ],
                  internalType: "struct IOstiumTradingStorage.Trade",
                  name: "trade",
                  type: "tuple",
                },
                { internalType: "uint16", name: "percentage", type: "uint16" },
              ],
              indexed: !1,
              internalType: "struct IOstiumTradingStorage.PendingMarketOrderV2",
              name: "order",
              type: "tuple",
            },
          ],
          name: "MarketCloseTimeoutExecutedV2",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: "uint256",
              name: "orderId",
              type: "uint256",
            },
            {
              indexed: !0,
              internalType: "address",
              name: "trader",
              type: "address",
            },
            {
              indexed: !0,
              internalType: "uint16",
              name: "pairIndex",
              type: "uint16",
            },
          ],
          name: "MarketOpenOrderInitiated",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: "uint256",
              name: "orderId",
              type: "uint256",
            },
            {
              components: [
                { internalType: "uint256", name: "block", type: "uint256" },
                {
                  internalType: "uint192",
                  name: "wantedPrice",
                  type: "uint192",
                },
                { internalType: "uint32", name: "slippageP", type: "uint32" },
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "collateral",
                      type: "uint256",
                    },
                    {
                      internalType: "uint192",
                      name: "openPrice",
                      type: "uint192",
                    },
                    { internalType: "uint192", name: "tp", type: "uint192" },
                    { internalType: "uint192", name: "sl", type: "uint192" },
                    {
                      internalType: "address",
                      name: "trader",
                      type: "address",
                    },
                    {
                      internalType: "uint32",
                      name: "leverage",
                      type: "uint32",
                    },
                    {
                      internalType: "uint16",
                      name: "pairIndex",
                      type: "uint16",
                    },
                    { internalType: "uint8", name: "index", type: "uint8" },
                    { internalType: "bool", name: "buy", type: "bool" },
                  ],
                  internalType: "struct IOstiumTradingStorage.Trade",
                  name: "trade",
                  type: "tuple",
                },
              ],
              indexed: !1,
              internalType: "struct IOstiumTradingStorage.PendingMarketOrder",
              name: "order",
              type: "tuple",
            },
          ],
          name: "MarketOpenTimeoutExecuted",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: "uint256",
              name: "orderId",
              type: "uint256",
            },
            {
              components: [
                { internalType: "uint256", name: "block", type: "uint256" },
                {
                  internalType: "uint192",
                  name: "wantedPrice",
                  type: "uint192",
                },
                { internalType: "uint32", name: "slippageP", type: "uint32" },
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "collateral",
                      type: "uint256",
                    },
                    {
                      internalType: "uint192",
                      name: "openPrice",
                      type: "uint192",
                    },
                    { internalType: "uint192", name: "tp", type: "uint192" },
                    { internalType: "uint192", name: "sl", type: "uint192" },
                    {
                      internalType: "address",
                      name: "trader",
                      type: "address",
                    },
                    {
                      internalType: "uint32",
                      name: "leverage",
                      type: "uint32",
                    },
                    {
                      internalType: "uint16",
                      name: "pairIndex",
                      type: "uint16",
                    },
                    { internalType: "uint8", name: "index", type: "uint8" },
                    { internalType: "bool", name: "buy", type: "bool" },
                  ],
                  internalType: "struct IOstiumTradingStorage.Trade",
                  name: "trade",
                  type: "tuple",
                },
                { internalType: "uint16", name: "percentage", type: "uint16" },
              ],
              indexed: !1,
              internalType: "struct IOstiumTradingStorage.PendingMarketOrderV2",
              name: "order",
              type: "tuple",
            },
          ],
          name: "MarketOpenTimeoutExecutedV2",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !1,
              internalType: "uint16",
              name: "value",
              type: "uint16",
            },
          ],
          name: "MarketOrdersTimeoutUpdated",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !1,
              internalType: "uint256",
              name: "value",
              type: "uint256",
            },
          ],
          name: "MaxAllowedCollateralUpdated",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: "address",
              name: "trader",
              type: "address",
            },
            {
              indexed: !0,
              internalType: "uint16",
              name: "pairIndex",
              type: "uint16",
            },
            {
              indexed: !1,
              internalType: "uint8",
              name: "index",
              type: "uint8",
            },
          ],
          name: "OpenLimitCanceled",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: "address",
              name: "trader",
              type: "address",
            },
            {
              indexed: !0,
              internalType: "uint16",
              name: "pairIndex",
              type: "uint16",
            },
            {
              indexed: !1,
              internalType: "uint8",
              name: "index",
              type: "uint8",
            },
          ],
          name: "OpenLimitPlaced",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: "address",
              name: "trader",
              type: "address",
            },
            {
              indexed: !0,
              internalType: "uint16",
              name: "pairIndex",
              type: "uint16",
            },
            {
              indexed: !1,
              internalType: "uint8",
              name: "index",
              type: "uint8",
            },
            {
              indexed: !1,
              internalType: "uint192",
              name: "newPrice",
              type: "uint192",
            },
            {
              indexed: !1,
              internalType: "uint192",
              name: "newTp",
              type: "uint192",
            },
            {
              indexed: !1,
              internalType: "uint192",
              name: "newSl",
              type: "uint192",
            },
          ],
          name: "OpenLimitUpdated",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: "uint256",
              name: "tradeId",
              type: "uint256",
            },
            {
              indexed: !0,
              internalType: "address",
              name: "trader",
              type: "address",
            },
            {
              indexed: !1,
              internalType: "uint16",
              name: "pairIndex",
              type: "uint16",
            },
            {
              indexed: !1,
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "OracleFeeCharged",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: "address",
              name: "trader",
              type: "address",
            },
            {
              indexed: !1,
              internalType: "uint16",
              name: "pairIndex",
              type: "uint16",
            },
            {
              indexed: !1,
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "OracleFeeChargedLimitCancelled",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: "uint256",
              name: "tradeId",
              type: "uint256",
            },
            {
              indexed: !0,
              internalType: "address",
              name: "trader",
              type: "address",
            },
            {
              indexed: !1,
              internalType: "uint16",
              name: "pairIndex",
              type: "uint16",
            },
            {
              indexed: !1,
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "OracleFeeRefunded",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            { indexed: !1, internalType: "bool", name: "paused", type: "bool" },
          ],
          name: "Paused",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: "uint256",
              name: "tradeId",
              type: "uint256",
            },
            {
              indexed: !0,
              internalType: "uint256",
              name: "orderId",
              type: "uint256",
            },
            {
              indexed: !0,
              internalType: "address",
              name: "trader",
              type: "address",
            },
            {
              indexed: !1,
              internalType: "uint16",
              name: "pairIndex",
              type: "uint16",
            },
            {
              indexed: !1,
              internalType: "uint256",
              name: "removeAmount",
              type: "uint256",
            },
          ],
          name: "RemoveCollateralInitiated",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: "uint256",
              name: "tradeId",
              type: "uint256",
            },
            {
              indexed: !0,
              internalType: "uint256",
              name: "orderId",
              type: "uint256",
            },
            {
              indexed: !0,
              internalType: "address",
              name: "trader",
              type: "address",
            },
            {
              indexed: !1,
              internalType: "uint16",
              name: "pairIndex",
              type: "uint16",
            },
            {
              indexed: !1,
              internalType: "uint256",
              name: "removeAmount",
              type: "uint256",
            },
            {
              indexed: !1,
              internalType: "string",
              name: "reason",
              type: "string",
            },
          ],
          name: "RemoveCollateralRejected",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: "uint256",
              name: "tradeId",
              type: "uint256",
            },
            {
              indexed: !0,
              internalType: "address",
              name: "trader",
              type: "address",
            },
            {
              indexed: !0,
              internalType: "uint16",
              name: "pairIndex",
              type: "uint16",
            },
            {
              indexed: !1,
              internalType: "uint8",
              name: "index",
              type: "uint8",
            },
            {
              indexed: !1,
              internalType: "uint192",
              name: "newSl",
              type: "uint192",
            },
          ],
          name: "SlUpdated",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: "uint256",
              name: "tradeId",
              type: "uint256",
            },
            {
              indexed: !0,
              internalType: "address",
              name: "trader",
              type: "address",
            },
            {
              indexed: !0,
              internalType: "uint16",
              name: "pairIndex",
              type: "uint16",
            },
            {
              indexed: !1,
              internalType: "uint256",
              name: "topUpAmount",
              type: "uint256",
            },
            {
              indexed: !1,
              internalType: "uint32",
              name: "newLeverage",
              type: "uint32",
            },
          ],
          name: "TopUpCollateralExecuted",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: "uint256",
              name: "tradeId",
              type: "uint256",
            },
            {
              indexed: !0,
              internalType: "address",
              name: "trader",
              type: "address",
            },
            {
              indexed: !0,
              internalType: "uint16",
              name: "pairIndex",
              type: "uint16",
            },
            {
              indexed: !1,
              internalType: "uint8",
              name: "index",
              type: "uint8",
            },
            {
              indexed: !1,
              internalType: "uint192",
              name: "newTp",
              type: "uint192",
            },
          ],
          name: "TpUpdated",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !1,
              internalType: "uint16",
              name: "value",
              type: "uint16",
            },
          ],
          name: "TriggerTimeoutUpdated",
          type: "event",
        },
        {
          inputs: [],
          name: "_msgSender",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint16", name: "pairIndex", type: "uint16" },
            { internalType: "uint8", name: "index", type: "uint8" },
          ],
          name: "cancelOpenLimitOrder",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint16", name: "pairIndex", type: "uint16" },
            { internalType: "uint8", name: "index", type: "uint8" },
            { internalType: "uint16", name: "closePercentage", type: "uint16" },
            { internalType: "uint192", name: "marketPrice", type: "uint192" },
            { internalType: "uint32", name: "slippageP", type: "uint32" },
          ],
          name: "closeTradeMarket",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256", name: "_order", type: "uint256" },
            { internalType: "bool", name: "retry", type: "bool" },
          ],
          name: "closeTradeMarketTimeout",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "trader", type: "address" },
            { internalType: "bytes", name: "call_data", type: "bytes" },
          ],
          name: "delegatedAction",
          outputs: [{ internalType: "bytes", name: "", type: "bytes" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "delegator", type: "address" },
          ],
          name: "delegations",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "done",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "enum IOstiumTradingStorage.LimitOrder",
              name: "orderType",
              type: "uint8",
            },
            { internalType: "address", name: "trader", type: "address" },
            { internalType: "uint16", name: "pairIndex", type: "uint16" },
            { internalType: "uint8", name: "index", type: "uint8" },
            {
              internalType: "uint256",
              name: "priceTimestamp",
              type: "uint256",
            },
          ],
          name: "executeAutomationOrder",
          outputs: [
            {
              internalType: "enum IOstiumTrading.AutomationOrderStatus",
              name: "",
              type: "uint8",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "contract IOstiumRegistry",
              name: "_registry",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "_maxAllowedCollateral",
              type: "uint256",
            },
            {
              internalType: "uint16",
              name: "_marketOrdersTimeout",
              type: "uint16",
            },
            { internalType: "uint16", name: "_triggerTimeout", type: "uint16" },
          ],
          name: "initialize",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "isDone",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "isPaused",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "marketOrdersTimeout",
          outputs: [{ internalType: "uint16", name: "", type: "uint16" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "maxAllowedCollateral",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              components: [
                {
                  internalType: "uint256",
                  name: "collateral",
                  type: "uint256",
                },
                { internalType: "uint192", name: "openPrice", type: "uint192" },
                { internalType: "uint192", name: "tp", type: "uint192" },
                { internalType: "uint192", name: "sl", type: "uint192" },
                { internalType: "address", name: "trader", type: "address" },
                { internalType: "uint32", name: "leverage", type: "uint32" },
                { internalType: "uint16", name: "pairIndex", type: "uint16" },
                { internalType: "uint8", name: "index", type: "uint8" },
                { internalType: "bool", name: "buy", type: "bool" },
              ],
              internalType: "struct IOstiumTradingStorage.Trade",
              name: "t",
              type: "tuple",
            },
            {
              components: [
                { internalType: "address", name: "builder", type: "address" },
                { internalType: "uint32", name: "builderFee", type: "uint32" },
              ],
              internalType: "struct IOstiumTradingStorage.BuilderFee",
              name: "bf",
              type: "tuple",
            },
            {
              internalType: "enum IOstiumTradingStorage.OpenOrderType",
              name: "orderType",
              type: "uint8",
            },
            { internalType: "uint256", name: "slippageP", type: "uint256" },
          ],
          name: "openTrade",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256", name: "_order", type: "uint256" },
          ],
          name: "openTradeMarketTimeout",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "pause",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "registry",
          outputs: [
            {
              internalType: "contract IOstiumRegistry",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint16", name: "pairIndex", type: "uint16" },
            { internalType: "uint8", name: "index", type: "uint8" },
            { internalType: "uint256", name: "removeAmount", type: "uint256" },
          ],
          name: "removeCollateral",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "removeDelegate",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "delegate", type: "address" },
          ],
          name: "setDelegate",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [{ internalType: "uint256", name: "value", type: "uint256" }],
          name: "setMarketOrdersTimeout",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [{ internalType: "uint256", name: "value", type: "uint256" }],
          name: "setMaxAllowedCollateral",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [{ internalType: "uint256", name: "value", type: "uint256" }],
          name: "setTriggerTimeout",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint16", name: "pairIndex", type: "uint16" },
            { internalType: "uint8", name: "index", type: "uint8" },
            { internalType: "uint256", name: "topUpAmount", type: "uint256" },
          ],
          name: "topUpCollateral",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "triggerTimeout",
          outputs: [{ internalType: "uint16", name: "", type: "uint16" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint16", name: "pairIndex", type: "uint16" },
            { internalType: "uint8", name: "index", type: "uint8" },
            { internalType: "uint192", name: "price", type: "uint192" },
            { internalType: "uint192", name: "tp", type: "uint192" },
            { internalType: "uint192", name: "sl", type: "uint192" },
          ],
          name: "updateOpenLimitOrder",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint16", name: "pairIndex", type: "uint16" },
            { internalType: "uint8", name: "index", type: "uint8" },
            { internalType: "uint192", name: "newSl", type: "uint192" },
          ],
          name: "updateSl",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint16", name: "pairIndex", type: "uint16" },
            { internalType: "uint8", name: "index", type: "uint8" },
            { internalType: "uint192", name: "newTp", type: "uint192" },
          ],
          name: "updateTp",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
      a = [
        {
          inputs: [
            { internalType: "address", name: "_trader", type: "address" },
            { internalType: "uint16", name: "_pairIndex", type: "uint16" },
          ],
          name: "openTradesCount",
          outputs: [{ internalType: "uint32", name: "", type: "uint32" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "trader", type: "address" },
            { internalType: "uint16", name: "pairIndex", type: "uint16" },
            { internalType: "uint8", name: "tradeIndex", type: "uint8" },
          ],
          name: "openTrades",
          outputs: [
            { internalType: "uint256", name: "collateral", type: "uint256" },
            { internalType: "uint192", name: "openPrice", type: "uint192" },
            { internalType: "uint192", name: "tp", type: "uint192" },
            { internalType: "uint192", name: "sl", type: "uint192" },
            { internalType: "address", name: "trader", type: "address" },
            { internalType: "uint32", name: "leverage", type: "uint32" },
            { internalType: "uint16", name: "pairIndex", type: "uint16" },
            { internalType: "uint8", name: "index", type: "uint8" },
            { internalType: "bool", name: "buy", type: "bool" },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "account", type: "address" },
          ],
          name: "canRequestTokens",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "requestTokens",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "getTokenAmount",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
      ];
    var i,
      r = e.i(890357),
      p = e.i(176394),
      o = e.i(296508),
      u = e.i(271645),
      s = e.i(309682),
      d = e.i(656679),
      l = e.i(644616),
      y = e.i(110163),
      m = e.i(831095),
      c = e.i(599509),
      T = e.i(668375),
      g = e.i(236983),
      f = e.i(657390),
      b = e.i(756302),
      x = e.i(3130),
      w = e.i(346944),
      P = e.i(839341);
    let v = P.BigNumber.from("100"),
      I = P.BigNumber.from("1000000");
    P.BigNumber.from("1000000000000"),
      P.BigNumber.from("10000000000000000"),
      P.BigNumber.from("1000000000000000000"),
      P.BigNumber.from(
        "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
      );
    let O = P.BigNumber.from(25);
    P.BigNumber.from(900).mul(I), P.BigNumber.from(-100).mul(I);
    let h = async ({
      openPrice: e,
      long: t,
      collateral: n,
      leverage: a,
      rolloverFee: i,
      fundingFee: r,
      maxLeverage: p,
    }) => {
      let o = P.BigNumber.from(0);
      try {
        let i = P.BigNumber.from(e),
          u = P.BigNumber.from(n),
          s = P.BigNumber.from(a);
        if (u.isZero() || s.isZero()) return "0";
        let d = ((e, t, n) => {
            if (P.BigNumber.from(n).isZero()) return "0";
            let a = P.BigNumber.from(O).mul(t).mul(I).div(n);
            return P.BigNumber.from(e).mul(a).div(I).div(v).toString();
          })(n, a, p),
          l = P.BigNumber.from(n).sub(d).sub(0).sub(r),
          y = i.mul(l).div(u).mul(v).div(s);
        o = t ? i.sub(y) : i.add(y);
      } catch (e) {
        throw `Unable to compute Liquidation Price: ${e}`;
      }
      return o > P.BigNumber.from(0) ? o.toString() : "0";
    };
    e.s(["getTradeLiquidationPrice", 0, h], 300506);
    var M =
      (((i = M || {})[(i.MARKET = 0)] = "MARKET"),
      (i[(i.LIMIT = 1)] = "LIMIT"),
      (i[(i.STOP = 2)] = "STOP"),
      i);
    let C = (e, t = 6) => (0, T.parseUnits)(e, t);
    e.s(
      [
        "useOstium",
        0,
        () => {
          let e = g.arbitrum,
            { getClientForChain: i, client: T } = (0, p.useSmartWallets)(),
            { setStockBalance: P } = (0, r.useBalanceStore)(
              (0, w.useShallow)((e) => ({ setStockBalance: e.setStockBalance }))
            ),
            { checkStockBalance: v } = (0, f.default)(),
            I = (0, s.createPublicClient)({
              chain: e,
              transport: (0, y.http)(),
            }),
            {
              setPairs: O,
              setostiumPositions: k,
              setOstiumOpenOrders: N,
              setOstiumOrderHistory: B,
              setOstiumCompletedTrades: S,
              setSocialOstiumPositions: A,
              setSocialOstiumOpenOrders: D,
              setSocialOstiumOrderHistory: V,
              setSocialOstiumCompletedTrades: L,
            } = (0, x.useOstiumStore)(
              (0, w.useShallow)((e) => ({
                setPairs: e.setPairs,
                setostiumPositions: e.setostiumPositions,
                setOstiumOpenOrders: e.setOstiumOpenOrders,
                setOstiumOrderHistory: e.setOstiumOrderHistory,
                setOstiumCompletedTrades: e.setOstiumCompletedTrades,
                setSocialOstiumPositions: e.setSocialOstiumPositions,
                setSocialOstiumOpenOrders: e.setSocialOstiumOpenOrders,
                setSocialOstiumOrderHistory: e.setSocialOstiumOrderHistory,
                setSocialOstiumCompletedTrades:
                  e.setSocialOstiumCompletedTrades,
              }))
            ),
            E = async () => {
              P((await v()).toFixed(2));
            },
            F = "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
            U = "0x6D0bA1f9996DBD8885827e1b2e8f6593e7702411",
            R = "0xcCd5891083A8acD2074690F65d3024E7D13d66E7",
            q = async () => {
              let n = await i({ id: e.id });
              try {
                let e = n.account.address;
                return await I.readContract({
                  address: F,
                  abi: t,
                  functionName: "allowance",
                  args: [e, U],
                });
              } catch (e) {
                return console.error("Error checking approval:", e), 0;
              }
            },
            $ = async (n) => {
              let a = await i({ id: e.id });
              try {
                let i = a.account.address;
                if (!i) throw Error("No wallet address found");
                if ((await q()) >= n) return;
                let r = await I.readContract({
                  address: F,
                  abi: t,
                  functionName: "balanceOf",
                  args: [i],
                });
                if (r < n)
                  throw Error(
                    `Insufficient USDC balance. Required: ${n}, Available: ${r}`
                  );
                let p = BigInt(1e6) * BigInt(10) ** BigInt(6) * BigInt(1e3),
                  u = (0, o.encodeNonce)({
                    key: BigInt(Date.now()),
                    sequence: BigInt(0),
                  });
                await a?.sendTransaction({
                  chain: e,
                  calls: [
                    {
                      to: F,
                      data: (0, d.encodeFunctionData)({
                        abi: t,
                        functionName: "approve",
                        args: [U, p],
                      }),
                      value: BigInt(0),
                    },
                    {
                      to: F,
                      data: (0, d.encodeFunctionData)({
                        abi: t,
                        functionName: "approve",
                        args: [R, p],
                      }),
                      value: BigInt(0),
                    },
                  ],
                  nonce: u,
                });
              } catch (e) {
                throw (console.error("USDC approval failed:", e), e);
              }
            },
            _ = async (e) => {
              let t = null,
                n = 0;
              for (; !t && n < 25; )
                try {
                  (t = await I.getTransactionReceipt({ hash: e })) ||
                    (n++, await new Promise((e) => setTimeout(e, 2e3)));
                } catch (t) {
                  console.log(`Error checking transaction ${e}: ${t}`),
                    n++,
                    await new Promise((e) => setTimeout(e, 2e3));
                }
              if (!t)
                throw Error(
                  `Transaction not mined after 50 seconds. Transaction hash: ${e}`
                );
              return t;
            },
            H = (e) => {
              let t = (0, m.keccak256)(
                new TextEncoder().encode(
                  "PriceRequested(uint256,bytes32,uint256)"
                )
              );
              for (let n of e)
                if (n?.topics[0] === t && n?.topics[1]) return n?.topics[1];
              return "";
            },
            W = async (t) => {
              console.time("performTrade");
              let {
                  collateral: a,
                  leverage: r,
                  pair_index: p,
                  direction: u,
                  order_type: s,
                  tpPrice: l,
                  slPrice: y,
                  atPrice: m,
                  slippagePercentage: T = 2,
                } = t,
                g = await i({ id: e.id });
              try {
                let t = C(a, 6);
                await $(t);
                let i = {
                  collateral: t,
                  openPrice: (0, c.parseEther)(m?.toString()),
                  tp: (0, c.parseEther)(l?.toString()),
                  sl: (0, c.parseEther)(y?.toString()),
                  trader: g.account.address,
                  leverage: 100 * Number(r),
                  pairIndex: parseInt(p.toString()),
                  index: 0,
                  buy: u,
                };
                if (i.collateral <= BigInt(0))
                  throw Error("Collateral amount must be greater than 0");
                if (i.openPrice <= BigInt(0))
                  throw Error("Open price must be greater than 0");
                if (i.leverage <= BigInt(0))
                  throw Error("Leverage must be greater than 0");
                if (i.pairIndex < 0) throw Error("Invalid pair index");
                let f = s ? M[s] : 0,
                  b = Math.floor(1500 * T),
                  x = (0, o.encodeNonce)({
                    key: BigInt(Date.now()),
                    sequence: BigInt(0),
                  }),
                  w = await g?.sendTransaction({
                    chain: e,
                    calls: [
                      {
                        to: U,
                        data: (0, d.encodeFunctionData)({
                          abi: n,
                          functionName: "openTrade",
                          args: [
                            i,
                            {
                              builder:
                                "0x5EF4DeeB76F87d979D0Ddc8c51f5b4F65d1c972A",
                              builderFee: 5e4,
                            },
                            f,
                            b,
                          ],
                        }),
                        value: BigInt(0),
                      },
                    ],
                    nonce: x,
                  }),
                  P = await _(w);
                if (!P) throw Error("Transaction failed - no receipt received");
                let v = H(P.logs);
                return (
                  v ||
                    "LIMIT" === s ||
                    console.warn("No order ID found in transaction logs"),
                  E(),
                  console.timeEnd("performTrade"),
                  { receipt: P, order_id: v }
                );
              } catch (e) {
                console.error("Trade failed:", e);
                return;
              }
            },
            K = async ({
              pairId: t,
              index: r,
              percentage: p = 100,
              currentPrice: u,
            }) => {
              try {
                let s = await i({ id: e.id });
                if (
                  await I.readContract({
                    address: U,
                    abi: n,
                    functionName: "isPaused",
                  })
                )
                  throw Error(
                    "Contract is currently paused. Please try again later."
                  );
                let l = await I.readContract({
                  address: R,
                  abi: a,
                  functionName: "openTrades",
                  args: [s.account.address, t, r],
                });
                if (
                  !l ||
                  l[4].toLowerCase() !== s.account.address.toLowerCase()
                )
                  throw Error(
                    `No open position found for pair ${t} and index ${r}`
                  );
                let y = Number(C(p.toString(), 2)),
                  m = C(u.toString(), 18).toString(),
                  c = (0, o.encodeNonce)({
                    key: BigInt(Date.now()),
                    sequence: BigInt(0),
                  }),
                  T = await s?.sendTransaction({
                    chain: e,
                    calls: [
                      {
                        to: U,
                        data: (0, d.encodeFunctionData)({
                          abi: n,
                          functionName: "closeTradeMarket",
                          args: [t, r, y, m, 3e3],
                        }),
                        value: BigInt(0),
                        account: s.account.address,
                      },
                    ],
                    nonce: c,
                  }),
                  g = await _(T),
                  f = H(g.logs);
                return (
                  f || console.warn("No order ID found in transaction logs"),
                  await E(),
                  { receipt: g, order_id: f }
                );
              } catch (e) {
                throw (console.error("Close position failed:", e), e);
              }
            },
            z = async (t, r, p) => {
              try {
                let u = await i({ id: e.id });
                if (
                  await I.readContract({
                    address: U,
                    abi: n,
                    functionName: "isPaused",
                  })
                )
                  throw Error(
                    "Contract is currently paused. Please try again later."
                  );
                let s = await I.readContract({
                  address: R,
                  abi: a,
                  functionName: "openTrades",
                  args: [u.account.address, t, r],
                });
                if (
                  !s ||
                  s[4].toLowerCase() !== u.account.address.toLowerCase()
                )
                  throw Error(
                    `No open position found for pair ${t} and index ${r}`
                  );
                let l = (0, c.parseEther)(p),
                  y = (0, o.encodeNonce)({
                    key: BigInt(Date.now()),
                    sequence: BigInt(0),
                  }),
                  m = await u?.sendTransaction({
                    chain: e,
                    calls: [
                      {
                        to: U,
                        data: (0, d.encodeFunctionData)({
                          abi: n,
                          functionName: "updateTp",
                          args: [t, r, l],
                        }),
                        value: BigInt(0),
                        account: u.account.address,
                      },
                    ],
                    nonce: y,
                  });
                return await _(m);
              } catch (e) {
                throw (console.error("Error updating TP:", e), e);
              }
            },
            Z = async (t, r, p) => {
              try {
                let u = await i({ id: e.id });
                if (
                  await I.readContract({
                    address: U,
                    abi: n,
                    functionName: "isPaused",
                  })
                )
                  throw Error(
                    "Contract is currently paused. Please try again later."
                  );
                let s = await I.readContract({
                  address: R,
                  abi: a,
                  functionName: "openTrades",
                  args: [u.account.address, t, r],
                });
                if (
                  !s ||
                  s[4].toLowerCase() !== u.account.address.toLowerCase()
                )
                  throw Error(
                    `No open position found for pair ${t} and index ${r}`
                  );
                let l = (0, c.parseEther)(p),
                  y = (0, o.encodeNonce)({
                    key: BigInt(Date.now()),
                    sequence: BigInt(0),
                  }),
                  m = await u?.sendTransaction({
                    chain: e,
                    calls: [
                      {
                        to: U,
                        data: (0, d.encodeFunctionData)({
                          abi: n,
                          functionName: "updateSl",
                          args: [t, r, l],
                        }),
                        value: BigInt(0),
                        account: u.account.address,
                      },
                    ],
                    nonce: y,
                  });
                return await _(m);
              } catch (e) {
                throw (console.error("Error updating SL:", e), e);
              }
            },
            j = async (t, a) => {
              try {
                let r = await i({ id: e.id });
                if (
                  await I.readContract({
                    address: U,
                    abi: n,
                    functionName: "isPaused",
                  })
                )
                  throw Error(
                    "Contract is currently paused. Please try again later."
                  );
                let p = (0, o.encodeNonce)({
                    key: BigInt(Date.now()),
                    sequence: BigInt(0),
                  }),
                  u = await r?.sendTransaction({
                    chain: e,
                    calls: [
                      {
                        to: U,
                        data: (0, d.encodeFunctionData)({
                          abi: n,
                          functionName: "cancelOpenLimitOrder",
                          args: [t, a],
                        }),
                        value: BigInt(0),
                        account: r.account.address,
                      },
                    ],
                    nonce: p,
                  }),
                  s = await _(u);
                return await E(), s;
              } catch (e) {
                throw (console.error("Error updating SL:", e), e);
              }
            },
            G = async (t, a) => {
              try {
                let r,
                  p = await i({ id: e.id });
                if (
                  await I.readContract({
                    address: U,
                    abi: n,
                    functionName: "isPaused",
                  })
                )
                  throw Error(
                    "Contract is currently paused. Please try again later."
                  );
                let u = (0, o.encodeNonce)({
                  key: BigInt(Date.now()),
                  sequence: BigInt(0),
                });
                "Open" === a &&
                  (r = await p?.sendTransaction({
                    chain: e,
                    calls: [
                      {
                        to: U,
                        data: (0, d.encodeFunctionData)({
                          abi: n,
                          functionName: "openTradeMarketTimeout",
                          args: [t],
                        }),
                        value: BigInt(0),
                        account: p.account.address,
                      },
                    ],
                    nonce: u,
                  })),
                  "Close" === a &&
                    (r = await p?.sendTransaction({
                      chain: e,
                      calls: [
                        {
                          to: U,
                          data: (0, d.encodeFunctionData)({
                            abi: n,
                            functionName: "closeTradeMarketTimeout",
                            args: [t, !1],
                          }),
                          value: BigInt(0),
                          account: p.account.address,
                        },
                      ],
                      nonce: u,
                    }));
                let s = await _(r);
                return await E(), s;
              } catch (e) {
                throw (console.error("Error canceling market order:", e), e);
              }
            },
            Y = async (t, r, p) => {
              let u = await i({ id: g.arbitrum.id });
              try {
                let i = await I.readContract({
                  address: R,
                  abi: a,
                  functionName: "openTrades",
                  args: [u.account.address, t, r],
                });
                if (
                  !i ||
                  i[4].toLowerCase() !== u.account.address.toLowerCase()
                )
                  throw Error(
                    `No open position found for pair ${t} and index ${r}`
                  );
                let s = C(p, 6);
                await $(s);
                let l = (0, o.encodeNonce)({
                    key: BigInt(Date.now()),
                    sequence: BigInt(0),
                  }),
                  y = await u?.sendTransaction({
                    chain: e,
                    calls: [
                      {
                        to: U,
                        data: (0, d.encodeFunctionData)({
                          abi: n,
                          functionName: "topUpCollateral",
                          args: [t, r, s],
                        }),
                        value: BigInt(0),
                        account: u.account.address,
                      },
                    ],
                    nonce: l,
                  }),
                  m = await _(y);
                return await E(), m;
              } catch (e) {
                console.error("Error updating collateral:", e);
                return;
              }
            },
            J = async (e) => {
              let t = "N/A";
              return (
                e?.openPrice &&
                  e?.collateral &&
                  e?.leverage &&
                  e?.pair?.rolloverFeePerBlock &&
                  e?.pair?.maxFundingFeePerBlock &&
                  (e?.pair?.maxLeverage || e?.pair?.group?.maxLeverage) &&
                  (t = await h({
                    openPrice: e?.openPrice.toString(),
                    long: e?.isBuy,
                    collateral: e?.collateral.toString(),
                    leverage: e?.leverage.toString(),
                    rolloverFee: e?.pair?.rolloverFeePerBlock,
                    fundingFee: e?.pair?.maxFundingFeePerBlock,
                    maxLeverage:
                      e?.pair?.maxLeverage !== "0"
                        ? e?.pair?.maxLeverage
                        : e?.pair?.group?.maxLeverage,
                  })),
                t
                  ? Number((0, l.formatUnits)(BigInt(t), 18))?.toFixed(4)
                  : "N/A"
              );
            };
          return {
            performTrade: W,
            closePosition: K,
            updateTp: z,
            updateSl: Z,
            updateCollateral: Y,
            getTradeMetrics: ({
              collateral: e,
              leverage: t,
              openPrice: n,
              isLong: a,
              ask: i,
              bid: r,
              mid: p,
              maxLeverage: o,
              rolloverFee: u = 0,
              fundingFee: s = 0,
              makerFeeP: d = 0,
              takerFeeP: l = 0.15,
              liqMarginThresholdP: y = 0.25,
            }) => {
              let m = e * t,
                c = (n * (e - ((y * t) / o) * e - u - s)) / (e * t);
              return {
                exposure: m,
                executionPrice: n,
                spread: ((i - r) / p) * 100,
                liquidationPrice: a ? n - c : n + c,
                collateralAtOpen: e,
                openFee: (l / 100) * m,
                closeFee: 0,
              };
            },
            cancelOpenLimitOrder: j,
            cancelOpenMarketOrder: G,
            fetchAllOrders: (0, u.useCallback)(
              async (e, t = !1) => {
                try {
                  let n = await (0, b.getTraderTradesData)(e),
                    a = await (0, b.getOrderHistory)(e),
                    i = await a?.filter(
                      (e) =>
                        !e?.isCancelled &&
                        !e?.isOpen &&
                        (e?.orderAction === "Close" ||
                          e?.orderAction === "TakeProfit" ||
                          e?.orderAction === "StopLoss" ||
                          e?.orderAction === "Liquidation")
                    );
                  if ((t ? L(i) : S(i), n)) {
                    let e = await Promise.all(
                        n?.trades?.map(async (e) => {
                          let t = await J(e);
                          return { ...e, liqPrice: t };
                        })
                      ),
                      a = n?.orders.filter((e) => e?.isPending);
                    t
                      ? (A(e), D([...n?.limits, ...a]))
                      : (k(e), N([...n?.limits, ...a]));
                  }
                  t ? V(a) : B(a);
                } catch (e) {
                  console.error("Error fetching all orders:", e);
                }
              },
              [k, N, B, S, A, D, V, L]
            ),
            fetchAllAssets: async () => {
              try {
                let e = (await (0, b.getPairsFromSubgraph)()).filter(
                  (e) => e.group?.name?.toLowerCase() !== "crypto"
                );
                O(e);
              } catch (e) {
                console.error("Error fetching meta assets:", e);
              }
            },
            fetchLiqPrice: J,
          };
        },
      ],
      646444
    );
  },
]);
