(function () {
  const l = document.createElement("link").relList;
  if (l && l.supports && l.supports("modulepreload")) return;
  for (const c of document.querySelectorAll('link[rel="modulepreload"]')) r(c);
  new MutationObserver((c) => {
    for (const d of c)
      if (d.type === "childList")
        for (const h of d.addedNodes)
          h.tagName === "LINK" && h.rel === "modulepreload" && r(h);
  }).observe(document, { childList: !0, subtree: !0 });
  function u(c) {
    const d = {};
    return (
      c.integrity && (d.integrity = c.integrity),
      c.referrerPolicy && (d.referrerPolicy = c.referrerPolicy),
      c.crossOrigin === "use-credentials"
        ? (d.credentials = "include")
        : c.crossOrigin === "anonymous"
        ? (d.credentials = "omit")
        : (d.credentials = "same-origin"),
      d
    );
  }
  function r(c) {
    if (c.ep) return;
    c.ep = !0;
    const d = u(c);
    fetch(c.href, d);
  }
})();
var fo = { exports: {} },
  sl = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var om;
function zv() {
  if (om) return sl;
  om = 1;
  var a = Symbol.for("react.transitional.element"),
    l = Symbol.for("react.fragment");
  function u(r, c, d) {
    var h = null;
    if (
      (d !== void 0 && (h = "" + d),
      c.key !== void 0 && (h = "" + c.key),
      "key" in c)
    ) {
      d = {};
      for (var p in c) p !== "key" && (d[p] = c[p]);
    } else d = c;
    return (
      (c = d.ref),
      { $$typeof: a, type: r, key: h, ref: c !== void 0 ? c : null, props: d }
    );
  }
  return (sl.Fragment = l), (sl.jsx = u), (sl.jsxs = u), sl;
}
var cm;
function _v() {
  return cm || ((cm = 1), (fo.exports = zv())), fo.exports;
}
var Bt = _v(),
  ho = { exports: {} },
  at = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var fm;
function Uv() {
  if (fm) return at;
  fm = 1;
  var a = Symbol.for("react.transitional.element"),
    l = Symbol.for("react.portal"),
    u = Symbol.for("react.fragment"),
    r = Symbol.for("react.strict_mode"),
    c = Symbol.for("react.profiler"),
    d = Symbol.for("react.consumer"),
    h = Symbol.for("react.context"),
    p = Symbol.for("react.forward_ref"),
    m = Symbol.for("react.suspense"),
    y = Symbol.for("react.memo"),
    v = Symbol.for("react.lazy"),
    T = Symbol.iterator;
  function D(b) {
    return b === null || typeof b != "object"
      ? null
      : ((b = (T && b[T]) || b["@@iterator"]),
        typeof b == "function" ? b : null);
  }
  var O = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    U = Object.assign,
    B = {};
  function j(b, N, $) {
    (this.props = b),
      (this.context = N),
      (this.refs = B),
      (this.updater = $ || O);
  }
  (j.prototype.isReactComponent = {}),
    (j.prototype.setState = function (b, N) {
      if (typeof b != "object" && typeof b != "function" && b != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, b, N, "setState");
    }),
    (j.prototype.forceUpdate = function (b) {
      this.updater.enqueueForceUpdate(this, b, "forceUpdate");
    });
  function H() {}
  H.prototype = j.prototype;
  function q(b, N, $) {
    (this.props = b),
      (this.context = N),
      (this.refs = B),
      (this.updater = $ || O);
  }
  var Q = (q.prototype = new H());
  (Q.constructor = q), U(Q, j.prototype), (Q.isPureReactComponent = !0);
  var ot = Array.isArray,
    L = { H: null, A: null, T: null, S: null },
    it = Object.prototype.hasOwnProperty;
  function Tt(b, N, $, k, Y, ft) {
    return (
      ($ = ft.ref),
      { $$typeof: a, type: b, key: N, ref: $ !== void 0 ? $ : null, props: ft }
    );
  }
  function I(b, N) {
    return Tt(b.type, N, void 0, void 0, void 0, b.props);
  }
  function G(b) {
    return typeof b == "object" && b !== null && b.$$typeof === a;
  }
  function et(b) {
    var N = { "=": "=0", ":": "=2" };
    return (
      "$" +
      b.replace(/[=:]/g, function ($) {
        return N[$];
      })
    );
  }
  var wt = /\/+/g;
  function ge(b, N) {
    return typeof b == "object" && b !== null && b.key != null
      ? et("" + b.key)
      : N.toString(36);
  }
  function ve() {}
  function Se(b) {
    switch (b.status) {
      case "fulfilled":
        return b.value;
      case "rejected":
        throw b.reason;
      default:
        switch (
          (typeof b.status == "string"
            ? b.then(ve, ve)
            : ((b.status = "pending"),
              b.then(
                function (N) {
                  b.status === "pending" &&
                    ((b.status = "fulfilled"), (b.value = N));
                },
                function (N) {
                  b.status === "pending" &&
                    ((b.status = "rejected"), (b.reason = N));
                }
              )),
          b.status)
        ) {
          case "fulfilled":
            return b.value;
          case "rejected":
            throw b.reason;
        }
    }
    throw b;
  }
  function ee(b, N, $, k, Y) {
    var ft = typeof b;
    (ft === "undefined" || ft === "boolean") && (b = null);
    var lt = !1;
    if (b === null) lt = !0;
    else
      switch (ft) {
        case "bigint":
        case "string":
        case "number":
          lt = !0;
          break;
        case "object":
          switch (b.$$typeof) {
            case a:
            case l:
              lt = !0;
              break;
            case v:
              return (lt = b._init), ee(lt(b._payload), N, $, k, Y);
          }
      }
    if (lt)
      return (
        (Y = Y(b)),
        (lt = k === "" ? "." + ge(b, 0) : k),
        ot(Y)
          ? (($ = ""),
            lt != null && ($ = lt.replace(wt, "$&/") + "/"),
            ee(Y, N, $, "", function (Nt) {
              return Nt;
            }))
          : Y != null &&
            (G(Y) &&
              (Y = I(
                Y,
                $ +
                  (Y.key == null || (b && b.key === Y.key)
                    ? ""
                    : ("" + Y.key).replace(wt, "$&/") + "/") +
                  lt
              )),
            N.push(Y)),
        1
      );
    lt = 0;
    var ne = k === "" ? "." : k + ":";
    if (ot(b))
      for (var pt = 0; pt < b.length; pt++)
        (k = b[pt]), (ft = ne + ge(k, pt)), (lt += ee(k, N, $, ft, Y));
    else if (((pt = D(b)), typeof pt == "function"))
      for (b = pt.call(b), pt = 0; !(k = b.next()).done; )
        (k = k.value), (ft = ne + ge(k, pt++)), (lt += ee(k, N, $, ft, Y));
    else if (ft === "object") {
      if (typeof b.then == "function") return ee(Se(b), N, $, k, Y);
      throw (
        ((N = String(b)),
        Error(
          "Objects are not valid as a React child (found: " +
            (N === "[object Object]"
              ? "object with keys {" + Object.keys(b).join(", ") + "}"
              : N) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    }
    return lt;
  }
  function w(b, N, $) {
    if (b == null) return b;
    var k = [],
      Y = 0;
    return (
      ee(b, k, "", "", function (ft) {
        return N.call($, ft, Y++);
      }),
      k
    );
  }
  function K(b) {
    if (b._status === -1) {
      var N = b._result;
      (N = N()),
        N.then(
          function ($) {
            (b._status === 0 || b._status === -1) &&
              ((b._status = 1), (b._result = $));
          },
          function ($) {
            (b._status === 0 || b._status === -1) &&
              ((b._status = 2), (b._result = $));
          }
        ),
        b._status === -1 && ((b._status = 0), (b._result = N));
    }
    if (b._status === 1) return b._result.default;
    throw b._result;
  }
  var J =
    typeof reportError == "function"
      ? reportError
      : function (b) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var N = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof b == "object" &&
                b !== null &&
                typeof b.message == "string"
                  ? String(b.message)
                  : String(b),
              error: b,
            });
            if (!window.dispatchEvent(N)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", b);
            return;
          }
          console.error(b);
        };
  function yt() {}
  return (
    (at.Children = {
      map: w,
      forEach: function (b, N, $) {
        w(
          b,
          function () {
            N.apply(this, arguments);
          },
          $
        );
      },
      count: function (b) {
        var N = 0;
        return (
          w(b, function () {
            N++;
          }),
          N
        );
      },
      toArray: function (b) {
        return (
          w(b, function (N) {
            return N;
          }) || []
        );
      },
      only: function (b) {
        if (!G(b))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return b;
      },
    }),
    (at.Component = j),
    (at.Fragment = u),
    (at.Profiler = c),
    (at.PureComponent = q),
    (at.StrictMode = r),
    (at.Suspense = m),
    (at.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = L),
    (at.act = function () {
      throw Error("act(...) is not supported in production builds of React.");
    }),
    (at.cache = function (b) {
      return function () {
        return b.apply(null, arguments);
      };
    }),
    (at.cloneElement = function (b, N, $) {
      if (b == null)
        throw Error(
          "The argument must be a React element, but you passed " + b + "."
        );
      var k = U({}, b.props),
        Y = b.key,
        ft = void 0;
      if (N != null)
        for (lt in (N.ref !== void 0 && (ft = void 0),
        N.key !== void 0 && (Y = "" + N.key),
        N))
          !it.call(N, lt) ||
            lt === "key" ||
            lt === "__self" ||
            lt === "__source" ||
            (lt === "ref" && N.ref === void 0) ||
            (k[lt] = N[lt]);
      var lt = arguments.length - 2;
      if (lt === 1) k.children = $;
      else if (1 < lt) {
        for (var ne = Array(lt), pt = 0; pt < lt; pt++)
          ne[pt] = arguments[pt + 2];
        k.children = ne;
      }
      return Tt(b.type, Y, void 0, void 0, ft, k);
    }),
    (at.createContext = function (b) {
      return (
        (b = {
          $$typeof: h,
          _currentValue: b,
          _currentValue2: b,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (b.Provider = b),
        (b.Consumer = { $$typeof: d, _context: b }),
        b
      );
    }),
    (at.createElement = function (b, N, $) {
      var k,
        Y = {},
        ft = null;
      if (N != null)
        for (k in (N.key !== void 0 && (ft = "" + N.key), N))
          it.call(N, k) &&
            k !== "key" &&
            k !== "__self" &&
            k !== "__source" &&
            (Y[k] = N[k]);
      var lt = arguments.length - 2;
      if (lt === 1) Y.children = $;
      else if (1 < lt) {
        for (var ne = Array(lt), pt = 0; pt < lt; pt++)
          ne[pt] = arguments[pt + 2];
        Y.children = ne;
      }
      if (b && b.defaultProps)
        for (k in ((lt = b.defaultProps), lt))
          Y[k] === void 0 && (Y[k] = lt[k]);
      return Tt(b, ft, void 0, void 0, null, Y);
    }),
    (at.createRef = function () {
      return { current: null };
    }),
    (at.forwardRef = function (b) {
      return { $$typeof: p, render: b };
    }),
    (at.isValidElement = G),
    (at.lazy = function (b) {
      return { $$typeof: v, _payload: { _status: -1, _result: b }, _init: K };
    }),
    (at.memo = function (b, N) {
      return { $$typeof: y, type: b, compare: N === void 0 ? null : N };
    }),
    (at.startTransition = function (b) {
      var N = L.T,
        $ = {};
      L.T = $;
      try {
        var k = b(),
          Y = L.S;
        Y !== null && Y($, k),
          typeof k == "object" &&
            k !== null &&
            typeof k.then == "function" &&
            k.then(yt, J);
      } catch (ft) {
        J(ft);
      } finally {
        L.T = N;
      }
    }),
    (at.unstable_useCacheRefresh = function () {
      return L.H.useCacheRefresh();
    }),
    (at.use = function (b) {
      return L.H.use(b);
    }),
    (at.useActionState = function (b, N, $) {
      return L.H.useActionState(b, N, $);
    }),
    (at.useCallback = function (b, N) {
      return L.H.useCallback(b, N);
    }),
    (at.useContext = function (b) {
      return L.H.useContext(b);
    }),
    (at.useDebugValue = function () {}),
    (at.useDeferredValue = function (b, N) {
      return L.H.useDeferredValue(b, N);
    }),
    (at.useEffect = function (b, N) {
      return L.H.useEffect(b, N);
    }),
    (at.useId = function () {
      return L.H.useId();
    }),
    (at.useImperativeHandle = function (b, N, $) {
      return L.H.useImperativeHandle(b, N, $);
    }),
    (at.useInsertionEffect = function (b, N) {
      return L.H.useInsertionEffect(b, N);
    }),
    (at.useLayoutEffect = function (b, N) {
      return L.H.useLayoutEffect(b, N);
    }),
    (at.useMemo = function (b, N) {
      return L.H.useMemo(b, N);
    }),
    (at.useOptimistic = function (b, N) {
      return L.H.useOptimistic(b, N);
    }),
    (at.useReducer = function (b, N, $) {
      return L.H.useReducer(b, N, $);
    }),
    (at.useRef = function (b) {
      return L.H.useRef(b);
    }),
    (at.useState = function (b) {
      return L.H.useState(b);
    }),
    (at.useSyncExternalStore = function (b, N, $) {
      return L.H.useSyncExternalStore(b, N, $);
    }),
    (at.useTransition = function () {
      return L.H.useTransition();
    }),
    (at.version = "19.0.0"),
    at
  );
}
var hm;
function Ko() {
  return hm || ((hm = 1), (ho.exports = Uv())), ho.exports;
}
var tt = Ko(),
  mo = { exports: {} },
  ul = {},
  yo = { exports: {} },
  po = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var dm;
function Bv() {
  return (
    dm ||
      ((dm = 1),
      (function (a) {
        function l(w, K) {
          var J = w.length;
          w.push(K);
          t: for (; 0 < J; ) {
            var yt = (J - 1) >>> 1,
              b = w[yt];
            if (0 < c(b, K)) (w[yt] = K), (w[J] = b), (J = yt);
            else break t;
          }
        }
        function u(w) {
          return w.length === 0 ? null : w[0];
        }
        function r(w) {
          if (w.length === 0) return null;
          var K = w[0],
            J = w.pop();
          if (J !== K) {
            w[0] = J;
            t: for (var yt = 0, b = w.length, N = b >>> 1; yt < N; ) {
              var $ = 2 * (yt + 1) - 1,
                k = w[$],
                Y = $ + 1,
                ft = w[Y];
              if (0 > c(k, J))
                Y < b && 0 > c(ft, k)
                  ? ((w[yt] = ft), (w[Y] = J), (yt = Y))
                  : ((w[yt] = k), (w[$] = J), (yt = $));
              else if (Y < b && 0 > c(ft, J))
                (w[yt] = ft), (w[Y] = J), (yt = Y);
              else break t;
            }
          }
          return K;
        }
        function c(w, K) {
          var J = w.sortIndex - K.sortIndex;
          return J !== 0 ? J : w.id - K.id;
        }
        if (
          ((a.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var d = performance;
          a.unstable_now = function () {
            return d.now();
          };
        } else {
          var h = Date,
            p = h.now();
          a.unstable_now = function () {
            return h.now() - p;
          };
        }
        var m = [],
          y = [],
          v = 1,
          T = null,
          D = 3,
          O = !1,
          U = !1,
          B = !1,
          j = typeof setTimeout == "function" ? setTimeout : null,
          H = typeof clearTimeout == "function" ? clearTimeout : null,
          q = typeof setImmediate < "u" ? setImmediate : null;
        function Q(w) {
          for (var K = u(y); K !== null; ) {
            if (K.callback === null) r(y);
            else if (K.startTime <= w)
              r(y), (K.sortIndex = K.expirationTime), l(m, K);
            else break;
            K = u(y);
          }
        }
        function ot(w) {
          if (((B = !1), Q(w), !U))
            if (u(m) !== null) (U = !0), Se();
            else {
              var K = u(y);
              K !== null && ee(ot, K.startTime - w);
            }
        }
        var L = !1,
          it = -1,
          Tt = 5,
          I = -1;
        function G() {
          return !(a.unstable_now() - I < Tt);
        }
        function et() {
          if (L) {
            var w = a.unstable_now();
            I = w;
            var K = !0;
            try {
              t: {
                (U = !1), B && ((B = !1), H(it), (it = -1)), (O = !0);
                var J = D;
                try {
                  e: {
                    for (
                      Q(w), T = u(m);
                      T !== null && !(T.expirationTime > w && G());

                    ) {
                      var yt = T.callback;
                      if (typeof yt == "function") {
                        (T.callback = null), (D = T.priorityLevel);
                        var b = yt(T.expirationTime <= w);
                        if (((w = a.unstable_now()), typeof b == "function")) {
                          (T.callback = b), Q(w), (K = !0);
                          break e;
                        }
                        T === u(m) && r(m), Q(w);
                      } else r(m);
                      T = u(m);
                    }
                    if (T !== null) K = !0;
                    else {
                      var N = u(y);
                      N !== null && ee(ot, N.startTime - w), (K = !1);
                    }
                  }
                  break t;
                } finally {
                  (T = null), (D = J), (O = !1);
                }
                K = void 0;
              }
            } finally {
              K ? wt() : (L = !1);
            }
          }
        }
        var wt;
        if (typeof q == "function")
          wt = function () {
            q(et);
          };
        else if (typeof MessageChannel < "u") {
          var ge = new MessageChannel(),
            ve = ge.port2;
          (ge.port1.onmessage = et),
            (wt = function () {
              ve.postMessage(null);
            });
        } else
          wt = function () {
            j(et, 0);
          };
        function Se() {
          L || ((L = !0), wt());
        }
        function ee(w, K) {
          it = j(function () {
            w(a.unstable_now());
          }, K);
        }
        (a.unstable_IdlePriority = 5),
          (a.unstable_ImmediatePriority = 1),
          (a.unstable_LowPriority = 4),
          (a.unstable_NormalPriority = 3),
          (a.unstable_Profiling = null),
          (a.unstable_UserBlockingPriority = 2),
          (a.unstable_cancelCallback = function (w) {
            w.callback = null;
          }),
          (a.unstable_continueExecution = function () {
            U || O || ((U = !0), Se());
          }),
          (a.unstable_forceFrameRate = function (w) {
            0 > w || 125 < w
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (Tt = 0 < w ? Math.floor(1e3 / w) : 5);
          }),
          (a.unstable_getCurrentPriorityLevel = function () {
            return D;
          }),
          (a.unstable_getFirstCallbackNode = function () {
            return u(m);
          }),
          (a.unstable_next = function (w) {
            switch (D) {
              case 1:
              case 2:
              case 3:
                var K = 3;
                break;
              default:
                K = D;
            }
            var J = D;
            D = K;
            try {
              return w();
            } finally {
              D = J;
            }
          }),
          (a.unstable_pauseExecution = function () {}),
          (a.unstable_requestPaint = function () {}),
          (a.unstable_runWithPriority = function (w, K) {
            switch (w) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                w = 3;
            }
            var J = D;
            D = w;
            try {
              return K();
            } finally {
              D = J;
            }
          }),
          (a.unstable_scheduleCallback = function (w, K, J) {
            var yt = a.unstable_now();
            switch (
              (typeof J == "object" && J !== null
                ? ((J = J.delay),
                  (J = typeof J == "number" && 0 < J ? yt + J : yt))
                : (J = yt),
              w)
            ) {
              case 1:
                var b = -1;
                break;
              case 2:
                b = 250;
                break;
              case 5:
                b = 1073741823;
                break;
              case 4:
                b = 1e4;
                break;
              default:
                b = 5e3;
            }
            return (
              (b = J + b),
              (w = {
                id: v++,
                callback: K,
                priorityLevel: w,
                startTime: J,
                expirationTime: b,
                sortIndex: -1,
              }),
              J > yt
                ? ((w.sortIndex = J),
                  l(y, w),
                  u(m) === null &&
                    w === u(y) &&
                    (B ? (H(it), (it = -1)) : (B = !0), ee(ot, J - yt)))
                : ((w.sortIndex = b), l(m, w), U || O || ((U = !0), Se())),
              w
            );
          }),
          (a.unstable_shouldYield = G),
          (a.unstable_wrapCallback = function (w) {
            var K = D;
            return function () {
              var J = D;
              D = K;
              try {
                return w.apply(this, arguments);
              } finally {
                D = J;
              }
            };
          });
      })(po)),
    po
  );
}
var mm;
function Nv() {
  return mm || ((mm = 1), (yo.exports = Bv())), yo.exports;
}
var go = { exports: {} },
  $t = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ym;
function Hv() {
  if (ym) return $t;
  ym = 1;
  var a = Ko();
  function l(m) {
    var y = "https://react.dev/errors/" + m;
    if (1 < arguments.length) {
      y += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var v = 2; v < arguments.length; v++)
        y += "&args[]=" + encodeURIComponent(arguments[v]);
    }
    return (
      "Minified React error #" +
      m +
      "; visit " +
      y +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function u() {}
  var r = {
      d: {
        f: u,
        r: function () {
          throw Error(l(522));
        },
        D: u,
        C: u,
        L: u,
        m: u,
        X: u,
        S: u,
        M: u,
      },
      p: 0,
      findDOMNode: null,
    },
    c = Symbol.for("react.portal");
  function d(m, y, v) {
    var T =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: c,
      key: T == null ? null : "" + T,
      children: m,
      containerInfo: y,
      implementation: v,
    };
  }
  var h = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function p(m, y) {
    if (m === "font") return "";
    if (typeof y == "string") return y === "use-credentials" ? y : "";
  }
  return (
    ($t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r),
    ($t.createPortal = function (m, y) {
      var v =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!y || (y.nodeType !== 1 && y.nodeType !== 9 && y.nodeType !== 11))
        throw Error(l(299));
      return d(m, y, null, v);
    }),
    ($t.flushSync = function (m) {
      var y = h.T,
        v = r.p;
      try {
        if (((h.T = null), (r.p = 2), m)) return m();
      } finally {
        (h.T = y), (r.p = v), r.d.f();
      }
    }),
    ($t.preconnect = function (m, y) {
      typeof m == "string" &&
        (y
          ? ((y = y.crossOrigin),
            (y =
              typeof y == "string"
                ? y === "use-credentials"
                  ? y
                  : ""
                : void 0))
          : (y = null),
        r.d.C(m, y));
    }),
    ($t.prefetchDNS = function (m) {
      typeof m == "string" && r.d.D(m);
    }),
    ($t.preinit = function (m, y) {
      if (typeof m == "string" && y && typeof y.as == "string") {
        var v = y.as,
          T = p(v, y.crossOrigin),
          D = typeof y.integrity == "string" ? y.integrity : void 0,
          O = typeof y.fetchPriority == "string" ? y.fetchPriority : void 0;
        v === "style"
          ? r.d.S(m, typeof y.precedence == "string" ? y.precedence : void 0, {
              crossOrigin: T,
              integrity: D,
              fetchPriority: O,
            })
          : v === "script" &&
            r.d.X(m, {
              crossOrigin: T,
              integrity: D,
              fetchPriority: O,
              nonce: typeof y.nonce == "string" ? y.nonce : void 0,
            });
      }
    }),
    ($t.preinitModule = function (m, y) {
      if (typeof m == "string")
        if (typeof y == "object" && y !== null) {
          if (y.as == null || y.as === "script") {
            var v = p(y.as, y.crossOrigin);
            r.d.M(m, {
              crossOrigin: v,
              integrity: typeof y.integrity == "string" ? y.integrity : void 0,
              nonce: typeof y.nonce == "string" ? y.nonce : void 0,
            });
          }
        } else y == null && r.d.M(m);
    }),
    ($t.preload = function (m, y) {
      if (
        typeof m == "string" &&
        typeof y == "object" &&
        y !== null &&
        typeof y.as == "string"
      ) {
        var v = y.as,
          T = p(v, y.crossOrigin);
        r.d.L(m, v, {
          crossOrigin: T,
          integrity: typeof y.integrity == "string" ? y.integrity : void 0,
          nonce: typeof y.nonce == "string" ? y.nonce : void 0,
          type: typeof y.type == "string" ? y.type : void 0,
          fetchPriority:
            typeof y.fetchPriority == "string" ? y.fetchPriority : void 0,
          referrerPolicy:
            typeof y.referrerPolicy == "string" ? y.referrerPolicy : void 0,
          imageSrcSet:
            typeof y.imageSrcSet == "string" ? y.imageSrcSet : void 0,
          imageSizes: typeof y.imageSizes == "string" ? y.imageSizes : void 0,
          media: typeof y.media == "string" ? y.media : void 0,
        });
      }
    }),
    ($t.preloadModule = function (m, y) {
      if (typeof m == "string")
        if (y) {
          var v = p(y.as, y.crossOrigin);
          r.d.m(m, {
            as: typeof y.as == "string" && y.as !== "script" ? y.as : void 0,
            crossOrigin: v,
            integrity: typeof y.integrity == "string" ? y.integrity : void 0,
          });
        } else r.d.m(m);
    }),
    ($t.requestFormReset = function (m) {
      r.d.r(m);
    }),
    ($t.unstable_batchedUpdates = function (m, y) {
      return m(y);
    }),
    ($t.useFormState = function (m, y, v) {
      return h.H.useFormState(m, y, v);
    }),
    ($t.useFormStatus = function () {
      return h.H.useHostTransitionStatus();
    }),
    ($t.version = "19.0.0"),
    $t
  );
}
var pm;
function Lv() {
  if (pm) return go.exports;
  pm = 1;
  function a() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (l) {
        console.error(l);
      }
  }
  return a(), (go.exports = Hv()), go.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var gm;
function jv() {
  if (gm) return ul;
  gm = 1;
  var a = Nv(),
    l = Ko(),
    u = Lv();
  function r(t) {
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
  var d = Symbol.for("react.element"),
    h = Symbol.for("react.transitional.element"),
    p = Symbol.for("react.portal"),
    m = Symbol.for("react.fragment"),
    y = Symbol.for("react.strict_mode"),
    v = Symbol.for("react.profiler"),
    T = Symbol.for("react.provider"),
    D = Symbol.for("react.consumer"),
    O = Symbol.for("react.context"),
    U = Symbol.for("react.forward_ref"),
    B = Symbol.for("react.suspense"),
    j = Symbol.for("react.suspense_list"),
    H = Symbol.for("react.memo"),
    q = Symbol.for("react.lazy"),
    Q = Symbol.for("react.offscreen"),
    ot = Symbol.for("react.memo_cache_sentinel"),
    L = Symbol.iterator;
  function it(t) {
    return t === null || typeof t != "object"
      ? null
      : ((t = (L && t[L]) || t["@@iterator"]),
        typeof t == "function" ? t : null);
  }
  var Tt = Symbol.for("react.client.reference");
  function I(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === Tt ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case m:
        return "Fragment";
      case p:
        return "Portal";
      case v:
        return "Profiler";
      case y:
        return "StrictMode";
      case B:
        return "Suspense";
      case j:
        return "SuspenseList";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case O:
          return (t.displayName || "Context") + ".Provider";
        case D:
          return (t._context.displayName || "Context") + ".Consumer";
        case U:
          var e = t.render;
          return (
            (t = t.displayName),
            t ||
              ((t = e.displayName || e.name || ""),
              (t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")),
            t
          );
        case H:
          return (
            (e = t.displayName || null), e !== null ? e : I(t.type) || "Memo"
          );
        case q:
          (e = t._payload), (t = t._init);
          try {
            return I(t(e));
          } catch {}
      }
    return null;
  }
  var G = l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    et = Object.assign,
    wt,
    ge;
  function ve(t) {
    if (wt === void 0)
      try {
        throw Error();
      } catch (n) {
        var e = n.stack.trim().match(/\n( *(at )?)/);
        (wt = (e && e[1]) || ""),
          (ge =
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
      wt +
      t +
      ge
    );
  }
  var Se = !1;
  function ee(t, e) {
    if (!t || Se) return "";
    Se = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var i = {
        DetermineComponentFrameRoot: function () {
          try {
            if (e) {
              var _ = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(_.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(_, []);
                } catch (V) {
                  var R = V;
                }
                Reflect.construct(t, [], _);
              } else {
                try {
                  _.call();
                } catch (V) {
                  R = V;
                }
                t.call(_.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (V) {
                R = V;
              }
              (_ = t()) &&
                typeof _.catch == "function" &&
                _.catch(function () {});
            }
          } catch (V) {
            if (V && R && typeof V.stack == "string") return [V.stack, R.stack];
          }
          return [null, null];
        },
      };
      i.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var s = Object.getOwnPropertyDescriptor(
        i.DetermineComponentFrameRoot,
        "name"
      );
      s &&
        s.configurable &&
        Object.defineProperty(i.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var o = i.DetermineComponentFrameRoot(),
        f = o[0],
        g = o[1];
      if (f && g) {
        var S = f.split(`
`),
          E = g.split(`
`);
        for (
          s = i = 0;
          i < S.length && !S[i].includes("DetermineComponentFrameRoot");

        )
          i++;
        for (; s < E.length && !E[s].includes("DetermineComponentFrameRoot"); )
          s++;
        if (i === S.length || s === E.length)
          for (
            i = S.length - 1, s = E.length - 1;
            1 <= i && 0 <= s && S[i] !== E[s];

          )
            s--;
        for (; 1 <= i && 0 <= s; i--, s--)
          if (S[i] !== E[s]) {
            if (i !== 1 || s !== 1)
              do
                if ((i--, s--, 0 > s || S[i] !== E[s])) {
                  var C =
                    `
` + S[i].replace(" at new ", " at ");
                  return (
                    t.displayName &&
                      C.includes("<anonymous>") &&
                      (C = C.replace("<anonymous>", t.displayName)),
                    C
                  );
                }
              while (1 <= i && 0 <= s);
            break;
          }
      }
    } finally {
      (Se = !1), (Error.prepareStackTrace = n);
    }
    return (n = t ? t.displayName || t.name : "") ? ve(n) : "";
  }
  function w(t) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return ve(t.type);
      case 16:
        return ve("Lazy");
      case 13:
        return ve("Suspense");
      case 19:
        return ve("SuspenseList");
      case 0:
      case 15:
        return (t = ee(t.type, !1)), t;
      case 11:
        return (t = ee(t.type.render, !1)), t;
      case 1:
        return (t = ee(t.type, !0)), t;
      default:
        return "";
    }
  }
  function K(t) {
    try {
      var e = "";
      do (e += w(t)), (t = t.return);
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
  function J(t) {
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
  function yt(t) {
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
  function b(t) {
    if (J(t) !== t) throw Error(r(188));
  }
  function N(t) {
    var e = t.alternate;
    if (!e) {
      if (((e = J(t)), e === null)) throw Error(r(188));
      return e !== t ? null : t;
    }
    for (var n = t, i = e; ; ) {
      var s = n.return;
      if (s === null) break;
      var o = s.alternate;
      if (o === null) {
        if (((i = s.return), i !== null)) {
          n = i;
          continue;
        }
        break;
      }
      if (s.child === o.child) {
        for (o = s.child; o; ) {
          if (o === n) return b(s), t;
          if (o === i) return b(s), e;
          o = o.sibling;
        }
        throw Error(r(188));
      }
      if (n.return !== i.return) (n = s), (i = o);
      else {
        for (var f = !1, g = s.child; g; ) {
          if (g === n) {
            (f = !0), (n = s), (i = o);
            break;
          }
          if (g === i) {
            (f = !0), (i = s), (n = o);
            break;
          }
          g = g.sibling;
        }
        if (!f) {
          for (g = o.child; g; ) {
            if (g === n) {
              (f = !0), (n = o), (i = s);
              break;
            }
            if (g === i) {
              (f = !0), (i = o), (n = s);
              break;
            }
            g = g.sibling;
          }
          if (!f) throw Error(r(189));
        }
      }
      if (n.alternate !== i) throw Error(r(190));
    }
    if (n.tag !== 3) throw Error(r(188));
    return n.stateNode.current === n ? t : e;
  }
  function $(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null; ) {
      if (((e = $(t)), e !== null)) return e;
      t = t.sibling;
    }
    return null;
  }
  var k = Array.isArray,
    Y = u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    ft = { pending: !1, data: null, method: null, action: null },
    lt = [],
    ne = -1;
  function pt(t) {
    return { current: t };
  }
  function Nt(t) {
    0 > ne || ((t.current = lt[ne]), (lt[ne] = null), ne--);
  }
  function Dt(t, e) {
    ne++, (lt[ne] = t.current), (t.current = e);
  }
  var we = pt(null),
    oa = pt(null),
    yn = pt(null),
    Ml = pt(null);
  function xl(t, e) {
    switch ((Dt(yn, e), Dt(oa, t), Dt(we, null), (t = e.nodeType), t)) {
      case 9:
      case 11:
        e = (e = e.documentElement) && (e = e.namespaceURI) ? jd(e) : 0;
        break;
      default:
        if (
          ((t = t === 8 ? e.parentNode : e),
          (e = t.tagName),
          (t = t.namespaceURI))
        )
          (t = jd(t)), (e = wd(t, e));
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
    Nt(we), Dt(we, e);
  }
  function pi() {
    Nt(we), Nt(oa), Nt(yn);
  }
  function nu(t) {
    t.memoizedState !== null && Dt(Ml, t);
    var e = we.current,
      n = wd(e, t.type);
    e !== n && (Dt(oa, t), Dt(we, n));
  }
  function Rl(t) {
    oa.current === t && (Nt(we), Nt(oa)),
      Ml.current === t && (Nt(Ml), (el._currentValue = ft));
  }
  var iu = Object.prototype.hasOwnProperty,
    au = a.unstable_scheduleCallback,
    lu = a.unstable_cancelCallback,
    o0 = a.unstable_shouldYield,
    c0 = a.unstable_requestPaint,
    qe = a.unstable_now,
    f0 = a.unstable_getCurrentPriorityLevel,
    xc = a.unstable_ImmediatePriority,
    Rc = a.unstable_UserBlockingPriority,
    Ol = a.unstable_NormalPriority,
    h0 = a.unstable_LowPriority,
    Oc = a.unstable_IdlePriority,
    d0 = a.log,
    m0 = a.unstable_setDisableYieldValue,
    ca = null,
    oe = null;
  function y0(t) {
    if (oe && typeof oe.onCommitFiberRoot == "function")
      try {
        oe.onCommitFiberRoot(ca, t, void 0, (t.current.flags & 128) === 128);
      } catch {}
  }
  function pn(t) {
    if (
      (typeof d0 == "function" && m0(t),
      oe && typeof oe.setStrictMode == "function")
    )
      try {
        oe.setStrictMode(ca, t);
      } catch {}
  }
  var ce = Math.clz32 ? Math.clz32 : v0,
    p0 = Math.log,
    g0 = Math.LN2;
  function v0(t) {
    return (t >>>= 0), t === 0 ? 32 : (31 - ((p0(t) / g0) | 0)) | 0;
  }
  var Vl = 128,
    Cl = 4194304;
  function Xn(t) {
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
  function zl(t, e) {
    var n = t.pendingLanes;
    if (n === 0) return 0;
    var i = 0,
      s = t.suspendedLanes,
      o = t.pingedLanes,
      f = t.warmLanes;
    t = t.finishedLanes !== 0;
    var g = n & 134217727;
    return (
      g !== 0
        ? ((n = g & ~s),
          n !== 0
            ? (i = Xn(n))
            : ((o &= g),
              o !== 0
                ? (i = Xn(o))
                : t || ((f = g & ~f), f !== 0 && (i = Xn(f)))))
        : ((g = n & ~s),
          g !== 0
            ? (i = Xn(g))
            : o !== 0
            ? (i = Xn(o))
            : t || ((f = n & ~f), f !== 0 && (i = Xn(f)))),
      i === 0
        ? 0
        : e !== 0 &&
          e !== i &&
          (e & s) === 0 &&
          ((s = i & -i),
          (f = e & -e),
          s >= f || (s === 32 && (f & 4194176) !== 0))
        ? e
        : i
    );
  }
  function fa(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function S0(t, e) {
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
  function Vc() {
    var t = Vl;
    return (Vl <<= 1), (Vl & 4194176) === 0 && (Vl = 128), t;
  }
  function Cc() {
    var t = Cl;
    return (Cl <<= 1), (Cl & 62914560) === 0 && (Cl = 4194304), t;
  }
  function su(t) {
    for (var e = [], n = 0; 31 > n; n++) e.push(t);
    return e;
  }
  function ha(t, e) {
    (t.pendingLanes |= e),
      e !== 268435456 &&
        ((t.suspendedLanes = 0), (t.pingedLanes = 0), (t.warmLanes = 0));
  }
  function T0(t, e, n, i, s, o) {
    var f = t.pendingLanes;
    (t.pendingLanes = n),
      (t.suspendedLanes = 0),
      (t.pingedLanes = 0),
      (t.warmLanes = 0),
      (t.expiredLanes &= n),
      (t.entangledLanes &= n),
      (t.errorRecoveryDisabledLanes &= n),
      (t.shellSuspendCounter = 0);
    var g = t.entanglements,
      S = t.expirationTimes,
      E = t.hiddenUpdates;
    for (n = f & ~n; 0 < n; ) {
      var C = 31 - ce(n),
        _ = 1 << C;
      (g[C] = 0), (S[C] = -1);
      var R = E[C];
      if (R !== null)
        for (E[C] = null, C = 0; C < R.length; C++) {
          var V = R[C];
          V !== null && (V.lane &= -536870913);
        }
      n &= ~_;
    }
    i !== 0 && zc(t, i, 0),
      o !== 0 && s === 0 && t.tag !== 0 && (t.suspendedLanes |= o & ~(f & ~e));
  }
  function zc(t, e, n) {
    (t.pendingLanes |= e), (t.suspendedLanes &= ~e);
    var i = 31 - ce(e);
    (t.entangledLanes |= e),
      (t.entanglements[i] = t.entanglements[i] | 1073741824 | (n & 4194218));
  }
  function _c(t, e) {
    var n = (t.entangledLanes |= e);
    for (t = t.entanglements; n; ) {
      var i = 31 - ce(n),
        s = 1 << i;
      (s & e) | (t[i] & e) && (t[i] |= e), (n &= ~s);
    }
  }
  function Uc(t) {
    return (
      (t &= -t),
      2 < t ? (8 < t ? ((t & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function Bc() {
    var t = Y.p;
    return t !== 0 ? t : ((t = window.event), t === void 0 ? 32 : im(t.type));
  }
  function b0(t, e) {
    var n = Y.p;
    try {
      return (Y.p = t), e();
    } finally {
      Y.p = n;
    }
  }
  var gn = Math.random().toString(36).slice(2),
    Ft = "__reactFiber$" + gn,
    se = "__reactProps$" + gn,
    gi = "__reactContainer$" + gn,
    uu = "__reactEvents$" + gn,
    A0 = "__reactListeners$" + gn,
    E0 = "__reactHandles$" + gn,
    Nc = "__reactResources$" + gn,
    da = "__reactMarker$" + gn;
  function ru(t) {
    delete t[Ft], delete t[se], delete t[uu], delete t[A0], delete t[E0];
  }
  function Qn(t) {
    var e = t[Ft];
    if (e) return e;
    for (var n = t.parentNode; n; ) {
      if ((e = n[gi] || n[Ft])) {
        if (
          ((n = e.alternate),
          e.child !== null || (n !== null && n.child !== null))
        )
          for (t = Gd(t); t !== null; ) {
            if ((n = t[Ft])) return n;
            t = Gd(t);
          }
        return e;
      }
      (t = n), (n = t.parentNode);
    }
    return null;
  }
  function vi(t) {
    if ((t = t[Ft] || t[gi])) {
      var e = t.tag;
      if (e === 5 || e === 6 || e === 13 || e === 26 || e === 27 || e === 3)
        return t;
    }
    return null;
  }
  function ma(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(r(33));
  }
  function Si(t) {
    var e = t[Nc];
    return (
      e ||
        (e = t[Nc] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      e
    );
  }
  function Gt(t) {
    t[da] = !0;
  }
  var Hc = new Set(),
    Lc = {};
  function Zn(t, e) {
    Ti(t, e), Ti(t + "Capture", e);
  }
  function Ti(t, e) {
    for (Lc[t] = e, t = 0; t < e.length; t++) Hc.add(e[t]);
  }
  var Pe = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    D0 = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ),
    jc = {},
    wc = {};
  function M0(t) {
    return iu.call(wc, t)
      ? !0
      : iu.call(jc, t)
      ? !1
      : D0.test(t)
      ? (wc[t] = !0)
      : ((jc[t] = !0), !1);
  }
  function _l(t, e, n) {
    if (M0(e))
      if (n === null) t.removeAttribute(e);
      else {
        switch (typeof n) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(e);
            return;
          case "boolean":
            var i = e.toLowerCase().slice(0, 5);
            if (i !== "data-" && i !== "aria-") {
              t.removeAttribute(e);
              return;
            }
        }
        t.setAttribute(e, "" + n);
      }
  }
  function Ul(t, e, n) {
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
  function ke(t, e, n, i) {
    if (i === null) t.removeAttribute(n);
    else {
      switch (typeof i) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(n);
          return;
      }
      t.setAttributeNS(e, n, "" + i);
    }
  }
  function Te(t) {
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
  function qc(t) {
    var e = t.type;
    return (
      (t = t.nodeName) &&
      t.toLowerCase() === "input" &&
      (e === "checkbox" || e === "radio")
    );
  }
  function x0(t) {
    var e = qc(t) ? "checked" : "value",
      n = Object.getOwnPropertyDescriptor(t.constructor.prototype, e),
      i = "" + t[e];
    if (
      !t.hasOwnProperty(e) &&
      typeof n < "u" &&
      typeof n.get == "function" &&
      typeof n.set == "function"
    ) {
      var s = n.get,
        o = n.set;
      return (
        Object.defineProperty(t, e, {
          configurable: !0,
          get: function () {
            return s.call(this);
          },
          set: function (f) {
            (i = "" + f), o.call(this, f);
          },
        }),
        Object.defineProperty(t, e, { enumerable: n.enumerable }),
        {
          getValue: function () {
            return i;
          },
          setValue: function (f) {
            i = "" + f;
          },
          stopTracking: function () {
            (t._valueTracker = null), delete t[e];
          },
        }
      );
    }
  }
  function Bl(t) {
    t._valueTracker || (t._valueTracker = x0(t));
  }
  function Yc(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var n = e.getValue(),
      i = "";
    return (
      t && (i = qc(t) ? (t.checked ? "true" : "false") : t.value),
      (t = i),
      t !== n ? (e.setValue(t), !0) : !1
    );
  }
  function Nl(t) {
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
  var R0 = /[\n"\\]/g;
  function be(t) {
    return t.replace(R0, function (e) {
      return "\\" + e.charCodeAt(0).toString(16) + " ";
    });
  }
  function ou(t, e, n, i, s, o, f, g) {
    (t.name = ""),
      f != null &&
      typeof f != "function" &&
      typeof f != "symbol" &&
      typeof f != "boolean"
        ? (t.type = f)
        : t.removeAttribute("type"),
      e != null
        ? f === "number"
          ? ((e === 0 && t.value === "") || t.value != e) &&
            (t.value = "" + Te(e))
          : t.value !== "" + Te(e) && (t.value = "" + Te(e))
        : (f !== "submit" && f !== "reset") || t.removeAttribute("value"),
      e != null
        ? cu(t, f, Te(e))
        : n != null
        ? cu(t, f, Te(n))
        : i != null && t.removeAttribute("value"),
      s == null && o != null && (t.defaultChecked = !!o),
      s != null &&
        (t.checked = s && typeof s != "function" && typeof s != "symbol"),
      g != null &&
      typeof g != "function" &&
      typeof g != "symbol" &&
      typeof g != "boolean"
        ? (t.name = "" + Te(g))
        : t.removeAttribute("name");
  }
  function Gc(t, e, n, i, s, o, f, g) {
    if (
      (o != null &&
        typeof o != "function" &&
        typeof o != "symbol" &&
        typeof o != "boolean" &&
        (t.type = o),
      e != null || n != null)
    ) {
      if (!((o !== "submit" && o !== "reset") || e != null)) return;
      (n = n != null ? "" + Te(n) : ""),
        (e = e != null ? "" + Te(e) : n),
        g || e === t.value || (t.value = e),
        (t.defaultValue = e);
    }
    (i = i ?? s),
      (i = typeof i != "function" && typeof i != "symbol" && !!i),
      (t.checked = g ? t.checked : !!i),
      (t.defaultChecked = !!i),
      f != null &&
        typeof f != "function" &&
        typeof f != "symbol" &&
        typeof f != "boolean" &&
        (t.name = f);
  }
  function cu(t, e, n) {
    (e === "number" && Nl(t.ownerDocument) === t) ||
      t.defaultValue === "" + n ||
      (t.defaultValue = "" + n);
  }
  function bi(t, e, n, i) {
    if (((t = t.options), e)) {
      e = {};
      for (var s = 0; s < n.length; s++) e["$" + n[s]] = !0;
      for (n = 0; n < t.length; n++)
        (s = e.hasOwnProperty("$" + t[n].value)),
          t[n].selected !== s && (t[n].selected = s),
          s && i && (t[n].defaultSelected = !0);
    } else {
      for (n = "" + Te(n), e = null, s = 0; s < t.length; s++) {
        if (t[s].value === n) {
          (t[s].selected = !0), i && (t[s].defaultSelected = !0);
          return;
        }
        e !== null || t[s].disabled || (e = t[s]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function Xc(t, e, n) {
    if (
      e != null &&
      ((e = "" + Te(e)), e !== t.value && (t.value = e), n == null)
    ) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = n != null ? "" + Te(n) : "";
  }
  function Qc(t, e, n, i) {
    if (e == null) {
      if (i != null) {
        if (n != null) throw Error(r(92));
        if (k(i)) {
          if (1 < i.length) throw Error(r(93));
          i = i[0];
        }
        n = i;
      }
      n == null && (n = ""), (e = n);
    }
    (n = Te(e)),
      (t.defaultValue = n),
      (i = t.textContent),
      i === n && i !== "" && i !== null && (t.value = i);
  }
  function Ai(t, e) {
    if (e) {
      var n = t.firstChild;
      if (n && n === t.lastChild && n.nodeType === 3) {
        n.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var O0 = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Zc(t, e, n) {
    var i = e.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === ""
      ? i
        ? t.setProperty(e, "")
        : e === "float"
        ? (t.cssFloat = "")
        : (t[e] = "")
      : i
      ? t.setProperty(e, n)
      : typeof n != "number" || n === 0 || O0.has(e)
      ? e === "float"
        ? (t.cssFloat = n)
        : (t[e] = ("" + n).trim())
      : (t[e] = n + "px");
  }
  function Kc(t, e, n) {
    if (e != null && typeof e != "object") throw Error(r(62));
    if (((t = t.style), n != null)) {
      for (var i in n)
        !n.hasOwnProperty(i) ||
          (e != null && e.hasOwnProperty(i)) ||
          (i.indexOf("--") === 0
            ? t.setProperty(i, "")
            : i === "float"
            ? (t.cssFloat = "")
            : (t[i] = ""));
      for (var s in e)
        (i = e[s]), e.hasOwnProperty(s) && n[s] !== i && Zc(t, s, i);
    } else for (var o in e) e.hasOwnProperty(o) && Zc(t, o, e[o]);
  }
  function fu(t) {
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
  var V0 = new Map([
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
    C0 =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Hl(t) {
    return C0.test("" + t)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : t;
  }
  var hu = null;
  function du(t) {
    return (
      (t = t.target || t.srcElement || window),
      t.correspondingUseElement && (t = t.correspondingUseElement),
      t.nodeType === 3 ? t.parentNode : t
    );
  }
  var Ei = null,
    Di = null;
  function Jc(t) {
    var e = vi(t);
    if (e && (t = e.stateNode)) {
      var n = t[se] || null;
      t: switch (((t = e.stateNode), e.type)) {
        case "input":
          if (
            (ou(
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
                'input[name="' + be("" + e) + '"][type="radio"]'
              ),
                e = 0;
              e < n.length;
              e++
            ) {
              var i = n[e];
              if (i !== t && i.form === t.form) {
                var s = i[se] || null;
                if (!s) throw Error(r(90));
                ou(
                  i,
                  s.value,
                  s.defaultValue,
                  s.defaultValue,
                  s.checked,
                  s.defaultChecked,
                  s.type,
                  s.name
                );
              }
            }
            for (e = 0; e < n.length; e++)
              (i = n[e]), i.form === t.form && Yc(i);
          }
          break t;
        case "textarea":
          Xc(t, n.value, n.defaultValue);
          break t;
        case "select":
          (e = n.value), e != null && bi(t, !!n.multiple, e, !1);
      }
    }
  }
  var mu = !1;
  function Pc(t, e, n) {
    if (mu) return t(e, n);
    mu = !0;
    try {
      var i = t(e);
      return i;
    } finally {
      if (
        ((mu = !1),
        (Ei !== null || Di !== null) &&
          (Ss(), Ei && ((e = Ei), (t = Di), (Di = Ei = null), Jc(e), t)))
      )
        for (e = 0; e < t.length; e++) Jc(t[e]);
    }
  }
  function ya(t, e) {
    var n = t.stateNode;
    if (n === null) return null;
    var i = n[se] || null;
    if (i === null) return null;
    n = i[e];
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
        (i = !i.disabled) ||
          ((t = t.type),
          (i = !(
            t === "button" ||
            t === "input" ||
            t === "select" ||
            t === "textarea"
          ))),
          (t = !i);
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (n && typeof n != "function") throw Error(r(231, e, typeof n));
    return n;
  }
  var yu = !1;
  if (Pe)
    try {
      var pa = {};
      Object.defineProperty(pa, "passive", {
        get: function () {
          yu = !0;
        },
      }),
        window.addEventListener("test", pa, pa),
        window.removeEventListener("test", pa, pa);
    } catch {
      yu = !1;
    }
  var vn = null,
    pu = null,
    Ll = null;
  function kc() {
    if (Ll) return Ll;
    var t,
      e = pu,
      n = e.length,
      i,
      s = "value" in vn ? vn.value : vn.textContent,
      o = s.length;
    for (t = 0; t < n && e[t] === s[t]; t++);
    var f = n - t;
    for (i = 1; i <= f && e[n - i] === s[o - i]; i++);
    return (Ll = s.slice(t, 1 < i ? 1 - i : void 0));
  }
  function jl(t) {
    var e = t.keyCode;
    return (
      "charCode" in t
        ? ((t = t.charCode), t === 0 && e === 13 && (t = 13))
        : (t = e),
      t === 10 && (t = 13),
      32 <= t || t === 13 ? t : 0
    );
  }
  function wl() {
    return !0;
  }
  function Fc() {
    return !1;
  }
  function ue(t) {
    function e(n, i, s, o, f) {
      (this._reactName = n),
        (this._targetInst = s),
        (this.type = i),
        (this.nativeEvent = o),
        (this.target = f),
        (this.currentTarget = null);
      for (var g in t)
        t.hasOwnProperty(g) && ((n = t[g]), (this[g] = n ? n(o) : o[g]));
      return (
        (this.isDefaultPrevented = (
          o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
        )
          ? wl
          : Fc),
        (this.isPropagationStopped = Fc),
        this
      );
    }
    return (
      et(e.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = wl));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = wl));
        },
        persist: function () {},
        isPersistent: wl,
      }),
      e
    );
  }
  var Kn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (t) {
        return t.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    ql = ue(Kn),
    ga = et({}, Kn, { view: 0, detail: 0 }),
    z0 = ue(ga),
    gu,
    vu,
    va,
    Yl = et({}, ga, {
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
      getModifierState: Tu,
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
          : (t !== va &&
              (va && t.type === "mousemove"
                ? ((gu = t.screenX - va.screenX), (vu = t.screenY - va.screenY))
                : (vu = gu = 0),
              (va = t)),
            gu);
      },
      movementY: function (t) {
        return "movementY" in t ? t.movementY : vu;
      },
    }),
    Wc = ue(Yl),
    _0 = et({}, Yl, { dataTransfer: 0 }),
    U0 = ue(_0),
    B0 = et({}, ga, { relatedTarget: 0 }),
    Su = ue(B0),
    N0 = et({}, Kn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    H0 = ue(N0),
    L0 = et({}, Kn, {
      clipboardData: function (t) {
        return "clipboardData" in t ? t.clipboardData : window.clipboardData;
      },
    }),
    j0 = ue(L0),
    w0 = et({}, Kn, { data: 0 }),
    $c = ue(w0),
    q0 = {
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
    Y0 = {
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
    G0 = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function X0(t) {
    var e = this.nativeEvent;
    return e.getModifierState
      ? e.getModifierState(t)
      : (t = G0[t])
      ? !!e[t]
      : !1;
  }
  function Tu() {
    return X0;
  }
  var Q0 = et({}, ga, {
      key: function (t) {
        if (t.key) {
          var e = q0[t.key] || t.key;
          if (e !== "Unidentified") return e;
        }
        return t.type === "keypress"
          ? ((t = jl(t)), t === 13 ? "Enter" : String.fromCharCode(t))
          : t.type === "keydown" || t.type === "keyup"
          ? Y0[t.keyCode] || "Unidentified"
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
      getModifierState: Tu,
      charCode: function (t) {
        return t.type === "keypress" ? jl(t) : 0;
      },
      keyCode: function (t) {
        return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
      },
      which: function (t) {
        return t.type === "keypress"
          ? jl(t)
          : t.type === "keydown" || t.type === "keyup"
          ? t.keyCode
          : 0;
      },
    }),
    Z0 = ue(Q0),
    K0 = et({}, Yl, {
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
    Ic = ue(K0),
    J0 = et({}, ga, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Tu,
    }),
    P0 = ue(J0),
    k0 = et({}, Kn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    F0 = ue(k0),
    W0 = et({}, Yl, {
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
    $0 = ue(W0),
    I0 = et({}, Kn, { newState: 0, oldState: 0 }),
    tg = ue(I0),
    eg = [9, 13, 27, 32],
    bu = Pe && "CompositionEvent" in window,
    Sa = null;
  Pe && "documentMode" in document && (Sa = document.documentMode);
  var ng = Pe && "TextEvent" in window && !Sa,
    tf = Pe && (!bu || (Sa && 8 < Sa && 11 >= Sa)),
    ef = " ",
    nf = !1;
  function af(t, e) {
    switch (t) {
      case "keyup":
        return eg.indexOf(e.keyCode) !== -1;
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
  function lf(t) {
    return (t = t.detail), typeof t == "object" && "data" in t ? t.data : null;
  }
  var Mi = !1;
  function ig(t, e) {
    switch (t) {
      case "compositionend":
        return lf(e);
      case "keypress":
        return e.which !== 32 ? null : ((nf = !0), ef);
      case "textInput":
        return (t = e.data), t === ef && nf ? null : t;
      default:
        return null;
    }
  }
  function ag(t, e) {
    if (Mi)
      return t === "compositionend" || (!bu && af(t, e))
        ? ((t = kc()), (Ll = pu = vn = null), (Mi = !1), t)
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
        return tf && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var lg = {
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
  function sf(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!lg[t.type] : e === "textarea";
  }
  function uf(t, e, n, i) {
    Ei ? (Di ? Di.push(i) : (Di = [i])) : (Ei = i),
      (e = Ds(e, "onChange")),
      0 < e.length &&
        ((n = new ql("onChange", "change", null, n, i)),
        t.push({ event: n, listeners: e }));
  }
  var Ta = null,
    ba = null;
  function sg(t) {
    Ud(t, 0);
  }
  function Gl(t) {
    var e = ma(t);
    if (Yc(e)) return t;
  }
  function rf(t, e) {
    if (t === "change") return e;
  }
  var of = !1;
  if (Pe) {
    var Au;
    if (Pe) {
      var Eu = "oninput" in document;
      if (!Eu) {
        var cf = document.createElement("div");
        cf.setAttribute("oninput", "return;"),
          (Eu = typeof cf.oninput == "function");
      }
      Au = Eu;
    } else Au = !1;
    of = Au && (!document.documentMode || 9 < document.documentMode);
  }
  function ff() {
    Ta && (Ta.detachEvent("onpropertychange", hf), (ba = Ta = null));
  }
  function hf(t) {
    if (t.propertyName === "value" && Gl(ba)) {
      var e = [];
      uf(e, ba, t, du(t)), Pc(sg, e);
    }
  }
  function ug(t, e, n) {
    t === "focusin"
      ? (ff(), (Ta = e), (ba = n), Ta.attachEvent("onpropertychange", hf))
      : t === "focusout" && ff();
  }
  function rg(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return Gl(ba);
  }
  function og(t, e) {
    if (t === "click") return Gl(e);
  }
  function cg(t, e) {
    if (t === "input" || t === "change") return Gl(e);
  }
  function fg(t, e) {
    return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
  }
  var fe = typeof Object.is == "function" ? Object.is : fg;
  function Aa(t, e) {
    if (fe(t, e)) return !0;
    if (
      typeof t != "object" ||
      t === null ||
      typeof e != "object" ||
      e === null
    )
      return !1;
    var n = Object.keys(t),
      i = Object.keys(e);
    if (n.length !== i.length) return !1;
    for (i = 0; i < n.length; i++) {
      var s = n[i];
      if (!iu.call(e, s) || !fe(t[s], e[s])) return !1;
    }
    return !0;
  }
  function df(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function mf(t, e) {
    var n = df(t);
    t = 0;
    for (var i; n; ) {
      if (n.nodeType === 3) {
        if (((i = t + n.textContent.length), t <= e && i >= e))
          return { node: n, offset: e - t };
        t = i;
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
      n = df(n);
    }
  }
  function yf(t, e) {
    return t && e
      ? t === e
        ? !0
        : t && t.nodeType === 3
        ? !1
        : e && e.nodeType === 3
        ? yf(t, e.parentNode)
        : "contains" in t
        ? t.contains(e)
        : t.compareDocumentPosition
        ? !!(t.compareDocumentPosition(e) & 16)
        : !1
      : !1;
  }
  function pf(t) {
    t =
      t != null &&
      t.ownerDocument != null &&
      t.ownerDocument.defaultView != null
        ? t.ownerDocument.defaultView
        : window;
    for (var e = Nl(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var n = typeof e.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) t = e.contentWindow;
      else break;
      e = Nl(t.document);
    }
    return e;
  }
  function Du(t) {
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
  function hg(t, e) {
    var n = pf(e);
    e = t.focusedElem;
    var i = t.selectionRange;
    if (
      n !== e &&
      e &&
      e.ownerDocument &&
      yf(e.ownerDocument.documentElement, e)
    ) {
      if (i !== null && Du(e)) {
        if (
          ((t = i.start),
          (n = i.end),
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
          var s = e.textContent.length,
            o = Math.min(i.start, s);
          (i = i.end === void 0 ? o : Math.min(i.end, s)),
            !n.extend && o > i && ((s = i), (i = o), (o = s)),
            (s = mf(e, o));
          var f = mf(e, i);
          s &&
            f &&
            (n.rangeCount !== 1 ||
              n.anchorNode !== s.node ||
              n.anchorOffset !== s.offset ||
              n.focusNode !== f.node ||
              n.focusOffset !== f.offset) &&
            ((t = t.createRange()),
            t.setStart(s.node, s.offset),
            n.removeAllRanges(),
            o > i
              ? (n.addRange(t), n.extend(f.node, f.offset))
              : (t.setEnd(f.node, f.offset), n.addRange(t)));
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
  var dg = Pe && "documentMode" in document && 11 >= document.documentMode,
    xi = null,
    Mu = null,
    Ea = null,
    xu = !1;
  function gf(t, e, n) {
    var i =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    xu ||
      xi == null ||
      xi !== Nl(i) ||
      ((i = xi),
      "selectionStart" in i && Du(i)
        ? (i = { start: i.selectionStart, end: i.selectionEnd })
        : ((i = (
            (i.ownerDocument && i.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (i = {
            anchorNode: i.anchorNode,
            anchorOffset: i.anchorOffset,
            focusNode: i.focusNode,
            focusOffset: i.focusOffset,
          })),
      (Ea && Aa(Ea, i)) ||
        ((Ea = i),
        (i = Ds(Mu, "onSelect")),
        0 < i.length &&
          ((e = new ql("onSelect", "select", null, e, n)),
          t.push({ event: e, listeners: i }),
          (e.target = xi))));
  }
  function Jn(t, e) {
    var n = {};
    return (
      (n[t.toLowerCase()] = e.toLowerCase()),
      (n["Webkit" + t] = "webkit" + e),
      (n["Moz" + t] = "moz" + e),
      n
    );
  }
  var Ri = {
      animationend: Jn("Animation", "AnimationEnd"),
      animationiteration: Jn("Animation", "AnimationIteration"),
      animationstart: Jn("Animation", "AnimationStart"),
      transitionrun: Jn("Transition", "TransitionRun"),
      transitionstart: Jn("Transition", "TransitionStart"),
      transitioncancel: Jn("Transition", "TransitionCancel"),
      transitionend: Jn("Transition", "TransitionEnd"),
    },
    Ru = {},
    vf = {};
  Pe &&
    ((vf = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Ri.animationend.animation,
      delete Ri.animationiteration.animation,
      delete Ri.animationstart.animation),
    "TransitionEvent" in window || delete Ri.transitionend.transition);
  function Pn(t) {
    if (Ru[t]) return Ru[t];
    if (!Ri[t]) return t;
    var e = Ri[t],
      n;
    for (n in e) if (e.hasOwnProperty(n) && n in vf) return (Ru[t] = e[n]);
    return t;
  }
  var Sf = Pn("animationend"),
    Tf = Pn("animationiteration"),
    bf = Pn("animationstart"),
    mg = Pn("transitionrun"),
    yg = Pn("transitionstart"),
    pg = Pn("transitioncancel"),
    Af = Pn("transitionend"),
    Ef = new Map(),
    Df =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(
        " "
      );
  function Be(t, e) {
    Ef.set(t, e), Zn(e, [t]);
  }
  var Ae = [],
    Oi = 0,
    Ou = 0;
  function Xl() {
    for (var t = Oi, e = (Ou = Oi = 0); e < t; ) {
      var n = Ae[e];
      Ae[e++] = null;
      var i = Ae[e];
      Ae[e++] = null;
      var s = Ae[e];
      Ae[e++] = null;
      var o = Ae[e];
      if (((Ae[e++] = null), i !== null && s !== null)) {
        var f = i.pending;
        f === null ? (s.next = s) : ((s.next = f.next), (f.next = s)),
          (i.pending = s);
      }
      o !== 0 && Mf(n, s, o);
    }
  }
  function Ql(t, e, n, i) {
    (Ae[Oi++] = t),
      (Ae[Oi++] = e),
      (Ae[Oi++] = n),
      (Ae[Oi++] = i),
      (Ou |= i),
      (t.lanes |= i),
      (t = t.alternate),
      t !== null && (t.lanes |= i);
  }
  function Vu(t, e, n, i) {
    return Ql(t, e, n, i), Zl(t);
  }
  function Sn(t, e) {
    return Ql(t, null, null, e), Zl(t);
  }
  function Mf(t, e, n) {
    t.lanes |= n;
    var i = t.alternate;
    i !== null && (i.lanes |= n);
    for (var s = !1, o = t.return; o !== null; )
      (o.childLanes |= n),
        (i = o.alternate),
        i !== null && (i.childLanes |= n),
        o.tag === 22 &&
          ((t = o.stateNode), t === null || t._visibility & 1 || (s = !0)),
        (t = o),
        (o = o.return);
    s &&
      e !== null &&
      t.tag === 3 &&
      ((o = t.stateNode),
      (s = 31 - ce(n)),
      (o = o.hiddenUpdates),
      (t = o[s]),
      t === null ? (o[s] = [e]) : t.push(e),
      (e.lane = n | 536870912));
  }
  function Zl(t) {
    if (50 < Pa) throw ((Pa = 0), (Nr = null), Error(r(185)));
    for (var e = t.return; e !== null; ) (t = e), (e = t.return);
    return t.tag === 3 ? t.stateNode : null;
  }
  var Vi = {},
    xf = new WeakMap();
  function Ee(t, e) {
    if (typeof t == "object" && t !== null) {
      var n = xf.get(t);
      return n !== void 0
        ? n
        : ((e = { value: t, source: e, stack: K(e) }), xf.set(t, e), e);
    }
    return { value: t, source: e, stack: K(e) };
  }
  var Ci = [],
    zi = 0,
    Kl = null,
    Jl = 0,
    De = [],
    Me = 0,
    kn = null,
    Fe = 1,
    We = "";
  function Fn(t, e) {
    (Ci[zi++] = Jl), (Ci[zi++] = Kl), (Kl = t), (Jl = e);
  }
  function Rf(t, e, n) {
    (De[Me++] = Fe), (De[Me++] = We), (De[Me++] = kn), (kn = t);
    var i = Fe;
    t = We;
    var s = 32 - ce(i) - 1;
    (i &= ~(1 << s)), (n += 1);
    var o = 32 - ce(e) + s;
    if (30 < o) {
      var f = s - (s % 5);
      (o = (i & ((1 << f) - 1)).toString(32)),
        (i >>= f),
        (s -= f),
        (Fe = (1 << (32 - ce(e) + s)) | (n << s) | i),
        (We = o + t);
    } else (Fe = (1 << o) | (n << s) | i), (We = t);
  }
  function Cu(t) {
    t.return !== null && (Fn(t, 1), Rf(t, 1, 0));
  }
  function zu(t) {
    for (; t === Kl; )
      (Kl = Ci[--zi]), (Ci[zi] = null), (Jl = Ci[--zi]), (Ci[zi] = null);
    for (; t === kn; )
      (kn = De[--Me]),
        (De[Me] = null),
        (We = De[--Me]),
        (De[Me] = null),
        (Fe = De[--Me]),
        (De[Me] = null);
  }
  var ie = null,
    Kt = null,
    dt = !1,
    Ne = null,
    Ye = !1,
    _u = Error(r(519));
  function Wn(t) {
    var e = Error(r(418, ""));
    throw (xa(Ee(e, t)), _u);
  }
  function Of(t) {
    var e = t.stateNode,
      n = t.type,
      i = t.memoizedProps;
    switch (((e[Ft] = t), (e[se] = i), n)) {
      case "dialog":
        ct("cancel", e), ct("close", e);
        break;
      case "iframe":
      case "object":
      case "embed":
        ct("load", e);
        break;
      case "video":
      case "audio":
        for (n = 0; n < Fa.length; n++) ct(Fa[n], e);
        break;
      case "source":
        ct("error", e);
        break;
      case "img":
      case "image":
      case "link":
        ct("error", e), ct("load", e);
        break;
      case "details":
        ct("toggle", e);
        break;
      case "input":
        ct("invalid", e),
          Gc(
            e,
            i.value,
            i.defaultValue,
            i.checked,
            i.defaultChecked,
            i.type,
            i.name,
            !0
          ),
          Bl(e);
        break;
      case "select":
        ct("invalid", e);
        break;
      case "textarea":
        ct("invalid", e), Qc(e, i.value, i.defaultValue, i.children), Bl(e);
    }
    (n = i.children),
      (typeof n != "string" && typeof n != "number" && typeof n != "bigint") ||
      e.textContent === "" + n ||
      i.suppressHydrationWarning === !0 ||
      Ld(e.textContent, n)
        ? (i.popover != null && (ct("beforetoggle", e), ct("toggle", e)),
          i.onScroll != null && ct("scroll", e),
          i.onScrollEnd != null && ct("scrollend", e),
          i.onClick != null && (e.onclick = Ms),
          (e = !0))
        : (e = !1),
      e || Wn(t);
  }
  function Vf(t) {
    for (ie = t.return; ie; )
      switch (ie.tag) {
        case 3:
        case 27:
          Ye = !0;
          return;
        case 5:
        case 13:
          Ye = !1;
          return;
        default:
          ie = ie.return;
      }
  }
  function Da(t) {
    if (t !== ie) return !1;
    if (!dt) return Vf(t), (dt = !0), !1;
    var e = !1,
      n;
    if (
      ((n = t.tag !== 3 && t.tag !== 27) &&
        ((n = t.tag === 5) &&
          ((n = t.type),
          (n =
            !(n !== "form" && n !== "button") || $r(t.type, t.memoizedProps))),
        (n = !n)),
      n && (e = !0),
      e && Kt && Wn(t),
      Vf(t),
      t.tag === 13)
    ) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
        throw Error(r(317));
      t: {
        for (t = t.nextSibling, e = 0; t; ) {
          if (t.nodeType === 8)
            if (((n = t.data), n === "/$")) {
              if (e === 0) {
                Kt = Le(t.nextSibling);
                break t;
              }
              e--;
            } else (n !== "$" && n !== "$!" && n !== "$?") || e++;
          t = t.nextSibling;
        }
        Kt = null;
      }
    } else Kt = ie ? Le(t.stateNode.nextSibling) : null;
    return !0;
  }
  function Ma() {
    (Kt = ie = null), (dt = !1);
  }
  function xa(t) {
    Ne === null ? (Ne = [t]) : Ne.push(t);
  }
  var Ra = Error(r(460)),
    Cf = Error(r(474)),
    Uu = { then: function () {} };
  function zf(t) {
    return (t = t.status), t === "fulfilled" || t === "rejected";
  }
  function Pl() {}
  function _f(t, e, n) {
    switch (
      ((n = t[n]),
      n === void 0 ? t.push(e) : n !== e && (e.then(Pl, Pl), (e = n)),
      e.status)
    ) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw ((t = e.reason), t === Ra ? Error(r(483)) : t);
      default:
        if (typeof e.status == "string") e.then(Pl, Pl);
        else {
          if (((t = bt), t !== null && 100 < t.shellSuspendCounter))
            throw Error(r(482));
          (t = e),
            (t.status = "pending"),
            t.then(
              function (i) {
                if (e.status === "pending") {
                  var s = e;
                  (s.status = "fulfilled"), (s.value = i);
                }
              },
              function (i) {
                if (e.status === "pending") {
                  var s = e;
                  (s.status = "rejected"), (s.reason = i);
                }
              }
            );
        }
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw ((t = e.reason), t === Ra ? Error(r(483)) : t);
        }
        throw ((Oa = e), Ra);
    }
  }
  var Oa = null;
  function Uf() {
    if (Oa === null) throw Error(r(459));
    var t = Oa;
    return (Oa = null), t;
  }
  var _i = null,
    Va = 0;
  function kl(t) {
    var e = Va;
    return (Va += 1), _i === null && (_i = []), _f(_i, t, e);
  }
  function Ca(t, e) {
    (e = e.props.ref), (t.ref = e !== void 0 ? e : null);
  }
  function Fl(t, e) {
    throw e.$$typeof === d
      ? Error(r(525))
      : ((t = Object.prototype.toString.call(e)),
        Error(
          r(
            31,
            t === "[object Object]"
              ? "object with keys {" + Object.keys(e).join(", ") + "}"
              : t
          )
        ));
  }
  function Bf(t) {
    var e = t._init;
    return e(t._payload);
  }
  function Nf(t) {
    function e(M, A) {
      if (t) {
        var x = M.deletions;
        x === null ? ((M.deletions = [A]), (M.flags |= 16)) : x.push(A);
      }
    }
    function n(M, A) {
      if (!t) return null;
      for (; A !== null; ) e(M, A), (A = A.sibling);
      return null;
    }
    function i(M) {
      for (var A = new Map(); M !== null; )
        M.key !== null ? A.set(M.key, M) : A.set(M.index, M), (M = M.sibling);
      return A;
    }
    function s(M, A) {
      return (M = zn(M, A)), (M.index = 0), (M.sibling = null), M;
    }
    function o(M, A, x) {
      return (
        (M.index = x),
        t
          ? ((x = M.alternate),
            x !== null
              ? ((x = x.index), x < A ? ((M.flags |= 33554434), A) : x)
              : ((M.flags |= 33554434), A))
          : ((M.flags |= 1048576), A)
      );
    }
    function f(M) {
      return t && M.alternate === null && (M.flags |= 33554434), M;
    }
    function g(M, A, x, z) {
      return A === null || A.tag !== 6
        ? ((A = Rr(x, M.mode, z)), (A.return = M), A)
        : ((A = s(A, x)), (A.return = M), A);
    }
    function S(M, A, x, z) {
      var X = x.type;
      return X === m
        ? C(M, A, x.props.children, z, x.key)
        : A !== null &&
          (A.elementType === X ||
            (typeof X == "object" &&
              X !== null &&
              X.$$typeof === q &&
              Bf(X) === A.type))
        ? ((A = s(A, x.props)), Ca(A, x), (A.return = M), A)
        : ((A = ms(x.type, x.key, x.props, null, M.mode, z)),
          Ca(A, x),
          (A.return = M),
          A);
    }
    function E(M, A, x, z) {
      return A === null ||
        A.tag !== 4 ||
        A.stateNode.containerInfo !== x.containerInfo ||
        A.stateNode.implementation !== x.implementation
        ? ((A = Or(x, M.mode, z)), (A.return = M), A)
        : ((A = s(A, x.children || [])), (A.return = M), A);
    }
    function C(M, A, x, z, X) {
      return A === null || A.tag !== 7
        ? ((A = ui(x, M.mode, z, X)), (A.return = M), A)
        : ((A = s(A, x)), (A.return = M), A);
    }
    function _(M, A, x) {
      if (
        (typeof A == "string" && A !== "") ||
        typeof A == "number" ||
        typeof A == "bigint"
      )
        return (A = Rr("" + A, M.mode, x)), (A.return = M), A;
      if (typeof A == "object" && A !== null) {
        switch (A.$$typeof) {
          case h:
            return (
              (x = ms(A.type, A.key, A.props, null, M.mode, x)),
              Ca(x, A),
              (x.return = M),
              x
            );
          case p:
            return (A = Or(A, M.mode, x)), (A.return = M), A;
          case q:
            var z = A._init;
            return (A = z(A._payload)), _(M, A, x);
        }
        if (k(A) || it(A))
          return (A = ui(A, M.mode, x, null)), (A.return = M), A;
        if (typeof A.then == "function") return _(M, kl(A), x);
        if (A.$$typeof === O) return _(M, fs(M, A), x);
        Fl(M, A);
      }
      return null;
    }
    function R(M, A, x, z) {
      var X = A !== null ? A.key : null;
      if (
        (typeof x == "string" && x !== "") ||
        typeof x == "number" ||
        typeof x == "bigint"
      )
        return X !== null ? null : g(M, A, "" + x, z);
      if (typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case h:
            return x.key === X ? S(M, A, x, z) : null;
          case p:
            return x.key === X ? E(M, A, x, z) : null;
          case q:
            return (X = x._init), (x = X(x._payload)), R(M, A, x, z);
        }
        if (k(x) || it(x)) return X !== null ? null : C(M, A, x, z, null);
        if (typeof x.then == "function") return R(M, A, kl(x), z);
        if (x.$$typeof === O) return R(M, A, fs(M, x), z);
        Fl(M, x);
      }
      return null;
    }
    function V(M, A, x, z, X) {
      if (
        (typeof z == "string" && z !== "") ||
        typeof z == "number" ||
        typeof z == "bigint"
      )
        return (M = M.get(x) || null), g(A, M, "" + z, X);
      if (typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case h:
            return (
              (M = M.get(z.key === null ? x : z.key) || null), S(A, M, z, X)
            );
          case p:
            return (
              (M = M.get(z.key === null ? x : z.key) || null), E(A, M, z, X)
            );
          case q:
            var ut = z._init;
            return (z = ut(z._payload)), V(M, A, x, z, X);
        }
        if (k(z) || it(z)) return (M = M.get(x) || null), C(A, M, z, X, null);
        if (typeof z.then == "function") return V(M, A, x, kl(z), X);
        if (z.$$typeof === O) return V(M, A, x, fs(A, z), X);
        Fl(A, z);
      }
      return null;
    }
    function Z(M, A, x, z) {
      for (
        var X = null, ut = null, P = A, F = (A = 0), Zt = null;
        P !== null && F < x.length;
        F++
      ) {
        P.index > F ? ((Zt = P), (P = null)) : (Zt = P.sibling);
        var mt = R(M, P, x[F], z);
        if (mt === null) {
          P === null && (P = Zt);
          break;
        }
        t && P && mt.alternate === null && e(M, P),
          (A = o(mt, A, F)),
          ut === null ? (X = mt) : (ut.sibling = mt),
          (ut = mt),
          (P = Zt);
      }
      if (F === x.length) return n(M, P), dt && Fn(M, F), X;
      if (P === null) {
        for (; F < x.length; F++)
          (P = _(M, x[F], z)),
            P !== null &&
              ((A = o(P, A, F)),
              ut === null ? (X = P) : (ut.sibling = P),
              (ut = P));
        return dt && Fn(M, F), X;
      }
      for (P = i(P); F < x.length; F++)
        (Zt = V(P, M, F, x[F], z)),
          Zt !== null &&
            (t &&
              Zt.alternate !== null &&
              P.delete(Zt.key === null ? F : Zt.key),
            (A = o(Zt, A, F)),
            ut === null ? (X = Zt) : (ut.sibling = Zt),
            (ut = Zt));
      return (
        t &&
          P.forEach(function (jn) {
            return e(M, jn);
          }),
        dt && Fn(M, F),
        X
      );
    }
    function nt(M, A, x, z) {
      if (x == null) throw Error(r(151));
      for (
        var X = null, ut = null, P = A, F = (A = 0), Zt = null, mt = x.next();
        P !== null && !mt.done;
        F++, mt = x.next()
      ) {
        P.index > F ? ((Zt = P), (P = null)) : (Zt = P.sibling);
        var jn = R(M, P, mt.value, z);
        if (jn === null) {
          P === null && (P = Zt);
          break;
        }
        t && P && jn.alternate === null && e(M, P),
          (A = o(jn, A, F)),
          ut === null ? (X = jn) : (ut.sibling = jn),
          (ut = jn),
          (P = Zt);
      }
      if (mt.done) return n(M, P), dt && Fn(M, F), X;
      if (P === null) {
        for (; !mt.done; F++, mt = x.next())
          (mt = _(M, mt.value, z)),
            mt !== null &&
              ((A = o(mt, A, F)),
              ut === null ? (X = mt) : (ut.sibling = mt),
              (ut = mt));
        return dt && Fn(M, F), X;
      }
      for (P = i(P); !mt.done; F++, mt = x.next())
        (mt = V(P, M, F, mt.value, z)),
          mt !== null &&
            (t &&
              mt.alternate !== null &&
              P.delete(mt.key === null ? F : mt.key),
            (A = o(mt, A, F)),
            ut === null ? (X = mt) : (ut.sibling = mt),
            (ut = mt));
      return (
        t &&
          P.forEach(function (Cv) {
            return e(M, Cv);
          }),
        dt && Fn(M, F),
        X
      );
    }
    function Ct(M, A, x, z) {
      if (
        (typeof x == "object" &&
          x !== null &&
          x.type === m &&
          x.key === null &&
          (x = x.props.children),
        typeof x == "object" && x !== null)
      ) {
        switch (x.$$typeof) {
          case h:
            t: {
              for (var X = x.key; A !== null; ) {
                if (A.key === X) {
                  if (((X = x.type), X === m)) {
                    if (A.tag === 7) {
                      n(M, A.sibling),
                        (z = s(A, x.props.children)),
                        (z.return = M),
                        (M = z);
                      break t;
                    }
                  } else if (
                    A.elementType === X ||
                    (typeof X == "object" &&
                      X !== null &&
                      X.$$typeof === q &&
                      Bf(X) === A.type)
                  ) {
                    n(M, A.sibling),
                      (z = s(A, x.props)),
                      Ca(z, x),
                      (z.return = M),
                      (M = z);
                    break t;
                  }
                  n(M, A);
                  break;
                } else e(M, A);
                A = A.sibling;
              }
              x.type === m
                ? ((z = ui(x.props.children, M.mode, z, x.key)),
                  (z.return = M),
                  (M = z))
                : ((z = ms(x.type, x.key, x.props, null, M.mode, z)),
                  Ca(z, x),
                  (z.return = M),
                  (M = z));
            }
            return f(M);
          case p:
            t: {
              for (X = x.key; A !== null; ) {
                if (A.key === X)
                  if (
                    A.tag === 4 &&
                    A.stateNode.containerInfo === x.containerInfo &&
                    A.stateNode.implementation === x.implementation
                  ) {
                    n(M, A.sibling),
                      (z = s(A, x.children || [])),
                      (z.return = M),
                      (M = z);
                    break t;
                  } else {
                    n(M, A);
                    break;
                  }
                else e(M, A);
                A = A.sibling;
              }
              (z = Or(x, M.mode, z)), (z.return = M), (M = z);
            }
            return f(M);
          case q:
            return (X = x._init), (x = X(x._payload)), Ct(M, A, x, z);
        }
        if (k(x)) return Z(M, A, x, z);
        if (it(x)) {
          if (((X = it(x)), typeof X != "function")) throw Error(r(150));
          return (x = X.call(x)), nt(M, A, x, z);
        }
        if (typeof x.then == "function") return Ct(M, A, kl(x), z);
        if (x.$$typeof === O) return Ct(M, A, fs(M, x), z);
        Fl(M, x);
      }
      return (typeof x == "string" && x !== "") ||
        typeof x == "number" ||
        typeof x == "bigint"
        ? ((x = "" + x),
          A !== null && A.tag === 6
            ? (n(M, A.sibling), (z = s(A, x)), (z.return = M), (M = z))
            : (n(M, A), (z = Rr(x, M.mode, z)), (z.return = M), (M = z)),
          f(M))
        : n(M, A);
    }
    return function (M, A, x, z) {
      try {
        Va = 0;
        var X = Ct(M, A, x, z);
        return (_i = null), X;
      } catch (P) {
        if (P === Ra) throw P;
        var ut = Ve(29, P, null, M.mode);
        return (ut.lanes = z), (ut.return = M), ut;
      } finally {
      }
    };
  }
  var $n = Nf(!0),
    Hf = Nf(!1),
    Ui = pt(null),
    Wl = pt(0);
  function Lf(t, e) {
    (t = on), Dt(Wl, t), Dt(Ui, e), (on = t | e.baseLanes);
  }
  function Bu() {
    Dt(Wl, on), Dt(Ui, Ui.current);
  }
  function Nu() {
    (on = Wl.current), Nt(Ui), Nt(Wl);
  }
  var xe = pt(null),
    Ge = null;
  function Tn(t) {
    var e = t.alternate;
    Dt(qt, qt.current & 1),
      Dt(xe, t),
      Ge === null &&
        (e === null || Ui.current !== null || e.memoizedState !== null) &&
        (Ge = t);
  }
  function jf(t) {
    if (t.tag === 22) {
      if ((Dt(qt, qt.current), Dt(xe, t), Ge === null)) {
        var e = t.alternate;
        e !== null && e.memoizedState !== null && (Ge = t);
      }
    } else bn();
  }
  function bn() {
    Dt(qt, qt.current), Dt(xe, xe.current);
  }
  function $e(t) {
    Nt(xe), Ge === t && (Ge = null), Nt(qt);
  }
  var qt = pt(0);
  function $l(t) {
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
  var gg =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var t = [],
              e = (this.signal = {
                aborted: !1,
                addEventListener: function (n, i) {
                  t.push(i);
                },
              });
            this.abort = function () {
              (e.aborted = !0),
                t.forEach(function (n) {
                  return n();
                });
            };
          },
    vg = a.unstable_scheduleCallback,
    Sg = a.unstable_NormalPriority,
    Yt = {
      $$typeof: O,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function Hu() {
    return { controller: new gg(), data: new Map(), refCount: 0 };
  }
  function za(t) {
    t.refCount--,
      t.refCount === 0 &&
        vg(Sg, function () {
          t.controller.abort();
        });
  }
  var _a = null,
    Lu = 0,
    Bi = 0,
    Ni = null;
  function Tg(t, e) {
    if (_a === null) {
      var n = (_a = []);
      (Lu = 0),
        (Bi = Xr()),
        (Ni = {
          status: "pending",
          value: void 0,
          then: function (i) {
            n.push(i);
          },
        });
    }
    return Lu++, e.then(wf, wf), e;
  }
  function wf() {
    if (--Lu === 0 && _a !== null) {
      Ni !== null && (Ni.status = "fulfilled");
      var t = _a;
      (_a = null), (Bi = 0), (Ni = null);
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function bg(t, e) {
    var n = [],
      i = {
        status: "pending",
        value: null,
        reason: null,
        then: function (s) {
          n.push(s);
        },
      };
    return (
      t.then(
        function () {
          (i.status = "fulfilled"), (i.value = e);
          for (var s = 0; s < n.length; s++) (0, n[s])(e);
        },
        function (s) {
          for (i.status = "rejected", i.reason = s, s = 0; s < n.length; s++)
            (0, n[s])(void 0);
        }
      ),
      i
    );
  }
  var qf = G.S;
  G.S = function (t, e) {
    typeof e == "object" &&
      e !== null &&
      typeof e.then == "function" &&
      Tg(t, e),
      qf !== null && qf(t, e);
  };
  var In = pt(null);
  function ju() {
    var t = In.current;
    return t !== null ? t : bt.pooledCache;
  }
  function Il(t, e) {
    e === null ? Dt(In, In.current) : Dt(In, e.pool);
  }
  function Yf() {
    var t = ju();
    return t === null ? null : { parent: Yt._currentValue, pool: t };
  }
  var An = 0,
    st = null,
    gt = null,
    Ht = null,
    ts = !1,
    Hi = !1,
    ti = !1,
    es = 0,
    Ua = 0,
    Li = null,
    Ag = 0;
  function _t() {
    throw Error(r(321));
  }
  function wu(t, e) {
    if (e === null) return !1;
    for (var n = 0; n < e.length && n < t.length; n++)
      if (!fe(t[n], e[n])) return !1;
    return !0;
  }
  function qu(t, e, n, i, s, o) {
    return (
      (An = o),
      (st = e),
      (e.memoizedState = null),
      (e.updateQueue = null),
      (e.lanes = 0),
      (G.H = t === null || t.memoizedState === null ? ei : En),
      (ti = !1),
      (o = n(i, s)),
      (ti = !1),
      Hi && (o = Xf(e, n, i, s)),
      Gf(t),
      o
    );
  }
  function Gf(t) {
    G.H = Xe;
    var e = gt !== null && gt.next !== null;
    if (((An = 0), (Ht = gt = st = null), (ts = !1), (Ua = 0), (Li = null), e))
      throw Error(r(300));
    t === null ||
      Xt ||
      ((t = t.dependencies), t !== null && cs(t) && (Xt = !0));
  }
  function Xf(t, e, n, i) {
    st = t;
    var s = 0;
    do {
      if ((Hi && (Li = null), (Ua = 0), (Hi = !1), 25 <= s))
        throw Error(r(301));
      if (((s += 1), (Ht = gt = null), t.updateQueue != null)) {
        var o = t.updateQueue;
        (o.lastEffect = null),
          (o.events = null),
          (o.stores = null),
          o.memoCache != null && (o.memoCache.index = 0);
      }
      (G.H = ni), (o = e(n, i));
    } while (Hi);
    return o;
  }
  function Eg() {
    var t = G.H,
      e = t.useState()[0];
    return (
      (e = typeof e.then == "function" ? Ba(e) : e),
      (t = t.useState()[0]),
      (gt !== null ? gt.memoizedState : null) !== t && (st.flags |= 1024),
      e
    );
  }
  function Yu() {
    var t = es !== 0;
    return (es = 0), t;
  }
  function Gu(t, e, n) {
    (e.updateQueue = t.updateQueue), (e.flags &= -2053), (t.lanes &= ~n);
  }
  function Xu(t) {
    if (ts) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        e !== null && (e.pending = null), (t = t.next);
      }
      ts = !1;
    }
    (An = 0), (Ht = gt = st = null), (Hi = !1), (Ua = es = 0), (Li = null);
  }
  function re() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return Ht === null ? (st.memoizedState = Ht = t) : (Ht = Ht.next = t), Ht;
  }
  function Lt() {
    if (gt === null) {
      var t = st.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = gt.next;
    var e = Ht === null ? st.memoizedState : Ht.next;
    if (e !== null) (Ht = e), (gt = t);
    else {
      if (t === null)
        throw st.alternate === null ? Error(r(467)) : Error(r(310));
      (gt = t),
        (t = {
          memoizedState: gt.memoizedState,
          baseState: gt.baseState,
          baseQueue: gt.baseQueue,
          queue: gt.queue,
          next: null,
        }),
        Ht === null ? (st.memoizedState = Ht = t) : (Ht = Ht.next = t);
    }
    return Ht;
  }
  var ns;
  ns = function () {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  };
  function Ba(t) {
    var e = Ua;
    return (
      (Ua += 1),
      Li === null && (Li = []),
      (t = _f(Li, t, e)),
      (e = st),
      (Ht === null ? e.memoizedState : Ht.next) === null &&
        ((e = e.alternate),
        (G.H = e === null || e.memoizedState === null ? ei : En)),
      t
    );
  }
  function is(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return Ba(t);
      if (t.$$typeof === O) return Wt(t);
    }
    throw Error(r(438, String(t)));
  }
  function Qu(t) {
    var e = null,
      n = st.updateQueue;
    if ((n !== null && (e = n.memoCache), e == null)) {
      var i = st.alternate;
      i !== null &&
        ((i = i.updateQueue),
        i !== null &&
          ((i = i.memoCache),
          i != null &&
            (e = {
              data: i.data.map(function (s) {
                return s.slice();
              }),
              index: 0,
            })));
    }
    if (
      (e == null && (e = { data: [], index: 0 }),
      n === null && ((n = ns()), (st.updateQueue = n)),
      (n.memoCache = e),
      (n = e.data[e.index]),
      n === void 0)
    )
      for (n = e.data[e.index] = Array(t), i = 0; i < t; i++) n[i] = ot;
    return e.index++, n;
  }
  function Ie(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function as(t) {
    var e = Lt();
    return Zu(e, gt, t);
  }
  function Zu(t, e, n) {
    var i = t.queue;
    if (i === null) throw Error(r(311));
    i.lastRenderedReducer = n;
    var s = t.baseQueue,
      o = i.pending;
    if (o !== null) {
      if (s !== null) {
        var f = s.next;
        (s.next = o.next), (o.next = f);
      }
      (e.baseQueue = s = o), (i.pending = null);
    }
    if (((o = t.baseState), s === null)) t.memoizedState = o;
    else {
      e = s.next;
      var g = (f = null),
        S = null,
        E = e,
        C = !1;
      do {
        var _ = E.lane & -536870913;
        if (_ !== E.lane ? (ht & _) === _ : (An & _) === _) {
          var R = E.revertLane;
          if (R === 0)
            S !== null &&
              (S = S.next =
                {
                  lane: 0,
                  revertLane: 0,
                  action: E.action,
                  hasEagerState: E.hasEagerState,
                  eagerState: E.eagerState,
                  next: null,
                }),
              _ === Bi && (C = !0);
          else if ((An & R) === R) {
            (E = E.next), R === Bi && (C = !0);
            continue;
          } else
            (_ = {
              lane: 0,
              revertLane: E.revertLane,
              action: E.action,
              hasEagerState: E.hasEagerState,
              eagerState: E.eagerState,
              next: null,
            }),
              S === null ? ((g = S = _), (f = o)) : (S = S.next = _),
              (st.lanes |= R),
              (_n |= R);
          (_ = E.action),
            ti && n(o, _),
            (o = E.hasEagerState ? E.eagerState : n(o, _));
        } else
          (R = {
            lane: _,
            revertLane: E.revertLane,
            action: E.action,
            hasEagerState: E.hasEagerState,
            eagerState: E.eagerState,
            next: null,
          }),
            S === null ? ((g = S = R), (f = o)) : (S = S.next = R),
            (st.lanes |= _),
            (_n |= _);
        E = E.next;
      } while (E !== null && E !== e);
      if (
        (S === null ? (f = o) : (S.next = g),
        !fe(o, t.memoizedState) && ((Xt = !0), C && ((n = Ni), n !== null)))
      )
        throw n;
      (t.memoizedState = o),
        (t.baseState = f),
        (t.baseQueue = S),
        (i.lastRenderedState = o);
    }
    return s === null && (i.lanes = 0), [t.memoizedState, i.dispatch];
  }
  function Ku(t) {
    var e = Lt(),
      n = e.queue;
    if (n === null) throw Error(r(311));
    n.lastRenderedReducer = t;
    var i = n.dispatch,
      s = n.pending,
      o = e.memoizedState;
    if (s !== null) {
      n.pending = null;
      var f = (s = s.next);
      do (o = t(o, f.action)), (f = f.next);
      while (f !== s);
      fe(o, e.memoizedState) || (Xt = !0),
        (e.memoizedState = o),
        e.baseQueue === null && (e.baseState = o),
        (n.lastRenderedState = o);
    }
    return [o, i];
  }
  function Qf(t, e, n) {
    var i = st,
      s = Lt(),
      o = dt;
    if (o) {
      if (n === void 0) throw Error(r(407));
      n = n();
    } else n = e();
    var f = !fe((gt || s).memoizedState, n);
    if (
      (f && ((s.memoizedState = n), (Xt = !0)),
      (s = s.queue),
      ku(Jf.bind(null, i, s, t), [t]),
      s.getSnapshot !== e || f || (Ht !== null && Ht.memoizedState.tag & 1))
    ) {
      if (
        ((i.flags |= 2048),
        ji(9, Kf.bind(null, i, s, n, e), { destroy: void 0 }, null),
        bt === null)
      )
        throw Error(r(349));
      o || (An & 60) !== 0 || Zf(i, e, n);
    }
    return n;
  }
  function Zf(t, e, n) {
    (t.flags |= 16384),
      (t = { getSnapshot: e, value: n }),
      (e = st.updateQueue),
      e === null
        ? ((e = ns()), (st.updateQueue = e), (e.stores = [t]))
        : ((n = e.stores), n === null ? (e.stores = [t]) : n.push(t));
  }
  function Kf(t, e, n, i) {
    (e.value = n), (e.getSnapshot = i), Pf(e) && kf(t);
  }
  function Jf(t, e, n) {
    return n(function () {
      Pf(e) && kf(t);
    });
  }
  function Pf(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var n = e();
      return !fe(t, n);
    } catch {
      return !0;
    }
  }
  function kf(t) {
    var e = Sn(t, 2);
    e !== null && ae(e, t, 2);
  }
  function Ju(t) {
    var e = re();
    if (typeof t == "function") {
      var n = t;
      if (((t = n()), ti)) {
        pn(!0);
        try {
          n();
        } finally {
          pn(!1);
        }
      }
    }
    return (
      (e.memoizedState = e.baseState = t),
      (e.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ie,
        lastRenderedState: t,
      }),
      e
    );
  }
  function Ff(t, e, n, i) {
    return (t.baseState = n), Zu(t, gt, typeof i == "function" ? i : Ie);
  }
  function Dg(t, e, n, i, s) {
    if (us(t)) throw Error(r(485));
    if (((t = e.action), t !== null)) {
      var o = {
        payload: s,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (f) {
          o.listeners.push(f);
        },
      };
      G.T !== null ? n(!0) : (o.isTransition = !1),
        i(o),
        (n = e.pending),
        n === null
          ? ((o.next = e.pending = o), Wf(e, o))
          : ((o.next = n.next), (e.pending = n.next = o));
    }
  }
  function Wf(t, e) {
    var n = e.action,
      i = e.payload,
      s = t.state;
    if (e.isTransition) {
      var o = G.T,
        f = {};
      G.T = f;
      try {
        var g = n(s, i),
          S = G.S;
        S !== null && S(f, g), $f(t, e, g);
      } catch (E) {
        Pu(t, e, E);
      } finally {
        G.T = o;
      }
    } else
      try {
        (o = n(s, i)), $f(t, e, o);
      } catch (E) {
        Pu(t, e, E);
      }
  }
  function $f(t, e, n) {
    n !== null && typeof n == "object" && typeof n.then == "function"
      ? n.then(
          function (i) {
            If(t, e, i);
          },
          function (i) {
            return Pu(t, e, i);
          }
        )
      : If(t, e, n);
  }
  function If(t, e, n) {
    (e.status = "fulfilled"),
      (e.value = n),
      th(e),
      (t.state = n),
      (e = t.pending),
      e !== null &&
        ((n = e.next),
        n === e ? (t.pending = null) : ((n = n.next), (e.next = n), Wf(t, n)));
  }
  function Pu(t, e, n) {
    var i = t.pending;
    if (((t.pending = null), i !== null)) {
      i = i.next;
      do (e.status = "rejected"), (e.reason = n), th(e), (e = e.next);
      while (e !== i);
    }
    t.action = null;
  }
  function th(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function eh(t, e) {
    return e;
  }
  function nh(t, e) {
    if (dt) {
      var n = bt.formState;
      if (n !== null) {
        t: {
          var i = st;
          if (dt) {
            if (Kt) {
              e: {
                for (var s = Kt, o = Ye; s.nodeType !== 8; ) {
                  if (!o) {
                    s = null;
                    break e;
                  }
                  if (((s = Le(s.nextSibling)), s === null)) {
                    s = null;
                    break e;
                  }
                }
                (o = s.data), (s = o === "F!" || o === "F" ? s : null);
              }
              if (s) {
                (Kt = Le(s.nextSibling)), (i = s.data === "F!");
                break t;
              }
            }
            Wn(i);
          }
          i = !1;
        }
        i && (e = n[0]);
      }
    }
    return (
      (n = re()),
      (n.memoizedState = n.baseState = e),
      (i = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: eh,
        lastRenderedState: e,
      }),
      (n.queue = i),
      (n = Th.bind(null, st, i)),
      (i.dispatch = n),
      (i = Ju(!1)),
      (o = tr.bind(null, st, !1, i.queue)),
      (i = re()),
      (s = { state: e, dispatch: null, action: t, pending: null }),
      (i.queue = s),
      (n = Dg.bind(null, st, s, o, n)),
      (s.dispatch = n),
      (i.memoizedState = t),
      [e, n, !1]
    );
  }
  function ih(t) {
    var e = Lt();
    return ah(e, gt, t);
  }
  function ah(t, e, n) {
    (e = Zu(t, e, eh)[0]),
      (t = as(Ie)[0]),
      (e =
        typeof e == "object" && e !== null && typeof e.then == "function"
          ? Ba(e)
          : e);
    var i = Lt(),
      s = i.queue,
      o = s.dispatch;
    return (
      n !== i.memoizedState &&
        ((st.flags |= 2048),
        ji(9, Mg.bind(null, s, n), { destroy: void 0 }, null)),
      [e, o, t]
    );
  }
  function Mg(t, e) {
    t.action = e;
  }
  function lh(t) {
    var e = Lt(),
      n = gt;
    if (n !== null) return ah(e, n, t);
    Lt(), (e = e.memoizedState), (n = Lt());
    var i = n.queue.dispatch;
    return (n.memoizedState = t), [e, i, !1];
  }
  function ji(t, e, n, i) {
    return (
      (t = { tag: t, create: e, inst: n, deps: i, next: null }),
      (e = st.updateQueue),
      e === null && ((e = ns()), (st.updateQueue = e)),
      (n = e.lastEffect),
      n === null
        ? (e.lastEffect = t.next = t)
        : ((i = n.next), (n.next = t), (t.next = i), (e.lastEffect = t)),
      t
    );
  }
  function sh() {
    return Lt().memoizedState;
  }
  function ls(t, e, n, i) {
    var s = re();
    (st.flags |= t),
      (s.memoizedState = ji(
        1 | e,
        n,
        { destroy: void 0 },
        i === void 0 ? null : i
      ));
  }
  function ss(t, e, n, i) {
    var s = Lt();
    i = i === void 0 ? null : i;
    var o = s.memoizedState.inst;
    gt !== null && i !== null && wu(i, gt.memoizedState.deps)
      ? (s.memoizedState = ji(e, n, o, i))
      : ((st.flags |= t), (s.memoizedState = ji(1 | e, n, o, i)));
  }
  function uh(t, e) {
    ls(8390656, 8, t, e);
  }
  function ku(t, e) {
    ss(2048, 8, t, e);
  }
  function rh(t, e) {
    return ss(4, 2, t, e);
  }
  function oh(t, e) {
    return ss(4, 4, t, e);
  }
  function ch(t, e) {
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
  function fh(t, e, n) {
    (n = n != null ? n.concat([t]) : null), ss(4, 4, ch.bind(null, e, t), n);
  }
  function Fu() {}
  function hh(t, e) {
    var n = Lt();
    e = e === void 0 ? null : e;
    var i = n.memoizedState;
    return e !== null && wu(e, i[1]) ? i[0] : ((n.memoizedState = [t, e]), t);
  }
  function dh(t, e) {
    var n = Lt();
    e = e === void 0 ? null : e;
    var i = n.memoizedState;
    if (e !== null && wu(e, i[1])) return i[0];
    if (((i = t()), ti)) {
      pn(!0);
      try {
        t();
      } finally {
        pn(!1);
      }
    }
    return (n.memoizedState = [i, e]), i;
  }
  function Wu(t, e, n) {
    return n === void 0 || (An & 1073741824) !== 0
      ? (t.memoizedState = e)
      : ((t.memoizedState = n), (t = yd()), (st.lanes |= t), (_n |= t), n);
  }
  function mh(t, e, n, i) {
    return fe(n, e)
      ? n
      : Ui.current !== null
      ? ((t = Wu(t, n, i)), fe(t, e) || (Xt = !0), t)
      : (An & 42) === 0
      ? ((Xt = !0), (t.memoizedState = n))
      : ((t = yd()), (st.lanes |= t), (_n |= t), e);
  }
  function yh(t, e, n, i, s) {
    var o = Y.p;
    Y.p = o !== 0 && 8 > o ? o : 8;
    var f = G.T,
      g = {};
    (G.T = g), tr(t, !1, e, n);
    try {
      var S = s(),
        E = G.S;
      if (
        (E !== null && E(g, S),
        S !== null && typeof S == "object" && typeof S.then == "function")
      ) {
        var C = bg(S, i);
        Na(t, e, C, ye(t));
      } else Na(t, e, i, ye(t));
    } catch (_) {
      Na(t, e, { then: function () {}, status: "rejected", reason: _ }, ye());
    } finally {
      (Y.p = o), (G.T = f);
    }
  }
  function xg() {}
  function $u(t, e, n, i) {
    if (t.tag !== 5) throw Error(r(476));
    var s = ph(t).queue;
    yh(
      t,
      s,
      e,
      ft,
      n === null
        ? xg
        : function () {
            return gh(t), n(i);
          }
    );
  }
  function ph(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: ft,
      baseState: ft,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ie,
        lastRenderedState: ft,
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
          lastRenderedReducer: Ie,
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
  function gh(t) {
    var e = ph(t).next.queue;
    Na(t, e, {}, ye());
  }
  function Iu() {
    return Wt(el);
  }
  function vh() {
    return Lt().memoizedState;
  }
  function Sh() {
    return Lt().memoizedState;
  }
  function Rg(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var n = ye();
          t = xn(n);
          var i = Rn(e, t, n);
          i !== null && (ae(i, e, n), ja(i, e, n)),
            (e = { cache: Hu() }),
            (t.payload = e);
          return;
      }
      e = e.return;
    }
  }
  function Og(t, e, n) {
    var i = ye();
    (n = {
      lane: i,
      revertLane: 0,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      us(t)
        ? bh(e, n)
        : ((n = Vu(t, e, n, i)), n !== null && (ae(n, t, i), Ah(n, e, i)));
  }
  function Th(t, e, n) {
    var i = ye();
    Na(t, e, n, i);
  }
  function Na(t, e, n, i) {
    var s = {
      lane: i,
      revertLane: 0,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (us(t)) bh(e, s);
    else {
      var o = t.alternate;
      if (
        t.lanes === 0 &&
        (o === null || o.lanes === 0) &&
        ((o = e.lastRenderedReducer), o !== null)
      )
        try {
          var f = e.lastRenderedState,
            g = o(f, n);
          if (((s.hasEagerState = !0), (s.eagerState = g), fe(g, f)))
            return Ql(t, e, s, 0), bt === null && Xl(), !1;
        } catch {
        } finally {
        }
      if (((n = Vu(t, e, s, i)), n !== null))
        return ae(n, t, i), Ah(n, e, i), !0;
    }
    return !1;
  }
  function tr(t, e, n, i) {
    if (
      ((i = {
        lane: 2,
        revertLane: Xr(),
        action: i,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      us(t))
    ) {
      if (e) throw Error(r(479));
    } else (e = Vu(t, n, i, 2)), e !== null && ae(e, t, 2);
  }
  function us(t) {
    var e = t.alternate;
    return t === st || (e !== null && e === st);
  }
  function bh(t, e) {
    Hi = ts = !0;
    var n = t.pending;
    n === null ? (e.next = e) : ((e.next = n.next), (n.next = e)),
      (t.pending = e);
  }
  function Ah(t, e, n) {
    if ((n & 4194176) !== 0) {
      var i = e.lanes;
      (i &= t.pendingLanes), (n |= i), (e.lanes = n), _c(t, n);
    }
  }
  var Xe = {
    readContext: Wt,
    use: is,
    useCallback: _t,
    useContext: _t,
    useEffect: _t,
    useImperativeHandle: _t,
    useLayoutEffect: _t,
    useInsertionEffect: _t,
    useMemo: _t,
    useReducer: _t,
    useRef: _t,
    useState: _t,
    useDebugValue: _t,
    useDeferredValue: _t,
    useTransition: _t,
    useSyncExternalStore: _t,
    useId: _t,
  };
  (Xe.useCacheRefresh = _t),
    (Xe.useMemoCache = _t),
    (Xe.useHostTransitionStatus = _t),
    (Xe.useFormState = _t),
    (Xe.useActionState = _t),
    (Xe.useOptimistic = _t);
  var ei = {
    readContext: Wt,
    use: is,
    useCallback: function (t, e) {
      return (re().memoizedState = [t, e === void 0 ? null : e]), t;
    },
    useContext: Wt,
    useEffect: uh,
    useImperativeHandle: function (t, e, n) {
      (n = n != null ? n.concat([t]) : null),
        ls(4194308, 4, ch.bind(null, e, t), n);
    },
    useLayoutEffect: function (t, e) {
      return ls(4194308, 4, t, e);
    },
    useInsertionEffect: function (t, e) {
      ls(4, 2, t, e);
    },
    useMemo: function (t, e) {
      var n = re();
      e = e === void 0 ? null : e;
      var i = t();
      if (ti) {
        pn(!0);
        try {
          t();
        } finally {
          pn(!1);
        }
      }
      return (n.memoizedState = [i, e]), i;
    },
    useReducer: function (t, e, n) {
      var i = re();
      if (n !== void 0) {
        var s = n(e);
        if (ti) {
          pn(!0);
          try {
            n(e);
          } finally {
            pn(!1);
          }
        }
      } else s = e;
      return (
        (i.memoizedState = i.baseState = s),
        (t = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: t,
          lastRenderedState: s,
        }),
        (i.queue = t),
        (t = t.dispatch = Og.bind(null, st, t)),
        [i.memoizedState, t]
      );
    },
    useRef: function (t) {
      var e = re();
      return (t = { current: t }), (e.memoizedState = t);
    },
    useState: function (t) {
      t = Ju(t);
      var e = t.queue,
        n = Th.bind(null, st, e);
      return (e.dispatch = n), [t.memoizedState, n];
    },
    useDebugValue: Fu,
    useDeferredValue: function (t, e) {
      var n = re();
      return Wu(n, t, e);
    },
    useTransition: function () {
      var t = Ju(!1);
      return (
        (t = yh.bind(null, st, t.queue, !0, !1)),
        (re().memoizedState = t),
        [!1, t]
      );
    },
    useSyncExternalStore: function (t, e, n) {
      var i = st,
        s = re();
      if (dt) {
        if (n === void 0) throw Error(r(407));
        n = n();
      } else {
        if (((n = e()), bt === null)) throw Error(r(349));
        (ht & 60) !== 0 || Zf(i, e, n);
      }
      s.memoizedState = n;
      var o = { value: n, getSnapshot: e };
      return (
        (s.queue = o),
        uh(Jf.bind(null, i, o, t), [t]),
        (i.flags |= 2048),
        ji(9, Kf.bind(null, i, o, n, e), { destroy: void 0 }, null),
        n
      );
    },
    useId: function () {
      var t = re(),
        e = bt.identifierPrefix;
      if (dt) {
        var n = We,
          i = Fe;
        (n = (i & ~(1 << (32 - ce(i) - 1))).toString(32) + n),
          (e = ":" + e + "R" + n),
          (n = es++),
          0 < n && (e += "H" + n.toString(32)),
          (e += ":");
      } else (n = Ag++), (e = ":" + e + "r" + n.toString(32) + ":");
      return (t.memoizedState = e);
    },
    useCacheRefresh: function () {
      return (re().memoizedState = Rg.bind(null, st));
    },
  };
  (ei.useMemoCache = Qu),
    (ei.useHostTransitionStatus = Iu),
    (ei.useFormState = nh),
    (ei.useActionState = nh),
    (ei.useOptimistic = function (t) {
      var e = re();
      e.memoizedState = e.baseState = t;
      var n = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null,
      };
      return (
        (e.queue = n), (e = tr.bind(null, st, !0, n)), (n.dispatch = e), [t, e]
      );
    });
  var En = {
    readContext: Wt,
    use: is,
    useCallback: hh,
    useContext: Wt,
    useEffect: ku,
    useImperativeHandle: fh,
    useInsertionEffect: rh,
    useLayoutEffect: oh,
    useMemo: dh,
    useReducer: as,
    useRef: sh,
    useState: function () {
      return as(Ie);
    },
    useDebugValue: Fu,
    useDeferredValue: function (t, e) {
      var n = Lt();
      return mh(n, gt.memoizedState, t, e);
    },
    useTransition: function () {
      var t = as(Ie)[0],
        e = Lt().memoizedState;
      return [typeof t == "boolean" ? t : Ba(t), e];
    },
    useSyncExternalStore: Qf,
    useId: vh,
  };
  (En.useCacheRefresh = Sh),
    (En.useMemoCache = Qu),
    (En.useHostTransitionStatus = Iu),
    (En.useFormState = ih),
    (En.useActionState = ih),
    (En.useOptimistic = function (t, e) {
      var n = Lt();
      return Ff(n, gt, t, e);
    });
  var ni = {
    readContext: Wt,
    use: is,
    useCallback: hh,
    useContext: Wt,
    useEffect: ku,
    useImperativeHandle: fh,
    useInsertionEffect: rh,
    useLayoutEffect: oh,
    useMemo: dh,
    useReducer: Ku,
    useRef: sh,
    useState: function () {
      return Ku(Ie);
    },
    useDebugValue: Fu,
    useDeferredValue: function (t, e) {
      var n = Lt();
      return gt === null ? Wu(n, t, e) : mh(n, gt.memoizedState, t, e);
    },
    useTransition: function () {
      var t = Ku(Ie)[0],
        e = Lt().memoizedState;
      return [typeof t == "boolean" ? t : Ba(t), e];
    },
    useSyncExternalStore: Qf,
    useId: vh,
  };
  (ni.useCacheRefresh = Sh),
    (ni.useMemoCache = Qu),
    (ni.useHostTransitionStatus = Iu),
    (ni.useFormState = lh),
    (ni.useActionState = lh),
    (ni.useOptimistic = function (t, e) {
      var n = Lt();
      return gt !== null
        ? Ff(n, gt, t, e)
        : ((n.baseState = t), [t, n.queue.dispatch]);
    });
  function er(t, e, n, i) {
    (e = t.memoizedState),
      (n = n(i, e)),
      (n = n == null ? e : et({}, e, n)),
      (t.memoizedState = n),
      t.lanes === 0 && (t.updateQueue.baseState = n);
  }
  var nr = {
    isMounted: function (t) {
      return (t = t._reactInternals) ? J(t) === t : !1;
    },
    enqueueSetState: function (t, e, n) {
      t = t._reactInternals;
      var i = ye(),
        s = xn(i);
      (s.payload = e),
        n != null && (s.callback = n),
        (e = Rn(t, s, i)),
        e !== null && (ae(e, t, i), ja(e, t, i));
    },
    enqueueReplaceState: function (t, e, n) {
      t = t._reactInternals;
      var i = ye(),
        s = xn(i);
      (s.tag = 1),
        (s.payload = e),
        n != null && (s.callback = n),
        (e = Rn(t, s, i)),
        e !== null && (ae(e, t, i), ja(e, t, i));
    },
    enqueueForceUpdate: function (t, e) {
      t = t._reactInternals;
      var n = ye(),
        i = xn(n);
      (i.tag = 2),
        e != null && (i.callback = e),
        (e = Rn(t, i, n)),
        e !== null && (ae(e, t, n), ja(e, t, n));
    },
  };
  function Eh(t, e, n, i, s, o, f) {
    return (
      (t = t.stateNode),
      typeof t.shouldComponentUpdate == "function"
        ? t.shouldComponentUpdate(i, o, f)
        : e.prototype && e.prototype.isPureReactComponent
        ? !Aa(n, i) || !Aa(s, o)
        : !0
    );
  }
  function Dh(t, e, n, i) {
    (t = e.state),
      typeof e.componentWillReceiveProps == "function" &&
        e.componentWillReceiveProps(n, i),
      typeof e.UNSAFE_componentWillReceiveProps == "function" &&
        e.UNSAFE_componentWillReceiveProps(n, i),
      e.state !== t && nr.enqueueReplaceState(e, e.state, null);
  }
  function ii(t, e) {
    var n = e;
    if ("ref" in e) {
      n = {};
      for (var i in e) i !== "ref" && (n[i] = e[i]);
    }
    if ((t = t.defaultProps)) {
      n === e && (n = et({}, n));
      for (var s in t) n[s] === void 0 && (n[s] = t[s]);
    }
    return n;
  }
  var rs =
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
  function Mh(t) {
    rs(t);
  }
  function xh(t) {
    console.error(t);
  }
  function Rh(t) {
    rs(t);
  }
  function os(t, e) {
    try {
      var n = t.onUncaughtError;
      n(e.value, { componentStack: e.stack });
    } catch (i) {
      setTimeout(function () {
        throw i;
      });
    }
  }
  function Oh(t, e, n) {
    try {
      var i = t.onCaughtError;
      i(n.value, {
        componentStack: n.stack,
        errorBoundary: e.tag === 1 ? e.stateNode : null,
      });
    } catch (s) {
      setTimeout(function () {
        throw s;
      });
    }
  }
  function ir(t, e, n) {
    return (
      (n = xn(n)),
      (n.tag = 3),
      (n.payload = { element: null }),
      (n.callback = function () {
        os(t, e);
      }),
      n
    );
  }
  function Vh(t) {
    return (t = xn(t)), (t.tag = 3), t;
  }
  function Ch(t, e, n, i) {
    var s = n.type.getDerivedStateFromError;
    if (typeof s == "function") {
      var o = i.value;
      (t.payload = function () {
        return s(o);
      }),
        (t.callback = function () {
          Oh(e, n, i);
        });
    }
    var f = n.stateNode;
    f !== null &&
      typeof f.componentDidCatch == "function" &&
      (t.callback = function () {
        Oh(e, n, i),
          typeof s != "function" &&
            (Un === null ? (Un = new Set([this])) : Un.add(this));
        var g = i.stack;
        this.componentDidCatch(i.value, {
          componentStack: g !== null ? g : "",
        });
      });
  }
  function Vg(t, e, n, i, s) {
    if (
      ((n.flags |= 32768),
      i !== null && typeof i == "object" && typeof i.then == "function")
    ) {
      if (
        ((e = n.alternate),
        e !== null && La(e, n, s, !0),
        (n = xe.current),
        n !== null)
      ) {
        switch (n.tag) {
          case 13:
            return (
              Ge === null ? jr() : n.alternate === null && Vt === 0 && (Vt = 3),
              (n.flags &= -257),
              (n.flags |= 65536),
              (n.lanes = s),
              i === Uu
                ? (n.flags |= 16384)
                : ((e = n.updateQueue),
                  e === null ? (n.updateQueue = new Set([i])) : e.add(i),
                  qr(t, i, s)),
              !1
            );
          case 22:
            return (
              (n.flags |= 65536),
              i === Uu
                ? (n.flags |= 16384)
                : ((e = n.updateQueue),
                  e === null
                    ? ((e = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([i]),
                      }),
                      (n.updateQueue = e))
                    : ((n = e.retryQueue),
                      n === null ? (e.retryQueue = new Set([i])) : n.add(i)),
                  qr(t, i, s)),
              !1
            );
        }
        throw Error(r(435, n.tag));
      }
      return qr(t, i, s), jr(), !1;
    }
    if (dt)
      return (
        (e = xe.current),
        e !== null
          ? ((e.flags & 65536) === 0 && (e.flags |= 256),
            (e.flags |= 65536),
            (e.lanes = s),
            i !== _u && ((t = Error(r(422), { cause: i })), xa(Ee(t, n))))
          : (i !== _u && ((e = Error(r(423), { cause: i })), xa(Ee(e, n))),
            (t = t.current.alternate),
            (t.flags |= 65536),
            (s &= -s),
            (t.lanes |= s),
            (i = Ee(i, n)),
            (s = ir(t.stateNode, i, s)),
            vr(t, s),
            Vt !== 4 && (Vt = 2)),
        !1
      );
    var o = Error(r(520), { cause: i });
    if (
      ((o = Ee(o, n)),
      Ka === null ? (Ka = [o]) : Ka.push(o),
      Vt !== 4 && (Vt = 2),
      e === null)
    )
      return !0;
    (i = Ee(i, n)), (n = e);
    do {
      switch (n.tag) {
        case 3:
          return (
            (n.flags |= 65536),
            (t = s & -s),
            (n.lanes |= t),
            (t = ir(n.stateNode, i, t)),
            vr(n, t),
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
                  (Un === null || !Un.has(o)))))
          )
            return (
              (n.flags |= 65536),
              (s &= -s),
              (n.lanes |= s),
              (s = Vh(s)),
              Ch(s, t, n, i),
              vr(n, s),
              !1
            );
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var zh = Error(r(461)),
    Xt = !1;
  function Jt(t, e, n, i) {
    e.child = t === null ? Hf(e, null, n, i) : $n(e, t.child, n, i);
  }
  function _h(t, e, n, i, s) {
    n = n.render;
    var o = e.ref;
    if ("ref" in i) {
      var f = {};
      for (var g in i) g !== "ref" && (f[g] = i[g]);
    } else f = i;
    return (
      li(e),
      (i = qu(t, e, n, f, o, s)),
      (g = Yu()),
      t !== null && !Xt
        ? (Gu(t, e, s), tn(t, e, s))
        : (dt && g && Cu(e), (e.flags |= 1), Jt(t, e, i, s), e.child)
    );
  }
  function Uh(t, e, n, i, s) {
    if (t === null) {
      var o = n.type;
      return typeof o == "function" &&
        !xr(o) &&
        o.defaultProps === void 0 &&
        n.compare === null
        ? ((e.tag = 15), (e.type = o), Bh(t, e, o, i, s))
        : ((t = ms(n.type, null, i, e, e.mode, s)),
          (t.ref = e.ref),
          (t.return = e),
          (e.child = t));
    }
    if (((o = t.child), !hr(t, s))) {
      var f = o.memoizedProps;
      if (
        ((n = n.compare), (n = n !== null ? n : Aa), n(f, i) && t.ref === e.ref)
      )
        return tn(t, e, s);
    }
    return (
      (e.flags |= 1),
      (t = zn(o, i)),
      (t.ref = e.ref),
      (t.return = e),
      (e.child = t)
    );
  }
  function Bh(t, e, n, i, s) {
    if (t !== null) {
      var o = t.memoizedProps;
      if (Aa(o, i) && t.ref === e.ref)
        if (((Xt = !1), (e.pendingProps = i = o), hr(t, s)))
          (t.flags & 131072) !== 0 && (Xt = !0);
        else return (e.lanes = t.lanes), tn(t, e, s);
    }
    return ar(t, e, n, i, s);
  }
  function Nh(t, e, n) {
    var i = e.pendingProps,
      s = i.children,
      o = (e.stateNode._pendingVisibility & 2) !== 0,
      f = t !== null ? t.memoizedState : null;
    if ((Ha(t, e), i.mode === "hidden" || o)) {
      if ((e.flags & 128) !== 0) {
        if (((i = f !== null ? f.baseLanes | n : n), t !== null)) {
          for (s = e.child = t.child, o = 0; s !== null; )
            (o = o | s.lanes | s.childLanes), (s = s.sibling);
          e.childLanes = o & ~i;
        } else (e.childLanes = 0), (e.child = null);
        return Hh(t, e, i, n);
      }
      if ((n & 536870912) !== 0)
        (e.memoizedState = { baseLanes: 0, cachePool: null }),
          t !== null && Il(e, f !== null ? f.cachePool : null),
          f !== null ? Lf(e, f) : Bu(),
          jf(e);
      else
        return (
          (e.lanes = e.childLanes = 536870912),
          Hh(t, e, f !== null ? f.baseLanes | n : n, n)
        );
    } else
      f !== null
        ? (Il(e, f.cachePool), Lf(e, f), bn(), (e.memoizedState = null))
        : (t !== null && Il(e, null), Bu(), bn());
    return Jt(t, e, s, n), e.child;
  }
  function Hh(t, e, n, i) {
    var s = ju();
    return (
      (s = s === null ? null : { parent: Yt._currentValue, pool: s }),
      (e.memoizedState = { baseLanes: n, cachePool: s }),
      t !== null && Il(e, null),
      Bu(),
      jf(e),
      t !== null && La(t, e, i, !0),
      null
    );
  }
  function Ha(t, e) {
    var n = e.ref;
    if (n === null) t !== null && t.ref !== null && (e.flags |= 2097664);
    else {
      if (typeof n != "function" && typeof n != "object") throw Error(r(284));
      (t === null || t.ref !== n) && (e.flags |= 2097664);
    }
  }
  function ar(t, e, n, i, s) {
    return (
      li(e),
      (n = qu(t, e, n, i, void 0, s)),
      (i = Yu()),
      t !== null && !Xt
        ? (Gu(t, e, s), tn(t, e, s))
        : (dt && i && Cu(e), (e.flags |= 1), Jt(t, e, n, s), e.child)
    );
  }
  function Lh(t, e, n, i, s, o) {
    return (
      li(e),
      (e.updateQueue = null),
      (n = Xf(e, i, n, s)),
      Gf(t),
      (i = Yu()),
      t !== null && !Xt
        ? (Gu(t, e, o), tn(t, e, o))
        : (dt && i && Cu(e), (e.flags |= 1), Jt(t, e, n, o), e.child)
    );
  }
  function jh(t, e, n, i, s) {
    if ((li(e), e.stateNode === null)) {
      var o = Vi,
        f = n.contextType;
      typeof f == "object" && f !== null && (o = Wt(f)),
        (o = new n(i, o)),
        (e.memoizedState =
          o.state !== null && o.state !== void 0 ? o.state : null),
        (o.updater = nr),
        (e.stateNode = o),
        (o._reactInternals = e),
        (o = e.stateNode),
        (o.props = i),
        (o.state = e.memoizedState),
        (o.refs = {}),
        pr(e),
        (f = n.contextType),
        (o.context = typeof f == "object" && f !== null ? Wt(f) : Vi),
        (o.state = e.memoizedState),
        (f = n.getDerivedStateFromProps),
        typeof f == "function" && (er(e, n, f, i), (o.state = e.memoizedState)),
        typeof n.getDerivedStateFromProps == "function" ||
          typeof o.getSnapshotBeforeUpdate == "function" ||
          (typeof o.UNSAFE_componentWillMount != "function" &&
            typeof o.componentWillMount != "function") ||
          ((f = o.state),
          typeof o.componentWillMount == "function" && o.componentWillMount(),
          typeof o.UNSAFE_componentWillMount == "function" &&
            o.UNSAFE_componentWillMount(),
          f !== o.state && nr.enqueueReplaceState(o, o.state, null),
          qa(e, i, o, s),
          wa(),
          (o.state = e.memoizedState)),
        typeof o.componentDidMount == "function" && (e.flags |= 4194308),
        (i = !0);
    } else if (t === null) {
      o = e.stateNode;
      var g = e.memoizedProps,
        S = ii(n, g);
      o.props = S;
      var E = o.context,
        C = n.contextType;
      (f = Vi), typeof C == "object" && C !== null && (f = Wt(C));
      var _ = n.getDerivedStateFromProps;
      (C =
        typeof _ == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function"),
        (g = e.pendingProps !== g),
        C ||
          (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
            typeof o.componentWillReceiveProps != "function") ||
          ((g || E !== f) && Dh(e, o, i, f)),
        (Mn = !1);
      var R = e.memoizedState;
      (o.state = R),
        qa(e, i, o, s),
        wa(),
        (E = e.memoizedState),
        g || R !== E || Mn
          ? (typeof _ == "function" && (er(e, n, _, i), (E = e.memoizedState)),
            (S = Mn || Eh(e, n, S, i, R, E, f))
              ? (C ||
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
                (e.memoizedProps = i),
                (e.memoizedState = E)),
            (o.props = i),
            (o.state = E),
            (o.context = f),
            (i = S))
          : (typeof o.componentDidMount == "function" && (e.flags |= 4194308),
            (i = !1));
    } else {
      (o = e.stateNode),
        gr(t, e),
        (f = e.memoizedProps),
        (C = ii(n, f)),
        (o.props = C),
        (_ = e.pendingProps),
        (R = o.context),
        (E = n.contextType),
        (S = Vi),
        typeof E == "object" && E !== null && (S = Wt(E)),
        (g = n.getDerivedStateFromProps),
        (E =
          typeof g == "function" ||
          typeof o.getSnapshotBeforeUpdate == "function") ||
          (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
            typeof o.componentWillReceiveProps != "function") ||
          ((f !== _ || R !== S) && Dh(e, o, i, S)),
        (Mn = !1),
        (R = e.memoizedState),
        (o.state = R),
        qa(e, i, o, s),
        wa();
      var V = e.memoizedState;
      f !== _ ||
      R !== V ||
      Mn ||
      (t !== null && t.dependencies !== null && cs(t.dependencies))
        ? (typeof g == "function" && (er(e, n, g, i), (V = e.memoizedState)),
          (C =
            Mn ||
            Eh(e, n, C, i, R, V, S) ||
            (t !== null && t.dependencies !== null && cs(t.dependencies)))
            ? (E ||
                (typeof o.UNSAFE_componentWillUpdate != "function" &&
                  typeof o.componentWillUpdate != "function") ||
                (typeof o.componentWillUpdate == "function" &&
                  o.componentWillUpdate(i, V, S),
                typeof o.UNSAFE_componentWillUpdate == "function" &&
                  o.UNSAFE_componentWillUpdate(i, V, S)),
              typeof o.componentDidUpdate == "function" && (e.flags |= 4),
              typeof o.getSnapshotBeforeUpdate == "function" &&
                (e.flags |= 1024))
            : (typeof o.componentDidUpdate != "function" ||
                (f === t.memoizedProps && R === t.memoizedState) ||
                (e.flags |= 4),
              typeof o.getSnapshotBeforeUpdate != "function" ||
                (f === t.memoizedProps && R === t.memoizedState) ||
                (e.flags |= 1024),
              (e.memoizedProps = i),
              (e.memoizedState = V)),
          (o.props = i),
          (o.state = V),
          (o.context = S),
          (i = C))
        : (typeof o.componentDidUpdate != "function" ||
            (f === t.memoizedProps && R === t.memoizedState) ||
            (e.flags |= 4),
          typeof o.getSnapshotBeforeUpdate != "function" ||
            (f === t.memoizedProps && R === t.memoizedState) ||
            (e.flags |= 1024),
          (i = !1));
    }
    return (
      (o = i),
      Ha(t, e),
      (i = (e.flags & 128) !== 0),
      o || i
        ? ((o = e.stateNode),
          (n =
            i && typeof n.getDerivedStateFromError != "function"
              ? null
              : o.render()),
          (e.flags |= 1),
          t !== null && i
            ? ((e.child = $n(e, t.child, null, s)),
              (e.child = $n(e, null, n, s)))
            : Jt(t, e, n, s),
          (e.memoizedState = o.state),
          (t = e.child))
        : (t = tn(t, e, s)),
      t
    );
  }
  function wh(t, e, n, i) {
    return Ma(), (e.flags |= 256), Jt(t, e, n, i), e.child;
  }
  var lr = { dehydrated: null, treeContext: null, retryLane: 0 };
  function sr(t) {
    return { baseLanes: t, cachePool: Yf() };
  }
  function ur(t, e, n) {
    return (t = t !== null ? t.childLanes & ~n : 0), e && (t |= Ce), t;
  }
  function qh(t, e, n) {
    var i = e.pendingProps,
      s = !1,
      o = (e.flags & 128) !== 0,
      f;
    if (
      ((f = o) ||
        (f =
          t !== null && t.memoizedState === null ? !1 : (qt.current & 2) !== 0),
      f && ((s = !0), (e.flags &= -129)),
      (f = (e.flags & 32) !== 0),
      (e.flags &= -33),
      t === null)
    ) {
      if (dt) {
        if ((s ? Tn(e) : bn(), dt)) {
          var g = Kt,
            S;
          if ((S = g)) {
            t: {
              for (S = g, g = Ye; S.nodeType !== 8; ) {
                if (!g) {
                  g = null;
                  break t;
                }
                if (((S = Le(S.nextSibling)), S === null)) {
                  g = null;
                  break t;
                }
              }
              g = S;
            }
            g !== null
              ? ((e.memoizedState = {
                  dehydrated: g,
                  treeContext: kn !== null ? { id: Fe, overflow: We } : null,
                  retryLane: 536870912,
                }),
                (S = Ve(18, null, null, 0)),
                (S.stateNode = g),
                (S.return = e),
                (e.child = S),
                (ie = e),
                (Kt = null),
                (S = !0))
              : (S = !1);
          }
          S || Wn(e);
        }
        if (
          ((g = e.memoizedState),
          g !== null && ((g = g.dehydrated), g !== null))
        )
          return g.data === "$!" ? (e.lanes = 16) : (e.lanes = 536870912), null;
        $e(e);
      }
      return (
        (g = i.children),
        (i = i.fallback),
        s
          ? (bn(),
            (s = e.mode),
            (g = or({ mode: "hidden", children: g }, s)),
            (i = ui(i, s, n, null)),
            (g.return = e),
            (i.return = e),
            (g.sibling = i),
            (e.child = g),
            (s = e.child),
            (s.memoizedState = sr(n)),
            (s.childLanes = ur(t, f, n)),
            (e.memoizedState = lr),
            i)
          : (Tn(e), rr(e, g))
      );
    }
    if (
      ((S = t.memoizedState), S !== null && ((g = S.dehydrated), g !== null))
    ) {
      if (o)
        e.flags & 256
          ? (Tn(e), (e.flags &= -257), (e = cr(t, e, n)))
          : e.memoizedState !== null
          ? (bn(), (e.child = t.child), (e.flags |= 128), (e = null))
          : (bn(),
            (s = i.fallback),
            (g = e.mode),
            (i = or({ mode: "visible", children: i.children }, g)),
            (s = ui(s, g, n, null)),
            (s.flags |= 2),
            (i.return = e),
            (s.return = e),
            (i.sibling = s),
            (e.child = i),
            $n(e, t.child, null, n),
            (i = e.child),
            (i.memoizedState = sr(n)),
            (i.childLanes = ur(t, f, n)),
            (e.memoizedState = lr),
            (e = s));
      else if ((Tn(e), g.data === "$!")) {
        if (((f = g.nextSibling && g.nextSibling.dataset), f)) var E = f.dgst;
        (f = E),
          (i = Error(r(419))),
          (i.stack = ""),
          (i.digest = f),
          xa({ value: i, source: null, stack: null }),
          (e = cr(t, e, n));
      } else if (
        (Xt || La(t, e, n, !1), (f = (n & t.childLanes) !== 0), Xt || f)
      ) {
        if (((f = bt), f !== null)) {
          if (((i = n & -n), (i & 42) !== 0)) i = 1;
          else
            switch (i) {
              case 2:
                i = 1;
                break;
              case 8:
                i = 4;
                break;
              case 32:
                i = 16;
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
                i = 64;
                break;
              case 268435456:
                i = 134217728;
                break;
              default:
                i = 0;
            }
          if (
            ((i = (i & (f.suspendedLanes | n)) !== 0 ? 0 : i),
            i !== 0 && i !== S.retryLane)
          )
            throw ((S.retryLane = i), Sn(t, i), ae(f, t, i), zh);
        }
        g.data === "$?" || jr(), (e = cr(t, e, n));
      } else
        g.data === "$?"
          ? ((e.flags |= 128),
            (e.child = t.child),
            (e = Qg.bind(null, t)),
            (g._reactRetry = e),
            (e = null))
          : ((t = S.treeContext),
            (Kt = Le(g.nextSibling)),
            (ie = e),
            (dt = !0),
            (Ne = null),
            (Ye = !1),
            t !== null &&
              ((De[Me++] = Fe),
              (De[Me++] = We),
              (De[Me++] = kn),
              (Fe = t.id),
              (We = t.overflow),
              (kn = e)),
            (e = rr(e, i.children)),
            (e.flags |= 4096));
      return e;
    }
    return s
      ? (bn(),
        (s = i.fallback),
        (g = e.mode),
        (S = t.child),
        (E = S.sibling),
        (i = zn(S, { mode: "hidden", children: i.children })),
        (i.subtreeFlags = S.subtreeFlags & 31457280),
        E !== null ? (s = zn(E, s)) : ((s = ui(s, g, n, null)), (s.flags |= 2)),
        (s.return = e),
        (i.return = e),
        (i.sibling = s),
        (e.child = i),
        (i = s),
        (s = e.child),
        (g = t.child.memoizedState),
        g === null
          ? (g = sr(n))
          : ((S = g.cachePool),
            S !== null
              ? ((E = Yt._currentValue),
                (S = S.parent !== E ? { parent: E, pool: E } : S))
              : (S = Yf()),
            (g = { baseLanes: g.baseLanes | n, cachePool: S })),
        (s.memoizedState = g),
        (s.childLanes = ur(t, f, n)),
        (e.memoizedState = lr),
        i)
      : (Tn(e),
        (n = t.child),
        (t = n.sibling),
        (n = zn(n, { mode: "visible", children: i.children })),
        (n.return = e),
        (n.sibling = null),
        t !== null &&
          ((f = e.deletions),
          f === null ? ((e.deletions = [t]), (e.flags |= 16)) : f.push(t)),
        (e.child = n),
        (e.memoizedState = null),
        n);
  }
  function rr(t, e) {
    return (
      (e = or({ mode: "visible", children: e }, t.mode)),
      (e.return = t),
      (t.child = e)
    );
  }
  function or(t, e) {
    return hd(t, e, 0, null);
  }
  function cr(t, e, n) {
    return (
      $n(e, t.child, null, n),
      (t = rr(e, e.pendingProps.children)),
      (t.flags |= 2),
      (e.memoizedState = null),
      t
    );
  }
  function Yh(t, e, n) {
    t.lanes |= e;
    var i = t.alternate;
    i !== null && (i.lanes |= e), mr(t.return, e, n);
  }
  function fr(t, e, n, i, s) {
    var o = t.memoizedState;
    o === null
      ? (t.memoizedState = {
          isBackwards: e,
          rendering: null,
          renderingStartTime: 0,
          last: i,
          tail: n,
          tailMode: s,
        })
      : ((o.isBackwards = e),
        (o.rendering = null),
        (o.renderingStartTime = 0),
        (o.last = i),
        (o.tail = n),
        (o.tailMode = s));
  }
  function Gh(t, e, n) {
    var i = e.pendingProps,
      s = i.revealOrder,
      o = i.tail;
    if ((Jt(t, e, i.children, n), (i = qt.current), (i & 2) !== 0))
      (i = (i & 1) | 2), (e.flags |= 128);
    else {
      if (t !== null && (t.flags & 128) !== 0)
        t: for (t = e.child; t !== null; ) {
          if (t.tag === 13) t.memoizedState !== null && Yh(t, n, e);
          else if (t.tag === 19) Yh(t, n, e);
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
      i &= 1;
    }
    switch ((Dt(qt, i), s)) {
      case "forwards":
        for (n = e.child, s = null; n !== null; )
          (t = n.alternate),
            t !== null && $l(t) === null && (s = n),
            (n = n.sibling);
        (n = s),
          n === null
            ? ((s = e.child), (e.child = null))
            : ((s = n.sibling), (n.sibling = null)),
          fr(e, !1, s, n, o);
        break;
      case "backwards":
        for (n = null, s = e.child, e.child = null; s !== null; ) {
          if (((t = s.alternate), t !== null && $l(t) === null)) {
            e.child = s;
            break;
          }
          (t = s.sibling), (s.sibling = n), (n = s), (s = t);
        }
        fr(e, !0, n, null, o);
        break;
      case "together":
        fr(e, !1, null, null, void 0);
        break;
      default:
        e.memoizedState = null;
    }
    return e.child;
  }
  function tn(t, e, n) {
    if (
      (t !== null && (e.dependencies = t.dependencies),
      (_n |= e.lanes),
      (n & e.childLanes) === 0)
    )
      if (t !== null) {
        if ((La(t, e, n, !1), (n & e.childLanes) === 0)) return null;
      } else return null;
    if (t !== null && e.child !== t.child) throw Error(r(153));
    if (e.child !== null) {
      for (
        t = e.child, n = zn(t, t.pendingProps), e.child = n, n.return = e;
        t.sibling !== null;

      )
        (t = t.sibling),
          (n = n.sibling = zn(t, t.pendingProps)),
          (n.return = e);
      n.sibling = null;
    }
    return e.child;
  }
  function hr(t, e) {
    return (t.lanes & e) !== 0
      ? !0
      : ((t = t.dependencies), !!(t !== null && cs(t)));
  }
  function Cg(t, e, n) {
    switch (e.tag) {
      case 3:
        xl(e, e.stateNode.containerInfo),
          Dn(e, Yt, t.memoizedState.cache),
          Ma();
        break;
      case 27:
      case 5:
        nu(e);
        break;
      case 4:
        xl(e, e.stateNode.containerInfo);
        break;
      case 10:
        Dn(e, e.type, e.memoizedProps.value);
        break;
      case 13:
        var i = e.memoizedState;
        if (i !== null)
          return i.dehydrated !== null
            ? (Tn(e), (e.flags |= 128), null)
            : (n & e.child.childLanes) !== 0
            ? qh(t, e, n)
            : (Tn(e), (t = tn(t, e, n)), t !== null ? t.sibling : null);
        Tn(e);
        break;
      case 19:
        var s = (t.flags & 128) !== 0;
        if (
          ((i = (n & e.childLanes) !== 0),
          i || (La(t, e, n, !1), (i = (n & e.childLanes) !== 0)),
          s)
        ) {
          if (i) return Gh(t, e, n);
          e.flags |= 128;
        }
        if (
          ((s = e.memoizedState),
          s !== null &&
            ((s.rendering = null), (s.tail = null), (s.lastEffect = null)),
          Dt(qt, qt.current),
          i)
        )
          break;
        return null;
      case 22:
      case 23:
        return (e.lanes = 0), Nh(t, e, n);
      case 24:
        Dn(e, Yt, t.memoizedState.cache);
    }
    return tn(t, e, n);
  }
  function Xh(t, e, n) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps) Xt = !0;
      else {
        if (!hr(t, n) && (e.flags & 128) === 0) return (Xt = !1), Cg(t, e, n);
        Xt = (t.flags & 131072) !== 0;
      }
    else (Xt = !1), dt && (e.flags & 1048576) !== 0 && Rf(e, Jl, e.index);
    switch (((e.lanes = 0), e.tag)) {
      case 16:
        t: {
          t = e.pendingProps;
          var i = e.elementType,
            s = i._init;
          if (((i = s(i._payload)), (e.type = i), typeof i == "function"))
            xr(i)
              ? ((t = ii(i, t)), (e.tag = 1), (e = jh(null, e, i, t, n)))
              : ((e.tag = 0), (e = ar(null, e, i, t, n)));
          else {
            if (i != null) {
              if (((s = i.$$typeof), s === U)) {
                (e.tag = 11), (e = _h(null, e, i, t, n));
                break t;
              } else if (s === H) {
                (e.tag = 14), (e = Uh(null, e, i, t, n));
                break t;
              }
            }
            throw ((e = I(i) || i), Error(r(306, e, "")));
          }
        }
        return e;
      case 0:
        return ar(t, e, e.type, e.pendingProps, n);
      case 1:
        return (i = e.type), (s = ii(i, e.pendingProps)), jh(t, e, i, s, n);
      case 3:
        t: {
          if ((xl(e, e.stateNode.containerInfo), t === null))
            throw Error(r(387));
          var o = e.pendingProps;
          (s = e.memoizedState), (i = s.element), gr(t, e), qa(e, o, null, n);
          var f = e.memoizedState;
          if (
            ((o = f.cache),
            Dn(e, Yt, o),
            o !== s.cache && yr(e, [Yt], n, !0),
            wa(),
            (o = f.element),
            s.isDehydrated)
          )
            if (
              ((s = { element: o, isDehydrated: !1, cache: f.cache }),
              (e.updateQueue.baseState = s),
              (e.memoizedState = s),
              e.flags & 256)
            ) {
              e = wh(t, e, o, n);
              break t;
            } else if (o !== i) {
              (i = Ee(Error(r(424)), e)), xa(i), (e = wh(t, e, o, n));
              break t;
            } else
              for (
                Kt = Le(e.stateNode.containerInfo.firstChild),
                  ie = e,
                  dt = !0,
                  Ne = null,
                  Ye = !0,
                  n = Hf(e, null, o, n),
                  e.child = n;
                n;

              )
                (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
          else {
            if ((Ma(), o === i)) {
              e = tn(t, e, n);
              break t;
            }
            Jt(t, e, o, n);
          }
          e = e.child;
        }
        return e;
      case 26:
        return (
          Ha(t, e),
          t === null
            ? (n = Kd(e.type, null, e.pendingProps, null))
              ? (e.memoizedState = n)
              : dt ||
                ((n = e.type),
                (t = e.pendingProps),
                (i = xs(yn.current).createElement(n)),
                (i[Ft] = e),
                (i[se] = t),
                Pt(i, n, t),
                Gt(i),
                (e.stateNode = i))
            : (e.memoizedState = Kd(
                e.type,
                t.memoizedProps,
                e.pendingProps,
                t.memoizedState
              )),
          null
        );
      case 27:
        return (
          nu(e),
          t === null &&
            dt &&
            ((i = e.stateNode = Xd(e.type, e.pendingProps, yn.current)),
            (ie = e),
            (Ye = !0),
            (Kt = Le(i.firstChild))),
          (i = e.pendingProps.children),
          t !== null || dt ? Jt(t, e, i, n) : (e.child = $n(e, null, i, n)),
          Ha(t, e),
          e.child
        );
      case 5:
        return (
          t === null &&
            dt &&
            ((s = i = Kt) &&
              ((i = sv(i, e.type, e.pendingProps, Ye)),
              i !== null
                ? ((e.stateNode = i),
                  (ie = e),
                  (Kt = Le(i.firstChild)),
                  (Ye = !1),
                  (s = !0))
                : (s = !1)),
            s || Wn(e)),
          nu(e),
          (s = e.type),
          (o = e.pendingProps),
          (f = t !== null ? t.memoizedProps : null),
          (i = o.children),
          $r(s, o) ? (i = null) : f !== null && $r(s, f) && (e.flags |= 32),
          e.memoizedState !== null &&
            ((s = qu(t, e, Eg, null, null, n)), (el._currentValue = s)),
          Ha(t, e),
          Jt(t, e, i, n),
          e.child
        );
      case 6:
        return (
          t === null &&
            dt &&
            ((t = n = Kt) &&
              ((n = uv(n, e.pendingProps, Ye)),
              n !== null
                ? ((e.stateNode = n), (ie = e), (Kt = null), (t = !0))
                : (t = !1)),
            t || Wn(e)),
          null
        );
      case 13:
        return qh(t, e, n);
      case 4:
        return (
          xl(e, e.stateNode.containerInfo),
          (i = e.pendingProps),
          t === null ? (e.child = $n(e, null, i, n)) : Jt(t, e, i, n),
          e.child
        );
      case 11:
        return _h(t, e, e.type, e.pendingProps, n);
      case 7:
        return Jt(t, e, e.pendingProps, n), e.child;
      case 8:
        return Jt(t, e, e.pendingProps.children, n), e.child;
      case 12:
        return Jt(t, e, e.pendingProps.children, n), e.child;
      case 10:
        return (
          (i = e.pendingProps),
          Dn(e, e.type, i.value),
          Jt(t, e, i.children, n),
          e.child
        );
      case 9:
        return (
          (s = e.type._context),
          (i = e.pendingProps.children),
          li(e),
          (s = Wt(s)),
          (i = i(s)),
          (e.flags |= 1),
          Jt(t, e, i, n),
          e.child
        );
      case 14:
        return Uh(t, e, e.type, e.pendingProps, n);
      case 15:
        return Bh(t, e, e.type, e.pendingProps, n);
      case 19:
        return Gh(t, e, n);
      case 22:
        return Nh(t, e, n);
      case 24:
        return (
          li(e),
          (i = Wt(Yt)),
          t === null
            ? ((s = ju()),
              s === null &&
                ((s = bt),
                (o = Hu()),
                (s.pooledCache = o),
                o.refCount++,
                o !== null && (s.pooledCacheLanes |= n),
                (s = o)),
              (e.memoizedState = { parent: i, cache: s }),
              pr(e),
              Dn(e, Yt, s))
            : ((t.lanes & n) !== 0 && (gr(t, e), qa(e, null, null, n), wa()),
              (s = t.memoizedState),
              (o = e.memoizedState),
              s.parent !== i
                ? ((s = { parent: i, cache: i }),
                  (e.memoizedState = s),
                  e.lanes === 0 &&
                    (e.memoizedState = e.updateQueue.baseState = s),
                  Dn(e, Yt, i))
                : ((i = o.cache),
                  Dn(e, Yt, i),
                  i !== s.cache && yr(e, [Yt], n, !0))),
          Jt(t, e, e.pendingProps.children, n),
          e.child
        );
      case 29:
        throw e.pendingProps;
    }
    throw Error(r(156, e.tag));
  }
  var dr = pt(null),
    ai = null,
    en = null;
  function Dn(t, e, n) {
    Dt(dr, e._currentValue), (e._currentValue = n);
  }
  function nn(t) {
    (t._currentValue = dr.current), Nt(dr);
  }
  function mr(t, e, n) {
    for (; t !== null; ) {
      var i = t.alternate;
      if (
        ((t.childLanes & e) !== e
          ? ((t.childLanes |= e), i !== null && (i.childLanes |= e))
          : i !== null && (i.childLanes & e) !== e && (i.childLanes |= e),
        t === n)
      )
        break;
      t = t.return;
    }
  }
  function yr(t, e, n, i) {
    var s = t.child;
    for (s !== null && (s.return = t); s !== null; ) {
      var o = s.dependencies;
      if (o !== null) {
        var f = s.child;
        o = o.firstContext;
        t: for (; o !== null; ) {
          var g = o;
          o = s;
          for (var S = 0; S < e.length; S++)
            if (g.context === e[S]) {
              (o.lanes |= n),
                (g = o.alternate),
                g !== null && (g.lanes |= n),
                mr(o.return, n, t),
                i || (f = null);
              break t;
            }
          o = g.next;
        }
      } else if (s.tag === 18) {
        if (((f = s.return), f === null)) throw Error(r(341));
        (f.lanes |= n),
          (o = f.alternate),
          o !== null && (o.lanes |= n),
          mr(f, n, t),
          (f = null);
      } else f = s.child;
      if (f !== null) f.return = s;
      else
        for (f = s; f !== null; ) {
          if (f === t) {
            f = null;
            break;
          }
          if (((s = f.sibling), s !== null)) {
            (s.return = f.return), (f = s);
            break;
          }
          f = f.return;
        }
      s = f;
    }
  }
  function La(t, e, n, i) {
    t = null;
    for (var s = e, o = !1; s !== null; ) {
      if (!o) {
        if ((s.flags & 524288) !== 0) o = !0;
        else if ((s.flags & 262144) !== 0) break;
      }
      if (s.tag === 10) {
        var f = s.alternate;
        if (f === null) throw Error(r(387));
        if (((f = f.memoizedProps), f !== null)) {
          var g = s.type;
          fe(s.pendingProps.value, f.value) ||
            (t !== null ? t.push(g) : (t = [g]));
        }
      } else if (s === Ml.current) {
        if (((f = s.alternate), f === null)) throw Error(r(387));
        f.memoizedState.memoizedState !== s.memoizedState.memoizedState &&
          (t !== null ? t.push(el) : (t = [el]));
      }
      s = s.return;
    }
    t !== null && yr(e, t, n, i), (e.flags |= 262144);
  }
  function cs(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!fe(t.context._currentValue, t.memoizedValue)) return !0;
      t = t.next;
    }
    return !1;
  }
  function li(t) {
    (ai = t),
      (en = null),
      (t = t.dependencies),
      t !== null && (t.firstContext = null);
  }
  function Wt(t) {
    return Qh(ai, t);
  }
  function fs(t, e) {
    return ai === null && li(t), Qh(t, e);
  }
  function Qh(t, e) {
    var n = e._currentValue;
    if (((e = { context: e, memoizedValue: n, next: null }), en === null)) {
      if (t === null) throw Error(r(308));
      (en = e),
        (t.dependencies = { lanes: 0, firstContext: e }),
        (t.flags |= 524288);
    } else en = en.next = e;
    return n;
  }
  var Mn = !1;
  function pr(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function gr(t, e) {
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
  function xn(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Rn(t, e, n) {
    var i = t.updateQueue;
    if (i === null) return null;
    if (((i = i.shared), (xt & 2) !== 0)) {
      var s = i.pending;
      return (
        s === null ? (e.next = e) : ((e.next = s.next), (s.next = e)),
        (i.pending = e),
        (e = Zl(t)),
        Mf(t, null, n),
        e
      );
    }
    return Ql(t, i, e, n), Zl(t);
  }
  function ja(t, e, n) {
    if (
      ((e = e.updateQueue), e !== null && ((e = e.shared), (n & 4194176) !== 0))
    ) {
      var i = e.lanes;
      (i &= t.pendingLanes), (n |= i), (e.lanes = n), _c(t, n);
    }
  }
  function vr(t, e) {
    var n = t.updateQueue,
      i = t.alternate;
    if (i !== null && ((i = i.updateQueue), n === i)) {
      var s = null,
        o = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var f = {
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: null,
            next: null,
          };
          o === null ? (s = o = f) : (o = o.next = f), (n = n.next);
        } while (n !== null);
        o === null ? (s = o = e) : (o = o.next = e);
      } else s = o = e;
      (n = {
        baseState: i.baseState,
        firstBaseUpdate: s,
        lastBaseUpdate: o,
        shared: i.shared,
        callbacks: i.callbacks,
      }),
        (t.updateQueue = n);
      return;
    }
    (t = n.lastBaseUpdate),
      t === null ? (n.firstBaseUpdate = e) : (t.next = e),
      (n.lastBaseUpdate = e);
  }
  var Sr = !1;
  function wa() {
    if (Sr) {
      var t = Ni;
      if (t !== null) throw t;
    }
  }
  function qa(t, e, n, i) {
    Sr = !1;
    var s = t.updateQueue;
    Mn = !1;
    var o = s.firstBaseUpdate,
      f = s.lastBaseUpdate,
      g = s.shared.pending;
    if (g !== null) {
      s.shared.pending = null;
      var S = g,
        E = S.next;
      (S.next = null), f === null ? (o = E) : (f.next = E), (f = S);
      var C = t.alternate;
      C !== null &&
        ((C = C.updateQueue),
        (g = C.lastBaseUpdate),
        g !== f &&
          (g === null ? (C.firstBaseUpdate = E) : (g.next = E),
          (C.lastBaseUpdate = S)));
    }
    if (o !== null) {
      var _ = s.baseState;
      (f = 0), (C = E = S = null), (g = o);
      do {
        var R = g.lane & -536870913,
          V = R !== g.lane;
        if (V ? (ht & R) === R : (i & R) === R) {
          R !== 0 && R === Bi && (Sr = !0),
            C !== null &&
              (C = C.next =
                {
                  lane: 0,
                  tag: g.tag,
                  payload: g.payload,
                  callback: null,
                  next: null,
                });
          t: {
            var Z = t,
              nt = g;
            R = e;
            var Ct = n;
            switch (nt.tag) {
              case 1:
                if (((Z = nt.payload), typeof Z == "function")) {
                  _ = Z.call(Ct, _, R);
                  break t;
                }
                _ = Z;
                break t;
              case 3:
                Z.flags = (Z.flags & -65537) | 128;
              case 0:
                if (
                  ((Z = nt.payload),
                  (R = typeof Z == "function" ? Z.call(Ct, _, R) : Z),
                  R == null)
                )
                  break t;
                _ = et({}, _, R);
                break t;
              case 2:
                Mn = !0;
            }
          }
          (R = g.callback),
            R !== null &&
              ((t.flags |= 64),
              V && (t.flags |= 8192),
              (V = s.callbacks),
              V === null ? (s.callbacks = [R]) : V.push(R));
        } else
          (V = {
            lane: R,
            tag: g.tag,
            payload: g.payload,
            callback: g.callback,
            next: null,
          }),
            C === null ? ((E = C = V), (S = _)) : (C = C.next = V),
            (f |= R);
        if (((g = g.next), g === null)) {
          if (((g = s.shared.pending), g === null)) break;
          (V = g),
            (g = V.next),
            (V.next = null),
            (s.lastBaseUpdate = V),
            (s.shared.pending = null);
        }
      } while (!0);
      C === null && (S = _),
        (s.baseState = S),
        (s.firstBaseUpdate = E),
        (s.lastBaseUpdate = C),
        o === null && (s.shared.lanes = 0),
        (_n |= f),
        (t.lanes = f),
        (t.memoizedState = _);
    }
  }
  function Zh(t, e) {
    if (typeof t != "function") throw Error(r(191, t));
    t.call(e);
  }
  function Kh(t, e) {
    var n = t.callbacks;
    if (n !== null)
      for (t.callbacks = null, t = 0; t < n.length; t++) Zh(n[t], e);
  }
  function Ya(t, e) {
    try {
      var n = e.updateQueue,
        i = n !== null ? n.lastEffect : null;
      if (i !== null) {
        var s = i.next;
        n = s;
        do {
          if ((n.tag & t) === t) {
            i = void 0;
            var o = n.create,
              f = n.inst;
            (i = o()), (f.destroy = i);
          }
          n = n.next;
        } while (n !== s);
      }
    } catch (g) {
      St(e, e.return, g);
    }
  }
  function On(t, e, n) {
    try {
      var i = e.updateQueue,
        s = i !== null ? i.lastEffect : null;
      if (s !== null) {
        var o = s.next;
        i = o;
        do {
          if ((i.tag & t) === t) {
            var f = i.inst,
              g = f.destroy;
            if (g !== void 0) {
              (f.destroy = void 0), (s = e);
              var S = n;
              try {
                g();
              } catch (E) {
                St(s, S, E);
              }
            }
          }
          i = i.next;
        } while (i !== o);
      }
    } catch (E) {
      St(e, e.return, E);
    }
  }
  function Jh(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var n = t.stateNode;
      try {
        Kh(e, n);
      } catch (i) {
        St(t, t.return, i);
      }
    }
  }
  function Ph(t, e, n) {
    (n.props = ii(t.type, t.memoizedProps)), (n.state = t.memoizedState);
    try {
      n.componentWillUnmount();
    } catch (i) {
      St(t, e, i);
    }
  }
  function si(t, e) {
    try {
      var n = t.ref;
      if (n !== null) {
        var i = t.stateNode;
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var s = i;
            break;
          default:
            s = i;
        }
        typeof n == "function" ? (t.refCleanup = n(s)) : (n.current = s);
      }
    } catch (o) {
      St(t, e, o);
    }
  }
  function he(t, e) {
    var n = t.ref,
      i = t.refCleanup;
    if (n !== null)
      if (typeof i == "function")
        try {
          i();
        } catch (s) {
          St(t, e, s);
        } finally {
          (t.refCleanup = null),
            (t = t.alternate),
            t != null && (t.refCleanup = null);
        }
      else if (typeof n == "function")
        try {
          n(null);
        } catch (s) {
          St(t, e, s);
        }
      else n.current = null;
  }
  function kh(t) {
    var e = t.type,
      n = t.memoizedProps,
      i = t.stateNode;
    try {
      t: switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          n.autoFocus && i.focus();
          break t;
        case "img":
          n.src ? (i.src = n.src) : n.srcSet && (i.srcset = n.srcSet);
      }
    } catch (s) {
      St(t, t.return, s);
    }
  }
  function Fh(t, e, n) {
    try {
      var i = t.stateNode;
      ev(i, t.type, n, e), (i[se] = e);
    } catch (s) {
      St(t, t.return, s);
    }
  }
  function Wh(t) {
    return (
      t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 || t.tag === 4
    );
  }
  function Tr(t) {
    t: for (;;) {
      for (; t.sibling === null; ) {
        if (t.return === null || Wh(t.return)) return null;
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
  function br(t, e, n) {
    var i = t.tag;
    if (i === 5 || i === 6)
      (t = t.stateNode),
        e
          ? n.nodeType === 8
            ? n.parentNode.insertBefore(t, e)
            : n.insertBefore(t, e)
          : (n.nodeType === 8
              ? ((e = n.parentNode), e.insertBefore(t, n))
              : ((e = n), e.appendChild(t)),
            (n = n._reactRootContainer),
            n != null || e.onclick !== null || (e.onclick = Ms));
    else if (i !== 4 && i !== 27 && ((t = t.child), t !== null))
      for (br(t, e, n), t = t.sibling; t !== null; )
        br(t, e, n), (t = t.sibling);
  }
  function hs(t, e, n) {
    var i = t.tag;
    if (i === 5 || i === 6)
      (t = t.stateNode), e ? n.insertBefore(t, e) : n.appendChild(t);
    else if (i !== 4 && i !== 27 && ((t = t.child), t !== null))
      for (hs(t, e, n), t = t.sibling; t !== null; )
        hs(t, e, n), (t = t.sibling);
  }
  var an = !1,
    Ot = !1,
    Ar = !1,
    $h = typeof WeakSet == "function" ? WeakSet : Set,
    Qt = null,
    Ih = !1;
  function zg(t, e) {
    if (((t = t.containerInfo), (Fr = _s), (t = pf(t)), Du(t))) {
      if ("selectionStart" in t)
        var n = { start: t.selectionStart, end: t.selectionEnd };
      else
        t: {
          n = ((n = t.ownerDocument) && n.defaultView) || window;
          var i = n.getSelection && n.getSelection();
          if (i && i.rangeCount !== 0) {
            n = i.anchorNode;
            var s = i.anchorOffset,
              o = i.focusNode;
            i = i.focusOffset;
            try {
              n.nodeType, o.nodeType;
            } catch {
              n = null;
              break t;
            }
            var f = 0,
              g = -1,
              S = -1,
              E = 0,
              C = 0,
              _ = t,
              R = null;
            e: for (;;) {
              for (
                var V;
                _ !== n || (s !== 0 && _.nodeType !== 3) || (g = f + s),
                  _ !== o || (i !== 0 && _.nodeType !== 3) || (S = f + i),
                  _.nodeType === 3 && (f += _.nodeValue.length),
                  (V = _.firstChild) !== null;

              )
                (R = _), (_ = V);
              for (;;) {
                if (_ === t) break e;
                if (
                  (R === n && ++E === s && (g = f),
                  R === o && ++C === i && (S = f),
                  (V = _.nextSibling) !== null)
                )
                  break;
                (_ = R), (R = _.parentNode);
              }
              _ = V;
            }
            n = g === -1 || S === -1 ? null : { start: g, end: S };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (
      Wr = { focusedElem: t, selectionRange: n }, _s = !1, Qt = e;
      Qt !== null;

    )
      if (
        ((e = Qt), (t = e.child), (e.subtreeFlags & 1028) !== 0 && t !== null)
      )
        (t.return = e), (Qt = t);
      else
        for (; Qt !== null; ) {
          switch (((e = Qt), (o = e.alternate), (t = e.flags), e.tag)) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((t & 1024) !== 0 && o !== null) {
                (t = void 0),
                  (n = e),
                  (s = o.memoizedProps),
                  (o = o.memoizedState),
                  (i = n.stateNode);
                try {
                  var Z = ii(n.type, s, n.elementType === n.type);
                  (t = i.getSnapshotBeforeUpdate(Z, o)),
                    (i.__reactInternalSnapshotBeforeUpdate = t);
                } catch (nt) {
                  St(n, n.return, nt);
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (
                  ((t = e.stateNode.containerInfo), (n = t.nodeType), n === 9)
                )
                  eo(t);
                else if (n === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      eo(t);
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
              if ((t & 1024) !== 0) throw Error(r(163));
          }
          if (((t = e.sibling), t !== null)) {
            (t.return = e.return), (Qt = t);
            break;
          }
          Qt = e.return;
        }
    return (Z = Ih), (Ih = !1), Z;
  }
  function td(t, e, n) {
    var i = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        sn(t, n), i & 4 && Ya(5, n);
        break;
      case 1:
        if ((sn(t, n), i & 4))
          if (((t = n.stateNode), e === null))
            try {
              t.componentDidMount();
            } catch (g) {
              St(n, n.return, g);
            }
          else {
            var s = ii(n.type, e.memoizedProps);
            e = e.memoizedState;
            try {
              t.componentDidUpdate(s, e, t.__reactInternalSnapshotBeforeUpdate);
            } catch (g) {
              St(n, n.return, g);
            }
          }
        i & 64 && Jh(n), i & 512 && si(n, n.return);
        break;
      case 3:
        if ((sn(t, n), i & 64 && ((i = n.updateQueue), i !== null))) {
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
            Kh(i, t);
          } catch (g) {
            St(n, n.return, g);
          }
        }
        break;
      case 26:
        sn(t, n), i & 512 && si(n, n.return);
        break;
      case 27:
      case 5:
        sn(t, n), e === null && i & 4 && kh(n), i & 512 && si(n, n.return);
        break;
      case 12:
        sn(t, n);
        break;
      case 13:
        sn(t, n), i & 4 && id(t, n);
        break;
      case 22:
        if (((s = n.memoizedState !== null || an), !s)) {
          e = (e !== null && e.memoizedState !== null) || Ot;
          var o = an,
            f = Ot;
          (an = s),
            (Ot = e) && !f ? Vn(t, n, (n.subtreeFlags & 8772) !== 0) : sn(t, n),
            (an = o),
            (Ot = f);
        }
        i & 512 &&
          (n.memoizedProps.mode === "manual"
            ? si(n, n.return)
            : he(n, n.return));
        break;
      default:
        sn(t, n);
    }
  }
  function ed(t) {
    var e = t.alternate;
    e !== null && ((t.alternate = null), ed(e)),
      (t.child = null),
      (t.deletions = null),
      (t.sibling = null),
      t.tag === 5 && ((e = t.stateNode), e !== null && ru(e)),
      (t.stateNode = null),
      (t.return = null),
      (t.dependencies = null),
      (t.memoizedProps = null),
      (t.memoizedState = null),
      (t.pendingProps = null),
      (t.stateNode = null),
      (t.updateQueue = null);
  }
  var jt = null,
    de = !1;
  function ln(t, e, n) {
    for (n = n.child; n !== null; ) nd(t, e, n), (n = n.sibling);
  }
  function nd(t, e, n) {
    if (oe && typeof oe.onCommitFiberUnmount == "function")
      try {
        oe.onCommitFiberUnmount(ca, n);
      } catch {}
    switch (n.tag) {
      case 26:
        Ot || he(n, e),
          ln(t, e, n),
          n.memoizedState
            ? n.memoizedState.count--
            : n.stateNode && ((n = n.stateNode), n.parentNode.removeChild(n));
        break;
      case 27:
        Ot || he(n, e);
        var i = jt,
          s = de;
        for (
          jt = n.stateNode, ln(t, e, n), n = n.stateNode, e = n.attributes;
          e.length;

        )
          n.removeAttributeNode(e[0]);
        ru(n), (jt = i), (de = s);
        break;
      case 5:
        Ot || he(n, e);
      case 6:
        s = jt;
        var o = de;
        if (((jt = null), ln(t, e, n), (jt = s), (de = o), jt !== null))
          if (de)
            try {
              (t = jt),
                (i = n.stateNode),
                t.nodeType === 8
                  ? t.parentNode.removeChild(i)
                  : t.removeChild(i);
            } catch (f) {
              St(n, e, f);
            }
          else
            try {
              jt.removeChild(n.stateNode);
            } catch (f) {
              St(n, e, f);
            }
        break;
      case 18:
        jt !== null &&
          (de
            ? ((e = jt),
              (n = n.stateNode),
              e.nodeType === 8
                ? to(e.parentNode, n)
                : e.nodeType === 1 && to(e, n),
              ll(e))
            : to(jt, n.stateNode));
        break;
      case 4:
        (i = jt),
          (s = de),
          (jt = n.stateNode.containerInfo),
          (de = !0),
          ln(t, e, n),
          (jt = i),
          (de = s);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Ot || On(2, n, e), Ot || On(4, n, e), ln(t, e, n);
        break;
      case 1:
        Ot ||
          (he(n, e),
          (i = n.stateNode),
          typeof i.componentWillUnmount == "function" && Ph(n, e, i)),
          ln(t, e, n);
        break;
      case 21:
        ln(t, e, n);
        break;
      case 22:
        Ot || he(n, e),
          (Ot = (i = Ot) || n.memoizedState !== null),
          ln(t, e, n),
          (Ot = i);
        break;
      default:
        ln(t, e, n);
    }
  }
  function id(t, e) {
    if (
      e.memoizedState === null &&
      ((t = e.alternate),
      t !== null &&
        ((t = t.memoizedState), t !== null && ((t = t.dehydrated), t !== null)))
    )
      try {
        ll(t);
      } catch (n) {
        St(e, e.return, n);
      }
  }
  function _g(t) {
    switch (t.tag) {
      case 13:
      case 19:
        var e = t.stateNode;
        return e === null && (e = t.stateNode = new $h()), e;
      case 22:
        return (
          (t = t.stateNode),
          (e = t._retryCache),
          e === null && (e = t._retryCache = new $h()),
          e
        );
      default:
        throw Error(r(435, t.tag));
    }
  }
  function Er(t, e) {
    var n = _g(t);
    e.forEach(function (i) {
      var s = Zg.bind(null, t, i);
      n.has(i) || (n.add(i), i.then(s, s));
    });
  }
  function Re(t, e) {
    var n = e.deletions;
    if (n !== null)
      for (var i = 0; i < n.length; i++) {
        var s = n[i],
          o = t,
          f = e,
          g = f;
        t: for (; g !== null; ) {
          switch (g.tag) {
            case 27:
            case 5:
              (jt = g.stateNode), (de = !1);
              break t;
            case 3:
              (jt = g.stateNode.containerInfo), (de = !0);
              break t;
            case 4:
              (jt = g.stateNode.containerInfo), (de = !0);
              break t;
          }
          g = g.return;
        }
        if (jt === null) throw Error(r(160));
        nd(o, f, s),
          (jt = null),
          (de = !1),
          (o = s.alternate),
          o !== null && (o.return = null),
          (s.return = null);
      }
    if (e.subtreeFlags & 13878)
      for (e = e.child; e !== null; ) ad(e, t), (e = e.sibling);
  }
  var He = null;
  function ad(t, e) {
    var n = t.alternate,
      i = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Re(e, t),
          Oe(t),
          i & 4 && (On(3, t, t.return), Ya(3, t), On(5, t, t.return));
        break;
      case 1:
        Re(e, t),
          Oe(t),
          i & 512 && (Ot || n === null || he(n, n.return)),
          i & 64 &&
            an &&
            ((t = t.updateQueue),
            t !== null &&
              ((i = t.callbacks),
              i !== null &&
                ((n = t.shared.hiddenCallbacks),
                (t.shared.hiddenCallbacks = n === null ? i : n.concat(i)))));
        break;
      case 26:
        var s = He;
        if (
          (Re(e, t),
          Oe(t),
          i & 512 && (Ot || n === null || he(n, n.return)),
          i & 4)
        ) {
          var o = n !== null ? n.memoizedState : null;
          if (((i = t.memoizedState), n === null))
            if (i === null)
              if (t.stateNode === null) {
                t: {
                  (i = t.type),
                    (n = t.memoizedProps),
                    (s = s.ownerDocument || s);
                  e: switch (i) {
                    case "title":
                      (o = s.getElementsByTagName("title")[0]),
                        (!o ||
                          o[da] ||
                          o[Ft] ||
                          o.namespaceURI === "http://www.w3.org/2000/svg" ||
                          o.hasAttribute("itemprop")) &&
                          ((o = s.createElement(i)),
                          s.head.insertBefore(
                            o,
                            s.querySelector("head > title")
                          )),
                        Pt(o, i, n),
                        (o[Ft] = t),
                        Gt(o),
                        (i = o);
                      break t;
                    case "link":
                      var f = kd("link", "href", s).get(i + (n.href || ""));
                      if (f) {
                        for (var g = 0; g < f.length; g++)
                          if (
                            ((o = f[g]),
                            o.getAttribute("href") ===
                              (n.href == null ? null : n.href) &&
                              o.getAttribute("rel") ===
                                (n.rel == null ? null : n.rel) &&
                              o.getAttribute("title") ===
                                (n.title == null ? null : n.title) &&
                              o.getAttribute("crossorigin") ===
                                (n.crossOrigin == null ? null : n.crossOrigin))
                          ) {
                            f.splice(g, 1);
                            break e;
                          }
                      }
                      (o = s.createElement(i)),
                        Pt(o, i, n),
                        s.head.appendChild(o);
                      break;
                    case "meta":
                      if (
                        (f = kd("meta", "content", s).get(
                          i + (n.content || "")
                        ))
                      ) {
                        for (g = 0; g < f.length; g++)
                          if (
                            ((o = f[g]),
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
                            f.splice(g, 1);
                            break e;
                          }
                      }
                      (o = s.createElement(i)),
                        Pt(o, i, n),
                        s.head.appendChild(o);
                      break;
                    default:
                      throw Error(r(468, i));
                  }
                  (o[Ft] = t), Gt(o), (i = o);
                }
                t.stateNode = i;
              } else Fd(s, t.type, t.stateNode);
            else t.stateNode = Pd(s, i, t.memoizedProps);
          else
            o !== i
              ? (o === null
                  ? n.stateNode !== null &&
                    ((n = n.stateNode), n.parentNode.removeChild(n))
                  : o.count--,
                i === null
                  ? Fd(s, t.type, t.stateNode)
                  : Pd(s, i, t.memoizedProps))
              : i === null &&
                t.stateNode !== null &&
                Fh(t, t.memoizedProps, n.memoizedProps);
        }
        break;
      case 27:
        if (i & 4 && t.alternate === null) {
          (s = t.stateNode), (o = t.memoizedProps);
          try {
            for (var S = s.firstChild; S; ) {
              var E = S.nextSibling,
                C = S.nodeName;
              S[da] ||
                C === "HEAD" ||
                C === "BODY" ||
                C === "SCRIPT" ||
                C === "STYLE" ||
                (C === "LINK" && S.rel.toLowerCase() === "stylesheet") ||
                s.removeChild(S),
                (S = E);
            }
            for (var _ = t.type, R = s.attributes; R.length; )
              s.removeAttributeNode(R[0]);
            Pt(s, _, o), (s[Ft] = t), (s[se] = o);
          } catch (Z) {
            St(t, t.return, Z);
          }
        }
      case 5:
        if (
          (Re(e, t),
          Oe(t),
          i & 512 && (Ot || n === null || he(n, n.return)),
          t.flags & 32)
        ) {
          s = t.stateNode;
          try {
            Ai(s, "");
          } catch (Z) {
            St(t, t.return, Z);
          }
        }
        i & 4 &&
          t.stateNode != null &&
          ((s = t.memoizedProps), Fh(t, s, n !== null ? n.memoizedProps : s)),
          i & 1024 && (Ar = !0);
        break;
      case 6:
        if ((Re(e, t), Oe(t), i & 4)) {
          if (t.stateNode === null) throw Error(r(162));
          (i = t.memoizedProps), (n = t.stateNode);
          try {
            n.nodeValue = i;
          } catch (Z) {
            St(t, t.return, Z);
          }
        }
        break;
      case 3:
        if (
          ((Vs = null),
          (s = He),
          (He = Rs(e.containerInfo)),
          Re(e, t),
          (He = s),
          Oe(t),
          i & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            ll(e.containerInfo);
          } catch (Z) {
            St(t, t.return, Z);
          }
        Ar && ((Ar = !1), ld(t));
        break;
      case 4:
        (i = He),
          (He = Rs(t.stateNode.containerInfo)),
          Re(e, t),
          Oe(t),
          (He = i);
        break;
      case 12:
        Re(e, t), Oe(t);
        break;
      case 13:
        Re(e, t),
          Oe(t),
          t.child.flags & 8192 &&
            (t.memoizedState !== null) !=
              (n !== null && n.memoizedState !== null) &&
            (_r = qe()),
          i & 4 &&
            ((i = t.updateQueue),
            i !== null && ((t.updateQueue = null), Er(t, i)));
        break;
      case 22:
        if (
          (i & 512 && (Ot || n === null || he(n, n.return)),
          (S = t.memoizedState !== null),
          (E = n !== null && n.memoizedState !== null),
          (C = an),
          (_ = Ot),
          (an = C || S),
          (Ot = _ || E),
          Re(e, t),
          (Ot = _),
          (an = C),
          Oe(t),
          (e = t.stateNode),
          (e._current = t),
          (e._visibility &= -3),
          (e._visibility |= e._pendingVisibility & 2),
          i & 8192 &&
            ((e._visibility = S ? e._visibility & -2 : e._visibility | 1),
            S && ((e = an || Ot), n === null || E || e || wi(t)),
            t.memoizedProps === null || t.memoizedProps.mode !== "manual"))
        )
          t: for (n = null, e = t; ; ) {
            if (e.tag === 5 || e.tag === 26 || e.tag === 27) {
              if (n === null) {
                E = n = e;
                try {
                  if (((s = E.stateNode), S))
                    (o = s.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none");
                  else {
                    (f = E.stateNode), (g = E.memoizedProps.style);
                    var V =
                      g != null && g.hasOwnProperty("display")
                        ? g.display
                        : null;
                    f.style.display =
                      V == null || typeof V == "boolean" ? "" : ("" + V).trim();
                  }
                } catch (Z) {
                  St(E, E.return, Z);
                }
              }
            } else if (e.tag === 6) {
              if (n === null) {
                E = e;
                try {
                  E.stateNode.nodeValue = S ? "" : E.memoizedProps;
                } catch (Z) {
                  St(E, E.return, Z);
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
        i & 4 &&
          ((i = t.updateQueue),
          i !== null &&
            ((n = i.retryQueue),
            n !== null && ((i.retryQueue = null), Er(t, n))));
        break;
      case 19:
        Re(e, t),
          Oe(t),
          i & 4 &&
            ((i = t.updateQueue),
            i !== null && ((t.updateQueue = null), Er(t, i)));
        break;
      case 21:
        break;
      default:
        Re(e, t), Oe(t);
    }
  }
  function Oe(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        if (t.tag !== 27) {
          t: {
            for (var n = t.return; n !== null; ) {
              if (Wh(n)) {
                var i = n;
                break t;
              }
              n = n.return;
            }
            throw Error(r(160));
          }
          switch (i.tag) {
            case 27:
              var s = i.stateNode,
                o = Tr(t);
              hs(t, o, s);
              break;
            case 5:
              var f = i.stateNode;
              i.flags & 32 && (Ai(f, ""), (i.flags &= -33));
              var g = Tr(t);
              hs(t, g, f);
              break;
            case 3:
            case 4:
              var S = i.stateNode.containerInfo,
                E = Tr(t);
              br(t, E, S);
              break;
            default:
              throw Error(r(161));
          }
        }
      } catch (C) {
        St(t, t.return, C);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function ld(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var e = t;
        ld(e),
          e.tag === 5 && e.flags & 1024 && e.stateNode.reset(),
          (t = t.sibling);
      }
  }
  function sn(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null; ) td(t, e.alternate, e), (e = e.sibling);
  }
  function wi(t) {
    for (t = t.child; t !== null; ) {
      var e = t;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          On(4, e, e.return), wi(e);
          break;
        case 1:
          he(e, e.return);
          var n = e.stateNode;
          typeof n.componentWillUnmount == "function" && Ph(e, e.return, n),
            wi(e);
          break;
        case 26:
        case 27:
        case 5:
          he(e, e.return), wi(e);
          break;
        case 22:
          he(e, e.return), e.memoizedState === null && wi(e);
          break;
        default:
          wi(e);
      }
      t = t.sibling;
    }
  }
  function Vn(t, e, n) {
    for (n = n && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
      var i = e.alternate,
        s = t,
        o = e,
        f = o.flags;
      switch (o.tag) {
        case 0:
        case 11:
        case 15:
          Vn(s, o, n), Ya(4, o);
          break;
        case 1:
          if (
            (Vn(s, o, n),
            (i = o),
            (s = i.stateNode),
            typeof s.componentDidMount == "function")
          )
            try {
              s.componentDidMount();
            } catch (E) {
              St(i, i.return, E);
            }
          if (((i = o), (s = i.updateQueue), s !== null)) {
            var g = i.stateNode;
            try {
              var S = s.shared.hiddenCallbacks;
              if (S !== null)
                for (s.shared.hiddenCallbacks = null, s = 0; s < S.length; s++)
                  Zh(S[s], g);
            } catch (E) {
              St(i, i.return, E);
            }
          }
          n && f & 64 && Jh(o), si(o, o.return);
          break;
        case 26:
        case 27:
        case 5:
          Vn(s, o, n), n && i === null && f & 4 && kh(o), si(o, o.return);
          break;
        case 12:
          Vn(s, o, n);
          break;
        case 13:
          Vn(s, o, n), n && f & 4 && id(s, o);
          break;
        case 22:
          o.memoizedState === null && Vn(s, o, n), si(o, o.return);
          break;
        default:
          Vn(s, o, n);
      }
      e = e.sibling;
    }
  }
  function Dr(t, e) {
    var n = null;
    t !== null &&
      t.memoizedState !== null &&
      t.memoizedState.cachePool !== null &&
      (n = t.memoizedState.cachePool.pool),
      (t = null),
      e.memoizedState !== null &&
        e.memoizedState.cachePool !== null &&
        (t = e.memoizedState.cachePool.pool),
      t !== n && (t != null && t.refCount++, n != null && za(n));
  }
  function Mr(t, e) {
    (t = null),
      e.alternate !== null && (t = e.alternate.memoizedState.cache),
      (e = e.memoizedState.cache),
      e !== t && (e.refCount++, t != null && za(t));
  }
  function Cn(t, e, n, i) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) sd(t, e, n, i), (e = e.sibling);
  }
  function sd(t, e, n, i) {
    var s = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Cn(t, e, n, i), s & 2048 && Ya(9, e);
        break;
      case 3:
        Cn(t, e, n, i),
          s & 2048 &&
            ((t = null),
            e.alternate !== null && (t = e.alternate.memoizedState.cache),
            (e = e.memoizedState.cache),
            e !== t && (e.refCount++, t != null && za(t)));
        break;
      case 12:
        if (s & 2048) {
          Cn(t, e, n, i), (t = e.stateNode);
          try {
            var o = e.memoizedProps,
              f = o.id,
              g = o.onPostCommit;
            typeof g == "function" &&
              g(
                f,
                e.alternate === null ? "mount" : "update",
                t.passiveEffectDuration,
                -0
              );
          } catch (S) {
            St(e, e.return, S);
          }
        } else Cn(t, e, n, i);
        break;
      case 23:
        break;
      case 22:
        (o = e.stateNode),
          e.memoizedState !== null
            ? o._visibility & 4
              ? Cn(t, e, n, i)
              : Ga(t, e)
            : o._visibility & 4
            ? Cn(t, e, n, i)
            : ((o._visibility |= 4),
              qi(t, e, n, i, (e.subtreeFlags & 10256) !== 0)),
          s & 2048 && Dr(e.alternate, e);
        break;
      case 24:
        Cn(t, e, n, i), s & 2048 && Mr(e.alternate, e);
        break;
      default:
        Cn(t, e, n, i);
    }
  }
  function qi(t, e, n, i, s) {
    for (s = s && (e.subtreeFlags & 10256) !== 0, e = e.child; e !== null; ) {
      var o = t,
        f = e,
        g = n,
        S = i,
        E = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          qi(o, f, g, S, s), Ya(8, f);
          break;
        case 23:
          break;
        case 22:
          var C = f.stateNode;
          f.memoizedState !== null
            ? C._visibility & 4
              ? qi(o, f, g, S, s)
              : Ga(o, f)
            : ((C._visibility |= 4), qi(o, f, g, S, s)),
            s && E & 2048 && Dr(f.alternate, f);
          break;
        case 24:
          qi(o, f, g, S, s), s && E & 2048 && Mr(f.alternate, f);
          break;
        default:
          qi(o, f, g, S, s);
      }
      e = e.sibling;
    }
  }
  function Ga(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var n = t,
          i = e,
          s = i.flags;
        switch (i.tag) {
          case 22:
            Ga(n, i), s & 2048 && Dr(i.alternate, i);
            break;
          case 24:
            Ga(n, i), s & 2048 && Mr(i.alternate, i);
            break;
          default:
            Ga(n, i);
        }
        e = e.sibling;
      }
  }
  var Xa = 8192;
  function Yi(t) {
    if (t.subtreeFlags & Xa)
      for (t = t.child; t !== null; ) ud(t), (t = t.sibling);
  }
  function ud(t) {
    switch (t.tag) {
      case 26:
        Yi(t),
          t.flags & Xa &&
            t.memoizedState !== null &&
            Tv(He, t.memoizedState, t.memoizedProps);
        break;
      case 5:
        Yi(t);
        break;
      case 3:
      case 4:
        var e = He;
        (He = Rs(t.stateNode.containerInfo)), Yi(t), (He = e);
        break;
      case 22:
        t.memoizedState === null &&
          ((e = t.alternate),
          e !== null && e.memoizedState !== null
            ? ((e = Xa), (Xa = 16777216), Yi(t), (Xa = e))
            : Yi(t));
        break;
      default:
        Yi(t);
    }
  }
  function rd(t) {
    var e = t.alternate;
    if (e !== null && ((t = e.child), t !== null)) {
      e.child = null;
      do (e = t.sibling), (t.sibling = null), (t = e);
      while (t !== null);
    }
  }
  function Qa(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          (Qt = i), cd(i, t);
        }
      rd(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) od(t), (t = t.sibling);
  }
  function od(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Qa(t), t.flags & 2048 && On(9, t, t.return);
        break;
      case 3:
        Qa(t);
        break;
      case 12:
        Qa(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null &&
        e._visibility & 4 &&
        (t.return === null || t.return.tag !== 13)
          ? ((e._visibility &= -5), ds(t))
          : Qa(t);
        break;
      default:
        Qa(t);
    }
  }
  function ds(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          (Qt = i), cd(i, t);
        }
      rd(t);
    }
    for (t = t.child; t !== null; ) {
      switch (((e = t), e.tag)) {
        case 0:
        case 11:
        case 15:
          On(8, e, e.return), ds(e);
          break;
        case 22:
          (n = e.stateNode),
            n._visibility & 4 && ((n._visibility &= -5), ds(e));
          break;
        default:
          ds(e);
      }
      t = t.sibling;
    }
  }
  function cd(t, e) {
    for (; Qt !== null; ) {
      var n = Qt;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          On(8, n, e);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var i = n.memoizedState.cachePool.pool;
            i != null && i.refCount++;
          }
          break;
        case 24:
          za(n.memoizedState.cache);
      }
      if (((i = n.child), i !== null)) (i.return = n), (Qt = i);
      else
        t: for (n = t; Qt !== null; ) {
          i = Qt;
          var s = i.sibling,
            o = i.return;
          if ((ed(i), i === n)) {
            Qt = null;
            break t;
          }
          if (s !== null) {
            (s.return = o), (Qt = s);
            break t;
          }
          Qt = o;
        }
    }
  }
  function Ug(t, e, n, i) {
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
      (this.mode = i),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function Ve(t, e, n, i) {
    return new Ug(t, e, n, i);
  }
  function xr(t) {
    return (t = t.prototype), !(!t || !t.isReactComponent);
  }
  function zn(t, e) {
    var n = t.alternate;
    return (
      n === null
        ? ((n = Ve(t.tag, e, t.key, t.mode)),
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
  function fd(t, e) {
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
  function ms(t, e, n, i, s, o) {
    var f = 0;
    if (((i = t), typeof t == "function")) xr(t) && (f = 1);
    else if (typeof t == "string")
      f = vv(t, n, we.current)
        ? 26
        : t === "html" || t === "head" || t === "body"
        ? 27
        : 5;
    else
      t: switch (t) {
        case m:
          return ui(n.children, s, o, e);
        case y:
          (f = 8), (s |= 24);
          break;
        case v:
          return (
            (t = Ve(12, n, e, s | 2)), (t.elementType = v), (t.lanes = o), t
          );
        case B:
          return (t = Ve(13, n, e, s)), (t.elementType = B), (t.lanes = o), t;
        case j:
          return (t = Ve(19, n, e, s)), (t.elementType = j), (t.lanes = o), t;
        case Q:
          return hd(n, s, o, e);
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case T:
              case O:
                f = 10;
                break t;
              case D:
                f = 9;
                break t;
              case U:
                f = 11;
                break t;
              case H:
                f = 14;
                break t;
              case q:
                (f = 16), (i = null);
                break t;
            }
          (f = 29),
            (n = Error(r(130, t === null ? "null" : typeof t, ""))),
            (i = null);
      }
    return (
      (e = Ve(f, n, e, s)), (e.elementType = t), (e.type = i), (e.lanes = o), e
    );
  }
  function ui(t, e, n, i) {
    return (t = Ve(7, t, i, e)), (t.lanes = n), t;
  }
  function hd(t, e, n, i) {
    (t = Ve(22, t, i, e)), (t.elementType = Q), (t.lanes = n);
    var s = {
      _visibility: 1,
      _pendingVisibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null,
      _current: null,
      detach: function () {
        var o = s._current;
        if (o === null) throw Error(r(456));
        if ((s._pendingVisibility & 2) === 0) {
          var f = Sn(o, 2);
          f !== null && ((s._pendingVisibility |= 2), ae(f, o, 2));
        }
      },
      attach: function () {
        var o = s._current;
        if (o === null) throw Error(r(456));
        if ((s._pendingVisibility & 2) !== 0) {
          var f = Sn(o, 2);
          f !== null && ((s._pendingVisibility &= -3), ae(f, o, 2));
        }
      },
    };
    return (t.stateNode = s), t;
  }
  function Rr(t, e, n) {
    return (t = Ve(6, t, null, e)), (t.lanes = n), t;
  }
  function Or(t, e, n) {
    return (
      (e = Ve(4, t.children !== null ? t.children : [], t.key, e)),
      (e.lanes = n),
      (e.stateNode = {
        containerInfo: t.containerInfo,
        pendingChildren: null,
        implementation: t.implementation,
      }),
      e
    );
  }
  function un(t) {
    t.flags |= 4;
  }
  function dd(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (((t.flags |= 16777216), !Wd(e))) {
      if (
        ((e = xe.current),
        e !== null &&
          ((ht & 4194176) === ht
            ? Ge !== null
            : ((ht & 62914560) !== ht && (ht & 536870912) === 0) || e !== Ge))
      )
        throw ((Oa = Uu), Cf);
      t.flags |= 8192;
    }
  }
  function ys(t, e) {
    e !== null && (t.flags |= 4),
      t.flags & 16384 &&
        ((e = t.tag !== 22 ? Cc() : 536870912), (t.lanes |= e), (Xi |= e));
  }
  function Za(t, e) {
    if (!dt)
      switch (t.tailMode) {
        case "hidden":
          e = t.tail;
          for (var n = null; e !== null; )
            e.alternate !== null && (n = e), (e = e.sibling);
          n === null ? (t.tail = null) : (n.sibling = null);
          break;
        case "collapsed":
          n = t.tail;
          for (var i = null; n !== null; )
            n.alternate !== null && (i = n), (n = n.sibling);
          i === null
            ? e || t.tail === null
              ? (t.tail = null)
              : (t.tail.sibling = null)
            : (i.sibling = null);
      }
  }
  function Mt(t) {
    var e = t.alternate !== null && t.alternate.child === t.child,
      n = 0,
      i = 0;
    if (e)
      for (var s = t.child; s !== null; )
        (n |= s.lanes | s.childLanes),
          (i |= s.subtreeFlags & 31457280),
          (i |= s.flags & 31457280),
          (s.return = t),
          (s = s.sibling);
    else
      for (s = t.child; s !== null; )
        (n |= s.lanes | s.childLanes),
          (i |= s.subtreeFlags),
          (i |= s.flags),
          (s.return = t),
          (s = s.sibling);
    return (t.subtreeFlags |= i), (t.childLanes = n), e;
  }
  function Bg(t, e, n) {
    var i = e.pendingProps;
    switch ((zu(e), e.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Mt(e), null;
      case 1:
        return Mt(e), null;
      case 3:
        return (
          (n = e.stateNode),
          (i = null),
          t !== null && (i = t.memoizedState.cache),
          e.memoizedState.cache !== i && (e.flags |= 2048),
          nn(Yt),
          pi(),
          n.pendingContext &&
            ((n.context = n.pendingContext), (n.pendingContext = null)),
          (t === null || t.child === null) &&
            (Da(e)
              ? un(e)
              : t === null ||
                (t.memoizedState.isDehydrated && (e.flags & 256) === 0) ||
                ((e.flags |= 1024), Ne !== null && (Hr(Ne), (Ne = null)))),
          Mt(e),
          null
        );
      case 26:
        return (
          (n = e.memoizedState),
          t === null
            ? (un(e),
              n !== null ? (Mt(e), dd(e, n)) : (Mt(e), (e.flags &= -16777217)))
            : n
            ? n !== t.memoizedState
              ? (un(e), Mt(e), dd(e, n))
              : (Mt(e), (e.flags &= -16777217))
            : (t.memoizedProps !== i && un(e), Mt(e), (e.flags &= -16777217)),
          null
        );
      case 27:
        Rl(e), (n = yn.current);
        var s = e.type;
        if (t !== null && e.stateNode != null) t.memoizedProps !== i && un(e);
        else {
          if (!i) {
            if (e.stateNode === null) throw Error(r(166));
            return Mt(e), null;
          }
          (t = we.current),
            Da(e) ? Of(e) : ((t = Xd(s, i, n)), (e.stateNode = t), un(e));
        }
        return Mt(e), null;
      case 5:
        if ((Rl(e), (n = e.type), t !== null && e.stateNode != null))
          t.memoizedProps !== i && un(e);
        else {
          if (!i) {
            if (e.stateNode === null) throw Error(r(166));
            return Mt(e), null;
          }
          if (((t = we.current), Da(e))) Of(e);
          else {
            switch (((s = xs(yn.current)), t)) {
              case 1:
                t = s.createElementNS("http://www.w3.org/2000/svg", n);
                break;
              case 2:
                t = s.createElementNS("http://www.w3.org/1998/Math/MathML", n);
                break;
              default:
                switch (n) {
                  case "svg":
                    t = s.createElementNS("http://www.w3.org/2000/svg", n);
                    break;
                  case "math":
                    t = s.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      n
                    );
                    break;
                  case "script":
                    (t = s.createElement("div")),
                      (t.innerHTML = "<script></script>"),
                      (t = t.removeChild(t.firstChild));
                    break;
                  case "select":
                    (t =
                      typeof i.is == "string"
                        ? s.createElement("select", { is: i.is })
                        : s.createElement("select")),
                      i.multiple
                        ? (t.multiple = !0)
                        : i.size && (t.size = i.size);
                    break;
                  default:
                    t =
                      typeof i.is == "string"
                        ? s.createElement(n, { is: i.is })
                        : s.createElement(n);
                }
            }
            (t[Ft] = e), (t[se] = i);
            t: for (s = e.child; s !== null; ) {
              if (s.tag === 5 || s.tag === 6) t.appendChild(s.stateNode);
              else if (s.tag !== 4 && s.tag !== 27 && s.child !== null) {
                (s.child.return = s), (s = s.child);
                continue;
              }
              if (s === e) break t;
              for (; s.sibling === null; ) {
                if (s.return === null || s.return === e) break t;
                s = s.return;
              }
              (s.sibling.return = s.return), (s = s.sibling);
            }
            e.stateNode = t;
            t: switch ((Pt(t, n, i), n)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                t = !!i.autoFocus;
                break t;
              case "img":
                t = !0;
                break t;
              default:
                t = !1;
            }
            t && un(e);
          }
        }
        return Mt(e), (e.flags &= -16777217), null;
      case 6:
        if (t && e.stateNode != null) t.memoizedProps !== i && un(e);
        else {
          if (typeof i != "string" && e.stateNode === null) throw Error(r(166));
          if (((t = yn.current), Da(e))) {
            if (
              ((t = e.stateNode),
              (n = e.memoizedProps),
              (i = null),
              (s = ie),
              s !== null)
            )
              switch (s.tag) {
                case 27:
                case 5:
                  i = s.memoizedProps;
              }
            (t[Ft] = e),
              (t = !!(
                t.nodeValue === n ||
                (i !== null && i.suppressHydrationWarning === !0) ||
                Ld(t.nodeValue, n)
              )),
              t || Wn(e);
          } else (t = xs(t).createTextNode(i)), (t[Ft] = e), (e.stateNode = t);
        }
        return Mt(e), null;
      case 13:
        if (
          ((i = e.memoizedState),
          t === null ||
            (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
        ) {
          if (((s = Da(e)), i !== null && i.dehydrated !== null)) {
            if (t === null) {
              if (!s) throw Error(r(318));
              if (
                ((s = e.memoizedState),
                (s = s !== null ? s.dehydrated : null),
                !s)
              )
                throw Error(r(317));
              s[Ft] = e;
            } else
              Ma(),
                (e.flags & 128) === 0 && (e.memoizedState = null),
                (e.flags |= 4);
            Mt(e), (s = !1);
          } else Ne !== null && (Hr(Ne), (Ne = null)), (s = !0);
          if (!s) return e.flags & 256 ? ($e(e), e) : ($e(e), null);
        }
        if (($e(e), (e.flags & 128) !== 0)) return (e.lanes = n), e;
        if (
          ((n = i !== null), (t = t !== null && t.memoizedState !== null), n)
        ) {
          (i = e.child),
            (s = null),
            i.alternate !== null &&
              i.alternate.memoizedState !== null &&
              i.alternate.memoizedState.cachePool !== null &&
              (s = i.alternate.memoizedState.cachePool.pool);
          var o = null;
          i.memoizedState !== null &&
            i.memoizedState.cachePool !== null &&
            (o = i.memoizedState.cachePool.pool),
            o !== s && (i.flags |= 2048);
        }
        return (
          n !== t && n && (e.child.flags |= 8192),
          ys(e, e.updateQueue),
          Mt(e),
          null
        );
      case 4:
        return pi(), t === null && Jr(e.stateNode.containerInfo), Mt(e), null;
      case 10:
        return nn(e.type), Mt(e), null;
      case 19:
        if ((Nt(qt), (s = e.memoizedState), s === null)) return Mt(e), null;
        if (((i = (e.flags & 128) !== 0), (o = s.rendering), o === null))
          if (i) Za(s, !1);
          else {
            if (Vt !== 0 || (t !== null && (t.flags & 128) !== 0))
              for (t = e.child; t !== null; ) {
                if (((o = $l(t)), o !== null)) {
                  for (
                    e.flags |= 128,
                      Za(s, !1),
                      t = o.updateQueue,
                      e.updateQueue = t,
                      ys(e, t),
                      e.subtreeFlags = 0,
                      t = n,
                      n = e.child;
                    n !== null;

                  )
                    fd(n, t), (n = n.sibling);
                  return Dt(qt, (qt.current & 1) | 2), e.child;
                }
                t = t.sibling;
              }
            s.tail !== null &&
              qe() > ps &&
              ((e.flags |= 128), (i = !0), Za(s, !1), (e.lanes = 4194304));
          }
        else {
          if (!i)
            if (((t = $l(o)), t !== null)) {
              if (
                ((e.flags |= 128),
                (i = !0),
                (t = t.updateQueue),
                (e.updateQueue = t),
                ys(e, t),
                Za(s, !0),
                s.tail === null &&
                  s.tailMode === "hidden" &&
                  !o.alternate &&
                  !dt)
              )
                return Mt(e), null;
            } else
              2 * qe() - s.renderingStartTime > ps &&
                n !== 536870912 &&
                ((e.flags |= 128), (i = !0), Za(s, !1), (e.lanes = 4194304));
          s.isBackwards
            ? ((o.sibling = e.child), (e.child = o))
            : ((t = s.last),
              t !== null ? (t.sibling = o) : (e.child = o),
              (s.last = o));
        }
        return s.tail !== null
          ? ((e = s.tail),
            (s.rendering = e),
            (s.tail = e.sibling),
            (s.renderingStartTime = qe()),
            (e.sibling = null),
            (t = qt.current),
            Dt(qt, i ? (t & 1) | 2 : t & 1),
            e)
          : (Mt(e), null);
      case 22:
      case 23:
        return (
          $e(e),
          Nu(),
          (i = e.memoizedState !== null),
          t !== null
            ? (t.memoizedState !== null) !== i && (e.flags |= 8192)
            : i && (e.flags |= 8192),
          i
            ? (n & 536870912) !== 0 &&
              (e.flags & 128) === 0 &&
              (Mt(e), e.subtreeFlags & 6 && (e.flags |= 8192))
            : Mt(e),
          (n = e.updateQueue),
          n !== null && ys(e, n.retryQueue),
          (n = null),
          t !== null &&
            t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (n = t.memoizedState.cachePool.pool),
          (i = null),
          e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (i = e.memoizedState.cachePool.pool),
          i !== n && (e.flags |= 2048),
          t !== null && Nt(In),
          null
        );
      case 24:
        return (
          (n = null),
          t !== null && (n = t.memoizedState.cache),
          e.memoizedState.cache !== n && (e.flags |= 2048),
          nn(Yt),
          Mt(e),
          null
        );
      case 25:
        return null;
    }
    throw Error(r(156, e.tag));
  }
  function Ng(t, e) {
    switch ((zu(e), e.tag)) {
      case 1:
        return (
          (t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 3:
        return (
          nn(Yt),
          pi(),
          (t = e.flags),
          (t & 65536) !== 0 && (t & 128) === 0
            ? ((e.flags = (t & -65537) | 128), e)
            : null
        );
      case 26:
      case 27:
      case 5:
        return Rl(e), null;
      case 13:
        if (
          ($e(e), (t = e.memoizedState), t !== null && t.dehydrated !== null)
        ) {
          if (e.alternate === null) throw Error(r(340));
          Ma();
        }
        return (
          (t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 19:
        return Nt(qt), null;
      case 4:
        return pi(), null;
      case 10:
        return nn(e.type), null;
      case 22:
      case 23:
        return (
          $e(e),
          Nu(),
          t !== null && Nt(In),
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 24:
        return nn(Yt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function md(t, e) {
    switch ((zu(e), e.tag)) {
      case 3:
        nn(Yt), pi();
        break;
      case 26:
      case 27:
      case 5:
        Rl(e);
        break;
      case 4:
        pi();
        break;
      case 13:
        $e(e);
        break;
      case 19:
        Nt(qt);
        break;
      case 10:
        nn(e.type);
        break;
      case 22:
      case 23:
        $e(e), Nu(), t !== null && Nt(In);
        break;
      case 24:
        nn(Yt);
    }
  }
  var Hg = {
      getCacheForType: function (t) {
        var e = Wt(Yt),
          n = e.data.get(t);
        return n === void 0 && ((n = t()), e.data.set(t, n)), n;
      },
    },
    Lg = typeof WeakMap == "function" ? WeakMap : Map,
    xt = 0,
    bt = null,
    rt = null,
    ht = 0,
    At = 0,
    me = null,
    rn = !1,
    Gi = !1,
    Vr = !1,
    on = 0,
    Vt = 0,
    _n = 0,
    ri = 0,
    Cr = 0,
    Ce = 0,
    Xi = 0,
    Ka = null,
    Qe = null,
    zr = !1,
    _r = 0,
    ps = 1 / 0,
    gs = null,
    Un = null,
    vs = !1,
    oi = null,
    Ja = 0,
    Ur = 0,
    Br = null,
    Pa = 0,
    Nr = null;
  function ye() {
    if ((xt & 2) !== 0 && ht !== 0) return ht & -ht;
    if (G.T !== null) {
      var t = Bi;
      return t !== 0 ? t : Xr();
    }
    return Bc();
  }
  function yd() {
    Ce === 0 && (Ce = (ht & 536870912) === 0 || dt ? Vc() : 536870912);
    var t = xe.current;
    return t !== null && (t.flags |= 32), Ce;
  }
  function ae(t, e, n) {
    ((t === bt && At === 2) || t.cancelPendingCommit !== null) &&
      (Qi(t, 0), cn(t, ht, Ce, !1)),
      ha(t, n),
      ((xt & 2) === 0 || t !== bt) &&
        (t === bt &&
          ((xt & 2) === 0 && (ri |= n), Vt === 4 && cn(t, ht, Ce, !1)),
        Ze(t));
  }
  function pd(t, e, n) {
    if ((xt & 6) !== 0) throw Error(r(327));
    var i = (!n && (e & 60) === 0 && (e & t.expiredLanes) === 0) || fa(t, e),
      s = i ? qg(t, e) : wr(t, e, !0),
      o = i;
    do {
      if (s === 0) {
        Gi && !i && cn(t, e, 0, !1);
        break;
      } else if (s === 6) cn(t, e, 0, !rn);
      else {
        if (((n = t.current.alternate), o && !jg(n))) {
          (s = wr(t, e, !1)), (o = !1);
          continue;
        }
        if (s === 2) {
          if (((o = e), t.errorRecoveryDisabledLanes & o)) var f = 0;
          else
            (f = t.pendingLanes & -536870913),
              (f = f !== 0 ? f : f & 536870912 ? 536870912 : 0);
          if (f !== 0) {
            e = f;
            t: {
              var g = t;
              s = Ka;
              var S = g.current.memoizedState.isDehydrated;
              if ((S && (Qi(g, f).flags |= 256), (f = wr(g, f, !1)), f !== 2)) {
                if (Vr && !S) {
                  (g.errorRecoveryDisabledLanes |= o), (ri |= o), (s = 4);
                  break t;
                }
                (o = Qe), (Qe = s), o !== null && Hr(o);
              }
              s = f;
            }
            if (((o = !1), s !== 2)) continue;
          }
        }
        if (s === 1) {
          Qi(t, 0), cn(t, e, 0, !0);
          break;
        }
        t: {
          switch (((i = t), s)) {
            case 0:
            case 1:
              throw Error(r(345));
            case 4:
              if ((e & 4194176) === e) {
                cn(i, e, Ce, !rn);
                break t;
              }
              break;
            case 2:
              Qe = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(r(329));
          }
          if (
            ((i.finishedWork = n),
            (i.finishedLanes = e),
            (e & 62914560) === e && ((o = _r + 300 - qe()), 10 < o))
          ) {
            if ((cn(i, e, Ce, !rn), zl(i, 0) !== 0)) break t;
            i.timeoutHandle = qd(
              gd.bind(null, i, n, Qe, gs, zr, e, Ce, ri, Xi, rn, 2, -0, 0),
              o
            );
            break t;
          }
          gd(i, n, Qe, gs, zr, e, Ce, ri, Xi, rn, 0, -0, 0);
        }
      }
      break;
    } while (!0);
    Ze(t);
  }
  function Hr(t) {
    Qe === null ? (Qe = t) : Qe.push.apply(Qe, t);
  }
  function gd(t, e, n, i, s, o, f, g, S, E, C, _, R) {
    var V = e.subtreeFlags;
    if (
      (V & 8192 || (V & 16785408) === 16785408) &&
      ((tl = { stylesheets: null, count: 0, unsuspend: Sv }),
      ud(e),
      (e = bv()),
      e !== null)
    ) {
      (t.cancelPendingCommit = e(Dd.bind(null, t, n, i, s, f, g, S, 1, _, R))),
        cn(t, o, f, !E);
      return;
    }
    Dd(t, n, i, s, f, g, S, C, _, R);
  }
  function jg(t) {
    for (var e = t; ; ) {
      var n = e.tag;
      if (
        (n === 0 || n === 11 || n === 15) &&
        e.flags & 16384 &&
        ((n = e.updateQueue), n !== null && ((n = n.stores), n !== null))
      )
        for (var i = 0; i < n.length; i++) {
          var s = n[i],
            o = s.getSnapshot;
          s = s.value;
          try {
            if (!fe(o(), s)) return !1;
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
  function cn(t, e, n, i) {
    (e &= ~Cr),
      (e &= ~ri),
      (t.suspendedLanes |= e),
      (t.pingedLanes &= ~e),
      i && (t.warmLanes |= e),
      (i = t.expirationTimes);
    for (var s = e; 0 < s; ) {
      var o = 31 - ce(s),
        f = 1 << o;
      (i[o] = -1), (s &= ~f);
    }
    n !== 0 && zc(t, n, e);
  }
  function Ss() {
    return (xt & 6) === 0 ? (ka(0), !1) : !0;
  }
  function Lr() {
    if (rt !== null) {
      if (At === 0) var t = rt.return;
      else (t = rt), (en = ai = null), Xu(t), (_i = null), (Va = 0), (t = rt);
      for (; t !== null; ) md(t.alternate, t), (t = t.return);
      rt = null;
    }
  }
  function Qi(t, e) {
    (t.finishedWork = null), (t.finishedLanes = 0);
    var n = t.timeoutHandle;
    n !== -1 && ((t.timeoutHandle = -1), iv(n)),
      (n = t.cancelPendingCommit),
      n !== null && ((t.cancelPendingCommit = null), n()),
      Lr(),
      (bt = t),
      (rt = n = zn(t.current, null)),
      (ht = e),
      (At = 0),
      (me = null),
      (rn = !1),
      (Gi = fa(t, e)),
      (Vr = !1),
      (Xi = Ce = Cr = ri = _n = Vt = 0),
      (Qe = Ka = null),
      (zr = !1),
      (e & 8) !== 0 && (e |= e & 32);
    var i = t.entangledLanes;
    if (i !== 0)
      for (t = t.entanglements, i &= e; 0 < i; ) {
        var s = 31 - ce(i),
          o = 1 << s;
        (e |= t[s]), (i &= ~o);
      }
    return (on = e), Xl(), n;
  }
  function vd(t, e) {
    (st = null),
      (G.H = Xe),
      e === Ra
        ? ((e = Uf()), (At = 3))
        : e === Cf
        ? ((e = Uf()), (At = 4))
        : (At =
            e === zh
              ? 8
              : e !== null &&
                typeof e == "object" &&
                typeof e.then == "function"
              ? 6
              : 1),
      (me = e),
      rt === null && ((Vt = 1), os(t, Ee(e, t.current)));
  }
  function Sd() {
    var t = G.H;
    return (G.H = Xe), t === null ? Xe : t;
  }
  function Td() {
    var t = G.A;
    return (G.A = Hg), t;
  }
  function jr() {
    (Vt = 4),
      rn || ((ht & 4194176) !== ht && xe.current !== null) || (Gi = !0),
      ((_n & 134217727) === 0 && (ri & 134217727) === 0) ||
        bt === null ||
        cn(bt, ht, Ce, !1);
  }
  function wr(t, e, n) {
    var i = xt;
    xt |= 2;
    var s = Sd(),
      o = Td();
    (bt !== t || ht !== e) && ((gs = null), Qi(t, e)), (e = !1);
    var f = Vt;
    t: do
      try {
        if (At !== 0 && rt !== null) {
          var g = rt,
            S = me;
          switch (At) {
            case 8:
              Lr(), (f = 6);
              break t;
            case 3:
            case 2:
            case 6:
              xe.current === null && (e = !0);
              var E = At;
              if (((At = 0), (me = null), Zi(t, g, S, E), n && Gi)) {
                f = 0;
                break t;
              }
              break;
            default:
              (E = At), (At = 0), (me = null), Zi(t, g, S, E);
          }
        }
        wg(), (f = Vt);
        break;
      } catch (C) {
        vd(t, C);
      }
    while (!0);
    return (
      e && t.shellSuspendCounter++,
      (en = ai = null),
      (xt = i),
      (G.H = s),
      (G.A = o),
      rt === null && ((bt = null), (ht = 0), Xl()),
      f
    );
  }
  function wg() {
    for (; rt !== null; ) bd(rt);
  }
  function qg(t, e) {
    var n = xt;
    xt |= 2;
    var i = Sd(),
      s = Td();
    bt !== t || ht !== e
      ? ((gs = null), (ps = qe() + 500), Qi(t, e))
      : (Gi = fa(t, e));
    t: do
      try {
        if (At !== 0 && rt !== null) {
          e = rt;
          var o = me;
          e: switch (At) {
            case 1:
              (At = 0), (me = null), Zi(t, e, o, 1);
              break;
            case 2:
              if (zf(o)) {
                (At = 0), (me = null), Ad(e);
                break;
              }
              (e = function () {
                At === 2 && bt === t && (At = 7), Ze(t);
              }),
                o.then(e, e);
              break t;
            case 3:
              At = 7;
              break t;
            case 4:
              At = 5;
              break t;
            case 7:
              zf(o)
                ? ((At = 0), (me = null), Ad(e))
                : ((At = 0), (me = null), Zi(t, e, o, 7));
              break;
            case 5:
              var f = null;
              switch (rt.tag) {
                case 26:
                  f = rt.memoizedState;
                case 5:
                case 27:
                  var g = rt;
                  if (!f || Wd(f)) {
                    (At = 0), (me = null);
                    var S = g.sibling;
                    if (S !== null) rt = S;
                    else {
                      var E = g.return;
                      E !== null ? ((rt = E), Ts(E)) : (rt = null);
                    }
                    break e;
                  }
              }
              (At = 0), (me = null), Zi(t, e, o, 5);
              break;
            case 6:
              (At = 0), (me = null), Zi(t, e, o, 6);
              break;
            case 8:
              Lr(), (Vt = 6);
              break t;
            default:
              throw Error(r(462));
          }
        }
        Yg();
        break;
      } catch (C) {
        vd(t, C);
      }
    while (!0);
    return (
      (en = ai = null),
      (G.H = i),
      (G.A = s),
      (xt = n),
      rt !== null ? 0 : ((bt = null), (ht = 0), Xl(), Vt)
    );
  }
  function Yg() {
    for (; rt !== null && !o0(); ) bd(rt);
  }
  function bd(t) {
    var e = Xh(t.alternate, t, on);
    (t.memoizedProps = t.pendingProps), e === null ? Ts(t) : (rt = e);
  }
  function Ad(t) {
    var e = t,
      n = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = Lh(n, e, e.pendingProps, e.type, void 0, ht);
        break;
      case 11:
        e = Lh(n, e, e.pendingProps, e.type.render, e.ref, ht);
        break;
      case 5:
        Xu(e);
      default:
        md(n, e), (e = rt = fd(e, on)), (e = Xh(n, e, on));
    }
    (t.memoizedProps = t.pendingProps), e === null ? Ts(t) : (rt = e);
  }
  function Zi(t, e, n, i) {
    (en = ai = null), Xu(e), (_i = null), (Va = 0);
    var s = e.return;
    try {
      if (Vg(t, s, e, n, ht)) {
        (Vt = 1), os(t, Ee(n, t.current)), (rt = null);
        return;
      }
    } catch (o) {
      if (s !== null) throw ((rt = s), o);
      (Vt = 1), os(t, Ee(n, t.current)), (rt = null);
      return;
    }
    e.flags & 32768
      ? (dt || i === 1
          ? (t = !0)
          : Gi || (ht & 536870912) !== 0
          ? (t = !1)
          : ((rn = t = !0),
            (i === 2 || i === 3 || i === 6) &&
              ((i = xe.current),
              i !== null && i.tag === 13 && (i.flags |= 16384))),
        Ed(e, t))
      : Ts(e);
  }
  function Ts(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        Ed(e, rn);
        return;
      }
      t = e.return;
      var n = Bg(e.alternate, e, on);
      if (n !== null) {
        rt = n;
        return;
      }
      if (((e = e.sibling), e !== null)) {
        rt = e;
        return;
      }
      rt = e = t;
    } while (e !== null);
    Vt === 0 && (Vt = 5);
  }
  function Ed(t, e) {
    do {
      var n = Ng(t.alternate, t);
      if (n !== null) {
        (n.flags &= 32767), (rt = n);
        return;
      }
      if (
        ((n = t.return),
        n !== null &&
          ((n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null)),
        !e && ((t = t.sibling), t !== null))
      ) {
        rt = t;
        return;
      }
      rt = t = n;
    } while (t !== null);
    (Vt = 6), (rt = null);
  }
  function Dd(t, e, n, i, s, o, f, g, S, E) {
    var C = G.T,
      _ = Y.p;
    try {
      (Y.p = 2), (G.T = null), Gg(t, e, n, i, _, s, o, f, g, S, E);
    } finally {
      (G.T = C), (Y.p = _);
    }
  }
  function Gg(t, e, n, i, s, o, f, g) {
    do Ki();
    while (oi !== null);
    if ((xt & 6) !== 0) throw Error(r(327));
    var S = t.finishedWork;
    if (((i = t.finishedLanes), S === null)) return null;
    if (((t.finishedWork = null), (t.finishedLanes = 0), S === t.current))
      throw Error(r(177));
    (t.callbackNode = null),
      (t.callbackPriority = 0),
      (t.cancelPendingCommit = null);
    var E = S.lanes | S.childLanes;
    if (
      ((E |= Ou),
      T0(t, i, E, o, f, g),
      t === bt && ((rt = bt = null), (ht = 0)),
      ((S.subtreeFlags & 10256) === 0 && (S.flags & 10256) === 0) ||
        vs ||
        ((vs = !0),
        (Ur = E),
        (Br = n),
        Kg(Ol, function () {
          return Ki(), null;
        })),
      (n = (S.flags & 15990) !== 0),
      (S.subtreeFlags & 15990) !== 0 || n
        ? ((n = G.T),
          (G.T = null),
          (o = Y.p),
          (Y.p = 2),
          (f = xt),
          (xt |= 4),
          zg(t, S),
          ad(S, t),
          hg(Wr, t.containerInfo),
          (_s = !!Fr),
          (Wr = Fr = null),
          (t.current = S),
          td(t, S.alternate, S),
          c0(),
          (xt = f),
          (Y.p = o),
          (G.T = n))
        : (t.current = S),
      vs ? ((vs = !1), (oi = t), (Ja = i)) : Md(t, E),
      (E = t.pendingLanes),
      E === 0 && (Un = null),
      y0(S.stateNode),
      Ze(t),
      e !== null)
    )
      for (s = t.onRecoverableError, S = 0; S < e.length; S++)
        (E = e[S]), s(E.value, { componentStack: E.stack });
    return (
      (Ja & 3) !== 0 && Ki(),
      (E = t.pendingLanes),
      (i & 4194218) !== 0 && (E & 42) !== 0
        ? t === Nr
          ? Pa++
          : ((Pa = 0), (Nr = t))
        : (Pa = 0),
      ka(0),
      null
    );
  }
  function Md(t, e) {
    (t.pooledCacheLanes &= e) === 0 &&
      ((e = t.pooledCache), e != null && ((t.pooledCache = null), za(e)));
  }
  function Ki() {
    if (oi !== null) {
      var t = oi,
        e = Ur;
      Ur = 0;
      var n = Uc(Ja),
        i = G.T,
        s = Y.p;
      try {
        if (((Y.p = 32 > n ? 32 : n), (G.T = null), oi === null)) var o = !1;
        else {
          (n = Br), (Br = null);
          var f = oi,
            g = Ja;
          if (((oi = null), (Ja = 0), (xt & 6) !== 0)) throw Error(r(331));
          var S = xt;
          if (
            ((xt |= 4),
            od(f.current),
            sd(f, f.current, g, n),
            (xt = S),
            ka(0, !1),
            oe && typeof oe.onPostCommitFiberRoot == "function")
          )
            try {
              oe.onPostCommitFiberRoot(ca, f);
            } catch {}
          o = !0;
        }
        return o;
      } finally {
        (Y.p = s), (G.T = i), Md(t, e);
      }
    }
    return !1;
  }
  function xd(t, e, n) {
    (e = Ee(n, e)),
      (e = ir(t.stateNode, e, 2)),
      (t = Rn(t, e, 2)),
      t !== null && (ha(t, 2), Ze(t));
  }
  function St(t, e, n) {
    if (t.tag === 3) xd(t, t, n);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          xd(e, t, n);
          break;
        } else if (e.tag === 1) {
          var i = e.stateNode;
          if (
            typeof e.type.getDerivedStateFromError == "function" ||
            (typeof i.componentDidCatch == "function" &&
              (Un === null || !Un.has(i)))
          ) {
            (t = Ee(n, t)),
              (n = Vh(2)),
              (i = Rn(e, n, 2)),
              i !== null && (Ch(n, i, e, t), ha(i, 2), Ze(i));
            break;
          }
        }
        e = e.return;
      }
  }
  function qr(t, e, n) {
    var i = t.pingCache;
    if (i === null) {
      i = t.pingCache = new Lg();
      var s = new Set();
      i.set(e, s);
    } else (s = i.get(e)), s === void 0 && ((s = new Set()), i.set(e, s));
    s.has(n) ||
      ((Vr = !0), s.add(n), (t = Xg.bind(null, t, e, n)), e.then(t, t));
  }
  function Xg(t, e, n) {
    var i = t.pingCache;
    i !== null && i.delete(e),
      (t.pingedLanes |= t.suspendedLanes & n),
      (t.warmLanes &= ~n),
      bt === t &&
        (ht & n) === n &&
        (Vt === 4 || (Vt === 3 && (ht & 62914560) === ht && 300 > qe() - _r)
          ? (xt & 2) === 0 && Qi(t, 0)
          : (Cr |= n),
        Xi === ht && (Xi = 0)),
      Ze(t);
  }
  function Rd(t, e) {
    e === 0 && (e = Cc()), (t = Sn(t, e)), t !== null && (ha(t, e), Ze(t));
  }
  function Qg(t) {
    var e = t.memoizedState,
      n = 0;
    e !== null && (n = e.retryLane), Rd(t, n);
  }
  function Zg(t, e) {
    var n = 0;
    switch (t.tag) {
      case 13:
        var i = t.stateNode,
          s = t.memoizedState;
        s !== null && (n = s.retryLane);
        break;
      case 19:
        i = t.stateNode;
        break;
      case 22:
        i = t.stateNode._retryCache;
        break;
      default:
        throw Error(r(314));
    }
    i !== null && i.delete(e), Rd(t, n);
  }
  function Kg(t, e) {
    return au(t, e);
  }
  var bs = null,
    Ji = null,
    Yr = !1,
    As = !1,
    Gr = !1,
    ci = 0;
  function Ze(t) {
    t !== Ji &&
      t.next === null &&
      (Ji === null ? (bs = Ji = t) : (Ji = Ji.next = t)),
      (As = !0),
      Yr || ((Yr = !0), Pg(Jg));
  }
  function ka(t, e) {
    if (!Gr && As) {
      Gr = !0;
      do
        for (var n = !1, i = bs; i !== null; ) {
          if (t !== 0) {
            var s = i.pendingLanes;
            if (s === 0) var o = 0;
            else {
              var f = i.suspendedLanes,
                g = i.pingedLanes;
              (o = (1 << (31 - ce(42 | t) + 1)) - 1),
                (o &= s & ~(f & ~g)),
                (o = o & 201326677 ? (o & 201326677) | 1 : o ? o | 2 : 0);
            }
            o !== 0 && ((n = !0), Cd(i, o));
          } else
            (o = ht),
              (o = zl(i, i === bt ? o : 0)),
              (o & 3) === 0 || fa(i, o) || ((n = !0), Cd(i, o));
          i = i.next;
        }
      while (n);
      Gr = !1;
    }
  }
  function Jg() {
    As = Yr = !1;
    var t = 0;
    ci !== 0 && (nv() && (t = ci), (ci = 0));
    for (var e = qe(), n = null, i = bs; i !== null; ) {
      var s = i.next,
        o = Od(i, e);
      o === 0
        ? ((i.next = null),
          n === null ? (bs = s) : (n.next = s),
          s === null && (Ji = n))
        : ((n = i), (t !== 0 || (o & 3) !== 0) && (As = !0)),
        (i = s);
    }
    ka(t);
  }
  function Od(t, e) {
    for (
      var n = t.suspendedLanes,
        i = t.pingedLanes,
        s = t.expirationTimes,
        o = t.pendingLanes & -62914561;
      0 < o;

    ) {
      var f = 31 - ce(o),
        g = 1 << f,
        S = s[f];
      S === -1
        ? ((g & n) === 0 || (g & i) !== 0) && (s[f] = S0(g, e))
        : S <= e && (t.expiredLanes |= g),
        (o &= ~g);
    }
    if (
      ((e = bt),
      (n = ht),
      (n = zl(t, t === e ? n : 0)),
      (i = t.callbackNode),
      n === 0 || (t === e && At === 2) || t.cancelPendingCommit !== null)
    )
      return (
        i !== null && i !== null && lu(i),
        (t.callbackNode = null),
        (t.callbackPriority = 0)
      );
    if ((n & 3) === 0 || fa(t, n)) {
      if (((e = n & -n), e === t.callbackPriority)) return e;
      switch ((i !== null && lu(i), Uc(n))) {
        case 2:
        case 8:
          n = Rc;
          break;
        case 32:
          n = Ol;
          break;
        case 268435456:
          n = Oc;
          break;
        default:
          n = Ol;
      }
      return (
        (i = Vd.bind(null, t)),
        (n = au(n, i)),
        (t.callbackPriority = e),
        (t.callbackNode = n),
        e
      );
    }
    return (
      i !== null && i !== null && lu(i),
      (t.callbackPriority = 2),
      (t.callbackNode = null),
      2
    );
  }
  function Vd(t, e) {
    var n = t.callbackNode;
    if (Ki() && t.callbackNode !== n) return null;
    var i = ht;
    return (
      (i = zl(t, t === bt ? i : 0)),
      i === 0
        ? null
        : (pd(t, i, e),
          Od(t, qe()),
          t.callbackNode != null && t.callbackNode === n
            ? Vd.bind(null, t)
            : null)
    );
  }
  function Cd(t, e) {
    if (Ki()) return null;
    pd(t, e, !0);
  }
  function Pg(t) {
    av(function () {
      (xt & 6) !== 0 ? au(xc, t) : t();
    });
  }
  function Xr() {
    return ci === 0 && (ci = Vc()), ci;
  }
  function zd(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean"
      ? null
      : typeof t == "function"
      ? t
      : Hl("" + t);
  }
  function _d(t, e) {
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
  function kg(t, e, n, i, s) {
    if (e === "submit" && n && n.stateNode === s) {
      var o = zd((s[se] || null).action),
        f = i.submitter;
      f &&
        ((e = (e = f[se] || null)
          ? zd(e.formAction)
          : f.getAttribute("formAction")),
        e !== null && ((o = e), (f = null)));
      var g = new ql("action", "action", null, i, s);
      t.push({
        event: g,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (i.defaultPrevented) {
                if (ci !== 0) {
                  var S = f ? _d(s, f) : new FormData(s);
                  $u(
                    n,
                    { pending: !0, data: S, method: s.method, action: o },
                    null,
                    S
                  );
                }
              } else
                typeof o == "function" &&
                  (g.preventDefault(),
                  (S = f ? _d(s, f) : new FormData(s)),
                  $u(
                    n,
                    { pending: !0, data: S, method: s.method, action: o },
                    o,
                    S
                  ));
            },
            currentTarget: s,
          },
        ],
      });
    }
  }
  for (var Qr = 0; Qr < Df.length; Qr++) {
    var Zr = Df[Qr],
      Fg = Zr.toLowerCase(),
      Wg = Zr[0].toUpperCase() + Zr.slice(1);
    Be(Fg, "on" + Wg);
  }
  Be(Sf, "onAnimationEnd"),
    Be(Tf, "onAnimationIteration"),
    Be(bf, "onAnimationStart"),
    Be("dblclick", "onDoubleClick"),
    Be("focusin", "onFocus"),
    Be("focusout", "onBlur"),
    Be(mg, "onTransitionRun"),
    Be(yg, "onTransitionStart"),
    Be(pg, "onTransitionCancel"),
    Be(Af, "onTransitionEnd"),
    Ti("onMouseEnter", ["mouseout", "mouseover"]),
    Ti("onMouseLeave", ["mouseout", "mouseover"]),
    Ti("onPointerEnter", ["pointerout", "pointerover"]),
    Ti("onPointerLeave", ["pointerout", "pointerover"]),
    Zn(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    Zn(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    Zn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Zn(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    Zn(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    Zn(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var Fa =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    $g = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(Fa)
    );
  function Ud(t, e) {
    e = (e & 4) !== 0;
    for (var n = 0; n < t.length; n++) {
      var i = t[n],
        s = i.event;
      i = i.listeners;
      t: {
        var o = void 0;
        if (e)
          for (var f = i.length - 1; 0 <= f; f--) {
            var g = i[f],
              S = g.instance,
              E = g.currentTarget;
            if (((g = g.listener), S !== o && s.isPropagationStopped()))
              break t;
            (o = g), (s.currentTarget = E);
            try {
              o(s);
            } catch (C) {
              rs(C);
            }
            (s.currentTarget = null), (o = S);
          }
        else
          for (f = 0; f < i.length; f++) {
            if (
              ((g = i[f]),
              (S = g.instance),
              (E = g.currentTarget),
              (g = g.listener),
              S !== o && s.isPropagationStopped())
            )
              break t;
            (o = g), (s.currentTarget = E);
            try {
              o(s);
            } catch (C) {
              rs(C);
            }
            (s.currentTarget = null), (o = S);
          }
      }
    }
  }
  function ct(t, e) {
    var n = e[uu];
    n === void 0 && (n = e[uu] = new Set());
    var i = t + "__bubble";
    n.has(i) || (Bd(e, t, 2, !1), n.add(i));
  }
  function Kr(t, e, n) {
    var i = 0;
    e && (i |= 4), Bd(n, t, i, e);
  }
  var Es = "_reactListening" + Math.random().toString(36).slice(2);
  function Jr(t) {
    if (!t[Es]) {
      (t[Es] = !0),
        Hc.forEach(function (n) {
          n !== "selectionchange" && ($g.has(n) || Kr(n, !1, t), Kr(n, !0, t));
        });
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[Es] || ((e[Es] = !0), Kr("selectionchange", !1, e));
    }
  }
  function Bd(t, e, n, i) {
    switch (im(e)) {
      case 2:
        var s = Dv;
        break;
      case 8:
        s = Mv;
        break;
      default:
        s = so;
    }
    (n = s.bind(null, e, n, t)),
      (s = void 0),
      !yu ||
        (e !== "touchstart" && e !== "touchmove" && e !== "wheel") ||
        (s = !0),
      i
        ? s !== void 0
          ? t.addEventListener(e, n, { capture: !0, passive: s })
          : t.addEventListener(e, n, !0)
        : s !== void 0
        ? t.addEventListener(e, n, { passive: s })
        : t.addEventListener(e, n, !1);
  }
  function Pr(t, e, n, i, s) {
    var o = i;
    if ((e & 1) === 0 && (e & 2) === 0 && i !== null)
      t: for (;;) {
        if (i === null) return;
        var f = i.tag;
        if (f === 3 || f === 4) {
          var g = i.stateNode.containerInfo;
          if (g === s || (g.nodeType === 8 && g.parentNode === s)) break;
          if (f === 4)
            for (f = i.return; f !== null; ) {
              var S = f.tag;
              if (
                (S === 3 || S === 4) &&
                ((S = f.stateNode.containerInfo),
                S === s || (S.nodeType === 8 && S.parentNode === s))
              )
                return;
              f = f.return;
            }
          for (; g !== null; ) {
            if (((f = Qn(g)), f === null)) return;
            if (((S = f.tag), S === 5 || S === 6 || S === 26 || S === 27)) {
              i = o = f;
              continue t;
            }
            g = g.parentNode;
          }
        }
        i = i.return;
      }
    Pc(function () {
      var E = o,
        C = du(n),
        _ = [];
      t: {
        var R = Ef.get(t);
        if (R !== void 0) {
          var V = ql,
            Z = t;
          switch (t) {
            case "keypress":
              if (jl(n) === 0) break t;
            case "keydown":
            case "keyup":
              V = Z0;
              break;
            case "focusin":
              (Z = "focus"), (V = Su);
              break;
            case "focusout":
              (Z = "blur"), (V = Su);
              break;
            case "beforeblur":
            case "afterblur":
              V = Su;
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
              V = Wc;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              V = U0;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              V = P0;
              break;
            case Sf:
            case Tf:
            case bf:
              V = H0;
              break;
            case Af:
              V = F0;
              break;
            case "scroll":
            case "scrollend":
              V = z0;
              break;
            case "wheel":
              V = $0;
              break;
            case "copy":
            case "cut":
            case "paste":
              V = j0;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              V = Ic;
              break;
            case "toggle":
            case "beforetoggle":
              V = tg;
          }
          var nt = (e & 4) !== 0,
            Ct = !nt && (t === "scroll" || t === "scrollend"),
            M = nt ? (R !== null ? R + "Capture" : null) : R;
          nt = [];
          for (var A = E, x; A !== null; ) {
            var z = A;
            if (
              ((x = z.stateNode),
              (z = z.tag),
              (z !== 5 && z !== 26 && z !== 27) ||
                x === null ||
                M === null ||
                ((z = ya(A, M)), z != null && nt.push(Wa(A, z, x))),
              Ct)
            )
              break;
            A = A.return;
          }
          0 < nt.length &&
            ((R = new V(R, Z, null, n, C)),
            _.push({ event: R, listeners: nt }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (
            ((R = t === "mouseover" || t === "pointerover"),
            (V = t === "mouseout" || t === "pointerout"),
            R &&
              n !== hu &&
              (Z = n.relatedTarget || n.fromElement) &&
              (Qn(Z) || Z[gi]))
          )
            break t;
          if (
            (V || R) &&
            ((R =
              C.window === C
                ? C
                : (R = C.ownerDocument)
                ? R.defaultView || R.parentWindow
                : window),
            V
              ? ((Z = n.relatedTarget || n.toElement),
                (V = E),
                (Z = Z ? Qn(Z) : null),
                Z !== null &&
                  ((Ct = J(Z)),
                  (nt = Z.tag),
                  Z !== Ct || (nt !== 5 && nt !== 27 && nt !== 6)) &&
                  (Z = null))
              : ((V = null), (Z = E)),
            V !== Z)
          ) {
            if (
              ((nt = Wc),
              (z = "onMouseLeave"),
              (M = "onMouseEnter"),
              (A = "mouse"),
              (t === "pointerout" || t === "pointerover") &&
                ((nt = Ic),
                (z = "onPointerLeave"),
                (M = "onPointerEnter"),
                (A = "pointer")),
              (Ct = V == null ? R : ma(V)),
              (x = Z == null ? R : ma(Z)),
              (R = new nt(z, A + "leave", V, n, C)),
              (R.target = Ct),
              (R.relatedTarget = x),
              (z = null),
              Qn(C) === E &&
                ((nt = new nt(M, A + "enter", Z, n, C)),
                (nt.target = x),
                (nt.relatedTarget = Ct),
                (z = nt)),
              (Ct = z),
              V && Z)
            )
              e: {
                for (nt = V, M = Z, A = 0, x = nt; x; x = Pi(x)) A++;
                for (x = 0, z = M; z; z = Pi(z)) x++;
                for (; 0 < A - x; ) (nt = Pi(nt)), A--;
                for (; 0 < x - A; ) (M = Pi(M)), x--;
                for (; A--; ) {
                  if (nt === M || (M !== null && nt === M.alternate)) break e;
                  (nt = Pi(nt)), (M = Pi(M));
                }
                nt = null;
              }
            else nt = null;
            V !== null && Nd(_, R, V, nt, !1),
              Z !== null && Ct !== null && Nd(_, Ct, Z, nt, !0);
          }
        }
        t: {
          if (
            ((R = E ? ma(E) : window),
            (V = R.nodeName && R.nodeName.toLowerCase()),
            V === "select" || (V === "input" && R.type === "file"))
          )
            var X = rf;
          else if (sf(R))
            if (of) X = cg;
            else {
              X = rg;
              var ut = ug;
            }
          else
            (V = R.nodeName),
              !V ||
              V.toLowerCase() !== "input" ||
              (R.type !== "checkbox" && R.type !== "radio")
                ? E && fu(E.elementType) && (X = rf)
                : (X = og);
          if (X && (X = X(t, E))) {
            uf(_, X, n, C);
            break t;
          }
          ut && ut(t, R, E),
            t === "focusout" &&
              E &&
              R.type === "number" &&
              E.memoizedProps.value != null &&
              cu(R, "number", R.value);
        }
        switch (((ut = E ? ma(E) : window), t)) {
          case "focusin":
            (sf(ut) || ut.contentEditable === "true") &&
              ((xi = ut), (Mu = E), (Ea = null));
            break;
          case "focusout":
            Ea = Mu = xi = null;
            break;
          case "mousedown":
            xu = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (xu = !1), gf(_, n, C);
            break;
          case "selectionchange":
            if (dg) break;
          case "keydown":
          case "keyup":
            gf(_, n, C);
        }
        var P;
        if (bu)
          t: {
            switch (t) {
              case "compositionstart":
                var F = "onCompositionStart";
                break t;
              case "compositionend":
                F = "onCompositionEnd";
                break t;
              case "compositionupdate":
                F = "onCompositionUpdate";
                break t;
            }
            F = void 0;
          }
        else
          Mi
            ? af(t, n) && (F = "onCompositionEnd")
            : t === "keydown" &&
              n.keyCode === 229 &&
              (F = "onCompositionStart");
        F &&
          (tf &&
            n.locale !== "ko" &&
            (Mi || F !== "onCompositionStart"
              ? F === "onCompositionEnd" && Mi && (P = kc())
              : ((vn = C),
                (pu = "value" in vn ? vn.value : vn.textContent),
                (Mi = !0))),
          (ut = Ds(E, F)),
          0 < ut.length &&
            ((F = new $c(F, t, null, n, C)),
            _.push({ event: F, listeners: ut }),
            P ? (F.data = P) : ((P = lf(n)), P !== null && (F.data = P)))),
          (P = ng ? ig(t, n) : ag(t, n)) &&
            ((F = Ds(E, "onBeforeInput")),
            0 < F.length &&
              ((ut = new $c("onBeforeInput", "beforeinput", null, n, C)),
              _.push({ event: ut, listeners: F }),
              (ut.data = P))),
          kg(_, t, E, n, C);
      }
      Ud(_, e);
    });
  }
  function Wa(t, e, n) {
    return { instance: t, listener: e, currentTarget: n };
  }
  function Ds(t, e) {
    for (var n = e + "Capture", i = []; t !== null; ) {
      var s = t,
        o = s.stateNode;
      (s = s.tag),
        (s !== 5 && s !== 26 && s !== 27) ||
          o === null ||
          ((s = ya(t, n)),
          s != null && i.unshift(Wa(t, s, o)),
          (s = ya(t, e)),
          s != null && i.push(Wa(t, s, o))),
        (t = t.return);
    }
    return i;
  }
  function Pi(t) {
    if (t === null) return null;
    do t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function Nd(t, e, n, i, s) {
    for (var o = e._reactName, f = []; n !== null && n !== i; ) {
      var g = n,
        S = g.alternate,
        E = g.stateNode;
      if (((g = g.tag), S !== null && S === i)) break;
      (g !== 5 && g !== 26 && g !== 27) ||
        E === null ||
        ((S = E),
        s
          ? ((E = ya(n, o)), E != null && f.unshift(Wa(n, E, S)))
          : s || ((E = ya(n, o)), E != null && f.push(Wa(n, E, S)))),
        (n = n.return);
    }
    f.length !== 0 && t.push({ event: e, listeners: f });
  }
  var Ig = /\r\n?/g,
    tv = /\u0000|\uFFFD/g;
  function Hd(t) {
    return (typeof t == "string" ? t : "" + t)
      .replace(
        Ig,
        `
`
      )
      .replace(tv, "");
  }
  function Ld(t, e) {
    return (e = Hd(e)), Hd(t) === e;
  }
  function Ms() {}
  function vt(t, e, n, i, s, o) {
    switch (n) {
      case "children":
        typeof i == "string"
          ? e === "body" || (e === "textarea" && i === "") || Ai(t, i)
          : (typeof i == "number" || typeof i == "bigint") &&
            e !== "body" &&
            Ai(t, "" + i);
        break;
      case "className":
        Ul(t, "class", i);
        break;
      case "tabIndex":
        Ul(t, "tabindex", i);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Ul(t, n, i);
        break;
      case "style":
        Kc(t, i, o);
        break;
      case "data":
        if (e !== "object") {
          Ul(t, "data", i);
          break;
        }
      case "src":
      case "href":
        if (i === "" && (e !== "a" || n !== "href")) {
          t.removeAttribute(n);
          break;
        }
        if (
          i == null ||
          typeof i == "function" ||
          typeof i == "symbol" ||
          typeof i == "boolean"
        ) {
          t.removeAttribute(n);
          break;
        }
        (i = Hl("" + i)), t.setAttribute(n, i);
        break;
      case "action":
      case "formAction":
        if (typeof i == "function") {
          t.setAttribute(
            n,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof o == "function" &&
            (n === "formAction"
              ? (e !== "input" && vt(t, e, "name", s.name, s, null),
                vt(t, e, "formEncType", s.formEncType, s, null),
                vt(t, e, "formMethod", s.formMethod, s, null),
                vt(t, e, "formTarget", s.formTarget, s, null))
              : (vt(t, e, "encType", s.encType, s, null),
                vt(t, e, "method", s.method, s, null),
                vt(t, e, "target", s.target, s, null)));
        if (i == null || typeof i == "symbol" || typeof i == "boolean") {
          t.removeAttribute(n);
          break;
        }
        (i = Hl("" + i)), t.setAttribute(n, i);
        break;
      case "onClick":
        i != null && (t.onclick = Ms);
        break;
      case "onScroll":
        i != null && ct("scroll", t);
        break;
      case "onScrollEnd":
        i != null && ct("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (i != null) {
          if (typeof i != "object" || !("__html" in i)) throw Error(r(61));
          if (((n = i.__html), n != null)) {
            if (s.children != null) throw Error(r(60));
            t.innerHTML = n;
          }
        }
        break;
      case "multiple":
        t.multiple = i && typeof i != "function" && typeof i != "symbol";
        break;
      case "muted":
        t.muted = i && typeof i != "function" && typeof i != "symbol";
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
          i == null ||
          typeof i == "function" ||
          typeof i == "boolean" ||
          typeof i == "symbol"
        ) {
          t.removeAttribute("xlink:href");
          break;
        }
        (n = Hl("" + i)),
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
        i != null && typeof i != "function" && typeof i != "symbol"
          ? t.setAttribute(n, "" + i)
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
        i && typeof i != "function" && typeof i != "symbol"
          ? t.setAttribute(n, "")
          : t.removeAttribute(n);
        break;
      case "capture":
      case "download":
        i === !0
          ? t.setAttribute(n, "")
          : i !== !1 &&
            i != null &&
            typeof i != "function" &&
            typeof i != "symbol"
          ? t.setAttribute(n, i)
          : t.removeAttribute(n);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        i != null &&
        typeof i != "function" &&
        typeof i != "symbol" &&
        !isNaN(i) &&
        1 <= i
          ? t.setAttribute(n, i)
          : t.removeAttribute(n);
        break;
      case "rowSpan":
      case "start":
        i == null || typeof i == "function" || typeof i == "symbol" || isNaN(i)
          ? t.removeAttribute(n)
          : t.setAttribute(n, i);
        break;
      case "popover":
        ct("beforetoggle", t), ct("toggle", t), _l(t, "popover", i);
        break;
      case "xlinkActuate":
        ke(t, "http://www.w3.org/1999/xlink", "xlink:actuate", i);
        break;
      case "xlinkArcrole":
        ke(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", i);
        break;
      case "xlinkRole":
        ke(t, "http://www.w3.org/1999/xlink", "xlink:role", i);
        break;
      case "xlinkShow":
        ke(t, "http://www.w3.org/1999/xlink", "xlink:show", i);
        break;
      case "xlinkTitle":
        ke(t, "http://www.w3.org/1999/xlink", "xlink:title", i);
        break;
      case "xlinkType":
        ke(t, "http://www.w3.org/1999/xlink", "xlink:type", i);
        break;
      case "xmlBase":
        ke(t, "http://www.w3.org/XML/1998/namespace", "xml:base", i);
        break;
      case "xmlLang":
        ke(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", i);
        break;
      case "xmlSpace":
        ke(t, "http://www.w3.org/XML/1998/namespace", "xml:space", i);
        break;
      case "is":
        _l(t, "is", i);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < n.length) ||
          (n[0] !== "o" && n[0] !== "O") ||
          (n[1] !== "n" && n[1] !== "N")) &&
          ((n = V0.get(n) || n), _l(t, n, i));
    }
  }
  function kr(t, e, n, i, s, o) {
    switch (n) {
      case "style":
        Kc(t, i, o);
        break;
      case "dangerouslySetInnerHTML":
        if (i != null) {
          if (typeof i != "object" || !("__html" in i)) throw Error(r(61));
          if (((n = i.__html), n != null)) {
            if (s.children != null) throw Error(r(60));
            t.innerHTML = n;
          }
        }
        break;
      case "children":
        typeof i == "string"
          ? Ai(t, i)
          : (typeof i == "number" || typeof i == "bigint") && Ai(t, "" + i);
        break;
      case "onScroll":
        i != null && ct("scroll", t);
        break;
      case "onScrollEnd":
        i != null && ct("scrollend", t);
        break;
      case "onClick":
        i != null && (t.onclick = Ms);
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
        if (!Lc.hasOwnProperty(n))
          t: {
            if (
              n[0] === "o" &&
              n[1] === "n" &&
              ((s = n.endsWith("Capture")),
              (e = n.slice(2, s ? n.length - 7 : void 0)),
              (o = t[se] || null),
              (o = o != null ? o[n] : null),
              typeof o == "function" && t.removeEventListener(e, o, s),
              typeof i == "function")
            ) {
              typeof o != "function" &&
                o !== null &&
                (n in t
                  ? (t[n] = null)
                  : t.hasAttribute(n) && t.removeAttribute(n)),
                t.addEventListener(e, i, s);
              break t;
            }
            n in t
              ? (t[n] = i)
              : i === !0
              ? t.setAttribute(n, "")
              : _l(t, n, i);
          }
    }
  }
  function Pt(t, e, n) {
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
        ct("error", t), ct("load", t);
        var i = !1,
          s = !1,
          o;
        for (o in n)
          if (n.hasOwnProperty(o)) {
            var f = n[o];
            if (f != null)
              switch (o) {
                case "src":
                  i = !0;
                  break;
                case "srcSet":
                  s = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(r(137, e));
                default:
                  vt(t, e, o, f, n, null);
              }
          }
        s && vt(t, e, "srcSet", n.srcSet, n, null),
          i && vt(t, e, "src", n.src, n, null);
        return;
      case "input":
        ct("invalid", t);
        var g = (o = f = s = null),
          S = null,
          E = null;
        for (i in n)
          if (n.hasOwnProperty(i)) {
            var C = n[i];
            if (C != null)
              switch (i) {
                case "name":
                  s = C;
                  break;
                case "type":
                  f = C;
                  break;
                case "checked":
                  S = C;
                  break;
                case "defaultChecked":
                  E = C;
                  break;
                case "value":
                  o = C;
                  break;
                case "defaultValue":
                  g = C;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (C != null) throw Error(r(137, e));
                  break;
                default:
                  vt(t, e, i, C, n, null);
              }
          }
        Gc(t, o, g, S, E, f, s, !1), Bl(t);
        return;
      case "select":
        ct("invalid", t), (i = f = o = null);
        for (s in n)
          if (n.hasOwnProperty(s) && ((g = n[s]), g != null))
            switch (s) {
              case "value":
                o = g;
                break;
              case "defaultValue":
                f = g;
                break;
              case "multiple":
                i = g;
              default:
                vt(t, e, s, g, n, null);
            }
        (e = o),
          (n = f),
          (t.multiple = !!i),
          e != null ? bi(t, !!i, e, !1) : n != null && bi(t, !!i, n, !0);
        return;
      case "textarea":
        ct("invalid", t), (o = s = i = null);
        for (f in n)
          if (n.hasOwnProperty(f) && ((g = n[f]), g != null))
            switch (f) {
              case "value":
                i = g;
                break;
              case "defaultValue":
                s = g;
                break;
              case "children":
                o = g;
                break;
              case "dangerouslySetInnerHTML":
                if (g != null) throw Error(r(91));
                break;
              default:
                vt(t, e, f, g, n, null);
            }
        Qc(t, i, s, o), Bl(t);
        return;
      case "option":
        for (S in n)
          if (n.hasOwnProperty(S) && ((i = n[S]), i != null))
            switch (S) {
              case "selected":
                t.selected =
                  i && typeof i != "function" && typeof i != "symbol";
                break;
              default:
                vt(t, e, S, i, n, null);
            }
        return;
      case "dialog":
        ct("cancel", t), ct("close", t);
        break;
      case "iframe":
      case "object":
        ct("load", t);
        break;
      case "video":
      case "audio":
        for (i = 0; i < Fa.length; i++) ct(Fa[i], t);
        break;
      case "image":
        ct("error", t), ct("load", t);
        break;
      case "details":
        ct("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        ct("error", t), ct("load", t);
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
        for (E in n)
          if (n.hasOwnProperty(E) && ((i = n[E]), i != null))
            switch (E) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(r(137, e));
              default:
                vt(t, e, E, i, n, null);
            }
        return;
      default:
        if (fu(e)) {
          for (C in n)
            n.hasOwnProperty(C) &&
              ((i = n[C]), i !== void 0 && kr(t, e, C, i, n, void 0));
          return;
        }
    }
    for (g in n)
      n.hasOwnProperty(g) && ((i = n[g]), i != null && vt(t, e, g, i, n, null));
  }
  function ev(t, e, n, i) {
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
        var s = null,
          o = null,
          f = null,
          g = null,
          S = null,
          E = null,
          C = null;
        for (V in n) {
          var _ = n[V];
          if (n.hasOwnProperty(V) && _ != null)
            switch (V) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                S = _;
              default:
                i.hasOwnProperty(V) || vt(t, e, V, null, i, _);
            }
        }
        for (var R in i) {
          var V = i[R];
          if (((_ = n[R]), i.hasOwnProperty(R) && (V != null || _ != null)))
            switch (R) {
              case "type":
                o = V;
                break;
              case "name":
                s = V;
                break;
              case "checked":
                E = V;
                break;
              case "defaultChecked":
                C = V;
                break;
              case "value":
                f = V;
                break;
              case "defaultValue":
                g = V;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (V != null) throw Error(r(137, e));
                break;
              default:
                V !== _ && vt(t, e, R, V, i, _);
            }
        }
        ou(t, f, g, S, E, C, o, s);
        return;
      case "select":
        V = f = g = R = null;
        for (o in n)
          if (((S = n[o]), n.hasOwnProperty(o) && S != null))
            switch (o) {
              case "value":
                break;
              case "multiple":
                V = S;
              default:
                i.hasOwnProperty(o) || vt(t, e, o, null, i, S);
            }
        for (s in i)
          if (
            ((o = i[s]),
            (S = n[s]),
            i.hasOwnProperty(s) && (o != null || S != null))
          )
            switch (s) {
              case "value":
                R = o;
                break;
              case "defaultValue":
                g = o;
                break;
              case "multiple":
                f = o;
              default:
                o !== S && vt(t, e, s, o, i, S);
            }
        (e = g),
          (n = f),
          (i = V),
          R != null
            ? bi(t, !!n, R, !1)
            : !!i != !!n &&
              (e != null ? bi(t, !!n, e, !0) : bi(t, !!n, n ? [] : "", !1));
        return;
      case "textarea":
        V = R = null;
        for (g in n)
          if (
            ((s = n[g]),
            n.hasOwnProperty(g) && s != null && !i.hasOwnProperty(g))
          )
            switch (g) {
              case "value":
                break;
              case "children":
                break;
              default:
                vt(t, e, g, null, i, s);
            }
        for (f in i)
          if (
            ((s = i[f]),
            (o = n[f]),
            i.hasOwnProperty(f) && (s != null || o != null))
          )
            switch (f) {
              case "value":
                R = s;
                break;
              case "defaultValue":
                V = s;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (s != null) throw Error(r(91));
                break;
              default:
                s !== o && vt(t, e, f, s, i, o);
            }
        Xc(t, R, V);
        return;
      case "option":
        for (var Z in n)
          if (
            ((R = n[Z]),
            n.hasOwnProperty(Z) && R != null && !i.hasOwnProperty(Z))
          )
            switch (Z) {
              case "selected":
                t.selected = !1;
                break;
              default:
                vt(t, e, Z, null, i, R);
            }
        for (S in i)
          if (
            ((R = i[S]),
            (V = n[S]),
            i.hasOwnProperty(S) && R !== V && (R != null || V != null))
          )
            switch (S) {
              case "selected":
                t.selected =
                  R && typeof R != "function" && typeof R != "symbol";
                break;
              default:
                vt(t, e, S, R, i, V);
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
        for (var nt in n)
          (R = n[nt]),
            n.hasOwnProperty(nt) &&
              R != null &&
              !i.hasOwnProperty(nt) &&
              vt(t, e, nt, null, i, R);
        for (E in i)
          if (
            ((R = i[E]),
            (V = n[E]),
            i.hasOwnProperty(E) && R !== V && (R != null || V != null))
          )
            switch (E) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (R != null) throw Error(r(137, e));
                break;
              default:
                vt(t, e, E, R, i, V);
            }
        return;
      default:
        if (fu(e)) {
          for (var Ct in n)
            (R = n[Ct]),
              n.hasOwnProperty(Ct) &&
                R !== void 0 &&
                !i.hasOwnProperty(Ct) &&
                kr(t, e, Ct, void 0, i, R);
          for (C in i)
            (R = i[C]),
              (V = n[C]),
              !i.hasOwnProperty(C) ||
                R === V ||
                (R === void 0 && V === void 0) ||
                kr(t, e, C, R, i, V);
          return;
        }
    }
    for (var M in n)
      (R = n[M]),
        n.hasOwnProperty(M) &&
          R != null &&
          !i.hasOwnProperty(M) &&
          vt(t, e, M, null, i, R);
    for (_ in i)
      (R = i[_]),
        (V = n[_]),
        !i.hasOwnProperty(_) ||
          R === V ||
          (R == null && V == null) ||
          vt(t, e, _, R, i, V);
  }
  var Fr = null,
    Wr = null;
  function xs(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function jd(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function wd(t, e) {
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
  function $r(t, e) {
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
  var Ir = null;
  function nv() {
    var t = window.event;
    return t && t.type === "popstate"
      ? t === Ir
        ? !1
        : ((Ir = t), !0)
      : ((Ir = null), !1);
  }
  var qd = typeof setTimeout == "function" ? setTimeout : void 0,
    iv = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Yd = typeof Promise == "function" ? Promise : void 0,
    av =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Yd < "u"
        ? function (t) {
            return Yd.resolve(null).then(t).catch(lv);
          }
        : qd;
  function lv(t) {
    setTimeout(function () {
      throw t;
    });
  }
  function to(t, e) {
    var n = e,
      i = 0;
    do {
      var s = n.nextSibling;
      if ((t.removeChild(n), s && s.nodeType === 8))
        if (((n = s.data), n === "/$")) {
          if (i === 0) {
            t.removeChild(s), ll(e);
            return;
          }
          i--;
        } else (n !== "$" && n !== "$?" && n !== "$!") || i++;
      n = s;
    } while (n);
    ll(e);
  }
  function eo(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var n = e;
      switch (((e = e.nextSibling), n.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          eo(n), ru(n);
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
  function sv(t, e, n, i) {
    for (; t.nodeType === 1; ) {
      var s = n;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!i && (t.nodeName !== "INPUT" || t.type !== "hidden")) break;
      } else if (i) {
        if (!t[da])
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
                o !== s.rel ||
                t.getAttribute("href") !== (s.href == null ? null : s.href) ||
                t.getAttribute("crossorigin") !==
                  (s.crossOrigin == null ? null : s.crossOrigin) ||
                t.getAttribute("title") !== (s.title == null ? null : s.title)
              )
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (
                ((o = t.getAttribute("src")),
                (o !== (s.src == null ? null : s.src) ||
                  t.getAttribute("type") !== (s.type == null ? null : s.type) ||
                  t.getAttribute("crossorigin") !==
                    (s.crossOrigin == null ? null : s.crossOrigin)) &&
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
        var o = s.name == null ? null : "" + s.name;
        if (s.type === "hidden" && t.getAttribute("name") === o) return t;
      } else return t;
      if (((t = Le(t.nextSibling)), t === null)) break;
    }
    return null;
  }
  function uv(t, e, n) {
    if (e === "") return null;
    for (; t.nodeType !== 3; )
      if (
        ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") &&
          !n) ||
        ((t = Le(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function Le(t) {
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
  function Gd(t) {
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
  function Xd(t, e, n) {
    switch (((e = xs(n)), t)) {
      case "html":
        if (((t = e.documentElement), !t)) throw Error(r(452));
        return t;
      case "head":
        if (((t = e.head), !t)) throw Error(r(453));
        return t;
      case "body":
        if (((t = e.body), !t)) throw Error(r(454));
        return t;
      default:
        throw Error(r(451));
    }
  }
  var ze = new Map(),
    Qd = new Set();
  function Rs(t) {
    return typeof t.getRootNode == "function"
      ? t.getRootNode()
      : t.ownerDocument;
  }
  var fn = Y.d;
  Y.d = { f: rv, r: ov, D: cv, C: fv, L: hv, m: dv, X: yv, S: mv, M: pv };
  function rv() {
    var t = fn.f(),
      e = Ss();
    return t || e;
  }
  function ov(t) {
    var e = vi(t);
    e !== null && e.tag === 5 && e.type === "form" ? gh(e) : fn.r(t);
  }
  var ki = typeof document > "u" ? null : document;
  function Zd(t, e, n) {
    var i = ki;
    if (i && typeof e == "string" && e) {
      var s = be(e);
      (s = 'link[rel="' + t + '"][href="' + s + '"]'),
        typeof n == "string" && (s += '[crossorigin="' + n + '"]'),
        Qd.has(s) ||
          (Qd.add(s),
          (t = { rel: t, crossOrigin: n, href: e }),
          i.querySelector(s) === null &&
            ((e = i.createElement("link")),
            Pt(e, "link", t),
            Gt(e),
            i.head.appendChild(e)));
    }
  }
  function cv(t) {
    fn.D(t), Zd("dns-prefetch", t, null);
  }
  function fv(t, e) {
    fn.C(t, e), Zd("preconnect", t, e);
  }
  function hv(t, e, n) {
    fn.L(t, e, n);
    var i = ki;
    if (i && t && e) {
      var s = 'link[rel="preload"][as="' + be(e) + '"]';
      e === "image" && n && n.imageSrcSet
        ? ((s += '[imagesrcset="' + be(n.imageSrcSet) + '"]'),
          typeof n.imageSizes == "string" &&
            (s += '[imagesizes="' + be(n.imageSizes) + '"]'))
        : (s += '[href="' + be(t) + '"]');
      var o = s;
      switch (e) {
        case "style":
          o = Fi(t);
          break;
        case "script":
          o = Wi(t);
      }
      ze.has(o) ||
        ((t = et(
          {
            rel: "preload",
            href: e === "image" && n && n.imageSrcSet ? void 0 : t,
            as: e,
          },
          n
        )),
        ze.set(o, t),
        i.querySelector(s) !== null ||
          (e === "style" && i.querySelector($a(o))) ||
          (e === "script" && i.querySelector(Ia(o))) ||
          ((e = i.createElement("link")),
          Pt(e, "link", t),
          Gt(e),
          i.head.appendChild(e)));
    }
  }
  function dv(t, e) {
    fn.m(t, e);
    var n = ki;
    if (n && t) {
      var i = e && typeof e.as == "string" ? e.as : "script",
        s =
          'link[rel="modulepreload"][as="' + be(i) + '"][href="' + be(t) + '"]',
        o = s;
      switch (i) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          o = Wi(t);
      }
      if (
        !ze.has(o) &&
        ((t = et({ rel: "modulepreload", href: t }, e)),
        ze.set(o, t),
        n.querySelector(s) === null)
      ) {
        switch (i) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector(Ia(o))) return;
        }
        (i = n.createElement("link")),
          Pt(i, "link", t),
          Gt(i),
          n.head.appendChild(i);
      }
    }
  }
  function mv(t, e, n) {
    fn.S(t, e, n);
    var i = ki;
    if (i && t) {
      var s = Si(i).hoistableStyles,
        o = Fi(t);
      e = e || "default";
      var f = s.get(o);
      if (!f) {
        var g = { loading: 0, preload: null };
        if ((f = i.querySelector($a(o)))) g.loading = 5;
        else {
          (t = et({ rel: "stylesheet", href: t, "data-precedence": e }, n)),
            (n = ze.get(o)) && no(t, n);
          var S = (f = i.createElement("link"));
          Gt(S),
            Pt(S, "link", t),
            (S._p = new Promise(function (E, C) {
              (S.onload = E), (S.onerror = C);
            })),
            S.addEventListener("load", function () {
              g.loading |= 1;
            }),
            S.addEventListener("error", function () {
              g.loading |= 2;
            }),
            (g.loading |= 4),
            Os(f, e, i);
        }
        (f = { type: "stylesheet", instance: f, count: 1, state: g }),
          s.set(o, f);
      }
    }
  }
  function yv(t, e) {
    fn.X(t, e);
    var n = ki;
    if (n && t) {
      var i = Si(n).hoistableScripts,
        s = Wi(t),
        o = i.get(s);
      o ||
        ((o = n.querySelector(Ia(s))),
        o ||
          ((t = et({ src: t, async: !0 }, e)),
          (e = ze.get(s)) && io(t, e),
          (o = n.createElement("script")),
          Gt(o),
          Pt(o, "link", t),
          n.head.appendChild(o)),
        (o = { type: "script", instance: o, count: 1, state: null }),
        i.set(s, o));
    }
  }
  function pv(t, e) {
    fn.M(t, e);
    var n = ki;
    if (n && t) {
      var i = Si(n).hoistableScripts,
        s = Wi(t),
        o = i.get(s);
      o ||
        ((o = n.querySelector(Ia(s))),
        o ||
          ((t = et({ src: t, async: !0, type: "module" }, e)),
          (e = ze.get(s)) && io(t, e),
          (o = n.createElement("script")),
          Gt(o),
          Pt(o, "link", t),
          n.head.appendChild(o)),
        (o = { type: "script", instance: o, count: 1, state: null }),
        i.set(s, o));
    }
  }
  function Kd(t, e, n, i) {
    var s = (s = yn.current) ? Rs(s) : null;
    if (!s) throw Error(r(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string"
          ? ((e = Fi(n.href)),
            (n = Si(s).hoistableStyles),
            (i = n.get(e)),
            i ||
              ((i = { type: "style", instance: null, count: 0, state: null }),
              n.set(e, i)),
            i)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          n.rel === "stylesheet" &&
          typeof n.href == "string" &&
          typeof n.precedence == "string"
        ) {
          t = Fi(n.href);
          var o = Si(s).hoistableStyles,
            f = o.get(t);
          if (
            (f ||
              ((s = s.ownerDocument || s),
              (f = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              o.set(t, f),
              (o = s.querySelector($a(t))) &&
                !o._p &&
                ((f.instance = o), (f.state.loading = 5)),
              ze.has(t) ||
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
                ze.set(t, n),
                o || gv(s, t, n, f.state))),
            e && i === null)
          )
            throw Error(r(528, ""));
          return f;
        }
        if (e && i !== null) throw Error(r(529, ""));
        return null;
      case "script":
        return (
          (e = n.async),
          (n = n.src),
          typeof n == "string" &&
          e &&
          typeof e != "function" &&
          typeof e != "symbol"
            ? ((e = Wi(n)),
              (n = Si(s).hoistableScripts),
              (i = n.get(e)),
              i ||
                ((i = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                n.set(e, i)),
              i)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(r(444, t));
    }
  }
  function Fi(t) {
    return 'href="' + be(t) + '"';
  }
  function $a(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function Jd(t) {
    return et({}, t, { "data-precedence": t.precedence, precedence: null });
  }
  function gv(t, e, n, i) {
    t.querySelector('link[rel="preload"][as="style"][' + e + "]")
      ? (i.loading = 1)
      : ((e = t.createElement("link")),
        (i.preload = e),
        e.addEventListener("load", function () {
          return (i.loading |= 1);
        }),
        e.addEventListener("error", function () {
          return (i.loading |= 2);
        }),
        Pt(e, "link", n),
        Gt(e),
        t.head.appendChild(e));
  }
  function Wi(t) {
    return '[src="' + be(t) + '"]';
  }
  function Ia(t) {
    return "script[async]" + t;
  }
  function Pd(t, e, n) {
    if ((e.count++, e.instance === null))
      switch (e.type) {
        case "style":
          var i = t.querySelector('style[data-href~="' + be(n.href) + '"]');
          if (i) return (e.instance = i), Gt(i), i;
          var s = et({}, n, {
            "data-href": n.href,
            "data-precedence": n.precedence,
            href: null,
            precedence: null,
          });
          return (
            (i = (t.ownerDocument || t).createElement("style")),
            Gt(i),
            Pt(i, "style", s),
            Os(i, n.precedence, t),
            (e.instance = i)
          );
        case "stylesheet":
          s = Fi(n.href);
          var o = t.querySelector($a(s));
          if (o) return (e.state.loading |= 4), (e.instance = o), Gt(o), o;
          (i = Jd(n)),
            (s = ze.get(s)) && no(i, s),
            (o = (t.ownerDocument || t).createElement("link")),
            Gt(o);
          var f = o;
          return (
            (f._p = new Promise(function (g, S) {
              (f.onload = g), (f.onerror = S);
            })),
            Pt(o, "link", i),
            (e.state.loading |= 4),
            Os(o, n.precedence, t),
            (e.instance = o)
          );
        case "script":
          return (
            (o = Wi(n.src)),
            (s = t.querySelector(Ia(o)))
              ? ((e.instance = s), Gt(s), s)
              : ((i = n),
                (s = ze.get(o)) && ((i = et({}, n)), io(i, s)),
                (t = t.ownerDocument || t),
                (s = t.createElement("script")),
                Gt(s),
                Pt(s, "link", i),
                t.head.appendChild(s),
                (e.instance = s))
          );
        case "void":
          return null;
        default:
          throw Error(r(443, e.type));
      }
    else
      e.type === "stylesheet" &&
        (e.state.loading & 4) === 0 &&
        ((i = e.instance), (e.state.loading |= 4), Os(i, n.precedence, t));
    return e.instance;
  }
  function Os(t, e, n) {
    for (
      var i = n.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]'
        ),
        s = i.length ? i[i.length - 1] : null,
        o = s,
        f = 0;
      f < i.length;
      f++
    ) {
      var g = i[f];
      if (g.dataset.precedence === e) o = g;
      else if (o !== s) break;
    }
    o
      ? o.parentNode.insertBefore(t, o.nextSibling)
      : ((e = n.nodeType === 9 ? n.head : n), e.insertBefore(t, e.firstChild));
  }
  function no(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.title == null && (t.title = e.title);
  }
  function io(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.integrity == null && (t.integrity = e.integrity);
  }
  var Vs = null;
  function kd(t, e, n) {
    if (Vs === null) {
      var i = new Map(),
        s = (Vs = new Map());
      s.set(n, i);
    } else (s = Vs), (i = s.get(n)), i || ((i = new Map()), s.set(n, i));
    if (i.has(t)) return i;
    for (
      i.set(t, null), n = n.getElementsByTagName(t), s = 0;
      s < n.length;
      s++
    ) {
      var o = n[s];
      if (
        !(
          o[da] ||
          o[Ft] ||
          (t === "link" && o.getAttribute("rel") === "stylesheet")
        ) &&
        o.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var f = o.getAttribute(e) || "";
        f = t + f;
        var g = i.get(f);
        g ? g.push(o) : i.set(f, [o]);
      }
    }
    return i;
  }
  function Fd(t, e, n) {
    (t = t.ownerDocument || t),
      t.head.insertBefore(
        n,
        e === "title" ? t.querySelector("head > title") : null
      );
  }
  function vv(t, e, n) {
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
  function Wd(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  var tl = null;
  function Sv() {}
  function Tv(t, e, n) {
    if (tl === null) throw Error(r(475));
    var i = tl;
    if (
      e.type === "stylesheet" &&
      (typeof n.media != "string" || matchMedia(n.media).matches !== !1) &&
      (e.state.loading & 4) === 0
    ) {
      if (e.instance === null) {
        var s = Fi(n.href),
          o = t.querySelector($a(s));
        if (o) {
          (t = o._p),
            t !== null &&
              typeof t == "object" &&
              typeof t.then == "function" &&
              (i.count++, (i = Cs.bind(i)), t.then(i, i)),
            (e.state.loading |= 4),
            (e.instance = o),
            Gt(o);
          return;
        }
        (o = t.ownerDocument || t),
          (n = Jd(n)),
          (s = ze.get(s)) && no(n, s),
          (o = o.createElement("link")),
          Gt(o);
        var f = o;
        (f._p = new Promise(function (g, S) {
          (f.onload = g), (f.onerror = S);
        })),
          Pt(o, "link", n),
          (e.instance = o);
      }
      i.stylesheets === null && (i.stylesheets = new Map()),
        i.stylesheets.set(e, t),
        (t = e.state.preload) &&
          (e.state.loading & 3) === 0 &&
          (i.count++,
          (e = Cs.bind(i)),
          t.addEventListener("load", e),
          t.addEventListener("error", e));
    }
  }
  function bv() {
    if (tl === null) throw Error(r(475));
    var t = tl;
    return (
      t.stylesheets && t.count === 0 && ao(t, t.stylesheets),
      0 < t.count
        ? function (e) {
            var n = setTimeout(function () {
              if ((t.stylesheets && ao(t, t.stylesheets), t.unsuspend)) {
                var i = t.unsuspend;
                (t.unsuspend = null), i();
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
  function Cs() {
    if ((this.count--, this.count === 0)) {
      if (this.stylesheets) ao(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        (this.unsuspend = null), t();
      }
    }
  }
  var zs = null;
  function ao(t, e) {
    (t.stylesheets = null),
      t.unsuspend !== null &&
        (t.count++,
        (zs = new Map()),
        e.forEach(Av, t),
        (zs = null),
        Cs.call(t));
  }
  function Av(t, e) {
    if (!(e.state.loading & 4)) {
      var n = zs.get(t);
      if (n) var i = n.get(null);
      else {
        (n = new Map()), zs.set(t, n);
        for (
          var s = t.querySelectorAll(
              "link[data-precedence],style[data-precedence]"
            ),
            o = 0;
          o < s.length;
          o++
        ) {
          var f = s[o];
          (f.nodeName === "LINK" || f.getAttribute("media") !== "not all") &&
            (n.set(f.dataset.precedence, f), (i = f));
        }
        i && n.set(null, i);
      }
      (s = e.instance),
        (f = s.getAttribute("data-precedence")),
        (o = n.get(f) || i),
        o === i && n.set(null, s),
        n.set(f, s),
        this.count++,
        (i = Cs.bind(this)),
        s.addEventListener("load", i),
        s.addEventListener("error", i),
        o
          ? o.parentNode.insertBefore(s, o.nextSibling)
          : ((t = t.nodeType === 9 ? t.head : t),
            t.insertBefore(s, t.firstChild)),
        (e.state.loading |= 4);
    }
  }
  var el = {
    $$typeof: O,
    Provider: null,
    Consumer: null,
    _currentValue: ft,
    _currentValue2: ft,
    _threadCount: 0,
  };
  function Ev(t, e, n, i, s, o, f, g) {
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
      (this.expirationTimes = su(-1)),
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
      (this.entanglements = su(0)),
      (this.hiddenUpdates = su(null)),
      (this.identifierPrefix = i),
      (this.onUncaughtError = s),
      (this.onCaughtError = o),
      (this.onRecoverableError = f),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = g),
      (this.incompleteTransitions = new Map());
  }
  function $d(t, e, n, i, s, o, f, g, S, E, C, _) {
    return (
      (t = new Ev(t, e, n, f, g, S, E, _)),
      (e = 1),
      o === !0 && (e |= 24),
      (o = Ve(3, null, null, e)),
      (t.current = o),
      (o.stateNode = t),
      (e = Hu()),
      e.refCount++,
      (t.pooledCache = e),
      e.refCount++,
      (o.memoizedState = { element: i, isDehydrated: n, cache: e }),
      pr(o),
      t
    );
  }
  function Id(t) {
    return t ? ((t = Vi), t) : Vi;
  }
  function tm(t, e, n, i, s, o) {
    (s = Id(s)),
      i.context === null ? (i.context = s) : (i.pendingContext = s),
      (i = xn(e)),
      (i.payload = { element: n }),
      (o = o === void 0 ? null : o),
      o !== null && (i.callback = o),
      (n = Rn(t, i, e)),
      n !== null && (ae(n, t, e), ja(n, t, e));
  }
  function em(t, e) {
    if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
      var n = t.retryLane;
      t.retryLane = n !== 0 && n < e ? n : e;
    }
  }
  function lo(t, e) {
    em(t, e), (t = t.alternate) && em(t, e);
  }
  function nm(t) {
    if (t.tag === 13) {
      var e = Sn(t, 67108864);
      e !== null && ae(e, t, 67108864), lo(t, 67108864);
    }
  }
  var _s = !0;
  function Dv(t, e, n, i) {
    var s = G.T;
    G.T = null;
    var o = Y.p;
    try {
      (Y.p = 2), so(t, e, n, i);
    } finally {
      (Y.p = o), (G.T = s);
    }
  }
  function Mv(t, e, n, i) {
    var s = G.T;
    G.T = null;
    var o = Y.p;
    try {
      (Y.p = 8), so(t, e, n, i);
    } finally {
      (Y.p = o), (G.T = s);
    }
  }
  function so(t, e, n, i) {
    if (_s) {
      var s = uo(i);
      if (s === null) Pr(t, e, i, Us, n), am(t, i);
      else if (Rv(s, t, e, n, i)) i.stopPropagation();
      else if ((am(t, i), e & 4 && -1 < xv.indexOf(t))) {
        for (; s !== null; ) {
          var o = vi(s);
          if (o !== null)
            switch (o.tag) {
              case 3:
                if (((o = o.stateNode), o.current.memoizedState.isDehydrated)) {
                  var f = Xn(o.pendingLanes);
                  if (f !== 0) {
                    var g = o;
                    for (g.pendingLanes |= 2, g.entangledLanes |= 2; f; ) {
                      var S = 1 << (31 - ce(f));
                      (g.entanglements[1] |= S), (f &= ~S);
                    }
                    Ze(o), (xt & 6) === 0 && ((ps = qe() + 500), ka(0));
                  }
                }
                break;
              case 13:
                (g = Sn(o, 2)), g !== null && ae(g, o, 2), Ss(), lo(o, 2);
            }
          if (((o = uo(i)), o === null && Pr(t, e, i, Us, n), o === s)) break;
          s = o;
        }
        s !== null && i.stopPropagation();
      } else Pr(t, e, i, null, n);
    }
  }
  function uo(t) {
    return (t = du(t)), ro(t);
  }
  var Us = null;
  function ro(t) {
    if (((Us = null), (t = Qn(t)), t !== null)) {
      var e = J(t);
      if (e === null) t = null;
      else {
        var n = e.tag;
        if (n === 13) {
          if (((t = yt(e)), t !== null)) return t;
          t = null;
        } else if (n === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated)
            return e.tag === 3 ? e.stateNode.containerInfo : null;
          t = null;
        } else e !== t && (t = null);
      }
    }
    return (Us = t), null;
  }
  function im(t) {
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
        switch (f0()) {
          case xc:
            return 2;
          case Rc:
            return 8;
          case Ol:
          case h0:
            return 32;
          case Oc:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var oo = !1,
    Bn = null,
    Nn = null,
    Hn = null,
    nl = new Map(),
    il = new Map(),
    Ln = [],
    xv =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " "
      );
  function am(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        Bn = null;
        break;
      case "dragenter":
      case "dragleave":
        Nn = null;
        break;
      case "mouseover":
      case "mouseout":
        Hn = null;
        break;
      case "pointerover":
      case "pointerout":
        nl.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        il.delete(e.pointerId);
    }
  }
  function al(t, e, n, i, s, o) {
    return t === null || t.nativeEvent !== o
      ? ((t = {
          blockedOn: e,
          domEventName: n,
          eventSystemFlags: i,
          nativeEvent: o,
          targetContainers: [s],
        }),
        e !== null && ((e = vi(e)), e !== null && nm(e)),
        t)
      : ((t.eventSystemFlags |= i),
        (e = t.targetContainers),
        s !== null && e.indexOf(s) === -1 && e.push(s),
        t);
  }
  function Rv(t, e, n, i, s) {
    switch (e) {
      case "focusin":
        return (Bn = al(Bn, t, e, n, i, s)), !0;
      case "dragenter":
        return (Nn = al(Nn, t, e, n, i, s)), !0;
      case "mouseover":
        return (Hn = al(Hn, t, e, n, i, s)), !0;
      case "pointerover":
        var o = s.pointerId;
        return nl.set(o, al(nl.get(o) || null, t, e, n, i, s)), !0;
      case "gotpointercapture":
        return (
          (o = s.pointerId), il.set(o, al(il.get(o) || null, t, e, n, i, s)), !0
        );
    }
    return !1;
  }
  function lm(t) {
    var e = Qn(t.target);
    if (e !== null) {
      var n = J(e);
      if (n !== null) {
        if (((e = n.tag), e === 13)) {
          if (((e = yt(n)), e !== null)) {
            (t.blockedOn = e),
              b0(t.priority, function () {
                if (n.tag === 13) {
                  var i = ye(),
                    s = Sn(n, i);
                  s !== null && ae(s, n, i), lo(n, i);
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
  function Bs(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var n = uo(t.nativeEvent);
      if (n === null) {
        n = t.nativeEvent;
        var i = new n.constructor(n.type, n);
        (hu = i), n.target.dispatchEvent(i), (hu = null);
      } else return (e = vi(n)), e !== null && nm(e), (t.blockedOn = n), !1;
      e.shift();
    }
    return !0;
  }
  function sm(t, e, n) {
    Bs(t) && n.delete(e);
  }
  function Ov() {
    (oo = !1),
      Bn !== null && Bs(Bn) && (Bn = null),
      Nn !== null && Bs(Nn) && (Nn = null),
      Hn !== null && Bs(Hn) && (Hn = null),
      nl.forEach(sm),
      il.forEach(sm);
  }
  function Ns(t, e) {
    t.blockedOn === e &&
      ((t.blockedOn = null),
      oo ||
        ((oo = !0),
        a.unstable_scheduleCallback(a.unstable_NormalPriority, Ov)));
  }
  var Hs = null;
  function um(t) {
    Hs !== t &&
      ((Hs = t),
      a.unstable_scheduleCallback(a.unstable_NormalPriority, function () {
        Hs === t && (Hs = null);
        for (var e = 0; e < t.length; e += 3) {
          var n = t[e],
            i = t[e + 1],
            s = t[e + 2];
          if (typeof i != "function") {
            if (ro(i || n) === null) continue;
            break;
          }
          var o = vi(n);
          o !== null &&
            (t.splice(e, 3),
            (e -= 3),
            $u(o, { pending: !0, data: s, method: n.method, action: i }, i, s));
        }
      }));
  }
  function ll(t) {
    function e(S) {
      return Ns(S, t);
    }
    Bn !== null && Ns(Bn, t),
      Nn !== null && Ns(Nn, t),
      Hn !== null && Ns(Hn, t),
      nl.forEach(e),
      il.forEach(e);
    for (var n = 0; n < Ln.length; n++) {
      var i = Ln[n];
      i.blockedOn === t && (i.blockedOn = null);
    }
    for (; 0 < Ln.length && ((n = Ln[0]), n.blockedOn === null); )
      lm(n), n.blockedOn === null && Ln.shift();
    if (((n = (t.ownerDocument || t).$$reactFormReplay), n != null))
      for (i = 0; i < n.length; i += 3) {
        var s = n[i],
          o = n[i + 1],
          f = s[se] || null;
        if (typeof o == "function") f || um(n);
        else if (f) {
          var g = null;
          if (o && o.hasAttribute("formAction")) {
            if (((s = o), (f = o[se] || null))) g = f.formAction;
            else if (ro(s) !== null) continue;
          } else g = f.action;
          typeof g == "function" ? (n[i + 1] = g) : (n.splice(i, 3), (i -= 3)),
            um(n);
        }
      }
  }
  function co(t) {
    this._internalRoot = t;
  }
  (Ls.prototype.render = co.prototype.render =
    function (t) {
      var e = this._internalRoot;
      if (e === null) throw Error(r(409));
      var n = e.current,
        i = ye();
      tm(n, i, t, e, null, null);
    }),
    (Ls.prototype.unmount = co.prototype.unmount =
      function () {
        var t = this._internalRoot;
        if (t !== null) {
          this._internalRoot = null;
          var e = t.containerInfo;
          t.tag === 0 && Ki(),
            tm(t.current, 2, null, t, null, null),
            Ss(),
            (e[gi] = null);
        }
      });
  function Ls(t) {
    this._internalRoot = t;
  }
  Ls.prototype.unstable_scheduleHydration = function (t) {
    if (t) {
      var e = Bc();
      t = { blockedOn: null, target: t, priority: e };
      for (var n = 0; n < Ln.length && e !== 0 && e < Ln[n].priority; n++);
      Ln.splice(n, 0, t), n === 0 && lm(t);
    }
  };
  var rm = l.version;
  if (rm !== "19.0.0") throw Error(r(527, rm, "19.0.0"));
  Y.findDOMNode = function (t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == "function"
        ? Error(r(188))
        : ((t = Object.keys(t).join(",")), Error(r(268, t)));
    return (
      (t = N(e)),
      (t = t !== null ? $(t) : null),
      (t = t === null ? null : t.stateNode),
      t
    );
  };
  var Vv = {
    bundleType: 0,
    version: "19.0.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: G,
    findFiberByHostInstance: Qn,
    reconcilerVersion: "19.0.0",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var js = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!js.isDisabled && js.supportsFiber)
      try {
        (ca = js.inject(Vv)), (oe = js);
      } catch {}
  }
  return (
    (ul.createRoot = function (t, e) {
      if (!c(t)) throw Error(r(299));
      var n = !1,
        i = "",
        s = Mh,
        o = xh,
        f = Rh,
        g = null;
      return (
        e != null &&
          (e.unstable_strictMode === !0 && (n = !0),
          e.identifierPrefix !== void 0 && (i = e.identifierPrefix),
          e.onUncaughtError !== void 0 && (s = e.onUncaughtError),
          e.onCaughtError !== void 0 && (o = e.onCaughtError),
          e.onRecoverableError !== void 0 && (f = e.onRecoverableError),
          e.unstable_transitionCallbacks !== void 0 &&
            (g = e.unstable_transitionCallbacks)),
        (e = $d(t, 1, !1, null, null, n, i, s, o, f, g, null)),
        (t[gi] = e.current),
        Jr(t.nodeType === 8 ? t.parentNode : t),
        new co(e)
      );
    }),
    (ul.hydrateRoot = function (t, e, n) {
      if (!c(t)) throw Error(r(299));
      var i = !1,
        s = "",
        o = Mh,
        f = xh,
        g = Rh,
        S = null,
        E = null;
      return (
        n != null &&
          (n.unstable_strictMode === !0 && (i = !0),
          n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
          n.onUncaughtError !== void 0 && (o = n.onUncaughtError),
          n.onCaughtError !== void 0 && (f = n.onCaughtError),
          n.onRecoverableError !== void 0 && (g = n.onRecoverableError),
          n.unstable_transitionCallbacks !== void 0 &&
            (S = n.unstable_transitionCallbacks),
          n.formState !== void 0 && (E = n.formState)),
        (e = $d(t, 1, !0, e, n ?? null, i, s, o, f, g, S, E)),
        (e.context = Id(null)),
        (n = e.current),
        (i = ye()),
        (s = xn(i)),
        (s.callback = null),
        Rn(n, s, i),
        (e.current.lanes = i),
        ha(e, i),
        Ze(e),
        (t[gi] = e.current),
        Jr(t),
        new Ls(e)
      );
    }),
    (ul.version = "19.0.0"),
    ul
  );
}
var vm;
function wv() {
  if (vm) return mo.exports;
  vm = 1;
  function a() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (l) {
        console.error(l);
      }
  }
  return a(), (mo.exports = jv()), mo.exports;
}
var qv = wv();
const By = tt.createContext({});
function Yv(a) {
  const l = tt.useRef(null);
  return l.current === null && (l.current = a()), l.current;
}
const Jo = tt.createContext(null),
  Ny = tt.createContext({
    transformPagePoint: (a) => a,
    isStatic: !1,
    reducedMotion: "never",
  });
function Gv(a = !0) {
  const l = tt.useContext(Jo);
  if (l === null) return [!0, null];
  const { isPresent: u, onExitComplete: r, register: c } = l,
    d = tt.useId();
  tt.useEffect(() => {
    if (a) return c(d);
  }, [a]);
  const h = tt.useCallback(() => a && r && r(d), [d, r, a]);
  return !u && r ? [!1, h] : [!0];
}
const Po = typeof window < "u",
  Xv = Po ? tt.useLayoutEffect : tt.useEffect,
  pe = (a) => a;
let Hy = pe;
const Qv = { useManualTiming: !1 },
  ws = [
    "read",
    "resolveKeyframes",
    "update",
    "preRender",
    "render",
    "postRender",
  ],
  Sm = { value: null };
function Zv(a, l) {
  let u = new Set(),
    r = new Set(),
    c = !1,
    d = !1;
  const h = new WeakSet();
  let p = { delta: 0, timestamp: 0, isProcessing: !1 },
    m = 0;
  function y(T) {
    h.has(T) && (v.schedule(T), a()), m++, T(p);
  }
  const v = {
    schedule: (T, D = !1, O = !1) => {
      const B = O && c ? u : r;
      return D && h.add(T), B.has(T) || B.add(T), T;
    },
    cancel: (T) => {
      r.delete(T), h.delete(T);
    },
    process: (T) => {
      if (((p = T), c)) {
        d = !0;
        return;
      }
      (c = !0),
        ([u, r] = [r, u]),
        u.forEach(y),
        l && Sm.value && Sm.value.frameloop[l].push(m),
        (m = 0),
        u.clear(),
        (c = !1),
        d && ((d = !1), v.process(T));
    },
  };
  return v;
}
const Kv = 40;
function Ly(a, l) {
  let u = !1,
    r = !0;
  const c = { delta: 0, timestamp: 0, isProcessing: !1 },
    d = () => (u = !0),
    h = ws.reduce((H, q) => ((H[q] = Zv(d, l ? q : void 0)), H), {}),
    {
      read: p,
      resolveKeyframes: m,
      update: y,
      preRender: v,
      render: T,
      postRender: D,
    } = h,
    O = () => {
      const H = performance.now();
      (u = !1),
        (c.delta = r ? 1e3 / 60 : Math.max(Math.min(H - c.timestamp, Kv), 1)),
        (c.timestamp = H),
        (c.isProcessing = !0),
        p.process(c),
        m.process(c),
        y.process(c),
        v.process(c),
        T.process(c),
        D.process(c),
        (c.isProcessing = !1),
        u && l && ((r = !1), a(O));
    },
    U = () => {
      (u = !0), (r = !0), c.isProcessing || a(O);
    };
  return {
    schedule: ws.reduce((H, q) => {
      const Q = h[q];
      return (
        (H[q] = (ot, L = !1, it = !1) => (u || U(), Q.schedule(ot, L, it))), H
      );
    }, {}),
    cancel: (H) => {
      for (let q = 0; q < ws.length; q++) h[ws[q]].cancel(H);
    },
    state: c,
    steps: h,
  };
}
const {
    schedule: Et,
    cancel: qn,
    state: kt,
    steps: vo,
  } = Ly(typeof requestAnimationFrame < "u" ? requestAnimationFrame : pe, !0),
  jy = tt.createContext({ strict: !1 }),
  Tm = {
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
  aa = {};
for (const a in Tm) aa[a] = { isEnabled: (l) => Tm[a].some((u) => !!l[u]) };
function Jv(a) {
  for (const l in a) aa[l] = { ...aa[l], ...a[l] };
}
const Pv = new Set([
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
function Zs(a) {
  return (
    a.startsWith("while") ||
    (a.startsWith("drag") && a !== "draggable") ||
    a.startsWith("layout") ||
    a.startsWith("onTap") ||
    a.startsWith("onPan") ||
    a.startsWith("onLayout") ||
    Pv.has(a)
  );
}
let wy = (a) => !Zs(a);
function kv(a) {
  a && (wy = (l) => (l.startsWith("on") ? !Zs(l) : a(l)));
}
try {
  kv(require("@emotion/is-prop-valid").default);
} catch {}
function Fv(a, l, u) {
  const r = {};
  for (const c in a)
    (c === "values" && typeof a.values == "object") ||
      ((wy(c) ||
        (u === !0 && Zs(c)) ||
        (!l && !Zs(c)) ||
        (a.draggable && c.startsWith("onDrag"))) &&
        (r[c] = a[c]));
  return r;
}
function Wv(a) {
  if (typeof Proxy > "u") return a;
  const l = new Map(),
    u = (...r) => a(...r);
  return new Proxy(u, {
    get: (r, c) =>
      c === "create" ? a : (l.has(c) || l.set(c, a(c)), l.get(c)),
  });
}
const $s = tt.createContext({});
function Is(a) {
  return a !== null && typeof a == "object" && typeof a.start == "function";
}
function ml(a) {
  return typeof a == "string" || Array.isArray(a);
}
const ko = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  Fo = ["initial", ...ko];
function tu(a) {
  return Is(a.animate) || Fo.some((l) => ml(a[l]));
}
function qy(a) {
  return !!(tu(a) || a.variants);
}
function $v(a, l) {
  if (tu(a)) {
    const { initial: u, animate: r } = a;
    return {
      initial: u === !1 || ml(u) ? u : void 0,
      animate: ml(r) ? r : void 0,
    };
  }
  return a.inherit !== !1 ? l : {};
}
function Iv(a) {
  const { initial: l, animate: u } = $v(a, tt.useContext($s));
  return tt.useMemo(() => ({ initial: l, animate: u }), [bm(l), bm(u)]);
}
function bm(a) {
  return Array.isArray(a) ? a.join(" ") : a;
}
const t1 = Symbol.for("motionComponentSymbol");
function $i(a) {
  return (
    a &&
    typeof a == "object" &&
    Object.prototype.hasOwnProperty.call(a, "current")
  );
}
function e1(a, l, u) {
  return tt.useCallback(
    (r) => {
      r && a.onMount && a.onMount(r),
        l && (r ? l.mount(r) : l.unmount()),
        u && (typeof u == "function" ? u(r) : $i(u) && (u.current = r));
    },
    [l]
  );
}
const Wo = (a) => a.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
  n1 = "framerAppearId",
  Yy = "data-" + Wo(n1),
  { schedule: $o } = Ly(queueMicrotask, !1),
  Gy = tt.createContext({});
function i1(a, l, u, r, c) {
  var d, h;
  const { visualElement: p } = tt.useContext($s),
    m = tt.useContext(jy),
    y = tt.useContext(Jo),
    v = tt.useContext(Ny).reducedMotion,
    T = tt.useRef(null);
  (r = r || m.renderer),
    !T.current &&
      r &&
      (T.current = r(a, {
        visualState: l,
        parent: p,
        props: u,
        presenceContext: y,
        blockInitialAnimation: y ? y.initial === !1 : !1,
        reducedMotionConfig: v,
      }));
  const D = T.current,
    O = tt.useContext(Gy);
  D &&
    !D.projection &&
    c &&
    (D.type === "html" || D.type === "svg") &&
    a1(T.current, u, c, O);
  const U = tt.useRef(!1);
  tt.useInsertionEffect(() => {
    D && U.current && D.update(u, y);
  });
  const B = u[Yy],
    j = tt.useRef(
      !!B &&
        !(
          !((d = window.MotionHandoffIsComplete) === null || d === void 0) &&
          d.call(window, B)
        ) &&
        ((h = window.MotionHasOptimisedAnimation) === null || h === void 0
          ? void 0
          : h.call(window, B))
    );
  return (
    Xv(() => {
      D &&
        ((U.current = !0),
        (window.MotionIsMounted = !0),
        D.updateFeatures(),
        $o.render(D.render),
        j.current && D.animationState && D.animationState.animateChanges());
    }),
    tt.useEffect(() => {
      D &&
        (!j.current && D.animationState && D.animationState.animateChanges(),
        j.current &&
          (queueMicrotask(() => {
            var H;
            (H = window.MotionHandoffMarkAsComplete) === null ||
              H === void 0 ||
              H.call(window, B);
          }),
          (j.current = !1)));
    }),
    D
  );
}
function a1(a, l, u, r) {
  const {
    layoutId: c,
    layout: d,
    drag: h,
    dragConstraints: p,
    layoutScroll: m,
    layoutRoot: y,
  } = l;
  (a.projection = new u(
    a.latestValues,
    l["data-framer-portal-id"] ? void 0 : Xy(a.parent)
  )),
    a.projection.setOptions({
      layoutId: c,
      layout: d,
      alwaysMeasureLayout: !!h || (p && $i(p)),
      visualElement: a,
      animationType: typeof d == "string" ? d : "both",
      initialPromotionConfig: r,
      layoutScroll: m,
      layoutRoot: y,
    });
}
function Xy(a) {
  if (a) return a.options.allowProjection !== !1 ? a.projection : Xy(a.parent);
}
function l1({
  preloadedFeatures: a,
  createVisualElement: l,
  useRender: u,
  useVisualState: r,
  Component: c,
}) {
  var d, h;
  a && Jv(a);
  function p(y, v) {
    let T;
    const D = { ...tt.useContext(Ny), ...y, layoutId: s1(y) },
      { isStatic: O } = D,
      U = Iv(y),
      B = r(y, O);
    if (!O && Po) {
      u1();
      const j = r1(D);
      (T = j.MeasureLayout),
        (U.visualElement = i1(c, B, D, l, j.ProjectionNode));
    }
    return Bt.jsxs($s.Provider, {
      value: U,
      children: [
        T && U.visualElement
          ? Bt.jsx(T, { visualElement: U.visualElement, ...D })
          : null,
        u(c, y, e1(B, U.visualElement, v), B, O, U.visualElement),
      ],
    });
  }
  p.displayName = `motion.${
    typeof c == "string"
      ? c
      : `create(${
          (h = (d = c.displayName) !== null && d !== void 0 ? d : c.name) !==
            null && h !== void 0
            ? h
            : ""
        })`
  }`;
  const m = tt.forwardRef(p);
  return (m[t1] = c), m;
}
function s1({ layoutId: a }) {
  const l = tt.useContext(By).id;
  return l && a !== void 0 ? l + "-" + a : a;
}
function u1(a, l) {
  tt.useContext(jy).strict;
}
function r1(a) {
  const { drag: l, layout: u } = aa;
  if (!l && !u) return {};
  const r = { ...l, ...u };
  return {
    MeasureLayout:
      (l != null && l.isEnabled(a)) || (u != null && u.isEnabled(a))
        ? r.MeasureLayout
        : void 0,
    ProjectionNode: r.ProjectionNode,
  };
}
const Qy = (a) => (l) => typeof l == "string" && l.startsWith(a),
  Io = Qy("--"),
  o1 = Qy("var(--"),
  tc = (a) => (o1(a) ? c1.test(a.split("/*")[0].trim()) : !1),
  c1 =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
  yl = {};
function f1(a) {
  for (const l in a) (yl[l] = a[l]), Io(l) && (yl[l].isCSSVariable = !0);
}
const ua = [
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
  yi = new Set(ua);
function Zy(a, { layout: l, layoutId: u }) {
  return (
    yi.has(a) ||
    a.startsWith("origin") ||
    ((l || u !== void 0) && (!!yl[a] || a === "opacity"))
  );
}
const te = (a) => !!(a && a.getVelocity),
  Ky = (a, l) => (l && typeof a == "number" ? l.transform(a) : a),
  mn = (a, l, u) => (u > l ? l : u < a ? a : u),
  ra = {
    test: (a) => typeof a == "number",
    parse: parseFloat,
    transform: (a) => a,
  },
  pl = { ...ra, transform: (a) => mn(0, 1, a) },
  qs = { ...ra, default: 1 },
  bl = (a) => ({
    test: (l) =>
      typeof l == "string" && l.endsWith(a) && l.split(" ").length === 1,
    parse: parseFloat,
    transform: (l) => `${l}${a}`,
  }),
  wn = bl("deg"),
  Ke = bl("%"),
  W = bl("px"),
  h1 = bl("vh"),
  d1 = bl("vw"),
  Am = {
    ...Ke,
    parse: (a) => Ke.parse(a) / 100,
    transform: (a) => Ke.transform(a * 100),
  },
  m1 = {
    borderWidth: W,
    borderTopWidth: W,
    borderRightWidth: W,
    borderBottomWidth: W,
    borderLeftWidth: W,
    borderRadius: W,
    radius: W,
    borderTopLeftRadius: W,
    borderTopRightRadius: W,
    borderBottomRightRadius: W,
    borderBottomLeftRadius: W,
    width: W,
    maxWidth: W,
    height: W,
    maxHeight: W,
    top: W,
    right: W,
    bottom: W,
    left: W,
    padding: W,
    paddingTop: W,
    paddingRight: W,
    paddingBottom: W,
    paddingLeft: W,
    margin: W,
    marginTop: W,
    marginRight: W,
    marginBottom: W,
    marginLeft: W,
    backgroundPositionX: W,
    backgroundPositionY: W,
  },
  y1 = {
    rotate: wn,
    rotateX: wn,
    rotateY: wn,
    rotateZ: wn,
    scale: qs,
    scaleX: qs,
    scaleY: qs,
    scaleZ: qs,
    skew: wn,
    skewX: wn,
    skewY: wn,
    distance: W,
    translateX: W,
    translateY: W,
    translateZ: W,
    x: W,
    y: W,
    z: W,
    perspective: W,
    transformPerspective: W,
    opacity: pl,
    originX: Am,
    originY: Am,
    originZ: W,
  },
  Em = { ...ra, transform: Math.round },
  ec = {
    ...m1,
    ...y1,
    zIndex: Em,
    size: W,
    fillOpacity: pl,
    strokeOpacity: pl,
    numOctaves: Em,
  },
  p1 = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  g1 = ua.length;
function v1(a, l, u) {
  let r = "",
    c = !0;
  for (let d = 0; d < g1; d++) {
    const h = ua[d],
      p = a[h];
    if (p === void 0) continue;
    let m = !0;
    if (
      (typeof p == "number"
        ? (m = p === (h.startsWith("scale") ? 1 : 0))
        : (m = parseFloat(p) === 0),
      !m || u)
    ) {
      const y = Ky(p, ec[h]);
      if (!m) {
        c = !1;
        const v = p1[h] || h;
        r += `${v}(${y}) `;
      }
      u && (l[h] = y);
    }
  }
  return (r = r.trim()), u ? (r = u(l, c ? "" : r)) : c && (r = "none"), r;
}
function nc(a, l, u) {
  const { style: r, vars: c, transformOrigin: d } = a;
  let h = !1,
    p = !1;
  for (const m in l) {
    const y = l[m];
    if (yi.has(m)) {
      h = !0;
      continue;
    } else if (Io(m)) {
      c[m] = y;
      continue;
    } else {
      const v = Ky(y, ec[m]);
      m.startsWith("origin") ? ((p = !0), (d[m] = v)) : (r[m] = v);
    }
  }
  if (
    (l.transform ||
      (h || u
        ? (r.transform = v1(l, a.transform, u))
        : r.transform && (r.transform = "none")),
    p)
  ) {
    const { originX: m = "50%", originY: y = "50%", originZ: v = 0 } = d;
    r.transformOrigin = `${m} ${y} ${v}`;
  }
}
const ic = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function Jy(a, l, u) {
  for (const r in l) !te(l[r]) && !Zy(r, u) && (a[r] = l[r]);
}
function S1({ transformTemplate: a }, l) {
  return tt.useMemo(() => {
    const u = ic();
    return nc(u, l, a), Object.assign({}, u.vars, u.style);
  }, [l]);
}
function T1(a, l) {
  const u = a.style || {},
    r = {};
  return Jy(r, u, a), Object.assign(r, S1(a, l)), r;
}
function b1(a, l) {
  const u = {},
    r = T1(a, l);
  return (
    a.drag &&
      a.dragListener !== !1 &&
      ((u.draggable = !1),
      (r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none"),
      (r.touchAction =
        a.drag === !0 ? "none" : `pan-${a.drag === "x" ? "y" : "x"}`)),
    a.tabIndex === void 0 &&
      (a.onTap || a.onTapStart || a.whileTap) &&
      (u.tabIndex = 0),
    (u.style = r),
    u
  );
}
const A1 = [
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
function ac(a) {
  return typeof a != "string" || a.includes("-")
    ? !1
    : !!(A1.indexOf(a) > -1 || /[A-Z]/u.test(a));
}
const E1 = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  D1 = { offset: "strokeDashoffset", array: "strokeDasharray" };
function M1(a, l, u = 1, r = 0, c = !0) {
  a.pathLength = 1;
  const d = c ? E1 : D1;
  a[d.offset] = W.transform(-r);
  const h = W.transform(l),
    p = W.transform(u);
  a[d.array] = `${h} ${p}`;
}
function Dm(a, l, u) {
  return typeof a == "string" ? a : W.transform(l + u * a);
}
function x1(a, l, u) {
  const r = Dm(l, a.x, a.width),
    c = Dm(u, a.y, a.height);
  return `${r} ${c}`;
}
function lc(
  a,
  {
    attrX: l,
    attrY: u,
    attrScale: r,
    originX: c,
    originY: d,
    pathLength: h,
    pathSpacing: p = 1,
    pathOffset: m = 0,
    ...y
  },
  v,
  T
) {
  if ((nc(a, y, T), v)) {
    a.style.viewBox && (a.attrs.viewBox = a.style.viewBox);
    return;
  }
  (a.attrs = a.style), (a.style = {});
  const { attrs: D, style: O, dimensions: U } = a;
  D.transform && (U && (O.transform = D.transform), delete D.transform),
    U &&
      (c !== void 0 || d !== void 0 || O.transform) &&
      (O.transformOrigin = x1(
        U,
        c !== void 0 ? c : 0.5,
        d !== void 0 ? d : 0.5
      )),
    l !== void 0 && (D.x = l),
    u !== void 0 && (D.y = u),
    r !== void 0 && (D.scale = r),
    h !== void 0 && M1(D, h, p, m, !1);
}
const Py = () => ({ ...ic(), attrs: {} }),
  sc = (a) => typeof a == "string" && a.toLowerCase() === "svg";
function R1(a, l, u, r) {
  const c = tt.useMemo(() => {
    const d = Py();
    return (
      lc(d, l, sc(r), a.transformTemplate),
      { ...d.attrs, style: { ...d.style } }
    );
  }, [l]);
  if (a.style) {
    const d = {};
    Jy(d, a.style, a), (c.style = { ...d, ...c.style });
  }
  return c;
}
function O1(a = !1) {
  return (u, r, c, { latestValues: d }, h) => {
    const m = (ac(u) ? R1 : b1)(r, d, h, u),
      y = Fv(r, typeof u == "string", a),
      v = u !== tt.Fragment ? { ...y, ...m, ref: c } : {},
      { children: T } = r,
      D = tt.useMemo(() => (te(T) ? T.get() : T), [T]);
    return tt.createElement(u, { ...v, children: D });
  };
}
function Mm(a) {
  const l = [{}, {}];
  return (
    a == null ||
      a.values.forEach((u, r) => {
        (l[0][r] = u.get()), (l[1][r] = u.getVelocity());
      }),
    l
  );
}
function uc(a, l, u, r) {
  if (typeof l == "function") {
    const [c, d] = Mm(r);
    l = l(u !== void 0 ? u : a.custom, c, d);
  }
  if (
    (typeof l == "string" && (l = a.variants && a.variants[l]),
    typeof l == "function")
  ) {
    const [c, d] = Mm(r);
    l = l(u !== void 0 ? u : a.custom, c, d);
  }
  return l;
}
const Co = (a) => Array.isArray(a),
  V1 = (a) => !!(a && typeof a == "object" && a.mix && a.toValue),
  C1 = (a) => (Co(a) ? a[a.length - 1] || 0 : a);
function Gs(a) {
  const l = te(a) ? a.get() : a;
  return V1(l) ? l.toValue() : l;
}
function z1(
  { scrapeMotionValuesFromProps: a, createRenderState: l, onUpdate: u },
  r,
  c,
  d
) {
  const h = { latestValues: _1(r, c, d, a), renderState: l() };
  return (
    u &&
      ((h.onMount = (p) => u({ props: r, current: p, ...h })),
      (h.onUpdate = (p) => u(p))),
    h
  );
}
const ky = (a) => (l, u) => {
  const r = tt.useContext($s),
    c = tt.useContext(Jo),
    d = () => z1(a, l, r, c);
  return u ? d() : Yv(d);
};
function _1(a, l, u, r) {
  const c = {},
    d = r(a, {});
  for (const D in d) c[D] = Gs(d[D]);
  let { initial: h, animate: p } = a;
  const m = tu(a),
    y = qy(a);
  l &&
    y &&
    !m &&
    a.inherit !== !1 &&
    (h === void 0 && (h = l.initial), p === void 0 && (p = l.animate));
  let v = u ? u.initial === !1 : !1;
  v = v || h === !1;
  const T = v ? p : h;
  if (T && typeof T != "boolean" && !Is(T)) {
    const D = Array.isArray(T) ? T : [T];
    for (let O = 0; O < D.length; O++) {
      const U = uc(a, D[O]);
      if (U) {
        const { transitionEnd: B, transition: j, ...H } = U;
        for (const q in H) {
          let Q = H[q];
          if (Array.isArray(Q)) {
            const ot = v ? Q.length - 1 : 0;
            Q = Q[ot];
          }
          Q !== null && (c[q] = Q);
        }
        for (const q in B) c[q] = B[q];
      }
    }
  }
  return c;
}
function rc(a, l, u) {
  var r;
  const { style: c } = a,
    d = {};
  for (const h in c)
    (te(c[h]) ||
      (l.style && te(l.style[h])) ||
      Zy(h, a) ||
      ((r = u == null ? void 0 : u.getValue(h)) === null || r === void 0
        ? void 0
        : r.liveStyle) !== void 0) &&
      (d[h] = c[h]);
  return d;
}
const U1 = {
  useVisualState: ky({
    scrapeMotionValuesFromProps: rc,
    createRenderState: ic,
  }),
};
function Fy(a, l) {
  try {
    l.dimensions =
      typeof a.getBBox == "function" ? a.getBBox() : a.getBoundingClientRect();
  } catch {
    l.dimensions = { x: 0, y: 0, width: 0, height: 0 };
  }
}
function Wy(a, { style: l, vars: u }, r, c) {
  Object.assign(a.style, l, c && c.getProjectionStyles(r));
  for (const d in u) a.style.setProperty(d, u[d]);
}
const $y = new Set([
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
function Iy(a, l, u, r) {
  Wy(a, l, void 0, r);
  for (const c in l.attrs) a.setAttribute($y.has(c) ? c : Wo(c), l.attrs[c]);
}
function tp(a, l, u) {
  const r = rc(a, l, u);
  for (const c in a)
    if (te(a[c]) || te(l[c])) {
      const d =
        ua.indexOf(c) !== -1
          ? "attr" + c.charAt(0).toUpperCase() + c.substring(1)
          : c;
      r[d] = a[c];
    }
  return r;
}
const xm = ["x", "y", "width", "height", "cx", "cy", "r"],
  B1 = {
    useVisualState: ky({
      scrapeMotionValuesFromProps: tp,
      createRenderState: Py,
      onUpdate: ({
        props: a,
        prevProps: l,
        current: u,
        renderState: r,
        latestValues: c,
      }) => {
        if (!u) return;
        let d = !!a.drag;
        if (!d) {
          for (const p in c)
            if (yi.has(p)) {
              d = !0;
              break;
            }
        }
        if (!d) return;
        let h = !l;
        if (l)
          for (let p = 0; p < xm.length; p++) {
            const m = xm[p];
            a[m] !== l[m] && (h = !0);
          }
        h &&
          Et.read(() => {
            Fy(u, r),
              Et.render(() => {
                lc(r, c, sc(u.tagName), a.transformTemplate), Iy(u, r);
              });
          });
      },
    }),
  };
function N1(a, l) {
  return function (r, { forwardMotionProps: c } = { forwardMotionProps: !1 }) {
    const h = {
      ...(ac(r) ? B1 : U1),
      preloadedFeatures: a,
      useRender: O1(c),
      createVisualElement: l,
      Component: r,
    };
    return l1(h);
  };
}
function gl(a, l, u) {
  const r = a.getProps();
  return uc(r, l, u !== void 0 ? u : r.custom, a);
}
function oc(a, l) {
  return a ? a[l] || a.default || a : void 0;
}
const ep = new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...ua,
]);
let Xs;
function H1() {
  Xs = void 0;
}
const Je = {
  now: () => (
    Xs === void 0 &&
      Je.set(
        kt.isProcessing || Qv.useManualTiming ? kt.timestamp : performance.now()
      ),
    Xs
  ),
  set: (a) => {
    (Xs = a), queueMicrotask(H1);
  },
};
function cc(a, l) {
  a.indexOf(l) === -1 && a.push(l);
}
function fc(a, l) {
  const u = a.indexOf(l);
  u > -1 && a.splice(u, 1);
}
class hc {
  constructor() {
    this.subscriptions = [];
  }
  add(l) {
    return cc(this.subscriptions, l), () => fc(this.subscriptions, l);
  }
  notify(l, u, r) {
    const c = this.subscriptions.length;
    if (c)
      if (c === 1) this.subscriptions[0](l, u, r);
      else
        for (let d = 0; d < c; d++) {
          const h = this.subscriptions[d];
          h && h(l, u, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
function np(a, l) {
  return l ? a * (1e3 / l) : 0;
}
const Rm = 30,
  L1 = (a) => !isNaN(parseFloat(a));
class j1 {
  constructor(l, u = {}) {
    (this.version = "12.4.7"),
      (this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (r, c = !0) => {
        const d = Je.now();
        this.updatedAt !== d && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(r),
          this.current !== this.prev &&
            this.events.change &&
            this.events.change.notify(this.current),
          c &&
            this.events.renderRequest &&
            this.events.renderRequest.notify(this.current);
      }),
      (this.hasAnimated = !1),
      this.setCurrent(l),
      (this.owner = u.owner);
  }
  setCurrent(l) {
    (this.current = l),
      (this.updatedAt = Je.now()),
      this.canTrackVelocity === null &&
        l !== void 0 &&
        (this.canTrackVelocity = L1(this.current));
  }
  setPrevFrameValue(l = this.current) {
    (this.prevFrameValue = l), (this.prevUpdatedAt = this.updatedAt);
  }
  onChange(l) {
    return this.on("change", l);
  }
  on(l, u) {
    this.events[l] || (this.events[l] = new hc());
    const r = this.events[l].add(u);
    return l === "change"
      ? () => {
          r(),
            Et.read(() => {
              this.events.change.getSize() || this.stop();
            });
        }
      : r;
  }
  clearListeners() {
    for (const l in this.events) this.events[l].clear();
  }
  attach(l, u) {
    (this.passiveEffect = l), (this.stopPassiveEffect = u);
  }
  set(l, u = !0) {
    !u || !this.passiveEffect
      ? this.updateAndNotify(l, u)
      : this.passiveEffect(l, this.updateAndNotify);
  }
  setWithVelocity(l, u, r) {
    this.set(u),
      (this.prev = void 0),
      (this.prevFrameValue = l),
      (this.prevUpdatedAt = this.updatedAt - r);
  }
  jump(l, u = !0) {
    this.updateAndNotify(l),
      (this.prev = l),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      u && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const l = Je.now();
    if (
      !this.canTrackVelocity ||
      this.prevFrameValue === void 0 ||
      l - this.updatedAt > Rm
    )
      return 0;
    const u = Math.min(this.updatedAt - this.prevUpdatedAt, Rm);
    return np(parseFloat(this.current) - parseFloat(this.prevFrameValue), u);
  }
  start(l) {
    return (
      this.stop(),
      new Promise((u) => {
        (this.hasAnimated = !0),
          (this.animation = l(u)),
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
function vl(a, l) {
  return new j1(a, l);
}
function w1(a, l, u) {
  a.hasValue(l) ? a.getValue(l).set(u) : a.addValue(l, vl(u));
}
function q1(a, l) {
  const u = gl(a, l);
  let { transitionEnd: r = {}, transition: c = {}, ...d } = u || {};
  d = { ...d, ...r };
  for (const h in d) {
    const p = C1(d[h]);
    w1(a, h, p);
  }
}
function Y1(a) {
  return !!(te(a) && a.add);
}
function zo(a, l) {
  const u = a.getValue("willChange");
  if (Y1(u)) return u.add(l);
}
function ip(a) {
  return a.props[Yy];
}
function dc(a) {
  let l;
  return () => (l === void 0 && (l = a()), l);
}
const G1 = dc(() => window.ScrollTimeline !== void 0);
class X1 {
  constructor(l) {
    (this.stop = () => this.runAll("stop")),
      (this.animations = l.filter(Boolean));
  }
  get finished() {
    return Promise.all(
      this.animations.map((l) => ("finished" in l ? l.finished : l))
    );
  }
  getAll(l) {
    return this.animations[0][l];
  }
  setAll(l, u) {
    for (let r = 0; r < this.animations.length; r++) this.animations[r][l] = u;
  }
  attachTimeline(l, u) {
    const r = this.animations.map((c) => {
      if (G1() && c.attachTimeline) return c.attachTimeline(l);
      if (typeof u == "function") return u(c);
    });
    return () => {
      r.forEach((c, d) => {
        c && c(), this.animations[d].stop();
      });
    };
  }
  get time() {
    return this.getAll("time");
  }
  set time(l) {
    this.setAll("time", l);
  }
  get speed() {
    return this.getAll("speed");
  }
  set speed(l) {
    this.setAll("speed", l);
  }
  get startTime() {
    return this.getAll("startTime");
  }
  get duration() {
    let l = 0;
    for (let u = 0; u < this.animations.length; u++)
      l = Math.max(l, this.animations[u].duration);
    return l;
  }
  runAll(l) {
    this.animations.forEach((u) => u[l]());
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
class Q1 extends X1 {
  then(l, u) {
    return Promise.all(this.animations).then(l).catch(u);
  }
}
const hn = (a) => a * 1e3,
  dn = (a) => a / 1e3;
function mc(a) {
  return typeof a == "function";
}
function Om(a, l) {
  (a.timeline = l), (a.onfinish = null);
}
const yc = (a) => Array.isArray(a) && typeof a[0] == "number",
  Z1 = { linearEasing: void 0 };
function K1(a, l) {
  const u = dc(a);
  return () => {
    var r;
    return (r = Z1[l]) !== null && r !== void 0 ? r : u();
  };
}
const Ks = K1(() => {
    try {
      document
        .createElement("div")
        .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
    } catch {
      return !1;
    }
    return !0;
  }, "linearEasing"),
  la = (a, l, u) => {
    const r = l - a;
    return r === 0 ? 1 : (u - a) / r;
  },
  ap = (a, l, u = 10) => {
    let r = "";
    const c = Math.max(Math.round(l / u), 2);
    for (let d = 0; d < c; d++) r += a(la(0, c - 1, d)) + ", ";
    return `linear(${r.substring(0, r.length - 2)})`;
  };
function lp(a) {
  return !!(
    (typeof a == "function" && Ks()) ||
    !a ||
    (typeof a == "string" && (a in _o || Ks())) ||
    yc(a) ||
    (Array.isArray(a) && a.every(lp))
  );
}
const ol = ([a, l, u, r]) => `cubic-bezier(${a}, ${l}, ${u}, ${r})`,
  _o = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: ol([0, 0.65, 0.55, 1]),
    circOut: ol([0.55, 0, 1, 0.45]),
    backIn: ol([0.31, 0.01, 0.66, -0.59]),
    backOut: ol([0.33, 1.53, 0.69, 0.99]),
  };
function sp(a, l) {
  if (a)
    return typeof a == "function" && Ks()
      ? ap(a, l)
      : yc(a)
      ? ol(a)
      : Array.isArray(a)
      ? a.map((u) => sp(u, l) || _o.easeOut)
      : _o[a];
}
const up = (a, l, u) =>
    (((1 - 3 * u + 3 * l) * a + (3 * u - 6 * l)) * a + 3 * l) * a,
  J1 = 1e-7,
  P1 = 12;
function k1(a, l, u, r, c) {
  let d,
    h,
    p = 0;
  do (h = l + (u - l) / 2), (d = up(h, r, c) - a), d > 0 ? (u = h) : (l = h);
  while (Math.abs(d) > J1 && ++p < P1);
  return h;
}
function Al(a, l, u, r) {
  if (a === l && u === r) return pe;
  const c = (d) => k1(d, 0, 1, a, u);
  return (d) => (d === 0 || d === 1 ? d : up(c(d), l, r));
}
const rp = (a) => (l) => l <= 0.5 ? a(2 * l) / 2 : (2 - a(2 * (1 - l))) / 2,
  op = (a) => (l) => 1 - a(1 - l),
  cp = Al(0.33, 1.53, 0.69, 0.99),
  pc = op(cp),
  fp = rp(pc),
  hp = (a) =>
    (a *= 2) < 1 ? 0.5 * pc(a) : 0.5 * (2 - Math.pow(2, -10 * (a - 1))),
  gc = (a) => 1 - Math.sin(Math.acos(a)),
  dp = op(gc),
  mp = rp(gc),
  yp = (a) => /^0[^.\s]+$/u.test(a);
function F1(a) {
  return typeof a == "number"
    ? a === 0
    : a !== null
    ? a === "none" || a === "0" || yp(a)
    : !0;
}
const fl = (a) => Math.round(a * 1e5) / 1e5,
  vc = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function W1(a) {
  return a == null;
}
const $1 =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  Sc = (a, l) => (u) =>
    !!(
      (typeof u == "string" && $1.test(u) && u.startsWith(a)) ||
      (l && !W1(u) && Object.prototype.hasOwnProperty.call(u, l))
    ),
  pp = (a, l, u) => (r) => {
    if (typeof r != "string") return r;
    const [c, d, h, p] = r.match(vc);
    return {
      [a]: parseFloat(c),
      [l]: parseFloat(d),
      [u]: parseFloat(h),
      alpha: p !== void 0 ? parseFloat(p) : 1,
    };
  },
  I1 = (a) => mn(0, 255, a),
  So = { ...ra, transform: (a) => Math.round(I1(a)) },
  di = {
    test: Sc("rgb", "red"),
    parse: pp("red", "green", "blue"),
    transform: ({ red: a, green: l, blue: u, alpha: r = 1 }) =>
      "rgba(" +
      So.transform(a) +
      ", " +
      So.transform(l) +
      ", " +
      So.transform(u) +
      ", " +
      fl(pl.transform(r)) +
      ")",
  };
function tS(a) {
  let l = "",
    u = "",
    r = "",
    c = "";
  return (
    a.length > 5
      ? ((l = a.substring(1, 3)),
        (u = a.substring(3, 5)),
        (r = a.substring(5, 7)),
        (c = a.substring(7, 9)))
      : ((l = a.substring(1, 2)),
        (u = a.substring(2, 3)),
        (r = a.substring(3, 4)),
        (c = a.substring(4, 5)),
        (l += l),
        (u += u),
        (r += r),
        (c += c)),
    {
      red: parseInt(l, 16),
      green: parseInt(u, 16),
      blue: parseInt(r, 16),
      alpha: c ? parseInt(c, 16) / 255 : 1,
    }
  );
}
const Uo = { test: Sc("#"), parse: tS, transform: di.transform },
  Ii = {
    test: Sc("hsl", "hue"),
    parse: pp("hue", "saturation", "lightness"),
    transform: ({ hue: a, saturation: l, lightness: u, alpha: r = 1 }) =>
      "hsla(" +
      Math.round(a) +
      ", " +
      Ke.transform(fl(l)) +
      ", " +
      Ke.transform(fl(u)) +
      ", " +
      fl(pl.transform(r)) +
      ")",
  },
  It = {
    test: (a) => di.test(a) || Uo.test(a) || Ii.test(a),
    parse: (a) =>
      di.test(a) ? di.parse(a) : Ii.test(a) ? Ii.parse(a) : Uo.parse(a),
    transform: (a) =>
      typeof a == "string"
        ? a
        : a.hasOwnProperty("red")
        ? di.transform(a)
        : Ii.transform(a),
  },
  eS =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function nS(a) {
  var l, u;
  return (
    isNaN(a) &&
    typeof a == "string" &&
    (((l = a.match(vc)) === null || l === void 0 ? void 0 : l.length) || 0) +
      (((u = a.match(eS)) === null || u === void 0 ? void 0 : u.length) || 0) >
      0
  );
}
const gp = "number",
  vp = "color",
  iS = "var",
  aS = "var(",
  Vm = "${}",
  lS =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Sl(a) {
  const l = a.toString(),
    u = [],
    r = { color: [], number: [], var: [] },
    c = [];
  let d = 0;
  const p = l
    .replace(
      lS,
      (m) => (
        It.test(m)
          ? (r.color.push(d), c.push(vp), u.push(It.parse(m)))
          : m.startsWith(aS)
          ? (r.var.push(d), c.push(iS), u.push(m))
          : (r.number.push(d), c.push(gp), u.push(parseFloat(m))),
        ++d,
        Vm
      )
    )
    .split(Vm);
  return { values: u, split: p, indexes: r, types: c };
}
function Sp(a) {
  return Sl(a).values;
}
function Tp(a) {
  const { split: l, types: u } = Sl(a),
    r = l.length;
  return (c) => {
    let d = "";
    for (let h = 0; h < r; h++)
      if (((d += l[h]), c[h] !== void 0)) {
        const p = u[h];
        p === gp
          ? (d += fl(c[h]))
          : p === vp
          ? (d += It.transform(c[h]))
          : (d += c[h]);
      }
    return d;
  };
}
const sS = (a) => (typeof a == "number" ? 0 : a);
function uS(a) {
  const l = Sp(a);
  return Tp(a)(l.map(sS));
}
const Yn = {
    test: nS,
    parse: Sp,
    createTransformer: Tp,
    getAnimatableNone: uS,
  },
  rS = new Set(["brightness", "contrast", "saturate", "opacity"]);
function oS(a) {
  const [l, u] = a.slice(0, -1).split("(");
  if (l === "drop-shadow") return a;
  const [r] = u.match(vc) || [];
  if (!r) return a;
  const c = u.replace(r, "");
  let d = rS.has(l) ? 1 : 0;
  return r !== u && (d *= 100), l + "(" + d + c + ")";
}
const cS = /\b([a-z-]*)\(.*?\)/gu,
  Bo = {
    ...Yn,
    getAnimatableNone: (a) => {
      const l = a.match(cS);
      return l ? l.map(oS).join(" ") : a;
    },
  },
  fS = {
    ...ec,
    color: It,
    backgroundColor: It,
    outlineColor: It,
    fill: It,
    stroke: It,
    borderColor: It,
    borderTopColor: It,
    borderRightColor: It,
    borderBottomColor: It,
    borderLeftColor: It,
    filter: Bo,
    WebkitFilter: Bo,
  },
  Tc = (a) => fS[a];
function bp(a, l) {
  let u = Tc(a);
  return (
    u !== Bo && (u = Yn), u.getAnimatableNone ? u.getAnimatableNone(l) : void 0
  );
}
const hS = new Set(["auto", "none", "0"]);
function dS(a, l, u) {
  let r = 0,
    c;
  for (; r < a.length && !c; ) {
    const d = a[r];
    typeof d == "string" && !hS.has(d) && Sl(d).values.length && (c = a[r]),
      r++;
  }
  if (c && u) for (const d of l) a[d] = bp(u, c);
}
const Cm = (a) => a === ra || a === W,
  zm = (a, l) => parseFloat(a.split(", ")[l]),
  _m =
    (a, l) =>
    (u, { transform: r }) => {
      if (r === "none" || !r) return 0;
      const c = r.match(/^matrix3d\((.+)\)$/u);
      if (c) return zm(c[1], l);
      {
        const d = r.match(/^matrix\((.+)\)$/u);
        return d ? zm(d[1], a) : 0;
      }
    },
  mS = new Set(["x", "y", "z"]),
  yS = ua.filter((a) => !mS.has(a));
function pS(a) {
  const l = [];
  return (
    yS.forEach((u) => {
      const r = a.getValue(u);
      r !== void 0 &&
        (l.push([u, r.get()]), r.set(u.startsWith("scale") ? 1 : 0));
    }),
    l
  );
}
const sa = {
  width: ({ x: a }, { paddingLeft: l = "0", paddingRight: u = "0" }) =>
    a.max - a.min - parseFloat(l) - parseFloat(u),
  height: ({ y: a }, { paddingTop: l = "0", paddingBottom: u = "0" }) =>
    a.max - a.min - parseFloat(l) - parseFloat(u),
  top: (a, { top: l }) => parseFloat(l),
  left: (a, { left: l }) => parseFloat(l),
  bottom: ({ y: a }, { top: l }) => parseFloat(l) + (a.max - a.min),
  right: ({ x: a }, { left: l }) => parseFloat(l) + (a.max - a.min),
  x: _m(4, 13),
  y: _m(5, 14),
};
sa.translateX = sa.x;
sa.translateY = sa.y;
const mi = new Set();
let No = !1,
  Ho = !1;
function Ap() {
  if (Ho) {
    const a = Array.from(mi).filter((r) => r.needsMeasurement),
      l = new Set(a.map((r) => r.element)),
      u = new Map();
    l.forEach((r) => {
      const c = pS(r);
      c.length && (u.set(r, c), r.render());
    }),
      a.forEach((r) => r.measureInitialState()),
      l.forEach((r) => {
        r.render();
        const c = u.get(r);
        c &&
          c.forEach(([d, h]) => {
            var p;
            (p = r.getValue(d)) === null || p === void 0 || p.set(h);
          });
      }),
      a.forEach((r) => r.measureEndState()),
      a.forEach((r) => {
        r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY);
      });
  }
  (Ho = !1), (No = !1), mi.forEach((a) => a.complete()), mi.clear();
}
function Ep() {
  mi.forEach((a) => {
    a.readKeyframes(), a.needsMeasurement && (Ho = !0);
  });
}
function gS() {
  Ep(), Ap();
}
class bc {
  constructor(l, u, r, c, d, h = !1) {
    (this.isComplete = !1),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.isScheduled = !1),
      (this.unresolvedKeyframes = [...l]),
      (this.onComplete = u),
      (this.name = r),
      (this.motionValue = c),
      (this.element = d),
      (this.isAsync = h);
  }
  scheduleResolve() {
    (this.isScheduled = !0),
      this.isAsync
        ? (mi.add(this),
          No || ((No = !0), Et.read(Ep), Et.resolveKeyframes(Ap)))
        : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: l,
      name: u,
      element: r,
      motionValue: c,
    } = this;
    for (let d = 0; d < l.length; d++)
      if (l[d] === null)
        if (d === 0) {
          const h = c == null ? void 0 : c.get(),
            p = l[l.length - 1];
          if (h !== void 0) l[0] = h;
          else if (r && u) {
            const m = r.readValue(u, p);
            m != null && (l[0] = m);
          }
          l[0] === void 0 && (l[0] = p), c && h === void 0 && c.set(l[0]);
        } else l[d] = l[d - 1];
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete() {
    (this.isComplete = !0),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
      mi.delete(this);
  }
  cancel() {
    this.isComplete || ((this.isScheduled = !1), mi.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
}
const Dp = (a) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(a),
  vS = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function SS(a) {
  const l = vS.exec(a);
  if (!l) return [,];
  const [, u, r, c] = l;
  return [`--${u ?? r}`, c];
}
function Mp(a, l, u = 1) {
  const [r, c] = SS(a);
  if (!r) return;
  const d = window.getComputedStyle(l).getPropertyValue(r);
  if (d) {
    const h = d.trim();
    return Dp(h) ? parseFloat(h) : h;
  }
  return tc(c) ? Mp(c, l, u + 1) : c;
}
const xp = (a) => (l) => l.test(a),
  TS = { test: (a) => a === "auto", parse: (a) => a },
  Rp = [ra, W, Ke, wn, d1, h1, TS],
  Um = (a) => Rp.find(xp(a));
class Op extends bc {
  constructor(l, u, r, c, d) {
    super(l, u, r, c, d, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: l, element: u, name: r } = this;
    if (!u || !u.current) return;
    super.readKeyframes();
    for (let m = 0; m < l.length; m++) {
      let y = l[m];
      if (typeof y == "string" && ((y = y.trim()), tc(y))) {
        const v = Mp(y, u.current);
        v !== void 0 && (l[m] = v),
          m === l.length - 1 && (this.finalKeyframe = y);
      }
    }
    if ((this.resolveNoneKeyframes(), !ep.has(r) || l.length !== 2)) return;
    const [c, d] = l,
      h = Um(c),
      p = Um(d);
    if (h !== p)
      if (Cm(h) && Cm(p))
        for (let m = 0; m < l.length; m++) {
          const y = l[m];
          typeof y == "string" && (l[m] = parseFloat(y));
        }
      else this.needsMeasurement = !0;
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: l, name: u } = this,
      r = [];
    for (let c = 0; c < l.length; c++) F1(l[c]) && r.push(c);
    r.length && dS(l, r, u);
  }
  measureInitialState() {
    const { element: l, unresolvedKeyframes: u, name: r } = this;
    if (!l || !l.current) return;
    r === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = sa[r](
        l.measureViewportBox(),
        window.getComputedStyle(l.current)
      )),
      (u[0] = this.measuredOrigin);
    const c = u[u.length - 1];
    c !== void 0 && l.getValue(r, c).jump(c, !1);
  }
  measureEndState() {
    var l;
    const { element: u, name: r, unresolvedKeyframes: c } = this;
    if (!u || !u.current) return;
    const d = u.getValue(r);
    d && d.jump(this.measuredOrigin, !1);
    const h = c.length - 1,
      p = c[h];
    (c[h] = sa[r](u.measureViewportBox(), window.getComputedStyle(u.current))),
      p !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = p),
      !((l = this.removedTransforms) === null || l === void 0) &&
        l.length &&
        this.removedTransforms.forEach(([m, y]) => {
          u.getValue(m).set(y);
        }),
      this.resolveNoneKeyframes();
  }
}
const Bm = (a, l) =>
  l === "zIndex"
    ? !1
    : !!(
        typeof a == "number" ||
        Array.isArray(a) ||
        (typeof a == "string" &&
          (Yn.test(a) || a === "0") &&
          !a.startsWith("url("))
      );
function bS(a) {
  const l = a[0];
  if (a.length === 1) return !0;
  for (let u = 0; u < a.length; u++) if (a[u] !== l) return !0;
}
function AS(a, l, u, r) {
  const c = a[0];
  if (c === null) return !1;
  if (l === "display" || l === "visibility") return !0;
  const d = a[a.length - 1],
    h = Bm(c, l),
    p = Bm(d, l);
  return !h || !p ? !1 : bS(a) || ((u === "spring" || mc(u)) && r);
}
const ES = (a) => a !== null;
function eu(a, { repeat: l, repeatType: u = "loop" }, r) {
  const c = a.filter(ES),
    d = l && u !== "loop" && l % 2 === 1 ? 0 : c.length - 1;
  return !d || r === void 0 ? c[d] : r;
}
const DS = 40;
class Vp {
  constructor({
    autoplay: l = !0,
    delay: u = 0,
    type: r = "keyframes",
    repeat: c = 0,
    repeatDelay: d = 0,
    repeatType: h = "loop",
    ...p
  }) {
    (this.isStopped = !1),
      (this.hasAttemptedResolve = !1),
      (this.createdAt = Je.now()),
      (this.options = {
        autoplay: l,
        delay: u,
        type: r,
        repeat: c,
        repeatDelay: d,
        repeatType: h,
        ...p,
      }),
      this.updateFinishedPromise();
  }
  calcStartTime() {
    return this.resolvedAt
      ? this.resolvedAt - this.createdAt > DS
        ? this.resolvedAt
        : this.createdAt
      : this.createdAt;
  }
  get resolved() {
    return !this._resolved && !this.hasAttemptedResolve && gS(), this._resolved;
  }
  onKeyframesResolved(l, u) {
    (this.resolvedAt = Je.now()), (this.hasAttemptedResolve = !0);
    const {
      name: r,
      type: c,
      velocity: d,
      delay: h,
      onComplete: p,
      onUpdate: m,
      isGenerator: y,
    } = this.options;
    if (!y && !AS(l, r, c, d))
      if (h) this.options.duration = 0;
      else {
        m && m(eu(l, this.options, u)), p && p(), this.resolveFinishedPromise();
        return;
      }
    const v = this.initPlayback(l, u);
    v !== !1 &&
      ((this._resolved = { keyframes: l, finalKeyframe: u, ...v }),
      this.onPostResolved());
  }
  onPostResolved() {}
  then(l, u) {
    return this.currentFinishedPromise.then(l, u);
  }
  flatten() {
    (this.options.type = "keyframes"), (this.options.ease = "linear");
  }
  updateFinishedPromise() {
    this.currentFinishedPromise = new Promise((l) => {
      this.resolveFinishedPromise = l;
    });
  }
}
const Lo = 2e4;
function Cp(a) {
  let l = 0;
  const u = 50;
  let r = a.next(l);
  for (; !r.done && l < Lo; ) (l += u), (r = a.next(l));
  return l >= Lo ? 1 / 0 : l;
}
const Rt = (a, l, u) => a + (l - a) * u;
function To(a, l, u) {
  return (
    u < 0 && (u += 1),
    u > 1 && (u -= 1),
    u < 1 / 6
      ? a + (l - a) * 6 * u
      : u < 1 / 2
      ? l
      : u < 2 / 3
      ? a + (l - a) * (2 / 3 - u) * 6
      : a
  );
}
function MS({ hue: a, saturation: l, lightness: u, alpha: r }) {
  (a /= 360), (l /= 100), (u /= 100);
  let c = 0,
    d = 0,
    h = 0;
  if (!l) c = d = h = u;
  else {
    const p = u < 0.5 ? u * (1 + l) : u + l - u * l,
      m = 2 * u - p;
    (c = To(m, p, a + 1 / 3)), (d = To(m, p, a)), (h = To(m, p, a - 1 / 3));
  }
  return {
    red: Math.round(c * 255),
    green: Math.round(d * 255),
    blue: Math.round(h * 255),
    alpha: r,
  };
}
function Js(a, l) {
  return (u) => (u > 0 ? l : a);
}
const bo = (a, l, u) => {
    const r = a * a,
      c = u * (l * l - r) + r;
    return c < 0 ? 0 : Math.sqrt(c);
  },
  xS = [Uo, di, Ii],
  RS = (a) => xS.find((l) => l.test(a));
function Nm(a) {
  const l = RS(a);
  if (!l) return !1;
  let u = l.parse(a);
  return l === Ii && (u = MS(u)), u;
}
const Hm = (a, l) => {
    const u = Nm(a),
      r = Nm(l);
    if (!u || !r) return Js(a, l);
    const c = { ...u };
    return (d) => (
      (c.red = bo(u.red, r.red, d)),
      (c.green = bo(u.green, r.green, d)),
      (c.blue = bo(u.blue, r.blue, d)),
      (c.alpha = Rt(u.alpha, r.alpha, d)),
      di.transform(c)
    );
  },
  OS = (a, l) => (u) => l(a(u)),
  El = (...a) => a.reduce(OS),
  jo = new Set(["none", "hidden"]);
function VS(a, l) {
  return jo.has(a) ? (u) => (u <= 0 ? a : l) : (u) => (u >= 1 ? l : a);
}
function CS(a, l) {
  return (u) => Rt(a, l, u);
}
function Ac(a) {
  return typeof a == "number"
    ? CS
    : typeof a == "string"
    ? tc(a)
      ? Js
      : It.test(a)
      ? Hm
      : US
    : Array.isArray(a)
    ? zp
    : typeof a == "object"
    ? It.test(a)
      ? Hm
      : zS
    : Js;
}
function zp(a, l) {
  const u = [...a],
    r = u.length,
    c = a.map((d, h) => Ac(d)(d, l[h]));
  return (d) => {
    for (let h = 0; h < r; h++) u[h] = c[h](d);
    return u;
  };
}
function zS(a, l) {
  const u = { ...a, ...l },
    r = {};
  for (const c in u)
    a[c] !== void 0 && l[c] !== void 0 && (r[c] = Ac(a[c])(a[c], l[c]));
  return (c) => {
    for (const d in r) u[d] = r[d](c);
    return u;
  };
}
function _S(a, l) {
  var u;
  const r = [],
    c = { color: 0, var: 0, number: 0 };
  for (let d = 0; d < l.values.length; d++) {
    const h = l.types[d],
      p = a.indexes[h][c[h]],
      m = (u = a.values[p]) !== null && u !== void 0 ? u : 0;
    (r[d] = m), c[h]++;
  }
  return r;
}
const US = (a, l) => {
  const u = Yn.createTransformer(l),
    r = Sl(a),
    c = Sl(l);
  return r.indexes.var.length === c.indexes.var.length &&
    r.indexes.color.length === c.indexes.color.length &&
    r.indexes.number.length >= c.indexes.number.length
    ? (jo.has(a) && !c.values.length) || (jo.has(l) && !r.values.length)
      ? VS(a, l)
      : El(zp(_S(r, c), c.values), u)
    : Js(a, l);
};
function _p(a, l, u) {
  return typeof a == "number" && typeof l == "number" && typeof u == "number"
    ? Rt(a, l, u)
    : Ac(a)(a, l);
}
const BS = 5;
function Up(a, l, u) {
  const r = Math.max(l - BS, 0);
  return np(u - a(r), l - r);
}
const zt = {
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
  Lm = 0.001;
function NS({
  duration: a = zt.duration,
  bounce: l = zt.bounce,
  velocity: u = zt.velocity,
  mass: r = zt.mass,
}) {
  let c,
    d,
    h = 1 - l;
  (h = mn(zt.minDamping, zt.maxDamping, h)),
    (a = mn(zt.minDuration, zt.maxDuration, dn(a))),
    h < 1
      ? ((c = (y) => {
          const v = y * h,
            T = v * a,
            D = v - u,
            O = wo(y, h),
            U = Math.exp(-T);
          return Lm - (D / O) * U;
        }),
        (d = (y) => {
          const T = y * h * a,
            D = T * u + u,
            O = Math.pow(h, 2) * Math.pow(y, 2) * a,
            U = Math.exp(-T),
            B = wo(Math.pow(y, 2), h);
          return ((-c(y) + Lm > 0 ? -1 : 1) * ((D - O) * U)) / B;
        }))
      : ((c = (y) => {
          const v = Math.exp(-y * a),
            T = (y - u) * a + 1;
          return -0.001 + v * T;
        }),
        (d = (y) => {
          const v = Math.exp(-y * a),
            T = (u - y) * (a * a);
          return v * T;
        }));
  const p = 5 / a,
    m = LS(c, d, p);
  if (((a = hn(a)), isNaN(m)))
    return { stiffness: zt.stiffness, damping: zt.damping, duration: a };
  {
    const y = Math.pow(m, 2) * r;
    return { stiffness: y, damping: h * 2 * Math.sqrt(r * y), duration: a };
  }
}
const HS = 12;
function LS(a, l, u) {
  let r = u;
  for (let c = 1; c < HS; c++) r = r - a(r) / l(r);
  return r;
}
function wo(a, l) {
  return a * Math.sqrt(1 - l * l);
}
const jS = ["duration", "bounce"],
  wS = ["stiffness", "damping", "mass"];
function jm(a, l) {
  return l.some((u) => a[u] !== void 0);
}
function qS(a) {
  let l = {
    velocity: zt.velocity,
    stiffness: zt.stiffness,
    damping: zt.damping,
    mass: zt.mass,
    isResolvedFromDuration: !1,
    ...a,
  };
  if (!jm(a, wS) && jm(a, jS))
    if (a.visualDuration) {
      const u = a.visualDuration,
        r = (2 * Math.PI) / (u * 1.2),
        c = r * r,
        d = 2 * mn(0.05, 1, 1 - (a.bounce || 0)) * Math.sqrt(c);
      l = { ...l, mass: zt.mass, stiffness: c, damping: d };
    } else {
      const u = NS(a);
      (l = { ...l, ...u, mass: zt.mass }), (l.isResolvedFromDuration = !0);
    }
  return l;
}
function Bp(a = zt.visualDuration, l = zt.bounce) {
  const u =
    typeof a != "object"
      ? { visualDuration: a, keyframes: [0, 1], bounce: l }
      : a;
  let { restSpeed: r, restDelta: c } = u;
  const d = u.keyframes[0],
    h = u.keyframes[u.keyframes.length - 1],
    p = { done: !1, value: d },
    {
      stiffness: m,
      damping: y,
      mass: v,
      duration: T,
      velocity: D,
      isResolvedFromDuration: O,
    } = qS({ ...u, velocity: -dn(u.velocity || 0) }),
    U = D || 0,
    B = y / (2 * Math.sqrt(m * v)),
    j = h - d,
    H = dn(Math.sqrt(m / v)),
    q = Math.abs(j) < 5;
  r || (r = q ? zt.restSpeed.granular : zt.restSpeed.default),
    c || (c = q ? zt.restDelta.granular : zt.restDelta.default);
  let Q;
  if (B < 1) {
    const L = wo(H, B);
    Q = (it) => {
      const Tt = Math.exp(-B * H * it);
      return (
        h -
        Tt * (((U + B * H * j) / L) * Math.sin(L * it) + j * Math.cos(L * it))
      );
    };
  } else if (B === 1) Q = (L) => h - Math.exp(-H * L) * (j + (U + H * j) * L);
  else {
    const L = H * Math.sqrt(B * B - 1);
    Q = (it) => {
      const Tt = Math.exp(-B * H * it),
        I = Math.min(L * it, 300);
      return (
        h - (Tt * ((U + B * H * j) * Math.sinh(I) + L * j * Math.cosh(I))) / L
      );
    };
  }
  const ot = {
    calculatedDuration: (O && T) || null,
    next: (L) => {
      const it = Q(L);
      if (O) p.done = L >= T;
      else {
        let Tt = 0;
        B < 1 && (Tt = L === 0 ? hn(U) : Up(Q, L, it));
        const I = Math.abs(Tt) <= r,
          G = Math.abs(h - it) <= c;
        p.done = I && G;
      }
      return (p.value = p.done ? h : it), p;
    },
    toString: () => {
      const L = Math.min(Cp(ot), Lo),
        it = ap((Tt) => ot.next(L * Tt).value, L, 30);
      return L + "ms " + it;
    },
  };
  return ot;
}
function wm({
  keyframes: a,
  velocity: l = 0,
  power: u = 0.8,
  timeConstant: r = 325,
  bounceDamping: c = 10,
  bounceStiffness: d = 500,
  modifyTarget: h,
  min: p,
  max: m,
  restDelta: y = 0.5,
  restSpeed: v,
}) {
  const T = a[0],
    D = { done: !1, value: T },
    O = (I) => (p !== void 0 && I < p) || (m !== void 0 && I > m),
    U = (I) =>
      p === void 0
        ? m
        : m === void 0 || Math.abs(p - I) < Math.abs(m - I)
        ? p
        : m;
  let B = u * l;
  const j = T + B,
    H = h === void 0 ? j : h(j);
  H !== j && (B = H - T);
  const q = (I) => -B * Math.exp(-I / r),
    Q = (I) => H + q(I),
    ot = (I) => {
      const G = q(I),
        et = Q(I);
      (D.done = Math.abs(G) <= y), (D.value = D.done ? H : et);
    };
  let L, it;
  const Tt = (I) => {
    O(D.value) &&
      ((L = I),
      (it = Bp({
        keyframes: [D.value, U(D.value)],
        velocity: Up(Q, I, D.value),
        damping: c,
        stiffness: d,
        restDelta: y,
        restSpeed: v,
      })));
  };
  return (
    Tt(0),
    {
      calculatedDuration: null,
      next: (I) => {
        let G = !1;
        return (
          !it && L === void 0 && ((G = !0), ot(I), Tt(I)),
          L !== void 0 && I >= L ? it.next(I - L) : (!G && ot(I), D)
        );
      },
    }
  );
}
const YS = Al(0.42, 0, 1, 1),
  GS = Al(0, 0, 0.58, 1),
  Np = Al(0.42, 0, 0.58, 1),
  XS = (a) => Array.isArray(a) && typeof a[0] != "number",
  QS = {
    linear: pe,
    easeIn: YS,
    easeInOut: Np,
    easeOut: GS,
    circIn: gc,
    circInOut: mp,
    circOut: dp,
    backIn: pc,
    backInOut: fp,
    backOut: cp,
    anticipate: hp,
  },
  qm = (a) => {
    if (yc(a)) {
      Hy(a.length === 4);
      const [l, u, r, c] = a;
      return Al(l, u, r, c);
    } else if (typeof a == "string") return QS[a];
    return a;
  };
function ZS(a, l, u) {
  const r = [],
    c = u || _p,
    d = a.length - 1;
  for (let h = 0; h < d; h++) {
    let p = c(a[h], a[h + 1]);
    if (l) {
      const m = Array.isArray(l) ? l[h] || pe : l;
      p = El(m, p);
    }
    r.push(p);
  }
  return r;
}
function KS(a, l, { clamp: u = !0, ease: r, mixer: c } = {}) {
  const d = a.length;
  if ((Hy(d === l.length), d === 1)) return () => l[0];
  if (d === 2 && l[0] === l[1]) return () => l[1];
  const h = a[0] === a[1];
  a[0] > a[d - 1] && ((a = [...a].reverse()), (l = [...l].reverse()));
  const p = ZS(l, r, c),
    m = p.length,
    y = (v) => {
      if (h && v < a[0]) return l[0];
      let T = 0;
      if (m > 1) for (; T < a.length - 2 && !(v < a[T + 1]); T++);
      const D = la(a[T], a[T + 1], v);
      return p[T](D);
    };
  return u ? (v) => y(mn(a[0], a[d - 1], v)) : y;
}
function JS(a, l) {
  const u = a[a.length - 1];
  for (let r = 1; r <= l; r++) {
    const c = la(0, l, r);
    a.push(Rt(u, 1, c));
  }
}
function PS(a) {
  const l = [0];
  return JS(l, a.length - 1), l;
}
function kS(a, l) {
  return a.map((u) => u * l);
}
function FS(a, l) {
  return a.map(() => l || Np).splice(0, a.length - 1);
}
function Ps({
  duration: a = 300,
  keyframes: l,
  times: u,
  ease: r = "easeInOut",
}) {
  const c = XS(r) ? r.map(qm) : qm(r),
    d = { done: !1, value: l[0] },
    h = kS(u && u.length === l.length ? u : PS(l), a),
    p = KS(h, l, { ease: Array.isArray(c) ? c : FS(l, c) });
  return {
    calculatedDuration: a,
    next: (m) => ((d.value = p(m)), (d.done = m >= a), d),
  };
}
const WS = (a) => {
    const l = ({ timestamp: u }) => a(u);
    return {
      start: () => Et.update(l, !0),
      stop: () => qn(l),
      now: () => (kt.isProcessing ? kt.timestamp : Je.now()),
    };
  },
  $S = { decay: wm, inertia: wm, tween: Ps, keyframes: Ps, spring: Bp },
  IS = (a) => a / 100;
class Ec extends Vp {
  constructor(l) {
    super(l),
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
        const { onStop: m } = this.options;
        m && m();
      });
    const { name: u, motionValue: r, element: c, keyframes: d } = this.options,
      h = (c == null ? void 0 : c.KeyframeResolver) || bc,
      p = (m, y) => this.onKeyframesResolved(m, y);
    (this.resolver = new h(d, p, u, r, c)), this.resolver.scheduleResolve();
  }
  flatten() {
    super.flatten(),
      this._resolved &&
        Object.assign(
          this._resolved,
          this.initPlayback(this._resolved.keyframes)
        );
  }
  initPlayback(l) {
    const {
        type: u = "keyframes",
        repeat: r = 0,
        repeatDelay: c = 0,
        repeatType: d,
        velocity: h = 0,
      } = this.options,
      p = mc(u) ? u : $S[u] || Ps;
    let m, y;
    p !== Ps &&
      typeof l[0] != "number" &&
      ((m = El(IS, _p(l[0], l[1]))), (l = [0, 100]));
    const v = p({ ...this.options, keyframes: l });
    d === "mirror" &&
      (y = p({ ...this.options, keyframes: [...l].reverse(), velocity: -h })),
      v.calculatedDuration === null && (v.calculatedDuration = Cp(v));
    const { calculatedDuration: T } = v,
      D = T + c,
      O = D * (r + 1) - c;
    return {
      generator: v,
      mirroredGenerator: y,
      mapPercentToKeyframes: m,
      calculatedDuration: T,
      resolvedDuration: D,
      totalDuration: O,
    };
  }
  onPostResolved() {
    const { autoplay: l = !0 } = this.options;
    this.play(),
      this.pendingPlayState === "paused" || !l
        ? this.pause()
        : (this.state = this.pendingPlayState);
  }
  tick(l, u = !1) {
    const { resolved: r } = this;
    if (!r) {
      const { keyframes: I } = this.options;
      return { done: !0, value: I[I.length - 1] };
    }
    const {
      finalKeyframe: c,
      generator: d,
      mirroredGenerator: h,
      mapPercentToKeyframes: p,
      keyframes: m,
      calculatedDuration: y,
      totalDuration: v,
      resolvedDuration: T,
    } = r;
    if (this.startTime === null) return d.next(0);
    const {
      delay: D,
      repeat: O,
      repeatType: U,
      repeatDelay: B,
      onUpdate: j,
    } = this.options;
    this.speed > 0
      ? (this.startTime = Math.min(this.startTime, l))
      : this.speed < 0 &&
        (this.startTime = Math.min(l - v / this.speed, this.startTime)),
      u
        ? (this.currentTime = l)
        : this.holdTime !== null
        ? (this.currentTime = this.holdTime)
        : (this.currentTime = Math.round(l - this.startTime) * this.speed);
    const H = this.currentTime - D * (this.speed >= 0 ? 1 : -1),
      q = this.speed >= 0 ? H < 0 : H > v;
    (this.currentTime = Math.max(H, 0)),
      this.state === "finished" &&
        this.holdTime === null &&
        (this.currentTime = v);
    let Q = this.currentTime,
      ot = d;
    if (O) {
      const I = Math.min(this.currentTime, v) / T;
      let G = Math.floor(I),
        et = I % 1;
      !et && I >= 1 && (et = 1),
        et === 1 && G--,
        (G = Math.min(G, O + 1)),
        !!(G % 2) &&
          (U === "reverse"
            ? ((et = 1 - et), B && (et -= B / T))
            : U === "mirror" && (ot = h)),
        (Q = mn(0, 1, et) * T);
    }
    const L = q ? { done: !1, value: m[0] } : ot.next(Q);
    p && (L.value = p(L.value));
    let { done: it } = L;
    !q &&
      y !== null &&
      (it = this.speed >= 0 ? this.currentTime >= v : this.currentTime <= 0);
    const Tt =
      this.holdTime === null &&
      (this.state === "finished" || (this.state === "running" && it));
    return (
      Tt && c !== void 0 && (L.value = eu(m, this.options, c)),
      j && j(L.value),
      Tt && this.finish(),
      L
    );
  }
  get duration() {
    const { resolved: l } = this;
    return l ? dn(l.calculatedDuration) : 0;
  }
  get time() {
    return dn(this.currentTime);
  }
  set time(l) {
    (l = hn(l)),
      (this.currentTime = l),
      this.holdTime !== null || this.speed === 0
        ? (this.holdTime = l)
        : this.driver && (this.startTime = this.driver.now() - l / this.speed);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(l) {
    const u = this.playbackSpeed !== l;
    (this.playbackSpeed = l), u && (this.time = dn(this.currentTime));
  }
  play() {
    if (
      (this.resolver.isScheduled || this.resolver.resume(), !this._resolved)
    ) {
      this.pendingPlayState = "running";
      return;
    }
    if (this.isStopped) return;
    const { driver: l = WS, onPlay: u, startTime: r } = this.options;
    this.driver || (this.driver = l((d) => this.tick(d))), u && u();
    const c = this.driver.now();
    this.holdTime !== null
      ? (this.startTime = c - this.holdTime)
      : this.startTime
      ? this.state === "finished" && (this.startTime = c)
      : (this.startTime = r ?? this.calcStartTime()),
      this.state === "finished" && this.updateFinishedPromise(),
      (this.cancelTime = this.startTime),
      (this.holdTime = null),
      (this.state = "running"),
      this.driver.start();
  }
  pause() {
    var l;
    if (!this._resolved) {
      this.pendingPlayState = "paused";
      return;
    }
    (this.state = "paused"),
      (this.holdTime = (l = this.currentTime) !== null && l !== void 0 ? l : 0);
  }
  complete() {
    this.state !== "running" && this.play(),
      (this.pendingPlayState = this.state = "finished"),
      (this.holdTime = null);
  }
  finish() {
    this.teardown(), (this.state = "finished");
    const { onComplete: l } = this.options;
    l && l();
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
  sample(l) {
    return (this.startTime = 0), this.tick(l, !0);
  }
}
const tT = new Set(["opacity", "clipPath", "filter", "transform"]);
function eT(
  a,
  l,
  u,
  {
    delay: r = 0,
    duration: c = 300,
    repeat: d = 0,
    repeatType: h = "loop",
    ease: p = "easeInOut",
    times: m,
  } = {}
) {
  const y = { [l]: u };
  m && (y.offset = m);
  const v = sp(p, c);
  return (
    Array.isArray(v) && (y.easing = v),
    a.animate(y, {
      delay: r,
      duration: c,
      easing: Array.isArray(v) ? "linear" : v,
      fill: "both",
      iterations: d + 1,
      direction: h === "reverse" ? "alternate" : "normal",
    })
  );
}
const nT = dc(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
  ks = 10,
  iT = 2e4;
function aT(a) {
  return mc(a.type) || a.type === "spring" || !lp(a.ease);
}
function lT(a, l) {
  const u = new Ec({
    ...l,
    keyframes: a,
    repeat: 0,
    delay: 0,
    isGenerator: !0,
  });
  let r = { done: !1, value: a[0] };
  const c = [];
  let d = 0;
  for (; !r.done && d < iT; ) (r = u.sample(d)), c.push(r.value), (d += ks);
  return { times: void 0, keyframes: c, duration: d - ks, ease: "linear" };
}
const Hp = { anticipate: hp, backInOut: fp, circInOut: mp };
function sT(a) {
  return a in Hp;
}
class Ym extends Vp {
  constructor(l) {
    super(l);
    const { name: u, motionValue: r, element: c, keyframes: d } = this.options;
    (this.resolver = new Op(
      d,
      (h, p) => this.onKeyframesResolved(h, p),
      u,
      r,
      c
    )),
      this.resolver.scheduleResolve();
  }
  initPlayback(l, u) {
    let {
      duration: r = 300,
      times: c,
      ease: d,
      type: h,
      motionValue: p,
      name: m,
      startTime: y,
    } = this.options;
    if (!p.owner || !p.owner.current) return !1;
    if (
      (typeof d == "string" && Ks() && sT(d) && (d = Hp[d]), aT(this.options))
    ) {
      const {
          onComplete: T,
          onUpdate: D,
          motionValue: O,
          element: U,
          ...B
        } = this.options,
        j = lT(l, B);
      (l = j.keyframes),
        l.length === 1 && (l[1] = l[0]),
        (r = j.duration),
        (c = j.times),
        (d = j.ease),
        (h = "keyframes");
    }
    const v = eT(p.owner.current, m, l, {
      ...this.options,
      duration: r,
      times: c,
      ease: d,
    });
    return (
      (v.startTime = y ?? this.calcStartTime()),
      this.pendingTimeline
        ? (Om(v, this.pendingTimeline), (this.pendingTimeline = void 0))
        : (v.onfinish = () => {
            const { onComplete: T } = this.options;
            p.set(eu(l, this.options, u)),
              T && T(),
              this.cancel(),
              this.resolveFinishedPromise();
          }),
      { animation: v, duration: r, times: c, type: h, ease: d, keyframes: l }
    );
  }
  get duration() {
    const { resolved: l } = this;
    if (!l) return 0;
    const { duration: u } = l;
    return dn(u);
  }
  get time() {
    const { resolved: l } = this;
    if (!l) return 0;
    const { animation: u } = l;
    return dn(u.currentTime || 0);
  }
  set time(l) {
    const { resolved: u } = this;
    if (!u) return;
    const { animation: r } = u;
    r.currentTime = hn(l);
  }
  get speed() {
    const { resolved: l } = this;
    if (!l) return 1;
    const { animation: u } = l;
    return u.playbackRate;
  }
  set speed(l) {
    const { resolved: u } = this;
    if (!u) return;
    const { animation: r } = u;
    r.playbackRate = l;
  }
  get state() {
    const { resolved: l } = this;
    if (!l) return "idle";
    const { animation: u } = l;
    return u.playState;
  }
  get startTime() {
    const { resolved: l } = this;
    if (!l) return null;
    const { animation: u } = l;
    return u.startTime;
  }
  attachTimeline(l) {
    if (!this._resolved) this.pendingTimeline = l;
    else {
      const { resolved: u } = this;
      if (!u) return pe;
      const { animation: r } = u;
      Om(r, l);
    }
    return pe;
  }
  play() {
    if (this.isStopped) return;
    const { resolved: l } = this;
    if (!l) return;
    const { animation: u } = l;
    u.playState === "finished" && this.updateFinishedPromise(), u.play();
  }
  pause() {
    const { resolved: l } = this;
    if (!l) return;
    const { animation: u } = l;
    u.pause();
  }
  stop() {
    if ((this.resolver.cancel(), (this.isStopped = !0), this.state === "idle"))
      return;
    this.resolveFinishedPromise(), this.updateFinishedPromise();
    const { resolved: l } = this;
    if (!l) return;
    const {
      animation: u,
      keyframes: r,
      duration: c,
      type: d,
      ease: h,
      times: p,
    } = l;
    if (u.playState === "idle" || u.playState === "finished") return;
    if (this.time) {
      const {
          motionValue: y,
          onUpdate: v,
          onComplete: T,
          element: D,
          ...O
        } = this.options,
        U = new Ec({
          ...O,
          keyframes: r,
          duration: c,
          type: d,
          ease: h,
          times: p,
          isGenerator: !0,
        }),
        B = hn(this.time);
      y.setWithVelocity(U.sample(B - ks).value, U.sample(B).value, ks);
    }
    const { onStop: m } = this.options;
    m && m(), this.cancel();
  }
  complete() {
    const { resolved: l } = this;
    l && l.animation.finish();
  }
  cancel() {
    const { resolved: l } = this;
    l && l.animation.cancel();
  }
  static supports(l) {
    const {
      motionValue: u,
      name: r,
      repeatDelay: c,
      repeatType: d,
      damping: h,
      type: p,
    } = l;
    if (!u || !u.owner || !(u.owner.current instanceof HTMLElement)) return !1;
    const { onUpdate: m, transformTemplate: y } = u.owner.getProps();
    return (
      nT() &&
      r &&
      tT.has(r) &&
      !m &&
      !y &&
      !c &&
      d !== "mirror" &&
      h !== 0 &&
      p !== "inertia"
    );
  }
}
const uT = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  rT = (a) => ({
    type: "spring",
    stiffness: 550,
    damping: a === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  oT = { type: "keyframes", duration: 0.8 },
  cT = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  fT = (a, { keyframes: l }) =>
    l.length > 2
      ? oT
      : yi.has(a)
      ? a.startsWith("scale")
        ? rT(l[1])
        : uT
      : cT;
function hT({
  when: a,
  delay: l,
  delayChildren: u,
  staggerChildren: r,
  staggerDirection: c,
  repeat: d,
  repeatType: h,
  repeatDelay: p,
  from: m,
  elapsed: y,
  ...v
}) {
  return !!Object.keys(v).length;
}
const Dc =
  (a, l, u, r = {}, c, d) =>
  (h) => {
    const p = oc(r, a) || {},
      m = p.delay || r.delay || 0;
    let { elapsed: y = 0 } = r;
    y = y - hn(m);
    let v = {
      keyframes: Array.isArray(u) ? u : [null, u],
      ease: "easeOut",
      velocity: l.getVelocity(),
      ...p,
      delay: -y,
      onUpdate: (D) => {
        l.set(D), p.onUpdate && p.onUpdate(D);
      },
      onComplete: () => {
        h(), p.onComplete && p.onComplete();
      },
      name: a,
      motionValue: l,
      element: d ? void 0 : c,
    };
    hT(p) || (v = { ...v, ...fT(a, v) }),
      v.duration && (v.duration = hn(v.duration)),
      v.repeatDelay && (v.repeatDelay = hn(v.repeatDelay)),
      v.from !== void 0 && (v.keyframes[0] = v.from);
    let T = !1;
    if (
      ((v.type === !1 || (v.duration === 0 && !v.repeatDelay)) &&
        ((v.duration = 0), v.delay === 0 && (T = !0)),
      T && !d && l.get() !== void 0)
    ) {
      const D = eu(v.keyframes, p);
      if (D !== void 0)
        return (
          Et.update(() => {
            v.onUpdate(D), v.onComplete();
          }),
          new Q1([])
        );
    }
    return !d && Ym.supports(v) ? new Ym(v) : new Ec(v);
  };
function dT({ protectedKeys: a, needsAnimating: l }, u) {
  const r = a.hasOwnProperty(u) && l[u] !== !0;
  return (l[u] = !1), r;
}
function Lp(a, l, { delay: u = 0, transitionOverride: r, type: c } = {}) {
  var d;
  let { transition: h = a.getDefaultTransition(), transitionEnd: p, ...m } = l;
  r && (h = r);
  const y = [],
    v = c && a.animationState && a.animationState.getState()[c];
  for (const T in m) {
    const D = a.getValue(
        T,
        (d = a.latestValues[T]) !== null && d !== void 0 ? d : null
      ),
      O = m[T];
    if (O === void 0 || (v && dT(v, T))) continue;
    const U = { delay: u, ...oc(h || {}, T) };
    let B = !1;
    if (window.MotionHandoffAnimation) {
      const H = ip(a);
      if (H) {
        const q = window.MotionHandoffAnimation(H, T, Et);
        q !== null && ((U.startTime = q), (B = !0));
      }
    }
    zo(a, T),
      D.start(
        Dc(T, D, O, a.shouldReduceMotion && ep.has(T) ? { type: !1 } : U, a, B)
      );
    const j = D.animation;
    j && y.push(j);
  }
  return (
    p &&
      Promise.all(y).then(() => {
        Et.update(() => {
          p && q1(a, p);
        });
      }),
    y
  );
}
function qo(a, l, u = {}) {
  var r;
  const c = gl(
    a,
    l,
    u.type === "exit"
      ? (r = a.presenceContext) === null || r === void 0
        ? void 0
        : r.custom
      : void 0
  );
  let { transition: d = a.getDefaultTransition() || {} } = c || {};
  u.transitionOverride && (d = u.transitionOverride);
  const h = c ? () => Promise.all(Lp(a, c, u)) : () => Promise.resolve(),
    p =
      a.variantChildren && a.variantChildren.size
        ? (y = 0) => {
            const {
              delayChildren: v = 0,
              staggerChildren: T,
              staggerDirection: D,
            } = d;
            return mT(a, l, v + y, T, D, u);
          }
        : () => Promise.resolve(),
    { when: m } = d;
  if (m) {
    const [y, v] = m === "beforeChildren" ? [h, p] : [p, h];
    return y().then(() => v());
  } else return Promise.all([h(), p(u.delay)]);
}
function mT(a, l, u = 0, r = 0, c = 1, d) {
  const h = [],
    p = (a.variantChildren.size - 1) * r,
    m = c === 1 ? (y = 0) => y * r : (y = 0) => p - y * r;
  return (
    Array.from(a.variantChildren)
      .sort(yT)
      .forEach((y, v) => {
        y.notify("AnimationStart", l),
          h.push(
            qo(y, l, { ...d, delay: u + m(v) }).then(() =>
              y.notify("AnimationComplete", l)
            )
          );
      }),
    Promise.all(h)
  );
}
function yT(a, l) {
  return a.sortNodePosition(l);
}
function pT(a, l, u = {}) {
  a.notify("AnimationStart", l);
  let r;
  if (Array.isArray(l)) {
    const c = l.map((d) => qo(a, d, u));
    r = Promise.all(c);
  } else if (typeof l == "string") r = qo(a, l, u);
  else {
    const c = typeof l == "function" ? gl(a, l, u.custom) : l;
    r = Promise.all(Lp(a, c, u));
  }
  return r.then(() => {
    a.notify("AnimationComplete", l);
  });
}
function jp(a, l) {
  if (!Array.isArray(l)) return !1;
  const u = l.length;
  if (u !== a.length) return !1;
  for (let r = 0; r < u; r++) if (l[r] !== a[r]) return !1;
  return !0;
}
const gT = Fo.length;
function wp(a) {
  if (!a) return;
  if (!a.isControllingVariants) {
    const u = a.parent ? wp(a.parent) || {} : {};
    return a.props.initial !== void 0 && (u.initial = a.props.initial), u;
  }
  const l = {};
  for (let u = 0; u < gT; u++) {
    const r = Fo[u],
      c = a.props[r];
    (ml(c) || c === !1) && (l[r] = c);
  }
  return l;
}
const vT = [...ko].reverse(),
  ST = ko.length;
function TT(a) {
  return (l) =>
    Promise.all(l.map(({ animation: u, options: r }) => pT(a, u, r)));
}
function bT(a) {
  let l = TT(a),
    u = Gm(),
    r = !0;
  const c = (m) => (y, v) => {
    var T;
    const D = gl(
      a,
      v,
      m === "exit"
        ? (T = a.presenceContext) === null || T === void 0
          ? void 0
          : T.custom
        : void 0
    );
    if (D) {
      const { transition: O, transitionEnd: U, ...B } = D;
      y = { ...y, ...B, ...U };
    }
    return y;
  };
  function d(m) {
    l = m(a);
  }
  function h(m) {
    const { props: y } = a,
      v = wp(a.parent) || {},
      T = [],
      D = new Set();
    let O = {},
      U = 1 / 0;
    for (let j = 0; j < ST; j++) {
      const H = vT[j],
        q = u[H],
        Q = y[H] !== void 0 ? y[H] : v[H],
        ot = ml(Q),
        L = H === m ? q.isActive : null;
      L === !1 && (U = j);
      let it = Q === v[H] && Q !== y[H] && ot;
      if (
        (it && r && a.manuallyAnimateOnMount && (it = !1),
        (q.protectedKeys = { ...O }),
        (!q.isActive && L === null) ||
          (!Q && !q.prevProp) ||
          Is(Q) ||
          typeof Q == "boolean")
      )
        continue;
      const Tt = AT(q.prevProp, Q);
      let I = Tt || (H === m && q.isActive && !it && ot) || (j > U && ot),
        G = !1;
      const et = Array.isArray(Q) ? Q : [Q];
      let wt = et.reduce(c(H), {});
      L === !1 && (wt = {});
      const { prevResolvedValues: ge = {} } = q,
        ve = { ...ge, ...wt },
        Se = (K) => {
          (I = !0),
            D.has(K) && ((G = !0), D.delete(K)),
            (q.needsAnimating[K] = !0);
          const J = a.getValue(K);
          J && (J.liveStyle = !1);
        };
      for (const K in ve) {
        const J = wt[K],
          yt = ge[K];
        if (O.hasOwnProperty(K)) continue;
        let b = !1;
        Co(J) && Co(yt) ? (b = !jp(J, yt)) : (b = J !== yt),
          b
            ? J != null
              ? Se(K)
              : D.add(K)
            : J !== void 0 && D.has(K)
            ? Se(K)
            : (q.protectedKeys[K] = !0);
      }
      (q.prevProp = Q),
        (q.prevResolvedValues = wt),
        q.isActive && (O = { ...O, ...wt }),
        r && a.blockInitialAnimation && (I = !1),
        I &&
          (!(it && Tt) || G) &&
          T.push(...et.map((K) => ({ animation: K, options: { type: H } })));
    }
    if (D.size) {
      const j = {};
      if (typeof y.initial != "boolean") {
        const H = gl(a, Array.isArray(y.initial) ? y.initial[0] : y.initial);
        H && H.transition && (j.transition = H.transition);
      }
      D.forEach((H) => {
        const q = a.getBaseTarget(H),
          Q = a.getValue(H);
        Q && (Q.liveStyle = !0), (j[H] = q ?? null);
      }),
        T.push({ animation: j });
    }
    let B = !!T.length;
    return (
      r &&
        (y.initial === !1 || y.initial === y.animate) &&
        !a.manuallyAnimateOnMount &&
        (B = !1),
      (r = !1),
      B ? l(T) : Promise.resolve()
    );
  }
  function p(m, y) {
    var v;
    if (u[m].isActive === y) return Promise.resolve();
    (v = a.variantChildren) === null ||
      v === void 0 ||
      v.forEach((D) => {
        var O;
        return (O = D.animationState) === null || O === void 0
          ? void 0
          : O.setActive(m, y);
      }),
      (u[m].isActive = y);
    const T = h(m);
    for (const D in u) u[D].protectedKeys = {};
    return T;
  }
  return {
    animateChanges: h,
    setActive: p,
    setAnimateFunction: d,
    getState: () => u,
    reset: () => {
      (u = Gm()), (r = !0);
    },
  };
}
function AT(a, l) {
  return typeof l == "string" ? l !== a : Array.isArray(l) ? !jp(l, a) : !1;
}
function fi(a = !1) {
  return {
    isActive: a,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function Gm() {
  return {
    animate: fi(!0),
    whileInView: fi(),
    whileHover: fi(),
    whileTap: fi(),
    whileDrag: fi(),
    whileFocus: fi(),
    exit: fi(),
  };
}
class Gn {
  constructor(l) {
    (this.isMounted = !1), (this.node = l);
  }
  update() {}
}
class ET extends Gn {
  constructor(l) {
    super(l), l.animationState || (l.animationState = bT(l));
  }
  updateAnimationControlsSubscription() {
    const { animate: l } = this.node.getProps();
    Is(l) && (this.unmountControls = l.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: l } = this.node.getProps(),
      { animate: u } = this.node.prevProps || {};
    l !== u && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var l;
    this.node.animationState.reset(),
      (l = this.unmountControls) === null || l === void 0 || l.call(this);
  }
}
let DT = 0;
class MT extends Gn {
  constructor() {
    super(...arguments), (this.id = DT++);
  }
  update() {
    if (!this.node.presenceContext) return;
    const { isPresent: l, onExitComplete: u } = this.node.presenceContext,
      { isPresent: r } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || l === r) return;
    const c = this.node.animationState.setActive("exit", !l);
    u &&
      !l &&
      c.then(() => {
        u(this.id);
      });
  }
  mount() {
    const { register: l, onExitComplete: u } = this.node.presenceContext || {};
    u && u(this.id), l && (this.unmount = l(this.id));
  }
  unmount() {}
}
const xT = { animation: { Feature: ET }, exit: { Feature: MT } },
  je = { x: !1, y: !1 };
function qp() {
  return je.x || je.y;
}
function RT(a) {
  return a === "x" || a === "y"
    ? je[a]
      ? null
      : ((je[a] = !0),
        () => {
          je[a] = !1;
        })
    : je.x || je.y
    ? null
    : ((je.x = je.y = !0),
      () => {
        je.x = je.y = !1;
      });
}
function Tl(a, l, u, r = { passive: !0 }) {
  return a.addEventListener(l, u, r), () => a.removeEventListener(l, u);
}
const Mc = (a) =>
  a.pointerType === "mouse"
    ? typeof a.button != "number" || a.button <= 0
    : a.isPrimary !== !1;
function Dl(a) {
  return { point: { x: a.pageX, y: a.pageY } };
}
const OT = (a) => (l) => Mc(l) && a(l, Dl(l));
function ta(a, l, u, r) {
  return Tl(a, l, OT(u), r);
}
function Yp({ top: a, left: l, right: u, bottom: r }) {
  return { x: { min: l, max: u }, y: { min: a, max: r } };
}
function VT({ x: a, y: l }) {
  return { top: l.min, right: a.max, bottom: l.max, left: a.min };
}
function CT(a, l) {
  if (!l) return a;
  const u = l({ x: a.left, y: a.top }),
    r = l({ x: a.right, y: a.bottom });
  return { top: u.y, left: u.x, bottom: r.y, right: r.x };
}
const Gp = 1e-4,
  zT = 1 - Gp,
  _T = 1 + Gp,
  Xp = 0.01,
  UT = 0 - Xp,
  BT = 0 + Xp;
function le(a) {
  return a.max - a.min;
}
function NT(a, l, u) {
  return Math.abs(a - l) <= u;
}
function Xm(a, l, u, r = 0.5) {
  (a.origin = r),
    (a.originPoint = Rt(l.min, l.max, a.origin)),
    (a.scale = le(u) / le(l)),
    (a.translate = Rt(u.min, u.max, a.origin) - a.originPoint),
    ((a.scale >= zT && a.scale <= _T) || isNaN(a.scale)) && (a.scale = 1),
    ((a.translate >= UT && a.translate <= BT) || isNaN(a.translate)) &&
      (a.translate = 0);
}
function hl(a, l, u, r) {
  Xm(a.x, l.x, u.x, r ? r.originX : void 0),
    Xm(a.y, l.y, u.y, r ? r.originY : void 0);
}
function Qm(a, l, u) {
  (a.min = u.min + l.min), (a.max = a.min + le(l));
}
function HT(a, l, u) {
  Qm(a.x, l.x, u.x), Qm(a.y, l.y, u.y);
}
function Zm(a, l, u) {
  (a.min = l.min - u.min), (a.max = a.min + le(l));
}
function dl(a, l, u) {
  Zm(a.x, l.x, u.x), Zm(a.y, l.y, u.y);
}
const Km = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  ea = () => ({ x: Km(), y: Km() }),
  Jm = () => ({ min: 0, max: 0 }),
  Ut = () => ({ x: Jm(), y: Jm() });
function Ue(a) {
  return [a("x"), a("y")];
}
function Ao(a) {
  return a === void 0 || a === 1;
}
function Yo({ scale: a, scaleX: l, scaleY: u }) {
  return !Ao(a) || !Ao(l) || !Ao(u);
}
function hi(a) {
  return (
    Yo(a) ||
    Qp(a) ||
    a.z ||
    a.rotate ||
    a.rotateX ||
    a.rotateY ||
    a.skewX ||
    a.skewY
  );
}
function Qp(a) {
  return Pm(a.x) || Pm(a.y);
}
function Pm(a) {
  return a && a !== "0%";
}
function Fs(a, l, u) {
  const r = a - u,
    c = l * r;
  return u + c;
}
function km(a, l, u, r, c) {
  return c !== void 0 && (a = Fs(a, c, r)), Fs(a, u, r) + l;
}
function Go(a, l = 0, u = 1, r, c) {
  (a.min = km(a.min, l, u, r, c)), (a.max = km(a.max, l, u, r, c));
}
function Zp(a, { x: l, y: u }) {
  Go(a.x, l.translate, l.scale, l.originPoint),
    Go(a.y, u.translate, u.scale, u.originPoint);
}
const Fm = 0.999999999999,
  Wm = 1.0000000000001;
function LT(a, l, u, r = !1) {
  const c = u.length;
  if (!c) return;
  l.x = l.y = 1;
  let d, h;
  for (let p = 0; p < c; p++) {
    (d = u[p]), (h = d.projectionDelta);
    const { visualElement: m } = d.options;
    (m && m.props.style && m.props.style.display === "contents") ||
      (r &&
        d.options.layoutScroll &&
        d.scroll &&
        d !== d.root &&
        ia(a, { x: -d.scroll.offset.x, y: -d.scroll.offset.y }),
      h && ((l.x *= h.x.scale), (l.y *= h.y.scale), Zp(a, h)),
      r && hi(d.latestValues) && ia(a, d.latestValues));
  }
  l.x < Wm && l.x > Fm && (l.x = 1), l.y < Wm && l.y > Fm && (l.y = 1);
}
function na(a, l) {
  (a.min = a.min + l), (a.max = a.max + l);
}
function $m(a, l, u, r, c = 0.5) {
  const d = Rt(a.min, a.max, c);
  Go(a, l, u, d, r);
}
function ia(a, l) {
  $m(a.x, l.x, l.scaleX, l.scale, l.originX),
    $m(a.y, l.y, l.scaleY, l.scale, l.originY);
}
function Kp(a, l) {
  return Yp(CT(a.getBoundingClientRect(), l));
}
function jT(a, l, u) {
  const r = Kp(a, u),
    { scroll: c } = l;
  return c && (na(r.x, c.offset.x), na(r.y, c.offset.y)), r;
}
function Ws(a, l) {
  const u = `${l}PointerCapture`;
  if (a.target instanceof Element && u in a.target && a.pointerId !== void 0)
    try {
      a.target[u](a.pointerId);
    } catch {}
}
const Im = (a, l) => Math.abs(a - l);
function wT(a, l) {
  const u = Im(a.x, l.x),
    r = Im(a.y, l.y);
  return Math.sqrt(u ** 2 + r ** 2);
}
class Jp {
  constructor(l, u, { transformPagePoint: r, dragSnapToOrigin: c = !1 } = {}) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const v = Do(this.lastMoveEventInfo, this.history),
          T = this.startEvent !== null,
          D = wT(v.offset, { x: 0, y: 0 }) >= 3;
        if (!T && !D) return;
        const { point: O } = v,
          { timestamp: U } = kt;
        this.history.push({ ...O, timestamp: U });
        const { onStart: B, onMove: j } = this.handlers;
        T ||
          (B && B(this.lastMoveEvent, v),
          (this.startEvent = this.lastMoveEvent)),
          j && j(this.lastMoveEvent, v);
      }),
      (this.handlePointerMove = (v, T) => {
        if (
          v.target instanceof Element &&
          v.target.hasPointerCapture &&
          v.pointerId !== void 0
        )
          try {
            if (!v.target.hasPointerCapture(v.pointerId)) return;
          } catch {}
        (this.lastMoveEvent = v),
          (this.lastMoveEventInfo = Eo(T, this.transformPagePoint)),
          Et.update(this.updatePoint, !0);
      }),
      (this.handlePointerUp = (v, T) => {
        Ws(v, "release"), this.end();
        const { onEnd: D, onSessionEnd: O, resumeAnimation: U } = this.handlers;
        if (
          (this.dragSnapToOrigin && U && U(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const B = Do(
          v.type === "pointercancel" || v.type === "lostpointercapture"
            ? this.lastMoveEventInfo
            : Eo(T, this.transformPagePoint),
          this.history
        );
        this.startEvent && D && D(v, B), O && O(v, B);
      }),
      !Mc(l))
    )
      return;
    (this.dragSnapToOrigin = c),
      (this.handlers = u),
      (this.transformPagePoint = r);
    const d = Dl(l),
      h = Eo(d, this.transformPagePoint),
      { point: p } = h,
      { timestamp: m } = kt;
    this.history = [{ ...p, timestamp: m }];
    const { onSessionStart: y } = u;
    y && y(l, Do(h, this.history)),
      Ws(l, "set"),
      (this.removeListeners = El(
        ta(l.currentTarget, "pointermove", this.handlePointerMove),
        ta(l.currentTarget, "pointerup", this.handlePointerUp),
        ta(l.currentTarget, "pointercancel", this.handlePointerUp),
        ta(l.currentTarget, "lostpointercapture", this.handlePointerUp)
      ));
  }
  updateHandlers(l) {
    this.handlers = l;
  }
  end() {
    this.removeListeners && this.removeListeners(), qn(this.updatePoint);
  }
}
function Eo(a, l) {
  return l ? { point: l(a.point) } : a;
}
function ty(a, l) {
  return { x: a.x - l.x, y: a.y - l.y };
}
function Do({ point: a }, l) {
  return {
    point: a,
    delta: ty(a, Pp(l)),
    offset: ty(a, qT(l)),
    velocity: YT(l, 0.1),
  };
}
function qT(a) {
  return a[0];
}
function Pp(a) {
  return a[a.length - 1];
}
function YT(a, l) {
  if (a.length < 2) return { x: 0, y: 0 };
  let u = a.length - 1,
    r = null;
  const c = Pp(a);
  for (; u >= 0 && ((r = a[u]), !(c.timestamp - r.timestamp > hn(l))); ) u--;
  if (!r) return { x: 0, y: 0 };
  const d = dn(c.timestamp - r.timestamp);
  if (d === 0) return { x: 0, y: 0 };
  const h = { x: (c.x - r.x) / d, y: (c.y - r.y) / d };
  return h.x === 1 / 0 && (h.x = 0), h.y === 1 / 0 && (h.y = 0), h;
}
function GT(a, { min: l, max: u }, r) {
  return (
    l !== void 0 && a < l
      ? (a = r ? Rt(l, a, r.min) : Math.max(a, l))
      : u !== void 0 && a > u && (a = r ? Rt(u, a, r.max) : Math.min(a, u)),
    a
  );
}
function ey(a, l, u) {
  return {
    min: l !== void 0 ? a.min + l : void 0,
    max: u !== void 0 ? a.max + u - (a.max - a.min) : void 0,
  };
}
function XT(a, { top: l, left: u, bottom: r, right: c }) {
  return { x: ey(a.x, u, c), y: ey(a.y, l, r) };
}
function ny(a, l) {
  let u = l.min - a.min,
    r = l.max - a.max;
  return l.max - l.min < a.max - a.min && ([u, r] = [r, u]), { min: u, max: r };
}
function QT(a, l) {
  return { x: ny(a.x, l.x), y: ny(a.y, l.y) };
}
function ZT(a, l) {
  let u = 0.5;
  const r = le(a),
    c = le(l);
  return (
    c > r
      ? (u = la(l.min, l.max - r, a.min))
      : r > c && (u = la(a.min, a.max - c, l.min)),
    mn(0, 1, u)
  );
}
function KT(a, l) {
  const u = {};
  return (
    l.min !== void 0 && (u.min = l.min - a.min),
    l.max !== void 0 && (u.max = l.max - a.min),
    u
  );
}
const Xo = 0.35;
function JT(a = Xo) {
  return (
    a === !1 ? (a = 0) : a === !0 && (a = Xo),
    { x: iy(a, "left", "right"), y: iy(a, "top", "bottom") }
  );
}
function iy(a, l, u) {
  return { min: ay(a, l), max: ay(a, u) };
}
function ay(a, l) {
  return typeof a == "number" ? a : a[l] || 0;
}
const PT = new WeakMap();
class kT {
  constructor(l) {
    (this.openDragLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = Ut()),
      (this.visualElement = l);
  }
  start(l, { snapToCursor: u = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1) return;
    const c = (v) => {
        const { dragSnapToOrigin: T } = this.getProps();
        T ? this.pauseAnimation() : this.stopAnimation(),
          u && this.snapToCursor(Dl(v).point);
      },
      d = (v, T) => {
        const { drag: D, dragPropagation: O, onDragStart: U } = this.getProps();
        if (
          D &&
          !O &&
          (this.openDragLock && this.openDragLock(),
          (this.openDragLock = RT(D)),
          !this.openDragLock)
        )
          return;
        (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          Ue((j) => {
            let H = this.getAxisMotionValue(j).get() || 0;
            if (Ke.test(H)) {
              const { projection: q } = this.visualElement;
              if (q && q.layout) {
                const Q = q.layout.layoutBox[j];
                Q && (H = le(Q) * (parseFloat(H) / 100));
              }
            }
            this.originPoint[j] = H;
          }),
          U && Et.postRender(() => U(v, T)),
          zo(this.visualElement, "transform");
        const { animationState: B } = this.visualElement;
        B && B.setActive("whileDrag", !0);
      },
      h = (v, T) => {
        const {
          dragPropagation: D,
          dragDirectionLock: O,
          onDirectionLock: U,
          onDrag: B,
        } = this.getProps();
        if (!D && !this.openDragLock) return;
        const { offset: j } = T;
        if (O && this.currentDirection === null) {
          (this.currentDirection = FT(j)),
            this.currentDirection !== null && U && U(this.currentDirection);
          return;
        }
        this.updateAxis("x", T.point, j),
          this.updateAxis("y", T.point, j),
          this.visualElement.render(),
          B && B(v, T);
      },
      p = (v, T) => this.stop(v, T),
      m = () =>
        Ue((v) => {
          var T;
          return (
            this.getAnimationState(v) === "paused" &&
            ((T = this.getAxisMotionValue(v).animation) === null || T === void 0
              ? void 0
              : T.play())
          );
        }),
      { dragSnapToOrigin: y } = this.getProps();
    this.panSession = new Jp(
      l,
      {
        onSessionStart: c,
        onStart: d,
        onMove: h,
        onSessionEnd: p,
        resumeAnimation: m,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: y,
      }
    );
  }
  stop(l, u) {
    const r = this.isDragging;
    if ((this.cancel(), !r)) return;
    const { velocity: c } = u;
    this.startAnimation(c);
    const { onDragEnd: d } = this.getProps();
    d && Et.postRender(() => d(l, u));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: l, animationState: u } = this.visualElement;
    l && (l.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0);
    const { dragPropagation: r } = this.getProps();
    !r &&
      this.openDragLock &&
      (this.openDragLock(), (this.openDragLock = null)),
      u && u.setActive("whileDrag", !1);
  }
  updateAxis(l, u, r) {
    const { drag: c } = this.getProps();
    if (!r || !Ys(l, c, this.currentDirection)) return;
    const d = this.getAxisMotionValue(l);
    let h = this.originPoint[l] + r[l];
    this.constraints &&
      this.constraints[l] &&
      (h = GT(h, this.constraints[l], this.elastic[l])),
      d.set(h);
  }
  resolveConstraints() {
    var l;
    const { dragConstraints: u, dragElastic: r } = this.getProps(),
      c =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (l = this.visualElement.projection) === null || l === void 0
          ? void 0
          : l.layout,
      d = this.constraints;
    u && $i(u)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : u && c
      ? (this.constraints = XT(c.layoutBox, u))
      : (this.constraints = !1),
      (this.elastic = JT(r)),
      d !== this.constraints &&
        c &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        Ue((h) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(h) &&
            (this.constraints[h] = KT(c.layoutBox[h], this.constraints[h]));
        });
  }
  resolveRefConstraints() {
    const { dragConstraints: l, onMeasureDragConstraints: u } = this.getProps();
    if (!l || !$i(l)) return !1;
    const r = l.current,
      { projection: c } = this.visualElement;
    if (!c || !c.layout) return !1;
    const d = jT(r, c.root, this.visualElement.getTransformPagePoint());
    let h = QT(c.layout.layoutBox, d);
    if (u) {
      const p = u(VT(h));
      (this.hasMutatedConstraints = !!p), p && (h = Yp(p));
    }
    return h;
  }
  startAnimation(l) {
    const {
        drag: u,
        dragMomentum: r,
        dragElastic: c,
        dragTransition: d,
        dragSnapToOrigin: h,
        onDragTransitionEnd: p,
      } = this.getProps(),
      m = this.constraints || {},
      y = Ue((v) => {
        if (!Ys(v, u, this.currentDirection)) return;
        let T = (m && m[v]) || {};
        h && (T = { min: 0, max: 0 });
        const D = c ? 200 : 1e6,
          O = c ? 40 : 1e7,
          U = {
            type: "inertia",
            velocity: r ? l[v] : 0,
            bounceStiffness: D,
            bounceDamping: O,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...d,
            ...T,
          };
        return this.startAxisValueAnimation(v, U);
      });
    return Promise.all(y).then(p);
  }
  startAxisValueAnimation(l, u) {
    const r = this.getAxisMotionValue(l);
    return (
      zo(this.visualElement, l), r.start(Dc(l, r, 0, u, this.visualElement, !1))
    );
  }
  stopAnimation() {
    Ue((l) => this.getAxisMotionValue(l).stop());
  }
  pauseAnimation() {
    Ue((l) => {
      var u;
      return (u = this.getAxisMotionValue(l).animation) === null || u === void 0
        ? void 0
        : u.pause();
    });
  }
  getAnimationState(l) {
    var u;
    return (u = this.getAxisMotionValue(l).animation) === null || u === void 0
      ? void 0
      : u.state;
  }
  getAxisMotionValue(l) {
    const u = `_drag${l.toUpperCase()}`,
      r = this.visualElement.getProps(),
      c = r[u];
    return (
      c ||
      this.visualElement.getValue(l, (r.initial ? r.initial[l] : void 0) || 0)
    );
  }
  snapToCursor(l) {
    Ue((u) => {
      const { drag: r } = this.getProps();
      if (!Ys(u, r, this.currentDirection)) return;
      const { projection: c } = this.visualElement,
        d = this.getAxisMotionValue(u);
      if (c && c.layout) {
        const { min: h, max: p } = c.layout.layoutBox[u];
        d.set(l[u] - Rt(h, p, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: l, dragConstraints: u } = this.getProps(),
      { projection: r } = this.visualElement;
    if (!$i(u) || !r || !this.constraints) return;
    this.stopAnimation();
    const c = { x: 0, y: 0 };
    Ue((h) => {
      const p = this.getAxisMotionValue(h);
      if (p && this.constraints !== !1) {
        const m = p.get();
        c[h] = ZT({ min: m, max: m }, this.constraints[h]);
      }
    });
    const { transformTemplate: d } = this.visualElement.getProps();
    (this.visualElement.current.style.transform = d ? d({}, "") : "none"),
      r.root && r.root.updateScroll(),
      r.updateLayout(),
      this.resolveConstraints(),
      Ue((h) => {
        if (!Ys(h, l, null)) return;
        const p = this.getAxisMotionValue(h),
          { min: m, max: y } = this.constraints[h];
        p.set(Rt(m, y, c[h]));
      });
  }
  addListeners() {
    if (!this.visualElement.current) return;
    PT.set(this.visualElement, this);
    const l = this.visualElement.current,
      u = ta(l, "pointerdown", (m) => {
        const { drag: y, dragListener: v = !0 } = this.getProps();
        y && v && this.start(m);
      }),
      r = () => {
        const { dragConstraints: m } = this.getProps();
        $i(m) && m.current && (this.constraints = this.resolveRefConstraints());
      },
      { projection: c } = this.visualElement,
      d = c.addEventListener("measure", r);
    c && !c.layout && (c.root && c.root.updateScroll(), c.updateLayout()),
      Et.read(r);
    const h = Tl(window, "resize", () => this.scalePositionWithinConstraints()),
      p = c.addEventListener(
        "didUpdate",
        ({ delta: m, hasLayoutChanged: y }) => {
          this.isDragging &&
            y &&
            (Ue((v) => {
              const T = this.getAxisMotionValue(v);
              T &&
                ((this.originPoint[v] += m[v].translate),
                T.set(T.get() + m[v].translate));
            }),
            this.visualElement.render());
        }
      );
    return () => {
      h(), u(), d(), p && p();
    };
  }
  getProps() {
    const l = this.visualElement.getProps(),
      {
        drag: u = !1,
        dragDirectionLock: r = !1,
        dragPropagation: c = !1,
        dragConstraints: d = !1,
        dragElastic: h = Xo,
        dragMomentum: p = !0,
      } = l;
    return {
      ...l,
      drag: u,
      dragDirectionLock: r,
      dragPropagation: c,
      dragConstraints: d,
      dragElastic: h,
      dragMomentum: p,
    };
  }
}
function Ys(a, l, u) {
  return (l === !0 || l === a) && (u === null || u === a);
}
function FT(a, l = 10) {
  let u = null;
  return Math.abs(a.y) > l ? (u = "y") : Math.abs(a.x) > l && (u = "x"), u;
}
class WT extends Gn {
  constructor(l) {
    super(l),
      (this.removeGroupControls = pe),
      (this.removeListeners = pe),
      (this.controls = new kT(l));
  }
  mount() {
    const { dragControls: l } = this.node.getProps();
    l && (this.removeGroupControls = l.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || pe);
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const ly = (a) => (l, u) => {
  a && Et.postRender(() => a(l, u));
};
class $T extends Gn {
  constructor() {
    super(...arguments), (this.removePointerDownListener = pe);
  }
  onPointerDown(l) {
    this.session = new Jp(l, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: l,
      onPanStart: u,
      onPan: r,
      onPanEnd: c,
    } = this.node.getProps();
    return {
      onSessionStart: ly(l),
      onStart: ly(u),
      onMove: r,
      onEnd: (d, h) => {
        delete this.session, c && Et.postRender(() => c(d, h));
      },
    };
  }
  mount() {
    this.removePointerDownListener = ta(this.node.current, "pointerdown", (l) =>
      this.onPointerDown(l)
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const Qs = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function sy(a, l) {
  return l.max === l.min ? 0 : (a / (l.max - l.min)) * 100;
}
const rl = {
    correct: (a, l) => {
      if (!l.target) return a;
      if (typeof a == "string")
        if (W.test(a)) a = parseFloat(a);
        else return a;
      const u = sy(a, l.target.x),
        r = sy(a, l.target.y);
      return `${u}% ${r}%`;
    },
  },
  IT = {
    correct: (a, { treeScale: l, projectionDelta: u }) => {
      const r = a,
        c = Yn.parse(a);
      if (c.length > 5) return r;
      const d = Yn.createTransformer(a),
        h = typeof c[0] != "number" ? 1 : 0,
        p = u.x.scale * l.x,
        m = u.y.scale * l.y;
      (c[0 + h] /= p), (c[1 + h] /= m);
      const y = Rt(p, m, 0.5);
      return (
        typeof c[2 + h] == "number" && (c[2 + h] /= y),
        typeof c[3 + h] == "number" && (c[3 + h] /= y),
        d(c)
      );
    },
  };
class tb extends tt.Component {
  componentDidMount() {
    const {
        visualElement: l,
        layoutGroup: u,
        switchLayoutGroup: r,
        layoutId: c,
      } = this.props,
      { projection: d } = l;
    f1(eb),
      d &&
        (u.group && u.group.add(d),
        r && r.register && c && r.register(d),
        d.root.didUpdate(),
        d.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        d.setOptions({
          ...d.options,
          onExitComplete: () => this.safeToRemove(),
        })),
      (Qs.hasEverUpdated = !0);
  }
  getSnapshotBeforeUpdate(l) {
    const {
        layoutDependency: u,
        visualElement: r,
        drag: c,
        isPresent: d,
      } = this.props,
      h = r.projection;
    return (
      h &&
        ((h.isPresent = d),
        c || l.layoutDependency !== u || u === void 0
          ? h.willUpdate()
          : this.safeToRemove(),
        l.isPresent !== d &&
          (d
            ? h.promote()
            : h.relegate() ||
              Et.postRender(() => {
                const p = h.getStack();
                (!p || !p.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: l } = this.props.visualElement;
    l &&
      (l.root.didUpdate(),
      $o.postRender(() => {
        !l.currentAnimation && l.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: l,
        layoutGroup: u,
        switchLayoutGroup: r,
      } = this.props,
      { projection: c } = l;
    c &&
      (c.scheduleCheckAfterUnmount(),
      u && u.group && u.group.remove(c),
      r && r.deregister && r.deregister(c));
  }
  safeToRemove() {
    const { safeToRemove: l } = this.props;
    l && l();
  }
  render() {
    return null;
  }
}
function kp(a) {
  const [l, u] = Gv(),
    r = tt.useContext(By);
  return Bt.jsx(tb, {
    ...a,
    layoutGroup: r,
    switchLayoutGroup: tt.useContext(Gy),
    isPresent: l,
    safeToRemove: u,
  });
}
const eb = {
  borderRadius: {
    ...rl,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius",
    ],
  },
  borderTopLeftRadius: rl,
  borderTopRightRadius: rl,
  borderBottomLeftRadius: rl,
  borderBottomRightRadius: rl,
  boxShadow: IT,
};
function nb(a, l, u) {
  const r = te(a) ? a : vl(a);
  return r.start(Dc("", r, l, u)), r.animation;
}
function ib(a) {
  return a instanceof SVGElement && a.tagName !== "svg";
}
const ab = (a, l) => a.depth - l.depth;
class lb {
  constructor() {
    (this.children = []), (this.isDirty = !1);
  }
  add(l) {
    cc(this.children, l), (this.isDirty = !0);
  }
  remove(l) {
    fc(this.children, l), (this.isDirty = !0);
  }
  forEach(l) {
    this.isDirty && this.children.sort(ab),
      (this.isDirty = !1),
      this.children.forEach(l);
  }
}
function sb(a, l) {
  const u = Je.now(),
    r = ({ timestamp: c }) => {
      const d = c - u;
      d >= l && (qn(r), a(d - l));
    };
  return Et.read(r, !0), () => qn(r);
}
const Fp = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  ub = Fp.length,
  uy = (a) => (typeof a == "string" ? parseFloat(a) : a),
  ry = (a) => typeof a == "number" || W.test(a);
function rb(a, l, u, r, c, d) {
  c
    ? ((a.opacity = Rt(0, u.opacity !== void 0 ? u.opacity : 1, ob(r))),
      (a.opacityExit = Rt(l.opacity !== void 0 ? l.opacity : 1, 0, cb(r))))
    : d &&
      (a.opacity = Rt(
        l.opacity !== void 0 ? l.opacity : 1,
        u.opacity !== void 0 ? u.opacity : 1,
        r
      ));
  for (let h = 0; h < ub; h++) {
    const p = `border${Fp[h]}Radius`;
    let m = oy(l, p),
      y = oy(u, p);
    if (m === void 0 && y === void 0) continue;
    m || (m = 0),
      y || (y = 0),
      m === 0 || y === 0 || ry(m) === ry(y)
        ? ((a[p] = Math.max(Rt(uy(m), uy(y), r), 0)),
          (Ke.test(y) || Ke.test(m)) && (a[p] += "%"))
        : (a[p] = y);
  }
  (l.rotate || u.rotate) && (a.rotate = Rt(l.rotate || 0, u.rotate || 0, r));
}
function oy(a, l) {
  return a[l] !== void 0 ? a[l] : a.borderRadius;
}
const ob = Wp(0, 0.5, dp),
  cb = Wp(0.5, 0.95, pe);
function Wp(a, l, u) {
  return (r) => (r < a ? 0 : r > l ? 1 : u(la(a, l, r)));
}
function cy(a, l) {
  (a.min = l.min), (a.max = l.max);
}
function _e(a, l) {
  cy(a.x, l.x), cy(a.y, l.y);
}
function fy(a, l) {
  (a.translate = l.translate),
    (a.scale = l.scale),
    (a.originPoint = l.originPoint),
    (a.origin = l.origin);
}
function hy(a, l, u, r, c) {
  return (
    (a -= l), (a = Fs(a, 1 / u, r)), c !== void 0 && (a = Fs(a, 1 / c, r)), a
  );
}
function fb(a, l = 0, u = 1, r = 0.5, c, d = a, h = a) {
  if (
    (Ke.test(l) &&
      ((l = parseFloat(l)), (l = Rt(h.min, h.max, l / 100) - h.min)),
    typeof l != "number")
  )
    return;
  let p = Rt(d.min, d.max, r);
  a === d && (p -= l),
    (a.min = hy(a.min, l, u, p, c)),
    (a.max = hy(a.max, l, u, p, c));
}
function dy(a, l, [u, r, c], d, h) {
  fb(a, l[u], l[r], l[c], l.scale, d, h);
}
const hb = ["x", "scaleX", "originX"],
  db = ["y", "scaleY", "originY"];
function my(a, l, u, r) {
  dy(a.x, l, hb, u ? u.x : void 0, r ? r.x : void 0),
    dy(a.y, l, db, u ? u.y : void 0, r ? r.y : void 0);
}
function yy(a) {
  return a.translate === 0 && a.scale === 1;
}
function $p(a) {
  return yy(a.x) && yy(a.y);
}
function py(a, l) {
  return a.min === l.min && a.max === l.max;
}
function mb(a, l) {
  return py(a.x, l.x) && py(a.y, l.y);
}
function gy(a, l) {
  return (
    Math.round(a.min) === Math.round(l.min) &&
    Math.round(a.max) === Math.round(l.max)
  );
}
function Ip(a, l) {
  return gy(a.x, l.x) && gy(a.y, l.y);
}
function vy(a) {
  return le(a.x) / le(a.y);
}
function Sy(a, l) {
  return (
    a.translate === l.translate &&
    a.scale === l.scale &&
    a.originPoint === l.originPoint
  );
}
class yb {
  constructor() {
    this.members = [];
  }
  add(l) {
    cc(this.members, l), l.scheduleRender();
  }
  remove(l) {
    if (
      (fc(this.members, l),
      l === this.prevLead && (this.prevLead = void 0),
      l === this.lead)
    ) {
      const u = this.members[this.members.length - 1];
      u && this.promote(u);
    }
  }
  relegate(l) {
    const u = this.members.findIndex((c) => l === c);
    if (u === 0) return !1;
    let r;
    for (let c = u; c >= 0; c--) {
      const d = this.members[c];
      if (d.isPresent !== !1) {
        r = d;
        break;
      }
    }
    return r ? (this.promote(r), !0) : !1;
  }
  promote(l, u) {
    const r = this.lead;
    if (l !== r && ((this.prevLead = r), (this.lead = l), l.show(), r)) {
      r.instance && r.scheduleRender(),
        l.scheduleRender(),
        (l.resumeFrom = r),
        u && (l.resumeFrom.preserveOpacity = !0),
        r.snapshot &&
          ((l.snapshot = r.snapshot),
          (l.snapshot.latestValues = r.animationValues || r.latestValues)),
        l.root && l.root.isUpdating && (l.isLayoutDirty = !0);
      const { crossfade: c } = l.options;
      c === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((l) => {
      const { options: u, resumingFrom: r } = l;
      u.onExitComplete && u.onExitComplete(),
        r && r.options.onExitComplete && r.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((l) => {
      l.instance && l.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function pb(a, l, u) {
  let r = "";
  const c = a.x.translate / l.x,
    d = a.y.translate / l.y,
    h = (u == null ? void 0 : u.z) || 0;
  if (
    ((c || d || h) && (r = `translate3d(${c}px, ${d}px, ${h}px) `),
    (l.x !== 1 || l.y !== 1) && (r += `scale(${1 / l.x}, ${1 / l.y}) `),
    u)
  ) {
    const {
      transformPerspective: y,
      rotate: v,
      rotateX: T,
      rotateY: D,
      skewX: O,
      skewY: U,
    } = u;
    y && (r = `perspective(${y}px) ${r}`),
      v && (r += `rotate(${v}deg) `),
      T && (r += `rotateX(${T}deg) `),
      D && (r += `rotateY(${D}deg) `),
      O && (r += `skewX(${O}deg) `),
      U && (r += `skewY(${U}deg) `);
  }
  const p = a.x.scale * l.x,
    m = a.y.scale * l.y;
  return (p !== 1 || m !== 1) && (r += `scale(${p}, ${m})`), r || "none";
}
const Mo = ["", "X", "Y", "Z"],
  gb = { visibility: "hidden" },
  Ty = 1e3;
let vb = 0;
function xo(a, l, u, r) {
  const { latestValues: c } = l;
  c[a] && ((u[a] = c[a]), l.setStaticValue(a, 0), r && (r[a] = 0));
}
function t0(a) {
  if (((a.hasCheckedOptimisedAppear = !0), a.root === a)) return;
  const { visualElement: l } = a.options;
  if (!l) return;
  const u = ip(l);
  if (window.MotionHasOptimisedAnimation(u, "transform")) {
    const { layout: c, layoutId: d } = a.options;
    window.MotionCancelOptimisedAnimation(u, "transform", Et, !(c || d));
  }
  const { parent: r } = a;
  r && !r.hasCheckedOptimisedAppear && t0(r);
}
function e0({
  attachResizeListener: a,
  defaultParent: l,
  measureScroll: u,
  checkIsScrollRoot: r,
  resetTransform: c,
}) {
  return class {
    constructor(h = {}, p = l == null ? void 0 : l()) {
      (this.id = vb++),
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
            this.nodes.forEach(bb),
            this.nodes.forEach(xb),
            this.nodes.forEach(Rb),
            this.nodes.forEach(Ab);
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = h),
        (this.root = p ? p.root || p : this),
        (this.path = p ? [...p.path, p] : []),
        (this.parent = p),
        (this.depth = p ? p.depth + 1 : 0);
      for (let m = 0; m < this.path.length; m++)
        this.path[m].shouldResetTransform = !0;
      this.root === this && (this.nodes = new lb());
    }
    addEventListener(h, p) {
      return (
        this.eventHandlers.has(h) || this.eventHandlers.set(h, new hc()),
        this.eventHandlers.get(h).add(p)
      );
    }
    notifyListeners(h, ...p) {
      const m = this.eventHandlers.get(h);
      m && m.notify(...p);
    }
    hasListeners(h) {
      return this.eventHandlers.has(h);
    }
    mount(h, p = this.root.hasTreeAnimated) {
      if (this.instance) return;
      (this.isSVG = ib(h)), (this.instance = h);
      const { layoutId: m, layout: y, visualElement: v } = this.options;
      if (
        (v && !v.current && v.mount(h),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        p && (y || m) && (this.isLayoutDirty = !0),
        a)
      ) {
        let T;
        const D = () => (this.root.updateBlockedByResize = !1);
        a(h, () => {
          (this.root.updateBlockedByResize = !0),
            T && T(),
            (T = sb(D, 250)),
            Qs.hasAnimatedSinceResize &&
              ((Qs.hasAnimatedSinceResize = !1), this.nodes.forEach(Ay));
        });
      }
      m && this.root.registerSharedNode(m, this),
        this.options.animate !== !1 &&
          v &&
          (m || y) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: T,
              hasLayoutChanged: D,
              hasRelativeLayoutChanged: O,
              layout: U,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                (this.target = void 0), (this.relativeTarget = void 0);
                return;
              }
              const B =
                  this.options.transition || v.getDefaultTransition() || _b,
                { onLayoutAnimationStart: j, onLayoutAnimationComplete: H } =
                  v.getProps(),
                q = !this.targetLayout || !Ip(this.targetLayout, U),
                Q = !D && O;
              if (
                this.options.layoutRoot ||
                this.resumeFrom ||
                Q ||
                (D && (q || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(T, Q);
                const ot = { ...oc(B, "layout"), onPlay: j, onComplete: H };
                (v.shouldReduceMotion || this.options.layoutRoot) &&
                  ((ot.delay = 0), (ot.type = !1)),
                  this.startAnimation(ot);
              } else
                D || Ay(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete();
              this.targetLayout = U;
            }
          );
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const h = this.getStack();
      h && h.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        qn(this.updateProjection);
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
        this.nodes && this.nodes.forEach(Ob),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: h } = this.options;
      return h && h.getProps().transformTemplate;
    }
    willUpdate(h = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (window.MotionCancelOptimisedAnimation &&
          !this.hasCheckedOptimisedAppear &&
          t0(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let v = 0; v < this.path.length; v++) {
        const T = this.path[v];
        (T.shouldResetTransform = !0),
          T.updateScroll("snapshot"),
          T.options.layoutRoot && T.willUpdate(!1);
      }
      const { layoutId: p, layout: m } = this.options;
      if (p === void 0 && !m) return;
      const y = this.getTransformTemplate();
      (this.prevTransformTemplateValue = y ? y(this.latestValues, "") : void 0),
        this.updateSnapshot(),
        h && this.notifyListeners("willUpdate");
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(by);
        return;
      }
      this.isUpdating || this.nodes.forEach(Db),
        (this.isUpdating = !1),
        this.nodes.forEach(Mb),
        this.nodes.forEach(Sb),
        this.nodes.forEach(Tb),
        this.clearAllSnapshots();
      const p = Je.now();
      (kt.delta = mn(0, 1e3 / 60, p - kt.timestamp)),
        (kt.timestamp = p),
        (kt.isProcessing = !0),
        vo.update.process(kt),
        vo.preRender.process(kt),
        vo.render.process(kt),
        (kt.isProcessing = !1);
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), $o.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(Eb), this.sharedNodes.forEach(Vb);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        Et.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      Et.postRender(() => {
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
          !le(this.snapshot.measuredBox.x) &&
          !le(this.snapshot.measuredBox.y) &&
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
        for (let m = 0; m < this.path.length; m++) this.path[m].updateScroll();
      const h = this.layout;
      (this.layout = this.measure(!1)),
        (this.layoutCorrected = Ut()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: p } = this.options;
      p &&
        p.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          h ? h.layoutBox : void 0
        );
    }
    updateScroll(h = "measure") {
      let p = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === h &&
          (p = !1),
        p)
      ) {
        const m = r(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: h,
          isRoot: m,
          offset: u(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : m,
        };
      }
    }
    resetTransform() {
      if (!c) return;
      const h =
          this.isLayoutDirty ||
          this.shouldResetTransform ||
          this.options.alwaysMeasureLayout,
        p = this.projectionDelta && !$p(this.projectionDelta),
        m = this.getTransformTemplate(),
        y = m ? m(this.latestValues, "") : void 0,
        v = y !== this.prevTransformTemplateValue;
      h &&
        (p || hi(this.latestValues) || v) &&
        (c(this.instance, y),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(h = !0) {
      const p = this.measurePageBox();
      let m = this.removeElementScroll(p);
      return (
        h && (m = this.removeTransform(m)),
        Ub(m),
        {
          animationId: this.root.animationId,
          measuredBox: p,
          layoutBox: m,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      var h;
      const { visualElement: p } = this.options;
      if (!p) return Ut();
      const m = p.measureViewportBox();
      if (
        !(
          ((h = this.scroll) === null || h === void 0 ? void 0 : h.wasRoot) ||
          this.path.some(Bb)
        )
      ) {
        const { scroll: v } = this.root;
        v && (na(m.x, v.offset.x), na(m.y, v.offset.y));
      }
      return m;
    }
    removeElementScroll(h) {
      var p;
      const m = Ut();
      if (
        (_e(m, h), !((p = this.scroll) === null || p === void 0) && p.wasRoot)
      )
        return m;
      for (let y = 0; y < this.path.length; y++) {
        const v = this.path[y],
          { scroll: T, options: D } = v;
        v !== this.root &&
          T &&
          D.layoutScroll &&
          (T.wasRoot && _e(m, h), na(m.x, T.offset.x), na(m.y, T.offset.y));
      }
      return m;
    }
    applyTransform(h, p = !1) {
      const m = Ut();
      _e(m, h);
      for (let y = 0; y < this.path.length; y++) {
        const v = this.path[y];
        !p &&
          v.options.layoutScroll &&
          v.scroll &&
          v !== v.root &&
          ia(m, { x: -v.scroll.offset.x, y: -v.scroll.offset.y }),
          hi(v.latestValues) && ia(m, v.latestValues);
      }
      return hi(this.latestValues) && ia(m, this.latestValues), m;
    }
    removeTransform(h) {
      const p = Ut();
      _e(p, h);
      for (let m = 0; m < this.path.length; m++) {
        const y = this.path[m];
        if (!y.instance || !hi(y.latestValues)) continue;
        Yo(y.latestValues) && y.updateSnapshot();
        const v = Ut(),
          T = y.measurePageBox();
        _e(v, T),
          my(p, y.latestValues, y.snapshot ? y.snapshot.layoutBox : void 0, v);
      }
      return hi(this.latestValues) && my(p, this.latestValues), p;
    }
    setTargetDelta(h) {
      (this.targetDelta = h),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0);
    }
    setOptions(h) {
      this.options = {
        ...this.options,
        ...h,
        crossfade: h.crossfade !== void 0 ? h.crossfade : !0,
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
        this.relativeParent.resolvedRelativeTargetAt !== kt.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(h = !1) {
      var p;
      const m = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = m.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = m.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = m.isSharedProjectionDirty);
      const y = !!this.resumingFrom || this !== m;
      if (
        !(
          h ||
          (y && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          (!((p = this.parent) === null || p === void 0) &&
            p.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget ||
          this.root.updateBlockedByResize
        )
      )
        return;
      const { layout: T, layoutId: D } = this.options;
      if (!(!this.layout || !(T || D))) {
        if (
          ((this.resolvedRelativeTargetAt = kt.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const O = this.getClosestProjectingParent();
          O && O.layout && this.animationProgress !== 1
            ? ((this.relativeParent = O),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = Ut()),
              (this.relativeTargetOrigin = Ut()),
              dl(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                O.layout.layoutBox
              ),
              _e(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (
          !(!this.relativeTarget && !this.targetDelta) &&
          (this.target ||
            ((this.target = Ut()), (this.targetWithTransforms = Ut())),
          this.relativeTarget &&
          this.relativeTargetOrigin &&
          this.relativeParent &&
          this.relativeParent.target
            ? (this.forceRelativeParentToResolveTarget(),
              HT(this.target, this.relativeTarget, this.relativeParent.target))
            : this.targetDelta
            ? (this.resumingFrom
                ? (this.target = this.applyTransform(this.layout.layoutBox))
                : _e(this.target, this.layout.layoutBox),
              Zp(this.target, this.targetDelta))
            : _e(this.target, this.layout.layoutBox),
          this.attemptToResolveRelativeTarget)
        ) {
          this.attemptToResolveRelativeTarget = !1;
          const O = this.getClosestProjectingParent();
          O &&
          !!O.resumingFrom == !!this.resumingFrom &&
          !O.options.layoutScroll &&
          O.target &&
          this.animationProgress !== 1
            ? ((this.relativeParent = O),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = Ut()),
              (this.relativeTargetOrigin = Ut()),
              dl(this.relativeTargetOrigin, this.target, O.target),
              _e(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          Yo(this.parent.latestValues) ||
          Qp(this.parent.latestValues)
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
      var h;
      const p = this.getLead(),
        m = !!this.resumingFrom || this !== p;
      let y = !0;
      if (
        ((this.isProjectionDirty ||
          (!((h = this.parent) === null || h === void 0) &&
            h.isProjectionDirty)) &&
          (y = !1),
        m &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (y = !1),
        this.resolvedRelativeTargetAt === kt.timestamp && (y = !1),
        y)
      )
        return;
      const { layout: v, layoutId: T } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(v || T))
      )
        return;
      _e(this.layoutCorrected, this.layout.layoutBox);
      const D = this.treeScale.x,
        O = this.treeScale.y;
      LT(this.layoutCorrected, this.treeScale, this.path, m),
        p.layout &&
          !p.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((p.target = p.layout.layoutBox), (p.targetWithTransforms = Ut()));
      const { target: U } = p;
      if (!U) {
        this.prevProjectionDelta &&
          (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (fy(this.prevProjectionDelta.x, this.projectionDelta.x),
          fy(this.prevProjectionDelta.y, this.projectionDelta.y)),
        hl(this.projectionDelta, this.layoutCorrected, U, this.latestValues),
        (this.treeScale.x !== D ||
          this.treeScale.y !== O ||
          !Sy(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !Sy(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", U));
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(h = !0) {
      var p;
      if (
        ((p = this.options.visualElement) === null ||
          p === void 0 ||
          p.scheduleRender(),
        h)
      ) {
        const m = this.getStack();
        m && m.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      (this.prevProjectionDelta = ea()),
        (this.projectionDelta = ea()),
        (this.projectionDeltaWithTransform = ea());
    }
    setAnimationOrigin(h, p = !1) {
      const m = this.snapshot,
        y = m ? m.latestValues : {},
        v = { ...this.latestValues },
        T = ea();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !p);
      const D = Ut(),
        O = m ? m.source : void 0,
        U = this.layout ? this.layout.source : void 0,
        B = O !== U,
        j = this.getStack(),
        H = !j || j.members.length <= 1,
        q = !!(B && !H && this.options.crossfade === !0 && !this.path.some(zb));
      this.animationProgress = 0;
      let Q;
      (this.mixTargetDelta = (ot) => {
        const L = ot / 1e3;
        Ey(T.x, h.x, L),
          Ey(T.y, h.y, L),
          this.setTargetDelta(T),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (dl(D, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            Cb(this.relativeTarget, this.relativeTargetOrigin, D, L),
            Q && mb(this.relativeTarget, Q) && (this.isProjectionDirty = !1),
            Q || (Q = Ut()),
            _e(Q, this.relativeTarget)),
          B &&
            ((this.animationValues = v), rb(v, y, this.latestValues, L, q, H)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = L);
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(h) {
      this.notifyListeners("animationStart"),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom &&
          this.resumingFrom.currentAnimation &&
          this.resumingFrom.currentAnimation.stop(),
        this.pendingAnimation &&
          (qn(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = Et.update(() => {
          (Qs.hasAnimatedSinceResize = !0),
            (this.currentAnimation = nb(0, Ty, {
              ...h,
              onUpdate: (p) => {
                this.mixTargetDelta(p), h.onUpdate && h.onUpdate(p);
              },
              onStop: () => {},
              onComplete: () => {
                h.onComplete && h.onComplete(), this.completeAnimation();
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
      const h = this.getStack();
      h && h.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(Ty),
        this.currentAnimation.stop()),
        this.completeAnimation();
    }
    applyTransformsToTarget() {
      const h = this.getLead();
      let {
        targetWithTransforms: p,
        target: m,
        layout: y,
        latestValues: v,
      } = h;
      if (!(!p || !m || !y)) {
        if (
          this !== h &&
          this.layout &&
          y &&
          n0(this.options.animationType, this.layout.layoutBox, y.layoutBox)
        ) {
          m = this.target || Ut();
          const T = le(this.layout.layoutBox.x);
          (m.x.min = h.target.x.min), (m.x.max = m.x.min + T);
          const D = le(this.layout.layoutBox.y);
          (m.y.min = h.target.y.min), (m.y.max = m.y.min + D);
        }
        _e(p, m),
          ia(p, v),
          hl(this.projectionDeltaWithTransform, this.layoutCorrected, p, v);
      }
    }
    registerSharedNode(h, p) {
      this.sharedNodes.has(h) || this.sharedNodes.set(h, new yb()),
        this.sharedNodes.get(h).add(p);
      const y = p.options.initialPromotionConfig;
      p.promote({
        transition: y ? y.transition : void 0,
        preserveFollowOpacity:
          y && y.shouldPreserveFollowOpacity
            ? y.shouldPreserveFollowOpacity(p)
            : void 0,
      });
    }
    isLead() {
      const h = this.getStack();
      return h ? h.lead === this : !0;
    }
    getLead() {
      var h;
      const { layoutId: p } = this.options;
      return p
        ? ((h = this.getStack()) === null || h === void 0 ? void 0 : h.lead) ||
            this
        : this;
    }
    getPrevLead() {
      var h;
      const { layoutId: p } = this.options;
      return p
        ? (h = this.getStack()) === null || h === void 0
          ? void 0
          : h.prevLead
        : void 0;
    }
    getStack() {
      const { layoutId: h } = this.options;
      if (h) return this.root.sharedNodes.get(h);
    }
    promote({ needsReset: h, transition: p, preserveFollowOpacity: m } = {}) {
      const y = this.getStack();
      y && y.promote(this, m),
        h && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        p && this.setOptions({ transition: p });
    }
    relegate() {
      const h = this.getStack();
      return h ? h.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: h } = this.options;
      if (!h) return;
      let p = !1;
      const { latestValues: m } = h;
      if (
        ((m.z ||
          m.rotate ||
          m.rotateX ||
          m.rotateY ||
          m.rotateZ ||
          m.skewX ||
          m.skewY) &&
          (p = !0),
        !p)
      )
        return;
      const y = {};
      m.z && xo("z", h, y, this.animationValues);
      for (let v = 0; v < Mo.length; v++)
        xo(`rotate${Mo[v]}`, h, y, this.animationValues),
          xo(`skew${Mo[v]}`, h, y, this.animationValues);
      h.render();
      for (const v in y)
        h.setStaticValue(v, y[v]),
          this.animationValues && (this.animationValues[v] = y[v]);
      h.scheduleRender();
    }
    getProjectionStyles(h) {
      var p, m;
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) return gb;
      const y = { visibility: "" },
        v = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (y.opacity = ""),
          (y.pointerEvents = Gs(h == null ? void 0 : h.pointerEvents) || ""),
          (y.transform = v ? v(this.latestValues, "") : "none"),
          y
        );
      const T = this.getLead();
      if (!this.projectionDelta || !this.layout || !T.target) {
        const B = {};
        return (
          this.options.layoutId &&
            ((B.opacity =
              this.latestValues.opacity !== void 0
                ? this.latestValues.opacity
                : 1),
            (B.pointerEvents = Gs(h == null ? void 0 : h.pointerEvents) || "")),
          this.hasProjected &&
            !hi(this.latestValues) &&
            ((B.transform = v ? v({}, "") : "none"), (this.hasProjected = !1)),
          B
        );
      }
      const D = T.animationValues || T.latestValues;
      this.applyTransformsToTarget(),
        (y.transform = pb(
          this.projectionDeltaWithTransform,
          this.treeScale,
          D
        )),
        v && (y.transform = v(D, y.transform));
      const { x: O, y: U } = this.projectionDelta;
      (y.transformOrigin = `${O.origin * 100}% ${U.origin * 100}% 0`),
        T.animationValues
          ? (y.opacity =
              T === this
                ? (m =
                    (p = D.opacity) !== null && p !== void 0
                      ? p
                      : this.latestValues.opacity) !== null && m !== void 0
                  ? m
                  : 1
                : this.preserveOpacity
                ? this.latestValues.opacity
                : D.opacityExit)
          : (y.opacity =
              T === this
                ? D.opacity !== void 0
                  ? D.opacity
                  : ""
                : D.opacityExit !== void 0
                ? D.opacityExit
                : 0);
      for (const B in yl) {
        if (D[B] === void 0) continue;
        const { correct: j, applyTo: H, isCSSVariable: q } = yl[B],
          Q = y.transform === "none" ? D[B] : j(D[B], T);
        if (H) {
          const ot = H.length;
          for (let L = 0; L < ot; L++) y[H[L]] = Q;
        } else
          q ? (this.options.visualElement.renderState.vars[B] = Q) : (y[B] = Q);
      }
      return (
        this.options.layoutId &&
          (y.pointerEvents =
            T === this
              ? Gs(h == null ? void 0 : h.pointerEvents) || ""
              : "none"),
        y
      );
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((h) => {
        var p;
        return (p = h.currentAnimation) === null || p === void 0
          ? void 0
          : p.stop();
      }),
        this.root.nodes.forEach(by),
        this.root.sharedNodes.clear();
    }
  };
}
function Sb(a) {
  a.updateLayout();
}
function Tb(a) {
  var l;
  const u =
    ((l = a.resumeFrom) === null || l === void 0 ? void 0 : l.snapshot) ||
    a.snapshot;
  if (a.isLead() && a.layout && u && a.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: c } = a.layout,
      { animationType: d } = a.options,
      h = u.source !== a.layout.source;
    d === "size"
      ? Ue((T) => {
          const D = h ? u.measuredBox[T] : u.layoutBox[T],
            O = le(D);
          (D.min = r[T].min), (D.max = D.min + O);
        })
      : n0(d, u.layoutBox, r) &&
        Ue((T) => {
          const D = h ? u.measuredBox[T] : u.layoutBox[T],
            O = le(r[T]);
          (D.max = D.min + O),
            a.relativeTarget &&
              !a.currentAnimation &&
              ((a.isProjectionDirty = !0),
              (a.relativeTarget[T].max = a.relativeTarget[T].min + O));
        });
    const p = ea();
    hl(p, r, u.layoutBox);
    const m = ea();
    h ? hl(m, a.applyTransform(c, !0), u.measuredBox) : hl(m, r, u.layoutBox);
    const y = !$p(p);
    let v = !1;
    if (!a.resumeFrom) {
      const T = a.getClosestProjectingParent();
      if (T && !T.resumeFrom) {
        const { snapshot: D, layout: O } = T;
        if (D && O) {
          const U = Ut();
          dl(U, u.layoutBox, D.layoutBox);
          const B = Ut();
          dl(B, r, O.layoutBox),
            Ip(U, B) || (v = !0),
            T.options.layoutRoot &&
              ((a.relativeTarget = B),
              (a.relativeTargetOrigin = U),
              (a.relativeParent = T));
        }
      }
    }
    a.notifyListeners("didUpdate", {
      layout: r,
      snapshot: u,
      delta: m,
      layoutDelta: p,
      hasLayoutChanged: y,
      hasRelativeLayoutChanged: v,
    });
  } else if (a.isLead()) {
    const { onExitComplete: r } = a.options;
    r && r();
  }
  a.options.transition = void 0;
}
function bb(a) {
  a.parent &&
    (a.isProjecting() || (a.isProjectionDirty = a.parent.isProjectionDirty),
    a.isSharedProjectionDirty ||
      (a.isSharedProjectionDirty = !!(
        a.isProjectionDirty ||
        a.parent.isProjectionDirty ||
        a.parent.isSharedProjectionDirty
      )),
    a.isTransformDirty || (a.isTransformDirty = a.parent.isTransformDirty));
}
function Ab(a) {
  a.isProjectionDirty = a.isSharedProjectionDirty = a.isTransformDirty = !1;
}
function Eb(a) {
  a.clearSnapshot();
}
function by(a) {
  a.clearMeasurements();
}
function Db(a) {
  a.isLayoutDirty = !1;
}
function Mb(a) {
  const { visualElement: l } = a.options;
  l && l.getProps().onBeforeLayoutMeasure && l.notify("BeforeLayoutMeasure"),
    a.resetTransform();
}
function Ay(a) {
  a.finishAnimation(),
    (a.targetDelta = a.relativeTarget = a.target = void 0),
    (a.isProjectionDirty = !0);
}
function xb(a) {
  a.resolveTargetDelta();
}
function Rb(a) {
  a.calcProjection();
}
function Ob(a) {
  a.resetSkewAndRotation();
}
function Vb(a) {
  a.removeLeadSnapshot();
}
function Ey(a, l, u) {
  (a.translate = Rt(l.translate, 0, u)),
    (a.scale = Rt(l.scale, 1, u)),
    (a.origin = l.origin),
    (a.originPoint = l.originPoint);
}
function Dy(a, l, u, r) {
  (a.min = Rt(l.min, u.min, r)), (a.max = Rt(l.max, u.max, r));
}
function Cb(a, l, u, r) {
  Dy(a.x, l.x, u.x, r), Dy(a.y, l.y, u.y, r);
}
function zb(a) {
  return a.animationValues && a.animationValues.opacityExit !== void 0;
}
const _b = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  My = (a) =>
    typeof navigator < "u" &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(a),
  xy = My("applewebkit/") && !My("chrome/") ? Math.round : pe;
function Ry(a) {
  (a.min = xy(a.min)), (a.max = xy(a.max));
}
function Ub(a) {
  Ry(a.x), Ry(a.y);
}
function n0(a, l, u) {
  return (
    a === "position" || (a === "preserve-aspect" && !NT(vy(l), vy(u), 0.2))
  );
}
function Bb(a) {
  var l;
  return (
    a !== a.root &&
    ((l = a.scroll) === null || l === void 0 ? void 0 : l.wasRoot)
  );
}
const Nb = e0({
    attachResizeListener: (a, l) => Tl(a, "resize", l),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  Ro = { current: void 0 },
  i0 = e0({
    measureScroll: (a) => ({ x: a.scrollLeft, y: a.scrollTop }),
    defaultParent: () => {
      if (!Ro.current) {
        const a = new Nb({});
        a.mount(window), a.setOptions({ layoutScroll: !0 }), (Ro.current = a);
      }
      return Ro.current;
    },
    resetTransform: (a, l) => {
      a.style.transform = l !== void 0 ? l : "none";
    },
    checkIsScrollRoot: (a) => window.getComputedStyle(a).position === "fixed",
  }),
  Hb = {
    pan: { Feature: $T },
    drag: { Feature: WT, ProjectionNode: i0, MeasureLayout: kp },
  };
function Lb(a, l, u) {
  var r;
  if (a instanceof EventTarget) return [a];
  if (typeof a == "string") {
    let c = document;
    const d = (r = void 0) !== null && r !== void 0 ? r : c.querySelectorAll(a);
    return d ? Array.from(d) : [];
  }
  return Array.from(a);
}
function a0(a, l) {
  const u = Lb(a),
    r = new AbortController(),
    c = { passive: !0, ...l, signal: r.signal };
  return [u, c, () => r.abort()];
}
function Oy(a) {
  return !(a.pointerType === "touch" || qp());
}
function jb(a, l, u = {}) {
  const [r, c, d] = a0(a, u),
    h = (p) => {
      if (!Oy(p)) return;
      const { target: m } = p,
        y = l(m, p);
      if (typeof y != "function" || !m) return;
      const v = (T) => {
        Oy(T) && (y(T), m.removeEventListener("pointerleave", v));
      };
      m.addEventListener("pointerleave", v, c);
    };
  return (
    r.forEach((p) => {
      p.addEventListener("pointerenter", h, c);
    }),
    d
  );
}
function Vy(a, l, u) {
  const { props: r } = a;
  a.animationState &&
    r.whileHover &&
    a.animationState.setActive("whileHover", u === "Start");
  const c = "onHover" + u,
    d = r[c];
  d && Et.postRender(() => d(l, Dl(l)));
}
class wb extends Gn {
  mount() {
    const { current: l } = this.node;
    l &&
      (this.unmount = jb(
        l,
        (u, r) => (Vy(this.node, r, "Start"), (c) => Vy(this.node, c, "End"))
      ));
  }
  unmount() {}
}
class qb extends Gn {
  constructor() {
    super(...arguments), (this.isActive = !1);
  }
  onFocus() {
    let l = !1;
    try {
      l = this.node.current.matches(":focus-visible");
    } catch {
      l = !0;
    }
    !l ||
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
    this.unmount = El(
      Tl(this.node.current, "focus", () => this.onFocus()),
      Tl(this.node.current, "blur", () => this.onBlur())
    );
  }
  unmount() {}
}
const l0 = (a, l) => (l ? (a === l ? !0 : l0(a, l.parentElement)) : !1),
  Yb = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function Gb(a) {
  return Yb.has(a.tagName) || a.tabIndex !== -1;
}
const cl = new WeakSet();
function Cy(a) {
  return (l) => {
    l.key === "Enter" && a(l);
  };
}
function Oo(a, l) {
  a.dispatchEvent(
    new PointerEvent("pointer" + l, { isPrimary: !0, bubbles: !0 })
  );
}
const Xb = (a, l) => {
  const u = a.currentTarget;
  if (!u) return;
  const r = Cy(() => {
    if (cl.has(u)) return;
    Oo(u, "down");
    const c = Cy(() => {
        Oo(u, "up");
      }),
      d = () => Oo(u, "cancel");
    u.addEventListener("keyup", c, l), u.addEventListener("blur", d, l);
  });
  u.addEventListener("keydown", r, l),
    u.addEventListener("blur", () => u.removeEventListener("keydown", r), l);
};
function zy(a) {
  return Mc(a) && !qp();
}
function Qb(a, l, u = {}) {
  const [r, c, d] = a0(a, u),
    h = (p) => {
      const m = p.currentTarget;
      if (!m || !zy(p) || cl.has(m)) return;
      cl.add(m), Ws(p, "set");
      const y = l(m, p),
        v = (O, U) => {
          m.removeEventListener("pointerup", T),
            m.removeEventListener("pointercancel", D),
            Ws(O, "release"),
            !(!zy(O) || !cl.has(m)) &&
              (cl.delete(m), typeof y == "function" && y(O, { success: U }));
        },
        T = (O) => {
          (
            O.isTrusted
              ? Zb(
                  O,
                  m instanceof Element
                    ? m.getBoundingClientRect()
                    : {
                        left: 0,
                        top: 0,
                        right: window.innerWidth,
                        bottom: window.innerHeight,
                      }
                )
              : !1
          )
            ? v(O, !1)
            : v(O, !(m instanceof Element) || l0(m, O.target));
        },
        D = (O) => {
          v(O, !1);
        };
      m.addEventListener("pointerup", T, c),
        m.addEventListener("pointercancel", D, c),
        m.addEventListener("lostpointercapture", D, c);
    };
  return (
    r.forEach((p) => {
      p = u.useGlobalTarget ? window : p;
      let m = !1;
      p instanceof HTMLElement &&
        ((m = !0),
        !Gb(p) && p.getAttribute("tabindex") === null && (p.tabIndex = 0)),
        p.addEventListener("pointerdown", h, c),
        m && p.addEventListener("focus", (y) => Xb(y, c), c);
    }),
    d
  );
}
function Zb(a, l) {
  return (
    a.clientX < l.left ||
    a.clientX > l.right ||
    a.clientY < l.top ||
    a.clientY > l.bottom
  );
}
function _y(a, l, u) {
  const { props: r } = a;
  if (a.current instanceof HTMLButtonElement && a.current.disabled) return;
  a.animationState &&
    r.whileTap &&
    a.animationState.setActive("whileTap", u === "Start");
  const c = "onTap" + (u === "End" ? "" : u),
    d = r[c];
  d && Et.postRender(() => d(l, Dl(l)));
}
class Kb extends Gn {
  mount() {
    const { current: l } = this.node;
    l &&
      (this.unmount = Qb(
        l,
        (u, r) => (
          _y(this.node, r, "Start"),
          (c, { success: d }) => _y(this.node, c, d ? "End" : "Cancel")
        ),
        { useGlobalTarget: this.node.props.globalTapTarget }
      ));
  }
  unmount() {}
}
const Qo = new WeakMap(),
  Vo = new WeakMap(),
  Jb = (a) => {
    const l = Qo.get(a.target);
    l && l(a);
  },
  Pb = (a) => {
    a.forEach(Jb);
  };
function kb({ root: a, ...l }) {
  const u = a || document;
  Vo.has(u) || Vo.set(u, {});
  const r = Vo.get(u),
    c = JSON.stringify(l);
  return r[c] || (r[c] = new IntersectionObserver(Pb, { root: a, ...l })), r[c];
}
function Fb(a, l, u) {
  const r = kb(l);
  return (
    Qo.set(a, u),
    r.observe(a),
    () => {
      Qo.delete(a), r.unobserve(a);
    }
  );
}
const Wb = { some: 0, all: 1 };
class $b extends Gn {
  constructor() {
    super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
  }
  startObserver() {
    this.unmount();
    const { viewport: l = {} } = this.node.getProps(),
      { root: u, margin: r, amount: c = "some", once: d } = l,
      h = {
        root: u ? u.current : void 0,
        rootMargin: r,
        threshold: typeof c == "number" ? c : Wb[c],
      },
      p = (m) => {
        const { isIntersecting: y } = m;
        if (
          this.isInView === y ||
          ((this.isInView = y), d && !y && this.hasEnteredView)
        )
          return;
        y && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", y);
        const { onViewportEnter: v, onViewportLeave: T } = this.node.getProps(),
          D = y ? v : T;
        D && D(m);
      };
    return Fb(this.node.current, h, p);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: l, prevProps: u } = this.node;
    ["amount", "margin", "root"].some(Ib(l, u)) && this.startObserver();
  }
  unmount() {}
}
function Ib({ viewport: a = {} }, { viewport: l = {} } = {}) {
  return (u) => a[u] !== l[u];
}
const tA = {
    inView: { Feature: $b },
    tap: { Feature: Kb },
    focus: { Feature: qb },
    hover: { Feature: wb },
  },
  eA = { layout: { ProjectionNode: i0, MeasureLayout: kp } },
  Zo = { current: null },
  s0 = { current: !1 };
function nA() {
  if (((s0.current = !0), !!Po))
    if (window.matchMedia) {
      const a = window.matchMedia("(prefers-reduced-motion)"),
        l = () => (Zo.current = a.matches);
      a.addListener(l), l();
    } else Zo.current = !1;
}
const iA = [...Rp, It, Yn],
  aA = (a) => iA.find(xp(a)),
  lA = new WeakMap();
function sA(a, l, u) {
  for (const r in l) {
    const c = l[r],
      d = u[r];
    if (te(c)) a.addValue(r, c);
    else if (te(d)) a.addValue(r, vl(c, { owner: a }));
    else if (d !== c)
      if (a.hasValue(r)) {
        const h = a.getValue(r);
        h.liveStyle === !0 ? h.jump(c) : h.hasAnimated || h.set(c);
      } else {
        const h = a.getStaticValue(r);
        a.addValue(r, vl(h !== void 0 ? h : c, { owner: a }));
      }
  }
  for (const r in u) l[r] === void 0 && a.removeValue(r);
  return l;
}
const Uy = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete",
];
class uA {
  scrapeMotionValuesFromProps(l, u, r) {
    return {};
  }
  constructor(
    {
      parent: l,
      props: u,
      presenceContext: r,
      reducedMotionConfig: c,
      blockInitialAnimation: d,
      visualState: h,
    },
    p = {}
  ) {
    (this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.KeyframeResolver = bc),
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
        const O = Je.now();
        this.renderScheduledAt < O &&
          ((this.renderScheduledAt = O), Et.render(this.render, !1, !0));
      });
    const { latestValues: m, renderState: y, onUpdate: v } = h;
    (this.onUpdate = v),
      (this.latestValues = m),
      (this.baseTarget = { ...m }),
      (this.initialValues = u.initial ? { ...m } : {}),
      (this.renderState = y),
      (this.parent = l),
      (this.props = u),
      (this.presenceContext = r),
      (this.depth = l ? l.depth + 1 : 0),
      (this.reducedMotionConfig = c),
      (this.options = p),
      (this.blockInitialAnimation = !!d),
      (this.isControllingVariants = tu(u)),
      (this.isVariantNode = qy(u)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(l && l.current));
    const { willChange: T, ...D } = this.scrapeMotionValuesFromProps(
      u,
      {},
      this
    );
    for (const O in D) {
      const U = D[O];
      m[O] !== void 0 && te(U) && U.set(m[O], !1);
    }
  }
  mount(l) {
    (this.current = l),
      lA.set(l, this),
      this.projection && !this.projection.instance && this.projection.mount(l),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((u, r) => this.bindToMotionValue(r, u)),
      s0.current || nA(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never"
          ? !1
          : this.reducedMotionConfig === "always"
          ? !0
          : Zo.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext);
  }
  unmount() {
    this.projection && this.projection.unmount(),
      qn(this.notifyUpdate),
      qn(this.render),
      this.valueSubscriptions.forEach((l) => l()),
      this.valueSubscriptions.clear(),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent && this.parent.children.delete(this);
    for (const l in this.events) this.events[l].clear();
    for (const l in this.features) {
      const u = this.features[l];
      u && (u.unmount(), (u.isMounted = !1));
    }
    this.current = null;
  }
  bindToMotionValue(l, u) {
    this.valueSubscriptions.has(l) && this.valueSubscriptions.get(l)();
    const r = yi.has(l);
    r && this.onBindTransform && this.onBindTransform();
    const c = u.on("change", (p) => {
        (this.latestValues[l] = p),
          this.props.onUpdate && Et.preRender(this.notifyUpdate),
          r && this.projection && (this.projection.isTransformDirty = !0);
      }),
      d = u.on("renderRequest", this.scheduleRender);
    let h;
    window.MotionCheckAppearSync &&
      (h = window.MotionCheckAppearSync(this, l, u)),
      this.valueSubscriptions.set(l, () => {
        c(), d(), h && h(), u.owner && u.stop();
      });
  }
  sortNodePosition(l) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== l.type
      ? 0
      : this.sortInstanceNodePosition(this.current, l.current);
  }
  updateFeatures() {
    let l = "animation";
    for (l in aa) {
      const u = aa[l];
      if (!u) continue;
      const { isEnabled: r, Feature: c } = u;
      if (
        (!this.features[l] &&
          c &&
          r(this.props) &&
          (this.features[l] = new c(this)),
        this.features[l])
      ) {
        const d = this.features[l];
        d.isMounted ? d.update() : (d.mount(), (d.isMounted = !0));
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : Ut();
  }
  getStaticValue(l) {
    return this.latestValues[l];
  }
  setStaticValue(l, u) {
    this.latestValues[l] = u;
  }
  update(l, u) {
    (l.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = l),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = u);
    for (let r = 0; r < Uy.length; r++) {
      const c = Uy[r];
      this.propEventSubscriptions[c] &&
        (this.propEventSubscriptions[c](),
        delete this.propEventSubscriptions[c]);
      const d = "on" + c,
        h = l[d];
      h && (this.propEventSubscriptions[c] = this.on(c, h));
    }
    (this.prevMotionValues = sA(
      this,
      this.scrapeMotionValuesFromProps(l, this.prevProps, this),
      this.prevMotionValues
    )),
      this.handleChildMotionValue && this.handleChildMotionValue(),
      this.onUpdate && this.onUpdate(this);
  }
  getProps() {
    return this.props;
  }
  getVariant(l) {
    return this.props.variants ? this.props.variants[l] : void 0;
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
  addVariantChild(l) {
    const u = this.getClosestVariantNode();
    if (u)
      return (
        u.variantChildren && u.variantChildren.add(l),
        () => u.variantChildren.delete(l)
      );
  }
  addValue(l, u) {
    const r = this.values.get(l);
    u !== r &&
      (r && this.removeValue(l),
      this.bindToMotionValue(l, u),
      this.values.set(l, u),
      (this.latestValues[l] = u.get()));
  }
  removeValue(l) {
    this.values.delete(l);
    const u = this.valueSubscriptions.get(l);
    u && (u(), this.valueSubscriptions.delete(l)),
      delete this.latestValues[l],
      this.removeValueFromRenderState(l, this.renderState);
  }
  hasValue(l) {
    return this.values.has(l);
  }
  getValue(l, u) {
    if (this.props.values && this.props.values[l]) return this.props.values[l];
    let r = this.values.get(l);
    return (
      r === void 0 &&
        u !== void 0 &&
        ((r = vl(u === null ? void 0 : u, { owner: this })),
        this.addValue(l, r)),
      r
    );
  }
  readValue(l, u) {
    var r;
    let c =
      this.latestValues[l] !== void 0 || !this.current
        ? this.latestValues[l]
        : (r = this.getBaseTargetFromProps(this.props, l)) !== null &&
          r !== void 0
        ? r
        : this.readValueFromInstance(this.current, l, this.options);
    return (
      c != null &&
        (typeof c == "string" && (Dp(c) || yp(c))
          ? (c = parseFloat(c))
          : !aA(c) && Yn.test(u) && (c = bp(l, u)),
        this.setBaseTarget(l, te(c) ? c.get() : c)),
      te(c) ? c.get() : c
    );
  }
  setBaseTarget(l, u) {
    this.baseTarget[l] = u;
  }
  getBaseTarget(l) {
    var u;
    const { initial: r } = this.props;
    let c;
    if (typeof r == "string" || typeof r == "object") {
      const h = uc(
        this.props,
        r,
        (u = this.presenceContext) === null || u === void 0 ? void 0 : u.custom
      );
      h && (c = h[l]);
    }
    if (r && c !== void 0) return c;
    const d = this.getBaseTargetFromProps(this.props, l);
    return d !== void 0 && !te(d)
      ? d
      : this.initialValues[l] !== void 0 && c === void 0
      ? void 0
      : this.baseTarget[l];
  }
  on(l, u) {
    return this.events[l] || (this.events[l] = new hc()), this.events[l].add(u);
  }
  notify(l, ...u) {
    this.events[l] && this.events[l].notify(...u);
  }
}
class u0 extends uA {
  constructor() {
    super(...arguments), (this.KeyframeResolver = Op);
  }
  sortInstanceNodePosition(l, u) {
    return l.compareDocumentPosition(u) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(l, u) {
    return l.style ? l.style[u] : void 0;
  }
  removeValueFromRenderState(l, { vars: u, style: r }) {
    delete u[l], delete r[l];
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: l } = this.props;
    te(l) &&
      (this.childSubscription = l.on("change", (u) => {
        this.current && (this.current.textContent = `${u}`);
      }));
  }
}
function rA(a) {
  return window.getComputedStyle(a);
}
class oA extends u0 {
  constructor() {
    super(...arguments), (this.type = "html"), (this.renderInstance = Wy);
  }
  readValueFromInstance(l, u) {
    if (yi.has(u)) {
      const r = Tc(u);
      return (r && r.default) || 0;
    } else {
      const r = rA(l),
        c = (Io(u) ? r.getPropertyValue(u) : r[u]) || 0;
      return typeof c == "string" ? c.trim() : c;
    }
  }
  measureInstanceViewportBox(l, { transformPagePoint: u }) {
    return Kp(l, u);
  }
  build(l, u, r) {
    nc(l, u, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(l, u, r) {
    return rc(l, u, r);
  }
}
class cA extends u0 {
  constructor() {
    super(...arguments),
      (this.type = "svg"),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = Ut),
      (this.updateDimensions = () => {
        this.current &&
          !this.renderState.dimensions &&
          Fy(this.current, this.renderState);
      });
  }
  getBaseTargetFromProps(l, u) {
    return l[u];
  }
  readValueFromInstance(l, u) {
    if (yi.has(u)) {
      const r = Tc(u);
      return (r && r.default) || 0;
    }
    return (u = $y.has(u) ? u : Wo(u)), l.getAttribute(u);
  }
  scrapeMotionValuesFromProps(l, u, r) {
    return tp(l, u, r);
  }
  onBindTransform() {
    this.current &&
      !this.renderState.dimensions &&
      Et.postRender(this.updateDimensions);
  }
  build(l, u, r) {
    lc(l, u, this.isSVGTag, r.transformTemplate);
  }
  renderInstance(l, u, r, c) {
    Iy(l, u, r, c);
  }
  mount(l) {
    (this.isSVGTag = sc(l.tagName)), super.mount(l);
  }
}
const fA = (a, l) =>
    ac(a) ? new cA(l) : new oA(l, { allowProjection: a !== tt.Fragment }),
  hA = N1({ ...xT, ...tA, ...Hb, ...eA }, fA),
  r0 = Wv(hA);
function dA() {
  return Bt.jsx("main", {
    className:
      "w-full h-screen font-mono text-slate-100 flex gap-8 justify-center items-center bg-slate-800",
    children: Bt.jsx(r0.p, {
      initial: { y: 0 },
      transition: { repeat: 1 / 0, duration: 3, ease: "easeIn" },
      animate: { y: [0, 10, 40, 10, 0] },
      children: "/bmFzZ29y",
    }),
  });
}
const mA = "./nasgor.webp";
function yA({ setValid: a }) {
  const [l, u] = tt.useState(""),
    [r, c] = tt.useState(""),
    d = async (h) => {
      h.preventDefault(), console.log(l, r);
      try {
        const p = await fetch("http://127.0.0.1:8080/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username: l, password: r }),
        });
        if (!p.ok) throw new Error(`HTTP error! Status: ${p.status}`);
        const m = await p.json();
        console.log("Correct", m), a(!0);
      } catch (p) {
        console.log(p);
      }
      u(""), c("");
    };
  return Bt.jsxs("main", {
    className:
      "w-full h-screen text-slate-100 flex gap-8 justify-center items-center bg-slate-800",
    children: [
      Bt.jsx("img", {
        className: "w-48 h-48 rounded-xl border-2 border-orange-300",
        src: mA,
        alt: "nasgor",
      }),
      Bt.jsxs("form", {
        onSubmit: d,
        className:
          "w-80 h-72 mx-10 flex flex-col items-center justify-center rounded-xl bg-orange-900 gap-4 font-bold",
        children: [
          Bt.jsxs("div", {
            children: [
              Bt.jsx("label", {
                className: "flex",
                htmlFor: "username",
                children: "Username",
              }),
              Bt.jsx("input", {
                value: l,
                onChange: (h) => u(h.target.value),
                id: "username",
                className: "bg-white text-slate-900 p-2",
                type: "text",
              }),
            ],
          }),
          Bt.jsxs("div", {
            children: [
              Bt.jsx("label", {
                className: "flex",
                htmlFor: "password",
                children: "Password",
              }),
              Bt.jsx("input", {
                value: r,
                onChange: (h) => c(h.target.value),
                id: "password",
                className: "bg-white text-slate-900 p-2",
                type: "text",
              }),
            ],
          }),
          Bt.jsx(r0.button, {
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
function pA() {
  const [a, l] = tt.useState(!1);
  return Bt.jsx(Bt.Fragment, {
    children: a ? Bt.jsx(dA, {}) : Bt.jsx(yA, { setValid: l }),
  });
}
qv.createRoot(document.getElementById("root")).render(
  Bt.jsx(tt.StrictMode, { children: Bt.jsx(pA, {}) })
);
