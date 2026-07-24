(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  320457,
  (e) => {
    "use strict";
    let t = BigInt(0),
      r = BigInt(1);
    function n(e) {
      return (
        e instanceof Uint8Array ||
        (ArrayBuffer.isView(e) && "Uint8Array" === e.constructor.name)
      );
    }
    function i(e) {
      if (!n(e)) throw Error("Uint8Array expected");
    }
    function o(e, t) {
      if ("boolean" != typeof t) throw Error(e + " boolean expected, got " + t);
    }
    function s(e) {
      let t = e.toString(16);
      return 1 & t.length ? "0" + t : t;
    }
    function l(e) {
      if ("string" != typeof e)
        throw Error("hex string expected, got " + typeof e);
      return "" === e ? t : BigInt("0x" + e);
    }
    let a =
        "function" == typeof Uint8Array.from([]).toHex &&
        "function" == typeof Uint8Array.fromHex,
      u = Array.from({ length: 256 }, (e, t) =>
        t.toString(16).padStart(2, "0")
      );
    function c(e) {
      if ((i(e), a)) return e.toHex();
      let t = "";
      for (let r = 0; r < e.length; r++) t += u[e[r]];
      return t;
    }
    function f(e) {
      return e >= 48 && e <= 57
        ? e - 48
        : e >= 65 && e <= 70
        ? e - 55
        : e >= 97 && e <= 102
        ? e - 87
        : void 0;
    }
    function d(e) {
      if ("string" != typeof e)
        throw Error("hex string expected, got " + typeof e);
      if (a) return Uint8Array.fromHex(e);
      let t = e.length,
        r = t / 2;
      if (t % 2)
        throw Error("hex string expected, got unpadded hex of length " + t);
      let n = new Uint8Array(r);
      for (let t = 0, i = 0; t < r; t++, i += 2) {
        let r = f(e.charCodeAt(i)),
          o = f(e.charCodeAt(i + 1));
        if (void 0 === r || void 0 === o)
          throw Error(
            'hex string expected, got non-hex character "' +
              (e[i] + e[i + 1]) +
              '" at index ' +
              i
          );
        n[t] = 16 * r + o;
      }
      return n;
    }
    function p(e) {
      return l(c(e));
    }
    function y(e) {
      return i(e), l(c(Uint8Array.from(e).reverse()));
    }
    function g(e, t) {
      return d(e.toString(16).padStart(2 * t, "0"));
    }
    function m(e, t) {
      return g(e, t).reverse();
    }
    function b(e, t, r) {
      let i;
      if ("string" == typeof t)
        try {
          i = d(t);
        } catch (t) {
          throw Error(e + " must be hex string or Uint8Array, cause: " + t);
        }
      else if (n(t)) i = Uint8Array.from(t);
      else throw Error(e + " must be hex string or Uint8Array");
      let o = i.length;
      if ("number" == typeof r && o !== r)
        throw Error(e + " of length " + r + " expected, got " + o);
      return i;
    }
    function h(...e) {
      let t = 0;
      for (let r = 0; r < e.length; r++) {
        let n = e[r];
        i(n), (t += n.length);
      }
      let r = new Uint8Array(t);
      for (let t = 0, n = 0; t < e.length; t++) {
        let i = e[t];
        r.set(i, n), (n += i.length);
      }
      return r;
    }
    function x(e, t) {
      if (e.length !== t.length) return !1;
      let r = 0;
      for (let n = 0; n < e.length; n++) r |= e[n] ^ t[n];
      return 0 === r;
    }
    function w(e) {
      if ("string" != typeof e) throw Error("string expected");
      return new Uint8Array(new TextEncoder().encode(e));
    }
    let v = (e) => "bigint" == typeof e && t <= e;
    function E(e, t, r) {
      return v(e) && v(t) && v(r) && t <= e && e < r;
    }
    function A(e, t, r, n) {
      if (!E(t, r, n))
        throw Error(
          "expected valid " + e + ": " + r + " <= n < " + n + ", got " + t
        );
    }
    function j(e) {
      let n;
      for (n = 0; e > t; e >>= r, n += 1);
      return n;
    }
    let B = (e) => new Uint8Array(e);
    function U(e, t, r) {
      if ("number" != typeof e || e < 2)
        throw Error("hashLen must be a number");
      if ("number" != typeof t || t < 2)
        throw Error("qByteLen must be a number");
      if ("function" != typeof r) throw Error("hmacFn must be a function");
      let n = B(e),
        i = B(e),
        o = 0,
        s = () => {
          n.fill(1), i.fill(0), (o = 0);
        },
        l = (...e) => r(i, n, ...e),
        a = (e = B(0)) => {
          let t;
          if (
            ((i = l(((t = [0]), Uint8Array.from(t)), e)),
            (n = l()),
            0 !== e.length)
          ) {
            let t;
            (i = l(((t = [1]), Uint8Array.from(t)), e)), (n = l());
          }
        },
        u = () => {
          if (o++ >= 1e3) throw Error("drbg: tried 1000 values");
          let e = 0,
            r = [];
          for (; e < t; ) {
            let t = (n = l()).slice();
            r.push(t), (e += n.length);
          }
          return h(...r);
        };
      return (e, t) => {
        let r;
        for (s(), a(e); !(r = t(u())); ) a();
        return s(), r;
      };
    }
    let k = {
      bigint: (e) => "bigint" == typeof e,
      function: (e) => "function" == typeof e,
      boolean: (e) => "boolean" == typeof e,
      string: (e) => "string" == typeof e,
      stringOrUint8Array: (e) => "string" == typeof e || n(e),
      isSafeInteger: (e) => Number.isSafeInteger(e),
      array: (e) => Array.isArray(e),
      field: (e, t) => t.Fp.isValid(e),
      hash: (e) => "function" == typeof e && Number.isSafeInteger(e.outputLen),
    };
    function T(e, t, r = {}) {
      let n = (t, r, n) => {
        let i = k[r];
        if ("function" != typeof i) throw Error("invalid validator function");
        let o = e[t];
        if ((!n || void 0 !== o) && !i(o, e))
          throw Error(
            "param " + String(t) + " is invalid. Expected " + r + ", got " + o
          );
      };
      for (let [e, r] of Object.entries(t)) n(e, r, !1);
      for (let [e, t] of Object.entries(r)) n(e, t, !0);
      return e;
    }
    function S(e) {
      let t = new WeakMap();
      return (r, ...n) => {
        let i = t.get(r);
        if (void 0 !== i) return i;
        let o = e(r, ...n);
        return t.set(r, o), o;
      };
    }
    e.s([
      "aInRange",
      () => A,
      "abool",
      () => o,
      "abytes",
      () => i,
      "bitLen",
      () => j,
      "bitMask",
      0,
      (e) => (r << BigInt(e)) - r,
      "bytesToHex",
      () => c,
      "bytesToNumberBE",
      () => p,
      "bytesToNumberLE",
      () => y,
      "concatBytes",
      () => h,
      "createHmacDrbg",
      () => U,
      "ensureBytes",
      () => b,
      "equalBytes",
      () => x,
      "hexToBytes",
      () => d,
      "inRange",
      () => E,
      "isBytes",
      () => n,
      "memoized",
      () => S,
      "numberToBytesBE",
      () => g,
      "numberToBytesLE",
      () => m,
      "numberToHexUnpadded",
      () => s,
      "utf8ToBytes",
      () => w,
      "validateObject",
      () => T,
    ]);
  },
  621450,
  (e) => {
    e.v({
      name: "@base-org/account",
      version: "1.1.1",
      description: "Base Account SDK",
      keywords: ["base", "account", "sdk", "web3"],
      publishConfig: { access: "public" },
      type: "module",
      main: "dist/index.js",
      types: "dist/index.d.ts",
      browser: "dist/base-account.min.js",
      exports: {
        ".": {
          types: "./dist/index.d.ts",
          import: "./dist/index.js",
          require: "./dist/index.js",
        },
        "./payment": {
          types: "./dist/interface/payment/index.d.ts",
          import: "./dist/interface/payment/index.js",
          require: "./dist/interface/payment/index.js",
        },
        "./ui-assets": {
          types: "./dist/ui/assets/index.d.ts",
          import: "./dist/ui/assets/index.js",
          require: "./dist/ui/assets/index.js",
        },
      },
      files: ["dist", "README.md", "LICENSE"],
      sideEffects: !1,
      repository: "https://github.com/base/account-sdk.git",
      author: "Base",
      license: "Apache-2.0",
      scripts: {
        clean: "rm -rf dist && rm -rf node_modules",
        pretest: "node compile-assets.cjs",
        test: "vitest",
        "test:coverage": "vitest --coverage",
        prebuild: "rm -rf ./dist",
        build:
          "node compile-assets.cjs && tsc -p ./tsconfig.build.json && tsc-alias && yarn build:browser",
        "build:browser": "rollup -c rollup.config.js",
        prepublishOnly: "yarn build",
        dev: "yarn build && tsc --watch & nodemon --watch dist --delay 1 --exec tsc-alias",
        typecheck: "tsc --noEmit",
        lint: "biome lint .",
        format: "biome format . --write",
        "format:check":
          "biome check . --formatter-enabled=true --linter-enabled=false --organize-imports-enabled=false",
        size: "size-limit",
      },
      dependencies: {
        "@noble/hashes": "1.4.0",
        clsx: "1.2.1",
        eventemitter3: "5.0.1",
        "idb-keyval": "6.2.1",
        ox: "0.6.9",
        preact: "10.24.2",
        viem: "^2.31.7",
        zustand: "5.0.3",
      },
      devDependencies: {
        "@rollup/plugin-commonjs": "^25.0.7",
        "@rollup/plugin-json": "^6.1.0",
        "@rollup/plugin-node-resolve": "^15.2.3",
        "@rollup/plugin-replace": "^5.0.5",
        "@rollup/plugin-typescript": "^11.1.6",
        "@size-limit/preset-big-lib": "^11.1.6",
        "@testing-library/jest-dom": "^6.5.0",
        "@testing-library/preact": "^3.2.4",
        "@types/node": "^14.18.54",
        "@vitest/coverage-v8": "2.1.2",
        "@vitest/web-worker": "3.2.1",
        "fake-indexeddb": "^6.0.0",
        glob: "^11.0.0",
        "jest-websocket-mock": "^2.4.0",
        jsdom: "^25.0.1",
        nodemon: "^3.1.0",
        rollup: "^4.9.6",
        "rollup-plugin-terser": "^7.0.2",
        sass: "^1.64.1",
        "size-limit": "^11.1.6",
        "tsc-alias": "^1.8.8",
        tslib: "^2.6.0",
        typescript: "^5.1.6",
        vitest: "^2.1.9",
      },
      "size-limit": [{ path: "./dist/index.js", limit: "31 KB", import: "*" }],
    });
  },
  453324,
  (e) => {
    e.v((t) =>
      Promise.all(
        ["static/chunks/3765bded4dc0d3b1.js"].map((t) => e.l(t))
      ).then(() => t(502673))
    );
  },
  765552,
  (e) => {
    e.v((e) => Promise.resolve().then(() => e(667055)));
  },
]);
