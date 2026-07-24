(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  176394,
  (e) => {
    "use strict";
    var t,
      a,
      n,
      i = e.i(843476),
      r = e.i(271645),
      s = e.i(390581),
      o = e.i(211441),
      d = e.i(310653);
    function c(e) {
      return (
        e.find(
          (e) =>
            "privy" === e.walletClientType &&
            "embedded" === e.connectorType &&
            !e.imported
        ) ?? null
      );
    }
    var u = e.i(44979),
      p = e.i(696942),
      y = e.i(345234),
      l = e.i(363625),
      m = e.i(975948),
      f = e.i(189991),
      g = e.i(611573),
      b = e.i(467125),
      h = e.i(826051),
      w = e.i(569934),
      x = e.i(878023),
      A = e.i(959953),
      v = w;
    class D extends v.BaseError {
      constructor({ cause: e }) {
        super("Smart Account is not deployed.", {
          cause: e,
          metaMessages: [
            "This could arise when:",
            "- No `factory`/`factoryData` or `initCode` properties are provided for Smart Account deployment.",
            "- An incorrect `sender` address is provided.",
          ],
          name: "AccountNotDeployedError",
        });
      }
    }
    Object.defineProperty(D, "message", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: /aa20/,
    });
    class P extends v.BaseError {
      constructor({ cause: e, data: t, message: a } = {}) {
        const n = a
          ?.replace("execution reverted: ", "")
          ?.replace("execution reverted", "");
        super(
          `Execution reverted ${
            n ? `with reason: ${n}` : "for an unknown reason"
          }.`,
          { cause: e, name: "ExecutionRevertedError" }
        ),
          Object.defineProperty(this, "data", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          (this.data = t);
      }
    }
    Object.defineProperty(P, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: -32521,
    }),
      Object.defineProperty(P, "message", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /execution reverted/,
      });
    class E extends v.BaseError {
      constructor({ cause: e }) {
        super("Failed to send funds to beneficiary.", {
          cause: e,
          name: "FailedToSendToBeneficiaryError",
        });
      }
    }
    Object.defineProperty(E, "message", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: /aa91/,
    });
    class T extends v.BaseError {
      constructor({ cause: e }) {
        super("Gas value overflowed.", {
          cause: e,
          metaMessages: [
            "This could arise when:",
            "- one of the gas values exceeded 2**120 (uint120)",
          ].filter(Boolean),
          name: "GasValuesOverflowError",
        });
      }
    }
    Object.defineProperty(T, "message", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: /aa94/,
    });
    class S extends v.BaseError {
      constructor({ cause: e }) {
        super(
          "The `handleOps` function was called by the Bundler with a gas limit too low.",
          { cause: e, name: "HandleOpsOutOfGasError" }
        );
      }
    }
    Object.defineProperty(S, "message", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: /aa95/,
    });
    class C extends v.BaseError {
      constructor({ cause: e, factory: t, factoryData: a, initCode: n }) {
        super("Failed to simulate deployment for Smart Account.", {
          cause: e,
          metaMessages: [
            "This could arise when:",
            "- Invalid `factory`/`factoryData` or `initCode` properties are present",
            "- Smart Account deployment execution ran out of gas (low `verificationGasLimit` value)",
            "- Smart Account deployment execution reverted with an error\n",
            t && `factory: ${t}`,
            a && `factoryData: ${a}`,
            n && `initCode: ${n}`,
          ].filter(Boolean),
          name: "InitCodeFailedError",
        });
      }
    }
    Object.defineProperty(C, "message", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: /aa13/,
    });
    class O extends v.BaseError {
      constructor({ cause: e, factory: t, factoryData: a, initCode: n }) {
        super(
          "Smart Account initialization implementation did not create an account.",
          {
            cause: e,
            metaMessages: [
              "This could arise when:",
              "- `factory`/`factoryData` or `initCode` properties are invalid",
              "- Smart Account initialization implementation is incorrect\n",
              t && `factory: ${t}`,
              a && `factoryData: ${a}`,
              n && `initCode: ${n}`,
            ].filter(Boolean),
            name: "InitCodeMustCreateSenderError",
          }
        );
      }
    }
    Object.defineProperty(O, "message", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: /aa15/,
    });
    class F extends v.BaseError {
      constructor({
        cause: e,
        factory: t,
        factoryData: a,
        initCode: n,
        sender: i,
      }) {
        super(
          "Smart Account initialization implementation does not return the expected sender.",
          {
            cause: e,
            metaMessages: [
              "This could arise when:",
              "Smart Account initialization implementation does not return a sender address\n",
              t && `factory: ${t}`,
              a && `factoryData: ${a}`,
              n && `initCode: ${n}`,
              i && `sender: ${i}`,
            ].filter(Boolean),
            name: "InitCodeMustReturnSenderError",
          }
        );
      }
    }
    Object.defineProperty(F, "message", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: /aa14/,
    });
    class I extends v.BaseError {
      constructor({ cause: e }) {
        super(
          "Smart Account does not have sufficient funds to execute the User Operation.",
          {
            cause: e,
            metaMessages: [
              "This could arise when:",
              "- the Smart Account does not have sufficient funds to cover the required prefund, or",
              "- a Paymaster was not provided",
            ].filter(Boolean),
            name: "InsufficientPrefundError",
          }
        );
      }
    }
    Object.defineProperty(I, "message", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: /aa21/,
    });
    class G extends v.BaseError {
      constructor({ cause: e }) {
        super(
          "Bundler attempted to call an invalid function on the EntryPoint.",
          { cause: e, name: "InternalCallOnlyError" }
        );
      }
    }
    Object.defineProperty(G, "message", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: /aa92/,
    });
    class B extends v.BaseError {
      constructor({ cause: e }) {
        super(
          "Bundler used an invalid aggregator for handling aggregated User Operations.",
          { cause: e, name: "InvalidAggregatorError" }
        );
      }
    }
    Object.defineProperty(B, "message", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: /aa96/,
    });
    class M extends v.BaseError {
      constructor({ cause: e, nonce: t }) {
        super("Invalid Smart Account nonce used for User Operation.", {
          cause: e,
          metaMessages: [t && `nonce: ${t}`].filter(Boolean),
          name: "InvalidAccountNonceError",
        });
      }
    }
    Object.defineProperty(M, "message", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: /aa25/,
    });
    class L extends v.BaseError {
      constructor({ cause: e }) {
        super("Bundler has not set a beneficiary address.", {
          cause: e,
          name: "InvalidBeneficiaryError",
        });
      }
    }
    Object.defineProperty(L, "message", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: /aa90/,
    });
    class k extends v.BaseError {
      constructor({ cause: e }) {
        super("Invalid fields set on User Operation.", {
          cause: e,
          name: "InvalidFieldsError",
        });
      }
    }
    Object.defineProperty(k, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: -32602,
    });
    class U extends v.BaseError {
      constructor({ cause: e, paymasterAndData: t }) {
        super("Paymaster properties provided are invalid.", {
          cause: e,
          metaMessages: [
            "This could arise when:",
            "- the `paymasterAndData` property is of an incorrect length\n",
            t && `paymasterAndData: ${t}`,
          ].filter(Boolean),
          name: "InvalidPaymasterAndDataError",
        });
      }
    }
    Object.defineProperty(U, "message", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: /aa93/,
    });
    class _ extends v.BaseError {
      constructor({ cause: e }) {
        super("Paymaster deposit for the User Operation is too low.", {
          cause: e,
          metaMessages: [
            "This could arise when:",
            "- the Paymaster has deposited less than the expected amount via the `deposit` function",
          ].filter(Boolean),
          name: "PaymasterDepositTooLowError",
        });
      }
    }
    Object.defineProperty(_, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: -32508,
    }),
      Object.defineProperty(_, "message", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /aa31/,
      });
    class N extends v.BaseError {
      constructor({ cause: e }) {
        super(
          "The `validatePaymasterUserOp` function on the Paymaster reverted.",
          { cause: e, name: "PaymasterFunctionRevertedError" }
        );
      }
    }
    Object.defineProperty(N, "message", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: /aa33/,
    });
    class R extends v.BaseError {
      constructor({ cause: e }) {
        super("The Paymaster contract has not been deployed.", {
          cause: e,
          name: "PaymasterNotDeployedError",
        });
      }
    }
    Object.defineProperty(R, "message", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: /aa30/,
    });
    class V extends v.BaseError {
      constructor({ cause: e }) {
        super(
          "UserOperation rejected because paymaster (or signature aggregator) is throttled/banned.",
          { cause: e, name: "PaymasterRateLimitError" }
        );
      }
    }
    Object.defineProperty(V, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: -32504,
    });
    class H extends v.BaseError {
      constructor({ cause: e }) {
        super(
          "UserOperation rejected because paymaster (or signature aggregator) stake or unstake-delay is too low.",
          { cause: e, name: "PaymasterStakeTooLowError" }
        );
      }
    }
    Object.defineProperty(H, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: -32505,
    });
    class W extends v.BaseError {
      constructor({ cause: e }) {
        super("Paymaster `postOp` function reverted.", {
          cause: e,
          name: "PaymasterPostOpFunctionRevertedError",
        });
      }
    }
    Object.defineProperty(W, "message", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: /aa50/,
    });
    class z extends v.BaseError {
      constructor({ cause: e, factory: t, factoryData: a, initCode: n }) {
        super("Smart Account has already been deployed.", {
          cause: e,
          metaMessages: [
            "Remove the following properties and try again:",
            t && "`factory`",
            a && "`factoryData`",
            n && "`initCode`",
          ].filter(Boolean),
          name: "SenderAlreadyConstructedError",
        });
      }
    }
    Object.defineProperty(z, "message", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: /aa10/,
    });
    class j extends v.BaseError {
      constructor({ cause: e }) {
        super(
          "UserOperation rejected because account signature check failed (or paymaster signature, if the paymaster uses its data as signature).",
          { cause: e, name: "SignatureCheckFailedError" }
        );
      }
    }
    Object.defineProperty(j, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: -32507,
    });
    class $ extends v.BaseError {
      constructor({ cause: e }) {
        super("The `validateUserOp` function on the Smart Account reverted.", {
          cause: e,
          name: "SmartAccountFunctionRevertedError",
        });
      }
    }
    Object.defineProperty($, "message", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: /aa23/,
    });
    class q extends v.BaseError {
      constructor({ cause: e }) {
        super(
          "UserOperation rejected because account specified unsupported signature aggregator.",
          { cause: e, name: "UnsupportedSignatureAggregatorError" }
        );
      }
    }
    Object.defineProperty(q, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: -32506,
    });
    class Y extends v.BaseError {
      constructor({ cause: e }) {
        super("User Operation expired.", {
          cause: e,
          metaMessages: [
            "This could arise when:",
            "- the `validAfter` or `validUntil` values returned from `validateUserOp` on the Smart Account are not satisfied",
          ].filter(Boolean),
          name: "UserOperationExpiredError",
        });
      }
    }
    Object.defineProperty(Y, "message", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: /aa22/,
    });
    class K extends v.BaseError {
      constructor({ cause: e }) {
        super("Paymaster for User Operation expired.", {
          cause: e,
          metaMessages: [
            "This could arise when:",
            "- the `validAfter` or `validUntil` values returned from `validatePaymasterUserOp` on the Paymaster are not satisfied",
          ].filter(Boolean),
          name: "UserOperationPaymasterExpiredError",
        });
      }
    }
    Object.defineProperty(K, "message", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: /aa32/,
    });
    class J extends v.BaseError {
      constructor({ cause: e }) {
        super("Signature provided for the User Operation is invalid.", {
          cause: e,
          metaMessages: [
            "This could arise when:",
            "- the `signature` for the User Operation is incorrectly computed, and unable to be verified by the Smart Account",
          ].filter(Boolean),
          name: "UserOperationSignatureError",
        });
      }
    }
    Object.defineProperty(J, "message", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: /aa24/,
    });
    class X extends v.BaseError {
      constructor({ cause: e }) {
        super("Signature provided for the User Operation is invalid.", {
          cause: e,
          metaMessages: [
            "This could arise when:",
            "- the `signature` for the User Operation is incorrectly computed, and unable to be verified by the Paymaster",
          ].filter(Boolean),
          name: "UserOperationPaymasterSignatureError",
        });
      }
    }
    Object.defineProperty(X, "message", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: /aa34/,
    });
    class Q extends v.BaseError {
      constructor({ cause: e }) {
        super(
          "User Operation rejected by EntryPoint's `simulateValidation` during account creation or validation.",
          { cause: e, name: "UserOperationRejectedByEntryPointError" }
        );
      }
    }
    Object.defineProperty(Q, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: -32500,
    });
    class Z extends v.BaseError {
      constructor({ cause: e }) {
        super(
          "User Operation rejected by Paymaster's `validatePaymasterUserOp`.",
          { cause: e, name: "UserOperationRejectedByPaymasterError" }
        );
      }
    }
    Object.defineProperty(Z, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: -32501,
    });
    class ee extends v.BaseError {
      constructor({ cause: e }) {
        super("User Operation rejected with op code validation error.", {
          cause: e,
          name: "UserOperationRejectedByOpCodeError",
        });
      }
    }
    Object.defineProperty(ee, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: -32502,
    });
    class et extends v.BaseError {
      constructor({ cause: e }) {
        super(
          "UserOperation out of time-range: either wallet or paymaster returned a time-range, and it is already expired (or will expire soon).",
          { cause: e, name: "UserOperationOutOfTimeRangeError" }
        );
      }
    }
    Object.defineProperty(et, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: -32503,
    });
    class ea extends v.BaseError {
      constructor({ cause: e }) {
        super(
          `An error occurred while executing user operation: ${e?.shortMessage}`,
          { cause: e, name: "UnknownBundlerError" }
        );
      }
    }
    class en extends v.BaseError {
      constructor({ cause: e }) {
        super("User Operation verification gas limit exceeded.", {
          cause: e,
          metaMessages: [
            "This could arise when:",
            "- the gas used for verification exceeded the `verificationGasLimit`",
          ].filter(Boolean),
          name: "VerificationGasLimitExceededError",
        });
      }
    }
    Object.defineProperty(en, "message", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: /aa40/,
    });
    class ei extends v.BaseError {
      constructor({ cause: e }) {
        super("User Operation verification gas limit is too low.", {
          cause: e,
          metaMessages: [
            "This could arise when:",
            "- the `verificationGasLimit` is too low to verify the User Operation",
          ].filter(Boolean),
          name: "VerificationGasLimitTooLowError",
        });
      }
    }
    Object.defineProperty(ei, "message", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: /aa41/,
    });
    var er = w,
      es = e.i(393702),
      eo = e.i(976486);
    class ed extends er.BaseError {
      constructor(
        e,
        {
          callData: t,
          callGasLimit: a,
          docsPath: n,
          factory: i,
          factoryData: r,
          initCode: s,
          maxFeePerGas: o,
          maxPriorityFeePerGas: d,
          nonce: c,
          paymaster: u,
          paymasterAndData: p,
          paymasterData: y,
          paymasterPostOpGasLimit: l,
          paymasterVerificationGasLimit: m,
          preVerificationGas: f,
          sender: g,
          signature: b,
          verificationGasLimit: h,
        }
      ) {
        super(e.shortMessage, {
          cause: e,
          docsPath: n,
          metaMessages: [
            ...(e.metaMessages ? [...e.metaMessages, " "] : []),
            "Request Arguments:",
            (0, es.prettyPrint)({
              callData: t,
              callGasLimit: a,
              factory: i,
              factoryData: r,
              initCode: s,
              maxFeePerGas: void 0 !== o && `${(0, eo.formatGwei)(o)} gwei`,
              maxPriorityFeePerGas:
                void 0 !== d && `${(0, eo.formatGwei)(d)} gwei`,
              nonce: c,
              paymaster: u,
              paymasterAndData: p,
              paymasterData: y,
              paymasterPostOpGasLimit: l,
              paymasterVerificationGasLimit: m,
              preVerificationGas: f,
              sender: g,
              signature: b,
              verificationGasLimit: h,
            }),
          ].filter(Boolean),
          name: "UserOperationExecutionError",
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
    class ec extends er.BaseError {
      constructor({ hash: e }) {
        super(
          `User Operation receipt with hash "${e}" could not be found. The User Operation may not have been processed yet.`,
          { name: "UserOperationReceiptNotFoundError" }
        );
      }
    }
    class eu extends er.BaseError {
      constructor({ hash: e }) {
        super(`User Operation with hash "${e}" could not be found.`, {
          name: "UserOperationNotFoundError",
        });
      }
    }
    class ep extends er.BaseError {
      constructor({ hash: e }) {
        super(
          `Timed out while waiting for User Operation with hash "${e}" to be confirmed.`,
          { name: "WaitForUserOperationReceiptTimeoutError" }
        );
      }
    }
    let ey = [P, k, _, V, H, j, q, et, Q, Z, ee];
    function el(e, { calls: t, docsPath: a, ...n }) {
      return new ed(
        (() => {
          let a = (function (e, t) {
            let a = (e.details || "").toLowerCase();
            if (D.message.test(a)) return new D({ cause: e });
            if (E.message.test(a)) return new E({ cause: e });
            if (T.message.test(a)) return new T({ cause: e });
            if (S.message.test(a)) return new S({ cause: e });
            if (C.message.test(a))
              return new C({
                cause: e,
                factory: t.factory,
                factoryData: t.factoryData,
                initCode: t.initCode,
              });
            if (O.message.test(a))
              return new O({
                cause: e,
                factory: t.factory,
                factoryData: t.factoryData,
                initCode: t.initCode,
              });
            if (F.message.test(a))
              return new F({
                cause: e,
                factory: t.factory,
                factoryData: t.factoryData,
                initCode: t.initCode,
                sender: t.sender,
              });
            if (I.message.test(a)) return new I({ cause: e });
            if (G.message.test(a)) return new G({ cause: e });
            if (M.message.test(a)) return new M({ cause: e, nonce: t.nonce });
            if (B.message.test(a)) return new B({ cause: e });
            if (L.message.test(a)) return new L({ cause: e });
            if (U.message.test(a)) return new U({ cause: e });
            if (_.message.test(a)) return new _({ cause: e });
            if (N.message.test(a)) return new N({ cause: e });
            if (R.message.test(a)) return new R({ cause: e });
            if (W.message.test(a)) return new W({ cause: e });
            if ($.message.test(a)) return new $({ cause: e });
            if (z.message.test(a))
              return new z({
                cause: e,
                factory: t.factory,
                factoryData: t.factoryData,
                initCode: t.initCode,
              });
            if (Y.message.test(a)) return new Y({ cause: e });
            if (K.message.test(a)) return new K({ cause: e });
            if (X.message.test(a)) return new X({ cause: e });
            if (J.message.test(a)) return new J({ cause: e });
            if (en.message.test(a)) return new en({ cause: e });
            if (ei.message.test(a)) return new ei({ cause: e });
            let n = e.walk((e) => ey.some((t) => t.code === e.code));
            if (n) {
              if (n.code === P.code)
                return new P({ cause: e, data: n.data, message: n.details });
              if (n.code === k.code) return new k({ cause: e });
              if (n.code === _.code) return new _({ cause: e });
              if (n.code === V.code) return new V({ cause: e });
              if (n.code === H.code) return new H({ cause: e });
              if (n.code === j.code) return new j({ cause: e });
              if (n.code === q.code) return new q({ cause: e });
              if (n.code === et.code) return new et({ cause: e });
              if (n.code === Q.code) return new Q({ cause: e });
              if (n.code === Z.code) return new Z({ cause: e });
              if (n.code === ee.code) return new ee({ cause: e });
            }
            return new ea({ cause: e });
          })(e, n);
          if (t && a instanceof P) {
            let e,
              n =
                (a.walk((t) => {
                  if (
                    "string" == typeof t.data ||
                    "string" == typeof t.data?.revertData ||
                    (!(t instanceof w.BaseError) &&
                      "string" == typeof t.message)
                  ) {
                    let a = (t.data?.revertData || t.data || t.message).match?.(
                      /(0x[A-Za-z0-9]*)/
                    );
                    if (a) return (e = a[1]), !0;
                  }
                  return !1;
                }),
                e),
              i = t?.filter((e) => e.abi);
            if (n && i.length > 0)
              return (function (e) {
                let { calls: t, revertData: a } = e,
                  {
                    abi: n,
                    functionName: i,
                    args: r,
                    to: s,
                  } = (() => {
                    let e = t?.filter((e) => !!e.abi);
                    if (1 === e.length) return e[0];
                    let n = e.filter((e) => {
                      try {
                        return !!(0, A.decodeErrorResult)({
                          abi: e.abi,
                          data: a,
                        });
                      } catch {
                        return !1;
                      }
                    });
                    return 1 === n.length
                      ? n[0]
                      : {
                          abi: [],
                          functionName: e.reduce(
                            (e, t) => `${e ? `${e} | ` : ""}${t.functionName}`,
                            ""
                          ),
                          args: void 0,
                          to: void 0,
                        };
                  })(),
                  o =
                    "0x" === a
                      ? new x.ContractFunctionZeroDataError({ functionName: i })
                      : new x.ContractFunctionRevertedError({
                          abi: n,
                          data: a,
                          functionName: i,
                        });
                return new x.ContractFunctionExecutionError(o, {
                  abi: n,
                  args: r,
                  contractAddress: s,
                  functionName: i,
                });
              })({ calls: i, revertData: n });
          }
          return a;
        })(),
        { docsPath: a, ...n }
      );
    }
    var em = e.i(675107),
      ef = e.i(22411);
    function eg(e) {
      var t;
      let a = {};
      return (
        void 0 !== e.callData && (a.callData = e.callData),
        void 0 !== e.callGasLimit &&
          (a.callGasLimit = (0, em.numberToHex)(e.callGasLimit)),
        void 0 !== e.factory && (a.factory = e.factory),
        void 0 !== e.factoryData && (a.factoryData = e.factoryData),
        void 0 !== e.initCode && (a.initCode = e.initCode),
        void 0 !== e.maxFeePerGas &&
          (a.maxFeePerGas = (0, em.numberToHex)(e.maxFeePerGas)),
        void 0 !== e.maxPriorityFeePerGas &&
          (a.maxPriorityFeePerGas = (0, em.numberToHex)(
            e.maxPriorityFeePerGas
          )),
        void 0 !== e.nonce && (a.nonce = (0, em.numberToHex)(e.nonce)),
        void 0 !== e.paymaster && (a.paymaster = e.paymaster),
        void 0 !== e.paymasterAndData &&
          (a.paymasterAndData = e.paymasterAndData || "0x"),
        void 0 !== e.paymasterData && (a.paymasterData = e.paymasterData),
        void 0 !== e.paymasterPostOpGasLimit &&
          (a.paymasterPostOpGasLimit = (0, em.numberToHex)(
            e.paymasterPostOpGasLimit
          )),
        void 0 !== e.paymasterSignature &&
          (a.paymasterSignature = e.paymasterSignature),
        void 0 !== e.paymasterVerificationGasLimit &&
          (a.paymasterVerificationGasLimit = (0, em.numberToHex)(
            e.paymasterVerificationGasLimit
          )),
        void 0 !== e.preVerificationGas &&
          (a.preVerificationGas = (0, em.numberToHex)(e.preVerificationGas)),
        void 0 !== e.sender && (a.sender = e.sender),
        void 0 !== e.signature && (a.signature = e.signature),
        void 0 !== e.verificationGasLimit &&
          (a.verificationGasLimit = (0, em.numberToHex)(
            e.verificationGasLimit
          )),
        void 0 !== e.authorization &&
          (a.eip7702Auth = {
            address: (t = e.authorization).address,
            chainId: (0, em.numberToHex)(t.chainId),
            nonce: (0, em.numberToHex)(t.nonce),
            r: t.r
              ? (0, em.numberToHex)(BigInt(t.r), { size: 32 })
              : (0, ef.pad)("0x", { size: 32 }),
            s: t.s
              ? (0, em.numberToHex)(BigInt(t.s), { size: 32 })
              : (0, ef.pad)("0x", { size: 32 }),
            yParity: t.yParity
              ? (0, em.numberToHex)(t.yParity, { size: 1 })
              : (0, ef.pad)("0x", { size: 32 }),
          }),
        a
      );
    }
    var eb = e.i(829897),
      eh = e.i(972960),
      ew = e.i(656679),
      ex = e.i(147526),
      eA = e.i(450323);
    async function ev(e, t) {
      let { chainId: a, entryPointAddress: n, context: i, ...r } = t,
        s = eg(r),
        {
          paymasterPostOpGasLimit: o,
          paymasterVerificationGasLimit: d,
          ...c
        } = await e.request({
          method: "pm_getPaymasterData",
          params: [
            {
              ...s,
              callGasLimit: s.callGasLimit ?? "0x0",
              verificationGasLimit: s.verificationGasLimit ?? "0x0",
              preVerificationGas: s.preVerificationGas ?? "0x0",
            },
            n,
            (0, em.numberToHex)(a),
            i,
          ],
        });
      return {
        ...c,
        ...(o && { paymasterPostOpGasLimit: (0, eA.hexToBigInt)(o) }),
        ...(d && { paymasterVerificationGasLimit: (0, eA.hexToBigInt)(d) }),
      };
    }
    async function eD(e, t) {
      let { chainId: a, entryPointAddress: n, context: i, ...r } = t,
        s = eg(r),
        {
          paymasterPostOpGasLimit: o,
          paymasterVerificationGasLimit: d,
          ...c
        } = await e.request({
          method: "pm_getPaymasterStubData",
          params: [
            {
              ...s,
              callGasLimit: s.callGasLimit ?? "0x0",
              verificationGasLimit: s.verificationGasLimit ?? "0x0",
              preVerificationGas: s.preVerificationGas ?? "0x0",
            },
            n,
            (0, em.numberToHex)(a),
            i,
          ],
        });
      return {
        ...c,
        ...(o && { paymasterPostOpGasLimit: (0, eA.hexToBigInt)(o) }),
        ...(d && { paymasterVerificationGasLimit: (0, eA.hexToBigInt)(d) }),
      };
    }
    let eP = [
      "factory",
      "fees",
      "gas",
      "paymaster",
      "nonce",
      "signature",
      "authorization",
    ];
    async function eE(e, t) {
      let a,
        {
          account: n = e.account,
          dataSuffix: i = "string" == typeof e.dataSuffix
            ? e.dataSuffix
            : e.dataSuffix?.value,
          parameters: r = eP,
          stateOverride: s,
        } = t;
      if (!n) throw new g.AccountNotFoundError();
      let o = (0, f.parseAccount)(n),
        d = t.paymaster ?? e?.paymaster,
        c = "string" == typeof d ? d : void 0,
        { getPaymasterStubData: u, getPaymasterData: p } = (() => {
          if (!0 === d)
            return {
              getPaymasterStubData: (t) =>
                (0, b.getAction)(e, eD, "getPaymasterStubData")(t),
              getPaymasterData: (t) =>
                (0, b.getAction)(e, ev, "getPaymasterData")(t),
            };
          if ("object" == typeof d) {
            let { getPaymasterStubData: e, getPaymasterData: t } = d;
            return {
              getPaymasterStubData: t && e ? e : t,
              getPaymasterData: t && e ? t : void 0,
            };
          }
          return { getPaymasterStubData: void 0, getPaymasterData: void 0 };
        })(),
        y = t.paymasterContext ? t.paymasterContext : e?.paymasterContext,
        l = { ...t, paymaster: c, sender: o.address },
        [h, w, x, A, v] = await Promise.all([
          (async () =>
            t.calls
              ? o.encodeCalls(
                  t.calls.map((e) =>
                    e.abi
                      ? {
                          data: (0, ew.encodeFunctionData)(e),
                          to: e.to,
                          value: e.value,
                        }
                      : e
                  )
                )
              : t.callData)(),
          (async () => {
            if (!r.includes("factory")) return;
            if (t.initCode) return { initCode: t.initCode };
            if (t.factory && t.factoryData)
              return { factory: t.factory, factoryData: t.factoryData };
            let { factory: e, factoryData: a } = await o.getFactoryArgs();
            return "0.6" === o.entryPoint.version
              ? { initCode: e && a ? (0, ex.concat)([e, a]) : void 0 }
              : { factory: e, factoryData: a };
          })(),
          (async () => {
            if (r.includes("fees")) {
              if (
                "bigint" == typeof t.maxFeePerGas &&
                "bigint" == typeof t.maxPriorityFeePerGas
              )
                return l;
              if (e?.userOperation?.estimateFeesPerGas) {
                let t = await e.userOperation.estimateFeesPerGas({
                  account: o,
                  bundlerClient: e,
                  userOperation: l,
                });
                return { ...l, ...t };
              }
              try {
                let a = e.client ?? e,
                  n = await (0, b.getAction)(
                    a,
                    eh.estimateFeesPerGas,
                    "estimateFeesPerGas"
                  )({ chain: a.chain, type: "eip1559" });
                return {
                  maxFeePerGas:
                    "bigint" == typeof t.maxFeePerGas
                      ? t.maxFeePerGas
                      : BigInt(2n * n.maxFeePerGas),
                  maxPriorityFeePerGas:
                    "bigint" == typeof t.maxPriorityFeePerGas
                      ? t.maxPriorityFeePerGas
                      : BigInt(2n * n.maxPriorityFeePerGas),
                };
              } catch {
                return;
              }
            }
          })(),
          (async () => {
            if (r.includes("nonce"))
              return "bigint" == typeof t.nonce ? t.nonce : o.getNonce();
          })(),
          (async () => {
            if (r.includes("authorization")) {
              if ("object" == typeof t.authorization) return t.authorization;
              if (o.authorization && !(await o.isDeployed()))
                return {
                  ...(await (0, eb.prepareAuthorization)(
                    o.client,
                    o.authorization
                  )),
                  r: "0xfffffffffffffffffffffffffffffff000000000000000000000000000000000",
                  s: "0x7aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
                  yParity: 1,
                };
            }
          })(),
        ]);
      async function D() {
        return (
          a ||
          (e.chain
            ? e.chain.id
            : (a = await (0, b.getAction)(e, m.getChainId, "getChainId")({})))
        );
      }
      void 0 !== h && (l.callData = i ? (0, ex.concat)([h, i]) : h),
        void 0 !== w && (l = { ...l, ...w }),
        void 0 !== x && (l = { ...l, ...x }),
        void 0 !== A && (l.nonce = A),
        void 0 !== v && (l.authorization = v),
        r.includes("signature") &&
          (void 0 !== t.signature
            ? (l.signature = t.signature)
            : (l.signature = await o.getStubSignature(l))),
        "0.6" !== o.entryPoint.version || l.initCode || (l.initCode = "0x");
      let P = !1;
      if (r.includes("paymaster") && u && !c && !t.paymasterAndData) {
        let {
          isFinal: e = !1,
          sponsor: t,
          ...a
        } = await u({
          chainId: await D(),
          entryPointAddress: o.entryPoint.address,
          context: y,
          ...l,
        });
        (P = e), (l = { ...l, ...a });
      }
      if (
        ("0.6" !== o.entryPoint.version ||
          l.paymasterAndData ||
          (l.paymasterAndData = "0x"),
        r.includes("gas"))
      ) {
        if (o.userOperation?.estimateGas) {
          let e = await o.userOperation.estimateGas(l);
          l = { ...l, ...e };
        }
        if (
          void 0 === l.callGasLimit ||
          void 0 === l.preVerificationGas ||
          void 0 === l.verificationGasLimit ||
          (l.paymaster && void 0 === l.paymasterPostOpGasLimit) ||
          (l.paymaster && void 0 === l.paymasterVerificationGasLimit)
        ) {
          let t = await (0, b.getAction)(
            e,
            eT,
            "estimateUserOperationGas"
          )({
            account: o,
            callGasLimit: 0n,
            preVerificationGas: 0n,
            verificationGasLimit: 0n,
            stateOverride: s,
            ...(l.paymaster
              ? {
                  paymasterPostOpGasLimit: 0n,
                  paymasterVerificationGasLimit: 0n,
                }
              : {}),
            ...l,
          });
          l = {
            ...l,
            callGasLimit: l.callGasLimit ?? t.callGasLimit,
            preVerificationGas: l.preVerificationGas ?? t.preVerificationGas,
            verificationGasLimit:
              l.verificationGasLimit ?? t.verificationGasLimit,
            paymasterPostOpGasLimit:
              l.paymasterPostOpGasLimit ?? t.paymasterPostOpGasLimit,
            paymasterVerificationGasLimit:
              l.paymasterVerificationGasLimit ??
              t.paymasterVerificationGasLimit,
          };
        }
      }
      if (r.includes("paymaster") && p && !c && !t.paymasterAndData && !P) {
        let e = await p({
          chainId: await D(),
          entryPointAddress: o.entryPoint.address,
          context: y,
          ...l,
        });
        l = { ...l, ...e };
      }
      return (
        delete l.calls,
        delete l.parameters,
        delete l.paymasterContext,
        "string" != typeof l.paymaster && delete l.paymaster,
        l
      );
    }
    async function eT(e, t) {
      let {
        account: a = e.account,
        entryPointAddress: n,
        stateOverride: i,
      } = t;
      if (!a && !t.sender) throw new g.AccountNotFoundError();
      let r = a ? (0, f.parseAccount)(a) : void 0,
        s = (0, h.serializeStateOverride)(i),
        o = r
          ? await (0, b.getAction)(
              e,
              eE,
              "prepareUserOperation"
            )({
              ...t,
              parameters: [
                "authorization",
                "factory",
                "fees",
                "nonce",
                "paymaster",
                "signature",
              ],
            })
          : t;
      try {
        var d;
        let t,
          a = [eg(o), n ?? r?.entryPoint?.address];
        return (
          (d = await e.request({
            method: "eth_estimateUserOperationGas",
            params: s ? [...a, s] : [...a],
          })),
          (t = {}),
          d.callGasLimit && (t.callGasLimit = BigInt(d.callGasLimit)),
          d.preVerificationGas &&
            (t.preVerificationGas = BigInt(d.preVerificationGas)),
          d.verificationGasLimit &&
            (t.verificationGasLimit = BigInt(d.verificationGasLimit)),
          d.paymasterPostOpGasLimit &&
            (t.paymasterPostOpGasLimit = BigInt(d.paymasterPostOpGasLimit)),
          d.paymasterVerificationGasLimit &&
            (t.paymasterVerificationGasLimit = BigInt(
              d.paymasterVerificationGasLimit
            )),
          t
        );
      } catch (a) {
        let e = t.calls;
        throw el(a, { ...o, ...(e ? { calls: e } : {}) });
      }
    }
    async function eS(e, { hash: t }) {
      let a,
        n = await e.request(
          { method: "eth_getUserOperationByHash", params: [t] },
          { dedupe: !0 }
        );
      if (!n) throw new eu({ hash: t });
      let {
        blockHash: i,
        blockNumber: r,
        entryPoint: s,
        transactionHash: o,
        userOperation: d,
      } = n;
      return {
        blockHash: i,
        blockNumber: BigInt(r),
        entryPoint: s,
        transactionHash: o,
        userOperation:
          ((a = { ...d }),
          d.callGasLimit && (a.callGasLimit = BigInt(d.callGasLimit)),
          d.maxFeePerGas && (a.maxFeePerGas = BigInt(d.maxFeePerGas)),
          d.maxPriorityFeePerGas &&
            (a.maxPriorityFeePerGas = BigInt(d.maxPriorityFeePerGas)),
          d.nonce && (a.nonce = BigInt(d.nonce)),
          d.paymasterPostOpGasLimit &&
            (a.paymasterPostOpGasLimit = BigInt(d.paymasterPostOpGasLimit)),
          d.paymasterVerificationGasLimit &&
            (a.paymasterVerificationGasLimit = BigInt(
              d.paymasterVerificationGasLimit
            )),
          d.preVerificationGas &&
            (a.preVerificationGas = BigInt(d.preVerificationGas)),
          d.verificationGasLimit &&
            (a.verificationGasLimit = BigInt(d.verificationGasLimit)),
          a),
      };
    }
    var eC = e.i(856324),
      eO = e.i(839080);
    async function eF(e, { hash: t }) {
      let a,
        n = await e.request(
          { method: "eth_getUserOperationReceipt", params: [t] },
          { dedupe: !0 }
        );
      if (!n) throw new ec({ hash: t });
      return (
        (a = { ...n }),
        n.actualGasCost && (a.actualGasCost = BigInt(n.actualGasCost)),
        n.actualGasUsed && (a.actualGasUsed = BigInt(n.actualGasUsed)),
        n.logs && (a.logs = n.logs.map((e) => (0, eC.formatLog)(e))),
        n.receipt && (a.receipt = (0, eO.formatTransactionReceipt)(a.receipt)),
        a
      );
    }
    async function eI(e, t) {
      let { account: a = e.account, entryPointAddress: n } = t;
      if (!a && !t.sender) throw new g.AccountNotFoundError();
      let i = a ? (0, f.parseAccount)(a) : void 0,
        r = i ? await (0, b.getAction)(e, eE, "prepareUserOperation")(t) : t,
        s = t.signature || (await i?.signUserOperation?.(r)),
        o = eg({ ...r, signature: s });
      try {
        return await e.request(
          {
            method: "eth_sendUserOperation",
            params: [o, n ?? i?.entryPoint?.address],
          },
          { retryCount: 0 }
        );
      } catch (a) {
        let e = t.calls;
        throw el(a, { ...r, ...(e ? { calls: e } : {}), signature: s });
      }
    }
    var eG = e.i(43473),
      eB = e.i(976215),
      eM = e.i(34888);
    function eL(e, t) {
      let {
          hash: a,
          pollingInterval: n = e.pollingInterval,
          retryCount: i,
          timeout: r = 12e4,
        } = t,
        s = 0,
        o = (0, eM.stringify)(["waitForUserOperationReceipt", e.uid, a]);
      return new Promise((t, d) => {
        let c = (0, eG.observe)(o, { resolve: t, reject: d }, (t) => {
          let o = (e) => {
              u(), e(), c();
            },
            d = r
              ? setTimeout(() => o(() => t.reject(new ep({ hash: a }))), r)
              : void 0,
            u = (0, eB.poll)(
              async () => {
                i &&
                  s >= i &&
                  (clearTimeout(d), o(() => t.reject(new ep({ hash: a }))));
                try {
                  let n = await (0, b.getAction)(
                    e,
                    eF,
                    "getUserOperationReceipt"
                  )({ hash: a });
                  clearTimeout(d), o(() => t.resolve(n));
                } catch (e) {
                  "UserOperationReceiptNotFoundError" !== e.name &&
                    (clearTimeout(d), o(() => t.reject(e)));
                }
                s++;
              },
              { emitOnBegin: !0, interval: n }
            );
          return u;
        });
      });
    }
    function ek(e) {
      return {
        estimateUserOperationGas: (t) => eT(e, t),
        getChainId: () => (0, m.getChainId)(e),
        getSupportedEntryPoints: () =>
          e.request({ method: "eth_supportedEntryPoints" }),
        getUserOperation: (t) => eS(e, t),
        getUserOperationReceipt: (t) => eF(e, t),
        prepareUserOperation: (t) => eE(e, t),
        sendUserOperation: (t) => eI(e, t),
        waitForUserOperationReceipt: (t) => eL(e, t),
      };
    }
    let eU = (e) => {
      let [t, a] =
        e >= 100 && e < 200
          ? ["pending", e]
          : e >= 200 && e < 300
          ? ["success", e]
          : e >= 300 && e < 700
          ? ["failure", e]
          : "CONFIRMED" === e
          ? ["success", 200]
          : "PENDING" === e
          ? ["pending", 100]
          : [void 0, e];
      return [t, a];
    };
    async function e_(e, t) {
      let a = t.id,
        n =
          e.chain?.id ??
          e.account?.client.chain?.id ??
          (0, b.getAction)(e, m.getChainId, "getChainId")(e);
      try {
        let i = await (0, b.getAction)(
            e,
            eF,
            "getUserOperationReceipt"
          )({ hash: t.id }),
          r = i.success,
          [s, o] = eU(r ? 200 : 500);
        return {
          id: a,
          version: "1.0",
          chainId: await n,
          status: s,
          statusCode: o,
          atomic: !0,
          receipts: [
            {
              status: i.receipt.status,
              logs: i.receipt.logs,
              blockHash: i.receipt.blockHash,
              blockNumber: i.receipt.blockNumber,
              gasUsed: i.receipt.gasUsed,
              transactionHash: i.receipt.transactionHash,
            },
          ],
        };
      } catch {
        let [e, t] = eU(100);
        return {
          id: a,
          version: "1.0",
          chainId: await n,
          atomic: !0,
          status: e,
          statusCode: t,
        };
      }
    }
    async function eN(e, t) {
      return {
        id: await (0, b.getAction)(e, eI, "sendUserOperation")({ ...t }),
      };
    }
    var eR = w;
    class eV extends eR.BaseError {
      constructor({ docsPath: e } = {}) {
        super(
          "Could not find an Account to execute with this Action.\nPlease provide an Account with the `account` argument on the Action, or by supplying an `account` to the Client.",
          { docsPath: e, docsSlug: "account", name: "AccountNotFoundError" }
        );
      }
    }
    async function eH(e, t) {
      let a;
      if ("to" in t) {
        let {
          account: n = e.account,
          data: i,
          maxFeePerGas: r,
          maxPriorityFeePerGas: s,
          to: o,
          value: d,
          nonce: c,
        } = t;
        if (!n)
          throw new eV({ docsPath: "/docs/actions/wallet/sendTransaction" });
        let u = (0, f.parseAccount)(n);
        if (!o) throw Error("Missing to address");
        a = await (0, b.getAction)(
          e,
          eI,
          "sendUserOperation"
        )({
          ...t,
          calls: [{ to: o, value: d || BigInt(0), data: i || "0x" }],
          account: u,
          maxFeePerGas: r,
          maxPriorityFeePerGas: s,
          nonce: c ? BigInt(c) : void 0,
        });
      } else a = await (0, b.getAction)(e, eI, "sendUserOperation")({ ...t });
      let n = await (0, b.getAction)(
        e,
        eL,
        "waitForUserOperationReceipt"
      )({ hash: a });
      return n?.receipt.transactionHash;
    }
    async function eW(e, { account: t = e.account, message: a }) {
      if (!t) throw new eV({ docsPath: "/docs/actions/wallet/signMessage" });
      return (0, f.parseAccount)(t).signMessage({ message: a });
    }
    var ez = e.i(643506);
    async function ej(
      e,
      {
        account: t = e.account,
        domain: a,
        message: n,
        primaryType: i,
        types: r,
      }
    ) {
      if (!t) throw new eV({ docsPath: "/docs/actions/wallet/signMessage" });
      let s = (0, f.parseAccount)(t),
        o = {
          EIP712Domain: (0, ez.getTypesForEIP712Domain)({ domain: a }),
          ...r,
        };
      return (
        (0, ez.validateTypedData)({
          domain: a,
          message: n,
          primaryType: i,
          types: o,
        }),
        s.signTypedData({ domain: a, primaryType: i, types: o, message: n })
      );
    }
    async function e$(
      e,
      { abi: t, address: a, args: n, dataSuffix: i, functionName: r, ...s }
    ) {
      let o = (0, ew.encodeFunctionData)({ abi: t, args: n, functionName: r });
      return await (0, b.getAction)(
        e,
        eH,
        "sendTransaction"
      )({ data: `${o}${i ? i.replace("0x", "") : ""}`, to: a, ...s });
    }
    function eq(e) {
      return {
        sendTransaction: (t) => eH(e, t),
        signMessage: (t) => eW(e, t),
        signTypedData: (t) => ej(e, t),
        writeContract: (t) => e$(e, t),
        sendCalls: (t) => eN(e, t),
        getCallsStatus: (t) => e_(e, t),
      };
    }
    var eY = e.i(388750);
    let eK = async (e, t) => {
        let { address: a, entryPointAddress: n, key: i = BigInt(0) } = t;
        return await (0, b.getAction)(
          e,
          eY.readContract,
          "readContract"
        )({
          address: n,
          abi: [
            {
              inputs: [
                { name: "sender", type: "address" },
                { name: "key", type: "uint192" },
              ],
              name: "getNonce",
              outputs: [{ name: "nonce", type: "uint256" }],
              stateMutability: "view",
              type: "function",
            },
          ],
          functionName: "getNonce",
          args: [a, i],
        });
      },
      eJ = [
        {
          inputs: [
            { name: "preOpGas", type: "uint256" },
            { name: "paid", type: "uint256" },
            { name: "validAfter", type: "uint48" },
            { name: "validUntil", type: "uint48" },
            { name: "targetSuccess", type: "bool" },
            { name: "targetResult", type: "bytes" },
          ],
          name: "ExecutionResult",
          type: "error",
        },
        {
          inputs: [
            { name: "opIndex", type: "uint256" },
            { name: "reason", type: "string" },
          ],
          name: "FailedOp",
          type: "error",
        },
        {
          inputs: [{ name: "sender", type: "address" }],
          name: "SenderAddressResult",
          type: "error",
        },
        {
          inputs: [{ name: "aggregator", type: "address" }],
          name: "SignatureValidationFailed",
          type: "error",
        },
        {
          inputs: [
            {
              components: [
                { name: "preOpGas", type: "uint256" },
                { name: "prefund", type: "uint256" },
                { name: "sigFailed", type: "bool" },
                { name: "validAfter", type: "uint48" },
                { name: "validUntil", type: "uint48" },
                { name: "paymasterContext", type: "bytes" },
              ],
              name: "returnInfo",
              type: "tuple",
            },
            {
              components: [
                { name: "stake", type: "uint256" },
                { name: "unstakeDelaySec", type: "uint256" },
              ],
              name: "senderInfo",
              type: "tuple",
            },
            {
              components: [
                { name: "stake", type: "uint256" },
                { name: "unstakeDelaySec", type: "uint256" },
              ],
              name: "factoryInfo",
              type: "tuple",
            },
            {
              components: [
                { name: "stake", type: "uint256" },
                { name: "unstakeDelaySec", type: "uint256" },
              ],
              name: "paymasterInfo",
              type: "tuple",
            },
          ],
          name: "ValidationResult",
          type: "error",
        },
        {
          inputs: [
            {
              components: [
                { name: "preOpGas", type: "uint256" },
                { name: "prefund", type: "uint256" },
                { name: "sigFailed", type: "bool" },
                { name: "validAfter", type: "uint48" },
                { name: "validUntil", type: "uint48" },
                { name: "paymasterContext", type: "bytes" },
              ],
              name: "returnInfo",
              type: "tuple",
            },
            {
              components: [
                { name: "stake", type: "uint256" },
                { name: "unstakeDelaySec", type: "uint256" },
              ],
              name: "senderInfo",
              type: "tuple",
            },
            {
              components: [
                { name: "stake", type: "uint256" },
                { name: "unstakeDelaySec", type: "uint256" },
              ],
              name: "factoryInfo",
              type: "tuple",
            },
            {
              components: [
                { name: "stake", type: "uint256" },
                { name: "unstakeDelaySec", type: "uint256" },
              ],
              name: "paymasterInfo",
              type: "tuple",
            },
            {
              components: [
                { name: "aggregator", type: "address" },
                {
                  components: [
                    { name: "stake", type: "uint256" },
                    { name: "unstakeDelaySec", type: "uint256" },
                  ],
                  name: "stakeInfo",
                  type: "tuple",
                },
              ],
              name: "aggregatorInfo",
              type: "tuple",
            },
          ],
          name: "ValidationResultWithAggregation",
          type: "error",
        },
        {
          anonymous: !1,
          inputs: [
            { indexed: !0, name: "userOpHash", type: "bytes32" },
            { indexed: !0, name: "sender", type: "address" },
            { indexed: !1, name: "factory", type: "address" },
            { indexed: !1, name: "paymaster", type: "address" },
          ],
          name: "AccountDeployed",
          type: "event",
        },
        { anonymous: !1, inputs: [], name: "BeforeExecution", type: "event" },
        {
          anonymous: !1,
          inputs: [
            { indexed: !0, name: "account", type: "address" },
            { indexed: !1, name: "totalDeposit", type: "uint256" },
          ],
          name: "Deposited",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [{ indexed: !0, name: "aggregator", type: "address" }],
          name: "SignatureAggregatorChanged",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            { indexed: !0, name: "account", type: "address" },
            { indexed: !1, name: "totalStaked", type: "uint256" },
            { indexed: !1, name: "unstakeDelaySec", type: "uint256" },
          ],
          name: "StakeLocked",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            { indexed: !0, name: "account", type: "address" },
            { indexed: !1, name: "withdrawTime", type: "uint256" },
          ],
          name: "StakeUnlocked",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            { indexed: !0, name: "account", type: "address" },
            { indexed: !1, name: "withdrawAddress", type: "address" },
            { indexed: !1, name: "amount", type: "uint256" },
          ],
          name: "StakeWithdrawn",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            { indexed: !0, name: "userOpHash", type: "bytes32" },
            { indexed: !0, name: "sender", type: "address" },
            { indexed: !0, name: "paymaster", type: "address" },
            { indexed: !1, name: "nonce", type: "uint256" },
            { indexed: !1, name: "success", type: "bool" },
            { indexed: !1, name: "actualGasCost", type: "uint256" },
            { indexed: !1, name: "actualGasUsed", type: "uint256" },
          ],
          name: "UserOperationEvent",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            { indexed: !0, name: "userOpHash", type: "bytes32" },
            { indexed: !0, name: "sender", type: "address" },
            { indexed: !1, name: "nonce", type: "uint256" },
            { indexed: !1, name: "revertReason", type: "bytes" },
          ],
          name: "UserOperationRevertReason",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            { indexed: !0, name: "account", type: "address" },
            { indexed: !1, name: "withdrawAddress", type: "address" },
            { indexed: !1, name: "amount", type: "uint256" },
          ],
          name: "Withdrawn",
          type: "event",
        },
        {
          inputs: [],
          name: "SIG_VALIDATION_FAILED",
          outputs: [{ name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { name: "initCode", type: "bytes" },
            { name: "sender", type: "address" },
            { name: "paymasterAndData", type: "bytes" },
          ],
          name: "_validateSenderAndPaymaster",
          outputs: [],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [{ name: "unstakeDelaySec", type: "uint32" }],
          name: "addStake",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [{ name: "account", type: "address" }],
          name: "balanceOf",
          outputs: [{ name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [{ name: "account", type: "address" }],
          name: "depositTo",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [{ name: "", type: "address" }],
          name: "deposits",
          outputs: [
            { name: "deposit", type: "uint112" },
            { name: "staked", type: "bool" },
            { name: "stake", type: "uint112" },
            { name: "unstakeDelaySec", type: "uint32" },
            { name: "withdrawTime", type: "uint48" },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [{ name: "account", type: "address" }],
          name: "getDepositInfo",
          outputs: [
            {
              components: [
                { name: "deposit", type: "uint112" },
                { name: "staked", type: "bool" },
                { name: "stake", type: "uint112" },
                { name: "unstakeDelaySec", type: "uint32" },
                { name: "withdrawTime", type: "uint48" },
              ],
              name: "info",
              type: "tuple",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { name: "sender", type: "address" },
            { name: "key", type: "uint192" },
          ],
          name: "getNonce",
          outputs: [{ name: "nonce", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [{ name: "initCode", type: "bytes" }],
          name: "getSenderAddress",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              components: [
                { name: "sender", type: "address" },
                { name: "nonce", type: "uint256" },
                { name: "initCode", type: "bytes" },
                { name: "callData", type: "bytes" },
                { name: "callGasLimit", type: "uint256" },
                { name: "verificationGasLimit", type: "uint256" },
                { name: "preVerificationGas", type: "uint256" },
                { name: "maxFeePerGas", type: "uint256" },
                { name: "maxPriorityFeePerGas", type: "uint256" },
                { name: "paymasterAndData", type: "bytes" },
                { name: "signature", type: "bytes" },
              ],
              name: "userOp",
              type: "tuple",
            },
          ],
          name: "getUserOpHash",
          outputs: [{ name: "", type: "bytes32" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              components: [
                {
                  components: [
                    { name: "sender", type: "address" },
                    { name: "nonce", type: "uint256" },
                    { name: "initCode", type: "bytes" },
                    { name: "callData", type: "bytes" },
                    { name: "callGasLimit", type: "uint256" },
                    { name: "verificationGasLimit", type: "uint256" },
                    { name: "preVerificationGas", type: "uint256" },
                    { name: "maxFeePerGas", type: "uint256" },
                    { name: "maxPriorityFeePerGas", type: "uint256" },
                    { name: "paymasterAndData", type: "bytes" },
                    { name: "signature", type: "bytes" },
                  ],
                  name: "userOps",
                  type: "tuple[]",
                },
                { name: "aggregator", type: "address" },
                { name: "signature", type: "bytes" },
              ],
              name: "opsPerAggregator",
              type: "tuple[]",
            },
            { name: "beneficiary", type: "address" },
          ],
          name: "handleAggregatedOps",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              components: [
                { name: "sender", type: "address" },
                { name: "nonce", type: "uint256" },
                { name: "initCode", type: "bytes" },
                { name: "callData", type: "bytes" },
                { name: "callGasLimit", type: "uint256" },
                { name: "verificationGasLimit", type: "uint256" },
                { name: "preVerificationGas", type: "uint256" },
                { name: "maxFeePerGas", type: "uint256" },
                { name: "maxPriorityFeePerGas", type: "uint256" },
                { name: "paymasterAndData", type: "bytes" },
                { name: "signature", type: "bytes" },
              ],
              name: "ops",
              type: "tuple[]",
            },
            { name: "beneficiary", type: "address" },
          ],
          name: "handleOps",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [{ name: "key", type: "uint192" }],
          name: "incrementNonce",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { name: "callData", type: "bytes" },
            {
              components: [
                {
                  components: [
                    { name: "sender", type: "address" },
                    { name: "nonce", type: "uint256" },
                    { name: "callGasLimit", type: "uint256" },
                    { name: "verificationGasLimit", type: "uint256" },
                    { name: "preVerificationGas", type: "uint256" },
                    { name: "paymaster", type: "address" },
                    { name: "maxFeePerGas", type: "uint256" },
                    { name: "maxPriorityFeePerGas", type: "uint256" },
                  ],
                  name: "mUserOp",
                  type: "tuple",
                },
                { name: "userOpHash", type: "bytes32" },
                { name: "prefund", type: "uint256" },
                { name: "contextOffset", type: "uint256" },
                { name: "preOpGas", type: "uint256" },
              ],
              name: "opInfo",
              type: "tuple",
            },
            { name: "context", type: "bytes" },
          ],
          name: "innerHandleOp",
          outputs: [{ name: "actualGasCost", type: "uint256" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { name: "", type: "address" },
            { name: "", type: "uint192" },
          ],
          name: "nonceSequenceNumber",
          outputs: [{ name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              components: [
                { name: "sender", type: "address" },
                { name: "nonce", type: "uint256" },
                { name: "initCode", type: "bytes" },
                { name: "callData", type: "bytes" },
                { name: "callGasLimit", type: "uint256" },
                { name: "verificationGasLimit", type: "uint256" },
                { name: "preVerificationGas", type: "uint256" },
                { name: "maxFeePerGas", type: "uint256" },
                { name: "maxPriorityFeePerGas", type: "uint256" },
                { name: "paymasterAndData", type: "bytes" },
                { name: "signature", type: "bytes" },
              ],
              name: "op",
              type: "tuple",
            },
            { name: "target", type: "address" },
            { name: "targetCallData", type: "bytes" },
          ],
          name: "simulateHandleOp",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              components: [
                { name: "sender", type: "address" },
                { name: "nonce", type: "uint256" },
                { name: "initCode", type: "bytes" },
                { name: "callData", type: "bytes" },
                { name: "callGasLimit", type: "uint256" },
                { name: "verificationGasLimit", type: "uint256" },
                { name: "preVerificationGas", type: "uint256" },
                { name: "maxFeePerGas", type: "uint256" },
                { name: "maxPriorityFeePerGas", type: "uint256" },
                { name: "paymasterAndData", type: "bytes" },
                { name: "signature", type: "bytes" },
              ],
              name: "userOp",
              type: "tuple",
            },
          ],
          name: "simulateValidation",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "unlockStake",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [{ name: "withdrawAddress", type: "address" }],
          name: "withdrawStake",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { name: "withdrawAddress", type: "address" },
            { name: "withdrawAmount", type: "uint256" },
          ],
          name: "withdrawTo",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        { stateMutability: "payable", type: "receive" },
      ],
      eX = [
        {
          inputs: [
            { name: "success", type: "bool" },
            { name: "ret", type: "bytes" },
          ],
          name: "DelegateAndRevert",
          type: "error",
        },
        {
          inputs: [
            { name: "opIndex", type: "uint256" },
            { name: "reason", type: "string" },
          ],
          name: "FailedOp",
          type: "error",
        },
        {
          inputs: [
            { name: "opIndex", type: "uint256" },
            { name: "reason", type: "string" },
            { name: "inner", type: "bytes" },
          ],
          name: "FailedOpWithRevert",
          type: "error",
        },
        {
          inputs: [{ name: "returnData", type: "bytes" }],
          name: "PostOpReverted",
          type: "error",
        },
        { inputs: [], name: "ReentrancyGuardReentrantCall", type: "error" },
        {
          inputs: [{ name: "sender", type: "address" }],
          name: "SenderAddressResult",
          type: "error",
        },
        {
          inputs: [{ name: "aggregator", type: "address" }],
          name: "SignatureValidationFailed",
          type: "error",
        },
        {
          anonymous: !1,
          inputs: [
            { indexed: !0, name: "userOpHash", type: "bytes32" },
            { indexed: !0, name: "sender", type: "address" },
            { indexed: !1, name: "factory", type: "address" },
            { indexed: !1, name: "paymaster", type: "address" },
          ],
          name: "AccountDeployed",
          type: "event",
        },
        { anonymous: !1, inputs: [], name: "BeforeExecution", type: "event" },
        {
          anonymous: !1,
          inputs: [
            { indexed: !0, name: "account", type: "address" },
            { indexed: !1, name: "totalDeposit", type: "uint256" },
          ],
          name: "Deposited",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            { indexed: !0, name: "userOpHash", type: "bytes32" },
            { indexed: !0, name: "sender", type: "address" },
            { indexed: !1, name: "nonce", type: "uint256" },
            { indexed: !1, name: "revertReason", type: "bytes" },
          ],
          name: "PostOpRevertReason",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [{ indexed: !0, name: "aggregator", type: "address" }],
          name: "SignatureAggregatorChanged",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            { indexed: !0, name: "account", type: "address" },
            { indexed: !1, name: "totalStaked", type: "uint256" },
            { indexed: !1, name: "unstakeDelaySec", type: "uint256" },
          ],
          name: "StakeLocked",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            { indexed: !0, name: "account", type: "address" },
            { indexed: !1, name: "withdrawTime", type: "uint256" },
          ],
          name: "StakeUnlocked",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            { indexed: !0, name: "account", type: "address" },
            { indexed: !1, name: "withdrawAddress", type: "address" },
            { indexed: !1, name: "amount", type: "uint256" },
          ],
          name: "StakeWithdrawn",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            { indexed: !0, name: "userOpHash", type: "bytes32" },
            { indexed: !0, name: "sender", type: "address" },
            { indexed: !0, name: "paymaster", type: "address" },
            { indexed: !1, name: "nonce", type: "uint256" },
            { indexed: !1, name: "success", type: "bool" },
            { indexed: !1, name: "actualGasCost", type: "uint256" },
            { indexed: !1, name: "actualGasUsed", type: "uint256" },
          ],
          name: "UserOperationEvent",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            { indexed: !0, name: "userOpHash", type: "bytes32" },
            { indexed: !0, name: "sender", type: "address" },
            { indexed: !1, name: "nonce", type: "uint256" },
          ],
          name: "UserOperationPrefundTooLow",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            { indexed: !0, name: "userOpHash", type: "bytes32" },
            { indexed: !0, name: "sender", type: "address" },
            { indexed: !1, name: "nonce", type: "uint256" },
            { indexed: !1, name: "revertReason", type: "bytes" },
          ],
          name: "UserOperationRevertReason",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            { indexed: !0, name: "account", type: "address" },
            { indexed: !1, name: "withdrawAddress", type: "address" },
            { indexed: !1, name: "amount", type: "uint256" },
          ],
          name: "Withdrawn",
          type: "event",
        },
        {
          inputs: [{ name: "unstakeDelaySec", type: "uint32" }],
          name: "addStake",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [{ name: "account", type: "address" }],
          name: "balanceOf",
          outputs: [{ name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { name: "target", type: "address" },
            { name: "data", type: "bytes" },
          ],
          name: "delegateAndRevert",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [{ name: "account", type: "address" }],
          name: "depositTo",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [{ name: "", type: "address" }],
          name: "deposits",
          outputs: [
            { name: "deposit", type: "uint256" },
            { name: "staked", type: "bool" },
            { name: "stake", type: "uint112" },
            { name: "unstakeDelaySec", type: "uint32" },
            { name: "withdrawTime", type: "uint48" },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [{ name: "account", type: "address" }],
          name: "getDepositInfo",
          outputs: [
            {
              components: [
                { name: "deposit", type: "uint256" },
                { name: "staked", type: "bool" },
                { name: "stake", type: "uint112" },
                { name: "unstakeDelaySec", type: "uint32" },
                { name: "withdrawTime", type: "uint48" },
              ],
              name: "info",
              type: "tuple",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { name: "sender", type: "address" },
            { name: "key", type: "uint192" },
          ],
          name: "getNonce",
          outputs: [{ name: "nonce", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [{ name: "initCode", type: "bytes" }],
          name: "getSenderAddress",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              components: [
                { name: "sender", type: "address" },
                { name: "nonce", type: "uint256" },
                { name: "initCode", type: "bytes" },
                { name: "callData", type: "bytes" },
                { name: "accountGasLimits", type: "bytes32" },
                { name: "preVerificationGas", type: "uint256" },
                { name: "gasFees", type: "bytes32" },
                { name: "paymasterAndData", type: "bytes" },
                { name: "signature", type: "bytes" },
              ],
              name: "userOp",
              type: "tuple",
            },
          ],
          name: "getUserOpHash",
          outputs: [{ name: "", type: "bytes32" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              components: [
                {
                  components: [
                    { name: "sender", type: "address" },
                    { name: "nonce", type: "uint256" },
                    { name: "initCode", type: "bytes" },
                    { name: "callData", type: "bytes" },
                    { name: "accountGasLimits", type: "bytes32" },
                    { name: "preVerificationGas", type: "uint256" },
                    { name: "gasFees", type: "bytes32" },
                    { name: "paymasterAndData", type: "bytes" },
                    { name: "signature", type: "bytes" },
                  ],
                  name: "userOps",
                  type: "tuple[]",
                },
                { name: "aggregator", type: "address" },
                { name: "signature", type: "bytes" },
              ],
              name: "opsPerAggregator",
              type: "tuple[]",
            },
            { name: "beneficiary", type: "address" },
          ],
          name: "handleAggregatedOps",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              components: [
                { name: "sender", type: "address" },
                { name: "nonce", type: "uint256" },
                { name: "initCode", type: "bytes" },
                { name: "callData", type: "bytes" },
                { name: "accountGasLimits", type: "bytes32" },
                { name: "preVerificationGas", type: "uint256" },
                { name: "gasFees", type: "bytes32" },
                { name: "paymasterAndData", type: "bytes" },
                { name: "signature", type: "bytes" },
              ],
              name: "ops",
              type: "tuple[]",
            },
            { name: "beneficiary", type: "address" },
          ],
          name: "handleOps",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [{ name: "key", type: "uint192" }],
          name: "incrementNonce",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { name: "callData", type: "bytes" },
            {
              components: [
                {
                  components: [
                    { name: "sender", type: "address" },
                    { name: "nonce", type: "uint256" },
                    { name: "verificationGasLimit", type: "uint256" },
                    { name: "callGasLimit", type: "uint256" },
                    { name: "paymasterVerificationGasLimit", type: "uint256" },
                    { name: "paymasterPostOpGasLimit", type: "uint256" },
                    { name: "preVerificationGas", type: "uint256" },
                    { name: "paymaster", type: "address" },
                    { name: "maxFeePerGas", type: "uint256" },
                    { name: "maxPriorityFeePerGas", type: "uint256" },
                  ],
                  name: "mUserOp",
                  type: "tuple",
                },
                { name: "userOpHash", type: "bytes32" },
                { name: "prefund", type: "uint256" },
                { name: "contextOffset", type: "uint256" },
                { name: "preOpGas", type: "uint256" },
              ],
              name: "opInfo",
              type: "tuple",
            },
            { name: "context", type: "bytes" },
          ],
          name: "innerHandleOp",
          outputs: [{ name: "actualGasCost", type: "uint256" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { name: "", type: "address" },
            { name: "", type: "uint192" },
          ],
          name: "nonceSequenceNumber",
          outputs: [{ name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [{ name: "interfaceId", type: "bytes4" }],
          name: "supportsInterface",
          outputs: [{ name: "", type: "bool" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "unlockStake",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [{ name: "withdrawAddress", type: "address" }],
          name: "withdrawStake",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { name: "withdrawAddress", type: "address" },
            { name: "withdrawAmount", type: "uint256" },
          ],
          name: "withdrawTo",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        { stateMutability: "payable", type: "receive" },
      ],
      eQ = "0x0000000071727De22E5E9d8BAf0edAc6f37da032";
    var eZ = e.i(704434),
      e0 = e.i(831095),
      e2 = e.i(995062);
    function e6(e, t = {}) {
      let { forHash: a } = t,
        { authorization: n, factory: i, factoryData: r } = e;
      return a &&
        ("0x7702" === i || "0x7702000000000000000000000000000000000000" === i)
        ? n
          ? (0, ex.concat)([n.address, r ?? "0x"])
          : "0x7702000000000000000000000000000000000000"
        : i
        ? (0, ex.concat)([i, r ?? "0x"])
        : "0x";
    }
    var e5 = e.i(401319);
    let e1 = "0x22e325a297439656";
    function e3(e, t = {}) {
      let {
          callGasLimit: a,
          callData: n,
          maxPriorityFeePerGas: i,
          maxFeePerGas: r,
          paymaster: s,
          paymasterData: o,
          paymasterPostOpGasLimit: d,
          paymasterSignature: c,
          paymasterVerificationGasLimit: u,
          sender: p,
          signature: y = "0x",
          verificationGasLimit: l,
        } = e,
        m = (0, ex.concat)([
          (0, ef.pad)((0, em.numberToHex)(l || 0n), { size: 16 }),
          (0, ef.pad)((0, em.numberToHex)(a || 0n), { size: 16 }),
        ]),
        f = e6(e, t),
        g = (0, ex.concat)([
          (0, ef.pad)((0, em.numberToHex)(i || 0n), { size: 16 }),
          (0, ef.pad)((0, em.numberToHex)(r || 0n), { size: 16 }),
        ]),
        b = e.nonce ?? 0n;
      return {
        accountGasLimits: m,
        callData: n,
        initCode: f,
        gasFees: g,
        nonce: b,
        paymasterAndData: s
          ? (0, ex.concat)([
              s,
              (0, ef.pad)((0, em.numberToHex)(u || 0n), { size: 16 }),
              (0, ef.pad)((0, em.numberToHex)(d || 0n), { size: 16 }),
              o || "0x",
              ...(c
                ? t.forHash
                  ? [e1]
                  : [
                      c,
                      (0, ef.pad)((0, em.numberToHex)((0, e5.size)(c)), {
                        size: 2,
                      }),
                      e1,
                    ]
                : []),
            ])
          : "0x",
        preVerificationGas: e.preVerificationGas ?? 0n,
        sender: p,
        signature: y,
      };
    }
    let e4 = {
      PackedUserOperation: [
        { type: "address", name: "sender" },
        { type: "uint256", name: "nonce" },
        { type: "bytes", name: "initCode" },
        { type: "bytes", name: "callData" },
        { type: "bytes32", name: "accountGasLimits" },
        { type: "uint256", name: "preVerificationGas" },
        { type: "bytes32", name: "gasFees" },
        { type: "bytes", name: "paymasterAndData" },
      ],
    };
    function e7(e) {
      let { chainId: t, entryPointAddress: a, entryPointVersion: n } = e,
        i = e.userOperation,
        {
          authorization: r,
          callData: s = "0x",
          callGasLimit: o,
          maxFeePerGas: d,
          maxPriorityFeePerGas: c,
          nonce: u,
          paymasterAndData: p = "0x",
          preVerificationGas: y,
          sender: l,
          verificationGasLimit: m,
        } = i;
      if ("0.8" === n || "0.9" === n)
        return (0, e2.hashTypedData)(
          (function (e) {
            let { chainId: t, entryPointAddress: a, userOperation: n } = e;
            return {
              types: e4,
              primaryType: "PackedUserOperation",
              domain: {
                name: "ERC4337",
                version: "1",
                chainId: t,
                verifyingContract: a,
              },
              message: e3(n, { forHash: !0 }),
            };
          })({ chainId: t, entryPointAddress: a, userOperation: i })
        );
      let f = (() => {
        if ("0.6" === n) {
          let e = e6(
            {
              authorization: r,
              factory: i.initCode?.slice(0, 42),
              factoryData: i.initCode?.slice(42),
            },
            { forHash: !0 }
          );
          return (0, eZ.encodeAbiParameters)(
            [
              { type: "address" },
              { type: "uint256" },
              { type: "bytes32" },
              { type: "bytes32" },
              { type: "uint256" },
              { type: "uint256" },
              { type: "uint256" },
              { type: "uint256" },
              { type: "uint256" },
              { type: "bytes32" },
            ],
            [
              l,
              u,
              (0, e0.keccak256)(e),
              (0, e0.keccak256)(s),
              o,
              m,
              y,
              d,
              c,
              (0, e0.keccak256)(p),
            ]
          );
        }
        if ("0.7" === n) {
          let e = e3(i, { forHash: !0 });
          return (0, eZ.encodeAbiParameters)(
            [
              { type: "address" },
              { type: "uint256" },
              { type: "bytes32" },
              { type: "bytes32" },
              { type: "bytes32" },
              { type: "uint256" },
              { type: "bytes32" },
              { type: "bytes32" },
            ],
            [
              e.sender,
              e.nonce,
              (0, e0.keccak256)(e.initCode),
              (0, e0.keccak256)(e.callData),
              e.accountGasLimits,
              e.preVerificationGas,
              e.gasFees,
              (0, e0.keccak256)(e.paymasterAndData),
            ]
          );
        }
        throw Error(`entryPointVersion "${n}" not supported.`);
      })();
      return (0, e0.keccak256)(
        (0, eZ.encodeAbiParameters)(
          [{ type: "bytes32" }, { type: "address" }, { type: "uint256" }],
          [(0, e0.keccak256)(f), a, BigInt(t)]
        )
      );
    }
    var e9 = e.i(251701),
      e8 = e.i(528804),
      te = (e.i(937445), e.i(976677)),
      tt = e.i(769936);
    function ta(e) {
      let { address: t, data: a, signature: n, to: i = "hex" } = e,
        r = (0, ex.concatHex)([
          (0, eZ.encodeAbiParameters)(
            [{ type: "address" }, { type: "bytes" }, { type: "bytes" }],
            [t, a, n]
          ),
          "0x6492649264926492649264926492649264926492649264926492649264926492",
        ]);
      return "hex" === i ? r : (0, tt.hexToBytes)(r);
    }
    async function tn(e) {
      let {
          extend: t,
          nonceKeyManager: a = (function (e) {
            let { source: t } = e,
              a = new Map(),
              n = new te.LruMap(8192),
              i = new Map(),
              r = ({ address: e, chainId: t }) => `${e}.${t}`,
              s = (e) => {
                a.delete(e), i.delete(e);
              };
            return {
              async consume({ address: e, chainId: a, client: i }) {
                let s = r({ address: e, chainId: a }),
                  o = this.get({ address: e, chainId: a, client: i });
                this.increment({ address: e, chainId: a });
                let d = await o;
                return (
                  await t.set({ address: e, chainId: a }, d), n.set(s, d), d
                );
              },
              async increment({ address: e, chainId: t }) {
                let n = r({ address: e, chainId: t }),
                  i = a.get(n) ?? 0;
                a.set(n, i + 1);
              },
              async get({ address: e, chainId: o, client: d }) {
                let c = r({ address: e, chainId: o }),
                  u = i.get(c);
                return (
                  u ||
                    ((u = (async () => {
                      try {
                        let a = await t.get({
                            address: e,
                            chainId: o,
                            client: d,
                          }),
                          i = n.get(c) ?? 0;
                        if (i > 0 && a <= i) return i + 1;
                        return n.delete(c), a;
                      } finally {
                        s(c);
                      }
                    })()),
                    i.set(c, u)),
                  (a.get(c) ?? 0) + (await u)
                );
              },
              reset({ address: e, chainId: t }) {
                let a = r({ address: e, chainId: t });
                n.delete(a), s(a);
              },
            };
          })({ source: { get: () => Date.now(), set() {} } }),
          ...n
        } = e,
        i = !1,
        r = await e.getAddress();
      return {
        ...t,
        ...n,
        address: r,
        async getFactoryArgs() {
          return "isDeployed" in this && (await this.isDeployed())
            ? { factory: void 0, factoryData: void 0 }
            : e.getFactoryArgs();
        },
        async getNonce(t) {
          let n =
            t?.key ??
            BigInt(
              await a.consume({
                address: r,
                chainId: e.client.chain.id,
                client: e.client,
              })
            );
          return e.getNonce
            ? await e.getNonce({ ...t, key: n })
            : await (0, eY.readContract)(e.client, {
                abi: (0, e9.parseAbi)([
                  "function getNonce(address, uint192) pure returns (uint256)",
                ]),
                address: e.entryPoint.address,
                functionName: "getNonce",
                args: [r, n],
              });
        },
        isDeployed: async () =>
          !!i ||
          (i = !!(await (0, b.getAction)(
            e.client,
            e8.getCode,
            "getCode"
          )({ address: r }))),
        ...(e.sign
          ? {
              async sign(t) {
                let [{ factory: a, factoryData: n }, i] = await Promise.all([
                  this.getFactoryArgs(),
                  e.sign(t),
                ]);
                return a && n ? ta({ address: a, data: n, signature: i }) : i;
              },
            }
          : {}),
        async signMessage(t) {
          let [{ factory: a, factoryData: n }, i] = await Promise.all([
            this.getFactoryArgs(),
            e.signMessage(t),
          ]);
          return a && n && "0x7702" !== a
            ? ta({ address: a, data: n, signature: i })
            : i;
        },
        async signTypedData(t) {
          let [{ factory: a, factoryData: n }, i] = await Promise.all([
            this.getFactoryArgs(),
            e.signTypedData(t),
          ]);
          return a && n && "0x7702" !== a
            ? ta({ address: a, data: n, signature: i })
            : i;
        },
        type: "smart",
      };
    }
    var ti = e.i(57159),
      tr = e.i(911347),
      ts = e.i(608861),
      to = e.i(796516),
      td = e.i(431254);
    async function tc({ owner: e, address: t }) {
      let a;
      if ("type" in e && "local" === e.type) return e;
      if ("request" in e) {
        if (!t)
          try {
            [t] = await e.request({ method: "eth_requestAccounts" });
          } catch {
            [t] = await e.request({ method: "eth_accounts" });
          }
        if (!t) throw Error("address is required");
        a = (0, ti.createWalletClient)({
          account: t,
          transport: (0, tr.custom)(e),
        });
      }
      a || (a = e);
      var n = {
        address: a.account.address,
        signMessage: async ({ message: e }) => a.signMessage({ message: e }),
        signTypedData: async (e) =>
          (0, b.getAction)(a, td.signTypedData, "signTypedData")(e),
        async signTransaction(e) {
          throw Error("Smart account signer doesn't need to sign transactions");
        },
      };
      !1;
      if (!(0, to.isAddress)(n.address, { strict: !1 }))
        throw new ts.InvalidAddressError({ address: n.address });
      return {
        address: n.address,
        nonceManager: n.nonceManager,
        sign: n.sign,
        signAuthorization: n.signAuthorization,
        signMessage: n.signMessage,
        signTransaction: n.signTransaction,
        signTypedData: n.signTypedData,
        source: "custom",
        type: "local",
      };
    }
    var tu = e.i(316819);
    let tp = async (e) => {
        try {
          let t = (0, tu.decodeFunctionData)({
              abi: [
                {
                  inputs: [
                    {
                      internalType: "address[]",
                      name: "dest",
                      type: "address[]",
                    },
                    {
                      internalType: "uint256[]",
                      name: "value",
                      type: "uint256[]",
                    },
                    { internalType: "bytes[]", name: "func", type: "bytes[]" },
                  ],
                  name: "executeBatch",
                  outputs: [],
                  stateMutability: "nonpayable",
                  type: "function",
                },
              ],
              data: e,
            }),
            a = [];
          for (let e = 0; e < t.args[0].length; e++)
            a.push({
              to: t.args[0][e],
              value: t.args[1][e],
              data: t.args[2][e],
            });
          return a;
        } catch (e) {}
        let t = (0, tu.decodeFunctionData)({
          abi: [
            {
              inputs: [
                { internalType: "address", name: "dest", type: "address" },
                { internalType: "uint256", name: "value", type: "uint256" },
                { internalType: "bytes", name: "func", type: "bytes" },
              ],
              name: "execute",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
          data: e,
        });
        return [{ to: t.args[0], value: t.args[1], data: t.args[2] }];
      },
      ty = async (e) => {
        if (e.length > 1)
          return (0, ew.encodeFunctionData)({
            abi: [
              {
                inputs: [
                  {
                    internalType: "address[]",
                    name: "dest",
                    type: "address[]",
                  },
                  {
                    internalType: "uint256[]",
                    name: "value",
                    type: "uint256[]",
                  },
                  { internalType: "bytes[]", name: "func", type: "bytes[]" },
                ],
                name: "executeBatch",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function",
              },
            ],
            functionName: "executeBatch",
            args: [
              e.map((e) => e.to),
              e.map((e) => e.value ?? 0n),
              e.map((e) => e.data ?? "0x"),
            ],
          });
        let t = 0 === e.length ? void 0 : e[0];
        if (!t) throw Error("No calls to encode");
        return (0, ew.encodeFunctionData)({
          abi: [
            {
              inputs: [
                { internalType: "address", name: "dest", type: "address" },
                { internalType: "uint256", name: "value", type: "uint256" },
                { internalType: "bytes", name: "func", type: "bytes" },
              ],
              name: "execute",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
          functionName: "execute",
          args: [t.to, t.value ?? 0n, t.data ?? "0x"],
        });
      },
      tl = async (e, t) => {
        let { adminAddress: a, factoryAddress: n, salt: i } = t;
        return (0, b.getAction)(
          e,
          eY.readContract,
          "readContract"
        )({
          address: n,
          abi: [
            {
              inputs: [
                { name: "_adminSigner", type: "address" },
                { name: "_data", type: "bytes" },
              ],
              name: "getAddress",
              outputs: [{ type: "address" }],
              stateMutability: "view",
              type: "function",
            },
          ],
          functionName: "getAddress",
          args: [a, i],
        });
      },
      tm = async ({ admin: e, salt: t }) =>
        (0, ew.encodeFunctionData)({
          abi: [
            {
              inputs: [
                { internalType: "address", name: "_admin", type: "address" },
                { internalType: "bytes", name: "_salt", type: "bytes" },
              ],
              name: "createAccount",
              outputs: [{ internalType: "address", type: "address" }],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
          functionName: "createAccount",
          args: [e, t],
        });
    var tf = e.i(658765);
    async function tg({ message: e, admin: t, accountAddress: a, chainId: n }) {
      let i = (0, tf.hashMessage)(e);
      return t.signTypedData({
        domain: {
          name: "Account",
          version: "1",
          chainId: n,
          verifyingContract: a,
        },
        primaryType: "AccountMessage",
        types: { AccountMessage: [{ name: "message", type: "bytes" }] },
        message: { message: i },
      });
    }
    async function tb(e) {
      let { admin: t, accountAddress: a, chainId: n, ...i } = e;
      if (i.domain?.verifyingContract?.toLowerCase() === a)
        return t.signTypedData({ ...i });
      let { message: r, primaryType: s, types: o, domain: d } = i,
        c = {
          EIP712Domain: (0, ez.getTypesForEIP712Domain)({ domain: d }),
          ...o,
        };
      (0, ez.validateTypedData)({
        domain: d,
        message: r,
        primaryType: s,
        types: c,
      });
      let u = (0, e2.hashTypedData)({
          message: r,
          primaryType: s,
          types: c,
          domain: d,
        }),
        p = (0, eZ.encodeAbiParameters)([{ type: "bytes32" }], [u]);
      return t.signTypedData({
        domain: {
          name: "Account",
          version: "1",
          chainId: n,
          verifyingContract: a,
        },
        primaryType: "AccountMessage",
        types: { AccountMessage: [{ name: "message", type: "bytes" }] },
        message: { message: p },
      });
    }
    let th = {
      0.6: {
        "1.5.20": {
          factoryAddress: "0x85e23b94e7F5E9cC1fF78BCe78cfb15B81f0DF00",
        },
      },
      0.7: {
        "1.5.20": {
          factoryAddress: "0x4be0ddfebca9a5a4a617dee4dece99e7c862dceb",
        },
      },
    };
    async function tw(e) {
      let t,
        a = {
          address: e.entryPoint?.address ?? eQ,
          abi: (e.entryPoint?.version ?? "0.7") === "0.6" ? eJ : eX,
          version: e.entryPoint?.version ?? "0.7",
        },
        {
          owner: n,
          client: i,
          salt: r,
          version: s,
          address: o,
          factoryAddress: d = th[a.version][s ?? "1.5.20"].factoryAddress,
        } = e,
        c = await tc({ owner: n }),
        u = o,
        p = async () =>
          t ||
          (t = i.chain
            ? i.chain.id
            : await (0, b.getAction)(i, m.getChainId, "getChainId")({}));
      return tn({
        client: i,
        entryPoint: a,
        getFactoryArgs: async () => ({
          factory: d,
          factoryData: await tm({
            admin: c.address,
            salt: r ? (0, em.toHex)(r) : "0x",
          }),
        }),
        getAddress: async () =>
          u ||
          (u = await tl(i, {
            adminAddress: c.address,
            factoryAddress: d,
            salt: r ? (0, em.toHex)(r) : "0x",
          })),
        encodeCalls: async (e) => ty(e),
        decodeCalls: async (e) => tp(e),
        async getNonce(t) {
          return eK(i, {
            address: await this.getAddress(),
            entryPointAddress: a.address,
            key: e?.nonceKey ?? t?.key,
          });
        },
        getStubSignature: async () =>
          "0xfffffffffffffffffffffffffffffff0000000000000000000000000000000007aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa1c",
        async sign({ hash: e }) {
          return this.signMessage({ message: e });
        },
        async signMessage({ message: e }) {
          return tg({
            admin: c,
            chainId: await p(),
            accountAddress: await this.getAddress(),
            message: e,
          });
        },
        async signTypedData(e) {
          return tb({
            admin: c,
            chainId: await p(),
            accountAddress: await this.getAddress(),
            ...e,
          });
        },
        async signUserOperation(e) {
          let { chainId: t = await p(), ...n } = e;
          return c.signMessage({
            message: {
              raw: e7({
                userOperation: {
                  ...n,
                  sender: n.sender ?? (await this.getAddress()),
                  signature: "0x",
                },
                entryPointAddress: a.address,
                entryPointVersion: a.version,
                chainId: t,
              }),
            },
          });
        },
      });
    }
    var tx = e.i(599976),
      tA = e.i(249311),
      tv = e.i(289169),
      tD = e.i(989509);
    let tP = [
      {
        inputs: [
          { internalType: "address", name: "_entryPoint", type: "address" },
          { internalType: "bytes", name: "initCode", type: "bytes" },
        ],
        stateMutability: "payable",
        type: "constructor",
      },
    ];
    w.BaseError;
    let tE = async (e, t) => {
        let {
          initCode: a,
          entryPointAddress: n,
          factory: i,
          factoryData: r,
        } = t;
        if (!a && !i && !r)
          throw Error(
            "Either `initCode` or `factory` and `factoryData` must be provided"
          );
        let s = a || (0, ex.concat)([i, r]),
          { data: o } = await (0, b.getAction)(
            e,
            tD.call,
            "call"
          )({
            data: (0, tv.encodeDeployData)({
              abi: tP,
              bytecode:
                "0x60806040526102a28038038091610015826100ae565b6080396040816080019112610093576080516001600160a01b03811681036100935760a0516001600160401b0381116100935782609f82011215610093578060800151610061816100fc565b9361006f60405195866100d9565b81855260a082840101116100935761008e9160a0602086019101610117565b610196565b600080fd5b634e487b7160e01b600052604160045260246000fd5b6080601f91909101601f19168101906001600160401b038211908210176100d457604052565b610098565b601f909101601f19168101906001600160401b038211908210176100d457604052565b6001600160401b0381116100d457601f01601f191660200190565b60005b83811061012a5750506000910152565b818101518382015260200161011a565b6040916020825261015a8151809281602086015260208686019101610117565b601f01601f1916010190565b3d15610191573d90610177826100fc565b9161018560405193846100d9565b82523d6000602084013e565b606090565b600091908291826040516101cd816101bf6020820195639b249f6960e01b87526024830161013a565b03601f1981018352826100d9565b51925af16101d9610166565b906102485760048151116000146101f7576024015160005260206000f35b60405162461bcd60e51b8152602060048201526024808201527f67657453656e64657241646472657373206661696c656420776974686f7574206044820152636461746160e01b6064820152608490fd5b60405162461bcd60e51b815260206004820152602b60248201527f67657453656e6465724164647265737320646964206e6f74207265766572742060448201526a185cc8195e1c1958dd195960aa1b6064820152608490fdfe",
              args: [n, s],
            }),
          });
        if (!o) throw Error("Failed to get sender address");
        return (0, tA.decodeAbiParameters)([{ type: "address" }], o)[0];
      },
      tT = async (e, t = BigInt(0)) => {
        if (!e) throw Error("Owner account not found");
        return (0, ew.encodeFunctionData)({
          abi: [
            {
              inputs: [
                { internalType: "address", name: "owner", type: "address" },
                { internalType: "uint256", name: "salt", type: "uint256" },
              ],
              name: "createAccount",
              outputs: [
                {
                  internalType: "contract LightAccount",
                  name: "ret",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
          functionName: "createAccount",
          args: [e, t],
        });
      };
    async function tS(e, t, a, n) {
      return e.signTypedData({
        domain: {
          chainId: Number(t),
          name: "LightAccount",
          verifyingContract: a,
          version: "1",
        },
        types: { LightAccountMessage: [{ name: "message", type: "bytes" }] },
        message: { message: n },
        primaryType: "LightAccountMessage",
      });
    }
    let tC = {
      "1.1.0": { factoryAddress: "0x00004EC70002a32400f8ae005A26081065620D20" },
      "2.0.0": { factoryAddress: "0x0000000000400CdFef5E2714E63d8040b700BC24" },
    };
    async function tO(e) {
      let t,
        {
          version: n,
          factoryAddress: i,
          address: r,
          owner: s,
          client: o,
          index: d = BigInt(0),
          nonceKey: c,
        } = e,
        u = await tc({ owner: s }),
        p = {
          address: e.entryPoint?.address ?? eQ,
          abi: (e.entryPoint?.version ?? "0.7") === "0.6" ? eJ : eX,
          version: e.entryPoint?.version ?? "0.7",
        },
        { factoryAddress: y } = ((e, { factoryAddress: t }) => ({
          factoryAddress: t ?? tC[e].factoryAddress,
        }))(n, { factoryAddress: i }),
        l = r,
        f = async () =>
          t ||
          (t = o.chain
            ? o.chain.id
            : await (0, b.getAction)(o, m.getChainId, "getChainId")({})),
        g = async () => ({ factory: y, factoryData: await tT(u.address, d) });
      return tn({
        client: o,
        entryPoint: p,
        getFactoryArgs: g,
        async getAddress() {
          if (l) return l;
          let { factory: e, factoryData: t } = await g();
          return (l = await tE(o, {
            factory: e,
            factoryData: t,
            entryPointAddress: p.address,
          }));
        },
        async encodeCalls(e) {
          if (e.length > 1)
            return (0, ew.encodeFunctionData)({
              abi: [
                {
                  inputs: [
                    {
                      internalType: "address[]",
                      name: "dest",
                      type: "address[]",
                    },
                    {
                      internalType: "uint256[]",
                      name: "value",
                      type: "uint256[]",
                    },
                    { internalType: "bytes[]", name: "func", type: "bytes[]" },
                  ],
                  name: "executeBatch",
                  outputs: [],
                  stateMutability: "nonpayable",
                  type: "function",
                },
              ],
              functionName: "executeBatch",
              args: [
                e.map((e) => e.to),
                e.map((e) => e.value ?? 0n),
                e.map((e) => e.data ?? "0x"),
              ],
            });
          let t = 0 === e.length ? void 0 : e[0];
          if (!t) throw Error("No calls to encode");
          return (0, ew.encodeFunctionData)({
            abi: [
              {
                inputs: [
                  { internalType: "address", name: "dest", type: "address" },
                  { internalType: "uint256", name: "value", type: "uint256" },
                  { internalType: "bytes", name: "func", type: "bytes" },
                ],
                name: "execute",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function",
              },
            ],
            functionName: "execute",
            args: [t.to, t.value ?? 0n, t.data ?? "0x"],
          });
        },
        async decodeCalls(e) {
          try {
            let t = (0, tu.decodeFunctionData)({
              abi: [
                {
                  inputs: [
                    {
                      internalType: "address[]",
                      name: "dest",
                      type: "address[]",
                    },
                    {
                      internalType: "uint256[]",
                      name: "value",
                      type: "uint256[]",
                    },
                    { internalType: "bytes[]", name: "func", type: "bytes[]" },
                  ],
                  name: "executeBatch",
                  outputs: [],
                  stateMutability: "nonpayable",
                  type: "function",
                },
              ],
              data: e,
            });
            if ("executeBatch" === t.functionName) {
              let e = [];
              for (let a = 0; a < t.args[0].length; a++)
                e.push({
                  to: t.args[0][a],
                  value: t.args[1][a],
                  data: t.args[2][a],
                });
              return e;
            }
            throw Error("Invalid function name");
          } catch (a) {
            let t = (0, tu.decodeFunctionData)({
              abi: [
                {
                  inputs: [
                    { internalType: "address", name: "dest", type: "address" },
                    { internalType: "uint256", name: "value", type: "uint256" },
                    { internalType: "bytes", name: "func", type: "bytes" },
                  ],
                  name: "execute",
                  outputs: [],
                  stateMutability: "nonpayable",
                  type: "function",
                },
              ],
              data: e,
            });
            return [{ to: t.args[0], value: t.args[1], data: t.args[2] }];
          }
        },
        async getNonce(e) {
          return eK(o, {
            address: await this.getAddress(),
            entryPointAddress: p.address,
            key: c ?? e?.key,
          });
        },
        async getStubSignature() {
          let e =
            "0xfffffffffffffffffffffffffffffff0000000000000000000000000000000007aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa1c";
          switch (n) {
            case "1.1.0":
              return e;
            case "2.0.0":
              return (0, ex.concat)([a.EOA, e]);
            default:
              throw Error("Unknown Light Account version");
          }
        },
        async sign({ hash: e }) {
          return this.signMessage({ message: e });
        },
        async signMessage({ message: e }) {
          let t = await tS(
            u,
            await f(),
            await this.getAddress(),
            (0, tf.hashMessage)(e)
          );
          switch (n) {
            case "1.1.0":
              return t;
            case "2.0.0":
              return (0, ex.concat)([a.EOA, t]);
            default:
              throw Error("Unknown Light Account version");
          }
        },
        async signTypedData(e) {
          let t = await tS(
            u,
            await f(),
            await this.getAddress(),
            (0, e2.hashTypedData)(e)
          );
          switch (n) {
            case "1.1.0":
              return t;
            case "2.0.0":
              return (0, ex.concat)([a.EOA, t]);
            default:
              throw Error("Unknown Light Account version");
          }
        },
        async signUserOperation(e) {
          let { chainId: t = await f(), ...i } = e,
            r = e7({
              userOperation: { ...i, signature: "0x" },
              entryPointAddress: p.address,
              entryPointVersion: p.version,
              chainId: t,
            }),
            s = await (0, tx.signMessage)(o, {
              account: u,
              message: { raw: r },
            });
          switch (n) {
            case "1.1.0":
              return s;
            case "2.0.0":
              return (0, ex.concat)([a.EOA, s]);
            default:
              throw Error("Unknown Light Account version");
          }
        },
      });
    }
    (a || (a = {})).EOA = "0x00";
    var tF = e.i(70204),
      tI = e.i(342692);
    function tG(e, t) {
      if (e.length !== t.length)
        throw new tF.AbiEncodingLengthMismatchError({
          expectedLength: e.length,
          givenLength: t.length,
        });
      let a = [];
      for (let n = 0; n < e.length; n++) {
        let i = e[n],
          r = t[n];
        a.push(
          (function e(t, a, n = !1) {
            if ("address" === t) {
              if (!(0, to.isAddress)(a))
                throw new ts.InvalidAddressError({ address: a });
              return (0, ef.pad)(a.toLowerCase(), { size: n ? 32 : null });
            }
            if ("string" === t) return (0, em.stringToHex)(a);
            if ("bytes" === t) return a;
            if ("bool" === t)
              return (0, ef.pad)((0, em.boolToHex)(a), { size: n ? 32 : 1 });
            let i = t.match(tI.integerRegex);
            if (i) {
              let [e, t, r = "256"] = i,
                s = Number.parseInt(r, 10) / 8;
              return (0, em.numberToHex)(a, {
                size: n ? 32 : s,
                signed: "int" === t,
              });
            }
            let r = t.match(tI.bytesRegex);
            if (r) {
              let [e, t] = r;
              if (Number.parseInt(t, 10) !== (a.length - 2) / 2)
                throw new tF.BytesSizeMismatchError({
                  expectedSize: Number.parseInt(t, 10),
                  givenSize: (a.length - 2) / 2,
                });
              return (0, ef.pad)(a, { dir: "right", size: n ? 32 : null });
            }
            let s = t.match(tI.arrayRegex);
            if (s && Array.isArray(a)) {
              let [t, n] = s,
                i = [];
              for (let t = 0; t < a.length; t++) i.push(e(n, a[t], !0));
              return 0 === i.length ? "0x" : (0, ex.concatHex)(i);
            }
            throw new tF.UnsupportedPackedAbiType(t);
          })(i, r)
        );
      }
      return (0, ex.concatHex)(a);
    }
    function tB(e) {
      return (
        !!e &&
        "object" == typeof e &&
        "BYTES_PER_ELEMENT" in e &&
        1 === e.BYTES_PER_ELEMENT &&
        "Uint8Array" === e.constructor.name
      );
    }
    var tM = e.i(790063),
      tL = e.i(70326),
      tk = e.i(823838);
    function tU(e) {
      var t, a;
      let n, i, r, s, o;
      return "CREATE2" === e.opcode
        ? ((t = e),
          (n = (0, tt.toBytes)((0, tk.getAddress)(t.from))),
          (i = (0, ef.pad)(tB(t.salt) ? t.salt : (0, tt.toBytes)(t.salt), {
            size: 32,
          })),
          (r =
            "bytecodeHash" in t
              ? tB(t.bytecodeHash)
                ? t.bytecodeHash
                : (0, tt.toBytes)(t.bytecodeHash)
              : (0, e0.keccak256)(t.bytecode, "bytes")),
          (0, tk.getAddress)(
            (0, tM.slice)(
              (0, e0.keccak256)(
                (0, ex.concat)([(0, tt.toBytes)("0xff"), n, i, r])
              ),
              12
            )
          ))
        : ((a = e),
          (s = (0, tt.toBytes)((0, tk.getAddress)(a.from))),
          0 === (o = (0, tt.toBytes)(a.nonce))[0] && (o = new Uint8Array([])),
          (0, tk.getAddress)(
            `0x${(0, e0.keccak256)((0, tL.toRlp)([s, o], "bytes")).slice(26)}`
          ));
    }
    var t_ = e.i(484564);
    let tN = [
        {
          inputs: [
            {
              internalType: "address",
              name: "moduleSetupContract",
              type: "address",
            },
            { internalType: "bytes", name: "moduleSetupData", type: "bytes" },
            { internalType: "uint256", name: "index", type: "uint256" },
          ],
          name: "deployCounterFactualAccount",
          outputs: [
            { internalType: "address", name: "proxy", type: "address" },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
      tR = [
        {
          inputs: [
            { internalType: "address", name: "handler", type: "address" },
            {
              internalType: "address",
              name: "moduleSetupContract",
              type: "address",
            },
            { internalType: "bytes", name: "moduleSetupData", type: "bytes" },
          ],
          name: "init",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "eoaOwner", type: "address" },
          ],
          name: "initForSmartAccount",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "dest", type: "address" },
            { internalType: "uint256", name: "value", type: "uint256" },
            { internalType: "bytes", name: "func", type: "bytes" },
          ],
          name: "execute_ncC",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address[]", name: "dest", type: "address[]" },
            { internalType: "uint256[]", name: "value", type: "uint256[]" },
            { internalType: "bytes[]", name: "func", type: "bytes[]" },
          ],
          name: "executeBatch_y6U",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
      tV = async ({ owner: e, index: t, ecdsaModuleAddress: a }) => {
        if (!e) throw Error("Owner account not found");
        let n = (0, ew.encodeFunctionData)({
          abi: tR,
          functionName: "initForSmartAccount",
          args: [e],
        });
        return (0, ew.encodeFunctionData)({
          abi: tN,
          functionName: "deployCounterFactualAccount",
          args: [a, n, t],
        });
      },
      tH = async ({
        factoryAddress: e,
        accountLogicAddress: t,
        fallbackHandlerAddress: a,
        ecdsaModuleAddress: n,
        owner: i,
        index: r = BigInt(0),
      }) => {
        let s = (0, ew.encodeFunctionData)({
            abi: tR,
            functionName: "initForSmartAccount",
            args: [i],
          }),
          o = (0, ew.encodeFunctionData)({
            abi: tR,
            functionName: "init",
            args: [a, n, s],
          }),
          d = tG(
            ["bytes", "uint256"],
            [
              "0x6080346100aa57601f61012038819003918201601f19168301916001600160401b038311848410176100af578084926020946040528339810103126100aa57516001600160a01b0381168082036100aa5715610065573055604051605a90816100c68239f35b60405162461bcd60e51b815260206004820152601e60248201527f496e76616c696420696d706c656d656e746174696f6e206164647265737300006044820152606490fd5b600080fd5b634e487b7160e01b600052604160045260246000fdfe608060405230546000808092368280378136915af43d82803e156020573d90f35b3d90fdfea2646970667358221220a03b18dce0be0b4c9afe58a9eb85c35205e2cf087da098bbf1d23945bf89496064736f6c63430008110033",
              (0, eA.hexToBigInt)(t),
            ]
          );
        return tU({
          from: e,
          salt: (0, e0.keccak256)(
            tG(
              ["bytes32", "uint256"],
              [(0, e0.keccak256)(tG(["bytes"], [o])), r]
            )
          ),
          bytecode: d,
          opcode: "CREATE2",
        });
      };
    async function tW(e) {
      let {
          owners: t,
          client: a,
          index: n = 0n,
          address: i,
          accountLogicAddress: r = "0x0000002512019Dafb59528B82CB92D3c5D2423aC",
          fallbackHandlerAddress:
            s = "0x0bBa6d96BD616BedC6BFaa341742FD43c60b83C1",
          ecdsaModuleAddress: o = "0x0000001c5b32F37F5beA87BDD5374eB2aC54eA8e",
          factoryAddress: d = "0x000000a56Aaca3e9a4C479ea6b6CD0DbcB6634F5",
        } = e,
        c = await tc({ owner: t[0] }),
        u = {
          address:
            e.entryPoint?.address ??
            "0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789",
          abi: eJ,
          version: e.entryPoint?.version ?? "0.6",
        },
        p = i;
      return tn({
        client: a,
        entryPoint: u,
        getFactoryArgs: async () => ({
          factory: d,
          factoryData: await tV({
            owner: c.address,
            index: n,
            ecdsaModuleAddress: o,
          }),
        }),
        getAddress: async () =>
          p ||
          (p = await tH({
            owner: c.address,
            ecdsaModuleAddress: o,
            factoryAddress: d,
            accountLogicAddress: r,
            fallbackHandlerAddress: s,
            index: n,
          })),
        async getNonce(t) {
          return eK(a, {
            address: await this.getAddress(),
            entryPointAddress: u.address,
            key: e?.nonceKey ?? t?.key,
          });
        },
        encodeCalls: async (e) => {
          if (e.length > 1)
            return (0, ew.encodeFunctionData)({
              abi: tR,
              functionName: "executeBatch_y6U",
              args: [
                e.map((e) => e.to),
                e.map((e) => e.value ?? 0n),
                e.map((e) => e.data ?? "0x"),
              ],
            });
          let t = 0 === e.length ? void 0 : e[0];
          if (!t) throw Error("No calls to encode");
          return (0, ew.encodeFunctionData)({
            abi: tR,
            functionName: "execute_ncC",
            args: [t.to, t.value ?? 0n, t.data ?? "0x"],
          });
        },
        decodeCalls: async (e) => {
          let t = (0, tu.decodeFunctionData)({ abi: tR, data: e });
          if ("execute_ncC" === t.functionName)
            return [{ to: t.args[0], value: t.args[1], data: t.args[2] }];
          if ("executeBatch_y6U" === t.functionName) {
            let e = [];
            for (let a = 0; a < t.args[0].length; a++)
              e.push({
                to: t.args[0][a],
                value: t.args[1][a],
                data: t.args[2][a],
              });
            return e;
          }
          throw Error("Invalid function name");
        },
        async getStubSignature() {
          let e = o.substring(2).padEnd(40, "0");
          return `0x0000000000000000000000000000000000000000000000000000000000000040000000000000000000000000${e}000000000000000000000000000000000000000000000000000000000000004181d4b4981670cb18f99f0b4a66446df1bf5b204d24cfcb659bf38ba27a4359b5711649ec2423c5e1247245eba2964679b6a1dbb85c992ae40b9b00c6935b02ff1b00000000000000000000000000000000000000000000000000000000000000`;
        },
        async sign({ hash: e }) {
          return this.signMessage({ message: e });
        },
        async signMessage({ message: e }) {
          let t = await c.signMessage({ message: e }),
            a = Number.parseInt(t.slice(-2), 16);
          if (![27, 28].includes(a)) {
            let e = a + 27;
            t = t.slice(0, -2) + e.toString(16);
          }
          return (0, eZ.encodeAbiParameters)(
            [{ type: "bytes" }, { type: "address" }],
            [t, o]
          );
        },
        async signTypedData(e) {
          let t = await c.signTypedData(e),
            a = Number.parseInt(t.slice(-2), 16);
          if (![27, 28].includes(a)) {
            let e = a + 27;
            t = t.slice(0, -2) + e.toString(16);
          }
          return (0, eZ.encodeAbiParameters)(
            [{ type: "bytes" }, { type: "address" }],
            [t, o]
          );
        },
        async signUserOperation(e) {
          let { chainId: t = a.chain?.id, ...n } = e;
          if (!t) throw Error("Chain id not found");
          let i = e7({
              userOperation: {
                ...n,
                sender: n.sender ?? (await this.getAddress()),
                signature: "0x",
              },
              entryPointAddress: u.address,
              entryPointVersion: u.version,
              chainId: t,
            }),
            r = await (0, tx.signMessage)(a, {
              account: c,
              message: { raw: i },
            });
          return (0, eZ.encodeAbiParameters)(
            (0, t_.parseAbiParameters)("bytes, address"),
            [r, o]
          );
        },
      });
    }
    var tz = e.i(826999),
      tz = tz,
      tj = e.i(112667),
      t$ = e.i(959103),
      tq = e.i(914146);
    let tY = [
        {
          inputs: [
            { internalType: "address", name: "to", type: "address" },
            { internalType: "uint256", name: "value", type: "uint256" },
            { internalType: "bytes", name: "data", type: "bytes" },
            { internalType: "enum Operation", name: "", type: "uint8" },
          ],
          name: "execute",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [
            {
              components: [
                { internalType: "address", name: "to", type: "address" },
                { internalType: "uint256", name: "value", type: "uint256" },
                { internalType: "bytes", name: "data", type: "bytes" },
              ],
              internalType: "struct Call[]",
              name: "calls",
              type: "tuple[]",
            },
          ],
          name: "executeBatch",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
      ],
      tK = [
        {
          inputs: [
            {
              internalType: "contract IKernelValidator",
              name: "_defaultValidator",
              type: "address",
            },
            { internalType: "bytes", name: "_data", type: "bytes" },
          ],
          name: "initialize",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
      ],
      tJ = [
        {
          type: "function",
          name: "initialize",
          inputs: [
            {
              name: "_rootValidator",
              type: "bytes21",
              internalType: "ValidationId",
            },
            { name: "hook", type: "address", internalType: "contract IHook" },
            { name: "validatorData", type: "bytes", internalType: "bytes" },
            { name: "hookData", type: "bytes", internalType: "bytes" },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
      ],
      tX = [
        {
          type: "function",
          name: "initialize",
          inputs: [
            {
              name: "_rootValidator",
              type: "bytes21",
              internalType: "ValidationId",
            },
            { name: "hook", type: "address", internalType: "contract IHook" },
            { name: "validatorData", type: "bytes", internalType: "bytes" },
            { name: "hookData", type: "bytes", internalType: "bytes" },
            { name: "initConfig", type: "bytes[]", internalType: "bytes[]" },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
      ],
      tQ = [
        {
          type: "function",
          name: "createAccount",
          inputs: [
            { name: "data", type: "bytes", internalType: "bytes" },
            { name: "salt", type: "bytes32", internalType: "bytes32" },
          ],
          outputs: [{ name: "", type: "address", internalType: "address" }],
          stateMutability: "payable",
        },
      ],
      tZ = [
        {
          type: "function",
          name: "deployWithFactory",
          inputs: [
            {
              name: "factory",
              type: "address",
              internalType: "contract KernelFactory",
            },
            { name: "createData", type: "bytes", internalType: "bytes" },
            { name: "salt", type: "bytes32", internalType: "bytes32" },
          ],
          outputs: [{ name: "", type: "address", internalType: "address" }],
          stateMutability: "payable",
        },
      ],
      t0 =
        "0xfffffffffffffffffffffffffffffff0000000000000000000000000000000007aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa1c";
    function t2(e) {
      let t,
        a = (0, tu.decodeFunctionData)({
          abi: [
            {
              type: "function",
              name: "execute",
              inputs: [
                { name: "execMode", type: "bytes32", internalType: "ExecMode" },
                {
                  name: "executionCalldata",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
              outputs: [],
              stateMutability: "payable",
            },
          ],
          data: e,
        }),
        n = a.args[0],
        i = a.args[1],
        r = (0, tM.slice)(n, 0, 1),
        s = (0, tM.slice)(n, 1, 2),
        o = (0, tM.slice)(n, 3, 7),
        d = (0, tM.slice)(n, 7);
      switch (BigInt(r)) {
        case BigInt(0):
          t = "call";
          break;
        case BigInt(1):
          t = "batchcall";
          break;
        case BigInt(255):
          t = "delegatecall";
          break;
        default:
          throw Error("Invalid call type");
      }
      let c = {
        type: t,
        revertOnError: BigInt(s) === BigInt(1),
        selector: o,
        context: d,
      };
      if ("batchcall" === c.type) {
        let [e] = (0, tA.decodeAbiParameters)(
          [
            {
              name: "executionBatch",
              type: "tuple[]",
              components: [
                { name: "target", type: "address" },
                { name: "value", type: "uint256" },
                { name: "callData", type: "bytes" },
              ],
            },
          ],
          i
        );
        return {
          mode: c,
          callData: e.map((e) => ({
            to: e.target,
            value: e.value,
            data: e.callData,
          })),
        };
      }
      let u = (0, tk.getAddress)((0, tM.slice)(i, 0, 20));
      return {
        mode: c,
        callData: [
          {
            to: u,
            value: BigInt((0, tM.slice)(i, 20, 52)),
            data: (0, e5.size)(i) > 52 ? (0, tM.slice)(i, 52) : "0x",
          },
        ],
      };
    }
    function t6({ type: e, revertOnError: t, selector: a, context: n }) {
      return tG(
        ["bytes1", "bytes1", "bytes4", "bytes4", "bytes22"],
        [
          (0, em.toHex)(
            (0, tt.toBytes)(
              (function (e) {
                switch (e) {
                  case "call":
                    return "0x00";
                  case "batchcall":
                    return "0x01";
                  case "delegatecall":
                    return "0xff";
                }
              })(e),
              { size: 1 }
            )
          ),
          (0, em.toHex)((0, tt.toBytes)(t ? "0x01" : "0x00", { size: 1 })),
          (0, em.toHex)((0, tt.toBytes)("0x0", { size: 4 })),
          (0, em.toHex)((0, tt.toBytes)(a ?? "0x", { size: 4 })),
          (0, em.toHex)((0, tt.toBytes)(n ?? "0x", { size: 22 })),
        ]
      );
    }
    function t5({ mode: e, callData: t }) {
      if (t.length > 1 && e?.type !== "batchcall")
        throw Error(
          `mode ${JSON.stringify(e)} does not supported for batchcall calldata`
        );
      let a = [
        {
          type: "function",
          name: "execute",
          inputs: [
            { name: "execMode", type: "bytes32", internalType: "ExecMode" },
            { name: "executionCalldata", type: "bytes", internalType: "bytes" },
          ],
          outputs: [],
          stateMutability: "payable",
        },
      ];
      if (t.length > 1)
        return (0, ew.encodeFunctionData)({
          abi: a,
          functionName: "execute",
          args: [
            t6(e),
            (0, eZ.encodeAbiParameters)(
              [
                {
                  name: "executionBatch",
                  type: "tuple[]",
                  components: [
                    { name: "target", type: "address" },
                    { name: "value", type: "uint256" },
                    { name: "callData", type: "bytes" },
                  ],
                },
              ],
              [
                t.map((e) => ({
                  target: e.to,
                  value: e.value ?? 0n,
                  callData: e.data ?? "0x",
                })),
              ]
            ),
          ],
        });
      let n = 0 === t.length ? void 0 : t[0];
      if (!n) throw Error("No calls to encode");
      return (0, ew.encodeFunctionData)({
        abi: a,
        functionName: "execute",
        args: [
          t6(e),
          (0, ex.concatHex)([
            n.to,
            (0, em.toHex)(n.value ?? 0n, { size: 32 }),
            n.data ?? "0x",
          ]),
        ],
      });
    }
    ((t = n || (n = {})).DEFAULT = "0x00"), (t.ENABLE = "0x01"), e.i(600547);
    var t1 = e.i(674768),
      t3 = e.i(962187);
    let t4 = (e, { accountAddress: t, kernelVersion: a, chainId: n }) => {
      let i = (0, ez.domainSeparator)({
          domain: {
            name: "Kernel",
            version: a,
            chainId: n,
            verifyingContract: t,
          },
        }),
        r = /0\.2\.\d+/.test(a)
          ? e
          : (0, e0.keccak256)(
              (0, eZ.encodeAbiParameters)(
                [{ type: "bytes32" }, { type: "bytes32" }],
                [
                  (0, e0.keccak256)(
                    (0, em.stringToHex)("Kernel(bytes32 hash)")
                  ),
                  e,
                ]
              )
            );
      return (0, e0.keccak256)((0, ex.concatHex)(["0x1901", i, r]));
    };
    async function t7({
      message: e,
      owner: t,
      accountAddress: a,
      kernelVersion: n,
      chainId: i,
      eip7702: r,
    }) {
      if ("webAuthn" === t.type) {
        let r;
        if ("string" == typeof e)
          r = t4((0, tf.hashMessage)(e), {
            kernelVersion: n,
            accountAddress: a,
            chainId: i,
          });
        else if ("raw" in e && "string" == typeof e.raw) r = e.raw;
        else if ("raw" in e && e.raw instanceof Uint8Array)
          r = e.raw.toString();
        else throw Error("Unsupported message format");
        let { signature: s, webauthn: o } = await t.sign({ hash: r }),
          d = t3.Signature.fromHex(s);
        return (0, eZ.encodeAbiParameters)(
          [
            { name: "authenticatorData", type: "bytes" },
            { name: "clientDataJSON", type: "string" },
            { name: "responseTypeLocation", type: "uint256" },
            { name: "r", type: "uint256" },
            { name: "s", type: "uint256" },
            { name: "usePrecompiled", type: "bool" },
          ],
          [
            o.authenticatorData,
            o.clientDataJSON,
            BigInt(o.typeIndex),
            BigInt(d.r),
            BigInt(d.s),
            !1,
          ]
        );
      }
      if (r)
        return t.signTypedData({
          message: { hash: (0, tf.hashMessage)(e) },
          primaryType: "Kernel",
          types: { Kernel: [{ name: "hash", type: "bytes32" }] },
          domain: {
            name: "Kernel",
            version: n,
            chainId: i,
            verifyingContract: a,
          },
        });
      if ("0.2.1" === n || "0.2.2" === n) return t.signMessage({ message: e });
      let s = t4((0, tf.hashMessage)(e), {
        kernelVersion: n,
        accountAddress: a,
        chainId: i,
      });
      return t.signMessage({ message: { raw: s } });
    }
    async function t9(e) {
      let {
        owner: t,
        accountAddress: a,
        kernelVersion: n,
        chainId: i,
        eip7702: r,
        ...s
      } = e;
      if (("0.2.1" === n || "0.2.2" === n) && "webAuthn" !== t.type)
        return t.signTypedData({ ...s });
      let { message: o, primaryType: d, types: c, domain: u } = s,
        p = {
          EIP712Domain: (0, ez.getTypesForEIP712Domain)({ domain: u }),
          ...c,
        };
      (0, ez.validateTypedData)({
        domain: u,
        message: o,
        primaryType: d,
        types: p,
      });
      let y = (0, e2.hashTypedData)({
        message: o,
        primaryType: d,
        types: p,
        domain: u,
      });
      if (r && "webAuthn" !== t.type)
        return t.signTypedData({
          message: { hash: y },
          primaryType: "Kernel",
          types: { Kernel: [{ name: "hash", type: "bytes32" }] },
          domain: {
            name: "Kernel",
            version: n,
            chainId: i,
            verifyingContract: a,
          },
        });
      let l = t4(y, { kernelVersion: n, accountAddress: a, chainId: i });
      return "webAuthn" === t.type
        ? t7({
            message: { raw: l },
            owner: t,
            accountAddress: a,
            kernelVersion: n,
            chainId: i,
            eip7702: !1,
          })
        : t.signMessage({ message: { raw: l } });
    }
    let t8 = [
        {
          inputs: [
            {
              internalType: "address",
              name: "_implementation",
              type: "address",
            },
            { internalType: "bytes", name: "_data", type: "bytes" },
            { internalType: "uint256", name: "_index", type: "uint256" },
          ],
          name: "createAccount",
          outputs: [
            { internalType: "address", name: "proxy", type: "address" },
          ],
          stateMutability: "payable",
          type: "function",
        },
      ],
      ae = {
        "0.2.1": {
          ECDSA_VALIDATOR: "0xd9AB5096a832b9ce79914329DAEE236f8Eea0390",
          ACCOUNT_LOGIC: "0xf048AD83CB2dfd6037A43902a2A5Be04e53cd2Eb",
          FACTORY_ADDRESS: "0x5de4839a76cf55d0c90e2061ef4386d962E15ae3",
        },
        "0.2.2": {
          ECDSA_VALIDATOR: "0xd9AB5096a832b9ce79914329DAEE236f8Eea0390",
          ACCOUNT_LOGIC: "0x0DA6a956B9488eD4dd761E59f52FDc6c8068E6B5",
          FACTORY_ADDRESS: "0x5de4839a76cf55d0c90e2061ef4386d962E15ae3",
        },
        "0.2.3": {
          ECDSA_VALIDATOR: "0xd9AB5096a832b9ce79914329DAEE236f8Eea0390",
          ACCOUNT_LOGIC: "0xD3F582F6B4814E989Ee8E96bc3175320B5A540ab",
          FACTORY_ADDRESS: "0x5de4839a76cf55d0c90e2061ef4386d962E15ae3",
        },
        "0.2.4": {
          ECDSA_VALIDATOR: "0xd9AB5096a832b9ce79914329DAEE236f8Eea0390",
          ACCOUNT_LOGIC: "0xd3082872F8B06073A021b4602e022d5A070d7cfC",
          FACTORY_ADDRESS: "0x5de4839a76cf55d0c90e2061ef4386d962E15ae3",
        },
        "0.3.0-beta": {
          ECDSA_VALIDATOR: "0x8104e3Ad430EA6d354d013A6789fDFc71E671c43",
          ACCOUNT_LOGIC: "0x94F097E1ebEB4ecA3AAE54cabb08905B239A7D27",
          FACTORY_ADDRESS: "0x6723b44Abeec4E71eBE3232BD5B455805baDD22f",
          META_FACTORY_ADDRESS: "0xd703aaE79538628d27099B8c4f621bE4CCd142d5",
          WEB_AUTHN_VALIDATOR: "0xbA45a2BFb8De3D24cA9D7F1B551E14dFF5d690Fd",
        },
        "0.3.1": {
          ECDSA_VALIDATOR: "0x845ADb2C711129d4f3966735eD98a9F09fC4cE57",
          ACCOUNT_LOGIC: "0xBAC849bB641841b44E965fB01A4Bf5F074f84b4D",
          FACTORY_ADDRESS: "0xaac5D4240AF87249B3f71BC8E4A2cae074A3E419",
          META_FACTORY_ADDRESS: "0xd703aaE79538628d27099B8c4f621bE4CCd142d5",
          WEB_AUTHN_VALIDATOR: "0xbA45a2BFb8De3D24cA9D7F1B551E14dFF5d690Fd",
        },
        "0.3.2": {
          ECDSA_VALIDATOR: "0x845ADb2C711129d4f3966735eD98a9F09fC4cE57",
          ACCOUNT_LOGIC: "0xD830D15D3dc0C269F3dBAa0F3e8626d33CFdaBe1",
          FACTORY_ADDRESS: "0x7a1dBAB750f12a90EB1B60D2Ae3aD17D4D81EfFe",
          META_FACTORY_ADDRESS: "0xd703aaE79538628d27099B8c4f621bE4CCd142d5",
        },
        "0.3.3": {
          ECDSA_VALIDATOR: "0x845ADb2C711129d4f3966735eD98a9F09fC4cE57",
          ACCOUNT_LOGIC: "0xd6CEDDe84be40893d153Be9d467CD6aD37875b28",
          FACTORY_ADDRESS: "0x2577507b78c2008Ff367261CB6285d44ba5eF2E9",
          META_FACTORY_ADDRESS: "0xd703aaE79538628d27099B8c4f621bE4CCd142d5",
        },
      },
      at = (e, t = !1) =>
        (0, ex.concatHex)([t ? "0x00" : "0x01", t ? "0x" : e]),
      aa = async (e) => {
        if ("local" === e.type) return e.address;
        if ("webAuthn" === e.type) {
          let t = t$.PublicKey.fromHex(e.publicKey),
            a = (0, e0.keccak256)(tj.Hex.fromBytes(tz.toBytes(e.id)));
          return (0, eZ.encodeAbiParameters)(
            [
              {
                components: [
                  { name: "x", type: "uint256" },
                  { name: "y", type: "uint256" },
                ],
                name: "webAuthnData",
                type: "tuple",
              },
              { name: "authenticatorIdHash", type: "bytes32" },
            ],
            [{ x: t.x, y: t.y }, a]
          );
        }
        throw Error("Invalid owner type");
      },
      an = async ({
        entryPointVersion: e,
        kernelVersion: t,
        validatorData: a,
        index: n,
        factoryAddress: i,
        accountLogicAddress: r,
        validatorAddress: s,
        useMetaFactory: o,
      }) => {
        let d = (({
          entryPoint: { version: e },
          kernelVersion: t,
          validatorData: a,
          validatorAddress: n,
        }) =>
          "0.6" === e
            ? (0, ew.encodeFunctionData)({
                abi: tK,
                functionName: "initialize",
                args: [n, a],
              })
            : "0.3.0-beta" === t
            ? (0, ew.encodeFunctionData)({
                abi: tJ,
                functionName: "initialize",
                args: [at(n), tq.zeroAddress, a, "0x"],
              })
            : (0, ew.encodeFunctionData)({
                abi: tX,
                functionName: "initialize",
                args: [at(n), tq.zeroAddress, a, "0x", []],
              }))({
          entryPoint: { version: e },
          kernelVersion: t,
          validatorAddress: s,
          validatorData: a,
        });
        return "0.6" === e
          ? (0, ew.encodeFunctionData)({
              abi: t8,
              functionName: "createAccount",
              args: [r, d, n],
            })
          : o
          ? (0, ew.encodeFunctionData)({
              abi: tZ,
              functionName: "deployWithFactory",
              args: [i, d, (0, em.toHex)(n, { size: 32 })],
            })
          : (0, ew.encodeFunctionData)({
              abi: tQ,
              functionName: "createAccount",
              args: [d, (0, em.toHex)(n, { size: 32 })],
            });
      };
    async function ai(e) {
      var t;
      let a,
        i,
        r,
        s,
        {
          client: o,
          address: d,
          index: c = 0n,
          version: u,
          validatorAddress: p,
          factoryAddress: y,
          metaFactoryAddress: l,
          accountLogicAddress: f,
          useMetaFactory: g = !0,
          eip7702: h = !1,
        } = e,
        w = (() => {
          if (h && "owner" in e) return [e.owner];
          if ("owners" in e) return e.owners;
          throw Error("Invalid parameters");
        })(),
        x = "webAuthn" === w[0].type,
        A = await (x ? w[0] : tc({ owner: w[0] })),
        v =
          ((i = e.entryPoint?.address ?? eQ),
          (r = e.entryPoint?.version ?? "0.7"),
          (s = eX),
          "0.6" === r && (s = eJ),
          { address: i, abi: s, version: r }),
        D =
          ((t = v.version),
          h ? "0.3.3" : u || ("0.6" === t ? "0.2.2" : "0.3.0-beta")),
        {
          accountLogicAddress: P,
          validatorAddress: E,
          factoryAddress: T,
          metaFactoryAddress: S,
        } = (({
          validatorAddress: e,
          accountLogicAddress: t,
          factoryAddress: a,
          metaFactoryAddress: n,
          kernelVersion: i,
          isWebAuthn: r,
        }) => {
          let s = ae[i],
            o = e ?? (r ? s.WEB_AUTHN_VALIDATOR : s.ECDSA_VALIDATOR),
            d = t ?? s.ACCOUNT_LOGIC;
          return {
            validatorAddress: o,
            accountLogicAddress: d,
            factoryAddress: a ?? s.FACTORY_ADDRESS,
            metaFactoryAddress: n ?? s?.META_FACTORY_ADDRESS ?? tq.zeroAddress,
          };
        })({
          validatorAddress: p,
          accountLogicAddress: f,
          factoryAddress: y,
          metaFactoryAddress: l,
          kernelVersion: D,
          isWebAuthn: x,
        });
      if (!E) throw Error("Validator address is required");
      let C = async (e) =>
          an({
            entryPointVersion: v.version,
            kernelVersion: D,
            validatorData: await aa(A),
            index: c,
            factoryAddress: T,
            accountLogicAddress: P,
            validatorAddress: E,
            useMetaFactory: e,
          }),
        O = async () =>
          a ||
          (a = o.chain
            ? o.chain.id
            : await (0, b.getAction)(o, m.getChainId, "getChainId")({})),
        F = (e) => async () => ({
          factory: "0.6" === v.version || !1 === e ? T : S,
          factoryData: await C(e),
        }),
        { accountAddress: I, getFactoryArgs: G } = await (async () => {
          if (h)
            return {
              accountAddress: A.address,
              getFactoryArgs: async () => ({
                factory: void 0,
                factoryData: void 0,
              }),
            };
          let e = F("optional" === g || g);
          if (d && "optional" !== g)
            return { accountAddress: d, getFactoryArgs: e };
          let { factory: t, factoryData: a } = await e(),
            n = await tE(o, {
              factory: t,
              factoryData: a,
              entryPointAddress: v.address,
            });
          if (d === n) return { accountAddress: n, getFactoryArgs: e };
          if ("optional" === g && n === tq.zeroAddress) {
            e = F(!1);
            let { factory: t, factoryData: a } = await e();
            n = await tE(o, {
              factory: t,
              factoryData: a,
              entryPointAddress: v.address,
            });
          }
          return { accountAddress: n, getFactoryArgs: e };
        })();
      return tn({
        client: o,
        entryPoint: v,
        getFactoryArgs: G,
        extend: h ? { implementation: P } : void 0,
        authorization: h ? { address: P, account: A } : void 0,
        getAddress: async () => I,
        encodeCalls: async (e) =>
          (({ kernelVersion: e, calls: t }) => {
            if (/0\.2\.\d+/.test(e)) {
              if (t.length > 1)
                return (0, ew.encodeFunctionData)({
                  abi: tY,
                  functionName: "executeBatch",
                  args: [
                    t.map((e) => ({
                      to: e.to,
                      value: e.value ?? 0n,
                      data: e.data ?? "0x",
                    })),
                  ],
                });
              let e = 0 === t.length ? void 0 : t[0];
              if (!e) throw Error("No calls to encode");
              return (0, ew.encodeFunctionData)({
                abi: tY,
                functionName: "execute",
                args: [e.to, e.value ?? 0n, e.data ?? "0x", 0],
              });
            }
            return t5({
              mode: {
                type: t.length > 1 ? "batchcall" : "call",
                revertOnError: !1,
                selector: "0x",
                context: "0x",
              },
              callData: t,
            });
          })({ calls: e, kernelVersion: D }),
        decodeCalls: async (e) =>
          (({ kernelVersion: e, callData: t }) => {
            if (/0\.2\.\d+/.test(e)) {
              let e = (0, tu.decodeFunctionData)({ abi: tY, data: t });
              if ("executeBatch" === e.functionName)
                return e.args[0].map((e) => ({
                  to: e.to,
                  value: e.value,
                  data: e.data,
                }));
              if ("execute" === e.functionName) {
                let [t, a, n] = e.args;
                return [{ to: t, value: a, data: n }];
              }
              throw Error("Invalid function name");
            }
            return t2(t).callData;
          })({ callData: e, kernelVersion: D }),
        async getNonce(t) {
          return eK(o, {
            address: await this.getAddress(),
            entryPointAddress: v.address,
            key: ((e, t, a = 0n) => {
              if (/0\.2\.\d+/.test(e)) return a;
              if (a > t1.maxUint16)
                throw Error(
                  `nonce key must be equal or less than 2 bytes(maxUint16) for Kernel version ${e}`
                );
              let i = n.DEFAULT;
              return BigInt(
                (0, ef.pad)(
                  (0, ex.concatHex)([
                    i,
                    "0x00",
                    t,
                    (0, em.toHex)(a, { size: 2 }),
                  ]),
                  { size: 24 }
                )
              );
            })(D, E, e.nonceKey ?? 0n),
          });
        },
        getStubSignature: async () =>
          /0\.2\.\d+/.test(D)
            ? (0, ex.concatHex)(["0x00000000", t0])
            : "webAuthn" === A.type
            ? (0, eZ.encodeAbiParameters)(
                [
                  { name: "authenticatorData", type: "bytes" },
                  { name: "clientDataJSON", type: "string" },
                  { name: "responseTypeLocation", type: "uint256" },
                  { name: "r", type: "uint256" },
                  { name: "s", type: "uint256" },
                  { name: "usePrecompiled", type: "bool" },
                ],
                [
                  "0x49960de5880e8c687434170f6476605b8fe4aeb9a28632c7995cf3ba831d97631d00000000",
                  '{"type":"webauthn.get","challenge":"tbxXNFS9X_4Byr1cMwqKrIGB-_30a0QhZ6y7ucM0BOE","origin":"http://localhost:3000","crossOrigin":false, "other_keys_can_be_added_here":"do not compare clientDataJSON against a template. See https://goo.gl/yabPex"}',
                  1n,
                  0x635bc6d0f68ff895cae8a288ecf7542a6a9cd555df784b73e1e2ea7e9104b1dbn,
                  0x15e9015d280cb19527881c625fee43fd3a405d5b0d199a8c8e6589a7381209e4n,
                  !1,
                ]
              )
            : t0,
        async sign({ hash: e }) {
          return this.signMessage({ message: e });
        },
        async signMessage({ message: e }) {
          if ("isDeployed" in this && !(await this.isDeployed()) && h)
            throw Error(
              "Kernel with EIP-7702 isn't 1271 compliant before delegation."
            );
          let t = await t7({
            owner: A,
            message: e,
            accountAddress: await this.getAddress(),
            kernelVersion: D,
            chainId: await O(),
            eip7702: h,
          });
          return /0\.2\.\d+/.test(D) ? t : (0, ex.concatHex)([at(E, h), t]);
        },
        async signTypedData(e) {
          if ("isDeployed" in this && !(await this.isDeployed()) && h)
            throw Error(
              "Kernel with EIP-7702 isn't 1271 compliant before delegation."
            );
          let t = await t9({
            owner: A,
            chainId: await O(),
            ...e,
            accountAddress: await this.getAddress(),
            kernelVersion: D,
            eip7702: h,
          });
          return /0\.2\.\d+/.test(D) ? t : (0, ex.concatHex)([at(E, h), t]);
        },
        async signUserOperation(e) {
          let { chainId: t = await O(), ...a } = e,
            n = e7({
              userOperation: {
                ...a,
                sender: a.sender ?? (await this.getAddress()),
                signature: "0x",
              },
              entryPointAddress: v.address,
              entryPointVersion: v.version,
              chainId: t,
            }),
            i =
              "webAuthn" === A.type
                ? await t7({
                    owner: A,
                    message: { raw: n },
                    chainId: t,
                    accountAddress: await this.getAddress(),
                    kernelVersion: D,
                    eip7702: !1,
                  })
                : await A.signMessage({ message: { raw: n } });
          return /0\.2\.\d+/.test(D) ? (0, ex.concatHex)(["0x00000000", i]) : i;
        },
      });
    }
    var ar = tq;
    let as = async (e, t) => !!(await (0, e8.getCode)(e, { address: t })),
      ao = (e) => {
        e.sort((e, t) =>
          e.signer.toLowerCase().localeCompare(t.signer.toLowerCase())
        );
        let t = "0x",
          a = "";
        for (let n of e)
          if (n.dynamic) {
            let i = (65 * e.length + a.length / 2)
                .toString(16)
                .padStart(64, "0"),
              r = (n.data.slice(2).length / 2).toString(16).padStart(64, "0"),
              s = `${n.signer.slice(2).padStart(64, "0")}${i}00`,
              o = `${r}${n.data.slice(2)}`;
            (t += s), (a += o);
          } else t += n.data.slice(2);
        return t + a;
      },
      ad = async ({ owner: e, hash: t }) => {
        let { signature: a, webauthn: n } = await e.sign({ hash: t }),
          i = t3.Signature.fromHex(a),
          r = n.clientDataJSON.match(
            /^\{"type":"webauthn.get","challenge":"[A-Za-z0-9\-_]{43}",(.*)\}$/
          );
        if (!r) throw Error("challenge not found in client data JSON");
        let [, s] = r;
        return (0, eZ.encodeAbiParameters)(
          [
            { name: "authenticatorData", type: "bytes" },
            { name: "clientDataJSON", type: "string" },
            { name: "signature", type: "uint256[2]" },
          ],
          [n.authenticatorData, s, [BigInt(i.r), BigInt(i.s)]]
        );
      };
    async function ac(e) {
      let {
          chainId: t,
          entryPoint: a,
          validAfter: n = 0,
          validUntil: i = 0,
          safe4337ModuleAddress: r,
          version: s,
          owners: o,
          signatures: d,
          account: c,
          ...u
        } = e,
        { safe4337ModuleAddress: p } = aO(s, a.version, {
          safe4337ModuleAddress: r,
        }),
        y = {
          safe: u.sender,
          callData: u.callData,
          nonce: u.nonce,
          initCode: u.initCode ?? "0x",
          maxFeePerGas: u.maxFeePerGas,
          maxPriorityFeePerGas: u.maxPriorityFeePerGas,
          preVerificationGas: u.preVerificationGas,
          verificationGasLimit: u.verificationGasLimit,
          callGasLimit: u.callGasLimit,
          paymasterAndData: u.paymasterAndData ?? "0x",
          validAfter: n,
          validUntil: i,
          entryPoint: a.address,
        };
      if (
        ("initCode" in u && (y.paymasterAndData = u.paymasterAndData ?? "0x"),
        "factory" in u)
      ) {
        var l;
        if (
          (u.factory &&
            u.factoryData &&
            (y.initCode = (0, ex.concatHex)([u.factory, u.factoryData])),
          !u.sender)
        )
          throw Error("Sender is required");
        y.paymasterAndData = (l = { ...u, sender: u.sender }).paymaster
          ? (0, ex.concat)([
              l.paymaster,
              (0, ef.pad)(
                (0, em.toHex)(l.paymasterVerificationGasLimit || BigInt(0)),
                { size: 16 }
              ),
              (0, ef.pad)(
                (0, em.toHex)(l.paymasterPostOpGasLimit || BigInt(0)),
                { size: 16 }
              ),
              l.paymasterData || "0x",
            ])
          : "0x";
      }
      let m = aT(c) ? c : await tc({ owner: c }),
        f = aT(m) ? e.safeWebAuthnSharedSignerAddress : m.address;
      if (!f) throw Error("no signer found");
      let g = [];
      if (d)
        try {
          g = (0, tA.decodeAbiParameters)(
            [
              {
                components: [
                  { type: "address", name: "signer" },
                  { type: "bytes", name: "data" },
                  { type: "bool", name: "dynamic" },
                ],
                name: "signatures",
                type: "tuple[]",
              },
            ],
            d
          )[0];
        } catch {
          g = (0, tA.decodeAbiParameters)(
            [
              {
                components: [
                  { type: "address", name: "signer" },
                  { type: "bytes", name: "data" },
                ],
                name: "signatures",
                type: "tuple[]",
              },
            ],
            d
          )[0].map((e) => ({ ...e, dynamic: !1 }));
        }
      let b = [
        ...g,
        {
          signer: f,
          dynamic: aT(m),
          data: await (async () =>
            aT(m)
              ? ad({
                  owner: m,
                  hash: (0, e2.hashTypedData)({
                    domain: { chainId: t, verifyingContract: p },
                    types: "0.6" === a.version ? aw : ax,
                    primaryType: "SafeOp",
                    message: y,
                  }),
                })
              : m.signTypedData({
                  domain: { chainId: t, verifyingContract: p },
                  types: "0.6" === a.version ? aw : ax,
                  primaryType: "SafeOp",
                  message: y,
                }))(),
        },
      ];
      return b.length !== o.length
        ? (0, eZ.encodeAbiParameters)(
            [
              {
                components: [
                  { type: "address", name: "signer" },
                  { type: "bytes", name: "data" },
                  { type: "bool", name: "dynamic" },
                ],
                name: "signatures",
                type: "tuple[]",
              },
            ],
            [b]
          )
        : tG(["uint48", "uint48", "bytes"], [n, i, ao(b)]);
    }
    let au = [
        {
          inputs: [
            { internalType: "bytes", name: "transactions", type: "bytes" },
          ],
          name: "multiSend",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
      ],
      ap = [
        {
          type: "function",
          name: "initSafe7579",
          inputs: [
            { name: "safe7579", type: "address", internalType: "address" },
            {
              name: "executors",
              type: "tuple[]",
              internalType: "struct ModuleInit[]",
              components: [
                { name: "module", type: "address", internalType: "address" },
                { name: "initData", type: "bytes", internalType: "bytes" },
              ],
            },
            {
              name: "fallbacks",
              type: "tuple[]",
              internalType: "struct ModuleInit[]",
              components: [
                { name: "module", type: "address", internalType: "address" },
                { name: "initData", type: "bytes", internalType: "bytes" },
              ],
            },
            {
              name: "hooks",
              type: "tuple[]",
              internalType: "struct ModuleInit[]",
              components: [
                { name: "module", type: "address", internalType: "address" },
                { name: "initData", type: "bytes", internalType: "bytes" },
              ],
            },
            { name: "attesters", type: "address[]", internalType: "address[]" },
            { name: "threshold", type: "uint8", internalType: "uint8" },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
      ],
      ay = [
        {
          type: "function",
          name: "preValidationSetup",
          inputs: [
            { name: "initHash", type: "bytes32", internalType: "bytes32" },
            { name: "to", type: "address", internalType: "address" },
            { name: "preInit", type: "bytes", internalType: "bytes" },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
      ],
      al = [
        {
          inputs: [
            { internalType: "address[]", name: "modules", type: "address[]" },
          ],
          name: "enableModules",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
      am = [
        {
          inputs: [
            {
              components: [
                { internalType: "uint256", name: "x", type: "uint256" },
                { internalType: "uint256", name: "y", type: "uint256" },
                {
                  internalType: "P256.Verifiers",
                  name: "verifiers",
                  type: "uint176",
                },
              ],
              internalType: "struct SafeWebAuthnSharedSigner.Signer",
              name: "signer",
              type: "tuple",
            },
          ],
          name: "configure",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
      af = [
        {
          inputs: [
            { internalType: "address[]", name: "_owners", type: "address[]" },
            { internalType: "uint256", name: "_threshold", type: "uint256" },
            { internalType: "address", name: "to", type: "address" },
            { internalType: "bytes", name: "data", type: "bytes" },
            {
              internalType: "address",
              name: "fallbackHandler",
              type: "address",
            },
            { internalType: "address", name: "paymentToken", type: "address" },
            { internalType: "uint256", name: "payment", type: "uint256" },
            {
              internalType: "address payable",
              name: "paymentReceiver",
              type: "address",
            },
          ],
          name: "setup",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
      ag = [
        {
          inputs: [
            { internalType: "address", name: "_singleton", type: "address" },
            { internalType: "bytes", name: "initializer", type: "bytes" },
            { internalType: "uint256", name: "saltNonce", type: "uint256" },
          ],
          name: "createProxyWithNonce",
          outputs: [
            {
              internalType: "contract SafeProxy",
              name: "proxy",
              type: "address",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
      ab = [
        {
          type: "function",
          name: "setupSafe",
          inputs: [
            {
              name: "initData",
              type: "tuple",
              internalType: "struct Safe7579Launchpad.InitData",
              components: [
                { name: "singleton", type: "address", internalType: "address" },
                {
                  name: "owners",
                  type: "address[]",
                  internalType: "address[]",
                },
                { name: "threshold", type: "uint256", internalType: "uint256" },
                { name: "setupTo", type: "address", internalType: "address" },
                { name: "setupData", type: "bytes", internalType: "bytes" },
                {
                  name: "safe7579",
                  type: "address",
                  internalType: "contract ISafe7579",
                },
                {
                  name: "validators",
                  type: "tuple[]",
                  internalType: "struct ModuleInit[]",
                  components: [
                    {
                      name: "module",
                      type: "address",
                      internalType: "address",
                    },
                    { name: "initData", type: "bytes", internalType: "bytes" },
                  ],
                },
                { name: "callData", type: "bytes", internalType: "bytes" },
              ],
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
      ],
      ah = [
        {
          inputs: [
            { internalType: "address", name: "to", type: "address" },
            { internalType: "uint256", name: "value", type: "uint256" },
            { internalType: "bytes", name: "data", type: "bytes" },
            { internalType: "uint8", name: "operation", type: "uint8" },
          ],
          name: "executeUserOpWithErrorString",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
      aw = {
        SafeOp: [
          { type: "address", name: "safe" },
          { type: "uint256", name: "nonce" },
          { type: "bytes", name: "initCode" },
          { type: "bytes", name: "callData" },
          { type: "uint256", name: "callGasLimit" },
          { type: "uint256", name: "verificationGasLimit" },
          { type: "uint256", name: "preVerificationGas" },
          { type: "uint256", name: "maxFeePerGas" },
          { type: "uint256", name: "maxPriorityFeePerGas" },
          { type: "bytes", name: "paymasterAndData" },
          { type: "uint48", name: "validAfter" },
          { type: "uint48", name: "validUntil" },
          { type: "address", name: "entryPoint" },
        ],
      },
      ax = {
        SafeOp: [
          { type: "address", name: "safe" },
          { type: "uint256", name: "nonce" },
          { type: "bytes", name: "initCode" },
          { type: "bytes", name: "callData" },
          { type: "uint128", name: "verificationGasLimit" },
          { type: "uint128", name: "callGasLimit" },
          { type: "uint256", name: "preVerificationGas" },
          { type: "uint128", name: "maxPriorityFeePerGas" },
          { type: "uint128", name: "maxFeePerGas" },
          { type: "bytes", name: "paymasterAndData" },
          { type: "uint48", name: "validAfter" },
          { type: "uint48", name: "validUntil" },
          { type: "address", name: "entryPoint" },
        ],
      },
      aA = {
        "1.4.1": {
          0.6: {
            SAFE_MODULE_SETUP_ADDRESS:
              "0x8EcD4ec46D4D2a6B64fE960B3D64e8B94B2234eb",
            SAFE_4337_MODULE_ADDRESS:
              "0xa581c4A4DB7175302464fF3C06380BC3270b4037",
            SAFE_PROXY_FACTORY_ADDRESS:
              "0x4e1DCf7AD4e460CfD30791CCC4F9c8a4f820ec67",
            SAFE_SINGLETON_ADDRESS:
              "0x41675C099F32341bf84BFc5382aF534df5C7461a",
            MULTI_SEND_ADDRESS: "0x38869bf66a61cF6bDB996A6aE40D5853Fd43B526",
            MULTI_SEND_CALL_ONLY_ADDRESS:
              "0x9641d764fc13c8B624c04430C7356C1C7C8102e2",
          },
          0.7: {
            SAFE_MODULE_SETUP_ADDRESS:
              "0x2dd68b007B46fBe91B9A7c3EDa5A7a1063cB5b47",
            SAFE_4337_MODULE_ADDRESS:
              "0x75cf11467937ce3F2f357CE24ffc3DBF8fD5c226",
            SAFE_PROXY_FACTORY_ADDRESS:
              "0x4e1DCf7AD4e460CfD30791CCC4F9c8a4f820ec67",
            SAFE_SINGLETON_ADDRESS:
              "0x41675C099F32341bf84BFc5382aF534df5C7461a",
            MULTI_SEND_ADDRESS: "0x38869bf66a61cF6bDB996A6aE40D5853Fd43B526",
            MULTI_SEND_CALL_ONLY_ADDRESS:
              "0x9641d764fc13c8B624c04430C7356C1C7C8102e2",
            WEB_AUTHN_SHARED_SIGNER_ADDRESS:
              "0x94a4F6affBd8975951142c3999aEAB7ecee555c2",
            SAFE_P256_VERIFIER_ADDRESS:
              "0xA86e0054C51E4894D88762a017ECc5E5235f5DBA",
          },
        },
        "1.5.0": {
          0.7: {
            SAFE_MODULE_SETUP_ADDRESS:
              "0x2dd68b007B46fBe91B9A7c3EDa5A7a1063cB5b47",
            SAFE_4337_MODULE_ADDRESS:
              "0x75cf11467937ce3F2f357CE24ffc3DBF8fD5c226",
            SAFE_PROXY_FACTORY_ADDRESS:
              "0x14F2982D601c9458F93bd70B218933A6f8165e7b",
            SAFE_SINGLETON_ADDRESS:
              "0xFf51A5898e281Db6DfC7855790607438dF2ca44b",
            MULTI_SEND_ADDRESS: "0x218543288004CD07832472D464648173c77D7eB7",
            MULTI_SEND_CALL_ONLY_ADDRESS:
              "0xA83c336B20401Af773B6219BA5027174338D1836",
            WEB_AUTHN_SHARED_SIGNER_ADDRESS:
              "0x94a4F6affBd8975951142c3999aEAB7ecee555c2",
            SAFE_P256_VERIFIER_ADDRESS:
              "0xA86e0054C51E4894D88762a017ECc5E5235f5DBA",
          },
        },
      },
      av = (e, t) => {
        let a = Number.parseInt(t.slice(-2), 16);
        if (![0, 1, 27, 28].includes(a)) throw Error("Invalid signature");
        return (
          "eth_sign" === e && (a < 27 && (a += 27), (a += 4)),
          "eth_signTypedData" === e && a < 27 && (a += 27),
          t.slice(0, -2) + a.toString(16)
        );
      },
      aD = (e) =>
        "string" == typeof e || e.raw
          ? (0, tf.hashMessage)(e)
          : (0, e2.hashTypedData)(e),
      aP = (e) => {
        let t = `0x${e
          .map((e) =>
            tG(
              ["uint8", "address", "uint256", "uint256", "bytes"],
              [
                e.operation,
                e.to,
                e.value,
                BigInt(e.data.slice(2).length / 2),
                e.data,
              ]
            ).slice(2)
          )
          .join("")}`;
        return (0, ew.encodeFunctionData)({
          abi: au,
          functionName: "multiSend",
          args: [t],
        });
      },
      aE = ({
        safe4337ModuleAddress: e,
        safeSingletonAddress: t,
        erc7579LaunchpadAddress: a,
        safeWebAuthnSharedSignerAddress: n,
        owners: i,
        validators: r,
        executors: s,
        fallbacks: o,
        hooks: d,
        attesters: c,
        threshold: u,
        attestersThreshold: p,
      }) => ({
        singleton: t,
        owners: i.map((e) => {
          if ("type" in e && "webAuthn" === e.type) {
            if (!n) throw Error("safeWebAuthnSharedSignerAddress not defined");
            return n;
          }
          if ("address" in e && e.address) return e.address;
          throw Error("Incorrect owner found");
        }),
        threshold: u,
        setupTo: a,
        setupData: (0, ew.encodeFunctionData)({
          abi: ap,
          functionName: "initSafe7579",
          args: [
            e,
            s.map((e) => ({ module: e.address, initData: e.context })),
            o.map((e) => ({ module: e.address, initData: e.context })),
            d.map((e) => ({ module: e.address, initData: e.context })),
            c.sort((e, t) => e.toLowerCase().localeCompare(t.toLowerCase())),
            p,
          ],
        }),
        safe7579: e,
        validators: r,
      }),
      aT = (e) => "type" in e && "webAuthn" === e.type,
      aS = async ({
        owners: e,
        threshold: t,
        safeModuleSetupAddress: a,
        safe4337ModuleAddress: n,
        safeWebAuthnSharedSignerAddress: i,
        safeP256VerifierAddress: r,
        multiSendAddress: s,
        safeSingletonAddress: o,
        erc7579LaunchpadAddress: d,
        setupTransactions: c = [],
        safeModules: u = [],
        validators: p = [],
        executors: y = [],
        fallbacks: l = [],
        hooks: m = [],
        attesters: f = [],
        attestersThreshold: g = 0,
        paymentToken: b = ar.zeroAddress,
        payment: h = BigInt(0),
        paymentReceiver: w = ar.zeroAddress,
      }) => {
        if (d) {
          let a = aE({
              safe4337ModuleAddress: n,
              safeSingletonAddress: o,
              safeWebAuthnSharedSignerAddress: i,
              erc7579LaunchpadAddress: d,
              owners: e,
              validators: p,
              executors: y,
              fallbacks: l,
              threshold: t,
              hooks: m,
              attesters: f,
              attestersThreshold: g,
            }),
            r = (0, e0.keccak256)(
              (0, eZ.encodeAbiParameters)(
                [
                  {
                    internalType: "address",
                    name: "singleton",
                    type: "address",
                  },
                  {
                    internalType: "address[]",
                    name: "owners",
                    type: "address[]",
                  },
                  {
                    internalType: "uint256",
                    name: "threshold",
                    type: "uint256",
                  },
                  { internalType: "address", name: "setupTo", type: "address" },
                  { internalType: "bytes", name: "setupData", type: "bytes" },
                  {
                    internalType: "contract ISafe7579",
                    name: "safe7579",
                    type: "address",
                  },
                  {
                    internalType: "struct ModuleInit[]",
                    name: "validators",
                    type: "tuple[]",
                    components: [
                      {
                        internalType: "address",
                        name: "module",
                        type: "address",
                      },
                      {
                        internalType: "bytes",
                        name: "initData",
                        type: "bytes",
                      },
                    ],
                  },
                ],
                [
                  a.singleton,
                  a.owners,
                  a.threshold,
                  a.setupTo,
                  a.setupData,
                  a.safe7579,
                  a.validators.map((e) => ({
                    module: e.address,
                    initData: e.context,
                  })),
                ]
              )
            );
          return (0, ew.encodeFunctionData)({
            abi: ay,
            functionName: "preValidationSetup",
            args: [r, ar.zeroAddress, "0x"],
          });
        }
        let x = e.reduce((e, t) => (aT(t) ? t : e), void 0),
          A = e.map((e) => {
            if (aT(e)) {
              if (!i)
                throw Error("safeWebAuthnSharedSignerAddress not defined");
              return i;
            }
            if ("address" in e && e.address) return e.address;
            throw Error("Incorrect owner found");
          }),
          v = [
            {
              to: a,
              data: (0, ew.encodeFunctionData)({
                abi: al,
                functionName: "enableModules",
                args: [[n, ...u]],
              }),
              value: BigInt(0),
              operation: 1,
            },
          ];
        if (x && i && r) {
          let e = t$.PublicKey.fromHex(x.publicKey);
          v.push({
            to: i,
            data: (0, ew.encodeFunctionData)({
              abi: am,
              functionName: "configure",
              args: [{ x: e.x, y: e.y, verifiers: BigInt(r) }],
            }),
            value: BigInt(0),
            operation: 1,
          });
        }
        for (let e of c) v.push({ ...e, operation: 0 });
        let D = aP(v);
        return (0, ew.encodeFunctionData)({
          abi: af,
          functionName: "setup",
          args: [A, t, s, D, n, b, h, w],
        });
      },
      aC = async ({
        owners: e,
        threshold: t,
        safeModuleSetupAddress: a,
        safe4337ModuleAddress: n,
        safeSingletonAddress: i,
        erc7579LaunchpadAddress: r,
        safeWebAuthnSharedSignerAddress: s,
        safeP256VerifierAddress: o,
        multiSendAddress: d,
        paymentToken: c,
        payment: u,
        paymentReceiver: p,
        saltNonce: y = BigInt(0),
        setupTransactions: l = [],
        safeModules: m = [],
        validators: f = [],
        executors: g = [],
        fallbacks: b = [],
        hooks: h = [],
        attesters: w = [],
        attestersThreshold: x = 0,
      }) => {
        let A = await aS({
          owners: e,
          threshold: t,
          safeModuleSetupAddress: a,
          safeWebAuthnSharedSignerAddress: s,
          safeP256VerifierAddress: o,
          safe4337ModuleAddress: n,
          multiSendAddress: d,
          setupTransactions: l,
          safeSingletonAddress: i,
          safeModules: m,
          erc7579LaunchpadAddress: r,
          validators: f,
          executors: g,
          fallbacks: b,
          hooks: h,
          attesters: w,
          attestersThreshold: x,
          paymentToken: c,
          payment: u,
          paymentReceiver: p,
        });
        return (0, ew.encodeFunctionData)({
          abi: ag,
          functionName: "createProxyWithNonce",
          args: [r ?? i, A, y],
        });
      },
      aO = (
        e,
        t,
        {
          addModuleLibAddress: a,
          safeModuleSetupAddress: n,
          safe4337ModuleAddress: i,
          safeProxyFactoryAddress: r,
          safeSingletonAddress: s,
          multiSendAddress: o,
          multiSendCallOnlyAddress: d,
          safeWebAuthnSharedSignerAddress: c,
          safeP256VerifierAddress: u,
        }
      ) => {
        let p = aA[e][t];
        if (!p)
          throw Error(
            `Safe version ${e} does not support EntryPoint version ${t}`
          );
        let y = n ?? a ?? p.SAFE_MODULE_SETUP_ADDRESS,
          l = i ?? p.SAFE_4337_MODULE_ADDRESS,
          m = r ?? p.SAFE_PROXY_FACTORY_ADDRESS,
          f = s ?? p.SAFE_SINGLETON_ADDRESS,
          g = o ?? p.MULTI_SEND_ADDRESS,
          b = d ?? p.MULTI_SEND_CALL_ONLY_ADDRESS;
        return {
          safeModuleSetupAddress: y,
          safe4337ModuleAddress: l,
          safeProxyFactoryAddress: m,
          safeSingletonAddress: f,
          multiSendAddress: g,
          multiSendCallOnlyAddress: b,
          safeWebAuthnSharedSignerAddress:
            c ?? p.WEB_AUTHN_SHARED_SIGNER_ADDRESS,
          safeP256VerifierAddress: u ?? p.SAFE_P256_VERIFIER_ADDRESS,
        };
      };
    function aF(e) {
      return void 0 !== e.erc7579LaunchpadAddress;
    }
    let aI = [
        {
          inputs: [],
          name: "proxyCreationCode",
          outputs: [{ internalType: "bytes", name: "", type: "bytes" }],
          stateMutability: "pure",
          type: "function",
        },
      ],
      aG = async ({
        client: e,
        owners: t,
        threshold: a,
        safeModuleSetupAddress: n,
        safe4337ModuleAddress: i,
        safeProxyFactoryAddress: r,
        safeSingletonAddress: s,
        multiSendAddress: o,
        safeWebAuthnSharedSignerAddress: d,
        safeP256VerifierAddress: c,
        erc7579LaunchpadAddress: u,
        paymentToken: p,
        payment: y,
        paymentReceiver: l,
        setupTransactions: m = [],
        safeModules: f = [],
        saltNonce: g = BigInt(0),
        validators: b = [],
        executors: h = [],
        fallbacks: w = [],
        hooks: x = [],
        attesters: A = [],
        attestersThreshold: v = 0,
      }) => {
        let D = await (0, eY.readContract)(e, {
            abi: aI,
            address: r,
            functionName: "proxyCreationCode",
          }),
          P = await aS({
            owners: t,
            threshold: a,
            safeModuleSetupAddress: n,
            safe4337ModuleAddress: i,
            safeWebAuthnSharedSignerAddress: d,
            safeP256VerifierAddress: c,
            multiSendAddress: o,
            setupTransactions: m,
            safeSingletonAddress: s,
            safeModules: f,
            erc7579LaunchpadAddress: u,
            validators: b,
            executors: h,
            fallbacks: w,
            hooks: x,
            attesters: A,
            attestersThreshold: v,
            paymentToken: p,
            payment: y,
            paymentReceiver: l,
          }),
          E = tG(["bytes", "uint256"], [D, (0, eA.hexToBigInt)(u ?? s)]);
        return tU({
          from: r,
          salt: (0, e0.keccak256)(
            tG(
              ["bytes32", "uint256"],
              [(0, e0.keccak256)(tG(["bytes"], [P])), g]
            )
          ),
          bytecode: E,
          opcode: "CREATE2",
        });
      };
    async function aB(e) {
      let t,
        a,
        n,
        i,
        r,
        {
          client: s,
          owners: o,
          address: d,
          threshold: c = BigInt(o.length),
          version: u,
          safe4337ModuleAddress: p,
          safeProxyFactoryAddress: y,
          safeSingletonAddress: l,
          erc7579LaunchpadAddress: f,
          saltNonce: g = BigInt(0),
          validUntil: h = 0,
          validAfter: w = 0,
          nonceKey: x,
          paymentToken: A,
          payment: v,
          paymentReceiver: D,
          onchainIdentifier: P,
        } = e,
        E = await Promise.all(
          o.map(async (e) =>
            "account" in e ? e.account : "request" in e ? tc({ owner: e }) : e
          )
        ),
        T = await Promise.all(
          o
            .filter(
              (e) =>
                !!(
                  ("type" in e && "local" === e.type) ||
                  "request" in e ||
                  "account" in e ||
                  aT(e)
                )
            )
            .map((e) => (aT(e) ? e : tc({ owner: e })))
        ),
        S = {
          address: e.entryPoint?.address ?? eQ,
          abi: (e.entryPoint?.version ?? "0.7") === "0.6" ? eJ : eX,
          version: e.entryPoint?.version ?? "0.7",
        },
        C = [],
        O = [],
        F = [],
        I = [],
        G = [],
        B = [],
        M = 0;
      aF(e) ||
        ((a = e.safeModuleSetupAddress),
        (n = e.multiSendAddress),
        (i = e.multiSendCallOnlyAddress),
        (r = e.safeModules),
        (C = e.setupTransactions ?? [])),
        aF(e) &&
          ((O = e.validators ?? []),
          (F = e.executors ?? []),
          (I = e.fallbacks ?? []),
          (G = e.hooks ?? []),
          (B = e.attesters ?? []),
          (M = e.attestersThreshold ?? 0));
      let {
          safeModuleSetupAddress: L,
          safe4337ModuleAddress: k,
          safeProxyFactoryAddress: U,
          safeSingletonAddress: _,
          multiSendAddress: N,
          multiSendCallOnlyAddress: R,
          safeWebAuthnSharedSignerAddress: V,
          safeP256VerifierAddress: H,
        } = aO(u, S.version, {
          safeModuleSetupAddress: a,
          safe4337ModuleAddress: p,
          safeProxyFactoryAddress: y,
          safeSingletonAddress: l,
          multiSendAddress: n,
          multiSendCallOnlyAddress: i,
          safeWebAuthnSharedSignerAddress: e.safeWebAuthnSharedSignerAddress,
          safeP256VerifierAddress: e.safeP256VerifierAddress,
        }),
        W = d,
        z = async () =>
          t ||
          (t = s.chain
            ? s.chain.id
            : await (0, b.getAction)(s, m.getChainId, "getChainId")({}));
      return tn({
        client: s,
        entryPoint: S,
        getFactoryArgs: async () => ({
          factory: U,
          factoryData: await aC({
            owners: E,
            threshold: c,
            safeModuleSetupAddress: L,
            safe4337ModuleAddress: k,
            safeSingletonAddress: _,
            safeWebAuthnSharedSignerAddress: V,
            safeP256VerifierAddress: H,
            multiSendAddress: N,
            erc7579LaunchpadAddress: f,
            saltNonce: g,
            setupTransactions: C,
            safeModules: r,
            validators: O,
            executors: F,
            fallbacks: I,
            hooks: G,
            attesters: B,
            attestersThreshold: M,
            paymentToken: A,
            payment: v,
            paymentReceiver: D,
          }),
        }),
        getAddress: async () =>
          W ||
          (W = await aG({
            client: s,
            owners: E,
            threshold: c,
            safeModuleSetupAddress: L,
            safe4337ModuleAddress: k,
            safeProxyFactoryAddress: U,
            safeSingletonAddress: _,
            safeWebAuthnSharedSignerAddress: V,
            safeP256VerifierAddress: H,
            multiSendAddress: N,
            erc7579LaunchpadAddress: f,
            saltNonce: g,
            setupTransactions: C,
            safeModules: r,
            validators: O,
            executors: F,
            fallbacks: I,
            hooks: G,
            attesters: B,
            attestersThreshold: M,
            paymentToken: A,
            payment: v,
            paymentReceiver: D,
          })),
        async encodeCalls(e) {
          let t,
            a,
            n,
            i = e.length > 1;
          if (f) {
            if (!(await as(s, await this.getAddress()))) {
              let t = aE({
                safe4337ModuleAddress: k,
                safeSingletonAddress: _,
                erc7579LaunchpadAddress: f,
                safeWebAuthnSharedSignerAddress: V,
                owners: E,
                threshold: c,
                validators: O,
                executors: F,
                fallbacks: I,
                hooks: G,
                attesters: B,
                attestersThreshold: M,
              });
              return (0, ew.encodeFunctionData)({
                abi: ab,
                functionName: "setupSafe",
                args: [
                  {
                    ...t,
                    validators: t.validators.map((e) => ({
                      module: e.address,
                      initData: e.context,
                    })),
                    callData: t5({
                      mode: {
                        type: i ? "batchcall" : "call",
                        revertOnError: !1,
                        selector: "0x",
                        context: "0x",
                      },
                      callData: e,
                    }),
                  },
                ],
              });
            }
            return t5({
              mode: {
                type: i ? "batchcall" : "call",
                revertOnError: !1,
                selector: "0x",
                context: "0x",
              },
              callData: e,
            });
          }
          let r = 0;
          if (i)
            (t = R),
              (a = BigInt(0)),
              (n = aP(
                e.map((e) => ({
                  to: e.to,
                  value: e.value ?? 0n,
                  data: e.data ?? "0x",
                  operation: 0,
                }))
              )),
              (r = 1);
          else {
            let i = 0 === e.length ? void 0 : e[0];
            if (!i) throw Error("No calls to encode");
            (t = i.to), (n = i.data ?? "0x"), (a = i.value ?? 0n);
          }
          let o = (0, ew.encodeFunctionData)({
            abi: ah,
            functionName: "executeUserOpWithErrorString",
            args: [t, a, n, r],
          });
          return P ? (0, ex.concat)([o, P]) : o;
        },
        async decodeCalls(e) {
          try {
            let t = (0, tu.decodeFunctionData)({ abi: ab, data: e });
            return t2(t.args[0].callData).callData;
          } catch (e) {}
          try {
            return t2(e).callData;
          } catch (e) {}
          let t = (0, tu.decodeFunctionData)({ abi: ah, data: e }),
            a = t.args[0],
            n = t.args[1],
            i = t.args[2];
          if (a === R) {
            let e = (0, tu.decodeFunctionData)({ abi: au, data: i }).args[0],
              t = [],
              a = 0,
              n = (0, e5.size)(e);
            for (; a < n; ) {
              a += 1;
              let n = (0, tk.getAddress)((0, tM.slice)(e, a, a + 20));
              a += 20;
              let i = BigInt((0, tM.slice)(e, a, a + 32));
              a += 32;
              let r = Number(BigInt((0, tM.slice)(e, a, a + 32)) * BigInt(2));
              a += 32;
              let s = (0, tM.slice)(e, a, a + r);
              (a += r), t.push({ to: n, value: i, data: s });
            }
            return t;
          }
          return [{ to: a, value: n, data: i }];
        },
        async getNonce(e) {
          return eK(s, {
            address: await this.getAddress(),
            entryPointAddress: S.address,
            key: x ?? e?.key,
          });
        },
        getStubSignature: async () =>
          tG(
            ["uint48", "uint48", "bytes"],
            [
              0,
              0,
              ao(
                E.map((e) => {
                  let t = V,
                    a = !0,
                    n =
                      "0xfffffffffffffffffffffffffffffff0000000000000000000000000000000007aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa1c";
                  if (
                    (aT(e)
                      ? (n = (0, eZ.encodeAbiParameters)(
                          [
                            { name: "authenticatorData", type: "bytes" },
                            { name: "clientDataJSON", type: "string" },
                            { name: "signature", type: "uint256[2]" },
                          ],
                          [
                            "0x49960de5880e8c687434170f6476605b8fe4aeb9a28632c7995cf3ba831d97631d00000000",
                            '"origin":"http://somelargdomainheresothatwehaveenoughbytes.com","crossOrigin":false',
                            [
                              0x635bc6d0f68ff895cae8a288ecf7542a6a9cd555df784b73e1e2ea7e9104b1dbn,
                              0x15e9015d280cb19527881c625fee43fd3a405d5b0d199a8c8e6589a7381209e4n,
                            ],
                          ]
                        ))
                      : ((t = e.address), (a = !1)),
                    !t)
                  )
                    throw Error("No signer found");
                  return { signer: t, data: n, dynamic: a };
                })
              ),
            ]
          ),
        async sign({ hash: e }) {
          return this.signMessage({ message: e });
        },
        async signMessage({ message: e }) {
          if (T.length < Number(c))
            throw Error("Owners length mismatch, currently not supported");
          if (f && "1.5.0" === u)
            throw Error("Safe 7579 & version 1.5.0 are not compatible");
          let t = (0, e2.hashTypedData)({
              domain: {
                chainId: await z(),
                verifyingContract: await this.getAddress(),
              },
              types: { SafeMessage: [{ name: "message", type: "bytes" }] },
              primaryType: "SafeMessage",
              message: { message: aD(e) },
            }),
            a = ao(
              await Promise.all(
                T.map(async (e) => {
                  let a,
                    n = V,
                    i = !0;
                  if (
                    (aT(e)
                      ? (a = await ad({ owner: e, hash: t }))
                      : ((n = e.address),
                        (a = av(
                          "eth_sign",
                          await e.signMessage({
                            message: { raw: (0, tt.toBytes)(t) },
                          })
                        )),
                        (i = !1)),
                    !n)
                  )
                    throw Error("no signer found");
                  return { signer: n, dynamic: i, data: a };
                })
              )
            );
          return f ? (0, ex.concat)([ar.zeroAddress, a]) : a;
        },
        async signTypedData(e) {
          if (T.length < Number(c))
            throw Error("Owners length mismatch, currently not supported");
          if (f && "1.5.0" === u)
            throw Error("Safe 7579 & version 1.5.0 are not compatible");
          let t = ao(
            await Promise.all(
              T.map(async (t) => {
                let a,
                  n = V,
                  i = !0;
                if (aT(t)) {
                  let n = (0, e2.hashTypedData)({
                    domain: {
                      chainId: await z(),
                      verifyingContract: await this.getAddress(),
                    },
                    types: {
                      SafeMessage: [{ name: "message", type: "bytes" }],
                    },
                    primaryType: "SafeMessage",
                    message: { message: aD(e) },
                  });
                  a = await ad({ owner: t, hash: n });
                } else
                  (n = t.address),
                    (a = av(
                      "eth_signTypedData",
                      await t.signTypedData({
                        domain: {
                          chainId: await z(),
                          verifyingContract: await this.getAddress(),
                        },
                        types: {
                          SafeMessage: [{ name: "message", type: "bytes" }],
                        },
                        primaryType: "SafeMessage",
                        message: { message: aD(e) },
                      })
                    )),
                    (i = !1);
                if (!n) throw Error("no signer found");
                return { signer: n, dynamic: i, data: a };
              })
            )
          );
          return f ? (0, ex.concat)([ar.zeroAddress, t]) : t;
        },
        async signUserOperation(e) {
          let t,
            { chainId: a = await z(), ...n } = e;
          if (T.length < Number(c))
            throw Error(
              "Owners length mismatch use SafeSmartAccount.signUserOperation from `permissionless/accounts/safe`"
            );
          for (let e of T)
            t = await ac({
              ...n,
              version: u,
              entryPoint: S,
              owners: T,
              account: e,
              chainId: a,
              signatures: t,
              validAfter: w,
              validUntil: h,
              safe4337ModuleAddress: k,
              safeWebAuthnSharedSignerAddress: V,
            });
          if (!t) throw Error("No signatures found");
          return t;
        },
      });
    }
    function aM(e) {
      return {
        getPaymasterData: (t) => ev(e, t),
        getPaymasterStubData: (t) => eD(e, t),
      };
    }
    var aL = e.i(505880);
    let ak = async (e, t) => {
        let a = t.chain?.id ?? e.chain?.id;
        if (!a) throw new aL.ChainNotFoundError();
        return (
          await e.request({
            method: "pimlico_getTokenQuotes",
            params: [
              { tokens: t.tokens },
              t.entryPointAddress,
              (0, em.numberToHex)(a),
            ],
          })
        ).quotes.map((e) => ({
          ...e,
          balanceSlot: e.balanceSlot
            ? (0, eA.hexToBigInt)(e.balanceSlot)
            : void 0,
          allowanceSlot: e.allowanceSlot
            ? (0, eA.hexToBigInt)(e.allowanceSlot)
            : void 0,
          postOpGas: (0, eA.hexToBigInt)(e.postOpGas),
          exchangeRate: (0, eA.hexToBigInt)(e.exchangeRate),
          exchangeRateNativeToUsd: (0, eA.hexToBigInt)(
            e.exchangeRateNativeToUsd
          ),
        }));
      },
      aU = async (e, t) => {
        let {
          compressedUserOperation: a,
          inflatorAddress: n,
          entryPointAddress: i,
        } = t;
        return e.request({
          method: "pimlico_sendCompressedUserOperation",
          params: [a, n, i],
        });
      };
    function a_(e) {
      if ("function" != typeof e)
        return null == e || "string" == typeof e || "boolean" == typeof e
          ? e
          : "bigint" == typeof e
          ? (0, em.toHex)(e)
          : null != e._isBigNumber || "object" != typeof e
          ? (0, em.toHex)(e).replace(/^0x0/, "0x")
          : Array.isArray(e)
          ? e.map((e) => a_(e))
          : Object.keys(e).reduce((t, a) => ((t[a] = a_(e[a])), t), {});
    }
    let aN = async (e, t) =>
        await e.request({
          method: "pm_validateSponsorshipPolicies",
          params: [
            a_(t.userOperation),
            t.entryPointAddress,
            t.sponsorshipPolicyIds,
          ],
        }),
      aR = async (e, t) => {
        let a = t.chain ?? e.chain;
        if (!a) throw new aL.ChainNotFoundError();
        let { entryPoint: n, userOperation: i, token: r } = t,
          s = await (0, b.getAction)(
            e,
            ak,
            "getTokenQuotes"
          )({ tokens: [r], entryPointAddress: n.address, chain: a }),
          o = s[0].postOpGas,
          d = s[0].exchangeRate,
          c = s[0].exchangeRateNativeToUsd,
          u =
            (({ userOperation: e, entryPointVersion: t }) => {
              if ("0.6" === t) {
                let t =
                  (e.paymasterAndData?.length ?? 0) > 2 ? BigInt(3) : BigInt(1);
                return (
                  BigInt(
                    e.callGasLimit +
                      e.verificationGasLimit * t +
                      e.preVerificationGas
                  ) * BigInt(e.maxFeePerGas)
                );
              }
              return (
                (e.verificationGasLimit +
                  e.callGasLimit +
                  (e.paymasterVerificationGasLimit || 0n) +
                  (e.paymasterPostOpGasLimit || 0n) +
                  e.preVerificationGas) *
                e.maxFeePerGas
              );
            })({ userOperation: i, entryPointVersion: n.version }) +
            o * i.maxFeePerGas;
        return {
          costInToken: (u * d) / BigInt(1e18),
          costInUsd: (u * c) / 10n ** 18n,
        };
      },
      aV = async (e) => {
        let t = await e.request({
          method: "pimlico_getUserOperationGasPrice",
          params: [],
        });
        return {
          slow: {
            maxFeePerGas: BigInt(t.slow.maxFeePerGas),
            maxPriorityFeePerGas: BigInt(t.slow.maxPriorityFeePerGas),
          },
          standard: {
            maxFeePerGas: BigInt(t.standard.maxFeePerGas),
            maxPriorityFeePerGas: BigInt(t.standard.maxPriorityFeePerGas),
          },
          fast: {
            maxFeePerGas: BigInt(t.fast.maxFeePerGas),
            maxPriorityFeePerGas: BigInt(t.fast.maxPriorityFeePerGas),
          },
        };
      },
      aH = async (e, { hash: t }) =>
        e.request({ method: "pimlico_getUserOperationStatus", params: [t] }),
      aW = async (e, t) => {
        let {
            sponsorshipPolicyId: a,
            paymasterContext: n,
            userOperation: i,
            entryPoint: r,
          } = t,
          s = void 0 !== a ? { ...(n ?? {}), sponsorshipPolicyId: a } : n,
          o = await e.request({
            method: "pm_sponsorUserOperation",
            params: s ? [a_(i), r.address, s] : [a_(i), r.address],
          });
        return "0.6" === r.version
          ? {
              paymasterAndData: o.paymasterAndData,
              preVerificationGas: BigInt(o.preVerificationGas),
              verificationGasLimit: BigInt(o.verificationGasLimit),
              callGasLimit: BigInt(o.callGasLimit),
            }
          : {
              callGasLimit: BigInt(o.callGasLimit),
              verificationGasLimit: BigInt(o.verificationGasLimit),
              preVerificationGas: BigInt(o.preVerificationGas),
              paymaster: o.paymaster,
              paymasterVerificationGasLimit: BigInt(
                o.paymasterVerificationGasLimit
              ),
              paymasterPostOpGasLimit: BigInt(o.paymasterPostOpGasLimit),
              paymasterData: o.paymasterData,
            };
      };
    function az(e) {
      let {
        key: t = "public",
        name: a = "Pimlico Bundler Client",
        entryPoint: n,
      } = e;
      return (0, l.createClient)({
        ...e,
        key: t,
        name: a,
        type: "pimlicoClient",
      })
        .extend(ek)
        .extend(aM)
        .extend(
          (
            ({ entryPoint: e }) =>
            (t) => ({
              getUserOperationGasPrice: async () => aV(t),
              getUserOperationStatus: async (e) => aH(t, e),
              sendCompressedUserOperation: async (a) =>
                aU(t, { ...a, entryPointAddress: e.address }),
              sponsorUserOperation: async (a) => aW(t, { ...a, entryPoint: e }),
              validateSponsorshipPolicies: async (a) =>
                aN(t, { ...a, entryPointAddress: e.address }),
              getTokenQuotes: async (a) =>
                ak(t, { ...a, chain: a.chain, entryPointAddress: e.address }),
              estimateErc20PaymasterCost: async (a) =>
                aR(t, { ...a, entryPoint: e, chain: a.chain }),
            })
          )({
            entryPoint: {
              address: n?.address ?? eQ,
              version: n?.version ?? "0.7",
            },
          })
        );
    }
    var aj = e.i(651255),
      a$ = e.i(260694),
      aq = e.i(131363),
      aY = e.i(768288),
      aK = e.i(315027),
      aJ = e.i(188098),
      aX = e.i(822616),
      aQ = e.i(788797),
      aZ = e.i(552902),
      a0 = e.i(253082),
      a2 = e.i(322124),
      a6 = e.i(273407),
      a5 = e.i(547104),
      a1 = e.i(769263),
      a3 = e.i(542544),
      a4 = e.i(116896),
      a7 = e.i(97163),
      a9 = e.i(559268);
    let a8 = [
      {
        inputs: [
          { name: "preOpGas", type: "uint256" },
          { name: "paid", type: "uint256" },
          { name: "validAfter", type: "uint48" },
          { name: "validUntil", type: "uint48" },
          { name: "targetSuccess", type: "bool" },
          { name: "targetResult", type: "bytes" },
        ],
        name: "ExecutionResult",
        type: "error",
      },
      {
        inputs: [
          { name: "opIndex", type: "uint256" },
          { name: "reason", type: "string" },
        ],
        name: "FailedOp",
        type: "error",
      },
      {
        inputs: [{ name: "sender", type: "address" }],
        name: "SenderAddressResult",
        type: "error",
      },
      {
        inputs: [{ name: "aggregator", type: "address" }],
        name: "SignatureValidationFailed",
        type: "error",
      },
      {
        inputs: [
          {
            components: [
              { name: "preOpGas", type: "uint256" },
              { name: "prefund", type: "uint256" },
              { name: "sigFailed", type: "bool" },
              { name: "validAfter", type: "uint48" },
              { name: "validUntil", type: "uint48" },
              { name: "paymasterContext", type: "bytes" },
            ],
            name: "returnInfo",
            type: "tuple",
          },
          {
            components: [
              { name: "stake", type: "uint256" },
              { name: "unstakeDelaySec", type: "uint256" },
            ],
            name: "senderInfo",
            type: "tuple",
          },
          {
            components: [
              { name: "stake", type: "uint256" },
              { name: "unstakeDelaySec", type: "uint256" },
            ],
            name: "factoryInfo",
            type: "tuple",
          },
          {
            components: [
              { name: "stake", type: "uint256" },
              { name: "unstakeDelaySec", type: "uint256" },
            ],
            name: "paymasterInfo",
            type: "tuple",
          },
        ],
        name: "ValidationResult",
        type: "error",
      },
      {
        inputs: [
          {
            components: [
              { name: "preOpGas", type: "uint256" },
              { name: "prefund", type: "uint256" },
              { name: "sigFailed", type: "bool" },
              { name: "validAfter", type: "uint48" },
              { name: "validUntil", type: "uint48" },
              { name: "paymasterContext", type: "bytes" },
            ],
            name: "returnInfo",
            type: "tuple",
          },
          {
            components: [
              { name: "stake", type: "uint256" },
              { name: "unstakeDelaySec", type: "uint256" },
            ],
            name: "senderInfo",
            type: "tuple",
          },
          {
            components: [
              { name: "stake", type: "uint256" },
              { name: "unstakeDelaySec", type: "uint256" },
            ],
            name: "factoryInfo",
            type: "tuple",
          },
          {
            components: [
              { name: "stake", type: "uint256" },
              { name: "unstakeDelaySec", type: "uint256" },
            ],
            name: "paymasterInfo",
            type: "tuple",
          },
          {
            components: [
              { name: "aggregator", type: "address" },
              {
                components: [
                  { name: "stake", type: "uint256" },
                  { name: "unstakeDelaySec", type: "uint256" },
                ],
                name: "stakeInfo",
                type: "tuple",
              },
            ],
            name: "aggregatorInfo",
            type: "tuple",
          },
        ],
        name: "ValidationResultWithAggregation",
        type: "error",
      },
      {
        anonymous: !1,
        inputs: [
          { indexed: !0, name: "userOpHash", type: "bytes32" },
          { indexed: !0, name: "sender", type: "address" },
          { indexed: !1, name: "factory", type: "address" },
          { indexed: !1, name: "paymaster", type: "address" },
        ],
        name: "AccountDeployed",
        type: "event",
      },
      { anonymous: !1, inputs: [], name: "BeforeExecution", type: "event" },
      {
        anonymous: !1,
        inputs: [
          { indexed: !0, name: "account", type: "address" },
          { indexed: !1, name: "totalDeposit", type: "uint256" },
        ],
        name: "Deposited",
        type: "event",
      },
      {
        anonymous: !1,
        inputs: [{ indexed: !0, name: "aggregator", type: "address" }],
        name: "SignatureAggregatorChanged",
        type: "event",
      },
      {
        anonymous: !1,
        inputs: [
          { indexed: !0, name: "account", type: "address" },
          { indexed: !1, name: "totalStaked", type: "uint256" },
          { indexed: !1, name: "unstakeDelaySec", type: "uint256" },
        ],
        name: "StakeLocked",
        type: "event",
      },
      {
        anonymous: !1,
        inputs: [
          { indexed: !0, name: "account", type: "address" },
          { indexed: !1, name: "withdrawTime", type: "uint256" },
        ],
        name: "StakeUnlocked",
        type: "event",
      },
      {
        anonymous: !1,
        inputs: [
          { indexed: !0, name: "account", type: "address" },
          { indexed: !1, name: "withdrawAddress", type: "address" },
          { indexed: !1, name: "amount", type: "uint256" },
        ],
        name: "StakeWithdrawn",
        type: "event",
      },
      {
        anonymous: !1,
        inputs: [
          { indexed: !0, name: "userOpHash", type: "bytes32" },
          { indexed: !0, name: "sender", type: "address" },
          { indexed: !0, name: "paymaster", type: "address" },
          { indexed: !1, name: "nonce", type: "uint256" },
          { indexed: !1, name: "success", type: "bool" },
          { indexed: !1, name: "actualGasCost", type: "uint256" },
          { indexed: !1, name: "actualGasUsed", type: "uint256" },
        ],
        name: "UserOperationEvent",
        type: "event",
      },
      {
        anonymous: !1,
        inputs: [
          { indexed: !0, name: "userOpHash", type: "bytes32" },
          { indexed: !0, name: "sender", type: "address" },
          { indexed: !1, name: "nonce", type: "uint256" },
          { indexed: !1, name: "revertReason", type: "bytes" },
        ],
        name: "UserOperationRevertReason",
        type: "event",
      },
      {
        anonymous: !1,
        inputs: [
          { indexed: !0, name: "account", type: "address" },
          { indexed: !1, name: "withdrawAddress", type: "address" },
          { indexed: !1, name: "amount", type: "uint256" },
        ],
        name: "Withdrawn",
        type: "event",
      },
      {
        inputs: [],
        name: "SIG_VALIDATION_FAILED",
        outputs: [{ name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          { name: "initCode", type: "bytes" },
          { name: "sender", type: "address" },
          { name: "paymasterAndData", type: "bytes" },
        ],
        name: "_validateSenderAndPaymaster",
        outputs: [],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [{ name: "unstakeDelaySec", type: "uint32" }],
        name: "addStake",
        outputs: [],
        stateMutability: "payable",
        type: "function",
      },
      {
        inputs: [{ name: "account", type: "address" }],
        name: "balanceOf",
        outputs: [{ name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [{ name: "account", type: "address" }],
        name: "depositTo",
        outputs: [],
        stateMutability: "payable",
        type: "function",
      },
      {
        inputs: [{ name: "", type: "address" }],
        name: "deposits",
        outputs: [
          { name: "deposit", type: "uint112" },
          { name: "staked", type: "bool" },
          { name: "stake", type: "uint112" },
          { name: "unstakeDelaySec", type: "uint32" },
          { name: "withdrawTime", type: "uint48" },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [{ name: "account", type: "address" }],
        name: "getDepositInfo",
        outputs: [
          {
            components: [
              { name: "deposit", type: "uint112" },
              { name: "staked", type: "bool" },
              { name: "stake", type: "uint112" },
              { name: "unstakeDelaySec", type: "uint32" },
              { name: "withdrawTime", type: "uint48" },
            ],
            name: "info",
            type: "tuple",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          { name: "sender", type: "address" },
          { name: "key", type: "uint192" },
        ],
        name: "getNonce",
        outputs: [{ name: "nonce", type: "uint256" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [{ name: "initCode", type: "bytes" }],
        name: "getSenderAddress",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            components: [
              { name: "sender", type: "address" },
              { name: "nonce", type: "uint256" },
              { name: "initCode", type: "bytes" },
              { name: "callData", type: "bytes" },
              { name: "callGasLimit", type: "uint256" },
              { name: "verificationGasLimit", type: "uint256" },
              { name: "preVerificationGas", type: "uint256" },
              { name: "maxFeePerGas", type: "uint256" },
              { name: "maxPriorityFeePerGas", type: "uint256" },
              { name: "paymasterAndData", type: "bytes" },
              { name: "signature", type: "bytes" },
            ],
            name: "userOp",
            type: "tuple",
          },
        ],
        name: "getUserOpHash",
        outputs: [{ name: "", type: "bytes32" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            components: [
              {
                components: [
                  { name: "sender", type: "address" },
                  { name: "nonce", type: "uint256" },
                  { name: "initCode", type: "bytes" },
                  { name: "callData", type: "bytes" },
                  { name: "callGasLimit", type: "uint256" },
                  { name: "verificationGasLimit", type: "uint256" },
                  { name: "preVerificationGas", type: "uint256" },
                  { name: "maxFeePerGas", type: "uint256" },
                  { name: "maxPriorityFeePerGas", type: "uint256" },
                  { name: "paymasterAndData", type: "bytes" },
                  { name: "signature", type: "bytes" },
                ],
                name: "userOps",
                type: "tuple[]",
              },
              { name: "aggregator", type: "address" },
              { name: "signature", type: "bytes" },
            ],
            name: "opsPerAggregator",
            type: "tuple[]",
          },
          { name: "beneficiary", type: "address" },
        ],
        name: "handleAggregatedOps",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            components: [
              { name: "sender", type: "address" },
              { name: "nonce", type: "uint256" },
              { name: "initCode", type: "bytes" },
              { name: "callData", type: "bytes" },
              { name: "callGasLimit", type: "uint256" },
              { name: "verificationGasLimit", type: "uint256" },
              { name: "preVerificationGas", type: "uint256" },
              { name: "maxFeePerGas", type: "uint256" },
              { name: "maxPriorityFeePerGas", type: "uint256" },
              { name: "paymasterAndData", type: "bytes" },
              { name: "signature", type: "bytes" },
            ],
            name: "ops",
            type: "tuple[]",
          },
          { name: "beneficiary", type: "address" },
        ],
        name: "handleOps",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [{ name: "key", type: "uint192" }],
        name: "incrementNonce",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          { name: "callData", type: "bytes" },
          {
            components: [
              {
                components: [
                  { name: "sender", type: "address" },
                  { name: "nonce", type: "uint256" },
                  { name: "callGasLimit", type: "uint256" },
                  { name: "verificationGasLimit", type: "uint256" },
                  { name: "preVerificationGas", type: "uint256" },
                  { name: "paymaster", type: "address" },
                  { name: "maxFeePerGas", type: "uint256" },
                  { name: "maxPriorityFeePerGas", type: "uint256" },
                ],
                name: "mUserOp",
                type: "tuple",
              },
              { name: "userOpHash", type: "bytes32" },
              { name: "prefund", type: "uint256" },
              { name: "contextOffset", type: "uint256" },
              { name: "preOpGas", type: "uint256" },
            ],
            name: "opInfo",
            type: "tuple",
          },
          { name: "context", type: "bytes" },
        ],
        name: "innerHandleOp",
        outputs: [{ name: "actualGasCost", type: "uint256" }],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          { name: "", type: "address" },
          { name: "", type: "uint192" },
        ],
        name: "nonceSequenceNumber",
        outputs: [{ name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            components: [
              { name: "sender", type: "address" },
              { name: "nonce", type: "uint256" },
              { name: "initCode", type: "bytes" },
              { name: "callData", type: "bytes" },
              { name: "callGasLimit", type: "uint256" },
              { name: "verificationGasLimit", type: "uint256" },
              { name: "preVerificationGas", type: "uint256" },
              { name: "maxFeePerGas", type: "uint256" },
              { name: "maxPriorityFeePerGas", type: "uint256" },
              { name: "paymasterAndData", type: "bytes" },
              { name: "signature", type: "bytes" },
            ],
            name: "op",
            type: "tuple",
          },
          { name: "target", type: "address" },
          { name: "targetCallData", type: "bytes" },
        ],
        name: "simulateHandleOp",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            components: [
              { name: "sender", type: "address" },
              { name: "nonce", type: "uint256" },
              { name: "initCode", type: "bytes" },
              { name: "callData", type: "bytes" },
              { name: "callGasLimit", type: "uint256" },
              { name: "verificationGasLimit", type: "uint256" },
              { name: "preVerificationGas", type: "uint256" },
              { name: "maxFeePerGas", type: "uint256" },
              { name: "maxPriorityFeePerGas", type: "uint256" },
              { name: "paymasterAndData", type: "bytes" },
              { name: "signature", type: "bytes" },
            ],
            name: "userOp",
            type: "tuple",
          },
        ],
        name: "simulateValidation",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [],
        name: "unlockStake",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [{ name: "withdrawAddress", type: "address" }],
        name: "withdrawStake",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          { name: "withdrawAddress", type: "address" },
          { name: "withdrawAmount", type: "uint256" },
        ],
        name: "withdrawTo",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      { stateMutability: "payable", type: "receive" },
    ];
    var ne = e.i(195746);
    function nt(e) {
      let { authorization: t, factory: a, factoryData: n } = e;
      if (
        "0x7702" === a ||
        "0x7702000000000000000000000000000000000000" === a
      ) {
        if (!t) return "0x7702000000000000000000000000000000000000";
        let e = t.address;
        return (0, a2.concat)([e, n ?? "0x"]);
      }
      return a ? (0, a2.concat)([a, n ?? "0x"]) : "0x";
    }
    function na(e) {
      let {
          callGasLimit: t,
          callData: a,
          maxPriorityFeePerGas: n,
          maxFeePerGas: i,
          paymaster: r,
          paymasterData: s,
          paymasterPostOpGasLimit: o,
          paymasterVerificationGasLimit: d,
          sender: c,
          signature: u = "0x",
          verificationGasLimit: p,
        } = e,
        y = (0, a2.concat)([
          (0, a6.pad)((0, a5.numberToHex)(p || 0n), { size: 16 }),
          (0, a6.pad)((0, a5.numberToHex)(t || 0n), { size: 16 }),
        ]),
        l = nt(e),
        m = (0, a2.concat)([
          (0, a6.pad)((0, a5.numberToHex)(n || 0n), { size: 16 }),
          (0, a6.pad)((0, a5.numberToHex)(i || 0n), { size: 16 }),
        ]),
        f = e.nonce ?? 0n;
      return {
        accountGasLimits: y,
        callData: a,
        initCode: l,
        gasFees: m,
        nonce: f,
        paymasterAndData: r
          ? (0, a2.concat)([
              r,
              (0, a6.pad)((0, a5.numberToHex)(d || 0n), { size: 16 }),
              (0, a6.pad)((0, a5.numberToHex)(o || 0n), { size: 16 }),
              s || "0x",
            ])
          : "0x",
        preVerificationGas: e.preVerificationGas ?? 0n,
        sender: c,
        signature: u,
      };
    }
    let nn = {
      PackedUserOperation: [
        { type: "address", name: "sender" },
        { type: "uint256", name: "nonce" },
        { type: "bytes", name: "initCode" },
        { type: "bytes", name: "callData" },
        { type: "bytes32", name: "accountGasLimits" },
        { type: "uint256", name: "preVerificationGas" },
        { type: "bytes32", name: "gasFees" },
        { type: "bytes", name: "paymasterAndData" },
      ],
    };
    var ni = e.i(963657),
      nr = e.i(291851),
      ns = e.i(846577),
      no = (e.i(446784), e.i(798315)),
      nd = e.i(657430);
    function nc(e) {
      let { address: t, data: a, signature: n, to: i = "hex" } = e,
        r = (0, a2.concatHex)([
          (0, aJ.encodeAbiParameters)(
            [{ type: "address" }, { type: "bytes" }, { type: "bytes" }],
            [t, a, n]
          ),
          "0x6492649264926492649264926492649264926492649264926492649264926492",
        ]);
      return "hex" === i ? r : (0, nd.hexToBytes)(r);
    }
    async function nu(e) {
      let {
          extend: t,
          nonceKeyManager: a = (function (e) {
            let { source: t } = e,
              a = new Map(),
              n = new no.LruMap(8192),
              i = new Map(),
              r = ({ address: e, chainId: t }) => `${e}.${t}`;
            return {
              async consume({ address: e, chainId: a, client: i }) {
                let s = r({ address: e, chainId: a }),
                  o = this.get({ address: e, chainId: a, client: i });
                this.increment({ address: e, chainId: a });
                let d = await o;
                return (
                  await t.set({ address: e, chainId: a }, d), n.set(s, d), d
                );
              },
              async increment({ address: e, chainId: t }) {
                let n = r({ address: e, chainId: t }),
                  i = a.get(n) ?? 0;
                a.set(n, i + 1);
              },
              async get({ address: e, chainId: s, client: o }) {
                let d = r({ address: e, chainId: s }),
                  c = i.get(d);
                return (
                  c ||
                    ((c = (async () => {
                      try {
                        let a = await t.get({
                            address: e,
                            chainId: s,
                            client: o,
                          }),
                          i = n.get(d) ?? 0;
                        if (i > 0 && a <= i) return i + 1;
                        return n.delete(d), a;
                      } finally {
                        this.reset({ address: e, chainId: s });
                      }
                    })()),
                    i.set(d, c)),
                  (a.get(d) ?? 0) + (await c)
                );
              },
              reset({ address: e, chainId: t }) {
                let n = r({ address: e, chainId: t });
                a.delete(n), i.delete(n);
              },
            };
          })({ source: { get: () => Date.now(), set() {} } }),
          ...n
        } = e,
        i = !1,
        r = await e.getAddress();
      return {
        ...t,
        ...n,
        address: r,
        async getFactoryArgs() {
          return "isDeployed" in this && (await this.isDeployed())
            ? { factory: void 0, factoryData: void 0 }
            : e.getFactoryArgs();
        },
        async getNonce(t) {
          let n =
            t?.key ??
            BigInt(
              await a.consume({
                address: r,
                chainId: e.client.chain.id,
                client: e.client,
              })
            );
          return e.getNonce
            ? await e.getNonce({ ...t, key: n })
            : await (0, a$.readContract)(e.client, {
                abi: (0, ni.parseAbi)([
                  "function getNonce(address, uint192) pure returns (uint256)",
                ]),
                address: e.entryPoint.address,
                functionName: "getNonce",
                args: [r, n],
              });
        },
        isDeployed: async () =>
          !!i ||
          (i = !!(await (0, ns.getAction)(
            e.client,
            nr.getCode,
            "getCode"
          )({ address: r }))),
        ...(e.sign
          ? {
              async sign(t) {
                let [{ factory: a, factoryData: n }, i] = await Promise.all([
                  this.getFactoryArgs(),
                  e.sign(t),
                ]);
                return a && n ? nc({ address: a, data: n, signature: i }) : i;
              },
            }
          : {}),
        async signMessage(t) {
          let [{ factory: a, factoryData: n }, i] = await Promise.all([
            this.getFactoryArgs(),
            e.signMessage(t),
          ]);
          return a && n && "0x7702" !== a
            ? nc({ address: a, data: n, signature: i })
            : i;
        },
        async signTypedData(t) {
          let [{ factory: a, factoryData: n }, i] = await Promise.all([
            this.getFactoryArgs(),
            e.signTypedData(t),
          ]);
          return a && n && "0x7702" !== a
            ? nc({ address: a, data: n, signature: i })
            : i;
        },
        type: "smart",
      };
    }
    let np = {
      1.1: "0xba5ed110efdba3d005bfc882d75358acbbb85842",
      1: "0x0ba5ed0c6aa8c49038f819e587e2633c4a9f428a",
    };
    async function ny(e) {
      let t,
        {
          client: a,
          ownerIndex: n = 0,
          owners: i,
          nonce: r = 0n,
          version: s = "1",
        } = e,
        o = e.address,
        d = { abi: a8, address: aq.entryPoint06Address, version: "0.6" },
        c = { abi: nh, address: np[s] },
        u = i.map((e) => {
          if ("string" == typeof e) return (0, a6.pad)(e);
          if ("webAuthn" === e.type) return e.publicKey;
          if ("local" === e.type) return (0, a6.pad)(e.address);
          throw new aY.BaseError("invalid owner type");
        }),
        p =
          "string" == typeof (t = i[n] ?? i[0])
            ? { address: t, type: "address" }
            : t;
      return nu({
        client: a,
        entryPoint: d,
        extend: { abi: nb, factory: c },
        async decodeCalls(e) {
          let t = (0, aK.decodeFunctionData)({ abi: nb, data: e });
          if ("execute" === t.functionName)
            return [{ to: t.args[0], value: t.args[1], data: t.args[2] }];
          if ("executeBatch" === t.functionName)
            return t.args[0].map((e) => ({
              to: e.target,
              value: e.value,
              data: e.data,
            }));
          throw new aY.BaseError(
            `unable to decode calls for "${t.functionName}"`
          );
        },
        encodeCalls: async (e) =>
          1 === e.length
            ? (0, aX.encodeFunctionData)({
                abi: nb,
                functionName: "execute",
                args: [e[0].to, e[0].value ?? 0n, e[0].data ?? "0x"],
              })
            : (0, aX.encodeFunctionData)({
                abi: nb,
                functionName: "executeBatch",
                args: [
                  e.map((e) => ({
                    data: e.data ?? "0x",
                    target: e.to,
                    value: e.value ?? 0n,
                  })),
                ],
              }),
        getAddress: async () =>
          (o ??= await (0, a$.readContract)(a, {
            ...c,
            functionName: "getAddress",
            args: [u, r],
          })),
        async getFactoryArgs() {
          let e = (0, aX.encodeFunctionData)({
            abi: c.abi,
            functionName: "createAccount",
            args: [u, r],
          });
          return { factory: c.address, factoryData: e };
        },
        getStubSignature: async () =>
          "webAuthn" === p.type
            ? "0x0000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000c0000000000000000000000000000000000000000000000000000000000000012000000000000000000000000000000000000000000000000000000000000000170000000000000000000000000000000000000000000000000000000000000001949fc7c88032b9fcb5f6efc7a7b8c63668eae9871b765e23123bb473ff57aa831a7c0d9276168ebcc29f2875a0239cffdf2a9cd1c2007c5c77c071db9264df1d000000000000000000000000000000000000000000000000000000000000002549960de5880e8c687434170f6476605b8fe4aeb9a28632c7995cf3ba831d97630500000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008a7b2274797065223a22776562617574686e2e676574222c226368616c6c656e6765223a2273496a396e6164474850596759334b7156384f7a4a666c726275504b474f716d59576f4d57516869467773222c226f726967696e223a2268747470733a2f2f7369676e2e636f696e626173652e636f6d222c2263726f73734f726967696e223a66616c73657d00000000000000000000000000000000000000000000"
            : ng({
                ownerIndex: n,
                signature:
                  "0xfffffffffffffffffffffffffffffff0000000000000000000000000000000007aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa1c",
              }),
        async sign(e) {
          let t = nf({
            address: await this.getAddress(),
            chainId: a.chain.id,
            hash: e.hash,
          });
          if ("address" === p.type) throw Error("owner cannot sign");
          return ng({
            ownerIndex: n,
            signature: await nl({ owner: p, typedData: t }),
          });
        },
        async signMessage(e) {
          let { message: t } = e,
            i = nf({
              address: await this.getAddress(),
              chainId: a.chain.id,
              hash: (0, a4.hashMessage)(t),
            });
          if ("address" === p.type) throw Error("owner cannot sign");
          return ng({
            ownerIndex: n,
            signature: await nl({ owner: p, typedData: i }),
          });
        },
        async signTypedData(e) {
          let { domain: t, types: i, primaryType: r, message: s } = e,
            o = nf({
              address: await this.getAddress(),
              chainId: a.chain.id,
              hash: (0, a7.hashTypedData)({
                domain: t,
                message: s,
                primaryType: r,
                types: i,
              }),
            });
          if ("address" === p.type) throw Error("owner cannot sign");
          return ng({
            ownerIndex: n,
            signature: await nl({ owner: p, typedData: o }),
          });
        },
        async signUserOperation(e) {
          let { chainId: t = a.chain.id, ...i } = e,
            r = await this.getAddress(),
            s = (function (e) {
              let {
                  chainId: t,
                  entryPointAddress: a,
                  entryPointVersion: n,
                } = e,
                i = e.userOperation,
                {
                  authorization: r,
                  callData: s = "0x",
                  callGasLimit: o,
                  maxFeePerGas: d,
                  maxPriorityFeePerGas: c,
                  nonce: u,
                  paymasterAndData: p = "0x",
                  preVerificationGas: y,
                  sender: l,
                  verificationGasLimit: m,
                } = i;
              if ("0.8" === n)
                return (0, a7.hashTypedData)(
                  (function (e) {
                    let {
                      chainId: t,
                      entryPointAddress: a,
                      userOperation: n,
                    } = e;
                    return {
                      types: nn,
                      primaryType: "PackedUserOperation",
                      domain: {
                        name: "ERC4337",
                        version: "1",
                        chainId: t,
                        verifyingContract: a,
                      },
                      message: na(n),
                    };
                  })({ chainId: t, entryPointAddress: a, userOperation: i })
                );
              let f = (() => {
                if ("0.6" === n) {
                  let e = nt({
                    authorization: r,
                    factory: i.initCode?.slice(0, 42),
                    factoryData: i.initCode?.slice(42),
                  });
                  return (0, aJ.encodeAbiParameters)(
                    [
                      { type: "address" },
                      { type: "uint256" },
                      { type: "bytes32" },
                      { type: "bytes32" },
                      { type: "uint256" },
                      { type: "uint256" },
                      { type: "uint256" },
                      { type: "uint256" },
                      { type: "uint256" },
                      { type: "bytes32" },
                    ],
                    [
                      l,
                      u,
                      (0, ne.keccak256)(e),
                      (0, ne.keccak256)(s),
                      o,
                      m,
                      y,
                      d,
                      c,
                      (0, ne.keccak256)(p),
                    ]
                  );
                }
                if ("0.7" === n) {
                  let e = na(i);
                  return (0, aJ.encodeAbiParameters)(
                    [
                      { type: "address" },
                      { type: "uint256" },
                      { type: "bytes32" },
                      { type: "bytes32" },
                      { type: "bytes32" },
                      { type: "uint256" },
                      { type: "bytes32" },
                      { type: "bytes32" },
                    ],
                    [
                      e.sender,
                      e.nonce,
                      (0, ne.keccak256)(e.initCode),
                      (0, ne.keccak256)(e.callData),
                      e.accountGasLimits,
                      e.preVerificationGas,
                      e.gasFees,
                      (0, ne.keccak256)(e.paymasterAndData),
                    ]
                  );
                }
                throw Error(`entryPointVersion "${n}" not supported.`);
              })();
              return (0, ne.keccak256)(
                (0, aJ.encodeAbiParameters)(
                  [
                    { type: "bytes32" },
                    { type: "address" },
                    { type: "uint256" },
                  ],
                  [(0, ne.keccak256)(f), a, BigInt(t)]
                )
              );
            })({
              chainId: t,
              entryPointAddress: d.address,
              entryPointVersion: d.version,
              userOperation: { ...i, sender: r },
            });
          if ("address" === p.type) throw Error("owner cannot sign");
          return ng({
            ownerIndex: n,
            signature: await nm({ hash: s, owner: p }),
          });
        },
        userOperation: {
          async estimateGas(e) {
            if ("webAuthn" === p.type)
              return {
                verificationGasLimit: BigInt(
                  Math.max(Number(e.verificationGasLimit ?? 0n), 8e5)
                ),
              };
          },
        },
      });
    }
    async function nl({ typedData: e, owner: t }) {
      return "local" === t.type && t.signTypedData
        ? t.signTypedData(e)
        : nm({ hash: (0, a7.hashTypedData)(e), owner: t });
    }
    async function nm({ hash: e, owner: t }) {
      if ("webAuthn" === t.type) {
        let { signature: a, webauthn: n } = await t.sign({ hash: e });
        return (function ({ webauthn: e, signature: t }) {
          let { r: a, s: n } = aj.fromHex(t);
          return (0, aJ.encodeAbiParameters)(
            [
              {
                components: [
                  { name: "authenticatorData", type: "bytes" },
                  { name: "clientDataJSON", type: "bytes" },
                  { name: "challengeIndex", type: "uint256" },
                  { name: "typeIndex", type: "uint256" },
                  { name: "r", type: "uint256" },
                  { name: "s", type: "uint256" },
                ],
                type: "tuple",
              },
            ],
            [
              {
                authenticatorData: e.authenticatorData,
                clientDataJSON: (0, a5.stringToHex)(e.clientDataJSON),
                challengeIndex: BigInt(e.challengeIndex),
                typeIndex: BigInt(e.typeIndex),
                r: a,
                s: n,
              },
            ]
          );
        })({ signature: a, webauthn: n });
      }
      if (t.sign) return t.sign({ hash: e });
      throw new aY.BaseError("`owner` does not support raw sign.");
    }
    function nf({ address: e, chainId: t, hash: a }) {
      return {
        domain: {
          chainId: t,
          name: "Coinbase Smart Wallet",
          verifyingContract: e,
          version: "1",
        },
        types: {
          CoinbaseSmartWalletMessage: [{ name: "hash", type: "bytes32" }],
        },
        primaryType: "CoinbaseSmartWalletMessage",
        message: { hash: a },
      };
    }
    function ng(e) {
      let { ownerIndex: t = 0 } = e,
        a = (() => {
          if (65 !== (0, a3.size)(e.signature)) return e.signature;
          let t = (0, a9.parseSignature)(e.signature);
          return (function (e, t) {
            if (e.length !== t.length)
              throw new aQ.AbiEncodingLengthMismatchError({
                expectedLength: e.length,
                givenLength: t.length,
              });
            let a = [];
            for (let n = 0; n < e.length; n++) {
              let i = e[n],
                r = t[n];
              a.push(
                (function e(t, a, n = !1) {
                  if ("address" === t) {
                    if (!(0, a0.isAddress)(a))
                      throw new aZ.InvalidAddressError({ address: a });
                    return (0, a6.pad)(a.toLowerCase(), {
                      size: n ? 32 : null,
                    });
                  }
                  if ("string" === t) return (0, a5.stringToHex)(a);
                  if ("bytes" === t) return a;
                  if ("bool" === t)
                    return (0, a6.pad)((0, a5.boolToHex)(a), {
                      size: n ? 32 : 1,
                    });
                  let i = t.match(a1.integerRegex);
                  if (i) {
                    let [e, t, r = "256"] = i,
                      s = Number.parseInt(r, 10) / 8;
                    return (0, a5.numberToHex)(a, {
                      size: n ? 32 : s,
                      signed: "int" === t,
                    });
                  }
                  let r = t.match(a1.bytesRegex);
                  if (r) {
                    let [e, t] = r;
                    if (Number.parseInt(t, 10) !== (a.length - 2) / 2)
                      throw new aQ.BytesSizeMismatchError({
                        expectedSize: Number.parseInt(t, 10),
                        givenSize: (a.length - 2) / 2,
                      });
                    return (0, a6.pad)(a, {
                      dir: "right",
                      size: n ? 32 : null,
                    });
                  }
                  let s = t.match(a1.arrayRegex);
                  if (s && Array.isArray(a)) {
                    let [t, n] = s,
                      i = [];
                    for (let t = 0; t < a.length; t++) i.push(e(n, a[t], !0));
                    return 0 === i.length ? "0x" : (0, a2.concatHex)(i);
                  }
                  throw new aQ.UnsupportedPackedAbiType(t);
                })(i, r)
              );
            }
            return (0, a2.concatHex)(a);
          })(
            ["bytes32", "bytes32", "uint8"],
            [t.r, t.s, 0 === t.yParity ? 27 : 28]
          );
        })();
      return (0, aJ.encodeAbiParameters)(
        [
          {
            components: [
              { name: "ownerIndex", type: "uint8" },
              { name: "signatureData", type: "bytes" },
            ],
            type: "tuple",
          },
        ],
        [{ ownerIndex: t, signatureData: a }]
      );
    }
    let nb = [
        { inputs: [], stateMutability: "nonpayable", type: "constructor" },
        {
          inputs: [{ name: "owner", type: "bytes" }],
          name: "AlreadyOwner",
          type: "error",
        },
        { inputs: [], name: "Initialized", type: "error" },
        {
          inputs: [{ name: "owner", type: "bytes" }],
          name: "InvalidEthereumAddressOwner",
          type: "error",
        },
        {
          inputs: [{ name: "key", type: "uint256" }],
          name: "InvalidNonceKey",
          type: "error",
        },
        {
          inputs: [{ name: "owner", type: "bytes" }],
          name: "InvalidOwnerBytesLength",
          type: "error",
        },
        { inputs: [], name: "LastOwner", type: "error" },
        {
          inputs: [{ name: "index", type: "uint256" }],
          name: "NoOwnerAtIndex",
          type: "error",
        },
        {
          inputs: [{ name: "ownersRemaining", type: "uint256" }],
          name: "NotLastOwner",
          type: "error",
        },
        {
          inputs: [{ name: "selector", type: "bytes4" }],
          name: "SelectorNotAllowed",
          type: "error",
        },
        { inputs: [], name: "Unauthorized", type: "error" },
        { inputs: [], name: "UnauthorizedCallContext", type: "error" },
        { inputs: [], name: "UpgradeFailed", type: "error" },
        {
          inputs: [
            { name: "index", type: "uint256" },
            { name: "expectedOwner", type: "bytes" },
            { name: "actualOwner", type: "bytes" },
          ],
          name: "WrongOwnerAtIndex",
          type: "error",
        },
        {
          anonymous: !1,
          inputs: [
            { indexed: !0, name: "index", type: "uint256" },
            { indexed: !1, name: "owner", type: "bytes" },
          ],
          name: "AddOwner",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            { indexed: !0, name: "index", type: "uint256" },
            { indexed: !1, name: "owner", type: "bytes" },
          ],
          name: "RemoveOwner",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [{ indexed: !0, name: "implementation", type: "address" }],
          name: "Upgraded",
          type: "event",
        },
        { stateMutability: "payable", type: "fallback" },
        {
          inputs: [],
          name: "REPLAYABLE_NONCE_KEY",
          outputs: [{ name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [{ name: "owner", type: "address" }],
          name: "addOwnerAddress",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { name: "x", type: "bytes32" },
            { name: "y", type: "bytes32" },
          ],
          name: "addOwnerPublicKey",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [{ name: "functionSelector", type: "bytes4" }],
          name: "canSkipChainIdValidation",
          outputs: [{ name: "", type: "bool" }],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [],
          name: "domainSeparator",
          outputs: [{ name: "", type: "bytes32" }],
          stateMutability: "view",
          type: "function",
        },
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
        {
          inputs: [],
          name: "entryPoint",
          outputs: [{ name: "", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { name: "target", type: "address" },
            { name: "value", type: "uint256" },
            { name: "data", type: "bytes" },
          ],
          name: "execute",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [
            {
              components: [
                { name: "target", type: "address" },
                { name: "value", type: "uint256" },
                { name: "data", type: "bytes" },
              ],
              name: "calls",
              type: "tuple[]",
            },
          ],
          name: "executeBatch",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [{ name: "calls", type: "bytes[]" }],
          name: "executeWithoutChainIdValidation",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [
            {
              components: [
                { name: "sender", type: "address" },
                { name: "nonce", type: "uint256" },
                { name: "initCode", type: "bytes" },
                { name: "callData", type: "bytes" },
                { name: "callGasLimit", type: "uint256" },
                { name: "verificationGasLimit", type: "uint256" },
                { name: "preVerificationGas", type: "uint256" },
                { name: "maxFeePerGas", type: "uint256" },
                { name: "maxPriorityFeePerGas", type: "uint256" },
                { name: "paymasterAndData", type: "bytes" },
                { name: "signature", type: "bytes" },
              ],
              name: "userOp",
              type: "tuple",
            },
          ],
          name: "getUserOpHashWithoutChainId",
          outputs: [{ name: "", type: "bytes32" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "implementation",
          outputs: [{ name: "$", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [{ name: "owners", type: "bytes[]" }],
          name: "initialize",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [{ name: "account", type: "address" }],
          name: "isOwnerAddress",
          outputs: [{ name: "", type: "bool" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [{ name: "account", type: "bytes" }],
          name: "isOwnerBytes",
          outputs: [{ name: "", type: "bool" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { name: "x", type: "bytes32" },
            { name: "y", type: "bytes32" },
          ],
          name: "isOwnerPublicKey",
          outputs: [{ name: "", type: "bool" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { name: "hash", type: "bytes32" },
            { name: "signature", type: "bytes" },
          ],
          name: "isValidSignature",
          outputs: [{ name: "result", type: "bytes4" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "nextOwnerIndex",
          outputs: [{ name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [{ name: "index", type: "uint256" }],
          name: "ownerAtIndex",
          outputs: [{ name: "", type: "bytes" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "ownerCount",
          outputs: [{ name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "proxiableUUID",
          outputs: [{ name: "", type: "bytes32" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { name: "index", type: "uint256" },
            { name: "owner", type: "bytes" },
          ],
          name: "removeLastOwner",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { name: "index", type: "uint256" },
            { name: "owner", type: "bytes" },
          ],
          name: "removeOwnerAtIndex",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "removedOwnersCount",
          outputs: [{ name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [{ name: "hash", type: "bytes32" }],
          name: "replaySafeHash",
          outputs: [{ name: "", type: "bytes32" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { name: "newImplementation", type: "address" },
            { name: "data", type: "bytes" },
          ],
          name: "upgradeToAndCall",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [
            {
              components: [
                { name: "sender", type: "address" },
                { name: "nonce", type: "uint256" },
                { name: "initCode", type: "bytes" },
                { name: "callData", type: "bytes" },
                { name: "callGasLimit", type: "uint256" },
                { name: "verificationGasLimit", type: "uint256" },
                { name: "preVerificationGas", type: "uint256" },
                { name: "maxFeePerGas", type: "uint256" },
                { name: "maxPriorityFeePerGas", type: "uint256" },
                { name: "paymasterAndData", type: "bytes" },
                { name: "signature", type: "bytes" },
              ],
              name: "userOp",
              type: "tuple",
            },
            { name: "userOpHash", type: "bytes32" },
            { name: "missingAccountFunds", type: "uint256" },
          ],
          name: "validateUserOp",
          outputs: [{ name: "validationData", type: "uint256" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        { stateMutability: "payable", type: "receive" },
      ],
      nh = [
        {
          inputs: [{ name: "implementation_", type: "address" }],
          stateMutability: "payable",
          type: "constructor",
        },
        { inputs: [], name: "OwnerRequired", type: "error" },
        {
          inputs: [
            { name: "owners", type: "bytes[]" },
            { name: "nonce", type: "uint256" },
          ],
          name: "createAccount",
          outputs: [{ name: "account", type: "address" }],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [
            { name: "owners", type: "bytes[]" },
            { name: "nonce", type: "uint256" },
          ],
          name: "getAddress",
          outputs: [{ name: "", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "implementation",
          outputs: [{ name: "", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "initCodeHash",
          outputs: [{ name: "", type: "bytes32" }],
          stateMutability: "view",
          type: "function",
        },
      ],
      nw = {
        address: "0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789",
        version: "0.6",
      },
      nx = {
        address: "0x0000000071727De22E5E9d8BAf0edAc6f37da032",
        version: "0.7",
      },
      nA = ({
        calls: e,
        chain: t,
        maxPriorityFeePerGas: a,
        maxFeePerGas: n,
        nonce: i,
      }) =>
        e.map((e) => ({
          to: e.to || void 0,
          data: e.data,
          value: e.value,
          chainId: t.id,
          nonce: i,
          maxFeePerGas: n,
          maxPriorityFeePerGas: a,
        })),
      nv = async ({
        chain: e,
        paymasterContext: t,
        account: a,
        signer: n,
        user: i,
        smartWalletsConfig: r,
        rpcConfig: s,
        privyAppId: c,
      }) => {
        if (!(r?.enabled && i && a && n)) return;
        let y = r?.configuredNetworks.find(
          (t) => t.chainId === `eip155:${e.id}`
        );
        if (!y)
          throw new d.P(
            `The chain ${e.name} (eip155:${e.id}) must be configured in the smart wallet configuration in your dashboard`
          );
        let m = i.smartWallet
            ? i.smartWallet.smartWalletType
            : r.smartWalletType,
          f = i.smartWallet
            ? i.smartWallet.smartWalletVersion
            : r.smartWalletVersion,
          g = (0, o.H)(e, s, c),
          b = (0, p.createPublicClient)({
            chain: e,
            transport: (0, u.http)(g),
          }),
          h = t ?? y.paymasterContext,
          w = await (async ({
            owner: e,
            smartWalletType: t,
            smartWalletVersion: a,
            chain: n,
            publicClient: i,
            bundlerUrl: r,
            paymasterUrl: s,
            paymasterContext: o,
          }) => {
            let d = await (({
                owner: e,
                smartWalletType: t,
                smartWalletVersion: a,
                publicClient: n,
              }) => {
                switch (t) {
                  case "safe":
                    return aB({
                      client: n,
                      entryPoint: nx,
                      owners: [e],
                      version: "1.4.1",
                    });
                  case "kernel":
                    return ai({
                      client: n,
                      version: "0.3.1",
                      entryPoint: nx,
                      useMetaFactory: "optional",
                      owners: [e],
                    });
                  case "biconomy":
                    return tW({ client: n, owners: [e], entryPoint: nw });
                  case "light_account":
                    return tO({
                      client: n,
                      entryPoint: nw,
                      owner: e,
                      version: "1.1.0",
                    });
                  case "coinbase_smart_wallet":
                    return (async function ({
                      client: e,
                      owner: t,
                      version: a,
                    }) {
                      let [n] = await t.request({ method: "eth_accounts" });
                      if (!n)
                        throw Error(
                          "Unable to request embedded owner for eth_accounts"
                        );
                      return await ny({
                        client: e,
                        owners: [
                          {
                            type: "local",
                            source: "privy",
                            address: n,
                            sign: async ({ hash: e }) =>
                              await t.request({
                                method: "secp256k1_sign",
                                params: [e],
                              }),
                          },
                        ],
                        version: a,
                      });
                    })({ client: n, owner: e, version: a ?? "1" });
                  case "thirdweb":
                    return tw({ client: n, entryPoint: nx, owner: e });
                  default:
                    throw Error(`Invalid smart account type: ${t}.`);
                }
              })({
                owner: e,
                smartWalletType: t,
                publicClient: i,
                smartWalletVersion: a,
              }),
              c = az({ transport: (0, u.http)(r), entryPoint: d.entryPoint }),
              p = s
                ? az({ transport: (0, u.http)(s), entryPoint: d.entryPoint })
                : void 0;
            return (function (e) {
              let {
                  client: t,
                  key: a = "bundler",
                  name: n = "Bundler Client",
                  paymaster: i,
                  paymasterContext: r,
                  bundlerTransport: s,
                  userOperation: o,
                } = e,
                d = Object.assign(
                  (0, l.createClient)({
                    ...e,
                    chain: e.chain ?? t?.chain,
                    transport: s,
                    key: a,
                    name: n,
                    type: "bundlerClient",
                  }),
                  {
                    client: t,
                    paymaster: i,
                    paymasterContext: r,
                    userOperation: o,
                  }
                );
              if (e.userOperation?.prepareUserOperation) {
                let t = e.userOperation.prepareUserOperation;
                return d
                  .extend(ek)
                  .extend((e) => ({ prepareUserOperation: (a) => t(e, a) }))
                  .extend(ek)
                  .extend((e) => ({ prepareUserOperation: (a) => t(e, a) }))
                  .extend(eq);
              }
              return d.extend(ek).extend(eq);
            })({
              account: d,
              chain: n,
              paymaster: p,
              paymasterContext: o,
              bundlerTransport: (0, u.http)(r),
              userOperation: {
                estimateFeesPerGas: async () => {
                  if (
                    ["public.pimlico.io", "api.pimlico.io"].some((e) =>
                      r.includes(e)
                    )
                  )
                    return await c
                      .getUserOperationGasPrice()
                      .then((e) => e.fast);
                  if (["rpc.zerodev.app"].some((e) => r.includes(e)))
                    return (
                      await c.request({
                        method: "zd_getUserOperationGasPrice",
                        params: [],
                      })
                    ).fast;
                  if (["g.alchemy.com"].some((e) => r.includes(e))) {
                    let [e, t] = await Promise.all([
                      i.getBlock({ blockTag: "latest" }),
                      c.request({
                        method: "rundler_maxPriorityFeePerGas",
                        params: [],
                      }),
                    ]);
                    if (!e.baseFeePerGas || !t)
                      throw Error(
                        "Failed to get block or maxPriorityFeePerGasEstimate"
                      );
                    return {
                      maxFeePerGas:
                        (150n * e.baseFeePerGas) / 100n + BigInt(t.toString()),
                      maxPriorityFeePerGas: BigInt(t.toString()),
                    };
                  }
                  {
                    let e = await i.estimateFeesPerGas(),
                      t = r.includes("api.developer.coinbase.com")
                        ? 175n
                        : 150n;
                    return {
                      ...e,
                      maxFeePerGas: (e.maxFeePerGas * t) / 100n,
                      maxPriorityFeePerGas: (e.maxPriorityFeePerGas * t) / 100n,
                    };
                  }
                },
              },
            });
          })({
            owner: n,
            smartWalletType: m,
            smartWalletVersion: f,
            chain: e,
            publicClient: b,
            paymasterContext: h,
            ...y,
          });
        if (!w)
          throw new d.P(
            `Failed to create smart wallet client for chain ${e.name} (eip155:${e.id})`
          );
        return w;
      };
    e.i(33750),
      e.i(595932),
      e.i(123287),
      e.i(830260),
      e.i(298282),
      e.i(555340),
      e.i(426715),
      e.i(117595);
    let nD = (0, r.createContext)({ client: void 0, getClientForChain: y.a }),
      nP = ({ config: e, children: t }) =>
        (0, i.jsx)(nC, {
          children: (0, i.jsx)(nO, {
            config: e,
            children: (0, i.jsx)(nI, { children: t }),
          }),
        }),
      nE = () => {
        let { client: e, getClientForChain: t } = (0, r.useContext)(nD);
        return { client: e, getClientForChain: t };
      },
      nT = (0, r.createContext)({ config: void 0 }),
      nS = () => {
        let { config: e } = (0, r.useContext)(nT);
        return { config: e };
      },
      nC = ({ children: e }) => {
        let [t, a] = (0, r.useState)(void 0),
          { client: n } = (0, y.u)();
        return (
          (0, r.useEffect)(() => {
            !t &&
              n &&
              (async () => {
                try {
                  if (!n) return void console.warn("No client found");
                  let e = await n.getSmartWalletsConfig();
                  a(e);
                } catch (e) {
                  console.warn("Error generating smart wallet config: ", e);
                }
              })();
          }, [!!n]),
          (0, i.jsx)(nT.Provider, { value: { config: t }, children: e })
        );
      },
      nO = ({ config: e, children: t }) => {
        let { config: a } = nS(),
          { appId: n } = (0, y.u)(),
          { chains: u, defaultChain: p, rpcConfig: l } = (0, o.w)(),
          { wallets: m } = (0, o.F)(),
          { user: f } = (0, s.u)(),
          [g, b] = (0, r.useState)(),
          { wrapSmartAccountClientWithUIs: h } = (() => {
            let {
                hideWalletUIs: e,
                openPrivyModal: t,
                isHeadlessSigning: a,
              } = (0, y.u)(),
              { setModalData: n } = (0, o.i)(),
              { user: i } = (0, s.u)(),
              r = (0, s.g)(i),
              d = !!r && (0, s.c)(r);
            return {
              wrapSmartAccountClientWithUIs: (s) => ({
                ...s,
                sendTransaction: async (c, u) => {
                  if (a({ showWalletUIs: u?.uiOptions?.showWalletUIs }))
                    return (
                      (e.current = !0),
                      await s.sendTransaction(c).finally(() => (e.current = !1))
                    );
                  let p = [];
                  "calls" in c && void 0 !== c.calls
                    ? (p = [...c.calls])
                    : "to" in c &&
                      (p = [
                        {
                          to: c.to,
                          value: c.value || BigInt(0),
                          data: c.data || "0x",
                        },
                      ]);
                  let y = async () => {
                    if (!s.paymaster) return !1;
                    let { paymasterData: e, paymasterAndData: t } =
                      await s.prepareUserOperation({
                        calls: p,
                        maxFeePerGas: c.maxFeePerGas,
                        maxPriorityFeePerGas: c.maxPriorityFeePerGas,
                        nonce: c.nonce ? BigInt(c.nonce) : void 0,
                      });
                    return Number(t ?? e ?? 0) > 0;
                  };
                  return new Promise(async (a, l) => {
                    e.current = !0;
                    let { entropyId: m, entropyIdVerifier: f } = (0, o.a)(i);
                    n({
                      connectWallet: {
                        recoveryMethod: r.recoveryMethod,
                        connectingWalletAddress: r.address,
                        isUnifiedWallet: d,
                        entropyId: m,
                        entropyIdVerifier: f,
                        onCompleteNavigateTo: o.bA,
                        onFailure: () => {},
                      },
                      sendTransaction: {
                        transactionRequests: nA({
                          calls: p,
                          chain: s.chain,
                          maxPriorityFeePerGas: c.maxPriorityFeePerGas,
                          maxFeePerGas: c.maxFeePerGas,
                          nonce: c.nonce ? BigInt(c.nonce) : void 0,
                        }),
                        transactingWalletIndex: 0,
                        transactingWalletAddress: s.account.address,
                        entropyId: m,
                        entropyIdVerifier: f,
                        getIsSponsored: y,
                        signOnly: !1,
                        onConfirm: () => s.sendTransaction(c),
                        onSuccess: (e) => a(e.hash),
                        onFailure: l,
                        uiOptions: u?.uiOptions ?? {},
                      },
                    }),
                      t(o.br);
                  }).finally(() => {
                    e.current = !1;
                  });
                },
                signMessage: async (c, u) =>
                  a({ showWalletUIs: u?.uiOptions?.showWalletUIs })
                    ? ((e.current = !0),
                      await s.signMessage(c).finally(() => (e.current = !1)))
                    : new Promise(async (a, p) => {
                        let { entropyId: y, entropyIdVerifier: l } = (0, o.a)(
                          i
                        );
                        (e.current = !0),
                          n({
                            connectWallet: {
                              recoveryMethod: r.recoveryMethod,
                              connectingWalletAddress: r.address,
                              isUnifiedWallet: d,
                              entropyId: y,
                              entropyIdVerifier: l,
                              onCompleteNavigateTo: o.bq,
                              onFailure: () => {},
                            },
                            signMessage: {
                              method: "personal_sign",
                              data:
                                "string" == typeof c.message
                                  ? c.message
                                  : c.message.raw.toString(),
                              confirmAndSign: () => s.signMessage(c),
                              onSuccess: (e) => a(e),
                              onFailure: p,
                              uiOptions: u?.uiOptions ?? {},
                            },
                          }),
                          t(o.br);
                      }).finally(() => {
                        e.current = !1;
                      }),
                signTypedData: async (c, u) =>
                  a({ showWalletUIs: u?.uiOptions?.showWalletUIs })
                    ? ((e.current = !0),
                      await s.signTypedData(c).finally(() => (e.current = !1)))
                    : new Promise(async (a, p) => {
                        e.current = !0;
                        let { entropyId: y, entropyIdVerifier: l } = (0, o.a)(
                          i
                        );
                        n({
                          connectWallet: {
                            recoveryMethod: r.recoveryMethod,
                            connectingWalletAddress: r.address,
                            isUnifiedWallet: d,
                            entropyId: y,
                            entropyIdVerifier: l,
                            onCompleteNavigateTo: o.bq,
                            onFailure: () => {},
                          },
                          signMessage: {
                            method: "eth_signTypedData_v4",
                            data: c,
                            confirmAndSign: () => s.signTypedData(c),
                            onSuccess: (e) => a(e),
                            onFailure: p,
                            uiOptions: u?.uiOptions ?? {},
                          },
                        }),
                          t(o.br);
                      }).finally(() => {
                        e.current = !1;
                      }),
              }),
            };
          })(),
          w = (0, s.g)(f),
          x = c(m);
        return (
          (0, r.useEffect)(() => {
            (async () => {
              if (!a?.enabled) return;
              let t = a.configuredNetworks.find(
                (e) => e.chainId === `eip155:${p.id}`
              )
                ? p
                : u.find((e) =>
                    a.configuredNetworks
                      .map((e) => e.chainId)
                      .includes(`eip155:${e.id}`)
                  );
              if (!t)
                throw new d.P(
                  "Could not find smart wallets chain configurations for any Privy client configured chains. Please configure smart wallets for your chains in the Privy dashboard."
                );
              b(
                await nv({
                  chain: t,
                  privyAppId: n,
                  paymasterContext: e?.paymasterContext,
                  rpcConfig: l,
                  account: w,
                  signer: await x?.getEthereumProvider(),
                  user: f,
                  smartWalletsConfig: a,
                })
              );
            })();
          }, [!!a?.enabled, !!f?.smartWallet, !!x, !!w]),
          (0, i.jsx)(nF.Provider, {
            value: {
              client: g,
              config: e,
              getClientForChain: async ({ id: t }) => {
                let i = await nv({
                  chain: u.find((e) => e.id === t),
                  privyAppId: n,
                  paymasterContext: e?.paymasterContext,
                  rpcConfig: l,
                  account: w,
                  signer: await x?.getEthereumProvider(),
                  user: f,
                  smartWalletsConfig: a,
                });
                if (!i)
                  throw new d.P(
                    `Failed to create smart wallet client for chain id: ${t}`
                  );
                return h(i);
              },
            },
            children: t,
          })
        );
      },
      nF = (0, r.createContext)({
        client: void 0,
        config: void 0,
        getClientForChain: y.a,
      }),
      nI = ({ children: e }) => {
        let {
            client: t,
            config: a,
            getClientForChain: n,
          } = (() => {
            let {
              client: e,
              config: t,
              getClientForChain: a,
            } = (0, r.useContext)(nF);
            return { client: e, config: t, getClientForChain: a };
          })(),
          { config: u } = nS(),
          { wrapSmartAccountClient: p } = (({
            clientConfig: e,
            smartWalletsConfig: t,
          }) => {
            let {
                hideWalletUIs: a,
                openPrivyModal: n,
                appId: i,
                isHeadlessSigning: u,
              } = (0, y.u)(),
              p = (0, o.w)(),
              { setModalData: l } = (0, o.i)(),
              { user: m } = (0, s.u)(),
              { chains: f } = (0, o.w)(),
              {
                chainId: g,
                clients: b,
                setChainId: h,
                chainIdState: w,
              } = (() => {
                let e = (0, r.useRef)(),
                  [t, a] = (0, r.useState)();
                return {
                  clients: (0, r.useRef)({}),
                  setChainId: (t) => {
                    (e.current = t), a(t);
                  },
                  chainId: e,
                  chainIdState: t,
                };
              })(),
              x = f.find((e) => e.id === w),
              { wallets: A } = (0, o.F)(),
              v = (0, s.g)(m),
              D = c(A),
              P = !!v && (0, s.c)(v),
              E = (0, r.useCallback)(async () => g.current, [g]),
              T = (0, r.useCallback)(
                async ({ id: a }) => {
                  if (!b.current[a]) {
                    let n = await nv({
                      chain: f.find((e) => e.id === a),
                      account: v,
                      signer: await D?.getEthereumProvider(),
                      user: m,
                      paymasterContext: e?.paymasterContext,
                      smartWalletsConfig: t,
                      rpcConfig: p.rpcConfig,
                      privyAppId: i,
                    });
                    n && (b.current[a] = n);
                  }
                  h(a);
                },
                [f, e, A, m, t]
              );
            return {
              wrapSmartAccountClient: (e) => (
                (b.current[e.chain.id] = e),
                w || h(e.chain.id),
                {
                  ...e,
                  sendTransaction: async (e, t) => {
                    let i = b.current[g.current];
                    if (!i)
                      throw new d.P(
                        `Smart wallet client for chain (eip155:${g.current}) not found`
                      );
                    if (
                      (delete e.account,
                      u({ showWalletUIs: t?.uiOptions?.showWalletUIs }))
                    )
                      return (
                        (a.current = !0),
                        await i
                          .sendTransaction(e)
                          .finally(() => (a.current = !1))
                      );
                    let r = [];
                    "calls" in e && void 0 !== e.calls
                      ? (r = [...e.calls])
                      : "to" in e &&
                        (r = [
                          {
                            to: e.to,
                            value: e.value || BigInt(0),
                            data: e.data || "0x",
                          },
                        ]);
                    let s = async () => {
                      let {
                        paymasterAndData: t,
                        paymasterData: a,
                        maxFeePerGas: n,
                        maxPriorityFeePerGas: s,
                      } = await i.prepareUserOperation({
                        calls: r,
                        maxFeePerGas: e.maxFeePerGas,
                        maxPriorityFeePerGas: e.maxPriorityFeePerGas,
                        nonce: e.nonce ? BigInt(e.nonce) : void 0,
                      });
                      return (
                        (0 === Number(n) && 0 === Number(s)) ||
                        Number(t ?? a ?? 0) > 0
                      );
                    };
                    return new Promise(async (d, c) => {
                      a.current = !0;
                      let { entropyId: u, entropyIdVerifier: p } = (0, o.a)(m);
                      l({
                        connectWallet: {
                          recoveryMethod: v.recoveryMethod,
                          connectingWalletAddress: v.address,
                          isUnifiedWallet: P,
                          entropyId: u,
                          entropyIdVerifier: p,
                          onCompleteNavigateTo: o.bA,
                          onFailure: () => {},
                        },
                        sendTransaction: {
                          transactionRequests: nA({
                            calls: r,
                            chain: i.chain,
                            maxPriorityFeePerGas: e.maxPriorityFeePerGas,
                            maxFeePerGas: e.maxFeePerGas,
                            nonce: e.nonce ? BigInt(e.nonce) : void 0,
                          }),
                          transactingWalletIndex: 0,
                          transactingWalletAddress: i.account.address,
                          entropyId: u,
                          entropyIdVerifier: p,
                          getIsSponsored: s,
                          signOnly: !1,
                          onConfirm: () => i.sendTransaction(e),
                          onSuccess: (e) => d(e.hash),
                          onFailure: c,
                          uiOptions: t?.uiOptions ?? {},
                        },
                      }),
                        n(o.br);
                    }).finally(() => {
                      a.current = !1;
                    });
                  },
                  signMessage: async (e, t) => {
                    let i = b.current[g.current];
                    if (!i)
                      throw new d.P(
                        `Smart wallet client for chain (eip155:${g.current}) not found`
                      );
                    return u({ showWalletUIs: t?.uiOptions?.showWalletUIs })
                      ? ((a.current = !0),
                        await i.signMessage(e).finally(() => (a.current = !1)))
                      : new Promise(async (r, s) => {
                          let { entropyId: d, entropyIdVerifier: c } = (0, o.a)(
                            m
                          );
                          (a.current = !0),
                            l({
                              connectWallet: {
                                recoveryMethod: v.recoveryMethod,
                                connectingWalletAddress: v.address,
                                isUnifiedWallet: P,
                                entropyId: d,
                                entropyIdVerifier: c,
                                onCompleteNavigateTo: o.bq,
                                onFailure: () => {},
                              },
                              signMessage: {
                                method: "personal_sign",
                                data:
                                  "string" == typeof e.message
                                    ? e.message
                                    : e.message.raw.toString(),
                                confirmAndSign: () => i.signMessage(e),
                                onSuccess: (e) => r(e),
                                onFailure: s,
                                uiOptions: t?.uiOptions ?? {},
                              },
                            }),
                            n(o.br);
                        }).finally(() => {
                          a.current = !1;
                        });
                  },
                  signTypedData: async (e, t) => {
                    let i = b.current[g.current];
                    if (!i)
                      throw new d.P(
                        `Smart wallet client for chain (eip155:${g.current}) not found`
                      );
                    return (
                      delete e.account,
                      u({ showWalletUIs: t?.uiOptions?.showWalletUIs })
                        ? ((a.current = !0),
                          await i
                            .signTypedData(e)
                            .finally(() => (a.current = !1)))
                        : new Promise(async (r, s) => {
                            a.current = !0;
                            let { entropyId: d, entropyIdVerifier: c } = (0,
                            o.a)(m);
                            l({
                              connectWallet: {
                                recoveryMethod: v.recoveryMethod,
                                connectingWalletAddress: v.address,
                                isUnifiedWallet: P,
                                entropyId: d,
                                entropyIdVerifier: c,
                                onCompleteNavigateTo: o.bq,
                                onFailure: () => {},
                              },
                              signMessage: {
                                method: "eth_signTypedData_v4",
                                data: e,
                                confirmAndSign: () => i.signTypedData(e),
                                onSuccess: (e) => r(e),
                                onFailure: s,
                                uiOptions: t?.uiOptions ?? {},
                              },
                            }),
                              n(o.br);
                          }).finally(() => {
                            a.current = !1;
                          })
                    );
                  },
                  getChainId: E,
                  chain: x,
                  switchChain: T,
                }
              ),
            };
          })({ clientConfig: a, smartWalletsConfig: u }),
          { user: l } = (0, s.u)(),
          {
            generateSiweMessageForSmartWallet: m,
            linkSmartWallet: f,
            hideWalletUIs: g,
          } = (0, y.u)();
        return (
          (0, r.useEffect)(() => {
            (async () => {
              if (t && l && !l?.smartWallet && u?.enabled)
                try {
                  let e = await m({
                    address: t.account.address,
                    chainId: `eip155:${t.chain.id}`,
                  });
                  g.current = !0;
                  let a = await t.signMessage({ message: e });
                  await f({
                    signature: a,
                    message: e,
                    smartWalletType: u.smartWalletType,
                    smartWalletVersion: u.smartWalletVersion,
                  });
                } catch (e) {
                  console.error("Error creating smart wallet:", e);
                } finally {
                  g.current = !1;
                }
            })();
          }, [!!t, !!l?.smartWallet, !!u?.enabled]),
          (0, i.jsx)(nD.Provider, {
            value: {
              client: l?.smartWallet && t ? p(t) : void 0,
              getClientForChain: n,
            },
            children: e,
          })
        );
      };
    e.s(
      ["SmartWalletsProvider", () => nP, "useSmartWallets", () => nE],
      176394
    );
  },
]);
