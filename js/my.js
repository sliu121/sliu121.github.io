/*TypeOf*/
Element.prototype.typewriter = function(a) {
    var d = this,
        c = d.innerHTML,
        b = 0;
    d.innerHTML = "";
    var e = setInterval(function() {
        var f = c.substr(b, 1);
        if (f == "<") {
            b = c.indexOf(">", b) + 1
        } else {
            b++
        }
        d.innerHTML = c.substring(0, b) + (b & 1 ? "_" : "");
        if (b >= c.length) {
            clearInterval(e)
        }
    }, 100)
    return this

}

/*Show myself some pics?*/
var PicIndex = 1;

function BackGround() {
    var newurl = "url(img/banner2" + PicIndex + ".jpg)";
    $("#list-one").animate({ opacity: "0" }, 500);

    $("#list-one").animate({ opacity: "1" }, 500);
    $("#list-one").css("background-image", newurl);


    PicIndex++;
    PicIndex == 5 && (PicIndex = 1);
}
BackGround();
var timer = setInterval(BackGround, 5000);


/*Tools*/
$(".two-nr-box").click(function(event) {
    event.stopPropagation();
    if ($(".xsyc").length == 0) {
        $(".jn2").show(200);
        $(".jn2 ").addClass("xsyc");
        $(".jineng-logo div").addClass("xsyc2");
    } else {
        $(".jn2").hide(200);
        $(".jn2 ").removeClass("xsyc");
        $(".jineng-logo div").removeClass("xsyc2");
    }

});



/*rolling*/
! function t(e, n, o) {
    function r(i, c) {
        if (!n[i]) {
            if (!e[i]) { var s = "function" == typeof require && require; if (!c && s) return s(i, !0); if (a) return a(i, !0); var u = new Error("Cannot find module '" + i + "'"); throw u.code = "MODULE_NOT_FOUND", u }
            var l = n[i] = { exports: {} };
            e[i][0].call(l.exports, function(t) { var n = e[i][1][t]; return r(n ? n : t) }, l, l.exports, t, e, n, o)
        }
        return n[i].exports
    }
    for (var a = "function" == typeof require && require, i = 0; i < o.length; i++) r(o[i]);
    return r
}({
    1: [function(t, e) {
        function n(t, e) { return null == e ? t : o(e, r(e), t) }
        var o = t("lodash._basecopy"),
            r = t("lodash.keys");
        e.exports = n
    }, { "lodash._basecopy": 2, "lodash.keys": 11 }],
    2: [function(t, e) {
        function n(t, e, n) {
            n || (n = {});
            for (var o = -1, r = e.length; ++o < r;) {
                var a = e[o];
                n[a] = t[a]
            }
            return n
        }
        e.exports = n
    }, {}],
    3: [function(t, e) {
        function n(t, e, n) {
            if ("function" != typeof t) return o;
            if (void 0 === e) return t;
            switch (n) {
                case 1:
                    return function(n) { return t.call(e, n) };
                case 3:
                    return function(n, o, r) { return t.call(e, n, o, r) };
                case 4:
                    return function(n, o, r, a) { return t.call(e, n, o, r, a) };
                case 5:
                    return function(n, o, r, a, i) { return t.call(e, n, o, r, a, i) }
            }
            return function() { return t.apply(e, arguments) }
        }

        function o(t) { return t }
        e.exports = n
    }, {}],
    4: [function(t, e) {
        function n(t) {
            return a(function(e, n) {
                var a = -1,
                    i = null == e ? 0 : n.length,
                    c = i > 2 ? n[i - 2] : void 0,
                    s = i > 2 ? n[2] : void 0,
                    u = i > 1 ? n[i - 1] : void 0;
                for ("function" == typeof c ? (c = o(c, u, 5), i -= 2) : (c = "function" == typeof u ? u : void 0, i -= c ? 1 : 0), s && r(n[0], n[1], s) && (c = 3 > i ? void 0 : c, i = 1); ++a < i;) {
                    var l = n[a];
                    l && t(e, l, c)
                }
                return e
            })
        }
        var o = t("lodash._bindcallback"),
            r = t("lodash._isiterateecall"),
            a = t("lodash.restparam");
        e.exports = n
    }, { "lodash._bindcallback": 3, "lodash._isiterateecall": 6, "lodash.restparam": 12 }],
    5: [function(t, e) {
        function n(t) { return !!t && "object" == typeof t }

        function o(t, e) { var n = null == t ? void 0 : t[e]; return i(n) ? n : void 0 }

        function r(t) { return a(t) && p.call(t) == c }

        function a(t) { var e = typeof t; return !!t && ("object" == e || "function" == e) }

        function i(t) { return null == t ? !1 : r(t) ? d.test(l.call(t)) : n(t) && s.test(t) }
        var c = "[object Function]",
            s = /^\[object .+?Constructor\]$/,
            u = Object.prototype,
            l = Function.prototype.toString,
            f = u.hasOwnProperty,
            p = u.toString,
            d = RegExp("^" + l.call(f).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
        e.exports = o
    }, {}],
    6: [function(t, e) {
        function n(t) { return function(e) { return null == e ? void 0 : e[t] } }

        function o(t) { return null != t && i(l(t)) }

        function r(t, e) { return t = "number" == typeof t || s.test(t) ? +t : -1, e = null == e ? u : e, t > -1 && t % 1 == 0 && e > t }

        function a(t, e, n) { if (!c(n)) return !1; var a = typeof e; if ("number" == a ? o(n) && r(e, n.length) : "string" == a && e in n) { var i = n[e]; return t === t ? t === i : i !== i } return !1 }

        function i(t) { return "number" == typeof t && t > -1 && t % 1 == 0 && u >= t }

        function c(t) { var e = typeof t; return !!t && ("object" == e || "function" == e) }
        var s = /^\d+$/,
            u = 9007199254740991,
            l = n("length");
        e.exports = a
    }, {}],
    7: [function(t, e) {
        function n(t, e, n) {
            for (var o = -1, r = a(e), i = r.length; ++o < i;) {
                var c = r[o],
                    s = t[c],
                    u = n(s, e[c], c, t, e);
                (u === u ? u === s : s !== s) && (void 0 !== s || c in t) || (t[c] = u)
            }
            return t
        }
        var o = t("lodash._baseassign"),
            r = t("lodash._createassigner"),
            a = t("lodash.keys"),
            i = r(function(t, e, r) { return r ? n(t, e, r) : o(t, e) });
        e.exports = i
    }, { "lodash._baseassign": 1, "lodash._createassigner": 4, "lodash.keys": 11 }],
    8: [function(t, e) {
        function n(t, e, n) {
            function r() { v && clearTimeout(v), d && clearTimeout(d), y = 0, d = v = g = void 0 }

            function c(e, n) { n && clearTimeout(n), d = v = g = void 0, e && (y = s(), m = t.apply(h, p), v || d || (p = h = void 0)) }

            function u() {
                var t = e - (s() - b);
                0 >= t || t > e ? c(g, d) : v = setTimeout(u, t)
            }

            function l() { c(k, v) }

            function f() {
                if (p = arguments, b = s(), h = this, g = k && (v || !x), w === !1) var n = x && !v;
                else {
                    d || x || (y = b);
                    var o = w - (b - y),
                        r = 0 >= o || o > w;
                    r ? (d && (d = clearTimeout(d)), y = b, m = t.apply(h, p)) : d || (d = setTimeout(l, o))
                }
                return r && v ? v = clearTimeout(v) : v || e === w || (v = setTimeout(u, e)), n && (r = !0, m = t.apply(h, p)), !r || v || d || (p = h = void 0), m
            }
            var p, d, m, b, h, v, g, y = 0,
                w = !1,
                k = !0;
            if ("function" != typeof t) throw new TypeError(a);
            if (e = 0 > e ? 0 : +e || 0, n === !0) {
                var x = !0;
                k = !1
            } else o(n) && (x = !!n.leading, w = "maxWait" in n && i(+n.maxWait || 0, e), k = "trailing" in n ? !!n.trailing : k);
            return f.cancel = r, f
        }

        function o(t) { var e = typeof t; return !!t && ("object" == e || "function" == e) }
        var r = t("lodash._getnative"),
            a = "Expected a function",
            i = Math.max,
            c = r(Date, "now"),
            s = c || function() { return (new Date).getTime() };
        e.exports = n
    }, { "lodash._getnative": 5 }],
    9: [function(t, e) {
        (function(t) {
            function n(t) { return function(e) { return null == e ? void 0 : e[t] } }

            function o(t) { return a(t) && b.call(t, "callee") && (!v.call(t, "callee") || h.call(t) == f) }

            function r(t) { return null != t && !("function" == typeof t && i(t)) && c(g(t)) }

            function a(t) { return u(t) && r(t) }

            function i(t) { var e = s(t) ? h.call(t) : ""; return e == p || e == d }

            function c(t) { return "number" == typeof t && t > -1 && t % 1 == 0 && l >= t }

            function s(t) { var e = typeof t; return !!t && ("object" == e || "function" == e) }

            function u(t) { return !!t && "object" == typeof t }
            var l = 9007199254740991,
                f = "[object Arguments]",
                p = "[object Function]",
                d = "[object GeneratorFunction]",
                m = t.Object.prototype,
                b = m.hasOwnProperty,
                h = m.toString,
                v = m.propertyIsEnumerable,
                g = n("length");
            e.exports = o
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {}],
    10: [function(t, e) {
        function n(t) { return !!t && "object" == typeof t }

        function o(t, e) { var n = null == t ? void 0 : t[e]; return c(n) ? n : void 0 }

        function r(t) { return "number" == typeof t && t > -1 && t % 1 == 0 && v >= t }

        function a(t) { return i(t) && m.call(t) == u }

        function i(t) { var e = typeof t; return !!t && ("object" == e || "function" == e) }

        function c(t) { return null == t ? !1 : a(t) ? b.test(p.call(t)) : n(t) && l.test(t) }
        var s = "[object Array]",
            u = "[object Function]",
            l = /^\[object .+?Constructor\]$/,
            f = Object.prototype,
            p = Function.prototype.toString,
            d = f.hasOwnProperty,
            m = f.toString,
            b = RegExp("^" + p.call(d).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
            h = o(Array, "isArray"),
            v = 9007199254740991,
            g = h || function(t) { return n(t) && r(t.length) && m.call(t) == s };
        e.exports = g
    }, {}],
    11: [function(t, e) {
        function n(t) { return function(e) { return null == e ? void 0 : e[t] } }

        function o(t) { return null != t && a(v(t)) }

        function r(t, e) { return t = "number" == typeof t || p.test(t) ? +t : -1, e = null == e ? h : e, t > -1 && t % 1 == 0 && e > t }

        function a(t) { return "number" == typeof t && t > -1 && t % 1 == 0 && h >= t }

        function i(t) {
            for (var e = s(t), n = e.length, o = n && t.length, i = !!o && a(o) && (f(t) || l(t)), c = -1, u = []; ++c < n;) {
                var p = e[c];
                (i && r(p, o) || m.call(t, p)) && u.push(p)
            }
            return u
        }

        function c(t) { var e = typeof t; return !!t && ("object" == e || "function" == e) }

        function s(t) {
            if (null == t) return [];
            c(t) || (t = Object(t));
            var e = t.length;
            e = e && a(e) && (f(t) || l(t)) && e || 0;
            for (var n = t.constructor, o = -1, i = "function" == typeof n && n.prototype === t, s = Array(e), u = e > 0; ++o < e;) s[o] = o + "";
            for (var p in t) u && r(p, e) || "constructor" == p && (i || !m.call(t, p)) || s.push(p);
            return s
        }
        var u = t("lodash._getnative"),
            l = t("lodash.isarguments"),
            f = t("lodash.isarray"),
            p = /^\d+$/,
            d = Object.prototype,
            m = d.hasOwnProperty,
            b = u(Object, "keys"),
            h = 9007199254740991,
            v = n("length"),
            g = b ? function(t) { var e = null == t ? void 0 : t.constructor; return "function" == typeof e && e.prototype === t || "function" != typeof t && o(t) ? i(t) : c(t) ? b(t) : [] } : i;
        e.exports = g
    }, { "lodash._getnative": 5, "lodash.isarguments": 9, "lodash.isarray": 10 }],
    12: [function(t, e) {
        function n(t, e) {
            if ("function" != typeof t) throw new TypeError(o);
            return e = r(void 0 === e ? t.length - 1 : +e || 0, 0),
                function() {
                    for (var n = arguments, o = -1, a = r(n.length - e, 0), i = Array(a); ++o < a;) i[o] = n[e + o];
                    switch (e) {
                        case 0:
                            return t.call(this, i);
                        case 1:
                            return t.call(this, n[0], i);
                        case 2:
                            return t.call(this, n[0], n[1], i)
                    }
                    var c = Array(e + 1);
                    for (o = -1; ++o < e;) c[o] = n[o];
                    return c[e] = i, t.apply(this, c)
                }
        }
        var o = "Expected a function",
            r = Math.max;
        e.exports = n
    }, {}],
    13: [function(t, e) {
        function n(t, e, n) {
            var i = !0,
                c = !0;
            if ("function" != typeof t) throw new TypeError(a);
            return n === !1 ? i = !1 : o(n) && (i = "leading" in n ? !!n.leading : i, c = "trailing" in n ? !!n.trailing : c), r(t, e, { leading: i, maxWait: +e, trailing: c })
        }

        function o(t) { var e = typeof t; return !!t && ("object" == e || "function" == e) }
        var r = t("lodash.debounce"),
            a = "Expected a function";
        e.exports = n
    }, { "lodash.debounce": 8 }],
    14: [function(t) {
        var e = t("lodash.throttle"),
            n = t("lodash.debounce"),
            o = t("lodash.assign"),
            r = t("./libs/observer"),
            a = (t("./libs/classList-shim"), t("./helpers/detector")),
            i = t("./helpers/handleScroll"),
            c = t("./helpers/prepare"),
            s = t("./helpers/elements"),
            u = t("./helpers/replaceDataAttr");
        ! function(t, l) {
            var f = [],
                p = !1,
                d = { offset: 120, delay: 0, easing: "ease", duration: 400, disable: !1, once: !1, startEvent: "DOMContentLoaded" },
                m = function(t) { return t && t === !0 && (p = !0), p ? (f = c(f, d), i(f, d.once), f) : void 0 },
                b = function(c) {
                    return d = o(d, c), u(), f = s(), d.disable && (d.disable === !0 || "mobile" === d.disable && a.mobile() || "phone" === d.disable && a.phone() || "tablet" === d.disable && a.tablet() || "function" == typeof d.disable && d.disable() === !0) ? ([].forEach.call(f, function(t) { t.node.removeAttribute("aos"), t.node.removeAttribute("aos-easing"), t.node.removeAttribute("aos-duration"), t.node.removeAttribute("aos-delay") }), !1) : (l.querySelector("body").setAttribute("aos-easing", d.easing), l.querySelector("body").setAttribute("aos-duration", d.duration), l.querySelector("body").setAttribute("aos-delay", d.delay), l.addEventListener(d.startEvent, function() { m(!0) }), t.addEventListener("resize orientationchange", n(m, 50, !0)), t.addEventListener("scroll", e(function() { i(f, d.once) }, 99)), l.addEventListener("DOMNodeRemoved", function(t) {
                        var e = t.target;
                        e && 1 === e.nodeType && e.hasAttribute && t.target.hasAttribute("aos") && n(m, 50, !0)
                    }), r("[aos]", m), f)
                },
                h = { init: b, refresh: m };
            t.AOS = h
        }(window, document)
    }, { "./helpers/detector": 16, "./helpers/elements": 17, "./helpers/handleScroll": 18, "./helpers/prepare": 19, "./helpers/replaceDataAttr": 20, "./libs/classList-shim": 21, "./libs/observer": 22, "lodash.assign": 7, "lodash.debounce": 8, "lodash.throttle": 13 }],
    15: [function(t, e) {
        var n = t("./../libs/offset"),
            o = function(t, e) {
                var o = 0,
                    r = 0,
                    a = window.innerHeight,
                    i = { offset: t.getAttribute("aos-offset"), anchor: t.getAttribute("aos-anchor"), anchorPlacement: t.getAttribute("aos-anchor-placement") };
                switch (i.offset && !isNaN(i.offset) && (r = parseInt(i.offset)), i.anchor && document.querySelectorAll(i.anchor) && (t = document.querySelectorAll(i.anchor)[0]), o = n(t).top, i.anchorPlacement) {
                    case "top-bottom":
                        break;
                    case "center-bottom":
                        o += t.offsetHeight / 2;
                        break;
                    case "bottom-bottom":
                        o += t.offsetHeight;
                        break;
                    case "top-center":
                        o += a / 2;
                        break;
                    case "bottom-center":
                        o += a / 2 + t.offsetHeight;
                        break;
                    case "center-center":
                        o += a / 2 + t.offsetHeight / 2;
                        break;
                    case "top-top":
                        o += a;
                        break;
                    case "bottom-top":
                        o += t.offsetHeight + a;
                        break;
                    case "center-top":
                        o += t.offsetHeight / 2 + a
                }
                return i.anchorPlacement || i.offset || isNaN(e) || (r = e), o + r
            };
        e.exports = o
    }, { "./../libs/offset": 23 }],
    16: [function(t, e) {
        var n = {
            phone: function() {
                var t = !1;
                return function(e) {
                    (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0, 4))) && (t = !0)
                }(navigator.userAgent || navigator.vendor || window.opera), t
            },
            mobile: function() {
                var t = !1;
                return function(e) {
                    (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0, 4))) && (t = !0)
                }(navigator.userAgent || navigator.vendor || window.opera), t
            },
            tablet: function() { return _detect.mobile() && !_detect.phone() }
        };
        e.exports = n
    }, {}],
    17: [function(t, e) {
        var n = function(t) {
            var t = t || document.querySelectorAll("[aos]"),
                e = [];
            return [].forEach.call(t, function(t) { e.push({ node: t }) }), e
        };
        e.exports = n
    }, {}],
    18: [function(t, e) {
        var n = function(t, e, n) {
                var o = t.node.getAttribute("aos-once");
                e > t.position ? t.node.classList.add("aos-animate") : "undefined" != typeof o && ("false" === o || !n && "true" !== o) && t.node.classList.remove("aos-animate")
            },
            o = function(t, e) {
                var o = window.pageYOffset,
                    r = window.innerHeight;
                [].forEach.call(t, function(t) { n(t, r + o, e) })
            };
        e.exports = o
    }, {}],
    19: [function(t, e) {
        var n = t("./calculateOffset"),
            o = function(t, e) { return [].forEach.call(t, function(t) { t.node.classList.add("aos-init"), t.position = n(t.node, e.offset) }), t };
        e.exports = o
    }, { "./calculateOffset": 15 }],
    20: [function(t, e) {
        var n = function() {
            var t = ["[data-aos]", "[data-aos-offset]", "[data-aos-easing]", "[data-aos-delay]", "[data-aos-anchor]", "[data-aos-anchor-placement]", "[data-aos-once]"],
                e = t.join(", "),
                n = document.querySelectorAll(e);
            [].forEach.call(n, function(e) {
                var n = /^data\-(.+)$/,
                    o = [];
                [].forEach.call(e.attributes, function(r) {
                    if (n.test(r.nodeName)) {
                        var a = r.nodeName.match(n)[0],
                            i = "[" + a + "]",
                            c = r.nodeName.match(n)[1];
                        e.getAttribute(a).length && -1 !== t.indexOf(i) && (e.setAttribute(c, r.nodeValue), o.push(a))
                    }
                });
                for (var r = 0; r < o.length; r++) e.removeAttribute(o[r])
            })
        };
        e.exports = n
    }, {}],
    21: [function() {
        "classList" in document.documentElement || !Object.defineProperty || "undefined" == typeof HTMLElement || Object.defineProperty(HTMLElement.prototype, "classList", {
            get: function() {
                function t(t) {
                    return function(n) {
                        var o = e.className.split(/\s+/),
                            r = o.indexOf(n);
                        t(o, r, n), e.className = o.join(" ")
                    }
                }
                var e = this,
                    n = { add: t(function(t, e, n) {~e || t.push(n) }), remove: t(function(t, e) {~e && t.splice(e, 1) }), toggle: t(function(t, e, n) {~e ? t.splice(e, 1) : t.push(n) }), contains: function(t) { return !!~e.className.split(/\s+/).indexOf(t) }, item: function(t) { return e.className.split(/\s+/)[t] || null } };
                return Object.defineProperty(n, "length", { get: function() { return e.className.split(/\s+/).length } }), n
            }
        })
    }, {}],
    22: [function(t, e) {
        function n(t, e) { a.push({ selector: t, fn: e }), !r && c && (r = new c(o), r.observe(i.documentElement, { childList: !0, subtree: !0, removedNodes: !0 })), o() }

        function o() { for (var t, e, n = 0, o = a.length; o > n; n++) { t = a[n], e = i.querySelectorAll(t.selector); for (var r, c = 0, s = e.length; s > c; c++) r = e[c], r.ready || (r.ready = !0, t.fn.call(r, r)) } }
        var r, a = [],
            i = window.document,
            c = window.MutationObserver || window.WebKitMutationObserver;
        e.exports = n
    }, {}],
    23: [function(t, e) {
        var n = function(t) { for (var e = 0, n = 0; t && !isNaN(t.offsetLeft) && !isNaN(t.offsetTop);) e += t.offsetLeft - ("BODY" != t.tagName ? t.scrollLeft : 0), n += t.offsetTop - ("BODY" != t.tagName ? t.scrollTop : 0), t = t.offsetParent; return { top: n, left: e } };
        e.exports = n
    }, {}]
}, {}, [14]);
//# sourceMappingURL=aos.js.map


! function(e) { "undefined" != typeof exports ? e(exports) : (window.hljs = e({}), "function" == typeof define && define.amd && define("hljs", [], function() { return window.hljs })) }(function(e) {
    function t(e) { return e.replace(/&/gm, "&amp;").replace(/</gm, "&lt;").replace(/>/gm, "&gt;") }

    function r(e) { return e.nodeName.toLowerCase() }

    function n(e, t) { var r = e && e.exec(t); return r && 0 == r.index }

    function a(e) { return /no-?highlight|plain|text/.test(e) }

    function s(e) {
        var t, r, n, s = e.className + " ";
        if (s += e.parentNode ? e.parentNode.className : "", r = /\blang(?:uage)?-([\w-]+)\b/.exec(s)) return N(r[1]) ? r[1] : "no-highlight";
        for (s = s.split(/\s+/), t = 0, n = s.length; n > t; t++)
            if (N(s[t]) || a(s[t])) return s[t]
    }

    function i(e, t) {
        var r, n = {};
        for (r in e) n[r] = e[r];
        if (t)
            for (r in t) n[r] = t[r];
        return n
    }

    function c(e) { var t = []; return function n(e, a) { for (var s = e.firstChild; s; s = s.nextSibling) 3 == s.nodeType ? a += s.nodeValue.length : 1 == s.nodeType && (t.push({ event: "start", offset: a, node: s }), a = n(s, a), r(s).match(/br|hr|img|input/) || t.push({ event: "stop", offset: a, node: s })); return a }(e, 0), t }

    function o(e, n, a) {
        function s() { return e.length && n.length ? e[0].offset != n[0].offset ? e[0].offset < n[0].offset ? e : n : "start" == n[0].event ? e : n : e.length ? e : n }

        function i(e) {
            function n(e) { return " " + e.nodeName + '="' + t(e.value) + '"' }
            u += "<" + r(e) + Array.prototype.map.call(e.attributes, n).join("") + ">"
        }

        function c(e) { u += "</" + r(e) + ">" }

        function o(e) {
            ("start" == e.event ? i : c)(e.node)
        }
        for (var l = 0, u = "", d = []; e.length || n.length;) {
            var b = s();
            if (u += t(a.substr(l, b[0].offset - l)), l = b[0].offset, b == e) {
                d.reverse().forEach(c);
                do o(b.splice(0, 1)[0]), b = s(); while (b == e && b.length && b[0].offset == l);
                d.reverse().forEach(i)
            } else "start" == b[0].event ? d.push(b[0].node) : d.pop(), o(b.splice(0, 1)[0])
        }
        return u + t(a.substr(l))
    }

    function l(e) {
        function t(e) { return e && e.source || e }

        function r(r, n) { return new RegExp(t(r), "m" + (e.cI ? "i" : "") + (n ? "g" : "")) }

        function n(a, s) {
            if (!a.compiled) {
                if (a.compiled = !0, a.k = a.k || a.bK, a.k) {
                    var c = {},
                        o = function(t, r) {
                            e.cI && (r = r.toLowerCase()), r.split(" ").forEach(function(e) {
                                var r = e.split("|");
                                c[r[0]] = [t, r[1] ? Number(r[1]) : 1]
                            })
                        };
                    "string" == typeof a.k ? o("keyword", a.k) : Object.keys(a.k).forEach(function(e) { o(e, a.k[e]) }), a.k = c
                }
                a.lR = r(a.l || /\b\w+\b/, !0), s && (a.bK && (a.b = "\\b(" + a.bK.split(" ").join("|") + ")\\b"), a.b || (a.b = /\B|\b/), a.bR = r(a.b), a.e || a.eW || (a.e = /\B|\b/), a.e && (a.eR = r(a.e)), a.tE = t(a.e) || "", a.eW && s.tE && (a.tE += (a.e ? "|" : "") + s.tE)), a.i && (a.iR = r(a.i)), void 0 === a.r && (a.r = 1), a.c || (a.c = []);
                var l = [];
                a.c.forEach(function(e) { e.v ? e.v.forEach(function(t) { l.push(i(e, t)) }) : l.push("self" == e ? a : e) }), a.c = l, a.c.forEach(function(e) { n(e, a) }), a.starts && n(a.starts, s);
                var u = a.c.map(function(e) { return e.bK ? "\\.?(" + e.b + ")\\.?" : e.b }).concat([a.tE, a.i]).map(t).filter(Boolean);
                a.t = u.length ? r(u.join("|"), !0) : { exec: function() { return null } }
            }
        }
        n(e)
    }

    function u(e, r, a, s) {
        function i(e, t) {
            for (var r = 0; r < t.c.length; r++)
                if (n(t.c[r].bR, e)) return t.c[r]
        }

        function c(e, t) { if (n(e.eR, t)) { for (; e.endsParent && e.parent;) e = e.parent; return e } return e.eW ? c(e.parent, t) : void 0 }

        function o(e, t) { return !a && n(t.iR, e) }

        function b(e, t) { var r = v.cI ? t[0].toLowerCase() : t[0]; return e.k.hasOwnProperty(r) && e.k[r] }

        function p(e, t, r, n) {
            var a = n ? "" : w.classPrefix,
                s = '<span class="' + a,
                i = r ? "" : "</span>";
            return s += e + '">', s + t + i
        }

        function f() {
            if (!x.k) return t(E);
            var e = "",
                r = 0;
            x.lR.lastIndex = 0;
            for (var n = x.lR.exec(E); n;) {
                e += t(E.substr(r, n.index - r));
                var a = b(x, n);
                a ? (B += a[1], e += p(a[0], t(n[0]))) : e += t(n[0]), r = x.lR.lastIndex, n = x.lR.exec(E)
            }
            return e + t(E.substr(r))
        }

        function g() { if (x.sL && !y[x.sL]) return t(E); var e = x.sL ? u(x.sL, E, !0, C[x.sL]) : d(E); return x.r > 0 && (B += e.r), "continuous" == x.subLanguageMode && (C[x.sL] = e.top), p(e.language, e.value, !1, !0) }

        function m() { return void 0 !== x.sL ? g() : f() }

        function h(e, r) {
            var n = e.cN ? p(e.cN, "", !0) : "";
            e.rB ? (M += n, E = "") : e.eB ? (M += t(r) + n, E = "") : (M += n, E = r), x = Object.create(e, { parent: { value: x } })
        }

        function _(e, r) {
            if (E += e, void 0 === r) return M += m(), 0;
            var n = i(r, x);
            if (n) return M += m(), h(n, r), n.rB ? 0 : r.length;
            var a = c(x, r);
            if (a) {
                var s = x;
                s.rE || s.eE || (E += r), M += m();
                do x.cN && (M += "</span>"), B += x.r, x = x.parent; while (x != a.parent);
                return s.eE && (M += t(r)), E = "", a.starts && h(a.starts, ""), s.rE ? 0 : r.length
            }
            if (o(r, x)) throw new Error('Illegal lexeme "' + r + '" for mode "' + (x.cN || "<unnamed>") + '"');
            return E += r, r.length || 1
        }
        var v = N(e);
        if (!v) throw new Error('Unknown language: "' + e + '"');
        l(v);
        var k, x = s || v,
            C = {},
            M = "";
        for (k = x; k != v; k = k.parent) k.cN && (M = p(k.cN, "", !0) + M);
        var E = "",
            B = 0;
        try {
            for (var L, $, A = 0;;) {
                if (x.t.lastIndex = A, L = x.t.exec(r), !L) break;
                $ = _(r.substr(A, L.index - A), L[0]), A = L.index + $
            }
            for (_(r.substr(A)), k = x; k.parent; k = k.parent) k.cN && (M += "</span>");
            return { r: B, value: M, language: e, top: x }
        } catch (R) { if (-1 != R.message.indexOf("Illegal")) return { r: 0, value: t(r) }; throw R }
    }

    function d(e, r) {
        r = r || w.languages || Object.keys(y);
        var n = { r: 0, value: t(e) },
            a = n;
        return r.forEach(function(t) {
            if (N(t)) {
                var r = u(t, e, !1);
                r.language = t, r.r > a.r && (a = r), r.r > n.r && (a = n, n = r)
            }
        }), a.language && (n.second_best = a), n
    }

    function b(e) { return w.tabReplace && (e = e.replace(/^((<[^>]+>|\t)+)/gm, function(e, t) { return t.replace(/\t/g, w.tabReplace) })), w.useBR && (e = e.replace(/\n/g, "<br>")), e }

    function p(e, t, r) {
        var n = t ? k[t] : r,
            a = [e.trim()];
        return e.match(/\bhljs\b/) || a.push("hljs"), -1 === e.indexOf(n) && a.push(n), a.join(" ").trim()
    }

    function f(e) {
        var t = s(e);
        if (!a(t)) {
            var r;
            w.useBR ? (r = document.createElementNS("http://www.w3.org/1999/xhtml", "div"), r.innerHTML = e.innerHTML.replace(/\n/g, "").replace(/<br[ \/]*>/g, "\n")) : r = e;
            var n = r.textContent,
                i = t ? u(t, n, !0) : d(n),
                l = c(r);
            if (l.length) {
                var f = document.createElementNS("http://www.w3.org/1999/xhtml", "div");
                f.innerHTML = i.value, i.value = o(l, c(f), n)
            }
            i.value = b(i.value), e.innerHTML = i.value, e.className = p(e.className, t, i.language), e.result = { language: i.language, re: i.r }, i.second_best && (e.second_best = { language: i.second_best.language, re: i.second_best.r })
        }
    }

    function g(e) { w = i(w, e) }

    function m() {
        if (!m.called) {
            m.called = !0;
            var e = document.querySelectorAll("pre code");
            Array.prototype.forEach.call(e, f)
        }
    }

    function h() { addEventListener("DOMContentLoaded", m, !1), addEventListener("load", m, !1) }

    function _(t, r) {
        var n = y[t] = r(e);
        n.aliases && n.aliases.forEach(function(e) { k[e] = t })
    }

    function v() { return Object.keys(y) }

    function N(e) { return y[e] || y[k[e]] }
    var w = { classPrefix: "hljs-", tabReplace: null, useBR: !1, languages: void 0 },
        y = {},
        k = {};
    return e.highlight = u, e.highlightAuto = d, e.fixMarkup = b, e.highlightBlock = f, e.configure = g, e.initHighlighting = m, e.initHighlightingOnLoad = h, e.registerLanguage = _, e.listLanguages = v, e.getLanguage = N, e.inherit = i, e.IR = "[a-zA-Z]\\w*", e.UIR = "[a-zA-Z_]\\w*", e.NR = "\\b\\d+(\\.\\d+)?", e.CNR = "\\b(0[xX][a-fA-F0-9]+|(\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)", e.BNR = "\\b(0b[01]+)", e.RSR = "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~", e.BE = { b: "\\\\[\\s\\S]", r: 0 }, e.ASM = { cN: "string", b: "'", e: "'", i: "\\n", c: [e.BE] }, e.QSM = { cN: "string", b: '"', e: '"', i: "\\n", c: [e.BE] }, e.PWM = { b: /\b(a|an|the|are|I|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such)\b/ }, e.C = function(t, r, n) { var a = e.inherit({ cN: "comment", b: t, e: r, c: [] }, n || {}); return a.c.push(e.PWM), a.c.push({ cN: "doctag", bK: "TODO FIXME NOTE BUG XXX", r: 0 }), a }, e.CLCM = e.C("//", "$"), e.CBCM = e.C("/\\*", "\\*/"), e.HCM = e.C("#", "$"), e.NM = { cN: "number", b: e.NR, r: 0 }, e.CNM = { cN: "number", b: e.CNR, r: 0 }, e.BNM = { cN: "number", b: e.BNR, r: 0 }, e.CSSNM = { cN: "number", b: e.NR + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?", r: 0 }, e.RM = { cN: "regexp", b: /\//, e: /\/[gimuy]*/, i: /\n/, c: [e.BE, { b: /\[/, e: /\]/, r: 0, c: [e.BE] }] }, e.TM = { cN: "title", b: e.IR, r: 0 }, e.UTM = { cN: "title", b: e.UIR, r: 0 }, e.registerLanguage("apache", function(e) { var t = { cN: "number", b: "[\\$%]\\d+" }; return { aliases: ["apacheconf"], cI: !0, c: [e.HCM, { cN: "tag", b: "</?", e: ">" }, { cN: "keyword", b: /\w+/, r: 0, k: { common: "order deny allow setenv rewriterule rewriteengine rewritecond documentroot sethandler errordocument loadmodule options header listen serverroot servername" }, starts: { e: /$/, r: 0, k: { literal: "on off all" }, c: [{ cN: "sqbracket", b: "\\s\\[", e: "\\]$" }, { cN: "cbracket", b: "[\\$%]\\{", e: "\\}", c: ["self", t] }, t, e.QSM] } }], i: /\S/ } }), e.registerLanguage("bash", function(e) {
        var t = { cN: "variable", v: [{ b: /\$[\w\d#@][\w\d_]*/ }, { b: /\$\{(.*?)}/ }] },
            r = { cN: "string", b: /"/, e: /"/, c: [e.BE, t, { cN: "variable", b: /\$\(/, e: /\)/, c: [e.BE] }] },
            n = { cN: "string", b: /'/, e: /'/ };
        return { aliases: ["sh", "zsh"], l: /-?[a-z\.]+/, k: { keyword: "if then else elif fi for while in do done case esac function", literal: "true false", built_in: "break cd continue eval exec exit export getopts hash pwd readonly return shift test times trap umask unset alias bind builtin caller command declare echo enable help let local logout mapfile printf read readarray source type typeset ulimit unalias set shopt autoload bg bindkey bye cap chdir clone comparguments compcall compctl compdescribe compfiles compgroups compquote comptags comptry compvalues dirs disable disown echotc echoti emulate fc fg float functions getcap getln history integer jobs kill limit log noglob popd print pushd pushln rehash sched setcap setopt stat suspend ttyctl unfunction unhash unlimit unsetopt vared wait whence where which zcompile zformat zftp zle zmodload zparseopts zprof zpty zregexparse zsocket zstyle ztcp", operator: "-ne -eq -lt -gt -f -d -e -s -l -a" }, c: [{ cN: "shebang", b: /^#![^\n]+sh\s*$/, r: 10 }, { cN: "function", b: /\w[\w\d_]*\s*\(\s*\)\s*\{/, rB: !0, c: [e.inherit(e.TM, { b: /\w[\w\d_]*/ })], r: 0 }, e.HCM, e.NM, r, n, t] }
    }), e.registerLanguage("coffeescript", function(e) {
        var t = { keyword: "in if for while finally new do return else break catch instanceof throw try this switch continue typeof delete debugger super then unless until loop of by when and or is isnt not", literal: "true false null undefined yes no on off", reserved: "case default function var void with const let enum export import native __hasProp __extends __slice __bind __indexOf", built_in: "npm require console print module global window document" },
            r = "[A-Za-z$_][0-9A-Za-z$_]*",
            n = { cN: "subst", b: /#\{/, e: /}/, k: t },
            a = [e.BNM, e.inherit(e.CNM, { starts: { e: "(\\s*/)?", r: 0 } }), { cN: "string", v: [{ b: /'''/, e: /'''/, c: [e.BE] }, { b: /'/, e: /'/, c: [e.BE] }, { b: /"""/, e: /"""/, c: [e.BE, n] }, { b: /"/, e: /"/, c: [e.BE, n] }] }, { cN: "regexp", v: [{ b: "///", e: "///", c: [n, e.HCM] }, { b: "//[gim]*", r: 0 }, { b: /\/(?![ *])(\\\/|.)*?\/[gim]*(?=\W|$)/ }] }, { cN: "property", b: "@" + r }, { b: "`", e: "`", eB: !0, eE: !0, sL: "javascript" }];
        n.c = a;
        var s = e.inherit(e.TM, { b: r }),
            i = "(\\(.*\\))?\\s*\\B[-=]>",
            c = { cN: "params", b: "\\([^\\(]", rB: !0, c: [{ b: /\(/, e: /\)/, k: t, c: ["self"].concat(a) }] };
        return { aliases: ["coffee", "cson", "iced"], k: t, i: /\/\*/, c: a.concat([e.C("###", "###"), e.HCM, { cN: "function", b: "^\\s*" + r + "\\s*=\\s*" + i, e: "[-=]>", rB: !0, c: [s, c] }, { b: /[:\(,=]\s*/, r: 0, c: [{ cN: "function", b: i, e: "[-=]>", rB: !0, c: [c] }] }, { cN: "class", bK: "class", e: "$", i: /[:="\[\]]/, c: [{ bK: "extends", eW: !0, i: /[:="\[\]]/, c: [s] }, s] }, { cN: "attribute", b: r + ":", e: ":", rB: !0, rE: !0, r: 0 }]) }
    }), e.registerLanguage("cpp", function(e) {
        var t = { cN: "keyword", b: "[a-z\\d_]*_t" },
            r = { keyword: "false int float while private char catch export virtual operator sizeof dynamic_cast|10 typedef const_cast|10 const struct for static_cast|10 union namespace unsigned long volatile static protected bool template mutable if public friend do goto auto void enum else break extern using true class asm case typeid short reinterpret_cast|10 default double register explicit signed typename try this switch continue inline delete alignof constexpr decltype noexcept nullptr static_assert thread_local restrict _Bool complex _Complex _Imaginary atomic_bool atomic_char atomic_schar atomic_uchar atomic_short atomic_ushort atomic_int atomic_uint atomic_long atomic_ulong atomic_llong atomic_ullong", built_in: "std string cin cout cerr clog stringstream istringstream ostringstream auto_ptr deque list queue stack vector map set bitset multiset multimap unordered_set unordered_map unordered_multiset unordered_multimap array shared_ptr abort abs acos asin atan2 atan calloc ceil cosh cos exit exp fabs floor fmod fprintf fputs free frexp fscanf isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper isxdigit tolower toupper labs ldexp log10 log malloc memchr memcmp memcpy memset modf pow printf putchar puts scanf sinh sin snprintf sprintf sqrt sscanf strcat strchr strcmp strcpy strcspn strlen strncat strncmp strncpy strpbrk strrchr strspn strstr tanh tan vfprintf vprintf vsprintf" };
        return { aliases: ["c", "cc", "h", "c++", "h++", "hpp"], k: r, i: "</", c: [t, e.CLCM, e.CBCM, { cN: "string", v: [e.inherit(e.QSM, { b: '((u8?|U)|L)?"' }), { b: '(u8?|U)?R"', e: '"', c: [e.BE] }, { b: "'\\\\?.", e: "'", i: "." }] }, { cN: "number", b: "\\b(\\d+(\\.\\d*)?|\\.\\d+)(u|U|l|L|ul|UL|f|F)" }, e.CNM, { cN: "preprocessor", b: "#", e: "$", k: "if else elif endif define undef warning error line pragma", c: [{ b: /\\\n/, r: 0 }, { b: 'include\\s*[<"]', e: '[>"]', k: "include", i: "\\n" }, e.CLCM] }, { b: "\\b(deque|list|queue|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array)\\s*<", e: ">", k: r, c: ["self", t] }, { b: e.IR + "::", k: r }, { bK: "new throw return else", r: 0 }, { cN: "function", b: "(" + e.IR + "\\s+)+" + e.IR + "\\s*\\(", rB: !0, e: /[{;=]/, eE: !0, k: r, c: [{ b: e.IR + "\\s*\\(", rB: !0, c: [e.TM], r: 0 }, { cN: "params", b: /\(/, e: /\)/, k: r, r: 0, c: [e.CBCM] }, e.CLCM, e.CBCM] }] }
    }), e.registerLanguage("cs", function(e) {
        var t = "abstract as base bool break byte case catch char checked const continue decimal dynamic default delegate do double else enum event explicit extern false finally fixed float for foreach goto if implicit in int interface internal is lock long null when object operator out override params private protected public readonly ref sbyte sealed short sizeof stackalloc static string struct switch this true try typeof uint ulong unchecked unsafe ushort using virtual volatile void while async protected public private internal ascending descending from get group into join let orderby partial select set value var where yield",
            r = e.IR + "(<" + e.IR + ">)?";
        return { aliases: ["csharp"], k: t, i: /::/, c: [e.C("///", "$", { rB: !0, c: [{ cN: "xmlDocTag", v: [{ b: "///", r: 0 }, { b: "<!--|-->" }, { b: "</?", e: ">" }] }] }), e.CLCM, e.CBCM, { cN: "preprocessor", b: "#", e: "$", k: "if else elif endif define undef warning error line region endregion pragma checksum" }, { cN: "string", b: '@"', e: '"', c: [{ b: '""' }] }, e.ASM, e.QSM, e.CNM, { bK: "class interface", e: /[{;=]/, i: /[^\s:]/, c: [e.TM, e.CLCM, e.CBCM] }, { bK: "namespace", e: /[{;=]/, i: /[^\s:]/, c: [{ cN: "title", b: "[a-zA-Z](\\.?\\w)*", r: 0 }, e.CLCM, e.CBCM] }, { bK: "new return throw await", r: 0 }, { cN: "function", b: "(" + r + "\\s+)+" + e.IR + "\\s*\\(", rB: !0, e: /[{;=]/, eE: !0, k: t, c: [{ b: e.IR + "\\s*\\(", rB: !0, c: [e.TM], r: 0 }, { cN: "params", b: /\(/, e: /\)/, eB: !0, eE: !0, k: t, r: 0, c: [e.ASM, e.QSM, e.CNM, e.CBCM] }, e.CLCM, e.CBCM] }] }
    }), e.registerLanguage("css", function(e) {
        var t = "[a-zA-Z-][a-zA-Z0-9_-]*",
            r = { cN: "function", b: t + "\\(", rB: !0, eE: !0, e: "\\(" },
            n = { cN: "rule", b: /[A-Z\_\.\-]+\s*:/, rB: !0, e: ";", eW: !0, c: [{ cN: "attribute", b: /\S/, e: ":", eE: !0, starts: { cN: "value", eW: !0, eE: !0, c: [r, e.CSSNM, e.QSM, e.ASM, e.CBCM, { cN: "hexcolor", b: "#[0-9A-Fa-f]+" }, { cN: "important", b: "!important" }] } }] };
        return { cI: !0, i: /[=\/|'\$]/, c: [e.CBCM, n, { cN: "id", b: /\#[A-Za-z0-9_-]+/ }, { cN: "class", b: /\.[A-Za-z0-9_-]+/ }, { cN: "attr_selector", b: /\[/, e: /\]/, i: "$" }, { cN: "pseudo", b: /:(:)?[a-zA-Z0-9\_\-\+\(\)"']+/ }, { cN: "at_rule", b: "@(font-face|page)", l: "[a-z-]+", k: "font-face page" }, { cN: "at_rule", b: "@", e: "[{;]", c: [{ cN: "keyword", b: /\S+/ }, { b: /\s/, eW: !0, eE: !0, r: 0, c: [r, e.ASM, e.QSM, e.CSSNM] }] }, { cN: "tag", b: t, r: 0 }, { cN: "rules", b: "{", e: "}", i: /\S/, c: [e.CBCM, n] }] }
    }), e.registerLanguage("diff", function(e) { return { aliases: ["patch"], c: [{ cN: "chunk", r: 10, v: [{ b: /^@@ +\-\d+,\d+ +\+\d+,\d+ +@@$/ }, { b: /^\*\*\* +\d+,\d+ +\*\*\*\*$/ }, { b: /^\-\-\- +\d+,\d+ +\-\-\-\-$/ }] }, { cN: "header", v: [{ b: /Index: /, e: /$/ }, { b: /=====/, e: /=====$/ }, { b: /^\-\-\-/, e: /$/ }, { b: /^\*{3} /, e: /$/ }, { b: /^\+\+\+/, e: /$/ }, { b: /\*{5}/, e: /\*{5}$/ }] }, { cN: "addition", b: "^\\+", e: "$" }, { cN: "deletion", b: "^\\-", e: "$" }, { cN: "change", b: "^\\!", e: "$" }] } }), e.registerLanguage("http", function(e) { return { aliases: ["https"], i: "\\S", c: [{ cN: "status", b: "^HTTP/[0-9\\.]+", e: "$", c: [{ cN: "number", b: "\\b\\d{3}\\b" }] }, { cN: "request", b: "^[A-Z]+ (.*?) HTTP/[0-9\\.]+$", rB: !0, e: "$", c: [{ cN: "string", b: " ", e: " ", eB: !0, eE: !0 }] }, { cN: "attribute", b: "^\\w", e: ": ", eE: !0, i: "\\n|\\s|=", starts: { cN: "string", e: "$" } }, { b: "\\n\\n", starts: { sL: "", eW: !0 } }] } }), e.registerLanguage("ini", function(e) { return { cI: !0, i: /\S/, c: [e.C(";", "$"), { cN: "title", b: "^\\[", e: "\\]" }, { cN: "setting", b: "^[a-z0-9\\[\\]_-]+[ \\t]*=[ \\t]*", e: "$", c: [{ cN: "value", eW: !0, k: "on off true false yes no", c: [e.QSM, e.NM], r: 0 }] }] } }), e.registerLanguage("java", function(e) {
        var t = e.UIR + "(<" + e.UIR + ">)?",
            r = "false synchronized int abstract float private char boolean static null if const for true while long strictfp finally protected import native final void enum else break transient catch instanceof byte super volatile case assert short package default double public try this switch continue throws protected public private",
            n = "\\b(0[bB]([01]+[01_]+[01]+|[01]+)|0[xX]([a-fA-F0-9]+[a-fA-F0-9_]+[a-fA-F0-9]+|[a-fA-F0-9]+)|(([\\d]+[\\d_]+[\\d]+|[\\d]+)(\\.([\\d]+[\\d_]+[\\d]+|[\\d]+))?|\\.([\\d]+[\\d_]+[\\d]+|[\\d]+))([eE][-+]?\\d+)?)[lLfF]?",
            a = { cN: "number", b: n, r: 0 };
        return { aliases: ["jsp"], k: r, i: /<\//, c: [e.C("/\\*\\*", "\\*/", { r: 0, c: [{ cN: "doctag", b: "@[A-Za-z]+" }] }), e.CLCM, e.CBCM, e.ASM, e.QSM, { cN: "class", bK: "class interface", e: /[{;=]/, eE: !0, k: "class interface", i: /[:"\[\]]/, c: [{ bK: "extends implements" }, e.UTM] }, { bK: "new throw return else", r: 0 }, { cN: "function", b: "(" + t + "\\s+)+" + e.UIR + "\\s*\\(", rB: !0, e: /[{;=]/, eE: !0, k: r, c: [{ b: e.UIR + "\\s*\\(", rB: !0, r: 0, c: [e.UTM] }, { cN: "params", b: /\(/, e: /\)/, k: r, r: 0, c: [e.ASM, e.QSM, e.CNM, e.CBCM] }, e.CLCM, e.CBCM] }, a, { cN: "annotation", b: "@[A-Za-z]+" }] }
    }), e.registerLanguage("javascript", function(e) { return { aliases: ["js"], k: { keyword: "in of if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as async await", literal: "true false null undefined NaN Infinity", built_in: "eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Promise" }, c: [{ cN: "pi", r: 10, b: /^\s*['"]use (strict|asm)['"]/ }, e.ASM, e.QSM, { cN: "string", b: "`", e: "`", c: [e.BE, { cN: "subst", b: "\\$\\{", e: "\\}" }] }, e.CLCM, e.CBCM, { cN: "number", v: [{ b: "\\b(0[bB][01]+)" }, { b: "\\b(0[oO][0-7]+)" }, { b: e.CNR }], r: 0 }, { b: "(" + e.RSR + "|\\b(case|return|throw)\\b)\\s*", k: "return throw case", c: [e.CLCM, e.CBCM, e.RM, { b: /</, e: />\s*[);\]]/, r: 0, sL: "xml" }], r: 0 }, { cN: "function", bK: "function", e: /\{/, eE: !0, c: [e.inherit(e.TM, { b: /[A-Za-z$_][0-9A-Za-z$_]*/ }), { cN: "params", b: /\(/, e: /\)/, eB: !0, eE: !0, c: [e.CLCM, e.CBCM], i: /["'\(]/ }], i: /\[|%/ }, { b: /\$[(.]/ }, { b: "\\." + e.IR, r: 0 }, { bK: "import", e: "[;$]", k: "import from as", c: [e.ASM, e.QSM] }, { cN: "class", bK: "class", e: /[{;=]/, eE: !0, i: /[:"\[\]]/, c: [{ bK: "extends" }, e.UTM] }] } }), e.registerLanguage("json", function(e) {
        var t = { literal: "true false null" },
            r = [e.QSM, e.CNM],
            n = { cN: "value", e: ",", eW: !0, eE: !0, c: r, k: t },
            a = { b: "{", e: "}", c: [{ cN: "attribute", b: '\\s*"', e: '"\\s*:\\s*', eB: !0, eE: !0, c: [e.BE], i: "\\n", starts: n }], i: "\\S" },
            s = { b: "\\[", e: "\\]", c: [e.inherit(n, { cN: null })], i: "\\S" };
        return r.splice(r.length, 0, a, s), { c: r, k: t, i: "\\S" }
    }), e.registerLanguage("makefile", function(e) { var t = { cN: "variable", b: /\$\(/, e: /\)/, c: [e.BE] }; return { aliases: ["mk", "mak"], c: [e.HCM, { b: /^\w+\s*\W*=/, rB: !0, r: 0, starts: { cN: "constant", e: /\s*\W*=/, eE: !0, starts: { e: /$/, r: 0, c: [t] } } }, { cN: "title", b: /^[\w]+:\s*$/ }, { cN: "phony", b: /^\.PHONY:/, e: /$/, k: ".PHONY", l: /[\.\w]+/ }, { b: /^\t+/, e: /$/, r: 0, c: [e.QSM, t] }] } }), e.registerLanguage("xml", function(e) {
        var t = "[A-Za-z0-9\\._:-]+",
            r = { b: /<\?(php)?(?!\w)/, e: /\?>/, sL: "php", subLanguageMode: "continuous" },
            n = { eW: !0, i: /</, r: 0, c: [r, { cN: "attribute", b: t, r: 0 }, { b: "=", r: 0, c: [{ cN: "value", c: [r], v: [{ b: /"/, e: /"/ }, { b: /'/, e: /'/ }, { b: /[^\s\/>]+/ }] }] }] };
        return { aliases: ["html", "xhtml", "rss", "atom", "xsl", "plist"], cI: !0, c: [{ cN: "doctype", b: "<!DOCTYPE", e: ">", r: 10, c: [{ b: "\\[", e: "\\]" }] }, e.C("<!--", "-->", { r: 10 }), { cN: "cdata", b: "<\\!\\[CDATA\\[", e: "\\]\\]>", r: 10 }, { cN: "tag", b: "<style(?=\\s|>|$)", e: ">", k: { title: "style" }, c: [n], starts: { e: "</style>", rE: !0, sL: "css" } }, { cN: "tag", b: "<script(?=\\s|>|$)", e: ">", k: { title: "script" }, c: [n], starts: { e: "</script>", rE: !0, sL: "" } }, r, { cN: "pi", b: /<\?\w+/, e: /\?>/, r: 10 }, { cN: "tag", b: "</?", e: "/?>", c: [{ cN: "title", b: /[^ \/><\n\t]+/, r: 0 }, n] }] }
    }), e.registerLanguage("markdown", function(e) { return { aliases: ["md", "mkdown", "mkd"], c: [{ cN: "header", v: [{ b: "^#{1,6}", e: "$" }, { b: "^.+?\\n[=-]{2,}$" }] }, { b: "<", e: ">", sL: "xml", r: 0 }, { cN: "bullet", b: "^([*+-]|(\\d+\\.))\\s+" }, { cN: "strong", b: "[*_]{2}.+?[*_]{2}" }, { cN: "emphasis", v: [{ b: "\\*.+?\\*" }, { b: "_.+?_", r: 0 }] }, { cN: "blockquote", b: "^>\\s+", e: "$" }, { cN: "code", v: [{ b: "`.+?`" }, { b: "^( {4}|	)", e: "$", r: 0 }] }, { cN: "horizontal_rule", b: "^[-\\*]{3,}", e: "$" }, { b: "\\[.+?\\][\\(\\[].*?[\\)\\]]", rB: !0, c: [{ cN: "link_label", b: "\\[", e: "\\]", eB: !0, rE: !0, r: 0 }, { cN: "link_url", b: "\\]\\(", e: "\\)", eB: !0, eE: !0 }, { cN: "link_reference", b: "\\]\\[", e: "\\]", eB: !0, eE: !0 }], r: 10 }, { b: "^\\[.+\\]:", rB: !0, c: [{ cN: "link_reference", b: "\\[", e: "\\]:", eB: !0, eE: !0, starts: { cN: "link_url", e: "$" } }] }] } }), e.registerLanguage("nginx", function(e) {
        var t = { cN: "variable", v: [{ b: /\$\d+/ }, { b: /\$\{/, e: /}/ }, { b: "[\\$\\@]" + e.UIR }] },
            r = { eW: !0, l: "[a-z/_]+", k: { built_in: "on off yes no true false none blocked debug info notice warn error crit select break last permanent redirect kqueue rtsig epoll poll /dev/poll" }, r: 0, i: "=>", c: [e.HCM, { cN: "string", c: [e.BE, t], v: [{ b: /"/, e: /"/ }, { b: /'/, e: /'/ }] }, { cN: "url", b: "([a-z]+):/", e: "\\s", eW: !0, eE: !0, c: [t] }, { cN: "regexp", c: [e.BE, t], v: [{ b: "\\s\\^", e: "\\s|{|;", rE: !0 }, { b: "~\\*?\\s+", e: "\\s|{|;", rE: !0 }, { b: "\\*(\\.[a-z\\-]+)+" }, { b: "([a-z\\-]+\\.)+\\*" }] }, { cN: "number", b: "\\b\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}(:\\d{1,5})?\\b" }, { cN: "number", b: "\\b\\d+[kKmMgGdshdwy]*\\b", r: 0 }, t] };
        return { aliases: ["nginxconf"], c: [e.HCM, { b: e.UIR + "\\s", e: ";|{", rB: !0, c: [{ cN: "title", b: e.UIR, starts: r }], r: 0 }], i: "[^\\s\\}]" }
    }), e.registerLanguage("objectivec", function(e) {
        var t = { cN: "built_in", b: "(AV|CA|CF|CG|CI|MK|MP|NS|UI)\\w+" },
            r = { keyword: "int float while char export sizeof typedef const struct for union unsigned long volatile static bool mutable if do return goto void enum else break extern asm case short default double register explicit signed typename this switch continue wchar_t inline readonly assign readwrite self @synchronized id typeof nonatomic super unichar IBOutlet IBAction strong weak copy in out inout bycopy byref oneway __strong __weak __block __autoreleasing @private @protected @public @try @property @end @throw @catch @finally @autoreleasepool @synthesize @dynamic @selector @optional @required", literal: "false true FALSE TRUE nil YES NO NULL", built_in: "BOOL dispatch_once_t dispatch_queue_t dispatch_sync dispatch_async dispatch_once" },
            n = /[a-zA-Z@][a-zA-Z0-9_]*/,
            a = "@interface @class @protocol @implementation";
        return { aliases: ["mm", "objc", "obj-c"], k: r, l: n, i: "</", c: [t, e.CLCM, e.CBCM, e.CNM, e.QSM, { cN: "string", v: [{ b: '@"', e: '"', i: "\\n", c: [e.BE] }, { b: "'", e: "[^\\\\]'", i: "[^\\\\][^']" }] }, { cN: "preprocessor", b: "#", e: "$", c: [{ cN: "title", v: [{ b: '"', e: '"' }, { b: "<", e: ">" }] }] }, { cN: "class", b: "(" + a.split(" ").join("|") + ")\\b", e: "({|$)", eE: !0, k: a, l: n, c: [e.UTM] }, { cN: "variable", b: "\\." + e.UIR, r: 0 }] }
    }), e.registerLanguage("perl", function(e) {
        var t = "getpwent getservent quotemeta msgrcv scalar kill dbmclose undef lc ma syswrite tr send umask sysopen shmwrite vec qx utime local oct semctl localtime readpipe do return format read sprintf dbmopen pop getpgrp not getpwnam rewinddir qqfileno qw endprotoent wait sethostent bless s|0 opendir continue each sleep endgrent shutdown dump chomp connect getsockname die socketpair close flock exists index shmgetsub for endpwent redo lstat msgctl setpgrp abs exit select print ref gethostbyaddr unshift fcntl syscall goto getnetbyaddr join gmtime symlink semget splice x|0 getpeername recv log setsockopt cos last reverse gethostbyname getgrnam study formline endhostent times chop length gethostent getnetent pack getprotoent getservbyname rand mkdir pos chmod y|0 substr endnetent printf next open msgsnd readdir use unlink getsockopt getpriority rindex wantarray hex system getservbyport endservent int chr untie rmdir prototype tell listen fork shmread ucfirst setprotoent else sysseek link getgrgid shmctl waitpid unpack getnetbyname reset chdir grep split require caller lcfirst until warn while values shift telldir getpwuid my getprotobynumber delete and sort uc defined srand accept package seekdir getprotobyname semop our rename seek if q|0 chroot sysread setpwent no crypt getc chown sqrt write setnetent setpriority foreach tie sin msgget map stat getlogin unless elsif truncate exec keys glob tied closedirioctl socket readlink eval xor readline binmode setservent eof ord bind alarm pipe atan2 getgrent exp time push setgrent gt lt or ne m|0 break given say state when",
            r = { cN: "subst", b: "[$@]\\{", e: "\\}", k: t },
            n = { b: "->{", e: "}" },
            a = { cN: "variable", v: [{ b: /\$\d/ }, { b: /[\$%@](\^\w\b|#\w+(::\w+)*|{\w+}|\w+(::\w*)*)/ }, { b: /[\$%@][^\s\w{]/, r: 0 }] },
            s = e.C("^(__END__|__DATA__)", "\\n$", { r: 5 }),
            i = [e.BE, r, a],
            c = [a, e.HCM, s, e.C("^\\=\\w", "\\=cut", { eW: !0 }), n, { cN: "string", c: i, v: [{ b: "q[qwxr]?\\s*\\(", e: "\\)", r: 5 }, { b: "q[qwxr]?\\s*\\[", e: "\\]", r: 5 }, { b: "q[qwxr]?\\s*\\{", e: "\\}", r: 5 }, { b: "q[qwxr]?\\s*\\|", e: "\\|", r: 5 }, { b: "q[qwxr]?\\s*\\<", e: "\\>", r: 5 }, { b: "qw\\s+q", e: "q", r: 5 }, { b: "'", e: "'", c: [e.BE] }, { b: '"', e: '"' }, { b: "`", e: "`", c: [e.BE] }, { b: "{\\w+}", c: [], r: 0 }, { b: "-?\\w+\\s*\\=\\>", c: [], r: 0 }] }, { cN: "number", b: "(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b", r: 0 }, { b: "(\\/\\/|" + e.RSR + "|\\b(split|return|print|reverse|grep)\\b)\\s*", k: "split return print reverse grep", r: 0, c: [e.HCM, s, { cN: "regexp", b: "(s|tr|y)/(\\\\.|[^/])*/(\\\\.|[^/])*/[a-z]*", r: 10 }, { cN: "regexp", b: "(m|qr)?/", e: "/[a-z]*", c: [e.BE], r: 0 }] }, { cN: "sub", bK: "sub", e: "(\\s*\\(.*?\\))?[;{]", r: 5 }, { cN: "operator", b: "-\\w\\b", r: 0 }];
        return r.c = c, n.c = c, { aliases: ["pl"], k: t, c: c }
    }), e.registerLanguage("php", function(e) {
        var t = { cN: "variable", b: "\\$+[a-zA-Z_-每][a-zA-Z0-9_-每]*" },
            r = { cN: "preprocessor", b: /<\?(php)?|\?>/ },
            n = { cN: "string", c: [e.BE, r], v: [{ b: 'b"', e: '"' }, { b: "b'", e: "'" }, e.inherit(e.ASM, { i: null }), e.inherit(e.QSM, { i: null })] },
            a = { v: [e.BNM, e.CNM] };
        return { aliases: ["php3", "php4", "php5", "php6"], cI: !0, k: "and include_once list abstract global private echo interface as static endswitch array null if endwhile or const for endforeach self var while isset public protected exit foreach throw elseif include __FILE__ empty require_once do xor return parent clone use __CLASS__ __LINE__ else break print eval new catch __METHOD__ case exception default die require __FUNCTION__ enddeclare final try switch continue endfor endif declare unset true false trait goto instanceof insteadof __DIR__ __NAMESPACE__ yield finally", c: [e.CLCM, e.HCM, e.C("/\\*", "\\*/", { c: [{ cN: "doctag", b: "@[A-Za-z]+" }, r] }), e.C("__halt_compiler.+?;", !1, { eW: !0, k: "__halt_compiler", l: e.UIR }), { cN: "string", b: "<<<['\"]?\\w+['\"]?$", e: "^\\w+;", c: [e.BE] }, r, t, { b: /(::|->)+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/ }, { cN: "function", bK: "function", e: /[;{]/, eE: !0, i: "\\$|\\[|%", c: [e.UTM, { cN: "params", b: "\\(", e: "\\)", c: ["self", t, e.CBCM, n, a] }] }, { cN: "class", bK: "class interface", e: "{", eE: !0, i: /[:\(\$"]/, c: [{ bK: "extends implements" }, e.UTM] }, { bK: "namespace", e: ";", i: /[\.']/, c: [e.UTM] }, { bK: "use", e: ";", c: [e.UTM] }, { b: "=>" }, n, a] }
    }), e.registerLanguage("python", function(e) {
        var t = { cN: "prompt", b: /^(>>>|\.\.\.) / },
            r = { cN: "string", c: [e.BE], v: [{ b: /(u|b)?r?'''/, e: /'''/, c: [t], r: 10 }, { b: /(u|b)?r?"""/, e: /"""/, c: [t], r: 10 }, { b: /(u|r|ur)'/, e: /'/, r: 10 }, { b: /(u|r|ur)"/, e: /"/, r: 10 }, { b: /(b|br)'/, e: /'/ }, { b: /(b|br)"/, e: /"/ }, e.ASM, e.QSM] },
            n = { cN: "number", r: 0, v: [{ b: e.BNR + "[lLjJ]?" }, { b: "\\b(0o[0-7]+)[lLjJ]?" }, { b: e.CNR + "[lLjJ]?" }] },
            a = { cN: "params", b: /\(/, e: /\)/, c: ["self", t, n, r] };
        return { aliases: ["py", "gyp"], k: { keyword: "and elif is global as in if from raise for except finally print import pass return exec else break not with class assert yield try while continue del or def lambda nonlocal|10 None True False", built_in: "Ellipsis NotImplemented" }, i: /(<\/|->|\?)/, c: [t, n, r, e.HCM, { v: [{ cN: "function", bK: "def", r: 10 }, { cN: "class", bK: "class" }], e: /:/, i: /[${=;\n,]/, c: [e.UTM, a] }, { cN: "decorator", b: /@/, e: /$/ }, { b: /\b(print|exec)\(/ }] }
    }), e.registerLanguage("ruby", function(e) {
        var t = "[a-zA-Z_]\\w*[!?=]?|[-+~]\\@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?",
            r = "and false then defined module in return redo if BEGIN retry end for true self when next until do begin unless END rescue nil else break undef not super class case require yield alias while ensure elsif or include attr_reader attr_writer attr_accessor",
            n = { cN: "doctag", b: "@[A-Za-z]+" },
            a = { cN: "value", b: "#<", e: ">" },
            s = [e.C("#", "$", { c: [n] }), e.C("^\\=begin", "^\\=end", { c: [n], r: 10 }), e.C("^__END__", "\\n$")],
            i = { cN: "subst", b: "#\\{", e: "}", k: r },
            c = { cN: "string", c: [e.BE, i], v: [{ b: /'/, e: /'/ }, { b: /"/, e: /"/ }, { b: /`/, e: /`/ }, { b: "%[qQwWx]?\\(", e: "\\)" }, { b: "%[qQwWx]?\\[", e: "\\]" }, { b: "%[qQwWx]?{", e: "}" }, { b: "%[qQwWx]?<", e: ">" }, { b: "%[qQwWx]?/", e: "/" }, { b: "%[qQwWx]?%", e: "%" }, { b: "%[qQwWx]?-", e: "-" }, { b: "%[qQwWx]?\\|", e: "\\|" }, { b: /\B\?(\\\d{1,3}|\\x[A-Fa-f0-9]{1,2}|\\u[A-Fa-f0-9]{4}|\\?\S)\b/ }] },
            o = { cN: "params", b: "\\(", e: "\\)", k: r },
            l = [c, a, { cN: "class", bK: "class module", e: "$|;", i: /=/, c: [e.inherit(e.TM, { b: "[A-Za-z_]\\w*(::\\w+)*(\\?|\\!)?" }), { cN: "inheritance", b: "<\\s*", c: [{ cN: "parent", b: "(" + e.IR + "::)?" + e.IR }] }].concat(s) }, { cN: "function", bK: "def", e: " |$|;", r: 0, c: [e.inherit(e.TM, { b: t }), o].concat(s) }, { cN: "constant", b: "(::)?(\\b[A-Z]\\w*(::)?)+", r: 0 }, { cN: "symbol", b: e.UIR + "(\\!|\\?)?:", r: 0 }, { cN: "symbol", b: ":", c: [c, { b: t }], r: 0 }, { cN: "number", b: "(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b", r: 0 }, { cN: "variable", b: "(\\$\\W)|((\\$|\\@\\@?)(\\w+))" }, { b: "(" + e.RSR + ")\\s*", c: [a, { cN: "regexp", c: [e.BE, i], i: /\n/, v: [{ b: "/", e: "/[a-z]*" }, { b: "%r{", e: "}[a-z]*" }, { b: "%r\\(", e: "\\)[a-z]*" }, { b: "%r!", e: "![a-z]*" }, { b: "%r\\[", e: "\\][a-z]*" }] }].concat(s), r: 0 }].concat(s);
        i.c = l, o.c = l;
        var u = "[>?]>",
            d = "[\\w#]+\\(\\w+\\):\\d+:\\d+>",
            b = "(\\w+-)?\\d+\\.\\d+\\.\\d(p\\d+)?[^>]+>",
            p = [{ b: /^\s*=>/, cN: "status", starts: { e: "$", c: l } }, { cN: "prompt", b: "^(" + u + "|" + d + "|" + b + ")", starts: { e: "$", c: l } }];
        return { aliases: ["rb", "gemspec", "podspec", "thor", "irb"], k: r, c: s.concat(p).concat(l) }
    }), e.registerLanguage("sql", function(e) {
        var t = e.C("--", "$");
        return {
            cI: !0,
            i: /[<>]/,
            c: [{
                cN: "operator",
                bK: "begin end start commit rollback savepoint lock alter create drop rename call delete do handler insert load replace select truncate update set show pragma grant merge describe use explain help declare prepare execute deallocate savepoint release unlock purge reset change stop analyze cache flush optimize repair kill install uninstall checksum restore check backup revoke",
                e: /;/,
                eW: !0,
                k: {
                    keyword: "abs absolute acos action add adddate addtime aes_decrypt aes_encrypt after aggregate all allocate alter analyze and any are as asc ascii asin assertion at atan atan2 atn2 authorization authors avg backup before begin benchmark between bin binlog bit_and bit_count bit_length bit_or bit_xor both by cache call cascade cascaded case cast catalog ceil ceiling chain change changed char_length character_length charindex charset check checksum checksum_agg choose close coalesce coercibility collate collation collationproperty column columns columns_updated commit compress concat concat_ws concurrent connect connection connection_id consistent constraint constraints continue contributors conv convert convert_tz corresponding cos cot count count_big crc32 create cross cume_dist curdate current current_date current_time current_timestamp current_user cursor curtime data database databases datalength date_add date_format date_sub dateadd datediff datefromparts datename datepart datetime2fromparts datetimeoffsetfromparts day dayname dayofmonth dayofweek dayofyear deallocate declare decode default deferrable deferred degrees delayed delete des_decrypt des_encrypt des_key_file desc describe descriptor diagnostics difference disconnect distinct distinctrow div do domain double drop dumpfile each else elt enclosed encode encrypt end end-exec engine engines eomonth errors escape escaped event eventdata events except exception exec execute exists exp explain export_set extended external extract fast fetch field fields find_in_set first first_value floor flush for force foreign format found found_rows from from_base64 from_days from_unixtime full function get get_format get_lock getdate getutcdate global go goto grant grants greatest group group_concat grouping grouping_id gtid_subset gtid_subtract handler having help hex high_priority hosts hour ident_current ident_incr ident_seed identified identity if ifnull ignore iif ilike immediate in index indicator inet6_aton inet6_ntoa inet_aton inet_ntoa infile initially inner innodb input insert install instr intersect into is is_free_lock is_ipv4 is_ipv4_compat is_ipv4_mapped is_not is_not_null is_used_lock isdate isnull isolation join key kill language last last_day last_insert_id last_value lcase lead leading least leaves left len lenght level like limit lines ln load load_file local localtime localtimestamp locate lock log log10 log2 logfile logs low_priority lower lpad ltrim make_set makedate maketime master master_pos_wait match matched max md5 medium merge microsecond mid min minute mod mode module month monthname mutex name_const names national natural nchar next no no_write_to_binlog not now nullif nvarchar oct octet_length of old_password on only open optimize option optionally or ord order outer outfile output pad parse partial partition password patindex percent_rank percentile_cont percentile_disc period_add period_diff pi plugin position pow power pragma precision prepare preserve primary prior privileges procedure procedure_analyze processlist profile profiles public publishingservername purge quarter query quick quote quotename radians rand read references regexp relative relaylog release release_lock rename repair repeat replace replicate reset restore restrict return returns reverse revoke right rlike rollback rollup round row row_count rows rpad rtrim savepoint schema scroll sec_to_time second section select serializable server session session_user set sha sha1 sha2 share show sign sin size slave sleep smalldatetimefromparts snapshot some soname soundex sounds_like space sql sql_big_result sql_buffer_result sql_cache sql_calc_found_rows sql_no_cache sql_small_result sql_variant_property sqlstate sqrt square start starting status std stddev stddev_pop stddev_samp stdev stdevp stop str str_to_date straight_join strcmp string stuff subdate substr substring subtime subtring_index sum switchoffset sysdate sysdatetime sysdatetimeoffset system_user sysutcdatetime table tables tablespace tan temporary terminated tertiary_weights then time time_format time_to_sec timediff timefromparts timestamp timestampadd timestampdiff timezone_hour timezone_minute to to_base64 to_days to_seconds todatetimeoffset trailing transaction translation trigger trigger_nestlevel triggers trim truncate try_cast try_convert try_parse ucase uncompress uncompressed_length unhex unicode uninstall union unique unix_timestamp unknown unlock update upgrade upped upper usage use user user_resources using utc_date utc_time utc_timestamp uuid uuid_short validate_password_strength value values var var_pop var_samp variables variance varp version view warnings week weekday weekofyear weight_string when whenever where with work write xml xor year yearweek zon",
                    literal: "true false null",
                    built_in: "array bigint binary bit blob boolean char character date dec decimal float int integer interval number numeric real serial smallint varchar varying int8 serial8 text"
                },
                c: [{ cN: "string", b: "'", e: "'", c: [e.BE, { b: "''" }] }, { cN: "string", b: '"', e: '"', c: [e.BE, { b: '""' }] }, { cN: "string", b: "`", e: "`", c: [e.BE] }, e.CNM, e.CBCM, t]
            }, e.CBCM, t]
        }
    }), e
});