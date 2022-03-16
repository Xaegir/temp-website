(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [424],
  {
    57999: function (e, t, r) {
      'use strict';
      var n = r(59713);
      function a(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function o(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? a(Object(r), !0).forEach(function (t) {
                n(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : a(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t),
                );
              });
        }
        return e;
      }
      t.default = function (e, t) {
        var r = i.default,
          n = {
            loading: function (e) {
              e.error, e.isLoading;
              return e.pastDelay, null;
            },
          };
        e instanceof Promise
          ? (n.loader = function () {
              return e;
            })
          : 'function' === typeof e
          ? (n.loader = e)
          : 'object' === typeof e && (n = o(o({}, n), e));
        (n = o(o({}, n), t)).loadableGenerated &&
          delete (n = o(o({}, n), n.loadableGenerated)).loadableGenerated;
        if ('boolean' === typeof n.ssr) {
          if (!n.ssr) return delete n.ssr, l(r, n);
          delete n.ssr;
        }
        return r(n);
      };
      u(r(2784));
      var i = u(r(87653));
      function u(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function l(e, t) {
        return delete t.webpack, delete t.modules, e(t);
      }
    },
    519: function (e, t, r) {
      'use strict';
      var n;
      (t.__esModule = !0), (t.LoadableContext = void 0);
      var a = (
        (n = r(2784)) && n.__esModule ? n : { default: n }
      ).default.createContext(null);
      t.LoadableContext = a;
    },
    87653: function (e, t, r) {
      'use strict';
      var n = r(59713),
        a = r(34575),
        o = r(93913);
      function i(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? i(Object(r), !0).forEach(function (t) {
                n(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : i(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t),
                );
              });
        }
        return e;
      }
      function l(e, t) {
        var r;
        if ('undefined' === typeof Symbol || null == e[Symbol.iterator]) {
          if (
            Array.isArray(e) ||
            (r = (function (e, t) {
              if (!e) return;
              if ('string' === typeof e) return s(e, t);
              var r = Object.prototype.toString.call(e).slice(8, -1);
              'Object' === r && e.constructor && (r = e.constructor.name);
              if ('Map' === r || 'Set' === r) return Array.from(e);
              if (
                'Arguments' === r ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              )
                return s(e, t);
            })(e)) ||
            (t && e && 'number' === typeof e.length)
          ) {
            r && (e = r);
            var n = 0,
              a = function () {};
            return {
              s: a,
              n: function () {
                return n >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[n++] };
              },
              e: function (e) {
                throw e;
              },
              f: a,
            };
          }
          throw new TypeError(
            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
          );
        }
        var o,
          i = !0,
          u = !1;
        return {
          s: function () {
            r = e[Symbol.iterator]();
          },
          n: function () {
            var e = r.next();
            return (i = e.done), e;
          },
          e: function (e) {
            (u = !0), (o = e);
          },
          f: function () {
            try {
              i || null == r.return || r.return();
            } finally {
              if (u) throw o;
            }
          },
        };
      }
      function s(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      (t.__esModule = !0), (t.default = void 0);
      var c,
        f = (c = r(2784)) && c.__esModule ? c : { default: c },
        d = r(36718),
        p = r(519);
      var m = [],
        h = [],
        y = !1;
      function b(e) {
        var t = e(),
          r = { loading: !0, loaded: null, error: null };
        return (
          (r.promise = t
            .then(function (e) {
              return (r.loading = !1), (r.loaded = e), e;
            })
            .catch(function (e) {
              throw ((r.loading = !1), (r.error = e), e);
            })),
          r
        );
      }
      var v = (function () {
        function e(t, r) {
          a(this, e),
            (this._loadFn = t),
            (this._opts = r),
            (this._callbacks = new Set()),
            (this._delay = null),
            (this._timeout = null),
            this.retry();
        }
        return (
          o(e, [
            {
              key: 'promise',
              value: function () {
                return this._res.promise;
              },
            },
            {
              key: 'retry',
              value: function () {
                var e = this;
                this._clearTimeouts(),
                  (this._res = this._loadFn(this._opts.loader)),
                  (this._state = { pastDelay: !1, timedOut: !1 });
                var t = this._res,
                  r = this._opts;
                t.loading &&
                  ('number' === typeof r.delay &&
                    (0 === r.delay
                      ? (this._state.pastDelay = !0)
                      : (this._delay = setTimeout(function () {
                          e._update({ pastDelay: !0 });
                        }, r.delay))),
                  'number' === typeof r.timeout &&
                    (this._timeout = setTimeout(function () {
                      e._update({ timedOut: !0 });
                    }, r.timeout))),
                  this._res.promise
                    .then(function () {
                      e._update({}), e._clearTimeouts();
                    })
                    .catch(function (t) {
                      e._update({}), e._clearTimeouts();
                    }),
                  this._update({});
              },
            },
            {
              key: '_update',
              value: function (e) {
                (this._state = u(
                  u({}, this._state),
                  {},
                  {
                    error: this._res.error,
                    loaded: this._res.loaded,
                    loading: this._res.loading,
                  },
                  e,
                )),
                  this._callbacks.forEach(function (e) {
                    return e();
                  });
              },
            },
            {
              key: '_clearTimeouts',
              value: function () {
                clearTimeout(this._delay), clearTimeout(this._timeout);
              },
            },
            {
              key: 'getCurrentValue',
              value: function () {
                return this._state;
              },
            },
            {
              key: 'subscribe',
              value: function (e) {
                var t = this;
                return (
                  this._callbacks.add(e),
                  function () {
                    t._callbacks.delete(e);
                  }
                );
              },
            },
          ]),
          e
        );
      })();
      function _(e) {
        return (function (e, t) {
          var r = Object.assign(
              {
                loader: null,
                loading: null,
                delay: 200,
                timeout: null,
                webpack: null,
                modules: null,
              },
              t,
            ),
            n = null;
          function a() {
            if (!n) {
              var t = new v(e, r);
              n = {
                getCurrentValue: t.getCurrentValue.bind(t),
                subscribe: t.subscribe.bind(t),
                retry: t.retry.bind(t),
                promise: t.promise.bind(t),
              };
            }
            return n.promise();
          }
          if (!y && 'function' === typeof r.webpack) {
            var o = r.webpack();
            h.push(function (e) {
              var t,
                r = l(o);
              try {
                for (r.s(); !(t = r.n()).done; ) {
                  var n = t.value;
                  if (-1 !== e.indexOf(n)) return a();
                }
              } catch (i) {
                r.e(i);
              } finally {
                r.f();
              }
            });
          }
          var i = function (e, t) {
            a();
            var o = f.default.useContext(p.LoadableContext),
              i = (0, d.useSubscription)(n);
            return (
              f.default.useImperativeHandle(
                t,
                function () {
                  return { retry: n.retry };
                },
                [],
              ),
              o &&
                Array.isArray(r.modules) &&
                r.modules.forEach(function (e) {
                  o(e);
                }),
              f.default.useMemo(
                function () {
                  return i.loading || i.error
                    ? f.default.createElement(r.loading, {
                        isLoading: i.loading,
                        pastDelay: i.pastDelay,
                        timedOut: i.timedOut,
                        error: i.error,
                        retry: n.retry,
                      })
                    : i.loaded
                    ? f.default.createElement(
                        (function (e) {
                          return e && e.__esModule ? e.default : e;
                        })(i.loaded),
                        e,
                      )
                    : null;
                },
                [e, i],
              )
            );
          };
          return (
            (i.preload = function () {
              return a();
            }),
            (i.displayName = 'LoadableComponent'),
            f.default.forwardRef(i)
          );
        })(b, e);
      }
      function g(e, t) {
        for (var r = []; e.length; ) {
          var n = e.pop();
          r.push(n(t));
        }
        return Promise.all(r).then(function () {
          if (e.length) return g(e, t);
        });
      }
      (_.preloadAll = function () {
        return new Promise(function (e, t) {
          g(m).then(e, t);
        });
      }),
        (_.preloadReady = function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
          return new Promise(function (t) {
            var r = function () {
              return (y = !0), t();
            };
            g(h, e).then(r, r);
          });
        }),
        (window.__NEXT_PRELOADREADY = _.preloadReady);
      var O = _;
      t.default = O;
    },
    14164: function (e, t, r) {
      'use strict';
      r.r(t),
        r.d(t, {
          default: function () {
            return s;
          },
        });
      var n = r(52322),
        a = r(5152),
        o = r(2784),
        i = r(11163),
        u = r(96831),
        l =
          (r(30570),
          (0, a.default)(
            function () {
              return Promise.all([r.e(563), r.e(356), r.e(805)]).then(
                r.bind(r, 36805),
              );
            },
            {
              loadableGenerated: {
                webpack: function () {
                  return [36805];
                },
                modules: ['mindmap.js -> components/MindmapGrid'],
              },
            },
          ));
      function s() {
        var e = (0, i.useRouter)(),
          t = (0, u.$)('mindmap'),
          r = t.t,
          a = t.i18n;
        return (
          (0, o.useEffect)(
            function () {
              a.changeLanguage(e.locale);
            },
            [e.locale],
          ),
          (0, n.jsx)('div', {
            className:
              'lg:px-8 pt-24 lg:pt-0 bg-gray-100 min-h-screen  md:px-5 relative',
            children: (0, n.jsxs)('div', {
              className: 'max-w-11xl mx-auto pb-24',
              children: [
                (0, n.jsxs)('div', {
                  className: 'w-full h-full flex items-end px-1 fade-in',
                  children: [
                    (0, n.jsxs)('div', {
                      className: 'h-full pb-6 px-4 lg:px-0',
                      children: [
                        (0, n.jsxs)('h3', {
                          className:
                            'font-800 top-0 font-sans text-4xl lg:text-6xl uppercase pb-4  font-black tracking-tight',
                          children: [
                            r('mindmapTitle'),
                            (0, n.jsx)('span', {
                              className: 'opacity-10 text-black pl-4',
                              children: '//',
                            }),
                            ' ',
                          ],
                        }),
                        (0, n.jsx)('div', {
                          className:
                            'text-xs lg:text-sm space-y-4 font-mono text-left max-w-1/2 mx-auto max-w-6xl ',
                          children: (0, n.jsx)('p', {
                            className: 'font-300',
                            children: r('mindmapSummary'),
                          }),
                        }),
                      ],
                    }),
                    (0, n.jsx)('div', {
                      className: 'w-full hidden lg:flex justify-end',
                      children: (0, n.jsx)('img', {
                        className: ' max-w-96 transform translate-x-4',
                        src: '/gmanifesto2.png',
                      }),
                    }),
                  ],
                }),
                (0, n.jsx)(l, {}),
              ],
            }),
          })
        );
      }
    },
    60811: function (e, t, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/mindmap',
        function () {
          return r(14164);
        },
      ]);
    },
    5152: function (e, t, r) {
      e.exports = r(57999);
    },
  },
  function (e) {
    e.O(0, [774, 888, 179], function () {
      return (t = 60811), e((e.s = t));
      var t;
    });
    var t = e.O();
    _N_E = t;
  },
]);
