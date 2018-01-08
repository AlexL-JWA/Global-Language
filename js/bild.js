"use strict";
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e
} : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
};
! function (e, t) {
    "object" == ("undefined" == typeof module ? "undefined" : _typeof(module)) && "object" == _typeof(module.exports) ? module.exports = e.document ? t(e, !0) : function (e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : void 0, function (e, t) {
    function i(e) {
        var t = "length" in e && e.length,
            i = Z.type(e);
        return "function" !== i && !Z.isWindow(e) && (!(1 !== e.nodeType || !t) || ("array" === i || 0 === t || "number" == typeof t && t > 0 && t - 1 in e))
    }

    function n(e, t, i) {
        if (Z.isFunction(t)) return Z.grep(e, function (e, n) {
            return !!t.call(e, n, e) !== i
        });
        if (t.nodeType) return Z.grep(e, function (e) {
            return e === t !== i
        });
        if ("string" == typeof t) {
            if (ae.test(t)) return Z.filter(t, e, i);
            t = Z.filter(t, e)
        }
        return Z.grep(e, function (e) {
            return V.call(t, e) >= 0 !== i
        })
    }

    function o(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }

    function s(e) {
        var t = he[e] = {};
        return Z.each(e.match(pe) || [], function (e, i) {
            t[i] = !0
        }), t
    }

    function r() {
        Q.removeEventListener("DOMContentLoaded", r, !1), e.removeEventListener("load", r, !1), Z.ready()
    }

    function a() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function () {
                return {}
            }
        }), this.expando = Z.expando + a.uid++
    }

    function l(e, t, i) {
        var n;
        if (void 0 === i && 1 === e.nodeType)
            if (n = "data-" + t.replace(we, "-$1").toLowerCase(), "string" == typeof (i = e.getAttribute(n))) {
                try {
                    i = "true" === i || "false" !== i && ("null" === i ? null : +i + "" === i ? +i : me.test(i) ? Z.parseJSON(i) : i)
                } catch (e) {}
                ye.set(e, t, i)
            } else i = void 0;
        return i
    }

    function d() {
        return !0
    }

    function c() {
        return !1
    }

    function u() {
        try {
            return Q.activeElement
        } catch (e) {}
    }

    function p(e, t) {
        return Z.nodeName(e, "table") && Z.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function h(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function f(e) {
        var t = He.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function g(e, t) {
        for (var i = 0, n = e.length; n > i; i++) ve.set(e[i], "globalEval", !t || ve.get(t[i], "globalEval"))
    }

    function v(e, t) {
        var i, n, o, s, r, a, l, d;
        if (1 === t.nodeType) {
            if (ve.hasData(e) && (s = ve.access(e), r = ve.set(t, s), d = s.events)) {
                delete r.handle, r.events = {};
                for (o in d)
                    for (i = 0, n = d[o].length; n > i; i++) Z.event.add(t, o, d[o][i])
            }
            ye.hasData(e) && (a = ye.access(e), l = Z.extend({}, a), ye.set(t, l))
        }
    }

    function y(e, t) {
        var i = e.getElementsByTagName ? e.getElementsByTagName(t || "*") : e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return void 0 === t || t && Z.nodeName(e, t) ? Z.merge([e], i) : i
    }

    function m(e, t) {
        var i = t.nodeName.toLowerCase();
        "input" === i && xe.test(e.type) ? t.checked = e.checked : ("input" === i || "textarea" === i) && (t.defaultValue = e.defaultValue)
    }

    function w(t, i) {
        var n, o = Z(i.createElement(t)).appendTo(i.body),
            s = e.getDefaultComputedStyle && (n = e.getDefaultComputedStyle(o[0])) ? n.display : Z.css(o[0], "display");
        return o.detach(), s
    }

    function b(e) {
        var t = Q,
            i = Ue[e];
        return i || (i = w(e, t), "none" !== i && i || (Le = (Le || Z("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = Le[0].contentDocument, t.write(), t.close(), i = w(e, t), Le.detach()), Ue[e] = i), i
    }

    function k(e, t, i) {
        var n, o, s, r, a = e.style;
        return i = i || Ie(e), i && (r = i.getPropertyValue(t) || i[t]), i && ("" !== r || Z.contains(e.ownerDocument, e) || (r = Z.style(e, t)), We.test(r) && qe.test(t) && (n = a.width, o = a.minWidth, s = a.maxWidth, a.minWidth = a.maxWidth = a.width = r, r = i.width, a.width = n, a.minWidth = o, a.maxWidth = s)), void 0 !== r ? r + "" : r
    }

    function T(e, t) {
        return {
            get: function () {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }

    function x(e, t) {
        if (t in e) return t;
        for (var i = t[0].toUpperCase() + t.slice(1), n = t, o = Xe.length; o--;)
            if ((t = Xe[o] + i) in e) return t;
        return n
    }

    function C(e, t, i) {
        var n = Re.exec(t);
        return n ? Math.max(0, n[1] - (i || 0)) + (n[2] || "px") : t
    }

    function D(e, t, i, n, o) {
        for (var s = i === (n ? "border" : "content") ? 4 : "width" === t ? 1 : 0, r = 0; 4 > s; s += 2) "margin" === i && (r += Z.css(e, i + ke[s], !0, o)), n ? ("content" === i && (r -= Z.css(e, "padding" + ke[s], !0, o)), "margin" !== i && (r -= Z.css(e, "border" + ke[s] + "Width", !0, o))) : (r += Z.css(e, "padding" + ke[s], !0, o), "padding" !== i && (r += Z.css(e, "border" + ke[s] + "Width", !0, o)));
        return r
    }

    function S(e, t, i) {
        var n = !0,
            o = "width" === t ? e.offsetWidth : e.offsetHeight,
            s = Ie(e),
            r = "border-box" === Z.css(e, "boxSizing", !1, s);
        if (0 >= o || null == o) {
            if (o = k(e, t, s), (0 > o || null == o) && (o = e.style[t]), We.test(o)) return o;
            n = r && (J.boxSizingReliable() || o === e.style[t]), o = parseFloat(o) || 0
        }
        return o + D(e, t, i || (r ? "border" : "content"), n, s) + "px"
    }

    function $(e, t) {
        for (var i, n, o, s = [], r = 0, a = e.length; a > r; r++) n = e[r], n.style && (s[r] = ve.get(n, "olddisplay"), i = n.style.display, t ? (s[r] || "none" !== i || (n.style.display = ""), "" === n.style.display && Te(n) && (s[r] = ve.access(n, "olddisplay", b(n.nodeName)))) : (o = Te(n), "none" === i && o || ve.set(n, "olddisplay", o ? i : Z.css(n, "display"))));
        for (r = 0; a > r; r++) n = e[r], n.style && (t && "none" !== n.style.display && "" !== n.style.display || (n.style.display = t ? s[r] || "" : "none"));
        return e
    }

    function A(e, t, i, n, o) {
        return new A.prototype.init(e, t, i, n, o)
    }

    function M() {
        return setTimeout(function () {
            Ge = void 0
        }), Ge = Z.now()
    }

    function E(e, t) {
        var i, n = 0,
            o = {
                height: e
            };
        for (t = t ? 1 : 0; 4 > n; n += 2 - t) i = ke[n], o["margin" + i] = o["padding" + i] = e;
        return t && (o.opacity = o.width = e), o
    }

    function _(e, t, i) {
        for (var n, o = (tt[t] || []).concat(tt["*"]), s = 0, r = o.length; r > s; s++)
            if (n = o[s].call(i, t, e)) return n
    }

    function N(e, t, i) {
        var n, o, s, r, a, l, d, c = this,
            u = {},
            p = e.style,
            h = e.nodeType && Te(e),
            f = ve.get(e, "fxshow");
        i.queue || (a = Z._queueHooks(e, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function () {
            a.unqueued || l()
        }), a.unqueued++, c.always(function () {
            c.always(function () {
                a.unqueued--, Z.queue(e, "fx").length || a.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (i.overflow = [p.overflow, p.overflowX, p.overflowY], d = Z.css(e, "display"), "inline" === ("none" === d ? ve.get(e, "olddisplay") || b(e.nodeName) : d) && "none" === Z.css(e, "float") && (p.display = "inline-block")), i.overflow && (p.overflow = "hidden", c.always(function () {
            p.overflow = i.overflow[0], p.overflowX = i.overflow[1], p.overflowY = i.overflow[2]
        }));
        for (n in t)
            if (o = t[n], Qe.exec(o)) {
                if (delete t[n], s = s || "toggle" === o, o === (h ? "hide" : "show")) {
                    if ("show" !== o || !f || void 0 === f[n]) continue;
                    h = !0
                }
                u[n] = f && f[n] || Z.style(e, n)
            } else d = void 0;
        if (Z.isEmptyObject(u)) "inline" === ("none" === d ? b(e.nodeName) : d) && (p.display = d);
        else {
            f ? "hidden" in f && (h = f.hidden) : f = ve.access(e, "fxshow", {}), s && (f.hidden = !h), h ? Z(e).show() : c.done(function () {
                Z(e).hide()
            }), c.done(function () {
                var t;
                ve.remove(e, "fxshow");
                for (t in u) Z.style(e, t, u[t])
            });
            for (n in u) r = _(h ? f[n] : 0, n, c), n in f || (f[n] = r.start, h && (r.end = r.start, r.start = "width" === n || "height" === n ? 1 : 0))
        }
    }

    function O(e, t) {
        var i, n, o, s, r;
        for (i in e)
            if (n = Z.camelCase(i), o = t[n], s = e[i], Z.isArray(s) && (o = s[1], s = e[i] = s[0]), i !== n && (e[n] = s, delete e[i]), (r = Z.cssHooks[n]) && "expand" in r) {
                s = r.expand(s), delete e[n];
                for (i in s) i in e || (e[i] = s[i], t[i] = o)
            } else t[n] = o
    }

    function j(e, t, i) {
        var n, o, s = 0,
            r = et.length,
            a = Z.Deferred().always(function () {
                delete l.elem
            }),
            l = function () {
                if (o) return !1;
                for (var t = Ge || M(), i = Math.max(0, d.startTime + d.duration - t), n = i / d.duration || 0, s = 1 - n, r = 0, l = d.tweens.length; l > r; r++) d.tweens[r].run(s);
                return a.notifyWith(e, [d, s, i]), 1 > s && l ? i : (a.resolveWith(e, [d]), !1)
            },
            d = a.promise({
                elem: e,
                props: Z.extend({}, t),
                opts: Z.extend(!0, {
                    specialEasing: {}
                }, i),
                originalProperties: t,
                originalOptions: i,
                startTime: Ge || M(),
                duration: i.duration,
                tweens: [],
                createTween: function (t, i) {
                    var n = Z.Tween(e, d.opts, t, i, d.opts.specialEasing[t] || d.opts.easing);
                    return d.tweens.push(n), n
                },
                stop: function (t) {
                    var i = 0,
                        n = t ? d.tweens.length : 0;
                    if (o) return this;
                    for (o = !0; n > i; i++) d.tweens[i].run(1);
                    return t ? a.resolveWith(e, [d, t]) : a.rejectWith(e, [d, t]), this
                }
            }),
            c = d.props;
        for (O(c, d.opts.specialEasing); r > s; s++)
            if (n = et[s].call(d, e, c, d.opts)) return n;
        return Z.map(c, _, d), Z.isFunction(d.opts.start) && d.opts.start.call(e, d), Z.fx.timer(Z.extend(l, {
            elem: e,
            anim: d,
            queue: d.opts.queue
        })), d.progress(d.opts.progress).done(d.opts.done, d.opts.complete).fail(d.opts.fail).always(d.opts.always)
    }

    function H(e) {
        return function (t, i) {
            "string" != typeof t && (i = t, t = "*");
            var n, o = 0,
                s = t.toLowerCase().match(pe) || [];
            if (Z.isFunction(i))
                for (; n = s[o++];) "+" === n[0] ? (n = n.slice(1) || "*", (e[n] = e[n] || []).unshift(i)) : (e[n] = e[n] || []).push(i)
        }
    }

    function F(e, t, i, n) {
        function o(a) {
            var l;
            return s[a] = !0, Z.each(e[a] || [], function (e, a) {
                var d = a(t, i, n);
                return "string" != typeof d || r || s[d] ? r ? !(l = d) : void 0 : (t.dataTypes.unshift(d), o(d), !1)
            }), l
        }
        var s = {},
            r = e === mt;
        return o(t.dataTypes[0]) || !s["*"] && o("*")
    }

    function P(e, t) {
        var i, n, o = Z.ajaxSettings.flatOptions || {};
        for (i in t) void 0 !== t[i] && ((o[i] ? e : n || (n = {}))[i] = t[i]);
        return n && Z.extend(!0, e, n), e
    }

    function L(e, t, i) {
        for (var n, o, s, r, a = e.contents, l = e.dataTypes;
            "*" === l[0];) l.shift(), void 0 === n && (n = e.mimeType || t.getResponseHeader("Content-Type"));
        if (n)
            for (o in a)
                if (a[o] && a[o].test(n)) {
                    l.unshift(o);
                    break
                }
        if (l[0] in i) s = l[0];
        else {
            for (o in i) {
                if (!l[0] || e.converters[o + " " + l[0]]) {
                    s = o;
                    break
                }
                r || (r = o)
            }
            s = s || r
        }
        return s ? (s !== l[0] && l.unshift(s), i[s]) : void 0
    }

    function U(e, t, i, n) {
        var o, s, r, a, l, d = {},
            c = e.dataTypes.slice();
        if (c[1])
            for (r in e.converters) d[r.toLowerCase()] = e.converters[r];
        for (s = c.shift(); s;)
            if (e.responseFields[s] && (i[e.responseFields[s]] = t), !l && n && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = s, s = c.shift())
                if ("*" === s) s = l;
                else if ("*" !== l && l !== s) {
            if (!(r = d[l + " " + s] || d["* " + s]))
                for (o in d)
                    if (a = o.split(" "), a[1] === s && (r = d[l + " " + a[0]] || d["* " + a[0]])) {
                        !0 === r ? r = d[o] : !0 !== d[o] && (s = a[0], c.unshift(a[1]));
                        break
                    }
            if (!0 !== r)
                if (r && e.throws) t = r(t);
                else try {
                    t = r(t)
                } catch (e) {
                    return {
                        state: "parsererror",
                        error: r ? e : "No conversion from " + l + " to " + s
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }

    function q(e, t, i, n) {
        var o;
        if (Z.isArray(t)) Z.each(t, function (t, o) {
            i || xt.test(e) ? n(e, o) : q(e + "[" + ("object" == (void 0 === o ? "undefined" : _typeof(o)) ? t : "") + "]", o, i, n)
        });
        else if (i || "object" !== Z.type(t)) n(e, t);
        else
            for (o in t) q(e + "[" + o + "]", t[o], i, n)
    }

    function W(e) {
        return Z.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
    }
    var I = [],
        z = I.slice,
        R = I.concat,
        Y = I.push,
        V = I.indexOf,
        B = {},
        X = B.toString,
        G = B.hasOwnProperty,
        J = {},
        Q = e.document,
        K = "2.1.4",
        Z = function e(t, i) {
            return new e.fn.init(t, i)
        },
        ee = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        te = /^-ms-/,
        ie = /-([\da-z])/gi,
        ne = function (e, t) {
            return t.toUpperCase()
        };
    Z.fn = Z.prototype = {
        jquery: K,
        constructor: Z,
        selector: "",
        length: 0,
        toArray: function () {
            return z.call(this)
        },
        get: function (e) {
            return null != e ? 0 > e ? this[e + this.length] : this[e] : z.call(this)
        },
        pushStack: function (e) {
            var t = Z.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function (e, t) {
            return Z.each(this, e, t)
        },
        map: function (e) {
            return this.pushStack(Z.map(this, function (t, i) {
                return e.call(t, i, t)
            }))
        },
        slice: function () {
            return this.pushStack(z.apply(this, arguments))
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        eq: function (e) {
            var t = this.length,
                i = +e + (0 > e ? t : 0);
            return this.pushStack(i >= 0 && t > i ? [this[i]] : [])
        },
        end: function () {
            return this.prevObject || this.constructor(null)
        },
        push: Y,
        sort: I.sort,
        splice: I.splice
    }, Z.extend = Z.fn.extend = function () {
        var e, t, i, n, o, s, r = arguments[0] || {},
            a = 1,
            l = arguments.length,
            d = !1;
        for ("boolean" == typeof r && (d = r, r = arguments[a] || {}, a++), "object" == (void 0 === r ? "undefined" : _typeof(r)) || Z.isFunction(r) || (r = {}), a === l && (r = this, a--); l > a; a++)
            if (null != (e = arguments[a]))
                for (t in e) i = r[t], n = e[t], r !== n && (d && n && (Z.isPlainObject(n) || (o = Z.isArray(n))) ? (o ? (o = !1, s = i && Z.isArray(i) ? i : []) : s = i && Z.isPlainObject(i) ? i : {}, r[t] = Z.extend(d, s, n)) : void 0 !== n && (r[t] = n));
        return r
    }, Z.extend({
        expando: "jQuery" + (K + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (e) {
            throw new Error(e)
        },
        noop: function () {},
        isFunction: function (e) {
            return "function" === Z.type(e)
        },
        isArray: Array.isArray,
        isWindow: function (e) {
            return null != e && e === e.window
        },
        isNumeric: function (e) {
            return !Z.isArray(e) && e - parseFloat(e) + 1 >= 0
        },
        isPlainObject: function (e) {
            return "object" === Z.type(e) && !e.nodeType && !Z.isWindow(e) && !(e.constructor && !G.call(e.constructor.prototype, "isPrototypeOf"))
        },
        isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        type: function (e) {
            return null == e ? e + "" : "object" == (void 0 === e ? "undefined" : _typeof(e)) || "function" == typeof e ? B[X.call(e)] || "object" : void 0 === e ? "undefined" : _typeof(e)
        },
        globalEval: function (e) {
            var t, i = eval;
            (e = Z.trim(e)) && (1 === e.indexOf("use strict") ? (t = Q.createElement("script"), t.text = e, Q.head.appendChild(t).parentNode.removeChild(t)) : i(e))
        },
        camelCase: function (e) {
            return e.replace(te, "ms-").replace(ie, ne)
        },
        nodeName: function (e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function (e, t, n) {
            var o = 0,
                s = e.length,
                r = i(e);
            if (n) {
                if (r)
                    for (; s > o && !1 !== t.apply(e[o], n); o++);
                else
                    for (o in e)
                        if (!1 === t.apply(e[o], n)) break
            } else if (r)
                for (; s > o && !1 !== t.call(e[o], o, e[o]); o++);
            else
                for (o in e)
                    if (!1 === t.call(e[o], o, e[o])) break;
            return e
        },
        trim: function (e) {
            return null == e ? "" : (e + "").replace(ee, "")
        },
        makeArray: function (e, t) {
            var n = t || [];
            return null != e && (i(Object(e)) ? Z.merge(n, "string" == typeof e ? [e] : e) : Y.call(n, e)), n
        },
        inArray: function (e, t, i) {
            return null == t ? -1 : V.call(t, e, i)
        },
        merge: function (e, t) {
            for (var i = +t.length, n = 0, o = e.length; i > n; n++) e[o++] = t[n];
            return e.length = o, e
        },
        grep: function (e, t, i) {
            for (var n = [], o = 0, s = e.length, r = !i; s > o; o++) !t(e[o], o) !== r && n.push(e[o]);
            return n
        },
        map: function (e, t, n) {
            var o, s = 0,
                r = e.length,
                a = i(e),
                l = [];
            if (a)
                for (; r > s; s++) null != (o = t(e[s], s, n)) && l.push(o);
            else
                for (s in e) null != (o = t(e[s], s, n)) && l.push(o);
            return R.apply([], l)
        },
        guid: 1,
        proxy: function (e, t) {
            var i, n, o;
            return "string" == typeof t && (i = e[t], t = e, e = i), Z.isFunction(e) ? (n = z.call(arguments, 2), o = function () {
                return e.apply(t || this, n.concat(z.call(arguments)))
            }, o.guid = e.guid = e.guid || Z.guid++, o) : void 0
        },
        now: Date.now,
        support: J
    }), Z.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
        B["[object " + t + "]"] = t.toLowerCase()
    });
    var oe = function (e) {
        function t(e, t, i, n) {
            var o, s, r, a, l, d, u, h, f, g;
            if ((t ? t.ownerDocument || t : q) !== N && _(t), t = t || N, i = i || [], a = t.nodeType, "string" != typeof e || !e || 1 !== a && 9 !== a && 11 !== a) return i;
            if (!n && j) {
                if (11 !== a && (o = me.exec(e)))
                    if (r = o[1]) {
                        if (9 === a) {
                            if (!(s = t.getElementById(r)) || !s.parentNode) return i;
                            if (s.id === r) return i.push(s), i
                        } else if (t.ownerDocument && (s = t.ownerDocument.getElementById(r)) && L(t, s) && s.id === r) return i.push(s), i
                    } else {
                        if (o[2]) return K.apply(i, t.getElementsByTagName(e)), i;
                        if ((r = o[3]) && k.getElementsByClassName) return K.apply(i, t.getElementsByClassName(r)), i
                    }
                if (k.qsa && (!H || !H.test(e))) {
                    if (h = u = U, f = t, g = 1 !== a && e, 1 === a && "object" !== t.nodeName.toLowerCase()) {
                        for (d = D(e), (u = t.getAttribute("id")) ? h = u.replace(be, "\\$&") : t.setAttribute("id", h), h = "[id='" + h + "'] ", l = d.length; l--;) d[l] = h + p(d[l]);
                        f = we.test(e) && c(t.parentNode) || t, g = d.join(",")
                    }
                    if (g) try {
                        return K.apply(i, f.querySelectorAll(g)), i
                    } catch (e) {} finally {
                        u || t.removeAttribute("id")
                    }
                }
            }
            return $(e.replace(le, "$1"), t, i, n)
        }

        function i() {
            function e(i, n) {
                return t.push(i + " ") > T.cacheLength && delete e[t.shift()], e[i + " "] = n
            }
            var t = [];
            return e
        }

        function n(e) {
            return e[U] = !0, e
        }

        function o(e) {
            var t = N.createElement("div");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function s(e, t) {
            for (var i = e.split("|"), n = e.length; n--;) T.attrHandle[i[n]] = t
        }

        function r(e, t) {
            var i = t && e,
                n = i && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || B) - (~e.sourceIndex || B);
            if (n) return n;
            if (i)
                for (; i = i.nextSibling;)
                    if (i === t) return -1;
            return e ? 1 : -1
        }

        function a(e) {
            return function (t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }

        function l(e) {
            return function (t) {
                var i = t.nodeName.toLowerCase();
                return ("input" === i || "button" === i) && t.type === e
            }
        }

        function d(e) {
            return n(function (t) {
                return t = +t, n(function (i, n) {
                    for (var o, s = e([], i.length, t), r = s.length; r--;) i[o = s[r]] && (i[o] = !(n[o] = i[o]))
                })
            })
        }

        function c(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }

        function u() {}

        function p(e) {
            for (var t = 0, i = e.length, n = ""; i > t; t++) n += e[t].value;
            return n
        }

        function h(e, t, i) {
            var n = t.dir,
                o = i && "parentNode" === n,
                s = I++;
            return t.first ? function (t, i, s) {
                for (; t = t[n];)
                    if (1 === t.nodeType || o) return e(t, i, s)
            } : function (t, i, r) {
                var a, l, d = [W, s];
                if (r) {
                    for (; t = t[n];)
                        if ((1 === t.nodeType || o) && e(t, i, r)) return !0
                } else
                    for (; t = t[n];)
                        if (1 === t.nodeType || o) {
                            if (l = t[U] || (t[U] = {}), (a = l[n]) && a[0] === W && a[1] === s) return d[2] = a[2];
                            if (l[n] = d, d[2] = e(t, i, r)) return !0
                        }
            }
        }

        function f(e) {
            return e.length > 1 ? function (t, i, n) {
                for (var o = e.length; o--;)
                    if (!e[o](t, i, n)) return !1;
                return !0
            } : e[0]
        }

        function g(e, i, n) {
            for (var o = 0, s = i.length; s > o; o++) t(e, i[o], n);
            return n
        }

        function v(e, t, i, n, o) {
            for (var s, r = [], a = 0, l = e.length, d = null != t; l > a; a++)(s = e[a]) && (!i || i(s, n, o)) && (r.push(s), d && t.push(a));
            return r
        }

        function y(e, t, i, o, s, r) {
            return o && !o[U] && (o = y(o)), s && !s[U] && (s = y(s, r)), n(function (n, r, a, l) {
                var d, c, u, p = [],
                    h = [],
                    f = r.length,
                    y = n || g(t || "*", a.nodeType ? [a] : a, []),
                    m = !e || !n && t ? y : v(y, p, e, a, l),
                    w = i ? s || (n ? e : f || o) ? [] : r : m;
                if (i && i(m, w, a, l), o)
                    for (d = v(w, h), o(d, [], a, l), c = d.length; c--;)(u = d[c]) && (w[h[c]] = !(m[h[c]] = u));
                if (n) {
                    if (s || e) {
                        if (s) {
                            for (d = [], c = w.length; c--;)(u = w[c]) && d.push(m[c] = u);
                            s(null, w = [], d, l)
                        }
                        for (c = w.length; c--;)(u = w[c]) && (d = s ? ee(n, u) : p[c]) > -1 && (n[d] = !(r[d] = u))
                    }
                } else w = v(w === r ? w.splice(f, w.length) : w), s ? s(null, r, w, l) : K.apply(r, w)
            })
        }

        function m(e) {
            for (var t, i, n, o = e.length, s = T.relative[e[0].type], r = s || T.relative[" "], a = s ? 1 : 0, l = h(function (e) {
                    return e === t
                }, r, !0), d = h(function (e) {
                    return ee(t, e) > -1
                }, r, !0), c = [function (e, i, n) {
                    var o = !s && (n || i !== A) || ((t = i).nodeType ? l(e, i, n) : d(e, i, n));
                    return t = null, o
                }]; o > a; a++)
                if (i = T.relative[e[a].type]) c = [h(f(c), i)];
                else {
                    if (i = T.filter[e[a].type].apply(null, e[a].matches), i[U]) {
                        for (n = ++a; o > n && !T.relative[e[n].type]; n++);
                        return y(a > 1 && f(c), a > 1 && p(e.slice(0, a - 1).concat({
                            value: " " === e[a - 2].type ? "*" : ""
                        })).replace(le, "$1"), i, n > a && m(e.slice(a, n)), o > n && m(e = e.slice(n)), o > n && p(e))
                    }
                    c.push(i)
                }
            return f(c)
        }

        function w(e, i) {
            var o = i.length > 0,
                s = e.length > 0,
                r = function (n, r, a, l, d) {
                    var c, u, p, h = 0,
                        f = "0",
                        g = n && [],
                        y = [],
                        m = A,
                        w = n || s && T.find.TAG("*", d),
                        b = W += null == m ? 1 : Math.random() || .1,
                        k = w.length;
                    for (d && (A = r !== N && r); f !== k && null != (c = w[f]); f++) {
                        if (s && c) {
                            for (u = 0; p = e[u++];)
                                if (p(c, r, a)) {
                                    l.push(c);
                                    break
                                }
                            d && (W = b)
                        }
                        o && ((c = !p && c) && h--, n && g.push(c))
                    }
                    if (h += f, o && f !== h) {
                        for (u = 0; p = i[u++];) p(g, y, r, a);
                        if (n) {
                            if (h > 0)
                                for (; f--;) g[f] || y[f] || (y[f] = J.call(l));
                            y = v(y)
                        }
                        K.apply(l, y), d && !n && y.length > 0 && h + i.length > 1 && t.uniqueSort(l)
                    }
                    return d && (W = b, A = m), g
                };
            return o ? n(r) : r
        }
        var b, k, T, x, C, D, S, $, A, M, E, _, N, O, j, H, F, P, L, U = "sizzle" + 1 * new Date,
            q = e.document,
            W = 0,
            I = 0,
            z = i(),
            R = i(),
            Y = i(),
            V = function (e, t) {
                return e === t && (E = !0), 0
            },
            B = 1 << 31,
            X = {}.hasOwnProperty,
            G = [],
            J = G.pop,
            Q = G.push,
            K = G.push,
            Z = G.slice,
            ee = function (e, t) {
                for (var i = 0, n = e.length; n > i; i++)
                    if (e[i] === t) return i;
                return -1
            },
            te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ie = "[\\x20\\t\\r\\n\\f]",
            ne = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            oe = ne.replace("w", "w#"),
            se = "\\[" + ie + "*(" + ne + ")(?:" + ie + "*([*^$|!~]?=)" + ie + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + oe + "))|)" + ie + "*\\]",
            re = ":(" + ne + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + se + ")*)|.*)\\)|)",
            ae = new RegExp(ie + "+", "g"),
            le = new RegExp("^" + ie + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ie + "+$", "g"),
            de = new RegExp("^" + ie + "*," + ie + "*"),
            ce = new RegExp("^" + ie + "*([>+~]|" + ie + ")" + ie + "*"),
            ue = new RegExp("=" + ie + "*([^\\]'\"]*?)" + ie + "*\\]", "g"),
            pe = new RegExp(re),
            he = new RegExp("^" + oe + "$"),
            fe = {
                ID: new RegExp("^#(" + ne + ")"),
                CLASS: new RegExp("^\\.(" + ne + ")"),
                TAG: new RegExp("^(" + ne.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + se),
                PSEUDO: new RegExp("^" + re),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ie + "*(even|odd|(([+-]|)(\\d*)n|)" + ie + "*(?:([+-]|)" + ie + "*(\\d+)|))" + ie + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + te + ")$", "i"),
                needsContext: new RegExp("^" + ie + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ie + "*((?:-\\d)?\\d*)" + ie + "*\\)|)(?=[^-]|$)", "i")
            },
            ge = /^(?:input|select|textarea|button)$/i,
            ve = /^h\d$/i,
            ye = /^[^{]+\{\s*\[native \w/,
            me = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            we = /[+~]/,
            be = /'|\\/g,
            ke = new RegExp("\\\\([\\da-f]{1,6}" + ie + "?|(" + ie + ")|.)", "ig"),
            Te = function (e, t, i) {
                var n = "0x" + t - 65536;
                return n !== n || i ? t : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
            },
            xe = function () {
                _()
            };
        try {
            K.apply(G = Z.call(q.childNodes), q.childNodes), G[q.childNodes.length].nodeType
        } catch (e) {
            K = {
                apply: G.length ? function (e, t) {
                    Q.apply(e, Z.call(t))
                } : function (e, t) {
                    for (var i = e.length, n = 0; e[i++] = t[n++];);
                    e.length = i - 1
                }
            }
        }
        k = t.support = {}, C = t.isXML = function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }, _ = t.setDocument = function (e) {
            var t, i, n = e ? e.ownerDocument || e : q;
            return n !== N && 9 === n.nodeType && n.documentElement ? (N = n, O = n.documentElement, i = n.defaultView, i && i !== i.top && (i.addEventListener ? i.addEventListener("unload", xe, !1) : i.attachEvent && i.attachEvent("onunload", xe)), j = !C(n), k.attributes = o(function (e) {
                return e.className = "i", !e.getAttribute("className")
            }), k.getElementsByTagName = o(function (e) {
                return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length
            }), k.getElementsByClassName = ye.test(n.getElementsByClassName), k.getById = o(function (e) {
                return O.appendChild(e).id = U, !n.getElementsByName || !n.getElementsByName(U).length
            }), k.getById ? (T.find.ID = function (e, t) {
                if (void 0 !== t.getElementById && j) {
                    var i = t.getElementById(e);
                    return i && i.parentNode ? [i] : []
                }
            }, T.filter.ID = function (e) {
                var t = e.replace(ke, Te);
                return function (e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete T.find.ID, T.filter.ID = function (e) {
                var t = e.replace(ke, Te);
                return function (e) {
                    var i = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return i && i.value === t
                }
            }), T.find.TAG = k.getElementsByTagName ? function (e, t) {
                return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : k.qsa ? t.querySelectorAll(e) : void 0
            } : function (e, t) {
                var i, n = [],
                    o = 0,
                    s = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; i = s[o++];) 1 === i.nodeType && n.push(i);
                    return n
                }
                return s
            }, T.find.CLASS = k.getElementsByClassName && function (e, t) {
                return j ? t.getElementsByClassName(e) : void 0
            }, F = [], H = [], (k.qsa = ye.test(n.querySelectorAll)) && (o(function (e) {
                O.appendChild(e).innerHTML = "<a id='" + U + "'></a><select id='" + U + "-\f]' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && H.push("[*^$]=" + ie + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || H.push("\\[" + ie + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + U + "-]").length || H.push("~="), e.querySelectorAll(":checked").length || H.push(":checked"), e.querySelectorAll("a#" + U + "+*").length || H.push(".#.+[+~]")
            }), o(function (e) {
                var t = n.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && H.push("name" + ie + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || H.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), H.push(",.*:")
            })), (k.matchesSelector = ye.test(P = O.matches || O.webkitMatchesSelector || O.mozMatchesSelector || O.oMatchesSelector || O.msMatchesSelector)) && o(function (e) {
                k.disconnectedMatch = P.call(e, "div"), P.call(e, "[s!='']:x"), F.push("!=", re)
            }), H = H.length && new RegExp(H.join("|")), F = F.length && new RegExp(F.join("|")), t = ye.test(O.compareDocumentPosition), L = t || ye.test(O.contains) ? function (e, t) {
                var i = 9 === e.nodeType ? e.documentElement : e,
                    n = t && t.parentNode;
                return e === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n)))
            } : function (e, t) {
                if (t)
                    for (; t = t.parentNode;)
                        if (t === e) return !0;
                return !1
            }, V = t ? function (e, t) {
                if (e === t) return E = !0, 0;
                var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return i || (i = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & i || !k.sortDetached && t.compareDocumentPosition(e) === i ? e === n || e.ownerDocument === q && L(q, e) ? -1 : t === n || t.ownerDocument === q && L(q, t) ? 1 : M ? ee(M, e) - ee(M, t) : 0 : 4 & i ? -1 : 1)
            } : function (e, t) {
                if (e === t) return E = !0, 0;
                var i, o = 0,
                    s = e.parentNode,
                    a = t.parentNode,
                    l = [e],
                    d = [t];
                if (!s || !a) return e === n ? -1 : t === n ? 1 : s ? -1 : a ? 1 : M ? ee(M, e) - ee(M, t) : 0;
                if (s === a) return r(e, t);
                for (i = e; i = i.parentNode;) l.unshift(i);
                for (i = t; i = i.parentNode;) d.unshift(i);
                for (; l[o] === d[o];) o++;
                return o ? r(l[o], d[o]) : l[o] === q ? -1 : d[o] === q ? 1 : 0
            }, n) : N
        }, t.matches = function (e, i) {
            return t(e, null, null, i)
        }, t.matchesSelector = function (e, i) {
            if ((e.ownerDocument || e) !== N && _(e), i = i.replace(ue, "='$1']"), !(!k.matchesSelector || !j || F && F.test(i) || H && H.test(i))) try {
                var n = P.call(e, i);
                if (n || k.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
            } catch (e) {}
            return t(i, N, null, [e]).length > 0
        }, t.contains = function (e, t) {
            return (e.ownerDocument || e) !== N && _(e), L(e, t)
        }, t.attr = function (e, t) {
            (e.ownerDocument || e) !== N && _(e);
            var i = T.attrHandle[t.toLowerCase()],
                n = i && X.call(T.attrHandle, t.toLowerCase()) ? i(e, t, !j) : void 0;
            return void 0 !== n ? n : k.attributes || !j ? e.getAttribute(t) : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
        }, t.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, t.uniqueSort = function (e) {
            var t, i = [],
                n = 0,
                o = 0;
            if (E = !k.detectDuplicates, M = !k.sortStable && e.slice(0), e.sort(V), E) {
                for (; t = e[o++];) t === e[o] && (n = i.push(o));
                for (; n--;) e.splice(i[n], 1)
            }
            return M = null, e
        }, x = t.getText = function (e) {
            var t, i = "",
                n = 0,
                o = e.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) i += x(e)
                } else if (3 === o || 4 === o) return e.nodeValue
            } else
                for (; t = e[n++];) i += x(t);
            return i
        }, T = t.selectors = {
            cacheLength: 50,
            createPseudo: n,
            match: fe,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function (e) {
                    return e[1] = e[1].replace(ke, Te), e[3] = (e[3] || e[4] || e[5] || "").replace(ke, Te), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function (e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                },
                PSEUDO: function (e) {
                    var t, i = !e[6] && e[2];
                    return fe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : i && pe.test(i) && (t = D(i, !0)) && (t = i.indexOf(")", i.length - t) - i.length) && (e[0] = e[0].slice(0, t), e[2] = i.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function (e) {
                    var t = e.replace(ke, Te).toLowerCase();
                    return "*" === e ? function () {
                        return !0
                    } : function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function (e) {
                    var t = z[e + " "];
                    return t || (t = new RegExp("(^|" + ie + ")" + e + "(" + ie + "|$)")) && z(e, function (e) {
                        return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function (e, i, n) {
                    return function (o) {
                        var s = t.attr(o, e);
                        return null == s ? "!=" === i : !i || (s += "", "=" === i ? s === n : "!=" === i ? s !== n : "^=" === i ? n && 0 === s.indexOf(n) : "*=" === i ? n && s.indexOf(n) > -1 : "$=" === i ? n && s.slice(-n.length) === n : "~=" === i ? (" " + s.replace(ae, " ") + " ").indexOf(n) > -1 : "|=" === i && (s === n || s.slice(0, n.length + 1) === n + "-"))
                    }
                },
                CHILD: function (e, t, i, n, o) {
                    var s = "nth" !== e.slice(0, 3),
                        r = "last" !== e.slice(-4),
                        a = "of-type" === t;
                    return 1 === n && 0 === o ? function (e) {
                        return !!e.parentNode
                    } : function (t, i, l) {
                        var d, c, u, p, h, f, g = s !== r ? "nextSibling" : "previousSibling",
                            v = t.parentNode,
                            y = a && t.nodeName.toLowerCase(),
                            m = !l && !a;
                        if (v) {
                            if (s) {
                                for (; g;) {
                                    for (u = t; u = u[g];)
                                        if (a ? u.nodeName.toLowerCase() === y : 1 === u.nodeType) return !1;
                                    f = g = "only" === e && !f && "nextSibling"
                                }
                                return !0
                            }
                            if (f = [r ? v.firstChild : v.lastChild], r && m) {
                                for (c = v[U] || (v[U] = {}), d = c[e] || [], h = d[0] === W && d[1], p = d[0] === W && d[2], u = h && v.childNodes[h]; u = ++h && u && u[g] || (p = h = 0) || f.pop();)
                                    if (1 === u.nodeType && ++p && u === t) {
                                        c[e] = [W, h, p];
                                        break
                                    }
                            } else if (m && (d = (t[U] || (t[U] = {}))[e]) && d[0] === W) p = d[1];
                            else
                                for (;
                                    (u = ++h && u && u[g] || (p = h = 0) || f.pop()) && ((a ? u.nodeName.toLowerCase() !== y : 1 !== u.nodeType) || !++p || (m && ((u[U] || (u[U] = {}))[e] = [W, p]), u !== t)););
                            return (p -= o) === n || p % n == 0 && p / n >= 0
                        }
                    }
                },
                PSEUDO: function (e, i) {
                    var o, s = T.pseudos[e] || T.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return s[U] ? s(i) : s.length > 1 ? (o = [e, e, "", i], T.setFilters.hasOwnProperty(e.toLowerCase()) ? n(function (e, t) {
                        for (var n, o = s(e, i), r = o.length; r--;) n = ee(e, o[r]), e[n] = !(t[n] = o[r])
                    }) : function (e) {
                        return s(e, 0, o)
                    }) : s
                }
            },
            pseudos: {
                not: n(function (e) {
                    var t = [],
                        i = [],
                        o = S(e.replace(le, "$1"));
                    return o[U] ? n(function (e, t, i, n) {
                        for (var s, r = o(e, null, n, []), a = e.length; a--;)(s = r[a]) && (e[a] = !(t[a] = s))
                    }) : function (e, n, s) {
                        return t[0] = e, o(t, null, s, i), t[0] = null, !i.pop()
                    }
                }),
                has: n(function (e) {
                    return function (i) {
                        return t(e, i).length > 0
                    }
                }),
                contains: n(function (e) {
                    return e = e.replace(ke, Te),
                        function (t) {
                            return (t.textContent || t.innerText || x(t)).indexOf(e) > -1
                        }
                }),
                lang: n(function (e) {
                    return he.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(ke, Te).toLowerCase(),
                        function (t) {
                            var i;
                            do {
                                if (i = j ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (i = i.toLowerCase()) === e || 0 === i.indexOf(e + "-")
                            } while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                }),
                target: function (t) {
                    var i = e.location && e.location.hash;
                    return i && i.slice(1) === t.id
                },
                root: function (e) {
                    return e === O
                },
                focus: function (e) {
                    return e === N.activeElement && (!N.hasFocus || N.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function (e) {
                    return !1 === e.disabled
                },
                disabled: function (e) {
                    return !0 === e.disabled
                },
                checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                },
                empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                    return !0
                },
                parent: function (e) {
                    return !T.pseudos.empty(e)
                },
                header: function (e) {
                    return ve.test(e.nodeName)
                },
                input: function (e) {
                    return ge.test(e.nodeName)
                },
                button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function (e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: d(function () {
                    return [0]
                }),
                last: d(function (e, t) {
                    return [t - 1]
                }),
                eq: d(function (e, t, i) {
                    return [0 > i ? i + t : i]
                }),
                even: d(function (e, t) {
                    for (var i = 0; t > i; i += 2) e.push(i);
                    return e
                }),
                odd: d(function (e, t) {
                    for (var i = 1; t > i; i += 2) e.push(i);
                    return e
                }),
                lt: d(function (e, t, i) {
                    for (var n = 0 > i ? i + t : i; --n >= 0;) e.push(n);
                    return e
                }),
                gt: d(function (e, t, i) {
                    for (var n = 0 > i ? i + t : i; ++n < t;) e.push(n);
                    return e
                })
            }
        }, T.pseudos.nth = T.pseudos.eq;
        for (b in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) T.pseudos[b] = a(b);
        for (b in {
                submit: !0,
                reset: !0
            }) T.pseudos[b] = l(b);
        return u.prototype = T.filters = T.pseudos, T.setFilters = new u, D = t.tokenize = function (e, i) {
            var n, o, s, r, a, l, d, c = R[e + " "];
            if (c) return i ? 0 : c.slice(0);
            for (a = e, l = [], d = T.preFilter; a;) {
                (!n || (o = de.exec(a))) && (o && (a = a.slice(o[0].length) || a), l.push(s = [])), n = !1, (o = ce.exec(a)) && (n = o.shift(), s.push({
                    value: n,
                    type: o[0].replace(le, " ")
                }), a = a.slice(n.length));
                for (r in T.filter) !(o = fe[r].exec(a)) || d[r] && !(o = d[r](o)) || (n = o.shift(), s.push({
                    value: n,
                    type: r,
                    matches: o
                }), a = a.slice(n.length));
                if (!n) break
            }
            return i ? a.length : a ? t.error(e) : R(e, l).slice(0)
        }, S = t.compile = function (e, t) {
            var i, n = [],
                o = [],
                s = Y[e + " "];
            if (!s) {
                for (t || (t = D(e)), i = t.length; i--;) s = m(t[i]), s[U] ? n.push(s) : o.push(s);
                s = Y(e, w(o, n)), s.selector = e
            }
            return s
        }, $ = t.select = function (e, t, i, n) {
            var o, s, r, a, l, d = "function" == typeof e && e,
                u = !n && D(e = d.selector || e);
            if (i = i || [], 1 === u.length) {
                if (s = u[0] = u[0].slice(0), s.length > 2 && "ID" === (r = s[0]).type && k.getById && 9 === t.nodeType && j && T.relative[s[1].type]) {
                    if (!(t = (T.find.ID(r.matches[0].replace(ke, Te), t) || [])[0])) return i;
                    d && (t = t.parentNode), e = e.slice(s.shift().value.length)
                }
                for (o = fe.needsContext.test(e) ? 0 : s.length; o-- && (r = s[o], !T.relative[a = r.type]);)
                    if ((l = T.find[a]) && (n = l(r.matches[0].replace(ke, Te), we.test(s[0].type) && c(t.parentNode) || t))) {
                        if (s.splice(o, 1), !(e = n.length && p(s))) return K.apply(i, n), i;
                        break
                    }
            }
            return (d || S(e, u))(n, t, !j, i, we.test(e) && c(t.parentNode) || t), i
        }, k.sortStable = U.split("").sort(V).join("") === U, k.detectDuplicates = !!E, _(), k.sortDetached = o(function (e) {
            return 1 & e.compareDocumentPosition(N.createElement("div"))
        }), o(function (e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || s("type|href|height|width", function (e, t, i) {
            return i ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), k.attributes && o(function (e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || s("value", function (e, t, i) {
            return i || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        }), o(function (e) {
            return null == e.getAttribute("disabled")
        }) || s(te, function (e, t, i) {
            var n;
            return i ? void 0 : !0 === e[t] ? t.toLowerCase() : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
        }), t
    }(e);
    Z.find = oe, Z.expr = oe.selectors, Z.expr[":"] = Z.expr.pseudos, Z.unique = oe.uniqueSort, Z.text = oe.getText, Z.isXMLDoc = oe.isXML, Z.contains = oe.contains;
    var se = Z.expr.match.needsContext,
        re = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        ae = /^.[^:#\[\.,]*$/;
    Z.filter = function (e, t, i) {
        var n = t[0];
        return i && (e = ":not(" + e + ")"), 1 === t.length && 1 === n.nodeType ? Z.find.matchesSelector(n, e) ? [n] : [] : Z.find.matches(e, Z.grep(t, function (e) {
            return 1 === e.nodeType
        }))
    }, Z.fn.extend({
        find: function (e) {
            var t, i = this.length,
                n = [],
                o = this;
            if ("string" != typeof e) return this.pushStack(Z(e).filter(function () {
                for (t = 0; i > t; t++)
                    if (Z.contains(o[t], this)) return !0
            }));
            for (t = 0; i > t; t++) Z.find(e, o[t], n);
            return n = this.pushStack(i > 1 ? Z.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
        },
        filter: function (e) {
            return this.pushStack(n(this, e || [], !1))
        },
        not: function (e) {
            return this.pushStack(n(this, e || [], !0))
        },
        is: function (e) {
            return !!n(this, "string" == typeof e && se.test(e) ? Z(e) : e || [], !1).length
        }
    });
    var le, de = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (Z.fn.init = function (e, t) {
        var i, n;
        if (!e) return this;
        if ("string" == typeof e) {
            if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : de.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || le).find(e) : this.constructor(t).find(e);
            if (i[1]) {
                if (t = t instanceof Z ? t[0] : t, Z.merge(this, Z.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : Q, !0)), re.test(i[1]) && Z.isPlainObject(t))
                    for (i in t) Z.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                return this
            }
            return n = Q.getElementById(i[2]), n && n.parentNode && (this.length = 1, this[0] = n), this.context = Q, this.selector = e, this
        }
        return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : Z.isFunction(e) ? void 0 !== le.ready ? le.ready(e) : e(Z) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), Z.makeArray(e, this))
    }).prototype = Z.fn, le = Z(Q);
    var ce = /^(?:parents|prev(?:Until|All))/,
        ue = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    Z.extend({
        dir: function (e, t, i) {
            for (var n = [], o = void 0 !== i;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (o && Z(e).is(i)) break;
                    n.push(e)
                }
            return n
        },
        sibling: function (e, t) {
            for (var i = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && i.push(e);
            return i
        }
    }), Z.fn.extend({
        has: function (e) {
            var t = Z(e, this),
                i = t.length;
            return this.filter(function () {
                for (var e = 0; i > e; e++)
                    if (Z.contains(this, t[e])) return !0
            })
        },
        closest: function (e, t) {
            for (var i, n = 0, o = this.length, s = [], r = se.test(e) || "string" != typeof e ? Z(e, t || this.context) : 0; o > n; n++)
                for (i = this[n]; i && i !== t; i = i.parentNode)
                    if (i.nodeType < 11 && (r ? r.index(i) > -1 : 1 === i.nodeType && Z.find.matchesSelector(i, e))) {
                        s.push(i);
                        break
                    }
            return this.pushStack(s.length > 1 ? Z.unique(s) : s)
        },
        index: function (e) {
            return e ? "string" == typeof e ? V.call(Z(e), this[0]) : V.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (e, t) {
            return this.pushStack(Z.unique(Z.merge(this.get(), Z(e, t))))
        },
        addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), Z.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function (e) {
            return Z.dir(e, "parentNode")
        },
        parentsUntil: function (e, t, i) {
            return Z.dir(e, "parentNode", i)
        },
        next: function (e) {
            return o(e, "nextSibling")
        },
        prev: function (e) {
            return o(e, "previousSibling")
        },
        nextAll: function (e) {
            return Z.dir(e, "nextSibling")
        },
        prevAll: function (e) {
            return Z.dir(e, "previousSibling")
        },
        nextUntil: function (e, t, i) {
            return Z.dir(e, "nextSibling", i)
        },
        prevUntil: function (e, t, i) {
            return Z.dir(e, "previousSibling", i)
        },
        siblings: function (e) {
            return Z.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function (e) {
            return Z.sibling(e.firstChild)
        },
        contents: function (e) {
            return e.contentDocument || Z.merge([], e.childNodes)
        }
    }, function (e, t) {
        Z.fn[e] = function (i, n) {
            var o = Z.map(this, t, i);
            return "Until" !== e.slice(-5) && (n = i), n && "string" == typeof n && (o = Z.filter(n, o)), this.length > 1 && (ue[e] || Z.unique(o), ce.test(e) && o.reverse()), this.pushStack(o)
        }
    });
    var pe = /\S+/g,
        he = {};
    Z.Callbacks = function (e) {
        e = "string" == typeof e ? he[e] || s(e) : Z.extend({}, e);
        var t, i, n, o, r, a, l = [],
            d = !e.once && [],
            c = function s(c) {
                for (t = e.memory && c, i = !0, a = o || 0, o = 0, r = l.length, n = !0; l && r > a; a++)
                    if (!1 === l[a].apply(c[0], c[1]) && e.stopOnFalse) {
                        t = !1;
                        break
                    }
                n = !1, l && (d ? d.length && s(d.shift()) : t ? l = [] : u.disable())
            },
            u = {
                add: function () {
                    if (l) {
                        var i = l.length;
                        ! function t(i) {
                            Z.each(i, function (i, n) {
                                var o = Z.type(n);
                                "function" === o ? e.unique && u.has(n) || l.push(n) : n && n.length && "string" !== o && t(n)
                            })
                        }(arguments), n ? r = l.length : t && (o = i, c(t))
                    }
                    return this
                },
                remove: function () {
                    return l && Z.each(arguments, function (e, t) {
                        for (var i;
                            (i = Z.inArray(t, l, i)) > -1;) l.splice(i, 1), n && (r >= i && r--, a >= i && a--)
                    }), this
                },
                has: function (e) {
                    return e ? Z.inArray(e, l) > -1 : !(!l || !l.length)
                },
                empty: function () {
                    return l = [], r = 0, this
                },
                disable: function () {
                    return l = d = t = void 0, this
                },
                disabled: function () {
                    return !l
                },
                lock: function () {
                    return d = void 0, t || u.disable(), this
                },
                locked: function () {
                    return !d
                },
                fireWith: function (e, t) {
                    return !l || i && !d || (t = t || [], t = [e, t.slice ? t.slice() : t], n ? d.push(t) : c(t)), this
                },
                fire: function () {
                    return u.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!i
                }
            };
        return u
    }, Z.extend({
        Deferred: function (e) {
            var t = [
                    ["resolve", "done", Z.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", Z.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", Z.Callbacks("memory")]
                ],
                i = "pending",
                n = {
                    state: function () {
                        return i
                    },
                    always: function () {
                        return o.done(arguments).fail(arguments), this
                    },
                    then: function () {
                        var e = arguments;
                        return Z.Deferred(function (i) {
                            Z.each(t, function (t, s) {
                                var r = Z.isFunction(e[t]) && e[t];
                                o[s[1]](function () {
                                    var e = r && r.apply(this, arguments);
                                    e && Z.isFunction(e.promise) ? e.promise().done(i.resolve).fail(i.reject).progress(i.notify) : i[s[0] + "With"](this === n ? i.promise() : this, r ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function (e) {
                        return null != e ? Z.extend(e, n) : n
                    }
                },
                o = {};
            return n.pipe = n.then, Z.each(t, function (e, s) {
                var r = s[2],
                    a = s[3];
                n[s[1]] = r.add, a && r.add(function () {
                    i = a
                }, t[1 ^ e][2].disable, t[2][2].lock), o[s[0]] = function () {
                    return o[s[0] + "With"](this === o ? n : this, arguments), this
                }, o[s[0] + "With"] = r.fireWith
            }), n.promise(o), e && e.call(o, o), o
        },
        when: function (e) {
            var t, i, n, o = 0,
                s = z.call(arguments),
                r = s.length,
                a = 1 !== r || e && Z.isFunction(e.promise) ? r : 0,
                l = 1 === a ? e : Z.Deferred(),
                d = function (e, i, n) {
                    return function (o) {
                        i[e] = this, n[e] = arguments.length > 1 ? z.call(arguments) : o, n === t ? l.notifyWith(i, n) : --a || l.resolveWith(i, n)
                    }
                };
            if (r > 1)
                for (t = new Array(r), i = new Array(r), n = new Array(r); r > o; o++) s[o] && Z.isFunction(s[o].promise) ? s[o].promise().done(d(o, n, s)).fail(l.reject).progress(d(o, i, t)) : --a;
            return a || l.resolveWith(n, s), l.promise()
        }
    });
    var fe;
    Z.fn.ready = function (e) {
        return Z.ready.promise().done(e), this
    }, Z.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function (e) {
            e ? Z.readyWait++ : Z.ready(!0)
        },
        ready: function (e) {
            (!0 === e ? --Z.readyWait : Z.isReady) || (Z.isReady = !0, !0 !== e && --Z.readyWait > 0 || (fe.resolveWith(Q, [Z]), Z.fn.triggerHandler && (Z(Q).triggerHandler("ready"), Z(Q).off("ready"))))
        }
    }), Z.ready.promise = function (t) {
        return fe || (fe = Z.Deferred(), "complete" === Q.readyState ? setTimeout(Z.ready) : (Q.addEventListener("DOMContentLoaded", r, !1), e.addEventListener("load", r, !1))), fe.promise(t)
    }, Z.ready.promise();
    var ge = Z.access = function (e, t, i, n, o, s, r) {
        var a = 0,
            l = e.length,
            d = null == i;
        if ("object" === Z.type(i)) {
            o = !0;
            for (a in i) Z.access(e, t, a, i[a], !0, s, r)
        } else if (void 0 !== n && (o = !0, Z.isFunction(n) || (r = !0), d && (r ? (t.call(e, n), t = null) : (d = t, t = function (e, t, i) {
                return d.call(Z(e), i)
            })), t))
            for (; l > a; a++) t(e[a], i, r ? n : n.call(e[a], a, t(e[a], i)));
        return o ? e : d ? t.call(e) : l ? t(e[0], i) : s
    };
    Z.acceptData = function (e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    }, a.uid = 1, a.accepts = Z.acceptData, a.prototype = {
        key: function (e) {
            if (!a.accepts(e)) return 0;
            var t = {},
                i = e[this.expando];
            if (!i) {
                i = a.uid++;
                try {
                    t[this.expando] = {
                        value: i
                    }, Object.defineProperties(e, t)
                } catch (n) {
                    t[this.expando] = i, Z.extend(e, t)
                }
            }
            return this.cache[i] || (this.cache[i] = {}), i
        },
        set: function (e, t, i) {
            var n, o = this.key(e),
                s = this.cache[o];
            if ("string" == typeof t) s[t] = i;
            else if (Z.isEmptyObject(s)) Z.extend(this.cache[o], t);
            else
                for (n in t) s[n] = t[n];
            return s
        },
        get: function (e, t) {
            var i = this.cache[this.key(e)];
            return void 0 === t ? i : i[t]
        },
        access: function (e, t, i) {
            var n;
            return void 0 === t || t && "string" == typeof t && void 0 === i ? (n = this.get(e, t), void 0 !== n ? n : this.get(e, Z.camelCase(t))) : (this.set(e, t, i), void 0 !== i ? i : t)
        },
        remove: function (e, t) {
            var i, n, o, s = this.key(e),
                r = this.cache[s];
            if (void 0 === t) this.cache[s] = {};
            else {
                Z.isArray(t) ? n = t.concat(t.map(Z.camelCase)) : (o = Z.camelCase(t), t in r ? n = [t, o] : (n = o, n = n in r ? [n] : n.match(pe) || [])), i = n.length;
                for (; i--;) delete r[n[i]]
            }
        },
        hasData: function (e) {
            return !Z.isEmptyObject(this.cache[e[this.expando]] || {})
        },
        discard: function (e) {
            e[this.expando] && delete this.cache[e[this.expando]]
        }
    };
    var ve = new a,
        ye = new a,
        me = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        we = /([A-Z])/g;
    Z.extend({
        hasData: function (e) {
            return ye.hasData(e) || ve.hasData(e)
        },
        data: function (e, t, i) {
            return ye.access(e, t, i)
        },
        removeData: function (e, t) {
            ye.remove(e, t)
        },
        _data: function (e, t, i) {
            return ve.access(e, t, i)
        },
        _removeData: function (e, t) {
            ve.remove(e, t)
        }
    }), Z.fn.extend({
        data: function (e, t) {
            var i, n, o, s = this[0],
                r = s && s.attributes;
            if (void 0 === e) {
                if (this.length && (o = ye.get(s), 1 === s.nodeType && !ve.get(s, "hasDataAttrs"))) {
                    for (i = r.length; i--;) r[i] && (n = r[i].name, 0 === n.indexOf("data-") && (n = Z.camelCase(n.slice(5)), l(s, n, o[n])));
                    ve.set(s, "hasDataAttrs", !0)
                }
                return o
            }
            return "object" == (void 0 === e ? "undefined" : _typeof(e)) ? this.each(function () {
                ye.set(this, e)
            }) : ge(this, function (t) {
                var i, n = Z.camelCase(e);
                if (s && void 0 === t) {
                    if (void 0 !== (i = ye.get(s, e))) return i;
                    if (void 0 !== (i = ye.get(s, n))) return i;
                    if (void 0 !== (i = l(s, n, void 0))) return i
                } else this.each(function () {
                    var i = ye.get(this, n);
                    ye.set(this, n, t), -1 !== e.indexOf("-") && void 0 !== i && ye.set(this, e, t)
                })
            }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function (e) {
            return this.each(function () {
                ye.remove(this, e)
            })
        }
    }), Z.extend({
        queue: function (e, t, i) {
            var n;
            return e ? (t = (t || "fx") + "queue", n = ve.get(e, t), i && (!n || Z.isArray(i) ? n = ve.access(e, t, Z.makeArray(i)) : n.push(i)), n || []) : void 0
        },
        dequeue: function (e, t) {
            t = t || "fx";
            var i = Z.queue(e, t),
                n = i.length,
                o = i.shift(),
                s = Z._queueHooks(e, t),
                r = function () {
                    Z.dequeue(e, t)
                };
            "inprogress" === o && (o = i.shift(), n--), o && ("fx" === t && i.unshift("inprogress"), delete s.stop, o.call(e, r, s)), !n && s && s.empty.fire()
        },
        _queueHooks: function (e, t) {
            var i = t + "queueHooks";
            return ve.get(e, i) || ve.access(e, i, {
                empty: Z.Callbacks("once memory").add(function () {
                    ve.remove(e, [t + "queue", i])
                })
            })
        }
    }), Z.fn.extend({
        queue: function (e, t) {
            var i = 2;
            return "string" != typeof e && (t = e, e = "fx", i--), arguments.length < i ? Z.queue(this[0], e) : void 0 === t ? this : this.each(function () {
                var i = Z.queue(this, e, t);
                Z._queueHooks(this, e), "fx" === e && "inprogress" !== i[0] && Z.dequeue(this, e)
            })
        },
        dequeue: function (e) {
            return this.each(function () {
                Z.dequeue(this, e)
            })
        },
        clearQueue: function (e) {
            return this.queue(e || "fx", [])
        },
        promise: function (e, t) {
            var i, n = 1,
                o = Z.Deferred(),
                s = this,
                r = this.length,
                a = function () {
                    --n || o.resolveWith(s, [s])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; r--;)(i = ve.get(s[r], e + "queueHooks")) && i.empty && (n++, i.empty.add(a));
            return a(), o.promise(t)
        }
    });
    var be = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ke = ["Top", "Right", "Bottom", "Left"],
        Te = function (e, t) {
            return e = t || e, "none" === Z.css(e, "display") || !Z.contains(e.ownerDocument, e)
        },
        xe = /^(?:checkbox|radio)$/i;
    ! function () {
        var e = Q.createDocumentFragment(),
            t = e.appendChild(Q.createElement("div")),
            i = Q.createElement("input");
        i.setAttribute("type", "radio"), i.setAttribute("checked", "checked"), i.setAttribute("name", "t"), t.appendChild(i), J.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", J.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
    }();
    var Ce = "undefined";
    J.focusinBubbles = "onfocusin" in e;
    var De = /^key/,
        Se = /^(?:mouse|pointer|contextmenu)|click/,
        $e = /^(?:focusinfocus|focusoutblur)$/,
        Ae = /^([^.]*)(?:\.(.+)|)$/;
    Z.event = {
        global: {},
        add: function (e, t, i, n, o) {
            var s, r, a, l, d, c, u, p, h, f, g, v = ve.get(e);
            if (v)
                for (i.handler && (s = i, i = s.handler, o = s.selector), i.guid || (i.guid = Z.guid++), (l = v.events) || (l = v.events = {}), (r = v.handle) || (r = v.handle = function (t) {
                        return (void 0 === Z ? "undefined" : _typeof(Z)) !== Ce && Z.event.triggered !== t.type ? Z.event.dispatch.apply(e, arguments) : void 0
                    }), t = (t || "").match(pe) || [""], d = t.length; d--;) a = Ae.exec(t[d]) || [], h = g = a[1], f = (a[2] || "").split(".").sort(), h && (u = Z.event.special[h] || {}, h = (o ? u.delegateType : u.bindType) || h, u = Z.event.special[h] || {}, c = Z.extend({
                    type: h,
                    origType: g,
                    data: n,
                    handler: i,
                    guid: i.guid,
                    selector: o,
                    needsContext: o && Z.expr.match.needsContext.test(o),
                    namespace: f.join(".")
                }, s), (p = l[h]) || (p = l[h] = [], p.delegateCount = 0, u.setup && !1 !== u.setup.call(e, n, f, r) || e.addEventListener && e.addEventListener(h, r, !1)), u.add && (u.add.call(e, c), c.handler.guid || (c.handler.guid = i.guid)), o ? p.splice(p.delegateCount++, 0, c) : p.push(c), Z.event.global[h] = !0)
        },
        remove: function (e, t, i, n, o) {
            var s, r, a, l, d, c, u, p, h, f, g, v = ve.hasData(e) && ve.get(e);
            if (v && (l = v.events)) {
                for (t = (t || "").match(pe) || [""], d = t.length; d--;)
                    if (a = Ae.exec(t[d]) || [], h = g = a[1], f = (a[2] || "").split(".").sort(), h) {
                        for (u = Z.event.special[h] || {}, h = (n ? u.delegateType : u.bindType) || h, p = l[h] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), r = s = p.length; s--;) c = p[s], !o && g !== c.origType || i && i.guid !== c.guid || a && !a.test(c.namespace) || n && n !== c.selector && ("**" !== n || !c.selector) || (p.splice(s, 1), c.selector && p.delegateCount--, u.remove && u.remove.call(e, c));
                        r && !p.length && (u.teardown && !1 !== u.teardown.call(e, f, v.handle) || Z.removeEvent(e, h, v.handle), delete l[h])
                    } else
                        for (h in l) Z.event.remove(e, h + t[d], i, n, !0);
                Z.isEmptyObject(l) && (delete v.handle, ve.remove(e, "events"))
            }
        },
        trigger: function (t, i, n, o) {
            var s, r, a, l, d, c, u, p = [n || Q],
                h = G.call(t, "type") ? t.type : t,
                f = G.call(t, "namespace") ? t.namespace.split(".") : [];
            if (r = a = n = n || Q, 3 !== n.nodeType && 8 !== n.nodeType && !$e.test(h + Z.event.triggered) && (h.indexOf(".") >= 0 && (f = h.split("."), h = f.shift(), f.sort()), d = h.indexOf(":") < 0 && "on" + h, t = t[Z.expando] ? t : new Z.Event(h, "object" == (void 0 === t ? "undefined" : _typeof(t)) && t), t.isTrigger = o ? 2 : 3, t.namespace = f.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = n), i = null == i ? [t] : Z.makeArray(i, [t]), u = Z.event.special[h] || {}, o || !u.trigger || !1 !== u.trigger.apply(n, i))) {
                if (!o && !u.noBubble && !Z.isWindow(n)) {
                    for (l = u.delegateType || h, $e.test(l + h) || (r = r.parentNode); r; r = r.parentNode) p.push(r), a = r;
                    a === (n.ownerDocument || Q) && p.push(a.defaultView || a.parentWindow || e)
                }
                for (s = 0;
                    (r = p[s++]) && !t.isPropagationStopped();) t.type = s > 1 ? l : u.bindType || h, c = (ve.get(r, "events") || {})[t.type] && ve.get(r, "handle"), c && c.apply(r, i), (c = d && r[d]) && c.apply && Z.acceptData(r) && (t.result = c.apply(r, i), !1 === t.result && t.preventDefault());
                return t.type = h, o || t.isDefaultPrevented() || u._default && !1 !== u._default.apply(p.pop(), i) || !Z.acceptData(n) || d && Z.isFunction(n[h]) && !Z.isWindow(n) && (a = n[d], a && (n[d] = null), Z.event.triggered = h, n[h](), Z.event.triggered = void 0, a && (n[d] = a)), t.result
            }
        },
        dispatch: function (e) {
            e = Z.event.fix(e);
            var t, i, n, o, s, r = [],
                a = z.call(arguments),
                l = (ve.get(this, "events") || {})[e.type] || [],
                d = Z.event.special[e.type] || {};
            if (a[0] = e, e.delegateTarget = this, !d.preDispatch || !1 !== d.preDispatch.call(this, e)) {
                for (r = Z.event.handlers.call(this, e, l), t = 0;
                    (o = r[t++]) && !e.isPropagationStopped();)
                    for (e.currentTarget = o.elem, i = 0;
                        (s = o.handlers[i++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(s.namespace)) && (e.handleObj = s, e.data = s.data, void 0 !== (n = ((Z.event.special[s.origType] || {}).handle || s.handler).apply(o.elem, a)) && !1 === (e.result = n) && (e.preventDefault(), e.stopPropagation()));
                return d.postDispatch && d.postDispatch.call(this, e), e.result
            }
        },
        handlers: function (e, t) {
            var i, n, o, s, r = [],
                a = t.delegateCount,
                l = e.target;
            if (a && l.nodeType && (!e.button || "click" !== e.type))
                for (; l !== this; l = l.parentNode || this)
                    if (!0 !== l.disabled || "click" !== e.type) {
                        for (n = [], i = 0; a > i; i++) s = t[i], o = s.selector + " ", void 0 === n[o] && (n[o] = s.needsContext ? Z(o, this).index(l) >= 0 : Z.find(o, this, null, [l]).length), n[o] && n.push(s);
                        n.length && r.push({
                            elem: l,
                            handlers: n
                        })
                    }
            return a < t.length && r.push({
                elem: this,
                handlers: t.slice(a)
            }), r
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function (e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (e, t) {
                var i, n, o, s = t.button;
                return null == e.pageX && null != t.clientX && (i = e.target.ownerDocument || Q, n = i.documentElement, o = i.body, e.pageX = t.clientX + (n && n.scrollLeft || o && o.scrollLeft || 0) - (n && n.clientLeft || o && o.clientLeft || 0), e.pageY = t.clientY + (n && n.scrollTop || o && o.scrollTop || 0) - (n && n.clientTop || o && o.clientTop || 0)), e.which || void 0 === s || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), e
            }
        },
        fix: function (e) {
            if (e[Z.expando]) return e;
            var t, i, n, o = e.type,
                s = e,
                r = this.fixHooks[o];
            for (r || (this.fixHooks[o] = r = Se.test(o) ? this.mouseHooks : De.test(o) ? this.keyHooks : {}), n = r.props ? this.props.concat(r.props) : this.props, e = new Z.Event(s), t = n.length; t--;) i = n[t], e[i] = s[i];
            return e.target || (e.target = Q), 3 === e.target.nodeType && (e.target = e.target.parentNode), r.filter ? r.filter(e, s) : e
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function () {
                    return this !== u() && this.focus ? (this.focus(), !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function () {
                    return this === u() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function () {
                    return "checkbox" === this.type && this.click && Z.nodeName(this, "input") ? (this.click(), !1) : void 0
                },
                _default: function (e) {
                    return Z.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function (e, t, i, n) {
            var o = Z.extend(new Z.Event, i, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            n ? Z.event.trigger(o, null, t) : Z.event.dispatch.call(t, o), o.isDefaultPrevented() && i.preventDefault()
        }
    }, Z.removeEvent = function (e, t, i) {
        e.removeEventListener && e.removeEventListener(t, i, !1)
    }, Z.Event = function (e, t) {
        return this instanceof Z.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? d : c) : this.type = e, t && Z.extend(this, t), this.timeStamp = e && e.timeStamp || Z.now(), void(this[Z.expando] = !0)) : new Z.Event(e, t)
    }, Z.Event.prototype = {
        isDefaultPrevented: c,
        isPropagationStopped: c,
        isImmediatePropagationStopped: c,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = d, e && e.preventDefault && e.preventDefault()
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = d, e && e.stopPropagation && e.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = d, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, Z.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (e, t) {
        Z.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function (e) {
                var i, n = this,
                    o = e.relatedTarget,
                    s = e.handleObj;
                return (!o || o !== n && !Z.contains(n, o)) && (e.type = s.origType, i = s.handler.apply(this, arguments), e.type = t), i
            }
        }
    }), J.focusinBubbles || Z.each({
        focus: "focusin",
        blur: "focusout"
    }, function (e, t) {
        var i = function (e) {
            Z.event.simulate(t, e.target, Z.event.fix(e), !0)
        };
        Z.event.special[t] = {
            setup: function () {
                var n = this.ownerDocument || this,
                    o = ve.access(n, t);
                o || n.addEventListener(e, i, !0), ve.access(n, t, (o || 0) + 1)
            },
            teardown: function () {
                var n = this.ownerDocument || this,
                    o = ve.access(n, t) - 1;
                o ? ve.access(n, t, o) : (n.removeEventListener(e, i, !0), ve.remove(n, t))
            }
        }
    }), Z.fn.extend({
        on: function (e, t, i, n, o) {
            var s, r;
            if ("object" == (void 0 === e ? "undefined" : _typeof(e))) {
                "string" != typeof t && (i = i || t, t = void 0);
                for (r in e) this.on(r, t, i, e[r], o);
                return this
            }
            if (null == i && null == n ? (n = t, i = t = void 0) : null == n && ("string" == typeof t ? (n = i, i = void 0) : (n = i, i = t, t = void 0)), !1 === n) n = c;
            else if (!n) return this;
            return 1 === o && (s = n, n = function (e) {
                return Z().off(e), s.apply(this, arguments)
            }, n.guid = s.guid || (s.guid = Z.guid++)), this.each(function () {
                Z.event.add(this, e, n, i, t)
            })
        },
        one: function (e, t, i, n) {
            return this.on(e, t, i, n, 1)
        },
        off: function (e, t, i) {
            var n, o;
            if (e && e.preventDefault && e.handleObj) return n = e.handleObj, Z(e.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
            if ("object" == (void 0 === e ? "undefined" : _typeof(e))) {
                for (o in e) this.off(o, t, e[o]);
                return this
            }
            return (!1 === t || "function" == typeof t) && (i = t, t = void 0), !1 === i && (i = c), this.each(function () {
                Z.event.remove(this, e, i, t)
            })
        },
        trigger: function (e, t) {
            return this.each(function () {
                Z.event.trigger(e, t, this)
            })
        },
        triggerHandler: function (e, t) {
            var i = this[0];
            return i ? Z.event.trigger(e, t, i, !0) : void 0
        }
    });
    var Me = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Ee = /<([\w:]+)/,
        _e = /<|&#?\w+;/,
        Ne = /<(?:script|style|link)/i,
        Oe = /checked\s*(?:[^=]|=\s*.checked.)/i,
        je = /^$|\/(?:java|ecma)script/i,
        He = /^true\/(.*)/,
        Fe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Pe = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    Pe.optgroup = Pe.option, Pe.tbody = Pe.tfoot = Pe.colgroup = Pe.caption = Pe.thead, Pe.th = Pe.td, Z.extend({
        clone: function (e, t, i) {
            var n, o, s, r, a = e.cloneNode(!0),
                l = Z.contains(e.ownerDocument, e);
            if (!(J.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || Z.isXMLDoc(e)))
                for (r = y(a), s = y(e), n = 0, o = s.length; o > n; n++) m(s[n], r[n]);
            if (t)
                if (i)
                    for (s = s || y(e), r = r || y(a), n = 0, o = s.length; o > n; n++) v(s[n], r[n]);
                else v(e, a);
            return r = y(a, "script"), r.length > 0 && g(r, !l && y(e, "script")), a
        },
        buildFragment: function (e, t, i, n) {
            for (var o, s, r, a, l, d, c = t.createDocumentFragment(), u = [], p = 0, h = e.length; h > p; p++)
                if ((o = e[p]) || 0 === o)
                    if ("object" === Z.type(o)) Z.merge(u, o.nodeType ? [o] : o);
                    else if (_e.test(o)) {
                for (s = s || c.appendChild(t.createElement("div")), r = (Ee.exec(o) || ["", ""])[1].toLowerCase(), a = Pe[r] || Pe._default, s.innerHTML = a[1] + o.replace(Me, "<$1></$2>") + a[2], d = a[0]; d--;) s = s.lastChild;
                Z.merge(u, s.childNodes), s = c.firstChild, s.textContent = ""
            } else u.push(t.createTextNode(o));
            for (c.textContent = "", p = 0; o = u[p++];)
                if ((!n || -1 === Z.inArray(o, n)) && (l = Z.contains(o.ownerDocument, o), s = y(c.appendChild(o), "script"), l && g(s), i))
                    for (d = 0; o = s[d++];) je.test(o.type || "") && i.push(o);
            return c
        },
        cleanData: function (e) {
            for (var t, i, n, o, s = Z.event.special, r = 0; void 0 !== (i = e[r]); r++) {
                if (Z.acceptData(i) && (o = i[ve.expando]) && (t = ve.cache[o])) {
                    if (t.events)
                        for (n in t.events) s[n] ? Z.event.remove(i, n) : Z.removeEvent(i, n, t.handle);
                    ve.cache[o] && delete ve.cache[o]
                }
                delete ye.cache[i[ye.expando]]
            }
        }
    }), Z.fn.extend({
        text: function (e) {
            return ge(this, function (e) {
                return void 0 === e ? Z.text(this) : this.empty().each(function () {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function () {
            return this.domManip(arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    p(this, e).appendChild(e)
                }
            })
        },
        prepend: function () {
            return this.domManip(arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = p(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function () {
            return this.domManip(arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function () {
            return this.domManip(arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function (e, t) {
            for (var i, n = e ? Z.filter(e, this) : this, o = 0; null != (i = n[o]); o++) t || 1 !== i.nodeType || Z.cleanData(y(i)), i.parentNode && (t && Z.contains(i.ownerDocument, i) && g(y(i, "script")), i.parentNode.removeChild(i));
            return this
        },
        empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (Z.cleanData(y(e, !1)), e.textContent = "");
            return this
        },
        clone: function (e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function () {
                return Z.clone(this, e, t)
            })
        },
        html: function (e) {
            return ge(this, function (e) {
                var t = this[0] || {},
                    i = 0,
                    n = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Ne.test(e) && !Pe[(Ee.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = e.replace(Me, "<$1></$2>");
                    try {
                        for (; n > i; i++) t = this[i] || {}, 1 === t.nodeType && (Z.cleanData(y(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function () {
            var e = arguments[0];
            return this.domManip(arguments, function (t) {
                e = this.parentNode, Z.cleanData(y(this)), e && e.replaceChild(t, this)
            }), e && (e.length || e.nodeType) ? this : this.remove()
        },
        detach: function (e) {
            return this.remove(e, !0)
        },
        domManip: function (e, t) {
            e = R.apply([], e);
            var i, n, o, s, r, a, l = 0,
                d = this.length,
                c = this,
                u = d - 1,
                p = e[0],
                g = Z.isFunction(p);
            if (g || d > 1 && "string" == typeof p && !J.checkClone && Oe.test(p)) return this.each(function (i) {
                var n = c.eq(i);
                g && (e[0] = p.call(this, i, n.html())), n.domManip(e, t)
            });
            if (d && (i = Z.buildFragment(e, this[0].ownerDocument, !1, this), n = i.firstChild, 1 === i.childNodes.length && (i = n), n)) {
                for (o = Z.map(y(i, "script"), h), s = o.length; d > l; l++) r = i, l !== u && (r = Z.clone(r, !0, !0), s && Z.merge(o, y(r, "script"))), t.call(this[l], r, l);
                if (s)
                    for (a = o[o.length - 1].ownerDocument, Z.map(o, f), l = 0; s > l; l++) r = o[l], je.test(r.type || "") && !ve.access(r, "globalEval") && Z.contains(a, r) && (r.src ? Z._evalUrl && Z._evalUrl(r.src) : Z.globalEval(r.textContent.replace(Fe, "")))
            }
            return this
        }
    }), Z.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, t) {
        Z.fn[e] = function (e) {
            for (var i, n = [], o = Z(e), s = o.length - 1, r = 0; s >= r; r++) i = r === s ? this : this.clone(!0), Z(o[r])[t](i), Y.apply(n, i.get());
            return this.pushStack(n)
        }
    });
    var Le, Ue = {},
        qe = /^margin/,
        We = new RegExp("^(" + be + ")(?!px)[a-z%]+$", "i"),
        Ie = function (t) {
            return t.ownerDocument.defaultView.opener ? t.ownerDocument.defaultView.getComputedStyle(t, null) : e.getComputedStyle(t, null)
        };
    ! function () {
        var t, i, n = Q.documentElement,
            o = Q.createElement("div"),
            s = Q.createElement("div");
        if (s.style) {
            var r = function () {
                s.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", s.innerHTML = "", n.appendChild(o);
                var r = e.getComputedStyle(s, null);
                t = "1%" !== r.top, i = "4px" === r.width, n.removeChild(o)
            };
            s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", J.clearCloneStyle = "content-box" === s.style.backgroundClip, o.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", o.appendChild(s), e.getComputedStyle && Z.extend(J, {
                pixelPosition: function () {
                    return r(), t
                },
                boxSizingReliable: function () {
                    return null == i && r(), i
                },
                reliableMarginRight: function () {
                    var t, i = s.appendChild(Q.createElement("div"));
                    return i.style.cssText = s.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", i.style.marginRight = i.style.width = "0", s.style.width = "1px", n.appendChild(o), t = !parseFloat(e.getComputedStyle(i, null).marginRight), n.removeChild(o), s.removeChild(i), t
                }
            })
        }
    }(), Z.swap = function (e, t, i, n) {
        var o, s, r = {};
        for (s in t) r[s] = e.style[s], e.style[s] = t[s];
        o = i.apply(e, n || []);
        for (s in t) e.style[s] = r[s];
        return o
    };
    var ze = /^(none|table(?!-c[ea]).+)/,
        Re = new RegExp("^(" + be + ")(.*)$", "i"),
        Ye = new RegExp("^([+-])=(" + be + ")", "i"),
        Ve = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Be = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Xe = ["Webkit", "O", "Moz", "ms"];
    Z.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var i = k(e, "opacity");
                        return "" === i ? "1" : i
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: "cssFloat"
        },
        style: function (e, t, i, n) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, s, r, a = Z.camelCase(t),
                    l = e.style;
                return t = Z.cssProps[a] || (Z.cssProps[a] = x(l, a)), r = Z.cssHooks[t] || Z.cssHooks[a], void 0 === i ? r && "get" in r && void 0 !== (o = r.get(e, !1, n)) ? o : l[t] : (s = void 0 === i ? "undefined" : _typeof(i), "string" === s && (o = Ye.exec(i)) && (i = (o[1] + 1) * o[2] + parseFloat(Z.css(e, t)), s = "number"), void(null != i && i === i && ("number" !== s || Z.cssNumber[a] || (i += "px"), J.clearCloneStyle || "" !== i || 0 !== t.indexOf("background") || (l[t] = "inherit"), r && "set" in r && void 0 === (i = r.set(e, i, n)) || (l[t] = i))))
            }
        },
        css: function (e, t, i, n) {
            var o, s, r, a = Z.camelCase(t);
            return t = Z.cssProps[a] || (Z.cssProps[a] = x(e.style, a)), r = Z.cssHooks[t] || Z.cssHooks[a], r && "get" in r && (o = r.get(e, !0, i)), void 0 === o && (o = k(e, t, n)), "normal" === o && t in Be && (o = Be[t]), "" === i || i ? (s = parseFloat(o), !0 === i || Z.isNumeric(s) ? s || 0 : o) : o
        }
    }), Z.each(["height", "width"], function (e, t) {
        Z.cssHooks[t] = {
            get: function (e, i, n) {
                return i ? ze.test(Z.css(e, "display")) && 0 === e.offsetWidth ? Z.swap(e, Ve, function () {
                    return S(e, t, n)
                }) : S(e, t, n) : void 0
            },
            set: function (e, i, n) {
                var o = n && Ie(e);
                return C(e, i, n ? D(e, t, n, "border-box" === Z.css(e, "boxSizing", !1, o), o) : 0)
            }
        }
    }), Z.cssHooks.marginRight = T(J.reliableMarginRight, function (e, t) {
        return t ? Z.swap(e, {
            display: "inline-block"
        }, k, [e, "marginRight"]) : void 0
    }), Z.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (e, t) {
        Z.cssHooks[e + t] = {
            expand: function (i) {
                for (var n = 0, o = {}, s = "string" == typeof i ? i.split(" ") : [i]; 4 > n; n++) o[e + ke[n] + t] = s[n] || s[n - 2] || s[0];
                return o
            }
        }, qe.test(e) || (Z.cssHooks[e + t].set = C)
    }), Z.fn.extend({
        css: function (e, t) {
            return ge(this, function (e, t, i) {
                var n, o, s = {},
                    r = 0;
                if (Z.isArray(t)) {
                    for (n = Ie(e), o = t.length; o > r; r++) s[t[r]] = Z.css(e, t[r], !1, n);
                    return s
                }
                return void 0 !== i ? Z.style(e, t, i) : Z.css(e, t)
            }, e, t, arguments.length > 1)
        },
        show: function () {
            return $(this, !0)
        },
        hide: function () {
            return $(this)
        },
        toggle: function (e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                Te(this) ? Z(this).show() : Z(this).hide()
            })
        }
    }), Z.Tween = A, A.prototype = {
        constructor: A,
        init: function (e, t, i, n, o, s) {
            this.elem = e, this.prop = i, this.easing = o || "swing", this.options = t, this.start = this.now = this.cur(), this.end = n, this.unit = s || (Z.cssNumber[i] ? "" : "px")
        },
        cur: function () {
            var e = A.propHooks[this.prop];
            return e && e.get ? e.get(this) : A.propHooks._default.get(this)
        },
        run: function (e) {
            var t, i = A.propHooks[this.prop];
            return this.options.duration ? this.pos = t = Z.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : A.propHooks._default.set(this), this
        }
    }, A.prototype.init.prototype = A.prototype, A.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = Z.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
            },
            set: function (e) {
                Z.fx.step[e.prop] ? Z.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[Z.cssProps[e.prop]] || Z.cssHooks[e.prop]) ? Z.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, A.propHooks.scrollTop = A.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, Z.easing = {
        linear: function (e) {
            return e
        },
        swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, Z.fx = A.prototype.init, Z.fx.step = {};
    var Ge, Je, Qe = /^(?:toggle|show|hide)$/,
        Ke = new RegExp("^(?:([+-])=|)(" + be + ")([a-z%]*)$", "i"),
        Ze = /queueHooks$/,
        et = [N],
        tt = {
            "*": [function (e, t) {
                var i = this.createTween(e, t),
                    n = i.cur(),
                    o = Ke.exec(t),
                    s = o && o[3] || (Z.cssNumber[e] ? "" : "px"),
                    r = (Z.cssNumber[e] || "px" !== s && +n) && Ke.exec(Z.css(i.elem, e)),
                    a = 1,
                    l = 20;
                if (r && r[3] !== s) {
                    s = s || r[3], o = o || [], r = +n || 1;
                    do {
                        a = a || ".5", r /= a, Z.style(i.elem, e, r + s)
                    } while (a !== (a = i.cur() / n) && 1 !== a && --l)
                }
                return o && (r = i.start = +r || +n || 0, i.unit = s, i.end = o[1] ? r + (o[1] + 1) * o[2] : +o[2]), i
            }]
        };
    Z.Animation = Z.extend(j, {
            tweener: function (e, t) {
                Z.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
                for (var i, n = 0, o = e.length; o > n; n++) i = e[n], tt[i] = tt[i] || [], tt[i].unshift(t)
            },
            prefilter: function (e, t) {
                t ? et.unshift(e) : et.push(e)
            }
        }), Z.speed = function (e, t, i) {
            var n = e && "object" == (void 0 === e ? "undefined" : _typeof(e)) ? Z.extend({}, e) : {
                complete: i || !i && t || Z.isFunction(e) && e,
                duration: e,
                easing: i && t || t && !Z.isFunction(t) && t
            };
            return n.duration = Z.fx.off ? 0 : "number" == typeof n.duration ? n.duration : n.duration in Z.fx.speeds ? Z.fx.speeds[n.duration] : Z.fx.speeds._default, (null == n.queue || !0 === n.queue) && (n.queue = "fx"), n.old = n.complete, n.complete = function () {
                Z.isFunction(n.old) && n.old.call(this), n.queue && Z.dequeue(this, n.queue)
            }, n
        }, Z.fn.extend({
            fadeTo: function (e, t, i, n) {
                return this.filter(Te).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, i, n)
            },
            animate: function (e, t, i, n) {
                var o = Z.isEmptyObject(e),
                    s = Z.speed(t, i, n),
                    r = function () {
                        var t = j(this, Z.extend({}, e), s);
                        (o || ve.get(this, "finish")) && t.stop(!0)
                    };
                return r.finish = r, o || !1 === s.queue ? this.each(r) : this.queue(s.queue, r)
            },
            stop: function (e, t, i) {
                var n = function (e) {
                    var t = e.stop;
                    delete e.stop, t(i)
                };
                return "string" != typeof e && (i = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function () {
                    var t = !0,
                        o = null != e && e + "queueHooks",
                        s = Z.timers,
                        r = ve.get(this);
                    if (o) r[o] && r[o].stop && n(r[o]);
                    else
                        for (o in r) r[o] && r[o].stop && Ze.test(o) && n(r[o]);
                    for (o = s.length; o--;) s[o].elem !== this || null != e && s[o].queue !== e || (s[o].anim.stop(i), t = !1, s.splice(o, 1));
                    (t || !i) && Z.dequeue(this, e)
                })
            },
            finish: function (e) {
                return !1 !== e && (e = e || "fx"), this.each(function () {
                    var t, i = ve.get(this),
                        n = i[e + "queue"],
                        o = i[e + "queueHooks"],
                        s = Z.timers,
                        r = n ? n.length : 0;
                    for (i.finish = !0, Z.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = s.length; t--;) s[t].elem === this && s[t].queue === e && (s[t].anim.stop(!0), s.splice(t, 1));
                    for (t = 0; r > t; t++) n[t] && n[t].finish && n[t].finish.call(this);
                    delete i.finish
                })
            }
        }), Z.each(["toggle", "show", "hide"], function (e, t) {
            var i = Z.fn[t];
            Z.fn[t] = function (e, n, o) {
                return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(E(t, !0), e, n, o)
            }
        }), Z.each({
            slideDown: E("show"),
            slideUp: E("hide"),
            slideToggle: E("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function (e, t) {
            Z.fn[e] = function (e, i, n) {
                return this.animate(t, e, i, n)
            }
        }), Z.timers = [], Z.fx.tick = function () {
            var e, t = 0,
                i = Z.timers;
            for (Ge = Z.now(); t < i.length; t++)(e = i[t])() || i[t] !== e || i.splice(t--, 1);
            i.length || Z.fx.stop(), Ge = void 0
        }, Z.fx.timer = function (e) {
            Z.timers.push(e), e() ? Z.fx.start() : Z.timers.pop()
        }, Z.fx.interval = 13, Z.fx.start = function () {
            Je || (Je = setInterval(Z.fx.tick, Z.fx.interval))
        }, Z.fx.stop = function () {
            clearInterval(Je), Je = null
        }, Z.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, Z.fn.delay = function (e, t) {
            return e = Z.fx ? Z.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, i) {
                var n = setTimeout(t, e);
                i.stop = function () {
                    clearTimeout(n)
                }
            })
        },
        function () {
            var e = Q.createElement("input"),
                t = Q.createElement("select"),
                i = t.appendChild(Q.createElement("option"));
            e.type = "checkbox", J.checkOn = "" !== e.value, J.optSelected = i.selected, t.disabled = !0, J.optDisabled = !i.disabled, e = Q.createElement("input"), e.value = "t", e.type = "radio", J.radioValue = "t" === e.value
        }();
    var it, nt, ot = Z.expr.attrHandle;
    Z.fn.extend({
        attr: function (e, t) {
            return ge(this, Z.attr, e, t, arguments.length > 1)
        },
        removeAttr: function (e) {
            return this.each(function () {
                Z.removeAttr(this, e)
            })
        }
    }), Z.extend({
        attr: function (e, t, i) {
            var n, o, s = e.nodeType;
            if (e && 3 !== s && 8 !== s && 2 !== s) return _typeof(e.getAttribute) === Ce ? Z.prop(e, t, i) : (1 === s && Z.isXMLDoc(e) || (t = t.toLowerCase(), n = Z.attrHooks[t] || (Z.expr.match.bool.test(t) ? nt : it)), void 0 === i ? n && "get" in n && null !== (o = n.get(e, t)) ? o : (o = Z.find.attr(e, t), null == o ? void 0 : o) : null !== i ? n && "set" in n && void 0 !== (o = n.set(e, i, t)) ? o : (e.setAttribute(t, i + ""), i) : void Z.removeAttr(e, t))
        },
        removeAttr: function (e, t) {
            var i, n, o = 0,
                s = t && t.match(pe);
            if (s && 1 === e.nodeType)
                for (; i = s[o++];) n = Z.propFix[i] || i, Z.expr.match.bool.test(i) && (e[n] = !1), e.removeAttribute(i)
        },
        attrHooks: {
            type: {
                set: function (e, t) {
                    if (!J.radioValue && "radio" === t && Z.nodeName(e, "input")) {
                        var i = e.value;
                        return e.setAttribute("type", t), i && (e.value = i), t
                    }
                }
            }
        }
    }), nt = {
        set: function (e, t, i) {
            return !1 === t ? Z.removeAttr(e, i) : e.setAttribute(i, i), i
        }
    }, Z.each(Z.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var i = ot[t] || Z.find.attr;
        ot[t] = function (e, t, n) {
            var o, s;
            return n || (s = ot[t], ot[t] = o, o = null != i(e, t, n) ? t.toLowerCase() : null, ot[t] = s), o
        }
    });
    var st = /^(?:input|select|textarea|button)$/i;
    Z.fn.extend({
        prop: function (e, t) {
            return ge(this, Z.prop, e, t, arguments.length > 1)
        },
        removeProp: function (e) {
            return this.each(function () {
                delete this[Z.propFix[e] || e]
            })
        }
    }), Z.extend({
        propFix: {
            for: "htmlFor",
            class: "className"
        },
        prop: function (e, t, i) {
            var n, o, s, r = e.nodeType;
            if (e && 3 !== r && 8 !== r && 2 !== r) return s = 1 !== r || !Z.isXMLDoc(e), s && (t = Z.propFix[t] || t, o = Z.propHooks[t]), void 0 !== i ? o && "set" in o && void 0 !== (n = o.set(e, i, t)) ? n : e[t] = i : o && "get" in o && null !== (n = o.get(e, t)) ? n : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function (e) {
                    return e.hasAttribute("tabindex") || st.test(e.nodeName) || e.href ? e.tabIndex : -1
                }
            }
        }
    }), J.optSelected || (Z.propHooks.selected = {
        get: function (e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        }
    }), Z.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        Z.propFix[this.toLowerCase()] = this
    });
    var rt = /[\t\r\n\f]/g;
    Z.fn.extend({
        addClass: function (e) {
            var t, i, n, o, s, r, a = "string" == typeof e && e,
                l = 0,
                d = this.length;
            if (Z.isFunction(e)) return this.each(function (t) {
                Z(this).addClass(e.call(this, t, this.className))
            });
            if (a)
                for (t = (e || "").match(pe) || []; d > l; l++)
                    if (i = this[l], n = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(rt, " ") : " ")) {
                        for (s = 0; o = t[s++];) n.indexOf(" " + o + " ") < 0 && (n += o + " ");
                        r = Z.trim(n), i.className !== r && (i.className = r)
                    }
            return this
        },
        removeClass: function (e) {
            var t, i, n, o, s, r, a = 0 === arguments.length || "string" == typeof e && e,
                l = 0,
                d = this.length;
            if (Z.isFunction(e)) return this.each(function (t) {
                Z(this).removeClass(e.call(this, t, this.className))
            });
            if (a)
                for (t = (e || "").match(pe) || []; d > l; l++)
                    if (i = this[l], n = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(rt, " ") : "")) {
                        for (s = 0; o = t[s++];)
                            for (; n.indexOf(" " + o + " ") >= 0;) n = n.replace(" " + o + " ", " ");
                        r = e ? Z.trim(n) : "", i.className !== r && (i.className = r)
                    }
            return this
        },
        toggleClass: function (e, t) {
            var i = void 0 === e ? "undefined" : _typeof(e);
            return "boolean" == typeof t && "string" === i ? t ? this.addClass(e) : this.removeClass(e) : this.each(Z.isFunction(e) ? function (i) {
                Z(this).toggleClass(e.call(this, i, this.className, t), t)
            } : function () {
                if ("string" === i)
                    for (var t, n = 0, o = Z(this), s = e.match(pe) || []; t = s[n++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                else(i === Ce || "boolean" === i) && (this.className && ve.set(this, "__className__", this.className), this.className = this.className || !1 === e ? "" : ve.get(this, "__className__") || "")
            })
        },
        hasClass: function (e) {
            for (var t = " " + e + " ", i = 0, n = this.length; n > i; i++)
                if (1 === this[i].nodeType && (" " + this[i].className + " ").replace(rt, " ").indexOf(t) >= 0) return !0;
            return !1
        }
    });
    var at = /\r/g;
    Z.fn.extend({
        val: function (e) {
            var t, i, n, o = this[0];
            return arguments.length ? (n = Z.isFunction(e), this.each(function (i) {
                var o;
                1 === this.nodeType && (o = n ? e.call(this, i, Z(this).val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : Z.isArray(o) && (o = Z.map(o, function (e) {
                    return null == e ? "" : e + ""
                })), (t = Z.valHooks[this.type] || Z.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, o, "value") || (this.value = o))
            })) : o ? (t = Z.valHooks[o.type] || Z.valHooks[o.nodeName.toLowerCase()], t && "get" in t && void 0 !== (i = t.get(o, "value")) ? i : (i = o.value, "string" == typeof i ? i.replace(at, "") : null == i ? "" : i)) : void 0
        }
    }), Z.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = Z.find.attr(e, "value");
                    return null != t ? t : Z.trim(Z.text(e))
                }
            },
            select: {
                get: function (e) {
                    for (var t, i, n = e.options, o = e.selectedIndex, s = "select-one" === e.type || 0 > o, r = s ? null : [], a = s ? o + 1 : n.length, l = 0 > o ? a : s ? o : 0; a > l; l++)
                        if (i = n[l], !(!i.selected && l !== o || (J.optDisabled ? i.disabled : null !== i.getAttribute("disabled")) || i.parentNode.disabled && Z.nodeName(i.parentNode, "optgroup"))) {
                            if (t = Z(i).val(), s) return t;
                            r.push(t)
                        }
                    return r
                },
                set: function (e, t) {
                    for (var i, n, o = e.options, s = Z.makeArray(t), r = o.length; r--;) n = o[r], (n.selected = Z.inArray(n.value, s) >= 0) && (i = !0);
                    return i || (e.selectedIndex = -1), s
                }
            }
        }
    }), Z.each(["radio", "checkbox"], function () {
        Z.valHooks[this] = {
            set: function (e, t) {
                return Z.isArray(t) ? e.checked = Z.inArray(Z(e).val(), t) >= 0 : void 0
            }
        }, J.checkOn || (Z.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), Z.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
        Z.fn[t] = function (e, i) {
            return arguments.length > 0 ? this.on(t, null, e, i) : this.trigger(t)
        }
    }), Z.fn.extend({
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        },
        bind: function (e, t, i) {
            return this.on(e, null, t, i)
        },
        unbind: function (e, t) {
            return this.off(e, null, t)
        },
        delegate: function (e, t, i, n) {
            return this.on(t, e, i, n)
        },
        undelegate: function (e, t, i) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", i)
        }
    });
    var lt = Z.now(),
        dt = /\?/;
    Z.parseJSON = function (e) {
        return JSON.parse(e + "")
    }, Z.parseXML = function (e) {
        var t, i;
        if (!e || "string" != typeof e) return null;
        try {
            i = new DOMParser, t = i.parseFromString(e, "text/xml")
        } catch (e) {
            t = void 0
        }
        return (!t || t.getElementsByTagName("parsererror").length) && Z.error("Invalid XML: " + e), t
    };
    var ct = /#.*$/,
        ut = /([?&])_=[^&]*/,
        pt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        ht = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        ft = /^(?:GET|HEAD)$/,
        gt = /^\/\//,
        vt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        yt = {},
        mt = {},
        wt = "*/".concat("*"),
        bt = e.location.href,
        kt = vt.exec(bt.toLowerCase()) || [];
    Z.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: bt,
            type: "GET",
            isLocal: ht.test(kt[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": wt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": Z.parseJSON,
                "text xml": Z.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function (e, t) {
            return t ? P(P(e, Z.ajaxSettings), t) : P(Z.ajaxSettings, e)
        },
        ajaxPrefilter: H(yt),
        ajaxTransport: H(mt),
        ajax: function (e, t) {
            function i(e, t, i, r) {
                var l, c, y, m, b, T = t;
                2 !== w && (w = 2, a && clearTimeout(a), n = void 0, s = r || "", k.readyState = e > 0 ? 4 : 0, l = e >= 200 && 300 > e || 304 === e, i && (m = L(u, k, i)), m = U(u, m, k, l), l ? (u.ifModified && (b = k.getResponseHeader("Last-Modified"), b && (Z.lastModified[o] = b), (b = k.getResponseHeader("etag")) && (Z.etag[o] = b)), 204 === e || "HEAD" === u.type ? T = "nocontent" : 304 === e ? T = "notmodified" : (T = m.state, c = m.data, y = m.error, l = !y)) : (y = T, (e || !T) && (T = "error", 0 > e && (e = 0))), k.status = e, k.statusText = (t || T) + "", l ? f.resolveWith(p, [c, T, k]) : f.rejectWith(p, [k, T, y]), k.statusCode(v), v = void 0, d && h.trigger(l ? "ajaxSuccess" : "ajaxError", [k, u, l ? c : y]), g.fireWith(p, [k, T]), d && (h.trigger("ajaxComplete", [k, u]), --Z.active || Z.event.trigger("ajaxStop")))
            }
            "object" == (void 0 === e ? "undefined" : _typeof(e)) && (t = e, e = void 0), t = t || {};
            var n, o, s, r, a, l, d, c, u = Z.ajaxSetup({}, t),
                p = u.context || u,
                h = u.context && (p.nodeType || p.jquery) ? Z(p) : Z.event,
                f = Z.Deferred(),
                g = Z.Callbacks("once memory"),
                v = u.statusCode || {},
                y = {},
                m = {},
                w = 0,
                b = "canceled",
                k = {
                    readyState: 0,
                    getResponseHeader: function (e) {
                        var t;
                        if (2 === w) {
                            if (!r)
                                for (r = {}; t = pt.exec(s);) r[t[1].toLowerCase()] = t[2];
                            t = r[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function () {
                        return 2 === w ? s : null
                    },
                    setRequestHeader: function (e, t) {
                        var i = e.toLowerCase();
                        return w || (e = m[i] = m[i] || e, y[e] = t), this
                    },
                    overrideMimeType: function (e) {
                        return w || (u.mimeType = e), this
                    },
                    statusCode: function (e) {
                        var t;
                        if (e)
                            if (2 > w)
                                for (t in e) v[t] = [v[t], e[t]];
                            else k.always(e[k.status]);
                        return this
                    },
                    abort: function (e) {
                        var t = e || b;
                        return n && n.abort(t), i(0, t), this
                    }
                };
            if (f.promise(k).complete = g.add, k.success = k.done, k.error = k.fail, u.url = ((e || u.url || bt) + "").replace(ct, "").replace(gt, kt[1] + "//"), u.type = t.method || t.type || u.method || u.type, u.dataTypes = Z.trim(u.dataType || "*").toLowerCase().match(pe) || [""], null == u.crossDomain && (l = vt.exec(u.url.toLowerCase()), u.crossDomain = !(!l || l[1] === kt[1] && l[2] === kt[2] && (l[3] || ("http:" === l[1] ? "80" : "443")) === (kt[3] || ("http:" === kt[1] ? "80" : "443")))), u.data && u.processData && "string" != typeof u.data && (u.data = Z.param(u.data, u.traditional)), F(yt, u, t, k), 2 === w) return k;
            d = Z.event && u.global, d && 0 == Z.active++ && Z.event.trigger("ajaxStart"), u.type = u.type.toUpperCase(), u.hasContent = !ft.test(u.type), o = u.url, u.hasContent || (u.data && (o = u.url += (dt.test(o) ? "&" : "?") + u.data, delete u.data), !1 === u.cache && (u.url = ut.test(o) ? o.replace(ut, "$1_=" + lt++) : o + (dt.test(o) ? "&" : "?") + "_=" + lt++)), u.ifModified && (Z.lastModified[o] && k.setRequestHeader("If-Modified-Since", Z.lastModified[o]), Z.etag[o] && k.setRequestHeader("If-None-Match", Z.etag[o])), (u.data && u.hasContent && !1 !== u.contentType || t.contentType) && k.setRequestHeader("Content-Type", u.contentType), k.setRequestHeader("Accept", u.dataTypes[0] && u.accepts[u.dataTypes[0]] ? u.accepts[u.dataTypes[0]] + ("*" !== u.dataTypes[0] ? ", " + wt + "; q=0.01" : "") : u.accepts["*"]);
            for (c in u.headers) k.setRequestHeader(c, u.headers[c]);
            if (u.beforeSend && (!1 === u.beforeSend.call(p, k, u) || 2 === w)) return k.abort();
            b = "abort";
            for (c in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) k[c](u[c]);
            if (n = F(mt, u, t, k)) {
                k.readyState = 1, d && h.trigger("ajaxSend", [k, u]), u.async && u.timeout > 0 && (a = setTimeout(function () {
                    k.abort("timeout")
                }, u.timeout));
                try {
                    w = 1, n.send(y, i)
                } catch (e) {
                    if (!(2 > w)) throw e;
                    i(-1, e)
                }
            } else i(-1, "No Transport");
            return k
        },
        getJSON: function (e, t, i) {
            return Z.get(e, t, i, "json")
        },
        getScript: function (e, t) {
            return Z.get(e, void 0, t, "script")
        }
    }), Z.each(["get", "post"], function (e, t) {
        Z[t] = function (e, i, n, o) {
            return Z.isFunction(i) && (o = o || n, n = i, i = void 0), Z.ajax({
                url: e,
                type: t,
                dataType: o,
                data: i,
                success: n
            })
        }
    }), Z._evalUrl = function (e) {
        return Z.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            throws: !0
        })
    }, Z.fn.extend({
        wrapAll: function (e) {
            var t;
            return Z.isFunction(e) ? this.each(function (t) {
                Z(this).wrapAll(e.call(this, t))
            }) : (this[0] && (t = Z(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this)
        },
        wrapInner: function (e) {
            return this.each(Z.isFunction(e) ? function (t) {
                Z(this).wrapInner(e.call(this, t))
            } : function () {
                var t = Z(this),
                    i = t.contents();
                i.length ? i.wrapAll(e) : t.append(e)
            })
        },
        wrap: function (e) {
            var t = Z.isFunction(e);
            return this.each(function (i) {
                Z(this).wrapAll(t ? e.call(this, i) : e)
            })
        },
        unwrap: function () {
            return this.parent().each(function () {
                Z.nodeName(this, "body") || Z(this).replaceWith(this.childNodes)
            }).end()
        }
    }), Z.expr.filters.hidden = function (e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0
    }, Z.expr.filters.visible = function (e) {
        return !Z.expr.filters.hidden(e)
    };
    var Tt = /%20/g,
        xt = /\[\]$/,
        Ct = /\r?\n/g,
        Dt = /^(?:submit|button|image|reset|file)$/i,
        St = /^(?:input|select|textarea|keygen)/i;
    Z.param = function (e, t) {
        var i, n = [],
            o = function (e, t) {
                t = Z.isFunction(t) ? t() : null == t ? "" : t, n[n.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (void 0 === t && (t = Z.ajaxSettings && Z.ajaxSettings.traditional), Z.isArray(e) || e.jquery && !Z.isPlainObject(e)) Z.each(e, function () {
            o(this.name, this.value)
        });
        else
            for (i in e) q(i, e[i], t, o);
        return n.join("&").replace(Tt, "+")
    }, Z.fn.extend({
        serialize: function () {
            return Z.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                var e = Z.prop(this, "elements");
                return e ? Z.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !Z(this).is(":disabled") && St.test(this.nodeName) && !Dt.test(e) && (this.checked || !xe.test(e))
            }).map(function (e, t) {
                var i = Z(this).val();
                return null == i ? null : Z.isArray(i) ? Z.map(i, function (e) {
                    return {
                        name: t.name,
                        value: e.replace(Ct, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: i.replace(Ct, "\r\n")
                }
            }).get()
        }
    }), Z.ajaxSettings.xhr = function () {
        try {
            return new XMLHttpRequest
        } catch (e) {}
    };
    var $t = 0,
        At = {},
        Mt = {
            0: 200,
            1223: 204
        },
        Et = Z.ajaxSettings.xhr();
    e.attachEvent && e.attachEvent("onunload", function () {
        for (var e in At) At[e]()
    }), J.cors = !!Et && "withCredentials" in Et, J.ajax = Et = !!Et, Z.ajaxTransport(function (e) {
        var t;
        return J.cors || Et && !e.crossDomain ? {
            send: function (i, n) {
                var o, s = e.xhr(),
                    r = ++$t;
                if (s.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                    for (o in e.xhrFields) s[o] = e.xhrFields[o];
                e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType), e.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                for (o in i) s.setRequestHeader(o, i[o]);
                t = function (e) {
                    return function () {
                        t && (delete At[r], t = s.onload = s.onerror = null, "abort" === e ? s.abort() : "error" === e ? n(s.status, s.statusText) : n(Mt[s.status] || s.status, s.statusText, "string" == typeof s.responseText ? {
                            text: s.responseText
                        } : void 0, s.getAllResponseHeaders()))
                    }
                }, s.onload = t(), s.onerror = t("error"), t = At[r] = t("abort");
                try {
                    s.send(e.hasContent && e.data || null)
                } catch (e) {
                    if (t) throw e
                }
            },
            abort: function () {
                t && t()
            }
        } : void 0
    }), Z.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function (e) {
                return Z.globalEval(e), e
            }
        }
    }), Z.ajaxPrefilter("script", function (e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), Z.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
            var t, i;
            return {
                send: function (n, o) {
                    t = Z("<script>").prop({
                        async: !0,
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", i = function (e) {
                        t.remove(), i = null, e && o("error" === e.type ? 404 : 200, e.type)
                    }), Q.head.appendChild(t[0])
                },
                abort: function () {
                    i && i()
                }
            }
        }
    });
    var _t = [],
        Nt = /(=)\?(?=&|$)|\?\?/;
    Z.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var e = _t.pop() || Z.expando + "_" + lt++;
            return this[e] = !0, e
        }
    }), Z.ajaxPrefilter("json jsonp", function (t, i, n) {
        var o, s, r, a = !1 !== t.jsonp && (Nt.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && Nt.test(t.data) && "data");
        return a || "jsonp" === t.dataTypes[0] ? (o = t.jsonpCallback = Z.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(Nt, "$1" + o) : !1 !== t.jsonp && (t.url += (dt.test(t.url) ? "&" : "?") + t.jsonp + "=" + o), t.converters["script json"] = function () {
            return r || Z.error(o + " was not called"), r[0]
        }, t.dataTypes[0] = "json", s = e[o], e[o] = function () {
            r = arguments
        }, n.always(function () {
            e[o] = s, t[o] && (t.jsonpCallback = i.jsonpCallback, _t.push(o)), r && Z.isFunction(s) && s(r[0]), r = s = void 0
        }), "script") : void 0
    }), Z.parseHTML = function (e, t, i) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (i = t, t = !1), t = t || Q;
        var n = re.exec(e),
            o = !i && [];
        return n ? [t.createElement(n[1])] : (n = Z.buildFragment([e], t, o), o && o.length && Z(o).remove(), Z.merge([], n.childNodes))
    };
    var Ot = Z.fn.load;
    Z.fn.load = function (e, t, i) {
        if ("string" != typeof e && Ot) return Ot.apply(this, arguments);
        var n, o, s, r = this,
            a = e.indexOf(" ");
        return a >= 0 && (n = Z.trim(e.slice(a)), e = e.slice(0, a)), Z.isFunction(t) ? (i = t, t = void 0) : t && "object" == (void 0 === t ? "undefined" : _typeof(t)) && (o = "POST"), r.length > 0 && Z.ajax({
            url: e,
            type: o,
            dataType: "html",
            data: t
        }).done(function (e) {
            s = arguments, r.html(n ? Z("<div>").append(Z.parseHTML(e)).find(n) : e)
        }).complete(i && function (e, t) {
            r.each(i, s || [e.responseText, t, e])
        }), this
    }, Z.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        Z.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), Z.expr.filters.animated = function (e) {
        return Z.grep(Z.timers, function (t) {
            return e === t.elem
        }).length
    };
    var jt = e.document.documentElement;
    Z.offset = {
        setOffset: function (e, t, i) {
            var n, o, s, r, a, l, d, c = Z.css(e, "position"),
                u = Z(e),
                p = {};
            "static" === c && (e.style.position = "relative"), a = u.offset(), s = Z.css(e, "top"), l = Z.css(e, "left"), d = ("absolute" === c || "fixed" === c) && (s + l).indexOf("auto") > -1, d ? (n = u.position(), r = n.top, o = n.left) : (r = parseFloat(s) || 0, o = parseFloat(l) || 0), Z.isFunction(t) && (t = t.call(e, i, a)), null != t.top && (p.top = t.top - a.top + r), null != t.left && (p.left = t.left - a.left + o), "using" in t ? t.using.call(e, p) : u.css(p)
        }
    }, Z.fn.extend({
        offset: function (e) {
            if (arguments.length) return void 0 === e ? this : this.each(function (t) {
                Z.offset.setOffset(this, e, t)
            });
            var t, i, n = this[0],
                o = {
                    top: 0,
                    left: 0
                },
                s = n && n.ownerDocument;
            return s ? (t = s.documentElement, Z.contains(t, n) ? (_typeof(n.getBoundingClientRect) !== Ce && (o = n.getBoundingClientRect()), i = W(s), {
                top: o.top + i.pageYOffset - t.clientTop,
                left: o.left + i.pageXOffset - t.clientLeft
            }) : o) : void 0
        },
        position: function () {
            if (this[0]) {
                var e, t, i = this[0],
                    n = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === Z.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), Z.nodeName(e[0], "html") || (n = e.offset()), n.top += Z.css(e[0], "borderTopWidth", !0), n.left += Z.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - n.top - Z.css(i, "marginTop", !0),
                    left: t.left - n.left - Z.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function () {
            return this.map(function () {
                for (var e = this.offsetParent || jt; e && !Z.nodeName(e, "html") && "static" === Z.css(e, "position");) e = e.offsetParent;
                return e || jt
            })
        }
    }), Z.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (t, i) {
        var n = "pageYOffset" === i;
        Z.fn[t] = function (o) {
            return ge(this, function (t, o, s) {
                var r = W(t);
                return void 0 === s ? r ? r[i] : t[o] : void(r ? r.scrollTo(n ? e.pageXOffset : s, n ? s : e.pageYOffset) : t[o] = s)
            }, t, o, arguments.length, null)
        }
    }), Z.each(["top", "left"], function (e, t) {
        Z.cssHooks[t] = T(J.pixelPosition, function (e, i) {
            return i ? (i = k(e, t), We.test(i) ? Z(e).position()[t] + "px" : i) : void 0
        })
    }), Z.each({
        Height: "height",
        Width: "width"
    }, function (e, t) {
        Z.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function (i, n) {
            Z.fn[n] = function (n, o) {
                var s = arguments.length && (i || "boolean" != typeof n),
                    r = i || (!0 === n || !0 === o ? "margin" : "border");
                return ge(this, function (t, i, n) {
                    var o;
                    return Z.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === n ? Z.css(t, i, r) : Z.style(t, i, n, r)
                }, t, s ? n : void 0, s, null)
            }
        })
    }), Z.fn.size = function () {
        return this.length
    }, Z.fn.andSelf = Z.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
        return Z
    });
    var Ht = e.jQuery,
        Ft = e.$;
    return Z.noConflict = function (t) {
        return e.$ === Z && (e.$ = Ft), t && e.jQuery === Z && (e.jQuery = Ht), Z
    }, (void 0 === t ? "undefined" : _typeof(t)) === Ce && (e.jQuery = e.$ = Z), Z
});
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e
} : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
};
! function (e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function (e) {
    var t = window.Slick || {};
    t = function () {
        function t(t, n) {
            var o, s = this;
            s.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: e(t),
                appendDots: e(t),
                arrows: !0,
                asNavFor: null,
                prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
                nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
                autoplay: !1,
                autoplaySpeed: 3e3,
                centerMode: !1,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function (e, t) {
                    return '<button type="button" data-role="none" role="button" aria-required="false" tabindex="0">' + (t + 1) + "</button>"
                },
                dots: !1,
                dotsClass: "slick-dots",
                draggable: !0,
                easing: "linear",
                edgeFriction: .35,
                fade: !1,
                focusOnSelect: !1,
                infinite: !0,
                initialSlide: 0,
                lazyLoad: "ondemand",
                mobileFirst: !1,
                pauseOnHover: !0,
                pauseOnDotsHover: !1,
                respondTo: "window",
                responsive: null,
                rows: 1,
                rtl: !1,
                slide: "",
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: !0,
                swipeToSlide: !1,
                touchMove: !0,
                touchThreshold: 5,
                useCSS: !0,
                useTransform: !0,
                variableWidth: !1,
                vertical: !1,
                verticalSwiping: !1,
                waitForAnimate: !0,
                zIndex: 1e3
            }, s.initials = {
                animating: !1,
                dragging: !1,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: !1,
                slideOffset: 0,
                swipeLeft: null,
                $list: null,
                touchObject: {},
                transformsEnabled: !1,
                unslicked: !1
            }, e.extend(s, s.initials), s.activeBreakpoint = null, s.animType = null, s.animProp = null, s.breakpoints = [], s.breakpointSettings = [], s.cssTransitions = !1, s.hidden = "hidden", s.paused = !1, s.positionProp = null, s.respondTo = null, s.rowCount = 1, s.shouldClick = !0, s.$slider = e(t), s.$slidesCache = null, s.transformType = null, s.transitionType = null, s.visibilityChange = "visibilitychange", s.windowWidth = 0, s.windowTimer = null, o = e(t).data("slick") || {}, s.options = e.extend({}, s.defaults, o, n), s.currentSlide = s.options.initialSlide, s.originalSettings = s.options, void 0 !== document.mozHidden ? (s.hidden = "mozHidden", s.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (s.hidden = "webkitHidden", s.visibilityChange = "webkitvisibilitychange"), s.autoPlay = e.proxy(s.autoPlay, s), s.autoPlayClear = e.proxy(s.autoPlayClear, s), s.changeSlide = e.proxy(s.changeSlide, s), s.clickHandler = e.proxy(s.clickHandler, s), s.selectHandler = e.proxy(s.selectHandler, s), s.setPosition = e.proxy(s.setPosition, s), s.swipeHandler = e.proxy(s.swipeHandler, s), s.dragHandler = e.proxy(s.dragHandler, s), s.keyHandler = e.proxy(s.keyHandler, s), s.autoPlayIterator = e.proxy(s.autoPlayIterator, s), s.instanceUid = i++, s.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, s.registerBreakpoints(), s.init(!0), s.checkResponsive(!0)
        }
        var i = 0;
        return t
    }(), t.prototype.addSlide = t.prototype.slickAdd = function (t, i, n) {
        var o = this;
        if ("boolean" == typeof i) n = i, i = null;
        else if (0 > i || i >= o.slideCount) return !1;
        o.unload(), "number" == typeof i ? 0 === i && 0 === o.$slides.length ? e(t).appendTo(o.$slideTrack) : n ? e(t).insertBefore(o.$slides.eq(i)) : e(t).insertAfter(o.$slides.eq(i)) : !0 === n ? e(t).prependTo(o.$slideTrack) : e(t).appendTo(o.$slideTrack), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slides.each(function (t, i) {
            e(i).attr("data-slick-index", t)
        }), o.$slidesCache = o.$slides, o.reinit()
    }, t.prototype.animateHeight = function () {
        var e = this;
        if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
            var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
            e.$list.animate({
                height: t
            }, e.options.speed)
        }
    }, t.prototype.animateSlide = function (t, i) {
        var n = {},
            o = this;
        o.animateHeight(), !0 === o.options.rtl && !1 === o.options.vertical && (t = -t), !1 === o.transformsEnabled ? !1 === o.options.vertical ? o.$slideTrack.animate({
            left: t
        }, o.options.speed, o.options.easing, i) : o.$slideTrack.animate({
            top: t
        }, o.options.speed, o.options.easing, i) : !1 === o.cssTransitions ? (!0 === o.options.rtl && (o.currentLeft = -o.currentLeft), e({
            animStart: o.currentLeft
        }).animate({
            animStart: t
        }, {
            duration: o.options.speed,
            easing: o.options.easing,
            step: function (e) {
                e = Math.ceil(e), !1 === o.options.vertical ? (n[o.animType] = "translate(" + e + "px, 0px)", o.$slideTrack.css(n)) : (n[o.animType] = "translate(0px," + e + "px)", o.$slideTrack.css(n))
            },
            complete: function () {
                i && i.call()
            }
        })) : (o.applyTransition(), t = Math.ceil(t), !1 === o.options.vertical ? n[o.animType] = "translate3d(" + t + "px, 0px, 0px)" : n[o.animType] = "translate3d(0px," + t + "px, 0px)", o.$slideTrack.css(n), i && setTimeout(function () {
            o.disableTransition(), i.call()
        }, o.options.speed))
    }, t.prototype.asNavFor = function (t) {
        var i = this,
            n = i.options.asNavFor;
        n && null !== n && (n = e(n).not(i.$slider)), null !== n && "object" == (void 0 === n ? "undefined" : _typeof(n)) && n.each(function () {
            var i = e(this).slick("getSlick");
            i.unslicked || i.slideHandler(t, !0)
        })
    }, t.prototype.applyTransition = function (e) {
        var t = this,
            i = {};
        !1 === t.options.fade ? i[t.transitionType] = t.transformType + " " + t.options.speed + "ms " + t.options.cssEase : i[t.transitionType] = "opacity " + t.options.speed + "ms " + t.options.cssEase, !1 === t.options.fade ? t.$slideTrack.css(i) : t.$slides.eq(e).css(i)
    }, t.prototype.autoPlay = function () {
        var e = this;
        e.autoPlayTimer && clearInterval(e.autoPlayTimer), e.slideCount > e.options.slidesToShow && !0 !== e.paused && (e.autoPlayTimer = setInterval(e.autoPlayIterator, e.options.autoplaySpeed))
    }, t.prototype.autoPlayClear = function () {
        var e = this;
        e.autoPlayTimer && clearInterval(e.autoPlayTimer)
    }, t.prototype.autoPlayIterator = function () {
        var e = this;
        !1 === e.options.infinite ? 1 === e.direction ? (e.currentSlide + 1 === e.slideCount - 1 && (e.direction = 0), e.slideHandler(e.currentSlide + e.options.slidesToScroll)) : (e.currentSlide - 1 == 0 && (e.direction = 1), e.slideHandler(e.currentSlide - e.options.slidesToScroll)) : e.slideHandler(e.currentSlide + e.options.slidesToScroll)
    }, t.prototype.buildArrows = function () {
        var t = this;
        !0 === t.options.arrows && (t.$prevArrow = e(t.options.prevArrow).addClass("slick-arrow"), t.$nextArrow = e(t.options.nextArrow).addClass("slick-arrow"), t.slideCount > t.options.slidesToShow ? (t.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.prependTo(t.options.appendArrows), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.appendTo(t.options.appendArrows), !0 !== t.options.infinite && t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : t.$prevArrow.add(t.$nextArrow).addClass("slick-hidden").attr({
            "aria-disabled": "true",
            tabindex: "-1"
        }))
    }, t.prototype.buildDots = function () {
        var t, i, n = this;
        if (!0 === n.options.dots && n.slideCount > n.options.slidesToShow) {
            for (i = '<ul class="' + n.options.dotsClass + '">', t = 0; t <= n.getDotCount(); t += 1) i += "<li>" + n.options.customPaging.call(this, n, t) + "</li>";
            i += "</ul>", n.$dots = e(i).appendTo(n.options.appendDots), n.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
        }
    }, t.prototype.buildOut = function () {
        var t = this;
        t.$slides = t.$slider.children(t.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), t.slideCount = t.$slides.length, t.$slides.each(function (t, i) {
            e(i).attr("data-slick-index", t).data("originalStyling", e(i).attr("style") || "")
        }), t.$slider.addClass("slick-slider"), t.$slideTrack = 0 === t.slideCount ? e('<div class="slick-track"/>').appendTo(t.$slider) : t.$slides.wrapAll('<div class="slick-track"/>').parent(), t.$list = t.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), t.$slideTrack.css("opacity", 0), (!0 === t.options.centerMode || !0 === t.options.swipeToSlide) && (t.options.slidesToScroll = 1), e("img[data-lazy]", t.$slider).not("[src]").addClass("slick-loading"), t.setupInfinite(), t.buildArrows(), t.buildDots(), t.updateDots(), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), !0 === t.options.draggable && t.$list.addClass("draggable")
    }, t.prototype.buildRows = function () {
        var e, t, i, n, o, s, r, a = this;
        if (n = document.createDocumentFragment(), s = a.$slider.children(), a.options.rows > 1) {
            for (r = a.options.slidesPerRow * a.options.rows, o = Math.ceil(s.length / r), e = 0; o > e; e++) {
                var l = document.createElement("div");
                for (t = 0; t < a.options.rows; t++) {
                    var d = document.createElement("div");
                    for (i = 0; i < a.options.slidesPerRow; i++) {
                        var c = e * r + (t * a.options.slidesPerRow + i);
                        s.get(c) && d.appendChild(s.get(c))
                    }
                    l.appendChild(d)
                }
                n.appendChild(l)
            }
            a.$slider.html(n), a.$slider.children().children().children().css({
                width: 100 / a.options.slidesPerRow + "%",
                display: "inline-block"
            })
        }
    }, t.prototype.checkResponsive = function (t, i) {
        var n, o, s, r = this,
            a = !1,
            l = r.$slider.width(),
            d = window.innerWidth || e(window).width();
        if ("window" === r.respondTo ? s = d : "slider" === r.respondTo ? s = l : "min" === r.respondTo && (s = Math.min(d, l)), r.options.responsive && r.options.responsive.length && null !== r.options.responsive) {
            o = null;
            for (n in r.breakpoints) r.breakpoints.hasOwnProperty(n) && (!1 === r.originalSettings.mobileFirst ? s < r.breakpoints[n] && (o = r.breakpoints[n]) : s > r.breakpoints[n] && (o = r.breakpoints[n]));
            null !== o ? null !== r.activeBreakpoint ? (o !== r.activeBreakpoint || i) && (r.activeBreakpoint = o, "unslick" === r.breakpointSettings[o] ? r.unslick(o) : (r.options = e.extend({}, r.originalSettings, r.breakpointSettings[o]), !0 === t && (r.currentSlide = r.options.initialSlide), r.refresh(t)), a = o) : (r.activeBreakpoint = o, "unslick" === r.breakpointSettings[o] ? r.unslick(o) : (r.options = e.extend({}, r.originalSettings, r.breakpointSettings[o]), !0 === t && (r.currentSlide = r.options.initialSlide), r.refresh(t)), a = o) : null !== r.activeBreakpoint && (r.activeBreakpoint = null, r.options = r.originalSettings, !0 === t && (r.currentSlide = r.options.initialSlide), r.refresh(t), a = o), t || !1 === a || r.$slider.trigger("breakpoint", [r, a])
        }
    }, t.prototype.changeSlide = function (t, i) {
        var n, o, s, r = this,
            a = e(t.target);
        switch (a.is("a") && t.preventDefault(), a.is("li") || (a = a.closest("li")), s = r.slideCount % r.options.slidesToScroll != 0, n = s ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll, t.data.message) {
            case "previous":
                o = 0 === n ? r.options.slidesToScroll : r.options.slidesToShow - n, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - o, !1, i);
                break;
            case "next":
                o = 0 === n ? r.options.slidesToScroll : n, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + o, !1, i);
                break;
            case "index":
                var l = 0 === t.data.index ? 0 : t.data.index || a.index() * r.options.slidesToScroll;
                r.slideHandler(r.checkNavigable(l), !1, i), a.children().trigger("focus");
                break;
            default:
                return
        }
    }, t.prototype.checkNavigable = function (e) {
        var t, i;
        if (t = this.getNavigableIndexes(), i = 0, e > t[t.length - 1]) e = t[t.length - 1];
        else
            for (var n in t) {
                if (e < t[n]) {
                    e = i;
                    break
                }
                i = t[n]
            }
        return e
    }, t.prototype.cleanUpEvents = function () {
        var t = this;
        t.options.dots && null !== t.$dots && (e("li", t.$dots).off("click.slick", t.changeSlide), !0 === t.options.pauseOnDotsHover && !0 === t.options.autoplay && e("li", t.$dots).off("mouseenter.slick", e.proxy(t.setPaused, t, !0)).off("mouseleave.slick", e.proxy(t.setPaused, t, !1))), !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow && t.$prevArrow.off("click.slick", t.changeSlide), t.$nextArrow && t.$nextArrow.off("click.slick", t.changeSlide)), t.$list.off("touchstart.slick mousedown.slick", t.swipeHandler), t.$list.off("touchmove.slick mousemove.slick", t.swipeHandler), t.$list.off("touchend.slick mouseup.slick", t.swipeHandler), t.$list.off("touchcancel.slick mouseleave.slick", t.swipeHandler), t.$list.off("click.slick", t.clickHandler), e(document).off(t.visibilityChange, t.visibility), t.$list.off("mouseenter.slick", e.proxy(t.setPaused, t, !0)), t.$list.off("mouseleave.slick", e.proxy(t.setPaused, t, !1)), !0 === t.options.accessibility && t.$list.off("keydown.slick", t.keyHandler), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().off("click.slick", t.selectHandler), e(window).off("orientationchange.slick.slick-" + t.instanceUid, t.orientationChange), e(window).off("resize.slick.slick-" + t.instanceUid, t.resize), e("[draggable!=true]", t.$slideTrack).off("dragstart", t.preventDefault), e(window).off("load.slick.slick-" + t.instanceUid, t.setPosition), e(document).off("ready.slick.slick-" + t.instanceUid, t.setPosition)
    }, t.prototype.cleanUpRows = function () {
        var e, t = this;
        t.options.rows > 1 && (e = t.$slides.children().children(), e.removeAttr("style"), t.$slider.html(e))
    }, t.prototype.clickHandler = function (e) {
        !1 === this.shouldClick && (e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault())
    }, t.prototype.destroy = function (t) {
        var i = this;
        i.autoPlayClear(), i.touchObject = {}, i.cleanUpEvents(), e(".slick-cloned", i.$slider).detach(), i.$dots && i.$dots.remove(), i.$prevArrow && i.$prevArrow.length && (i.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.remove()), i.$nextArrow && i.$nextArrow.length && (i.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.remove()), i.$slides && (i.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function () {
            e(this).attr("style", e(this).data("originalStyling"))
        }), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.detach(), i.$list.detach(), i.$slider.append(i.$slides)), i.cleanUpRows(), i.$slider.removeClass("slick-slider"), i.$slider.removeClass("slick-initialized"), i.unslicked = !0, t || i.$slider.trigger("destroy", [i])
    }, t.prototype.disableTransition = function (e) {
        var t = this,
            i = {};
        i[t.transitionType] = "", !1 === t.options.fade ? t.$slideTrack.css(i) : t.$slides.eq(e).css(i)
    }, t.prototype.fadeSlide = function (e, t) {
        var i = this;
        !1 === i.cssTransitions ? (i.$slides.eq(e).css({
            zIndex: i.options.zIndex
        }), i.$slides.eq(e).animate({
            opacity: 1
        }, i.options.speed, i.options.easing, t)) : (i.applyTransition(e), i.$slides.eq(e).css({
            opacity: 1,
            zIndex: i.options.zIndex
        }), t && setTimeout(function () {
            i.disableTransition(e), t.call()
        }, i.options.speed))
    }, t.prototype.fadeSlideOut = function (e) {
        var t = this;
        !1 === t.cssTransitions ? t.$slides.eq(e).animate({
            opacity: 0,
            zIndex: t.options.zIndex - 2
        }, t.options.speed, t.options.easing) : (t.applyTransition(e), t.$slides.eq(e).css({
            opacity: 0,
            zIndex: t.options.zIndex - 2
        }))
    }, t.prototype.filterSlides = t.prototype.slickFilter = function (e) {
        var t = this;
        null !== e && (t.$slidesCache = t.$slides, t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.filter(e).appendTo(t.$slideTrack), t.reinit())
    }, t.prototype.getCurrent = t.prototype.slickCurrentSlide = function () {
        return this.currentSlide
    }, t.prototype.getDotCount = function () {
        var e = this,
            t = 0,
            i = 0,
            n = 0;
        if (!0 === e.options.infinite)
            for (; t < e.slideCount;) ++n, t = i + e.options.slidesToScroll, i += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        else if (!0 === e.options.centerMode) n = e.slideCount;
        else
            for (; t < e.slideCount;) ++n, t = i + e.options.slidesToScroll, i += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        return n - 1
    }, t.prototype.getLeft = function (e) {
        var t, i, n, o = this,
            s = 0;
        return o.slideOffset = 0, i = o.$slides.first().outerHeight(!0), !0 === o.options.infinite ? (o.slideCount > o.options.slidesToShow && (o.slideOffset = o.slideWidth * o.options.slidesToShow * -1, s = i * o.options.slidesToShow * -1), o.slideCount % o.options.slidesToScroll != 0 && e + o.options.slidesToScroll > o.slideCount && o.slideCount > o.options.slidesToShow && (e > o.slideCount ? (o.slideOffset = (o.options.slidesToShow - (e - o.slideCount)) * o.slideWidth * -1, s = (o.options.slidesToShow - (e - o.slideCount)) * i * -1) : (o.slideOffset = o.slideCount % o.options.slidesToScroll * o.slideWidth * -1, s = o.slideCount % o.options.slidesToScroll * i * -1))) : e + o.options.slidesToShow > o.slideCount && (o.slideOffset = (e + o.options.slidesToShow - o.slideCount) * o.slideWidth, s = (e + o.options.slidesToShow - o.slideCount) * i), o.slideCount <= o.options.slidesToShow && (o.slideOffset = 0, s = 0), !0 === o.options.centerMode && !0 === o.options.infinite ? o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2) - o.slideWidth : !0 === o.options.centerMode && (o.slideOffset = 0, o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2)), t = !1 === o.options.vertical ? e * o.slideWidth * -1 + o.slideOffset : e * i * -1 + s, !0 === o.options.variableWidth && (n = o.slideCount <= o.options.slidesToShow || !1 === o.options.infinite ? o.$slideTrack.children(".slick-slide").eq(e) : o.$slideTrack.children(".slick-slide").eq(e + o.options.slidesToShow), t = !0 === o.options.rtl ? n[0] ? -1 * (o.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0 : n[0] ? -1 * n[0].offsetLeft : 0, !0 === o.options.centerMode && (n = o.slideCount <= o.options.slidesToShow || !1 === o.options.infinite ? o.$slideTrack.children(".slick-slide").eq(e) : o.$slideTrack.children(".slick-slide").eq(e + o.options.slidesToShow + 1), t = !0 === o.options.rtl ? n[0] ? -1 * (o.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0 : n[0] ? -1 * n[0].offsetLeft : 0, t += (o.$list.width() - n.outerWidth()) / 2)), t
    }, t.prototype.getOption = t.prototype.slickGetOption = function (e) {
        return this.options[e]
    }, t.prototype.getNavigableIndexes = function () {
        var e, t = this,
            i = 0,
            n = 0,
            o = [];
        for (!1 === t.options.infinite ? e = t.slideCount : (i = -1 * t.options.slidesToScroll, n = -1 * t.options.slidesToScroll, e = 2 * t.slideCount); e > i;) o.push(i), i = n + t.options.slidesToScroll, n += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
        return o
    }, t.prototype.getSlick = function () {
        return this
    }, t.prototype.getSlideCount = function () {
        var t, i, n = this;
        return i = !0 === n.options.centerMode ? n.slideWidth * Math.floor(n.options.slidesToShow / 2) : 0, !0 === n.options.swipeToSlide ? (n.$slideTrack.find(".slick-slide").each(function (o, s) {
            return s.offsetLeft - i + e(s).outerWidth() / 2 > -1 * n.swipeLeft ? (t = s, !1) : void 0
        }), Math.abs(e(t).attr("data-slick-index") - n.currentSlide) || 1) : n.options.slidesToScroll
    }, t.prototype.goTo = t.prototype.slickGoTo = function (e, t) {
        this.changeSlide({
            data: {
                message: "index",
                index: parseInt(e)
            }
        }, t)
    }, t.prototype.init = function (t) {
        var i = this;
        e(i.$slider).hasClass("slick-initialized") || (e(i.$slider).addClass("slick-initialized"), i.buildRows(), i.buildOut(), i.setProps(), i.startLoad(), i.loadSlider(), i.initializeEvents(), i.updateArrows(), i.updateDots()), t && i.$slider.trigger("init", [i]), !0 === i.options.accessibility && i.initADA()
    }, t.prototype.initArrowEvents = function () {
        var e = this;
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.on("click.slick", {
            message: "previous"
        }, e.changeSlide), e.$nextArrow.on("click.slick", {
            message: "next"
        }, e.changeSlide))
    }, t.prototype.initDotEvents = function () {
        var t = this;
        !0 === t.options.dots && t.slideCount > t.options.slidesToShow && e("li", t.$dots).on("click.slick", {
            message: "index"
        }, t.changeSlide), !0 === t.options.dots && !0 === t.options.pauseOnDotsHover && !0 === t.options.autoplay && e("li", t.$dots).on("mouseenter.slick", e.proxy(t.setPaused, t, !0)).on("mouseleave.slick", e.proxy(t.setPaused, t, !1))
    }, t.prototype.initializeEvents = function () {
        var t = this;
        t.initArrowEvents(), t.initDotEvents(), t.$list.on("touchstart.slick mousedown.slick", {
            action: "start"
        }, t.swipeHandler), t.$list.on("touchmove.slick mousemove.slick", {
            action: "move"
        }, t.swipeHandler), t.$list.on("touchend.slick mouseup.slick", {
            action: "end"
        }, t.swipeHandler), t.$list.on("touchcancel.slick mouseleave.slick", {
            action: "end"
        }, t.swipeHandler), t.$list.on("click.slick", t.clickHandler), e(document).on(t.visibilityChange, e.proxy(t.visibility, t)), t.$list.on("mouseenter.slick", e.proxy(t.setPaused, t, !0)), t.$list.on("mouseleave.slick", e.proxy(t.setPaused, t, !1)), !0 === t.options.accessibility && t.$list.on("keydown.slick", t.keyHandler), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().on("click.slick", t.selectHandler), e(window).on("orientationchange.slick.slick-" + t.instanceUid, e.proxy(t.orientationChange, t)), e(window).on("resize.slick.slick-" + t.instanceUid, e.proxy(t.resize, t)), e("[draggable!=true]", t.$slideTrack).on("dragstart", t.preventDefault), e(window).on("load.slick.slick-" + t.instanceUid, t.setPosition), e(document).on("ready.slick.slick-" + t.instanceUid, t.setPosition)
    }, t.prototype.initUI = function () {
        var e = this;
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.show(), e.$nextArrow.show()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.show(), !0 === e.options.autoplay && e.autoPlay()
    }, t.prototype.keyHandler = function (e) {
        var t = this;
        e.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === e.keyCode && !0 === t.options.accessibility ? t.changeSlide({
            data: {
                message: "previous"
            }
        }) : 39 === e.keyCode && !0 === t.options.accessibility && t.changeSlide({
            data: {
                message: "next"
            }
        }))
    }, t.prototype.lazyLoad = function () {
        function t(t) {
            e("img[data-lazy]", t).each(function () {
                var t = e(this),
                    i = e(this).attr("data-lazy"),
                    n = document.createElement("img");
                n.onload = function () {
                    t.animate({
                        opacity: 0
                    }, 100, function () {
                        t.attr("src", i).animate({
                            opacity: 1
                        }, 200, function () {
                            t.removeAttr("data-lazy").removeClass("slick-loading")
                        })
                    })
                }, n.src = i
            })
        }
        var i, n, o, s, r = this;
        !0 === r.options.centerMode ? !0 === r.options.infinite ? (o = r.currentSlide + (r.options.slidesToShow / 2 + 1), s = o + r.options.slidesToShow + 2) : (o = Math.max(0, r.currentSlide - (r.options.slidesToShow / 2 + 1)), s = r.options.slidesToShow / 2 + 1 + 2 + r.currentSlide) : (o = r.options.infinite ? r.options.slidesToShow + r.currentSlide : r.currentSlide, s = o + r.options.slidesToShow, !0 === r.options.fade && (o > 0 && o--, s <= r.slideCount && s++)), i = r.$slider.find(".slick-slide").slice(o, s), t(i), r.slideCount <= r.options.slidesToShow ? (n = r.$slider.find(".slick-slide"), t(n)) : r.currentSlide >= r.slideCount - r.options.slidesToShow ? (n = r.$slider.find(".slick-cloned").slice(0, r.options.slidesToShow), t(n)) : 0 === r.currentSlide && (n = r.$slider.find(".slick-cloned").slice(-1 * r.options.slidesToShow), t(n))
    }, t.prototype.loadSlider = function () {
        var e = this;
        e.setPosition(), e.$slideTrack.css({
            opacity: 1
        }), e.$slider.removeClass("slick-loading"), e.initUI(), "progressive" === e.options.lazyLoad && e.progressiveLazyLoad()
    }, t.prototype.next = t.prototype.slickNext = function () {
        this.changeSlide({
            data: {
                message: "next"
            }
        })
    }, t.prototype.orientationChange = function () {
        var e = this;
        e.checkResponsive(), e.setPosition()
    }, t.prototype.pause = t.prototype.slickPause = function () {
        var e = this;
        e.autoPlayClear(), e.paused = !0
    }, t.prototype.play = t.prototype.slickPlay = function () {
        var e = this;
        e.paused = !1, e.autoPlay()
    }, t.prototype.postSlide = function (e) {
        var t = this;
        t.$slider.trigger("afterChange", [t, e]), t.animating = !1, t.setPosition(), t.swipeLeft = null, !0 === t.options.autoplay && !1 === t.paused && t.autoPlay(), !0 === t.options.accessibility && t.initADA()
    }, t.prototype.prev = t.prototype.slickPrev = function () {
        this.changeSlide({
            data: {
                message: "previous"
            }
        })
    }, t.prototype.preventDefault = function (e) {
        e.preventDefault()
    }, t.prototype.progressiveLazyLoad = function () {
        var t, i = this;
        e("img[data-lazy]", i.$slider).length > 0 && (t = e("img[data-lazy]", i.$slider).first(), t.attr("src", null), t.attr("src", t.attr("data-lazy")).removeClass("slick-loading").load(function () {
            t.removeAttr("data-lazy"), i.progressiveLazyLoad(), !0 === i.options.adaptiveHeight && i.setPosition()
        }).error(function () {
            t.removeAttr("data-lazy"), i.progressiveLazyLoad()
        }))
    }, t.prototype.refresh = function (t) {
        var i, n, o = this;
        n = o.slideCount - o.options.slidesToShow, o.options.infinite || (o.slideCount <= o.options.slidesToShow ? o.currentSlide = 0 : o.currentSlide > n && (o.currentSlide = n)), i = o.currentSlide, o.destroy(!0), e.extend(o, o.initials, {
            currentSlide: i
        }), o.init(), t || o.changeSlide({
            data: {
                message: "index",
                index: i
            }
        }, !1)
    }, t.prototype.registerBreakpoints = function () {
        var t, i, n, o = this,
            s = o.options.responsive || null;
        if ("array" === e.type(s) && s.length) {
            o.respondTo = o.options.respondTo || "window";
            for (t in s)
                if (n = o.breakpoints.length - 1, i = s[t].breakpoint, s.hasOwnProperty(t)) {
                    for (; n >= 0;) o.breakpoints[n] && o.breakpoints[n] === i && o.breakpoints.splice(n, 1), n--;
                    o.breakpoints.push(i), o.breakpointSettings[i] = s[t].settings
                }
            o.breakpoints.sort(function (e, t) {
                return o.options.mobileFirst ? e - t : t - e
            })
        }
    }, t.prototype.reinit = function () {
        var t = this;
        t.$slides = t.$slideTrack.children(t.options.slide).addClass("slick-slide"), t.slideCount = t.$slides.length, t.currentSlide >= t.slideCount && 0 !== t.currentSlide && (t.currentSlide = t.currentSlide - t.options.slidesToScroll), t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0), t.registerBreakpoints(), t.setProps(), t.setupInfinite(), t.buildArrows(), t.updateArrows(), t.initArrowEvents(), t.buildDots(), t.updateDots(), t.initDotEvents(), t.checkResponsive(!1, !0), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().on("click.slick", t.selectHandler), t.setSlideClasses(0), t.setPosition(), t.$slider.trigger("reInit", [t]), !0 === t.options.autoplay && t.focusHandler()
    }, t.prototype.resize = function () {
        var t = this;
        e(window).width() !== t.windowWidth && (clearTimeout(t.windowDelay), t.windowDelay = window.setTimeout(function () {
            t.windowWidth = e(window).width(), t.checkResponsive(), t.unslicked || t.setPosition()
        }, 50))
    }, t.prototype.removeSlide = t.prototype.slickRemove = function (e, t, i) {
        var n = this;
        return "boolean" == typeof e ? (t = e, e = !0 === t ? 0 : n.slideCount - 1) : e = !0 === t ? --e : e, !(n.slideCount < 1 || 0 > e || e > n.slideCount - 1) && (n.unload(), !0 === i ? n.$slideTrack.children().remove() : n.$slideTrack.children(this.options.slide).eq(e).remove(), n.$slides = n.$slideTrack.children(this.options.slide), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.append(n.$slides), n.$slidesCache = n.$slides, void n.reinit())
    }, t.prototype.setCSS = function (e) {
        var t, i, n = this,
            o = {};
        !0 === n.options.rtl && (e = -e), t = "left" == n.positionProp ? Math.ceil(e) + "px" : "0px", i = "top" == n.positionProp ? Math.ceil(e) + "px" : "0px", o[n.positionProp] = e, !1 === n.transformsEnabled ? n.$slideTrack.css(o) : (o = {}, !1 === n.cssTransitions ? (o[n.animType] = "translate(" + t + ", " + i + ")", n.$slideTrack.css(o)) : (o[n.animType] = "translate3d(" + t + ", " + i + ", 0px)", n.$slideTrack.css(o)))
    }, t.prototype.setDimensions = function () {
        var e = this;
        !1 === e.options.vertical ? !0 === e.options.centerMode && e.$list.css({
            padding: "0px " + e.options.centerPadding
        }) : (e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow), !0 === e.options.centerMode && e.$list.css({
            padding: e.options.centerPadding + " 0px"
        })), e.listWidth = e.$list.width(), e.listHeight = e.$list.height(), !1 === e.options.vertical && !1 === e.options.variableWidth ? (e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow), e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children(".slick-slide").length))) : !0 === e.options.variableWidth ? e.$slideTrack.width(5e3 * e.slideCount) : (e.slideWidth = Math.ceil(e.listWidth), e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0) * e.$slideTrack.children(".slick-slide").length)));
        var t = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
        !1 === e.options.variableWidth && e.$slideTrack.children(".slick-slide").width(e.slideWidth - t)
    }, t.prototype.setFade = function () {
        var t, i = this;
        i.$slides.each(function (n, o) {
            t = i.slideWidth * n * -1, !0 === i.options.rtl ? e(o).css({
                position: "relative",
                right: t,
                top: 0,
                zIndex: i.options.zIndex - 2,
                opacity: 0
            }) : e(o).css({
                position: "relative",
                left: t,
                top: 0,
                zIndex: i.options.zIndex - 2,
                opacity: 0
            })
        }), i.$slides.eq(i.currentSlide).css({
            zIndex: i.options.zIndex - 1,
            opacity: 1
        })
    }, t.prototype.setHeight = function () {
        var e = this;
        if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
            var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
            e.$list.css("height", t)
        }
    }, t.prototype.setOption = t.prototype.slickSetOption = function (t, i, n) {
        var o, s, r = this;
        if ("responsive" === t && "array" === e.type(i))
            for (s in i)
                if ("array" !== e.type(r.options.responsive)) r.options.responsive = [i[s]];
                else {
                    for (o = r.options.responsive.length - 1; o >= 0;) r.options.responsive[o].breakpoint === i[s].breakpoint && r.options.responsive.splice(o, 1), o--;
                    r.options.responsive.push(i[s])
                }
        else r.options[t] = i;
        !0 === n && (r.unload(), r.reinit())
    }, t.prototype.setPosition = function () {
        var e = this;
        e.setDimensions(), e.setHeight(), !1 === e.options.fade ? e.setCSS(e.getLeft(e.currentSlide)) : e.setFade(), e.$slider.trigger("setPosition", [e])
    }, t.prototype.setProps = function () {
        var e = this,
            t = document.body.style;
        e.positionProp = !0 === e.options.vertical ? "top" : "left", "top" === e.positionProp ? e.$slider.addClass("slick-vertical") : e.$slider.removeClass("slick-vertical"), (void 0 !== t.WebkitTransition || void 0 !== t.MozTransition || void 0 !== t.msTransition) && !0 === e.options.useCSS && (e.cssTransitions = !0), e.options.fade && ("number" == typeof e.options.zIndex ? e.options.zIndex < 3 && (e.options.zIndex = 3) : e.options.zIndex = e.defaults.zIndex), void 0 !== t.OTransform && (e.animType = "OTransform", e.transformType = "-o-transform", e.transitionType = "OTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.MozTransform && (e.animType = "MozTransform", e.transformType = "-moz-transform", e.transitionType = "MozTransition", void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (e.animType = !1)), void 0 !== t.webkitTransform && (e.animType = "webkitTransform", e.transformType = "-webkit-transform", e.transitionType = "webkitTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.msTransform && (e.animType = "msTransform", e.transformType = "-ms-transform", e.transitionType = "msTransition", void 0 === t.msTransform && (e.animType = !1)), void 0 !== t.transform && !1 !== e.animType && (e.animType = "transform", e.transformType = "transform", e.transitionType = "transition"), e.transformsEnabled = e.options.useTransform && null !== e.animType && !1 !== e.animType
    }, t.prototype.setSlideClasses = function (e) {
        var t, i, n, o, s = this;
        i = s.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), s.$slides.eq(e).addClass("slick-current"), !0 === s.options.centerMode ? (t = Math.floor(s.options.slidesToShow / 2), !0 === s.options.infinite && (e >= t && e <= s.slideCount - 1 - t ? s.$slides.slice(e - t, e + t + 1).addClass("slick-active").attr("aria-hidden", "false") : (n = s.options.slidesToShow + e, i.slice(n - t + 1, n + t + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === e ? i.eq(i.length - 1 - s.options.slidesToShow).addClass("slick-center") : e === s.slideCount - 1 && i.eq(s.options.slidesToShow).addClass("slick-center")), s.$slides.eq(e).addClass("slick-center")) : e >= 0 && e <= s.slideCount - s.options.slidesToShow ? s.$slides.slice(e, e + s.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : i.length <= s.options.slidesToShow ? i.addClass("slick-active").attr("aria-hidden", "false") : (o = s.slideCount % s.options.slidesToShow, n = !0 === s.options.infinite ? s.options.slidesToShow + e : e, s.options.slidesToShow == s.options.slidesToScroll && s.slideCount - e < s.options.slidesToShow ? i.slice(n - (s.options.slidesToShow - o), n + o).addClass("slick-active").attr("aria-hidden", "false") : i.slice(n, n + s.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === s.options.lazyLoad && s.lazyLoad()
    }, t.prototype.setupInfinite = function () {
        var t, i, n, o = this;
        if (!0 === o.options.fade && (o.options.centerMode = !1), !0 === o.options.infinite && !1 === o.options.fade && (i = null, o.slideCount > o.options.slidesToShow)) {
            for (n = !0 === o.options.centerMode ? o.options.slidesToShow + 1 : o.options.slidesToShow, t = o.slideCount; t > o.slideCount - n; t -= 1) i = t - 1, e(o.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i - o.slideCount).prependTo(o.$slideTrack).addClass("slick-cloned");
            for (t = 0; n > t; t += 1) i = t, e(o.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i + o.slideCount).appendTo(o.$slideTrack).addClass("slick-cloned");
            o.$slideTrack.find(".slick-cloned").find("[id]").each(function () {
                e(this).attr("id", "")
            })
        }
    }, t.prototype.setPaused = function (e) {
        var t = this;
        !0 === t.options.autoplay && !0 === t.options.pauseOnHover && (t.paused = e, e ? t.autoPlayClear() : t.autoPlay())
    }, t.prototype.selectHandler = function (t) {
        var i = this,
            n = e(t.target).is(".slick-slide") ? e(t.target) : e(t.target).parents(".slick-slide"),
            o = parseInt(n.attr("data-slick-index"));
        return o || (o = 0), i.slideCount <= i.options.slidesToShow ? (i.setSlideClasses(o), void i.asNavFor(o)) : void i.slideHandler(o)
    }, t.prototype.slideHandler = function (e, t, i) {
        var n, o, s, r, a = null,
            l = this;
        return t = t || !1, !0 === l.animating && !0 === l.options.waitForAnimate || !0 === l.options.fade && l.currentSlide === e || l.slideCount <= l.options.slidesToShow ? void 0 : (!1 === t && l.asNavFor(e), n = e, a = l.getLeft(n), r = l.getLeft(l.currentSlide), l.currentLeft = null === l.swipeLeft ? r : l.swipeLeft, !1 === l.options.infinite && !1 === l.options.centerMode && (0 > e || e > l.getDotCount() * l.options.slidesToScroll) ? void(!1 === l.options.fade && (n = l.currentSlide, !0 !== i ? l.animateSlide(r, function () {
            l.postSlide(n)
        }) : l.postSlide(n))) : !1 === l.options.infinite && !0 === l.options.centerMode && (0 > e || e > l.slideCount - l.options.slidesToScroll) ? void(!1 === l.options.fade && (n = l.currentSlide, !0 !== i ? l.animateSlide(r, function () {
            l.postSlide(n)
        }) : l.postSlide(n))) : (!0 === l.options.autoplay && clearInterval(l.autoPlayTimer), o = 0 > n ? l.slideCount % l.options.slidesToScroll != 0 ? l.slideCount - l.slideCount % l.options.slidesToScroll : l.slideCount + n : n >= l.slideCount ? l.slideCount % l.options.slidesToScroll != 0 ? 0 : n - l.slideCount : n, l.animating = !0, l.$slider.trigger("beforeChange", [l, l.currentSlide, o]), s = l.currentSlide, l.currentSlide = o, l.setSlideClasses(l.currentSlide), l.updateDots(), l.updateArrows(), !0 === l.options.fade ? (!0 !== i ? (l.fadeSlideOut(s), l.fadeSlide(o, function () {
            l.postSlide(o)
        })) : l.postSlide(o), void l.animateHeight()) : void(!0 !== i ? l.animateSlide(a, function () {
            l.postSlide(o)
        }) : l.postSlide(o))))
    }, t.prototype.startLoad = function () {
        var e = this;
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.hide(), e.$nextArrow.hide()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.hide(), e.$slider.addClass("slick-loading")
    }, t.prototype.swipeDirection = function () {
        var e, t, i, n, o = this;
        return e = o.touchObject.startX - o.touchObject.curX, t = o.touchObject.startY - o.touchObject.curY, i = Math.atan2(t, e), n = Math.round(180 * i / Math.PI), 0 > n && (n = 360 - Math.abs(n)), 45 >= n && n >= 0 ? !1 === o.options.rtl ? "left" : "right" : 360 >= n && n >= 315 ? !1 === o.options.rtl ? "left" : "right" : n >= 135 && 225 >= n ? !1 === o.options.rtl ? "right" : "left" : !0 === o.options.verticalSwiping ? n >= 35 && 135 >= n ? "left" : "right" : "vertical"
    }, t.prototype.swipeEnd = function (e) {
        var t, i = this;
        if (i.dragging = !1, i.shouldClick = !(i.touchObject.swipeLength > 10), void 0 === i.touchObject.curX) return !1;
        if (!0 === i.touchObject.edgeHit && i.$slider.trigger("edge", [i, i.swipeDirection()]), i.touchObject.swipeLength >= i.touchObject.minSwipe) switch (i.swipeDirection()) {
            case "left":
                t = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide + i.getSlideCount()) : i.currentSlide + i.getSlideCount(), i.slideHandler(t), i.currentDirection = 0, i.touchObject = {}, i.$slider.trigger("swipe", [i, "left"]);
                break;
            case "right":
                t = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide - i.getSlideCount()) : i.currentSlide - i.getSlideCount(), i.slideHandler(t), i.currentDirection = 1, i.touchObject = {}, i.$slider.trigger("swipe", [i, "right"])
        } else i.touchObject.startX !== i.touchObject.curX && (i.slideHandler(i.currentSlide), i.touchObject = {})
    }, t.prototype.swipeHandler = function (e) {
        var t = this;
        if (!(!1 === t.options.swipe || "ontouchend" in document && !1 === t.options.swipe || !1 === t.options.draggable && -1 !== e.type.indexOf("mouse"))) switch (t.touchObject.fingerCount = e.originalEvent && void 0 !== e.originalEvent.touches ? e.originalEvent.touches.length : 1, t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold, !0 === t.options.verticalSwiping && (t.touchObject.minSwipe = t.listHeight / t.options.touchThreshold), e.data.action) {
            case "start":
                t.swipeStart(e);
                break;
            case "move":
                t.swipeMove(e);
                break;
            case "end":
                t.swipeEnd(e)
        }
    }, t.prototype.swipeMove = function (e) {
        var t, i, n, o, s, r = this;
        return s = void 0 !== e.originalEvent ? e.originalEvent.touches : null, !(!r.dragging || s && 1 !== s.length) && (t = r.getLeft(r.currentSlide), r.touchObject.curX = void 0 !== s ? s[0].pageX : e.clientX, r.touchObject.curY = void 0 !== s ? s[0].pageY : e.clientY, r.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(r.touchObject.curX - r.touchObject.startX, 2))), !0 === r.options.verticalSwiping && (r.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(r.touchObject.curY - r.touchObject.startY, 2)))), i = r.swipeDirection(), "vertical" !== i ? (void 0 !== e.originalEvent && r.touchObject.swipeLength > 4 && e.preventDefault(), o = (!1 === r.options.rtl ? 1 : -1) * (r.touchObject.curX > r.touchObject.startX ? 1 : -1), !0 === r.options.verticalSwiping && (o = r.touchObject.curY > r.touchObject.startY ? 1 : -1), n = r.touchObject.swipeLength, r.touchObject.edgeHit = !1, !1 === r.options.infinite && (0 === r.currentSlide && "right" === i || r.currentSlide >= r.getDotCount() && "left" === i) && (n = r.touchObject.swipeLength * r.options.edgeFriction, r.touchObject.edgeHit = !0), !1 === r.options.vertical ? r.swipeLeft = t + n * o : r.swipeLeft = t + n * (r.$list.height() / r.listWidth) * o, !0 === r.options.verticalSwiping && (r.swipeLeft = t + n * o), !0 !== r.options.fade && !1 !== r.options.touchMove && (!0 === r.animating ? (r.swipeLeft = null, !1) : void r.setCSS(r.swipeLeft))) : void 0)
    }, t.prototype.swipeStart = function (e) {
        var t, i = this;
        return 1 !== i.touchObject.fingerCount || i.slideCount <= i.options.slidesToShow ? (i.touchObject = {}, !1) : (void 0 !== e.originalEvent && void 0 !== e.originalEvent.touches && (t = e.originalEvent.touches[0]), i.touchObject.startX = i.touchObject.curX = void 0 !== t ? t.pageX : e.clientX, i.touchObject.startY = i.touchObject.curY = void 0 !== t ? t.pageY : e.clientY, void(i.dragging = !0))
    }, t.prototype.unfilterSlides = t.prototype.slickUnfilter = function () {
        var e = this;
        null !== e.$slidesCache && (e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.appendTo(e.$slideTrack), e.reinit())
    }, t.prototype.unload = function () {
        var t = this;
        e(".slick-cloned", t.$slider).remove(), t.$dots && t.$dots.remove(), t.$prevArrow && t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove(), t.$nextArrow && t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove(), t.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
    }, t.prototype.unslick = function (e) {
        var t = this;
        t.$slider.trigger("unslick", [t, e]), t.destroy()
    }, t.prototype.updateArrows = function () {
        var e = this;
        Math.floor(e.options.slidesToShow / 2), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && !e.options.infinite && (e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === e.currentSlide ? (e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - e.options.slidesToShow && !1 === e.options.centerMode ? (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - 1 && !0 === e.options.centerMode && (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
    }, t.prototype.updateDots = function () {
        var e = this;
        null !== e.$dots && (e.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), e.$dots.find("li").eq(Math.floor(e.currentSlide / e.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
    }, t.prototype.visibility = function () {
        var e = this;
        document[e.hidden] ? (e.paused = !0, e.autoPlayClear()) : !0 === e.options.autoplay && (e.paused = !1, e.autoPlay())
    }, t.prototype.initADA = function () {
        var t = this;
        t.$slides.add(t.$slideTrack.find(".slick-cloned")).attr({
            "aria-hidden": "true",
            tabindex: "-1"
        }).find("a, input, button, select").attr({
            tabindex: "-1"
        }), t.$slideTrack.attr("role", "listbox"), t.$slides.not(t.$slideTrack.find(".slick-cloned")).each(function (i) {
            e(this).attr({
                role: "option",
                "aria-describedby": "slick-slide" + t.instanceUid + i
            })
        }), null !== t.$dots && t.$dots.attr("role", "tablist").find("li").each(function (i) {
            e(this).attr({
                role: "presentation",
                "aria-selected": "false",
                "aria-controls": "navigation" + t.instanceUid + i,
                id: "slick-slide" + t.instanceUid + i
            })
        }).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"), t.activateADA()
    }, t.prototype.activateADA = function () {
        this.$slideTrack.find(".slick-active").attr({
            "aria-hidden": "false"
        }).find("a, input, button, select").attr({
            tabindex: "0"
        })
    }, t.prototype.focusHandler = function () {
        var t = this;
        t.$slider.on("focus.slick blur.slick", "*", function (i) {
            i.stopImmediatePropagation();
            var n = e(this);
            setTimeout(function () {
                t.isPlay && (n.is(":focus") ? (t.autoPlayClear(), t.paused = !0) : (t.paused = !1, t.autoPlay()))
            }, 0)
        })
    }, e.fn.slick = function () {
        var e, i, n = this,
            o = arguments[0],
            s = Array.prototype.slice.call(arguments, 1),
            r = n.length;
        for (e = 0; r > e; e++)
            if ("object" == (void 0 === o ? "undefined" : _typeof(o)) || void 0 === o ? n[e].slick = new t(n[e], o) : i = n[e].slick[o].apply(n[e].slick, s), void 0 !== i) return i;
        return n
    }
});
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e
} : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
};
! function (e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e("object" == ("undefined" == typeof exports ? "undefined" : _typeof(exports)) ? require("jquery") : jQuery)
}(function (e, t) {
    function i() {
        return new Date(Date.UTC.apply(Date, arguments))
    }

    function n() {
        var e = new Date;
        return i(e.getFullYear(), e.getMonth(), e.getDate())
    }

    function o(e, t) {
        return e.getUTCFullYear() === t.getUTCFullYear() && e.getUTCMonth() === t.getUTCMonth() && e.getUTCDate() === t.getUTCDate()
    }

    function s(e) {
        return function () {
            return this[e].apply(this, arguments)
        }
    }

    function r(e) {
        return e && !isNaN(e.getTime())
    }

    function a(t, i) {
        function n(e, t) {
            return t.toLowerCase()
        }
        var o, s = e(t).data(),
            r = {},
            a = new RegExp("^" + i.toLowerCase() + "([A-Z])");
        i = new RegExp("^" + i.toLowerCase());
        for (var l in s) i.test(l) && (o = l.replace(a, n), r[o] = s[l]);
        return r
    }

    function l(t) {
        var i = {};
        if (v[t] || (t = t.split("-")[0], v[t])) {
            var n = v[t];
            return e.each(g, function (e, t) {
                t in n && (i[t] = n[t])
            }), i
        }
    }
    var d = function () {
            var t = {
                get: function (e) {
                    return this.slice(e)[0]
                },
                contains: function (e) {
                    for (var t = e && e.valueOf(), i = 0, n = this.length; n > i; i++)
                        if (this[i].valueOf() === t) return i;
                    return -1
                },
                remove: function (e) {
                    this.splice(e, 1)
                },
                replace: function (t) {
                    t && (e.isArray(t) || (t = [t]), this.clear(), this.push.apply(this, t))
                },
                clear: function () {
                    this.length = 0
                },
                copy: function () {
                    var e = new d;
                    return e.replace(this), e
                }
            };
            return function () {
                var i = [];
                return i.push.apply(i, arguments), e.extend(i, t), i
            }
        }(),
        c = function (t, i) {
            e(t).data("datepicker", this), this._process_options(i), this.dates = new d, this.viewDate = this.o.defaultViewDate, this.focusDate = null, this.element = e(t), this.isInput = this.element.is("input"), this.inputField = this.isInput ? this.element : this.element.find("input"), this.component = !!this.element.hasClass("date") && this.element.find(".add-on, .input-group-addon, .btn"), this.hasInput = this.component && this.inputField.length, this.component && 0 === this.component.length && (this.component = !1), this.isInline = !this.component && this.element.is("div"), this.picker = e(y.template), this._check_template(this.o.templates.leftArrow) && this.picker.find(".prev").html(this.o.templates.leftArrow), this._check_template(this.o.templates.rightArrow) && this.picker.find(".next").html(this.o.templates.rightArrow), this._buildEvents(), this._attachEvents(), this.isInline ? this.picker.addClass("datepicker-inline").appendTo(this.element) : this.picker.addClass("datepicker-dropdown dropdown-menu"), this.o.rtl && this.picker.addClass("datepicker-rtl"), this.viewMode = this.o.startView, this.o.calendarWeeks && this.picker.find("thead .datepicker-title, tfoot .today, tfoot .clear").attr("colspan", function (e, t) {
                return parseInt(t) + 1
            }), this._allow_update = !1, this.setStartDate(this._o.startDate), this.setEndDate(this._o.endDate), this.setDaysOfWeekDisabled(this.o.daysOfWeekDisabled), this.setDaysOfWeekHighlighted(this.o.daysOfWeekHighlighted), this.setDatesDisabled(this.o.datesDisabled), this.fillDow(), this.fillMonths(), this._allow_update = !0, this.update(), this.showMode(), this.isInline && this.show()
        };
    c.prototype = {
        constructor: c,
        _resolveViewName: function (e, i) {
            return 0 === e || "days" === e || "month" === e ? 0 : 1 === e || "months" === e || "year" === e ? 1 : 2 === e || "years" === e || "decade" === e ? 2 : 3 === e || "decades" === e || "century" === e ? 3 : 4 === e || "centuries" === e || "millennium" === e ? 4 : i !== t && i
        },
        _check_template: function (i) {
            try {
                if (i === t || "" === i) return !1;
                if ((i.match(/[<>]/g) || []).length <= 0) return !0;
                return e(i).length > 0
            } catch (e) {
                return !1
            }
        },
        _process_options: function (t) {
            this._o = e.extend({}, this._o, t);
            var o = this.o = e.extend({}, this._o),
                s = o.language;
            v[s] || (s = s.split("-")[0], v[s] || (s = f.language)), o.language = s, o.startView = this._resolveViewName(o.startView, 0), o.minViewMode = this._resolveViewName(o.minViewMode, 0), o.maxViewMode = this._resolveViewName(o.maxViewMode, 4), o.startView = Math.min(o.startView, o.maxViewMode), o.startView = Math.max(o.startView, o.minViewMode), !0 !== o.multidate && (o.multidate = Number(o.multidate) || !1, !1 !== o.multidate && (o.multidate = Math.max(0, o.multidate))), o.multidateSeparator = String(o.multidateSeparator), o.weekStart %= 7, o.weekEnd = (o.weekStart + 6) % 7;
            var r = y.parseFormat(o.format);
            o.startDate !== -1 / 0 && (o.startDate ? o.startDate instanceof Date ? o.startDate = this._local_to_utc(this._zero_time(o.startDate)) : o.startDate = y.parseDate(o.startDate, r, o.language, o.assumeNearbyYear) : o.startDate = -1 / 0), o.endDate !== 1 / 0 && (o.endDate ? o.endDate instanceof Date ? o.endDate = this._local_to_utc(this._zero_time(o.endDate)) : o.endDate = y.parseDate(o.endDate, r, o.language, o.assumeNearbyYear) : o.endDate = 1 / 0), o.daysOfWeekDisabled = o.daysOfWeekDisabled || [], e.isArray(o.daysOfWeekDisabled) || (o.daysOfWeekDisabled = o.daysOfWeekDisabled.split(/[,\s]*/)), o.daysOfWeekDisabled = e.map(o.daysOfWeekDisabled, function (e) {
                return parseInt(e, 10)
            }), o.daysOfWeekHighlighted = o.daysOfWeekHighlighted || [], e.isArray(o.daysOfWeekHighlighted) || (o.daysOfWeekHighlighted = o.daysOfWeekHighlighted.split(/[,\s]*/)), o.daysOfWeekHighlighted = e.map(o.daysOfWeekHighlighted, function (e) {
                return parseInt(e, 10)
            }), o.datesDisabled = o.datesDisabled || [], e.isArray(o.datesDisabled) || (o.datesDisabled = [o.datesDisabled]), o.datesDisabled = e.map(o.datesDisabled, function (e) {
                return y.parseDate(e, r, o.language, o.assumeNearbyYear)
            });
            var a = String(o.orientation).toLowerCase().split(/\s+/g),
                l = o.orientation.toLowerCase();
            if (a = e.grep(a, function (e) {
                    return /^auto|left|right|top|bottom$/.test(e)
                }), o.orientation = {
                    x: "auto",
                    y: "auto"
                }, l && "auto" !== l)
                if (1 === a.length) switch (a[0]) {
                    case "top":
                    case "bottom":
                        o.orientation.y = a[0];
                        break;
                    case "left":
                    case "right":
                        o.orientation.x = a[0]
                } else l = e.grep(a, function (e) {
                    return /^left|right$/.test(e)
                }), o.orientation.x = l[0] || "auto", l = e.grep(a, function (e) {
                    return /^top|bottom$/.test(e)
                }), o.orientation.y = l[0] || "auto";
            if (o.defaultViewDate) {
                var d = o.defaultViewDate.year || (new Date).getFullYear(),
                    c = o.defaultViewDate.month || 0,
                    u = o.defaultViewDate.day || 1;
                o.defaultViewDate = i(d, c, u)
            } else o.defaultViewDate = n()
        },
        _events: [],
        _secondaryEvents: [],
        _applyEvents: function (e) {
            for (var i, n, o, s = 0; s < e.length; s++) i = e[s][0], 2 === e[s].length ? (n = t, o = e[s][1]) : 3 === e[s].length && (n = e[s][1], o = e[s][2]), i.on(o, n)
        },
        _unapplyEvents: function (e) {
            for (var i, n, o, s = 0; s < e.length; s++) i = e[s][0], 2 === e[s].length ? (o = t, n = e[s][1]) : 3 === e[s].length && (o = e[s][1], n = e[s][2]), i.off(n, o)
        },
        _buildEvents: function () {
            var t = {
                keyup: e.proxy(function (t) {
                    -1 === e.inArray(t.keyCode, [27, 37, 39, 38, 40, 32, 13, 9]) && this.update()
                }, this),
                keydown: e.proxy(this.keydown, this),
                paste: e.proxy(this.paste, this)
            };
            !0 === this.o.showOnFocus && (t.focus = e.proxy(this.show, this)), this.isInput ? this._events = [
                [this.element, t]
            ] : this.component && this.hasInput ? this._events = [
                [this.inputField, t],
                [this.component, {
                    click: e.proxy(this.show, this)
                }]
            ] : this._events = [
                [this.element, {
                    click: e.proxy(this.show, this),
                    keydown: e.proxy(this.keydown, this)
                }]
            ], this._events.push([this.element, "*", {
                blur: e.proxy(function (e) {
                    this._focused_from = e.target
                }, this)
            }], [this.element, {
                blur: e.proxy(function (e) {
                    this._focused_from = e.target
                }, this)
            }]), this.o.immediateUpdates && this._events.push([this.element, {
                "changeYear changeMonth": e.proxy(function (e) {
                    this.update(e.date)
                }, this)
            }]), this._secondaryEvents = [
                [this.picker, {
                    click: e.proxy(this.click, this)
                }],
                [e(window), {
                    resize: e.proxy(this.place, this)
                }],
                [e(document), {
                    mousedown: e.proxy(function (e) {
                        this.element.is(e.target) || this.element.find(e.target).length || this.picker.is(e.target) || this.picker.find(e.target).length || this.isInline || this.hide()
                    }, this)
                }]
            ]
        },
        _attachEvents: function () {
            this._detachEvents(), this._applyEvents(this._events)
        },
        _detachEvents: function () {
            this._unapplyEvents(this._events)
        },
        _attachSecondaryEvents: function () {
            this._detachSecondaryEvents(), this._applyEvents(this._secondaryEvents)
        },
        _detachSecondaryEvents: function () {
            this._unapplyEvents(this._secondaryEvents)
        },
        _trigger: function (t, i) {
            var n = i || this.dates.get(-1),
                o = this._utc_to_local(n);
            this.element.trigger({
                type: t,
                date: o,
                dates: e.map(this.dates, this._utc_to_local),
                format: e.proxy(function (e, t) {
                    0 === arguments.length ? (e = this.dates.length - 1, t = this.o.format) : "string" == typeof e && (t = e, e = this.dates.length - 1), t = t || this.o.format;
                    var i = this.dates.get(e);
                    return y.formatDate(i, t, this.o.language)
                }, this)
            })
        },
        show: function () {
            return this.inputField.prop("disabled") || this.inputField.prop("readonly") && !1 === this.o.enableOnReadonly ? void 0 : (this.isInline || this.picker.appendTo(this.o.container), this.place(), this.picker.show(), this._attachSecondaryEvents(), this._trigger("show"), (window.navigator.msMaxTouchPoints || "ontouchstart" in document) && this.o.disableTouchKeyboard && e(this.element).blur(), this)
        },
        hide: function () {
            return this.isInline || !this.picker.is(":visible") ? this : (this.focusDate = null, this.picker.hide().detach(), this._detachSecondaryEvents(), this.viewMode = this.o.startView, this.showMode(), this.o.forceParse && this.inputField.val() && this.setValue(), this._trigger("hide"), this)
        },
        destroy: function () {
            return this.hide(), this._detachEvents(), this._detachSecondaryEvents(), this.picker.remove(), delete this.element.data().datepicker, this.isInput || delete this.element.data().date, this
        },
        paste: function (t) {
            var i;
            if (t.originalEvent.clipboardData && t.originalEvent.clipboardData.types && -1 !== e.inArray("text/plain", t.originalEvent.clipboardData.types)) i = t.originalEvent.clipboardData.getData("text/plain");
            else {
                if (!window.clipboardData) return;
                i = window.clipboardData.getData("Text")
            }
            this.setDate(i), this.update(), t.preventDefault()
        },
        _utc_to_local: function (e) {
            return e && new Date(e.getTime() + 6e4 * e.getTimezoneOffset())
        },
        _local_to_utc: function (e) {
            return e && new Date(e.getTime() - 6e4 * e.getTimezoneOffset())
        },
        _zero_time: function (e) {
            return e && new Date(e.getFullYear(), e.getMonth(), e.getDate())
        },
        _zero_utc_time: function (e) {
            return e && new Date(Date.UTC(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate()))
        },
        getDates: function () {
            return e.map(this.dates, this._utc_to_local)
        },
        getUTCDates: function () {
            return e.map(this.dates, function (e) {
                return new Date(e)
            })
        },
        getDate: function () {
            return this._utc_to_local(this.getUTCDate())
        },
        getUTCDate: function () {
            var e = this.dates.get(-1);
            return void 0 !== e ? new Date(e) : null
        },
        clearDates: function () {
            this.inputField && this.inputField.val(""), this.update(), this._trigger("changeDate"), this.o.autoclose && this.hide()
        },
        setDates: function () {
            var t = e.isArray(arguments[0]) ? arguments[0] : arguments;
            return this.update.apply(this, t), this._trigger("changeDate"), this.setValue(), this
        },
        setUTCDates: function () {
            var t = e.isArray(arguments[0]) ? arguments[0] : arguments;
            return this.update.apply(this, e.map(t, this._utc_to_local)), this._trigger("changeDate"), this.setValue(), this
        },
        setDate: s("setDates"),
        setUTCDate: s("setUTCDates"),
        remove: s("destroy"),
        setValue: function () {
            var e = this.getFormattedDate();
            return this.inputField.val(e), this
        },
        getFormattedDate: function (i) {
            i === t && (i = this.o.format);
            var n = this.o.language;
            return e.map(this.dates, function (e) {
                return y.formatDate(e, i, n)
            }).join(this.o.multidateSeparator)
        },
        getStartDate: function () {
            return this.o.startDate
        },
        setStartDate: function (e) {
            return this._process_options({
                startDate: e
            }), this.update(), this.updateNavArrows(), this
        },
        getEndDate: function () {
            return this.o.endDate
        },
        setEndDate: function (e) {
            return this._process_options({
                endDate: e
            }), this.update(), this.updateNavArrows(), this
        },
        setDaysOfWeekDisabled: function (e) {
            return this._process_options({
                daysOfWeekDisabled: e
            }), this.update(), this.updateNavArrows(), this
        },
        setDaysOfWeekHighlighted: function (e) {
            return this._process_options({
                daysOfWeekHighlighted: e
            }), this.update(), this
        },
        setDatesDisabled: function (e) {
            this._process_options({
                datesDisabled: e
            }), this.update(), this.updateNavArrows()
        },
        place: function () {
            if (this.isInline) return this;
            var t = this.picker.outerWidth(),
                i = this.picker.outerHeight(),
                n = 10,
                o = e(this.o.container),
                s = o.width(),
                r = "body" === this.o.container ? e(document).scrollTop() : o.scrollTop(),
                a = o.offset(),
                l = [];
            this.element.parents().each(function () {
                var t = e(this).css("z-index");
                "auto" !== t && 0 !== t && l.push(parseInt(t))
            });
            var d = Math.max.apply(Math, l) + this.o.zIndexOffset,
                c = this.component ? this.component.parent().offset() : this.element.offset(),
                u = this.component ? this.component.outerHeight(!0) : this.element.outerHeight(!1),
                p = this.component ? this.component.outerWidth(!0) : this.element.outerWidth(!1),
                h = c.left - a.left,
                f = c.top - a.top;
            "body" !== this.o.container && (f += r), this.picker.removeClass("datepicker-orient-top datepicker-orient-bottom datepicker-orient-right datepicker-orient-left"), "auto" !== this.o.orientation.x ? (this.picker.addClass("datepicker-orient-" + this.o.orientation.x), "right" === this.o.orientation.x && (h -= t - p)) : c.left < 0 ? (this.picker.addClass("datepicker-orient-left"), h -= c.left - n) : h + t > s ? (this.picker.addClass("datepicker-orient-right"), h += p - t) : this.picker.addClass("datepicker-orient-left");
            var g, v = this.o.orientation.y;
            if ("auto" === v && (g = -r + f - i, v = 0 > g ? "bottom" : "top"), this.picker.addClass("datepicker-orient-" + v), "top" === v ? f -= i + parseInt(this.picker.css("padding-top")) : f += u, this.o.rtl) {
                var y = s - (h + p);
                this.picker.css({
                    top: f,
                    right: y,
                    zIndex: d
                })
            } else this.picker.css({
                top: f,
                left: h,
                zIndex: d
            });
            return this
        },
        _allow_update: !0,
        update: function () {
            if (!this._allow_update) return this;
            var t = this.dates.copy(),
                i = [],
                n = !1;
            return arguments.length ? (e.each(arguments, e.proxy(function (e, t) {
                t instanceof Date && (t = this._local_to_utc(t)), i.push(t)
            }, this)), n = !0) : (i = this.isInput ? this.element.val() : this.element.data("date") || this.inputField.val(), i = i && this.o.multidate ? i.split(this.o.multidateSeparator) : [i], delete this.element.data().date), i = e.map(i, e.proxy(function (e) {
                return y.parseDate(e, this.o.format, this.o.language, this.o.assumeNearbyYear)
            }, this)), i = e.grep(i, e.proxy(function (e) {
                return !this.dateWithinRange(e) || !e
            }, this), !0), this.dates.replace(i), this.dates.length ? this.viewDate = new Date(this.dates.get(-1)) : this.viewDate < this.o.startDate ? this.viewDate = new Date(this.o.startDate) : this.viewDate > this.o.endDate ? this.viewDate = new Date(this.o.endDate) : this.viewDate = this.o.defaultViewDate, n ? this.setValue() : i.length && String(t) !== String(this.dates) && this._trigger("changeDate"), !this.dates.length && t.length && this._trigger("clearDate"), this.fill(), this.element.change(), this
        },
        fillDow: function () {
            var t = this.o.weekStart,
                i = "<tr>";
            for (this.o.calendarWeeks && (this.picker.find(".datepicker-days .datepicker-switch").attr("colspan", function (e, t) {
                    return parseInt(t) + 1
                }), i += '<th class="cw">&#160;</th>'); t < this.o.weekStart + 7;) i += '<th class="dow', e.inArray(t, this.o.daysOfWeekDisabled) > -1 && (i += " disabled"), i += '">' + v[this.o.language].daysMin[t++ % 7] + "</th>";
            i += "</tr>", this.picker.find(".datepicker-days thead").append(i)
        },
        fillMonths: function () {
            for (var e = this._utc_to_local(this.viewDate), t = "", i = 0; 12 > i;) {
                t += '<span class="month' + (e && e.getMonth() === i ? " focused" : "") + '">' + v[this.o.language].monthsShort[i++] + "</span>"
            }
            this.picker.find(".datepicker-months td").html(t)
        },
        setRange: function (t) {
            t && t.length ? this.range = e.map(t, function (e) {
                return e.valueOf()
            }) : delete this.range, this.fill()
        },
        getClassNames: function (t) {
            var i = [],
                n = this.viewDate.getUTCFullYear(),
                o = this.viewDate.getUTCMonth(),
                s = new Date;
            return t.getUTCFullYear() < n || t.getUTCFullYear() === n && t.getUTCMonth() < o ? i.push("old") : (t.getUTCFullYear() > n || t.getUTCFullYear() === n && t.getUTCMonth() > o) && i.push("new"), this.focusDate && t.valueOf() === this.focusDate.valueOf() && i.push("focused"), this.o.todayHighlight && t.getUTCFullYear() === s.getFullYear() && t.getUTCMonth() === s.getMonth() && t.getUTCDate() === s.getDate() && i.push("today"), -1 !== this.dates.contains(t) && i.push("active"), this.dateWithinRange(t) || i.push("disabled"), this.dateIsDisabled(t) && i.push("disabled", "disabled-date"), -1 !== e.inArray(t.getUTCDay(), this.o.daysOfWeekHighlighted) && i.push("highlighted"), this.range && (t > this.range[0] && t < this.range[this.range.length - 1] && i.push("range"), -1 !== e.inArray(t.valueOf(), this.range) && i.push("selected"), t.valueOf() === this.range[0] && i.push("range-start"), t.valueOf() === this.range[this.range.length - 1] && i.push("range-end")), i
        },
        _fill_yearsView: function (i, n, o, s, r, a, l, d) {
            var c, u, p, h, f, g, v, y, m, w, b;
            for (c = "", u = this.picker.find(i), p = parseInt(r / o, 10) * o, f = parseInt(a / s, 10) * s, g = parseInt(l / s, 10) * s, h = e.map(this.dates, function (e) {
                    return parseInt(e.getUTCFullYear() / s, 10) * s
                }), u.find(".datepicker-switch").text(p + "-" + (p + 9 * s)), v = p - s, y = -1; 11 > y; y += 1) m = [n], w = null, -1 === y ? m.push("old") : 10 === y && m.push("new"), -1 !== e.inArray(v, h) && m.push("active"), (f > v || v > g) && m.push("disabled"), v === this.viewDate.getFullYear() && m.push("focused"), d !== e.noop && (b = d(new Date(v, 0, 1)), b === t ? b = {} : "boolean" == typeof b ? b = {
                enabled: b
            } : "string" == typeof b && (b = {
                classes: b
            }), !1 === b.enabled && m.push("disabled"), b.classes && (m = m.concat(b.classes.split(/\s+/))), b.tooltip && (w = b.tooltip)), c += '<span class="' + m.join(" ") + '"' + (w ? ' title="' + w + '"' : "") + ">" + v + "</span>", v += s;
            u.find("td").html(c)
        },
        fill: function () {
            var n, o, s = new Date(this.viewDate),
                r = s.getUTCFullYear(),
                a = s.getUTCMonth(),
                l = this.o.startDate !== -1 / 0 ? this.o.startDate.getUTCFullYear() : -1 / 0,
                d = this.o.startDate !== -1 / 0 ? this.o.startDate.getUTCMonth() : -1 / 0,
                c = this.o.endDate !== 1 / 0 ? this.o.endDate.getUTCFullYear() : 1 / 0,
                u = this.o.endDate !== 1 / 0 ? this.o.endDate.getUTCMonth() : 1 / 0,
                p = v[this.o.language].today || v.en.today || "",
                h = v[this.o.language].clear || v.en.clear || "",
                f = v[this.o.language].titleFormat || v.en.titleFormat;
            if (!isNaN(r) && !isNaN(a)) {
                this.picker.find(".datepicker-days .datepicker-switch").text(y.formatDate(s, f, this.o.language)), this.picker.find("tfoot .today").text(p).toggle(!1 !== this.o.todayBtn), this.picker.find("tfoot .clear").text(h).toggle(!1 !== this.o.clearBtn), this.picker.find("thead .datepicker-title").text(this.o.title).toggle("" !== this.o.title), this.updateNavArrows(), this.fillMonths();
                var g = i(r, a - 1, 28),
                    m = y.getDaysInMonth(g.getUTCFullYear(), g.getUTCMonth());
                g.setUTCDate(m), g.setUTCDate(m - (g.getUTCDay() - this.o.weekStart + 7) % 7);
                var w = new Date(g);
                g.getUTCFullYear() < 100 && w.setUTCFullYear(g.getUTCFullYear()), w.setUTCDate(w.getUTCDate() + 42), w = w.valueOf();
                for (var b, k = []; g.valueOf() < w;) {
                    if (g.getUTCDay() === this.o.weekStart && (k.push("<tr>"), this.o.calendarWeeks)) {
                        var T = new Date(+g + (this.o.weekStart - g.getUTCDay() - 7) % 7 * 864e5),
                            x = new Date(Number(T) + (11 - T.getUTCDay()) % 7 * 864e5),
                            C = new Date(Number(C = i(x.getUTCFullYear(), 0, 1)) + (11 - C.getUTCDay()) % 7 * 864e5),
                            D = (x - C) / 864e5 / 7 + 1;
                        k.push('<td class="cw">' + D + "</td>")
                    }
                    b = this.getClassNames(g), b.push("day"), this.o.beforeShowDay !== e.noop && (o = this.o.beforeShowDay(this._utc_to_local(g)), o === t ? o = {} : "boolean" == typeof o ? o = {
                        enabled: o
                    } : "string" == typeof o && (o = {
                        classes: o
                    }), !1 === o.enabled && b.push("disabled"), o.classes && (b = b.concat(o.classes.split(/\s+/))), o.tooltip && (n = o.tooltip)), b = e.isFunction(e.uniqueSort) ? e.uniqueSort(b) : e.unique(b), k.push('<td class="' + b.join(" ") + '"' + (n ? ' title="' + n + '"' : "") + ">" + g.getUTCDate() + "</td>"), n = null, g.getUTCDay() === this.o.weekEnd && k.push("</tr>"), g.setUTCDate(g.getUTCDate() + 1)
                }
                this.picker.find(".datepicker-days tbody").empty().append(k.join(""));
                var S = v[this.o.language].monthsTitle || v.en.monthsTitle || "Months",
                    $ = this.picker.find(".datepicker-months").find(".datepicker-switch").text(this.o.maxViewMode < 2 ? S : r).end().find("span").removeClass("active");
                if (e.each(this.dates, function (e, t) {
                        t.getUTCFullYear() === r && $.eq(t.getUTCMonth()).addClass("active")
                    }), (l > r || r > c) && $.addClass("disabled"), r === l && $.slice(0, d).addClass("disabled"), r === c && $.slice(u + 1).addClass("disabled"), this.o.beforeShowMonth !== e.noop) {
                    var A = this;
                    e.each($, function (i, n) {
                        var o = new Date(r, i, 1),
                            s = A.o.beforeShowMonth(o);
                        s === t ? s = {} : "boolean" == typeof s ? s = {
                            enabled: s
                        } : "string" == typeof s && (s = {
                            classes: s
                        }), !1 !== s.enabled || e(n).hasClass("disabled") || e(n).addClass("disabled"), s.classes && e(n).addClass(s.classes), s.tooltip && e(n).prop("title", s.tooltip)
                    })
                }
                this._fill_yearsView(".datepicker-years", "year", 10, 1, r, l, c, this.o.beforeShowYear), this._fill_yearsView(".datepicker-decades", "decade", 100, 10, r, l, c, this.o.beforeShowDecade), this._fill_yearsView(".datepicker-centuries", "century", 1e3, 100, r, l, c, this.o.beforeShowCentury)
            }
        },
        updateNavArrows: function () {
            if (this._allow_update) {
                var e = new Date(this.viewDate),
                    t = e.getUTCFullYear(),
                    i = e.getUTCMonth();
                switch (this.viewMode) {
                    case 0:
                        this.o.startDate !== -1 / 0 && t <= this.o.startDate.getUTCFullYear() && i <= this.o.startDate.getUTCMonth() ? this.picker.find(".prev").css({
                            visibility: "hidden"
                        }) : this.picker.find(".prev").css({
                            visibility: "visible"
                        }), this.o.endDate !== 1 / 0 && t >= this.o.endDate.getUTCFullYear() && i >= this.o.endDate.getUTCMonth() ? this.picker.find(".next").css({
                            visibility: "hidden"
                        }) : this.picker.find(".next").css({
                            visibility: "visible"
                        });
                        break;
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                        this.o.startDate !== -1 / 0 && t <= this.o.startDate.getUTCFullYear() || this.o.maxViewMode < 2 ? this.picker.find(".prev").css({
                            visibility: "hidden"
                        }) : this.picker.find(".prev").css({
                            visibility: "visible"
                        }), this.o.endDate !== 1 / 0 && t >= this.o.endDate.getUTCFullYear() || this.o.maxViewMode < 2 ? this.picker.find(".next").css({
                            visibility: "hidden"
                        }) : this.picker.find(".next").css({
                            visibility: "visible"
                        })
                }
            }
        },
        click: function (t) {
            t.preventDefault(), t.stopPropagation();
            var o, s, r, a, l, d, c;
            o = e(t.target), o.hasClass("datepicker-switch") && this.showMode(1);
            var u = o.closest(".prev, .next");
            u.length > 0 && (s = y.modes[this.viewMode].navStep * (u.hasClass("prev") ? -1 : 1), 0 === this.viewMode ? (this.viewDate = this.moveMonth(this.viewDate, s), this._trigger("changeMonth", this.viewDate)) : (this.viewDate = this.moveYear(this.viewDate, s), 1 === this.viewMode && this._trigger("changeYear", this.viewDate)), this.fill()), o.hasClass("today") && !o.hasClass("day") && (this.showMode(-2), this._setDate(n(), "linked" === this.o.todayBtn ? null : "view")), o.hasClass("clear") && this.clearDates(), o.hasClass("disabled") || (o.hasClass("day") && (r = parseInt(o.text(), 10) || 1, a = this.viewDate.getUTCFullYear(), l = this.viewDate.getUTCMonth(), o.hasClass("old") && (0 === l ? (l = 11, a -= 1, d = !0, c = !0) : (l -= 1, d = !0)), o.hasClass("new") && (11 === l ? (l = 0, a += 1, d = !0, c = !0) : (l += 1, d = !0)), this._setDate(i(a, l, r)), c && this._trigger("changeYear", this.viewDate), d && this._trigger("changeMonth", this.viewDate)), o.hasClass("month") && (this.viewDate.setUTCDate(1), r = 1, l = o.parent().find("span").index(o), a = this.viewDate.getUTCFullYear(), this.viewDate.setUTCMonth(l), this._trigger("changeMonth", this.viewDate), 1 === this.o.minViewMode ? (this._setDate(i(a, l, r)), this.showMode()) : this.showMode(-1), this.fill()), (o.hasClass("year") || o.hasClass("decade") || o.hasClass("century")) && (this.viewDate.setUTCDate(1), r = 1, l = 0, a = parseInt(o.text(), 10) || 0, this.viewDate.setUTCFullYear(a), o.hasClass("year") && (this._trigger("changeYear", this.viewDate), 2 === this.o.minViewMode && this._setDate(i(a, l, r))), o.hasClass("decade") && (this._trigger("changeDecade", this.viewDate), 3 === this.o.minViewMode && this._setDate(i(a, l, r))), o.hasClass("century") && (this._trigger("changeCentury", this.viewDate), 4 === this.o.minViewMode && this._setDate(i(a, l, r))), this.showMode(-1), this.fill())), this.picker.is(":visible") && this._focused_from && e(this._focused_from).focus(), delete this._focused_from
        },
        _toggle_multidate: function (e) {
            var t = this.dates.contains(e);
            if (e || this.dates.clear(), -1 !== t ? (!0 === this.o.multidate || this.o.multidate > 1 || this.o.toggleActive) && this.dates.remove(t) : !1 === this.o.multidate ? (this.dates.clear(), this.dates.push(e)) : this.dates.push(e), "number" == typeof this.o.multidate)
                for (; this.dates.length > this.o.multidate;) this.dates.remove(0)
        },
        _setDate: function (e, t) {
            t && "date" !== t || this._toggle_multidate(e && new Date(e)), t && "view" !== t || (this.viewDate = e && new Date(e)), this.fill(), this.setValue(), t && "view" === t || this._trigger("changeDate"), this.inputField && this.inputField.change(), !this.o.autoclose || t && "date" !== t || this.hide()
        },
        moveDay: function (e, t) {
            var i = new Date(e);
            return i.setUTCDate(e.getUTCDate() + t), i
        },
        moveWeek: function (e, t) {
            return this.moveDay(e, 7 * t)
        },
        moveMonth: function (e, t) {
            if (!r(e)) return this.o.defaultViewDate;
            if (!t) return e;
            var i, n, o = new Date(e.valueOf()),
                s = o.getUTCDate(),
                a = o.getUTCMonth(),
                l = Math.abs(t);
            if (t = t > 0 ? 1 : -1, 1 === l) n = -1 === t ? function () {
                return o.getUTCMonth() === a
            } : function () {
                return o.getUTCMonth() !== i
            }, i = a + t, o.setUTCMonth(i), (0 > i || i > 11) && (i = (i + 12) % 12);
            else {
                for (var d = 0; l > d; d++) o = this.moveMonth(o, t);
                i = o.getUTCMonth(), o.setUTCDate(s), n = function () {
                    return i !== o.getUTCMonth()
                }
            }
            for (; n();) o.setUTCDate(--s), o.setUTCMonth(i);
            return o
        },
        moveYear: function (e, t) {
            return this.moveMonth(e, 12 * t)
        },
        moveAvailableDate: function (e, t, i) {
            do {
                if (e = this[i](e, t), !this.dateWithinRange(e)) return !1;
                i = "moveDay"
            } while (this.dateIsDisabled(e));
            return e
        },
        weekOfDateIsDisabled: function (t) {
            return -1 !== e.inArray(t.getUTCDay(), this.o.daysOfWeekDisabled)
        },
        dateIsDisabled: function (t) {
            return this.weekOfDateIsDisabled(t) || e.grep(this.o.datesDisabled, function (e) {
                return o(t, e)
            }).length > 0
        },
        dateWithinRange: function (e) {
            return e >= this.o.startDate && e <= this.o.endDate
        },
        keydown: function (e) {
            if (!this.picker.is(":visible")) return void((40 === e.keyCode || 27 === e.keyCode) && (this.show(), e.stopPropagation()));
            var t, i, n = !1,
                o = this.focusDate || this.viewDate;
            switch (e.keyCode) {
                case 27:
                    this.focusDate ? (this.focusDate = null, this.viewDate = this.dates.get(-1) || this.viewDate, this.fill()) : this.hide(), e.preventDefault(), e.stopPropagation();
                    break;
                case 37:
                case 38:
                case 39:
                case 40:
                    if (!this.o.keyboardNavigation || 7 === this.o.daysOfWeekDisabled.length) break;
                    t = 37 === e.keyCode || 38 === e.keyCode ? -1 : 1, 0 === this.viewMode ? e.ctrlKey ? (i = this.moveAvailableDate(o, t, "moveYear")) && this._trigger("changeYear", this.viewDate) : e.shiftKey ? (i = this.moveAvailableDate(o, t, "moveMonth")) && this._trigger("changeMonth", this.viewDate) : 37 === e.keyCode || 39 === e.keyCode ? i = this.moveAvailableDate(o, t, "moveDay") : this.weekOfDateIsDisabled(o) || (i = this.moveAvailableDate(o, t, "moveWeek")) : 1 === this.viewMode ? ((38 === e.keyCode || 40 === e.keyCode) && (t *= 4), i = this.moveAvailableDate(o, t, "moveMonth")) : 2 === this.viewMode && ((38 === e.keyCode || 40 === e.keyCode) && (t *= 4), i = this.moveAvailableDate(o, t, "moveYear")), i && (this.focusDate = this.viewDate = i, this.setValue(), this.fill(), e.preventDefault());
                    break;
                case 13:
                    if (!this.o.forceParse) break;
                    o = this.focusDate || this.dates.get(-1) || this.viewDate, this.o.keyboardNavigation && (this._toggle_multidate(o), n = !0), this.focusDate = null, this.viewDate = this.dates.get(-1) || this.viewDate, this.setValue(), this.fill(), this.picker.is(":visible") && (e.preventDefault(), e.stopPropagation(), this.o.autoclose && this.hide());
                    break;
                case 9:
                    this.focusDate = null, this.viewDate = this.dates.get(-1) || this.viewDate, this.fill(), this.hide()
            }
            n && (this.dates.length ? this._trigger("changeDate") : this._trigger("clearDate"), this.inputField && this.inputField.change())
        },
        showMode: function (e) {
            e && (this.viewMode = Math.max(this.o.minViewMode, Math.min(this.o.maxViewMode, this.viewMode + e))), this.picker.children("div").hide().filter(".datepicker-" + y.modes[this.viewMode].clsName).show(), this.updateNavArrows()
        }
    };
    var u = function (t, i) {
        e(t).data("datepicker", this), this.element = e(t), this.inputs = e.map(i.inputs, function (e) {
            return e.jquery ? e[0] : e
        }), delete i.inputs, h.call(e(this.inputs), i).on("changeDate", e.proxy(this.dateUpdated, this)), this.pickers = e.map(this.inputs, function (t) {
            return e(t).data("datepicker")
        }), this.updateDates()
    };
    u.prototype = {
        updateDates: function () {
            this.dates = e.map(this.pickers, function (e) {
                return e.getUTCDate()
            }), this.updateRanges()
        },
        updateRanges: function () {
            var t = e.map(this.dates, function (e) {
                return e.valueOf()
            });
            e.each(this.pickers, function (e, i) {
                i.setRange(t)
            })
        },
        dateUpdated: function (t) {
            if (!this.updating) {
                this.updating = !0;
                var i = e(t.target).data("datepicker");
                if (void 0 !== i) {
                    var n = i.getUTCDate(),
                        o = e.inArray(t.target, this.inputs),
                        s = o - 1,
                        r = o + 1,
                        a = this.inputs.length;
                    if (-1 !== o) {
                        if (e.each(this.pickers, function (e, t) {
                                t.getUTCDate() || t.setUTCDate(n)
                            }), n < this.dates[s])
                            for (; s >= 0 && n < this.dates[s];) this.pickers[s--].setUTCDate(n);
                        else if (n > this.dates[r])
                            for (; a > r && n > this.dates[r];) this.pickers[r++].setUTCDate(n);
                        this.updateDates(), delete this.updating
                    }
                }
            }
        },
        remove: function () {
            e.map(this.pickers, function (e) {
                e.remove()
            }), delete this.element.data().datepicker
        }
    };
    var p = e.fn.datepicker,
        h = function (i) {
            var n = Array.apply(null, arguments);
            n.shift();
            var o;
            if (this.each(function () {
                    var t = e(this),
                        s = t.data("datepicker"),
                        r = "object" == (void 0 === i ? "undefined" : _typeof(i)) && i;
                    if (!s) {
                        var d = a(this, "date"),
                            p = e.extend({}, f, d, r),
                            h = l(p.language),
                            g = e.extend({}, f, h, d, r);
                        t.hasClass("input-daterange") || g.inputs ? (e.extend(g, {
                            inputs: g.inputs || t.find("input").toArray()
                        }), s = new u(this, g)) : s = new c(this, g), t.data("datepicker", s)
                    }
                    "string" == typeof i && "function" == typeof s[i] && (o = s[i].apply(s, n))
                }), o === t || o instanceof c || o instanceof u) return this;
            if (this.length > 1) throw new Error("Using only allowed for the collection of a single element (" + i + " function)");
            return o
        };
    e.fn.datepicker = h;
    var f = e.fn.datepicker.defaults = {
            assumeNearbyYear: !1,
            autoclose: !1,
            beforeShowDay: e.noop,
            beforeShowMonth: e.noop,
            beforeShowYear: e.noop,
            beforeShowDecade: e.noop,
            beforeShowCentury: e.noop,
            calendarWeeks: !1,
            clearBtn: !1,
            toggleActive: !1,
            daysOfWeekDisabled: [],
            daysOfWeekHighlighted: [],
            datesDisabled: [],
            endDate: 1 / 0,
            forceParse: !0,
            format: "mm/dd/yyyy",
            keyboardNavigation: !0,
            language: "en",
            minViewMode: 0,
            maxViewMode: 4,
            multidate: !1,
            multidateSeparator: ",",
            orientation: "auto",
            rtl: !1,
            startDate: -1 / 0,
            startView: 0,
            todayBtn: !1,
            todayHighlight: !1,
            weekStart: 0,
            disableTouchKeyboard: !1,
            enableOnReadonly: !0,
            showOnFocus: !0,
            zIndexOffset: 10,
            container: "body",
            immediateUpdates: !1,
            title: "",
            templates: {
                leftArrow: "&laquo;",
                rightArrow: "&raquo;"
            }
        },
        g = e.fn.datepicker.locale_opts = ["format", "rtl", "weekStart"];
    e.fn.datepicker.Constructor = c;
    var v = e.fn.datepicker.dates = {
            en: {
                days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
                months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                today: "Today",
                clear: "Clear",
                titleFormat: "MM yyyy"
            }
        },
        y = {
            modes: [{
                clsName: "days",
                navFnc: "Month",
                navStep: 1
            }, {
                clsName: "months",
                navFnc: "FullYear",
                navStep: 1
            }, {
                clsName: "years",
                navFnc: "FullYear",
                navStep: 10
            }, {
                clsName: "decades",
                navFnc: "FullDecade",
                navStep: 100
            }, {
                clsName: "centuries",
                navFnc: "FullCentury",
                navStep: 1e3
            }],
            isLeapYear: function (e) {
                return e % 4 == 0 && e % 100 != 0 || e % 400 == 0
            },
            getDaysInMonth: function (e, t) {
                return [31, y.isLeapYear(e) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][t]
            },
            validParts: /dd?|DD?|mm?|MM?|yy(?:yy)?/g,
            nonpunctuation: /[^ -\/:-@\u5e74\u6708\u65e5\[-`{-~\t\n\r]+/g,
            parseFormat: function (e) {
                if ("function" == typeof e.toValue && "function" == typeof e.toDisplay) return e;
                var t = e.replace(this.validParts, "\0").split("\0"),
                    i = e.match(this.validParts);
                if (!t || !t.length || !i || 0 === i.length) throw new Error("Invalid date format.");
                return {
                    separators: t,
                    parts: i
                }
            },
            parseDate: function (o, s, r, a) {
                function l(e, t) {
                    return !0 === t && (t = 10), 100 > e && (e += 2e3) > (new Date).getFullYear() + t && (e -= 100), e
                }

                function d() {
                    var e = this.slice(0, m[h].length),
                        t = m[h].slice(0, e.length);
                    return e.toLowerCase() === t.toLowerCase()
                }
                if (!o) return t;
                if (o instanceof Date) return o;
                if ("string" == typeof s && (s = y.parseFormat(s)), s.toValue) return s.toValue(o, s, r);
                var u, p, h, f, g = /([\-+]\d+)([dmwy])/,
                    m = o.match(/([\-+]\d+)([dmwy])/g),
                    w = {
                        d: "moveDay",
                        m: "moveMonth",
                        w: "moveWeek",
                        y: "moveYear"
                    },
                    b = {
                        yesterday: "-1d",
                        today: "+0d",
                        tomorrow: "+1d"
                    };
                if (/^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/.test(o)) {
                    for (o = new Date, h = 0; h < m.length; h++) u = g.exec(m[h]), p = parseInt(u[1]), f = w[u[2]], o = c.prototype[f](o, p);
                    return i(o.getUTCFullYear(), o.getUTCMonth(), o.getUTCDate())
                }
                if (void 0 !== b[o] && (o = b[o], m = o.match(/([\-+]\d+)([dmwy])/g), /^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/.test(o))) {
                    for (o = new Date, h = 0; h < m.length; h++) u = g.exec(m[h]), p = parseInt(u[1]), f = w[u[2]], o = c.prototype[f](o, p);
                    return i(o.getUTCFullYear(), o.getUTCMonth(), o.getUTCDate())
                }
                m = o && o.match(this.nonpunctuation) || [], o = new Date;
                var k, T, x = {},
                    C = ["yyyy", "yy", "M", "MM", "m", "mm", "d", "dd"],
                    D = {
                        yyyy: function (e, t) {
                            return e.setUTCFullYear(a ? l(t, a) : t)
                        },
                        yy: function (e, t) {
                            return e.setUTCFullYear(a ? l(t, a) : t)
                        },
                        m: function (e, t) {
                            if (isNaN(e)) return e;
                            for (t -= 1; 0 > t;) t += 12;
                            for (t %= 12, e.setUTCMonth(t); e.getUTCMonth() !== t;) e.setUTCDate(e.getUTCDate() - 1);
                            return e
                        },
                        d: function (e, t) {
                            return e.setUTCDate(t)
                        }
                    };
                D.M = D.MM = D.mm = D.m, D.dd = D.d, o = n();
                var S = s.parts.slice();
                if (m.length !== S.length && (S = e(S).filter(function (t, i) {
                        return -1 !== e.inArray(i, C)
                    }).toArray()), m.length === S.length) {
                    var $;
                    for (h = 0, $ = S.length; $ > h; h++) {
                        if (k = parseInt(m[h], 10), u = S[h], isNaN(k)) switch (u) {
                            case "MM":
                                T = e(v[r].months).filter(d), k = e.inArray(T[0], v[r].months) + 1;
                                break;
                            case "M":
                                T = e(v[r].monthsShort).filter(d), k = e.inArray(T[0], v[r].monthsShort) + 1
                        }
                        x[u] = k
                    }
                    var A, M;
                    for (h = 0; h < C.length; h++)(M = C[h]) in x && !isNaN(x[M]) && (A = new Date(o), D[M](A, x[M]), isNaN(A) || (o = A))
                }
                return o
            },
            formatDate: function (t, i, n) {
                if (!t) return "";
                if ("string" == typeof i && (i = y.parseFormat(i)), i.toDisplay) return i.toDisplay(t, i, n);
                var o = {
                    d: t.getUTCDate(),
                    D: v[n].daysShort[t.getUTCDay()],
                    DD: v[n].days[t.getUTCDay()],
                    m: t.getUTCMonth() + 1,
                    M: v[n].monthsShort[t.getUTCMonth()],
                    MM: v[n].months[t.getUTCMonth()],
                    yy: t.getUTCFullYear().toString().substring(2),
                    yyyy: t.getUTCFullYear()
                };
                o.dd = (o.d < 10 ? "0" : "") + o.d, o.mm = (o.m < 10 ? "0" : "") + o.m, t = [];
                for (var s = e.extend([], i.separators), r = 0, a = i.parts.length; a >= r; r++) s.length && t.push(s.shift()), t.push(o[i.parts[r]]);
                return t.join("")
            },
            headTemplate: '<thead><tr><th colspan="7" class="datepicker-title"></th></tr><tr><th class="prev">&laquo;</th><th colspan="5" class="datepicker-switch"></th><th class="next">&raquo;</th></tr></thead>',
            contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>',
            footTemplate: '<tfoot><tr><th colspan="7" class="today"></th></tr><tr><th colspan="7" class="clear"></th></tr></tfoot>'
        };
    y.template = '<div class="datepicker"><div class="datepicker-days"><table class="table-condensed">' + y.headTemplate + "<tbody></tbody>" + y.footTemplate + '</table></div><div class="datepicker-months"><table class="table-condensed">' + y.headTemplate + y.contTemplate + y.footTemplate + '</table></div><div class="datepicker-years"><table class="table-condensed">' + y.headTemplate + y.contTemplate + y.footTemplate + '</table></div><div class="datepicker-decades"><table class="table-condensed">' + y.headTemplate + y.contTemplate + y.footTemplate + '</table></div><div class="datepicker-centuries"><table class="table-condensed">' + y.headTemplate + y.contTemplate + y.footTemplate + "</table></div></div>", e.fn.datepicker.DPGlobal = y, e.fn.datepicker.noConflict = function () {
        return e.fn.datepicker = p, this
    }, e.fn.datepicker.version = "1.6.4", e(document).on("focus.datepicker.data-api click.datepicker.data-api", '[data-provide="datepicker"]', function (t) {
        var i = e(this);
        i.data("datepicker") || (t.preventDefault(), h.call(i, "show"))
    }), e(function () {
        h.call(e('[data-provide="datepicker-inline"]'))
    })
}), $(document).ready(function () {
    if ($(".slider-sectors-content").length && ($(".slider-sectors-content").slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: !1,
            fade: !0,
            arrows: !1,
            asNavFor: ".slider-sectors-nav",
            responsive: [{
                breakpoint: 579,
                settings: {
                    adaptiveHeight: !0
                }
            }]
        }), setTimeout(function () {
            $(".slider-sectors-nav").slick({
                slidesToShow: 9,
                slidesToScroll: 1,
                asNavFor: ".slider-sectors-content",
                dots: !1,
                focusOnSelect: !0,
                vertical: !0,
                arrows: !0,
                adaptiveHeight: !0,
                responsive: [{
                    breakpoint: 579,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        vertical: !1
                    }
                }]
            })
        }, 300)), $(".clients-slider").length && $(".clients-slider").slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            dots: !0,
            arrows: !1,
            infinite: !0,
            responsive: [{
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: !0,
                    dots: !0
                }
            }, {
                breakpoint: 479,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 379,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
        }), $(".add-file").length) {
        var e = function (e) {
            var t = "<span>" + e;
            $(".name-file").html(t)
        };
        $(".add-file").change(function () {
            e(this.files[0].name)
        }), $("body").on("click", ".name-file", function () {
            $(this).html("No file chosen")
        })
    }
    if ($(".select").length && ($("body").on("change", '.radiobutton [type="radio"]', function () {
            $(this).closest(".select").find(".placeholder").text($(this).next().html()), $(this).closest(".select").find(".placeholder").css({
                color: "#000",
                fontWeight: "bold"
            })
        }), $("body").on("change", '.checkbox [type="checkbox"]', function () {
            var e = "";
            $(this).closest(".select").find('[type="checkbox"]:checked').each(function (t, i) {
                e += $(i).next().html() + ", "
            }), $(this).closest(".select").find(".placeholder").text(e), $(this).closest(".select").find(".placeholder").css({
                color: "#000",
                fontWeight: "bold"
            })
        }), $("body").on("click", ".select", function () {
            $(this).hasClass("open") ? $(this).removeClass("open") : ($(".select").removeClass("open"), $(this).addClass("open"))
        }), $("body").on("mouseleave", ".select", function () {
            $(".select").removeClass("open")
        }), $(document).mouseup(function (e) {
            var t = $(".select");
            t.is(e.target) || 0 !== t.has(e.target).length || t.removeClass("open")
        })), $(".months").length && ($(".months").datepicker({
            startView: 1,
            minViewMode: 1
        }), $(".months .next, .months .prev").append('<i class="icon-play-button"></i>')), $("body").on("click", ".icon-share", function () {
            $(".share-menu").removeClass("open"), $(this).hasClass("click") ? ($(this).next().removeClass("open"), $(".icon-share").removeClass("click")) : ($(this).next().addClass("open"), $(this).addClass("click"))
        }), $("body").on("click", ".blog-menu .icon-menu", function () {
            $(".blog-items").addClass("two-colums"), $(this).addClass("active"), $(".blog-menu .icon-menu-interface").removeClass("active")
        }), $("body").on("click", ".blog-menu .icon-menu-interface", function () {
            $(".blog-items").removeClass("two-colums"), $(this).addClass("active"), $(".blog-menu .icon-menu").removeClass("active")
        }), $(window).on("resize", function () {
            $(window).width() < 679 ? $(".blog-items").addClass("two-colums") : $(".blog-items").removeClass("two-colums")
        }), $(window).width() < 679 ? $(".blog-items").addClass("two-colums") : $(".blog-items").removeClass("two-colums"), $("#map").length) {
        var t = function () {
            var e = {
                    zoom: 15,
                    center: new google.maps.LatLng(40.747900, -73.984502),
                    styles: [{
                        featureType: "water",
                        elementType: "geometry",
                        stylers: [{
                            color: "#e9e9e9"
                        }, {
                            lightness: 17
                        }]
                    }, {
                        featureType: "landscape",
                        elementType: "geometry",
                        stylers: [{
                            color: "#f5f5f5"
                        }, {
                            lightness: 20
                        }]
                    }, {
                        featureType: "road.highway",
                        elementType: "geometry.fill",
                        stylers: [{
                            color: "#ffffff"
                        }, {
                            lightness: 17
                        }]
                    }, {
                        featureType: "road.highway",
                        elementType: "geometry.stroke",
                        stylers: [{
                            color: "#ffffff"
                        }, {
                            lightness: 29
                        }, {
                            weight: .2
                        }]
                    }, {
                        featureType: "road.arterial",
                        elementType: "geometry",
                        stylers: [{
                            color: "#ffffff"
                        }, {
                            lightness: 18
                        }]
                    }, {
                        featureType: "road.local",
                        elementType: "geometry",
                        stylers: [{
                            color: "#ffffff"
                        }, {
                            lightness: 16
                        }]
                    }, {
                        featureType: "poi",
                        elementType: "geometry",
                        stylers: [{
                            color: "#f5f5f5"
                        }, {
                            lightness: 21
                        }]
                    }, {
                        featureType: "poi.park",
                        elementType: "geometry",
                        stylers: [{
                            color: "#dedede"
                        }, {
                            lightness: 21
                        }]
                    }, {
                        elementType: "labels.text.stroke",
                        stylers: [{
                            visibility: "on"
                        }, {
                            color: "#ffffff"
                        }, {
                            lightness: 16
                        }]
                    }, {
                        elementType: "labels.text.fill",
                        stylers: [{
                            saturation: 36
                        }, {
                            color: "#333333"
                        }, {
                            lightness: 40
                        }]
                    }, {
                        elementType: "labels.icon",
                        stylers: [{
                            visibility: "off"
                        }]
                    }, {
                        featureType: "transit",
                        elementType: "geometry",
                        stylers: [{
                            color: "#f2f2f2"
                        }, {
                            lightness: 19
                        }]
                    }, {
                        featureType: "administrative",
                        elementType: "geometry.fill",
                        stylers: [{
                            color: "#fefefe"
                        }, {
                            lightness: 20
                        }]
                    }, {
                        featureType: "administrative",
                        elementType: "geometry.stroke",
                        stylers: [{
                            color: "#fefefe"
                        }, {
                            lightness: 17
                        }, {
                            weight: 1.2
                        }]
                    }]
                },
                t = document.getElementById("map"),
                i = new google.maps.Map(t, e);
            new google.maps.Marker({
                position: new google.maps.LatLng(40.747900, -73.984502),
                icon: "http://global-language.alscon-clients.com/wp-content/themes/Global-Language/img/usa.png",
                map: i,
                title: "Title"
            })
        };
        google.maps.event.addDomListener(window, "load", t)
    }
    $(document).on("scroll", function () {
        $(document).scrollTop() > 40 ? $("header").addClass("fixed-header") : $("header").removeClass("fixed-header")
    }), $(".comments > li:nth-child(+n+4)").addClass("hide"), $("#more-comment").click(function (e) {
        e.preventDefault(), $(".comments > li:nth-child(+n+4)").toggleClass("hide")
    }), $("body").on("click", ".burger-menu", function () {
        $(this).toggleClass("close"), $("body").toggleClass("modal-open")
    }), $("body").on("click", "#menu-header-menu > li > i", function () {
        $(this).next().next().hasClass("open") ? $(this).next().next().removeClass("open") : $(this).next().next().addClass("open")
    }), $("body").on("click", ".sub-menu > li > i", function () {
        $(this).next().next().hasClass("open") ? $(this).next().next().removeClass("open") : ($("#menu-header-menu ul").removeClass("open"), $(this).next().next().addClass("open"))
    }), $(window).width() < 767 && $(".menu-item-has-children").prepend('<i class="icon-play-button"></i>')
});
//$(window).load(function(){
    setTimeout(function(){
        $('.form-load').hide();
    },500);
//});