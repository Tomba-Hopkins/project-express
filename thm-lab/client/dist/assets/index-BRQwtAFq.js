(function () {
  const a = document.createElement("link").relList;
  if (a && a.supports && a.supports("modulepreload")) return;
  for (const c of document.querySelectorAll('link[rel="modulepreload"]')) u(c);
  new MutationObserver((c) => {
    for (const h of c)
      if (h.type === "childList")
        for (const f of h.addedNodes)
          f.tagName === "LINK" && f.rel === "modulepreload" && u(f);
  }).observe(document, { childList: !0, subtree: !0 });
  function s(c) {
    const h = {};
    return (
      c.integrity && (h.integrity = c.integrity),
      c.referrerPolicy && (h.referrerPolicy = c.referrerPolicy),
      c.crossOrigin === "use-credentials"
        ? (h.credentials = "include")
        : c.crossOrigin === "anonymous"
        ? (h.credentials = "omit")
        : (h.credentials = "same-origin"),
      h
    );
  }
  function u(c) {
    if (c.ep) return;
    c.ep = !0;
    const h = s(c);
    fetch(c.href, h);
  }
})();
var qo = { exports: {} },
  Sl = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Jm;
function i1() {
  if (Jm) return Sl;
  Jm = 1;
  var i = Symbol.for("react.transitional.element"),
    a = Symbol.for("react.fragment");
  function s(u, c, h) {
    var f = null;
    if (
      (h !== void 0 && (f = "" + h),
      c.key !== void 0 && (f = "" + c.key),
      "key" in c)
    ) {
      h = {};
      for (var m in c) m !== "key" && (h[m] = c[m]);
    } else h = c;
    return (
      (c = h.ref),
      { $$typeof: i, type: u, key: f, ref: c !== void 0 ? c : null, props: h }
    );
  }
  return (Sl.Fragment = a), (Sl.jsx = s), (Sl.jsxs = s), Sl;
}
var Wm;
function a1() {
  return Wm || ((Wm = 1), (qo.exports = i1())), qo.exports;
}
var Lt = a1(),
  Yo = { exports: {} },
  ut = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var $m;
function l1() {
  if ($m) return ut;
  $m = 1;
  var i = Symbol.for("react.transitional.element"),
    a = Symbol.for("react.portal"),
    s = Symbol.for("react.fragment"),
    u = Symbol.for("react.strict_mode"),
    c = Symbol.for("react.profiler"),
    h = Symbol.for("react.consumer"),
    f = Symbol.for("react.context"),
    m = Symbol.for("react.forward_ref"),
    y = Symbol.for("react.suspense"),
    p = Symbol.for("react.memo"),
    g = Symbol.for("react.lazy"),
    S = Symbol.iterator;
  function T(A) {
    return A === null || typeof A != "object"
      ? null
      : ((A = (S && A[S]) || A["@@iterator"]),
        typeof A == "function" ? A : null);
  }
  var M = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    O = Object.assign,
    _ = {};
  function U(A, H, et) {
    (this.props = A),
      (this.context = H),
      (this.refs = _),
      (this.updater = et || M);
  }
  (U.prototype.isReactComponent = {}),
    (U.prototype.setState = function (A, H) {
      if (typeof A != "object" && typeof A != "function" && A != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, A, H, "setState");
    }),
    (U.prototype.forceUpdate = function (A) {
      this.updater.enqueueForceUpdate(this, A, "forceUpdate");
    });
  function N() {}
  N.prototype = U.prototype;
  function q(A, H, et) {
    (this.props = A),
      (this.context = H),
      (this.refs = _),
      (this.updater = et || M);
  }
  var Y = (q.prototype = new N());
  (Y.constructor = q), O(Y, U.prototype), (Y.isPureReactComponent = !0);
  var nt = Array.isArray,
    j = { H: null, A: null, T: null, S: null },
    $ = Object.prototype.hasOwnProperty;
  function dt(A, H, et, W, K, mt) {
    return (
      (et = mt.ref),
      {
        $$typeof: i,
        type: A,
        key: H,
        ref: et !== void 0 ? et : null,
        props: mt,
      }
    );
  }
  function J(A, H) {
    return dt(A.type, H, void 0, void 0, void 0, A.props);
  }
  function X(A) {
    return typeof A == "object" && A !== null && A.$$typeof === i;
  }
  function at(A) {
    var H = { "=": "=0", ":": "=2" };
    return (
      "$" +
      A.replace(/[=:]/g, function (et) {
        return H[et];
      })
    );
  }
  var Gt = /\/+/g;
  function Ee(A, H) {
    return typeof A == "object" && A !== null && A.key != null
      ? at("" + A.key)
      : H.toString(36);
  }
  function Re() {}
  function De(A) {
    switch (A.status) {
      case "fulfilled":
        return A.value;
      case "rejected":
        throw A.reason;
      default:
        switch (
          (typeof A.status == "string"
            ? A.then(Re, Re)
            : ((A.status = "pending"),
              A.then(
                function (H) {
                  A.status === "pending" &&
                    ((A.status = "fulfilled"), (A.value = H));
                },
                function (H) {
                  A.status === "pending" &&
                    ((A.status = "rejected"), (A.reason = H));
                }
              )),
          A.status)
        ) {
          case "fulfilled":
            return A.value;
          case "rejected":
            throw A.reason;
        }
    }
    throw A;
  }
  function le(A, H, et, W, K) {
    var mt = typeof A;
    (mt === "undefined" || mt === "boolean") && (A = null);
    var rt = !1;
    if (A === null) rt = !0;
    else
      switch (mt) {
        case "bigint":
        case "string":
        case "number":
          rt = !0;
          break;
        case "object":
          switch (A.$$typeof) {
            case i:
            case a:
              rt = !0;
              break;
            case g:
              return (rt = A._init), le(rt(A._payload), H, et, W, K);
          }
      }
    if (rt)
      return (
        (K = K(A)),
        (rt = W === "" ? "." + Ee(A, 0) : W),
        nt(K)
          ? ((et = ""),
            rt != null && (et = rt.replace(Gt, "$&/") + "/"),
            le(K, H, et, "", function (jt) {
              return jt;
            }))
          : K != null &&
            (X(K) &&
              (K = J(
                K,
                et +
                  (K.key == null || (A && A.key === K.key)
                    ? ""
                    : ("" + K.key).replace(Gt, "$&/") + "/") +
                  rt
              )),
            H.push(K)),
        1
      );
    rt = 0;
    var se = W === "" ? "." : W + ":";
    if (nt(A))
      for (var St = 0; St < A.length; St++)
        (W = A[St]), (mt = se + Ee(W, St)), (rt += le(W, H, et, mt, K));
    else if (((St = T(A)), typeof St == "function"))
      for (A = St.call(A), St = 0; !(W = A.next()).done; )
        (W = W.value), (mt = se + Ee(W, St++)), (rt += le(W, H, et, mt, K));
    else if (mt === "object") {
      if (typeof A.then == "function") return le(De(A), H, et, W, K);
      throw (
        ((H = String(A)),
        Error(
          "Objects are not valid as a React child (found: " +
            (H === "[object Object]"
              ? "object with keys {" + Object.keys(A).join(", ") + "}"
              : H) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    }
    return rt;
  }
  function G(A, H, et) {
    if (A == null) return A;
    var W = [],
      K = 0;
    return (
      le(A, W, "", "", function (mt) {
        return H.call(et, mt, K++);
      }),
      W
    );
  }
  function P(A) {
    if (A._status === -1) {
      var H = A._result;
      (H = H()),
        H.then(
          function (et) {
            (A._status === 0 || A._status === -1) &&
              ((A._status = 1), (A._result = et));
          },
          function (et) {
            (A._status === 0 || A._status === -1) &&
              ((A._status = 2), (A._result = et));
          }
        ),
        A._status === -1 && ((A._status = 0), (A._result = H));
    }
    if (A._status === 1) return A._result.default;
    throw A._result;
  }
  var F =
    typeof reportError == "function"
      ? reportError
      : function (A) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var H = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof A == "object" &&
                A !== null &&
                typeof A.message == "string"
                  ? String(A.message)
                  : String(A),
              error: A,
            });
            if (!window.dispatchEvent(H)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", A);
            return;
          }
          console.error(A);
        };
  function vt() {}
  return (
    (ut.Children = {
      map: G,
      forEach: function (A, H, et) {
        G(
          A,
          function () {
            H.apply(this, arguments);
          },
          et
        );
      },
      count: function (A) {
        var H = 0;
        return (
          G(A, function () {
            H++;
          }),
          H
        );
      },
      toArray: function (A) {
        return (
          G(A, function (H) {
            return H;
          }) || []
        );
      },
      only: function (A) {
        if (!X(A))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return A;
      },
    }),
    (ut.Component = U),
    (ut.Fragment = s),
    (ut.Profiler = c),
    (ut.PureComponent = q),
    (ut.StrictMode = u),
    (ut.Suspense = y),
    (ut.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = j),
    (ut.act = function () {
      throw Error("act(...) is not supported in production builds of React.");
    }),
    (ut.cache = function (A) {
      return function () {
        return A.apply(null, arguments);
      };
    }),
    (ut.cloneElement = function (A, H, et) {
      if (A == null)
        throw Error(
          "The argument must be a React element, but you passed " + A + "."
        );
      var W = O({}, A.props),
        K = A.key,
        mt = void 0;
      if (H != null)
        for (rt in (H.ref !== void 0 && (mt = void 0),
        H.key !== void 0 && (K = "" + H.key),
        H))
          !$.call(H, rt) ||
            rt === "key" ||
            rt === "__self" ||
            rt === "__source" ||
            (rt === "ref" && H.ref === void 0) ||
            (W[rt] = H[rt]);
      var rt = arguments.length - 2;
      if (rt === 1) W.children = et;
      else if (1 < rt) {
        for (var se = Array(rt), St = 0; St < rt; St++)
          se[St] = arguments[St + 2];
        W.children = se;
      }
      return dt(A.type, K, void 0, void 0, mt, W);
    }),
    (ut.createContext = function (A) {
      return (
        (A = {
          $$typeof: f,
          _currentValue: A,
          _currentValue2: A,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (A.Provider = A),
        (A.Consumer = { $$typeof: h, _context: A }),
        A
      );
    }),
    (ut.createElement = function (A, H, et) {
      var W,
        K = {},
        mt = null;
      if (H != null)
        for (W in (H.key !== void 0 && (mt = "" + H.key), H))
          $.call(H, W) &&
            W !== "key" &&
            W !== "__self" &&
            W !== "__source" &&
            (K[W] = H[W]);
      var rt = arguments.length - 2;
      if (rt === 1) K.children = et;
      else if (1 < rt) {
        for (var se = Array(rt), St = 0; St < rt; St++)
          se[St] = arguments[St + 2];
        K.children = se;
      }
      if (A && A.defaultProps)
        for (W in ((rt = A.defaultProps), rt))
          K[W] === void 0 && (K[W] = rt[W]);
      return dt(A, mt, void 0, void 0, null, K);
    }),
    (ut.createRef = function () {
      return { current: null };
    }),
    (ut.forwardRef = function (A) {
      return { $$typeof: m, render: A };
    }),
    (ut.isValidElement = X),
    (ut.lazy = function (A) {
      return { $$typeof: g, _payload: { _status: -1, _result: A }, _init: P };
    }),
    (ut.memo = function (A, H) {
      return { $$typeof: p, type: A, compare: H === void 0 ? null : H };
    }),
    (ut.startTransition = function (A) {
      var H = j.T,
        et = {};
      j.T = et;
      try {
        var W = A(),
          K = j.S;
        K !== null && K(et, W),
          typeof W == "object" &&
            W !== null &&
            typeof W.then == "function" &&
            W.then(vt, F);
      } catch (mt) {
        F(mt);
      } finally {
        j.T = H;
      }
    }),
    (ut.unstable_useCacheRefresh = function () {
      return j.H.useCacheRefresh();
    }),
    (ut.use = function (A) {
      return j.H.use(A);
    }),
    (ut.useActionState = function (A, H, et) {
      return j.H.useActionState(A, H, et);
    }),
    (ut.useCallback = function (A, H) {
      return j.H.useCallback(A, H);
    }),
    (ut.useContext = function (A) {
      return j.H.useContext(A);
    }),
    (ut.useDebugValue = function () {}),
    (ut.useDeferredValue = function (A, H) {
      return j.H.useDeferredValue(A, H);
    }),
    (ut.useEffect = function (A, H) {
      return j.H.useEffect(A, H);
    }),
    (ut.useId = function () {
      return j.H.useId();
    }),
    (ut.useImperativeHandle = function (A, H, et) {
      return j.H.useImperativeHandle(A, H, et);
    }),
    (ut.useInsertionEffect = function (A, H) {
      return j.H.useInsertionEffect(A, H);
    }),
    (ut.useLayoutEffect = function (A, H) {
      return j.H.useLayoutEffect(A, H);
    }),
    (ut.useMemo = function (A, H) {
      return j.H.useMemo(A, H);
    }),
    (ut.useOptimistic = function (A, H) {
      return j.H.useOptimistic(A, H);
    }),
    (ut.useReducer = function (A, H, et) {
      return j.H.useReducer(A, H, et);
    }),
    (ut.useRef = function (A) {
      return j.H.useRef(A);
    }),
    (ut.useState = function (A) {
      return j.H.useState(A);
    }),
    (ut.useSyncExternalStore = function (A, H, et) {
      return j.H.useSyncExternalStore(A, H, et);
    }),
    (ut.useTransition = function () {
      return j.H.useTransition();
    }),
    (ut.version = "19.0.0"),
    ut
  );
}
var Im;
function _c() {
  return Im || ((Im = 1), (Yo.exports = l1())), Yo.exports;
}
var it = _c(),
  Go = { exports: {} },
  bl = {},
  Xo = { exports: {} },
  Ko = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var tp;
function s1() {
  return (
    tp ||
      ((tp = 1),
      (function (i) {
        function a(G, P) {
          var F = G.length;
          G.push(P);
          t: for (; 0 < F; ) {
            var vt = (F - 1) >>> 1,
              A = G[vt];
            if (0 < c(A, P)) (G[vt] = P), (G[F] = A), (F = vt);
            else break t;
          }
        }
        function s(G) {
          return G.length === 0 ? null : G[0];
        }
        function u(G) {
          if (G.length === 0) return null;
          var P = G[0],
            F = G.pop();
          if (F !== P) {
            G[0] = F;
            t: for (var vt = 0, A = G.length, H = A >>> 1; vt < H; ) {
              var et = 2 * (vt + 1) - 1,
                W = G[et],
                K = et + 1,
                mt = G[K];
              if (0 > c(W, F))
                K < A && 0 > c(mt, W)
                  ? ((G[vt] = mt), (G[K] = F), (vt = K))
                  : ((G[vt] = W), (G[et] = F), (vt = et));
              else if (K < A && 0 > c(mt, F))
                (G[vt] = mt), (G[K] = F), (vt = K);
              else break t;
            }
          }
          return P;
        }
        function c(G, P) {
          var F = G.sortIndex - P.sortIndex;
          return F !== 0 ? F : G.id - P.id;
        }
        if (
          ((i.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var h = performance;
          i.unstable_now = function () {
            return h.now();
          };
        } else {
          var f = Date,
            m = f.now();
          i.unstable_now = function () {
            return f.now() - m;
          };
        }
        var y = [],
          p = [],
          g = 1,
          S = null,
          T = 3,
          M = !1,
          O = !1,
          _ = !1,
          U = typeof setTimeout == "function" ? setTimeout : null,
          N = typeof clearTimeout == "function" ? clearTimeout : null,
          q = typeof setImmediate < "u" ? setImmediate : null;
        function Y(G) {
          for (var P = s(p); P !== null; ) {
            if (P.callback === null) u(p);
            else if (P.startTime <= G)
              u(p), (P.sortIndex = P.expirationTime), a(y, P);
            else break;
            P = s(p);
          }
        }
        function nt(G) {
          if (((_ = !1), Y(G), !O))
            if (s(y) !== null) (O = !0), De();
            else {
              var P = s(p);
              P !== null && le(nt, P.startTime - G);
            }
        }
        var j = !1,
          $ = -1,
          dt = 5,
          J = -1;
        function X() {
          return !(i.unstable_now() - J < dt);
        }
        function at() {
          if (j) {
            var G = i.unstable_now();
            J = G;
            var P = !0;
            try {
              t: {
                (O = !1), _ && ((_ = !1), N($), ($ = -1)), (M = !0);
                var F = T;
                try {
                  e: {
                    for (
                      Y(G), S = s(y);
                      S !== null && !(S.expirationTime > G && X());

                    ) {
                      var vt = S.callback;
                      if (typeof vt == "function") {
                        (S.callback = null), (T = S.priorityLevel);
                        var A = vt(S.expirationTime <= G);
                        if (((G = i.unstable_now()), typeof A == "function")) {
                          (S.callback = A), Y(G), (P = !0);
                          break e;
                        }
                        S === s(y) && u(y), Y(G);
                      } else u(y);
                      S = s(y);
                    }
                    if (S !== null) P = !0;
                    else {
                      var H = s(p);
                      H !== null && le(nt, H.startTime - G), (P = !1);
                    }
                  }
                  break t;
                } finally {
                  (S = null), (T = F), (M = !1);
                }
                P = void 0;
              }
            } finally {
              P ? Gt() : (j = !1);
            }
          }
        }
        var Gt;
        if (typeof q == "function")
          Gt = function () {
            q(at);
          };
        else if (typeof MessageChannel < "u") {
          var Ee = new MessageChannel(),
            Re = Ee.port2;
          (Ee.port1.onmessage = at),
            (Gt = function () {
              Re.postMessage(null);
            });
        } else
          Gt = function () {
            U(at, 0);
          };
        function De() {
          j || ((j = !0), Gt());
        }
        function le(G, P) {
          $ = U(function () {
            G(i.unstable_now());
          }, P);
        }
        (i.unstable_IdlePriority = 5),
          (i.unstable_ImmediatePriority = 1),
          (i.unstable_LowPriority = 4),
          (i.unstable_NormalPriority = 3),
          (i.unstable_Profiling = null),
          (i.unstable_UserBlockingPriority = 2),
          (i.unstable_cancelCallback = function (G) {
            G.callback = null;
          }),
          (i.unstable_continueExecution = function () {
            O || M || ((O = !0), De());
          }),
          (i.unstable_forceFrameRate = function (G) {
            0 > G || 125 < G
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (dt = 0 < G ? Math.floor(1e3 / G) : 5);
          }),
          (i.unstable_getCurrentPriorityLevel = function () {
            return T;
          }),
          (i.unstable_getFirstCallbackNode = function () {
            return s(y);
          }),
          (i.unstable_next = function (G) {
            switch (T) {
              case 1:
              case 2:
              case 3:
                var P = 3;
                break;
              default:
                P = T;
            }
            var F = T;
            T = P;
            try {
              return G();
            } finally {
              T = F;
            }
          }),
          (i.unstable_pauseExecution = function () {}),
          (i.unstable_requestPaint = function () {}),
          (i.unstable_runWithPriority = function (G, P) {
            switch (G) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                G = 3;
            }
            var F = T;
            T = G;
            try {
              return P();
            } finally {
              T = F;
            }
          }),
          (i.unstable_scheduleCallback = function (G, P, F) {
            var vt = i.unstable_now();
            switch (
              (typeof F == "object" && F !== null
                ? ((F = F.delay),
                  (F = typeof F == "number" && 0 < F ? vt + F : vt))
                : (F = vt),
              G)
            ) {
              case 1:
                var A = -1;
                break;
              case 2:
                A = 250;
                break;
              case 5:
                A = 1073741823;
                break;
              case 4:
                A = 1e4;
                break;
              default:
                A = 5e3;
            }
            return (
              (A = F + A),
              (G = {
                id: g++,
                callback: P,
                priorityLevel: G,
                startTime: F,
                expirationTime: A,
                sortIndex: -1,
              }),
              F > vt
                ? ((G.sortIndex = F),
                  a(p, G),
                  s(y) === null &&
                    G === s(p) &&
                    (_ ? (N($), ($ = -1)) : (_ = !0), le(nt, F - vt)))
                : ((G.sortIndex = A), a(y, G), O || M || ((O = !0), De())),
              G
            );
          }),
          (i.unstable_shouldYield = X),
          (i.unstable_wrapCallback = function (G) {
            var P = T;
            return function () {
              var F = T;
              T = P;
              try {
                return G.apply(this, arguments);
              } finally {
                T = F;
              }
            };
          });
      })(Ko)),
    Ko
  );
}
var ep;
function u1() {
  return ep || ((ep = 1), (Xo.exports = s1())), Xo.exports;
}
var Qo = { exports: {} },
  ee = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var np;
function r1() {
  if (np) return ee;
  np = 1;
  var i = _c();
  function a(y) {
    var p = "https://react.dev/errors/" + y;
    if (1 < arguments.length) {
      p += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var g = 2; g < arguments.length; g++)
        p += "&args[]=" + encodeURIComponent(arguments[g]);
    }
    return (
      "Minified React error #" +
      y +
      "; visit " +
      p +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function s() {}
  var u = {
      d: {
        f: s,
        r: function () {
          throw Error(a(522));
        },
        D: s,
        C: s,
        L: s,
        m: s,
        X: s,
        S: s,
        M: s,
      },
      p: 0,
      findDOMNode: null,
    },
    c = Symbol.for("react.portal");
  function h(y, p, g) {
    var S =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: c,
      key: S == null ? null : "" + S,
      children: y,
      containerInfo: p,
      implementation: g,
    };
  }
  var f = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function m(y, p) {
    if (y === "font") return "";
    if (typeof p == "string") return p === "use-credentials" ? p : "";
  }
  return (
    (ee.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = u),
    (ee.createPortal = function (y, p) {
      var g =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!p || (p.nodeType !== 1 && p.nodeType !== 9 && p.nodeType !== 11))
        throw Error(a(299));
      return h(y, p, null, g);
    }),
    (ee.flushSync = function (y) {
      var p = f.T,
        g = u.p;
      try {
        if (((f.T = null), (u.p = 2), y)) return y();
      } finally {
        (f.T = p), (u.p = g), u.d.f();
      }
    }),
    (ee.preconnect = function (y, p) {
      typeof y == "string" &&
        (p
          ? ((p = p.crossOrigin),
            (p =
              typeof p == "string"
                ? p === "use-credentials"
                  ? p
                  : ""
                : void 0))
          : (p = null),
        u.d.C(y, p));
    }),
    (ee.prefetchDNS = function (y) {
      typeof y == "string" && u.d.D(y);
    }),
    (ee.preinit = function (y, p) {
      if (typeof y == "string" && p && typeof p.as == "string") {
        var g = p.as,
          S = m(g, p.crossOrigin),
          T = typeof p.integrity == "string" ? p.integrity : void 0,
          M = typeof p.fetchPriority == "string" ? p.fetchPriority : void 0;
        g === "style"
          ? u.d.S(y, typeof p.precedence == "string" ? p.precedence : void 0, {
              crossOrigin: S,
              integrity: T,
              fetchPriority: M,
            })
          : g === "script" &&
            u.d.X(y, {
              crossOrigin: S,
              integrity: T,
              fetchPriority: M,
              nonce: typeof p.nonce == "string" ? p.nonce : void 0,
            });
      }
    }),
    (ee.preinitModule = function (y, p) {
      if (typeof y == "string")
        if (typeof p == "object" && p !== null) {
          if (p.as == null || p.as === "script") {
            var g = m(p.as, p.crossOrigin);
            u.d.M(y, {
              crossOrigin: g,
              integrity: typeof p.integrity == "string" ? p.integrity : void 0,
              nonce: typeof p.nonce == "string" ? p.nonce : void 0,
            });
          }
        } else p == null && u.d.M(y);
    }),
    (ee.preload = function (y, p) {
      if (
        typeof y == "string" &&
        typeof p == "object" &&
        p !== null &&
        typeof p.as == "string"
      ) {
        var g = p.as,
          S = m(g, p.crossOrigin);
        u.d.L(y, g, {
          crossOrigin: S,
          integrity: typeof p.integrity == "string" ? p.integrity : void 0,
          nonce: typeof p.nonce == "string" ? p.nonce : void 0,
          type: typeof p.type == "string" ? p.type : void 0,
          fetchPriority:
            typeof p.fetchPriority == "string" ? p.fetchPriority : void 0,
          referrerPolicy:
            typeof p.referrerPolicy == "string" ? p.referrerPolicy : void 0,
          imageSrcSet:
            typeof p.imageSrcSet == "string" ? p.imageSrcSet : void 0,
          imageSizes: typeof p.imageSizes == "string" ? p.imageSizes : void 0,
          media: typeof p.media == "string" ? p.media : void 0,
        });
      }
    }),
    (ee.preloadModule = function (y, p) {
      if (typeof y == "string")
        if (p) {
          var g = m(p.as, p.crossOrigin);
          u.d.m(y, {
            as: typeof p.as == "string" && p.as !== "script" ? p.as : void 0,
            crossOrigin: g,
            integrity: typeof p.integrity == "string" ? p.integrity : void 0,
          });
        } else u.d.m(y);
    }),
    (ee.requestFormReset = function (y) {
      u.d.r(y);
    }),
    (ee.unstable_batchedUpdates = function (y, p) {
      return y(p);
    }),
    (ee.useFormState = function (y, p, g) {
      return f.H.useFormState(y, p, g);
    }),
    (ee.useFormStatus = function () {
      return f.H.useHostTransitionStatus();
    }),
    (ee.version = "19.0.0"),
    ee
  );
}
var ip;
function o1() {
  if (ip) return Qo.exports;
  ip = 1;
  function i() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (a) {
        console.error(a);
      }
  }
  return i(), (Qo.exports = r1()), Qo.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ap;
function c1() {
  if (ap) return bl;
  ap = 1;
  var i = u1(),
    a = _c(),
    s = o1();
  function u(t) {
    var e = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var n = 2; n < arguments.length; n++)
        e += "&args[]=" + encodeURIComponent(arguments[n]);
    }
    return (
      "Minified React error #" +
      t +
      "; visit " +
      e +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function c(t) {
    return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
  }
  var h = Symbol.for("react.element"),
    f = Symbol.for("react.transitional.element"),
    m = Symbol.for("react.portal"),
    y = Symbol.for("react.fragment"),
    p = Symbol.for("react.strict_mode"),
    g = Symbol.for("react.profiler"),
    S = Symbol.for("react.provider"),
    T = Symbol.for("react.consumer"),
    M = Symbol.for("react.context"),
    O = Symbol.for("react.forward_ref"),
    _ = Symbol.for("react.suspense"),
    U = Symbol.for("react.suspense_list"),
    N = Symbol.for("react.memo"),
    q = Symbol.for("react.lazy"),
    Y = Symbol.for("react.offscreen"),
    nt = Symbol.for("react.memo_cache_sentinel"),
    j = Symbol.iterator;
  function $(t) {
    return t === null || typeof t != "object"
      ? null
      : ((t = (j && t[j]) || t["@@iterator"]),
        typeof t == "function" ? t : null);
  }
  var dt = Symbol.for("react.client.reference");
  function J(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === dt ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case y:
        return "Fragment";
      case m:
        return "Portal";
      case g:
        return "Profiler";
      case p:
        return "StrictMode";
      case _:
        return "Suspense";
      case U:
        return "SuspenseList";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case M:
          return (t.displayName || "Context") + ".Provider";
        case T:
          return (t._context.displayName || "Context") + ".Consumer";
        case O:
          var e = t.render;
          return (
            (t = t.displayName),
            t ||
              ((t = e.displayName || e.name || ""),
              (t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")),
            t
          );
        case N:
          return (
            (e = t.displayName || null), e !== null ? e : J(t.type) || "Memo"
          );
        case q:
          (e = t._payload), (t = t._init);
          try {
            return J(t(e));
          } catch {}
      }
    return null;
  }
  var X = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    at = Object.assign,
    Gt,
    Ee;
  function Re(t) {
    if (Gt === void 0)
      try {
        throw Error();
      } catch (n) {
        var e = n.stack.trim().match(/\n( *(at )?)/);
        (Gt = (e && e[1]) || ""),
          (Ee =
            -1 <
            n.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < n.stack.indexOf("@")
              ? "@unknown:0:0"
              : "");
      }
    return (
      `
` +
      Gt +
      t +
      Ee
    );
  }
  var De = !1;
  function le(t, e) {
    if (!t || De) return "";
    De = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var l = {
        DetermineComponentFrameRoot: function () {
          try {
            if (e) {
              var L = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(L.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(L, []);
                } catch (V) {
                  var C = V;
                }
                Reflect.construct(t, [], L);
              } else {
                try {
                  L.call();
                } catch (V) {
                  C = V;
                }
                t.call(L.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (V) {
                C = V;
              }
              (L = t()) &&
                typeof L.catch == "function" &&
                L.catch(function () {});
            }
          } catch (V) {
            if (V && C && typeof V.stack == "string") return [V.stack, C.stack];
          }
          return [null, null];
        },
      };
      l.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var r = Object.getOwnPropertyDescriptor(
        l.DetermineComponentFrameRoot,
        "name"
      );
      r &&
        r.configurable &&
        Object.defineProperty(l.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var o = l.DetermineComponentFrameRoot(),
        d = o[0],
        v = o[1];
      if (d && v) {
        var b = d.split(`
`),
          R = v.split(`
`);
        for (
          r = l = 0;
          l < b.length && !b[l].includes("DetermineComponentFrameRoot");

        )
          l++;
        for (; r < R.length && !R[r].includes("DetermineComponentFrameRoot"); )
          r++;
        if (l === b.length || r === R.length)
          for (
            l = b.length - 1, r = R.length - 1;
            1 <= l && 0 <= r && b[l] !== R[r];

          )
            r--;
        for (; 1 <= l && 0 <= r; l--, r--)
          if (b[l] !== R[r]) {
            if (l !== 1 || r !== 1)
              do
                if ((l--, r--, 0 > r || b[l] !== R[r])) {
                  var z =
                    `
` + b[l].replace(" at new ", " at ");
                  return (
                    t.displayName &&
                      z.includes("<anonymous>") &&
                      (z = z.replace("<anonymous>", t.displayName)),
                    z
                  );
                }
              while (1 <= l && 0 <= r);
            break;
          }
      }
    } finally {
      (De = !1), (Error.prepareStackTrace = n);
    }
    return (n = t ? t.displayName || t.name : "") ? Re(n) : "";
  }
  function G(t) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return Re(t.type);
      case 16:
        return Re("Lazy");
      case 13:
        return Re("Suspense");
      case 19:
        return Re("SuspenseList");
      case 0:
      case 15:
        return (t = le(t.type, !1)), t;
      case 11:
        return (t = le(t.type.render, !1)), t;
      case 1:
        return (t = le(t.type, !0)), t;
      default:
        return "";
    }
  }
  function P(t) {
    try {
      var e = "";
      do (e += G(t)), (t = t.return);
      while (t);
      return e;
    } catch (n) {
      return (
        `
Error generating stack: ` +
        n.message +
        `
` +
        n.stack
      );
    }
  }
  function F(t) {
    var e = t,
      n = t;
    if (t.alternate) for (; e.return; ) e = e.return;
    else {
      t = e;
      do (e = t), (e.flags & 4098) !== 0 && (n = e.return), (t = e.return);
      while (t);
    }
    return e.tag === 3 ? n : null;
  }
  function vt(t) {
    if (t.tag === 13) {
      var e = t.memoizedState;
      if (
        (e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)),
        e !== null)
      )
        return e.dehydrated;
    }
    return null;
  }
  function A(t) {
    if (F(t) !== t) throw Error(u(188));
  }
  function H(t) {
    var e = t.alternate;
    if (!e) {
      if (((e = F(t)), e === null)) throw Error(u(188));
      return e !== t ? null : t;
    }
    for (var n = t, l = e; ; ) {
      var r = n.return;
      if (r === null) break;
      var o = r.alternate;
      if (o === null) {
        if (((l = r.return), l !== null)) {
          n = l;
          continue;
        }
        break;
      }
      if (r.child === o.child) {
        for (o = r.child; o; ) {
          if (o === n) return A(r), t;
          if (o === l) return A(r), e;
          o = o.sibling;
        }
        throw Error(u(188));
      }
      if (n.return !== l.return) (n = r), (l = o);
      else {
        for (var d = !1, v = r.child; v; ) {
          if (v === n) {
            (d = !0), (n = r), (l = o);
            break;
          }
          if (v === l) {
            (d = !0), (l = r), (n = o);
            break;
          }
          v = v.sibling;
        }
        if (!d) {
          for (v = o.child; v; ) {
            if (v === n) {
              (d = !0), (n = o), (l = r);
              break;
            }
            if (v === l) {
              (d = !0), (l = o), (n = r);
              break;
            }
            v = v.sibling;
          }
          if (!d) throw Error(u(189));
        }
      }
      if (n.alternate !== l) throw Error(u(190));
    }
    if (n.tag !== 3) throw Error(u(188));
    return n.stateNode.current === n ? t : e;
  }
  function et(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null; ) {
      if (((e = et(t)), e !== null)) return e;
      t = t.sibling;
    }
    return null;
  }
  var W = Array.isArray,
    K = s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    mt = { pending: !1, data: null, method: null, action: null },
    rt = [],
    se = -1;
  function St(t) {
    return { current: t };
  }
  function jt(t) {
    0 > se || ((t.current = rt[se]), (rt[se] = null), se--);
  }
  function xt(t, e) {
    se++, (rt[se] = t.current), (t.current = e);
  }
  var Ze = St(null),
    Aa = St(null),
    En = St(null),
    Gl = St(null);
  function Xl(t, e) {
    switch ((xt(En, e), xt(Aa, t), xt(Ze, null), (t = e.nodeType), t)) {
      case 9:
      case 11:
        e = (e = e.documentElement) && (e = e.namespaceURI) ? Dm(e) : 0;
        break;
      default:
        if (
          ((t = t === 8 ? e.parentNode : e),
          (e = t.tagName),
          (t = t.namespaceURI))
        )
          (t = Dm(t)), (e = xm(t, e));
        else
          switch (e) {
            case "svg":
              e = 1;
              break;
            case "math":
              e = 2;
              break;
            default:
              e = 0;
          }
    }
    jt(Ze), xt(Ze, e);
  }
  function Oi() {
    jt(Ze), jt(Aa), jt(En);
  }
  function _u(t) {
    t.memoizedState !== null && xt(Gl, t);
    var e = Ze.current,
      n = xm(e, t.type);
    e !== n && (xt(Aa, t), xt(Ze, n));
  }
  function Kl(t) {
    Aa.current === t && (jt(Ze), jt(Aa)),
      Gl.current === t && (jt(Gl), (ml._currentValue = mt));
  }
  var wu = Object.prototype.hasOwnProperty,
    Uu = i.unstable_scheduleCallback,
    Vu = i.unstable_cancelCallback,
    B0 = i.unstable_shouldYield,
    N0 = i.unstable_requestPaint,
    Pe = i.unstable_now,
    L0 = i.unstable_getCurrentPriorityLevel,
    mf = i.unstable_ImmediatePriority,
    pf = i.unstable_UserBlockingPriority,
    Ql = i.unstable_NormalPriority,
    j0 = i.unstable_LowPriority,
    yf = i.unstable_IdlePriority,
    H0 = i.log,
    q0 = i.unstable_setDisableYieldValue,
    Ea = null,
    me = null;
  function Y0(t) {
    if (me && typeof me.onCommitFiberRoot == "function")
      try {
        me.onCommitFiberRoot(Ea, t, void 0, (t.current.flags & 128) === 128);
      } catch {}
  }
  function Rn(t) {
    if (
      (typeof H0 == "function" && q0(t),
      me && typeof me.setStrictMode == "function")
    )
      try {
        me.setStrictMode(Ea, t);
      } catch {}
  }
  var pe = Math.clz32 ? Math.clz32 : K0,
    G0 = Math.log,
    X0 = Math.LN2;
  function K0(t) {
    return (t >>>= 0), t === 0 ? 32 : (31 - ((G0(t) / X0) | 0)) | 0;
  }
  var Zl = 128,
    Pl = 4194304;
  function Wn(t) {
    var e = t & 42;
    if (e !== 0) return e;
    switch (t & -t) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 4194176;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return t;
    }
  }
  function Fl(t, e) {
    var n = t.pendingLanes;
    if (n === 0) return 0;
    var l = 0,
      r = t.suspendedLanes,
      o = t.pingedLanes,
      d = t.warmLanes;
    t = t.finishedLanes !== 0;
    var v = n & 134217727;
    return (
      v !== 0
        ? ((n = v & ~r),
          n !== 0
            ? (l = Wn(n))
            : ((o &= v),
              o !== 0
                ? (l = Wn(o))
                : t || ((d = v & ~d), d !== 0 && (l = Wn(d)))))
        : ((v = n & ~r),
          v !== 0
            ? (l = Wn(v))
            : o !== 0
            ? (l = Wn(o))
            : t || ((d = n & ~d), d !== 0 && (l = Wn(d)))),
      l === 0
        ? 0
        : e !== 0 &&
          e !== l &&
          (e & r) === 0 &&
          ((r = l & -l),
          (d = e & -e),
          r >= d || (r === 32 && (d & 4194176) !== 0))
        ? e
        : l
    );
  }
  function Ra(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function Q0(t, e) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
        return e + 250;
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function gf() {
    var t = Zl;
    return (Zl <<= 1), (Zl & 4194176) === 0 && (Zl = 128), t;
  }
  function vf() {
    var t = Pl;
    return (Pl <<= 1), (Pl & 62914560) === 0 && (Pl = 4194304), t;
  }
  function zu(t) {
    for (var e = [], n = 0; 31 > n; n++) e.push(t);
    return e;
  }
  function Da(t, e) {
    (t.pendingLanes |= e),
      e !== 268435456 &&
        ((t.suspendedLanes = 0), (t.pingedLanes = 0), (t.warmLanes = 0));
  }
  function Z0(t, e, n, l, r, o) {
    var d = t.pendingLanes;
    (t.pendingLanes = n),
      (t.suspendedLanes = 0),
      (t.pingedLanes = 0),
      (t.warmLanes = 0),
      (t.expiredLanes &= n),
      (t.entangledLanes &= n),
      (t.errorRecoveryDisabledLanes &= n),
      (t.shellSuspendCounter = 0);
    var v = t.entanglements,
      b = t.expirationTimes,
      R = t.hiddenUpdates;
    for (n = d & ~n; 0 < n; ) {
      var z = 31 - pe(n),
        L = 1 << z;
      (v[z] = 0), (b[z] = -1);
      var C = R[z];
      if (C !== null)
        for (R[z] = null, z = 0; z < C.length; z++) {
          var V = C[z];
          V !== null && (V.lane &= -536870913);
        }
      n &= ~L;
    }
    l !== 0 && Sf(t, l, 0),
      o !== 0 && r === 0 && t.tag !== 0 && (t.suspendedLanes |= o & ~(d & ~e));
  }
  function Sf(t, e, n) {
    (t.pendingLanes |= e), (t.suspendedLanes &= ~e);
    var l = 31 - pe(e);
    (t.entangledLanes |= e),
      (t.entanglements[l] = t.entanglements[l] | 1073741824 | (n & 4194218));
  }
  function bf(t, e) {
    var n = (t.entangledLanes |= e);
    for (t = t.entanglements; n; ) {
      var l = 31 - pe(n),
        r = 1 << l;
      (r & e) | (t[l] & e) && (t[l] |= e), (n &= ~r);
    }
  }
  function Tf(t) {
    return (
      (t &= -t),
      2 < t ? (8 < t ? ((t & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function Af() {
    var t = K.p;
    return t !== 0 ? t : ((t = window.event), t === void 0 ? 32 : Km(t.type));
  }
  function P0(t, e) {
    var n = K.p;
    try {
      return (K.p = t), e();
    } finally {
      K.p = n;
    }
  }
  var Dn = Math.random().toString(36).slice(2),
    It = "__reactFiber$" + Dn,
    ce = "__reactProps$" + Dn,
    Mi = "__reactContainer$" + Dn,
    Bu = "__reactEvents$" + Dn,
    F0 = "__reactListeners$" + Dn,
    k0 = "__reactHandles$" + Dn,
    Ef = "__reactResources$" + Dn,
    xa = "__reactMarker$" + Dn;
  function Nu(t) {
    delete t[It], delete t[ce], delete t[Bu], delete t[F0], delete t[k0];
  }
  function $n(t) {
    var e = t[It];
    if (e) return e;
    for (var n = t.parentNode; n; ) {
      if ((e = n[Mi] || n[It])) {
        if (
          ((n = e.alternate),
          e.child !== null || (n !== null && n.child !== null))
        )
          for (t = Cm(t); t !== null; ) {
            if ((n = t[It])) return n;
            t = Cm(t);
          }
        return e;
      }
      (t = n), (n = t.parentNode);
    }
    return null;
  }
  function Ci(t) {
    if ((t = t[It] || t[Mi])) {
      var e = t.tag;
      if (e === 5 || e === 6 || e === 13 || e === 26 || e === 27 || e === 3)
        return t;
    }
    return null;
  }
  function Oa(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(u(33));
  }
  function _i(t) {
    var e = t[Ef];
    return (
      e ||
        (e = t[Ef] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      e
    );
  }
  function Qt(t) {
    t[xa] = !0;
  }
  var Rf = new Set(),
    Df = {};
  function In(t, e) {
    wi(t, e), wi(t + "Capture", e);
  }
  function wi(t, e) {
    for (Df[t] = e, t = 0; t < e.length; t++) Rf.add(e[t]);
  }
  var nn = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    J0 = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ),
    xf = {},
    Of = {};
  function W0(t) {
    return wu.call(Of, t)
      ? !0
      : wu.call(xf, t)
      ? !1
      : J0.test(t)
      ? (Of[t] = !0)
      : ((xf[t] = !0), !1);
  }
  function kl(t, e, n) {
    if (W0(e))
      if (n === null) t.removeAttribute(e);
      else {
        switch (typeof n) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(e);
            return;
          case "boolean":
            var l = e.toLowerCase().slice(0, 5);
            if (l !== "data-" && l !== "aria-") {
              t.removeAttribute(e);
              return;
            }
        }
        t.setAttribute(e, "" + n);
      }
  }
  function Jl(t, e, n) {
    if (n === null) t.removeAttribute(e);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(e);
          return;
      }
      t.setAttribute(e, "" + n);
    }
  }
  function an(t, e, n, l) {
    if (l === null) t.removeAttribute(n);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(n);
          return;
      }
      t.setAttributeNS(e, n, "" + l);
    }
  }
  function xe(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function Mf(t) {
    var e = t.type;
    return (
      (t = t.nodeName) &&
      t.toLowerCase() === "input" &&
      (e === "checkbox" || e === "radio")
    );
  }
  function $0(t) {
    var e = Mf(t) ? "checked" : "value",
      n = Object.getOwnPropertyDescriptor(t.constructor.prototype, e),
      l = "" + t[e];
    if (
      !t.hasOwnProperty(e) &&
      typeof n < "u" &&
      typeof n.get == "function" &&
      typeof n.set == "function"
    ) {
      var r = n.get,
        o = n.set;
      return (
        Object.defineProperty(t, e, {
          configurable: !0,
          get: function () {
            return r.call(this);
          },
          set: function (d) {
            (l = "" + d), o.call(this, d);
          },
        }),
        Object.defineProperty(t, e, { enumerable: n.enumerable }),
        {
          getValue: function () {
            return l;
          },
          setValue: function (d) {
            l = "" + d;
          },
          stopTracking: function () {
            (t._valueTracker = null), delete t[e];
          },
        }
      );
    }
  }
  function Wl(t) {
    t._valueTracker || (t._valueTracker = $0(t));
  }
  function Cf(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var n = e.getValue(),
      l = "";
    return (
      t && (l = Mf(t) ? (t.checked ? "true" : "false") : t.value),
      (t = l),
      t !== n ? (e.setValue(t), !0) : !1
    );
  }
  function $l(t) {
    if (
      ((t = t || (typeof document < "u" ? document : void 0)), typeof t > "u")
    )
      return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var I0 = /[\n"\\]/g;
  function Oe(t) {
    return t.replace(I0, function (e) {
      return "\\" + e.charCodeAt(0).toString(16) + " ";
    });
  }
  function Lu(t, e, n, l, r, o, d, v) {
    (t.name = ""),
      d != null &&
      typeof d != "function" &&
      typeof d != "symbol" &&
      typeof d != "boolean"
        ? (t.type = d)
        : t.removeAttribute("type"),
      e != null
        ? d === "number"
          ? ((e === 0 && t.value === "") || t.value != e) &&
            (t.value = "" + xe(e))
          : t.value !== "" + xe(e) && (t.value = "" + xe(e))
        : (d !== "submit" && d !== "reset") || t.removeAttribute("value"),
      e != null
        ? ju(t, d, xe(e))
        : n != null
        ? ju(t, d, xe(n))
        : l != null && t.removeAttribute("value"),
      r == null && o != null && (t.defaultChecked = !!o),
      r != null &&
        (t.checked = r && typeof r != "function" && typeof r != "symbol"),
      v != null &&
      typeof v != "function" &&
      typeof v != "symbol" &&
      typeof v != "boolean"
        ? (t.name = "" + xe(v))
        : t.removeAttribute("name");
  }
  function _f(t, e, n, l, r, o, d, v) {
    if (
      (o != null &&
        typeof o != "function" &&
        typeof o != "symbol" &&
        typeof o != "boolean" &&
        (t.type = o),
      e != null || n != null)
    ) {
      if (!((o !== "submit" && o !== "reset") || e != null)) return;
      (n = n != null ? "" + xe(n) : ""),
        (e = e != null ? "" + xe(e) : n),
        v || e === t.value || (t.value = e),
        (t.defaultValue = e);
    }
    (l = l ?? r),
      (l = typeof l != "function" && typeof l != "symbol" && !!l),
      (t.checked = v ? t.checked : !!l),
      (t.defaultChecked = !!l),
      d != null &&
        typeof d != "function" &&
        typeof d != "symbol" &&
        typeof d != "boolean" &&
        (t.name = d);
  }
  function ju(t, e, n) {
    (e === "number" && $l(t.ownerDocument) === t) ||
      t.defaultValue === "" + n ||
      (t.defaultValue = "" + n);
  }
  function Ui(t, e, n, l) {
    if (((t = t.options), e)) {
      e = {};
      for (var r = 0; r < n.length; r++) e["$" + n[r]] = !0;
      for (n = 0; n < t.length; n++)
        (r = e.hasOwnProperty("$" + t[n].value)),
          t[n].selected !== r && (t[n].selected = r),
          r && l && (t[n].defaultSelected = !0);
    } else {
      for (n = "" + xe(n), e = null, r = 0; r < t.length; r++) {
        if (t[r].value === n) {
          (t[r].selected = !0), l && (t[r].defaultSelected = !0);
          return;
        }
        e !== null || t[r].disabled || (e = t[r]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function wf(t, e, n) {
    if (
      e != null &&
      ((e = "" + xe(e)), e !== t.value && (t.value = e), n == null)
    ) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = n != null ? "" + xe(n) : "";
  }
  function Uf(t, e, n, l) {
    if (e == null) {
      if (l != null) {
        if (n != null) throw Error(u(92));
        if (W(l)) {
          if (1 < l.length) throw Error(u(93));
          l = l[0];
        }
        n = l;
      }
      n == null && (n = ""), (e = n);
    }
    (n = xe(e)),
      (t.defaultValue = n),
      (l = t.textContent),
      l === n && l !== "" && l !== null && (t.value = l);
  }
  function Vi(t, e) {
    if (e) {
      var n = t.firstChild;
      if (n && n === t.lastChild && n.nodeType === 3) {
        n.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var tv = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Vf(t, e, n) {
    var l = e.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === ""
      ? l
        ? t.setProperty(e, "")
        : e === "float"
        ? (t.cssFloat = "")
        : (t[e] = "")
      : l
      ? t.setProperty(e, n)
      : typeof n != "number" || n === 0 || tv.has(e)
      ? e === "float"
        ? (t.cssFloat = n)
        : (t[e] = ("" + n).trim())
      : (t[e] = n + "px");
  }
  function zf(t, e, n) {
    if (e != null && typeof e != "object") throw Error(u(62));
    if (((t = t.style), n != null)) {
      for (var l in n)
        !n.hasOwnProperty(l) ||
          (e != null && e.hasOwnProperty(l)) ||
          (l.indexOf("--") === 0
            ? t.setProperty(l, "")
            : l === "float"
            ? (t.cssFloat = "")
            : (t[l] = ""));
      for (var r in e)
        (l = e[r]), e.hasOwnProperty(r) && n[r] !== l && Vf(t, r, l);
    } else for (var o in e) e.hasOwnProperty(o) && Vf(t, o, e[o]);
  }
  function Hu(t) {
    if (t.indexOf("-") === -1) return !1;
    switch (t) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var ev = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    nv =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Il(t) {
    return nv.test("" + t)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : t;
  }
  var qu = null;
  function Yu(t) {
    return (
      (t = t.target || t.srcElement || window),
      t.correspondingUseElement && (t = t.correspondingUseElement),
      t.nodeType === 3 ? t.parentNode : t
    );
  }
  var zi = null,
    Bi = null;
  function Bf(t) {
    var e = Ci(t);
    if (e && (t = e.stateNode)) {
      var n = t[ce] || null;
      t: switch (((t = e.stateNode), e.type)) {
        case "input":
          if (
            (Lu(
              t,
              n.value,
              n.defaultValue,
              n.defaultValue,
              n.checked,
              n.defaultChecked,
              n.type,
              n.name
            ),
            (e = n.name),
            n.type === "radio" && e != null)
          ) {
            for (n = t; n.parentNode; ) n = n.parentNode;
            for (
              n = n.querySelectorAll(
                'input[name="' + Oe("" + e) + '"][type="radio"]'
              ),
                e = 0;
              e < n.length;
              e++
            ) {
              var l = n[e];
              if (l !== t && l.form === t.form) {
                var r = l[ce] || null;
                if (!r) throw Error(u(90));
                Lu(
                  l,
                  r.value,
                  r.defaultValue,
                  r.defaultValue,
                  r.checked,
                  r.defaultChecked,
                  r.type,
                  r.name
                );
              }
            }
            for (e = 0; e < n.length; e++)
              (l = n[e]), l.form === t.form && Cf(l);
          }
          break t;
        case "textarea":
          wf(t, n.value, n.defaultValue);
          break t;
        case "select":
          (e = n.value), e != null && Ui(t, !!n.multiple, e, !1);
      }
    }
  }
  var Gu = !1;
  function Nf(t, e, n) {
    if (Gu) return t(e, n);
    Gu = !0;
    try {
      var l = t(e);
      return l;
    } finally {
      if (
        ((Gu = !1),
        (zi !== null || Bi !== null) &&
          (Ns(), zi && ((e = zi), (t = Bi), (Bi = zi = null), Bf(e), t)))
      )
        for (e = 0; e < t.length; e++) Bf(t[e]);
    }
  }
  function Ma(t, e) {
    var n = t.stateNode;
    if (n === null) return null;
    var l = n[ce] || null;
    if (l === null) return null;
    n = l[e];
    t: switch (e) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (l = !l.disabled) ||
          ((t = t.type),
          (l = !(
            t === "button" ||
            t === "input" ||
            t === "select" ||
            t === "textarea"
          ))),
          (t = !l);
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (n && typeof n != "function") throw Error(u(231, e, typeof n));
    return n;
  }
  var Xu = !1;
  if (nn)
    try {
      var Ca = {};
      Object.defineProperty(Ca, "passive", {
        get: function () {
          Xu = !0;
        },
      }),
        window.addEventListener("test", Ca, Ca),
        window.removeEventListener("test", Ca, Ca);
    } catch {
      Xu = !1;
    }
  var xn = null,
    Ku = null,
    ts = null;
  function Lf() {
    if (ts) return ts;
    var t,
      e = Ku,
      n = e.length,
      l,
      r = "value" in xn ? xn.value : xn.textContent,
      o = r.length;
    for (t = 0; t < n && e[t] === r[t]; t++);
    var d = n - t;
    for (l = 1; l <= d && e[n - l] === r[o - l]; l++);
    return (ts = r.slice(t, 1 < l ? 1 - l : void 0));
  }
  function es(t) {
    var e = t.keyCode;
    return (
      "charCode" in t
        ? ((t = t.charCode), t === 0 && e === 13 && (t = 13))
        : (t = e),
      t === 10 && (t = 13),
      32 <= t || t === 13 ? t : 0
    );
  }
  function ns() {
    return !0;
  }
  function jf() {
    return !1;
  }
  function fe(t) {
    function e(n, l, r, o, d) {
      (this._reactName = n),
        (this._targetInst = r),
        (this.type = l),
        (this.nativeEvent = o),
        (this.target = d),
        (this.currentTarget = null);
      for (var v in t)
        t.hasOwnProperty(v) && ((n = t[v]), (this[v] = n ? n(o) : o[v]));
      return (
        (this.isDefaultPrevented = (
          o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
        )
          ? ns
          : jf),
        (this.isPropagationStopped = jf),
        this
      );
    }
    return (
      at(e.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = ns));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = ns));
        },
        persist: function () {},
        isPersistent: ns,
      }),
      e
    );
  }
  var ti = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (t) {
        return t.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    is = fe(ti),
    _a = at({}, ti, { view: 0, detail: 0 }),
    iv = fe(_a),
    Qu,
    Zu,
    wa,
    as = at({}, _a, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Fu,
      button: 0,
      buttons: 0,
      relatedTarget: function (t) {
        return t.relatedTarget === void 0
          ? t.fromElement === t.srcElement
            ? t.toElement
            : t.fromElement
          : t.relatedTarget;
      },
      movementX: function (t) {
        return "movementX" in t
          ? t.movementX
          : (t !== wa &&
              (wa && t.type === "mousemove"
                ? ((Qu = t.screenX - wa.screenX), (Zu = t.screenY - wa.screenY))
                : (Zu = Qu = 0),
              (wa = t)),
            Qu);
      },
      movementY: function (t) {
        return "movementY" in t ? t.movementY : Zu;
      },
    }),
    Hf = fe(as),
    av = at({}, as, { dataTransfer: 0 }),
    lv = fe(av),
    sv = at({}, _a, { relatedTarget: 0 }),
    Pu = fe(sv),
    uv = at({}, ti, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    rv = fe(uv),
    ov = at({}, ti, {
      clipboardData: function (t) {
        return "clipboardData" in t ? t.clipboardData : window.clipboardData;
      },
    }),
    cv = fe(ov),
    fv = at({}, ti, { data: 0 }),
    qf = fe(fv),
    hv = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    dv = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    mv = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function pv(t) {
    var e = this.nativeEvent;
    return e.getModifierState
      ? e.getModifierState(t)
      : (t = mv[t])
      ? !!e[t]
      : !1;
  }
  function Fu() {
    return pv;
  }
  var yv = at({}, _a, {
      key: function (t) {
        if (t.key) {
          var e = hv[t.key] || t.key;
          if (e !== "Unidentified") return e;
        }
        return t.type === "keypress"
          ? ((t = es(t)), t === 13 ? "Enter" : String.fromCharCode(t))
          : t.type === "keydown" || t.type === "keyup"
          ? dv[t.keyCode] || "Unidentified"
          : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Fu,
      charCode: function (t) {
        return t.type === "keypress" ? es(t) : 0;
      },
      keyCode: function (t) {
        return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
      },
      which: function (t) {
        return t.type === "keypress"
          ? es(t)
          : t.type === "keydown" || t.type === "keyup"
          ? t.keyCode
          : 0;
      },
    }),
    gv = fe(yv),
    vv = at({}, as, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Yf = fe(vv),
    Sv = at({}, _a, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Fu,
    }),
    bv = fe(Sv),
    Tv = at({}, ti, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Av = fe(Tv),
    Ev = at({}, as, {
      deltaX: function (t) {
        return "deltaX" in t
          ? t.deltaX
          : "wheelDeltaX" in t
          ? -t.wheelDeltaX
          : 0;
      },
      deltaY: function (t) {
        return "deltaY" in t
          ? t.deltaY
          : "wheelDeltaY" in t
          ? -t.wheelDeltaY
          : "wheelDelta" in t
          ? -t.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    Rv = fe(Ev),
    Dv = at({}, ti, { newState: 0, oldState: 0 }),
    xv = fe(Dv),
    Ov = [9, 13, 27, 32],
    ku = nn && "CompositionEvent" in window,
    Ua = null;
  nn && "documentMode" in document && (Ua = document.documentMode);
  var Mv = nn && "TextEvent" in window && !Ua,
    Gf = nn && (!ku || (Ua && 8 < Ua && 11 >= Ua)),
    Xf = " ",
    Kf = !1;
  function Qf(t, e) {
    switch (t) {
      case "keyup":
        return Ov.indexOf(e.keyCode) !== -1;
      case "keydown":
        return e.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Zf(t) {
    return (t = t.detail), typeof t == "object" && "data" in t ? t.data : null;
  }
  var Ni = !1;
  function Cv(t, e) {
    switch (t) {
      case "compositionend":
        return Zf(e);
      case "keypress":
        return e.which !== 32 ? null : ((Kf = !0), Xf);
      case "textInput":
        return (t = e.data), t === Xf && Kf ? null : t;
      default:
        return null;
    }
  }
  function _v(t, e) {
    if (Ni)
      return t === "compositionend" || (!ku && Qf(t, e))
        ? ((t = Lf()), (ts = Ku = xn = null), (Ni = !1), t)
        : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(e.ctrlKey || e.altKey || e.metaKey) || (e.ctrlKey && e.altKey)) {
          if (e.char && 1 < e.char.length) return e.char;
          if (e.which) return String.fromCharCode(e.which);
        }
        return null;
      case "compositionend":
        return Gf && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var wv = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function Pf(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!wv[t.type] : e === "textarea";
  }
  function Ff(t, e, n, l) {
    zi ? (Bi ? Bi.push(l) : (Bi = [l])) : (zi = l),
      (e = Ys(e, "onChange")),
      0 < e.length &&
        ((n = new is("onChange", "change", null, n, l)),
        t.push({ event: n, listeners: e }));
  }
  var Va = null,
    za = null;
  function Uv(t) {
    bm(t, 0);
  }
  function ls(t) {
    var e = Oa(t);
    if (Cf(e)) return t;
  }
  function kf(t, e) {
    if (t === "change") return e;
  }
  var Jf = !1;
  if (nn) {
    var Ju;
    if (nn) {
      var Wu = "oninput" in document;
      if (!Wu) {
        var Wf = document.createElement("div");
        Wf.setAttribute("oninput", "return;"),
          (Wu = typeof Wf.oninput == "function");
      }
      Ju = Wu;
    } else Ju = !1;
    Jf = Ju && (!document.documentMode || 9 < document.documentMode);
  }
  function $f() {
    Va && (Va.detachEvent("onpropertychange", If), (za = Va = null));
  }
  function If(t) {
    if (t.propertyName === "value" && ls(za)) {
      var e = [];
      Ff(e, za, t, Yu(t)), Nf(Uv, e);
    }
  }
  function Vv(t, e, n) {
    t === "focusin"
      ? ($f(), (Va = e), (za = n), Va.attachEvent("onpropertychange", If))
      : t === "focusout" && $f();
  }
  function zv(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return ls(za);
  }
  function Bv(t, e) {
    if (t === "click") return ls(e);
  }
  function Nv(t, e) {
    if (t === "input" || t === "change") return ls(e);
  }
  function Lv(t, e) {
    return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
  }
  var ye = typeof Object.is == "function" ? Object.is : Lv;
  function Ba(t, e) {
    if (ye(t, e)) return !0;
    if (
      typeof t != "object" ||
      t === null ||
      typeof e != "object" ||
      e === null
    )
      return !1;
    var n = Object.keys(t),
      l = Object.keys(e);
    if (n.length !== l.length) return !1;
    for (l = 0; l < n.length; l++) {
      var r = n[l];
      if (!wu.call(e, r) || !ye(t[r], e[r])) return !1;
    }
    return !0;
  }
  function th(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function eh(t, e) {
    var n = th(t);
    t = 0;
    for (var l; n; ) {
      if (n.nodeType === 3) {
        if (((l = t + n.textContent.length), t <= e && l >= e))
          return { node: n, offset: e - t };
        t = l;
      }
      t: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break t;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = th(n);
    }
  }
  function nh(t, e) {
    return t && e
      ? t === e
        ? !0
        : t && t.nodeType === 3
        ? !1
        : e && e.nodeType === 3
        ? nh(t, e.parentNode)
        : "contains" in t
        ? t.contains(e)
        : t.compareDocumentPosition
        ? !!(t.compareDocumentPosition(e) & 16)
        : !1
      : !1;
  }
  function ih(t) {
    t =
      t != null &&
      t.ownerDocument != null &&
      t.ownerDocument.defaultView != null
        ? t.ownerDocument.defaultView
        : window;
    for (var e = $l(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var n = typeof e.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) t = e.contentWindow;
      else break;
      e = $l(t.document);
    }
    return e;
  }
  function $u(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return (
      e &&
      ((e === "input" &&
        (t.type === "text" ||
          t.type === "search" ||
          t.type === "tel" ||
          t.type === "url" ||
          t.type === "password")) ||
        e === "textarea" ||
        t.contentEditable === "true")
    );
  }
  function jv(t, e) {
    var n = ih(e);
    e = t.focusedElem;
    var l = t.selectionRange;
    if (
      n !== e &&
      e &&
      e.ownerDocument &&
      nh(e.ownerDocument.documentElement, e)
    ) {
      if (l !== null && $u(e)) {
        if (
          ((t = l.start),
          (n = l.end),
          n === void 0 && (n = t),
          "selectionStart" in e)
        )
          (e.selectionStart = t),
            (e.selectionEnd = Math.min(n, e.value.length));
        else if (
          ((n = ((t = e.ownerDocument || document) && t.defaultView) || window),
          n.getSelection)
        ) {
          n = n.getSelection();
          var r = e.textContent.length,
            o = Math.min(l.start, r);
          (l = l.end === void 0 ? o : Math.min(l.end, r)),
            !n.extend && o > l && ((r = l), (l = o), (o = r)),
            (r = eh(e, o));
          var d = eh(e, l);
          r &&
            d &&
            (n.rangeCount !== 1 ||
              n.anchorNode !== r.node ||
              n.anchorOffset !== r.offset ||
              n.focusNode !== d.node ||
              n.focusOffset !== d.offset) &&
            ((t = t.createRange()),
            t.setStart(r.node, r.offset),
            n.removeAllRanges(),
            o > l
              ? (n.addRange(t), n.extend(d.node, d.offset))
              : (t.setEnd(d.node, d.offset), n.addRange(t)));
        }
      }
      for (t = [], n = e; (n = n.parentNode); )
        n.nodeType === 1 &&
          t.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof e.focus == "function" && e.focus(), e = 0; e < t.length; e++)
        (n = t[e]),
          (n.element.scrollLeft = n.left),
          (n.element.scrollTop = n.top);
    }
  }
  var Hv = nn && "documentMode" in document && 11 >= document.documentMode,
    Li = null,
    Iu = null,
    Na = null,
    tr = !1;
  function ah(t, e, n) {
    var l =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    tr ||
      Li == null ||
      Li !== $l(l) ||
      ((l = Li),
      "selectionStart" in l && $u(l)
        ? (l = { start: l.selectionStart, end: l.selectionEnd })
        : ((l = (
            (l.ownerDocument && l.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (l = {
            anchorNode: l.anchorNode,
            anchorOffset: l.anchorOffset,
            focusNode: l.focusNode,
            focusOffset: l.focusOffset,
          })),
      (Na && Ba(Na, l)) ||
        ((Na = l),
        (l = Ys(Iu, "onSelect")),
        0 < l.length &&
          ((e = new is("onSelect", "select", null, e, n)),
          t.push({ event: e, listeners: l }),
          (e.target = Li))));
  }
  function ei(t, e) {
    var n = {};
    return (
      (n[t.toLowerCase()] = e.toLowerCase()),
      (n["Webkit" + t] = "webkit" + e),
      (n["Moz" + t] = "moz" + e),
      n
    );
  }
  var ji = {
      animationend: ei("Animation", "AnimationEnd"),
      animationiteration: ei("Animation", "AnimationIteration"),
      animationstart: ei("Animation", "AnimationStart"),
      transitionrun: ei("Transition", "TransitionRun"),
      transitionstart: ei("Transition", "TransitionStart"),
      transitioncancel: ei("Transition", "TransitionCancel"),
      transitionend: ei("Transition", "TransitionEnd"),
    },
    er = {},
    lh = {};
  nn &&
    ((lh = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete ji.animationend.animation,
      delete ji.animationiteration.animation,
      delete ji.animationstart.animation),
    "TransitionEvent" in window || delete ji.transitionend.transition);
  function ni(t) {
    if (er[t]) return er[t];
    if (!ji[t]) return t;
    var e = ji[t],
      n;
    for (n in e) if (e.hasOwnProperty(n) && n in lh) return (er[t] = e[n]);
    return t;
  }
  var sh = ni("animationend"),
    uh = ni("animationiteration"),
    rh = ni("animationstart"),
    qv = ni("transitionrun"),
    Yv = ni("transitionstart"),
    Gv = ni("transitioncancel"),
    oh = ni("transitionend"),
    ch = new Map(),
    fh =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(
        " "
      );
  function qe(t, e) {
    ch.set(t, e), In(e, [t]);
  }
  var Me = [],
    Hi = 0,
    nr = 0;
  function ss() {
    for (var t = Hi, e = (nr = Hi = 0); e < t; ) {
      var n = Me[e];
      Me[e++] = null;
      var l = Me[e];
      Me[e++] = null;
      var r = Me[e];
      Me[e++] = null;
      var o = Me[e];
      if (((Me[e++] = null), l !== null && r !== null)) {
        var d = l.pending;
        d === null ? (r.next = r) : ((r.next = d.next), (d.next = r)),
          (l.pending = r);
      }
      o !== 0 && hh(n, r, o);
    }
  }
  function us(t, e, n, l) {
    (Me[Hi++] = t),
      (Me[Hi++] = e),
      (Me[Hi++] = n),
      (Me[Hi++] = l),
      (nr |= l),
      (t.lanes |= l),
      (t = t.alternate),
      t !== null && (t.lanes |= l);
  }
  function ir(t, e, n, l) {
    return us(t, e, n, l), rs(t);
  }
  function On(t, e) {
    return us(t, null, null, e), rs(t);
  }
  function hh(t, e, n) {
    t.lanes |= n;
    var l = t.alternate;
    l !== null && (l.lanes |= n);
    for (var r = !1, o = t.return; o !== null; )
      (o.childLanes |= n),
        (l = o.alternate),
        l !== null && (l.childLanes |= n),
        o.tag === 22 &&
          ((t = o.stateNode), t === null || t._visibility & 1 || (r = !0)),
        (t = o),
        (o = o.return);
    r &&
      e !== null &&
      t.tag === 3 &&
      ((o = t.stateNode),
      (r = 31 - pe(n)),
      (o = o.hiddenUpdates),
      (t = o[r]),
      t === null ? (o[r] = [e]) : t.push(e),
      (e.lane = n | 536870912));
  }
  function rs(t) {
    if (50 < ul) throw ((ul = 0), (oo = null), Error(u(185)));
    for (var e = t.return; e !== null; ) (t = e), (e = t.return);
    return t.tag === 3 ? t.stateNode : null;
  }
  var qi = {},
    dh = new WeakMap();
  function Ce(t, e) {
    if (typeof t == "object" && t !== null) {
      var n = dh.get(t);
      return n !== void 0
        ? n
        : ((e = { value: t, source: e, stack: P(e) }), dh.set(t, e), e);
    }
    return { value: t, source: e, stack: P(e) };
  }
  var Yi = [],
    Gi = 0,
    os = null,
    cs = 0,
    _e = [],
    we = 0,
    ii = null,
    ln = 1,
    sn = "";
  function ai(t, e) {
    (Yi[Gi++] = cs), (Yi[Gi++] = os), (os = t), (cs = e);
  }
  function mh(t, e, n) {
    (_e[we++] = ln), (_e[we++] = sn), (_e[we++] = ii), (ii = t);
    var l = ln;
    t = sn;
    var r = 32 - pe(l) - 1;
    (l &= ~(1 << r)), (n += 1);
    var o = 32 - pe(e) + r;
    if (30 < o) {
      var d = r - (r % 5);
      (o = (l & ((1 << d) - 1)).toString(32)),
        (l >>= d),
        (r -= d),
        (ln = (1 << (32 - pe(e) + r)) | (n << r) | l),
        (sn = o + t);
    } else (ln = (1 << o) | (n << r) | l), (sn = t);
  }
  function ar(t) {
    t.return !== null && (ai(t, 1), mh(t, 1, 0));
  }
  function lr(t) {
    for (; t === os; )
      (os = Yi[--Gi]), (Yi[Gi] = null), (cs = Yi[--Gi]), (Yi[Gi] = null);
    for (; t === ii; )
      (ii = _e[--we]),
        (_e[we] = null),
        (sn = _e[--we]),
        (_e[we] = null),
        (ln = _e[--we]),
        (_e[we] = null);
  }
  var ue = null,
    kt = null,
    yt = !1,
    Ye = null,
    Fe = !1,
    sr = Error(u(519));
  function li(t) {
    var e = Error(u(418, ""));
    throw (Ha(Ce(e, t)), sr);
  }
  function ph(t) {
    var e = t.stateNode,
      n = t.type,
      l = t.memoizedProps;
    switch (((e[It] = t), (e[ce] = l), n)) {
      case "dialog":
        ht("cancel", e), ht("close", e);
        break;
      case "iframe":
      case "object":
      case "embed":
        ht("load", e);
        break;
      case "video":
      case "audio":
        for (n = 0; n < ol.length; n++) ht(ol[n], e);
        break;
      case "source":
        ht("error", e);
        break;
      case "img":
      case "image":
      case "link":
        ht("error", e), ht("load", e);
        break;
      case "details":
        ht("toggle", e);
        break;
      case "input":
        ht("invalid", e),
          _f(
            e,
            l.value,
            l.defaultValue,
            l.checked,
            l.defaultChecked,
            l.type,
            l.name,
            !0
          ),
          Wl(e);
        break;
      case "select":
        ht("invalid", e);
        break;
      case "textarea":
        ht("invalid", e), Uf(e, l.value, l.defaultValue, l.children), Wl(e);
    }
    (n = l.children),
      (typeof n != "string" && typeof n != "number" && typeof n != "bigint") ||
      e.textContent === "" + n ||
      l.suppressHydrationWarning === !0 ||
      Rm(e.textContent, n)
        ? (l.popover != null && (ht("beforetoggle", e), ht("toggle", e)),
          l.onScroll != null && ht("scroll", e),
          l.onScrollEnd != null && ht("scrollend", e),
          l.onClick != null && (e.onclick = Gs),
          (e = !0))
        : (e = !1),
      e || li(t);
  }
  function yh(t) {
    for (ue = t.return; ue; )
      switch (ue.tag) {
        case 3:
        case 27:
          Fe = !0;
          return;
        case 5:
        case 13:
          Fe = !1;
          return;
        default:
          ue = ue.return;
      }
  }
  function La(t) {
    if (t !== ue) return !1;
    if (!yt) return yh(t), (yt = !0), !1;
    var e = !1,
      n;
    if (
      ((n = t.tag !== 3 && t.tag !== 27) &&
        ((n = t.tag === 5) &&
          ((n = t.type),
          (n =
            !(n !== "form" && n !== "button") || Oo(t.type, t.memoizedProps))),
        (n = !n)),
      n && (e = !0),
      e && kt && li(t),
      yh(t),
      t.tag === 13)
    ) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
        throw Error(u(317));
      t: {
        for (t = t.nextSibling, e = 0; t; ) {
          if (t.nodeType === 8)
            if (((n = t.data), n === "/$")) {
              if (e === 0) {
                kt = Xe(t.nextSibling);
                break t;
              }
              e--;
            } else (n !== "$" && n !== "$!" && n !== "$?") || e++;
          t = t.nextSibling;
        }
        kt = null;
      }
    } else kt = ue ? Xe(t.stateNode.nextSibling) : null;
    return !0;
  }
  function ja() {
    (kt = ue = null), (yt = !1);
  }
  function Ha(t) {
    Ye === null ? (Ye = [t]) : Ye.push(t);
  }
  var qa = Error(u(460)),
    gh = Error(u(474)),
    ur = { then: function () {} };
  function vh(t) {
    return (t = t.status), t === "fulfilled" || t === "rejected";
  }
  function fs() {}
  function Sh(t, e, n) {
    switch (
      ((n = t[n]),
      n === void 0 ? t.push(e) : n !== e && (e.then(fs, fs), (e = n)),
      e.status)
    ) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw ((t = e.reason), t === qa ? Error(u(483)) : t);
      default:
        if (typeof e.status == "string") e.then(fs, fs);
        else {
          if (((t = Et), t !== null && 100 < t.shellSuspendCounter))
            throw Error(u(482));
          (t = e),
            (t.status = "pending"),
            t.then(
              function (l) {
                if (e.status === "pending") {
                  var r = e;
                  (r.status = "fulfilled"), (r.value = l);
                }
              },
              function (l) {
                if (e.status === "pending") {
                  var r = e;
                  (r.status = "rejected"), (r.reason = l);
                }
              }
            );
        }
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw ((t = e.reason), t === qa ? Error(u(483)) : t);
        }
        throw ((Ya = e), qa);
    }
  }
  var Ya = null;
  function bh() {
    if (Ya === null) throw Error(u(459));
    var t = Ya;
    return (Ya = null), t;
  }
  var Xi = null,
    Ga = 0;
  function hs(t) {
    var e = Ga;
    return (Ga += 1), Xi === null && (Xi = []), Sh(Xi, t, e);
  }
  function Xa(t, e) {
    (e = e.props.ref), (t.ref = e !== void 0 ? e : null);
  }
  function ds(t, e) {
    throw e.$$typeof === h
      ? Error(u(525))
      : ((t = Object.prototype.toString.call(e)),
        Error(
          u(
            31,
            t === "[object Object]"
              ? "object with keys {" + Object.keys(e).join(", ") + "}"
              : t
          )
        ));
  }
  function Th(t) {
    var e = t._init;
    return e(t._payload);
  }
  function Ah(t) {
    function e(D, E) {
      if (t) {
        var x = D.deletions;
        x === null ? ((D.deletions = [E]), (D.flags |= 16)) : x.push(E);
      }
    }
    function n(D, E) {
      if (!t) return null;
      for (; E !== null; ) e(D, E), (E = E.sibling);
      return null;
    }
    function l(D) {
      for (var E = new Map(); D !== null; )
        D.key !== null ? E.set(D.key, D) : E.set(D.index, D), (D = D.sibling);
      return E;
    }
    function r(D, E) {
      return (D = Hn(D, E)), (D.index = 0), (D.sibling = null), D;
    }
    function o(D, E, x) {
      return (
        (D.index = x),
        t
          ? ((x = D.alternate),
            x !== null
              ? ((x = x.index), x < E ? ((D.flags |= 33554434), E) : x)
              : ((D.flags |= 33554434), E))
          : ((D.flags |= 1048576), E)
      );
    }
    function d(D) {
      return t && D.alternate === null && (D.flags |= 33554434), D;
    }
    function v(D, E, x, B) {
      return E === null || E.tag !== 6
        ? ((E = eo(x, D.mode, B)), (E.return = D), E)
        : ((E = r(E, x)), (E.return = D), E);
    }
    function b(D, E, x, B) {
      var Q = x.type;
      return Q === y
        ? z(D, E, x.props.children, B, x.key)
        : E !== null &&
          (E.elementType === Q ||
            (typeof Q == "object" &&
              Q !== null &&
              Q.$$typeof === q &&
              Th(Q) === E.type))
        ? ((E = r(E, x.props)), Xa(E, x), (E.return = D), E)
        : ((E = ws(x.type, x.key, x.props, null, D.mode, B)),
          Xa(E, x),
          (E.return = D),
          E);
    }
    function R(D, E, x, B) {
      return E === null ||
        E.tag !== 4 ||
        E.stateNode.containerInfo !== x.containerInfo ||
        E.stateNode.implementation !== x.implementation
        ? ((E = no(x, D.mode, B)), (E.return = D), E)
        : ((E = r(E, x.children || [])), (E.return = D), E);
    }
    function z(D, E, x, B, Q) {
      return E === null || E.tag !== 7
        ? ((E = pi(x, D.mode, B, Q)), (E.return = D), E)
        : ((E = r(E, x)), (E.return = D), E);
    }
    function L(D, E, x) {
      if (
        (typeof E == "string" && E !== "") ||
        typeof E == "number" ||
        typeof E == "bigint"
      )
        return (E = eo("" + E, D.mode, x)), (E.return = D), E;
      if (typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case f:
            return (
              (x = ws(E.type, E.key, E.props, null, D.mode, x)),
              Xa(x, E),
              (x.return = D),
              x
            );
          case m:
            return (E = no(E, D.mode, x)), (E.return = D), E;
          case q:
            var B = E._init;
            return (E = B(E._payload)), L(D, E, x);
        }
        if (W(E) || $(E))
          return (E = pi(E, D.mode, x, null)), (E.return = D), E;
        if (typeof E.then == "function") return L(D, hs(E), x);
        if (E.$$typeof === M) return L(D, Ms(D, E), x);
        ds(D, E);
      }
      return null;
    }
    function C(D, E, x, B) {
      var Q = E !== null ? E.key : null;
      if (
        (typeof x == "string" && x !== "") ||
        typeof x == "number" ||
        typeof x == "bigint"
      )
        return Q !== null ? null : v(D, E, "" + x, B);
      if (typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case f:
            return x.key === Q ? b(D, E, x, B) : null;
          case m:
            return x.key === Q ? R(D, E, x, B) : null;
          case q:
            return (Q = x._init), (x = Q(x._payload)), C(D, E, x, B);
        }
        if (W(x) || $(x)) return Q !== null ? null : z(D, E, x, B, null);
        if (typeof x.then == "function") return C(D, E, hs(x), B);
        if (x.$$typeof === M) return C(D, E, Ms(D, x), B);
        ds(D, x);
      }
      return null;
    }
    function V(D, E, x, B, Q) {
      if (
        (typeof B == "string" && B !== "") ||
        typeof B == "number" ||
        typeof B == "bigint"
      )
        return (D = D.get(x) || null), v(E, D, "" + B, Q);
      if (typeof B == "object" && B !== null) {
        switch (B.$$typeof) {
          case f:
            return (
              (D = D.get(B.key === null ? x : B.key) || null), b(E, D, B, Q)
            );
          case m:
            return (
              (D = D.get(B.key === null ? x : B.key) || null), R(E, D, B, Q)
            );
          case q:
            var ct = B._init;
            return (B = ct(B._payload)), V(D, E, x, B, Q);
        }
        if (W(B) || $(B)) return (D = D.get(x) || null), z(E, D, B, Q, null);
        if (typeof B.then == "function") return V(D, E, x, hs(B), Q);
        if (B.$$typeof === M) return V(D, E, x, Ms(E, B), Q);
        ds(E, B);
      }
      return null;
    }
    function Z(D, E, x, B) {
      for (
        var Q = null, ct = null, k = E, I = (E = 0), Ft = null;
        k !== null && I < x.length;
        I++
      ) {
        k.index > I ? ((Ft = k), (k = null)) : (Ft = k.sibling);
        var gt = C(D, k, x[I], B);
        if (gt === null) {
          k === null && (k = Ft);
          break;
        }
        t && k && gt.alternate === null && e(D, k),
          (E = o(gt, E, I)),
          ct === null ? (Q = gt) : (ct.sibling = gt),
          (ct = gt),
          (k = Ft);
      }
      if (I === x.length) return n(D, k), yt && ai(D, I), Q;
      if (k === null) {
        for (; I < x.length; I++)
          (k = L(D, x[I], B)),
            k !== null &&
              ((E = o(k, E, I)),
              ct === null ? (Q = k) : (ct.sibling = k),
              (ct = k));
        return yt && ai(D, I), Q;
      }
      for (k = l(k); I < x.length; I++)
        (Ft = V(k, D, I, x[I], B)),
          Ft !== null &&
            (t &&
              Ft.alternate !== null &&
              k.delete(Ft.key === null ? I : Ft.key),
            (E = o(Ft, E, I)),
            ct === null ? (Q = Ft) : (ct.sibling = Ft),
            (ct = Ft));
      return (
        t &&
          k.forEach(function (Zn) {
            return e(D, Zn);
          }),
        yt && ai(D, I),
        Q
      );
    }
    function lt(D, E, x, B) {
      if (x == null) throw Error(u(151));
      for (
        var Q = null, ct = null, k = E, I = (E = 0), Ft = null, gt = x.next();
        k !== null && !gt.done;
        I++, gt = x.next()
      ) {
        k.index > I ? ((Ft = k), (k = null)) : (Ft = k.sibling);
        var Zn = C(D, k, gt.value, B);
        if (Zn === null) {
          k === null && (k = Ft);
          break;
        }
        t && k && Zn.alternate === null && e(D, k),
          (E = o(Zn, E, I)),
          ct === null ? (Q = Zn) : (ct.sibling = Zn),
          (ct = Zn),
          (k = Ft);
      }
      if (gt.done) return n(D, k), yt && ai(D, I), Q;
      if (k === null) {
        for (; !gt.done; I++, gt = x.next())
          (gt = L(D, gt.value, B)),
            gt !== null &&
              ((E = o(gt, E, I)),
              ct === null ? (Q = gt) : (ct.sibling = gt),
              (ct = gt));
        return yt && ai(D, I), Q;
      }
      for (k = l(k); !gt.done; I++, gt = x.next())
        (gt = V(k, D, I, gt.value, B)),
          gt !== null &&
            (t &&
              gt.alternate !== null &&
              k.delete(gt.key === null ? I : gt.key),
            (E = o(gt, E, I)),
            ct === null ? (Q = gt) : (ct.sibling = gt),
            (ct = gt));
      return (
        t &&
          k.forEach(function (n1) {
            return e(D, n1);
          }),
        yt && ai(D, I),
        Q
      );
    }
    function Ut(D, E, x, B) {
      if (
        (typeof x == "object" &&
          x !== null &&
          x.type === y &&
          x.key === null &&
          (x = x.props.children),
        typeof x == "object" && x !== null)
      ) {
        switch (x.$$typeof) {
          case f:
            t: {
              for (var Q = x.key; E !== null; ) {
                if (E.key === Q) {
                  if (((Q = x.type), Q === y)) {
                    if (E.tag === 7) {
                      n(D, E.sibling),
                        (B = r(E, x.props.children)),
                        (B.return = D),
                        (D = B);
                      break t;
                    }
                  } else if (
                    E.elementType === Q ||
                    (typeof Q == "object" &&
                      Q !== null &&
                      Q.$$typeof === q &&
                      Th(Q) === E.type)
                  ) {
                    n(D, E.sibling),
                      (B = r(E, x.props)),
                      Xa(B, x),
                      (B.return = D),
                      (D = B);
                    break t;
                  }
                  n(D, E);
                  break;
                } else e(D, E);
                E = E.sibling;
              }
              x.type === y
                ? ((B = pi(x.props.children, D.mode, B, x.key)),
                  (B.return = D),
                  (D = B))
                : ((B = ws(x.type, x.key, x.props, null, D.mode, B)),
                  Xa(B, x),
                  (B.return = D),
                  (D = B));
            }
            return d(D);
          case m:
            t: {
              for (Q = x.key; E !== null; ) {
                if (E.key === Q)
                  if (
                    E.tag === 4 &&
                    E.stateNode.containerInfo === x.containerInfo &&
                    E.stateNode.implementation === x.implementation
                  ) {
                    n(D, E.sibling),
                      (B = r(E, x.children || [])),
                      (B.return = D),
                      (D = B);
                    break t;
                  } else {
                    n(D, E);
                    break;
                  }
                else e(D, E);
                E = E.sibling;
              }
              (B = no(x, D.mode, B)), (B.return = D), (D = B);
            }
            return d(D);
          case q:
            return (Q = x._init), (x = Q(x._payload)), Ut(D, E, x, B);
        }
        if (W(x)) return Z(D, E, x, B);
        if ($(x)) {
          if (((Q = $(x)), typeof Q != "function")) throw Error(u(150));
          return (x = Q.call(x)), lt(D, E, x, B);
        }
        if (typeof x.then == "function") return Ut(D, E, hs(x), B);
        if (x.$$typeof === M) return Ut(D, E, Ms(D, x), B);
        ds(D, x);
      }
      return (typeof x == "string" && x !== "") ||
        typeof x == "number" ||
        typeof x == "bigint"
        ? ((x = "" + x),
          E !== null && E.tag === 6
            ? (n(D, E.sibling), (B = r(E, x)), (B.return = D), (D = B))
            : (n(D, E), (B = eo(x, D.mode, B)), (B.return = D), (D = B)),
          d(D))
        : n(D, E);
    }
    return function (D, E, x, B) {
      try {
        Ga = 0;
        var Q = Ut(D, E, x, B);
        return (Xi = null), Q;
      } catch (k) {
        if (k === qa) throw k;
        var ct = Be(29, k, null, D.mode);
        return (ct.lanes = B), (ct.return = D), ct;
      } finally {
      }
    };
  }
  var si = Ah(!0),
    Eh = Ah(!1),
    Ki = St(null),
    ms = St(0);
  function Rh(t, e) {
    (t = gn), xt(ms, t), xt(Ki, e), (gn = t | e.baseLanes);
  }
  function rr() {
    xt(ms, gn), xt(Ki, Ki.current);
  }
  function or() {
    (gn = ms.current), jt(Ki), jt(ms);
  }
  var Ue = St(null),
    ke = null;
  function Mn(t) {
    var e = t.alternate;
    xt(Xt, Xt.current & 1),
      xt(Ue, t),
      ke === null &&
        (e === null || Ki.current !== null || e.memoizedState !== null) &&
        (ke = t);
  }
  function Dh(t) {
    if (t.tag === 22) {
      if ((xt(Xt, Xt.current), xt(Ue, t), ke === null)) {
        var e = t.alternate;
        e !== null && e.memoizedState !== null && (ke = t);
      }
    } else Cn();
  }
  function Cn() {
    xt(Xt, Xt.current), xt(Ue, Ue.current);
  }
  function un(t) {
    jt(Ue), ke === t && (ke = null), jt(Xt);
  }
  var Xt = St(0);
  function ps(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var n = e.memoizedState;
        if (
          n !== null &&
          ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
        )
          return e;
      } else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
        if ((e.flags & 128) !== 0) return e;
      } else if (e.child !== null) {
        (e.child.return = e), (e = e.child);
        continue;
      }
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return null;
        e = e.return;
      }
      (e.sibling.return = e.return), (e = e.sibling);
    }
    return null;
  }
  var Xv =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var t = [],
              e = (this.signal = {
                aborted: !1,
                addEventListener: function (n, l) {
                  t.push(l);
                },
              });
            this.abort = function () {
              (e.aborted = !0),
                t.forEach(function (n) {
                  return n();
                });
            };
          },
    Kv = i.unstable_scheduleCallback,
    Qv = i.unstable_NormalPriority,
    Kt = {
      $$typeof: M,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function cr() {
    return { controller: new Xv(), data: new Map(), refCount: 0 };
  }
  function Ka(t) {
    t.refCount--,
      t.refCount === 0 &&
        Kv(Qv, function () {
          t.controller.abort();
        });
  }
  var Qa = null,
    fr = 0,
    Qi = 0,
    Zi = null;
  function Zv(t, e) {
    if (Qa === null) {
      var n = (Qa = []);
      (fr = 0),
        (Qi = vo()),
        (Zi = {
          status: "pending",
          value: void 0,
          then: function (l) {
            n.push(l);
          },
        });
    }
    return fr++, e.then(xh, xh), e;
  }
  function xh() {
    if (--fr === 0 && Qa !== null) {
      Zi !== null && (Zi.status = "fulfilled");
      var t = Qa;
      (Qa = null), (Qi = 0), (Zi = null);
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function Pv(t, e) {
    var n = [],
      l = {
        status: "pending",
        value: null,
        reason: null,
        then: function (r) {
          n.push(r);
        },
      };
    return (
      t.then(
        function () {
          (l.status = "fulfilled"), (l.value = e);
          for (var r = 0; r < n.length; r++) (0, n[r])(e);
        },
        function (r) {
          for (l.status = "rejected", l.reason = r, r = 0; r < n.length; r++)
            (0, n[r])(void 0);
        }
      ),
      l
    );
  }
  var Oh = X.S;
  X.S = function (t, e) {
    typeof e == "object" &&
      e !== null &&
      typeof e.then == "function" &&
      Zv(t, e),
      Oh !== null && Oh(t, e);
  };
  var ui = St(null);
  function hr() {
    var t = ui.current;
    return t !== null ? t : Et.pooledCache;
  }
  function ys(t, e) {
    e === null ? xt(ui, ui.current) : xt(ui, e.pool);
  }
  function Mh() {
    var t = hr();
    return t === null ? null : { parent: Kt._currentValue, pool: t };
  }
  var _n = 0,
    ot = null,
    bt = null,
    Ht = null,
    gs = !1,
    Pi = !1,
    ri = !1,
    vs = 0,
    Za = 0,
    Fi = null,
    Fv = 0;
  function Bt() {
    throw Error(u(321));
  }
  function dr(t, e) {
    if (e === null) return !1;
    for (var n = 0; n < e.length && n < t.length; n++)
      if (!ye(t[n], e[n])) return !1;
    return !0;
  }
  function mr(t, e, n, l, r, o) {
    return (
      (_n = o),
      (ot = e),
      (e.memoizedState = null),
      (e.updateQueue = null),
      (e.lanes = 0),
      (X.H = t === null || t.memoizedState === null ? oi : wn),
      (ri = !1),
      (o = n(l, r)),
      (ri = !1),
      Pi && (o = _h(e, n, l, r)),
      Ch(t),
      o
    );
  }
  function Ch(t) {
    X.H = Je;
    var e = bt !== null && bt.next !== null;
    if (((_n = 0), (Ht = bt = ot = null), (gs = !1), (Za = 0), (Fi = null), e))
      throw Error(u(300));
    t === null ||
      Zt ||
      ((t = t.dependencies), t !== null && Os(t) && (Zt = !0));
  }
  function _h(t, e, n, l) {
    ot = t;
    var r = 0;
    do {
      if ((Pi && (Fi = null), (Za = 0), (Pi = !1), 25 <= r))
        throw Error(u(301));
      if (((r += 1), (Ht = bt = null), t.updateQueue != null)) {
        var o = t.updateQueue;
        (o.lastEffect = null),
          (o.events = null),
          (o.stores = null),
          o.memoCache != null && (o.memoCache.index = 0);
      }
      (X.H = ci), (o = e(n, l));
    } while (Pi);
    return o;
  }
  function kv() {
    var t = X.H,
      e = t.useState()[0];
    return (
      (e = typeof e.then == "function" ? Pa(e) : e),
      (t = t.useState()[0]),
      (bt !== null ? bt.memoizedState : null) !== t && (ot.flags |= 1024),
      e
    );
  }
  function pr() {
    var t = vs !== 0;
    return (vs = 0), t;
  }
  function yr(t, e, n) {
    (e.updateQueue = t.updateQueue), (e.flags &= -2053), (t.lanes &= ~n);
  }
  function gr(t) {
    if (gs) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        e !== null && (e.pending = null), (t = t.next);
      }
      gs = !1;
    }
    (_n = 0), (Ht = bt = ot = null), (Pi = !1), (Za = vs = 0), (Fi = null);
  }
  function he() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return Ht === null ? (ot.memoizedState = Ht = t) : (Ht = Ht.next = t), Ht;
  }
  function qt() {
    if (bt === null) {
      var t = ot.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = bt.next;
    var e = Ht === null ? ot.memoizedState : Ht.next;
    if (e !== null) (Ht = e), (bt = t);
    else {
      if (t === null)
        throw ot.alternate === null ? Error(u(467)) : Error(u(310));
      (bt = t),
        (t = {
          memoizedState: bt.memoizedState,
          baseState: bt.baseState,
          baseQueue: bt.baseQueue,
          queue: bt.queue,
          next: null,
        }),
        Ht === null ? (ot.memoizedState = Ht = t) : (Ht = Ht.next = t);
    }
    return Ht;
  }
  var Ss;
  Ss = function () {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  };
  function Pa(t) {
    var e = Za;
    return (
      (Za += 1),
      Fi === null && (Fi = []),
      (t = Sh(Fi, t, e)),
      (e = ot),
      (Ht === null ? e.memoizedState : Ht.next) === null &&
        ((e = e.alternate),
        (X.H = e === null || e.memoizedState === null ? oi : wn)),
      t
    );
  }
  function bs(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return Pa(t);
      if (t.$$typeof === M) return te(t);
    }
    throw Error(u(438, String(t)));
  }
  function vr(t) {
    var e = null,
      n = ot.updateQueue;
    if ((n !== null && (e = n.memoCache), e == null)) {
      var l = ot.alternate;
      l !== null &&
        ((l = l.updateQueue),
        l !== null &&
          ((l = l.memoCache),
          l != null &&
            (e = {
              data: l.data.map(function (r) {
                return r.slice();
              }),
              index: 0,
            })));
    }
    if (
      (e == null && (e = { data: [], index: 0 }),
      n === null && ((n = Ss()), (ot.updateQueue = n)),
      (n.memoCache = e),
      (n = e.data[e.index]),
      n === void 0)
    )
      for (n = e.data[e.index] = Array(t), l = 0; l < t; l++) n[l] = nt;
    return e.index++, n;
  }
  function rn(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function Ts(t) {
    var e = qt();
    return Sr(e, bt, t);
  }
  function Sr(t, e, n) {
    var l = t.queue;
    if (l === null) throw Error(u(311));
    l.lastRenderedReducer = n;
    var r = t.baseQueue,
      o = l.pending;
    if (o !== null) {
      if (r !== null) {
        var d = r.next;
        (r.next = o.next), (o.next = d);
      }
      (e.baseQueue = r = o), (l.pending = null);
    }
    if (((o = t.baseState), r === null)) t.memoizedState = o;
    else {
      e = r.next;
      var v = (d = null),
        b = null,
        R = e,
        z = !1;
      do {
        var L = R.lane & -536870913;
        if (L !== R.lane ? (pt & L) === L : (_n & L) === L) {
          var C = R.revertLane;
          if (C === 0)
            b !== null &&
              (b = b.next =
                {
                  lane: 0,
                  revertLane: 0,
                  action: R.action,
                  hasEagerState: R.hasEagerState,
                  eagerState: R.eagerState,
                  next: null,
                }),
              L === Qi && (z = !0);
          else if ((_n & C) === C) {
            (R = R.next), C === Qi && (z = !0);
            continue;
          } else
            (L = {
              lane: 0,
              revertLane: R.revertLane,
              action: R.action,
              hasEagerState: R.hasEagerState,
              eagerState: R.eagerState,
              next: null,
            }),
              b === null ? ((v = b = L), (d = o)) : (b = b.next = L),
              (ot.lanes |= C),
              (qn |= C);
          (L = R.action),
            ri && n(o, L),
            (o = R.hasEagerState ? R.eagerState : n(o, L));
        } else
          (C = {
            lane: L,
            revertLane: R.revertLane,
            action: R.action,
            hasEagerState: R.hasEagerState,
            eagerState: R.eagerState,
            next: null,
          }),
            b === null ? ((v = b = C), (d = o)) : (b = b.next = C),
            (ot.lanes |= L),
            (qn |= L);
        R = R.next;
      } while (R !== null && R !== e);
      if (
        (b === null ? (d = o) : (b.next = v),
        !ye(o, t.memoizedState) && ((Zt = !0), z && ((n = Zi), n !== null)))
      )
        throw n;
      (t.memoizedState = o),
        (t.baseState = d),
        (t.baseQueue = b),
        (l.lastRenderedState = o);
    }
    return r === null && (l.lanes = 0), [t.memoizedState, l.dispatch];
  }
  function br(t) {
    var e = qt(),
      n = e.queue;
    if (n === null) throw Error(u(311));
    n.lastRenderedReducer = t;
    var l = n.dispatch,
      r = n.pending,
      o = e.memoizedState;
    if (r !== null) {
      n.pending = null;
      var d = (r = r.next);
      do (o = t(o, d.action)), (d = d.next);
      while (d !== r);
      ye(o, e.memoizedState) || (Zt = !0),
        (e.memoizedState = o),
        e.baseQueue === null && (e.baseState = o),
        (n.lastRenderedState = o);
    }
    return [o, l];
  }
  function wh(t, e, n) {
    var l = ot,
      r = qt(),
      o = yt;
    if (o) {
      if (n === void 0) throw Error(u(407));
      n = n();
    } else n = e();
    var d = !ye((bt || r).memoizedState, n);
    if (
      (d && ((r.memoizedState = n), (Zt = !0)),
      (r = r.queue),
      Er(zh.bind(null, l, r, t), [t]),
      r.getSnapshot !== e || d || (Ht !== null && Ht.memoizedState.tag & 1))
    ) {
      if (
        ((l.flags |= 2048),
        ki(9, Vh.bind(null, l, r, n, e), { destroy: void 0 }, null),
        Et === null)
      )
        throw Error(u(349));
      o || (_n & 60) !== 0 || Uh(l, e, n);
    }
    return n;
  }
  function Uh(t, e, n) {
    (t.flags |= 16384),
      (t = { getSnapshot: e, value: n }),
      (e = ot.updateQueue),
      e === null
        ? ((e = Ss()), (ot.updateQueue = e), (e.stores = [t]))
        : ((n = e.stores), n === null ? (e.stores = [t]) : n.push(t));
  }
  function Vh(t, e, n, l) {
    (e.value = n), (e.getSnapshot = l), Bh(e) && Nh(t);
  }
  function zh(t, e, n) {
    return n(function () {
      Bh(e) && Nh(t);
    });
  }
  function Bh(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var n = e();
      return !ye(t, n);
    } catch {
      return !0;
    }
  }
  function Nh(t) {
    var e = On(t, 2);
    e !== null && re(e, t, 2);
  }
  function Tr(t) {
    var e = he();
    if (typeof t == "function") {
      var n = t;
      if (((t = n()), ri)) {
        Rn(!0);
        try {
          n();
        } finally {
          Rn(!1);
        }
      }
    }
    return (
      (e.memoizedState = e.baseState = t),
      (e.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: rn,
        lastRenderedState: t,
      }),
      e
    );
  }
  function Lh(t, e, n, l) {
    return (t.baseState = n), Sr(t, bt, typeof l == "function" ? l : rn);
  }
  function Jv(t, e, n, l, r) {
    if (Rs(t)) throw Error(u(485));
    if (((t = e.action), t !== null)) {
      var o = {
        payload: r,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (d) {
          o.listeners.push(d);
        },
      };
      X.T !== null ? n(!0) : (o.isTransition = !1),
        l(o),
        (n = e.pending),
        n === null
          ? ((o.next = e.pending = o), jh(e, o))
          : ((o.next = n.next), (e.pending = n.next = o));
    }
  }
  function jh(t, e) {
    var n = e.action,
      l = e.payload,
      r = t.state;
    if (e.isTransition) {
      var o = X.T,
        d = {};
      X.T = d;
      try {
        var v = n(r, l),
          b = X.S;
        b !== null && b(d, v), Hh(t, e, v);
      } catch (R) {
        Ar(t, e, R);
      } finally {
        X.T = o;
      }
    } else
      try {
        (o = n(r, l)), Hh(t, e, o);
      } catch (R) {
        Ar(t, e, R);
      }
  }
  function Hh(t, e, n) {
    n !== null && typeof n == "object" && typeof n.then == "function"
      ? n.then(
          function (l) {
            qh(t, e, l);
          },
          function (l) {
            return Ar(t, e, l);
          }
        )
      : qh(t, e, n);
  }
  function qh(t, e, n) {
    (e.status = "fulfilled"),
      (e.value = n),
      Yh(e),
      (t.state = n),
      (e = t.pending),
      e !== null &&
        ((n = e.next),
        n === e ? (t.pending = null) : ((n = n.next), (e.next = n), jh(t, n)));
  }
  function Ar(t, e, n) {
    var l = t.pending;
    if (((t.pending = null), l !== null)) {
      l = l.next;
      do (e.status = "rejected"), (e.reason = n), Yh(e), (e = e.next);
      while (e !== l);
    }
    t.action = null;
  }
  function Yh(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function Gh(t, e) {
    return e;
  }
  function Xh(t, e) {
    if (yt) {
      var n = Et.formState;
      if (n !== null) {
        t: {
          var l = ot;
          if (yt) {
            if (kt) {
              e: {
                for (var r = kt, o = Fe; r.nodeType !== 8; ) {
                  if (!o) {
                    r = null;
                    break e;
                  }
                  if (((r = Xe(r.nextSibling)), r === null)) {
                    r = null;
                    break e;
                  }
                }
                (o = r.data), (r = o === "F!" || o === "F" ? r : null);
              }
              if (r) {
                (kt = Xe(r.nextSibling)), (l = r.data === "F!");
                break t;
              }
            }
            li(l);
          }
          l = !1;
        }
        l && (e = n[0]);
      }
    }
    return (
      (n = he()),
      (n.memoizedState = n.baseState = e),
      (l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Gh,
        lastRenderedState: e,
      }),
      (n.queue = l),
      (n = ud.bind(null, ot, l)),
      (l.dispatch = n),
      (l = Tr(!1)),
      (o = Mr.bind(null, ot, !1, l.queue)),
      (l = he()),
      (r = { state: e, dispatch: null, action: t, pending: null }),
      (l.queue = r),
      (n = Jv.bind(null, ot, r, o, n)),
      (r.dispatch = n),
      (l.memoizedState = t),
      [e, n, !1]
    );
  }
  function Kh(t) {
    var e = qt();
    return Qh(e, bt, t);
  }
  function Qh(t, e, n) {
    (e = Sr(t, e, Gh)[0]),
      (t = Ts(rn)[0]),
      (e =
        typeof e == "object" && e !== null && typeof e.then == "function"
          ? Pa(e)
          : e);
    var l = qt(),
      r = l.queue,
      o = r.dispatch;
    return (
      n !== l.memoizedState &&
        ((ot.flags |= 2048),
        ki(9, Wv.bind(null, r, n), { destroy: void 0 }, null)),
      [e, o, t]
    );
  }
  function Wv(t, e) {
    t.action = e;
  }
  function Zh(t) {
    var e = qt(),
      n = bt;
    if (n !== null) return Qh(e, n, t);
    qt(), (e = e.memoizedState), (n = qt());
    var l = n.queue.dispatch;
    return (n.memoizedState = t), [e, l, !1];
  }
  function ki(t, e, n, l) {
    return (
      (t = { tag: t, create: e, inst: n, deps: l, next: null }),
      (e = ot.updateQueue),
      e === null && ((e = Ss()), (ot.updateQueue = e)),
      (n = e.lastEffect),
      n === null
        ? (e.lastEffect = t.next = t)
        : ((l = n.next), (n.next = t), (t.next = l), (e.lastEffect = t)),
      t
    );
  }
  function Ph() {
    return qt().memoizedState;
  }
  function As(t, e, n, l) {
    var r = he();
    (ot.flags |= t),
      (r.memoizedState = ki(
        1 | e,
        n,
        { destroy: void 0 },
        l === void 0 ? null : l
      ));
  }
  function Es(t, e, n, l) {
    var r = qt();
    l = l === void 0 ? null : l;
    var o = r.memoizedState.inst;
    bt !== null && l !== null && dr(l, bt.memoizedState.deps)
      ? (r.memoizedState = ki(e, n, o, l))
      : ((ot.flags |= t), (r.memoizedState = ki(1 | e, n, o, l)));
  }
  function Fh(t, e) {
    As(8390656, 8, t, e);
  }
  function Er(t, e) {
    Es(2048, 8, t, e);
  }
  function kh(t, e) {
    return Es(4, 2, t, e);
  }
  function Jh(t, e) {
    return Es(4, 4, t, e);
  }
  function Wh(t, e) {
    if (typeof e == "function") {
      t = t();
      var n = e(t);
      return function () {
        typeof n == "function" ? n() : e(null);
      };
    }
    if (e != null)
      return (
        (t = t()),
        (e.current = t),
        function () {
          e.current = null;
        }
      );
  }
  function $h(t, e, n) {
    (n = n != null ? n.concat([t]) : null), Es(4, 4, Wh.bind(null, e, t), n);
  }
  function Rr() {}
  function Ih(t, e) {
    var n = qt();
    e = e === void 0 ? null : e;
    var l = n.memoizedState;
    return e !== null && dr(e, l[1]) ? l[0] : ((n.memoizedState = [t, e]), t);
  }
  function td(t, e) {
    var n = qt();
    e = e === void 0 ? null : e;
    var l = n.memoizedState;
    if (e !== null && dr(e, l[1])) return l[0];
    if (((l = t()), ri)) {
      Rn(!0);
      try {
        t();
      } finally {
        Rn(!1);
      }
    }
    return (n.memoizedState = [l, e]), l;
  }
  function Dr(t, e, n) {
    return n === void 0 || (_n & 1073741824) !== 0
      ? (t.memoizedState = e)
      : ((t.memoizedState = n), (t = nm()), (ot.lanes |= t), (qn |= t), n);
  }
  function ed(t, e, n, l) {
    return ye(n, e)
      ? n
      : Ki.current !== null
      ? ((t = Dr(t, n, l)), ye(t, e) || (Zt = !0), t)
      : (_n & 42) === 0
      ? ((Zt = !0), (t.memoizedState = n))
      : ((t = nm()), (ot.lanes |= t), (qn |= t), e);
  }
  function nd(t, e, n, l, r) {
    var o = K.p;
    K.p = o !== 0 && 8 > o ? o : 8;
    var d = X.T,
      v = {};
    (X.T = v), Mr(t, !1, e, n);
    try {
      var b = r(),
        R = X.S;
      if (
        (R !== null && R(v, b),
        b !== null && typeof b == "object" && typeof b.then == "function")
      ) {
        var z = Pv(b, l);
        Fa(t, e, z, be(t));
      } else Fa(t, e, l, be(t));
    } catch (L) {
      Fa(t, e, { then: function () {}, status: "rejected", reason: L }, be());
    } finally {
      (K.p = o), (X.T = d);
    }
  }
  function $v() {}
  function xr(t, e, n, l) {
    if (t.tag !== 5) throw Error(u(476));
    var r = id(t).queue;
    nd(
      t,
      r,
      e,
      mt,
      n === null
        ? $v
        : function () {
            return ad(t), n(l);
          }
    );
  }
  function id(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: mt,
      baseState: mt,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: rn,
        lastRenderedState: mt,
      },
      next: null,
    };
    var n = {};
    return (
      (e.next = {
        memoizedState: n,
        baseState: n,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: rn,
          lastRenderedState: n,
        },
        next: null,
      }),
      (t.memoizedState = e),
      (t = t.alternate),
      t !== null && (t.memoizedState = e),
      e
    );
  }
  function ad(t) {
    var e = id(t).next.queue;
    Fa(t, e, {}, be());
  }
  function Or() {
    return te(ml);
  }
  function ld() {
    return qt().memoizedState;
  }
  function sd() {
    return qt().memoizedState;
  }
  function Iv(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var n = be();
          t = zn(n);
          var l = Bn(e, t, n);
          l !== null && (re(l, e, n), Wa(l, e, n)),
            (e = { cache: cr() }),
            (t.payload = e);
          return;
      }
      e = e.return;
    }
  }
  function tS(t, e, n) {
    var l = be();
    (n = {
      lane: l,
      revertLane: 0,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      Rs(t)
        ? rd(e, n)
        : ((n = ir(t, e, n, l)), n !== null && (re(n, t, l), od(n, e, l)));
  }
  function ud(t, e, n) {
    var l = be();
    Fa(t, e, n, l);
  }
  function Fa(t, e, n, l) {
    var r = {
      lane: l,
      revertLane: 0,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (Rs(t)) rd(e, r);
    else {
      var o = t.alternate;
      if (
        t.lanes === 0 &&
        (o === null || o.lanes === 0) &&
        ((o = e.lastRenderedReducer), o !== null)
      )
        try {
          var d = e.lastRenderedState,
            v = o(d, n);
          if (((r.hasEagerState = !0), (r.eagerState = v), ye(v, d)))
            return us(t, e, r, 0), Et === null && ss(), !1;
        } catch {
        } finally {
        }
      if (((n = ir(t, e, r, l)), n !== null))
        return re(n, t, l), od(n, e, l), !0;
    }
    return !1;
  }
  function Mr(t, e, n, l) {
    if (
      ((l = {
        lane: 2,
        revertLane: vo(),
        action: l,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Rs(t))
    ) {
      if (e) throw Error(u(479));
    } else (e = ir(t, n, l, 2)), e !== null && re(e, t, 2);
  }
  function Rs(t) {
    var e = t.alternate;
    return t === ot || (e !== null && e === ot);
  }
  function rd(t, e) {
    Pi = gs = !0;
    var n = t.pending;
    n === null ? (e.next = e) : ((e.next = n.next), (n.next = e)),
      (t.pending = e);
  }
  function od(t, e, n) {
    if ((n & 4194176) !== 0) {
      var l = e.lanes;
      (l &= t.pendingLanes), (n |= l), (e.lanes = n), bf(t, n);
    }
  }
  var Je = {
    readContext: te,
    use: bs,
    useCallback: Bt,
    useContext: Bt,
    useEffect: Bt,
    useImperativeHandle: Bt,
    useLayoutEffect: Bt,
    useInsertionEffect: Bt,
    useMemo: Bt,
    useReducer: Bt,
    useRef: Bt,
    useState: Bt,
    useDebugValue: Bt,
    useDeferredValue: Bt,
    useTransition: Bt,
    useSyncExternalStore: Bt,
    useId: Bt,
  };
  (Je.useCacheRefresh = Bt),
    (Je.useMemoCache = Bt),
    (Je.useHostTransitionStatus = Bt),
    (Je.useFormState = Bt),
    (Je.useActionState = Bt),
    (Je.useOptimistic = Bt);
  var oi = {
    readContext: te,
    use: bs,
    useCallback: function (t, e) {
      return (he().memoizedState = [t, e === void 0 ? null : e]), t;
    },
    useContext: te,
    useEffect: Fh,
    useImperativeHandle: function (t, e, n) {
      (n = n != null ? n.concat([t]) : null),
        As(4194308, 4, Wh.bind(null, e, t), n);
    },
    useLayoutEffect: function (t, e) {
      return As(4194308, 4, t, e);
    },
    useInsertionEffect: function (t, e) {
      As(4, 2, t, e);
    },
    useMemo: function (t, e) {
      var n = he();
      e = e === void 0 ? null : e;
      var l = t();
      if (ri) {
        Rn(!0);
        try {
          t();
        } finally {
          Rn(!1);
        }
      }
      return (n.memoizedState = [l, e]), l;
    },
    useReducer: function (t, e, n) {
      var l = he();
      if (n !== void 0) {
        var r = n(e);
        if (ri) {
          Rn(!0);
          try {
            n(e);
          } finally {
            Rn(!1);
          }
        }
      } else r = e;
      return (
        (l.memoizedState = l.baseState = r),
        (t = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: t,
          lastRenderedState: r,
        }),
        (l.queue = t),
        (t = t.dispatch = tS.bind(null, ot, t)),
        [l.memoizedState, t]
      );
    },
    useRef: function (t) {
      var e = he();
      return (t = { current: t }), (e.memoizedState = t);
    },
    useState: function (t) {
      t = Tr(t);
      var e = t.queue,
        n = ud.bind(null, ot, e);
      return (e.dispatch = n), [t.memoizedState, n];
    },
    useDebugValue: Rr,
    useDeferredValue: function (t, e) {
      var n = he();
      return Dr(n, t, e);
    },
    useTransition: function () {
      var t = Tr(!1);
      return (
        (t = nd.bind(null, ot, t.queue, !0, !1)),
        (he().memoizedState = t),
        [!1, t]
      );
    },
    useSyncExternalStore: function (t, e, n) {
      var l = ot,
        r = he();
      if (yt) {
        if (n === void 0) throw Error(u(407));
        n = n();
      } else {
        if (((n = e()), Et === null)) throw Error(u(349));
        (pt & 60) !== 0 || Uh(l, e, n);
      }
      r.memoizedState = n;
      var o = { value: n, getSnapshot: e };
      return (
        (r.queue = o),
        Fh(zh.bind(null, l, o, t), [t]),
        (l.flags |= 2048),
        ki(9, Vh.bind(null, l, o, n, e), { destroy: void 0 }, null),
        n
      );
    },
    useId: function () {
      var t = he(),
        e = Et.identifierPrefix;
      if (yt) {
        var n = sn,
          l = ln;
        (n = (l & ~(1 << (32 - pe(l) - 1))).toString(32) + n),
          (e = ":" + e + "R" + n),
          (n = vs++),
          0 < n && (e += "H" + n.toString(32)),
          (e += ":");
      } else (n = Fv++), (e = ":" + e + "r" + n.toString(32) + ":");
      return (t.memoizedState = e);
    },
    useCacheRefresh: function () {
      return (he().memoizedState = Iv.bind(null, ot));
    },
  };
  (oi.useMemoCache = vr),
    (oi.useHostTransitionStatus = Or),
    (oi.useFormState = Xh),
    (oi.useActionState = Xh),
    (oi.useOptimistic = function (t) {
      var e = he();
      e.memoizedState = e.baseState = t;
      var n = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null,
      };
      return (
        (e.queue = n), (e = Mr.bind(null, ot, !0, n)), (n.dispatch = e), [t, e]
      );
    });
  var wn = {
    readContext: te,
    use: bs,
    useCallback: Ih,
    useContext: te,
    useEffect: Er,
    useImperativeHandle: $h,
    useInsertionEffect: kh,
    useLayoutEffect: Jh,
    useMemo: td,
    useReducer: Ts,
    useRef: Ph,
    useState: function () {
      return Ts(rn);
    },
    useDebugValue: Rr,
    useDeferredValue: function (t, e) {
      var n = qt();
      return ed(n, bt.memoizedState, t, e);
    },
    useTransition: function () {
      var t = Ts(rn)[0],
        e = qt().memoizedState;
      return [typeof t == "boolean" ? t : Pa(t), e];
    },
    useSyncExternalStore: wh,
    useId: ld,
  };
  (wn.useCacheRefresh = sd),
    (wn.useMemoCache = vr),
    (wn.useHostTransitionStatus = Or),
    (wn.useFormState = Kh),
    (wn.useActionState = Kh),
    (wn.useOptimistic = function (t, e) {
      var n = qt();
      return Lh(n, bt, t, e);
    });
  var ci = {
    readContext: te,
    use: bs,
    useCallback: Ih,
    useContext: te,
    useEffect: Er,
    useImperativeHandle: $h,
    useInsertionEffect: kh,
    useLayoutEffect: Jh,
    useMemo: td,
    useReducer: br,
    useRef: Ph,
    useState: function () {
      return br(rn);
    },
    useDebugValue: Rr,
    useDeferredValue: function (t, e) {
      var n = qt();
      return bt === null ? Dr(n, t, e) : ed(n, bt.memoizedState, t, e);
    },
    useTransition: function () {
      var t = br(rn)[0],
        e = qt().memoizedState;
      return [typeof t == "boolean" ? t : Pa(t), e];
    },
    useSyncExternalStore: wh,
    useId: ld,
  };
  (ci.useCacheRefresh = sd),
    (ci.useMemoCache = vr),
    (ci.useHostTransitionStatus = Or),
    (ci.useFormState = Zh),
    (ci.useActionState = Zh),
    (ci.useOptimistic = function (t, e) {
      var n = qt();
      return bt !== null
        ? Lh(n, bt, t, e)
        : ((n.baseState = t), [t, n.queue.dispatch]);
    });
  function Cr(t, e, n, l) {
    (e = t.memoizedState),
      (n = n(l, e)),
      (n = n == null ? e : at({}, e, n)),
      (t.memoizedState = n),
      t.lanes === 0 && (t.updateQueue.baseState = n);
  }
  var _r = {
    isMounted: function (t) {
      return (t = t._reactInternals) ? F(t) === t : !1;
    },
    enqueueSetState: function (t, e, n) {
      t = t._reactInternals;
      var l = be(),
        r = zn(l);
      (r.payload = e),
        n != null && (r.callback = n),
        (e = Bn(t, r, l)),
        e !== null && (re(e, t, l), Wa(e, t, l));
    },
    enqueueReplaceState: function (t, e, n) {
      t = t._reactInternals;
      var l = be(),
        r = zn(l);
      (r.tag = 1),
        (r.payload = e),
        n != null && (r.callback = n),
        (e = Bn(t, r, l)),
        e !== null && (re(e, t, l), Wa(e, t, l));
    },
    enqueueForceUpdate: function (t, e) {
      t = t._reactInternals;
      var n = be(),
        l = zn(n);
      (l.tag = 2),
        e != null && (l.callback = e),
        (e = Bn(t, l, n)),
        e !== null && (re(e, t, n), Wa(e, t, n));
    },
  };
  function cd(t, e, n, l, r, o, d) {
    return (
      (t = t.stateNode),
      typeof t.shouldComponentUpdate == "function"
        ? t.shouldComponentUpdate(l, o, d)
        : e.prototype && e.prototype.isPureReactComponent
        ? !Ba(n, l) || !Ba(r, o)
        : !0
    );
  }
  function fd(t, e, n, l) {
    (t = e.state),
      typeof e.componentWillReceiveProps == "function" &&
        e.componentWillReceiveProps(n, l),
      typeof e.UNSAFE_componentWillReceiveProps == "function" &&
        e.UNSAFE_componentWillReceiveProps(n, l),
      e.state !== t && _r.enqueueReplaceState(e, e.state, null);
  }
  function fi(t, e) {
    var n = e;
    if ("ref" in e) {
      n = {};
      for (var l in e) l !== "ref" && (n[l] = e[l]);
    }
    if ((t = t.defaultProps)) {
      n === e && (n = at({}, n));
      for (var r in t) n[r] === void 0 && (n[r] = t[r]);
    }
    return n;
  }
  var Ds =
    typeof reportError == "function"
      ? reportError
      : function (t) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var e = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof t == "object" &&
                t !== null &&
                typeof t.message == "string"
                  ? String(t.message)
                  : String(t),
              error: t,
            });
            if (!window.dispatchEvent(e)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", t);
            return;
          }
          console.error(t);
        };
  function hd(t) {
    Ds(t);
  }
  function dd(t) {
    console.error(t);
  }
  function md(t) {
    Ds(t);
  }
  function xs(t, e) {
    try {
      var n = t.onUncaughtError;
      n(e.value, { componentStack: e.stack });
    } catch (l) {
      setTimeout(function () {
        throw l;
      });
    }
  }
  function pd(t, e, n) {
    try {
      var l = t.onCaughtError;
      l(n.value, {
        componentStack: n.stack,
        errorBoundary: e.tag === 1 ? e.stateNode : null,
      });
    } catch (r) {
      setTimeout(function () {
        throw r;
      });
    }
  }
  function wr(t, e, n) {
    return (
      (n = zn(n)),
      (n.tag = 3),
      (n.payload = { element: null }),
      (n.callback = function () {
        xs(t, e);
      }),
      n
    );
  }
  function yd(t) {
    return (t = zn(t)), (t.tag = 3), t;
  }
  function gd(t, e, n, l) {
    var r = n.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var o = l.value;
      (t.payload = function () {
        return r(o);
      }),
        (t.callback = function () {
          pd(e, n, l);
        });
    }
    var d = n.stateNode;
    d !== null &&
      typeof d.componentDidCatch == "function" &&
      (t.callback = function () {
        pd(e, n, l),
          typeof r != "function" &&
            (Yn === null ? (Yn = new Set([this])) : Yn.add(this));
        var v = l.stack;
        this.componentDidCatch(l.value, {
          componentStack: v !== null ? v : "",
        });
      });
  }
  function eS(t, e, n, l, r) {
    if (
      ((n.flags |= 32768),
      l !== null && typeof l == "object" && typeof l.then == "function")
    ) {
      if (
        ((e = n.alternate),
        e !== null && Ja(e, n, r, !0),
        (n = Ue.current),
        n !== null)
      ) {
        switch (n.tag) {
          case 13:
            return (
              ke === null ? ho() : n.alternate === null && wt === 0 && (wt = 3),
              (n.flags &= -257),
              (n.flags |= 65536),
              (n.lanes = r),
              l === ur
                ? (n.flags |= 16384)
                : ((e = n.updateQueue),
                  e === null ? (n.updateQueue = new Set([l])) : e.add(l),
                  po(t, l, r)),
              !1
            );
          case 22:
            return (
              (n.flags |= 65536),
              l === ur
                ? (n.flags |= 16384)
                : ((e = n.updateQueue),
                  e === null
                    ? ((e = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([l]),
                      }),
                      (n.updateQueue = e))
                    : ((n = e.retryQueue),
                      n === null ? (e.retryQueue = new Set([l])) : n.add(l)),
                  po(t, l, r)),
              !1
            );
        }
        throw Error(u(435, n.tag));
      }
      return po(t, l, r), ho(), !1;
    }
    if (yt)
      return (
        (e = Ue.current),
        e !== null
          ? ((e.flags & 65536) === 0 && (e.flags |= 256),
            (e.flags |= 65536),
            (e.lanes = r),
            l !== sr && ((t = Error(u(422), { cause: l })), Ha(Ce(t, n))))
          : (l !== sr && ((e = Error(u(423), { cause: l })), Ha(Ce(e, n))),
            (t = t.current.alternate),
            (t.flags |= 65536),
            (r &= -r),
            (t.lanes |= r),
            (l = Ce(l, n)),
            (r = wr(t.stateNode, l, r)),
            Zr(t, r),
            wt !== 4 && (wt = 2)),
        !1
      );
    var o = Error(u(520), { cause: l });
    if (
      ((o = Ce(o, n)),
      ll === null ? (ll = [o]) : ll.push(o),
      wt !== 4 && (wt = 2),
      e === null)
    )
      return !0;
    (l = Ce(l, n)), (n = e);
    do {
      switch (n.tag) {
        case 3:
          return (
            (n.flags |= 65536),
            (t = r & -r),
            (n.lanes |= t),
            (t = wr(n.stateNode, l, t)),
            Zr(n, t),
            !1
          );
        case 1:
          if (
            ((e = n.type),
            (o = n.stateNode),
            (n.flags & 128) === 0 &&
              (typeof e.getDerivedStateFromError == "function" ||
                (o !== null &&
                  typeof o.componentDidCatch == "function" &&
                  (Yn === null || !Yn.has(o)))))
          )
            return (
              (n.flags |= 65536),
              (r &= -r),
              (n.lanes |= r),
              (r = yd(r)),
              gd(r, t, n, l),
              Zr(n, r),
              !1
            );
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var vd = Error(u(461)),
    Zt = !1;
  function Jt(t, e, n, l) {
    e.child = t === null ? Eh(e, null, n, l) : si(e, t.child, n, l);
  }
  function Sd(t, e, n, l, r) {
    n = n.render;
    var o = e.ref;
    if ("ref" in l) {
      var d = {};
      for (var v in l) v !== "ref" && (d[v] = l[v]);
    } else d = l;
    return (
      di(e),
      (l = mr(t, e, n, d, o, r)),
      (v = pr()),
      t !== null && !Zt
        ? (yr(t, e, r), on(t, e, r))
        : (yt && v && ar(e), (e.flags |= 1), Jt(t, e, l, r), e.child)
    );
  }
  function bd(t, e, n, l, r) {
    if (t === null) {
      var o = n.type;
      return typeof o == "function" &&
        !to(o) &&
        o.defaultProps === void 0 &&
        n.compare === null
        ? ((e.tag = 15), (e.type = o), Td(t, e, o, l, r))
        : ((t = ws(n.type, null, l, e, e.mode, r)),
          (t.ref = e.ref),
          (t.return = e),
          (e.child = t));
    }
    if (((o = t.child), !qr(t, r))) {
      var d = o.memoizedProps;
      if (
        ((n = n.compare), (n = n !== null ? n : Ba), n(d, l) && t.ref === e.ref)
      )
        return on(t, e, r);
    }
    return (
      (e.flags |= 1),
      (t = Hn(o, l)),
      (t.ref = e.ref),
      (t.return = e),
      (e.child = t)
    );
  }
  function Td(t, e, n, l, r) {
    if (t !== null) {
      var o = t.memoizedProps;
      if (Ba(o, l) && t.ref === e.ref)
        if (((Zt = !1), (e.pendingProps = l = o), qr(t, r)))
          (t.flags & 131072) !== 0 && (Zt = !0);
        else return (e.lanes = t.lanes), on(t, e, r);
    }
    return Ur(t, e, n, l, r);
  }
  function Ad(t, e, n) {
    var l = e.pendingProps,
      r = l.children,
      o = (e.stateNode._pendingVisibility & 2) !== 0,
      d = t !== null ? t.memoizedState : null;
    if ((ka(t, e), l.mode === "hidden" || o)) {
      if ((e.flags & 128) !== 0) {
        if (((l = d !== null ? d.baseLanes | n : n), t !== null)) {
          for (r = e.child = t.child, o = 0; r !== null; )
            (o = o | r.lanes | r.childLanes), (r = r.sibling);
          e.childLanes = o & ~l;
        } else (e.childLanes = 0), (e.child = null);
        return Ed(t, e, l, n);
      }
      if ((n & 536870912) !== 0)
        (e.memoizedState = { baseLanes: 0, cachePool: null }),
          t !== null && ys(e, d !== null ? d.cachePool : null),
          d !== null ? Rh(e, d) : rr(),
          Dh(e);
      else
        return (
          (e.lanes = e.childLanes = 536870912),
          Ed(t, e, d !== null ? d.baseLanes | n : n, n)
        );
    } else
      d !== null
        ? (ys(e, d.cachePool), Rh(e, d), Cn(), (e.memoizedState = null))
        : (t !== null && ys(e, null), rr(), Cn());
    return Jt(t, e, r, n), e.child;
  }
  function Ed(t, e, n, l) {
    var r = hr();
    return (
      (r = r === null ? null : { parent: Kt._currentValue, pool: r }),
      (e.memoizedState = { baseLanes: n, cachePool: r }),
      t !== null && ys(e, null),
      rr(),
      Dh(e),
      t !== null && Ja(t, e, l, !0),
      null
    );
  }
  function ka(t, e) {
    var n = e.ref;
    if (n === null) t !== null && t.ref !== null && (e.flags |= 2097664);
    else {
      if (typeof n != "function" && typeof n != "object") throw Error(u(284));
      (t === null || t.ref !== n) && (e.flags |= 2097664);
    }
  }
  function Ur(t, e, n, l, r) {
    return (
      di(e),
      (n = mr(t, e, n, l, void 0, r)),
      (l = pr()),
      t !== null && !Zt
        ? (yr(t, e, r), on(t, e, r))
        : (yt && l && ar(e), (e.flags |= 1), Jt(t, e, n, r), e.child)
    );
  }
  function Rd(t, e, n, l, r, o) {
    return (
      di(e),
      (e.updateQueue = null),
      (n = _h(e, l, n, r)),
      Ch(t),
      (l = pr()),
      t !== null && !Zt
        ? (yr(t, e, o), on(t, e, o))
        : (yt && l && ar(e), (e.flags |= 1), Jt(t, e, n, o), e.child)
    );
  }
  function Dd(t, e, n, l, r) {
    if ((di(e), e.stateNode === null)) {
      var o = qi,
        d = n.contextType;
      typeof d == "object" && d !== null && (o = te(d)),
        (o = new n(l, o)),
        (e.memoizedState =
          o.state !== null && o.state !== void 0 ? o.state : null),
        (o.updater = _r),
        (e.stateNode = o),
        (o._reactInternals = e),
        (o = e.stateNode),
        (o.props = l),
        (o.state = e.memoizedState),
        (o.refs = {}),
        Kr(e),
        (d = n.contextType),
        (o.context = typeof d == "object" && d !== null ? te(d) : qi),
        (o.state = e.memoizedState),
        (d = n.getDerivedStateFromProps),
        typeof d == "function" && (Cr(e, n, d, l), (o.state = e.memoizedState)),
        typeof n.getDerivedStateFromProps == "function" ||
          typeof o.getSnapshotBeforeUpdate == "function" ||
          (typeof o.UNSAFE_componentWillMount != "function" &&
            typeof o.componentWillMount != "function") ||
          ((d = o.state),
          typeof o.componentWillMount == "function" && o.componentWillMount(),
          typeof o.UNSAFE_componentWillMount == "function" &&
            o.UNSAFE_componentWillMount(),
          d !== o.state && _r.enqueueReplaceState(o, o.state, null),
          Ia(e, l, o, r),
          $a(),
          (o.state = e.memoizedState)),
        typeof o.componentDidMount == "function" && (e.flags |= 4194308),
        (l = !0);
    } else if (t === null) {
      o = e.stateNode;
      var v = e.memoizedProps,
        b = fi(n, v);
      o.props = b;
      var R = o.context,
        z = n.contextType;
      (d = qi), typeof z == "object" && z !== null && (d = te(z));
      var L = n.getDerivedStateFromProps;
      (z =
        typeof L == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function"),
        (v = e.pendingProps !== v),
        z ||
          (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
            typeof o.componentWillReceiveProps != "function") ||
          ((v || R !== d) && fd(e, o, l, d)),
        (Vn = !1);
      var C = e.memoizedState;
      (o.state = C),
        Ia(e, l, o, r),
        $a(),
        (R = e.memoizedState),
        v || C !== R || Vn
          ? (typeof L == "function" && (Cr(e, n, L, l), (R = e.memoizedState)),
            (b = Vn || cd(e, n, b, l, C, R, d))
              ? (z ||
                  (typeof o.UNSAFE_componentWillMount != "function" &&
                    typeof o.componentWillMount != "function") ||
                  (typeof o.componentWillMount == "function" &&
                    o.componentWillMount(),
                  typeof o.UNSAFE_componentWillMount == "function" &&
                    o.UNSAFE_componentWillMount()),
                typeof o.componentDidMount == "function" &&
                  (e.flags |= 4194308))
              : (typeof o.componentDidMount == "function" &&
                  (e.flags |= 4194308),
                (e.memoizedProps = l),
                (e.memoizedState = R)),
            (o.props = l),
            (o.state = R),
            (o.context = d),
            (l = b))
          : (typeof o.componentDidMount == "function" && (e.flags |= 4194308),
            (l = !1));
    } else {
      (o = e.stateNode),
        Qr(t, e),
        (d = e.memoizedProps),
        (z = fi(n, d)),
        (o.props = z),
        (L = e.pendingProps),
        (C = o.context),
        (R = n.contextType),
        (b = qi),
        typeof R == "object" && R !== null && (b = te(R)),
        (v = n.getDerivedStateFromProps),
        (R =
          typeof v == "function" ||
          typeof o.getSnapshotBeforeUpdate == "function") ||
          (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
            typeof o.componentWillReceiveProps != "function") ||
          ((d !== L || C !== b) && fd(e, o, l, b)),
        (Vn = !1),
        (C = e.memoizedState),
        (o.state = C),
        Ia(e, l, o, r),
        $a();
      var V = e.memoizedState;
      d !== L ||
      C !== V ||
      Vn ||
      (t !== null && t.dependencies !== null && Os(t.dependencies))
        ? (typeof v == "function" && (Cr(e, n, v, l), (V = e.memoizedState)),
          (z =
            Vn ||
            cd(e, n, z, l, C, V, b) ||
            (t !== null && t.dependencies !== null && Os(t.dependencies)))
            ? (R ||
                (typeof o.UNSAFE_componentWillUpdate != "function" &&
                  typeof o.componentWillUpdate != "function") ||
                (typeof o.componentWillUpdate == "function" &&
                  o.componentWillUpdate(l, V, b),
                typeof o.UNSAFE_componentWillUpdate == "function" &&
                  o.UNSAFE_componentWillUpdate(l, V, b)),
              typeof o.componentDidUpdate == "function" && (e.flags |= 4),
              typeof o.getSnapshotBeforeUpdate == "function" &&
                (e.flags |= 1024))
            : (typeof o.componentDidUpdate != "function" ||
                (d === t.memoizedProps && C === t.memoizedState) ||
                (e.flags |= 4),
              typeof o.getSnapshotBeforeUpdate != "function" ||
                (d === t.memoizedProps && C === t.memoizedState) ||
                (e.flags |= 1024),
              (e.memoizedProps = l),
              (e.memoizedState = V)),
          (o.props = l),
          (o.state = V),
          (o.context = b),
          (l = z))
        : (typeof o.componentDidUpdate != "function" ||
            (d === t.memoizedProps && C === t.memoizedState) ||
            (e.flags |= 4),
          typeof o.getSnapshotBeforeUpdate != "function" ||
            (d === t.memoizedProps && C === t.memoizedState) ||
            (e.flags |= 1024),
          (l = !1));
    }
    return (
      (o = l),
      ka(t, e),
      (l = (e.flags & 128) !== 0),
      o || l
        ? ((o = e.stateNode),
          (n =
            l && typeof n.getDerivedStateFromError != "function"
              ? null
              : o.render()),
          (e.flags |= 1),
          t !== null && l
            ? ((e.child = si(e, t.child, null, r)),
              (e.child = si(e, null, n, r)))
            : Jt(t, e, n, r),
          (e.memoizedState = o.state),
          (t = e.child))
        : (t = on(t, e, r)),
      t
    );
  }
  function xd(t, e, n, l) {
    return ja(), (e.flags |= 256), Jt(t, e, n, l), e.child;
  }
  var Vr = { dehydrated: null, treeContext: null, retryLane: 0 };
  function zr(t) {
    return { baseLanes: t, cachePool: Mh() };
  }
  function Br(t, e, n) {
    return (t = t !== null ? t.childLanes & ~n : 0), e && (t |= Ne), t;
  }
  function Od(t, e, n) {
    var l = e.pendingProps,
      r = !1,
      o = (e.flags & 128) !== 0,
      d;
    if (
      ((d = o) ||
        (d =
          t !== null && t.memoizedState === null ? !1 : (Xt.current & 2) !== 0),
      d && ((r = !0), (e.flags &= -129)),
      (d = (e.flags & 32) !== 0),
      (e.flags &= -33),
      t === null)
    ) {
      if (yt) {
        if ((r ? Mn(e) : Cn(), yt)) {
          var v = kt,
            b;
          if ((b = v)) {
            t: {
              for (b = v, v = Fe; b.nodeType !== 8; ) {
                if (!v) {
                  v = null;
                  break t;
                }
                if (((b = Xe(b.nextSibling)), b === null)) {
                  v = null;
                  break t;
                }
              }
              v = b;
            }
            v !== null
              ? ((e.memoizedState = {
                  dehydrated: v,
                  treeContext: ii !== null ? { id: ln, overflow: sn } : null,
                  retryLane: 536870912,
                }),
                (b = Be(18, null, null, 0)),
                (b.stateNode = v),
                (b.return = e),
                (e.child = b),
                (ue = e),
                (kt = null),
                (b = !0))
              : (b = !1);
          }
          b || li(e);
        }
        if (
          ((v = e.memoizedState),
          v !== null && ((v = v.dehydrated), v !== null))
        )
          return v.data === "$!" ? (e.lanes = 16) : (e.lanes = 536870912), null;
        un(e);
      }
      return (
        (v = l.children),
        (l = l.fallback),
        r
          ? (Cn(),
            (r = e.mode),
            (v = Lr({ mode: "hidden", children: v }, r)),
            (l = pi(l, r, n, null)),
            (v.return = e),
            (l.return = e),
            (v.sibling = l),
            (e.child = v),
            (r = e.child),
            (r.memoizedState = zr(n)),
            (r.childLanes = Br(t, d, n)),
            (e.memoizedState = Vr),
            l)
          : (Mn(e), Nr(e, v))
      );
    }
    if (
      ((b = t.memoizedState), b !== null && ((v = b.dehydrated), v !== null))
    ) {
      if (o)
        e.flags & 256
          ? (Mn(e), (e.flags &= -257), (e = jr(t, e, n)))
          : e.memoizedState !== null
          ? (Cn(), (e.child = t.child), (e.flags |= 128), (e = null))
          : (Cn(),
            (r = l.fallback),
            (v = e.mode),
            (l = Lr({ mode: "visible", children: l.children }, v)),
            (r = pi(r, v, n, null)),
            (r.flags |= 2),
            (l.return = e),
            (r.return = e),
            (l.sibling = r),
            (e.child = l),
            si(e, t.child, null, n),
            (l = e.child),
            (l.memoizedState = zr(n)),
            (l.childLanes = Br(t, d, n)),
            (e.memoizedState = Vr),
            (e = r));
      else if ((Mn(e), v.data === "$!")) {
        if (((d = v.nextSibling && v.nextSibling.dataset), d)) var R = d.dgst;
        (d = R),
          (l = Error(u(419))),
          (l.stack = ""),
          (l.digest = d),
          Ha({ value: l, source: null, stack: null }),
          (e = jr(t, e, n));
      } else if (
        (Zt || Ja(t, e, n, !1), (d = (n & t.childLanes) !== 0), Zt || d)
      ) {
        if (((d = Et), d !== null)) {
          if (((l = n & -n), (l & 42) !== 0)) l = 1;
          else
            switch (l) {
              case 2:
                l = 1;
                break;
              case 8:
                l = 4;
                break;
              case 32:
                l = 16;
                break;
              case 128:
              case 256:
              case 512:
              case 1024:
              case 2048:
              case 4096:
              case 8192:
              case 16384:
              case 32768:
              case 65536:
              case 131072:
              case 262144:
              case 524288:
              case 1048576:
              case 2097152:
              case 4194304:
              case 8388608:
              case 16777216:
              case 33554432:
                l = 64;
                break;
              case 268435456:
                l = 134217728;
                break;
              default:
                l = 0;
            }
          if (
            ((l = (l & (d.suspendedLanes | n)) !== 0 ? 0 : l),
            l !== 0 && l !== b.retryLane)
          )
            throw ((b.retryLane = l), On(t, l), re(d, t, l), vd);
        }
        v.data === "$?" || ho(), (e = jr(t, e, n));
      } else
        v.data === "$?"
          ? ((e.flags |= 128),
            (e.child = t.child),
            (e = yS.bind(null, t)),
            (v._reactRetry = e),
            (e = null))
          : ((t = b.treeContext),
            (kt = Xe(v.nextSibling)),
            (ue = e),
            (yt = !0),
            (Ye = null),
            (Fe = !1),
            t !== null &&
              ((_e[we++] = ln),
              (_e[we++] = sn),
              (_e[we++] = ii),
              (ln = t.id),
              (sn = t.overflow),
              (ii = e)),
            (e = Nr(e, l.children)),
            (e.flags |= 4096));
      return e;
    }
    return r
      ? (Cn(),
        (r = l.fallback),
        (v = e.mode),
        (b = t.child),
        (R = b.sibling),
        (l = Hn(b, { mode: "hidden", children: l.children })),
        (l.subtreeFlags = b.subtreeFlags & 31457280),
        R !== null ? (r = Hn(R, r)) : ((r = pi(r, v, n, null)), (r.flags |= 2)),
        (r.return = e),
        (l.return = e),
        (l.sibling = r),
        (e.child = l),
        (l = r),
        (r = e.child),
        (v = t.child.memoizedState),
        v === null
          ? (v = zr(n))
          : ((b = v.cachePool),
            b !== null
              ? ((R = Kt._currentValue),
                (b = b.parent !== R ? { parent: R, pool: R } : b))
              : (b = Mh()),
            (v = { baseLanes: v.baseLanes | n, cachePool: b })),
        (r.memoizedState = v),
        (r.childLanes = Br(t, d, n)),
        (e.memoizedState = Vr),
        l)
      : (Mn(e),
        (n = t.child),
        (t = n.sibling),
        (n = Hn(n, { mode: "visible", children: l.children })),
        (n.return = e),
        (n.sibling = null),
        t !== null &&
          ((d = e.deletions),
          d === null ? ((e.deletions = [t]), (e.flags |= 16)) : d.push(t)),
        (e.child = n),
        (e.memoizedState = null),
        n);
  }
  function Nr(t, e) {
    return (
      (e = Lr({ mode: "visible", children: e }, t.mode)),
      (e.return = t),
      (t.child = e)
    );
  }
  function Lr(t, e) {
    return Id(t, e, 0, null);
  }
  function jr(t, e, n) {
    return (
      si(e, t.child, null, n),
      (t = Nr(e, e.pendingProps.children)),
      (t.flags |= 2),
      (e.memoizedState = null),
      t
    );
  }
  function Md(t, e, n) {
    t.lanes |= e;
    var l = t.alternate;
    l !== null && (l.lanes |= e), Gr(t.return, e, n);
  }
  function Hr(t, e, n, l, r) {
    var o = t.memoizedState;
    o === null
      ? (t.memoizedState = {
          isBackwards: e,
          rendering: null,
          renderingStartTime: 0,
          last: l,
          tail: n,
          tailMode: r,
        })
      : ((o.isBackwards = e),
        (o.rendering = null),
        (o.renderingStartTime = 0),
        (o.last = l),
        (o.tail = n),
        (o.tailMode = r));
  }
  function Cd(t, e, n) {
    var l = e.pendingProps,
      r = l.revealOrder,
      o = l.tail;
    if ((Jt(t, e, l.children, n), (l = Xt.current), (l & 2) !== 0))
      (l = (l & 1) | 2), (e.flags |= 128);
    else {
      if (t !== null && (t.flags & 128) !== 0)
        t: for (t = e.child; t !== null; ) {
          if (t.tag === 13) t.memoizedState !== null && Md(t, n, e);
          else if (t.tag === 19) Md(t, n, e);
          else if (t.child !== null) {
            (t.child.return = t), (t = t.child);
            continue;
          }
          if (t === e) break t;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) break t;
            t = t.return;
          }
          (t.sibling.return = t.return), (t = t.sibling);
        }
      l &= 1;
    }
    switch ((xt(Xt, l), r)) {
      case "forwards":
        for (n = e.child, r = null; n !== null; )
          (t = n.alternate),
            t !== null && ps(t) === null && (r = n),
            (n = n.sibling);
        (n = r),
          n === null
            ? ((r = e.child), (e.child = null))
            : ((r = n.sibling), (n.sibling = null)),
          Hr(e, !1, r, n, o);
        break;
      case "backwards":
        for (n = null, r = e.child, e.child = null; r !== null; ) {
          if (((t = r.alternate), t !== null && ps(t) === null)) {
            e.child = r;
            break;
          }
          (t = r.sibling), (r.sibling = n), (n = r), (r = t);
        }
        Hr(e, !0, n, null, o);
        break;
      case "together":
        Hr(e, !1, null, null, void 0);
        break;
      default:
        e.memoizedState = null;
    }
    return e.child;
  }
  function on(t, e, n) {
    if (
      (t !== null && (e.dependencies = t.dependencies),
      (qn |= e.lanes),
      (n & e.childLanes) === 0)
    )
      if (t !== null) {
        if ((Ja(t, e, n, !1), (n & e.childLanes) === 0)) return null;
      } else return null;
    if (t !== null && e.child !== t.child) throw Error(u(153));
    if (e.child !== null) {
      for (
        t = e.child, n = Hn(t, t.pendingProps), e.child = n, n.return = e;
        t.sibling !== null;

      )
        (t = t.sibling),
          (n = n.sibling = Hn(t, t.pendingProps)),
          (n.return = e);
      n.sibling = null;
    }
    return e.child;
  }
  function qr(t, e) {
    return (t.lanes & e) !== 0
      ? !0
      : ((t = t.dependencies), !!(t !== null && Os(t)));
  }
  function nS(t, e, n) {
    switch (e.tag) {
      case 3:
        Xl(e, e.stateNode.containerInfo),
          Un(e, Kt, t.memoizedState.cache),
          ja();
        break;
      case 27:
      case 5:
        _u(e);
        break;
      case 4:
        Xl(e, e.stateNode.containerInfo);
        break;
      case 10:
        Un(e, e.type, e.memoizedProps.value);
        break;
      case 13:
        var l = e.memoizedState;
        if (l !== null)
          return l.dehydrated !== null
            ? (Mn(e), (e.flags |= 128), null)
            : (n & e.child.childLanes) !== 0
            ? Od(t, e, n)
            : (Mn(e), (t = on(t, e, n)), t !== null ? t.sibling : null);
        Mn(e);
        break;
      case 19:
        var r = (t.flags & 128) !== 0;
        if (
          ((l = (n & e.childLanes) !== 0),
          l || (Ja(t, e, n, !1), (l = (n & e.childLanes) !== 0)),
          r)
        ) {
          if (l) return Cd(t, e, n);
          e.flags |= 128;
        }
        if (
          ((r = e.memoizedState),
          r !== null &&
            ((r.rendering = null), (r.tail = null), (r.lastEffect = null)),
          xt(Xt, Xt.current),
          l)
        )
          break;
        return null;
      case 22:
      case 23:
        return (e.lanes = 0), Ad(t, e, n);
      case 24:
        Un(e, Kt, t.memoizedState.cache);
    }
    return on(t, e, n);
  }
  function _d(t, e, n) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps) Zt = !0;
      else {
        if (!qr(t, n) && (e.flags & 128) === 0) return (Zt = !1), nS(t, e, n);
        Zt = (t.flags & 131072) !== 0;
      }
    else (Zt = !1), yt && (e.flags & 1048576) !== 0 && mh(e, cs, e.index);
    switch (((e.lanes = 0), e.tag)) {
      case 16:
        t: {
          t = e.pendingProps;
          var l = e.elementType,
            r = l._init;
          if (((l = r(l._payload)), (e.type = l), typeof l == "function"))
            to(l)
              ? ((t = fi(l, t)), (e.tag = 1), (e = Dd(null, e, l, t, n)))
              : ((e.tag = 0), (e = Ur(null, e, l, t, n)));
          else {
            if (l != null) {
              if (((r = l.$$typeof), r === O)) {
                (e.tag = 11), (e = Sd(null, e, l, t, n));
                break t;
              } else if (r === N) {
                (e.tag = 14), (e = bd(null, e, l, t, n));
                break t;
              }
            }
            throw ((e = J(l) || l), Error(u(306, e, "")));
          }
        }
        return e;
      case 0:
        return Ur(t, e, e.type, e.pendingProps, n);
      case 1:
        return (l = e.type), (r = fi(l, e.pendingProps)), Dd(t, e, l, r, n);
      case 3:
        t: {
          if ((Xl(e, e.stateNode.containerInfo), t === null))
            throw Error(u(387));
          var o = e.pendingProps;
          (r = e.memoizedState), (l = r.element), Qr(t, e), Ia(e, o, null, n);
          var d = e.memoizedState;
          if (
            ((o = d.cache),
            Un(e, Kt, o),
            o !== r.cache && Xr(e, [Kt], n, !0),
            $a(),
            (o = d.element),
            r.isDehydrated)
          )
            if (
              ((r = { element: o, isDehydrated: !1, cache: d.cache }),
              (e.updateQueue.baseState = r),
              (e.memoizedState = r),
              e.flags & 256)
            ) {
              e = xd(t, e, o, n);
              break t;
            } else if (o !== l) {
              (l = Ce(Error(u(424)), e)), Ha(l), (e = xd(t, e, o, n));
              break t;
            } else
              for (
                kt = Xe(e.stateNode.containerInfo.firstChild),
                  ue = e,
                  yt = !0,
                  Ye = null,
                  Fe = !0,
                  n = Eh(e, null, o, n),
                  e.child = n;
                n;

              )
                (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
          else {
            if ((ja(), o === l)) {
              e = on(t, e, n);
              break t;
            }
            Jt(t, e, o, n);
          }
          e = e.child;
        }
        return e;
      case 26:
        return (
          ka(t, e),
          t === null
            ? (n = Vm(e.type, null, e.pendingProps, null))
              ? (e.memoizedState = n)
              : yt ||
                ((n = e.type),
                (t = e.pendingProps),
                (l = Xs(En.current).createElement(n)),
                (l[It] = e),
                (l[ce] = t),
                Wt(l, n, t),
                Qt(l),
                (e.stateNode = l))
            : (e.memoizedState = Vm(
                e.type,
                t.memoizedProps,
                e.pendingProps,
                t.memoizedState
              )),
          null
        );
      case 27:
        return (
          _u(e),
          t === null &&
            yt &&
            ((l = e.stateNode = _m(e.type, e.pendingProps, En.current)),
            (ue = e),
            (Fe = !0),
            (kt = Xe(l.firstChild))),
          (l = e.pendingProps.children),
          t !== null || yt ? Jt(t, e, l, n) : (e.child = si(e, null, l, n)),
          ka(t, e),
          e.child
        );
      case 5:
        return (
          t === null &&
            yt &&
            ((r = l = kt) &&
              ((l = US(l, e.type, e.pendingProps, Fe)),
              l !== null
                ? ((e.stateNode = l),
                  (ue = e),
                  (kt = Xe(l.firstChild)),
                  (Fe = !1),
                  (r = !0))
                : (r = !1)),
            r || li(e)),
          _u(e),
          (r = e.type),
          (o = e.pendingProps),
          (d = t !== null ? t.memoizedProps : null),
          (l = o.children),
          Oo(r, o) ? (l = null) : d !== null && Oo(r, d) && (e.flags |= 32),
          e.memoizedState !== null &&
            ((r = mr(t, e, kv, null, null, n)), (ml._currentValue = r)),
          ka(t, e),
          Jt(t, e, l, n),
          e.child
        );
      case 6:
        return (
          t === null &&
            yt &&
            ((t = n = kt) &&
              ((n = VS(n, e.pendingProps, Fe)),
              n !== null
                ? ((e.stateNode = n), (ue = e), (kt = null), (t = !0))
                : (t = !1)),
            t || li(e)),
          null
        );
      case 13:
        return Od(t, e, n);
      case 4:
        return (
          Xl(e, e.stateNode.containerInfo),
          (l = e.pendingProps),
          t === null ? (e.child = si(e, null, l, n)) : Jt(t, e, l, n),
          e.child
        );
      case 11:
        return Sd(t, e, e.type, e.pendingProps, n);
      case 7:
        return Jt(t, e, e.pendingProps, n), e.child;
      case 8:
        return Jt(t, e, e.pendingProps.children, n), e.child;
      case 12:
        return Jt(t, e, e.pendingProps.children, n), e.child;
      case 10:
        return (
          (l = e.pendingProps),
          Un(e, e.type, l.value),
          Jt(t, e, l.children, n),
          e.child
        );
      case 9:
        return (
          (r = e.type._context),
          (l = e.pendingProps.children),
          di(e),
          (r = te(r)),
          (l = l(r)),
          (e.flags |= 1),
          Jt(t, e, l, n),
          e.child
        );
      case 14:
        return bd(t, e, e.type, e.pendingProps, n);
      case 15:
        return Td(t, e, e.type, e.pendingProps, n);
      case 19:
        return Cd(t, e, n);
      case 22:
        return Ad(t, e, n);
      case 24:
        return (
          di(e),
          (l = te(Kt)),
          t === null
            ? ((r = hr()),
              r === null &&
                ((r = Et),
                (o = cr()),
                (r.pooledCache = o),
                o.refCount++,
                o !== null && (r.pooledCacheLanes |= n),
                (r = o)),
              (e.memoizedState = { parent: l, cache: r }),
              Kr(e),
              Un(e, Kt, r))
            : ((t.lanes & n) !== 0 && (Qr(t, e), Ia(e, null, null, n), $a()),
              (r = t.memoizedState),
              (o = e.memoizedState),
              r.parent !== l
                ? ((r = { parent: l, cache: l }),
                  (e.memoizedState = r),
                  e.lanes === 0 &&
                    (e.memoizedState = e.updateQueue.baseState = r),
                  Un(e, Kt, l))
                : ((l = o.cache),
                  Un(e, Kt, l),
                  l !== r.cache && Xr(e, [Kt], n, !0))),
          Jt(t, e, e.pendingProps.children, n),
          e.child
        );
      case 29:
        throw e.pendingProps;
    }
    throw Error(u(156, e.tag));
  }
  var Yr = St(null),
    hi = null,
    cn = null;
  function Un(t, e, n) {
    xt(Yr, e._currentValue), (e._currentValue = n);
  }
  function fn(t) {
    (t._currentValue = Yr.current), jt(Yr);
  }
  function Gr(t, e, n) {
    for (; t !== null; ) {
      var l = t.alternate;
      if (
        ((t.childLanes & e) !== e
          ? ((t.childLanes |= e), l !== null && (l.childLanes |= e))
          : l !== null && (l.childLanes & e) !== e && (l.childLanes |= e),
        t === n)
      )
        break;
      t = t.return;
    }
  }
  function Xr(t, e, n, l) {
    var r = t.child;
    for (r !== null && (r.return = t); r !== null; ) {
      var o = r.dependencies;
      if (o !== null) {
        var d = r.child;
        o = o.firstContext;
        t: for (; o !== null; ) {
          var v = o;
          o = r;
          for (var b = 0; b < e.length; b++)
            if (v.context === e[b]) {
              (o.lanes |= n),
                (v = o.alternate),
                v !== null && (v.lanes |= n),
                Gr(o.return, n, t),
                l || (d = null);
              break t;
            }
          o = v.next;
        }
      } else if (r.tag === 18) {
        if (((d = r.return), d === null)) throw Error(u(341));
        (d.lanes |= n),
          (o = d.alternate),
          o !== null && (o.lanes |= n),
          Gr(d, n, t),
          (d = null);
      } else d = r.child;
      if (d !== null) d.return = r;
      else
        for (d = r; d !== null; ) {
          if (d === t) {
            d = null;
            break;
          }
          if (((r = d.sibling), r !== null)) {
            (r.return = d.return), (d = r);
            break;
          }
          d = d.return;
        }
      r = d;
    }
  }
  function Ja(t, e, n, l) {
    t = null;
    for (var r = e, o = !1; r !== null; ) {
      if (!o) {
        if ((r.flags & 524288) !== 0) o = !0;
        else if ((r.flags & 262144) !== 0) break;
      }
      if (r.tag === 10) {
        var d = r.alternate;
        if (d === null) throw Error(u(387));
        if (((d = d.memoizedProps), d !== null)) {
          var v = r.type;
          ye(r.pendingProps.value, d.value) ||
            (t !== null ? t.push(v) : (t = [v]));
        }
      } else if (r === Gl.current) {
        if (((d = r.alternate), d === null)) throw Error(u(387));
        d.memoizedState.memoizedState !== r.memoizedState.memoizedState &&
          (t !== null ? t.push(ml) : (t = [ml]));
      }
      r = r.return;
    }
    t !== null && Xr(e, t, n, l), (e.flags |= 262144);
  }
  function Os(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!ye(t.context._currentValue, t.memoizedValue)) return !0;
      t = t.next;
    }
    return !1;
  }
  function di(t) {
    (hi = t),
      (cn = null),
      (t = t.dependencies),
      t !== null && (t.firstContext = null);
  }
  function te(t) {
    return wd(hi, t);
  }
  function Ms(t, e) {
    return hi === null && di(t), wd(t, e);
  }
  function wd(t, e) {
    var n = e._currentValue;
    if (((e = { context: e, memoizedValue: n, next: null }), cn === null)) {
      if (t === null) throw Error(u(308));
      (cn = e),
        (t.dependencies = { lanes: 0, firstContext: e }),
        (t.flags |= 524288);
    } else cn = cn.next = e;
    return n;
  }
  var Vn = !1;
  function Kr(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function Qr(t, e) {
    (t = t.updateQueue),
      e.updateQueue === t &&
        (e.updateQueue = {
          baseState: t.baseState,
          firstBaseUpdate: t.firstBaseUpdate,
          lastBaseUpdate: t.lastBaseUpdate,
          shared: t.shared,
          callbacks: null,
        });
  }
  function zn(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Bn(t, e, n) {
    var l = t.updateQueue;
    if (l === null) return null;
    if (((l = l.shared), (Mt & 2) !== 0)) {
      var r = l.pending;
      return (
        r === null ? (e.next = e) : ((e.next = r.next), (r.next = e)),
        (l.pending = e),
        (e = rs(t)),
        hh(t, null, n),
        e
      );
    }
    return us(t, l, e, n), rs(t);
  }
  function Wa(t, e, n) {
    if (
      ((e = e.updateQueue), e !== null && ((e = e.shared), (n & 4194176) !== 0))
    ) {
      var l = e.lanes;
      (l &= t.pendingLanes), (n |= l), (e.lanes = n), bf(t, n);
    }
  }
  function Zr(t, e) {
    var n = t.updateQueue,
      l = t.alternate;
    if (l !== null && ((l = l.updateQueue), n === l)) {
      var r = null,
        o = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var d = {
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: null,
            next: null,
          };
          o === null ? (r = o = d) : (o = o.next = d), (n = n.next);
        } while (n !== null);
        o === null ? (r = o = e) : (o = o.next = e);
      } else r = o = e;
      (n = {
        baseState: l.baseState,
        firstBaseUpdate: r,
        lastBaseUpdate: o,
        shared: l.shared,
        callbacks: l.callbacks,
      }),
        (t.updateQueue = n);
      return;
    }
    (t = n.lastBaseUpdate),
      t === null ? (n.firstBaseUpdate = e) : (t.next = e),
      (n.lastBaseUpdate = e);
  }
  var Pr = !1;
  function $a() {
    if (Pr) {
      var t = Zi;
      if (t !== null) throw t;
    }
  }
  function Ia(t, e, n, l) {
    Pr = !1;
    var r = t.updateQueue;
    Vn = !1;
    var o = r.firstBaseUpdate,
      d = r.lastBaseUpdate,
      v = r.shared.pending;
    if (v !== null) {
      r.shared.pending = null;
      var b = v,
        R = b.next;
      (b.next = null), d === null ? (o = R) : (d.next = R), (d = b);
      var z = t.alternate;
      z !== null &&
        ((z = z.updateQueue),
        (v = z.lastBaseUpdate),
        v !== d &&
          (v === null ? (z.firstBaseUpdate = R) : (v.next = R),
          (z.lastBaseUpdate = b)));
    }
    if (o !== null) {
      var L = r.baseState;
      (d = 0), (z = R = b = null), (v = o);
      do {
        var C = v.lane & -536870913,
          V = C !== v.lane;
        if (V ? (pt & C) === C : (l & C) === C) {
          C !== 0 && C === Qi && (Pr = !0),
            z !== null &&
              (z = z.next =
                {
                  lane: 0,
                  tag: v.tag,
                  payload: v.payload,
                  callback: null,
                  next: null,
                });
          t: {
            var Z = t,
              lt = v;
            C = e;
            var Ut = n;
            switch (lt.tag) {
              case 1:
                if (((Z = lt.payload), typeof Z == "function")) {
                  L = Z.call(Ut, L, C);
                  break t;
                }
                L = Z;
                break t;
              case 3:
                Z.flags = (Z.flags & -65537) | 128;
              case 0:
                if (
                  ((Z = lt.payload),
                  (C = typeof Z == "function" ? Z.call(Ut, L, C) : Z),
                  C == null)
                )
                  break t;
                L = at({}, L, C);
                break t;
              case 2:
                Vn = !0;
            }
          }
          (C = v.callback),
            C !== null &&
              ((t.flags |= 64),
              V && (t.flags |= 8192),
              (V = r.callbacks),
              V === null ? (r.callbacks = [C]) : V.push(C));
        } else
          (V = {
            lane: C,
            tag: v.tag,
            payload: v.payload,
            callback: v.callback,
            next: null,
          }),
            z === null ? ((R = z = V), (b = L)) : (z = z.next = V),
            (d |= C);
        if (((v = v.next), v === null)) {
          if (((v = r.shared.pending), v === null)) break;
          (V = v),
            (v = V.next),
            (V.next = null),
            (r.lastBaseUpdate = V),
            (r.shared.pending = null);
        }
      } while (!0);
      z === null && (b = L),
        (r.baseState = b),
        (r.firstBaseUpdate = R),
        (r.lastBaseUpdate = z),
        o === null && (r.shared.lanes = 0),
        (qn |= d),
        (t.lanes = d),
        (t.memoizedState = L);
    }
  }
  function Ud(t, e) {
    if (typeof t != "function") throw Error(u(191, t));
    t.call(e);
  }
  function Vd(t, e) {
    var n = t.callbacks;
    if (n !== null)
      for (t.callbacks = null, t = 0; t < n.length; t++) Ud(n[t], e);
  }
  function tl(t, e) {
    try {
      var n = e.updateQueue,
        l = n !== null ? n.lastEffect : null;
      if (l !== null) {
        var r = l.next;
        n = r;
        do {
          if ((n.tag & t) === t) {
            l = void 0;
            var o = n.create,
              d = n.inst;
            (l = o()), (d.destroy = l);
          }
          n = n.next;
        } while (n !== r);
      }
    } catch (v) {
      At(e, e.return, v);
    }
  }
  function Nn(t, e, n) {
    try {
      var l = e.updateQueue,
        r = l !== null ? l.lastEffect : null;
      if (r !== null) {
        var o = r.next;
        l = o;
        do {
          if ((l.tag & t) === t) {
            var d = l.inst,
              v = d.destroy;
            if (v !== void 0) {
              (d.destroy = void 0), (r = e);
              var b = n;
              try {
                v();
              } catch (R) {
                At(r, b, R);
              }
            }
          }
          l = l.next;
        } while (l !== o);
      }
    } catch (R) {
      At(e, e.return, R);
    }
  }
  function zd(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var n = t.stateNode;
      try {
        Vd(e, n);
      } catch (l) {
        At(t, t.return, l);
      }
    }
  }
  function Bd(t, e, n) {
    (n.props = fi(t.type, t.memoizedProps)), (n.state = t.memoizedState);
    try {
      n.componentWillUnmount();
    } catch (l) {
      At(t, e, l);
    }
  }
  function mi(t, e) {
    try {
      var n = t.ref;
      if (n !== null) {
        var l = t.stateNode;
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var r = l;
            break;
          default:
            r = l;
        }
        typeof n == "function" ? (t.refCleanup = n(r)) : (n.current = r);
      }
    } catch (o) {
      At(t, e, o);
    }
  }
  function ge(t, e) {
    var n = t.ref,
      l = t.refCleanup;
    if (n !== null)
      if (typeof l == "function")
        try {
          l();
        } catch (r) {
          At(t, e, r);
        } finally {
          (t.refCleanup = null),
            (t = t.alternate),
            t != null && (t.refCleanup = null);
        }
      else if (typeof n == "function")
        try {
          n(null);
        } catch (r) {
          At(t, e, r);
        }
      else n.current = null;
  }
  function Nd(t) {
    var e = t.type,
      n = t.memoizedProps,
      l = t.stateNode;
    try {
      t: switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          n.autoFocus && l.focus();
          break t;
        case "img":
          n.src ? (l.src = n.src) : n.srcSet && (l.srcset = n.srcSet);
      }
    } catch (r) {
      At(t, t.return, r);
    }
  }
  function Ld(t, e, n) {
    try {
      var l = t.stateNode;
      OS(l, t.type, n, e), (l[ce] = e);
    } catch (r) {
      At(t, t.return, r);
    }
  }
  function jd(t) {
    return (
      t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 || t.tag === 4
    );
  }
  function Fr(t) {
    t: for (;;) {
      for (; t.sibling === null; ) {
        if (t.return === null || jd(t.return)) return null;
        t = t.return;
      }
      for (
        t.sibling.return = t.return, t = t.sibling;
        t.tag !== 5 && t.tag !== 6 && t.tag !== 27 && t.tag !== 18;

      ) {
        if (t.flags & 2 || t.child === null || t.tag === 4) continue t;
        (t.child.return = t), (t = t.child);
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function kr(t, e, n) {
    var l = t.tag;
    if (l === 5 || l === 6)
      (t = t.stateNode),
        e
          ? n.nodeType === 8
            ? n.parentNode.insertBefore(t, e)
            : n.insertBefore(t, e)
          : (n.nodeType === 8
              ? ((e = n.parentNode), e.insertBefore(t, n))
              : ((e = n), e.appendChild(t)),
            (n = n._reactRootContainer),
            n != null || e.onclick !== null || (e.onclick = Gs));
    else if (l !== 4 && l !== 27 && ((t = t.child), t !== null))
      for (kr(t, e, n), t = t.sibling; t !== null; )
        kr(t, e, n), (t = t.sibling);
  }
  function Cs(t, e, n) {
    var l = t.tag;
    if (l === 5 || l === 6)
      (t = t.stateNode), e ? n.insertBefore(t, e) : n.appendChild(t);
    else if (l !== 4 && l !== 27 && ((t = t.child), t !== null))
      for (Cs(t, e, n), t = t.sibling; t !== null; )
        Cs(t, e, n), (t = t.sibling);
  }
  var hn = !1,
    _t = !1,
    Jr = !1,
    Hd = typeof WeakSet == "function" ? WeakSet : Set,
    Pt = null,
    qd = !1;
  function iS(t, e) {
    if (((t = t.containerInfo), (Do = ks), (t = ih(t)), $u(t))) {
      if ("selectionStart" in t)
        var n = { start: t.selectionStart, end: t.selectionEnd };
      else
        t: {
          n = ((n = t.ownerDocument) && n.defaultView) || window;
          var l = n.getSelection && n.getSelection();
          if (l && l.rangeCount !== 0) {
            n = l.anchorNode;
            var r = l.anchorOffset,
              o = l.focusNode;
            l = l.focusOffset;
            try {
              n.nodeType, o.nodeType;
            } catch {
              n = null;
              break t;
            }
            var d = 0,
              v = -1,
              b = -1,
              R = 0,
              z = 0,
              L = t,
              C = null;
            e: for (;;) {
              for (
                var V;
                L !== n || (r !== 0 && L.nodeType !== 3) || (v = d + r),
                  L !== o || (l !== 0 && L.nodeType !== 3) || (b = d + l),
                  L.nodeType === 3 && (d += L.nodeValue.length),
                  (V = L.firstChild) !== null;

              )
                (C = L), (L = V);
              for (;;) {
                if (L === t) break e;
                if (
                  (C === n && ++R === r && (v = d),
                  C === o && ++z === l && (b = d),
                  (V = L.nextSibling) !== null)
                )
                  break;
                (L = C), (C = L.parentNode);
              }
              L = V;
            }
            n = v === -1 || b === -1 ? null : { start: v, end: b };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (
      xo = { focusedElem: t, selectionRange: n }, ks = !1, Pt = e;
      Pt !== null;

    )
      if (
        ((e = Pt), (t = e.child), (e.subtreeFlags & 1028) !== 0 && t !== null)
      )
        (t.return = e), (Pt = t);
      else
        for (; Pt !== null; ) {
          switch (((e = Pt), (o = e.alternate), (t = e.flags), e.tag)) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((t & 1024) !== 0 && o !== null) {
                (t = void 0),
                  (n = e),
                  (r = o.memoizedProps),
                  (o = o.memoizedState),
                  (l = n.stateNode);
                try {
                  var Z = fi(n.type, r, n.elementType === n.type);
                  (t = l.getSnapshotBeforeUpdate(Z, o)),
                    (l.__reactInternalSnapshotBeforeUpdate = t);
                } catch (lt) {
                  At(n, n.return, lt);
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (
                  ((t = e.stateNode.containerInfo), (n = t.nodeType), n === 9)
                )
                  _o(t);
                else if (n === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      _o(t);
                      break;
                    default:
                      t.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((t & 1024) !== 0) throw Error(u(163));
          }
          if (((t = e.sibling), t !== null)) {
            (t.return = e.return), (Pt = t);
            break;
          }
          Pt = e.return;
        }
    return (Z = qd), (qd = !1), Z;
  }
  function Yd(t, e, n) {
    var l = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        mn(t, n), l & 4 && tl(5, n);
        break;
      case 1:
        if ((mn(t, n), l & 4))
          if (((t = n.stateNode), e === null))
            try {
              t.componentDidMount();
            } catch (v) {
              At(n, n.return, v);
            }
          else {
            var r = fi(n.type, e.memoizedProps);
            e = e.memoizedState;
            try {
              t.componentDidUpdate(r, e, t.__reactInternalSnapshotBeforeUpdate);
            } catch (v) {
              At(n, n.return, v);
            }
          }
        l & 64 && zd(n), l & 512 && mi(n, n.return);
        break;
      case 3:
        if ((mn(t, n), l & 64 && ((l = n.updateQueue), l !== null))) {
          if (((t = null), n.child !== null))
            switch (n.child.tag) {
              case 27:
              case 5:
                t = n.child.stateNode;
                break;
              case 1:
                t = n.child.stateNode;
            }
          try {
            Vd(l, t);
          } catch (v) {
            At(n, n.return, v);
          }
        }
        break;
      case 26:
        mn(t, n), l & 512 && mi(n, n.return);
        break;
      case 27:
      case 5:
        mn(t, n), e === null && l & 4 && Nd(n), l & 512 && mi(n, n.return);
        break;
      case 12:
        mn(t, n);
        break;
      case 13:
        mn(t, n), l & 4 && Kd(t, n);
        break;
      case 22:
        if (((r = n.memoizedState !== null || hn), !r)) {
          e = (e !== null && e.memoizedState !== null) || _t;
          var o = hn,
            d = _t;
          (hn = r),
            (_t = e) && !d ? Ln(t, n, (n.subtreeFlags & 8772) !== 0) : mn(t, n),
            (hn = o),
            (_t = d);
        }
        l & 512 &&
          (n.memoizedProps.mode === "manual"
            ? mi(n, n.return)
            : ge(n, n.return));
        break;
      default:
        mn(t, n);
    }
  }
  function Gd(t) {
    var e = t.alternate;
    e !== null && ((t.alternate = null), Gd(e)),
      (t.child = null),
      (t.deletions = null),
      (t.sibling = null),
      t.tag === 5 && ((e = t.stateNode), e !== null && Nu(e)),
      (t.stateNode = null),
      (t.return = null),
      (t.dependencies = null),
      (t.memoizedProps = null),
      (t.memoizedState = null),
      (t.pendingProps = null),
      (t.stateNode = null),
      (t.updateQueue = null);
  }
  var Yt = null,
    ve = !1;
  function dn(t, e, n) {
    for (n = n.child; n !== null; ) Xd(t, e, n), (n = n.sibling);
  }
  function Xd(t, e, n) {
    if (me && typeof me.onCommitFiberUnmount == "function")
      try {
        me.onCommitFiberUnmount(Ea, n);
      } catch {}
    switch (n.tag) {
      case 26:
        _t || ge(n, e),
          dn(t, e, n),
          n.memoizedState
            ? n.memoizedState.count--
            : n.stateNode && ((n = n.stateNode), n.parentNode.removeChild(n));
        break;
      case 27:
        _t || ge(n, e);
        var l = Yt,
          r = ve;
        for (
          Yt = n.stateNode, dn(t, e, n), n = n.stateNode, e = n.attributes;
          e.length;

        )
          n.removeAttributeNode(e[0]);
        Nu(n), (Yt = l), (ve = r);
        break;
      case 5:
        _t || ge(n, e);
      case 6:
        r = Yt;
        var o = ve;
        if (((Yt = null), dn(t, e, n), (Yt = r), (ve = o), Yt !== null))
          if (ve)
            try {
              (t = Yt),
                (l = n.stateNode),
                t.nodeType === 8
                  ? t.parentNode.removeChild(l)
                  : t.removeChild(l);
            } catch (d) {
              At(n, e, d);
            }
          else
            try {
              Yt.removeChild(n.stateNode);
            } catch (d) {
              At(n, e, d);
            }
        break;
      case 18:
        Yt !== null &&
          (ve
            ? ((e = Yt),
              (n = n.stateNode),
              e.nodeType === 8
                ? Co(e.parentNode, n)
                : e.nodeType === 1 && Co(e, n),
              vl(e))
            : Co(Yt, n.stateNode));
        break;
      case 4:
        (l = Yt),
          (r = ve),
          (Yt = n.stateNode.containerInfo),
          (ve = !0),
          dn(t, e, n),
          (Yt = l),
          (ve = r);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        _t || Nn(2, n, e), _t || Nn(4, n, e), dn(t, e, n);
        break;
      case 1:
        _t ||
          (ge(n, e),
          (l = n.stateNode),
          typeof l.componentWillUnmount == "function" && Bd(n, e, l)),
          dn(t, e, n);
        break;
      case 21:
        dn(t, e, n);
        break;
      case 22:
        _t || ge(n, e),
          (_t = (l = _t) || n.memoizedState !== null),
          dn(t, e, n),
          (_t = l);
        break;
      default:
        dn(t, e, n);
    }
  }
  function Kd(t, e) {
    if (
      e.memoizedState === null &&
      ((t = e.alternate),
      t !== null &&
        ((t = t.memoizedState), t !== null && ((t = t.dehydrated), t !== null)))
    )
      try {
        vl(t);
      } catch (n) {
        At(e, e.return, n);
      }
  }
  function aS(t) {
    switch (t.tag) {
      case 13:
      case 19:
        var e = t.stateNode;
        return e === null && (e = t.stateNode = new Hd()), e;
      case 22:
        return (
          (t = t.stateNode),
          (e = t._retryCache),
          e === null && (e = t._retryCache = new Hd()),
          e
        );
      default:
        throw Error(u(435, t.tag));
    }
  }
  function Wr(t, e) {
    var n = aS(t);
    e.forEach(function (l) {
      var r = gS.bind(null, t, l);
      n.has(l) || (n.add(l), l.then(r, r));
    });
  }
  function Ve(t, e) {
    var n = e.deletions;
    if (n !== null)
      for (var l = 0; l < n.length; l++) {
        var r = n[l],
          o = t,
          d = e,
          v = d;
        t: for (; v !== null; ) {
          switch (v.tag) {
            case 27:
            case 5:
              (Yt = v.stateNode), (ve = !1);
              break t;
            case 3:
              (Yt = v.stateNode.containerInfo), (ve = !0);
              break t;
            case 4:
              (Yt = v.stateNode.containerInfo), (ve = !0);
              break t;
          }
          v = v.return;
        }
        if (Yt === null) throw Error(u(160));
        Xd(o, d, r),
          (Yt = null),
          (ve = !1),
          (o = r.alternate),
          o !== null && (o.return = null),
          (r.return = null);
      }
    if (e.subtreeFlags & 13878)
      for (e = e.child; e !== null; ) Qd(e, t), (e = e.sibling);
  }
  var Ge = null;
  function Qd(t, e) {
    var n = t.alternate,
      l = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Ve(e, t),
          ze(t),
          l & 4 && (Nn(3, t, t.return), tl(3, t), Nn(5, t, t.return));
        break;
      case 1:
        Ve(e, t),
          ze(t),
          l & 512 && (_t || n === null || ge(n, n.return)),
          l & 64 &&
            hn &&
            ((t = t.updateQueue),
            t !== null &&
              ((l = t.callbacks),
              l !== null &&
                ((n = t.shared.hiddenCallbacks),
                (t.shared.hiddenCallbacks = n === null ? l : n.concat(l)))));
        break;
      case 26:
        var r = Ge;
        if (
          (Ve(e, t),
          ze(t),
          l & 512 && (_t || n === null || ge(n, n.return)),
          l & 4)
        ) {
          var o = n !== null ? n.memoizedState : null;
          if (((l = t.memoizedState), n === null))
            if (l === null)
              if (t.stateNode === null) {
                t: {
                  (l = t.type),
                    (n = t.memoizedProps),
                    (r = r.ownerDocument || r);
                  e: switch (l) {
                    case "title":
                      (o = r.getElementsByTagName("title")[0]),
                        (!o ||
                          o[xa] ||
                          o[It] ||
                          o.namespaceURI === "http://www.w3.org/2000/svg" ||
                          o.hasAttribute("itemprop")) &&
                          ((o = r.createElement(l)),
                          r.head.insertBefore(
                            o,
                            r.querySelector("head > title")
                          )),
                        Wt(o, l, n),
                        (o[It] = t),
                        Qt(o),
                        (l = o);
                      break t;
                    case "link":
                      var d = Nm("link", "href", r).get(l + (n.href || ""));
                      if (d) {
                        for (var v = 0; v < d.length; v++)
                          if (
                            ((o = d[v]),
                            o.getAttribute("href") ===
                              (n.href == null ? null : n.href) &&
                              o.getAttribute("rel") ===
                                (n.rel == null ? null : n.rel) &&
                              o.getAttribute("title") ===
                                (n.title == null ? null : n.title) &&
                              o.getAttribute("crossorigin") ===
                                (n.crossOrigin == null ? null : n.crossOrigin))
                          ) {
                            d.splice(v, 1);
                            break e;
                          }
                      }
                      (o = r.createElement(l)),
                        Wt(o, l, n),
                        r.head.appendChild(o);
                      break;
                    case "meta":
                      if (
                        (d = Nm("meta", "content", r).get(
                          l + (n.content || "")
                        ))
                      ) {
                        for (v = 0; v < d.length; v++)
                          if (
                            ((o = d[v]),
                            o.getAttribute("content") ===
                              (n.content == null ? null : "" + n.content) &&
                              o.getAttribute("name") ===
                                (n.name == null ? null : n.name) &&
                              o.getAttribute("property") ===
                                (n.property == null ? null : n.property) &&
                              o.getAttribute("http-equiv") ===
                                (n.httpEquiv == null ? null : n.httpEquiv) &&
                              o.getAttribute("charset") ===
                                (n.charSet == null ? null : n.charSet))
                          ) {
                            d.splice(v, 1);
                            break e;
                          }
                      }
                      (o = r.createElement(l)),
                        Wt(o, l, n),
                        r.head.appendChild(o);
                      break;
                    default:
                      throw Error(u(468, l));
                  }
                  (o[It] = t), Qt(o), (l = o);
                }
                t.stateNode = l;
              } else Lm(r, t.type, t.stateNode);
            else t.stateNode = Bm(r, l, t.memoizedProps);
          else
            o !== l
              ? (o === null
                  ? n.stateNode !== null &&
                    ((n = n.stateNode), n.parentNode.removeChild(n))
                  : o.count--,
                l === null
                  ? Lm(r, t.type, t.stateNode)
                  : Bm(r, l, t.memoizedProps))
              : l === null &&
                t.stateNode !== null &&
                Ld(t, t.memoizedProps, n.memoizedProps);
        }
        break;
      case 27:
        if (l & 4 && t.alternate === null) {
          (r = t.stateNode), (o = t.memoizedProps);
          try {
            for (var b = r.firstChild; b; ) {
              var R = b.nextSibling,
                z = b.nodeName;
              b[xa] ||
                z === "HEAD" ||
                z === "BODY" ||
                z === "SCRIPT" ||
                z === "STYLE" ||
                (z === "LINK" && b.rel.toLowerCase() === "stylesheet") ||
                r.removeChild(b),
                (b = R);
            }
            for (var L = t.type, C = r.attributes; C.length; )
              r.removeAttributeNode(C[0]);
            Wt(r, L, o), (r[It] = t), (r[ce] = o);
          } catch (Z) {
            At(t, t.return, Z);
          }
        }
      case 5:
        if (
          (Ve(e, t),
          ze(t),
          l & 512 && (_t || n === null || ge(n, n.return)),
          t.flags & 32)
        ) {
          r = t.stateNode;
          try {
            Vi(r, "");
          } catch (Z) {
            At(t, t.return, Z);
          }
        }
        l & 4 &&
          t.stateNode != null &&
          ((r = t.memoizedProps), Ld(t, r, n !== null ? n.memoizedProps : r)),
          l & 1024 && (Jr = !0);
        break;
      case 6:
        if ((Ve(e, t), ze(t), l & 4)) {
          if (t.stateNode === null) throw Error(u(162));
          (l = t.memoizedProps), (n = t.stateNode);
          try {
            n.nodeValue = l;
          } catch (Z) {
            At(t, t.return, Z);
          }
        }
        break;
      case 3:
        if (
          ((Zs = null),
          (r = Ge),
          (Ge = Ks(e.containerInfo)),
          Ve(e, t),
          (Ge = r),
          ze(t),
          l & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            vl(e.containerInfo);
          } catch (Z) {
            At(t, t.return, Z);
          }
        Jr && ((Jr = !1), Zd(t));
        break;
      case 4:
        (l = Ge),
          (Ge = Ks(t.stateNode.containerInfo)),
          Ve(e, t),
          ze(t),
          (Ge = l);
        break;
      case 12:
        Ve(e, t), ze(t);
        break;
      case 13:
        Ve(e, t),
          ze(t),
          t.child.flags & 8192 &&
            (t.memoizedState !== null) !=
              (n !== null && n.memoizedState !== null) &&
            (so = Pe()),
          l & 4 &&
            ((l = t.updateQueue),
            l !== null && ((t.updateQueue = null), Wr(t, l)));
        break;
      case 22:
        if (
          (l & 512 && (_t || n === null || ge(n, n.return)),
          (b = t.memoizedState !== null),
          (R = n !== null && n.memoizedState !== null),
          (z = hn),
          (L = _t),
          (hn = z || b),
          (_t = L || R),
          Ve(e, t),
          (_t = L),
          (hn = z),
          ze(t),
          (e = t.stateNode),
          (e._current = t),
          (e._visibility &= -3),
          (e._visibility |= e._pendingVisibility & 2),
          l & 8192 &&
            ((e._visibility = b ? e._visibility & -2 : e._visibility | 1),
            b && ((e = hn || _t), n === null || R || e || Ji(t)),
            t.memoizedProps === null || t.memoizedProps.mode !== "manual"))
        )
          t: for (n = null, e = t; ; ) {
            if (e.tag === 5 || e.tag === 26 || e.tag === 27) {
              if (n === null) {
                R = n = e;
                try {
                  if (((r = R.stateNode), b))
                    (o = r.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none");
                  else {
                    (d = R.stateNode), (v = R.memoizedProps.style);
                    var V =
                      v != null && v.hasOwnProperty("display")
                        ? v.display
                        : null;
                    d.style.display =
                      V == null || typeof V == "boolean" ? "" : ("" + V).trim();
                  }
                } catch (Z) {
                  At(R, R.return, Z);
                }
              }
            } else if (e.tag === 6) {
              if (n === null) {
                R = e;
                try {
                  R.stateNode.nodeValue = b ? "" : R.memoizedProps;
                } catch (Z) {
                  At(R, R.return, Z);
                }
              }
            } else if (
              ((e.tag !== 22 && e.tag !== 23) ||
                e.memoizedState === null ||
                e === t) &&
              e.child !== null
            ) {
              (e.child.return = e), (e = e.child);
              continue;
            }
            if (e === t) break t;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t) break t;
              n === e && (n = null), (e = e.return);
            }
            n === e && (n = null),
              (e.sibling.return = e.return),
              (e = e.sibling);
          }
        l & 4 &&
          ((l = t.updateQueue),
          l !== null &&
            ((n = l.retryQueue),
            n !== null && ((l.retryQueue = null), Wr(t, n))));
        break;
      case 19:
        Ve(e, t),
          ze(t),
          l & 4 &&
            ((l = t.updateQueue),
            l !== null && ((t.updateQueue = null), Wr(t, l)));
        break;
      case 21:
        break;
      default:
        Ve(e, t), ze(t);
    }
  }
  function ze(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        if (t.tag !== 27) {
          t: {
            for (var n = t.return; n !== null; ) {
              if (jd(n)) {
                var l = n;
                break t;
              }
              n = n.return;
            }
            throw Error(u(160));
          }
          switch (l.tag) {
            case 27:
              var r = l.stateNode,
                o = Fr(t);
              Cs(t, o, r);
              break;
            case 5:
              var d = l.stateNode;
              l.flags & 32 && (Vi(d, ""), (l.flags &= -33));
              var v = Fr(t);
              Cs(t, v, d);
              break;
            case 3:
            case 4:
              var b = l.stateNode.containerInfo,
                R = Fr(t);
              kr(t, R, b);
              break;
            default:
              throw Error(u(161));
          }
        }
      } catch (z) {
        At(t, t.return, z);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function Zd(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var e = t;
        Zd(e),
          e.tag === 5 && e.flags & 1024 && e.stateNode.reset(),
          (t = t.sibling);
      }
  }
  function mn(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null; ) Yd(t, e.alternate, e), (e = e.sibling);
  }
  function Ji(t) {
    for (t = t.child; t !== null; ) {
      var e = t;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Nn(4, e, e.return), Ji(e);
          break;
        case 1:
          ge(e, e.return);
          var n = e.stateNode;
          typeof n.componentWillUnmount == "function" && Bd(e, e.return, n),
            Ji(e);
          break;
        case 26:
        case 27:
        case 5:
          ge(e, e.return), Ji(e);
          break;
        case 22:
          ge(e, e.return), e.memoizedState === null && Ji(e);
          break;
        default:
          Ji(e);
      }
      t = t.sibling;
    }
  }
  function Ln(t, e, n) {
    for (n = n && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
      var l = e.alternate,
        r = t,
        o = e,
        d = o.flags;
      switch (o.tag) {
        case 0:
        case 11:
        case 15:
          Ln(r, o, n), tl(4, o);
          break;
        case 1:
          if (
            (Ln(r, o, n),
            (l = o),
            (r = l.stateNode),
            typeof r.componentDidMount == "function")
          )
            try {
              r.componentDidMount();
            } catch (R) {
              At(l, l.return, R);
            }
          if (((l = o), (r = l.updateQueue), r !== null)) {
            var v = l.stateNode;
            try {
              var b = r.shared.hiddenCallbacks;
              if (b !== null)
                for (r.shared.hiddenCallbacks = null, r = 0; r < b.length; r++)
                  Ud(b[r], v);
            } catch (R) {
              At(l, l.return, R);
            }
          }
          n && d & 64 && zd(o), mi(o, o.return);
          break;
        case 26:
        case 27:
        case 5:
          Ln(r, o, n), n && l === null && d & 4 && Nd(o), mi(o, o.return);
          break;
        case 12:
          Ln(r, o, n);
          break;
        case 13:
          Ln(r, o, n), n && d & 4 && Kd(r, o);
          break;
        case 22:
          o.memoizedState === null && Ln(r, o, n), mi(o, o.return);
          break;
        default:
          Ln(r, o, n);
      }
      e = e.sibling;
    }
  }
  function $r(t, e) {
    var n = null;
    t !== null &&
      t.memoizedState !== null &&
      t.memoizedState.cachePool !== null &&
      (n = t.memoizedState.cachePool.pool),
      (t = null),
      e.memoizedState !== null &&
        e.memoizedState.cachePool !== null &&
        (t = e.memoizedState.cachePool.pool),
      t !== n && (t != null && t.refCount++, n != null && Ka(n));
  }
  function Ir(t, e) {
    (t = null),
      e.alternate !== null && (t = e.alternate.memoizedState.cache),
      (e = e.memoizedState.cache),
      e !== t && (e.refCount++, t != null && Ka(t));
  }
  function jn(t, e, n, l) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) Pd(t, e, n, l), (e = e.sibling);
  }
  function Pd(t, e, n, l) {
    var r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        jn(t, e, n, l), r & 2048 && tl(9, e);
        break;
      case 3:
        jn(t, e, n, l),
          r & 2048 &&
            ((t = null),
            e.alternate !== null && (t = e.alternate.memoizedState.cache),
            (e = e.memoizedState.cache),
            e !== t && (e.refCount++, t != null && Ka(t)));
        break;
      case 12:
        if (r & 2048) {
          jn(t, e, n, l), (t = e.stateNode);
          try {
            var o = e.memoizedProps,
              d = o.id,
              v = o.onPostCommit;
            typeof v == "function" &&
              v(
                d,
                e.alternate === null ? "mount" : "update",
                t.passiveEffectDuration,
                -0
              );
          } catch (b) {
            At(e, e.return, b);
          }
        } else jn(t, e, n, l);
        break;
      case 23:
        break;
      case 22:
        (o = e.stateNode),
          e.memoizedState !== null
            ? o._visibility & 4
              ? jn(t, e, n, l)
              : el(t, e)
            : o._visibility & 4
            ? jn(t, e, n, l)
            : ((o._visibility |= 4),
              Wi(t, e, n, l, (e.subtreeFlags & 10256) !== 0)),
          r & 2048 && $r(e.alternate, e);
        break;
      case 24:
        jn(t, e, n, l), r & 2048 && Ir(e.alternate, e);
        break;
      default:
        jn(t, e, n, l);
    }
  }
  function Wi(t, e, n, l, r) {
    for (r = r && (e.subtreeFlags & 10256) !== 0, e = e.child; e !== null; ) {
      var o = t,
        d = e,
        v = n,
        b = l,
        R = d.flags;
      switch (d.tag) {
        case 0:
        case 11:
        case 15:
          Wi(o, d, v, b, r), tl(8, d);
          break;
        case 23:
          break;
        case 22:
          var z = d.stateNode;
          d.memoizedState !== null
            ? z._visibility & 4
              ? Wi(o, d, v, b, r)
              : el(o, d)
            : ((z._visibility |= 4), Wi(o, d, v, b, r)),
            r && R & 2048 && $r(d.alternate, d);
          break;
        case 24:
          Wi(o, d, v, b, r), r && R & 2048 && Ir(d.alternate, d);
          break;
        default:
          Wi(o, d, v, b, r);
      }
      e = e.sibling;
    }
  }
  function el(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var n = t,
          l = e,
          r = l.flags;
        switch (l.tag) {
          case 22:
            el(n, l), r & 2048 && $r(l.alternate, l);
            break;
          case 24:
            el(n, l), r & 2048 && Ir(l.alternate, l);
            break;
          default:
            el(n, l);
        }
        e = e.sibling;
      }
  }
  var nl = 8192;
  function $i(t) {
    if (t.subtreeFlags & nl)
      for (t = t.child; t !== null; ) Fd(t), (t = t.sibling);
  }
  function Fd(t) {
    switch (t.tag) {
      case 26:
        $i(t),
          t.flags & nl &&
            t.memoizedState !== null &&
            ZS(Ge, t.memoizedState, t.memoizedProps);
        break;
      case 5:
        $i(t);
        break;
      case 3:
      case 4:
        var e = Ge;
        (Ge = Ks(t.stateNode.containerInfo)), $i(t), (Ge = e);
        break;
      case 22:
        t.memoizedState === null &&
          ((e = t.alternate),
          e !== null && e.memoizedState !== null
            ? ((e = nl), (nl = 16777216), $i(t), (nl = e))
            : $i(t));
        break;
      default:
        $i(t);
    }
  }
  function kd(t) {
    var e = t.alternate;
    if (e !== null && ((t = e.child), t !== null)) {
      e.child = null;
      do (e = t.sibling), (t.sibling = null), (t = e);
      while (t !== null);
    }
  }
  function il(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var n = 0; n < e.length; n++) {
          var l = e[n];
          (Pt = l), Wd(l, t);
        }
      kd(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) Jd(t), (t = t.sibling);
  }
  function Jd(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        il(t), t.flags & 2048 && Nn(9, t, t.return);
        break;
      case 3:
        il(t);
        break;
      case 12:
        il(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null &&
        e._visibility & 4 &&
        (t.return === null || t.return.tag !== 13)
          ? ((e._visibility &= -5), _s(t))
          : il(t);
        break;
      default:
        il(t);
    }
  }
  function _s(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var n = 0; n < e.length; n++) {
          var l = e[n];
          (Pt = l), Wd(l, t);
        }
      kd(t);
    }
    for (t = t.child; t !== null; ) {
      switch (((e = t), e.tag)) {
        case 0:
        case 11:
        case 15:
          Nn(8, e, e.return), _s(e);
          break;
        case 22:
          (n = e.stateNode),
            n._visibility & 4 && ((n._visibility &= -5), _s(e));
          break;
        default:
          _s(e);
      }
      t = t.sibling;
    }
  }
  function Wd(t, e) {
    for (; Pt !== null; ) {
      var n = Pt;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          Nn(8, n, e);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var l = n.memoizedState.cachePool.pool;
            l != null && l.refCount++;
          }
          break;
        case 24:
          Ka(n.memoizedState.cache);
      }
      if (((l = n.child), l !== null)) (l.return = n), (Pt = l);
      else
        t: for (n = t; Pt !== null; ) {
          l = Pt;
          var r = l.sibling,
            o = l.return;
          if ((Gd(l), l === n)) {
            Pt = null;
            break t;
          }
          if (r !== null) {
            (r.return = o), (Pt = r);
            break t;
          }
          Pt = o;
        }
    }
  }
  function lS(t, e, n, l) {
    (this.tag = t),
      (this.key = n),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = e),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = l),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function Be(t, e, n, l) {
    return new lS(t, e, n, l);
  }
  function to(t) {
    return (t = t.prototype), !(!t || !t.isReactComponent);
  }
  function Hn(t, e) {
    var n = t.alternate;
    return (
      n === null
        ? ((n = Be(t.tag, e, t.key, t.mode)),
          (n.elementType = t.elementType),
          (n.type = t.type),
          (n.stateNode = t.stateNode),
          (n.alternate = t),
          (t.alternate = n))
        : ((n.pendingProps = e),
          (n.type = t.type),
          (n.flags = 0),
          (n.subtreeFlags = 0),
          (n.deletions = null)),
      (n.flags = t.flags & 31457280),
      (n.childLanes = t.childLanes),
      (n.lanes = t.lanes),
      (n.child = t.child),
      (n.memoizedProps = t.memoizedProps),
      (n.memoizedState = t.memoizedState),
      (n.updateQueue = t.updateQueue),
      (e = t.dependencies),
      (n.dependencies =
        e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }),
      (n.sibling = t.sibling),
      (n.index = t.index),
      (n.ref = t.ref),
      (n.refCleanup = t.refCleanup),
      n
    );
  }
  function $d(t, e) {
    t.flags &= 31457282;
    var n = t.alternate;
    return (
      n === null
        ? ((t.childLanes = 0),
          (t.lanes = e),
          (t.child = null),
          (t.subtreeFlags = 0),
          (t.memoizedProps = null),
          (t.memoizedState = null),
          (t.updateQueue = null),
          (t.dependencies = null),
          (t.stateNode = null))
        : ((t.childLanes = n.childLanes),
          (t.lanes = n.lanes),
          (t.child = n.child),
          (t.subtreeFlags = 0),
          (t.deletions = null),
          (t.memoizedProps = n.memoizedProps),
          (t.memoizedState = n.memoizedState),
          (t.updateQueue = n.updateQueue),
          (t.type = n.type),
          (e = n.dependencies),
          (t.dependencies =
            e === null
              ? null
              : { lanes: e.lanes, firstContext: e.firstContext })),
      t
    );
  }
  function ws(t, e, n, l, r, o) {
    var d = 0;
    if (((l = t), typeof t == "function")) to(t) && (d = 1);
    else if (typeof t == "string")
      d = KS(t, n, Ze.current)
        ? 26
        : t === "html" || t === "head" || t === "body"
        ? 27
        : 5;
    else
      t: switch (t) {
        case y:
          return pi(n.children, r, o, e);
        case p:
          (d = 8), (r |= 24);
          break;
        case g:
          return (
            (t = Be(12, n, e, r | 2)), (t.elementType = g), (t.lanes = o), t
          );
        case _:
          return (t = Be(13, n, e, r)), (t.elementType = _), (t.lanes = o), t;
        case U:
          return (t = Be(19, n, e, r)), (t.elementType = U), (t.lanes = o), t;
        case Y:
          return Id(n, r, o, e);
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case S:
              case M:
                d = 10;
                break t;
              case T:
                d = 9;
                break t;
              case O:
                d = 11;
                break t;
              case N:
                d = 14;
                break t;
              case q:
                (d = 16), (l = null);
                break t;
            }
          (d = 29),
            (n = Error(u(130, t === null ? "null" : typeof t, ""))),
            (l = null);
      }
    return (
      (e = Be(d, n, e, r)), (e.elementType = t), (e.type = l), (e.lanes = o), e
    );
  }
  function pi(t, e, n, l) {
    return (t = Be(7, t, l, e)), (t.lanes = n), t;
  }
  function Id(t, e, n, l) {
    (t = Be(22, t, l, e)), (t.elementType = Y), (t.lanes = n);
    var r = {
      _visibility: 1,
      _pendingVisibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null,
      _current: null,
      detach: function () {
        var o = r._current;
        if (o === null) throw Error(u(456));
        if ((r._pendingVisibility & 2) === 0) {
          var d = On(o, 2);
          d !== null && ((r._pendingVisibility |= 2), re(d, o, 2));
        }
      },
      attach: function () {
        var o = r._current;
        if (o === null) throw Error(u(456));
        if ((r._pendingVisibility & 2) !== 0) {
          var d = On(o, 2);
          d !== null && ((r._pendingVisibility &= -3), re(d, o, 2));
        }
      },
    };
    return (t.stateNode = r), t;
  }
  function eo(t, e, n) {
    return (t = Be(6, t, null, e)), (t.lanes = n), t;
  }
  function no(t, e, n) {
    return (
      (e = Be(4, t.children !== null ? t.children : [], t.key, e)),
      (e.lanes = n),
      (e.stateNode = {
        containerInfo: t.containerInfo,
        pendingChildren: null,
        implementation: t.implementation,
      }),
      e
    );
  }
  function pn(t) {
    t.flags |= 4;
  }
  function tm(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (((t.flags |= 16777216), !jm(e))) {
      if (
        ((e = Ue.current),
        e !== null &&
          ((pt & 4194176) === pt
            ? ke !== null
            : ((pt & 62914560) !== pt && (pt & 536870912) === 0) || e !== ke))
      )
        throw ((Ya = ur), gh);
      t.flags |= 8192;
    }
  }
  function Us(t, e) {
    e !== null && (t.flags |= 4),
      t.flags & 16384 &&
        ((e = t.tag !== 22 ? vf() : 536870912), (t.lanes |= e), (ta |= e));
  }
  function al(t, e) {
    if (!yt)
      switch (t.tailMode) {
        case "hidden":
          e = t.tail;
          for (var n = null; e !== null; )
            e.alternate !== null && (n = e), (e = e.sibling);
          n === null ? (t.tail = null) : (n.sibling = null);
          break;
        case "collapsed":
          n = t.tail;
          for (var l = null; n !== null; )
            n.alternate !== null && (l = n), (n = n.sibling);
          l === null
            ? e || t.tail === null
              ? (t.tail = null)
              : (t.tail.sibling = null)
            : (l.sibling = null);
      }
  }
  function Ot(t) {
    var e = t.alternate !== null && t.alternate.child === t.child,
      n = 0,
      l = 0;
    if (e)
      for (var r = t.child; r !== null; )
        (n |= r.lanes | r.childLanes),
          (l |= r.subtreeFlags & 31457280),
          (l |= r.flags & 31457280),
          (r.return = t),
          (r = r.sibling);
    else
      for (r = t.child; r !== null; )
        (n |= r.lanes | r.childLanes),
          (l |= r.subtreeFlags),
          (l |= r.flags),
          (r.return = t),
          (r = r.sibling);
    return (t.subtreeFlags |= l), (t.childLanes = n), e;
  }
  function sS(t, e, n) {
    var l = e.pendingProps;
    switch ((lr(e), e.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Ot(e), null;
      case 1:
        return Ot(e), null;
      case 3:
        return (
          (n = e.stateNode),
          (l = null),
          t !== null && (l = t.memoizedState.cache),
          e.memoizedState.cache !== l && (e.flags |= 2048),
          fn(Kt),
          Oi(),
          n.pendingContext &&
            ((n.context = n.pendingContext), (n.pendingContext = null)),
          (t === null || t.child === null) &&
            (La(e)
              ? pn(e)
              : t === null ||
                (t.memoizedState.isDehydrated && (e.flags & 256) === 0) ||
                ((e.flags |= 1024), Ye !== null && (co(Ye), (Ye = null)))),
          Ot(e),
          null
        );
      case 26:
        return (
          (n = e.memoizedState),
          t === null
            ? (pn(e),
              n !== null ? (Ot(e), tm(e, n)) : (Ot(e), (e.flags &= -16777217)))
            : n
            ? n !== t.memoizedState
              ? (pn(e), Ot(e), tm(e, n))
              : (Ot(e), (e.flags &= -16777217))
            : (t.memoizedProps !== l && pn(e), Ot(e), (e.flags &= -16777217)),
          null
        );
      case 27:
        Kl(e), (n = En.current);
        var r = e.type;
        if (t !== null && e.stateNode != null) t.memoizedProps !== l && pn(e);
        else {
          if (!l) {
            if (e.stateNode === null) throw Error(u(166));
            return Ot(e), null;
          }
          (t = Ze.current),
            La(e) ? ph(e) : ((t = _m(r, l, n)), (e.stateNode = t), pn(e));
        }
        return Ot(e), null;
      case 5:
        if ((Kl(e), (n = e.type), t !== null && e.stateNode != null))
          t.memoizedProps !== l && pn(e);
        else {
          if (!l) {
            if (e.stateNode === null) throw Error(u(166));
            return Ot(e), null;
          }
          if (((t = Ze.current), La(e))) ph(e);
          else {
            switch (((r = Xs(En.current)), t)) {
              case 1:
                t = r.createElementNS("http://www.w3.org/2000/svg", n);
                break;
              case 2:
                t = r.createElementNS("http://www.w3.org/1998/Math/MathML", n);
                break;
              default:
                switch (n) {
                  case "svg":
                    t = r.createElementNS("http://www.w3.org/2000/svg", n);
                    break;
                  case "math":
                    t = r.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      n
                    );
                    break;
                  case "script":
                    (t = r.createElement("div")),
                      (t.innerHTML = "<script></script>"),
                      (t = t.removeChild(t.firstChild));
                    break;
                  case "select":
                    (t =
                      typeof l.is == "string"
                        ? r.createElement("select", { is: l.is })
                        : r.createElement("select")),
                      l.multiple
                        ? (t.multiple = !0)
                        : l.size && (t.size = l.size);
                    break;
                  default:
                    t =
                      typeof l.is == "string"
                        ? r.createElement(n, { is: l.is })
                        : r.createElement(n);
                }
            }
            (t[It] = e), (t[ce] = l);
            t: for (r = e.child; r !== null; ) {
              if (r.tag === 5 || r.tag === 6) t.appendChild(r.stateNode);
              else if (r.tag !== 4 && r.tag !== 27 && r.child !== null) {
                (r.child.return = r), (r = r.child);
                continue;
              }
              if (r === e) break t;
              for (; r.sibling === null; ) {
                if (r.return === null || r.return === e) break t;
                r = r.return;
              }
              (r.sibling.return = r.return), (r = r.sibling);
            }
            e.stateNode = t;
            t: switch ((Wt(t, n, l), n)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                t = !!l.autoFocus;
                break t;
              case "img":
                t = !0;
                break t;
              default:
                t = !1;
            }
            t && pn(e);
          }
        }
        return Ot(e), (e.flags &= -16777217), null;
      case 6:
        if (t && e.stateNode != null) t.memoizedProps !== l && pn(e);
        else {
          if (typeof l != "string" && e.stateNode === null) throw Error(u(166));
          if (((t = En.current), La(e))) {
            if (
              ((t = e.stateNode),
              (n = e.memoizedProps),
              (l = null),
              (r = ue),
              r !== null)
            )
              switch (r.tag) {
                case 27:
                case 5:
                  l = r.memoizedProps;
              }
            (t[It] = e),
              (t = !!(
                t.nodeValue === n ||
                (l !== null && l.suppressHydrationWarning === !0) ||
                Rm(t.nodeValue, n)
              )),
              t || li(e);
          } else (t = Xs(t).createTextNode(l)), (t[It] = e), (e.stateNode = t);
        }
        return Ot(e), null;
      case 13:
        if (
          ((l = e.memoizedState),
          t === null ||
            (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
        ) {
          if (((r = La(e)), l !== null && l.dehydrated !== null)) {
            if (t === null) {
              if (!r) throw Error(u(318));
              if (
                ((r = e.memoizedState),
                (r = r !== null ? r.dehydrated : null),
                !r)
              )
                throw Error(u(317));
              r[It] = e;
            } else
              ja(),
                (e.flags & 128) === 0 && (e.memoizedState = null),
                (e.flags |= 4);
            Ot(e), (r = !1);
          } else Ye !== null && (co(Ye), (Ye = null)), (r = !0);
          if (!r) return e.flags & 256 ? (un(e), e) : (un(e), null);
        }
        if ((un(e), (e.flags & 128) !== 0)) return (e.lanes = n), e;
        if (
          ((n = l !== null), (t = t !== null && t.memoizedState !== null), n)
        ) {
          (l = e.child),
            (r = null),
            l.alternate !== null &&
              l.alternate.memoizedState !== null &&
              l.alternate.memoizedState.cachePool !== null &&
              (r = l.alternate.memoizedState.cachePool.pool);
          var o = null;
          l.memoizedState !== null &&
            l.memoizedState.cachePool !== null &&
            (o = l.memoizedState.cachePool.pool),
            o !== r && (l.flags |= 2048);
        }
        return (
          n !== t && n && (e.child.flags |= 8192),
          Us(e, e.updateQueue),
          Ot(e),
          null
        );
      case 4:
        return Oi(), t === null && Ao(e.stateNode.containerInfo), Ot(e), null;
      case 10:
        return fn(e.type), Ot(e), null;
      case 19:
        if ((jt(Xt), (r = e.memoizedState), r === null)) return Ot(e), null;
        if (((l = (e.flags & 128) !== 0), (o = r.rendering), o === null))
          if (l) al(r, !1);
          else {
            if (wt !== 0 || (t !== null && (t.flags & 128) !== 0))
              for (t = e.child; t !== null; ) {
                if (((o = ps(t)), o !== null)) {
                  for (
                    e.flags |= 128,
                      al(r, !1),
                      t = o.updateQueue,
                      e.updateQueue = t,
                      Us(e, t),
                      e.subtreeFlags = 0,
                      t = n,
                      n = e.child;
                    n !== null;

                  )
                    $d(n, t), (n = n.sibling);
                  return xt(Xt, (Xt.current & 1) | 2), e.child;
                }
                t = t.sibling;
              }
            r.tail !== null &&
              Pe() > Vs &&
              ((e.flags |= 128), (l = !0), al(r, !1), (e.lanes = 4194304));
          }
        else {
          if (!l)
            if (((t = ps(o)), t !== null)) {
              if (
                ((e.flags |= 128),
                (l = !0),
                (t = t.updateQueue),
                (e.updateQueue = t),
                Us(e, t),
                al(r, !0),
                r.tail === null &&
                  r.tailMode === "hidden" &&
                  !o.alternate &&
                  !yt)
              )
                return Ot(e), null;
            } else
              2 * Pe() - r.renderingStartTime > Vs &&
                n !== 536870912 &&
                ((e.flags |= 128), (l = !0), al(r, !1), (e.lanes = 4194304));
          r.isBackwards
            ? ((o.sibling = e.child), (e.child = o))
            : ((t = r.last),
              t !== null ? (t.sibling = o) : (e.child = o),
              (r.last = o));
        }
        return r.tail !== null
          ? ((e = r.tail),
            (r.rendering = e),
            (r.tail = e.sibling),
            (r.renderingStartTime = Pe()),
            (e.sibling = null),
            (t = Xt.current),
            xt(Xt, l ? (t & 1) | 2 : t & 1),
            e)
          : (Ot(e), null);
      case 22:
      case 23:
        return (
          un(e),
          or(),
          (l = e.memoizedState !== null),
          t !== null
            ? (t.memoizedState !== null) !== l && (e.flags |= 8192)
            : l && (e.flags |= 8192),
          l
            ? (n & 536870912) !== 0 &&
              (e.flags & 128) === 0 &&
              (Ot(e), e.subtreeFlags & 6 && (e.flags |= 8192))
            : Ot(e),
          (n = e.updateQueue),
          n !== null && Us(e, n.retryQueue),
          (n = null),
          t !== null &&
            t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (n = t.memoizedState.cachePool.pool),
          (l = null),
          e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (l = e.memoizedState.cachePool.pool),
          l !== n && (e.flags |= 2048),
          t !== null && jt(ui),
          null
        );
      case 24:
        return (
          (n = null),
          t !== null && (n = t.memoizedState.cache),
          e.memoizedState.cache !== n && (e.flags |= 2048),
          fn(Kt),
          Ot(e),
          null
        );
      case 25:
        return null;
    }
    throw Error(u(156, e.tag));
  }
  function uS(t, e) {
    switch ((lr(e), e.tag)) {
      case 1:
        return (
          (t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 3:
        return (
          fn(Kt),
          Oi(),
          (t = e.flags),
          (t & 65536) !== 0 && (t & 128) === 0
            ? ((e.flags = (t & -65537) | 128), e)
            : null
        );
      case 26:
      case 27:
      case 5:
        return Kl(e), null;
      case 13:
        if (
          (un(e), (t = e.memoizedState), t !== null && t.dehydrated !== null)
        ) {
          if (e.alternate === null) throw Error(u(340));
          ja();
        }
        return (
          (t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 19:
        return jt(Xt), null;
      case 4:
        return Oi(), null;
      case 10:
        return fn(e.type), null;
      case 22:
      case 23:
        return (
          un(e),
          or(),
          t !== null && jt(ui),
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 24:
        return fn(Kt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function em(t, e) {
    switch ((lr(e), e.tag)) {
      case 3:
        fn(Kt), Oi();
        break;
      case 26:
      case 27:
      case 5:
        Kl(e);
        break;
      case 4:
        Oi();
        break;
      case 13:
        un(e);
        break;
      case 19:
        jt(Xt);
        break;
      case 10:
        fn(e.type);
        break;
      case 22:
      case 23:
        un(e), or(), t !== null && jt(ui);
        break;
      case 24:
        fn(Kt);
    }
  }
  var rS = {
      getCacheForType: function (t) {
        var e = te(Kt),
          n = e.data.get(t);
        return n === void 0 && ((n = t()), e.data.set(t, n)), n;
      },
    },
    oS = typeof WeakMap == "function" ? WeakMap : Map,
    Mt = 0,
    Et = null,
    ft = null,
    pt = 0,
    Rt = 0,
    Se = null,
    yn = !1,
    Ii = !1,
    io = !1,
    gn = 0,
    wt = 0,
    qn = 0,
    yi = 0,
    ao = 0,
    Ne = 0,
    ta = 0,
    ll = null,
    We = null,
    lo = !1,
    so = 0,
    Vs = 1 / 0,
    zs = null,
    Yn = null,
    Bs = !1,
    gi = null,
    sl = 0,
    uo = 0,
    ro = null,
    ul = 0,
    oo = null;
  function be() {
    if ((Mt & 2) !== 0 && pt !== 0) return pt & -pt;
    if (X.T !== null) {
      var t = Qi;
      return t !== 0 ? t : vo();
    }
    return Af();
  }
  function nm() {
    Ne === 0 && (Ne = (pt & 536870912) === 0 || yt ? gf() : 536870912);
    var t = Ue.current;
    return t !== null && (t.flags |= 32), Ne;
  }
  function re(t, e, n) {
    ((t === Et && Rt === 2) || t.cancelPendingCommit !== null) &&
      (ea(t, 0), vn(t, pt, Ne, !1)),
      Da(t, n),
      ((Mt & 2) === 0 || t !== Et) &&
        (t === Et &&
          ((Mt & 2) === 0 && (yi |= n), wt === 4 && vn(t, pt, Ne, !1)),
        $e(t));
  }
  function im(t, e, n) {
    if ((Mt & 6) !== 0) throw Error(u(327));
    var l = (!n && (e & 60) === 0 && (e & t.expiredLanes) === 0) || Ra(t, e),
      r = l ? hS(t, e) : mo(t, e, !0),
      o = l;
    do {
      if (r === 0) {
        Ii && !l && vn(t, e, 0, !1);
        break;
      } else if (r === 6) vn(t, e, 0, !yn);
      else {
        if (((n = t.current.alternate), o && !cS(n))) {
          (r = mo(t, e, !1)), (o = !1);
          continue;
        }
        if (r === 2) {
          if (((o = e), t.errorRecoveryDisabledLanes & o)) var d = 0;
          else
            (d = t.pendingLanes & -536870913),
              (d = d !== 0 ? d : d & 536870912 ? 536870912 : 0);
          if (d !== 0) {
            e = d;
            t: {
              var v = t;
              r = ll;
              var b = v.current.memoizedState.isDehydrated;
              if ((b && (ea(v, d).flags |= 256), (d = mo(v, d, !1)), d !== 2)) {
                if (io && !b) {
                  (v.errorRecoveryDisabledLanes |= o), (yi |= o), (r = 4);
                  break t;
                }
                (o = We), (We = r), o !== null && co(o);
              }
              r = d;
            }
            if (((o = !1), r !== 2)) continue;
          }
        }
        if (r === 1) {
          ea(t, 0), vn(t, e, 0, !0);
          break;
        }
        t: {
          switch (((l = t), r)) {
            case 0:
            case 1:
              throw Error(u(345));
            case 4:
              if ((e & 4194176) === e) {
                vn(l, e, Ne, !yn);
                break t;
              }
              break;
            case 2:
              We = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(u(329));
          }
          if (
            ((l.finishedWork = n),
            (l.finishedLanes = e),
            (e & 62914560) === e && ((o = so + 300 - Pe()), 10 < o))
          ) {
            if ((vn(l, e, Ne, !yn), Fl(l, 0) !== 0)) break t;
            l.timeoutHandle = Om(
              am.bind(null, l, n, We, zs, lo, e, Ne, yi, ta, yn, 2, -0, 0),
              o
            );
            break t;
          }
          am(l, n, We, zs, lo, e, Ne, yi, ta, yn, 0, -0, 0);
        }
      }
      break;
    } while (!0);
    $e(t);
  }
  function co(t) {
    We === null ? (We = t) : We.push.apply(We, t);
  }
  function am(t, e, n, l, r, o, d, v, b, R, z, L, C) {
    var V = e.subtreeFlags;
    if (
      (V & 8192 || (V & 16785408) === 16785408) &&
      ((dl = { stylesheets: null, count: 0, unsuspend: QS }),
      Fd(e),
      (e = PS()),
      e !== null)
    ) {
      (t.cancelPendingCommit = e(fm.bind(null, t, n, l, r, d, v, b, 1, L, C))),
        vn(t, o, d, !R);
      return;
    }
    fm(t, n, l, r, d, v, b, z, L, C);
  }
  function cS(t) {
    for (var e = t; ; ) {
      var n = e.tag;
      if (
        (n === 0 || n === 11 || n === 15) &&
        e.flags & 16384 &&
        ((n = e.updateQueue), n !== null && ((n = n.stores), n !== null))
      )
        for (var l = 0; l < n.length; l++) {
          var r = n[l],
            o = r.getSnapshot;
          r = r.value;
          try {
            if (!ye(o(), r)) return !1;
          } catch {
            return !1;
          }
        }
      if (((n = e.child), e.subtreeFlags & 16384 && n !== null))
        (n.return = e), (e = n);
      else {
        if (e === t) break;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) return !0;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    }
    return !0;
  }
  function vn(t, e, n, l) {
    (e &= ~ao),
      (e &= ~yi),
      (t.suspendedLanes |= e),
      (t.pingedLanes &= ~e),
      l && (t.warmLanes |= e),
      (l = t.expirationTimes);
    for (var r = e; 0 < r; ) {
      var o = 31 - pe(r),
        d = 1 << o;
      (l[o] = -1), (r &= ~d);
    }
    n !== 0 && Sf(t, n, e);
  }
  function Ns() {
    return (Mt & 6) === 0 ? (rl(0), !1) : !0;
  }
  function fo() {
    if (ft !== null) {
      if (Rt === 0) var t = ft.return;
      else (t = ft), (cn = hi = null), gr(t), (Xi = null), (Ga = 0), (t = ft);
      for (; t !== null; ) em(t.alternate, t), (t = t.return);
      ft = null;
    }
  }
  function ea(t, e) {
    (t.finishedWork = null), (t.finishedLanes = 0);
    var n = t.timeoutHandle;
    n !== -1 && ((t.timeoutHandle = -1), CS(n)),
      (n = t.cancelPendingCommit),
      n !== null && ((t.cancelPendingCommit = null), n()),
      fo(),
      (Et = t),
      (ft = n = Hn(t.current, null)),
      (pt = e),
      (Rt = 0),
      (Se = null),
      (yn = !1),
      (Ii = Ra(t, e)),
      (io = !1),
      (ta = Ne = ao = yi = qn = wt = 0),
      (We = ll = null),
      (lo = !1),
      (e & 8) !== 0 && (e |= e & 32);
    var l = t.entangledLanes;
    if (l !== 0)
      for (t = t.entanglements, l &= e; 0 < l; ) {
        var r = 31 - pe(l),
          o = 1 << r;
        (e |= t[r]), (l &= ~o);
      }
    return (gn = e), ss(), n;
  }
  function lm(t, e) {
    (ot = null),
      (X.H = Je),
      e === qa
        ? ((e = bh()), (Rt = 3))
        : e === gh
        ? ((e = bh()), (Rt = 4))
        : (Rt =
            e === vd
              ? 8
              : e !== null &&
                typeof e == "object" &&
                typeof e.then == "function"
              ? 6
              : 1),
      (Se = e),
      ft === null && ((wt = 1), xs(t, Ce(e, t.current)));
  }
  function sm() {
    var t = X.H;
    return (X.H = Je), t === null ? Je : t;
  }
  function um() {
    var t = X.A;
    return (X.A = rS), t;
  }
  function ho() {
    (wt = 4),
      yn || ((pt & 4194176) !== pt && Ue.current !== null) || (Ii = !0),
      ((qn & 134217727) === 0 && (yi & 134217727) === 0) ||
        Et === null ||
        vn(Et, pt, Ne, !1);
  }
  function mo(t, e, n) {
    var l = Mt;
    Mt |= 2;
    var r = sm(),
      o = um();
    (Et !== t || pt !== e) && ((zs = null), ea(t, e)), (e = !1);
    var d = wt;
    t: do
      try {
        if (Rt !== 0 && ft !== null) {
          var v = ft,
            b = Se;
          switch (Rt) {
            case 8:
              fo(), (d = 6);
              break t;
            case 3:
            case 2:
            case 6:
              Ue.current === null && (e = !0);
              var R = Rt;
              if (((Rt = 0), (Se = null), na(t, v, b, R), n && Ii)) {
                d = 0;
                break t;
              }
              break;
            default:
              (R = Rt), (Rt = 0), (Se = null), na(t, v, b, R);
          }
        }
        fS(), (d = wt);
        break;
      } catch (z) {
        lm(t, z);
      }
    while (!0);
    return (
      e && t.shellSuspendCounter++,
      (cn = hi = null),
      (Mt = l),
      (X.H = r),
      (X.A = o),
      ft === null && ((Et = null), (pt = 0), ss()),
      d
    );
  }
  function fS() {
    for (; ft !== null; ) rm(ft);
  }
  function hS(t, e) {
    var n = Mt;
    Mt |= 2;
    var l = sm(),
      r = um();
    Et !== t || pt !== e
      ? ((zs = null), (Vs = Pe() + 500), ea(t, e))
      : (Ii = Ra(t, e));
    t: do
      try {
        if (Rt !== 0 && ft !== null) {
          e = ft;
          var o = Se;
          e: switch (Rt) {
            case 1:
              (Rt = 0), (Se = null), na(t, e, o, 1);
              break;
            case 2:
              if (vh(o)) {
                (Rt = 0), (Se = null), om(e);
                break;
              }
              (e = function () {
                Rt === 2 && Et === t && (Rt = 7), $e(t);
              }),
                o.then(e, e);
              break t;
            case 3:
              Rt = 7;
              break t;
            case 4:
              Rt = 5;
              break t;
            case 7:
              vh(o)
                ? ((Rt = 0), (Se = null), om(e))
                : ((Rt = 0), (Se = null), na(t, e, o, 7));
              break;
            case 5:
              var d = null;
              switch (ft.tag) {
                case 26:
                  d = ft.memoizedState;
                case 5:
                case 27:
                  var v = ft;
                  if (!d || jm(d)) {
                    (Rt = 0), (Se = null);
                    var b = v.sibling;
                    if (b !== null) ft = b;
                    else {
                      var R = v.return;
                      R !== null ? ((ft = R), Ls(R)) : (ft = null);
                    }
                    break e;
                  }
              }
              (Rt = 0), (Se = null), na(t, e, o, 5);
              break;
            case 6:
              (Rt = 0), (Se = null), na(t, e, o, 6);
              break;
            case 8:
              fo(), (wt = 6);
              break t;
            default:
              throw Error(u(462));
          }
        }
        dS();
        break;
      } catch (z) {
        lm(t, z);
      }
    while (!0);
    return (
      (cn = hi = null),
      (X.H = l),
      (X.A = r),
      (Mt = n),
      ft !== null ? 0 : ((Et = null), (pt = 0), ss(), wt)
    );
  }
  function dS() {
    for (; ft !== null && !B0(); ) rm(ft);
  }
  function rm(t) {
    var e = _d(t.alternate, t, gn);
    (t.memoizedProps = t.pendingProps), e === null ? Ls(t) : (ft = e);
  }
  function om(t) {
    var e = t,
      n = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = Rd(n, e, e.pendingProps, e.type, void 0, pt);
        break;
      case 11:
        e = Rd(n, e, e.pendingProps, e.type.render, e.ref, pt);
        break;
      case 5:
        gr(e);
      default:
        em(n, e), (e = ft = $d(e, gn)), (e = _d(n, e, gn));
    }
    (t.memoizedProps = t.pendingProps), e === null ? Ls(t) : (ft = e);
  }
  function na(t, e, n, l) {
    (cn = hi = null), gr(e), (Xi = null), (Ga = 0);
    var r = e.return;
    try {
      if (eS(t, r, e, n, pt)) {
        (wt = 1), xs(t, Ce(n, t.current)), (ft = null);
        return;
      }
    } catch (o) {
      if (r !== null) throw ((ft = r), o);
      (wt = 1), xs(t, Ce(n, t.current)), (ft = null);
      return;
    }
    e.flags & 32768
      ? (yt || l === 1
          ? (t = !0)
          : Ii || (pt & 536870912) !== 0
          ? (t = !1)
          : ((yn = t = !0),
            (l === 2 || l === 3 || l === 6) &&
              ((l = Ue.current),
              l !== null && l.tag === 13 && (l.flags |= 16384))),
        cm(e, t))
      : Ls(e);
  }
  function Ls(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        cm(e, yn);
        return;
      }
      t = e.return;
      var n = sS(e.alternate, e, gn);
      if (n !== null) {
        ft = n;
        return;
      }
      if (((e = e.sibling), e !== null)) {
        ft = e;
        return;
      }
      ft = e = t;
    } while (e !== null);
    wt === 0 && (wt = 5);
  }
  function cm(t, e) {
    do {
      var n = uS(t.alternate, t);
      if (n !== null) {
        (n.flags &= 32767), (ft = n);
        return;
      }
      if (
        ((n = t.return),
        n !== null &&
          ((n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null)),
        !e && ((t = t.sibling), t !== null))
      ) {
        ft = t;
        return;
      }
      ft = t = n;
    } while (t !== null);
    (wt = 6), (ft = null);
  }
  function fm(t, e, n, l, r, o, d, v, b, R) {
    var z = X.T,
      L = K.p;
    try {
      (K.p = 2), (X.T = null), mS(t, e, n, l, L, r, o, d, v, b, R);
    } finally {
      (X.T = z), (K.p = L);
    }
  }
  function mS(t, e, n, l, r, o, d, v) {
    do ia();
    while (gi !== null);
    if ((Mt & 6) !== 0) throw Error(u(327));
    var b = t.finishedWork;
    if (((l = t.finishedLanes), b === null)) return null;
    if (((t.finishedWork = null), (t.finishedLanes = 0), b === t.current))
      throw Error(u(177));
    (t.callbackNode = null),
      (t.callbackPriority = 0),
      (t.cancelPendingCommit = null);
    var R = b.lanes | b.childLanes;
    if (
      ((R |= nr),
      Z0(t, l, R, o, d, v),
      t === Et && ((ft = Et = null), (pt = 0)),
      ((b.subtreeFlags & 10256) === 0 && (b.flags & 10256) === 0) ||
        Bs ||
        ((Bs = !0),
        (uo = R),
        (ro = n),
        vS(Ql, function () {
          return ia(), null;
        })),
      (n = (b.flags & 15990) !== 0),
      (b.subtreeFlags & 15990) !== 0 || n
        ? ((n = X.T),
          (X.T = null),
          (o = K.p),
          (K.p = 2),
          (d = Mt),
          (Mt |= 4),
          iS(t, b),
          Qd(b, t),
          jv(xo, t.containerInfo),
          (ks = !!Do),
          (xo = Do = null),
          (t.current = b),
          Yd(t, b.alternate, b),
          N0(),
          (Mt = d),
          (K.p = o),
          (X.T = n))
        : (t.current = b),
      Bs ? ((Bs = !1), (gi = t), (sl = l)) : hm(t, R),
      (R = t.pendingLanes),
      R === 0 && (Yn = null),
      Y0(b.stateNode),
      $e(t),
      e !== null)
    )
      for (r = t.onRecoverableError, b = 0; b < e.length; b++)
        (R = e[b]), r(R.value, { componentStack: R.stack });
    return (
      (sl & 3) !== 0 && ia(),
      (R = t.pendingLanes),
      (l & 4194218) !== 0 && (R & 42) !== 0
        ? t === oo
          ? ul++
          : ((ul = 0), (oo = t))
        : (ul = 0),
      rl(0),
      null
    );
  }
  function hm(t, e) {
    (t.pooledCacheLanes &= e) === 0 &&
      ((e = t.pooledCache), e != null && ((t.pooledCache = null), Ka(e)));
  }
  function ia() {
    if (gi !== null) {
      var t = gi,
        e = uo;
      uo = 0;
      var n = Tf(sl),
        l = X.T,
        r = K.p;
      try {
        if (((K.p = 32 > n ? 32 : n), (X.T = null), gi === null)) var o = !1;
        else {
          (n = ro), (ro = null);
          var d = gi,
            v = sl;
          if (((gi = null), (sl = 0), (Mt & 6) !== 0)) throw Error(u(331));
          var b = Mt;
          if (
            ((Mt |= 4),
            Jd(d.current),
            Pd(d, d.current, v, n),
            (Mt = b),
            rl(0, !1),
            me && typeof me.onPostCommitFiberRoot == "function")
          )
            try {
              me.onPostCommitFiberRoot(Ea, d);
            } catch {}
          o = !0;
        }
        return o;
      } finally {
        (K.p = r), (X.T = l), hm(t, e);
      }
    }
    return !1;
  }
  function dm(t, e, n) {
    (e = Ce(n, e)),
      (e = wr(t.stateNode, e, 2)),
      (t = Bn(t, e, 2)),
      t !== null && (Da(t, 2), $e(t));
  }
  function At(t, e, n) {
    if (t.tag === 3) dm(t, t, n);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          dm(e, t, n);
          break;
        } else if (e.tag === 1) {
          var l = e.stateNode;
          if (
            typeof e.type.getDerivedStateFromError == "function" ||
            (typeof l.componentDidCatch == "function" &&
              (Yn === null || !Yn.has(l)))
          ) {
            (t = Ce(n, t)),
              (n = yd(2)),
              (l = Bn(e, n, 2)),
              l !== null && (gd(n, l, e, t), Da(l, 2), $e(l));
            break;
          }
        }
        e = e.return;
      }
  }
  function po(t, e, n) {
    var l = t.pingCache;
    if (l === null) {
      l = t.pingCache = new oS();
      var r = new Set();
      l.set(e, r);
    } else (r = l.get(e)), r === void 0 && ((r = new Set()), l.set(e, r));
    r.has(n) ||
      ((io = !0), r.add(n), (t = pS.bind(null, t, e, n)), e.then(t, t));
  }
  function pS(t, e, n) {
    var l = t.pingCache;
    l !== null && l.delete(e),
      (t.pingedLanes |= t.suspendedLanes & n),
      (t.warmLanes &= ~n),
      Et === t &&
        (pt & n) === n &&
        (wt === 4 || (wt === 3 && (pt & 62914560) === pt && 300 > Pe() - so)
          ? (Mt & 2) === 0 && ea(t, 0)
          : (ao |= n),
        ta === pt && (ta = 0)),
      $e(t);
  }
  function mm(t, e) {
    e === 0 && (e = vf()), (t = On(t, e)), t !== null && (Da(t, e), $e(t));
  }
  function yS(t) {
    var e = t.memoizedState,
      n = 0;
    e !== null && (n = e.retryLane), mm(t, n);
  }
  function gS(t, e) {
    var n = 0;
    switch (t.tag) {
      case 13:
        var l = t.stateNode,
          r = t.memoizedState;
        r !== null && (n = r.retryLane);
        break;
      case 19:
        l = t.stateNode;
        break;
      case 22:
        l = t.stateNode._retryCache;
        break;
      default:
        throw Error(u(314));
    }
    l !== null && l.delete(e), mm(t, n);
  }
  function vS(t, e) {
    return Uu(t, e);
  }
  var js = null,
    aa = null,
    yo = !1,
    Hs = !1,
    go = !1,
    vi = 0;
  function $e(t) {
    t !== aa &&
      t.next === null &&
      (aa === null ? (js = aa = t) : (aa = aa.next = t)),
      (Hs = !0),
      yo || ((yo = !0), bS(SS));
  }
  function rl(t, e) {
    if (!go && Hs) {
      go = !0;
      do
        for (var n = !1, l = js; l !== null; ) {
          if (t !== 0) {
            var r = l.pendingLanes;
            if (r === 0) var o = 0;
            else {
              var d = l.suspendedLanes,
                v = l.pingedLanes;
              (o = (1 << (31 - pe(42 | t) + 1)) - 1),
                (o &= r & ~(d & ~v)),
                (o = o & 201326677 ? (o & 201326677) | 1 : o ? o | 2 : 0);
            }
            o !== 0 && ((n = !0), gm(l, o));
          } else
            (o = pt),
              (o = Fl(l, l === Et ? o : 0)),
              (o & 3) === 0 || Ra(l, o) || ((n = !0), gm(l, o));
          l = l.next;
        }
      while (n);
      go = !1;
    }
  }
  function SS() {
    Hs = yo = !1;
    var t = 0;
    vi !== 0 && (MS() && (t = vi), (vi = 0));
    for (var e = Pe(), n = null, l = js; l !== null; ) {
      var r = l.next,
        o = pm(l, e);
      o === 0
        ? ((l.next = null),
          n === null ? (js = r) : (n.next = r),
          r === null && (aa = n))
        : ((n = l), (t !== 0 || (o & 3) !== 0) && (Hs = !0)),
        (l = r);
    }
    rl(t);
  }
  function pm(t, e) {
    for (
      var n = t.suspendedLanes,
        l = t.pingedLanes,
        r = t.expirationTimes,
        o = t.pendingLanes & -62914561;
      0 < o;

    ) {
      var d = 31 - pe(o),
        v = 1 << d,
        b = r[d];
      b === -1
        ? ((v & n) === 0 || (v & l) !== 0) && (r[d] = Q0(v, e))
        : b <= e && (t.expiredLanes |= v),
        (o &= ~v);
    }
    if (
      ((e = Et),
      (n = pt),
      (n = Fl(t, t === e ? n : 0)),
      (l = t.callbackNode),
      n === 0 || (t === e && Rt === 2) || t.cancelPendingCommit !== null)
    )
      return (
        l !== null && l !== null && Vu(l),
        (t.callbackNode = null),
        (t.callbackPriority = 0)
      );
    if ((n & 3) === 0 || Ra(t, n)) {
      if (((e = n & -n), e === t.callbackPriority)) return e;
      switch ((l !== null && Vu(l), Tf(n))) {
        case 2:
        case 8:
          n = pf;
          break;
        case 32:
          n = Ql;
          break;
        case 268435456:
          n = yf;
          break;
        default:
          n = Ql;
      }
      return (
        (l = ym.bind(null, t)),
        (n = Uu(n, l)),
        (t.callbackPriority = e),
        (t.callbackNode = n),
        e
      );
    }
    return (
      l !== null && l !== null && Vu(l),
      (t.callbackPriority = 2),
      (t.callbackNode = null),
      2
    );
  }
  function ym(t, e) {
    var n = t.callbackNode;
    if (ia() && t.callbackNode !== n) return null;
    var l = pt;
    return (
      (l = Fl(t, t === Et ? l : 0)),
      l === 0
        ? null
        : (im(t, l, e),
          pm(t, Pe()),
          t.callbackNode != null && t.callbackNode === n
            ? ym.bind(null, t)
            : null)
    );
  }
  function gm(t, e) {
    if (ia()) return null;
    im(t, e, !0);
  }
  function bS(t) {
    _S(function () {
      (Mt & 6) !== 0 ? Uu(mf, t) : t();
    });
  }
  function vo() {
    return vi === 0 && (vi = gf()), vi;
  }
  function vm(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean"
      ? null
      : typeof t == "function"
      ? t
      : Il("" + t);
  }
  function Sm(t, e) {
    var n = e.ownerDocument.createElement("input");
    return (
      (n.name = e.name),
      (n.value = e.value),
      t.id && n.setAttribute("form", t.id),
      e.parentNode.insertBefore(n, e),
      (t = new FormData(t)),
      n.parentNode.removeChild(n),
      t
    );
  }
  function TS(t, e, n, l, r) {
    if (e === "submit" && n && n.stateNode === r) {
      var o = vm((r[ce] || null).action),
        d = l.submitter;
      d &&
        ((e = (e = d[ce] || null)
          ? vm(e.formAction)
          : d.getAttribute("formAction")),
        e !== null && ((o = e), (d = null)));
      var v = new is("action", "action", null, l, r);
      t.push({
        event: v,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (l.defaultPrevented) {
                if (vi !== 0) {
                  var b = d ? Sm(r, d) : new FormData(r);
                  xr(
                    n,
                    { pending: !0, data: b, method: r.method, action: o },
                    null,
                    b
                  );
                }
              } else
                typeof o == "function" &&
                  (v.preventDefault(),
                  (b = d ? Sm(r, d) : new FormData(r)),
                  xr(
                    n,
                    { pending: !0, data: b, method: r.method, action: o },
                    o,
                    b
                  ));
            },
            currentTarget: r,
          },
        ],
      });
    }
  }
  for (var So = 0; So < fh.length; So++) {
    var bo = fh[So],
      AS = bo.toLowerCase(),
      ES = bo[0].toUpperCase() + bo.slice(1);
    qe(AS, "on" + ES);
  }
  qe(sh, "onAnimationEnd"),
    qe(uh, "onAnimationIteration"),
    qe(rh, "onAnimationStart"),
    qe("dblclick", "onDoubleClick"),
    qe("focusin", "onFocus"),
    qe("focusout", "onBlur"),
    qe(qv, "onTransitionRun"),
    qe(Yv, "onTransitionStart"),
    qe(Gv, "onTransitionCancel"),
    qe(oh, "onTransitionEnd"),
    wi("onMouseEnter", ["mouseout", "mouseover"]),
    wi("onMouseLeave", ["mouseout", "mouseover"]),
    wi("onPointerEnter", ["pointerout", "pointerover"]),
    wi("onPointerLeave", ["pointerout", "pointerover"]),
    In(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    In(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    In("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    In(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    In(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    In(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var ol =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    RS = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(ol)
    );
  function bm(t, e) {
    e = (e & 4) !== 0;
    for (var n = 0; n < t.length; n++) {
      var l = t[n],
        r = l.event;
      l = l.listeners;
      t: {
        var o = void 0;
        if (e)
          for (var d = l.length - 1; 0 <= d; d--) {
            var v = l[d],
              b = v.instance,
              R = v.currentTarget;
            if (((v = v.listener), b !== o && r.isPropagationStopped()))
              break t;
            (o = v), (r.currentTarget = R);
            try {
              o(r);
            } catch (z) {
              Ds(z);
            }
            (r.currentTarget = null), (o = b);
          }
        else
          for (d = 0; d < l.length; d++) {
            if (
              ((v = l[d]),
              (b = v.instance),
              (R = v.currentTarget),
              (v = v.listener),
              b !== o && r.isPropagationStopped())
            )
              break t;
            (o = v), (r.currentTarget = R);
            try {
              o(r);
            } catch (z) {
              Ds(z);
            }
            (r.currentTarget = null), (o = b);
          }
      }
    }
  }
  function ht(t, e) {
    var n = e[Bu];
    n === void 0 && (n = e[Bu] = new Set());
    var l = t + "__bubble";
    n.has(l) || (Tm(e, t, 2, !1), n.add(l));
  }
  function To(t, e, n) {
    var l = 0;
    e && (l |= 4), Tm(n, t, l, e);
  }
  var qs = "_reactListening" + Math.random().toString(36).slice(2);
  function Ao(t) {
    if (!t[qs]) {
      (t[qs] = !0),
        Rf.forEach(function (n) {
          n !== "selectionchange" && (RS.has(n) || To(n, !1, t), To(n, !0, t));
        });
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[qs] || ((e[qs] = !0), To("selectionchange", !1, e));
    }
  }
  function Tm(t, e, n, l) {
    switch (Km(e)) {
      case 2:
        var r = JS;
        break;
      case 8:
        r = WS;
        break;
      default:
        r = Bo;
    }
    (n = r.bind(null, e, n, t)),
      (r = void 0),
      !Xu ||
        (e !== "touchstart" && e !== "touchmove" && e !== "wheel") ||
        (r = !0),
      l
        ? r !== void 0
          ? t.addEventListener(e, n, { capture: !0, passive: r })
          : t.addEventListener(e, n, !0)
        : r !== void 0
        ? t.addEventListener(e, n, { passive: r })
        : t.addEventListener(e, n, !1);
  }
  function Eo(t, e, n, l, r) {
    var o = l;
    if ((e & 1) === 0 && (e & 2) === 0 && l !== null)
      t: for (;;) {
        if (l === null) return;
        var d = l.tag;
        if (d === 3 || d === 4) {
          var v = l.stateNode.containerInfo;
          if (v === r || (v.nodeType === 8 && v.parentNode === r)) break;
          if (d === 4)
            for (d = l.return; d !== null; ) {
              var b = d.tag;
              if (
                (b === 3 || b === 4) &&
                ((b = d.stateNode.containerInfo),
                b === r || (b.nodeType === 8 && b.parentNode === r))
              )
                return;
              d = d.return;
            }
          for (; v !== null; ) {
            if (((d = $n(v)), d === null)) return;
            if (((b = d.tag), b === 5 || b === 6 || b === 26 || b === 27)) {
              l = o = d;
              continue t;
            }
            v = v.parentNode;
          }
        }
        l = l.return;
      }
    Nf(function () {
      var R = o,
        z = Yu(n),
        L = [];
      t: {
        var C = ch.get(t);
        if (C !== void 0) {
          var V = is,
            Z = t;
          switch (t) {
            case "keypress":
              if (es(n) === 0) break t;
            case "keydown":
            case "keyup":
              V = gv;
              break;
            case "focusin":
              (Z = "focus"), (V = Pu);
              break;
            case "focusout":
              (Z = "blur"), (V = Pu);
              break;
            case "beforeblur":
            case "afterblur":
              V = Pu;
              break;
            case "click":
              if (n.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              V = Hf;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              V = lv;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              V = bv;
              break;
            case sh:
            case uh:
            case rh:
              V = rv;
              break;
            case oh:
              V = Av;
              break;
            case "scroll":
            case "scrollend":
              V = iv;
              break;
            case "wheel":
              V = Rv;
              break;
            case "copy":
            case "cut":
            case "paste":
              V = cv;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              V = Yf;
              break;
            case "toggle":
            case "beforetoggle":
              V = xv;
          }
          var lt = (e & 4) !== 0,
            Ut = !lt && (t === "scroll" || t === "scrollend"),
            D = lt ? (C !== null ? C + "Capture" : null) : C;
          lt = [];
          for (var E = R, x; E !== null; ) {
            var B = E;
            if (
              ((x = B.stateNode),
              (B = B.tag),
              (B !== 5 && B !== 26 && B !== 27) ||
                x === null ||
                D === null ||
                ((B = Ma(E, D)), B != null && lt.push(cl(E, B, x))),
              Ut)
            )
              break;
            E = E.return;
          }
          0 < lt.length &&
            ((C = new V(C, Z, null, n, z)),
            L.push({ event: C, listeners: lt }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (
            ((C = t === "mouseover" || t === "pointerover"),
            (V = t === "mouseout" || t === "pointerout"),
            C &&
              n !== qu &&
              (Z = n.relatedTarget || n.fromElement) &&
              ($n(Z) || Z[Mi]))
          )
            break t;
          if (
            (V || C) &&
            ((C =
              z.window === z
                ? z
                : (C = z.ownerDocument)
                ? C.defaultView || C.parentWindow
                : window),
            V
              ? ((Z = n.relatedTarget || n.toElement),
                (V = R),
                (Z = Z ? $n(Z) : null),
                Z !== null &&
                  ((Ut = F(Z)),
                  (lt = Z.tag),
                  Z !== Ut || (lt !== 5 && lt !== 27 && lt !== 6)) &&
                  (Z = null))
              : ((V = null), (Z = R)),
            V !== Z)
          ) {
            if (
              ((lt = Hf),
              (B = "onMouseLeave"),
              (D = "onMouseEnter"),
              (E = "mouse"),
              (t === "pointerout" || t === "pointerover") &&
                ((lt = Yf),
                (B = "onPointerLeave"),
                (D = "onPointerEnter"),
                (E = "pointer")),
              (Ut = V == null ? C : Oa(V)),
              (x = Z == null ? C : Oa(Z)),
              (C = new lt(B, E + "leave", V, n, z)),
              (C.target = Ut),
              (C.relatedTarget = x),
              (B = null),
              $n(z) === R &&
                ((lt = new lt(D, E + "enter", Z, n, z)),
                (lt.target = x),
                (lt.relatedTarget = Ut),
                (B = lt)),
              (Ut = B),
              V && Z)
            )
              e: {
                for (lt = V, D = Z, E = 0, x = lt; x; x = la(x)) E++;
                for (x = 0, B = D; B; B = la(B)) x++;
                for (; 0 < E - x; ) (lt = la(lt)), E--;
                for (; 0 < x - E; ) (D = la(D)), x--;
                for (; E--; ) {
                  if (lt === D || (D !== null && lt === D.alternate)) break e;
                  (lt = la(lt)), (D = la(D));
                }
                lt = null;
              }
            else lt = null;
            V !== null && Am(L, C, V, lt, !1),
              Z !== null && Ut !== null && Am(L, Ut, Z, lt, !0);
          }
        }
        t: {
          if (
            ((C = R ? Oa(R) : window),
            (V = C.nodeName && C.nodeName.toLowerCase()),
            V === "select" || (V === "input" && C.type === "file"))
          )
            var Q = kf;
          else if (Pf(C))
            if (Jf) Q = Nv;
            else {
              Q = zv;
              var ct = Vv;
            }
          else
            (V = C.nodeName),
              !V ||
              V.toLowerCase() !== "input" ||
              (C.type !== "checkbox" && C.type !== "radio")
                ? R && Hu(R.elementType) && (Q = kf)
                : (Q = Bv);
          if (Q && (Q = Q(t, R))) {
            Ff(L, Q, n, z);
            break t;
          }
          ct && ct(t, C, R),
            t === "focusout" &&
              R &&
              C.type === "number" &&
              R.memoizedProps.value != null &&
              ju(C, "number", C.value);
        }
        switch (((ct = R ? Oa(R) : window), t)) {
          case "focusin":
            (Pf(ct) || ct.contentEditable === "true") &&
              ((Li = ct), (Iu = R), (Na = null));
            break;
          case "focusout":
            Na = Iu = Li = null;
            break;
          case "mousedown":
            tr = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (tr = !1), ah(L, n, z);
            break;
          case "selectionchange":
            if (Hv) break;
          case "keydown":
          case "keyup":
            ah(L, n, z);
        }
        var k;
        if (ku)
          t: {
            switch (t) {
              case "compositionstart":
                var I = "onCompositionStart";
                break t;
              case "compositionend":
                I = "onCompositionEnd";
                break t;
              case "compositionupdate":
                I = "onCompositionUpdate";
                break t;
            }
            I = void 0;
          }
        else
          Ni
            ? Qf(t, n) && (I = "onCompositionEnd")
            : t === "keydown" &&
              n.keyCode === 229 &&
              (I = "onCompositionStart");
        I &&
          (Gf &&
            n.locale !== "ko" &&
            (Ni || I !== "onCompositionStart"
              ? I === "onCompositionEnd" && Ni && (k = Lf())
              : ((xn = z),
                (Ku = "value" in xn ? xn.value : xn.textContent),
                (Ni = !0))),
          (ct = Ys(R, I)),
          0 < ct.length &&
            ((I = new qf(I, t, null, n, z)),
            L.push({ event: I, listeners: ct }),
            k ? (I.data = k) : ((k = Zf(n)), k !== null && (I.data = k)))),
          (k = Mv ? Cv(t, n) : _v(t, n)) &&
            ((I = Ys(R, "onBeforeInput")),
            0 < I.length &&
              ((ct = new qf("onBeforeInput", "beforeinput", null, n, z)),
              L.push({ event: ct, listeners: I }),
              (ct.data = k))),
          TS(L, t, R, n, z);
      }
      bm(L, e);
    });
  }
  function cl(t, e, n) {
    return { instance: t, listener: e, currentTarget: n };
  }
  function Ys(t, e) {
    for (var n = e + "Capture", l = []; t !== null; ) {
      var r = t,
        o = r.stateNode;
      (r = r.tag),
        (r !== 5 && r !== 26 && r !== 27) ||
          o === null ||
          ((r = Ma(t, n)),
          r != null && l.unshift(cl(t, r, o)),
          (r = Ma(t, e)),
          r != null && l.push(cl(t, r, o))),
        (t = t.return);
    }
    return l;
  }
  function la(t) {
    if (t === null) return null;
    do t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function Am(t, e, n, l, r) {
    for (var o = e._reactName, d = []; n !== null && n !== l; ) {
      var v = n,
        b = v.alternate,
        R = v.stateNode;
      if (((v = v.tag), b !== null && b === l)) break;
      (v !== 5 && v !== 26 && v !== 27) ||
        R === null ||
        ((b = R),
        r
          ? ((R = Ma(n, o)), R != null && d.unshift(cl(n, R, b)))
          : r || ((R = Ma(n, o)), R != null && d.push(cl(n, R, b)))),
        (n = n.return);
    }
    d.length !== 0 && t.push({ event: e, listeners: d });
  }
  var DS = /\r\n?/g,
    xS = /\u0000|\uFFFD/g;
  function Em(t) {
    return (typeof t == "string" ? t : "" + t)
      .replace(
        DS,
        `
`
      )
      .replace(xS, "");
  }
  function Rm(t, e) {
    return (e = Em(e)), Em(t) === e;
  }
  function Gs() {}
  function Tt(t, e, n, l, r, o) {
    switch (n) {
      case "children":
        typeof l == "string"
          ? e === "body" || (e === "textarea" && l === "") || Vi(t, l)
          : (typeof l == "number" || typeof l == "bigint") &&
            e !== "body" &&
            Vi(t, "" + l);
        break;
      case "className":
        Jl(t, "class", l);
        break;
      case "tabIndex":
        Jl(t, "tabindex", l);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Jl(t, n, l);
        break;
      case "style":
        zf(t, l, o);
        break;
      case "data":
        if (e !== "object") {
          Jl(t, "data", l);
          break;
        }
      case "src":
      case "href":
        if (l === "" && (e !== "a" || n !== "href")) {
          t.removeAttribute(n);
          break;
        }
        if (
          l == null ||
          typeof l == "function" ||
          typeof l == "symbol" ||
          typeof l == "boolean"
        ) {
          t.removeAttribute(n);
          break;
        }
        (l = Il("" + l)), t.setAttribute(n, l);
        break;
      case "action":
      case "formAction":
        if (typeof l == "function") {
          t.setAttribute(
            n,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof o == "function" &&
            (n === "formAction"
              ? (e !== "input" && Tt(t, e, "name", r.name, r, null),
                Tt(t, e, "formEncType", r.formEncType, r, null),
                Tt(t, e, "formMethod", r.formMethod, r, null),
                Tt(t, e, "formTarget", r.formTarget, r, null))
              : (Tt(t, e, "encType", r.encType, r, null),
                Tt(t, e, "method", r.method, r, null),
                Tt(t, e, "target", r.target, r, null)));
        if (l == null || typeof l == "symbol" || typeof l == "boolean") {
          t.removeAttribute(n);
          break;
        }
        (l = Il("" + l)), t.setAttribute(n, l);
        break;
      case "onClick":
        l != null && (t.onclick = Gs);
        break;
      case "onScroll":
        l != null && ht("scroll", t);
        break;
      case "onScrollEnd":
        l != null && ht("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l)) throw Error(u(61));
          if (((n = l.__html), n != null)) {
            if (r.children != null) throw Error(u(60));
            t.innerHTML = n;
          }
        }
        break;
      case "multiple":
        t.multiple = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "muted":
        t.muted = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          l == null ||
          typeof l == "function" ||
          typeof l == "boolean" ||
          typeof l == "symbol"
        ) {
          t.removeAttribute("xlink:href");
          break;
        }
        (n = Il("" + l)),
          t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        l != null && typeof l != "function" && typeof l != "symbol"
          ? t.setAttribute(n, "" + l)
          : t.removeAttribute(n);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        l && typeof l != "function" && typeof l != "symbol"
          ? t.setAttribute(n, "")
          : t.removeAttribute(n);
        break;
      case "capture":
      case "download":
        l === !0
          ? t.setAttribute(n, "")
          : l !== !1 &&
            l != null &&
            typeof l != "function" &&
            typeof l != "symbol"
          ? t.setAttribute(n, l)
          : t.removeAttribute(n);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        l != null &&
        typeof l != "function" &&
        typeof l != "symbol" &&
        !isNaN(l) &&
        1 <= l
          ? t.setAttribute(n, l)
          : t.removeAttribute(n);
        break;
      case "rowSpan":
      case "start":
        l == null || typeof l == "function" || typeof l == "symbol" || isNaN(l)
          ? t.removeAttribute(n)
          : t.setAttribute(n, l);
        break;
      case "popover":
        ht("beforetoggle", t), ht("toggle", t), kl(t, "popover", l);
        break;
      case "xlinkActuate":
        an(t, "http://www.w3.org/1999/xlink", "xlink:actuate", l);
        break;
      case "xlinkArcrole":
        an(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", l);
        break;
      case "xlinkRole":
        an(t, "http://www.w3.org/1999/xlink", "xlink:role", l);
        break;
      case "xlinkShow":
        an(t, "http://www.w3.org/1999/xlink", "xlink:show", l);
        break;
      case "xlinkTitle":
        an(t, "http://www.w3.org/1999/xlink", "xlink:title", l);
        break;
      case "xlinkType":
        an(t, "http://www.w3.org/1999/xlink", "xlink:type", l);
        break;
      case "xmlBase":
        an(t, "http://www.w3.org/XML/1998/namespace", "xml:base", l);
        break;
      case "xmlLang":
        an(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", l);
        break;
      case "xmlSpace":
        an(t, "http://www.w3.org/XML/1998/namespace", "xml:space", l);
        break;
      case "is":
        kl(t, "is", l);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < n.length) ||
          (n[0] !== "o" && n[0] !== "O") ||
          (n[1] !== "n" && n[1] !== "N")) &&
          ((n = ev.get(n) || n), kl(t, n, l));
    }
  }
  function Ro(t, e, n, l, r, o) {
    switch (n) {
      case "style":
        zf(t, l, o);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l)) throw Error(u(61));
          if (((n = l.__html), n != null)) {
            if (r.children != null) throw Error(u(60));
            t.innerHTML = n;
          }
        }
        break;
      case "children":
        typeof l == "string"
          ? Vi(t, l)
          : (typeof l == "number" || typeof l == "bigint") && Vi(t, "" + l);
        break;
      case "onScroll":
        l != null && ht("scroll", t);
        break;
      case "onScrollEnd":
        l != null && ht("scrollend", t);
        break;
      case "onClick":
        l != null && (t.onclick = Gs);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Df.hasOwnProperty(n))
          t: {
            if (
              n[0] === "o" &&
              n[1] === "n" &&
              ((r = n.endsWith("Capture")),
              (e = n.slice(2, r ? n.length - 7 : void 0)),
              (o = t[ce] || null),
              (o = o != null ? o[n] : null),
              typeof o == "function" && t.removeEventListener(e, o, r),
              typeof l == "function")
            ) {
              typeof o != "function" &&
                o !== null &&
                (n in t
                  ? (t[n] = null)
                  : t.hasAttribute(n) && t.removeAttribute(n)),
                t.addEventListener(e, l, r);
              break t;
            }
            n in t
              ? (t[n] = l)
              : l === !0
              ? t.setAttribute(n, "")
              : kl(t, n, l);
          }
    }
  }
  function Wt(t, e, n) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        ht("error", t), ht("load", t);
        var l = !1,
          r = !1,
          o;
        for (o in n)
          if (n.hasOwnProperty(o)) {
            var d = n[o];
            if (d != null)
              switch (o) {
                case "src":
                  l = !0;
                  break;
                case "srcSet":
                  r = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(u(137, e));
                default:
                  Tt(t, e, o, d, n, null);
              }
          }
        r && Tt(t, e, "srcSet", n.srcSet, n, null),
          l && Tt(t, e, "src", n.src, n, null);
        return;
      case "input":
        ht("invalid", t);
        var v = (o = d = r = null),
          b = null,
          R = null;
        for (l in n)
          if (n.hasOwnProperty(l)) {
            var z = n[l];
            if (z != null)
              switch (l) {
                case "name":
                  r = z;
                  break;
                case "type":
                  d = z;
                  break;
                case "checked":
                  b = z;
                  break;
                case "defaultChecked":
                  R = z;
                  break;
                case "value":
                  o = z;
                  break;
                case "defaultValue":
                  v = z;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (z != null) throw Error(u(137, e));
                  break;
                default:
                  Tt(t, e, l, z, n, null);
              }
          }
        _f(t, o, v, b, R, d, r, !1), Wl(t);
        return;
      case "select":
        ht("invalid", t), (l = d = o = null);
        for (r in n)
          if (n.hasOwnProperty(r) && ((v = n[r]), v != null))
            switch (r) {
              case "value":
                o = v;
                break;
              case "defaultValue":
                d = v;
                break;
              case "multiple":
                l = v;
              default:
                Tt(t, e, r, v, n, null);
            }
        (e = o),
          (n = d),
          (t.multiple = !!l),
          e != null ? Ui(t, !!l, e, !1) : n != null && Ui(t, !!l, n, !0);
        return;
      case "textarea":
        ht("invalid", t), (o = r = l = null);
        for (d in n)
          if (n.hasOwnProperty(d) && ((v = n[d]), v != null))
            switch (d) {
              case "value":
                l = v;
                break;
              case "defaultValue":
                r = v;
                break;
              case "children":
                o = v;
                break;
              case "dangerouslySetInnerHTML":
                if (v != null) throw Error(u(91));
                break;
              default:
                Tt(t, e, d, v, n, null);
            }
        Uf(t, l, r, o), Wl(t);
        return;
      case "option":
        for (b in n)
          if (n.hasOwnProperty(b) && ((l = n[b]), l != null))
            switch (b) {
              case "selected":
                t.selected =
                  l && typeof l != "function" && typeof l != "symbol";
                break;
              default:
                Tt(t, e, b, l, n, null);
            }
        return;
      case "dialog":
        ht("cancel", t), ht("close", t);
        break;
      case "iframe":
      case "object":
        ht("load", t);
        break;
      case "video":
      case "audio":
        for (l = 0; l < ol.length; l++) ht(ol[l], t);
        break;
      case "image":
        ht("error", t), ht("load", t);
        break;
      case "details":
        ht("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        ht("error", t), ht("load", t);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (R in n)
          if (n.hasOwnProperty(R) && ((l = n[R]), l != null))
            switch (R) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(u(137, e));
              default:
                Tt(t, e, R, l, n, null);
            }
        return;
      default:
        if (Hu(e)) {
          for (z in n)
            n.hasOwnProperty(z) &&
              ((l = n[z]), l !== void 0 && Ro(t, e, z, l, n, void 0));
          return;
        }
    }
    for (v in n)
      n.hasOwnProperty(v) && ((l = n[v]), l != null && Tt(t, e, v, l, n, null));
  }
  function OS(t, e, n, l) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var r = null,
          o = null,
          d = null,
          v = null,
          b = null,
          R = null,
          z = null;
        for (V in n) {
          var L = n[V];
          if (n.hasOwnProperty(V) && L != null)
            switch (V) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                b = L;
              default:
                l.hasOwnProperty(V) || Tt(t, e, V, null, l, L);
            }
        }
        for (var C in l) {
          var V = l[C];
          if (((L = n[C]), l.hasOwnProperty(C) && (V != null || L != null)))
            switch (C) {
              case "type":
                o = V;
                break;
              case "name":
                r = V;
                break;
              case "checked":
                R = V;
                break;
              case "defaultChecked":
                z = V;
                break;
              case "value":
                d = V;
                break;
              case "defaultValue":
                v = V;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (V != null) throw Error(u(137, e));
                break;
              default:
                V !== L && Tt(t, e, C, V, l, L);
            }
        }
        Lu(t, d, v, b, R, z, o, r);
        return;
      case "select":
        V = d = v = C = null;
        for (o in n)
          if (((b = n[o]), n.hasOwnProperty(o) && b != null))
            switch (o) {
              case "value":
                break;
              case "multiple":
                V = b;
              default:
                l.hasOwnProperty(o) || Tt(t, e, o, null, l, b);
            }
        for (r in l)
          if (
            ((o = l[r]),
            (b = n[r]),
            l.hasOwnProperty(r) && (o != null || b != null))
          )
            switch (r) {
              case "value":
                C = o;
                break;
              case "defaultValue":
                v = o;
                break;
              case "multiple":
                d = o;
              default:
                o !== b && Tt(t, e, r, o, l, b);
            }
        (e = v),
          (n = d),
          (l = V),
          C != null
            ? Ui(t, !!n, C, !1)
            : !!l != !!n &&
              (e != null ? Ui(t, !!n, e, !0) : Ui(t, !!n, n ? [] : "", !1));
        return;
      case "textarea":
        V = C = null;
        for (v in n)
          if (
            ((r = n[v]),
            n.hasOwnProperty(v) && r != null && !l.hasOwnProperty(v))
          )
            switch (v) {
              case "value":
                break;
              case "children":
                break;
              default:
                Tt(t, e, v, null, l, r);
            }
        for (d in l)
          if (
            ((r = l[d]),
            (o = n[d]),
            l.hasOwnProperty(d) && (r != null || o != null))
          )
            switch (d) {
              case "value":
                C = r;
                break;
              case "defaultValue":
                V = r;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (r != null) throw Error(u(91));
                break;
              default:
                r !== o && Tt(t, e, d, r, l, o);
            }
        wf(t, C, V);
        return;
      case "option":
        for (var Z in n)
          if (
            ((C = n[Z]),
            n.hasOwnProperty(Z) && C != null && !l.hasOwnProperty(Z))
          )
            switch (Z) {
              case "selected":
                t.selected = !1;
                break;
              default:
                Tt(t, e, Z, null, l, C);
            }
        for (b in l)
          if (
            ((C = l[b]),
            (V = n[b]),
            l.hasOwnProperty(b) && C !== V && (C != null || V != null))
          )
            switch (b) {
              case "selected":
                t.selected =
                  C && typeof C != "function" && typeof C != "symbol";
                break;
              default:
                Tt(t, e, b, C, l, V);
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var lt in n)
          (C = n[lt]),
            n.hasOwnProperty(lt) &&
              C != null &&
              !l.hasOwnProperty(lt) &&
              Tt(t, e, lt, null, l, C);
        for (R in l)
          if (
            ((C = l[R]),
            (V = n[R]),
            l.hasOwnProperty(R) && C !== V && (C != null || V != null))
          )
            switch (R) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (C != null) throw Error(u(137, e));
                break;
              default:
                Tt(t, e, R, C, l, V);
            }
        return;
      default:
        if (Hu(e)) {
          for (var Ut in n)
            (C = n[Ut]),
              n.hasOwnProperty(Ut) &&
                C !== void 0 &&
                !l.hasOwnProperty(Ut) &&
                Ro(t, e, Ut, void 0, l, C);
          for (z in l)
            (C = l[z]),
              (V = n[z]),
              !l.hasOwnProperty(z) ||
                C === V ||
                (C === void 0 && V === void 0) ||
                Ro(t, e, z, C, l, V);
          return;
        }
    }
    for (var D in n)
      (C = n[D]),
        n.hasOwnProperty(D) &&
          C != null &&
          !l.hasOwnProperty(D) &&
          Tt(t, e, D, null, l, C);
    for (L in l)
      (C = l[L]),
        (V = n[L]),
        !l.hasOwnProperty(L) ||
          C === V ||
          (C == null && V == null) ||
          Tt(t, e, L, C, l, V);
  }
  var Do = null,
    xo = null;
  function Xs(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function Dm(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function xm(t, e) {
    if (t === 0)
      switch (e) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return t === 1 && e === "foreignObject" ? 0 : t;
  }
  function Oo(t, e) {
    return (
      t === "textarea" ||
      t === "noscript" ||
      typeof e.children == "string" ||
      typeof e.children == "number" ||
      typeof e.children == "bigint" ||
      (typeof e.dangerouslySetInnerHTML == "object" &&
        e.dangerouslySetInnerHTML !== null &&
        e.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Mo = null;
  function MS() {
    var t = window.event;
    return t && t.type === "popstate"
      ? t === Mo
        ? !1
        : ((Mo = t), !0)
      : ((Mo = null), !1);
  }
  var Om = typeof setTimeout == "function" ? setTimeout : void 0,
    CS = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Mm = typeof Promise == "function" ? Promise : void 0,
    _S =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Mm < "u"
        ? function (t) {
            return Mm.resolve(null).then(t).catch(wS);
          }
        : Om;
  function wS(t) {
    setTimeout(function () {
      throw t;
    });
  }
  function Co(t, e) {
    var n = e,
      l = 0;
    do {
      var r = n.nextSibling;
      if ((t.removeChild(n), r && r.nodeType === 8))
        if (((n = r.data), n === "/$")) {
          if (l === 0) {
            t.removeChild(r), vl(e);
            return;
          }
          l--;
        } else (n !== "$" && n !== "$?" && n !== "$!") || l++;
      n = r;
    } while (n);
    vl(e);
  }
  function _o(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var n = e;
      switch (((e = e.nextSibling), n.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          _o(n), Nu(n);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (n.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(n);
    }
  }
  function US(t, e, n, l) {
    for (; t.nodeType === 1; ) {
      var r = n;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!l && (t.nodeName !== "INPUT" || t.type !== "hidden")) break;
      } else if (l) {
        if (!t[xa])
          switch (e) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (
                ((o = t.getAttribute("rel")),
                o === "stylesheet" && t.hasAttribute("data-precedence"))
              )
                break;
              if (
                o !== r.rel ||
                t.getAttribute("href") !== (r.href == null ? null : r.href) ||
                t.getAttribute("crossorigin") !==
                  (r.crossOrigin == null ? null : r.crossOrigin) ||
                t.getAttribute("title") !== (r.title == null ? null : r.title)
              )
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (
                ((o = t.getAttribute("src")),
                (o !== (r.src == null ? null : r.src) ||
                  t.getAttribute("type") !== (r.type == null ? null : r.type) ||
                  t.getAttribute("crossorigin") !==
                    (r.crossOrigin == null ? null : r.crossOrigin)) &&
                  o &&
                  t.hasAttribute("async") &&
                  !t.hasAttribute("itemprop"))
              )
                break;
              return t;
            default:
              return t;
          }
      } else if (e === "input" && t.type === "hidden") {
        var o = r.name == null ? null : "" + r.name;
        if (r.type === "hidden" && t.getAttribute("name") === o) return t;
      } else return t;
      if (((t = Xe(t.nextSibling)), t === null)) break;
    }
    return null;
  }
  function VS(t, e, n) {
    if (e === "") return null;
    for (; t.nodeType !== 3; )
      if (
        ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") &&
          !n) ||
        ((t = Xe(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function Xe(t) {
    for (; t != null; t = t.nextSibling) {
      var e = t.nodeType;
      if (e === 1 || e === 3) break;
      if (e === 8) {
        if (
          ((e = t.data),
          e === "$" || e === "$!" || e === "$?" || e === "F!" || e === "F")
        )
          break;
        if (e === "/$") return null;
      }
    }
    return t;
  }
  function Cm(t) {
    t = t.previousSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var n = t.data;
        if (n === "$" || n === "$!" || n === "$?") {
          if (e === 0) return t;
          e--;
        } else n === "/$" && e++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function _m(t, e, n) {
    switch (((e = Xs(n)), t)) {
      case "html":
        if (((t = e.documentElement), !t)) throw Error(u(452));
        return t;
      case "head":
        if (((t = e.head), !t)) throw Error(u(453));
        return t;
      case "body":
        if (((t = e.body), !t)) throw Error(u(454));
        return t;
      default:
        throw Error(u(451));
    }
  }
  var Le = new Map(),
    wm = new Set();
  function Ks(t) {
    return typeof t.getRootNode == "function"
      ? t.getRootNode()
      : t.ownerDocument;
  }
  var Sn = K.d;
  K.d = { f: zS, r: BS, D: NS, C: LS, L: jS, m: HS, X: YS, S: qS, M: GS };
  function zS() {
    var t = Sn.f(),
      e = Ns();
    return t || e;
  }
  function BS(t) {
    var e = Ci(t);
    e !== null && e.tag === 5 && e.type === "form" ? ad(e) : Sn.r(t);
  }
  var sa = typeof document > "u" ? null : document;
  function Um(t, e, n) {
    var l = sa;
    if (l && typeof e == "string" && e) {
      var r = Oe(e);
      (r = 'link[rel="' + t + '"][href="' + r + '"]'),
        typeof n == "string" && (r += '[crossorigin="' + n + '"]'),
        wm.has(r) ||
          (wm.add(r),
          (t = { rel: t, crossOrigin: n, href: e }),
          l.querySelector(r) === null &&
            ((e = l.createElement("link")),
            Wt(e, "link", t),
            Qt(e),
            l.head.appendChild(e)));
    }
  }
  function NS(t) {
    Sn.D(t), Um("dns-prefetch", t, null);
  }
  function LS(t, e) {
    Sn.C(t, e), Um("preconnect", t, e);
  }
  function jS(t, e, n) {
    Sn.L(t, e, n);
    var l = sa;
    if (l && t && e) {
      var r = 'link[rel="preload"][as="' + Oe(e) + '"]';
      e === "image" && n && n.imageSrcSet
        ? ((r += '[imagesrcset="' + Oe(n.imageSrcSet) + '"]'),
          typeof n.imageSizes == "string" &&
            (r += '[imagesizes="' + Oe(n.imageSizes) + '"]'))
        : (r += '[href="' + Oe(t) + '"]');
      var o = r;
      switch (e) {
        case "style":
          o = ua(t);
          break;
        case "script":
          o = ra(t);
      }
      Le.has(o) ||
        ((t = at(
          {
            rel: "preload",
            href: e === "image" && n && n.imageSrcSet ? void 0 : t,
            as: e,
          },
          n
        )),
        Le.set(o, t),
        l.querySelector(r) !== null ||
          (e === "style" && l.querySelector(fl(o))) ||
          (e === "script" && l.querySelector(hl(o))) ||
          ((e = l.createElement("link")),
          Wt(e, "link", t),
          Qt(e),
          l.head.appendChild(e)));
    }
  }
  function HS(t, e) {
    Sn.m(t, e);
    var n = sa;
    if (n && t) {
      var l = e && typeof e.as == "string" ? e.as : "script",
        r =
          'link[rel="modulepreload"][as="' + Oe(l) + '"][href="' + Oe(t) + '"]',
        o = r;
      switch (l) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          o = ra(t);
      }
      if (
        !Le.has(o) &&
        ((t = at({ rel: "modulepreload", href: t }, e)),
        Le.set(o, t),
        n.querySelector(r) === null)
      ) {
        switch (l) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector(hl(o))) return;
        }
        (l = n.createElement("link")),
          Wt(l, "link", t),
          Qt(l),
          n.head.appendChild(l);
      }
    }
  }
  function qS(t, e, n) {
    Sn.S(t, e, n);
    var l = sa;
    if (l && t) {
      var r = _i(l).hoistableStyles,
        o = ua(t);
      e = e || "default";
      var d = r.get(o);
      if (!d) {
        var v = { loading: 0, preload: null };
        if ((d = l.querySelector(fl(o)))) v.loading = 5;
        else {
          (t = at({ rel: "stylesheet", href: t, "data-precedence": e }, n)),
            (n = Le.get(o)) && wo(t, n);
          var b = (d = l.createElement("link"));
          Qt(b),
            Wt(b, "link", t),
            (b._p = new Promise(function (R, z) {
              (b.onload = R), (b.onerror = z);
            })),
            b.addEventListener("load", function () {
              v.loading |= 1;
            }),
            b.addEventListener("error", function () {
              v.loading |= 2;
            }),
            (v.loading |= 4),
            Qs(d, e, l);
        }
        (d = { type: "stylesheet", instance: d, count: 1, state: v }),
          r.set(o, d);
      }
    }
  }
  function YS(t, e) {
    Sn.X(t, e);
    var n = sa;
    if (n && t) {
      var l = _i(n).hoistableScripts,
        r = ra(t),
        o = l.get(r);
      o ||
        ((o = n.querySelector(hl(r))),
        o ||
          ((t = at({ src: t, async: !0 }, e)),
          (e = Le.get(r)) && Uo(t, e),
          (o = n.createElement("script")),
          Qt(o),
          Wt(o, "link", t),
          n.head.appendChild(o)),
        (o = { type: "script", instance: o, count: 1, state: null }),
        l.set(r, o));
    }
  }
  function GS(t, e) {
    Sn.M(t, e);
    var n = sa;
    if (n && t) {
      var l = _i(n).hoistableScripts,
        r = ra(t),
        o = l.get(r);
      o ||
        ((o = n.querySelector(hl(r))),
        o ||
          ((t = at({ src: t, async: !0, type: "module" }, e)),
          (e = Le.get(r)) && Uo(t, e),
          (o = n.createElement("script")),
          Qt(o),
          Wt(o, "link", t),
          n.head.appendChild(o)),
        (o = { type: "script", instance: o, count: 1, state: null }),
        l.set(r, o));
    }
  }
  function Vm(t, e, n, l) {
    var r = (r = En.current) ? Ks(r) : null;
    if (!r) throw Error(u(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string"
          ? ((e = ua(n.href)),
            (n = _i(r).hoistableStyles),
            (l = n.get(e)),
            l ||
              ((l = { type: "style", instance: null, count: 0, state: null }),
              n.set(e, l)),
            l)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          n.rel === "stylesheet" &&
          typeof n.href == "string" &&
          typeof n.precedence == "string"
        ) {
          t = ua(n.href);
          var o = _i(r).hoistableStyles,
            d = o.get(t);
          if (
            (d ||
              ((r = r.ownerDocument || r),
              (d = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              o.set(t, d),
              (o = r.querySelector(fl(t))) &&
                !o._p &&
                ((d.instance = o), (d.state.loading = 5)),
              Le.has(t) ||
                ((n = {
                  rel: "preload",
                  as: "style",
                  href: n.href,
                  crossOrigin: n.crossOrigin,
                  integrity: n.integrity,
                  media: n.media,
                  hrefLang: n.hrefLang,
                  referrerPolicy: n.referrerPolicy,
                }),
                Le.set(t, n),
                o || XS(r, t, n, d.state))),
            e && l === null)
          )
            throw Error(u(528, ""));
          return d;
        }
        if (e && l !== null) throw Error(u(529, ""));
        return null;
      case "script":
        return (
          (e = n.async),
          (n = n.src),
          typeof n == "string" &&
          e &&
          typeof e != "function" &&
          typeof e != "symbol"
            ? ((e = ra(n)),
              (n = _i(r).hoistableScripts),
              (l = n.get(e)),
              l ||
                ((l = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                n.set(e, l)),
              l)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(u(444, t));
    }
  }
  function ua(t) {
    return 'href="' + Oe(t) + '"';
  }
  function fl(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function zm(t) {
    return at({}, t, { "data-precedence": t.precedence, precedence: null });
  }
  function XS(t, e, n, l) {
    t.querySelector('link[rel="preload"][as="style"][' + e + "]")
      ? (l.loading = 1)
      : ((e = t.createElement("link")),
        (l.preload = e),
        e.addEventListener("load", function () {
          return (l.loading |= 1);
        }),
        e.addEventListener("error", function () {
          return (l.loading |= 2);
        }),
        Wt(e, "link", n),
        Qt(e),
        t.head.appendChild(e));
  }
  function ra(t) {
    return '[src="' + Oe(t) + '"]';
  }
  function hl(t) {
    return "script[async]" + t;
  }
  function Bm(t, e, n) {
    if ((e.count++, e.instance === null))
      switch (e.type) {
        case "style":
          var l = t.querySelector('style[data-href~="' + Oe(n.href) + '"]');
          if (l) return (e.instance = l), Qt(l), l;
          var r = at({}, n, {
            "data-href": n.href,
            "data-precedence": n.precedence,
            href: null,
            precedence: null,
          });
          return (
            (l = (t.ownerDocument || t).createElement("style")),
            Qt(l),
            Wt(l, "style", r),
            Qs(l, n.precedence, t),
            (e.instance = l)
          );
        case "stylesheet":
          r = ua(n.href);
          var o = t.querySelector(fl(r));
          if (o) return (e.state.loading |= 4), (e.instance = o), Qt(o), o;
          (l = zm(n)),
            (r = Le.get(r)) && wo(l, r),
            (o = (t.ownerDocument || t).createElement("link")),
            Qt(o);
          var d = o;
          return (
            (d._p = new Promise(function (v, b) {
              (d.onload = v), (d.onerror = b);
            })),
            Wt(o, "link", l),
            (e.state.loading |= 4),
            Qs(o, n.precedence, t),
            (e.instance = o)
          );
        case "script":
          return (
            (o = ra(n.src)),
            (r = t.querySelector(hl(o)))
              ? ((e.instance = r), Qt(r), r)
              : ((l = n),
                (r = Le.get(o)) && ((l = at({}, n)), Uo(l, r)),
                (t = t.ownerDocument || t),
                (r = t.createElement("script")),
                Qt(r),
                Wt(r, "link", l),
                t.head.appendChild(r),
                (e.instance = r))
          );
        case "void":
          return null;
        default:
          throw Error(u(443, e.type));
      }
    else
      e.type === "stylesheet" &&
        (e.state.loading & 4) === 0 &&
        ((l = e.instance), (e.state.loading |= 4), Qs(l, n.precedence, t));
    return e.instance;
  }
  function Qs(t, e, n) {
    for (
      var l = n.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]'
        ),
        r = l.length ? l[l.length - 1] : null,
        o = r,
        d = 0;
      d < l.length;
      d++
    ) {
      var v = l[d];
      if (v.dataset.precedence === e) o = v;
      else if (o !== r) break;
    }
    o
      ? o.parentNode.insertBefore(t, o.nextSibling)
      : ((e = n.nodeType === 9 ? n.head : n), e.insertBefore(t, e.firstChild));
  }
  function wo(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.title == null && (t.title = e.title);
  }
  function Uo(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.integrity == null && (t.integrity = e.integrity);
  }
  var Zs = null;
  function Nm(t, e, n) {
    if (Zs === null) {
      var l = new Map(),
        r = (Zs = new Map());
      r.set(n, l);
    } else (r = Zs), (l = r.get(n)), l || ((l = new Map()), r.set(n, l));
    if (l.has(t)) return l;
    for (
      l.set(t, null), n = n.getElementsByTagName(t), r = 0;
      r < n.length;
      r++
    ) {
      var o = n[r];
      if (
        !(
          o[xa] ||
          o[It] ||
          (t === "link" && o.getAttribute("rel") === "stylesheet")
        ) &&
        o.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var d = o.getAttribute(e) || "";
        d = t + d;
        var v = l.get(d);
        v ? v.push(o) : l.set(d, [o]);
      }
    }
    return l;
  }
  function Lm(t, e, n) {
    (t = t.ownerDocument || t),
      t.head.insertBefore(
        n,
        e === "title" ? t.querySelector("head > title") : null
      );
  }
  function KS(t, e, n) {
    if (n === 1 || e.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof e.precedence != "string" ||
          typeof e.href != "string" ||
          e.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof e.rel != "string" ||
          typeof e.href != "string" ||
          e.href === "" ||
          e.onLoad ||
          e.onError
        )
          break;
        switch (e.rel) {
          case "stylesheet":
            return (
              (t = e.disabled), typeof e.precedence == "string" && t == null
            );
          default:
            return !0;
        }
      case "script":
        if (
          e.async &&
          typeof e.async != "function" &&
          typeof e.async != "symbol" &&
          !e.onLoad &&
          !e.onError &&
          e.src &&
          typeof e.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function jm(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  var dl = null;
  function QS() {}
  function ZS(t, e, n) {
    if (dl === null) throw Error(u(475));
    var l = dl;
    if (
      e.type === "stylesheet" &&
      (typeof n.media != "string" || matchMedia(n.media).matches !== !1) &&
      (e.state.loading & 4) === 0
    ) {
      if (e.instance === null) {
        var r = ua(n.href),
          o = t.querySelector(fl(r));
        if (o) {
          (t = o._p),
            t !== null &&
              typeof t == "object" &&
              typeof t.then == "function" &&
              (l.count++, (l = Ps.bind(l)), t.then(l, l)),
            (e.state.loading |= 4),
            (e.instance = o),
            Qt(o);
          return;
        }
        (o = t.ownerDocument || t),
          (n = zm(n)),
          (r = Le.get(r)) && wo(n, r),
          (o = o.createElement("link")),
          Qt(o);
        var d = o;
        (d._p = new Promise(function (v, b) {
          (d.onload = v), (d.onerror = b);
        })),
          Wt(o, "link", n),
          (e.instance = o);
      }
      l.stylesheets === null && (l.stylesheets = new Map()),
        l.stylesheets.set(e, t),
        (t = e.state.preload) &&
          (e.state.loading & 3) === 0 &&
          (l.count++,
          (e = Ps.bind(l)),
          t.addEventListener("load", e),
          t.addEventListener("error", e));
    }
  }
  function PS() {
    if (dl === null) throw Error(u(475));
    var t = dl;
    return (
      t.stylesheets && t.count === 0 && Vo(t, t.stylesheets),
      0 < t.count
        ? function (e) {
            var n = setTimeout(function () {
              if ((t.stylesheets && Vo(t, t.stylesheets), t.unsuspend)) {
                var l = t.unsuspend;
                (t.unsuspend = null), l();
              }
            }, 6e4);
            return (
              (t.unsuspend = e),
              function () {
                (t.unsuspend = null), clearTimeout(n);
              }
            );
          }
        : null
    );
  }
  function Ps() {
    if ((this.count--, this.count === 0)) {
      if (this.stylesheets) Vo(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        (this.unsuspend = null), t();
      }
    }
  }
  var Fs = null;
  function Vo(t, e) {
    (t.stylesheets = null),
      t.unsuspend !== null &&
        (t.count++,
        (Fs = new Map()),
        e.forEach(FS, t),
        (Fs = null),
        Ps.call(t));
  }
  function FS(t, e) {
    if (!(e.state.loading & 4)) {
      var n = Fs.get(t);
      if (n) var l = n.get(null);
      else {
        (n = new Map()), Fs.set(t, n);
        for (
          var r = t.querySelectorAll(
              "link[data-precedence],style[data-precedence]"
            ),
            o = 0;
          o < r.length;
          o++
        ) {
          var d = r[o];
          (d.nodeName === "LINK" || d.getAttribute("media") !== "not all") &&
            (n.set(d.dataset.precedence, d), (l = d));
        }
        l && n.set(null, l);
      }
      (r = e.instance),
        (d = r.getAttribute("data-precedence")),
        (o = n.get(d) || l),
        o === l && n.set(null, r),
        n.set(d, r),
        this.count++,
        (l = Ps.bind(this)),
        r.addEventListener("load", l),
        r.addEventListener("error", l),
        o
          ? o.parentNode.insertBefore(r, o.nextSibling)
          : ((t = t.nodeType === 9 ? t.head : t),
            t.insertBefore(r, t.firstChild)),
        (e.state.loading |= 4);
    }
  }
  var ml = {
    $$typeof: M,
    Provider: null,
    Consumer: null,
    _currentValue: mt,
    _currentValue2: mt,
    _threadCount: 0,
  };
  function kS(t, e, n, l, r, o, d, v) {
    (this.tag = 1),
      (this.containerInfo = t),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = zu(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.finishedLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = zu(0)),
      (this.hiddenUpdates = zu(null)),
      (this.identifierPrefix = l),
      (this.onUncaughtError = r),
      (this.onCaughtError = o),
      (this.onRecoverableError = d),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = v),
      (this.incompleteTransitions = new Map());
  }
  function Hm(t, e, n, l, r, o, d, v, b, R, z, L) {
    return (
      (t = new kS(t, e, n, d, v, b, R, L)),
      (e = 1),
      o === !0 && (e |= 24),
      (o = Be(3, null, null, e)),
      (t.current = o),
      (o.stateNode = t),
      (e = cr()),
      e.refCount++,
      (t.pooledCache = e),
      e.refCount++,
      (o.memoizedState = { element: l, isDehydrated: n, cache: e }),
      Kr(o),
      t
    );
  }
  function qm(t) {
    return t ? ((t = qi), t) : qi;
  }
  function Ym(t, e, n, l, r, o) {
    (r = qm(r)),
      l.context === null ? (l.context = r) : (l.pendingContext = r),
      (l = zn(e)),
      (l.payload = { element: n }),
      (o = o === void 0 ? null : o),
      o !== null && (l.callback = o),
      (n = Bn(t, l, e)),
      n !== null && (re(n, t, e), Wa(n, t, e));
  }
  function Gm(t, e) {
    if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
      var n = t.retryLane;
      t.retryLane = n !== 0 && n < e ? n : e;
    }
  }
  function zo(t, e) {
    Gm(t, e), (t = t.alternate) && Gm(t, e);
  }
  function Xm(t) {
    if (t.tag === 13) {
      var e = On(t, 67108864);
      e !== null && re(e, t, 67108864), zo(t, 67108864);
    }
  }
  var ks = !0;
  function JS(t, e, n, l) {
    var r = X.T;
    X.T = null;
    var o = K.p;
    try {
      (K.p = 2), Bo(t, e, n, l);
    } finally {
      (K.p = o), (X.T = r);
    }
  }
  function WS(t, e, n, l) {
    var r = X.T;
    X.T = null;
    var o = K.p;
    try {
      (K.p = 8), Bo(t, e, n, l);
    } finally {
      (K.p = o), (X.T = r);
    }
  }
  function Bo(t, e, n, l) {
    if (ks) {
      var r = No(l);
      if (r === null) Eo(t, e, l, Js, n), Qm(t, l);
      else if (IS(r, t, e, n, l)) l.stopPropagation();
      else if ((Qm(t, l), e & 4 && -1 < $S.indexOf(t))) {
        for (; r !== null; ) {
          var o = Ci(r);
          if (o !== null)
            switch (o.tag) {
              case 3:
                if (((o = o.stateNode), o.current.memoizedState.isDehydrated)) {
                  var d = Wn(o.pendingLanes);
                  if (d !== 0) {
                    var v = o;
                    for (v.pendingLanes |= 2, v.entangledLanes |= 2; d; ) {
                      var b = 1 << (31 - pe(d));
                      (v.entanglements[1] |= b), (d &= ~b);
                    }
                    $e(o), (Mt & 6) === 0 && ((Vs = Pe() + 500), rl(0));
                  }
                }
                break;
              case 13:
                (v = On(o, 2)), v !== null && re(v, o, 2), Ns(), zo(o, 2);
            }
          if (((o = No(l)), o === null && Eo(t, e, l, Js, n), o === r)) break;
          r = o;
        }
        r !== null && l.stopPropagation();
      } else Eo(t, e, l, null, n);
    }
  }
  function No(t) {
    return (t = Yu(t)), Lo(t);
  }
  var Js = null;
  function Lo(t) {
    if (((Js = null), (t = $n(t)), t !== null)) {
      var e = F(t);
      if (e === null) t = null;
      else {
        var n = e.tag;
        if (n === 13) {
          if (((t = vt(e)), t !== null)) return t;
          t = null;
        } else if (n === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated)
            return e.tag === 3 ? e.stateNode.containerInfo : null;
          t = null;
        } else e !== t && (t = null);
      }
    }
    return (Js = t), null;
  }
  function Km(t) {
    switch (t) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (L0()) {
          case mf:
            return 2;
          case pf:
            return 8;
          case Ql:
          case j0:
            return 32;
          case yf:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var jo = !1,
    Gn = null,
    Xn = null,
    Kn = null,
    pl = new Map(),
    yl = new Map(),
    Qn = [],
    $S =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " "
      );
  function Qm(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        Gn = null;
        break;
      case "dragenter":
      case "dragleave":
        Xn = null;
        break;
      case "mouseover":
      case "mouseout":
        Kn = null;
        break;
      case "pointerover":
      case "pointerout":
        pl.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        yl.delete(e.pointerId);
    }
  }
  function gl(t, e, n, l, r, o) {
    return t === null || t.nativeEvent !== o
      ? ((t = {
          blockedOn: e,
          domEventName: n,
          eventSystemFlags: l,
          nativeEvent: o,
          targetContainers: [r],
        }),
        e !== null && ((e = Ci(e)), e !== null && Xm(e)),
        t)
      : ((t.eventSystemFlags |= l),
        (e = t.targetContainers),
        r !== null && e.indexOf(r) === -1 && e.push(r),
        t);
  }
  function IS(t, e, n, l, r) {
    switch (e) {
      case "focusin":
        return (Gn = gl(Gn, t, e, n, l, r)), !0;
      case "dragenter":
        return (Xn = gl(Xn, t, e, n, l, r)), !0;
      case "mouseover":
        return (Kn = gl(Kn, t, e, n, l, r)), !0;
      case "pointerover":
        var o = r.pointerId;
        return pl.set(o, gl(pl.get(o) || null, t, e, n, l, r)), !0;
      case "gotpointercapture":
        return (
          (o = r.pointerId), yl.set(o, gl(yl.get(o) || null, t, e, n, l, r)), !0
        );
    }
    return !1;
  }
  function Zm(t) {
    var e = $n(t.target);
    if (e !== null) {
      var n = F(e);
      if (n !== null) {
        if (((e = n.tag), e === 13)) {
          if (((e = vt(n)), e !== null)) {
            (t.blockedOn = e),
              P0(t.priority, function () {
                if (n.tag === 13) {
                  var l = be(),
                    r = On(n, l);
                  r !== null && re(r, n, l), zo(n, l);
                }
              });
            return;
          }
        } else if (e === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function Ws(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var n = No(t.nativeEvent);
      if (n === null) {
        n = t.nativeEvent;
        var l = new n.constructor(n.type, n);
        (qu = l), n.target.dispatchEvent(l), (qu = null);
      } else return (e = Ci(n)), e !== null && Xm(e), (t.blockedOn = n), !1;
      e.shift();
    }
    return !0;
  }
  function Pm(t, e, n) {
    Ws(t) && n.delete(e);
  }
  function t1() {
    (jo = !1),
      Gn !== null && Ws(Gn) && (Gn = null),
      Xn !== null && Ws(Xn) && (Xn = null),
      Kn !== null && Ws(Kn) && (Kn = null),
      pl.forEach(Pm),
      yl.forEach(Pm);
  }
  function $s(t, e) {
    t.blockedOn === e &&
      ((t.blockedOn = null),
      jo ||
        ((jo = !0),
        i.unstable_scheduleCallback(i.unstable_NormalPriority, t1)));
  }
  var Is = null;
  function Fm(t) {
    Is !== t &&
      ((Is = t),
      i.unstable_scheduleCallback(i.unstable_NormalPriority, function () {
        Is === t && (Is = null);
        for (var e = 0; e < t.length; e += 3) {
          var n = t[e],
            l = t[e + 1],
            r = t[e + 2];
          if (typeof l != "function") {
            if (Lo(l || n) === null) continue;
            break;
          }
          var o = Ci(n);
          o !== null &&
            (t.splice(e, 3),
            (e -= 3),
            xr(o, { pending: !0, data: r, method: n.method, action: l }, l, r));
        }
      }));
  }
  function vl(t) {
    function e(b) {
      return $s(b, t);
    }
    Gn !== null && $s(Gn, t),
      Xn !== null && $s(Xn, t),
      Kn !== null && $s(Kn, t),
      pl.forEach(e),
      yl.forEach(e);
    for (var n = 0; n < Qn.length; n++) {
      var l = Qn[n];
      l.blockedOn === t && (l.blockedOn = null);
    }
    for (; 0 < Qn.length && ((n = Qn[0]), n.blockedOn === null); )
      Zm(n), n.blockedOn === null && Qn.shift();
    if (((n = (t.ownerDocument || t).$$reactFormReplay), n != null))
      for (l = 0; l < n.length; l += 3) {
        var r = n[l],
          o = n[l + 1],
          d = r[ce] || null;
        if (typeof o == "function") d || Fm(n);
        else if (d) {
          var v = null;
          if (o && o.hasAttribute("formAction")) {
            if (((r = o), (d = o[ce] || null))) v = d.formAction;
            else if (Lo(r) !== null) continue;
          } else v = d.action;
          typeof v == "function" ? (n[l + 1] = v) : (n.splice(l, 3), (l -= 3)),
            Fm(n);
        }
      }
  }
  function Ho(t) {
    this._internalRoot = t;
  }
  (tu.prototype.render = Ho.prototype.render =
    function (t) {
      var e = this._internalRoot;
      if (e === null) throw Error(u(409));
      var n = e.current,
        l = be();
      Ym(n, l, t, e, null, null);
    }),
    (tu.prototype.unmount = Ho.prototype.unmount =
      function () {
        var t = this._internalRoot;
        if (t !== null) {
          this._internalRoot = null;
          var e = t.containerInfo;
          t.tag === 0 && ia(),
            Ym(t.current, 2, null, t, null, null),
            Ns(),
            (e[Mi] = null);
        }
      });
  function tu(t) {
    this._internalRoot = t;
  }
  tu.prototype.unstable_scheduleHydration = function (t) {
    if (t) {
      var e = Af();
      t = { blockedOn: null, target: t, priority: e };
      for (var n = 0; n < Qn.length && e !== 0 && e < Qn[n].priority; n++);
      Qn.splice(n, 0, t), n === 0 && Zm(t);
    }
  };
  var km = a.version;
  if (km !== "19.0.0") throw Error(u(527, km, "19.0.0"));
  K.findDOMNode = function (t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == "function"
        ? Error(u(188))
        : ((t = Object.keys(t).join(",")), Error(u(268, t)));
    return (
      (t = H(e)),
      (t = t !== null ? et(t) : null),
      (t = t === null ? null : t.stateNode),
      t
    );
  };
  var e1 = {
    bundleType: 0,
    version: "19.0.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: X,
    findFiberByHostInstance: $n,
    reconcilerVersion: "19.0.0",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var eu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!eu.isDisabled && eu.supportsFiber)
      try {
        (Ea = eu.inject(e1)), (me = eu);
      } catch {}
  }
  return (
    (bl.createRoot = function (t, e) {
      if (!c(t)) throw Error(u(299));
      var n = !1,
        l = "",
        r = hd,
        o = dd,
        d = md,
        v = null;
      return (
        e != null &&
          (e.unstable_strictMode === !0 && (n = !0),
          e.identifierPrefix !== void 0 && (l = e.identifierPrefix),
          e.onUncaughtError !== void 0 && (r = e.onUncaughtError),
          e.onCaughtError !== void 0 && (o = e.onCaughtError),
          e.onRecoverableError !== void 0 && (d = e.onRecoverableError),
          e.unstable_transitionCallbacks !== void 0 &&
            (v = e.unstable_transitionCallbacks)),
        (e = Hm(t, 1, !1, null, null, n, l, r, o, d, v, null)),
        (t[Mi] = e.current),
        Ao(t.nodeType === 8 ? t.parentNode : t),
        new Ho(e)
      );
    }),
    (bl.hydrateRoot = function (t, e, n) {
      if (!c(t)) throw Error(u(299));
      var l = !1,
        r = "",
        o = hd,
        d = dd,
        v = md,
        b = null,
        R = null;
      return (
        n != null &&
          (n.unstable_strictMode === !0 && (l = !0),
          n.identifierPrefix !== void 0 && (r = n.identifierPrefix),
          n.onUncaughtError !== void 0 && (o = n.onUncaughtError),
          n.onCaughtError !== void 0 && (d = n.onCaughtError),
          n.onRecoverableError !== void 0 && (v = n.onRecoverableError),
          n.unstable_transitionCallbacks !== void 0 &&
            (b = n.unstable_transitionCallbacks),
          n.formState !== void 0 && (R = n.formState)),
        (e = Hm(t, 1, !0, e, n ?? null, l, r, o, d, v, b, R)),
        (e.context = qm(null)),
        (n = e.current),
        (l = be()),
        (r = zn(l)),
        (r.callback = null),
        Bn(n, r, l),
        (e.current.lanes = l),
        Da(e, l),
        $e(e),
        (t[Mi] = e.current),
        Ao(t),
        new tu(e)
      );
    }),
    (bl.version = "19.0.0"),
    bl
  );
}
var lp;
function f1() {
  if (lp) return Go.exports;
  lp = 1;
  function i() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (a) {
        console.error(a);
      }
  }
  return i(), (Go.exports = c1()), Go.exports;
}
var h1 = f1();
const By = it.createContext({});
function d1(i) {
  const a = it.useRef(null);
  return a.current === null && (a.current = i()), a.current;
}
const wc = it.createContext(null),
  Ny = it.createContext({
    transformPagePoint: (i) => i,
    isStatic: !1,
    reducedMotion: "never",
  });
function m1(i = !0) {
  const a = it.useContext(wc);
  if (a === null) return [!0, null];
  const { isPresent: s, onExitComplete: u, register: c } = a,
    h = it.useId();
  it.useEffect(() => {
    if (i) return c(h);
  }, [i]);
  const f = it.useCallback(() => i && u && u(h), [h, u, i]);
  return !s && u ? [!1, f] : [!0];
}
const Uc = typeof window < "u",
  p1 = Uc ? it.useLayoutEffect : it.useEffect,
  Te = (i) => i;
let Ly = Te;
const y1 = { useManualTiming: !1 },
  nu = [
    "read",
    "resolveKeyframes",
    "update",
    "preRender",
    "render",
    "postRender",
  ],
  sp = { value: null };
function g1(i, a) {
  let s = new Set(),
    u = new Set(),
    c = !1,
    h = !1;
  const f = new WeakSet();
  let m = { delta: 0, timestamp: 0, isProcessing: !1 },
    y = 0;
  function p(S) {
    f.has(S) && (g.schedule(S), i()), y++, S(m);
  }
  const g = {
    schedule: (S, T = !1, M = !1) => {
      const _ = M && c ? s : u;
      return T && f.add(S), _.has(S) || _.add(S), S;
    },
    cancel: (S) => {
      u.delete(S), f.delete(S);
    },
    process: (S) => {
      if (((m = S), c)) {
        h = !0;
        return;
      }
      (c = !0),
        ([s, u] = [u, s]),
        s.forEach(p),
        a && sp.value && sp.value.frameloop[a].push(y),
        (y = 0),
        s.clear(),
        (c = !1),
        h && ((h = !1), g.process(S));
    },
  };
  return g;
}
const v1 = 40;
function jy(i, a) {
  let s = !1,
    u = !0;
  const c = { delta: 0, timestamp: 0, isProcessing: !1 },
    h = () => (s = !0),
    f = nu.reduce((N, q) => ((N[q] = g1(h, a ? q : void 0)), N), {}),
    {
      read: m,
      resolveKeyframes: y,
      update: p,
      preRender: g,
      render: S,
      postRender: T,
    } = f,
    M = () => {
      const N = performance.now();
      (s = !1),
        (c.delta = u ? 1e3 / 60 : Math.max(Math.min(N - c.timestamp, v1), 1)),
        (c.timestamp = N),
        (c.isProcessing = !0),
        m.process(c),
        y.process(c),
        p.process(c),
        g.process(c),
        S.process(c),
        T.process(c),
        (c.isProcessing = !1),
        s && a && ((u = !1), i(M));
    },
    O = () => {
      (s = !0), (u = !0), c.isProcessing || i(M);
    };
  return {
    schedule: nu.reduce((N, q) => {
      const Y = f[q];
      return (
        (N[q] = (nt, j = !1, $ = !1) => (s || O(), Y.schedule(nt, j, $))), N
      );
    }, {}),
    cancel: (N) => {
      for (let q = 0; q < nu.length; q++) f[nu[q]].cancel(N);
    },
    state: c,
    steps: f,
  };
}
const {
    schedule: Dt,
    cancel: Fn,
    state: $t,
    steps: Zo,
  } = jy(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Te, !0),
  Hy = it.createContext({ strict: !1 }),
  up = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  },
  pa = {};
for (const i in up) pa[i] = { isEnabled: (a) => up[i].some((s) => !!a[s]) };
function S1(i) {
  for (const a in i) pa[a] = { ...pa[a], ...i[a] };
}
const b1 = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport",
]);
function fu(i) {
  return (
    i.startsWith("while") ||
    (i.startsWith("drag") && i !== "draggable") ||
    i.startsWith("layout") ||
    i.startsWith("onTap") ||
    i.startsWith("onPan") ||
    i.startsWith("onLayout") ||
    b1.has(i)
  );
}
let qy = (i) => !fu(i);
function T1(i) {
  i && (qy = (a) => (a.startsWith("on") ? !fu(a) : i(a)));
}
try {
  T1(require("@emotion/is-prop-valid").default);
} catch {}
function A1(i, a, s) {
  const u = {};
  for (const c in i)
    (c === "values" && typeof i.values == "object") ||
      ((qy(c) ||
        (s === !0 && fu(c)) ||
        (!a && !fu(c)) ||
        (i.draggable && c.startsWith("onDrag"))) &&
        (u[c] = i[c]));
  return u;
}
function E1(i) {
  if (typeof Proxy > "u") return i;
  const a = new Map(),
    s = (...u) => i(...u);
  return new Proxy(s, {
    get: (u, c) =>
      c === "create" ? i : (a.has(c) || a.set(c, i(c)), a.get(c)),
  });
}
const bu = it.createContext({});
function Tu(i) {
  return i !== null && typeof i == "object" && typeof i.start == "function";
}
function Ml(i) {
  return typeof i == "string" || Array.isArray(i);
}
const Vc = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  zc = ["initial", ...Vc];
function Au(i) {
  return Tu(i.animate) || zc.some((a) => Ml(i[a]));
}
function Yy(i) {
  return !!(Au(i) || i.variants);
}
function R1(i, a) {
  if (Au(i)) {
    const { initial: s, animate: u } = i;
    return {
      initial: s === !1 || Ml(s) ? s : void 0,
      animate: Ml(u) ? u : void 0,
    };
  }
  return i.inherit !== !1 ? a : {};
}
function D1(i) {
  const { initial: a, animate: s } = R1(i, it.useContext(bu));
  return it.useMemo(() => ({ initial: a, animate: s }), [rp(a), rp(s)]);
}
function rp(i) {
  return Array.isArray(i) ? i.join(" ") : i;
}
const x1 = Symbol.for("motionComponentSymbol");
function oa(i) {
  return (
    i &&
    typeof i == "object" &&
    Object.prototype.hasOwnProperty.call(i, "current")
  );
}
function O1(i, a, s) {
  return it.useCallback(
    (u) => {
      u && i.onMount && i.onMount(u),
        a && (u ? a.mount(u) : a.unmount()),
        s && (typeof s == "function" ? s(u) : oa(s) && (s.current = u));
    },
    [a]
  );
}
const Bc = (i) => i.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
  M1 = "framerAppearId",
  Gy = "data-" + Bc(M1),
  { schedule: Nc } = jy(queueMicrotask, !1),
  Xy = it.createContext({});
function C1(i, a, s, u, c) {
  var h, f;
  const { visualElement: m } = it.useContext(bu),
    y = it.useContext(Hy),
    p = it.useContext(wc),
    g = it.useContext(Ny).reducedMotion,
    S = it.useRef(null);
  (u = u || y.renderer),
    !S.current &&
      u &&
      (S.current = u(i, {
        visualState: a,
        parent: m,
        props: s,
        presenceContext: p,
        blockInitialAnimation: p ? p.initial === !1 : !1,
        reducedMotionConfig: g,
      }));
  const T = S.current,
    M = it.useContext(Xy);
  T &&
    !T.projection &&
    c &&
    (T.type === "html" || T.type === "svg") &&
    _1(S.current, s, c, M);
  const O = it.useRef(!1);
  it.useInsertionEffect(() => {
    T && O.current && T.update(s, p);
  });
  const _ = s[Gy],
    U = it.useRef(
      !!_ &&
        !(
          !((h = window.MotionHandoffIsComplete) === null || h === void 0) &&
          h.call(window, _)
        ) &&
        ((f = window.MotionHasOptimisedAnimation) === null || f === void 0
          ? void 0
          : f.call(window, _))
    );
  return (
    p1(() => {
      T &&
        ((O.current = !0),
        (window.MotionIsMounted = !0),
        T.updateFeatures(),
        Nc.render(T.render),
        U.current && T.animationState && T.animationState.animateChanges());
    }),
    it.useEffect(() => {
      T &&
        (!U.current && T.animationState && T.animationState.animateChanges(),
        U.current &&
          (queueMicrotask(() => {
            var N;
            (N = window.MotionHandoffMarkAsComplete) === null ||
              N === void 0 ||
              N.call(window, _);
          }),
          (U.current = !1)));
    }),
    T
  );
}
function _1(i, a, s, u) {
  const {
    layoutId: c,
    layout: h,
    drag: f,
    dragConstraints: m,
    layoutScroll: y,
    layoutRoot: p,
  } = a;
  (i.projection = new s(
    i.latestValues,
    a["data-framer-portal-id"] ? void 0 : Ky(i.parent)
  )),
    i.projection.setOptions({
      layoutId: c,
      layout: h,
      alwaysMeasureLayout: !!f || (m && oa(m)),
      visualElement: i,
      animationType: typeof h == "string" ? h : "both",
      initialPromotionConfig: u,
      layoutScroll: y,
      layoutRoot: p,
    });
}
function Ky(i) {
  if (i) return i.options.allowProjection !== !1 ? i.projection : Ky(i.parent);
}
function w1({
  preloadedFeatures: i,
  createVisualElement: a,
  useRender: s,
  useVisualState: u,
  Component: c,
}) {
  var h, f;
  i && S1(i);
  function m(p, g) {
    let S;
    const T = { ...it.useContext(Ny), ...p, layoutId: U1(p) },
      { isStatic: M } = T,
      O = D1(p),
      _ = u(p, M);
    if (!M && Uc) {
      V1();
      const U = z1(T);
      (S = U.MeasureLayout),
        (O.visualElement = C1(c, _, T, a, U.ProjectionNode));
    }
    return Lt.jsxs(bu.Provider, {
      value: O,
      children: [
        S && O.visualElement
          ? Lt.jsx(S, { visualElement: O.visualElement, ...T })
          : null,
        s(c, p, O1(_, O.visualElement, g), _, M, O.visualElement),
      ],
    });
  }
  m.displayName = `motion.${
    typeof c == "string"
      ? c
      : `create(${
          (f = (h = c.displayName) !== null && h !== void 0 ? h : c.name) !==
            null && f !== void 0
            ? f
            : ""
        })`
  }`;
  const y = it.forwardRef(m);
  return (y[x1] = c), y;
}
function U1({ layoutId: i }) {
  const a = it.useContext(By).id;
  return a && i !== void 0 ? a + "-" + i : i;
}
function V1(i, a) {
  it.useContext(Hy).strict;
}
function z1(i) {
  const { drag: a, layout: s } = pa;
  if (!a && !s) return {};
  const u = { ...a, ...s };
  return {
    MeasureLayout:
      (a != null && a.isEnabled(i)) || (s != null && s.isEnabled(i))
        ? u.MeasureLayout
        : void 0,
    ProjectionNode: u.ProjectionNode,
  };
}
const Qy = (i) => (a) => typeof a == "string" && a.startsWith(i),
  Lc = Qy("--"),
  B1 = Qy("var(--"),
  jc = (i) => (B1(i) ? N1.test(i.split("/*")[0].trim()) : !1),
  N1 =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
  Cl = {};
function L1(i) {
  for (const a in i) (Cl[a] = i[a]), Lc(a) && (Cl[a].isCSSVariable = !0);
}
const va = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  xi = new Set(va);
function Zy(i, { layout: a, layoutId: s }) {
  return (
    xi.has(i) ||
    i.startsWith("origin") ||
    ((a || s !== void 0) && (!!Cl[i] || i === "opacity"))
  );
}
const ae = (i) => !!(i && i.getVelocity),
  Py = (i, a) => (a && typeof i == "number" ? a.transform(i) : i),
  An = (i, a, s) => (s > a ? a : s < i ? i : s),
  Sa = {
    test: (i) => typeof i == "number",
    parse: parseFloat,
    transform: (i) => i,
  },
  _l = { ...Sa, transform: (i) => An(0, 1, i) },
  iu = { ...Sa, default: 1 },
  Nl = (i) => ({
    test: (a) =>
      typeof a == "string" && a.endsWith(i) && a.split(" ").length === 1,
    parse: parseFloat,
    transform: (a) => `${a}${i}`,
  }),
  Pn = Nl("deg"),
  tn = Nl("%"),
  tt = Nl("px"),
  j1 = Nl("vh"),
  H1 = Nl("vw"),
  op = {
    ...tn,
    parse: (i) => tn.parse(i) / 100,
    transform: (i) => tn.transform(i * 100),
  },
  q1 = {
    borderWidth: tt,
    borderTopWidth: tt,
    borderRightWidth: tt,
    borderBottomWidth: tt,
    borderLeftWidth: tt,
    borderRadius: tt,
    radius: tt,
    borderTopLeftRadius: tt,
    borderTopRightRadius: tt,
    borderBottomRightRadius: tt,
    borderBottomLeftRadius: tt,
    width: tt,
    maxWidth: tt,
    height: tt,
    maxHeight: tt,
    top: tt,
    right: tt,
    bottom: tt,
    left: tt,
    padding: tt,
    paddingTop: tt,
    paddingRight: tt,
    paddingBottom: tt,
    paddingLeft: tt,
    margin: tt,
    marginTop: tt,
    marginRight: tt,
    marginBottom: tt,
    marginLeft: tt,
    backgroundPositionX: tt,
    backgroundPositionY: tt,
  },
  Y1 = {
    rotate: Pn,
    rotateX: Pn,
    rotateY: Pn,
    rotateZ: Pn,
    scale: iu,
    scaleX: iu,
    scaleY: iu,
    scaleZ: iu,
    skew: Pn,
    skewX: Pn,
    skewY: Pn,
    distance: tt,
    translateX: tt,
    translateY: tt,
    translateZ: tt,
    x: tt,
    y: tt,
    z: tt,
    perspective: tt,
    transformPerspective: tt,
    opacity: _l,
    originX: op,
    originY: op,
    originZ: tt,
  },
  cp = { ...Sa, transform: Math.round },
  Hc = {
    ...q1,
    ...Y1,
    zIndex: cp,
    size: tt,
    fillOpacity: _l,
    strokeOpacity: _l,
    numOctaves: cp,
  },
  G1 = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  X1 = va.length;
function K1(i, a, s) {
  let u = "",
    c = !0;
  for (let h = 0; h < X1; h++) {
    const f = va[h],
      m = i[f];
    if (m === void 0) continue;
    let y = !0;
    if (
      (typeof m == "number"
        ? (y = m === (f.startsWith("scale") ? 1 : 0))
        : (y = parseFloat(m) === 0),
      !y || s)
    ) {
      const p = Py(m, Hc[f]);
      if (!y) {
        c = !1;
        const g = G1[f] || f;
        u += `${g}(${p}) `;
      }
      s && (a[f] = p);
    }
  }
  return (u = u.trim()), s ? (u = s(a, c ? "" : u)) : c && (u = "none"), u;
}
function qc(i, a, s) {
  const { style: u, vars: c, transformOrigin: h } = i;
  let f = !1,
    m = !1;
  for (const y in a) {
    const p = a[y];
    if (xi.has(y)) {
      f = !0;
      continue;
    } else if (Lc(y)) {
      c[y] = p;
      continue;
    } else {
      const g = Py(p, Hc[y]);
      y.startsWith("origin") ? ((m = !0), (h[y] = g)) : (u[y] = g);
    }
  }
  if (
    (a.transform ||
      (f || s
        ? (u.transform = K1(a, i.transform, s))
        : u.transform && (u.transform = "none")),
    m)
  ) {
    const { originX: y = "50%", originY: p = "50%", originZ: g = 0 } = h;
    u.transformOrigin = `${y} ${p} ${g}`;
  }
}
const Yc = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function Fy(i, a, s) {
  for (const u in a) !ae(a[u]) && !Zy(u, s) && (i[u] = a[u]);
}
function Q1({ transformTemplate: i }, a) {
  return it.useMemo(() => {
    const s = Yc();
    return qc(s, a, i), Object.assign({}, s.vars, s.style);
  }, [a]);
}
function Z1(i, a) {
  const s = i.style || {},
    u = {};
  return Fy(u, s, i), Object.assign(u, Q1(i, a)), u;
}
function P1(i, a) {
  const s = {},
    u = Z1(i, a);
  return (
    i.drag &&
      i.dragListener !== !1 &&
      ((s.draggable = !1),
      (u.userSelect = u.WebkitUserSelect = u.WebkitTouchCallout = "none"),
      (u.touchAction =
        i.drag === !0 ? "none" : `pan-${i.drag === "x" ? "y" : "x"}`)),
    i.tabIndex === void 0 &&
      (i.onTap || i.onTapStart || i.whileTap) &&
      (s.tabIndex = 0),
    (s.style = u),
    s
  );
}
const F1 = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function Gc(i) {
  return typeof i != "string" || i.includes("-")
    ? !1
    : !!(F1.indexOf(i) > -1 || /[A-Z]/u.test(i));
}
const k1 = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  J1 = { offset: "strokeDashoffset", array: "strokeDasharray" };
function W1(i, a, s = 1, u = 0, c = !0) {
  i.pathLength = 1;
  const h = c ? k1 : J1;
  i[h.offset] = tt.transform(-u);
  const f = tt.transform(a),
    m = tt.transform(s);
  i[h.array] = `${f} ${m}`;
}
function fp(i, a, s) {
  return typeof i == "string" ? i : tt.transform(a + s * i);
}
function $1(i, a, s) {
  const u = fp(a, i.x, i.width),
    c = fp(s, i.y, i.height);
  return `${u} ${c}`;
}
function Xc(
  i,
  {
    attrX: a,
    attrY: s,
    attrScale: u,
    originX: c,
    originY: h,
    pathLength: f,
    pathSpacing: m = 1,
    pathOffset: y = 0,
    ...p
  },
  g,
  S
) {
  if ((qc(i, p, S), g)) {
    i.style.viewBox && (i.attrs.viewBox = i.style.viewBox);
    return;
  }
  (i.attrs = i.style), (i.style = {});
  const { attrs: T, style: M, dimensions: O } = i;
  T.transform && (O && (M.transform = T.transform), delete T.transform),
    O &&
      (c !== void 0 || h !== void 0 || M.transform) &&
      (M.transformOrigin = $1(
        O,
        c !== void 0 ? c : 0.5,
        h !== void 0 ? h : 0.5
      )),
    a !== void 0 && (T.x = a),
    s !== void 0 && (T.y = s),
    u !== void 0 && (T.scale = u),
    f !== void 0 && W1(T, f, m, y, !1);
}
const ky = () => ({ ...Yc(), attrs: {} }),
  Kc = (i) => typeof i == "string" && i.toLowerCase() === "svg";
function I1(i, a, s, u) {
  const c = it.useMemo(() => {
    const h = ky();
    return (
      Xc(h, a, Kc(u), i.transformTemplate),
      { ...h.attrs, style: { ...h.style } }
    );
  }, [a]);
  if (i.style) {
    const h = {};
    Fy(h, i.style, i), (c.style = { ...h, ...c.style });
  }
  return c;
}
function tb(i = !1) {
  return (s, u, c, { latestValues: h }, f) => {
    const y = (Gc(s) ? I1 : P1)(u, h, f, s),
      p = A1(u, typeof s == "string", i),
      g = s !== it.Fragment ? { ...p, ...y, ref: c } : {},
      { children: S } = u,
      T = it.useMemo(() => (ae(S) ? S.get() : S), [S]);
    return it.createElement(s, { ...g, children: T });
  };
}
function hp(i) {
  const a = [{}, {}];
  return (
    i == null ||
      i.values.forEach((s, u) => {
        (a[0][u] = s.get()), (a[1][u] = s.getVelocity());
      }),
    a
  );
}
function Qc(i, a, s, u) {
  if (typeof a == "function") {
    const [c, h] = hp(u);
    a = a(s !== void 0 ? s : i.custom, c, h);
  }
  if (
    (typeof a == "string" && (a = i.variants && i.variants[a]),
    typeof a == "function")
  ) {
    const [c, h] = hp(u);
    a = a(s !== void 0 ? s : i.custom, c, h);
  }
  return a;
}
const rc = (i) => Array.isArray(i),
  eb = (i) => !!(i && typeof i == "object" && i.mix && i.toValue),
  nb = (i) => (rc(i) ? i[i.length - 1] || 0 : i);
function lu(i) {
  const a = ae(i) ? i.get() : i;
  return eb(a) ? a.toValue() : a;
}
function ib(
  { scrapeMotionValuesFromProps: i, createRenderState: a, onUpdate: s },
  u,
  c,
  h
) {
  const f = { latestValues: ab(u, c, h, i), renderState: a() };
  return (
    s &&
      ((f.onMount = (m) => s({ props: u, current: m, ...f })),
      (f.onUpdate = (m) => s(m))),
    f
  );
}
const Jy = (i) => (a, s) => {
  const u = it.useContext(bu),
    c = it.useContext(wc),
    h = () => ib(i, a, u, c);
  return s ? h() : d1(h);
};
function ab(i, a, s, u) {
  const c = {},
    h = u(i, {});
  for (const T in h) c[T] = lu(h[T]);
  let { initial: f, animate: m } = i;
  const y = Au(i),
    p = Yy(i);
  a &&
    p &&
    !y &&
    i.inherit !== !1 &&
    (f === void 0 && (f = a.initial), m === void 0 && (m = a.animate));
  let g = s ? s.initial === !1 : !1;
  g = g || f === !1;
  const S = g ? m : f;
  if (S && typeof S != "boolean" && !Tu(S)) {
    const T = Array.isArray(S) ? S : [S];
    for (let M = 0; M < T.length; M++) {
      const O = Qc(i, T[M]);
      if (O) {
        const { transitionEnd: _, transition: U, ...N } = O;
        for (const q in N) {
          let Y = N[q];
          if (Array.isArray(Y)) {
            const nt = g ? Y.length - 1 : 0;
            Y = Y[nt];
          }
          Y !== null && (c[q] = Y);
        }
        for (const q in _) c[q] = _[q];
      }
    }
  }
  return c;
}
function Zc(i, a, s) {
  var u;
  const { style: c } = i,
    h = {};
  for (const f in c)
    (ae(c[f]) ||
      (a.style && ae(a.style[f])) ||
      Zy(f, i) ||
      ((u = s == null ? void 0 : s.getValue(f)) === null || u === void 0
        ? void 0
        : u.liveStyle) !== void 0) &&
      (h[f] = c[f]);
  return h;
}
const lb = {
  useVisualState: Jy({
    scrapeMotionValuesFromProps: Zc,
    createRenderState: Yc,
  }),
};
function Wy(i, a) {
  try {
    a.dimensions =
      typeof i.getBBox == "function" ? i.getBBox() : i.getBoundingClientRect();
  } catch {
    a.dimensions = { x: 0, y: 0, width: 0, height: 0 };
  }
}
function $y(i, { style: a, vars: s }, u, c) {
  Object.assign(i.style, a, c && c.getProjectionStyles(u));
  for (const h in s) i.style.setProperty(h, s[h]);
}
const Iy = new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust",
]);
function tg(i, a, s, u) {
  $y(i, a, void 0, u);
  for (const c in a.attrs) i.setAttribute(Iy.has(c) ? c : Bc(c), a.attrs[c]);
}
function eg(i, a, s) {
  const u = Zc(i, a, s);
  for (const c in i)
    if (ae(i[c]) || ae(a[c])) {
      const h =
        va.indexOf(c) !== -1
          ? "attr" + c.charAt(0).toUpperCase() + c.substring(1)
          : c;
      u[h] = i[c];
    }
  return u;
}
const dp = ["x", "y", "width", "height", "cx", "cy", "r"],
  sb = {
    useVisualState: Jy({
      scrapeMotionValuesFromProps: eg,
      createRenderState: ky,
      onUpdate: ({
        props: i,
        prevProps: a,
        current: s,
        renderState: u,
        latestValues: c,
      }) => {
        if (!s) return;
        let h = !!i.drag;
        if (!h) {
          for (const m in c)
            if (xi.has(m)) {
              h = !0;
              break;
            }
        }
        if (!h) return;
        let f = !a;
        if (a)
          for (let m = 0; m < dp.length; m++) {
            const y = dp[m];
            i[y] !== a[y] && (f = !0);
          }
        f &&
          Dt.read(() => {
            Wy(s, u),
              Dt.render(() => {
                Xc(u, c, Kc(s.tagName), i.transformTemplate), tg(s, u);
              });
          });
      },
    }),
  };
function ub(i, a) {
  return function (u, { forwardMotionProps: c } = { forwardMotionProps: !1 }) {
    const f = {
      ...(Gc(u) ? sb : lb),
      preloadedFeatures: i,
      useRender: tb(c),
      createVisualElement: a,
      Component: u,
    };
    return w1(f);
  };
}
function wl(i, a, s) {
  const u = i.getProps();
  return Qc(u, a, s !== void 0 ? s : u.custom, i);
}
function Pc(i, a) {
  return i ? i[a] || i.default || i : void 0;
}
const ng = new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...va,
]);
let su;
function rb() {
  su = void 0;
}
const en = {
  now: () => (
    su === void 0 &&
      en.set(
        $t.isProcessing || y1.useManualTiming ? $t.timestamp : performance.now()
      ),
    su
  ),
  set: (i) => {
    (su = i), queueMicrotask(rb);
  },
};
function Fc(i, a) {
  i.indexOf(a) === -1 && i.push(a);
}
function kc(i, a) {
  const s = i.indexOf(a);
  s > -1 && i.splice(s, 1);
}
class Jc {
  constructor() {
    this.subscriptions = [];
  }
  add(a) {
    return Fc(this.subscriptions, a), () => kc(this.subscriptions, a);
  }
  notify(a, s, u) {
    const c = this.subscriptions.length;
    if (c)
      if (c === 1) this.subscriptions[0](a, s, u);
      else
        for (let h = 0; h < c; h++) {
          const f = this.subscriptions[h];
          f && f(a, s, u);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
function ig(i, a) {
  return a ? i * (1e3 / a) : 0;
}
const mp = 30,
  ob = (i) => !isNaN(parseFloat(i));
class cb {
  constructor(a, s = {}) {
    (this.version = "12.4.7"),
      (this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (u, c = !0) => {
        const h = en.now();
        this.updatedAt !== h && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(u),
          this.current !== this.prev &&
            this.events.change &&
            this.events.change.notify(this.current),
          c &&
            this.events.renderRequest &&
            this.events.renderRequest.notify(this.current);
      }),
      (this.hasAnimated = !1),
      this.setCurrent(a),
      (this.owner = s.owner);
  }
  setCurrent(a) {
    (this.current = a),
      (this.updatedAt = en.now()),
      this.canTrackVelocity === null &&
        a !== void 0 &&
        (this.canTrackVelocity = ob(this.current));
  }
  setPrevFrameValue(a = this.current) {
    (this.prevFrameValue = a), (this.prevUpdatedAt = this.updatedAt);
  }
  onChange(a) {
    return this.on("change", a);
  }
  on(a, s) {
    this.events[a] || (this.events[a] = new Jc());
    const u = this.events[a].add(s);
    return a === "change"
      ? () => {
          u(),
            Dt.read(() => {
              this.events.change.getSize() || this.stop();
            });
        }
      : u;
  }
  clearListeners() {
    for (const a in this.events) this.events[a].clear();
  }
  attach(a, s) {
    (this.passiveEffect = a), (this.stopPassiveEffect = s);
  }
  set(a, s = !0) {
    !s || !this.passiveEffect
      ? this.updateAndNotify(a, s)
      : this.passiveEffect(a, this.updateAndNotify);
  }
  setWithVelocity(a, s, u) {
    this.set(s),
      (this.prev = void 0),
      (this.prevFrameValue = a),
      (this.prevUpdatedAt = this.updatedAt - u);
  }
  jump(a, s = !0) {
    this.updateAndNotify(a),
      (this.prev = a),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      s && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const a = en.now();
    if (
      !this.canTrackVelocity ||
      this.prevFrameValue === void 0 ||
      a - this.updatedAt > mp
    )
      return 0;
    const s = Math.min(this.updatedAt - this.prevUpdatedAt, mp);
    return ig(parseFloat(this.current) - parseFloat(this.prevFrameValue), s);
  }
  start(a) {
    return (
      this.stop(),
      new Promise((s) => {
        (this.hasAnimated = !0),
          (this.animation = a(s)),
          this.events.animationStart && this.events.animationStart.notify();
      }).then(() => {
        this.events.animationComplete && this.events.animationComplete.notify(),
          this.clearAnimation();
      })
    );
  }
  stop() {
    this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation();
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function Ul(i, a) {
  return new cb(i, a);
}
function fb(i, a, s) {
  i.hasValue(a) ? i.getValue(a).set(s) : i.addValue(a, Ul(s));
}
function hb(i, a) {
  const s = wl(i, a);
  let { transitionEnd: u = {}, transition: c = {}, ...h } = s || {};
  h = { ...h, ...u };
  for (const f in h) {
    const m = nb(h[f]);
    fb(i, f, m);
  }
}
function db(i) {
  return !!(ae(i) && i.add);
}
function oc(i, a) {
  const s = i.getValue("willChange");
  if (db(s)) return s.add(a);
}
function ag(i) {
  return i.props[Gy];
}
function Wc(i) {
  let a;
  return () => (a === void 0 && (a = i()), a);
}
const mb = Wc(() => window.ScrollTimeline !== void 0);
class pb {
  constructor(a) {
    (this.stop = () => this.runAll("stop")),
      (this.animations = a.filter(Boolean));
  }
  get finished() {
    return Promise.all(
      this.animations.map((a) => ("finished" in a ? a.finished : a))
    );
  }
  getAll(a) {
    return this.animations[0][a];
  }
  setAll(a, s) {
    for (let u = 0; u < this.animations.length; u++) this.animations[u][a] = s;
  }
  attachTimeline(a, s) {
    const u = this.animations.map((c) => {
      if (mb() && c.attachTimeline) return c.attachTimeline(a);
      if (typeof s == "function") return s(c);
    });
    return () => {
      u.forEach((c, h) => {
        c && c(), this.animations[h].stop();
      });
    };
  }
  get time() {
    return this.getAll("time");
  }
  set time(a) {
    this.setAll("time", a);
  }
  get speed() {
    return this.getAll("speed");
  }
  set speed(a) {
    this.setAll("speed", a);
  }
  get startTime() {
    return this.getAll("startTime");
  }
  get duration() {
    let a = 0;
    for (let s = 0; s < this.animations.length; s++)
      a = Math.max(a, this.animations[s].duration);
    return a;
  }
  runAll(a) {
    this.animations.forEach((s) => s[a]());
  }
  flatten() {
    this.runAll("flatten");
  }
  play() {
    this.runAll("play");
  }
  pause() {
    this.runAll("pause");
  }
  cancel() {
    this.runAll("cancel");
  }
  complete() {
    this.runAll("complete");
  }
}
class yb extends pb {
  then(a, s) {
    return Promise.all(this.animations).then(a).catch(s);
  }
}
const bn = (i) => i * 1e3,
  Tn = (i) => i / 1e3;
function $c(i) {
  return typeof i == "function";
}
function pp(i, a) {
  (i.timeline = a), (i.onfinish = null);
}
const Ic = (i) => Array.isArray(i) && typeof i[0] == "number",
  gb = { linearEasing: void 0 };
function vb(i, a) {
  const s = Wc(i);
  return () => {
    var u;
    return (u = gb[a]) !== null && u !== void 0 ? u : s();
  };
}
const hu = vb(() => {
    try {
      document
        .createElement("div")
        .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
    } catch {
      return !1;
    }
    return !0;
  }, "linearEasing"),
  ya = (i, a, s) => {
    const u = a - i;
    return u === 0 ? 1 : (s - i) / u;
  },
  lg = (i, a, s = 10) => {
    let u = "";
    const c = Math.max(Math.round(a / s), 2);
    for (let h = 0; h < c; h++) u += i(ya(0, c - 1, h)) + ", ";
    return `linear(${u.substring(0, u.length - 2)})`;
  };
function sg(i) {
  return !!(
    (typeof i == "function" && hu()) ||
    !i ||
    (typeof i == "string" && (i in cc || hu())) ||
    Ic(i) ||
    (Array.isArray(i) && i.every(sg))
  );
}
const El = ([i, a, s, u]) => `cubic-bezier(${i}, ${a}, ${s}, ${u})`,
  cc = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: El([0, 0.65, 0.55, 1]),
    circOut: El([0.55, 0, 1, 0.45]),
    backIn: El([0.31, 0.01, 0.66, -0.59]),
    backOut: El([0.33, 1.53, 0.69, 0.99]),
  };
function ug(i, a) {
  if (i)
    return typeof i == "function" && hu()
      ? lg(i, a)
      : Ic(i)
      ? El(i)
      : Array.isArray(i)
      ? i.map((s) => ug(s, a) || cc.easeOut)
      : cc[i];
}
const rg = (i, a, s) =>
    (((1 - 3 * s + 3 * a) * i + (3 * s - 6 * a)) * i + 3 * a) * i,
  Sb = 1e-7,
  bb = 12;
function Tb(i, a, s, u, c) {
  let h,
    f,
    m = 0;
  do (f = a + (s - a) / 2), (h = rg(f, u, c) - i), h > 0 ? (s = f) : (a = f);
  while (Math.abs(h) > Sb && ++m < bb);
  return f;
}
function Ll(i, a, s, u) {
  if (i === a && s === u) return Te;
  const c = (h) => Tb(h, 0, 1, i, s);
  return (h) => (h === 0 || h === 1 ? h : rg(c(h), a, u));
}
const og = (i) => (a) => a <= 0.5 ? i(2 * a) / 2 : (2 - i(2 * (1 - a))) / 2,
  cg = (i) => (a) => 1 - i(1 - a),
  fg = Ll(0.33, 1.53, 0.69, 0.99),
  tf = cg(fg),
  hg = og(tf),
  dg = (i) =>
    (i *= 2) < 1 ? 0.5 * tf(i) : 0.5 * (2 - Math.pow(2, -10 * (i - 1))),
  ef = (i) => 1 - Math.sin(Math.acos(i)),
  mg = cg(ef),
  pg = og(ef),
  yg = (i) => /^0[^.\s]+$/u.test(i);
function Ab(i) {
  return typeof i == "number"
    ? i === 0
    : i !== null
    ? i === "none" || i === "0" || yg(i)
    : !0;
}
const Dl = (i) => Math.round(i * 1e5) / 1e5,
  nf = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function Eb(i) {
  return i == null;
}
const Rb =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  af = (i, a) => (s) =>
    !!(
      (typeof s == "string" && Rb.test(s) && s.startsWith(i)) ||
      (a && !Eb(s) && Object.prototype.hasOwnProperty.call(s, a))
    ),
  gg = (i, a, s) => (u) => {
    if (typeof u != "string") return u;
    const [c, h, f, m] = u.match(nf);
    return {
      [i]: parseFloat(c),
      [a]: parseFloat(h),
      [s]: parseFloat(f),
      alpha: m !== void 0 ? parseFloat(m) : 1,
    };
  },
  Db = (i) => An(0, 255, i),
  Po = { ...Sa, transform: (i) => Math.round(Db(i)) },
  Ti = {
    test: af("rgb", "red"),
    parse: gg("red", "green", "blue"),
    transform: ({ red: i, green: a, blue: s, alpha: u = 1 }) =>
      "rgba(" +
      Po.transform(i) +
      ", " +
      Po.transform(a) +
      ", " +
      Po.transform(s) +
      ", " +
      Dl(_l.transform(u)) +
      ")",
  };
function xb(i) {
  let a = "",
    s = "",
    u = "",
    c = "";
  return (
    i.length > 5
      ? ((a = i.substring(1, 3)),
        (s = i.substring(3, 5)),
        (u = i.substring(5, 7)),
        (c = i.substring(7, 9)))
      : ((a = i.substring(1, 2)),
        (s = i.substring(2, 3)),
        (u = i.substring(3, 4)),
        (c = i.substring(4, 5)),
        (a += a),
        (s += s),
        (u += u),
        (c += c)),
    {
      red: parseInt(a, 16),
      green: parseInt(s, 16),
      blue: parseInt(u, 16),
      alpha: c ? parseInt(c, 16) / 255 : 1,
    }
  );
}
const fc = { test: af("#"), parse: xb, transform: Ti.transform },
  ca = {
    test: af("hsl", "hue"),
    parse: gg("hue", "saturation", "lightness"),
    transform: ({ hue: i, saturation: a, lightness: s, alpha: u = 1 }) =>
      "hsla(" +
      Math.round(i) +
      ", " +
      tn.transform(Dl(a)) +
      ", " +
      tn.transform(Dl(s)) +
      ", " +
      Dl(_l.transform(u)) +
      ")",
  },
  ne = {
    test: (i) => Ti.test(i) || fc.test(i) || ca.test(i),
    parse: (i) =>
      Ti.test(i) ? Ti.parse(i) : ca.test(i) ? ca.parse(i) : fc.parse(i),
    transform: (i) =>
      typeof i == "string"
        ? i
        : i.hasOwnProperty("red")
        ? Ti.transform(i)
        : ca.transform(i),
  },
  Ob =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function Mb(i) {
  var a, s;
  return (
    isNaN(i) &&
    typeof i == "string" &&
    (((a = i.match(nf)) === null || a === void 0 ? void 0 : a.length) || 0) +
      (((s = i.match(Ob)) === null || s === void 0 ? void 0 : s.length) || 0) >
      0
  );
}
const vg = "number",
  Sg = "color",
  Cb = "var",
  _b = "var(",
  yp = "${}",
  wb =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Vl(i) {
  const a = i.toString(),
    s = [],
    u = { color: [], number: [], var: [] },
    c = [];
  let h = 0;
  const m = a
    .replace(
      wb,
      (y) => (
        ne.test(y)
          ? (u.color.push(h), c.push(Sg), s.push(ne.parse(y)))
          : y.startsWith(_b)
          ? (u.var.push(h), c.push(Cb), s.push(y))
          : (u.number.push(h), c.push(vg), s.push(parseFloat(y))),
        ++h,
        yp
      )
    )
    .split(yp);
  return { values: s, split: m, indexes: u, types: c };
}
function bg(i) {
  return Vl(i).values;
}
function Tg(i) {
  const { split: a, types: s } = Vl(i),
    u = a.length;
  return (c) => {
    let h = "";
    for (let f = 0; f < u; f++)
      if (((h += a[f]), c[f] !== void 0)) {
        const m = s[f];
        m === vg
          ? (h += Dl(c[f]))
          : m === Sg
          ? (h += ne.transform(c[f]))
          : (h += c[f]);
      }
    return h;
  };
}
const Ub = (i) => (typeof i == "number" ? 0 : i);
function Vb(i) {
  const a = bg(i);
  return Tg(i)(a.map(Ub));
}
const kn = {
    test: Mb,
    parse: bg,
    createTransformer: Tg,
    getAnimatableNone: Vb,
  },
  zb = new Set(["brightness", "contrast", "saturate", "opacity"]);
function Bb(i) {
  const [a, s] = i.slice(0, -1).split("(");
  if (a === "drop-shadow") return i;
  const [u] = s.match(nf) || [];
  if (!u) return i;
  const c = s.replace(u, "");
  let h = zb.has(a) ? 1 : 0;
  return u !== s && (h *= 100), a + "(" + h + c + ")";
}
const Nb = /\b([a-z-]*)\(.*?\)/gu,
  hc = {
    ...kn,
    getAnimatableNone: (i) => {
      const a = i.match(Nb);
      return a ? a.map(Bb).join(" ") : i;
    },
  },
  Lb = {
    ...Hc,
    color: ne,
    backgroundColor: ne,
    outlineColor: ne,
    fill: ne,
    stroke: ne,
    borderColor: ne,
    borderTopColor: ne,
    borderRightColor: ne,
    borderBottomColor: ne,
    borderLeftColor: ne,
    filter: hc,
    WebkitFilter: hc,
  },
  lf = (i) => Lb[i];
function Ag(i, a) {
  let s = lf(i);
  return (
    s !== hc && (s = kn), s.getAnimatableNone ? s.getAnimatableNone(a) : void 0
  );
}
const jb = new Set(["auto", "none", "0"]);
function Hb(i, a, s) {
  let u = 0,
    c;
  for (; u < i.length && !c; ) {
    const h = i[u];
    typeof h == "string" && !jb.has(h) && Vl(h).values.length && (c = i[u]),
      u++;
  }
  if (c && s) for (const h of a) i[h] = Ag(s, c);
}
const gp = (i) => i === Sa || i === tt,
  vp = (i, a) => parseFloat(i.split(", ")[a]),
  Sp =
    (i, a) =>
    (s, { transform: u }) => {
      if (u === "none" || !u) return 0;
      const c = u.match(/^matrix3d\((.+)\)$/u);
      if (c) return vp(c[1], a);
      {
        const h = u.match(/^matrix\((.+)\)$/u);
        return h ? vp(h[1], i) : 0;
      }
    },
  qb = new Set(["x", "y", "z"]),
  Yb = va.filter((i) => !qb.has(i));
function Gb(i) {
  const a = [];
  return (
    Yb.forEach((s) => {
      const u = i.getValue(s);
      u !== void 0 &&
        (a.push([s, u.get()]), u.set(s.startsWith("scale") ? 1 : 0));
    }),
    a
  );
}
const ga = {
  width: ({ x: i }, { paddingLeft: a = "0", paddingRight: s = "0" }) =>
    i.max - i.min - parseFloat(a) - parseFloat(s),
  height: ({ y: i }, { paddingTop: a = "0", paddingBottom: s = "0" }) =>
    i.max - i.min - parseFloat(a) - parseFloat(s),
  top: (i, { top: a }) => parseFloat(a),
  left: (i, { left: a }) => parseFloat(a),
  bottom: ({ y: i }, { top: a }) => parseFloat(a) + (i.max - i.min),
  right: ({ x: i }, { left: a }) => parseFloat(a) + (i.max - i.min),
  x: Sp(4, 13),
  y: Sp(5, 14),
};
ga.translateX = ga.x;
ga.translateY = ga.y;
const Ei = new Set();
let dc = !1,
  mc = !1;
function Eg() {
  if (mc) {
    const i = Array.from(Ei).filter((u) => u.needsMeasurement),
      a = new Set(i.map((u) => u.element)),
      s = new Map();
    a.forEach((u) => {
      const c = Gb(u);
      c.length && (s.set(u, c), u.render());
    }),
      i.forEach((u) => u.measureInitialState()),
      a.forEach((u) => {
        u.render();
        const c = s.get(u);
        c &&
          c.forEach(([h, f]) => {
            var m;
            (m = u.getValue(h)) === null || m === void 0 || m.set(f);
          });
      }),
      i.forEach((u) => u.measureEndState()),
      i.forEach((u) => {
        u.suspendedScrollY !== void 0 && window.scrollTo(0, u.suspendedScrollY);
      });
  }
  (mc = !1), (dc = !1), Ei.forEach((i) => i.complete()), Ei.clear();
}
function Rg() {
  Ei.forEach((i) => {
    i.readKeyframes(), i.needsMeasurement && (mc = !0);
  });
}
function Xb() {
  Rg(), Eg();
}
class sf {
  constructor(a, s, u, c, h, f = !1) {
    (this.isComplete = !1),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.isScheduled = !1),
      (this.unresolvedKeyframes = [...a]),
      (this.onComplete = s),
      (this.name = u),
      (this.motionValue = c),
      (this.element = h),
      (this.isAsync = f);
  }
  scheduleResolve() {
    (this.isScheduled = !0),
      this.isAsync
        ? (Ei.add(this),
          dc || ((dc = !0), Dt.read(Rg), Dt.resolveKeyframes(Eg)))
        : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: a,
      name: s,
      element: u,
      motionValue: c,
    } = this;
    for (let h = 0; h < a.length; h++)
      if (a[h] === null)
        if (h === 0) {
          const f = c == null ? void 0 : c.get(),
            m = a[a.length - 1];
          if (f !== void 0) a[0] = f;
          else if (u && s) {
            const y = u.readValue(s, m);
            y != null && (a[0] = y);
          }
          a[0] === void 0 && (a[0] = m), c && f === void 0 && c.set(a[0]);
        } else a[h] = a[h - 1];
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete() {
    (this.isComplete = !0),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
      Ei.delete(this);
  }
  cancel() {
    this.isComplete || ((this.isScheduled = !1), Ei.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
}
const Dg = (i) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(i),
  Kb = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function Qb(i) {
  const a = Kb.exec(i);
  if (!a) return [,];
  const [, s, u, c] = a;
  return [`--${s ?? u}`, c];
}
function xg(i, a, s = 1) {
  const [u, c] = Qb(i);
  if (!u) return;
  const h = window.getComputedStyle(a).getPropertyValue(u);
  if (h) {
    const f = h.trim();
    return Dg(f) ? parseFloat(f) : f;
  }
  return jc(c) ? xg(c, a, s + 1) : c;
}
const Og = (i) => (a) => a.test(i),
  Zb = { test: (i) => i === "auto", parse: (i) => i },
  Mg = [Sa, tt, tn, Pn, H1, j1, Zb],
  bp = (i) => Mg.find(Og(i));
class Cg extends sf {
  constructor(a, s, u, c, h) {
    super(a, s, u, c, h, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: a, element: s, name: u } = this;
    if (!s || !s.current) return;
    super.readKeyframes();
    for (let y = 0; y < a.length; y++) {
      let p = a[y];
      if (typeof p == "string" && ((p = p.trim()), jc(p))) {
        const g = xg(p, s.current);
        g !== void 0 && (a[y] = g),
          y === a.length - 1 && (this.finalKeyframe = p);
      }
    }
    if ((this.resolveNoneKeyframes(), !ng.has(u) || a.length !== 2)) return;
    const [c, h] = a,
      f = bp(c),
      m = bp(h);
    if (f !== m)
      if (gp(f) && gp(m))
        for (let y = 0; y < a.length; y++) {
          const p = a[y];
          typeof p == "string" && (a[y] = parseFloat(p));
        }
      else this.needsMeasurement = !0;
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: a, name: s } = this,
      u = [];
    for (let c = 0; c < a.length; c++) Ab(a[c]) && u.push(c);
    u.length && Hb(a, u, s);
  }
  measureInitialState() {
    const { element: a, unresolvedKeyframes: s, name: u } = this;
    if (!a || !a.current) return;
    u === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = ga[u](
        a.measureViewportBox(),
        window.getComputedStyle(a.current)
      )),
      (s[0] = this.measuredOrigin);
    const c = s[s.length - 1];
    c !== void 0 && a.getValue(u, c).jump(c, !1);
  }
  measureEndState() {
    var a;
    const { element: s, name: u, unresolvedKeyframes: c } = this;
    if (!s || !s.current) return;
    const h = s.getValue(u);
    h && h.jump(this.measuredOrigin, !1);
    const f = c.length - 1,
      m = c[f];
    (c[f] = ga[u](s.measureViewportBox(), window.getComputedStyle(s.current))),
      m !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = m),
      !((a = this.removedTransforms) === null || a === void 0) &&
        a.length &&
        this.removedTransforms.forEach(([y, p]) => {
          s.getValue(y).set(p);
        }),
      this.resolveNoneKeyframes();
  }
}
const Tp = (i, a) =>
  a === "zIndex"
    ? !1
    : !!(
        typeof i == "number" ||
        Array.isArray(i) ||
        (typeof i == "string" &&
          (kn.test(i) || i === "0") &&
          !i.startsWith("url("))
      );
function Pb(i) {
  const a = i[0];
  if (i.length === 1) return !0;
  for (let s = 0; s < i.length; s++) if (i[s] !== a) return !0;
}
function Fb(i, a, s, u) {
  const c = i[0];
  if (c === null) return !1;
  if (a === "display" || a === "visibility") return !0;
  const h = i[i.length - 1],
    f = Tp(c, a),
    m = Tp(h, a);
  return !f || !m ? !1 : Pb(i) || ((s === "spring" || $c(s)) && u);
}
const kb = (i) => i !== null;
function Eu(i, { repeat: a, repeatType: s = "loop" }, u) {
  const c = i.filter(kb),
    h = a && s !== "loop" && a % 2 === 1 ? 0 : c.length - 1;
  return !h || u === void 0 ? c[h] : u;
}
const Jb = 40;
class _g {
  constructor({
    autoplay: a = !0,
    delay: s = 0,
    type: u = "keyframes",
    repeat: c = 0,
    repeatDelay: h = 0,
    repeatType: f = "loop",
    ...m
  }) {
    (this.isStopped = !1),
      (this.hasAttemptedResolve = !1),
      (this.createdAt = en.now()),
      (this.options = {
        autoplay: a,
        delay: s,
        type: u,
        repeat: c,
        repeatDelay: h,
        repeatType: f,
        ...m,
      }),
      this.updateFinishedPromise();
  }
  calcStartTime() {
    return this.resolvedAt
      ? this.resolvedAt - this.createdAt > Jb
        ? this.resolvedAt
        : this.createdAt
      : this.createdAt;
  }
  get resolved() {
    return !this._resolved && !this.hasAttemptedResolve && Xb(), this._resolved;
  }
  onKeyframesResolved(a, s) {
    (this.resolvedAt = en.now()), (this.hasAttemptedResolve = !0);
    const {
      name: u,
      type: c,
      velocity: h,
      delay: f,
      onComplete: m,
      onUpdate: y,
      isGenerator: p,
    } = this.options;
    if (!p && !Fb(a, u, c, h))
      if (f) this.options.duration = 0;
      else {
        y && y(Eu(a, this.options, s)), m && m(), this.resolveFinishedPromise();
        return;
      }
    const g = this.initPlayback(a, s);
    g !== !1 &&
      ((this._resolved = { keyframes: a, finalKeyframe: s, ...g }),
      this.onPostResolved());
  }
  onPostResolved() {}
  then(a, s) {
    return this.currentFinishedPromise.then(a, s);
  }
  flatten() {
    (this.options.type = "keyframes"), (this.options.ease = "linear");
  }
  updateFinishedPromise() {
    this.currentFinishedPromise = new Promise((a) => {
      this.resolveFinishedPromise = a;
    });
  }
}
const pc = 2e4;
function wg(i) {
  let a = 0;
  const s = 50;
  let u = i.next(a);
  for (; !u.done && a < pc; ) (a += s), (u = i.next(a));
  return a >= pc ? 1 / 0 : a;
}
const Ct = (i, a, s) => i + (a - i) * s;
function Fo(i, a, s) {
  return (
    s < 0 && (s += 1),
    s > 1 && (s -= 1),
    s < 1 / 6
      ? i + (a - i) * 6 * s
      : s < 1 / 2
      ? a
      : s < 2 / 3
      ? i + (a - i) * (2 / 3 - s) * 6
      : i
  );
}
function Wb({ hue: i, saturation: a, lightness: s, alpha: u }) {
  (i /= 360), (a /= 100), (s /= 100);
  let c = 0,
    h = 0,
    f = 0;
  if (!a) c = h = f = s;
  else {
    const m = s < 0.5 ? s * (1 + a) : s + a - s * a,
      y = 2 * s - m;
    (c = Fo(y, m, i + 1 / 3)), (h = Fo(y, m, i)), (f = Fo(y, m, i - 1 / 3));
  }
  return {
    red: Math.round(c * 255),
    green: Math.round(h * 255),
    blue: Math.round(f * 255),
    alpha: u,
  };
}
function du(i, a) {
  return (s) => (s > 0 ? a : i);
}
const ko = (i, a, s) => {
    const u = i * i,
      c = s * (a * a - u) + u;
    return c < 0 ? 0 : Math.sqrt(c);
  },
  $b = [fc, Ti, ca],
  Ib = (i) => $b.find((a) => a.test(i));
function Ap(i) {
  const a = Ib(i);
  if (!a) return !1;
  let s = a.parse(i);
  return a === ca && (s = Wb(s)), s;
}
const Ep = (i, a) => {
    const s = Ap(i),
      u = Ap(a);
    if (!s || !u) return du(i, a);
    const c = { ...s };
    return (h) => (
      (c.red = ko(s.red, u.red, h)),
      (c.green = ko(s.green, u.green, h)),
      (c.blue = ko(s.blue, u.blue, h)),
      (c.alpha = Ct(s.alpha, u.alpha, h)),
      Ti.transform(c)
    );
  },
  tT = (i, a) => (s) => a(i(s)),
  jl = (...i) => i.reduce(tT),
  yc = new Set(["none", "hidden"]);
function eT(i, a) {
  return yc.has(i) ? (s) => (s <= 0 ? i : a) : (s) => (s >= 1 ? a : i);
}
function nT(i, a) {
  return (s) => Ct(i, a, s);
}
function uf(i) {
  return typeof i == "number"
    ? nT
    : typeof i == "string"
    ? jc(i)
      ? du
      : ne.test(i)
      ? Ep
      : lT
    : Array.isArray(i)
    ? Ug
    : typeof i == "object"
    ? ne.test(i)
      ? Ep
      : iT
    : du;
}
function Ug(i, a) {
  const s = [...i],
    u = s.length,
    c = i.map((h, f) => uf(h)(h, a[f]));
  return (h) => {
    for (let f = 0; f < u; f++) s[f] = c[f](h);
    return s;
  };
}
function iT(i, a) {
  const s = { ...i, ...a },
    u = {};
  for (const c in s)
    i[c] !== void 0 && a[c] !== void 0 && (u[c] = uf(i[c])(i[c], a[c]));
  return (c) => {
    for (const h in u) s[h] = u[h](c);
    return s;
  };
}
function aT(i, a) {
  var s;
  const u = [],
    c = { color: 0, var: 0, number: 0 };
  for (let h = 0; h < a.values.length; h++) {
    const f = a.types[h],
      m = i.indexes[f][c[f]],
      y = (s = i.values[m]) !== null && s !== void 0 ? s : 0;
    (u[h] = y), c[f]++;
  }
  return u;
}
const lT = (i, a) => {
  const s = kn.createTransformer(a),
    u = Vl(i),
    c = Vl(a);
  return u.indexes.var.length === c.indexes.var.length &&
    u.indexes.color.length === c.indexes.color.length &&
    u.indexes.number.length >= c.indexes.number.length
    ? (yc.has(i) && !c.values.length) || (yc.has(a) && !u.values.length)
      ? eT(i, a)
      : jl(Ug(aT(u, c), c.values), s)
    : du(i, a);
};
function Vg(i, a, s) {
  return typeof i == "number" && typeof a == "number" && typeof s == "number"
    ? Ct(i, a, s)
    : uf(i)(i, a);
}
const sT = 5;
function zg(i, a, s) {
  const u = Math.max(a - sT, 0);
  return ig(s - i(u), a - u);
}
const Vt = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: 0.3,
    visualDuration: 0.3,
    restSpeed: { granular: 0.01, default: 2 },
    restDelta: { granular: 0.005, default: 0.5 },
    minDuration: 0.01,
    maxDuration: 10,
    minDamping: 0.05,
    maxDamping: 1,
  },
  Rp = 0.001;
function uT({
  duration: i = Vt.duration,
  bounce: a = Vt.bounce,
  velocity: s = Vt.velocity,
  mass: u = Vt.mass,
}) {
  let c,
    h,
    f = 1 - a;
  (f = An(Vt.minDamping, Vt.maxDamping, f)),
    (i = An(Vt.minDuration, Vt.maxDuration, Tn(i))),
    f < 1
      ? ((c = (p) => {
          const g = p * f,
            S = g * i,
            T = g - s,
            M = gc(p, f),
            O = Math.exp(-S);
          return Rp - (T / M) * O;
        }),
        (h = (p) => {
          const S = p * f * i,
            T = S * s + s,
            M = Math.pow(f, 2) * Math.pow(p, 2) * i,
            O = Math.exp(-S),
            _ = gc(Math.pow(p, 2), f);
          return ((-c(p) + Rp > 0 ? -1 : 1) * ((T - M) * O)) / _;
        }))
      : ((c = (p) => {
          const g = Math.exp(-p * i),
            S = (p - s) * i + 1;
          return -0.001 + g * S;
        }),
        (h = (p) => {
          const g = Math.exp(-p * i),
            S = (s - p) * (i * i);
          return g * S;
        }));
  const m = 5 / i,
    y = oT(c, h, m);
  if (((i = bn(i)), isNaN(y)))
    return { stiffness: Vt.stiffness, damping: Vt.damping, duration: i };
  {
    const p = Math.pow(y, 2) * u;
    return { stiffness: p, damping: f * 2 * Math.sqrt(u * p), duration: i };
  }
}
const rT = 12;
function oT(i, a, s) {
  let u = s;
  for (let c = 1; c < rT; c++) u = u - i(u) / a(u);
  return u;
}
function gc(i, a) {
  return i * Math.sqrt(1 - a * a);
}
const cT = ["duration", "bounce"],
  fT = ["stiffness", "damping", "mass"];
function Dp(i, a) {
  return a.some((s) => i[s] !== void 0);
}
function hT(i) {
  let a = {
    velocity: Vt.velocity,
    stiffness: Vt.stiffness,
    damping: Vt.damping,
    mass: Vt.mass,
    isResolvedFromDuration: !1,
    ...i,
  };
  if (!Dp(i, fT) && Dp(i, cT))
    if (i.visualDuration) {
      const s = i.visualDuration,
        u = (2 * Math.PI) / (s * 1.2),
        c = u * u,
        h = 2 * An(0.05, 1, 1 - (i.bounce || 0)) * Math.sqrt(c);
      a = { ...a, mass: Vt.mass, stiffness: c, damping: h };
    } else {
      const s = uT(i);
      (a = { ...a, ...s, mass: Vt.mass }), (a.isResolvedFromDuration = !0);
    }
  return a;
}
function Bg(i = Vt.visualDuration, a = Vt.bounce) {
  const s =
    typeof i != "object"
      ? { visualDuration: i, keyframes: [0, 1], bounce: a }
      : i;
  let { restSpeed: u, restDelta: c } = s;
  const h = s.keyframes[0],
    f = s.keyframes[s.keyframes.length - 1],
    m = { done: !1, value: h },
    {
      stiffness: y,
      damping: p,
      mass: g,
      duration: S,
      velocity: T,
      isResolvedFromDuration: M,
    } = hT({ ...s, velocity: -Tn(s.velocity || 0) }),
    O = T || 0,
    _ = p / (2 * Math.sqrt(y * g)),
    U = f - h,
    N = Tn(Math.sqrt(y / g)),
    q = Math.abs(U) < 5;
  u || (u = q ? Vt.restSpeed.granular : Vt.restSpeed.default),
    c || (c = q ? Vt.restDelta.granular : Vt.restDelta.default);
  let Y;
  if (_ < 1) {
    const j = gc(N, _);
    Y = ($) => {
      const dt = Math.exp(-_ * N * $);
      return (
        f - dt * (((O + _ * N * U) / j) * Math.sin(j * $) + U * Math.cos(j * $))
      );
    };
  } else if (_ === 1) Y = (j) => f - Math.exp(-N * j) * (U + (O + N * U) * j);
  else {
    const j = N * Math.sqrt(_ * _ - 1);
    Y = ($) => {
      const dt = Math.exp(-_ * N * $),
        J = Math.min(j * $, 300);
      return (
        f - (dt * ((O + _ * N * U) * Math.sinh(J) + j * U * Math.cosh(J))) / j
      );
    };
  }
  const nt = {
    calculatedDuration: (M && S) || null,
    next: (j) => {
      const $ = Y(j);
      if (M) m.done = j >= S;
      else {
        let dt = 0;
        _ < 1 && (dt = j === 0 ? bn(O) : zg(Y, j, $));
        const J = Math.abs(dt) <= u,
          X = Math.abs(f - $) <= c;
        m.done = J && X;
      }
      return (m.value = m.done ? f : $), m;
    },
    toString: () => {
      const j = Math.min(wg(nt), pc),
        $ = lg((dt) => nt.next(j * dt).value, j, 30);
      return j + "ms " + $;
    },
  };
  return nt;
}
function xp({
  keyframes: i,
  velocity: a = 0,
  power: s = 0.8,
  timeConstant: u = 325,
  bounceDamping: c = 10,
  bounceStiffness: h = 500,
  modifyTarget: f,
  min: m,
  max: y,
  restDelta: p = 0.5,
  restSpeed: g,
}) {
  const S = i[0],
    T = { done: !1, value: S },
    M = (J) => (m !== void 0 && J < m) || (y !== void 0 && J > y),
    O = (J) =>
      m === void 0
        ? y
        : y === void 0 || Math.abs(m - J) < Math.abs(y - J)
        ? m
        : y;
  let _ = s * a;
  const U = S + _,
    N = f === void 0 ? U : f(U);
  N !== U && (_ = N - S);
  const q = (J) => -_ * Math.exp(-J / u),
    Y = (J) => N + q(J),
    nt = (J) => {
      const X = q(J),
        at = Y(J);
      (T.done = Math.abs(X) <= p), (T.value = T.done ? N : at);
    };
  let j, $;
  const dt = (J) => {
    M(T.value) &&
      ((j = J),
      ($ = Bg({
        keyframes: [T.value, O(T.value)],
        velocity: zg(Y, J, T.value),
        damping: c,
        stiffness: h,
        restDelta: p,
        restSpeed: g,
      })));
  };
  return (
    dt(0),
    {
      calculatedDuration: null,
      next: (J) => {
        let X = !1;
        return (
          !$ && j === void 0 && ((X = !0), nt(J), dt(J)),
          j !== void 0 && J >= j ? $.next(J - j) : (!X && nt(J), T)
        );
      },
    }
  );
}
const dT = Ll(0.42, 0, 1, 1),
  mT = Ll(0, 0, 0.58, 1),
  Ng = Ll(0.42, 0, 0.58, 1),
  pT = (i) => Array.isArray(i) && typeof i[0] != "number",
  yT = {
    linear: Te,
    easeIn: dT,
    easeInOut: Ng,
    easeOut: mT,
    circIn: ef,
    circInOut: pg,
    circOut: mg,
    backIn: tf,
    backInOut: hg,
    backOut: fg,
    anticipate: dg,
  },
  Op = (i) => {
    if (Ic(i)) {
      Ly(i.length === 4);
      const [a, s, u, c] = i;
      return Ll(a, s, u, c);
    } else if (typeof i == "string") return yT[i];
    return i;
  };
function gT(i, a, s) {
  const u = [],
    c = s || Vg,
    h = i.length - 1;
  for (let f = 0; f < h; f++) {
    let m = c(i[f], i[f + 1]);
    if (a) {
      const y = Array.isArray(a) ? a[f] || Te : a;
      m = jl(y, m);
    }
    u.push(m);
  }
  return u;
}
function vT(i, a, { clamp: s = !0, ease: u, mixer: c } = {}) {
  const h = i.length;
  if ((Ly(h === a.length), h === 1)) return () => a[0];
  if (h === 2 && a[0] === a[1]) return () => a[1];
  const f = i[0] === i[1];
  i[0] > i[h - 1] && ((i = [...i].reverse()), (a = [...a].reverse()));
  const m = gT(a, u, c),
    y = m.length,
    p = (g) => {
      if (f && g < i[0]) return a[0];
      let S = 0;
      if (y > 1) for (; S < i.length - 2 && !(g < i[S + 1]); S++);
      const T = ya(i[S], i[S + 1], g);
      return m[S](T);
    };
  return s ? (g) => p(An(i[0], i[h - 1], g)) : p;
}
function ST(i, a) {
  const s = i[i.length - 1];
  for (let u = 1; u <= a; u++) {
    const c = ya(0, a, u);
    i.push(Ct(s, 1, c));
  }
}
function bT(i) {
  const a = [0];
  return ST(a, i.length - 1), a;
}
function TT(i, a) {
  return i.map((s) => s * a);
}
function AT(i, a) {
  return i.map(() => a || Ng).splice(0, i.length - 1);
}
function mu({
  duration: i = 300,
  keyframes: a,
  times: s,
  ease: u = "easeInOut",
}) {
  const c = pT(u) ? u.map(Op) : Op(u),
    h = { done: !1, value: a[0] },
    f = TT(s && s.length === a.length ? s : bT(a), i),
    m = vT(f, a, { ease: Array.isArray(c) ? c : AT(a, c) });
  return {
    calculatedDuration: i,
    next: (y) => ((h.value = m(y)), (h.done = y >= i), h),
  };
}
const ET = (i) => {
    const a = ({ timestamp: s }) => i(s);
    return {
      start: () => Dt.update(a, !0),
      stop: () => Fn(a),
      now: () => ($t.isProcessing ? $t.timestamp : en.now()),
    };
  },
  RT = { decay: xp, inertia: xp, tween: mu, keyframes: mu, spring: Bg },
  DT = (i) => i / 100;
class rf extends _g {
  constructor(a) {
    super(a),
      (this.holdTime = null),
      (this.cancelTime = null),
      (this.currentTime = 0),
      (this.playbackSpeed = 1),
      (this.pendingPlayState = "running"),
      (this.startTime = null),
      (this.state = "idle"),
      (this.stop = () => {
        if (
          (this.resolver.cancel(), (this.isStopped = !0), this.state === "idle")
        )
          return;
        this.teardown();
        const { onStop: y } = this.options;
        y && y();
      });
    const { name: s, motionValue: u, element: c, keyframes: h } = this.options,
      f = (c == null ? void 0 : c.KeyframeResolver) || sf,
      m = (y, p) => this.onKeyframesResolved(y, p);
    (this.resolver = new f(h, m, s, u, c)), this.resolver.scheduleResolve();
  }
  flatten() {
    super.flatten(),
      this._resolved &&
        Object.assign(
          this._resolved,
          this.initPlayback(this._resolved.keyframes)
        );
  }
  initPlayback(a) {
    const {
        type: s = "keyframes",
        repeat: u = 0,
        repeatDelay: c = 0,
        repeatType: h,
        velocity: f = 0,
      } = this.options,
      m = $c(s) ? s : RT[s] || mu;
    let y, p;
    m !== mu &&
      typeof a[0] != "number" &&
      ((y = jl(DT, Vg(a[0], a[1]))), (a = [0, 100]));
    const g = m({ ...this.options, keyframes: a });
    h === "mirror" &&
      (p = m({ ...this.options, keyframes: [...a].reverse(), velocity: -f })),
      g.calculatedDuration === null && (g.calculatedDuration = wg(g));
    const { calculatedDuration: S } = g,
      T = S + c,
      M = T * (u + 1) - c;
    return {
      generator: g,
      mirroredGenerator: p,
      mapPercentToKeyframes: y,
      calculatedDuration: S,
      resolvedDuration: T,
      totalDuration: M,
    };
  }
  onPostResolved() {
    const { autoplay: a = !0 } = this.options;
    this.play(),
      this.pendingPlayState === "paused" || !a
        ? this.pause()
        : (this.state = this.pendingPlayState);
  }
  tick(a, s = !1) {
    const { resolved: u } = this;
    if (!u) {
      const { keyframes: J } = this.options;
      return { done: !0, value: J[J.length - 1] };
    }
    const {
      finalKeyframe: c,
      generator: h,
      mirroredGenerator: f,
      mapPercentToKeyframes: m,
      keyframes: y,
      calculatedDuration: p,
      totalDuration: g,
      resolvedDuration: S,
    } = u;
    if (this.startTime === null) return h.next(0);
    const {
      delay: T,
      repeat: M,
      repeatType: O,
      repeatDelay: _,
      onUpdate: U,
    } = this.options;
    this.speed > 0
      ? (this.startTime = Math.min(this.startTime, a))
      : this.speed < 0 &&
        (this.startTime = Math.min(a - g / this.speed, this.startTime)),
      s
        ? (this.currentTime = a)
        : this.holdTime !== null
        ? (this.currentTime = this.holdTime)
        : (this.currentTime = Math.round(a - this.startTime) * this.speed);
    const N = this.currentTime - T * (this.speed >= 0 ? 1 : -1),
      q = this.speed >= 0 ? N < 0 : N > g;
    (this.currentTime = Math.max(N, 0)),
      this.state === "finished" &&
        this.holdTime === null &&
        (this.currentTime = g);
    let Y = this.currentTime,
      nt = h;
    if (M) {
      const J = Math.min(this.currentTime, g) / S;
      let X = Math.floor(J),
        at = J % 1;
      !at && J >= 1 && (at = 1),
        at === 1 && X--,
        (X = Math.min(X, M + 1)),
        !!(X % 2) &&
          (O === "reverse"
            ? ((at = 1 - at), _ && (at -= _ / S))
            : O === "mirror" && (nt = f)),
        (Y = An(0, 1, at) * S);
    }
    const j = q ? { done: !1, value: y[0] } : nt.next(Y);
    m && (j.value = m(j.value));
    let { done: $ } = j;
    !q &&
      p !== null &&
      ($ = this.speed >= 0 ? this.currentTime >= g : this.currentTime <= 0);
    const dt =
      this.holdTime === null &&
      (this.state === "finished" || (this.state === "running" && $));
    return (
      dt && c !== void 0 && (j.value = Eu(y, this.options, c)),
      U && U(j.value),
      dt && this.finish(),
      j
    );
  }
  get duration() {
    const { resolved: a } = this;
    return a ? Tn(a.calculatedDuration) : 0;
  }
  get time() {
    return Tn(this.currentTime);
  }
  set time(a) {
    (a = bn(a)),
      (this.currentTime = a),
      this.holdTime !== null || this.speed === 0
        ? (this.holdTime = a)
        : this.driver && (this.startTime = this.driver.now() - a / this.speed);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(a) {
    const s = this.playbackSpeed !== a;
    (this.playbackSpeed = a), s && (this.time = Tn(this.currentTime));
  }
  play() {
    if (
      (this.resolver.isScheduled || this.resolver.resume(), !this._resolved)
    ) {
      this.pendingPlayState = "running";
      return;
    }
    if (this.isStopped) return;
    const { driver: a = ET, onPlay: s, startTime: u } = this.options;
    this.driver || (this.driver = a((h) => this.tick(h))), s && s();
    const c = this.driver.now();
    this.holdTime !== null
      ? (this.startTime = c - this.holdTime)
      : this.startTime
      ? this.state === "finished" && (this.startTime = c)
      : (this.startTime = u ?? this.calcStartTime()),
      this.state === "finished" && this.updateFinishedPromise(),
      (this.cancelTime = this.startTime),
      (this.holdTime = null),
      (this.state = "running"),
      this.driver.start();
  }
  pause() {
    var a;
    if (!this._resolved) {
      this.pendingPlayState = "paused";
      return;
    }
    (this.state = "paused"),
      (this.holdTime = (a = this.currentTime) !== null && a !== void 0 ? a : 0);
  }
  complete() {
    this.state !== "running" && this.play(),
      (this.pendingPlayState = this.state = "finished"),
      (this.holdTime = null);
  }
  finish() {
    this.teardown(), (this.state = "finished");
    const { onComplete: a } = this.options;
    a && a();
  }
  cancel() {
    this.cancelTime !== null && this.tick(this.cancelTime),
      this.teardown(),
      this.updateFinishedPromise();
  }
  teardown() {
    (this.state = "idle"),
      this.stopDriver(),
      this.resolveFinishedPromise(),
      this.updateFinishedPromise(),
      (this.startTime = this.cancelTime = null),
      this.resolver.cancel();
  }
  stopDriver() {
    this.driver && (this.driver.stop(), (this.driver = void 0));
  }
  sample(a) {
    return (this.startTime = 0), this.tick(a, !0);
  }
}
const xT = new Set(["opacity", "clipPath", "filter", "transform"]);
function OT(
  i,
  a,
  s,
  {
    delay: u = 0,
    duration: c = 300,
    repeat: h = 0,
    repeatType: f = "loop",
    ease: m = "easeInOut",
    times: y,
  } = {}
) {
  const p = { [a]: s };
  y && (p.offset = y);
  const g = ug(m, c);
  return (
    Array.isArray(g) && (p.easing = g),
    i.animate(p, {
      delay: u,
      duration: c,
      easing: Array.isArray(g) ? "linear" : g,
      fill: "both",
      iterations: h + 1,
      direction: f === "reverse" ? "alternate" : "normal",
    })
  );
}
const MT = Wc(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
  pu = 10,
  CT = 2e4;
function _T(i) {
  return $c(i.type) || i.type === "spring" || !sg(i.ease);
}
function wT(i, a) {
  const s = new rf({
    ...a,
    keyframes: i,
    repeat: 0,
    delay: 0,
    isGenerator: !0,
  });
  let u = { done: !1, value: i[0] };
  const c = [];
  let h = 0;
  for (; !u.done && h < CT; ) (u = s.sample(h)), c.push(u.value), (h += pu);
  return { times: void 0, keyframes: c, duration: h - pu, ease: "linear" };
}
const Lg = { anticipate: dg, backInOut: hg, circInOut: pg };
function UT(i) {
  return i in Lg;
}
class Mp extends _g {
  constructor(a) {
    super(a);
    const { name: s, motionValue: u, element: c, keyframes: h } = this.options;
    (this.resolver = new Cg(
      h,
      (f, m) => this.onKeyframesResolved(f, m),
      s,
      u,
      c
    )),
      this.resolver.scheduleResolve();
  }
  initPlayback(a, s) {
    let {
      duration: u = 300,
      times: c,
      ease: h,
      type: f,
      motionValue: m,
      name: y,
      startTime: p,
    } = this.options;
    if (!m.owner || !m.owner.current) return !1;
    if (
      (typeof h == "string" && hu() && UT(h) && (h = Lg[h]), _T(this.options))
    ) {
      const {
          onComplete: S,
          onUpdate: T,
          motionValue: M,
          element: O,
          ..._
        } = this.options,
        U = wT(a, _);
      (a = U.keyframes),
        a.length === 1 && (a[1] = a[0]),
        (u = U.duration),
        (c = U.times),
        (h = U.ease),
        (f = "keyframes");
    }
    const g = OT(m.owner.current, y, a, {
      ...this.options,
      duration: u,
      times: c,
      ease: h,
    });
    return (
      (g.startTime = p ?? this.calcStartTime()),
      this.pendingTimeline
        ? (pp(g, this.pendingTimeline), (this.pendingTimeline = void 0))
        : (g.onfinish = () => {
            const { onComplete: S } = this.options;
            m.set(Eu(a, this.options, s)),
              S && S(),
              this.cancel(),
              this.resolveFinishedPromise();
          }),
      { animation: g, duration: u, times: c, type: f, ease: h, keyframes: a }
    );
  }
  get duration() {
    const { resolved: a } = this;
    if (!a) return 0;
    const { duration: s } = a;
    return Tn(s);
  }
  get time() {
    const { resolved: a } = this;
    if (!a) return 0;
    const { animation: s } = a;
    return Tn(s.currentTime || 0);
  }
  set time(a) {
    const { resolved: s } = this;
    if (!s) return;
    const { animation: u } = s;
    u.currentTime = bn(a);
  }
  get speed() {
    const { resolved: a } = this;
    if (!a) return 1;
    const { animation: s } = a;
    return s.playbackRate;
  }
  set speed(a) {
    const { resolved: s } = this;
    if (!s) return;
    const { animation: u } = s;
    u.playbackRate = a;
  }
  get state() {
    const { resolved: a } = this;
    if (!a) return "idle";
    const { animation: s } = a;
    return s.playState;
  }
  get startTime() {
    const { resolved: a } = this;
    if (!a) return null;
    const { animation: s } = a;
    return s.startTime;
  }
  attachTimeline(a) {
    if (!this._resolved) this.pendingTimeline = a;
    else {
      const { resolved: s } = this;
      if (!s) return Te;
      const { animation: u } = s;
      pp(u, a);
    }
    return Te;
  }
  play() {
    if (this.isStopped) return;
    const { resolved: a } = this;
    if (!a) return;
    const { animation: s } = a;
    s.playState === "finished" && this.updateFinishedPromise(), s.play();
  }
  pause() {
    const { resolved: a } = this;
    if (!a) return;
    const { animation: s } = a;
    s.pause();
  }
  stop() {
    if ((this.resolver.cancel(), (this.isStopped = !0), this.state === "idle"))
      return;
    this.resolveFinishedPromise(), this.updateFinishedPromise();
    const { resolved: a } = this;
    if (!a) return;
    const {
      animation: s,
      keyframes: u,
      duration: c,
      type: h,
      ease: f,
      times: m,
    } = a;
    if (s.playState === "idle" || s.playState === "finished") return;
    if (this.time) {
      const {
          motionValue: p,
          onUpdate: g,
          onComplete: S,
          element: T,
          ...M
        } = this.options,
        O = new rf({
          ...M,
          keyframes: u,
          duration: c,
          type: h,
          ease: f,
          times: m,
          isGenerator: !0,
        }),
        _ = bn(this.time);
      p.setWithVelocity(O.sample(_ - pu).value, O.sample(_).value, pu);
    }
    const { onStop: y } = this.options;
    y && y(), this.cancel();
  }
  complete() {
    const { resolved: a } = this;
    a && a.animation.finish();
  }
  cancel() {
    const { resolved: a } = this;
    a && a.animation.cancel();
  }
  static supports(a) {
    const {
      motionValue: s,
      name: u,
      repeatDelay: c,
      repeatType: h,
      damping: f,
      type: m,
    } = a;
    if (!s || !s.owner || !(s.owner.current instanceof HTMLElement)) return !1;
    const { onUpdate: y, transformTemplate: p } = s.owner.getProps();
    return (
      MT() &&
      u &&
      xT.has(u) &&
      !y &&
      !p &&
      !c &&
      h !== "mirror" &&
      f !== 0 &&
      m !== "inertia"
    );
  }
}
const VT = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  zT = (i) => ({
    type: "spring",
    stiffness: 550,
    damping: i === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  BT = { type: "keyframes", duration: 0.8 },
  NT = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  LT = (i, { keyframes: a }) =>
    a.length > 2
      ? BT
      : xi.has(i)
      ? i.startsWith("scale")
        ? zT(a[1])
        : VT
      : NT;
function jT({
  when: i,
  delay: a,
  delayChildren: s,
  staggerChildren: u,
  staggerDirection: c,
  repeat: h,
  repeatType: f,
  repeatDelay: m,
  from: y,
  elapsed: p,
  ...g
}) {
  return !!Object.keys(g).length;
}
const of =
  (i, a, s, u = {}, c, h) =>
  (f) => {
    const m = Pc(u, i) || {},
      y = m.delay || u.delay || 0;
    let { elapsed: p = 0 } = u;
    p = p - bn(y);
    let g = {
      keyframes: Array.isArray(s) ? s : [null, s],
      ease: "easeOut",
      velocity: a.getVelocity(),
      ...m,
      delay: -p,
      onUpdate: (T) => {
        a.set(T), m.onUpdate && m.onUpdate(T);
      },
      onComplete: () => {
        f(), m.onComplete && m.onComplete();
      },
      name: i,
      motionValue: a,
      element: h ? void 0 : c,
    };
    jT(m) || (g = { ...g, ...LT(i, g) }),
      g.duration && (g.duration = bn(g.duration)),
      g.repeatDelay && (g.repeatDelay = bn(g.repeatDelay)),
      g.from !== void 0 && (g.keyframes[0] = g.from);
    let S = !1;
    if (
      ((g.type === !1 || (g.duration === 0 && !g.repeatDelay)) &&
        ((g.duration = 0), g.delay === 0 && (S = !0)),
      S && !h && a.get() !== void 0)
    ) {
      const T = Eu(g.keyframes, m);
      if (T !== void 0)
        return (
          Dt.update(() => {
            g.onUpdate(T), g.onComplete();
          }),
          new yb([])
        );
    }
    return !h && Mp.supports(g) ? new Mp(g) : new rf(g);
  };
function HT({ protectedKeys: i, needsAnimating: a }, s) {
  const u = i.hasOwnProperty(s) && a[s] !== !0;
  return (a[s] = !1), u;
}
function jg(i, a, { delay: s = 0, transitionOverride: u, type: c } = {}) {
  var h;
  let { transition: f = i.getDefaultTransition(), transitionEnd: m, ...y } = a;
  u && (f = u);
  const p = [],
    g = c && i.animationState && i.animationState.getState()[c];
  for (const S in y) {
    const T = i.getValue(
        S,
        (h = i.latestValues[S]) !== null && h !== void 0 ? h : null
      ),
      M = y[S];
    if (M === void 0 || (g && HT(g, S))) continue;
    const O = { delay: s, ...Pc(f || {}, S) };
    let _ = !1;
    if (window.MotionHandoffAnimation) {
      const N = ag(i);
      if (N) {
        const q = window.MotionHandoffAnimation(N, S, Dt);
        q !== null && ((O.startTime = q), (_ = !0));
      }
    }
    oc(i, S),
      T.start(
        of(S, T, M, i.shouldReduceMotion && ng.has(S) ? { type: !1 } : O, i, _)
      );
    const U = T.animation;
    U && p.push(U);
  }
  return (
    m &&
      Promise.all(p).then(() => {
        Dt.update(() => {
          m && hb(i, m);
        });
      }),
    p
  );
}
function vc(i, a, s = {}) {
  var u;
  const c = wl(
    i,
    a,
    s.type === "exit"
      ? (u = i.presenceContext) === null || u === void 0
        ? void 0
        : u.custom
      : void 0
  );
  let { transition: h = i.getDefaultTransition() || {} } = c || {};
  s.transitionOverride && (h = s.transitionOverride);
  const f = c ? () => Promise.all(jg(i, c, s)) : () => Promise.resolve(),
    m =
      i.variantChildren && i.variantChildren.size
        ? (p = 0) => {
            const {
              delayChildren: g = 0,
              staggerChildren: S,
              staggerDirection: T,
            } = h;
            return qT(i, a, g + p, S, T, s);
          }
        : () => Promise.resolve(),
    { when: y } = h;
  if (y) {
    const [p, g] = y === "beforeChildren" ? [f, m] : [m, f];
    return p().then(() => g());
  } else return Promise.all([f(), m(s.delay)]);
}
function qT(i, a, s = 0, u = 0, c = 1, h) {
  const f = [],
    m = (i.variantChildren.size - 1) * u,
    y = c === 1 ? (p = 0) => p * u : (p = 0) => m - p * u;
  return (
    Array.from(i.variantChildren)
      .sort(YT)
      .forEach((p, g) => {
        p.notify("AnimationStart", a),
          f.push(
            vc(p, a, { ...h, delay: s + y(g) }).then(() =>
              p.notify("AnimationComplete", a)
            )
          );
      }),
    Promise.all(f)
  );
}
function YT(i, a) {
  return i.sortNodePosition(a);
}
function GT(i, a, s = {}) {
  i.notify("AnimationStart", a);
  let u;
  if (Array.isArray(a)) {
    const c = a.map((h) => vc(i, h, s));
    u = Promise.all(c);
  } else if (typeof a == "string") u = vc(i, a, s);
  else {
    const c = typeof a == "function" ? wl(i, a, s.custom) : a;
    u = Promise.all(jg(i, c, s));
  }
  return u.then(() => {
    i.notify("AnimationComplete", a);
  });
}
function Hg(i, a) {
  if (!Array.isArray(a)) return !1;
  const s = a.length;
  if (s !== i.length) return !1;
  for (let u = 0; u < s; u++) if (a[u] !== i[u]) return !1;
  return !0;
}
const XT = zc.length;
function qg(i) {
  if (!i) return;
  if (!i.isControllingVariants) {
    const s = i.parent ? qg(i.parent) || {} : {};
    return i.props.initial !== void 0 && (s.initial = i.props.initial), s;
  }
  const a = {};
  for (let s = 0; s < XT; s++) {
    const u = zc[s],
      c = i.props[u];
    (Ml(c) || c === !1) && (a[u] = c);
  }
  return a;
}
const KT = [...Vc].reverse(),
  QT = Vc.length;
function ZT(i) {
  return (a) =>
    Promise.all(a.map(({ animation: s, options: u }) => GT(i, s, u)));
}
function PT(i) {
  let a = ZT(i),
    s = Cp(),
    u = !0;
  const c = (y) => (p, g) => {
    var S;
    const T = wl(
      i,
      g,
      y === "exit"
        ? (S = i.presenceContext) === null || S === void 0
          ? void 0
          : S.custom
        : void 0
    );
    if (T) {
      const { transition: M, transitionEnd: O, ..._ } = T;
      p = { ...p, ..._, ...O };
    }
    return p;
  };
  function h(y) {
    a = y(i);
  }
  function f(y) {
    const { props: p } = i,
      g = qg(i.parent) || {},
      S = [],
      T = new Set();
    let M = {},
      O = 1 / 0;
    for (let U = 0; U < QT; U++) {
      const N = KT[U],
        q = s[N],
        Y = p[N] !== void 0 ? p[N] : g[N],
        nt = Ml(Y),
        j = N === y ? q.isActive : null;
      j === !1 && (O = U);
      let $ = Y === g[N] && Y !== p[N] && nt;
      if (
        ($ && u && i.manuallyAnimateOnMount && ($ = !1),
        (q.protectedKeys = { ...M }),
        (!q.isActive && j === null) ||
          (!Y && !q.prevProp) ||
          Tu(Y) ||
          typeof Y == "boolean")
      )
        continue;
      const dt = FT(q.prevProp, Y);
      let J = dt || (N === y && q.isActive && !$ && nt) || (U > O && nt),
        X = !1;
      const at = Array.isArray(Y) ? Y : [Y];
      let Gt = at.reduce(c(N), {});
      j === !1 && (Gt = {});
      const { prevResolvedValues: Ee = {} } = q,
        Re = { ...Ee, ...Gt },
        De = (P) => {
          (J = !0),
            T.has(P) && ((X = !0), T.delete(P)),
            (q.needsAnimating[P] = !0);
          const F = i.getValue(P);
          F && (F.liveStyle = !1);
        };
      for (const P in Re) {
        const F = Gt[P],
          vt = Ee[P];
        if (M.hasOwnProperty(P)) continue;
        let A = !1;
        rc(F) && rc(vt) ? (A = !Hg(F, vt)) : (A = F !== vt),
          A
            ? F != null
              ? De(P)
              : T.add(P)
            : F !== void 0 && T.has(P)
            ? De(P)
            : (q.protectedKeys[P] = !0);
      }
      (q.prevProp = Y),
        (q.prevResolvedValues = Gt),
        q.isActive && (M = { ...M, ...Gt }),
        u && i.blockInitialAnimation && (J = !1),
        J &&
          (!($ && dt) || X) &&
          S.push(...at.map((P) => ({ animation: P, options: { type: N } })));
    }
    if (T.size) {
      const U = {};
      if (typeof p.initial != "boolean") {
        const N = wl(i, Array.isArray(p.initial) ? p.initial[0] : p.initial);
        N && N.transition && (U.transition = N.transition);
      }
      T.forEach((N) => {
        const q = i.getBaseTarget(N),
          Y = i.getValue(N);
        Y && (Y.liveStyle = !0), (U[N] = q ?? null);
      }),
        S.push({ animation: U });
    }
    let _ = !!S.length;
    return (
      u &&
        (p.initial === !1 || p.initial === p.animate) &&
        !i.manuallyAnimateOnMount &&
        (_ = !1),
      (u = !1),
      _ ? a(S) : Promise.resolve()
    );
  }
  function m(y, p) {
    var g;
    if (s[y].isActive === p) return Promise.resolve();
    (g = i.variantChildren) === null ||
      g === void 0 ||
      g.forEach((T) => {
        var M;
        return (M = T.animationState) === null || M === void 0
          ? void 0
          : M.setActive(y, p);
      }),
      (s[y].isActive = p);
    const S = f(y);
    for (const T in s) s[T].protectedKeys = {};
    return S;
  }
  return {
    animateChanges: f,
    setActive: m,
    setAnimateFunction: h,
    getState: () => s,
    reset: () => {
      (s = Cp()), (u = !0);
    },
  };
}
function FT(i, a) {
  return typeof a == "string" ? a !== i : Array.isArray(a) ? !Hg(a, i) : !1;
}
function Si(i = !1) {
  return {
    isActive: i,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function Cp() {
  return {
    animate: Si(!0),
    whileInView: Si(),
    whileHover: Si(),
    whileTap: Si(),
    whileDrag: Si(),
    whileFocus: Si(),
    exit: Si(),
  };
}
class Jn {
  constructor(a) {
    (this.isMounted = !1), (this.node = a);
  }
  update() {}
}
class kT extends Jn {
  constructor(a) {
    super(a), a.animationState || (a.animationState = PT(a));
  }
  updateAnimationControlsSubscription() {
    const { animate: a } = this.node.getProps();
    Tu(a) && (this.unmountControls = a.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: a } = this.node.getProps(),
      { animate: s } = this.node.prevProps || {};
    a !== s && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var a;
    this.node.animationState.reset(),
      (a = this.unmountControls) === null || a === void 0 || a.call(this);
  }
}
let JT = 0;
class WT extends Jn {
  constructor() {
    super(...arguments), (this.id = JT++);
  }
  update() {
    if (!this.node.presenceContext) return;
    const { isPresent: a, onExitComplete: s } = this.node.presenceContext,
      { isPresent: u } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || a === u) return;
    const c = this.node.animationState.setActive("exit", !a);
    s &&
      !a &&
      c.then(() => {
        s(this.id);
      });
  }
  mount() {
    const { register: a, onExitComplete: s } = this.node.presenceContext || {};
    s && s(this.id), a && (this.unmount = a(this.id));
  }
  unmount() {}
}
const $T = { animation: { Feature: kT }, exit: { Feature: WT } },
  Ke = { x: !1, y: !1 };
function Yg() {
  return Ke.x || Ke.y;
}
function IT(i) {
  return i === "x" || i === "y"
    ? Ke[i]
      ? null
      : ((Ke[i] = !0),
        () => {
          Ke[i] = !1;
        })
    : Ke.x || Ke.y
    ? null
    : ((Ke.x = Ke.y = !0),
      () => {
        Ke.x = Ke.y = !1;
      });
}
function zl(i, a, s, u = { passive: !0 }) {
  return i.addEventListener(a, s, u), () => i.removeEventListener(a, s);
}
const cf = (i) =>
  i.pointerType === "mouse"
    ? typeof i.button != "number" || i.button <= 0
    : i.isPrimary !== !1;
function Hl(i) {
  return { point: { x: i.pageX, y: i.pageY } };
}
const tA = (i) => (a) => cf(a) && i(a, Hl(a));
function fa(i, a, s, u) {
  return zl(i, a, tA(s), u);
}
function Gg({ top: i, left: a, right: s, bottom: u }) {
  return { x: { min: a, max: s }, y: { min: i, max: u } };
}
function eA({ x: i, y: a }) {
  return { top: a.min, right: i.max, bottom: a.max, left: i.min };
}
function nA(i, a) {
  if (!a) return i;
  const s = a({ x: i.left, y: i.top }),
    u = a({ x: i.right, y: i.bottom });
  return { top: s.y, left: s.x, bottom: u.y, right: u.x };
}
const Xg = 1e-4,
  iA = 1 - Xg,
  aA = 1 + Xg,
  Kg = 0.01,
  lA = 0 - Kg,
  sA = 0 + Kg;
function oe(i) {
  return i.max - i.min;
}
function uA(i, a, s) {
  return Math.abs(i - a) <= s;
}
function _p(i, a, s, u = 0.5) {
  (i.origin = u),
    (i.originPoint = Ct(a.min, a.max, i.origin)),
    (i.scale = oe(s) / oe(a)),
    (i.translate = Ct(s.min, s.max, i.origin) - i.originPoint),
    ((i.scale >= iA && i.scale <= aA) || isNaN(i.scale)) && (i.scale = 1),
    ((i.translate >= lA && i.translate <= sA) || isNaN(i.translate)) &&
      (i.translate = 0);
}
function xl(i, a, s, u) {
  _p(i.x, a.x, s.x, u ? u.originX : void 0),
    _p(i.y, a.y, s.y, u ? u.originY : void 0);
}
function wp(i, a, s) {
  (i.min = s.min + a.min), (i.max = i.min + oe(a));
}
function rA(i, a, s) {
  wp(i.x, a.x, s.x), wp(i.y, a.y, s.y);
}
function Up(i, a, s) {
  (i.min = a.min - s.min), (i.max = i.min + oe(a));
}
function Ol(i, a, s) {
  Up(i.x, a.x, s.x), Up(i.y, a.y, s.y);
}
const Vp = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  ha = () => ({ x: Vp(), y: Vp() }),
  zp = () => ({ min: 0, max: 0 }),
  Nt = () => ({ x: zp(), y: zp() });
function He(i) {
  return [i("x"), i("y")];
}
function Jo(i) {
  return i === void 0 || i === 1;
}
function Sc({ scale: i, scaleX: a, scaleY: s }) {
  return !Jo(i) || !Jo(a) || !Jo(s);
}
function bi(i) {
  return (
    Sc(i) ||
    Qg(i) ||
    i.z ||
    i.rotate ||
    i.rotateX ||
    i.rotateY ||
    i.skewX ||
    i.skewY
  );
}
function Qg(i) {
  return Bp(i.x) || Bp(i.y);
}
function Bp(i) {
  return i && i !== "0%";
}
function yu(i, a, s) {
  const u = i - s,
    c = a * u;
  return s + c;
}
function Np(i, a, s, u, c) {
  return c !== void 0 && (i = yu(i, c, u)), yu(i, s, u) + a;
}
function bc(i, a = 0, s = 1, u, c) {
  (i.min = Np(i.min, a, s, u, c)), (i.max = Np(i.max, a, s, u, c));
}
function Zg(i, { x: a, y: s }) {
  bc(i.x, a.translate, a.scale, a.originPoint),
    bc(i.y, s.translate, s.scale, s.originPoint);
}
const Lp = 0.999999999999,
  jp = 1.0000000000001;
function oA(i, a, s, u = !1) {
  const c = s.length;
  if (!c) return;
  a.x = a.y = 1;
  let h, f;
  for (let m = 0; m < c; m++) {
    (h = s[m]), (f = h.projectionDelta);
    const { visualElement: y } = h.options;
    (y && y.props.style && y.props.style.display === "contents") ||
      (u &&
        h.options.layoutScroll &&
        h.scroll &&
        h !== h.root &&
        ma(i, { x: -h.scroll.offset.x, y: -h.scroll.offset.y }),
      f && ((a.x *= f.x.scale), (a.y *= f.y.scale), Zg(i, f)),
      u && bi(h.latestValues) && ma(i, h.latestValues));
  }
  a.x < jp && a.x > Lp && (a.x = 1), a.y < jp && a.y > Lp && (a.y = 1);
}
function da(i, a) {
  (i.min = i.min + a), (i.max = i.max + a);
}
function Hp(i, a, s, u, c = 0.5) {
  const h = Ct(i.min, i.max, c);
  bc(i, a, s, h, u);
}
function ma(i, a) {
  Hp(i.x, a.x, a.scaleX, a.scale, a.originX),
    Hp(i.y, a.y, a.scaleY, a.scale, a.originY);
}
function Pg(i, a) {
  return Gg(nA(i.getBoundingClientRect(), a));
}
function cA(i, a, s) {
  const u = Pg(i, s),
    { scroll: c } = a;
  return c && (da(u.x, c.offset.x), da(u.y, c.offset.y)), u;
}
function gu(i, a) {
  const s = `${a}PointerCapture`;
  if (i.target instanceof Element && s in i.target && i.pointerId !== void 0)
    try {
      i.target[s](i.pointerId);
    } catch {}
}
const qp = (i, a) => Math.abs(i - a);
function fA(i, a) {
  const s = qp(i.x, a.x),
    u = qp(i.y, a.y);
  return Math.sqrt(s ** 2 + u ** 2);
}
class Fg {
  constructor(a, s, { transformPagePoint: u, dragSnapToOrigin: c = !1 } = {}) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const g = $o(this.lastMoveEventInfo, this.history),
          S = this.startEvent !== null,
          T = fA(g.offset, { x: 0, y: 0 }) >= 3;
        if (!S && !T) return;
        const { point: M } = g,
          { timestamp: O } = $t;
        this.history.push({ ...M, timestamp: O });
        const { onStart: _, onMove: U } = this.handlers;
        S ||
          (_ && _(this.lastMoveEvent, g),
          (this.startEvent = this.lastMoveEvent)),
          U && U(this.lastMoveEvent, g);
      }),
      (this.handlePointerMove = (g, S) => {
        if (
          g.target instanceof Element &&
          g.target.hasPointerCapture &&
          g.pointerId !== void 0
        )
          try {
            if (!g.target.hasPointerCapture(g.pointerId)) return;
          } catch {}
        (this.lastMoveEvent = g),
          (this.lastMoveEventInfo = Wo(S, this.transformPagePoint)),
          Dt.update(this.updatePoint, !0);
      }),
      (this.handlePointerUp = (g, S) => {
        gu(g, "release"), this.end();
        const { onEnd: T, onSessionEnd: M, resumeAnimation: O } = this.handlers;
        if (
          (this.dragSnapToOrigin && O && O(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const _ = $o(
          g.type === "pointercancel" || g.type === "lostpointercapture"
            ? this.lastMoveEventInfo
            : Wo(S, this.transformPagePoint),
          this.history
        );
        this.startEvent && T && T(g, _), M && M(g, _);
      }),
      !cf(a))
    )
      return;
    (this.dragSnapToOrigin = c),
      (this.handlers = s),
      (this.transformPagePoint = u);
    const h = Hl(a),
      f = Wo(h, this.transformPagePoint),
      { point: m } = f,
      { timestamp: y } = $t;
    this.history = [{ ...m, timestamp: y }];
    const { onSessionStart: p } = s;
    p && p(a, $o(f, this.history)),
      gu(a, "set"),
      (this.removeListeners = jl(
        fa(a.currentTarget, "pointermove", this.handlePointerMove),
        fa(a.currentTarget, "pointerup", this.handlePointerUp),
        fa(a.currentTarget, "pointercancel", this.handlePointerUp),
        fa(a.currentTarget, "lostpointercapture", this.handlePointerUp)
      ));
  }
  updateHandlers(a) {
    this.handlers = a;
  }
  end() {
    this.removeListeners && this.removeListeners(), Fn(this.updatePoint);
  }
}
function Wo(i, a) {
  return a ? { point: a(i.point) } : i;
}
function Yp(i, a) {
  return { x: i.x - a.x, y: i.y - a.y };
}
function $o({ point: i }, a) {
  return {
    point: i,
    delta: Yp(i, kg(a)),
    offset: Yp(i, hA(a)),
    velocity: dA(a, 0.1),
  };
}
function hA(i) {
  return i[0];
}
function kg(i) {
  return i[i.length - 1];
}
function dA(i, a) {
  if (i.length < 2) return { x: 0, y: 0 };
  let s = i.length - 1,
    u = null;
  const c = kg(i);
  for (; s >= 0 && ((u = i[s]), !(c.timestamp - u.timestamp > bn(a))); ) s--;
  if (!u) return { x: 0, y: 0 };
  const h = Tn(c.timestamp - u.timestamp);
  if (h === 0) return { x: 0, y: 0 };
  const f = { x: (c.x - u.x) / h, y: (c.y - u.y) / h };
  return f.x === 1 / 0 && (f.x = 0), f.y === 1 / 0 && (f.y = 0), f;
}
function mA(i, { min: a, max: s }, u) {
  return (
    a !== void 0 && i < a
      ? (i = u ? Ct(a, i, u.min) : Math.max(i, a))
      : s !== void 0 && i > s && (i = u ? Ct(s, i, u.max) : Math.min(i, s)),
    i
  );
}
function Gp(i, a, s) {
  return {
    min: a !== void 0 ? i.min + a : void 0,
    max: s !== void 0 ? i.max + s - (i.max - i.min) : void 0,
  };
}
function pA(i, { top: a, left: s, bottom: u, right: c }) {
  return { x: Gp(i.x, s, c), y: Gp(i.y, a, u) };
}
function Xp(i, a) {
  let s = a.min - i.min,
    u = a.max - i.max;
  return a.max - a.min < i.max - i.min && ([s, u] = [u, s]), { min: s, max: u };
}
function yA(i, a) {
  return { x: Xp(i.x, a.x), y: Xp(i.y, a.y) };
}
function gA(i, a) {
  let s = 0.5;
  const u = oe(i),
    c = oe(a);
  return (
    c > u
      ? (s = ya(a.min, a.max - u, i.min))
      : u > c && (s = ya(i.min, i.max - c, a.min)),
    An(0, 1, s)
  );
}
function vA(i, a) {
  const s = {};
  return (
    a.min !== void 0 && (s.min = a.min - i.min),
    a.max !== void 0 && (s.max = a.max - i.min),
    s
  );
}
const Tc = 0.35;
function SA(i = Tc) {
  return (
    i === !1 ? (i = 0) : i === !0 && (i = Tc),
    { x: Kp(i, "left", "right"), y: Kp(i, "top", "bottom") }
  );
}
function Kp(i, a, s) {
  return { min: Qp(i, a), max: Qp(i, s) };
}
function Qp(i, a) {
  return typeof i == "number" ? i : i[a] || 0;
}
const bA = new WeakMap();
class TA {
  constructor(a) {
    (this.openDragLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = Nt()),
      (this.visualElement = a);
  }
  start(a, { snapToCursor: s = !1 } = {}) {
    const { presenceContext: u } = this.visualElement;
    if (u && u.isPresent === !1) return;
    const c = (g) => {
        const { dragSnapToOrigin: S } = this.getProps();
        S ? this.pauseAnimation() : this.stopAnimation(),
          s && this.snapToCursor(Hl(g).point);
      },
      h = (g, S) => {
        const { drag: T, dragPropagation: M, onDragStart: O } = this.getProps();
        if (
          T &&
          !M &&
          (this.openDragLock && this.openDragLock(),
          (this.openDragLock = IT(T)),
          !this.openDragLock)
        )
          return;
        (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          He((U) => {
            let N = this.getAxisMotionValue(U).get() || 0;
            if (tn.test(N)) {
              const { projection: q } = this.visualElement;
              if (q && q.layout) {
                const Y = q.layout.layoutBox[U];
                Y && (N = oe(Y) * (parseFloat(N) / 100));
              }
            }
            this.originPoint[U] = N;
          }),
          O && Dt.postRender(() => O(g, S)),
          oc(this.visualElement, "transform");
        const { animationState: _ } = this.visualElement;
        _ && _.setActive("whileDrag", !0);
      },
      f = (g, S) => {
        const {
          dragPropagation: T,
          dragDirectionLock: M,
          onDirectionLock: O,
          onDrag: _,
        } = this.getProps();
        if (!T && !this.openDragLock) return;
        const { offset: U } = S;
        if (M && this.currentDirection === null) {
          (this.currentDirection = AA(U)),
            this.currentDirection !== null && O && O(this.currentDirection);
          return;
        }
        this.updateAxis("x", S.point, U),
          this.updateAxis("y", S.point, U),
          this.visualElement.render(),
          _ && _(g, S);
      },
      m = (g, S) => this.stop(g, S),
      y = () =>
        He((g) => {
          var S;
          return (
            this.getAnimationState(g) === "paused" &&
            ((S = this.getAxisMotionValue(g).animation) === null || S === void 0
              ? void 0
              : S.play())
          );
        }),
      { dragSnapToOrigin: p } = this.getProps();
    this.panSession = new Fg(
      a,
      {
        onSessionStart: c,
        onStart: h,
        onMove: f,
        onSessionEnd: m,
        resumeAnimation: y,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: p,
      }
    );
  }
  stop(a, s) {
    const u = this.isDragging;
    if ((this.cancel(), !u)) return;
    const { velocity: c } = s;
    this.startAnimation(c);
    const { onDragEnd: h } = this.getProps();
    h && Dt.postRender(() => h(a, s));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: a, animationState: s } = this.visualElement;
    a && (a.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0);
    const { dragPropagation: u } = this.getProps();
    !u &&
      this.openDragLock &&
      (this.openDragLock(), (this.openDragLock = null)),
      s && s.setActive("whileDrag", !1);
  }
  updateAxis(a, s, u) {
    const { drag: c } = this.getProps();
    if (!u || !au(a, c, this.currentDirection)) return;
    const h = this.getAxisMotionValue(a);
    let f = this.originPoint[a] + u[a];
    this.constraints &&
      this.constraints[a] &&
      (f = mA(f, this.constraints[a], this.elastic[a])),
      h.set(f);
  }
  resolveConstraints() {
    var a;
    const { dragConstraints: s, dragElastic: u } = this.getProps(),
      c =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (a = this.visualElement.projection) === null || a === void 0
          ? void 0
          : a.layout,
      h = this.constraints;
    s && oa(s)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : s && c
      ? (this.constraints = pA(c.layoutBox, s))
      : (this.constraints = !1),
      (this.elastic = SA(u)),
      h !== this.constraints &&
        c &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        He((f) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(f) &&
            (this.constraints[f] = vA(c.layoutBox[f], this.constraints[f]));
        });
  }
  resolveRefConstraints() {
    const { dragConstraints: a, onMeasureDragConstraints: s } = this.getProps();
    if (!a || !oa(a)) return !1;
    const u = a.current,
      { projection: c } = this.visualElement;
    if (!c || !c.layout) return !1;
    const h = cA(u, c.root, this.visualElement.getTransformPagePoint());
    let f = yA(c.layout.layoutBox, h);
    if (s) {
      const m = s(eA(f));
      (this.hasMutatedConstraints = !!m), m && (f = Gg(m));
    }
    return f;
  }
  startAnimation(a) {
    const {
        drag: s,
        dragMomentum: u,
        dragElastic: c,
        dragTransition: h,
        dragSnapToOrigin: f,
        onDragTransitionEnd: m,
      } = this.getProps(),
      y = this.constraints || {},
      p = He((g) => {
        if (!au(g, s, this.currentDirection)) return;
        let S = (y && y[g]) || {};
        f && (S = { min: 0, max: 0 });
        const T = c ? 200 : 1e6,
          M = c ? 40 : 1e7,
          O = {
            type: "inertia",
            velocity: u ? a[g] : 0,
            bounceStiffness: T,
            bounceDamping: M,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...h,
            ...S,
          };
        return this.startAxisValueAnimation(g, O);
      });
    return Promise.all(p).then(m);
  }
  startAxisValueAnimation(a, s) {
    const u = this.getAxisMotionValue(a);
    return (
      oc(this.visualElement, a), u.start(of(a, u, 0, s, this.visualElement, !1))
    );
  }
  stopAnimation() {
    He((a) => this.getAxisMotionValue(a).stop());
  }
  pauseAnimation() {
    He((a) => {
      var s;
      return (s = this.getAxisMotionValue(a).animation) === null || s === void 0
        ? void 0
        : s.pause();
    });
  }
  getAnimationState(a) {
    var s;
    return (s = this.getAxisMotionValue(a).animation) === null || s === void 0
      ? void 0
      : s.state;
  }
  getAxisMotionValue(a) {
    const s = `_drag${a.toUpperCase()}`,
      u = this.visualElement.getProps(),
      c = u[s];
    return (
      c ||
      this.visualElement.getValue(a, (u.initial ? u.initial[a] : void 0) || 0)
    );
  }
  snapToCursor(a) {
    He((s) => {
      const { drag: u } = this.getProps();
      if (!au(s, u, this.currentDirection)) return;
      const { projection: c } = this.visualElement,
        h = this.getAxisMotionValue(s);
      if (c && c.layout) {
        const { min: f, max: m } = c.layout.layoutBox[s];
        h.set(a[s] - Ct(f, m, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: a, dragConstraints: s } = this.getProps(),
      { projection: u } = this.visualElement;
    if (!oa(s) || !u || !this.constraints) return;
    this.stopAnimation();
    const c = { x: 0, y: 0 };
    He((f) => {
      const m = this.getAxisMotionValue(f);
      if (m && this.constraints !== !1) {
        const y = m.get();
        c[f] = gA({ min: y, max: y }, this.constraints[f]);
      }
    });
    const { transformTemplate: h } = this.visualElement.getProps();
    (this.visualElement.current.style.transform = h ? h({}, "") : "none"),
      u.root && u.root.updateScroll(),
      u.updateLayout(),
      this.resolveConstraints(),
      He((f) => {
        if (!au(f, a, null)) return;
        const m = this.getAxisMotionValue(f),
          { min: y, max: p } = this.constraints[f];
        m.set(Ct(y, p, c[f]));
      });
  }
  addListeners() {
    if (!this.visualElement.current) return;
    bA.set(this.visualElement, this);
    const a = this.visualElement.current,
      s = fa(a, "pointerdown", (y) => {
        const { drag: p, dragListener: g = !0 } = this.getProps();
        p && g && this.start(y);
      }),
      u = () => {
        const { dragConstraints: y } = this.getProps();
        oa(y) && y.current && (this.constraints = this.resolveRefConstraints());
      },
      { projection: c } = this.visualElement,
      h = c.addEventListener("measure", u);
    c && !c.layout && (c.root && c.root.updateScroll(), c.updateLayout()),
      Dt.read(u);
    const f = zl(window, "resize", () => this.scalePositionWithinConstraints()),
      m = c.addEventListener(
        "didUpdate",
        ({ delta: y, hasLayoutChanged: p }) => {
          this.isDragging &&
            p &&
            (He((g) => {
              const S = this.getAxisMotionValue(g);
              S &&
                ((this.originPoint[g] += y[g].translate),
                S.set(S.get() + y[g].translate));
            }),
            this.visualElement.render());
        }
      );
    return () => {
      f(), s(), h(), m && m();
    };
  }
  getProps() {
    const a = this.visualElement.getProps(),
      {
        drag: s = !1,
        dragDirectionLock: u = !1,
        dragPropagation: c = !1,
        dragConstraints: h = !1,
        dragElastic: f = Tc,
        dragMomentum: m = !0,
      } = a;
    return {
      ...a,
      drag: s,
      dragDirectionLock: u,
      dragPropagation: c,
      dragConstraints: h,
      dragElastic: f,
      dragMomentum: m,
    };
  }
}
function au(i, a, s) {
  return (a === !0 || a === i) && (s === null || s === i);
}
function AA(i, a = 10) {
  let s = null;
  return Math.abs(i.y) > a ? (s = "y") : Math.abs(i.x) > a && (s = "x"), s;
}
class EA extends Jn {
  constructor(a) {
    super(a),
      (this.removeGroupControls = Te),
      (this.removeListeners = Te),
      (this.controls = new TA(a));
  }
  mount() {
    const { dragControls: a } = this.node.getProps();
    a && (this.removeGroupControls = a.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || Te);
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const Zp = (i) => (a, s) => {
  i && Dt.postRender(() => i(a, s));
};
class RA extends Jn {
  constructor() {
    super(...arguments), (this.removePointerDownListener = Te);
  }
  onPointerDown(a) {
    this.session = new Fg(a, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: a,
      onPanStart: s,
      onPan: u,
      onPanEnd: c,
    } = this.node.getProps();
    return {
      onSessionStart: Zp(a),
      onStart: Zp(s),
      onMove: u,
      onEnd: (h, f) => {
        delete this.session, c && Dt.postRender(() => c(h, f));
      },
    };
  }
  mount() {
    this.removePointerDownListener = fa(this.node.current, "pointerdown", (a) =>
      this.onPointerDown(a)
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const uu = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function Pp(i, a) {
  return a.max === a.min ? 0 : (i / (a.max - a.min)) * 100;
}
const Tl = {
    correct: (i, a) => {
      if (!a.target) return i;
      if (typeof i == "string")
        if (tt.test(i)) i = parseFloat(i);
        else return i;
      const s = Pp(i, a.target.x),
        u = Pp(i, a.target.y);
      return `${s}% ${u}%`;
    },
  },
  DA = {
    correct: (i, { treeScale: a, projectionDelta: s }) => {
      const u = i,
        c = kn.parse(i);
      if (c.length > 5) return u;
      const h = kn.createTransformer(i),
        f = typeof c[0] != "number" ? 1 : 0,
        m = s.x.scale * a.x,
        y = s.y.scale * a.y;
      (c[0 + f] /= m), (c[1 + f] /= y);
      const p = Ct(m, y, 0.5);
      return (
        typeof c[2 + f] == "number" && (c[2 + f] /= p),
        typeof c[3 + f] == "number" && (c[3 + f] /= p),
        h(c)
      );
    },
  };
class xA extends it.Component {
  componentDidMount() {
    const {
        visualElement: a,
        layoutGroup: s,
        switchLayoutGroup: u,
        layoutId: c,
      } = this.props,
      { projection: h } = a;
    L1(OA),
      h &&
        (s.group && s.group.add(h),
        u && u.register && c && u.register(h),
        h.root.didUpdate(),
        h.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        h.setOptions({
          ...h.options,
          onExitComplete: () => this.safeToRemove(),
        })),
      (uu.hasEverUpdated = !0);
  }
  getSnapshotBeforeUpdate(a) {
    const {
        layoutDependency: s,
        visualElement: u,
        drag: c,
        isPresent: h,
      } = this.props,
      f = u.projection;
    return (
      f &&
        ((f.isPresent = h),
        c || a.layoutDependency !== s || s === void 0
          ? f.willUpdate()
          : this.safeToRemove(),
        a.isPresent !== h &&
          (h
            ? f.promote()
            : f.relegate() ||
              Dt.postRender(() => {
                const m = f.getStack();
                (!m || !m.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: a } = this.props.visualElement;
    a &&
      (a.root.didUpdate(),
      Nc.postRender(() => {
        !a.currentAnimation && a.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: a,
        layoutGroup: s,
        switchLayoutGroup: u,
      } = this.props,
      { projection: c } = a;
    c &&
      (c.scheduleCheckAfterUnmount(),
      s && s.group && s.group.remove(c),
      u && u.deregister && u.deregister(c));
  }
  safeToRemove() {
    const { safeToRemove: a } = this.props;
    a && a();
  }
  render() {
    return null;
  }
}
function Jg(i) {
  const [a, s] = m1(),
    u = it.useContext(By);
  return Lt.jsx(xA, {
    ...i,
    layoutGroup: u,
    switchLayoutGroup: it.useContext(Xy),
    isPresent: a,
    safeToRemove: s,
  });
}
const OA = {
  borderRadius: {
    ...Tl,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius",
    ],
  },
  borderTopLeftRadius: Tl,
  borderTopRightRadius: Tl,
  borderBottomLeftRadius: Tl,
  borderBottomRightRadius: Tl,
  boxShadow: DA,
};
function MA(i, a, s) {
  const u = ae(i) ? i : Ul(i);
  return u.start(of("", u, a, s)), u.animation;
}
function CA(i) {
  return i instanceof SVGElement && i.tagName !== "svg";
}
const _A = (i, a) => i.depth - a.depth;
class wA {
  constructor() {
    (this.children = []), (this.isDirty = !1);
  }
  add(a) {
    Fc(this.children, a), (this.isDirty = !0);
  }
  remove(a) {
    kc(this.children, a), (this.isDirty = !0);
  }
  forEach(a) {
    this.isDirty && this.children.sort(_A),
      (this.isDirty = !1),
      this.children.forEach(a);
  }
}
function UA(i, a) {
  const s = en.now(),
    u = ({ timestamp: c }) => {
      const h = c - s;
      h >= a && (Fn(u), i(h - a));
    };
  return Dt.read(u, !0), () => Fn(u);
}
const Wg = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  VA = Wg.length,
  Fp = (i) => (typeof i == "string" ? parseFloat(i) : i),
  kp = (i) => typeof i == "number" || tt.test(i);
function zA(i, a, s, u, c, h) {
  c
    ? ((i.opacity = Ct(0, s.opacity !== void 0 ? s.opacity : 1, BA(u))),
      (i.opacityExit = Ct(a.opacity !== void 0 ? a.opacity : 1, 0, NA(u))))
    : h &&
      (i.opacity = Ct(
        a.opacity !== void 0 ? a.opacity : 1,
        s.opacity !== void 0 ? s.opacity : 1,
        u
      ));
  for (let f = 0; f < VA; f++) {
    const m = `border${Wg[f]}Radius`;
    let y = Jp(a, m),
      p = Jp(s, m);
    if (y === void 0 && p === void 0) continue;
    y || (y = 0),
      p || (p = 0),
      y === 0 || p === 0 || kp(y) === kp(p)
        ? ((i[m] = Math.max(Ct(Fp(y), Fp(p), u), 0)),
          (tn.test(p) || tn.test(y)) && (i[m] += "%"))
        : (i[m] = p);
  }
  (a.rotate || s.rotate) && (i.rotate = Ct(a.rotate || 0, s.rotate || 0, u));
}
function Jp(i, a) {
  return i[a] !== void 0 ? i[a] : i.borderRadius;
}
const BA = $g(0, 0.5, mg),
  NA = $g(0.5, 0.95, Te);
function $g(i, a, s) {
  return (u) => (u < i ? 0 : u > a ? 1 : s(ya(i, a, u)));
}
function Wp(i, a) {
  (i.min = a.min), (i.max = a.max);
}
function je(i, a) {
  Wp(i.x, a.x), Wp(i.y, a.y);
}
function $p(i, a) {
  (i.translate = a.translate),
    (i.scale = a.scale),
    (i.originPoint = a.originPoint),
    (i.origin = a.origin);
}
function Ip(i, a, s, u, c) {
  return (
    (i -= a), (i = yu(i, 1 / s, u)), c !== void 0 && (i = yu(i, 1 / c, u)), i
  );
}
function LA(i, a = 0, s = 1, u = 0.5, c, h = i, f = i) {
  if (
    (tn.test(a) &&
      ((a = parseFloat(a)), (a = Ct(f.min, f.max, a / 100) - f.min)),
    typeof a != "number")
  )
    return;
  let m = Ct(h.min, h.max, u);
  i === h && (m -= a),
    (i.min = Ip(i.min, a, s, m, c)),
    (i.max = Ip(i.max, a, s, m, c));
}
function ty(i, a, [s, u, c], h, f) {
  LA(i, a[s], a[u], a[c], a.scale, h, f);
}
const jA = ["x", "scaleX", "originX"],
  HA = ["y", "scaleY", "originY"];
function ey(i, a, s, u) {
  ty(i.x, a, jA, s ? s.x : void 0, u ? u.x : void 0),
    ty(i.y, a, HA, s ? s.y : void 0, u ? u.y : void 0);
}
function ny(i) {
  return i.translate === 0 && i.scale === 1;
}
function Ig(i) {
  return ny(i.x) && ny(i.y);
}
function iy(i, a) {
  return i.min === a.min && i.max === a.max;
}
function qA(i, a) {
  return iy(i.x, a.x) && iy(i.y, a.y);
}
function ay(i, a) {
  return (
    Math.round(i.min) === Math.round(a.min) &&
    Math.round(i.max) === Math.round(a.max)
  );
}
function t0(i, a) {
  return ay(i.x, a.x) && ay(i.y, a.y);
}
function ly(i) {
  return oe(i.x) / oe(i.y);
}
function sy(i, a) {
  return (
    i.translate === a.translate &&
    i.scale === a.scale &&
    i.originPoint === a.originPoint
  );
}
class YA {
  constructor() {
    this.members = [];
  }
  add(a) {
    Fc(this.members, a), a.scheduleRender();
  }
  remove(a) {
    if (
      (kc(this.members, a),
      a === this.prevLead && (this.prevLead = void 0),
      a === this.lead)
    ) {
      const s = this.members[this.members.length - 1];
      s && this.promote(s);
    }
  }
  relegate(a) {
    const s = this.members.findIndex((c) => a === c);
    if (s === 0) return !1;
    let u;
    for (let c = s; c >= 0; c--) {
      const h = this.members[c];
      if (h.isPresent !== !1) {
        u = h;
        break;
      }
    }
    return u ? (this.promote(u), !0) : !1;
  }
  promote(a, s) {
    const u = this.lead;
    if (a !== u && ((this.prevLead = u), (this.lead = a), a.show(), u)) {
      u.instance && u.scheduleRender(),
        a.scheduleRender(),
        (a.resumeFrom = u),
        s && (a.resumeFrom.preserveOpacity = !0),
        u.snapshot &&
          ((a.snapshot = u.snapshot),
          (a.snapshot.latestValues = u.animationValues || u.latestValues)),
        a.root && a.root.isUpdating && (a.isLayoutDirty = !0);
      const { crossfade: c } = a.options;
      c === !1 && u.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((a) => {
      const { options: s, resumingFrom: u } = a;
      s.onExitComplete && s.onExitComplete(),
        u && u.options.onExitComplete && u.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((a) => {
      a.instance && a.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function GA(i, a, s) {
  let u = "";
  const c = i.x.translate / a.x,
    h = i.y.translate / a.y,
    f = (s == null ? void 0 : s.z) || 0;
  if (
    ((c || h || f) && (u = `translate3d(${c}px, ${h}px, ${f}px) `),
    (a.x !== 1 || a.y !== 1) && (u += `scale(${1 / a.x}, ${1 / a.y}) `),
    s)
  ) {
    const {
      transformPerspective: p,
      rotate: g,
      rotateX: S,
      rotateY: T,
      skewX: M,
      skewY: O,
    } = s;
    p && (u = `perspective(${p}px) ${u}`),
      g && (u += `rotate(${g}deg) `),
      S && (u += `rotateX(${S}deg) `),
      T && (u += `rotateY(${T}deg) `),
      M && (u += `skewX(${M}deg) `),
      O && (u += `skewY(${O}deg) `);
  }
  const m = i.x.scale * a.x,
    y = i.y.scale * a.y;
  return (m !== 1 || y !== 1) && (u += `scale(${m}, ${y})`), u || "none";
}
const Io = ["", "X", "Y", "Z"],
  XA = { visibility: "hidden" },
  uy = 1e3;
let KA = 0;
function tc(i, a, s, u) {
  const { latestValues: c } = a;
  c[i] && ((s[i] = c[i]), a.setStaticValue(i, 0), u && (u[i] = 0));
}
function e0(i) {
  if (((i.hasCheckedOptimisedAppear = !0), i.root === i)) return;
  const { visualElement: a } = i.options;
  if (!a) return;
  const s = ag(a);
  if (window.MotionHasOptimisedAnimation(s, "transform")) {
    const { layout: c, layoutId: h } = i.options;
    window.MotionCancelOptimisedAnimation(s, "transform", Dt, !(c || h));
  }
  const { parent: u } = i;
  u && !u.hasCheckedOptimisedAppear && e0(u);
}
function n0({
  attachResizeListener: i,
  defaultParent: a,
  measureScroll: s,
  checkIsScrollRoot: u,
  resetTransform: c,
}) {
  return class {
    constructor(f = {}, m = a == null ? void 0 : a()) {
      (this.id = KA++),
        (this.animationId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          (this.projectionUpdateScheduled = !1),
            this.nodes.forEach(PA),
            this.nodes.forEach($A),
            this.nodes.forEach(IA),
            this.nodes.forEach(FA);
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = f),
        (this.root = m ? m.root || m : this),
        (this.path = m ? [...m.path, m] : []),
        (this.parent = m),
        (this.depth = m ? m.depth + 1 : 0);
      for (let y = 0; y < this.path.length; y++)
        this.path[y].shouldResetTransform = !0;
      this.root === this && (this.nodes = new wA());
    }
    addEventListener(f, m) {
      return (
        this.eventHandlers.has(f) || this.eventHandlers.set(f, new Jc()),
        this.eventHandlers.get(f).add(m)
      );
    }
    notifyListeners(f, ...m) {
      const y = this.eventHandlers.get(f);
      y && y.notify(...m);
    }
    hasListeners(f) {
      return this.eventHandlers.has(f);
    }
    mount(f, m = this.root.hasTreeAnimated) {
      if (this.instance) return;
      (this.isSVG = CA(f)), (this.instance = f);
      const { layoutId: y, layout: p, visualElement: g } = this.options;
      if (
        (g && !g.current && g.mount(f),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        m && (p || y) && (this.isLayoutDirty = !0),
        i)
      ) {
        let S;
        const T = () => (this.root.updateBlockedByResize = !1);
        i(f, () => {
          (this.root.updateBlockedByResize = !0),
            S && S(),
            (S = UA(T, 250)),
            uu.hasAnimatedSinceResize &&
              ((uu.hasAnimatedSinceResize = !1), this.nodes.forEach(oy));
        });
      }
      y && this.root.registerSharedNode(y, this),
        this.options.animate !== !1 &&
          g &&
          (y || p) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: S,
              hasLayoutChanged: T,
              hasRelativeLayoutChanged: M,
              layout: O,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                (this.target = void 0), (this.relativeTarget = void 0);
                return;
              }
              const _ =
                  this.options.transition || g.getDefaultTransition() || aE,
                { onLayoutAnimationStart: U, onLayoutAnimationComplete: N } =
                  g.getProps(),
                q = !this.targetLayout || !t0(this.targetLayout, O),
                Y = !T && M;
              if (
                this.options.layoutRoot ||
                this.resumeFrom ||
                Y ||
                (T && (q || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(S, Y);
                const nt = { ...Pc(_, "layout"), onPlay: U, onComplete: N };
                (g.shouldReduceMotion || this.options.layoutRoot) &&
                  ((nt.delay = 0), (nt.type = !1)),
                  this.startAnimation(nt);
              } else
                T || oy(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete();
              this.targetLayout = O;
            }
          );
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const f = this.getStack();
      f && f.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        Fn(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(tE),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: f } = this.options;
      return f && f.getProps().transformTemplate;
    }
    willUpdate(f = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (window.MotionCancelOptimisedAnimation &&
          !this.hasCheckedOptimisedAppear &&
          e0(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let g = 0; g < this.path.length; g++) {
        const S = this.path[g];
        (S.shouldResetTransform = !0),
          S.updateScroll("snapshot"),
          S.options.layoutRoot && S.willUpdate(!1);
      }
      const { layoutId: m, layout: y } = this.options;
      if (m === void 0 && !y) return;
      const p = this.getTransformTemplate();
      (this.prevTransformTemplateValue = p ? p(this.latestValues, "") : void 0),
        this.updateSnapshot(),
        f && this.notifyListeners("willUpdate");
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(ry);
        return;
      }
      this.isUpdating || this.nodes.forEach(JA),
        (this.isUpdating = !1),
        this.nodes.forEach(WA),
        this.nodes.forEach(QA),
        this.nodes.forEach(ZA),
        this.clearAllSnapshots();
      const m = en.now();
      ($t.delta = An(0, 1e3 / 60, m - $t.timestamp)),
        ($t.timestamp = m),
        ($t.isProcessing = !0),
        Zo.update.process($t),
        Zo.preRender.process($t),
        Zo.render.process($t),
        ($t.isProcessing = !1);
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), Nc.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(kA), this.sharedNodes.forEach(eE);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        Dt.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      Dt.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot ||
        !this.instance ||
        ((this.snapshot = this.measure()),
        this.snapshot &&
          !oe(this.snapshot.measuredBox.x) &&
          !oe(this.snapshot.measuredBox.y) &&
          (this.snapshot = void 0));
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let y = 0; y < this.path.length; y++) this.path[y].updateScroll();
      const f = this.layout;
      (this.layout = this.measure(!1)),
        (this.layoutCorrected = Nt()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: m } = this.options;
      m &&
        m.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          f ? f.layoutBox : void 0
        );
    }
    updateScroll(f = "measure") {
      let m = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === f &&
          (m = !1),
        m)
      ) {
        const y = u(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: f,
          isRoot: y,
          offset: s(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : y,
        };
      }
    }
    resetTransform() {
      if (!c) return;
      const f =
          this.isLayoutDirty ||
          this.shouldResetTransform ||
          this.options.alwaysMeasureLayout,
        m = this.projectionDelta && !Ig(this.projectionDelta),
        y = this.getTransformTemplate(),
        p = y ? y(this.latestValues, "") : void 0,
        g = p !== this.prevTransformTemplateValue;
      f &&
        (m || bi(this.latestValues) || g) &&
        (c(this.instance, p),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(f = !0) {
      const m = this.measurePageBox();
      let y = this.removeElementScroll(m);
      return (
        f && (y = this.removeTransform(y)),
        lE(y),
        {
          animationId: this.root.animationId,
          measuredBox: m,
          layoutBox: y,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      var f;
      const { visualElement: m } = this.options;
      if (!m) return Nt();
      const y = m.measureViewportBox();
      if (
        !(
          ((f = this.scroll) === null || f === void 0 ? void 0 : f.wasRoot) ||
          this.path.some(sE)
        )
      ) {
        const { scroll: g } = this.root;
        g && (da(y.x, g.offset.x), da(y.y, g.offset.y));
      }
      return y;
    }
    removeElementScroll(f) {
      var m;
      const y = Nt();
      if (
        (je(y, f), !((m = this.scroll) === null || m === void 0) && m.wasRoot)
      )
        return y;
      for (let p = 0; p < this.path.length; p++) {
        const g = this.path[p],
          { scroll: S, options: T } = g;
        g !== this.root &&
          S &&
          T.layoutScroll &&
          (S.wasRoot && je(y, f), da(y.x, S.offset.x), da(y.y, S.offset.y));
      }
      return y;
    }
    applyTransform(f, m = !1) {
      const y = Nt();
      je(y, f);
      for (let p = 0; p < this.path.length; p++) {
        const g = this.path[p];
        !m &&
          g.options.layoutScroll &&
          g.scroll &&
          g !== g.root &&
          ma(y, { x: -g.scroll.offset.x, y: -g.scroll.offset.y }),
          bi(g.latestValues) && ma(y, g.latestValues);
      }
      return bi(this.latestValues) && ma(y, this.latestValues), y;
    }
    removeTransform(f) {
      const m = Nt();
      je(m, f);
      for (let y = 0; y < this.path.length; y++) {
        const p = this.path[y];
        if (!p.instance || !bi(p.latestValues)) continue;
        Sc(p.latestValues) && p.updateSnapshot();
        const g = Nt(),
          S = p.measurePageBox();
        je(g, S),
          ey(m, p.latestValues, p.snapshot ? p.snapshot.layoutBox : void 0, g);
      }
      return bi(this.latestValues) && ey(m, this.latestValues), m;
    }
    setTargetDelta(f) {
      (this.targetDelta = f),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0);
    }
    setOptions(f) {
      this.options = {
        ...this.options,
        ...f,
        crossfade: f.crossfade !== void 0 ? f.crossfade : !0,
      };
    }
    clearMeasurements() {
      (this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1);
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== $t.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(f = !1) {
      var m;
      const y = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = y.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = y.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = y.isSharedProjectionDirty);
      const p = !!this.resumingFrom || this !== y;
      if (
        !(
          f ||
          (p && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          (!((m = this.parent) === null || m === void 0) &&
            m.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget ||
          this.root.updateBlockedByResize
        )
      )
        return;
      const { layout: S, layoutId: T } = this.options;
      if (!(!this.layout || !(S || T))) {
        if (
          ((this.resolvedRelativeTargetAt = $t.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const M = this.getClosestProjectingParent();
          M && M.layout && this.animationProgress !== 1
            ? ((this.relativeParent = M),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = Nt()),
              (this.relativeTargetOrigin = Nt()),
              Ol(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                M.layout.layoutBox
              ),
              je(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (
          !(!this.relativeTarget && !this.targetDelta) &&
          (this.target ||
            ((this.target = Nt()), (this.targetWithTransforms = Nt())),
          this.relativeTarget &&
          this.relativeTargetOrigin &&
          this.relativeParent &&
          this.relativeParent.target
            ? (this.forceRelativeParentToResolveTarget(),
              rA(this.target, this.relativeTarget, this.relativeParent.target))
            : this.targetDelta
            ? (this.resumingFrom
                ? (this.target = this.applyTransform(this.layout.layoutBox))
                : je(this.target, this.layout.layoutBox),
              Zg(this.target, this.targetDelta))
            : je(this.target, this.layout.layoutBox),
          this.attemptToResolveRelativeTarget)
        ) {
          this.attemptToResolveRelativeTarget = !1;
          const M = this.getClosestProjectingParent();
          M &&
          !!M.resumingFrom == !!this.resumingFrom &&
          !M.options.layoutScroll &&
          M.target &&
          this.animationProgress !== 1
            ? ((this.relativeParent = M),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = Nt()),
              (this.relativeTargetOrigin = Nt()),
              Ol(this.relativeTargetOrigin, this.target, M.target),
              je(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          Sc(this.parent.latestValues) ||
          Qg(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    calcProjection() {
      var f;
      const m = this.getLead(),
        y = !!this.resumingFrom || this !== m;
      let p = !0;
      if (
        ((this.isProjectionDirty ||
          (!((f = this.parent) === null || f === void 0) &&
            f.isProjectionDirty)) &&
          (p = !1),
        y &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (p = !1),
        this.resolvedRelativeTargetAt === $t.timestamp && (p = !1),
        p)
      )
        return;
      const { layout: g, layoutId: S } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(g || S))
      )
        return;
      je(this.layoutCorrected, this.layout.layoutBox);
      const T = this.treeScale.x,
        M = this.treeScale.y;
      oA(this.layoutCorrected, this.treeScale, this.path, y),
        m.layout &&
          !m.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((m.target = m.layout.layoutBox), (m.targetWithTransforms = Nt()));
      const { target: O } = m;
      if (!O) {
        this.prevProjectionDelta &&
          (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : ($p(this.prevProjectionDelta.x, this.projectionDelta.x),
          $p(this.prevProjectionDelta.y, this.projectionDelta.y)),
        xl(this.projectionDelta, this.layoutCorrected, O, this.latestValues),
        (this.treeScale.x !== T ||
          this.treeScale.y !== M ||
          !sy(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !sy(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", O));
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(f = !0) {
      var m;
      if (
        ((m = this.options.visualElement) === null ||
          m === void 0 ||
          m.scheduleRender(),
        f)
      ) {
        const y = this.getStack();
        y && y.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      (this.prevProjectionDelta = ha()),
        (this.projectionDelta = ha()),
        (this.projectionDeltaWithTransform = ha());
    }
    setAnimationOrigin(f, m = !1) {
      const y = this.snapshot,
        p = y ? y.latestValues : {},
        g = { ...this.latestValues },
        S = ha();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !m);
      const T = Nt(),
        M = y ? y.source : void 0,
        O = this.layout ? this.layout.source : void 0,
        _ = M !== O,
        U = this.getStack(),
        N = !U || U.members.length <= 1,
        q = !!(_ && !N && this.options.crossfade === !0 && !this.path.some(iE));
      this.animationProgress = 0;
      let Y;
      (this.mixTargetDelta = (nt) => {
        const j = nt / 1e3;
        cy(S.x, f.x, j),
          cy(S.y, f.y, j),
          this.setTargetDelta(S),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (Ol(T, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            nE(this.relativeTarget, this.relativeTargetOrigin, T, j),
            Y && qA(this.relativeTarget, Y) && (this.isProjectionDirty = !1),
            Y || (Y = Nt()),
            je(Y, this.relativeTarget)),
          _ &&
            ((this.animationValues = g), zA(g, p, this.latestValues, j, q, N)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = j);
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(f) {
      this.notifyListeners("animationStart"),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom &&
          this.resumingFrom.currentAnimation &&
          this.resumingFrom.currentAnimation.stop(),
        this.pendingAnimation &&
          (Fn(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = Dt.update(() => {
          (uu.hasAnimatedSinceResize = !0),
            (this.currentAnimation = MA(0, uy, {
              ...f,
              onUpdate: (m) => {
                this.mixTargetDelta(m), f.onUpdate && f.onUpdate(m);
              },
              onStop: () => {},
              onComplete: () => {
                f.onComplete && f.onComplete(), this.completeAnimation();
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0);
        }));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const f = this.getStack();
      f && f.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(uy),
        this.currentAnimation.stop()),
        this.completeAnimation();
    }
    applyTransformsToTarget() {
      const f = this.getLead();
      let {
        targetWithTransforms: m,
        target: y,
        layout: p,
        latestValues: g,
      } = f;
      if (!(!m || !y || !p)) {
        if (
          this !== f &&
          this.layout &&
          p &&
          i0(this.options.animationType, this.layout.layoutBox, p.layoutBox)
        ) {
          y = this.target || Nt();
          const S = oe(this.layout.layoutBox.x);
          (y.x.min = f.target.x.min), (y.x.max = y.x.min + S);
          const T = oe(this.layout.layoutBox.y);
          (y.y.min = f.target.y.min), (y.y.max = y.y.min + T);
        }
        je(m, y),
          ma(m, g),
          xl(this.projectionDeltaWithTransform, this.layoutCorrected, m, g);
      }
    }
    registerSharedNode(f, m) {
      this.sharedNodes.has(f) || this.sharedNodes.set(f, new YA()),
        this.sharedNodes.get(f).add(m);
      const p = m.options.initialPromotionConfig;
      m.promote({
        transition: p ? p.transition : void 0,
        preserveFollowOpacity:
          p && p.shouldPreserveFollowOpacity
            ? p.shouldPreserveFollowOpacity(m)
            : void 0,
      });
    }
    isLead() {
      const f = this.getStack();
      return f ? f.lead === this : !0;
    }
    getLead() {
      var f;
      const { layoutId: m } = this.options;
      return m
        ? ((f = this.getStack()) === null || f === void 0 ? void 0 : f.lead) ||
            this
        : this;
    }
    getPrevLead() {
      var f;
      const { layoutId: m } = this.options;
      return m
        ? (f = this.getStack()) === null || f === void 0
          ? void 0
          : f.prevLead
        : void 0;
    }
    getStack() {
      const { layoutId: f } = this.options;
      if (f) return this.root.sharedNodes.get(f);
    }
    promote({ needsReset: f, transition: m, preserveFollowOpacity: y } = {}) {
      const p = this.getStack();
      p && p.promote(this, y),
        f && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        m && this.setOptions({ transition: m });
    }
    relegate() {
      const f = this.getStack();
      return f ? f.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: f } = this.options;
      if (!f) return;
      let m = !1;
      const { latestValues: y } = f;
      if (
        ((y.z ||
          y.rotate ||
          y.rotateX ||
          y.rotateY ||
          y.rotateZ ||
          y.skewX ||
          y.skewY) &&
          (m = !0),
        !m)
      )
        return;
      const p = {};
      y.z && tc("z", f, p, this.animationValues);
      for (let g = 0; g < Io.length; g++)
        tc(`rotate${Io[g]}`, f, p, this.animationValues),
          tc(`skew${Io[g]}`, f, p, this.animationValues);
      f.render();
      for (const g in p)
        f.setStaticValue(g, p[g]),
          this.animationValues && (this.animationValues[g] = p[g]);
      f.scheduleRender();
    }
    getProjectionStyles(f) {
      var m, y;
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) return XA;
      const p = { visibility: "" },
        g = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (p.opacity = ""),
          (p.pointerEvents = lu(f == null ? void 0 : f.pointerEvents) || ""),
          (p.transform = g ? g(this.latestValues, "") : "none"),
          p
        );
      const S = this.getLead();
      if (!this.projectionDelta || !this.layout || !S.target) {
        const _ = {};
        return (
          this.options.layoutId &&
            ((_.opacity =
              this.latestValues.opacity !== void 0
                ? this.latestValues.opacity
                : 1),
            (_.pointerEvents = lu(f == null ? void 0 : f.pointerEvents) || "")),
          this.hasProjected &&
            !bi(this.latestValues) &&
            ((_.transform = g ? g({}, "") : "none"), (this.hasProjected = !1)),
          _
        );
      }
      const T = S.animationValues || S.latestValues;
      this.applyTransformsToTarget(),
        (p.transform = GA(
          this.projectionDeltaWithTransform,
          this.treeScale,
          T
        )),
        g && (p.transform = g(T, p.transform));
      const { x: M, y: O } = this.projectionDelta;
      (p.transformOrigin = `${M.origin * 100}% ${O.origin * 100}% 0`),
        S.animationValues
          ? (p.opacity =
              S === this
                ? (y =
                    (m = T.opacity) !== null && m !== void 0
                      ? m
                      : this.latestValues.opacity) !== null && y !== void 0
                  ? y
                  : 1
                : this.preserveOpacity
                ? this.latestValues.opacity
                : T.opacityExit)
          : (p.opacity =
              S === this
                ? T.opacity !== void 0
                  ? T.opacity
                  : ""
                : T.opacityExit !== void 0
                ? T.opacityExit
                : 0);
      for (const _ in Cl) {
        if (T[_] === void 0) continue;
        const { correct: U, applyTo: N, isCSSVariable: q } = Cl[_],
          Y = p.transform === "none" ? T[_] : U(T[_], S);
        if (N) {
          const nt = N.length;
          for (let j = 0; j < nt; j++) p[N[j]] = Y;
        } else
          q ? (this.options.visualElement.renderState.vars[_] = Y) : (p[_] = Y);
      }
      return (
        this.options.layoutId &&
          (p.pointerEvents =
            S === this
              ? lu(f == null ? void 0 : f.pointerEvents) || ""
              : "none"),
        p
      );
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((f) => {
        var m;
        return (m = f.currentAnimation) === null || m === void 0
          ? void 0
          : m.stop();
      }),
        this.root.nodes.forEach(ry),
        this.root.sharedNodes.clear();
    }
  };
}
function QA(i) {
  i.updateLayout();
}
function ZA(i) {
  var a;
  const s =
    ((a = i.resumeFrom) === null || a === void 0 ? void 0 : a.snapshot) ||
    i.snapshot;
  if (i.isLead() && i.layout && s && i.hasListeners("didUpdate")) {
    const { layoutBox: u, measuredBox: c } = i.layout,
      { animationType: h } = i.options,
      f = s.source !== i.layout.source;
    h === "size"
      ? He((S) => {
          const T = f ? s.measuredBox[S] : s.layoutBox[S],
            M = oe(T);
          (T.min = u[S].min), (T.max = T.min + M);
        })
      : i0(h, s.layoutBox, u) &&
        He((S) => {
          const T = f ? s.measuredBox[S] : s.layoutBox[S],
            M = oe(u[S]);
          (T.max = T.min + M),
            i.relativeTarget &&
              !i.currentAnimation &&
              ((i.isProjectionDirty = !0),
              (i.relativeTarget[S].max = i.relativeTarget[S].min + M));
        });
    const m = ha();
    xl(m, u, s.layoutBox);
    const y = ha();
    f ? xl(y, i.applyTransform(c, !0), s.measuredBox) : xl(y, u, s.layoutBox);
    const p = !Ig(m);
    let g = !1;
    if (!i.resumeFrom) {
      const S = i.getClosestProjectingParent();
      if (S && !S.resumeFrom) {
        const { snapshot: T, layout: M } = S;
        if (T && M) {
          const O = Nt();
          Ol(O, s.layoutBox, T.layoutBox);
          const _ = Nt();
          Ol(_, u, M.layoutBox),
            t0(O, _) || (g = !0),
            S.options.layoutRoot &&
              ((i.relativeTarget = _),
              (i.relativeTargetOrigin = O),
              (i.relativeParent = S));
        }
      }
    }
    i.notifyListeners("didUpdate", {
      layout: u,
      snapshot: s,
      delta: y,
      layoutDelta: m,
      hasLayoutChanged: p,
      hasRelativeLayoutChanged: g,
    });
  } else if (i.isLead()) {
    const { onExitComplete: u } = i.options;
    u && u();
  }
  i.options.transition = void 0;
}
function PA(i) {
  i.parent &&
    (i.isProjecting() || (i.isProjectionDirty = i.parent.isProjectionDirty),
    i.isSharedProjectionDirty ||
      (i.isSharedProjectionDirty = !!(
        i.isProjectionDirty ||
        i.parent.isProjectionDirty ||
        i.parent.isSharedProjectionDirty
      )),
    i.isTransformDirty || (i.isTransformDirty = i.parent.isTransformDirty));
}
function FA(i) {
  i.isProjectionDirty = i.isSharedProjectionDirty = i.isTransformDirty = !1;
}
function kA(i) {
  i.clearSnapshot();
}
function ry(i) {
  i.clearMeasurements();
}
function JA(i) {
  i.isLayoutDirty = !1;
}
function WA(i) {
  const { visualElement: a } = i.options;
  a && a.getProps().onBeforeLayoutMeasure && a.notify("BeforeLayoutMeasure"),
    i.resetTransform();
}
function oy(i) {
  i.finishAnimation(),
    (i.targetDelta = i.relativeTarget = i.target = void 0),
    (i.isProjectionDirty = !0);
}
function $A(i) {
  i.resolveTargetDelta();
}
function IA(i) {
  i.calcProjection();
}
function tE(i) {
  i.resetSkewAndRotation();
}
function eE(i) {
  i.removeLeadSnapshot();
}
function cy(i, a, s) {
  (i.translate = Ct(a.translate, 0, s)),
    (i.scale = Ct(a.scale, 1, s)),
    (i.origin = a.origin),
    (i.originPoint = a.originPoint);
}
function fy(i, a, s, u) {
  (i.min = Ct(a.min, s.min, u)), (i.max = Ct(a.max, s.max, u));
}
function nE(i, a, s, u) {
  fy(i.x, a.x, s.x, u), fy(i.y, a.y, s.y, u);
}
function iE(i) {
  return i.animationValues && i.animationValues.opacityExit !== void 0;
}
const aE = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  hy = (i) =>
    typeof navigator < "u" &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(i),
  dy = hy("applewebkit/") && !hy("chrome/") ? Math.round : Te;
function my(i) {
  (i.min = dy(i.min)), (i.max = dy(i.max));
}
function lE(i) {
  my(i.x), my(i.y);
}
function i0(i, a, s) {
  return (
    i === "position" || (i === "preserve-aspect" && !uA(ly(a), ly(s), 0.2))
  );
}
function sE(i) {
  var a;
  return (
    i !== i.root &&
    ((a = i.scroll) === null || a === void 0 ? void 0 : a.wasRoot)
  );
}
const uE = n0({
    attachResizeListener: (i, a) => zl(i, "resize", a),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  ec = { current: void 0 },
  a0 = n0({
    measureScroll: (i) => ({ x: i.scrollLeft, y: i.scrollTop }),
    defaultParent: () => {
      if (!ec.current) {
        const i = new uE({});
        i.mount(window), i.setOptions({ layoutScroll: !0 }), (ec.current = i);
      }
      return ec.current;
    },
    resetTransform: (i, a) => {
      i.style.transform = a !== void 0 ? a : "none";
    },
    checkIsScrollRoot: (i) => window.getComputedStyle(i).position === "fixed",
  }),
  rE = {
    pan: { Feature: RA },
    drag: { Feature: EA, ProjectionNode: a0, MeasureLayout: Jg },
  };
function oE(i, a, s) {
  var u;
  if (i instanceof EventTarget) return [i];
  if (typeof i == "string") {
    let c = document;
    const h = (u = void 0) !== null && u !== void 0 ? u : c.querySelectorAll(i);
    return h ? Array.from(h) : [];
  }
  return Array.from(i);
}
function l0(i, a) {
  const s = oE(i),
    u = new AbortController(),
    c = { passive: !0, ...a, signal: u.signal };
  return [s, c, () => u.abort()];
}
function py(i) {
  return !(i.pointerType === "touch" || Yg());
}
function cE(i, a, s = {}) {
  const [u, c, h] = l0(i, s),
    f = (m) => {
      if (!py(m)) return;
      const { target: y } = m,
        p = a(y, m);
      if (typeof p != "function" || !y) return;
      const g = (S) => {
        py(S) && (p(S), y.removeEventListener("pointerleave", g));
      };
      y.addEventListener("pointerleave", g, c);
    };
  return (
    u.forEach((m) => {
      m.addEventListener("pointerenter", f, c);
    }),
    h
  );
}
function yy(i, a, s) {
  const { props: u } = i;
  i.animationState &&
    u.whileHover &&
    i.animationState.setActive("whileHover", s === "Start");
  const c = "onHover" + s,
    h = u[c];
  h && Dt.postRender(() => h(a, Hl(a)));
}
class fE extends Jn {
  mount() {
    const { current: a } = this.node;
    a &&
      (this.unmount = cE(
        a,
        (s, u) => (yy(this.node, u, "Start"), (c) => yy(this.node, c, "End"))
      ));
  }
  unmount() {}
}
class hE extends Jn {
  constructor() {
    super(...arguments), (this.isActive = !1);
  }
  onFocus() {
    let a = !1;
    try {
      a = this.node.current.matches(":focus-visible");
    } catch {
      a = !0;
    }
    !a ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = jl(
      zl(this.node.current, "focus", () => this.onFocus()),
      zl(this.node.current, "blur", () => this.onBlur())
    );
  }
  unmount() {}
}
const s0 = (i, a) => (a ? (i === a ? !0 : s0(i, a.parentElement)) : !1),
  dE = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function mE(i) {
  return dE.has(i.tagName) || i.tabIndex !== -1;
}
const Rl = new WeakSet();
function gy(i) {
  return (a) => {
    a.key === "Enter" && i(a);
  };
}
function nc(i, a) {
  i.dispatchEvent(
    new PointerEvent("pointer" + a, { isPrimary: !0, bubbles: !0 })
  );
}
const pE = (i, a) => {
  const s = i.currentTarget;
  if (!s) return;
  const u = gy(() => {
    if (Rl.has(s)) return;
    nc(s, "down");
    const c = gy(() => {
        nc(s, "up");
      }),
      h = () => nc(s, "cancel");
    s.addEventListener("keyup", c, a), s.addEventListener("blur", h, a);
  });
  s.addEventListener("keydown", u, a),
    s.addEventListener("blur", () => s.removeEventListener("keydown", u), a);
};
function vy(i) {
  return cf(i) && !Yg();
}
function yE(i, a, s = {}) {
  const [u, c, h] = l0(i, s),
    f = (m) => {
      const y = m.currentTarget;
      if (!y || !vy(m) || Rl.has(y)) return;
      Rl.add(y), gu(m, "set");
      const p = a(y, m),
        g = (M, O) => {
          y.removeEventListener("pointerup", S),
            y.removeEventListener("pointercancel", T),
            gu(M, "release"),
            !(!vy(M) || !Rl.has(y)) &&
              (Rl.delete(y), typeof p == "function" && p(M, { success: O }));
        },
        S = (M) => {
          (
            M.isTrusted
              ? gE(
                  M,
                  y instanceof Element
                    ? y.getBoundingClientRect()
                    : {
                        left: 0,
                        top: 0,
                        right: window.innerWidth,
                        bottom: window.innerHeight,
                      }
                )
              : !1
          )
            ? g(M, !1)
            : g(M, !(y instanceof Element) || s0(y, M.target));
        },
        T = (M) => {
          g(M, !1);
        };
      y.addEventListener("pointerup", S, c),
        y.addEventListener("pointercancel", T, c),
        y.addEventListener("lostpointercapture", T, c);
    };
  return (
    u.forEach((m) => {
      m = s.useGlobalTarget ? window : m;
      let y = !1;
      m instanceof HTMLElement &&
        ((y = !0),
        !mE(m) && m.getAttribute("tabindex") === null && (m.tabIndex = 0)),
        m.addEventListener("pointerdown", f, c),
        y && m.addEventListener("focus", (p) => pE(p, c), c);
    }),
    h
  );
}
function gE(i, a) {
  return (
    i.clientX < a.left ||
    i.clientX > a.right ||
    i.clientY < a.top ||
    i.clientY > a.bottom
  );
}
function Sy(i, a, s) {
  const { props: u } = i;
  if (i.current instanceof HTMLButtonElement && i.current.disabled) return;
  i.animationState &&
    u.whileTap &&
    i.animationState.setActive("whileTap", s === "Start");
  const c = "onTap" + (s === "End" ? "" : s),
    h = u[c];
  h && Dt.postRender(() => h(a, Hl(a)));
}
class vE extends Jn {
  mount() {
    const { current: a } = this.node;
    a &&
      (this.unmount = yE(
        a,
        (s, u) => (
          Sy(this.node, u, "Start"),
          (c, { success: h }) => Sy(this.node, c, h ? "End" : "Cancel")
        ),
        { useGlobalTarget: this.node.props.globalTapTarget }
      ));
  }
  unmount() {}
}
const Ac = new WeakMap(),
  ic = new WeakMap(),
  SE = (i) => {
    const a = Ac.get(i.target);
    a && a(i);
  },
  bE = (i) => {
    i.forEach(SE);
  };
function TE({ root: i, ...a }) {
  const s = i || document;
  ic.has(s) || ic.set(s, {});
  const u = ic.get(s),
    c = JSON.stringify(a);
  return u[c] || (u[c] = new IntersectionObserver(bE, { root: i, ...a })), u[c];
}
function AE(i, a, s) {
  const u = TE(a);
  return (
    Ac.set(i, s),
    u.observe(i),
    () => {
      Ac.delete(i), u.unobserve(i);
    }
  );
}
const EE = { some: 0, all: 1 };
class RE extends Jn {
  constructor() {
    super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
  }
  startObserver() {
    this.unmount();
    const { viewport: a = {} } = this.node.getProps(),
      { root: s, margin: u, amount: c = "some", once: h } = a,
      f = {
        root: s ? s.current : void 0,
        rootMargin: u,
        threshold: typeof c == "number" ? c : EE[c],
      },
      m = (y) => {
        const { isIntersecting: p } = y;
        if (
          this.isInView === p ||
          ((this.isInView = p), h && !p && this.hasEnteredView)
        )
          return;
        p && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", p);
        const { onViewportEnter: g, onViewportLeave: S } = this.node.getProps(),
          T = p ? g : S;
        T && T(y);
      };
    return AE(this.node.current, f, m);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: a, prevProps: s } = this.node;
    ["amount", "margin", "root"].some(DE(a, s)) && this.startObserver();
  }
  unmount() {}
}
function DE({ viewport: i = {} }, { viewport: a = {} } = {}) {
  return (s) => i[s] !== a[s];
}
const xE = {
    inView: { Feature: RE },
    tap: { Feature: vE },
    focus: { Feature: hE },
    hover: { Feature: fE },
  },
  OE = { layout: { ProjectionNode: a0, MeasureLayout: Jg } },
  Ec = { current: null },
  u0 = { current: !1 };
function ME() {
  if (((u0.current = !0), !!Uc))
    if (window.matchMedia) {
      const i = window.matchMedia("(prefers-reduced-motion)"),
        a = () => (Ec.current = i.matches);
      i.addListener(a), a();
    } else Ec.current = !1;
}
const CE = [...Mg, ne, kn],
  _E = (i) => CE.find(Og(i)),
  wE = new WeakMap();
function UE(i, a, s) {
  for (const u in a) {
    const c = a[u],
      h = s[u];
    if (ae(c)) i.addValue(u, c);
    else if (ae(h)) i.addValue(u, Ul(c, { owner: i }));
    else if (h !== c)
      if (i.hasValue(u)) {
        const f = i.getValue(u);
        f.liveStyle === !0 ? f.jump(c) : f.hasAnimated || f.set(c);
      } else {
        const f = i.getStaticValue(u);
        i.addValue(u, Ul(f !== void 0 ? f : c, { owner: i }));
      }
  }
  for (const u in s) a[u] === void 0 && i.removeValue(u);
  return a;
}
const by = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete",
];
class VE {
  scrapeMotionValuesFromProps(a, s, u) {
    return {};
  }
  constructor(
    {
      parent: a,
      props: s,
      presenceContext: u,
      reducedMotionConfig: c,
      blockInitialAnimation: h,
      visualState: f,
    },
    m = {}
  ) {
    (this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.KeyframeResolver = sf),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection
          ));
      }),
      (this.renderScheduledAt = 0),
      (this.scheduleRender = () => {
        const M = en.now();
        this.renderScheduledAt < M &&
          ((this.renderScheduledAt = M), Dt.render(this.render, !1, !0));
      });
    const { latestValues: y, renderState: p, onUpdate: g } = f;
    (this.onUpdate = g),
      (this.latestValues = y),
      (this.baseTarget = { ...y }),
      (this.initialValues = s.initial ? { ...y } : {}),
      (this.renderState = p),
      (this.parent = a),
      (this.props = s),
      (this.presenceContext = u),
      (this.depth = a ? a.depth + 1 : 0),
      (this.reducedMotionConfig = c),
      (this.options = m),
      (this.blockInitialAnimation = !!h),
      (this.isControllingVariants = Au(s)),
      (this.isVariantNode = Yy(s)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(a && a.current));
    const { willChange: S, ...T } = this.scrapeMotionValuesFromProps(
      s,
      {},
      this
    );
    for (const M in T) {
      const O = T[M];
      y[M] !== void 0 && ae(O) && O.set(y[M], !1);
    }
  }
  mount(a) {
    (this.current = a),
      wE.set(a, this),
      this.projection && !this.projection.instance && this.projection.mount(a),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((s, u) => this.bindToMotionValue(u, s)),
      u0.current || ME(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never"
          ? !1
          : this.reducedMotionConfig === "always"
          ? !0
          : Ec.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext);
  }
  unmount() {
    this.projection && this.projection.unmount(),
      Fn(this.notifyUpdate),
      Fn(this.render),
      this.valueSubscriptions.forEach((a) => a()),
      this.valueSubscriptions.clear(),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent && this.parent.children.delete(this);
    for (const a in this.events) this.events[a].clear();
    for (const a in this.features) {
      const s = this.features[a];
      s && (s.unmount(), (s.isMounted = !1));
    }
    this.current = null;
  }
  bindToMotionValue(a, s) {
    this.valueSubscriptions.has(a) && this.valueSubscriptions.get(a)();
    const u = xi.has(a);
    u && this.onBindTransform && this.onBindTransform();
    const c = s.on("change", (m) => {
        (this.latestValues[a] = m),
          this.props.onUpdate && Dt.preRender(this.notifyUpdate),
          u && this.projection && (this.projection.isTransformDirty = !0);
      }),
      h = s.on("renderRequest", this.scheduleRender);
    let f;
    window.MotionCheckAppearSync &&
      (f = window.MotionCheckAppearSync(this, a, s)),
      this.valueSubscriptions.set(a, () => {
        c(), h(), f && f(), s.owner && s.stop();
      });
  }
  sortNodePosition(a) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== a.type
      ? 0
      : this.sortInstanceNodePosition(this.current, a.current);
  }
  updateFeatures() {
    let a = "animation";
    for (a in pa) {
      const s = pa[a];
      if (!s) continue;
      const { isEnabled: u, Feature: c } = s;
      if (
        (!this.features[a] &&
          c &&
          u(this.props) &&
          (this.features[a] = new c(this)),
        this.features[a])
      ) {
        const h = this.features[a];
        h.isMounted ? h.update() : (h.mount(), (h.isMounted = !0));
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : Nt();
  }
  getStaticValue(a) {
    return this.latestValues[a];
  }
  setStaticValue(a, s) {
    this.latestValues[a] = s;
  }
  update(a, s) {
    (a.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = a),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = s);
    for (let u = 0; u < by.length; u++) {
      const c = by[u];
      this.propEventSubscriptions[c] &&
        (this.propEventSubscriptions[c](),
        delete this.propEventSubscriptions[c]);
      const h = "on" + c,
        f = a[h];
      f && (this.propEventSubscriptions[c] = this.on(c, f));
    }
    (this.prevMotionValues = UE(
      this,
      this.scrapeMotionValuesFromProps(a, this.prevProps, this),
      this.prevMotionValues
    )),
      this.handleChildMotionValue && this.handleChildMotionValue(),
      this.onUpdate && this.onUpdate(this);
  }
  getProps() {
    return this.props;
  }
  getVariant(a) {
    return this.props.variants ? this.props.variants[a] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
      ? this.parent.getClosestVariantNode()
      : void 0;
  }
  addVariantChild(a) {
    const s = this.getClosestVariantNode();
    if (s)
      return (
        s.variantChildren && s.variantChildren.add(a),
        () => s.variantChildren.delete(a)
      );
  }
  addValue(a, s) {
    const u = this.values.get(a);
    s !== u &&
      (u && this.removeValue(a),
      this.bindToMotionValue(a, s),
      this.values.set(a, s),
      (this.latestValues[a] = s.get()));
  }
  removeValue(a) {
    this.values.delete(a);
    const s = this.valueSubscriptions.get(a);
    s && (s(), this.valueSubscriptions.delete(a)),
      delete this.latestValues[a],
      this.removeValueFromRenderState(a, this.renderState);
  }
  hasValue(a) {
    return this.values.has(a);
  }
  getValue(a, s) {
    if (this.props.values && this.props.values[a]) return this.props.values[a];
    let u = this.values.get(a);
    return (
      u === void 0 &&
        s !== void 0 &&
        ((u = Ul(s === null ? void 0 : s, { owner: this })),
        this.addValue(a, u)),
      u
    );
  }
  readValue(a, s) {
    var u;
    let c =
      this.latestValues[a] !== void 0 || !this.current
        ? this.latestValues[a]
        : (u = this.getBaseTargetFromProps(this.props, a)) !== null &&
          u !== void 0
        ? u
        : this.readValueFromInstance(this.current, a, this.options);
    return (
      c != null &&
        (typeof c == "string" && (Dg(c) || yg(c))
          ? (c = parseFloat(c))
          : !_E(c) && kn.test(s) && (c = Ag(a, s)),
        this.setBaseTarget(a, ae(c) ? c.get() : c)),
      ae(c) ? c.get() : c
    );
  }
  setBaseTarget(a, s) {
    this.baseTarget[a] = s;
  }
  getBaseTarget(a) {
    var s;
    const { initial: u } = this.props;
    let c;
    if (typeof u == "string" || typeof u == "object") {
      const f = Qc(
        this.props,
        u,
        (s = this.presenceContext) === null || s === void 0 ? void 0 : s.custom
      );
      f && (c = f[a]);
    }
    if (u && c !== void 0) return c;
    const h = this.getBaseTargetFromProps(this.props, a);
    return h !== void 0 && !ae(h)
      ? h
      : this.initialValues[a] !== void 0 && c === void 0
      ? void 0
      : this.baseTarget[a];
  }
  on(a, s) {
    return this.events[a] || (this.events[a] = new Jc()), this.events[a].add(s);
  }
  notify(a, ...s) {
    this.events[a] && this.events[a].notify(...s);
  }
}
class r0 extends VE {
  constructor() {
    super(...arguments), (this.KeyframeResolver = Cg);
  }
  sortInstanceNodePosition(a, s) {
    return a.compareDocumentPosition(s) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(a, s) {
    return a.style ? a.style[s] : void 0;
  }
  removeValueFromRenderState(a, { vars: s, style: u }) {
    delete s[a], delete u[a];
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: a } = this.props;
    ae(a) &&
      (this.childSubscription = a.on("change", (s) => {
        this.current && (this.current.textContent = `${s}`);
      }));
  }
}
function zE(i) {
  return window.getComputedStyle(i);
}
class BE extends r0 {
  constructor() {
    super(...arguments), (this.type = "html"), (this.renderInstance = $y);
  }
  readValueFromInstance(a, s) {
    if (xi.has(s)) {
      const u = lf(s);
      return (u && u.default) || 0;
    } else {
      const u = zE(a),
        c = (Lc(s) ? u.getPropertyValue(s) : u[s]) || 0;
      return typeof c == "string" ? c.trim() : c;
    }
  }
  measureInstanceViewportBox(a, { transformPagePoint: s }) {
    return Pg(a, s);
  }
  build(a, s, u) {
    qc(a, s, u.transformTemplate);
  }
  scrapeMotionValuesFromProps(a, s, u) {
    return Zc(a, s, u);
  }
}
class NE extends r0 {
  constructor() {
    super(...arguments),
      (this.type = "svg"),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = Nt),
      (this.updateDimensions = () => {
        this.current &&
          !this.renderState.dimensions &&
          Wy(this.current, this.renderState);
      });
  }
  getBaseTargetFromProps(a, s) {
    return a[s];
  }
  readValueFromInstance(a, s) {
    if (xi.has(s)) {
      const u = lf(s);
      return (u && u.default) || 0;
    }
    return (s = Iy.has(s) ? s : Bc(s)), a.getAttribute(s);
  }
  scrapeMotionValuesFromProps(a, s, u) {
    return eg(a, s, u);
  }
  onBindTransform() {
    this.current &&
      !this.renderState.dimensions &&
      Dt.postRender(this.updateDimensions);
  }
  build(a, s, u) {
    Xc(a, s, this.isSVGTag, u.transformTemplate);
  }
  renderInstance(a, s, u, c) {
    tg(a, s, u, c);
  }
  mount(a) {
    (this.isSVGTag = Kc(a.tagName)), super.mount(a);
  }
}
const LE = (i, a) =>
    Gc(i) ? new NE(a) : new BE(a, { allowProjection: i !== it.Fragment }),
  jE = ub({ ...$T, ...xE, ...rE, ...OE }, LE),
  o0 = E1(jE);
function HE() {
  return Lt.jsx("main", {
    className:
      "w-full h-screen font-mono text-slate-100 flex gap-8 justify-center items-center bg-slate-800",
    children: Lt.jsx(o0.p, {
      initial: { y: 0 },
      transition: { repeat: 1 / 0, duration: 3, ease: "easeIn" },
      animate: { y: [0, 10, 40, 10, 0] },
      children: "/bmFzZ29y",
    }),
  });
}
const qE = "./nasgor.webp";
function c0(i, a) {
  return function () {
    return i.apply(a, arguments);
  };
}
const { toString: YE } = Object.prototype,
  { getPrototypeOf: ff } = Object,
  Ru = ((i) => (a) => {
    const s = YE.call(a);
    return i[s] || (i[s] = s.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  Qe = (i) => ((i = i.toLowerCase()), (a) => Ru(a) === i),
  Du = (i) => (a) => typeof a === i,
  { isArray: ba } = Array,
  Bl = Du("undefined");
function GE(i) {
  return (
    i !== null &&
    !Bl(i) &&
    i.constructor !== null &&
    !Bl(i.constructor) &&
    Ae(i.constructor.isBuffer) &&
    i.constructor.isBuffer(i)
  );
}
const f0 = Qe("ArrayBuffer");
function XE(i) {
  let a;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (a = ArrayBuffer.isView(i))
      : (a = i && i.buffer && f0(i.buffer)),
    a
  );
}
const KE = Du("string"),
  Ae = Du("function"),
  h0 = Du("number"),
  xu = (i) => i !== null && typeof i == "object",
  QE = (i) => i === !0 || i === !1,
  ru = (i) => {
    if (Ru(i) !== "object") return !1;
    const a = ff(i);
    return (
      (a === null ||
        a === Object.prototype ||
        Object.getPrototypeOf(a) === null) &&
      !(Symbol.toStringTag in i) &&
      !(Symbol.iterator in i)
    );
  },
  ZE = Qe("Date"),
  PE = Qe("File"),
  FE = Qe("Blob"),
  kE = Qe("FileList"),
  JE = (i) => xu(i) && Ae(i.pipe),
  WE = (i) => {
    let a;
    return (
      i &&
      ((typeof FormData == "function" && i instanceof FormData) ||
        (Ae(i.append) &&
          ((a = Ru(i)) === "formdata" ||
            (a === "object" &&
              Ae(i.toString) &&
              i.toString() === "[object FormData]"))))
    );
  },
  $E = Qe("URLSearchParams"),
  [IE, tR, eR, nR] = ["ReadableStream", "Request", "Response", "Headers"].map(
    Qe
  ),
  iR = (i) =>
    i.trim ? i.trim() : i.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function ql(i, a, { allOwnKeys: s = !1 } = {}) {
  if (i === null || typeof i > "u") return;
  let u, c;
  if ((typeof i != "object" && (i = [i]), ba(i)))
    for (u = 0, c = i.length; u < c; u++) a.call(null, i[u], u, i);
  else {
    const h = s ? Object.getOwnPropertyNames(i) : Object.keys(i),
      f = h.length;
    let m;
    for (u = 0; u < f; u++) (m = h[u]), a.call(null, i[m], m, i);
  }
}
function d0(i, a) {
  a = a.toLowerCase();
  const s = Object.keys(i);
  let u = s.length,
    c;
  for (; u-- > 0; ) if (((c = s[u]), a === c.toLowerCase())) return c;
  return null;
}
const Ai =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : global,
  m0 = (i) => !Bl(i) && i !== Ai;
function Rc() {
  const { caseless: i } = (m0(this) && this) || {},
    a = {},
    s = (u, c) => {
      const h = (i && d0(a, c)) || c;
      ru(a[h]) && ru(u)
        ? (a[h] = Rc(a[h], u))
        : ru(u)
        ? (a[h] = Rc({}, u))
        : ba(u)
        ? (a[h] = u.slice())
        : (a[h] = u);
    };
  for (let u = 0, c = arguments.length; u < c; u++)
    arguments[u] && ql(arguments[u], s);
  return a;
}
const aR = (i, a, s, { allOwnKeys: u } = {}) => (
    ql(
      a,
      (c, h) => {
        s && Ae(c) ? (i[h] = c0(c, s)) : (i[h] = c);
      },
      { allOwnKeys: u }
    ),
    i
  ),
  lR = (i) => (i.charCodeAt(0) === 65279 && (i = i.slice(1)), i),
  sR = (i, a, s, u) => {
    (i.prototype = Object.create(a.prototype, u)),
      (i.prototype.constructor = i),
      Object.defineProperty(i, "super", { value: a.prototype }),
      s && Object.assign(i.prototype, s);
  },
  uR = (i, a, s, u) => {
    let c, h, f;
    const m = {};
    if (((a = a || {}), i == null)) return a;
    do {
      for (c = Object.getOwnPropertyNames(i), h = c.length; h-- > 0; )
        (f = c[h]), (!u || u(f, i, a)) && !m[f] && ((a[f] = i[f]), (m[f] = !0));
      i = s !== !1 && ff(i);
    } while (i && (!s || s(i, a)) && i !== Object.prototype);
    return a;
  },
  rR = (i, a, s) => {
    (i = String(i)),
      (s === void 0 || s > i.length) && (s = i.length),
      (s -= a.length);
    const u = i.indexOf(a, s);
    return u !== -1 && u === s;
  },
  oR = (i) => {
    if (!i) return null;
    if (ba(i)) return i;
    let a = i.length;
    if (!h0(a)) return null;
    const s = new Array(a);
    for (; a-- > 0; ) s[a] = i[a];
    return s;
  },
  cR = (
    (i) => (a) =>
      i && a instanceof i
  )(typeof Uint8Array < "u" && ff(Uint8Array)),
  fR = (i, a) => {
    const u = (i && i[Symbol.iterator]).call(i);
    let c;
    for (; (c = u.next()) && !c.done; ) {
      const h = c.value;
      a.call(i, h[0], h[1]);
    }
  },
  hR = (i, a) => {
    let s;
    const u = [];
    for (; (s = i.exec(a)) !== null; ) u.push(s);
    return u;
  },
  dR = Qe("HTMLFormElement"),
  mR = (i) =>
    i.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (s, u, c) {
      return u.toUpperCase() + c;
    }),
  Ty = (
    ({ hasOwnProperty: i }) =>
    (a, s) =>
      i.call(a, s)
  )(Object.prototype),
  pR = Qe("RegExp"),
  p0 = (i, a) => {
    const s = Object.getOwnPropertyDescriptors(i),
      u = {};
    ql(s, (c, h) => {
      let f;
      (f = a(c, h, i)) !== !1 && (u[h] = f || c);
    }),
      Object.defineProperties(i, u);
  },
  yR = (i) => {
    p0(i, (a, s) => {
      if (Ae(i) && ["arguments", "caller", "callee"].indexOf(s) !== -1)
        return !1;
      const u = i[s];
      if (Ae(u)) {
        if (((a.enumerable = !1), "writable" in a)) {
          a.writable = !1;
          return;
        }
        a.set ||
          (a.set = () => {
            throw Error("Can not rewrite read-only method '" + s + "'");
          });
      }
    });
  },
  gR = (i, a) => {
    const s = {},
      u = (c) => {
        c.forEach((h) => {
          s[h] = !0;
        });
      };
    return ba(i) ? u(i) : u(String(i).split(a)), s;
  },
  vR = () => {},
  SR = (i, a) => (i != null && Number.isFinite((i = +i)) ? i : a),
  ac = "abcdefghijklmnopqrstuvwxyz",
  Ay = "0123456789",
  y0 = { DIGIT: Ay, ALPHA: ac, ALPHA_DIGIT: ac + ac.toUpperCase() + Ay },
  bR = (i = 16, a = y0.ALPHA_DIGIT) => {
    let s = "";
    const { length: u } = a;
    for (; i--; ) s += a[(Math.random() * u) | 0];
    return s;
  };
function TR(i) {
  return !!(
    i &&
    Ae(i.append) &&
    i[Symbol.toStringTag] === "FormData" &&
    i[Symbol.iterator]
  );
}
const AR = (i) => {
    const a = new Array(10),
      s = (u, c) => {
        if (xu(u)) {
          if (a.indexOf(u) >= 0) return;
          if (!("toJSON" in u)) {
            a[c] = u;
            const h = ba(u) ? [] : {};
            return (
              ql(u, (f, m) => {
                const y = s(f, c + 1);
                !Bl(y) && (h[m] = y);
              }),
              (a[c] = void 0),
              h
            );
          }
        }
        return u;
      };
    return s(i, 0);
  },
  ER = Qe("AsyncFunction"),
  RR = (i) => i && (xu(i) || Ae(i)) && Ae(i.then) && Ae(i.catch),
  g0 = ((i, a) =>
    i
      ? setImmediate
      : a
      ? ((s, u) => (
          Ai.addEventListener(
            "message",
            ({ source: c, data: h }) => {
              c === Ai && h === s && u.length && u.shift()();
            },
            !1
          ),
          (c) => {
            u.push(c), Ai.postMessage(s, "*");
          }
        ))(`axios@${Math.random()}`, [])
      : (s) => setTimeout(s))(
    typeof setImmediate == "function",
    Ae(Ai.postMessage)
  ),
  DR =
    typeof queueMicrotask < "u"
      ? queueMicrotask.bind(Ai)
      : (typeof process < "u" && process.nextTick) || g0,
  w = {
    isArray: ba,
    isArrayBuffer: f0,
    isBuffer: GE,
    isFormData: WE,
    isArrayBufferView: XE,
    isString: KE,
    isNumber: h0,
    isBoolean: QE,
    isObject: xu,
    isPlainObject: ru,
    isReadableStream: IE,
    isRequest: tR,
    isResponse: eR,
    isHeaders: nR,
    isUndefined: Bl,
    isDate: ZE,
    isFile: PE,
    isBlob: FE,
    isRegExp: pR,
    isFunction: Ae,
    isStream: JE,
    isURLSearchParams: $E,
    isTypedArray: cR,
    isFileList: kE,
    forEach: ql,
    merge: Rc,
    extend: aR,
    trim: iR,
    stripBOM: lR,
    inherits: sR,
    toFlatObject: uR,
    kindOf: Ru,
    kindOfTest: Qe,
    endsWith: rR,
    toArray: oR,
    forEachEntry: fR,
    matchAll: hR,
    isHTMLForm: dR,
    hasOwnProperty: Ty,
    hasOwnProp: Ty,
    reduceDescriptors: p0,
    freezeMethods: yR,
    toObjectSet: gR,
    toCamelCase: mR,
    noop: vR,
    toFiniteNumber: SR,
    findKey: d0,
    global: Ai,
    isContextDefined: m0,
    ALPHABET: y0,
    generateString: bR,
    isSpecCompliantForm: TR,
    toJSONObject: AR,
    isAsyncFn: ER,
    isThenable: RR,
    setImmediate: g0,
    asap: DR,
  };
function st(i, a, s, u, c) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = i),
    (this.name = "AxiosError"),
    a && (this.code = a),
    s && (this.config = s),
    u && (this.request = u),
    c && ((this.response = c), (this.status = c.status ? c.status : null));
}
w.inherits(st, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: w.toJSONObject(this.config),
      code: this.code,
      status: this.status,
    };
  },
});
const v0 = st.prototype,
  S0 = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL",
].forEach((i) => {
  S0[i] = { value: i };
});
Object.defineProperties(st, S0);
Object.defineProperty(v0, "isAxiosError", { value: !0 });
st.from = (i, a, s, u, c, h) => {
  const f = Object.create(v0);
  return (
    w.toFlatObject(
      i,
      f,
      function (y) {
        return y !== Error.prototype;
      },
      (m) => m !== "isAxiosError"
    ),
    st.call(f, i.message, a, s, u, c),
    (f.cause = i),
    (f.name = i.name),
    h && Object.assign(f, h),
    f
  );
};
const xR = null;
function Dc(i) {
  return w.isPlainObject(i) || w.isArray(i);
}
function b0(i) {
  return w.endsWith(i, "[]") ? i.slice(0, -2) : i;
}
function Ey(i, a, s) {
  return i
    ? i
        .concat(a)
        .map(function (c, h) {
          return (c = b0(c)), !s && h ? "[" + c + "]" : c;
        })
        .join(s ? "." : "")
    : a;
}
function OR(i) {
  return w.isArray(i) && !i.some(Dc);
}
const MR = w.toFlatObject(w, {}, null, function (a) {
  return /^is[A-Z]/.test(a);
});
function Ou(i, a, s) {
  if (!w.isObject(i)) throw new TypeError("target must be an object");
  (a = a || new FormData()),
    (s = w.toFlatObject(
      s,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (_, U) {
        return !w.isUndefined(U[_]);
      }
    ));
  const u = s.metaTokens,
    c = s.visitor || g,
    h = s.dots,
    f = s.indexes,
    y = (s.Blob || (typeof Blob < "u" && Blob)) && w.isSpecCompliantForm(a);
  if (!w.isFunction(c)) throw new TypeError("visitor must be a function");
  function p(O) {
    if (O === null) return "";
    if (w.isDate(O)) return O.toISOString();
    if (!y && w.isBlob(O))
      throw new st("Blob is not supported. Use a Buffer instead.");
    return w.isArrayBuffer(O) || w.isTypedArray(O)
      ? y && typeof Blob == "function"
        ? new Blob([O])
        : Buffer.from(O)
      : O;
  }
  function g(O, _, U) {
    let N = O;
    if (O && !U && typeof O == "object") {
      if (w.endsWith(_, "{}"))
        (_ = u ? _ : _.slice(0, -2)), (O = JSON.stringify(O));
      else if (
        (w.isArray(O) && OR(O)) ||
        ((w.isFileList(O) || w.endsWith(_, "[]")) && (N = w.toArray(O)))
      )
        return (
          (_ = b0(_)),
          N.forEach(function (Y, nt) {
            !(w.isUndefined(Y) || Y === null) &&
              a.append(
                f === !0 ? Ey([_], nt, h) : f === null ? _ : _ + "[]",
                p(Y)
              );
          }),
          !1
        );
    }
    return Dc(O) ? !0 : (a.append(Ey(U, _, h), p(O)), !1);
  }
  const S = [],
    T = Object.assign(MR, {
      defaultVisitor: g,
      convertValue: p,
      isVisitable: Dc,
    });
  function M(O, _) {
    if (!w.isUndefined(O)) {
      if (S.indexOf(O) !== -1)
        throw Error("Circular reference detected in " + _.join("."));
      S.push(O),
        w.forEach(O, function (N, q) {
          (!(w.isUndefined(N) || N === null) &&
            c.call(a, N, w.isString(q) ? q.trim() : q, _, T)) === !0 &&
            M(N, _ ? _.concat(q) : [q]);
        }),
        S.pop();
    }
  }
  if (!w.isObject(i)) throw new TypeError("data must be an object");
  return M(i), a;
}
function Ry(i) {
  const a = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(i).replace(/[!'()~]|%20|%00/g, function (u) {
    return a[u];
  });
}
function hf(i, a) {
  (this._pairs = []), i && Ou(i, this, a);
}
const T0 = hf.prototype;
T0.append = function (a, s) {
  this._pairs.push([a, s]);
};
T0.toString = function (a) {
  const s = a
    ? function (u) {
        return a.call(this, u, Ry);
      }
    : Ry;
  return this._pairs
    .map(function (c) {
      return s(c[0]) + "=" + s(c[1]);
    }, "")
    .join("&");
};
function CR(i) {
  return encodeURIComponent(i)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function A0(i, a, s) {
  if (!a) return i;
  const u = (s && s.encode) || CR;
  w.isFunction(s) && (s = { serialize: s });
  const c = s && s.serialize;
  let h;
  if (
    (c
      ? (h = c(a, s))
      : (h = w.isURLSearchParams(a) ? a.toString() : new hf(a, s).toString(u)),
    h)
  ) {
    const f = i.indexOf("#");
    f !== -1 && (i = i.slice(0, f)),
      (i += (i.indexOf("?") === -1 ? "?" : "&") + h);
  }
  return i;
}
class Dy {
  constructor() {
    this.handlers = [];
  }
  use(a, s, u) {
    return (
      this.handlers.push({
        fulfilled: a,
        rejected: s,
        synchronous: u ? u.synchronous : !1,
        runWhen: u ? u.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(a) {
    this.handlers[a] && (this.handlers[a] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(a) {
    w.forEach(this.handlers, function (u) {
      u !== null && a(u);
    });
  }
}
const E0 = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  _R = typeof URLSearchParams < "u" ? URLSearchParams : hf,
  wR = typeof FormData < "u" ? FormData : null,
  UR = typeof Blob < "u" ? Blob : null,
  VR = {
    isBrowser: !0,
    classes: { URLSearchParams: _R, FormData: wR, Blob: UR },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  df = typeof window < "u" && typeof document < "u",
  xc = (typeof navigator == "object" && navigator) || void 0,
  zR =
    df &&
    (!xc || ["ReactNative", "NativeScript", "NS"].indexOf(xc.product) < 0),
  BR =
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function",
  NR = (df && window.location.href) || "http://localhost",
  LR = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: df,
        hasStandardBrowserEnv: zR,
        hasStandardBrowserWebWorkerEnv: BR,
        navigator: xc,
        origin: NR,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  ie = { ...LR, ...VR };
function jR(i, a) {
  return Ou(
    i,
    new ie.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (s, u, c, h) {
          return ie.isNode && w.isBuffer(s)
            ? (this.append(u, s.toString("base64")), !1)
            : h.defaultVisitor.apply(this, arguments);
        },
      },
      a
    )
  );
}
function HR(i) {
  return w
    .matchAll(/\w+|\[(\w*)]/g, i)
    .map((a) => (a[0] === "[]" ? "" : a[1] || a[0]));
}
function qR(i) {
  const a = {},
    s = Object.keys(i);
  let u;
  const c = s.length;
  let h;
  for (u = 0; u < c; u++) (h = s[u]), (a[h] = i[h]);
  return a;
}
function R0(i) {
  function a(s, u, c, h) {
    let f = s[h++];
    if (f === "__proto__") return !0;
    const m = Number.isFinite(+f),
      y = h >= s.length;
    return (
      (f = !f && w.isArray(c) ? c.length : f),
      y
        ? (w.hasOwnProp(c, f) ? (c[f] = [c[f], u]) : (c[f] = u), !m)
        : ((!c[f] || !w.isObject(c[f])) && (c[f] = []),
          a(s, u, c[f], h) && w.isArray(c[f]) && (c[f] = qR(c[f])),
          !m)
    );
  }
  if (w.isFormData(i) && w.isFunction(i.entries)) {
    const s = {};
    return (
      w.forEachEntry(i, (u, c) => {
        a(HR(u), c, s, 0);
      }),
      s
    );
  }
  return null;
}
function YR(i, a, s) {
  if (w.isString(i))
    try {
      return (a || JSON.parse)(i), w.trim(i);
    } catch (u) {
      if (u.name !== "SyntaxError") throw u;
    }
  return (s || JSON.stringify)(i);
}
const Yl = {
  transitional: E0,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function (a, s) {
      const u = s.getContentType() || "",
        c = u.indexOf("application/json") > -1,
        h = w.isObject(a);
      if ((h && w.isHTMLForm(a) && (a = new FormData(a)), w.isFormData(a)))
        return c ? JSON.stringify(R0(a)) : a;
      if (
        w.isArrayBuffer(a) ||
        w.isBuffer(a) ||
        w.isStream(a) ||
        w.isFile(a) ||
        w.isBlob(a) ||
        w.isReadableStream(a)
      )
        return a;
      if (w.isArrayBufferView(a)) return a.buffer;
      if (w.isURLSearchParams(a))
        return (
          s.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1
          ),
          a.toString()
        );
      let m;
      if (h) {
        if (u.indexOf("application/x-www-form-urlencoded") > -1)
          return jR(a, this.formSerializer).toString();
        if ((m = w.isFileList(a)) || u.indexOf("multipart/form-data") > -1) {
          const y = this.env && this.env.FormData;
          return Ou(
            m ? { "files[]": a } : a,
            y && new y(),
            this.formSerializer
          );
        }
      }
      return h || c ? (s.setContentType("application/json", !1), YR(a)) : a;
    },
  ],
  transformResponse: [
    function (a) {
      const s = this.transitional || Yl.transitional,
        u = s && s.forcedJSONParsing,
        c = this.responseType === "json";
      if (w.isResponse(a) || w.isReadableStream(a)) return a;
      if (a && w.isString(a) && ((u && !this.responseType) || c)) {
        const f = !(s && s.silentJSONParsing) && c;
        try {
          return JSON.parse(a);
        } catch (m) {
          if (f)
            throw m.name === "SyntaxError"
              ? st.from(m, st.ERR_BAD_RESPONSE, this, null, this.response)
              : m;
        }
      }
      return a;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: ie.classes.FormData, Blob: ie.classes.Blob },
  validateStatus: function (a) {
    return a >= 200 && a < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0,
    },
  },
};
w.forEach(["delete", "get", "head", "post", "put", "patch"], (i) => {
  Yl.headers[i] = {};
});
const GR = w.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ]),
  XR = (i) => {
    const a = {};
    let s, u, c;
    return (
      i &&
        i
          .split(
            `
`
          )
          .forEach(function (f) {
            (c = f.indexOf(":")),
              (s = f.substring(0, c).trim().toLowerCase()),
              (u = f.substring(c + 1).trim()),
              !(!s || (a[s] && GR[s])) &&
                (s === "set-cookie"
                  ? a[s]
                    ? a[s].push(u)
                    : (a[s] = [u])
                  : (a[s] = a[s] ? a[s] + ", " + u : u));
          }),
      a
    );
  },
  xy = Symbol("internals");
function Al(i) {
  return i && String(i).trim().toLowerCase();
}
function ou(i) {
  return i === !1 || i == null ? i : w.isArray(i) ? i.map(ou) : String(i);
}
function KR(i) {
  const a = Object.create(null),
    s = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let u;
  for (; (u = s.exec(i)); ) a[u[1]] = u[2];
  return a;
}
const QR = (i) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(i.trim());
function lc(i, a, s, u, c) {
  if (w.isFunction(u)) return u.call(this, a, s);
  if ((c && (a = s), !!w.isString(a))) {
    if (w.isString(u)) return a.indexOf(u) !== -1;
    if (w.isRegExp(u)) return u.test(a);
  }
}
function ZR(i) {
  return i
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (a, s, u) => s.toUpperCase() + u);
}
function PR(i, a) {
  const s = w.toCamelCase(" " + a);
  ["get", "set", "has"].forEach((u) => {
    Object.defineProperty(i, u + s, {
      value: function (c, h, f) {
        return this[u].call(this, a, c, h, f);
      },
      configurable: !0,
    });
  });
}
let de = class {
  constructor(a) {
    a && this.set(a);
  }
  set(a, s, u) {
    const c = this;
    function h(m, y, p) {
      const g = Al(y);
      if (!g) throw new Error("header name must be a non-empty string");
      const S = w.findKey(c, g);
      (!S || c[S] === void 0 || p === !0 || (p === void 0 && c[S] !== !1)) &&
        (c[S || y] = ou(m));
    }
    const f = (m, y) => w.forEach(m, (p, g) => h(p, g, y));
    if (w.isPlainObject(a) || a instanceof this.constructor) f(a, s);
    else if (w.isString(a) && (a = a.trim()) && !QR(a)) f(XR(a), s);
    else if (w.isHeaders(a)) for (const [m, y] of a.entries()) h(y, m, u);
    else a != null && h(s, a, u);
    return this;
  }
  get(a, s) {
    if (((a = Al(a)), a)) {
      const u = w.findKey(this, a);
      if (u) {
        const c = this[u];
        if (!s) return c;
        if (s === !0) return KR(c);
        if (w.isFunction(s)) return s.call(this, c, u);
        if (w.isRegExp(s)) return s.exec(c);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(a, s) {
    if (((a = Al(a)), a)) {
      const u = w.findKey(this, a);
      return !!(u && this[u] !== void 0 && (!s || lc(this, this[u], u, s)));
    }
    return !1;
  }
  delete(a, s) {
    const u = this;
    let c = !1;
    function h(f) {
      if (((f = Al(f)), f)) {
        const m = w.findKey(u, f);
        m && (!s || lc(u, u[m], m, s)) && (delete u[m], (c = !0));
      }
    }
    return w.isArray(a) ? a.forEach(h) : h(a), c;
  }
  clear(a) {
    const s = Object.keys(this);
    let u = s.length,
      c = !1;
    for (; u--; ) {
      const h = s[u];
      (!a || lc(this, this[h], h, a, !0)) && (delete this[h], (c = !0));
    }
    return c;
  }
  normalize(a) {
    const s = this,
      u = {};
    return (
      w.forEach(this, (c, h) => {
        const f = w.findKey(u, h);
        if (f) {
          (s[f] = ou(c)), delete s[h];
          return;
        }
        const m = a ? ZR(h) : String(h).trim();
        m !== h && delete s[h], (s[m] = ou(c)), (u[m] = !0);
      }),
      this
    );
  }
  concat(...a) {
    return this.constructor.concat(this, ...a);
  }
  toJSON(a) {
    const s = Object.create(null);
    return (
      w.forEach(this, (u, c) => {
        u != null && u !== !1 && (s[c] = a && w.isArray(u) ? u.join(", ") : u);
      }),
      s
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([a, s]) => a + ": " + s).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(a) {
    return a instanceof this ? a : new this(a);
  }
  static concat(a, ...s) {
    const u = new this(a);
    return s.forEach((c) => u.set(c)), u;
  }
  static accessor(a) {
    const u = (this[xy] = this[xy] = { accessors: {} }).accessors,
      c = this.prototype;
    function h(f) {
      const m = Al(f);
      u[m] || (PR(c, f), (u[m] = !0));
    }
    return w.isArray(a) ? a.forEach(h) : h(a), this;
  }
};
de.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
w.reduceDescriptors(de.prototype, ({ value: i }, a) => {
  let s = a[0].toUpperCase() + a.slice(1);
  return {
    get: () => i,
    set(u) {
      this[s] = u;
    },
  };
});
w.freezeMethods(de);
function sc(i, a) {
  const s = this || Yl,
    u = a || s,
    c = de.from(u.headers);
  let h = u.data;
  return (
    w.forEach(i, function (m) {
      h = m.call(s, h, c.normalize(), a ? a.status : void 0);
    }),
    c.normalize(),
    h
  );
}
function D0(i) {
  return !!(i && i.__CANCEL__);
}
function Ta(i, a, s) {
  st.call(this, i ?? "canceled", st.ERR_CANCELED, a, s),
    (this.name = "CanceledError");
}
w.inherits(Ta, st, { __CANCEL__: !0 });
function x0(i, a, s) {
  const u = s.config.validateStatus;
  !s.status || !u || u(s.status)
    ? i(s)
    : a(
        new st(
          "Request failed with status code " + s.status,
          [st.ERR_BAD_REQUEST, st.ERR_BAD_RESPONSE][
            Math.floor(s.status / 100) - 4
          ],
          s.config,
          s.request,
          s
        )
      );
}
function FR(i) {
  const a = /^([-+\w]{1,25})(:?\/\/|:)/.exec(i);
  return (a && a[1]) || "";
}
function kR(i, a) {
  i = i || 10;
  const s = new Array(i),
    u = new Array(i);
  let c = 0,
    h = 0,
    f;
  return (
    (a = a !== void 0 ? a : 1e3),
    function (y) {
      const p = Date.now(),
        g = u[h];
      f || (f = p), (s[c] = y), (u[c] = p);
      let S = h,
        T = 0;
      for (; S !== c; ) (T += s[S++]), (S = S % i);
      if (((c = (c + 1) % i), c === h && (h = (h + 1) % i), p - f < a)) return;
      const M = g && p - g;
      return M ? Math.round((T * 1e3) / M) : void 0;
    }
  );
}
function JR(i, a) {
  let s = 0,
    u = 1e3 / a,
    c,
    h;
  const f = (p, g = Date.now()) => {
    (s = g), (c = null), h && (clearTimeout(h), (h = null)), i.apply(null, p);
  };
  return [
    (...p) => {
      const g = Date.now(),
        S = g - s;
      S >= u
        ? f(p, g)
        : ((c = p),
          h ||
            (h = setTimeout(() => {
              (h = null), f(c);
            }, u - S)));
    },
    () => c && f(c),
  ];
}
const vu = (i, a, s = 3) => {
    let u = 0;
    const c = kR(50, 250);
    return JR((h) => {
      const f = h.loaded,
        m = h.lengthComputable ? h.total : void 0,
        y = f - u,
        p = c(y),
        g = f <= m;
      u = f;
      const S = {
        loaded: f,
        total: m,
        progress: m ? f / m : void 0,
        bytes: y,
        rate: p || void 0,
        estimated: p && m && g ? (m - f) / p : void 0,
        event: h,
        lengthComputable: m != null,
        [a ? "download" : "upload"]: !0,
      };
      i(S);
    }, s);
  },
  Oy = (i, a) => {
    const s = i != null;
    return [(u) => a[0]({ lengthComputable: s, total: i, loaded: u }), a[1]];
  },
  My =
    (i) =>
    (...a) =>
      w.asap(() => i(...a)),
  WR = ie.hasStandardBrowserEnv
    ? ((i, a) => (s) => (
        (s = new URL(s, ie.origin)),
        i.protocol === s.protocol &&
          i.host === s.host &&
          (a || i.port === s.port)
      ))(
        new URL(ie.origin),
        ie.navigator && /(msie|trident)/i.test(ie.navigator.userAgent)
      )
    : () => !0,
  $R = ie.hasStandardBrowserEnv
    ? {
        write(i, a, s, u, c, h) {
          const f = [i + "=" + encodeURIComponent(a)];
          w.isNumber(s) && f.push("expires=" + new Date(s).toGMTString()),
            w.isString(u) && f.push("path=" + u),
            w.isString(c) && f.push("domain=" + c),
            h === !0 && f.push("secure"),
            (document.cookie = f.join("; "));
        },
        read(i) {
          const a = document.cookie.match(
            new RegExp("(^|;\\s*)(" + i + ")=([^;]*)")
          );
          return a ? decodeURIComponent(a[3]) : null;
        },
        remove(i) {
          this.write(i, "", Date.now() - 864e5);
        },
      }
    : {
        write() {},
        read() {
          return null;
        },
        remove() {},
      };
function IR(i) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(i);
}
function t2(i, a) {
  return a ? i.replace(/\/?\/$/, "") + "/" + a.replace(/^\/+/, "") : i;
}
function O0(i, a) {
  return i && !IR(a) ? t2(i, a) : a;
}
const Cy = (i) => (i instanceof de ? { ...i } : i);
function Di(i, a) {
  a = a || {};
  const s = {};
  function u(p, g, S, T) {
    return w.isPlainObject(p) && w.isPlainObject(g)
      ? w.merge.call({ caseless: T }, p, g)
      : w.isPlainObject(g)
      ? w.merge({}, g)
      : w.isArray(g)
      ? g.slice()
      : g;
  }
  function c(p, g, S, T) {
    if (w.isUndefined(g)) {
      if (!w.isUndefined(p)) return u(void 0, p, S, T);
    } else return u(p, g, S, T);
  }
  function h(p, g) {
    if (!w.isUndefined(g)) return u(void 0, g);
  }
  function f(p, g) {
    if (w.isUndefined(g)) {
      if (!w.isUndefined(p)) return u(void 0, p);
    } else return u(void 0, g);
  }
  function m(p, g, S) {
    if (S in a) return u(p, g);
    if (S in i) return u(void 0, p);
  }
  const y = {
    url: h,
    method: h,
    data: h,
    baseURL: f,
    transformRequest: f,
    transformResponse: f,
    paramsSerializer: f,
    timeout: f,
    timeoutMessage: f,
    withCredentials: f,
    withXSRFToken: f,
    adapter: f,
    responseType: f,
    xsrfCookieName: f,
    xsrfHeaderName: f,
    onUploadProgress: f,
    onDownloadProgress: f,
    decompress: f,
    maxContentLength: f,
    maxBodyLength: f,
    beforeRedirect: f,
    transport: f,
    httpAgent: f,
    httpsAgent: f,
    cancelToken: f,
    socketPath: f,
    responseEncoding: f,
    validateStatus: m,
    headers: (p, g, S) => c(Cy(p), Cy(g), S, !0),
  };
  return (
    w.forEach(Object.keys(Object.assign({}, i, a)), function (g) {
      const S = y[g] || c,
        T = S(i[g], a[g], g);
      (w.isUndefined(T) && S !== m) || (s[g] = T);
    }),
    s
  );
}
const M0 = (i) => {
    const a = Di({}, i);
    let {
      data: s,
      withXSRFToken: u,
      xsrfHeaderName: c,
      xsrfCookieName: h,
      headers: f,
      auth: m,
    } = a;
    (a.headers = f = de.from(f)),
      (a.url = A0(O0(a.baseURL, a.url), i.params, i.paramsSerializer)),
      m &&
        f.set(
          "Authorization",
          "Basic " +
            btoa(
              (m.username || "") +
                ":" +
                (m.password ? unescape(encodeURIComponent(m.password)) : "")
            )
        );
    let y;
    if (w.isFormData(s)) {
      if (ie.hasStandardBrowserEnv || ie.hasStandardBrowserWebWorkerEnv)
        f.setContentType(void 0);
      else if ((y = f.getContentType()) !== !1) {
        const [p, ...g] = y
          ? y
              .split(";")
              .map((S) => S.trim())
              .filter(Boolean)
          : [];
        f.setContentType([p || "multipart/form-data", ...g].join("; "));
      }
    }
    if (
      ie.hasStandardBrowserEnv &&
      (u && w.isFunction(u) && (u = u(a)), u || (u !== !1 && WR(a.url)))
    ) {
      const p = c && h && $R.read(h);
      p && f.set(c, p);
    }
    return a;
  },
  e2 = typeof XMLHttpRequest < "u",
  n2 =
    e2 &&
    function (i) {
      return new Promise(function (s, u) {
        const c = M0(i);
        let h = c.data;
        const f = de.from(c.headers).normalize();
        let { responseType: m, onUploadProgress: y, onDownloadProgress: p } = c,
          g,
          S,
          T,
          M,
          O;
        function _() {
          M && M(),
            O && O(),
            c.cancelToken && c.cancelToken.unsubscribe(g),
            c.signal && c.signal.removeEventListener("abort", g);
        }
        let U = new XMLHttpRequest();
        U.open(c.method.toUpperCase(), c.url, !0), (U.timeout = c.timeout);
        function N() {
          if (!U) return;
          const Y = de.from(
              "getAllResponseHeaders" in U && U.getAllResponseHeaders()
            ),
            j = {
              data:
                !m || m === "text" || m === "json"
                  ? U.responseText
                  : U.response,
              status: U.status,
              statusText: U.statusText,
              headers: Y,
              config: i,
              request: U,
            };
          x0(
            function (dt) {
              s(dt), _();
            },
            function (dt) {
              u(dt), _();
            },
            j
          ),
            (U = null);
        }
        "onloadend" in U
          ? (U.onloadend = N)
          : (U.onreadystatechange = function () {
              !U ||
                U.readyState !== 4 ||
                (U.status === 0 &&
                  !(U.responseURL && U.responseURL.indexOf("file:") === 0)) ||
                setTimeout(N);
            }),
          (U.onabort = function () {
            U &&
              (u(new st("Request aborted", st.ECONNABORTED, i, U)), (U = null));
          }),
          (U.onerror = function () {
            u(new st("Network Error", st.ERR_NETWORK, i, U)), (U = null);
          }),
          (U.ontimeout = function () {
            let nt = c.timeout
              ? "timeout of " + c.timeout + "ms exceeded"
              : "timeout exceeded";
            const j = c.transitional || E0;
            c.timeoutErrorMessage && (nt = c.timeoutErrorMessage),
              u(
                new st(
                  nt,
                  j.clarifyTimeoutError ? st.ETIMEDOUT : st.ECONNABORTED,
                  i,
                  U
                )
              ),
              (U = null);
          }),
          h === void 0 && f.setContentType(null),
          "setRequestHeader" in U &&
            w.forEach(f.toJSON(), function (nt, j) {
              U.setRequestHeader(j, nt);
            }),
          w.isUndefined(c.withCredentials) ||
            (U.withCredentials = !!c.withCredentials),
          m && m !== "json" && (U.responseType = c.responseType),
          p && (([T, O] = vu(p, !0)), U.addEventListener("progress", T)),
          y &&
            U.upload &&
            (([S, M] = vu(y)),
            U.upload.addEventListener("progress", S),
            U.upload.addEventListener("loadend", M)),
          (c.cancelToken || c.signal) &&
            ((g = (Y) => {
              U &&
                (u(!Y || Y.type ? new Ta(null, i, U) : Y),
                U.abort(),
                (U = null));
            }),
            c.cancelToken && c.cancelToken.subscribe(g),
            c.signal &&
              (c.signal.aborted ? g() : c.signal.addEventListener("abort", g)));
        const q = FR(c.url);
        if (q && ie.protocols.indexOf(q) === -1) {
          u(new st("Unsupported protocol " + q + ":", st.ERR_BAD_REQUEST, i));
          return;
        }
        U.send(h || null);
      });
    },
  i2 = (i, a) => {
    const { length: s } = (i = i ? i.filter(Boolean) : []);
    if (a || s) {
      let u = new AbortController(),
        c;
      const h = function (p) {
        if (!c) {
          (c = !0), m();
          const g = p instanceof Error ? p : this.reason;
          u.abort(
            g instanceof st ? g : new Ta(g instanceof Error ? g.message : g)
          );
        }
      };
      let f =
        a &&
        setTimeout(() => {
          (f = null), h(new st(`timeout ${a} of ms exceeded`, st.ETIMEDOUT));
        }, a);
      const m = () => {
        i &&
          (f && clearTimeout(f),
          (f = null),
          i.forEach((p) => {
            p.unsubscribe
              ? p.unsubscribe(h)
              : p.removeEventListener("abort", h);
          }),
          (i = null));
      };
      i.forEach((p) => p.addEventListener("abort", h));
      const { signal: y } = u;
      return (y.unsubscribe = () => w.asap(m)), y;
    }
  },
  a2 = function* (i, a) {
    let s = i.byteLength;
    if (s < a) {
      yield i;
      return;
    }
    let u = 0,
      c;
    for (; u < s; ) (c = u + a), yield i.slice(u, c), (u = c);
  },
  l2 = async function* (i, a) {
    for await (const s of s2(i)) yield* a2(s, a);
  },
  s2 = async function* (i) {
    if (i[Symbol.asyncIterator]) {
      yield* i;
      return;
    }
    const a = i.getReader();
    try {
      for (;;) {
        const { done: s, value: u } = await a.read();
        if (s) break;
        yield u;
      }
    } finally {
      await a.cancel();
    }
  },
  _y = (i, a, s, u) => {
    const c = l2(i, a);
    let h = 0,
      f,
      m = (y) => {
        f || ((f = !0), u && u(y));
      };
    return new ReadableStream(
      {
        async pull(y) {
          try {
            const { done: p, value: g } = await c.next();
            if (p) {
              m(), y.close();
              return;
            }
            let S = g.byteLength;
            if (s) {
              let T = (h += S);
              s(T);
            }
            y.enqueue(new Uint8Array(g));
          } catch (p) {
            throw (m(p), p);
          }
        },
        cancel(y) {
          return m(y), c.return();
        },
      },
      { highWaterMark: 2 }
    );
  },
  Mu =
    typeof fetch == "function" &&
    typeof Request == "function" &&
    typeof Response == "function",
  C0 = Mu && typeof ReadableStream == "function",
  u2 =
    Mu &&
    (typeof TextEncoder == "function"
      ? (
          (i) => (a) =>
            i.encode(a)
        )(new TextEncoder())
      : async (i) => new Uint8Array(await new Response(i).arrayBuffer())),
  _0 = (i, ...a) => {
    try {
      return !!i(...a);
    } catch {
      return !1;
    }
  },
  r2 =
    C0 &&
    _0(() => {
      let i = !1;
      const a = new Request(ie.origin, {
        body: new ReadableStream(),
        method: "POST",
        get duplex() {
          return (i = !0), "half";
        },
      }).headers.has("Content-Type");
      return i && !a;
    }),
  wy = 64 * 1024,
  Oc = C0 && _0(() => w.isReadableStream(new Response("").body)),
  Su = { stream: Oc && ((i) => i.body) };
Mu &&
  ((i) => {
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((a) => {
      !Su[a] &&
        (Su[a] = w.isFunction(i[a])
          ? (s) => s[a]()
          : (s, u) => {
              throw new st(
                `Response type '${a}' is not supported`,
                st.ERR_NOT_SUPPORT,
                u
              );
            });
    });
  })(new Response());
const o2 = async (i) => {
    if (i == null) return 0;
    if (w.isBlob(i)) return i.size;
    if (w.isSpecCompliantForm(i))
      return (
        await new Request(ie.origin, { method: "POST", body: i }).arrayBuffer()
      ).byteLength;
    if (w.isArrayBufferView(i) || w.isArrayBuffer(i)) return i.byteLength;
    if ((w.isURLSearchParams(i) && (i = i + ""), w.isString(i)))
      return (await u2(i)).byteLength;
  },
  c2 = async (i, a) => {
    const s = w.toFiniteNumber(i.getContentLength());
    return s ?? o2(a);
  },
  f2 =
    Mu &&
    (async (i) => {
      let {
        url: a,
        method: s,
        data: u,
        signal: c,
        cancelToken: h,
        timeout: f,
        onDownloadProgress: m,
        onUploadProgress: y,
        responseType: p,
        headers: g,
        withCredentials: S = "same-origin",
        fetchOptions: T,
      } = M0(i);
      p = p ? (p + "").toLowerCase() : "text";
      let M = i2([c, h && h.toAbortSignal()], f),
        O;
      const _ =
        M &&
        M.unsubscribe &&
        (() => {
          M.unsubscribe();
        });
      let U;
      try {
        if (
          y &&
          r2 &&
          s !== "get" &&
          s !== "head" &&
          (U = await c2(g, u)) !== 0
        ) {
          let j = new Request(a, { method: "POST", body: u, duplex: "half" }),
            $;
          if (
            (w.isFormData(u) &&
              ($ = j.headers.get("content-type")) &&
              g.setContentType($),
            j.body)
          ) {
            const [dt, J] = Oy(U, vu(My(y)));
            u = _y(j.body, wy, dt, J);
          }
        }
        w.isString(S) || (S = S ? "include" : "omit");
        const N = "credentials" in Request.prototype;
        O = new Request(a, {
          ...T,
          signal: M,
          method: s.toUpperCase(),
          headers: g.normalize().toJSON(),
          body: u,
          duplex: "half",
          credentials: N ? S : void 0,
        });
        let q = await fetch(O);
        const Y = Oc && (p === "stream" || p === "response");
        if (Oc && (m || (Y && _))) {
          const j = {};
          ["status", "statusText", "headers"].forEach((X) => {
            j[X] = q[X];
          });
          const $ = w.toFiniteNumber(q.headers.get("content-length")),
            [dt, J] = (m && Oy($, vu(My(m), !0))) || [];
          q = new Response(
            _y(q.body, wy, dt, () => {
              J && J(), _ && _();
            }),
            j
          );
        }
        p = p || "text";
        let nt = await Su[w.findKey(Su, p) || "text"](q, i);
        return (
          !Y && _ && _(),
          await new Promise((j, $) => {
            x0(j, $, {
              data: nt,
              headers: de.from(q.headers),
              status: q.status,
              statusText: q.statusText,
              config: i,
              request: O,
            });
          })
        );
      } catch (N) {
        throw (
          (_ && _(),
          N && N.name === "TypeError" && /fetch/i.test(N.message)
            ? Object.assign(new st("Network Error", st.ERR_NETWORK, i, O), {
                cause: N.cause || N,
              })
            : st.from(N, N && N.code, i, O))
        );
      }
    }),
  Mc = { http: xR, xhr: n2, fetch: f2 };
w.forEach(Mc, (i, a) => {
  if (i) {
    try {
      Object.defineProperty(i, "name", { value: a });
    } catch {}
    Object.defineProperty(i, "adapterName", { value: a });
  }
});
const Uy = (i) => `- ${i}`,
  h2 = (i) => w.isFunction(i) || i === null || i === !1,
  w0 = {
    getAdapter: (i) => {
      i = w.isArray(i) ? i : [i];
      const { length: a } = i;
      let s, u;
      const c = {};
      for (let h = 0; h < a; h++) {
        s = i[h];
        let f;
        if (
          ((u = s),
          !h2(s) && ((u = Mc[(f = String(s)).toLowerCase()]), u === void 0))
        )
          throw new st(`Unknown adapter '${f}'`);
        if (u) break;
        c[f || "#" + h] = u;
      }
      if (!u) {
        const h = Object.entries(c).map(
          ([m, y]) =>
            `adapter ${m} ` +
            (y === !1
              ? "is not supported by the environment"
              : "is not available in the build")
        );
        let f = a
          ? h.length > 1
            ? `since :
` +
              h.map(Uy).join(`
`)
            : " " + Uy(h[0])
          : "as no adapter specified";
        throw new st(
          "There is no suitable adapter to dispatch the request " + f,
          "ERR_NOT_SUPPORT"
        );
      }
      return u;
    },
    adapters: Mc,
  };
function uc(i) {
  if (
    (i.cancelToken && i.cancelToken.throwIfRequested(),
    i.signal && i.signal.aborted)
  )
    throw new Ta(null, i);
}
function Vy(i) {
  return (
    uc(i),
    (i.headers = de.from(i.headers)),
    (i.data = sc.call(i, i.transformRequest)),
    ["post", "put", "patch"].indexOf(i.method) !== -1 &&
      i.headers.setContentType("application/x-www-form-urlencoded", !1),
    w0
      .getAdapter(i.adapter || Yl.adapter)(i)
      .then(
        function (u) {
          return (
            uc(i),
            (u.data = sc.call(i, i.transformResponse, u)),
            (u.headers = de.from(u.headers)),
            u
          );
        },
        function (u) {
          return (
            D0(u) ||
              (uc(i),
              u &&
                u.response &&
                ((u.response.data = sc.call(
                  i,
                  i.transformResponse,
                  u.response
                )),
                (u.response.headers = de.from(u.response.headers)))),
            Promise.reject(u)
          );
        }
      )
  );
}
const U0 = "1.7.9",
  Cu = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (i, a) => {
    Cu[i] = function (u) {
      return typeof u === i || "a" + (a < 1 ? "n " : " ") + i;
    };
  }
);
const zy = {};
Cu.transitional = function (a, s, u) {
  function c(h, f) {
    return (
      "[Axios v" +
      U0 +
      "] Transitional option '" +
      h +
      "'" +
      f +
      (u ? ". " + u : "")
    );
  }
  return (h, f, m) => {
    if (a === !1)
      throw new st(
        c(f, " has been removed" + (s ? " in " + s : "")),
        st.ERR_DEPRECATED
      );
    return (
      s &&
        !zy[f] &&
        ((zy[f] = !0),
        console.warn(
          c(
            f,
            " has been deprecated since v" +
              s +
              " and will be removed in the near future"
          )
        )),
      a ? a(h, f, m) : !0
    );
  };
};
Cu.spelling = function (a) {
  return (s, u) => (console.warn(`${u} is likely a misspelling of ${a}`), !0);
};
function d2(i, a, s) {
  if (typeof i != "object")
    throw new st("options must be an object", st.ERR_BAD_OPTION_VALUE);
  const u = Object.keys(i);
  let c = u.length;
  for (; c-- > 0; ) {
    const h = u[c],
      f = a[h];
    if (f) {
      const m = i[h],
        y = m === void 0 || f(m, h, i);
      if (y !== !0)
        throw new st("option " + h + " must be " + y, st.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (s !== !0) throw new st("Unknown option " + h, st.ERR_BAD_OPTION);
  }
}
const cu = { assertOptions: d2, validators: Cu },
  Ie = cu.validators;
let Ri = class {
  constructor(a) {
    (this.defaults = a),
      (this.interceptors = { request: new Dy(), response: new Dy() });
  }
  async request(a, s) {
    try {
      return await this._request(a, s);
    } catch (u) {
      if (u instanceof Error) {
        let c = {};
        Error.captureStackTrace
          ? Error.captureStackTrace(c)
          : (c = new Error());
        const h = c.stack ? c.stack.replace(/^.+\n/, "") : "";
        try {
          u.stack
            ? h &&
              !String(u.stack).endsWith(h.replace(/^.+\n.+\n/, "")) &&
              (u.stack +=
                `
` + h)
            : (u.stack = h);
        } catch {}
      }
      throw u;
    }
  }
  _request(a, s) {
    typeof a == "string" ? ((s = s || {}), (s.url = a)) : (s = a || {}),
      (s = Di(this.defaults, s));
    const { transitional: u, paramsSerializer: c, headers: h } = s;
    u !== void 0 &&
      cu.assertOptions(
        u,
        {
          silentJSONParsing: Ie.transitional(Ie.boolean),
          forcedJSONParsing: Ie.transitional(Ie.boolean),
          clarifyTimeoutError: Ie.transitional(Ie.boolean),
        },
        !1
      ),
      c != null &&
        (w.isFunction(c)
          ? (s.paramsSerializer = { serialize: c })
          : cu.assertOptions(
              c,
              { encode: Ie.function, serialize: Ie.function },
              !0
            )),
      cu.assertOptions(
        s,
        {
          baseUrl: Ie.spelling("baseURL"),
          withXsrfToken: Ie.spelling("withXSRFToken"),
        },
        !0
      ),
      (s.method = (s.method || this.defaults.method || "get").toLowerCase());
    let f = h && w.merge(h.common, h[s.method]);
    h &&
      w.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (O) => {
          delete h[O];
        }
      ),
      (s.headers = de.concat(f, h));
    const m = [];
    let y = !0;
    this.interceptors.request.forEach(function (_) {
      (typeof _.runWhen == "function" && _.runWhen(s) === !1) ||
        ((y = y && _.synchronous), m.unshift(_.fulfilled, _.rejected));
    });
    const p = [];
    this.interceptors.response.forEach(function (_) {
      p.push(_.fulfilled, _.rejected);
    });
    let g,
      S = 0,
      T;
    if (!y) {
      const O = [Vy.bind(this), void 0];
      for (
        O.unshift.apply(O, m),
          O.push.apply(O, p),
          T = O.length,
          g = Promise.resolve(s);
        S < T;

      )
        g = g.then(O[S++], O[S++]);
      return g;
    }
    T = m.length;
    let M = s;
    for (S = 0; S < T; ) {
      const O = m[S++],
        _ = m[S++];
      try {
        M = O(M);
      } catch (U) {
        _.call(this, U);
        break;
      }
    }
    try {
      g = Vy.call(this, M);
    } catch (O) {
      return Promise.reject(O);
    }
    for (S = 0, T = p.length; S < T; ) g = g.then(p[S++], p[S++]);
    return g;
  }
  getUri(a) {
    a = Di(this.defaults, a);
    const s = O0(a.baseURL, a.url);
    return A0(s, a.params, a.paramsSerializer);
  }
};
w.forEach(["delete", "get", "head", "options"], function (a) {
  Ri.prototype[a] = function (s, u) {
    return this.request(
      Di(u || {}, { method: a, url: s, data: (u || {}).data })
    );
  };
});
w.forEach(["post", "put", "patch"], function (a) {
  function s(u) {
    return function (h, f, m) {
      return this.request(
        Di(m || {}, {
          method: a,
          headers: u ? { "Content-Type": "multipart/form-data" } : {},
          url: h,
          data: f,
        })
      );
    };
  }
  (Ri.prototype[a] = s()), (Ri.prototype[a + "Form"] = s(!0));
});
let m2 = class V0 {
  constructor(a) {
    if (typeof a != "function")
      throw new TypeError("executor must be a function.");
    let s;
    this.promise = new Promise(function (h) {
      s = h;
    });
    const u = this;
    this.promise.then((c) => {
      if (!u._listeners) return;
      let h = u._listeners.length;
      for (; h-- > 0; ) u._listeners[h](c);
      u._listeners = null;
    }),
      (this.promise.then = (c) => {
        let h;
        const f = new Promise((m) => {
          u.subscribe(m), (h = m);
        }).then(c);
        return (
          (f.cancel = function () {
            u.unsubscribe(h);
          }),
          f
        );
      }),
      a(function (h, f, m) {
        u.reason || ((u.reason = new Ta(h, f, m)), s(u.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(a) {
    if (this.reason) {
      a(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(a) : (this._listeners = [a]);
  }
  unsubscribe(a) {
    if (!this._listeners) return;
    const s = this._listeners.indexOf(a);
    s !== -1 && this._listeners.splice(s, 1);
  }
  toAbortSignal() {
    const a = new AbortController(),
      s = (u) => {
        a.abort(u);
      };
    return (
      this.subscribe(s),
      (a.signal.unsubscribe = () => this.unsubscribe(s)),
      a.signal
    );
  }
  static source() {
    let a;
    return {
      token: new V0(function (c) {
        a = c;
      }),
      cancel: a,
    };
  }
};
function p2(i) {
  return function (s) {
    return i.apply(null, s);
  };
}
function y2(i) {
  return w.isObject(i) && i.isAxiosError === !0;
}
const Cc = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(Cc).forEach(([i, a]) => {
  Cc[a] = i;
});
function z0(i) {
  const a = new Ri(i),
    s = c0(Ri.prototype.request, a);
  return (
    w.extend(s, Ri.prototype, a, { allOwnKeys: !0 }),
    w.extend(s, a, null, { allOwnKeys: !0 }),
    (s.create = function (c) {
      return z0(Di(i, c));
    }),
    s
  );
}
const zt = z0(Yl);
zt.Axios = Ri;
zt.CanceledError = Ta;
zt.CancelToken = m2;
zt.isCancel = D0;
zt.VERSION = U0;
zt.toFormData = Ou;
zt.AxiosError = st;
zt.Cancel = zt.CanceledError;
zt.all = function (a) {
  return Promise.all(a);
};
zt.spread = p2;
zt.isAxiosError = y2;
zt.mergeConfig = Di;
zt.AxiosHeaders = de;
zt.formToJSON = (i) => R0(w.isHTMLForm(i) ? new FormData(i) : i);
zt.getAdapter = w0.getAdapter;
zt.HttpStatusCode = Cc;
zt.default = zt;
const {
  Axios: A2,
  AxiosError: E2,
  CanceledError: R2,
  isCancel: D2,
  CancelToken: x2,
  VERSION: O2,
  all: M2,
  Cancel: C2,
  isAxiosError: _2,
  spread: w2,
  toFormData: U2,
  AxiosHeaders: V2,
  HttpStatusCode: z2,
  formToJSON: B2,
  getAdapter: N2,
  mergeConfig: L2,
} = zt;
zt.defaults.withCredentials = !0;
function g2({ setValid: i }) {
  const [a, s] = it.useState(""),
    [u, c] = it.useState(""),
    h = async (f) => {
      f.preventDefault(), console.log(a, u);
      try {
        const m = await zt.post(
          "http://127.0.0.1:8080/login",
          { username: a, password: u },
          {
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Content-Type": "application/json",
            },
          }
        );
        m.status == 200 && (console.log("Correct"), i(!0)), console.log(m);
      } catch (m) {
        console.log(m);
      }
      s(""), c("");
    };
  return Lt.jsxs("main", {
    className:
      "w-full h-screen text-slate-100 flex gap-8 justify-center items-center bg-slate-800",
    children: [
      Lt.jsx("img", {
        className: "w-48 h-48 rounded-xl border-2 border-orange-300",
        src: qE,
        alt: "nasgor",
      }),
      Lt.jsxs("form", {
        onSubmit: h,
        className:
          "w-80 h-72 mx-10 flex flex-col items-center justify-center rounded-xl bg-orange-900 gap-4 font-bold",
        children: [
          Lt.jsxs("div", {
            children: [
              Lt.jsx("label", {
                className: "flex",
                htmlFor: "username",
                children: "Username",
              }),
              Lt.jsx("input", {
                value: a,
                onChange: (f) => s(f.target.value),
                id: "username",
                className: "bg-white text-slate-900 p-2",
                type: "text",
              }),
            ],
          }),
          Lt.jsxs("div", {
            children: [
              Lt.jsx("label", {
                className: "flex",
                htmlFor: "password",
                children: "Password",
              }),
              Lt.jsx("input", {
                value: u,
                onChange: (f) => c(f.target.value),
                id: "password",
                className: "bg-white text-slate-900 p-2",
                type: "text",
              }),
            ],
          }),
          Lt.jsx(o0.button, {
            initial: { backgroundColor: "#1d293d" },
            animate: {
              backgroundColor: ["#7e2a0c", "#1d293d", "#ffffff", "#7e2a0c"],
            },
            transition: { duration: 3, repeat: 1 / 0, ease: "easeIn" },
            className: "p-2 px-5 rounded-sm",
            children: "Login",
          }),
        ],
      }),
    ],
  });
}
function v2() {
  const [i, a] = it.useState(!1);
  return Lt.jsx(Lt.Fragment, {
    children: i ? Lt.jsx(HE, {}) : Lt.jsx(g2, { setValid: a }),
  });
}
h1.createRoot(document.getElementById("root")).render(
  Lt.jsx(it.StrictMode, { children: Lt.jsx(v2, {}) })
);
