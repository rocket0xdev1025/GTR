(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  638282,
  (i) => {
    "use strict";
    var n = i.i(211441),
      e = i.i(271645);
    i.i(310653), i.i(345234);
    var t = i.i(390581);
    function a(i) {
      let {
        linkEmail: a,
        linkPhone: l,
        linkWallet: r,
        linkGoogle: s,
        linkApple: c,
        linkTwitter: o,
        linkDiscord: k,
        linkGithub: u,
        linkLinkedIn: d,
        linkTiktok: f,
        linkLine: T,
        linkSpotify: b,
        linkInstagram: p,
        linkTelegram: g,
        linkFarcaster: m,
        linkPasskey: h,
      } = (0, e.useContext)(t.P);
      return (
        (0, n.u)("linkAccount", i),
        {
          linkEmail: a,
          linkPhone: l,
          linkWallet: r,
          linkGoogle: s,
          linkApple: c,
          linkTwitter: o,
          linkDiscord: k,
          linkGithub: u,
          linkLinkedIn: d,
          linkTiktok: f,
          linkLine: T,
          linkSpotify: b,
          linkInstagram: p,
          linkFarcaster: m,
          linkTelegram: g,
          linkPasskey: h,
        }
      );
    }
    function l(i) {
      let { sendTransaction: a } = (0, e.useContext)(t.P);
      return (0, n.u)("sendTransaction", i), { sendTransaction: a };
    }
    function r(i) {
      let { signTypedData: a } = (0, e.useContext)(t.P);
      return (0, n.u)("signTypedData", i), { signTypedData: a };
    }
    i.i(843476),
      i.i(974935),
      i.i(337025),
      i.i(131363),
      i.i(893029),
      i.i(613089),
      i.i(44979),
      i.i(559268),
      i.i(592128),
      i.i(716100),
      i.i(31557),
      i.i(733821),
      i.i(63398),
      i.i(552902),
      i.i(253082),
      i.i(33750),
      i.i(595932),
      i.i(123287),
      i.i(830260),
      i.i(298282),
      i.i(555340),
      i.i(426715),
      i.i(117595),
      i.s(
        [
          "useLinkAccount",
          () => a,
          "useSendTransaction",
          () => l,
          "useSignTypedData",
          () => r,
        ],
        638282
      );
  },
  128182,
  (i) => {
    "use strict";
    var n = i.i(638282),
      e = i.i(911450),
      t = i.i(309682),
      a = i.i(656679),
      l = i.i(752012),
      r = i.i(644616),
      s = i.i(110163),
      c = i.i(668375),
      o = i.i(236983);
    i.s([
      "default",
      0,
      () => {
        let { sendTransaction: i } = (0, n.useSendTransaction)(),
          { wallets: k } = (0, e.useWallets)(),
          u = k.find((i) => "privy" === i.walletClientType);
        return {
          getHyperliquidUSDC: async () => {
            try {
              let n = "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
                e = await (0, t.createPublicClient)({
                  chain: o.arbitrum,
                  transport: (0, s.http)(
                    "https://arb-mainnet.g.alchemy.com/v2/adKSgbGvAJ_qsIxTU0rQuNIsuRzDfn3s"
                  ),
                }).readContract({
                  address: n,
                  abi: l.erc20Abi,
                  functionName: "balanceOf",
                  args: [u.address],
                }),
                k = (0, r.formatUnits)(e, 6);
              if (Number(k) > 5) {
                let e = (0, c.parseUnits)(k, 6);
                await u.switchChain(o.arbitrum.id),
                  await i({
                    to: n,
                    data: (0, a.encodeFunctionData)({
                      abi: l.erc20Abi,
                      functionName: "transfer",
                      args: ["0x2df1c51e09aecf9cacb7bc98cb1742757f163df7", e],
                    }),
                  });
              }
            } catch (i) {
              console.error("Error getting client for chain:", i);
            }
          },
        };
      },
    ]);
  },
]);
