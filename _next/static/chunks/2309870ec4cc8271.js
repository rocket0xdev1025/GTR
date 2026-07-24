(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  705750,
  (e) => {
    e.v("/_next/static/media/pnl-green-bg.fb16572e.svg");
  },
  673959,
  (e) => {
    e.v("/_next/static/media/pnl-red-bg.f552e5af.svg");
  },
  516504,
  (e) => {
    e.v("/_next/static/media/pencil.263e374d.svg");
  },
  6290,
  (e) => {
    e.v("/_next/static/media/multichain.97323131.svg");
  },
  656070,
  (e) => {
    e.v("/_next/static/media/copy-address-big.986f77a8.svg");
  },
  870845,
  (e) => {
    e.v("/_next/static/media/eye.b7afe99c.svg");
  },
  591359,
  (e) => {
    e.v("/_next/static/media/dropdown-icon.07161a98.svg");
  },
  721483,
  (e) => {
    e.v("/_next/static/media/refresh.e64e5ba9.svg");
  },
  880688,
  (e) => {
    e.v("/_next/static/media/arrow-down.4e91191f.svg");
  },
  348918,
  (e) => {
    e.v("/_next/static/media/hyperliquid.16192969.svg");
  },
  488840,
  (e) => {
    e.v("/_next/static/media/table-empty-placeholder.66d60ae8.svg");
  },
  234473,
  (e) => {
    e.v("/_next/static/media/success.203508ef.svg");
  },
  969219,
  (e) => {
    e.v("/_next/static/media/fail.bda9d02e.svg");
  },
  590368,
  (e) => {
    e.v("/_next/static/media/usdc-solana.85bef6ff.svg");
  },
  237505,
  (e) => {
    e.v("/_next/static/media/usdc-arbitrum.4cbb8967.svg");
  },
  315599,
  (e) => {
    e.v("/_next/static/media/usdc-hyperliquid.edffed0f.svg");
  },
  898824,
  (e) => {
    e.v("/_next/static/media/usdc-base.7ea03e14.svg");
  },
  412913,
  (e) => {
    e.v("/_next/static/media/usdc-bsc.e2917578.svg");
  },
  792740,
  (e) => {
    e.v("/_next/static/media/usdc-monad.0c825501.svg");
  },
  61490,
  (e) => {
    e.v("/_next/static/media/usdg-robinhood.0fc708c1.svg");
  },
  707477,
  (e) => {
    e.v("/_next/static/media/usdc.53e11903.png");
  },
  597682,
  (e) => {
    "use strict";
    var t = e.i(127261);
    e.s([
      "validateWalletAddress",
      0,
      (e, s) => {
        if (!e) return { isValid: !0, error: null };
        let a = s?.toLowerCase();
        if ("solana" === a || "sol" === a)
          try {
            new t.PublicKey(e);
          } catch (e) {
            return { isValid: !1, error: "Invalid Solana address" };
          }
        else if (!/^0x[a-fA-F0-9]{40}$/.test(e)) {
          let e = s ? s.charAt(0).toUpperCase() + s.slice(1) : "";
          return {
            isValid: !1,
            error: e ? `Invalid ${e} address` : "Invalid address",
          };
        }
        return { isValid: !0, error: null };
      },
    ]);
  },
  736566,
  (e) => {
    "use strict";
    var t = e.i(843476),
      s = e.i(129277),
      a = e.i(2710);
    let l = {
      src: e.i(707477).default,
      width: 450,
      height: 450,
      blurWidth: 8,
      blurHeight: 8,
      blurDataURL:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABE0lEQVR42gEIAff+AAAAAAAKExoZM1Rzd0NsnKg0UnZ+ExwmJgEBAQEAAAAAAAkPFhY2aJyqRoLX+jpx0v83a878NGGuyxgmNzkAAQEBACI6WF5Cg9j3W4/b/2+d3P92ndj/SnjR/zBbpsIMExoaACZFcX47e9j+apfb/3+l2/+Apdv/cJva/zVqzfghOVlfABYsT1ouasv3WInZ/3Od2/+Hqdv/e6Xe/z542P8mS32JAAUMFxoZS5/DN3TV/1+O2f9gk9v/W5Hd/zl82vsZO2VtAAAAAQEHGTU+H1ew0jh52P1Agd3/QITd/StjqbwGER4fAAAAAAAAAQEBCBYqLR5IgpAsZKu+I0+FkQgVJCUAAAEAiJ1sMoT9APoAAAAASUVORK5CYII=",
    };
    var r = e.i(730210),
      i = e.i(890357),
      n = e.i(533372),
      d = e.i(22084),
      o = e.i(10982),
      c = e.i(139330),
      x = e.i(458790),
      u = e.i(638282),
      h = e.i(911450),
      m = e.i(176394),
      b = e.i(271645),
      p = e.i(597682),
      f = e.i(57159),
      g = e.i(911347),
      v = e.i(236983),
      j = e.i(133824),
      y = e.i(744125),
      N = e.i(600017),
      w = e.i(343794),
      T = e.i(142793),
      A = e.i(336005),
      S = e.i(974010),
      C = e.i(346944);
    let k = ({
      close: e,
      chain: s,
      isMobile: a,
      selectedTab: k,
      setSelectedTab: B,
    }) => {
      let [E, I] = (0, b.useState)(0),
        [P, D] = (0, b.useState)(0),
        {
          cryptoPerpsBalance: W,
          stockBalance: L,
          usdcBalance: U,
          allUsdcBalance: _,
          setAllUsdcBalances: F,
          setUsdcBalance: q,
        } = (0, i.useBalanceStore)(
          (0, C.useShallow)((e) => ({
            cryptoPerpsBalance: e.cryptoPerpsBalance,
            stockBalance: e.stockBalance,
            usdcBalance: e.usdcBalance,
            allUsdcBalance: e.allUsdcBalance,
            setAllUsdcBalances: e.setAllUsdcBalances,
            setUsdcBalance: e.setUsdcBalance,
          }))
        ),
        {
          onSendToken: V,
          getRelayQuote: M,
          convertEVMToken: R,
        } = (0, T.default)(),
        { client: H } = (0, m.useSmartWallets)(),
        { signTypedData: z } = (0, u.useSignTypedData)(),
        { wallets: $ } = (0, h.useWallets)(),
        G = $.find((e) => "privy" === e.walletClientType),
        [Q, O] = (0, b.useState)(!1),
        [Y, K] = (0, b.useState)(""),
        [Z, J] = (0, b.useState)(null),
        [X, ee] = (0, b.useState)(null),
        [et, es] = (0, b.useState)(!1),
        [ea] = (0, j.useDebouncedValue)(E, 500);
      (0, b.useEffect)(() => {
        (async () => {
          if ("hyperliquid" === s && "withdraw" === k && Number(ea) > 0) {
            es(!0);
            try {
              let e = await M({
                originChainId: 1337,
                destinationChainId: 42161,
                originWalletAddress: G?.address,
                destinationWalletAddress: H?.account.address,
                amount: Number(ea),
                destinationChain: "arbitrum",
                destinationCurrency: "",
              });
              ee(e?.steps?.[0]?.items);
            } catch (e) {
              console.error("Error fetching relay quote:", e);
            } finally {
              es(!1);
            }
          } else ee(null);
        })();
      }, [ea, s, k, G?.address, H?.account.address]);
      let el = (() => {
          switch (s) {
            case "hyperliquid":
              return W;
            case "arbitrum":
              return L;
            case "solana":
              return U;
            default:
              let e = _.find((e) => e.chain.symbol === s);
              return e ? e.balance : 0;
          }
        })(),
        er = async () => {
          let { success: e, data: t } = await (0, A.getAllUsdcBalances)();
          e && (F(t), q(t.find((e) => "solana" === e.chain.symbol).balance));
        },
        ei = (e) => {
          let { error: t } = (0, p.validateWalletAddress)(e, s);
          J(t);
        };
      (0, b.useEffect)(() => {
        Y && ("send" === k || !ed) && ei(Y);
      }, [s, k]);
      let en = async () => {
          if ("hyperliquid" === s) {
            G.switchChain(v.arbitrum.id);
            let s = (0, f.createWalletClient)({
              account: G?.address,
              chain: v.arbitrum,
              transport: (0, g.custom)(await G.getEthereumProvider()),
            });
            try {
              let a = (0, y.notifyLoadingToast)({
                message: `Initiating ${
                  "withdraw" === k ? "Withdraw" : "Transfer"
                }`,
              });
              if ("withdraw" === k && X)
                return void (await R({
                  quote: X,
                  sourceChain: "hyperliquid",
                  destinationChain: "arbitrum",
                  amount: Number(E),
                  destinationWalletAddress: H.account.address,
                  onSuccess: () => {
                    e(),
                      (0, y.notifySuccessToast)({
                        message: "Withdraw Successful",
                        icon: (0, t.jsx)(N.default, { icon: "success" }),
                        id: a,
                      }),
                      setTimeout(() => {
                        er();
                      }, 3e3);
                  },
                  onFailure: (e) => {
                    (0, y.notifyErrorToast)({
                      message: "Withdrawal failed. Try again shortly.",
                      icon: (0, t.jsx)(N.default, { icon: "fail" }),
                    });
                  },
                }));
              let l = await (0, r.withdrawUSDC)({
                type: "withdraw" === k ? "withdraw3" : "usdSend",
                wallet: s,
                amount: E,
                destinationWallet: "withdraw" === k ? H.account.address : Y,
                signTypedData: z,
              });
              "ok" === l.status
                ? (e(),
                  (0, y.notifySuccessToast)({
                    message: `${
                      "withdraw" === k ? "Withdraw" : "Transfer"
                    } Successful`,
                    icon: (0, t.jsx)(N.default, { icon: "success" }),
                    id: a,
                  }))
                : (0, y.notifyErrorToast)({
                    message: `${
                      "withdraw" === k ? "Withdraw" : "Transfer"
                    } failed. Try again shortly.`,
                    icon: (0, t.jsx)(N.default, { icon: "fail" }),
                  });
            } catch (e) {
              (0, y.notifyErrorToast)({
                message: `${
                  "withdraw" === k ? "Withdraw" : "Transfer"
                } failed. Try again shortly.`,
                icon: (0, t.jsx)(N.default, { icon: "fail" }),
              });
            }
          }
          if ("arbitrum" === s || "solana" === s) {
            O(!0);
            let a = (0, y.notifyLoadingToast)({
              message: "Initiating Withdraw",
            });
            V({
              address: Y,
              recipientAddress: Y,
              tokenAddress:
                "solana" === s
                  ? S.USDC_SOL_TOKEN_ADDRESS
                  : "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
              decimals: 6,
              chain: s,
              value: Number(E),
              onSuccess: () => {
                (0, y.notifySuccessToast)({
                  message: "Withdraw Successful",
                  icon: (0, t.jsx)(N.default, { icon: "success" }),
                  id: a,
                }),
                  setTimeout(() => {
                    er();
                  }, 3e3),
                  e();
              },
              onFailure: () => {
                (0, y.notifyErrorToast)({
                  message: "Withdrawal failed. Try again shortly.",
                  icon: (0, t.jsx)(N.default, { icon: "fail" }),
                }),
                  O(!1);
              },
            });
          }
        },
        ed = "hyperliquid" === s;
      return (0, t.jsxs)(t.Fragment, {
        children: [
          ed
            ? (0, t.jsx)("div", {
                className: "p-4 flex justify-center",
                children: (0, t.jsx)(c.SegmentedControl, {
                  data: [
                    { label: "Withdraw", value: "withdraw" },
                    { label: "Send", value: "send" },
                  ],
                  value: k,
                  onChange: (e) => B(e),
                }),
              })
            : null,
          (0, t.jsxs)("div", {
            className: "flex flex-col justify-between",
            children: [
              !a &&
                (0, t.jsx)(t.Fragment, {
                  children: ed
                    ? (0, t.jsxs)("div", {
                        className: "text-center pt-5",
                        children: [
                          (0, t.jsx)("img", {
                            src: l.src,
                            alt: "USDC",
                            className: "mx-auto",
                            width: 80,
                          }),
                          (0, t.jsxs)("div", {
                            className: "font-medium py-4",
                            children: [
                              "withdraw" === k ? "Withdraw" : "Send",
                              " USDC",
                            ],
                          }),
                        ],
                      })
                    : (0, t.jsx)("h1", {
                        className:
                          "px-4 py-5 mb-2 text-[18px] font-medium leading-[88%] border-b border-b-[#2D313C]",
                        children: "Withdraw",
                      }),
                }),
              ed &&
                (0, t.jsx)("div", {
                  className: (0, w.default)("text-xs text-slate-900 px-4", {
                    "text-center": ed,
                    "text-left": !ed,
                  }),
                  children:
                    "withdraw" === k
                      ? "USDC will be withdrawn via the Arbitrum network. A fee of $1 will be deducted from the withdrawn amount."
                      : "Send USDC to another account on the Hyperliquid L1",
                }),
              (ed && "send" === k) || !ed
                ? (0, t.jsxs)("div", {
                    className: "flex flex-col justify-between pt-4 px-4",
                    children: [
                      (0, t.jsx)("div", {
                        className: "text-xs pb-1 text-[#858DA3]",
                        children: "Address",
                      }),
                      (0, t.jsx)(d.Input, {
                        classNames: {
                          input: (0, w.default)(
                            "!border-1 border-solid h-8 font-medium placeholder:!text-sm placeholder:!text-[#858DA399]",
                            Z
                              ? "!border-red-500 !bg-red-500/10"
                              : "!border-slate-600 !bg-black/40"
                          ),
                        },
                        placeholder: s
                          ? `Enter ${
                              s?.charAt(0).toUpperCase() + s?.slice(1)
                            } Address`
                          : "Enter Address",
                        value: Y,
                        disabled: Q,
                        onChange: (e) => {
                          let t = e.target.value.replace(/\s/g, "");
                          K(t), ei(t);
                        },
                      }),
                      Z &&
                        (0, t.jsx)("div", {
                          className: "text-red-500 text-[10px] mt-1 pl-1",
                          children: Z,
                        }),
                    ],
                  })
                : null,
              (0, t.jsxs)("div", {
                className: "pt-8 px-4",
                children: [
                  (0, t.jsxs)("div", {
                    className: "flex justify-between items-center",
                    children: [
                      (0, t.jsx)("div", {
                        className: "text-xs pb-1 text-[#858DA3]",
                        children: "Amount",
                      }),
                      (0, t.jsxs)("div", {
                        className: "text-xs pb-1 text-[#858DA3]",
                        children: [
                          "Balance:",
                          " ",
                          (0, t.jsxs)("span", {
                            className: "text-ocean-900",
                            children: [
                              "$",
                              (0, S.roundedNumber)(Number(el)).toLocaleString(
                                "en-US",
                                {
                                  minimumFractionDigits: 2,
                                  maximumFractionDigits: 2,
                                }
                              ),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, t.jsx)(o.NumberInput, {
                    classNames: {
                      input:
                        "!border-1 border-solid border-slate-600 !bg-black/40 h-8 font-medium placeholder:!text-sm placeholder:!text-[#858DA399]",
                    },
                    placeholder: "Enter Amount",
                    min: 0,
                    max: el,
                    value: E || "",
                    disabled: Q,
                    decimalScale: 2,
                    clampBehavior: "strict",
                    onChange: (e) => {
                      I(Number(e)), D((Number(e) / el) * 100);
                    },
                    rightSection: (0, t.jsx)("div", {
                      className:
                        "bg-[#858DA34D] mr-8 text-xs text-white w-[100px] flex  cursor-pointer font-medium py-[5px] px-[8px] rounded-sm",
                      onClick: () => {
                        I((0, S.roundedNumber)(Number(el))), D(100);
                      },
                      children: "MAX",
                    }),
                    hideControls: !0,
                  }),
                  (0, t.jsx)("div", {
                    className: "pt-6 px-1",
                    children: (0, t.jsx)(x.Slider, {
                      color: "#00FF2B",
                      value: P,
                      size: 5,
                      min: 0,
                      max: 100,
                      marks: [
                        { value: 0, label: "0%" },
                        { value: 25, label: "25%" },
                        { value: 50, label: "50%" },
                        { value: 75, label: "75%" },
                        { value: 100, label: "100%" },
                      ],
                      classNames: {
                        mark: "hidden",
                        markLabel: "text-[12px] text-slate-900 pt-1",
                        label: "bg-[#101216]",
                        bar: "bg-gradient-to-r from-[#1f222c] to-[#02E88C] ",
                      },
                      onChange: (e) => {
                        D(e), I((0, S.roundedNumber)(Number(el) * (e / 100)));
                      },
                    }),
                  }),
                  !ed &&
                    (0, t.jsx)("div", {
                      className:
                        "bg-[#FF9C004D]/30 py-3 px-[14px] border-[0.5px] border-[#FFDC9C] rounded-[4px] flex flex-col gap-1 mt-10",
                      children: (0, t.jsxs)("div", {
                        className: "pl-2 text-xs leading-[166%]",
                        children: [
                          (0, t.jsxs)("li", {
                            children: [
                              "This will withdraw",
                              " ",
                              (0, t.jsxs)("strong", {
                                children: [
                                  "USDC (",
                                  (0, t.jsx)("span", {
                                    className: "capitalize",
                                    children: s,
                                  }),
                                  ")",
                                ],
                              }),
                              " ",
                              "to the provided address.",
                            ],
                          }),
                          (0, t.jsxs)("li", {
                            children: [
                              "Only enter a valid ",
                              (0, t.jsx)("span", {
                                className: "capitalize",
                                children: s,
                              }),
                              " ",
                              "address",
                            ],
                          }),
                          (0, t.jsxs)("li", {
                            children: [
                              "Incorrect addresses may result in",
                              " ",
                              (0, t.jsx)("strong", {
                                children: "permanent loss of funds",
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  (0, t.jsx)("div", {
                    className: (0, w.default)("pb-4", {
                      "pt-12": ed,
                      "pt-6": !ed,
                    }),
                    children: (0, t.jsx)(n.Button, {
                      color: "white",
                      fullWidth: !0,
                      className: (0, w.default)(
                        "!px-2 !py-2 text-xs hover:bg-white disabled:!bg-white/10 disabled:cursor-not-allowed",
                        { "mb-0": !ed }
                      ),
                      classNames: { label: "!text-black" },
                      disabled:
                        0 === E ||
                        Number(E) > Number(el) ||
                        Q ||
                        et ||
                        (("send" === k || !ed) && (!Y || !!Z)),
                      onClick: () => en(),
                      children: et
                        ? "Fetching Quote..."
                        : "withdraw" === k
                        ? "Withdraw"
                        : "Send",
                    }),
                  }),
                  ed &&
                    "withdraw" === k &&
                    (0, t.jsx)("div", {
                      className: "pb-[22px] text-[#858DA3] text-center text-xs",
                      children: "Withdrawals should arrive within 5 minutes",
                    }),
                ],
              }),
            ],
          }),
        ],
      });
    };
    var B = e.i(152702);
    e.s(
      [
        "default",
        0,
        ({ opened: e, close: l, chain: r }) => {
          let i = (0, B.useIsMobile)(),
            [n, d] = (0, b.useState)("withdraw");
          return i
            ? (0, t.jsx)(a.Drawer, {
                opened: e,
                onClose: l,
                position: "bottom",
                size: "57%",
                title: (0, t.jsx)("div", {
                  className: "font-semibold text-[18px]",
                  children:
                    "hyperliquid" === r
                      ? `${"withdraw" === n ? "Withdraw" : "Send"} USDC`
                      : "Withdraw",
                }),
                classNames: {
                  header: "!bg-[#16171B] !text-white",
                  body: "!p-0 !overflow-hidden bg-[#16171B]",
                  content:
                    "!bg-[#16171B] !rounded-t-2xl !border-t border-[#1F2126]",
                  close: "!text-white hover:!bg-slate-200 hover:!text-white/60",
                },
                children: (0, t.jsx)(k, {
                  close: l,
                  chain: r,
                  isMobile: i,
                  selectedTab: n,
                  setSelectedTab: d,
                }),
              })
            : (0, t.jsx)(s.Modal, {
                opened: e,
                centered: !0,
                onClose: l,
                title: null,
                classNames: {
                  header: "!hidden",
                  body: "!p-0 !overflow-hidden",
                  content: "!bg-[#16171B] !rounded-lg",
                  close: "!text-white hover:!bg-slate-200 hover:!text-white/60",
                },
                styles: { content: { border: "1px solid #1F2126" } },
                size: 444,
                children: (0, t.jsx)(k, {
                  close: l,
                  chain: r,
                  isMobile: i,
                  selectedTab: n,
                  setSelectedTab: d,
                }),
              });
        },
      ],
      736566
    );
  },
  112335,
  (e) => {
    "use strict";
    var t = e.i(843476),
      s = e.i(17024),
      a = e.i(796682),
      l = e.i(964890),
      r = e.i(890357),
      i = e.i(974010),
      n = e.i(442948),
      d = e.i(145288),
      o = e.i(646563),
      c = e.i(905142),
      x = e.i(343794),
      u = e.i(618566),
      h = e.i(271645),
      m = e.i(81341),
      b = e.i(346944),
      p = e.i(344873),
      f = e.i(393612),
      g = e.i(559516),
      v = e.i(398949),
      j = e.i(152702);
    e.s([
      "default",
      0,
      ({
        showTab: e = !0,
        variant: y,
        isSocial: N = !1,
        filterUsdc: w = !1,
      }) => {
        let T = (0, j.useIsMobile)(),
          [A, S] = (0, h.useState)(!1),
          [C, k] = (0, h.useState)("positions"),
          [B, E] = (0, h.useState)(null),
          [I, P] = (0, h.useState)(""),
          [D, { open: W, close: L }] = (0, c.useDisclosure)(!1),
          { formatPrice: U } = (0, l.useExchangePrice)(),
          _ = (0, u.useRouter)(),
          { holdings: F } = (0, r.useProfileStore)(
            (0, b.useShallow)((e) => ({ holdings: e.holdings }))
          ),
          { socialHoldings: q } = (0, f.useSocialPortfolioStore)(
            (0, b.useShallow)((e) => ({ socialHoldings: e.socialHoldings }))
          ),
          V = (N ? q : F)?.holdings;
        w && (V = V?.filter((e) => e.symbol?.toUpperCase() !== "USDC"));
        let M = V?.map((e) => {
          let l = 0.01 > Math.abs(e?.gains),
            r = e?.gains >= 0.01;
          return (0, t.jsxs)(
            d.Table.Tr,
            {
              className: "hover:bg-slate-200",
              children: [
                (0, t.jsx)(d.Table.Td, {
                  className: "cursor-pointer",
                  onClick: () =>
                    _.push(`/token/${e.address}?chain=${e.chainSymbol}`),
                  children: (0, t.jsxs)("div", {
                    className: "flex items-center gap-3 pl-2",
                    children: [
                      (0, t.jsx)(s.default, {
                        chainIcon: e?.chainIcon,
                        icon: e?.icon,
                        iconClassName: "!w-6 !h-6",
                        chainIconClassName: "!w-3 !h-3",
                      }),
                      (0, t.jsxs)("div", {
                        className: "flex flex-col justify-center gap-0.5",
                        children: [
                          (0, t.jsxs)("div", {
                            className:
                              "font-bold text-sm flex items-center gap-1.5",
                            children: [
                              (0, t.jsx)("div", { children: e?.symbol }),
                              e?.verified ? (0, t.jsx)(a.default, {}) : null,
                            ],
                          }),
                          (0, t.jsx)("div", {
                            className:
                              "text-xs opacity-70 text-slate-900 font-medium truncate pt-0.5 leading-[100%] h-4",
                            title: e.name,
                            children: e.name,
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                (0, t.jsxs)(d.Table.Td, {
                  className: "font-medium",
                  children: [
                    "$",
                    (0, p.formatCompactZeroNotation)(e.averageBuyPrice),
                  ],
                }),
                (0, t.jsx)(d.Table.Td, {
                  className: "font-medium",
                  children: (0, i.formatBigNumber)(
                    Number((0, i.formatNumber)(e.quantity))
                  ),
                }),
                (0, t.jsxs)(d.Table.Td, {
                  className: (0, x.default)(
                    {
                      "!text-grass": r,
                      "!text-blood": !r,
                      "!text-neutral-400": l,
                    },
                    "font-medium"
                  ),
                  children: [
                    (0, t.jsx)("span", {
                      className: "min-w-2 inline-block",
                      children: r ? "+" : "",
                    }),
                    (0, i.convertIntlV2)(l ? 0 : e?.gains, !1, !0, 2),
                    " (",
                    Math.abs(e.gainsPercentage).toFixed(2),
                    "%)",
                  ],
                }),
                (0, t.jsx)(d.Table.Td, {
                  className: "font-medium",
                  children: U(
                    (0, i.roundedNumber)(e.quantity * e.currentPrice)
                  ),
                }),
              ],
            },
            e.address
          );
        });
        return (0, t.jsxs)("div", {
          children: [
            e
              ? (0, t.jsx)(o.Tabs, {
                  value: C,
                  onChange: k,
                  classNames: {
                    root: "flex flex-col flex-1",
                    tab: "!h-9 !px-4 !py-0 !text-xs !font-medium !bg-transparent hover:bg-slate-600/50 hover:rounded-none data-[active=true]:tab-center-border",
                    tabLabel: "!text-xs !font-medium",
                    list: "!p-0 !h-9",
                    panel: "overflow-hidden",
                  },
                  children: (0, t.jsx)(o.Tabs.List, {
                    children: (0, t.jsx)(o.Tabs.Tab, {
                      value: "positions",
                      className:
                        "positions" === C
                          ? "!bg-slate-600/50"
                          : "text-slate-900 hover:text-white !bg-container-background border-b-2 border-solid border-ash hover:border-ash",
                      children: "Holdings",
                    }),
                  }),
                })
              : null,
            "positions" === C
              ? (0, t.jsxs)("div", {
                  className:
                    "gtr" === y
                      ? "min-h-[300px] max-h-[500px] overflow-y-auto flex flex-col rounded-xl border-1 border-neutral-900 "
                      : "min-h-[300px] max-h-[300px] md:min-h-[calc(100vh-491px)] md:max-h-[calc(100vh-491px)] overflow-y-auto flex flex-col",
                  children: [
                    T
                      ? (0, t.jsx)("div", {
                          className: "flex flex-col gap-3 p-2 pb-16",
                          children: V?.map((e, l) => {
                            let r, n, d;
                            return (
                              (r = 0.01 > Math.abs(e?.gains)),
                              (n = e?.gains >= 0.01),
                              (d = e.quantity * e.currentPrice),
                              (0, t.jsxs)(
                                "div",
                                {
                                  className:
                                    "flex flex-col gap-4 py-4 px-4 rounded-xl bg-neutral-900 border border-neutral-800 shadow-lg",
                                  children: [
                                    (0, t.jsxs)("div", {
                                      className:
                                        "flex justify-between items-start",
                                      children: [
                                        (0, t.jsxs)("div", {
                                          className:
                                            "flex items-center gap-3 cursor-pointer",
                                          onClick: () =>
                                            _.push(
                                              `/token/${e.address}?chain=${e.chainSymbol}`
                                            ),
                                          children: [
                                            (0, t.jsx)(s.default, {
                                              chainIcon: e?.chainIcon,
                                              icon: e?.icon,
                                              iconClassName: "!w-8 !h-8",
                                              chainIconClassName: "!w-4 !h-4",
                                            }),
                                            (0, t.jsxs)("div", {
                                              className: "flex flex-col",
                                              children: [
                                                (0, t.jsxs)("div", {
                                                  className:
                                                    "font-bold text-base flex items-center gap-1.5 text-white",
                                                  children: [
                                                    e?.symbol,
                                                    e?.verified &&
                                                      (0, t.jsx)(a.default, {}),
                                                  ],
                                                }),
                                                (0, t.jsx)("div", {
                                                  className:
                                                    "text-xs text-neutral-500 font-medium truncate",
                                                  children: e.name,
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        !N &&
                                          (0, t.jsx)("div", {
                                            className: (0, x.default)(
                                              "flex items-center justify-center w-8 h-8 rounded-lg border transition-all duration-300",
                                              {
                                                "cursor-pointer bg-brand-blue/10 border-brand-blue/30 hover:bg-brand-blue":
                                                  e.uniqueId,
                                                "cursor-not-allowed bg-neutral-800 border-neutral-700 opacity-50":
                                                  !e.uniqueId,
                                              }
                                            ),
                                            onClick: () => {
                                              e.uniqueId &&
                                                (E({
                                                  ...e,
                                                  coin: e.symbol,
                                                  price: e.averageBuyPrice,
                                                }),
                                                P(e.uniqueId),
                                                W());
                                            },
                                            children: (0, t.jsx)(
                                              g.IconPencilPlus,
                                              {
                                                size: 16,
                                                className: (0, x.default)({
                                                  "text-brand-blue group-hover:text-white":
                                                    e.uniqueId,
                                                  "text-neutral-600":
                                                    !e.uniqueId,
                                                }),
                                              }
                                            ),
                                          }),
                                      ],
                                    }),
                                    (0, t.jsxs)("div", {
                                      className:
                                        "grid grid-cols-2 gap-y-4 gap-x-2",
                                      children: [
                                        (0, t.jsxs)("div", {
                                          className: "flex flex-col gap-0.5",
                                          children: [
                                            (0, t.jsx)("span", {
                                              className:
                                                "text-neutral-500 text-xs font-normal",
                                              children: "Entry Price",
                                            }),
                                            (0, t.jsxs)("span", {
                                              className:
                                                "text-white text-xs font-medium",
                                              children: [
                                                "$",
                                                (0,
                                                p.formatCompactZeroNotation)(
                                                  e.averageBuyPrice
                                                ),
                                              ],
                                            }),
                                          ],
                                        }),
                                        (0, t.jsxs)("div", {
                                          className: "flex flex-col gap-0.5",
                                          children: [
                                            (0, t.jsx)("span", {
                                              className:
                                                "text-neutral-500 text-xs font-normal",
                                              children: "Quantity",
                                            }),
                                            (0, t.jsx)("span", {
                                              className:
                                                "text-white text-xs font-medium",
                                              children: (0, i.formatBigNumber)(
                                                Number(
                                                  (0, i.formatNumber)(
                                                    e.quantity
                                                  )
                                                )
                                              ),
                                            }),
                                          ],
                                        }),
                                        (0, t.jsxs)("div", {
                                          className: "flex flex-col gap-0.5",
                                          children: [
                                            (0, t.jsx)("span", {
                                              className:
                                                "text-neutral-500 text-xs font-normal",
                                              children: "Gain",
                                            }),
                                            (0, t.jsxs)("span", {
                                              className: (0, x.default)(
                                                "text-xs font-medium",
                                                {
                                                  "text-grass": n,
                                                  "text-blood": !n,
                                                  "text-neutral-400": r,
                                                }
                                              ),
                                              children: [
                                                n ? "+" : "",
                                                (0, i.convertIntlV2)(
                                                  r ? 0 : e?.gains,
                                                  !1,
                                                  !0,
                                                  2
                                                ),
                                                " (",
                                                Math.abs(
                                                  e.gainsPercentage
                                                ).toFixed(2),
                                                "%)",
                                              ],
                                            }),
                                          ],
                                        }),
                                        (0, t.jsxs)("div", {
                                          className: "flex flex-col gap-0.5",
                                          children: [
                                            (0, t.jsx)("span", {
                                              className:
                                                "text-neutral-500 text-xs font-normal",
                                              children: "Total Worth",
                                            }),
                                            (0, t.jsx)("span", {
                                              className:
                                                "text-brand-blue text-xs font-medium",
                                              children: U(
                                                (0, i.roundedNumber)(d)
                                              ),
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                },
                                e.address || l
                              )
                            );
                          }),
                        })
                      : (0, t.jsxs)(d.Table, {
                          classNames:
                            "gtr" === y
                              ? {
                                  table:
                                    "min-w-[900px] rounded-lg overflow-hidden border-1 border-neutral-900",
                                  thead:
                                    "!bg-neutral-950 hover:!bg-neutral-950 uppercase",
                                  th: "text-xs font-normal !bg-neutral-950 hover:!bg-neutral-950 text-neutral-400 h-10",
                                  tbody: "bg-white/5",
                                  td: "text-neutral-300 text-sm py-4 font-semibold",
                                  tr: "border-b-1 border-neutral-800 last:border-b-0 hover:bg-white/5 transition-all duration-400 even:bg-neutral-950 odd:bg-[#141414]",
                                }
                              : {
                                  table: "min-w-[1200px] overflow-x-scroll",
                                  th: "!pl-0.5 !py-2 !font-normal !text-xs !text-slate-900 !border-ash !border-b !bg-container-background",
                                  td: "!pl-0.5 !py-1 !text-xs",
                                  tr: "border-b-1 !border-[#1D212A]",
                                },
                          className: "gtr" === y ? "" : "!p-1",
                          stickyHeader: !0,
                          children: [
                            (0, t.jsx)(d.Table.Thead, {
                              children: (0, t.jsxs)(d.Table.Tr, {
                                children: [
                                  (0, t.jsx)(d.Table.Th, {
                                    children: (0, t.jsx)("div", {
                                      className: "gtr" === y ? "" : "ml-2",
                                      children: "Assets",
                                    }),
                                  }),
                                  (0, t.jsx)(d.Table.Th, {
                                    children: "Entry Price",
                                  }),
                                  (0, t.jsx)(d.Table.Th, {
                                    children: "Quantity",
                                  }),
                                  (0, t.jsx)(d.Table.Th, { children: "Gain" }),
                                  (0, t.jsx)(d.Table.Th, {
                                    children: "Total Worth",
                                  }),
                                ],
                              }),
                            }),
                            !A && (0, t.jsx)(d.Table.Tbody, { children: M }),
                          ],
                        }),
                    A
                      ? (0, t.jsxs)("div", {
                          className:
                            "flex flex-col items-center gap-2 px-5 text-xs  py-20",
                          children: [
                            (0, t.jsx)(n.Loader, {
                              size: "xs",
                              color: "#ffffff",
                            }),
                            (0, t.jsx)("div", { children: "Loading..." }),
                          ],
                        })
                      : null,
                    V?.length !== 0 || A
                      ? null
                      : (0, t.jsxs)("div", {
                          className:
                            "flex flex-col items-center justify-center",
                          children: [
                            (0, t.jsx)(m.default, { text: "No Positions yet" }),
                            (0, t.jsx)("div", {
                              className:
                                "underline underline-offset-2 cursor-pointer text-xs",
                              onClick: () => _.push("/crypto"),
                              children: "Explore new tokens",
                            }),
                          ],
                        }),
                  ],
                })
              : null,
            (0, t.jsx)(v.default, {
              opened: D,
              onClose: () => {
                L(), P(""), E(null);
              },
              token: B,
              isLong: !0,
              tradeSource: "ONCHAIN",
              pnl: B?.gains,
              pnlPercentage: B?.gainsPercentage,
              entryPrice: B?.averageBuyPrice,
              uniqueTradeId: I,
              onSaveSuccess: () => {
                _.push("/feeds"), P(""), E(null);
              },
            }),
          ],
        });
      },
    ]);
  },
  35777,
  (e) => {
    "use strict";
    var t = e.i(843476),
      s = e.i(17024),
      a = e.i(964890),
      l = e.i(336005),
      r = e.i(974010),
      i = e.i(533372),
      n = e.i(442948),
      d = e.i(145288),
      o = e.i(646563),
      c = e.i(343794),
      x = e.i(618566),
      u = e.i(271645),
      h = e.i(81341);
    e.s([
      "default",
      0,
      ({ showTab: e = !0, variant: m, isSocial: b, username: p }) => {
        let [f, g] = (0, u.useState)([]),
          [v, j] = (0, u.useState)(!1),
          { formatPrice: y } = (0, a.useExchangePrice)(),
          [N, w] = (0, u.useState)(1),
          T = (0, x.useRouter)(),
          [A, S] = (0, u.useState)(!0),
          [C, k] = (0, u.useState)("activities"),
          B = async () => {
            f?.length || j(!0);
            try {
              let {
                data: { transactions: e, hasNextPage: t },
              } = await (0, l.getTokenOrderHistory)({
                page: N,
                userName: b ? p : void 0,
              });
              g((t) => [...t, ...e]), S(t), t && w((e) => e + 1);
            } catch (e) {
              console.log(e);
            } finally {
              j(!1);
            }
          };
        return (
          (0, u.useEffect)(() => {
            B();
          }, []),
          (0, t.jsxs)(t.Fragment, {
            children: [
              e
                ? (0, t.jsx)("div", {
                    className: "flex justify-between items-center",
                    children: (0, t.jsx)(o.Tabs, {
                      value: C,
                      onChange: k,
                      classNames: {
                        root: "flex flex-col flex-1",
                        tab: "!h-9 !px-4 !py-0 !text-xs !font-medium !bg-transparent hover:bg-slate-600/50 hover:rounded-none data-[active=true]:tab-center-border",
                        tabLabel: "!text-xs !font-medium",
                        list: "!p-0 !h-9",
                        panel: "overflow-hidden",
                      },
                      children: (0, t.jsx)(o.Tabs.List, {
                        children: (0, t.jsx)(o.Tabs.Tab, {
                          value: "activities",
                          className:
                            "activities" === C
                              ? "!bg-slate-600/50"
                              : "text-slate-900 hover:text-white !bg-container-background border-b-2 border-solid border-ash hover:border-ash",
                          children: "Activities",
                        }),
                      }),
                    }),
                  })
                : null,
              (0, t.jsxs)("div", {
                className:
                  "gtr" === m
                    ? "min-h-[300px] max-h-[500px] overflow-y-auto rounded-xl border-1 border-neutral-900 "
                    : "min-h-[calc(100vh-491px)] max-h-[calc(100vh-491px)] overflow-y-auto",
                children: [
                  (0, t.jsxs)(d.Table, {
                    classNames:
                      "gtr" === m
                        ? {
                            table:
                              "rounded-lg overflow-hidden border-1 border-neutral-900",
                            thead:
                              "!bg-neutral-950 hover:!bg-neutral-950 uppercase",
                            th: "text-xs font-normal !bg-neutral-950 hover:!bg-neutral-950 text-neutral-400 h-10",
                            tbody: "bg-white/5",
                            td: "text-neutral-300 text-sm py-4 font-semibold",
                            tr: "border-b-1 border-neutral-800 last:border-b-0 hover:bg-white/5 transition-all duration-400 even:bg-neutral-950 odd:bg-[#141414]",
                          }
                        : {
                            table: "min-w-[1200px] overflow-x-scroll",
                            th: "!pl-0.5 !py-2 !font-normal !text-xs !text-slate-900 !border-ash !border-b !bg-container-background",
                            td: "!pl-0.5 !py-1 !pb-1.5 !text-xs",
                            tr: "border-b-1 !border-[#1D212A]",
                          },
                    className: "gtr" === m ? "" : "!p-1",
                    stickyHeader: !0,
                    children: [
                      (0, t.jsx)(d.Table.Thead, {
                        children: (0, t.jsxs)(d.Table.Tr, {
                          children: [
                            (0, t.jsx)(d.Table.Th, {
                              className: "gtr" === m ? "" : "w-[150px]",
                              children: (0, t.jsx)("div", {
                                className: "gtr" === m ? "" : "ml-2",
                                children: "Assets",
                              }),
                            }),
                            (0, t.jsx)(d.Table.Th, { children: "Action" }),
                            (0, t.jsx)(d.Table.Th, { children: "Amount" }),
                          ],
                        }),
                      }),
                      f.length
                        ? (0, t.jsx)(d.Table.Tbody, {
                            children: f.map((e, a) => {
                              let l;
                              return (0, t.jsxs)(
                                d.Table.Tr,
                                {
                                  className: "hover:bg-slate-200",
                                  children: [
                                    (0, t.jsx)(d.Table.Td, {
                                      className: "cursor-pointer",
                                      children: (0, t.jsxs)("div", {
                                        className:
                                          "flex items-center gap-3 pl-2",
                                        onClick: () =>
                                          T.push(
                                            `/token/${e?.token?.address}?chain=${e?.chain?.symbol}`
                                          ),
                                        children: [
                                          (0, t.jsx)(s.default, {
                                            chainIcon: e?.chain.icon,
                                            icon: e?.token.icon,
                                            iconClassName: "!w-6 !h-6",
                                            chainIconClassName: "!w-3 !h-3",
                                          }),
                                          (0, t.jsxs)("div", {
                                            className: "max-w-[100px]",
                                            children: [
                                              (0, t.jsx)("div", {
                                                className:
                                                  "font-bold text-sm flex items-center gap-4",
                                                children: (0, t.jsx)("div", {
                                                  children: e?.token?.symbol,
                                                }),
                                              }),
                                              (0, t.jsx)("div", {
                                                className:
                                                  "text-xs opacity-70 text-slate-900 font-medium truncate",
                                                title: e?.token?.name,
                                                children: e?.token?.name,
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    }),
                                    (0, t.jsx)(d.Table.Td, {
                                      className: "",
                                      children: (0, t.jsxs)("span", {
                                        className: (0, c.default)(
                                          "py-0.5 border rounded-sm px-[6px] text-2xs",
                                          {
                                            "text-grass border-grass/40":
                                              (("BRIDGE" === e.type ||
                                                "SWAP" === e.type) &&
                                                e?.isBuy) ||
                                              "RECEIVE" === e.type,
                                            "bg-grass/20":
                                              (("BRIDGE" === e.type ||
                                                "SWAP" === e.type) &&
                                                e?.isBuy) ||
                                              "RECEIVE" === e.type,
                                            "text-blood border-blood/40":
                                              (("BRIDGE" === e.type ||
                                                "SWAP" === e.type) &&
                                                !e?.isBuy) ||
                                              "SEND" === e.type,
                                            "bg-blood/20":
                                              (("BRIDGE" === e.type ||
                                                "SWAP" === e.type) &&
                                                !e?.isBuy) ||
                                              "SEND" === e.type,
                                          }
                                        ),
                                        children: [
                                          ("BRIDGE" === e.type ||
                                            "SWAP" === e.type) &&
                                          e?.isBuy
                                            ? "BUY"
                                            : null,
                                          ("BRIDGE" !== e.type &&
                                            "SWAP" !== e.type) ||
                                          e?.isBuy
                                            ? null
                                            : "SELL",
                                          "BRIDGE" !== e.type &&
                                          "SWAP" !== e.type
                                            ? e?.type
                                            : null,
                                        ],
                                      }),
                                    }),
                                    (0, t.jsx)(d.Table.Td, {
                                      className: "font-semibold",
                                      children: y(
                                        (0, r.formatNumber)(
                                          Number(
                                            ((l =
                                              Number(e?.inputQuantity) *
                                              Number(e?.tokenPrice)),
                                            Number(
                                              (l =
                                                e?.type === "SEND" ||
                                                e?.type === "RECEIVE"
                                                  ? Number(e?.inputQuantity) *
                                                    Number(e?.tokenPrice)
                                                  : e?.isBuy
                                                  ? Number(e?.outputQuantity) *
                                                    Number(e?.tokenPrice)
                                                  : Number(e?.inputQuantity) *
                                                    Number(e?.tokenPrice))
                                            ) > 1
                                              ? l.toFixed(2)
                                              : l?.toFixed(6))
                                          )
                                        )
                                      ),
                                    }),
                                  ],
                                },
                                a
                              );
                            }),
                          })
                        : null,
                    ],
                  }),
                  v && 0 === f.length
                    ? (0, t.jsxs)("div", {
                        className:
                          "flex flex-col items-center gap-2 px-5 text-xs  py-20",
                        children: [
                          (0, t.jsx)(n.Loader, {
                            size: "xs",
                            color: "#ffffff",
                          }),
                          (0, t.jsx)("div", { children: "Loading..." }),
                        ],
                      })
                    : null,
                  !b && f.length > 0 && A
                    ? (0, t.jsx)("div", {
                        className: "flex justify-center items-center pt-4",
                        children: (0, t.jsx)(i.Button, {
                          color: "white",
                          className: (0, c.default)(
                            "!text-black !bg-white !opacity-100",
                            { "!opacity-70": v }
                          ),
                          onClick: async () => {
                            v || (j(!0), B(), j(!1));
                          },
                          children: v
                            ? (0, t.jsxs)("div", {
                                className: "flex items-center gap-2",
                                children: [
                                  (0, t.jsx)(n.Loader, {
                                    size: "xs",
                                    color: "black",
                                  }),
                                  (0, t.jsx)("div", { children: "Loading..." }),
                                ],
                              })
                            : "Load More..",
                        }),
                      })
                    : null,
                  v || 0 !== f.length
                    ? null
                    : (0, t.jsx)("div", {
                        className: "flex items-center justify-center",
                        children: (0, t.jsx)(h.default, {
                          text: "No Activities yet",
                        }),
                      }),
                ],
              }),
            ],
          })
        );
      },
    ]);
  },
  943719,
  (e) => {
    "use strict";
    var t = e.i(843476),
      s = e.i(271645),
      a = e.i(903032),
      l = e.i(974010),
      r = e.i(343794);
    e.s([
      "default",
      0,
      ({
        color: e,
        data: i,
        setPriceValue: n,
        height: d = 300,
        width: o = "95%",
        textColor: c = "black",
        showCrossHairTooltip: x = !1,
      }) => {
        let u,
          h,
          m,
          b,
          p = (0, s.useRef)(null),
          [f, g] = (0, s.useState)(null);
        return (
          (0, s.useEffect)(() => {
            if (i.length) {
              let t,
                s,
                r,
                o = {
                  layout: {
                    background: {
                      type: a.ColorType.Solid,
                      color: "transparent",
                    },
                    textColor: c,
                  },
                  width: p.current ? p.current.clientWidth : 0,
                  height: d,
                  leftPriceScale: {
                    visible: !1,
                    borderVisible: !1,
                    scaleMargins: { top: 0, bottom: 0 },
                    tickMarkFormatter: null,
                    labelVisible: !1,
                  },
                  rightPriceScale: { visible: !1, labelVisible: !1 },
                  timeScale: {
                    borderVisible: !1,
                    scaleMargins: { top: 0, bottom: 0 },
                    zoomEnabled: !1,
                    scrollEnabled: !1,
                    timeVisible: !0,
                    secondsVisible: !1,
                    position: "top",
                  },
                  crosshair: {
                    horzLine: { visible: !1, labelVisible: !1 },
                    vertLine: { width: 0.1, labelVisible: !1 },
                  },
                  grid: {
                    vertLines: { visible: !1 },
                    horzLines: { visible: !1 },
                  },
                  handleScroll: {
                    horzTouchDrag: !1,
                    mouseWheel: !1,
                    pressedMouseMove: !1,
                  },
                  handleScale: {
                    axisPressedMouseMove: !1,
                    mouseWheel: !1,
                    pinch: !1,
                  },
                },
                x = (0, a.createChart)(p.current, o),
                u = x.addAreaSeries({
                  topColor: `${e}55`,
                  bottomColor: `${e}00`,
                  lineColor: e,
                  lineWidth: 2,
                  priceLineVisible: !1,
                  lastValueVisible: !1,
                }),
                h =
                  ((t = i.map((e) => ({
                    time: Math.floor(new Date(e.time).getTime() / 1e3),
                    value: e.value,
                  }))),
                  (s = []),
                  (r = new Set()),
                  t.forEach((e) => {
                    let t = e.time;
                    r.has(t) || (r.add(t), s.push(e));
                  }),
                  s.sort((e, t) => e.time - t.time));
              return (
                u?.setData(h),
                x.subscribeCrosshairMove((e) => {
                  let t = h.find((t) => t.time === e.time);
                  t ? n((0, l.formatNumber)(t.value)) : n(0);
                }),
                x.timeScale().fitContent(),
                x.subscribeCrosshairMove((e) => {
                  if (e && e.time && e.point) {
                    let t = h.find((t) => t.time === e.time);
                    t
                      ? g({
                          price: t.value,
                          x: e.point.x,
                          y: e.point.y,
                          time: t.time,
                        })
                      : g(null);
                  } else g(null);
                }),
                () => {
                  x.remove();
                }
              );
            }
          }, [i.length]),
          (0, t.jsxs)("div", {
            style: { height: d, width: o, position: "relative" },
            children: [
              (0, t.jsx)("div", { ref: p }),
              x
                ? f &&
                  p.current &&
                  (p.current.getBoundingClientRect(),
                  (u = p.current.clientWidth),
                  (h = p.current.clientHeight),
                  (m = f.x + 10),
                  (b = f.y - 20),
                  m + 180 > u && (m = f.x - 180 - 10),
                  m < 0 && (m = 0),
                  b + 60 > h && (b = f.y - 60 - 10),
                  b < 0 && (b = 0),
                  (0, t.jsxs)("div", {
                    style: {
                      position: "absolute",
                      left: m,
                      top: b,
                      background:
                        "linear-gradient(180deg, #101014 -28.95%, #000 105.92%)",
                      boxShadow: "0px 12px 28px 0px rgba(0, 0, 0, 0.25)",
                      pointerEvents: "none",
                      zIndex: 10,
                      whiteSpace: "nowrap",
                      width: 180,
                      minHeight: 60,
                    },
                    className: "p-4 rounded-lg",
                    children: [
                      (0, t.jsxs)("div", {
                        className: (0, r.default)(
                          "font-medium text-lg truncate",
                          {
                            "text-blood": f.price < 0,
                            "text-grass": f.price > 0,
                            "text-white": 0 === f.price,
                          }
                        ),
                        children: [
                          f.price < 0 ? "-" : "",
                          "$",
                          (0, l.formatBigNumber)(Math.abs(f.price)?.toFixed(2)),
                        ],
                      }),
                      (0, t.jsx)("div", {
                        className: "text-sm text-[#A4ABC1]",
                        children:
                          f.time &&
                          new Date(1e3 * f.time)
                            .toLocaleString("en-GB", {
                              day: "numeric",
                              month: "short",
                              year: "numeric",
                              hour: "2-digit",
                              minute: "2-digit",
                              hour12: !0,
                            })
                            .replace(/am|pm/i, (e) => e.toUpperCase()),
                      }),
                    ],
                  }))
                : null,
            ],
          })
        );
      },
    ]);
  },
  599926,
  934597,
  (e) => {
    "use strict";
    var t = e.i(843476),
      s = e.i(17024),
      a = e.i(796682),
      l = e.i(964890),
      r = e.i(689861),
      i = e.i(890357),
      n = e.i(974010),
      d = e.i(442948),
      o = e.i(145288),
      c = e.i(646563),
      x = e.i(541473),
      u = e.i(343794),
      h = e.i(618566),
      m = e.i(271645),
      b = e.i(81341),
      p = e.i(346944);
    e.s(
      [
        "default",
        0,
        ({ showTab: e = !0, variant: f }) => {
          let { ready: g, authenticated: v } = (0, x.usePrivy)(),
            [j, y] = (0, m.useState)(!1),
            [N, w] = (0, m.useState)("positions"),
            { formatPrice: T } = (0, l.useExchangePrice)(),
            A = (0, h.useRouter)(),
            {
              stockHoldings: { holdings: S },
              setStockHoldings: C,
            } = (0, i.useProfileStore)(
              (0, p.useShallow)((e) => ({
                stockHoldings: e.stockHoldings,
                setStockHoldings: e.setStockHoldings,
              }))
            ),
            k = async () => {
              S?.length || y(!0);
              let { data: e, success: t } = await (0, r.getStockHoldings)();
              t && C(e), y(!1);
            };
          (0, m.useEffect)(() => {
            g && v && k();
          }, [g, v]);
          let B = S?.map((e) =>
            (0, t.jsxs)(
              o.Table.Tr,
              {
                className: "hover:bg-slate-200",
                children: [
                  (0, t.jsx)(o.Table.Td, {
                    className: "cursor-pointer",
                    onClick: () => A.push(`/stocks/${e?.stockInfo?.symbol}`),
                    children: (0, t.jsxs)("div", {
                      className: "flex items-center gap-3 pl-2 py-1",
                      children: [
                        (0, t.jsx)(s.default, {
                          icon: e?.stockInfo?.logoUrl,
                          iconClassName: "!w-6 !h-6",
                        }),
                        (0, t.jsxs)("div", {
                          className:
                            "flex flex-col justify-center gap-0.5 max-w-[120px] truncate",
                          children: [
                            (0, t.jsxs)("div", {
                              className:
                                "font-bold text-sm flex items-center gap-1.5",
                              children: [
                                (0, t.jsx)("div", {
                                  title: e?.stockInfo?.name,
                                  children: e?.stockInfo?.symbol,
                                }),
                                e?.verified ? (0, t.jsx)(a.default, {}) : null,
                              ],
                            }),
                            (0, t.jsx)("div", {
                              className:
                                "text-xs opacity-70 text-slate-900 font-medium truncate pt-0.5 leading-[100%] h-4",
                              title: e?.stockInfo?.name,
                              children: e?.stockInfo?.name,
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  (0, t.jsx)(o.Table.Td, {
                    className: "font-medium",
                    children: T((0, n.formatNumber)(e?.averageBuyPrice)),
                  }),
                  (0, t.jsx)(o.Table.Td, {
                    className: "font-medium",
                    children: e?.quantity.toFixed(2),
                  }),
                  (0, t.jsxs)(o.Table.Td, {
                    className: (0, u.default)(
                      {
                        "text-grass": e.gainsPercentage > 0,
                        "text-blood": e.gainsPercentage < 0,
                      },
                      "font-medium"
                    ),
                    children: [
                      e.gainsPercentage < 0 ? "-" : "",
                      " ",
                      T(
                        Math.abs(e.gains).toFixed(
                          0.1 > Math.abs(e?.gains) ? 4 : 2
                        )
                      ),
                    ],
                  }),
                  (0, t.jsx)(o.Table.Td, {
                    className: "font-medium",
                    children: T(
                      (e.quantity * e?.stockInfo?.currentPrice).toFixed(2)
                    ),
                  }),
                ],
              },
              e?._id
            )
          );
          return (0, t.jsxs)("div", {
            children: [
              e
                ? (0, t.jsx)(c.Tabs, {
                    value: N,
                    onChange: w,
                    classNames: {
                      root: "flex flex-col flex-1",
                      tab: "!h-9 !px-4 !py-0 !text-xs !font-medium !bg-transparent hover:bg-slate-600/50 hover:rounded-none data-[active=true]:tab-center-border",
                      tabLabel: "!text-xs !font-medium",
                      list: "!p-0 !h-9",
                      panel: "overflow-hidden",
                    },
                    children: (0, t.jsx)(c.Tabs.List, {
                      children: (0, t.jsx)(c.Tabs.Tab, {
                        value: "positions",
                        className:
                          "positions" === N
                            ? "!bg-slate-600/50"
                            : "text-slate-900 hover:text-white !bg-container-background border-b-2 border-solid border-ash hover:border-ash",
                        children: "Positions",
                      }),
                    }),
                  })
                : null,
              "positions" === N
                ? (0, t.jsxs)("div", {
                    className:
                      "gtr" === f
                        ? "min-h-[300px] max-h-[500px] overflow-y-auto flex flex-col rounded-xl border-1 border-neutral-900"
                        : "min-h-[300px] max-h-[300px] md:min-h-[calc(100vh-491px)] md:max-h-[calc(100vh-491px)] overflow-y-auto flex flex-col",
                    children: [
                      " ",
                      (0, t.jsxs)(o.Table, {
                        classNames:
                          "gtr" === f
                            ? {
                                table:
                                  "rounded-lg overflow-hidden border-1 border-neutral-900",
                                thead:
                                  "!bg-neutral-950 hover:!bg-neutral-950 uppercase",
                                th: "text-xs font-normal !bg-neutral-950 hover:!bg-neutral-950 text-neutral-400 h-10",
                                tbody: "bg-white/5",
                                td: "text-neutral-300 text-sm py-4 font-semibold",
                                tr: "border-b-1 border-neutral-800 last:border-b-0 hover:bg-white/5 transition-all duration-400 even:bg-neutral-950 odd:bg-[#141414]",
                              }
                            : {
                                table: "min-w-[1200px] overflow-x-scroll",
                                th: "!pl-0.5 !py-2 !font-normal !text-xs !text-slate-900 !border-ash !border-b !bg-container-background",
                                td: "!pl-0.5 !py-0 !text-xs",
                                tr: "border-b-1 !border-[#1D212A]",
                              },
                        className: "gtr" === f ? "" : "!p-1",
                        stickyHeader: !0,
                        children: [
                          (0, t.jsx)(o.Table.Thead, {
                            children: (0, t.jsxs)(o.Table.Tr, {
                              children: [
                                (0, t.jsx)(o.Table.Th, {
                                  children: (0, t.jsx)("div", {
                                    className: "gtr" === f ? "" : "ml-2",
                                    children: "Assets",
                                  }),
                                }),
                                (0, t.jsx)(o.Table.Th, {
                                  children: "Avg. Buy Price",
                                }),
                                (0, t.jsx)(o.Table.Th, {
                                  children: "Quantity",
                                }),
                                (0, t.jsx)(o.Table.Th, { children: "Gain" }),
                                (0, t.jsx)(o.Table.Th, {
                                  children: "Total Worth",
                                }),
                              ],
                            }),
                          }),
                          !j && (0, t.jsx)(o.Table.Tbody, { children: B }),
                        ],
                      }),
                      j
                        ? (0, t.jsxs)("div", {
                            className:
                              "flex flex-col items-center gap-2 px-5 text-xs  py-20",
                            children: [
                              (0, t.jsx)(d.Loader, {
                                size: "xs",
                                color: "#ffffff",
                              }),
                              (0, t.jsx)("div", { children: "Loading..." }),
                            ],
                          })
                        : null,
                      S?.length !== 0 || j
                        ? null
                        : (0, t.jsxs)("div", {
                            className:
                              "flex flex-col items-center justify-center h-[400px]",
                            children: [
                              (0, t.jsx)(b.default, {
                                text: "No Positions yet",
                              }),
                              (0, t.jsx)("div", {
                                className:
                                  "underline underline-offset-2 cursor-pointer text-xs",
                                onClick: () => A.push("/stocks"),
                                children: "Explore new stocks",
                              }),
                            ],
                          }),
                    ],
                  })
                : null,
            ],
          });
        },
      ],
      599926
    ),
      e.s(
        [
          "default",
          0,
          ({ showTab: e = !0, variant: a }) => {
            let [i, n] = (0, m.useState)([]),
              [x, p] = (0, m.useState)(!1),
              { formatPrice: f } = (0, l.useExchangePrice)(),
              g = (0, h.useRouter)(),
              [v, j] = (0, m.useState)("activities"),
              y = async () => {
                i?.length || p(!0);
                try {
                  let { data: e } = await (0, r.getOrderHistory)();
                  n(e);
                } catch (e) {
                  console.log(e);
                } finally {
                  p(!1);
                }
              };
            return (
              (0, m.useEffect)(() => {
                y();
              }, []),
              (0, t.jsxs)(t.Fragment, {
                children: [
                  e
                    ? (0, t.jsx)("div", {
                        className: "flex justify-between items-center",
                        children: (0, t.jsx)(c.Tabs, {
                          value: v,
                          onChange: j,
                          classNames: {
                            root: "flex flex-col flex-1",
                            tab: "!h-9 !px-4 !py-0 !text-xs !font-medium !bg-transparent hover:bg-slate-600/50 hover:rounded-none data-[active=true]:tab-center-border",
                            tabLabel: "!text-xs !font-medium",
                            list: "!p-0 !h-9",
                            panel: "overflow-hidden",
                          },
                          children: (0, t.jsx)(c.Tabs.List, {
                            children: (0, t.jsx)(c.Tabs.Tab, {
                              value: "activities",
                              className:
                                "activities" === v
                                  ? "!bg-slate-600/50"
                                  : "text-slate-900 hover:text-white !bg-container-background border-b-2 border-solid border-ash hover:border-ash",
                              children: "Activities",
                            }),
                          }),
                        }),
                      })
                    : null,
                  (0, t.jsxs)("div", {
                    className:
                      "gtr" === a
                        ? "min-h-[300px] max-h-[500px] overflow-y-auto rounded-xl border-1 border-neutral-900 "
                        : "min-h-[calc(100vh-491px)] max-h-[calc(100vh-491px)] overflow-y-auto",
                    children: [
                      (0, t.jsxs)(o.Table, {
                        classNames:
                          "gtr" === a
                            ? {
                                table:
                                  "rounded-lg overflow-hidden border-1 border-neutral-900",
                                thead:
                                  "!bg-neutral-950 hover:!bg-neutral-950 uppercase",
                                th: "text-xs font-normal !bg-neutral-950 hover:!bg-neutral-950 text-neutral-400 h-10",
                                tbody: "bg-white/5",
                                td: "text-neutral-300 text-sm py-4 font-semibold",
                                tr: "border-b-1 border-neutral-800 last:border-b-0 hover:bg-white/5 transition-all duration-400 even:bg-neutral-950 odd:bg-[#141414]",
                              }
                            : {
                                table: "min-w-[1200px] overflow-x-scroll",
                                th: "!pl-0.5 !py-2 !font-normal !text-xs !text-slate-900 !border-ash !border-b !bg-container-background",
                                td: "!pl-0.5 !py-[1px] !text-xs",
                                tr: "border-b-1 !border-[#1D212A]",
                              },
                        className: "gtr" === a ? "" : "!p-1",
                        stickyHeader: !0,
                        children: [
                          (0, t.jsx)(o.Table.Thead, {
                            children: (0, t.jsxs)(o.Table.Tr, {
                              children: [
                                (0, t.jsx)(o.Table.Th, {
                                  className: "gtr" === a ? "" : "w-[150px]",
                                  children: (0, t.jsx)("div", {
                                    className: "gtr" === a ? "" : "ml-2",
                                    children: "Assets",
                                  }),
                                }),
                                (0, t.jsx)(o.Table.Th, { children: "Action" }),
                                (0, t.jsx)(o.Table.Th, { children: "Amount" }),
                              ],
                            }),
                          }),
                          i?.length
                            ? (0, t.jsx)(o.Table.Tbody, {
                                children: i.map((e, a) =>
                                  (0, t.jsxs)(
                                    o.Table.Tr,
                                    {
                                      className: "hover:bg-slate-200",
                                      children: [
                                        (0, t.jsx)(o.Table.Td, {
                                          className: "cursor-pointer",
                                          children: (0, t.jsxs)("div", {
                                            className:
                                              "flex items-center gap-2 pl-2 py-1",
                                            onClick: () =>
                                              g.push(
                                                `/stocks/${e?.stockInfo?.symbol}`
                                              ),
                                            children: [
                                              (0, t.jsx)("div", {
                                                className: "w-[26px]",
                                                children: (0, t.jsx)(
                                                  s.default,
                                                  {
                                                    icon: e?.stockInfo?.logoUrl,
                                                    iconClassName:
                                                      "!w-[26px] !h-[26px]",
                                                  }
                                                ),
                                              }),
                                              (0, t.jsxs)("div", {
                                                className: "max-w-[100px]",
                                                children: [
                                                  (0, t.jsx)("div", {
                                                    className:
                                                      "font-bold text-sm flex items-center gap-4",
                                                    children: (0, t.jsx)(
                                                      "div",
                                                      {
                                                        children:
                                                          e?.stockInfo?.symbol,
                                                      }
                                                    ),
                                                  }),
                                                  (0, t.jsx)("div", {
                                                    className:
                                                      "text-xs opacity-70 text-slate-900 font-medium truncate",
                                                    title: e?.stockInfo?.name,
                                                    children:
                                                      e?.stockInfo?.name,
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                        }),
                                        (0, t.jsx)(o.Table.Td, {
                                          className: "",
                                          children: (0, t.jsx)("span", {
                                            className: (0, u.default)(
                                              "py-0.5 border rounded-sm px-[6px] text-2xs",
                                              {
                                                "text-grass border-grass/40 bg-grass/20":
                                                  e?.order?.order_side ===
                                                  "BUY",
                                                "text-blood border-blood/40 bg-blood/20":
                                                  e?.order?.order_side !==
                                                  "BUY",
                                              }
                                            ),
                                            children:
                                              e?.order?.order_side === "BUY"
                                                ? "BUY"
                                                : "SELL",
                                          }),
                                        }),
                                        (0, t.jsx)(o.Table.Td, {
                                          className: "font-semibold",
                                          children:
                                            e?.fulfillments?.length > 0
                                              ? (0, t.jsx)("div", {
                                                  className:
                                                    "flex items-center gap-2",
                                                  children: (0, t.jsx)("div", {
                                                    children: f(
                                                      e?.order?.order_side ===
                                                        "BUY"
                                                        ? e?.fulfillments[0]
                                                            .payment_token_spent /
                                                            1e6
                                                        : e?.fulfillments[0]
                                                            .payment_token_filled /
                                                            1e6
                                                    ),
                                                  }),
                                                })
                                              : (0, t.jsx)(t.Fragment, {
                                                  children:
                                                    e?.order?.order_side ===
                                                    "BUY"
                                                      ? f(
                                                          e?.order
                                                            ?.order_side ===
                                                            "BUY"
                                                            ? Number(
                                                                e?.order
                                                                  ?.payment_token_quantity /
                                                                  1e6
                                                              )
                                                            : "-"
                                                        )
                                                      : "-",
                                                }),
                                        }),
                                      ],
                                    },
                                    e?.order?.id
                                  )
                                ),
                              })
                            : null,
                        ],
                      }),
                      x
                        ? (0, t.jsxs)("div", {
                            className:
                              "flex flex-col items-center gap-2 px-5 text-xs  py-20",
                            children: [
                              (0, t.jsx)(d.Loader, {
                                size: "xs",
                                color: "#ffffff",
                              }),
                              (0, t.jsx)("div", { children: "Loading..." }),
                            ],
                          })
                        : null,
                      x || 0 !== i.length
                        ? null
                        : (0, t.jsx)("div", {
                            className:
                              "flex items-center justify-center h-[400px]",
                            children: (0, t.jsx)(b.default, {
                              text: "No Activities yet",
                            }),
                          }),
                    ],
                  }),
                ],
              })
            );
          },
        ],
        934597
      );
  },
]);
