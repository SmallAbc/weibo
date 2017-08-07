/*! jQuery UI - v1.10.4 - 2014-07-25
* http://jqueryui.com
* Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.position.js, jquery.ui.draggable.js, jquery.ui.droppable.js, jquery.ui.resizable.js, jquery.ui.selectable.js, jquery.ui.sortable.js, jquery.ui.accordion.js, jquery.ui.autocomplete.js, jquery.ui.button.js, jquery.ui.datepicker.js, jquery.ui.dialog.js, jquery.ui.menu.js, jquery.ui.progressbar.js, jquery.ui.slider.js, jquery.ui.spinner.js, jquery.ui.tabs.js, jquery.ui.tooltip.js, jquery.ui.effect.js, jquery.ui.effect-blind.js, jquery.ui.effect-bounce.js, jquery.ui.effect-clip.js, jquery.ui.effect-drop.js, jquery.ui.effect-explode.js, jquery.ui.effect-fade.js, jquery.ui.effect-fold.js, jquery.ui.effect-highlight.js, jquery.ui.effect-pulsate.js, jquery.ui.effect-scale.js, jquery.ui.effect-shake.js, jquery.ui.effect-slide.js, jquery.ui.effect-transfer.js
* Copyright 2014 jQuery Foundation and other contributors; Licensed MIT */

(function (e, t) {
    function i(t, i) {
        var a, n, o, r = t.nodeName.toLowerCase();
        return "area" === r ? (a = t.parentNode, n = a.name, t.href && n && "map" === a.nodeName.toLowerCase() ? (o = e("img[usemap=#" + n + "]")[0], !!o && s(o)) : !1) : (/input|select|textarea|button|object/.test(r) ? !t.disabled : "a" === r ? t.href || i : i) && s(t)
    }

    function s(t) {
        return e.expr.filters.visible(t) && !e(t).parents().addBack().filter(function () {
            return "hidden" === e.css(this, "visibility")
        }).length
    }

    var a = 0, n = /^ui-id-\d+$/;
    e.ui = e.ui || {}, e.extend(e.ui, {
        version: "1.10.4",
        keyCode: {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            NUMPAD_ADD: 107,
            NUMPAD_DECIMAL: 110,
            NUMPAD_DIVIDE: 111,
            NUMPAD_ENTER: 108,
            NUMPAD_MULTIPLY: 106,
            NUMPAD_SUBTRACT: 109,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }
    }), e.fn.extend({
        focus: function (t) {
            return function (i, s) {
                return "number" == typeof i ? this.each(function () {
                    var t = this;
                    setTimeout(function () {
                        e(t).focus(), s && s.call(t)
                    }, i)
                }) : t.apply(this, arguments)
            }
        }(e.fn.focus), scrollParent: function () {
            var t;
            return t = e.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function () {
                return /(relative|absolute|fixed)/.test(e.css(this, "position")) && /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"))
            }).eq(0) : this.parents().filter(function () {
                return /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"))
            }).eq(0), /fixed/.test(this.css("position")) || !t.length ? e(document) : t
        }, zIndex: function (i) {
            if (i !== t) return this.css("zIndex", i);
            if (this.length) for (var s, a, n = e(this[0]); n.length && n[0] !== document;) {
                if (s = n.css("position"), ("absolute" === s || "relative" === s || "fixed" === s) && (a = parseInt(n.css("zIndex"), 10), !isNaN(a) && 0 !== a)) return a;
                n = n.parent()
            }
            return 0
        }, uniqueId: function () {
            return this.each(function () {
                this.id || (this.id = "ui-id-" + ++a)
            })
        }, removeUniqueId: function () {
            return this.each(function () {
                n.test(this.id) && e(this).removeAttr("id")
            })
        }
    }), e.extend(e.expr[":"], {
        data: e.expr.createPseudo ? e.expr.createPseudo(function (t) {
            return function (i) {
                return !!e.data(i, t)
            }
        }) : function (t, i, s) {
            return !!e.data(t, s[3])
        }, focusable: function (t) {
            return i(t, !isNaN(e.attr(t, "tabindex")))
        }, tabbable: function (t) {
            var s = e.attr(t, "tabindex"), a = isNaN(s);
            return (a || s >= 0) && i(t, !a)
        }
    }), e("<a>").outerWidth(1).jquery || e.each(["Width", "Height"], function (i, s) {
        function a(t, i, s, a) {
            return e.each(n, function () {
                i -= parseFloat(e.css(t, "padding" + this)) || 0, s && (i -= parseFloat(e.css(t, "border" + this + "Width")) || 0), a && (i -= parseFloat(e.css(t, "margin" + this)) || 0)
            }), i
        }

        var n = "Width" === s ? ["Left", "Right"] : ["Top", "Bottom"], o = s.toLowerCase(), r = {
            innerWidth: e.fn.innerWidth,
            innerHeight: e.fn.innerHeight,
            outerWidth: e.fn.outerWidth,
            outerHeight: e.fn.outerHeight
        };
        e.fn["inner" + s] = function (i) {
            return i === t ? r["inner" + s].call(this) : this.each(function () {
                e(this).css(o, a(this, i) + "px")
            })
        }, e.fn["outer" + s] = function (t, i) {
            return "number" != typeof t ? r["outer" + s].call(this, t) : this.each(function () {
                e(this).css(o, a(this, t, !0, i) + "px")
            })
        }
    }), e.fn.addBack || (e.fn.addBack = function (e) {
        return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
    }), e("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (e.fn.removeData = function (t) {
        return function (i) {
            return arguments.length ? t.call(this, e.camelCase(i)) : t.call(this)
        }
    }(e.fn.removeData)), e.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), e.support.selectstart = "onselectstart" in document.createElement("div"), e.fn.extend({
        disableSelection: function () {
            return this.bind((e.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function (e) {
                e.preventDefault()
            })
        }, enableSelection: function () {
            return this.unbind(".ui-disableSelection")
        }
    }), e.extend(e.ui, {
        plugin: {
            add: function (t, i, s) {
                var a, n = e.ui[t].prototype;
                for (a in s) n.plugins[a] = n.plugins[a] || [], n.plugins[a].push([i, s[a]])
            }, call: function (e, t, i) {
                var s, a = e.plugins[t];
                if (a && e.element[0].parentNode && 11 !== e.element[0].parentNode.nodeType) for (s = 0; a.length > s; s++) e.options[a[s][0]] && a[s][1].apply(e.element, i)
            }
        }, hasScroll: function (t, i) {
            if ("hidden" === e(t).css("overflow")) return !1;
            var s = i && "left" === i ? "scrollLeft" : "scrollTop", a = !1;
            return t[s] > 0 ? !0 : (t[s] = 1, a = t[s] > 0, t[s] = 0, a)
        }
    })
})(jQuery);
(function (e, t) {
    var i = 0, s = Array.prototype.slice, a = e.cleanData;
    e.cleanData = function (t) {
        for (var i, s = 0; null != (i = t[s]); s++) try {
            e(i).triggerHandler("remove")
        } catch (n) {
        }
        a(t)
    }, e.widget = function (i, s, a) {
        var n, r, o, h, l = {}, u = i.split(".")[0];
        i = i.split(".")[1], n = u + "-" + i, a || (a = s, s = e.Widget), e.expr[":"][n.toLowerCase()] = function (t) {
            return !!e.data(t, n)
        }, e[u] = e[u] || {}, r = e[u][i], o = e[u][i] = function (e, i) {
            return this._createWidget ? (arguments.length && this._createWidget(e, i), t) : new o(e, i)
        }, e.extend(o, r, {
            version: a.version,
            _proto: e.extend({}, a),
            _childConstructors: []
        }), h = new s, h.options = e.widget.extend({}, h.options), e.each(a, function (i, a) {
            return e.isFunction(a) ? (l[i] = function () {
                var e = function () {
                    return s.prototype[i].apply(this, arguments)
                }, t = function (e) {
                    return s.prototype[i].apply(this, e)
                };
                return function () {
                    var i, s = this._super, n = this._superApply;
                    return this._super = e, this._superApply = t, i = a.apply(this, arguments), this._super = s, this._superApply = n, i
                }
            }(), t) : (l[i] = a, t)
        }), o.prototype = e.widget.extend(h, {widgetEventPrefix: r ? h.widgetEventPrefix || i : i}, l, {
            constructor: o,
            namespace: u,
            widgetName: i,
            widgetFullName: n
        }), r ? (e.each(r._childConstructors, function (t, i) {
            var s = i.prototype;
            e.widget(s.namespace + "." + s.widgetName, o, i._proto)
        }), delete r._childConstructors) : s._childConstructors.push(o), e.widget.bridge(i, o)
    }, e.widget.extend = function (i) {
        for (var a, n, r = s.call(arguments, 1), o = 0, h = r.length; h > o; o++) for (a in r[o]) n = r[o][a], r[o].hasOwnProperty(a) && n !== t && (i[a] = e.isPlainObject(n) ? e.isPlainObject(i[a]) ? e.widget.extend({}, i[a], n) : e.widget.extend({}, n) : n);
        return i
    }, e.widget.bridge = function (i, a) {
        var n = a.prototype.widgetFullName || i;
        e.fn[i] = function (r) {
            var o = "string" == typeof r, h = s.call(arguments, 1), l = this;
            return r = !o && h.length ? e.widget.extend.apply(null, [r].concat(h)) : r, o ? this.each(function () {
                var s, a = e.data(this, n);
                return a ? e.isFunction(a[r]) && "_" !== r.charAt(0) ? (s = a[r].apply(a, h), s !== a && s !== t ? (l = s && s.jquery ? l.pushStack(s.get()) : s, !1) : t) : e.error("no such method '" + r + "' for " + i + " widget instance") : e.error("cannot call methods on " + i + " prior to initialization; " + "attempted to call method '" + r + "'")
            }) : this.each(function () {
                var t = e.data(this, n);
                t ? t.option(r || {})._init() : e.data(this, n, new a(r, this))
            }), l
        }
    }, e.Widget = function () {
    }, e.Widget._childConstructors = [], e.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {disabled: !1, create: null},
        _createWidget: function (t, s) {
            s = e(s || this.defaultElement || this)[0], this.element = e(s), this.uuid = i++, this.eventNamespace = "." + this.widgetName + this.uuid, this.options = e.widget.extend({}, this.options, this._getCreateOptions(), t), this.bindings = e(), this.hoverable = e(), this.focusable = e(), s !== this && (e.data(s, this.widgetFullName, this), this._on(!0, this.element, {
                remove: function (e) {
                    e.target === s && this.destroy()
                }
            }), this.document = e(s.style ? s.ownerDocument : s.document || s), this.window = e(this.document[0].defaultView || this.document[0].parentWindow)), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
        },
        _getCreateOptions: e.noop,
        _getCreateEventData: e.noop,
        _create: e.noop,
        _init: e.noop,
        destroy: function () {
            this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled " + "ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
        },
        _destroy: e.noop,
        widget: function () {
            return this.element
        },
        option: function (i, s) {
            var a, n, r, o = i;
            if (0 === arguments.length) return e.widget.extend({}, this.options);
            if ("string" == typeof i) if (o = {}, a = i.split("."), i = a.shift(), a.length) {
                for (n = o[i] = e.widget.extend({}, this.options[i]), r = 0; a.length - 1 > r; r++) n[a[r]] = n[a[r]] || {}, n = n[a[r]];
                if (i = a.pop(), 1 === arguments.length) return n[i] === t ? null : n[i];
                n[i] = s
            } else {
                if (1 === arguments.length) return this.options[i] === t ? null : this.options[i];
                o[i] = s
            }
            return this._setOptions(o), this
        },
        _setOptions: function (e) {
            var t;
            for (t in e) this._setOption(t, e[t]);
            return this
        },
        _setOption: function (e, t) {
            return this.options[e] = t, "disabled" === e && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !!t).attr("aria-disabled", t), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")), this
        },
        enable: function () {
            return this._setOption("disabled", !1)
        },
        disable: function () {
            return this._setOption("disabled", !0)
        },
        _on: function (i, s, a) {
            var n, r = this;
            "boolean" != typeof i && (a = s, s = i, i = !1), a ? (s = n = e(s), this.bindings = this.bindings.add(s)) : (a = s, s = this.element, n = this.widget()), e.each(a, function (a, o) {
                function h() {
                    return i || r.options.disabled !== !0 && !e(this).hasClass("ui-state-disabled") ? ("string" == typeof o ? r[o] : o).apply(r, arguments) : t
                }

                "string" != typeof o && (h.guid = o.guid = o.guid || h.guid || e.guid++);
                var l = a.match(/^(\w+)\s*(.*)$/), u = l[1] + r.eventNamespace, d = l[2];
                d ? n.delegate(d, u, h) : s.bind(u, h)
            })
        },
        _off: function (e, t) {
            t = (t || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.unbind(t).undelegate(t)
        },
        _delay: function (e, t) {
            function i() {
                return ("string" == typeof e ? s[e] : e).apply(s, arguments)
            }

            var s = this;
            return setTimeout(i, t || 0)
        },
        _hoverable: function (t) {
            this.hoverable = this.hoverable.add(t), this._on(t, {
                mouseenter: function (t) {
                    e(t.currentTarget).addClass("ui-state-hover")
                }, mouseleave: function (t) {
                    e(t.currentTarget).removeClass("ui-state-hover")
                }
            })
        },
        _focusable: function (t) {
            this.focusable = this.focusable.add(t), this._on(t, {
                focusin: function (t) {
                    e(t.currentTarget).addClass("ui-state-focus")
                }, focusout: function (t) {
                    e(t.currentTarget).removeClass("ui-state-focus")
                }
            })
        },
        _trigger: function (t, i, s) {
            var a, n, r = this.options[t];
            if (s = s || {}, i = e.Event(i), i.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), i.target = this.element[0], n = i.originalEvent) for (a in n) a in i || (i[a] = n[a]);
            return this.element.trigger(i, s), !(e.isFunction(r) && r.apply(this.element[0], [i].concat(s)) === !1 || i.isDefaultPrevented())
        }
    }, e.each({show: "fadeIn", hide: "fadeOut"}, function (t, i) {
        e.Widget.prototype["_" + t] = function (s, a, n) {
            "string" == typeof a && (a = {effect: a});
            var r, o = a ? a === !0 || "number" == typeof a ? i : a.effect || i : t;
            a = a || {}, "number" == typeof a && (a = {duration: a}), r = !e.isEmptyObject(a), a.complete = n, a.delay && s.delay(a.delay), r && e.effects && e.effects.effect[o] ? s[t](a) : o !== t && s[o] ? s[o](a.duration, a.easing, n) : s.queue(function (i) {
                e(this)[t](), n && n.call(s[0]), i()
            })
        }
    })
})(jQuery);
(function (e) {
    var t = !1;
    e(document).mouseup(function () {
        t = !1
    }), e.widget("ui.mouse", {
        version: "1.10.4",
        options: {cancel: "input,textarea,button,select,option", distance: 1, delay: 0},
        _mouseInit: function () {
            var t = this;
            this.element.bind("mousedown." + this.widgetName, function (e) {
                return t._mouseDown(e)
            }).bind("click." + this.widgetName, function (i) {
                return !0 === e.data(i.target, t.widgetName + ".preventClickEvent") ? (e.removeData(i.target, t.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1) : undefined
            }), this.started = !1
        },
        _mouseDestroy: function () {
            this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && e(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
        },
        _mouseDown: function (i) {
            if (!t) {
                this._mouseStarted && this._mouseUp(i), this._mouseDownEvent = i;
                var s = this, a = 1 === i.which,
                    n = "string" == typeof this.options.cancel && i.target.nodeName ? e(i.target).closest(this.options.cancel).length : !1;
                return a && !n && this._mouseCapture(i) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function () {
                    s.mouseDelayMet = !0
                }, this.options.delay)), this._mouseDistanceMet(i) && this._mouseDelayMet(i) && (this._mouseStarted = this._mouseStart(i) !== !1, !this._mouseStarted) ? (i.preventDefault(), !0) : (!0 === e.data(i.target, this.widgetName + ".preventClickEvent") && e.removeData(i.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function (e) {
                    return s._mouseMove(e)
                }, this._mouseUpDelegate = function (e) {
                    return s._mouseUp(e)
                }, e(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), i.preventDefault(), t = !0, !0)) : !0
            }
        },
        _mouseMove: function (t) {
            return e.ui.ie && (!document.documentMode || 9 > document.documentMode) && !t.button ? this._mouseUp(t) : this._mouseStarted ? (this._mouseDrag(t), t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, t) !== !1, this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)), !this._mouseStarted)
        },
        _mouseUp: function (t) {
            return e(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, t.target === this._mouseDownEvent.target && e.data(t.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(t)), !1
        },
        _mouseDistanceMet: function (e) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - e.pageX), Math.abs(this._mouseDownEvent.pageY - e.pageY)) >= this.options.distance
        },
        _mouseDelayMet: function () {
            return this.mouseDelayMet
        },
        _mouseStart: function () {
        },
        _mouseDrag: function () {
        },
        _mouseStop: function () {
        },
        _mouseCapture: function () {
            return !0
        }
    })
})(jQuery);
(function (e, t) {
    function i(e, t, i) {
        return [parseFloat(e[0]) * (p.test(e[0]) ? t / 100 : 1), parseFloat(e[1]) * (p.test(e[1]) ? i / 100 : 1)]
    }

    function s(t, i) {
        return parseInt(e.css(t, i), 10) || 0
    }

    function a(t) {
        var i = t[0];
        return 9 === i.nodeType ? {
            width: t.width(),
            height: t.height(),
            offset: {top: 0, left: 0}
        } : e.isWindow(i) ? {
            width: t.width(),
            height: t.height(),
            offset: {top: t.scrollTop(), left: t.scrollLeft()}
        } : i.preventDefault ? {width: 0, height: 0, offset: {top: i.pageY, left: i.pageX}} : {
            width: t.outerWidth(),
            height: t.outerHeight(),
            offset: t.offset()
        }
    }

    e.ui = e.ui || {};
    var n, r = Math.max, o = Math.abs, h = Math.round, l = /left|center|right/, u = /top|center|bottom/,
        d = /[\+\-]\d+(\.[\d]+)?%?/, c = /^\w+/, p = /%$/, m = e.fn.position;
    e.position = {
        scrollbarWidth: function () {
            if (n !== t) return n;
            var i, s,
                a = e("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
                r = a.children()[0];
            return e("body").append(a), i = r.offsetWidth, a.css("overflow", "scroll"), s = r.offsetWidth, i === s && (s = a[0].clientWidth), a.remove(), n = i - s
        }, getScrollInfo: function (t) {
            var i = t.isWindow || t.isDocument ? "" : t.element.css("overflow-x"),
                s = t.isWindow || t.isDocument ? "" : t.element.css("overflow-y"),
                a = "scroll" === i || "auto" === i && t.width < t.element[0].scrollWidth,
                n = "scroll" === s || "auto" === s && t.height < t.element[0].scrollHeight;
            return {width: n ? e.position.scrollbarWidth() : 0, height: a ? e.position.scrollbarWidth() : 0}
        }, getWithinInfo: function (t) {
            var i = e(t || window), s = e.isWindow(i[0]), a = !!i[0] && 9 === i[0].nodeType;
            return {
                element: i,
                isWindow: s,
                isDocument: a,
                offset: i.offset() || {left: 0, top: 0},
                scrollLeft: i.scrollLeft(),
                scrollTop: i.scrollTop(),
                width: s ? i.width() : i.outerWidth(),
                height: s ? i.height() : i.outerHeight()
            }
        }
    }, e.fn.position = function (t) {
        if (!t || !t.of) return m.apply(this, arguments);
        t = e.extend({}, t);
        var n, p, f, g, v, y, b = e(t.of), _ = e.position.getWithinInfo(t.within), x = e.position.getScrollInfo(_),
            k = (t.collision || "flip").split(" "), w = {};
        return y = a(b), b[0].preventDefault && (t.at = "left top"), p = y.width, f = y.height, g = y.offset, v = e.extend({}, g), e.each(["my", "at"], function () {
            var e, i, s = (t[this] || "").split(" ");
            1 === s.length && (s = l.test(s[0]) ? s.concat(["center"]) : u.test(s[0]) ? ["center"].concat(s) : ["center", "center"]), s[0] = l.test(s[0]) ? s[0] : "center", s[1] = u.test(s[1]) ? s[1] : "center", e = d.exec(s[0]), i = d.exec(s[1]), w[this] = [e ? e[0] : 0, i ? i[0] : 0], t[this] = [c.exec(s[0])[0], c.exec(s[1])[0]]
        }), 1 === k.length && (k[1] = k[0]), "right" === t.at[0] ? v.left += p : "center" === t.at[0] && (v.left += p / 2), "bottom" === t.at[1] ? v.top += f : "center" === t.at[1] && (v.top += f / 2), n = i(w.at, p, f), v.left += n[0], v.top += n[1], this.each(function () {
            var a, l, u = e(this), d = u.outerWidth(), c = u.outerHeight(), m = s(this, "marginLeft"),
                y = s(this, "marginTop"), T = d + m + s(this, "marginRight") + x.width,
                D = c + y + s(this, "marginBottom") + x.height, S = e.extend({}, v),
                N = i(w.my, u.outerWidth(), u.outerHeight());
            "right" === t.my[0] ? S.left -= d : "center" === t.my[0] && (S.left -= d / 2), "bottom" === t.my[1] ? S.top -= c : "center" === t.my[1] && (S.top -= c / 2), S.left += N[0], S.top += N[1], e.support.offsetFractions || (S.left = h(S.left), S.top = h(S.top)), a = {
                marginLeft: m,
                marginTop: y
            }, e.each(["left", "top"], function (i, s) {
                e.ui.position[k[i]] && e.ui.position[k[i]][s](S, {
                    targetWidth: p,
                    targetHeight: f,
                    elemWidth: d,
                    elemHeight: c,
                    collisionPosition: a,
                    collisionWidth: T,
                    collisionHeight: D,
                    offset: [n[0] + N[0], n[1] + N[1]],
                    my: t.my,
                    at: t.at,
                    within: _,
                    elem: u
                })
            }), t.using && (l = function (e) {
                var i = g.left - S.left, s = i + p - d, a = g.top - S.top, n = a + f - c, h = {
                    target: {element: b, left: g.left, top: g.top, width: p, height: f},
                    element: {element: u, left: S.left, top: S.top, width: d, height: c},
                    horizontal: 0 > s ? "left" : i > 0 ? "right" : "center",
                    vertical: 0 > n ? "top" : a > 0 ? "bottom" : "middle"
                };
                d > p && p > o(i + s) && (h.horizontal = "center"), c > f && f > o(a + n) && (h.vertical = "middle"), h.important = r(o(i), o(s)) > r(o(a), o(n)) ? "horizontal" : "vertical", t.using.call(this, e, h)
            }), u.offset(e.extend(S, {using: l}))
        })
    }, e.ui.position = {
        fit: {
            left: function (e, t) {
                var i, s = t.within, a = s.isWindow ? s.scrollLeft : s.offset.left, n = s.width,
                    o = e.left - t.collisionPosition.marginLeft, h = a - o, l = o + t.collisionWidth - n - a;
                t.collisionWidth > n ? h > 0 && 0 >= l ? (i = e.left + h + t.collisionWidth - n - a, e.left += h - i) : e.left = l > 0 && 0 >= h ? a : h > l ? a + n - t.collisionWidth : a : h > 0 ? e.left += h : l > 0 ? e.left -= l : e.left = r(e.left - o, e.left)
            }, top: function (e, t) {
                var i, s = t.within, a = s.isWindow ? s.scrollTop : s.offset.top, n = t.within.height,
                    o = e.top - t.collisionPosition.marginTop, h = a - o, l = o + t.collisionHeight - n - a;
                t.collisionHeight > n ? h > 0 && 0 >= l ? (i = e.top + h + t.collisionHeight - n - a, e.top += h - i) : e.top = l > 0 && 0 >= h ? a : h > l ? a + n - t.collisionHeight : a : h > 0 ? e.top += h : l > 0 ? e.top -= l : e.top = r(e.top - o, e.top)
            }
        }, flip: {
            left: function (e, t) {
                var i, s, a = t.within, n = a.offset.left + a.scrollLeft, r = a.width,
                    h = a.isWindow ? a.scrollLeft : a.offset.left, l = e.left - t.collisionPosition.marginLeft,
                    u = l - h, d = l + t.collisionWidth - r - h,
                    c = "left" === t.my[0] ? -t.elemWidth : "right" === t.my[0] ? t.elemWidth : 0,
                    p = "left" === t.at[0] ? t.targetWidth : "right" === t.at[0] ? -t.targetWidth : 0,
                    m = -2 * t.offset[0];
                0 > u ? (i = e.left + c + p + m + t.collisionWidth - r - n, (0 > i || o(u) > i) && (e.left += c + p + m)) : d > 0 && (s = e.left - t.collisionPosition.marginLeft + c + p + m - h, (s > 0 || d > o(s)) && (e.left += c + p + m))
            }, top: function (e, t) {
                var i, s, a = t.within, n = a.offset.top + a.scrollTop, r = a.height,
                    h = a.isWindow ? a.scrollTop : a.offset.top, l = e.top - t.collisionPosition.marginTop, u = l - h,
                    d = l + t.collisionHeight - r - h, c = "top" === t.my[1],
                    p = c ? -t.elemHeight : "bottom" === t.my[1] ? t.elemHeight : 0,
                    m = "top" === t.at[1] ? t.targetHeight : "bottom" === t.at[1] ? -t.targetHeight : 0,
                    f = -2 * t.offset[1];
                0 > u ? (s = e.top + p + m + f + t.collisionHeight - r - n, e.top + p + m + f > u && (0 > s || o(u) > s) && (e.top += p + m + f)) : d > 0 && (i = e.top - t.collisionPosition.marginTop + p + m + f - h, e.top + p + m + f > d && (i > 0 || d > o(i)) && (e.top += p + m + f))
            }
        }, flipfit: {
            left: function () {
                e.ui.position.flip.left.apply(this, arguments), e.ui.position.fit.left.apply(this, arguments)
            }, top: function () {
                e.ui.position.flip.top.apply(this, arguments), e.ui.position.fit.top.apply(this, arguments)
            }
        }
    }, function () {
        var t, i, s, a, n, r = document.getElementsByTagName("body")[0], o = document.createElement("div");
        t = document.createElement(r ? "div" : "body"), s = {
            visibility: "hidden",
            width: 0,
            height: 0,
            border: 0,
            margin: 0,
            background: "none"
        }, r && e.extend(s, {position: "absolute", left: "-1000px", top: "-1000px"});
        for (n in s) t.style[n] = s[n];
        t.appendChild(o), i = r || document.documentElement, i.insertBefore(t, i.firstChild), o.style.cssText = "position: absolute; left: 10.7432222px;", a = e(o).offset().left, e.support.offsetFractions = a > 10 && 11 > a, t.innerHTML = "", i.removeChild(t)
    }()
})(jQuery);
(function (e) {
    e.widget("ui.draggable", e.ui.mouse, {
        version: "1.10.4",
        widgetEventPrefix: "drag",
        options: {
            addClasses: !0,
            appendTo: "parent",
            axis: !1,
            connectToSortable: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            iframeFix: !1,
            opacity: !1,
            refreshPositions: !1,
            revert: !1,
            revertDuration: 500,
            scope: "default",
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            snap: !1,
            snapMode: "both",
            snapTolerance: 20,
            stack: !1,
            zIndex: !1,
            drag: null,
            start: null,
            stop: null
        },
        _create: function () {
            "original" !== this.options.helper || /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative"), this.options.addClasses && this.element.addClass("ui-draggable"), this.options.disabled && this.element.addClass("ui-draggable-disabled"), this._mouseInit()
        },
        _destroy: function () {
            this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), this._mouseDestroy()
        },
        _mouseCapture: function (t) {
            var i = this.options;
            return this.helper || i.disabled || e(t.target).closest(".ui-resizable-handle").length > 0 ? !1 : (this.handle = this._getHandle(t), this.handle ? (e(i.iframeFix === !0 ? "iframe" : i.iframeFix).each(function () {
                e("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>").css({
                    width: this.offsetWidth + "px",
                    height: this.offsetHeight + "px",
                    position: "absolute",
                    opacity: "0.001",
                    zIndex: 1e3
                }).css(e(this).offset()).appendTo("body")
            }), !0) : !1)
        },
        _mouseStart: function (t) {
            var i = this.options;
            return this.helper = this._createHelper(t), this.helper.addClass("ui-draggable-dragging"), this._cacheHelperProportions(), e.ui.ddmanager && (e.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(), this.offsetParent = this.helper.offsetParent(), this.offsetParentCssPosition = this.offsetParent.css("position"), this.offset = this.positionAbs = this.element.offset(), this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            }, this.offset.scroll = !1, e.extend(this.offset, {
                click: {
                    left: t.pageX - this.offset.left,
                    top: t.pageY - this.offset.top
                }, parent: this._getParentOffset(), relative: this._getRelativeOffset()
            }), this.originalPosition = this.position = this._generatePosition(t), this.originalPageX = t.pageX, this.originalPageY = t.pageY, i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt), this._setContainment(), this._trigger("start", t) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), e.ui.ddmanager && !i.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t), this._mouseDrag(t, !0), e.ui.ddmanager && e.ui.ddmanager.dragStart(this, t), !0)
        },
        _mouseDrag: function (t, i) {
            if ("fixed" === this.offsetParentCssPosition && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(t), this.positionAbs = this._convertPositionTo("absolute"), !i) {
                var s = this._uiHash();
                if (this._trigger("drag", t, s) === !1) return this._mouseUp({}), !1;
                this.position = s.position
            }
            return this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), e.ui.ddmanager && e.ui.ddmanager.drag(this, t), !1
        },
        _mouseStop: function (t) {
            var i = this, s = !1;
            return e.ui.ddmanager && !this.options.dropBehaviour && (s = e.ui.ddmanager.drop(this, t)), this.dropped && (s = this.dropped, this.dropped = !1), "original" !== this.options.helper || e.contains(this.element[0].ownerDocument, this.element[0]) ? ("invalid" === this.options.revert && !s || "valid" === this.options.revert && s || this.options.revert === !0 || e.isFunction(this.options.revert) && this.options.revert.call(this.element, s) ? e(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function () {
                i._trigger("stop", t) !== !1 && i._clear()
            }) : this._trigger("stop", t) !== !1 && this._clear(), !1) : !1
        },
        _mouseUp: function (t) {
            return e("div.ui-draggable-iframeFix").each(function () {
                this.parentNode.removeChild(this)
            }), e.ui.ddmanager && e.ui.ddmanager.dragStop(this, t), e.ui.mouse.prototype._mouseUp.call(this, t)
        },
        cancel: function () {
            return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(), this
        },
        _getHandle: function (t) {
            return this.options.handle ? !!e(t.target).closest(this.element.find(this.options.handle)).length : !0
        },
        _createHelper: function (t) {
            var i = this.options,
                s = e.isFunction(i.helper) ? e(i.helper.apply(this.element[0], [t])) : "clone" === i.helper ? this.element.clone().removeAttr("id") : this.element;
            return s.parents("body").length || s.appendTo("parent" === i.appendTo ? this.element[0].parentNode : i.appendTo), s[0] === this.element[0] || /(fixed|absolute)/.test(s.css("position")) || s.css("position", "absolute"), s
        },
        _adjustOffsetFromHelper: function (t) {
            "string" == typeof t && (t = t.split(" ")), e.isArray(t) && (t = {
                left: +t[0],
                top: +t[1] || 0
            }), "left" in t && (this.offset.click.left = t.left + this.margins.left), "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left), "top" in t && (this.offset.click.top = t.top + this.margins.top), "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
        },
        _getParentOffset: function () {
            var t = this.offsetParent.offset();
            return "absolute" === this.cssPosition && this.scrollParent[0] !== document && e.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && e.ui.ie) && (t = {
                top: 0,
                left: 0
            }), {
                top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function () {
            if ("relative" === this.cssPosition) {
                var e = this.element.position();
                return {
                    top: e.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: e.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            }
            return {top: 0, left: 0}
        },
        _cacheMargins: function () {
            this.margins = {
                left: parseInt(this.element.css("marginLeft"), 10) || 0,
                top: parseInt(this.element.css("marginTop"), 10) || 0,
                right: parseInt(this.element.css("marginRight"), 10) || 0,
                bottom: parseInt(this.element.css("marginBottom"), 10) || 0
            }
        },
        _cacheHelperProportions: function () {
            this.helperProportions = {width: this.helper.outerWidth(), height: this.helper.outerHeight()}
        },
        _setContainment: function () {
            var t, i, s, a = this.options;
            return a.containment ? "window" === a.containment ? (this.containment = [e(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, e(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, e(window).scrollLeft() + e(window).width() - this.helperProportions.width - this.margins.left, e(window).scrollTop() + (e(window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top], undefined) : "document" === a.containment ? (this.containment = [0, 0, e(document).width() - this.helperProportions.width - this.margins.left, (e(document).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top], undefined) : a.containment.constructor === Array ? (this.containment = a.containment, undefined) : ("parent" === a.containment && (a.containment = this.helper[0].parentNode), i = e(a.containment), s = i[0], s && (t = "hidden" !== i.css("overflow"), this.containment = [(parseInt(i.css("borderLeftWidth"), 10) || 0) + (parseInt(i.css("paddingLeft"), 10) || 0), (parseInt(i.css("borderTopWidth"), 10) || 0) + (parseInt(i.css("paddingTop"), 10) || 0), (t ? Math.max(s.scrollWidth, s.offsetWidth) : s.offsetWidth) - (parseInt(i.css("borderRightWidth"), 10) || 0) - (parseInt(i.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (t ? Math.max(s.scrollHeight, s.offsetHeight) : s.offsetHeight) - (parseInt(i.css("borderBottomWidth"), 10) || 0) - (parseInt(i.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relative_container = i), undefined) : (this.containment = null, undefined)
        },
        _convertPositionTo: function (t, i) {
            i || (i = this.position);
            var s = "absolute" === t ? 1 : -1,
                a = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent;
            return this.offset.scroll || (this.offset.scroll = {
                top: a.scrollTop(),
                left: a.scrollLeft()
            }), {
                top: i.top + this.offset.relative.top * s + this.offset.parent.top * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : this.offset.scroll.top) * s,
                left: i.left + this.offset.relative.left * s + this.offset.parent.left * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : this.offset.scroll.left) * s
            }
        },
        _generatePosition: function (t) {
            var i, s, a, n, r = this.options,
                o = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                h = t.pageX, l = t.pageY;
            return this.offset.scroll || (this.offset.scroll = {
                top: o.scrollTop(),
                left: o.scrollLeft()
            }), this.originalPosition && (this.containment && (this.relative_container ? (s = this.relative_container.offset(), i = [this.containment[0] + s.left, this.containment[1] + s.top, this.containment[2] + s.left, this.containment[3] + s.top]) : i = this.containment, t.pageX - this.offset.click.left < i[0] && (h = i[0] + this.offset.click.left), t.pageY - this.offset.click.top < i[1] && (l = i[1] + this.offset.click.top), t.pageX - this.offset.click.left > i[2] && (h = i[2] + this.offset.click.left), t.pageY - this.offset.click.top > i[3] && (l = i[3] + this.offset.click.top)), r.grid && (a = r.grid[1] ? this.originalPageY + Math.round((l - this.originalPageY) / r.grid[1]) * r.grid[1] : this.originalPageY, l = i ? a - this.offset.click.top >= i[1] || a - this.offset.click.top > i[3] ? a : a - this.offset.click.top >= i[1] ? a - r.grid[1] : a + r.grid[1] : a, n = r.grid[0] ? this.originalPageX + Math.round((h - this.originalPageX) / r.grid[0]) * r.grid[0] : this.originalPageX, h = i ? n - this.offset.click.left >= i[0] || n - this.offset.click.left > i[2] ? n : n - this.offset.click.left >= i[0] ? n - r.grid[0] : n + r.grid[0] : n)), {
                top: l - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : this.offset.scroll.top),
                left: h - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : this.offset.scroll.left)
            }
        },
        _clear: function () {
            this.helper.removeClass("ui-draggable-dragging"), this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1
        },
        _trigger: function (t, i, s) {
            return s = s || this._uiHash(), e.ui.plugin.call(this, t, [i, s]), "drag" === t && (this.positionAbs = this._convertPositionTo("absolute")), e.Widget.prototype._trigger.call(this, t, i, s)
        },
        plugins: {},
        _uiHash: function () {
            return {
                helper: this.helper,
                position: this.position,
                originalPosition: this.originalPosition,
                offset: this.positionAbs
            }
        }
    }), e.ui.plugin.add("draggable", "connectToSortable", {
        start: function (t, i) {
            var s = e(this).data("ui-draggable"), a = s.options, n = e.extend({}, i, {item: s.element});
            s.sortables = [], e(a.connectToSortable).each(function () {
                var i = e.data(this, "ui-sortable");
                i && !i.options.disabled && (s.sortables.push({
                    instance: i,
                    shouldRevert: i.options.revert
                }), i.refreshPositions(), i._trigger("activate", t, n))
            })
        }, stop: function (t, i) {
            var s = e(this).data("ui-draggable"), a = e.extend({}, i, {item: s.element});
            e.each(s.sortables, function () {
                this.instance.isOver ? (this.instance.isOver = 0, s.cancelHelperRemoval = !0, this.instance.cancelHelperRemoval = !1, this.shouldRevert && (this.instance.options.revert = this.shouldRevert), this.instance._mouseStop(t), this.instance.options.helper = this.instance.options._helper, "original" === s.options.helper && this.instance.currentItem.css({
                    top: "auto",
                    left: "auto"
                })) : (this.instance.cancelHelperRemoval = !1, this.instance._trigger("deactivate", t, a))
            })
        }, drag: function (t, i) {
            var s = e(this).data("ui-draggable"), a = this;
            e.each(s.sortables, function () {
                var n = !1, r = this;
                this.instance.positionAbs = s.positionAbs, this.instance.helperProportions = s.helperProportions, this.instance.offset.click = s.offset.click, this.instance._intersectsWith(this.instance.containerCache) && (n = !0, e.each(s.sortables, function () {
                    return this.instance.positionAbs = s.positionAbs, this.instance.helperProportions = s.helperProportions, this.instance.offset.click = s.offset.click, this !== r && this.instance._intersectsWith(this.instance.containerCache) && e.contains(r.instance.element[0], this.instance.element[0]) && (n = !1), n
                })), n ? (this.instance.isOver || (this.instance.isOver = 1, this.instance.currentItem = e(a).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item", !0), this.instance.options._helper = this.instance.options.helper, this.instance.options.helper = function () {
                    return i.helper[0]
                }, t.target = this.instance.currentItem[0], this.instance._mouseCapture(t, !0), this.instance._mouseStart(t, !0, !0), this.instance.offset.click.top = s.offset.click.top, this.instance.offset.click.left = s.offset.click.left, this.instance.offset.parent.left -= s.offset.parent.left - this.instance.offset.parent.left, this.instance.offset.parent.top -= s.offset.parent.top - this.instance.offset.parent.top, s._trigger("toSortable", t), s.dropped = this.instance.element, s.currentItem = s.element, this.instance.fromOutside = s), this.instance.currentItem && this.instance._mouseDrag(t)) : this.instance.isOver && (this.instance.isOver = 0, this.instance.cancelHelperRemoval = !0, this.instance.options.revert = !1, this.instance._trigger("out", t, this.instance._uiHash(this.instance)), this.instance._mouseStop(t, !0), this.instance.options.helper = this.instance.options._helper, this.instance.currentItem.remove(), this.instance.placeholder && this.instance.placeholder.remove(), s._trigger("fromSortable", t), s.dropped = !1)
            })
        }
    }), e.ui.plugin.add("draggable", "cursor", {
        start: function () {
            var t = e("body"), i = e(this).data("ui-draggable").options;
            t.css("cursor") && (i._cursor = t.css("cursor")), t.css("cursor", i.cursor)
        }, stop: function () {
            var t = e(this).data("ui-draggable").options;
            t._cursor && e("body").css("cursor", t._cursor)
        }
    }), e.ui.plugin.add("draggable", "opacity", {
        start: function (t, i) {
            var s = e(i.helper), a = e(this).data("ui-draggable").options;
            s.css("opacity") && (a._opacity = s.css("opacity")), s.css("opacity", a.opacity)
        }, stop: function (t, i) {
            var s = e(this).data("ui-draggable").options;
            s._opacity && e(i.helper).css("opacity", s._opacity)
        }
    }), e.ui.plugin.add("draggable", "scroll", {
        start: function () {
            var t = e(this).data("ui-draggable");
            t.scrollParent[0] !== document && "HTML" !== t.scrollParent[0].tagName && (t.overflowOffset = t.scrollParent.offset())
        }, drag: function (t) {
            var i = e(this).data("ui-draggable"), s = i.options, a = !1;
            i.scrollParent[0] !== document && "HTML" !== i.scrollParent[0].tagName ? (s.axis && "x" === s.axis || (i.overflowOffset.top + i.scrollParent[0].offsetHeight - t.pageY < s.scrollSensitivity ? i.scrollParent[0].scrollTop = a = i.scrollParent[0].scrollTop + s.scrollSpeed : t.pageY - i.overflowOffset.top < s.scrollSensitivity && (i.scrollParent[0].scrollTop = a = i.scrollParent[0].scrollTop - s.scrollSpeed)), s.axis && "y" === s.axis || (i.overflowOffset.left + i.scrollParent[0].offsetWidth - t.pageX < s.scrollSensitivity ? i.scrollParent[0].scrollLeft = a = i.scrollParent[0].scrollLeft + s.scrollSpeed : t.pageX - i.overflowOffset.left < s.scrollSensitivity && (i.scrollParent[0].scrollLeft = a = i.scrollParent[0].scrollLeft - s.scrollSpeed))) : (s.axis && "x" === s.axis || (t.pageY - e(document).scrollTop() < s.scrollSensitivity ? a = e(document).scrollTop(e(document).scrollTop() - s.scrollSpeed) : e(window).height() - (t.pageY - e(document).scrollTop()) < s.scrollSensitivity && (a = e(document).scrollTop(e(document).scrollTop() + s.scrollSpeed))), s.axis && "y" === s.axis || (t.pageX - e(document).scrollLeft() < s.scrollSensitivity ? a = e(document).scrollLeft(e(document).scrollLeft() - s.scrollSpeed) : e(window).width() - (t.pageX - e(document).scrollLeft()) < s.scrollSensitivity && (a = e(document).scrollLeft(e(document).scrollLeft() + s.scrollSpeed)))), a !== !1 && e.ui.ddmanager && !s.dropBehaviour && e.ui.ddmanager.prepareOffsets(i, t)
        }
    }), e.ui.plugin.add("draggable", "snap", {
        start: function () {
            var t = e(this).data("ui-draggable"), i = t.options;
            t.snapElements = [], e(i.snap.constructor !== String ? i.snap.items || ":data(ui-draggable)" : i.snap).each(function () {
                var i = e(this), s = i.offset();
                this !== t.element[0] && t.snapElements.push({
                    item: this,
                    width: i.outerWidth(),
                    height: i.outerHeight(),
                    top: s.top,
                    left: s.left
                })
            })
        }, drag: function (t, i) {
            var s, a, n, r, o, h, l, u, d, c, p = e(this).data("ui-draggable"), m = p.options, f = m.snapTolerance,
                g = i.offset.left, v = g + p.helperProportions.width, y = i.offset.top,
                b = y + p.helperProportions.height;
            for (d = p.snapElements.length - 1; d >= 0; d--) o = p.snapElements[d].left, h = o + p.snapElements[d].width, l = p.snapElements[d].top, u = l + p.snapElements[d].height, o - f > v || g > h + f || l - f > b || y > u + f || !e.contains(p.snapElements[d].item.ownerDocument, p.snapElements[d].item) ? (p.snapElements[d].snapping && p.options.snap.release && p.options.snap.release.call(p.element, t, e.extend(p._uiHash(), {snapItem: p.snapElements[d].item})), p.snapElements[d].snapping = !1) : ("inner" !== m.snapMode && (s = f >= Math.abs(l - b), a = f >= Math.abs(u - y), n = f >= Math.abs(o - v), r = f >= Math.abs(h - g), s && (i.position.top = p._convertPositionTo("relative", {
                top: l - p.helperProportions.height,
                left: 0
            }).top - p.margins.top), a && (i.position.top = p._convertPositionTo("relative", {
                top: u,
                left: 0
            }).top - p.margins.top), n && (i.position.left = p._convertPositionTo("relative", {
                top: 0,
                left: o - p.helperProportions.width
            }).left - p.margins.left), r && (i.position.left = p._convertPositionTo("relative", {
                top: 0,
                left: h
            }).left - p.margins.left)), c = s || a || n || r, "outer" !== m.snapMode && (s = f >= Math.abs(l - y), a = f >= Math.abs(u - b), n = f >= Math.abs(o - g), r = f >= Math.abs(h - v), s && (i.position.top = p._convertPositionTo("relative", {
                top: l,
                left: 0
            }).top - p.margins.top), a && (i.position.top = p._convertPositionTo("relative", {
                top: u - p.helperProportions.height,
                left: 0
            }).top - p.margins.top), n && (i.position.left = p._convertPositionTo("relative", {
                top: 0,
                left: o
            }).left - p.margins.left), r && (i.position.left = p._convertPositionTo("relative", {
                top: 0,
                left: h - p.helperProportions.width
            }).left - p.margins.left)), !p.snapElements[d].snapping && (s || a || n || r || c) && p.options.snap.snap && p.options.snap.snap.call(p.element, t, e.extend(p._uiHash(), {snapItem: p.snapElements[d].item})), p.snapElements[d].snapping = s || a || n || r || c)
        }
    }), e.ui.plugin.add("draggable", "stack", {
        start: function () {
            var t, i = this.data("ui-draggable").options, s = e.makeArray(e(i.stack)).sort(function (t, i) {
                return (parseInt(e(t).css("zIndex"), 10) || 0) - (parseInt(e(i).css("zIndex"), 10) || 0)
            });
            s.length && (t = parseInt(e(s[0]).css("zIndex"), 10) || 0, e(s).each(function (i) {
                e(this).css("zIndex", t + i)
            }), this.css("zIndex", t + s.length))
        }
    }), e.ui.plugin.add("draggable", "zIndex", {
        start: function (t, i) {
            var s = e(i.helper), a = e(this).data("ui-draggable").options;
            s.css("zIndex") && (a._zIndex = s.css("zIndex")), s.css("zIndex", a.zIndex)
        }, stop: function (t, i) {
            var s = e(this).data("ui-draggable").options;
            s._zIndex && e(i.helper).css("zIndex", s._zIndex)
        }
    })
})(jQuery);
(function (e) {
    function t(e, t, i) {
        return e > t && t + i > e
    }

    e.widget("ui.droppable", {
        version: "1.10.4",
        widgetEventPrefix: "drop",
        options: {
            accept: "*",
            activeClass: !1,
            addClasses: !0,
            greedy: !1,
            hoverClass: !1,
            scope: "default",
            tolerance: "intersect",
            activate: null,
            deactivate: null,
            drop: null,
            out: null,
            over: null
        },
        _create: function () {
            var t, i = this.options, s = i.accept;
            this.isover = !1, this.isout = !0, this.accept = e.isFunction(s) ? s : function (e) {
                return e.is(s)
            }, this.proportions = function () {
                return arguments.length ? (t = arguments[0], undefined) : t ? t : t = {
                    width: this.element[0].offsetWidth,
                    height: this.element[0].offsetHeight
                }
            }, e.ui.ddmanager.droppables[i.scope] = e.ui.ddmanager.droppables[i.scope] || [], e.ui.ddmanager.droppables[i.scope].push(this), i.addClasses && this.element.addClass("ui-droppable")
        },
        _destroy: function () {
            for (var t = 0, i = e.ui.ddmanager.droppables[this.options.scope]; i.length > t; t++) i[t] === this && i.splice(t, 1);
            this.element.removeClass("ui-droppable ui-droppable-disabled")
        },
        _setOption: function (t, i) {
            "accept" === t && (this.accept = e.isFunction(i) ? i : function (e) {
                return e.is(i)
            }), e.Widget.prototype._setOption.apply(this, arguments)
        },
        _activate: function (t) {
            var i = e.ui.ddmanager.current;
            this.options.activeClass && this.element.addClass(this.options.activeClass), i && this._trigger("activate", t, this.ui(i))
        },
        _deactivate: function (t) {
            var i = e.ui.ddmanager.current;
            this.options.activeClass && this.element.removeClass(this.options.activeClass), i && this._trigger("deactivate", t, this.ui(i))
        },
        _over: function (t) {
            var i = e.ui.ddmanager.current;
            i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this.options.hoverClass && this.element.addClass(this.options.hoverClass), this._trigger("over", t, this.ui(i)))
        },
        _out: function (t) {
            var i = e.ui.ddmanager.current;
            i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("out", t, this.ui(i)))
        },
        _drop: function (t, i) {
            var s = i || e.ui.ddmanager.current, a = !1;
            return s && (s.currentItem || s.element)[0] !== this.element[0] ? (this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function () {
                var t = e.data(this, "ui-droppable");
                return t.options.greedy && !t.options.disabled && t.options.scope === s.options.scope && t.accept.call(t.element[0], s.currentItem || s.element) && e.ui.intersect(s, e.extend(t, {offset: t.element.offset()}), t.options.tolerance) ? (a = !0, !1) : undefined
            }), a ? !1 : this.accept.call(this.element[0], s.currentItem || s.element) ? (this.options.activeClass && this.element.removeClass(this.options.activeClass), this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("drop", t, this.ui(s)), this.element) : !1) : !1
        },
        ui: function (e) {
            return {
                draggable: e.currentItem || e.element,
                helper: e.helper,
                position: e.position,
                offset: e.positionAbs
            }
        }
    }), e.ui.intersect = function (e, i, s) {
        if (!i.offset) return !1;
        var a, n, r = (e.positionAbs || e.position.absolute).left, o = (e.positionAbs || e.position.absolute).top,
            h = r + e.helperProportions.width, l = o + e.helperProportions.height, u = i.offset.left, d = i.offset.top,
            c = u + i.proportions().width, p = d + i.proportions().height;
        switch (s) {
            case"fit":
                return r >= u && c >= h && o >= d && p >= l;
            case"intersect":
                return r + e.helperProportions.width / 2 > u && c > h - e.helperProportions.width / 2 && o + e.helperProportions.height / 2 > d && p > l - e.helperProportions.height / 2;
            case"pointer":
                return a = (e.positionAbs || e.position.absolute).left + (e.clickOffset || e.offset.click).left, n = (e.positionAbs || e.position.absolute).top + (e.clickOffset || e.offset.click).top, t(n, d, i.proportions().height) && t(a, u, i.proportions().width);
            case"touch":
                return (o >= d && p >= o || l >= d && p >= l || d > o && l > p) && (r >= u && c >= r || h >= u && c >= h || u > r && h > c);
            default:
                return !1
        }
    }, e.ui.ddmanager = {
        current: null, droppables: {"default": []}, prepareOffsets: function (t, i) {
            var s, a, n = e.ui.ddmanager.droppables[t.options.scope] || [], r = i ? i.type : null,
                o = (t.currentItem || t.element).find(":data(ui-droppable)").addBack();
            e:for (s = 0; n.length > s; s++) if (!(n[s].options.disabled || t && !n[s].accept.call(n[s].element[0], t.currentItem || t.element))) {
                for (a = 0; o.length > a; a++) if (o[a] === n[s].element[0]) {
                    n[s].proportions().height = 0;
                    continue e
                }
                n[s].visible = "none" !== n[s].element.css("display"), n[s].visible && ("mousedown" === r && n[s]._activate.call(n[s], i), n[s].offset = n[s].element.offset(), n[s].proportions({
                    width: n[s].element[0].offsetWidth,
                    height: n[s].element[0].offsetHeight
                }))
            }
        }, drop: function (t, i) {
            var s = !1;
            return e.each((e.ui.ddmanager.droppables[t.options.scope] || []).slice(), function () {
                this.options && (!this.options.disabled && this.visible && e.ui.intersect(t, this, this.options.tolerance) && (s = this._drop.call(this, i) || s), !this.options.disabled && this.visible && this.accept.call(this.element[0], t.currentItem || t.element) && (this.isout = !0, this.isover = !1, this._deactivate.call(this, i)))
            }), s
        }, dragStart: function (t, i) {
            t.element.parentsUntil("body").bind("scroll.droppable", function () {
                t.options.refreshPositions || e.ui.ddmanager.prepareOffsets(t, i)
            })
        }, drag: function (t, i) {
            t.options.refreshPositions && e.ui.ddmanager.prepareOffsets(t, i), e.each(e.ui.ddmanager.droppables[t.options.scope] || [], function () {
                if (!this.options.disabled && !this.greedyChild && this.visible) {
                    var s, a, n, r = e.ui.intersect(t, this, this.options.tolerance),
                        o = !r && this.isover ? "isout" : r && !this.isover ? "isover" : null;
                    o && (this.options.greedy && (a = this.options.scope, n = this.element.parents(":data(ui-droppable)").filter(function () {
                        return e.data(this, "ui-droppable").options.scope === a
                    }), n.length && (s = e.data(n[0], "ui-droppable"), s.greedyChild = "isover" === o)), s && "isover" === o && (s.isover = !1, s.isout = !0, s._out.call(s, i)), this[o] = !0, this["isout" === o ? "isover" : "isout"] = !1, this["isover" === o ? "_over" : "_out"].call(this, i), s && "isout" === o && (s.isout = !1, s.isover = !0, s._over.call(s, i)))
                }
            })
        }, dragStop: function (t, i) {
            t.element.parentsUntil("body").unbind("scroll.droppable"), t.options.refreshPositions || e.ui.ddmanager.prepareOffsets(t, i)
        }
    }
})(jQuery);
(function (e) {
    function t(e) {
        return parseInt(e, 10) || 0
    }

    function i(e) {
        return !isNaN(parseInt(e, 10))
    }

    e.widget("ui.resizable", e.ui.mouse, {
        version: "1.10.4",
        widgetEventPrefix: "resize",
        options: {
            alsoResize: !1,
            animate: !1,
            animateDuration: "slow",
            animateEasing: "swing",
            aspectRatio: !1,
            autoHide: !1,
            containment: !1,
            ghost: !1,
            grid: !1,
            handles: "e,s,se",
            helper: !1,
            maxHeight: null,
            maxWidth: null,
            minHeight: 10,
            minWidth: 10,
            zIndex: 90,
            resize: null,
            start: null,
            stop: null
        },
        _create: function () {
            var t, i, s, a, n, r = this, o = this.options;
            if (this.element.addClass("ui-resizable"), e.extend(this, {
                    _aspectRatio: !!o.aspectRatio,
                    aspectRatio: o.aspectRatio,
                    originalElement: this.element,
                    _proportionallyResizeElements: [],
                    _helper: o.helper || o.ghost || o.animate ? o.helper || "ui-resizable-helper" : null
                }), this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i) && (this.element.wrap(e("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
                    position: this.element.css("position"),
                    width: this.element.outerWidth(),
                    height: this.element.outerHeight(),
                    top: this.element.css("top"),
                    left: this.element.css("left")
                })), this.element = this.element.parent().data("ui-resizable", this.element.data("ui-resizable")), this.elementIsWrapper = !0, this.element.css({
                    marginLeft: this.originalElement.css("marginLeft"),
                    marginTop: this.originalElement.css("marginTop"),
                    marginRight: this.originalElement.css("marginRight"),
                    marginBottom: this.originalElement.css("marginBottom")
                }), this.originalElement.css({
                    marginLeft: 0,
                    marginTop: 0,
                    marginRight: 0,
                    marginBottom: 0
                }), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
                    position: "static",
                    zoom: 1,
                    display: "block"
                })), this.originalElement.css({margin: this.originalElement.css("margin")}), this._proportionallyResize()), this.handles = o.handles || (e(".ui-resizable-handle", this.element).length ? {
                    n: ".ui-resizable-n",
                    e: ".ui-resizable-e",
                    s: ".ui-resizable-s",
                    w: ".ui-resizable-w",
                    se: ".ui-resizable-se",
                    sw: ".ui-resizable-sw",
                    ne: ".ui-resizable-ne",
                    nw: ".ui-resizable-nw"
                } : "e,s,se"), this.handles.constructor === String) for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), t = this.handles.split(","), this.handles = {}, i = 0; t.length > i; i++) s = e.trim(t[i]), n = "ui-resizable-" + s, a = e("<div class='ui-resizable-handle " + n + "'></div>"), a.css({zIndex: o.zIndex}), "se" === s && a.addClass("ui-icon ui-icon-gripsmall-diagonal-se"), this.handles[s] = ".ui-resizable-" + s, this.element.append(a);
            this._renderAxis = function (t) {
                var i, s, a, n;
                t = t || this.element;
                for (i in this.handles) this.handles[i].constructor === String && (this.handles[i] = e(this.handles[i], this.element).show()), this.elementIsWrapper && this.originalElement[0].nodeName.match(/textarea|input|select|button/i) && (s = e(this.handles[i], this.element), n = /sw|ne|nw|se|n|s/.test(i) ? s.outerHeight() : s.outerWidth(), a = ["padding", /ne|nw|n/.test(i) ? "Top" : /se|sw|s/.test(i) ? "Bottom" : /^e$/.test(i) ? "Right" : "Left"].join(""), t.css(a, n), this._proportionallyResize()), e(this.handles[i]).length
            }, this._renderAxis(this.element), this._handles = e(".ui-resizable-handle", this.element).disableSelection(), this._handles.mouseover(function () {
                r.resizing || (this.className && (a = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), r.axis = a && a[1] ? a[1] : "se")
            }), o.autoHide && (this._handles.hide(), e(this.element).addClass("ui-resizable-autohide").mouseenter(function () {
                o.disabled || (e(this).removeClass("ui-resizable-autohide"), r._handles.show())
            }).mouseleave(function () {
                o.disabled || r.resizing || (e(this).addClass("ui-resizable-autohide"), r._handles.hide())
            })), this._mouseInit()
        },
        _destroy: function () {
            this._mouseDestroy();
            var t, i = function (t) {
                e(t).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
            };
            return this.elementIsWrapper && (i(this.element), t = this.element, this.originalElement.css({
                position: t.css("position"),
                width: t.outerWidth(),
                height: t.outerHeight(),
                top: t.css("top"),
                left: t.css("left")
            }).insertAfter(t), t.remove()), this.originalElement.css("resize", this.originalResizeStyle), i(this.originalElement), this
        },
        _mouseCapture: function (t) {
            var i, s, a = !1;
            for (i in this.handles) s = e(this.handles[i])[0], (s === t.target || e.contains(s, t.target)) && (a = !0);
            return !this.options.disabled && a
        },
        _mouseStart: function (i) {
            var s, a, n, r = this.options, o = this.element.position(), h = this.element;
            return this.resizing = !0, /absolute/.test(h.css("position")) ? h.css({
                position: "absolute",
                top: h.css("top"),
                left: h.css("left")
            }) : h.is(".ui-draggable") && h.css({
                position: "absolute",
                top: o.top,
                left: o.left
            }), this._renderProxy(), s = t(this.helper.css("left")), a = t(this.helper.css("top")), r.containment && (s += e(r.containment).scrollLeft() || 0, a += e(r.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {
                left: s,
                top: a
            }, this.size = this._helper ? {
                width: this.helper.width(),
                height: this.helper.height()
            } : {width: h.width(), height: h.height()}, this.originalSize = this._helper ? {
                width: h.outerWidth(),
                height: h.outerHeight()
            } : {width: h.width(), height: h.height()}, this.originalPosition = {
                left: s,
                top: a
            }, this.sizeDiff = {
                width: h.outerWidth() - h.width(),
                height: h.outerHeight() - h.height()
            }, this.originalMousePosition = {
                left: i.pageX,
                top: i.pageY
            }, this.aspectRatio = "number" == typeof r.aspectRatio ? r.aspectRatio : this.originalSize.width / this.originalSize.height || 1, n = e(".ui-resizable-" + this.axis).css("cursor"), e("body").css("cursor", "auto" === n ? this.axis + "-resize" : n), h.addClass("ui-resizable-resizing"), this._propagate("start", i), !0
        },
        _mouseDrag: function (t) {
            var i, s = this.helper, a = {}, n = this.originalMousePosition, r = this.axis, o = this.position.top,
                h = this.position.left, l = this.size.width, u = this.size.height, d = t.pageX - n.left || 0,
                c = t.pageY - n.top || 0, p = this._change[r];
            return p ? (i = p.apply(this, [t, d, c]), this._updateVirtualBoundaries(t.shiftKey), (this._aspectRatio || t.shiftKey) && (i = this._updateRatio(i, t)), i = this._respectSize(i, t), this._updateCache(i), this._propagate("resize", t), this.position.top !== o && (a.top = this.position.top + "px"), this.position.left !== h && (a.left = this.position.left + "px"), this.size.width !== l && (a.width = this.size.width + "px"), this.size.height !== u && (a.height = this.size.height + "px"), s.css(a), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), e.isEmptyObject(a) || this._trigger("resize", t, this.ui()), !1) : !1
        },
        _mouseStop: function (t) {
            this.resizing = !1;
            var i, s, a, n, r, o, h, l = this.options, u = this;
            return this._helper && (i = this._proportionallyResizeElements, s = i.length && /textarea/i.test(i[0].nodeName), a = s && e.ui.hasScroll(i[0], "left") ? 0 : u.sizeDiff.height, n = s ? 0 : u.sizeDiff.width, r = {
                width: u.helper.width() - n,
                height: u.helper.height() - a
            }, o = parseInt(u.element.css("left"), 10) + (u.position.left - u.originalPosition.left) || null, h = parseInt(u.element.css("top"), 10) + (u.position.top - u.originalPosition.top) || null, l.animate || this.element.css(e.extend(r, {
                top: h,
                left: o
            })), u.helper.height(u.size.height), u.helper.width(u.size.width), this._helper && !l.animate && this._proportionallyResize()), e("body").css("cursor", "auto"), this.element.removeClass("ui-resizable-resizing"), this._propagate("stop", t), this._helper && this.helper.remove(), !1
        },
        _updateVirtualBoundaries: function (e) {
            var t, s, a, n, r, o = this.options;
            r = {
                minWidth: i(o.minWidth) ? o.minWidth : 0,
                maxWidth: i(o.maxWidth) ? o.maxWidth : 1 / 0,
                minHeight: i(o.minHeight) ? o.minHeight : 0,
                maxHeight: i(o.maxHeight) ? o.maxHeight : 1 / 0
            }, (this._aspectRatio || e) && (t = r.minHeight * this.aspectRatio, a = r.minWidth / this.aspectRatio, s = r.maxHeight * this.aspectRatio, n = r.maxWidth / this.aspectRatio, t > r.minWidth && (r.minWidth = t), a > r.minHeight && (r.minHeight = a), r.maxWidth > s && (r.maxWidth = s), r.maxHeight > n && (r.maxHeight = n)), this._vBoundaries = r
        },
        _updateCache: function (e) {
            this.offset = this.helper.offset(), i(e.left) && (this.position.left = e.left), i(e.top) && (this.position.top = e.top), i(e.height) && (this.size.height = e.height), i(e.width) && (this.size.width = e.width)
        },
        _updateRatio: function (e) {
            var t = this.position, s = this.size, a = this.axis;
            return i(e.height) ? e.width = e.height * this.aspectRatio : i(e.width) && (e.height = e.width / this.aspectRatio), "sw" === a && (e.left = t.left + (s.width - e.width), e.top = null), "nw" === a && (e.top = t.top + (s.height - e.height), e.left = t.left + (s.width - e.width)), e
        },
        _respectSize: function (e) {
            var t = this._vBoundaries, s = this.axis, a = i(e.width) && t.maxWidth && t.maxWidth < e.width,
                n = i(e.height) && t.maxHeight && t.maxHeight < e.height,
                r = i(e.width) && t.minWidth && t.minWidth > e.width,
                o = i(e.height) && t.minHeight && t.minHeight > e.height,
                h = this.originalPosition.left + this.originalSize.width, l = this.position.top + this.size.height,
                u = /sw|nw|w/.test(s), d = /nw|ne|n/.test(s);
            return r && (e.width = t.minWidth), o && (e.height = t.minHeight), a && (e.width = t.maxWidth), n && (e.height = t.maxHeight), r && u && (e.left = h - t.minWidth), a && u && (e.left = h - t.maxWidth), o && d && (e.top = l - t.minHeight), n && d && (e.top = l - t.maxHeight), e.width || e.height || e.left || !e.top ? e.width || e.height || e.top || !e.left || (e.left = null) : e.top = null, e
        },
        _proportionallyResize: function () {
            if (this._proportionallyResizeElements.length) {
                var e, t, i, s, a, n = this.helper || this.element;
                for (e = 0; this._proportionallyResizeElements.length > e; e++) {
                    if (a = this._proportionallyResizeElements[e], !this.borderDif) for (this.borderDif = [], i = [a.css("borderTopWidth"), a.css("borderRightWidth"), a.css("borderBottomWidth"), a.css("borderLeftWidth")], s = [a.css("paddingTop"), a.css("paddingRight"), a.css("paddingBottom"), a.css("paddingLeft")], t = 0; i.length > t; t++) this.borderDif[t] = (parseInt(i[t], 10) || 0) + (parseInt(s[t], 10) || 0);
                    a.css({
                        height: n.height() - this.borderDif[0] - this.borderDif[2] || 0,
                        width: n.width() - this.borderDif[1] - this.borderDif[3] || 0
                    })
                }
            }
        },
        _renderProxy: function () {
            var t = this.element, i = this.options;
            this.elementOffset = t.offset(), this._helper ? (this.helper = this.helper || e("<div style='overflow:hidden;'></div>"), this.helper.addClass(this._helper).css({
                width: this.element.outerWidth() - 1,
                height: this.element.outerHeight() - 1,
                position: "absolute",
                left: this.elementOffset.left + "px",
                top: this.elementOffset.top + "px",
                zIndex: ++i.zIndex
            }), this.helper.appendTo("body").disableSelection()) : this.helper = this.element
        },
        _change: {
            e: function (e, t) {
                return {width: this.originalSize.width + t}
            }, w: function (e, t) {
                var i = this.originalSize, s = this.originalPosition;
                return {left: s.left + t, width: i.width - t}
            }, n: function (e, t, i) {
                var s = this.originalSize, a = this.originalPosition;
                return {top: a.top + i, height: s.height - i}
            }, s: function (e, t, i) {
                return {height: this.originalSize.height + i}
            }, se: function (t, i, s) {
                return e.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [t, i, s]))
            }, sw: function (t, i, s) {
                return e.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [t, i, s]))
            }, ne: function (t, i, s) {
                return e.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [t, i, s]))
            }, nw: function (t, i, s) {
                return e.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [t, i, s]))
            }
        },
        _propagate: function (t, i) {
            e.ui.plugin.call(this, t, [i, this.ui()]), "resize" !== t && this._trigger(t, i, this.ui())
        },
        plugins: {},
        ui: function () {
            return {
                originalElement: this.originalElement,
                element: this.element,
                helper: this.helper,
                position: this.position,
                size: this.size,
                originalSize: this.originalSize,
                originalPosition: this.originalPosition
            }
        }
    }), e.ui.plugin.add("resizable", "animate", {
        stop: function (t) {
            var i = e(this).data("ui-resizable"), s = i.options, a = i._proportionallyResizeElements,
                n = a.length && /textarea/i.test(a[0].nodeName),
                r = n && e.ui.hasScroll(a[0], "left") ? 0 : i.sizeDiff.height, o = n ? 0 : i.sizeDiff.width,
                h = {width: i.size.width - o, height: i.size.height - r},
                l = parseInt(i.element.css("left"), 10) + (i.position.left - i.originalPosition.left) || null,
                u = parseInt(i.element.css("top"), 10) + (i.position.top - i.originalPosition.top) || null;
            i.element.animate(e.extend(h, u && l ? {top: u, left: l} : {}), {
                duration: s.animateDuration,
                easing: s.animateEasing,
                step: function () {
                    var s = {
                        width: parseInt(i.element.css("width"), 10),
                        height: parseInt(i.element.css("height"), 10),
                        top: parseInt(i.element.css("top"), 10),
                        left: parseInt(i.element.css("left"), 10)
                    };
                    a && a.length && e(a[0]).css({
                        width: s.width,
                        height: s.height
                    }), i._updateCache(s), i._propagate("resize", t)
                }
            })
        }
    }), e.ui.plugin.add("resizable", "containment", {
        start: function () {
            var i, s, a, n, r, o, h, l = e(this).data("ui-resizable"), u = l.options, d = l.element, c = u.containment,
                p = c instanceof e ? c.get(0) : /parent/.test(c) ? d.parent().get(0) : c;
            p && (l.containerElement = e(p), /document/.test(c) || c === document ? (l.containerOffset = {
                left: 0,
                top: 0
            }, l.containerPosition = {left: 0, top: 0}, l.parentData = {
                element: e(document),
                left: 0,
                top: 0,
                width: e(document).width(),
                height: e(document).height() || document.body.parentNode.scrollHeight
            }) : (i = e(p), s = [], e(["Top", "Right", "Left", "Bottom"]).each(function (e, a) {
                s[e] = t(i.css("padding" + a))
            }), l.containerOffset = i.offset(), l.containerPosition = i.position(), l.containerSize = {
                height: i.innerHeight() - s[3],
                width: i.innerWidth() - s[1]
            }, a = l.containerOffset, n = l.containerSize.height, r = l.containerSize.width, o = e.ui.hasScroll(p, "left") ? p.scrollWidth : r, h = e.ui.hasScroll(p) ? p.scrollHeight : n, l.parentData = {
                element: p,
                left: a.left,
                top: a.top,
                width: o,
                height: h
            }))
        }, resize: function (t) {
            var i, s, a, n, r = e(this).data("ui-resizable"), o = r.options, h = r.containerOffset, l = r.position,
                u = r._aspectRatio || t.shiftKey, d = {top: 0, left: 0}, c = r.containerElement;
            c[0] !== document && /static/.test(c.css("position")) && (d = h), l.left < (r._helper ? h.left : 0) && (r.size.width = r.size.width + (r._helper ? r.position.left - h.left : r.position.left - d.left), u && (r.size.height = r.size.width / r.aspectRatio), r.position.left = o.helper ? h.left : 0), l.top < (r._helper ? h.top : 0) && (r.size.height = r.size.height + (r._helper ? r.position.top - h.top : r.position.top), u && (r.size.width = r.size.height * r.aspectRatio), r.position.top = r._helper ? h.top : 0), r.offset.left = r.parentData.left + r.position.left, r.offset.top = r.parentData.top + r.position.top, i = Math.abs((r._helper ? r.offset.left - d.left : r.offset.left - d.left) + r.sizeDiff.width), s = Math.abs((r._helper ? r.offset.top - d.top : r.offset.top - h.top) + r.sizeDiff.height), a = r.containerElement.get(0) === r.element.parent().get(0), n = /relative|absolute/.test(r.containerElement.css("position")), a && n && (i -= Math.abs(r.parentData.left)), i + r.size.width >= r.parentData.width && (r.size.width = r.parentData.width - i, u && (r.size.height = r.size.width / r.aspectRatio)), s + r.size.height >= r.parentData.height && (r.size.height = r.parentData.height - s, u && (r.size.width = r.size.height * r.aspectRatio))
        }, stop: function () {
            var t = e(this).data("ui-resizable"), i = t.options, s = t.containerOffset, a = t.containerPosition,
                n = t.containerElement, r = e(t.helper), o = r.offset(), h = r.outerWidth() - t.sizeDiff.width,
                l = r.outerHeight() - t.sizeDiff.height;
            t._helper && !i.animate && /relative/.test(n.css("position")) && e(this).css({
                left: o.left - a.left - s.left,
                width: h,
                height: l
            }), t._helper && !i.animate && /static/.test(n.css("position")) && e(this).css({
                left: o.left - a.left - s.left,
                width: h,
                height: l
            })
        }
    }), e.ui.plugin.add("resizable", "alsoResize", {
        start: function () {
            var t = e(this).data("ui-resizable"), i = t.options, s = function (t) {
                e(t).each(function () {
                    var t = e(this);
                    t.data("ui-resizable-alsoresize", {
                        width: parseInt(t.width(), 10),
                        height: parseInt(t.height(), 10),
                        left: parseInt(t.css("left"), 10),
                        top: parseInt(t.css("top"), 10)
                    })
                })
            };
            "object" != typeof i.alsoResize || i.alsoResize.parentNode ? s(i.alsoResize) : i.alsoResize.length ? (i.alsoResize = i.alsoResize[0], s(i.alsoResize)) : e.each(i.alsoResize, function (e) {
                s(e)
            })
        }, resize: function (t, i) {
            var s = e(this).data("ui-resizable"), a = s.options, n = s.originalSize, r = s.originalPosition, o = {
                height: s.size.height - n.height || 0,
                width: s.size.width - n.width || 0,
                top: s.position.top - r.top || 0,
                left: s.position.left - r.left || 0
            }, h = function (t, s) {
                e(t).each(function () {
                    var t = e(this), a = e(this).data("ui-resizable-alsoresize"), n = {},
                        r = s && s.length ? s : t.parents(i.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                    e.each(r, function (e, t) {
                        var i = (a[t] || 0) + (o[t] || 0);
                        i && i >= 0 && (n[t] = i || null)
                    }), t.css(n)
                })
            };
            "object" != typeof a.alsoResize || a.alsoResize.nodeType ? h(a.alsoResize) : e.each(a.alsoResize, function (e, t) {
                h(e, t)
            })
        }, stop: function () {
            e(this).removeData("resizable-alsoresize")
        }
    }), e.ui.plugin.add("resizable", "ghost", {
        start: function () {
            var t = e(this).data("ui-resizable"), i = t.options, s = t.size;
            t.ghost = t.originalElement.clone(), t.ghost.css({
                opacity: .25,
                display: "block",
                position: "relative",
                height: s.height,
                width: s.width,
                margin: 0,
                left: 0,
                top: 0
            }).addClass("ui-resizable-ghost").addClass("string" == typeof i.ghost ? i.ghost : ""), t.ghost.appendTo(t.helper)
        }, resize: function () {
            var t = e(this).data("ui-resizable");
            t.ghost && t.ghost.css({position: "relative", height: t.size.height, width: t.size.width})
        }, stop: function () {
            var t = e(this).data("ui-resizable");
            t.ghost && t.helper && t.helper.get(0).removeChild(t.ghost.get(0))
        }
    }), e.ui.plugin.add("resizable", "grid", {
        resize: function () {
            var t = e(this).data("ui-resizable"), i = t.options, s = t.size, a = t.originalSize, n = t.originalPosition,
                r = t.axis, o = "number" == typeof i.grid ? [i.grid, i.grid] : i.grid, h = o[0] || 1, l = o[1] || 1,
                u = Math.round((s.width - a.width) / h) * h, d = Math.round((s.height - a.height) / l) * l,
                c = a.width + u, p = a.height + d, m = i.maxWidth && c > i.maxWidth, f = i.maxHeight && p > i.maxHeight,
                g = i.minWidth && i.minWidth > c, v = i.minHeight && i.minHeight > p;
            i.grid = o, g && (c += h), v && (p += l), m && (c -= h), f && (p -= l), /^(se|s|e)$/.test(r) ? (t.size.width = c, t.size.height = p) : /^(ne)$/.test(r) ? (t.size.width = c, t.size.height = p, t.position.top = n.top - d) : /^(sw)$/.test(r) ? (t.size.width = c, t.size.height = p, t.position.left = n.left - u) : (p - l > 0 ? (t.size.height = p, t.position.top = n.top - d) : (t.size.height = l, t.position.top = n.top + a.height - l), c - h > 0 ? (t.size.width = c, t.position.left = n.left - u) : (t.size.width = h, t.position.left = n.left + a.width - h))
        }
    })
})(jQuery);
(function (e) {
    e.widget("ui.selectable", e.ui.mouse, {
        version: "1.10.4",
        options: {
            appendTo: "body",
            autoRefresh: !0,
            distance: 0,
            filter: "*",
            tolerance: "touch",
            selected: null,
            selecting: null,
            start: null,
            stop: null,
            unselected: null,
            unselecting: null
        },
        _create: function () {
            var t, i = this;
            this.element.addClass("ui-selectable"), this.dragged = !1, this.refresh = function () {
                t = e(i.options.filter, i.element[0]), t.addClass("ui-selectee"), t.each(function () {
                    var t = e(this), i = t.offset();
                    e.data(this, "selectable-item", {
                        element: this,
                        $element: t,
                        left: i.left,
                        top: i.top,
                        right: i.left + t.outerWidth(),
                        bottom: i.top + t.outerHeight(),
                        startselected: !1,
                        selected: t.hasClass("ui-selected"),
                        selecting: t.hasClass("ui-selecting"),
                        unselecting: t.hasClass("ui-unselecting")
                    })
                })
            }, this.refresh(), this.selectees = t.addClass("ui-selectee"), this._mouseInit(), this.helper = e("<div class='ui-selectable-helper'></div>")
        },
        _destroy: function () {
            this.selectees.removeClass("ui-selectee").removeData("selectable-item"), this.element.removeClass("ui-selectable ui-selectable-disabled"), this._mouseDestroy()
        },
        _mouseStart: function (t) {
            var i = this, s = this.options;
            this.opos = [t.pageX, t.pageY], this.options.disabled || (this.selectees = e(s.filter, this.element[0]), this._trigger("start", t), e(s.appendTo).append(this.helper), this.helper.css({
                left: t.pageX,
                top: t.pageY,
                width: 0,
                height: 0
            }), s.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function () {
                var s = e.data(this, "selectable-item");
                s.startselected = !0, t.metaKey || t.ctrlKey || (s.$element.removeClass("ui-selected"), s.selected = !1, s.$element.addClass("ui-unselecting"), s.unselecting = !0, i._trigger("unselecting", t, {unselecting: s.element}))
            }), e(t.target).parents().addBack().each(function () {
                var s, a = e.data(this, "selectable-item");
                return a ? (s = !t.metaKey && !t.ctrlKey || !a.$element.hasClass("ui-selected"), a.$element.removeClass(s ? "ui-unselecting" : "ui-selected").addClass(s ? "ui-selecting" : "ui-unselecting"), a.unselecting = !s, a.selecting = s, a.selected = s, s ? i._trigger("selecting", t, {selecting: a.element}) : i._trigger("unselecting", t, {unselecting: a.element}), !1) : undefined
            }))
        },
        _mouseDrag: function (t) {
            if (this.dragged = !0, !this.options.disabled) {
                var i, s = this, a = this.options, n = this.opos[0], r = this.opos[1], o = t.pageX, h = t.pageY;
                return n > o && (i = o, o = n, n = i), r > h && (i = h, h = r, r = i), this.helper.css({
                    left: n,
                    top: r,
                    width: o - n,
                    height: h - r
                }), this.selectees.each(function () {
                    var i = e.data(this, "selectable-item"), l = !1;
                    i && i.element !== s.element[0] && ("touch" === a.tolerance ? l = !(i.left > o || n > i.right || i.top > h || r > i.bottom) : "fit" === a.tolerance && (l = i.left > n && o > i.right && i.top > r && h > i.bottom), l ? (i.selected && (i.$element.removeClass("ui-selected"), i.selected = !1), i.unselecting && (i.$element.removeClass("ui-unselecting"), i.unselecting = !1), i.selecting || (i.$element.addClass("ui-selecting"), i.selecting = !0, s._trigger("selecting", t, {selecting: i.element}))) : (i.selecting && ((t.metaKey || t.ctrlKey) && i.startselected ? (i.$element.removeClass("ui-selecting"), i.selecting = !1, i.$element.addClass("ui-selected"), i.selected = !0) : (i.$element.removeClass("ui-selecting"), i.selecting = !1, i.startselected && (i.$element.addClass("ui-unselecting"), i.unselecting = !0), s._trigger("unselecting", t, {unselecting: i.element}))), i.selected && (t.metaKey || t.ctrlKey || i.startselected || (i.$element.removeClass("ui-selected"), i.selected = !1, i.$element.addClass("ui-unselecting"), i.unselecting = !0, s._trigger("unselecting", t, {unselecting: i.element})))))
                }), !1
            }
        },
        _mouseStop: function (t) {
            var i = this;
            return this.dragged = !1, e(".ui-unselecting", this.element[0]).each(function () {
                var s = e.data(this, "selectable-item");
                s.$element.removeClass("ui-unselecting"), s.unselecting = !1, s.startselected = !1, i._trigger("unselected", t, {unselected: s.element})
            }), e(".ui-selecting", this.element[0]).each(function () {
                var s = e.data(this, "selectable-item");
                s.$element.removeClass("ui-selecting").addClass("ui-selected"), s.selecting = !1, s.selected = !0, s.startselected = !0, i._trigger("selected", t, {selected: s.element})
            }), this._trigger("stop", t), this.helper.remove(), !1
        }
    })
})(jQuery);
(function (e) {
    function t(e, t, i) {
        return e > t && t + i > e
    }

    function i(e) {
        return /left|right/.test(e.css("float")) || /inline|table-cell/.test(e.css("display"))
    }

    e.widget("ui.sortable", e.ui.mouse, {
        version: "1.10.4",
        widgetEventPrefix: "sort",
        ready: !1,
        options: {
            appendTo: "parent",
            axis: !1,
            connectWith: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            dropOnEmpty: !0,
            forcePlaceholderSize: !1,
            forceHelperSize: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            items: "> *",
            opacity: !1,
            placeholder: !1,
            revert: !1,
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            scope: "default",
            tolerance: "intersect",
            zIndex: 1e3,
            activate: null,
            beforeStop: null,
            change: null,
            deactivate: null,
            out: null,
            over: null,
            receive: null,
            remove: null,
            sort: null,
            start: null,
            stop: null,
            update: null
        },
        _create: function () {
            var e = this.options;
            this.containerCache = {}, this.element.addClass("ui-sortable"), this.refresh(), this.floating = this.items.length ? "x" === e.axis || i(this.items[0].item) : !1, this.offset = this.element.offset(), this._mouseInit(), this.ready = !0
        },
        _destroy: function () {
            this.element.removeClass("ui-sortable ui-sortable-disabled"), this._mouseDestroy();
            for (var e = this.items.length - 1; e >= 0; e--) this.items[e].item.removeData(this.widgetName + "-item");
            return this
        },
        _setOption: function (t, i) {
            "disabled" === t ? (this.options[t] = i, this.widget().toggleClass("ui-sortable-disabled", !!i)) : e.Widget.prototype._setOption.apply(this, arguments)
        },
        _mouseCapture: function (t, i) {
            var s = null, a = !1, n = this;
            return this.reverting ? !1 : this.options.disabled || "static" === this.options.type ? !1 : (this._refreshItems(t), e(t.target).parents().each(function () {
                return e.data(this, n.widgetName + "-item") === n ? (s = e(this), !1) : undefined
            }), e.data(t.target, n.widgetName + "-item") === n && (s = e(t.target)), s ? !this.options.handle || i || (e(this.options.handle, s).find("*").addBack().each(function () {
                this === t.target && (a = !0)
            }), a) ? (this.currentItem = s, this._removeCurrentsFromItems(), !0) : !1 : !1)
        },
        _mouseStart: function (t, i, s) {
            var a, n, r = this.options;
            if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(t), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
                    top: this.offset.top - this.margins.top,
                    left: this.offset.left - this.margins.left
                }, e.extend(this.offset, {
                    click: {left: t.pageX - this.offset.left, top: t.pageY - this.offset.top},
                    parent: this._getParentOffset(),
                    relative: this._getRelativeOffset()
                }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(t), this.originalPageX = t.pageX, this.originalPageY = t.pageY, r.cursorAt && this._adjustOffsetFromHelper(r.cursorAt), this.domPosition = {
                    prev: this.currentItem.prev()[0],
                    parent: this.currentItem.parent()[0]
                }, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), r.containment && this._setContainment(), r.cursor && "auto" !== r.cursor && (n = this.document.find("body"), this.storedCursor = n.css("cursor"), n.css("cursor", r.cursor), this.storedStylesheet = e("<style>*{ cursor: " + r.cursor + " !important; }</style>").appendTo(n)), r.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", r.opacity)), r.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", r.zIndex)), this.scrollParent[0] !== document && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", t, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !s) for (a = this.containers.length - 1; a >= 0; a--) this.containers[a]._trigger("activate", t, this._uiHash(this));
            return e.ui.ddmanager && (e.ui.ddmanager.current = this), e.ui.ddmanager && !r.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t), this.dragging = !0, this.helper.addClass("ui-sortable-helper"), this._mouseDrag(t), !0
        },
        _mouseDrag: function (t) {
            var i, s, a, n, r = this.options, o = !1;
            for (this.position = this._generatePosition(t), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== document && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - t.pageY < r.scrollSensitivity ? this.scrollParent[0].scrollTop = o = this.scrollParent[0].scrollTop + r.scrollSpeed : t.pageY - this.overflowOffset.top < r.scrollSensitivity && (this.scrollParent[0].scrollTop = o = this.scrollParent[0].scrollTop - r.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - t.pageX < r.scrollSensitivity ? this.scrollParent[0].scrollLeft = o = this.scrollParent[0].scrollLeft + r.scrollSpeed : t.pageX - this.overflowOffset.left < r.scrollSensitivity && (this.scrollParent[0].scrollLeft = o = this.scrollParent[0].scrollLeft - r.scrollSpeed)) : (t.pageY - e(document).scrollTop() < r.scrollSensitivity ? o = e(document).scrollTop(e(document).scrollTop() - r.scrollSpeed) : e(window).height() - (t.pageY - e(document).scrollTop()) < r.scrollSensitivity && (o = e(document).scrollTop(e(document).scrollTop() + r.scrollSpeed)), t.pageX - e(document).scrollLeft() < r.scrollSensitivity ? o = e(document).scrollLeft(e(document).scrollLeft() - r.scrollSpeed) : e(window).width() - (t.pageX - e(document).scrollLeft()) < r.scrollSensitivity && (o = e(document).scrollLeft(e(document).scrollLeft() + r.scrollSpeed))), o !== !1 && e.ui.ddmanager && !r.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t)), this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), i = this.items.length - 1; i >= 0; i--) if (s = this.items[i], a = s.item[0], n = this._intersectsWithPointer(s), n && s.instance === this.currentContainer && a !== this.currentItem[0] && this.placeholder[1 === n ? "next" : "prev"]()[0] !== a && !e.contains(this.placeholder[0], a) && ("semi-dynamic" === this.options.type ? !e.contains(this.element[0], a) : !0)) {
                if (this.direction = 1 === n ? "down" : "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(s)) break;
                this._rearrange(t, s), this._trigger("change", t, this._uiHash());
                break
            }
            return this._contactContainers(t), e.ui.ddmanager && e.ui.ddmanager.drag(this, t), this._trigger("sort", t, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
        },
        _mouseStop: function (t, i) {
            if (t) {
                if (e.ui.ddmanager && !this.options.dropBehaviour && e.ui.ddmanager.drop(this, t), this.options.revert) {
                    var s = this, a = this.placeholder.offset(), n = this.options.axis, r = {};
                    n && "x" !== n || (r.left = a.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollLeft)), n && "y" !== n || (r.top = a.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollTop)), this.reverting = !0, e(this.helper).animate(r, parseInt(this.options.revert, 10) || 500, function () {
                        s._clear(t)
                    })
                } else this._clear(t, i);
                return !1
            }
        },
        cancel: function () {
            if (this.dragging) {
                this._mouseUp({target: null}), "original" === this.options.helper ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
                for (var t = this.containers.length - 1; t >= 0; t--) this.containers[t]._trigger("deactivate", null, this._uiHash(this)), this.containers[t].containerCache.over && (this.containers[t]._trigger("out", null, this._uiHash(this)), this.containers[t].containerCache.over = 0)
            }
            return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), e.extend(this, {
                helper: null,
                dragging: !1,
                reverting: !1,
                _noFinalSort: null
            }), this.domPosition.prev ? e(this.domPosition.prev).after(this.currentItem) : e(this.domPosition.parent).prepend(this.currentItem)), this
        },
        serialize: function (t) {
            var i = this._getItemsAsjQuery(t && t.connected), s = [];
            return t = t || {}, e(i).each(function () {
                var i = (e(t.item || this).attr(t.attribute || "id") || "").match(t.expression || /(.+)[\-=_](.+)/);
                i && s.push((t.key || i[1] + "[]") + "=" + (t.key && t.expression ? i[1] : i[2]))
            }), !s.length && t.key && s.push(t.key + "="), s.join("&")
        },
        toArray: function (t) {
            var i = this._getItemsAsjQuery(t && t.connected), s = [];
            return t = t || {}, i.each(function () {
                s.push(e(t.item || this).attr(t.attribute || "id") || "")
            }), s
        },
        _intersectsWith: function (e) {
            var t = this.positionAbs.left, i = t + this.helperProportions.width, s = this.positionAbs.top,
                a = s + this.helperProportions.height, n = e.left, r = n + e.width, o = e.top, h = o + e.height,
                l = this.offset.click.top, u = this.offset.click.left,
                d = "x" === this.options.axis || s + l > o && h > s + l,
                c = "y" === this.options.axis || t + u > n && r > t + u, p = d && c;
            return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > e[this.floating ? "width" : "height"] ? p : t + this.helperProportions.width / 2 > n && r > i - this.helperProportions.width / 2 && s + this.helperProportions.height / 2 > o && h > a - this.helperProportions.height / 2
        },
        _intersectsWithPointer: function (e) {
            var i = "x" === this.options.axis || t(this.positionAbs.top + this.offset.click.top, e.top, e.height),
                s = "y" === this.options.axis || t(this.positionAbs.left + this.offset.click.left, e.left, e.width),
                a = i && s, n = this._getDragVerticalDirection(), r = this._getDragHorizontalDirection();
            return a ? this.floating ? r && "right" === r || "down" === n ? 2 : 1 : n && ("down" === n ? 2 : 1) : !1
        },
        _intersectsWithSides: function (e) {
            var i = t(this.positionAbs.top + this.offset.click.top, e.top + e.height / 2, e.height),
                s = t(this.positionAbs.left + this.offset.click.left, e.left + e.width / 2, e.width),
                a = this._getDragVerticalDirection(), n = this._getDragHorizontalDirection();
            return this.floating && n ? "right" === n && s || "left" === n && !s : a && ("down" === a && i || "up" === a && !i)
        },
        _getDragVerticalDirection: function () {
            var e = this.positionAbs.top - this.lastPositionAbs.top;
            return 0 !== e && (e > 0 ? "down" : "up")
        },
        _getDragHorizontalDirection: function () {
            var e = this.positionAbs.left - this.lastPositionAbs.left;
            return 0 !== e && (e > 0 ? "right" : "left")
        },
        refresh: function (e) {
            return this._refreshItems(e), this.refreshPositions(), this
        },
        _connectWith: function () {
            var e = this.options;
            return e.connectWith.constructor === String ? [e.connectWith] : e.connectWith
        },
        _getItemsAsjQuery: function (t) {
            function i() {
                o.push(this)
            }

            var s, a, n, r, o = [], h = [], l = this._connectWith();
            if (l && t) for (s = l.length - 1; s >= 0; s--) for (n = e(l[s]), a = n.length - 1; a >= 0; a--) r = e.data(n[a], this.widgetFullName), r && r !== this && !r.options.disabled && h.push([e.isFunction(r.options.items) ? r.options.items.call(r.element) : e(r.options.items, r.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), r]);
            for (h.push([e.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                options: this.options,
                item: this.currentItem
            }) : e(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]), s = h.length - 1; s >= 0; s--) h[s][0].each(i);
            return e(o)
        },
        _removeCurrentsFromItems: function () {
            var t = this.currentItem.find(":data(" + this.widgetName + "-item)");
            this.items = e.grep(this.items, function (e) {
                for (var i = 0; t.length > i; i++) if (t[i] === e.item[0]) return !1;
                return !0
            })
        },
        _refreshItems: function (t) {
            this.items = [], this.containers = [this];
            var i, s, a, n, r, o, h, l, u = this.items,
                d = [[e.isFunction(this.options.items) ? this.options.items.call(this.element[0], t, {item: this.currentItem}) : e(this.options.items, this.element), this]],
                c = this._connectWith();
            if (c && this.ready) for (i = c.length - 1; i >= 0; i--) for (a = e(c[i]), s = a.length - 1; s >= 0; s--) n = e.data(a[s], this.widgetFullName), n && n !== this && !n.options.disabled && (d.push([e.isFunction(n.options.items) ? n.options.items.call(n.element[0], t, {item: this.currentItem}) : e(n.options.items, n.element), n]), this.containers.push(n));
            for (i = d.length - 1; i >= 0; i--) for (r = d[i][1], o = d[i][0], s = 0, l = o.length; l > s; s++) h = e(o[s]), h.data(this.widgetName + "-item", r), u.push({
                item: h,
                instance: r,
                width: 0,
                height: 0,
                left: 0,
                top: 0
            })
        },
        refreshPositions: function (t) {
            this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
            var i, s, a, n;
            for (i = this.items.length - 1; i >= 0; i--) s = this.items[i], s.instance !== this.currentContainer && this.currentContainer && s.item[0] !== this.currentItem[0] || (a = this.options.toleranceElement ? e(this.options.toleranceElement, s.item) : s.item, t || (s.width = a.outerWidth(), s.height = a.outerHeight()), n = a.offset(), s.left = n.left, s.top = n.top);
            if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this); else for (i = this.containers.length - 1; i >= 0; i--) n = this.containers[i].element.offset(), this.containers[i].containerCache.left = n.left, this.containers[i].containerCache.top = n.top, this.containers[i].containerCache.width = this.containers[i].element.outerWidth(), this.containers[i].containerCache.height = this.containers[i].element.outerHeight();
            return this
        },
        _createPlaceholder: function (t) {
            t = t || this;
            var i, s = t.options;
            s.placeholder && s.placeholder.constructor !== String || (i = s.placeholder, s.placeholder = {
                element: function () {
                    var s = t.currentItem[0].nodeName.toLowerCase(),
                        a = e("<" + s + ">", t.document[0]).addClass(i || t.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper");
                    return "tr" === s ? t.currentItem.children().each(function () {
                        e("<td>&#160;</td>", t.document[0]).attr("colspan", e(this).attr("colspan") || 1).appendTo(a)
                    }) : "img" === s && a.attr("src", t.currentItem.attr("src")), i || a.css("visibility", "hidden"), a
                }, update: function (e, a) {
                    (!i || s.forcePlaceholderSize) && (a.height() || a.height(t.currentItem.innerHeight() - parseInt(t.currentItem.css("paddingTop") || 0, 10) - parseInt(t.currentItem.css("paddingBottom") || 0, 10)), a.width() || a.width(t.currentItem.innerWidth() - parseInt(t.currentItem.css("paddingLeft") || 0, 10) - parseInt(t.currentItem.css("paddingRight") || 0, 10)))
                }
            }), t.placeholder = e(s.placeholder.element.call(t.element, t.currentItem)), t.currentItem.after(t.placeholder), s.placeholder.update(t, t.placeholder)
        },
        _contactContainers: function (s) {
            var a, n, r, o, h, l, u, d, c, p, m = null, f = null;
            for (a = this.containers.length - 1; a >= 0; a--) if (!e.contains(this.currentItem[0], this.containers[a].element[0])) if (this._intersectsWith(this.containers[a].containerCache)) {
                if (m && e.contains(this.containers[a].element[0], m.element[0])) continue;
                m = this.containers[a], f = a
            } else this.containers[a].containerCache.over && (this.containers[a]._trigger("out", s, this._uiHash(this)), this.containers[a].containerCache.over = 0);
            if (m) if (1 === this.containers.length) this.containers[f].containerCache.over || (this.containers[f]._trigger("over", s, this._uiHash(this)), this.containers[f].containerCache.over = 1); else {
                for (r = 1e4, o = null, p = m.floating || i(this.currentItem), h = p ? "left" : "top", l = p ? "width" : "height", u = this.positionAbs[h] + this.offset.click[h], n = this.items.length - 1; n >= 0; n--) e.contains(this.containers[f].element[0], this.items[n].item[0]) && this.items[n].item[0] !== this.currentItem[0] && (!p || t(this.positionAbs.top + this.offset.click.top, this.items[n].top, this.items[n].height)) && (d = this.items[n].item.offset()[h], c = !1, Math.abs(d - u) > Math.abs(d + this.items[n][l] - u) && (c = !0, d += this.items[n][l]), r > Math.abs(d - u) && (r = Math.abs(d - u), o = this.items[n], this.direction = c ? "up" : "down"));
                if (!o && !this.options.dropOnEmpty) return;
                if (this.currentContainer === this.containers[f]) return;
                o ? this._rearrange(s, o, null, !0) : this._rearrange(s, null, this.containers[f].element, !0), this._trigger("change", s, this._uiHash()), this.containers[f]._trigger("change", s, this._uiHash(this)), this.currentContainer = this.containers[f], this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[f]._trigger("over", s, this._uiHash(this)), this.containers[f].containerCache.over = 1
            }
        },
        _createHelper: function (t) {
            var i = this.options,
                s = e.isFunction(i.helper) ? e(i.helper.apply(this.element[0], [t, this.currentItem])) : "clone" === i.helper ? this.currentItem.clone() : this.currentItem;
            return s.parents("body").length || e("parent" !== i.appendTo ? i.appendTo : this.currentItem[0].parentNode)[0].appendChild(s[0]), s[0] === this.currentItem[0] && (this._storedCSS = {
                width: this.currentItem[0].style.width,
                height: this.currentItem[0].style.height,
                position: this.currentItem.css("position"),
                top: this.currentItem.css("top"),
                left: this.currentItem.css("left")
            }), (!s[0].style.width || i.forceHelperSize) && s.width(this.currentItem.width()), (!s[0].style.height || i.forceHelperSize) && s.height(this.currentItem.height()), s
        },
        _adjustOffsetFromHelper: function (t) {
            "string" == typeof t && (t = t.split(" ")), e.isArray(t) && (t = {
                left: +t[0],
                top: +t[1] || 0
            }), "left" in t && (this.offset.click.left = t.left + this.margins.left), "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left), "top" in t && (this.offset.click.top = t.top + this.margins.top), "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
        },
        _getParentOffset: function () {
            this.offsetParent = this.helper.offsetParent();
            var t = this.offsetParent.offset();
            return "absolute" === this.cssPosition && this.scrollParent[0] !== document && e.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && e.ui.ie) && (t = {
                top: 0,
                left: 0
            }), {
                top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function () {
            if ("relative" === this.cssPosition) {
                var e = this.currentItem.position();
                return {
                    top: e.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: e.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            }
            return {top: 0, left: 0}
        },
        _cacheMargins: function () {
            this.margins = {
                left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                top: parseInt(this.currentItem.css("marginTop"), 10) || 0
            }
        },
        _cacheHelperProportions: function () {
            this.helperProportions = {width: this.helper.outerWidth(), height: this.helper.outerHeight()}
        },
        _setContainment: function () {
            var t, i, s, a = this.options;
            "parent" === a.containment && (a.containment = this.helper[0].parentNode), ("document" === a.containment || "window" === a.containment) && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, e("document" === a.containment ? document : window).width() - this.helperProportions.width - this.margins.left, (e("document" === a.containment ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(a.containment) || (t = e(a.containment)[0], i = e(a.containment).offset(), s = "hidden" !== e(t).css("overflow"), this.containment = [i.left + (parseInt(e(t).css("borderLeftWidth"), 10) || 0) + (parseInt(e(t).css("paddingLeft"), 10) || 0) - this.margins.left, i.top + (parseInt(e(t).css("borderTopWidth"), 10) || 0) + (parseInt(e(t).css("paddingTop"), 10) || 0) - this.margins.top, i.left + (s ? Math.max(t.scrollWidth, t.offsetWidth) : t.offsetWidth) - (parseInt(e(t).css("borderLeftWidth"), 10) || 0) - (parseInt(e(t).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, i.top + (s ? Math.max(t.scrollHeight, t.offsetHeight) : t.offsetHeight) - (parseInt(e(t).css("borderTopWidth"), 10) || 0) - (parseInt(e(t).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top])
        },
        _convertPositionTo: function (t, i) {
            i || (i = this.position);
            var s = "absolute" === t ? 1 : -1,
                a = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                n = /(html|body)/i.test(a[0].tagName);
            return {
                top: i.top + this.offset.relative.top * s + this.offset.parent.top * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : n ? 0 : a.scrollTop()) * s,
                left: i.left + this.offset.relative.left * s + this.offset.parent.left * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : n ? 0 : a.scrollLeft()) * s
            }
        },
        _generatePosition: function (t) {
            var i, s, a = this.options, n = t.pageX, r = t.pageY,
                o = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                h = /(html|body)/i.test(o[0].tagName);
            return "relative" !== this.cssPosition || this.scrollParent[0] !== document && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), this.originalPosition && (this.containment && (t.pageX - this.offset.click.left < this.containment[0] && (n = this.containment[0] + this.offset.click.left), t.pageY - this.offset.click.top < this.containment[1] && (r = this.containment[1] + this.offset.click.top), t.pageX - this.offset.click.left > this.containment[2] && (n = this.containment[2] + this.offset.click.left), t.pageY - this.offset.click.top > this.containment[3] && (r = this.containment[3] + this.offset.click.top)), a.grid && (i = this.originalPageY + Math.round((r - this.originalPageY) / a.grid[1]) * a.grid[1], r = this.containment ? i - this.offset.click.top >= this.containment[1] && i - this.offset.click.top <= this.containment[3] ? i : i - this.offset.click.top >= this.containment[1] ? i - a.grid[1] : i + a.grid[1] : i, s = this.originalPageX + Math.round((n - this.originalPageX) / a.grid[0]) * a.grid[0], n = this.containment ? s - this.offset.click.left >= this.containment[0] && s - this.offset.click.left <= this.containment[2] ? s : s - this.offset.click.left >= this.containment[0] ? s - a.grid[0] : s + a.grid[0] : s)), {
                top: r - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : h ? 0 : o.scrollTop()),
                left: n - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : h ? 0 : o.scrollLeft())
            }
        },
        _rearrange: function (e, t, i, s) {
            i ? i[0].appendChild(this.placeholder[0]) : t.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? t.item[0] : t.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
            var a = this.counter;
            this._delay(function () {
                a === this.counter && this.refreshPositions(!s)
            })
        },
        _clear: function (e, t) {
            function i(e, t, i) {
                return function (s) {
                    i._trigger(e, s, t._uiHash(t))
                }
            }

            this.reverting = !1;
            var s, a = [];
            if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
                for (s in this._storedCSS) ("auto" === this._storedCSS[s] || "static" === this._storedCSS[s]) && (this._storedCSS[s] = "");
                this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
            } else this.currentItem.show();
            for (this.fromOutside && !t && a.push(function (e) {
                this._trigger("receive", e, this._uiHash(this.fromOutside))
            }), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || t || a.push(function (e) {
                this._trigger("update", e, this._uiHash())
            }), this !== this.currentContainer && (t || (a.push(function (e) {
                this._trigger("remove", e, this._uiHash())
            }), a.push(function (e) {
                return function (t) {
                    e._trigger("receive", t, this._uiHash(this))
                }
            }.call(this, this.currentContainer)), a.push(function (e) {
                return function (t) {
                    e._trigger("update", t, this._uiHash(this))
                }
            }.call(this, this.currentContainer)))), s = this.containers.length - 1; s >= 0; s--) t || a.push(i("deactivate", this, this.containers[s])), this.containers[s].containerCache.over && (a.push(i("out", this, this.containers[s])), this.containers[s].containerCache.over = 0);
            if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, this.cancelHelperRemoval) {
                if (!t) {
                    for (this._trigger("beforeStop", e, this._uiHash()), s = 0; a.length > s; s++) a[s].call(this, e);
                    this._trigger("stop", e, this._uiHash())
                }
                return this.fromOutside = !1, !1
            }
            if (t || this._trigger("beforeStop", e, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null, !t) {
                for (s = 0; a.length > s; s++) a[s].call(this, e);
                this._trigger("stop", e, this._uiHash())
            }
            return this.fromOutside = !1, !0
        },
        _trigger: function () {
            e.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel()
        },
        _uiHash: function (t) {
            var i = t || this;
            return {
                helper: i.helper,
                placeholder: i.placeholder || e([]),
                position: i.position,
                originalPosition: i.originalPosition,
                offset: i.positionAbs,
                item: i.currentItem,
                sender: t ? t.element : null
            }
        }
    })
})(jQuery);
(function (e) {
    var t = 0, i = {}, s = {};
    i.height = i.paddingTop = i.paddingBottom = i.borderTopWidth = i.borderBottomWidth = "hide", s.height = s.paddingTop = s.paddingBottom = s.borderTopWidth = s.borderBottomWidth = "show", e.widget("ui.accordion", {
        version: "1.10.4",
        options: {
            active: 0,
            animate: {},
            collapsible: !1,
            event: "click",
            header: "> li > :first-child,> :not(li):even",
            heightStyle: "auto",
            icons: {activeHeader: "ui-icon-triangle-1-s", header: "ui-icon-triangle-1-e"},
            activate: null,
            beforeActivate: null
        },
        _create: function () {
            var t = this.options;
            this.prevShow = this.prevHide = e(), this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role", "tablist"), t.collapsible || t.active !== !1 && null != t.active || (t.active = 0), this._processPanels(), 0 > t.active && (t.active += this.headers.length), this._refresh()
        },
        _getCreateEventData: function () {
            return {
                header: this.active,
                panel: this.active.length ? this.active.next() : e(),
                content: this.active.length ? this.active.next() : e()
            }
        },
        _createIcons: function () {
            var t = this.options.icons;
            t && (e("<span>").addClass("ui-accordion-header-icon ui-icon " + t.header).prependTo(this.headers), this.active.children(".ui-accordion-header-icon").removeClass(t.header).addClass(t.activeHeader), this.headers.addClass("ui-accordion-icons"))
        },
        _destroyIcons: function () {
            this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()
        },
        _destroy: function () {
            var e;
            this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"), this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").each(function () {
                /^ui-accordion/.test(this.id) && this.removeAttribute("id")
            }), this._destroyIcons(), e = this.headers.next().css("display", "").removeAttr("role").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").each(function () {
                /^ui-accordion/.test(this.id) && this.removeAttribute("id")
            }), "content" !== this.options.heightStyle && e.css("height", "")
        },
        _setOption: function (e, t) {
            return "active" === e ? (this._activate(t), undefined) : ("event" === e && (this.options.event && this._off(this.headers, this.options.event), this._setupEvents(t)), this._super(e, t), "collapsible" !== e || t || this.options.active !== !1 || this._activate(0), "icons" === e && (this._destroyIcons(), t && this._createIcons()), "disabled" === e && this.headers.add(this.headers.next()).toggleClass("ui-state-disabled", !!t), undefined)
        },
        _keydown: function (t) {
            if (!t.altKey && !t.ctrlKey) {
                var i = e.ui.keyCode, s = this.headers.length, a = this.headers.index(t.target), n = !1;
                switch (t.keyCode) {
                    case i.RIGHT:
                    case i.DOWN:
                        n = this.headers[(a + 1) % s];
                        break;
                    case i.LEFT:
                    case i.UP:
                        n = this.headers[(a - 1 + s) % s];
                        break;
                    case i.SPACE:
                    case i.ENTER:
                        this._eventHandler(t);
                        break;
                    case i.HOME:
                        n = this.headers[0];
                        break;
                    case i.END:
                        n = this.headers[s - 1]
                }
                n && (e(t.target).attr("tabIndex", -1), e(n).attr("tabIndex", 0), n.focus(), t.preventDefault())
            }
        },
        _panelKeyDown: function (t) {
            t.keyCode === e.ui.keyCode.UP && t.ctrlKey && e(t.currentTarget).prev().focus()
        },
        refresh: function () {
            var t = this.options;
            this._processPanels(), t.active === !1 && t.collapsible === !0 || !this.headers.length ? (t.active = !1, this.active = e()) : t.active === !1 ? this._activate(0) : this.active.length && !e.contains(this.element[0], this.active[0]) ? this.headers.length === this.headers.find(".ui-state-disabled").length ? (t.active = !1, this.active = e()) : this._activate(Math.max(0, t.active - 1)) : t.active = this.headers.index(this.active), this._destroyIcons(), this._refresh()
        },
        _processPanels: function () {
            this.headers = this.element.find(this.options.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all"), this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide()
        },
        _refresh: function () {
            var i, s = this.options, a = s.heightStyle, n = this.element.parent(),
                r = this.accordionId = "ui-accordion-" + (this.element.attr("id") || ++t);
            this.active = this._findActive(s.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all"), this.active.next().addClass("ui-accordion-content-active").show(), this.headers.attr("role", "tab").each(function (t) {
                var i = e(this), s = i.attr("id"), a = i.next(), n = a.attr("id");
                s || (s = r + "-header-" + t, i.attr("id", s)), n || (n = r + "-panel-" + t, a.attr("id", n)), i.attr("aria-controls", n), a.attr("aria-labelledby", s)
            }).next().attr("role", "tabpanel"), this.headers.not(this.active).attr({
                "aria-selected": "false",
                "aria-expanded": "false",
                tabIndex: -1
            }).next().attr({"aria-hidden": "true"}).hide(), this.active.length ? this.active.attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            }).next().attr({"aria-hidden": "false"}) : this.headers.eq(0).attr("tabIndex", 0), this._createIcons(), this._setupEvents(s.event), "fill" === a ? (i = n.height(), this.element.siblings(":visible").each(function () {
                var t = e(this), s = t.css("position");
                "absolute" !== s && "fixed" !== s && (i -= t.outerHeight(!0))
            }), this.headers.each(function () {
                i -= e(this).outerHeight(!0)
            }), this.headers.next().each(function () {
                e(this).height(Math.max(0, i - e(this).innerHeight() + e(this).height()))
            }).css("overflow", "auto")) : "auto" === a && (i = 0, this.headers.next().each(function () {
                i = Math.max(i, e(this).css("height", "").height())
            }).height(i))
        },
        _activate: function (t) {
            var i = this._findActive(t)[0];
            i !== this.active[0] && (i = i || this.active[0], this._eventHandler({
                target: i,
                currentTarget: i,
                preventDefault: e.noop
            }))
        },
        _findActive: function (t) {
            return "number" == typeof t ? this.headers.eq(t) : e()
        },
        _setupEvents: function (t) {
            var i = {keydown: "_keydown"};
            t && e.each(t.split(" "), function (e, t) {
                i[t] = "_eventHandler"
            }), this._off(this.headers.add(this.headers.next())), this._on(this.headers, i), this._on(this.headers.next(), {keydown: "_panelKeyDown"}), this._hoverable(this.headers), this._focusable(this.headers)
        },
        _eventHandler: function (t) {
            var i = this.options, s = this.active, a = e(t.currentTarget), n = a[0] === s[0], r = n && i.collapsible,
                o = r ? e() : a.next(), h = s.next(),
                l = {oldHeader: s, oldPanel: h, newHeader: r ? e() : a, newPanel: o};
            t.preventDefault(), n && !i.collapsible || this._trigger("beforeActivate", t, l) === !1 || (i.active = r ? !1 : this.headers.index(a), this.active = n ? e() : a, this._toggle(l), s.removeClass("ui-accordion-header-active ui-state-active"), i.icons && s.children(".ui-accordion-header-icon").removeClass(i.icons.activeHeader).addClass(i.icons.header), n || (a.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"), i.icons && a.children(".ui-accordion-header-icon").removeClass(i.icons.header).addClass(i.icons.activeHeader), a.next().addClass("ui-accordion-content-active")))
        },
        _toggle: function (t) {
            var i = t.newPanel, s = this.prevShow.length ? this.prevShow : t.oldPanel;
            this.prevShow.add(this.prevHide).stop(!0, !0), this.prevShow = i, this.prevHide = s, this.options.animate ? this._animate(i, s, t) : (s.hide(), i.show(), this._toggleComplete(t)), s.attr({"aria-hidden": "true"}), s.prev().attr("aria-selected", "false"), i.length && s.length ? s.prev().attr({
                tabIndex: -1,
                "aria-expanded": "false"
            }) : i.length && this.headers.filter(function () {
                return 0 === e(this).attr("tabIndex")
            }).attr("tabIndex", -1), i.attr("aria-hidden", "false").prev().attr({
                "aria-selected": "true",
                tabIndex: 0,
                "aria-expanded": "true"
            })
        },
        _animate: function (e, t, a) {
            var n, r, o, h = this, l = 0, u = e.length && (!t.length || e.index() < t.index()),
                d = this.options.animate || {}, c = u && d.down || d, p = function () {
                    h._toggleComplete(a)
                };
            return "number" == typeof c && (o = c), "string" == typeof c && (r = c), r = r || c.easing || d.easing, o = o || c.duration || d.duration, t.length ? e.length ? (n = e.show().outerHeight(), t.animate(i, {
                duration: o,
                easing: r,
                step: function (e, t) {
                    t.now = Math.round(e)
                }
            }), e.hide().animate(s, {
                duration: o, easing: r, complete: p, step: function (e, i) {
                    i.now = Math.round(e), "height" !== i.prop ? l += i.now : "content" !== h.options.heightStyle && (i.now = Math.round(n - t.outerHeight() - l), l = 0)
                }
            }), undefined) : t.animate(i, o, r, p) : e.animate(s, o, r, p)
        },
        _toggleComplete: function (e) {
            var t = e.oldPanel;
            t.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all"), t.length && (t.parent()[0].className = t.parent()[0].className), this._trigger("activate", null, e)
        }
    })
})(jQuery);
(function (e) {
    e.widget("ui.autocomplete", {
        version: "1.10.4",
        defaultElement: "<input>",
        options: {
            appendTo: null,
            autoFocus: !1,
            delay: 300,
            minLength: 1,
            position: {my: "left top", at: "left bottom", collision: "none"},
            source: null,
            change: null,
            close: null,
            focus: null,
            open: null,
            response: null,
            search: null,
            select: null
        },
        requestIndex: 0,
        pending: 0,
        _create: function () {
            var t, i, s, a = this.element[0].nodeName.toLowerCase(), n = "textarea" === a, r = "input" === a;
            this.isMultiLine = n ? !0 : r ? !1 : this.element.prop("isContentEditable"), this.valueMethod = this.element[n || r ? "val" : "text"], this.isNewMenu = !0, this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off"), this._on(this.element, {
                keydown: function (a) {
                    if (this.element.prop("readOnly")) return t = !0, s = !0, i = !0, undefined;
                    t = !1, s = !1, i = !1;
                    var n = e.ui.keyCode;
                    switch (a.keyCode) {
                        case n.PAGE_UP:
                            t = !0, this._move("previousPage", a);
                            break;
                        case n.PAGE_DOWN:
                            t = !0, this._move("nextPage", a);
                            break;
                        case n.UP:
                            t = !0, this._keyEvent("previous", a);
                            break;
                        case n.DOWN:
                            t = !0, this._keyEvent("next", a);
                            break;
                        case n.ENTER:
                        case n.NUMPAD_ENTER:
                            this.menu.active && (t = !0, a.preventDefault(), this.menu.select(a));
                            break;
                        case n.TAB:
                            this.menu.active && this.menu.select(a);
                            break;
                        case n.ESCAPE:
                            this.menu.element.is(":visible") && (this._value(this.term), this.close(a), a.preventDefault());
                            break;
                        default:
                            i = !0, this._searchTimeout(a)
                    }
                }, keypress: function (s) {
                    if (t) return t = !1, (!this.isMultiLine || this.menu.element.is(":visible")) && s.preventDefault(), undefined;
                    if (!i) {
                        var a = e.ui.keyCode;
                        switch (s.keyCode) {
                            case a.PAGE_UP:
                                this._move("previousPage", s);
                                break;
                            case a.PAGE_DOWN:
                                this._move("nextPage", s);
                                break;
                            case a.UP:
                                this._keyEvent("previous", s);
                                break;
                            case a.DOWN:
                                this._keyEvent("next", s)
                        }
                    }
                }, input: function (e) {
                    return s ? (s = !1, e.preventDefault(), undefined) : (this._searchTimeout(e), undefined)
                }, focus: function () {
                    this.selectedItem = null, this.previous = this._value()
                }, blur: function (e) {
                    return this.cancelBlur ? (delete this.cancelBlur, undefined) : (clearTimeout(this.searching), this.close(e), this._change(e), undefined)
                }
            }), this._initSource(), this.menu = e("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({role: null}).hide().data("ui-menu"), this._on(this.menu.element, {
                mousedown: function (t) {
                    t.preventDefault(), this.cancelBlur = !0, this._delay(function () {
                        delete this.cancelBlur
                    });
                    var i = this.menu.element[0];
                    e(t.target).closest(".ui-menu-item").length || this._delay(function () {
                        var t = this;
                        this.document.one("mousedown", function (s) {
                            s.target === t.element[0] || s.target === i || e.contains(i, s.target) || t.close()
                        })
                    })
                }, menufocus: function (t, i) {
                    if (this.isNewMenu && (this.isNewMenu = !1, t.originalEvent && /^mouse/.test(t.originalEvent.type))) return this.menu.blur(), this.document.one("mousemove", function () {
                        e(t.target).trigger(t.originalEvent)
                    }), undefined;
                    var s = i.item.data("ui-autocomplete-item");
                    !1 !== this._trigger("focus", t, {item: s}) ? t.originalEvent && /^key/.test(t.originalEvent.type) && this._value(s.value) : this.liveRegion.text(s.value)
                }, menuselect: function (e, t) {
                    var i = t.item.data("ui-autocomplete-item"), s = this.previous;
                    this.element[0] !== this.document[0].activeElement && (this.element.focus(), this.previous = s, this._delay(function () {
                        this.previous = s, this.selectedItem = i
                    })), !1 !== this._trigger("select", e, {item: i}) && this._value(i.value), this.term = this._value(), this.close(e), this.selectedItem = i
                }
            }), this.liveRegion = e("<span>", {
                role: "status",
                "aria-live": "polite"
            }).addClass("ui-helper-hidden-accessible").insertBefore(this.element), this._on(this.window, {
                beforeunload: function () {
                    this.element.removeAttr("autocomplete")
                }
            })
        },
        _destroy: function () {
            clearTimeout(this.searching), this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"), this.menu.element.remove(), this.liveRegion.remove()
        },
        _setOption: function (e, t) {
            this._super(e, t), "source" === e && this._initSource(), "appendTo" === e && this.menu.element.appendTo(this._appendTo()), "disabled" === e && t && this.xhr && this.xhr.abort()
        },
        _appendTo: function () {
            var t = this.options.appendTo;
            return t && (t = t.jquery || t.nodeType ? e(t) : this.document.find(t).eq(0)), t || (t = this.element.closest(".ui-front")), t.length || (t = this.document[0].body), t
        },
        _initSource: function () {
            var t, i, s = this;
            e.isArray(this.options.source) ? (t = this.options.source, this.source = function (i, s) {
                s(e.ui.autocomplete.filter(t, i.term))
            }) : "string" == typeof this.options.source ? (i = this.options.source, this.source = function (t, a) {
                s.xhr && s.xhr.abort(), s.xhr = e.ajax({
                    url: i, data: t, dataType: "json", success: function (e) {
                        a(e)
                    }, error: function () {
                        a([])
                    }
                })
            }) : this.source = this.options.source
        },
        _searchTimeout: function (e) {
            clearTimeout(this.searching), this.searching = this._delay(function () {
                this.term !== this._value() && (this.selectedItem = null, this.search(null, e))
            }, this.options.delay)
        },
        search: function (e, t) {
            return e = null != e ? e : this._value(), this.term = this._value(), e.length < this.options.minLength ? this.close(t) : this._trigger("search", t) !== !1 ? this._search(e) : undefined
        },
        _search: function (e) {
            this.pending++, this.element.addClass("ui-autocomplete-loading"), this.cancelSearch = !1, this.source({term: e}, this._response())
        },
        _response: function () {
            var t = ++this.requestIndex;
            return e.proxy(function (e) {
                t === this.requestIndex && this.__response(e), this.pending--, this.pending || this.element.removeClass("ui-autocomplete-loading")
            }, this)
        },
        __response: function (e) {
            e && (e = this._normalize(e)), this._trigger("response", null, {content: e}), !this.options.disabled && e && e.length && !this.cancelSearch ? (this._suggest(e), this._trigger("open")) : this._close()
        },
        close: function (e) {
            this.cancelSearch = !0, this._close(e)
        },
        _close: function (e) {
            this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", e))
        },
        _change: function (e) {
            this.previous !== this._value() && this._trigger("change", e, {item: this.selectedItem})
        },
        _normalize: function (t) {
            return t.length && t[0].label && t[0].value ? t : e.map(t, function (t) {
                return "string" == typeof t ? {label: t, value: t} : e.extend({
                    label: t.label || t.value,
                    value: t.value || t.label
                }, t)
            })
        },
        _suggest: function (t) {
            var i = this.menu.element.empty();
            this._renderMenu(i, t), this.isNewMenu = !0, this.menu.refresh(), i.show(), this._resizeMenu(), i.position(e.extend({of: this.element}, this.options.position)), this.options.autoFocus && this.menu.next()
        },
        _resizeMenu: function () {
            var e = this.menu.element;
            e.outerWidth(Math.max(e.width("").outerWidth() + 1, this.element.outerWidth()))
        },
        _renderMenu: function (t, i) {
            var s = this;
            e.each(i, function (e, i) {
                s._renderItemData(t, i)
            })
        },
        _renderItemData: function (e, t) {
            return this._renderItem(e, t).data("ui-autocomplete-item", t)
        },
        _renderItem: function (t, i) {
            return e("<li>").append(e("<a>").text(i.label)).appendTo(t)
        },
        _move: function (e, t) {
            return this.menu.element.is(":visible") ? this.menu.isFirstItem() && /^previous/.test(e) || this.menu.isLastItem() && /^next/.test(e) ? (this._value(this.term), this.menu.blur(), undefined) : (this.menu[e](t), undefined) : (this.search(null, t), undefined)
        },
        widget: function () {
            return this.menu.element
        },
        _value: function () {
            return this.valueMethod.apply(this.element, arguments)
        },
        _keyEvent: function (e, t) {
            (!this.isMultiLine || this.menu.element.is(":visible")) && (this._move(e, t), t.preventDefault())
        }
    }), e.extend(e.ui.autocomplete, {
        escapeRegex: function (e) {
            return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
        }, filter: function (t, i) {
            var s = RegExp(e.ui.autocomplete.escapeRegex(i), "i");
            return e.grep(t, function (e) {
                return s.test(e.label || e.value || e)
            })
        }
    }), e.widget("ui.autocomplete", e.ui.autocomplete, {
        options: {
            messages: {
                noResults: "No search results.",
                results: function (e) {
                    return e + (e > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
                }
            }
        }, __response: function (e) {
            var t;
            this._superApply(arguments), this.options.disabled || this.cancelSearch || (t = e && e.length ? this.options.messages.results(e.length) : this.options.messages.noResults, this.liveRegion.text(t))
        }
    })
})(jQuery);
(function (e) {
    var t, i = "ui-button ui-widget ui-state-default ui-corner-all",
        s = "ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",
        a = function () {
            var t = e(this);
            setTimeout(function () {
                t.find(":ui-button").button("refresh")
            }, 1)
        }, n = function (t) {
            var i = t.name, s = t.form, a = e([]);
            return i && (i = i.replace(/'/g, "\\'"), a = s ? e(s).find("[name='" + i + "']") : e("[name='" + i + "']", t.ownerDocument).filter(function () {
                return !this.form
            })), a
        };
    e.widget("ui.button", {
        version: "1.10.4",
        defaultElement: "<button>",
        options: {disabled: null, text: !0, label: null, icons: {primary: null, secondary: null}},
        _create: function () {
            this.element.closest("form").unbind("reset" + this.eventNamespace).bind("reset" + this.eventNamespace, a), "boolean" != typeof this.options.disabled ? this.options.disabled = !!this.element.prop("disabled") : this.element.prop("disabled", this.options.disabled), this._determineButtonType(), this.hasTitle = !!this.buttonElement.attr("title");
            var s = this, r = this.options, o = "checkbox" === this.type || "radio" === this.type,
                h = o ? "" : "ui-state-active";
            null === r.label && (r.label = "input" === this.type ? this.buttonElement.val() : this.buttonElement.html()), this._hoverable(this.buttonElement), this.buttonElement.addClass(i).attr("role", "button").bind("mouseenter" + this.eventNamespace, function () {
                r.disabled || this === t && e(this).addClass("ui-state-active")
            }).bind("mouseleave" + this.eventNamespace, function () {
                r.disabled || e(this).removeClass(h)
            }).bind("click" + this.eventNamespace, function (e) {
                r.disabled && (e.preventDefault(), e.stopImmediatePropagation())
            }), this._on({
                focus: function () {
                    this.buttonElement.addClass("ui-state-focus")
                }, blur: function () {
                    this.buttonElement.removeClass("ui-state-focus")
                }
            }), o && this.element.bind("change" + this.eventNamespace, function () {
                s.refresh()
            }), "checkbox" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function () {
                return r.disabled ? !1 : undefined
            }) : "radio" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function () {
                if (r.disabled) return !1;
                e(this).addClass("ui-state-active"), s.buttonElement.attr("aria-pressed", "true");
                var t = s.element[0];
                n(t).not(t).map(function () {
                    return e(this).button("widget")[0]
                }).removeClass("ui-state-active").attr("aria-pressed", "false")
            }) : (this.buttonElement.bind("mousedown" + this.eventNamespace, function () {
                return r.disabled ? !1 : (e(this).addClass("ui-state-active"), t = this, s.document.one("mouseup", function () {
                    t = null
                }), undefined)
            }).bind("mouseup" + this.eventNamespace, function () {
                return r.disabled ? !1 : (e(this).removeClass("ui-state-active"), undefined)
            }).bind("keydown" + this.eventNamespace, function (t) {
                return r.disabled ? !1 : ((t.keyCode === e.ui.keyCode.SPACE || t.keyCode === e.ui.keyCode.ENTER) && e(this).addClass("ui-state-active"), undefined)
            }).bind("keyup" + this.eventNamespace + " blur" + this.eventNamespace, function () {
                e(this).removeClass("ui-state-active")
            }), this.buttonElement.is("a") && this.buttonElement.keyup(function (t) {
                t.keyCode === e.ui.keyCode.SPACE && e(this).click()
            })), this._setOption("disabled", r.disabled), this._resetButton()
        },
        _determineButtonType: function () {
            var e, t, i;
            this.type = this.element.is("[type=checkbox]") ? "checkbox" : this.element.is("[type=radio]") ? "radio" : this.element.is("input") ? "input" : "button", "checkbox" === this.type || "radio" === this.type ? (e = this.element.parents().last(), t = "label[for='" + this.element.attr("id") + "']", this.buttonElement = e.find(t), this.buttonElement.length || (e = e.length ? e.siblings() : this.element.siblings(), this.buttonElement = e.filter(t), this.buttonElement.length || (this.buttonElement = e.find(t))), this.element.addClass("ui-helper-hidden-accessible"), i = this.element.is(":checked"), i && this.buttonElement.addClass("ui-state-active"), this.buttonElement.prop("aria-pressed", i)) : this.buttonElement = this.element
        },
        widget: function () {
            return this.buttonElement
        },
        _destroy: function () {
            this.element.removeClass("ui-helper-hidden-accessible"), this.buttonElement.removeClass(i + " ui-state-active " + s).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()), this.hasTitle || this.buttonElement.removeAttr("title")
        },
        _setOption: function (e, t) {
            return this._super(e, t), "disabled" === e ? (this.element.prop("disabled", !!t), t && this.buttonElement.removeClass("ui-state-focus"), undefined) : (this._resetButton(), undefined)
        },
        refresh: function () {
            var t = this.element.is("input, button") ? this.element.is(":disabled") : this.element.hasClass("ui-button-disabled");
            t !== this.options.disabled && this._setOption("disabled", t), "radio" === this.type ? n(this.element[0]).each(function () {
                e(this).is(":checked") ? e(this).button("widget").addClass("ui-state-active").attr("aria-pressed", "true") : e(this).button("widget").removeClass("ui-state-active").attr("aria-pressed", "false")
            }) : "checkbox" === this.type && (this.element.is(":checked") ? this.buttonElement.addClass("ui-state-active").attr("aria-pressed", "true") : this.buttonElement.removeClass("ui-state-active").attr("aria-pressed", "false"))
        },
        _resetButton: function () {
            if ("input" === this.type) return this.options.label && this.element.val(this.options.label), undefined;
            var t = this.buttonElement.removeClass(s),
                i = e("<span></span>", this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(t.empty()).text(),
                a = this.options.icons, n = a.primary && a.secondary, r = [];
            a.primary || a.secondary ? (this.options.text && r.push("ui-button-text-icon" + (n ? "s" : a.primary ? "-primary" : "-secondary")), a.primary && t.prepend("<span class='ui-button-icon-primary ui-icon " + a.primary + "'></span>"), a.secondary && t.append("<span class='ui-button-icon-secondary ui-icon " + a.secondary + "'></span>"), this.options.text || (r.push(n ? "ui-button-icons-only" : "ui-button-icon-only"), this.hasTitle || t.attr("title", e.trim(i)))) : r.push("ui-button-text-only"), t.addClass(r.join(" "))
        }
    }), e.widget("ui.buttonset", {
        version: "1.10.4",
        options: {items: "button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"},
        _create: function () {
            this.element.addClass("ui-buttonset")
        },
        _init: function () {
            this.refresh()
        },
        _setOption: function (e, t) {
            "disabled" === e && this.buttons.button("option", e, t), this._super(e, t)
        },
        refresh: function () {
            var t = "rtl" === this.element.css("direction");
            this.buttons = this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function () {
                return e(this).button("widget")[0]
            }).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(t ? "ui-corner-right" : "ui-corner-left").end().filter(":last").addClass(t ? "ui-corner-left" : "ui-corner-right").end().end()
        },
        _destroy: function () {
            this.element.removeClass("ui-buttonset"), this.buttons.map(function () {
                return e(this).button("widget")[0]
            }).removeClass("ui-corner-left ui-corner-right").end().button("destroy")
        }
    })
})(jQuery);
(function (e, t) {
    function i() {
        this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {
            closeText: "Done",
            prevText: "Prev",
            nextText: "Next",
            currentText: "Today",
            monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            weekHeader: "Wk",
            dateFormat: "mm/dd/yy",
            firstDay: 0,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }, this._defaults = {
            showOn: "focus",
            showAnim: "fadeIn",
            showOptions: {},
            defaultDate: null,
            appendText: "",
            buttonText: "...",
            buttonImage: "",
            buttonImageOnly: !1,
            hideIfNoPrevNext: !1,
            navigationAsDateFormat: !1,
            gotoCurrent: !1,
            changeMonth: !1,
            changeYear: !1,
            yearRange: "c-10:c+10",
            showOtherMonths: !1,
            selectOtherMonths: !1,
            showWeek: !1,
            calculateWeek: this.iso8601Week,
            shortYearCutoff: "+10",
            minDate: null,
            maxDate: null,
            duration: "fast",
            beforeShowDay: null,
            beforeShow: null,
            onSelect: null,
            onChangeMonthYear: null,
            onClose: null,
            numberOfMonths: 1,
            showCurrentAtPos: 0,
            stepMonths: 1,
            stepBigMonths: 12,
            altField: "",
            altFormat: "",
            constrainInput: !0,
            showButtonPanel: !1,
            autoSize: !1,
            disabled: !1
        }, e.extend(this._defaults, this.regional[""]), this.dpDiv = s(e("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
    }

    function s(t) {
        var i = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
        return t.delegate(i, "mouseout", function () {
            e(this).removeClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && e(this).removeClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && e(this).removeClass("ui-datepicker-next-hover")
        }).delegate(i, "mouseover", function () {
            e.datepicker._isDisabledDatepicker(n.inline ? t.parent()[0] : n.input[0]) || (e(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), e(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && e(this).addClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && e(this).addClass("ui-datepicker-next-hover"))
        })
    }

    function a(t, i) {
        e.extend(t, i);
        for (var s in i) null == i[s] && (t[s] = i[s]);
        return t
    }

    e.extend(e.ui, {datepicker: {version: "1.10.4"}});
    var n, o = "datepicker";
    e.extend(i.prototype, {
        markerClassName: "hasDatepicker",
        maxRows: 4,
        _widgetDatepicker: function () {
            return this.dpDiv
        },
        setDefaults: function (e) {
            return a(this._defaults, e || {}), this
        },
        _attachDatepicker: function (t, i) {
            var s, a, n;
            s = t.nodeName.toLowerCase(), a = "div" === s || "span" === s, t.id || (this.uuid += 1, t.id = "dp" + this.uuid), n = this._newInst(e(t), a), n.settings = e.extend({}, i || {}), "input" === s ? this._connectDatepicker(t, n) : a && this._inlineDatepicker(t, n)
        },
        _newInst: function (t, i) {
            var a = t[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1");
            return {
                id: a,
                input: t,
                selectedDay: 0,
                selectedMonth: 0,
                selectedYear: 0,
                drawMonth: 0,
                drawYear: 0,
                inline: i,
                dpDiv: i ? s(e("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv
            }
        },
        _connectDatepicker: function (t, i) {
            var s = e(t);
            i.append = e([]), i.trigger = e([]), s.hasClass(this.markerClassName) || (this._attachments(s, i), s.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp), this._autoSize(i), e.data(t, o, i), i.settings.disabled && this._disableDatepicker(t))
        },
        _attachments: function (t, i) {
            var s, a, n, o = this._get(i, "appendText"), r = this._get(i, "isRTL");
            i.append && i.append.remove(), o && (i.append = e("<span class='" + this._appendClass + "'>" + o + "</span>"), t[r ? "before" : "after"](i.append)), t.unbind("focus", this._showDatepicker), i.trigger && i.trigger.remove(), s = this._get(i, "showOn"), ("focus" === s || "both" === s) && t.focus(this._showDatepicker), ("button" === s || "both" === s) && (a = this._get(i, "buttonText"), n = this._get(i, "buttonImage"), i.trigger = e(this._get(i, "buttonImageOnly") ? e("<img/>").addClass(this._triggerClass).attr({
                src: n,
                alt: a,
                title: a
            }) : e("<button type='button'></button>").addClass(this._triggerClass).html(n ? e("<img/>").attr({
                src: n,
                alt: a,
                title: a
            }) : a)), t[r ? "before" : "after"](i.trigger), i.trigger.click(function () {
                return e.datepicker._datepickerShowing && e.datepicker._lastInput === t[0] ? e.datepicker._hideDatepicker() : e.datepicker._datepickerShowing && e.datepicker._lastInput !== t[0] ? (e.datepicker._hideDatepicker(), e.datepicker._showDatepicker(t[0])) : e.datepicker._showDatepicker(t[0]), !1
            }))
        },
        _autoSize: function (e) {
            if (this._get(e, "autoSize") && !e.inline) {
                var t, i, s, a, n = new Date(2009, 11, 20), o = this._get(e, "dateFormat");
                o.match(/[DM]/) && (t = function (e) {
                    for (i = 0, s = 0, a = 0; e.length > a; a++) e[a].length > i && (i = e[a].length, s = a);
                    return s
                }, n.setMonth(t(this._get(e, o.match(/MM/) ? "monthNames" : "monthNamesShort"))), n.setDate(t(this._get(e, o.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - n.getDay())), e.input.attr("size", this._formatDate(e, n).length)
            }
        },
        _inlineDatepicker: function (t, i) {
            var s = e(t);
            s.hasClass(this.markerClassName) || (s.addClass(this.markerClassName).append(i.dpDiv), e.data(t, o, i), this._setDate(i, this._getDefaultDate(i), !0), this._updateDatepicker(i), this._updateAlternate(i), i.settings.disabled && this._disableDatepicker(t), i.dpDiv.css("display", "block"))
        },
        _dialogDatepicker: function (t, i, s, n, r) {
            var h, l, u, d, c, p = this._dialogInst;
            return p || (this.uuid += 1, h = "dp" + this.uuid, this._dialogInput = e("<input type='text' id='" + h + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.keydown(this._doKeyDown), e("body").append(this._dialogInput), p = this._dialogInst = this._newInst(this._dialogInput, !1), p.settings = {}, e.data(this._dialogInput[0], o, p)), a(p.settings, n || {}), i = i && i.constructor === Date ? this._formatDate(p, i) : i, this._dialogInput.val(i), this._pos = r ? r.length ? r : [r.pageX, r.pageY] : null, this._pos || (l = document.documentElement.clientWidth, u = document.documentElement.clientHeight, d = document.documentElement.scrollLeft || document.body.scrollLeft, c = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [l / 2 - 100 + d, u / 2 - 150 + c]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), p.settings.onSelect = s, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), e.blockUI && e.blockUI(this.dpDiv), e.data(this._dialogInput[0], o, p), this
        },
        _destroyDatepicker: function (t) {
            var i, s = e(t), a = e.data(t, o);
            s.hasClass(this.markerClassName) && (i = t.nodeName.toLowerCase(), e.removeData(t, o), "input" === i ? (a.append.remove(), a.trigger.remove(), s.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : ("div" === i || "span" === i) && s.removeClass(this.markerClassName).empty())
        },
        _enableDatepicker: function (t) {
            var i, s, a = e(t), n = e.data(t, o);
            a.hasClass(this.markerClassName) && (i = t.nodeName.toLowerCase(), "input" === i ? (t.disabled = !1, n.trigger.filter("button").each(function () {
                this.disabled = !1
            }).end().filter("img").css({
                opacity: "1.0",
                cursor: ""
            })) : ("div" === i || "span" === i) && (s = a.children("." + this._inlineClass), s.children().removeClass("ui-state-disabled"), s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = e.map(this._disabledInputs, function (e) {
                return e === t ? null : e
            }))
        },
        _disableDatepicker: function (t) {
            var i, s, a = e(t), n = e.data(t, o);
            a.hasClass(this.markerClassName) && (i = t.nodeName.toLowerCase(), "input" === i ? (t.disabled = !0, n.trigger.filter("button").each(function () {
                this.disabled = !0
            }).end().filter("img").css({
                opacity: "0.5",
                cursor: "default"
            })) : ("div" === i || "span" === i) && (s = a.children("." + this._inlineClass), s.children().addClass("ui-state-disabled"), s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = e.map(this._disabledInputs, function (e) {
                return e === t ? null : e
            }), this._disabledInputs[this._disabledInputs.length] = t)
        },
        _isDisabledDatepicker: function (e) {
            if (!e) return !1;
            for (var t = 0; this._disabledInputs.length > t; t++) if (this._disabledInputs[t] === e) return !0;
            return !1
        },
        _getInst: function (t) {
            try {
                return e.data(t, o)
            } catch (i) {
                throw"Missing instance data for this datepicker"
            }
        },
        _optionDatepicker: function (i, s, n) {
            var o, r, h, l, u = this._getInst(i);
            return 2 === arguments.length && "string" == typeof s ? "defaults" === s ? e.extend({}, e.datepicker._defaults) : u ? "all" === s ? e.extend({}, u.settings) : this._get(u, s) : null : (o = s || {}, "string" == typeof s && (o = {}, o[s] = n), u && (this._curInst === u && this._hideDatepicker(), r = this._getDateDatepicker(i, !0), h = this._getMinMaxDate(u, "min"), l = this._getMinMaxDate(u, "max"), a(u.settings, o), null !== h && o.dateFormat !== t && o.minDate === t && (u.settings.minDate = this._formatDate(u, h)), null !== l && o.dateFormat !== t && o.maxDate === t && (u.settings.maxDate = this._formatDate(u, l)), "disabled" in o && (o.disabled ? this._disableDatepicker(i) : this._enableDatepicker(i)), this._attachments(e(i), u), this._autoSize(u), this._setDate(u, r), this._updateAlternate(u), this._updateDatepicker(u)), t)
        },
        _changeDatepicker: function (e, t, i) {
            this._optionDatepicker(e, t, i)
        },
        _refreshDatepicker: function (e) {
            var t = this._getInst(e);
            t && this._updateDatepicker(t)
        },
        _setDateDatepicker: function (e, t) {
            var i = this._getInst(e);
            i && (this._setDate(i, t), this._updateDatepicker(i), this._updateAlternate(i))
        },
        _getDateDatepicker: function (e, t) {
            var i = this._getInst(e);
            return i && !i.inline && this._setDateFromField(i, t), i ? this._getDate(i) : null
        },
        _doKeyDown: function (t) {
            var i, s, a, n = e.datepicker._getInst(t.target), o = !0, r = n.dpDiv.is(".ui-datepicker-rtl");
            if (n._keyEvent = !0, e.datepicker._datepickerShowing) switch (t.keyCode) {
                case 9:
                    e.datepicker._hideDatepicker(), o = !1;
                    break;
                case 13:
                    return a = e("td." + e.datepicker._dayOverClass + ":not(." + e.datepicker._currentClass + ")", n.dpDiv), a[0] && e.datepicker._selectDay(t.target, n.selectedMonth, n.selectedYear, a[0]), i = e.datepicker._get(n, "onSelect"), i ? (s = e.datepicker._formatDate(n), i.apply(n.input ? n.input[0] : null, [s, n])) : e.datepicker._hideDatepicker(), !1;
                case 27:
                    e.datepicker._hideDatepicker();
                    break;
                case 33:
                    e.datepicker._adjustDate(t.target, t.ctrlKey ? -e.datepicker._get(n, "stepBigMonths") : -e.datepicker._get(n, "stepMonths"), "M");
                    break;
                case 34:
                    e.datepicker._adjustDate(t.target, t.ctrlKey ? +e.datepicker._get(n, "stepBigMonths") : +e.datepicker._get(n, "stepMonths"), "M");
                    break;
                case 35:
                    (t.ctrlKey || t.metaKey) && e.datepicker._clearDate(t.target), o = t.ctrlKey || t.metaKey;
                    break;
                case 36:
                    (t.ctrlKey || t.metaKey) && e.datepicker._gotoToday(t.target), o = t.ctrlKey || t.metaKey;
                    break;
                case 37:
                    (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, r ? 1 : -1, "D"), o = t.ctrlKey || t.metaKey, t.originalEvent.altKey && e.datepicker._adjustDate(t.target, t.ctrlKey ? -e.datepicker._get(n, "stepBigMonths") : -e.datepicker._get(n, "stepMonths"), "M");
                    break;
                case 38:
                    (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, -7, "D"), o = t.ctrlKey || t.metaKey;
                    break;
                case 39:
                    (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, r ? -1 : 1, "D"), o = t.ctrlKey || t.metaKey, t.originalEvent.altKey && e.datepicker._adjustDate(t.target, t.ctrlKey ? +e.datepicker._get(n, "stepBigMonths") : +e.datepicker._get(n, "stepMonths"), "M");
                    break;
                case 40:
                    (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, 7, "D"), o = t.ctrlKey || t.metaKey;
                    break;
                default:
                    o = !1
            } else 36 === t.keyCode && t.ctrlKey ? e.datepicker._showDatepicker(this) : o = !1;
            o && (t.preventDefault(), t.stopPropagation())
        },
        _doKeyPress: function (i) {
            var s, a, n = e.datepicker._getInst(i.target);
            return e.datepicker._get(n, "constrainInput") ? (s = e.datepicker._possibleChars(e.datepicker._get(n, "dateFormat")), a = String.fromCharCode(null == i.charCode ? i.keyCode : i.charCode), i.ctrlKey || i.metaKey || " " > a || !s || s.indexOf(a) > -1) : t
        },
        _doKeyUp: function (t) {
            var i, s = e.datepicker._getInst(t.target);
            if (s.input.val() !== s.lastVal) try {
                i = e.datepicker.parseDate(e.datepicker._get(s, "dateFormat"), s.input ? s.input.val() : null, e.datepicker._getFormatConfig(s)), i && (e.datepicker._setDateFromField(s), e.datepicker._updateAlternate(s), e.datepicker._updateDatepicker(s))
            } catch (a) {
            }
            return !0
        },
        _showDatepicker: function (t) {
            if (t = t.target || t, "input" !== t.nodeName.toLowerCase() && (t = e("input", t.parentNode)[0]), !e.datepicker._isDisabledDatepicker(t) && e.datepicker._lastInput !== t) {
                var i, s, n, o, r, h, l;
                i = e.datepicker._getInst(t), e.datepicker._curInst && e.datepicker._curInst !== i && (e.datepicker._curInst.dpDiv.stop(!0, !0), i && e.datepicker._datepickerShowing && e.datepicker._hideDatepicker(e.datepicker._curInst.input[0])), s = e.datepicker._get(i, "beforeShow"), n = s ? s.apply(t, [t, i]) : {}, n !== !1 && (a(i.settings, n), i.lastVal = null, e.datepicker._lastInput = t, e.datepicker._setDateFromField(i), e.datepicker._inDialog && (t.value = ""), e.datepicker._pos || (e.datepicker._pos = e.datepicker._findPos(t), e.datepicker._pos[1] += t.offsetHeight), o = !1, e(t).parents().each(function () {
                    return o |= "fixed" === e(this).css("position"), !o
                }), r = {
                    left: e.datepicker._pos[0],
                    top: e.datepicker._pos[1]
                }, e.datepicker._pos = null, i.dpDiv.empty(), i.dpDiv.css({
                    position: "absolute",
                    display: "block",
                    top: "-1000px"
                }), e.datepicker._updateDatepicker(i), r = e.datepicker._checkOffset(i, r, o), i.dpDiv.css({
                    position: e.datepicker._inDialog && e.blockUI ? "static" : o ? "fixed" : "absolute",
                    display: "none",
                    left: r.left + "px",
                    top: r.top + "px"
                }), i.inline || (h = e.datepicker._get(i, "showAnim"), l = e.datepicker._get(i, "duration"), i.dpDiv.zIndex(e(t).zIndex() + 1), e.datepicker._datepickerShowing = !0, e.effects && e.effects.effect[h] ? i.dpDiv.show(h, e.datepicker._get(i, "showOptions"), l) : i.dpDiv[h || "show"](h ? l : null), e.datepicker._shouldFocusInput(i) && i.input.focus(), e.datepicker._curInst = i))
            }
        },
        _updateDatepicker: function (t) {
            this.maxRows = 4, n = t, t.dpDiv.empty().append(this._generateHTML(t)), this._attachHandlers(t), t.dpDiv.find("." + this._dayOverClass + " a").mouseover();
            var i, s = this._getNumberOfMonths(t), a = s[1], o = 17;
            t.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), a > 1 && t.dpDiv.addClass("ui-datepicker-multi-" + a).css("width", o * a + "em"), t.dpDiv[(1 !== s[0] || 1 !== s[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), t.dpDiv[(this._get(t, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), t === e.datepicker._curInst && e.datepicker._datepickerShowing && e.datepicker._shouldFocusInput(t) && t.input.focus(), t.yearshtml && (i = t.yearshtml, setTimeout(function () {
                i === t.yearshtml && t.yearshtml && t.dpDiv.find("select.ui-datepicker-year:first").replaceWith(t.yearshtml), i = t.yearshtml = null
            }, 0))
        },
        _shouldFocusInput: function (e) {
            return e.input && e.input.is(":visible") && !e.input.is(":disabled") && !e.input.is(":focus")
        },
        _checkOffset: function (t, i, s) {
            var a = t.dpDiv.outerWidth(), n = t.dpDiv.outerHeight(), o = t.input ? t.input.outerWidth() : 0,
                r = t.input ? t.input.outerHeight() : 0,
                h = document.documentElement.clientWidth + (s ? 0 : e(document).scrollLeft()),
                l = document.documentElement.clientHeight + (s ? 0 : e(document).scrollTop());
            return i.left -= this._get(t, "isRTL") ? a - o : 0, i.left -= s && i.left === t.input.offset().left ? e(document).scrollLeft() : 0, i.top -= s && i.top === t.input.offset().top + r ? e(document).scrollTop() : 0, i.left -= Math.min(i.left, i.left + a > h && h > a ? Math.abs(i.left + a - h) : 0), i.top -= Math.min(i.top, i.top + n > l && l > n ? Math.abs(n + r) : 0), i
        },
        _findPos: function (t) {
            for (var i, s = this._getInst(t), a = this._get(s, "isRTL"); t && ("hidden" === t.type || 1 !== t.nodeType || e.expr.filters.hidden(t));) t = t[a ? "previousSibling" : "nextSibling"];
            return i = e(t).offset(), [i.left, i.top]
        },
        _hideDatepicker: function (t) {
            var i, s, a, n, r = this._curInst;
            !r || t && r !== e.data(t, o) || this._datepickerShowing && (i = this._get(r, "showAnim"), s = this._get(r, "duration"), a = function () {
                e.datepicker._tidyDialog(r)
            }, e.effects && (e.effects.effect[i] || e.effects[i]) ? r.dpDiv.hide(i, e.datepicker._get(r, "showOptions"), s, a) : r.dpDiv["slideDown" === i ? "slideUp" : "fadeIn" === i ? "fadeOut" : "hide"](i ? s : null, a), i || a(), this._datepickerShowing = !1, n = this._get(r, "onClose"), n && n.apply(r.input ? r.input[0] : null, [r.input ? r.input.val() : "", r]), this._lastInput = null, this._inDialog && (this._dialogInput.css({
                position: "absolute",
                left: "0",
                top: "-100px"
            }), e.blockUI && (e.unblockUI(), e("body").append(this.dpDiv))), this._inDialog = !1)
        },
        _tidyDialog: function (e) {
            e.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
        },
        _checkExternalClick: function (t) {
            if (e.datepicker._curInst) {
                var i = e(t.target), s = e.datepicker._getInst(i[0]);
                (i[0].id !== e.datepicker._mainDivId && 0 === i.parents("#" + e.datepicker._mainDivId).length && !i.hasClass(e.datepicker.markerClassName) && !i.closest("." + e.datepicker._triggerClass).length && e.datepicker._datepickerShowing && (!e.datepicker._inDialog || !e.blockUI) || i.hasClass(e.datepicker.markerClassName) && e.datepicker._curInst !== s) && e.datepicker._hideDatepicker()
            }
        },
        _adjustDate: function (t, i, s) {
            var a = e(t), n = this._getInst(a[0]);
            this._isDisabledDatepicker(a[0]) || (this._adjustInstDate(n, i + ("M" === s ? this._get(n, "showCurrentAtPos") : 0), s), this._updateDatepicker(n))
        },
        _gotoToday: function (t) {
            var i, s = e(t), a = this._getInst(s[0]);
            this._get(a, "gotoCurrent") && a.currentDay ? (a.selectedDay = a.currentDay, a.drawMonth = a.selectedMonth = a.currentMonth, a.drawYear = a.selectedYear = a.currentYear) : (i = new Date, a.selectedDay = i.getDate(), a.drawMonth = a.selectedMonth = i.getMonth(), a.drawYear = a.selectedYear = i.getFullYear()), this._notifyChange(a), this._adjustDate(s)
        },
        _selectMonthYear: function (t, i, s) {
            var a = e(t), n = this._getInst(a[0]);
            n["selected" + ("M" === s ? "Month" : "Year")] = n["draw" + ("M" === s ? "Month" : "Year")] = parseInt(i.options[i.selectedIndex].value, 10), this._notifyChange(n), this._adjustDate(a)
        },
        _selectDay: function (t, i, s, a) {
            var n, o = e(t);
            e(a).hasClass(this._unselectableClass) || this._isDisabledDatepicker(o[0]) || (n = this._getInst(o[0]), n.selectedDay = n.currentDay = e("a", a).html(), n.selectedMonth = n.currentMonth = i, n.selectedYear = n.currentYear = s, this._selectDate(t, this._formatDate(n, n.currentDay, n.currentMonth, n.currentYear)))
        },
        _clearDate: function (t) {
            var i = e(t);
            this._selectDate(i, "")
        },
        _selectDate: function (t, i) {
            var s, a = e(t), n = this._getInst(a[0]);
            i = null != i ? i : this._formatDate(n), n.input && n.input.val(i), this._updateAlternate(n), s = this._get(n, "onSelect"), s ? s.apply(n.input ? n.input[0] : null, [i, n]) : n.input && n.input.trigger("change"), n.inline ? this._updateDatepicker(n) : (this._hideDatepicker(), this._lastInput = n.input[0], "object" != typeof n.input[0] && n.input.focus(), this._lastInput = null)
        },
        _updateAlternate: function (t) {
            var i, s, a, n = this._get(t, "altField");
            n && (i = this._get(t, "altFormat") || this._get(t, "dateFormat"), s = this._getDate(t), a = this.formatDate(i, s, this._getFormatConfig(t)), e(n).each(function () {
                e(this).val(a)
            }))
        },
        noWeekends: function (e) {
            var t = e.getDay();
            return [t > 0 && 6 > t, ""]
        },
        iso8601Week: function (e) {
            var t, i = new Date(e.getTime());
            return i.setDate(i.getDate() + 4 - (i.getDay() || 7)), t = i.getTime(), i.setMonth(0), i.setDate(1), Math.floor(Math.round((t - i) / 864e5) / 7) + 1
        },
        parseDate: function (i, s, a) {
            if (null == i || null == s) throw"Invalid arguments";
            if (s = "object" == typeof s ? "" + s : s + "", "" === s) return null;
            var n, o, r, h, l = 0, u = (a ? a.shortYearCutoff : null) || this._defaults.shortYearCutoff,
                d = "string" != typeof u ? u : (new Date).getFullYear() % 100 + parseInt(u, 10),
                c = (a ? a.dayNamesShort : null) || this._defaults.dayNamesShort,
                p = (a ? a.dayNames : null) || this._defaults.dayNames,
                f = (a ? a.monthNamesShort : null) || this._defaults.monthNamesShort,
                m = (a ? a.monthNames : null) || this._defaults.monthNames, g = -1, v = -1, y = -1, b = -1, _ = !1,
                x = function (e) {
                    var t = i.length > n + 1 && i.charAt(n + 1) === e;
                    return t && n++, t
                }, w = function (e) {
                    var t = x(e), i = "@" === e ? 14 : "!" === e ? 20 : "y" === e && t ? 4 : "o" === e ? 3 : 2,
                        a = RegExp("^\\d{1," + i + "}"), n = s.substring(l).match(a);
                    if (!n) throw"Missing number at position " + l;
                    return l += n[0].length, parseInt(n[0], 10)
                }, k = function (i, a, n) {
                    var o = -1, r = e.map(x(i) ? n : a, function (e, t) {
                        return [[t, e]]
                    }).sort(function (e, t) {
                        return -(e[1].length - t[1].length)
                    });
                    if (e.each(r, function (e, i) {
                            var a = i[1];
                            return s.substr(l, a.length).toLowerCase() === a.toLowerCase() ? (o = i[0], l += a.length, !1) : t
                        }), -1 !== o) return o + 1;
                    throw"Unknown name at position " + l
                }, D = function () {
                    if (s.charAt(l) !== i.charAt(n)) throw"Unexpected literal at position " + l;
                    l++
                };
            for (n = 0; i.length > n; n++) if (_) "'" !== i.charAt(n) || x("'") ? D() : _ = !1; else switch (i.charAt(n)) {
                case"d":
                    y = w("d");
                    break;
                case"D":
                    k("D", c, p);
                    break;
                case"o":
                    b = w("o");
                    break;
                case"m":
                    v = w("m");
                    break;
                case"M":
                    v = k("M", f, m);
                    break;
                case"y":
                    g = w("y");
                    break;
                case"@":
                    h = new Date(w("@")), g = h.getFullYear(), v = h.getMonth() + 1, y = h.getDate();
                    break;
                case"!":
                    h = new Date((w("!") - this._ticksTo1970) / 1e4), g = h.getFullYear(), v = h.getMonth() + 1, y = h.getDate();
                    break;
                case"'":
                    x("'") ? D() : _ = !0;
                    break;
                default:
                    D()
            }
            if (s.length > l && (r = s.substr(l), !/^\s+/.test(r))) throw"Extra/unparsed characters found in date: " + r;
            if (-1 === g ? g = (new Date).getFullYear() : 100 > g && (g += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (d >= g ? 0 : -100)), b > -1) for (v = 1, y = b; ;) {
                if (o = this._getDaysInMonth(g, v - 1), o >= y) break;
                v++, y -= o
            }
            if (h = this._daylightSavingAdjust(new Date(g, v - 1, y)), h.getFullYear() !== g || h.getMonth() + 1 !== v || h.getDate() !== y) throw"Invalid date";
            return h
        },
        ATOM: "yy-mm-dd",
        COOKIE: "D, dd M yy",
        ISO_8601: "yy-mm-dd",
        RFC_822: "D, d M y",
        RFC_850: "DD, dd-M-y",
        RFC_1036: "D, d M y",
        RFC_1123: "D, d M yy",
        RFC_2822: "D, d M yy",
        RSS: "D, d M y",
        TICKS: "!",
        TIMESTAMP: "@",
        W3C: "yy-mm-dd",
        _ticksTo1970: 1e7 * 60 * 60 * 24 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)),
        formatDate: function (e, t, i) {
            if (!t) return "";
            var s, a = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort,
                n = (i ? i.dayNames : null) || this._defaults.dayNames,
                o = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort,
                r = (i ? i.monthNames : null) || this._defaults.monthNames, h = function (t) {
                    var i = e.length > s + 1 && e.charAt(s + 1) === t;
                    return i && s++, i
                }, l = function (e, t, i) {
                    var s = "" + t;
                    if (h(e)) for (; i > s.length;) s = "0" + s;
                    return s
                }, u = function (e, t, i, s) {
                    return h(e) ? s[t] : i[t]
                }, d = "", c = !1;
            if (t) for (s = 0; e.length > s; s++) if (c) "'" !== e.charAt(s) || h("'") ? d += e.charAt(s) : c = !1; else switch (e.charAt(s)) {
                case"d":
                    d += l("d", t.getDate(), 2);
                    break;
                case"D":
                    d += u("D", t.getDay(), a, n);
                    break;
                case"o":
                    d += l("o", Math.round((new Date(t.getFullYear(), t.getMonth(), t.getDate()).getTime() - new Date(t.getFullYear(), 0, 0).getTime()) / 864e5), 3);
                    break;
                case"m":
                    d += l("m", t.getMonth() + 1, 2);
                    break;
                case"M":
                    d += u("M", t.getMonth(), o, r);
                    break;
                case"y":
                    d += h("y") ? t.getFullYear() : (10 > t.getYear() % 100 ? "0" : "") + t.getYear() % 100;
                    break;
                case"@":
                    d += t.getTime();
                    break;
                case"!":
                    d += 1e4 * t.getTime() + this._ticksTo1970;
                    break;
                case"'":
                    h("'") ? d += "'" : c = !0;
                    break;
                default:
                    d += e.charAt(s)
            }
            return d
        },
        _possibleChars: function (e) {
            var t, i = "", s = !1, a = function (i) {
                var s = e.length > t + 1 && e.charAt(t + 1) === i;
                return s && t++, s
            };
            for (t = 0; e.length > t; t++) if (s) "'" !== e.charAt(t) || a("'") ? i += e.charAt(t) : s = !1; else switch (e.charAt(t)) {
                case"d":
                case"m":
                case"y":
                case"@":
                    i += "0123456789";
                    break;
                case"D":
                case"M":
                    return null;
                case"'":
                    a("'") ? i += "'" : s = !0;
                    break;
                default:
                    i += e.charAt(t)
            }
            return i
        },
        _get: function (e, i) {
            return e.settings[i] !== t ? e.settings[i] : this._defaults[i]
        },
        _setDateFromField: function (e, t) {
            if (e.input.val() !== e.lastVal) {
                var i = this._get(e, "dateFormat"), s = e.lastVal = e.input ? e.input.val() : null,
                    a = this._getDefaultDate(e), n = a, o = this._getFormatConfig(e);
                try {
                    n = this.parseDate(i, s, o) || a
                } catch (r) {
                    s = t ? "" : s
                }
                e.selectedDay = n.getDate(), e.drawMonth = e.selectedMonth = n.getMonth(), e.drawYear = e.selectedYear = n.getFullYear(), e.currentDay = s ? n.getDate() : 0, e.currentMonth = s ? n.getMonth() : 0, e.currentYear = s ? n.getFullYear() : 0, this._adjustInstDate(e)
            }
        },
        _getDefaultDate: function (e) {
            return this._restrictMinMax(e, this._determineDate(e, this._get(e, "defaultDate"), new Date))
        },
        _determineDate: function (t, i, s) {
            var a = function (e) {
                    var t = new Date;
                    return t.setDate(t.getDate() + e), t
                }, n = function (i) {
                    try {
                        return e.datepicker.parseDate(e.datepicker._get(t, "dateFormat"), i, e.datepicker._getFormatConfig(t))
                    } catch (s) {
                    }
                    for (var a = (i.toLowerCase().match(/^c/) ? e.datepicker._getDate(t) : null) || new Date, n = a.getFullYear(), o = a.getMonth(), r = a.getDate(), h = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, l = h.exec(i); l;) {
                        switch (l[2] || "d") {
                            case"d":
                            case"D":
                                r += parseInt(l[1], 10);
                                break;
                            case"w":
                            case"W":
                                r += 7 * parseInt(l[1], 10);
                                break;
                            case"m":
                            case"M":
                                o += parseInt(l[1], 10), r = Math.min(r, e.datepicker._getDaysInMonth(n, o));
                                break;
                            case"y":
                            case"Y":
                                n += parseInt(l[1], 10), r = Math.min(r, e.datepicker._getDaysInMonth(n, o))
                        }
                        l = h.exec(i)
                    }
                    return new Date(n, o, r)
                },
                o = null == i || "" === i ? s : "string" == typeof i ? n(i) : "number" == typeof i ? isNaN(i) ? s : a(i) : new Date(i.getTime());
            return o = o && "Invalid Date" == "" + o ? s : o, o && (o.setHours(0), o.setMinutes(0), o.setSeconds(0), o.setMilliseconds(0)), this._daylightSavingAdjust(o)
        },
        _daylightSavingAdjust: function (e) {
            return e ? (e.setHours(e.getHours() > 12 ? e.getHours() + 2 : 0), e) : null
        },
        _setDate: function (e, t, i) {
            var s = !t, a = e.selectedMonth, n = e.selectedYear,
                o = this._restrictMinMax(e, this._determineDate(e, t, new Date));
            e.selectedDay = e.currentDay = o.getDate(), e.drawMonth = e.selectedMonth = e.currentMonth = o.getMonth(), e.drawYear = e.selectedYear = e.currentYear = o.getFullYear(), a === e.selectedMonth && n === e.selectedYear || i || this._notifyChange(e), this._adjustInstDate(e), e.input && e.input.val(s ? "" : this._formatDate(e))
        },
        _getDate: function (e) {
            var t = !e.currentYear || e.input && "" === e.input.val() ? null : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay));
            return t
        },
        _attachHandlers: function (t) {
            var i = this._get(t, "stepMonths"), s = "#" + t.id.replace(/\\\\/g, "\\");
            t.dpDiv.find("[data-handler]").map(function () {
                var t = {
                    prev: function () {
                        e.datepicker._adjustDate(s, -i, "M")
                    }, next: function () {
                        e.datepicker._adjustDate(s, +i, "M")
                    }, hide: function () {
                        e.datepicker._hideDatepicker()
                    }, today: function () {
                        e.datepicker._gotoToday(s)
                    }, selectDay: function () {
                        return e.datepicker._selectDay(s, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1
                    }, selectMonth: function () {
                        return e.datepicker._selectMonthYear(s, this, "M"), !1
                    }, selectYear: function () {
                        return e.datepicker._selectMonthYear(s, this, "Y"), !1
                    }
                };
                e(this).bind(this.getAttribute("data-event"), t[this.getAttribute("data-handler")])
            })
        },
        _generateHTML: function (e) {
            var t, i, s, a, n, o, r, h, l, u, d, c, p, f, m, g, v, y, b, _, x, w, k, D, T, S, M, N, C, A, P, I, z, H, F,
                E, O, j, W, L = new Date,
                R = this._daylightSavingAdjust(new Date(L.getFullYear(), L.getMonth(), L.getDate())),
                Y = this._get(e, "isRTL"), J = this._get(e, "showButtonPanel"), B = this._get(e, "hideIfNoPrevNext"),
                K = this._get(e, "navigationAsDateFormat"), V = this._getNumberOfMonths(e),
                U = this._get(e, "showCurrentAtPos"), q = this._get(e, "stepMonths"), Q = 1 !== V[0] || 1 !== V[1],
                G = this._daylightSavingAdjust(e.currentDay ? new Date(e.currentYear, e.currentMonth, e.currentDay) : new Date(9999, 9, 9)),
                $ = this._getMinMaxDate(e, "min"), X = this._getMinMaxDate(e, "max"), Z = e.drawMonth - U,
                et = e.drawYear;
            if (0 > Z && (Z += 12, et--), X) for (t = this._daylightSavingAdjust(new Date(X.getFullYear(), X.getMonth() - V[0] * V[1] + 1, X.getDate())), t = $ && $ > t ? $ : t; this._daylightSavingAdjust(new Date(et, Z, 1)) > t;) Z--, 0 > Z && (Z = 11, et--);
            for (e.drawMonth = Z, e.drawYear = et, i = this._get(e, "prevText"), i = K ? this.formatDate(i, this._daylightSavingAdjust(new Date(et, Z - q, 1)), this._getFormatConfig(e)) : i, s = this._canAdjustMonth(e, -1, et, Z) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "e" : "w") + "'>" + i + "</span></a>" : B ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "e" : "w") + "'>" + i + "</span></a>", a = this._get(e, "nextText"), a = K ? this.formatDate(a, this._daylightSavingAdjust(new Date(et, Z + q, 1)), this._getFormatConfig(e)) : a, n = this._canAdjustMonth(e, 1, et, Z) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + a + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "w" : "e") + "'>" + a + "</span></a>" : B ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + a + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "w" : "e") + "'>" + a + "</span></a>", o = this._get(e, "currentText"), r = this._get(e, "gotoCurrent") && e.currentDay ? G : R, o = K ? this.formatDate(o, r, this._getFormatConfig(e)) : o, h = e.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(e, "closeText") + "</button>", l = J ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (Y ? h : "") + (this._isInRange(e, r) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + o + "</button>" : "") + (Y ? "" : h) + "</div>" : "", u = parseInt(this._get(e, "firstDay"), 10), u = isNaN(u) ? 0 : u, d = this._get(e, "showWeek"), c = this._get(e, "dayNames"), p = this._get(e, "dayNamesMin"), f = this._get(e, "monthNames"), m = this._get(e, "monthNamesShort"), g = this._get(e, "beforeShowDay"), v = this._get(e, "showOtherMonths"), y = this._get(e, "selectOtherMonths"), b = this._getDefaultDate(e), _ = "", w = 0; V[0] > w; w++) {
                for (k = "", this.maxRows = 4, D = 0; V[1] > D; D++) {
                    if (T = this._daylightSavingAdjust(new Date(et, Z, e.selectedDay)), S = " ui-corner-all", M = "", Q) {
                        if (M += "<div class='ui-datepicker-group", V[1] > 1) switch (D) {
                            case 0:
                                M += " ui-datepicker-group-first", S = " ui-corner-" + (Y ? "right" : "left");
                                break;
                            case V[1] - 1:
                                M += " ui-datepicker-group-last", S = " ui-corner-" + (Y ? "left" : "right");
                                break;
                            default:
                                M += " ui-datepicker-group-middle", S = ""
                        }
                        M += "'>"
                    }
                    for (M += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + S + "'>" + (/all|left/.test(S) && 0 === w ? Y ? n : s : "") + (/all|right/.test(S) && 0 === w ? Y ? s : n : "") + this._generateMonthYearHeader(e, Z, et, $, X, w > 0 || D > 0, f, m) + "</div><table class='ui-datepicker-calendar'><thead>" + "<tr>", N = d ? "<th class='ui-datepicker-week-col'>" + this._get(e, "weekHeader") + "</th>" : "", x = 0; 7 > x; x++) C = (x + u) % 7, N += "<th" + ((x + u + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + ">" + "<span title='" + c[C] + "'>" + p[C] + "</span></th>";
                    for (M += N + "</tr></thead><tbody>", A = this._getDaysInMonth(et, Z), et === e.selectedYear && Z === e.selectedMonth && (e.selectedDay = Math.min(e.selectedDay, A)), P = (this._getFirstDayOfMonth(et, Z) - u + 7) % 7, I = Math.ceil((P + A) / 7), z = Q ? this.maxRows > I ? this.maxRows : I : I, this.maxRows = z, H = this._daylightSavingAdjust(new Date(et, Z, 1 - P)), F = 0; z > F; F++) {
                        for (M += "<tr>", E = d ? "<td class='ui-datepicker-week-col'>" + this._get(e, "calculateWeek")(H) + "</td>" : "", x = 0; 7 > x; x++) O = g ? g.apply(e.input ? e.input[0] : null, [H]) : [!0, ""], j = H.getMonth() !== Z, W = j && !y || !O[0] || $ && $ > H || X && H > X, E += "<td class='" + ((x + u + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (j ? " ui-datepicker-other-month" : "") + (H.getTime() === T.getTime() && Z === e.selectedMonth && e._keyEvent || b.getTime() === H.getTime() && b.getTime() === T.getTime() ? " " + this._dayOverClass : "") + (W ? " " + this._unselectableClass + " ui-state-disabled" : "") + (j && !v ? "" : " " + O[1] + (H.getTime() === G.getTime() ? " " + this._currentClass : "") + (H.getTime() === R.getTime() ? " ui-datepicker-today" : "")) + "'" + (j && !v || !O[2] ? "" : " title='" + O[2].replace(/'/g, "&#39;") + "'") + (W ? "" : " data-handler='selectDay' data-event='click' data-month='" + H.getMonth() + "' data-year='" + H.getFullYear() + "'") + ">" + (j && !v ? "&#xa0;" : W ? "<span class='ui-state-default'>" + H.getDate() + "</span>" : "<a class='ui-state-default" + (H.getTime() === R.getTime() ? " ui-state-highlight" : "") + (H.getTime() === G.getTime() ? " ui-state-active" : "") + (j ? " ui-priority-secondary" : "") + "' href='#'>" + H.getDate() + "</a>") + "</td>", H.setDate(H.getDate() + 1), H = this._daylightSavingAdjust(H);
                        M += E + "</tr>"
                    }
                    Z++, Z > 11 && (Z = 0, et++), M += "</tbody></table>" + (Q ? "</div>" + (V[0] > 0 && D === V[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : ""), k += M
                }
                _ += k
            }
            return _ += l, e._keyEvent = !1, _
        },
        _generateMonthYearHeader: function (e, t, i, s, a, n, o, r) {
            var h, l, u, d, c, p, f, m, g = this._get(e, "changeMonth"), v = this._get(e, "changeYear"),
                y = this._get(e, "showMonthAfterYear"), b = "<div class='ui-datepicker-title'>", _ = "";
            if (n || !g) _ += "<span class='ui-datepicker-month'>" + o[t] + "</span>"; else {
                for (h = s && s.getFullYear() === i, l = a && a.getFullYear() === i, _ += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", u = 0; 12 > u; u++) (!h || u >= s.getMonth()) && (!l || a.getMonth() >= u) && (_ += "<option value='" + u + "'" + (u === t ? " selected='selected'" : "") + ">" + r[u] + "</option>");
                _ += "</select>"
            }
            if (y || (b += _ + (!n && g && v ? "" : "&#xa0;")), !e.yearshtml) if (e.yearshtml = "", n || !v) b += "<span class='ui-datepicker-year'>" + i + "</span>"; else {
                for (d = this._get(e, "yearRange").split(":"), c = (new Date).getFullYear(), p = function (e) {
                    var t = e.match(/c[+\-].*/) ? i + parseInt(e.substring(1), 10) : e.match(/[+\-].*/) ? c + parseInt(e, 10) : parseInt(e, 10);
                    return isNaN(t) ? c : t
                }, f = p(d[0]), m = Math.max(f, p(d[1] || "")), f = s ? Math.max(f, s.getFullYear()) : f, m = a ? Math.min(m, a.getFullYear()) : m, e.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; m >= f; f++) e.yearshtml += "<option value='" + f + "'" + (f === i ? " selected='selected'" : "") + ">" + f + "</option>";
                e.yearshtml += "</select>", b += e.yearshtml, e.yearshtml = null
            }
            return b += this._get(e, "yearSuffix"), y && (b += (!n && g && v ? "" : "&#xa0;") + _), b += "</div>"
        },
        _adjustInstDate: function (e, t, i) {
            var s = e.drawYear + ("Y" === i ? t : 0), a = e.drawMonth + ("M" === i ? t : 0),
                n = Math.min(e.selectedDay, this._getDaysInMonth(s, a)) + ("D" === i ? t : 0),
                o = this._restrictMinMax(e, this._daylightSavingAdjust(new Date(s, a, n)));
            e.selectedDay = o.getDate(), e.drawMonth = e.selectedMonth = o.getMonth(), e.drawYear = e.selectedYear = o.getFullYear(), ("M" === i || "Y" === i) && this._notifyChange(e)
        },
        _restrictMinMax: function (e, t) {
            var i = this._getMinMaxDate(e, "min"), s = this._getMinMaxDate(e, "max"), a = i && i > t ? i : t;
            return s && a > s ? s : a
        },
        _notifyChange: function (e) {
            var t = this._get(e, "onChangeMonthYear");
            t && t.apply(e.input ? e.input[0] : null, [e.selectedYear, e.selectedMonth + 1, e])
        },
        _getNumberOfMonths: function (e) {
            var t = this._get(e, "numberOfMonths");
            return null == t ? [1, 1] : "number" == typeof t ? [1, t] : t
        },
        _getMinMaxDate: function (e, t) {
            return this._determineDate(e, this._get(e, t + "Date"), null)
        },
        _getDaysInMonth: function (e, t) {
            return 32 - this._daylightSavingAdjust(new Date(e, t, 32)).getDate()
        },
        _getFirstDayOfMonth: function (e, t) {
            return new Date(e, t, 1).getDay()
        },
        _canAdjustMonth: function (e, t, i, s) {
            var a = this._getNumberOfMonths(e),
                n = this._daylightSavingAdjust(new Date(i, s + (0 > t ? t : a[0] * a[1]), 1));
            return 0 > t && n.setDate(this._getDaysInMonth(n.getFullYear(), n.getMonth())), this._isInRange(e, n)
        },
        _isInRange: function (e, t) {
            var i, s, a = this._getMinMaxDate(e, "min"), n = this._getMinMaxDate(e, "max"), o = null, r = null,
                h = this._get(e, "yearRange");
            return h && (i = h.split(":"), s = (new Date).getFullYear(), o = parseInt(i[0], 10), r = parseInt(i[1], 10), i[0].match(/[+\-].*/) && (o += s), i[1].match(/[+\-].*/) && (r += s)), (!a || t.getTime() >= a.getTime()) && (!n || t.getTime() <= n.getTime()) && (!o || t.getFullYear() >= o) && (!r || r >= t.getFullYear())
        },
        _getFormatConfig: function (e) {
            var t = this._get(e, "shortYearCutoff");
            return t = "string" != typeof t ? t : (new Date).getFullYear() % 100 + parseInt(t, 10), {
                shortYearCutoff: t,
                dayNamesShort: this._get(e, "dayNamesShort"),
                dayNames: this._get(e, "dayNames"),
                monthNamesShort: this._get(e, "monthNamesShort"),
                monthNames: this._get(e, "monthNames")
            }
        },
        _formatDate: function (e, t, i, s) {
            t || (e.currentDay = e.selectedDay, e.currentMonth = e.selectedMonth, e.currentYear = e.selectedYear);
            var a = t ? "object" == typeof t ? t : this._daylightSavingAdjust(new Date(s, i, t)) : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay));
            return this.formatDate(this._get(e, "dateFormat"), a, this._getFormatConfig(e))
        }
    }), e.fn.datepicker = function (t) {
        if (!this.length) return this;
        e.datepicker.initialized || (e(document).mousedown(e.datepicker._checkExternalClick), e.datepicker.initialized = !0), 0 === e("#" + e.datepicker._mainDivId).length && e("body").append(e.datepicker.dpDiv);
        var i = Array.prototype.slice.call(arguments, 1);
        return "string" != typeof t || "isDisabled" !== t && "getDate" !== t && "widget" !== t ? "option" === t && 2 === arguments.length && "string" == typeof arguments[1] ? e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this[0]].concat(i)) : this.each(function () {
            "string" == typeof t ? e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this].concat(i)) : e.datepicker._attachDatepicker(this, t)
        }) : e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this[0]].concat(i))
    }, e.datepicker = new i, e.datepicker.initialized = !1, e.datepicker.uuid = (new Date).getTime(), e.datepicker.version = "1.10.4"
})(jQuery);
(function (e) {
    var t = {buttons: !0, height: !0, maxHeight: !0, maxWidth: !0, minHeight: !0, minWidth: !0, width: !0},
        i = {maxHeight: !0, maxWidth: !0, minHeight: !0, minWidth: !0};
    e.widget("ui.dialog", {
        version: "1.10.4",
        options: {
            appendTo: "body",
            autoOpen: !0,
            buttons: [],
            closeOnEscape: !0,
            closeText: "close",
            dialogClass: "",
            draggable: !0,
            hide: null,
            height: "auto",
            maxHeight: null,
            maxWidth: null,
            minHeight: 150,
            minWidth: 150,
            modal: !1,
            position: {
                my: "center", at: "center", of: window, collision: "fit", using: function (t) {
                    var i = e(this).css(t).offset().top;
                    0 > i && e(this).css("top", t.top - i)
                }
            },
            resizable: !0,
            show: null,
            title: null,
            width: 300,
            beforeClose: null,
            close: null,
            drag: null,
            dragStart: null,
            dragStop: null,
            focus: null,
            open: null,
            resize: null,
            resizeStart: null,
            resizeStop: null
        },
        _create: function () {
            this.originalCss = {
                display: this.element[0].style.display,
                width: this.element[0].style.width,
                minHeight: this.element[0].style.minHeight,
                maxHeight: this.element[0].style.maxHeight,
                height: this.element[0].style.height
            }, this.originalPosition = {
                parent: this.element.parent(),
                index: this.element.parent().children().index(this.element)
            }, this.originalTitle = this.element.attr("title"), this.options.title = this.options.title || this.originalTitle, this._createWrapper(), this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog), this._createTitlebar(), this._createButtonPane(), this.options.draggable && e.fn.draggable && this._makeDraggable(), this.options.resizable && e.fn.resizable && this._makeResizable(), this._isOpen = !1
        },
        _init: function () {
            this.options.autoOpen && this.open()
        },
        _appendTo: function () {
            var t = this.options.appendTo;
            return t && (t.jquery || t.nodeType) ? e(t) : this.document.find(t || "body").eq(0)
        },
        _destroy: function () {
            var e, t = this.originalPosition;
            this._destroyOverlay(), this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach(), this.uiDialog.stop(!0, !0).remove(), this.originalTitle && this.element.attr("title", this.originalTitle), e = t.parent.children().eq(t.index), e.length && e[0] !== this.element[0] ? e.before(this.element) : t.parent.append(this.element)
        },
        widget: function () {
            return this.uiDialog
        },
        disable: e.noop,
        enable: e.noop,
        close: function (t) {
            var i, s = this;
            if (this._isOpen && this._trigger("beforeClose", t) !== !1) {
                if (this._isOpen = !1, this._destroyOverlay(), !this.opener.filter(":focusable").focus().length) try {
                    i = this.document[0].activeElement, i && "body" !== i.nodeName.toLowerCase() && e(i).blur()
                } catch (a) {
                }
                this._hide(this.uiDialog, this.options.hide, function () {
                    s._trigger("close", t)
                })
            }
        },
        isOpen: function () {
            return this._isOpen
        },
        moveToTop: function () {
            this._moveToTop()
        },
        _moveToTop: function (e, t) {
            var i = !!this.uiDialog.nextAll(":visible").insertBefore(this.uiDialog).length;
            return i && !t && this._trigger("focus", e), i
        },
        open: function () {
            var t = this;
            return this._isOpen ? (this._moveToTop() && this._focusTabbable(), undefined) : (this._isOpen = !0, this.opener = e(this.document[0].activeElement), this._size(), this._position(), this._createOverlay(), this._moveToTop(null, !0), this._show(this.uiDialog, this.options.show, function () {
                t._focusTabbable(), t._trigger("focus")
            }), this._trigger("open"), undefined)
        },
        _focusTabbable: function () {
            var e = this.element.find("[autofocus]");
            e.length || (e = this.element.find(":tabbable")), e.length || (e = this.uiDialogButtonPane.find(":tabbable")), e.length || (e = this.uiDialogTitlebarClose.filter(":tabbable")), e.length || (e = this.uiDialog), e.eq(0).focus()
        },
        _keepFocus: function (t) {
            function i() {
                var t = this.document[0].activeElement, i = this.uiDialog[0] === t || e.contains(this.uiDialog[0], t);
                i || this._focusTabbable()
            }

            t.preventDefault(), i.call(this), this._delay(i)
        },
        _createWrapper: function () {
            this.uiDialog = e("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front " + this.options.dialogClass).hide().attr({
                tabIndex: -1,
                role: "dialog"
            }).appendTo(this._appendTo()), this._on(this.uiDialog, {
                keydown: function (t) {
                    if (this.options.closeOnEscape && !t.isDefaultPrevented() && t.keyCode && t.keyCode === e.ui.keyCode.ESCAPE) return t.preventDefault(), this.close(t), undefined;
                    if (t.keyCode === e.ui.keyCode.TAB) {
                        var i = this.uiDialog.find(":tabbable"), s = i.filter(":first"), a = i.filter(":last");
                        t.target !== a[0] && t.target !== this.uiDialog[0] || t.shiftKey ? t.target !== s[0] && t.target !== this.uiDialog[0] || !t.shiftKey || (a.focus(1), t.preventDefault()) : (s.focus(1), t.preventDefault())
                    }
                }, mousedown: function (e) {
                    this._moveToTop(e) && this._focusTabbable()
                }
            }), this.element.find("[aria-describedby]").length || this.uiDialog.attr({"aria-describedby": this.element.uniqueId().attr("id")})
        },
        _createTitlebar: function () {
            var t;
            this.uiDialogTitlebar = e("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog), this._on(this.uiDialogTitlebar, {
                mousedown: function (t) {
                    e(t.target).closest(".ui-dialog-titlebar-close") || this.uiDialog.focus()
                }
            }), this.uiDialogTitlebarClose = e("<button type='button'></button>").button({
                label: this.options.closeText,
                icons: {primary: "ui-icon-closethick"},
                text: !1
            }).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar), this._on(this.uiDialogTitlebarClose, {
                click: function (e) {
                    e.preventDefault(), this.close(e)
                }
            }), t = e("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar), this._title(t), this.uiDialog.attr({"aria-labelledby": t.attr("id")})
        },
        _title: function (e) {
            this.options.title || e.html("&#160;"), e.text(this.options.title)
        },
        _createButtonPane: function () {
            this.uiDialogButtonPane = e("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"), this.uiButtonSet = e("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane), this._createButtons()
        },
        _createButtons: function () {
            var t = this, i = this.options.buttons;
            return this.uiDialogButtonPane.remove(), this.uiButtonSet.empty(), e.isEmptyObject(i) || e.isArray(i) && !i.length ? (this.uiDialog.removeClass("ui-dialog-buttons"), undefined) : (e.each(i, function (i, s) {
                var a, n;
                s = e.isFunction(s) ? {
                    click: s,
                    text: i
                } : s, s = e.extend({type: "button"}, s), a = s.click, s.click = function () {
                    a.apply(t.element[0], arguments)
                }, n = {
                    icons: s.icons,
                    text: s.showText
                }, delete s.icons, delete s.showText, e("<button></button>", s).button(n).appendTo(t.uiButtonSet)
            }), this.uiDialog.addClass("ui-dialog-buttons"), this.uiDialogButtonPane.appendTo(this.uiDialog), undefined)
        },
        _makeDraggable: function () {
            function t(e) {
                return {position: e.position, offset: e.offset}
            }

            var i = this, s = this.options;
            this.uiDialog.draggable({
                cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
                handle: ".ui-dialog-titlebar",
                containment: "document",
                start: function (s, a) {
                    e(this).addClass("ui-dialog-dragging"), i._blockFrames(), i._trigger("dragStart", s, t(a))
                },
                drag: function (e, s) {
                    i._trigger("drag", e, t(s))
                },
                stop: function (a, n) {
                    s.position = [n.position.left - i.document.scrollLeft(), n.position.top - i.document.scrollTop()], e(this).removeClass("ui-dialog-dragging"), i._unblockFrames(), i._trigger("dragStop", a, t(n))
                }
            })
        },
        _makeResizable: function () {
            function t(e) {
                return {
                    originalPosition: e.originalPosition,
                    originalSize: e.originalSize,
                    position: e.position,
                    size: e.size
                }
            }

            var i = this, s = this.options, a = s.resizable, n = this.uiDialog.css("position"),
                r = "string" == typeof a ? a : "n,e,s,w,se,sw,ne,nw";
            this.uiDialog.resizable({
                cancel: ".ui-dialog-content",
                containment: "document",
                alsoResize: this.element,
                maxWidth: s.maxWidth,
                maxHeight: s.maxHeight,
                minWidth: s.minWidth,
                minHeight: this._minHeight(),
                handles: r,
                start: function (s, a) {
                    e(this).addClass("ui-dialog-resizing"), i._blockFrames(), i._trigger("resizeStart", s, t(a))
                },
                resize: function (e, s) {
                    i._trigger("resize", e, t(s))
                },
                stop: function (a, n) {
                    s.height = e(this).height(), s.width = e(this).width(), e(this).removeClass("ui-dialog-resizing"), i._unblockFrames(), i._trigger("resizeStop", a, t(n))
                }
            }).css("position", n)
        },
        _minHeight: function () {
            var e = this.options;
            return "auto" === e.height ? e.minHeight : Math.min(e.minHeight, e.height)
        },
        _position: function () {
            var e = this.uiDialog.is(":visible");
            e || this.uiDialog.show(), this.uiDialog.position(this.options.position), e || this.uiDialog.hide()
        },
        _setOptions: function (s) {
            var a = this, n = !1, r = {};
            e.each(s, function (e, s) {
                a._setOption(e, s), e in t && (n = !0), e in i && (r[e] = s)
            }), n && (this._size(), this._position()), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", r)
        },
        _setOption: function (e, t) {
            var i, s, a = this.uiDialog;
            "dialogClass" === e && a.removeClass(this.options.dialogClass).addClass(t), "disabled" !== e && (this._super(e, t), "appendTo" === e && this.uiDialog.appendTo(this._appendTo()), "buttons" === e && this._createButtons(), "closeText" === e && this.uiDialogTitlebarClose.button({label: "" + t}), "draggable" === e && (i = a.is(":data(ui-draggable)"), i && !t && a.draggable("destroy"), !i && t && this._makeDraggable()), "position" === e && this._position(), "resizable" === e && (s = a.is(":data(ui-resizable)"), s && !t && a.resizable("destroy"), s && "string" == typeof t && a.resizable("option", "handles", t), s || t === !1 || this._makeResizable()), "title" === e && this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))
        },
        _size: function () {
            var e, t, i, s = this.options;
            this.element.show().css({
                width: "auto",
                minHeight: 0,
                maxHeight: "none",
                height: 0
            }), s.minWidth > s.width && (s.width = s.minWidth), e = this.uiDialog.css({
                height: "auto",
                width: s.width
            }).outerHeight(), t = Math.max(0, s.minHeight - e), i = "number" == typeof s.maxHeight ? Math.max(0, s.maxHeight - e) : "none", "auto" === s.height ? this.element.css({
                minHeight: t,
                maxHeight: i,
                height: "auto"
            }) : this.element.height(Math.max(0, s.height - e)), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
        },
        _blockFrames: function () {
            this.iframeBlocks = this.document.find("iframe").map(function () {
                var t = e(this);
                return e("<div>").css({
                    position: "absolute",
                    width: t.outerWidth(),
                    height: t.outerHeight()
                }).appendTo(t.parent()).offset(t.offset())[0]
            })
        },
        _unblockFrames: function () {
            this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
        },
        _allowInteraction: function (t) {
            return e(t.target).closest(".ui-dialog").length ? !0 : !!e(t.target).closest(".ui-datepicker").length
        },
        _createOverlay: function () {
            if (this.options.modal) {
                var t = this, i = this.widgetFullName;
                e.ui.dialog.overlayInstances || this._delay(function () {
                    e.ui.dialog.overlayInstances && this.document.bind("focusin.dialog", function (s) {
                        t._allowInteraction(s) || (s.preventDefault(), e(".ui-dialog:visible:last .ui-dialog-content").data(i)._focusTabbable())
                    })
                }), this.overlay = e("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo()), this._on(this.overlay, {mousedown: "_keepFocus"}), e.ui.dialog.overlayInstances++
            }
        },
        _destroyOverlay: function () {
            this.options.modal && this.overlay && (e.ui.dialog.overlayInstances--, e.ui.dialog.overlayInstances || this.document.unbind("focusin.dialog"), this.overlay.remove(), this.overlay = null)
        }
    }), e.ui.dialog.overlayInstances = 0, e.uiBackCompat !== !1 && e.widget("ui.dialog", e.ui.dialog, {
        _position: function () {
            var t, i = this.options.position, s = [], a = [0, 0];
            i ? (("string" == typeof i || "object" == typeof i && "0" in i) && (s = i.split ? i.split(" ") : [i[0], i[1]], 1 === s.length && (s[1] = s[0]), e.each(["left", "top"], function (e, t) {
                +s[e] === s[e] && (a[e] = s[e], s[e] = t)
            }), i = {
                my: s[0] + (0 > a[0] ? a[0] : "+" + a[0]) + " " + s[1] + (0 > a[1] ? a[1] : "+" + a[1]),
                at: s.join(" ")
            }), i = e.extend({}, e.ui.dialog.prototype.options.position, i)) : i = e.ui.dialog.prototype.options.position, t = this.uiDialog.is(":visible"), t || this.uiDialog.show(), this.uiDialog.position(i), t || this.uiDialog.hide()
        }
    })
})(jQuery);
(function (e) {
    e.widget("ui.menu", {
        version: "1.10.4",
        defaultElement: "<ul>",
        delay: 300,
        options: {
            icons: {submenu: "ui-icon-carat-1-e"},
            menus: "ul",
            position: {my: "left top", at: "right top"},
            role: "menu",
            blur: null,
            focus: null,
            select: null
        },
        _create: function () {
            this.activeMenu = this.element, this.mouseHandled = !1, this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content ui-corner-all").toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length).attr({
                role: this.options.role,
                tabIndex: 0
            }).bind("click" + this.eventNamespace, e.proxy(function (e) {
                this.options.disabled && e.preventDefault()
            }, this)), this.options.disabled && this.element.addClass("ui-state-disabled").attr("aria-disabled", "true"), this._on({
                "mousedown .ui-menu-item > a": function (e) {
                    e.preventDefault()
                }, "click .ui-state-disabled > a": function (e) {
                    e.preventDefault()
                }, "click .ui-menu-item:has(a)": function (t) {
                    var i = e(t.target).closest(".ui-menu-item");
                    !this.mouseHandled && i.not(".ui-state-disabled").length && (this.select(t), t.isPropagationStopped() || (this.mouseHandled = !0), i.has(".ui-menu").length ? this.expand(t) : !this.element.is(":focus") && e(this.document[0].activeElement).closest(".ui-menu").length && (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)))
                }, "mouseenter .ui-menu-item": function (t) {
                    var i = e(t.currentTarget);
                    i.siblings().children(".ui-state-active").removeClass("ui-state-active"), this.focus(t, i)
                }, mouseleave: "collapseAll", "mouseleave .ui-menu": "collapseAll", focus: function (e, t) {
                    var i = this.active || this.element.children(".ui-menu-item").eq(0);
                    t || this.focus(e, i)
                }, blur: function (t) {
                    this._delay(function () {
                        e.contains(this.element[0], this.document[0].activeElement) || this.collapseAll(t)
                    })
                }, keydown: "_keydown"
            }), this.refresh(), this._on(this.document, {
                click: function (t) {
                    e(t.target).closest(".ui-menu").length || this.collapseAll(t), this.mouseHandled = !1
                }
            })
        },
        _destroy: function () {
            this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(), this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").children("a").removeUniqueId().removeClass("ui-corner-all ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function () {
                var t = e(this);
                t.data("ui-menu-submenu-carat") && t.remove()
            }), this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")
        },
        _keydown: function (t) {
            function i(e) {
                return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
            }

            var s, a, n, r, o, h = !0;
            switch (t.keyCode) {
                case e.ui.keyCode.PAGE_UP:
                    this.previousPage(t);
                    break;
                case e.ui.keyCode.PAGE_DOWN:
                    this.nextPage(t);
                    break;
                case e.ui.keyCode.HOME:
                    this._move("first", "first", t);
                    break;
                case e.ui.keyCode.END:
                    this._move("last", "last", t);
                    break;
                case e.ui.keyCode.UP:
                    this.previous(t);
                    break;
                case e.ui.keyCode.DOWN:
                    this.next(t);
                    break;
                case e.ui.keyCode.LEFT:
                    this.collapse(t);
                    break;
                case e.ui.keyCode.RIGHT:
                    this.active && !this.active.is(".ui-state-disabled") && this.expand(t);
                    break;
                case e.ui.keyCode.ENTER:
                case e.ui.keyCode.SPACE:
                    this._activate(t);
                    break;
                case e.ui.keyCode.ESCAPE:
                    this.collapse(t);
                    break;
                default:
                    h = !1, a = this.previousFilter || "", n = String.fromCharCode(t.keyCode), r = !1, clearTimeout(this.filterTimer), n === a ? r = !0 : n = a + n, o = RegExp("^" + i(n), "i"), s = this.activeMenu.children(".ui-menu-item").filter(function () {
                        return o.test(e(this).children("a").text())
                    }), s = r && -1 !== s.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : s, s.length || (n = String.fromCharCode(t.keyCode), o = RegExp("^" + i(n), "i"), s = this.activeMenu.children(".ui-menu-item").filter(function () {
                        return o.test(e(this).children("a").text())
                    })), s.length ? (this.focus(t, s), s.length > 1 ? (this.previousFilter = n, this.filterTimer = this._delay(function () {
                        delete this.previousFilter
                    }, 1e3)) : delete this.previousFilter) : delete this.previousFilter
            }
            h && t.preventDefault()
        },
        _activate: function (e) {
            this.active.is(".ui-state-disabled") || (this.active.children("a[aria-haspopup='true']").length ? this.expand(e) : this.select(e))
        },
        refresh: function () {
            var t, i = this.options.icons.submenu, s = this.element.find(this.options.menus);
            this.element.toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length), s.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-corner-all").hide().attr({
                role: this.options.role,
                "aria-hidden": "true",
                "aria-expanded": "false"
            }).each(function () {
                var t = e(this), s = t.prev("a"),
                    a = e("<span>").addClass("ui-menu-icon ui-icon " + i).data("ui-menu-submenu-carat", !0);
                s.attr("aria-haspopup", "true").prepend(a), t.attr("aria-labelledby", s.attr("id"))
            }), t = s.add(this.element), t.children(":not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role", "presentation").children("a").uniqueId().addClass("ui-corner-all").attr({
                tabIndex: -1,
                role: this._itemRole()
            }), t.children(":not(.ui-menu-item)").each(function () {
                var t = e(this);
                /[^\-\u2014\u2013\s]/.test(t.text()) || t.addClass("ui-widget-content ui-menu-divider")
            }), t.children(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !e.contains(this.element[0], this.active[0]) && this.blur()
        },
        _itemRole: function () {
            return {menu: "menuitem", listbox: "option"}[this.options.role]
        },
        _setOption: function (e, t) {
            "icons" === e && this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(t.submenu), this._super(e, t)
        },
        focus: function (e, t) {
            var i, s;
            this.blur(e, e && "focus" === e.type), this._scrollIntoView(t), this.active = t.first(), s = this.active.children("a").addClass("ui-state-focus"), this.options.role && this.element.attr("aria-activedescendant", s.attr("id")), this.active.parent().closest(".ui-menu-item").children("a:first").addClass("ui-state-active"), e && "keydown" === e.type ? this._close() : this.timer = this._delay(function () {
                this._close()
            }, this.delay), i = t.children(".ui-menu"), i.length && e && /^mouse/.test(e.type) && this._startOpening(i), this.activeMenu = t.parent(), this._trigger("focus", e, {item: t})
        },
        _scrollIntoView: function (t) {
            var i, s, a, n, r, o;
            this._hasScroll() && (i = parseFloat(e.css(this.activeMenu[0], "borderTopWidth")) || 0, s = parseFloat(e.css(this.activeMenu[0], "paddingTop")) || 0, a = t.offset().top - this.activeMenu.offset().top - i - s, n = this.activeMenu.scrollTop(), r = this.activeMenu.height(), o = t.height(), 0 > a ? this.activeMenu.scrollTop(n + a) : a + o > r && this.activeMenu.scrollTop(n + a - r + o))
        },
        blur: function (e, t) {
            t || clearTimeout(this.timer), this.active && (this.active.children("a").removeClass("ui-state-focus"), this.active = null, this._trigger("blur", e, {item: this.active}))
        },
        _startOpening: function (e) {
            clearTimeout(this.timer), "true" === e.attr("aria-hidden") && (this.timer = this._delay(function () {
                this._close(), this._open(e)
            }, this.delay))
        },
        _open: function (t) {
            var i = e.extend({of: this.active}, this.options.position);
            clearTimeout(this.timer), this.element.find(".ui-menu").not(t.parents(".ui-menu")).hide().attr("aria-hidden", "true"), t.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(i)
        },
        collapseAll: function (t, i) {
            clearTimeout(this.timer), this.timer = this._delay(function () {
                var s = i ? this.element : e(t && t.target).closest(this.element.find(".ui-menu"));
                s.length || (s = this.element), this._close(s), this.blur(t), this.activeMenu = s
            }, this.delay)
        },
        _close: function (e) {
            e || (e = this.active ? this.active.parent() : this.element), e.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false").end().find("a.ui-state-active").removeClass("ui-state-active")
        },
        collapse: function (e) {
            var t = this.active && this.active.parent().closest(".ui-menu-item", this.element);
            t && t.length && (this._close(), this.focus(e, t))
        },
        expand: function (e) {
            var t = this.active && this.active.children(".ui-menu ").children(".ui-menu-item").first();
            t && t.length && (this._open(t.parent()), this._delay(function () {
                this.focus(e, t)
            }))
        },
        next: function (e) {
            this._move("next", "first", e)
        },
        previous: function (e) {
            this._move("prev", "last", e)
        },
        isFirstItem: function () {
            return this.active && !this.active.prevAll(".ui-menu-item").length
        },
        isLastItem: function () {
            return this.active && !this.active.nextAll(".ui-menu-item").length
        },
        _move: function (e, t, i) {
            var s;
            this.active && (s = "first" === e || "last" === e ? this.active["first" === e ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[e + "All"](".ui-menu-item").eq(0)), s && s.length && this.active || (s = this.activeMenu.children(".ui-menu-item")[t]()), this.focus(i, s)
        },
        nextPage: function (t) {
            var i, s, a;
            return this.active ? (this.isLastItem() || (this._hasScroll() ? (s = this.active.offset().top, a = this.element.height(), this.active.nextAll(".ui-menu-item").each(function () {
                return i = e(this), 0 > i.offset().top - s - a
            }), this.focus(t, i)) : this.focus(t, this.activeMenu.children(".ui-menu-item")[this.active ? "last" : "first"]())), undefined) : (this.next(t), undefined)
        },
        previousPage: function (t) {
            var i, s, a;
            return this.active ? (this.isFirstItem() || (this._hasScroll() ? (s = this.active.offset().top, a = this.element.height(), this.active.prevAll(".ui-menu-item").each(function () {
                return i = e(this), i.offset().top - s + a > 0
            }), this.focus(t, i)) : this.focus(t, this.activeMenu.children(".ui-menu-item").first())), undefined) : (this.next(t), undefined)
        },
        _hasScroll: function () {
            return this.element.outerHeight() < this.element.prop("scrollHeight")
        },
        select: function (t) {
            this.active = this.active || e(t.target).closest(".ui-menu-item");
            var i = {item: this.active};
            this.active.has(".ui-menu").length || this.collapseAll(t, !0), this._trigger("select", t, i)
        }
    })
})(jQuery);
(function (e, t) {
    e.widget("ui.progressbar", {
        version: "1.10.4",
        options: {max: 100, value: 0, change: null, complete: null},
        min: 0,
        _create: function () {
            this.oldValue = this.options.value = this._constrainedValue(), this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({
                role: "progressbar",
                "aria-valuemin": this.min
            }), this.valueDiv = e("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element), this._refreshValue()
        },
        _destroy: function () {
            this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"), this.valueDiv.remove()
        },
        value: function (e) {
            return e === t ? this.options.value : (this.options.value = this._constrainedValue(e), this._refreshValue(), t)
        },
        _constrainedValue: function (e) {
            return e === t && (e = this.options.value), this.indeterminate = e === !1, "number" != typeof e && (e = 0), this.indeterminate ? !1 : Math.min(this.options.max, Math.max(this.min, e))
        },
        _setOptions: function (e) {
            var t = e.value;
            delete e.value, this._super(e), this.options.value = this._constrainedValue(t), this._refreshValue()
        },
        _setOption: function (e, t) {
            "max" === e && (t = Math.max(this.min, t)), this._super(e, t)
        },
        _percentage: function () {
            return this.indeterminate ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min)
        },
        _refreshValue: function () {
            var t = this.options.value, i = this._percentage();
            this.valueDiv.toggle(this.indeterminate || t > this.min).toggleClass("ui-corner-right", t === this.options.max).width(i.toFixed(0) + "%"), this.element.toggleClass("ui-progressbar-indeterminate", this.indeterminate), this.indeterminate ? (this.element.removeAttr("aria-valuenow"), this.overlayDiv || (this.overlayDiv = e("<div class='ui-progressbar-overlay'></div>").appendTo(this.valueDiv))) : (this.element.attr({
                "aria-valuemax": this.options.max,
                "aria-valuenow": t
            }), this.overlayDiv && (this.overlayDiv.remove(), this.overlayDiv = null)), this.oldValue !== t && (this.oldValue = t, this._trigger("change")), t === this.options.max && this._trigger("complete")
        }
    })
})(jQuery);
(function (e) {
    var t = 5;
    e.widget("ui.slider", e.ui.mouse, {
        version: "1.10.4",
        widgetEventPrefix: "slide",
        options: {
            animate: !1,
            distance: 0,
            max: 100,
            min: 0,
            orientation: "horizontal",
            range: !1,
            step: 1,
            value: 0,
            values: null,
            change: null,
            slide: null,
            start: null,
            stop: null
        },
        _create: function () {
            this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget" + " ui-widget-content" + " ui-corner-all"), this._refresh(), this._setOption("disabled", this.options.disabled), this._animateOff = !1
        },
        _refresh: function () {
            this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue()
        },
        _createHandles: function () {
            var t, i, s = this.options,
                a = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),
                n = "<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>", r = [];
            for (i = s.values && s.values.length || 1, a.length > i && (a.slice(i).remove(), a = a.slice(0, i)), t = a.length; i > t; t++) r.push(n);
            this.handles = a.add(e(r.join("")).appendTo(this.element)), this.handle = this.handles.eq(0), this.handles.each(function (t) {
                e(this).data("ui-slider-handle-index", t)
            })
        },
        _createRange: function () {
            var t = this.options, i = "";
            t.range ? (t.range === !0 && (t.values ? t.values.length && 2 !== t.values.length ? t.values = [t.values[0], t.values[0]] : e.isArray(t.values) && (t.values = t.values.slice(0)) : t.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({
                left: "",
                bottom: ""
            }) : (this.range = e("<div></div>").appendTo(this.element), i = "ui-slider-range ui-widget-header ui-corner-all"), this.range.addClass(i + ("min" === t.range || "max" === t.range ? " ui-slider-range-" + t.range : ""))) : (this.range && this.range.remove(), this.range = null)
        },
        _setupEvents: function () {
            var e = this.handles.add(this.range).filter("a");
            this._off(e), this._on(e, this._handleEvents), this._hoverable(e), this._focusable(e)
        },
        _destroy: function () {
            this.handles.remove(), this.range && this.range.remove(), this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"), this._mouseDestroy()
        },
        _mouseCapture: function (t) {
            var i, s, a, n, r, o, h, l, u = this, d = this.options;
            return d.disabled ? !1 : (this.elementSize = {
                width: this.element.outerWidth(),
                height: this.element.outerHeight()
            }, this.elementOffset = this.element.offset(), i = {
                x: t.pageX,
                y: t.pageY
            }, s = this._normValueFromMouse(i), a = this._valueMax() - this._valueMin() + 1, this.handles.each(function (t) {
                var i = Math.abs(s - u.values(t));
                (a > i || a === i && (t === u._lastChangedValue || u.values(t) === d.min)) && (a = i, n = e(this), r = t)
            }), o = this._start(t, r), o === !1 ? !1 : (this._mouseSliding = !0, this._handleIndex = r, n.addClass("ui-state-active").focus(), h = n.offset(), l = !e(t.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = l ? {
                left: 0,
                top: 0
            } : {
                left: t.pageX - h.left - n.width() / 2,
                top: t.pageY - h.top - n.height() / 2 - (parseInt(n.css("borderTopWidth"), 10) || 0) - (parseInt(n.css("borderBottomWidth"), 10) || 0) + (parseInt(n.css("marginTop"), 10) || 0)
            }, this.handles.hasClass("ui-state-hover") || this._slide(t, r, s), this._animateOff = !0, !0))
        },
        _mouseStart: function () {
            return !0
        },
        _mouseDrag: function (e) {
            var t = {x: e.pageX, y: e.pageY}, i = this._normValueFromMouse(t);
            return this._slide(e, this._handleIndex, i), !1
        },
        _mouseStop: function (e) {
            return this.handles.removeClass("ui-state-active"), this._mouseSliding = !1, this._stop(e, this._handleIndex), this._change(e, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1
        },
        _detectOrientation: function () {
            this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
        },
        _normValueFromMouse: function (e) {
            var t, i, s, a, n;
            return "horizontal" === this.orientation ? (t = this.elementSize.width, i = e.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (t = this.elementSize.height, i = e.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), s = i / t, s > 1 && (s = 1), 0 > s && (s = 0), "vertical" === this.orientation && (s = 1 - s), a = this._valueMax() - this._valueMin(), n = this._valueMin() + s * a, this._trimAlignValue(n)
        },
        _start: function (e, t) {
            var i = {handle: this.handles[t], value: this.value()};
            return this.options.values && this.options.values.length && (i.value = this.values(t), i.values = this.values()), this._trigger("start", e, i)
        },
        _slide: function (e, t, i) {
            var s, a, n;
            this.options.values && this.options.values.length ? (s = this.values(t ? 0 : 1), 2 === this.options.values.length && this.options.range === !0 && (0 === t && i > s || 1 === t && s > i) && (i = s), i !== this.values(t) && (a = this.values(), a[t] = i, n = this._trigger("slide", e, {
                handle: this.handles[t],
                value: i,
                values: a
            }), s = this.values(t ? 0 : 1), n !== !1 && this.values(t, i))) : i !== this.value() && (n = this._trigger("slide", e, {
                handle: this.handles[t],
                value: i
            }), n !== !1 && this.value(i))
        },
        _stop: function (e, t) {
            var i = {handle: this.handles[t], value: this.value()};
            this.options.values && this.options.values.length && (i.value = this.values(t), i.values = this.values()), this._trigger("stop", e, i)
        },
        _change: function (e, t) {
            if (!this._keySliding && !this._mouseSliding) {
                var i = {handle: this.handles[t], value: this.value()};
                this.options.values && this.options.values.length && (i.value = this.values(t), i.values = this.values()), this._lastChangedValue = t, this._trigger("change", e, i)
            }
        },
        value: function (e) {
            return arguments.length ? (this.options.value = this._trimAlignValue(e), this._refreshValue(), this._change(null, 0), undefined) : this._value()
        },
        values: function (t, i) {
            var s, a, n;
            if (arguments.length > 1) return this.options.values[t] = this._trimAlignValue(i), this._refreshValue(), this._change(null, t), undefined;
            if (!arguments.length) return this._values();
            if (!e.isArray(arguments[0])) return this.options.values && this.options.values.length ? this._values(t) : this.value();
            for (s = this.options.values, a = arguments[0], n = 0; s.length > n; n += 1) s[n] = this._trimAlignValue(a[n]), this._change(null, n);
            this._refreshValue()
        },
        _setOption: function (t, i) {
            var s, a = 0;
            switch ("range" === t && this.options.range === !0 && ("min" === i ? (this.options.value = this._values(0), this.options.values = null) : "max" === i && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), e.isArray(this.options.values) && (a = this.options.values.length), e.Widget.prototype._setOption.apply(this, arguments), t) {
                case"orientation":
                    this._detectOrientation(), this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation), this._refreshValue();
                    break;
                case"value":
                    this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
                    break;
                case"values":
                    for (this._animateOff = !0, this._refreshValue(), s = 0; a > s; s += 1) this._change(null, s);
                    this._animateOff = !1;
                    break;
                case"min":
                case"max":
                    this._animateOff = !0, this._refreshValue(), this._animateOff = !1;
                    break;
                case"range":
                    this._animateOff = !0, this._refresh(), this._animateOff = !1
            }
        },
        _value: function () {
            var e = this.options.value;
            return e = this._trimAlignValue(e)
        },
        _values: function (e) {
            var t, i, s;
            if (arguments.length) return t = this.options.values[e], t = this._trimAlignValue(t);
            if (this.options.values && this.options.values.length) {
                for (i = this.options.values.slice(), s = 0; i.length > s; s += 1) i[s] = this._trimAlignValue(i[s]);
                return i
            }
            return []
        },
        _trimAlignValue: function (e) {
            if (this._valueMin() >= e) return this._valueMin();
            if (e >= this._valueMax()) return this._valueMax();
            var t = this.options.step > 0 ? this.options.step : 1, i = (e - this._valueMin()) % t, s = e - i;
            return 2 * Math.abs(i) >= t && (s += i > 0 ? t : -t), parseFloat(s.toFixed(5))
        },
        _valueMin: function () {
            return this.options.min
        },
        _valueMax: function () {
            return this.options.max
        },
        _refreshValue: function () {
            var t, i, s, a, n, r = this.options.range, o = this.options, h = this,
                l = this._animateOff ? !1 : o.animate, u = {};
            this.options.values && this.options.values.length ? this.handles.each(function (s) {
                i = 100 * ((h.values(s) - h._valueMin()) / (h._valueMax() - h._valueMin())), u["horizontal" === h.orientation ? "left" : "bottom"] = i + "%", e(this).stop(1, 1)[l ? "animate" : "css"](u, o.animate), h.options.range === !0 && ("horizontal" === h.orientation ? (0 === s && h.range.stop(1, 1)[l ? "animate" : "css"]({left: i + "%"}, o.animate), 1 === s && h.range[l ? "animate" : "css"]({width: i - t + "%"}, {
                    queue: !1,
                    duration: o.animate
                })) : (0 === s && h.range.stop(1, 1)[l ? "animate" : "css"]({bottom: i + "%"}, o.animate), 1 === s && h.range[l ? "animate" : "css"]({height: i - t + "%"}, {
                    queue: !1,
                    duration: o.animate
                }))), t = i
            }) : (s = this.value(), a = this._valueMin(), n = this._valueMax(), i = n !== a ? 100 * ((s - a) / (n - a)) : 0, u["horizontal" === this.orientation ? "left" : "bottom"] = i + "%", this.handle.stop(1, 1)[l ? "animate" : "css"](u, o.animate), "min" === r && "horizontal" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({width: i + "%"}, o.animate), "max" === r && "horizontal" === this.orientation && this.range[l ? "animate" : "css"]({width: 100 - i + "%"}, {
                queue: !1,
                duration: o.animate
            }), "min" === r && "vertical" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({height: i + "%"}, o.animate), "max" === r && "vertical" === this.orientation && this.range[l ? "animate" : "css"]({height: 100 - i + "%"}, {
                queue: !1,
                duration: o.animate
            }))
        },
        _handleEvents: {
            keydown: function (i) {
                var s, a, n, r, o = e(i.target).data("ui-slider-handle-index");
                switch (i.keyCode) {
                    case e.ui.keyCode.HOME:
                    case e.ui.keyCode.END:
                    case e.ui.keyCode.PAGE_UP:
                    case e.ui.keyCode.PAGE_DOWN:
                    case e.ui.keyCode.UP:
                    case e.ui.keyCode.RIGHT:
                    case e.ui.keyCode.DOWN:
                    case e.ui.keyCode.LEFT:
                        if (i.preventDefault(), !this._keySliding && (this._keySliding = !0, e(i.target).addClass("ui-state-active"), s = this._start(i, o), s === !1)) return
                }
                switch (r = this.options.step, a = n = this.options.values && this.options.values.length ? this.values(o) : this.value(), i.keyCode) {
                    case e.ui.keyCode.HOME:
                        n = this._valueMin();
                        break;
                    case e.ui.keyCode.END:
                        n = this._valueMax();
                        break;
                    case e.ui.keyCode.PAGE_UP:
                        n = this._trimAlignValue(a + (this._valueMax() - this._valueMin()) / t);
                        break;
                    case e.ui.keyCode.PAGE_DOWN:
                        n = this._trimAlignValue(a - (this._valueMax() - this._valueMin()) / t);
                        break;
                    case e.ui.keyCode.UP:
                    case e.ui.keyCode.RIGHT:
                        if (a === this._valueMax()) return;
                        n = this._trimAlignValue(a + r);
                        break;
                    case e.ui.keyCode.DOWN:
                    case e.ui.keyCode.LEFT:
                        if (a === this._valueMin()) return;
                        n = this._trimAlignValue(a - r)
                }
                this._slide(i, o, n)
            }, click: function (e) {
                e.preventDefault()
            }, keyup: function (t) {
                var i = e(t.target).data("ui-slider-handle-index");
                this._keySliding && (this._keySliding = !1, this._stop(t, i), this._change(t, i), e(t.target).removeClass("ui-state-active"))
            }
        }
    })
})(jQuery);
(function (e) {
    function t(e) {
        return function () {
            var t = this.element.val();
            e.apply(this, arguments), this._refresh(), t !== this.element.val() && this._trigger("change")
        }
    }

    e.widget("ui.spinner", {
        version: "1.10.4",
        defaultElement: "<input>",
        widgetEventPrefix: "spin",
        options: {
            culture: null,
            icons: {down: "ui-icon-triangle-1-s", up: "ui-icon-triangle-1-n"},
            incremental: !0,
            max: null,
            min: null,
            numberFormat: null,
            page: 10,
            step: 1,
            change: null,
            spin: null,
            start: null,
            stop: null
        },
        _create: function () {
            this._setOption("max", this.options.max), this._setOption("min", this.options.min), this._setOption("step", this.options.step), "" !== this.value() && this._value(this.element.val(), !0), this._draw(), this._on(this._events), this._refresh(), this._on(this.window, {
                beforeunload: function () {
                    this.element.removeAttr("autocomplete")
                }
            })
        },
        _getCreateOptions: function () {
            var t = {}, i = this.element;
            return e.each(["min", "max", "step"], function (e, s) {
                var a = i.attr(s);
                void 0 !== a && a.length && (t[s] = a)
            }), t
        },
        _events: {
            keydown: function (e) {
                this._start(e) && this._keydown(e) && e.preventDefault()
            }, keyup: "_stop", focus: function () {
                this.previous = this.element.val()
            }, blur: function (e) {
                return this.cancelBlur ? (delete this.cancelBlur, void 0) : (this._stop(), this._refresh(), this.previous !== this.element.val() && this._trigger("change", e), void 0)
            }, mousewheel: function (e, t) {
                if (t) {
                    if (!this.spinning && !this._start(e)) return !1;
                    this._spin((t > 0 ? 1 : -1) * this.options.step, e), clearTimeout(this.mousewheelTimer), this.mousewheelTimer = this._delay(function () {
                        this.spinning && this._stop(e)
                    }, 100), e.preventDefault()
                }
            }, "mousedown .ui-spinner-button": function (t) {
                function i() {
                    var e = this.element[0] === this.document[0].activeElement;
                    e || (this.element.focus(), this.previous = s, this._delay(function () {
                        this.previous = s
                    }))
                }

                var s;
                s = this.element[0] === this.document[0].activeElement ? this.previous : this.element.val(), t.preventDefault(), i.call(this), this.cancelBlur = !0, this._delay(function () {
                    delete this.cancelBlur, i.call(this)
                }), this._start(t) !== !1 && this._repeat(null, e(t.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, t)
            }, "mouseup .ui-spinner-button": "_stop", "mouseenter .ui-spinner-button": function (t) {
                return e(t.currentTarget).hasClass("ui-state-active") ? this._start(t) === !1 ? !1 : (this._repeat(null, e(t.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, t), void 0) : void 0
            }, "mouseleave .ui-spinner-button": "_stop"
        },
        _draw: function () {
            var e = this.uiSpinner = this.element.addClass("ui-spinner-input").attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());
            this.element.attr("role", "spinbutton"), this.buttons = e.find(".ui-spinner-button").attr("tabIndex", -1).button().removeClass("ui-corner-all"), this.buttons.height() > Math.ceil(.5 * e.height()) && e.height() > 0 && e.height(e.height()), this.options.disabled && this.disable()
        },
        _keydown: function (t) {
            var i = this.options, s = e.ui.keyCode;
            switch (t.keyCode) {
                case s.UP:
                    return this._repeat(null, 1, t), !0;
                case s.DOWN:
                    return this._repeat(null, -1, t), !0;
                case s.PAGE_UP:
                    return this._repeat(null, i.page, t), !0;
                case s.PAGE_DOWN:
                    return this._repeat(null, -i.page, t), !0
            }
            return !1
        },
        _uiSpinnerHtml: function () {
            return "<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>"
        },
        _buttonHtml: function () {
            return "<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon " + this.options.icons.up + "'>&#9650;</span>" + "</a>" + "<a class='ui-spinner-button ui-spinner-down ui-corner-br'>" + "<span class='ui-icon " + this.options.icons.down + "'>&#9660;</span>" + "</a>"
        },
        _start: function (e) {
            return this.spinning || this._trigger("start", e) !== !1 ? (this.counter || (this.counter = 1), this.spinning = !0, !0) : !1
        },
        _repeat: function (e, t, i) {
            e = e || 500, clearTimeout(this.timer), this.timer = this._delay(function () {
                this._repeat(40, t, i)
            }, e), this._spin(t * this.options.step, i)
        },
        _spin: function (e, t) {
            var i = this.value() || 0;
            this.counter || (this.counter = 1), i = this._adjustValue(i + e * this._increment(this.counter)), this.spinning && this._trigger("spin", t, {value: i}) === !1 || (this._value(i), this.counter++)
        },
        _increment: function (t) {
            var i = this.options.incremental;
            return i ? e.isFunction(i) ? i(t) : Math.floor(t * t * t / 5e4 - t * t / 500 + 17 * t / 200 + 1) : 1
        },
        _precision: function () {
            var e = this._precisionOf(this.options.step);
            return null !== this.options.min && (e = Math.max(e, this._precisionOf(this.options.min))), e
        },
        _precisionOf: function (e) {
            var t = "" + e, i = t.indexOf(".");
            return -1 === i ? 0 : t.length - i - 1
        },
        _adjustValue: function (e) {
            var t, i, s = this.options;
            return t = null !== s.min ? s.min : 0, i = e - t, i = Math.round(i / s.step) * s.step, e = t + i, e = parseFloat(e.toFixed(this._precision())), null !== s.max && e > s.max ? s.max : null !== s.min && s.min > e ? s.min : e
        },
        _stop: function (e) {
            this.spinning && (clearTimeout(this.timer), clearTimeout(this.mousewheelTimer), this.counter = 0, this.spinning = !1, this._trigger("stop", e))
        },
        _setOption: function (e, t) {
            if ("culture" === e || "numberFormat" === e) {
                var i = this._parse(this.element.val());
                return this.options[e] = t, this.element.val(this._format(i)), void 0
            }
            ("max" === e || "min" === e || "step" === e) && "string" == typeof t && (t = this._parse(t)), "icons" === e && (this.buttons.first().find(".ui-icon").removeClass(this.options.icons.up).addClass(t.up), this.buttons.last().find(".ui-icon").removeClass(this.options.icons.down).addClass(t.down)), this._super(e, t), "disabled" === e && (t ? (this.element.prop("disabled", !0), this.buttons.button("disable")) : (this.element.prop("disabled", !1), this.buttons.button("enable")))
        },
        _setOptions: t(function (e) {
            this._super(e), this._value(this.element.val())
        }),
        _parse: function (e) {
            return "string" == typeof e && "" !== e && (e = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(e, 10, this.options.culture) : +e), "" === e || isNaN(e) ? null : e
        },
        _format: function (e) {
            return "" === e ? "" : window.Globalize && this.options.numberFormat ? Globalize.format(e, this.options.numberFormat, this.options.culture) : e
        },
        _refresh: function () {
            this.element.attr({
                "aria-valuemin": this.options.min,
                "aria-valuemax": this.options.max,
                "aria-valuenow": this._parse(this.element.val())
            })
        },
        _value: function (e, t) {
            var i;
            "" !== e && (i = this._parse(e), null !== i && (t || (i = this._adjustValue(i)), e = this._format(i))), this.element.val(e), this._refresh()
        },
        _destroy: function () {
            this.element.removeClass("ui-spinner-input").prop("disabled", !1).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"), this.uiSpinner.replaceWith(this.element)
        },
        stepUp: t(function (e) {
            this._stepUp(e)
        }),
        _stepUp: function (e) {
            this._start() && (this._spin((e || 1) * this.options.step), this._stop())
        },
        stepDown: t(function (e) {
            this._stepDown(e)
        }),
        _stepDown: function (e) {
            this._start() && (this._spin((e || 1) * -this.options.step), this._stop())
        },
        pageUp: t(function (e) {
            this._stepUp((e || 1) * this.options.page)
        }),
        pageDown: t(function (e) {
            this._stepDown((e || 1) * this.options.page)
        }),
        value: function (e) {
            return arguments.length ? (t(this._value).call(this, e), void 0) : this._parse(this.element.val())
        },
        widget: function () {
            return this.uiSpinner
        }
    })
})(jQuery);
(function (e, t) {
    function i() {
        return ++a
    }

    function s(e) {
        return e = e.cloneNode(!1), e.hash.length > 1 && decodeURIComponent(e.href.replace(n, "")) === decodeURIComponent(location.href.replace(n, ""))
    }

    var a = 0, n = /#.*$/;
    e.widget("ui.tabs", {
        version: "1.10.4",
        delay: 300,
        options: {
            active: null,
            collapsible: !1,
            event: "click",
            heightStyle: "content",
            hide: null,
            show: null,
            activate: null,
            beforeActivate: null,
            beforeLoad: null,
            load: null
        },
        _create: function () {
            var t = this, i = this.options;
            this.running = !1, this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible", i.collapsible).delegate(".ui-tabs-nav > li", "mousedown" + this.eventNamespace, function (t) {
                e(this).is(".ui-state-disabled") && t.preventDefault()
            }).delegate(".ui-tabs-anchor", "focus" + this.eventNamespace, function () {
                e(this).closest("li").is(".ui-state-disabled") && this.blur()
            }), this._processTabs(), i.active = this._initialActive(), e.isArray(i.disabled) && (i.disabled = e.unique(i.disabled.concat(e.map(this.tabs.filter(".ui-state-disabled"), function (e) {
                return t.tabs.index(e)
            }))).sort()), this.active = this.options.active !== !1 && this.anchors.length ? this._findActive(i.active) : e(), this._refresh(), this.active.length && this.load(i.active)
        },
        _initialActive: function () {
            var i = this.options.active, s = this.options.collapsible, a = location.hash.substring(1);
            return null === i && (a && this.tabs.each(function (s, n) {
                return e(n).attr("aria-controls") === a ? (i = s, !1) : t
            }), null === i && (i = this.tabs.index(this.tabs.filter(".ui-tabs-active"))), (null === i || -1 === i) && (i = this.tabs.length ? 0 : !1)), i !== !1 && (i = this.tabs.index(this.tabs.eq(i)), -1 === i && (i = s ? !1 : 0)), !s && i === !1 && this.anchors.length && (i = 0), i
        },
        _getCreateEventData: function () {
            return {tab: this.active, panel: this.active.length ? this._getPanelForTab(this.active) : e()}
        },
        _tabKeydown: function (i) {
            var s = e(this.document[0].activeElement).closest("li"), a = this.tabs.index(s), n = !0;
            if (!this._handlePageNav(i)) {
                switch (i.keyCode) {
                    case e.ui.keyCode.RIGHT:
                    case e.ui.keyCode.DOWN:
                        a++;
                        break;
                    case e.ui.keyCode.UP:
                    case e.ui.keyCode.LEFT:
                        n = !1, a--;
                        break;
                    case e.ui.keyCode.END:
                        a = this.anchors.length - 1;
                        break;
                    case e.ui.keyCode.HOME:
                        a = 0;
                        break;
                    case e.ui.keyCode.SPACE:
                        return i.preventDefault(), clearTimeout(this.activating), this._activate(a), t;
                    case e.ui.keyCode.ENTER:
                        return i.preventDefault(), clearTimeout(this.activating), this._activate(a === this.options.active ? !1 : a), t;
                    default:
                        return
                }
                i.preventDefault(), clearTimeout(this.activating), a = this._focusNextTab(a, n), i.ctrlKey || (s.attr("aria-selected", "false"), this.tabs.eq(a).attr("aria-selected", "true"), this.activating = this._delay(function () {
                    this.option("active", a)
                }, this.delay))
            }
        },
        _panelKeydown: function (t) {
            this._handlePageNav(t) || t.ctrlKey && t.keyCode === e.ui.keyCode.UP && (t.preventDefault(), this.active.focus())
        },
        _handlePageNav: function (i) {
            return i.altKey && i.keyCode === e.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), !0) : i.altKey && i.keyCode === e.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), !0) : t
        },
        _findNextTab: function (t, i) {
            function s() {
                return t > a && (t = 0), 0 > t && (t = a), t
            }

            for (var a = this.tabs.length - 1; -1 !== e.inArray(s(), this.options.disabled);) t = i ? t + 1 : t - 1;
            return t
        },
        _focusNextTab: function (e, t) {
            return e = this._findNextTab(e, t), this.tabs.eq(e).focus(), e
        },
        _setOption: function (e, i) {
            return "active" === e ? (this._activate(i), t) : "disabled" === e ? (this._setupDisabled(i), t) : (this._super(e, i), "collapsible" === e && (this.element.toggleClass("ui-tabs-collapsible", i), i || this.options.active !== !1 || this._activate(0)), "event" === e && this._setupEvents(i), "heightStyle" === e && this._setupHeightStyle(i), t)
        },
        _tabId: function (e) {
            return e.attr("aria-controls") || "ui-tabs-" + i()
        },
        _sanitizeSelector: function (e) {
            return e ? e.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : ""
        },
        refresh: function () {
            var t = this.options, i = this.tablist.children(":has(a[href])");
            t.disabled = e.map(i.filter(".ui-state-disabled"), function (e) {
                return i.index(e)
            }), this._processTabs(), t.active !== !1 && this.anchors.length ? this.active.length && !e.contains(this.tablist[0], this.active[0]) ? this.tabs.length === t.disabled.length ? (t.active = !1, this.active = e()) : this._activate(this._findNextTab(Math.max(0, t.active - 1), !1)) : t.active = this.tabs.index(this.active) : (t.active = !1, this.active = e()), this._refresh()
        },
        _refresh: function () {
            this._setupDisabled(this.options.disabled), this._setupEvents(this.options.event), this._setupHeightStyle(this.options.heightStyle), this.tabs.not(this.active).attr({
                "aria-selected": "false",
                tabIndex: -1
            }), this.panels.not(this._getPanelForTab(this.active)).hide().attr({
                "aria-expanded": "false",
                "aria-hidden": "true"
            }), this.active.length ? (this.active.addClass("ui-tabs-active ui-state-active").attr({
                "aria-selected": "true",
                tabIndex: 0
            }), this._getPanelForTab(this.active).show().attr({
                "aria-expanded": "true",
                "aria-hidden": "false"
            })) : this.tabs.eq(0).attr("tabIndex", 0)
        },
        _processTabs: function () {
            var t = this;
            this.tablist = this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role", "tablist"), this.tabs = this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({
                role: "tab",
                tabIndex: -1
            }), this.anchors = this.tabs.map(function () {
                return e("a", this)[0]
            }).addClass("ui-tabs-anchor").attr({
                role: "presentation",
                tabIndex: -1
            }), this.panels = e(), this.anchors.each(function (i, a) {
                var n, r, o, h = e(a).uniqueId().attr("id"), l = e(a).closest("li"), u = l.attr("aria-controls");
                s(a) ? (n = a.hash, r = t.element.find(t._sanitizeSelector(n))) : (o = t._tabId(l), n = "#" + o, r = t.element.find(n), r.length || (r = t._createPanel(o), r.insertAfter(t.panels[i - 1] || t.tablist)), r.attr("aria-live", "polite")), r.length && (t.panels = t.panels.add(r)), u && l.data("ui-tabs-aria-controls", u), l.attr({
                    "aria-controls": n.substring(1),
                    "aria-labelledby": h
                }), r.attr("aria-labelledby", h)
            }), this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role", "tabpanel")
        },
        _getList: function () {
            return this.tablist || this.element.find("ol,ul").eq(0)
        },
        _createPanel: function (t) {
            return e("<div>").attr("id", t).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy", !0)
        },
        _setupDisabled: function (t) {
            e.isArray(t) && (t.length ? t.length === this.anchors.length && (t = !0) : t = !1);
            for (var i, s = 0; i = this.tabs[s]; s++) t === !0 || -1 !== e.inArray(s, t) ? e(i).addClass("ui-state-disabled").attr("aria-disabled", "true") : e(i).removeClass("ui-state-disabled").removeAttr("aria-disabled");
            this.options.disabled = t
        },
        _setupEvents: function (t) {
            var i = {
                click: function (e) {
                    e.preventDefault()
                }
            };
            t && e.each(t.split(" "), function (e, t) {
                i[t] = "_eventHandler"
            }), this._off(this.anchors.add(this.tabs).add(this.panels)), this._on(this.anchors, i), this._on(this.tabs, {keydown: "_tabKeydown"}), this._on(this.panels, {keydown: "_panelKeydown"}), this._focusable(this.tabs), this._hoverable(this.tabs)
        },
        _setupHeightStyle: function (t) {
            var i, s = this.element.parent();
            "fill" === t ? (i = s.height(), i -= this.element.outerHeight() - this.element.height(), this.element.siblings(":visible").each(function () {
                var t = e(this), s = t.css("position");
                "absolute" !== s && "fixed" !== s && (i -= t.outerHeight(!0))
            }), this.element.children().not(this.panels).each(function () {
                i -= e(this).outerHeight(!0)
            }), this.panels.each(function () {
                e(this).height(Math.max(0, i - e(this).innerHeight() + e(this).height()))
            }).css("overflow", "auto")) : "auto" === t && (i = 0, this.panels.each(function () {
                i = Math.max(i, e(this).height("").height())
            }).height(i))
        },
        _eventHandler: function (t) {
            var i = this.options, s = this.active, a = e(t.currentTarget), n = a.closest("li"), r = n[0] === s[0],
                o = r && i.collapsible, h = o ? e() : this._getPanelForTab(n),
                l = s.length ? this._getPanelForTab(s) : e(),
                u = {oldTab: s, oldPanel: l, newTab: o ? e() : n, newPanel: h};
            t.preventDefault(), n.hasClass("ui-state-disabled") || n.hasClass("ui-tabs-loading") || this.running || r && !i.collapsible || this._trigger("beforeActivate", t, u) === !1 || (i.active = o ? !1 : this.tabs.index(n), this.active = r ? e() : n, this.xhr && this.xhr.abort(), l.length || h.length || e.error("jQuery UI Tabs: Mismatching fragment identifier."), h.length && this.load(this.tabs.index(n), t), this._toggle(t, u))
        },
        _toggle: function (t, i) {
            function s() {
                n.running = !1, n._trigger("activate", t, i)
            }

            function a() {
                i.newTab.closest("li").addClass("ui-tabs-active ui-state-active"), r.length && n.options.show ? n._show(r, n.options.show, s) : (r.show(), s())
            }

            var n = this, r = i.newPanel, o = i.oldPanel;
            this.running = !0, o.length && this.options.hide ? this._hide(o, this.options.hide, function () {
                i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), a()
            }) : (i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), o.hide(), a()), o.attr({
                "aria-expanded": "false",
                "aria-hidden": "true"
            }), i.oldTab.attr("aria-selected", "false"), r.length && o.length ? i.oldTab.attr("tabIndex", -1) : r.length && this.tabs.filter(function () {
                return 0 === e(this).attr("tabIndex")
            }).attr("tabIndex", -1), r.attr({
                "aria-expanded": "true",
                "aria-hidden": "false"
            }), i.newTab.attr({"aria-selected": "true", tabIndex: 0})
        },
        _activate: function (t) {
            var i, s = this._findActive(t);
            s[0] !== this.active[0] && (s.length || (s = this.active), i = s.find(".ui-tabs-anchor")[0], this._eventHandler({
                target: i,
                currentTarget: i,
                preventDefault: e.noop
            }))
        },
        _findActive: function (t) {
            return t === !1 ? e() : this.tabs.eq(t)
        },
        _getIndex: function (e) {
            return "string" == typeof e && (e = this.anchors.index(this.anchors.filter("[href$='" + e + "']"))), e
        },
        _destroy: function () {
            this.xhr && this.xhr.abort(), this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"), this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"), this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId(), this.tabs.add(this.panels).each(function () {
                e.data(this, "ui-tabs-destroy") ? e(this).remove() : e(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")
            }), this.tabs.each(function () {
                var t = e(this), i = t.data("ui-tabs-aria-controls");
                i ? t.attr("aria-controls", i).removeData("ui-tabs-aria-controls") : t.removeAttr("aria-controls")
            }), this.panels.show(), "content" !== this.options.heightStyle && this.panels.css("height", "")
        },
        enable: function (i) {
            var s = this.options.disabled;
            s !== !1 && (i === t ? s = !1 : (i = this._getIndex(i), s = e.isArray(s) ? e.map(s, function (e) {
                return e !== i ? e : null
            }) : e.map(this.tabs, function (e, t) {
                return t !== i ? t : null
            })), this._setupDisabled(s))
        },
        disable: function (i) {
            var s = this.options.disabled;
            if (s !== !0) {
                if (i === t) s = !0; else {
                    if (i = this._getIndex(i), -1 !== e.inArray(i, s)) return;
                    s = e.isArray(s) ? e.merge([i], s).sort() : [i]
                }
                this._setupDisabled(s)
            }
        },
        load: function (t, i) {
            t = this._getIndex(t);
            var a = this, n = this.tabs.eq(t), r = n.find(".ui-tabs-anchor"), o = this._getPanelForTab(n),
                h = {tab: n, panel: o};
            s(r[0]) || (this.xhr = e.ajax(this._ajaxSettings(r, i, h)), this.xhr && "canceled" !== this.xhr.statusText && (n.addClass("ui-tabs-loading"), o.attr("aria-busy", "true"), this.xhr.success(function (e) {
                setTimeout(function () {
                    o.html(e), a._trigger("load", i, h)
                }, 1)
            }).complete(function (e, t) {
                setTimeout(function () {
                    "abort" === t && a.panels.stop(!1, !0), n.removeClass("ui-tabs-loading"), o.removeAttr("aria-busy"), e === a.xhr && delete a.xhr
                }, 1)
            })))
        },
        _ajaxSettings: function (t, i, s) {
            var a = this;
            return {
                url: t.attr("href"), beforeSend: function (t, n) {
                    return a._trigger("beforeLoad", i, e.extend({jqXHR: t, ajaxSettings: n}, s))
                }
            }
        },
        _getPanelForTab: function (t) {
            var i = e(t).attr("aria-controls");
            return this.element.find(this._sanitizeSelector("#" + i))
        }
    })
})(jQuery);
(function (e) {
    function t(t, i) {
        var s = (t.attr("aria-describedby") || "").split(/\s+/);
        s.push(i), t.data("ui-tooltip-id", i).attr("aria-describedby", e.trim(s.join(" ")))
    }

    function i(t) {
        var i = t.data("ui-tooltip-id"), s = (t.attr("aria-describedby") || "").split(/\s+/), a = e.inArray(i, s);
        -1 !== a && s.splice(a, 1), t.removeData("ui-tooltip-id"), s = e.trim(s.join(" ")), s ? t.attr("aria-describedby", s) : t.removeAttr("aria-describedby")
    }

    var s = 0;
    e.widget("ui.tooltip", {
        version: "1.10.4", options: {
            content: function () {
                var t = e(this).attr("title") || "";
                return e("<a>").text(t).html()
            },
            hide: !0,
            items: "[title]:not([disabled])",
            position: {my: "left top+15", at: "left bottom", collision: "flipfit flip"},
            show: !0,
            tooltipClass: null,
            track: !1,
            close: null,
            open: null
        }, _create: function () {
            this._on({
                mouseover: "open",
                focusin: "open"
            }), this.tooltips = {}, this.parents = {}, this.options.disabled && this._disable()
        }, _setOption: function (t, i) {
            var s = this;
            return "disabled" === t ? (this[i ? "_disable" : "_enable"](), this.options[t] = i, void 0) : (this._super(t, i), "content" === t && e.each(this.tooltips, function (e, t) {
                s._updateContent(t)
            }), void 0)
        }, _disable: function () {
            var t = this;
            e.each(this.tooltips, function (i, s) {
                var a = e.Event("blur");
                a.target = a.currentTarget = s[0], t.close(a, !0)
            }), this.element.find(this.options.items).addBack().each(function () {
                var t = e(this);
                t.is("[title]") && t.data("ui-tooltip-title", t.attr("title")).attr("title", "")
            })
        }, _enable: function () {
            this.element.find(this.options.items).addBack().each(function () {
                var t = e(this);
                t.data("ui-tooltip-title") && t.attr("title", t.data("ui-tooltip-title"))
            })
        }, open: function (t) {
            var i = this, s = e(t ? t.target : this.element).closest(this.options.items);
            s.length && !s.data("ui-tooltip-id") && (s.attr("title") && s.data("ui-tooltip-title", s.attr("title")), s.data("ui-tooltip-open", !0), t && "mouseover" === t.type && s.parents().each(function () {
                var t, s = e(this);
                s.data("ui-tooltip-open") && (t = e.Event("blur"), t.target = t.currentTarget = this, i.close(t, !0)), s.attr("title") && (s.uniqueId(), i.parents[this.id] = {
                    element: this,
                    title: s.attr("title")
                }, s.attr("title", ""))
            }), this._updateContent(s, t))
        }, _updateContent: function (e, t) {
            var i, s = this.options.content, a = this, n = t ? t.type : null;
            return "string" == typeof s ? this._open(t, e, s) : (i = s.call(e[0], function (i) {
                e.data("ui-tooltip-open") && a._delay(function () {
                    t && (t.type = n), this._open(t, e, i)
                })
            }), i && this._open(t, e, i), void 0)
        }, _open: function (i, s, a) {
            function n(e) {
                l.of = e, r.is(":hidden") || r.position(l)
            }

            var r, o, h, l = e.extend({}, this.options.position);
            if (a) {
                if (r = this._find(s), r.length) return r.find(".ui-tooltip-content").html(a), void 0;
                s.is("[title]") && (i && "mouseover" === i.type ? s.attr("title", "") : s.removeAttr("title")), r = this._tooltip(s), t(s, r.attr("id")), r.find(".ui-tooltip-content").html(a), this.options.track && i && /^mouse/.test(i.type) ? (this._on(this.document, {mousemove: n}), n(i)) : r.position(e.extend({of: s}, this.options.position)), r.hide(), this._show(r, this.options.show), this.options.show && this.options.show.delay && (h = this.delayedShow = setInterval(function () {
                    r.is(":visible") && (n(l.of), clearInterval(h))
                }, e.fx.interval)), this._trigger("open", i, {tooltip: r}), o = {
                    keyup: function (t) {
                        if (t.keyCode === e.ui.keyCode.ESCAPE) {
                            var i = e.Event(t);
                            i.currentTarget = s[0], this.close(i, !0)
                        }
                    }, remove: function () {
                        this._removeTooltip(r)
                    }
                }, i && "mouseover" !== i.type || (o.mouseleave = "close"), i && "focusin" !== i.type || (o.focusout = "close"), this._on(!0, s, o)
            }
        }, close: function (t) {
            var s = this, a = e(t ? t.currentTarget : this.element), n = this._find(a);
            this.closing || (clearInterval(this.delayedShow), a.data("ui-tooltip-title") && a.attr("title", a.data("ui-tooltip-title")), i(a), n.stop(!0), this._hide(n, this.options.hide, function () {
                s._removeTooltip(e(this))
            }), a.removeData("ui-tooltip-open"), this._off(a, "mouseleave focusout keyup"), a[0] !== this.element[0] && this._off(a, "remove"), this._off(this.document, "mousemove"), t && "mouseleave" === t.type && e.each(this.parents, function (t, i) {
                e(i.element).attr("title", i.title), delete s.parents[t]
            }), this.closing = !0, this._trigger("close", t, {tooltip: n}), this.closing = !1)
        }, _tooltip: function (t) {
            var i = "ui-tooltip-" + s++, a = e("<div>").attr({
                id: i,
                role: "tooltip"
            }).addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content " + (this.options.tooltipClass || ""));
            return e("<div>").addClass("ui-tooltip-content").appendTo(a), a.appendTo(this.document[0].body), this.tooltips[i] = t, a
        }, _find: function (t) {
            var i = t.data("ui-tooltip-id");
            return i ? e("#" + i) : e()
        }, _removeTooltip: function (e) {
            e.remove(), delete this.tooltips[e.attr("id")]
        }, _destroy: function () {
            var t = this;
            e.each(this.tooltips, function (i, s) {
                var a = e.Event("blur");
                a.target = a.currentTarget = s[0], t.close(a, !0), e("#" + i).remove(), s.data("ui-tooltip-title") && (s.attr("title", s.data("ui-tooltip-title")), s.removeData("ui-tooltip-title"))
            })
        }
    })
})(jQuery);
(function (e, t) {
    var i = "ui-effects-";
    e.effects = {effect: {}}, function (e, t) {
        function i(e, t, i) {
            var s = d[t.type] || {};
            return null == e ? i || !t.def ? null : t.def : (e = s.floor ? ~~e : parseFloat(e), isNaN(e) ? t.def : s.mod ? (e + s.mod) % s.mod : 0 > e ? 0 : e > s.max ? s.max : e)
        }

        function s(i) {
            var s = l(), a = s._rgba = [];
            return i = i.toLowerCase(), m(h, function (e, n) {
                var r, o = n.re.exec(i), h = o && n.parse(o), l = n.space || "rgba";
                return h ? (r = s[l](h), s[u[l].cache] = r[u[l].cache], a = s._rgba = r._rgba, !1) : t
            }), a.length ? ("0,0,0,0" === a.join() && e.extend(a, n.transparent), s) : n[i]
        }

        function a(e, t, i) {
            return i = (i + 1) % 1, 1 > 6 * i ? e + 6 * (t - e) * i : 1 > 2 * i ? t : 2 > 3 * i ? e + 6 * (t - e) * (2 / 3 - i) : e
        }

        var n,
            r = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",
            o = /^([\-+])=\s*(\d+\.?\d*)/, h = [{
                re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                parse: function (e) {
                    return [e[1], e[2], e[3], e[4]]
                }
            }, {
                re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                parse: function (e) {
                    return [2.55 * e[1], 2.55 * e[2], 2.55 * e[3], e[4]]
                }
            }, {
                re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/, parse: function (e) {
                    return [parseInt(e[1], 16), parseInt(e[2], 16), parseInt(e[3], 16)]
                }
            }, {
                re: /#([a-f0-9])([a-f0-9])([a-f0-9])/, parse: function (e) {
                    return [parseInt(e[1] + e[1], 16), parseInt(e[2] + e[2], 16), parseInt(e[3] + e[3], 16)]
                }
            }, {
                re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                space: "hsla",
                parse: function (e) {
                    return [e[1], e[2] / 100, e[3] / 100, e[4]]
                }
            }], l = e.Color = function (t, i, s, a) {
                return new e.Color.fn.parse(t, i, s, a)
            }, u = {
                rgba: {
                    props: {
                        red: {idx: 0, type: "byte"},
                        green: {idx: 1, type: "byte"},
                        blue: {idx: 2, type: "byte"}
                    }
                },
                hsla: {
                    props: {
                        hue: {idx: 0, type: "degrees"},
                        saturation: {idx: 1, type: "percent"},
                        lightness: {idx: 2, type: "percent"}
                    }
                }
            }, d = {"byte": {floor: !0, max: 255}, percent: {max: 1}, degrees: {mod: 360, floor: !0}}, c = l.support = {},
            p = e("<p>")[0], m = e.each;
        p.style.cssText = "background-color:rgba(1,1,1,.5)", c.rgba = p.style.backgroundColor.indexOf("rgba") > -1, m(u, function (e, t) {
            t.cache = "_" + e, t.props.alpha = {idx: 3, type: "percent", def: 1}
        }), l.fn = e.extend(l.prototype, {
            parse: function (a, r, o, h) {
                if (a === t) return this._rgba = [null, null, null, null], this;
                (a.jquery || a.nodeType) && (a = e(a).css(r), r = t);
                var d = this, c = e.type(a), p = this._rgba = [];
                return r !== t && (a = [a, r, o, h], c = "array"), "string" === c ? this.parse(s(a) || n._default) : "array" === c ? (m(u.rgba.props, function (e, t) {
                    p[t.idx] = i(a[t.idx], t)
                }), this) : "object" === c ? (a instanceof l ? m(u, function (e, t) {
                    a[t.cache] && (d[t.cache] = a[t.cache].slice())
                }) : m(u, function (t, s) {
                    var n = s.cache;
                    m(s.props, function (e, t) {
                        if (!d[n] && s.to) {
                            if ("alpha" === e || null == a[e]) return;
                            d[n] = s.to(d._rgba)
                        }
                        d[n][t.idx] = i(a[e], t, !0)
                    }), d[n] && 0 > e.inArray(null, d[n].slice(0, 3)) && (d[n][3] = 1, s.from && (d._rgba = s.from(d[n])))
                }), this) : t
            }, is: function (e) {
                var i = l(e), s = !0, a = this;
                return m(u, function (e, n) {
                    var r, o = i[n.cache];
                    return o && (r = a[n.cache] || n.to && n.to(a._rgba) || [], m(n.props, function (e, i) {
                        return null != o[i.idx] ? s = o[i.idx] === r[i.idx] : t
                    })), s
                }), s
            }, _space: function () {
                var e = [], t = this;
                return m(u, function (i, s) {
                    t[s.cache] && e.push(i)
                }), e.pop()
            }, transition: function (e, t) {
                var s = l(e), a = s._space(), n = u[a], r = 0 === this.alpha() ? l("transparent") : this,
                    o = r[n.cache] || n.to(r._rgba), h = o.slice();
                return s = s[n.cache], m(n.props, function (e, a) {
                    var n = a.idx, r = o[n], l = s[n], u = d[a.type] || {};
                    null !== l && (null === r ? h[n] = l : (u.mod && (l - r > u.mod / 2 ? r += u.mod : r - l > u.mod / 2 && (r -= u.mod)), h[n] = i((l - r) * t + r, a)))
                }), this[a](h)
            }, blend: function (t) {
                if (1 === this._rgba[3]) return this;
                var i = this._rgba.slice(), s = i.pop(), a = l(t)._rgba;
                return l(e.map(i, function (e, t) {
                    return (1 - s) * a[t] + s * e
                }))
            }, toRgbaString: function () {
                var t = "rgba(", i = e.map(this._rgba, function (e, t) {
                    return null == e ? t > 2 ? 1 : 0 : e
                });
                return 1 === i[3] && (i.pop(), t = "rgb("), t + i.join() + ")"
            }, toHslaString: function () {
                var t = "hsla(", i = e.map(this.hsla(), function (e, t) {
                    return null == e && (e = t > 2 ? 1 : 0), t && 3 > t && (e = Math.round(100 * e) + "%"), e
                });
                return 1 === i[3] && (i.pop(), t = "hsl("), t + i.join() + ")"
            }, toHexString: function (t) {
                var i = this._rgba.slice(), s = i.pop();
                return t && i.push(~~(255 * s)), "#" + e.map(i, function (e) {
                    return e = (e || 0).toString(16), 1 === e.length ? "0" + e : e
                }).join("")
            }, toString: function () {
                return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
            }
        }), l.fn.parse.prototype = l.fn, u.hsla.to = function (e) {
            if (null == e[0] || null == e[1] || null == e[2]) return [null, null, null, e[3]];
            var t, i, s = e[0] / 255, a = e[1] / 255, n = e[2] / 255, r = e[3], o = Math.max(s, a, n),
                h = Math.min(s, a, n), l = o - h, u = o + h, d = .5 * u;
            return t = h === o ? 0 : s === o ? 60 * (a - n) / l + 360 : a === o ? 60 * (n - s) / l + 120 : 60 * (s - a) / l + 240, i = 0 === l ? 0 : .5 >= d ? l / u : l / (2 - u), [Math.round(t) % 360, i, d, null == r ? 1 : r]
        }, u.hsla.from = function (e) {
            if (null == e[0] || null == e[1] || null == e[2]) return [null, null, null, e[3]];
            var t = e[0] / 360, i = e[1], s = e[2], n = e[3], r = .5 >= s ? s * (1 + i) : s + i - s * i, o = 2 * s - r;
            return [Math.round(255 * a(o, r, t + 1 / 3)), Math.round(255 * a(o, r, t)), Math.round(255 * a(o, r, t - 1 / 3)), n]
        }, m(u, function (s, a) {
            var n = a.props, r = a.cache, h = a.to, u = a.from;
            l.fn[s] = function (s) {
                if (h && !this[r] && (this[r] = h(this._rgba)), s === t) return this[r].slice();
                var a, o = e.type(s), d = "array" === o || "object" === o ? s : arguments, c = this[r].slice();
                return m(n, function (e, t) {
                    var s = d["object" === o ? e : t.idx];
                    null == s && (s = c[t.idx]), c[t.idx] = i(s, t)
                }), u ? (a = l(u(c)), a[r] = c, a) : l(c)
            }, m(n, function (t, i) {
                l.fn[t] || (l.fn[t] = function (a) {
                    var n, r = e.type(a), h = "alpha" === t ? this._hsla ? "hsla" : "rgba" : s, l = this[h](),
                        u = l[i.idx];
                    return "undefined" === r ? u : ("function" === r && (a = a.call(this, u), r = e.type(a)), null == a && i.empty ? this : ("string" === r && (n = o.exec(a), n && (a = u + parseFloat(n[2]) * ("+" === n[1] ? 1 : -1))), l[i.idx] = a, this[h](l)))
                })
            })
        }), l.hook = function (t) {
            var i = t.split(" ");
            m(i, function (t, i) {
                e.cssHooks[i] = {
                    set: function (t, a) {
                        var n, r, o = "";
                        if ("transparent" !== a && ("string" !== e.type(a) || (n = s(a)))) {
                            if (a = l(n || a), !c.rgba && 1 !== a._rgba[3]) {
                                for (r = "backgroundColor" === i ? t.parentNode : t; ("" === o || "transparent" === o) && r && r.style;) try {
                                    o = e.css(r, "backgroundColor"), r = r.parentNode
                                } catch (h) {
                                }
                                a = a.blend(o && "transparent" !== o ? o : "_default")
                            }
                            a = a.toRgbaString()
                        }
                        try {
                            t.style[i] = a
                        } catch (h) {
                        }
                    }
                }, e.fx.step[i] = function (t) {
                    t.colorInit || (t.start = l(t.elem, i), t.end = l(t.end), t.colorInit = !0), e.cssHooks[i].set(t.elem, t.start.transition(t.end, t.pos))
                }
            })
        }, l.hook(r), e.cssHooks.borderColor = {
            expand: function (e) {
                var t = {};
                return m(["Top", "Right", "Bottom", "Left"], function (i, s) {
                    t["border" + s + "Color"] = e
                }), t
            }
        }, n = e.Color.names = {
            aqua: "#00ffff",
            black: "#000000",
            blue: "#0000ff",
            fuchsia: "#ff00ff",
            gray: "#808080",
            green: "#008000",
            lime: "#00ff00",
            maroon: "#800000",
            navy: "#000080",
            olive: "#808000",
            purple: "#800080",
            red: "#ff0000",
            silver: "#c0c0c0",
            teal: "#008080",
            white: "#ffffff",
            yellow: "#ffff00",
            transparent: [null, null, null, 0],
            _default: "#ffffff"
        }
    }(jQuery), function () {
        function i(t) {
            var i, s,
                a = t.ownerDocument.defaultView ? t.ownerDocument.defaultView.getComputedStyle(t, null) : t.currentStyle,
                n = {};
            if (a && a.length && a[0] && a[a[0]]) for (s = a.length; s--;) i = a[s], "string" == typeof a[i] && (n[e.camelCase(i)] = a[i]); else for (i in a) "string" == typeof a[i] && (n[i] = a[i]);
            return n
        }

        function s(t, i) {
            var s, a, r = {};
            for (s in i) a = i[s], t[s] !== a && (n[s] || (e.fx.step[s] || !isNaN(parseFloat(a))) && (r[s] = a));
            return r
        }

        var a = ["add", "remove", "toggle"], n = {
            border: 1,
            borderBottom: 1,
            borderColor: 1,
            borderLeft: 1,
            borderRight: 1,
            borderTop: 1,
            borderWidth: 1,
            margin: 1,
            padding: 1
        };
        e.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function (t, i) {
            e.fx.step[i] = function (e) {
                ("none" !== e.end && !e.setAttr || 1 === e.pos && !e.setAttr) && (jQuery.style(e.elem, i, e.end), e.setAttr = !0)
            }
        }), e.fn.addBack || (e.fn.addBack = function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }), e.effects.animateClass = function (t, n, r, o) {
            var h = e.speed(n, r, o);
            return this.queue(function () {
                var n, r = e(this), o = r.attr("class") || "", l = h.children ? r.find("*").addBack() : r;
                l = l.map(function () {
                    var t = e(this);
                    return {el: t, start: i(this)}
                }), n = function () {
                    e.each(a, function (e, i) {
                        t[i] && r[i + "Class"](t[i])
                    })
                }, n(), l = l.map(function () {
                    return this.end = i(this.el[0]), this.diff = s(this.start, this.end), this
                }), r.attr("class", o), l = l.map(function () {
                    var t = this, i = e.Deferred(), s = e.extend({}, h, {
                        queue: !1, complete: function () {
                            i.resolve(t)
                        }
                    });
                    return this.el.animate(this.diff, s), i.promise()
                }), e.when.apply(e, l.get()).done(function () {
                    n(), e.each(arguments, function () {
                        var t = this.el;
                        e.each(this.diff, function (e) {
                            t.css(e, "")
                        })
                    }), h.complete.call(r[0])
                })
            })
        }, e.fn.extend({
            addClass: function (t) {
                return function (i, s, a, n) {
                    return s ? e.effects.animateClass.call(this, {add: i}, s, a, n) : t.apply(this, arguments)
                }
            }(e.fn.addClass), removeClass: function (t) {
                return function (i, s, a, n) {
                    return arguments.length > 1 ? e.effects.animateClass.call(this, {remove: i}, s, a, n) : t.apply(this, arguments)
                }
            }(e.fn.removeClass), toggleClass: function (i) {
                return function (s, a, n, r, o) {
                    return "boolean" == typeof a || a === t ? n ? e.effects.animateClass.call(this, a ? {add: s} : {remove: s}, n, r, o) : i.apply(this, arguments) : e.effects.animateClass.call(this, {toggle: s}, a, n, r)
                }
            }(e.fn.toggleClass), switchClass: function (t, i, s, a, n) {
                return e.effects.animateClass.call(this, {add: i, remove: t}, s, a, n)
            }
        })
    }(), function () {
        function s(t, i, s, a) {
            return e.isPlainObject(t) && (i = t, t = t.effect), t = {effect: t}, null == i && (i = {}), e.isFunction(i) && (a = i, s = null, i = {}), ("number" == typeof i || e.fx.speeds[i]) && (a = s, s = i, i = {}), e.isFunction(s) && (a = s, s = null), i && e.extend(t, i), s = s || i.duration, t.duration = e.fx.off ? 0 : "number" == typeof s ? s : s in e.fx.speeds ? e.fx.speeds[s] : e.fx.speeds._default, t.complete = a || i.complete, t
        }

        function a(t) {
            return !t || "number" == typeof t || e.fx.speeds[t] ? !0 : "string" != typeof t || e.effects.effect[t] ? e.isFunction(t) ? !0 : "object" != typeof t || t.effect ? !1 : !0 : !0
        }

        e.extend(e.effects, {
            version: "1.10.4", save: function (e, t) {
                for (var s = 0; t.length > s; s++) null !== t[s] && e.data(i + t[s], e[0].style[t[s]])
            }, restore: function (e, s) {
                var a, n;
                for (n = 0; s.length > n; n++) null !== s[n] && (a = e.data(i + s[n]), a === t && (a = ""), e.css(s[n], a))
            }, setMode: function (e, t) {
                return "toggle" === t && (t = e.is(":hidden") ? "show" : "hide"), t
            }, getBaseline: function (e, t) {
                var i, s;
                switch (e[0]) {
                    case"top":
                        i = 0;
                        break;
                    case"middle":
                        i = .5;
                        break;
                    case"bottom":
                        i = 1;
                        break;
                    default:
                        i = e[0] / t.height
                }
                switch (e[1]) {
                    case"left":
                        s = 0;
                        break;
                    case"center":
                        s = .5;
                        break;
                    case"right":
                        s = 1;
                        break;
                    default:
                        s = e[1] / t.width
                }
                return {x: s, y: i}
            }, createWrapper: function (t) {
                if (t.parent().is(".ui-effects-wrapper")) return t.parent();
                var i = {width: t.outerWidth(!0), height: t.outerHeight(!0), "float": t.css("float")},
                    s = e("<div></div>").addClass("ui-effects-wrapper").css({
                        fontSize: "100%",
                        background: "transparent",
                        border: "none",
                        margin: 0,
                        padding: 0
                    }), a = {width: t.width(), height: t.height()}, n = document.activeElement;
                try {
                    n.id
                } catch (r) {
                    n = document.body
                }
                return t.wrap(s), (t[0] === n || e.contains(t[0], n)) && e(n).focus(), s = t.parent(), "static" === t.css("position") ? (s.css({position: "relative"}), t.css({position: "relative"})) : (e.extend(i, {
                    position: t.css("position"),
                    zIndex: t.css("z-index")
                }), e.each(["top", "left", "bottom", "right"], function (e, s) {
                    i[s] = t.css(s), isNaN(parseInt(i[s], 10)) && (i[s] = "auto")
                }), t.css({
                    position: "relative",
                    top: 0,
                    left: 0,
                    right: "auto",
                    bottom: "auto"
                })), t.css(a), s.css(i).show()
            }, removeWrapper: function (t) {
                var i = document.activeElement;
                return t.parent().is(".ui-effects-wrapper") && (t.parent().replaceWith(t), (t[0] === i || e.contains(t[0], i)) && e(i).focus()), t
            }, setTransition: function (t, i, s, a) {
                return a = a || {}, e.each(i, function (e, i) {
                    var n = t.cssUnit(i);
                    n[0] > 0 && (a[i] = n[0] * s + n[1])
                }), a
            }
        }), e.fn.extend({
            effect: function () {
                function t(t) {
                    function s() {
                        e.isFunction(n) && n.call(a[0]), e.isFunction(t) && t()
                    }

                    var a = e(this), n = i.complete, o = i.mode;
                    (a.is(":hidden") ? "hide" === o : "show" === o) ? (a[o](), s()) : r.call(a[0], i, s)
                }

                var i = s.apply(this, arguments), a = i.mode, n = i.queue, r = e.effects.effect[i.effect];
                return e.fx.off || !r ? a ? this[a](i.duration, i.complete) : this.each(function () {
                    i.complete && i.complete.call(this)
                }) : n === !1 ? this.each(t) : this.queue(n || "fx", t)
            }, show: function (e) {
                return function (t) {
                    if (a(t)) return e.apply(this, arguments);
                    var i = s.apply(this, arguments);
                    return i.mode = "show", this.effect.call(this, i)
                }
            }(e.fn.show), hide: function (e) {
                return function (t) {
                    if (a(t)) return e.apply(this, arguments);
                    var i = s.apply(this, arguments);
                    return i.mode = "hide", this.effect.call(this, i)
                }
            }(e.fn.hide), toggle: function (e) {
                return function (t) {
                    if (a(t) || "boolean" == typeof t) return e.apply(this, arguments);
                    var i = s.apply(this, arguments);
                    return i.mode = "toggle", this.effect.call(this, i)
                }
            }(e.fn.toggle), cssUnit: function (t) {
                var i = this.css(t), s = [];
                return e.each(["em", "px", "%", "pt"], function (e, t) {
                    i.indexOf(t) > 0 && (s = [parseFloat(i), t])
                }), s
            }
        })
    }(), function () {
        var t = {};
        e.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function (e, i) {
            t[i] = function (t) {
                return Math.pow(t, e + 2)
            }
        }), e.extend(t, {
            Sine: function (e) {
                return 1 - Math.cos(e * Math.PI / 2)
            }, Circ: function (e) {
                return 1 - Math.sqrt(1 - e * e)
            }, Elastic: function (e) {
                return 0 === e || 1 === e ? e : -Math.pow(2, 8 * (e - 1)) * Math.sin((80 * (e - 1) - 7.5) * Math.PI / 15)
            }, Back: function (e) {
                return e * e * (3 * e - 2)
            }, Bounce: function (e) {
                for (var t, i = 4; ((t = Math.pow(2, --i)) - 1) / 11 > e;) ;
                return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * t - 2) / 22 - e, 2)
            }
        }), e.each(t, function (t, i) {
            e.easing["easeIn" + t] = i, e.easing["easeOut" + t] = function (e) {
                return 1 - i(1 - e)
            }, e.easing["easeInOut" + t] = function (e) {
                return .5 > e ? i(2 * e) / 2 : 1 - i(-2 * e + 2) / 2
            }
        })
    }()
})(jQuery);
(function (e) {
    var t = /up|down|vertical/, i = /up|left|vertical|horizontal/;
    e.effects.effect.blind = function (s, a) {
        var n, r, o, h = e(this), l = ["position", "top", "bottom", "left", "right", "height", "width"],
            u = e.effects.setMode(h, s.mode || "hide"), d = s.direction || "up", c = t.test(d),
            p = c ? "height" : "width", m = c ? "top" : "left", f = i.test(d), g = {}, v = "show" === u;
        h.parent().is(".ui-effects-wrapper") ? e.effects.save(h.parent(), l) : e.effects.save(h, l), h.show(), n = e.effects.createWrapper(h).css({overflow: "hidden"}), r = n[p](), o = parseFloat(n.css(m)) || 0, g[p] = v ? r : 0, f || (h.css(c ? "bottom" : "right", 0).css(c ? "top" : "left", "auto").css({position: "absolute"}), g[m] = v ? o : r + o), v && (n.css(p, 0), f || n.css(m, o + r)), n.animate(g, {
            duration: s.duration,
            easing: s.easing,
            queue: !1,
            complete: function () {
                "hide" === u && h.hide(), e.effects.restore(h, l), e.effects.removeWrapper(h), a()
            }
        })
    }
})(jQuery);
(function (e) {
    e.effects.effect.bounce = function (t, i) {
        var s, a, n, r = e(this), o = ["position", "top", "bottom", "left", "right", "height", "width"],
            h = e.effects.setMode(r, t.mode || "effect"), l = "hide" === h, u = "show" === h, d = t.direction || "up",
            c = t.distance, p = t.times || 5, m = 2 * p + (u || l ? 1 : 0), f = t.duration / m, g = t.easing,
            v = "up" === d || "down" === d ? "top" : "left", y = "up" === d || "left" === d, b = r.queue(),
            _ = b.length;
        for ((u || l) && o.push("opacity"), e.effects.save(r, o), r.show(), e.effects.createWrapper(r), c || (c = r["top" === v ? "outerHeight" : "outerWidth"]() / 3), u && (n = {opacity: 1}, n[v] = 0, r.css("opacity", 0).css(v, y ? 2 * -c : 2 * c).animate(n, f, g)), l && (c /= Math.pow(2, p - 1)), n = {}, n[v] = 0, s = 0; p > s; s++) a = {}, a[v] = (y ? "-=" : "+=") + c, r.animate(a, f, g).animate(n, f, g), c = l ? 2 * c : c / 2;
        l && (a = {opacity: 0}, a[v] = (y ? "-=" : "+=") + c, r.animate(a, f, g)), r.queue(function () {
            l && r.hide(), e.effects.restore(r, o), e.effects.removeWrapper(r), i()
        }), _ > 1 && b.splice.apply(b, [1, 0].concat(b.splice(_, m + 1))), r.dequeue()
    }
})(jQuery);
(function (e) {
    e.effects.effect.clip = function (t, i) {
        var s, a, n, r = e(this), o = ["position", "top", "bottom", "left", "right", "height", "width"],
            h = e.effects.setMode(r, t.mode || "hide"), l = "show" === h, u = t.direction || "vertical",
            d = "vertical" === u, c = d ? "height" : "width", p = d ? "top" : "left", m = {};
        e.effects.save(r, o), r.show(), s = e.effects.createWrapper(r).css({overflow: "hidden"}), a = "IMG" === r[0].tagName ? s : r, n = a[c](), l && (a.css(c, 0), a.css(p, n / 2)), m[c] = l ? n : 0, m[p] = l ? 0 : n / 2, a.animate(m, {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: function () {
                l || r.hide(), e.effects.restore(r, o), e.effects.removeWrapper(r), i()
            }
        })
    }
})(jQuery);
(function (e) {
    e.effects.effect.drop = function (t, i) {
        var s, a = e(this), n = ["position", "top", "bottom", "left", "right", "opacity", "height", "width"],
            r = e.effects.setMode(a, t.mode || "hide"), o = "show" === r, h = t.direction || "left",
            l = "up" === h || "down" === h ? "top" : "left", u = "up" === h || "left" === h ? "pos" : "neg",
            d = {opacity: o ? 1 : 0};
        e.effects.save(a, n), a.show(), e.effects.createWrapper(a), s = t.distance || a["top" === l ? "outerHeight" : "outerWidth"](!0) / 2, o && a.css("opacity", 0).css(l, "pos" === u ? -s : s), d[l] = (o ? "pos" === u ? "+=" : "-=" : "pos" === u ? "-=" : "+=") + s, a.animate(d, {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: function () {
                "hide" === r && a.hide(), e.effects.restore(a, n), e.effects.removeWrapper(a), i()
            }
        })
    }
})(jQuery);
(function (e) {
    e.effects.effect.explode = function (t, i) {
        function s() {
            b.push(this), b.length === d * c && a()
        }

        function a() {
            p.css({visibility: "visible"}), e(b).remove(), f || p.hide(), i()
        }

        var n, r, o, h, l, u, d = t.pieces ? Math.round(Math.sqrt(t.pieces)) : 3, c = d, p = e(this),
            m = e.effects.setMode(p, t.mode || "hide"), f = "show" === m,
            g = p.show().css("visibility", "hidden").offset(), v = Math.ceil(p.outerWidth() / c),
            y = Math.ceil(p.outerHeight() / d), b = [];
        for (n = 0; d > n; n++) for (h = g.top + n * y, u = n - (d - 1) / 2, r = 0; c > r; r++) o = g.left + r * v, l = r - (c - 1) / 2, p.clone().appendTo("body").wrap("<div></div>").css({
            position: "absolute",
            visibility: "visible",
            left: -r * v,
            top: -n * y
        }).parent().addClass("ui-effects-explode").css({
            position: "absolute",
            overflow: "hidden",
            width: v,
            height: y,
            left: o + (f ? l * v : 0),
            top: h + (f ? u * y : 0),
            opacity: f ? 0 : 1
        }).animate({
            left: o + (f ? 0 : l * v),
            top: h + (f ? 0 : u * y),
            opacity: f ? 1 : 0
        }, t.duration || 500, t.easing, s)
    }
})(jQuery);
(function (e) {
    e.effects.effect.fade = function (t, i) {
        var s = e(this), a = e.effects.setMode(s, t.mode || "toggle");
        s.animate({opacity: a}, {queue: !1, duration: t.duration, easing: t.easing, complete: i})
    }
})(jQuery);
(function (e) {
    e.effects.effect.fold = function (t, i) {
        var s, a, n = e(this), r = ["position", "top", "bottom", "left", "right", "height", "width"],
            o = e.effects.setMode(n, t.mode || "hide"), h = "show" === o, l = "hide" === o, u = t.size || 15,
            d = /([0-9]+)%/.exec(u), c = !!t.horizFirst, p = h !== c, m = p ? ["width", "height"] : ["height", "width"],
            f = t.duration / 2, g = {}, v = {};
        e.effects.save(n, r), n.show(), s = e.effects.createWrapper(n).css({overflow: "hidden"}), a = p ? [s.width(), s.height()] : [s.height(), s.width()], d && (u = parseInt(d[1], 10) / 100 * a[l ? 0 : 1]), h && s.css(c ? {
            height: 0,
            width: u
        } : {
            height: u,
            width: 0
        }), g[m[0]] = h ? a[0] : u, v[m[1]] = h ? a[1] : 0, s.animate(g, f, t.easing).animate(v, f, t.easing, function () {
            l && n.hide(), e.effects.restore(n, r), e.effects.removeWrapper(n), i()
        })
    }
})(jQuery);
(function (e) {
    e.effects.effect.highlight = function (t, i) {
        var s = e(this), a = ["backgroundImage", "backgroundColor", "opacity"],
            n = e.effects.setMode(s, t.mode || "show"), r = {backgroundColor: s.css("backgroundColor")};
        "hide" === n && (r.opacity = 0), e.effects.save(s, a), s.show().css({
            backgroundImage: "none",
            backgroundColor: t.color || "#ffff99"
        }).animate(r, {
            queue: !1, duration: t.duration, easing: t.easing, complete: function () {
                "hide" === n && s.hide(), e.effects.restore(s, a), i()
            }
        })
    }
})(jQuery);
(function (e) {
    e.effects.effect.pulsate = function (t, i) {
        var s, a = e(this), n = e.effects.setMode(a, t.mode || "show"), r = "show" === n, o = "hide" === n,
            h = r || "hide" === n, l = 2 * (t.times || 5) + (h ? 1 : 0), u = t.duration / l, d = 0, c = a.queue(),
            p = c.length;
        for ((r || !a.is(":visible")) && (a.css("opacity", 0).show(), d = 1), s = 1; l > s; s++) a.animate({opacity: d}, u, t.easing), d = 1 - d;
        a.animate({opacity: d}, u, t.easing), a.queue(function () {
            o && a.hide(), i()
        }), p > 1 && c.splice.apply(c, [1, 0].concat(c.splice(p, l + 1))), a.dequeue()
    }
})(jQuery);
(function (e) {
    e.effects.effect.puff = function (t, i) {
        var s = e(this), a = e.effects.setMode(s, t.mode || "hide"), n = "hide" === a,
            r = parseInt(t.percent, 10) || 150, o = r / 100,
            h = {height: s.height(), width: s.width(), outerHeight: s.outerHeight(), outerWidth: s.outerWidth()};
        e.extend(t, {
            effect: "scale",
            queue: !1,
            fade: !0,
            mode: a,
            complete: i,
            percent: n ? r : 100,
            from: n ? h : {
                height: h.height * o,
                width: h.width * o,
                outerHeight: h.outerHeight * o,
                outerWidth: h.outerWidth * o
            }
        }), s.effect(t)
    }, e.effects.effect.scale = function (t, i) {
        var s = e(this), a = e.extend(!0, {}, t), n = e.effects.setMode(s, t.mode || "effect"),
            r = parseInt(t.percent, 10) || (0 === parseInt(t.percent, 10) ? 0 : "hide" === n ? 0 : 100),
            o = t.direction || "both", h = t.origin,
            l = {height: s.height(), width: s.width(), outerHeight: s.outerHeight(), outerWidth: s.outerWidth()},
            u = {y: "horizontal" !== o ? r / 100 : 1, x: "vertical" !== o ? r / 100 : 1};
        a.effect = "size", a.queue = !1, a.complete = i, "effect" !== n && (a.origin = h || ["middle", "center"], a.restore = !0), a.from = t.from || ("show" === n ? {
            height: 0,
            width: 0,
            outerHeight: 0,
            outerWidth: 0
        } : l), a.to = {
            height: l.height * u.y,
            width: l.width * u.x,
            outerHeight: l.outerHeight * u.y,
            outerWidth: l.outerWidth * u.x
        }, a.fade && ("show" === n && (a.from.opacity = 0, a.to.opacity = 1), "hide" === n && (a.from.opacity = 1, a.to.opacity = 0)), s.effect(a)
    }, e.effects.effect.size = function (t, i) {
        var s, a, n, r = e(this),
            o = ["position", "top", "bottom", "left", "right", "width", "height", "overflow", "opacity"],
            h = ["position", "top", "bottom", "left", "right", "overflow", "opacity"],
            l = ["width", "height", "overflow"], u = ["fontSize"],
            d = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"],
            c = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"],
            p = e.effects.setMode(r, t.mode || "effect"), m = t.restore || "effect" !== p, f = t.scale || "both",
            g = t.origin || ["middle", "center"], v = r.css("position"), y = m ? o : h,
            b = {height: 0, width: 0, outerHeight: 0, outerWidth: 0};
        "show" === p && r.show(), s = {
            height: r.height(),
            width: r.width(),
            outerHeight: r.outerHeight(),
            outerWidth: r.outerWidth()
        }, "toggle" === t.mode && "show" === p ? (r.from = t.to || b, r.to = t.from || s) : (r.from = t.from || ("show" === p ? b : s), r.to = t.to || ("hide" === p ? b : s)), n = {
            from: {
                y: r.from.height / s.height,
                x: r.from.width / s.width
            }, to: {y: r.to.height / s.height, x: r.to.width / s.width}
        }, ("box" === f || "both" === f) && (n.from.y !== n.to.y && (y = y.concat(d), r.from = e.effects.setTransition(r, d, n.from.y, r.from), r.to = e.effects.setTransition(r, d, n.to.y, r.to)), n.from.x !== n.to.x && (y = y.concat(c), r.from = e.effects.setTransition(r, c, n.from.x, r.from), r.to = e.effects.setTransition(r, c, n.to.x, r.to))), ("content" === f || "both" === f) && n.from.y !== n.to.y && (y = y.concat(u).concat(l), r.from = e.effects.setTransition(r, u, n.from.y, r.from), r.to = e.effects.setTransition(r, u, n.to.y, r.to)), e.effects.save(r, y), r.show(), e.effects.createWrapper(r), r.css("overflow", "hidden").css(r.from), g && (a = e.effects.getBaseline(g, s), r.from.top = (s.outerHeight - r.outerHeight()) * a.y, r.from.left = (s.outerWidth - r.outerWidth()) * a.x, r.to.top = (s.outerHeight - r.to.outerHeight) * a.y, r.to.left = (s.outerWidth - r.to.outerWidth) * a.x), r.css(r.from), ("content" === f || "both" === f) && (d = d.concat(["marginTop", "marginBottom"]).concat(u), c = c.concat(["marginLeft", "marginRight"]), l = o.concat(d).concat(c), r.find("*[width]").each(function () {
            var i = e(this),
                s = {height: i.height(), width: i.width(), outerHeight: i.outerHeight(), outerWidth: i.outerWidth()};
            m && e.effects.save(i, l), i.from = {
                height: s.height * n.from.y,
                width: s.width * n.from.x,
                outerHeight: s.outerHeight * n.from.y,
                outerWidth: s.outerWidth * n.from.x
            }, i.to = {
                height: s.height * n.to.y,
                width: s.width * n.to.x,
                outerHeight: s.height * n.to.y,
                outerWidth: s.width * n.to.x
            }, n.from.y !== n.to.y && (i.from = e.effects.setTransition(i, d, n.from.y, i.from), i.to = e.effects.setTransition(i, d, n.to.y, i.to)), n.from.x !== n.to.x && (i.from = e.effects.setTransition(i, c, n.from.x, i.from), i.to = e.effects.setTransition(i, c, n.to.x, i.to)), i.css(i.from), i.animate(i.to, t.duration, t.easing, function () {
                m && e.effects.restore(i, l)
            })
        })), r.animate(r.to, {
            queue: !1, duration: t.duration, easing: t.easing, complete: function () {
                0 === r.to.opacity && r.css("opacity", r.from.opacity), "hide" === p && r.hide(), e.effects.restore(r, y), m || ("static" === v ? r.css({
                    position: "relative",
                    top: r.to.top,
                    left: r.to.left
                }) : e.each(["top", "left"], function (e, t) {
                    r.css(t, function (t, i) {
                        var s = parseInt(i, 10), a = e ? r.to.left : r.to.top;
                        return "auto" === i ? a + "px" : s + a + "px"
                    })
                })), e.effects.removeWrapper(r), i()
            }
        })
    }
})(jQuery);
(function (e) {
    e.effects.effect.shake = function (t, i) {
        var s, a = e(this), n = ["position", "top", "bottom", "left", "right", "height", "width"],
            r = e.effects.setMode(a, t.mode || "effect"), o = t.direction || "left", h = t.distance || 20,
            l = t.times || 3, u = 2 * l + 1, d = Math.round(t.duration / u),
            c = "up" === o || "down" === o ? "top" : "left", p = "up" === o || "left" === o, m = {}, f = {}, g = {},
            v = a.queue(), y = v.length;
        for (e.effects.save(a, n), a.show(), e.effects.createWrapper(a), m[c] = (p ? "-=" : "+=") + h, f[c] = (p ? "+=" : "-=") + 2 * h, g[c] = (p ? "-=" : "+=") + 2 * h, a.animate(m, d, t.easing), s = 1; l > s; s++) a.animate(f, d, t.easing).animate(g, d, t.easing);
        a.animate(f, d, t.easing).animate(m, d / 2, t.easing).queue(function () {
            "hide" === r && a.hide(), e.effects.restore(a, n), e.effects.removeWrapper(a), i()
        }), y > 1 && v.splice.apply(v, [1, 0].concat(v.splice(y, u + 1))), a.dequeue()
    }
})(jQuery);
(function (e) {
    e.effects.effect.slide = function (t, i) {
        var s, a = e(this), n = ["position", "top", "bottom", "left", "right", "width", "height"],
            r = e.effects.setMode(a, t.mode || "show"), o = "show" === r, h = t.direction || "left",
            l = "up" === h || "down" === h ? "top" : "left", u = "up" === h || "left" === h, d = {};
        e.effects.save(a, n), a.show(), s = t.distance || a["top" === l ? "outerHeight" : "outerWidth"](!0), e.effects.createWrapper(a).css({overflow: "hidden"}), o && a.css(l, u ? isNaN(s) ? "-" + s : -s : s), d[l] = (o ? u ? "+=" : "-=" : u ? "-=" : "+=") + s, a.animate(d, {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: function () {
                "hide" === r && a.hide(), e.effects.restore(a, n), e.effects.removeWrapper(a), i()
            }
        })
    }
})(jQuery);
(function (e) {
    e.effects.effect.transfer = function (t, i) {
        var s = e(this), a = e(t.to), n = "fixed" === a.css("position"), r = e("body"), o = n ? r.scrollTop() : 0,
            h = n ? r.scrollLeft() : 0, l = a.offset(),
            u = {top: l.top - o, left: l.left - h, height: a.innerHeight(), width: a.innerWidth()}, d = s.offset(),
            c = e("<div class='ui-effects-transfer'></div>").appendTo(document.body).addClass(t.className).css({
                top: d.top - o,
                left: d.left - h,
                height: s.innerHeight(),
                width: s.innerWidth(),
                position: n ? "fixed" : "absolute"
            }).animate(u, t.duration, t.easing, function () {
                c.remove(), i()
            })
    }
})(jQuery);